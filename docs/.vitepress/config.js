import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";


export default {
    title: 'hjywiki', // 站点标题
    description: '编程笔记', // mate 标签 description，多用于搜索引擎抓取摘要
    markdown: {
        // lineNumbers: true,
        
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        },

    },
    themeConfig: {
        nav: [
            {
                text: "算法题解",
                link: "/cpp/index"
            },
            {
                text: "学习笔记",
                link: "/labnote/index"
            },
            {
                text: "系统知识",
                link: "/system/index"
            },
            {
                text: "算法",
                link: "/algorithm/index"
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DaHuangQwQ' },
            // { icon: 'twitter', link: '...' },
        ],
        search: {
            provider: 'local'
        },
        // footer: {
        //     message: 'footer',
        //     copyright: ' © 2024-vitepress'
        // }

    },
    vite: {
        plugins: [
            AutoSidebar(),
        ]
    }

}