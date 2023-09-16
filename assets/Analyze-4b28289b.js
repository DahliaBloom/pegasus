var tc=Object.defineProperty;var ic=(i,e,t)=>e in i?tc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var V=(i,e,t)=>(ic(i,typeof e!="symbol"?e+"":e,t),t);import{g as nc}from"./_commonjsHelpers-725317a4.js";import{c as Lt}from"./_commonjs-dynamic-modules-302442b1.js";import{r as bi,_ as _e,b as S,c as G,g as x,t as k,n as ci,y as ac,z as Ya,A as $a,w as Za,v as Ua,d as sc,F as Ot,B as cc,p as tn,l as Le,m as oc,i as te,k as Dn,q as rc,h as Ne,s as dc}from"./index-2ee41cca.js";import{s as fc,c as qa,H as lc}from"./HomeButton-bf9737ac.js";import{C as On}from"./chess-19eddd7f.js";import{_ as Nc}from"./Chessboard-383cdb77.js";var Xa={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,a,s){function c(d,f){if(!a[d]){if(!n[d]){var l=typeof Lt=="function"&&Lt;if(!f&&l)return l(d,!0);if(o)return o(d,!0);var N=new Error("Cannot find module '"+d+"'");throw N.code="MODULE_NOT_FOUND",N}var h=a[d]={exports:{}};n[d][0].call(h.exports,function(u){var B=n[d][1][u];return c(B||u)},h,h.exports,t,n,a,s)}return a[d].exports}for(var o=typeof Lt=="function"&&Lt,r=0;r<s.length;r++)c(s[r]);return c}({1:[function(t,n,a){var s,c,o,r,d,f=function(N,h){for(var u in h)l.call(h,u)&&(N[u]=h[u]);function B(){this.constructor=N}return B.prototype=h.prototype,N.prototype=new B,N.__super__=h.prototype,N},l={}.hasOwnProperty;s=t("./PriorityQueue/AbstractPriorityQueue"),c=t("./PriorityQueue/ArrayStrategy"),r=t("./PriorityQueue/BinaryHeapStrategy"),o=t("./PriorityQueue/BHeapStrategy"),d=function(N){f(h,N);function h(u){u||(u={}),u.strategy||(u.strategy=r),u.comparator||(u.comparator=function(B,g){return(B||0)-(g||0)}),h.__super__.constructor.call(this,u)}return h}(s),d.ArrayStrategy=c,d.BinaryHeapStrategy=r,d.BHeapStrategy=o,n.exports=d},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,n,a){n.exports=function(){function s(c){var o;if((c!=null?c.strategy:void 0)==null)throw"Must pass options.strategy, a strategy";if((c!=null?c.comparator:void 0)==null)throw"Must pass options.comparator, a comparator";this.priv=new c.strategy(c),this.length=(c!=null&&(o=c.initialValues)!=null?o.length:void 0)||0}return s.prototype.queue=function(c){this.length++,this.priv.queue(c)},s.prototype.dequeue=function(c){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},s.prototype.peek=function(c){if(!this.length)throw"Empty queue";return this.priv.peek()},s.prototype.clear=function(){return this.length=0,this.priv.clear()},s}()},{}],3:[function(t,n,a){var s;s=function(c,o,r){var d,f,l;for(f=0,d=c.length;f<d;)l=f+d>>>1,r(c[l],o)>=0?f=l+1:d=l;return f},n.exports=function(){function c(o){var r;this.options=o,this.comparator=this.options.comparator,this.data=((r=this.options.initialValues)!=null?r.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return c.prototype.queue=function(o){var r;r=s(this.data,o,this.comparator),this.data.splice(r,0,o)},c.prototype.dequeue=function(){return this.data.pop()},c.prototype.peek=function(){return this.data[this.data.length-1]},c.prototype.clear=function(){this.data.length=0},c}()},{}],4:[function(t,n,a){n.exports=function(){function s(c){var o,r,d,f,l,N,h,u;for(this.comparator=(c!=null?c.comparator:void 0)||function(B,g){return B-g},this.pageSize=(c!=null?c.pageSize:void 0)||512,this.length=0,h=0;1<<h<this.pageSize;)h+=1;if(1<<h!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=h,this._emptyMemoryPageTemplate=o=[],r=0,l=this.pageSize;0<=l?r<l:r>l;0<=l?++r:--r)o.push(null);if(this._memory=[],this._mask=this.pageSize-1,c.initialValues)for(N=c.initialValues,d=0,f=N.length;d<f;d++)u=N[d],this.queue(u)}return s.prototype.queue=function(c){this.length+=1,this._write(this.length,c),this._bubbleUp(this.length,c)},s.prototype.dequeue=function(){var c,o;return c=this._read(1),o=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,o),this._bubbleDown(1,o)),c},s.prototype.peek=function(){return this._read(1)},s.prototype.clear=function(){this.length=0,this._memory.length=0},s.prototype._write=function(c,o){var r;for(r=c>>this._shift;r>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[r][c&this._mask]=o},s.prototype._read=function(c){return this._memory[c>>this._shift][c&this._mask]},s.prototype._bubbleUp=function(c,o){var r,d,f,l;for(r=this.comparator;c>1&&(d=c&this._mask,c<this.pageSize||d>3?f=c&~this._mask|d>>1:d<2?(f=c-this.pageSize>>this._shift,f+=f&~(this._mask>>1),f|=this.pageSize>>1):f=c-2,l=this._read(f),!(r(l,o)<0));)this._write(f,o),this._write(c,l),c=f},s.prototype._bubbleDown=function(c,o){var r,d,f,l,N;for(N=this.comparator;c<this.length;)if(c>this._mask&&!(c&this._mask-1)?r=d=c+2:c&this.pageSize>>1?(r=(c&~this._mask)>>1,r|=c&this._mask>>1,r=r+1<<this._shift,d=r+1):(r=c+(c&this._mask),d=r+1),r!==d&&d<=this.length)if(f=this._read(r),l=this._read(d),N(f,o)<0&&N(f,l)<=0)this._write(r,o),this._write(c,f),c=r;else if(N(l,o)<0)this._write(d,o),this._write(c,l),c=d;else break;else if(r<=this.length)if(f=this._read(r),N(f,o)<0)this._write(r,o),this._write(c,f),c=r;else break;else break},s}()},{}],5:[function(t,n,a){n.exports=function(){function s(c){var o;this.comparator=(c!=null?c.comparator:void 0)||function(r,d){return r-d},this.length=0,this.data=((o=c.initialValues)!=null?o.slice(0):void 0)||[],this._heapify()}return s.prototype._heapify=function(){var c,o,r;if(this.data.length>0)for(c=o=1,r=this.data.length;1<=r?o<r:o>r;c=1<=r?++o:--o)this._bubbleUp(c)},s.prototype.queue=function(c){this.data.push(c),this._bubbleUp(this.data.length-1)},s.prototype.dequeue=function(){var c,o;return o=this.data[0],c=this.data.pop(),this.data.length>0&&(this.data[0]=c,this._bubbleDown(0)),o},s.prototype.peek=function(){return this.data[0]},s.prototype.clear=function(){this.length=0,this.data.length=0},s.prototype._bubbleUp=function(c){for(var o,r;c>0&&(o=c-1>>>1,this.comparator(this.data[c],this.data[o])<0);)r=this.data[o],this.data[o]=this.data[c],this.data[c]=r,c=o},s.prototype._bubbleDown=function(c){var o,r,d,f,l;for(o=this.data.length-1;r=(c<<1)+1,f=r+1,d=c,r<=o&&this.comparator(this.data[r],this.data[d])<0&&(d=r),f<=o&&this.comparator(this.data[f],this.data[d])<0&&(d=f),d!==c;)l=this.data[d],this.data[d]=this.data[c],this.data[c]=l,c=d},s}()},{}]},{},[1])(1)})})(Xa);var hc=Xa.exports;const gc=nc(hc);let mi,at=0,oi=null,Ja="",Vt;const Li=new gc({comparator:(i,e)=>e.priority-i.priority}),ri=bi(!1),ft=bi(3e3),Ct=bi([]);es();function nn(i,e=!0){this.msg=i,this.stockfish=e}function uc(i,e,t,n,a){this.commands=i,this.priority=e,this.callback=t,this.resolve=n,this.reject=a}function es(){console.log("Starting stockfish"),Stockfish().then(i=>{i.addMessageListener(bc),i.postMessage("uci"),i.postMessage("setoption name use nnue value true"),i.postMessage("setoption name Threads value 16"),i.postMessage("setoption name Hash value 128"),i.postMessage("setoption name UCI_AnalyseMode value true"),i.postMessage("ucinewgame"),mi=i,console.log("Stockfish started")})}function ts(){if(Li.length>0){const i=Li.dequeue();for(let e of i.commands)Ct.value.push(new nn(e,!1)),mi.postMessage(e),i.callback!==void 0&&(oi=i.callback);Vt=i}else Vt=void 0}function Bc(i){switch(Ct.value.push(new nn(i)),!i.startsWith("info")&&Vt!=null&&(Vt.resolve(i),ts()),i){case"uciok":ri.value=!0;break}}function bc(i){if(Bc(i),console.log(i),i.startsWith("info depth")){const t=/ cp (-?\d+)/.exec(i);if(t===null){const c=/score mate (\d+)/.exec(i);at=parseFloat(c[1])*100}else at=parseFloat(t[1])/100;const a=/ pv (.+)/.exec(i);console.log("bestmove: "+a[1]),console.log("Pegasus Final Score: "+at),Ja.split(" ")[1]=="w"?oi(at,a[1]):oi(-at,a[1])}}function Ci(i,e,t=0,n=0){return mi===void 0&&e(0,"stockfish undefined"),t==0&&(t=ft.value),Ja=i,oi=e,is([`position fen ${i}`,`go movetime ${t}`],void 0,n)}function Ki(){ri.value=!1,es()}function is(i,e=void 0,t=0){if(i.constructor!==Array&&(i=[i]),console.log(i),mi!==void 0){let n,a;const s=new Promise((c,o)=>{n=c,a=o});return Li.queue(new uc(i,t,e,n,a)),Vt===void 0&&ts(),s}else return Ct.value.push(new nn("Stockfish not running")),new Promise((n,a)=>a("Stockfish not running"))}const an={props:{evaluation:{type:Number,required:!0},whiteBottom:{type:Boolean,required:!0}},data(){return{height:50,heightString:"50%"}},methods:{update(){if(this.heightString=this.height+"%",console.log("update"),this.evaluation==="0.0"||this.evaluation==="0"){this.height=50,this.heightString=this.height+"%";return}let i=Number(this.evaluation);if(console.log("TMP:"+i),i>=100){this.height=100,this.heightString="100%";return}if(i<-100){this.height=0,this.heightString="0%";return}i>0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=70+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=80+i,console.log("-9< x <9")):i>11&&(this.height=50+Math.log(Math.abs(i))*30)),i<0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=30+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=20+i,console.log("-9< x <9")):i<-11&&(this.height=50-Math.log(Math.abs(i))*30)),this.height>96&&(this.height=96),this.height<4&&(this.height=4),this.heightString=this.height+"%"}},beforeMount(){this.update()},updated(){this.update()}},Vn=()=>{ac(i=>({"5aea1e44":i.heightString}))},Cn=an.setup;an.setup=Cn?(i,e)=>(Vn(),Cn(i,e)):Vn;const mc={class:"h-full w-24 flex flex-row flex-none pr-3 items-center space-x-3"},xc={class:"w-4 h-full relative"},pc={class:"h-full rounded-lg bg-slate-700"};function Dc(i,e,t,n,a,s){return S(),G("div",mc,[x("div",{class:ci(["badge flex-grow border-none",[t.evaluation>=0?"bg-slate-300":"bg-slate-700",t.evaluation>=0?"text-sla":"text-slate-300"]])},k(Math.abs(t.evaluation)>=100?"M "+Math.abs(t.evaluation)/100:Math.abs(t.evaluation)),3),x("div",xc,[x("div",pc,[x("div",{class:ci(["w-full absolute left-0 evalWhite bg-slate-300",[t.whiteBottom?"bottom-0":"top-0",t.whiteBottom?"rounded-b-lg":"rounded-t-lg"]])},null,2)])])])}const Oc=_e(an,[["render",Dc],["__scopeId","data-v-c98104eb"]]),Vc={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0}},data(){return{user:{name:"N",avatar:fc}}},beforeMount(){this.updateUser()},watch:{color(){this.updateUser()}},methods:{updateUser(){qa.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},Cc={class:"flex justify-center items-center"},Ac=["src"],yc=["src"],Sc={class:"flex flex-row items-baseline"},Gc={class:"text-xl font-bold"},kc={class:"text-xs px-3"};function vc(i,e,t,n,a,s){return S(),G("div",Cc,[t.color?(S(),G("img",{key:0,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-300",src:a.user.avatar,alt:""},null,8,Ac)):(S(),G("img",{key:1,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-700",src:a.user.avatar,alt:""},null,8,yc)),x("div",Sc,[x("h2",Gc,k(a.user.username),1),x("p",kc,k(this.elo),1)]),x("button",{class:"rounded-full p-2 text-white",onClick:e[0]||(e[0]=c=>i.$emit("turnBoard"))},"↻")])}const _c=_e(Vc,[["render",vc]]),Mc="/pegasus/assets/pawnKingIcon-9e7b4382.png",wc={props:{evaluation:{type:Number,required:!0},typee:{type:String,required:!0}},data(){return{height:40,styleString:"background: conic-gradient(#F741B8 36deg 60deg, #475569 36deg); border-radius: 50%;"}},methods:{update(){this.height=this.evaluation,this.styleString="background: conic-gradient(#18181B 36deg "+360*(this.height/100)+"deg, #F5F5F4 36deg); border-radius: 50%;"}},beforeMount(){this.update()},updated(){this.update()}},Pc=x("div",{class:"h-12 w-12 bg-base-100 rounded-full flex items-center justify-center"},[x("img",{src:Mc,class:"h-2/3"})],-1),Qc=[Pc];function Rc(i,e,t,n,a,s){return this.typee=="pawn"?(S(),G("div",{key:0,class:"h-20 w-20 m-2 flex items-center justify-center tooltip tooltip-bottom",style:Ya(a.styleString),"data-tip":"Pawn Structure"},Qc,4)):$a("",!0)}const Lc=_e(wc,[["render",Rc]]);function ns(i){const t=`A00	Amar Gambit	1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4
    A00	Amar Opening	1. Nh3
    A00	Amar Opening: Gent Gambit	1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4 5. O-O fxg3 6. hxg3
    A00	Amar Opening: Paris Gambit	1. Nh3 d5 2. g3 e5 3. f4
    A00	Amsterdam Attack	1. e3 e5 2. c4 d6 3. Nc3 Nc6 4. b3 Nf6
    A00	Anderssen's Opening	1. a3
    A00	Anderssen's Opening: Polish Gambit	1. a3 a5 2. b4
    A00	Barnes Opening	1. f3
    A00	Barnes Opening: Fool's Mate	1. f3 e5 2. g4 Qh4#
    A00	Barnes Opening: Gedult Gambit	1. f3 d5 2. e4 g6 3. d4 dxe4 4. c3
    A00	Barnes Opening: Gedult Gambit	1. f3 f5 2. e4 fxe4 3. Nc3
    A00	Barnes Opening: Hammerschlag	1. f3 e5 2. Kf2
    A00	Clemenz Opening	1. h3
    A00	Clemenz Opening: Spike Lee Gambit	1. h3 h5 2. g4
    A00	Crab Opening	1. a4 e5 2. h4
    A00	Creepy Crawly Formation: Classical Defense	1. h3 d5 2. a3 e5
    A00	Formation: Hippopotamus Attack	1. a3 e5 2. b3 d5 3. c3 Nf6 4. d3 Nc6 5. e3 Bd6 6. f3 O-O 7. g3
    A00	Formation: Shy Attack	1. a3 e5 2. g3 d5 3. Bg2 Nf6 4. d3 Nc6 5. Nd2 Bd6 6. e3 O-O 7. h3
    A00	Global Opening	1. h3 e5 2. a3
    A00	Grob Opening	1. g4
    A00	Grob Opening: Alessi Gambit	1. g4 f5
    A00	Grob Opening: Double Grob	1. g4 g5
    A00	Grob Opening: Double Grob, Coca-Cola Gambit	1. g4 g5 2. f4
    A00	Grob Opening: Grob Gambit	1. g4 d5 2. Bg2
    A00	Grob Opening: Grob Gambit Declined	1. g4 d5 2. Bg2 c6
    A00	Grob Opening: Grob Gambit, Basman Gambit	1. g4 d5 2. Bg2 h5 3. gxh5
    A00	Grob Opening: Grob Gambit, Fritz Gambit	1. g4 d5 2. Bg2 Bxg4 3. c4
    A00	Grob Opening: Grob Gambit, Fritz Gambit, Romford Countergambit	1. g4 d5 2. Bg2 Bxg4 3. c4 d4 4. Bxb7 Nd7 5. Bxa8 Qxa8
    A00	Grob Opening: Grob Gambit, Keres Gambit	1. g4 d5 2. Bg2 e5 3. d4 exd4 4. c3
    A00	Grob Opening: Grob Gambit, Richter-Grob Gambit	1. g4 d5 2. Bg2 c6 3. c4 dxc4 4. b3
    A00	Grob Opening: Keene Defense	1. g4 d5 2. h3 e5 3. Bg2 c6
    A00	Grob Opening: Keene Defense, Main Line	1. g4 d5 2. h3 e5 3. Bg2 c6 4. d4 e4 5. c4 Bd6 6. Nc3 Ne7
    A00	Grob Opening: London Defense	1. g4 e5 2. h3 Nc6
    A00	Grob Opening: Romford Countergambit	1. g4 d5 2. Bg2 Bxg4 3. c4 d4
    A00	Grob Opening: Spike Attack	1. g4 d5 2. Bg2 c6 3. g5
    A00	Grob Opening: Spike, Hurst Attack	1. g4 e5 2. Bg2 d5 3. c4
    A00	Grob Opening: Zilbermints Gambit	1. g4 d5 2. e4 dxe4 3. Nc3
    A00	Grob Opening: Zilbermints Gambit, Schiller Defense	1. g4 d5 2. e4 dxe4 3. Nc3 h5
    A00	Grob Opening: Zilbermints Gambit, Zilbermints-Hartlaub Gambit	1. g4 d5 2. e4 dxe4 3. Nc3 e5 4. d3
    A00	Hungarian Opening	1. g3
    A00	Hungarian Opening: Asten Gambit	1. g3 Nc6 2. Nc3 d5 3. d4 e5 4. dxe5 d4 5. Ne4 f5
    A00	Hungarian Opening: Burk Gambit	1. g3 e5 2. a3 d5 3. Nf3 e4 4. Nh4 Be7 5. d3
    A00	Hungarian Opening: Bücker Gambit	1. g3 d5 2. Bg2 e5 3. b4
    A00	Hungarian Opening: Catalan Formation	1. g3 d5 2. Bg2 e6
    A00	Hungarian Opening: Dutch Defense	1. g3 f5
    A00	Hungarian Opening: Indian Defense	1. g3 Nf6
    A00	Hungarian Opening: Myers Defense	1. g3 g5
    A00	Hungarian Opening: Pachman Gambit	1. g3 f5 2. e4 fxe4 3. Qh5+ g6
    A00	Hungarian Opening: Paris Gambit	1. g3 e5 2. Nh3 d5 3. f4 Bxh3 4. Bxh3 exf4 5. O-O
    A00	Hungarian Opening: Reversed Alekhine	1. g3 e5 2. Nf3
    A00	Hungarian Opening: Reversed Brooklyn Defense, Brooklyn Benko Gambit	1. g3 e5 2. Nf3 e4 3. Ng1 Nf6 4. b4
    A00	Hungarian Opening: Reversed Modern Defense	1. g3 d5 2. Bg2 c5
    A00	Hungarian Opening: Reversed Norwegian Defense	1. g3 e5 2. Nf3 e4 3. Nh4
    A00	Hungarian Opening: Sicilian Invitation	1. g3 c5
    A00	Hungarian Opening: Slav Formation	1. g3 d5 2. Bg2 c6
    A00	Hungarian Opening: Symmetrical Variation	1. g3 g6
    A00	Hungarian Opening: Van Kuijk Gambit	1. g3 h5 2. Nf3 h4
    A00	Hungarian Opening: Winterberg Gambit	1. g3 d5 2. Bg2 e5 3. c4 dxc4 4. b3
    A00	Kádas Opening	1. h4
    A00	Kádas Opening: Beginner's Trap	1. h4 d5 2. Rh3
    A00	Kádas Opening: Kádas Gambit	1. h4 c5 2. b4
    A00	Kádas Opening: Kádas Gambit	1. h4 d5 2. d4 c5 3. Nf3 cxd4 4. c3
    A00	Kádas Opening: Kádas Gambit	1. h4 e5 2. d4 exd4 3. c3
    A00	Kádas Opening: Myers Variation	1. h4 d5 2. d4 c5 3. e4
    A00	Kádas Opening: Schneider Gambit	1. h4 g5
    A00	Kádas Opening: Steinbok Gambit	1. h4 f5 2. e4 fxe4 3. d3
    A00	Lasker Simul Special	1. g3 h5
    A00	Mieses Opening	1. d3
    A00	Mieses Opening: Myers Spike Attack	1. d3 g6 2. g4
    A00	Mieses Opening: Reversed Rat	1. d3 e5
    A00	Polish Opening	1. b4
    A00	Polish Opening: Baltic Defense	1. b4 d5 2. Bb2 Bf5
    A00	Polish Opening: Birmingham Gambit	1. b4 c5
    A00	Polish Opening: Bugayev Advance Variation	1. b4 e5 2. Bb2 f6 3. b5
    A00	Polish Opening: Bugayev Attack	1. b4 e5 2. a3
    A00	Polish Opening: Czech Defense	1. b4 e5 2. Bb2 d6
    A00	Polish Opening: Dutch Defense	1. b4 f5
    A00	Polish Opening: German Defense	1. b4 d5 2. Bb2 Qd6
    A00	Polish Opening: Grigorian Variation	1. b4 Nc6
    A00	Polish Opening: Karniewski Variation	1. b4 Nh6
    A00	Polish Opening: King's Indian Variation	1. b4 Nf6 2. Bb2 g6
    A00	Polish Opening: King's Indian Variation, Schiffler Attack	1. b4 Nf6 2. Bb2 g6 3. e4
    A00	Polish Opening: King's Indian Variation, Sokolsky Attack	1. b4 Nf6 2. Bb2 g6 3. c4 Bg7 4. e3 d6 5. Nf3 O-O 6. d4
    A00	Polish Opening: Myers Variation	1. b4 d5 2. Bb2 c6 3. a4
    A00	Polish Opening: Outflank Variation	1. b4 c6
    A00	Polish Opening: Queen's Indian Variation	1. b4 e6 2. Bb2 Nf6 3. b5 b6
    A00	Polish Opening: Queenside Defense	1. b4 e6 2. Bb2 Nf6 3. b5 a6
    A00	Polish Opening: Rooks Swap Line	1. b4 e6 2. Bb2 Nf6 3. b5 a6 4. a4 axb5 5. axb5 Rxa1 6. Bxa1
    A00	Polish Opening: Schiffler-Sokolsky Variation	1. b4 e6 2. Bb2 Nf6 3. b5 d5 4. e3
    A00	Polish Opening: Schuehler Gambit	1. b4 c6 2. Bb2 a5 3. b5 cxb5 4. e4
    A00	Polish Opening: Symmetrical Variation	1. b4 b5
    A00	Polish Opening: Tartakower Gambit	1. b4 e5 2. Bb2 f6 3. e4
    A00	Polish Opening: Wolferts Gambit	1. b4 e5 2. Bb2 c5
    A00	Saragossa Opening	1. c3
    A00	Sodium Attack	1. Na3
    A00	Sodium Attack: Chenoboskion Variation	1. Na3 g6 2. g4
    A00	Sodium Attack: Durkin Gambit	1. Na3 e5 2. Nc4 Nc6 3. e4 f5
    A00	Valencia Opening	1. d3 e5 2. Nd2
    A00	Van Geet Opening	1. Nc3
    A00	Van Geet Opening: Battambang Variation	1. a3 e5 2. Nc3
    A00	Van Geet Opening: Billockus-Johansen Gambit	1. Nc3 e5 2. Nf3 Bc5
    A00	Van Geet Opening: Caro-Kann Variation, St. Patrick's Attack	1. Nc3 d5 2. e4 c6 3. h3
    A00	Van Geet Opening: Damhaug Gambit	1. Nc3 d5 2. f4 e5
    A00	Van Geet Opening: Dougherty Gambit	1. Nc3 d5 2. e4 dxe4 3. f3
    A00	Van Geet Opening: Dunst-Perrenet Gambit	1. Nc3 d5 2. e4 dxe4 3. d3
    A00	Van Geet Opening: Düsseldorf Gambit	1. Nc3 c5 2. b4
    A00	Van Geet Opening: Gladbacher Gambit	1. Nc3 e5 2. b3 d5 3. e4 dxe4 4. d3
    A00	Van Geet Opening: Hector Gambit	1. Nc3 d5 2. e4 dxe4 3. Bc4
    A00	Van Geet Opening: Hergert Gambit	1. Nc3 d6 2. f4 e5 3. fxe5 Nc6
    A00	Van Geet Opening: Hulsemann Gambit	1. Nc3 e5 2. e3 d5 3. Qh5 Be6
    A00	Van Geet Opening: Jendrossek Gambit	1. Nc3 d5 2. f4 d4 3. Ne4 f5 4. Nf2 Nf6 5. Nf3 c5 6. b4
    A00	Van Geet Opening: Kluever Gambit	1. Nc3 f5 2. e4 fxe4 3. d3
    A00	Van Geet Opening: Laroche Gambit	1. Nc3 b5
    A00	Van Geet Opening: Liebig Gambit	1. Nc3 e5 2. e3 d5 3. Qh5 Nf6
    A00	Van Geet Opening: Melleby Gambit	1. Nc3 d5 2. f4 d4 3. Ne4 c5
    A00	Van Geet Opening: Myers Attack	1. Nc3 g6 2. h4
    A00	Van Geet Opening: Napoleon Attack	1. Nc3 e5 2. Nf3 Nc6 3. d4
    A00	Van Geet Opening: Novosibirsk Variation	1. Nc3 c5 2. d4 cxd4 3. Qxd4 Nc6 4. Qh4
    A00	Van Geet Opening: Nowokunski Gambit	1. Nc3 e5 2. f4 exf4 3. e4
    A00	Van Geet Opening: Pfeiffer Gambit	1. Nc3 d5 2. f4 d4 3. Ne4 e5
    A00	Van Geet Opening: Pfeiffer Gambit, Sleipnir Countergambit	1. Nc3 d5 2. f4 d4 3. Ne4 e5 4. Nf3
    A00	Van Geet Opening: Reversed Nimzowitsch	1. Nc3 e5
    A00	Van Geet Opening: Reversed Scandinavian	1. Nc3 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qa4
    A00	Van Geet Opening: Sicilian Two Knights	1. Nc3 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4
    A00	Van Geet Opening: Sleipnir Gambit	1. Nc3 d5 2. e3 e5 3. d4 Bb4
    A00	Van Geet Opening: Twyble Attack	1. Nc3 c5 2. Rb1
    A00	Van Geet Opening: Tübingen Gambit	1. Nc3 Nf6 2. g4
    A00	Van Geet Opening: Venezolana Variation	1. Nc3 d5 2. d3 Nf6 3. g3
    A00	Van Geet Opening: Warsteiner Gambit	1. Nc3 d5 2. f4 g5
    A00	Van't Kruijs Opening	1. e3
    A00	Van't Kruijs Opening: Bouncing Bishop Variation	1. e3 e5 2. Bc4 b5 3. Bb3
    A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Akahi Variation	1. e3 e5 2. Nc3 Nf6 3. f4 exf4 4. Nf3
    A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Alua Variation	1. e3 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3
    A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Ekolu Variation	1. e3 e5 2. Nc3 d5 3. f4 exf4 4. Nf3
    A00	Venezolana Opening	1. d3 c5 2. Nc3 Nc6 3. g3
    A00	Ware Opening	1. a4
    A00	Ware Opening: Meadow Hay Trap	1. a4 e5 2. Ra3
    A00	Ware Opening: Ware Gambit	1. a4 e5 2. a5 d5 3. e3 f5 4. a6
    A00	Ware Opening: Wing Gambit	1. a4 b5 2. axb5 Bb7
    A01	Nimzo-Larsen Attack	1. b3
    A01	Nimzo-Larsen Attack: Classical Variation	1. b3 d5
    A01	Nimzo-Larsen Attack: Dutch Variation	1. b3 f5
    A01	Nimzo-Larsen Attack: English Variation	1. b3 c5
    A01	Nimzo-Larsen Attack: Graz Attack	1. b3 d5 2. Ba3
    A01	Nimzo-Larsen Attack: Indian Variation	1. b3 Nf6
    A01	Nimzo-Larsen Attack: Modern Variation	1. b3 e5
    A01	Nimzo-Larsen Attack: Modern Variation	1. b3 e5 2. Bb2 Nc6
    A01	Nimzo-Larsen Attack: Modern Variation	1. b3 e5 2. Bb2 Nc6 3. e3
    A01	Nimzo-Larsen Attack: Pachman Gambit	1. b3 e5 2. Bb2 Nc6 3. f4
    A01	Nimzo-Larsen Attack: Polish Variation	1. b3 b5
    A01	Nimzo-Larsen Attack: Ringelbach Gambit	1. b3 f5 2. Bb2 e6 3. e4
    A01	Nimzo-Larsen Attack: Spike Variation	1. b3 Nf6 2. Bb2 g6 3. g4
    A01	Nimzo-Larsen Attack: Symmetrical Variation	1. b3 b6
    A02	Bird Opening	1. f4
    A02	Bird Opening	1. f4 Nf6
    A02	Bird Opening: Batavo-Polish Attack	1. f4 Nf6 2. Nf3 g6 3. b4
    A02	Bird Opening: Double Duck Formation	1. f4 f5 2. d4 d5
    A02	Bird Opening: From's Gambit	1. f4 e5
    A02	Bird Opening: From's Gambit, Bahr Gambit	1. f4 e5 2. Nc3
    A02	Bird Opening: From's Gambit, Langheld Gambit	1. f4 e5 2. fxe5 d6 3. exd6 Nf6
    A02	Bird Opening: From's Gambit, Lasker Variation	1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nf3 g5
    A02	Bird Opening: From's Gambit, Lipke Variation	1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nf3 Nh6 5. d4
    A02	Bird Opening: Hobbs Gambit	1. f4 g5
    A02	Bird Opening: Hobbs-Zilbermints Gambit	1. f4 h6 2. Nf3 g5
    A02	Bird Opening: Horsefly Defense	1. f4 Nh6
    A02	Bird Opening: Lasker Gambit	1. f4 e5 2. fxe5 f6
    A02	Bird Opening: Mujannah	1. f4 Nf6 2. c4
    A02	Bird Opening: Myers Defense	1. f4 b5
    A02	Bird Opening: Platz Gambit	1. f4 e5 2. fxe5 Ne7
    A02	Bird Opening: Schlechter Gambit	1. f4 e5 2. fxe5 Nc6
    A02	Bird Opening: Siegener Gambit	1. f4 e5 2. d4 exd4 3. Nf3 c5 4. c3
    A02	Bird Opening: Swiss Gambit	1. f4 f5 2. e4 fxe4 3. Nc3 Nf6 4. g4
    A02	Bird Opening: Wagner-Zwitersch Gambit	1. f4 f5 2. e4
    A03	Bird Opening: Dutch Variation	1. f4 d5
    A03	Bird Opening: Dutch Variation, Dudweiler Gambit	1. f4 d5 2. g4
    A03	Bird Opening: Lasker Variation	1. f4 d5 2. Nf3 Nf6 3. e3 c5
    A03	Bird Opening: Sturm Gambit	1. f4 d5 2. c4
    A03	Bird Opening: Thomas Gambit	1. f4 d5 2. b3 Nf6 3. Bb2 d4 4. Nf3 c5 5. e3
    A03	Bird Opening: Williams Gambit	1. f4 d5 2. e4
    A03	Bird Opening: Williams Gambit	1. f4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Qe2
    A03	Bird Opening: Williams-Zilbermints Gambit	1. f4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Nge2
    A04	Colle System: Rhamphorhynchus Variation	1. Nf3 c5 2. e3 g6 3. d4 Bg7 4. dxc5 Qa5+
    A04	Modern Defense: Semi-Averbakh Variation, Polish Variation	1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qb6
    A04	Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation	1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qa5+
    A04	Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Accepted	1. Nf3 g6 2. d4 Bg7 3. e4 d6 4. c4 c5 5. dxc5 Qa5+
    A04	Zukertort Defense: Kingside Variation	1. Nf3 Nh6 2. d4 g6
    A04	Zukertort Defense: Sicilian Knight Variation	1. Nf3 Na6 2. e4 c5
    A04	Zukertort Opening	1. Nf3
    A04	Zukertort Opening: Arctic Defense	1. Nf3 f6
    A04	Zukertort Opening: Arctic Defense, Drunken Knight Variation	1. Nf3 f6 2. e4 Nh6 3. d4 Nf7
    A04	Zukertort Opening: Basman Defense	1. Nf3 h6
    A04	Zukertort Opening: Black Mustang Defense	1. Nf3 Nc6
    A04	Zukertort Opening: Drunken Cavalry Variation	1. Nf3 Na6 2. e4 Nh6
    A04	Zukertort Opening: Dutch Variation	1. Nf3 f5
    A04	Zukertort Opening: Herrstrom Gambit	1. Nf3 g5
    A04	Zukertort Opening: Kingside Fianchetto	1. Nf3 g6
    A04	Zukertort Opening: Lisitsyn Gambit	1. Nf3 f5 2. e4
    A04	Zukertort Opening: Lisitsyn Gambit Deferred	1. Nf3 f5 2. d3 Nf6 3. e4
    A04	Zukertort Opening: Pirc Invitation	1. Nf3 d6
    A04	Zukertort Opening: Polish Defense	1. Nf3 b5
    A04	Zukertort Opening: Queen's Gambit Invitation	1. Nf3 e6
    A04	Zukertort Opening: Queenside Fianchetto Variation	1. Nf3 b6
    A04	Zukertort Opening: Ross Gambit	1. Nf3 e5
    A04	Zukertort Opening: Shabalov Gambit	1. Nf3 e6 2. c4 a6 3. Nc3 c5 4. g3 b5
    A04	Zukertort Opening: Sicilian Invitation	1. Nf3 c5
    A04	Zukertort Opening: Slav Invitation	1. Nf3 c6
    A04	Zukertort Opening: Speelsmet Gambit	1. Nf3 c5 2. d4 cxd4 3. e3
    A04	Zukertort Opening: St. George Defense	1. Nf3 a6
    A04	Zukertort Opening: The Walrus	1. Nf3 e5 2. Nxe5 Nc6 3. Nxc6 dxc6
    A04	Zukertort Opening: Vos Gambit	1. Nf3 d6 2. d4 e5
    A04	Zukertort Opening: Wade Defense	1. Nf3 d6 2. e4 Bg4
    A04	Zukertort Opening: Ware Defense	1. Nf3 a5
    A05	King's Indian Attack	1. Nf3 Nf6 2. g3 d5
    A05	King's Indian Attack: Smyslov Variation	1. Nf3 Nf6 2. g3 g6 3. b4
    A05	King's Indian Attack: Spassky Variation	1. Nf3 Nf6 2. g3 b5
    A05	King's Indian Attack: Symmetrical Defense	1. Nf3 Nf6 2. g3 g6
    A05	King's Indian Attack: Wahls Defense	1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. O-O O-O 5. d3 d5
    A05	Polish Opening: Zukertort System	1. Nf3 Nf6 2. b4
    A05	Zukertort Opening	1. Nf3 Nf6
    A05	Zukertort Opening	1. Nf3 Nf6 2. Nc3 Nc6
    A05	Zukertort Opening: Double Fianchetto Attack	1. Nf3 Nf6 2. g3 g6 3. b3 Bg7 4. Bb2 O-O 5. Bg2 d6 6. O-O
    A05	Zukertort Opening: Lemberger Gambit	1. Nf3 Nf6 2. e4
    A05	Zukertort Opening: Myers Polish Attack	1. Nf3 Nf6 2. a4 g6 3. b4
    A05	Zukertort Opening: Nimzo-Larsen Variation	1. Nf3 Nf6 2. b3
    A05	Zukertort Opening: Quiet System	1. Nf3 Nf6 2. e3
    A06	Nimzo-Larsen Attack: Classical Variation	1. Nf3 d5 2. b3
    A06	Nimzo-Larsen Attack: Norfolk Gambit	1. Nf3 d5 2. b3 c5 3. e4
    A06	Nimzo-Larsen Attack: Norfolk Gambit	1. Nf3 d5 2. b3 Nf6 3. Bb2 c5 4. e4
    A06	Zukertort Opening	1. Nf3 d5
    A06	Zukertort Opening: Ampel Variation	1. Nf3 d5 2. Rg1
    A06	Zukertort Opening: Old Indian Attack	1. Nf3 d5 2. d3
    A06	Zukertort Opening: Pachman Gambit	1. Nf3 d5 2. e3 c5 3. c4 dxc4 4. b3
    A06	Zukertort Opening: Regina-Nu Gambit	1. Nf3 d5 2. b3 c5 3. c4 dxc4 4. Nc3
    A06	Zukertort Opening: Reversed Mexican Defense	1. Nf3 d5 2. Nc3
    A06	Zukertort Opening: Santasiere's Folly	1. b4 d5 2. Nf3
    A06	Zukertort Opening: Tennison Gambit	1. e4 d5 2. Nf3
    A06	Zukertort Opening: The Potato	1. Nf3 d5 2. a4
    A07	Hungarian Opening: Wiedenhagen-Beta Gambit	1. g3 d5 2. Nf3 g5
    A07	King's Indian Attack	1. Nf3 d5 2. g3
    A07	King's Indian Attack: Double Fianchetto	1. Nf3 d5 2. g3 g6
    A07	King's Indian Attack: Keres Variation	1. Nf3 d5 2. g3 Bg4
    A07	King's Indian Attack: Keres Variation	1. Nf3 d5 2. g3 Bg4 3. Bg2 Nd7
    A07	King's Indian Attack: Omega-Delta Gambit	1. Nf3 d5 2. g3 e5
    A07	King's Indian Attack: Pachman System	1. Nf3 d5 2. g3 g6 3. Bg2 Bg7 4. O-O e5 5. d3 Ne7
    A07	King's Indian Attack: Sicilian Variation	1. Nf3 d5 2. g3 c5
    A07	King's Indian Attack: Yugoslav Variation	1. Nf3 Nf6 2. g3 d5 3. Bg2 c6 4. O-O Bg4
    A08	King's Indian Attack: French Variation	1. Nf3 d5 2. g3 c5 3. Bg2 Nc6
    A08	King's Indian Attack: Sicilian Variation	1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. Ngf3 c5 5. g3 Nc6 6. Bg2 Be7 7. O-O O-O 8. Re1
    A08	King's Indian Attack: Sicilian Variation	1. Nf3 d5 2. g3 c5 3. Bg2
    A08	Zukertort Opening: Grünfeld Reversed	1. Nf3 d5 2. g3 c5 3. Bg2 Nc6 4. d4 e6 5. O-O
    A09	Réti Opening	1. Nf3 d5 2. c4
    A09	Réti Opening: Advance Variation	1. Nf3 d5 2. c4 d4
    A09	Réti Opening: Advance Variation, Michel Gambit	1. Nf3 d5 2. c4 d4 3. b4 c5
    A09	Réti Opening: Penguin Variation	1. Nf3 d5 2. c4 d4 3. Rg1
    A09	Réti Opening: Reversed Blumenfeld Gambit	1. Nf3 d5 2. c4 d4 3. e3 c5 4. b4
    A09	Réti Opening: Réti Accepted	1. Nf3 d5 2. c4 dxc4
    A09	Réti Opening: Réti Gambit, Keres Variation	1. Nf3 d5 2. c4 dxc4 3. e3 Be6
    A09	Réti Opening: Zilbermints Gambit	1. Nf3 d5 2. c4 b5
    A10	English Opening	1. c4
    A10	English Opening: Achilles-Omega Gambit	1. c4 Nf6 2. e4
    A10	English Opening: Adorjan Defense	1. c4 g6 2. e4 e5
    A10	English Opening: Anglo-Dutch Defense	1. c4 f5
    A10	English Opening: Anglo-Dutch Defense, Hickmann Gambit	1. c4 f5 2. e4
    A10	English Opening: Anglo-Dutch Variation, Chabanon Gambit	1. c4 f5 2. Nf3 d6 3. e4
    A10	English Opening: Anglo-Dutch Variation, Ferenc Gambit	1. c4 f5 2. Nc3 Nf6 3. e4
    A10	English Opening: Anglo-Lithuanian Variation	1. c4 Nc6
    A10	English Opening: Anglo-Scandinavian Defense	1. c4 d5
    A10	English Opening: Anglo-Scandinavian Defense, Löhn Gambit	1. c4 d5 2. cxd5 e6
    A10	English Opening: Anglo-Scandinavian Defense, Malvinas Variation	1. c4 d5 2. cxd5 Qxd5 3. Nc3 Qa5
    A10	English Opening: Anglo-Scandinavian Defense, Schulz Gambit	1. c4 d5 2. cxd5 Nf6
    A10	English Opening: Great Snake Variation	1. c4 g6
    A10	English Opening: Jaenisch Gambit	1. c4 b5
    A10	English Opening: King's English Variation, Botvinnik System, Prickly Pawn Pass System	1. c4 g6 2. Nc3 Bg7 3. g3 Nf6 4. Bg2 O-O 5. e4 d6 6. Nge2 e5 7. O-O c6 8. d3 a6
    A10	English Opening: Myers Defense	1. c4 g5
    A10	English Opening: Myers Gambit	1. c4 g5 2. d4 Bg7
    A10	English Opening: Porcupine Variation	1. c4 f5 2. Nc3 Nf6 3. e4 fxe4 4. g4
    A10	English Opening: Wade Gambit	1. c4 f5 2. g4
    A10	English Opening: Zilbermints Gambit	1. c4 g5 2. d4 e5
    A11	English Opening: Caro-Kann Defensive System	1. c4 c6
    A12	Réti Opening: Anglo-Slav Variation, Bled Variation	1. Nf3 d5 2. b3 Nf6 3. Bb2 g6 4. c4 c6
    A12	Réti Opening: Anglo-Slav Variation, Bogoljubov Variation	1. Nf3 d5 2. c4 c6 3. b3
    A12	Réti Opening: Anglo-Slav Variation, Bogoljubov Variation	1. Nf3 d5 2. c4 c6 3. b3 Bg4
    A12	Réti Opening: Anglo-Slav Variation, Bogoljubov Variation	1. Nf3 Nf6 2. c4 c6 3. b3 d5 4. Bb2
    A12	Réti Opening: Anglo-Slav Variation, Capablanca Variation	1. c4 Nf6 2. Nf3 c6 3. b3 d5 4. Bb2 Bg4
    A12	Réti Opening: Anglo-Slav Variation, London Defensive System	1. c4 Nf6 2. g3 c6 3. Nf3 d5 4. b3 Bf5
    A12	Réti Opening: Anglo-Slav Variation, New York System	1. Nf3 Nf6 2. c4 c6 3. b3 d5 4. Bb2 Bf5
    A12	Réti Opening: Anglo-Slav Variation, Torre System	1. c4 Nf6 2. g3 c6 3. Nf3 d5 4. b3 Bg4
    A13	English Opening: Agincourt Defense	1. c4 e6
    A13	English Opening: Agincourt Defense	1. c4 e6 2. Nf3
    A13	English Opening: Agincourt Defense	1. c4 e6 2. Nf3 d5
    A13	English Opening: Agincourt Defense, Bogoljubov Defense	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Bd6
    A13	English Opening: Agincourt Defense, Catalan Defense	1. Nf3 d5 2. c4 e6 3. g3 b6 4. Bg2 Bb7 5. O-O
    A13	English Opening: Agincourt Defense, Catalan Defense	1. Nf3 d5 2. c4 e6 3. g3 c5
    A13	English Opening: Agincourt Defense, Catalan Defense Accepted	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4
    A13	English Opening: Agincourt Defense, Catalan Defense, Semi-Slav Defense	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 c6
    A13	English Opening: Agincourt Defense, Kurajica Defense	1. Nf3 d5 2. c4 e6 3. g3 c6
    A13	English Opening: Agincourt Defense, Tarrasch Defense	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. b3 c5 5. Bg2 Nc6 6. O-O Be7
    A13	English Opening: Agincourt Defense, Wimpy System	1. Nf3 Nf6 2. c4 e6 3. b3 d5 4. Bb2 c5 5. e3
    A13	English Opening: Neo-Catalan	1. Nf3 Nf6 2. c4 e6 3. g3 d5
    A13	English Opening: Neo-Catalan Declined	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7
    A13	English Opening: Romanishin Gambit	1. Nf3 Nf6 2. c4 e6 3. g3 a6 4. Bg2 b5
    A14	English Opening: Agincourt Defense, Keres Defense	1. c4 c5 2. Nf3 Nf6 3. Nc3 e6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nc6 7. O-O Be7
    A14	English Opening: Agincourt Defense, Neo-Catalan Declined	1. Nf3 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. O-O
    A14	Réti Opening: Anglo-Slav Variation, Bogoljubov Variation, Stonewall Line	1. Nf3 d5 2. c4 e6 3. g3 Nf6 4. Bg2 Be7 5. O-O O-O 6. b3 c6 7. Bb2
    A15	English Opening: Anglo-Indian Defense	1. c4 Nf6
    A15	English Opening: Anglo-Indian Defense, Anti-Anti-Grünfeld	1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4
    A15	English Opening: Anglo-Indian Defense, Grünfeld Formation	1. c4 Nf6 2. Nf3 g6 3. g3 d5
    A15	English Opening: Anglo-Indian Defense, King's Indian Formation	1. Nf3 Nf6 2. c4 g6
    A15	English Opening: Anglo-Indian Defense, King's Indian Formation, Double Fianchetto	1. Nf3 Nf6 2. c4 b6 3. g3 Bb7 4. Bg2 g6
    A15	English Opening: Anglo-Indian Defense, King's Knight Variation	1. Nf3 Nf6 2. c4
    A15	English Opening: Anglo-Indian Defense, Old Indian Formation	1. Nf3 Nf6 2. c4 d6
    A15	English Opening: Anglo-Indian Defense, Queen's Indian Formation	1. Nf3 Nf6 2. c4 b6
    A15	English Opening: Anglo-Indian Defense, Queen's Indian Formation	1. Nf3 Nf6 2. c4 e6 3. g3 b6 4. Bg2 Bb7
    A15	English Opening: Anglo-Indian Defense, Romanishin Variation	1. Nf3 Nf6 2. c4 e6 3. g3 a6
    A15	English Opening: Anglo-Indian Defense, Scandinavian Defense	1. Nf3 Nf6 2. c4 d5
    A15	English Opening: Anglo-Indian Defense, Scandinavian Defense, Exchange Variation	1. Nf3 Nf6 2. c4 d5 3. cxd5 Nxd5
    A15	English Opening: Anglo-Indian Defense, Slav Formation	1. Nf3 Nf6 2. c4 g6 3. g3 c6
    A15	English Orangutan	1. c4 Nf6 2. b4
    A16	English Opening: Anglo-Grünfeld Defense	1. c4 Nf6 2. Nc3 d5
    A16	English Opening: Anglo-Grünfeld Defense, Korchnoi Variation	1. Nf3 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. g3 Bg7 6. Bg2 e5
    A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. Nf3
    A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. g3 g6 5. Bg2 Nb6
    A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	1. c4 Nf6 2. Nc3 d5 3. cxd5 Nxd5 4. g3 g6 5. Bg2 Nxc3
    A16	English Opening: Anglo-Indian Defense, Queen's Knight Variation	1. c4 Nf6 2. Nc3
    A17	English Opening: Anglo-Indian Defense, Hedgehog System	1. c4 Nf6 2. Nc3 e6
    A17	English Opening: Anglo-Indian Defense, Nimzo-English	1. Nf3 Nf6 2. c4 e6 3. Nc3 Bb4
    A17	English Opening: Anglo-Indian Defense, Queen's Indian Formation	1. c4 Nf6 2. Nc3 e6 3. Nf3 b6
    A17	English Opening: Anglo-Indian Defense, Queen's Indian Variation	1. c4 Nf6 2. Nc3 e6 3. Nf3 b6 4. e4 Bb7 5. Bd3
    A17	English Opening: Anglo-Indian Defense, Zvjaginsev-Krasenkow Attack	1. c4 Nf6 2. Nc3 e6 3. Nf3 Bb4 4. g4
    A18	English Opening: Mikenas-Carls Variation	1. c4 Nf6 2. Nc3 e6 3. e4
    A18	English Opening: Mikenas-Carls Variation	1. c4 Nf6 2. Nc3 e6 3. e4 Nc6
    A18	English Opening: Mikenas-Carls Variation	1. c4 Nf6 2. Nc3 e6 3. e4 d5 4. e5
    A19	English Opening: Anglo-Indian Defense, Flohr-Mikenas-Carls Variation, Nei Gambit	1. c4 Nf6 2. Nc3 e6 3. e4 c5 4. e5 Ng8
    A19	English Opening: Mikenas-Carls, Sicilian	1. c4 Nf6 2. Nc3 e6 3. e4 c5
    A20	English Opening: Drill Variation	1. c4 e5 2. g3 h5
    A20	English Opening: King's English Variation	1. c4 e5
    A20	English Opening: King's English Variation, Kahiko-Hula Gambit	1. c4 e5 2. e3 Nf6 3. f4 exf4 4. Nf3
    A20	English Opening: King's English Variation, Nimzowitsch Variation	1. c4 e5 2. Nf3
    A20	English Opening: King's English Variation, Nimzowitsch-Flohr Variation	1. c4 e5 2. Nf3 e4
    A21	English Opening: King's English Variation	1. c4 e5 2. Nc3 d6 3. Nf3
    A21	English Opening: King's English Variation, Keres Defense	1. c4 e5 2. Nc3 d6 3. g3 c6
    A21	English Opening: King's English Variation, Kramnik-Shirov Counterattack	1. c4 e5 2. Nc3 Bb4
    A21	English Opening: King's English Variation, Reversed Sicilian	1. c4 e5 2. Nc3
    A21	English Opening: King's English Variation, Smyslov Defense	1. c4 e5 2. Nc3 d6 3. Nf3 Bg4
    A21	English Opening: King's English Variation, Troger Defense	1. c4 e5 2. Nc3 Nc6 3. g3 d6 4. Bg2 Be6
    A22	English Opening: Carls-Bremen System	1. c4 e5 2. Nc3 Nf6 3. g3
    A22	English Opening: King's English Variation, Bellon Gambit	1. c4 e5 2. Nc3 Nf6 3. Nf3 e4 4. Ng5 b5
    A22	English Opening: King's English Variation, Two Knights Variation	1. c4 e5 2. Nc3 Nf6
    A22	English Opening: King's English Variation, Two Knights Variation, Reversed Dragon	1. c4 e5 2. Nc3 Nf6 3. g3 d5
    A22	English Opening: King's English Variation, Two Knights Variation, Smyslov System	1. c4 e5 2. Nc3 Nf6 3. g3 Bb4
    A22	English Opening: King's English, Erbenheimer Gambit	1. c4 e5 2. Nc3 Nf6 3. Nf3 e4 4. Ng5 Ng4
    A22	English Opening: King's English, Mazedonisch	1. c4 e5 2. Nc3 Nf6 3. f4
    A23	English Opening: King's English Variation, Two Knights Variation, Keres Variation	1. c4 e5 2. Nc3 Nf6 3. g3 c6
    A24	English Opening: King's English Variation, Two Knights Variation, Fianchetto Line	1. c4 e5 2. Nc3 Nf6 3. g3 g6
    A25	English Opening: Closed, Taimanov Variation	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Rb1 Nh6 5. Bg2 Bg7
    A25	English Opening: Closed, Taimanov Variation	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e3 d6 6. Nge2 Nh6
    A25	English Opening: King's English Variation, Bremen-Hort Variation	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e3 d6 6. Nge2 Be6
    A25	English Opening: King's English Variation, Closed System	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3
    A25	English Opening: King's English Variation, Hungarian Attack	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Rb1
    A25	English Opening: King's English Variation, Reversed Closed Sicilian	1. c4 e5 2. Nc3 Nc6
    A25	English Opening: King's English Variation, Taimanov Variation	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7
    A26	English Opening: King's English Variation, Botvinnik System	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. e4
    A26	English Opening: King's English Variation, Closed System, Full Symmetry	1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6
    A27	English Opening: King's English Variation, Three Knights System	1. c4 e5 2. Nc3 Nc6 3. Nf3
    A28	English Opening: Four Knights System, Nimzowitsch Variation	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e4
    A28	English Opening: King's English Variation, Four Knights Variation	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6
    A28	English Opening: King's English Variation, Four Knights Variation	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 exd4 5. Nxd4 Bb4 6. Bg5 h6 7. Bh4 Bxc3+ 8. bxc3 Ne5
    A28	English Opening: King's English Variation, Four Knights Variation, Bradley Beach Variation	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 e4
    A28	English Opening: King's English Variation, Four Knights Variation, Flexible Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d3
    A28	English Opening: King's English Variation, Four Knights Variation, Korchnoi Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. a3
    A28	English Opening: King's English Variation, Four Knights Variation, Quiet Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3
    A28	English Opening: King's English Variation, Four Knights Variation, Quiet Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3 Bb4 5. Qc2 Bxc3
    A28	English Opening: King's English Variation, Four Knights Variation, Quiet Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3 Bb4 5. Qc2 O-O 6. Nd5 Re8 7. Qf5
    A29	English Opening: King's English Variation, Four Knights Variation, Fianchetto Line	1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3
    A30	English Opening: Symmetrical Variation	1. c4 c5
    A30	English Opening: Symmetrical Variation	1. c4 c5 2. Nf3
    A30	English Opening: Symmetrical Variation, Hedgehog Defense	1. Nf3 Nf6 2. c4 c5 3. Nc3 e6 4. g3 b6 5. Bg2 Bb7 6. O-O Be7
    A30	English Opening: Symmetrical Variation, Napolitano Gambit	1. c4 c5 2. Nf3 Nf6 3. b4
    A30	English Opening: Symmetrical, Hedgehog, Flexible Formation	1. Nf3 c5 2. c4 Nf6 3. Nc3 e6 4. g3 b6 5. Bg2 Bb7 6. O-O Be7 7. d4 cxd4 8. Qxd4 d6 9. Rd1 a6 10. b3 Nbd7
    A30	English Opening: Wing Gambit	1. c4 c5 2. b4
    A31	English Opening: Symmetrical Variation, Anti-Benoni Variation	1. d4 Nf6 2. c4 c5 3. Nf3
    A32	English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense	1. d4 Nf6 2. c4 c5 3. Nf3 cxd4 4. Nxd4 e6
    A33	English Opening: Symmetrical Variation, Anti-Benoni Variation, Geller Variation	1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. d4 cxd4 5. Nxd4 e6 6. g3 Qb6
    A33	English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense	1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. d4 cxd4 5. Nxd4 e6
    A34	English Opening: Symmetrical Variation, Fianchetto Variation	1. c4 Nf6 2. Nc3 c5 3. g3
    A34	English Opening: Symmetrical Variation, Normal Variation	1. c4 c5 2. Nc3
    A34	English Opening: Symmetrical Variation, Rubinstein Variation	1. c4 Nf6 2. Nc3 c5 3. g3 d5 4. cxd5 Nxd5 5. Bg2 Nc7
    A34	English Opening: Symmetrical Variation, Three Knights Variation	1. c4 c5 2. Nc3 Nf6 3. Nf3
    A35	English Opening: Symmetrical Variation, Four Knights Variation	1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6
    A35	English Opening: Symmetrical Variation, Two Knights Variation	1. c4 c5 2. Nc3 Nc6
    A36	English Opening: Symmetrical Variation, Botvinnik System	1. e4 c5 2. c4 Nc6 3. Nc3 g6 4. g3 Bg7 5. Bg2
    A36	English Opening: Symmetrical Variation, Botvinnik System Reversed, with e3	1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e3 e5
    A36	English Opening: Symmetrical Variation, Symmetrical Variation	1. c4 c5 2. g3 g6 3. Bg2 Bg7 4. Nc3 Nc6
    A36	English Opening: Symmetrical Variation, Two Knights, Fianchetto Variation	1. c4 c5 2. Nc3 Nc6 3. g3
    A37	English Opening: Symmetrical Variation, Botvinnik System Reversed, with Nf3	1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3 e5
    A37	English Opening: Symmetrical Variation, Three Knights, Fianchetto Variation	1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3
    A38	English Opening: Symmetrical Variation, Double Fianchetto	1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3 Nf6 6. O-O O-O 7. b3
    A38	English Opening: Symmetrical Variation, Duchamp Variation	1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. O-O O-O 5. c4 c5 6. Nc3 Nc6 7. d3
    A38	English Opening: Symmetrical Variation, Full Symmetry Line	1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7
    A39	English Opening: Symmetrical Variation, Mecking Variation	1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4
    A40	Australian Defense	1. d4 Na6
    A40	Benoni Defense: Franco-Sicilian Hybrid	1. d4 e6 2. c4 c5 3. d5 exd5 4. cxd5 d6 5. Nc3 g6 6. e4 Bg7 7. Nf3 Ne7
    A40	Borg Defense: Borg Gambit	1. d4 g5
    A40	Colle System: Pterodactyl Variation	1. d4 g6 2. Nf3 Bg7 3. e3 c5 4. Bd3 Qa5+
    A40	Colle System: Siroccopteryx Variation	1. d4 g6 2. Nf3 Bg7 3. e3 c5 4. Bd3 cxd4 5. Nxd4 Qa5+
    A40	English Defense	1. d4 b6
    A40	English Defense	1. d4 e6 2. c4 b6
    A40	English Defense: Eastbourne Gambit	1. d4 b6 2. c4 Bb7 3. Nc3 e5
    A40	English Defense: Hartlaub Gambit Accepted	1. c4 e6 2. d4 b6 3. Nc3 Bb7 4. e4 f5 5. exf5 Nf6
    A40	English Defense: Hartlaub Gambit Declined	1. c4 e6 2. d4 b6 3. Nc3 Bb7 4. e4 f5 5. d5
    A40	English Defense: Perrin Variation	1. d4 e6 2. c4 b6 3. e4 Bb7 4. Bd3 Nc6
    A40	English Defense: Poli Gambit	1. d4 e6 2. c4 b6 3. e4 Bb7 4. f3 f5 5. exf5 Nh6
    A40	Englund Gambit	1. d4 e5
    A40	Englund Gambit Complex Declined	1. d4 e5 2. d5
    A40	Englund Gambit Complex Declined: Diemer Counterattack	1. d4 e5 2. d5 Bc5 3. e4 Qh4
    A40	Englund Gambit Complex: Englund Gambit	1. d4 e5 2. dxe5 Nc6 3. Nf3 Qe7
    A40	Englund Gambit Complex: Felbecker Gambit	1. d4 e5 2. dxe5 Nc6 3. Nf3 Bc5
    A40	Englund Gambit Complex: Hartlaub-Charlick Gambit	1. d4 e5 2. dxe5 d6
    A40	Englund Gambit Complex: Mosquito Gambit	1. d4 e5 2. dxe5 Qh4
    A40	Englund Gambit Complex: Soller Gambit	1. d4 e5 2. dxe5 f6
    A40	Englund Gambit Complex: Soller Gambit Deferred	1. d4 e5 2. dxe5 Nc6 3. Nf3 f6
    A40	Englund Gambit Complex: Stockholm Variation	1. d4 e5 2. dxe5 Nc6 3. Nf3 Qe7 4. Qd5
    A40	Englund Gambit Complex: Zilbermints Gambit	1. d4 e5 2. dxe5 Nc6 3. Nf3 Nge7
    A40	Englund Gambit Declined: Reversed Alekhine	1. d4 e5 2. Nf3
    A40	Englund Gambit Declined: Reversed Brooklyn	1. d4 e5 2. Nf3 e4 3. Ng1
    A40	Englund Gambit Declined: Reversed French	1. d4 e5 2. e3
    A40	Englund Gambit Declined: Reversed Krebs	1. d4 e5 2. Nf3 e4
    A40	Englund Gambit Declined: Reversed Mokele Mbembe	1. d4 e5 2. Nf3 e4 3. Ne5
    A40	Horwitz Defense	1. d4 e6
    A40	Horwitz Defense: Zilbermints Gambit	1. d4 e6 2. c4 e5
    A40	Kangaroo Defense	1. d4 e6 2. c4 Bb4+
    A40	Kangaroo Defense: Keres Defense, Transpositional Variation	1. d4 e6 2. c4 Bb4+ 3. Nc3
    A40	Mikenas Defense	1. d4 Nc6
    A40	Mikenas Defense: Cannstatter Variation	1. d4 Nc6 2. c4 e5 3. d5 Nd4
    A40	Mikenas Defense: Lithuanian Variation	1. d4 Nc6 2. c4 e5 3. d5 Nce7
    A40	Mikenas Defense: Pozarek Gambit	1. d4 Nc6 2. c4 e5 3. dxe5 Nxe5 4. Nc3 Nxc4
    A40	Modern Defense: Beefeater Variation	1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 f5
    A40	Modern Defense: Lizard Defense, Pirc-Diemer Gambit	1. d4 g6 2. h4 Nf6 3. h5
    A40	Montevideo Defense	1. d4 Nc6 2. d5 Nb8
    A40	Polish Defense	1. d4 b5
    A40	Polish Defense: Spassky Gambit Accepted	1. d4 b5 2. e4 Bb7 3. Bxb5
    A40	Pterodactyl Defense: Central, Benoni Beefeater Pterodactyl	1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 d6 5. e4 Bxc3+ 6. bxc3 Qa5
    A40	Pterodactyl Defense: Central, Benoni Pterodactyl	1. d4 g6 2. c4 Bg7 3. e4 c5 4. d5 Qa5+
    A40	Pterodactyl Defense: Fianchetto, Queen Benoni Pterodactyl	1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Qa5
    A40	Pterodactyl Defense: Fianchetto, Queen Pteranodon	1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 Qa5
    A40	Pterodactyl Defense: Fianchetto, Queen Pterodactyl	1. d4 g6 2. Nf3 Bg7 3. g3 c5 4. Bg2 Qa5+
    A40	Pterodactyl Defense: Queen Pterodactyl, Quiet Line	1. d4 g6 2. c4 Bg7 3. Nc3 c5 4. e3
    A40	Queen's Pawn Game	1. d4
    A40	Queen's Pawn Game: Anglo-Slav Opening	1. d4 c6 2. c4 d6
    A40	Queen's Pawn Game: Modern Defense	1. d4 g6
    A40	Slav Indian: Kudischewitsch Gambit	1. d4 c6 2. Nf3 Nf6 3. c4 b5
    A40	Zaire Defense	1. d4 Nc6 2. d5 Nb8 3. e4 Nf6 4. e5 Ng8
    A41	Modern Defense	1. d4 g6 2. c4 Bg7 3. Nc3 d6
    A41	Modern Defense: Neo-Modern Defense	1. d4 g6 2. c4 Bg7 3. e4 e5
    A41	Old Indian Defense	1. d4 d6 2. c4
    A41	Queen's Pawn Game	1. d4 d6
    A41	Rat Defense: English Rat	1. d4 d6 2. c4 e5
    A41	Rat Defense: English Rat, Lisbon Gambit	1. d4 d6 2. c4 e5 3. dxe5 Nc6
    A41	Rat Defense: English Rat, Pounds Gambit	1. d4 d6 2. c4 e5 3. dxe5 Be6
    A41	Robatsch Defense	1. d4 d6 2. Nf3 g6 3. c4 Bg7 4. e4 Bg4
    A41	Wade Defense	1. d4 d6 2. Nf3 Bg4
    A41	Zukertort Opening: Wade Defense, Chigorin Plan	1. d4 d6 2. Nf3 Bg4 3. c4 Nd7 4. Qb3 Rb8
    A42	Modern Defense: Averbakh System	1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4
    A42	Modern Defense: Averbakh Variation, Pseudo-Sämisch	1. d4 g6 2. c4 Bg7 3. e4 d6 4. Be3 Nf6 5. f3
    A42	Modern Defense: Kotov Variation	1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4 Nc6
    A42	Modern Defense: Randspringer Variation	1. d4 g6 2. c4 Bg7 3. Nc3 d6 4. e4 f5
    A42	Pterodactyl Defense	1. Nf3 c5 2. c4 g6 3. d4 Bg7 4. e4 Qa5+ 5. Nc3 d6
    A42	Pterodactyl Defense: Central, Bogolubovia	1. d4 g6 2. c4 Bg7 3. e4 d6 4. Nc3 c5 5. Nge2 Qa5
    A43	Benoni Defense: Benoni Gambit Accepted	1. d4 c5 2. dxc5
    A43	Benoni Defense: Benoni Gambit, Schlenker Defense	1. d4 c5 2. dxc5 Na6
    A43	Benoni Defense: Benoni-Indian Defense	1. d4 c5 2. d5 Nf6
    A43	Benoni Defense: Benoni-Indian Defense, Kingside Move Order	1. d4 Nf6 2. Nf3 c5 3. d5
    A43	Benoni Defense: Benoni-Staunton Gambit	1. d4 c5 2. d5 f5 3. e4
    A43	Benoni Defense: Cormorant Gambit	1. d4 c5 2. dxc5 b6
    A43	Benoni Defense: French Benoni	1. e4 e6 2. d4 c5 3. d5
    A43	Benoni Defense: Hawk Variation	1. d4 Nf6 2. Nf3 c5 3. d5 c4
    A43	Benoni Defense: Old Benoni	1. d4 c5
    A43	Benoni Defense: Old Benoni	1. d4 c5 2. d5
    A43	Benoni Defense: Old Benoni	1. d4 c5 2. d5 d6
    A43	Benoni Defense: Old Benoni, Mujannah Formation	1. d4 c5 2. d5 f5
    A43	Benoni Defense: Old Benoni, Schmid Variation	1. d4 c5 2. d5 d6 3. Nc3 g6
    A43	Benoni Defense: Snail Variation	1. d4 c5 2. d5 Na6
    A43	Benoni Defense: Woozle	1. d4 c5 2. d5 Nf6 3. Nc3 Qa5
    A43	Benoni Defense: Zilbermints-Benoni Gambit	1. d4 c5 2. b4
    A43	Benoni Defense: Zilbermints-Benoni Gambit	1. d4 c5 2. Nf3 cxd4 3. b4
    A43	Benoni Defense: Zilbermints-Benoni Gambit, Tamarkin Countergambit	1. d4 c5 2. Nf3 cxd4 3. b4 e5
    A43	Indian Defense: Pseudo-Benko	1. d4 Nf6 2. Nf3 c5 3. d5 b5
    A43	Queen's Pawn Game: Liedmann Gambit	1. d4 c5 2. c4 cxd4 3. e3
    A44	Benoni Defense: Old Benoni	1. d4 c5 2. d5 e5
    A44	Benoni Defense: Semi-Benoni	1. d4 c5 2. d5 e5 3. e4 d6
    A45	Amazon Attack: Siberian Attack	1. d4 Nf6 2. Nc3 d5 3. Qd3
    A45	Canard Opening	1. d4 Nf6 2. f4
    A45	Indian Defense	1. d4 Nf6
    A45	Indian Defense: Gedult Attack, Gedult Attack	1. d4 Nf6 2. f3 d5 3. g4
    A45	Indian Defense: Gibbins-Weidenhagen Gambit	1. d4 Nf6 2. g4
    A45	Indian Defense: Gibbins-Weidenhagen Gambit Accepted	1. d4 Nf6 2. g4 Nxg4
    A45	Indian Defense: Gibbins-Weidenhagen Gambit, Maltese Falcon	1. d4 Nf6 2. g4 Nxg4 3. f3 Nf6 4. e4
    A45	Indian Defense: Gibbins-Weidenhagen Gambit, Oshima Defense	1. d4 Nf6 2. g4 e5
    A45	Indian Defense: Gibbins-Weidenhagen Gambit, Stummer Gambit	1. d4 Nf6 2. g4 Nxg4 3. e4 d6 4. Be2 Nf6 5. Nc3
    A45	Indian Defense: Lazard Gambit	1. d4 Nf6 2. Nd2 e5
    A45	Indian Defense: Maddigan Gambit	1. d4 Nf6 2. Nc3 e5
    A45	Indian Defense: Omega Gambit	1. d4 Nf6 2. e4
    A45	Indian Defense: Omega Gambit, Arafat Gambit	1. d4 Nf6 2. e4 Nxe4 3. Bd3 Nf6 4. Bg5
    A45	Indian Defense: Paleface Attack, Blackmar-Diemer Gambit Deferred	1. d4 Nf6 2. f3 d5 3. e4
    A45	Indian Defense: Pawn Push Variation	1. d4 Nf6 2. d5
    A45	Indian Defense: Reversed Chigorin Defense	1. d4 Nf6 2. Nc3 c5
    A45	Indian Defense: Tartakower Attack	1. d4 Nf6 2. g3
    A45	Paleface Attack	1. d4 Nf6 2. f3
    A45	Queen's Pawn Game: Chigorin Variation	1. d4 Nf6 2. Nc3 d5
    A45	Queen's Pawn Game: Veresov, Richter Attack	1. d4 Nf6 2. f3 d5 3. Nc3
    A45	Trompowsky Attack	1. d4 Nf6 2. Bg5
    A45	Trompowsky Attack: Borg Variation	1. d4 Nf6 2. Bg5 Ne4 3. Bf4 g5
    A45	Trompowsky Attack: Classical Defense	1. d4 Nf6 2. Bg5 e6
    A45	Trompowsky Attack: Classical Defense, Big Center Variation	1. d4 Nf6 2. Bg5 e6 3. e4
    A45	Trompowsky Attack: Edge Variation	1. d4 Nf6 2. Bg5 Ne4 3. Bh4
    A45	Trompowsky Attack: Edge Variation, Hergert Gambit	1. d4 Nf6 2. Bg5 Ne4 3. Bh4 c6 4. Nd2 Qa5 5. c3 Nxd2 6. Qxd2 d5 7. e4
    A45	Trompowsky Attack: Edge Variation, Hergert Gambit	1. d4 Nf6 2. Bg5 Ne4 3. Bh4 d5 4. f3 Nf6 5. Nc3 Bf5 6. e4
    A45	Trompowsky Attack: Poisoned Pawn Variation	1. d4 Nf6 2. Bg5 c5 3. d5 Qb6 4. Nc3
    A45	Trompowsky Attack: Raptor Variation	1. d4 Nf6 2. Bg5 Ne4 3. h4
    A45	Trompowsky Attack: Raptor Variation, Hergert Gambit	1. d4 Nf6 2. Bg5 Ne4 3. h4 Nxg5 4. hxg5 e5
    A46	Döry Defense	1. d4 Nf6 2. Nf3 Ne4
    A46	Indian Defense: Czech-Indian	1. d4 Nf6 2. Nf3 c6
    A46	Indian Defense: Knights Variation	1. d4 Nf6 2. Nf3
    A46	Indian Defense: Knights Variation, Alburt-Miles Variation	1. d4 Nf6 2. Nf3 a6
    A46	Indian Defense: London System	1. d4 Nf6 2. Nf3 e6 3. Bf4
    A46	Indian Defense: Polish Variation	1. d4 Nf6 2. Nf3 b5
    A46	Indian Defense: Spielmann-Indian	1. d4 Nf6 2. Nf3 c5
    A46	Indian Defense: Wade-Tartakower Defense	1. d4 Nf6 2. Nf3 d6
    A46	Queen's Pawn Game: Torre Attack, Breyer Variation	1. d4 Nf6 2. Nf3 e6 3. Bg5 d5 4. e3 c5 5. c3 Qb6
    A46	Queen's Pawn Game: Veresov Attack, Classical Defense	1. d4 Nf6 2. Nf3 e6 3. Nc3 d5 4. Bg5
    A46	Torre Attack: Classical Defense	1. d4 Nf6 2. Nf3 e6 3. Bg5
    A46	Torre Attack: Classical Defense, Nimzowitsch Variation	1. d4 Nf6 2. Nf3 e6 3. Bg5 h6
    A46	Torre Attack: Classical Defense, Petrosian Gambit	1. d4 Nf6 2. Nf3 e6 3. Bg5 c5 4. e3 b6 5. d5
    A46	Torre Attack: Wagner Gambit	1. d4 Nf6 2. Nf3 e6 3. Bg5 c5 4. e4
    A46	Yusupov-Rubinstein System	1. d4 Nf6 2. Nf3 e6 3. e3
    A47	Indian Defense: Schnepper Gambit	1. d4 Nf6 2. Nf3 b6 3. c3 e5
    A47	Marienbad System	1. d4 Nf6 2. Nf3 b6 3. g3 Bb7 4. Bg2 c5
    A47	Marienbad System: Berg Variation	1. d4 Nf6 2. Nf3 b6 3. g3 Bb7 4. Bg2 c5 5. c4 cxd4 6. Qxd4
    A47	Pseudo Queen's Indian Defense	1. d4 Nf6 2. Nf3 b6
    A48	East Indian Defense	1. d4 Nf6 2. Nf3 g6
    A48	Indian Defense: Colle System, King's Indian Variation	1. d4 Nf6 2. Nf3 g6 3. e3 Bg7 4. Bd3 d6
    A48	London System	1. d4 Nf6 2. Nf3 g6 3. Bf4
    A48	Queen's Pawn Game: Barry Attack, Grünfeld Variation	1. d4 Nf6 2. Nf3 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Be2
    A48	Queen's Pawn Game: Torre Attack, Grünfeld Variation, Main Line	1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 d5 5. e3 O-O
    A48	Torre Attack: Fianchetto Defense	1. d4 Nf6 2. Nf3 g6 3. Bg5
    A48	Torre Attack: Fianchetto Defense, Euwe Variation	1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 c5
    A49	Indian Defense: Przepiorka Variation	1. d4 Nf6 2. Nf3 g6 3. g3
    A50	Indian Defense: Medusa Gambit	1. d4 Nf6 2. c4 g5
    A50	Indian Defense: Normal Variation	1. d4 Nf6 2. c4
    A50	Indian Defense: Pyrenees Gambit	1. d4 Nf6 2. c4 b5
    A50	Mexican Defense	1. d4 Nf6 2. c4 Nc6
    A50	Mexican Defense: Horsefly Gambit	1. d4 Nf6 2. c4 Nc6 3. d5 Ne5 4. f4
    A50	Queen's Indian Accelerated	1. d4 Nf6 2. c4 b6
    A50	Slav Indian	1. d4 Nf6 2. c4 c6
    A51	Indian Defense: Budapest Defense	1. d4 Nf6 2. c4 e5
    A51	Indian Defense: Budapest Defense, Fajarowicz Defense, Bonsdorf Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ne4 4. a3 b6
    A51	Indian Defense: Budapest Defense, Fajarowicz Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ne4
    A51	Indian Defense: Budapest Defense, Fajarowicz-Steiner Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ne4 4. Qc2
    A52	Indian Defense: Budapest Defense	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4
    A52	Indian Defense: Budapest Defense, Adler Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Nf3
    A52	Indian Defense: Budapest Defense, Alekhine Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4
    A52	Indian Defense: Budapest Defense, Alekhine Variation, Abonyi Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4 Nxe5 5. f4 Nec6
    A52	Indian Defense: Budapest Defense, Alekhine Variation, Tartakower Defense	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. e4 d6
    A52	Indian Defense: Budapest Defense, Rubinstein Variation	1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Bf4
    A53	Old Indian Defense	1. d4 Nf6 2. c4 d6
    A53	Old Indian Defense: Aged Gibbon Gambit	1. d4 Nf6 2. c4 d6 3. g4
    A53	Old Indian Defense: Czech Variation, with Nc3	1. d4 Nf6 2. c4 d6 3. Nc3 c6
    A53	Old Indian Defense: Czech Variation, with Nf3	1. d4 Nf6 2. c4 d6 3. Nf3 c6
    A53	Old Indian Defense: Janowski Variation	1. d4 Nf6 2. c4 d6 3. Nc3 Bf5
    A53	Old Indian Defense: Janowski Variation, Fianchetto Variation	1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. g3
    A53	Old Indian Defense: Janowski Variation, Grinberg Gambit	1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. e4
    A53	Old Indian Defense: Janowski Variation, Main Line	1. d4 Nf6 2. c4 d6 3. Nc3 Bf5 4. f3
    A54	Old Indian Defense: Dus-Khotimirsky Variation	1. d4 Nf6 2. c4 d6 3. Nc3 e5 4. e3 Nbd7 5. Bd3
    A54	Old Indian Defense: Tartakower-Indian	1. d4 Nf6 2. c4 d6 3. Nf3 Bg4
    A54	Old Indian Defense: Two Knights Variation	1. d4 Nf6 2. c4 d6 3. Nc3 e5 4. Nf3
    A54	Old Indian Defense: Ukrainian Variation	1. d4 Nf6 2. c4 d6 3. Nc3 e5
    A55	Old Indian Defense: Normal Variation	1. d4 Nf6 2. c4 d6 3. Nc3 Nbd7 4. e4 e5 5. Nf3
    A56	Benoni Defense	1. d4 Nf6 2. c4 c5
    A56	Benoni Defense: Czech Benoni Defense	1. d4 Nf6 2. c4 c5 3. d5 e5
    A56	Benoni Defense: Hromádka System	1. d4 Nf6 2. c4 c5 3. d5 d6
    A56	Benoni Defense: King's Indian System	1. d4 Nf6 2. c4 c5 3. d5 e5 4. Nc3 d6 5. e4 g6
    A56	Benoni Defense: Weenink Variation	1. d4 Nf6 2. c4 c5 3. dxc5 e6
    A56	Grünfeld Defense: Three Knights Variation, Burille Variation, Reversed Tarrasch	1. d4 Nf6 2. c4 c5 3. e3 g6 4. Nc3 Bg7 5. Nf3 O-O 6. Be2 cxd4 7. exd4 d5 8. O-O Nc6
    A56	Vulture Defense	1. d4 Nf6 2. c4 c5 3. d5 Ne4
    A57	Benko Gambit	1. d4 Nf6 2. c4 c5 3. d5 b5
    A57	Benko Gambit Accepted	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6
    A57	Benko Gambit Accepted: Dlugy Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. f3
    A57	Benko Gambit Accepted: Modern Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. e3
    A57	Benko Gambit Accepted: Pawn Return Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. b6
    A57	Benko Gambit Declined: Bishop Attack	1. d4 Nf6 2. c4 c5 3. d5 b5 4. Bg5
    A57	Benko Gambit Declined: Hjørring Countergambit	1. d4 Nf6 2. c4 c5 3. d5 b5 4. e4
    A57	Benko Gambit Declined: Main Line	1. d4 Nf6 2. c4 c5 3. d5 b5 4. Nf3
    A57	Benko Gambit Declined: Pseudo-Sämisch	1. d4 Nf6 2. c4 c5 3. d5 b5 4. f3
    A57	Benko Gambit Declined: Quiet Line	1. d4 Nf6 2. c4 c5 3. d5 b5 4. Nd2
    A57	Benko Gambit Declined: Sosonko Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. a4
    A57	Benko Gambit: Mutkin Countergambit	1. d4 Nf6 2. c4 c5 3. d5 b5 4. g4
    A57	Benko Gambit: Nescafe Frappe Attack	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3 axb5 6. e4 b4 7. Nb5 d6 8. Bc4
    A57	Benko Gambit: Zaitsev System	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3
    A57	Benko Gambit: Zaitsev Variation, Nescafe Frappe Attack	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3 axb5 6. e4 b4 7. Nb5
    A58	Benko Gambit Accepted: Central Storming Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. f4
    A58	Benko Gambit Accepted: Fianchetto Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. g3 d6 8. Bg2 Bg7 9. Nf3
    A58	Benko Gambit Accepted: Fully Accepted Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6
    A58	Benko Gambit: Fianchetto Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6 8. g3
    A58	Benko Gambit: Nd2 Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6 8. Nd2
    A59	Benko Gambit	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. e4 Bxf1 8. Kxf1 d6 9. g3
    A59	Benko Gambit Accepted: King Walk Variation	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. Nf3 d6 8. e4 Bxf1 9. Kxf1 Bg7 10. g3 O-O 11. Kg2
    A59	Benko Gambit Accepted: Yugoslav	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. e4
    A59	Benko Gambit Accepted: Yugoslav	1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 g6 6. Nc3 Bxa6 7. e4 Bxf1 8. Kxf1 d6 9. Nge2
    A60	Benoni Defense: Modern Variation	1. d4 Nf6 2. c4 c5 3. d5 e6
    A60	Benoni Defense: Modern Variation, Snake Variation	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 Bd6
    A61	Benoni Defense	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6
    A61	Benoni Defense: Fianchetto Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. g3
    A61	Benoni Defense: Knight's Tour Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Nd2
    A61	Benoni Defense: Uhlmann Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg5
    A62	Benoni Defense: Fianchetto Variation	1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O
    A63	Benoni Defense: Fianchetto Variation, Hastings Defense	1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O Nbd7
    A64	Benoni Defense: Fianchetto Variation, Hastings Defense, Main Line	1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O a6 10. a4 Nbd7 11. Nd2 Re8
    A65	Benoni Defense: King's Pawn Line	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4
    A66	Benoni Defense: Mikenas Variation	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. e5
    A66	Benoni Defense: Pawn Storm Variation	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4
    A67	Benoni Defense: Taimanov Variation	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. Bb5+
    A68	Benoni Defense: Four Pawns Attack	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. Nf3 O-O
    A69	Benoni Defense: Four Pawns Attack, Main Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8
    A70	Benoni Defense: Classical Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4
    A70	Benoni Defense: Classical Variation, New York Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. h3
    A70	Benoni Defense: Classical Variation, Traditional Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2
    A71	Benoni Defense: Classical Variation, Averbakh-Grivas Attack	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Bg5
    A72	Benoni Defense: Classical	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O
    A73	Benoni Defense: Classical Variation, Main Line	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O
    A74	Benoni Defense: Classical Variation, Full Line	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O a6 10. a4
    A75	Benoni Defense: Classical Variation, Argentine Counterattack	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2 O-O 9. O-O a6 10. a4 Bg4
    A76	Benoni Defense: Classical Variation, Czerniak Defense	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8
    A77	Benoni Defense: Classical Variation, Czerniak Defense, Tal Line	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2
    A78	Benoni Defense: Classical Variation, Czerniak Defense	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. e4 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2 Na6
    A79	Benoni Defense: Classical Variation, Czerniak Defense	1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. Nf3 Bg7 8. Be2 O-O 9. O-O Re8 10. Nd2 Na6 11. f3
    A80	Dutch Defense	1. d4 f5
    A80	Dutch Defense: Alapin Variation	1. d4 f5 2. Qd3
    A80	Dutch Defense: Hevendehl Gambit	1. d4 f5 2. g4 e5
    A80	Dutch Defense: Hopton Attack	1. d4 f5 2. Bg5
    A80	Dutch Defense: Janzen-Korchnoi Gambit	1. d4 f5 2. h3 Nf6 3. g4
    A80	Dutch Defense: Kingfisher Gambit	1. d4 f5 2. Nc3 d5 3. e4
    A80	Dutch Defense: Korchnoi Attack	1. d4 f5 2. h3
    A80	Dutch Defense: Krejcik Gambit	1. d4 f5 2. g4
    A80	Dutch Defense: Krejcik Gambit, Tate Gambit	1. d4 f5 2. g4 fxg4 3. e4 d5 4. Nc3
    A80	Dutch Defense: Manhattan Gambit, Anti-Classical Line	1. d4 f5 2. Qd3 e6 3. g4
    A80	Dutch Defense: Manhattan Gambit, Anti-Leningrad	1. d4 f5 2. Qd3 g6 3. g4
    A80	Dutch Defense: Manhattan Gambit, Anti-Modern	1. d4 f5 2. Qd3 d6 3. g4
    A80	Dutch Defense: Manhattan Gambit, Anti-Stonewall	1. d4 f5 2. Qd3 d5 3. g4
    A80	Dutch Defense: Omega-Isis Gambit	1. d4 f5 2. Nf3 e5
    A80	Dutch Defense: Raphael Variation	1. d4 f5 2. Nc3
    A80	Dutch Defense: Senechaud Gambit	1. d4 f5 2. Bf4 e6 3. g4
    A80	Dutch Defense: Spielmann Gambit	1. d4 f5 2. Nc3 Nf6 3. g4
    A80	Queen's Pawn Game: Veresov Attack, Dutch System	1. d4 f5 2. Nc3 d5
    A81	Dutch Defense: Blackburne Variation	1. d4 f5 2. g3 Nf6 3. Bg2 e6 4. Nh3
    A81	Dutch Defense: Fianchetto Attack	1. d4 f5 2. g3
    A81	Dutch Defense: Leningrad Variation, Karlsbad Variation	1. d4 f5 2. g3 g6 3. Bg2 Bg7 4. Nh3
    A81	Dutch Defense: Leningrad, Basman System	1. d4 f5 2. g3 c6 3. Bg2 g6 4. Nf3 Bg7 5. O-O Nh6
    A81	Dutch Defense: Semi-Leningrad Variation	1. d4 f5 2. g3 Nf6 3. Bg2 g6
    A82	Dutch Defense: Blackmar's Second Gambit	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. f3
    A82	Dutch Defense: Staunton Gambit	1. d4 f5 2. e4
    A82	Dutch Defense: Staunton Gambit Accepted	1. d4 f5 2. e4 fxe4
    A82	Dutch Defense: Staunton Gambit, American Attack	1. d4 f5 2. e4 fxe4 3. Nd2
    A82	Dutch Defense: Staunton Gambit, Tartakower Variation	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. g4
    A82	Rat Defense: Balogh Defense	1. e4 d6 2. d4 f5
    A83	Dutch Defense: Staunton Gambit	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5
    A83	Dutch Defense: Staunton Gambit, Alekhine Variation	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 g6 5. h4
    A83	Dutch Defense: Staunton Gambit, Chigorin Variation	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 c6
    A83	Dutch Defense: Staunton Gambit, Lasker Variation	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 g6 5. f3
    A83	Dutch Defense: Staunton Gambit, Nimzowitsch Variation	1. d4 f5 2. e4 fxe4 3. Nc3 Nf6 4. Bg5 b6
    A84	Dutch Defense	1. d4 f5 2. c4
    A84	Dutch Defense: Bellon Gambit	1. d4 f5 2. c4 e6 3. e4
    A84	Dutch Defense: Bladel Variation	1. d4 f5 2. c4 g6 3. Nc3 Nh6
    A84	Dutch Defense: Classical Variation	1. d4 f5 2. c4 e6
    A84	Dutch Defense: Krause Variation	1. d4 f5 2. c4 Nf6 3. Nc3 d6 4. Nf3 Nc6
    A84	Dutch Defense: Normal Variation	1. d4 f5 2. c4 Nf6
    A84	Dutch Defense: Rubinstein Variation	1. d4 f5 2. c4 e6 3. Nc3
    A85	Dutch Defense: Queen's Knight Variation	1. d4 f5 2. c4 Nf6 3. Nc3
    A86	Dutch Defense: Fianchetto Variation	1. d4 f5 2. c4 Nf6 3. g3
    A86	Dutch Defense: Hort-Antoshin System	1. d4 f5 2. c4 Nf6 3. g3 d6 4. Bg2 c6 5. Nc3 Qc7
    A86	Dutch Defense: Leningrad Variation	1. d4 f5 2. c4 Nf6 3. g3 g6
    A87	Dutch Defense: Leningrad Variation	1. d4 f5 2. c4 Nf6 3. g3 g6 4. Bg2 Bg7 5. Nf3
    A88	Dutch Defense: Leningrad Variation, Warsaw Variation	1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 c6
    A89	Dutch Defense: Leningrad Variation, Matulovic Variation	1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Nc6
    A90	Dutch Defense: Classical Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2
    A90	Dutch Defense: Nimzo-Dutch Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Bb4+
    A90	Dutch Defense: Nimzo-Dutch Variation, Alekhine Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Bb4+ 5. Bd2 Be7
    A90	Dutch Defense: Stonewall Variation, Modern Variation	1. d4 f5 2. c4 e6 3. Nf3 Nf6 4. g3 c6 5. Bg2 d5 6. O-O Bd6
    A91	Dutch Defense: Classical Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7
    A91	Dutch Defense: Classical Variation, Blackburne Attack	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nh3
    A92	Dutch Defense: Alekhine Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O Ne4
    A92	Dutch Defense: Classical Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O
    A92	Dutch Defense: Stonewall Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. Nc3
    A92	Dutch Defense: Stonewall Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5
    A93	Dutch Defense: Stonewall Variation, Botvinnik Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. b3
    A94	Dutch Defense: Stonewall Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. b3 c6 8. Ba3
    A95	Dutch Defense: Stonewall Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. Nc3 c6
    A95	Dutch Defense: Stonewall Variation, Chekhover Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d5 7. Nc3 c6 8. Qc2 Qe8 9. Bg5
    A96	Dutch Defense: Classical Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6
    A96	Dutch Defense: Classical Variation, Buenos Aires Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 a5
    A96	Dutch Defense: Classical Variation, Huisl Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Ne4
    A97	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Qe8
    A97	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Winter Variation	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Qe8 8. Re1
    A98	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Alatortsev-Lisitsyn Line	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Qe8 8. Qc2
    A99	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Modern Main Line	1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Be7 5. Nf3 O-O 6. O-O d6 7. Nc3 Qe8 8. b3
    B00	Barnes Defense	1. e4 f6
    B00	Borg Defense	1. e4 g5
    B00	Borg Defense: Borg Gambit	1. e4 g5 2. d4 Bg7
    B00	Borg Defense: Troon Gambit	1. e4 g5 2. d4 h6 3. h4 g4
    B00	Borg Defense: Zilbermints Gambit	1. e4 g5 2. d4 e5
    B00	Carr Defense	1. e4 h6
    B00	Carr Defense: Zilbermints Gambit	1. e4 h6 2. d4 e5
    B00	Duras Gambit	1. e4 f5
    B00	Fried Fox Defense	1. e4 f6 2. d4 Kf7
    B00	Goldsmith Defense	1. e4 h5
    B00	Goldsmith Defense: Picklepuss Defense	1. e4 h5 2. d4 Nf6
    B00	Guatemala Defense	1. e4 b6 2. d4 Ba6
    B00	Hippopotamus Defense	1. e4 Nh6
    B00	Hippopotamus Defense	1. e4 Nh6 2. d4 g6 3. c4 f6
    B00	King's Pawn Game	1. e4
    B00	Lemming Defense	1. e4 Na6
    B00	Lion Defense: Lion's Jaw	1. e4 d6 2. d4 Nf6 3. f3
    B00	Nimzowitsch Defense	1. e4 Nc6
    B00	Nimzowitsch Defense	1. e4 Nc6 2. d4
    B00	Nimzowitsch Defense: Breyer Variation	1. e4 Nc6 2. Nc3 Nf6 3. d4 e5
    B00	Nimzowitsch Defense: Colorado Countergambit	1. e4 Nc6 2. Nf3 f5
    B00	Nimzowitsch Defense: Colorado Countergambit Accepted	1. e4 Nc6 2. Nf3 f5 3. exf5
    B00	Nimzowitsch Defense: Declined Variation	1. e4 Nc6 2. Nf3
    B00	Nimzowitsch Defense: El Columpio Defense	1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4
    B00	Nimzowitsch Defense: El Columpio Defense, El Columpio Gambit	1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. e6
    B00	Nimzowitsch Defense: El Columpio Defense, Exchange Variation	1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. exd6
    B00	Nimzowitsch Defense: El Columpio Defense, Pin Variation	1. e4 Nc6 2. Nf3 Nf6 3. e5 Ng4 4. d4 d6 5. h3 Nh6 6. Bb5
    B00	Nimzowitsch Defense: Franco-Nimzowitsch Variation	1. e4 Nc6 2. Nf3 e6
    B00	Nimzowitsch Defense: French Connection	1. e4 Nc6 2. Nc3 e6
    B00	Nimzowitsch Defense: Hornung Gambit	1. e4 Nc6 2. d4 d5 3. Be3
    B00	Nimzowitsch Defense: Kennedy Variation	1. e4 Nc6 2. d4 e5
    B00	Nimzowitsch Defense: Kennedy Variation, Bielefelder Gambit	1. e4 Nc6 2. d4 e5 3. dxe5 Bc5
    B00	Nimzowitsch Defense: Kennedy Variation, Hammer Gambit	1. e4 Nc6 2. d4 e5 3. dxe5 f6
    B00	Nimzowitsch Defense: Kennedy Variation, Herford Gambit	1. e4 Nc6 2. d4 e5 3. dxe5 Qh4
    B00	Nimzowitsch Defense: Kennedy Variation, Keres Attack	1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. Nc3
    B00	Nimzowitsch Defense: Kennedy Variation, Linksspringer Variation	1. e4 Nc6 2. d4 e5 3. d5
    B00	Nimzowitsch Defense: Kennedy Variation, Main Line	1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. f4 Ng6
    B00	Nimzowitsch Defense: Kennedy Variation, Paulsen Attack	1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. Nf3
    B00	Nimzowitsch Defense: Kennedy Variation, Riemann Defense	1. e4 Nc6 2. d4 e5 3. dxe5 Nxe5 4. f4 Nc6
    B00	Nimzowitsch Defense: Kennedy Variation, de Smet Gambit	1. e4 Nc6 2. d4 e5 3. dxe5 d6
    B00	Nimzowitsch Defense: Mikenas Variation	1. e4 Nc6 2. d4 d6
    B00	Nimzowitsch Defense: Neo-Mongoloid Defense	1. e4 Nc6 2. d4 f6
    B00	Nimzowitsch Defense: Pirc Connection	1. e4 Nc6 2. Nc3 g6
    B00	Nimzowitsch Defense: Pseudo-Spanish Variation	1. e4 Nc6 2. Bb5
    B00	Nimzowitsch Defense: Scandinavian Variation	1. e4 Nc6 2. d4 d5
    B00	Nimzowitsch Defense: Scandinavian Variation, Aachen Gambit	1. e4 Nc6 2. d4 d5 3. exd5 Nb4
    B00	Nimzowitsch Defense: Scandinavian Variation, Advance Variation	1. e4 Nc6 2. d4 d5 3. e5
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation	1. e4 Nc6 2. d4 d5 3. Nc3
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation	1. e4 Nc6 2. d4 d5 3. Nc3 dxe4
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Brandics Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 a6
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Erben Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 g6
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Heinola-Deppe Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 e5
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Nimzowitsch Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5 Ne5
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Richter Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5 Nb8 5. f3
    B00	Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Vehre Variation	1. e4 Nc6 2. d4 d5 3. Nc3 Nf6
    B00	Nimzowitsch Defense: Scandinavian Variation, Exchange Variation	1. e4 Nc6 2. d4 d5 3. exd5 Qxd5
    B00	Nimzowitsch Defense: Scandinavian Variation, Exchange Variation, Marshall Gambit	1. e4 Nc6 2. d4 d5 3. exd5 Qxd5 4. Nc3
    B00	Nimzowitsch Defense: Wheeler Gambit	1. e4 Nc6 2. b4
    B00	Nimzowitsch Defense: Williams Variation	1. e4 Nc6 2. Nf3 d6
    B00	Nimzowitsch Defense: Woodchuck Variation	1. e4 Nc6 2. d4 a6
    B00	Owen Defense	1. e4 b6
    B00	Owen Defense: Hekili-Loa Gambit	1. e4 b6 2. d4 c5 3. dxc5 Nc6
    B00	Owen Defense: Matovinsky Gambit	1. e4 b6 2. d4 Bb7 3. Bd3 f5 4. exf5 Bxg2 5. Qh5+ g6
    B00	Owen Defense: Naselwaus Gambit	1. e4 b6 2. d4 Bb7 3. Bg5
    B00	Owen Defense: Smith Gambit	1. e4 b6 2. d4 Bb7 3. Nf3
    B00	Owen Defense: Unicorn Variation	1. e4 f6 2. d4 b6 3. c4 Bb7
    B00	Owen Defense: Wind Gambit	1. e4 b6 2. d4 Bb7 3. f3 e5
    B00	Pirc Defense	1. e4 d6
    B00	Pirc Defense	1. e4 d6 2. d4
    B00	Pirc Defense	1. e4 d6 2. d4 Nf6
    B00	Pirc Defense: Roscher Gambit	1. e4 d6 2. d4 Nf6 3. Nf3
    B00	Rat Defense: Antal Defense	1. e4 d6 2. d4 Nd7
    B00	Rat Defense: Fuller Gambit	1. e4 d6 2. f4 d5 3. exd5 Nf6
    B00	Rat Defense: Harmonist	1. e4 d6 2. f4
    B00	Rat Defense: Petruccioli Attack	1. e4 d6 2. h4
    B00	Rat Defense: Spike Attack	1. e4 d6 2. g4
    B00	St. George Defense	1. e4 a6
    B00	St. George Defense: Polish Variation	1. e4 a6 2. d4 b5 3. Nf3 Bb7 4. Bd3 e6
    B00	St. George Defense: San Jorge Variation	1. e4 a6 2. d4 b5 3. Nf3 Bb7 4. Bd3 d6 5. O-O g6 6. c3 Bg7
    B00	St. George Defense: Zilbermints Gambit	1. e4 a6 2. d4 e5
    B00	Van Geet Opening: Berlin Gambit	1. e4 Nc6 2. d4 d5 3. Nc3 dxe4 4. d5
    B00	Ware Defense	1. e4 a5
    B00	Ware Defense: Snagglepuss Defense	1. e4 a5 2. d4 Nc6
    B01	Scandinavian Defense	1. e4 d5
    B01	Scandinavian Defense	1. e4 d5 2. b3
    B01	Scandinavian Defense: Anderssen Counterattack	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5
    B01	Scandinavian Defense: Anderssen Counterattack, Collijn Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. Nf3 Bg4
    B01	Scandinavian Defense: Anderssen Counterattack, Goteborg System	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. Nf3
    B01	Scandinavian Defense: Anderssen Counterattack, Orthodox Attack	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. dxe5 Nc6 6. Nf3 Bb4 7. Bd2
    B01	Scandinavian Defense: Blackburne Gambit	1. e4 d5 2. exd5 c6 3. dxc6 Nxc6
    B01	Scandinavian Defense: Blackburne-Kloosterboer Gambit	1. e4 d5 2. exd5 c6
    B01	Scandinavian Defense: Boehnke Gambit	1. e4 d5 2. exd5 e5 3. dxe6 Bxe6
    B01	Scandinavian Defense: Bronstein Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 a6
    B01	Scandinavian Defense: Classical Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5
    B01	Scandinavian Defense: Grünfeld Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5 6. Ne5 c6 7. g4
    B01	Scandinavian Defense: Gubinsky-Melts Defense	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6
    B01	Scandinavian Defense: Icelandic-Palme Gambit	1. e4 d5 2. exd5 Nf6 3. c4 e6
    B01	Scandinavian Defense: Kiel Variation	1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. c4 Nb4
    B01	Scandinavian Defense: Kloosterboer Gambit	1. e4 d5 2. exd5 c6 3. dxc6 e5
    B01	Scandinavian Defense: Kádas Gambit	1. e4 d5 2. exd5 Nf6 3. d4 c6 4. dxc6 e5
    B01	Scandinavian Defense: Lasker Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bg4 6. h3
    B01	Scandinavian Defense: Main Line	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5
    B01	Scandinavian Defense: Main Line, Leonhardt Gambit	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. b4
    B01	Scandinavian Defense: Main Line, Mieses Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6
    B01	Scandinavian Defense: Marshall Variation	1. e4 d5 2. exd5 Nf6 3. d4 Nxd5
    B01	Scandinavian Defense: Mieses-Kotroc Variation	1. e4 d5 2. exd5 Qxd5
    B01	Scandinavian Defense: Modern Variation	1. e4 d5 2. exd5 Nf6
    B01	Scandinavian Defense: Modern Variation	1. e4 d5 2. exd5 Nf6 3. d4
    B01	Scandinavian Defense: Modern Variation, Gipslis Variation	1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 Bg4
    B01	Scandinavian Defense: Modern Variation, Wing Gambit	1. e4 d5 2. exd5 Nf6 3. d4 g6 4. c4 b5
    B01	Scandinavian Defense: Panov Transfer	1. e4 d5 2. exd5 Nf6 3. c4 c6
    B01	Scandinavian Defense: Portuguese Gambit	1. e4 d5 2. exd5 Nf6 3. d4 Bg4
    B01	Scandinavian Defense: Portuguese Gambit, Banker Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. f3 Bf5 5. c4
    B01	Scandinavian Defense: Portuguese Gambit, Classical Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. Nf3
    B01	Scandinavian Defense: Portuguese Gambit, Correspondence Refutation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. f3 Bf5 5. g4
    B01	Scandinavian Defense: Portuguese Gambit, Elbow Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. Bb5+ c6
    B01	Scandinavian Defense: Portuguese Gambit, Jadoul Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. f3 Bf5 5. Bb5+ Nbd7 6. c4
    B01	Scandinavian Defense: Portuguese Gambit, Lusophobe Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. Bb5+ Nbd7 5. Be2
    B01	Scandinavian Defense: Portuguese Gambit, Melbourne Shuffle Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. f3 Bf5 5. Bb5+ Nbd7 6. Nc3
    B01	Scandinavian Defense: Portuguese Gambit, Wuss Variation	1. e4 d5 2. exd5 Nf6 3. d4 Bg4 4. Be2
    B01	Scandinavian Defense: Richter Variation	1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 g6
    B01	Scandinavian Defense: Richter Variation	1. e4 d5 2. exd5 Nf6 3. d4 g6
    B01	Scandinavian Defense: Schiller-Pytel Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 c6
    B01	Scandinavian Defense: Schiller-Pytel Variation, Modern Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Bc4 c6 6. Nge2 Bf5 7. Bf4 Qb4
    B01	Scandinavian Defense: Valencian Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8
    B01	Scandinavian Defense: Valencian Variation, Ilundain Variation	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 c6
    B01	Scandinavian Defense: Valencian Variation, Main Line	1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 Bg4
    B01	Scandinavian Defense: Zilbermints Gambit	1. e4 d5 2. b4
    B01	Van Geet Opening: Grünfeld Defense	1. e4 d5 2. Nc3 dxe4 3. Nxe4 e5
    B02	Alekhine Defense	1. e4 Nf6
    B02	Alekhine Defense: Brooklyn Variation	1. e4 Nf6 2. e5 Ng8
    B02	Alekhine Defense: Brooklyn Variation, Everglades Variation	1. e4 Nf6 2. e5 Ng8 3. d4 f5
    B02	Alekhine Defense: Buckley Attack	1. e4 Nf6 2. e5 Nd5 3. Na3
    B02	Alekhine Defense: Hunt Variation, Lasker Simul Gambit	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3
    B02	Alekhine Defense: Hunt Variation, Matsukevich Gambit	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Nc3 Nxc3 6. dxc3 d6 7. Bg5
    B02	Alekhine Defense: Hunt Variation, Mikenas Gambit	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3 d6 7. Nxd5 exd5 8. Bxd5
    B02	Alekhine Defense: Kmoch Variation	1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bb3 c5 5. d3
    B02	Alekhine Defense: Krejcik Variation	1. e4 Nf6 2. Bc4
    B02	Alekhine Defense: Krejcik Variation, Krejcik Gambit	1. e4 Nf6 2. Bc4 Nxe4 3. Bxf7+
    B02	Alekhine Defense: Maróczy Variation	1. e4 Nf6 2. d3
    B02	Alekhine Defense: Mokele Mbembe	1. e4 Nf6 2. e5 Ne4
    B02	Alekhine Defense: Mokele Mbembe, Modern Line	1. e4 Nf6 2. e5 Ne4 3. d4 f6
    B02	Alekhine Defense: Mokele Mbembe, Vavra Defense	1. e4 Nf6 2. e5 Ne4 3. d4 e6
    B02	Alekhine Defense: Normal Variation	1. e4 Nf6 2. e5 Nd5
    B02	Alekhine Defense: Scandinavian Variation	1. e4 Nf6 2. Nc3 d5
    B02	Alekhine Defense: Scandinavian Variation, Geschev Gambit	1. e4 Nf6 2. Nc3 d5 3. exd5 c6
    B02	Alekhine Defense: Scandinavian Variation, Myers Gambit	1. e4 Nf6 2. Nc3 d5 3. d3 dxe4 4. Bg5
    B02	Alekhine Defense: Spielmann Gambit	1. e4 Nf6 2. Nc3 d5 3. e5 Nfd7 4. e6
    B02	Alekhine Defense: Steiner Variation	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. b3
    B02	Alekhine Defense: Sämisch Attack	1. e4 Nf6 2. e5 Nd5 3. Nc3
    B02	Alekhine Defense: The Squirrel	1. e4 Nf6 2. e5 Nd5 3. c4 Nf4
    B02	Alekhine Defense: Two Pawns Attack	1. e4 Nf6 2. e5 Nd5 3. c4
    B02	Alekhine Defense: Two Pawns Attack, Lasker Variation	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5
    B02	Alekhine Defense: Two Pawns Attack, Mikenas Variation	1. e4 Nf6 2. e5 Nd5 3. c4 Nb6 4. c5 Nd5 5. Bc4 e6 6. Nc3 d6
    B02	Alekhine Defense: Welling Variation	1. e4 Nf6 2. e5 Nd5 3. b3
    B03	Alekhine Defense	1. e4 Nf6 2. e5 Nd5 3. d4
    B03	Alekhine Defense	1. e4 Nf6 2. e5 Nd5 3. d4 d6
    B03	Alekhine Defense	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4
    B03	Alekhine Defense: Balogh Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Bc4
    B03	Alekhine Defense: Exchange Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6
    B03	Alekhine Defense: Exchange Variation, Karpov Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6 cxd6 6. Nc3 g6 7. h3 Bg7 8. Nf3 O-O 9. Be2 Nc6 10. O-O Bf5 11. Bf4
    B03	Alekhine Defense: Exchange Variation, Voronezh Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6 cxd6 6. Nc3 g6 7. Be3 Bg7 8. Rc1 O-O 9. b3
    B03	Alekhine Defense: Four Pawns Attack	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4
    B03	Alekhine Defense: Four Pawns Attack, Cambridge Gambit	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 g5
    B03	Alekhine Defense: Four Pawns Attack, Fianchetto Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 g6
    B03	Alekhine Defense: Four Pawns Attack, Ilyin-Zhenevsky Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Nf3 Bg4 8. e6 fxe6 9. c5
    B03	Alekhine Defense: Four Pawns Attack, Korchnoi Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Bf5 7. Nc3 e6 8. Nf3 Be7 9. Be2 O-O 10. O-O f6
    B03	Alekhine Defense: Four Pawns Attack, Main Line	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Be3
    B03	Alekhine Defense: Four Pawns Attack, Tartakower Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Be3 Bf5 8. Nc3 e6 9. Nf3 Qd7 10. Be2 O-O-O 11. O-O Be7
    B03	Alekhine Defense: Four Pawns Attack, Trifunovic Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 Bf5
    B03	Alekhine Defense: Hunt Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. c5
    B03	Alekhine Defense: Modern Variation, Alekhine Gambit	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. Nf3 Bg4 6. Be2
    B03	Alekhine Defense: O'Sullivan Gambit	1. e4 Nf6 2. e5 Nd5 3. d4 b5
    B04	Alekhine Defense: Modern Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3
    B04	Alekhine Defense: Modern Variation, Alburt Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6
    B04	Alekhine Defense: Modern Variation, Keres Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 5. Bc4 Nb6 6. Bb3 Bg7 7. a4
    B04	Alekhine Defense: Modern Variation, Larsen Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 dxe5
    B04	Alekhine Defense: Modern Variation, Larsen-Haakert Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nc6
    B04	Alekhine Defense: Modern Variation, Schmid Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nb6
    B05	Alekhine Defense: Modern Variation, Alekhine Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. c4
    B05	Alekhine Defense: Modern Variation, Flohr Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 c6
    B05	Alekhine Defense: Modern Variation, Main Line	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4
    B05	Alekhine Defense: Modern Variation, Panov Variation	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. h3
    B05	Alekhine Defense: Modern Variation, Vitolins Attack	1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. c4 Nb6 6. d5
    B06	Modern Defense	1. e4 g6
    B06	Modern Defense	1. e4 g6 2. d4 Bg7
    B06	Modern Defense: Anti-Modern	1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. Bc4 d6 5. Qe2
    B06	Modern Defense: Bishop Attack	1. e4 g6 2. d4 Bg7 3. Bc4
    B06	Modern Defense: Bishop Attack, Bücker Gambit	1. e4 g6 2. d4 Bg7 3. Bc4 b5
    B06	Modern Defense: Bishop Attack, Monkey's Bum	1. e4 g6 2. Bc4 Bg7 3. Qf3 e6 4. d4 Bxd4
    B06	Modern Defense: Dunworthy Variation	1. e4 g6 2. d4 Bg7 3. c4 d5 4. exd5 c6 5. dxc6 Bxd4
    B06	Modern Defense: Fianchetto Gambit	1. e4 g6 2. d4 f5
    B06	Modern Defense: Gurgenidze Defense	1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. f4 d5 5. e5 h5
    B06	Modern Defense: Lizard Defense, Mittenberger Gambit	1. e4 g6 2. d4 Bg7 3. Nc3 d5
    B06	Modern Defense: Masur Gambit	1. e4 g6 2. d4 Nh6 3. Nc3 f5 4. Bxh6 Bxh6 5. exf5 O-O
    B06	Modern Defense: Modern Pterodactyl	1. e4 g6 2. d4 Bg7 3. Nc3 c5
    B06	Modern Defense: Mongredien Defense, with Nc3	1. e4 g6 2. d4 Bg7 3. Nc3 b6
    B06	Modern Defense: Mongredien Defense, with Nf3	1. e4 g6 2. d4 Bg7 3. Nf3 b6
    B06	Modern Defense: Norwegian Defense	1. e4 g6 2. d4 Nf6
    B06	Modern Defense: Norwegian Defense, Norwegian Gambit	1. e4 g6 2. d4 Nf6 3. e5 Nh5 4. Be2 d6
    B06	Modern Defense: Pseudo-Austrian Attack	1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. f4
    B06	Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Declined	1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nf3 d6 5. Be2 Qa5+
    B06	Modern Defense: Standard Defense	1. e4 g6 2. d4 Bg7 3. Nc3 d6
    B06	Modern Defense: Standard Line	1. e4 g6 2. d4 Bg7 3. Nc3
    B06	Modern Defense: Three Pawns Attack	1. e4 g6 2. d4 Bg7 3. f4
    B06	Modern Defense: Two Knights Variation	1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Nf3
    B06	Modern Defense: Two Knights Variation, Suttles Variation	1. e4 g6 2. d4 Bg7 3. Nc3 c6 4. Nf3 d6
    B06	Modern Defense: Two Knights Variation, Suttles Variation, Tal Gambit	1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Nf3 c6 5. Bg5 Qb6 6. Qd2 Qxb2
    B06	Modern Defense: Westermann Gambit	1. e4 g6 2. d4 Bg7 3. Bd2
    B06	Modern Defense: Wind Gambit	1. e4 g6 2. d4 Bg7 3. Bd3
    B06	Norwegian Defense	1. e4 g6 2. d4 Nf6 3. e5 Nh5 4. g4 Ng7
    B06	Pterodactyl Defense: Austrian, Austriadactylus Western	1. e4 g6 2. d4 Bg7 3. f4 c5 4. Nf3 Qa5+
    B06	Pterodactyl Defense: Austrian, Grand Prix Pterodactyl	1. e4 g6 2. Nc3 Bg7 3. f4 c5 4. Nf3 Qa5
    B06	Pterodactyl Defense: Austrian, Pteranodon	1. e4 g6 2. d4 Bg7 3. f4 c5 4. c3 Qa5
    B06	Pterodactyl Defense: Central, Anhanguera	1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nc3 d6 5. Be3 Qa5
    B06	Pterodactyl Defense: Central, Benoni Quetzalcoatlus	1. e4 g6 2. d4 Bg7 3. c4 c5 4. d5 d6 5. Nc3 Qa5
    B06	Pterodactyl Defense: Central, Quetzalcoatlus Gambit	1. e4 g6 2. d4 Bg7 3. c4 c5 4. Nc3 d6 5. dxc5 Qa5
    B06	Pterodactyl Defense: Eastern, Anhanguera	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Be3
    B06	Pterodactyl Defense: Eastern, Benoni	1. d4 g6 2. e4 Bg7 3. Nc3 c5 4. d5
    B06	Pterodactyl Defense: Eastern, Benoni Pteranodon	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. d5 Bxc3+ 5. bxc3 Qa5
    B06	Pterodactyl Defense: Eastern, Benoni Pterodactyl	1. d4 g6 2. Nc3 Bg7 3. e4 c5 4. d5 Qa5
    B06	Pterodactyl Defense: Eastern, Pteranodon	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Bxc3+ 5. bxc3 Qa5
    B06	Pterodactyl Defense: Eastern, Pterodactyl	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Qa5
    B06	Pterodactyl Defense: Eastern, Rhamphorhynchus	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5
    B06	Pterodactyl Defense: Fianchetto, King Pterodactyl	1. e4 g6 2. d4 Bg7 3. g3 c5 4. Nf3 Qa5+
    B06	Pterodactyl Defense: Fianchetto, Rhamphorhynchus	1. e4 g6 2. d4 Bg7 3. g3 c5 4. dxc5 Qa5+
    B06	Pterodactyl Defense: Sicilian, Quetzalcoatlus	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Nf3 Qa5 5. Be2 d6
    B06	Pterodactyl Defense: Sicilian, Siroccopteryx	1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. Nf3 Qa5 5. Bc4
    B06	Pterodactyl Defense: Western, Anhanguera	1. e4 g6 2. d4 Bg7 3. Nf3 c5 4. Be3 Qa5+
    B06	Pterodactyl Defense: Western, Siroccopteryx	1. e4 g6 2. Nf3 Bg7 3. d4 c5 4. Bc4 cxd4 5. Nxd4 Qa5+
    B06	Rat Defense: Accelerated Gurgenidze	1. e4 g6 2. d4 d6 3. Nc3 c6
    B07	Czech Defense	1. e4 d6 2. d4 Nf6 3. Nc3 c6
    B07	King's Pawn Game: Maróczy Defense	1. e4 d6 2. d4 e5
    B07	Lion Defense: Anti-Philidor	1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4
    B07	Lion Defense: Anti-Philidor, Lion's Cave	1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4 e5
    B07	Lion Defense: Anti-Philidor, Lion's Cave, Lion Claw Gambit	1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. f4 e5 5. Nf3 exd4 6. Qxd4 c6 7. Bc4 d5
    B07	Lion Defense: Bayonet Attack	1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. g4
    B07	Modern Defense: Geller's System	1. e4 g6 2. d4 Bg7 3. Nf3 d6 4. c3
    B07	Pirc Defense	1. e4 d6 2. d4 Nf6 3. Nc3 g6
    B07	Pirc Defense: 150 Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2
    B07	Pirc Defense: 150 Attack, Inner Doll Defense	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 Bg4
    B07	Pirc Defense: 150 Attack, Sveshnikov-Jansa Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. h3
    B07	Pirc Defense: Bayonet Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2 Bg7 5. h4
    B07	Pirc Defense: Byrne Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5
    B07	Pirc Defense: Chinese Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2 Bg7 5. g4
    B07	Pirc Defense: Kholmov System	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bc4
    B07	Pirc Defense: Sveshnikov System	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3
    B08	Pirc Defense: Classical Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3
    B08	Pirc Defense: Classical Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7
    B08	Pirc Defense: Classical Variation, Quiet System	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2
    B08	Pirc Defense: Classical Variation, Quiet System, Chigorin Line	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Nc6
    B08	Pirc Defense: Classical Variation, Quiet System, Czech Defense	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O c6
    B08	Pirc Defense: Classical Variation, Quiet System, Parma Defense	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O Bg4
    B08	Pirc Defense: Classical Variation, Schlechter Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. h3
    B09	Pirc Defense: Austrian Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4
    B09	Pirc Defense: Austrian Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O
    B09	Pirc Defense: Austrian Attack, Dragon Formation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 c5
    B09	Pirc Defense: Austrian Attack, Kurajica Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be3
    B09	Pirc Defense: Austrian Attack, Ljubojevic Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Bc4
    B09	Pirc Defense: Austrian Attack, Unzicker Attack	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5
    B09	Pirc Defense: Austrian Attack, Unzicker Attack, Bronstein Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 Nfd7 7. h4
    B09	Pirc Defense: Austrian Attack, Weiss Variation	1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3
    B10	Caro-Kann Defense	1. e4 c6
    B10	Caro-Kann Defense	1. e4 c6 2. Nc3
    B10	Caro-Kann Defense	1. e4 c6 2. Nc3 d5
    B10	Caro-Kann Defense: Accelerated Panov Attack	1. e4 c6 2. c4
    B10	Caro-Kann Defense: Accelerated Panov Attack	1. e4 c6 2. c4 d5
    B10	Caro-Kann Defense: Accelerated Panov Attack, Modern Variation	1. e4 c6 2. c4 d5 3. exd5 cxd5 4. cxd5 Nf6
    B10	Caro-Kann Defense: Accelerated Panov Attack, Open Variation	1. e4 c6 2. c4 e5
    B10	Caro-Kann Defense: Accelerated Panov Attack, Pseudo-Scandinavian	1. e4 c6 2. c4 d5 3. exd5 Qxd5
    B10	Caro-Kann Defense: Accelerated Panov Attack, Van Weersel Attack	1. e4 c6 2. c4 d5 3. cxd5 cxd5 4. Qb3
    B10	Caro-Kann Defense: Apocalypse Attack	1. e4 c6 2. Nf3 d5 3. exd5 cxd5 4. Ne5
    B10	Caro-Kann Defense: Breyer Variation	1. e4 c6 2. d3
    B10	Caro-Kann Defense: Breyer Variation, Stein Attack	1. e4 c6 2. d3 d5 3. Nd2 g6 4. Ngf3 Bg7 5. g3 e5 6. Bg2 Ne7 7. O-O O-O 8. b4
    B10	Caro-Kann Defense: Euwe Attack	1. e4 c6 2. b3
    B10	Caro-Kann Defense: Goldman Variation	1. e4 c6 2. Nc3 d5 3. Qf3
    B10	Caro-Kann Defense: Hector Gambit	1. e4 c6 2. Nc3 d5 3. Nf3 dxe4 4. Ng5
    B10	Caro-Kann Defense: Hillbilly Attack	1. e4 c6 2. Bc4
    B10	Caro-Kann Defense: Hillbilly Attack, Schaeffer Gambit	1. e4 c6 2. Bc4 d5 3. Bb3 dxe4 4. Qh5
    B10	Caro-Kann Defense: Labahn Attack	1. e4 c6 2. b4
    B10	Caro-Kann Defense: Labahn Attack, Double Gambit	1. e4 c6 2. b4 d5 3. b5
    B10	Caro-Kann Defense: Labahn Attack, Polish Variation	1. e4 c6 2. b4 e5 3. Bb2
    B10	Caro-Kann Defense: Scorpion-Horus Gambit	1. e4 c6 2. Nc3 d5 3. d3 dxe4 4. Bg5
    B10	Caro-Kann Defense: Spike Variation	1. e4 c6 2. g4
    B10	Caro-Kann Defense: Spike Variation, Scorpion-Grob Gambit	1. e4 c6 2. g4 d5 3. Nc3 dxe4 4. d3
    B10	Caro-Kann Defense: Toikkanen Gambit	1. e4 c6 2. c4 d5 3. e5
    B10	Caro-Kann Defense: Two Knights Attack	1. e4 c6 2. Nc3 d5 3. Nf3
    B11	Caro-Kann Defense: Two Knights Attack, Mindeno Variation	1. e4 c6 2. Nc3 d5 3. Nf3 Bg4
    B11	Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Exchange Line	1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bxf3
    B11	Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Retreat Line	1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 4. h3 Bh5
    B12	Caro-Kann Defense	1. e4 c6 2. d4
    B12	Caro-Kann Defense	1. e4 c6 2. d4 d5
    B12	Caro-Kann Defense: Advance Variation	1. e4 c6 2. d4 d5 3. e5
    B12	Caro-Kann Defense: Advance Variation, Bayonet Attack	1. e4 c6 2. d4 d5 3. e5 Bf5 4. g4
    B12	Caro-Kann Defense: Advance Variation, Botvinnik-Carls Defense	1. e4 c6 2. d4 d5 3. e5 c5
    B12	Caro-Kann Defense: Advance Variation, Bronstein Variation	1. e4 c6 2. d4 d5 3. e5 Bf5 4. Ne2
    B12	Caro-Kann Defense: Advance Variation, Prins Attack	1. e4 c6 2. d4 d5 3. e5 Bf5 4. b4
    B12	Caro-Kann Defense: Advance Variation, Short Variation	1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3
    B12	Caro-Kann Defense: Advance Variation, Tal Variation	1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4
    B12	Caro-Kann Defense: Advance Variation, Van der Wiel Attack	1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3
    B12	Caro-Kann Defense: Advance Variation, Van der Wiel Attack	1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 e6 5. g4 Bg6 6. Nge2 c5 7. h4
    B12	Caro-Kann Defense: Advance Variation, Van der Wiel Attack, Dreyev Defense	1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 Qb6
    B12	Caro-Kann Defense: Advance, Short Variation	1. e4 c6 2. d4 d5 3. e5 Bf5 4. c3 e6 5. Be2
    B12	Caro-Kann Defense: De Bruycker Defense	1. e4 c6 2. d4 Na6
    B12	Caro-Kann Defense: De Bruycker Defense	1. e4 c6 2. d4 Na6 3. Nc3 Nc7
    B12	Caro-Kann Defense: Edinburgh Variation	1. e4 c6 2. d4 d5 3. Nd2 Qb6
    B12	Caro-Kann Defense: Maróczy Variation	1. e4 c6 2. d4 d5 3. f3
    B12	Caro-Kann Defense: Maróczy Variation, Maróczy Gambit	1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 exd4 6. Bc4
    B12	Caro-Kann Defense: Masi Variation	1. e4 c6 2. d4 Nf6
    B12	Caro-Kann Defense: Massachusetts Defense	1. e4 c6 2. d4 f5
    B12	Caro-Kann Defense: Mieses Attack, Landau Gambit	1. e4 c6 2. d4 d5 3. Bd3 Nf6 4. e5 Nfd7 5. e6
    B12	Caro-Kann Defense: Mieses Gambit	1. e4 c6 2. d4 d5 3. Be3
    B12	Caro-Kann Defense: Modern Variation	1. e4 c6 2. d4 d5 3. Nd2
    B12	Caro-Kann Defense: Ulysses Gambit	1. e4 c6 2. d4 d5 3. Nf3 dxe4 4. Ng5
    B13	Caro-Kann Defense: Exchange Variation	1. e4 c6 2. d4 d5 3. exd5
    B13	Caro-Kann Defense: Exchange Variation, Bulla Attack	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. g4
    B13	Caro-Kann Defense: Exchange Variation, Rubinstein Variation	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6 6. Bf4
    B13	Caro-Kann Defense: Panov Attack	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4
    B13	Caro-Kann Defense: Panov Attack	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3
    B13	Caro-Kann Defense: Panov Attack, Gunderam Attack	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. c5
    B13	Caro-Kann Defense: Panov Attack, Modern Defense	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6
    B13	Caro-Kann Defense: Panov Attack, Modern Defense, Carlsbad Line	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 e6
    B13	Caro-Kann Defense: Panov Attack, Modern Defense, Czerniak Line	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 Qa5
    B13	Caro-Kann Defense: Panov Attack, Modern Defense, Mieses Line	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4
    B13	Caro-Kann Defense: Panov Attack, Modern Defense, Reifir-Spielmann Line	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 Qb6
    B13	Caro-Kann Defense: Panov-Botvinnik, Herzog Defense	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Bg5 dxc4 7. d5 Na5
    B14	Caro-Kann Defense: Panov Attack	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6
    B14	Caro-Kann Defense: Panov Attack, Fianchetto Defense	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6
    B14	Caro-Kann Defense: Panov Attack, Fianchetto Defense, Fianchetto Gambit	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6 6. cxd5 Bg7
    B14	Caro-Kann Defense: Panov Attack, Main Line	1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 e6 6. Nf3 Bb4
    B15	Caro-Kann Defense	1. e4 c6 2. d4 d5 3. Nc3
    B15	Caro-Kann Defense	1. e4 c6 2. d4 d5 3. Nc3 dxe4
    B15	Caro-Kann Defense: Alekhine Gambit	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Bd3
    B15	Caro-Kann Defense: Campomanes Attack	1. e4 c6 2. d4 d5 3. Nc3 Nf6
    B15	Caro-Kann Defense: Forgacs Variation	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4
    B15	Caro-Kann Defense: Gurgenidze Counterattack	1. e4 c6 2. d4 d5 3. Nc3 b5
    B15	Caro-Kann Defense: Gurgenidze System	1. e4 c6 2. d4 d5 3. Nc3 g6
    B15	Caro-Kann Defense: Main Line	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4
    B15	Caro-Kann Defense: Rasa-Studier Gambit	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. f3
    B15	Caro-Kann Defense: Tartakower Variation	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6
    B15	Caro-Kann Defense: von Hennig Gambit	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Bc4
    B16	Caro-Kann Defense: Bronstein-Larsen Variation	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ gxf6
    B16	Caro-Kann Defense: Finnish Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 h6
    B17	Caro-Kann Defense: Karpov Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7
    B17	Caro-Kann Defense: Karpov Variation, Modern Main Line	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5 Ngf6 6. Bd3 e6 7. N1f3 Bd6 8. Qe2 h6 9. Ne4 Nxe4 10. Qxe4
    B17	Caro-Kann Defense: Karpov Variation, Modern Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5
    B17	Caro-Kann Defense: Karpov Variation, Modern Variation, Ivanchuk Defense	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Ng5 Ndf6
    B17	Caro-Kann Defense: Karpov Variation, Modern Variation, Kasparov Attack	1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Ng3
    B17	Caro-Kann Defense: Karpov Variation, Smyslov Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6
    B17	Caro-Kann Defense: Karpov Variation, Smyslov Variation, Main Line	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6 8. Bb3
    B17	Caro-Kann Defense: Karpov Variation, Tiviakov-Fischer Attack	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Nxf6+ Nxf6
    B18	Caro-Kann Defense: Classical Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5
    B18	Caro-Kann Defense: Classical Variation, Flohr Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nh3
    B18	Caro-Kann Defense: Classical Variation, Main Line	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4
    B18	Caro-Kann Defense: Classical Variation, Maróczy Attack	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. f4
    B19	Caro-Kann Defense: Classical Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7
    B19	Caro-Kann Defense: Classical Variation, Lobron System	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7
    B19	Caro-Kann Defense: Classical Variation, Seirawan Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 Ngf6 11. Bd2 e6 12. O-O-O Bd6
    B19	Caro-Kann Defense: Classical Variation, Spassky Variation	1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5
    B20	Sicilian Defense	1. e4 c5
    B20	Sicilian Defense: Amazon Attack	1. e4 c5 2. Qg4
    B20	Sicilian Defense: Big Clamp Formation	1. e4 c5 2. d3 Nc6 3. c3 d6 4. f4
    B20	Sicilian Defense: Bowdler Attack	1. e4 c5 2. Bc4
    B20	Sicilian Defense: Brick Variation	1. e4 c5 2. Nh3
    B20	Sicilian Defense: Euwe Attack, Prins Gambit	1. e4 c5 2. b3 d5 3. Bb2
    B20	Sicilian Defense: Gloria Variation	1. e4 c5 2. c4 d6 3. Nc3 Nc6 4. g3 h5
    B20	Sicilian Defense: Grob Variation	1. e4 c5 2. g4
    B20	Sicilian Defense: Keres Variation	1. e4 c5 2. Ne2
    B20	Sicilian Defense: King David's Opening	1. e4 c5 2. Ke2
    B20	Sicilian Defense: Kronberger Variation	1. e4 c5 2. Na3
    B20	Sicilian Defense: Kronberger Variation, Nemeth Gambit	1. e4 c5 2. Na3 Nc6 3. d4 cxd4 4. Bc4
    B20	Sicilian Defense: Lasker-Dunne Attack	1. e4 c5 2. g3
    B20	Sicilian Defense: Mengarini Variation	1. e4 c5 2. a3
    B20	Sicilian Defense: Myers Attack, with a4	1. e4 c5 2. a4
    B20	Sicilian Defense: Myers Attack, with h4	1. e4 c5 2. h4
    B20	Sicilian Defense: Snyder Variation	1. e4 c5 2. b3
    B20	Sicilian Defense: Snyder Variation, Queen Fianchetto Variation	1. e4 c5 2. b3 b6
    B20	Sicilian Defense: Staunton-Cochrane Variation	1. e4 c5 2. c4
    B20	Sicilian Defense: Wing Gambit	1. e4 c5 2. b4
    B20	Sicilian Defense: Wing Gambit, Abrahams Variation	1. e4 c5 2. b4 cxb4 3. Bb2
    B20	Sicilian Defense: Wing Gambit, Carlsbad Variation	1. e4 c5 2. b4 cxb4 3. a3 bxa3
    B20	Sicilian Defense: Wing Gambit, Marienbad Variation	1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Bb2
    B20	Sicilian Defense: Wing Gambit, Marshall Variation	1. e4 c5 2. b4 cxb4 3. a3
    B20	Sicilian Defense: Wing Gambit, Nanu Gambit	1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Nf3 e5 6. c4 Qe6 7. Bd3
    B20	Sicilian Defense: Wing Gambit, Romanian Defense	1. e4 c5 2. b4 cxb4 3. a3 d5 4. exd5 Qxd5 5. Nf3 e5 6. Bb2 Nc6 7. c4 Qe6
    B20	Sicilian Defense: Wing Gambit, Santasiere Variation	1. e4 c5 2. b4 cxb4 3. c4
    B21	Bird Opening: Dutch Variation, Batavo Gambit	1. e4 c5 2. f4 d5 3. Nf3 dxe4
    B21	Sicilian Defense: Coles Sicilian Gambit	1. e4 c5 2. d4 cxd4 3. Qxd4 Nc6 4. Qd1 Nf6 5. Bc4
    B21	Sicilian Defense: Halasz Gambit	1. e4 c5 2. d4 cxd4 3. f4
    B21	Sicilian Defense: McDonnell Attack	1. e4 c5 2. f4
    B21	Sicilian Defense: McDonnell Attack, Tal Gambit	1. e4 c5 2. f4 d5 3. exd5 Nf6
    B21	Sicilian Defense: Morphy Gambit	1. e4 c5 2. d4 cxd4 3. Nf3
    B21	Sicilian Defense: Morphy Gambit, Andreaschek Gambit	1. e4 c5 2. d4 cxd4 3. Nf3 e5 4. c3
    B21	Sicilian Defense: Smith-Morra Gambit	1. e4 c5 2. d4
    B21	Sicilian Defense: Smith-Morra Gambit	1. e4 c5 2. d4 cxd4 3. c3
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Chicago Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 d6 5. Nf3 e6 6. Bc4 Nf6 7. O-O a6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Classical Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 a6 7. O-O Nf6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Fianchetto Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 g6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Finegold Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Nf3 d6 6. Bc4 a6 7. O-O Be7 8. Qe2 Nf6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Kan Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Nf3 a6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Larsen Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Qc7 7. Qe2 a6 8. O-O Bd6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Bc5
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense Deferred	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 a6 7. O-O b5 8. Bb3 Bc5
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Paulsen Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 a6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Pin Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Bb4
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Scheveningen Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 e6
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Sozin Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Bc4 e6 6. Nf3 d6 7. O-O a6 8. Qe2 b5
    B21	Sicilian Defense: Smith-Morra Gambit Accepted, Taimanov Formation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Bc4 a6 6. Nf3 Ne7
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Alapin Formation	1. e4 c5 2. d4 cxd4 3. c3 Nf6
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Center Formation	1. e4 c5 2. d4 cxd4 3. c3 e5
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Dubois Variation	1. e4 c5 2. d4 cxd4 3. c3 d3 4. c4
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Push Variation	1. e4 c5 2. d4 cxd4 3. c3 d3
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Scandinavian Formation	1. e4 c5 2. d4 cxd4 3. c3 d5
    B21	Sicilian Defense: Smith-Morra Gambit Declined, Wing Formation	1. e4 c5 2. d4 cxd4 3. c3 Qa5
    B21	Sicilian Defense: Smith-Morra Gambit, Chicago Defense	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Bc4 e6 6. Nf3 d6 7. O-O a6 8. Qe2 b5 9. Bb3 Ra7
    B21	Sicilian Defense: Smith-Morra Gambit, Danish Variation	1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nf3
    B22	Sicilian Defense: Alapin Variation	1. e4 c5 2. c3
    B22	Sicilian Defense: Alapin Variation, Barmen Defense	1. e4 c5 2. c3 d5 3. exd5 Qxd5
    B22	Sicilian Defense: Alapin Variation, Barmen Defense, Central Exchange	1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 cxd4 5. cxd4 Nc6 6. Nf3 Bg4
    B22	Sicilian Defense: Alapin Variation, Barmen Defense, Endgame Variation	1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 cxd4 5. cxd4 Nc6 6. Nf3 Bg4 7. Nc3 Bxf3 8. gxf3 Qxd4 9. Qxd4 Nxd4
    B22	Sicilian Defense: Alapin Variation, Barmen Defense, Milner-Barry Attack	1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nc6 5. Nf3 cxd4 6. cxd4 e5 7. Nc3 Bb4 8. Be2
    B22	Sicilian Defense: Alapin Variation, Barmen Defense, Modern Line	1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4
    B22	Sicilian Defense: Alapin Variation, Smith-Morra Declined	1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. d4 cxd4
    B22	Sicilian Defense: Alapin Variation, Stoltz Attack	1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3
    B22	Sicilian Defense: Alapin Variation, Stoltz Attack, Ivanchuk Line	1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Bc4 Nb6 6. Bb3 c4 7. Bc2 Qc7 8. Qe2 g5
    B22	Sicilian Defense: Heidenfeld Variation	1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. Na3
    B23	Sicilian Defense: Closed	1. e4 c5 2. Nc3
    B23	Sicilian Defense: Closed	1. e4 c5 2. Nc3 e6
    B23	Sicilian Defense: Closed	1. e4 c5 2. Nc3 e6 3. g3
    B23	Sicilian Defense: Closed, Chameleon Variation	1. e4 c5 2. Nc3 Nc6 3. Nge2
    B23	Sicilian Defense: Closed, Grob Attack	1. e4 c5 2. Nc3 Nc6 3. g4
    B23	Sicilian Defense: Closed, Korchnoi Defense	1. e4 c5 2. Nc3 e6 3. g3 d5
    B23	Sicilian Defense: Closed, Traditional	1. e4 c5 2. Nc3 Nc6
    B23	Sicilian Defense: Grand Prix Attack	1. e4 c5 2. Nc3 Nc6 3. f4
    B23	Sicilian Defense: Grand Prix Attack, Schofman Variation	1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. f5
    B24	Sicilian Defense: Closed	1. e4 c5 2. Nc3 Nc6 3. g3 g6
    B24	Sicilian Defense: Closed	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7
    B24	Sicilian Defense: Closed, Fianchetto Variation	1. e4 c5 2. Nc3 Nc6 3. g3
    B24	Sicilian Defense: Closed, Smyslov Variation	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 e6 6. Be3 Nd4 7. Nce2
    B25	Sicilian Defense: Closed	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6
    B25	Sicilian Defense: Closed	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4
    B25	Sicilian Defense: Closed, Botvinnik Defense, Edge Variation	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4 e5 7. Nh3 Nge7
    B25	Sicilian Defense: Closed, Botvinnik Defense, with Nge2	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. Nge2 e5
    B25	Sicilian Defense: Closed, Botvinnik Defense, with f4	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4 e5
    B26	Sicilian Defense: Closed	1. e4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. Be3
    B27	Modern Defense: Pterodactyl Variation	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5
    B27	Pterodactyl Defense: Sicilian, Anhanguera	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. Be3
    B27	Pterodactyl Defense: Sicilian, Benoni Gambit	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. d5
    B27	Pterodactyl Defense: Sicilian, Pteranodon	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3 Bxc3+ 6. bxc3
    B27	Pterodactyl Defense: Sicilian, Rhamphorhynchus	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3
    B27	Pterodactyl Defense: Sicilian, Unpin	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. Nc3 Qa5 5. Bd2
    B27	Pterodactyl Defense: Western, Pterodactyl	1. e4 c5 2. Nf3 g6 3. c3 Bg7 4. d4 Qa5
    B27	Pterodactyl Defense: Western, Rhamphorhynchus	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+
    B27	Sicilian Defense	1. e4 c5 2. Nf3
    B27	Sicilian Defense: Acton Extension	1. e4 c5 2. Nf3 g6 3. c4 Bh6
    B27	Sicilian Defense: Brussels Gambit	1. e4 c5 2. Nf3 f5
    B27	Sicilian Defense: Bücker Variation	1. e4 c5 2. Nf3 h6
    B27	Sicilian Defense: Double-Dutch Gambit	1. e4 c5 2. Nf3 f5 3. exf5 Nh6
    B27	Sicilian Defense: Frederico Variation	1. e4 c5 2. Nf3 g6 3. d4 f5
    B27	Sicilian Defense: Hyperaccelerated Dragon	1. e4 c5 2. Nf3 g6
    B27	Sicilian Defense: Hyperaccelerated Fianchetto	1. e4 c5 2. Nf3 g6 3. d4
    B27	Sicilian Defense: Hyperaccelerated Pterodactyl	1. e4 c5 2. Nf3 g6 3. d4 Bg7
    B27	Sicilian Defense: Hyperaccelerated Pterodactyl, Exchange Variation	1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ 5. Nc3 Bxc3+ 6. bxc3 Qxc3+
    B27	Sicilian Defense: Jalalabad Variation	1. e4 c5 2. Nf3 e5
    B27	Sicilian Defense: Katalimov Variation	1. e4 c5 2. Nf3 b6
    B27	Sicilian Defense: Mongoose Variation	1. e4 c5 2. Nf3 Qa5
    B27	Sicilian Defense: Polish Gambit	1. e4 c5 2. Nf3 b5
    B27	Sicilian Defense: Quinteros Variation	1. e4 c5 2. Nf3 Qc7
    B28	Sicilian Defense: O'Kelly Variation	1. e4 c5 2. Nf3 a6
    B28	Sicilian Defense: O'Kelly Variation, Aronin System	1. e4 c5 2. Nf3 a6 3. Be2
    B28	Sicilian Defense: O'Kelly Variation, Kieseritzky System	1. e4 c5 2. Nf3 a6 3. b3
    B28	Sicilian Defense: O'Kelly Variation, Maróczy Bind	1. e4 c5 2. Nf3 a6 3. c4
    B28	Sicilian Defense: O'Kelly Variation, Maróczy Bind, Paulsen Line	1. e4 c5 2. Nf3 a6 3. c4 e6
    B28	Sicilian Defense: O'Kelly Variation, Maróczy Bind, Robatsch Line	1. e4 c5 2. Nf3 a6 3. c4 d6
    B28	Sicilian Defense: O'Kelly Variation, Normal System	1. e4 c5 2. Nf3 a6 3. d4
    B28	Sicilian Defense: O'Kelly Variation, Normal System, Cortlever Gambit	1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Bc4
    B28	Sicilian Defense: O'Kelly Variation, Normal System, Smith-Morra Line	1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. c3
    B28	Sicilian Defense: O'Kelly Variation, Normal System, Taimanov Line	1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Nxd4 e5
    B28	Sicilian Defense: O'Kelly Variation, Normal System, Zagorovsky Line	1. e4 c5 2. Nf3 a6 3. d4 cxd4 4. Qxd4
    B28	Sicilian Defense: O'Kelly Variation, Quiet System	1. e4 c5 2. Nf3 a6 3. d3
    B28	Sicilian Defense: O'Kelly Variation, Réti System	1. e4 c5 2. Nf3 a6 3. g3
    B28	Sicilian Defense: O'Kelly Variation, Venice System	1. e4 c5 2. Nf3 a6 3. c3
    B28	Sicilian Defense: O'Kelly Variation, Venice System, Barcza Line	1. e4 c5 2. Nf3 a6 3. c3 Nf6
    B28	Sicilian Defense: O'Kelly Variation, Venice System, Gambit Line	1. e4 c5 2. Nf3 a6 3. c3 d5 4. exd5 Nf6
    B28	Sicilian Defense: O'Kelly Variation, Venice System, Ljubojevic Line	1. e4 c5 2. Nf3 a6 3. c3 b5
    B28	Sicilian Defense: O'Kelly Variation, Venice System, Steiner Line	1. e4 c5 2. Nf3 a6 3. c3 d6
    B28	Sicilian Defense: O'Kelly Variation, Wing Gambit	1. e4 c5 2. Nf3 a6 3. b4
    B28	Sicilian Defense: O'Kelly Variation, Yerevan System	1. e4 c5 2. Nf3 a6 3. Nc3
    B29	Sicilian Defense: Nimzowitsch Variation	1. e4 c5 2. Nf3 Nf6
    B29	Sicilian Defense: Nimzowitsch Variation, Advance Variation	1. e4 c5 2. Nf3 Nf6 3. e5
    B29	Sicilian Defense: Nimzowitsch Variation, Closed Variation	1. e4 c5 2. Nf3 Nf6 3. Nc3
    B29	Sicilian Defense: Nimzowitsch Variation, Exchange Variation	1. e4 c5 2. Nf3 Nf6 3. e5 Nd5 4. Nc3 Nxc3
    B29	Sicilian Defense: Nimzowitsch Variation, Main Line	1. e4 c5 2. Nf3 Nf6 3. e5 Nd5 4. Nc3 e6 5. Nxd5 exd5 6. d4 Nc6
    B30	Sicilian Defense: Closed, Anti-Sveshnikov Variation, Kharlov-Kramnik Line	1. e4 c5 2. Nf3 Nc6 3. Nc3 e5 4. Bc4 Be7 5. d3 d6 6. Nd2 Bg5
    B30	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack	1. e4 c5 2. Nf3 Nc6 3. Bb5
    B30	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, San Francisco Gambit	1. e4 c5 2. Nf3 Nc6 3. Bb5 Na5 4. b4
    B30	Sicilian Defense: Old Sicilian	1. e4 c5 2. Nf3 Nc6
    B30	Sicilian Defense: Portsmouth Gambit	1. e4 c5 2. Nf3 Nc6 3. b4
    B30	Sicilian Defense: Rossolimo Variation, Brooklyn Retreat Defense	1. e4 c5 2. Nf3 Nc6 3. Bb5 Nb8
    B31	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation	1. e4 c5 2. Nf3 Nc6 3. Bb5 g6
    B31	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Gufeld Gambit	1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 e5 6. d4
    B31	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Lutikov Gambit	1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 Nf6 6. d4
    B31	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Totsky Attack	1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. c3 Nf6 6. Qa4
    B31	Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Gurgenidze Variation	1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. O-O Bg7 5. Re1 e5 6. b4
    B32	Sicilian Defense: Accelerated Dragon	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6
    B32	Sicilian Defense: Flohr Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qc7
    B32	Sicilian Defense: Franco-Sicilian Variation	1. e4 c5 2. Nf3 Nc6 3. d4 e6
    B32	Sicilian Defense: Godiva Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qb6
    B32	Sicilian Defense: Kalashnikov Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5 5. Nb5 d6
    B32	Sicilian Defense: Löwenthal Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5
    B32	Sicilian Defense: Nimzo-American Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 d5
    B32	Sicilian Defense: O'Kelly Variation, Maróczy Bind, Geller Line	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 a6 5. c4 e5
    B32	Sicilian Defense: Open	1. e4 c5 2. Nf3 Nc6 3. d4
    B32	Sicilian Defense: Open	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4
    B32	Sicilian Defense: Open	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4
    B33	Sicilian Defense: Four Knights Variation, Cobra Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e6 6. Ndb5 Bc5
    B33	Sicilian Defense: Lasker-Pelikan Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5
    B33	Sicilian Defense: Lasker-Pelikan Variation, Bird Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 Be6
    B33	Sicilian Defense: Lasker-Pelikan Variation, Exchange Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nxc6
    B33	Sicilian Defense: Lasker-Pelikan Variation, Retreat Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nf3
    B33	Sicilian Defense: Lasker-Pelikan Variation, Schlechter Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Nb3
    B33	Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5
    B33	Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5
    B33	Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Chelyabinsk Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5
    B33	Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Novosibirsk Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 Bg7
    B33	Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Peresypkin's Sacrifice	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5 11. Bxb5
    B33	Sicilian Defense: Open	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6
    B34	Sicilian Defense: Accelerated Dragon, Exchange Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nxc6
    B34	Sicilian Defense: Accelerated Dragon, Modern Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3
    B35	Sicilian Defense: Accelerated Dragon, Modern Bc4 Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4
    B35	Sicilian Defense: Dragon Variation, Modern Bc4 Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4 d6
    B36	Sicilian Defense: Accelerated Dragon, Maróczy Bind	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4
    B36	Sicilian Defense: Accelerated Dragon, Maróczy Bind, Gurgenidze Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Nf6 6. Nc3 Nxd4 7. Qxd4 d6
    B37	Sicilian Defense: Accelerated Dragon, Maróczy Bind	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7
    B37	Sicilian Defense: Accelerated Dragon, Simagin Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Nc2 d6 7. Be2 Nh6
    B38	Sicilian Defense: Accelerated Dragon, Maróczy Bind	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Be3
    B39	Sicilian Defense: Accelerated Dragon, Maróczy Bind, Breyer Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 6. Be3 Nf6 7. Nc3 Ng4
    B40	Sicilian Defense: Alapin Variation, Sherzer Variation	1. e4 c5 2. Nf3 e6 3. c3 Nf6 4. e5 Nd5 5. d4 Nc6
    B40	Sicilian Defense: Delayed Alapin Variation	1. e4 c5 2. Nf3 e6 3. c3
    B40	Sicilian Defense: Drazic Variation	1. e4 c5 2. Nf3 e6 3. d4 a6
    B40	Sicilian Defense: Four Knights Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6
    B40	Sicilian Defense: Four Knights Variation, Exchange Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Nxc6
    B40	Sicilian Defense: French Variation	1. e4 c5 2. Nf3 e6
    B40	Sicilian Defense: French Variation, Normal	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6
    B40	Sicilian Defense: French Variation, Open	1. e4 c5 2. Nf3 e6 3. d4 cxd4
    B40	Sicilian Defense: French Variation, Westerinen Attack	1. e4 c5 2. Nf3 e6 3. b3
    B40	Sicilian Defense: Gaw-Paw Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Qb6
    B40	Sicilian Defense: Kan Variation, Wing Attack, Fianchetto Variation	1. e4 c5 2. Nf3 e6 3. Nc3 a6 4. g3 b5 5. d4 cxd4 6. Nxd4
    B40	Sicilian Defense: Kramnik Variation	1. e4 c5 2. Nf3 e6 3. c4
    B40	Sicilian Defense: Kveinis Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Qb6
    B40	Sicilian Defense: Marshall Counterattack	1. e4 c5 2. Nf3 e6 3. d4 d5
    B40	Sicilian Defense: Paulsen-Basman Defense	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Bc5
    B40	Sicilian Defense: Pin Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4
    B40	Sicilian Defense: Pin Variation, Jaffe Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4 6. Bd3 e5
    B40	Sicilian Defense: Pin Variation, Koch Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bb4 6. e5
    B40	Sicilian Defense: Smith-Morra Gambit Deferred	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. c3
    B40	Sicilian Defense: Wing Gambit Deferred	1. e4 c5 2. Nf3 e6 3. b4
    B41	Sicilian Defense: Kan Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6
    B41	Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Bb4 7. Bd3 Nc6
    B41	Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 6. Nc3 Bb4 7. Bd3 Nc6 8. Bc2
    B41	Sicilian Defense: Kan Variation, Maróczy Bind, Hedgehog Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 g6
    B41	Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4
    B42	Sicilian Defense: Kan Variation, Gipslis Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nf6 6. O-O d6 7. c4 g6
    B42	Sicilian Defense: Kan Variation, Modern Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3
    B42	Sicilian Defense: Kan Variation, Polugaevsky Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Bc5
    B42	Sicilian Defense: Kan Variation, Swiss Cheese Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 g6
    B43	Sicilian Defense: Kan Variation, Knight Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3
    B43	Sicilian Defense: Kan Variation, Wing Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5
    B43	Sicilian Defense: Kan Variation, Wing Attack, Christiansen's Dream	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5 6. Bd3 Qb6 7. Be3 Bc5 8. Qg4
    B43	Sicilian Defense: Kan Variation, Wing Attack, Spraggett Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Nc3 b5 6. Bd3 Qb6 7. Nf3
    B44	Sicilian Defense: Taimanov Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6
    B44	Sicilian Defense: Taimanov Variation, Gary Gambit	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5
    B44	Sicilian Defense: Taimanov Variation, Modern Line	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 Be7 9. Be2 O-O 10. O-O b6
    B44	Sicilian Defense: Taimanov Variation, Szén Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5
    B45	Sicilian Defense: Taimanov Variation, American Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Nf6 6. Ndb5 Bb4 7. Nd6+
    B45	Sicilian Defense: Taimanov Variation, Normal Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3
    B46	Sicilian Defense: Taimanov Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 a6
    B47	Sicilian Defense: Taimanov Variation, Bastrikov Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7
    B47	Sicilian Defense: Taimanov Variation, Bastrikov Variation, Ponomariov Gambit	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Ndb5 Qb8 7. Be3 a6 8. Bb6
    B48	Sicilian Defense: Taimanov Variation, Bastrikov Variation, English Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3
    B49	Sicilian Defense: Taimanov Variation, Bastrikov Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be3 a6 7. Be2
    B50	Sicilian Defense	1. e4 c5 2. Nf3 d6 3. d4
    B50	Sicilian Defense	1. e4 c5 2. Nf3 d6 3. d4 cxd4
    B50	Sicilian Defense: Delayed Alapin	1. e4 c5 2. Nf3 d6 3. c3
    B50	Sicilian Defense: Delayed Alapin, Basman-Palatnik Double Gambit	1. e4 c5 2. Nf3 d6 3. c3 Nf6 4. Be2 Nc6 5. d4 cxd4 6. cxd4 Nxe4 7. d5 Qa5+ 8. Nc3 Nxc3 9. bxc3
    B50	Sicilian Defense: Delayed Alapin, Basman-Palatnik Gambit	1. e4 c5 2. Nf3 d6 3. c3 Nf6 4. Be2 Nc6 5. d4 cxd4 6. cxd4 Nxe4
    B50	Sicilian Defense: Kopec System	1. e4 c5 2. Nf3 d6 3. Bd3
    B50	Sicilian Defense: Kotov Gambit	1. e4 c5 2. Nf3 d6 3. g3 b5
    B50	Sicilian Defense: Modern Variations	1. e4 c5 2. Nf3 d6
    B50	Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order	1. e4 c5 2. Nf3 d6 3. d4 Nf6
    B50	Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order Accepted	1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. dxc5 Nxe4
    B50	Sicilian Defense: Modern Variations, Tartakower	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. c3
    B50	Sicilian Defense: Wing Gambit, Deferred Variation	1. e4 c5 2. Nf3 d6 3. b4
    B51	Sicilian Defense: Moscow Variation	1. e4 c5 2. Nf3 d6 3. Bb5+
    B51	Sicilian Defense: Moscow Variation, Dorfman Gambit	1. e4 c5 2. Nf3 d6 3. Bb5+ Nc6 4. O-O Bd7 5. Qe2 g6 6. e5
    B51	Sicilian Defense: Moscow Variation, Moscow Gambit	1. e4 c5 2. Nf3 d6 3. Bb5+ Nc6 4. O-O Bd7 5. c3 Nf6 6. Re1 a6 7. Bxc6 Bxc6 8. d4 Bxe4 9. Bg5
    B52	Sicilian Defense: Moscow Variation, Haag Gambit	1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. O-O Nc6 6. c3 Nf6 7. d4
    B52	Sicilian Defense: Moscow Variation, Main Line	1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7
    B52	Sicilian Defense: Moscow Variation, Sokolsky Variation	1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4
    B53	Sicilian Defense: Chekhover Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4
    B53	Sicilian Defense: Chekhover Variation, Zaitsev Defense	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 Nc6 5. Bb5 Qd7
    B54	Sicilian Defense: Dragon Variation, Accelerated Dragon	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 g6
    B54	Sicilian Defense: Modern Variations, Ginsberg Gambit	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Bc4
    B54	Sicilian Defense: Modern Variations, Main Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6
    B54	Sicilian Defense: Prins Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. f3
    B55	Sicilian Defense: Prins Variation, Venice Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. f3 e5 6. Bb5+
    B56	Sicilian Defense: Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6
    B56	Sicilian Defense: Classical Variation, Fianchetto Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. g3
    B56	Sicilian Defense: Kupreichik Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bd7
    B56	Sicilian Defense: Spielmann Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Nde2
    B56	Sicilian Defense: Venice Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Bb5+
    B56	Sicilian Defense: Yates Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bd3
    B57	Sicilian Defense: Classical Variation, Anti-Sozin Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 Qb6
    B57	Sicilian Defense: Classical Variation, Sozin Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bc4
    B57	Sicilian Defense: Magnus Smith Trap	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 g6 7. Nxc6 bxc6 8. e5
    B58	Sicilian Defense: Boleslavsky Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2 e5
    B58	Sicilian Defense: Boleslavsky Variation, Louma Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 e5 7. Nxc6
    B58	Sicilian Defense: Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2
    B58	Sicilian Defense: Classical Variation, Dragon Transfer	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Be2 Nxd4 7. Qxd4 g6
    B59	Sicilian Defense: Boleslavsky Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 e5 7. Nb3
    B60	Sicilian Defense: Richter-Rauzer Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5
    B60	Sicilian Defense: Richter-Rauzer Variation, Dragon Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 g6
    B60	Sicilian Defense: Richter-Rauzer Variation, Modern Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 Bd7
    B61	Sicilian Defense: Richter-Rauzer Variation, Modern Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 Bd7 7. Qd2
    B62	Sicilian Defense: Richter-Rauzer Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6
    B62	Sicilian Defense: Richter-Rauzer Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd3
    B62	Sicilian Defense: Richter-Rauzer Variation, Exchange Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Nxc6
    B62	Sicilian Defense: Richter-Rauzer Variation, Podebrady Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Nb3
    B62	Sicilian Defense: Richter-Rauzer Variation, Vitolins Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Bb5
    B63	Sicilian Defense: Richter-Rauzer Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7
    B63	Sicilian Defense: Richter-Rauzer Variation, Classical Variation, Kantscher Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O Nxd4 9. Qxd4 a6 10. f4 b5
    B63	Sicilian Defense: Richter-Rauzer Variation, Ivanov Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Qb6
    B63	Sicilian Defense: Richter-Rauzer Variation, Traditional Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2
    B64	Sicilian Defense: Richter-Rauzer Variation, Classical Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 e5
    B64	Sicilian Defense: Richter-Rauzer Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4
    B65	Sicilian Defense: Richter-Rauzer Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 Nxd4 10. Qxd4
    B65	Sicilian Defense: Richter-Rauzer Variation, Rauzer Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 Be7 8. O-O-O O-O 9. f4 Nxd4
    B66	Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Early Deviations	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bg5 e6 7. Qd2 a6
    B67	Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7
    B68	Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7
    B69	Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Nyezhmetdinov Attack	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6 7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7 10. Nf3 b5 11. Bxf6
    B70	Sicilian Defense: Dragon Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6
    B70	Sicilian Defense: Dragon Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2
    B70	Sicilian Defense: Dragon Variation, Fianchetto Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. g3
    B71	Sicilian Defense: Dragon Variation, Levenfish Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4
    B71	Sicilian Defense: Dragon Variation, Levenfish Variation, Main Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 Nbd7
    B72	Sicilian Defense: Dragon Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3
    B72	Sicilian Defense: Dragon Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2
    B72	Sicilian Defense: Dragon Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2 Nc6
    B72	Sicilian Defense: Dragon Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2 Nc6 8. Nb3
    B72	Sicilian Defense: Dragon Variation, Classical Variation, Amsterdam Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 g6 7. Be3 Bg7 8. Qd2
    B72	Sicilian Defense: Dragon Variation, Classical Variation, Grigoriev Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 g6 7. Be3 Bg7 8. Qd2 O-O 9. O-O-O
    B73	Sicilian Defense: Dragon Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O Nc6 8. Be3
    B73	Sicilian Defense: Dragon Variation, Classical Variation, Battery Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Qd2
    B73	Sicilian Defense: Dragon Variation, Classical Variation, Zollner Gambit	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Be3 Bg7 6. Be2 Nf6 7. Nc3 O-O 8. O-O d6 9. f4 Qb6 10. e5
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Alekhine Line	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Be2 O-O 8. O-O d6 9. Nb3 a5
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Bernard Defense	1. e4 c5 2. Nf3 g6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Na5 11. f5 Bc4 12. Bd3 Bxd3 13. cxd3 d5
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Maróczy Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Na5
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Normal Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Spielmann Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Be2 O-O 8. Nb3 d6 9. O-O Be6 10. f4 Na5 11. f5 Bc4 12. Bd3
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Stockholm Attack	1. e4 c5 2. Nc3 d6 3. f4 Nc6 4. Nf3 g6 5. d4 cxd4 6. Nxd4 Bg7 7. Be3 Nf6 8. Be2 O-O 9. Nb3 Be6 10. O-O Na5 11. f5 Bc4 12. Nxa5 Bxe2 13. Qxe2 Qxa5 14. g4
    B74	Sicilian Defense: Dragon Variation, Classical Variation, Tartakower Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Qc8
    B75	Sicilian Defense: Dragon Variation, Yugoslav Attack, Belezky Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6
    B75	Sicilian Defense: Dragon Variation, Yugoslav Attack, Early Deviations	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3
    B76	Sicilian Defense: Dragon Variation, Yugoslav Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O
    B76	Sicilian Defense: Dragon Variation, Yugoslav Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6
    B76	Sicilian Defense: Dragon Variation, Yugoslav Attack, Modern Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. O-O-O
    B76	Sicilian Defense: Dragon Variation, Yugoslav Attack, Panov Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. g4
    B77	Sicilian Defense: Dragon Variation, Yugoslav Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7
    B77	Sicilian Defense: Dragon Variation, Yugoslav Attack, Byrne Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 a5
    B77	Sicilian Defense: Dragon Variation, Yugoslav Attack, Czerniak Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 Nxd4 10. Bxd4 Be6
    B77	Sicilian Defense: Dragon Variation, Yugoslav Attack, Main Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4
    B77	Sicilian Defense: Dragon Variation, Yugoslav Attack, Sosonko Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 Nd7
    B78	Sicilian Defense: Dragon Variation, Yugoslav Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O
    B78	Sicilian Defense: Dragon Variation, Yugoslav Attack, Old Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8
    B79	Sicilian Defense: Dragon Variation, Yugoslav Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. h4 Qa5 11. O-O-O Rfc8 12. Bb3
    B79	Sicilian Defense: Dragon Variation, Yugoslav Attack, Soltis Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Qa5 11. h4 Rfc8 12. Bb3 h5
    B80	Sicilian Defense: Scheveningen Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6
    B80	Sicilian Defense: Scheveningen Variation, English Attack, with Qd2	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. Qd2
    B80	Sicilian Defense: Scheveningen Variation, Fianchetto Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g3
    B80	Sicilian Defense: Scheveningen Variation, Vitolins Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bb5+
    B81	Sicilian Defense: Scheveningen Variation, Keres Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4
    B82	Sicilian Defense: Scheveningen Variation, Matanovic Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. f4
    B82	Sicilian Defense: Scheveningen Variation, Tal Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. f4 Nc6 7. Be3 Be7 8. Qf3
    B83	Sicilian Defense: Scheveningen Variation, Classical Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2
    B83	Sicilian Defense: Scheveningen Variation, Modern Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 d6 6. Be2 Nf6
    B83	Sicilian Defense: Scheveningen Variation, Modern Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Be7 7. O-O O-O 8. f4 Nc6 9. Be3
    B83	Sicilian Defense: Scheveningen Variation, Modern Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Be2 Be7 7. O-O O-O 8. f4 Nc6 9. Be3 Bd7 10. Nb3
    B84	Sicilian Defense: Najdorf Variation, Scheveningen Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6 7. O-O Nbd7
    B84	Sicilian Defense: Scheveningen Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6
    B84	Sicilian Defense: Scheveningen Variation, Classical Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e6 7. O-O Qc7
    B85	Sicilian Defense: Scheveningen Variation, Classical Main Line	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Be3 Be7 9. f4 d6 10. Qe1 O-O
    B85	Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4 e6 7. Be2 Qc7 8. O-O Nc6
    B85	Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Be3 d6 9. f4
    B85	Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 Qc7 6. Be2 a6 7. O-O Nf6 8. Kh1 Be7 9. f4 d6 10. a4
    B86	Sicilian Defense: Sozin Attack	1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4
    B87	Sicilian Defense: Sozin Attack, Flank Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 7. Bb3 b5
    B88	Sicilian Defense: Sozin Attack, Fischer Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Bb3 Be7 8. Be3 O-O 9. f4
    B88	Sicilian Defense: Sozin Attack, Leonhardt Variation	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6
    B89	Sicilian Defense: Sozin Attack, Main Line	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Be3
    B89	Sicilian Defense: Sozin Attack, Main Line, Sherbakov Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 6. Bc4 e6 7. Be3 Be7 8. Bb3 O-O 9. O-O Na5 10. f4 b6
    B89	Sicilian Defense: Velimirovic Attack	1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bc4 e6 7. Be3 Be7 8. Qe2
    B90	Sicilian Defense: Najdorf Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
    B90	Sicilian Defense: Najdorf Variation, Adams Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3
    B90	Sicilian Defense: Najdorf Variation, Dekker Gambit	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g4
    B90	Sicilian Defense: Najdorf Variation, English Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3
    B90	Sicilian Defense: Najdorf Variation, English Attack, Anti-English	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 Ng4
    B90	Sicilian Defense: Najdorf Variation, Freak Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Rg1
    B90	Sicilian Defense: Najdorf Variation, Lipnitsky Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4
    B90	Sicilian Defense: Scheveningen Variation, Delayed Keres Attack	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4
    B90	Sicilian Defense: Scheveningen Variation, Delayed Keres Attack, Perenyi Gambit	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. g4 e5 8. Nf5 g6 9. g5
    B90	Sicilian Defense: Scheveningen Variation, English Attack, with f3	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. f3
    B91	Sicilian Defense: Najdorf Variation, Zagreb Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. g3
    B92	Sicilian Defense: Najdorf Variation, Opocensky Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2
    B92	Sicilian Defense: Najdorf Variation, Opocensky Variation, Modern Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be7 8. O-O Be6
    B92	Sicilian Defense: Najdorf Variation, Opocensky Variation, Traditional Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be7 8. O-O O-O
    B93	Sicilian Defense: Najdorf Variation, Amsterdam Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f4
    B94	Sicilian Defense: Najdorf Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5
    B94	Sicilian Defense: Najdorf Variation, Ivkov Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 Nbd7 7. Bc4 Qa5 8. Qd2 e6 9. O-O-O b5 10. Bb3 Bb7 11. Rhe1 Nc5 12. e5
    B95	Sicilian Defense: Najdorf Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6
    B96	Sicilian Defense: Najdorf Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4
    B96	Sicilian Defense: Najdorf Variation, Neo-Classical Defense	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Nc6
    B96	Sicilian Defense: Najdorf Variation, Polugaevsky Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 b5
    B96	Sicilian Defense: Najdorf Variation, Polugaevsky Variation, Simagin Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 b5 8. e5 dxe5 9. fxe5 Qc7 10. Qe2
    B97	Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Qd2 Qxb2 9. Rb1 Qa3
    B97	Sicilian Defense: Najdorf Variation, Poisoned Pawn Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6
    B98	Sicilian Defense: Najdorf Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7
    B98	Sicilian Defense: Najdorf Variation, Browne Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 h6 9. Bh4 Qc7
    B98	Sicilian Defense: Najdorf Variation, Goteborg Variation	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 h6 9. Bh4 g5
    B98	Sicilian Defense: Najdorf Variation, Traditional Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7
    B99	Sicilian Defense: Najdorf Variation, Main Line	1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7
    C00	French Defense	1. e4 e6
    C00	French Defense	1. e4 e6 2. d4 d5
    C00	French Defense: Alapin Gambit	1. e4 e6 2. d4 d5 3. Be3
    C00	French Defense: Baeuerle Gambit	1. e4 e6 2. d4 b5
    C00	French Defense: Banzai-Leong Gambit	1. e4 e6 2. b4
    C00	French Defense: Banzai-Leong Gambit, Pinova Gambit	1. e4 e6 2. b4 Bxb4 3. e5
    C00	French Defense: Bird Invitation	1. e4 e6 2. Bb5
    C00	French Defense: Carlson Gambit	1. e4 e6 2. d4 d5 3. Nf3 dxe4 4. Ne5
    C00	French Defense: Chigorin Variation	1. e4 e6 2. Qe2
    C00	French Defense: Diemer-Duhm Gambit	1. e4 e6 2. d4 d5 3. c4
    C00	French Defense: Diemer-Duhm Gambit Accepted	1. e4 e6 2. d4 d5 3. c4 dxe4
    C00	French Defense: Franco-Hiva Gambit	1. e4 e6 2. d4 f5
    C00	French Defense: Franco-Hiva Gambit Accepted	1. e4 e6 2. d4 f5 3. exf5
    C00	French Defense: Franco-Sicilian Defense	1. e4 e6 2. d4 c5
    C00	French Defense: Hoffmann Gambit	1. e4 e6 2. d4 d5 3. Qe2 e5 4. f4 exf4
    C00	French Defense: Horwitz Attack	1. e4 e6 2. b3
    C00	French Defense: Horwitz Attack, Papa-Ticulat Gambit	1. e4 e6 2. b3 d5 3. Bb2
    C00	French Defense: King's Indian Attack	1. e4 e6 2. d3
    C00	French Defense: King's Indian Attack, Franco-Hiva Gambit	1. e4 e6 2. d3 f5
    C00	French Defense: Knight Variation	1. e4 e6 2. Nf3
    C00	French Defense: Knight Variation, Franco-Hiva Gambit	1. e4 e6 2. Nf3 f5
    C00	French Defense: La Bourdonnais Variation	1. e4 e6 2. f4
    C00	French Defense: La Bourdonnais Variation, Reuter Gambit	1. e4 e6 2. f4 d5 3. Nf3 dxe4
    C00	French Defense: Mediterranean Defense	1. e4 e6 2. d4 Nf6
    C00	French Defense: Morphy Gambit	1. e4 e6 2. d4 d5 3. Nh3
    C00	French Defense: Normal Variation	1. e4 e6 2. d4
    C00	French Defense: Orthoschnapp Gambit	1. e4 e6 2. c4 d5 3. cxd5 exd5 4. Qb3
    C00	French Defense: Pelikan Variation	1. e4 e6 2. Nc3 d5 3. f4
    C00	French Defense: Perseus Gambit	1. e4 e6 2. d4 d5 3. Nf3
    C00	French Defense: Queen's Knight	1. e4 e6 2. Nc3
    C00	French Defense: Reversed Philidor Formation	1. e4 e6 2. d3 d5 3. Nd2 Nf6 4. Ngf3 Nc6 5. Be2
    C00	French Defense: Réti-Spielmann Attack	1. e4 e6 2. g3
    C00	French Defense: Schlechter Variation	1. e4 e6 2. d4 d5 3. Bd3
    C00	French Defense: St. George Defense	1. e4 e6 2. d4 a6
    C00	French Defense: St. George Defense, Sanky-George Gambit	1. e4 e6 2. d4 a6 3. c4 b5
    C00	French Defense: St. George Defense, St. George Gambit	1. e4 e6 2. d4 a6 3. c4 b5 4. cxb5 axb5
    C00	French Defense: St. George Defense, Three Pawn Attack	1. e4 e6 2. d4 a6 3. c4
    C00	French Defense: St. George Defense, Traditional Line	1. e4 e6 2. d4 a6 3. Nf3 b5 4. Bd3 c5 5. c3 Bb7 6. O-O Nf6
    C00	French Defense: Steiner Variation	1. e4 e6 2. c4
    C00	French Defense: Steinitz Attack	1. e4 e6 2. e5
    C00	French Defense: Two Knights Variation	1. e4 e6 2. Nf3 d5 3. Nc3
    C00	French Defense: Wing Gambit	1. e4 e6 2. Nf3 d5 3. e5 c5 4. b4
    C00	Rat Defense: Small Center Defense	1. d4 e6 2. e4 d6
    C01	French Defense: Exchange Variation	1. e4 e6 2. d4 d5 3. exd5
    C01	French Defense: Exchange Variation, Bogoljubov Variation	1. e4 e6 2. d4 d5 3. exd5 exd5 4. Nc3 Nf6 5. Bg5 Nc6
    C01	French Defense: Exchange Variation, Monte Carlo Variation	1. e4 e6 2. d4 d5 3. exd5 exd5 4. c4
    C01	French Defense: Exchange Variation, Svenonius Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. exd5 exd5 5. Bg5
    C02	French Defense: Advance Variation	1. e4 e6 2. d4 d5 3. e5
    C02	French Defense: Advance Variation	1. e4 e6 2. d4 d5 3. e5 c5
    C02	French Defense: Advance Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. c3
    C02	French Defense: Advance Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6
    C02	French Defense: Advance Variation, Euwe Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Bd7
    C02	French Defense: Advance Variation, Extended Bishop Swap	1. e4 e6 2. d4 d5 3. e5 Bd7
    C02	French Defense: Advance Variation, Frenkel Gambit	1. e4 e6 2. d4 d5 3. e5 c5 4. b4
    C02	French Defense: Advance Variation, Lputian Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 Nh6
    C02	French Defense: Advance Variation, Main Line	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3
    C02	French Defense: Advance Variation, Milner-Barry Gambit	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Bd3
    C02	French Defense: Advance Variation, Nimzowitsch Attack	1. e4 e6 2. d4 d5 3. e5 c5 4. Qg4
    C02	French Defense: Advance Variation, Nimzowitsch Gambit	1. e4 e6 2. d4 d5 3. e5 c5 4. Qg4 cxd4 5. Nf3
    C02	French Defense: Advance Variation, Nimzowitsch System	1. e4 e6 2. d4 d5 3. e5 c5 4. Nf3
    C02	French Defense: Advance Variation, Paulsen Attack	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3
    C02	French Defense: Advance Variation, Ruisdonk Gambit	1. e4 e6 2. d4 d5 3. e5 c5 4. Nf3 cxd4 5. Bd3
    C02	French Defense: Advance Variation, Steinitz Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. dxc5
    C02	French Defense: Advance Variation, Wade Variation	1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Qb6 5. Nf3 Bd7
    C03	French Defense: Guimard Variation, Thunderbunny Variation	1. e4 e6 2. d4 d5 3. Nd2 Nc6 4. c3 dxe4 5. Nxe4 e5
    C03	French Defense: Tarrasch Variation	1. e4 e6 2. d4 d5 3. Nd2
    C03	French Defense: Tarrasch Variation, Guimard Defense	1. e4 e6 2. d4 d5 3. Nd2 Nc6
    C03	French Defense: Tarrasch Variation, Haberditz Variation	1. e4 e6 2. d4 d5 3. Nd2 f5
    C03	French Defense: Tarrasch Variation, Modern System	1. e4 e6 2. d4 d5 3. Nd2 a6
    C03	French Defense: Tarrasch Variation, Morozevich Variation	1. e4 e6 2. d4 d5 3. Nd2 Be7
    C04	French Defense: Tarrasch Variation, Guimard Defense, Main Line	1. e4 e6 2. d4 d5 3. Nd2 Nc6 4. Ngf3 Nf6
    C05	French Defense: Tarrasch Variation, Botvinnik Variation	1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 b6
    C05	French Defense: Tarrasch Variation, Closed Variation	1. e4 e6 2. d4 d5 3. Nd2 Nf6
    C05	French Defense: Tarrasch Variation, Closed Variation	1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6
    C05	French Defense: Tarrasch Variation, Pawn Center Variation	1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. f4
    C06	French Defense: Tarrasch Variation, Closed Variation, Main Line	1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 cxd4 8. cxd4
    C06	French Defense: Tarrasch Variation, Leningrad Variation	1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 cxd4 8. cxd4 Nb6
    C07	French Defense: Tarrasch Variation, Chistyakov Defense	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5
    C07	French Defense: Tarrasch Variation, Chistyakov Defense, Modern Line	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5 5. Ngf3 cxd4 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6
    C07	French Defense: Tarrasch Variation, Eliskases Variation	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5 5. Ngf3 cxd4 6. Bc4 Qd8
    C07	French Defense: Tarrasch Variation, Open System	1. e4 e6 2. d4 d5 3. Nd2 c5
    C07	French Defense: Tarrasch Variation, Open System, Euwe-Keres Line	1. e4 e6 2. d4 d5 3. Nd2 c5 4. Ngf3
    C07	French Defense: Tarrasch Variation, Open System, Shaposhnikov Gambit	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Nf6
    C07	French Defense: Tarrasch Variation, Open System, Süchting Line	1. e4 e6 2. d4 d5 3. Nd2 c5 4. c3
    C08	French Defense: Tarrasch Variation, Open System	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5
    C08	French Defense: Tarrasch Variation, Open System, Advance Line	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 c4
    C09	French Defense: Tarrasch Variation, Open System, Main Line	1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 Nc6
    C10	French Defense: Classical Variation, Svenonius Variation	1. e4 e6 2. d4 d5 3. Nc3 Nc6 4. exd5
    C10	French Defense: Paulsen Variation	1. e4 e6 2. d4 d5 3. Nc3
    C10	French Defense: Rubinstein Variation	1. e4 e6 2. d4 d5 3. Nc3 dxe4
    C10	French Defense: Rubinstein Variation, Blackburne Defense	1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7
    C10	French Defense: Rubinstein Variation, Capablanca Line	1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Nxf6+ Nxf6 7. Ne5
    C10	French Defense: Rubinstein Variation, Ellis Gambit	1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 e5
    C10	French Defense: Rubinstein Variation, Fort Knox Variation	1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bd7 5. Nf3 Bc6
    C10	French Defense: Rubinstein Variation, Kasparov Attack	1. e4 e6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Nxf6+ Nxf6 7. c3
    C10	French Defense: Rubinstein Variation, Maric Variation	1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Qd5
    C10	Sicilian Defense: Marshall Gambit	1. e4 c5 2. Nc3 e6 3. d4 d5
    C11	French Defense: Burn Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5
    C11	French Defense: Classical Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6
    C11	French Defense: Classical Variation, Burn Variation, Main Line	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 dxe4 5. Nxe4 Be7 6. Bxf6 Bxf6 7. Nf3 O-O
    C11	French Defense: Classical Variation, Burn Variation, Morozevich Line	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 dxe4 5. Nxe4 Be7 6. Bxf6 gxf6
    C11	French Defense: Classical Variation, Delayed Exchange Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. exd5
    C11	French Defense: Classical Variation, Steinitz Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5
    C11	French Defense: Classical Variation, Swiss Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bd3
    C11	French Defense: Henneberger Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Be3
    C11	French Defense: Steinitz Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Nc6
    C11	French Defense: Steinitz Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3
    C11	French Defense: Steinitz Variation, Boleslavsky Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3
    C11	French Defense: Steinitz Variation, Bradford Attack Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Bxc5 7. Qg4
    C11	French Defense: Steinitz Variation, Brodsky-Jones Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. dxc5 Nc6 7. a3 Bxc5 8. Qg4 O-O 9. Nf3 f6
    C11	French Defense: Steinitz Variation, Gledhill Attack	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. Qg4
    C12	French Defense: MacCutcheon Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4
    C12	French Defense: MacCutcheon Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5
    C12	French Defense: MacCutcheon Variation, Bernstein Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bh4
    C12	French Defense: MacCutcheon Variation, Bogoljubov Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. exd5 Qxd5 6. Bxf6 gxf6 7. Qd2 Qa5
    C12	French Defense: MacCutcheon Variation, Chigorin Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. exf6
    C12	French Defense: MacCutcheon Variation, Dr. Olland Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bc1
    C12	French Defense: MacCutcheon Variation, Duras Variation	1. e4 e6 2. Nc3 d5 3. d4 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3 7. bxc3 Ne4 8. Qg4 Kf8 9. Bc1
    C12	French Defense: MacCutcheon Variation, Exchange Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. exd5
    C12	French Defense: MacCutcheon Variation, Grigoriev Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. exf6 hxg5 7. fxg7 Rg8 8. h4 gxh4 9. Qg4
    C12	French Defense: MacCutcheon Variation, Janowski Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Be3
    C12	French Defense: MacCutcheon Variation, Lasker Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3
    C12	French Defense: MacCutcheon Variation, Lasker Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Bxc3 7. bxc3 Ne4 8. Qg4 g6
    C12	French Defense: MacCutcheon Variation, Tartakower Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Bb4 5. e5 h6 6. Bd2 Nfd7
    C13	French Defense: Alekhine-Chatard Attack	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4
    C13	French Defense: Alekhine-Chatard Attack, Albin-Chatard Gambit	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 Bxg5 7. hxg5 Qxg5
    C13	French Defense: Alekhine-Chatard Attack, Breyer Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 c5
    C13	French Defense: Alekhine-Chatard Attack, Maróczy Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 a6
    C13	French Defense: Alekhine-Chatard Attack, Spielmann Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 O-O
    C13	French Defense: Alekhine-Chatard Attack, Teichmann Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 f6
    C13	French Defense: Classical Variation, Frankfurt Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ng8 6. Be3 b6
    C13	French Defense: Classical Variation, Normal Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7
    C13	French Defense: Classical Variation, Richter Attack	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6
    C13	French Defense: Classical Variation, Richter Attack	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6 Bxf6 6. e5 Be7 7. Qg4
    C13	French Defense: Classical Variation, Tartakower Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ne4
    C13	French Defense: Classical Variation, Vistaneckis Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Ng8
    C14	French Defense: Classical Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7
    C14	French Defense: Classical Variation, Alapin Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Nb5
    C14	French Defense: Classical Variation, Pollock Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Qg4
    C14	French Defense: Classical Variation, Rubinstein Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Qd2
    C14	French Defense: Classical Variation, Stahlberg Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4 O-O 8. Nf3 c5 9. Qd2 Nc6 10. O-O-O c4
    C14	French Defense: Classical Variation, Steinitz Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4
    C14	French Defense: Classical Variation, Tarrasch Variation	1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. Bd3
    C15	French Defense: MacCutcheon Variation, Wolf Gambit	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 Nf6 5. Bg5
    C15	French Defense: Winawer Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4
    C15	French Defense: Winawer Variation, Alekhine Gambit Accepted	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Bxc3+
    C15	French Defense: Winawer Variation, Alekhine Gambit, Alatortsev Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Be7 6. Nxe4 Nf6 7. N2g3 O-O 8. Be2 Nc6
    C15	French Defense: Winawer Variation, Alekhine Gambit, Kan Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2 dxe4 5. a3 Bxc3+ 6. Nxc3 Nc6
    C15	French Defense: Winawer Variation, Alekhine-Maróczy Gambit	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Ne2
    C15	French Defense: Winawer Variation, Delayed Exchange Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. exd5
    C15	French Defense: Winawer Variation, Exchange Variation, Canal Attack	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. exd5 exd5 5. Bd3 Ne7 6. Qh5
    C15	French Defense: Winawer Variation, Fingerslip Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2
    C15	French Defense: Winawer Variation, Fingerslip Variation, Kunin Double Gambit	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 dxe4 5. Qg4 Qxd4
    C15	French Defense: Winawer Variation, Fingerslip Variation, Main Line	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 dxe4 5. Qg4 Nf6 6. Qxg7 Rg8 7. Qh6
    C15	French Defense: Winawer Variation, Fingerslip Variation, Schwarz's Line	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd2 Ne7 5. Nb1
    C15	French Defense: Winawer Variation, Kondratiyev Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. Bd3 c5 5. exd5 Qxd5 6. Bd2
    C15	French Defense: Winawer Variation, Winckelmann-Riemer Gambit	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. a3
    C16	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5
    C16	French Defense: Winawer Variation, Petrosian Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 Qd7
    C17	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5
    C17	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3
    C17	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 cxd4 6. axb4 dxc3 7. Nf3
    C17	French Defense: Winawer Variation, Advance Variation, Moscow Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Qg4
    C17	French Defense: Winawer Variation, Bogoljubov Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Bd2
    C17	French Defense: Winawer Variation, Bogoljubov Variation, Icelandic Defense	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. Bd2 Ne7 6. f4
    C17	French Defense: Winawer Variation, Maróczy-Wallis Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 cxd4 6. axb4 dxc3
    C17	French Defense: Winawer Variation, Retreat Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Ba5
    C17	French Defense: Winawer Variation, Retreat Variation, Armenian Line	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Ba5 6. b4 cxd4
    C18	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3
    C18	French Defense: Winawer Variation, Classical Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Qc7
    C18	French Defense: Winawer Variation, Portisch-Hook Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Qa5
    C19	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7
    C19	French Defense: Winawer Variation, Advance Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. a4
    C19	French Defense: Winawer Variation, Poisoned Pawn Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4
    C19	French Defense: Winawer Variation, Poisoned Pawn Variation, Main Line	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 Qc7 8. Qxg7 Rg8 9. Qxh7 cxd4 10. Ne2
    C19	French Defense: Winawer Variation, Poisoned Pawn Variation, Paoli Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 Qc7 8. Qxg7 Rg8 9. Qxh7 cxd4 10. Kd1
    C19	French Defense: Winawer Variation, Positional Variation	1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Nf3
    C20	Barnes Opening: Walkerling	1. f3 e5 2. e4 Nf6 3. Bc4
    C20	Bongcloud Attack	1. e4 e5 2. Ke2
    C20	Center Game	1. e4 e5 2. d4
    C20	English Opening: The Whale	1. e4 e5 2. c4
    C20	King's Pawn Game	1. e4 e5
    C20	King's Pawn Game: Alapin Opening	1. e4 e5 2. Ne2
    C20	King's Pawn Game: Bavarian Gambit	1. e4 e5 2. c4 d5
    C20	King's Pawn Game: Beyer Gambit	1. e4 e5 2. d4 d5
    C20	King's Pawn Game: Clam Variation, King's Gambit Reversed	1. e4 e5 2. d3 f5
    C20	King's Pawn Game: Clam Variation, Radisch Gambit	1. e4 e5 2. d3 Nf6 3. f4 Bc5
    C20	King's Pawn Game: King's Head Opening	1. e4 e5 2. f3
    C20	King's Pawn Game: King's Head Opening	1. e4 e5 2. f3 Nf6 3. Nc3
    C20	King's Pawn Game: Leonardis Variation	1. e4 e5 2. d3
    C20	King's Pawn Game: MacLeod Attack	1. e4 e5 2. c3
    C20	King's Pawn Game: MacLeod Attack, Lasa Gambit	1. e4 e5 2. c3 f5
    C20	King's Pawn Game: MacLeod Attack, Norwalde Gambit	1. e4 e5 2. c3 d5 3. Qh5 Bd6
    C20	King's Pawn Game: Mengarini's Opening	1. e4 e5 2. a3
    C20	King's Pawn Game: Napoleon Attack	1. e4 e5 2. Qf3
    C20	King's Pawn Game: Philidor Gambit	1. e4 e5 2. d4 d6 3. dxe5 Bd7
    C20	King's Pawn Game: Tortoise Opening	1. e4 e5 2. Bd3
    C20	King's Pawn Game: Wayward Queen Attack	1. e4 e5 2. Qh5
    C20	King's Pawn Game: Wayward Queen Attack, Kiddie Countergambit	1. e4 e5 2. Qh5 Nf6
    C20	King's Pawn Game: Wayward Queen Attack, Mellon Gambit	1. e4 e5 2. Qh5 Nc6 3. Bc4 Nh6 4. d3 g6 5. Qf3 f6 6. Ne2 d5
    C20	King's Pawn Game: Weber Gambit	1. e4 e5 2. d3 d5 3. exd5 c6 4. dxc6 Nxc6
    C20	King's Pawn Opening	1. e4 e5 2. b3
    C20	King's Pawn Opening: Speers	1. e4 e5 2. Qg4 Nf6 3. Qf5
    C20	King's Pawn Opening: Van Hooydoon Gambit	1. e4 e5 2. Qe2 Nc6 3. c3 Nf6 4. Nf3 Bc5 5. d4 exd4 6. cxd4 Nxd4
    C20	Portuguese Opening	1. e4 e5 2. Bb5
    C20	Portuguese Opening: Miguel Gambit	1. e4 e5 2. Bb5 Bc5 3. b4
    C20	Portuguese Opening: Portuguese Gambit	1. e4 e5 2. Bb5 Nf6 3. d4
    C21	Center Game	1. e4 e5 2. d4 exd4 3. Qxd4
    C21	Center Game Accepted	1. e4 e5 2. d4 exd4
    C21	Center Game: Halasz-McDonnell Gambit	1. e4 e5 2. d4 exd4 3. f4
    C21	Center Game: Halasz-McDonnell Gambit, Crocodile Variation	1. e4 e5 2. d4 exd4 3. f4 Bc5 4. Nf3 Nc6 5. c3
    C21	Center Game: Kieseritzky Variation	1. e4 e5 2. d4 exd4 3. Nf3
    C21	Center Game: Kieseritzky Variation	1. e4 e5 2. d4 exd4 3. Nf3 c5
    C21	Center Game: Kieseritzky Variation	1. e4 e5 2. d4 exd4 3. Nf3 c5 4. Bc4
    C21	Center Game: Kieseritzky Variation	1. e4 e5 2. d4 exd4 3. Nf3 c5 4. Bc4 b5
    C21	Center Game: Lanc-Arnold Gambit	1. e4 e5 2. d4 exd4 3. Nf3 Bc5 4. c3
    C21	Center Game: Lanc-Arnold Gambit, Schippler Gambit	1. e4 e5 2. d4 exd4 3. Nf3 Bc5 4. c3 dxc3 5. Bc4
    C21	Center Game: Ross Gambit	1. e4 e5 2. d4 exd4 3. Bd3
    C21	Center Game: von der Lasa Gambit	1. e4 e5 2. d4 exd4 3. Bc4
    C21	Danish Gambit	1. e4 e5 2. d4 exd4 3. c3
    C21	Danish Gambit Accepted	1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2
    C21	Danish Gambit Accepted: Chigorin Defense	1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Qe7
    C21	Danish Gambit Accepted: Classical Defense	1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Nf6
    C21	Danish Gambit Accepted: Copenhagen Defense	1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Bb4+
    C21	Danish Gambit Accepted: Schlechter Defense	1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 d5
    C21	Danish Gambit Accepted: Svenonius Defense	1. e4 e5 2. d4 exd4 3. c3 Ne7
    C21	Danish Gambit Declined: Sorensen Defense	1. e4 e5 2. d4 exd4 3. c3 d5
    C22	Center Game: Berger Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Nf6
    C22	Center Game: Charousek Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Bb4+ 5. c3 Be7
    C22	Center Game: Hall Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qc4
    C22	Center Game: Kupreichik Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Nf6 5. Nc3 Bb4 6. Bd2 O-O 7. O-O-O Re8 8. Bc4 d6 9. Nh3
    C22	Center Game: Normal Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6
    C22	Center Game: Paulsen Attack Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3
    C22	Center Game: l'Hermet Variation	1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 f5
    C23	Bishop's Opening	1. e4 e5 2. Bc4
    C23	Bishop's Opening: Anderssen Gambit	1. e4 e5 2. Bc4 b5 3. Bxb5 c6
    C23	Bishop's Opening: Boi Variation	1. e4 e5 2. Bc4 Bc5
    C23	Bishop's Opening: Calabrese Countergambit	1. e4 e5 2. Bc4 f5
    C23	Bishop's Opening: Calabrese Countergambit, Jaenisch Variation	1. e4 e5 2. Bc4 f5 3. d3
    C23	Bishop's Opening: Four Pawns Gambit	1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. f4 exf4 5. Nf3 Be7 6. d4 Bh4+ 7. g3 fxg3 8. O-O gxh2+ 9. Kh1
    C23	Bishop's Opening: Khan Gambit	1. e4 e5 2. Bc4 d5
    C23	Bishop's Opening: Lewis Countergambit	1. e4 e5 2. Bc4 Bc5 3. c3 d5
    C23	Bishop's Opening: Lewis Countergambit	1. e4 e5 2. Bc4 Bc5 3. c3 d5 4. Bxd5 Nf6
    C23	Bishop's Opening: Lewis Countergambit, Walker Variation	1. e4 e5 2. Bc4 Bc5 3. c3 d5 4. Bxd5 Nf6 5. d4
    C23	Bishop's Opening: Lewis Gambit	1. e4 e5 2. Bc4 Bc5 3. d4
    C23	Bishop's Opening: Lisitsyn Variation	1. e4 e5 2. Bc4 c6 3. d4 d5 4. exd5 cxd5 5. Bb5+ Bd7 6. Bxd7+ Nxd7 7. dxe5 Nxe5 8. Ne2
    C23	Bishop's Opening: Lopez Gambit	1. e4 e5 2. Bc4 Bc5 3. Qe2 Nc6 4. c3 Nf6 5. f4
    C23	Bishop's Opening: Lopez Variation	1. e4 e5 2. Bc4 Bc5 3. Qe2
    C23	Bishop's Opening: Lopez Variation, Lopez Gambit	1. e4 e5 2. Bc4 Bc5 3. Qe2 Nf6 4. f4
    C23	Bishop's Opening: McDonnell Gambit	1. e4 e5 2. Bc4 Bc5 3. b4
    C23	Bishop's Opening: McDonnell Gambit, La Bourdonnais-Denker Gambit	1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. c3
    C23	Bishop's Opening: McDonnell Gambit, McDonnell Double Gambit	1. e4 e5 2. Bc4 Bc5 3. b4 Bxb4 4. f4
    C23	Bishop's Opening: Philidor Counterattack	1. e4 e5 2. Bc4 c6
    C23	Bishop's Opening: Philidor Variation	1. e4 e5 2. Bc4 Bc5 3. c3
    C23	Bishop's Opening: Pratt Variation	1. e4 e5 2. Bc4 Bc5 3. c3 Nf6 4. d4 exd4 5. e5 d5 6. exf6 dxc4 7. Qh5 O-O
    C23	Bishop's Opening: Stein Gambit	1. e4 e5 2. Bc4 Bc5 3. f4
    C23	Bishop's Opening: Thorold Gambit	1. e4 e5 2. Bc4 b5 3. Bxb5 f5
    C23	Bishop's Opening: del Rio Variation	1. e4 e5 2. Bc4 Bc5 3. c3 Qg5
    C24	Bishop's Opening: Berlin Defense	1. e4 e5 2. Bc4 Nf6
    C24	Bishop's Opening: Berlin Defense, Greco Gambit	1. e4 e5 2. Bc4 Nf6 3. f4
    C24	Bishop's Opening: Kitchener Folly	1. e4 e5 2. Bc4 Nf6 3. d3 Be7 4. Nf3 O-O
    C24	Bishop's Opening: Krejcik Gambit	1. e4 e5 2. Bc4 Nf6 3. f3 Bc5 4. Ne2 Nc6 5. b4
    C24	Bishop's Opening: Pachman Gambit	1. e4 e5 2. Bc4 Nf6 3. Ne2 Nxe4 4. Nec3
    C24	Bishop's Opening: Ponziani Gambit	1. e4 e5 2. Bc4 Nf6 3. d4
    C24	Bishop's Opening: Urusov Gambit, Panov Variation	1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3 d5 5. exd5 Bb4+ 6. c3 Qe7+
    C24	Bishop's Opening: Vienna Hybrid	1. e4 e5 2. Bc4 Nf6 3. d3 Nc6 4. Nc3
    C24	Bishop's Opening: Warsaw Gambit	1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. c3
    C25	Vienna Gambit, with Max Lange Defense	1. e4 e5 2. Nc3 Nc6 3. f4
    C25	Vienna Gambit, with Max Lange Defense: Cunningham Defense	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 Be7
    C25	Vienna Gambit, with Max Lange Defense: Hamppe-Allgaier Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. h4 g4 6. Ng5
    C25	Vienna Gambit, with Max Lange Defense: Hamppe-Allgaier Gambit, Alapin Variation	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. h4 g4 6. Ng5 d6
    C25	Vienna Gambit, with Max Lange Defense: Hamppe-Allgaier Gambit, Thorold Variation	1. e4 e5 2. f4 exf4 3. Nf3 Nc6 4. Nc3 g5 5. h4 g4 6. Ng5 h6 7. Nxf7 Kxf7 8. d4
    C25	Vienna Gambit, with Max Lange Defense: Hamppe-Muzio Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O gxf3
    C25	Vienna Gambit, with Max Lange Defense: Knight Variation	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3
    C25	Vienna Gambit, with Max Lange Defense: Pierce Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. d4
    C25	Vienna Gambit, with Max Lange Defense: Quelle Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 Bc5 4. fxe5 d6
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit, Fraser-Minckwitz Defense	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 b6
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit, Main Line	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit, Paulsen Defense	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 d6
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit, Sörensen Defense	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 g5
    C25	Vienna Gambit, with Max Lange Defense: Steinitz Gambit, Zukertort Defense	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. d4 Qh4+ 5. Ke2 d5
    C25	Vienna Game	1. e4 e5 2. Nc3
    C25	Vienna Game: Anderssen Defense	1. e4 e5 2. Nc3 Bc5
    C25	Vienna Game: Fyfe Gambit	1. e4 e5 2. Nc3 Nc6 3. d4
    C25	Vienna Game: Giraffe Attack	1. e4 e5 2. Nc3 Bc5 3. Qg4
    C25	Vienna Game: Hamppe-Meitner Variation	1. e4 e5 2. Nc3 Bc5 3. Na4
    C25	Vienna Game: Hamppe-Muzio Gambit	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O
    C25	Vienna Game: Hamppe-Muzio, Dubois Variation	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. Bc4 g4 6. O-O gxf3 7. Qxf3 Ne5 8. Qxf4 Qf6
    C25	Vienna Game: Max Lange Defense	1. e4 e5 2. Nc3 Nc6
    C25	Vienna Game: Omaha Gambit	1. e4 e5 2. Nc3 d6 3. f4
    C25	Vienna Game: Paulsen Variation	1. e4 e5 2. Nc3 Nc6 3. g3
    C25	Vienna Game: Paulsen Variation	1. e4 e5 2. Nc3 Nc6 3. g3 Nf6 4. Bg2 Bc5 5. Nge2 d5
    C25	Vienna Game: Paulsen Variation, Mariotti Gambit	1. e4 e5 2. Nc3 Nc6 3. g3 Bc5 4. Bg2 h5 5. Nf3 h4
    C25	Vienna Game: Philidor Countergambit	1. e4 e5 2. Nc3 Nc6 3. d4 f5
    C25	Vienna Game: Pierce Gambit, Rushmere Attack	1. e4 e5 2. Nc3 Nc6 3. f4 exf4 4. Nf3 g5 5. d4 g4 6. Bc4 gxf3 7. O-O d5 8. exd5 Bg4 9. dxc6
    C25	Vienna Game: Stanley Variation, Meitner-Mieses Gambit	1. e4 e5 2. Nc3 Nc6 3. Bc4 Bc5 4. Qg4 Qf6 5. Nd5
    C25	Vienna Game: Zhuravlev Countergambit	1. e4 e5 2. Nc3 Bb4 3. Qg4 Nf6
    C26	Bishop's Opening: Horwitz Gambit	1. e4 e5 2. Bc4 Nf6 3. Nc3 b5
    C26	Bishop's Opening: Vienna Hybrid, Spielmann Attack	1. e4 e5 2. Nc3 Nf6 3. Bc4 Bc5 4. d3
    C26	Vienna Game: Falkbeer Variation	1. e4 e5 2. Nc3 Nf6
    C26	Vienna Game: Mengarini Variation	1. e4 e5 2. Nc3 Nf6 3. a3
    C26	Vienna Game: Mieses Variation	1. e4 e5 2. Nc3 Nf6 3. g3
    C26	Vienna Game: Mieses Variation, Erben Gambit	1. e4 e5 2. Nc3 Nf6 3. g3 d5 4. exd5 c6
    C26	Vienna Game: Paulsen Variation, Pollock Gambit	1. e4 e5 2. Nc3 Nf6 3. g3 Bc5 4. Bg2 Nc6 5. Nge2 d5 6. exd5
    C26	Vienna Game: Stanley Variation	1. e4 e5 2. Nc3 Nf6 3. Bc4
    C26	Vienna Game: Stanley Variation, Eifel Gambit	1. e4 e5 2. Nc3 Nf6 3. Bc4 Bc5 4. Nge2 b5
    C26	Vienna Game: Stanley Variation, Reversed Spanish	1. e4 e5 2. Nc3 Nf6 3. Bc4 Bb4
    C27	Bishop's Opening: Boden-Kieseritzky Gambit	1. e4 e5 2. Nf3 Nf6 3. Bc4 Nxe4 4. Nc3
    C27	Bishop's Opening: Boden-Kieseritzky Gambit, Lichtenhein Defense	1. e4 e5 2. Nf3 Nf6 3. Bc4 Nxe4 4. Nc3 d5
    C27	Vienna Game: Adams' Gambit	1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. d4
    C27	Vienna Game: Frankenstein-Dracula Variation	1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4
    C27	Vienna Game: Stanley Variation, Alekhine Variation	1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Be7 6. Nf3 Nc6 7. Nxe5
    C27	Vienna Game: Stanley Variation, Frankenstein-Dracula Variation	1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. Nb5 g6 7. Qf3 f5 8. Qd5 Qe7 9. Nxc7+ Kd8 10. Nxa8 b6
    C27	Vienna Game: Stanley Variation, Monster Declined	1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Be7
    C28	Bishop's Opening: Vienna Hybrid, Hromádka Variation	1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6 4. d3 Bb4 5. Ne2
    C28	Vienna Game: Stanley Variation, Bronstein Gambit	1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6 4. f4 Nxe4 5. Nf3
    C28	Vienna Game: Stanley Variation, Three Knights Variation	1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6
    C29	Vienna Game: Heyde Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3 f5 6. d4
    C29	Vienna Game: Vienna Gambit	1. e4 e5 2. Nc3 Nf6 3. f4
    C29	Vienna Game: Vienna Gambit, Bardeleben Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3 f5
    C29	Vienna Game: Vienna Gambit, Breyer Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3 Be7
    C29	Vienna Game: Vienna Gambit, Kaufmann Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3 Bg4 6. Qe2
    C29	Vienna Game: Vienna Gambit, Main Line	1. e4 e5 2. Nc3 Nf6 3. f4 d5
    C29	Vienna Game: Vienna Gambit, Modern Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. d3
    C29	Vienna Game: Vienna Gambit, Paulsen Attack	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3
    C29	Vienna Game: Vienna Gambit, Steinitz Variation	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. d3
    C29	Vienna Game: Vienna Gambit, Wurzburger Trap	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. d3 Qh4+ 6. g3 Nxg3 7. Nf3 Qh5 8. Nxd5
    C30	King's Gambit	1. e4 e5 2. f4
    C30	King's Gambit Declined: Classical Variation	1. e4 e5 2. f4 Bc5
    C30	King's Gambit Declined: Classical Variation	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3
    C30	King's Gambit Declined: Classical Variation, Euwe Attack	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 Bg4 5. fxe5 dxe5 6. Qa4+
    C30	King's Gambit Declined: Classical Variation, Rotlewi Countergambit	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. b4
    C30	King's Gambit Declined: Classical Variation, Rubinstein Countergambit	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 f5
    C30	King's Gambit Declined: Classical, Hanham Variation	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. Nc3 Nd7
    C30	King's Gambit Declined: Classical, Réti Variation	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. c3 f5 5. fxe5 dxe5 6. d4 exd4 7. Bc4
    C30	King's Gambit Declined: Classical, Soldatenkov Variation	1. e4 e5 2. f4 Bc5 3. Nf3 d6 4. fxe5
    C30	King's Gambit Declined: Classical, Svenonius Variation	1. e4 e5 2. Bc4 Nc6 3. Nc3 Nf6 4. d3 Bc5 5. f4 d6 6. Nf3 Bg4 7. h3 Bxf3 8. Qxf3 exf4
    C30	King's Gambit Declined: Hobbs-Zilbermints Gambit	1. e4 e5 2. f4 Nc6 3. Nf3 g5 4. fxg5 h6
    C30	King's Gambit Declined: Keene Defense	1. e4 e5 2. f4 Qh4+ 3. g3 Qe7
    C30	King's Gambit Declined: Keene's Defense	1. e4 e5 2. f4 Qh4+
    C30	King's Gambit Declined: Keene's Defense	1. e4 e5 2. f4 Qh4+ 3. g3
    C30	King's Gambit Declined: Mafia Defense	1. e4 c5 2. f4 e5
    C30	King's Gambit Declined: Miles Defense	1. e4 e5 2. f4 Nc6 3. Nf3 f5
    C30	King's Gambit Declined: Norwalde Variation	1. e4 e5 2. f4 Qf6
    C30	King's Gambit Declined: Norwalde Variation, Bücker Gambit	1. e4 e5 2. f4 Qf6 3. Nc3 Qxf4 4. Nf3 Bb4 5. Bc4
    C30	King's Gambit Declined: Norwalde Variation, Schubert Variation	1. e4 e5 2. f4 Qf6 3. Nc3 Qxf4 4. d4
    C30	King's Gambit Declined: Panteldakis Countergambit	1. e4 e5 2. f4 f5
    C30	King's Gambit Declined: Panteldakis Countergambit, Greco Variation	1. e4 e5 2. f4 f5 3. exf5 Qh4+
    C30	King's Gambit Declined: Panteldakis Countergambit, Pawn Sacrifice Line	1. e4 e5 2. f4 f5 3. exf5 exf4 4. Qh5+ g6 5. fxg6 Qe7+ 6. Kd1
    C30	King's Gambit Declined: Panteldakis Countergambit, Schiller's Defense	1. e4 e5 2. f4 f5 3. exf5 Bc5
    C30	King's Gambit Declined: Panteldakis Countergambit, Shirazi Line	1. e4 e5 2. f4 f5 3. exf5 exf4 4. Qh5+ Ke7
    C30	King's Gambit Declined: Panteldakis Countergambit, Symmetrical Variation	1. e4 e5 2. f4 f5 3. exf5 exf4 4. Nf3 d5 5. d4 Bd6 6. Bd3
    C30	King's Gambit Declined: Petrov's Defense	1. e4 e5 2. f4 Nf6
    C30	King's Gambit Declined: Queen's Knight Defense	1. e4 e5 2. f4 Nc6
    C30	King's Gambit Declined: Senechaud Countergambit	1. e4 e5 2. f4 Bc5 3. Nf3 g5
    C30	King's Gambit Declined: Soller-Zilbermints Gambit	1. e4 e5 2. f4 f6 3. fxe5 Nc6
    C30	King's Gambit Declined: Zilbermints Double Countergambit	1. e4 e5 2. f4 g5
    C30	King's Gambit Declined: Zilbermints Double Gambit	1. e4 e5 2. f4 Nc6 3. Nf3 g5
    C31	King's Gambit Declined: Falkbeer Countergambit	1. e4 e5 2. f4 d5
    C31	King's Gambit Declined: Falkbeer Countergambit Accepted	1. e4 e5 2. f4 d5 3. exd5
    C31	King's Gambit Declined: Falkbeer Countergambit, Anderssen Attack	1. e4 e5 2. f4 d5 3. exd5 e4 4. Bb5+
    C31	King's Gambit Declined: Falkbeer Countergambit, Blackburne Attack	1. e4 e5 2. f4 d5 3. Nf3
    C31	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3
    C31	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Morphy Defense	1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. exd5 e4 5. d3 Bb4 6. Bd2 e3
    C31	King's Gambit Declined: Falkbeer Countergambit, Hinrichsen Gambit	1. e4 e5 2. f4 d5 3. d4
    C31	King's Gambit Declined: Falkbeer Countergambit, Miles Gambit	1. e4 e5 2. f4 d5 3. exd5 Bc5
    C31	King's Gambit Declined: Falkbeer Countergambit, Milner-Barry Variation	1. e4 e5 2. f4 d5 3. Nc3
    C31	King's Gambit Declined: Falkbeer Countergambit, Modern Transfer	1. e4 e5 2. f4 d5 3. exd5 exf4
    C31	King's Gambit Declined: Falkbeer Countergambit, Nimzowitsch-Marshall Countergambit	1. e4 e5 2. f4 d5 3. exd5 c6
    C31	King's Gambit Declined: Falkbeer Countergambit, Pickler Gambit	1. e4 e5 2. f4 d5 3. exd5 c6 4. dxc6 Bc5
    C31	King's Gambit Declined: Falkbeer Countergambit, Rubinstein Variation	1. e4 e5 2. f4 d5 3. exd5 e4 4. Nc3 Nf6 5. Qe2
    C31	King's Gambit Declined: Falkbeer Countergambit, Staunton Line	1. e4 e5 2. f4 d5 3. exd5 e4
    C31	Van Geet Opening: Grünfeld Defense, Steiner Gambit	1. e4 e5 2. f4 d5 3. Nc3 dxe4 4. Nxe4
    C32	King's Gambit Declined: Falkbeer Countergambit, Alapin Variation	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf2+ 8. Kd1 Qxd5+ 9. Nfd2
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Qe2
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit Accepted	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Keres Variation	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. Nd2
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Main Line	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf5
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Old Line	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. Qe2
    C32	King's Gambit Declined: Falkbeer Countergambit, Charousek Variation	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Qe2 Qxd5 7. Nd2 f5 8. g4
    C32	King's Gambit Declined: Falkbeer Countergambit, Tarrasch Variation	1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 Bf5 8. g4 O-O
    C33	King's Gambit Accepted	1. e4 e5 2. f4 exf4
    C33	King's Gambit Accepted: Basman Gambit	1. e4 e5 2. f4 exf4 3. Qe2
    C33	King's Gambit Accepted: Bishop's Gambit	1. e4 e5 2. f4 exf4 3. Bc4
    C33	King's Gambit Accepted: Bishop's Gambit, Anderssen Defense	1. e4 e5 2. f4 exf4 3. Bc4 g5
    C33	King's Gambit Accepted: Bishop's Gambit, Anderssen Variation	1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 c6
    C33	King's Gambit Accepted: Bishop's Gambit, Bledow Countergambit	1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 Nf6
    C33	King's Gambit Accepted: Bishop's Gambit, Bledow Variation	1. e4 e5 2. f4 exf4 3. Bc4 d5
    C33	King's Gambit Accepted: Bishop's Gambit, Boden Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Nc6
    C33	King's Gambit Accepted: Bishop's Gambit, Bogoljubov Defense	1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3 c6
    C33	King's Gambit Accepted: Bishop's Gambit, Bogoljubov Variation	1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3
    C33	King's Gambit Accepted: Bishop's Gambit, Boren-Svenonius Variation	1. e4 e5 2. f4 exf4 3. Bc4 d5 4. Bxd5 Qh4+ 5. Kf1 Bd6
    C33	King's Gambit Accepted: Bishop's Gambit, Bryan Countergambit	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5
    C33	King's Gambit Accepted: Bishop's Gambit, Chigorin's Attack	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 d5 5. Bxd5 g5 6. g3
    C33	King's Gambit Accepted: Bishop's Gambit, Classical Defense	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Ne7 5. Nc3 g5 6. d4 Bg7
    C33	King's Gambit Accepted: Bishop's Gambit, Classical Defense, Cozio Attack	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Qf3
    C33	King's Gambit Accepted: Bishop's Gambit, Cozio Defense	1. e4 e5 2. f4 exf4 3. Bc4 Nf6
    C33	King's Gambit Accepted: Bishop's Gambit, Cozio Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 d6
    C33	King's Gambit Accepted: Bishop's Gambit, First Jaenisch Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Nf6
    C33	King's Gambit Accepted: Bishop's Gambit, Fraser Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. g3 fxg3 7. Qf3
    C33	King's Gambit Accepted: Bishop's Gambit, Gianutio Gambit	1. e4 e5 2. f4 exf4 3. Bc4 f5
    C33	King's Gambit Accepted: Bishop's Gambit, Greco Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 Bc5
    C33	King's Gambit Accepted: Bishop's Gambit, Grimm Attack	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. d4 d6 7. e5
    C33	King's Gambit Accepted: Bishop's Gambit, Kieseritzky Gambit	1. e4 e5 2. f4 exf4 3. Bc4 b5
    C33	King's Gambit Accepted: Bishop's Gambit, Lopez Defense	1. e4 e5 2. f4 exf4 3. Bc4 c6
    C33	King's Gambit Accepted: Bishop's Gambit, Lopez Variation	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5
    C33	King's Gambit Accepted: Bishop's Gambit, Maurian Defense	1. e4 e5 2. f4 exf4 3. Bc4 Nc6
    C33	King's Gambit Accepted: Bishop's Gambit, McDonnell Attack	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. d4 Ne7 7. g3
    C33	King's Gambit Accepted: Bishop's Gambit, McDonnell Attack	1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 g5 5. Nc3 Bg7 6. g3
    C33	King's Gambit Accepted: Bishop's Gambit, Paulsen Attack	1. e4 e5 2. f4 exf4 3. Bc4 Nf6 4. Nc3 Bb4 5. e5
    C33	King's Gambit Accepted: Bishop's Gambit, Steinitz Defense	1. e4 e5 2. f4 exf4 3. Bc4 Ne7
    C33	King's Gambit Accepted: Breyer Gambit	1. e4 e5 2. f4 exf4 3. Qf3
    C33	King's Gambit Accepted: Carrera Gambit	1. e4 e5 2. f4 exf4 3. Qh5
    C33	King's Gambit Accepted: Dodo Variation	1. e4 e5 2. f4 exf4 3. Qg4
    C33	King's Gambit Accepted: Eisenberg Variation	1. e4 e5 2. f4 exf4 3. Nh3
    C33	King's Gambit Accepted: Gaga Gambit	1. e4 e5 2. f4 exf4 3. g3
    C33	King's Gambit Accepted: Lopez-Gianutio Countergambit, Hein Variation	1. e4 e5 2. f4 exf4 3. Bc4 f5 4. Qe2 Qh4+ 5. Kd1 fxe4 6. Nc3 Kd8
    C33	King's Gambit Accepted: Mason-Keres Gambit	1. e4 e5 2. f4 exf4 3. Nc3
    C33	King's Gambit Accepted: Orsini Gambit	1. e4 e5 2. f4 exf4 3. b3
    C33	King's Gambit Accepted: Paris Gambit	1. e4 e5 2. f4 exf4 3. Ne2
    C33	King's Gambit Accepted: Polerio Gambit	1. e4 e5 2. f4 exf4 3. d4
    C33	King's Gambit Accepted: Schurig Gambit, with Bb5	1. e4 e5 2. f4 exf4 3. Bb5
    C33	King's Gambit Accepted: Schurig Gambit, with Bd3	1. e4 e5 2. f4 exf4 3. Bd3
    C33	King's Gambit Accepted: Stamma Gambit	1. e4 e5 2. f4 exf4 3. h4
    C33	King's Gambit Accepted: Tartakower Gambit	1. e4 e5 2. f4 exf4 3. Be2
    C33	King's Gambit Accepted: Tartakower Gambit, Weiss Defense	1. e4 e5 2. f4 exf4 3. Be2 f5 4. exf5 d6
    C33	King's Gambit Accepted: Tumbleweed	1. e4 e5 2. f4 exf4 3. Kf2
    C34	King's Gambit Accepted: Becker Defense	1. e4 e5 2. f4 exf4 3. Nf3 h6
    C34	King's Gambit Accepted: Bonsch-Osmolovsky Variation	1. e4 e5 2. f4 exf4 3. Nf3 Ne7
    C34	King's Gambit Accepted: Fischer Defense	1. e4 e5 2. f4 exf4 3. Nf3 d6
    C34	King's Gambit Accepted: Fischer Defense, Schulder Gambit	1. e4 e5 2. f4 exf4 3. Nf3 d6 4. b4
    C34	King's Gambit Accepted: Fischer Defense, Spanish Variation	1. e4 e5 2. f4 exf4 3. Nf3 d6 4. d4 Nf6 5. Bd3
    C34	King's Gambit Accepted: Gianutio Countergambit	1. e4 e5 2. f4 exf4 3. Nf3 f5
    C34	King's Gambit Accepted: Greco Gambit	1. e4 e5 2. f4 exf4 3. Nf3 d6 4. Bc4 h6 5. d4 g5 6. h4 Bg7
    C34	King's Gambit Accepted: King's Knight's Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5
    C34	King's Gambit Accepted: King's Knight's Gambit	1. e4 e5 2. f4 exf4 3. Nf3
    C34	King's Gambit Accepted: MacLeod Defense	1. e4 e5 2. f4 exf4 3. Nf3 Nc6
    C34	King's Gambit Accepted: Schallopp Defense	1. e4 e5 2. f4 exf4 3. Nf3 Nf6
    C34	King's Gambit Accepted: Schallopp Defense, Tashkent Attack	1. e4 e5 2. f4 exf4 3. Nf3 Nf6 4. e5 Nh5 5. g4
    C34	King's Gambit Accepted: Wagenbach Defense	1. e4 e5 2. f4 exf4 3. Nf3 h5
    C35	King's Gambit Accepted: Cunningham Defense	1. e4 e5 2. f4 exf4 3. Nf3 Be7
    C35	King's Gambit Accepted: Cunningham Defense, Bertin Gambit	1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Bh4+ 5. g3
    C35	King's Gambit Accepted: Cunningham Defense, Bertin Gambit	1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Bh4+ 5. g3 fxg3 6. O-O gxh2+ 7. Kh1
    C35	King's Gambit Accepted: Cunningham Defense, McCormick Defense	1. e4 e5 2. f4 exf4 3. Nf3 Be7 4. Bc4 Nf6
    C36	King's Gambit Accepted: Abbazia Defense	1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6
    C36	King's Gambit Accepted: Abbazia Defense, Main Line	1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6 5. Bb5+ c6 6. dxc6 bxc6 7. Bc4 Nd5
    C36	King's Gambit Accepted: Modern Defense	1. e4 e5 2. f4 exf4 3. Nf3 d5
    C36	King's Gambit Accepted: Modern Defense	1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5
    C37	King's Gambit Accepted: Australian Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. h4
    C37	King's Gambit Accepted: Blachly Gambit	1. e4 e5 2. f4 exf4 3. Nf3 Nc6 4. Bc4 g5
    C37	King's Gambit Accepted: Double Muzio Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. e5 Qxe5 8. Bxf7+
    C37	King's Gambit Accepted: Double Muzio Gambit, Baldwin Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Nc3 Qd4+ 8. Kh1 Qxc4 9. Nd5
    C37	King's Gambit Accepted: Double Muzio Gambit, Bello Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Nc3
    C37	King's Gambit Accepted: Double Muzio Gambit, Paulsen Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. e5 Qxe5 8. d3 Bh6 9. Nc3 Ne7 10. Bd2 Nbc6 11. Rae1
    C37	King's Gambit Accepted: Double Muzio Gambit, Young Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6 7. Bxf7+ Kxf7 8. d4 Qxd4+ 9. Be3 Qf6 10. Nc3 fxe3
    C37	King's Gambit Accepted: Ghulam-Kassim Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4
    C37	King's Gambit Accepted: Ghulam-Kassim Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4 gxf3 6. Qxf3
    C37	King's Gambit Accepted: King's Knight's Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4
    C37	King's Gambit Accepted: Kotov Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. d4 gxf3 6. Bxf4
    C37	King's Gambit Accepted: Lolli Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Bxf7+
    C37	King's Gambit Accepted: Lolli Gambit, Young Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Bxf7+ Kxf7 6. O-O gxf3 7. Qxf3 Qf6 8. d4 Qxd4+ 9. Be3 Qf6 10. Nc3
    C37	King's Gambit Accepted: McDonnell Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Nc3
    C37	King's Gambit Accepted: Middleton Countergambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 d6 5. O-O Bg4 6. h3 h5 7. hxg4 hxg4
    C37	King's Gambit Accepted: Muzio Gambit Accepted, From's Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qe7
    C37	King's Gambit Accepted: Muzio Gambit, Brentano Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O d5
    C37	King's Gambit Accepted: Muzio Gambit, Holloway Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Nc6
    C37	King's Gambit Accepted: Muzio Gambit, Kling and Horwitz Counterattack	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O Qe7
    C37	King's Gambit Accepted: Muzio Gambit, Sarratt Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O gxf3 6. Qxf3 Qf6
    C37	King's Gambit Accepted: Muzio Gambit, Wild Muzio Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. O-O
    C37	King's Gambit Accepted: Quade Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Nc3
    C37	King's Gambit Accepted: Rosentreter Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4
    C37	King's Gambit Accepted: Rosentreter Gambit, Bird Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Ne5 Qh4+ 6. g3
    C37	King's Gambit Accepted: Rosentreter Gambit, Sörensen Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Nc3
    C37	King's Gambit Accepted: Rosentreter Gambit, Testa Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Bxf4
    C37	King's Gambit Accepted: Salvio Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5
    C37	King's Gambit Accepted: Salvio Gambit, Anderssen Counterattack	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6 7. d4 d6
    C37	King's Gambit Accepted: Salvio Gambit, Cochrane Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 f3
    C37	King's Gambit Accepted: Salvio Gambit, Santa Maria Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nf6
    C37	King's Gambit Accepted: Salvio Gambit, Silberschmidt Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6
    C37	King's Gambit Accepted: Salvio Gambit, Viennese Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nc6
    C37	King's Gambit Accepted: Silberschmidt Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Ne5 Qh4+ 6. Kf1 Nh6 7. d4 f3
    C37	King's Gambit Accepted: Sörensen Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Ne5
    C38	King's Gambit Accepted: Greco Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. h4 h6 6. d4 d6 7. Nc3 c6 8. hxg5 hxg5 9. Rxh8 Bxh8 10. Ne5
    C38	King's Gambit Accepted: Hanstein Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. O-O
    C38	King's Gambit Accepted: Mayet Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. d4 d6 6. c3
    C38	King's Gambit Accepted: Philidor Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7 5. h4
    C38	King's Gambit Accepted: Philidor Gambit, Schultz Variation	1. e4 e5 2. f4 exf4 3. Nf3 h6 4. Bc4 d6 5. d4 g5 6. h4 Bg7 7. Qd3
    C38	King's Gambit Accepted: Traditional Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 Bg7
    C39	King's Gambit Accepted: Allgaier Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5
    C39	King's Gambit Accepted: Allgaier Gambit, Thorold Attack	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. d4
    C39	King's Gambit Accepted: Allgaier Gambit, Urusov Attack	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Bc4+
    C39	King's Gambit Accepted: Allgaier, Blackburne Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Nc3
    C39	King's Gambit Accepted: Allgaier, Cook Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. d4 d5 8. Bxf4 dxe4 9. Bc4+ Kg7 10. Be5+
    C39	King's Gambit Accepted: Allgaier, Horny Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Qxg4 Nf6 8. Qxf4 Bd6
    C39	King's Gambit Accepted: Allgaier, Schlechter Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 Nf6
    C39	King's Gambit Accepted: Allgaier, Urusov Attack	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7 Kxf7 7. Bc4+ d5 8. Bxd5+ Kg7 9. d4
    C39	King's Gambit Accepted: Kieseritzky Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5
    C39	King's Gambit Accepted: Kieseritzky Gambit, Anderssen Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6
    C39	King's Gambit Accepted: Kieseritzky Gambit, Anderssen-Cordel Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. d4 Nh5 9. Bxf4 Nxf4
    C39	King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6
    C39	King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, Rubinstein Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. d4
    C39	King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, de Riviere Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Nxg4 d5
    C39	King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5
    C39	King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5 6. d4 Nf6 7. Bxf4
    C39	King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense, Caro Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d5 6. d4 Nf6 7. Bxf4 Nxe4 8. Nd2
    C39	King's Gambit Accepted: Kieseritzky Gambit, Cotter Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ng5 h6 6. Nxf7
    C39	King's Gambit Accepted: Kieseritzky Gambit, Kolisch Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d6
    C39	King's Gambit Accepted: Kieseritzky Gambit, Long Whip	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 h5
    C39	King's Gambit Accepted: Kieseritzky Gambit, Neumann Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nc6
    C39	King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Bg7
    C39	King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense Deferred	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bg7
    C39	King's Gambit Accepted: Kieseritzky Gambit, Rice Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. O-O Bxe5
    C39	King's Gambit Accepted: Kieseritzky Gambit, Rosenthal Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Qe7
    C39	King's Gambit Accepted: Kieseritzky, Long Whip Defense, Jaenisch Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 h5 6. Bc4 Rh7 7. d4 Bh6 8. Nc3
    C39	King's Gambit Accepted: Kieseritzky, Polerio Defense	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Be7
    C39	King's Gambit Accepted: Kieseritzky, Rice Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. O-O
    C39	King's Gambit Accepted: Kieseritzky, Salvio Defense, Cozio Variation	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Qe7 6. d4 f5 7. Bc4
    C39	King's Gambit Accepted: King's Knight's Gambit	1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4
    C40	Elephant Gambit	1. e4 e5 2. Nf3 d5
    C40	Elephant Gambit: Maróczy Gambit	1. e4 e5 2. Nf3 d5 3. exd5 Bd6
    C40	Elephant Gambit: Paulsen Countergambit	1. e4 e5 2. Nf3 d5 3. exd5 e4
    C40	Elephant Gambit: Wasp Variation	1. e4 e5 2. Nf3 d5 3. Nxe5 dxe4 4. Bc4 Qg5
    C40	Gunderam Defense	1. e4 e5 2. Nf3 Qe7
    C40	King's Knight Opening	1. e4 e5 2. Nf3
    C40	King's Pawn Game: Busch-Gass Gambit	1. e4 e5 2. Nf3 Bc5
    C40	King's Pawn Game: Busch-Gass Gambit, Chiodini Gambit	1. e4 e5 2. Nf3 Bc5 3. Nxe5 Nc6
    C40	King's Pawn Game: Damiano Defense	1. e4 e5 2. Nf3 f6
    C40	King's Pawn Game: Damiano Defense, Damiano Gambit	1. e4 e5 2. Nf3 f6 3. Nxe5 fxe5 4. Qh5+ g6 5. Qxe5+ Qe7 6. Qxh8
    C40	King's Pawn Game: Damiano Defense, Damiano Gambit, Chigorin Gambit	1. e4 e5 2. Nf3 f6 3. Nxe5 Qe7 4. Nf3 d5
    C40	King's Pawn Game: Gunderam Defense, Gunderam Gambit	1. e4 e5 2. Nf3 Qe7 3. Bc4 f5
    C40	King's Pawn Game: Gunderam Gambit	1. e4 e5 2. Nf3 c6
    C40	King's Pawn Game: La Bourdonnais Gambit	1. e4 e5 2. Nf3 Qf6 3. Bc4 Qg6 4. O-O
    C40	King's Pawn Game: McConnell Defense	1. e4 e5 2. Nf3 Qf6
    C40	Latvian Gambit	1. e4 e5 2. Nf3 f5
    C40	Latvian Gambit Accepted	1. e4 e5 2. Nf3 f5 3. exf5
    C40	Latvian Gambit Accepted: Bilguer Variation	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4
    C40	Latvian Gambit Accepted: Bronstein Attack	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Be2
    C40	Latvian Gambit Accepted: Bronstein Gambit	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Qh5+ g6 7. Qe2
    C40	Latvian Gambit Accepted: Foltys Variation	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4 fxe4 5. d3
    C40	Latvian Gambit Accepted: Foltys-Leonhardt Variation	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4
    C40	Latvian Gambit Accepted: Leonhardt Variation	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. Nc4 fxe4 5. Nc3
    C40	Latvian Gambit Accepted: Main Line	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4
    C40	Latvian Gambit Accepted: Nimzowitsch Attack	1. e4 e5 2. Nf3 f5 3. Nxe5 Qf6 4. d4 d6 5. Nc4 fxe4 6. Ne3
    C40	Latvian Gambit: Behting Variation	1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Qg5 5. Nf7 Qxg2 6. Rf1 d5 7. Nxh8 Nf6
    C40	Latvian Gambit: Corkscrew Countergambit	1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Nf6
    C40	Latvian Gambit: Corkscrew Gambit	1. e4 e5 2. Nf3 f5 3. Nxe5 Nf6 4. Bc4 fxe4 5. Nf7 Qe7 6. Nxh8 d5
    C40	Latvian Gambit: Diepstraten Countergambit	1. e4 e5 2. Nf3 f5 3. c4
    C40	Latvian Gambit: Fraser Defense	1. e4 e5 2. Nf3 f5 3. Nxe5 Nc6
    C40	Latvian Gambit: Greco Variation	1. e4 e5 2. Nf3 f5 3. Nxe5 Qe7
    C40	Latvian Gambit: Lobster Gambit	1. e4 e5 2. Nf3 f5 3. g4
    C40	Latvian Gambit: Mason Countergambit	1. e4 e5 2. Nf3 f5 3. d4
    C40	Latvian Gambit: Mayet Attack	1. e4 e5 2. Nf3 f5 3. Bc4
    C40	Latvian Gambit: Mayet Attack, Morgado Defense	1. e4 e5 2. Nf3 f5 3. Bc4 Nf6
    C40	Latvian Gambit: Mayet Attack, Poisoned Pawn Variation	1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 Qg5 5. d4 Qxg2
    C40	Latvian Gambit: Mayet Attack, Polerio-Svedenborg Variation	1. e4 e5 2. Nf3 f5 3. Bc4 fxe4 4. Nxe5 d5
    C40	Latvian Gambit: Mayet Attack, Strautins Gambit	1. e4 e5 2. Nf3 f5 3. Bc4 b5
    C40	Latvian Gambit: Mlotkowski Variation	1. e4 e5 2. Nf3 f5 3. Nc3
    C40	Latvian Gambit: Senechaud Gambit	1. e4 e5 2. Nf3 f5 3. b4
    C41	Philidor Defense	1. e4 e5 2. Nf3 d6
    C41	Philidor Defense	1. e4 e5 2. Nf3 d6 3. d4
    C41	Philidor Defense	1. e4 e5 2. Nf3 d6 3. Bc4
    C41	Philidor Defense	1. e4 e5 2. Nf3 d6 3. Bc4 Be7
    C41	Philidor Defense: Albin-Blackburne Gambit	1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Nd7
    C41	Philidor Defense: Berger Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 Nf6 5. Nc3 Be7 6. Be2 O-O 7. O-O c5 8. Nf3 Nc6 9. Bg5 Be6 10. Re1
    C41	Philidor Defense: Bird Gambit	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. c3
    C41	Philidor Defense: Boden Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Qxd4 Bd7
    C41	Philidor Defense: Exchange Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4
    C41	Philidor Defense: Exchange Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4
    C41	Philidor Defense: Exchange Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 Nf6
    C41	Philidor Defense: Hanham Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7
    C41	Philidor Defense: Hanham Variation, Delmar Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. c3
    C41	Philidor Defense: Hanham Variation, Krause Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. O-O
    C41	Philidor Defense: Hanham Variation, Schlechter Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. Nc3
    C41	Philidor Defense: Hanham Variation, Sharp Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 Nb6
    C41	Philidor Defense: Hanham Variation, Steiner Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. O-O Be7 6. dxe5
    C41	Philidor Defense: Hanham, Kmoch Variation	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Bc4 c6 5. Ng5
    C41	Philidor Defense: Larsen Variation	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 g6
    C41	Philidor Defense: Lion Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7
    C41	Philidor Defense: Lion Variation, Bishop Sacrifice	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Bxf7+
    C41	Philidor Defense: Lion Variation, Delayed Bishop Sacrifice	1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. Nf3 e5 5. Bc4 Be7 6. dxe5 dxe5 7. Bxf7+
    C41	Philidor Defense: Lion Variation, Forcing Line	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Ng5 O-O 7. Bxf7+ Rxf7 8. Ne6
    C41	Philidor Defense: Lion Variation, Lion's Claw, with Bc4 and h6	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. O-O h6
    C41	Philidor Defense: Lion Variation, Lion's Claw, with Be2 and c6	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Be2 Be7 6. O-O c6
    C41	Philidor Defense: Lion Variation, Shirov Gambit	1. e4 e5 2. Nf3 d6 3. d4 Nd7 4. Nc3 Ngf6 5. g4
    C41	Philidor Defense: Lion Variation, Sozin Variation	1. e4 d6 2. d4 Nf6 3. Nc3 e5 4. Nf3 Nbd7 5. Bc4 Be7 6. O-O O-O 7. Qe2 c6 8. a4 exd4
    C41	Philidor Defense: Lopez Countergambit	1. e4 e5 2. Nf3 d6 3. Bc4 f5
    C41	Philidor Defense: Lopez Countergambit, Jaenisch Variation	1. e4 e5 2. Nf3 d6 3. d4 f5 4. Bc4 exd4 5. Ng5 Nh6 6. Nxh7
    C41	Philidor Defense: Morphy Gambit	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Bc4
    C41	Philidor Defense: Nimzowitsch Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6
    C41	Philidor Defense: Nimzowitsch Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5
    C41	Philidor Defense: Nimzowitsch Variation, Klein Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Bc4
    C41	Philidor Defense: Nimzowitsch Variation, Rellstab Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5 Nxe4 5. Qd5
    C41	Philidor Defense: Nimzowitsch Variation, Sokolsky Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. dxe5 Nxe4 5. Nbd2
    C41	Philidor Defense: Nimzowitsch, Larobok Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Nc3 Nbd7 5. Bc4 Be7 6. Ng5 O-O 7. Bxf7+
    C41	Philidor Defense: Nimzowitsch, Locock Variation	1. e4 e5 2. Nf3 d6 3. d4 Nf6 4. Ng5
    C41	Philidor Defense: Paulsen Attack	1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Nxd4 d5 5. exd5
    C41	Philidor Defense: Philidor Countergambit	1. e4 e5 2. Nf3 d6 3. d4 f5
    C41	Philidor Defense: Philidor Countergambit, Berger Variation	1. e4 e5 2. Nf3 d6 3. d4 f5 4. dxe5 fxe4 5. Ng5 d5 6. e6 Bc5 7. Nc3
    C41	Philidor Defense: Philidor Countergambit, Zukertort Variation	1. e4 e5 2. Nf3 d6 3. d4 f5 4. Nc3
    C41	Philidor Defense: Philidor Countergambit, del Rio Attack	1. e4 e5 2. Nf3 d6 3. d4 f5 4. dxe5 fxe4 5. Ng5 d5 6. e6
    C41	Philidor Defense: Philidor Gambit	1. e4 e5 2. Nf3 d6 3. d4 Bd7
    C41	Philidor Defense: Steinitz Variation	1. e4 e5 2. Nf3 d6 3. Bc4 Be7 4. c3
    C42	Russian Game	1. e4 e5 2. Nf3 Nf6
    C42	Russian Game	1. e4 e5 2. Nf3 Nf6 3. Nxe5
    C42	Russian Game	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6
    C42	Russian Game	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3
    C42	Russian Game	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4
    C42	Russian Game: Classical Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4
    C42	Russian Game: Classical Attack, Berger Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1 Bg4 9. c3 f5 10. Nbd2
    C42	Russian Game: Classical Attack, Chigorin Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1
    C42	Russian Game: Classical Attack, Chigorin Variation, Browne Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 9. cxd5
    C42	Russian Game: Classical Attack, Chigorin Variation, Main Line	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4 Nb4 9. Be2
    C42	Russian Game: Classical Attack, Closed Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 Nf6
    C42	Russian Game: Classical Attack, Jaenisch Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. c4
    C42	Russian Game: Classical Attack, Krause Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. Re1 Bg4 9. c3 f5 10. c4
    C42	Russian Game: Classical Attack, Marshall Trap	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 Bg4 9. cxd5 f5 10. Re1 Bxh2+
    C42	Russian Game: Classical Attack, Marshall Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6
    C42	Russian Game: Classical Attack, Marshall Variation, Chinese Gambit	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Re1 Bg4
    C42	Russian Game: Classical Attack, Maróczy Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O Nc6 8. Re1 Bg4 9. c3 f5 10. c4 Bh4
    C42	Russian Game: Classical Attack, Mason Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Be7 7. O-O O-O
    C42	Russian Game: Classical Attack, Mason-Showalter Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6
    C42	Russian Game: Classical Attack, Staunton Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6
    C42	Russian Game: Classical Attack, Tarrasch Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 Bg4
    C42	Russian Game: Cochrane Gambit	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7
    C42	Russian Game: Cochrane Gambit, Bishop Check Line	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7 Kxf7 5. Bc4+
    C42	Russian Game: Cochrane Gambit, Center Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7 Kxf7 5. d4
    C42	Russian Game: Cozio Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Qe2
    C42	Russian Game: Damiano Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nxe4
    C42	Russian Game: Damiano Variation, Kholmov Gambit	1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nxe4 4. Qe2 Qe7
    C42	Russian Game: French Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d3
    C42	Russian Game: Italian Variation	1. e4 e5 2. Nf3 Nf6 3. Bc4
    C42	Russian Game: Karklins-Martinovsky Variation	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nd3
    C42	Russian Game: Kaufmann Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. c4
    C42	Russian Game: Millennium Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Bd3
    C42	Russian Game: Moody Gambit	1. e4 e5 2. Nf3 Nf6 3. Qe2 Nc6 4. d4
    C42	Russian Game: Nimzowitsch Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Nc3
    C42	Russian Game: Paulsen Attack	1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nc4
    C42	Russian Game: Stafford Gambit	1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6
    C42	Russian Game: Stafford Gambit	1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6
    C42	Russian Game: Three Knights Game	1. e4 e5 2. Nf3 Nf6 3. Nc3
    C43	Bishop's Opening: Urusov Gambit	1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3
    C43	Bishop's Opening: Urusov Gambit, Keidansky Gambit	1. e4 e5 2. Bc4 Nf6 3. d4 exd4 4. Nf3 Nxe4 5. Qxd4
    C43	Russian Game: Modern Attack	1. e4 e5 2. Nf3 Nf6 3. d4
    C43	Russian Game: Modern Attack	1. e4 e5 2. Nf3 Nf6 3. d4 exd4
    C43	Russian Game: Modern Attack, Bardeleben Variation	1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qe2 Nc5 6. Nxd4 Nc6
    C43	Russian Game: Modern Attack, Center Attack	1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qxd4
    C43	Russian Game: Modern Attack, Center Variation	1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3
    C43	Russian Game: Modern Attack, Murrey Variation	1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3 Nc6
    C43	Russian Game: Modern Attack, Steinitz Variation	1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Qe2
    C43	Russian Game: Modern Attack, Symmetrical Variation	1. e4 e5 2. Nf3 Nf6 3. d4 d5
    C43	Russian Game: Modern Attack, Tal Gambit	1. e4 e5 2. Nf3 Nf6 3. d4 exd4 4. e5 Ne4 5. Bb5
    C43	Russian Game: Modern Attack, Trifunovic Variation	1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. Bd3 d5 5. Nxe5 Bd6 6. O-O O-O 7. c4 Bxe5
    C44	Dresden Opening: The Goblin	1. e4 e5 2. Nf3 Nc6 3. c4 Nf6 4. Nxe5
    C44	Irish Gambit	1. e4 e5 2. Nf3 Nc6 3. Nxe5
    C44	King's Knight Opening: Konstantinopolsky	1. e4 e5 2. Nf3 Nc6 3. g3
    C44	King's Knight Opening: Normal Variation	1. e4 e5 2. Nf3 Nc6
    C44	King's Pawn Game: Dresden Opening	1. e4 e5 2. Nf3 Nc6 3. c4
    C44	King's Pawn Game: Pachman Wing Gambit	1. e4 e5 2. Nf3 Nc6 3. b4
    C44	King's Pawn Game: Schulze-Müller Gambit	1. e4 e5 2. Nf3 Nc6 3. Nxe5 Nxe5 4. d4
    C44	King's Pawn Game: Tayler Opening	1. e4 e5 2. Nf3 Nc6 3. Be2
    C44	King's Pawn Game: Tayler Opening	1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d4
    C44	King's Pawn Game: Tayler Opening, Basman Gambit	1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d4 exd4 5. e5
    C44	King's Pawn Game: Tayler Opening, Inverted Hanham	1. e4 e5 2. Nf3 Nc6 3. Be2 Nf6 4. d3 d5 5. Nbd2
    C44	Latvian Gambit: Clam Gambit	1. e4 e5 2. Nf3 Nc6 3. d3 f5 4. exf5
    C44	Ponziani Opening	1. e4 e5 2. Nf3 Nc6 3. c3
    C44	Ponziani Opening: Caro Gambit	1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 Bd7
    C44	Ponziani Opening: Jaenisch Counterattack	1. e4 e5 2. Nf3 Nc6 3. c3 Nf6
    C44	Ponziani Opening: Leonhardt Variation	1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 Nf6
    C44	Ponziani Opening: Neumann Gambit	1. e4 e5 2. Nf3 Nc6 3. c3 Nf6 4. Bc4
    C44	Ponziani Opening: Ponziani Countergambit	1. e4 e5 2. Nf3 Nc6 3. c3 f5
    C44	Ponziani Opening: Ponziani Countergambit, Schmidt Attack	1. e4 e5 2. Nf3 Nc6 3. c3 f5 4. d4 d6 5. d5
    C44	Ponziani Opening: Romanishin Variation	1. e4 e5 2. Nf3 Nc6 3. c3 Be7
    C44	Ponziani Opening: Réti Variation	1. e4 e5 2. Nf3 Nc6 3. c3 Nge7
    C44	Ponziani Opening: Spanish Variation	1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Bb5
    C44	Ponziani Opening: Spanish Variation, Harrwitz Attack, Nikitin Gambit	1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Bb5 dxe4 5. Nxe5 Qd5 6. Qa4
    C44	Ponziani Opening: Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. c3 d5 4. Qa4 f6
    C44	Ponziani Opening: Vukovic Gambit	1. e4 e5 2. Nf3 Nc6 3. c3 Nf6 4. d4 Nxe4 5. d5 Bc5
    C44	Scotch Game	1. e4 e5 2. Nf3 Nc6 3. d4
    C44	Scotch Game	1. e4 e5 2. Nf3 Nc6 3. d4 exd4
    C44	Scotch Game: Benima Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4
    C44	Scotch Game: Cochrane Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3 Ba5 7. e5
    C44	Scotch Game: Cochrane-Shumov Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Nxf7 Nxf7 7. Bxf7+ Kxf7 8. Qh5+ g6 9. Qxc5 d5
    C44	Scotch Game: Göring Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3
    C44	Scotch Game: Göring Gambit, Bardeleben Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Bc4 Nf6 6. Nxc3 Bb4
    C44	Scotch Game: Göring Gambit, Double Pawn Sacrifice	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Bc4
    C44	Scotch Game: Göring Gambit, Main Line	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 Bb4
    C44	Scotch Game: Hanneken Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. O-O cxb2 7. Bxb2 Nf6 8. Ng5 O-O 9. e5 Nxe5
    C44	Scotch Game: Haxo Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5
    C44	Scotch Game: Lolli Variation	1. e4 e5 2. Nf3 Nc6 3. d4 Nxd4
    C44	Scotch Game: Napoleon Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 Nxd4 4. Nxd4 exd4 5. Bc4
    C44	Scotch Game: Relfsson Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bb5
    C44	Scotch Game: Scotch Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4
    C44	Scotch Game: Scotch Gambit, Advance Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. e5
    C44	Scotch Game: Scotch Gambit, Cochrane-Anderssen Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O d6 6. c3 Bg4
    C44	Scotch Game: Scotch Gambit, Dubois Réti Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4
    C44	Scotch Game: Scotch Gambit, Göring Gambit Declined	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 d5
    C44	Scotch Game: Scotch Gambit, Kingside Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 Ng4
    C44	Scotch Game: Scotch Gambit, London Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+
    C44	Scotch Game: Scotch Gambit, Sarratt Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5
    C44	Scotch Game: Sea-Cadet Mate	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 dxc3 5. Nxc3 d6 6. Bc4 Bg4 7. O-O Ne5 8. Nxe5 Bxd1 9. Bxf7+ Ke7 10. Nd5#
    C44	Scotch Game: Vitzthum Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 Nh6 6. Qh5
    C45	Scotch Game	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4
    C45	Scotch Game	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2
    C45	Scotch Game: Alekhine Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. e5
    C45	Scotch Game: Blumenfeld Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. Nb5
    C45	Scotch Game: Braune Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Be3
    C45	Scotch Game: Classical Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5
    C45	Scotch Game: Classical Variation, Blackburne Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2
    C45	Scotch Game: Classical Variation, Intermezzo Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6
    C45	Scotch Game: Classical Variation, Millennium Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Qg6
    C45	Scotch Game: Fraser Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nf3
    C45	Scotch Game: Ghulam-Kassim Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nxd4 5. Qxd4 d6 6. Bd3
    C45	Scotch Game: Gottschall Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Qd2 d5 8. Nb5 Bxe3 9. Qxe3 O-O 10. Nxc7 Rb8 11. Nxd5 Nxd5 12. exd5 Nb4
    C45	Scotch Game: Horwitz Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5
    C45	Scotch Game: Horwitz Attack, Blackburne Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Qxd2
    C45	Scotch Game: Malaniuk Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bb4+
    C45	Scotch Game: Meitner Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Nc2
    C45	Scotch Game: Mieses Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5
    C45	Scotch Game: Modern Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Bb4
    C45	Scotch Game: Paulsen Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5
    C45	Scotch Game: Paulsen Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nf5
    C45	Scotch Game: Paulsen, Gunsberg Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bb5 Nd8
    C45	Scotch Game: Potter Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3
    C45	Scotch Game: Romanishin Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3 Bb4+
    C45	Scotch Game: Rosenthal Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nb5 Bb4+ 6. Bd2 Qxe4+ 7. Be2 Kd8 8. O-O Bxd2 9. Nxd2 Qg6
    C45	Scotch Game: Schmidt Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6
    C45	Scotch Game: Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4
    C45	Scotch Game: Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3
    C45	Scotch Game: Tartakower Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. Nd2
    C46	Three Knights Opening	1. e4 e5 2. Nf3 Nc6 3. Nc3
    C46	Three Knights Opening	1. e4 e5 2. Nf3 Nc6 3. Nc3 Bb4
    C46	Three Knights Opening: Schlechter Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Bb4 4. Nd5 Nf6
    C46	Three Knights Opening: Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Nc3 g6
    C46	Three Knights Opening: Steinitz-Rosenthal Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 g6 4. d4 exd4 5. Nd5
    C46	Three Knights Opening: Winawer Defense	1. e4 e5 2. Nf3 Nc6 3. Nc3 f5
    C47	Four Knights Game	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6
    C47	Four Knights Game: Gunsberg Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. a3
    C47	Four Knights Game: Halloween Gambit	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5
    C47	Four Knights Game: Halloween Gambit, Oldtimer Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5 Nxe5 5. d4 Ng6 6. e5 Ng8 7. Bc4 Bb4 8. Qf3 f5
    C47	Four Knights Game: Halloween Gambit, Plasma Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Nxe5 Nxe5 5. d4 Nc6 6. d5 Ne5 7. f4 Ng6 8. e5 Ng8 9. d6 cxd6 10. exd6 Qf6 11. Nb5 Rb8
    C47	Four Knights Game: Italian Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Nc3
    C47	Four Knights Game: Italian Variation, Noa Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Nc3 Nxe4 5. Bxf7+
    C47	Four Knights Game: Scotch Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4
    C47	Four Knights Game: Scotch Variation Accepted	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4
    C47	Four Knights Game: Scotch Variation, Belgrade Gambit	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nd5
    C47	Four Knights Game: Scotch Variation, Belgrade Gambit, Modern Defense	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nd5 Nxe4 6. Qe2 f5
    C47	Four Knights Game: Scotch Variation, Krause Gambit	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. Nxe5
    C47	Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. Nxe5 Qe7
    C47	Four Knights Game: Scotch Variation, Oxford Gambit	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 Bb4 5. d5 Nd4
    C47	Four Knights Game: Scotch Variation, Schmid Defense	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nxd4 Nxe4
    C48	Four Knights Game: Spanish Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5
    C48	Four Knights Game: Spanish Variation, Bardeleben Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5 5. O-O O-O 6. Nxe5 Nxe5 7. d4 Bd6 8. f4 Nc6 9. e5 Bb4
    C48	Four Knights Game: Spanish Variation, Classical Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bc5
    C48	Four Knights Game: Spanish Variation, Ranken Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 a6 5. Bxc6
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Be2
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation	1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Nd4 5. Nxe5 Qe7 6. f4
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation Accepted	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Nxd4
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation, Henneberger Variation	1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Nd4 5. O-O
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Gambit	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Ba4 Bc5 6. Nxe5 O-O
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation, Marshall Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Nxe5 Bc5 6. O-O O-O
    C48	Four Knights Game: Spanish Variation, Rubinstein Variation, Maróczy Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Nd4 5. Be2 Nxf3+ 6. Bxf3 Bc5 7. O-O O-O 8. d3 d6 9. Na4 Bb6
    C48	Four Knights Game: Spanish Variation, Spielmann Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 a6 5. Bxc6 dxc6 6. Nxe5 Nxe4 7. Nxe4 Qd4 8. O-O Qxe5 9. Re1 Be6 10. d4 Qd5
    C49	Four Knights Game: Spanish Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3
    C49	Four Knights Game: Spanish Variation, Alatortsev Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Qe7 7. Ne2 d5
    C49	Four Knights Game: Spanish Variation, Double Spanish	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4
    C49	Four Knights Game: Spanish Variation, Double Spanish	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3
    C49	Four Knights Game: Spanish Variation, Gunsberg Counterattack	1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Bb4 5. O-O O-O 6. Nd5 Nxd5 7. exd5 e4
    C49	Four Knights Game: Spanish Variation, Janowski Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3 7. bxc3 d6 8. Re1
    C49	Four Knights Game: Spanish Variation, Nimzowitsch Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. Bxc6
    C49	Four Knights Game: Spanish Variation, Svenonius Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 Bxc3 7. bxc3 d5
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7 9. Re1 Nd8 10. d4 Bg4
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Ne7
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Ne2
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation, Blake Variation	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Ne7 8. Nh4 c6 9. Bc4 d5 10. Bb3 Qd6
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation, Metger Unpin	1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7
    C49	Four Knights Game: Spanish Variation, Symmetrical Variation, Tarrasch Variation	1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Bb4 5. O-O O-O 6. d3 d6 7. Bg5 Be6
    C50	Four Knights Game: Italian Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 Nf6
    C50	Italian Game	1. e4 e5 2. Nf3 Nc6 3. Bc4
    C50	Italian Game: Anti-Fried Liver Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 h6
    C50	Italian Game: Blackburne-Kostić Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4
    C50	Italian Game: Classical Variation, Albin Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. c3
    C50	Italian Game: Deutz Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d4
    C50	Italian Game: Giuoco Pianissimo	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3
    C50	Italian Game: Giuoco Pianissimo, Canal Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5
    C50	Italian Game: Giuoco Pianissimo, Dubois Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5 5. Ng5 f4
    C50	Italian Game: Giuoco Pianissimo, Italian Four Knights Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3
    C50	Italian Game: Giuoco Pianissimo, Lucchini Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 f5
    C50	Italian Game: Giuoco Pianissimo, Normal	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5
    C50	Italian Game: Giuoco Piano	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5
    C50	Italian Game: Hungarian Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7
    C50	Italian Game: Hungarian Defense, Tartakower Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 4. d4 exd4 5. c3 Nf6 6. e5 Ne4
    C50	Italian Game: Jerome Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Bxf7+
    C50	Italian Game: Paris Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 d6
    C50	Italian Game: Rosentreter Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d4
    C50	Italian Game: Rousseau Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 f5
    C51	Italian Game: Evans Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4
    C51	Italian Game: Evans Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4
    C51	Italian Game: Evans Gambit Accepted	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4
    C51	Italian Game: Evans Gambit Declined	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6
    C51	Italian Game: Evans Gambit Declined	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4
    C51	Italian Game: Evans Gambit Declined, Cordel Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. Bb2
    C51	Italian Game: Evans Gambit Declined, Hicken Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5 7. Qf3 Qxe5 8. Qxf7+ Kd8 9. Bb2
    C51	Italian Game: Evans Gambit Declined, Hirschbach Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5
    C51	Italian Game: Evans Gambit Declined, Lange Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Nh6
    C51	Italian Game: Evans Gambit Declined, Pavlov Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Nh6 7. d4 d6 8. Bxh6 dxe5 9. Bxg7 Rg8 10. Bxf7+ Kxf7 11. Bxe5 Qg5 12. Nd2
    C51	Italian Game: Evans Gambit Declined, Showalter Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. a4 a6 6. Nc3
    C51	Italian Game: Evans Gambit Declined, Vasquez Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 5. b5 Na5 6. Nxe5 Qg5 7. Bxf7+ Ke7 8. Qh5
    C51	Italian Game: Evans Gambit, Anderssen Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7
    C51	Italian Game: Evans Gambit, Anderssen Variation, Cordel Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 6. d4 Na5
    C51	Italian Game: Evans Gambit, Fontaine Countergambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 b5
    C51	Italian Game: Evans Gambit, Fraser Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4
    C51	Italian Game: Evans Gambit, Fraser-Mortimer Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4 Bd7 11. Qb3 Na5 12. Bxf7+ Kf8 13. Qc2
    C51	Italian Game: Evans Gambit, Göring Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Na5 10. Bg5
    C51	Italian Game: Evans Gambit, Harding Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. cxd4 Bb4+ 8. Bd2
    C51	Italian Game: Evans Gambit, Hein Countergambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 d5
    C51	Italian Game: Evans Gambit, Mayet Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bf8
    C51	Italian Game: Evans Gambit, McDonnell Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5
    C51	Italian Game: Evans Gambit, McDonnell Defense, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6
    C51	Italian Game: Evans Gambit, Morphy Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3
    C51	Italian Game: Evans Gambit, Mortimer-Evans Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Bg4 10. Qa4 Bd7 11. Qb3 Na5 12. Bxf7+ Kf8 13. Qc2 Kxf7
    C51	Italian Game: Evans Gambit, Paulsen Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. d5 Na5 10. Bb2 Ne7
    C51	Italian Game: Evans Gambit, Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 Na5 10. Bg5 f6 11. Be3
    C51	Italian Game: Evans Gambit, Stone-Ware Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bd6
    C51	Italian Game: Evans Gambit, Ulvestad Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. d5 Na5 10. Bb2
    C52	Italian Game: Evans Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6
    C52	Italian Game: Evans Gambit, Alapin-Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bg4
    C52	Italian Game: Evans Gambit, Anderssen Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6 7. d4 exd4
    C52	Italian Game: Evans Gambit, Bronstein Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6
    C52	Italian Game: Evans Gambit, Compromised Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3
    C52	Italian Game: Evans Gambit, Compromised Defense, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Ba3
    C52	Italian Game: Evans Gambit, Compromised Defense, Potter Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qf6 9. e5 Qg6 10. Nxc3 Nge7 11. Rd1
    C52	Italian Game: Evans Gambit, Dufresne Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d3
    C52	Italian Game: Evans Gambit, Johner Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O b5
    C52	Italian Game: Evans Gambit, Laroche Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 Nf6
    C52	Italian Game: Evans Gambit, Lasker Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bb6
    C52	Italian Game: Evans Gambit, Leonhardt Countergambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 b5
    C52	Italian Game: Evans Gambit, Levenfish Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qb3 Qd7 8. dxe5 dxe5 9. O-O Bb6 10. Ba3 Na5 11. Nxe5
    C52	Italian Game: Evans Gambit, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5
    C52	Italian Game: Evans Gambit, Mieses Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Nge7
    C52	Italian Game: Evans Gambit, Pierce Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4
    C52	Italian Game: Evans Gambit, Richardson Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O Nf6 7. d4 O-O 8. Nxe5
    C52	Italian Game: Evans Gambit, Sanders-Alapin Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O d6 7. d4 Bd7
    C52	Italian Game: Evans Gambit, Slow Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. O-O
    C52	Italian Game: Evans Gambit, Sokolsky Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Bg5
    C52	Italian Game: Evans Gambit, Tartakower Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. Qb3
    C52	Italian Game: Evans Gambit, Waller Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O d6 8. Qb3
    C53	Italian Game: Bird's Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. b4
    C53	Italian Game: Classical Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3
    C53	Italian Game: Classical Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6
    C53	Italian Game: Classical Variation, Alexandre Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 f5
    C53	Italian Game: Classical Variation, Center Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4
    C53	Italian Game: Classical Variation, Center Holding Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6
    C53	Italian Game: Classical Variation, Closed Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7
    C53	Italian Game: Classical Variation, Giuoco Pianissimo	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3
    C53	Italian Game: Classical Variation, Giuoco Pianissimo, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 d6 6. O-O O-O 7. Re1 a6 8. Bb3 Ba7 9. h3
    C53	Italian Game: Classical Variation, Greco Gambit	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. c3 Nf6 6. e5 d5
    C53	Italian Game: Classical Variation, Greco Gambit, Anderssen Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 d5 7. Bb5 Ne4 8. cxd4 Bb4+
    C53	Italian Game: Classical Variation, La Bourdonnais Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 d6 5. d4 exd4 6. cxd4 Bb6
    C53	Italian Game: Classical Variation, Tarrasch Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. O-O d6 7. a4 a6 8. h3 Nf6 9. Re1
    C53	Italian Game: Giuoco Piano, Eisinger Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. d5 Nb8 7. d6
    C53	Italian Game: Giuoco Piano, Ghulam-Kassim Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 Ne4 7. Bd5 Nxf2 8. Kxf2 dxc3+ 9. Kg3
    C53	Italian Game: Giuoco Piano, Mestel Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. d4 Bb6 6. Bg5
    C53	Italian Game: Scotch Gambit, Walbrodt-Baird Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. O-O
    C54	Italian Game: Classical Variation, Greco Gambit, Greco Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3
    C54	Italian Game: Classical Variation, Greco Gambit, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3
    C54	Italian Game: Classical Variation, Greco Gambit, Moeller-Bayonet Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. g4
    C54	Italian Game: Classical Variation, Greco Gambit, Moeller-Therkatz Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5
    C54	Italian Game: Classical Variation, Greco Gambit, Traditional Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4
    C54	Italian Game: Giuoco Piano, Aitken Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 Bxc3 10. Ba3
    C54	Italian Game: Giuoco Piano, Bernstein Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Nxc3 9. bxc3 Bxc3 10. Qb3 d5
    C54	Italian Game: Giuoco Piano, Cracow Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Kf1
    C54	Italian Game: Giuoco Piano, Greco's Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3
    C54	Italian Game: Giuoco Piano, Krause Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Nxe4 8. Bxb4 Nxb4 9. Bxf7+ Kxf7 10. Qb3+ d5 11. Ne5+ Kf6 12. f3
    C54	Italian Game: Giuoco Piano, Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. bxc3 d5 10. Ba3
    C54	Italian Game: Giuoco Piano, Therkatz-Herzog Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 O-O 14. Nxh7
    C55	Italian Game: Giuoco Piano	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 d6
    C55	Italian Game: Giuoco Piano, Holzhausen Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 d6 8. f4 Qe7 9. fxe5 dxe5 10. Nc3
    C55	Italian Game: Giuoco Piano, Rosentreter Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. d4 Bxd4 6. Nxd4 Nxd4 7. Bg5 h6 8. Bh4 g5 9. f4
    C55	Italian Game: Scotch Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O
    C55	Italian Game: Scotch Gambit, Janowski Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O d6
    C55	Italian Game: Scotch Gambit, Max Lange Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5
    C55	Italian Game: Scotch Gambit, Max Lange Attack Accepted	1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d4 exd4 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. fxg7
    C55	Italian Game: Scotch Gambit, Max Lange Attack, Long Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. Nce4
    C55	Italian Game: Scotch Gambit, Max Lange Attack, Spielmann Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5 Ng4
    C55	Italian Game: Scotch Gambit, de Riviere Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Be7
    C55	Italian Game: Scotch Invitation Declined	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 d6
    C55	Italian Game: Two Knights Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6
    C55	Italian Game: Two Knights Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 Nxe4
    C55	Italian Game: Two Knights Defense, Keidansky Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. e5 d5 6. Bb5 Ne4 7. Nxd4 Bc5 8. Nxc6 Bxf2+ 9. Kf1 Qh4
    C55	Italian Game: Two Knights Defense, Max Lange Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Bc5 6. e5
    C55	Italian Game: Two Knights Defense, Max Lange Attack, Berger Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. g4 Qg6 12. Nce4 Bb6 13. f4 O-O-O
    C55	Italian Game: Two Knights Defense, Max Lange Attack, Krause Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 Ng4 7. c3
    C55	Italian Game: Two Knights Defense, Max Lange Attack, Loman Defense	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O Nf6 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 g6
    C55	Italian Game: Two Knights Defense, Max Lange Attack, Rubinstein Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Bc5 6. e5 d5 7. exf6 dxc4 8. Re1+ Be6 9. Ng5 Qd5 10. Nc3 Qf5 11. Nce4 Bf8
    C55	Italian Game: Two Knights Defense, Modern Bishop's Opening	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3
    C55	Italian Game: Two Knights Defense, Open Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4
    C55	Italian Game: Two Knights Defense, Perreux Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. Ng5
    C56	Italian Game: Scotch Gambit, Anderssen Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3
    C56	Italian Game: Scotch Gambit, Anderssen Attack, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4 Be6 10. Bd2 Qd5 11. Bg5
    C56	Italian Game: Scotch Gambit, Canal Variation	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Nxe4 6. Re1 d5 7. Nc3
    C56	Italian Game: Scotch Gambit, Double Gambit Accepted	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4
    C56	Italian Game: Scotch Gambit, Nakhmanson Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d4 exd4 5. O-O Nxe4 6. Nc3
    C56	Italian Game: Two Knights Defense, Yurdansky Attack	1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4 Be6 10. Bg5 h6 11. Bh4 g5 12. Nf6+ Ke7 13. b4
    C57	Italian Game: Two Knights Defense, Fegatello Attack, Leonhardt Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6 11. d4 Nc7
    C57	Italian Game: Two Knights Defense, Fried Liver Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7
    C57	Italian Game: Two Knights Defense, Fritz Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4
    C57	Italian Game: Two Knights Defense, Fritz, Gruber Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nd4 6. c3 b5 7. Bf1 Nxd5 8. Ne4
    C57	Italian Game: Two Knights Defense, Kloss Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nb4
    C57	Italian Game: Two Knights Defense, Knight Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5
    C57	Italian Game: Two Knights Defense, Knight Attack, Normal Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5
    C57	Italian Game: Two Knights Defense, Lolli Attack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4
    C57	Italian Game: Two Knights Defense, Pincus Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. d4 Bb4+
    C57	Italian Game: Two Knights Defense, Ponziani-Steinitz Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Nxe4
    C57	Italian Game: Two Knights Defense, Traxler Counterattack	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5
    C57	Italian Game: Two Knights Defense, Traxler Counterattack, Bishop Sacrifice Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+
    C57	Italian Game: Two Knights Defense, Traxler Counterattack, King March Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7 Bxf2+ 6. Kxf2 Nxe4+ 7. Ke3
    C57	Italian Game: Two Knights Defense, Traxler Counterattack, Knight Sacrifice Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Nxf7
    C57	Italian Game: Two Knights Defense, Traxler Variation, Trencianske-Teplice Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5 5. Bxf7+ Ke7 6. d4
    C57	Italian Game: Two Knights Defense, Ulvestad Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5
    C57	Italian Game: Two Knights Defense, Ulvestad Variation, Kurkin Gambit	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 6. Bf1 h6 7. Nxf7
    C58	Italian Game: Two Knights Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2
    C58	Italian Game: Two Knights Defense, Blackburne Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 cxb5
    C58	Italian Game: Two Knights Defense, Colman Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 Rb8
    C58	Italian Game: Two Knights Defense, Maróczy Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3 h6 7. Nf3 e4 8. Qe2 Nxc4 9. dxc4 Be7
    C58	Italian Game: Two Knights Defense, Paoli Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3 Qc7 9. Bd3
    C58	Italian Game: Two Knights Defense, Polerio Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5
    C58	Italian Game: Two Knights Defense, Polerio Defense, Bishop Check Line	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+
    C58	Italian Game: Two Knights Defense, Polerio Defense, Bogoljubov Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Qf3
    C58	Italian Game: Two Knights Defense, Polerio Defense, Kieseritzky Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3
    C58	Italian Game: Two Knights Defense, Polerio Defense, Yankovich Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. d3 h6 7. Nf3 e4 8. Qe2 Nxc4 9. dxc4 Bc5 10. Nfd2
    C59	Italian Game: Two Knights Defense, Knorre Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Bd6 11. d4 Qc7 12. Bd2
    C59	Italian Game: Two Knights Defense, Polerio Defense, Göring Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nf3 e4 10. Ne5 Qc7
    C59	Italian Game: Two Knights Defense, Polerio Defense, Suhle Defense	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6
    C59	Italian Game: Two Knights Defense, Steinitz Variation	1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8. Be2 h6 9. Nh3
    C60	Ruy Lopez	1. e4 e5 2. Nf3 Nc6 3. Bb5
    C60	Ruy Lopez: Alapin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bb4
    C60	Ruy Lopez: Alapin Defense, Alapin Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bb4 4. c3 Ba5 5. Bxc6 dxc6
    C60	Ruy Lopez: Brentano Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 g5
    C60	Ruy Lopez: Bulgarian Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a5
    C60	Ruy Lopez: Cozio Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7
    C60	Ruy Lopez: Cozio Defense, Paulsen Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 4. Nc3 g6
    C60	Ruy Lopez: Cozio Defense, Tartakower Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. d4 exd4 5. Nxd4 Bg7 6. Be3 Nge7 7. Nc3 O-O 8. Qd2 d5
    C60	Ruy Lopez: Fianchetto Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 g6
    C60	Ruy Lopez: Fianchetto Defense, Kevitz Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. c3 f5
    C60	Ruy Lopez: Lucena Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Be7
    C60	Ruy Lopez: Nürnberg Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f6
    C60	Ruy Lopez: Pollock Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Na5
    C60	Ruy Lopez: Retreat Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nb8
    C60	Ruy Lopez: Rotary-Albany Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 b6
    C60	Ruy Lopez: Spanish Countergambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 d5
    C60	Ruy Lopez: Spanish Countergambit, Harding Countergambit, Fricke Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 d5 4. Nxe5 Qg5 5. O-O
    C60	Ruy Lopez: Spanish Countergambit, Harding Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 d5 4. Nxe5 Qg5 5. Nxc6
    C60	Ruy Lopez: Vinogradov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Qe7
    C61	Ruy Lopez: Bird Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4
    C61	Ruy Lopez: Bird Variation, Paulsen Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nd4 4. Nxd4 exd4 5. O-O Ne7
    C62	Ruy Lopez: Old Steinitz Defense, Semi-Duras Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. c4
    C62	Ruy Lopez: Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 d6
    C62	Ruy Lopez: Steinitz Defense, Center Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 exd4 5. O-O
    C62	Ruy Lopez: Steinitz Defense, Nimzowitsch Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. Bxc6
    C63	Ruy Lopez: Schliemann Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5
    C63	Ruy Lopez: Schliemann Defense, Classical Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5
    C63	Ruy Lopez: Schliemann Defense, Dyckhoff Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3
    C63	Ruy Lopez: Schliemann Defense, Exchange Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Bxc6
    C63	Ruy Lopez: Schliemann Defense, Jaenisch Gambit Accepted	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. exf5
    C63	Ruy Lopez: Schliemann Defense, Kostić Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 Be7
    C63	Ruy Lopez: Schliemann Defense, Möhring Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qd5
    C63	Ruy Lopez: Schliemann Defense, Schönemann Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. d4
    C63	Ruy Lopez: Schliemann Defense, Tartakower Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 Nf6
    C64	Ruy Lopez: Classical Defense, Benelux Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6
    C64	Ruy Lopez: Classical Defense, Boden Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 Qe7
    C64	Ruy Lopez: Classical Defense, Zaitsev Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. O-O Nd4 5. b4
    C64	Ruy Lopez: Classical Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5
    C64	Ruy Lopez: Classical Variation, Central Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3
    C64	Ruy Lopez: Classical Variation, Charousek Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 Bb6
    C64	Ruy Lopez: Classical Variation, Cordel Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 f5
    C64	Ruy Lopez: Classical Variation, Konikowski Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. c3 d5
    C64	Ruy Lopez: Classical Variation, Modern Main Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 Bb6 7. Bg5
    C64	Ruy Lopez: Classical Variation, Spanish Wing Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 4. b4
    C65	Ruy Lopez: Berlin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6
    C65	Ruy Lopez: Berlin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O
    C65	Ruy Lopez: Berlin Defense, Anderssen Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. Bxc6+
    C65	Ruy Lopez: Berlin Defense, Beverwijk Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5
    C65	Ruy Lopez: Berlin Defense, Duras Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 d6 5. c4
    C65	Ruy Lopez: Berlin Defense, Fishing Pole Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Ng4
    C65	Ruy Lopez: Berlin Defense, Kaufmann Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Be3
    C65	Ruy Lopez: Berlin Defense, Mortimer Trap	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Ne7 5. Nxe5 c6
    C65	Ruy Lopez: Berlin Defense, Mortimer Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Ne7
    C65	Ruy Lopez: Berlin Defense, Nyholm Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d4 exd4 5. O-O
    C65	Ruy Lopez: Classical Variation, Zukertort Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3
    C65	Ruy Lopez: Halloween Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. Nxe5
    C66	Ruy Lopez: Berlin Defense, Closed Bernstein Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bg5
    C66	Ruy Lopez: Berlin Defense, Closed Showalter Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7 7. Bxc6
    C66	Ruy Lopez: Berlin Defense, Closed Wolf Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 exd4
    C66	Ruy Lopez: Berlin Defense, Hedgehog Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Bd7 6. Nc3 Be7
    C66	Ruy Lopez: Berlin Defense, Improved Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6
    C66	Ruy Lopez: Berlin Defense, Tarrasch Trap	1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1 O-O
    C66	Ruy Lopez: Closed Berlin Defense, Chigorin Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Nd7
    C67	Ruy Lopez: Berlin Defense, Berlin Wall	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Bd7
    C67	Ruy Lopez: Berlin Defense, Cordel Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nf5
    C67	Ruy Lopez: Berlin Defense, Minckwitz Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. dxe5
    C67	Ruy Lopez: Berlin Defense, Pillsbury Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. b3
    C67	Ruy Lopez: Berlin Defense, Rio Gambit Accepted	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4
    C67	Ruy Lopez: Berlin Defense, Rio de Janeiro Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7
    C67	Ruy Lopez: Berlin Defense, Rio de Janeiro Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nc3 O-O 10. Re1 Nc5 11. Nd4 Ne6 12. Be3 Nxd4 13. Bxd4 c5
    C67	Ruy Lopez: Berlin Defense, Rosenthal Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 a6
    C67	Ruy Lopez: Berlin Defense, Trifunovic Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 d5
    C67	Ruy Lopez: Berlin Defense, Winawer Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. Nd4
    C67	Ruy Lopez: Berlin Defense, Zukertort Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Be7 6. Qe2 Nd6 7. Bxc6 bxc6 8. dxe5 Nb7 9. c4
    C67	Ruy Lopez: Berlin Defense, l'Hermet Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6
    C67	Ruy Lopez: Berlin Defense, l'Hermet Variation, Berlin Wall Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8
    C67	Ruy Lopez: Berlin Defense, l'Hermet Variation, Westerinen Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Ne4
    C67	Ruy Lopez: Open Berlin Defense, Showalter Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Ba4
    C67	Ruy Lopez: Open Berlin Defense, l'Hermet Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. dxe5
    C68	Ruy Lopez: Exchange Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6
    C68	Ruy Lopez: Exchange Variation, Alekhine Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd6
    C68	Ruy Lopez: Exchange Variation, Keres Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nc3
    C68	Ruy Lopez: Exchange Variation, Lutikov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 bxc6
    C68	Ruy Lopez: Exchange Variation, Romanovsky Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nc3 f6 6. d3
    C68	Ruy Lopez: Exchange, Alekhine Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. d4 exd4 6. Qxd4 Qxd4 7. Nxd4 Bd7
    C69	Ruy Lopez: Exchange Variation, Alapin Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5
    C69	Ruy Lopez: Exchange Variation, Bronstein Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Qd6
    C69	Ruy Lopez: Exchange Variation, Gligoric Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6
    C69	Ruy Lopez: Exchange Variation, King's Bishop Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bd6
    C69	Ruy Lopez: Exchange Variation, Normal Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O
    C70	Ruy Lopez: Bird's Defense Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nd4
    C70	Ruy Lopez: Morphy Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6
    C70	Ruy Lopez: Morphy Defense, Alapin's Defense Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Bb4
    C70	Ruy Lopez: Morphy Defense, Caro Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5
    C70	Ruy Lopez: Morphy Defense, Classical Defense Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Bc5
    C70	Ruy Lopez: Morphy Defense, Cozio Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nge7
    C70	Ruy Lopez: Morphy Defense, Fianchetto Defense Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 g6
    C70	Ruy Lopez: Morphy Defense, Graz Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Bc5
    C70	Ruy Lopez: Morphy Defense, Norwegian Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Na5
    C70	Ruy Lopez: Morphy Defense, Norwegian Variation, Nightingale Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 Na5 6. Bxf7+
    C70	Ruy Lopez: Morphy Defense, Schliemann Defense Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 f5
    C70	Ruy Lopez: Morphy Defense, Schliemann Defense Deferred, Jaenisch Gambit Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 f5 5. exf5
    C71	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6
    C71	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Nc3
    C71	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c4
    C71	Ruy Lopez: Noah's Ark Trap	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 b5 5. Bb3 d6 6. d4 Nxd4 7. Nxd4 exd4 8. Qxd4 c5
    C72	Ruy Lopez: Closed, Kecskemet Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. O-O Bd7 6. c3 Nf6 7. d4 Be7 8. Nbd2 O-O 9. Re1 Be8
    C72	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. O-O
    C73	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Bxc6+ bxc6 6. d4
    C73	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Bxc6+ bxc6 6. d4 f6
    C74	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3
    C74	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 f5 6. exf5 Bxf5 7. O-O
    C74	Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Siesta Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 f5
    C75	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 Bd7
    C75	Ruy Lopez: Morphy Defense, Modern Steinitz Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 Bd7 6. d4 Nge7
    C76	Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 g6 4. c3 a6 5. Ba4 d6 6. d4 Bd7
    C77	Ruy Lopez: Morphy Defense, Anderssen Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3
    C77	Ruy Lopez: Morphy Defense, Bayreuth Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Bxc6
    C77	Ruy Lopez: Morphy Defense, Duras Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3 d6 6. c4
    C77	Ruy Lopez: Morphy Defense, Jaffe Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. c3
    C77	Ruy Lopez: Morphy Defense, Mackenzie Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d4
    C77	Ruy Lopez: Morphy Defense, Tarrasch Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Nc3
    C77	Ruy Lopez: Morphy Defense, Wormald Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2
    C77	Ruy Lopez: Wormald Attack, Grünfeld Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Qe2 b5 6. Bb3 Be7 7. d4 d6 8. c3 Bg4
    C78	Ruy Lopez: Brix Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O g6
    C78	Ruy Lopez: Central Countergambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d5
    C78	Ruy Lopez: Morphy Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
    C78	Ruy Lopez: Morphy Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 d6
    C78	Ruy Lopez: Morphy Defense, Arkhangelsk Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Bb7
    C78	Ruy Lopez: Morphy Defense, Neo-Arkhangelsk Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Bc5
    C78	Ruy Lopez: Morphy Defense, Wing Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 Be7 7. a4
    C78	Ruy Lopez: Rabinovich Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 d6 7. Ng5 d5 8. exd5 Nd4 9. Re1 Bc5 10. Rxe5+ Kf8
    C79	Ruy Lopez: Morphy Defense, Steinitz Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6
    C79	Ruy Lopez: Morphy Defense, Steinitz Deferred	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Nxe4
    C79	Ruy Lopez: Steinitz Defense Deferred, Boleslavsky Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Nxe4 8. Re1 f5 9. dxe5 d5 10. Nc3
    C79	Ruy Lopez: Steinitz Defense Deferred, Lipnitsky Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O d6 6. Bxc6+ bxc6 7. d4 Bg4
    C80	Ruy Lopez: Morphy Defense, Tartakower Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Qe2
    C80	Ruy Lopez: Open	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4
    C80	Ruy Lopez: Open	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4
    C80	Ruy Lopez: Open	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3
    C80	Ruy Lopez: Open	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5
    C80	Ruy Lopez: Open, Berger Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. a4 Nxd4 9. Nxd4 exd4 10. Nc3
    C80	Ruy Lopez: Open, Bernstein Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2
    C80	Ruy Lopez: Open, Bernstein Variation, Luther Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 Bc5 10. Qe1
    C80	Ruy Lopez: Open, Friess Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Nxe5
    C80	Ruy Lopez: Open, Harksen Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. c4
    C80	Ruy Lopez: Open, Karpov Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 Nc5 10. c3 d4 11. Ng5
    C80	Ruy Lopez: Open, Knorre Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Nc3
    C80	Ruy Lopez: Open, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6
    C80	Ruy Lopez: Open, Richter Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. d5
    C80	Ruy Lopez: Open, Riga Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4
    C80	Ruy Lopez: Open, Schlechter Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. a4 Nxd4
    C80	Ruy Lopez: Open, Skipworth Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. Re1 d5
    C80	Ruy Lopez: Open, Zukertort Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Ne7
    C81	Ruy Lopez: Open, Howell Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2
    C81	Ruy Lopez: Open, Howell Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2 Be7 10. c4
    C81	Ruy Lopez: Open, Howell Attack, Ekstrom Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Qe2 Be7 10. Rd1 O-O 11. c4 bxc4 12. Bxc4 Qd7
    C82	Ruy Lopez: Open	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3
    C82	Ruy Lopez: Open, Berlin Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Nc5
    C82	Ruy Lopez: Open, Dilworth Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Nbd2 O-O 11. Bc2 Nxf2
    C82	Ruy Lopez: Open, Italian Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5
    C82	Ruy Lopez: Open, Motzko Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Qd3
    C82	Ruy Lopez: Open, Motzko Attack, Nenarokov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Qd3 Ne7
    C82	Ruy Lopez: Open, St. Petersburg Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Bc5 10. Nbd2
    C83	Ruy Lopez: Open, Breslau Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Re1 O-O 11. Nd4 Nxe5
    C83	Ruy Lopez: Open, Classical Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7
    C83	Ruy Lopez: Open, Classical Defense, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 Be7 7. Re1 b5 8. Bb3 d5 9. dxe5 Be6 10. c3
    C83	Ruy Lopez: Open, Malkin Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Nbd2 O-O 11. Qe2
    C83	Ruy Lopez: Open, Tarrasch Trap	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Re1 O-O 11. Nd4 Qd7 12. Nxe6 fxe6 13. Rxe4
    C84	Ruy Lopez: Closed	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7
    C84	Ruy Lopez: Closed, Basque Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4 exd4 7. e5 Ne4 8. c3
    C84	Ruy Lopez: Closed, Center Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4
    C84	Ruy Lopez: Closed, Center Attack, Basque Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d4 exd4 7. e5 Ne4 8. c3 dxc3
    C84	Ruy Lopez: Closed, Martinez Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. d3
    C84	Ruy Lopez: Closed, Morphy Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Nc3
    C85	Ruy Lopez: Closed, Delayed Exchange	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Bxc6
    C86	Ruy Lopez: Closed, Worrall Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2
    C86	Ruy Lopez: Closed, Worrall Attack, Castling Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2 b5 7. Bb3 O-O
    C86	Ruy Lopez: Closed, Worrall Attack, Delayed Castling Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Qe2 b5 7. Bb3 d6
    C87	Ruy Lopez: Closed, Averbakh Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 d6
    C88	Ruy Lopez: Closed	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3
    C88	Ruy Lopez: Closed	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O
    C88	Ruy Lopez: Closed, Alekhine Gambit	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. Nbd2 O-O 12. Nf1 Bg4 13. Ne3 Bxf3 14. Qxf3
    C88	Ruy Lopez: Closed, Anti-Marshall	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. a4
    C88	Ruy Lopez: Closed, Balla Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. a4
    C88	Ruy Lopez: Closed, Leonhardt Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Na5 9. Bc2 c5 10. d4 Qc7 11. h3 Nc6 12. d5 Nb8 13. Nbd2 g5
    C88	Ruy Lopez: Closed, Rosen Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. d4
    C88	Ruy Lopez: Closed, Trajkovic Counterattack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 Bb7
    C88	Ruy Lopez: Noah's Ark Trap	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. d4 Nxd4 9. Nxd4 exd4 10. Qxd4 c5
    C89	Ruy Lopez: Marshall Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5
    C89	Ruy Lopez: Marshall Attack, Main Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4
    C89	Ruy Lopez: Marshall Attack, Main Line, Spassky Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3 15. Be3 Bg4 16. Qd3 Rae8 17. Nd2 Re6 18. a4 Qh5
    C89	Ruy Lopez: Marshall Attack, Modern Main Line	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. d4 Bd6 13. Re1 Qh4 14. g3 Qh3
    C89	Ruy Lopez: Marshall Attack, Modern Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6
    C89	Ruy Lopez: Marshall Attack, Original Marshall Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6
    C89	Ruy Lopez: Marshall Attack, Re3 Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. Bxd5 cxd5 13. d4 Bd6 14. Re3
    C89	Ruy Lopez: Marshall Attack, Steiner Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 e4
    C90	Ruy Lopez: Closed	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O
    C90	Ruy Lopez: Closed, Lutikov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. Bc2
    C90	Ruy Lopez: Closed, Pilnik Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. d3 d6 9. c3
    C90	Ruy Lopez: Closed, Suetin Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. a3
    C91	Ruy Lopez: Closed, Bogoljubov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4
    C91	Ruy Lopez: Closed, Yates Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4
    C91	Ruy Lopez: Closed, Yates Variation, Short Attack	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 Bg4 10. a4
    C92	Ruy Lopez: Closed	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3
    C92	Ruy Lopez: Closed, Flohr System	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7
    C92	Ruy Lopez: Closed, Karpov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nd7
    C92	Ruy Lopez: Closed, Kholmov Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Be6
    C92	Ruy Lopez: Closed, Smyslov-Breyer-Zaitsev Hybrid	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7 10. d4 Re8 11. Nbd2 Bf8 12. a3 h6
    C92	Ruy Lopez: Closed, Zaitsev System	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Re8
    C93	Ruy Lopez: Closed, Smyslov Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 h6
    C94	Ruy Lopez: Closed, Breyer Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8
    C94	Ruy Lopez: Closed, Breyer Defense, Quiet Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d3
    C95	Ruy Lopez: Closed, Breyer	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4
    C95	Ruy Lopez: Closed, Breyer Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 c5
    C95	Ruy Lopez: Closed, Breyer Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 11. Nh4
    C95	Ruy Lopez: Closed, Breyer Defense, Zaitsev Hybrid	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
    C96	Ruy Lopez: Closed, Borisenko Variation	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nc6
    C96	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2
    C96	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5
    C96	Ruy Lopez: Closed, Keres Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Nd7
    C96	Ruy Lopez: Closed, Rossolimo Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c6 11. d4 Qc7
    C97	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5
    C97	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7
    C97	Ruy Lopez: Closed, Chigorin, Yugoslav System	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Bd7 13. Nf1 Rfe8 14. Ne3 g6
    C98	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Nc6
    C98	Ruy Lopez: Closed, Chigorin Defense	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Nc6 13. dxc5
    C99	Ruy Lopez: Closed, Chigorin Defense, Panov System	1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 13. cxd4
    D00	Amazon Attack	1. d4 d5 2. Qd3
    D00	Blackmar-Diemer Gambit	1. d4 d5 2. e4
    D00	Blackmar-Diemer Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6
    D00	Blackmar-Diemer Gambit Accepted	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3
    D00	Blackmar-Diemer Gambit Accepted: Bogoljubow Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6
    D00	Blackmar-Diemer Gambit Accepted: Bogoljubow Defense, Kloss Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. O-O O-O 8. Kh1
    D00	Blackmar-Diemer Gambit Accepted: Bogoljubow Defense, Mad Dog Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. h4
    D00	Blackmar-Diemer Gambit Accepted: Bogoljubow Defense, Nimzowitsch Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. Ne5
    D00	Blackmar-Diemer Gambit Accepted: Bogoljubow Defense, Studier Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 g6 6. Bc4 Bg7 7. O-O O-O 8. Qe1
    D00	Blackmar-Diemer Gambit Accepted: Euwe Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 e6
    D00	Blackmar-Diemer Gambit Accepted: Euwe Defense, Zilbermints Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 e6 6. Bg5 Be7 7. Bd3 Nc6 8. O-O Nxd4 9. Kh1
    D00	Blackmar-Diemer Gambit Accepted: Gunderam Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bf5
    D00	Blackmar-Diemer Gambit Accepted: Gunderam Defense, Stader Variation	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bf5 6. Ne5 e6 7. g4 Be4
    D00	Blackmar-Diemer Gambit Accepted: Holwell Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Qd6
    D00	Blackmar-Diemer Gambit Accepted: Kaulich Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 c5
    D00	Blackmar-Diemer Gambit Accepted: Pietrowsky Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Nc6
    D00	Blackmar-Diemer Gambit Accepted: Ritter Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 b6
    D00	Blackmar-Diemer Gambit Accepted: Ryder Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Qxf3
    D00	Blackmar-Diemer Gambit Accepted: Schlutter Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Nbd7
    D00	Blackmar-Diemer Gambit Accepted: Teichmann Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bg4
    D00	Blackmar-Diemer Gambit Accepted: Teichmann Defense, Ciesielski Variation	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bg4 6. h3 Bxf3 7. Qxf3 c6 8. Qf2
    D00	Blackmar-Diemer Gambit Accepted: Teichmann Defense, Classical Variation	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bg4 6. h3 Bxf3 7. Qxf3 c6 8. Be3
    D00	Blackmar-Diemer Gambit Accepted: Teichmann Defense, Seidel-Hall Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 Bg4 6. h3 Bxf3 7. Qxf3 c6 8. g4
    D00	Blackmar-Diemer Gambit Accepted: Ziegler Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 exf3 5. Nxf3 c6
    D00	Blackmar-Diemer Gambit Declined: Brombacher Countergambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 c5
    D00	Blackmar-Diemer Gambit Declined: Elbert Countergambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 e5
    D00	Blackmar-Diemer Gambit Declined: Gedult Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 a6
    D00	Blackmar-Diemer Gambit Declined: Lamb Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 Nc6
    D00	Blackmar-Diemer Gambit Declined: Langeheinicke Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 e3
    D00	Blackmar-Diemer Gambit Declined: O'Kelly Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 c6
    D00	Blackmar-Diemer Gambit Declined: Vienna Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 Bf5
    D00	Blackmar-Diemer Gambit Declined: Weinsbach Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. f3 e6
    D00	Blackmar-Diemer Gambit: Blackmar Gambit	1. d4 d5 2. e4 dxe4 3. f3
    D00	Blackmar-Diemer Gambit: Diemer-Rosenberg Attack	1. d4 d5 2. e4 dxe4 3. Be3
    D00	Blackmar-Diemer Gambit: Fritz Attack	1. d4 d5 2. e4 dxe4 3. Bc4
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit	1. d4 d5 2. e4 dxe4 3. Nc3 e5
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit, Endgame Variation	1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. dxe5
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit, Lange Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Nxe4
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit, Rasmussen Attack	1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Nge2
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit, Sneiders Attack	1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Qh5
    D00	Blackmar-Diemer Gambit: Lemberger Countergambit, Soller Attack	1. d4 d5 2. e4 dxe4 3. Nc3 e5 4. Be3
    D00	Blackmar-Diemer Gambit: Netherlands Variation	1. d4 d5 2. e4 dxe4 3. Nc3 f5
    D00	Blackmar-Diemer Gambit: Rasa-Studier Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Be3
    D00	Blackmar-Diemer Gambit: Reversed Albin Countergambit	1. d4 d5 2. e4 dxe4 3. Nc3 c5
    D00	Blackmar-Diemer Gambit: Zeller Defense	1. d4 d5 2. e4 dxe4 3. Nc3 Bf5
    D00	Blackmar-Diemer Gambit: Zeller Defense, Soller Attack	1. d4 d5 2. e4 dxe4 3. Nc3 Bf5 4. f3 Nf6 5. Bc4
    D00	Blackmar-Diemer Gambit: von Popiel Gambit	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Bg5
    D00	Blackmar-Diemer Gambit: von Popiel Gambit, Zilbermints Variation	1. d4 d5 2. e4 dxe4 3. Nc3 Nf6 4. Bg5 Bf5 5. Bxf6 exf6 6. g4 Bg6 7. Qe2 Bb4 8. Qb5+
    D00	Queen's Pawn Game	1. d4 d5
    D00	Queen's Pawn Game	1. d4 d5 2. e3
    D00	Queen's Pawn Game	1. d4 d5 2. e3 Nf6
    D00	Queen's Pawn Game: Accelerated London System	1. d4 d5 2. Bf4
    D00	Queen's Pawn Game: Accelerated London System, Steinitz Countergambit	1. d4 d5 2. Bf4 c5
    D00	Queen's Pawn Game: Accelerated London System, Steinitz Countergambit Accepted	1. d4 d5 2. Bf4 c5 3. dxc5
    D00	Queen's Pawn Game: Accelerated London System, Steinitz Countergambit, Morris Countergambit	1. d4 d5 2. Bf4 c5 3. e4
    D00	Queen's Pawn Game: Accelerated London System, Steinitz Countergambit, Morris Countergambit Accepted	1. d4 d5 2. Bf4 c5 3. e4 dxe4
    D00	Queen's Pawn Game: Chigorin Variation	1. d4 d5 2. Nc3
    D00	Queen's Pawn Game: Chigorin Variation, Alburt Defense	1. d4 d5 2. Nc3 Bf5
    D00	Queen's Pawn Game: Chigorin Variation, Anti-Veresov	1. d4 d5 2. Nc3 Bg4
    D00	Queen's Pawn Game: Chigorin Variation, Fianchetto Defense	1. d4 g6 2. Nf3 Bg7 3. Nc3 d5
    D00	Queen's Pawn Game: Chigorin Variation, Irish Gambit	1. d4 d5 2. Nc3 c5
    D00	Queen's Pawn Game: Chigorin Variation, Shaviliuk Gambit	1. d4 d5 2. Nc3 e5
    D00	Queen's Pawn Game: Chigorin Variation, Shropshire Defense	1. d4 d5 2. Nc3 h5
    D00	Queen's Pawn Game: Hübsch Gambit	1. d4 Nf6 2. Nc3 d5 3. e4
    D00	Queen's Pawn Game: Levitsky Attack	1. d4 d5 2. Bg5
    D00	Queen's Pawn Game: Levitsky Attack, Welling Variation	1. d4 d5 2. Bg5 Bg4
    D00	Queen's Pawn Game: Mason Attack	1. d4 d5 2. f4
    D00	Queen's Pawn Game: Stonewall Attack	1. d4 d5 2. e3 Nf6 3. Bd3
    D00	Queen's Pawn Game: Zurich Gambit	1. d4 d5 2. g4
    D01	Rapport-Jobava System	1. d4 d5 2. Nc3 Nf6 3. Bf4
    D01	Richter-Veresov Attack	1. d4 Nf6 2. Nc3 d5 3. Bg5
    D01	Richter-Veresov Attack	1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5
    D01	Richter-Veresov Attack: Boyce Defense	1. d4 Nf6 2. Nc3 d5 3. Bg5 Ne4
    D01	Richter-Veresov Attack: Malich Gambit	1. d4 Nf6 2. Nc3 d5 3. Bg5 c5 4. Bxf6 gxf6 5. e4 dxe4 6. d5
    D01	Richter-Veresov Attack: Richter Variation	1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5 4. f3
    D01	Richter-Veresov Attack: Two Knights System	1. d4 Nf6 2. Nc3 d5 3. Bg5 Nbd7 4. Nf3
    D01	Richter-Veresov Attack: Two Knights System, Grünfeld Defense	1. d4 Nf6 2. Nc3 d5 3. Bg5 Nbd7 4. Nf3 g6
    D01	Richter-Veresov Attack: Veresov Variation	1. d4 Nf6 2. Nc3 d5 3. Bg5 Bf5 4. Bxf6
    D02	London System: Poisoned Pawn Variation	1. d4 Nf6 2. Nf3 d5 3. Bf4 c5 4. e3 Qb6 5. Nc3
    D02	Queen's Gambit Declined: Baltic Defense, Pseudo-Slav	1. d4 d5 2. Nf3 Bf5 3. c4 e6 4. Nc3 c6
    D02	Queen's Pawn Game: Anti-Torre	1. Nf3 d5 2. d4 Bg4
    D02	Queen's Pawn Game: Chandler Gambit	1. d4 d5 2. Nf3 c5 3. g3 cxd4 4. Bg2
    D02	Queen's Pawn Game: Chigorin Variation	1. d4 d5 2. Nf3 Nc6
    D02	Queen's Pawn Game: Krause Variation	1. d4 d5 2. Nf3 c5
    D02	Queen's Pawn Game: Levitsky Attack, Euwe Variation, Modern Line	1. d4 d5 2. Nf3 c6 3. Bg5 h6 4. Bh4 Qb6
    D02	Queen's Pawn Game: London System	1. d4 d5 2. Nf3 Nf6 3. Bf4
    D02	Queen's Pawn Game: London System, Pterodactyl Variation	1. d4 g6 2. Nf3 Bg7 3. Bf4 c5 4. c3 cxd4 5. cxd4 Qa5+
    D02	Queen's Pawn Game: Symmetrical Variation	1. d4 d5 2. Nf3 Nf6
    D02	Queen's Pawn Game: Symmetrical Variation, Pseudo-Catalan	1. d4 d5 2. Nf3 Nf6 3. g3
    D02	Queen's Pawn Game: Zilbermints Countergambit	1. d4 d5 2. Nf3 Nf6 3. c4 b5
    D02	Queen's Pawn Game: Zukertort Variation	1. d4 d5 2. Nf3
    D03	Queen's Pawn Game: Torre Attack	1. d4 d5 2. Nf3 Nf6 3. Bg5
    D03	Queen's Pawn Game: Torre Attack, Gossip Variation	1. d4 d5 2. Nf3 Nf6 3. Bg5 Ne4
    D03	Queen's Pawn Game: Torre Attack, Grünfeld Variation	1. d4 d5 2. Nf3 Nf6 3. Bg5 g6
    D04	Queen's Pawn Game: Colle System	1. d4 d5 2. Nf3 Nf6 3. e3
    D04	Queen's Pawn Game: Colle System, Anti-Colle	1. d4 d5 2. Nf3 Nf6 3. e3 Bf5
    D04	Queen's Pawn Game: Colle System, Grünfeld Formation	1. d4 d5 2. Nf3 Nf6 3. e3 g6 4. Bd3 Bg7
    D05	Queen's Pawn Game: Colle System	1. d4 d5 2. Nf3 Nf6 3. e3 e6
    D05	Queen's Pawn Game: Colle System	1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3
    D05	Queen's Pawn Game: Colle System, Traditional Colle	1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. c3
    D05	Queen's Pawn Game: Zukertort Variation	1. d4 d5 2. Nf3 c5 3. e3 Nf6 4. Nbd2 e6 5. b3
    D05	Rubinstein Opening	1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3
    D05	Rubinstein Opening: Bogoljubov Defense	1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3 Nc6 6. O-O Bd6 7. Bb2 O-O
    D05	Rubinstein Opening: Classical Defense	1. d4 Nf6 2. Nf3 e6 3. e3 c5 4. Bd3 d5 5. b3 Nc6 6. O-O Be7 7. Bb2 O-O
    D05	Rubinstein Opening: Semi-Slav Defense	1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3 Bd6 5. O-O O-O 6. b3 Nbd7 7. Bb2
    D06	Queen's Gambit	1. d4 d5 2. c4
    D06	Queen's Gambit Declined: Austrian Attack, Salvio Countergambit	1. d4 d5 2. c4 c5 3. dxc5 d4
    D06	Queen's Gambit Declined: Austrian Defense	1. d4 d5 2. c4 c5
    D06	Queen's Gambit Declined: Austrian Defense, Gusev Countergambit	1. d4 d5 2. c4 c5 3. cxd5 Nf6
    D06	Queen's Gambit Declined: Austrian Defense, Haberditz Variation	1. d4 d5 2. c4 c5 3. cxd5 Nf6 4. e4 Nxe4 5. dxc5 Qa5+
    D06	Queen's Gambit Declined: Baltic Defense	1. d4 d5 2. c4 Bf5
    D06	Queen's Gambit Declined: Baltic Defense, Argentinian Gambit	1. d4 d5 2. c4 Bf5 3. cxd5 Bxb1 4. Qa4+ c6 5. dxc6 Nxc6
    D06	Queen's Gambit Declined: Baltic Defense, Pseudo-Chigorin	1. d4 d5 2. c4 Bf5 3. Nc3 e6 4. Nf3 Nc6
    D06	Queen's Gambit Declined: Baltic Defense, Queen Attack	1. d4 d5 2. c4 Bf5 3. Qb3
    D06	Queen's Gambit Declined: Baltic Defense, Queen Attack Deferred	1. d4 d5 2. c4 Bf5 3. Nc3 e6 4. Qb3
    D06	Queen's Gambit Declined: Marshall Defense	1. d4 d5 2. c4 Nf6
    D06	Queen's Gambit Declined: Marshall Defense, Tan Gambit	1. d4 d5 2. c4 Nf6 3. cxd5 c6
    D06	Queen's Gambit Declined: Zilbermints Gambit	1. d4 d5 2. c4 b5
    D07	Queen's Gambit Declined: Chigorin Defense	1. d4 d5 2. c4 Nc6
    D07	Queen's Gambit Declined: Chigorin Defense	1. d4 d5 2. c4 Nc6 3. Nc3
    D07	Queen's Gambit Declined: Chigorin Defense	1. d4 d5 2. c4 Nc6 3. Nc3 dxc4
    D07	Queen's Gambit Declined: Chigorin Defense, Exchange Variation	1. d4 d5 2. c4 Nc6 3. cxd5 Qxd5
    D07	Queen's Gambit Declined: Chigorin Defense, Exchange Variation, Costa's Line	1. d4 d5 2. c4 Nc6 3. cxd5 Qxd5 4. e3 e5 5. Nc3 Bb4 6. Bd2 Bxc3 7. Bxc3 exd4 8. Ne2
    D07	Queen's Gambit Declined: Chigorin Defense, Janowski Variation	1. d4 d5 2. c4 Nc6 3. Nc3 dxc4 4. Nf3
    D07	Queen's Gambit Declined: Chigorin Defense, Lazard Gambit	1. d4 d5 2. c4 Nc6 3. Nf3 e5
    D07	Queen's Gambit Declined: Chigorin Defense, Main Line	1. d4 d5 2. c4 Nc6 3. Nf3 Bg4
    D07	Queen's Gambit Declined: Chigorin Defense, Main Line, Alekhine Variation	1. d4 d5 2. c4 Nc6 3. Nf3 Bg4 4. Qa4
    D07	Queen's Gambit Declined: Chigorin Defense, Modern Gambit	1. d4 d5 2. c4 Nc6 3. Nc3 dxc4 4. Nf3 Nf6
    D07	Queen's Gambit Declined: Chigorin Defense, Tartakower Gambit	1. d4 d5 2. c4 Nc6 3. Nc3 e5
    D08	Queen's Gambit Declined: Albin Countergambit	1. d4 d5 2. c4 e5
    D08	Queen's Gambit Declined: Albin Countergambit, Balogh Variation	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 Qe7
    D08	Queen's Gambit Declined: Albin Countergambit, Janowski Variation	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 f6
    D08	Queen's Gambit Declined: Albin Countergambit, Krenosz Variation	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 Bg4 6. h3 Bxf3 7. Nxf3 Bb4+ 8. Bd2 Qe7
    D08	Queen's Gambit Declined: Albin Countergambit, Lasker Trap	1. d4 d5 2. c4 e5 3. dxe5 d4 4. e3 Bb4+ 5. Bd2 dxe3
    D08	Queen's Gambit Declined: Albin Countergambit, Modern Line	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2
    D08	Queen's Gambit Declined: Albin Countergambit, Normal Line	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3
    D08	Queen's Gambit Declined: Albin Countergambit, Tartakower Defense	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 c5
    D09	Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3
    D09	Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Be6 Line	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Be6
    D09	Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bf5 Line	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Bf5
    D09	Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bg4 Line	1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Bg4
    D10	Slav Defense	1. d4 d5 2. c4 c6
    D10	Slav Defense	1. d4 d5 2. c4 c6 3. Nc3
    D10	Slav Defense	1. d4 d5 2. c4 c6 3. Nc3 dxc4
    D10	Slav Defense: Diemer Gambit	1. d4 d5 2. c4 c6 3. e4
    D10	Slav Defense: Exchange Variation	1. d4 d5 2. c4 c6 3. cxd5
    D10	Slav Defense: Exchange Variation, Boor Attack	1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. f3
    D10	Slav Defense: Slav Gambit, Alekhine Attack	1. d4 d5 2. c4 c6 3. Nc3 dxc4 4. e4
    D10	Slav Defense: Winawer Countergambit	1. d4 d5 2. c4 c6 3. Nc3 e5
    D10	Slav Defense: Winawer Countergambit, Anti-Winawer Gambit	1. d4 d5 2. c4 c6 3. Nc3 e5 4. e4
    D11	Slav Defense: Bonet Gambit	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Bg5
    D11	Slav Defense: Breyer Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nbd2
    D11	Slav Defense: Modern Line	1. d4 d5 2. c4 c6 3. Nf3
    D11	Slav Defense: Quiet Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3
    D11	Slav Defense: Quiet Variation, Pin Defense	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bg4
    D12	Slav Defense: Quiet Variation, Amsterdam Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Nc3 e6 7. Ne5 Nfd7
    D12	Slav Defense: Quiet Variation, Landau Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Qb3 Qc8 7. Bd2 e6 8. Na3
    D12	Slav Defense: Quiet Variation, Schallopp Defense	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5
    D13	Slav Defense: Exchange Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. cxd5 cxd5
    D13	Slav Defense: Exchange Variation, Schallopp Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Nc3
    D14	Slav Defense: Exchange Variation, Symmetrical Line	1. d4 d5 2. c4 c6 3. cxd5 cxd5 4. Nc3 Nf6 5. Nf3 Nc6 6. Bf4 Bf5
    D14	Slav Defense: Exchange Variation, Trifunovic Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. cxd5 cxd5 5. Nc3 Nc6 6. Bf4 Bf5 7. e3 e6 8. Qb3 Bb4
    D15	Slav Defense: Alekhine Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3
    D15	Slav Defense: Chameleon Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6
    D15	Slav Defense: Chameleon Variation, Advance System	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 a6 5. c5
    D15	Slav Defense: Geller Gambit	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4
    D15	Slav Defense: Geller Gambit	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5
    D15	Slav Defense: Schlechter Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 g6
    D15	Slav Defense: Süchting Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 Qb6
    D15	Slav Defense: Three Knights Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3
    D15	Slav Defense: Two Knights Attack	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4
    D16	Slav Defense: Alapin Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4
    D16	Slav Defense: Smyslov Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Na6
    D16	Slav Defense: Soultanbeieff Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 e6
    D16	Slav Defense: Steiner Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bg4
    D17	Slav Defense: Czech Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5
    D17	Slav Defense: Czech Variation, Bled Attack	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Nh4
    D17	Slav Defense: Czech Variation, Carlsbad Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5
    D17	Slav Defense: Czech Variation, Carlsbad Variation, Morozevich Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Nbd7 7. Nxc4 Qc7 8. g3 e5 9. dxe5 Nxe5 10. Bf4 Nfd7 11. Bg2 g5
    D17	Slav Defense: Czech Variation, Krause Attack	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5
    D17	Slav Defense: Czech Variation, Krause Attack, Fazekas Gambit	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 Na6 7. e4
    D17	Slav Defense: Czech Variation, Wiesbaden Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6
    D17	Slav Defense: Czech Variation, Wiesbaden Variation, Sharp Line	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 Bb4 8. e4
    D18	Slav Defense: Czech Variation, Classical System	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3
    D18	Slav Defense: Czech Variation, Lasker Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 Na6
    D19	Slav Defense: Czech Variation, Classical System, Main Line	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2
    D19	Slav Defense: Czech Variation, Dutch Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O
    D19	Slav Defense: Czech Variation, Dutch Variation, Sämisch Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2 Ne4 10. g4
    D20	Queen's Gambit Accepted	1. d4 d5 2. c4 dxc4
    D20	Queen's Gambit Accepted: Accelerated Mannheim Variation	1. d4 d5 2. c4 dxc4 3. Qa4+
    D20	Queen's Gambit Accepted: Central Variation, Alekhine System	1. d4 d5 2. c4 dxc4 3. e4 Nf6
    D20	Queen's Gambit Accepted: Central Variation, Greco Variation	1. d4 d5 2. c4 dxc4 3. e4 b5
    D20	Queen's Gambit Accepted: Central Variation, McDonnell Defense	1. d4 d5 2. c4 dxc4 3. e4 e5
    D20	Queen's Gambit Accepted: Central Variation, McDonnell Defense, Somov Gambit	1. d4 d5 2. c4 dxc4 3. e4 e5 4. Bxc4
    D20	Queen's Gambit Accepted: Central Variation, Modern Defense	1. d4 d5 2. c4 dxc4 3. e4 Nc6
    D20	Queen's Gambit Accepted: Central Variation, Rubinstein Defense	1. d4 d5 2. c4 dxc4 3. e4 c5
    D20	Queen's Gambit Accepted: Central Variation, Rubinstein Defense, Yefimov Gambit	1. d4 d5 2. c4 dxc4 3. e4 c5 4. d5 b5
    D20	Queen's Gambit Accepted: Linares Variation	1. d4 d5 2. c4 dxc4 3. e4 c5 4. d5 Nf6 5. Nc3 b5
    D20	Queen's Gambit Accepted: Old Variation	1. d4 d5 2. c4 dxc4 3. e3
    D20	Queen's Gambit Accepted: Old Variation, Billinger Gambit	1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. a3
    D20	Queen's Gambit Accepted: Old Variation, Christensen Gambit	1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Nf3
    D20	Queen's Gambit Accepted: Old Variation, Korchnoi Gambit	1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Kf1
    D20	Queen's Gambit Accepted: Old Variation, Novikov Gambit	1. d4 d5 2. c4 dxc4 3. e3 e5 4. Bxc4 exd4 5. Qb3 Qe7 6. Nd2
    D20	Queen's Gambit Accepted: Saduleto Variation	1. d4 d5 2. c4 dxc4 3. e4
    D20	Queen's Gambit Accepted: Schwartz Defense	1. d4 d5 2. c4 dxc4 3. e4 f5
    D21	Queen's Gambit Accepted: Alekhine Defense, Borisenko-Furman Variation	1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e4
    D21	Queen's Gambit Accepted: Godes Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nd7
    D21	Queen's Gambit Accepted: Gunsberg Defense	1. d4 d5 2. c4 dxc4 3. Nf3 c5
    D21	Queen's Gambit Accepted: Normal Variation	1. d4 d5 2. c4 dxc4 3. Nf3
    D21	Queen's Gambit Accepted: Rosenthal Variation	1. d4 d5 2. c4 dxc4 3. Nf3 e6
    D21	Queen's Gambit Accepted: Slav Gambit	1. d4 d5 2. c4 dxc4 3. Nf3 b5
    D22	Queen's Gambit Accepted: Alekhine Defense	1. d4 d5 2. c4 dxc4 3. Nf3 a6
    D22	Queen's Gambit Accepted: Alekhine Defense, Alatortsev Variation	1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e3 Bg4 5. Bxc4 e6 6. d5
    D22	Queen's Gambit Accepted: Alekhine Defense, Haberditz Variation	1. d4 d5 2. c4 dxc4 3. Nf3 a6 4. e3 b5
    D23	Queen's Gambit Accepted	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6
    D23	Queen's Gambit Accepted: Mannheim Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Qa4+
    D24	Queen's Gambit Accepted: Bogoljubov Defense	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3 a6 5. e4
    D24	Queen's Gambit Accepted: Gunsberg Defense, Prianishenmo Gambit	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3 c5 5. d5 e6 6. e4 exd5 7. e5
    D24	Queen's Gambit Accepted: Showalter Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. Nc3
    D25	Queen's Gambit Accepted: Janowski-Larsen Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Bg4
    D25	Queen's Gambit Accepted: Normal Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3
    D25	Queen's Gambit Accepted: Smyslov Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 g6
    D25	Queen's Gambit Accepted: Winawer Defense	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Be6
    D26	Queen's Gambit Accepted: Classical Defense	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5
    D26	Queen's Gambit Accepted: Classical Defense, Normal Line	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O
    D26	Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Development Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O Nc6
    D26	Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Exchange Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O cxd4
    D26	Queen's Gambit Accepted: Classical, Furman Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. Qe2 a6 7. dxc5 Bxc5 8. O-O Nc6 9. e4 b5 10. e5
    D26	Queen's Gambit Accepted: Normal Variation, Traditional System	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6
    D27	Queen's Gambit Accepted: Classical Defense, Main Line	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6
    D27	Queen's Gambit Accepted: Classical Defense, Rubinstein Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. a4
    D27	Queen's Gambit Accepted: Classical Defense, Russian Gambit	1. d4 d5 2. c4 dxc4 3. e3 Nf6 4. Bxc4 e6 5. Nf3 c5 6. O-O a6 7. e4
    D27	Queen's Gambit Accepted: Furman Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. dxc5 Bxc5
    D28	Queen's Gambit Accepted: Classical Defense, Alekhine System	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2
    D28	Queen's Gambit Accepted: Classical Defense, Alekhine System	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5
    D28	Queen's Gambit Accepted: Classical, Flohr Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Nc6 9. Rd1 c4 10. Bc2 Nb4 11. Nc3 Nxc2 12. Qxc2 Bb7 13. d5 Qc7
    D29	Queen's Gambit Accepted: Classical Defense, Alekhine System, Main Line	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Bb7
    D29	Queen's Gambit Accepted: Classical Defense, Alekhine System, Smyslov Variation	1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Bb7 9. Rd1 Nbd7 10. Nc3 Bd6
    D30	Queen's Gambit Declined	1. d4 d5 2. c4 e6
    D30	Queen's Gambit Declined: Capablanca Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5 h6
    D30	Queen's Gambit Declined: Capablanca Variation	1. d4 Nf6 2. Nf3 e6 3. c4 d5 4. Bg5 c6 5. Nbd2 Nbd7 6. e3
    D30	Queen's Gambit Declined: Semmering Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Nbd7 6. Bd3 c5
    D30	Queen's Gambit Declined: Spielmann Variation	1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. e3 c6 5. Nbd2 g6
    D30	Queen's Gambit Declined: Stonewall Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Ne4 6. Bd3 f5
    D30	Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch	1. d4 d5 2. c4 e6 3. Nf3 c5
    D30	Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch Bishop Attack	1. d4 d5 2. c4 e6 3. Nf3 c5 4. cxd5 exd5 5. Bg5
    D30	Queen's Gambit Declined: Traditional Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5
    D30	Queen's Gambit Declined: Vienna Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Bg5 Bb4+
    D30	Semi-Slav Defense: Quiet Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2
    D30	Semi-Slav Defense: Quiet Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 e6 5. Nbd2 Nbd7
    D31	Queen's Gambit Declined: Alapin Variation	1. d4 e6 2. c4 b6 3. Nc3 d5
    D31	Queen's Gambit Declined: Charousek Variation	1. d4 d5 2. c4 e6 3. Nc3 Be7
    D31	Queen's Gambit Declined: Charousek Variation, Miladinovic Gambit	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. e4 dxe4 5. f3
    D31	Queen's Gambit Declined: Janowski Variation	1. d4 d5 2. c4 e6 3. Nc3 a6
    D31	Queen's Gambit Declined: Queen's Knight Variation	1. d4 d5 2. c4 e6 3. Nc3
    D31	Queen's Gambit Declined: Semi-Slav, Abrahams Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. a4 Bb4 6. e3 b5 7. Bd2 a5
    D31	Queen's Gambit Declined: Semi-Slav, Junge Variation	1. d4 d5 2. c4 e6 3. Nf3 c6 4. Nc3 dxc4 5. a4 Bb4 6. e3 b5 7. Bd2 Qb6
    D31	Queen's Gambit Declined: Semi-Slav, Koomen Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. e3 b5 6. a4 Bb4 7. Bd2 Qe7
    D31	Queen's Gambit Declined: Uhlmann Variation	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. Rc1 dxc4
    D31	Semi-Slav Defense: Accelerated Move Order	1. d4 d5 2. c4 e6 3. Nc3 c6
    D31	Semi-Slav Defense: Anti-Noteboom, Stonewall Variation, Portisch Gambit	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e3 f5 5. g4
    D31	Semi-Slav Defense: Gunderam Gambit	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. f3
    D31	Semi-Slav Defense: Marshall Gambit	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4
    D31	Semi-Slav Defense: Marshall Gambit, Forgotten Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Nc3
    D31	Semi-Slav Defense: Marshall Gambit, Main Line	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2
    D31	Semi-Slav Defense: Marshall Gambit, Tolush Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Bd2 Qxd4 7. Bxb4 Qxe4+ 8. Be2 c5 9. Bxc5 Qxg2
    D31	Semi-Slav Defense: Noteboom Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4
    D31	Semi-Slav Defense: Noteboom Variation, Abrahams Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. a4 Bb4 6. e3 Bxc3+ 7. bxc3 b5 8. axb5 cxb5
    D31	Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Gambit	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. g3
    D31	Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. Bg5
    D31	Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation, Belyavsky Line	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 dxc4 5. Bg5 f6
    D32	Queen's Gambit Declined: Tarrasch Defense	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5
    D32	Tarrasch Defense	1. d4 d5 2. c4 e6 3. Nc3 c5
    D32	Tarrasch Defense: Grünfeld Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. dxc5 d4 7. Na4 b5
    D32	Tarrasch Defense: Marshall Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. e4
    D32	Tarrasch Defense: Schara Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 cxd4
    D32	Tarrasch Defense: Symmetrical Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. e3 Nf6 5. Nf3 Nc6
    D32	Tarrasch Defense: Tarrasch Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. dxc5 d4 6. Na4 b5
    D32	Tarrasch Defense: Two Knights Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3
    D32	Tarrasch Defense: von Hennig Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 cxd4 5. Qxd4 Nc6 6. Qd1 exd5 7. Qxd5 Be6
    D33	Tarrasch Defense: Dubov Tarrasch	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 cxd4 8. Nxd4 Bc5
    D33	Tarrasch Defense: Prague Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6
    D33	Tarrasch Defense: Rubinstein System	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3
    D33	Tarrasch Defense: Swedish Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 c4
    D33	Tarrasch Defense: Swedish Variation, Central Break	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 c4 7. e4
    D33	Tarrasch Defense: Wagner Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Bg4
    D34	Queen's Gambit Declined: Tarrasch Defense, Stoltz Variation	1. d4 d5 2. c4 e6 3. Nf3 c5 4. cxd5 exd5 5. g3 Nc6 6. Bg2 Nf6 7. O-O Be7 8. Nc3 O-O 9. Bg5 Be6 10. Rc1 b6
    D34	Tarrasch Defense: Classical Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O
    D34	Tarrasch Defense: Classical Variation, Advance Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 c4
    D34	Tarrasch Defense: Classical Variation, Bogoljubov Variation	1. d4 Nf6 2. c4 e6 3. Nc3 c5 4. Nf3 d5 5. cxd5 exd5 6. g3 Nc6 7. Bg2 Be7 8. O-O O-O 9. Bg5 Be6 10. Rc1 c4
    D34	Tarrasch Defense: Classical Variation, Carlsbad Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5
    D34	Tarrasch Defense: Classical Variation, Chandler Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Re8 12. Rc1 Be6
    D34	Tarrasch Defense: Classical Variation, Classical Tarrasch Gambit	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. dxc5 d4
    D34	Tarrasch Defense: Classical Variation, Endgame Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 Be6
    D34	Tarrasch Defense: Classical Variation, Main Line	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Re8
    D34	Tarrasch Defense: Classical Variation, Petursson Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 Re8
    D34	Tarrasch Defense: Classical Variation, Réti Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. dxc5 Bxc5 10. Na4
    D34	Tarrasch Defense: Classical Variation, Spassky Variation	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 cxd4 10. Nxd4 h6 11. Be3 Bg4
    D34	Tarrasch Defense: Prague Variation, Main Line	1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. g3 Nf6 7. Bg2 Be7
    D35	Queen's Gambit Declined: Exchange Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5
    D35	Queen's Gambit Declined: Exchange Variation, Chameleon Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 Nbd7 8. Qc2 Re8 9. Nge2 Nf8 10. O-O-O
    D35	Queen's Gambit Declined: Exchange Variation, Positional Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5
    D35	Queen's Gambit Declined: Exchange Variation, Positional Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 c6
    D35	Queen's Gambit Declined: Exchange Variation, Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7 5. cxd5 exd5 6. Bf4
    D35	Queen's Gambit Declined: Harrwitz Attack	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bf4
    D35	Queen's Gambit Declined: Normal Defense	1. d4 d5 2. c4 e6 3. Nc3 Nf6
    D36	Queen's Gambit Declined: Exchange Variation, Reshevsky Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 exd5 5. Bg5 c6 6. Qc2
    D37	Queen's Gambit Declined: Barmen Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7
    D37	Queen's Gambit Declined: Harrwitz Attack	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4
    D37	Queen's Gambit Declined: Harrwitz Attack	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2 Nc6 9. Rd1 Qa5 10. a3
    D37	Queen's Gambit Declined: Harrwitz Attack	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2 Nc6 9. a3 Qa5 10. O-O-O
    D37	Queen's Gambit Declined: Harrwitz Attack, Fianchetto Defense	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bf4 O-O 6. e3 b6
    D37	Queen's Gambit Declined: Harrwitz Attack, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5
    D37	Queen's Gambit Declined: Harrwitz Attack, Orthodox Defense	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bf4 O-O 6. e3 c6
    D37	Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bf4 O-O 6. e3 Nbd7
    D37	Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense, Blockade Line	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Nf3 Be7 5. Bf4 O-O 6. e3 Nbd7 7. c5
    D37	Queen's Gambit Declined: Knight Defense, Alekhine Gambit	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Nbd7 5. Bg5 h6 6. Bh4 dxc4
    D37	Queen's Gambit Declined: Miles Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. Qc2
    D37	Queen's Gambit Declined: Three Knights Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3
    D37	Queen's Gambit Declined: Three Knights, Vienna Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 dxc4
    D37	Queen's Gambit Declined: Vienna Variation, Quiet Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 dxc4 5. e3
    D38	Queen's Gambit Declined: Ragozin Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4
    D38	Queen's Gambit Declined: Ragozin Defense, Alekhine Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Qa4+
    D38	Queen's Gambit Declined: Westphalian Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 Nbd7 6. e3 c5
    D39	Queen's Gambit Declined: Ragozin Defense, Vienna Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 dxc4
    D40	Queen's Gambit Declined: Semi-Tarrasch Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5
    D40	Queen's Gambit Declined: Semi-Tarrasch Defense, Levenfish Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. e3 Nc6 6. Bd3 Bd6 7. O-O O-O 8. Qe2 Qe7 9. dxc5 Bxc5 10. e4
    D40	Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. Bg5
    D40	Queen's Gambit Declined: Semi-Tarrasch Defense, Symmetrical Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. e3 Nc6 6. Bd3 Bd6 7. O-O O-O
    D41	Queen's Gambit Declined: Semi-Tarrasch Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5
    D41	Queen's Gambit Declined: Semi-Tarrasch Defense, Exchange Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e4
    D41	Queen's Gambit Declined: Semi-Tarrasch Defense, Kmoch Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 cxd4 8. cxd4 Bb4+ 9. Bd2 Bxd2+ 10. Qxd2 O-O 11. Bb5
    D41	Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e3
    D41	Queen's Gambit Declined: Semi-Tarrasch Defense, San Sebastian Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 c5 7. Nf3 cxd4 8. cxd4 Bb4+ 9. Bd2 Qa5
    D42	Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 6. e3 Nc6 7. Bd3
    D43	Queen's Gambit Declined: Hastings Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bxf6 Qxf6 7. Qb3
    D43	Semi-Slav Defense	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6
    D43	Semi-Slav Defense: Anti-Moscow Gambit	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 h6 6. Bh4
    D44	Semi-Slav Defense Accepted	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4
    D44	Semi-Slav Defense: Botvinnik Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4
    D44	Semi-Slav Defense: Botvinnik Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5
    D44	Semi-Slav Defense: Botvinnik Variation, Alatortsev System	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 Nd5
    D44	Semi-Slav Defense: Botvinnik Variation, Ekstrom Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. exf6 gxh4 10. Ne5
    D44	Semi-Slav Defense: Botvinnik Variation, Lilienthal Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. g3
    D44	Semi-Slav Defense: Botvinnik Variation, Szabo Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. Qf3
    D45	Semi-Slav Defense: Accelerated Meran Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 a6
    D45	Semi-Slav Defense: Main Line	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3
    D45	Semi-Slav Defense: Normal Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7
    D45	Semi-Slav Defense: Rubinstein System	1. d4 d5 2. c4 e6 3. Nc3 c6 4. Nf3 Nf6 5. e3 Nbd7 6. Ne5
    D45	Semi-Slav Defense: Stoltz Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Qc2
    D45	Semi-Slav Defense: Stoltz Variation, Center Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. e4
    D45	Semi-Slav Defense: Stoltz Variation, Center Variation, Mikhalchishin Line	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. e4 dxe4 8. Nxe4 Nxe4 9. Qxe4 e5 10. dxe5
    D45	Semi-Slav Defense: Stoltz Variation, Shabalov Attack	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Qc2 Bd6 7. g4
    D45	Semi-Slav Defense: Stonewall Defense	1. d4 d5 2. Nf3 Nf6 3. c4 c6 4. Nc3 e6 5. e3 Ne4 6. Bd3 f5
    D46	Semi-Slav Defense: Bogoljubov Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Be7
    D46	Semi-Slav Defense: Chigorin Defense	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Bd6
    D46	Semi-Slav Defense: Main Line	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3
    D46	Semi-Slav Defense: Romih Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 Bb4
    D47	Semi-Slav Defense: Meran Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5
    D47	Semi-Slav Defense: Meran Variation, Lundin Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 b4
    D47	Semi-Slav Defense: Meran Variation, Wade Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7
    D47	Semi-Slav Defense: Meran Variation, Wade Variation, Kaidanov Gambit	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. e4 b4 10. Na4 c5 11. e5 Nd5 12. O-O cxd4 13. Nxd4
    D47	Semi-Slav Defense: Meran Variation, Wade Variation, Larsen Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. e4 b4 10. Na4 c5 11. e5 Nd5
    D47	Semi-Slav Defense: Semi-Meran Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4
    D48	Semi-Slav Defense: Meran Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6
    D48	Semi-Slav Defense: Meran Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5
    D48	Semi-Slav Defense: Meran Variation, Old Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5
    D48	Semi-Slav Defense: Meran Variation, Pirc Variation	1. d4 d5 2. c4 e6 3. Nc3 c6 4. e3 Nf6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 b4
    D48	Semi-Slav Defense: Meran Variation, Reynolds' Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. d5
    D49	Semi-Slav Defense: Meran Variation, Blumenfeld Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5
    D49	Semi-Slav Defense: Meran Variation, Rabinovich Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Ng4
    D49	Semi-Slav Defense: Meran Variation, Rellstab Attack	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. O-O Qd5 14. Qe2 Ba6 15. Bg5
    D49	Semi-Slav Defense: Meran Variation, Sozin Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5
    D49	Semi-Slav Defense: Meran Variation, Sozin Variation	1. d4 d5 2. Nf3 Nf6 3. c4 c6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. O-O
    D49	Semi-Slav Defense: Meran Variation, Stahlberg Variation	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 a6 9. e4 c5 10. e5 cxd4 11. Nxb5 Nxe5 12. Nxe5 axb5 13. Qf3
    D50	Queen's Gambit Declined: Been-Koomen Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5
    D50	Queen's Gambit Declined: Modern Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5
    D50	Queen's Gambit Declined: Pseudo-Tarrasch Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. cxd5
    D50	Queen's Gambit Declined: Pseudo-Tarrasch Variation, Canal Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. cxd5 Qb6
    D50	Queen's Gambit Declined: Pseudo-Tarrasch Variation, Primitive Pillsbury Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. Nf3 cxd4 6. Qxd4
    D50	Queen's Gambit Declined: Semi-Tarrasch Defense, Krause Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c5 5. Nf3 cxd4 6. Nxd4 e5 7. Ndb5 a6 8. Qa4
    D51	Queen's Gambit Declined: Alekhine Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. Nf3 c6 6. e4
    D51	Queen's Gambit Declined: Capablanca Variation, Anti-Cambridge Springs Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. a3
    D51	Queen's Gambit Declined: Manhattan Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 Bb4
    D51	Queen's Gambit Declined: Modern Variation, Knight Defense	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7
    D51	Queen's Gambit Declined: Modern Variation, Knight Defense	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3
    D51	Queen's Gambit Declined: Modern Variation, Knight Defense	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6
    D51	Queen's Gambit Declined: Rochlin Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. Nf3 c6 6. Rc1 Qa5 7. Bd2
    D52	Queen's Gambit Declined	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3
    D52	Queen's Gambit Declined: Cambridge Springs Defense	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5
    D52	Queen's Gambit Declined: Cambridge Springs Defense	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. cxd5
    D52	Queen's Gambit Declined: Cambridge Springs Defense, Argentine Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. Nf3 Qa5 7. Nd2 Bb4 8. Qc2 O-O 9. Bh4
    D52	Queen's Gambit Declined: Cambridge Springs Defense, Bogoljubov Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 Bb4 8. Qc2
    D52	Queen's Gambit Declined: Cambridge Springs Defense, Capablanca Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. Nf3 Qa5 7. Bxf6
    D52	Queen's Gambit Declined: Cambridge Springs Defense, Rubinstein Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. Nd2 dxc4
    D52	Queen's Gambit Declined: Cambridge Springs Defense, Yugoslav Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. Bg5 Nbd7 6. e3 Qa5 7. cxd5 Nxd5
    D53	Queen's Gambit Declined	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7
    D53	Queen's Gambit Declined: Lasker Defense	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 Ne4
    D53	Queen's Gambit Declined: Modern Variation, Heral Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6
    D54	Queen's Gambit Declined: Neo-Orthodox Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Rc1
    D55	Queen's Gambit Declined: Anti-Tartakower Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bxf6
    D55	Queen's Gambit Declined: Anti-Tartakower Variation, Petrosian Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bxf6 Bxf6 7. e3 O-O 8. Rc1 c6 9. Bd3 Nd7 10. O-O dxc4 11. Bxc4
    D55	Queen's Gambit Declined: Modern Variation, Normal Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3
    D55	Queen's Gambit Declined: Neo-Orthodox Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6
    D55	Queen's Gambit Declined: Neo-Orthodox Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3
    D55	Queen's Gambit Declined: Pillsbury Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 d5 5. cxd5 exd5 6. Bg5 Be7 7. e3 O-O 8. Bd3 Bb7 9. Ne5
    D56	Queen's Gambit Declined: Lasker Defense	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4
    D56	Queen's Gambit Declined: Lasker Defense, Russian Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. Qc2 Nf6 10. Bd3 dxc4 11. Bxc4 c5 12. O-O Nc6 13. Rfd1 Bd7
    D56	Queen's Gambit Declined: Lasker Defense, Teichmann Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4 8. Bxe7 Qxe7 9. Qc2
    D57	Queen's Gambit Declined: Lasker Defense, Bernstein Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 h6 6. Bh4 O-O 7. Nf3 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3 exd5 11. Qb3 Qd6
    D57	Queen's Gambit Declined: Lasker Defense, Bernstein Variation, Mar del Plata Gambit	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3 exd5 11. Qb3 Rd8 12. c4 Be6
    D57	Queen's Gambit Declined: Lasker Defense, Main Line	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 Ne4 8. Bxe7 Qxe7 9. cxd5 Nxc3 10. bxc3
    D58	Queen's Gambit Declined: Tartakower Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 h6 6. Bh4 O-O 7. e3 b6
    D58	Queen's Gambit Declined: Tartakower Defense, Exchange Variation	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 exd5
    D59	Queen's Gambit Declined: Tartakower Defense	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6
    D59	Queen's Gambit Declined: Tartakower Defense, Makogonov Exchange Variation	1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 O-O 7. e3 b6 8. cxd5 Nxd5
    D60	Queen's Gambit Declined: Orthodox Defense	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7
    D60	Queen's Gambit Declined: Orthodox Defense, Botvinnik Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Bd3
    D60	Queen's Gambit Declined: Orthodox Defense, Rauzer Variation	1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qb3
    D61	Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qc2
    D62	Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Qc2 c5 8. cxd5
    D63	Queen's Gambit Declined: Orthodox Defense, Capablanca Variation	1. Nf3 d5 2. d4 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 b6 8. cxd5 exd5 9. Bb5
    D63	Queen's Gambit Declined: Orthodox Defense, Henneberger Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 a6
    D63	Queen's Gambit Declined: Orthodox Defense, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1
    D63	Queen's Gambit Declined: Orthodox Defense, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6
    D63	Queen's Gambit Declined: Orthodox Defense, Pillsbury Variation	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 b6 8. cxd5 exd5 9. Bd3
    D63	Queen's Gambit Declined: Orthodox Defense, Swiss, Karlsbad Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 a6 8. cxd5
    D64	Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack	1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. Nf3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. a3 a6 9. Qc2
    D64	Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2
    D64	Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 a6
    D64	Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack	1. Nf3 d5 2. d4 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 Ne4
    D65	Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack	1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Qc2 a6 9. cxd5
    D66	Queen's Gambit Declined: Orthodox Defense, Bd3 Line	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3
    D66	Queen's Gambit Declined: Orthodox Defense, Fianchetto Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 c6 5. Nf3 Be7 6. e3 Nbd7 7. Rc1 O-O 8. Bd3 dxc4 9. Bxc4 b5
    D67	Queen's Gambit Declined: Orthodox Defense, Alekhine Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. Ne4
    D67	Queen's Gambit Declined: Orthodox Defense, Bd3 Line	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7
    D67	Queen's Gambit Declined: Orthodox Defense, Capablanca System	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5
    D67	Queen's Gambit Declined: Orthodox Defense, Janowski Variation	1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. h4
    D67	Queen's Gambit Declined: Orthodox Defense, Main Line	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O
    D68	Queen's Gambit Declined: Orthodox Defense, Classical Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5
    D68	Queen's Gambit Declined: Orthodox Defense, Classical Variation	1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. Qb1
    D68	Queen's Gambit Declined: Orthodox Defense, Classical Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Be7 5. Bg5 O-O 6. e3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. Qc2
    D69	Queen's Gambit Declined: Orthodox Defense, Classical Variation	1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 Nbd7 7. Rc1 c6 8. Bd3 dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. dxe5 Nxe5 14. Nxe5 Qxe5
    D70	Neo-Grünfeld Defense: Goglidze Attack	1. d4 Nf6 2. c4 g6 3. f3 d5
    D70	Neo-Grünfeld Defense: with Nf3	1. d4 Nf6 2. c4 g6 3. Nf3 d5
    D70	Neo-Grünfeld Defense: with g3	1. d4 Nf6 2. c4 g6 3. g3 d5
    D71	Neo-Grünfeld Defense: Exchange Variation	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5 5. cxd5 Nxd5
    D74	Neo-Grünfeld Defense: Delayed Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O
    D75	Neo-Grünfeld Defense: Delayed Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. g3 d5 6. cxd5 Nxd5 7. Bg2 c5 8. O-O
    D75	Neo-Grünfeld Defense: Delayed Exchange Variation	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O c5 8. dxc5
    D76	Neo-Grünfeld Defense: Delayed Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d5 6. cxd5 Nxd5 7. O-O Nb6
    D77	Neo-Grünfeld Defense: Classical Variation	1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4
    D77	Neo-Grünfeld Defense: Classical Variation, Modern Defense	1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4 dxc4
    D77	Neo-Grünfeld Defense: Classical Variation, Polgar Variation	1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d5 6. c4 Nc6
    D78	Neo-Grünfeld Defense: Classical Variation, Original Defense	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 c6 6. O-O d5
    D79	Neo-Grünfeld Defense: Ultra-Delayed Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 c6 6. O-O d5 7. cxd5 cxd5
    D80	Grünfeld Defense	1. d4 Nf6 2. c4 g6 3. Nc3 d5
    D80	Grünfeld Defense: Gibbon Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. g4
    D80	Grünfeld Defense: Lundin Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Nxe4 dxe4 6. Qd2 c5
    D80	Grünfeld Defense: Lutikov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. f3
    D80	Grünfeld Defense: Lutikov Variation, Murrey Attack	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. f3 c5 5. cxd5 Nxd5 6. Na4
    D80	Grünfeld Defense: Stockholm Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5
    D80	Grünfeld Defense: Zaitsev Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. h4
    D81	Grünfeld Defense: Russian Variation, Accelerated Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Qb3
    D82	Grünfeld Defense: Brinckmann Attack	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4
    D83	Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O
    D83	Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Botvinnik Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Rc1 c5 7. dxc5 Be6
    D83	Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Capablanca Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. Rc1
    D83	Grünfeld Defense: Brinckmann Attack, Reshevsky Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. Rc1 O-O 6. e3 c5 7. dxc5 Qa5
    D84	Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit Accepted	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. cxd5 Nxd5 7. Nxd5 Qxd5 8. Bxc7
    D85	Grünfeld Defense: Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5
    D85	Grünfeld Defense: Exchange Variation, Modern Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3
    D85	Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Kramnik's Line	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. Nc3 d5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 c5 8. h3
    D85	Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Pawn Grab Line	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Rb1 O-O 9. Be2 Nc6 10. d5 Bxc3+
    D85	Grünfeld Defense: Exchange Variation, Nadanian Attack	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. Na4
    D86	Grünfeld Defense: Exchange Variation, Classical Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4
    D86	Grünfeld Defense: Exchange Variation, Larsen Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Qd7
    D86	Grünfeld Defense: Exchange Variation, Larsen Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Qd7 9. O-O b6
    D86	Grünfeld Defense: Exchange Variation, Simagin's Improved Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 Nc6
    D86	Grünfeld Defense: Exchange Variation, Simagin's Lesser Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 O-O 8. Ne2 b6
    D87	Grünfeld Defense: Exchange Variation, Seville Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bxf7+
    D87	Grünfeld Defense: Exchange Variation, Spassky Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O
    D88	Grünfeld Defense: Exchange Variation, Spassky Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O cxd4 11. cxd4
    D89	Grünfeld Defense: Exchange Variation, Sokolsky Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 O-O 9. O-O Nc6 10. Be3 Bg4 11. f3 Na5 12. Bd3 cxd4 13. cxd4 Be6 14. d5
    D89	Grünfeld Defense: Exchange Variation, Spassky Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 9. Be3 O-O 10. O-O Bg4 11. f3 Na5 12. Bd3 cxd4 13. cxd4 Be6
    D90	Grünfeld Defense: Flohr Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qa4+
    D90	Grünfeld Defense: Three Knights Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3
    D90	Grünfeld Defense: Three Knights Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7
    D91	Grünfeld Defense: Three Knights Variation, Petrosian System	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bg5
    D92	Grünfeld Defense: Three Knights Variation, Hungarian Attack	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bf4
    D93	Grünfeld Defense: Three Knights Variation, Hungarian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bf4 O-O 6. e3
    D94	Grünfeld Defense: Flohr Defense	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 g6 5. Nf3 Bg7 6. Bd3 O-O 7. O-O Bf5
    D94	Grünfeld Defense: Makogonov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. b4
    D94	Grünfeld Defense: Opocensky Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Bd2
    D94	Grünfeld Defense: Smyslov Defense	1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 g6 5. Nf3 Bg7 6. Bd3 O-O 7. O-O Bg4
    D94	Grünfeld Defense: Three Knights Variation, Burille Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3
    D94	Grünfeld Defense: Three Knights Variation, Paris Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Bd3
    D95	Grünfeld Defense: Botvinnik Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Qb3 e6
    D95	Grünfeld Defense: Pachman Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. e3 Bg7 5. Qb3 dxc4 6. Bxc4 O-O 7. Nf3 Nbd7 8. Ng5
    D95	Grünfeld Defense: Three Knights Variation, Vienna Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Qb3
    D96	Grünfeld Defense: Russian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3
    D97	Grünfeld Defense: Russian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4
    D97	Grünfeld Defense: Russian Variation, Byrne Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Nc6
    D97	Grünfeld Defense: Russian Variation, Hungarian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 a6
    D97	Grünfeld Defense: Russian Variation, Levenfish Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 b6
    D97	Grünfeld Defense: Russian Variation, Prins Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Na6
    D97	Grünfeld Defense: Russian Variation, Szabo Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 c6
    D98	Grünfeld Defense: Russian Variation, Keres Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Be2 Nb6 10. Qd3 Nc6 11. O-O-O
    D98	Grünfeld Defense: Russian Variation, Smyslov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4
    D99	Grünfeld Defense: Russian Variation, Smyslov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Qb3
    D99	Grünfeld Defense: Russian Variation, Yugoslav Variation	1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 dxc4 6. Qxc4 O-O 7. e4 Bg4 8. Be3 Nfd7 9. Qb3 c5
    E00	Catalan Opening	1. d4 Nf6 2. c4 e6 3. g3
    E00	Catalan Opening	1. d4 Nf6 2. c4 e6 3. g3 d5
    E00	Catalan Opening: Hungarian Gambit	1. d4 Nf6 2. c4 e6 3. g3 e5
    E00	Indian Defense	1. d4 Nf6 2. c4 e6 3. Qb3
    E00	Indian Defense: Devin Gambit	1. d4 Nf6 2. c4 e6 3. g4
    E00	Indian Defense: Seirawan Attack	1. d4 Nf6 2. c4 e6 3. Bg5
    E01	Catalan Opening: Closed	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2
    E02	Catalan Opening: Open Defense	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4
    E03	Catalan Opening: Open Defense	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Qa4+ Nbd7 6. Qxc4
    E03	Catalan Opening: Open Defense, Alekhine Variation	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Qa4+ Nbd7 6. Qxc4 a6 7. Qc2
    E04	Catalan Opening: Open Defense	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3
    E04	Catalan Opening: Open Defense, Modern Sharp Variation	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 Nc6 6. Qa4 Bb4+
    E05	Catalan Opening: Open Defense, Classical Line	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 Be7
    E06	Catalan Opening: Closed	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3
    E07	Catalan Opening: Closed	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7
    E07	Catalan Opening: Closed, Botvinnik Variation	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Nc3 c6 8. Qd3
    E08	Catalan Opening: Closed	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. b3
    E08	Catalan Opening: Closed	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Qc2
    E08	Catalan Opening: Closed, Spassky Gambit	1. d4 Nf6 2. c4 e6 3. g3 Be7 4. Bg2 d5 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. b3 b6 9. Rd1 Bb7 10. Nc3 b5
    E08	Catalan Opening: Closed, Zagoryansky Variation	1. d4 e6 2. c4 Nf6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Rd1 b6 9. a4
    E09	Catalan Opening: Closed Variation, Rabinovich Variation	1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Qc2 e6 5. Nbd2 Be7 6. g3 Nbd7 7. Bg2 O-O 8. O-O b5
    E09	Catalan Opening: Closed Variation, Traditional Variation	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 b6
    E09	Catalan Opening: Closed, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2
    E09	Catalan Opening: Closed, Sokolsky Variation	1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 b6 9. b3 a5 10. Bb2 Ba6
    E10	Blumenfeld Countergambit	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5
    E10	Blumenfeld Countergambit Accepted	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. dxe6 fxe6 6. cxb5 d5
    E10	Blumenfeld Countergambit: Dus-Khotimirsky Variation	1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 b5 5. Bg5
    E10	Blumenfeld Countergambit: Spielmann Variation	1. d4 Nf6 2. Nf3 e6 3. c4 c5 4. d5 b5 5. Bg5 exd5 6. cxd5 h6
    E10	Indian Defense: Anti-Nimzo-Indian	1. d4 Nf6 2. c4 e6 3. Nf3
    E10	Indian Defense: Dzindzi-Indian Defense	1. d4 Nf6 2. c4 e6 3. Nf3 a6
    E10	Indian Defense: Döry Indian	1. d4 Nf6 2. c4 e6 3. Nf3 Ne4
    E11	Bogo-Indian Defense	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+
    E11	Bogo-Indian Defense: Exchange Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Bxd2+
    E11	Bogo-Indian Defense: Grünfeld Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nbd2
    E11	Bogo-Indian Defense: Haiti Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Nc6
    E11	Bogo-Indian Defense: Monticelli Trap	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Bxd2+ 7. Qxd2 O-O 8. Nc3 Ne4 9. Qc2 Nxc3 10. Ng5
    E11	Bogo-Indian Defense: New England Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nfd2
    E11	Bogo-Indian Defense: Nimzowitsch Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Qe7
    E11	Bogo-Indian Defense: Retreat Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 Be7
    E11	Bogo-Indian Defense: Vitolins Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 c5
    E11	Bogo-Indian Defense: Wade-Smyslov Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 a5
    E12	Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4
    E12	Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation, Modern Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4 5. Bg5 Bb7 6. Nd2
    E12	Queen's Indian Defense	1. d4 Nf6 2. c4 e6 3. Nf3 b6
    E12	Queen's Indian Defense: Kasparov Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3
    E12	Queen's Indian Defense: Kasparov Variation, Botvinnik Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb7 5. Bg5 h6 6. Bh4 g5 7. Bg3 Nh5
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Andersson Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 Ne4
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Classical Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 exd5
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Hedgehog Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 g6
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Kasparov Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Qc2
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Marco Defense	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 Be7
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Modern Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Petrosian Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. e3
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Polovodin Gambit	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb7 5. a3 d5 6. cxd5 Nxd5 7. e4
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Rashkovsky Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Qa4+
    E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Romanishin Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Bb7 5. Nc3 d5 6. cxd5 Nxd5 7. Bd2
    E12	Queen's Indian Defense: Miles Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Bf4
    E12	Queen's Indian Defense: Petrosian Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3
    E12	Queen's Indian Defense: Petrosian Variation, Farago Defense	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 Ba6 5. Qc2 Bb7
    E13	Queen's Indian Defense: Kasparov Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4 5. Bg5 h6 6. Bh4 Bb7
    E14	Queen's Indian Defense: Averbakh Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. e3 Bb7 5. Bd3 c5 6. O-O Be7 7. b3 O-O 8. Bb2 cxd4 9. Nxd4
    E14	Queen's Indian Defense: Spassky System	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. e3
    E15	Queen's Indian Defense: Buerger Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 c5 6. d5 exd5 7. Ng5
    E15	Queen's Indian Defense: Fianchetto Traditional	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7
    E15	Queen's Indian Defense: Fianchetto Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3
    E15	Queen's Indian Defense: Fianchetto Variation, Check Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+
    E15	Queen's Indian Defense: Fianchetto Variation, Check Variation, Intermezzo Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7
    E15	Queen's Indian Defense: Fianchetto Variation, Check Variation, Modern Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Qe7
    E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6
    E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Nimzowitsch Attack	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. Qa4
    E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. b3
    E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Timman's Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Ba6 5. Qb3
    E15	Queen's Indian Defense: Fianchetto Variation, Rubinstein Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 c5 6. d5 exd5 7. Nh4
    E15	Queen's Indian Defense: Fianchetto Variation, Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 c5
    E16	Queen's Indian Defense: Capablanca Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+
    E16	Queen's Indian Defense: Riumin Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Be7
    E16	Queen's Indian Defense: Yates Variation	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 a5 5. g3 b6 6. Bg2 Bb7
    E17	Queen's Indian Defense: Anti-Queen's Indian System	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3
    E17	Queen's Indian Defense: Classical Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O
    E17	Queen's Indian Defense: Classical Variation, Polugaevsky Gambit	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. d5 exd5 8. Nh4
    E17	Queen's Indian Defense: Classical Variation, Taimanov Gambit	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. d5 exd5 8. Nd4
    E17	Queen's Indian Defense: Euwe Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. b3
    E17	Queen's Indian Defense: Fianchetto Variation, Kramnik Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Re1
    E17	Queen's Indian Defense: Opocensky Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3 Ne4 7. Bd2
    E17	Queen's Indian Defense: Traditional Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7
    E18	Queen's Indian Defense: Classical Variation, Tiviakov Defense	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Na6
    E18	Queen's Indian Defense: Classical Variation, Traditional Variation	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3
    E18	Queen's Indian Defense: Classical Variation, Traditional Variation, Nimzowitsch Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 d5
    E19	Queen's Indian Defense: Classical Variation, Traditional Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Ne4 8. Qc2 Nxc3 9. Qxc3
    E20	Nimzo-Indian Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4
    E20	Nimzo-Indian Defense: Kmoch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3
    E20	Nimzo-Indian Defense: Mikenas Attack	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qd3
    E20	Nimzo-Indian Defense: Romanishin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3
    E20	Nimzo-Indian Defense: Romanishin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 O-O 6. Bg2
    E20	Nimzo-Indian Defense: Romanishin Variation, English Hybrid	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5
    E21	Nimzo-Indian Defense: Three Knights Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3
    E21	Nimzo-Indian Defense: Three Knights Variation, Euwe Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. d5 Ne4
    E21	Nimzo-Indian Defense: Three Knights Variation, Korchnoi Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. d5
    E21	Nimzo-Indian Defense: Three Knights Variation, Shocron Gambit	1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nc3 c5 5. d5 b5
    E22	Nimzo-Indian Defense: Spielmann Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3
    E23	Nimzo-Indian Defense: Spielmann Variation, Karlsbad Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxd2
    E23	Nimzo-Indian Defense: Spielmann Variation, Romanovsky Gambit	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6
    E23	Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5
    E23	Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5 8. Qc2 f5 9. g3
    E24	Nimzo-Indian Defense: Sämisch Variation, Accelerated	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3
    E24	Nimzo-Indian Defense: Sämisch Variation, Botvinnik Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. e3 O-O 8. cxd5 Nxd5
    E25	Nimzo-Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5
    E25	Nimzo-Indian Defense: Sämisch Variation, Keres Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 Nxd5 8. dxc5
    E25	Nimzo-Indian Defense: Sämisch Variation, Romanovsky Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 Nxd5 8. dxc5 f5
    E26	Nimzo-Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3
    E26	Nimzo-Indian Defense: Sämisch Variation, O'Kelly Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6
    E27	Nimzo-Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 O-O
    E28	Nimzo-Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. a3 Bxc3+ 6. bxc3
    E29	Nimzo-Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 O-O
    E29	Nimzo-Indian Defense: Sämisch Variation, Capablanca Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 O-O 8. Ne2 b6 9. e4 Ne8
    E30	Nimzo-Indian Defense: Leningrad Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5
    E30	Nimzo-Indian Defense: Leningrad Variation, Averbakh Gambit	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 b5
    E31	Nimzo-Indian Defense: Leningrad Variation, Benoni Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 d6
    E32	Nimzo-Indian Defense: Classical Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2
    E32	Nimzo-Indian Defense: Classical Variation, Keres Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6
    E32	Nimzo-Indian Defense: Classical Variation, Vitolins-Adorjan Gambit	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b5
    E33	Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6 5. Nf3 d6
    E33	Nimzo-Indian Defense: Classical Variation, Zurich Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6
    E34	Nimzo-Indian Defense: Classical Variation, Belyavsky Gambit	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 Qxd5 6. Nf3 Qf5 7. Qd1 e5
    E34	Nimzo-Indian Defense: Classical Variation, Noa Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5
    E35	Nimzo-Indian Defense: Classical Variation, Noa Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 exd5
    E36	Nimzo-Indian Defense: Classical Variation, Noa Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3
    E36	Nimzo-Indian Defense: Classical Variation, Noa Variation, Botvinnik Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Nc6
    E36	Nimzo-Indian Defense: Classical Variation, Noa Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4
    E37	Nimzo-Indian Defense: Classical Variation, Noa Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4 7. Qc2
    E37	Nimzo-Indian Defense: Classical Variation, Noa Variation, San Remo Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 Ne4 7. Qc2 Nc6 8. e3 e5
    E38	Nimzo-Indian Defense: Classical Variation, Berlin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5
    E38	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Steiner Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 Bxc3+
    E39	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Macieja System	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O 6. a3 Bxc5 7. Nf3 b6 8. Bf4
    E39	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Pirc Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O
    E40	Nimzo-Indian Defense: Normal Line	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3
    E40	Nimzo-Indian Defense: Normal Variation, Taimanov Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 Nc6
    E41	Nimzo-Indian Defense: Hübner Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5
    E41	Nimzo-Indian Defense: Hübner Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6
    E41	Nimzo-Indian Defense: Normal Variation, Hübner Deferred	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Nf3 O-O
    E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2
    E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Main Line	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2 cxd4 6. exd4 O-O 7. a3
    E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Sherbakov Attack	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Ne2 cxd4 6. exd4 O-O 7. c5
    E43	Nimzo-Indian Defense: St. Petersburg Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6
    E44	Nimzo-Indian Defense: Fischer Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2
    E45	Nimzo-Indian Defense: Normal Variation, Bronstein (Byrne) Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2 Ba6
    E46	Nimzo-Indian Defense: Normal Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O
    E46	Nimzo-Indian Defense: Reshevsky Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2
    E46	Nimzo-Indian Defense: Simagin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Ne2 d5 6. a3 Bd6
    E47	Nimzo-Indian Defense: Normal Variation, Bishop Attack	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3
    E48	Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5
    E48	Nimzo-Indian Defense: Ragozin Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 Nc6 7. O-O
    E49	Nimzo-Indian Defense: Normal Variation, Botvinnik System	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. a3 Bxc3+ 7. bxc3
    E50	Nimzo-Indian Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3
    E51	Nimzo-Indian Defense: Normal Variation, Ragozin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3 d5
    E51	Nimzo-Indian Defense: Normal Variation, Sämisch Deferred	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nf3 d5 6. a3
    E51	Nimzo-Indian Defense: Ragozin Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 Nc6 7. O-O dxc4
    E52	Nimzo-Indian Defense: Normal Variation, Schlechter Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 b6
    E53	Nimzo-Indian Defense: Normal Variation, Gligoric System	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5
    E53	Nimzo-Indian Defense: Normal Variation, Gligoric System	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nbd7
    E53	Nimzo-Indian Defense: Normal Variation, Gligoric System, Keres Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O b6
    E54	Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4
    E54	Nimzo-Indian Defense: Normal Variation, Gligoric System, Smyslov Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4 Qe7
    E55	Nimzo-Indian Defense: Normal Variation, Gligoric System, Bronstein Variation	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O dxc4 8. Bxc4 Nbd7
    E56	Nimzo-Indian Defense: Normal Variation, Gligoric System, Bernstein Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6
    E58	Nimzo-Indian Defense: Normal Variation, Bernstein Defense, Exchange Line	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3
    E59	Nimzo-Indian Defense: Normal Variation, Bernstein Defense	1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4
    E60	Grünfeld Defense: Counterthrust Variation	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 d5
    E60	Indian Defense: Anti-Grünfeld, Adorjan Gambit	1. d4 Nf6 2. c4 g6 3. d5 b5
    E60	Indian Defense: Anti-Grünfeld, Advance Variation	1. d4 Nf6 2. c4 g6 3. d5
    E60	Indian Defense: Anti-Grünfeld, Alekhine Variation	1. d4 Nf6 2. c4 g6 3. f3
    E60	Indian Defense: Anti-Grünfeld, Alekhine Variation, Leko Gambit	1. d4 Nf6 2. c4 g6 3. f3 e5
    E60	Indian Defense: Anti-Grünfeld, Basman-Williams Attack	1. d4 Nf6 2. c4 g6 3. h4
    E60	Indian Defense: King's Indian Variation, Fianchetto Variation	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2
    E60	Indian Defense: West Indian Defense	1. d4 Nf6 2. c4 g6
    E60	King's Indian Defense: Fianchetto Variation, Immediate Fianchetto	1. d4 Nf6 2. c4 g6 3. g3
    E60	King's Indian Defense: Fianchetto Variation, Pterodactyl Variation	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 c5 5. Bg2 Qa5+
    E60	King's Indian Defense: Fianchetto Variation, Yugoslav System	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5
    E60	King's Indian Defense: Normal Variation, King's Knight Variation	1. d4 Nf6 2. Nf3 g6 3. c4
    E60	King's Indian Defense: Santasiere Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. b4
    E60	King's Indian Defense: Semi-Classical Variation, Benoni Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2 c6
    E60	King's Indian Defense: Semi-Classical Variation, Hollywood Variation	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. Nc3 O-O 5. e3 d6 6. Be2 Nc6
    E60	Queen's Pawn, Mengarini Attack	1. d4 Nf6 2. c4 g6 3. Qc2
    E61	King's Indian Defense	1. d4 Nf6 2. c4 g6 3. Nc3
    E61	King's Indian Defense: Fianchetto Variation, Benjamin Defense	1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 c6 7. Nc3 Qb6
    E61	King's Indian Defense: Semi-Classical Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2
    E61	King's Indian Defense: Semi-Classical Variation, Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2 Nbd7 7. O-O e5 8. dxe5 dxe5
    E61	King's Indian Defense: Semi-Classical Variation, Queenside Storm Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 O-O 5. e3 d6 6. Be2 Nbd7 7. O-O e5 8. b4
    E61	King's Indian Defense: Smyslov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 d6 5. Bg5
    E62	King's Indian Defense: Fianchetto Variation, Delayed Fianchetto	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 d6 5. g3
    E62	King's Indian Defense: Fianchetto Variation, Karlsbad Variation	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nc6
    E62	King's Indian Defense: Fianchetto Variation, Kavalek Defense	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c6 7. Nc3 Qa5
    E62	King's Indian Defense: Fianchetto Variation, Larsen Defense	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c6 7. Nc3 Bf5
    E62	King's Indian Defense: Fianchetto Variation, Lesser Simagin (Spassky)	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nc6 7. O-O Bf5
    E62	King's Indian Defense: Fianchetto Variation, Simagin Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. Nf3 d6 5. g3 O-O 6. Bg2 Nc6 7. O-O Bg4
    E62	King's Indian Defense: Fianchetto Variation, Uhlmann-Szabo System	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 e5
    E63	King's Indian Defense: Fianchetto Variation, Panno Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6
    E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Blockade Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 e5
    E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Donner Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 bxc4 13. bxc4 Bh6
    E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Korchnoi Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 7. Nc3 a6 8. h3 Rb8 9. Be3 b5 10. Nd2
    E64	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Rare Line	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 c5
    E65	King's Indian Defense: Fianchetto Variation, Yugoslav Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5 7. Nc3
    E65	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5 7. Nc3 Nc6 8. dxc5 dxc5
    E66	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Advance Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O c5 7. Nc3 Nc6 8. d5
    E67	King's Indian Defense: Fianchetto Variation, Classical Fianchetto	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5
    E67	King's Indian Defense: Fianchetto Variation, Debrecen Defense	1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nc3 d6 6. Nf3 Nbd7
    E67	King's Indian Defense: Fianchetto Variation, Double Fianchetto Attack	1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 Nbd7 7. Nc3 e5 8. b3
    E67	King's Indian Defense: Fianchetto Variation, Hungarian Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 a6
    E68	King's Indian Defense: Fianchetto Variation, Classical Variation	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4
    E68	King's Indian Defense: Fianchetto Variation, Long Variation	1. d4 Nf6 2. Nf3 g6 3. c4 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 exd4 9. Nxd4 Re8 10. h3 Nc5 11. Re1 a5
    E69	King's Indian Defense: Fianchetto Variation, Classical Main Line	1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 c6 9. h3
    E70	King's Indian Defense: Accelerated Averbakh Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Bg5
    E70	King's Indian Defense: Kramer Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nge2
    E70	King's Indian Defense: Normal Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4
    E70	King's Indian Defense: Normal Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
    E71	King's Indian Defense: Makogonov Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. h3
    E72	King's Indian Defense: Normal Variation, Deferred Fianchetto	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. g3
    E72	King's Indian Defense: Pomar System	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. g3 O-O 6. Bg2 e5 7. Nge2
    E73	King's Indian Defense: Averbakh Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5
    E73	King's Indian Defense: Averbakh Variation, Flexible Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 h6
    E73	King's Indian Defense: Averbakh Variation, Geller Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nbd7
    E73	King's Indian Defense: Averbakh Variation, Modern Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Na6
    E73	King's Indian Defense: Averbakh Variation, Modern Defense, Burgess Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Na6 7. Qd2 c6
    E73	King's Indian Defense: Averbakh Variation, Nc6 Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nc6
    E73	King's Indian Defense: Averbakh Variation, Spanish Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 a6
    E73	King's Indian Defense: Normal Variation, Standard Development	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2
    E73	King's Indian Defense: Semi-Averbakh System	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Be3
    E74	King's Indian Defense: Averbakh Variation, Benoni Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5
    E74	King's Indian Defense: Averbakh Variation, Benoni Defense, Advance Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5
    E74	King's Indian Defense: Averbakh Variation, Benoni Defense, Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. dxc5
    E75	King's Indian Defense: Averbakh Variation, Main Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6
    E76	King's Indian Defense: Four Pawns Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4
    E76	King's Indian Defense: Four Pawns Attack, Dynamic Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5
    E76	King's Indian Defense: Four Pawns Attack, Modern Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 Na6
    E77	King's Indian Defense: Four Pawns Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. f4
    E77	King's Indian Defense: Four Pawns Attack, Florentine Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. e5
    E77	King's Indian Defense: Four Pawns Attack, Normal Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2
    E77	King's Indian Defense: Six Pawns Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Be2 c5 7. d5 e6 8. dxe6 fxe6 9. g4 Nc6 10. h4
    E78	King's Indian Defense: Four Pawns Attack, Fluid Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. Be2
    E79	King's Indian Defense: Four Pawns Attack, Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. Be2 cxd4 8. Nxd4 Nc6 9. Be3
    E80	King's Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3
    E81	King's Indian Defense: Steiner Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bg5
    E81	King's Indian Defense: Sämisch Variation, Bobotsov-Korchnoi-Petrosian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Nge2
    E81	King's Indian Defense: Sämisch Variation, Byrne Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c6 7. Bd3 a6
    E81	King's Indian Defense: Sämisch Variation, Normal Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O
    E81	King's Indian Defense: Sämisch Variation, Sämisch Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5
    E82	King's Indian Defense: Sämisch Variation, Double Fianchetto	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 b6
    E83	King's Indian Defense: Sämisch Variation, Panno Formation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6
    E83	King's Indian Defense: Sämisch Variation, Ruban Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 Rb8
    E83	King's Indian Defense: Sämisch Variation, Yates Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6
    E84	King's Indian Defense: Sämisch Variation, Panno Main Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6 8. Qd2 Rb8
    E85	King's Indian Defense: Sämisch Variation, Orthodox Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5
    E86	King's Indian Defense: Sämisch Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6
    E87	King's Indian Defense: Sämisch Variation, Bronstein Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 Qh4+ 9. g3 Nxg3 10. Qf2 Nxf1 11. Qxh4 Nxe3 12. Ke2
    E87	King's Indian Defense: Sämisch Variation, Closed Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5
    E87	King's Indian Defense: Sämisch Variation, Orthodox Variation, Bronstein Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 Qh4+ 9. g3 Nxg3 10. Qf2 Nxf1 11. Qxh4 Nxe3 12. Ke2 Nxc4
    E89	King's Indian Defense: Sämisch Variation, Closed Variation, Main Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6 8. d5 cxd5
    E90	King's Indian Defense: Larsen Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be3
    E90	King's Indian Defense: Normal Variation, Rare Defenses	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3
    E90	King's Indian Defense: Zinnowitz Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Bg5
    E91	King's Indian Defense: Kazakh Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Na6
    E91	King's Indian Defense: Orthodox Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2
    E92	King's Indian Defense: Exchange Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. dxe5
    E92	King's Indian Defense: Orthodox Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5
    E92	King's Indian Defense: Orthodox Variation, Gligoric-Taimanov System	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3
    E92	King's Indian Defense: Petrosian Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5
    E92	King's Indian Defense: Petrosian Variation, Stein Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 a5
    E93	King's Indian Defense: Petrosian Variation, Keres Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 Nbd7 8. Bg5 h6 9. Bh4 g5 10. Bg3 Nh5 11. h4
    E93	King's Indian Defense: Petrosian Variation, Normal Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 Nbd7
    E94	King's Indian Defense: Orthodox Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O
    E94	King's Indian Defense: Orthodox Variation, Donner Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O c6
    E94	King's Indian Defense: Orthodox Variation, Glek Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Na6
    E94	King's Indian Defense: Orthodox Variation, Positional Defense	1. d4 Nf6 2. c4 d6 3. Nc3 Nbd7 4. e4 e5 5. Nf3 g6 6. Be2 Bg7 7. O-O O-O
    E94	King's Indian Defense: Orthodox Variation, Positional Defense, Closed Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 Nbd7 7. O-O e5 8. d5
    E94	King's Indian Defense: Orthodox Variation, Ukrainian Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O a5
    E95	King's Indian Defense: Orthodox Variation	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nbd7 8. Re1
    E96	King's Indian Defense: Orthodox Variation, Positional Defense, Main Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nbd7 8. Re1 c6 9. Bf1 a5
    E97	King's Indian Defense: Orthodox Variation, Aronin-Taimanov Defense	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6
    E97	King's Indian Defense: Orthodox Variation, Bayonet Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4
    E97	King's Indian Defense: Orthodox Variation, Bayonet Attack, Sokolov's Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. Re1
    E97	King's Indian Defense: Orthodox Variation, Bayonet Attack, Yepishin's Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. Qc2
    E97	King's Indian Defense: Orthodox Variation, Korchnoi Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bd2
    E97	King's Indian Defense: Orthodox Variation, Modern System	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2
    E98	King's Indian Defense: Orthodox Variation, Classical System	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1
    E98	King's Indian Defense: Orthodox Variation, Classical System, Kozul Gambit	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3 f5 11. f3 f4 12. Bf2 g5 13. Rc1 Ng6 14. c5
    E98	King's Indian Defense: Orthodox Variation, Classical System, Neo-Classical Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3
    E99	King's Indian Defense: Orthodox Variation, Classical System, Benko Attack	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5 11. g4
    E99	King's Indian Defense: Orthodox Variation, Classical System, Traditional Line	1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5`.split(`
`).map(a=>a.trim());let n=[];console.log("UNICORN"),console.log(i);for(const a of t){let c=a.split("	")[2].split(" ");c=c.filter(o=>!o.endsWith(".")),c.every((o,r)=>o===i[r])&&n.push({t:c,m:a.split("	")[1],a:a.split("	")[0][0]})}return n.length==0?null:(n.sort(a=>{a.t.length}),n[n.length-1].a==["A"]&&(n[n.length-1].a=["Flank Attack"]),n[n.length-1].a==["B"]&&(n[n.length-1].a=["Semi-Open Game"]),n[n.length-1].a==["C"]&&(n[n.length-1].a=["Open Game"]),n[n.length-1].a==["D"]&&(n[n.length-1].a=["Closed Position"]),n[n.length-1].a==["E"]&&(n[n.length-1].a=["Indian Game"]),n[n.length-1])}const Kc=["onKeyup"],Ec={__name:"UCISender",setup(i){const e=bi("");function t(){is(e.value)}return(n,a)=>(S(),G(Ot,null,[Za(x("input",{type:"text",placeholder:"UCI command",class:"input w-full h-9 bg-slate-800 font-mono","onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),onKeyup:sc(t,["enter"])},null,40,Kc),[[Ua,e.value]]),x("button",{onClick:t,class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," Send message ")],64))}},zc={class:"rounded-lg bg-slate-800 flex-content"},Ic={class:"scrollable-content-wrapper rounded-lg",id:"stockfishPanelSlider"},Fc=x("div",{class:"divider divider-horizontal"},null,-1),Tc={class:"font-mono",style:{"overflow-wrap":"anywhere"}},Hc={__name:"StockfishMessages",setup(i){return cc(Ct,()=>{let e=document.getElementById("stockfishPanelSlider");e.scrollTop=e.scrollHeight},{deep:!0,flush:"post"}),(e,t)=>(S(),G("div",zc,[x("div",Ic,[(S(!0),G(Ot,null,tn(Le(Ct),(n,a)=>(S(),G("div",{class:ci(["flex space-x-3 items-center p-2",{"bg-slate-700":!n.stockfish}])},[x("div",null,k(a),1),Fc,x("div",Tc,k(n.msg),1)],2))),256))])]))}},Wc={class:"h-full w-full bg-base-300 rounded-lg p-5 flex justify-center items-center space-y-4 flex-col"},jc={class:"flex space-x-2 h-fit w-full"},Yc={class:"w-full flex space-x-4"},$c={class:"min-w-fit"},Zc={class:"w-full"},Uc={class:"w-full flex space-x-4 items-center"},qc={class:"w-full h-full"},Xc={__name:"StockfishPanel",setup(i){return(e,t)=>(S(),G("div",Wc,[x("div",jc,[x("div",{class:ci(["w-full h-fit text-white py-1 px-4 rounded-full text-center",[Le(ri)?"bg-green-300":"bg-yellow-300"]])}," Stockfish "+k(Le(ri)?"running":"paused"),3),x("button",{onClick:t[0]||(t[0]=(...n)=>Le(Ki)&&Le(Ki)(...n)),class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," ↻ Restart ")]),x("div",Yc,[x("p",$c,"Movetime: "+k(Le(ft)),1),x("div",Zc,[Za(x("input",{type:"range",min:"500",max:"10000","onUpdate:modelValue":t[1]||(t[1]=n=>oc(ft)?ft.value=n:null),class:"range range-secondary range-xs w-full"},null,512),[[Ua,Le(ft)]])])]),x("div",Uc,[te(Ec)]),x("div",qc,[te(Hc)])]))}};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function wt(i){return i+.5|0}const Ce=(i,e,t)=>Math.max(Math.min(i,t),e);function lt(i){return Ce(wt(i*2.55),0,255)}function Ge(i){return Ce(wt(i*255),0,255)}function xe(i){return Ce(wt(i/2.55)/100,0,1)}function An(i){return Ce(wt(i*100),0,100)}const oe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ei=[..."0123456789ABCDEF"],Jc=i=>Ei[i&15],eo=i=>Ei[(i&240)>>4]+Ei[i&15],Kt=i=>(i&240)>>4===(i&15),to=i=>Kt(i.r)&&Kt(i.g)&&Kt(i.b)&&Kt(i.a);function io(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&oe[i[1]]*17,g:255&oe[i[2]]*17,b:255&oe[i[3]]*17,a:e===5?oe[i[4]]*17:255}:(e===7||e===9)&&(t={r:oe[i[1]]<<4|oe[i[2]],g:oe[i[3]]<<4|oe[i[4]],b:oe[i[5]]<<4|oe[i[6]],a:e===9?oe[i[7]]<<4|oe[i[8]]:255})),t}const no=(i,e)=>i<255?e(i):"";function ao(i){var e=to(i)?Jc:eo;return i?"#"+e(i.r)+e(i.g)+e(i.b)+no(i.a,e):void 0}const so=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function as(i,e,t){const n=e*Math.min(t,1-t),a=(s,c=(s+i/30)%12)=>t-n*Math.max(Math.min(c-3,9-c,1),-1);return[a(0),a(8),a(4)]}function co(i,e,t){const n=(a,s=(a+i/60)%6)=>t-t*e*Math.max(Math.min(s,4-s,1),0);return[n(5),n(3),n(1)]}function oo(i,e,t){const n=as(i,1,.5);let a;for(e+t>1&&(a=1/(e+t),e*=a,t*=a),a=0;a<3;a++)n[a]*=1-e-t,n[a]+=e;return n}function ro(i,e,t,n,a){return i===a?(e-t)/n+(e<t?6:0):e===a?(t-i)/n+2:(i-e)/n+4}function sn(i){const t=i.r/255,n=i.g/255,a=i.b/255,s=Math.max(t,n,a),c=Math.min(t,n,a),o=(s+c)/2;let r,d,f;return s!==c&&(f=s-c,d=o>.5?f/(2-s-c):f/(s+c),r=ro(t,n,a,f,s),r=r*60+.5),[r|0,d||0,o]}function cn(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(Ge)}function on(i,e,t){return cn(as,i,e,t)}function fo(i,e,t){return cn(oo,i,e,t)}function lo(i,e,t){return cn(co,i,e,t)}function ss(i){return(i%360+360)%360}function No(i){const e=so.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?lt(+e[5]):Ge(+e[5]));const a=ss(+e[2]),s=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?n=fo(a,s,c):e[1]==="hsv"?n=lo(a,s,c):n=on(a,s,c),{r:n[0],g:n[1],b:n[2],a:t}}function ho(i,e){var t=sn(i);t[0]=ss(t[0]+e),t=on(t),i.r=t[0],i.g=t[1],i.b=t[2]}function go(i){if(!i)return;const e=sn(i),t=e[0],n=An(e[1]),a=An(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${a}%, ${xe(i.a)})`:`hsl(${t}, ${n}%, ${a}%)`}const yn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Sn={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function uo(){const i={},e=Object.keys(Sn),t=Object.keys(yn);let n,a,s,c,o;for(n=0;n<e.length;n++){for(c=o=e[n],a=0;a<t.length;a++)s=t[a],o=o.replace(s,yn[s]);s=parseInt(Sn[c],16),i[o]=[s>>16&255,s>>8&255,s&255]}return i}let Et;function Bo(i){Et||(Et=uo(),Et.transparent=[0,0,0,0]);const e=Et[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const bo=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function mo(i){const e=bo.exec(i);let t=255,n,a,s;if(e){if(e[7]!==n){const c=+e[7];t=e[8]?lt(c):Ce(c*255,0,255)}return n=+e[1],a=+e[3],s=+e[5],n=255&(e[2]?lt(n):Ce(n,0,255)),a=255&(e[4]?lt(a):Ce(a,0,255)),s=255&(e[6]?lt(s):Ce(s,0,255)),{r:n,g:a,b:s,a:t}}}function xo(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${xe(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Ai=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,$e=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function po(i,e,t){const n=$e(xe(i.r)),a=$e(xe(i.g)),s=$e(xe(i.b));return{r:Ge(Ai(n+t*($e(xe(e.r))-n))),g:Ge(Ai(a+t*($e(xe(e.g))-a))),b:Ge(Ai(s+t*($e(xe(e.b))-s))),a:i.a+t*(e.a-i.a)}}function zt(i,e,t){if(i){let n=sn(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=on(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function cs(i,e){return i&&Object.assign(e||{},i)}function Gn(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=Ge(i[3]))):(e=cs(i,{r:0,g:0,b:0,a:1}),e.a=Ge(e.a)),e}function Do(i){return i.charAt(0)==="r"?mo(i):No(i)}class At{constructor(e){if(e instanceof At)return e;const t=typeof e;let n;t==="object"?n=Gn(e):t==="string"&&(n=io(e)||Bo(e)||Do(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=cs(this._rgb);return e&&(e.a=xe(e.a)),e}set rgb(e){this._rgb=Gn(e)}rgbString(){return this._valid?xo(this._rgb):void 0}hexString(){return this._valid?ao(this._rgb):void 0}hslString(){return this._valid?go(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,a=e.rgb;let s;const c=t===s?.5:t,o=2*c-1,r=n.a-a.a,d=((o*r===-1?o:(o+r)/(1+o*r))+1)/2;s=1-d,n.r=255&d*n.r+s*a.r+.5,n.g=255&d*n.g+s*a.g+.5,n.b=255&d*n.b+s*a.b+.5,n.a=c*n.a+(1-c)*a.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=po(this._rgb,e._rgb,t)),this}clone(){return new At(this.rgb)}alpha(e){return this._rgb.a=Ge(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=wt(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return zt(this._rgb,2,e),this}darken(e){return zt(this._rgb,2,-e),this}saturate(e){return zt(this._rgb,1,e),this}desaturate(e){return zt(this._rgb,1,-e),this}rotate(e){return ho(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Be(){}const Oo=(()=>{let i=0;return()=>i++})();function R(i){return i===null||typeof i>"u"}function z(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function P(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function H(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function se(i,e){return H(i)?i:e}function _(i,e){return typeof i>"u"?e:i}const Vo=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/e,os=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function E(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function L(i,e,t,n){let a,s,c;if(z(i))if(s=i.length,n)for(a=s-1;a>=0;a--)e.call(t,i[a],a);else for(a=0;a<s;a++)e.call(t,i[a],a);else if(P(i))for(c=Object.keys(i),s=c.length,a=0;a<s;a++)e.call(t,i[c[a]],c[a])}function di(i,e){let t,n,a,s;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(a=i[t],s=e[t],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function fi(i){if(z(i))return i.map(fi);if(P(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let a=0;for(;a<n;++a)e[t[a]]=fi(i[t[a]]);return e}return i}function rs(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Co(i,e,t,n){if(!rs(i))return;const a=e[i],s=t[i];P(a)&&P(s)?yt(a,s,n):e[i]=fi(s)}function yt(i,e,t){const n=z(e)?e:[e],a=n.length;if(!P(i))return i;t=t||{};const s=t.merger||Co;let c;for(let o=0;o<a;++o){if(c=n[o],!P(c))continue;const r=Object.keys(c);for(let d=0,f=r.length;d<f;++d)s(r[d],i,c,t)}return i}function bt(i,e){return yt(i,e,{merger:Ao})}function Ao(i,e,t){if(!rs(i))return;const n=e[i],a=t[i];P(n)&&P(a)?bt(n,a):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=fi(a))}const kn={"":i=>i,x:i=>i.x,y:i=>i.y};function yo(i){const e=i.split("."),t=[];let n="";for(const a of e)n+=a,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function So(i){const e=yo(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function ke(i,e){return(kn[e]||(kn[e]=So(e)))(i)}function rn(i){return i.charAt(0).toUpperCase()+i.slice(1)}const St=i=>typeof i<"u",ve=i=>typeof i=="function",vn=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function Go(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const T=Math.PI,I=2*T,ko=I+T,li=Number.POSITIVE_INFINITY,vo=T/180,W=T/2,we=T/4,_n=T*2/3,Ae=Math.log10,ue=Math.sign;function mt(i,e,t){return Math.abs(i-e)<t}function Mn(i){const e=Math.round(i);i=mt(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor(Ae(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function _o(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((a,s)=>a-s).pop(),e}function qe(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Mo(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function ds(i,e,t){let n,a,s;for(n=0,a=i.length;n<a;n++)s=i[n][t],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function de(i){return i*(T/180)}function dn(i){return i*(180/T)}function wn(i){if(!H(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function fs(i,e){const t=e.x-i.x,n=e.y-i.y,a=Math.sqrt(t*t+n*n);let s=Math.atan2(n,t);return s<-.5*T&&(s+=I),{angle:s,distance:a}}function zi(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function wo(i,e){return(i-e+ko)%I-T}function ce(i){return(i%I+I)%I}function Gt(i,e,t,n){const a=ce(i),s=ce(e),c=ce(t),o=ce(s-a),r=ce(c-a),d=ce(a-s),f=ce(a-c);return a===s||a===c||n&&s===c||o>r&&d<f}function Z(i,e,t){return Math.max(e,Math.min(t,i))}function Po(i){return Z(i,-32768,32767)}function De(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function fn(i,e,t){t=t||(c=>i[c]<e);let n=i.length-1,a=0,s;for(;n-a>1;)s=a+n>>1,t(s)?a=s:n=s;return{lo:a,hi:n}}const Oe=(i,e,t,n)=>fn(i,t,n?a=>{const s=i[a][e];return s<t||s===t&&i[a+1][e]===t}:a=>i[a][e]<t),Qo=(i,e,t)=>fn(i,t,n=>i[n][e]>=t);function Ro(i,e,t){let n=0,a=i.length;for(;n<a&&i[n]<e;)n++;for(;a>n&&i[a-1]>t;)a--;return n>0||a<i.length?i.slice(n,a):i}const ls=["push","pop","shift","splice","unshift"];function Lo(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ls.forEach(t=>{const n="_onData"+rn(t),a=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...s){const c=a.apply(this,s);return i._chartjs.listeners.forEach(o=>{typeof o[n]=="function"&&o[n](...s)}),c}})})}function Pn(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,a=n.indexOf(e);a!==-1&&n.splice(a,1),!(n.length>0)&&(ls.forEach(s=>{delete i[s]}),delete i._chartjs)}function Ns(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const hs=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function gs(i,e){let t=[],n=!1;return function(...a){t=a,n||(n=!0,hs.call(window,()=>{n=!1,i.apply(e,t)}))}}function Ko(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const ln=i=>i==="start"?"left":i==="end"?"right":"center",X=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,Eo=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function us(i,e,t){const n=e.length;let a=0,s=n;if(i._sorted){const{iScale:c,_parsed:o}=i,r=c.axis,{min:d,max:f,minDefined:l,maxDefined:N}=c.getUserBounds();l&&(a=Z(Math.min(Oe(o,c.axis,d).lo,t?n:Oe(e,r,c.getPixelForValue(d)).lo),0,n-1)),N?s=Z(Math.max(Oe(o,c.axis,f,!0).hi+1,t?0:Oe(e,r,c.getPixelForValue(f),!0).hi+1),a,n)-a:s=n-a}return{start:a,count:s}}function Bs(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,a={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=a,!0;const s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,a),s}const It=i=>i===0||i===1,Qn=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*I/t)),Rn=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*I/t)+1,xt={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*W)+1,easeOutSine:i=>Math.sin(i*W),easeInOutSine:i=>-.5*(Math.cos(T*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>It(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>It(i)?i:Qn(i,.075,.3),easeOutElastic:i=>It(i)?i:Rn(i,.075,.3),easeInOutElastic(i){return It(i)?i:i<.5?.5*Qn(i*2,.1125,.45):.5+.5*Rn(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-xt.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?xt.easeInBounce(i*2)*.5:xt.easeOutBounce(i*2-1)*.5+.5};function Nn(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Ln(i){return Nn(i)?i:new At(i)}function yi(i){return Nn(i)?i:new At(i).saturate(.5).darken(.1).hexString()}const zo=["x","y","borderWidth","radius","tension"],Io=["color","borderColor","backgroundColor"];function Fo(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:Io},numbers:{type:"number",properties:zo}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function To(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Kn=new Map;function Ho(i,e){e=e||{};const t=i+JSON.stringify(e);let n=Kn.get(t);return n||(n=new Intl.NumberFormat(i,e),Kn.set(t,n)),n}function Pt(i,e,t){return Ho(e,t).format(i)}const bs={values(i){return z(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let a,s=i;if(t.length>1){const d=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(d<1e-4||d>1e15)&&(a="scientific"),s=Wo(i,t)}const c=Ae(Math.abs(s)),o=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),r={notation:a,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(r,this.options.ticks.format),Pt(i,n,r)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor(Ae(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?bs.numeric.call(this,i,e,t):""}};function Wo(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var xi={formatters:bs};function jo(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:xi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Te=Object.create(null),Ii=Object.create(null);function pt(i,e){if(!e)return i;const t=e.split(".");for(let n=0,a=t.length;n<a;++n){const s=t[n];i=i[s]||(i[s]=Object.create(null))}return i}function Si(i,e,t){return typeof e=="string"?yt(pt(i,e),t):yt(pt(i,""),e)}class Yo{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,a)=>yi(a.backgroundColor),this.hoverBorderColor=(n,a)=>yi(a.borderColor),this.hoverColor=(n,a)=>yi(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Si(this,e,t)}get(e){return pt(this,e)}describe(e,t){return Si(Ii,e,t)}override(e,t){return Si(Te,e,t)}route(e,t,n,a){const s=pt(this,e),c=pt(this,n),o="_"+t;Object.defineProperties(s,{[o]:{value:s[t],writable:!0},[t]:{enumerable:!0,get(){const r=this[o],d=c[a];return P(r)?Object.assign({},d,r):_(r,d)},set(r){this[o]=r}}})}apply(e){e.forEach(t=>t(this))}}var j=new Yo({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Fo,To,jo]);function $o(i){return!i||R(i.size)||R(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ni(i,e,t,n,a){let s=e[a];return s||(s=e[a]=i.measureText(a).width,t.push(a)),s>n&&(n=s),n}function Zo(i,e,t,n){n=n||{};let a=n.data=n.data||{},s=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},s=n.garbageCollect=[],n.font=e),i.save(),i.font=e;let c=0;const o=t.length;let r,d,f,l,N;for(r=0;r<o;r++)if(l=t[r],l!=null&&!z(l))c=Ni(i,a,s,c,l);else if(z(l))for(d=0,f=l.length;d<f;d++)N=l[d],N!=null&&!z(N)&&(c=Ni(i,a,s,c,N));i.restore();const h=s.length/2;if(h>t.length){for(r=0;r<h;r++)delete a[s[r]];s.splice(0,h)}return c}function Pe(i,e,t){const n=i.currentDevicePixelRatio,a=t!==0?Math.max(t/2,.5):0;return Math.round((e-a)*n)/n+a}function En(i,e){e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore()}function Fi(i,e,t,n){ms(i,e,t,n,null)}function ms(i,e,t,n,a){let s,c,o,r,d,f,l,N;const h=e.pointStyle,u=e.rotation,B=e.radius;let g=(u||0)*vo;if(h&&typeof h=="object"&&(s=h.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(g),i.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),i.restore();return}if(!(isNaN(B)||B<=0)){switch(i.beginPath(),h){default:a?i.ellipse(t,n,a/2,B,0,0,I):i.arc(t,n,B,0,I),i.closePath();break;case"triangle":f=a?a/2:B,i.moveTo(t+Math.sin(g)*f,n-Math.cos(g)*B),g+=_n,i.lineTo(t+Math.sin(g)*f,n-Math.cos(g)*B),g+=_n,i.lineTo(t+Math.sin(g)*f,n-Math.cos(g)*B),i.closePath();break;case"rectRounded":d=B*.516,r=B-d,c=Math.cos(g+we)*r,l=Math.cos(g+we)*(a?a/2-d:r),o=Math.sin(g+we)*r,N=Math.sin(g+we)*(a?a/2-d:r),i.arc(t-l,n-o,d,g-T,g-W),i.arc(t+N,n-c,d,g-W,g),i.arc(t+l,n+o,d,g,g+W),i.arc(t-N,n+c,d,g+W,g+T),i.closePath();break;case"rect":if(!u){r=Math.SQRT1_2*B,f=a?a/2:r,i.rect(t-f,n-r,2*f,2*r);break}g+=we;case"rectRot":l=Math.cos(g)*(a?a/2:B),c=Math.cos(g)*B,o=Math.sin(g)*B,N=Math.sin(g)*(a?a/2:B),i.moveTo(t-l,n-o),i.lineTo(t+N,n-c),i.lineTo(t+l,n+o),i.lineTo(t-N,n+c),i.closePath();break;case"crossRot":g+=we;case"cross":l=Math.cos(g)*(a?a/2:B),c=Math.cos(g)*B,o=Math.sin(g)*B,N=Math.sin(g)*(a?a/2:B),i.moveTo(t-l,n-o),i.lineTo(t+l,n+o),i.moveTo(t+N,n-c),i.lineTo(t-N,n+c);break;case"star":l=Math.cos(g)*(a?a/2:B),c=Math.cos(g)*B,o=Math.sin(g)*B,N=Math.sin(g)*(a?a/2:B),i.moveTo(t-l,n-o),i.lineTo(t+l,n+o),i.moveTo(t+N,n-c),i.lineTo(t-N,n+c),g+=we,l=Math.cos(g)*(a?a/2:B),c=Math.cos(g)*B,o=Math.sin(g)*B,N=Math.sin(g)*(a?a/2:B),i.moveTo(t-l,n-o),i.lineTo(t+l,n+o),i.moveTo(t+N,n-c),i.lineTo(t-N,n+c);break;case"line":c=a?a/2:Math.cos(g)*B,o=Math.sin(g)*B,i.moveTo(t-c,n-o),i.lineTo(t+c,n+o);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(g)*(a?a/2:B),n+Math.sin(g)*B);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function Ve(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function pi(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function Di(i){i.restore()}function Uo(i,e,t,n,a){if(!e)return i.lineTo(t.x,t.y);if(a==="middle"){const s=(e.x+t.x)/2;i.lineTo(s,e.y),i.lineTo(s,t.y)}else a==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function qo(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function Xo(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),R(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function Jo(i,e,t,n,a){if(a.strikethrough||a.underline){const s=i.measureText(n),c=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,r=t-s.actualBoundingBoxAscent,d=t+s.actualBoundingBoxDescent,f=a.strikethrough?(r+d)/2:d;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=a.decorationWidth||2,i.moveTo(c,f),i.lineTo(o,f),i.stroke()}}function er(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function He(i,e,t,n,a,s={}){const c=z(e)?e:[e],o=s.strokeWidth>0&&s.strokeColor!=="";let r,d;for(i.save(),i.font=a.string,Xo(i,s),r=0;r<c.length;++r)d=c[r],s.backdrop&&er(i,s.backdrop),o&&(s.strokeColor&&(i.strokeStyle=s.strokeColor),R(s.strokeWidth)||(i.lineWidth=s.strokeWidth),i.strokeText(d,t,n,s.maxWidth)),i.fillText(d,t,n,s.maxWidth),Jo(i,t,n,d,s),n+=Number(a.lineHeight);i.restore()}function kt(i,e){const{x:t,y:n,w:a,h:s,radius:c}=e;i.arc(t+c.topLeft,n+c.topLeft,c.topLeft,-W,T,!0),i.lineTo(t,n+s-c.bottomLeft),i.arc(t+c.bottomLeft,n+s-c.bottomLeft,c.bottomLeft,T,W,!0),i.lineTo(t+a-c.bottomRight,n+s),i.arc(t+a-c.bottomRight,n+s-c.bottomRight,c.bottomRight,W,0,!0),i.lineTo(t+a,n+c.topRight),i.arc(t+a-c.topRight,n+c.topRight,c.topRight,0,-W,!0),i.lineTo(t+c.topLeft,n)}const tr=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,ir=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function nr(i,e){const t=(""+i).match(tr);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const ar=i=>+i||0;function hn(i,e){const t={},n=P(e),a=n?Object.keys(e):e,s=P(i)?n?c=>_(i[c],i[e[c]]):c=>i[c]:()=>i;for(const c of a)t[c]=ar(s(c));return t}function xs(i){return hn(i,{top:"y",right:"x",bottom:"y",left:"x"})}function Ie(i){return hn(i,["topLeft","topRight","bottomLeft","bottomRight"])}function ee(i){const e=xs(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function $(i,e){i=i||{},e=e||j.font;let t=_(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=_(i.style,e.style);n&&!(""+n).match(ir)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const a={family:_(i.family,e.family),lineHeight:nr(_(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:_(i.weight,e.weight),string:""};return a.string=$o(a),a}function Nt(i,e,t,n){let a=!0,s,c,o;for(s=0,c=i.length;s<c;++s)if(o=i[s],o!==void 0&&(e!==void 0&&typeof o=="function"&&(o=o(e),a=!1),t!==void 0&&z(o)&&(o=o[t%o.length],a=!1),o!==void 0))return n&&!a&&(n.cacheable=!1),o}function sr(i,e,t){const{min:n,max:a}=i,s=os(e,(a-n)/2),c=(o,r)=>t&&o===0?0:o+r;return{min:c(n,-Math.abs(s)),max:c(a,s)}}function Me(i,e){return Object.assign(Object.create(i),e)}function gn(i,e=[""],t,n,a=()=>i[0]){const s=t||i;typeof n>"u"&&(n=Vs("_fallback",i));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:s,_fallback:n,_getTarget:a,override:o=>gn([o,...i],e,s,n)};return new Proxy(c,{deleteProperty(o,r){return delete o[r],delete o._keys,delete i[0][r],!0},get(o,r){return Ds(o,r,()=>hr(r,e,i,o))},getOwnPropertyDescriptor(o,r){return Reflect.getOwnPropertyDescriptor(o._scopes[0],r)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(o,r){return In(o).includes(r)},ownKeys(o){return In(o)},set(o,r,d){const f=o._storage||(o._storage=a());return o[r]=f[r]=d,delete o._keys,!0}})}function Xe(i,e,t,n){const a={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:ps(i,n),setContext:s=>Xe(i,s,t,n),override:s=>Xe(i.override(s),e,t,n)};return new Proxy(a,{deleteProperty(s,c){return delete s[c],delete i[c],!0},get(s,c,o){return Ds(s,c,()=>or(s,c,o))},getOwnPropertyDescriptor(s,c){return s._descriptors.allKeys?Reflect.has(i,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,c)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(s,c){return Reflect.has(i,c)},ownKeys(){return Reflect.ownKeys(i)},set(s,c,o){return i[c]=o,delete s[c],!0}})}function ps(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:a=e.allKeys}=i;return{allKeys:a,scriptable:t,indexable:n,isScriptable:ve(t)?t:()=>t,isIndexable:ve(n)?n:()=>n}}const cr=(i,e)=>i?i+rn(e):e,un=(i,e)=>P(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Ds(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e))return i[e];const n=t();return i[e]=n,n}function or(i,e,t){const{_proxy:n,_context:a,_subProxy:s,_descriptors:c}=i;let o=n[e];return ve(o)&&c.isScriptable(e)&&(o=rr(e,o,i,t)),z(o)&&o.length&&(o=dr(e,o,i,c.isIndexable)),un(e,o)&&(o=Xe(o,a,s&&s[e],c)),o}function rr(i,e,t,n){const{_proxy:a,_context:s,_subProxy:c,_stack:o}=t;if(o.has(i))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+i);o.add(i);let r=e(s,c||n);return o.delete(i),un(i,r)&&(r=Bn(a._scopes,a,i,r)),r}function dr(i,e,t,n){const{_proxy:a,_context:s,_subProxy:c,_descriptors:o}=t;if(typeof s.index<"u"&&n(i))return e[s.index%e.length];if(P(e[0])){const r=e,d=a._scopes.filter(f=>f!==r);e=[];for(const f of r){const l=Bn(d,a,i,f);e.push(Xe(l,s,c&&c[i],o))}}return e}function Os(i,e,t){return ve(i)?i(e,t):i}const fr=(i,e)=>i===!0?e:typeof i=="string"?ke(e,i):void 0;function lr(i,e,t,n,a){for(const s of e){const c=fr(t,s);if(c){i.add(c);const o=Os(c._fallback,t,a);if(typeof o<"u"&&o!==t&&o!==n)return o}else if(c===!1&&typeof n<"u"&&t!==n)return null}return!1}function Bn(i,e,t,n){const a=e._rootScopes,s=Os(e._fallback,t,n),c=[...i,...a],o=new Set;o.add(n);let r=zn(o,c,t,s||t,n);return r===null||typeof s<"u"&&s!==t&&(r=zn(o,c,s,r,n),r===null)?!1:gn(Array.from(o),[""],a,s,()=>Nr(e,t,n))}function zn(i,e,t,n,a){for(;t;)t=lr(i,e,t,n,a);return t}function Nr(i,e,t){const n=i._getTarget();e in n||(n[e]={});const a=n[e];return z(a)&&P(t)?t:a||{}}function hr(i,e,t,n){let a;for(const s of e)if(a=Vs(cr(s,i),t),typeof a<"u")return un(i,a)?Bn(t,n,i,a):a}function Vs(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function In(i){let e=i._keys;return e||(e=i._keys=gr(i._scopes)),e}function gr(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(a=>!a.startsWith("_")))e.add(n);return Array.from(e)}function Cs(i,e,t,n){const{iScale:a}=i,{key:s="r"}=this._parsing,c=new Array(n);let o,r,d,f;for(o=0,r=n;o<r;++o)d=o+t,f=e[d],c[o]={r:a.parse(ke(f,s),d)};return c}const ur=Number.EPSILON||1e-14,Je=(i,e)=>e<i.length&&!i[e].skip&&i[e],As=i=>i==="x"?"y":"x";function Br(i,e,t,n){const a=i.skip?e:i,s=e,c=t.skip?e:t,o=zi(s,a),r=zi(c,s);let d=o/(o+r),f=r/(o+r);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const l=n*d,N=n*f;return{previous:{x:s.x-l*(c.x-a.x),y:s.y-l*(c.y-a.y)},next:{x:s.x+N*(c.x-a.x),y:s.y+N*(c.y-a.y)}}}function br(i,e,t){const n=i.length;let a,s,c,o,r,d=Je(i,0);for(let f=0;f<n-1;++f)if(r=d,d=Je(i,f+1),!(!r||!d)){if(mt(e[f],0,ur)){t[f]=t[f+1]=0;continue}a=t[f]/e[f],s=t[f+1]/e[f],o=Math.pow(a,2)+Math.pow(s,2),!(o<=9)&&(c=3/Math.sqrt(o),t[f]=a*c*e[f],t[f+1]=s*c*e[f])}}function mr(i,e,t="x"){const n=As(t),a=i.length;let s,c,o,r=Je(i,0);for(let d=0;d<a;++d){if(c=o,o=r,r=Je(i,d+1),!o)continue;const f=o[t],l=o[n];c&&(s=(f-c[t])/3,o[`cp1${t}`]=f-s,o[`cp1${n}`]=l-s*e[d]),r&&(s=(r[t]-f)/3,o[`cp2${t}`]=f+s,o[`cp2${n}`]=l+s*e[d])}}function xr(i,e="x"){const t=As(e),n=i.length,a=Array(n).fill(0),s=Array(n);let c,o,r,d=Je(i,0);for(c=0;c<n;++c)if(o=r,r=d,d=Je(i,c+1),!!r){if(d){const f=d[e]-r[e];a[c]=f!==0?(d[t]-r[t])/f:0}s[c]=o?d?ue(a[c-1])!==ue(a[c])?0:(a[c-1]+a[c])/2:a[c-1]:a[c]}br(i,a,s),mr(i,s,e)}function Ft(i,e,t){return Math.max(Math.min(i,t),e)}function pr(i,e){let t,n,a,s,c,o=Ve(i[0],e);for(t=0,n=i.length;t<n;++t)c=s,s=o,o=t<n-1&&Ve(i[t+1],e),s&&(a=i[t],c&&(a.cp1x=Ft(a.cp1x,e.left,e.right),a.cp1y=Ft(a.cp1y,e.top,e.bottom)),o&&(a.cp2x=Ft(a.cp2x,e.left,e.right),a.cp2y=Ft(a.cp2y,e.top,e.bottom)))}function Dr(i,e,t,n,a){let s,c,o,r;if(e.spanGaps&&(i=i.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")xr(i,a);else{let d=n?i[i.length-1]:i[0];for(s=0,c=i.length;s<c;++s)o=i[s],r=Br(d,o,i[Math.min(s+1,c-(n?0:1))%c],e.tension),o.cp1x=r.previous.x,o.cp1y=r.previous.y,o.cp2x=r.next.x,o.cp2y=r.next.y,d=o}e.capBezierPoints&&pr(i,t)}function ys(){return typeof window<"u"&&typeof document<"u"}function bn(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function hi(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const Oi=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function Or(i,e){return Oi(i).getPropertyValue(e)}const Vr=["top","right","bottom","left"];function Fe(i,e,t){const n={};t=t?"-"+t:"";for(let a=0;a<4;a++){const s=Vr[a];n[s]=parseFloat(i[e+"-"+s+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Cr=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function Ar(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:a,offsetY:s}=n;let c=!1,o,r;if(Cr(a,s,i.target))o=a,r=s;else{const d=e.getBoundingClientRect();o=n.clientX-d.left,r=n.clientY-d.top,c=!0}return{x:o,y:r,box:c}}function Ke(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,a=Oi(t),s=a.boxSizing==="border-box",c=Fe(a,"padding"),o=Fe(a,"border","width"),{x:r,y:d,box:f}=Ar(i,t),l=c.left+(f&&o.left),N=c.top+(f&&o.top);let{width:h,height:u}=e;return s&&(h-=c.width+o.width,u-=c.height+o.height),{x:Math.round((r-l)/h*t.width/n),y:Math.round((d-N)/u*t.height/n)}}function yr(i,e,t){let n,a;if(e===void 0||t===void 0){const s=bn(i);if(!s)e=i.clientWidth,t=i.clientHeight;else{const c=s.getBoundingClientRect(),o=Oi(s),r=Fe(o,"border","width"),d=Fe(o,"padding");e=c.width-d.width-r.width,t=c.height-d.height-r.height,n=hi(o.maxWidth,s,"clientWidth"),a=hi(o.maxHeight,s,"clientHeight")}}return{width:e,height:t,maxWidth:n||li,maxHeight:a||li}}const Tt=i=>Math.round(i*10)/10;function Sr(i,e,t,n){const a=Oi(i),s=Fe(a,"margin"),c=hi(a.maxWidth,i,"clientWidth")||li,o=hi(a.maxHeight,i,"clientHeight")||li,r=yr(i,e,t);let{width:d,height:f}=r;if(a.boxSizing==="content-box"){const N=Fe(a,"border","width"),h=Fe(a,"padding");d-=h.width+N.width,f-=h.height+N.height}return d=Math.max(0,d-s.width),f=Math.max(0,n?d/n:f-s.height),d=Tt(Math.min(d,c,r.maxWidth)),f=Tt(Math.min(f,o,r.maxHeight)),d&&!f&&(f=Tt(d/2)),(e!==void 0||t!==void 0)&&n&&r.height&&f>r.height&&(f=r.height,d=Tt(Math.floor(f*n))),{width:d,height:f}}function Fn(i,e,t){const n=e||1,a=Math.floor(i.height*n),s=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const c=i.canvas;return c.style&&(t||!c.style.height&&!c.style.width)&&(c.style.height=`${i.height}px`,c.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||c.height!==a||c.width!==s?(i.currentDevicePixelRatio=n,c.height=a,c.width=s,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const Gr=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return i}();function Tn(i,e){const t=Or(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Ee(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function kr(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function vr(i,e,t,n){const a={x:i.cp2x,y:i.cp2y},s={x:e.cp1x,y:e.cp1y},c=Ee(i,a,t),o=Ee(a,s,t),r=Ee(s,e,t),d=Ee(c,o,t),f=Ee(o,r,t);return Ee(d,f,t)}const _r=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},Mr=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function Ue(i,e,t){return i?_r(e,t):Mr()}function Ss(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function Gs(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function ks(i){return i==="angle"?{between:Gt,compare:wo,normalize:ce}:{between:De,compare:(e,t)=>e-t,normalize:e=>e}}function Hn({start:i,end:e,count:t,loop:n,style:a}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:a}}function wr(i,e,t){const{property:n,start:a,end:s}=t,{between:c,normalize:o}=ks(n),r=e.length;let{start:d,end:f,loop:l}=i,N,h;if(l){for(d+=r,f+=r,N=0,h=r;N<h&&c(o(e[d%r][n]),a,s);++N)d--,f--;d%=r,f%=r}return f<d&&(f+=r),{start:d,end:f,loop:l,style:i.style}}function vs(i,e,t){if(!t)return[i];const{property:n,start:a,end:s}=t,c=e.length,{compare:o,between:r,normalize:d}=ks(n),{start:f,end:l,loop:N,style:h}=wr(i,e,t),u=[];let B=!1,g=null,b,m,O;const D=()=>r(a,O,b)&&o(a,O)!==0,p=()=>o(s,b)===0||r(s,O,b),C=()=>B||D(),A=()=>!B||p();for(let y=f,v=f;y<=l;++y)m=e[y%c],!m.skip&&(b=d(m[n]),b!==O&&(B=r(b,a,s),g===null&&C()&&(g=o(b,a)===0?y:v),g!==null&&A()&&(u.push(Hn({start:g,end:y,loop:N,count:c,style:h})),g=null),v=y,O=b));return g!==null&&u.push(Hn({start:g,end:l,loop:N,count:c,style:h})),u}function _s(i,e){const t=[],n=i.segments;for(let a=0;a<n.length;a++){const s=vs(n[a],i.points,e);s.length&&t.push(...s)}return t}function Pr(i,e,t,n){let a=0,s=e-1;if(t&&!n)for(;a<e&&!i[a].skip;)a++;for(;a<e&&i[a].skip;)a++;for(a%=e,t&&(s+=a);s>a&&i[s%e].skip;)s--;return s%=e,{start:a,end:s}}function Qr(i,e,t,n){const a=i.length,s=[];let c=e,o=i[e],r;for(r=e+1;r<=t;++r){const d=i[r%a];d.skip||d.stop?o.skip||(n=!1,s.push({start:e%a,end:(r-1)%a,loop:n}),e=c=d.stop?r:null):(c=r,o.skip&&(e=r)),o=d}return c!==null&&s.push({start:e%a,end:c%a,loop:n}),s}function Rr(i,e){const t=i.points,n=i.options.spanGaps,a=t.length;if(!a)return[];const s=!!i._loop,{start:c,end:o}=Pr(t,a,s,n);if(n===!0)return Wn(i,[{start:c,end:o,loop:s}],t,e);const r=o<c?o+a:o,d=!!i._fullLoop&&c===0&&o===a-1;return Wn(i,Qr(t,c,r,d),t,e)}function Wn(i,e,t,n){return!n||!n.setContext||!t?e:Lr(i,e,t,n)}function Lr(i,e,t,n){const a=i._chart.getContext(),s=jn(i.options),{_datasetIndex:c,options:{spanGaps:o}}=i,r=t.length,d=[];let f=s,l=e[0].start,N=l;function h(u,B,g,b){const m=o?-1:1;if(u!==B){for(u+=r;t[u%r].skip;)u-=m;for(;t[B%r].skip;)B+=m;u%r!==B%r&&(d.push({start:u%r,end:B%r,loop:g,style:b}),f=b,l=B%r)}}for(const u of e){l=o?l:u.start;let B=t[l%r],g;for(N=l+1;N<=u.end;N++){const b=t[N%r];g=jn(n.setContext(Me(a,{type:"segment",p0:B,p1:b,p0DataIndex:(N-1)%r,p1DataIndex:N%r,datasetIndex:c}))),Kr(g,f)&&h(l,N-1,u.loop,f),B=b,f=g}l<N-1&&h(l,N-1,u.loop,f)}return d}function jn(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Kr(i,e){if(!e)return!1;const t=[],n=function(a,s){return Nn(s)?(t.includes(s)||t.push(s),t.indexOf(s)):s};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Er{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,a){const s=t.listeners[a],c=t.duration;s.forEach(o=>o({chart:e,initial:t.initial,numSteps:c,currentStep:Math.min(n-t.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=hs.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,a)=>{if(!n.running||!n.items.length)return;const s=n.items;let c=s.length-1,o=!1,r;for(;c>=0;--c)r=s[c],r._active?(r._total>n.duration&&(n.duration=r._total),r.tick(e),o=!0):(s[c]=s[s.length-1],s.pop());o&&(a.draw(),this._notify(a,n,e,"progress")),s.length||(n.running=!1,this._notify(a,n,e,"complete"),n.initial=!1),t+=s.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,a)=>Math.max(n,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let a=n.length-1;for(;a>=0;--a)n[a].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var be=new Er;const Yn="transparent",zr={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=Ln(i||Yn),a=n.valid&&Ln(e||Yn);return a&&a.valid?a.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class Ir{constructor(e,t,n,a){const s=t[n];a=Nt([e.to,a,s,e.from]);const c=Nt([e.from,s,a]);this._active=!0,this._fn=e.fn||zr[e.type||typeof c],this._easing=xt[e.easing]||xt.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=c,this._to=a,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const a=this._target[this._prop],s=n-this._start,c=this._duration-s;this._start=n,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=Nt([e.to,t,a,e.from]),this._from=Nt([e.from,a,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,a=this._prop,s=this._from,c=this._loop,o=this._to;let r;if(this._active=s!==o&&(c||t<n),!this._active){this._target[a]=o,this._notify(!0);return}if(t<0){this._target[a]=s;return}r=t/n%2,r=c&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[a]=this._fn(s,o,r)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let a=0;a<n.length;a++)n[a][t]()}}class Ms{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!P(e))return;const t=Object.keys(j.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const s=e[a];if(!P(s))return;const c={};for(const o of t)c[o]=s[o];(z(s.properties)&&s.properties||[a]).forEach(o=>{(o===a||!n.has(o))&&n.set(o,c)})})}_animateOptions(e,t){const n=t.options,a=Tr(e,n);if(!a)return[];const s=this._createAnimations(a,n);return n.$shared&&Fr(e.options.$animations,n).then(()=>{e.options=n},()=>{}),s}_createAnimations(e,t){const n=this._properties,a=[],s=e.$animations||(e.$animations={}),c=Object.keys(t),o=Date.now();let r;for(r=c.length-1;r>=0;--r){const d=c[r];if(d.charAt(0)==="$")continue;if(d==="options"){a.push(...this._animateOptions(e,t));continue}const f=t[d];let l=s[d];const N=n.get(d);if(l)if(N&&l.active()){l.update(N,f,o);continue}else l.cancel();if(!N||!N.duration){e[d]=f;continue}s[d]=l=new Ir(N,e,d,f),a.push(l)}return a}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return be.add(this._chart,n),!0}}function Fr(i,e){const t=[],n=Object.keys(e);for(let a=0;a<n.length;a++){const s=i[n[a]];s&&s.active()&&t.push(s.wait())}return Promise.all(t)}function Tr(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function $n(i,e){const t=i&&i.options||{},n=t.reverse,a=t.min===void 0?e:0,s=t.max===void 0?e:0;return{start:n?s:a,end:n?a:s}}function Hr(i,e,t){if(t===!1)return!1;const n=$n(i,t),a=$n(e,t);return{top:a.end,right:n.end,bottom:a.start,left:n.start}}function Wr(i){let e,t,n,a;return P(i)?(e=i.top,t=i.right,n=i.bottom,a=i.left):e=t=n=a=i,{top:e,right:t,bottom:n,left:a,disabled:i===!1}}function ws(i,e){const t=[],n=i._getSortedDatasetMetas(e);let a,s;for(a=0,s=n.length;a<s;++a)t.push(n[a].index);return t}function Zn(i,e,t,n={}){const a=i.keys,s=n.mode==="single";let c,o,r,d;if(e!==null){for(c=0,o=a.length;c<o;++c){if(r=+a[c],r===t){if(n.all)continue;break}d=i.values[r],H(d)&&(s||e===0||ue(e)===ue(d))&&(e+=d)}return e}}function jr(i){const e=Object.keys(i),t=new Array(e.length);let n,a,s;for(n=0,a=e.length;n<a;++n)s=e[n],t[n]={x:s,y:i[s]};return t}function Un(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function Yr(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function $r(i){const{min:e,max:t,minDefined:n,maxDefined:a}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:a?t:Number.POSITIVE_INFINITY}}function Zr(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function qn(i,e,t,n){for(const a of e.getMatchingVisibleMetas(n).reverse()){const s=i[a.index];if(t&&s>0||!t&&s<0)return a.index}return null}function Xn(i,e){const{chart:t,_cachedMeta:n}=i,a=t._stacks||(t._stacks={}),{iScale:s,vScale:c,index:o}=n,r=s.axis,d=c.axis,f=Yr(s,c,n),l=e.length;let N;for(let h=0;h<l;++h){const u=e[h],{[r]:B,[d]:g}=u,b=u._stacks||(u._stacks={});N=b[d]=Zr(a,f,B),N[o]=g,N._top=qn(N,c,!0,n.type),N._bottom=qn(N,c,!1,n.type);const m=N._visualValues||(N._visualValues={});m[o]=g}}function Gi(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function Ur(i,e){return Me(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function qr(i,e,t){return Me(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function st(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const a of e){const s=a._stacks;if(!s||s[n]===void 0||s[n][t]===void 0)return;delete s[n][t],s[n]._visualValues!==void 0&&s[n]._visualValues[t]!==void 0&&delete s[n]._visualValues[t]}}}const ki=i=>i==="reset"||i==="none",Jn=(i,e)=>e?i:Object.assign({},i),Xr=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:ws(t,!0),values:null};class fe{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Un(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&st(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),a=(l,N,h,u)=>l==="x"?N:l==="r"?u:h,s=t.xAxisID=_(n.xAxisID,Gi(e,"x")),c=t.yAxisID=_(n.yAxisID,Gi(e,"y")),o=t.rAxisID=_(n.rAxisID,Gi(e,"r")),r=t.indexAxis,d=t.iAxisID=a(r,s,c,o),f=t.vAxisID=a(r,c,s,o);t.xScale=this.getScaleForId(s),t.yScale=this.getScaleForId(c),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(d),t.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Pn(this._data,this),e._stacked&&st(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(P(t))this._data=jr(t);else if(n!==t){if(n){Pn(n,this);const a=this._cachedMeta;st(a),a._parsed=[]}t&&Object.isExtensible(t)&&Lo(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let a=!1;this._dataCheck();const s=t._stacked;t._stacked=Un(t.vScale,t),t.stack!==n.stack&&(a=!0,st(t),t.stack=n.stack),this._resyncElements(e),(a||s!==t._stacked)&&Xn(this,t._parsed)}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:a}=this,{iScale:s,_stacked:c}=n,o=s.axis;let r=e===0&&t===a.length?!0:n._sorted,d=e>0&&n._parsed[e-1],f,l,N;if(this._parsing===!1)n._parsed=a,n._sorted=!0,N=a;else{z(a[e])?N=this.parseArrayData(n,a,e,t):P(a[e])?N=this.parseObjectData(n,a,e,t):N=this.parsePrimitiveData(n,a,e,t);const h=()=>l[o]===null||d&&l[o]<d[o];for(f=0;f<t;++f)n._parsed[f+e]=l=N[f],r&&(h()&&(r=!1),d=l);n._sorted=r}c&&Xn(this,N)}parsePrimitiveData(e,t,n,a){const{iScale:s,vScale:c}=e,o=s.axis,r=c.axis,d=s.getLabels(),f=s===c,l=new Array(a);let N,h,u;for(N=0,h=a;N<h;++N)u=N+n,l[N]={[o]:f||s.parse(d[u],u),[r]:c.parse(t[u],u)};return l}parseArrayData(e,t,n,a){const{xScale:s,yScale:c}=e,o=new Array(a);let r,d,f,l;for(r=0,d=a;r<d;++r)f=r+n,l=t[f],o[r]={x:s.parse(l[0],f),y:c.parse(l[1],f)};return o}parseObjectData(e,t,n,a){const{xScale:s,yScale:c}=e,{xAxisKey:o="x",yAxisKey:r="y"}=this._parsing,d=new Array(a);let f,l,N,h;for(f=0,l=a;f<l;++f)N=f+n,h=t[N],d[f]={x:s.parse(ke(h,o),N),y:c.parse(ke(h,r),N)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const a=this.chart,s=this._cachedMeta,c=t[e.axis],o={keys:ws(a,!0),values:t._stacks[e.axis]._visualValues};return Zn(o,c,s.index,{mode:n})}updateRangeFromParsed(e,t,n,a){const s=n[t.axis];let c=s===null?NaN:s;const o=a&&n._stacks[t.axis];a&&o&&(a.values=o,c=Zn(a,s,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,t){const n=this._cachedMeta,a=n._parsed,s=n._sorted&&e===n.iScale,c=a.length,o=this._getOtherScale(e),r=Xr(t,n,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:l}=$r(o);let N,h;function u(){h=a[N];const B=h[o.axis];return!H(h[e.axis])||f>B||l<B}for(N=0;N<c&&!(!u()&&(this.updateRangeFromParsed(d,e,h,r),s));++N);if(s){for(N=c-1;N>=0;--N)if(!u()){this.updateRangeFromParsed(d,e,h,r);break}}return d}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let a,s,c;for(a=0,s=t.length;a<s;++a)c=t[a][e.axis],H(c)&&n.push(c);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,a=t.vScale,s=this.getParsed(e);return{label:n?""+n.getLabelForValue(s[n.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=Wr(_(this.options.clip,Hr(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,a=n.data||[],s=t.chartArea,c=[],o=this._drawStart||0,r=this._drawCount||a.length-o,d=this.options.drawActiveElementsOnTop;let f;for(n.dataset&&n.dataset.draw(e,s,o,r),f=o;f<o+r;++f){const l=a[f];l.hidden||(l.active&&d?c.push(l):l.draw(e,s))}for(f=0;f<c.length;++f)c[f].draw(e,s)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const a=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];s=c.$context||(c.$context=qr(this.getContext(),e,c)),s.parsed=this.getParsed(e),s.raw=a.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=Ur(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!t,s.mode=n,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const a=t==="active",s=this._cachedDataOpts,c=e+"-"+t,o=s[c],r=this.enableOptionSharing&&St(n);if(o)return Jn(o,r);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,e),l=a?[`${e}Hover`,"hover",e,""]:[e,""],N=d.getOptionScopes(this.getDataset(),f),h=Object.keys(j.elements[e]),u=()=>this.getContext(n,a,t),B=d.resolveNamedOptions(N,h,u,l);return B.$shared&&(B.$shared=r,s[c]=Object.freeze(Jn(B,r))),B}_resolveAnimations(e,t,n){const a=this.chart,s=this._cachedDataOpts,c=`animation-${t}`,o=s[c];if(o)return o;let r;if(a.options.animation!==!1){const f=this.chart.config,l=f.datasetAnimationScopeKeys(this._type,t),N=f.getOptionScopes(this.getDataset(),l);r=f.createResolver(N,this.getContext(e,n,t))}const d=new Ms(a,r&&r.animations);return r&&r._cacheable&&(s[c]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||ki(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),a=this._sharedOptions,s=this.getSharedOptions(n),c=this.includeOptions(t,s)||s!==a;return this.updateSharedOptions(s,t,n),{sharedOptions:s,includeOptions:c}}updateElement(e,t,n,a){ki(a)?Object.assign(e,n):this._resolveAnimations(t,a).update(e,n)}updateSharedOptions(e,t,n){e&&!ki(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,a){e.active=a;const s=this.getStyle(t,a);this._resolveAnimations(t,n,a).update(e,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[o,r,d]of this._syncList)this[o](r,d);this._syncList=[];const a=n.length,s=t.length,c=Math.min(s,a);c&&this.parse(0,c),s>a?this._insertElements(a,s-a,e):s<a&&this._removeElements(s,a-s)}_insertElements(e,t,n=!0){const a=this._cachedMeta,s=a.data,c=e+t;let o;const r=d=>{for(d.length+=t,o=d.length-1;o>=c;o--)d[o]=d[o-t]};for(r(s),o=e;o<c;++o)s[o]=new this.dataElementType;this._parsing&&r(a._parsed),this.parse(e,t),n&&this.updateElements(s,e,t,"reset")}updateElements(e,t,n,a){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const a=n._parsed.splice(e,t);n._stacked&&st(n,a)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,a]=e;this[t](n,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}V(fe,"defaults",{}),V(fe,"datasetElementType",null),V(fe,"dataElementType",null);function Jr(i,e){if(!i._cache.$bar){const t=i.getMatchingVisibleMetas(e);let n=[];for(let a=0,s=t.length;a<s;a++)n=n.concat(t[a].controller.getAllParsedValues(i));i._cache.$bar=Ns(n.sort((a,s)=>a-s))}return i._cache.$bar}function ed(i){const e=i.iScale,t=Jr(e,i.type);let n=e._length,a,s,c,o;const r=()=>{c===32767||c===-32768||(St(o)&&(n=Math.min(n,Math.abs(c-o)||n)),o=c)};for(a=0,s=t.length;a<s;++a)c=e.getPixelForValue(t[a]),r();for(o=void 0,a=0,s=e.ticks.length;a<s;++a)c=e.getPixelForTick(a),r();return n}function td(i,e,t,n){const a=t.barThickness;let s,c;return R(a)?(s=e.min*t.categoryPercentage,c=t.barPercentage):(s=a*n,c=1),{chunk:s/n,ratio:c,start:e.pixels[i]-s/2}}function id(i,e,t,n){const a=e.pixels,s=a[i];let c=i>0?a[i-1]:null,o=i<a.length-1?a[i+1]:null;const r=t.categoryPercentage;c===null&&(c=s-(o===null?e.end-e.start:o-s)),o===null&&(o=s+s-c);const d=s-(s-Math.min(c,o))/2*r;return{chunk:Math.abs(o-c)/2*r/n,ratio:t.barPercentage,start:d}}function nd(i,e,t,n){const a=t.parse(i[0],n),s=t.parse(i[1],n),c=Math.min(a,s),o=Math.max(a,s);let r=c,d=o;Math.abs(c)>Math.abs(o)&&(r=o,d=c),e[t.axis]=d,e._custom={barStart:r,barEnd:d,start:a,end:s,min:c,max:o}}function Ps(i,e,t,n){return z(i)?nd(i,e,t,n):e[t.axis]=t.parse(i,n),e}function ea(i,e,t,n){const a=i.iScale,s=i.vScale,c=a.getLabels(),o=a===s,r=[];let d,f,l,N;for(d=t,f=t+n;d<f;++d)N=e[d],l={},l[a.axis]=o||a.parse(c[d],d),r.push(Ps(N,l,s,d));return r}function vi(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function ad(i,e,t){return i!==0?ue(i):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function sd(i){let e,t,n,a,s;return i.horizontal?(e=i.base>i.x,t="left",n="right"):(e=i.base<i.y,t="bottom",n="top"),e?(a="end",s="start"):(a="start",s="end"),{start:t,end:n,reverse:e,top:a,bottom:s}}function cd(i,e,t,n){let a=e.borderSkipped;const s={};if(!a){i.borderSkipped=s;return}if(a===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:o,reverse:r,top:d,bottom:f}=sd(i);a==="middle"&&t&&(i.enableBorderRadius=!0,(t._top||0)===n?a=d:(t._bottom||0)===n?a=f:(s[ta(f,c,o,r)]=!0,a=d)),s[ta(a,c,o,r)]=!0,i.borderSkipped=s}function ta(i,e,t,n){return n?(i=od(i,e,t),i=ia(i,t,e)):i=ia(i,e,t),i}function od(i,e,t){return i===e?t:i===t?e:i}function ia(i,e,t){return i==="start"?e:i==="end"?t:i}function rd(i,{inflateAmount:e},t){i.inflateAmount=e==="auto"?t===1?.33:0:e}class qt extends fe{parsePrimitiveData(e,t,n,a){return ea(e,t,n,a)}parseArrayData(e,t,n,a){return ea(e,t,n,a)}parseObjectData(e,t,n,a){const{iScale:s,vScale:c}=e,{xAxisKey:o="x",yAxisKey:r="y"}=this._parsing,d=s.axis==="x"?o:r,f=c.axis==="x"?o:r,l=[];let N,h,u,B;for(N=n,h=n+a;N<h;++N)B=t[N],u={},u[s.axis]=s.parse(ke(B,d),N),l.push(Ps(ke(B,f),u,c,N));return l}updateRangeFromParsed(e,t,n,a){super.updateRangeFromParsed(e,t,n,a);const s=n._custom;s&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:n,vScale:a}=t,s=this.getParsed(e),c=s._custom,o=vi(c)?"["+c.start+", "+c.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+n.getLabelForValue(s[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,a){const s=a==="reset",{index:c,_cachedMeta:{vScale:o}}=this,r=o.getBasePixel(),d=o.isHorizontal(),f=this._getRuler(),{sharedOptions:l,includeOptions:N}=this._getSharedOptions(t,a);for(let h=t;h<t+n;h++){const u=this.getParsed(h),B=s||R(u[o.axis])?{base:r,head:r}:this._calculateBarValuePixels(h),g=this._calculateBarIndexPixels(h,f),b=(u._stacks||{})[o.axis],m={horizontal:d,base:B.base,enableBorderRadius:!b||vi(u._custom)||c===b._top||c===b._bottom,x:d?B.head:g.center,y:d?g.center:B.head,height:d?g.size:Math.abs(B.size),width:d?Math.abs(B.size):g.size};N&&(m.options=l||this.resolveDataElementOptions(h,e[h].active?"active":a));const O=m.options||e[h].options;cd(m,O,b,c),rd(m,O,f.ratio),this.updateElement(e[h],h,m,a)}}_getStacks(e,t){const{iScale:n}=this._cachedMeta,a=n.getMatchingVisibleMetas(this._type).filter(r=>r.controller.options.grouped),s=n.options.stacked,c=[],o=r=>{const d=r.controller.getParsed(t),f=d&&d[r.vScale.axis];if(R(f)||isNaN(f))return!0};for(const r of a)if(!(t!==void 0&&o(r))&&((s===!1||c.indexOf(r.stack)===-1||s===void 0&&r.stack===void 0)&&c.push(r.stack),r.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,t,n){const a=this._getStacks(e,n),s=t!==void 0?a.indexOf(t):-1;return s===-1?a.length-1:s}_getRuler(){const e=this.options,t=this._cachedMeta,n=t.iScale,a=[];let s,c;for(s=0,c=t.data.length;s<c;++s)a.push(n.getPixelForValue(this.getParsed(s)[n.axis],s));const o=e.barThickness;return{min:o||ed(t),pixels:a,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:n,index:a},options:{base:s,minBarLength:c}}=this,o=s||0,r=this.getParsed(e),d=r._custom,f=vi(d);let l=r[t.axis],N=0,h=n?this.applyStack(t,r,n):l,u,B;h!==l&&(N=h-l,h=l),f&&(l=d.barStart,h=d.barEnd-d.barStart,l!==0&&ue(l)!==ue(d.barEnd)&&(N=0),N+=l);const g=!R(s)&&!f?s:N;let b=t.getPixelForValue(g);if(this.chart.getDataVisibility(e)?u=t.getPixelForValue(N+h):u=b,B=u-b,Math.abs(B)<c){B=ad(B,t,o)*c,l===o&&(b-=B/2);const m=t.getPixelForDecimal(0),O=t.getPixelForDecimal(1),D=Math.min(m,O),p=Math.max(m,O);b=Math.max(Math.min(b,p),D),u=b+B,n&&!f&&(r._stacks[t.axis]._visualValues[a]=t.getValueForPixel(u)-t.getValueForPixel(b))}if(b===t.getPixelForValue(o)){const m=ue(B)*t.getLineWidthForValue(o)/2;b+=m,B-=m}return{size:B,base:b,head:u,center:u+B/2}}_calculateBarIndexPixels(e,t){const n=t.scale,a=this.options,s=a.skipNull,c=_(a.maxBarThickness,1/0);let o,r;if(t.grouped){const d=s?this._getStackCount(e):t.stackCount,f=a.barThickness==="flex"?id(e,t,a,d):td(e,t,a,d),l=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);o=f.start+f.chunk*l+f.chunk/2,r=Math.min(c,f.chunk*f.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),r=Math.min(c,t.min*t.ratio);return{base:o-r/2,head:o+r/2,center:o,size:r}}draw(){const e=this._cachedMeta,t=e.vScale,n=e.data,a=n.length;let s=0;for(;s<a;++s)this.getParsed(s)[t.axis]!==null&&n[s].draw(this._ctx)}}V(qt,"id","bar"),V(qt,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),V(qt,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Xt extends fe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,a){const s=super.parsePrimitiveData(e,t,n,a);for(let c=0;c<s.length;c++)s[c]._custom=this.resolveDataElementOptions(c+n).radius;return s}parseArrayData(e,t,n,a){const s=super.parseArrayData(e,t,n,a);for(let c=0;c<s.length;c++){const o=t[n+c];s[c]._custom=_(o[2],this.resolveDataElementOptions(c+n).radius)}return s}parseObjectData(e,t,n,a){const s=super.parseObjectData(e,t,n,a);for(let c=0;c<s.length;c++){const o=t[n+c];s[c]._custom=_(o&&o.r&&+o.r,this.resolveDataElementOptions(c+n).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,c=this.getParsed(e),o=a.getLabelForValue(c.x),r=s.getLabelForValue(c.y),d=c._custom;return{label:n[e]||"",value:"("+o+", "+r+(d?", "+d:"")+")"}}update(e){const t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:c,vScale:o}=this._cachedMeta,{sharedOptions:r,includeOptions:d}=this._getSharedOptions(t,a),f=c.axis,l=o.axis;for(let N=t;N<t+n;N++){const h=e[N],u=!s&&this.getParsed(N),B={},g=B[f]=s?c.getPixelForDecimal(.5):c.getPixelForValue(u[f]),b=B[l]=s?o.getBasePixel():o.getPixelForValue(u[l]);B.skip=isNaN(g)||isNaN(b),d&&(B.options=r||this.resolveDataElementOptions(N,h.active?"active":a),s&&(B.options.radius=0)),this.updateElement(h,N,B,a)}}resolveDataElementOptions(e,t){const n=this.getParsed(e);let a=super.resolveDataElementOptions(e,t);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return t!=="active"&&(a.radius=0),a.radius+=_(n&&n._custom,s),a}}V(Xt,"id","bubble"),V(Xt,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),V(Xt,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function dd(i,e,t){let n=1,a=1,s=0,c=0;if(e<I){const o=i,r=o+e,d=Math.cos(o),f=Math.sin(o),l=Math.cos(r),N=Math.sin(r),h=(O,D,p)=>Gt(O,o,r,!0)?1:Math.max(D,D*t,p,p*t),u=(O,D,p)=>Gt(O,o,r,!0)?-1:Math.min(D,D*t,p,p*t),B=h(0,d,l),g=h(W,f,N),b=u(T,d,l),m=u(T+W,f,N);n=(B-b)/2,a=(g-m)/2,s=-(B+b)/2,c=-(g+m)/2}return{ratioX:n,ratioY:a,offsetX:s,offsetY:c}}class ze extends fe{constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){const n=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=n;else{let s=r=>+n[r];if(P(n[e])){const{key:r="value"}=this._parsing;s=d=>+ke(n[d],r)}let c,o;for(c=e,o=e+t;c<o;++c)a._parsed[c]=s(c)}}_getRotation(){return de(this.options.rotation-90)}_getCircumference(){return de(this.options.circumference)}_getRotationExtents(){let e=I,t=-I;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const a=this.chart.getDatasetMeta(n).controller,s=a._getRotation(),c=a._getCircumference();e=Math.min(e,s),t=Math.max(t,s+c)}return{rotation:e,circumference:t-e}}update(e){const t=this.chart,{chartArea:n}=t,a=this._cachedMeta,s=a.data,c=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-c)/2,0),r=Math.min(Vo(this.options.cutout,o),1),d=this._getRingWeight(this.index),{circumference:f,rotation:l}=this._getRotationExtents(),{ratioX:N,ratioY:h,offsetX:u,offsetY:B}=dd(l,f,r),g=(n.width-c)/N,b=(n.height-c)/h,m=Math.max(Math.min(g,b)/2,0),O=os(this.options.radius,m),D=Math.max(O*r,0),p=(O-D)/this._getVisibleDatasetWeightTotal();this.offsetX=u*O,this.offsetY=B*O,a.total=this.calculateTotal(),this.outerRadius=O-p*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-p*d,0),this.updateElements(s,0,s.length,e)}_circumference(e,t){const n=this.options,a=this._cachedMeta,s=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*s/I)}updateElements(e,t,n,a){const s=a==="reset",c=this.chart,o=c.chartArea,d=c.options.animation,f=(o.left+o.right)/2,l=(o.top+o.bottom)/2,N=s&&d.animateScale,h=N?0:this.innerRadius,u=N?0:this.outerRadius,{sharedOptions:B,includeOptions:g}=this._getSharedOptions(t,a);let b=this._getRotation(),m;for(m=0;m<t;++m)b+=this._circumference(m,s);for(m=t;m<t+n;++m){const O=this._circumference(m,s),D=e[m],p={x:f+this.offsetX,y:l+this.offsetY,startAngle:b,endAngle:b+O,circumference:O,outerRadius:u,innerRadius:h};g&&(p.options=B||this.resolveDataElementOptions(m,D.active?"active":a)),b+=O,this.updateElement(D,m,p,a)}}calculateTotal(){const e=this._cachedMeta,t=e.data;let n=0,a;for(a=0;a<t.length;a++){const s=e._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!t[a].hidden&&(n+=Math.abs(s))}return n}calculateCircumference(e){const t=this._cachedMeta.total;return t>0&&!isNaN(e)?I*(Math.abs(e)/t):0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=Pt(t._parsed[e],n.options.locale);return{label:a[e]||"",value:s}}getMaxBorderWidth(e){let t=0;const n=this.chart;let a,s,c,o,r;if(!e){for(a=0,s=n.data.datasets.length;a<s;++a)if(n.isDatasetVisible(a)){c=n.getDatasetMeta(a),e=c.data,o=c.controller;break}}if(!e)return 0;for(a=0,s=e.length;a<s;++a)r=o.resolveDataElementOptions(a),r.borderAlign!=="inner"&&(t=Math.max(t,r.borderWidth||0,r.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,a=e.length;n<a;++n){const s=this.resolveDataElementOptions(n);t=Math.max(t,s.offset||0,s.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(_(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}V(ze,"id","doughnut"),V(ze,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),V(ze,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),V(ze,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,c)=>{const r=e.getDatasetMeta(0).controller.getStyle(c);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(c),index:c}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}});class Jt extends fe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:a=[],_dataset:s}=t,c=this.chart._animationsDisabled;let{start:o,count:r}=us(t,a,c);this._drawStart=o,this._drawCount=r,Bs(t)&&(o=0,r=a.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!s._decimated,n.points=a;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(n,void 0,{animated:!c,options:d},e),this.updateElements(a,o,r,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:c,vScale:o,_stacked:r,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:l}=this._getSharedOptions(t,a),N=c.axis,h=o.axis,{spanGaps:u,segment:B}=this.options,g=qe(u)?u:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||s||a==="none",m=t+n,O=e.length;let D=t>0&&this.getParsed(t-1);for(let p=0;p<O;++p){const C=e[p],A=b?C:{};if(p<t||p>=m){A.skip=!0;continue}const y=this.getParsed(p),v=R(y[h]),M=A[N]=c.getPixelForValue(y[N],p),w=A[h]=s||v?o.getBasePixel():o.getPixelForValue(r?this.applyStack(o,y,r):y[h],p);A.skip=isNaN(M)||isNaN(w)||v,A.stop=p>0&&Math.abs(y[N]-D[N])>g,B&&(A.parsed=y,A.raw=d.data[p]),l&&(A.options=f||this.resolveDataElementOptions(p,C.active?"active":a)),b||this.updateElement(C,p,A,a),D=y}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,a=e.data||[];if(!a.length)return n;const s=a[0].size(this.resolveDataElementOptions(0)),c=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(n,s,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}V(Jt,"id","line"),V(Jt,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),V(Jt,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Dt extends fe{constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=Pt(t._parsed[e].r,n.options.locale);return{label:a[e]||"",value:s}}parseObjectData(e,t,n,a){return Cs.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){const e=this._cachedMeta,t={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((n,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<t.min&&(t.min=s),s>t.max&&(t.max=s))}),t}_updateRadius(){const e=this.chart,t=e.chartArea,n=e.options,a=Math.min(t.right-t.left,t.bottom-t.top),s=Math.max(a/2,0),c=Math.max(n.cutoutPercentage?s/100*n.cutoutPercentage:1,0),o=(s-c)/e.getVisibleDatasetCount();this.outerRadius=s-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(e,t,n,a){const s=a==="reset",c=this.chart,r=c.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,l=d.yCenter,N=d.getIndexAngle(0)-.5*T;let h=N,u;const B=360/this.countVisibleElements();for(u=0;u<t;++u)h+=this._computeAngle(u,a,B);for(u=t;u<t+n;u++){const g=e[u];let b=h,m=h+this._computeAngle(u,a,B),O=c.getDataVisibility(u)?d.getDistanceFromCenterForValue(this.getParsed(u).r):0;h=m,s&&(r.animateScale&&(O=0),r.animateRotate&&(b=m=N));const D={x:f,y:l,innerRadius:0,outerRadius:O,startAngle:b,endAngle:m,options:this.resolveDataElementOptions(u,g.active?"active":a)};this.updateElement(g,u,D,a)}}countVisibleElements(){const e=this._cachedMeta;let t=0;return e.data.forEach((n,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?de(this.resolveDataElementOptions(e,t).angle||n):0}}V(Dt,"id","polarArea"),V(Dt,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),V(Dt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,c)=>{const r=e.getDatasetMeta(0).controller.getStyle(c);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(c),index:c}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Ti extends ze{}V(Ti,"id","pie"),V(Ti,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ei extends fe{getLabelAndValue(e){const t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:""+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,a){return Cs.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta,n=t.dataset,a=t.data||[],s=t.iScale.getLabels();if(n.points=a,e!=="resize"){const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0);const o={_loop:!0,_fullLoop:s.length===a.length,options:c};this.updateElement(n,void 0,o,e)}this.updateElements(a,0,a.length,e)}updateElements(e,t,n,a){const s=this._cachedMeta.rScale,c=a==="reset";for(let o=t;o<t+n;o++){const r=e[o],d=this.resolveDataElementOptions(o,r.active?"active":a),f=s.getPointPositionForValue(o,this.getParsed(o).r),l=c?s.xCenter:f.x,N=c?s.yCenter:f.y,h={x:l,y:N,angle:f.angle,skip:isNaN(l)||isNaN(N),options:d};this.updateElement(r,o,h,a)}}}V(ei,"id","radar"),V(ei,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),V(ei,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ti extends fe{getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,c=this.getParsed(e),o=a.getLabelForValue(c.x),r=s.getLabelForValue(c.y);return{label:n[e]||"",value:"("+o+", "+r+")"}}update(e){const t=this._cachedMeta,{data:n=[]}=t,a=this.chart._animationsDisabled;let{start:s,count:c}=us(t,n,a);if(this._drawStart=s,this._drawCount=c,Bs(t)&&(s=0,c=n.length),this.options.showLine){const{dataset:o,_dataset:r}=t;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!r._decimated,o.points=n;const d=this.resolveDatasetElementOptions(e);d.segment=this.options.segment,this.updateElement(o,void 0,{animated:!a,options:d},e)}this.updateElements(n,s,c,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,t,n,a){const s=a==="reset",{iScale:c,vScale:o,_stacked:r,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(t,a),l=this.getSharedOptions(f),N=this.includeOptions(a,l),h=c.axis,u=o.axis,{spanGaps:B,segment:g}=this.options,b=qe(B)?B:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||a==="none";let O=t>0&&this.getParsed(t-1);for(let D=t;D<t+n;++D){const p=e[D],C=this.getParsed(D),A=m?p:{},y=R(C[u]),v=A[h]=c.getPixelForValue(C[h],D),M=A[u]=s||y?o.getBasePixel():o.getPixelForValue(r?this.applyStack(o,C,r):C[u],D);A.skip=isNaN(v)||isNaN(M)||y,A.stop=D>0&&Math.abs(C[h]-O[h])>b,g&&(A.parsed=C,A.raw=d.data[D]),N&&(A.options=l||this.resolveDataElementOptions(D,p.active?"active":a)),m||this.updateElement(p,D,A,a),O=C}this.updateSharedOptions(l,a,f)}getMaxOverflow(){const e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let o=0;for(let r=t.length-1;r>=0;--r)o=Math.max(o,t[r].size(this.resolveDataElementOptions(r))/2);return o>0&&o}const n=e.dataset,a=n.options&&n.options.borderWidth||0;if(!t.length)return a;const s=t[0].size(this.resolveDataElementOptions(0)),c=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(a,s,c)/2}}V(ti,"id","scatter"),V(ti,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),V(ti,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var fd=Object.freeze({__proto__:null,BarController:qt,BubbleController:Xt,DoughnutController:ze,LineController:Jt,PieController:Ti,PolarAreaController:Dt,RadarController:ei,ScatterController:ti});function Qe(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class mn{constructor(e){V(this,"options");this.options=e||{}}static override(e){Object.assign(mn.prototype,e)}init(){}formats(){return Qe()}parse(){return Qe()}format(){return Qe()}add(){return Qe()}diff(){return Qe()}startOf(){return Qe()}endOf(){return Qe()}}var ld={_date:mn};function Nd(i,e,t,n){const{controller:a,data:s,_sorted:c}=i,o=a._cachedMeta.iScale;if(o&&e===o.axis&&e!=="r"&&c&&s.length){const r=o._reversePixels?Qo:Oe;if(n){if(a._sharedOptions){const d=s[0],f=typeof d.getRange=="function"&&d.getRange(e);if(f){const l=r(s,e,t-f),N=r(s,e,t+f);return{lo:l.lo,hi:N.hi}}}}else return r(s,e,t)}return{lo:0,hi:s.length-1}}function Qt(i,e,t,n,a){const s=i.getSortedVisibleDatasetMetas(),c=t[e];for(let o=0,r=s.length;o<r;++o){const{index:d,data:f}=s[o],{lo:l,hi:N}=Nd(s[o],e,c,a);for(let h=l;h<=N;++h){const u=f[h];u.skip||n(u,d,h)}}}function hd(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,a){const s=e?Math.abs(n.x-a.x):0,c=t?Math.abs(n.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(c,2))}}function _i(i,e,t,n,a){const s=[];return!a&&!i.isPointInArea(e)||Qt(i,t,e,function(o,r,d){!a&&!Ve(o,i.chartArea,0)||o.inRange(e.x,e.y,n)&&s.push({element:o,datasetIndex:r,index:d})},!0),s}function gd(i,e,t,n){let a=[];function s(c,o,r){const{startAngle:d,endAngle:f}=c.getProps(["startAngle","endAngle"],n),{angle:l}=fs(c,{x:e.x,y:e.y});Gt(l,d,f)&&a.push({element:c,datasetIndex:o,index:r})}return Qt(i,t,e,s),a}function ud(i,e,t,n,a,s){let c=[];const o=hd(t);let r=Number.POSITIVE_INFINITY;function d(f,l,N){const h=f.inRange(e.x,e.y,a);if(n&&!h)return;const u=f.getCenterPoint(a);if(!(!!s||i.isPointInArea(u))&&!h)return;const g=o(e,u);g<r?(c=[{element:f,datasetIndex:l,index:N}],r=g):g===r&&c.push({element:f,datasetIndex:l,index:N})}return Qt(i,t,e,d),c}function Mi(i,e,t,n,a,s){return!s&&!i.isPointInArea(e)?[]:t==="r"&&!n?gd(i,e,t,a):ud(i,e,t,n,a,s)}function na(i,e,t,n,a){const s=[],c=t==="x"?"inXRange":"inYRange";let o=!1;return Qt(i,t,e,(r,d,f)=>{r[c](e[t],a)&&(s.push({element:r,datasetIndex:d,index:f}),o=o||r.inRange(e.x,e.y,a))}),n&&!o?[]:s}var Bd={evaluateInteractionItems:Qt,modes:{index(i,e,t,n){const a=Ke(e,i),s=t.axis||"x",c=t.includeInvisible||!1,o=t.intersect?_i(i,a,s,n,c):Mi(i,a,s,!1,n,c),r=[];return o.length?(i.getSortedVisibleDatasetMetas().forEach(d=>{const f=o[0].index,l=d.data[f];l&&!l.skip&&r.push({element:l,datasetIndex:d.index,index:f})}),r):[]},dataset(i,e,t,n){const a=Ke(e,i),s=t.axis||"xy",c=t.includeInvisible||!1;let o=t.intersect?_i(i,a,s,n,c):Mi(i,a,s,!1,n,c);if(o.length>0){const r=o[0].datasetIndex,d=i.getDatasetMeta(r).data;o=[];for(let f=0;f<d.length;++f)o.push({element:d[f],datasetIndex:r,index:f})}return o},point(i,e,t,n){const a=Ke(e,i),s=t.axis||"xy",c=t.includeInvisible||!1;return _i(i,a,s,n,c)},nearest(i,e,t,n){const a=Ke(e,i),s=t.axis||"xy",c=t.includeInvisible||!1;return Mi(i,a,s,t.intersect,n,c)},x(i,e,t,n){const a=Ke(e,i);return na(i,a,"x",t.intersect,n)},y(i,e,t,n){const a=Ke(e,i);return na(i,a,"y",t.intersect,n)}}};const Qs=["left","top","right","bottom"];function ct(i,e){return i.filter(t=>t.pos===e)}function aa(i,e){return i.filter(t=>Qs.indexOf(t.pos)===-1&&t.box.axis===e)}function ot(i,e){return i.sort((t,n)=>{const a=e?n:t,s=e?t:n;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function bd(i){const e=[];let t,n,a,s,c,o;for(t=0,n=(i||[]).length;t<n;++t)a=i[t],{position:s,options:{stack:c,stackWeight:o=1}}=a,e.push({index:t,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:c&&s+c,stackWeight:o});return e}function md(i){const e={};for(const t of i){const{stack:n,pos:a,stackWeight:s}=t;if(!n||!Qs.includes(a))continue;const c=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=s}return e}function xd(i,e){const t=md(i),{vBoxMaxWidth:n,hBoxMaxHeight:a}=e;let s,c,o;for(s=0,c=i.length;s<c;++s){o=i[s];const{fullSize:r}=o.box,d=t[o.stack],f=d&&o.stackWeight/d.weight;o.horizontal?(o.width=f?f*n:r&&e.availableWidth,o.height=a):(o.width=n,o.height=f?f*a:r&&e.availableHeight)}return t}function pd(i){const e=bd(i),t=ot(e.filter(d=>d.box.fullSize),!0),n=ot(ct(e,"left"),!0),a=ot(ct(e,"right")),s=ot(ct(e,"top"),!0),c=ot(ct(e,"bottom")),o=aa(e,"x"),r=aa(e,"y");return{fullSize:t,leftAndTop:n.concat(s),rightAndBottom:a.concat(r).concat(c).concat(o),chartArea:ct(e,"chartArea"),vertical:n.concat(a).concat(r),horizontal:s.concat(c).concat(o)}}function sa(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Rs(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function Dd(i,e,t,n){const{pos:a,box:s}=t,c=i.maxPadding;if(!P(a)){t.size&&(i[a]-=t.size);const l=n[t.stack]||{size:0,count:1};l.size=Math.max(l.size,t.horizontal?s.height:s.width),t.size=l.size/l.count,i[a]+=t.size}s.getPadding&&Rs(c,s.getPadding());const o=Math.max(0,e.outerWidth-sa(c,i,"left","right")),r=Math.max(0,e.outerHeight-sa(c,i,"top","bottom")),d=o!==i.w,f=r!==i.h;return i.w=o,i.h=r,t.horizontal?{same:d,other:f}:{same:f,other:d}}function Od(i){const e=i.maxPadding;function t(n){const a=Math.max(e[n]-i[n],0);return i[n]+=a,a}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function Vd(i,e){const t=e.maxPadding;function n(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(c=>{s[c]=Math.max(e[c],t[c])}),s}return n(i?["left","right"]:["top","bottom"])}function ht(i,e,t,n){const a=[];let s,c,o,r,d,f;for(s=0,c=i.length,d=0;s<c;++s){o=i[s],r=o.box,r.update(o.width||e.w,o.height||e.h,Vd(o.horizontal,e));const{same:l,other:N}=Dd(e,t,o,n);d|=l&&a.length,f=f||N,r.fullSize||a.push(o)}return d&&ht(a,e,t,n)||f}function Ht(i,e,t,n,a){i.top=t,i.left=e,i.right=e+n,i.bottom=t+a,i.width=n,i.height=a}function ca(i,e,t,n){const a=t.padding;let{x:s,y:c}=e;for(const o of i){const r=o.box,d=n[o.stack]||{count:1,placed:0,weight:1},f=o.stackWeight/d.weight||1;if(o.horizontal){const l=e.w*f,N=d.size||r.height;St(d.start)&&(c=d.start),r.fullSize?Ht(r,a.left,c,t.outerWidth-a.right-a.left,N):Ht(r,e.left+d.placed,c,l,N),d.start=c,d.placed+=l,c=r.bottom}else{const l=e.h*f,N=d.size||r.width;St(d.start)&&(s=d.start),r.fullSize?Ht(r,s,a.top,N,t.outerHeight-a.bottom-a.top):Ht(r,s,e.top+d.placed,N,l),d.start=s,d.placed+=l,s=r.right}}e.x=s,e.y=c}var J={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const a=ee(i.options.layout.padding),s=Math.max(e-a.width,0),c=Math.max(t-a.height,0),o=pd(i.boxes),r=o.vertical,d=o.horizontal;L(i.boxes,B=>{typeof B.beforeLayout=="function"&&B.beforeLayout()});const f=r.reduce((B,g)=>g.box.options&&g.box.options.display===!1?B:B+1,0)||1,l=Object.freeze({outerWidth:e,outerHeight:t,padding:a,availableWidth:s,availableHeight:c,vBoxMaxWidth:s/2/f,hBoxMaxHeight:c/2}),N=Object.assign({},a);Rs(N,ee(n));const h=Object.assign({maxPadding:N,w:s,h:c,x:a.left,y:a.top},a),u=xd(r.concat(d),l);ht(o.fullSize,h,l,u),ht(r,h,l,u),ht(d,h,l,u)&&ht(r,h,l,u),Od(h),ca(o.leftAndTop,h,l,u),h.x+=h.w,h.y+=h.h,ca(o.rightAndBottom,h,l,u),i.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},L(o.chartArea,B=>{const g=B.box;Object.assign(g,i.chartArea),g.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class Ls{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,a){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,a?Math.floor(t/a):n)}}isAttached(e){return!0}updateConfig(e){}}class Cd extends Ls{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ii="$chartjs",Ad={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},oa=i=>i===null||i==="";function yd(i,e){const t=i.style,n=i.getAttribute("height"),a=i.getAttribute("width");if(i[ii]={initial:{height:n,width:a,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",oa(a)){const s=Tn(i,"width");s!==void 0&&(i.width=s)}if(oa(n))if(i.style.height==="")i.height=i.width/(e||2);else{const s=Tn(i,"height");s!==void 0&&(i.height=s)}return i}const Ks=Gr?{passive:!0}:!1;function Sd(i,e,t){i.addEventListener(e,t,Ks)}function Gd(i,e,t){i.canvas.removeEventListener(e,t,Ks)}function kd(i,e){const t=Ad[i.type]||i.type,{x:n,y:a}=Ke(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:a!==void 0?a:null}}function gi(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function vd(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let c=!1;for(const o of s)c=c||gi(o.addedNodes,n),c=c&&!gi(o.removedNodes,n);c&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}function _d(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let c=!1;for(const o of s)c=c||gi(o.removedNodes,n),c=c&&!gi(o.addedNodes,n);c&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}const vt=new Map;let ra=0;function Es(){const i=window.devicePixelRatio;i!==ra&&(ra=i,vt.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function Md(i,e){vt.size||window.addEventListener("resize",Es),vt.set(i,e)}function wd(i){vt.delete(i),vt.size||window.removeEventListener("resize",Es)}function Pd(i,e,t){const n=i.canvas,a=n&&bn(n);if(!a)return;const s=gs((o,r)=>{const d=a.clientWidth;t(o,r),d<a.clientWidth&&t()},window),c=new ResizeObserver(o=>{const r=o[0],d=r.contentRect.width,f=r.contentRect.height;d===0&&f===0||s(d,f)});return c.observe(a),Md(i,s),c}function wi(i,e,t){t&&t.disconnect(),e==="resize"&&wd(i)}function Qd(i,e,t){const n=i.canvas,a=gs(s=>{i.ctx!==null&&t(kd(s,i))},i);return Sd(n,e,a),a}class Rd extends Ls{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(yd(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[ii])return!1;const n=t[ii].initial;["height","width"].forEach(s=>{const c=n[s];R(c)?t.removeAttribute(s):t.setAttribute(s,c)});const a=n.style||{};return Object.keys(a).forEach(s=>{t.style[s]=a[s]}),t.width=t.width,delete t[ii],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const a=e.$proxies||(e.$proxies={}),c={attach:vd,detach:_d,resize:Pd}[t]||Qd;a[t]=c(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),a=n[t];if(!a)return;({attach:wi,detach:wi,resize:wi}[t]||Gd)(e,t,a),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,a){return Sr(e,t,n,a)}isAttached(e){const t=bn(e);return!!(t&&t.isConnected)}}function Ld(i){return!ys()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Cd:Rd}class le{constructor(){V(this,"x");V(this,"y");V(this,"active",!1);V(this,"options");V(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return qe(this.x)&&qe(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const a={};return e.forEach(s=>{a[s]=n[s]&&n[s].active()?n[s]._to:this[s]}),a}}V(le,"defaults",{}),V(le,"defaultRoutes");function Kd(i,e){const t=i.options.ticks,n=Ed(i),a=Math.min(t.maxTicksLimit||n,n),s=t.major.enabled?Id(e):[],c=s.length,o=s[0],r=s[c-1],d=[];if(c>a)return Fd(e,d,s,c/a),d;const f=zd(s,e,a);if(c>0){let l,N;const h=c>1?Math.round((r-o)/(c-1)):null;for(Wt(e,d,f,R(h)?0:o-h,o),l=0,N=c-1;l<N;l++)Wt(e,d,f,s[l],s[l+1]);return Wt(e,d,f,r,R(h)?e.length:r+h),d}return Wt(e,d,f),d}function Ed(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),a=i._maxLength/t;return Math.floor(Math.min(n,a))}function zd(i,e,t){const n=Td(i),a=e.length/t;if(!n)return Math.max(a,1);const s=_o(n);for(let c=0,o=s.length-1;c<o;c++){const r=s[c];if(r>a)return r}return Math.max(a,1)}function Id(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function Fd(i,e,t,n){let a=0,s=t[0],c;for(n=Math.ceil(n),c=0;c<i.length;c++)c===s&&(e.push(i[c]),a++,s=t[a*n])}function Wt(i,e,t,n,a){const s=_(n,0),c=Math.min(_(a,i.length),i.length);let o=0,r,d,f;for(t=Math.ceil(t),a&&(r=a-n,t=r/Math.floor(r/t)),f=s;f<0;)o++,f=Math.round(s+o*t);for(d=Math.max(s,0);d<c;d++)d===f&&(e.push(i[d]),o++,f=Math.round(s+o*t))}function Td(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const Hd=i=>i==="left"?"right":i==="right"?"left":i,da=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,fa=(i,e)=>Math.min(e||i,i);function la(i,e){const t=[],n=i.length/e,a=i.length;let s=0;for(;s<a;s+=n)t.push(i[Math.floor(s)]);return t}function Wd(i,e,t){const n=i.ticks.length,a=Math.min(e,n-1),s=i._startPixel,c=i._endPixel,o=1e-6;let r=i.getPixelForTick(a),d;if(!(t&&(n===1?d=Math.max(r-s,c-r):e===0?d=(i.getPixelForTick(1)-r)/2:d=(r-i.getPixelForTick(a-1))/2,r+=a<e?d:-d,r<s-o||r>c+o)))return r}function jd(i,e){L(i,t=>{const n=t.gc,a=n.length/2;let s;if(a>e){for(s=0;s<a;++s)delete t.data[n[s]];n.splice(0,a)}})}function rt(i){return i.drawTicks?i.tickLength:0}function Na(i,e){if(!i.display)return 0;const t=$(i.font,e),n=ee(i.padding);return(z(i.text)?i.text.length:1)*t.lineHeight+n.height}function Yd(i,e){return Me(i,{scale:e,type:"scale"})}function $d(i,e,t){return Me(i,{tick:t,index:e,type:"tick"})}function Zd(i,e,t){let n=ln(i);return(t&&e!=="right"||!t&&e==="right")&&(n=Hd(n)),n}function Ud(i,e,t,n){const{top:a,left:s,bottom:c,right:o,chart:r}=i,{chartArea:d,scales:f}=r;let l=0,N,h,u;const B=c-a,g=o-s;if(i.isHorizontal()){if(h=X(n,s,o),P(t)){const b=Object.keys(t)[0],m=t[b];u=f[b].getPixelForValue(m)+B-e}else t==="center"?u=(d.bottom+d.top)/2+B-e:u=da(i,t,e);N=o-s}else{if(P(t)){const b=Object.keys(t)[0],m=t[b];h=f[b].getPixelForValue(m)-g+e}else t==="center"?h=(d.left+d.right)/2-g+e:h=da(i,t,e);u=X(n,c,a),l=t==="left"?-W:W}return{titleX:h,titleY:u,maxWidth:N,rotation:l}}class We extends le{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:a}=this;return e=se(e,Number.POSITIVE_INFINITY),t=se(t,Number.NEGATIVE_INFINITY),n=se(n,Number.POSITIVE_INFINITY),a=se(a,Number.NEGATIVE_INFINITY),{min:se(e,n),max:se(t,a),minDefined:H(e),maxDefined:H(t)}}getMinMax(e){let{min:t,max:n,minDefined:a,maxDefined:s}=this.getUserBounds(),c;if(a&&s)return{min:t,max:n};const o=this.getMatchingVisibleMetas();for(let r=0,d=o.length;r<d;++r)c=o[r].controller.getMinMax(this,e),a||(t=Math.min(t,c.min)),s||(n=Math.max(n,c.max));return t=s&&t>n?n:t,n=a&&t>n?t:n,{min:se(t,se(n,t)),max:se(n,se(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){E(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:a,grace:s,ticks:c}=this.options,o=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=sr(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=o<this.ticks.length;this._convertTicksToLabels(r?la(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=Kd(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){E(this.options.afterUpdate,[this])}beforeSetDimensions(){E(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){E(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),E(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){E(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,a,s;for(n=0,a=e.length;n<a;n++)s=e[n],s.label=E(t.callback,[s.value,n,e],this)}afterTickToLabelConversion(){E(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){E(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=fa(this.ticks.length,e.ticks.maxTicksLimit),a=t.minRotation||0,s=t.maxRotation;let c=a,o,r,d;if(!this._isVisible()||!t.display||a>=s||n<=1||!this.isHorizontal()){this.labelRotation=a;return}const f=this._getLabelSizes(),l=f.widest.width,N=f.highest.height,h=Z(this.chart.width-l,0,this.maxWidth);o=e.offset?this.maxWidth/n:h/(n-1),l+6>o&&(o=h/(n-(e.offset?.5:1)),r=this.maxHeight-rt(e.grid)-t.padding-Na(e.title,this.chart.options.font),d=Math.sqrt(l*l+N*N),c=dn(Math.min(Math.asin(Z((f.highest.height+6)/o,-1,1)),Math.asin(Z(r/d,-1,1))-Math.asin(Z(N/d,-1,1)))),c=Math.max(a,Math.min(s,c))),this.labelRotation=c}afterCalculateLabelRotation(){E(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){E(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:a,grid:s}}=this,c=this._isVisible(),o=this.isHorizontal();if(c){const r=Na(a,t.options.font);if(o?(e.width=this.maxWidth,e.height=rt(s)+r):(e.height=this.maxHeight,e.width=rt(s)+r),n.display&&this.ticks.length){const{first:d,last:f,widest:l,highest:N}=this._getLabelSizes(),h=n.padding*2,u=de(this.labelRotation),B=Math.cos(u),g=Math.sin(u);if(o){const b=n.mirror?0:g*l.width+B*N.height;e.height=Math.min(this.maxHeight,e.height+b+h)}else{const b=n.mirror?0:B*l.width+g*N.height;e.width=Math.min(this.maxWidth,e.width+b+h)}this._calculatePadding(d,f,g,B)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,a){const{ticks:{align:s,padding:c},position:o}=this.options,r=this.labelRotation!==0,d=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,h=0;r?d?(N=a*e.width,h=n*t.height):(N=n*e.height,h=a*t.width):s==="start"?h=t.width:s==="end"?N=e.width:s!=="inner"&&(N=e.width/2,h=t.width/2),this.paddingLeft=Math.max((N-f+c)*this.width/(this.width-f),0),this.paddingRight=Math.max((h-l+c)*this.width/(this.width-l),0)}else{let f=t.height/2,l=e.height/2;s==="start"?(f=0,l=e.height):s==="end"&&(f=t.height,l=0),this.paddingTop=f+c,this.paddingBottom=l+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){E(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)R(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=la(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:a,_longestTextCache:s}=this,c=[],o=[],r=Math.floor(t/fa(t,n));let d=0,f=0,l,N,h,u,B,g,b,m,O,D,p;for(l=0;l<t;l+=r){if(u=e[l].label,B=this._resolveTickFontOptions(l),a.font=g=B.string,b=s[g]=s[g]||{data:{},gc:[]},m=B.lineHeight,O=D=0,!R(u)&&!z(u))O=Ni(a,b.data,b.gc,O,u),D=m;else if(z(u))for(N=0,h=u.length;N<h;++N)p=u[N],!R(p)&&!z(p)&&(O=Ni(a,b.data,b.gc,O,p),D+=m);c.push(O),o.push(D),d=Math.max(O,d),f=Math.max(D,f)}jd(s,t);const C=c.indexOf(d),A=o.indexOf(f),y=v=>({width:c[v]||0,height:o[v]||0});return{first:y(0),last:y(t-1),widest:y(C),highest:y(A),widths:c,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return Po(this._alignToPixels?Pe(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=$d(this.getContext(),e,n))}return this.$context||(this.$context=Yd(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=de(this.labelRotation),n=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),s=this._getLabelSizes(),c=e.autoSkipPadding||0,o=s?s.widest.width+c:0,r=s?s.highest.height+c:0;return this.isHorizontal()?r*n>o*a?o/n:r/a:r*a<o*n?r/n:o/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,a=this.options,{grid:s,position:c,border:o}=a,r=s.offset,d=this.isHorizontal(),l=this.ticks.length+(r?1:0),N=rt(s),h=[],u=o.setContext(this.getContext()),B=u.display?u.width:0,g=B/2,b=function(F){return Pe(n,F,B)};let m,O,D,p,C,A,y,v,M,w,Q,U;if(c==="top")m=b(this.bottom),A=this.bottom-N,v=m-g,w=b(e.top)+g,U=e.bottom;else if(c==="bottom")m=b(this.top),w=e.top,U=b(e.bottom)-g,A=m+g,v=this.top+N;else if(c==="left")m=b(this.right),C=this.right-N,y=m-g,M=b(e.left)+g,Q=e.right;else if(c==="right")m=b(this.left),M=e.left,Q=b(e.right)-g,C=m+g,y=this.left+N;else if(t==="x"){if(c==="center")m=b((e.top+e.bottom)/2+.5);else if(P(c)){const F=Object.keys(c)[0],Y=c[F];m=b(this.chart.scales[F].getPixelForValue(Y))}w=e.top,U=e.bottom,A=m+g,v=A+N}else if(t==="y"){if(c==="center")m=b((e.left+e.right)/2);else if(P(c)){const F=Object.keys(c)[0],Y=c[F];m=b(this.chart.scales[F].getPixelForValue(Y))}C=m-g,y=C-N,M=e.left,Q=e.right}const ae=_(a.ticks.maxTicksLimit,l),K=Math.max(1,Math.ceil(l/ae));for(O=0;O<l;O+=K){const F=this.getContext(O),Y=s.setContext(F),re=o.setContext(F),q=Y.lineWidth,je=Y.color,Rt=re.dash||[],Ye=re.dashOffset,et=Y.tickWidth,tt=Y.tickColor,it=Y.tickBorderDash||[],nt=Y.tickBorderDashOffset;D=Wd(this,O,r),D!==void 0&&(p=Pe(n,D,q),d?C=y=M=Q=p:A=v=w=U=p,h.push({tx1:C,ty1:A,tx2:y,ty2:v,x1:M,y1:w,x2:Q,y2:U,width:q,color:je,borderDash:Rt,borderDashOffset:Ye,tickWidth:et,tickColor:tt,tickBorderDash:it,tickBorderDashOffset:nt}))}return this._ticksLength=l,this._borderValue=m,h}_computeLabelItems(e){const t=this.axis,n=this.options,{position:a,ticks:s}=n,c=this.isHorizontal(),o=this.ticks,{align:r,crossAlign:d,padding:f,mirror:l}=s,N=rt(n.grid),h=N+f,u=l?-f:h,B=-de(this.labelRotation),g=[];let b,m,O,D,p,C,A,y,v,M,w,Q,U="middle";if(a==="top")C=this.bottom-u,A=this._getXAxisLabelAlignment();else if(a==="bottom")C=this.top+u,A=this._getXAxisLabelAlignment();else if(a==="left"){const K=this._getYAxisLabelAlignment(N);A=K.textAlign,p=K.x}else if(a==="right"){const K=this._getYAxisLabelAlignment(N);A=K.textAlign,p=K.x}else if(t==="x"){if(a==="center")C=(e.top+e.bottom)/2+h;else if(P(a)){const K=Object.keys(a)[0],F=a[K];C=this.chart.scales[K].getPixelForValue(F)+h}A=this._getXAxisLabelAlignment()}else if(t==="y"){if(a==="center")p=(e.left+e.right)/2-h;else if(P(a)){const K=Object.keys(a)[0],F=a[K];p=this.chart.scales[K].getPixelForValue(F)}A=this._getYAxisLabelAlignment(N).textAlign}t==="y"&&(r==="start"?U="top":r==="end"&&(U="bottom"));const ae=this._getLabelSizes();for(b=0,m=o.length;b<m;++b){O=o[b],D=O.label;const K=s.setContext(this.getContext(b));y=this.getPixelForTick(b)+s.labelOffset,v=this._resolveTickFontOptions(b),M=v.lineHeight,w=z(D)?D.length:1;const F=w/2,Y=K.color,re=K.textStrokeColor,q=K.textStrokeWidth;let je=A;c?(p=y,A==="inner"&&(b===m-1?je=this.options.reverse?"left":"right":b===0?je=this.options.reverse?"right":"left":je="center"),a==="top"?d==="near"||B!==0?Q=-w*M+M/2:d==="center"?Q=-ae.highest.height/2-F*M+M:Q=-ae.highest.height+M/2:d==="near"||B!==0?Q=M/2:d==="center"?Q=ae.highest.height/2-F*M:Q=ae.highest.height-w*M,l&&(Q*=-1),B!==0&&!K.showLabelBackdrop&&(p+=M/2*Math.sin(B))):(C=y,Q=(1-w)*M/2);let Rt;if(K.showLabelBackdrop){const Ye=ee(K.backdropPadding),et=ae.heights[b],tt=ae.widths[b];let it=Q-Ye.top,nt=0-Ye.left;switch(U){case"middle":it-=et/2;break;case"bottom":it-=et;break}switch(A){case"center":nt-=tt/2;break;case"right":nt-=tt;break}Rt={left:nt,top:it,width:tt+Ye.width,height:et+Ye.height,color:K.backdropColor}}g.push({label:D,font:v,textOffset:Q,options:{rotation:B,color:Y,strokeColor:re,strokeWidth:q,textAlign:je,textBaseline:U,translation:[p,C],backdrop:Rt}})}return g}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-de(this.labelRotation))return e==="top"?"left":"right";let a="center";return t.align==="start"?a="left":t.align==="end"?a="right":t.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:a,padding:s}}=this.options,c=this._getLabelSizes(),o=e+s,r=c.widest.width;let d,f;return t==="left"?a?(f=this.right+s,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f+=r)):(f=this.right-o,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f=this.left)):t==="right"?a?(f=this.left+s,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f-=r)):(f=this.left+o,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:a,width:s,height:c}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,a,s,c),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const a=this.ticks.findIndex(s=>s.value===e);return a>=0?t.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,c;const o=(r,d,f)=>{!f.width||!f.color||(n.save(),n.lineWidth=f.width,n.strokeStyle=f.color,n.setLineDash(f.borderDash||[]),n.lineDashOffset=f.borderDashOffset,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(d.x,d.y),n.stroke(),n.restore())};if(t.display)for(s=0,c=a.length;s<c;++s){const r=a[s];t.drawOnChartArea&&o({x:r.x1,y:r.y1},{x:r.x2,y:r.y2},r),t.drawTicks&&o({x:r.tx1,y:r.ty1},{x:r.tx2,y:r.ty2},{color:r.tickColor,width:r.tickWidth,borderDash:r.tickBorderDash,borderDashOffset:r.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:a}}=this,s=n.setContext(this.getContext()),c=n.display?s.width:0;if(!c)return;const o=a.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let d,f,l,N;this.isHorizontal()?(d=Pe(e,this.left,c)-c/2,f=Pe(e,this.right,o)+o/2,l=N=r):(l=Pe(e,this.top,c)-c/2,N=Pe(e,this.bottom,o)+o/2,d=f=r),t.save(),t.lineWidth=s.width,t.strokeStyle=s.color,t.beginPath(),t.moveTo(d,l),t.lineTo(f,N),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,a=this._computeLabelArea();a&&pi(n,a);const s=this.getLabelItems(e);for(const c of s){const o=c.options,r=c.font,d=c.label,f=c.textOffset;He(n,d,0,f,r,o)}a&&Di(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:a}}=this;if(!n.display)return;const s=$(n.font),c=ee(n.padding),o=n.align;let r=s.lineHeight/2;t==="bottom"||t==="center"||P(t)?(r+=c.bottom,z(n.text)&&(r+=s.lineHeight*(n.text.length-1))):r+=c.top;const{titleX:d,titleY:f,maxWidth:l,rotation:N}=Ud(this,r,t,o);He(e,n.text,0,0,s,{color:n.color,maxWidth:l,rotation:N,textAlign:Zd(o,t,a),textBaseline:"middle",translation:[d,f]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=_(e.grid&&e.grid.z,-1),a=_(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==We.prototype.draw?[{z:t,draw:s=>{this.draw(s)}}]:[{z:n,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:t,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",a=[];let s,c;for(s=0,c=t.length;s<c;++s){const o=t[s];o[n]===this.id&&(!e||o.type===e)&&a.push(o)}return a}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return $(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class jt{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;Jd(t)&&(n=this.register(t));const a=this.items,s=e.id,c=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in a||(a[s]=e,qd(e,c,n),this.override&&j.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,a=this.scope;n in t&&delete t[n],a&&n in j[a]&&(delete j[a][n],this.override&&delete Te[n])}}function qd(i,e,t){const n=yt(Object.create(null),[t?j.get(t):{},j.get(e),i.defaults]);j.set(e,n),i.defaultRoutes&&Xd(e,i.defaultRoutes),i.descriptors&&j.describe(e,i.descriptors)}function Xd(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),a=n.pop(),s=[i].concat(n).join("."),c=e[t].split("."),o=c.pop(),r=c.join(".");j.route(s,a,r,o)})}function Jd(i){return"id"in i&&"defaults"in i}class e4{constructor(){this.controllers=new jt(fe,"datasets",!0),this.elements=new jt(le,"elements"),this.plugins=new jt(Object,"plugins"),this.scales=new jt(We,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(a=>{const s=n||this._getRegistryForType(a);n||s.isForType(a)||s===this.plugins&&a.id?this._exec(e,s,a):L(a,c=>{const o=n||this._getRegistryForType(c);this._exec(e,o,c)})})}_exec(e,t,n){const a=rn(e);E(n["before"+a],[],n),t[e](n),E(n["after"+a],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const a=t.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return a}}var ge=new e4;class t4{constructor(){this._init=[]}notify(e,t,n,a){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=a?this._descriptors(e).filter(a):this._descriptors(e),c=this._notify(s,e,t,n);return t==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),c}_notify(e,t,n,a){a=a||{};for(const s of e){const c=s.plugin,o=c[n],r=[t,a,s.options];if(E(o,r,c)===!1&&a.cancelable)return!1}return!0}invalidate(){R(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,a=_(n.options&&n.options.plugins,{}),s=i4(n);return a===!1&&!t?[]:a4(e,s,a,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,a=(s,c)=>s.filter(o=>!c.some(r=>o.plugin.id===r.plugin.id));this._notify(a(t,n),e,"stop"),this._notify(a(n,t),e,"start")}}function i4(i){const e={},t=[],n=Object.keys(ge.plugins.items);for(let s=0;s<n.length;s++)t.push(ge.getPlugin(n[s]));const a=i.plugins||[];for(let s=0;s<a.length;s++){const c=a[s];t.indexOf(c)===-1&&(t.push(c),e[c.id]=!0)}return{plugins:t,localIds:e}}function n4(i,e){return!e&&i===!1?null:i===!0?{}:i}function a4(i,{plugins:e,localIds:t},n,a){const s=[],c=i.getContext();for(const o of e){const r=o.id,d=n4(n[r],a);d!==null&&s.push({plugin:o,options:s4(i.config,{plugin:o,local:t[r]},d,c)})}return s}function s4(i,{plugin:e,local:t},n,a){const s=i.pluginScopeKeys(e),c=i.getOptionScopes(n,s);return t&&e.defaults&&c.push(e.defaults),i.createResolver(c,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Hi(i,e){const t=j.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function c4(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function o4(i,e){return i===e?"_index_":"_value_"}function ha(i){if(i==="x"||i==="y"||i==="r")return i}function r4(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Wi(i,...e){if(ha(i))return i;for(const t of e){const n=t.axis||r4(t.position)||i.length>1&&ha(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function ga(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function d4(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return ga(i,"x",t[0])||ga(i,"y",t[0])}return{}}function f4(i,e){const t=Te[i.type]||{scales:{}},n=e.scales||{},a=Hi(i.type,e),s=Object.create(null);return Object.keys(n).forEach(c=>{const o=n[c];if(!P(o))return console.error(`Invalid scale configuration for scale: ${c}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const r=Wi(c,o,d4(c,i),j.scales[o.type]),d=o4(r,a),f=t.scales||{};s[c]=bt(Object.create(null),[{axis:r},o,f[r],f[d]])}),i.data.datasets.forEach(c=>{const o=c.type||i.type,r=c.indexAxis||Hi(o,e),f=(Te[o]||{}).scales||{};Object.keys(f).forEach(l=>{const N=c4(l,r),h=c[N+"AxisID"]||N;s[h]=s[h]||Object.create(null),bt(s[h],[{axis:N},n[h],f[l]])})}),Object.keys(s).forEach(c=>{const o=s[c];bt(o,[j.scales[o.type],j.scale])}),s}function zs(i){const e=i.options||(i.options={});e.plugins=_(e.plugins,{}),e.scales=f4(i,e)}function Is(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function l4(i){return i=i||{},i.data=Is(i.data),zs(i),i}const ua=new Map,Fs=new Set;function Yt(i,e){let t=ua.get(i);return t||(t=e(),ua.set(i,t),Fs.add(t)),t}const dt=(i,e,t)=>{const n=ke(e,t);n!==void 0&&i.add(n)};class N4{constructor(e){this._config=l4(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Is(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),zs(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Yt(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return Yt(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return Yt(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return Yt(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let a=n.get(e);return(!a||t)&&(a=new Map,n.set(e,a)),a}getOptionScopes(e,t,n){const{options:a,type:s}=this,c=this._cachedScopes(e,n),o=c.get(t);if(o)return o;const r=new Set;t.forEach(f=>{e&&(r.add(e),f.forEach(l=>dt(r,e,l))),f.forEach(l=>dt(r,a,l)),f.forEach(l=>dt(r,Te[s]||{},l)),f.forEach(l=>dt(r,j,l)),f.forEach(l=>dt(r,Ii,l))});const d=Array.from(r);return d.length===0&&d.push(Object.create(null)),Fs.has(t)&&c.set(t,d),d}chartOptionScopes(){const{options:e,type:t}=this;return[e,Te[t]||{},j.datasets[t]||{},{type:t},j,Ii]}resolveNamedOptions(e,t,n,a=[""]){const s={$shared:!0},{resolver:c,subPrefixes:o}=Ba(this._resolverCache,e,a);let r=c;if(g4(c,t)){s.$shared=!1,n=ve(n)?n():n;const d=this.createResolver(e,n,o);r=Xe(c,n,d)}for(const d of t)s[d]=r[d];return s}createResolver(e,t,n=[""],a){const{resolver:s}=Ba(this._resolverCache,e,n);return P(t)?Xe(s,t,void 0,a):s}}function Ba(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const a=t.join();let s=n.get(a);return s||(s={resolver:gn(e,t),subPrefixes:t.filter(o=>!o.toLowerCase().includes("hover"))},n.set(a,s)),s}const h4=i=>P(i)&&Object.getOwnPropertyNames(i).reduce((e,t)=>e||ve(i[t]),!1);function g4(i,e){const{isScriptable:t,isIndexable:n}=ps(i);for(const a of e){const s=t(a),c=n(a),o=(c||s)&&i[a];if(s&&(ve(o)||h4(o))||c&&z(o))return!0}return!1}var u4="4.3.0";const B4=["top","bottom","left","right","chartArea"];function ba(i,e){return i==="top"||i==="bottom"||B4.indexOf(i)===-1&&e==="x"}function ma(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function xa(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),E(t&&t.onComplete,[i],e)}function b4(i){const e=i.chart,t=e.options.animation;E(t&&t.onProgress,[i],e)}function Ts(i){return ys()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const ni={},pa=i=>{const e=Ts(i);return Object.values(ni).filter(t=>t.canvas===e).pop()};function m4(i,e,t){const n=Object.keys(i);for(const a of n){const s=+a;if(s>=e){const c=i[a];delete i[a],(t>0||s>e)&&(i[s+t]=c)}}}function x4(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function p4(i){const{xScale:e,yScale:t}=i;if(e&&t)return{left:e.left,right:e.right,top:t.top,bottom:t.bottom}}class pe{static register(...e){ge.add(...e),Da()}static unregister(...e){ge.remove(...e),Da()}constructor(e,t){const n=this.config=new N4(t),a=Ts(e),s=pa(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const c=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Ld(a)),this.platform.updateConfig(n);const o=this.platform.acquireContext(a,c.aspectRatio),r=o&&o.canvas,d=r&&r.height,f=r&&r.width;if(this.id=Oo(),this.ctx=o,this.canvas=r,this.width=f,this.height=d,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new t4,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Ko(l=>this.update(l),c.resizeDelay||0),this._dataChanges=[],ni[this.id]=this,!o||!r){console.error("Failed to create chart: can't acquire context from the given item");return}be.listen(this,"complete",xa),be.listen(this,"progress",b4),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:a,_aspectRatio:s}=this;return R(e)?t&&s?s:a?n/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ge}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Fn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return En(this.canvas,this.ctx),this}stop(){return be.stop(this),this}resize(e,t){be.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,a=this.canvas,s=n.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(a,e,t,s),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Fn(this,o,!0)&&(this.notifyPlugins("resize",{size:c}),E(n.onResize,[this,c],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};L(t,(n,a)=>{n.id=a})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,a=Object.keys(n).reduce((c,o)=>(c[o]=!1,c),{});let s=[];t&&(s=s.concat(Object.keys(t).map(c=>{const o=t[c],r=Wi(c,o),d=r==="r",f=r==="x";return{options:o,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),L(s,c=>{const o=c.options,r=o.id,d=Wi(r,o),f=_(o.type,c.dtype);(o.position===void 0||ba(o.position,d)!==ba(c.dposition))&&(o.position=c.dposition),a[r]=!0;let l=null;if(r in n&&n[r].type===f)l=n[r];else{const N=ge.getScale(f);l=new N({id:r,type:f,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(o,e)}),L(a,(c,o)=>{c||delete n[o]}),L(n,c=>{J.configure(this,c,c.options),J.addBox(this,c)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((a,s)=>a.index-s.index),n>t){for(let a=t;a<n;++a)this._destroyDatasetMeta(a);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(ma("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,a)=>{t.filter(s=>s===n._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,a;for(this._removeUnreferencedMetasets(),n=0,a=t.length;n<a;n++){const s=t[n];let c=this.getDatasetMeta(n);const o=s.type||this.config.type;if(c.type&&c.type!==o&&(this._destroyDatasetMeta(n),c=this.getDatasetMeta(n)),c.type=o,c.indexAxis=s.indexAxis||Hi(o,this.options),c.order=s.order||0,c.index=n,c.label=""+s.label,c.visible=this.isDatasetVisible(n),c.controller)c.controller.updateIndex(n),c.controller.linkScales();else{const r=ge.getController(o),{datasetElementType:d,dataElementType:f}=j.datasets[o];Object.assign(r,{dataElementType:ge.getElement(f),datasetElementType:d&&ge.getElement(d)}),c.controller=new r(this,n),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){L(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:l}=this.getDatasetMeta(d),N=!a&&s.indexOf(l)===-1;l.buildOrUpdateElements(N),c=Math.max(+l.getMaxOverflow(),c)}c=this._minPadding=n.layout.autoPadding?c:0,this._updateLayout(c),a||L(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(ma("z","_idx"));const{_active:o,_lastEvent:r}=this;r?this._eventHandler(r,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){L(this.scales,e=>{J.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!vn(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:a,count:s}of t){const c=n==="_removeElements"?-s:s;m4(e,a,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=s=>new Set(e.filter(c=>c[0]===s).map((c,o)=>o+","+c.splice(1).join(","))),a=n(0);for(let s=1;s<t;s++)if(!vn(a,n(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;J.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],L(this.boxes,a=>{n&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,ve(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),a={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(n.controller._update(t),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(be.has(this)?this.attached&&!be.running(this)&&be.start(this):(this.draw(),xa({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:a}=this._resizeBeforeDraw;this._resize(n,a),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let a,s;for(a=0,s=t.length;a<s;++a){const c=t[a];(!e||c.visible)&&n.push(c)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,a=!n.disabled,s=p4(e)||this.chartArea,c={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",c)!==!1&&(a&&pi(t,{left:n.left===!1?0:s.left-n.left,right:n.right===!1?this.width:s.right+n.right,top:n.top===!1?0:s.top-n.top,bottom:n.bottom===!1?this.height:s.bottom+n.bottom}),e.controller.draw(),a&&Di(t),c.cancelable=!1,this.notifyPlugins("afterDatasetDraw",c))}isPointInArea(e){return Ve(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,a){const s=Bd.modes[t];return typeof s=="function"?s(this,e,n,a):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let a=n.filter(s=>s&&s._dataset===t).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(a)),a}getContext(){return this.$context||(this.$context=Me(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const a=n?"show":"hide",s=this.getDatasetMeta(e),c=s.controller._resolveAnimations(void 0,a);St(t)?(s.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),c.update(s,{visible:n}),this.update(o=>o.datasetIndex===e?a:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),be.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),En(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete ni[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(s,c)=>{t.addEventListener(this,s,c),e[s]=c},a=(s,c,o)=>{s.offsetX=c,s.offsetY=o,this._eventHandler(s)};L(this.options.events,s=>n(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(r,d)=>{t.addEventListener(this,r,d),e[r]=d},a=(r,d)=>{e[r]&&(t.removeEventListener(this,r,d),delete e[r])},s=(r,d)=>{this.canvas&&this.resize(r,d)};let c;const o=()=>{a("attach",o),this.attached=!0,this.resize(),n("resize",s),n("detach",c)};c=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),n("attach",o)},t.isAttached(this.canvas)?o():c()}unbindEvents(){L(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},L(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const a=n?"set":"remove";let s,c,o,r;for(t==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),o=0,r=e.length;o<r;++o){c=e[o];const d=c&&this.getDatasetMeta(c.datasetIndex).controller;d&&d[a+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:s,index:c})=>{const o=this.getDatasetMeta(s);if(!o)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:o.data[c],index:c}});!di(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const a=this.options.hover,s=(r,d)=>r.filter(f=>!d.some(l=>f.datasetIndex===l.datasetIndex&&f.index===l.index)),c=s(t,e),o=n?e:s(e,t);c.length&&this.updateHoverStyle(c,a.mode,!1),o.length&&a.mode&&this.updateHoverStyle(o,a.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},a=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,a)===!1)return;const s=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,a),(s||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:a=[],options:s}=this,c=t,o=this._getActiveElements(e,a,n,c),r=Go(e),d=x4(e,this._lastEvent,n,r);n&&(this._lastEvent=null,E(s.onHover,[e,o,this],this),r&&E(s.onClick,[e,o,this],this));const f=!di(o,a);return(f||t)&&(this._active=o,this._updateHoverStyles(o,a,t)),this._lastEvent=d,f}_getActiveElements(e,t,n,a){if(e.type==="mouseout")return[];if(!n)return t;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,a)}}V(pe,"defaults",j),V(pe,"instances",ni),V(pe,"overrides",Te),V(pe,"registry",ge),V(pe,"version",u4),V(pe,"getChart",pa);function Da(){return L(pe.instances,i=>i._plugins.invalidate())}function D4(i,e,t){const{startAngle:n,pixelMargin:a,x:s,y:c,outerRadius:o,innerRadius:r}=e;let d=a/o;i.beginPath(),i.arc(s,c,o,n-d,t+d),r>a?(d=a/r,i.arc(s,c,r,t+d,n-d,!0)):i.arc(s,c,a,t+W,n-W),i.closePath(),i.clip()}function O4(i){return hn(i,["outerStart","outerEnd","innerStart","innerEnd"])}function V4(i,e,t,n){const a=O4(i.options.borderRadius),s=(t-e)/2,c=Math.min(s,n*e/2),o=r=>{const d=(t-Math.min(s,r))*n/2;return Z(r,0,Math.min(s,d))};return{outerStart:o(a.outerStart),outerEnd:o(a.outerEnd),innerStart:Z(a.innerStart,0,c),innerEnd:Z(a.innerEnd,0,c)}}function Ze(i,e,t,n){return{x:t+i*Math.cos(e),y:n+i*Math.sin(e)}}function ui(i,e,t,n,a,s){const{x:c,y:o,startAngle:r,pixelMargin:d,innerRadius:f}=e,l=Math.max(e.outerRadius+n+t-d,0),N=f>0?f+n+t+d:0;let h=0;const u=a-r;if(n){const K=f>0?f-n:0,F=l>0?l-n:0,Y=(K+F)/2,re=Y!==0?u*Y/(Y+n):u;h=(u-re)/2}const B=Math.max(.001,u*l-t/T)/l,g=(u-B)/2,b=r+g+h,m=a-g-h,{outerStart:O,outerEnd:D,innerStart:p,innerEnd:C}=V4(e,N,l,m-b),A=l-O,y=l-D,v=b+O/A,M=m-D/y,w=N+p,Q=N+C,U=b+p/w,ae=m-C/Q;if(i.beginPath(),s){const K=(v+M)/2;if(i.arc(c,o,l,v,K),i.arc(c,o,l,K,M),D>0){const q=Ze(y,M,c,o);i.arc(q.x,q.y,D,M,m+W)}const F=Ze(Q,m,c,o);if(i.lineTo(F.x,F.y),C>0){const q=Ze(Q,ae,c,o);i.arc(q.x,q.y,C,m+W,ae+Math.PI)}const Y=(m-C/N+(b+p/N))/2;if(i.arc(c,o,N,m-C/N,Y,!0),i.arc(c,o,N,Y,b+p/N,!0),p>0){const q=Ze(w,U,c,o);i.arc(q.x,q.y,p,U+Math.PI,b-W)}const re=Ze(A,b,c,o);if(i.lineTo(re.x,re.y),O>0){const q=Ze(A,v,c,o);i.arc(q.x,q.y,O,b-W,v)}}else{i.moveTo(c,o);const K=Math.cos(v)*l+c,F=Math.sin(v)*l+o;i.lineTo(K,F);const Y=Math.cos(M)*l+c,re=Math.sin(M)*l+o;i.lineTo(Y,re)}i.closePath()}function C4(i,e,t,n,a){const{fullCircles:s,startAngle:c,circumference:o}=e;let r=e.endAngle;if(s){ui(i,e,t,n,r,a);for(let d=0;d<s;++d)i.fill();isNaN(o)||(r=c+(o%I||I))}return ui(i,e,t,n,r,a),i.fill(),r}function A4(i,e,t,n,a){const{fullCircles:s,startAngle:c,circumference:o,options:r}=e,{borderWidth:d,borderJoinStyle:f,borderDash:l,borderDashOffset:N}=r,h=r.borderAlign==="inner";if(!d)return;i.setLineDash(l||[]),i.lineDashOffset=N,h?(i.lineWidth=d*2,i.lineJoin=f||"round"):(i.lineWidth=d,i.lineJoin=f||"bevel");let u=e.endAngle;if(s){ui(i,e,t,n,u,a);for(let B=0;B<s;++B)i.stroke();isNaN(o)||(u=c+(o%I||I))}h&&D4(i,e,u),s||(ui(i,e,t,n,u,a),i.stroke())}class gt extends le{constructor(t){super();V(this,"circumference");V(this,"endAngle");V(this,"fullCircles");V(this,"innerRadius");V(this,"outerRadius");V(this,"pixelMargin");V(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.getProps(["x","y"],a),{angle:c,distance:o}=fs(s,{x:t,y:n}),{startAngle:r,endAngle:d,innerRadius:f,outerRadius:l,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],a),h=(this.options.spacing+this.options.borderWidth)/2,B=_(N,d-r)>=I||Gt(c,r,d),g=De(o,f+h,l+h);return B&&g}getCenterPoint(t){const{x:n,y:a,startAngle:s,endAngle:c,innerRadius:o,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:d,spacing:f}=this.options,l=(s+c)/2,N=(o+r+f+d)/2;return{x:n+Math.cos(l)*N,y:a+Math.sin(l)*N}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:a}=this,s=(n.offset||0)/4,c=(n.spacing||0)/2,o=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=a>I?Math.floor(a/I):0,a===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const r=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(r)*s,Math.sin(r)*s);const d=1-Math.sin(Math.min(T,a||0)),f=s*d;t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor,C4(t,this,f,c,o),A4(t,this,f,c,o),t.restore()}}V(gt,"id","arc"),V(gt,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),V(gt,"defaultRoutes",{backgroundColor:"backgroundColor"}),V(gt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"});function Hs(i,e,t=e){i.lineCap=_(t.borderCapStyle,e.borderCapStyle),i.setLineDash(_(t.borderDash,e.borderDash)),i.lineDashOffset=_(t.borderDashOffset,e.borderDashOffset),i.lineJoin=_(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=_(t.borderWidth,e.borderWidth),i.strokeStyle=_(t.borderColor,e.borderColor)}function y4(i,e,t){i.lineTo(t.x,t.y)}function S4(i){return i.stepped?Uo:i.tension||i.cubicInterpolationMode==="monotone"?qo:y4}function Ws(i,e,t={}){const n=i.length,{start:a=0,end:s=n-1}=t,{start:c,end:o}=e,r=Math.max(a,c),d=Math.min(s,o),f=a<c&&s<c||a>o&&s>o;return{count:n,start:r,loop:e.loop,ilen:d<r&&!f?n+d-r:d-r}}function G4(i,e,t,n){const{points:a,options:s}=e,{count:c,start:o,loop:r,ilen:d}=Ws(a,t,n),f=S4(s);let{move:l=!0,reverse:N}=n||{},h,u,B;for(h=0;h<=d;++h)u=a[(o+(N?d-h:h))%c],!u.skip&&(l?(i.moveTo(u.x,u.y),l=!1):f(i,B,u,N,s.stepped),B=u);return r&&(u=a[(o+(N?d:0))%c],f(i,B,u,N,s.stepped)),!!r}function k4(i,e,t,n){const a=e.points,{count:s,start:c,ilen:o}=Ws(a,t,n),{move:r=!0,reverse:d}=n||{};let f=0,l=0,N,h,u,B,g,b;const m=D=>(c+(d?o-D:D))%s,O=()=>{B!==g&&(i.lineTo(f,g),i.lineTo(f,B),i.lineTo(f,b))};for(r&&(h=a[m(0)],i.moveTo(h.x,h.y)),N=0;N<=o;++N){if(h=a[m(N)],h.skip)continue;const D=h.x,p=h.y,C=D|0;C===u?(p<B?B=p:p>g&&(g=p),f=(l*f+D)/++l):(O(),i.lineTo(D,p),u=C,l=0,B=g=p),b=p}O()}function ji(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?k4:G4}function v4(i){return i.stepped?kr:i.tension||i.cubicInterpolationMode==="monotone"?vr:Ee}function _4(i,e,t,n){let a=e._path;a||(a=e._path=new Path2D,e.path(a,t,n)&&a.closePath()),Hs(i,e.options),i.stroke(a)}function M4(i,e,t,n){const{segments:a,options:s}=e,c=ji(e);for(const o of a)Hs(i,s,o.style),i.beginPath(),c(i,e,o,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const w4=typeof Path2D=="function";function P4(i,e,t,n){w4&&!e.options.segment?_4(i,e,t,n):M4(i,e,t,n)}class ye extends le{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const a=n.spanGaps?this._loop:this._fullLoop;Dr(this._points,n,e,a,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Rr(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,a=e[t],s=this.points,c=_s(this,{property:t,start:a,end:a});if(!c.length)return;const o=[],r=v4(n);let d,f;for(d=0,f=c.length;d<f;++d){const{start:l,end:N}=c[d],h=s[l],u=s[N];if(h===u){o.push(h);continue}const B=Math.abs((a-h[t])/(u[t]-h[t])),g=r(h,u,B,n.stepped);g[t]=e[t],o.push(g)}return o.length===1?o[0]:o}pathSegment(e,t,n){return ji(this)(e,this,t,n)}path(e,t,n){const a=this.segments,s=ji(this);let c=this._loop;t=t||0,n=n||this.points.length-t;for(const o of a)c&=s(e,this,o,{start:t,end:t+n-1});return!!c}draw(e,t,n,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),P4(e,this,n,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}V(ye,"id","line"),V(ye,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),V(ye,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),V(ye,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Oa(i,e,t,n){const a=i.options,{[t]:s}=i.getProps([t],n);return Math.abs(e-s)<a.radius+a.hitRadius}class ai extends le{constructor(t){super();V(this,"parsed");V(this,"skip");V(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.options,{x:c,y:o}=this.getProps(["x","y"],a);return Math.pow(t-c,2)+Math.pow(n-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,n){return Oa(this,t,"x",n)}inYRange(t,n){return Oa(this,t,"y",n)}getCenterPoint(t){const{x:n,y:a}=this.getProps(["x","y"],t);return{x:n,y:a}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const a=n&&t.borderWidth||0;return(n+a)*2}draw(t,n){const a=this.options;this.skip||a.radius<.1||!Ve(this,n,this.size(a)/2)||(t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.fillStyle=a.backgroundColor,Fi(t,a,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}V(ai,"id","point"),V(ai,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),V(ai,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function js(i,e){const{x:t,y:n,base:a,width:s,height:c}=i.getProps(["x","y","base","width","height"],e);let o,r,d,f,l;return i.horizontal?(l=c/2,o=Math.min(t,a),r=Math.max(t,a),d=n-l,f=n+l):(l=s/2,o=t-l,r=t+l,d=Math.min(n,a),f=Math.max(n,a)),{left:o,top:d,right:r,bottom:f}}function Se(i,e,t,n){return i?0:Z(e,t,n)}function Q4(i,e,t){const n=i.options.borderWidth,a=i.borderSkipped,s=xs(n);return{t:Se(a.top,s.top,0,t),r:Se(a.right,s.right,0,e),b:Se(a.bottom,s.bottom,0,t),l:Se(a.left,s.left,0,e)}}function R4(i,e,t){const{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),a=i.options.borderRadius,s=Ie(a),c=Math.min(e,t),o=i.borderSkipped,r=n||P(a);return{topLeft:Se(!r||o.top||o.left,s.topLeft,0,c),topRight:Se(!r||o.top||o.right,s.topRight,0,c),bottomLeft:Se(!r||o.bottom||o.left,s.bottomLeft,0,c),bottomRight:Se(!r||o.bottom||o.right,s.bottomRight,0,c)}}function L4(i){const e=js(i),t=e.right-e.left,n=e.bottom-e.top,a=Q4(i,t/2,n/2),s=R4(i,t/2,n/2);return{outer:{x:e.left,y:e.top,w:t,h:n,radius:s},inner:{x:e.left+a.l,y:e.top+a.t,w:t-a.l-a.r,h:n-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function Pi(i,e,t,n){const a=e===null,s=t===null,o=i&&!(a&&s)&&js(i,n);return o&&(a||De(e,o.left,o.right))&&(s||De(t,o.top,o.bottom))}function K4(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function E4(i,e){i.rect(e.x,e.y,e.w,e.h)}function Qi(i,e,t={}){const n=i.x!==t.x?-e:0,a=i.y!==t.y?-e:0,s=(i.x+i.w!==t.x+t.w?e:0)-n,c=(i.y+i.h!==t.y+t.h?e:0)-a;return{x:i.x+n,y:i.y+a,w:i.w+s,h:i.h+c,radius:i.radius}}class si extends le{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:n,backgroundColor:a}}=this,{inner:s,outer:c}=L4(this),o=K4(c.radius)?kt:E4;e.save(),(c.w!==s.w||c.h!==s.h)&&(e.beginPath(),o(e,Qi(c,t,s)),e.clip(),o(e,Qi(s,-t,c)),e.fillStyle=n,e.fill("evenodd")),e.beginPath(),o(e,Qi(s,t)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,t,n){return Pi(this,e,t,n)}inXRange(e,t){return Pi(this,e,null,t)}inYRange(e,t){return Pi(this,null,e,t)}getCenterPoint(e){const{x:t,y:n,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(t+a)/2:t,y:s?n:(n+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}V(si,"id","bar"),V(si,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),V(si,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var z4=Object.freeze({__proto__:null,ArcElement:gt,BarElement:si,LineElement:ye,PointElement:ai});const Yi=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Va=Yi.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function Ys(i){return Yi[i%Yi.length]}function $s(i){return Va[i%Va.length]}function I4(i,e){return i.borderColor=Ys(e),i.backgroundColor=$s(e),++e}function F4(i,e){return i.backgroundColor=i.data.map(()=>Ys(e++)),e}function T4(i,e){return i.backgroundColor=i.data.map(()=>$s(e++)),e}function H4(i){let e=0;return(t,n)=>{const a=i.getDatasetMeta(n).controller;a instanceof ze?e=F4(t,e):a instanceof Dt?e=T4(t,e):a&&(e=I4(t,e))}}function Ca(i){let e;for(e in i)if(i[e].borderColor||i[e].backgroundColor)return!0;return!1}function W4(i){return i&&(i.borderColor||i.backgroundColor)}var j4={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,e,t){if(!t.enabled)return;const{data:{datasets:n},options:a}=i.config,{elements:s}=a;if(!t.forceOverride&&(Ca(n)||W4(a)||s&&Ca(s)))return;const c=H4(i);n.forEach(c)}};function Y4(i,e,t,n,a){const s=a.samples||n;if(s>=t)return i.slice(e,e+t);const c=[],o=(t-2)/(s-2);let r=0;const d=e+t-1;let f=e,l,N,h,u,B;for(c[r++]=i[f],l=0;l<s-2;l++){let g=0,b=0,m;const O=Math.floor((l+1)*o)+1+e,D=Math.min(Math.floor((l+2)*o)+1,t)+e,p=D-O;for(m=O;m<D;m++)g+=i[m].x,b+=i[m].y;g/=p,b/=p;const C=Math.floor(l*o)+1+e,A=Math.min(Math.floor((l+1)*o)+1,t)+e,{x:y,y:v}=i[f];for(h=u=-1,m=C;m<A;m++)u=.5*Math.abs((y-g)*(i[m].y-v)-(y-i[m].x)*(b-v)),u>h&&(h=u,N=i[m],B=m);c[r++]=N,f=B}return c[r++]=i[d],c}function $4(i,e,t,n){let a=0,s=0,c,o,r,d,f,l,N,h,u,B;const g=[],b=e+t-1,m=i[e].x,D=i[b].x-m;for(c=e;c<e+t;++c){o=i[c],r=(o.x-m)/D*n,d=o.y;const p=r|0;if(p===f)d<u?(u=d,l=c):d>B&&(B=d,N=c),a=(s*a+o.x)/++s;else{const C=c-1;if(!R(l)&&!R(N)){const A=Math.min(l,N),y=Math.max(l,N);A!==h&&A!==C&&g.push({...i[A],x:a}),y!==h&&y!==C&&g.push({...i[y],x:a})}c>0&&C!==h&&g.push(i[C]),g.push(o),f=p,s=0,u=B=d,l=N=h=c}}return g}function Zs(i){if(i._decimated){const e=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function Aa(i){i.data.datasets.forEach(e=>{Zs(e)})}function Z4(i,e){const t=e.length;let n=0,a;const{iScale:s}=i,{min:c,max:o,minDefined:r,maxDefined:d}=s.getUserBounds();return r&&(n=Z(Oe(e,s.axis,c).lo,0,t-1)),d?a=Z(Oe(e,s.axis,o).hi+1,n,t)-n:a=t-n,{start:n,count:a}}var U4={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,e,t)=>{if(!t.enabled){Aa(i);return}const n=i.width;i.data.datasets.forEach((a,s)=>{const{_data:c,indexAxis:o}=a,r=i.getDatasetMeta(s),d=c||a.data;if(Nt([o,i.options.indexAxis])==="y"||!r.controller.supportsDecimation)return;const f=i.scales[r.xAxisID];if(f.type!=="linear"&&f.type!=="time"||i.options.parsing)return;let{start:l,count:N}=Z4(r,d);const h=t.threshold||4*n;if(N<=h){Zs(a);return}R(c)&&(a._data=d,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(B){this._data=B}}));let u;switch(t.algorithm){case"lttb":u=Y4(d,l,N,n,t);break;case"min-max":u=$4(d,l,N,n);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}a._decimated=u})},destroy(i){Aa(i)}};function q4(i,e,t){const n=i.segments,a=i.points,s=e.points,c=[];for(const o of n){let{start:r,end:d}=o;d=xn(r,d,a);const f=$i(t,a[r],a[d],o.loop);if(!e.segments){c.push({source:o,target:f,start:a[r],end:a[d]});continue}const l=_s(e,f);for(const N of l){const h=$i(t,s[N.start],s[N.end],N.loop),u=vs(o,a,h);for(const B of u)c.push({source:B,target:N,start:{[t]:ya(f,h,"start",Math.max)},end:{[t]:ya(f,h,"end",Math.min)}})}}return c}function $i(i,e,t,n){if(n)return;let a=e[i],s=t[i];return i==="angle"&&(a=ce(a),s=ce(s)),{property:i,start:a,end:s}}function X4(i,e){const{x:t=null,y:n=null}=i||{},a=e.points,s=[];return e.segments.forEach(({start:c,end:o})=>{o=xn(c,o,a);const r=a[c],d=a[o];n!==null?(s.push({x:r.x,y:n}),s.push({x:d.x,y:n})):t!==null&&(s.push({x:t,y:r.y}),s.push({x:t,y:d.y}))}),s}function xn(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function ya(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function Us(i,e){let t=[],n=!1;return z(i)?(n=!0,t=i):t=X4(i,e),t.length?new ye({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function Sa(i){return i&&i.fill!==!1}function J4(i,e,t){let a=i[e].fill;const s=[e];let c;if(!t)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!H(a))return a;if(c=i[a],!c)return!1;if(c.visible)return a;s.push(a),a=c.fill}return!1}function ef(i,e,t){const n=sf(i);if(P(n))return isNaN(n.value)?!1:n;let a=parseFloat(n);return H(a)&&Math.floor(a)===a?tf(n[0],e,a,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function tf(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function nf(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:P(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function af(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:P(i)?n=i.value:n=e.getBaseValue(),n}function sf(i){const e=i.options,t=e.fill;let n=_(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function cf(i){const{scale:e,index:t,line:n}=i,a=[],s=n.segments,c=n.points,o=of(e,t);o.push(Us({x:null,y:e.bottom},n));for(let r=0;r<s.length;r++){const d=s[r];for(let f=d.start;f<=d.end;f++)rf(a,c[f],o)}return new ye({points:a,options:{}})}function of(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let a=0;a<n.length;a++){const s=n[a];if(s.index===e)break;s.hidden||t.unshift(s.dataset)}return t}function rf(i,e,t){const n=[];for(let a=0;a<t.length;a++){const s=t[a],{first:c,last:o,point:r}=df(s,e,"x");if(!(!r||c&&o)){if(c)n.unshift(r);else if(i.push(r),!o)break}}i.push(...n)}function df(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const a=n[t],s=i.segments,c=i.points;let o=!1,r=!1;for(let d=0;d<s.length;d++){const f=s[d],l=c[f.start][t],N=c[f.end][t];if(De(a,l,N)){o=a===l,r=a===N;break}}return{first:o,last:r,point:n}}class qs{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:a,y:s,radius:c}=this;return t=t||{start:0,end:I},e.arc(a,s,c,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:a}=this,s=e.angle;return{x:t+Math.cos(s)*a,y:n+Math.sin(s)*a,angle:s}}}function ff(i){const{chart:e,fill:t,line:n}=i;if(H(t))return lf(e,t);if(t==="stack")return cf(i);if(t==="shape")return!0;const a=Nf(i);return a instanceof qs?a:Us(a,n)}function lf(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function Nf(i){return(i.scale||{}).getPointPositionForValue?gf(i):hf(i)}function hf(i){const{scale:e={},fill:t}=i,n=nf(t,e);if(H(n)){const a=e.isHorizontal();return{x:a?n:null,y:a?null:n}}return null}function gf(i){const{scale:e,fill:t}=i,n=e.options,a=e.getLabels().length,s=n.reverse?e.max:e.min,c=af(t,e,s),o=[];if(n.grid.circular){const r=e.getPointPositionForValue(0,s);return new qs({x:r.x,y:r.y,radius:e.getDistanceFromCenterForValue(c)})}for(let r=0;r<a;++r)o.push(e.getPointPositionForValue(r,c));return o}function Ri(i,e,t){const n=ff(e),{line:a,scale:s,axis:c}=e,o=a.options,r=o.fill,d=o.backgroundColor,{above:f=d,below:l=d}=r||{};n&&a.points.length&&(pi(i,t),uf(i,{line:a,target:n,above:f,below:l,area:t,scale:s,axis:c}),Di(i))}function uf(i,e){const{line:t,target:n,above:a,below:s,area:c,scale:o}=e,r=t._loop?"angle":e.axis;i.save(),r==="x"&&s!==a&&(Ga(i,n,c.top),ka(i,{line:t,target:n,color:a,scale:o,property:r}),i.restore(),i.save(),Ga(i,n,c.bottom)),ka(i,{line:t,target:n,color:s,scale:o,property:r}),i.restore()}function Ga(i,e,t){const{segments:n,points:a}=e;let s=!0,c=!1;i.beginPath();for(const o of n){const{start:r,end:d}=o,f=a[r],l=a[xn(r,d,a)];s?(i.moveTo(f.x,f.y),s=!1):(i.lineTo(f.x,t),i.lineTo(f.x,f.y)),c=!!e.pathSegment(i,o,{move:c}),c?i.closePath():i.lineTo(l.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function ka(i,e){const{line:t,target:n,property:a,color:s,scale:c}=e,o=q4(t,n,a);for(const{source:r,target:d,start:f,end:l}of o){const{style:{backgroundColor:N=s}={}}=r,h=n!==!0;i.save(),i.fillStyle=N,Bf(i,c,h&&$i(a,f,l)),i.beginPath();const u=!!t.pathSegment(i,r);let B;if(h){u?i.closePath():va(i,n,l,a);const g=!!n.pathSegment(i,d,{move:u,reverse:!0});B=u&&g,B||va(i,n,f,a)}i.closePath(),i.fill(B?"evenodd":"nonzero"),i.restore()}}function Bf(i,e,t){const{top:n,bottom:a}=e.chart.chartArea,{property:s,start:c,end:o}=t||{};s==="x"&&(i.beginPath(),i.rect(c,n,o-c,a-n),i.clip())}function va(i,e,t,n){const a=e.interpolate(t,n);a&&i.lineTo(a.x,a.y)}var bf={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,a=[];let s,c,o,r;for(c=0;c<n;++c)s=i.getDatasetMeta(c),o=s.dataset,r=null,o&&o.options&&o instanceof ye&&(r={visible:i.isDatasetVisible(c),index:c,fill:ef(o,c,n),chart:i,axis:s.controller.options.indexAxis,scale:s.vScale,line:o}),s.$filler=r,a.push(r);for(c=0;c<n;++c)r=a[c],!(!r||r.fill===!1)&&(r.fill=J4(a,c,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",a=i.getSortedVisibleDatasetMetas(),s=i.chartArea;for(let c=a.length-1;c>=0;--c){const o=a[c].$filler;o&&(o.line.updateControlPoints(s,o.axis),n&&o.fill&&Ri(i.ctx,o,s))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let a=n.length-1;a>=0;--a){const s=n[a].$filler;Sa(s)&&Ri(i.ctx,s,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!Sa(n)||t.drawTime!=="beforeDatasetDraw"||Ri(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const _a=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},mf=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class Ma extends le{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=E(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,a)=>e.sort(n,a,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,a=$(n.font),s=a.size,c=this._computeTitleHeight(),{boxWidth:o,itemHeight:r}=_a(n,s);let d,f;t.font=a.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(c,s,o,r)+10):(f=this.maxHeight,d=this._fitCols(c,a,o,r)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(f,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,a){const{ctx:s,maxWidth:c,options:{labels:{padding:o}}}=this,r=this.legendHitBoxes=[],d=this.lineWidths=[0],f=a+o;let l=e;s.textAlign="left",s.textBaseline="middle";let N=-1,h=-f;return this.legendItems.forEach((u,B)=>{const g=n+t/2+s.measureText(u.text).width;(B===0||d[d.length-1]+g+2*o>c)&&(l+=f,d[d.length-(B>0?0:1)]=0,h+=f,N++),r[B]={left:0,top:h,row:N,width:g,height:a},d[d.length-1]+=g+o}),l}_fitCols(e,t,n,a){const{ctx:s,maxHeight:c,options:{labels:{padding:o}}}=this,r=this.legendHitBoxes=[],d=this.columnSizes=[],f=c-e;let l=o,N=0,h=0,u=0,B=0;return this.legendItems.forEach((g,b)=>{const{itemWidth:m,itemHeight:O}=xf(n,t,s,g,a);b>0&&h+O+2*o>f&&(l+=N+o,d.push({width:N,height:h}),u+=N+o,B++,N=h=0),r[b]={left:u,top:h,col:B,width:m,height:O},N=Math.max(N,m),h+=O+o}),l+=N,d.push({width:N,height:h}),l}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:a},rtl:s}}=this,c=Ue(s,this.left,this.width);if(this.isHorizontal()){let o=0,r=X(n,this.left+a,this.right-this.lineWidths[o]);for(const d of t)o!==d.row&&(o=d.row,r=X(n,this.left+a,this.right-this.lineWidths[o])),d.top+=this.top+e+a,d.left=c.leftForLtr(c.x(r),d.width),r+=d.width+a}else{let o=0,r=X(n,this.top+e+a,this.bottom-this.columnSizes[o].height);for(const d of t)d.col!==o&&(o=d.col,r=X(n,this.top+e+a,this.bottom-this.columnSizes[o].height)),d.top=r,d.left+=this.left+a,d.left=c.leftForLtr(c.x(d.left),d.width),r+=d.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;pi(e,this),this._draw(),Di(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:a}=this,{align:s,labels:c}=e,o=j.color,r=Ue(e.rtl,this.left,this.width),d=$(c.font),{padding:f}=c,l=d.size,N=l/2;let h;this.drawTitle(),a.textAlign=r.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:u,boxHeight:B,itemHeight:g}=_a(c,l),b=function(C,A,y){if(isNaN(u)||u<=0||isNaN(B)||B<0)return;a.save();const v=_(y.lineWidth,1);if(a.fillStyle=_(y.fillStyle,o),a.lineCap=_(y.lineCap,"butt"),a.lineDashOffset=_(y.lineDashOffset,0),a.lineJoin=_(y.lineJoin,"miter"),a.lineWidth=v,a.strokeStyle=_(y.strokeStyle,o),a.setLineDash(_(y.lineDash,[])),c.usePointStyle){const M={radius:B*Math.SQRT2/2,pointStyle:y.pointStyle,rotation:y.rotation,borderWidth:v},w=r.xPlus(C,u/2),Q=A+N;ms(a,M,w,Q,c.pointStyleWidth&&u)}else{const M=A+Math.max((l-B)/2,0),w=r.leftForLtr(C,u),Q=Ie(y.borderRadius);a.beginPath(),Object.values(Q).some(U=>U!==0)?kt(a,{x:w,y:M,w:u,h:B,radius:Q}):a.rect(w,M,u,B),a.fill(),v!==0&&a.stroke()}a.restore()},m=function(C,A,y){He(a,y.text,C,A+g/2,d,{strikethrough:y.hidden,textAlign:r.textAlign(y.textAlign)})},O=this.isHorizontal(),D=this._computeTitleHeight();O?h={x:X(s,this.left+f,this.right-n[0]),y:this.top+f+D,line:0}:h={x:this.left+f,y:X(s,this.top+D+f,this.bottom-t[0].height),line:0},Ss(this.ctx,e.textDirection);const p=g+f;this.legendItems.forEach((C,A)=>{a.strokeStyle=C.fontColor,a.fillStyle=C.fontColor;const y=a.measureText(C.text).width,v=r.textAlign(C.textAlign||(C.textAlign=c.textAlign)),M=u+N+y;let w=h.x,Q=h.y;r.setWidth(this.width),O?A>0&&w+M+f>this.right&&(Q=h.y+=p,h.line++,w=h.x=X(s,this.left+f,this.right-n[h.line])):A>0&&Q+p>this.bottom&&(w=h.x=w+t[h.line].width+f,h.line++,Q=h.y=X(s,this.top+D+f,this.bottom-t[h.line].height));const U=r.x(w);if(b(U,Q,C),w=Eo(v,w+u+N,O?w+M:this.right,e.rtl),m(r.x(w),Q,C),O)h.x+=M+f;else if(typeof C.text!="string"){const ae=d.lineHeight;h.y+=Xs(C,ae)}else h.y+=p}),Gs(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=$(t.font),a=ee(t.padding);if(!t.display)return;const s=Ue(e.rtl,this.left,this.width),c=this.ctx,o=t.position,r=n.size/2,d=a.top+r;let f,l=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),f=this.top+d,l=X(e.align,l,this.right-N);else{const u=this.columnSizes.reduce((B,g)=>Math.max(B,g.height),0);f=d+X(e.align,this.top,this.bottom-u-e.labels.padding-this._computeTitleHeight())}const h=X(o,l,l+N);c.textAlign=s.textAlign(ln(o)),c.textBaseline="middle",c.strokeStyle=t.color,c.fillStyle=t.color,c.font=n.string,He(c,t.text,h,f,n)}_computeTitleHeight(){const e=this.options.title,t=$(e.font),n=ee(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,a,s;if(De(e,this.left,this.right)&&De(t,this.top,this.bottom)){for(s=this.legendHitBoxes,n=0;n<s.length;++n)if(a=s[n],De(e,a.left,a.left+a.width)&&De(t,a.top,a.top+a.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!Of(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,s=mf(a,n);a&&!s&&E(t.onLeave,[e,a,this],this),this._hoveredItem=n,n&&!s&&E(t.onHover,[e,n,this],this)}else n&&E(t.onClick,[e,n,this],this)}}function xf(i,e,t,n,a){const s=pf(n,i,e,t),c=Df(a,n,e.lineHeight);return{itemWidth:s,itemHeight:c}}function pf(i,e,t,n){let a=i.text;return a&&typeof a!="string"&&(a=a.reduce((s,c)=>s.length>c.length?s:c)),e+t.size/2+n.measureText(a).width}function Df(i,e,t){let n=i;return typeof e.text!="string"&&(n=Xs(e,t)),n}function Xs(i,e){const t=i.text?i.text.length+.5:0;return e*t}function Of(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var Vf={id:"legend",_element:Ma,start(i,e,t){const n=i.legend=new Ma({ctx:i.ctx,options:t,chart:i});J.configure(i,n,t),J.addBox(i,n)},stop(i){J.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;J.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,a=t.chart;a.isDatasetVisible(n)?(a.hide(n),e.hidden=!0):(a.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:a,color:s,useBorderRadius:c,borderRadius:o}}=i.legend.options;return i._getSortedDatasetMetas().map(r=>{const d=r.controller.getStyle(t?0:void 0),f=ee(d.borderWidth);return{text:e[r.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!r.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:n||d.pointStyle,rotation:d.rotation,textAlign:a||d.textAlign,borderRadius:c&&(o||d.borderRadius),datasetIndex:r.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class pn extends le{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const a=z(n.text)?n.text.length:1;this._padding=ee(n.padding);const s=a*$(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:a,right:s,options:c}=this,o=c.align;let r=0,d,f,l;return this.isHorizontal()?(f=X(o,n,s),l=t+e,d=s-n):(c.position==="left"?(f=n+e,l=X(o,a,t),r=T*-.5):(f=s-e,l=X(o,t,a),r=T*.5),d=a-t),{titleX:f,titleY:l,maxWidth:d,rotation:r}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=$(t.font),s=n.lineHeight/2+this._padding.top,{titleX:c,titleY:o,maxWidth:r,rotation:d}=this._drawArgs(s);He(e,t.text,0,0,n,{color:t.color,maxWidth:r,rotation:d,textAlign:ln(t.align),textBaseline:"middle",translation:[c,o]})}}function Cf(i,e){const t=new pn({ctx:i.ctx,options:e,chart:i});J.configure(i,t,e),J.addBox(i,t),i.titleBlock=t}var Af={id:"title",_element:pn,start(i,e,t){Cf(i,t)},stop(i){const e=i.titleBlock;J.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;J.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $t=new WeakMap;var yf={id:"subtitle",start(i,e,t){const n=new pn({ctx:i.ctx,options:t,chart:i});J.configure(i,n,t),J.addBox(i,n),$t.set(i,n)},stop(i){J.removeBox(i,$t.get(i)),$t.delete(i)},beforeUpdate(i,e,t){const n=$t.get(i);J.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ut={average(i){if(!i.length)return!1;let e,t,n=0,a=0,s=0;for(e=0,t=i.length;e<t;++e){const c=i[e].element;if(c&&c.hasValue()){const o=c.tooltipPosition();n+=o.x,a+=o.y,++s}}return{x:n/s,y:a/s}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,a=Number.POSITIVE_INFINITY,s,c,o;for(s=0,c=i.length;s<c;++s){const r=i[s].element;if(r&&r.hasValue()){const d=r.getCenterPoint(),f=zi(e,d);f<a&&(a=f,o=r)}}if(o){const r=o.tooltipPosition();t=r.x,n=r.y}return{x:t,y:n}}};function he(i,e){return e&&(z(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function me(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Sf(i,e){const{element:t,datasetIndex:n,index:a}=e,s=i.getDatasetMeta(n).controller,{label:c,value:o}=s.getLabelAndValue(a);return{chart:i,label:c,parsed:s.getParsed(a),raw:i.data.datasets[n].data[a],formattedValue:o,dataset:s.getDataset(),dataIndex:a,datasetIndex:n,element:t}}function wa(i,e){const t=i.chart.ctx,{body:n,footer:a,title:s}=i,{boxWidth:c,boxHeight:o}=e,r=$(e.bodyFont),d=$(e.titleFont),f=$(e.footerFont),l=s.length,N=a.length,h=n.length,u=ee(e.padding);let B=u.height,g=0,b=n.reduce((D,p)=>D+p.before.length+p.lines.length+p.after.length,0);if(b+=i.beforeBody.length+i.afterBody.length,l&&(B+=l*d.lineHeight+(l-1)*e.titleSpacing+e.titleMarginBottom),b){const D=e.displayColors?Math.max(o,r.lineHeight):r.lineHeight;B+=h*D+(b-h)*r.lineHeight+(b-1)*e.bodySpacing}N&&(B+=e.footerMarginTop+N*f.lineHeight+(N-1)*e.footerSpacing);let m=0;const O=function(D){g=Math.max(g,t.measureText(D).width+m)};return t.save(),t.font=d.string,L(i.title,O),t.font=r.string,L(i.beforeBody.concat(i.afterBody),O),m=e.displayColors?c+2+e.boxPadding:0,L(n,D=>{L(D.before,O),L(D.lines,O),L(D.after,O)}),m=0,t.font=f.string,L(i.footer,O),t.restore(),g+=u.width,{width:g,height:B}}function Gf(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function kf(i,e,t,n){const{x:a,width:s}=n,c=t.caretSize+t.caretPadding;if(i==="left"&&a+s+c>e.width||i==="right"&&a-s-c<0)return!0}function vf(i,e,t,n){const{x:a,width:s}=t,{width:c,chartArea:{left:o,right:r}}=i;let d="center";return n==="center"?d=a<=(o+r)/2?"left":"right":a<=s/2?d="left":a>=c-s/2&&(d="right"),kf(d,i,e,t)&&(d="center"),d}function Pa(i,e,t){const n=t.yAlign||e.yAlign||Gf(i,t);return{xAlign:t.xAlign||e.xAlign||vf(i,e,t,n),yAlign:n}}function _f(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function Mf(i,e,t){let{y:n,height:a}=i;return e==="top"?n+=t:e==="bottom"?n-=a+t:n-=a/2,n}function Qa(i,e,t,n){const{caretSize:a,caretPadding:s,cornerRadius:c}=i,{xAlign:o,yAlign:r}=t,d=a+s,{topLeft:f,topRight:l,bottomLeft:N,bottomRight:h}=Ie(c);let u=_f(e,o);const B=Mf(e,r,d);return r==="center"?o==="left"?u+=d:o==="right"&&(u-=d):o==="left"?u-=Math.max(f,N)+a:o==="right"&&(u+=Math.max(l,h)+a),{x:Z(u,0,n.width-e.width),y:Z(B,0,n.height-e.height)}}function Zt(i,e,t){const n=ee(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function Ra(i){return he([],me(i))}function wf(i,e,t){return Me(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function La(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const Js={beforeTitle:Be,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:Be,beforeBody:Be,beforeLabel:Be,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return R(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Be,afterBody:Be,beforeFooter:Be,footer:Be,afterFooter:Be};function ie(i,e,t,n){const a=i[e].call(t,n);return typeof a>"u"?Js[e].call(t,n):a}class Zi extends le{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),a=n.enabled&&t.options.animation&&n.animations,s=new Ms(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=wf(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,a=ie(n,"beforeTitle",this,e),s=ie(n,"title",this,e),c=ie(n,"afterTitle",this,e);let o=[];return o=he(o,me(a)),o=he(o,me(s)),o=he(o,me(c)),o}getBeforeBody(e,t){return Ra(ie(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,a=[];return L(e,s=>{const c={before:[],lines:[],after:[]},o=La(n,s);he(c.before,me(ie(o,"beforeLabel",this,s))),he(c.lines,ie(o,"label",this,s)),he(c.after,me(ie(o,"afterLabel",this,s))),a.push(c)}),a}getAfterBody(e,t){return Ra(ie(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,a=ie(n,"beforeFooter",this,e),s=ie(n,"footer",this,e),c=ie(n,"afterFooter",this,e);let o=[];return o=he(o,me(a)),o=he(o,me(s)),o=he(o,me(c)),o}_createItems(e){const t=this._active,n=this.chart.data,a=[],s=[],c=[];let o=[],r,d;for(r=0,d=t.length;r<d;++r)o.push(Sf(this.chart,t[r]));return e.filter&&(o=o.filter((f,l,N)=>e.filter(f,l,N,n))),e.itemSort&&(o=o.sort((f,l)=>e.itemSort(f,l,n))),L(o,f=>{const l=La(e.callbacks,f);a.push(ie(l,"labelColor",this,f)),s.push(ie(l,"labelPointStyle",this,f)),c.push(ie(l,"labelTextColor",this,f))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=c,this.dataPoints=o,o}update(e,t){const n=this.options.setContext(this.getContext()),a=this._active;let s,c=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const o=ut[n.position].call(this,a,this._eventPosition);c=this._createItems(n),this.title=this.getTitle(c,n),this.beforeBody=this.getBeforeBody(c,n),this.body=this.getBody(c,n),this.afterBody=this.getAfterBody(c,n),this.footer=this.getFooter(c,n);const r=this._size=wa(this,n),d=Object.assign({},o,r),f=Pa(this.chart,n,d),l=Qa(n,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,s={opacity:1,x:l.x,y:l.y,width:r.width,height:r.height,caretX:o.x,caretY:o.y}}this._tooltipItems=c,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,a){const s=this.getCaretPosition(e,n,a);t.lineTo(s.x1,s.y1),t.lineTo(s.x2,s.y2),t.lineTo(s.x3,s.y3)}getCaretPosition(e,t,n){const{xAlign:a,yAlign:s}=this,{caretSize:c,cornerRadius:o}=n,{topLeft:r,topRight:d,bottomLeft:f,bottomRight:l}=Ie(o),{x:N,y:h}=e,{width:u,height:B}=t;let g,b,m,O,D,p;return s==="center"?(D=h+B/2,a==="left"?(g=N,b=g-c,O=D+c,p=D-c):(g=N+u,b=g+c,O=D-c,p=D+c),m=g):(a==="left"?b=N+Math.max(r,f)+c:a==="right"?b=N+u-Math.max(d,l)-c:b=this.caretX,s==="top"?(O=h,D=O-c,g=b-c,m=b+c):(O=h+B,D=O+c,g=b+c,m=b-c),p=O),{x1:g,x2:b,x3:m,y1:O,y2:D,y3:p}}drawTitle(e,t,n){const a=this.title,s=a.length;let c,o,r;if(s){const d=Ue(n.rtl,this.x,this.width);for(e.x=Zt(this,n.titleAlign,n),t.textAlign=d.textAlign(n.titleAlign),t.textBaseline="middle",c=$(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=c.string,r=0;r<s;++r)t.fillText(a[r],d.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+o,r+1===s&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,a,s){const c=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:r,boxWidth:d}=s,f=$(s.bodyFont),l=Zt(this,"left",s),N=a.x(l),h=r<f.lineHeight?(f.lineHeight-r)/2:0,u=t.y+h;if(s.usePointStyle){const B={radius:Math.min(d,r)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},g=a.leftForLtr(N,d)+d/2,b=u+r/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,Fi(e,B,g,b),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Fi(e,B,g,b)}else{e.lineWidth=P(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const B=a.leftForLtr(N,d),g=a.leftForLtr(a.xPlus(N,1),d-2),b=Ie(c.borderRadius);Object.values(b).some(m=>m!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,kt(e,{x:B,y:u,w:d,h:r,radius:b}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),kt(e,{x:g,y:u+1,w:d-2,h:r-2,radius:b}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(B,u,d,r),e.strokeRect(B,u,d,r),e.fillStyle=c.backgroundColor,e.fillRect(g,u+1,d-2,r-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:a}=this,{bodySpacing:s,bodyAlign:c,displayColors:o,boxHeight:r,boxWidth:d,boxPadding:f}=n,l=$(n.bodyFont);let N=l.lineHeight,h=0;const u=Ue(n.rtl,this.x,this.width),B=function(y){t.fillText(y,u.x(e.x+h),e.y+N/2),e.y+=N+s},g=u.textAlign(c);let b,m,O,D,p,C,A;for(t.textAlign=c,t.textBaseline="middle",t.font=l.string,e.x=Zt(this,g,n),t.fillStyle=n.bodyColor,L(this.beforeBody,B),h=o&&g!=="right"?c==="center"?d/2+f:d+2+f:0,D=0,C=a.length;D<C;++D){for(b=a[D],m=this.labelTextColors[D],t.fillStyle=m,L(b.before,B),O=b.lines,o&&O.length&&(this._drawColorBox(t,e,D,u,n),N=Math.max(l.lineHeight,r)),p=0,A=O.length;p<A;++p)B(O[p]),N=l.lineHeight;L(b.after,B)}h=0,N=l.lineHeight,L(this.afterBody,B),e.y-=s}drawFooter(e,t,n){const a=this.footer,s=a.length;let c,o;if(s){const r=Ue(n.rtl,this.x,this.width);for(e.x=Zt(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=r.textAlign(n.footerAlign),t.textBaseline="middle",c=$(n.footerFont),t.fillStyle=n.footerColor,t.font=c.string,o=0;o<s;++o)t.fillText(a[o],r.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+n.footerSpacing}}drawBackground(e,t,n,a){const{xAlign:s,yAlign:c}=this,{x:o,y:r}=e,{width:d,height:f}=n,{topLeft:l,topRight:N,bottomLeft:h,bottomRight:u}=Ie(a.cornerRadius);t.fillStyle=a.backgroundColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.beginPath(),t.moveTo(o+l,r),c==="top"&&this.drawCaret(e,t,n,a),t.lineTo(o+d-N,r),t.quadraticCurveTo(o+d,r,o+d,r+N),c==="center"&&s==="right"&&this.drawCaret(e,t,n,a),t.lineTo(o+d,r+f-u),t.quadraticCurveTo(o+d,r+f,o+d-u,r+f),c==="bottom"&&this.drawCaret(e,t,n,a),t.lineTo(o+h,r+f),t.quadraticCurveTo(o,r+f,o,r+f-h),c==="center"&&s==="left"&&this.drawCaret(e,t,n,a),t.lineTo(o,r+l),t.quadraticCurveTo(o,r,o+l,r),t.closePath(),t.fill(),a.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,a=n&&n.x,s=n&&n.y;if(a||s){const c=ut[e.position].call(this,this._active,this._eventPosition);if(!c)return;const o=this._size=wa(this,e),r=Object.assign({},c,this._size),d=Pa(t,e,r),f=Qa(e,r,d,t);(a._to!==f.x||s._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=o.width,this.height=o.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const c=ee(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(s,e,a,t),Ss(e,t.textDirection),s.y+=c.top,this.drawTitle(s,e,t),this.drawBody(s,e,t),this.drawFooter(s,e,t),Gs(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,a=e.map(({datasetIndex:o,index:r})=>{const d=this.chart.getDatasetMeta(o);if(!d)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:d.data[r],index:r}}),s=!di(n,a),c=this._positionChanged(a,t);(s||c)&&(this._active=a,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],c=this._getActiveElements(e,s,t,n),o=this._positionChanged(c,e),r=t||!di(c,s)||o;return r&&(this._active=c,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),r}_getActiveElements(e,t,n,a){const s=this.options;if(e.type==="mouseout")return[];if(!a)return t;const c=this.chart.getElementsAtEventForMode(e,s.mode,s,n);return s.reverse&&c.reverse(),c}_positionChanged(e,t){const{caretX:n,caretY:a,options:s}=this,c=ut[s.position].call(this,e,t);return c!==!1&&(n!==c.x||a!==c.y)}}V(Zi,"positioners",ut);var Pf={id:"tooltip",_element:Zi,positioners:ut,afterInit(i,e,t){t&&(i.tooltip=new Zi({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Js},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Qf=Object.freeze({__proto__:null,Colors:j4,Decimation:U4,Filler:bf,Legend:Vf,SubTitle:yf,Title:Af,Tooltip:Pf});const Rf=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function Lf(i,e,t,n){const a=i.indexOf(e);if(a===-1)return Rf(i,e,t,n);const s=i.lastIndexOf(e);return a!==s?t:a}const Kf=(i,e)=>i===null?null:Z(Math.round(i),0,e);function Ka(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class Ui extends We{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:a,label:s}of t)n[a]===s&&n.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(R(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:Lf(n,e,_(t,e),this._addedLabels),Kf(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(a=this.getLabels().length-1)),this.min=n,this.max=a}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,a=[];let s=this.getLabels();s=e===0&&t===s.length-1?s:s.slice(e,t+1),this._valueRange=Math.max(s.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let c=e;c<=t;c++)a.push({value:c});return a}getLabelForValue(e){return Ka.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}V(Ui,"id","category"),V(Ui,"defaults",{ticks:{callback:Ka}});function Ef(i,e){const t=[],{bounds:a,step:s,min:c,max:o,precision:r,count:d,maxTicks:f,maxDigits:l,includeBounds:N}=i,h=s||1,u=f-1,{min:B,max:g}=e,b=!R(c),m=!R(o),O=!R(d),D=(g-B)/(l+1);let p=Mn((g-B)/u/h)*h,C,A,y,v;if(p<1e-14&&!b&&!m)return[{value:B},{value:g}];v=Math.ceil(g/p)-Math.floor(B/p),v>u&&(p=Mn(v*p/u/h)*h),R(r)||(C=Math.pow(10,r),p=Math.ceil(p*C)/C),a==="ticks"?(A=Math.floor(B/p)*p,y=Math.ceil(g/p)*p):(A=B,y=g),b&&m&&s&&Mo((o-c)/s,p/1e3)?(v=Math.round(Math.min((o-c)/p,f)),p=(o-c)/v,A=c,y=o):O?(A=b?c:A,y=m?o:y,v=d-1,p=(y-A)/v):(v=(y-A)/p,mt(v,Math.round(v),p/1e3)?v=Math.round(v):v=Math.ceil(v));const M=Math.max(wn(p),wn(A));C=Math.pow(10,R(r)?M:r),A=Math.round(A*C)/C,y=Math.round(y*C)/C;let w=0;for(b&&(N&&A!==c?(t.push({value:c}),A<c&&w++,mt(Math.round((A+w*p)*C)/C,c,Ea(c,D,i))&&w++):A<c&&w++);w<v;++w){const Q=Math.round((A+w*p)*C)/C;if(m&&Q>o)break;t.push({value:Q})}return m&&N&&y!==o?t.length&&mt(t[t.length-1].value,o,Ea(o,D,i))?t[t.length-1].value=o:t.push({value:o}):(!m||y===o)&&t.push({value:y}),t}function Ea(i,e,{horizontal:t,minRotation:n}){const a=de(n),s=(t?Math.sin(a):Math.cos(a))||.001,c=.75*e*(""+i).length;return Math.min(e/s,c)}class Bi extends We{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return R(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:a,max:s}=this;const c=r=>a=t?a:r,o=r=>s=n?s:r;if(e){const r=ue(a),d=ue(s);r<0&&d<0?o(0):r>0&&d>0&&c(0)}if(a===s){let r=s===0?1:Math.abs(s*.05);o(s+r),e||c(a-r)}this.min=a,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,a;return n?(a=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),t=t||11),t&&(a=Math.min(t,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const a={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},s=this._range||this,c=Ef(a,s);return e.bounds==="ticks"&&ds(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const a=(n-t)/Math.max(e.length-1,1)/2;t-=a,n+=a}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Pt(e,this.chart.options.locale,this.options.ticks.format)}}class qi extends Bi{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=H(e)?e:0,this.max=H(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=de(this.options.ticks.minRotation),a=(e?Math.sin(n):Math.cos(n))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,s.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}V(qi,"id","linear"),V(qi,"defaults",{ticks:{callback:xi.formatters.numeric}});const _t=i=>Math.floor(Ae(i)),Re=(i,e)=>Math.pow(10,_t(i)+e);function za(i){return i/Math.pow(10,_t(i))===1}function Ia(i,e,t){const n=Math.pow(10,t),a=Math.floor(i/n);return Math.ceil(e/n)-a}function zf(i,e){const t=e-i;let n=_t(t);for(;Ia(i,e,n)>10;)n++;for(;Ia(i,e,n)<10;)n--;return Math.min(n,_t(i))}function If(i,{min:e,max:t}){e=se(i.min,e);const n=[],a=_t(e);let s=zf(e,t),c=s<0?Math.pow(10,Math.abs(s)):1;const o=Math.pow(10,s),r=a>s?Math.pow(10,a):0,d=Math.round((e-r)*c)/c,f=Math.floor((e-r)/o/10)*o*10;let l=Math.floor((d-f)/Math.pow(10,s)),N=se(i.min,Math.round((r+f+l*Math.pow(10,s))*c)/c);for(;N<t;)n.push({value:N,major:za(N),significand:l}),l>=10?l=l<15?15:20:l++,l>=20&&(s++,l=2,c=s>=0?1:c),N=Math.round((r+f+l*Math.pow(10,s))*c)/c;const h=se(i.max,N);return n.push({value:h,major:za(h),significand:l}),n}class Xi extends We{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const n=Bi.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return H(n)&&n>0?n:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=H(e)?Math.max(0,e):null,this.max=H(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!H(this._userMin)&&(this.min=e===Re(this.min,0)?Re(this.min,-1):Re(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let n=this.min,a=this.max;const s=o=>n=e?n:o,c=o=>a=t?a:o;n===a&&(n<=0?(s(1),c(10)):(s(Re(n,-1)),c(Re(a,1)))),n<=0&&s(Re(a,-1)),a<=0&&c(Re(n,1)),this.min=n,this.max=a}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},n=If(t,this);return e.bounds==="ticks"&&ds(n,this,"value"),e.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(e){return e===void 0?"0":Pt(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Ae(e),this._valueRange=Ae(this.max)-Ae(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Ae(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}V(Xi,"id","logarithmic"),V(Xi,"defaults",{ticks:{callback:xi.formatters.logarithmic,major:{enabled:!0}}});function Ji(i){const e=i.ticks;if(e.display&&i.display){const t=ee(e.backdropPadding);return _(e.font&&e.font.size,j.font.size)+t.height}return 0}function Ff(i,e,t){return t=z(t)?t:[t],{w:Zo(i,e.string,t),h:t.length*e.lineHeight}}function Fa(i,e,t,n,a){return i===n||i===a?{start:e-t/2,end:e+t/2}:i<n||i>a?{start:e-t,end:e}:{start:e,end:e+t}}function Tf(i){const e={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},t=Object.assign({},e),n=[],a=[],s=i._pointLabels.length,c=i.options.pointLabels,o=c.centerPointLabels?T/s:0;for(let r=0;r<s;r++){const d=c.setContext(i.getPointLabelContext(r));a[r]=d.padding;const f=i.getPointPosition(r,i.drawingArea+a[r],o),l=$(d.font),N=Ff(i.ctx,l,i._pointLabels[r]);n[r]=N;const h=ce(i.getIndexAngle(r)+o),u=Math.round(dn(h)),B=Fa(u,f.x,N.w,0,180),g=Fa(u,f.y,N.h,90,270);Hf(t,e,h,B,g)}i.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),i._pointLabelItems=Yf(i,n,a)}function Hf(i,e,t,n,a){const s=Math.abs(Math.sin(t)),c=Math.abs(Math.cos(t));let o=0,r=0;n.start<e.l?(o=(e.l-n.start)/s,i.l=Math.min(i.l,e.l-o)):n.end>e.r&&(o=(n.end-e.r)/s,i.r=Math.max(i.r,e.r+o)),a.start<e.t?(r=(e.t-a.start)/c,i.t=Math.min(i.t,e.t-r)):a.end>e.b&&(r=(a.end-e.b)/c,i.b=Math.max(i.b,e.b+r))}function Wf(i,e,t){const n=i.drawingArea,{extra:a,additionalAngle:s,padding:c,size:o}=t,r=i.getPointPosition(e,n+a+c,s),d=Math.round(dn(ce(r.angle+W))),f=Uf(r.y,o.h,d),l=$f(d),N=Zf(r.x,o.w,l);return{visible:!0,x:r.x,y:f,textAlign:l,left:N,top:f,right:N+o.w,bottom:f+o.h}}function jf(i,e){if(!e)return!0;const{left:t,top:n,right:a,bottom:s}=i;return!(Ve({x:t,y:n},e)||Ve({x:t,y:s},e)||Ve({x:a,y:n},e)||Ve({x:a,y:s},e))}function Yf(i,e,t){const n=[],a=i._pointLabels.length,s=i.options,{centerPointLabels:c,display:o}=s.pointLabels,r={extra:Ji(s)/2,additionalAngle:c?T/a:0};let d;for(let f=0;f<a;f++){r.padding=t[f],r.size=e[f];const l=Wf(i,f,r);n.push(l),o==="auto"&&(l.visible=jf(l,d),l.visible&&(d=l))}return n}function $f(i){return i===0||i===180?"center":i<180?"left":"right"}function Zf(i,e,t){return t==="right"?i-=e:t==="center"&&(i-=e/2),i}function Uf(i,e,t){return t===90||t===270?i-=e/2:(t>270||t<90)&&(i-=e),i}function qf(i,e,t){const{left:n,top:a,right:s,bottom:c}=t,{backdropColor:o}=e;if(!R(o)){const r=Ie(e.borderRadius),d=ee(e.backdropPadding);i.fillStyle=o;const f=n-d.left,l=a-d.top,N=s-n+d.width,h=c-a+d.height;Object.values(r).some(u=>u!==0)?(i.beginPath(),kt(i,{x:f,y:l,w:N,h,radius:r}),i.fill()):i.fillRect(f,l,N,h)}}function Xf(i,e){const{ctx:t,options:{pointLabels:n}}=i;for(let a=e-1;a>=0;a--){const s=i._pointLabelItems[a];if(!s.visible)continue;const c=n.setContext(i.getPointLabelContext(a));qf(t,c,s);const o=$(c.font),{x:r,y:d,textAlign:f}=s;He(t,i._pointLabels[a],r,d+o.lineHeight/2,o,{color:c.color,textAlign:f,textBaseline:"middle"})}}function ec(i,e,t,n){const{ctx:a}=i;if(t)a.arc(i.xCenter,i.yCenter,e,0,I);else{let s=i.getPointPosition(0,e);a.moveTo(s.x,s.y);for(let c=1;c<n;c++)s=i.getPointPosition(c,e),a.lineTo(s.x,s.y)}}function Jf(i,e,t,n,a){const s=i.ctx,c=e.circular,{color:o,lineWidth:r}=e;!c&&!n||!o||!r||t<0||(s.save(),s.strokeStyle=o,s.lineWidth=r,s.setLineDash(a.dash),s.lineDashOffset=a.dashOffset,s.beginPath(),ec(i,t,c,n),s.closePath(),s.stroke(),s.restore())}function el(i,e,t){return Me(i,{label:t,index:e,type:"pointLabel"})}class Bt extends Bi{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=ee(Ji(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=H(e)&&!isNaN(e)?e:0,this.max=H(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ji(this.options))}generateTickLabels(e){Bi.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,n)=>{const a=E(this.options.pointLabels.callback,[t,n],this);return a||a===0?a:""}).filter((t,n)=>this.chart.getDataVisibility(n))}fit(){const e=this.options;e.display&&e.pointLabels.display?Tf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,a){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,a))}getIndexAngle(e){const t=I/(this._pointLabels.length||1),n=this.options.startAngle||0;return ce(e*t+de(n))}getDistanceFromCenterForValue(e){if(R(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(R(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const n=t[e];return el(this.getContext(),e,n)}}getPointPosition(e,t,n=0){const a=this.getIndexAngle(e)-W+n;return{x:Math.cos(a)*t+this.xCenter,y:Math.sin(a)*t+this.yCenter,angle:a}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:n,right:a,bottom:s}=this._pointLabelItems[e];return{left:t,top:n,right:a,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const n=this.ctx;n.save(),n.beginPath(),ec(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:n,grid:a,border:s}=t,c=this._pointLabels.length;let o,r,d;if(t.pointLabels.display&&Xf(this,c),a.display&&this.ticks.forEach((f,l)=>{if(l!==0){r=this.getDistanceFromCenterForValue(f.value);const N=this.getContext(l),h=a.setContext(N),u=s.setContext(N);Jf(this,h,r,c,u)}}),n.display){for(e.save(),o=c-1;o>=0;o--){const f=n.setContext(this.getPointLabelContext(o)),{color:l,lineWidth:N}=f;!N||!l||(e.lineWidth=N,e.strokeStyle=l,e.setLineDash(f.borderDash),e.lineDashOffset=f.borderDashOffset,r=this.getDistanceFromCenterForValue(t.ticks.reverse?this.min:this.max),d=this.getPointPosition(o,r),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(d.x,d.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;const a=this.getIndexAngle(0);let s,c;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((o,r)=>{if(r===0&&!t.reverse)return;const d=n.setContext(this.getContext(r)),f=$(d.font);if(s=this.getDistanceFromCenterForValue(this.ticks[r].value),d.showLabelBackdrop){e.font=f.string,c=e.measureText(o.label).width,e.fillStyle=d.backdropColor;const l=ee(d.backdropPadding);e.fillRect(-c/2-l.left,-s-f.size/2-l.top,c+l.width,f.size+l.height)}He(e,o.label,0,-s,f,{color:d.color})}),e.restore()}drawTitle(){}}V(Bt,"id","radialLinear"),V(Bt,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:xi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),V(Bt,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),V(Bt,"descriptors",{angleLines:{_fallback:"grid"}});const Vi={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ne=Object.keys(Vi);function tl(i,e){return i-e}function Ta(i,e){if(R(e))return null;const t=i._adapter,{parser:n,round:a,isoWeekday:s}=i._parseOpts;let c=e;return typeof n=="function"&&(c=n(c)),H(c)||(c=typeof n=="string"?t.parse(c,n):t.parse(c)),c===null?null:(a&&(c=a==="week"&&(qe(s)||s===!0)?t.startOf(c,"isoWeek",s):t.startOf(c,a)),+c)}function Ha(i,e,t,n){const a=ne.length;for(let s=ne.indexOf(i);s<a-1;++s){const c=Vi[ne[s]],o=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((t-e)/(o*c.size))<=n)return ne[s]}return ne[a-1]}function il(i,e,t,n,a){for(let s=ne.length-1;s>=ne.indexOf(t);s--){const c=ne[s];if(Vi[c].common&&i._adapter.diff(a,n,c)>=e-1)return c}return ne[t?ne.indexOf(t):0]}function nl(i){for(let e=ne.indexOf(i)+1,t=ne.length;e<t;++e)if(Vi[ne[e]].common)return ne[e]}function Wa(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:a}=fn(t,e),s=t[n]>=e?t[n]:t[a];i[s]=!0}}function al(i,e,t,n){const a=i._adapter,s=+a.startOf(e[0].value,n),c=e[e.length-1].value;let o,r;for(o=s;o<=c;o=+a.add(o,1,n))r=t[o],r>=0&&(e[r].major=!0);return e}function ja(i,e,t){const n=[],a={},s=e.length;let c,o;for(c=0;c<s;++c)o=e[c],a[o]=c,n.push({value:o,major:!1});return s===0||!t?n:al(i,n,a,t)}class Mt extends We{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),a=this._adapter=new ld._date(e.adapters.date);a.init(t),bt(n.displayFormats,a.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Ta(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:a,max:s,minDefined:c,maxDefined:o}=this.getUserBounds();function r(d){!c&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!o&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!c||!o)&&(r(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&r(this.getMinMax(!1))),a=H(a)&&!isNaN(a)?a:+t.startOf(Date.now(),n),s=H(s)&&!isNaN(s)?s:+t.endOf(Date.now(),n)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,a=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,c=this.max,o=Ro(a,s,c);return this._unit=t.unit||(n.autoSkip?Ha(t.minUnit,this.min,this.max,this._getLabelCapacity(s)):il(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:nl(this._unit),this.initOffsets(a),e.reverse&&o.reverse(),ja(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,a,s;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?t=1-a:t=(this.getDecimalForValue(e[1])-a)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?n=s:n=(s-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;t=Z(t,0,c),n=Z(n,0,c),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,a=this.options,s=a.time,c=s.unit||Ha(s.minUnit,t,n,this._getLabelCapacity(t)),o=_(a.ticks.stepSize,1),r=c==="week"?s.isoWeekday:!1,d=qe(r)||r===!0,f={};let l=t,N,h;if(d&&(l=+e.startOf(l,"isoWeek",r)),l=+e.startOf(l,d?"day":c),e.diff(n,t,c)>1e5*o)throw new Error(t+" and "+n+" are too far apart with stepSize of "+o+" "+c);const u=a.ticks.source==="data"&&this.getDataTimestamps();for(N=l,h=0;N<n;N=+e.add(N,o,c),h++)Wa(f,N,u);return(N===n||a.bounds==="ticks"||h===1)&&Wa(f,N,u),Object.keys(f).sort((B,g)=>B-g).map(B=>+B)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const a=this.options.time.displayFormats,s=this._unit,c=t||a[s];return this._adapter.format(e,c)}_tickFormatFunction(e,t,n,a){const s=this.options,c=s.ticks.callback;if(c)return E(c,[e,t,n],this);const o=s.time.displayFormats,r=this._unit,d=this._majorUnit,f=r&&o[r],l=d&&o[d],N=n[t],h=d&&l&&N&&N.major;return this._adapter.format(e,a||(h?l:f))}generateTickLabels(e){let t,n,a;for(t=0,n=e.length;t<n;++t)a=e[t],a.label=this._tickFormatFunction(a.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,a=de(this.isHorizontal()?t.maxRotation:t.minRotation),s=Math.cos(a),c=Math.sin(a),o=this._resolveTickFontOptions(0).size;return{w:n*s+o*c,h:n*c+o*s}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,a=n[t.unit]||n.millisecond,s=this._tickFormatFunction(e,0,ja(this,[e],this._majorUnit),a),c=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(t=0,n=a.length;t<n;++t)e=e.concat(a[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const a=this.getLabels();for(t=0,n=a.length;t<n;++t)e.push(Ta(this,a[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Ns(e.sort(tl))}}V(Mt,"id","time"),V(Mt,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ut(i,e,t){let n=0,a=i.length-1,s,c,o,r;t?(e>=i[n].pos&&e<=i[a].pos&&({lo:n,hi:a}=Oe(i,"pos",e)),{pos:s,time:o}=i[n],{pos:c,time:r}=i[a]):(e>=i[n].time&&e<=i[a].time&&({lo:n,hi:a}=Oe(i,"time",e)),{time:s,pos:o}=i[n],{time:c,pos:r}=i[a]);const d=c-s;return d?o+(r-o)*(e-s)/d:o}class en extends Mt{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Ut(t,this.min),this._tableRange=Ut(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,a=[],s=[];let c,o,r,d,f;for(c=0,o=e.length;c<o;++c)d=e[c],d>=t&&d<=n&&a.push(d);if(a.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(c=0,o=a.length;c<o;++c)f=a[c+1],r=a[c-1],d=a[c],Math.round((f+r)/2)!==d&&s.push({time:d,pos:c/(o-1)});return s}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Ut(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Ut(this._table,n*this._tableRange+this._minPos,!0)}}V(en,"id","timeseries"),V(en,"defaults",Mt.defaults);var sl=Object.freeze({__proto__:null,CategoryScale:Ui,LinearScale:qi,LogarithmicScale:Xi,RadialLinearScale:Bt,TimeScale:Mt,TimeSeriesScale:en});const cl=[fd,z4,Qf,sl];pe.register(...cl);const ol={name:"Graph",props:["data"],mounted(){this.renderChart()},methods:{renderChart(){const i=document.getElementById("Graph");let e=[],t=this.data.length;for(let a=0;a<t;a++)e.push("");this.chart&&this.chart.destroy();let n=[];for(let a of this.data)n.push(a<0?a<-20?-20:a:a>20?20:a);n.pop(),this.chart=new pe(i,{type:"line",data:{labels:e,datasets:[{data:n,fill:{target:"origin",below:"#334155",above:"#cbd5e1"},borderWidth:0,pointRadius:0,tension:.4}]},options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"rgb(255,255,255)"}}}}})}},watch:{data(i){this.renderChart()}}},rl={class:"chart-container h-full w-full"},dl=x("canvas",{id:"Graph"},null,-1),fl=[dl];function ll(i,e,t,n,a,s){return S(),G("div",rl,fl)}const Nl=_e(ol,[["render",ll]]),hl={props:{bestmove:{required:!0},moves:{required:!0}},data(){return{opening:{m:"Startin Position",t:[],a:[]},oldMoves:[]}},watch:{moves(i,e){console.log("UPDATE MOVES"),this.update()},bestmove(i,e){console.log("BESTMOVE update"),console.log(this.moves),this.update()}},methods:{update(){if(console.log("updated called"),this.oldMoves.length!=this.moves.length){if(console.log("MOOOOOOOOOOOOOVES"+this.moves),this.moves!=[]){let i=ns(this.moves);i!=null&&(this.opening=i)}this.oldMoves=JSON.parse(JSON.stringify(this.moves))}}},beforeMount(){this.update()},updated(){this.update()}},gl={class:"bg-base-300 rounded-lg h-full w-full p-2"},ul=x("br",null,null,-1),Bl={class:"badge badge-accent font-bold mr-2"};function bl(i,e,t,n,a,s){return S(),G("div",gl,[Dn(k(a.opening.m)+" ",1),ul,(S(!0),G(Ot,null,tn(a.opening.a,(c,o)=>(S(),G("div",{key:o},[x("div",Bl,k(c),1)]))),128)),Dn(" "+k(t.bestmove),1)])}const ml=_e(hl,[["render",bl]]),xl={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0},accuracy:{type:Number,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/standard-avatar.png"}}},beforeMount(){this.updateUser()},methods:{updateUser(){qa.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},pl={key:0,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2"},Dl={class:"flex flex-row items-center"},Ol=["src"],Vl={class:"flex flex-col justify-center items-center"},Cl={class:"text-l font-bold"},Al={class:"text-xs px-3"},yl={class:"items-center flex justify-center border border-black border-solid rounded-lg w-10 h-10 mt-6 bg-white text-black tooltip-bottom tooltip","data-tip":"avg. CP Loss"},Sl={key:1,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2 pl-2"},Gl={class:"flex flex-row items-center"},kl=["src"],vl={class:"flex flex-col justify-center items-center"},_l={class:"text-l font-bold"},Ml={class:"text-xs px-3"},wl={class:"items-center flex justify-center border border-white border-solid rounded-lg w-10 h-10 mt-6 bg-black tooltip-bottom tooltip","data-tip":"avg. Pawn Loss"};function Pl(i,e,t,n,a,s){return t.color?(S(),G("div",pl,[x("div",Dl,[x("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,Ol),x("div",Vl,[x("h2",Cl,k(a.user.username),1),x("p",Al,k(this.elo),1)])]),x("div",yl,k(this.accuracy),1)])):(S(),G("div",Sl,[x("div",Gl,[x("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,kl),x("div",vl,[x("h2",_l,k(a.user.username),1),x("p",Ml,k(this.elo),1)])]),x("div",wl,k(this.accuracy),1)]))}const Ql=_e(xl,[["render",Pl]]);const Rl={props:{square:{type:String,required:!0},annotation:{type:String,required:!0}},computed:{annotationStyle(){if(this.annotation=="")return;const[i,e]=this.square.split(""),t=i.charCodeAt(0)-97,n=8-parseInt(e,10);return{position:"absolute",left:`${t*10+25}%`,top:`${n*13}%`,transform:"translate(-50%, -50%)"}}}},Ll=["src"];function Kl(i,e,t,n,a,s){return this.annotation!=""?(S(),G("div",{key:0,style:Ya(s.annotationStyle),class:"annotation"},[x("img",{src:"/pegasus/anotations/"+t.annotation,alt:"Annotation"},null,8,Ll)],4)):$a("",!0)}const El=_e(Rl,[["render",Kl]]),zl="/pegasus/assets/pegasus-graph-golden-coin-game-4949ef63.png",Il="/pegasus/assets/loading-22969543.svg",Fl="/pegasus/anotations/bookMove.png",Tl="/pegasus/anotations/brilliant.png",Hl="/pegasus/anotations/great.png",Wl="/pegasus/anotations/bestmove.png",jl="/pegasus/anotations/goodMove.png",Yl="/pegasus/anotations/okmove.png",$l="/pegasus/anotations/inaccuracy.png",Zl="/pegasus/anotations/mistake.png",Ul="/pegasus/anotations/blunder.png",ql={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},data(){return{playerIsWhite:!0,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",chess:new On,score:0,stockfish:null,custom:0,size:600,history:null,pgn:"",blackElo:"",whiteElo:"",blackPlayer:"",whitePlayer:"",positionInfo:null,bestmove:"",moves:[],historyStack:[],board:null,pawnStructure:0,fens:[[0,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","e4e5","bookMove",""]],i:0,evals:[],historyConstant:[],graphEvaled:!1,annotatedMove:"",annotatedPosition:"",bookMoves:[0,0],bestMoves:[0,0],goodMoves:[0,0],okMoves:[0,0],innacurateMoves:[0,0],mistakeMoves:[0,0],blunderMoves:[0,0],pawnEvaluation:50,annotationPairs:[],moveNumberManual:0,whiteCPLoss:0,blackCPLoss:0}},created(){try{this.pgn=(rc().query.pgn??void 0).toString(),console.log("initial pgn:"),console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history();let i=new On("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");for(const c of this.history)i.move(c,!1),this.fens.push([0,i.fen(),"","",c]);console.log("The this.fens after initialization"),console.log(JSON.parse(JSON.stringify(this.fens))),this.moves=[];let e=0;if(this.history[0].endsWith("5")||this.history[0].endsWith("6"))for(;e<this.history.length;)this.moves.push([this.history[e+1],this.history[e]]),e+=2;else for(;e<this.history.length;)this.moves.push([this.history[e],this.history[e+1]]),e+=2;this.history=[].concat(...this.moves).reverse(),this.historyConstant=JSON.parse(JSON.stringify(this.history)),this.chess.reset();const t=c=>{const r=/\[BlackElo "(.*?)"]/.exec(c);return r&&r.length>=2?r[1]:null};this.blackElo=t(this.pgn);const n=c=>{const r=/\[WhiteElo "(.*?)"]/.exec(c);return r&&r.length>=2?r[1]:null};this.whiteElo=n(this.pgn);const a=c=>{const r=/\[White "(.*?)"]/.exec(c);return r&&r.length>=2?r[1]:null};this.whitePlayer=a(this.pgn);const s=c=>{const r=/\[Black "(.*?)"]/.exec(c);return r&&r.length>=2?r[1]:null};this.blackPlayer=s(this.pgn),this.i=0,console.log("finished setup")}catch{this.chess=null}},methods:{turnBoard(){this.playerIsWhite=!this.playerIsWhite},evaluatePosition(){console.log("evaluating!"+this.fen),Ci(this.fen,(i,e)=>{console.log("Received score:"+i),console.log("Received Bestmove:"+e),this.score=i,this.bestmove=e})},evaluatePositionQuick(i=void 0){i==null&&(i=this.fen),Ci(i,(e,t)=>{console.log("Received score: from quick eval"+e),console.log("Received Bestmove: from quick eval"+t),console.log(console.log(JSON.parse(JSON.stringify(this.fens[this.i])))),console.log(i),console.log(console.log(JSON.parse(JSON.stringify(this.fens)))),this.fens[this.i][1]===i?(this.fens[this.i]=[e,i,t,"",this.fens[this.i][4]],console.log("Overwriting...")):this.i<this.fens.length&&(this.fens[this.i+1]=[e,i,t,"",this.fens[this.i+1][4]],console.log("New FEN"),this.i++)},1e3)},async goThrough(){await new Promise(i=>setTimeout(i,1e3)),this.evaluatePosition(),await new Promise(i=>setTimeout(i,3500));for(let i of this.fens)this.evaluatePositionQuick(i[1]),await new Promise(e=>setTimeout(e,1200));console.log("The fens after Evaluating every fen for graph"),console.log(console.log(JSON.parse(JSON.stringify(this.fens))));for(let i of this.fens)this.evals.push(i[0]);console.log(this.evals),this.graphEvaled=!0,this.annotateMoves(),Ki()},annotateMoves(){let i=[],e=[],t=0;for(let a of this.fens)if(t==0)t++;else{i.push(a[4]);try{let s=ns(i).t;s.length>e.length||s.length>=i.length-1?(this.fens[t][3]="bookMove",this.bookMoves[(t+1)%2]++,e=s):this.fens[t-1][2].endsWith(a[4])?(this.fens[t][3]="bestmove",this.bestMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<.3&&this.fens[t-1][0]-a[0]>-.3?(this.fens[t][3]="goodMove",this.goodMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<.7&&this.fens[t-1][0]-a[0]>-.7?(this.fens[t][3]="okmove",this.okMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<1&&this.fens[t-1][0]-a[0]>-1?(this.fens[t][3]="inaccuracy",this.innacurateMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<2.5&&this.fens[t-1][0]-a[0]>-2.5?(this.fens[t][3]="mistake",this.mistakeMoves[(t+1)%2]++):(this.fens[t][3]="blunder",this.blunderMoves[(t+1)%2]++)}catch(s){console.log(s)}t++}console.log("The this.fens after annotating them"),console.log(console.log(JSON.parse(JSON.stringify(this.fens))));let n=1;for(;n<=this.fens.length;){try{this.annotationPairs.push([this.fens[n][3],this.fens[n+1][3]])}catch{this.annotationPairs.push([this.fens[n][3],""])}n+=2}this.calculateCP()},calculateCP(){let i=1;for(;i<this.fens.length;)i%2==1?this.whiteCPLoss+=this.fens[i-1][0]-this.fens[i][0]:this.blackCPLoss-=this.fens[i-1][0]-this.fens[i][0],i++;this.whiteCPLoss=(this.whiteCPLoss/(this.fens.length/2)).toFixed(2),this.blackCPLoss=(this.blackCPLoss/(this.fens.length/2)).toFixed(2)},extractDestinationSquare(i){const e=/[a-h][1-8]$/;return e.test(i)?i.match(e)[0]:""},handleMove(i){this.fen=i.after,this.evaluatePosition()},updateEverythingAfterButtonPress(){console.log("FEN:"),console.log(this.fens[this.moveNumberManual][1]),this.annotatedPosition=this.extractDestinationSquare(this.fens[this.moveNumberManual][4]),console.log(this.fens[this.moveNumberManual]),this.annotatedMove=this.fens[this.historyStack.length+1][3]+".png",this.chess.move(this.fens[this.moveNumberManual][4],!1),this.fen=this.fens[this.moveNumberManual][1],this.evaluatePosition()},moveCall(){console.log("moveCall"),this.chess.isGameOver()||(this.moveNumberManual+=1,this.updateEverythingAfterButtonPress())},backMove(){console.log("backMove"),this.moveNumberManual-=1,this.updateEverythingAfterButtonPress()},completeBack(){console.log("Back to the Start call"),this.moveNumberManual=0,this.updateEverythingAfterButtonPress()},completeEnd(){console.log("All the way to end of game"),this.moveNumberManual=this.fens.length-1,this.updateEverythingAfterButtonPress()},evaluatePawns(){let i=this.extractPawnsAndKingsFromFEN(this.chess.fen());console.log("evaluating Pawns! "+i),Ci(i,(e,t)=>{this.pawnEvaluation=50-e*5},1e3)},extractPawnsAndKingsFromFEN(i){const[e,t,n,a,s]=i.split(" "),c=e.replace(/[^pkPK1-8/]/g,"_");let o="",r=0;for(let f=0;f<c.length;f++){const l=c.charAt(f);l==="_"?r++:(r>0&&(o+=r,r=0),o+=l)}return r>0&&(o+=r),[o,t,"-",a,s].join(" ")}},components:{StockfishPanel:Xc,EvalBar:Oc,UserAnalyzeBar:_c,EvalCircle:Lc,Chessboard:Nc,Graph:Nl,moveInfo:ml,GameSummaryUser:Ql,Annotation:El,HomeButton:lc}},Xl={key:0,class:"grid place-content-center min-h-screen text-secondary font-mono"},Jl={key:1,class:"flex items-center justify-between h-screen flex-row py-3 space-x-4 px-2"},e3={class:"h-full basis-1/2 flex"},t3={class:"flex flex-grow flex-col py-3 space-y-4 justify-center"},i3={class:"flex h-full relative"},n3={class:"h-full w-full bg-base-100 m-2 flex flex-row basis-1/2 space-x-2"},a3={class:"h-full basis-1/2 flex flex-col space-y-2"},s3={key:0,class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 justify-center items-center flex relative"},c3=x("img",{src:zl,class:""},null,-1),o3={class:"absolute inset-0 flex items-center justify-center"},r3={key:1,class:"px-4 py-2 bg-secondary rounded-lg"},d3=x("img",{src:Il},null,-1),f3=[d3],l3={key:1,class:"w-full basis-1/6 bg-base-300 rounded-lg p-2"},N3={class:"w-full flex-grow basis-1/4"},h3={key:0,class:"bg-base-300 rounded-lg h-full w-full p-2 flex items-center justify-center"},g3={class:"basis-2/3 bg-base-300 w-full rounded-lg p-2 flex justify-center flex-col"},u3={class:"w-full flex flex-row h-1/3"},B3=x("div",{class:"divider-vertical w-[1px] bg-slate-500 h-2/3 rounded-lg"},null,-1),b3={class:"flex-grow"},m3={class:"flex-content"},x3={class:"p-4 w-full flex flex-col items-center scrollable-content-wrapper"},p3={class:"flex flex-row gap-10 py-1 text-orange-800 min-h-8 h-[10%]"},D3=x("img",{src:Fl},null,-1),O3=x("div",{class:"flex flex-row gap-10 py-1 text-secondary min-h-8 h-[10%]"},[x("p",null,"-"),x("img",{src:Tl}),x("p",null,"-")],-1),V3=x("div",{class:"flex flex-row gap-10 py-1 text-pink-300 min-h-8 h-[10%]"},[x("p",null,"-"),x("img",{src:Hl}),x("p",null,"-")],-1),C3={class:"flex flex-row gap-10 py-1 text-green-500 min-h-8 h-[10%]"},A3=x("img",{src:Wl},null,-1),y3={class:"flex flex-row gap-10 py-1 text-green-800 min-h-8 h-[10%]"},S3=x("img",{src:jl},null,-1),G3={class:"flex flex-row gap-10 py-1 text-green-300 min-h-8 h-[10%]"},k3=x("img",{src:Yl},null,-1),v3={class:"flex flex-row gap-10 py-1 text-yellow-400 min-h-8 h-[10%]"},_3=x("img",{src:$l},null,-1),M3={class:"flex flex-row gap-10 py-1 text-orange-600 min-h-8 h-[10%]"},w3=x("img",{src:Zl},null,-1),P3={class:"flex flex-row gap-10 py-1 text-red-600 min-h-8 h-[10%]"},Q3=x("img",{src:Ul},null,-1),R3={class:"h-full flex flex-col overflow-hidden basis-1/2 space-y-2"},L3={class:"w-full",style:{"flex-basis":"45%"}},K3={class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 flex justify-around flex-col"},E3={class:"grid grid-cols-3 w-full place-items-center"},z3={class:"w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2",style:{"flex-basis":"55%"}},I3={class:"flex-grow"},F3={class:"flex-content"},T3={class:"scrollable-content-wrapper scroll-fade"},H3={key:0,class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl bg-accent"},W3={key:0,class:"flex justify-center"},j3={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},Y3={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},$3={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},Z3={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},U3={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},q3={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},X3={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},J3={key:7,class:"badge bg-slate-300 text-slate-900 border-slate-900"},e5={key:1,class:"flex justify-center"},t5={class:"badge bg-slate-300 text-slate-900 border-slate-900"},i5={key:2,class:"flex justify-center"},n5={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},a5={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},s5={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},c5={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},o5={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},r5={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},d5={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},f5={key:7,class:"badge bg-slate-900 text-slate-100 border-slate-100"},l5={key:3,class:"flex justify-center"},N5={class:"badge bg-slate-900 text-slate-100 border-slate-100"},h5={key:1,class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl"},g5={key:0,class:"flex justify-center"},u5={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},B5={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},b5={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},m5={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},x5={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},p5={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},D5={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},O5={key:7,class:"badge bg-slate-300 text-slate-900 border-slate-900"},V5={key:1,class:"flex justify-center"},C5={class:"badge bg-slate-300 text-slate-900 border-slate-900"},A5={key:2,class:"flex justify-center"},y5={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},S5={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},G5={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},k5={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},v5={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},_5={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},M5={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},w5={key:7,class:"badge bg-slate-900 text-slate-100 border-slate-100"},P5={key:3,class:"flex justify-center"},Q5={class:"badge bg-slate-900 text-slate-100 border-slate-100"},R5={class:"bottom-3 w-full h-12 grid grid-cols-5 gap-x-1"},L5={class:"btn-accent btn"},K5={class:"btn-accent btn"},E5={class:"btn-accent btn"},z5={class:"btn-accent btn"},I5={class:"btn-accent btn"};function F5(i,e,t,n,a,s){const c=Ne("HomeButton"),o=Ne("UserAnalyzeBar"),r=Ne("EvalBar"),d=Ne("Chessboard"),f=Ne("Annotation"),l=Ne("graph"),N=Ne("moveInfo"),h=Ne("GameSummaryUser"),u=Ne("StockfishPanel"),B=Ne("EvalCircle");return S(),G(Ot,null,[te(c),this.chess===null?(S(),G("div",Xl," Invalide PGN ")):(S(),G("div",Jl,[x("div",e3,[x("div",t3,[te(o,{color:!a.playerIsWhite,elo:a.playerIsWhite?a.blackElo:a.whiteElo,username:a.playerIsWhite?a.blackPlayer:a.whitePlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"]),x("div",i3,[te(r,{ref:"evalBar",evaluation:a.score,whiteBottom:a.playerIsWhite,class:"h-full"},null,8,["evaluation","whiteBottom"]),te(d,{onMove:s.handleMove,fen:a.fen,orientation:a.playerIsWhite?"white":"black"},null,8,["onMove","fen","orientation"]),te(f,{square:this.annotatedPosition,annotation:this.annotatedMove},null,8,["square","annotation"])]),te(o,{color:a.playerIsWhite,elo:a.playerIsWhite?a.whiteElo:a.blackElo,username:a.playerIsWhite?a.whitePlayer:a.blackPlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"])])]),x("div",n3,[x("div",a3,[this.graphEvaled?(S(),G("div",l3,[te(l,{data:this.evals},null,8,["data"])])):(S(),G("div",s3,[c3,x("div",o3,[this.i==0?(S(),G("button",{key:0,class:"px-4 py-2 btn btn-secondary btn-outline",onClick:e[0]||(e[0]=(...g)=>s.goThrough&&s.goThrough(...g))},"Load Graph")):(S(),G("div",r3,f3))])])),x("div",N3,[this.i==0?(S(),G("div",h3,[x("button",{class:"px-4 py-2 btn btn-secondary btn-outline",onClick:e[1]||(e[1]=(...g)=>s.goThrough&&s.goThrough(...g))},"Load Analysis")])):(S(),dc(N,{key:1,moves:this.historyStack,bestmove:this.bestmove},null,8,["moves","bestmove"]))]),x("div",g3,[x("div",u3,[te(h,{accuracy:a.whiteCPLoss,color:!0,elo:a.whiteElo,username:a.whitePlayer},null,8,["accuracy","elo","username"]),B3,te(h,{accuracy:a.blackCPLoss,color:!1,elo:a.blackElo,username:a.blackPlayer},null,8,["accuracy","elo","username"])]),x("div",b3,[x("div",m3,[x("div",x3,[x("div",p3,[x("p",null,k(a.bookMoves[0]),1),D3,x("p",null,k(a.bookMoves[1]),1)]),O3,V3,x("div",C3,[x("p",null,k(a.bestMoves[0]),1),A3,x("p",null,k(a.bestMoves[1]),1)]),x("div",y3,[x("p",null,k(a.goodMoves[0]),1),S3,x("p",null,k(a.goodMoves[1]),1)]),x("div",G3,[x("p",null,k(a.okMoves[0]),1),k3,x("p",null,k(a.okMoves[1]),1)]),x("div",v3,[x("p",null,k(a.innacurateMoves[0]),1),_3,x("p",null,k(a.innacurateMoves[1]),1)]),x("div",M3,[x("p",null,k(a.mistakeMoves[0]),1),w3,x("p",null,k(a.mistakeMoves[1]),1)]),x("div",P3,[x("p",null,k(a.blunderMoves[0]),1),Q3,x("p",null,k(a.blunderMoves[1]),1)])])])])])]),x("div",R3,[x("div",L3,[te(u)]),x("div",K3,[x("div",E3,[te(B,{evaluation:this.pawnEvaluation,typee:"pawn"},null,8,["evaluation"]),te(B,{evaluation:20,typee:"NotPawn"}),te(B,{evaluation:40,typee:"AlsoNotPawn"}),x("button",{class:"btn-primary btn",onClick:e[2]||(e[2]=(...g)=>s.evaluatePawns&&s.evaluatePawns(...g))},"Eval Pawns")])]),x("div",z3,[x("div",I3,[x("div",F3,[x("div",T3,[(S(!0),G(Ot,null,tn(this.moves,(g,b)=>(S(),G("div",{key:b,class:"w-full items-center justify-center"},[2*b+2==this.historyStack.length||2*b+1==this.historyStack.length?(S(),G("div",H3,[this.graphEvaled?(S(),G("div",W3,[this.annotationPairs[b][0]=="bookMove"?(S(),G("div",j3,k(g[0]),1)):this.annotationPairs[b][0]=="bestmove"?(S(),G("div",Y3,k(g[0]),1)):this.annotationPairs[b][0]=="goodMove"?(S(),G("div",$3,k(g[0]),1)):this.annotationPairs[b][0]=="okmove"?(S(),G("div",Z3,k(g[0]),1)):this.annotationPairs[b][0]=="inaccuracy"?(S(),G("div",U3,k(g[0]),1)):this.annotationPairs[b][0]=="mistake"?(S(),G("div",q3,k(g[0]),1)):this.annotationPairs[b][0]=="blunder"?(S(),G("div",X3,k(g[0]),1)):(S(),G("div",J3,k(g[0]),1))])):(S(),G("div",e5,[x("div",t5,k(g[0]),1)])),this.graphEvaled?(S(),G("div",i5,[this.annotationPairs[b][1]=="bookMove"?(S(),G("div",n5,k(g[1]),1)):this.annotationPairs[b][1]=="bestmove"?(S(),G("div",a5,k(g[1]),1)):this.annotationPairs[b][1]=="goodMove"?(S(),G("div",s5,k(g[1]),1)):this.annotationPairs[b][1]=="okmove"?(S(),G("div",c5,k(g[1]),1)):this.annotationPairs[b][1]=="inaccuracy"?(S(),G("div",o5,k(g[1]),1)):this.annotationPairs[b][1]=="mistake"?(S(),G("div",r5,k(g[1]),1)):this.annotationPairs[b][1]=="blunder"?(S(),G("div",d5,k(g[1]),1)):(S(),G("div",f5,k(g[1]),1))])):(S(),G("div",l5,[x("div",N5,k(g[1]),1)]))])):(S(),G("div",h5,[this.graphEvaled?(S(),G("div",g5,[this.annotationPairs[b][0]=="bookMove"?(S(),G("div",u5,k(g[0]),1)):this.annotationPairs[b][0]=="bestmove"?(S(),G("div",B5,k(g[0]),1)):this.annotationPairs[b][0]=="goodMove"?(S(),G("div",b5,k(g[0]),1)):this.annotationPairs[b][0]=="okmove"?(S(),G("div",m5,k(g[0]),1)):this.annotationPairs[b][0]=="inaccuracy"?(S(),G("div",x5,k(g[0]),1)):this.annotationPairs[b][0]=="mistake"?(S(),G("div",p5,k(g[0]),1)):this.annotationPairs[b][0]=="blunder"?(S(),G("div",D5,k(g[0]),1)):(S(),G("div",O5,k(g[0]),1))])):(S(),G("div",V5,[x("div",C5,k(g[0]),1)])),this.graphEvaled?(S(),G("div",A5,[this.annotationPairs[b][1]=="bookMove"?(S(),G("div",y5,k(g[1]),1)):this.annotationPairs[b][1]=="bestmove"?(S(),G("div",S5,k(g[1]),1)):this.annotationPairs[b][1]=="goodMove"?(S(),G("div",G5,k(g[1]),1)):this.annotationPairs[b][1]=="okmove"?(S(),G("div",k5,k(g[1]),1)):this.annotationPairs[b][1]=="inaccuracy"?(S(),G("div",v5,k(g[1]),1)):this.annotationPairs[b][1]=="mistake"?(S(),G("div",_5,k(g[1]),1)):this.annotationPairs[b][1]=="blunder"?(S(),G("div",M5,k(g[1]),1)):(S(),G("div",w5,k(g[1]),1))])):(S(),G("div",P5,[x("div",Q5,k(g[1]),1)]))]))]))),128))])])]),x("div",R5,[x("button",L5,[x("span",{class:"material-symbols-outlined",onClick:e[3]||(e[3]=(...g)=>s.completeBack&&s.completeBack(...g))}," keyboard_double_arrow_left ")]),x("button",K5,[x("span",{class:"material-symbols-outlined",onClick:e[4]||(e[4]=(...g)=>s.backMove&&s.backMove(...g))}," chevron_left ")]),x("button",E5,[x("span",{class:"material-symbols-outlined",onClick:e[5]||(e[5]=(...g)=>s.goThrough&&s.goThrough(...g))}," auto_awesome ")]),x("button",z5,[x("span",{class:"material-symbols-outlined",onClick:e[6]||(e[6]=(...g)=>s.moveCall&&s.moveCall(...g))}," chevron_right ")]),x("button",I5,[x("span",{class:"material-symbols-outlined",onClick:e[7]||(e[7]=(...g)=>s.completeEnd&&s.completeEnd(...g))}," keyboard_double_arrow_right ")])])])])])]))],64)}const U5=_e(ql,[["render",F5]]);export{U5 as default};
