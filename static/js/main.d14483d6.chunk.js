(this.webpackJsonpukana=this.webpackJsonpukana||[]).push([[0],{18:function(e,n,a){},35:function(e,n,a){},37:function(e,n,a){},39:function(e,n,a){},48:function(e,n,a){},67:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),r=a(27),s=a.n(r),i=(a(35),a(8)),j=a(15),o=a.n(j),l=a(28),d=a(12),u=(a(37),a(7)),h=a(2),b=(a(18),a(0)),O=function(){return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)("h1",{className:"UkanaHeader",children:"Ukana"}),Object(b.jsx)("h1",{className:"UkanaHeaderJp",children:"\u8a00\u3046\u4eee\u540d"}),Object(b.jsx)("h3",{className:"Subheader",children:"Your place for Japanese language-learning!"}),Object(b.jsx)("h3",{className:"SubheaderStart",children:"Click on a link above to get started. \u59cb\u3081\u307e\u3057\u3087\u3046\uff01"})]})},m=(a(39),a.p+"static/media/ukana-logo2.4da7d8ca.png"),x=function(){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsxs)("ul",{className:"navbar-links",children:[Object(b.jsx)("li",{className:"navbar-links-item",children:Object(b.jsx)(u.b,{className:"item",to:"/ukana",children:Object(b.jsx)("img",{src:m,alt:"Ukana logo",className:"ukanaLogo"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{className:"item non-home",to:"/ukana/random",children:Object(b.jsx)("p",{className:"NavLink",children:"Random Kanji"})})})]})})},g=(a(48),function(e){var n=e.kanji,a=e.grade,t=e.meanings,c=e.heisig,r=e.kun,s=e.on,i=e.stroke,j=e.jlpt,o=e.name;return Object(b.jsxs)("div",{className:"KanjiCard",children:[Object(b.jsxs)("div",{className:"KanjiCardHeader",children:[Object(b.jsx)("h1",{className:"KanjiCardKanji",children:n}),Object(b.jsx)("h1",{className:"KanjiCardMeaning",children:t&&t[0]})]}),Object(b.jsxs)("p",{children:["Grade: ",a]}),Object(b.jsxs)("p",{children:["Meanings:"," ",t&&t.map((function(e){return Object(b.jsx)(b.Fragment,{children:t[t.length-1]!==e?" "+e+",":" "+e})}))]}),Object(b.jsxs)("p",{children:["Kun readings:"," ",r&&r.length>0?r.map((function(e){return Object(b.jsx)(b.Fragment,{children:r[r.length-1]!==e?" "+e+",":" "+e})})):"none"]}),Object(b.jsxs)("p",{children:["On readings:"," ",s&&s.length>0?s.map((function(e){return Object(b.jsx)(b.Fragment,{children:s[s.length-1]!==e?" "+e+",":" "+e})})):"none"]}),Object(b.jsxs)("p",{children:["Name readings:"," ",o&&o.length>0?o.map((function(e){return Object(b.jsx)(b.Fragment,{children:o[o.length-1]!==e?" "+e+",":" "+e})})):"none"]}),Object(b.jsxs)("p",{children:["Stroke count: ",i]}),Object(b.jsxs)("p",{children:["Old JLPT grade: ",j]}),Object(b.jsxs)("p",{children:["Heisig keyname: ",c]})]})}),p=a(11),k=a.n(p),f=function(e,n){var a=Math.floor(2136*Math.random()),t="https://kanjiapi.dev/v1/kanji/".concat(e[a]);k.a.get(t).then((function(e){console.log(e.data),n(e.data)})).catch((function(e){console.error("Error",e)}))},v=function(e){var n=e.kanji,a=Object(t.useState)({}),c=Object(d.a)(a,2),r=c[0],s=c[1];return Object(t.useEffect)((function(){f(n,s)}),[n]),Object(b.jsx)("div",{className:"RandomKanji",children:r!=={}&&Object(b.jsx)(g,{kanji:r.kanji,grade:r.grade,meanings:r.meanings,heisig:r.heisig_en,kun:r.kun_readings,on:r.on_readings,stroke:r.stroke_count,jlpt:r.jlpt,name:r.name_readings},r.kanji)})},N=function(){return k.a.get("https://kanjiapi.dev/v1/kanji/joyo").then((function(e){return e.data})).catch((function(e){console.error("Error",e)}))};var K=function(){var e=Object(t.useState)(["\u4e00"]),n=Object(d.a)(e,2),a=n[0],c=n[1];return Object(t.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return e.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/ukana",render:function(e){return Object(b.jsx)(O,Object(i.a)(Object(i.a)({},e),{},{kanji:a}))}}),Object(b.jsx)(h.a,{exact:!0,path:"/ukana/random",render:function(e){return Object(b.jsx)(v,Object(i.a)(Object(i.a)({},e),{},{kanji:a}))}})]})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d14483d6.chunk.js.map