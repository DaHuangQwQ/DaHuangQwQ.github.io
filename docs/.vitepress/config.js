import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
]

export default {
    title: 'hjywiki', // 站点标题
    description: '编程笔记', // mate 标签 description，多用于搜索引擎抓取摘要
    markdown: {
        // lineNumbers: true,
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        },
        math: true
    },
    themeConfig: {
        nav: [
            {
                text: "系统知识",
                link: "/system/index"
            },
            {
                text: "学习笔记",
                link: "/labnote/index"
            },
            {
                text: "算法",
                link: "/algorithm/index"
            },
            {
                text: "算法题解",
                link: "/cpp/index"
            },
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
        ],
    },
}