(window["webpackJsonpladybird-ui"]=window["webpackJsonpladybird-ui"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=(a(63),a(45)),s=a(46),l=a(54),u=a(47),m=a(55),h=a(18),p=(a(64),a(48)),d=a.n(p),g=a(115),f=a(116),E=a(49),b=a.n(E),w=a(23),v=a.n(w),y=a(27),x=a(28),k=a.n(x),j=function(e){var t=function(){var e=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();return{id:e.getId(),first_name:e.getGivenName(),last_name:e.getFamilyName(),image_url:e.getImageUrl(),email_id:e.getEmail()}},a=function(){var e=Object(y.a)(v.a.mark((function e(a,n,r){var o,c,i,s,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t(),"https://phoenix.rctech.club/graphql",e.next=4,k.a.post("https://phoenix.rctech.club/graphql",{query:"\n    mutation {\n      login{\n        token\n        login_status\n        register\n      }\n    }\n    "},{headers:{authorization:r.getAuthResponse().id_token}});case 4:c=e.sent,console.log(c.data),i=c.data.data.login,s=i.token,l=i.login_status,u=i.register,l&&sessionStorage.getItem("redirectTo").length>0&&window.location.replace("https://".concat(sessionStorage.getItem("redirectTo"),"?id=").concat(s)),u&&n.push({pathname:"register",state:{user:o,token:r.getAuthResponse().id_token}});case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return function(t){return r.a.createElement(e,Object.assign({onLoginSuccess:a,clientID:"798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com"},t))}},I=Object(g.a)({container:{margin:"3vh auto"},text:{marginBottom:"2vh"}}),O=j((function(e){var t=e.onLoginSuccess,a=e.clientID,n=e.location,o=e.history,c=I();return sessionStorage.setItem("redirectTo",b.a.parse(n.search).redirectTo||""),r.a.createElement(f.a,{className:c.container},r.a.createElement("div",{className:c.text},r.a.createElement("h3",null,"Welcome RC Lee Hallmate!"),r.a.createElement("h4",null,"To continue using our app, please sign in using your hku account.")),r.a.createElement(d.a,{onSuccess:function(e){return t(n,o,e)},onSignIn:function(e){return t(n,o,e)},clientId:a,cookiePolicy:"single_host_origin"}))})),_=a(53),q=a(117),N=a(118),S=a(122),T=a(121),C=a(119),F=a(120),A=Object(g.a)({container:{margin:"3vh auto"},disclaimer:{margin:"1vmax"},form:{margin:"2vh auto"}}),B=function(e){var t=e.location,a=e.history,o=A(),c=Object(n.useState)({room:null,year:null}),i=Object(_.a)(c,2),s=i[0],l=i[1],u=function(e){s[e.target.id]=e.target.value,l(s)},m=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://phoenix.rctech.club/graphql",e.next=3,k.a.post("https://phoenix.rctech.club/graphql",{query:'\n      mutation{\n        register(\n          user: {\n            username: "'.concat(s.username,'"\n            phone: "').concat(s.phone,'"\n            room_no: "').concat(s.room,'"\n          }\n        ){\n          username\n        }\n      }\n      ')},{headers:{authorization:t.state.token}});case 3:null===e.sent.data.data.register?a.replace({location:"/"}):sessionStorage.getItem("redirectTo").length>0?window.location.replace("https://".concat(sessionStorage.getItem("redirectTo"),"?id=").concat(t.state.token)):window.location.replace("https://".concat(window.location.host,"?id=").concat(t.state.token));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(void 0===t.state)return r.a.createElement(h.a,{to:"/"});var p=t.state.user;return r.a.createElement(f.a,{className:o.container},r.a.createElement("h3",null,"Hello, ".concat(p.first_name)),r.a.createElement("div",{className:o.disclaimer},"To continue using our services, we require you to sign in with Google, in which you have successfully completed that step. While we implicitly have access to your Google account information, other important details such as your room number are needed to deliver the best user experience.",r.a.createElement("br",null),"By submitting the form below, you agree that we are allowed to store your info in our database. We will not share your personal data with any other 3rd party applications and services."),r.a.createElement(q.a,{className:o.form},r.a.createElement(N.a,{required:!0},r.a.createElement(S.a,{htmlFor:"username"},"Username"),r.a.createElement(T.a,{id:"username","aria-describedby":"username-helper-text",onChange:u}),r.a.createElement(C.a,{id:"username-helper-text"},"For example: iamawesome")),r.a.createElement(N.a,{required:!0},r.a.createElement(S.a,{htmlFor:"phone"},"Phone (Hong Kong)"),r.a.createElement(T.a,{id:"phone","aria-describedby":"phone-helper-text",onChange:u}),r.a.createElement(C.a,{id:"phone-helper-text"},"For example: +85212345678")),r.a.createElement(N.a,{required:!0},r.a.createElement(S.a,{htmlFor:"room"},"Room number"),r.a.createElement(T.a,{id:"room","aria-describedby":"room-helper-text",onChange:u}),r.a.createElement(C.a,{id:"room-helper-text"},"For example: 924A")),r.a.createElement(F.a,{type:"submit",onClick:m},"Submit")))},R=a(52),W=a.n(R);var H=function(){return r.a.createElement(f.a,{className:"App-header"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.rctech.club",rel:"noopener noreferrer"},r.a.createElement("img",{className:"logo",src:W.a,alt:"RCTECH"}))),r.a.createElement("div",{className:"header-text"},"Ladybird"))},L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:O}),r.a.createElement(h.b,{path:"/register",exact:!0,component:B}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(26);c.a.render(r.a.createElement(G.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,a){e.exports=a.p+"static/media/logo.83c07097.png"},58:function(e,t,a){e.exports=a(100)},63:function(e,t,a){},64:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.2fb2e27d.chunk.js.map