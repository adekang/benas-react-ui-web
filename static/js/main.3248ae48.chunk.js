(this["webpackJsonpreact-beans"]=this["webpackJsonpreact-beans"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(16),a=n.n(s),l=n(13),r=n(3),j=n(5),d=n(7),b=n(12),o=n(8),u=n.n(o),h=n(0),O=["btnType","className","disabled","size","children","href"],p=function(e){var t,n=e.btnType,c=e.className,i=e.disabled,s=e.size,a=e.children,l=e.href,r=Object(b.a)(e,O),o=u()("btn",c,(t={},Object(d.a)(t,"btn-".concat(n),n),Object(d.a)(t,"btn-".concat(s),s),Object(d.a)(t,"disabled","link"===n&&i),t));return"link"===n&&l?Object(h.jsx)("a",Object(j.a)(Object(j.a)({},r),{},{className:o,href:l,children:a})):Object(h.jsx)("button",Object(j.a)(Object(j.a)({},r),{},{className:o,disabled:i,children:a}))};p.defaultProps={disabled:!1,btnType:"default"};var x=p;var m=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Button\u7ec4\u4ef6"}),Object(h.jsx)(x,{children:"Hello"}),Object(h.jsx)(x,{disabled:!0,children:"Hello"}),Object(h.jsx)("h4",{children:"\u989c\u8272"}),Object(h.jsx)(x,{btnType:"primary",children:"Hello"}),Object(h.jsx)(x,{btnType:"default",children:"Hello"}),Object(h.jsx)(x,{btnType:"danger",children:"Hello"}),Object(h.jsx)("h4",{children:"\u5927\u5c0f\u5c3a\u5bf8"}),Object(h.jsx)(x,{btnType:"primary",size:"lg",children:"Hello"}),Object(h.jsx)(x,{btnType:"default",size:"sm",children:"Hello"}),Object(h.jsx)(x,{btnType:"danger",size:"sm",children:"Hello"}),Object(h.jsx)("h4",{children:"\u94fe\u63a5"}),Object(h.jsx)(x,{btnType:"link",size:"lg",href:"www.baidu.com",children:"Hello"}),Object(h.jsx)(x,{btnType:"link",href:"www.baidu.com",children:"Hello"}),Object(h.jsx)(x,{btnType:"link",size:"sm",href:"www.baidu.com",target:"_blank",children:"Hello"}),Object(h.jsx)(x,{btnType:"link",size:"sm",href:"www.baidu.com",disabled:!0,children:"Hello"})]})},f=n(23),v=n(14),y=n(24),w=["className","theme"];v.b.add(y.a);var N=function(e){var t=e.className,n=e.theme,c=Object(b.a)(e,w),i=u()("beans-icon",t,Object(d.a)({},"icon-".concat(n),n));return Object(h.jsx)(f.a,Object(j.a)({className:i},c))},g=["disabled","size","icon","prepend","append","style"],z=function(e){var t,n,c=e.disabled,i=e.size,s=e.icon,a=e.prepend,l=e.append,r=e.style,o=Object(b.a)(e,g),O=u()("beans-input-wrapper",(t={},Object(d.a)(t,"input-size-".concat(i),i),Object(d.a)(t,"is-disabled",c),Object(d.a)(t,"input-group",a||l),Object(d.a)(t,"input-group-append",!!l),Object(d.a)(t,"input-group-prepend",!!a),t));return"value"in e&&(delete o.defaultValue,o.value="undefined"===typeof(n=e.value)||null===n?"":n),Object(h.jsxs)("div",{className:O,style:r,children:[a&&Object(h.jsx)("div",{className:"beans-input-group-prepend",children:a}),s&&Object(h.jsx)("div",{className:"icon-wrapper",children:Object(h.jsx)(N,{icon:s,title:"title-".concat(s)})}),Object(h.jsx)("input",Object(j.a)({className:"beans-input-inner",disabled:c},o)),l&&Object(h.jsx)("div",{className:"beans-input-group-append",children:l})]})};var S=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Input\u7ec4\u4ef6"}),Object(h.jsx)(z,{style:{width:"300px"},placeholder:"placeholder"}),Object(h.jsx)(z,{style:{width:"300px"},placeholder:"disabled input",disabled:!0}),Object(h.jsx)(z,{style:{width:"300px"},placeholder:"input with icon",icon:"search"}),Object(h.jsx)(z,{style:{width:"300px"},defaultValue:"large size",size:"lg"}),Object(h.jsx)(z,{style:{width:"300px"},placeholder:"small size",size:"sm"}),Object(h.jsx)(z,{style:{width:"300px"},defaultValue:"prepend text",prepend:"https://"}),Object(h.jsx)(z,{style:{width:"300px"},defaultValue:"google",append:".com"})]})},M=n(15),T=Object(c.createContext)({index:"0"}),k=function(e){var t=e.className,n=e.mode,s=e.style,a=e.children,l=e.defaultIndex,r=e.onSelect,j=e.defaultOpenSubMenus,d=Object(c.useState)(l),b=Object(M.a)(d,2),o=b[0],O=b[1],p=u()("beans-menu",t,{"menu-vertical":"vertical"===n,"menu-horizontal":"vertical"!==n}),x={index:o||"0",onSelect:function(e){O(e),r&&r(e)},mode:n,defaultOpenSubMenus:j};return Object(h.jsx)("ul",{className:p,style:s,"data-testid":"test-menu",children:Object(h.jsx)(T.Provider,{value:x,children:i.a.Children.map(a,(function(e,t){var n=e,c=n.type.displayName;if("MenuItem"===c||"SubMenu"===c)return i.a.cloneElement(n,{index:t.toString()});throw Error("\u5b50\u7ec4\u4ef6\u4e0d\u662f\u4e00\u4e2aMenuItem\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e")}))})})};k.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};var H=k,I=function(e){var t=e.index,n=e.disabled,i=e.className,s=e.style,a=e.children,l=Object(c.useContext)(T),r=u()("menu-item",i,{"is-disabled":n,"is-active":l.index===t});return Object(h.jsx)("li",{className:r,style:s,onClick:function(){l.onSelect&&!n&&"string"===typeof t&&l.onSelect(t)},children:a})};I.displayName="MenuItem";var C=I,E=n(42),P=["children","classNames","animation","wrapper"],V=function(e){var t=e.children,n=e.classNames,c=e.animation,i=e.wrapper,s=Object(b.a)(e,P);return Object(h.jsx)(E.a,Object(j.a)(Object(j.a)({classNames:n||c},s),{},{children:i?Object(h.jsx)("div",{children:t}):t}))};V.defaultProps={unmountOnExit:!0,appear:!0};var B=V,D=function(e){var t,n=e.index,s=e.title,a=e.children,l=e.className,r=Object(c.useContext)(T),d=r.defaultOpenSubMenus,b=!(!n||"vertical"!==r.mode)&&d.includes(n),o=Object(c.useState)(b),O=Object(M.a)(o,2),p=O[0],x=O[1],m=u()("menu-item submenu-item",l,{"is-active":r.index===n,"is-opened":p,"is-vertical":"vertical"===r.mode}),f=function(e,n){clearTimeout(t),e.preventDefault(),t=setTimeout((function(){x(n)}),250)},v="vertical"===r.mode?{onClick:function(e){e.preventDefault(),x(!p)}}:{},y="vertical"!==r.mode?{onMouseEnter:function(e){f(e,!0)},onMouseLeave:function(e){f(e,!1)}}:{};return Object(h.jsxs)("li",Object(j.a)(Object(j.a)({className:m},y),{},{children:[Object(h.jsxs)("div",Object(j.a)(Object(j.a)({className:"submenu-item"},v),{},{children:[s,Object(h.jsx)(N,{icon:"angle-down",className:"arrow-icon"})]})),function(){var e=u()("beans-submenu",{"menu-opened":p}),t=i.a.Children.map(a,(function(e,t){var c=e;if("MenuItem"===c.type.displayName)return i.a.cloneElement(c,{index:"".concat(n,"-").concat(t)});console.error("Warning: SubMenu has a child which is not a MenuItem component")}));return Object(h.jsx)(B,{in:p,timeout:250,animation:"zoom-in-top",children:Object(h.jsx)("ul",{className:e,children:t})})}()]}),n)};D.displayName="SubMenu";var J=D;var L=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Menu\u7ec4\u4ef6"}),Object(h.jsxs)(H,{defaultIndex:"0",defaultOpenSubMenus:["3"],children:[Object(h.jsx)(C,{children:"cool menu"}),Object(h.jsx)(C,{children:"cool menu"}),Object(h.jsx)(C,{children:"cool menu"}),Object(h.jsxs)(J,{title:"\u4e0b\u62c9\u83dc\u5355",children:[Object(h.jsx)(C,{children:"cool menu"}),Object(h.jsx)(C,{children:"cool menu"})]})]})]})};var R=function(){var e=Object(c.useState)(!1),t=Object(M.a)(e,2),n=t[0],i=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Transition \u7ec4\u4ef6"}),Object(h.jsx)(x,{size:"lg",onClick:function(){i(!n)},children:"toggle"}),Object(h.jsxs)(B,{in:n,timeout:250,animation:"zoom-in-top",wrapper:!0,children:[Object(h.jsx)("p",{children:"123"}),Object(h.jsx)("p",{children:"123"}),Object(h.jsx)("p",{children:"123"}),Object(h.jsx)("p",{children:"123"}),Object(h.jsx)("p",{children:"123"})]})]})};var W=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Icon\u7ec4\u4ef6"}),Object(h.jsx)(N,{icon:"coffee",theme:"primary",size:"10x"})]})};function _(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"\u4ecb\u7ecd"}),Object(h.jsx)("li",{children:"\ud83d\udd25typescript with React Hooks"}),Object(h.jsx)("li",{children:"\ud83d\udce6\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\u6269\u5145\u7ec4\u4ef6-(react-fontawesome, react-transition-group)"}),Object(h.jsx)("li",{children:"\ud83c\udf39\u6837\u5f0f\uff08Sass\uff09\u6587\u4ef6\u4ece\u96f6\u5f00\u59cb\uff0c\u638c\u63e1\u5927\u578b\u5e94\u7528\u7684 CSS \u7ec4\u7ec7\u65b9\u6cd5"})]})}function q(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{className:"beans-wrapper",children:[Object(h.jsx)("nav",{className:"beans-nav",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/",children:"\u4ecb\u7ecd"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/menu",children:"Menu\u7ec4\u4ef6"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/button",children:"Button\u7ec4\u4ef6"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/input",children:"Input\u7ec4\u4ef6"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/transition",children:"transition\u7ec4\u4ef6"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/icon",children:"Icon\u7ec4\u4ef6"})})]})}),Object(h.jsx)("div",{className:"beans-container",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/menu",children:Object(h.jsx)(L,{})}),Object(h.jsx)(r.a,{path:"/button",children:Object(h.jsx)(m,{})}),Object(h.jsx)(r.a,{path:"/input",children:Object(h.jsx)(S,{})}),Object(h.jsx)(r.a,{path:"/icon",children:Object(h.jsx)(W,{})}),Object(h.jsx)(r.a,{path:"/transition",children:Object(h.jsx)(R,{})}),Object(h.jsx)(r.a,{path:"/",children:Object(h.jsx)(_,{})})]})})]})})}function A(){return Object(h.jsx)(q,{})}n(39);a.a.render(Object(h.jsx)(A,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3248ae48.chunk.js.map