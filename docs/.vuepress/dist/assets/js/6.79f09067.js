(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{508:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("安装之前请确保PHP环境和React环境已经搭建好并且可以运行。")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本文是对于有PHP后端基础的小伙伴来编写的，如果是零基础的小伙伴，但是又需要安装后端环境来运行项目，"),a("a",{attrs:{href:"/pages/install-phpStudy"}},[t._v("点此查看后端安装详细教程")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),a("ul",[a("li",[t._v("PHP >= 7.2.5")]),t._v(" "),a("li",[t._v("MySQL >= 8.0")]),t._v(" "),a("li",[t._v("Node >= 10.15.0")]),t._v(" "),a("li",[t._v("NPM >= 5.6.0")])]),t._v(" "),a("h2",{attrs:{id:"安装后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装后端"}},[t._v("#")]),t._v(" 安装后端")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/miren123/mi-admin-manage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mi-admin-manage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置composer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" config -g repo.packagist "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" https://mirrors.aliyun.com/composer/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 伪静态Nginx：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-d "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-f "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"21"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trewrite ^/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ /index.php?s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 伪静态Apache：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfModule mod_rewrite.c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n Options +FollowSymlinks -Multiviews\n RewriteEngine On\n\n RewriteCond %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REQUEST_FILENAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-d\n RewriteCond %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REQUEST_FILENAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-f\n RewriteRule ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ index.php?/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("QSA,PT,L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/IfModule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"安装前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装前端"}},[t._v("#")]),t._v(" 安装前端")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/miren123/mi-admin-react.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mi-admin-react\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置yarn的淘宝源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry http://registry.npm.taobao.org\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置")]),t._v("\n在.env.xxx环境变量文件里面修改接口baseURL（后端环境配置域名端口）\nVUE_APP_BASE_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://mi.admin.com/'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发完打包正式环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run build:prod\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发完打包测试环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run build:stage\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);