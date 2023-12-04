import{_ as c}from"./burgerMenu-ba336864.js";import{_ as u,o as n,c as i,A as r,e as t,n as d}from"./index-d33e413e.js";const p={mounted(){this.puzzleRoute+="puzzle"},data(){return{clicked:!1,className:"btn btn-square btn-primary btn-outline mb-2",puzzleRoute:"/pegasus/"}},methods:{update(){this.clicked=!this.clicked,this.clicked&&(this.className="btn btn-square btn-primary mb-2"),this.clicked||(this.className="btn btn-square btn-primary btn-outline mb-2")}}},m={class:"flex flex-row overflow-hidden"},h=t("img",{src:c,class:"w-1/2"},null,-1),b=[h],_={key:1,class:"menu bg-base-200 rounded-lg ml-4 flex-row h-full"},f=t("span",{class:"material-symbols-outlined"}," home ",-1),g=[f],k=t("li",null,[t("a",{class:"tooltip tooltip-right rounded-lg w-full","data-tip":"Download Extension",href:"https://github.com/DahliaBloom/pegasus/blob/master/public/chess.com2pegasus.crx",target:"_blank"},[t("span",{class:"material-symbols-outlined"}," Download ")])],-1),w=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-7"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"})],-1),v=[w];function z(o,s,x,B,l,a){return n(),i("div",m,[r("",!0),t("button",{class:d(l.className),onClick:s[0]||(s[0]=(...e)=>a.update&&a.update(...e))},b,2),l.clicked?(n(),i("ul",_,[t("li",null,[t("a",{class:"tooltip tooltip-right rounded-lg w-full","data-tip":"Home",onClick:s[1]||(s[1]=e=>o.$router.push("/"))},g)]),k,t("li",null,[t("a",{class:"tooltip tooltip-right rounded-lg w-full","data-tip":"Puzzles",onClick:s[2]||(s[2]=e=>o.$router.push("/puzzle"))},v)])])):r("",!0)])}const N=u(p,[["render",z]]);export{N as B};