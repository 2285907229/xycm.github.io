(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{322:function(s,n,t){"use strict";t.r(n);var e=t(7),a=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├── .github   (可选，GitHub Actions所需文件)\n│   ├── workflows\n│   │   ├── baiduPush.yml (可选，百度定时自动推送)\n│   │   └── ci.yml (可选，自动部署)\n├── docs (必须，不要修改文件夹名称)\n│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）\n│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)\n│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)\n│   ├── <结构化目录>\n│   └── index.md (首页)\n├── theme-vdoing (可选，本地的vdoing主题)\n├── utils  (可选，vdoing主题使用的node工具)\n│   ├── modules\n│   ├── config.yml (可选，批量操作front matter配置)\n│   ├── editFrontmatter.js (可选，批量操作front matter工具)\n├── baiduPush.sh (可选，百度推送命令脚本)\n├── deploy.sh (可选，部署命令脚本)\n│\n└── package.json\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("ul",[n("li",[n("p",[n("code",[s._v("docs")]),s._v(" 文件夹名称请不要修改")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("docs/.vuepress")]),s._v(" 用于存放全局的配置、样式、静态资源等，同官方，查看 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[s._v("详情"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("code",[s._v("docs/@pages")]),s._v(" 此文件夹是自动生成的，存放分类页、标签页、归档页对应的"),n("code",[s._v(".md")]),s._v("文件，一般不需要改动")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("docs/_posts")]),s._v(" 专门用于存放碎片化博客文章，里面的"),n("code",[s._v(".md")]),s._v("文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("docs/<结构化目录>")]),s._v("  请查看"),n("RouterLink",{attrs:{to:"/pages/33d574/"}},[s._v("《构建结构化站点的核心配置和约定》")]),s._v("。")],1)]),s._v(" "),n("li",[n("p",[n("code",[s._v("docs/index.md")]),s._v(" 首页")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("theme-vdoing")]),s._v(" 存放在本地的vdoing主题文件，如果你想深度的修改主题，首先要在"),n("code",[s._v("docs/.vuepress/config.js")]),s._v("中配置使用的主题指向这个文件。")]),s._v(" "),n("blockquote",[n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config.js")]),s._v("\n module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// theme: 'vdoing', // npm主题依赖包")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("theme")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../theme-vdoing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用本地主题包")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])])]),s._v(" "),n("p",[n("strong",[s._v("注意")]),s._v("：主题的后续维护升级只对npm主题包负责，就是说你使用本地主题就等于放弃了后续的升级服务。因此，能在"),n("code",[s._v("docs/.vuepress/")]),s._v("内配置和修改的，就尽量不要改动主题内部代码。")]),s._v(" "),n("hr"),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("为了方便您更快的学习和使用本主题，我在代码当中添加了比较多的注释说明。")])])])}),[],!1,null,null,null);n.default=a.exports}}]);