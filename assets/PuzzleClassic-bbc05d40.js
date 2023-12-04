import{g,C as k,_ as M,a as z,b as v,c as x}from"./skull-c0e935b8.js";import{C as c}from"./chess-19eddd7f.js";import{_ as N}from"./Chessboard-70016e18.js";import{B as A}from"./BurgerMenuHorizontal-f2acbac4.js";import{_ as C,g as m,o as r,c as a,e as t,h as d,w as P,v as B,t as n,z as q,F as f,p,A as H}from"./index-d33e413e.js";import"./burgerMenu-ba336864.js";const S={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},data(){return{difficulty:1e3,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",isWhite:!1,puzzle:{Themes:[]},correctMoves:[],moveNumber:0,square:"",wrongAttempts:0,history:[0],accuracy:{total:0,right:0,percent:100},streak:0,history2:[[-1,-1,-1,-1,-1]],boardAPI:null,offset:0}},async created(){await this.getNewPuzzle()},methods:{async getNewPuzzle(){this.puzzle=await g(this.difficulty,Math.floor(Math.random()*25)),console.log(this.puzzle),this.fen=""+this.puzzle.FEN,this.puzzle.Themes=this.puzzle.Themes.split(" "),this.correctMoves=this.puzzle.Moves.split(" "),this.isWhite=this.fen.split(" ")[1]=="b",await this.makeFirstMove()},async sleep(e){return new Promise(s=>setTimeout(s,e))},async makeFirstMove(){this.fen=""+this.puzzle.FEN,this.$refs.checkMark.deactivate(),await this.sleep(500);const e=new c(this.fen);e.move(this.correctMoves[0]),this.fen=e.fen(),this.moveNumber=1},async handleMove(e){console.log(e);const s=new c(this.fen);if(s.move(e),s.isCheckmate()||this.correctMoves[this.moveNumber]==e.from+e.to)if(this.square=e.to,this.moveNumber==this.correctMoves.length-1){this.accuracy.total++;var h=new Audio("/src/assets/success_sound.wav");h.play(),this.wrongAttempts==0&&(this.difficulty+=20+this.streak+Math.floor(Math.random()*10),this.accuracy.right++,this.streak++,this.difficulty-=this.offset),this.wrongAttempts==1&&(this.difficulty-=5+Math.floor(Math.random()*10),this.streak=0),this.wrongAttempts>1&&(this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0),this.difficulty>3e3&&(this.difficulty=3e3),this.history.push(this.wrongAttempts),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=this.wrongAttempts,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()}else{var h=new Audio("/src/assets/click_double.wav");h.play(),this.$refs.checkMark.activate();const i=new c(this.fen);i.move(e.from+e.to),i.move(this.correctMoves[this.moveNumber+1]),this.fen=i.fen(),this.moveNumber+=2}else{var h=new Audio("/src/assets/puzzle_fail.wav");h.play(),this.$refs.checkMark.deactivate(),this.wrongAttempts++,await this.makeFirstMove()}},async skip(){this.accuracy.total++,this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0,this.history.push(5),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=5,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()},makeHint(){console.log(this.correctMoves[this.moveNumber]),this.boardAPI.board.selectSquare(this.correctMoves[this.moveNumber][0]+this.correctMoves[this.moveNumber][1]),this.offset=10},async makeSolution(){this.$refs.checkMark.deactivate();const e=new c(this.fen);if(e.move(this.correctMoves[this.moveNumber]),this.moveNumber++,this.fen=e.fen(),this.wrongAttempts=2,e.isCheckmate()||this.moveNumber==this.correctMoves.length){this.accuracy.total++;var s=new Audio("/src/assets/success_sound.wav");s.play(),await this.sleep(1e3),this.wrongAttempts==0&&(this.difficulty+=20+this.streak+Math.floor(Math.random()*10),this.accuracy.right++,this.streak++),this.wrongAttempts==1&&(this.difficulty-=5+Math.floor(Math.random()*10),this.streak=0),this.wrongAttempts>1&&(this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0),this.difficulty>3e3&&(this.difficulty=3e3),this.history.push(this.wrongAttempts),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=this.wrongAttempts,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()}else{var s=new Audio("/src/assets/click_double.wav");s.play(),await this.sleep(1e3);const u=new c(this.fen);u.move(this.correctMoves[this.moveNumber]),this.moveNumber++,this.fen=u.fen()}}},watch:{difficulty(e){this.difficulty=Number(e)}},components:{Chessboard:N,Checkmark:k,BurgerMenuHorizontal:A}},F={class:"h-screen flex flex-col w-full sm:flex-row justify-center overflow-hidden"},j={class:"sm:basis-1/4 w-full flex flex-col sm:h-full p-2 sm:p-4 items-center"},T={class:"w-full flex flex-row"},V=t("span",{class:"material-symbols-outlined scale-150"}," home ",-1),W=[V],E={class:"ml-36 relative w-1/2 scale-[3] sm:hidden flex items-center justify-center"},I=t("img",{src:M,class:"absolute z-10"},null,-1),L={class:"absolute z-20 text-black font-bold text-xs mb-2"},O={class:"text-xl mt-2"},R={class:"sm:flex w-full justify-between p-4 hidden"},D={class:"relative w-1/2 scale-110"},K={class:"ml-36 relative w-1/2 scale-[3] flex items-center justify-center"},Q=t("img",{src:z,class:"absolute z-10"},null,-1),U={class:"absolute z-20 text-black font-bold mt-5 text-xs"},G={class:"border-accent block border-4 rounded-xl m-4 w-full sm:h-1/2 h-16"},J={class:"flex-grow w-full h-full"},X={class:"flex-content"},Y={class:"scrollable-content-wrapper"},Z={class:"flex flex-row justify-around my-4 sm:my-8"},$={key:0,class:"scale-150",src:v},tt={key:1,class:"scale-150",src:x},st={key:2,class:"scale-150 invisible",src:v},et={class:"hidden sm:block w-full h-[8%] overflow-hidden"},it={class:"h-full w-full flex flex-wrap"},ot={class:"badge-secondary badge p-1 mx-1"},rt={class:"w-full sm:w-1/2 relative flex h-full"},at={class:"basis-1/4 w-full py-4 flex justify-around"},lt=t("span",{class:"material-symbols-outlined"}," lightbulb ",-1),ht=[lt],ct=t("span",{class:"material-symbols-outlined"}," saved_search ",-1),nt=[ct],ut=t("span",{class:"material-symbols-outlined"}," skip_next ",-1),mt=[ut];function dt(e,s,h,u,i,l){const _=m("BurgerMenuHorizontal"),w=m("Chessboard"),b=m("Checkmark");return r(),a("div",F,[t("div",j,[d(_,{class:"w-full h-0 sm:h-fit"}),t("div",T,[t("a",{to:"/",class:"tooltip tooltip-right rounded-lg block sm:hidden","data-tip":"Home",onClick:s[0]||(s[0]=o=>e.$router.push("/"))},W),P(t("input",{type:"range",min:"400",max:"3000","onUpdate:modelValue":s[1]||(s[1]=o=>i.difficulty=o),class:"range range-accent mt-4 sm:scale-100 scale-75"},null,512),[[B,i.difficulty]]),t("div",E,[I,t("div",L,n(i.streak),1)])]),t("p",O,n(i.difficulty),1),t("div",R,[t("div",D,[t("div",{class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:q("--value:"+i.accuracy.percent)},n(i.accuracy.percent),5)]),t("div",K,[Q,t("div",U,n(i.streak),1)])]),t("div",G,[t("div",J,[t("div",X,[t("div",Y,[(r(!0),a(f,null,p(i.history2,o=>(r(),a("div",Z,[(r(!0),a(f,null,p(o,y=>(r(),a("div",null,[y==0?(r(),a("img",$)):H("",!0),y>0?(r(),a("img",tt)):(r(),a("img",st))]))),256))]))),256))])])])]),t("div",et,[t("div",it,[(r(!0),a(f,null,p(i.puzzle.Themes,o=>(r(),a("div",null,[t("div",ot,n(o),1)]))),256))])])]),t("div",rt,[d(w,{onBoardCreated:s[2]||(s[2]=o=>i.boardAPI=o),onMove:l.handleMove,fen:i.fen,orientation:i.isWhite?"white":"black",ref:"chessboard"},null,8,["onMove","fen","orientation"]),d(b,{square:i.square,ref:"checkMark",white:i.isWhite},null,8,["square","white"])]),t("div",at,[t("button",{onClick:s[3]||(s[3]=(...o)=>l.makeHint&&l.makeHint(...o)),class:"btn w-1/4 btn-primary mr-2 tooltip tooltip-bottom","data-tip":"Hint"},ht),t("button",{class:"btn w-1/4 btn-primary btn-square mr-2 tooltip tooltip-bottom","data-tip":"Solution",onClick:s[4]||(s[4]=(...o)=>l.makeSolution&&l.makeSolution(...o))},nt),t("button",{class:"btn w-1/4 btn-primary btn-square mr-2 tooltip-bottom tooltip","data-tip":"Skip",onClick:s[5]||(s[5]=(...o)=>l.skip&&l.skip(...o))},mt)])])}const bt=C(S,[["render",dt]]);export{bt as default};
