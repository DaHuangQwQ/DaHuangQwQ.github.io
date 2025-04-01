# MCP

模型上下文协议（MCP）是一个创新的开源协议，它重新定义了大语言模型（LLM）与外部世界的互动方式。MCP 提供了一种标准化方法，使任意大语音模型能够轻松连接各种数据源和工具，实现信息的无缝访问和处理。MCP 就像是 AI 应用程序的 USB-C 接口，为 AI 模型提供了一种标准化的方式来连接不同的数据源和工具。

MCP 有以下几个核心功能：

- Resources 资源
- Prompts 提示词
- Tools 工具
- Sampling 采样
- Roots 根目录
- Transports 传输层

因为大部分功能其实都是服务于 Claude 客户端的，本文更希望编写的 MCP 服务器服务与通用大语言模型，所以本文将会主要以“工具”为重点，其他功能会放到最后进行简单讲解。

其中 MCP 的传输层支持了 2 种协议的实现：stdio（标准输入/输出）和 SSE（服务器发送事件），因为 stdio 更为常用，所以本文会以 stdio 为例进行讲解。

本文将会使用 3.11 的 Python 版本，并使用 uv 来管理 Python 项目。同时代码将会在文末放到 Github 上，废话不多说，我们这就开始吧~

## 开发 MCP 服务器

### 初始化项目

```shell
# 初始化项目
uv init mcp-demo
cd mcp-demo

# 创建虚拟环境并进入虚拟环境
uv venv
.venv\Scripts\activate.bat

# 安装依赖
uv add "mcp[cli]" httpx openai
```



```python
import httpx
from mcp.server import FastMCP

# # 初始化 FastMCP 服务器
app = FastMCP('web-search')
```



### 工具描述

实现执行的方法非常简单，MCP 为我们提供了一个 `@mcp.tool()` 我们只需要将实现函数用这个装饰器装饰即可。函数名称将作为工具名称，参数将作为工具参数，并通过注释来描述工具与参数，以及返回值。

这里我们直接使用智普的接口，它这个接口不仅能帮我们搜索到相关的结果链接，并帮我们生成了对应链接中文章总结后的内容的，并且现阶段是免费的，非常适合我们。

> 官方文档：https://bigmodel.cn/dev/api/search-tool/web-search-pro
>
> API Key 生成地址：https://bigmodel.cn/usercenter/proj-mgmt/apikeys



```python
@app.tool()
async def web_search(query: str) -> str:
    """
    搜索互联网内容

    Args:
        query: 要搜索内容

    Returns:
        搜索结果的总结
    """

    async with httpx.AsyncClient() as client:
        response = await client.post(
            'https://open.bigmodel.cn/api/paas/v4/tools',
            headers={'Authorization': '换成你自己的API KEY'},
            json={
                'tool': 'web-search-pro',
                'messages': [
                    {'role': 'user', 'content': query}
                ],
                'stream': False
            }
        )

        res_data = []
        for choice in response.json()['choices']:
            for message in choice['message']['tool_calls']:
                search_results = message.get('search_result')
                if not search_results:
                    continue
                for result in search_results:
                    res_data.append(result['content'])

        return '\n\n\n'.join(res_data)
```



最后运行代码

```python
if __name__ == "__main__":
    app.run(transport='stdio')
```



## 调试 MCP 服务器

我们来使用官方提供的 `Inspector` 可视化工具来调试我们的服务器。



我们可以通过两种方法来运行`Inspector`：

> 请先确保已经安装了 node 环境。



通过 npx：

```shell
npx -y @modelcontextprotocol/inspector uv run web_search.py
```





通过 mcp dev 来运行：

```shell
mcp dev web_search.py
```



然后，我们打开这个地址，点击左侧的 `Connect` 按钮，即可连接我们刚写的服务。然后我们切换到 `Tools` 栏中，点击 `List Tools` 按钮即可看到我们刚写的工具，我们就可以开始进行调试啦。



