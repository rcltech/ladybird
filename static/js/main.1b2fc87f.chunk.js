(this["webpackJsonpladybird-ui"]=this["webpackJsonpladybird-ui"]||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/logo.83c07097.png"},131:function(e,t,a){e.exports=a(183)},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),c=a(93),s=a(42),l=a(43),u=a.n(l),m=a(62),h=a(26),p=a(107),g=a.n(p),d=a(201),f=a(199),b=a(200),v=a(122),y=a(108),E=a.n(y),x=a(109),w=a.n(x)()((function(e){return{container:{display:"flex",justifyItems:"center",justifyContent:"center"},logo:{maxHeight:"calc(112px + 1vmin)"}}})),j=function(){var e=w();return r.a.createElement(f.a,{className:e.container},r.a.createElement(b.a,{href:"https://www.rctech.club",rel:"noopener noreferrer"},r.a.createElement("img",{className:e.logo,src:E.a,alt:"RCTECH"})))},k=a(125),O=r.a.createContext({googleUser:void 0,user_details:{id:"",first_name:"",last_name:"",image_url:"",email_id:""},setCurrentGoogleUser:function(){}}),C=a(84),_=a.n(C),P=a(207),S=Object(d.a)((function(e){return{container:{display:"grid",flexDirection:"column",margin:"3vh auto",justifyContent:"center",justifyItems:"center",textAlign:"center"},text:{margin:"4vh"},redirect:{margin:"40px auto"}}})),W=function(e){var t=e.location,a=e.history,o=S(),i=Object(n.useState)(!1),c=Object(h.a)(i,2),s=c[0],l=c[1],p=Object(n.useContext)(O).setCurrentGoogleUser,d=Object(P.a)(),y=sessionStorage.getItem("redirectTo"),E=new v.a;Object(n.useEffect)((function(){null!==y&&""!==y||_.a.parse(t.search).redirectTo&&""!==_.a.parse(t.search).redirectTo&&sessionStorage.setItem("redirectTo",_.a.parse(t.search).redirectTo)}),[t.search,y]);var x=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://phoenix.rctech.club/oauth/user/login",e.prev=1,e.next=4,fetch("https://phoenix.rctech.club/oauth/user/login",{method:"POST",credentials:"include",headers:{authorization:t}});case 4:return a=e.sent,e.t0=JSON,e.next=8,a.text();case 8:return e.t1=e.sent,e.abrupt("return",e.t0.parse.call(e.t0,e.t1));case 12:return e.prev=12,e.t2=e.catch(1),console.error(e.t2),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t),e.next=3,x(t.getAuthResponse().id_token);case 3:(n=e.sent)?(r=n.registered,o=n.logged_in,i=n.token,console.log(n),r?o&&(".rctech.club",E.set("RCTC_USER",i,{path:"/",domain:".rctech.club"}),y&&y.length>0&&window.location.replace("".concat("https://").concat(y,"?id=").concat(i))):a.push({pathname:"register",state:{googleUserLogin:t,token:t.getAuthResponse().id_token}})):d({title:"User login error",description:"The user login details did not work. Try logging in again.",status:"error",duration:9e3,isClosable:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{className:o.container},r.a.createElement(j,null),r.a.createElement(f.a,null,r.a.createElement(k.a,{variant:"h2"},"Login")),r.a.createElement(f.a,{className:o.text},r.a.createElement(k.a,{variant:"h3"},"Welcome RC Lee Hall mate!"),r.a.createElement(k.a,{variant:"h5"},"To continue using our app, please sign in using your HKU account.")),r.a.createElement(g.a,{onSuccess:w,onRequest:function(){l(!0)},onFailure:function(){d({title:"Google login did not work!",description:"Please close the application and re-open it too see if this works.",status:"error",duration:9e3,isClosable:!0})},isSignedIn:!0,clientId:"798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com",disabled:s,cookiePolicy:"single_host_origin",uxMode:"redirect"}),r.a.createElement(f.a,{className:o.redirect},y&&""!==y?r.a.createElement(k.a,{variant:"body1"},"If you keep coming back here after login, please"," ",r.a.createElement(b.a,{href:y},"click here")):r.a.createElement(k.a,{variant:"body1"},"Please re-visit the application that redirected you here. We apologize for losing that information.")))},F=a(202),R=a(213),U=a(212),A=a(210),I=a(203),T=a(204),N=a(208),$=a(205),z=a(92),G=a(115),q=a(94);function H(){var e=Object(G.a)(["\n  mutation Register($username: String!, $phone: String!, $room_no: String!) {\n    register(user: { username: $username, phone: $phone, room_no: $room_no }) {\n      username\n    }\n  }\n"]);return H=function(){return e},e}var L,B=Object(q.a)(H()),J=a(73),K=a(61),Y=a(31),D=a(20),M=Object(d.a)({container:{margin:"3vh auto"},disclaimer:{margin:"2vh auto",textAlign:"left"},form:{margin:"2vh auto"}}),Q=(L=function(e){var t=e.location,a=e.history,o=M(),i=Object(P.a)(),c=Object(n.useState)(!1),l=Object(h.a)(c,2),p=l[0],g=l[1],d=Object(n.useState)({}),b=Object(h.a)(d,2),v=b[0],y=b[1],E=Object(z.a)(B),x=Object(h.a)(E,2),w=x[0],j=x[1].error,C=Object(n.useContext)(O),_=C.googleUser,S=C.user_details,W=C.setCurrentGoogleUser;Object(n.useEffect)((function(){_?W(_):a.replace({location:"/"}),j&&(i({title:"Error in registration",description:"Please try to register again. Contact us at contact@rctech.club if this keeps happening",status:"error",duration:9e3,isClosable:!0}),a.replace({location:"/"}))}),[_,a,j,W,i]);var G=function(e){for(var t=function(e){return!e||""===e},a=0,n=[{id:"username",method:function(e){return RegExp("^[0-9A-z]{4,20}$").test(e)}},{id:"phone",method:function(e){return RegExp("^[0-9]{8}$").test(e)}},{id:"room_no",name:"room number",method:function(e){return RegExp("^[1-9][0-9]{2,3}([A,B])?$").test(e)}}];a<n.length;a++){var r=n[a],o=e[r.id];if(t(o)||!r.method(o))return{validation:!1,message:"Your ".concat(r.name||r.id," of ").concat(o," is not accepted.")}}return p?{validation:!0}:{validation:!1,message:"You need to agree to our privacy terms."}},q=function(e){v[e.target.id]=e.target.value,y(v)},H=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=G(v),n=t.validation,r=t.message,!n){e.next=16;break}return e.prev=2,e.next=5,w({variables:v});case 5:o=e.sent,(c=o.data)&&c.register&&c.register.username?(i({title:"Account created.",description:"We've created your account for you. Please login again.",status:"success",duration:9e3,isClosable:!0}),a.replace({location:"/"})):(i({title:"Error in registration",description:"Please try to register again. Contact us at contact@rctech.club if this keeps happening",status:"error",duration:9e3,isClosable:!0}),a.replace({location:"/"})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),i({title:"Error in registration",description:"Please try to register again. Contact us at contact@rctech.club if this keeps happening",status:"error",duration:9e3,isClosable:!0}),a.replace({location:"/"});case 14:e.next=17;break;case 16:alert(r);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return void 0===t.state?r.a.createElement(s.a,{to:"/"}):r.a.createElement(f.a,{className:o.container},r.a.createElement(k.a,{variant:"h3"},"Hello, ".concat(S.first_name)),r.a.createElement(F.a,{className:o.form},r.a.createElement(R.a,{required:!0},r.a.createElement(U.a,{htmlFor:"username"},"Username"),r.a.createElement(A.a,{id:"username","aria-describedby":"username-helper-text",onChange:q,inputProps:{maxLength:20}}),r.a.createElement(I.a,{id:"username-helper-text"},"For example: iamawesome. Only alphanumeric characters are allowed with a minimum length of 4 and a maximum length of 20.")),r.a.createElement(R.a,{required:!0},r.a.createElement(U.a,{htmlFor:"phone"},"Phone (Hong Kong)"),r.a.createElement(A.a,{id:"phone","aria-describedby":"phone-helper-text",onChange:q,type:"number",inputProps:{maxLength:8}}),r.a.createElement(I.a,{id:"phone-helper-text"},"For example: 12345678")),r.a.createElement(R.a,{required:!0},r.a.createElement(U.a,{htmlFor:"room_no"},"Room number"),r.a.createElement(A.a,{id:"room_no","aria-describedby":"room-helper-text",onChange:q,inputProps:{maxLength:5}}),r.a.createElement(I.a,{id:"room-helper-text"},"For example: 924A")),r.a.createElement(f.a,{className:o.disclaimer},r.a.createElement(k.a,{variant:"h5"},"Privacy Agreement"),r.a.createElement(k.a,{variant:"body1"},"To continue using our services, we require you to sign in with Google, in which you have successfully completed that step. While we implicitly have access to your Google account information, other important details such as your room number are needed to deliver the best user experience. We will not share your personal data with any other 3rd party applications and services."),r.a.createElement("br",null),r.a.createElement(T.a,{control:r.a.createElement(N.a,{checked:p,onChange:function(){return g(!p)},name:"privacyAgreement",color:"primary"}),label:"I agree to the privacy agreement."})),r.a.createElement($.a,{type:"submit",onClick:H},"Submit")))},function(e){var t=Object(n.useContext)(O).googleUser,a=new J.a({uri:"https://phoenix.rctech.club/graphql",headers:{authorization:t?t.getAuthResponse().id_token:""}}),o=new K.a,i=new Y.a({cache:o,link:a});return r.a.createElement(D.a,{client:i},r.a.createElement(L,e))}),V=function(){var e=Object(P.a)(),t=function(){var e=Object(n.useState)(void 0),t=Object(h.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),i=Object(h.a)(o,2),c=i[0],s=i[1];return{googleUser:a,user_details:c,setCurrentGoogleUser:Object(n.useCallback)((function(e){var t=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();s({id:t.getId(),first_name:t.getGivenName(),last_name:t.getFamilyName(),image_url:t.getImageUrl(),email_id:t.getEmail()}),r(e)}),[])}}();return Object(n.useEffect)((function(){e({position:"bottom-left",title:"We use cookies to help you login",description:"When you login on this website, you agree to use cookies",status:"info",duration:9e3,isClosable:!0})}),[e]),r.a.createElement(O.Provider,{value:t},r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:W}),r.a.createElement(s.b,{path:"/register",exact:!0,component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(211),Z=a(121),ee=Object(X.a)(Object(Z.a)({palette:{primary:{light:"#727394",main:"#464866",dark:"#1d213b"},secondary:{main:"#ef9a9a"},background:{default:"#fff"},error:{main:"#B00020"},user:{main:"#ce93d8"},others:{main:"#9fa8da"}},typography:{h1:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"4em",margin:"20px 0"},h2:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0",fontSize:"3em"},h3:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"2em",margin:"20px 0"},h4:{fontFamily:"Poppins, sans-serif",fontWeight:200,margin:"20px 0"},h5:{fontFamily:"Poppins, sans-serif",fontWeight:200,fontSize:"1em"},h6:{fontFamily:"Roboto, sans-serif",fontWeight:400,fontSize:"1em"},subtitle1:{fontFamily:"Roboto, sans-serif",fontWeight:600},subtitle2:{fontFamily:"Roboto, sans-serif",fontWeight:200},button:{fontFamily:"Poppins, sans-serif",fontWeight:300}}})),te=a(198),ae=a(206),ne=a(56),re=a(209),oe=a(123);i.a.render(r.a.createElement(te.a,{theme:ee},r.a.createElement(ne.a,{theme:re.a},r.a.createElement(ae.a,null),r.a.createElement(oe.a,null),r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[131,1,2]]]);
//# sourceMappingURL=main.1b2fc87f.chunk.js.map