(this.webpackJsonppqpie=this.webpackJsonppqpie||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(17),o=n.n(a),i=(n(24),n(13)),l=n.n(i),r=n(18),u=n(7),p=n(2),b=n(1);var j=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{className:"header__name",children:"Photo gallery"})})};var h=function(e){var t=e.album,n=e.buttonOpenAlbum,c=e.photos,s=Object(p.e)(),a=c[0].thumbnailUrl;return Object(b.jsxs)("div",{className:"album",onClick:function(){n(t),s.push("/photos"),window.scrollTo(0,0)},children:[Object(b.jsx)("img",{className:"album__img",src:"".concat(a),alt:"zz"}),Object(b.jsx)("p",{className:"album__name",children:t.title}),Object(b.jsxs)("p",{className:"album__name",children:["Count: ",c.length]})]})};var m=function(e){var t=e.albums,n=e.buttonOpenAlbum,c=e.photos;return Object(b.jsx)("div",{className:"albums",children:t.map((function(e){return Object(b.jsx)(h,{album:e,buttonOpenAlbum:n,photos:c.filter((function(t){return t.albumId===e.id}))},e.id)}))})};var d=function(e){var t=e.users,n=e.albums,c=e.buttonOpenAlbum,s=e.photos;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsxs)("div",{className:"gallery",children:[Object(b.jsxs)("h1",{className:"gallery__author",children:['This albums username "',e.username,'"']}),Object(b.jsx)(m,{albums:n.filter((function(t){return t.userId===e.id})),buttonOpenAlbum:c,photos:s})]},e.id)}))})},O=n(8);var x=function(e){var t=e.photo,n=e.photoClick;return Object(b.jsx)("div",{className:"photo",children:Object(b.jsx)("img",{src:t.url,alt:t.title,onClick:function(){n(t)}})})};var f=function(e){var t=e.photos,n=e.photoClick,c=e.albumName,s=Object(p.e)();return null===t?Object(b.jsx)(b.Fragment,{children:s.push("/")}):0===t.length?Object(b.jsxs)("div",{className:"photos",children:[Object(b.jsx)("div",{className:"photos__go-back",children:Object(b.jsx)(O.b,{to:"/",className:"photos__go-back",children:"\u2190 Go back to the main page"})}),Object(b.jsxs)("p",{className:"photos__name-album",children:[' No fhotos in album "',c,'"']})]}):Object(b.jsxs)("div",{className:"photos",children:[Object(b.jsx)("div",{className:"photos__go-back",children:Object(b.jsx)(O.b,{to:"/",className:"photos__go-back",children:"\u2190 Go back to the main page"})}),Object(b.jsxs)("p",{className:"photos__name-album",children:[' Fhotos in album "',c,'"']}),Object(b.jsx)("div",{className:"photos__block",children:t.map((function(e){return Object(b.jsx)(x,{photo:e,photoClick:n},e.id)}))})]})};var _=function(e){var t=e.isOpen,n=e.link,c=e.name,s=e.onClose,a=e.next,o=e.ext;return Object(b.jsx)("div",{className:"popup  ".concat(t&&"popup_opened"),children:Object(b.jsx)("figure",{className:"popup__photo",children:Object(b.jsxs)("div",{className:"popup__conteiner",children:[Object(b.jsx)("button",{className:"popup__ext",onClick:o}),Object(b.jsx)("button",{className:"popup__close popup__close_type_photo",type:"button",onClick:s}),Object(b.jsx)("img",{className:"popup__photo-image",src:n,alt:c}),Object(b.jsx)("figcaption",{className:"popup__photo-name",children:c}),Object(b.jsx)("button",{className:"popup__next",onClick:a})]})})})};n(32);var v=function(){var e=Object(c.useState)([""]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([""]),o=Object(u.a)(a,2),i=o[0],h=o[1],m=Object(c.useState)(""),O=Object(u.a)(m,2),x=O[0],v=O[1],N=Object(c.useState)([""]),k=Object(u.a)(N,2),g=k[0],C=k[1],y=Object(c.useState)(null),S=Object(u.a)(y,2),w=S[0],A=S[1],F=Object(c.useState)({open:!1,link:"",name:"",id:""}),I=Object(u.a)(F,2),P=I[0],T=I[1],q=Object(c.useState)(!1),z=Object(u.a)(q,2),B=z[0],E=z[1];return Object(c.useEffect)((function(){Promise.all([fetch("https://jsonplaceholder.typicode.com/photos"),fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/albums")]).then(function(){var e=Object(r.a)(l.a.mark((function e(t){var n,c,s,a,o,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)(t,3),c=n[0],s=n[1],a=n[2],e.next=3,c.json();case 3:return o=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.next=9,a.json();case 9:return r=e.sent,e.abrupt("return",[o,i,r]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var t=Object(u.a)(e,3),n=t[0],c=t[1],a=t[2];s(c),h(a),C(n),E(!0)}))}),[]),Object(b.jsxs)("div",{className:"root",children:[Object(b.jsx)(j,{}),Object(b.jsx)(p.a,{path:"/",exact:!0,children:B&&Object(b.jsx)(d,{users:n,albums:i,photos:g,buttonOpenAlbum:function(e){v(e.title),A(g.filter((function(t){return t.albumId===e.id})))}})}),Object(b.jsx)(p.a,{path:"/photos",children:Object(b.jsx)(f,{photos:w,photoClick:function(e){var t=e.url,n=e.title,c=e.id;T({open:!0,link:t,name:n,id:c})},albumName:x})}),Object(b.jsx)(_,{next:function(){if(P.id===w[w.length-1].id){var e=w[0],t=e.url,n=e.title,c=e.id;T({open:!0,link:t,name:n,id:c})}else{var s=w.filter((function(e){return P.id+1===e.id}))[0],a=s.url,o=s.title,i=s.id;T({open:!0,link:a,name:o,id:i})}},ext:function(){if(P.id===w[0].id){var e=w.filter((function(e){return e.id===w[w.length-1].id}))[0],t=e.url,n=e.title,c=e.id;T({open:!0,link:t,name:n,id:c})}else{var s=w.filter((function(e){return P.id-1===e.id}))[0],a=s.url,o=s.title,i=s.id;T({open:!0,link:a,name:o,id:i})}},isOpen:P.open,name:P.name,link:P.link,onClose:function(){T({open:!1,link:"",name:"",id:""})}})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O.a,{children:Object(b.jsx)(v,{})})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.de25e165.chunk.js.map