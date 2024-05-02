(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{510:function(t,s,a){"use strict";a.r(s);var e=a(31),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("这里是 "),a("code",[t._v("MiAdmin")]),t._v(" 安装后端的详细教程，主要的是为了方便前端小伙伴来部署后端环境，只要能够安装成功，不建议去随意改动后端代码。")]),t._v(" "),a("p",[t._v("安装成功后，每一次运行前端项目之前，都要把 "),a("code",[t._v("phpStudy")]),t._v(" 的服务打开。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"phpstudy-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpstudy-安装"}},[t._v("#")]),t._v(" "),a("code",[t._v("phpStudy")]),t._v(" 安装")]),t._v(" "),a("ol",[a("li",[t._v("下载"),a("a",{attrs:{href:"https://www.xp.cn/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("phpStudy")]),a("OutboundLink")],1),t._v("正常安装，然后运行。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/phpStudy1.png"),alt:"phpStudy安装"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在软件管理下，找到对应的版本下载安装")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/phpStudy2.png"),alt:"phpStudy软件管理"}}),t._v(" "),a("p",[a("strong",[t._v("到这里 "),a("code",[t._v("phpStudy")]),t._v(" 的安装就已经结束了，每一次运行前端项目时，都得在首页启动服务")])]),t._v(" "),a("h3",{attrs:{id:"网站部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站部署"}},[t._v("#")]),t._v(" 网站部署")]),t._v(" "),a("ol",[a("li",[t._v("这里需要配置网站域名 "),a("code",[t._v("mi.admin.com")]),t._v("，这里推荐用这个，等项目成功运行之后，再修改也是可以的")]),t._v(" "),a("li",[t._v("根目录的选择，把项目拉取下来后，选择项目里的 "),a("code",[t._v("public")]),t._v(" 目录")]),t._v(" "),a("li",[t._v("同步 "),a("code",[t._v("hosts")]),t._v(" 也需要勾选上")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/phpStudy3.png"),alt:"phpStudy网站部署"}}),t._v(" "),a("h4",{attrs:{id:"伪静态的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪静态的配置"}},[t._v("#")]),t._v(" 伪静态的配置")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("这里大家需要注意，如果选择的是Nginx（建议选择Nginx），配置如下：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule_0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"21"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trewrite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Apache配置：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfModule mod_rewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n Options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("FollowSymlinks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Multiviews\n RewriteEngine On\n\n RewriteCond "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUEST_FILENAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d\n RewriteCond "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUEST_FILENAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f\n RewriteRule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("QSA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("IfModule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/phpStudy4.png"),alt:"phpStudy网站部署"}}),t._v(" "),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("ol",[a("li",[t._v("这里和前端一样，也需要安装依赖文件。")]),t._v(" "),a("li",[t._v("有些版本的 "),a("code",[t._v("phpStudy")]),t._v(" 在安装的时候已经把 "),a("code",[t._v("composer")]),t._v(" 给集成好了，所以可以直接执行下面的命令。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mi-admin-manage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置composer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" config -g repo.packagist "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" https://mirrors.aliyun.com/composer/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("如果命令出错无法安装，软件管理->工具，找到 "),a("code",[t._v("composer2.x")]),t._v(" 以上版本的安装，安装完毕重启电脑。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/composer1.png"),alt:"安装composer"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("用 "),a("code",[t._v("phpStudy")]),t._v(" 自带的不可以，"),a("a",{attrs:{href:"https://www.phpcomposer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v("（v2.x）下载一键安装，安装过程中会有选择 "),a("code",[t._v("php")]),t._v(" 版本的页面，找到 "),a("code",[t._v("phpStudy")]),t._v(" 的安装路劲如下图的 "),a("code",[t._v("php.exe")]),t._v("，安装完毕重启电脑，再次执行上面安装依赖的命令。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/composer2.png"),alt:"安装composer2"}}),t._v(" "),a("h3",{attrs:{id:"安装数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装数据库"}},[t._v("#")]),t._v(" 安装数据库")]),t._v(" "),a("ol",[a("li",[t._v("上面的步骤配置完毕之后，打开浏览器输入配置的域名："),a("code",[t._v("mi.admin.com")]),t._v("，将看到提示安装数据库的页面。")]),t._v(" "),a("li",[t._v("如果上面的步骤已经结束了，没有看到此页面，应该是 "),a("a",{attrs:{href:"/pages/install-hosts"}},[t._v(" hosts 配置的问题")]),t._v("。")]),t._v(" "),a("li",[t._v("数据库地址、数据库端口、数据库名称、数据表前缀、数据库账号都是默认的，不建议修改，如果是有后端基础的小伙伴可以自行定义。")]),t._v(" "),a("li",[a("code",[t._v("phpStudy")]),t._v(" 的数据库默认密码是 "),a("code",[t._v("root")]),t._v("，大家只需要在数据库密码输入即可，可能有些版本的会有差异，数据库密码是 "),a("code",[t._v("123456")]),t._v("。")]),t._v(" "),a("li",[t._v("管理员账号和密码，是全部安装完成后，进入后台的管理员账号。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/install1.png"),alt:"安装MySql"}}),t._v(" "),a("ol",[a("li",[t._v("数据库安装成功将会看到如下页面，到此在前端就可以随意调用接口了，或者用postMan也可以任意使用。")]),t._v(" "),a("li",[t._v("如果提示安装失败，或者报错，应该是 "),a("a",{attrs:{href:"/pages/install-hosts"}},[t._v("phpStudy 中 PHP配置的问题")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/dev/install2.png"),alt:"安装成功"}})])}),[],!1,null,null,null);s.default=r.exports}}]);