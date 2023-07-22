var dr=Object.defineProperty;var fr=(i,e,t)=>e in i?dr(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var C=(i,e,t)=>(fr(i,typeof e!="symbol"?e+"":e,t),t);import{g as lr}from"./_commonjsHelpers-725317a4.js";import{c as Oi}from"./_commonjs-dynamic-modules-302442b1.js";import{r as ui,_ as et,b as S,c as k,g as p,t as v,n as At,z as hr,A as Do,l as aa,B as Oo,C as Pa,o as Nr,D as $i,y as Vo,s as rn,F as bi,T as gr,E as ur,i as ae,q as Co,p as He,w as yo,v as Ao,d as br,k as Qa,x as mr,h as Ge}from"./index-704b7829.js";import{c as So,C as un}from"./chess-d99999e1.js";var ko={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,a,s){function o(d,f){if(!a[d]){if(!n[d]){var l=typeof Oi=="function"&&Oi;if(!f&&l)return l(d,!0);if(c)return c(d,!0);var h=new Error("Cannot find module '"+d+"'");throw h.code="MODULE_NOT_FOUND",h}var g=a[d]={exports:{}};n[d][0].call(g.exports,function(N){var u=n[d][1][N];return o(u||N)},g,g.exports,t,n,a,s)}return a[d].exports}for(var c=typeof Oi=="function"&&Oi,r=0;r<s.length;r++)o(s[r]);return o}({1:[function(t,n,a){var s,o,c,r,d,f=function(h,g){for(var N in g)l.call(g,N)&&(h[N]=g[N]);function u(){this.constructor=h}return u.prototype=g.prototype,h.prototype=new u,h.__super__=g.prototype,h},l={}.hasOwnProperty;s=t("./PriorityQueue/AbstractPriorityQueue"),o=t("./PriorityQueue/ArrayStrategy"),r=t("./PriorityQueue/BinaryHeapStrategy"),c=t("./PriorityQueue/BHeapStrategy"),d=function(h){f(g,h);function g(N){N||(N={}),N.strategy||(N.strategy=r),N.comparator||(N.comparator=function(u,b){return(u||0)-(b||0)}),g.__super__.constructor.call(this,N)}return g}(s),d.ArrayStrategy=o,d.BinaryHeapStrategy=r,d.BHeapStrategy=c,n.exports=d},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,n,a){n.exports=function(){function s(o){var c;if((o!=null?o.strategy:void 0)==null)throw"Must pass options.strategy, a strategy";if((o!=null?o.comparator:void 0)==null)throw"Must pass options.comparator, a comparator";this.priv=new o.strategy(o),this.length=(o!=null&&(c=o.initialValues)!=null?c.length:void 0)||0}return s.prototype.queue=function(o){this.length++,this.priv.queue(o)},s.prototype.dequeue=function(o){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},s.prototype.peek=function(o){if(!this.length)throw"Empty queue";return this.priv.peek()},s.prototype.clear=function(){return this.length=0,this.priv.clear()},s}()},{}],3:[function(t,n,a){var s;s=function(o,c,r){var d,f,l;for(f=0,d=o.length;f<d;)l=f+d>>>1,r(o[l],c)>=0?f=l+1:d=l;return f},n.exports=function(){function o(c){var r;this.options=c,this.comparator=this.options.comparator,this.data=((r=this.options.initialValues)!=null?r.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return o.prototype.queue=function(c){var r;r=s(this.data,c,this.comparator),this.data.splice(r,0,c)},o.prototype.dequeue=function(){return this.data.pop()},o.prototype.peek=function(){return this.data[this.data.length-1]},o.prototype.clear=function(){this.data.length=0},o}()},{}],4:[function(t,n,a){n.exports=function(){function s(o){var c,r,d,f,l,h,g,N;for(this.comparator=(o!=null?o.comparator:void 0)||function(u,b){return u-b},this.pageSize=(o!=null?o.pageSize:void 0)||512,this.length=0,g=0;1<<g<this.pageSize;)g+=1;if(1<<g!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=g,this._emptyMemoryPageTemplate=c=[],r=0,l=this.pageSize;0<=l?r<l:r>l;0<=l?++r:--r)c.push(null);if(this._memory=[],this._mask=this.pageSize-1,o.initialValues)for(h=o.initialValues,d=0,f=h.length;d<f;d++)N=h[d],this.queue(N)}return s.prototype.queue=function(o){this.length+=1,this._write(this.length,o),this._bubbleUp(this.length,o)},s.prototype.dequeue=function(){var o,c;return o=this._read(1),c=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,c),this._bubbleDown(1,c)),o},s.prototype.peek=function(){return this._read(1)},s.prototype.clear=function(){this.length=0,this._memory.length=0},s.prototype._write=function(o,c){var r;for(r=o>>this._shift;r>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[r][o&this._mask]=c},s.prototype._read=function(o){return this._memory[o>>this._shift][o&this._mask]},s.prototype._bubbleUp=function(o,c){var r,d,f,l;for(r=this.comparator;o>1&&(d=o&this._mask,o<this.pageSize||d>3?f=o&~this._mask|d>>1:d<2?(f=o-this.pageSize>>this._shift,f+=f&~(this._mask>>1),f|=this.pageSize>>1):f=o-2,l=this._read(f),!(r(l,c)<0));)this._write(f,c),this._write(o,l),o=f},s.prototype._bubbleDown=function(o,c){var r,d,f,l,h;for(h=this.comparator;o<this.length;)if(o>this._mask&&!(o&this._mask-1)?r=d=o+2:o&this.pageSize>>1?(r=(o&~this._mask)>>1,r|=o&this._mask>>1,r=r+1<<this._shift,d=r+1):(r=o+(o&this._mask),d=r+1),r!==d&&d<=this.length)if(f=this._read(r),l=this._read(d),h(f,c)<0&&h(f,l)<=0)this._write(r,c),this._write(o,f),o=r;else if(h(l,c)<0)this._write(d,c),this._write(o,l),o=d;else break;else if(r<=this.length)if(f=this._read(r),h(f,c)<0)this._write(r,c),this._write(o,f),o=r;else break;else break},s}()},{}],5:[function(t,n,a){n.exports=function(){function s(o){var c;this.comparator=(o!=null?o.comparator:void 0)||function(r,d){return r-d},this.length=0,this.data=((c=o.initialValues)!=null?c.slice(0):void 0)||[],this._heapify()}return s.prototype._heapify=function(){var o,c,r;if(this.data.length>0)for(o=c=1,r=this.data.length;1<=r?c<r:c>r;o=1<=r?++c:--c)this._bubbleUp(o)},s.prototype.queue=function(o){this.data.push(o),this._bubbleUp(this.data.length-1)},s.prototype.dequeue=function(){var o,c;return c=this.data[0],o=this.data.pop(),this.data.length>0&&(this.data[0]=o,this._bubbleDown(0)),c},s.prototype.peek=function(){return this.data[0]},s.prototype.clear=function(){this.length=0,this.data.length=0},s.prototype._bubbleUp=function(o){for(var c,r;o>0&&(c=o-1>>>1,this.comparator(this.data[o],this.data[c])<0);)r=this.data[c],this.data[c]=this.data[o],this.data[o]=r,o=c},s.prototype._bubbleDown=function(o){var c,r,d,f,l;for(c=this.data.length-1;r=(o<<1)+1,f=r+1,d=o,r<=c&&this.comparator(this.data[r],this.data[d])<0&&(d=r),f<=c&&this.comparator(this.data[f],this.data[d])<0&&(d=f),d!==o;)l=this.data[d],this.data[d]=this.data[o],this.data[o]=l,o=d},s}()},{}]},{},[1])(1)})})(ko);var Br=ko.exports;const xr=lr(Br);let dn,Pt=0,qi=null,vo="",ii;const En=new xr({comparator:(i,e)=>e.priority-i.priority}),Ui=ui(!1),Tt=ui(3e3),ni=ui([]);Go();function sa(i,e=!0){this.msg=i,this.stockfish=e}function pr(i,e,t,n,a){this.commands=i,this.priority=e,this.callback=t,this.resolve=n,this.reject=a}function Go(){console.log("Starting stockfish"),Stockfish().then(i=>{i.addMessageListener(Or),i.postMessage("uci"),i.postMessage("setoption name use nnue value true"),i.postMessage("setoption name Threads value 16"),i.postMessage("setoption name Hash value 128"),i.postMessage("setoption name UCI_AnalyseMode value true"),i.postMessage("ucinewgame"),dn=i,console.log("Stockfish started")})}function _o(){if(En.length>0){const i=En.dequeue();for(let e of i.commands)ni.value.push(new sa(e,!1)),dn.postMessage(e),i.callback!==void 0&&(qi=i.callback);ii=i}else ii=void 0}function Dr(i){switch(ni.value.push(new sa(i)),!i.startsWith("info")&&ii!=null&&(ii.resolve(i),_o()),i){case"uciok":Ui.value=!0;break}}function Or(i){if(Dr(i),console.log(i),i.startsWith("info depth")){const t=/ cp (-?\d+)/.exec(i);if(t===null){const o=/score mate (\d+)/.exec(i);Pt=parseFloat(o[1])*100}else Pt=parseFloat(t[1])/100;const a=/ pv (.+)/.exec(i);console.log("bestmove: "+a[1]),console.log("Pegasus Final Score: "+Pt),vo.split(" ")[1]=="w"?qi(Pt,a[1]):qi(-Pt,a[1])}}function bn(i,e,t=0,n=0){return dn===void 0&&e(0,"stockfish undefined"),t==0&&(t=Tt.value),vo=i,qi=e,wo([`position fen ${i}`,`go movetime ${t}`],void 0,n)}function Rn(){Ui.value=!1,Go()}function wo(i,e=void 0,t=0){if(i.constructor!==Array&&(i=[i]),console.log(i),dn!==void 0){let n,a;const s=new Promise((o,c)=>{n=o,a=c});return En.queue(new pr(i,t,e,n,a)),ii===void 0&&_o(),s}else return ni.value.push(new sa("Stockfish not running")),new Promise((n,a)=>a("Stockfish not running"))}const oa={props:{evaluation:{type:Number,required:!0},whiteBottom:{type:Boolean,required:!0}},data(){return{height:50,heightString:"50%"}},methods:{update(){if(this.heightString=this.height+"%",console.log("update"),this.evaluation==="0.0"||this.evaluation==="0"){this.height=50,this.heightString=this.height+"%";return}let i=Number(this.evaluation);if(console.log("TMP:"+i),i>=100){this.height=100,this.heightString="100%";return}if(i<-100){this.height=0,this.heightString="0%";return}i>0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=70+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=80+i,console.log("-9< x <9")):i>11&&(this.height=50+Math.log(Math.abs(i))*30)),i<0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=30+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=20+i,console.log("-9< x <9")):i<-11&&(this.height=50-Math.log(Math.abs(i))*30)),this.height>96&&(this.height=96),this.height<4&&(this.height=4),this.heightString=this.height+"%"}},beforeMount(){this.update()},updated(){this.update()}},Ea=()=>{hr(i=>({"611bb3c4":i.heightString}))},Ra=oa.setup;oa.setup=Ra?(i,e)=>(Ea(),Ra(i,e)):Ea;const Vr={class:"h-full w-24 flex flex-row flex-none pr-3 items-center space-x-3"},Cr={class:"w-4 h-full relative"},yr={class:"h-full rounded-lg bg-slate-700"};function Ar(i,e,t,n,a,s){return S(),k("div",Vr,[p("div",{class:At(["badge flex-grow border-none",[t.evaluation>=0?"bg-slate-300":"bg-slate-700",t.evaluation>=0?"text-sla":"text-slate-300"]])},v(Math.abs(t.evaluation)),3),p("div",Cr,[p("div",yr,[p("div",{class:At(["w-full absolute left-0 evalWhite bg-slate-300",[t.whiteBottom?"bottom-0":"top-0",t.whiteBottom?"rounded-b-lg":"rounded-t-lg"]])},null,2)])])])}const Sr=et(oa,[["render",Ar],["__scopeId","data-v-82eeea00"]]),kr={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/standard-avatar.png"}}},beforeMount(){this.updateUser()},watch:{color(){this.updateUser()}},methods:{updateUser(){So.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},vr={class:"flex justify-center items-center"},Gr=["src"],_r=["src"],wr={class:"flex flex-row items-baseline"},Mr={class:"text-xl font-bold"},Pr={class:"text-xs px-3"};function Qr(i,e,t,n,a,s){return S(),k("div",vr,[t.color?(S(),k("img",{key:0,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-300",src:a.user.avatar,alt:""},null,8,Gr)):(S(),k("img",{key:1,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-700",src:a.user.avatar,alt:""},null,8,_r)),p("div",wr,[p("h2",Mr,v(a.user.username),1),p("p",Pr,v(this.elo),1)]),p("button",{class:"rounded-full p-2 text-white",onClick:e[0]||(e[0]=o=>i.$emit("turnBoard"))},"↻")])}const Er=et(kr,[["render",Qr]]),Rr="/pegasus/assets/pawnKingIcon-9e7b4382.png",Lr={props:{evaluation:{type:Number,required:!0},typee:{type:String,required:!0}},data(){return{height:40,styleString:"background: conic-gradient(#F741B8 36deg 60deg, #475569 36deg); border-radius: 50%;"}},methods:{update(){this.height=this.evaluation,this.styleString="background: conic-gradient(#18181B 36deg "+360*(this.height/100)+"deg, #F5F5F4 36deg); border-radius: 50%;"}},beforeMount(){this.update()},updated(){this.update()}},Kr=p("div",{class:"h-12 w-12 bg-base-100 rounded-full flex items-center justify-center"},[p("img",{src:Rr,class:"h-2/3"})],-1),zr=[Kr];function Ir(i,e,t,n,a,s){return this.typee=="pawn"?(S(),k("div",{key:0,class:"h-20 w-20 m-2 flex items-center justify-center tooltip tooltip-bottom",style:Do(a.styleString),"data-tip":"Pawn Structure"},zr,4)):aa("",!0)}const Fr=et(Lr,[["render",Ir]]);function Mo(i){const t=`A00	Amar Gambit	1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4
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
`).map(a=>a.trim());let n=[];console.log("UNICORN"),console.log(i);for(const a of t){let o=a.split("	")[2].split(" ");o=o.filter(c=>!c.endsWith(".")),o.every((c,r)=>c===i[r])&&n.push({t:o,m:a.split("	")[1],a:a.split("	")[0][0]})}return n.length==0?null:(n.sort(a=>{a.t.length}),n[n.length-1].a==["A"]&&(n[n.length-1].a=["Flank Attack"]),n[n.length-1].a==["B"]&&(n[n.length-1].a=["Semi-Open Game"]),n[n.length-1].a==["C"]&&(n[n.length-1].a=["Open Game"]),n[n.length-1].a==["D"]&&(n[n.length-1].a=["Closed Position"]),n[n.length-1].a==["E"]&&(n[n.length-1].a=["Indian Game"]),n[n.length-1])}const Tr={class:"promotion-dialog",open:""},Hr=["aria-label","onClick","onTouchstartPassive"],Wr=Oo({__name:"PromotionDialog",props:{state:{}},emits:["promotionSelected"],setup(i,{emit:e}){const t=i,n=[{name:"Queen",data:"q"},{name:"Knight",data:"n"},{name:"Rook",data:"r"},{name:"Bishop",data:"b"}];function a(s){var o,c;(c=(o=t.state).callback)==null||c.call(o,s.data),e("promotionSelected")}return(s,o)=>(S(),Vo(gr,{to:"cg-board"},[p("dialog",Tr,[(S(),k(bi,null,rn(n,c=>p("button",{key:c.name,class:At([c.name.toLowerCase(),s.state.color]),"aria-label":c.name,onClick:r=>a(c),onTouchstartPassive:r=>a(c)},null,42,Hr)),64))])]))}});/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */const ne="w",Be="b",X="p",Ln="n",Ri="b",Ht="r",We="q",J="k",mn="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Ne=-1,jr={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},$r=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"],M={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},P={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},Bn={b:[16,32,17,15],w:[-16,-32,-17,-15]},La={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},qr=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],Ur=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],Yr={p:1,n:2,b:4,r:8,q:16,k:32},Zr="pnbrqkPNBRQK",Ka=[Ln,Ri,Ht,We],Xr=7,Jr=6,ed=1,td=0,Vi={[J]:M.KSIDE_CASTLE,[We]:M.QSIDE_CASTLE},ze={w:[{square:P.a1,flag:M.QSIDE_CASTLE},{square:P.h1,flag:M.KSIDE_CASTLE}],b:[{square:P.a8,flag:M.QSIDE_CASTLE},{square:P.h8,flag:M.KSIDE_CASTLE}]},id={b:ed,w:Jr},nd=["1-0","0-1","1/2-1/2","*"];function ht(i){return i>>4}function ai(i){return i&15}function Po(i){return"0123456789".indexOf(i)!==-1}function ge(i){const e=ai(i),t=ht(i);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function Qt(i){return i===ne?Be:ne}function ad(i){const e=i.split(/\s+/);if(e.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const t=parseInt(e[5],10);if(isNaN(t)||t<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const n=parseInt(e[4],10);if(isNaN(n)||n<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const a=e[0].split("/");if(a.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let o=0;o<a.length;o++){let c=0,r=!1;for(let d=0;d<a[o].length;d++)if(Po(a[o][d])){if(r)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};c+=parseInt(a[o][d],10),r=!0}else{if(!/^[prnbqkPRNBQK]$/.test(a[o][d]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};c+=1,r=!1}if(c!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(e[3][1]=="3"&&e[1]=="w"||e[3][1]=="6"&&e[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const s=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:o,regex:c}of s){if(!c.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${o} king`};if((e[0].match(c)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${o} kings`}}return{ok:!0}}function sd(i,e){const t=i.from,n=i.to,a=i.piece;let s=0,o=0,c=0;for(let r=0,d=e.length;r<d;r++){const f=e[r].from,l=e[r].to,h=e[r].piece;a===h&&t!==f&&n===l&&(s++,ht(t)===ht(f)&&o++,ai(t)===ai(f)&&c++)}return s>0?o>0&&c>0?ge(t):c>0?ge(t).charAt(1):ge(t).charAt(0):""}function Ie(i,e,t,n,a,s=void 0,o=M.NORMAL){const c=ht(n);if(a===X&&(c===Xr||c===td))for(let r=0;r<Ka.length;r++){const d=Ka[r];i.push({color:e,from:t,to:n,piece:a,captured:s,promotion:d,flags:o|M.PROMOTION})}else i.push({color:e,from:t,to:n,piece:a,captured:s,flags:o})}function za(i){let e=i.charAt(0);return e>="a"&&e<="h"?i.match(/[a-h]\d.*[a-h]\d/)?void 0:X:(e=e.toLowerCase(),e==="o"?J:e)}function xn(i){return i.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class od{constructor(e=mn){C(this,"_board",new Array(128));C(this,"_turn",ne);C(this,"_header",{});C(this,"_kings",{w:Ne,b:Ne});C(this,"_epSquare",-1);C(this,"_halfMoves",0);C(this,"_moveNumber",0);C(this,"_history",[]);C(this,"_comments",{});C(this,"_castling",{w:0,b:0});this.load(e)}clear(e=!1){this._board=new Array(128),this._kings={w:Ne,b:Ne},this._turn=ne,this._castling={w:0,b:0},this._epSquare=Ne,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{},this._updateSetup(this.fen())}removeHeader(e){e in this._header&&delete this._header[e]}load(e,t=!1){let n=e.split(/\s+/);if(n.length>=2&&n.length<6){const r=["-","-","0","1"];e=n.concat(r.slice(-(6-n.length))).join(" ")}n=e.split(/\s+/);const{ok:a,error:s}=ad(e);if(!a)throw new Error(s);const o=n[0];let c=0;this.clear(t);for(let r=0;r<o.length;r++){const d=o.charAt(r);if(d==="/")c+=8;else if(Po(d))c+=parseInt(d,10);else{const f=d<"a"?ne:Be;this.put({type:d.toLowerCase(),color:f},ge(c)),c++}}this._turn=n[1],n[2].indexOf("K")>-1&&(this._castling.w|=M.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(this._castling.w|=M.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(this._castling.b|=M.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(this._castling.b|=M.QSIDE_CASTLE),this._epSquare=n[3]==="-"?Ne:P[n[3]],this._halfMoves=parseInt(n[4],10),this._moveNumber=parseInt(n[5],10),this._updateSetup(this.fen())}fen(){var s,o;let e=0,t="";for(let c=P.a8;c<=P.h1;c++){if(this._board[c]){e>0&&(t+=e,e=0);const{color:r,type:d}=this._board[c];t+=r===ne?d.toUpperCase():d.toLowerCase()}else e++;c+1&136&&(e>0&&(t+=e),c!==P.h1&&(t+="/"),e=0,c+=8)}let n="";this._castling[ne]&M.KSIDE_CASTLE&&(n+="K"),this._castling[ne]&M.QSIDE_CASTLE&&(n+="Q"),this._castling[Be]&M.KSIDE_CASTLE&&(n+="k"),this._castling[Be]&M.QSIDE_CASTLE&&(n+="q"),n=n||"-";let a="-";if(this._epSquare!==Ne){const c=this._epSquare+(this._turn===ne?16:-16),r=[c+1,c-1];for(const d of r){if(d&136)continue;const f=this._turn;if(((s=this._board[d])==null?void 0:s.color)===f&&((o=this._board[d])==null?void 0:o.type)===X){this._makeMove({color:f,from:d,to:this._epSquare,piece:X,captured:X,flags:M.EP_CAPTURE});const l=!this._isKingAttacked(f);if(this._undoMove(),l){a=ge(this._epSquare);break}}}}return[t,this._turn,n,a,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(e){this._history.length>0||(e!==mn?(this._header.SetUp="1",this._header.FEN=e):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(mn)}get(e){return this._board[P[e]]||!1}put({type:e,color:t},n){if(Zr.indexOf(e.toLowerCase())===-1||!(n in P))return!1;const a=P[n];return e==J&&!(this._kings[t]==Ne||this._kings[t]==a)?!1:(this._board[a]={type:e,color:t},e===J&&(this._kings[t]=a),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),!0)}remove(e){const t=this.get(e);return delete this._board[P[e]],t&&t.type===J&&(this._kings[t.color]=Ne),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),t}_updateCastlingRights(){var n,a,s,o,c,r,d,f,l,h,g,N;const e=((n=this._board[P.e1])==null?void 0:n.type)===J&&((a=this._board[P.e1])==null?void 0:a.color)===ne,t=((s=this._board[P.e8])==null?void 0:s.type)===J&&((o=this._board[P.e8])==null?void 0:o.color)===Be;(!e||((c=this._board[P.a1])==null?void 0:c.type)!==Ht||((r=this._board[P.a1])==null?void 0:r.color)!==ne)&&(this._castling.w&=~M.QSIDE_CASTLE),(!e||((d=this._board[P.h1])==null?void 0:d.type)!==Ht||((f=this._board[P.h1])==null?void 0:f.color)!==ne)&&(this._castling.w&=~M.KSIDE_CASTLE),(!t||((l=this._board[P.a8])==null?void 0:l.type)!==Ht||((h=this._board[P.a8])==null?void 0:h.color)!==Be)&&(this._castling.b&=~M.QSIDE_CASTLE),(!t||((g=this._board[P.h8])==null?void 0:g.type)!==Ht||((N=this._board[P.h8])==null?void 0:N.color)!==Be)&&(this._castling.b&=~M.KSIDE_CASTLE)}_updateEnPassantSquare(){var s,o;if(this._epSquare===Ne)return;const e=this._epSquare+(this._turn===ne?-16:16),t=this._epSquare+(this._turn===ne?16:-16),n=[t+1,t-1];if(this._board[e]!==null||this._board[this._epSquare]!==null||((s=this._board[t])==null?void 0:s.color)!==Qt(this._turn)||((o=this._board[t])==null?void 0:o.type)!==X){this._epSquare=Ne;return}const a=c=>{var r,d;return!(c&136)&&((r=this._board[c])==null?void 0:r.color)===this._turn&&((d=this._board[c])==null?void 0:d.type)===X};n.some(a)||(this._epSquare=Ne)}_attacked(e,t){for(let n=P.a8;n<=P.h1;n++){if(n&136){n+=7;continue}if(this._board[n]===void 0||this._board[n].color!==e)continue;const a=this._board[n],s=n-t;if(s===0)continue;const o=s+119;if(qr[o]&Yr[a.type]){if(a.type===X){if(s>0){if(a.color===ne)return!0}else if(a.color===Be)return!0;continue}if(a.type==="n"||a.type==="k")return!0;const c=Ur[o];let r=n+c,d=!1;for(;r!==t;){if(this._board[r]!=null){d=!0;break}r+=c}if(!d)return!0}}return!1}_isKingAttacked(e){const t=this._kings[e];return t===-1?!1:this._attacked(Qt(e),t)}isAttacked(e,t){return this._attacked(t,P[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let n=0,a=0;for(let s=P.a8;s<=P.h1;s++){if(a=(a+1)%2,s&136){s+=7;continue}const o=this._board[s];o&&(e[o.type]=o.type in e?e[o.type]+1:1,o.type===Ri&&t.push(a),n++)}if(n===2||n===3&&(e[Ri]===1||e[Ln]===1))return!0;if(n===e[Ri]+2){let s=0;const o=t.length;for(let c=0;c<o;c++)s+=t[c];if(s===0||s===o)return!0}return!1}isThreefoldRepetition(){const e=[],t={};let n=!1;for(;;){const a=this._undoMove();if(!a)break;e.push(a)}for(;;){const a=this.fen().split(" ").slice(0,4).join(" ");t[a]=a in t?t[a]+1:1,t[a]>=3&&(n=!0);const s=e.pop();if(s)this._makeMove(s);else break}return n}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0,piece:n=void 0}={}){const a=this._moves({square:t,piece:n});return e?a.map(s=>this._makePretty(s)):a.map(s=>this._moveToSan(s,a))}_moves({legal:e=!0,piece:t=void 0,square:n=void 0}={}){var g;const a=n?n.toLowerCase():void 0,s=t==null?void 0:t.toLowerCase(),o=[],c=this._turn,r=Qt(c);let d=P.a8,f=P.h1,l=!1;if(a)if(a in P)d=f=P[a],l=!0;else return[];for(let N=d;N<=f;N++){if(N&136){N+=7;continue}if(!this._board[N]||this._board[N].color===r)continue;const{type:u}=this._board[N];let b;if(u===X){if(s&&s!==u)continue;b=N+Bn[c][0],this._board[b]||(Ie(o,c,N,b,X),b=N+Bn[c][1],id[c]===ht(N)&&!this._board[b]&&Ie(o,c,N,b,X,void 0,M.BIG_PAWN));for(let B=2;B<4;B++)b=N+Bn[c][B],!(b&136)&&(((g=this._board[b])==null?void 0:g.color)===r?Ie(o,c,N,b,X,this._board[b].type,M.CAPTURE):b===this._epSquare&&Ie(o,c,N,b,X,X,M.EP_CAPTURE))}else{if(s&&s!==u)continue;for(let B=0,m=La[u].length;B<m;B++){const D=La[u][B];for(b=N;b+=D,!(b&136);){if(!this._board[b])Ie(o,c,N,b,u);else{if(this._board[b].color===c)break;Ie(o,c,N,b,u,this._board[b].type,M.CAPTURE);break}if(u===Ln||u===J)break}}}}if((s===void 0||s===J)&&(!l||f===this._kings[c])){if(this._castling[c]&M.KSIDE_CASTLE){const N=this._kings[c],u=N+2;!this._board[N+1]&&!this._board[u]&&!this._attacked(r,this._kings[c])&&!this._attacked(r,N+1)&&!this._attacked(r,u)&&Ie(o,c,this._kings[c],u,J,void 0,M.KSIDE_CASTLE)}if(this._castling[c]&M.QSIDE_CASTLE){const N=this._kings[c],u=N-2;!this._board[N-1]&&!this._board[N-2]&&!this._board[N-3]&&!this._attacked(r,this._kings[c])&&!this._attacked(r,N-1)&&!this._attacked(r,u)&&Ie(o,c,this._kings[c],u,J,void 0,M.QSIDE_CASTLE)}}if(!e||this._kings[c]===-1)return o;const h=[];for(let N=0,u=o.length;N<u;N++)this._makeMove(o[N]),this._isKingAttacked(c)||h.push(o[N]),this._undoMove();return h}move(e,{strict:t=!1}={}){let n=null;if(typeof e=="string")n=this._moveFromSan(e,t);else if(typeof e=="object"){const s=this._moves();for(let o=0,c=s.length;o<c;o++)if(e.from===ge(s[o].from)&&e.to===ge(s[o].to)&&(!("promotion"in s[o])||e.promotion===s[o].promotion)){n=s[o];break}}if(!n)throw typeof e=="string"?new Error(`Invalid move: ${e}`):new Error(`Invalid move: ${JSON.stringify(e)}`);const a=this._makePretty(n);return this._makeMove(n),a}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(e){const t=this._turn,n=Qt(t);if(this._push(e),this._board[e.to]=this._board[e.from],delete this._board[e.from],e.flags&M.EP_CAPTURE&&(this._turn===Be?delete this._board[e.to-16]:delete this._board[e.to+16]),e.promotion&&(this._board[e.to]={type:e.promotion,color:t}),this._board[e.to].type===J){if(this._kings[t]=e.to,e.flags&M.KSIDE_CASTLE){const a=e.to-1,s=e.to+1;this._board[a]=this._board[s],delete this._board[s]}else if(e.flags&M.QSIDE_CASTLE){const a=e.to+1,s=e.to-2;this._board[a]=this._board[s],delete this._board[s]}this._castling[t]=0}if(this._castling[t]){for(let a=0,s=ze[t].length;a<s;a++)if(e.from===ze[t][a].square&&this._castling[t]&ze[t][a].flag){this._castling[t]^=ze[t][a].flag;break}}if(this._castling[n]){for(let a=0,s=ze[n].length;a<s;a++)if(e.to===ze[n][a].square&&this._castling[n]&ze[n][a].flag){this._castling[n]^=ze[n][a].flag;break}}e.flags&M.BIG_PAWN?t===Be?this._epSquare=e.to-16:this._epSquare=e.to+16:this._epSquare=Ne,e.piece===X?this._halfMoves=0:e.flags&(M.CAPTURE|M.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===Be&&this._moveNumber++,this._turn=n}undo(){const e=this._undoMove();return e?this._makePretty(e):null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber;const n=this._turn,a=Qt(n);if(this._board[t.from]=this._board[t.to],this._board[t.from].type=t.piece,delete this._board[t.to],t.captured)if(t.flags&M.EP_CAPTURE){let s;n===Be?s=t.to-16:s=t.to+16,this._board[s]={type:X,color:a}}else this._board[t.to]={type:t.captured,color:a};if(t.flags&(M.KSIDE_CASTLE|M.QSIDE_CASTLE)){let s,o;t.flags&M.KSIDE_CASTLE?(s=t.to+1,o=t.to-1):(s=t.to-2,o=t.to+1),this._board[s]=this._board[o],delete this._board[o]}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const n=[];let a=!1;for(const h in this._header)n.push("["+h+' "'+this._header[h]+'"]'+e),a=!0;a&&this._history.length&&n.push(e);const s=h=>{const g=this._comments[this.fen()];if(typeof g<"u"){const N=h.length>0?" ":"";h=`${h}${N}{${g}}`}return h},o=[];for(;this._history.length>0;)o.push(this._undoMove());const c=[];let r="";for(o.length===0&&c.push(s(""));o.length>0;){r=s(r);const h=o.pop();if(!h)break;if(!this._history.length&&h.color==="b"){const g=`${this._moveNumber}. ...`;r=r?`${r} ${g}`:g}else h.color==="w"&&(r.length&&c.push(r),r=this._moveNumber+".");r=r+" "+this._moveToSan(h,this._moves({legal:!0})),this._makeMove(h)}if(r.length&&c.push(s(r)),typeof this._header.Result<"u"&&c.push(this._header.Result),t===0)return n.join("")+c.join(" ");const d=function(){return n.length>0&&n[n.length-1]===" "?(n.pop(),!0):!1},f=function(h,g){for(const N of g.split(" "))if(N){if(h+N.length>t){for(;d();)h--;n.push(e),h=0}n.push(N),h+=N.length,n.push(" "),h++}return d()&&h--,h};let l=0;for(let h=0;h<c.length;h++){if(l+c[h].length>t&&c[h].includes("{")){l=f(l,c[h]);continue}l+c[h].length>t&&h!==0?(n[n.length-1]===" "&&n.pop(),n.push(e),l=0):h!==0&&(n.push(" "),l++),n.push(c[h]),l+=c[h].length}return n.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}loadPgn(e,{strict:t=!1,newlineChar:n=`\r?
`}={}){function a(m){return m.replace(/\\/g,"\\")}function s(m){const D={},O=m.split(new RegExp(a(n)));let x="",A="";for(let y=0;y<O.length;y++){const V=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;x=O[y].replace(V,"$1"),A=O[y].replace(V,"$2"),x.trim().length>0&&(D[x]=A)}return D}e=e.trim();const o=new RegExp("^(\\[((?:"+a(n)+")|.)*\\])((?:\\s*"+a(n)+"){2}|(?:\\s*"+a(n)+")*$)").exec(e),c=o&&o.length>=2?o[1]:"";this.reset();const r=s(c);let d="";for(const m in r)m.toLowerCase()==="fen"&&(d=r[m]),this.header(m,r[m]);if(!t)d&&this.load(d,!0);else if(r.SetUp==="1"){if(!("FEN"in r))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(r.FEN,!0)}function f(m){return Array.from(m).map(function(D){return D.charCodeAt(0)<128?D.charCodeAt(0).toString(16):encodeURIComponent(D).replace(/%/g,"").toLowerCase()}).join("")}function l(m){return m.length==0?"":decodeURIComponent("%"+(m.match(/.{1,2}/g)||[]).join("%"))}const h=function(m){return m=m.replace(new RegExp(a(n),"g")," "),`{${f(m.slice(1,m.length-1))}}`},g=function(m){if(m.startsWith("{")&&m.endsWith("}"))return l(m.slice(1,m.length-1))};let N=e.replace(c,"").replace(new RegExp(`({[^}]*})+?|;([^${a(n)}]*)`,"g"),function(m,D,O){return D!==void 0?h(D):" "+h(`{${O.slice(1)}}`)}).replace(new RegExp(a(n),"g")," ");const u=/(\([^()]+\))+?/g;for(;u.test(N);)N=N.replace(u,"");N=N.replace(/\d+\.(\.\.)?/g,""),N=N.replace(/\.\.\./g,""),N=N.replace(/\$\d+/g,"");let b=N.trim().split(new RegExp(/\s+/));b=b.filter(m=>m!=="");let B="";for(let m=0;m<b.length;m++){const D=g(b[m]);if(D!==void 0){this._comments[this.fen()]=D;continue}const O=this._moveFromSan(b[m],t);if(O==null)if(nd.indexOf(b[m])>-1)B=b[m];else throw new Error(`Invalid move in PGN: ${b[m]}`);else B="",this._makeMove(O)}B&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",B)}_moveToSan(e,t){let n="";if(e.flags&M.KSIDE_CASTLE)n="O-O";else if(e.flags&M.QSIDE_CASTLE)n="O-O-O";else{if(e.piece!==X){const a=sd(e,t);n+=e.piece.toUpperCase()+a}e.flags&(M.CAPTURE|M.EP_CAPTURE)&&(e.piece===X&&(n+=ge(e.from)[0]),n+="x"),n+=ge(e.to),e.promotion&&(n+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?n+="#":n+="+"),this._undoMove(),n}_moveFromSan(e,t=!1){const n=xn(e);let a=za(n),s=this._moves({legal:!0,piece:a});for(let h=0,g=s.length;h<g;h++)if(n===xn(this._moveToSan(s[h],s)))return s[h];if(t)return null;let o,c,r,d,f,l=!1;if(c=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),c?(o=c[1],r=c[2],d=c[3],f=c[4],r.length==1&&(l=!0)):(c=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),c&&(o=c[1],r=c[2],d=c[3],f=c[4],r.length==1&&(l=!0))),a=za(n),s=this._moves({legal:!0,piece:o||a}),!d)return null;for(let h=0,g=s.length;h<g;h++)if(r){if((!o||o.toLowerCase()==s[h].piece)&&P[r]==s[h].from&&P[d]==s[h].to&&(!f||f.toLowerCase()==s[h].promotion))return s[h];if(l){const N=ge(s[h].from);if((!o||o.toLowerCase()==s[h].piece)&&P[d]==s[h].to&&(r==N[0]||r==N[1])&&(!f||f.toLowerCase()==s[h].promotion))return s[h]}}else if(n===xn(this._moveToSan(s[h],s)).replace("x",""))return s[h];return null}ascii(){let e=`   +------------------------+
`;for(let t=P.a8;t<=P.h1;t++){if(ai(t)===0&&(e+=" "+"87654321"[ht(t)]+" |"),this._board[t]){const n=this._board[t].type,a=this._board[t].color===ne?n.toUpperCase():n.toLowerCase();e+=" "+a+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let n=0;const a=this._turn;for(let s=0,o=t.length;s<o;s++)this._makeMove(t[s]),this._isKingAttacked(a)||(e-1>0?n+=this.perft(e-1):n++),this._undoMove();return n}_makePretty(e){const{color:t,piece:n,from:a,to:s,flags:o,captured:c,promotion:r}=e;let d="";for(const g in M)M[g]&o&&(d+=jr[g]);const f=ge(a),l=ge(s),h={color:t,piece:n,from:f,to:l,san:this._moveToSan(e,this._moves({legal:!0})),flags:d,lan:f+l,before:this.fen(),after:""};return this._makeMove(e),h.after=this.fen(),this._undoMove(),c&&(h.captured=c),r&&(h.promotion=r,h.lan+=r),h}turn(){return this._turn}board(){const e=[];let t=[];for(let n=P.a8;n<=P.h1;n++)this._board[n]==null?t.push(null):t.push({square:ge(n),type:this._board[n].type,color:this._board[n].color}),n+1&136&&(e.push(t),t=[],n+=8);return e}squareColor(e){if(e in P){const t=P[e];return(ht(t)+ai(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],n=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const a=t.pop();if(!a)break;e?n.push(this._makePretty(a)):n.push(this._moveToSan(a,this._moves())),this._makeMove(a)}return n}_pruneComments(){const e=[],t={},n=a=>{a in this._comments&&(t[a]=this._comments[a])};for(;this._history.length>0;)e.push(this._undoMove());for(n(this.fen());;){const a=e.pop();if(!a)break;this._makeMove(a),n(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}setCastlingRights(e,t){for(const a of[J,We])t[a]!==void 0&&(t[a]?this._castling[e]|=Vi[a]:this._castling[e]&=~Vi[a]);this._updateCastlingRights();const n=this.getCastlingRights(e);return(t[J]===void 0||t[J]===n[J])&&(t[We]===void 0||t[We]===n[We])}getCastlingRights(e){return{[J]:(this._castling[e]&Vi[J])!==0,[We]:(this._castling[e]&Vi[We])!==0}}moveNumber(){return this._moveNumber}}function cd(i){const e=[];for(const t of i)e.push({orig:t.to,brush:"yellow"}),t.captured&&e.push({orig:t.from,dest:t.to,brush:"red"}),t.san.includes("+")&&e.push({orig:t.from,dest:t.to,brush:"blue"});return e}function pn(i){return i==="w"?"white":"black"}function Ia(i){const e=new Map;for(const t of $r){const n=i.moves({square:t,verbose:!0});n.length&&e.set(n[0].from,n.map(a=>a.to))}return e}function rd(i,e){if((e==null?void 0:e.type)!=="p")return!1;const t=(e==null?void 0:e.color)==="w"?"8":"1";return i[1]===t}function si(i){return!!i&&i instanceof Object&&!(i instanceof Array)&&!(i instanceof Function)}function Yi(i){return si(i)?Object.fromEntries(Object.entries(i).map(([e,t])=>[e,Yi(t)])):i}function Qo(i,e){const t={...i,...e};for(const n in t)t[n]=si(i==null?void 0:i[n])&&si(e==null?void 0:e[n])?Qo(i[n],e[n]):Yi(t[n]);return t}function Eo(i,e){const t={};for(const n in e)if(si(i==null?void 0:i[n])&&si(e==null?void 0:e[n])){const a=Eo(i[n],e[n]);Object.keys(a).length>0&&(t[n]=a)}else(i==null?void 0:i[n])!==e[n]&&(t[n]=e[n]);return t}const dd=new Map([["b1",["a3","c3"]],["g1",["f3","h3"]],["a2",["a3","a4"]],["b2",["b3","b4"]],["c2",["c3","c4"]],["d2",["d3","d4"]],["e2",["e3","e4"]],["f2",["f3","f4"]],["g2",["g3","g4"]],["h2",["h3","h4"]]]),fd="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",ld={fen:fd,orientation:"white",turnColor:"white",coordinates:!1,autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:300},lastMove:void 0,movable:{free:!1,color:"white",showDests:!0,dests:dd,events:{after:()=>{},afterNewPiece:void 0},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{set:void 0,unset:void 0}},predroppable:{enabled:!1,events:{set:void 0,unset:void 0}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},selectable:{enabled:!0},events:{change:void 0,move:void 0,dropNewPiece:void 0,select:void 0,insert:void 0},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15}}}},hd=["white","black"],ca=["a","b","c","d","e","f","g","h"],ra=["1","2","3","4","5","6","7","8"],Nd=[...ra].reverse(),da=Array.prototype.concat(...ca.map(i=>ra.map(e=>i+e))),xe=i=>da[8*i[0]+i[1]],Y=i=>[i.charCodeAt(0)-97,i.charCodeAt(1)-49],Ro=da.map(Y);function gd(i){let e;const t=()=>(e===void 0&&(e=i()),e);return t.clear=()=>{e=void 0},t}const ud=()=>{let i;return{start(){i=performance.now()},cancel(){i=void 0},stop(){if(!i)return 0;const e=performance.now()-i;return i=void 0,e}}},fa=i=>i==="white"?"black":"white",oi=(i,e)=>{const t=i[0]-e[0],n=i[1]-e[1];return t*t+n*n},Kn=(i,e)=>i.role===e.role&&i.color===e.color,mi=i=>(e,t)=>[(t?e[0]:7-e[0])*i.width/8,(t?7-e[1]:e[1])*i.height/8],ke=(i,e)=>{i.style.transform=`translate(${e[0]}px,${e[1]}px)`},Lo=(i,e,t=1)=>{i.style.transform=`translate(${e[0]}px,${e[1]}px) scale(${t})`},la=(i,e)=>{i.style.visibility=e?"visible":"hidden"},Bt=i=>{var e;if(i.clientX||i.clientX===0)return[i.clientX,i.clientY];if(!((e=i.targetTouches)===null||e===void 0)&&e[0])return[i.targetTouches[0].clientX,i.targetTouches[0].clientY]},Ko=i=>i.buttons===2||i.button===2,Ee=(i,e)=>{const t=document.createElement(i);return e&&(t.className=e),t};function zo(i,e,t){const n=Y(i);return e||(n[0]=7-n[0],n[1]=7-n[1]),[t.left+t.width*n[0]/8+t.width/16,t.top+t.height*(7-n[1])/8+t.height/16]}const ut=(i,e)=>Math.abs(i-e),bd=i=>(e,t,n,a)=>ut(e,n)<2&&(i==="white"?a===t+1||t<=1&&a===t+2&&e===n:a===t-1||t>=6&&a===t-2&&e===n),Io=(i,e,t,n)=>{const a=ut(i,t),s=ut(e,n);return a===1&&s===2||a===2&&s===1},Fo=(i,e,t,n)=>ut(i,t)===ut(e,n),To=(i,e,t,n)=>i===t||e===n,Ho=(i,e,t,n)=>Fo(i,e,t,n)||To(i,e,t,n),md=(i,e,t)=>(n,a,s,o)=>ut(n,s)<2&&ut(a,o)<2||t&&a===o&&a===(i==="white"?0:7)&&(n===4&&(s===2&&e.includes(0)||s===6&&e.includes(7))||e.includes(s));function Bd(i,e){const t=e==="white"?"1":"8",n=[];for(const[a,s]of i)a[1]===t&&s.color===e&&s.role==="rook"&&n.push(Y(a)[0]);return n}function Wo(i,e,t){const n=i.get(e);if(!n)return[];const a=Y(e),s=n.role,o=s==="pawn"?bd(n.color):s==="knight"?Io:s==="bishop"?Fo:s==="rook"?To:s==="queen"?Ho:md(n.color,Bd(i,n.color),t);return Ro.filter(c=>(a[0]!==c[0]||a[1]!==c[1])&&o(a[0],a[1],c[0],c[1])).map(xe)}function fe(i,...e){i&&setTimeout(()=>i(...e),1)}function xd(i){i.orientation=fa(i.orientation),i.animation.current=i.draggable.current=i.selected=void 0}function pd(i,e){for(const[t,n]of e)n?i.pieces.set(t,n):i.pieces.delete(t)}function Dd(i,e){if(i.check=void 0,e===!0&&(e=i.turnColor),e)for(const[t,n]of i.pieces)n.role==="king"&&n.color===e&&(i.check=t)}function Od(i,e,t,n){it(i),i.premovable.current=[e,t],fe(i.premovable.events.set,e,t,n)}function tt(i){i.premovable.current&&(i.premovable.current=void 0,fe(i.premovable.events.unset))}function Vd(i,e,t){tt(i),i.predroppable.current={role:e,key:t},fe(i.predroppable.events.set,e,t)}function it(i){const e=i.predroppable;e.current&&(e.current=void 0,fe(e.events.unset))}function Cd(i,e,t){if(!i.autoCastle)return!1;const n=i.pieces.get(e);if(!n||n.role!=="king")return!1;const a=Y(e),s=Y(t);if(a[1]!==0&&a[1]!==7||a[1]!==s[1])return!1;a[0]===4&&!i.pieces.has(t)&&(s[0]===6?t=xe([7,s[1]]):s[0]===2&&(t=xe([0,s[1]])));const o=i.pieces.get(t);return!o||o.color!==n.color||o.role!=="rook"?!1:(i.pieces.delete(e),i.pieces.delete(t),a[0]<s[0]?(i.pieces.set(xe([6,s[1]]),n),i.pieces.set(xe([5,s[1]]),o)):(i.pieces.set(xe([2,s[1]]),n),i.pieces.set(xe([3,s[1]]),o)),!0)}function jo(i,e,t){const n=i.pieces.get(e),a=i.pieces.get(t);if(e===t||!n)return!1;const s=a&&a.color!==n.color?a:void 0;return t===i.selected&&pe(i),fe(i.events.move,e,t,s),Cd(i,e,t)||(i.pieces.set(t,n),i.pieces.delete(e)),i.lastMove=[e,t],i.check=void 0,fe(i.events.change),s||!0}function ha(i,e,t,n){if(i.pieces.has(t))if(n)i.pieces.delete(t);else return!1;return fe(i.events.dropNewPiece,e,t),i.pieces.set(t,e),i.lastMove=[t],i.check=void 0,fe(i.events.change),i.movable.dests=void 0,i.turnColor=fa(i.turnColor),!0}function $o(i,e,t){const n=jo(i,e,t);return n&&(i.movable.dests=void 0,i.turnColor=fa(i.turnColor),i.animation.current=void 0),n}function qo(i,e,t){if(Na(i,e,t)){const n=$o(i,e,t);if(n){const a=i.hold.stop();pe(i);const s={premove:!1,ctrlKey:i.stats.ctrlKey,holdTime:a};return n!==!0&&(s.captured=n),fe(i.movable.events.after,e,t,s),!0}}else if(Ad(i,e,t))return Od(i,e,t,{ctrlKey:i.stats.ctrlKey}),pe(i),!0;return pe(i),!1}function Uo(i,e,t,n){const a=i.pieces.get(e);a&&(yd(i,e,t)||n)?(i.pieces.delete(e),ha(i,a,t,n),fe(i.movable.events.afterNewPiece,a.role,t,{premove:!1,predrop:!1})):a&&Sd(i,e,t)?Vd(i,a.role,t):(tt(i),it(i)),i.pieces.delete(e),pe(i)}function zn(i,e,t){if(fe(i.events.select,e),i.selected){if(i.selected===e&&!i.draggable.enabled){pe(i),i.hold.cancel();return}else if((i.selectable.enabled||t)&&i.selected!==e&&qo(i,i.selected,e)){i.stats.dragged=!1;return}}(i.selectable.enabled||i.draggable.enabled)&&(Zo(i,e)||ga(i,e))&&(Yo(i,e),i.hold.start())}function Yo(i,e){i.selected=e,ga(i,e)?i.premovable.dests=Wo(i.pieces,e,i.premovable.castle):i.premovable.dests=void 0}function pe(i){i.selected=void 0,i.premovable.dests=void 0,i.hold.cancel()}function Zo(i,e){const t=i.pieces.get(e);return!!t&&(i.movable.color==="both"||i.movable.color===t.color&&i.turnColor===t.color)}const Na=(i,e,t)=>{var n,a;return e!==t&&Zo(i,e)&&(i.movable.free||!!(!((a=(n=i.movable.dests)===null||n===void 0?void 0:n.get(e))===null||a===void 0)&&a.includes(t)))};function yd(i,e,t){const n=i.pieces.get(e);return!!n&&(e===t||!i.pieces.has(t))&&(i.movable.color==="both"||i.movable.color===n.color&&i.turnColor===n.color)}function ga(i,e){const t=i.pieces.get(e);return!!t&&i.premovable.enabled&&i.movable.color===t.color&&i.turnColor!==t.color}const Ad=(i,e,t)=>e!==t&&ga(i,e)&&Wo(i.pieces,e,i.premovable.castle).includes(t);function Sd(i,e,t){const n=i.pieces.get(e),a=i.pieces.get(t);return!!n&&(!a||a.color!==i.movable.color)&&i.predroppable.enabled&&(n.role!=="pawn"||t[1]!=="1"&&t[1]!=="8")&&i.movable.color===n.color&&i.turnColor!==n.color}function kd(i,e){const t=i.pieces.get(e);return!!t&&i.draggable.enabled&&(i.movable.color==="both"||i.movable.color===t.color&&(i.turnColor===t.color||i.premovable.enabled))}function vd(i){const e=i.premovable.current;if(!e)return!1;const t=e[0],n=e[1];let a=!1;if(Na(i,t,n)){const s=$o(i,t,n);if(s){const o={premove:!0};s!==!0&&(o.captured=s),fe(i.movable.events.after,t,n,o),a=!0}}return tt(i),a}function Gd(i,e){const t=i.predroppable.current;let n=!1;if(!t)return!1;if(e(t)){const a={role:t.role,color:i.movable.color};ha(i,a,t.key)&&(fe(i.movable.events.afterNewPiece,t.role,t.key,{premove:!1,predrop:!0}),n=!0)}return it(i),n}function ua(i){tt(i),it(i),pe(i)}function Fa(i){i.movable.color=i.movable.dests=i.animation.current=void 0,ua(i)}function xt(i,e,t){let n=Math.floor(8*(i[0]-t.left)/t.width);e||(n=7-n);let a=7-Math.floor(8*(i[1]-t.top)/t.height);return e||(a=7-a),n>=0&&n<8&&a>=0&&a<8?xe([n,a]):void 0}function _d(i,e,t,n){const a=Y(i),s=Ro.filter(r=>Ho(a[0],a[1],r[0],r[1])||Io(a[0],a[1],r[0],r[1])),o=s.map(r=>zo(xe(r),t,n)).map(r=>oi(e,r)),[,c]=o.reduce((r,d,f)=>r[0]<d?r:[d,f],[o[0],0]);return xe(s[c])}const le=i=>i.orientation==="white",Xo="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",wd={p:"pawn",r:"rook",n:"knight",b:"bishop",q:"queen",k:"king"},Md={pawn:"p",rook:"r",knight:"n",bishop:"b",queen:"q",king:"k"};function Jo(i){i==="start"&&(i=Xo);const e=new Map;let t=7,n=0;for(const a of i)switch(a){case" ":case"[":return e;case"/":if(--t,t<0)return e;n=0;break;case"~":{const s=e.get(xe([n-1,t]));s&&(s.promoted=!0);break}default:{const s=a.charCodeAt(0);if(s<57)n+=s-48;else{const o=a.toLowerCase();e.set(xe([n,t]),{role:wd[o],color:a===o?"black":"white"}),++n}}}return e}function Pd(i){return Nd.map(e=>ca.map(t=>{const n=i.get(t+e);if(n){let a=Md[n.role];return n.color==="white"&&(a=a.toUpperCase()),n.promoted&&(a+="~"),a}else return"1"}).join("")).join("/").replace(/1{2,}/g,e=>e.length.toString())}function ec(i,e){e.animation&&(ba(i.animation,e.animation),(i.animation.duration||0)<70&&(i.animation.enabled=!1))}function tc(i,e){var t,n,a;if(!((t=e.movable)===null||t===void 0)&&t.dests&&(i.movable.dests=void 0),!((n=e.drawable)===null||n===void 0)&&n.autoShapes&&(i.drawable.autoShapes=[]),ba(i,e),e.fen&&(i.pieces=Jo(e.fen),i.drawable.shapes=((a=e.drawable)===null||a===void 0?void 0:a.shapes)||[]),"check"in e&&Dd(i,e.check||!1),"lastMove"in e&&!e.lastMove?i.lastMove=void 0:e.lastMove&&(i.lastMove=e.lastMove),i.selected&&Yo(i,i.selected),ec(i,e),!i.movable.rookCastle&&i.movable.dests){const s=i.movable.color==="white"?"1":"8",o="e"+s,c=i.movable.dests.get(o),r=i.pieces.get(o);if(!c||!r||r.role!=="king")return;i.movable.dests.set(o,c.filter(d=>!(d==="a"+s&&c.includes("c"+s))&&!(d==="h"+s&&c.includes("g"+s))))}}function ba(i,e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(Object.prototype.hasOwnProperty.call(i,t)&&Ta(i[t])&&Ta(e[t])?ba(i[t],e[t]):i[t]=e[t])}function Ta(i){if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return e===Object.prototype||e===null}const rt=(i,e)=>e.animation.enabled?Rd(i,e):Te(i,e);function Te(i,e){const t=i(e);return e.dom.redraw(),t}const Dn=(i,e)=>({key:i,pos:Y(i),piece:e}),Qd=(i,e)=>e.sort((t,n)=>oi(i.pos,t.pos)-oi(i.pos,n.pos))[0];function Ed(i,e){const t=new Map,n=[],a=new Map,s=[],o=[],c=new Map;let r,d,f;for(const[l,h]of i)c.set(l,Dn(l,h));for(const l of da)r=e.pieces.get(l),d=c.get(l),r?d?Kn(r,d.piece)||(s.push(d),o.push(Dn(l,r))):o.push(Dn(l,r)):d&&s.push(d);for(const l of o)d=Qd(l,s.filter(h=>Kn(l.piece,h.piece))),d&&(f=[d.pos[0]-l.pos[0],d.pos[1]-l.pos[1]],t.set(l.key,f.concat(f)),n.push(d.key));for(const l of s)n.includes(l.key)||a.set(l.key,l.piece);return{anims:t,fadings:a}}function ic(i,e){const t=i.animation.current;if(t===void 0){i.dom.destroyed||i.dom.redrawNow();return}const n=1-(e-t.start)*t.frequency;if(n<=0)i.animation.current=void 0,i.dom.redrawNow();else{const a=Ld(n);for(const s of t.plan.anims.values())s[2]=s[0]*a,s[3]=s[1]*a;i.dom.redrawNow(!0),requestAnimationFrame((s=performance.now())=>ic(i,s))}}function Rd(i,e){const t=new Map(e.pieces),n=i(e),a=Ed(t,e);if(a.anims.size||a.fadings.size){const s=e.animation.current&&e.animation.current.start;e.animation.current={start:performance.now(),frequency:1/e.animation.duration,plan:a},s||ic(e,performance.now())}else e.dom.redraw();return n}const Ld=i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,Kd=["green","red","blue","yellow"];function zd(i,e){if(e.touches&&e.touches.length>1)return;e.stopPropagation(),e.preventDefault(),e.ctrlKey?pe(i):ua(i);const t=Bt(e),n=xt(t,le(i),i.dom.bounds());n&&(i.drawable.current={orig:n,pos:t,brush:Hd(e),snapToValidMove:i.drawable.defaultSnapToValidMove},nc(i))}function nc(i){requestAnimationFrame(()=>{const e=i.drawable.current;if(e){const t=xt(e.pos,le(i),i.dom.bounds());t||(e.snapToValidMove=!1);const n=e.snapToValidMove?_d(e.orig,e.pos,le(i),i.dom.bounds()):t;n!==e.mouseSq&&(e.mouseSq=n,e.dest=n!==e.orig?n:void 0,i.dom.redrawNow()),nc(i)}})}function Id(i,e){i.drawable.current&&(i.drawable.current.pos=Bt(e))}function Fd(i){const e=i.drawable.current;e&&(e.mouseSq&&Wd(i.drawable,e),ac(i))}function ac(i){i.drawable.current&&(i.drawable.current=void 0,i.dom.redraw())}function Td(i){i.drawable.shapes.length&&(i.drawable.shapes=[],i.dom.redraw(),sc(i.drawable))}function Hd(i){var e;const t=(i.shiftKey||i.ctrlKey)&&Ko(i),n=i.altKey||i.metaKey||((e=i.getModifierState)===null||e===void 0?void 0:e.call(i,"AltGraph"));return Kd[(t?1:0)+(n?2:0)]}function Wd(i,e){const t=a=>a.orig===e.orig&&a.dest===e.dest,n=i.shapes.find(t);n&&(i.shapes=i.shapes.filter(a=>!t(a))),(!n||n.brush!==e.brush)&&i.shapes.push({orig:e.orig,dest:e.dest,brush:e.brush}),sc(i)}function sc(i){i.onChange&&i.onChange(i.shapes)}function jd(i,e){if(!e.isTrusted||e.button!==void 0&&e.button!==0||e.touches&&e.touches.length>1)return;const t=i.dom.bounds(),n=Bt(e),a=xt(n,le(i),t);if(!a)return;const s=i.pieces.get(a),o=i.selected;!o&&i.drawable.enabled&&(i.drawable.eraseOnClick||!s||s.color!==i.turnColor)&&Td(i),e.cancelable!==!1&&(!e.touches||i.blockTouchScroll||s||o||$d(i,n))&&e.preventDefault();const c=!!i.premovable.current,r=!!i.predroppable.current;i.stats.ctrlKey=e.ctrlKey,i.selected&&Na(i,i.selected,a)?rt(l=>zn(l,a),i):zn(i,a);const d=i.selected===a,f=cc(i,a);if(s&&f&&d&&kd(i,a)){i.draggable.current={orig:a,piece:s,origPos:n,pos:n,started:i.draggable.autoDistance&&i.stats.dragged,element:f,previouslySelected:o,originTarget:e.target,keyHasChanged:!1},f.cgDragging=!0,f.classList.add("dragging");const l=i.dom.elements.ghost;l&&(l.className=`ghost ${s.color} ${s.role}`,ke(l,mi(t)(Y(a),le(i))),la(l,!0)),ma(i)}else c&&tt(i),r&&it(i);i.dom.redraw()}function $d(i,e){const t=le(i),n=i.dom.bounds(),a=Math.pow(n.width/8,2);for(const s of i.pieces.keys()){const o=zo(s,t,n);if(oi(o,e)<=a)return!0}return!1}function qd(i,e,t,n){const a="a0";i.pieces.set(a,e),i.dom.redraw();const s=Bt(t);i.draggable.current={orig:a,piece:e,origPos:s,pos:s,started:!0,element:()=>cc(i,a),originTarget:t.target,newPiece:!0,force:!!n,keyHasChanged:!1},ma(i)}function ma(i){requestAnimationFrame(()=>{var e;const t=i.draggable.current;if(!t)return;!((e=i.animation.current)===null||e===void 0)&&e.plan.anims.has(t.orig)&&(i.animation.current=void 0);const n=i.pieces.get(t.orig);if(!n||!Kn(n,t.piece))Zi(i);else if(!t.started&&oi(t.pos,t.origPos)>=Math.pow(i.draggable.distance,2)&&(t.started=!0),t.started){if(typeof t.element=="function"){const s=t.element();if(!s)return;s.cgDragging=!0,s.classList.add("dragging"),t.element=s}const a=i.dom.bounds();ke(t.element,[t.pos[0]-a.left-a.width/16,t.pos[1]-a.top-a.height/16]),t.keyHasChanged||(t.keyHasChanged=t.orig!==xt(t.pos,le(i),a))}ma(i)})}function Ud(i,e){i.draggable.current&&(!e.touches||e.touches.length<2)&&(i.draggable.current.pos=Bt(e))}function Yd(i,e){const t=i.draggable.current;if(!t)return;if(e.type==="touchend"&&e.cancelable!==!1&&e.preventDefault(),e.type==="touchend"&&t.originTarget!==e.target&&!t.newPiece){i.draggable.current=void 0;return}tt(i),it(i);const n=Bt(e)||t.pos,a=xt(n,le(i),i.dom.bounds());a&&t.started&&t.orig!==a?t.newPiece?Uo(i,t.orig,a,t.force):(i.stats.ctrlKey=e.ctrlKey,qo(i,t.orig,a)&&(i.stats.dragged=!0)):t.newPiece?i.pieces.delete(t.orig):i.draggable.deleteOnDropOff&&!a&&(i.pieces.delete(t.orig),fe(i.events.change)),(t.orig===t.previouslySelected||t.keyHasChanged)&&(t.orig===a||!a)?pe(i):i.selectable.enabled||pe(i),oc(i),i.draggable.current=void 0,i.dom.redraw()}function Zi(i){const e=i.draggable.current;e&&(e.newPiece&&i.pieces.delete(e.orig),i.draggable.current=void 0,pe(i),oc(i),i.dom.redraw())}function oc(i){const e=i.dom.elements;e.ghost&&la(e.ghost,!1)}function cc(i,e){let t=i.dom.elements.board.firstChild;for(;t;){if(t.cgKey===e&&t.tagName==="PIECE")return t;t=t.nextSibling}}function Zd(i,e){i.exploding={stage:1,keys:e},i.dom.redraw(),setTimeout(()=>{Ha(i,2),setTimeout(()=>Ha(i,void 0),120)},120)}function Ha(i,e){i.exploding&&(e?i.exploding.stage=e:i.exploding=void 0,i.dom.redraw())}function Xd(i,e){function t(){xd(i),e()}return{set(n){n.orientation&&n.orientation!==i.orientation&&t(),ec(i,n),(n.fen?rt:Te)(a=>tc(a,n),i)},state:i,getFen:()=>Pd(i.pieces),toggleOrientation:t,setPieces(n){rt(a=>pd(a,n),i)},selectSquare(n,a){n?rt(s=>zn(s,n,a),i):i.selected&&(pe(i),i.dom.redraw())},move(n,a){rt(s=>jo(s,n,a),i)},newPiece(n,a){rt(s=>ha(s,n,a),i)},playPremove(){if(i.premovable.current){if(rt(vd,i))return!0;i.dom.redraw()}return!1},playPredrop(n){if(i.predroppable.current){const a=Gd(i,n);return i.dom.redraw(),a}return!1},cancelPremove(){Te(tt,i)},cancelPredrop(){Te(it,i)},cancelMove(){Te(n=>{ua(n),Zi(n)},i)},stop(){Te(n=>{Fa(n),Zi(n)},i)},explode(n){Zd(i,n)},setAutoShapes(n){Te(a=>a.drawable.autoShapes=n,i)},setShapes(n){Te(a=>a.drawable.shapes=n,i)},getKeyAtDomPos(n){return xt(n,le(i),i.dom.bounds())},redrawAll:e,dragNewPiece(n,a,s){qd(i,n,a,s)},destroy(){Fa(i),i.dom.unbind&&i.dom.unbind(),i.dom.destroyed=!0}}}function Jd(){return{pieces:Jo(Xo),orientation:"white",turnColor:"white",coordinates:!0,ranksPosition:"right",autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,pieceKey:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:200},movable:{free:!0,color:"both",showDests:!0,events:{},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{}},predroppable:{enabled:!1,events:{}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},dropmode:{active:!1},selectable:{enabled:!0},stats:{dragged:!("ontouchstart"in window)},events:{},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15}},prevSvgHash:""},hold:ud()}}function In(i,e,t){const n=new Map,a=[];for(const c of i)n.set(c.hash,!1);let s=e.firstChild,o;for(;s;)o=s.getAttribute("cgHash"),n.has(o)?n.set(o,!0):a.push(s),s=s.nextSibling;for(const c of a)e.removeChild(c);for(const c of i)n.get(c.hash)||e.appendChild(t(c))}function Oe(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ef(i,e,t){const n=i.drawable,a=n.current,s=a&&a.mouseSq?a:void 0,o=new Map,c=i.dom.bounds(),r=n.autoShapes.filter(N=>!N.piece);for(const N of n.shapes.concat(r).concat(s?[s]:[]))N.dest&&o.set(N.dest,(o.get(N.dest)||0)+1);const d=n.shapes.concat(r).map(N=>({shape:N,current:!1,hash:Wa(N,o,!1,c)}));s&&d.push({shape:s,current:!0,hash:Wa(s,o,!0,c)});const f=d.map(N=>N.hash).join(";");if(f===i.drawable.prevSvgHash)return;i.drawable.prevSvgHash=f;const l=e.querySelector("defs"),h=e.querySelector("g"),g=t.querySelector("g");tf(n,d,l),In(d.filter(N=>!N.shape.customSvg),h,N=>ja(i,N,n.brushes,o,c)),In(d.filter(N=>N.shape.customSvg),g,N=>ja(i,N,n.brushes,o,c))}function tf(i,e,t){const n=new Map;let a;for(const c of e)c.shape.dest&&(a=i.brushes[c.shape.brush],c.shape.modifiers&&(a=rc(a,c.shape.modifiers)),n.set(a.key,a));const s=new Set;let o=t.firstChild;for(;o;)s.add(o.getAttribute("cgKey")),o=o.nextSibling;for(const[c,r]of n.entries())s.has(c)||t.appendChild(df(r))}function Wa({orig:i,dest:e,brush:t,piece:n,modifiers:a,customSvg:s},o,c,r){return[r.width,r.height,c,i,e,t,e&&(o.get(e)||0)>1,n&&nf(n),a&&af(a),s&&sf(s)].filter(d=>d).join(",")}function nf(i){return[i.color,i.role,i.scale].filter(e=>e).join(",")}function af(i){return""+(i.lineWidth||"")}function sf(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t)>>>0;return"custom-"+e.toString()}function ja(i,{shape:e,current:t,hash:n},a,s,o){let c;const r=$a(Y(e.orig),i.orientation);if(e.customSvg)c=of(e.customSvg,r,o);else if(e.dest){let d=a[e.brush];e.modifiers&&(d=rc(d,e.modifiers)),c=rf(d,r,$a(Y(e.dest),i.orientation),t,(s.get(e.dest)||0)>1,o)}else c=cf(a[e.brush],r,t,o);return c.setAttribute("cgHash",n),c}function of(i,e,t){const[n,a]=Xi(e,t),s=Ze(Oe("g"),{transform:`translate(${n},${a})`}),o=Ze(Oe("svg"),{width:1,height:1,viewBox:"0 0 100 100"});return s.appendChild(o),o.innerHTML=i,s}function cf(i,e,t,n){const a=Xi(e,n),s=ff(),o=(n.width+n.height)/(4*Math.max(n.width,n.height));return Ze(Oe("circle"),{stroke:i.color,"stroke-width":s[t?0:1],fill:"none",opacity:dc(i,t),cx:a[0],cy:a[1],r:o-s[1]/2})}function rf(i,e,t,n,a,s){const o=hf(a&&!n),c=Xi(e,s),r=Xi(t,s),d=r[0]-c[0],f=r[1]-c[1],l=Math.atan2(f,d),h=Math.cos(l)*o,g=Math.sin(l)*o;return Ze(Oe("line"),{stroke:i.color,"stroke-width":lf(i,n),"stroke-linecap":"round","marker-end":"url(#arrowhead-"+i.key+")",opacity:dc(i,n),x1:c[0],y1:c[1],x2:r[0]-h,y2:r[1]-g})}function df(i){const e=Ze(Oe("marker"),{id:"arrowhead-"+i.key,orient:"auto",markerWidth:4,markerHeight:8,refX:2.05,refY:2.01});return e.appendChild(Ze(Oe("path"),{d:"M0,0 V4 L3,2 Z",fill:i.color})),e.setAttribute("cgKey",i.key),e}function Ze(i,e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.setAttribute(t,e[t]);return i}function $a(i,e){return e==="white"?i:[7-i[0],7-i[1]]}function rc(i,e){return{color:i.color,opacity:Math.round(i.opacity*10)/10,lineWidth:Math.round(e.lineWidth||i.lineWidth),key:[i.key,e.lineWidth].filter(t=>t).join("")}}function ff(){return[3/64,4/64]}function lf(i,e){return(i.lineWidth||10)*(e?.85:1)/64}function dc(i,e){return(i.opacity||1)*(e?.9:1)}function hf(i){return(i?20:10)/64}function Xi(i,e){const t=Math.min(1,e.width/e.height),n=Math.min(1,e.height/e.width);return[(i[0]-3.5)*t,(3.5-i[1])*n]}function Nf(i,e){i.innerHTML="",i.classList.add("cg-wrap");for(const r of hd)i.classList.toggle("orientation-"+r,e.orientation===r);i.classList.toggle("manipulable",!e.viewOnly);const t=Ee("cg-container");i.appendChild(t);const n=Ee("cg-board");t.appendChild(n);let a,s,o;if(e.drawable.visible&&(a=Ze(Oe("svg"),{class:"cg-shapes",viewBox:"-4 -4 8 8",preserveAspectRatio:"xMidYMid slice"}),a.appendChild(Oe("defs")),a.appendChild(Oe("g")),s=Ze(Oe("svg"),{class:"cg-custom-svgs",viewBox:"-3.5 -3.5 8 8",preserveAspectRatio:"xMidYMid slice"}),s.appendChild(Oe("g")),o=Ee("cg-auto-pieces"),t.appendChild(a),t.appendChild(s),t.appendChild(o)),e.coordinates){const r=e.orientation==="black"?" black":"",d=e.ranksPosition==="left"?" left":"";t.appendChild(qa(ra,"ranks"+r+d)),t.appendChild(qa(ca,"files"+r))}let c;return e.draggable.enabled&&e.draggable.showGhost&&(c=Ee("piece","ghost"),la(c,!1),t.appendChild(c)),{board:n,container:t,wrap:i,ghost:c,svg:a,customSvg:s,autoPieces:o}}function qa(i,e){const t=Ee("coords",e);let n;for(const a of i)n=Ee("coord"),n.textContent=a,t.appendChild(n);return t}function gf(i,e){if(!i.dropmode.active)return;tt(i),it(i);const t=i.dropmode.piece;if(t){i.pieces.set("a0",t);const n=Bt(e),a=n&&xt(n,le(i),i.dom.bounds());a&&Uo(i,"a0",a)}i.dom.redraw()}function uf(i,e){const t=i.dom.elements.board;if("ResizeObserver"in window&&new ResizeObserver(e).observe(i.dom.elements.wrap),(i.disableContextMenu||i.drawable.enabled)&&t.addEventListener("contextmenu",a=>a.preventDefault()),i.viewOnly)return;const n=mf(i);t.addEventListener("touchstart",n,{passive:!1}),t.addEventListener("mousedown",n,{passive:!1})}function bf(i,e){const t=[];if("ResizeObserver"in window||t.push(Et(document.body,"chessground.resize",e)),!i.viewOnly){const n=Ua(i,Ud,Id),a=Ua(i,Yd,Fd);for(const o of["touchmove","mousemove"])t.push(Et(document,o,n));for(const o of["touchend","mouseup"])t.push(Et(document,o,a));const s=()=>i.dom.bounds.clear();t.push(Et(document,"scroll",s,{capture:!0,passive:!0})),t.push(Et(window,"resize",s,{passive:!0}))}return()=>t.forEach(n=>n())}function Et(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}const mf=i=>e=>{i.draggable.current?Zi(i):i.drawable.current?ac(i):e.shiftKey||Ko(e)?i.drawable.enabled&&zd(i,e):i.viewOnly||(i.dropmode.active?gf(i,e):jd(i,e))},Ua=(i,e,t)=>n=>{i.drawable.current?i.drawable.enabled&&t(i,n):i.viewOnly||e(i,n)};function Bf(i){const e=le(i),t=mi(i.dom.bounds()),n=i.dom.elements.board,a=i.pieces,s=i.animation.current,o=s?s.plan.anims:new Map,c=s?s.plan.fadings:new Map,r=i.draggable.current,d=pf(i),f=new Set,l=new Set,h=new Map,g=new Map;let N,u,b,B,m,D,O,x,A,y;for(u=n.firstChild;u;){if(N=u.cgKey,fc(u))if(b=a.get(N),m=o.get(N),D=c.get(N),B=u.cgPiece,u.cgDragging&&(!r||r.orig!==N)&&(u.classList.remove("dragging"),ke(u,t(Y(N),e)),u.cgDragging=!1),!D&&u.cgFading&&(u.cgFading=!1,u.classList.remove("fading")),b){if(m&&u.cgAnimating&&B===Rt(b)){const V=Y(N);V[0]+=m[2],V[1]+=m[3],u.classList.add("anim"),ke(u,t(V,e))}else u.cgAnimating&&(u.cgAnimating=!1,u.classList.remove("anim"),ke(u,t(Y(N),e)),i.addPieceZIndex&&(u.style.zIndex=On(Y(N),e)));B===Rt(b)&&(!D||!u.cgFading)?f.add(N):D&&B===Rt(D)?(u.classList.add("fading"),u.cgFading=!0):Vn(h,B,u)}else Vn(h,B,u);else if(lc(u)){const V=u.className;d.get(N)===V?l.add(N):Vn(g,V,u)}u=u.nextSibling}for(const[V,G]of d)if(!l.has(V)){A=g.get(G),y=A&&A.pop();const _=t(Y(V),e);if(y)y.cgKey=V,ke(y,_);else{const w=Ee("square",G);w.cgKey=V,ke(w,_),n.insertBefore(w,n.firstChild)}}for(const[V,G]of a)if(m=o.get(V),!f.has(V))if(O=h.get(Rt(G)),x=O&&O.pop(),x){x.cgKey=V,x.cgFading&&(x.classList.remove("fading"),x.cgFading=!1);const _=Y(V);i.addPieceZIndex&&(x.style.zIndex=On(_,e)),m&&(x.cgAnimating=!0,x.classList.add("anim"),_[0]+=m[2],_[1]+=m[3]),ke(x,t(_,e))}else{const _=Rt(G),w=Ee("piece",_),E=Y(V);w.cgPiece=_,w.cgKey=V,m&&(w.cgAnimating=!0,E[0]+=m[2],E[1]+=m[3]),ke(w,t(E,e)),i.addPieceZIndex&&(w.style.zIndex=On(E,e)),n.appendChild(w)}for(const V of h.values())Za(i,V);for(const V of g.values())Za(i,V)}function xf(i){const e=le(i),t=mi(i.dom.bounds());let n=i.dom.elements.board.firstChild;for(;n;)(fc(n)&&!n.cgAnimating||lc(n))&&ke(n,t(Y(n.cgKey),e)),n=n.nextSibling}function Ya(i){var e,t;const n=i.dom.elements.wrap.getBoundingClientRect(),a=i.dom.elements.container,s=n.height/n.width,o=Math.floor(n.width*window.devicePixelRatio/8)*8/window.devicePixelRatio,c=o*s;a.style.width=o+"px",a.style.height=c+"px",i.dom.bounds.clear(),(e=i.addDimensionsCssVarsTo)===null||e===void 0||e.style.setProperty("--cg-width",o+"px"),(t=i.addDimensionsCssVarsTo)===null||t===void 0||t.style.setProperty("--cg-height",c+"px")}const fc=i=>i.tagName==="PIECE",lc=i=>i.tagName==="SQUARE";function Za(i,e){for(const t of e)i.dom.elements.board.removeChild(t)}function On(i,e){const t=i[1];return`${e?3+7-t:3+t}`}const Rt=i=>`${i.color} ${i.role}`;function pf(i){var e;const t=new Map;if(i.lastMove&&i.highlight.lastMove)for(const s of i.lastMove)Fe(t,s,"last-move");if(i.check&&i.highlight.check&&Fe(t,i.check,"check"),i.selected&&(Fe(t,i.selected,"selected"),i.movable.showDests)){const s=(e=i.movable.dests)===null||e===void 0?void 0:e.get(i.selected);if(s)for(const c of s)Fe(t,c,"move-dest"+(i.pieces.has(c)?" oc":""));const o=i.premovable.dests;if(o)for(const c of o)Fe(t,c,"premove-dest"+(i.pieces.has(c)?" oc":""))}const n=i.premovable.current;if(n)for(const s of n)Fe(t,s,"current-premove");else i.predroppable.current&&Fe(t,i.predroppable.current.key,"current-premove");const a=i.exploding;if(a)for(const s of a.keys)Fe(t,s,"exploding"+a.stage);return t}function Fe(i,e,t){const n=i.get(e);n?i.set(e,`${n} ${t}`):i.set(e,t)}function Vn(i,e,t){const n=i.get(e);n?n.push(t):i.set(e,[t])}function Df(i,e){const t=i.drawable.autoShapes.filter(n=>n.piece).map(n=>({shape:n,hash:Cf(n),current:!1}));In(t,e,n=>Vf(i,n,i.dom.bounds()))}function Of(i){var e;const t=le(i),n=mi(i.dom.bounds());let a=(e=i.dom.elements.autoPieces)===null||e===void 0?void 0:e.firstChild;for(;a;)Lo(a,n(Y(a.cgKey),t),a.cgScale),a=a.nextSibling}function Vf(i,{shape:e,hash:t},n){var a,s,o;const c=e.orig,r=(a=e.piece)===null||a===void 0?void 0:a.role,d=(s=e.piece)===null||s===void 0?void 0:s.color,f=(o=e.piece)===null||o===void 0?void 0:o.scale,l=Ee("piece",`${r} ${d}`);return l.setAttribute("cgHash",t),l.cgKey=c,l.cgScale=f,Lo(l,mi(n)(Y(c),le(i)),f),l}const Cf=i=>{var e,t,n;return[i.orig,(e=i.piece)===null||e===void 0?void 0:e.role,(t=i.piece)===null||t===void 0?void 0:t.color,(n=i.piece)===null||n===void 0?void 0:n.scale].join(",")};function yf(i,e){const t=Jd();tc(t,e||{});function n(){const a="dom"in t?t.dom.unbind:void 0,s=Nf(i,t),o=gd(()=>s.board.getBoundingClientRect()),c=f=>{Bf(d),s.autoPieces&&Df(d,s.autoPieces),!f&&s.svg&&ef(d,s.svg,s.customSvg)},r=()=>{Ya(d),xf(d),s.autoPieces&&Of(d)},d=t;return d.dom={elements:s,bounds:o,redraw:Af(c),redrawNow:c,unbind:a},d.drawable.prevSvgHash="",Ya(d),c(!1),uf(d,r),a||(d.dom.unbind=bf(d,r)),d.events.insert&&d.events.insert(s),d}return Xd(n(),n)}function Af(i){let e=!1;return()=>{e||(e=!0,requestAnimationFrame(()=>{i(),e=!1}))}}class Sf{constructor(e,t,n,a){C(this,"game");C(this,"board");C(this,"boardState");C(this,"props");C(this,"emit");this.boardState=t,this.props=n,this.emit=a,this.game=new od,this.board=yf(e),this.resetBoard()}updateGameState({updateFen:e=!0}={}){this.boardState.historyViewerState.isEnabled||(e&&this.board.set({fen:this.game.fen()}),this.board.state.turnColor=this.getTurnColor(),this.board.state.movable.color=this.props.playerColor||this.board.state.turnColor,this.board.state.movable.dests=Ia(this.game),this.displayInCheck(this.game.inCheck(),this.board.state.turnColor),this.boardState.showThreats&&this.drawMoves()),this.emitEvents()}displayInCheck(e,t){if(e){for(const[n,a]of this.board.state.pieces)if(a.role==="king"&&a.color===t){this.board.state.check=n;return}}else this.board.state.check=void 0}emitEvents(){this.game.inCheck()&&this.emit(this.game.isCheckmate()?"checkmate":"check",this.board.state.turnColor),this.game.isDraw()&&this.emit("draw"),this.game.isStalemate()&&this.emit("stalemate")}async changeTurn(e,t,n){let a;rd(t,this.game.get(e))&&(a=await new Promise(s=>{this.boardState.promotionDialogState={isEnabled:!0,color:this.getTurnColor(),callback:s}})),this.move({from:e,to:t,promotion:a})}resetBoard(){this.setConfig(this.props.boardConfig,!0)}undoLastMove(){const e=this.game.undo();if(e!=null&&(this.boardState.historyViewerState.isEnabled&&this.boardState.historyViewerState.plyViewing===this.getCurrentPlyNumber()&&this.stopViewingHistory(),!this.boardState.historyViewerState.isEnabled)){this.board.set({fen:e.before}),this.updateGameState({updateFen:!1});const t=this.getLastMove();this.board.state.lastMove=t?[t==null?void 0:t.from,t==null?void 0:t.to]:void 0}}getMaterialCount(){const e=this.board.state.pieces,t={pawn:1,knight:3,bishop:3,rook:5,queen:9,king:0},n={materialWhite:0,materialBlack:0,materialDiff:0};for(const a of e)a[1].color==="white"?n.materialWhite+=t[a[1].role]:n.materialBlack+=t[a[1].role];return n.materialDiff=n.materialWhite-n.materialBlack,n}toggleOrientation(){this.board.toggleOrientation()}drawMoves(){this.boardState.showThreats=!0,this.board.setShapes(cd(this.game.moves({verbose:!0})))}hideMoves(){this.boardState.showThreats=!1,this.board.setShapes([])}drawMove(e,t,n){this.board.setShapes([{orig:e,dest:t,brush:n}])}toggleMoves(){this.boardState.showThreats?this.hideMoves():this.drawMoves()}async getOpeningName(){var e;try{const t=this.game.history({verbose:!0}).map(n=>n.lan).join(",");return((e=(await(await fetch(`https://explorer.lichess.ovh/masters?play=${t}`)).json()).opening)==null?void 0:e.name)??null}catch{return null}}move(e){let t;try{t=this.game.move(e)}catch{return!1}return this.emit("move",t),t!=null&&t.promotion&&this.emit("promotion",{color:pn(t.color),promotedTo:t.promotion.toUpperCase(),sanMove:t.san}),this.boardState.historyViewerState.isEnabled||(this.board.move(t.from,t.to),(t.flags==="e"||t!=null&&t.promotion)&&setTimeout(()=>this.board.set({fen:t.after}),this.board.state.animation.current?this.board.state.animation.duration:0),this.updateGameState({updateFen:!1}),ur(this.board.playPremove)),!0}getTurnColor(){return pn(this.game.turn())}getPossibleMoves(){return Ia(this.game)}getCurrentTurnNumber(){return this.game.moveNumber()}getCurrentPlyNumber(){return 2*this.getCurrentTurnNumber()-(this.getTurnColor()==="black"?1:2)}getLastMove(){return this.game.history({verbose:!0}).at(-1)}getHistory(e=!1){return this.game.history({verbose:e})}getFen(){return this.game.fen()}getBoardPosition(){return this.game.board()}getPgn(){return this.game.pgn()}getIsGameOver(){return this.game.isGameOver()}getIsCheckmate(){return this.game.isCheckmate()}getIsCheck(){return this.game.isCheck()}getIsStalemate(){return this.game.isStalemate()}getIsDraw(){return this.game.isDraw()}getIsThreefoldRepetition(){return this.game.isThreefoldRepetition()}getIsInsufficientMaterial(){return this.game.isInsufficientMaterial()}getSquareColor(e){return this.game.squareColor(e)}getSquare(e){return this.game.get(e)}setPosition(e){this.game.load(e),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState()}putPiece(e,t){const n=this.game.put(e,t);return n&&this.updateGameState(),n}clearBoard(){this.game.clear(),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState()}setShapes(e){this.board.setShapes(e)}loadPgn(e){this.game.loadPgn(e),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState();const t=this.getLastMove();t&&this.board.set({lastMove:[t.from,t.to]})}getPgnInfo(){return this.game.header()}setConfig(e,t=!1){var s;if(t&&(e=Qo(ld,e)),((s=e.movable)==null?void 0:s.events)&&"after"in e.movable.events){const o=e.movable.events.after;e.movable.events.after=o?async(...c)=>{await this.changeTurn(...c),o(...c)}:this.changeTurn.bind(this)}const{fen:n,...a}=e;this.board.set(a),n&&this.setPosition(n),this.board.redrawAll()}viewHistory(e){const t=this.getHistory(!0);if(e<0||e>t.length)return;const n=this.board.state.animation.enabled&&(this.boardState.historyViewerState.isEnabled&&Math.abs(this.boardState.historyViewerState.plyViewing-e)!==1||!this.boardState.historyViewerState.isEnabled&&e!==t.length-1);if(n&&this.board.set({animation:{enabled:!1}}),e<t.length)this.boardState.historyViewerState.isEnabled?this.boardState.historyViewerState.plyViewing=e:this.boardState.historyViewerState={isEnabled:!0,plyViewing:e,viewOnly:this.board.state.viewOnly},this.board.set({fen:t[e].before,viewOnly:!0,lastMove:e>0?[t[e-1].from,t[e-1].to]:void 0,selected:void 0}),this.displayInCheck(e>0?"+#".includes(t[e-1].san.at(-1)):!1,pn(t[e].color)),this.board.cancelPremove();else if(this.boardState.historyViewerState.isEnabled){const a=t.at(-1);this.board.set({fen:a.after,viewOnly:this.boardState.historyViewerState.viewOnly,lastMove:[a.from,a.to]}),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState({updateFen:!1})}n&&this.board.set({animation:{enabled:!0}})}stopViewingHistory(){this.boardState.historyViewerState.isEnabled&&this.viewHistory(this.getCurrentPlyNumber())}viewStart(){this.viewHistory(0)}viewNext(){this.boardState.historyViewerState.isEnabled&&this.viewHistory(this.boardState.historyViewerState.plyViewing+1)}viewPrevious(){const e=this.boardState.historyViewerState.isEnabled?this.boardState.historyViewerState.plyViewing:this.getCurrentPlyNumber();this.viewHistory(e-1)}}const kf={class:"main-board"},vf={class:"dialog-container"},Gf=Oo({__name:"TheChessboard",props:{boardConfig:{default:()=>({})},playerColor:{},reactiveConfig:{type:Boolean,default:!1}},emits:["boardCreated","check","checkmate","stalemate","draw","promotion","move"],setup(i,{emit:e}){const t=i,n=ui(null),a=Pa({showThreats:!1,promotionDialogState:{isEnabled:!1},historyViewerState:{isEnabled:!1}});return Nr(()=>{if(n.value==null)throw new Error("vue3-chessboard: Failed to mount board.");const s=new Sf(n.value,a,t,e);if(e("boardCreated",s),t.reactiveConfig){let o=Yi(t.boardConfig);$i(Pa(t.boardConfig),c=>{s.setConfig(Eo(o,c)),o=Yi(c)})}}),(s,o)=>(S(),k("section",{class:At(["main-wrap",{disabledBoard:a.promotionDialogState.isEnabled,viewingHistory:a.historyViewerState.isEnabled}])},[p("div",kf,[p("div",vf,[a.promotionDialogState.isEnabled?(S(),Vo(Wr,{key:0,state:a.promotionDialogState,onPromotionSelected:o[0]||(o[0]=c=>a.promotionDialogState={isEnabled:!1})},null,8,["state"])):aa("",!0)]),p("div",{ref_key:"boardElement",ref:n},null,512)])],2))}});const _f={class:"w-full grid items-center h-full"},wf={__name:"Chessboard",props:["fen","orientation"],setup(i){const e=i,t={orientation:e.orientation};let n;return $i(()=>e.fen,()=>{n.setPosition(e.fen)}),$i(()=>e.orientation,()=>{n.toggleOrientation()}),(a,s)=>(S(),k("div",_f,[ae(He(Gf),{onMove:s[0]||(s[0]=o=>{a.$emit("move",o)}),onBoardCreated:s[1]||(s[1]=o=>Co(n)?n.value=o:n=o),"board-config":t})]))}},Mf=["onKeyup"],Pf={__name:"UCISender",setup(i){const e=ui("");function t(){wo(e.value)}return(n,a)=>(S(),k(bi,null,[yo(p("input",{type:"text",placeholder:"UCI command",class:"input w-full h-9 bg-slate-800 font-mono","onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),onKeyup:br(t,["enter"])},null,40,Mf),[[Ao,e.value]]),p("button",{onClick:t,class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," Send message ")],64))}},Qf={class:"rounded-lg bg-slate-800 flex-content"},Ef={class:"scrollable-content-wrapper rounded-lg",id:"stockfishPanelSlider"},Rf=p("div",{class:"divider divider-horizontal"},null,-1),Lf={class:"font-mono",style:{"overflow-wrap":"anywhere"}},Kf={__name:"StockfishMessages",setup(i){return $i(ni,()=>{let e=document.getElementById("stockfishPanelSlider");e.scrollTop=e.scrollHeight},{deep:!0,flush:"post"}),(e,t)=>(S(),k("div",Qf,[p("div",Ef,[(S(!0),k(bi,null,rn(He(ni),(n,a)=>(S(),k("div",{class:At(["flex space-x-3 items-center p-2",{"bg-slate-700":!n.stockfish}])},[p("div",null,v(a),1),Rf,p("div",Lf,v(n.msg),1)],2))),256))])]))}},zf={class:"h-full w-full bg-base-300 rounded-lg p-5 flex justify-center items-center space-y-4 flex-col"},If={class:"flex space-x-2 h-fit w-full"},Ff={class:"w-full flex space-x-4"},Tf={class:"min-w-fit"},Hf={class:"w-full"},Wf={class:"w-full flex space-x-4 items-center"},jf={class:"w-full h-full"},$f={__name:"StockfishPanel",setup(i){return(e,t)=>(S(),k("div",zf,[p("div",If,[p("div",{class:At(["w-full h-fit text-white py-1 px-4 rounded-full text-center",[He(Ui)?"bg-green-300":"bg-yellow-300"]])}," Stockfish "+v(He(Ui)?"running":"paused"),3),p("button",{onClick:t[0]||(t[0]=(...n)=>He(Rn)&&He(Rn)(...n)),class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," ↻ Restart ")]),p("div",Ff,[p("p",Tf,"Movetime: "+v(He(Tt)),1),p("div",Hf,[yo(p("input",{type:"range",min:"500",max:"10000","onUpdate:modelValue":t[1]||(t[1]=n=>Co(Tt)?Tt.value=n:null),class:"range range-secondary range-xs w-full"},null,512),[[Ao,He(Tt)]])])]),p("div",Wf,[ae(Pf)]),p("div",jf,[ae(Kf)])]))}};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Bi(i){return i+.5|0}const je=(i,e,t)=>Math.max(Math.min(i,t),e);function Wt(i){return je(Bi(i*2.55),0,255)}function Ye(i){return je(Bi(i*255),0,255)}function Pe(i){return je(Bi(i/2.55)/100,0,1)}function Xa(i){return je(Bi(i*100),0,100)}const me={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Fn=[..."0123456789ABCDEF"],qf=i=>Fn[i&15],Uf=i=>Fn[(i&240)>>4]+Fn[i&15],Ci=i=>(i&240)>>4===(i&15),Yf=i=>Ci(i.r)&&Ci(i.g)&&Ci(i.b)&&Ci(i.a);function Zf(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&me[i[1]]*17,g:255&me[i[2]]*17,b:255&me[i[3]]*17,a:e===5?me[i[4]]*17:255}:(e===7||e===9)&&(t={r:me[i[1]]<<4|me[i[2]],g:me[i[3]]<<4|me[i[4]],b:me[i[5]]<<4|me[i[6]],a:e===9?me[i[7]]<<4|me[i[8]]:255})),t}const Xf=(i,e)=>i<255?e(i):"";function Jf(i){var e=Yf(i)?qf:Uf;return i?"#"+e(i.r)+e(i.g)+e(i.b)+Xf(i.a,e):void 0}const e4=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hc(i,e,t){const n=e*Math.min(t,1-t),a=(s,o=(s+i/30)%12)=>t-n*Math.max(Math.min(o-3,9-o,1),-1);return[a(0),a(8),a(4)]}function t4(i,e,t){const n=(a,s=(a+i/60)%6)=>t-t*e*Math.max(Math.min(s,4-s,1),0);return[n(5),n(3),n(1)]}function i4(i,e,t){const n=hc(i,1,.5);let a;for(e+t>1&&(a=1/(e+t),e*=a,t*=a),a=0;a<3;a++)n[a]*=1-e-t,n[a]+=e;return n}function n4(i,e,t,n,a){return i===a?(e-t)/n+(e<t?6:0):e===a?(t-i)/n+2:(i-e)/n+4}function Ba(i){const t=i.r/255,n=i.g/255,a=i.b/255,s=Math.max(t,n,a),o=Math.min(t,n,a),c=(s+o)/2;let r,d,f;return s!==o&&(f=s-o,d=c>.5?f/(2-s-o):f/(s+o),r=n4(t,n,a,f,s),r=r*60+.5),[r|0,d||0,c]}function xa(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(Ye)}function pa(i,e,t){return xa(hc,i,e,t)}function a4(i,e,t){return xa(i4,i,e,t)}function s4(i,e,t){return xa(t4,i,e,t)}function Nc(i){return(i%360+360)%360}function o4(i){const e=e4.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?Wt(+e[5]):Ye(+e[5]));const a=Nc(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?n=a4(a,s,o):e[1]==="hsv"?n=s4(a,s,o):n=pa(a,s,o),{r:n[0],g:n[1],b:n[2],a:t}}function c4(i,e){var t=Ba(i);t[0]=Nc(t[0]+e),t=pa(t),i.r=t[0],i.g=t[1],i.b=t[2]}function r4(i){if(!i)return;const e=Ba(i),t=e[0],n=Xa(e[1]),a=Xa(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${a}%, ${Pe(i.a)})`:`hsl(${t}, ${n}%, ${a}%)`}const Ja={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},es={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function d4(){const i={},e=Object.keys(es),t=Object.keys(Ja);let n,a,s,o,c;for(n=0;n<e.length;n++){for(o=c=e[n],a=0;a<t.length;a++)s=t[a],c=c.replace(s,Ja[s]);s=parseInt(es[o],16),i[c]=[s>>16&255,s>>8&255,s&255]}return i}let yi;function f4(i){yi||(yi=d4(),yi.transparent=[0,0,0,0]);const e=yi[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const l4=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function h4(i){const e=l4.exec(i);let t=255,n,a,s;if(e){if(e[7]!==n){const o=+e[7];t=e[8]?Wt(o):je(o*255,0,255)}return n=+e[1],a=+e[3],s=+e[5],n=255&(e[2]?Wt(n):je(n,0,255)),a=255&(e[4]?Wt(a):je(a,0,255)),s=255&(e[6]?Wt(s):je(s,0,255)),{r:n,g:a,b:s,a:t}}}function N4(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Pe(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Cn=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Vt=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function g4(i,e,t){const n=Vt(Pe(i.r)),a=Vt(Pe(i.g)),s=Vt(Pe(i.b));return{r:Ye(Cn(n+t*(Vt(Pe(e.r))-n))),g:Ye(Cn(a+t*(Vt(Pe(e.g))-a))),b:Ye(Cn(s+t*(Vt(Pe(e.b))-s))),a:i.a+t*(e.a-i.a)}}function Ai(i,e,t){if(i){let n=Ba(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=pa(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function gc(i,e){return i&&Object.assign(e||{},i)}function ts(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=Ye(i[3]))):(e=gc(i,{r:0,g:0,b:0,a:1}),e.a=Ye(e.a)),e}function u4(i){return i.charAt(0)==="r"?h4(i):o4(i)}class ci{constructor(e){if(e instanceof ci)return e;const t=typeof e;let n;t==="object"?n=ts(e):t==="string"&&(n=Zf(e)||f4(e)||u4(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=gc(this._rgb);return e&&(e.a=Pe(e.a)),e}set rgb(e){this._rgb=ts(e)}rgbString(){return this._valid?N4(this._rgb):void 0}hexString(){return this._valid?Jf(this._rgb):void 0}hslString(){return this._valid?r4(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,a=e.rgb;let s;const o=t===s?.5:t,c=2*o-1,r=n.a-a.a,d=((c*r===-1?c:(c+r)/(1+c*r))+1)/2;s=1-d,n.r=255&d*n.r+s*a.r+.5,n.g=255&d*n.g+s*a.g+.5,n.b=255&d*n.b+s*a.b+.5,n.a=o*n.a+(1-o)*a.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=g4(this._rgb,e._rgb,t)),this}clone(){return new ci(this.rgb)}alpha(e){return this._rgb.a=Ye(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=Bi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Ai(this._rgb,2,e),this}darken(e){return Ai(this._rgb,2,-e),this}saturate(e){return Ai(this._rgb,1,e),this}desaturate(e){return Ai(this._rgb,1,-e),this}rotate(e){return c4(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function _e(){}const b4=(()=>{let i=0;return()=>i++})();function L(i){return i===null||typeof i>"u"}function F(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function R(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function j(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function ue(i,e){return j(i)?i:e}function Q(i,e){return typeof i>"u"?e:i}const m4=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/e,uc=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function I(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function K(i,e,t,n){let a,s,o;if(F(i))if(s=i.length,n)for(a=s-1;a>=0;a--)e.call(t,i[a],a);else for(a=0;a<s;a++)e.call(t,i[a],a);else if(R(i))for(o=Object.keys(i),s=o.length,a=0;a<s;a++)e.call(t,i[o[a]],o[a])}function Ji(i,e){let t,n,a,s;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(a=i[t],s=e[t],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function en(i){if(F(i))return i.map(en);if(R(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let a=0;for(;a<n;++a)e[t[a]]=en(i[t[a]]);return e}return i}function bc(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function B4(i,e,t,n){if(!bc(i))return;const a=e[i],s=t[i];R(a)&&R(s)?ri(a,s,n):e[i]=en(s)}function ri(i,e,t){const n=F(e)?e:[e],a=n.length;if(!R(i))return i;t=t||{};const s=t.merger||B4;let o;for(let c=0;c<a;++c){if(o=n[c],!R(o))continue;const r=Object.keys(o);for(let d=0,f=r.length;d<f;++d)s(r[d],i,o,t)}return i}function Zt(i,e){return ri(i,e,{merger:x4})}function x4(i,e,t){if(!bc(i))return;const n=e[i],a=t[i];R(n)&&R(a)?Zt(n,a):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=en(a))}const is={"":i=>i,x:i=>i.x,y:i=>i.y};function p4(i){const e=i.split("."),t=[];let n="";for(const a of e)n+=a,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function D4(i){const e=p4(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function Xe(i,e){return(is[e]||(is[e]=D4(e)))(i)}function Da(i){return i.charAt(0).toUpperCase()+i.slice(1)}const di=i=>typeof i<"u",Je=i=>typeof i=="function",ns=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function O4(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const W=Math.PI,T=2*W,V4=T+W,tn=Number.POSITIVE_INFINITY,C4=W/180,$=W/2,at=W/4,as=W*2/3,$e=Math.log10,ve=Math.sign;function Xt(i,e,t){return Math.abs(i-e)<t}function ss(i){const e=Math.round(i);i=Xt(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor($e(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function y4(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((a,s)=>a-s).pop(),e}function St(i){return!isNaN(parseFloat(i))&&isFinite(i)}function A4(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function mc(i,e,t){let n,a,s;for(n=0,a=i.length;n<a;n++)s=i[n][t],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Ve(i){return i*(W/180)}function Oa(i){return i*(180/W)}function os(i){if(!j(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function Bc(i,e){const t=e.x-i.x,n=e.y-i.y,a=Math.sqrt(t*t+n*n);let s=Math.atan2(n,t);return s<-.5*W&&(s+=T),{angle:s,distance:a}}function Tn(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function S4(i,e){return(i-e+V4)%T-W}function be(i){return(i%T+T)%T}function fi(i,e,t,n){const a=be(i),s=be(e),o=be(t),c=be(s-a),r=be(o-a),d=be(a-s),f=be(a-o);return a===s||a===o||n&&s===o||c>r&&d<f}function ee(i,e,t){return Math.max(e,Math.min(t,i))}function k4(i){return ee(i,-32768,32767)}function Re(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function Va(i,e,t){t=t||(o=>i[o]<e);let n=i.length-1,a=0,s;for(;n-a>1;)s=a+n>>1,t(s)?a=s:n=s;return{lo:a,hi:n}}const Le=(i,e,t,n)=>Va(i,t,n?a=>{const s=i[a][e];return s<t||s===t&&i[a+1][e]===t}:a=>i[a][e]<t),v4=(i,e,t)=>Va(i,t,n=>i[n][e]>=t);function G4(i,e,t){let n=0,a=i.length;for(;n<a&&i[n]<e;)n++;for(;a>n&&i[a-1]>t;)a--;return n>0||a<i.length?i.slice(n,a):i}const xc=["push","pop","shift","splice","unshift"];function _4(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),xc.forEach(t=>{const n="_onData"+Da(t),a=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...s){const o=a.apply(this,s);return i._chartjs.listeners.forEach(c=>{typeof c[n]=="function"&&c[n](...s)}),o}})})}function cs(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,a=n.indexOf(e);a!==-1&&n.splice(a,1),!(n.length>0)&&(xc.forEach(s=>{delete i[s]}),delete i._chartjs)}function pc(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const Dc=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Oc(i,e){let t=[],n=!1;return function(...a){t=a,n||(n=!0,Dc.call(window,()=>{n=!1,i.apply(e,t)}))}}function w4(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const Ca=i=>i==="start"?"left":i==="end"?"right":"center",se=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,M4=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function Vc(i,e,t){const n=e.length;let a=0,s=n;if(i._sorted){const{iScale:o,_parsed:c}=i,r=o.axis,{min:d,max:f,minDefined:l,maxDefined:h}=o.getUserBounds();l&&(a=ee(Math.min(Le(c,o.axis,d).lo,t?n:Le(e,r,o.getPixelForValue(d)).lo),0,n-1)),h?s=ee(Math.max(Le(c,o.axis,f,!0).hi+1,t?0:Le(e,r,o.getPixelForValue(f),!0).hi+1),a,n)-a:s=n-a}return{start:a,count:s}}function Cc(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,a={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=a,!0;const s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,a),s}const Si=i=>i===0||i===1,rs=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*T/t)),ds=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*T/t)+1,Jt={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*$)+1,easeOutSine:i=>Math.sin(i*$),easeInOutSine:i=>-.5*(Math.cos(W*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Si(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Si(i)?i:rs(i,.075,.3),easeOutElastic:i=>Si(i)?i:ds(i,.075,.3),easeInOutElastic(i){return Si(i)?i:i<.5?.5*rs(i*2,.1125,.45):.5+.5*ds(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-Jt.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Jt.easeInBounce(i*2)*.5:Jt.easeOutBounce(i*2-1)*.5+.5};function ya(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function fs(i){return ya(i)?i:new ci(i)}function yn(i){return ya(i)?i:new ci(i).saturate(.5).darken(.1).hexString()}const P4=["x","y","borderWidth","radius","tension"],Q4=["color","borderColor","backgroundColor"];function E4(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:Q4},numbers:{type:"number",properties:P4}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function R4(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ls=new Map;function L4(i,e){e=e||{};const t=i+JSON.stringify(e);let n=ls.get(t);return n||(n=new Intl.NumberFormat(i,e),ls.set(t,n)),n}function xi(i,e,t){return L4(e,t).format(i)}const yc={values(i){return F(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let a,s=i;if(t.length>1){const d=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(d<1e-4||d>1e15)&&(a="scientific"),s=K4(i,t)}const o=$e(Math.abs(s)),c=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),r={notation:a,minimumFractionDigits:c,maximumFractionDigits:c};return Object.assign(r,this.options.ticks.format),xi(i,n,r)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor($e(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?yc.numeric.call(this,i,e,t):""}};function K4(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var fn={formatters:yc};function z4(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:fn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const bt=Object.create(null),Hn=Object.create(null);function ei(i,e){if(!e)return i;const t=e.split(".");for(let n=0,a=t.length;n<a;++n){const s=t[n];i=i[s]||(i[s]=Object.create(null))}return i}function An(i,e,t){return typeof e=="string"?ri(ei(i,e),t):ri(ei(i,""),e)}class I4{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,a)=>yn(a.backgroundColor),this.hoverBorderColor=(n,a)=>yn(a.borderColor),this.hoverColor=(n,a)=>yn(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return An(this,e,t)}get(e){return ei(this,e)}describe(e,t){return An(Hn,e,t)}override(e,t){return An(bt,e,t)}route(e,t,n,a){const s=ei(this,e),o=ei(this,n),c="_"+t;Object.defineProperties(s,{[c]:{value:s[t],writable:!0},[t]:{enumerable:!0,get(){const r=this[c],d=o[a];return R(r)?Object.assign({},d,r):Q(r,d)},set(r){this[c]=r}}})}apply(e){e.forEach(t=>t(this))}}var q=new I4({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[E4,R4,z4]);function F4(i){return!i||L(i.size)||L(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function nn(i,e,t,n,a){let s=e[a];return s||(s=e[a]=i.measureText(a).width,t.push(a)),s>n&&(n=s),n}function T4(i,e,t,n){n=n||{};let a=n.data=n.data||{},s=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},s=n.garbageCollect=[],n.font=e),i.save(),i.font=e;let o=0;const c=t.length;let r,d,f,l,h;for(r=0;r<c;r++)if(l=t[r],l!=null&&!F(l))o=nn(i,a,s,o,l);else if(F(l))for(d=0,f=l.length;d<f;d++)h=l[d],h!=null&&!F(h)&&(o=nn(i,a,s,o,h));i.restore();const g=s.length/2;if(g>t.length){for(r=0;r<g;r++)delete a[s[r]];s.splice(0,g)}return o}function st(i,e,t){const n=i.currentDevicePixelRatio,a=t!==0?Math.max(t/2,.5):0;return Math.round((e-a)*n)/n+a}function hs(i,e){e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore()}function Wn(i,e,t,n){Ac(i,e,t,n,null)}function Ac(i,e,t,n,a){let s,o,c,r,d,f,l,h;const g=e.pointStyle,N=e.rotation,u=e.radius;let b=(N||0)*C4;if(g&&typeof g=="object"&&(s=g.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(b),i.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),i.restore();return}if(!(isNaN(u)||u<=0)){switch(i.beginPath(),g){default:a?i.ellipse(t,n,a/2,u,0,0,T):i.arc(t,n,u,0,T),i.closePath();break;case"triangle":f=a?a/2:u,i.moveTo(t+Math.sin(b)*f,n-Math.cos(b)*u),b+=as,i.lineTo(t+Math.sin(b)*f,n-Math.cos(b)*u),b+=as,i.lineTo(t+Math.sin(b)*f,n-Math.cos(b)*u),i.closePath();break;case"rectRounded":d=u*.516,r=u-d,o=Math.cos(b+at)*r,l=Math.cos(b+at)*(a?a/2-d:r),c=Math.sin(b+at)*r,h=Math.sin(b+at)*(a?a/2-d:r),i.arc(t-l,n-c,d,b-W,b-$),i.arc(t+h,n-o,d,b-$,b),i.arc(t+l,n+c,d,b,b+$),i.arc(t-h,n+o,d,b+$,b+W),i.closePath();break;case"rect":if(!N){r=Math.SQRT1_2*u,f=a?a/2:r,i.rect(t-f,n-r,2*f,2*r);break}b+=at;case"rectRot":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+h,n-o),i.lineTo(t+l,n+c),i.lineTo(t-h,n+o),i.closePath();break;case"crossRot":b+=at;case"cross":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"star":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o),b+=at,l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"line":o=a?a/2:Math.cos(b)*u,c=Math.sin(b)*u,i.moveTo(t-o,n-c),i.lineTo(t+o,n+c);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(b)*(a?a/2:u),n+Math.sin(b)*u);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function Ke(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function ln(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function hn(i){i.restore()}function H4(i,e,t,n,a){if(!e)return i.lineTo(t.x,t.y);if(a==="middle"){const s=(e.x+t.x)/2;i.lineTo(s,e.y),i.lineTo(s,t.y)}else a==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function W4(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function j4(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),L(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function $4(i,e,t,n,a){if(a.strikethrough||a.underline){const s=i.measureText(n),o=e-s.actualBoundingBoxLeft,c=e+s.actualBoundingBoxRight,r=t-s.actualBoundingBoxAscent,d=t+s.actualBoundingBoxDescent,f=a.strikethrough?(r+d)/2:d;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=a.decorationWidth||2,i.moveTo(o,f),i.lineTo(c,f),i.stroke()}}function q4(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function mt(i,e,t,n,a,s={}){const o=F(e)?e:[e],c=s.strokeWidth>0&&s.strokeColor!=="";let r,d;for(i.save(),i.font=a.string,j4(i,s),r=0;r<o.length;++r)d=o[r],s.backdrop&&q4(i,s.backdrop),c&&(s.strokeColor&&(i.strokeStyle=s.strokeColor),L(s.strokeWidth)||(i.lineWidth=s.strokeWidth),i.strokeText(d,t,n,s.maxWidth)),i.fillText(d,t,n,s.maxWidth),$4(i,t,n,d,s),n+=Number(a.lineHeight);i.restore()}function li(i,e){const{x:t,y:n,w:a,h:s,radius:o}=e;i.arc(t+o.topLeft,n+o.topLeft,o.topLeft,-$,W,!0),i.lineTo(t,n+s-o.bottomLeft),i.arc(t+o.bottomLeft,n+s-o.bottomLeft,o.bottomLeft,W,$,!0),i.lineTo(t+a-o.bottomRight,n+s),i.arc(t+a-o.bottomRight,n+s-o.bottomRight,o.bottomRight,$,0,!0),i.lineTo(t+a,n+o.topRight),i.arc(t+a-o.topRight,n+o.topRight,o.topRight,0,-$,!0),i.lineTo(t+o.topLeft,n)}const U4=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Y4=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Z4(i,e){const t=(""+i).match(U4);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const X4=i=>+i||0;function Aa(i,e){const t={},n=R(e),a=n?Object.keys(e):e,s=R(i)?n?o=>Q(i[o],i[e[o]]):o=>i[o]:()=>i;for(const o of a)t[o]=X4(s(o));return t}function Sc(i){return Aa(i,{top:"y",right:"x",bottom:"y",left:"x"})}function Nt(i){return Aa(i,["topLeft","topRight","bottomLeft","bottomRight"])}function ce(i){const e=Sc(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Z(i,e){i=i||{},e=e||q.font;let t=Q(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=Q(i.style,e.style);n&&!(""+n).match(Y4)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const a={family:Q(i.family,e.family),lineHeight:Z4(Q(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:Q(i.weight,e.weight),string:""};return a.string=F4(a),a}function jt(i,e,t,n){let a=!0,s,o,c;for(s=0,o=i.length;s<o;++s)if(c=i[s],c!==void 0&&(e!==void 0&&typeof c=="function"&&(c=c(e),a=!1),t!==void 0&&F(c)&&(c=c[t%c.length],a=!1),c!==void 0))return n&&!a&&(n.cacheable=!1),c}function J4(i,e,t){const{min:n,max:a}=i,s=uc(e,(a-n)/2),o=(c,r)=>t&&c===0?0:c+r;return{min:o(n,-Math.abs(s)),max:o(a,s)}}function nt(i,e){return Object.assign(Object.create(i),e)}function Sa(i,e=[""],t,n,a=()=>i[0]){const s=t||i;typeof n>"u"&&(n=_c("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:s,_fallback:n,_getTarget:a,override:c=>Sa([c,...i],e,s,n)};return new Proxy(o,{deleteProperty(c,r){return delete c[r],delete c._keys,delete i[0][r],!0},get(c,r){return vc(c,r,()=>cl(r,e,i,c))},getOwnPropertyDescriptor(c,r){return Reflect.getOwnPropertyDescriptor(c._scopes[0],r)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(c,r){return gs(c).includes(r)},ownKeys(c){return gs(c)},set(c,r,d){const f=c._storage||(c._storage=a());return c[r]=f[r]=d,delete c._keys,!0}})}function kt(i,e,t,n){const a={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:kc(i,n),setContext:s=>kt(i,s,t,n),override:s=>kt(i.override(s),e,t,n)};return new Proxy(a,{deleteProperty(s,o){return delete s[o],delete i[o],!0},get(s,o,c){return vc(s,o,()=>tl(s,o,c))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(s,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(s,o,c){return i[o]=c,delete s[o],!0}})}function kc(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:a=e.allKeys}=i;return{allKeys:a,scriptable:t,indexable:n,isScriptable:Je(t)?t:()=>t,isIndexable:Je(n)?n:()=>n}}const el=(i,e)=>i?i+Da(e):e,ka=(i,e)=>R(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function vc(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e))return i[e];const n=t();return i[e]=n,n}function tl(i,e,t){const{_proxy:n,_context:a,_subProxy:s,_descriptors:o}=i;let c=n[e];return Je(c)&&o.isScriptable(e)&&(c=il(e,c,i,t)),F(c)&&c.length&&(c=nl(e,c,i,o.isIndexable)),ka(e,c)&&(c=kt(c,a,s&&s[e],o)),c}function il(i,e,t,n){const{_proxy:a,_context:s,_subProxy:o,_stack:c}=t;if(c.has(i))throw new Error("Recursion detected: "+Array.from(c).join("->")+"->"+i);c.add(i);let r=e(s,o||n);return c.delete(i),ka(i,r)&&(r=va(a._scopes,a,i,r)),r}function nl(i,e,t,n){const{_proxy:a,_context:s,_subProxy:o,_descriptors:c}=t;if(typeof s.index<"u"&&n(i))return e[s.index%e.length];if(R(e[0])){const r=e,d=a._scopes.filter(f=>f!==r);e=[];for(const f of r){const l=va(d,a,i,f);e.push(kt(l,s,o&&o[i],c))}}return e}function Gc(i,e,t){return Je(i)?i(e,t):i}const al=(i,e)=>i===!0?e:typeof i=="string"?Xe(e,i):void 0;function sl(i,e,t,n,a){for(const s of e){const o=al(t,s);if(o){i.add(o);const c=Gc(o._fallback,t,a);if(typeof c<"u"&&c!==t&&c!==n)return c}else if(o===!1&&typeof n<"u"&&t!==n)return null}return!1}function va(i,e,t,n){const a=e._rootScopes,s=Gc(e._fallback,t,n),o=[...i,...a],c=new Set;c.add(n);let r=Ns(c,o,t,s||t,n);return r===null||typeof s<"u"&&s!==t&&(r=Ns(c,o,s,r,n),r===null)?!1:Sa(Array.from(c),[""],a,s,()=>ol(e,t,n))}function Ns(i,e,t,n,a){for(;t;)t=sl(i,e,t,n,a);return t}function ol(i,e,t){const n=i._getTarget();e in n||(n[e]={});const a=n[e];return F(a)&&R(t)?t:a||{}}function cl(i,e,t,n){let a;for(const s of e)if(a=_c(el(s,i),t),typeof a<"u")return ka(i,a)?va(t,n,i,a):a}function _c(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function gs(i){let e=i._keys;return e||(e=i._keys=rl(i._scopes)),e}function rl(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(a=>!a.startsWith("_")))e.add(n);return Array.from(e)}function wc(i,e,t,n){const{iScale:a}=i,{key:s="r"}=this._parsing,o=new Array(n);let c,r,d,f;for(c=0,r=n;c<r;++c)d=c+t,f=e[d],o[c]={r:a.parse(Xe(f,s),d)};return o}const dl=Number.EPSILON||1e-14,vt=(i,e)=>e<i.length&&!i[e].skip&&i[e],Mc=i=>i==="x"?"y":"x";function fl(i,e,t,n){const a=i.skip?e:i,s=e,o=t.skip?e:t,c=Tn(s,a),r=Tn(o,s);let d=c/(c+r),f=r/(c+r);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const l=n*d,h=n*f;return{previous:{x:s.x-l*(o.x-a.x),y:s.y-l*(o.y-a.y)},next:{x:s.x+h*(o.x-a.x),y:s.y+h*(o.y-a.y)}}}function ll(i,e,t){const n=i.length;let a,s,o,c,r,d=vt(i,0);for(let f=0;f<n-1;++f)if(r=d,d=vt(i,f+1),!(!r||!d)){if(Xt(e[f],0,dl)){t[f]=t[f+1]=0;continue}a=t[f]/e[f],s=t[f+1]/e[f],c=Math.pow(a,2)+Math.pow(s,2),!(c<=9)&&(o=3/Math.sqrt(c),t[f]=a*o*e[f],t[f+1]=s*o*e[f])}}function hl(i,e,t="x"){const n=Mc(t),a=i.length;let s,o,c,r=vt(i,0);for(let d=0;d<a;++d){if(o=c,c=r,r=vt(i,d+1),!c)continue;const f=c[t],l=c[n];o&&(s=(f-o[t])/3,c[`cp1${t}`]=f-s,c[`cp1${n}`]=l-s*e[d]),r&&(s=(r[t]-f)/3,c[`cp2${t}`]=f+s,c[`cp2${n}`]=l+s*e[d])}}function Nl(i,e="x"){const t=Mc(e),n=i.length,a=Array(n).fill(0),s=Array(n);let o,c,r,d=vt(i,0);for(o=0;o<n;++o)if(c=r,r=d,d=vt(i,o+1),!!r){if(d){const f=d[e]-r[e];a[o]=f!==0?(d[t]-r[t])/f:0}s[o]=c?d?ve(a[o-1])!==ve(a[o])?0:(a[o-1]+a[o])/2:a[o-1]:a[o]}ll(i,a,s),hl(i,s,e)}function ki(i,e,t){return Math.max(Math.min(i,t),e)}function gl(i,e){let t,n,a,s,o,c=Ke(i[0],e);for(t=0,n=i.length;t<n;++t)o=s,s=c,c=t<n-1&&Ke(i[t+1],e),s&&(a=i[t],o&&(a.cp1x=ki(a.cp1x,e.left,e.right),a.cp1y=ki(a.cp1y,e.top,e.bottom)),c&&(a.cp2x=ki(a.cp2x,e.left,e.right),a.cp2y=ki(a.cp2y,e.top,e.bottom)))}function ul(i,e,t,n,a){let s,o,c,r;if(e.spanGaps&&(i=i.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")Nl(i,a);else{let d=n?i[i.length-1]:i[0];for(s=0,o=i.length;s<o;++s)c=i[s],r=fl(d,c,i[Math.min(s+1,o-(n?0:1))%o],e.tension),c.cp1x=r.previous.x,c.cp1y=r.previous.y,c.cp2x=r.next.x,c.cp2y=r.next.y,d=c}e.capBezierPoints&&gl(i,t)}function Pc(){return typeof window<"u"&&typeof document<"u"}function Ga(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function an(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const Nn=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function bl(i,e){return Nn(i).getPropertyValue(e)}const ml=["top","right","bottom","left"];function gt(i,e,t){const n={};t=t?"-"+t:"";for(let a=0;a<4;a++){const s=ml[a];n[s]=parseFloat(i[e+"-"+s+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Bl=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function xl(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:a,offsetY:s}=n;let o=!1,c,r;if(Bl(a,s,i.target))c=a,r=s;else{const d=e.getBoundingClientRect();c=n.clientX-d.left,r=n.clientY-d.top,o=!0}return{x:c,y:r,box:o}}function dt(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,a=Nn(t),s=a.boxSizing==="border-box",o=gt(a,"padding"),c=gt(a,"border","width"),{x:r,y:d,box:f}=xl(i,t),l=o.left+(f&&c.left),h=o.top+(f&&c.top);let{width:g,height:N}=e;return s&&(g-=o.width+c.width,N-=o.height+c.height),{x:Math.round((r-l)/g*t.width/n),y:Math.round((d-h)/N*t.height/n)}}function pl(i,e,t){let n,a;if(e===void 0||t===void 0){const s=Ga(i);if(!s)e=i.clientWidth,t=i.clientHeight;else{const o=s.getBoundingClientRect(),c=Nn(s),r=gt(c,"border","width"),d=gt(c,"padding");e=o.width-d.width-r.width,t=o.height-d.height-r.height,n=an(c.maxWidth,s,"clientWidth"),a=an(c.maxHeight,s,"clientHeight")}}return{width:e,height:t,maxWidth:n||tn,maxHeight:a||tn}}const vi=i=>Math.round(i*10)/10;function Dl(i,e,t,n){const a=Nn(i),s=gt(a,"margin"),o=an(a.maxWidth,i,"clientWidth")||tn,c=an(a.maxHeight,i,"clientHeight")||tn,r=pl(i,e,t);let{width:d,height:f}=r;if(a.boxSizing==="content-box"){const h=gt(a,"border","width"),g=gt(a,"padding");d-=g.width+h.width,f-=g.height+h.height}return d=Math.max(0,d-s.width),f=Math.max(0,n?d/n:f-s.height),d=vi(Math.min(d,o,r.maxWidth)),f=vi(Math.min(f,c,r.maxHeight)),d&&!f&&(f=vi(d/2)),(e!==void 0||t!==void 0)&&n&&r.height&&f>r.height&&(f=r.height,d=vi(Math.floor(f*n))),{width:d,height:f}}function us(i,e,t){const n=e||1,a=Math.floor(i.height*n),s=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==a||o.width!==s?(i.currentDevicePixelRatio=n,o.height=a,o.width=s,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const Ol=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return i}();function bs(i,e){const t=bl(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function ft(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function Vl(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function Cl(i,e,t,n){const a={x:i.cp2x,y:i.cp2y},s={x:e.cp1x,y:e.cp1y},o=ft(i,a,t),c=ft(a,s,t),r=ft(s,e,t),d=ft(o,c,t),f=ft(c,r,t);return ft(d,f,t)}const yl=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},Al=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function yt(i,e,t){return i?yl(e,t):Al()}function Qc(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function Ec(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function Rc(i){return i==="angle"?{between:fi,compare:S4,normalize:be}:{between:Re,compare:(e,t)=>e-t,normalize:e=>e}}function ms({start:i,end:e,count:t,loop:n,style:a}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:a}}function Sl(i,e,t){const{property:n,start:a,end:s}=t,{between:o,normalize:c}=Rc(n),r=e.length;let{start:d,end:f,loop:l}=i,h,g;if(l){for(d+=r,f+=r,h=0,g=r;h<g&&o(c(e[d%r][n]),a,s);++h)d--,f--;d%=r,f%=r}return f<d&&(f+=r),{start:d,end:f,loop:l,style:i.style}}function Lc(i,e,t){if(!t)return[i];const{property:n,start:a,end:s}=t,o=e.length,{compare:c,between:r,normalize:d}=Rc(n),{start:f,end:l,loop:h,style:g}=Sl(i,e,t),N=[];let u=!1,b=null,B,m,D;const O=()=>r(a,D,B)&&c(a,D)!==0,x=()=>c(s,B)===0||r(s,D,B),A=()=>u||O(),y=()=>!u||x();for(let V=f,G=f;V<=l;++V)m=e[V%o],!m.skip&&(B=d(m[n]),B!==D&&(u=r(B,a,s),b===null&&A()&&(b=c(B,a)===0?V:G),b!==null&&y()&&(N.push(ms({start:b,end:V,loop:h,count:o,style:g})),b=null),G=V,D=B));return b!==null&&N.push(ms({start:b,end:l,loop:h,count:o,style:g})),N}function Kc(i,e){const t=[],n=i.segments;for(let a=0;a<n.length;a++){const s=Lc(n[a],i.points,e);s.length&&t.push(...s)}return t}function kl(i,e,t,n){let a=0,s=e-1;if(t&&!n)for(;a<e&&!i[a].skip;)a++;for(;a<e&&i[a].skip;)a++;for(a%=e,t&&(s+=a);s>a&&i[s%e].skip;)s--;return s%=e,{start:a,end:s}}function vl(i,e,t,n){const a=i.length,s=[];let o=e,c=i[e],r;for(r=e+1;r<=t;++r){const d=i[r%a];d.skip||d.stop?c.skip||(n=!1,s.push({start:e%a,end:(r-1)%a,loop:n}),e=o=d.stop?r:null):(o=r,c.skip&&(e=r)),c=d}return o!==null&&s.push({start:e%a,end:o%a,loop:n}),s}function Gl(i,e){const t=i.points,n=i.options.spanGaps,a=t.length;if(!a)return[];const s=!!i._loop,{start:o,end:c}=kl(t,a,s,n);if(n===!0)return Bs(i,[{start:o,end:c,loop:s}],t,e);const r=c<o?c+a:c,d=!!i._fullLoop&&o===0&&c===a-1;return Bs(i,vl(t,o,r,d),t,e)}function Bs(i,e,t,n){return!n||!n.setContext||!t?e:_l(i,e,t,n)}function _l(i,e,t,n){const a=i._chart.getContext(),s=xs(i.options),{_datasetIndex:o,options:{spanGaps:c}}=i,r=t.length,d=[];let f=s,l=e[0].start,h=l;function g(N,u,b,B){const m=c?-1:1;if(N!==u){for(N+=r;t[N%r].skip;)N-=m;for(;t[u%r].skip;)u+=m;N%r!==u%r&&(d.push({start:N%r,end:u%r,loop:b,style:B}),f=B,l=u%r)}}for(const N of e){l=c?l:N.start;let u=t[l%r],b;for(h=l+1;h<=N.end;h++){const B=t[h%r];b=xs(n.setContext(nt(a,{type:"segment",p0:u,p1:B,p0DataIndex:(h-1)%r,p1DataIndex:h%r,datasetIndex:o}))),wl(b,f)&&g(l,h-1,N.loop,f),u=B,f=b}l<h-1&&g(l,h-1,N.loop,f)}return d}function xs(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function wl(i,e){if(!e)return!1;const t=[],n=function(a,s){return ya(s)?(t.includes(s)||t.push(s),t.indexOf(s)):s};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Ml{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,a){const s=t.listeners[a],o=t.duration;s.forEach(c=>c({chart:e,initial:t.initial,numSteps:o,currentStep:Math.min(n-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Dc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,a)=>{if(!n.running||!n.items.length)return;const s=n.items;let o=s.length-1,c=!1,r;for(;o>=0;--o)r=s[o],r._active?(r._total>n.duration&&(n.duration=r._total),r.tick(e),c=!0):(s[o]=s[s.length-1],s.pop());c&&(a.draw(),this._notify(a,n,e,"progress")),s.length||(n.running=!1,this._notify(a,n,e,"complete"),n.initial=!1),t+=s.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,a)=>Math.max(n,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let a=n.length-1;for(;a>=0;--a)n[a].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var we=new Ml;const ps="transparent",Pl={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=fs(i||ps),a=n.valid&&fs(e||ps);return a&&a.valid?a.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class Ql{constructor(e,t,n,a){const s=t[n];a=jt([e.to,a,s,e.from]);const o=jt([e.from,s,a]);this._active=!0,this._fn=e.fn||Pl[e.type||typeof o],this._easing=Jt[e.easing]||Jt.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=o,this._to=a,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const a=this._target[this._prop],s=n-this._start,o=this._duration-s;this._start=n,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=jt([e.to,t,a,e.from]),this._from=jt([e.from,a,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,a=this._prop,s=this._from,o=this._loop,c=this._to;let r;if(this._active=s!==c&&(o||t<n),!this._active){this._target[a]=c,this._notify(!0);return}if(t<0){this._target[a]=s;return}r=t/n%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[a]=this._fn(s,c,r)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let a=0;a<n.length;a++)n[a][t]()}}class zc{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!R(e))return;const t=Object.keys(q.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const s=e[a];if(!R(s))return;const o={};for(const c of t)o[c]=s[c];(F(s.properties)&&s.properties||[a]).forEach(c=>{(c===a||!n.has(c))&&n.set(c,o)})})}_animateOptions(e,t){const n=t.options,a=Rl(e,n);if(!a)return[];const s=this._createAnimations(a,n);return n.$shared&&El(e.options.$animations,n).then(()=>{e.options=n},()=>{}),s}_createAnimations(e,t){const n=this._properties,a=[],s=e.$animations||(e.$animations={}),o=Object.keys(t),c=Date.now();let r;for(r=o.length-1;r>=0;--r){const d=o[r];if(d.charAt(0)==="$")continue;if(d==="options"){a.push(...this._animateOptions(e,t));continue}const f=t[d];let l=s[d];const h=n.get(d);if(l)if(h&&l.active()){l.update(h,f,c);continue}else l.cancel();if(!h||!h.duration){e[d]=f;continue}s[d]=l=new Ql(h,e,d,f),a.push(l)}return a}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return we.add(this._chart,n),!0}}function El(i,e){const t=[],n=Object.keys(e);for(let a=0;a<n.length;a++){const s=i[n[a]];s&&s.active()&&t.push(s.wait())}return Promise.all(t)}function Rl(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function Ds(i,e){const t=i&&i.options||{},n=t.reverse,a=t.min===void 0?e:0,s=t.max===void 0?e:0;return{start:n?s:a,end:n?a:s}}function Ll(i,e,t){if(t===!1)return!1;const n=Ds(i,t),a=Ds(e,t);return{top:a.end,right:n.end,bottom:a.start,left:n.start}}function Kl(i){let e,t,n,a;return R(i)?(e=i.top,t=i.right,n=i.bottom,a=i.left):e=t=n=a=i,{top:e,right:t,bottom:n,left:a,disabled:i===!1}}function Ic(i,e){const t=[],n=i._getSortedDatasetMetas(e);let a,s;for(a=0,s=n.length;a<s;++a)t.push(n[a].index);return t}function Os(i,e,t,n={}){const a=i.keys,s=n.mode==="single";let o,c,r,d;if(e!==null){for(o=0,c=a.length;o<c;++o){if(r=+a[o],r===t){if(n.all)continue;break}d=i.values[r],j(d)&&(s||e===0||ve(e)===ve(d))&&(e+=d)}return e}}function zl(i){const e=Object.keys(i),t=new Array(e.length);let n,a,s;for(n=0,a=e.length;n<a;++n)s=e[n],t[n]={x:s,y:i[s]};return t}function Vs(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function Il(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function Fl(i){const{min:e,max:t,minDefined:n,maxDefined:a}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:a?t:Number.POSITIVE_INFINITY}}function Tl(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function Cs(i,e,t,n){for(const a of e.getMatchingVisibleMetas(n).reverse()){const s=i[a.index];if(t&&s>0||!t&&s<0)return a.index}return null}function ys(i,e){const{chart:t,_cachedMeta:n}=i,a=t._stacks||(t._stacks={}),{iScale:s,vScale:o,index:c}=n,r=s.axis,d=o.axis,f=Il(s,o,n),l=e.length;let h;for(let g=0;g<l;++g){const N=e[g],{[r]:u,[d]:b}=N,B=N._stacks||(N._stacks={});h=B[d]=Tl(a,f,u),h[c]=b,h._top=Cs(h,o,!0,n.type),h._bottom=Cs(h,o,!1,n.type);const m=h._visualValues||(h._visualValues={});m[c]=b}}function Sn(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function Hl(i,e){return nt(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Wl(i,e,t){return nt(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function Lt(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const a of e){const s=a._stacks;if(!s||s[n]===void 0||s[n][t]===void 0)return;delete s[n][t],s[n]._visualValues!==void 0&&s[n]._visualValues[t]!==void 0&&delete s[n]._visualValues[t]}}}const kn=i=>i==="reset"||i==="none",As=(i,e)=>e?i:Object.assign({},i),jl=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:Ic(t,!0),values:null};class Ce{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Vs(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Lt(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),a=(l,h,g,N)=>l==="x"?h:l==="r"?N:g,s=t.xAxisID=Q(n.xAxisID,Sn(e,"x")),o=t.yAxisID=Q(n.yAxisID,Sn(e,"y")),c=t.rAxisID=Q(n.rAxisID,Sn(e,"r")),r=t.indexAxis,d=t.iAxisID=a(r,s,o,c),f=t.vAxisID=a(r,o,s,c);t.xScale=this.getScaleForId(s),t.yScale=this.getScaleForId(o),t.rScale=this.getScaleForId(c),t.iScale=this.getScaleForId(d),t.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&cs(this._data,this),e._stacked&&Lt(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(R(t))this._data=zl(t);else if(n!==t){if(n){cs(n,this);const a=this._cachedMeta;Lt(a),a._parsed=[]}t&&Object.isExtensible(t)&&_4(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let a=!1;this._dataCheck();const s=t._stacked;t._stacked=Vs(t.vScale,t),t.stack!==n.stack&&(a=!0,Lt(t),t.stack=n.stack),this._resyncElements(e),(a||s!==t._stacked)&&ys(this,t._parsed)}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:a}=this,{iScale:s,_stacked:o}=n,c=s.axis;let r=e===0&&t===a.length?!0:n._sorted,d=e>0&&n._parsed[e-1],f,l,h;if(this._parsing===!1)n._parsed=a,n._sorted=!0,h=a;else{F(a[e])?h=this.parseArrayData(n,a,e,t):R(a[e])?h=this.parseObjectData(n,a,e,t):h=this.parsePrimitiveData(n,a,e,t);const g=()=>l[c]===null||d&&l[c]<d[c];for(f=0;f<t;++f)n._parsed[f+e]=l=h[f],r&&(g()&&(r=!1),d=l);n._sorted=r}o&&ys(this,h)}parsePrimitiveData(e,t,n,a){const{iScale:s,vScale:o}=e,c=s.axis,r=o.axis,d=s.getLabels(),f=s===o,l=new Array(a);let h,g,N;for(h=0,g=a;h<g;++h)N=h+n,l[h]={[c]:f||s.parse(d[N],N),[r]:o.parse(t[N],N)};return l}parseArrayData(e,t,n,a){const{xScale:s,yScale:o}=e,c=new Array(a);let r,d,f,l;for(r=0,d=a;r<d;++r)f=r+n,l=t[f],c[r]={x:s.parse(l[0],f),y:o.parse(l[1],f)};return c}parseObjectData(e,t,n,a){const{xScale:s,yScale:o}=e,{xAxisKey:c="x",yAxisKey:r="y"}=this._parsing,d=new Array(a);let f,l,h,g;for(f=0,l=a;f<l;++f)h=f+n,g=t[h],d[f]={x:s.parse(Xe(g,c),h),y:o.parse(Xe(g,r),h)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const a=this.chart,s=this._cachedMeta,o=t[e.axis],c={keys:Ic(a,!0),values:t._stacks[e.axis]._visualValues};return Os(c,o,s.index,{mode:n})}updateRangeFromParsed(e,t,n,a){const s=n[t.axis];let o=s===null?NaN:s;const c=a&&n._stacks[t.axis];a&&c&&(a.values=c,o=Os(a,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,t){const n=this._cachedMeta,a=n._parsed,s=n._sorted&&e===n.iScale,o=a.length,c=this._getOtherScale(e),r=jl(t,n,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:l}=Fl(c);let h,g;function N(){g=a[h];const u=g[c.axis];return!j(g[e.axis])||f>u||l<u}for(h=0;h<o&&!(!N()&&(this.updateRangeFromParsed(d,e,g,r),s));++h);if(s){for(h=o-1;h>=0;--h)if(!N()){this.updateRangeFromParsed(d,e,g,r);break}}return d}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let a,s,o;for(a=0,s=t.length;a<s;++a)o=t[a][e.axis],j(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,a=t.vScale,s=this.getParsed(e);return{label:n?""+n.getLabelForValue(s[n.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=Kl(Q(this.options.clip,Ll(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,a=n.data||[],s=t.chartArea,o=[],c=this._drawStart||0,r=this._drawCount||a.length-c,d=this.options.drawActiveElementsOnTop;let f;for(n.dataset&&n.dataset.draw(e,s,c,r),f=c;f<c+r;++f){const l=a[f];l.hidden||(l.active&&d?o.push(l):l.draw(e,s))}for(f=0;f<o.length;++f)o[f].draw(e,s)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const a=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=Wl(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=a.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=Hl(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!t,s.mode=n,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const a=t==="active",s=this._cachedDataOpts,o=e+"-"+t,c=s[o],r=this.enableOptionSharing&&di(n);if(c)return As(c,r);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,e),l=a?[`${e}Hover`,"hover",e,""]:[e,""],h=d.getOptionScopes(this.getDataset(),f),g=Object.keys(q.elements[e]),N=()=>this.getContext(n,a,t),u=d.resolveNamedOptions(h,g,N,l);return u.$shared&&(u.$shared=r,s[o]=Object.freeze(As(u,r))),u}_resolveAnimations(e,t,n){const a=this.chart,s=this._cachedDataOpts,o=`animation-${t}`,c=s[o];if(c)return c;let r;if(a.options.animation!==!1){const f=this.chart.config,l=f.datasetAnimationScopeKeys(this._type,t),h=f.getOptionScopes(this.getDataset(),l);r=f.createResolver(h,this.getContext(e,n,t))}const d=new zc(a,r&&r.animations);return r&&r._cacheable&&(s[o]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||kn(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),a=this._sharedOptions,s=this.getSharedOptions(n),o=this.includeOptions(t,s)||s!==a;return this.updateSharedOptions(s,t,n),{sharedOptions:s,includeOptions:o}}updateElement(e,t,n,a){kn(a)?Object.assign(e,n):this._resolveAnimations(t,a).update(e,n)}updateSharedOptions(e,t,n){e&&!kn(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,a){e.active=a;const s=this.getStyle(t,a);this._resolveAnimations(t,n,a).update(e,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[c,r,d]of this._syncList)this[c](r,d);this._syncList=[];const a=n.length,s=t.length,o=Math.min(s,a);o&&this.parse(0,o),s>a?this._insertElements(a,s-a,e):s<a&&this._removeElements(s,a-s)}_insertElements(e,t,n=!0){const a=this._cachedMeta,s=a.data,o=e+t;let c;const r=d=>{for(d.length+=t,c=d.length-1;c>=o;c--)d[c]=d[c-t]};for(r(s),c=e;c<o;++c)s[c]=new this.dataElementType;this._parsing&&r(a._parsed),this.parse(e,t),n&&this.updateElements(s,e,t,"reset")}updateElements(e,t,n,a){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const a=n._parsed.splice(e,t);n._stacked&&Lt(n,a)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,a]=e;this[t](n,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}C(Ce,"defaults",{}),C(Ce,"datasetElementType",null),C(Ce,"dataElementType",null);function $l(i,e){if(!i._cache.$bar){const t=i.getMatchingVisibleMetas(e);let n=[];for(let a=0,s=t.length;a<s;a++)n=n.concat(t[a].controller.getAllParsedValues(i));i._cache.$bar=pc(n.sort((a,s)=>a-s))}return i._cache.$bar}function ql(i){const e=i.iScale,t=$l(e,i.type);let n=e._length,a,s,o,c;const r=()=>{o===32767||o===-32768||(di(c)&&(n=Math.min(n,Math.abs(o-c)||n)),c=o)};for(a=0,s=t.length;a<s;++a)o=e.getPixelForValue(t[a]),r();for(c=void 0,a=0,s=e.ticks.length;a<s;++a)o=e.getPixelForTick(a),r();return n}function Ul(i,e,t,n){const a=t.barThickness;let s,o;return L(a)?(s=e.min*t.categoryPercentage,o=t.barPercentage):(s=a*n,o=1),{chunk:s/n,ratio:o,start:e.pixels[i]-s/2}}function Yl(i,e,t,n){const a=e.pixels,s=a[i];let o=i>0?a[i-1]:null,c=i<a.length-1?a[i+1]:null;const r=t.categoryPercentage;o===null&&(o=s-(c===null?e.end-e.start:c-s)),c===null&&(c=s+s-o);const d=s-(s-Math.min(o,c))/2*r;return{chunk:Math.abs(c-o)/2*r/n,ratio:t.barPercentage,start:d}}function Zl(i,e,t,n){const a=t.parse(i[0],n),s=t.parse(i[1],n),o=Math.min(a,s),c=Math.max(a,s);let r=o,d=c;Math.abs(o)>Math.abs(c)&&(r=c,d=o),e[t.axis]=d,e._custom={barStart:r,barEnd:d,start:a,end:s,min:o,max:c}}function Fc(i,e,t,n){return F(i)?Zl(i,e,t,n):e[t.axis]=t.parse(i,n),e}function Ss(i,e,t,n){const a=i.iScale,s=i.vScale,o=a.getLabels(),c=a===s,r=[];let d,f,l,h;for(d=t,f=t+n;d<f;++d)h=e[d],l={},l[a.axis]=c||a.parse(o[d],d),r.push(Fc(h,l,s,d));return r}function vn(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function Xl(i,e,t){return i!==0?ve(i):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function Jl(i){let e,t,n,a,s;return i.horizontal?(e=i.base>i.x,t="left",n="right"):(e=i.base<i.y,t="bottom",n="top"),e?(a="end",s="start"):(a="start",s="end"),{start:t,end:n,reverse:e,top:a,bottom:s}}function eh(i,e,t,n){let a=e.borderSkipped;const s={};if(!a){i.borderSkipped=s;return}if(a===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:c,reverse:r,top:d,bottom:f}=Jl(i);a==="middle"&&t&&(i.enableBorderRadius=!0,(t._top||0)===n?a=d:(t._bottom||0)===n?a=f:(s[ks(f,o,c,r)]=!0,a=d)),s[ks(a,o,c,r)]=!0,i.borderSkipped=s}function ks(i,e,t,n){return n?(i=th(i,e,t),i=vs(i,t,e)):i=vs(i,e,t),i}function th(i,e,t){return i===e?t:i===t?e:i}function vs(i,e,t){return i==="start"?e:i==="end"?t:i}function ih(i,{inflateAmount:e},t){i.inflateAmount=e==="auto"?t===1?.33:0:e}class Li extends Ce{parsePrimitiveData(e,t,n,a){return Ss(e,t,n,a)}parseArrayData(e,t,n,a){return Ss(e,t,n,a)}parseObjectData(e,t,n,a){const{iScale:s,vScale:o}=e,{xAxisKey:c="x",yAxisKey:r="y"}=this._parsing,d=s.axis==="x"?c:r,f=o.axis==="x"?c:r,l=[];let h,g,N,u;for(h=n,g=n+a;h<g;++h)u=t[h],N={},N[s.axis]=s.parse(Xe(u,d),h),l.push(Fc(Xe(u,f),N,o,h));return l}updateRangeFromParsed(e,t,n,a){super.updateRangeFromParsed(e,t,n,a);const s=n._custom;s&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:n,vScale:a}=t,s=this.getParsed(e),o=s._custom,c=vn(o)?"["+o.start+", "+o.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+n.getLabelForValue(s[n.axis]),value:c}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,a){const s=a==="reset",{index:o,_cachedMeta:{vScale:c}}=this,r=c.getBasePixel(),d=c.isHorizontal(),f=this._getRuler(),{sharedOptions:l,includeOptions:h}=this._getSharedOptions(t,a);for(let g=t;g<t+n;g++){const N=this.getParsed(g),u=s||L(N[c.axis])?{base:r,head:r}:this._calculateBarValuePixels(g),b=this._calculateBarIndexPixels(g,f),B=(N._stacks||{})[c.axis],m={horizontal:d,base:u.base,enableBorderRadius:!B||vn(N._custom)||o===B._top||o===B._bottom,x:d?u.head:b.center,y:d?b.center:u.head,height:d?b.size:Math.abs(u.size),width:d?Math.abs(u.size):b.size};h&&(m.options=l||this.resolveDataElementOptions(g,e[g].active?"active":a));const D=m.options||e[g].options;eh(m,D,B,o),ih(m,D,f.ratio),this.updateElement(e[g],g,m,a)}}_getStacks(e,t){const{iScale:n}=this._cachedMeta,a=n.getMatchingVisibleMetas(this._type).filter(r=>r.controller.options.grouped),s=n.options.stacked,o=[],c=r=>{const d=r.controller.getParsed(t),f=d&&d[r.vScale.axis];if(L(f)||isNaN(f))return!0};for(const r of a)if(!(t!==void 0&&c(r))&&((s===!1||o.indexOf(r.stack)===-1||s===void 0&&r.stack===void 0)&&o.push(r.stack),r.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,t,n){const a=this._getStacks(e,n),s=t!==void 0?a.indexOf(t):-1;return s===-1?a.length-1:s}_getRuler(){const e=this.options,t=this._cachedMeta,n=t.iScale,a=[];let s,o;for(s=0,o=t.data.length;s<o;++s)a.push(n.getPixelForValue(this.getParsed(s)[n.axis],s));const c=e.barThickness;return{min:c||ql(t),pixels:a,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:c?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:n,index:a},options:{base:s,minBarLength:o}}=this,c=s||0,r=this.getParsed(e),d=r._custom,f=vn(d);let l=r[t.axis],h=0,g=n?this.applyStack(t,r,n):l,N,u;g!==l&&(h=g-l,g=l),f&&(l=d.barStart,g=d.barEnd-d.barStart,l!==0&&ve(l)!==ve(d.barEnd)&&(h=0),h+=l);const b=!L(s)&&!f?s:h;let B=t.getPixelForValue(b);if(this.chart.getDataVisibility(e)?N=t.getPixelForValue(h+g):N=B,u=N-B,Math.abs(u)<o){u=Xl(u,t,c)*o,l===c&&(B-=u/2);const m=t.getPixelForDecimal(0),D=t.getPixelForDecimal(1),O=Math.min(m,D),x=Math.max(m,D);B=Math.max(Math.min(B,x),O),N=B+u,n&&!f&&(r._stacks[t.axis]._visualValues[a]=t.getValueForPixel(N)-t.getValueForPixel(B))}if(B===t.getPixelForValue(c)){const m=ve(u)*t.getLineWidthForValue(c)/2;B+=m,u-=m}return{size:u,base:B,head:N,center:N+u/2}}_calculateBarIndexPixels(e,t){const n=t.scale,a=this.options,s=a.skipNull,o=Q(a.maxBarThickness,1/0);let c,r;if(t.grouped){const d=s?this._getStackCount(e):t.stackCount,f=a.barThickness==="flex"?Yl(e,t,a,d):Ul(e,t,a,d),l=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);c=f.start+f.chunk*l+f.chunk/2,r=Math.min(o,f.chunk*f.ratio)}else c=n.getPixelForValue(this.getParsed(e)[n.axis],e),r=Math.min(o,t.min*t.ratio);return{base:c-r/2,head:c+r/2,center:c,size:r}}draw(){const e=this._cachedMeta,t=e.vScale,n=e.data,a=n.length;let s=0;for(;s<a;++s)this.getParsed(s)[t.axis]!==null&&n[s].draw(this._ctx)}}C(Li,"id","bar"),C(Li,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),C(Li,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ki extends Ce{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,a){const s=super.parsePrimitiveData(e,t,n,a);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+n).radius;return s}parseArrayData(e,t,n,a){const s=super.parseArrayData(e,t,n,a);for(let o=0;o<s.length;o++){const c=t[n+o];s[o]._custom=Q(c[2],this.resolveDataElementOptions(o+n).radius)}return s}parseObjectData(e,t,n,a){const s=super.parseObjectData(e,t,n,a);for(let o=0;o<s.length;o++){const c=t[n+o];s[o]._custom=Q(c&&c.r&&+c.r,this.resolveDataElementOptions(o+n).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),c=a.getLabelForValue(o.x),r=s.getLabelForValue(o.y),d=o._custom;return{label:n[e]||"",value:"("+c+", "+r+(d?", "+d:"")+")"}}update(e){const t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c}=this._cachedMeta,{sharedOptions:r,includeOptions:d}=this._getSharedOptions(t,a),f=o.axis,l=c.axis;for(let h=t;h<t+n;h++){const g=e[h],N=!s&&this.getParsed(h),u={},b=u[f]=s?o.getPixelForDecimal(.5):o.getPixelForValue(N[f]),B=u[l]=s?c.getBasePixel():c.getPixelForValue(N[l]);u.skip=isNaN(b)||isNaN(B),d&&(u.options=r||this.resolveDataElementOptions(h,g.active?"active":a),s&&(u.options.radius=0)),this.updateElement(g,h,u,a)}}resolveDataElementOptions(e,t){const n=this.getParsed(e);let a=super.resolveDataElementOptions(e,t);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return t!=="active"&&(a.radius=0),a.radius+=Q(n&&n._custom,s),a}}C(Ki,"id","bubble"),C(Ki,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),C(Ki,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function nh(i,e,t){let n=1,a=1,s=0,o=0;if(e<T){const c=i,r=c+e,d=Math.cos(c),f=Math.sin(c),l=Math.cos(r),h=Math.sin(r),g=(D,O,x)=>fi(D,c,r,!0)?1:Math.max(O,O*t,x,x*t),N=(D,O,x)=>fi(D,c,r,!0)?-1:Math.min(O,O*t,x,x*t),u=g(0,d,l),b=g($,f,h),B=N(W,d,l),m=N(W+$,f,h);n=(u-B)/2,a=(b-m)/2,s=-(u+B)/2,o=-(b+m)/2}return{ratioX:n,ratioY:a,offsetX:s,offsetY:o}}class lt extends Ce{constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){const n=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=n;else{let s=r=>+n[r];if(R(n[e])){const{key:r="value"}=this._parsing;s=d=>+Xe(n[d],r)}let o,c;for(o=e,c=e+t;o<c;++o)a._parsed[o]=s(o)}}_getRotation(){return Ve(this.options.rotation-90)}_getCircumference(){return Ve(this.options.circumference)}_getRotationExtents(){let e=T,t=-T;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const a=this.chart.getDatasetMeta(n).controller,s=a._getRotation(),o=a._getCircumference();e=Math.min(e,s),t=Math.max(t,s+o)}return{rotation:e,circumference:t-e}}update(e){const t=this.chart,{chartArea:n}=t,a=this._cachedMeta,s=a.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,c=Math.max((Math.min(n.width,n.height)-o)/2,0),r=Math.min(m4(this.options.cutout,c),1),d=this._getRingWeight(this.index),{circumference:f,rotation:l}=this._getRotationExtents(),{ratioX:h,ratioY:g,offsetX:N,offsetY:u}=nh(l,f,r),b=(n.width-o)/h,B=(n.height-o)/g,m=Math.max(Math.min(b,B)/2,0),D=uc(this.options.radius,m),O=Math.max(D*r,0),x=(D-O)/this._getVisibleDatasetWeightTotal();this.offsetX=N*D,this.offsetY=u*D,a.total=this.calculateTotal(),this.outerRadius=D-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*d,0),this.updateElements(s,0,s.length,e)}_circumference(e,t){const n=this.options,a=this._cachedMeta,s=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*s/T)}updateElements(e,t,n,a){const s=a==="reset",o=this.chart,c=o.chartArea,d=o.options.animation,f=(c.left+c.right)/2,l=(c.top+c.bottom)/2,h=s&&d.animateScale,g=h?0:this.innerRadius,N=h?0:this.outerRadius,{sharedOptions:u,includeOptions:b}=this._getSharedOptions(t,a);let B=this._getRotation(),m;for(m=0;m<t;++m)B+=this._circumference(m,s);for(m=t;m<t+n;++m){const D=this._circumference(m,s),O=e[m],x={x:f+this.offsetX,y:l+this.offsetY,startAngle:B,endAngle:B+D,circumference:D,outerRadius:N,innerRadius:g};b&&(x.options=u||this.resolveDataElementOptions(m,O.active?"active":a)),B+=D,this.updateElement(O,m,x,a)}}calculateTotal(){const e=this._cachedMeta,t=e.data;let n=0,a;for(a=0;a<t.length;a++){const s=e._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!t[a].hidden&&(n+=Math.abs(s))}return n}calculateCircumference(e){const t=this._cachedMeta.total;return t>0&&!isNaN(e)?T*(Math.abs(e)/t):0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=xi(t._parsed[e],n.options.locale);return{label:a[e]||"",value:s}}getMaxBorderWidth(e){let t=0;const n=this.chart;let a,s,o,c,r;if(!e){for(a=0,s=n.data.datasets.length;a<s;++a)if(n.isDatasetVisible(a)){o=n.getDatasetMeta(a),e=o.data,c=o.controller;break}}if(!e)return 0;for(a=0,s=e.length;a<s;++a)r=c.resolveDataElementOptions(a),r.borderAlign!=="inner"&&(t=Math.max(t,r.borderWidth||0,r.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,a=e.length;n<a;++n){const s=this.resolveDataElementOptions(n);t=Math.max(t,s.offset||0,s.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(Q(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}C(lt,"id","doughnut"),C(lt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),C(lt,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),C(lt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,o)=>{const r=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}});class zi extends Ce{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:a=[],_dataset:s}=t,o=this.chart._animationsDisabled;let{start:c,count:r}=Vc(t,a,o);this._drawStart=c,this._drawCount=r,Cc(t)&&(c=0,r=a.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!s._decimated,n.points=a;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:d},e),this.updateElements(a,c,r,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c,_stacked:r,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:l}=this._getSharedOptions(t,a),h=o.axis,g=c.axis,{spanGaps:N,segment:u}=this.options,b=St(N)?N:Number.POSITIVE_INFINITY,B=this.chart._animationsDisabled||s||a==="none",m=t+n,D=e.length;let O=t>0&&this.getParsed(t-1);for(let x=0;x<D;++x){const A=e[x],y=B?A:{};if(x<t||x>=m){y.skip=!0;continue}const V=this.getParsed(x),G=L(V[g]),_=y[h]=o.getPixelForValue(V[h],x),w=y[g]=s||G?c.getBasePixel():c.getPixelForValue(r?this.applyStack(c,V,r):V[g],x);y.skip=isNaN(_)||isNaN(w)||G,y.stop=x>0&&Math.abs(V[h]-O[h])>b,u&&(y.parsed=V,y.raw=d.data[x]),l&&(y.options=f||this.resolveDataElementOptions(x,A.active?"active":a)),B||this.updateElement(A,x,y,a),O=V}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,a=e.data||[];if(!a.length)return n;const s=a[0].size(this.resolveDataElementOptions(0)),o=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(n,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}C(zi,"id","line"),C(zi,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),C(zi,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ti extends Ce{constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=xi(t._parsed[e].r,n.options.locale);return{label:a[e]||"",value:s}}parseObjectData(e,t,n,a){return wc.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){const e=this._cachedMeta,t={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((n,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<t.min&&(t.min=s),s>t.max&&(t.max=s))}),t}_updateRadius(){const e=this.chart,t=e.chartArea,n=e.options,a=Math.min(t.right-t.left,t.bottom-t.top),s=Math.max(a/2,0),o=Math.max(n.cutoutPercentage?s/100*n.cutoutPercentage:1,0),c=(s-o)/e.getVisibleDatasetCount();this.outerRadius=s-c*this.index,this.innerRadius=this.outerRadius-c}updateElements(e,t,n,a){const s=a==="reset",o=this.chart,r=o.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,l=d.yCenter,h=d.getIndexAngle(0)-.5*W;let g=h,N;const u=360/this.countVisibleElements();for(N=0;N<t;++N)g+=this._computeAngle(N,a,u);for(N=t;N<t+n;N++){const b=e[N];let B=g,m=g+this._computeAngle(N,a,u),D=o.getDataVisibility(N)?d.getDistanceFromCenterForValue(this.getParsed(N).r):0;g=m,s&&(r.animateScale&&(D=0),r.animateRotate&&(B=m=h));const O={x:f,y:l,innerRadius:0,outerRadius:D,startAngle:B,endAngle:m,options:this.resolveDataElementOptions(N,b.active?"active":a)};this.updateElement(b,N,O,a)}}countVisibleElements(){const e=this._cachedMeta;let t=0;return e.data.forEach((n,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?Ve(this.resolveDataElementOptions(e,t).angle||n):0}}C(ti,"id","polarArea"),C(ti,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),C(ti,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,o)=>{const r=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class jn extends lt{}C(jn,"id","pie"),C(jn,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ii extends Ce{getLabelAndValue(e){const t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:""+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,a){return wc.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta,n=t.dataset,a=t.data||[],s=t.iScale.getLabels();if(n.points=a,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const c={_loop:!0,_fullLoop:s.length===a.length,options:o};this.updateElement(n,void 0,c,e)}this.updateElements(a,0,a.length,e)}updateElements(e,t,n,a){const s=this._cachedMeta.rScale,o=a==="reset";for(let c=t;c<t+n;c++){const r=e[c],d=this.resolveDataElementOptions(c,r.active?"active":a),f=s.getPointPositionForValue(c,this.getParsed(c).r),l=o?s.xCenter:f.x,h=o?s.yCenter:f.y,g={x:l,y:h,angle:f.angle,skip:isNaN(l)||isNaN(h),options:d};this.updateElement(r,c,g,a)}}}C(Ii,"id","radar"),C(Ii,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),C(Ii,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Fi extends Ce{getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),c=a.getLabelForValue(o.x),r=s.getLabelForValue(o.y);return{label:n[e]||"",value:"("+c+", "+r+")"}}update(e){const t=this._cachedMeta,{data:n=[]}=t,a=this.chart._animationsDisabled;let{start:s,count:o}=Vc(t,n,a);if(this._drawStart=s,this._drawCount=o,Cc(t)&&(s=0,o=n.length),this.options.showLine){const{dataset:c,_dataset:r}=t;c._chart=this.chart,c._datasetIndex=this.index,c._decimated=!!r._decimated,c.points=n;const d=this.resolveDatasetElementOptions(e);d.segment=this.options.segment,this.updateElement(c,void 0,{animated:!a,options:d},e)}this.updateElements(n,s,o,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c,_stacked:r,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(t,a),l=this.getSharedOptions(f),h=this.includeOptions(a,l),g=o.axis,N=c.axis,{spanGaps:u,segment:b}=this.options,B=St(u)?u:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||a==="none";let D=t>0&&this.getParsed(t-1);for(let O=t;O<t+n;++O){const x=e[O],A=this.getParsed(O),y=m?x:{},V=L(A[N]),G=y[g]=o.getPixelForValue(A[g],O),_=y[N]=s||V?c.getBasePixel():c.getPixelForValue(r?this.applyStack(c,A,r):A[N],O);y.skip=isNaN(G)||isNaN(_)||V,y.stop=O>0&&Math.abs(A[g]-D[g])>B,b&&(y.parsed=A,y.raw=d.data[O]),h&&(y.options=l||this.resolveDataElementOptions(O,x.active?"active":a)),m||this.updateElement(x,O,y,a),D=A}this.updateSharedOptions(l,a,f)}getMaxOverflow(){const e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let c=0;for(let r=t.length-1;r>=0;--r)c=Math.max(c,t[r].size(this.resolveDataElementOptions(r))/2);return c>0&&c}const n=e.dataset,a=n.options&&n.options.borderWidth||0;if(!t.length)return a;const s=t[0].size(this.resolveDataElementOptions(0)),o=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(a,s,o)/2}}C(Fi,"id","scatter"),C(Fi,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),C(Fi,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var ah=Object.freeze({__proto__:null,BarController:Li,BubbleController:Ki,DoughnutController:lt,LineController:zi,PieController:jn,PolarAreaController:ti,RadarController:Ii,ScatterController:Fi});function ot(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class _a{constructor(e){C(this,"options");this.options=e||{}}static override(e){Object.assign(_a.prototype,e)}init(){}formats(){return ot()}parse(){return ot()}format(){return ot()}add(){return ot()}diff(){return ot()}startOf(){return ot()}endOf(){return ot()}}var sh={_date:_a};function oh(i,e,t,n){const{controller:a,data:s,_sorted:o}=i,c=a._cachedMeta.iScale;if(c&&e===c.axis&&e!=="r"&&o&&s.length){const r=c._reversePixels?v4:Le;if(n){if(a._sharedOptions){const d=s[0],f=typeof d.getRange=="function"&&d.getRange(e);if(f){const l=r(s,e,t-f),h=r(s,e,t+f);return{lo:l.lo,hi:h.hi}}}}else return r(s,e,t)}return{lo:0,hi:s.length-1}}function pi(i,e,t,n,a){const s=i.getSortedVisibleDatasetMetas(),o=t[e];for(let c=0,r=s.length;c<r;++c){const{index:d,data:f}=s[c],{lo:l,hi:h}=oh(s[c],e,o,a);for(let g=l;g<=h;++g){const N=f[g];N.skip||n(N,d,g)}}}function ch(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,a){const s=e?Math.abs(n.x-a.x):0,o=t?Math.abs(n.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Gn(i,e,t,n,a){const s=[];return!a&&!i.isPointInArea(e)||pi(i,t,e,function(c,r,d){!a&&!Ke(c,i.chartArea,0)||c.inRange(e.x,e.y,n)&&s.push({element:c,datasetIndex:r,index:d})},!0),s}function rh(i,e,t,n){let a=[];function s(o,c,r){const{startAngle:d,endAngle:f}=o.getProps(["startAngle","endAngle"],n),{angle:l}=Bc(o,{x:e.x,y:e.y});fi(l,d,f)&&a.push({element:o,datasetIndex:c,index:r})}return pi(i,t,e,s),a}function dh(i,e,t,n,a,s){let o=[];const c=ch(t);let r=Number.POSITIVE_INFINITY;function d(f,l,h){const g=f.inRange(e.x,e.y,a);if(n&&!g)return;const N=f.getCenterPoint(a);if(!(!!s||i.isPointInArea(N))&&!g)return;const b=c(e,N);b<r?(o=[{element:f,datasetIndex:l,index:h}],r=b):b===r&&o.push({element:f,datasetIndex:l,index:h})}return pi(i,t,e,d),o}function _n(i,e,t,n,a,s){return!s&&!i.isPointInArea(e)?[]:t==="r"&&!n?rh(i,e,t,a):dh(i,e,t,n,a,s)}function Gs(i,e,t,n,a){const s=[],o=t==="x"?"inXRange":"inYRange";let c=!1;return pi(i,t,e,(r,d,f)=>{r[o](e[t],a)&&(s.push({element:r,datasetIndex:d,index:f}),c=c||r.inRange(e.x,e.y,a))}),n&&!c?[]:s}var fh={evaluateInteractionItems:pi,modes:{index(i,e,t,n){const a=dt(e,i),s=t.axis||"x",o=t.includeInvisible||!1,c=t.intersect?Gn(i,a,s,n,o):_n(i,a,s,!1,n,o),r=[];return c.length?(i.getSortedVisibleDatasetMetas().forEach(d=>{const f=c[0].index,l=d.data[f];l&&!l.skip&&r.push({element:l,datasetIndex:d.index,index:f})}),r):[]},dataset(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;let c=t.intersect?Gn(i,a,s,n,o):_n(i,a,s,!1,n,o);if(c.length>0){const r=c[0].datasetIndex,d=i.getDatasetMeta(r).data;c=[];for(let f=0;f<d.length;++f)c.push({element:d[f],datasetIndex:r,index:f})}return c},point(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;return Gn(i,a,s,n,o)},nearest(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;return _n(i,a,s,t.intersect,n,o)},x(i,e,t,n){const a=dt(e,i);return Gs(i,a,"x",t.intersect,n)},y(i,e,t,n){const a=dt(e,i);return Gs(i,a,"y",t.intersect,n)}}};const Tc=["left","top","right","bottom"];function Kt(i,e){return i.filter(t=>t.pos===e)}function _s(i,e){return i.filter(t=>Tc.indexOf(t.pos)===-1&&t.box.axis===e)}function zt(i,e){return i.sort((t,n)=>{const a=e?n:t,s=e?t:n;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function lh(i){const e=[];let t,n,a,s,o,c;for(t=0,n=(i||[]).length;t<n;++t)a=i[t],{position:s,options:{stack:o,stackWeight:c=1}}=a,e.push({index:t,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:o&&s+o,stackWeight:c});return e}function hh(i){const e={};for(const t of i){const{stack:n,pos:a,stackWeight:s}=t;if(!n||!Tc.includes(a))continue;const o=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function Nh(i,e){const t=hh(i),{vBoxMaxWidth:n,hBoxMaxHeight:a}=e;let s,o,c;for(s=0,o=i.length;s<o;++s){c=i[s];const{fullSize:r}=c.box,d=t[c.stack],f=d&&c.stackWeight/d.weight;c.horizontal?(c.width=f?f*n:r&&e.availableWidth,c.height=a):(c.width=n,c.height=f?f*a:r&&e.availableHeight)}return t}function gh(i){const e=lh(i),t=zt(e.filter(d=>d.box.fullSize),!0),n=zt(Kt(e,"left"),!0),a=zt(Kt(e,"right")),s=zt(Kt(e,"top"),!0),o=zt(Kt(e,"bottom")),c=_s(e,"x"),r=_s(e,"y");return{fullSize:t,leftAndTop:n.concat(s),rightAndBottom:a.concat(r).concat(o).concat(c),chartArea:Kt(e,"chartArea"),vertical:n.concat(a).concat(r),horizontal:s.concat(o).concat(c)}}function ws(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Hc(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function uh(i,e,t,n){const{pos:a,box:s}=t,o=i.maxPadding;if(!R(a)){t.size&&(i[a]-=t.size);const l=n[t.stack]||{size:0,count:1};l.size=Math.max(l.size,t.horizontal?s.height:s.width),t.size=l.size/l.count,i[a]+=t.size}s.getPadding&&Hc(o,s.getPadding());const c=Math.max(0,e.outerWidth-ws(o,i,"left","right")),r=Math.max(0,e.outerHeight-ws(o,i,"top","bottom")),d=c!==i.w,f=r!==i.h;return i.w=c,i.h=r,t.horizontal?{same:d,other:f}:{same:f,other:d}}function bh(i){const e=i.maxPadding;function t(n){const a=Math.max(e[n]-i[n],0);return i[n]+=a,a}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function mh(i,e){const t=e.maxPadding;function n(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(o=>{s[o]=Math.max(e[o],t[o])}),s}return n(i?["left","right"]:["top","bottom"])}function $t(i,e,t,n){const a=[];let s,o,c,r,d,f;for(s=0,o=i.length,d=0;s<o;++s){c=i[s],r=c.box,r.update(c.width||e.w,c.height||e.h,mh(c.horizontal,e));const{same:l,other:h}=uh(e,t,c,n);d|=l&&a.length,f=f||h,r.fullSize||a.push(c)}return d&&$t(a,e,t,n)||f}function Gi(i,e,t,n,a){i.top=t,i.left=e,i.right=e+n,i.bottom=t+a,i.width=n,i.height=a}function Ms(i,e,t,n){const a=t.padding;let{x:s,y:o}=e;for(const c of i){const r=c.box,d=n[c.stack]||{count:1,placed:0,weight:1},f=c.stackWeight/d.weight||1;if(c.horizontal){const l=e.w*f,h=d.size||r.height;di(d.start)&&(o=d.start),r.fullSize?Gi(r,a.left,o,t.outerWidth-a.right-a.left,h):Gi(r,e.left+d.placed,o,l,h),d.start=o,d.placed+=l,o=r.bottom}else{const l=e.h*f,h=d.size||r.width;di(d.start)&&(s=d.start),r.fullSize?Gi(r,s,a.top,h,t.outerHeight-a.bottom-a.top):Gi(r,s,e.top+d.placed,h,l),d.start=s,d.placed+=l,s=r.right}}e.x=s,e.y=o}var oe={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const a=ce(i.options.layout.padding),s=Math.max(e-a.width,0),o=Math.max(t-a.height,0),c=gh(i.boxes),r=c.vertical,d=c.horizontal;K(i.boxes,u=>{typeof u.beforeLayout=="function"&&u.beforeLayout()});const f=r.reduce((u,b)=>b.box.options&&b.box.options.display===!1?u:u+1,0)||1,l=Object.freeze({outerWidth:e,outerHeight:t,padding:a,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/f,hBoxMaxHeight:o/2}),h=Object.assign({},a);Hc(h,ce(n));const g=Object.assign({maxPadding:h,w:s,h:o,x:a.left,y:a.top},a),N=Nh(r.concat(d),l);$t(c.fullSize,g,l,N),$t(r,g,l,N),$t(d,g,l,N)&&$t(r,g,l,N),bh(g),Ms(c.leftAndTop,g,l,N),g.x+=g.w,g.y+=g.h,Ms(c.rightAndBottom,g,l,N),i.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},K(c.chartArea,u=>{const b=u.box;Object.assign(b,i.chartArea),b.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class Wc{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,a){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,a?Math.floor(t/a):n)}}isAttached(e){return!0}updateConfig(e){}}class Bh extends Wc{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ti="$chartjs",xh={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ps=i=>i===null||i==="";function ph(i,e){const t=i.style,n=i.getAttribute("height"),a=i.getAttribute("width");if(i[Ti]={initial:{height:n,width:a,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",Ps(a)){const s=bs(i,"width");s!==void 0&&(i.width=s)}if(Ps(n))if(i.style.height==="")i.height=i.width/(e||2);else{const s=bs(i,"height");s!==void 0&&(i.height=s)}return i}const jc=Ol?{passive:!0}:!1;function Dh(i,e,t){i.addEventListener(e,t,jc)}function Oh(i,e,t){i.canvas.removeEventListener(e,t,jc)}function Vh(i,e){const t=xh[i.type]||i.type,{x:n,y:a}=dt(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:a!==void 0?a:null}}function sn(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function Ch(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let o=!1;for(const c of s)o=o||sn(c.addedNodes,n),o=o&&!sn(c.removedNodes,n);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}function yh(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let o=!1;for(const c of s)o=o||sn(c.removedNodes,n),o=o&&!sn(c.addedNodes,n);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}const hi=new Map;let Qs=0;function $c(){const i=window.devicePixelRatio;i!==Qs&&(Qs=i,hi.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function Ah(i,e){hi.size||window.addEventListener("resize",$c),hi.set(i,e)}function Sh(i){hi.delete(i),hi.size||window.removeEventListener("resize",$c)}function kh(i,e,t){const n=i.canvas,a=n&&Ga(n);if(!a)return;const s=Oc((c,r)=>{const d=a.clientWidth;t(c,r),d<a.clientWidth&&t()},window),o=new ResizeObserver(c=>{const r=c[0],d=r.contentRect.width,f=r.contentRect.height;d===0&&f===0||s(d,f)});return o.observe(a),Ah(i,s),o}function wn(i,e,t){t&&t.disconnect(),e==="resize"&&Sh(i)}function vh(i,e,t){const n=i.canvas,a=Oc(s=>{i.ctx!==null&&t(Vh(s,i))},i);return Dh(n,e,a),a}class Gh extends Wc{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(ph(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[Ti])return!1;const n=t[Ti].initial;["height","width"].forEach(s=>{const o=n[s];L(o)?t.removeAttribute(s):t.setAttribute(s,o)});const a=n.style||{};return Object.keys(a).forEach(s=>{t.style[s]=a[s]}),t.width=t.width,delete t[Ti],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const a=e.$proxies||(e.$proxies={}),o={attach:Ch,detach:yh,resize:kh}[t]||vh;a[t]=o(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),a=n[t];if(!a)return;({attach:wn,detach:wn,resize:wn}[t]||Oh)(e,t,a),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,a){return Dl(e,t,n,a)}isAttached(e){const t=Ga(e);return!!(t&&t.isConnected)}}function _h(i){return!Pc()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Bh:Gh}class ye{constructor(){C(this,"x");C(this,"y");C(this,"active",!1);C(this,"options");C(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return St(this.x)&&St(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const a={};return e.forEach(s=>{a[s]=n[s]&&n[s].active()?n[s]._to:this[s]}),a}}C(ye,"defaults",{}),C(ye,"defaultRoutes");function wh(i,e){const t=i.options.ticks,n=Mh(i),a=Math.min(t.maxTicksLimit||n,n),s=t.major.enabled?Qh(e):[],o=s.length,c=s[0],r=s[o-1],d=[];if(o>a)return Eh(e,d,s,o/a),d;const f=Ph(s,e,a);if(o>0){let l,h;const g=o>1?Math.round((r-c)/(o-1)):null;for(_i(e,d,f,L(g)?0:c-g,c),l=0,h=o-1;l<h;l++)_i(e,d,f,s[l],s[l+1]);return _i(e,d,f,r,L(g)?e.length:r+g),d}return _i(e,d,f),d}function Mh(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),a=i._maxLength/t;return Math.floor(Math.min(n,a))}function Ph(i,e,t){const n=Rh(i),a=e.length/t;if(!n)return Math.max(a,1);const s=y4(n);for(let o=0,c=s.length-1;o<c;o++){const r=s[o];if(r>a)return r}return Math.max(a,1)}function Qh(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function Eh(i,e,t,n){let a=0,s=t[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===s&&(e.push(i[o]),a++,s=t[a*n])}function _i(i,e,t,n,a){const s=Q(n,0),o=Math.min(Q(a,i.length),i.length);let c=0,r,d,f;for(t=Math.ceil(t),a&&(r=a-n,t=r/Math.floor(r/t)),f=s;f<0;)c++,f=Math.round(s+c*t);for(d=Math.max(s,0);d<o;d++)d===f&&(e.push(i[d]),c++,f=Math.round(s+c*t))}function Rh(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const Lh=i=>i==="left"?"right":i==="right"?"left":i,Es=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,Rs=(i,e)=>Math.min(e||i,i);function Ls(i,e){const t=[],n=i.length/e,a=i.length;let s=0;for(;s<a;s+=n)t.push(i[Math.floor(s)]);return t}function Kh(i,e,t){const n=i.ticks.length,a=Math.min(e,n-1),s=i._startPixel,o=i._endPixel,c=1e-6;let r=i.getPixelForTick(a),d;if(!(t&&(n===1?d=Math.max(r-s,o-r):e===0?d=(i.getPixelForTick(1)-r)/2:d=(r-i.getPixelForTick(a-1))/2,r+=a<e?d:-d,r<s-c||r>o+c)))return r}function zh(i,e){K(i,t=>{const n=t.gc,a=n.length/2;let s;if(a>e){for(s=0;s<a;++s)delete t.data[n[s]];n.splice(0,a)}})}function It(i){return i.drawTicks?i.tickLength:0}function Ks(i,e){if(!i.display)return 0;const t=Z(i.font,e),n=ce(i.padding);return(F(i.text)?i.text.length:1)*t.lineHeight+n.height}function Ih(i,e){return nt(i,{scale:e,type:"scale"})}function Fh(i,e,t){return nt(i,{tick:t,index:e,type:"tick"})}function Th(i,e,t){let n=Ca(i);return(t&&e!=="right"||!t&&e==="right")&&(n=Lh(n)),n}function Hh(i,e,t,n){const{top:a,left:s,bottom:o,right:c,chart:r}=i,{chartArea:d,scales:f}=r;let l=0,h,g,N;const u=o-a,b=c-s;if(i.isHorizontal()){if(g=se(n,s,c),R(t)){const B=Object.keys(t)[0],m=t[B];N=f[B].getPixelForValue(m)+u-e}else t==="center"?N=(d.bottom+d.top)/2+u-e:N=Es(i,t,e);h=c-s}else{if(R(t)){const B=Object.keys(t)[0],m=t[B];g=f[B].getPixelForValue(m)-b+e}else t==="center"?g=(d.left+d.right)/2-b+e:g=Es(i,t,e);N=se(n,o,a),l=t==="left"?-$:$}return{titleX:g,titleY:N,maxWidth:h,rotation:l}}class pt extends ye{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:a}=this;return e=ue(e,Number.POSITIVE_INFINITY),t=ue(t,Number.NEGATIVE_INFINITY),n=ue(n,Number.POSITIVE_INFINITY),a=ue(a,Number.NEGATIVE_INFINITY),{min:ue(e,n),max:ue(t,a),minDefined:j(e),maxDefined:j(t)}}getMinMax(e){let{min:t,max:n,minDefined:a,maxDefined:s}=this.getUserBounds(),o;if(a&&s)return{min:t,max:n};const c=this.getMatchingVisibleMetas();for(let r=0,d=c.length;r<d;++r)o=c[r].controller.getMinMax(this,e),a||(t=Math.min(t,o.min)),s||(n=Math.max(n,o.max));return t=s&&t>n?n:t,n=a&&t>n?t:n,{min:ue(t,ue(n,t)),max:ue(n,ue(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){I(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:a,grace:s,ticks:o}=this.options,c=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=J4(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=c<this.ticks.length;this._convertTicksToLabels(r?Ls(this.ticks,c):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=wh(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){I(this.options.afterUpdate,[this])}beforeSetDimensions(){I(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){I(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),I(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){I(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,a,s;for(n=0,a=e.length;n<a;n++)s=e[n],s.label=I(t.callback,[s.value,n,e],this)}afterTickToLabelConversion(){I(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){I(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=Rs(this.ticks.length,e.ticks.maxTicksLimit),a=t.minRotation||0,s=t.maxRotation;let o=a,c,r,d;if(!this._isVisible()||!t.display||a>=s||n<=1||!this.isHorizontal()){this.labelRotation=a;return}const f=this._getLabelSizes(),l=f.widest.width,h=f.highest.height,g=ee(this.chart.width-l,0,this.maxWidth);c=e.offset?this.maxWidth/n:g/(n-1),l+6>c&&(c=g/(n-(e.offset?.5:1)),r=this.maxHeight-It(e.grid)-t.padding-Ks(e.title,this.chart.options.font),d=Math.sqrt(l*l+h*h),o=Oa(Math.min(Math.asin(ee((f.highest.height+6)/c,-1,1)),Math.asin(ee(r/d,-1,1))-Math.asin(ee(h/d,-1,1)))),o=Math.max(a,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){I(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){I(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:a,grid:s}}=this,o=this._isVisible(),c=this.isHorizontal();if(o){const r=Ks(a,t.options.font);if(c?(e.width=this.maxWidth,e.height=It(s)+r):(e.height=this.maxHeight,e.width=It(s)+r),n.display&&this.ticks.length){const{first:d,last:f,widest:l,highest:h}=this._getLabelSizes(),g=n.padding*2,N=Ve(this.labelRotation),u=Math.cos(N),b=Math.sin(N);if(c){const B=n.mirror?0:b*l.width+u*h.height;e.height=Math.min(this.maxHeight,e.height+B+g)}else{const B=n.mirror?0:u*l.width+b*h.height;e.width=Math.min(this.maxWidth,e.width+B+g)}this._calculatePadding(d,f,b,u)}}this._handleMargins(),c?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,a){const{ticks:{align:s,padding:o},position:c}=this.options,r=this.labelRotation!==0,d=c!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,g=0;r?d?(h=a*e.width,g=n*t.height):(h=n*e.height,g=a*t.width):s==="start"?g=t.width:s==="end"?h=e.width:s!=="inner"&&(h=e.width/2,g=t.width/2),this.paddingLeft=Math.max((h-f+o)*this.width/(this.width-f),0),this.paddingRight=Math.max((g-l+o)*this.width/(this.width-l),0)}else{let f=t.height/2,l=e.height/2;s==="start"?(f=0,l=e.height):s==="end"&&(f=t.height,l=0),this.paddingTop=f+o,this.paddingBottom=l+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){I(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)L(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=Ls(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:a,_longestTextCache:s}=this,o=[],c=[],r=Math.floor(t/Rs(t,n));let d=0,f=0,l,h,g,N,u,b,B,m,D,O,x;for(l=0;l<t;l+=r){if(N=e[l].label,u=this._resolveTickFontOptions(l),a.font=b=u.string,B=s[b]=s[b]||{data:{},gc:[]},m=u.lineHeight,D=O=0,!L(N)&&!F(N))D=nn(a,B.data,B.gc,D,N),O=m;else if(F(N))for(h=0,g=N.length;h<g;++h)x=N[h],!L(x)&&!F(x)&&(D=nn(a,B.data,B.gc,D,x),O+=m);o.push(D),c.push(O),d=Math.max(D,d),f=Math.max(O,f)}zh(s,t);const A=o.indexOf(d),y=c.indexOf(f),V=G=>({width:o[G]||0,height:c[G]||0});return{first:V(0),last:V(t-1),widest:V(A),highest:V(y),widths:o,heights:c}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return k4(this._alignToPixels?st(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=Fh(this.getContext(),e,n))}return this.$context||(this.$context=Ih(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Ve(this.labelRotation),n=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,c=s?s.widest.width+o:0,r=s?s.highest.height+o:0;return this.isHorizontal()?r*n>c*a?c/n:r/a:r*a<c*n?r/n:c/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,a=this.options,{grid:s,position:o,border:c}=a,r=s.offset,d=this.isHorizontal(),l=this.ticks.length+(r?1:0),h=It(s),g=[],N=c.setContext(this.getContext()),u=N.display?N.width:0,b=u/2,B=function(H){return st(n,H,u)};let m,D,O,x,A,y,V,G,_,w,E,te;if(o==="top")m=B(this.bottom),y=this.bottom-h,G=m-b,w=B(e.top)+b,te=e.bottom;else if(o==="bottom")m=B(this.top),w=e.top,te=B(e.bottom)-b,y=m+b,G=this.top+h;else if(o==="left")m=B(this.right),A=this.right-h,V=m-b,_=B(e.left)+b,E=e.right;else if(o==="right")m=B(this.left),_=e.left,E=B(e.right)-b,A=m+b,V=this.left+h;else if(t==="x"){if(o==="center")m=B((e.top+e.bottom)/2+.5);else if(R(o)){const H=Object.keys(o)[0],U=o[H];m=B(this.chart.scales[H].getPixelForValue(U))}w=e.top,te=e.bottom,y=m+b,G=y+h}else if(t==="y"){if(o==="center")m=B((e.left+e.right)/2);else if(R(o)){const H=Object.keys(o)[0],U=o[H];m=B(this.chart.scales[H].getPixelForValue(U))}A=m-b,V=A-h,_=e.left,E=e.right}const he=Q(a.ticks.maxTicksLimit,l),z=Math.max(1,Math.ceil(l/he));for(D=0;D<l;D+=z){const H=this.getContext(D),U=s.setContext(H),De=c.setContext(H),ie=U.lineWidth,Dt=U.color,Di=De.dash||[],Ot=De.dashOffset,Gt=U.tickWidth,_t=U.tickColor,wt=U.tickBorderDash||[],Mt=U.tickBorderDashOffset;O=Kh(this,D,r),O!==void 0&&(x=st(n,O,ie),d?A=V=_=E=x:y=G=w=te=x,g.push({tx1:A,ty1:y,tx2:V,ty2:G,x1:_,y1:w,x2:E,y2:te,width:ie,color:Dt,borderDash:Di,borderDashOffset:Ot,tickWidth:Gt,tickColor:_t,tickBorderDash:wt,tickBorderDashOffset:Mt}))}return this._ticksLength=l,this._borderValue=m,g}_computeLabelItems(e){const t=this.axis,n=this.options,{position:a,ticks:s}=n,o=this.isHorizontal(),c=this.ticks,{align:r,crossAlign:d,padding:f,mirror:l}=s,h=It(n.grid),g=h+f,N=l?-f:g,u=-Ve(this.labelRotation),b=[];let B,m,D,O,x,A,y,V,G,_,w,E,te="middle";if(a==="top")A=this.bottom-N,y=this._getXAxisLabelAlignment();else if(a==="bottom")A=this.top+N,y=this._getXAxisLabelAlignment();else if(a==="left"){const z=this._getYAxisLabelAlignment(h);y=z.textAlign,x=z.x}else if(a==="right"){const z=this._getYAxisLabelAlignment(h);y=z.textAlign,x=z.x}else if(t==="x"){if(a==="center")A=(e.top+e.bottom)/2+g;else if(R(a)){const z=Object.keys(a)[0],H=a[z];A=this.chart.scales[z].getPixelForValue(H)+g}y=this._getXAxisLabelAlignment()}else if(t==="y"){if(a==="center")x=(e.left+e.right)/2-g;else if(R(a)){const z=Object.keys(a)[0],H=a[z];x=this.chart.scales[z].getPixelForValue(H)}y=this._getYAxisLabelAlignment(h).textAlign}t==="y"&&(r==="start"?te="top":r==="end"&&(te="bottom"));const he=this._getLabelSizes();for(B=0,m=c.length;B<m;++B){D=c[B],O=D.label;const z=s.setContext(this.getContext(B));V=this.getPixelForTick(B)+s.labelOffset,G=this._resolveTickFontOptions(B),_=G.lineHeight,w=F(O)?O.length:1;const H=w/2,U=z.color,De=z.textStrokeColor,ie=z.textStrokeWidth;let Dt=y;o?(x=V,y==="inner"&&(B===m-1?Dt=this.options.reverse?"left":"right":B===0?Dt=this.options.reverse?"right":"left":Dt="center"),a==="top"?d==="near"||u!==0?E=-w*_+_/2:d==="center"?E=-he.highest.height/2-H*_+_:E=-he.highest.height+_/2:d==="near"||u!==0?E=_/2:d==="center"?E=he.highest.height/2-H*_:E=he.highest.height-w*_,l&&(E*=-1),u!==0&&!z.showLabelBackdrop&&(x+=_/2*Math.sin(u))):(A=V,E=(1-w)*_/2);let Di;if(z.showLabelBackdrop){const Ot=ce(z.backdropPadding),Gt=he.heights[B],_t=he.widths[B];let wt=E-Ot.top,Mt=0-Ot.left;switch(te){case"middle":wt-=Gt/2;break;case"bottom":wt-=Gt;break}switch(y){case"center":Mt-=_t/2;break;case"right":Mt-=_t;break}Di={left:Mt,top:wt,width:_t+Ot.width,height:Gt+Ot.height,color:z.backdropColor}}b.push({label:O,font:G,textOffset:E,options:{rotation:u,color:U,strokeColor:De,strokeWidth:ie,textAlign:Dt,textBaseline:te,translation:[x,A],backdrop:Di}})}return b}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Ve(this.labelRotation))return e==="top"?"left":"right";let a="center";return t.align==="start"?a="left":t.align==="end"?a="right":t.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:a,padding:s}}=this.options,o=this._getLabelSizes(),c=e+s,r=o.widest.width;let d,f;return t==="left"?a?(f=this.right+s,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f+=r)):(f=this.right-c,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f=this.left)):t==="right"?a?(f=this.left+s,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f-=r)):(f=this.left+c,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:a,width:s,height:o}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,a,s,o),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const a=this.ticks.findIndex(s=>s.value===e);return a>=0?t.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const c=(r,d,f)=>{!f.width||!f.color||(n.save(),n.lineWidth=f.width,n.strokeStyle=f.color,n.setLineDash(f.borderDash||[]),n.lineDashOffset=f.borderDashOffset,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(d.x,d.y),n.stroke(),n.restore())};if(t.display)for(s=0,o=a.length;s<o;++s){const r=a[s];t.drawOnChartArea&&c({x:r.x1,y:r.y1},{x:r.x2,y:r.y2},r),t.drawTicks&&c({x:r.tx1,y:r.ty1},{x:r.tx2,y:r.ty2},{color:r.tickColor,width:r.tickWidth,borderDash:r.tickBorderDash,borderDashOffset:r.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:a}}=this,s=n.setContext(this.getContext()),o=n.display?s.width:0;if(!o)return;const c=a.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let d,f,l,h;this.isHorizontal()?(d=st(e,this.left,o)-o/2,f=st(e,this.right,c)+c/2,l=h=r):(l=st(e,this.top,o)-o/2,h=st(e,this.bottom,c)+c/2,d=f=r),t.save(),t.lineWidth=s.width,t.strokeStyle=s.color,t.beginPath(),t.moveTo(d,l),t.lineTo(f,h),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,a=this._computeLabelArea();a&&ln(n,a);const s=this.getLabelItems(e);for(const o of s){const c=o.options,r=o.font,d=o.label,f=o.textOffset;mt(n,d,0,f,r,c)}a&&hn(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:a}}=this;if(!n.display)return;const s=Z(n.font),o=ce(n.padding),c=n.align;let r=s.lineHeight/2;t==="bottom"||t==="center"||R(t)?(r+=o.bottom,F(n.text)&&(r+=s.lineHeight*(n.text.length-1))):r+=o.top;const{titleX:d,titleY:f,maxWidth:l,rotation:h}=Hh(this,r,t,c);mt(e,n.text,0,0,s,{color:n.color,maxWidth:l,rotation:h,textAlign:Th(c,t,a),textBaseline:"middle",translation:[d,f]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=Q(e.grid&&e.grid.z,-1),a=Q(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==pt.prototype.draw?[{z:t,draw:s=>{this.draw(s)}}]:[{z:n,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:t,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",a=[];let s,o;for(s=0,o=t.length;s<o;++s){const c=t[s];c[n]===this.id&&(!e||c.type===e)&&a.push(c)}return a}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return Z(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class wi{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;$h(t)&&(n=this.register(t));const a=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in a||(a[s]=e,Wh(e,o,n),this.override&&q.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,a=this.scope;n in t&&delete t[n],a&&n in q[a]&&(delete q[a][n],this.override&&delete bt[n])}}function Wh(i,e,t){const n=ri(Object.create(null),[t?q.get(t):{},q.get(e),i.defaults]);q.set(e,n),i.defaultRoutes&&jh(e,i.defaultRoutes),i.descriptors&&q.describe(e,i.descriptors)}function jh(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),a=n.pop(),s=[i].concat(n).join("."),o=e[t].split("."),c=o.pop(),r=o.join(".");q.route(s,a,r,c)})}function $h(i){return"id"in i&&"defaults"in i}class qh{constructor(){this.controllers=new wi(Ce,"datasets",!0),this.elements=new wi(ye,"elements"),this.plugins=new wi(Object,"plugins"),this.scales=new wi(pt,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(a=>{const s=n||this._getRegistryForType(a);n||s.isForType(a)||s===this.plugins&&a.id?this._exec(e,s,a):K(a,o=>{const c=n||this._getRegistryForType(o);this._exec(e,c,o)})})}_exec(e,t,n){const a=Da(e);I(n["before"+a],[],n),t[e](n),I(n["after"+a],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const a=t.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return a}}var Se=new qh;class Uh{constructor(){this._init=[]}notify(e,t,n,a){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=a?this._descriptors(e).filter(a):this._descriptors(e),o=this._notify(s,e,t,n);return t==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,t,n,a){a=a||{};for(const s of e){const o=s.plugin,c=o[n],r=[t,a,s.options];if(I(c,r,o)===!1&&a.cancelable)return!1}return!0}invalidate(){L(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,a=Q(n.options&&n.options.plugins,{}),s=Yh(n);return a===!1&&!t?[]:Xh(e,s,a,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,a=(s,o)=>s.filter(c=>!o.some(r=>c.plugin.id===r.plugin.id));this._notify(a(t,n),e,"stop"),this._notify(a(n,t),e,"start")}}function Yh(i){const e={},t=[],n=Object.keys(Se.plugins.items);for(let s=0;s<n.length;s++)t.push(Se.getPlugin(n[s]));const a=i.plugins||[];for(let s=0;s<a.length;s++){const o=a[s];t.indexOf(o)===-1&&(t.push(o),e[o.id]=!0)}return{plugins:t,localIds:e}}function Zh(i,e){return!e&&i===!1?null:i===!0?{}:i}function Xh(i,{plugins:e,localIds:t},n,a){const s=[],o=i.getContext();for(const c of e){const r=c.id,d=Zh(n[r],a);d!==null&&s.push({plugin:c,options:Jh(i.config,{plugin:c,local:t[r]},d,o)})}return s}function Jh(i,{plugin:e,local:t},n,a){const s=i.pluginScopeKeys(e),o=i.getOptionScopes(n,s);return t&&e.defaults&&o.push(e.defaults),i.createResolver(o,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $n(i,e){const t=q.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function e3(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function t3(i,e){return i===e?"_index_":"_value_"}function zs(i){if(i==="x"||i==="y"||i==="r")return i}function i3(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function qn(i,...e){if(zs(i))return i;for(const t of e){const n=t.axis||i3(t.position)||i.length>1&&zs(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Is(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function n3(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return Is(i,"x",t[0])||Is(i,"y",t[0])}return{}}function a3(i,e){const t=bt[i.type]||{scales:{}},n=e.scales||{},a=$n(i.type,e),s=Object.create(null);return Object.keys(n).forEach(o=>{const c=n[o];if(!R(c))return console.error(`Invalid scale configuration for scale: ${o}`);if(c._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const r=qn(o,c,n3(o,i),q.scales[c.type]),d=t3(r,a),f=t.scales||{};s[o]=Zt(Object.create(null),[{axis:r},c,f[r],f[d]])}),i.data.datasets.forEach(o=>{const c=o.type||i.type,r=o.indexAxis||$n(c,e),f=(bt[c]||{}).scales||{};Object.keys(f).forEach(l=>{const h=e3(l,r),g=o[h+"AxisID"]||h;s[g]=s[g]||Object.create(null),Zt(s[g],[{axis:h},n[g],f[l]])})}),Object.keys(s).forEach(o=>{const c=s[o];Zt(c,[q.scales[c.type],q.scale])}),s}function qc(i){const e=i.options||(i.options={});e.plugins=Q(e.plugins,{}),e.scales=a3(i,e)}function Uc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function s3(i){return i=i||{},i.data=Uc(i.data),qc(i),i}const Fs=new Map,Yc=new Set;function Mi(i,e){let t=Fs.get(i);return t||(t=e(),Fs.set(i,t),Yc.add(t)),t}const Ft=(i,e,t)=>{const n=Xe(e,t);n!==void 0&&i.add(n)};class o3{constructor(e){this._config=s3(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Uc(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),qc(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Mi(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return Mi(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return Mi(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return Mi(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let a=n.get(e);return(!a||t)&&(a=new Map,n.set(e,a)),a}getOptionScopes(e,t,n){const{options:a,type:s}=this,o=this._cachedScopes(e,n),c=o.get(t);if(c)return c;const r=new Set;t.forEach(f=>{e&&(r.add(e),f.forEach(l=>Ft(r,e,l))),f.forEach(l=>Ft(r,a,l)),f.forEach(l=>Ft(r,bt[s]||{},l)),f.forEach(l=>Ft(r,q,l)),f.forEach(l=>Ft(r,Hn,l))});const d=Array.from(r);return d.length===0&&d.push(Object.create(null)),Yc.has(t)&&o.set(t,d),d}chartOptionScopes(){const{options:e,type:t}=this;return[e,bt[t]||{},q.datasets[t]||{},{type:t},q,Hn]}resolveNamedOptions(e,t,n,a=[""]){const s={$shared:!0},{resolver:o,subPrefixes:c}=Ts(this._resolverCache,e,a);let r=o;if(r3(o,t)){s.$shared=!1,n=Je(n)?n():n;const d=this.createResolver(e,n,c);r=kt(o,n,d)}for(const d of t)s[d]=r[d];return s}createResolver(e,t,n=[""],a){const{resolver:s}=Ts(this._resolverCache,e,n);return R(t)?kt(s,t,void 0,a):s}}function Ts(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const a=t.join();let s=n.get(a);return s||(s={resolver:Sa(e,t),subPrefixes:t.filter(c=>!c.toLowerCase().includes("hover"))},n.set(a,s)),s}const c3=i=>R(i)&&Object.getOwnPropertyNames(i).reduce((e,t)=>e||Je(i[t]),!1);function r3(i,e){const{isScriptable:t,isIndexable:n}=kc(i);for(const a of e){const s=t(a),o=n(a),c=(o||s)&&i[a];if(s&&(Je(c)||c3(c))||o&&F(c))return!0}return!1}var d3="4.3.0";const f3=["top","bottom","left","right","chartArea"];function Hs(i,e){return i==="top"||i==="bottom"||f3.indexOf(i)===-1&&e==="x"}function Ws(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function js(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),I(t&&t.onComplete,[i],e)}function l3(i){const e=i.chart,t=e.options.animation;I(t&&t.onProgress,[i],e)}function Zc(i){return Pc()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Hi={},$s=i=>{const e=Zc(i);return Object.values(Hi).filter(t=>t.canvas===e).pop()};function h3(i,e,t){const n=Object.keys(i);for(const a of n){const s=+a;if(s>=e){const o=i[a];delete i[a],(t>0||s>e)&&(i[s+t]=o)}}}function N3(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function g3(i){const{xScale:e,yScale:t}=i;if(e&&t)return{left:e.left,right:e.right,top:t.top,bottom:t.bottom}}class Qe{static register(...e){Se.add(...e),qs()}static unregister(...e){Se.remove(...e),qs()}constructor(e,t){const n=this.config=new o3(t),a=Zc(e),s=$s(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||_h(a)),this.platform.updateConfig(n);const c=this.platform.acquireContext(a,o.aspectRatio),r=c&&c.canvas,d=r&&r.height,f=r&&r.width;if(this.id=b4(),this.ctx=c,this.canvas=r,this.width=f,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Uh,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=w4(l=>this.update(l),o.resizeDelay||0),this._dataChanges=[],Hi[this.id]=this,!c||!r){console.error("Failed to create chart: can't acquire context from the given item");return}we.listen(this,"complete",js),we.listen(this,"progress",l3),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:a,_aspectRatio:s}=this;return L(e)?t&&s?s:a?n/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Se}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():us(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return hs(this.canvas,this.ctx),this}stop(){return we.stop(this),this}resize(e,t){we.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,a=this.canvas,s=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(a,e,t,s),c=n.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,us(this,c,!0)&&(this.notifyPlugins("resize",{size:o}),I(n.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};K(t,(n,a)=>{n.id=a})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,a=Object.keys(n).reduce((o,c)=>(o[c]=!1,o),{});let s=[];t&&(s=s.concat(Object.keys(t).map(o=>{const c=t[o],r=qn(o,c),d=r==="r",f=r==="x";return{options:c,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),K(s,o=>{const c=o.options,r=c.id,d=qn(r,c),f=Q(c.type,o.dtype);(c.position===void 0||Hs(c.position,d)!==Hs(o.dposition))&&(c.position=o.dposition),a[r]=!0;let l=null;if(r in n&&n[r].type===f)l=n[r];else{const h=Se.getScale(f);l=new h({id:r,type:f,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(c,e)}),K(a,(o,c)=>{o||delete n[c]}),K(n,o=>{oe.configure(this,o,o.options),oe.addBox(this,o)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((a,s)=>a.index-s.index),n>t){for(let a=t;a<n;++a)this._destroyDatasetMeta(a);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Ws("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,a)=>{t.filter(s=>s===n._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,a;for(this._removeUnreferencedMetasets(),n=0,a=t.length;n<a;n++){const s=t[n];let o=this.getDatasetMeta(n);const c=s.type||this.config.type;if(o.type&&o.type!==c&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=c,o.indexAxis=s.indexAxis||$n(c,this.options),o.order=s.order||0,o.index=n,o.label=""+s.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const r=Se.getController(c),{datasetElementType:d,dataElementType:f}=q.datasets[c];Object.assign(r,{dataElementType:Se.getElement(f),datasetElementType:d&&Se.getElement(d)}),o.controller=new r(this,n),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){K(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:l}=this.getDatasetMeta(d),h=!a&&s.indexOf(l)===-1;l.buildOrUpdateElements(h),o=Math.max(+l.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),a||K(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Ws("z","_idx"));const{_active:c,_lastEvent:r}=this;r?this._eventHandler(r,!0):c.length&&this._updateHoverStyles(c,c,!0),this.render()}_updateScales(){K(this.scales,e=>{oe.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!ns(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:a,count:s}of t){const o=n==="_removeElements"?-s:s;h3(e,a,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=s=>new Set(e.filter(o=>o[0]===s).map((o,c)=>c+","+o.splice(1).join(","))),a=n(0);for(let s=1;s<t;s++)if(!ns(a,n(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;oe.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],K(this.boxes,a=>{n&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Je(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),a={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(n.controller._update(t),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(we.has(this)?this.attached&&!we.running(this)&&we.start(this):(this.draw(),js({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:a}=this._resizeBeforeDraw;this._resize(n,a),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let a,s;for(a=0,s=t.length;a<s;++a){const o=t[a];(!e||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,a=!n.disabled,s=g3(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(a&&ln(t,{left:n.left===!1?0:s.left-n.left,right:n.right===!1?this.width:s.right+n.right,top:n.top===!1?0:s.top-n.top,bottom:n.bottom===!1?this.height:s.bottom+n.bottom}),e.controller.draw(),a&&hn(t),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Ke(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,a){const s=fh.modes[t];return typeof s=="function"?s(this,e,n,a):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let a=n.filter(s=>s&&s._dataset===t).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(a)),a}getContext(){return this.$context||(this.$context=nt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const a=n?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,a);di(t)?(s.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),o.update(s,{visible:n}),this.update(c=>c.datasetIndex===e?a:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),we.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),hs(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Hi[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(s,o)=>{t.addEventListener(this,s,o),e[s]=o},a=(s,o,c)=>{s.offsetX=o,s.offsetY=c,this._eventHandler(s)};K(this.options.events,s=>n(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(r,d)=>{t.addEventListener(this,r,d),e[r]=d},a=(r,d)=>{e[r]&&(t.removeEventListener(this,r,d),delete e[r])},s=(r,d)=>{this.canvas&&this.resize(r,d)};let o;const c=()=>{a("attach",c),this.attached=!0,this.resize(),n("resize",s),n("detach",o)};o=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),n("attach",c)},t.isAttached(this.canvas)?c():o()}unbindEvents(){K(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},K(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const a=n?"set":"remove";let s,o,c,r;for(t==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),c=0,r=e.length;c<r;++c){o=e[c];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[a+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:s,index:o})=>{const c=this.getDatasetMeta(s);if(!c)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:c.data[o],index:o}});!Ji(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const a=this.options.hover,s=(r,d)=>r.filter(f=>!d.some(l=>f.datasetIndex===l.datasetIndex&&f.index===l.index)),o=s(t,e),c=n?e:s(e,t);o.length&&this.updateHoverStyle(o,a.mode,!1),c.length&&a.mode&&this.updateHoverStyle(c,a.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},a=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,a)===!1)return;const s=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,a),(s||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:a=[],options:s}=this,o=t,c=this._getActiveElements(e,a,n,o),r=O4(e),d=N3(e,this._lastEvent,n,r);n&&(this._lastEvent=null,I(s.onHover,[e,c,this],this),r&&I(s.onClick,[e,c,this],this));const f=!Ji(c,a);return(f||t)&&(this._active=c,this._updateHoverStyles(c,a,t)),this._lastEvent=d,f}_getActiveElements(e,t,n,a){if(e.type==="mouseout")return[];if(!n)return t;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,a)}}C(Qe,"defaults",q),C(Qe,"instances",Hi),C(Qe,"overrides",bt),C(Qe,"registry",Se),C(Qe,"version",d3),C(Qe,"getChart",$s);function qs(){return K(Qe.instances,i=>i._plugins.invalidate())}function u3(i,e,t){const{startAngle:n,pixelMargin:a,x:s,y:o,outerRadius:c,innerRadius:r}=e;let d=a/c;i.beginPath(),i.arc(s,o,c,n-d,t+d),r>a?(d=a/r,i.arc(s,o,r,t+d,n-d,!0)):i.arc(s,o,a,t+$,n-$),i.closePath(),i.clip()}function b3(i){return Aa(i,["outerStart","outerEnd","innerStart","innerEnd"])}function m3(i,e,t,n){const a=b3(i.options.borderRadius),s=(t-e)/2,o=Math.min(s,n*e/2),c=r=>{const d=(t-Math.min(s,r))*n/2;return ee(r,0,Math.min(s,d))};return{outerStart:c(a.outerStart),outerEnd:c(a.outerEnd),innerStart:ee(a.innerStart,0,o),innerEnd:ee(a.innerEnd,0,o)}}function Ct(i,e,t,n){return{x:t+i*Math.cos(e),y:n+i*Math.sin(e)}}function on(i,e,t,n,a,s){const{x:o,y:c,startAngle:r,pixelMargin:d,innerRadius:f}=e,l=Math.max(e.outerRadius+n+t-d,0),h=f>0?f+n+t+d:0;let g=0;const N=a-r;if(n){const z=f>0?f-n:0,H=l>0?l-n:0,U=(z+H)/2,De=U!==0?N*U/(U+n):N;g=(N-De)/2}const u=Math.max(.001,N*l-t/W)/l,b=(N-u)/2,B=r+b+g,m=a-b-g,{outerStart:D,outerEnd:O,innerStart:x,innerEnd:A}=m3(e,h,l,m-B),y=l-D,V=l-O,G=B+D/y,_=m-O/V,w=h+x,E=h+A,te=B+x/w,he=m-A/E;if(i.beginPath(),s){const z=(G+_)/2;if(i.arc(o,c,l,G,z),i.arc(o,c,l,z,_),O>0){const ie=Ct(V,_,o,c);i.arc(ie.x,ie.y,O,_,m+$)}const H=Ct(E,m,o,c);if(i.lineTo(H.x,H.y),A>0){const ie=Ct(E,he,o,c);i.arc(ie.x,ie.y,A,m+$,he+Math.PI)}const U=(m-A/h+(B+x/h))/2;if(i.arc(o,c,h,m-A/h,U,!0),i.arc(o,c,h,U,B+x/h,!0),x>0){const ie=Ct(w,te,o,c);i.arc(ie.x,ie.y,x,te+Math.PI,B-$)}const De=Ct(y,B,o,c);if(i.lineTo(De.x,De.y),D>0){const ie=Ct(y,G,o,c);i.arc(ie.x,ie.y,D,B-$,G)}}else{i.moveTo(o,c);const z=Math.cos(G)*l+o,H=Math.sin(G)*l+c;i.lineTo(z,H);const U=Math.cos(_)*l+o,De=Math.sin(_)*l+c;i.lineTo(U,De)}i.closePath()}function B3(i,e,t,n,a){const{fullCircles:s,startAngle:o,circumference:c}=e;let r=e.endAngle;if(s){on(i,e,t,n,r,a);for(let d=0;d<s;++d)i.fill();isNaN(c)||(r=o+(c%T||T))}return on(i,e,t,n,r,a),i.fill(),r}function x3(i,e,t,n,a){const{fullCircles:s,startAngle:o,circumference:c,options:r}=e,{borderWidth:d,borderJoinStyle:f,borderDash:l,borderDashOffset:h}=r,g=r.borderAlign==="inner";if(!d)return;i.setLineDash(l||[]),i.lineDashOffset=h,g?(i.lineWidth=d*2,i.lineJoin=f||"round"):(i.lineWidth=d,i.lineJoin=f||"bevel");let N=e.endAngle;if(s){on(i,e,t,n,N,a);for(let u=0;u<s;++u)i.stroke();isNaN(c)||(N=o+(c%T||T))}g&&u3(i,e,N),s||(on(i,e,t,n,N,a),i.stroke())}class qt extends ye{constructor(t){super();C(this,"circumference");C(this,"endAngle");C(this,"fullCircles");C(this,"innerRadius");C(this,"outerRadius");C(this,"pixelMargin");C(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.getProps(["x","y"],a),{angle:o,distance:c}=Bc(s,{x:t,y:n}),{startAngle:r,endAngle:d,innerRadius:f,outerRadius:l,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],a),g=(this.options.spacing+this.options.borderWidth)/2,u=Q(h,d-r)>=T||fi(o,r,d),b=Re(c,f+g,l+g);return u&&b}getCenterPoint(t){const{x:n,y:a,startAngle:s,endAngle:o,innerRadius:c,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:d,spacing:f}=this.options,l=(s+o)/2,h=(c+r+f+d)/2;return{x:n+Math.cos(l)*h,y:a+Math.sin(l)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:a}=this,s=(n.offset||0)/4,o=(n.spacing||0)/2,c=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=a>T?Math.floor(a/T):0,a===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const r=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(r)*s,Math.sin(r)*s);const d=1-Math.sin(Math.min(W,a||0)),f=s*d;t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor,B3(t,this,f,o,c),x3(t,this,f,o,c),t.restore()}}C(qt,"id","arc"),C(qt,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),C(qt,"defaultRoutes",{backgroundColor:"backgroundColor"}),C(qt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"});function Xc(i,e,t=e){i.lineCap=Q(t.borderCapStyle,e.borderCapStyle),i.setLineDash(Q(t.borderDash,e.borderDash)),i.lineDashOffset=Q(t.borderDashOffset,e.borderDashOffset),i.lineJoin=Q(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=Q(t.borderWidth,e.borderWidth),i.strokeStyle=Q(t.borderColor,e.borderColor)}function p3(i,e,t){i.lineTo(t.x,t.y)}function D3(i){return i.stepped?H4:i.tension||i.cubicInterpolationMode==="monotone"?W4:p3}function Jc(i,e,t={}){const n=i.length,{start:a=0,end:s=n-1}=t,{start:o,end:c}=e,r=Math.max(a,o),d=Math.min(s,c),f=a<o&&s<o||a>c&&s>c;return{count:n,start:r,loop:e.loop,ilen:d<r&&!f?n+d-r:d-r}}function O3(i,e,t,n){const{points:a,options:s}=e,{count:o,start:c,loop:r,ilen:d}=Jc(a,t,n),f=D3(s);let{move:l=!0,reverse:h}=n||{},g,N,u;for(g=0;g<=d;++g)N=a[(c+(h?d-g:g))%o],!N.skip&&(l?(i.moveTo(N.x,N.y),l=!1):f(i,u,N,h,s.stepped),u=N);return r&&(N=a[(c+(h?d:0))%o],f(i,u,N,h,s.stepped)),!!r}function V3(i,e,t,n){const a=e.points,{count:s,start:o,ilen:c}=Jc(a,t,n),{move:r=!0,reverse:d}=n||{};let f=0,l=0,h,g,N,u,b,B;const m=O=>(o+(d?c-O:O))%s,D=()=>{u!==b&&(i.lineTo(f,b),i.lineTo(f,u),i.lineTo(f,B))};for(r&&(g=a[m(0)],i.moveTo(g.x,g.y)),h=0;h<=c;++h){if(g=a[m(h)],g.skip)continue;const O=g.x,x=g.y,A=O|0;A===N?(x<u?u=x:x>b&&(b=x),f=(l*f+O)/++l):(D(),i.lineTo(O,x),N=A,l=0,u=b=x),B=x}D()}function Un(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?V3:O3}function C3(i){return i.stepped?Vl:i.tension||i.cubicInterpolationMode==="monotone"?Cl:ft}function y3(i,e,t,n){let a=e._path;a||(a=e._path=new Path2D,e.path(a,t,n)&&a.closePath()),Xc(i,e.options),i.stroke(a)}function A3(i,e,t,n){const{segments:a,options:s}=e,o=Un(e);for(const c of a)Xc(i,s,c.style),i.beginPath(),o(i,e,c,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const S3=typeof Path2D=="function";function k3(i,e,t,n){S3&&!e.options.segment?y3(i,e,t,n):A3(i,e,t,n)}class qe extends ye{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const a=n.spanGaps?this._loop:this._fullLoop;ul(this._points,n,e,a,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Gl(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,a=e[t],s=this.points,o=Kc(this,{property:t,start:a,end:a});if(!o.length)return;const c=[],r=C3(n);let d,f;for(d=0,f=o.length;d<f;++d){const{start:l,end:h}=o[d],g=s[l],N=s[h];if(g===N){c.push(g);continue}const u=Math.abs((a-g[t])/(N[t]-g[t])),b=r(g,N,u,n.stepped);b[t]=e[t],c.push(b)}return c.length===1?c[0]:c}pathSegment(e,t,n){return Un(this)(e,this,t,n)}path(e,t,n){const a=this.segments,s=Un(this);let o=this._loop;t=t||0,n=n||this.points.length-t;for(const c of a)o&=s(e,this,c,{start:t,end:t+n-1});return!!o}draw(e,t,n,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),k3(e,this,n,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}C(qe,"id","line"),C(qe,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),C(qe,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),C(qe,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Us(i,e,t,n){const a=i.options,{[t]:s}=i.getProps([t],n);return Math.abs(e-s)<a.radius+a.hitRadius}class Wi extends ye{constructor(t){super();C(this,"parsed");C(this,"skip");C(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.options,{x:o,y:c}=this.getProps(["x","y"],a);return Math.pow(t-o,2)+Math.pow(n-c,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,n){return Us(this,t,"x",n)}inYRange(t,n){return Us(this,t,"y",n)}getCenterPoint(t){const{x:n,y:a}=this.getProps(["x","y"],t);return{x:n,y:a}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const a=n&&t.borderWidth||0;return(n+a)*2}draw(t,n){const a=this.options;this.skip||a.radius<.1||!Ke(this,n,this.size(a)/2)||(t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.fillStyle=a.backgroundColor,Wn(t,a,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}C(Wi,"id","point"),C(Wi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),C(Wi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function er(i,e){const{x:t,y:n,base:a,width:s,height:o}=i.getProps(["x","y","base","width","height"],e);let c,r,d,f,l;return i.horizontal?(l=o/2,c=Math.min(t,a),r=Math.max(t,a),d=n-l,f=n+l):(l=s/2,c=t-l,r=t+l,d=Math.min(n,a),f=Math.max(n,a)),{left:c,top:d,right:r,bottom:f}}function Ue(i,e,t,n){return i?0:ee(e,t,n)}function v3(i,e,t){const n=i.options.borderWidth,a=i.borderSkipped,s=Sc(n);return{t:Ue(a.top,s.top,0,t),r:Ue(a.right,s.right,0,e),b:Ue(a.bottom,s.bottom,0,t),l:Ue(a.left,s.left,0,e)}}function G3(i,e,t){const{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),a=i.options.borderRadius,s=Nt(a),o=Math.min(e,t),c=i.borderSkipped,r=n||R(a);return{topLeft:Ue(!r||c.top||c.left,s.topLeft,0,o),topRight:Ue(!r||c.top||c.right,s.topRight,0,o),bottomLeft:Ue(!r||c.bottom||c.left,s.bottomLeft,0,o),bottomRight:Ue(!r||c.bottom||c.right,s.bottomRight,0,o)}}function _3(i){const e=er(i),t=e.right-e.left,n=e.bottom-e.top,a=v3(i,t/2,n/2),s=G3(i,t/2,n/2);return{outer:{x:e.left,y:e.top,w:t,h:n,radius:s},inner:{x:e.left+a.l,y:e.top+a.t,w:t-a.l-a.r,h:n-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function Mn(i,e,t,n){const a=e===null,s=t===null,c=i&&!(a&&s)&&er(i,n);return c&&(a||Re(e,c.left,c.right))&&(s||Re(t,c.top,c.bottom))}function w3(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function M3(i,e){i.rect(e.x,e.y,e.w,e.h)}function Pn(i,e,t={}){const n=i.x!==t.x?-e:0,a=i.y!==t.y?-e:0,s=(i.x+i.w!==t.x+t.w?e:0)-n,o=(i.y+i.h!==t.y+t.h?e:0)-a;return{x:i.x+n,y:i.y+a,w:i.w+s,h:i.h+o,radius:i.radius}}class ji extends ye{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:n,backgroundColor:a}}=this,{inner:s,outer:o}=_3(this),c=w3(o.radius)?li:M3;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),c(e,Pn(o,t,s)),e.clip(),c(e,Pn(s,-t,o)),e.fillStyle=n,e.fill("evenodd")),e.beginPath(),c(e,Pn(s,t)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,t,n){return Mn(this,e,t,n)}inXRange(e,t){return Mn(this,e,null,t)}inYRange(e,t){return Mn(this,null,e,t)}getCenterPoint(e){const{x:t,y:n,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(t+a)/2:t,y:s?n:(n+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}C(ji,"id","bar"),C(ji,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),C(ji,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var P3=Object.freeze({__proto__:null,ArcElement:qt,BarElement:ji,LineElement:qe,PointElement:Wi});const Yn=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ys=Yn.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function tr(i){return Yn[i%Yn.length]}function ir(i){return Ys[i%Ys.length]}function Q3(i,e){return i.borderColor=tr(e),i.backgroundColor=ir(e),++e}function E3(i,e){return i.backgroundColor=i.data.map(()=>tr(e++)),e}function R3(i,e){return i.backgroundColor=i.data.map(()=>ir(e++)),e}function L3(i){let e=0;return(t,n)=>{const a=i.getDatasetMeta(n).controller;a instanceof lt?e=E3(t,e):a instanceof ti?e=R3(t,e):a&&(e=Q3(t,e))}}function Zs(i){let e;for(e in i)if(i[e].borderColor||i[e].backgroundColor)return!0;return!1}function K3(i){return i&&(i.borderColor||i.backgroundColor)}var z3={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,e,t){if(!t.enabled)return;const{data:{datasets:n},options:a}=i.config,{elements:s}=a;if(!t.forceOverride&&(Zs(n)||K3(a)||s&&Zs(s)))return;const o=L3(i);n.forEach(o)}};function I3(i,e,t,n,a){const s=a.samples||n;if(s>=t)return i.slice(e,e+t);const o=[],c=(t-2)/(s-2);let r=0;const d=e+t-1;let f=e,l,h,g,N,u;for(o[r++]=i[f],l=0;l<s-2;l++){let b=0,B=0,m;const D=Math.floor((l+1)*c)+1+e,O=Math.min(Math.floor((l+2)*c)+1,t)+e,x=O-D;for(m=D;m<O;m++)b+=i[m].x,B+=i[m].y;b/=x,B/=x;const A=Math.floor(l*c)+1+e,y=Math.min(Math.floor((l+1)*c)+1,t)+e,{x:V,y:G}=i[f];for(g=N=-1,m=A;m<y;m++)N=.5*Math.abs((V-b)*(i[m].y-G)-(V-i[m].x)*(B-G)),N>g&&(g=N,h=i[m],u=m);o[r++]=h,f=u}return o[r++]=i[d],o}function F3(i,e,t,n){let a=0,s=0,o,c,r,d,f,l,h,g,N,u;const b=[],B=e+t-1,m=i[e].x,O=i[B].x-m;for(o=e;o<e+t;++o){c=i[o],r=(c.x-m)/O*n,d=c.y;const x=r|0;if(x===f)d<N?(N=d,l=o):d>u&&(u=d,h=o),a=(s*a+c.x)/++s;else{const A=o-1;if(!L(l)&&!L(h)){const y=Math.min(l,h),V=Math.max(l,h);y!==g&&y!==A&&b.push({...i[y],x:a}),V!==g&&V!==A&&b.push({...i[V],x:a})}o>0&&A!==g&&b.push(i[A]),b.push(c),f=x,s=0,N=u=d,l=h=g=o}}return b}function nr(i){if(i._decimated){const e=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function Xs(i){i.data.datasets.forEach(e=>{nr(e)})}function T3(i,e){const t=e.length;let n=0,a;const{iScale:s}=i,{min:o,max:c,minDefined:r,maxDefined:d}=s.getUserBounds();return r&&(n=ee(Le(e,s.axis,o).lo,0,t-1)),d?a=ee(Le(e,s.axis,c).hi+1,n,t)-n:a=t-n,{start:n,count:a}}var H3={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,e,t)=>{if(!t.enabled){Xs(i);return}const n=i.width;i.data.datasets.forEach((a,s)=>{const{_data:o,indexAxis:c}=a,r=i.getDatasetMeta(s),d=o||a.data;if(jt([c,i.options.indexAxis])==="y"||!r.controller.supportsDecimation)return;const f=i.scales[r.xAxisID];if(f.type!=="linear"&&f.type!=="time"||i.options.parsing)return;let{start:l,count:h}=T3(r,d);const g=t.threshold||4*n;if(h<=g){nr(a);return}L(o)&&(a._data=d,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(u){this._data=u}}));let N;switch(t.algorithm){case"lttb":N=I3(d,l,h,n,t);break;case"min-max":N=F3(d,l,h,n);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}a._decimated=N})},destroy(i){Xs(i)}};function W3(i,e,t){const n=i.segments,a=i.points,s=e.points,o=[];for(const c of n){let{start:r,end:d}=c;d=wa(r,d,a);const f=Zn(t,a[r],a[d],c.loop);if(!e.segments){o.push({source:c,target:f,start:a[r],end:a[d]});continue}const l=Kc(e,f);for(const h of l){const g=Zn(t,s[h.start],s[h.end],h.loop),N=Lc(c,a,g);for(const u of N)o.push({source:u,target:h,start:{[t]:Js(f,g,"start",Math.max)},end:{[t]:Js(f,g,"end",Math.min)}})}}return o}function Zn(i,e,t,n){if(n)return;let a=e[i],s=t[i];return i==="angle"&&(a=be(a),s=be(s)),{property:i,start:a,end:s}}function j3(i,e){const{x:t=null,y:n=null}=i||{},a=e.points,s=[];return e.segments.forEach(({start:o,end:c})=>{c=wa(o,c,a);const r=a[o],d=a[c];n!==null?(s.push({x:r.x,y:n}),s.push({x:d.x,y:n})):t!==null&&(s.push({x:t,y:r.y}),s.push({x:t,y:d.y}))}),s}function wa(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function Js(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function ar(i,e){let t=[],n=!1;return F(i)?(n=!0,t=i):t=j3(i,e),t.length?new qe({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function eo(i){return i&&i.fill!==!1}function $3(i,e,t){let a=i[e].fill;const s=[e];let o;if(!t)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!j(a))return a;if(o=i[a],!o)return!1;if(o.visible)return a;s.push(a),a=o.fill}return!1}function q3(i,e,t){const n=X3(i);if(R(n))return isNaN(n.value)?!1:n;let a=parseFloat(n);return j(a)&&Math.floor(a)===a?U3(n[0],e,a,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function U3(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function Y3(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:R(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function Z3(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:R(i)?n=i.value:n=e.getBaseValue(),n}function X3(i){const e=i.options,t=e.fill;let n=Q(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function J3(i){const{scale:e,index:t,line:n}=i,a=[],s=n.segments,o=n.points,c=e5(e,t);c.push(ar({x:null,y:e.bottom},n));for(let r=0;r<s.length;r++){const d=s[r];for(let f=d.start;f<=d.end;f++)t5(a,o[f],c)}return new qe({points:a,options:{}})}function e5(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let a=0;a<n.length;a++){const s=n[a];if(s.index===e)break;s.hidden||t.unshift(s.dataset)}return t}function t5(i,e,t){const n=[];for(let a=0;a<t.length;a++){const s=t[a],{first:o,last:c,point:r}=i5(s,e,"x");if(!(!r||o&&c)){if(o)n.unshift(r);else if(i.push(r),!c)break}}i.push(...n)}function i5(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const a=n[t],s=i.segments,o=i.points;let c=!1,r=!1;for(let d=0;d<s.length;d++){const f=s[d],l=o[f.start][t],h=o[f.end][t];if(Re(a,l,h)){c=a===l,r=a===h;break}}return{first:c,last:r,point:n}}class sr{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:a,y:s,radius:o}=this;return t=t||{start:0,end:T},e.arc(a,s,o,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:a}=this,s=e.angle;return{x:t+Math.cos(s)*a,y:n+Math.sin(s)*a,angle:s}}}function n5(i){const{chart:e,fill:t,line:n}=i;if(j(t))return a5(e,t);if(t==="stack")return J3(i);if(t==="shape")return!0;const a=s5(i);return a instanceof sr?a:ar(a,n)}function a5(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function s5(i){return(i.scale||{}).getPointPositionForValue?c5(i):o5(i)}function o5(i){const{scale:e={},fill:t}=i,n=Y3(t,e);if(j(n)){const a=e.isHorizontal();return{x:a?n:null,y:a?null:n}}return null}function c5(i){const{scale:e,fill:t}=i,n=e.options,a=e.getLabels().length,s=n.reverse?e.max:e.min,o=Z3(t,e,s),c=[];if(n.grid.circular){const r=e.getPointPositionForValue(0,s);return new sr({x:r.x,y:r.y,radius:e.getDistanceFromCenterForValue(o)})}for(let r=0;r<a;++r)c.push(e.getPointPositionForValue(r,o));return c}function Qn(i,e,t){const n=n5(e),{line:a,scale:s,axis:o}=e,c=a.options,r=c.fill,d=c.backgroundColor,{above:f=d,below:l=d}=r||{};n&&a.points.length&&(ln(i,t),r5(i,{line:a,target:n,above:f,below:l,area:t,scale:s,axis:o}),hn(i))}function r5(i,e){const{line:t,target:n,above:a,below:s,area:o,scale:c}=e,r=t._loop?"angle":e.axis;i.save(),r==="x"&&s!==a&&(to(i,n,o.top),io(i,{line:t,target:n,color:a,scale:c,property:r}),i.restore(),i.save(),to(i,n,o.bottom)),io(i,{line:t,target:n,color:s,scale:c,property:r}),i.restore()}function to(i,e,t){const{segments:n,points:a}=e;let s=!0,o=!1;i.beginPath();for(const c of n){const{start:r,end:d}=c,f=a[r],l=a[wa(r,d,a)];s?(i.moveTo(f.x,f.y),s=!1):(i.lineTo(f.x,t),i.lineTo(f.x,f.y)),o=!!e.pathSegment(i,c,{move:o}),o?i.closePath():i.lineTo(l.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function io(i,e){const{line:t,target:n,property:a,color:s,scale:o}=e,c=W3(t,n,a);for(const{source:r,target:d,start:f,end:l}of c){const{style:{backgroundColor:h=s}={}}=r,g=n!==!0;i.save(),i.fillStyle=h,d5(i,o,g&&Zn(a,f,l)),i.beginPath();const N=!!t.pathSegment(i,r);let u;if(g){N?i.closePath():no(i,n,l,a);const b=!!n.pathSegment(i,d,{move:N,reverse:!0});u=N&&b,u||no(i,n,f,a)}i.closePath(),i.fill(u?"evenodd":"nonzero"),i.restore()}}function d5(i,e,t){const{top:n,bottom:a}=e.chart.chartArea,{property:s,start:o,end:c}=t||{};s==="x"&&(i.beginPath(),i.rect(o,n,c-o,a-n),i.clip())}function no(i,e,t,n){const a=e.interpolate(t,n);a&&i.lineTo(a.x,a.y)}var f5={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,a=[];let s,o,c,r;for(o=0;o<n;++o)s=i.getDatasetMeta(o),c=s.dataset,r=null,c&&c.options&&c instanceof qe&&(r={visible:i.isDatasetVisible(o),index:o,fill:q3(c,o,n),chart:i,axis:s.controller.options.indexAxis,scale:s.vScale,line:c}),s.$filler=r,a.push(r);for(o=0;o<n;++o)r=a[o],!(!r||r.fill===!1)&&(r.fill=$3(a,o,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",a=i.getSortedVisibleDatasetMetas(),s=i.chartArea;for(let o=a.length-1;o>=0;--o){const c=a[o].$filler;c&&(c.line.updateControlPoints(s,c.axis),n&&c.fill&&Qn(i.ctx,c,s))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let a=n.length-1;a>=0;--a){const s=n[a].$filler;eo(s)&&Qn(i.ctx,s,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!eo(n)||t.drawTime!=="beforeDatasetDraw"||Qn(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ao=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},l5=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class so extends ye{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=I(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,a)=>e.sort(n,a,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,a=Z(n.font),s=a.size,o=this._computeTitleHeight(),{boxWidth:c,itemHeight:r}=ao(n,s);let d,f;t.font=a.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(o,s,c,r)+10):(f=this.maxHeight,d=this._fitCols(o,a,c,r)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(f,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,a){const{ctx:s,maxWidth:o,options:{labels:{padding:c}}}=this,r=this.legendHitBoxes=[],d=this.lineWidths=[0],f=a+c;let l=e;s.textAlign="left",s.textBaseline="middle";let h=-1,g=-f;return this.legendItems.forEach((N,u)=>{const b=n+t/2+s.measureText(N.text).width;(u===0||d[d.length-1]+b+2*c>o)&&(l+=f,d[d.length-(u>0?0:1)]=0,g+=f,h++),r[u]={left:0,top:g,row:h,width:b,height:a},d[d.length-1]+=b+c}),l}_fitCols(e,t,n,a){const{ctx:s,maxHeight:o,options:{labels:{padding:c}}}=this,r=this.legendHitBoxes=[],d=this.columnSizes=[],f=o-e;let l=c,h=0,g=0,N=0,u=0;return this.legendItems.forEach((b,B)=>{const{itemWidth:m,itemHeight:D}=h5(n,t,s,b,a);B>0&&g+D+2*c>f&&(l+=h+c,d.push({width:h,height:g}),N+=h+c,u++,h=g=0),r[B]={left:N,top:g,col:u,width:m,height:D},h=Math.max(h,m),g+=D+c}),l+=h,d.push({width:h,height:g}),l}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:a},rtl:s}}=this,o=yt(s,this.left,this.width);if(this.isHorizontal()){let c=0,r=se(n,this.left+a,this.right-this.lineWidths[c]);for(const d of t)c!==d.row&&(c=d.row,r=se(n,this.left+a,this.right-this.lineWidths[c])),d.top+=this.top+e+a,d.left=o.leftForLtr(o.x(r),d.width),r+=d.width+a}else{let c=0,r=se(n,this.top+e+a,this.bottom-this.columnSizes[c].height);for(const d of t)d.col!==c&&(c=d.col,r=se(n,this.top+e+a,this.bottom-this.columnSizes[c].height)),d.top=r,d.left+=this.left+a,d.left=o.leftForLtr(o.x(d.left),d.width),r+=d.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ln(e,this),this._draw(),hn(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:a}=this,{align:s,labels:o}=e,c=q.color,r=yt(e.rtl,this.left,this.width),d=Z(o.font),{padding:f}=o,l=d.size,h=l/2;let g;this.drawTitle(),a.textAlign=r.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:N,boxHeight:u,itemHeight:b}=ao(o,l),B=function(A,y,V){if(isNaN(N)||N<=0||isNaN(u)||u<0)return;a.save();const G=Q(V.lineWidth,1);if(a.fillStyle=Q(V.fillStyle,c),a.lineCap=Q(V.lineCap,"butt"),a.lineDashOffset=Q(V.lineDashOffset,0),a.lineJoin=Q(V.lineJoin,"miter"),a.lineWidth=G,a.strokeStyle=Q(V.strokeStyle,c),a.setLineDash(Q(V.lineDash,[])),o.usePointStyle){const _={radius:u*Math.SQRT2/2,pointStyle:V.pointStyle,rotation:V.rotation,borderWidth:G},w=r.xPlus(A,N/2),E=y+h;Ac(a,_,w,E,o.pointStyleWidth&&N)}else{const _=y+Math.max((l-u)/2,0),w=r.leftForLtr(A,N),E=Nt(V.borderRadius);a.beginPath(),Object.values(E).some(te=>te!==0)?li(a,{x:w,y:_,w:N,h:u,radius:E}):a.rect(w,_,N,u),a.fill(),G!==0&&a.stroke()}a.restore()},m=function(A,y,V){mt(a,V.text,A,y+b/2,d,{strikethrough:V.hidden,textAlign:r.textAlign(V.textAlign)})},D=this.isHorizontal(),O=this._computeTitleHeight();D?g={x:se(s,this.left+f,this.right-n[0]),y:this.top+f+O,line:0}:g={x:this.left+f,y:se(s,this.top+O+f,this.bottom-t[0].height),line:0},Qc(this.ctx,e.textDirection);const x=b+f;this.legendItems.forEach((A,y)=>{a.strokeStyle=A.fontColor,a.fillStyle=A.fontColor;const V=a.measureText(A.text).width,G=r.textAlign(A.textAlign||(A.textAlign=o.textAlign)),_=N+h+V;let w=g.x,E=g.y;r.setWidth(this.width),D?y>0&&w+_+f>this.right&&(E=g.y+=x,g.line++,w=g.x=se(s,this.left+f,this.right-n[g.line])):y>0&&E+x>this.bottom&&(w=g.x=w+t[g.line].width+f,g.line++,E=g.y=se(s,this.top+O+f,this.bottom-t[g.line].height));const te=r.x(w);if(B(te,E,A),w=M4(G,w+N+h,D?w+_:this.right,e.rtl),m(r.x(w),E,A),D)g.x+=_+f;else if(typeof A.text!="string"){const he=d.lineHeight;g.y+=or(A,he)}else g.y+=x}),Ec(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=Z(t.font),a=ce(t.padding);if(!t.display)return;const s=yt(e.rtl,this.left,this.width),o=this.ctx,c=t.position,r=n.size/2,d=a.top+r;let f,l=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),f=this.top+d,l=se(e.align,l,this.right-h);else{const N=this.columnSizes.reduce((u,b)=>Math.max(u,b.height),0);f=d+se(e.align,this.top,this.bottom-N-e.labels.padding-this._computeTitleHeight())}const g=se(c,l,l+h);o.textAlign=s.textAlign(Ca(c)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=n.string,mt(o,t.text,g,f,n)}_computeTitleHeight(){const e=this.options.title,t=Z(e.font),n=ce(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,a,s;if(Re(e,this.left,this.right)&&Re(t,this.top,this.bottom)){for(s=this.legendHitBoxes,n=0;n<s.length;++n)if(a=s[n],Re(e,a.left,a.left+a.width)&&Re(t,a.top,a.top+a.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!u5(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,s=l5(a,n);a&&!s&&I(t.onLeave,[e,a,this],this),this._hoveredItem=n,n&&!s&&I(t.onHover,[e,n,this],this)}else n&&I(t.onClick,[e,n,this],this)}}function h5(i,e,t,n,a){const s=N5(n,i,e,t),o=g5(a,n,e.lineHeight);return{itemWidth:s,itemHeight:o}}function N5(i,e,t,n){let a=i.text;return a&&typeof a!="string"&&(a=a.reduce((s,o)=>s.length>o.length?s:o)),e+t.size/2+n.measureText(a).width}function g5(i,e,t){let n=i;return typeof e.text!="string"&&(n=or(e,t)),n}function or(i,e){const t=i.text?i.text.length+.5:0;return e*t}function u5(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var b5={id:"legend",_element:so,start(i,e,t){const n=i.legend=new so({ctx:i.ctx,options:t,chart:i});oe.configure(i,n,t),oe.addBox(i,n)},stop(i){oe.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;oe.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,a=t.chart;a.isDatasetVisible(n)?(a.hide(n),e.hidden=!0):(a.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:a,color:s,useBorderRadius:o,borderRadius:c}}=i.legend.options;return i._getSortedDatasetMetas().map(r=>{const d=r.controller.getStyle(t?0:void 0),f=ce(d.borderWidth);return{text:e[r.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!r.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:n||d.pointStyle,rotation:d.rotation,textAlign:a||d.textAlign,borderRadius:o&&(c||d.borderRadius),datasetIndex:r.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Ma extends ye{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const a=F(n.text)?n.text.length:1;this._padding=ce(n.padding);const s=a*Z(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:a,right:s,options:o}=this,c=o.align;let r=0,d,f,l;return this.isHorizontal()?(f=se(c,n,s),l=t+e,d=s-n):(o.position==="left"?(f=n+e,l=se(c,a,t),r=W*-.5):(f=s-e,l=se(c,t,a),r=W*.5),d=a-t),{titleX:f,titleY:l,maxWidth:d,rotation:r}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=Z(t.font),s=n.lineHeight/2+this._padding.top,{titleX:o,titleY:c,maxWidth:r,rotation:d}=this._drawArgs(s);mt(e,t.text,0,0,n,{color:t.color,maxWidth:r,rotation:d,textAlign:Ca(t.align),textBaseline:"middle",translation:[o,c]})}}function m5(i,e){const t=new Ma({ctx:i.ctx,options:e,chart:i});oe.configure(i,t,e),oe.addBox(i,t),i.titleBlock=t}var B5={id:"title",_element:Ma,start(i,e,t){m5(i,t)},stop(i){const e=i.titleBlock;oe.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;oe.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Pi=new WeakMap;var x5={id:"subtitle",start(i,e,t){const n=new Ma({ctx:i.ctx,options:t,chart:i});oe.configure(i,n,t),oe.addBox(i,n),Pi.set(i,n)},stop(i){oe.removeBox(i,Pi.get(i)),Pi.delete(i)},beforeUpdate(i,e,t){const n=Pi.get(i);oe.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ut={average(i){if(!i.length)return!1;let e,t,n=0,a=0,s=0;for(e=0,t=i.length;e<t;++e){const o=i[e].element;if(o&&o.hasValue()){const c=o.tooltipPosition();n+=c.x,a+=c.y,++s}}return{x:n/s,y:a/s}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,a=Number.POSITIVE_INFINITY,s,o,c;for(s=0,o=i.length;s<o;++s){const r=i[s].element;if(r&&r.hasValue()){const d=r.getCenterPoint(),f=Tn(e,d);f<a&&(a=f,c=r)}}if(c){const r=c.tooltipPosition();t=r.x,n=r.y}return{x:t,y:n}}};function Ae(i,e){return e&&(F(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function Me(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function p5(i,e){const{element:t,datasetIndex:n,index:a}=e,s=i.getDatasetMeta(n).controller,{label:o,value:c}=s.getLabelAndValue(a);return{chart:i,label:o,parsed:s.getParsed(a),raw:i.data.datasets[n].data[a],formattedValue:c,dataset:s.getDataset(),dataIndex:a,datasetIndex:n,element:t}}function oo(i,e){const t=i.chart.ctx,{body:n,footer:a,title:s}=i,{boxWidth:o,boxHeight:c}=e,r=Z(e.bodyFont),d=Z(e.titleFont),f=Z(e.footerFont),l=s.length,h=a.length,g=n.length,N=ce(e.padding);let u=N.height,b=0,B=n.reduce((O,x)=>O+x.before.length+x.lines.length+x.after.length,0);if(B+=i.beforeBody.length+i.afterBody.length,l&&(u+=l*d.lineHeight+(l-1)*e.titleSpacing+e.titleMarginBottom),B){const O=e.displayColors?Math.max(c,r.lineHeight):r.lineHeight;u+=g*O+(B-g)*r.lineHeight+(B-1)*e.bodySpacing}h&&(u+=e.footerMarginTop+h*f.lineHeight+(h-1)*e.footerSpacing);let m=0;const D=function(O){b=Math.max(b,t.measureText(O).width+m)};return t.save(),t.font=d.string,K(i.title,D),t.font=r.string,K(i.beforeBody.concat(i.afterBody),D),m=e.displayColors?o+2+e.boxPadding:0,K(n,O=>{K(O.before,D),K(O.lines,D),K(O.after,D)}),m=0,t.font=f.string,K(i.footer,D),t.restore(),b+=N.width,{width:b,height:u}}function D5(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function O5(i,e,t,n){const{x:a,width:s}=n,o=t.caretSize+t.caretPadding;if(i==="left"&&a+s+o>e.width||i==="right"&&a-s-o<0)return!0}function V5(i,e,t,n){const{x:a,width:s}=t,{width:o,chartArea:{left:c,right:r}}=i;let d="center";return n==="center"?d=a<=(c+r)/2?"left":"right":a<=s/2?d="left":a>=o-s/2&&(d="right"),O5(d,i,e,t)&&(d="center"),d}function co(i,e,t){const n=t.yAlign||e.yAlign||D5(i,t);return{xAlign:t.xAlign||e.xAlign||V5(i,e,t,n),yAlign:n}}function C5(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function y5(i,e,t){let{y:n,height:a}=i;return e==="top"?n+=t:e==="bottom"?n-=a+t:n-=a/2,n}function ro(i,e,t,n){const{caretSize:a,caretPadding:s,cornerRadius:o}=i,{xAlign:c,yAlign:r}=t,d=a+s,{topLeft:f,topRight:l,bottomLeft:h,bottomRight:g}=Nt(o);let N=C5(e,c);const u=y5(e,r,d);return r==="center"?c==="left"?N+=d:c==="right"&&(N-=d):c==="left"?N-=Math.max(f,h)+a:c==="right"&&(N+=Math.max(l,g)+a),{x:ee(N,0,n.width-e.width),y:ee(u,0,n.height-e.height)}}function Qi(i,e,t){const n=ce(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function fo(i){return Ae([],Me(i))}function A5(i,e,t){return nt(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function lo(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const cr={beforeTitle:_e,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:_e,beforeBody:_e,beforeLabel:_e,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return L(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:_e,afterBody:_e,beforeFooter:_e,footer:_e,afterFooter:_e};function re(i,e,t,n){const a=i[e].call(t,n);return typeof a>"u"?cr[e].call(t,n):a}class Xn extends ye{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),a=n.enabled&&t.options.animation&&n.animations,s=new zc(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=A5(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,a=re(n,"beforeTitle",this,e),s=re(n,"title",this,e),o=re(n,"afterTitle",this,e);let c=[];return c=Ae(c,Me(a)),c=Ae(c,Me(s)),c=Ae(c,Me(o)),c}getBeforeBody(e,t){return fo(re(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,a=[];return K(e,s=>{const o={before:[],lines:[],after:[]},c=lo(n,s);Ae(o.before,Me(re(c,"beforeLabel",this,s))),Ae(o.lines,re(c,"label",this,s)),Ae(o.after,Me(re(c,"afterLabel",this,s))),a.push(o)}),a}getAfterBody(e,t){return fo(re(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,a=re(n,"beforeFooter",this,e),s=re(n,"footer",this,e),o=re(n,"afterFooter",this,e);let c=[];return c=Ae(c,Me(a)),c=Ae(c,Me(s)),c=Ae(c,Me(o)),c}_createItems(e){const t=this._active,n=this.chart.data,a=[],s=[],o=[];let c=[],r,d;for(r=0,d=t.length;r<d;++r)c.push(p5(this.chart,t[r]));return e.filter&&(c=c.filter((f,l,h)=>e.filter(f,l,h,n))),e.itemSort&&(c=c.sort((f,l)=>e.itemSort(f,l,n))),K(c,f=>{const l=lo(e.callbacks,f);a.push(re(l,"labelColor",this,f)),s.push(re(l,"labelPointStyle",this,f)),o.push(re(l,"labelTextColor",this,f))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=c,c}update(e,t){const n=this.options.setContext(this.getContext()),a=this._active;let s,o=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const c=Ut[n.position].call(this,a,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const r=this._size=oo(this,n),d=Object.assign({},c,r),f=co(this.chart,n,d),l=ro(n,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,s={opacity:1,x:l.x,y:l.y,width:r.width,height:r.height,caretX:c.x,caretY:c.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,a){const s=this.getCaretPosition(e,n,a);t.lineTo(s.x1,s.y1),t.lineTo(s.x2,s.y2),t.lineTo(s.x3,s.y3)}getCaretPosition(e,t,n){const{xAlign:a,yAlign:s}=this,{caretSize:o,cornerRadius:c}=n,{topLeft:r,topRight:d,bottomLeft:f,bottomRight:l}=Nt(c),{x:h,y:g}=e,{width:N,height:u}=t;let b,B,m,D,O,x;return s==="center"?(O=g+u/2,a==="left"?(b=h,B=b-o,D=O+o,x=O-o):(b=h+N,B=b+o,D=O-o,x=O+o),m=b):(a==="left"?B=h+Math.max(r,f)+o:a==="right"?B=h+N-Math.max(d,l)-o:B=this.caretX,s==="top"?(D=g,O=D-o,b=B-o,m=B+o):(D=g+u,O=D+o,b=B+o,m=B-o),x=D),{x1:b,x2:B,x3:m,y1:D,y2:O,y3:x}}drawTitle(e,t,n){const a=this.title,s=a.length;let o,c,r;if(s){const d=yt(n.rtl,this.x,this.width);for(e.x=Qi(this,n.titleAlign,n),t.textAlign=d.textAlign(n.titleAlign),t.textBaseline="middle",o=Z(n.titleFont),c=n.titleSpacing,t.fillStyle=n.titleColor,t.font=o.string,r=0;r<s;++r)t.fillText(a[r],d.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+c,r+1===s&&(e.y+=n.titleMarginBottom-c)}}_drawColorBox(e,t,n,a,s){const o=this.labelColors[n],c=this.labelPointStyles[n],{boxHeight:r,boxWidth:d}=s,f=Z(s.bodyFont),l=Qi(this,"left",s),h=a.x(l),g=r<f.lineHeight?(f.lineHeight-r)/2:0,N=t.y+g;if(s.usePointStyle){const u={radius:Math.min(d,r)/2,pointStyle:c.pointStyle,rotation:c.rotation,borderWidth:1},b=a.leftForLtr(h,d)+d/2,B=N+r/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,Wn(e,u,b,B),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Wn(e,u,b,B)}else{e.lineWidth=R(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const u=a.leftForLtr(h,d),b=a.leftForLtr(a.xPlus(h,1),d-2),B=Nt(o.borderRadius);Object.values(B).some(m=>m!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,li(e,{x:u,y:N,w:d,h:r,radius:B}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),li(e,{x:b,y:N+1,w:d-2,h:r-2,radius:B}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(u,N,d,r),e.strokeRect(u,N,d,r),e.fillStyle=o.backgroundColor,e.fillRect(b,N+1,d-2,r-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:a}=this,{bodySpacing:s,bodyAlign:o,displayColors:c,boxHeight:r,boxWidth:d,boxPadding:f}=n,l=Z(n.bodyFont);let h=l.lineHeight,g=0;const N=yt(n.rtl,this.x,this.width),u=function(V){t.fillText(V,N.x(e.x+g),e.y+h/2),e.y+=h+s},b=N.textAlign(o);let B,m,D,O,x,A,y;for(t.textAlign=o,t.textBaseline="middle",t.font=l.string,e.x=Qi(this,b,n),t.fillStyle=n.bodyColor,K(this.beforeBody,u),g=c&&b!=="right"?o==="center"?d/2+f:d+2+f:0,O=0,A=a.length;O<A;++O){for(B=a[O],m=this.labelTextColors[O],t.fillStyle=m,K(B.before,u),D=B.lines,c&&D.length&&(this._drawColorBox(t,e,O,N,n),h=Math.max(l.lineHeight,r)),x=0,y=D.length;x<y;++x)u(D[x]),h=l.lineHeight;K(B.after,u)}g=0,h=l.lineHeight,K(this.afterBody,u),e.y-=s}drawFooter(e,t,n){const a=this.footer,s=a.length;let o,c;if(s){const r=yt(n.rtl,this.x,this.width);for(e.x=Qi(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=r.textAlign(n.footerAlign),t.textBaseline="middle",o=Z(n.footerFont),t.fillStyle=n.footerColor,t.font=o.string,c=0;c<s;++c)t.fillText(a[c],r.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+n.footerSpacing}}drawBackground(e,t,n,a){const{xAlign:s,yAlign:o}=this,{x:c,y:r}=e,{width:d,height:f}=n,{topLeft:l,topRight:h,bottomLeft:g,bottomRight:N}=Nt(a.cornerRadius);t.fillStyle=a.backgroundColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.beginPath(),t.moveTo(c+l,r),o==="top"&&this.drawCaret(e,t,n,a),t.lineTo(c+d-h,r),t.quadraticCurveTo(c+d,r,c+d,r+h),o==="center"&&s==="right"&&this.drawCaret(e,t,n,a),t.lineTo(c+d,r+f-N),t.quadraticCurveTo(c+d,r+f,c+d-N,r+f),o==="bottom"&&this.drawCaret(e,t,n,a),t.lineTo(c+g,r+f),t.quadraticCurveTo(c,r+f,c,r+f-g),o==="center"&&s==="left"&&this.drawCaret(e,t,n,a),t.lineTo(c,r+l),t.quadraticCurveTo(c,r,c+l,r),t.closePath(),t.fill(),a.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,a=n&&n.x,s=n&&n.y;if(a||s){const o=Ut[e.position].call(this,this._active,this._eventPosition);if(!o)return;const c=this._size=oo(this,e),r=Object.assign({},o,this._size),d=co(t,e,r),f=ro(e,r,d,t);(a._to!==f.x||s._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=c.width,this.height=c.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=ce(t.padding),c=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&c&&(e.save(),e.globalAlpha=n,this.drawBackground(s,e,a,t),Qc(e,t.textDirection),s.y+=o.top,this.drawTitle(s,e,t),this.drawBody(s,e,t),this.drawFooter(s,e,t),Ec(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,a=e.map(({datasetIndex:c,index:r})=>{const d=this.chart.getDatasetMeta(c);if(!d)throw new Error("Cannot find a dataset at index "+c);return{datasetIndex:c,element:d.data[r],index:r}}),s=!Ji(n,a),o=this._positionChanged(a,t);(s||o)&&(this._active=a,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],o=this._getActiveElements(e,s,t,n),c=this._positionChanged(o,e),r=t||!Ji(o,s)||c;return r&&(this._active=o,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),r}_getActiveElements(e,t,n,a){const s=this.options;if(e.type==="mouseout")return[];if(!a)return t;const o=this.chart.getElementsAtEventForMode(e,s.mode,s,n);return s.reverse&&o.reverse(),o}_positionChanged(e,t){const{caretX:n,caretY:a,options:s}=this,o=Ut[s.position].call(this,e,t);return o!==!1&&(n!==o.x||a!==o.y)}}C(Xn,"positioners",Ut);var S5={id:"tooltip",_element:Xn,positioners:Ut,afterInit(i,e,t){t&&(i.tooltip=new Xn({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:cr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},k5=Object.freeze({__proto__:null,Colors:z3,Decimation:H3,Filler:f5,Legend:b5,SubTitle:x5,Title:B5,Tooltip:S5});const v5=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function G5(i,e,t,n){const a=i.indexOf(e);if(a===-1)return v5(i,e,t,n);const s=i.lastIndexOf(e);return a!==s?t:a}const _5=(i,e)=>i===null?null:ee(Math.round(i),0,e);function ho(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class Jn extends pt{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:a,label:s}of t)n[a]===s&&n.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(L(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:G5(n,e,Q(t,e),this._addedLabels),_5(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(a=this.getLabels().length-1)),this.min=n,this.max=a}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,a=[];let s=this.getLabels();s=e===0&&t===s.length-1?s:s.slice(e,t+1),this._valueRange=Math.max(s.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=e;o<=t;o++)a.push({value:o});return a}getLabelForValue(e){return ho.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}C(Jn,"id","category"),C(Jn,"defaults",{ticks:{callback:ho}});function w5(i,e){const t=[],{bounds:a,step:s,min:o,max:c,precision:r,count:d,maxTicks:f,maxDigits:l,includeBounds:h}=i,g=s||1,N=f-1,{min:u,max:b}=e,B=!L(o),m=!L(c),D=!L(d),O=(b-u)/(l+1);let x=ss((b-u)/N/g)*g,A,y,V,G;if(x<1e-14&&!B&&!m)return[{value:u},{value:b}];G=Math.ceil(b/x)-Math.floor(u/x),G>N&&(x=ss(G*x/N/g)*g),L(r)||(A=Math.pow(10,r),x=Math.ceil(x*A)/A),a==="ticks"?(y=Math.floor(u/x)*x,V=Math.ceil(b/x)*x):(y=u,V=b),B&&m&&s&&A4((c-o)/s,x/1e3)?(G=Math.round(Math.min((c-o)/x,f)),x=(c-o)/G,y=o,V=c):D?(y=B?o:y,V=m?c:V,G=d-1,x=(V-y)/G):(G=(V-y)/x,Xt(G,Math.round(G),x/1e3)?G=Math.round(G):G=Math.ceil(G));const _=Math.max(os(x),os(y));A=Math.pow(10,L(r)?_:r),y=Math.round(y*A)/A,V=Math.round(V*A)/A;let w=0;for(B&&(h&&y!==o?(t.push({value:o}),y<o&&w++,Xt(Math.round((y+w*x)*A)/A,o,No(o,O,i))&&w++):y<o&&w++);w<G;++w){const E=Math.round((y+w*x)*A)/A;if(m&&E>c)break;t.push({value:E})}return m&&h&&V!==c?t.length&&Xt(t[t.length-1].value,c,No(c,O,i))?t[t.length-1].value=c:t.push({value:c}):(!m||V===c)&&t.push({value:V}),t}function No(i,e,{horizontal:t,minRotation:n}){const a=Ve(n),s=(t?Math.sin(a):Math.cos(a))||.001,o=.75*e*(""+i).length;return Math.min(e/s,o)}class cn extends pt{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return L(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:a,max:s}=this;const o=r=>a=t?a:r,c=r=>s=n?s:r;if(e){const r=ve(a),d=ve(s);r<0&&d<0?c(0):r>0&&d>0&&o(0)}if(a===s){let r=s===0?1:Math.abs(s*.05);c(s+r),e||o(a-r)}this.min=a,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,a;return n?(a=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),t=t||11),t&&(a=Math.min(t,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const a={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},s=this._range||this,o=w5(a,s);return e.bounds==="ticks"&&mc(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const a=(n-t)/Math.max(e.length-1,1)/2;t-=a,n+=a}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return xi(e,this.chart.options.locale,this.options.ticks.format)}}class ea extends cn{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=j(e)?e:0,this.max=j(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=Ve(this.options.ticks.minRotation),a=(e?Math.sin(n):Math.cos(n))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,s.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}C(ea,"id","linear"),C(ea,"defaults",{ticks:{callback:fn.formatters.numeric}});const Ni=i=>Math.floor($e(i)),ct=(i,e)=>Math.pow(10,Ni(i)+e);function go(i){return i/Math.pow(10,Ni(i))===1}function uo(i,e,t){const n=Math.pow(10,t),a=Math.floor(i/n);return Math.ceil(e/n)-a}function M5(i,e){const t=e-i;let n=Ni(t);for(;uo(i,e,n)>10;)n++;for(;uo(i,e,n)<10;)n--;return Math.min(n,Ni(i))}function P5(i,{min:e,max:t}){e=ue(i.min,e);const n=[],a=Ni(e);let s=M5(e,t),o=s<0?Math.pow(10,Math.abs(s)):1;const c=Math.pow(10,s),r=a>s?Math.pow(10,a):0,d=Math.round((e-r)*o)/o,f=Math.floor((e-r)/c/10)*c*10;let l=Math.floor((d-f)/Math.pow(10,s)),h=ue(i.min,Math.round((r+f+l*Math.pow(10,s))*o)/o);for(;h<t;)n.push({value:h,major:go(h),significand:l}),l>=10?l=l<15?15:20:l++,l>=20&&(s++,l=2,o=s>=0?1:o),h=Math.round((r+f+l*Math.pow(10,s))*o)/o;const g=ue(i.max,h);return n.push({value:g,major:go(g),significand:l}),n}class ta extends pt{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const n=cn.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return j(n)&&n>0?n:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=j(e)?Math.max(0,e):null,this.max=j(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!j(this._userMin)&&(this.min=e===ct(this.min,0)?ct(this.min,-1):ct(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let n=this.min,a=this.max;const s=c=>n=e?n:c,o=c=>a=t?a:c;n===a&&(n<=0?(s(1),o(10)):(s(ct(n,-1)),o(ct(a,1)))),n<=0&&s(ct(a,-1)),a<=0&&o(ct(n,1)),this.min=n,this.max=a}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},n=P5(t,this);return e.bounds==="ticks"&&mc(n,this,"value"),e.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(e){return e===void 0?"0":xi(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=$e(e),this._valueRange=$e(this.max)-$e(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:($e(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}C(ta,"id","logarithmic"),C(ta,"defaults",{ticks:{callback:fn.formatters.logarithmic,major:{enabled:!0}}});function ia(i){const e=i.ticks;if(e.display&&i.display){const t=ce(e.backdropPadding);return Q(e.font&&e.font.size,q.font.size)+t.height}return 0}function Q5(i,e,t){return t=F(t)?t:[t],{w:T4(i,e.string,t),h:t.length*e.lineHeight}}function bo(i,e,t,n,a){return i===n||i===a?{start:e-t/2,end:e+t/2}:i<n||i>a?{start:e-t,end:e}:{start:e,end:e+t}}function E5(i){const e={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},t=Object.assign({},e),n=[],a=[],s=i._pointLabels.length,o=i.options.pointLabels,c=o.centerPointLabels?W/s:0;for(let r=0;r<s;r++){const d=o.setContext(i.getPointLabelContext(r));a[r]=d.padding;const f=i.getPointPosition(r,i.drawingArea+a[r],c),l=Z(d.font),h=Q5(i.ctx,l,i._pointLabels[r]);n[r]=h;const g=be(i.getIndexAngle(r)+c),N=Math.round(Oa(g)),u=bo(N,f.x,h.w,0,180),b=bo(N,f.y,h.h,90,270);R5(t,e,g,u,b)}i.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),i._pointLabelItems=z5(i,n,a)}function R5(i,e,t,n,a){const s=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t));let c=0,r=0;n.start<e.l?(c=(e.l-n.start)/s,i.l=Math.min(i.l,e.l-c)):n.end>e.r&&(c=(n.end-e.r)/s,i.r=Math.max(i.r,e.r+c)),a.start<e.t?(r=(e.t-a.start)/o,i.t=Math.min(i.t,e.t-r)):a.end>e.b&&(r=(a.end-e.b)/o,i.b=Math.max(i.b,e.b+r))}function L5(i,e,t){const n=i.drawingArea,{extra:a,additionalAngle:s,padding:o,size:c}=t,r=i.getPointPosition(e,n+a+o,s),d=Math.round(Oa(be(r.angle+$))),f=T5(r.y,c.h,d),l=I5(d),h=F5(r.x,c.w,l);return{visible:!0,x:r.x,y:f,textAlign:l,left:h,top:f,right:h+c.w,bottom:f+c.h}}function K5(i,e){if(!e)return!0;const{left:t,top:n,right:a,bottom:s}=i;return!(Ke({x:t,y:n},e)||Ke({x:t,y:s},e)||Ke({x:a,y:n},e)||Ke({x:a,y:s},e))}function z5(i,e,t){const n=[],a=i._pointLabels.length,s=i.options,{centerPointLabels:o,display:c}=s.pointLabels,r={extra:ia(s)/2,additionalAngle:o?W/a:0};let d;for(let f=0;f<a;f++){r.padding=t[f],r.size=e[f];const l=L5(i,f,r);n.push(l),c==="auto"&&(l.visible=K5(l,d),l.visible&&(d=l))}return n}function I5(i){return i===0||i===180?"center":i<180?"left":"right"}function F5(i,e,t){return t==="right"?i-=e:t==="center"&&(i-=e/2),i}function T5(i,e,t){return t===90||t===270?i-=e/2:(t>270||t<90)&&(i-=e),i}function H5(i,e,t){const{left:n,top:a,right:s,bottom:o}=t,{backdropColor:c}=e;if(!L(c)){const r=Nt(e.borderRadius),d=ce(e.backdropPadding);i.fillStyle=c;const f=n-d.left,l=a-d.top,h=s-n+d.width,g=o-a+d.height;Object.values(r).some(N=>N!==0)?(i.beginPath(),li(i,{x:f,y:l,w:h,h:g,radius:r}),i.fill()):i.fillRect(f,l,h,g)}}function W5(i,e){const{ctx:t,options:{pointLabels:n}}=i;for(let a=e-1;a>=0;a--){const s=i._pointLabelItems[a];if(!s.visible)continue;const o=n.setContext(i.getPointLabelContext(a));H5(t,o,s);const c=Z(o.font),{x:r,y:d,textAlign:f}=s;mt(t,i._pointLabels[a],r,d+c.lineHeight/2,c,{color:o.color,textAlign:f,textBaseline:"middle"})}}function rr(i,e,t,n){const{ctx:a}=i;if(t)a.arc(i.xCenter,i.yCenter,e,0,T);else{let s=i.getPointPosition(0,e);a.moveTo(s.x,s.y);for(let o=1;o<n;o++)s=i.getPointPosition(o,e),a.lineTo(s.x,s.y)}}function j5(i,e,t,n,a){const s=i.ctx,o=e.circular,{color:c,lineWidth:r}=e;!o&&!n||!c||!r||t<0||(s.save(),s.strokeStyle=c,s.lineWidth=r,s.setLineDash(a.dash),s.lineDashOffset=a.dashOffset,s.beginPath(),rr(i,t,o,n),s.closePath(),s.stroke(),s.restore())}function $5(i,e,t){return nt(i,{label:t,index:e,type:"pointLabel"})}class Yt extends cn{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=ce(ia(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=j(e)&&!isNaN(e)?e:0,this.max=j(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ia(this.options))}generateTickLabels(e){cn.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,n)=>{const a=I(this.options.pointLabels.callback,[t,n],this);return a||a===0?a:""}).filter((t,n)=>this.chart.getDataVisibility(n))}fit(){const e=this.options;e.display&&e.pointLabels.display?E5(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,a){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,a))}getIndexAngle(e){const t=T/(this._pointLabels.length||1),n=this.options.startAngle||0;return be(e*t+Ve(n))}getDistanceFromCenterForValue(e){if(L(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(L(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const n=t[e];return $5(this.getContext(),e,n)}}getPointPosition(e,t,n=0){const a=this.getIndexAngle(e)-$+n;return{x:Math.cos(a)*t+this.xCenter,y:Math.sin(a)*t+this.yCenter,angle:a}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:n,right:a,bottom:s}=this._pointLabelItems[e];return{left:t,top:n,right:a,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const n=this.ctx;n.save(),n.beginPath(),rr(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:n,grid:a,border:s}=t,o=this._pointLabels.length;let c,r,d;if(t.pointLabels.display&&W5(this,o),a.display&&this.ticks.forEach((f,l)=>{if(l!==0){r=this.getDistanceFromCenterForValue(f.value);const h=this.getContext(l),g=a.setContext(h),N=s.setContext(h);j5(this,g,r,o,N)}}),n.display){for(e.save(),c=o-1;c>=0;c--){const f=n.setContext(this.getPointLabelContext(c)),{color:l,lineWidth:h}=f;!h||!l||(e.lineWidth=h,e.strokeStyle=l,e.setLineDash(f.borderDash),e.lineDashOffset=f.borderDashOffset,r=this.getDistanceFromCenterForValue(t.ticks.reverse?this.min:this.max),d=this.getPointPosition(c,r),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(d.x,d.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;const a=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((c,r)=>{if(r===0&&!t.reverse)return;const d=n.setContext(this.getContext(r)),f=Z(d.font);if(s=this.getDistanceFromCenterForValue(this.ticks[r].value),d.showLabelBackdrop){e.font=f.string,o=e.measureText(c.label).width,e.fillStyle=d.backdropColor;const l=ce(d.backdropPadding);e.fillRect(-o/2-l.left,-s-f.size/2-l.top,o+l.width,f.size+l.height)}mt(e,c.label,0,-s,f,{color:d.color})}),e.restore()}drawTitle(){}}C(Yt,"id","radialLinear"),C(Yt,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:fn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),C(Yt,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),C(Yt,"descriptors",{angleLines:{_fallback:"grid"}});const gn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},de=Object.keys(gn);function q5(i,e){return i-e}function mo(i,e){if(L(e))return null;const t=i._adapter,{parser:n,round:a,isoWeekday:s}=i._parseOpts;let o=e;return typeof n=="function"&&(o=n(o)),j(o)||(o=typeof n=="string"?t.parse(o,n):t.parse(o)),o===null?null:(a&&(o=a==="week"&&(St(s)||s===!0)?t.startOf(o,"isoWeek",s):t.startOf(o,a)),+o)}function Bo(i,e,t,n){const a=de.length;for(let s=de.indexOf(i);s<a-1;++s){const o=gn[de[s]],c=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-e)/(c*o.size))<=n)return de[s]}return de[a-1]}function U5(i,e,t,n,a){for(let s=de.length-1;s>=de.indexOf(t);s--){const o=de[s];if(gn[o].common&&i._adapter.diff(a,n,o)>=e-1)return o}return de[t?de.indexOf(t):0]}function Y5(i){for(let e=de.indexOf(i)+1,t=de.length;e<t;++e)if(gn[de[e]].common)return de[e]}function xo(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:a}=Va(t,e),s=t[n]>=e?t[n]:t[a];i[s]=!0}}function Z5(i,e,t,n){const a=i._adapter,s=+a.startOf(e[0].value,n),o=e[e.length-1].value;let c,r;for(c=s;c<=o;c=+a.add(c,1,n))r=t[c],r>=0&&(e[r].major=!0);return e}function po(i,e,t){const n=[],a={},s=e.length;let o,c;for(o=0;o<s;++o)c=e[o],a[c]=o,n.push({value:c,major:!1});return s===0||!t?n:Z5(i,n,a,t)}class gi extends pt{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),a=this._adapter=new sh._date(e.adapters.date);a.init(t),Zt(n.displayFormats,a.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:mo(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:a,max:s,minDefined:o,maxDefined:c}=this.getUserBounds();function r(d){!o&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!c&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!o||!c)&&(r(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&r(this.getMinMax(!1))),a=j(a)&&!isNaN(a)?a:+t.startOf(Date.now(),n),s=j(s)&&!isNaN(s)?s:+t.endOf(Date.now(),n)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,a=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,o=this.max,c=G4(a,s,o);return this._unit=t.unit||(n.autoSkip?Bo(t.minUnit,this.min,this.max,this._getLabelCapacity(s)):U5(this,c.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Y5(this._unit),this.initOffsets(a),e.reverse&&c.reverse(),po(this,c,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,a,s;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?t=1-a:t=(this.getDecimalForValue(e[1])-a)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?n=s:n=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;t=ee(t,0,o),n=ee(n,0,o),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,a=this.options,s=a.time,o=s.unit||Bo(s.minUnit,t,n,this._getLabelCapacity(t)),c=Q(a.ticks.stepSize,1),r=o==="week"?s.isoWeekday:!1,d=St(r)||r===!0,f={};let l=t,h,g;if(d&&(l=+e.startOf(l,"isoWeek",r)),l=+e.startOf(l,d?"day":o),e.diff(n,t,o)>1e5*c)throw new Error(t+" and "+n+" are too far apart with stepSize of "+c+" "+o);const N=a.ticks.source==="data"&&this.getDataTimestamps();for(h=l,g=0;h<n;h=+e.add(h,c,o),g++)xo(f,h,N);return(h===n||a.bounds==="ticks"||g===1)&&xo(f,h,N),Object.keys(f).sort((u,b)=>u-b).map(u=>+u)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const a=this.options.time.displayFormats,s=this._unit,o=t||a[s];return this._adapter.format(e,o)}_tickFormatFunction(e,t,n,a){const s=this.options,o=s.ticks.callback;if(o)return I(o,[e,t,n],this);const c=s.time.displayFormats,r=this._unit,d=this._majorUnit,f=r&&c[r],l=d&&c[d],h=n[t],g=d&&l&&h&&h.major;return this._adapter.format(e,a||(g?l:f))}generateTickLabels(e){let t,n,a;for(t=0,n=e.length;t<n;++t)a=e[t],a.label=this._tickFormatFunction(a.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,a=Ve(this.isHorizontal()?t.maxRotation:t.minRotation),s=Math.cos(a),o=Math.sin(a),c=this._resolveTickFontOptions(0).size;return{w:n*s+c*o,h:n*o+c*s}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,a=n[t.unit]||n.millisecond,s=this._tickFormatFunction(e,0,po(this,[e],this._majorUnit),a),o=this._getLabelSize(s),c=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return c>0?c:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(t=0,n=a.length;t<n;++t)e=e.concat(a[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const a=this.getLabels();for(t=0,n=a.length;t<n;++t)e.push(mo(this,a[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return pc(e.sort(q5))}}C(gi,"id","time"),C(gi,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ei(i,e,t){let n=0,a=i.length-1,s,o,c,r;t?(e>=i[n].pos&&e<=i[a].pos&&({lo:n,hi:a}=Le(i,"pos",e)),{pos:s,time:c}=i[n],{pos:o,time:r}=i[a]):(e>=i[n].time&&e<=i[a].time&&({lo:n,hi:a}=Le(i,"time",e)),{time:s,pos:c}=i[n],{time:o,pos:r}=i[a]);const d=o-s;return d?c+(r-c)*(e-s)/d:c}class na extends gi{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Ei(t,this.min),this._tableRange=Ei(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,a=[],s=[];let o,c,r,d,f;for(o=0,c=e.length;o<c;++o)d=e[o],d>=t&&d<=n&&a.push(d);if(a.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(o=0,c=a.length;o<c;++o)f=a[o+1],r=a[o-1],d=a[o],Math.round((f+r)/2)!==d&&s.push({time:d,pos:o/(c-1)});return s}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Ei(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Ei(this._table,n*this._tableRange+this._minPos,!0)}}C(na,"id","timeseries"),C(na,"defaults",gi.defaults);var X5=Object.freeze({__proto__:null,CategoryScale:Jn,LinearScale:ea,LogarithmicScale:ta,RadialLinearScale:Yt,TimeScale:gi,TimeSeriesScale:na});const J5=[ah,P3,k5,X5];Qe.register(...J5);const eN={name:"Graph",props:["data"],mounted(){this.renderChart()},methods:{renderChart(){const i=document.getElementById("Graph");let e=[],t=this.data.length;for(let n=0;n<t;n++)e.push("");this.chart&&this.chart.destroy(),this.chart=new Qe(i,{type:"line",data:{labels:e,datasets:[{data:this.data,fill:{target:"origin",below:"#334155",above:"#cbd5e1"},borderWidth:0,pointRadius:0,tension:.4}]},options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"rgb(255,255,255)"}}}}})}},watch:{data(i){this.renderChart()}}},tN={class:"chart-container h-full w-full"},iN=p("canvas",{id:"Graph"},null,-1),nN=[iN];function aN(i,e,t,n,a,s){return S(),k("div",tN,nN)}const sN=et(eN,[["render",aN]]),oN={props:{bestmove:{required:!0},moves:{required:!0}},data(){return{opening:{m:"Startin Position",t:[],a:[]},oldMoves:[]}},watch:{moves(i,e){console.log("UPDATE MOVES"),this.update()},bestmove(i,e){console.log("BESTMOVE update"),console.log(this.moves),this.update()}},methods:{update(){if(console.log("updated called"),this.oldMoves.length!=this.moves.length){if(console.log("MOOOOOOOOOOOOOVES"+this.moves),this.moves!=[]){let i=Mo(this.moves);i!=null&&(this.opening=i)}this.oldMoves=JSON.parse(JSON.stringify(this.moves))}}},beforeMount(){this.update()},updated(){this.update()}},cN={class:"bg-base-300 rounded-lg h-full w-full p-2"},rN=p("br",null,null,-1),dN={class:"badge badge-accent font-bold mr-2"};function fN(i,e,t,n,a,s){return S(),k("div",cN,[Qa(v(a.opening.m)+" ",1),rN,(S(!0),k(bi,null,rn(a.opening.a,(o,c)=>(S(),k("div",{key:c},[p("div",dN,v(o),1)]))),128)),Qa(" "+v(t.bestmove),1)])}const lN=et(oN,[["render",fN]]),hN={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0},accuracy:{type:Number,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/standard-avatar.png"}}},beforeMount(){this.updateUser()},methods:{updateUser(){So.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},NN={key:0,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2"},gN={class:"flex flex-row items-center"},uN=["src"],bN={class:"flex flex-col justify-center items-center"},mN={class:"text-l font-bold"},BN={class:"text-xs px-3"},xN={class:"items-center flex justify-center border border-black border-solid rounded-lg w-10 h-10 mt-6 bg-white text-black"},pN={key:1,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2 pl-2"},DN={class:"flex flex-row items-center"},ON=["src"],VN={class:"flex flex-col justify-center items-center"},CN={class:"text-l font-bold"},yN={class:"text-xs px-3"},AN={class:"items-center flex justify-center border border-white border-solid rounded-lg w-10 h-10 mt-6 bg-black"};function SN(i,e,t,n,a,s){return t.color?(S(),k("div",NN,[p("div",gN,[p("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,uN),p("div",bN,[p("h2",mN,v(a.user.username),1),p("p",BN,v(this.elo),1)])]),p("div",xN,v(this.accuracy),1)])):(S(),k("div",pN,[p("div",DN,[p("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,ON),p("div",VN,[p("h2",CN,v(a.user.username),1),p("p",yN,v(this.elo),1)])]),p("div",AN,v(this.accuracy),1)]))}const kN=et(hN,[["render",SN]]);const vN={props:{square:{type:String,required:!0},annotation:{type:String,required:!0}},computed:{annotationStyle(){if(this.annotation=="")return;const[i,e]=this.square.split(""),t=i.charCodeAt(0)-97,n=8-parseInt(e,10);return{position:"absolute",left:`${t*10+25}%`,top:`${n*13}%`,transform:"translate(-50%, -50%)"}}}},GN=["src"];function _N(i,e,t,n,a,s){return this.annotation!=""?(S(),k("div",{key:0,style:Do(s.annotationStyle),class:"annotation"},[p("img",{src:"/pegasus/anotations/"+t.annotation,alt:"Annotation"},null,8,GN)],4)):aa("",!0)}const wN=et(vN,[["render",_N]]),MN="/pegasus/assets/pegasus-graph-golden-coin-game-4949ef63.png",PN="/pegasus/assets/loading-22969543.svg",QN="/pegasus/anotations/bookMove.png",EN="/pegasus/anotations/brilliant.png",RN="/pegasus/anotations/great.png",LN="/pegasus/anotations/bestmove.png",KN="/pegasus/anotations/goodMove.png",zN="/pegasus/anotations/okmove.png",IN="/pegasus/anotations/inaccuracy.png",FN="/pegasus/anotations/mistake.png",TN="/pegasus/anotations/blunder.png",HN={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},created(){try{this.pgn=(mr().query.pgn??void 0).toString(),console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history(),console.log(this.history),this.moves=[];let i=0;if(this.history[0].endsWith("5")||this.history[0].endsWith("6"))for(console.log("...");i<this.history.length;)this.moves.push([this.history[i+1],this.history[i]]),i+=2;else for(;i<this.history.length;)this.moves.push([this.history[i],this.history[i+1]]),i+=2;console.log(this.moves),this.history=[].concat(...this.moves).reverse(),this.historyConstant=JSON.parse(JSON.stringify(this.history)),this.chess.reset();const e=s=>{const c=/\[BlackElo "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.blackElo=e(this.pgn);const t=s=>{const c=/\[WhiteElo "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.whiteElo=t(this.pgn);const n=s=>{const c=/\[White "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.whitePlayer=n(this.pgn);const a=s=>{const c=/\[Black "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.blackPlayer=a(this.pgn),console.log("finished setup")}catch{this.chess=null}},data(){return{playerIsWhite:!0,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",chess:new un,score:0,stockfish:null,custom:0,size:600,history:null,pgn:"",blackElo:"",whiteElo:"",blackPlayer:"",whitePlayer:"",positionInfo:null,bestmove:"",moves:[],historyStack:[],board:null,pawnStructure:0,fens:[[0,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","e4e5","bookMove"]],i:0,evals:[],historyConstant:[],graphEvaled:!1,annotatedMove:"",annotatedPosition:"",bookMoves:[0,0],bestMoves:[0,0],goodMoves:[0,0],okMoves:[0,0],innacurateMoves:[0,0],mistakeMoves:[0,0],blunderMoves:[0,0],pawnEvaluation:50,annotationPairs:[]}},methods:{turnBoard(){this.playerIsWhite=!this.playerIsWhite},evaluatePosition(){console.log("evaluating!"+this.fen),bn(this.fen,(i,e)=>{console.log("Received score:"+i),console.log("Received Bestmove:"+e),this.score=i,this.bestmove=e})},evaluatePositionQuick(i=void 0){i==null&&(i=this.fen),bn(i,(e,t)=>{console.log("Received score:"+e),console.log("Received Bestmove:"+t),console.log(this.fens[this.i]),console.log(i),console.log(this.i),this.fens[this.i][1]===i?(this.fens[this.i]=[e,i,t,""],console.log("Overwriting...")):(this.fens.push([e,i,t,""]),console.log("New FEN"),this.i++)},1e3)},async goThrough(){await new Promise(t=>setTimeout(t,1e3)),this.evaluatePosition(),await new Promise(t=>setTimeout(t,3500));let i=new un;console.log("Hello");let e=JSON.parse(JSON.stringify(this.historyConstant.reverse()));console.log(e),i.reset();for(let t of e)t!=null&&(console.log(t),i.move(t),console.log("madeMove"),this.evaluatePositionQuick(i.fen()),await new Promise(n=>setTimeout(n,1200)));console.log("FEEEEEEEEEEEEEEEEEENS"),console.log(this.fens);for(let t of this.fens)console.log(t),this.evals.push(t[0]);console.log(this.evals),this.graphEvaled=!0,this.annotateMoves(),Rn()},annotateMoves(){let i=[],e=[],t=0;for(let a of this.fens){if(i.push(""+this.historyConstant[t]),t==0)t++;else{try{let s=Mo(i).t;if(console.log("The Opening:"),console.log(s),console.log("The previous Opening:"),console.log(e),console.log("The Moves"),console.log(i),s.length>e.length||s.length>=i.length-1)console.log("bookMove"),this.fens[t][3]="bookMove",this.bookMoves[(t+1)%2]++,e=s;else{let o=this.fens[t-1][1],c=a[1],r=new un(o);r.move(this.fens[t-1][2].split(" ")[0],!1),r.fen()==c?(this.fens[t][3]="bestmove",this.bestMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<.3&&this.fens[t-1][0]-a[0]>-.3?(this.fens[t][3]="goodMove",this.goodMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<.7&&this.fens[t-1][0]-a[0]>-.7?(this.fens[t][3]="okmove",this.okMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<1&&this.fens[t-1][0]-a[0]>-1?(this.fens[t][3]="inaccuracy",this.innacurateMoves[(t+1)%2]++):this.fens[t-1][0]-a[0]<2.5&&this.fens[t-1][0]-a[0]>-2.5?(this.fens[t][3]="mistake",this.mistakeMoves[(t+1)%2]++):(this.fens[t][3]="blunder",this.blunderMoves[(t+1)%2]++)}}catch{}t++}console.log(a)}for(let a of this.fens)console.log(a[3]);let n=1;for(;n<this.fens.length;){try{this.annotationPairs.push([this.fens[n][3],this.fens[n+1][3]])}catch{this.annotationPairs.push([this.fens[n][3],""])}n+=2}console.log(this.annotationPairs)},extractDestinationSquare(i){const e=/[a-h][1-8]$/;return e.test(i)?i.match(e)[0]:""},handleMove(i){this.fen=i.after,this.evaluatePosition()},moveCall(){if(console.log("moveCall"),!this.chess.isGameOver()){console.log(this.history);let i=this.history.pop();this.annotatedPosition=this.extractDestinationSquare(i),console.log("_____________"),console.log(this.fens[this.historyStack.length]),this.annotatedMove=this.fens[this.historyStack.length+1][3]+".png",this.chess.move(i),this.historyStack.push(i),this.fen=this.chess.fen(),this.evaluatePosition()}},backMove(){console.log(this.historyStack),this.historyStack.length!=0&&(this.chess.undo(),this.history.push(this.historyStack.pop()),this.fen=this.chess.fen(),this.evaluatePosition())},completeBack(){console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history(),this.moves=[];let i=0;if(this.history[0].endsWith("5")||this.history[0].endsWith("6"))for(console.log("...");i<this.history.length;)this.moves.push([this.history[i+1],this.history[i]]),i+=2;else for(;i<this.history.length;)this.moves.push([this.history[i],this.history[i+1]]),i+=2;console.log(this.moves),this.history=[].concat(...this.moves).reverse(),this.chess.reset(),this.evaluatePosition()},completeEnd(){for(;this.history.length!=0;)this.historyStack.push(this.history.pop());this.chess.loadPgn(this.pgn),this.fen=this.chess.fen(),this.evaluatePosition()},evaluatePawns(){let i=this.extractPawnsAndKingsFromFEN(this.chess.fen());console.log("evaluating Pawns! "+i),bn(i,(e,t)=>{console.log("Received score:"+e),this.pawnEvaluation=50-e*5,console.log(this.pawnEvaluation)},1e3)},extractPawnsAndKingsFromFEN(i){const[e,t,n,a,s]=i.split(" "),o=e.replace(/[^pkPK1-8/]/g,"_");console.log(o);let c="",r=0;for(let f=0;f<o.length;f++){const l=o.charAt(f);l==="_"?r++:(r>0&&(c+=r,r=0),c+=l)}return r>0&&(c+=r),[c,t,"-",a,s].join(" ")}},components:{StockfishPanel:$f,EvalBar:Sr,UserAnalyzeBar:Er,EvalCircle:Fr,Chessboard:wf,Graph:sN,moveInfo:lN,GameSummaryUser:kN,Annotation:wN}},WN={key:0,class:"grid place-content-center min-h-screen text-secondary font-mono"},jN={key:1,class:"flex items-center justify-between h-screen flex-row py-3 space-x-4 px-2"},$N={class:"h-full basis-1/2 flex"},qN={class:"flex flex-grow flex-col py-3 space-y-4 justify-center"},UN={class:"flex h-full relative"},YN={class:"h-full w-full bg-base-100 m-2 flex flex-row basis-1/2 space-x-2"},ZN={class:"h-full basis-1/2 flex flex-col space-y-2"},XN={key:0,class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 justify-center items-center flex relative"},JN=p("img",{src:MN,class:""},null,-1),eg={class:"absolute inset-0 flex items-center justify-center"},tg={key:1,class:"px-4 py-2 bg-secondary rounded-lg"},ig=p("img",{src:PN},null,-1),ng=[ig],ag={key:1,class:"w-full basis-1/6 bg-base-300 rounded-lg p-2"},sg={class:"w-full flex-grow basis-1/4"},og={class:"basis-2/3 bg-base-300 w-full rounded-lg p-2 flex justify-center flex-col"},cg={class:"w-full flex flex-row h-1/3"},rg=p("div",{class:"divider-vertical w-[1px] bg-slate-500 h-2/3 rounded-lg"},null,-1),dg={class:"flex-grow"},fg={class:"flex-content"},lg={class:"p-4 w-full flex flex-col items-center scrollable-content-wrapper"},hg={class:"flex flex-row gap-10 py-1 text-orange-800 min-h-8 h-[10%]"},Ng=p("img",{src:QN},null,-1),gg=p("div",{class:"flex flex-row gap-10 py-1 text-secondary min-h-8 h-[10%]"},[p("p",null,"1"),p("img",{src:EN}),p("p",null,"0")],-1),ug=p("div",{class:"flex flex-row gap-10 py-1 text-pink-300 min-h-8 h-[10%]"},[p("p",null,"2"),p("img",{src:RN}),p("p",null,"3")],-1),bg={class:"flex flex-row gap-10 py-1 text-green-500 min-h-8 h-[10%]"},mg=p("img",{src:LN},null,-1),Bg={class:"flex flex-row gap-10 py-1 text-green-800 min-h-8 h-[10%]"},xg=p("img",{src:KN},null,-1),pg={class:"flex flex-row gap-10 py-1 text-green-300 min-h-8 h-[10%]"},Dg=p("img",{src:zN},null,-1),Og={class:"flex flex-row gap-10 py-1 text-yellow-400 min-h-8 h-[10%]"},Vg=p("img",{src:IN},null,-1),Cg={class:"flex flex-row gap-10 py-1 text-orange-600 min-h-8 h-[10%]"},yg=p("img",{src:FN},null,-1),Ag={class:"flex flex-row gap-10 py-1 text-red-600 min-h-8 h-[10%]"},Sg=p("img",{src:TN},null,-1),kg={class:"h-full flex flex-col overflow-hidden basis-1/2 space-y-2"},vg={class:"w-full",style:{"flex-basis":"45%"}},Gg={class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 flex justify-around flex-col"},_g={class:"grid grid-cols-3 w-full place-items-center"},wg={class:"w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2",style:{"flex-basis":"55%"}},Mg={class:"flex-grow"},Pg={class:"flex-content"},Qg={class:"scrollable-content-wrapper scroll-fade"},Eg={key:0,class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl bg-accent"},Rg={key:0,class:"flex justify-center"},Lg={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},Kg={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},zg={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},Ig={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},Fg={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},Tg={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},Hg={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},Wg={key:7,class:"badge bg-slate-300 text-slate-900 border-slate-900"},jg={key:1,class:"flex justify-center"},$g={class:"badge bg-slate-300 text-slate-900 border-slate-900"},qg={key:2,class:"flex justify-center"},Ug={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},Yg={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},Zg={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},Xg={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},Jg={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},e6={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},t6={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},i6={key:7,class:"badge bg-slate-900 text-slate-100 border-slate-100"},n6={key:3,class:"flex justify-center"},a6={class:"badge bg-slate-900 text-slate-100 border-slate-100"},s6={key:1,class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl"},o6={key:0,class:"flex justify-center"},c6={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},r6={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},d6={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},f6={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},l6={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},h6={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},N6={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},g6={key:7,class:"badge bg-slate-300 text-slate-900 border-slate-900"},u6={key:1,class:"flex justify-center"},b6={class:"badge bg-slate-300 text-slate-900 border-slate-900"},m6={key:2,class:"flex justify-center"},B6={key:0,class:"badge bg-orange-900 text-slate-200 border-slate-200"},x6={key:1,class:"badge bg-green-500 text-slate-900 border-slate-900"},p6={key:2,class:"badge bg-green-500 text-slate-900 border-slate-900"},D6={key:3,class:"badge bg-green-300 text-slate-900 border-slate-900"},O6={key:4,class:"badge bg-yellow-500 text-slate-900 border-slate-900"},V6={key:5,class:"badge bg-orange-500 text-slate-900 border-slate-900"},C6={key:6,class:"badge bg-red-700 text-slate-900 border-slate-900"},y6={key:7,class:"badge bg-slate-900 text-slate-100 border-slate-100"},A6={key:3,class:"flex justify-center"},S6={class:"badge bg-slate-900 text-slate-100 border-slate-100"},k6={class:"bottom-3 w-full h-12 grid grid-cols-5 gap-x-1"},v6={class:"btn-accent btn"},G6={class:"btn-accent btn"},_6={class:"btn-accent btn"},w6={class:"btn-accent btn"},M6={class:"btn-accent btn"};function P6(i,e,t,n,a,s){const o=Ge("UserAnalyzeBar"),c=Ge("EvalBar"),r=Ge("Chessboard"),d=Ge("Annotation"),f=Ge("graph"),l=Ge("moveInfo"),h=Ge("GameSummaryUser"),g=Ge("StockfishPanel"),N=Ge("EvalCircle");return this.chess===null?(S(),k("div",WN," Invalide PGN ")):(S(),k("div",jN,[p("div",$N,[p("div",qN,[ae(o,{color:!a.playerIsWhite,elo:a.playerIsWhite?a.blackElo:a.whiteElo,username:a.playerIsWhite?a.blackPlayer:a.whitePlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"]),p("div",UN,[ae(c,{ref:"evalBar",evaluation:a.score,whiteBottom:a.playerIsWhite,class:"h-full"},null,8,["evaluation","whiteBottom"]),ae(r,{onMove:s.handleMove,fen:a.fen,orientation:a.playerIsWhite?"white":"black"},null,8,["onMove","fen","orientation"]),ae(d,{square:this.annotatedPosition,annotation:this.annotatedMove},null,8,["square","annotation"])]),ae(o,{color:a.playerIsWhite,elo:a.playerIsWhite?a.whiteElo:a.blackElo,username:a.playerIsWhite?a.whitePlayer:a.blackPlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"])])]),p("div",YN,[p("div",ZN,[this.graphEvaled?(S(),k("div",ag,[ae(f,{data:this.evals},null,8,["data"])])):(S(),k("div",XN,[JN,p("div",eg,[this.i==0?(S(),k("button",{key:0,class:"px-4 py-2 btn btn-secondary btn-outline",onClick:e[0]||(e[0]=(...u)=>s.goThrough&&s.goThrough(...u))},"Load Graph")):(S(),k("div",tg,ng))])])),p("div",sg,[ae(l,{moves:this.historyStack,bestmove:this.bestmove},null,8,["moves","bestmove"])]),p("div",og,[p("div",cg,[ae(h,{accuracy:100,color:!0,elo:a.whiteElo,username:a.whitePlayer},null,8,["elo","username"]),rg,ae(h,{accuracy:100,color:!1,elo:a.blackElo,username:a.blackPlayer},null,8,["elo","username"])]),p("div",dg,[p("div",fg,[p("div",lg,[p("div",hg,[p("p",null,v(a.bookMoves[0]),1),Ng,p("p",null,v(a.bookMoves[1]),1)]),gg,ug,p("div",bg,[p("p",null,v(a.bestMoves[0]),1),mg,p("p",null,v(a.bestMoves[1]),1)]),p("div",Bg,[p("p",null,v(a.goodMoves[0]),1),xg,p("p",null,v(a.goodMoves[1]),1)]),p("div",pg,[p("p",null,v(a.okMoves[0]),1),Dg,p("p",null,v(a.okMoves[1]),1)]),p("div",Og,[p("p",null,v(a.innacurateMoves[0]),1),Vg,p("p",null,v(a.innacurateMoves[1]),1)]),p("div",Cg,[p("p",null,v(a.mistakeMoves[0]),1),yg,p("p",null,v(a.mistakeMoves[1]),1)]),p("div",Ag,[p("p",null,v(a.blunderMoves[0]),1),Sg,p("p",null,v(a.blunderMoves[1]),1)])])])])])]),p("div",kg,[p("div",vg,[ae(g)]),p("div",Gg,[p("div",_g,[ae(N,{evaluation:this.pawnEvaluation,typee:"pawn"},null,8,["evaluation"]),ae(N,{evaluation:20,typee:"NotPawn"}),ae(N,{evaluation:40,typee:"AlsoNotPawn"}),p("button",{class:"btn-primary btn",onClick:e[1]||(e[1]=(...u)=>s.evaluatePawns&&s.evaluatePawns(...u))},"Eval Pawns")])]),p("div",wg,[p("div",Mg,[p("div",Pg,[p("div",Qg,[(S(!0),k(bi,null,rn(this.moves,(u,b)=>(S(),k("div",{key:b,class:"w-full items-center justify-center"},[2*b+2==this.historyStack.length||2*b+1==this.historyStack.length?(S(),k("div",Eg,[this.graphEvaled?(S(),k("div",Rg,[this.annotationPairs[b][0]=="bookMove"?(S(),k("div",Lg,v(u[0]),1)):this.annotationPairs[b][0]=="bestmove"?(S(),k("div",Kg,v(u[0]),1)):this.annotationPairs[b][0]=="goodMove"?(S(),k("div",zg,v(u[0]),1)):this.annotationPairs[b][0]=="okmove"?(S(),k("div",Ig,v(u[0]),1)):this.annotationPairs[b][0]=="inaccuracy"?(S(),k("div",Fg,v(u[0]),1)):this.annotationPairs[b][0]=="mistake"?(S(),k("div",Tg,v(u[0]),1)):this.annotationPairs[b][0]=="blunder"?(S(),k("div",Hg,v(u[0]),1)):(S(),k("div",Wg,v(u[0]),1))])):(S(),k("div",jg,[p("div",$g,v(u[0]),1)])),this.graphEvaled?(S(),k("div",qg,[this.annotationPairs[b][1]=="bookMove"?(S(),k("div",Ug,v(u[1]),1)):this.annotationPairs[b][1]=="bestmove"?(S(),k("div",Yg,v(u[1]),1)):this.annotationPairs[b][1]=="goodMove"?(S(),k("div",Zg,v(u[1]),1)):this.annotationPairs[b][1]=="okmove"?(S(),k("div",Xg,v(u[1]),1)):this.annotationPairs[b][1]=="inaccuracy"?(S(),k("div",Jg,v(u[1]),1)):this.annotationPairs[b][1]=="mistake"?(S(),k("div",e6,v(u[1]),1)):this.annotationPairs[b][1]=="blunder"?(S(),k("div",t6,v(u[1]),1)):(S(),k("div",i6,v(u[1]),1))])):(S(),k("div",n6,[p("div",a6,v(u[1]),1)]))])):(S(),k("div",s6,[this.graphEvaled?(S(),k("div",o6,[this.annotationPairs[b][0]=="bookMove"?(S(),k("div",c6,v(u[0]),1)):this.annotationPairs[b][0]=="bestmove"?(S(),k("div",r6,v(u[0]),1)):this.annotationPairs[b][0]=="goodMove"?(S(),k("div",d6,v(u[0]),1)):this.annotationPairs[b][0]=="okmove"?(S(),k("div",f6,v(u[0]),1)):this.annotationPairs[b][0]=="inaccuracy"?(S(),k("div",l6,v(u[0]),1)):this.annotationPairs[b][0]=="mistake"?(S(),k("div",h6,v(u[0]),1)):this.annotationPairs[b][0]=="blunder"?(S(),k("div",N6,v(u[0]),1)):(S(),k("div",g6,v(u[0]),1))])):(S(),k("div",u6,[p("div",b6,v(u[0]),1)])),this.graphEvaled?(S(),k("div",m6,[this.annotationPairs[b][1]=="bookMove"?(S(),k("div",B6,v(u[1]),1)):this.annotationPairs[b][1]=="bestmove"?(S(),k("div",x6,v(u[1]),1)):this.annotationPairs[b][1]=="goodMove"?(S(),k("div",p6,v(u[1]),1)):this.annotationPairs[b][1]=="okmove"?(S(),k("div",D6,v(u[1]),1)):this.annotationPairs[b][1]=="inaccuracy"?(S(),k("div",O6,v(u[1]),1)):this.annotationPairs[b][1]=="mistake"?(S(),k("div",V6,v(u[1]),1)):this.annotationPairs[b][1]=="blunder"?(S(),k("div",C6,v(u[1]),1)):(S(),k("div",y6,v(u[1]),1))])):(S(),k("div",A6,[p("div",S6,v(u[1]),1)]))]))]))),128))])])]),p("div",k6,[p("button",v6,[p("span",{class:"material-symbols-outlined",onClick:e[2]||(e[2]=(...u)=>s.completeBack&&s.completeBack(...u))}," keyboard_double_arrow_left ")]),p("button",G6,[p("span",{class:"material-symbols-outlined",onClick:e[3]||(e[3]=(...u)=>s.backMove&&s.backMove(...u))}," chevron_left ")]),p("button",_6,[p("span",{class:"material-symbols-outlined",onClick:e[4]||(e[4]=(...u)=>s.goThrough&&s.goThrough(...u))}," auto_awesome ")]),p("button",w6,[p("span",{class:"material-symbols-outlined",onClick:e[5]||(e[5]=(...u)=>s.moveCall&&s.moveCall(...u))}," chevron_right ")]),p("button",M6,[p("span",{class:"material-symbols-outlined",onClick:e[6]||(e[6]=(...u)=>s.completeEnd&&s.completeEnd(...u))}," keyboard_double_arrow_right ")])])])])])]))}const z6=et(HN,[["render",P6]]);export{z6 as default};
