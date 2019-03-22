(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{89:function(e,s,a){"use strict";a.r(s);var t=a(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"algorithm（两数相加）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm（两数相加）","aria-hidden":"true"}},[e._v("#")]),e._v(" Algorithm（两数相加）")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[e._v("描述：给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。您可以假设除了数字 0 之外，这两个数都不会以 0 开头。")]),e._v(" "),a("li",[e._v("思路：独立进行算法设计的时候，思维进入误区，没能从链表的角度来考虑，导致在数据溢出的时候没法通过验证。最终还是采纳了题解的解析方法，理解透了后进行编码，有待加强。")]),e._v(" "),a("li",[e._v("性能：时间复杂度O(max(l1.size, l2.size)); 空间复杂度：O(max(l1.size, l2.size))")]),e._v(" "),a("li",[e._v("编码（java）：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    int carryValue = 0;\n    int currSum = 0;\n    ListNode resultNode = new ListNode(0);\n    ListNode moveL1 = l1, moveL2 = l2, moveResult = resultNode;\n\n    while (moveL1 != null || moveL2 != null) {\n        currSum = (moveL1 == null? 0:moveL1.val) + (moveL2 == null? 0:moveL2.val) + carryValue;\n        carryValue = currSum / 10;\n        moveResult.next = new ListNode(currSum % 10);\n\n        moveResult = moveResult.next;\n        if (moveL1 != null) moveL1 = moveL1.next;\n        if (moveL2 != null) moveL2 = moveL2.next;\n    }\n\n    if (carryValue > 0) {\n        moveResult.next = new ListNode(carryValue);\n    }\n    return resultNode.next;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("h1",{attrs:{id:"review-基于vuepress的博客构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review-基于vuepress的博客构建","aria-hidden":"true"}},[e._v("#")]),e._v(" Review (基于VuePress的博客构建)")]),e._v(" "),a("hr"),e._v(" "),a("ul",[a("li",[a("p",[e._v("介绍：VuePress由两部分组成：一个是简略的静态网站生成器，另一个是书写技术文档的默认主题系统。它主要来源于支持Vue的子项目的文档需求。\n基于VuePress生成的每个页面都有预渲染的静态HTML，它具有良好的加载性能和友好的搜索引擎。一旦页面被加载，Vue将对其管理并进行单页面处理，\n而其他页面则在需要的时候进行加载。")])]),e._v(" "),a("li",[a("p",[e._v("工作原理：VuePress网站是由Vue、Vue Router、webpack驱动。如果你使用过Vue，在你开发自定义主体的时候，你可能会注意到似曾相识的开发体验。\n我们在构建的时候，会根据应用的版本创建服务端渲染，虚拟访问每条路径来渲染相应的HTML。这个方法的灵感来源于Nuxt的nuxt generate命令和其他项目，\n比如：Gatsby。每个markdown文件都用markdown-it编译进HTML并作为Vue组件的模板处理。如果你想嵌入动态的内容，这里允许你直接在markdown中使用VUe。")])]),e._v(" "),a("li",[a("p",[e._v("特性：")])])]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("1.基于技术文档优化的内置markdown扩展")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("2.markdown文件中使用Vue具备的功能特性")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("3.Vue驱动的自定义主题系统")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("4.自动生成Service Worker")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("5.集成Google分析器")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("6.基于Git的最新时间更新")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("7.支持多语言")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("8.默认主题包括：")]),e._v(" "),a("blockquote",[a("p",[e._v("响应式布局；主页可选；简洁的开箱即用搜索功能；Algolia搜索；自定义导航栏和侧边栏；自动生成Github链接和页面链接。")])]),e._v(" "),a("h1",{attrs:{id:"tip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip","aria-hidden":"true"}},[e._v("#")]),e._v(" Tip")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v('ES6中扩展运算符："..."，引用、组合、拆分等使得代码看起来相当简洁，示例如下：')]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("1.console.log([a,b,b]) ==> a b c")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("2.let add = (x, y) => x + y\nlet numbers = [3, 45]\nconsole.log(add(...numbers)) ==> 45 + 3")]),e._v(" "),a("blockquote"),e._v(" "),a("p",[e._v("3.let arr1 = ['a', 'b']\nlet arr2 = ['c']\nlet arr3 = ['d', 'e']\n[...arr1, ...arr2, ...arr3]  ==> ['a', 'b', 'c', 'd', 'e']")]),e._v(" "),a("h1",{attrs:{id:"share"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#share","aria-hidden":"true"}},[e._v("#")]),e._v(" Share")]),e._v(" "),a("p",[e._v("https://blog.csdn.net/CDUT100/article/details/77460629")])])}],!1,null,null,null);s.default=n.exports}}]);