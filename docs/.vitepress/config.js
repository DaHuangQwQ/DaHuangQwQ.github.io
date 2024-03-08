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
            { text: "学习笔记", link: "/guide/test" },
            {
                text: "操作系统",
                // items: [
                //     { text: 'lpthread', link: '/os/lpthread/01' },
                //     { text: 'process', link: '/os/process/01' },
                //     { text: 'sperf', link: '/os/lpthread/sperf' },
                //     { text: 'processTree', link: '/os/lpthread/processTree' },
                //     { text: 'crepl', link: '/os/lpthread/crepl' },
                // ]
                link: "/os/index"
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
        ],
        // footer: {
        //     message: 'footer',
        //     copyright: ' © 2024-vitepress'
        // }

    },
    vite: {
        plugins:[
            AutoSidebar(),
        ]
    }

}