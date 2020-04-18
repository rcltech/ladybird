(this["webpackJsonpladybird-ui"]=this["webpackJsonpladybird-ui"]||[]).push([[0],{107:function(e,t,a){e.exports=a(153)},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),i=a.n(o),c=a(74),s=a(32),l=a(58),m=a.n(l),u=a(31),g=a(89),h=a.n(g),p=a(170),f=a(168),d=a(90),b=a.n(d),v=a(91),E=a.n(v),y=a(169),w=m()((function(e){return{logo:{maxHeight:"calc(112px + 1vmin)"}}})),x=function(){var e=w();return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.rctech.club",rel:"noopener noreferrer"},r.a.createElement("img",{className:e.logo,src:E.a,alt:"RCTECH"}))),r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h1"},"Login")))},j=a(57),k=a(48),O=a(23),S=a(16),F=function(e){return function(t){var a=Object(n.useState)(),o=Object(u.a)(a,2),i=o[0],c=o[1],s=new j.a({uri:"https://phoenix.rctech.club/graphql",headers:{authorization:i?i.getAuthResponse().id_token:""}}),l=new k.a,m=new O.a({cache:l,link:s});return console.log(i),r.a.createElement(S.a,{client:m},r.a.createElement(e,Object.assign({googleUser:i,setGoogleUser:c,clientID:"798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com"},t)))}},_=a(47),P=a(65),R=a(49);function T(){var e=Object(P.a)(["\n  mutation Login {\n    login {\n      token\n      login_status\n      register\n    }\n  }\n"]);return T=function(){return e},e}var W=Object(R.a)(T()),I=a(102),U=Object(p.a)((function(e){return{container:{margin:"3vh auto"},text:{marginBottom:"2vh"}}})),L=F((function(e){e.googleUser;var t=e.setGoogleUser,a=e.clientID,o=e.location,i=e.history,c=U(),s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],g=l[1],p=Object(_.a)(W),d=Object(u.a)(p,1)[0];void 0===sessionStorage.getItem("redirectTo")&&sessionStorage.setItem("redirectTo",b.a.parse(o.search).redirectTo||"");return r.a.createElement(f.a,{className:c.container},r.a.createElement(x,null),r.a.createElement("div",{className:c.text},r.a.createElement(y.a,{variant:"h2"},"Welcome RC Lee Hall mate!"),r.a.createElement(y.a,{variant:"h5"},"To continue using our app, please sign in using your HKU account.")),r.a.createElement(h.a,{onSuccess:function(e){console.log(e),t(e),d().then((function(t){var a=t.data.login,n=a.token,r=a.login_status,o=a.register;if(r){(new I.a).set("RCTC_USER",n,{path:"/",domain:".rctech.club"}),sessionStorage.getItem("redirectTo").length>0&&window.location.replace("https://".concat(sessionStorage.getItem("redirectTo"),"?id=").concat(n))}if(o){var c=function(){var e=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();return{id:e.getId(),first_name:e.getGivenName(),last_name:e.getFamilyName(),image_url:e.getImageUrl(),email_id:e.getEmail()}}();i.push({pathname:"register",state:{user:c,googleUserLogin:e,token:e.getAuthResponse().id_token}})}})).catch((function(e){console.log(e),alert("There was an error logging you in")}))},onRequest:function(){g(!0)},onFailure:function(){alert("Failed Google Login. Please try again.")},clientId:a,disabled:m,cookiePolicy:"single_host_origin"}),r.a.createElement(y.a,{variant:"h6",style:{margin:"40px 0"}},"If you keep coming back here after login, please"," ",r.a.createElement("a",{href:"https://".concat(sessionStorage.getItem("redirectTo"))},"click here")))})),C=a(75),$=a.n(C),N=a(99),q=a(171),z=a(177),A=a(178),B=a(175),G=a(172),H=a(174);function D(){var e=Object(P.a)(["\n  mutation Register($username: String!, $phone: String!, $room_no: String!) {\n    register(user: { username: $username, phone: $phone, room_no: $room_no }) {\n      username\n    }\n  }\n"]);return D=function(){return e},e}var J=Object(R.a)(D()),K=Object(p.a)({container:{margin:"3vh auto"},disclaimer:{margin:"1vmax"},form:{margin:"2vh auto"}}),M=F((function(e){var t=e.setGoogleUser,a=e.location,o=e.history,i=K(),c=Object(n.useState)({}),l=Object(u.a)(c,2),m=l[0],g=l[1],h=Object(_.a)(J),p=Object(u.a)(h,2),d=p[0],b=p[1].error;Object(n.useEffect)((function(){a.state&&a.state.googleUserLogin&&t(a.state.googleUserLogin),b&&(alert("There was an error completing registration. Please register again."),o.replace({location:"/"}))}),[b,a,o,t]);var v=function(e){for(var t=function(e){return!e||""===e},a=0,n=[{id:"username",method:function(e){return RegExp("^[0-9A-z]{4,20}$").test(e)}},{id:"phone",method:function(e){return RegExp("^[0-9]{8}$").test(e)}},{id:"room_no",name:"room number",method:function(e){return RegExp("^[1-9][0-9]{2,3}([A,B])?$").test(e)}}];a<n.length;a++){var r=n[a],o=e[r.id];if(t(o)||!r.method(o))return{validation:!1,field:{id:r.name?r.name:r.id,value:o}}}return{validation:!0}},E=function(e){m[e.target.id]=e.target.value,g(m)},w=function(){var e=Object(N.a)($.a.mark((function e(){var t,a,n,r,i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=v(m),a=t.validation,n=t.field,!a){e.next=16;break}return e.prev=2,e.next=5,d({variables:m});case 5:r=e.sent,(i=r.data)&&i.register&&i.register.username?(alert("Registration complete! Login again to continue"),o.replace({location:"/"})):(alert("There was an error with registration. Please try again."),o.replace({location:"/"})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),alert("There was an error with registration. Please try again"),o.replace({location:"/"});case 14:e.next=17;break;case 16:alert("".concat(n.id," of value ").concat(n.value," is not allowed."));case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();if(void 0===a.state)return r.a.createElement(s.a,{to:"/"});var x=a.state.user;return r.a.createElement(f.a,{className:i.container},r.a.createElement(y.a,{variant:"h3"},"Hello, ".concat(x.first_name)),r.a.createElement("div",{className:i.disclaimer},"To continue using our services, we require you to sign in with Google, in which you have successfully completed that step. While we implicitly have access to your Google account information, other important details such as your room number are needed to deliver the best user experience.",r.a.createElement("br",null),"By submitting the form below, you agree that we are allowed to store your info in our database. We will not share your personal data with any other 3rd party applications and services."),r.a.createElement(q.a,{className:i.form},r.a.createElement(z.a,{required:!0},r.a.createElement(A.a,{htmlFor:"username"},"Username"),r.a.createElement(B.a,{id:"username","aria-describedby":"username-helper-text",onChange:E,inputProps:{maxLength:20}}),r.a.createElement(G.a,{id:"username-helper-text"},"For example: iamawesome. Only alphanumeric characters are allowed with a minimum length of 4 and a maximum length of 20.")),r.a.createElement(z.a,{required:!0},r.a.createElement(A.a,{htmlFor:"phone"},"Phone (Hong Kong)"),r.a.createElement(B.a,{id:"phone","aria-describedby":"phone-helper-text",onChange:E,type:"number",inputProps:{maxLength:8}}),r.a.createElement(G.a,{id:"phone-helper-text"},"For example: 12345678")),r.a.createElement(z.a,{required:!0},r.a.createElement(A.a,{htmlFor:"room_no"},"Room number"),r.a.createElement(B.a,{id:"room_no","aria-describedby":"room-helper-text",onChange:E,inputProps:{maxLength:5}}),r.a.createElement(G.a,{id:"room-helper-text"},"For example: 924A")),r.a.createElement(H.a,{type:"submit",onClick:w},"Submit")))})),Q=m()((function(e){return{container:{textAlign:"center",justifyContent:"center",margin:"auto"}}})),V=function(){var e=Q();return r.a.createElement("div",{className:e.container},r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:L}),r.a.createElement(s.b,{path:"/register",exact:!0,component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(176),Y=a(179),Z=a(101),ee=Object(Y.a)(Object(Z.a)({palette:{primary:{light:"#727394",main:"#464866",dark:"#1d213b"},secondary:{main:"#ef9a9a"},background:{default:"#fff"},error:{main:"#B00020"},user:{main:"#ce93d8"},others:{main:"#9fa8da"}},typography:{h1:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"4em",margin:"20px 0"},h2:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0",fontSize:"3em"},h3:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"2em",margin:"20px 0"},h4:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0"},h5:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"1em"},h6:{fontFamily:"Roboto, sans-serif",fontWeight:400,fontSize:"1em"},subtitle1:{fontFamily:"Roboto, sans-serif",fontWeight:600},subtitle2:{fontFamily:"Roboto, sans-serif",fontWeight:200},button:{fontFamily:"Poppins, sans-serif",fontWeight:300}}})),te=a(173);i.a.render(r.a.createElement(X.a,{theme:ee},r.a.createElement(te.a,null),r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a.p+"static/media/logo.83c07097.png"}},[[107,1,2]]]);
//# sourceMappingURL=main.efbd2b55.chunk.js.map