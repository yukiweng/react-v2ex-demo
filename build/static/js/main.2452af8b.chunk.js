(this["webpackJsonpmy-v2ex"]=this["webpackJsonpmy-v2ex"]||[]).push([[0],{166:function(e,n,t){},167:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(53),o=t.n(i),l=t(1),c=t(2),s=t(4);function u(){var e=Object(l.a)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    &>li{\n        list-style:none;\n        padding:0.5em;\n        color:#666;\n        &:hover{\n            color:#999;\n            cursor:pointer;\n        }\n    }\n"]);return u=function(){return e},e}function d(){var e=Object(l.a)(["\n    display:flex;\n    align-items:center;\n    font-size:28px;\n    font-weight:1000;\n    font-family:helvetica neue,luxi sans,dejavu sans,segoe ui,hiragino sans gb,microsoft yahei,sans-serif;\n    "]);return d=function(){return e},e}function m(){var e=Object(l.a)(["\n    width:100vw;\n    height:40px;\n    display:flex;\n    justify-content:space-around;\n    background:#fff;\n    box-shadow:0 5px 5px rgba(0,0,0,0.1);\n    & a{\n        color:inherit;\n    }\n"]);return m=function(){return e},e}var p=c.a.div(m()),h=c.a.div(d()),f=c.a.ul(u());var g=function(){return r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement(s.b,{to:"/"},"V2EX")),r.a.createElement(f,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"\u9996\u9875")),r.a.createElement("li",null,"\u767b\u5f55"),r.a.createElement("li",null,"\u6ce8\u518c")))},b=t(18),v=t(59),y=t(10),x=t(11),k=t(13),E=t(12),j=t(14);function w(e){var n=parseInt(Date.now()/1e3,10)-e;return n<60?"".concat(parseInt(n),"\u79d2\u524d"):n<3600?"".concat(parseInt(n/60),"\u5206\u949f\u524d"):n<86400?"".concat(parseInt(n/3600),"\u5c0f\u65f6\u524d"):"".concat(parseInt(n/86400),"\u5929\u524d")}var O=[{key:"tech",value:[{key:"programmer",name:"\u7a0b\u5e8f\u5458"},{key:"python",name:"Python"},{key:"idev",name:"iDev"}],name:"\u6280\u672f"},{key:"creative",value:[{key:"create",name:"\u5206\u4eab\u521b\u9020"},{key:"design",name:"\u8bbe\u8ba1"},{key:"ideas",name:"\u5947\u601d\u5999\u60f3"}],name:"\u521b\u610f"},{key:"play",value:[{key:"share",name:"\u5206\u4eab\u53d1\u73b0"},{key:"games",name:"\u7535\u5b50\u6e38\u620f"},{key:"movie",name:"\u7535\u5f71"},{key:"tv",name:"\u5267\u96c6"}],name:"\u597d\u73a9"}],L=[{key:"tech",value:["programmer","python","idev"],name:"\u6280\u672f\u8bdd\u9898"},{key:"creative",value:["create","design","ideas"],name:"\u521b\u610f\u76f8\u5173"},{key:"play",value:["share","games","movie","tv"],name:"\u597d\u73a9"}],_=t(5),D=t.n(_),z=function(e,n){var t=D.a.CancelToken.source(),a=[];if("string"===typeof e){var r="";switch(e){case"hot":r="/api/topics/hot.json";break;case"latest":r="/api/topics/latest.json"}D.a.get(r,{cancelToken:t.token}).then((function(e){(a=a.concat(e.data)).sort((function(e,n){return e.last_touched>n.last_touched?1:-1})),n(a,t)})).catch((function(){}))}else e.forEach((function(e){D.a.get("/api/topics/show.json",{params:{node_name:e.key},cancelToken:t.token}).then((function(e){(a=a.concat(e.data)).sort((function(e,n){return e.last_touched>n.last_touched?1:-1})),n(a,t)})).catch((function(){}))}))};function C(){var e=Object(l.a)(["\n    &>span{\n        margin-right:0.5em;\n        color:#999;\n        font-size:12px;\n        &:first-child{\n            background:#eee;\n            padding:0.2em 0.4em;\n            border-radius:4px;\n        }\n        &>a{\n            color:#666;\n            font-weight:bold;\n            &:active{\n                color:#666;\n            }\n        }\n    }\n"]);return C=function(){return e},e}function T(){var e=Object(l.a)(["\n    font-size:16px;\n    color:#666;\n    padding-bottom:0.5em;\n    &>a{\n        color:#666;\n    }\n"]);return T=function(){return e},e}function I(){var e=Object(l.a)(["\n    display:block;\n    &>li{\n        padding:1em 0.8em;\n        display:flex;\n        align-items:center;\n        border-top:1px solid #eee;\n        &>img{\n            width:48px;\n            height:48px;\n            flex-shrink:0\n        }\n        &>div{\n            margin-left:1em;\n            max-width:90%;\n        }\n        &>span{\n            display:inline-flex;\n            justify-content:center;\n            width:3em;\n            background:#778087;\n            border-radius:10px;\n            font-size:10px;\n            color:white;\n            font-weight:bold;\n            margin-left:auto;\n            &:last-child{\n                width:3em;\n            }\n        }\n    }\n"]);return I=function(){return e},e}function S(){var e=Object(l.a)(["\n    &>ul{\n        display:flex;\n        flex-wrap:wrap;\n        padding:0.8em;\n        &>li{\n            flex-shrink:0;\n            cursor:pointer;\n            padding:0.2em 0.5em;\n            margin-right:0.2em;\n            color:#666;\n            &.active{\n                background:#334;\n                color:#eee;\n                border-radius:4px;\n            }\n        }\n    }\n    &>div>ul{\n        display:flex;\n        flex-wrap:wrap;\n        padding:0.8em;\n        background:#eee;\n        &>li{\n            flex-shrink:0;\n            cursor:pointer;\n            padding:0.2em 0.5em;\n            margin-right:0.2em;\n            color:#666;\n            &:hover{\n                text-decoration:underline;\n            }\n        }\n    }\n    \n"]);return S=function(){return e},e}function W(){var e=Object(l.a)(["\n    max-width:60%;\n    margin:20px auto;\n    font-size:14px;\n    background:#fff;\n    box-shadow:0 5px 5px rgba(0,0,0,0.1);\n    border-radius:4px;\n    & li{\n        list-style:none;\n    }\n"]);return W=function(){return e},e}var A=c.a.div(W()),q=c.a.div(S()),M=c.a.ul(I()),N=c.a.div(T()),U=c.a.div(C()),G=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(k.a)(this,Object(E.a)(n).call(this))).state={dataList:[],tabs:[].concat(Object(v.a)(O),[{key:"hot",value:"hot",name:"\u6700\u70ed"},{key:"all",value:"latest",name:"\u5168\u90e8"}]),selected:"tech",source:null},e}return Object(j.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(A,null,r.a.createElement(q,null,r.a.createElement("ul",null,this.state.tabs.map((function(n){return r.a.createElement("li",{key:n.key,onClick:function(){return e.beginToGetData(n)},className:n.key===e.state.selected?"active":""},n.name)}))),this.state.tabs.map((function(n,t){return r.a.createElement("div",{key:t},n.key===e.state.selected&&"object"===typeof n.value?e.addLi(n.value):"")}))),r.a.createElement(M,null,this.state.dataList.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:e.member.avatar_large,alt:""}),r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(s.b,{to:{pathname:"/article",query:{id:e.id,tab:e.node.title}}},e.title)),r.a.createElement(U,null,r.a.createElement("span",null,e.node.title),r.a.createElement("span",null,"\u2022",r.a.createElement(s.b,{to:"/userInfo/".concat(e.member.username)},e.member.username)),r.a.createElement("span",null,"\u2022",w(e.last_touched)),r.a.createElement("span",null,"\u2022 \u6700\u540e\u56de\u590d\u6765\u81ea ",r.a.createElement(s.b,{to:"/userInfo/".concat(e.last_reply_by)},e.last_reply_by)))),r.a.createElement("span",null,e.replies))}))))}},{key:"addLi",value:function(e){return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.key},e.name)})))}},{key:"beginToGetData",value:function(e){var n=this;z(e.value,(function(t,a){n.setState(Object(b.a)({},n.state,{dataList:t,selected:e.key,source:a}))}))}},{key:"componentDidMount",value:function(){this.beginToGetData({key:"hot",value:"hot"})}},{key:"componentWillUnmount",value:function(){this.state.source.cancel()}}]),n}(r.a.Component),V=t(17),X=t(27),B=t.n(X);t(52);function J(){var e=Object(l.a)(["\n        list-style:none;\n        padding:1em;\n        display:flex;       \n        border-top:1px solid #eee;     \n        &>img{\n            width:48px;\n            height:48px;\n            flex-shrink:0\n        }\n        &>div{\n            margin-left:1em;\n            width:100%;\n            &>p{\n                font-size:14px;\n                padding:0.5em 0;\n                width:90%;\n                & a{    \n                    color:#666;\n                    &:hover{\n                       text-decoration: underline;\n                    }\n                }\n            }\n        }     \n"]);return J=function(){return e},e}function P(){var e=Object(l.a)(["\n    display:flex;\n    &>span{\n        color:#999;\n        font-size:14px;\n        margin-right:1em;\n        &:first-child{\n            color:#666;\n            font-weight:bold;\n        }\n        &:last-child{\n            display:inline-flex;\n            justify-content:center;\n            margin-left:auto;\n            margin-right:0;\n            background:#eee;\n            border-radius:10px;\n            width:2em;\n            font-size:12px;\n        }\n    }\n"]);return P=function(){return e},e}function $(){var e=Object(l.a)(["\n    box-shadow:0 5px 5px rgba(0,0,0,0.1);\n    border-radius:4px;\n    &>div{\n        padding:0.5em 1em;\n        &>span{\n        color:#999;\n        font-size:14px;\n        margin-right:1em;    \n    }\n"]);return $=function(){return e},e}var F=c.a.div($()),H=c.a.div(P()),K=c.a.li(J()),Q=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(k.a)(this,Object(E.a)(n).call(this))).state={dataList:[],source:null},e}return Object(j.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement("div",null,r.a.createElement("span",null,this.props.count," \u56de\u590d"),r.a.createElement("span",null,"|"),r.a.createElement("span",null,"\u76f4\u5230 ",new Date(1e3*this.props.last_touched).toLocaleString())),r.a.createElement("ul",null,this.state.dataList.map((function(e,n){return r.a.createElement(K,{key:e.member.id+n},r.a.createElement("img",{src:e.member.avatar_large,alt:""}),r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("span",null,r.a.createElement(s.b,{to:"/userinfo/".concat(e.member.username)},e.member.username)),r.a.createElement("span",null,w(e.created)),r.a.createElement("span",null,n+1)),r.a.createElement("div",{className:"markdown-body"},r.a.createElement(B.a,{source:e.content}))))}))))}},{key:"getData",value:function(){var e=this,n=this.props.id,t=D.a.CancelToken.source();D.a.get("/api/replies/show.json",{params:{topic_id:n},cancelToken:t.token}).then((function(n){e.setState({isLoading:!1,dataList:n.data,source:t})})).catch((function(){}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){this.state.source.cancel()}}]),n}(r.a.Component);function R(){var e=Object(l.a)(["\n    border-top:1px solid #eee;\n    border-bottom-left-radius:4px;\n    border-bottom-right-radius:4px;\n    margin-bottom:20px;\n    padding:1em;\n    font-size:14px;\n    box-shadow:0 5px 5px rgba(0,0,0,0.1);\n"]);return R=function(){return e},e}function Y(){var e=Object(l.a)(["\n    display:flex;\n    &>span{\n        color:#666;\n        font-size:14px;\n        margin-right:1em;\n    }\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n    font-size:24px;\n    padding:0.5em 0;\n"]);return Z=function(){return e},e}function ee(){var e=Object(l.a)(["\n    max-width:60%;\n    margin:auto;\n    &>*{\n        background:#fff;\n    }\n    &>div:first-child{\n        padding:1em;\n        margin-top:20px;\n        display:flex;\n        border-top-left-radius:4px;\n        border-top-right-radius:4px;\n        >img{\n            width:80px;\n            height:80px;\n            margin-left:auto;\n        }\n    }\n    & a{\n        color:#666;\n        &:hover{\n            text-decoration:underline;\n        }\n    }\n"]);return ee=function(){return e},e}var ne=c.a.div(ee()),te=c.a.div(Z()),ae=c.a.div(Y()),re=c.a.div(R()),ie=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(k.a)(this,Object(E.a)(n).call(this))).state={isLoading:!0,dataList:{},source:null},e}return Object(j.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoading?"":r.a.createElement(ne,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"V2EX > "),r.a.createElement("span",null,this.state.dataList.node.title),r.a.createElement(te,null,this.state.dataList.title),r.a.createElement(ae,null,r.a.createElement("span",null,r.a.createElement(s.b,{to:"/userinfo/".concat(this.state.dataList.member.username)},this.state.dataList.member.username)),r.a.createElement("span",null,"\u2022 ",w(this.state.dataList.created)),r.a.createElement("span",null,"\u2022 ",this.state.dataList.node.stars,"\u6b21\u70b9\u51fb"))),r.a.createElement("img",{src:this.state.dataList.member.avatar_large,alt:""})),r.a.createElement(re,{className:"markdown-body"},r.a.createElement(B.a,{source:this.state.dataList.content})),r.a.createElement(Q,{id:this.getId.bind(this)(),last_touched:this.state.dataList.last_touched,count:this.state.dataList.replies})))}},{key:"getData",value:function(){var e=this,n=this.getId(),t=D.a.CancelToken.source();D.a.get("/api/topics/show.json",{params:{id:n},cancelToken:t.token}).then((function(a){e.setState({isLoading:!1,dataList:a.data[0],source:t}),window.location.hash="/".concat(n)})).catch((function(){}))}},{key:"getId",value:function(){var e,n=this.props.location;return n.query&&n.query.id?(e=n.query.id,sessionStorage.setItem("id",e)):e=sessionStorage.getItem("id"),e}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){this.state.source.cancel()}}]),n}(r.a.Component);function oe(){var e=Object(l.a)(["\n    &>span{\n        margin-right:0.5em;\n        color:#999;\n        font-size:12px;\n        &:first-child{\n            background:#eee;\n            padding:0.2em 0.4em;\n            border-radius:4px;\n        }\n        &>a{\n            color:#666;\n            font-weight:bold;\n            &:active{\n                color:#666;\n            }\n        }\n    }\n"]);return oe=function(){return e},e}function le(){var e=Object(l.a)(["\n    font-size:16px;\n    color:#666;\n    padding-bottom:0.5em;\n    &>a{\n        color:#666;\n    }\n"]);return le=function(){return e},e}function ce(){var e=Object(l.a)(["\n    list-style:none;\n    display:block;\n    &>li{\n        padding:0.8em;\n        display:flex;\n        align-items:center;\n        border-top:1px solid #eee;\n        &>span{\n            display:inline-flex;\n            justify-content:center;\n            width:3em;\n            background:#778087;\n            border-radius:10px;\n            font-size:10px;\n            color:white;\n            font-weight:bold;\n            margin-left:auto;\n        }\n    }\n"]);return ce=function(){return e},e}function se(){var e=Object(l.a)(["\n    box-shadow:0 5px 5px rgba(0,0,0,0.1);\n"]);return se=function(){return e},e}var ue=c.a.div(se()),de=c.a.ul(ce()),me=c.a.div(le()),pe=c.a.div(oe()),he=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(k.a)(this,Object(E.a)(n).call(this))).state={dataList:[],isLoading:!0,source:null},e}return Object(j.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isLoading?"":r.a.createElement(ue,null,r.a.createElement(de,null,this.state.dataList.map((function(n){if(e.props.selectedArr&&e.props.selectedArr.indexOf(n.node.name)>=0||!e.props.selected)return r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement(me,null,r.a.createElement(s.b,{to:{pathname:"/article",query:{id:n.id,tab:n.node.title}}},n.title)),r.a.createElement(pe,null,r.a.createElement("span",null,n.node.title),r.a.createElement("span",null,"\u2022",r.a.createElement("a",{href:"#"},n.member.username)),r.a.createElement("span",null,"\u2022",w(n.last_touched)),r.a.createElement("span",null,"\u2022 \u6700\u540e\u56de\u590d\u6765\u81ea ",r.a.createElement(s.b,{to:"/userinfo/".concat(n.last_reply_by)},n.last_reply_by)))),r.a.createElement("span",null,n.replies))})))))}},{key:"getData",value:function(){var e=this,n=this.props.username,t=D.a.CancelToken.source();D.a.get("/api/topics/show.json",{params:{username:n},CancelToken:t.token}).then((function(n){0!==n.data.length&&e.setState(Object(b.a)({},e.state,{dataList:n.data,isLoading:!1,source:t}))})).catch((function(){}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){this.state.source.cancel()}}]),n}(r.a.Component),fe=function(e){return r.a.createElement(he,Object.assign({},e,{key:e.username}))};function ge(){var e=Object(l.a)(["\n    margin-top:20px;\n    padding:0 0.5em;\n    display:flex;\n    flex-wrap:wrap;\n    align-items:center;\n    font-size:14px;\n    color:#666;\n    border-top-left-radius:4px;\n    border-top-right-radius:4px;\n    &>img{\n        width:28px;\n        height:28px;\n        border-radius:50%;\n        flex-shrink:0;\n    }\n    &>span{\n        display:inline-block;\n        padding:0.5em;\n        margin:0 0.5em;\n        cursor:pointer;\n        flex-shrink:0;\n        &.active{\n            border-bottom:2px solid #666;\n        }\n    }\n"]);return ge=function(){return e},e}function be(){var e=Object(l.a)(["\n    max-width:60%;\n    margin:20px auto 0; \n    &>*{\n        background:#fff;\n    }\n    &>div:first-child{\n        display:flex;\n        align-items:center;\n        padding:0.8em;\n        box-shadow:0 5px 5px rgba(0,0,0,0.1);\n        border-radius:4px;\n        &>img{\n            width:60px;\n            height:60px;\n        }\n        &>div{\n            padding:0 1em;\n            &>span{\n                display:block;\n                :first-child{\n                    font-weight:bold;\n                    font-size:20px;\n                }\n                :last-child{\n                     padding-top:0.5em;\n                     color:#999;\n                     font-size:14px;\n                     margin-right:1em;\n                }\n            }\n        }\n    }\n    &>div:last-child{\n        border-bottom-left-radius:4px;\n        border-bottom-right-radius:4px;\n    }\n"]);return be=function(){return e},e}var ve=c.a.div(be()),ye=c.a.nav(ge()),xe=function(e){function n(){var e;return Object(y.a)(this,n),(e=Object(k.a)(this,Object(E.a)(n).call(this))).state={dataList:[],isLoading:!0,tabs:L,selected:"",selectedArr:[],source:null},e}return Object(j.a)(n,e),Object(x.a)(n,[{key:"changeSelected",value:function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState(Object(b.a)({},this.state,{selected:n.key,selectedArr:n.value})),e=n.key?n.key:"",window.location.hash="/".concat(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isLoading&&this.state.dataList?"":r.a.createElement(ve,null,r.a.createElement("div",null,r.a.createElement("img",{src:this.state.dataList.avatar_large,alt:""}),r.a.createElement("div",null,r.a.createElement("span",null,this.state.dataList.username),r.a.createElement("span",null,"V2EX \u7b2c ",this.state.dataList.id," \u53f7\u4f1a\u5458\uff0c\u52a0\u5165\u4e8e ",new Date(1e3*this.state.dataList.created).toLocaleString()))),r.a.createElement(ye,null,r.a.createElement("img",{src:this.state.dataList.avatar_large,alt:""}),r.a.createElement("span",{onClick:function(){return e.changeSelected()},className:this.state.selected?"":"active"},this.props.username," \u521b\u5efa\u7684\u6240\u6709\u4e3b\u9898"),this.state.tabs.map((function(n){return r.a.createElement("span",{key:n.key,onClick:function(){return e.changeSelected(n)},className:n.key===e.state.selected?"active":""},n.name)}))),r.a.createElement(fe,{username:this.props.match.params.username,selected:this.state.selected,selectedArr:this.state.selectedArr})))}},{key:"getData",value:function(){var e=this,n=this.props.match.params.username,t=D.a.CancelToken.source();D.a.get("/api/members/show.json",{params:{username:n},cancelToken:t.token}).then((function(n){e.setState(Object(b.a)({},e.state,{isLoading:!1,dataList:n.data,source:t}))})).catch((function(){}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){this.state.source.cancel()}}]),n}(r.a.Component),ke=function(e){return r.a.createElement(xe,Object.assign({},e,{key:e.match.params.username}))};var Ee=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(V.c,null,r.a.createElement(V.a,{path:"/article/",component:ie}),r.a.createElement(V.a,{path:"/userinfo/:username",component:ke}),r.a.createElement(V.a,{path:"/",component:G}))))};t(166),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,n,t){e.exports=t(167)}},[[61,1,2]]]);
//# sourceMappingURL=main.2452af8b.chunk.js.map