## 开发 MCP 服务端

如何在服务端如何调用我们刚才开发的 MCP 服务器中的工具

```python
import asyncio

from mcp.client.stdio import stdio_client
from mcp import ClientSession, StdioServerParameters

# 为 stdio 连接创建服务器参数
server_params = StdioServerParameters(
    # 服务器执行的命令，这里我们使用 uv 来运行 web_search.py
    command='uv',
    # 运行的参数
    args=['run', 'web_search.py'],
    # 环境变量，默认为 None，表示使用当前环境变量
    # env=None
)


async def main():
    # 创建 stdio 客户端
    async with stdio_client(server_params) as (stdio, write):
        # 创建 ClientSession 对象
        async with ClientSession(stdio, write) as session:
            # 初始化 ClientSession
            await session.initialize()

            # 列出可用的工具
            response = await session.list_tools()
            print(response)

            # 调用工具
            response = await session.call_tool('web_search', {'query': '今天杭州天气'})
            print(response)


if __name__ == '__main__':
    asyncio.run(main())
```





## Sampling 讲解

MCP 还为我们提供了一个 `Sampling` 的功能，这个如果从字面来理解会让人摸不到头脑，但实际上这个功能就给了我们一个在执行工具的前后的接口，我们可以在工具执行前后来执行一些操作。比如，当调用本地文件的删除的工具的时候，肯定是期望我们确认后再进行删除。那么，此时就可以使用这个功能。

下面我们就来实现这个人工监督的小功能。

首先，我们来创建个模拟拥有删除文件的 CMP 服务器：



```python
# 服务端
from mcp.server import FastMCP
from mcp.types import SamplingMessage, TextContent

app = FastMCP('file_server')


@app.tool()
async def delete_file(file_path: str):
    # 创建 SamplingMessage 用于触发 sampling callback 函数
    result = await app.get_context().session.create_message(
        messages=[
            SamplingMessage(
                role='user', content=TextContent(
                    type='text', text=f'是否要删除文件: {file_path} (Y)')
            )
        ],
        max_tokens=100
    )

    # 获取到 sampling callback 函数的返回值，并根据返回值进行处理
    if result.content.text == 'Y':
        return f'文件 {file_path} 已被删除！！'


if __name__ == '__main__':
    app.run(transport='stdio')

```



这里最重要的就是需要通过`create_message`方法来创建一个 `SamplingMessage` 类型的 message，他会将这个 message 发送给 sampling callback 对应的函数中。

接着，我们来创建客户端的代码：



```python
# 客户端
import asyncio

from mcp.client.stdio import stdio_client
from mcp import ClientSession, StdioServerParameters
from mcp.shared.context import RequestContext
from mcp.types import (
    TextContent,
    CreateMessageRequestParams,
    CreateMessageResult,
)

server_params = StdioServerParameters(
    command='uv',
    args=['run', 'file_server.py'],
)


async def sampling_callback(
        context: RequestContext[ClientSession, None],
        params: CreateMessageRequestParams,
):
    # 获取工具发送的消息并显示给用户
    input_message = input(params.messages[0].content.text)
    # 将用户输入发送回工具
    return CreateMessageResult(
        role='user',
        content=TextContent(
            type='text',
            text=input_message.strip().upper() or 'Y'
        ),
        model='user-input',
        stopReason='endTurn'
    )


async def main():
    async with stdio_client(server_params) as (stdio, write):
        async with ClientSession(
                stdio, write,
                # 设置 sampling_callback 对应的方法
                sampling_callback=sampling_callback
        ) as session:
            await session.initialize()
            res = await session.call_tool(
                'delete_file',
                {'file_path': 'C:/xxx.txt'}
            )
            # 获取工具最后执行完的返回结果
            print(res)


if __name__ == '__main__':
    asyncio.run(main())

```



