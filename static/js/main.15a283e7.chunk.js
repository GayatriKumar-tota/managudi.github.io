(this["webpackJsonpmy-react-google-login"]=this["webpackJsonpmy-react-google-login"]||[]).push([[0],{11:function(e,o,n){},12:function(e,o,n){},14:function(e,o,n){"use strict";n.r(o);var t=n(0),l=n.n(t),a=n(4),c=n.n(a),r=(n(11),n(12),n(1)),i=n(2),s=n.n(i),u=n(5),g=function(e){var o=1e3*(e.tokenObj.expires_in||3300),n=function(){var t=Object(u.a)(s.a.mark((function t(){var l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.reloadAuthResponse();case 2:l=t.sent,o=1e3*(l.expires_in||3300),console.log("newAuthRes:",l),localStorage.setItem("authToken",l.id_token),setTimeout(n,o);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();setTimeout(n,o)};var m=function(){return l.a.createElement("div",null,l.a.createElement(r.GoogleLogin,{clientId:"529849094404-ehimhb1h26i1cgbmr6u7dlk33la9nq1h.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),alert("Logged in successfully welcome ".concat(e.profileObj.name," \ud83d\ude0d. \n See console for full profile object.")),g(e)},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0}))};var f=function(){return l.a.createElement("div",null,l.a.createElement(r.GoogleLogout,{clientId:"529849094404-ehimhb1h26i1cgbmr6u7dlk33la9nq1h.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){console.log("Logout made successfully"),alert("Logout made successfully \u270c")}}))};var h=function(){var e=Object(r.useGoogleLogin)({onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),alert("Logged in successfully welcome ".concat(e.profileObj.name," \ud83d\ude0d. \n See console for full profile object.")),g(e)},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},clientId:"529849094404-ehimhb1h26i1cgbmr6u7dlk33la9nq1h.apps.googleusercontent.com",isSignedIn:!0,accessType:"offline"}).signIn;return l.a.createElement("button",{onClick:e,className:"button"},l.a.createElement("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),l.a.createElement("span",{className:"buttonText"},"Sign in with Google"))};var p=function(){var e=Object(r.useGoogleLogout)({clientId:"529849094404-ehimhb1h26i1cgbmr6u7dlk33la9nq1h.apps.googleusercontent.com",onLogoutSuccess:function(e){console.log("Logged out Success"),alert("Logged out Successfully \u270c")},onFailure:function(){console.log("Handle failure cases")}}).signOut;return l.a.createElement("button",{onClick:e,className:"button"},l.a.createElement("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),l.a.createElement("span",{className:"buttonText"},"Sign out"))};var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"The Components way"),l.a.createElement(m,null),l.a.createElement("br",null),l.a.createElement(f,null),l.a.createElement("h2",null,"The Hooks way"),l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement("br",null),"If it does helped you feel free to star"," ",l.a.createElement("a",{href:"https://github.com/GayatriKumar-tota/managudi/react-google-authentication"},"Github Repo")," ","\ud83d\ude09")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,o,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.15a283e7.chunk.js.map