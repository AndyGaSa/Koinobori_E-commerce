(this["webpackJsonpriki-project-sklb"]=this["webpackJsonpriki-project-sklb"]||[]).push([[0],{40:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r),c=n(11),o=n(13),a=n.n(o),u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),i(t),c(t),o(t)}))},s=n(12),d=n.n(s),l=n(18),p=n(14),_="LOGIN",O="LOGOUT";var b=n(8);function h(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.auth})),n=e.isAuthenticated,r=e.user,i=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){return t(function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.auth().signOut();case 2:e({type:O});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},type:"button",children:"Logout"}),Object(b.jsxs)("span",{children:["Welcome"," ",null===r||void 0===r?void 0:r.given_name]}),Object(b.jsx)("img",{src:null===r||void 0===r?void 0:r.picture,alt:null===r||void 0===r?void 0:r.name})]});return Object(b.jsx)("header",{children:n?i:Object(b.jsx)("button",{onClick:function(){return t(function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new p.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/contacts.readonly"),t.next=4,p.a.auth().signInWithPopup(r);case 4:i=t.sent,e({type:_,user:null===i||void 0===i||null===(n=i.additionalUserInfo)||void 0===n?void 0:n.profile});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},type:"button",children:"Login"})})}var j=n(10),v=n(22);var A=Object(j.b)({user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuthenticated:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return{isAuthenticated:!0,user:e.user};case O:return{isAuthenticated:!1};default:return t}}});var f=n(23);n(39),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyBnsyDbYakRknWUkFtws4SiDcM_6OWrUjU",REACT_APP_AUTH_DOMAINauthDomain:"riki-project-sklb.firebaseapp.com",REACT_APP_PROJECT_ID:"riki-project-sklb",REACT_APP_STORAGE_BUCKET:"riki-project-sklb.appspot.com",REACT_APP_SENDER_ID:"248009660005",REACT_APP_APP_ID:"1:248009660005:web:13d0f65fd51e15304a988c"}).REACT_APP_AUTH_DOMAIN;f.a.auth(),a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(c.a,{store:function(t){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c;return Object(j.d)(A,t,e(Object(j.a)(v.a)))}(),children:Object(b.jsx)(h,{})})}),document.getElementById("root")),u()}},[[40,1,2]]]);
//# sourceMappingURL=main.a82d3c0d.chunk.js.map