特别要注意的是，目前在工具里面打印的内容实际上使用 `stdio_client` 是无法显示到命令行窗口的。所以，我们调试的话，可以使用 `mcp.shared.memory.create_connected_server_and_client_session`。

具体代码如下：



```python
# 客户端
from mcp.shared.memory import (
    create_connected_server_and_client_session as create_session
)
# 这里需要引入服务端的 app 对象
from file_server import app

async def sampling_callback(context, params):
    ...

async def main():
    async with create_session(
        app._mcp_server,
        sampling_callback=sampling_callback
    ) as client_session:
        await client_session.call_tool(
            'delete_file', 
            {'file_path': 'C:/xxx.txt'}
        )

if __name__ == '__main__':
    asyncio.run(main())
    
```



## Claude Desktop 加载 MCP Server

因为后面的两个功能实际上都是为了提高给 Claude 桌面端用的，所以这里先说下如何加载我们自定义的 MCP Server 到 Claude 桌面端。

首先，我们先打开配置。

我们点击 `Developer` 菜单，然后点击 `Edit Config` 按钮打开 Claude 桌面端的配置文件 `claude_desktop_config.json`

然后开始添加我们的服务器，服务器需要在 `mcpServers` 层级下，参数有 `command`、`args`、`env`。实际上，参数和 `StdioServerParameters` 对象初始化时候的参数是一样的。



```json
{
  "mcpServers": {
    "web-search-server": {
      "command": "uv",
      "args": [
        "--directory",
        "D:/projects/mcp_getting_started",
        "run",
        "web_search.py"
      ]
    }
  }
}
```



最后，我们保存文件后重启 Claude 桌面端就可以在这里看到我们的插件了。



当然，我们也可以直接在我们插件的目录下运行以下命令来直接安装：



```shell
mcp install web_search.py
```



## 其他功能

### Prompt

MCP 还为我们提供了一个生成 Prompt 模板的功能。他使用起来也很简单，只需要使用 `prompt` 装饰器装饰一下即可，代码如下：

```python
from mcp.server import FastMCP

app = FastMCP('prompt_and_resources')

@app.prompt('翻译专家')
async def translate_expert(
        target_language: str = 'Chinese',
) -> str:
    return f'你是一个翻译专家，擅长将任何语言翻译成{target_language}。请翻译以下内容：'


if __name__ == '__main__':
    app.run(transport='stdio')
```



然后我们用上一节讲到的配置 Claude 桌面端 MCP 服务器的方法添加下我们的新 MCP 服务器。然后我们就可以点击右下角的图标开始使用啦。

他会让我们设置一下我们传入的参数，然后他会在我们的聊天窗口上生成一个附件。



### Resource

我们还可以在 Claude 客户端上选择我们为用户提供的预设资源，同时也支持自定义的协议。具体代码如下：



```python
from mcp.server import FastMCP

app = FastMCP('prompt_and_resources')

@app.resource('echo://static')
async def echo_resource():
    # 返回的是，当用户使用这个资源时，资源的内容
    return 'Echo!'

@app.resource('greeting://{name}')
async def get_greeting(name):
    return f'Hello, {name}!'


if __name__ == '__main__':
    app.run(transport='stdio')
```



## 在 LangChain 中使用 MCP 服务器

最近 LangChain 发布了一个新的开源项目 langchain-mcp-adapters，可以很方便的将 MCP 服务器集成到 LangChain 中。下面我们来看看如何使用它:



```python
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

from langchain_mcp_adapters.tools import load_mcp_tools
from langgraph.prebuilt import create_react_agent

from langchain_openai import ChatOpenAI
model = ChatOpenAI(model="gpt-4o")

server_params = StdioServerParameters(
    command='uv',
    args=['run', 'web_search.py'],
)

async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        await session.initialize()

        # 获取工具列表
        tools = await load_mcp_tools(session)

        # 创建并使用 ReAct agent
        agent = create_react_agent(model, tools)
        agent_response = await agent.ainvoke({'messages': '杭州今天天气怎么样？'})
```

