(this["webpackJsonpladybird-ui"]=this["webpackJsonpladybird-ui"]||[]).push([[0],{107:function(e,t,a){e.exports=a(168)},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a.n(o),c=a(65),s=a(30),l=a(67),m=a.n(l),u=a(89),h=a(36),g=a(92),p=a.n(g),d=a(180),f=a(182),b=a(184),E=a(191),v=a(192),y=a(189),w=a(185),x=a(188),k=a(183),F=Object(d.a)({container:{margin:"3vh auto"},disclaimer:{margin:"1vmax"},form:{margin:"2vh auto"}}),j=function(e){var t=e.location,a=e.history,o=F(),i=Object(n.useState)({room:null,year:null}),c=Object(h.a)(i,2),l=c[0],g=c[1],d=function(e){l[e.target.id]=e.target.value,g(l)},j=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://phoenix.rctech.club/graphql",e.next=3,p.a.post("https://phoenix.rctech.club/graphql",{query:'\n      mutation{\n        register(\n          user: {\n            username: "'.concat(l.username,'"\n            phone: "').concat(l.phone,'"\n            room_no: "').concat(l.room,'"\n          }\n        ){\n          username\n        }\n      }\n      ')},{headers:{authorization:t.state.token}});case 3:null===e.sent.data.data.register?a.replace({location:"/"}):sessionStorage.getItem("redirectTo").length>0?window.location.replace("https://".concat(sessionStorage.getItem("redirectTo"),"?id=").concat(t.state.token)):window.location.replace("https://".concat(window.location.host,"?id=").concat(t.state.token));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(void 0===t.state)return r.a.createElement(s.a,{to:"/"});var O=t.state.user;return r.a.createElement(f.a,{className:o.container},r.a.createElement(k.a,{variant:"h3"},"Hello, ".concat(O.first_name)),r.a.createElement("div",{className:o.disclaimer},"To continue using our services, we require you to sign in with Google, in which you have successfully completed that step. While we implicitly have access to your Google account information, other important details such as your room number are needed to deliver the best user experience.",r.a.createElement("br",null),"By submitting the form below, you agree that we are allowed to store your info in our database. We will not share your personal data with any other 3rd party applications and services."),r.a.createElement(b.a,{className:o.form},r.a.createElement(E.a,{required:!0},r.a.createElement(v.a,{htmlFor:"username"},"Username"),r.a.createElement(y.a,{id:"username","aria-describedby":"username-helper-text",onChange:d}),r.a.createElement(w.a,{id:"username-helper-text"},"For example: iamawesome")),r.a.createElement(E.a,{required:!0},r.a.createElement(v.a,{htmlFor:"phone"},"Phone (Hong Kong)"),r.a.createElement(y.a,{id:"phone","aria-describedby":"phone-helper-text",onChange:d}),r.a.createElement(w.a,{id:"phone-helper-text"},"For example: +85212345678")),r.a.createElement(E.a,{required:!0},r.a.createElement(v.a,{htmlFor:"room"},"Room number"),r.a.createElement(y.a,{id:"room","aria-describedby":"room-helper-text",onChange:d}),r.a.createElement(w.a,{id:"room-helper-text"},"For example: 924A")),r.a.createElement(x.a,{type:"submit",onClick:j},"Submit")))},O=a(55),S=a.n(O),W=a(95),I=a.n(W),_=a(96),T=a.n(_),q=a(97),N=a.n(q),P=S()((function(e){return{logo:{maxHeight:"calc(112px + 1vmin)"}}})),C=function(){var e=P();return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.rctech.club",rel:"noopener noreferrer"},r.a.createElement("img",{className:e.logo,src:N.a,alt:"RCTECH"}))),r.a.createElement("div",null,r.a.createElement(k.a,{variant:"h1"},"Login")))},R=a(51),U=a(43),z=a(24),B=a(16),H=a(64),A=a(102),G=a(66);function L(){var e=Object(A.a)(["\n  mutation Login{\n      login {\n          token\n          login_status\n          register\n      }\n  }\n"]);return L=function(){return e},e}var D,J=Object(G.a)(L()),K=Object(d.a)((function(e){return{container:{margin:"3vh auto"},text:{marginBottom:"2vh"}}})),$=(D=function(e){var t=e.googleUser,a=e.setGoogleUser,o=e.clientID,i=e.location,c=e.history;console.log("Wrapped");var s=K(),l=Object(H.a)(J),m=Object(h.a)(l,2),u=m[0],g=m[1].data;return sessionStorage.setItem("redirectTo",T.a.parse(i.search).redirectTo||""),Object(n.useEffect)((function(){if(g){console.log(g);var e=g.login,a=e.token,n=e.login_status,r=e.register;if(n&&sessionStorage.getItem("redirectTo").length>0&&window.location.replace("https://".concat(sessionStorage.getItem("redirectTo"),"?id=").concat(a)),r){var o=function(){var e=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();return{id:e.getId(),first_name:e.getGivenName(),last_name:e.getFamilyName(),image_url:e.getImageUrl(),email_id:e.getEmail()}}();c.push({pathname:"register",state:{user:o,token:t.getAuthResponse().id_token}})}}}),[g,t,c]),r.a.createElement(f.a,{className:s.container},r.a.createElement(C,null),r.a.createElement("div",{className:s.text},r.a.createElement(k.a,{variant:"h2"},"Welcome RC Lee Hall mate!"),r.a.createElement(k.a,{variant:"h5"},"To continue using our app, please sign in using your HKU account.")),r.a.createElement(I.a,{onSuccess:function(e){a(e),u()},onFailure:function(){console.log("Failed to login")},clientId:o,cookiePolicy:"single_host_origin"}),r.a.createElement(k.a,{variant:"h6",style:{margin:"40px 0"}},"If you keep coming back here after login, please"," ",r.a.createElement("a",{href:"https://".concat(sessionStorage.getItem("redirectTo"))},"click here")))},function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),o=a[0],i=a[1],c=new R.a({uri:"https://phoenix.rctech.club/graphql",headers:{authorization:o?o.getAuthResponse().id_token:""}}),s=new U.a,l=new z.a({cache:s,link:c});return r.a.createElement(B.a,{client:l},r.a.createElement(D,Object.assign({googleUser:o,setGoogleUser:i,clientID:"798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com"},e)))}),M=S()((function(e){return{container:{textAlign:"center",justifyContent:"center",margin:"auto"}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(186),V=a(190),X=a(103),Y=Object(V.a)(Object(X.a)({palette:{primary:{light:"#727394",main:"#464866",dark:"#1d213b"},secondary:{main:"#ef9a9a"},background:{default:"#fff"},error:{main:"#B00020"},user:{main:"#ce93d8"},others:{main:"#9fa8da"}},typography:{h1:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"4em",margin:"20px 0"},h2:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0",fontSize:"3em"},h3:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"2em",margin:"20px 0"},h4:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0"},h5:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"1em"},h6:{fontFamily:"Roboto, sans-serif",fontWeight:400,fontSize:"1em"},subtitle1:{fontFamily:"Roboto, sans-serif",fontWeight:600},subtitle2:{fontFamily:"Roboto, sans-serif",fontWeight:200},button:{fontFamily:"Poppins, sans-serif",fontWeight:300}}})),Z=a(187);i.a.render(r.a.createElement(Q.a,{theme:Y},r.a.createElement(Z.a,null),r.a.createElement((function(){var e=M();return r.a.createElement("div",{className:e.container},r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:$}),r.a.createElement(s.b,{path:"/register",exact:!0,component:j}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a.p+"static/media/logo.83c07097.png"}},[[107,1,2]]]);
//# sourceMappingURL=main.59369829.chunk.js.map