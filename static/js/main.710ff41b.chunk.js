(this["webpackJsonpfun-react-lib"]=this["webpackJsonpfun-react-lib"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),l=n.n(r),o=(n(31),n(3)),i=(n(32),n(33),["Avatar","Simple Button","Heading"]),u=function(e){return c.a.createElement("div",{className:"component-list"},c.a.createElement("h2",null,"Components"),i.map((function(t){return c.a.createElement("button",{key:t,onClick:function(){e.setDemo(t)}},t)})))},s=(n(34),n(35),function(e){return c.a.createElement("button",{className:"simple-button ".concat(e.color," ").concat(e.size),onClick:e.onClick},e.children)});s.defaultProps={color:"red",onClick:function(){},children:"Click here",size:"sm"};var m=s,f=n(5),d=n.n(f),h=n(23),E=n.n(h),p=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch(E.a).then((function(e){return e.text()})).then((function(e){r(e)}))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{source:n}),c.a.createElement("div",{style:{margin:10}}),c.a.createElement(m,{color:"blue",onClick:function(){alert("Button Clicked")}}," Click Me "))},v=function(e){return c.a.createElement(c.a.Fragment,null,function(e,t){switch(e){case"h1":return c.a.createElement("h1",null,t);case"h2":return c.a.createElement("h2",null,t);case"h3":return c.a.createElement("h3",null,t);case"h4":return c.a.createElement("h4",null,t);case"h5":return c.a.createElement("h5",null,t);case"h6":return c.a.createElement("h6",null,t)}}(e.type,e.children))};v.defaultProps={type:"h2"};var b=v,g=n(24),y=n.n(g),k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch(y.a).then((function(e){return e.text()})).then((function(e){r(e)}))})),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{source:n}),c.a.createElement(b,{type:"h3"}," I'm an h3 header "))},w=(n(120),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.size," ").concat(e.className)},e.src&&c.a.createElement("img",{className:"avatar ".concat(e.size),alt:e.name,src:e.src}),e.name&&!e.src&&c.a.createElement("span",{className:"avatar ".concat(e.size)},e.name))});w.defaultProps={size:"md"};var j=w,x=n(25),C=n.n(x),O=["xs","sm","md","lg","xl"],S=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){console.log("AvatarDemo component"),fetch(C.a).then((function(e){return e.text()})).then((function(e){r(e)}))})),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{source:n}),c.a.createElement("div",{style:{margin:10}}),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:400}},O.map((function(e,t){return c.a.createElement(j,{key:t.toString(),size:e,src:"https://avatars2.githubusercontent.com/u/53559108?s=460&u=d6851bf5daa2cea22482af9ab17d3e74bc939bdb&v=4"})}))),c.a.createElement("div",{style:{margin:16}}),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:400}},O.map((function(e,t){return c.a.createElement(j,{key:t.toString(),size:e,name:"RA"})}))),c.a.createElement("div",{style:{margin:10}}))},z=function(e){return c.a.createElement("div",{className:"demo-display"},function(e){switch(e){case"Simple Button":return c.a.createElement(p,null);case"Heading":return c.a.createElement(k,null);case"Avatar":return c.a.createElement(S,null);default:return""}}(e.demo))};var N=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(u,{setDemo:r}),c.a.createElement(z,{demo:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,n){e.exports=n.p+"static/media/simple-button.38c5f1e1.md"},24:function(e,t,n){e.exports=n.p+"static/media/heading.1107bdd4.md"},25:function(e,t,n){e.exports=n.p+"static/media/avatar.269fca8f.md"},26:function(e,t,n){e.exports=n(121)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.710ff41b.chunk.js.map