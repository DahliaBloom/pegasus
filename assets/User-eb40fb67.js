import{o as r,c as i,e,j as _,t as d,_ as b,g as k,l as u,h,r as f,b as A,i as V,m as S,n as x,F as M,p as C,q as E,s as B,x as L}from"./index-d33e413e.js";import{s as O,H as U}from"./HomeButton-d8acb905.js";import{c as w}from"./chessApi-0c270b2c.js";import{C as j}from"./chess-19eddd7f.js";import"./_commonjsHelpers-725317a4.js";const G="/pegasus/assets/404-error-74c25dd8.png",K={class:"min-h-screen flex flex-col"},T={class:"px-10 flex flex-col justify-center items-center flex-grow"},z=e("img",{src:G,alt:"404 Error",class:"w-52"},null,-1),F={class:"text-2xl text-center"},J=e("br",null,null,-1),D=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),N=e("div",{class:"text-xs ml-auto mr-2 mb-1 text-right"},[e("a",{href:"https://www.flaticon.com/free-icons/404-error",title:"404 error icons"},"404 error icons created by Ghozi Muhtarom - Flaticon")],-1),H={__name:"UserNotFound",props:{username:String},setup(t){return(n,s)=>(r(),i("div",K,[e("div",T,[z,e("p",F,[_(" Sorry, but we could not find the user "),e("i",null,d(t.username),1),_("."),J,_("Perhaps you have mistyped? ")]),e("button",{class:"btn btn-outline btn-primary m-6 gap-3",onClick:s[0]||(s[0]=a=>n.$router.push("/"))},[D,_(" Go back home ")])]),N]))}},X={},Y={class:"px-10 flex flex-col justify-center items-center min-h-screen"},Q=e("progress",{class:"progress progress-primary w-1/4"},null,-1),R=[Q];function q(t,n){return r(),i("div",Y,R)}const W=b(X,[["render",q]]),P=["href"],Z={class:"stats shadow-2xl"},$={class:"stat"},ee={class:"stat-figure"},se={class:"avatar"},te={class:"w-24 rounded-full"},ne=["src"],ae={class:"stat-value"},oe={class:"stat-title text-right"},le={class:"stat"},re=e("div",{class:"stat-title"},"Followers",-1),ce={class:"stat-value text-right"},ie={class:"stat"},ue={__name:"UserInfo",props:{data:Object},setup(t){return(n,s)=>{const a=k("flag");return r(),i("a",{href:t.data.url,target:"_blank"},[e("div",Z,[e("div",$,[e("div",ee,[e("div",se,[e("div",te,[e("img",{src:t.data.avatar??u(O)},null,8,ne)])])]),e("div",ae,d(t.data.name??t.data.username),1),e("div",oe,d(t.data.username),1)]),e("div",le,[re,e("div",ce,d(t.data.followers),1)]),e("div",ie,[h(a,{iso:t.data.country.split("/").pop(),class:"stat-figure rounded-xl text-6xl"},null,8,["iso"])])])],8,P)}}},de={key:0},he={class:"stats"},me={class:"stat"},ve={class:"stat-figure"},fe={class:"avatar"},ge={class:"w-12 rounded-full"},_e=["src"],pe={class:"stat-value text-lg"},ye={class:"stat-title text-right text-base"},we={class:"stat"},Ae={key:1},xe={__name:"UserInfoGame",props:{username:String},setup(t){const n=t,s=f(void 0);return A(()=>{const a=o=>{w.getPlayer(n.username).then(c=>{s.value=c.body}).catch(()=>{o<10&&a(++o)})};a(0)}),(a,o)=>{const c=k("flag"),l=k("router-link");return s.value!==void 0?(r(),i("div",de,[h(l,{to:"/user?username="+t.username},{default:V(()=>[e("div",he,[e("div",me,[e("div",ve,[e("div",fe,[e("div",ge,[e("img",{src:s.value.avatar??u(O)},null,8,_e)])])]),e("div",pe,d(s.value.name??s.value.username),1),e("div",ye,d(s.value.username),1)]),e("div",we,[h(c,{iso:s.value.country.split("/").pop(),class:"stat-figure rounded-lg text-3xl"},null,8,["iso"])])])]),_:1},8,["to"])])):(r(),i("p",Ae,d(t.username),1))}}},ke={},be={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-clock"},Se=e("circle",{cx:"12",cy:"12",r:"10"},null,-1),Me=e("polyline",{points:"12 6 12 12 16 14"},null,-1),Ce=[Se,Me];function Be(t,n){return r(),i("svg",be,Ce)}const Ie=b(ke,[["render",Be]]),Oe={},Ve={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-calendar"},Ee=e("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},null,-1),Le=e("line",{x1:"16",y1:"2",x2:"16",y2:"6"},null,-1),Ue=e("line",{x1:"8",y1:"2",x2:"8",y2:"6"},null,-1),je=e("line",{x1:"3",y1:"10",x2:"21",y2:"10"},null,-1),Ge=[Ee,Le,Ue,je];function Ke(t,n){return r(),i("svg",Ve,Ge)}const Te=b(Oe,[["render",Ke]]),I="data:image/png;base64,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",ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaUlEQVR4nO2aSWsUQRSAnygILii4gDuIHsQdFwTBg39AT+pBbx4ET3pTccGT6E0FBQ/idVwm6Xo9Gj0MOvNqosTl4ALuBzVq+r2JCTEompaaREEzM8bOlHR1+oN3a2jm421V0wApKSkpKSkpKZbI5cKxiviI0oKK+DxqOYRF2e5rXn/15scZMFJALYdRS1grlJZeRfJoQNRJ1MEej8qbm0uyrKnYMRGSgtKs6omoG8TfjaBsvjwZXEf1l0M0Eb+EyI18PhwDLoOmJwxXhCkh4pPgMkiyoxEiTHiad4Gr+JrXN0qEIv7qU3kjuEhTsWNmo0QMyOBm3bkAXCMMw1FI0tNIGajlyY02mQSuoUgeN1iEiWuZTDgaXEJpQQsiQkVyHFwCiU/ZEGHC17wTXMEr8V5bIpD4C5JsABfwqLzZmoiKDHnvFWQuxB1VkOVWRVQOb3y/5UH7eIgzTcWOieYAZV0G8WUzriGxp1D9L8FHIc5k8+XJiuT6f8iKPq/EWyHOZDLhaNRyzH6/kF6lg7UQd3zNOytjz66Md7nWYDa4cCpVmj9YzQ7iu17b23EQd7DQOR+1PLRcKpnYTxJDJv9hgtLcZLlM9oMLhGE4ylz5WxNB3Ieat4ArKOJtSPLZkpBu8xcBuEKuEKxTJO12SoRft1D3dHCF7B2eY84ODZdBHCjiJdXeeeX2pykQR1oetI9XWi41UgIWyyv+fI/SwSwkud3fS+RRLE+xobnv1Hy0v9nZksBPf2+schbiilfirZEvgGtIMFsnEj8bPGHkHMQZbO1chSRv7EpgVqVPCyHuXL35cYYiaR2aCC77xc7VQ5VgnveoYw249L0FEl+IIsFMo0RI+G0T1bKv6q1XjXIYGMnPBz8vPTkqrwSXwaJsMhvjUCSg5hc1M6gkB8B1fC1LkfhlvXKomgmDp8VBcJ3cra5p1TZGsxzVzYQkZkbUTKgShyApZKNLSI6M7PAluC/Dq9UToq7nrvYMpfletbXZ7AnmR0XLjGAPuITX1jW1loSfz0STwd+wFCwCVwgrR3Z5UkvCcGQoLSfAJZBkntJ8GknO1PvgLIIMH5IK/puMi5BkcIgyfJLdkHTwLzIU8avYf4DSKMyIrEyHKhKaC7wYRhJYChaZ6WAao+kJphyc+AM5JSUlJSUlBVznB7pWUlBt50tqAAAAAElFTkSuQmCC",Fe={class:"flex items-center space-x-8"},Je={class:"flex"},De={class:"flex"},Ne=["src"],He={class:"text-right"},Xe={__name:"GamePreview",props:{gameData:Object,username:String},setup(t){const n=t;let s=!0;const a=new j;A(()=>{a.loadPgn(n.gameData.pgn)});function o(){const c=n.gameData.white,l=n.gameData.black;if(c.username.toLowerCase()===n.username.toLowerCase()){if(c.result==="win")return I}else if(l.result==="win")return I;return ze}return(c,l)=>(r(),i("div",{class:"w-full flex flex-row justify-between",onClick:l[2]||(l[2]=()=>{u(s)&&c.$router.push("/analyze?pgn="+encodeURI(n.gameData.pgn))})},[e("div",Fe,[e("div",Je,[h(Te,{class:"mr-2"}),_(" "+d(u(a)._header.EndDate),1)]),e("div",De,[h(Ie,{class:"mr-2"}),_(" "+d(u(a)._header.EndTime),1)]),e("img",{src:o(),class:"h-9"},null,8,Ne)]),e("div",He,[h(xe,{onMouseenter:l[0]||(l[0]=m=>S(s)?s.value=!1:s=!1),onMouseleave:l[1]||(l[1]=m=>S(s)?s.value=!0:s=!0),username:t.username.toLowerCase()===u(a)._header.White.toLowerCase()?u(a)._header.Black:u(a)._header.White},null,8,["username"])])]))}},Ye={key:0},Qe=e("progress",{class:"progress progress-primary w-48"},null,-1),Re=[Qe],qe={key:1},We={class:"min-h-screen fixed top-0 flex flex-col justify-center",style:{left:"10%"}},Pe={class:"menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 fixed"},Ze=["onClick"],$e={class:"flex flex-row space-x-4",style:{width:"80vw"}},es=e("div",{class:"p-14"},null,-1),ss={class:"menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 h-mi w-full"},ts={key:0,class:"flex justify-center items-center flex-col h-full"},ns=e("progress",{class:"progress progress-primary w-48"},null,-1),as=[ns],p=6,os={__name:"PlayedGamesTable",props:{username:String},setup(t){const n=t,s=f(void 0),a=f(0),o=f(0),c=f(void 0);A(()=>{w.getPlayerMonthlyArchives(n.username).then(m=>{s.value=m.body.archives.map(v=>v.match(/\d{4}\/\d{2}$/)[0]).reverse(),l()})});function l(){c.value=void 0;const[m,v]=s.value[a.value].split("/");w.getPlayerCompleteMonthlyArchives(n.username,m,v).then(g=>{c.value=g.body.games.filter(y=>y.pgn!==void 0).reverse()})}return(m,v)=>s.value===void 0?(r(),i("div",Ye,Re)):(r(),i("div",qe,[e("div",We,[e("ul",Pe,[e("li",{class:x({disabled:o.value<=0})},[e("a",{onClick:v[0]||(v[0]=()=>{o.value>0&&(o.value-=p)}),class:"flex justify-center"},"»")],2),(r(!0),i(M,null,C(s.value.slice(o.value,o.value+p),(g,y)=>(r(),i("li",null,[e("a",{class:x({active:y+o.value===a.value}),onClick:()=>{a.value=y+o.value,l()}},d(g),11,Ze)]))),256)),e("li",{class:x({disabled:o.value+p>=s.value.length})},[e("a",{onClick:v[1]||(v[1]=()=>{o.value+p<s.value.length&&(o.value+=p)}),class:"flex justify-center"},"«")],2)])]),e("div",$e,[es,e("div",ss,[c.value===void 0?(r(),i("div",ts,as)):(r(!0),i(M,{key:1},C(c.value,g=>(r(),i("li",{key:g.uuid},[e("a",null,[h(Xe,{"game-data":g,username:t.username},null,8,["game-data","username"])])]))),128))])])]))}},ls={key:2},rs={class:"p-5 flex flex-col items-center space-y-8 min-h-screen"},cs=L('<div class="text-xs ml-auto text-right flex-grow flex items-end"><a target="_blank" href="https://icons8.com/icon/57992/laurel-wreath">Laurel Wreath</a> icon by  <a target="_blank" href="https://icons8.com">Icons8</a>   |   <a target="_blank" href="https://icons8.com/icon/KI9OU8UQdUam/sword">Sword</a> icon by  <a target="_blank" href="https://icons8.com">Icons8</a></div>',1),vs={__name:"User",setup(t){let n;const s=f(!0),a=f(!1);return A(()=>{const o=(E().query.username??"").toString(),c=l=>{w.getPlayer(o).then(m=>{n=m.body,l=10}).catch(()=>{l>9?(n=o,a.value=!0):c(++l)}).finally(()=>{l>9&&(s.value=!1)})};c(0)}),(o,c)=>s.value?(r(),B(W,{key:0})):a.value?(r(),B(H,{key:1,username:u(n)},null,8,["username"])):(r(),i("div",ls,[h(U),e("div",rs,[e("div",null,[h(ue,{data:u(n)},null,8,["data"])]),e("div",null,[h(os,{username:u(n).username},null,8,["username"])]),cs])]))}};export{vs as default};