(this.webpackJsonpukana=this.webpackJsonpukana||[]).push([[0],{23:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){},27:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var a=t(2),r=t.n(a),c=t(17),s=t.n(c),i=(t(23),t(8)),j=t.n(i),o=t(18),d=t(6),u=(t(25),t(26),t(27),t(0)),l=function(n){var e=n.kanji,t=n.grade,a=n.meanings,r=n.heisig,c=n.kun,s=n.on,i=n.stroke,j=n.jlpt,o=n.name;return Object(u.jsxs)("div",{className:"KanjiCard",children:[Object(u.jsxs)("div",{className:"KanjiCardHeader",children:[Object(u.jsx)("h1",{className:"KanjiCardKanji",children:e}),Object(u.jsx)("h1",{className:"KanjiCardMeaning",children:a&&a[0]})]}),Object(u.jsxs)("p",{children:["Grade: ",t]}),Object(u.jsxs)("p",{children:["Meanings:"," ",a&&a.map((function(n){return Object(u.jsx)(u.Fragment,{children:a[a.length-1]!==n?" "+n+",":" "+n})}))]}),Object(u.jsxs)("p",{children:["Kun readings:"," ",c&&c.length>0?c.map((function(n){return Object(u.jsx)(u.Fragment,{children:c[c.length-1]!==n?" "+n+",":" "+n})})):"none"]}),Object(u.jsxs)("p",{children:["On readings:"," ",s&&s.length>0?s.map((function(n){return Object(u.jsx)(u.Fragment,{children:s[s.length-1]!==n?" "+n+",":" "+n})})):"none"]}),Object(u.jsxs)("p",{children:["Name readings:"," ",o&&o.length>0?o.map((function(n){return Object(u.jsx)(u.Fragment,{children:o[o.length-1]!==n?" "+n+",":" "+n})})):"none"]}),Object(u.jsxs)("p",{children:["Stroke count: ",i]}),Object(u.jsxs)("p",{children:["Old JLPT grade: ",j]}),Object(u.jsxs)("p",{children:["Heisig keyname: ",r]})]})},h=t(5),g=t.n(h),p=function(n,e){var t=Math.floor(2136*Math.random()),a="https://kanjiapi.dev/v1/kanji/".concat(n[t]);g.a.get(a).then((function(n){console.log(n.data),e(n.data)})).catch((function(n){console.error("Error",n)}))},b=function(n){var e=n.kanji,t=Object(a.useState)({}),r=Object(d.a)(t,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){p(e,s)}),[e]),Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)("h1",{className:"UkanaHeader",children:"Ukana"}),Object(u.jsx)("h1",{className:"UkanaHeaderJp",children:"\u8a00\u3046\u4eee\u540d"}),Object(u.jsx)("h3",{className:"Subheader",children:"Your place for Japanese language-learning!"}),c!=={}&&Object(u.jsx)(l,{kanji:c.kanji,grade:c.grade,meanings:c.meanings,heisig:c.heisig_en,kun:c.kun_readings,on:c.on_readings,stroke:c.stroke_count,jlpt:c.jlpt,name:c.name_readings},c.kanji)]})},O=function(){return g.a.get("https://kanjiapi.dev/v1/kanji/joyo").then((function(n){return n.data})).catch((function(n){console.error("Error",n)}))};var f=function(){var n=Object(a.useState)(["\u4e00"]),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)((function(){function n(){return(n=Object(o.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,O();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){return n.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{kanji:t})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0932955b.chunk.js.map