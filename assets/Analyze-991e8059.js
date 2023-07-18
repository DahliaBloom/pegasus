var ar=Object.defineProperty;var sr=(i,e,t)=>e in i?ar(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var V=(i,e,t)=>(sr(i,typeof e!="symbol"?e+"":e,t),t);import{r as gi,_ as et,b as E,c as K,g as p,t as R,n as yt,y as or,z as mo,A as xo,B as Ga,o as cr,C as Hi,s as po,D as Do,p as cn,F as ui,T as rr,E as dr,i as ae,m as Oo,l as We,w as Ao,v as Vo,d as fr,k as wa,q as lr,h as Ge}from"./index-8476518c.js";import{c as Co,C as Nn}from"./chess-d99999e1.js";import"./_commonjsHelpers-725317a4.js";let ji,Pt=0,Ui=null,yo="";const Yi=gi(!1),Tt=gi(3e3),ii=gi([]);So();function _n(i,e=!0){this.msg=i,this.stockfish=e}function So(){console.log("Starting stockfish"),Stockfish().then(i=>{i.addMessageListener(Nr),i.postMessage("uci"),i.postMessage("setoption name use nnue value true"),i.postMessage("setoption name Threads value 16"),i.postMessage("setoption name Hash value 128"),i.postMessage("setoption name UCI_AnalyseMode value true"),i.postMessage("ucinewgame"),ji=i,console.log("Stockfish started")})}function hr(i){switch(ii.value.push(new _n(i)),i){case"uciok":Yi.value=!0;break}}function Nr(i){if(hr(i),console.log(i),i.startsWith("info depth")){const t=/ cp (-?\d+)/.exec(i);if(t===null){const o=/score mate (\d+)/.exec(i);Pt=parseFloat(o[1])*100}else Pt=parseFloat(t[1])/100;const a=/ pv (.+)/.exec(i);console.log("bestmove: "+a[1]),console.log("Pegasus Final Score: "+Pt),yo.split(" ")[1]=="w"?Ui(Pt,a[1]):Ui(-Pt,a[1])}}async function Ma(i,e,t=0){ji===void 0&&e(0,"stockfish undefined"),t==0&&(t=Tt.value),yo=i,Rn(`position fen ${i}`),Rn(`go movetime ${t}`),Ui=e}function Pn(){Yi.value=!1,So()}function Rn(i,e=void 0){console.log(i),e!==void 0&&(Ui=e),ji!==void 0?(ii.value.push(new _n(i,!1)),ji.postMessage(i)):ii.value.push(new _n("Stockfish not running"))}const ia={props:{evaluation:{type:Number,required:!0},whiteBottom:{type:Boolean,required:!0}},data(){return{height:50,heightString:"50%"}},methods:{update(){if(this.heightString=this.height+"%",console.log("update"),this.evaluation==="0.0"||this.evaluation==="0"){this.height=50,this.heightString=this.height+"%";return}let i=Number(this.evaluation);if(console.log("TMP:"+i),i>=100){this.height=100,this.heightString="100%";return}if(i<-100){this.height=0,this.heightString="0%";return}i>0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=70+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=80+i,console.log("-9< x <9")):i>11&&(this.height=50+Math.log(Math.abs(i))*30)),i<0&&(Math.abs(i)<1?(this.height=50+i*10,console.log("-1< x <1")):Math.abs(i)<3?(this.height=50+i*8,console.log("-3< x <3")):Math.abs(i)<6?(this.height=30+i*2,console.log("-6< x <6")):Math.abs(i)<11?(this.height=20+i,console.log("-9< x <9")):i<-11&&(this.height=50-Math.log(Math.abs(i))*30)),this.height>96&&(this.height=96),this.height<4&&(this.height=4),this.heightString=this.height+"%"}},beforeMount(){this.update()},updated(){this.update()}},_a=()=>{or(i=>({"611bb3c4":i.heightString}))},Pa=ia.setup;ia.setup=Pa?(i,e)=>(_a(),Pa(i,e)):_a;const gr={class:"h-full w-24 flex flex-row flex-none pr-3 items-center space-x-3"},ur={class:"w-4 h-full relative"},br={class:"h-full rounded-lg bg-slate-700"};function Br(i,e,t,n,a,s){return E(),K("div",gr,[p("div",{class:yt(["badge flex-grow border-none",[t.evaluation>=0?"bg-slate-300":"bg-slate-700",t.evaluation>=0?"text-sla":"text-slate-300"]])},R(Math.abs(t.evaluation)),3),p("div",ur,[p("div",br,[p("div",{class:yt(["w-full absolute left-0 evalWhite bg-slate-300",[t.whiteBottom?"bottom-0":"top-0",t.whiteBottom?"rounded-b-lg":"rounded-t-lg"]])},null,2)])])])}const mr=et(ia,[["render",Br],["__scopeId","data-v-82eeea00"]]),xr={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/standard-avatar.png"}}},beforeMount(){this.updateUser()},watch:{color(){this.updateUser()}},methods:{updateUser(){Co.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},pr={class:"flex justify-center items-center"},Dr=["src"],Or=["src"],Ar={class:"flex flex-row items-baseline"},Vr={class:"text-xl font-bold"},Cr={class:"text-xs px-3"};function yr(i,e,t,n,a,s){return E(),K("div",pr,[t.color?(E(),K("img",{key:0,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-300",src:a.user.avatar,alt:""},null,8,Dr)):(E(),K("img",{key:1,class:"w-8 h-8 border-2 mr-2 rounded-lg border-slate-700",src:a.user.avatar,alt:""},null,8,Or)),p("div",Ar,[p("h2",Vr,R(a.user.username),1),p("p",Cr,R(this.elo),1)]),p("button",{class:"rounded-full p-2 text-white",onClick:e[0]||(e[0]=o=>i.$emit("turnBoard"))},"↻")])}const Sr=et(xr,[["render",yr]]),kr={props:{evaluation:{type:Number,required:!0}},data(){return{height:40,styleString:"background: conic-gradient(#F741B8 36deg 60deg, #475569 36deg); border-radius: 50%;"}},methods:{update(){this.height=this.evaluation,this.styleString="background: conic-gradient(#F741B8 36deg "+360*(this.height/100)+"deg, #475569 36deg); border-radius: 50%;"}},beforeMount(){this.update()},updated(){this.update()}},vr=p("div",{class:"h-12 w-12 bg-base-100 rounded-full"},null,-1),Gr=[vr];function wr(i,e,t,n,a,s){return E(),K("div",{class:"h-20 w-20 m-2 flex items-center justify-center",style:mo(a.styleString)},Gr,4)}const Mr=et(kr,[["render",wr]]);function ko(i){const t=`A00	Amar Gambit	1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4
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
`).map(a=>a.trim());let n=[];console.log("UNICORN"),console.log(i);for(const a of t){let o=a.split("	")[2].split(" ");o=o.filter(c=>!c.endsWith(".")),o.every((c,r)=>c===i[r])&&n.push({t:o,m:a.split("	")[1],a:a.split("	")[0][0]})}return n.length==0?null:(n.sort(a=>{a.t.length}),n[n.length-1].a==["A"]&&(n[n.length-1].a=["Flank Attack"]),n[n.length-1].a==["B"]&&(n[n.length-1].a=["Semi-Open Game"]),n[n.length-1].a==["C"]&&(n[n.length-1].a=["Open Game"]),n[n.length-1].a==["D"]&&(n[n.length-1].a=["Closed Position"]),n[n.length-1].a==["E"]&&(n[n.length-1].a=["Indian Game"]),n[n.length-1])}const _r={class:"promotion-dialog",open:""},Pr=["aria-label","onClick","onTouchstartPassive"],Rr=xo({__name:"PromotionDialog",props:{state:{}},emits:["promotionSelected"],setup(i,{emit:e}){const t=i,n=[{name:"Queen",data:"q"},{name:"Knight",data:"n"},{name:"Rook",data:"r"},{name:"Bishop",data:"b"}];function a(s){var o,c;(c=(o=t.state).callback)==null||c.call(o,s.data),e("promotionSelected")}return(s,o)=>(E(),po(rr,{to:"cg-board"},[p("dialog",_r,[(E(),K(ui,null,cn(n,c=>p("button",{key:c.name,class:yt([c.name.toLowerCase(),s.state.color]),"aria-label":c.name,onClick:r=>a(c),onTouchstartPassive:r=>a(c)},null,42,Pr)),64))])]))}});/**
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
 */const ne="w",me="b",J="p",En="n",Ri="b",Wt="r",He="q",$="k",gn="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Ne=-1,Er={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},Qr=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"],G={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},w={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},un={b:[16,32,17,15],w:[-16,-32,-17,-15]},Ra={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},Kr=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],Lr=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],zr={p:1,n:2,b:4,r:8,q:16,k:32},Ir="pnbrqkPNBRQK",Ea=[En,Ri,Wt,He],Fr=7,Tr=6,Wr=1,Hr=0,Di={[$]:G.KSIDE_CASTLE,[He]:G.QSIDE_CASTLE},ze={w:[{square:w.a1,flag:G.QSIDE_CASTLE},{square:w.h1,flag:G.KSIDE_CASTLE}],b:[{square:w.a8,flag:G.QSIDE_CASTLE},{square:w.h8,flag:G.KSIDE_CASTLE}]},jr={b:Wr,w:Tr},Ur=["1-0","0-1","1/2-1/2","*"];function ht(i){return i>>4}function ni(i){return i&15}function vo(i){return"0123456789".indexOf(i)!==-1}function ge(i){const e=ni(i),t=ht(i);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function Rt(i){return i===ne?me:ne}function Yr(i){const e=i.split(/\s+/);if(e.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const t=parseInt(e[5],10);if(isNaN(t)||t<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const n=parseInt(e[4],10);if(isNaN(n)||n<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const a=e[0].split("/");if(a.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let o=0;o<a.length;o++){let c=0,r=!1;for(let d=0;d<a[o].length;d++)if(vo(a[o][d])){if(r)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};c+=parseInt(a[o][d],10),r=!0}else{if(!/^[prnbqkPRNBQK]$/.test(a[o][d]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};c+=1,r=!1}if(c!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(e[3][1]=="3"&&e[1]=="w"||e[3][1]=="6"&&e[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const s=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:o,regex:c}of s){if(!c.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${o} king`};if((e[0].match(c)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${o} kings`}}return{ok:!0}}function Zr(i,e){const t=i.from,n=i.to,a=i.piece;let s=0,o=0,c=0;for(let r=0,d=e.length;r<d;r++){const f=e[r].from,l=e[r].to,h=e[r].piece;a===h&&t!==f&&n===l&&(s++,ht(t)===ht(f)&&o++,ni(t)===ni(f)&&c++)}return s>0?o>0&&c>0?ge(t):c>0?ge(t).charAt(1):ge(t).charAt(0):""}function Ie(i,e,t,n,a,s=void 0,o=G.NORMAL){const c=ht(n);if(a===J&&(c===Fr||c===Hr))for(let r=0;r<Ea.length;r++){const d=Ea[r];i.push({color:e,from:t,to:n,piece:a,captured:s,promotion:d,flags:o|G.PROMOTION})}else i.push({color:e,from:t,to:n,piece:a,captured:s,flags:o})}function Qa(i){let e=i.charAt(0);return e>="a"&&e<="h"?i.match(/[a-h]\d.*[a-h]\d/)?void 0:J:(e=e.toLowerCase(),e==="o"?$:e)}function bn(i){return i.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class qr{constructor(e=gn){V(this,"_board",new Array(128));V(this,"_turn",ne);V(this,"_header",{});V(this,"_kings",{w:Ne,b:Ne});V(this,"_epSquare",-1);V(this,"_halfMoves",0);V(this,"_moveNumber",0);V(this,"_history",[]);V(this,"_comments",{});V(this,"_castling",{w:0,b:0});this.load(e)}clear(e=!1){this._board=new Array(128),this._kings={w:Ne,b:Ne},this._turn=ne,this._castling={w:0,b:0},this._epSquare=Ne,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{},this._updateSetup(this.fen())}removeHeader(e){e in this._header&&delete this._header[e]}load(e,t=!1){let n=e.split(/\s+/);if(n.length>=2&&n.length<6){const r=["-","-","0","1"];e=n.concat(r.slice(-(6-n.length))).join(" ")}n=e.split(/\s+/);const{ok:a,error:s}=Yr(e);if(!a)throw new Error(s);const o=n[0];let c=0;this.clear(t);for(let r=0;r<o.length;r++){const d=o.charAt(r);if(d==="/")c+=8;else if(vo(d))c+=parseInt(d,10);else{const f=d<"a"?ne:me;this.put({type:d.toLowerCase(),color:f},ge(c)),c++}}this._turn=n[1],n[2].indexOf("K")>-1&&(this._castling.w|=G.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(this._castling.w|=G.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(this._castling.b|=G.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(this._castling.b|=G.QSIDE_CASTLE),this._epSquare=n[3]==="-"?Ne:w[n[3]],this._halfMoves=parseInt(n[4],10),this._moveNumber=parseInt(n[5],10),this._updateSetup(this.fen())}fen(){var s,o;let e=0,t="";for(let c=w.a8;c<=w.h1;c++){if(this._board[c]){e>0&&(t+=e,e=0);const{color:r,type:d}=this._board[c];t+=r===ne?d.toUpperCase():d.toLowerCase()}else e++;c+1&136&&(e>0&&(t+=e),c!==w.h1&&(t+="/"),e=0,c+=8)}let n="";this._castling[ne]&G.KSIDE_CASTLE&&(n+="K"),this._castling[ne]&G.QSIDE_CASTLE&&(n+="Q"),this._castling[me]&G.KSIDE_CASTLE&&(n+="k"),this._castling[me]&G.QSIDE_CASTLE&&(n+="q"),n=n||"-";let a="-";if(this._epSquare!==Ne){const c=this._epSquare+(this._turn===ne?16:-16),r=[c+1,c-1];for(const d of r){if(d&136)continue;const f=this._turn;if(((s=this._board[d])==null?void 0:s.color)===f&&((o=this._board[d])==null?void 0:o.type)===J){this._makeMove({color:f,from:d,to:this._epSquare,piece:J,captured:J,flags:G.EP_CAPTURE});const l=!this._isKingAttacked(f);if(this._undoMove(),l){a=ge(this._epSquare);break}}}}return[t,this._turn,n,a,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(e){this._history.length>0||(e!==gn?(this._header.SetUp="1",this._header.FEN=e):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(gn)}get(e){return this._board[w[e]]||!1}put({type:e,color:t},n){if(Ir.indexOf(e.toLowerCase())===-1||!(n in w))return!1;const a=w[n];return e==$&&!(this._kings[t]==Ne||this._kings[t]==a)?!1:(this._board[a]={type:e,color:t},e===$&&(this._kings[t]=a),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),!0)}remove(e){const t=this.get(e);return delete this._board[w[e]],t&&t.type===$&&(this._kings[t.color]=Ne),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),t}_updateCastlingRights(){var n,a,s,o,c,r,d,f,l,h,g,N;const e=((n=this._board[w.e1])==null?void 0:n.type)===$&&((a=this._board[w.e1])==null?void 0:a.color)===ne,t=((s=this._board[w.e8])==null?void 0:s.type)===$&&((o=this._board[w.e8])==null?void 0:o.color)===me;(!e||((c=this._board[w.a1])==null?void 0:c.type)!==Wt||((r=this._board[w.a1])==null?void 0:r.color)!==ne)&&(this._castling.w&=~G.QSIDE_CASTLE),(!e||((d=this._board[w.h1])==null?void 0:d.type)!==Wt||((f=this._board[w.h1])==null?void 0:f.color)!==ne)&&(this._castling.w&=~G.KSIDE_CASTLE),(!t||((l=this._board[w.a8])==null?void 0:l.type)!==Wt||((h=this._board[w.a8])==null?void 0:h.color)!==me)&&(this._castling.b&=~G.QSIDE_CASTLE),(!t||((g=this._board[w.h8])==null?void 0:g.type)!==Wt||((N=this._board[w.h8])==null?void 0:N.color)!==me)&&(this._castling.b&=~G.KSIDE_CASTLE)}_updateEnPassantSquare(){var s,o;if(this._epSquare===Ne)return;const e=this._epSquare+(this._turn===ne?-16:16),t=this._epSquare+(this._turn===ne?16:-16),n=[t+1,t-1];if(this._board[e]!==null||this._board[this._epSquare]!==null||((s=this._board[t])==null?void 0:s.color)!==Rt(this._turn)||((o=this._board[t])==null?void 0:o.type)!==J){this._epSquare=Ne;return}const a=c=>{var r,d;return!(c&136)&&((r=this._board[c])==null?void 0:r.color)===this._turn&&((d=this._board[c])==null?void 0:d.type)===J};n.some(a)||(this._epSquare=Ne)}_attacked(e,t){for(let n=w.a8;n<=w.h1;n++){if(n&136){n+=7;continue}if(this._board[n]===void 0||this._board[n].color!==e)continue;const a=this._board[n],s=n-t;if(s===0)continue;const o=s+119;if(Kr[o]&zr[a.type]){if(a.type===J){if(s>0){if(a.color===ne)return!0}else if(a.color===me)return!0;continue}if(a.type==="n"||a.type==="k")return!0;const c=Lr[o];let r=n+c,d=!1;for(;r!==t;){if(this._board[r]!=null){d=!0;break}r+=c}if(!d)return!0}}return!1}_isKingAttacked(e){const t=this._kings[e];return t===-1?!1:this._attacked(Rt(e),t)}isAttacked(e,t){return this._attacked(t,w[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let n=0,a=0;for(let s=w.a8;s<=w.h1;s++){if(a=(a+1)%2,s&136){s+=7;continue}const o=this._board[s];o&&(e[o.type]=o.type in e?e[o.type]+1:1,o.type===Ri&&t.push(a),n++)}if(n===2||n===3&&(e[Ri]===1||e[En]===1))return!0;if(n===e[Ri]+2){let s=0;const o=t.length;for(let c=0;c<o;c++)s+=t[c];if(s===0||s===o)return!0}return!1}isThreefoldRepetition(){const e=[],t={};let n=!1;for(;;){const a=this._undoMove();if(!a)break;e.push(a)}for(;;){const a=this.fen().split(" ").slice(0,4).join(" ");t[a]=a in t?t[a]+1:1,t[a]>=3&&(n=!0);const s=e.pop();if(s)this._makeMove(s);else break}return n}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0,piece:n=void 0}={}){const a=this._moves({square:t,piece:n});return e?a.map(s=>this._makePretty(s)):a.map(s=>this._moveToSan(s,a))}_moves({legal:e=!0,piece:t=void 0,square:n=void 0}={}){var g;const a=n?n.toLowerCase():void 0,s=t==null?void 0:t.toLowerCase(),o=[],c=this._turn,r=Rt(c);let d=w.a8,f=w.h1,l=!1;if(a)if(a in w)d=f=w[a],l=!0;else return[];for(let N=d;N<=f;N++){if(N&136){N+=7;continue}if(!this._board[N]||this._board[N].color===r)continue;const{type:u}=this._board[N];let b;if(u===J){if(s&&s!==u)continue;b=N+un[c][0],this._board[b]||(Ie(o,c,N,b,J),b=N+un[c][1],jr[c]===ht(N)&&!this._board[b]&&Ie(o,c,N,b,J,void 0,G.BIG_PAWN));for(let m=2;m<4;m++)b=N+un[c][m],!(b&136)&&(((g=this._board[b])==null?void 0:g.color)===r?Ie(o,c,N,b,J,this._board[b].type,G.CAPTURE):b===this._epSquare&&Ie(o,c,N,b,J,J,G.EP_CAPTURE))}else{if(s&&s!==u)continue;for(let m=0,B=Ra[u].length;m<B;m++){const D=Ra[u][m];for(b=N;b+=D,!(b&136);){if(!this._board[b])Ie(o,c,N,b,u);else{if(this._board[b].color===c)break;Ie(o,c,N,b,u,this._board[b].type,G.CAPTURE);break}if(u===En||u===$)break}}}}if((s===void 0||s===$)&&(!l||f===this._kings[c])){if(this._castling[c]&G.KSIDE_CASTLE){const N=this._kings[c],u=N+2;!this._board[N+1]&&!this._board[u]&&!this._attacked(r,this._kings[c])&&!this._attacked(r,N+1)&&!this._attacked(r,u)&&Ie(o,c,this._kings[c],u,$,void 0,G.KSIDE_CASTLE)}if(this._castling[c]&G.QSIDE_CASTLE){const N=this._kings[c],u=N-2;!this._board[N-1]&&!this._board[N-2]&&!this._board[N-3]&&!this._attacked(r,this._kings[c])&&!this._attacked(r,N-1)&&!this._attacked(r,u)&&Ie(o,c,this._kings[c],u,$,void 0,G.QSIDE_CASTLE)}}if(!e||this._kings[c]===-1)return o;const h=[];for(let N=0,u=o.length;N<u;N++)this._makeMove(o[N]),this._isKingAttacked(c)||h.push(o[N]),this._undoMove();return h}move(e,{strict:t=!1}={}){let n=null;if(typeof e=="string")n=this._moveFromSan(e,t);else if(typeof e=="object"){const s=this._moves();for(let o=0,c=s.length;o<c;o++)if(e.from===ge(s[o].from)&&e.to===ge(s[o].to)&&(!("promotion"in s[o])||e.promotion===s[o].promotion)){n=s[o];break}}if(!n)throw typeof e=="string"?new Error(`Invalid move: ${e}`):new Error(`Invalid move: ${JSON.stringify(e)}`);const a=this._makePretty(n);return this._makeMove(n),a}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(e){const t=this._turn,n=Rt(t);if(this._push(e),this._board[e.to]=this._board[e.from],delete this._board[e.from],e.flags&G.EP_CAPTURE&&(this._turn===me?delete this._board[e.to-16]:delete this._board[e.to+16]),e.promotion&&(this._board[e.to]={type:e.promotion,color:t}),this._board[e.to].type===$){if(this._kings[t]=e.to,e.flags&G.KSIDE_CASTLE){const a=e.to-1,s=e.to+1;this._board[a]=this._board[s],delete this._board[s]}else if(e.flags&G.QSIDE_CASTLE){const a=e.to+1,s=e.to-2;this._board[a]=this._board[s],delete this._board[s]}this._castling[t]=0}if(this._castling[t]){for(let a=0,s=ze[t].length;a<s;a++)if(e.from===ze[t][a].square&&this._castling[t]&ze[t][a].flag){this._castling[t]^=ze[t][a].flag;break}}if(this._castling[n]){for(let a=0,s=ze[n].length;a<s;a++)if(e.to===ze[n][a].square&&this._castling[n]&ze[n][a].flag){this._castling[n]^=ze[n][a].flag;break}}e.flags&G.BIG_PAWN?t===me?this._epSquare=e.to-16:this._epSquare=e.to+16:this._epSquare=Ne,e.piece===J?this._halfMoves=0:e.flags&(G.CAPTURE|G.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===me&&this._moveNumber++,this._turn=n}undo(){const e=this._undoMove();return e?this._makePretty(e):null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber;const n=this._turn,a=Rt(n);if(this._board[t.from]=this._board[t.to],this._board[t.from].type=t.piece,delete this._board[t.to],t.captured)if(t.flags&G.EP_CAPTURE){let s;n===me?s=t.to-16:s=t.to+16,this._board[s]={type:J,color:a}}else this._board[t.to]={type:t.captured,color:a};if(t.flags&(G.KSIDE_CASTLE|G.QSIDE_CASTLE)){let s,o;t.flags&G.KSIDE_CASTLE?(s=t.to+1,o=t.to-1):(s=t.to-2,o=t.to+1),this._board[s]=this._board[o],delete this._board[o]}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const n=[];let a=!1;for(const h in this._header)n.push("["+h+' "'+this._header[h]+'"]'+e),a=!0;a&&this._history.length&&n.push(e);const s=h=>{const g=this._comments[this.fen()];if(typeof g<"u"){const N=h.length>0?" ":"";h=`${h}${N}{${g}}`}return h},o=[];for(;this._history.length>0;)o.push(this._undoMove());const c=[];let r="";for(o.length===0&&c.push(s(""));o.length>0;){r=s(r);const h=o.pop();if(!h)break;if(!this._history.length&&h.color==="b"){const g=`${this._moveNumber}. ...`;r=r?`${r} ${g}`:g}else h.color==="w"&&(r.length&&c.push(r),r=this._moveNumber+".");r=r+" "+this._moveToSan(h,this._moves({legal:!0})),this._makeMove(h)}if(r.length&&c.push(s(r)),typeof this._header.Result<"u"&&c.push(this._header.Result),t===0)return n.join("")+c.join(" ");const d=function(){return n.length>0&&n[n.length-1]===" "?(n.pop(),!0):!1},f=function(h,g){for(const N of g.split(" "))if(N){if(h+N.length>t){for(;d();)h--;n.push(e),h=0}n.push(N),h+=N.length,n.push(" "),h++}return d()&&h--,h};let l=0;for(let h=0;h<c.length;h++){if(l+c[h].length>t&&c[h].includes("{")){l=f(l,c[h]);continue}l+c[h].length>t&&h!==0?(n[n.length-1]===" "&&n.pop(),n.push(e),l=0):h!==0&&(n.push(" "),l++),n.push(c[h]),l+=c[h].length}return n.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}loadPgn(e,{strict:t=!1,newlineChar:n=`\r?
`}={}){function a(B){return B.replace(/\\/g,"\\")}function s(B){const D={},O=B.split(new RegExp(a(n)));let x="",y="";for(let C=0;C<O.length;C++){const A=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;x=O[C].replace(A,"$1"),y=O[C].replace(A,"$2"),x.trim().length>0&&(D[x]=y)}return D}e=e.trim();const o=new RegExp("^(\\[((?:"+a(n)+")|.)*\\])((?:\\s*"+a(n)+"){2}|(?:\\s*"+a(n)+")*$)").exec(e),c=o&&o.length>=2?o[1]:"";this.reset();const r=s(c);let d="";for(const B in r)B.toLowerCase()==="fen"&&(d=r[B]),this.header(B,r[B]);if(!t)d&&this.load(d,!0);else if(r.SetUp==="1"){if(!("FEN"in r))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(r.FEN,!0)}function f(B){return Array.from(B).map(function(D){return D.charCodeAt(0)<128?D.charCodeAt(0).toString(16):encodeURIComponent(D).replace(/%/g,"").toLowerCase()}).join("")}function l(B){return B.length==0?"":decodeURIComponent("%"+(B.match(/.{1,2}/g)||[]).join("%"))}const h=function(B){return B=B.replace(new RegExp(a(n),"g")," "),`{${f(B.slice(1,B.length-1))}}`},g=function(B){if(B.startsWith("{")&&B.endsWith("}"))return l(B.slice(1,B.length-1))};let N=e.replace(c,"").replace(new RegExp(`({[^}]*})+?|;([^${a(n)}]*)`,"g"),function(B,D,O){return D!==void 0?h(D):" "+h(`{${O.slice(1)}}`)}).replace(new RegExp(a(n),"g")," ");const u=/(\([^()]+\))+?/g;for(;u.test(N);)N=N.replace(u,"");N=N.replace(/\d+\.(\.\.)?/g,""),N=N.replace(/\.\.\./g,""),N=N.replace(/\$\d+/g,"");let b=N.trim().split(new RegExp(/\s+/));b=b.filter(B=>B!=="");let m="";for(let B=0;B<b.length;B++){const D=g(b[B]);if(D!==void 0){this._comments[this.fen()]=D;continue}const O=this._moveFromSan(b[B],t);if(O==null)if(Ur.indexOf(b[B])>-1)m=b[B];else throw new Error(`Invalid move in PGN: ${b[B]}`);else m="",this._makeMove(O)}m&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",m)}_moveToSan(e,t){let n="";if(e.flags&G.KSIDE_CASTLE)n="O-O";else if(e.flags&G.QSIDE_CASTLE)n="O-O-O";else{if(e.piece!==J){const a=Zr(e,t);n+=e.piece.toUpperCase()+a}e.flags&(G.CAPTURE|G.EP_CAPTURE)&&(e.piece===J&&(n+=ge(e.from)[0]),n+="x"),n+=ge(e.to),e.promotion&&(n+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?n+="#":n+="+"),this._undoMove(),n}_moveFromSan(e,t=!1){const n=bn(e);let a=Qa(n),s=this._moves({legal:!0,piece:a});for(let h=0,g=s.length;h<g;h++)if(n===bn(this._moveToSan(s[h],s)))return s[h];if(t)return null;let o,c,r,d,f,l=!1;if(c=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),c?(o=c[1],r=c[2],d=c[3],f=c[4],r.length==1&&(l=!0)):(c=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),c&&(o=c[1],r=c[2],d=c[3],f=c[4],r.length==1&&(l=!0))),a=Qa(n),s=this._moves({legal:!0,piece:o||a}),!d)return null;for(let h=0,g=s.length;h<g;h++)if(r){if((!o||o.toLowerCase()==s[h].piece)&&w[r]==s[h].from&&w[d]==s[h].to&&(!f||f.toLowerCase()==s[h].promotion))return s[h];if(l){const N=ge(s[h].from);if((!o||o.toLowerCase()==s[h].piece)&&w[d]==s[h].to&&(r==N[0]||r==N[1])&&(!f||f.toLowerCase()==s[h].promotion))return s[h]}}else if(n===bn(this._moveToSan(s[h],s)).replace("x",""))return s[h];return null}ascii(){let e=`   +------------------------+
`;for(let t=w.a8;t<=w.h1;t++){if(ni(t)===0&&(e+=" "+"87654321"[ht(t)]+" |"),this._board[t]){const n=this._board[t].type,a=this._board[t].color===ne?n.toUpperCase():n.toLowerCase();e+=" "+a+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let n=0;const a=this._turn;for(let s=0,o=t.length;s<o;s++)this._makeMove(t[s]),this._isKingAttacked(a)||(e-1>0?n+=this.perft(e-1):n++),this._undoMove();return n}_makePretty(e){const{color:t,piece:n,from:a,to:s,flags:o,captured:c,promotion:r}=e;let d="";for(const g in G)G[g]&o&&(d+=Er[g]);const f=ge(a),l=ge(s),h={color:t,piece:n,from:f,to:l,san:this._moveToSan(e,this._moves({legal:!0})),flags:d,lan:f+l,before:this.fen(),after:""};return this._makeMove(e),h.after=this.fen(),this._undoMove(),c&&(h.captured=c),r&&(h.promotion=r,h.lan+=r),h}turn(){return this._turn}board(){const e=[];let t=[];for(let n=w.a8;n<=w.h1;n++)this._board[n]==null?t.push(null):t.push({square:ge(n),type:this._board[n].type,color:this._board[n].color}),n+1&136&&(e.push(t),t=[],n+=8);return e}squareColor(e){if(e in w){const t=w[e];return(ht(t)+ni(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],n=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const a=t.pop();if(!a)break;e?n.push(this._makePretty(a)):n.push(this._moveToSan(a,this._moves())),this._makeMove(a)}return n}_pruneComments(){const e=[],t={},n=a=>{a in this._comments&&(t[a]=this._comments[a])};for(;this._history.length>0;)e.push(this._undoMove());for(n(this.fen());;){const a=e.pop();if(!a)break;this._makeMove(a),n(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}setCastlingRights(e,t){for(const a of[$,He])t[a]!==void 0&&(t[a]?this._castling[e]|=Di[a]:this._castling[e]&=~Di[a]);this._updateCastlingRights();const n=this.getCastlingRights(e);return(t[$]===void 0||t[$]===n[$])&&(t[He]===void 0||t[He]===n[He])}getCastlingRights(e){return{[$]:(this._castling[e]&Di[$])!==0,[He]:(this._castling[e]&Di[He])!==0}}moveNumber(){return this._moveNumber}}function Xr(i){const e=[];for(const t of i)e.push({orig:t.to,brush:"yellow"}),t.captured&&e.push({orig:t.from,dest:t.to,brush:"red"}),t.san.includes("+")&&e.push({orig:t.from,dest:t.to,brush:"blue"});return e}function Bn(i){return i==="w"?"white":"black"}function Ka(i){const e=new Map;for(const t of Qr){const n=i.moves({square:t,verbose:!0});n.length&&e.set(n[0].from,n.map(a=>a.to))}return e}function Jr(i,e){if((e==null?void 0:e.type)!=="p")return!1;const t=(e==null?void 0:e.color)==="w"?"8":"1";return i[1]===t}function ai(i){return!!i&&i instanceof Object&&!(i instanceof Array)&&!(i instanceof Function)}function Zi(i){return ai(i)?Object.fromEntries(Object.entries(i).map(([e,t])=>[e,Zi(t)])):i}function Go(i,e){const t={...i,...e};for(const n in t)t[n]=ai(i==null?void 0:i[n])&&ai(e==null?void 0:e[n])?Go(i[n],e[n]):Zi(t[n]);return t}function wo(i,e){const t={};for(const n in e)if(ai(i==null?void 0:i[n])&&ai(e==null?void 0:e[n])){const a=wo(i[n],e[n]);Object.keys(a).length>0&&(t[n]=a)}else(i==null?void 0:i[n])!==e[n]&&(t[n]=e[n]);return t}const $r=new Map([["b1",["a3","c3"]],["g1",["f3","h3"]],["a2",["a3","a4"]],["b2",["b3","b4"]],["c2",["c3","c4"]],["d2",["d3","d4"]],["e2",["e3","e4"]],["f2",["f3","f4"]],["g2",["g3","g4"]],["h2",["h3","h4"]]]),ed="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",td={fen:ed,orientation:"white",turnColor:"white",coordinates:!1,autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:300},lastMove:void 0,movable:{free:!1,color:"white",showDests:!0,dests:$r,events:{after:()=>{},afterNewPiece:void 0},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{set:void 0,unset:void 0}},predroppable:{enabled:!1,events:{set:void 0,unset:void 0}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},selectable:{enabled:!0},events:{change:void 0,move:void 0,dropNewPiece:void 0,select:void 0,insert:void 0},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15}}}},id=["white","black"],na=["a","b","c","d","e","f","g","h"],aa=["1","2","3","4","5","6","7","8"],nd=[...aa].reverse(),sa=Array.prototype.concat(...na.map(i=>aa.map(e=>i+e))),xe=i=>sa[8*i[0]+i[1]],q=i=>[i.charCodeAt(0)-97,i.charCodeAt(1)-49],Mo=sa.map(q);function ad(i){let e;const t=()=>(e===void 0&&(e=i()),e);return t.clear=()=>{e=void 0},t}const sd=()=>{let i;return{start(){i=performance.now()},cancel(){i=void 0},stop(){if(!i)return 0;const e=performance.now()-i;return i=void 0,e}}},oa=i=>i==="white"?"black":"white",si=(i,e)=>{const t=i[0]-e[0],n=i[1]-e[1];return t*t+n*n},Qn=(i,e)=>i.role===e.role&&i.color===e.color,bi=i=>(e,t)=>[(t?e[0]:7-e[0])*i.width/8,(t?7-e[1]:e[1])*i.height/8],ke=(i,e)=>{i.style.transform=`translate(${e[0]}px,${e[1]}px)`},_o=(i,e,t=1)=>{i.style.transform=`translate(${e[0]}px,${e[1]}px) scale(${t})`},ca=(i,e)=>{i.style.visibility=e?"visible":"hidden"},mt=i=>{var e;if(i.clientX||i.clientX===0)return[i.clientX,i.clientY];if(!((e=i.targetTouches)===null||e===void 0)&&e[0])return[i.targetTouches[0].clientX,i.targetTouches[0].clientY]},Po=i=>i.buttons===2||i.button===2,Ee=(i,e)=>{const t=document.createElement(i);return e&&(t.className=e),t};function Ro(i,e,t){const n=q(i);return e||(n[0]=7-n[0],n[1]=7-n[1]),[t.left+t.width*n[0]/8+t.width/16,t.top+t.height*(7-n[1])/8+t.height/16]}const ut=(i,e)=>Math.abs(i-e),od=i=>(e,t,n,a)=>ut(e,n)<2&&(i==="white"?a===t+1||t<=1&&a===t+2&&e===n:a===t-1||t>=6&&a===t-2&&e===n),Eo=(i,e,t,n)=>{const a=ut(i,t),s=ut(e,n);return a===1&&s===2||a===2&&s===1},Qo=(i,e,t,n)=>ut(i,t)===ut(e,n),Ko=(i,e,t,n)=>i===t||e===n,Lo=(i,e,t,n)=>Qo(i,e,t,n)||Ko(i,e,t,n),cd=(i,e,t)=>(n,a,s,o)=>ut(n,s)<2&&ut(a,o)<2||t&&a===o&&a===(i==="white"?0:7)&&(n===4&&(s===2&&e.includes(0)||s===6&&e.includes(7))||e.includes(s));function rd(i,e){const t=e==="white"?"1":"8",n=[];for(const[a,s]of i)a[1]===t&&s.color===e&&s.role==="rook"&&n.push(q(a)[0]);return n}function zo(i,e,t){const n=i.get(e);if(!n)return[];const a=q(e),s=n.role,o=s==="pawn"?od(n.color):s==="knight"?Eo:s==="bishop"?Qo:s==="rook"?Ko:s==="queen"?Lo:cd(n.color,rd(i,n.color),t);return Mo.filter(c=>(a[0]!==c[0]||a[1]!==c[1])&&o(a[0],a[1],c[0],c[1])).map(xe)}function fe(i,...e){i&&setTimeout(()=>i(...e),1)}function dd(i){i.orientation=oa(i.orientation),i.animation.current=i.draggable.current=i.selected=void 0}function fd(i,e){for(const[t,n]of e)n?i.pieces.set(t,n):i.pieces.delete(t)}function ld(i,e){if(i.check=void 0,e===!0&&(e=i.turnColor),e)for(const[t,n]of i.pieces)n.role==="king"&&n.color===e&&(i.check=t)}function hd(i,e,t,n){it(i),i.premovable.current=[e,t],fe(i.premovable.events.set,e,t,n)}function tt(i){i.premovable.current&&(i.premovable.current=void 0,fe(i.premovable.events.unset))}function Nd(i,e,t){tt(i),i.predroppable.current={role:e,key:t},fe(i.predroppable.events.set,e,t)}function it(i){const e=i.predroppable;e.current&&(e.current=void 0,fe(e.events.unset))}function gd(i,e,t){if(!i.autoCastle)return!1;const n=i.pieces.get(e);if(!n||n.role!=="king")return!1;const a=q(e),s=q(t);if(a[1]!==0&&a[1]!==7||a[1]!==s[1])return!1;a[0]===4&&!i.pieces.has(t)&&(s[0]===6?t=xe([7,s[1]]):s[0]===2&&(t=xe([0,s[1]])));const o=i.pieces.get(t);return!o||o.color!==n.color||o.role!=="rook"?!1:(i.pieces.delete(e),i.pieces.delete(t),a[0]<s[0]?(i.pieces.set(xe([6,s[1]]),n),i.pieces.set(xe([5,s[1]]),o)):(i.pieces.set(xe([2,s[1]]),n),i.pieces.set(xe([3,s[1]]),o)),!0)}function Io(i,e,t){const n=i.pieces.get(e),a=i.pieces.get(t);if(e===t||!n)return!1;const s=a&&a.color!==n.color?a:void 0;return t===i.selected&&pe(i),fe(i.events.move,e,t,s),gd(i,e,t)||(i.pieces.set(t,n),i.pieces.delete(e)),i.lastMove=[e,t],i.check=void 0,fe(i.events.change),s||!0}function ra(i,e,t,n){if(i.pieces.has(t))if(n)i.pieces.delete(t);else return!1;return fe(i.events.dropNewPiece,e,t),i.pieces.set(t,e),i.lastMove=[t],i.check=void 0,fe(i.events.change),i.movable.dests=void 0,i.turnColor=oa(i.turnColor),!0}function Fo(i,e,t){const n=Io(i,e,t);return n&&(i.movable.dests=void 0,i.turnColor=oa(i.turnColor),i.animation.current=void 0),n}function To(i,e,t){if(da(i,e,t)){const n=Fo(i,e,t);if(n){const a=i.hold.stop();pe(i);const s={premove:!1,ctrlKey:i.stats.ctrlKey,holdTime:a};return n!==!0&&(s.captured=n),fe(i.movable.events.after,e,t,s),!0}}else if(bd(i,e,t))return hd(i,e,t,{ctrlKey:i.stats.ctrlKey}),pe(i),!0;return pe(i),!1}function Wo(i,e,t,n){const a=i.pieces.get(e);a&&(ud(i,e,t)||n)?(i.pieces.delete(e),ra(i,a,t,n),fe(i.movable.events.afterNewPiece,a.role,t,{premove:!1,predrop:!1})):a&&Bd(i,e,t)?Nd(i,a.role,t):(tt(i),it(i)),i.pieces.delete(e),pe(i)}function Kn(i,e,t){if(fe(i.events.select,e),i.selected){if(i.selected===e&&!i.draggable.enabled){pe(i),i.hold.cancel();return}else if((i.selectable.enabled||t)&&i.selected!==e&&To(i,i.selected,e)){i.stats.dragged=!1;return}}(i.selectable.enabled||i.draggable.enabled)&&(jo(i,e)||fa(i,e))&&(Ho(i,e),i.hold.start())}function Ho(i,e){i.selected=e,fa(i,e)?i.premovable.dests=zo(i.pieces,e,i.premovable.castle):i.premovable.dests=void 0}function pe(i){i.selected=void 0,i.premovable.dests=void 0,i.hold.cancel()}function jo(i,e){const t=i.pieces.get(e);return!!t&&(i.movable.color==="both"||i.movable.color===t.color&&i.turnColor===t.color)}const da=(i,e,t)=>{var n,a;return e!==t&&jo(i,e)&&(i.movable.free||!!(!((a=(n=i.movable.dests)===null||n===void 0?void 0:n.get(e))===null||a===void 0)&&a.includes(t)))};function ud(i,e,t){const n=i.pieces.get(e);return!!n&&(e===t||!i.pieces.has(t))&&(i.movable.color==="both"||i.movable.color===n.color&&i.turnColor===n.color)}function fa(i,e){const t=i.pieces.get(e);return!!t&&i.premovable.enabled&&i.movable.color===t.color&&i.turnColor!==t.color}const bd=(i,e,t)=>e!==t&&fa(i,e)&&zo(i.pieces,e,i.premovable.castle).includes(t);function Bd(i,e,t){const n=i.pieces.get(e),a=i.pieces.get(t);return!!n&&(!a||a.color!==i.movable.color)&&i.predroppable.enabled&&(n.role!=="pawn"||t[1]!=="1"&&t[1]!=="8")&&i.movable.color===n.color&&i.turnColor!==n.color}function md(i,e){const t=i.pieces.get(e);return!!t&&i.draggable.enabled&&(i.movable.color==="both"||i.movable.color===t.color&&(i.turnColor===t.color||i.premovable.enabled))}function xd(i){const e=i.premovable.current;if(!e)return!1;const t=e[0],n=e[1];let a=!1;if(da(i,t,n)){const s=Fo(i,t,n);if(s){const o={premove:!0};s!==!0&&(o.captured=s),fe(i.movable.events.after,t,n,o),a=!0}}return tt(i),a}function pd(i,e){const t=i.predroppable.current;let n=!1;if(!t)return!1;if(e(t)){const a={role:t.role,color:i.movable.color};ra(i,a,t.key)&&(fe(i.movable.events.afterNewPiece,t.role,t.key,{premove:!1,predrop:!0}),n=!0)}return it(i),n}function la(i){tt(i),it(i),pe(i)}function La(i){i.movable.color=i.movable.dests=i.animation.current=void 0,la(i)}function xt(i,e,t){let n=Math.floor(8*(i[0]-t.left)/t.width);e||(n=7-n);let a=7-Math.floor(8*(i[1]-t.top)/t.height);return e||(a=7-a),n>=0&&n<8&&a>=0&&a<8?xe([n,a]):void 0}function Dd(i,e,t,n){const a=q(i),s=Mo.filter(r=>Lo(a[0],a[1],r[0],r[1])||Eo(a[0],a[1],r[0],r[1])),o=s.map(r=>Ro(xe(r),t,n)).map(r=>si(e,r)),[,c]=o.reduce((r,d,f)=>r[0]<d?r:[d,f],[o[0],0]);return xe(s[c])}const le=i=>i.orientation==="white",Uo="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",Od={p:"pawn",r:"rook",n:"knight",b:"bishop",q:"queen",k:"king"},Ad={pawn:"p",rook:"r",knight:"n",bishop:"b",queen:"q",king:"k"};function Yo(i){i==="start"&&(i=Uo);const e=new Map;let t=7,n=0;for(const a of i)switch(a){case" ":case"[":return e;case"/":if(--t,t<0)return e;n=0;break;case"~":{const s=e.get(xe([n-1,t]));s&&(s.promoted=!0);break}default:{const s=a.charCodeAt(0);if(s<57)n+=s-48;else{const o=a.toLowerCase();e.set(xe([n,t]),{role:Od[o],color:a===o?"black":"white"}),++n}}}return e}function Vd(i){return nd.map(e=>na.map(t=>{const n=i.get(t+e);if(n){let a=Ad[n.role];return n.color==="white"&&(a=a.toUpperCase()),n.promoted&&(a+="~"),a}else return"1"}).join("")).join("/").replace(/1{2,}/g,e=>e.length.toString())}function Zo(i,e){e.animation&&(ha(i.animation,e.animation),(i.animation.duration||0)<70&&(i.animation.enabled=!1))}function qo(i,e){var t,n,a;if(!((t=e.movable)===null||t===void 0)&&t.dests&&(i.movable.dests=void 0),!((n=e.drawable)===null||n===void 0)&&n.autoShapes&&(i.drawable.autoShapes=[]),ha(i,e),e.fen&&(i.pieces=Yo(e.fen),i.drawable.shapes=((a=e.drawable)===null||a===void 0?void 0:a.shapes)||[]),"check"in e&&ld(i,e.check||!1),"lastMove"in e&&!e.lastMove?i.lastMove=void 0:e.lastMove&&(i.lastMove=e.lastMove),i.selected&&Ho(i,i.selected),Zo(i,e),!i.movable.rookCastle&&i.movable.dests){const s=i.movable.color==="white"?"1":"8",o="e"+s,c=i.movable.dests.get(o),r=i.pieces.get(o);if(!c||!r||r.role!=="king")return;i.movable.dests.set(o,c.filter(d=>!(d==="a"+s&&c.includes("c"+s))&&!(d==="h"+s&&c.includes("g"+s))))}}function ha(i,e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(Object.prototype.hasOwnProperty.call(i,t)&&za(i[t])&&za(e[t])?ha(i[t],e[t]):i[t]=e[t])}function za(i){if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return e===Object.prototype||e===null}const rt=(i,e)=>e.animation.enabled?Sd(i,e):Te(i,e);function Te(i,e){const t=i(e);return e.dom.redraw(),t}const mn=(i,e)=>({key:i,pos:q(i),piece:e}),Cd=(i,e)=>e.sort((t,n)=>si(i.pos,t.pos)-si(i.pos,n.pos))[0];function yd(i,e){const t=new Map,n=[],a=new Map,s=[],o=[],c=new Map;let r,d,f;for(const[l,h]of i)c.set(l,mn(l,h));for(const l of sa)r=e.pieces.get(l),d=c.get(l),r?d?Qn(r,d.piece)||(s.push(d),o.push(mn(l,r))):o.push(mn(l,r)):d&&s.push(d);for(const l of o)d=Cd(l,s.filter(h=>Qn(l.piece,h.piece))),d&&(f=[d.pos[0]-l.pos[0],d.pos[1]-l.pos[1]],t.set(l.key,f.concat(f)),n.push(d.key));for(const l of s)n.includes(l.key)||a.set(l.key,l.piece);return{anims:t,fadings:a}}function Xo(i,e){const t=i.animation.current;if(t===void 0){i.dom.destroyed||i.dom.redrawNow();return}const n=1-(e-t.start)*t.frequency;if(n<=0)i.animation.current=void 0,i.dom.redrawNow();else{const a=kd(n);for(const s of t.plan.anims.values())s[2]=s[0]*a,s[3]=s[1]*a;i.dom.redrawNow(!0),requestAnimationFrame((s=performance.now())=>Xo(i,s))}}function Sd(i,e){const t=new Map(e.pieces),n=i(e),a=yd(t,e);if(a.anims.size||a.fadings.size){const s=e.animation.current&&e.animation.current.start;e.animation.current={start:performance.now(),frequency:1/e.animation.duration,plan:a},s||Xo(e,performance.now())}else e.dom.redraw();return n}const kd=i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,vd=["green","red","blue","yellow"];function Gd(i,e){if(e.touches&&e.touches.length>1)return;e.stopPropagation(),e.preventDefault(),e.ctrlKey?pe(i):la(i);const t=mt(e),n=xt(t,le(i),i.dom.bounds());n&&(i.drawable.current={orig:n,pos:t,brush:Pd(e),snapToValidMove:i.drawable.defaultSnapToValidMove},Jo(i))}function Jo(i){requestAnimationFrame(()=>{const e=i.drawable.current;if(e){const t=xt(e.pos,le(i),i.dom.bounds());t||(e.snapToValidMove=!1);const n=e.snapToValidMove?Dd(e.orig,e.pos,le(i),i.dom.bounds()):t;n!==e.mouseSq&&(e.mouseSq=n,e.dest=n!==e.orig?n:void 0,i.dom.redrawNow()),Jo(i)}})}function wd(i,e){i.drawable.current&&(i.drawable.current.pos=mt(e))}function Md(i){const e=i.drawable.current;e&&(e.mouseSq&&Rd(i.drawable,e),$o(i))}function $o(i){i.drawable.current&&(i.drawable.current=void 0,i.dom.redraw())}function _d(i){i.drawable.shapes.length&&(i.drawable.shapes=[],i.dom.redraw(),ec(i.drawable))}function Pd(i){var e;const t=(i.shiftKey||i.ctrlKey)&&Po(i),n=i.altKey||i.metaKey||((e=i.getModifierState)===null||e===void 0?void 0:e.call(i,"AltGraph"));return vd[(t?1:0)+(n?2:0)]}function Rd(i,e){const t=a=>a.orig===e.orig&&a.dest===e.dest,n=i.shapes.find(t);n&&(i.shapes=i.shapes.filter(a=>!t(a))),(!n||n.brush!==e.brush)&&i.shapes.push({orig:e.orig,dest:e.dest,brush:e.brush}),ec(i)}function ec(i){i.onChange&&i.onChange(i.shapes)}function Ed(i,e){if(!e.isTrusted||e.button!==void 0&&e.button!==0||e.touches&&e.touches.length>1)return;const t=i.dom.bounds(),n=mt(e),a=xt(n,le(i),t);if(!a)return;const s=i.pieces.get(a),o=i.selected;!o&&i.drawable.enabled&&(i.drawable.eraseOnClick||!s||s.color!==i.turnColor)&&_d(i),e.cancelable!==!1&&(!e.touches||i.blockTouchScroll||s||o||Qd(i,n))&&e.preventDefault();const c=!!i.premovable.current,r=!!i.predroppable.current;i.stats.ctrlKey=e.ctrlKey,i.selected&&da(i,i.selected,a)?rt(l=>Kn(l,a),i):Kn(i,a);const d=i.selected===a,f=ic(i,a);if(s&&f&&d&&md(i,a)){i.draggable.current={orig:a,piece:s,origPos:n,pos:n,started:i.draggable.autoDistance&&i.stats.dragged,element:f,previouslySelected:o,originTarget:e.target,keyHasChanged:!1},f.cgDragging=!0,f.classList.add("dragging");const l=i.dom.elements.ghost;l&&(l.className=`ghost ${s.color} ${s.role}`,ke(l,bi(t)(q(a),le(i))),ca(l,!0)),Na(i)}else c&&tt(i),r&&it(i);i.dom.redraw()}function Qd(i,e){const t=le(i),n=i.dom.bounds(),a=Math.pow(n.width/8,2);for(const s of i.pieces.keys()){const o=Ro(s,t,n);if(si(o,e)<=a)return!0}return!1}function Kd(i,e,t,n){const a="a0";i.pieces.set(a,e),i.dom.redraw();const s=mt(t);i.draggable.current={orig:a,piece:e,origPos:s,pos:s,started:!0,element:()=>ic(i,a),originTarget:t.target,newPiece:!0,force:!!n,keyHasChanged:!1},Na(i)}function Na(i){requestAnimationFrame(()=>{var e;const t=i.draggable.current;if(!t)return;!((e=i.animation.current)===null||e===void 0)&&e.plan.anims.has(t.orig)&&(i.animation.current=void 0);const n=i.pieces.get(t.orig);if(!n||!Qn(n,t.piece))qi(i);else if(!t.started&&si(t.pos,t.origPos)>=Math.pow(i.draggable.distance,2)&&(t.started=!0),t.started){if(typeof t.element=="function"){const s=t.element();if(!s)return;s.cgDragging=!0,s.classList.add("dragging"),t.element=s}const a=i.dom.bounds();ke(t.element,[t.pos[0]-a.left-a.width/16,t.pos[1]-a.top-a.height/16]),t.keyHasChanged||(t.keyHasChanged=t.orig!==xt(t.pos,le(i),a))}Na(i)})}function Ld(i,e){i.draggable.current&&(!e.touches||e.touches.length<2)&&(i.draggable.current.pos=mt(e))}function zd(i,e){const t=i.draggable.current;if(!t)return;if(e.type==="touchend"&&e.cancelable!==!1&&e.preventDefault(),e.type==="touchend"&&t.originTarget!==e.target&&!t.newPiece){i.draggable.current=void 0;return}tt(i),it(i);const n=mt(e)||t.pos,a=xt(n,le(i),i.dom.bounds());a&&t.started&&t.orig!==a?t.newPiece?Wo(i,t.orig,a,t.force):(i.stats.ctrlKey=e.ctrlKey,To(i,t.orig,a)&&(i.stats.dragged=!0)):t.newPiece?i.pieces.delete(t.orig):i.draggable.deleteOnDropOff&&!a&&(i.pieces.delete(t.orig),fe(i.events.change)),(t.orig===t.previouslySelected||t.keyHasChanged)&&(t.orig===a||!a)?pe(i):i.selectable.enabled||pe(i),tc(i),i.draggable.current=void 0,i.dom.redraw()}function qi(i){const e=i.draggable.current;e&&(e.newPiece&&i.pieces.delete(e.orig),i.draggable.current=void 0,pe(i),tc(i),i.dom.redraw())}function tc(i){const e=i.dom.elements;e.ghost&&ca(e.ghost,!1)}function ic(i,e){let t=i.dom.elements.board.firstChild;for(;t;){if(t.cgKey===e&&t.tagName==="PIECE")return t;t=t.nextSibling}}function Id(i,e){i.exploding={stage:1,keys:e},i.dom.redraw(),setTimeout(()=>{Ia(i,2),setTimeout(()=>Ia(i,void 0),120)},120)}function Ia(i,e){i.exploding&&(e?i.exploding.stage=e:i.exploding=void 0,i.dom.redraw())}function Fd(i,e){function t(){dd(i),e()}return{set(n){n.orientation&&n.orientation!==i.orientation&&t(),Zo(i,n),(n.fen?rt:Te)(a=>qo(a,n),i)},state:i,getFen:()=>Vd(i.pieces),toggleOrientation:t,setPieces(n){rt(a=>fd(a,n),i)},selectSquare(n,a){n?rt(s=>Kn(s,n,a),i):i.selected&&(pe(i),i.dom.redraw())},move(n,a){rt(s=>Io(s,n,a),i)},newPiece(n,a){rt(s=>ra(s,n,a),i)},playPremove(){if(i.premovable.current){if(rt(xd,i))return!0;i.dom.redraw()}return!1},playPredrop(n){if(i.predroppable.current){const a=pd(i,n);return i.dom.redraw(),a}return!1},cancelPremove(){Te(tt,i)},cancelPredrop(){Te(it,i)},cancelMove(){Te(n=>{la(n),qi(n)},i)},stop(){Te(n=>{La(n),qi(n)},i)},explode(n){Id(i,n)},setAutoShapes(n){Te(a=>a.drawable.autoShapes=n,i)},setShapes(n){Te(a=>a.drawable.shapes=n,i)},getKeyAtDomPos(n){return xt(n,le(i),i.dom.bounds())},redrawAll:e,dragNewPiece(n,a,s){Kd(i,n,a,s)},destroy(){La(i),i.dom.unbind&&i.dom.unbind(),i.dom.destroyed=!0}}}function Td(){return{pieces:Yo(Uo),orientation:"white",turnColor:"white",coordinates:!0,ranksPosition:"right",autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,pieceKey:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:200},movable:{free:!0,color:"both",showDests:!0,events:{},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{}},predroppable:{enabled:!1,events:{}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},dropmode:{active:!1},selectable:{enabled:!0},stats:{dragged:!("ontouchstart"in window)},events:{},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15}},prevSvgHash:""},hold:sd()}}function Ln(i,e,t){const n=new Map,a=[];for(const c of i)n.set(c.hash,!1);let s=e.firstChild,o;for(;s;)o=s.getAttribute("cgHash"),n.has(o)?n.set(o,!0):a.push(s),s=s.nextSibling;for(const c of a)e.removeChild(c);for(const c of i)n.get(c.hash)||e.appendChild(t(c))}function Oe(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Wd(i,e,t){const n=i.drawable,a=n.current,s=a&&a.mouseSq?a:void 0,o=new Map,c=i.dom.bounds(),r=n.autoShapes.filter(N=>!N.piece);for(const N of n.shapes.concat(r).concat(s?[s]:[]))N.dest&&o.set(N.dest,(o.get(N.dest)||0)+1);const d=n.shapes.concat(r).map(N=>({shape:N,current:!1,hash:Fa(N,o,!1,c)}));s&&d.push({shape:s,current:!0,hash:Fa(s,o,!0,c)});const f=d.map(N=>N.hash).join(";");if(f===i.drawable.prevSvgHash)return;i.drawable.prevSvgHash=f;const l=e.querySelector("defs"),h=e.querySelector("g"),g=t.querySelector("g");Hd(n,d,l),Ln(d.filter(N=>!N.shape.customSvg),h,N=>Ta(i,N,n.brushes,o,c)),Ln(d.filter(N=>N.shape.customSvg),g,N=>Ta(i,N,n.brushes,o,c))}function Hd(i,e,t){const n=new Map;let a;for(const c of e)c.shape.dest&&(a=i.brushes[c.shape.brush],c.shape.modifiers&&(a=nc(a,c.shape.modifiers)),n.set(a.key,a));const s=new Set;let o=t.firstChild;for(;o;)s.add(o.getAttribute("cgKey")),o=o.nextSibling;for(const[c,r]of n.entries())s.has(c)||t.appendChild(Jd(r))}function Fa({orig:i,dest:e,brush:t,piece:n,modifiers:a,customSvg:s},o,c,r){return[r.width,r.height,c,i,e,t,e&&(o.get(e)||0)>1,n&&jd(n),a&&Ud(a),s&&Yd(s)].filter(d=>d).join(",")}function jd(i){return[i.color,i.role,i.scale].filter(e=>e).join(",")}function Ud(i){return""+(i.lineWidth||"")}function Yd(i){let e=0;for(let t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t)>>>0;return"custom-"+e.toString()}function Ta(i,{shape:e,current:t,hash:n},a,s,o){let c;const r=Wa(q(e.orig),i.orientation);if(e.customSvg)c=Zd(e.customSvg,r,o);else if(e.dest){let d=a[e.brush];e.modifiers&&(d=nc(d,e.modifiers)),c=Xd(d,r,Wa(q(e.dest),i.orientation),t,(s.get(e.dest)||0)>1,o)}else c=qd(a[e.brush],r,t,o);return c.setAttribute("cgHash",n),c}function Zd(i,e,t){const[n,a]=Xi(e,t),s=Xe(Oe("g"),{transform:`translate(${n},${a})`}),o=Xe(Oe("svg"),{width:1,height:1,viewBox:"0 0 100 100"});return s.appendChild(o),o.innerHTML=i,s}function qd(i,e,t,n){const a=Xi(e,n),s=$d(),o=(n.width+n.height)/(4*Math.max(n.width,n.height));return Xe(Oe("circle"),{stroke:i.color,"stroke-width":s[t?0:1],fill:"none",opacity:ac(i,t),cx:a[0],cy:a[1],r:o-s[1]/2})}function Xd(i,e,t,n,a,s){const o=tf(a&&!n),c=Xi(e,s),r=Xi(t,s),d=r[0]-c[0],f=r[1]-c[1],l=Math.atan2(f,d),h=Math.cos(l)*o,g=Math.sin(l)*o;return Xe(Oe("line"),{stroke:i.color,"stroke-width":ef(i,n),"stroke-linecap":"round","marker-end":"url(#arrowhead-"+i.key+")",opacity:ac(i,n),x1:c[0],y1:c[1],x2:r[0]-h,y2:r[1]-g})}function Jd(i){const e=Xe(Oe("marker"),{id:"arrowhead-"+i.key,orient:"auto",markerWidth:4,markerHeight:8,refX:2.05,refY:2.01});return e.appendChild(Xe(Oe("path"),{d:"M0,0 V4 L3,2 Z",fill:i.color})),e.setAttribute("cgKey",i.key),e}function Xe(i,e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.setAttribute(t,e[t]);return i}function Wa(i,e){return e==="white"?i:[7-i[0],7-i[1]]}function nc(i,e){return{color:i.color,opacity:Math.round(i.opacity*10)/10,lineWidth:Math.round(e.lineWidth||i.lineWidth),key:[i.key,e.lineWidth].filter(t=>t).join("")}}function $d(){return[3/64,4/64]}function ef(i,e){return(i.lineWidth||10)*(e?.85:1)/64}function ac(i,e){return(i.opacity||1)*(e?.9:1)}function tf(i){return(i?20:10)/64}function Xi(i,e){const t=Math.min(1,e.width/e.height),n=Math.min(1,e.height/e.width);return[(i[0]-3.5)*t,(3.5-i[1])*n]}function nf(i,e){i.innerHTML="",i.classList.add("cg-wrap");for(const r of id)i.classList.toggle("orientation-"+r,e.orientation===r);i.classList.toggle("manipulable",!e.viewOnly);const t=Ee("cg-container");i.appendChild(t);const n=Ee("cg-board");t.appendChild(n);let a,s,o;if(e.drawable.visible&&(a=Xe(Oe("svg"),{class:"cg-shapes",viewBox:"-4 -4 8 8",preserveAspectRatio:"xMidYMid slice"}),a.appendChild(Oe("defs")),a.appendChild(Oe("g")),s=Xe(Oe("svg"),{class:"cg-custom-svgs",viewBox:"-3.5 -3.5 8 8",preserveAspectRatio:"xMidYMid slice"}),s.appendChild(Oe("g")),o=Ee("cg-auto-pieces"),t.appendChild(a),t.appendChild(s),t.appendChild(o)),e.coordinates){const r=e.orientation==="black"?" black":"",d=e.ranksPosition==="left"?" left":"";t.appendChild(Ha(aa,"ranks"+r+d)),t.appendChild(Ha(na,"files"+r))}let c;return e.draggable.enabled&&e.draggable.showGhost&&(c=Ee("piece","ghost"),ca(c,!1),t.appendChild(c)),{board:n,container:t,wrap:i,ghost:c,svg:a,customSvg:s,autoPieces:o}}function Ha(i,e){const t=Ee("coords",e);let n;for(const a of i)n=Ee("coord"),n.textContent=a,t.appendChild(n);return t}function af(i,e){if(!i.dropmode.active)return;tt(i),it(i);const t=i.dropmode.piece;if(t){i.pieces.set("a0",t);const n=mt(e),a=n&&xt(n,le(i),i.dom.bounds());a&&Wo(i,"a0",a)}i.dom.redraw()}function sf(i,e){const t=i.dom.elements.board;if("ResizeObserver"in window&&new ResizeObserver(e).observe(i.dom.elements.wrap),(i.disableContextMenu||i.drawable.enabled)&&t.addEventListener("contextmenu",a=>a.preventDefault()),i.viewOnly)return;const n=cf(i);t.addEventListener("touchstart",n,{passive:!1}),t.addEventListener("mousedown",n,{passive:!1})}function of(i,e){const t=[];if("ResizeObserver"in window||t.push(Et(document.body,"chessground.resize",e)),!i.viewOnly){const n=ja(i,Ld,wd),a=ja(i,zd,Md);for(const o of["touchmove","mousemove"])t.push(Et(document,o,n));for(const o of["touchend","mouseup"])t.push(Et(document,o,a));const s=()=>i.dom.bounds.clear();t.push(Et(document,"scroll",s,{capture:!0,passive:!0})),t.push(Et(window,"resize",s,{passive:!0}))}return()=>t.forEach(n=>n())}function Et(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}const cf=i=>e=>{i.draggable.current?qi(i):i.drawable.current?$o(i):e.shiftKey||Po(e)?i.drawable.enabled&&Gd(i,e):i.viewOnly||(i.dropmode.active?af(i,e):Ed(i,e))},ja=(i,e,t)=>n=>{i.drawable.current?i.drawable.enabled&&t(i,n):i.viewOnly||e(i,n)};function rf(i){const e=le(i),t=bi(i.dom.bounds()),n=i.dom.elements.board,a=i.pieces,s=i.animation.current,o=s?s.plan.anims:new Map,c=s?s.plan.fadings:new Map,r=i.draggable.current,d=ff(i),f=new Set,l=new Set,h=new Map,g=new Map;let N,u,b,m,B,D,O,x,y,C;for(u=n.firstChild;u;){if(N=u.cgKey,sc(u))if(b=a.get(N),B=o.get(N),D=c.get(N),m=u.cgPiece,u.cgDragging&&(!r||r.orig!==N)&&(u.classList.remove("dragging"),ke(u,t(q(N),e)),u.cgDragging=!1),!D&&u.cgFading&&(u.cgFading=!1,u.classList.remove("fading")),b){if(B&&u.cgAnimating&&m===Qt(b)){const A=q(N);A[0]+=B[2],A[1]+=B[3],u.classList.add("anim"),ke(u,t(A,e))}else u.cgAnimating&&(u.cgAnimating=!1,u.classList.remove("anim"),ke(u,t(q(N),e)),i.addPieceZIndex&&(u.style.zIndex=xn(q(N),e)));m===Qt(b)&&(!D||!u.cgFading)?f.add(N):D&&m===Qt(D)?(u.classList.add("fading"),u.cgFading=!0):pn(h,m,u)}else pn(h,m,u);else if(oc(u)){const A=u.className;d.get(N)===A?l.add(N):pn(g,A,u)}u=u.nextSibling}for(const[A,S]of d)if(!l.has(A)){y=g.get(S),C=y&&y.pop();const k=t(q(A),e);if(C)C.cgKey=A,ke(C,k);else{const v=Ee("square",S);v.cgKey=A,ke(v,k),n.insertBefore(v,n.firstChild)}}for(const[A,S]of a)if(B=o.get(A),!f.has(A))if(O=h.get(Qt(S)),x=O&&O.pop(),x){x.cgKey=A,x.cgFading&&(x.classList.remove("fading"),x.cgFading=!1);const k=q(A);i.addPieceZIndex&&(x.style.zIndex=xn(k,e)),B&&(x.cgAnimating=!0,x.classList.add("anim"),k[0]+=B[2],k[1]+=B[3]),ke(x,t(k,e))}else{const k=Qt(S),v=Ee("piece",k),_=q(A);v.cgPiece=k,v.cgKey=A,B&&(v.cgAnimating=!0,_[0]+=B[2],_[1]+=B[3]),ke(v,t(_,e)),i.addPieceZIndex&&(v.style.zIndex=xn(_,e)),n.appendChild(v)}for(const A of h.values())Ya(i,A);for(const A of g.values())Ya(i,A)}function df(i){const e=le(i),t=bi(i.dom.bounds());let n=i.dom.elements.board.firstChild;for(;n;)(sc(n)&&!n.cgAnimating||oc(n))&&ke(n,t(q(n.cgKey),e)),n=n.nextSibling}function Ua(i){var e,t;const n=i.dom.elements.wrap.getBoundingClientRect(),a=i.dom.elements.container,s=n.height/n.width,o=Math.floor(n.width*window.devicePixelRatio/8)*8/window.devicePixelRatio,c=o*s;a.style.width=o+"px",a.style.height=c+"px",i.dom.bounds.clear(),(e=i.addDimensionsCssVarsTo)===null||e===void 0||e.style.setProperty("--cg-width",o+"px"),(t=i.addDimensionsCssVarsTo)===null||t===void 0||t.style.setProperty("--cg-height",c+"px")}const sc=i=>i.tagName==="PIECE",oc=i=>i.tagName==="SQUARE";function Ya(i,e){for(const t of e)i.dom.elements.board.removeChild(t)}function xn(i,e){const t=i[1];return`${e?3+7-t:3+t}`}const Qt=i=>`${i.color} ${i.role}`;function ff(i){var e;const t=new Map;if(i.lastMove&&i.highlight.lastMove)for(const s of i.lastMove)Fe(t,s,"last-move");if(i.check&&i.highlight.check&&Fe(t,i.check,"check"),i.selected&&(Fe(t,i.selected,"selected"),i.movable.showDests)){const s=(e=i.movable.dests)===null||e===void 0?void 0:e.get(i.selected);if(s)for(const c of s)Fe(t,c,"move-dest"+(i.pieces.has(c)?" oc":""));const o=i.premovable.dests;if(o)for(const c of o)Fe(t,c,"premove-dest"+(i.pieces.has(c)?" oc":""))}const n=i.premovable.current;if(n)for(const s of n)Fe(t,s,"current-premove");else i.predroppable.current&&Fe(t,i.predroppable.current.key,"current-premove");const a=i.exploding;if(a)for(const s of a.keys)Fe(t,s,"exploding"+a.stage);return t}function Fe(i,e,t){const n=i.get(e);n?i.set(e,`${n} ${t}`):i.set(e,t)}function pn(i,e,t){const n=i.get(e);n?n.push(t):i.set(e,[t])}function lf(i,e){const t=i.drawable.autoShapes.filter(n=>n.piece).map(n=>({shape:n,hash:gf(n),current:!1}));Ln(t,e,n=>Nf(i,n,i.dom.bounds()))}function hf(i){var e;const t=le(i),n=bi(i.dom.bounds());let a=(e=i.dom.elements.autoPieces)===null||e===void 0?void 0:e.firstChild;for(;a;)_o(a,n(q(a.cgKey),t),a.cgScale),a=a.nextSibling}function Nf(i,{shape:e,hash:t},n){var a,s,o;const c=e.orig,r=(a=e.piece)===null||a===void 0?void 0:a.role,d=(s=e.piece)===null||s===void 0?void 0:s.color,f=(o=e.piece)===null||o===void 0?void 0:o.scale,l=Ee("piece",`${r} ${d}`);return l.setAttribute("cgHash",t),l.cgKey=c,l.cgScale=f,_o(l,bi(n)(q(c),le(i)),f),l}const gf=i=>{var e,t,n;return[i.orig,(e=i.piece)===null||e===void 0?void 0:e.role,(t=i.piece)===null||t===void 0?void 0:t.color,(n=i.piece)===null||n===void 0?void 0:n.scale].join(",")};function uf(i,e){const t=Td();qo(t,e||{});function n(){const a="dom"in t?t.dom.unbind:void 0,s=nf(i,t),o=ad(()=>s.board.getBoundingClientRect()),c=f=>{rf(d),s.autoPieces&&lf(d,s.autoPieces),!f&&s.svg&&Wd(d,s.svg,s.customSvg)},r=()=>{Ua(d),df(d),s.autoPieces&&hf(d)},d=t;return d.dom={elements:s,bounds:o,redraw:bf(c),redrawNow:c,unbind:a},d.drawable.prevSvgHash="",Ua(d),c(!1),sf(d,r),a||(d.dom.unbind=of(d,r)),d.events.insert&&d.events.insert(s),d}return Fd(n(),n)}function bf(i){let e=!1;return()=>{e||(e=!0,requestAnimationFrame(()=>{i(),e=!1}))}}class Bf{constructor(e,t,n,a){V(this,"game");V(this,"board");V(this,"boardState");V(this,"props");V(this,"emit");this.boardState=t,this.props=n,this.emit=a,this.game=new qr,this.board=uf(e),this.resetBoard()}updateGameState({updateFen:e=!0}={}){this.boardState.historyViewerState.isEnabled||(e&&this.board.set({fen:this.game.fen()}),this.board.state.turnColor=this.getTurnColor(),this.board.state.movable.color=this.props.playerColor||this.board.state.turnColor,this.board.state.movable.dests=Ka(this.game),this.displayInCheck(this.game.inCheck(),this.board.state.turnColor),this.boardState.showThreats&&this.drawMoves()),this.emitEvents()}displayInCheck(e,t){if(e){for(const[n,a]of this.board.state.pieces)if(a.role==="king"&&a.color===t){this.board.state.check=n;return}}else this.board.state.check=void 0}emitEvents(){this.game.inCheck()&&this.emit(this.game.isCheckmate()?"checkmate":"check",this.board.state.turnColor),this.game.isDraw()&&this.emit("draw"),this.game.isStalemate()&&this.emit("stalemate")}async changeTurn(e,t,n){let a;Jr(t,this.game.get(e))&&(a=await new Promise(s=>{this.boardState.promotionDialogState={isEnabled:!0,color:this.getTurnColor(),callback:s}})),this.move({from:e,to:t,promotion:a})}resetBoard(){this.setConfig(this.props.boardConfig,!0)}undoLastMove(){const e=this.game.undo();if(e!=null&&(this.boardState.historyViewerState.isEnabled&&this.boardState.historyViewerState.plyViewing===this.getCurrentPlyNumber()&&this.stopViewingHistory(),!this.boardState.historyViewerState.isEnabled)){this.board.set({fen:e.before}),this.updateGameState({updateFen:!1});const t=this.getLastMove();this.board.state.lastMove=t?[t==null?void 0:t.from,t==null?void 0:t.to]:void 0}}getMaterialCount(){const e=this.board.state.pieces,t={pawn:1,knight:3,bishop:3,rook:5,queen:9,king:0},n={materialWhite:0,materialBlack:0,materialDiff:0};for(const a of e)a[1].color==="white"?n.materialWhite+=t[a[1].role]:n.materialBlack+=t[a[1].role];return n.materialDiff=n.materialWhite-n.materialBlack,n}toggleOrientation(){this.board.toggleOrientation()}drawMoves(){this.boardState.showThreats=!0,this.board.setShapes(Xr(this.game.moves({verbose:!0})))}hideMoves(){this.boardState.showThreats=!1,this.board.setShapes([])}drawMove(e,t,n){this.board.setShapes([{orig:e,dest:t,brush:n}])}toggleMoves(){this.boardState.showThreats?this.hideMoves():this.drawMoves()}async getOpeningName(){var e;try{const t=this.game.history({verbose:!0}).map(n=>n.lan).join(",");return((e=(await(await fetch(`https://explorer.lichess.ovh/masters?play=${t}`)).json()).opening)==null?void 0:e.name)??null}catch{return null}}move(e){let t;try{t=this.game.move(e)}catch{return!1}return this.emit("move",t),t!=null&&t.promotion&&this.emit("promotion",{color:Bn(t.color),promotedTo:t.promotion.toUpperCase(),sanMove:t.san}),this.boardState.historyViewerState.isEnabled||(this.board.move(t.from,t.to),(t.flags==="e"||t!=null&&t.promotion)&&setTimeout(()=>this.board.set({fen:t.after}),this.board.state.animation.current?this.board.state.animation.duration:0),this.updateGameState({updateFen:!1}),dr(this.board.playPremove)),!0}getTurnColor(){return Bn(this.game.turn())}getPossibleMoves(){return Ka(this.game)}getCurrentTurnNumber(){return this.game.moveNumber()}getCurrentPlyNumber(){return 2*this.getCurrentTurnNumber()-(this.getTurnColor()==="black"?1:2)}getLastMove(){return this.game.history({verbose:!0}).at(-1)}getHistory(e=!1){return this.game.history({verbose:e})}getFen(){return this.game.fen()}getBoardPosition(){return this.game.board()}getPgn(){return this.game.pgn()}getIsGameOver(){return this.game.isGameOver()}getIsCheckmate(){return this.game.isCheckmate()}getIsCheck(){return this.game.isCheck()}getIsStalemate(){return this.game.isStalemate()}getIsDraw(){return this.game.isDraw()}getIsThreefoldRepetition(){return this.game.isThreefoldRepetition()}getIsInsufficientMaterial(){return this.game.isInsufficientMaterial()}getSquareColor(e){return this.game.squareColor(e)}getSquare(e){return this.game.get(e)}setPosition(e){this.game.load(e),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState()}putPiece(e,t){const n=this.game.put(e,t);return n&&this.updateGameState(),n}clearBoard(){this.game.clear(),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState()}setShapes(e){this.board.setShapes(e)}loadPgn(e){this.game.loadPgn(e),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState();const t=this.getLastMove();t&&this.board.set({lastMove:[t.from,t.to]})}getPgnInfo(){return this.game.header()}setConfig(e,t=!1){var s;if(t&&(e=Go(td,e)),((s=e.movable)==null?void 0:s.events)&&"after"in e.movable.events){const o=e.movable.events.after;e.movable.events.after=o?async(...c)=>{await this.changeTurn(...c),o(...c)}:this.changeTurn.bind(this)}const{fen:n,...a}=e;this.board.set(a),n&&this.setPosition(n),this.board.redrawAll()}viewHistory(e){const t=this.getHistory(!0);if(e<0||e>t.length)return;const n=this.board.state.animation.enabled&&(this.boardState.historyViewerState.isEnabled&&Math.abs(this.boardState.historyViewerState.plyViewing-e)!==1||!this.boardState.historyViewerState.isEnabled&&e!==t.length-1);if(n&&this.board.set({animation:{enabled:!1}}),e<t.length)this.boardState.historyViewerState.isEnabled?this.boardState.historyViewerState.plyViewing=e:this.boardState.historyViewerState={isEnabled:!0,plyViewing:e,viewOnly:this.board.state.viewOnly},this.board.set({fen:t[e].before,viewOnly:!0,lastMove:e>0?[t[e-1].from,t[e-1].to]:void 0,selected:void 0}),this.displayInCheck(e>0?"+#".includes(t[e-1].san.at(-1)):!1,Bn(t[e].color)),this.board.cancelPremove();else if(this.boardState.historyViewerState.isEnabled){const a=t.at(-1);this.board.set({fen:a.after,viewOnly:this.boardState.historyViewerState.viewOnly,lastMove:[a.from,a.to]}),this.boardState.historyViewerState={isEnabled:!1},this.updateGameState({updateFen:!1})}n&&this.board.set({animation:{enabled:!0}})}stopViewingHistory(){this.boardState.historyViewerState.isEnabled&&this.viewHistory(this.getCurrentPlyNumber())}viewStart(){this.viewHistory(0)}viewNext(){this.boardState.historyViewerState.isEnabled&&this.viewHistory(this.boardState.historyViewerState.plyViewing+1)}viewPrevious(){const e=this.boardState.historyViewerState.isEnabled?this.boardState.historyViewerState.plyViewing:this.getCurrentPlyNumber();this.viewHistory(e-1)}}const mf={class:"main-board"},xf={class:"dialog-container"},pf=xo({__name:"TheChessboard",props:{boardConfig:{default:()=>({})},playerColor:{},reactiveConfig:{type:Boolean,default:!1}},emits:["boardCreated","check","checkmate","stalemate","draw","promotion","move"],setup(i,{emit:e}){const t=i,n=gi(null),a=Ga({showThreats:!1,promotionDialogState:{isEnabled:!1},historyViewerState:{isEnabled:!1}});return cr(()=>{if(n.value==null)throw new Error("vue3-chessboard: Failed to mount board.");const s=new Bf(n.value,a,t,e);if(e("boardCreated",s),t.reactiveConfig){let o=Zi(t.boardConfig);Hi(Ga(t.boardConfig),c=>{s.setConfig(wo(o,c)),o=Zi(c)})}}),(s,o)=>(E(),K("section",{class:yt(["main-wrap",{disabledBoard:a.promotionDialogState.isEnabled,viewingHistory:a.historyViewerState.isEnabled}])},[p("div",mf,[p("div",xf,[a.promotionDialogState.isEnabled?(E(),po(Rr,{key:0,state:a.promotionDialogState,onPromotionSelected:o[0]||(o[0]=c=>a.promotionDialogState={isEnabled:!1})},null,8,["state"])):Do("",!0)]),p("div",{ref_key:"boardElement",ref:n},null,512)])],2))}});const Df={class:"w-full grid items-center h-full"},Of={__name:"Chessboard",props:["fen","orientation"],setup(i){const e=i,t={orientation:e.orientation};let n;return Hi(()=>e.fen,()=>{n.setPosition(e.fen)}),Hi(()=>e.orientation,()=>{n.toggleOrientation()}),(a,s)=>(E(),K("div",Df,[ae(We(pf),{onMove:s[0]||(s[0]=o=>{a.$emit("move",o)}),onBoardCreated:s[1]||(s[1]=o=>Oo(n)?n.value=o:n=o),"board-config":t})]))}},Af=["onKeyup"],Vf={__name:"UCISender",setup(i){const e=gi("");function t(){Rn(e.value)}return(n,a)=>(E(),K(ui,null,[Ao(p("input",{type:"text",placeholder:"UCI command",class:"input w-full h-9 bg-slate-800 font-mono","onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),onKeyup:fr(t,["enter"])},null,40,Af),[[Vo,e.value]]),p("button",{onClick:t,class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," Send message ")],64))}},Cf={class:"rounded-lg bg-slate-800 flex-content"},yf={class:"scrollable-content-wrapper rounded-lg",id:"stockfishPanelSlider"},Sf=p("div",{class:"divider divider-horizontal"},null,-1),kf={class:"font-mono",style:{"overflow-wrap":"anywhere"}},vf={__name:"StockfishMessages",setup(i){return Hi(ii,()=>{let e=document.getElementById("stockfishPanelSlider");e.scrollTop=e.scrollHeight},{deep:!0,flush:"post"}),(e,t)=>(E(),K("div",Cf,[p("div",yf,[(E(!0),K(ui,null,cn(We(ii),(n,a)=>(E(),K("div",{class:yt(["flex space-x-3 items-center p-2",{"bg-slate-700":!n.stockfish}])},[p("div",null,R(a),1),Sf,p("div",kf,R(n.msg),1)],2))),256))])]))}},Gf={class:"h-full w-full bg-base-300 rounded-lg p-5 flex justify-center items-center space-y-4 flex-col"},wf={class:"flex space-x-2 h-fit w-full"},Mf={class:"w-full flex space-x-4"},_f={class:"min-w-fit"},Pf={class:"w-full"},Rf={class:"w-full flex space-x-4 items-center"},Ef={class:"w-full h-full"},Qf={__name:"StockfishPanel",setup(i){return(e,t)=>(E(),K("div",Gf,[p("div",wf,[p("div",{class:yt(["w-full h-fit text-white py-1 px-4 rounded-full text-center",[We(Yi)?"bg-green-300":"bg-yellow-300"]])}," Stockfish "+R(We(Yi)?"running":"paused"),3),p("button",{onClick:t[0]||(t[0]=(...n)=>We(Pn)&&We(Pn)(...n)),class:"bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"}," ↻ Restart ")]),p("div",Mf,[p("p",_f,"Movetime: "+R(We(Tt)),1),p("div",Pf,[Ao(p("input",{type:"range",min:"500",max:"10000","onUpdate:modelValue":t[1]||(t[1]=n=>Oo(Tt)?Tt.value=n:null),class:"range range-secondary range-xs w-full"},null,512),[[Vo,We(Tt)]])])]),p("div",Rf,[ae(Vf)]),p("div",Ef,[ae(vf)])]))}};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Bi(i){return i+.5|0}const je=(i,e,t)=>Math.max(Math.min(i,t),e);function Ht(i){return je(Bi(i*2.55),0,255)}function qe(i){return je(Bi(i*255),0,255)}function Pe(i){return je(Bi(i/2.55)/100,0,1)}function Za(i){return je(Bi(i*100),0,100)}const Be={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},zn=[..."0123456789ABCDEF"],Kf=i=>zn[i&15],Lf=i=>zn[(i&240)>>4]+zn[i&15],Oi=i=>(i&240)>>4===(i&15),zf=i=>Oi(i.r)&&Oi(i.g)&&Oi(i.b)&&Oi(i.a);function If(i){var e=i.length,t;return i[0]==="#"&&(e===4||e===5?t={r:255&Be[i[1]]*17,g:255&Be[i[2]]*17,b:255&Be[i[3]]*17,a:e===5?Be[i[4]]*17:255}:(e===7||e===9)&&(t={r:Be[i[1]]<<4|Be[i[2]],g:Be[i[3]]<<4|Be[i[4]],b:Be[i[5]]<<4|Be[i[6]],a:e===9?Be[i[7]]<<4|Be[i[8]]:255})),t}const Ff=(i,e)=>i<255?e(i):"";function Tf(i){var e=zf(i)?Kf:Lf;return i?"#"+e(i.r)+e(i.g)+e(i.b)+Ff(i.a,e):void 0}const Wf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function cc(i,e,t){const n=e*Math.min(t,1-t),a=(s,o=(s+i/30)%12)=>t-n*Math.max(Math.min(o-3,9-o,1),-1);return[a(0),a(8),a(4)]}function Hf(i,e,t){const n=(a,s=(a+i/60)%6)=>t-t*e*Math.max(Math.min(s,4-s,1),0);return[n(5),n(3),n(1)]}function jf(i,e,t){const n=cc(i,1,.5);let a;for(e+t>1&&(a=1/(e+t),e*=a,t*=a),a=0;a<3;a++)n[a]*=1-e-t,n[a]+=e;return n}function Uf(i,e,t,n,a){return i===a?(e-t)/n+(e<t?6:0):e===a?(t-i)/n+2:(i-e)/n+4}function ga(i){const t=i.r/255,n=i.g/255,a=i.b/255,s=Math.max(t,n,a),o=Math.min(t,n,a),c=(s+o)/2;let r,d,f;return s!==o&&(f=s-o,d=c>.5?f/(2-s-o):f/(s+o),r=Uf(t,n,a,f,s),r=r*60+.5),[r|0,d||0,c]}function ua(i,e,t,n){return(Array.isArray(e)?i(e[0],e[1],e[2]):i(e,t,n)).map(qe)}function ba(i,e,t){return ua(cc,i,e,t)}function Yf(i,e,t){return ua(jf,i,e,t)}function Zf(i,e,t){return ua(Hf,i,e,t)}function rc(i){return(i%360+360)%360}function qf(i){const e=Wf.exec(i);let t=255,n;if(!e)return;e[5]!==n&&(t=e[6]?Ht(+e[5]):qe(+e[5]));const a=rc(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?n=Yf(a,s,o):e[1]==="hsv"?n=Zf(a,s,o):n=ba(a,s,o),{r:n[0],g:n[1],b:n[2],a:t}}function Xf(i,e){var t=ga(i);t[0]=rc(t[0]+e),t=ba(t),i.r=t[0],i.g=t[1],i.b=t[2]}function Jf(i){if(!i)return;const e=ga(i),t=e[0],n=Za(e[1]),a=Za(e[2]);return i.a<255?`hsla(${t}, ${n}%, ${a}%, ${Pe(i.a)})`:`hsl(${t}, ${n}%, ${a}%)`}const qa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Xa={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function $f(){const i={},e=Object.keys(Xa),t=Object.keys(qa);let n,a,s,o,c;for(n=0;n<e.length;n++){for(o=c=e[n],a=0;a<t.length;a++)s=t[a],c=c.replace(s,qa[s]);s=parseInt(Xa[o],16),i[c]=[s>>16&255,s>>8&255,s&255]}return i}let Ai;function e4(i){Ai||(Ai=$f(),Ai.transparent=[0,0,0,0]);const e=Ai[i.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const t4=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function i4(i){const e=t4.exec(i);let t=255,n,a,s;if(e){if(e[7]!==n){const o=+e[7];t=e[8]?Ht(o):je(o*255,0,255)}return n=+e[1],a=+e[3],s=+e[5],n=255&(e[2]?Ht(n):je(n,0,255)),a=255&(e[4]?Ht(a):je(a,0,255)),s=255&(e[6]?Ht(s):je(s,0,255)),{r:n,g:a,b:s,a:t}}}function n4(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Pe(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Dn=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,At=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function a4(i,e,t){const n=At(Pe(i.r)),a=At(Pe(i.g)),s=At(Pe(i.b));return{r:qe(Dn(n+t*(At(Pe(e.r))-n))),g:qe(Dn(a+t*(At(Pe(e.g))-a))),b:qe(Dn(s+t*(At(Pe(e.b))-s))),a:i.a+t*(e.a-i.a)}}function Vi(i,e,t){if(i){let n=ga(i);n[e]=Math.max(0,Math.min(n[e]+n[e]*t,e===0?360:1)),n=ba(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function dc(i,e){return i&&Object.assign(e||{},i)}function Ja(i){var e={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(e={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(e.a=qe(i[3]))):(e=dc(i,{r:0,g:0,b:0,a:1}),e.a=qe(e.a)),e}function s4(i){return i.charAt(0)==="r"?i4(i):qf(i)}class oi{constructor(e){if(e instanceof oi)return e;const t=typeof e;let n;t==="object"?n=Ja(e):t==="string"&&(n=If(e)||e4(e)||s4(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=dc(this._rgb);return e&&(e.a=Pe(e.a)),e}set rgb(e){this._rgb=Ja(e)}rgbString(){return this._valid?n4(this._rgb):void 0}hexString(){return this._valid?Tf(this._rgb):void 0}hslString(){return this._valid?Jf(this._rgb):void 0}mix(e,t){if(e){const n=this.rgb,a=e.rgb;let s;const o=t===s?.5:t,c=2*o-1,r=n.a-a.a,d=((c*r===-1?c:(c+r)/(1+c*r))+1)/2;s=1-d,n.r=255&d*n.r+s*a.r+.5,n.g=255&d*n.g+s*a.g+.5,n.b=255&d*n.b+s*a.b+.5,n.a=o*n.a+(1-o)*a.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=a4(this._rgb,e._rgb,t)),this}clone(){return new oi(this.rgb)}alpha(e){return this._rgb.a=qe(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=Bi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Vi(this._rgb,2,e),this}darken(e){return Vi(this._rgb,2,-e),this}saturate(e){return Vi(this._rgb,1,e),this}desaturate(e){return Vi(this._rgb,1,-e),this}rotate(e){return Xf(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function we(){}const o4=(()=>{let i=0;return()=>i++})();function Q(i){return i===null||typeof i>"u"}function F(i){if(Array.isArray&&Array.isArray(i))return!0;const e=Object.prototype.toString.call(i);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function P(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function j(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function ue(i,e){return j(i)?i:e}function M(i,e){return typeof i>"u"?e:i}const c4=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/e,fc=(i,e)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*e:+i;function I(i,e,t){if(i&&typeof i.call=="function")return i.apply(t,e)}function L(i,e,t,n){let a,s,o;if(F(i))if(s=i.length,n)for(a=s-1;a>=0;a--)e.call(t,i[a],a);else for(a=0;a<s;a++)e.call(t,i[a],a);else if(P(i))for(o=Object.keys(i),s=o.length,a=0;a<s;a++)e.call(t,i[o[a]],o[a])}function Ji(i,e){let t,n,a,s;if(!i||!e||i.length!==e.length)return!1;for(t=0,n=i.length;t<n;++t)if(a=i[t],s=e[t],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function $i(i){if(F(i))return i.map($i);if(P(i)){const e=Object.create(null),t=Object.keys(i),n=t.length;let a=0;for(;a<n;++a)e[t[a]]=$i(i[t[a]]);return e}return i}function lc(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function r4(i,e,t,n){if(!lc(i))return;const a=e[i],s=t[i];P(a)&&P(s)?ci(a,s,n):e[i]=$i(s)}function ci(i,e,t){const n=F(e)?e:[e],a=n.length;if(!P(i))return i;t=t||{};const s=t.merger||r4;let o;for(let c=0;c<a;++c){if(o=n[c],!P(o))continue;const r=Object.keys(o);for(let d=0,f=r.length;d<f;++d)s(r[d],i,o,t)}return i}function Xt(i,e){return ci(i,e,{merger:d4})}function d4(i,e,t){if(!lc(i))return;const n=e[i],a=t[i];P(n)&&P(a)?Xt(n,a):Object.prototype.hasOwnProperty.call(e,i)||(e[i]=$i(a))}const $a={"":i=>i,x:i=>i.x,y:i=>i.y};function f4(i){const e=i.split("."),t=[];let n="";for(const a of e)n+=a,n.endsWith("\\")?n=n.slice(0,-1)+".":(t.push(n),n="");return t}function l4(i){const e=f4(i);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function Je(i,e){return($a[e]||($a[e]=l4(e)))(i)}function Ba(i){return i.charAt(0).toUpperCase()+i.slice(1)}const ri=i=>typeof i<"u",$e=i=>typeof i=="function",es=(i,e)=>{if(i.size!==e.size)return!1;for(const t of i)if(!e.has(t))return!1;return!0};function h4(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const H=Math.PI,T=2*H,N4=T+H,en=Number.POSITIVE_INFINITY,g4=H/180,U=H/2,at=H/4,ts=H*2/3,Ue=Math.log10,ve=Math.sign;function Jt(i,e,t){return Math.abs(i-e)<t}function is(i){const e=Math.round(i);i=Jt(i,e,i/1e3)?e:i;const t=Math.pow(10,Math.floor(Ue(i))),n=i/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function u4(i){const e=[],t=Math.sqrt(i);let n;for(n=1;n<t;n++)i%n===0&&(e.push(n),e.push(i/n));return t===(t|0)&&e.push(t),e.sort((a,s)=>a-s).pop(),e}function St(i){return!isNaN(parseFloat(i))&&isFinite(i)}function b4(i,e){const t=Math.round(i);return t-e<=i&&t+e>=i}function hc(i,e,t){let n,a,s;for(n=0,a=i.length;n<a;n++)s=i[n][t],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Ae(i){return i*(H/180)}function ma(i){return i*(180/H)}function ns(i){if(!j(i))return;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}function Nc(i,e){const t=e.x-i.x,n=e.y-i.y,a=Math.sqrt(t*t+n*n);let s=Math.atan2(n,t);return s<-.5*H&&(s+=T),{angle:s,distance:a}}function In(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function B4(i,e){return(i-e+N4)%T-H}function be(i){return(i%T+T)%T}function di(i,e,t,n){const a=be(i),s=be(e),o=be(t),c=be(s-a),r=be(o-a),d=be(a-s),f=be(a-o);return a===s||a===o||n&&s===o||c>r&&d<f}function ee(i,e,t){return Math.max(e,Math.min(t,i))}function m4(i){return ee(i,-32768,32767)}function Qe(i,e,t,n=1e-6){return i>=Math.min(e,t)-n&&i<=Math.max(e,t)+n}function xa(i,e,t){t=t||(o=>i[o]<e);let n=i.length-1,a=0,s;for(;n-a>1;)s=a+n>>1,t(s)?a=s:n=s;return{lo:a,hi:n}}const Ke=(i,e,t,n)=>xa(i,t,n?a=>{const s=i[a][e];return s<t||s===t&&i[a+1][e]===t}:a=>i[a][e]<t),x4=(i,e,t)=>xa(i,t,n=>i[n][e]>=t);function p4(i,e,t){let n=0,a=i.length;for(;n<a&&i[n]<e;)n++;for(;a>n&&i[a-1]>t;)a--;return n>0||a<i.length?i.slice(n,a):i}const gc=["push","pop","shift","splice","unshift"];function D4(i,e){if(i._chartjs){i._chartjs.listeners.push(e);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),gc.forEach(t=>{const n="_onData"+Ba(t),a=i[t];Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value(...s){const o=a.apply(this,s);return i._chartjs.listeners.forEach(c=>{typeof c[n]=="function"&&c[n](...s)}),o}})})}function as(i,e){const t=i._chartjs;if(!t)return;const n=t.listeners,a=n.indexOf(e);a!==-1&&n.splice(a,1),!(n.length>0)&&(gc.forEach(s=>{delete i[s]}),delete i._chartjs)}function uc(i){const e=new Set(i);return e.size===i.length?i:Array.from(e)}const bc=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Bc(i,e){let t=[],n=!1;return function(...a){t=a,n||(n=!0,bc.call(window,()=>{n=!1,i.apply(e,t)}))}}function O4(i,e){let t;return function(...n){return e?(clearTimeout(t),t=setTimeout(i,e,n)):i.apply(this,n),e}}const pa=i=>i==="start"?"left":i==="end"?"right":"center",se=(i,e,t)=>i==="start"?e:i==="end"?t:(e+t)/2,A4=(i,e,t,n)=>i===(n?"left":"right")?t:i==="center"?(e+t)/2:e;function mc(i,e,t){const n=e.length;let a=0,s=n;if(i._sorted){const{iScale:o,_parsed:c}=i,r=o.axis,{min:d,max:f,minDefined:l,maxDefined:h}=o.getUserBounds();l&&(a=ee(Math.min(Ke(c,o.axis,d).lo,t?n:Ke(e,r,o.getPixelForValue(d)).lo),0,n-1)),h?s=ee(Math.max(Ke(c,o.axis,f,!0).hi+1,t?0:Ke(e,r,o.getPixelForValue(f),!0).hi+1),a,n)-a:s=n-a}return{start:a,count:s}}function xc(i){const{xScale:e,yScale:t,_scaleRanges:n}=i,a={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!n)return i._scaleRanges=a,!0;const s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==t.min||n.ymax!==t.max;return Object.assign(n,a),s}const Ci=i=>i===0||i===1,ss=(i,e,t)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-e)*T/t)),os=(i,e,t)=>Math.pow(2,-10*i)*Math.sin((i-e)*T/t)+1,$t={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*U)+1,easeOutSine:i=>Math.sin(i*U),easeInOutSine:i=>-.5*(Math.cos(H*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Ci(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Ci(i)?i:ss(i,.075,.3),easeOutElastic:i=>Ci(i)?i:os(i,.075,.3),easeInOutElastic(i){return Ci(i)?i:i<.5?.5*ss(i*2,.1125,.45):.5+.5*os(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let e=1.70158;return(i/=.5)<1?.5*(i*i*(((e*=1.525)+1)*i-e)):.5*((i-=2)*i*(((e*=1.525)+1)*i+e)+2)},easeInBounce:i=>1-$t.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?$t.easeInBounce(i*2)*.5:$t.easeOutBounce(i*2-1)*.5+.5};function Da(i){if(i&&typeof i=="object"){const e=i.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function cs(i){return Da(i)?i:new oi(i)}function On(i){return Da(i)?i:new oi(i).saturate(.5).darken(.1).hexString()}const V4=["x","y","borderWidth","radius","tension"],C4=["color","borderColor","backgroundColor"];function y4(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),i.set("animations",{colors:{type:"color",properties:C4},numbers:{type:"number",properties:V4}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function S4(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const rs=new Map;function k4(i,e){e=e||{};const t=i+JSON.stringify(e);let n=rs.get(t);return n||(n=new Intl.NumberFormat(i,e),rs.set(t,n)),n}function mi(i,e,t){return k4(e,t).format(i)}const pc={values(i){return F(i)?i:""+i},numeric(i,e,t){if(i===0)return"0";const n=this.chart.options.locale;let a,s=i;if(t.length>1){const d=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(d<1e-4||d>1e15)&&(a="scientific"),s=v4(i,t)}const o=Ue(Math.abs(s)),c=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),r={notation:a,minimumFractionDigits:c,maximumFractionDigits:c};return Object.assign(r,this.options.ticks.format),mi(i,n,r)},logarithmic(i,e,t){if(i===0)return"0";const n=t[e].significand||i/Math.pow(10,Math.floor(Ue(i)));return[1,2,3,5,10,15].includes(n)||e>.8*t.length?pc.numeric.call(this,i,e,t):""}};function v4(i,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&i!==Math.floor(i)&&(t=i-Math.floor(i)),t}var rn={formatters:pc};function G4(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:rn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const bt=Object.create(null),Fn=Object.create(null);function ei(i,e){if(!e)return i;const t=e.split(".");for(let n=0,a=t.length;n<a;++n){const s=t[n];i=i[s]||(i[s]=Object.create(null))}return i}function An(i,e,t){return typeof e=="string"?ci(ei(i,e),t):ci(ei(i,""),e)}class w4{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,a)=>On(a.backgroundColor),this.hoverBorderColor=(n,a)=>On(a.borderColor),this.hoverColor=(n,a)=>On(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return An(this,e,t)}get(e){return ei(this,e)}describe(e,t){return An(Fn,e,t)}override(e,t){return An(bt,e,t)}route(e,t,n,a){const s=ei(this,e),o=ei(this,n),c="_"+t;Object.defineProperties(s,{[c]:{value:s[t],writable:!0},[t]:{enumerable:!0,get(){const r=this[c],d=o[a];return P(r)?Object.assign({},d,r):M(r,d)},set(r){this[c]=r}}})}apply(e){e.forEach(t=>t(this))}}var Y=new w4({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[y4,S4,G4]);function M4(i){return!i||Q(i.size)||Q(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function tn(i,e,t,n,a){let s=e[a];return s||(s=e[a]=i.measureText(a).width,t.push(a)),s>n&&(n=s),n}function _4(i,e,t,n){n=n||{};let a=n.data=n.data||{},s=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},s=n.garbageCollect=[],n.font=e),i.save(),i.font=e;let o=0;const c=t.length;let r,d,f,l,h;for(r=0;r<c;r++)if(l=t[r],l!=null&&!F(l))o=tn(i,a,s,o,l);else if(F(l))for(d=0,f=l.length;d<f;d++)h=l[d],h!=null&&!F(h)&&(o=tn(i,a,s,o,h));i.restore();const g=s.length/2;if(g>t.length){for(r=0;r<g;r++)delete a[s[r]];s.splice(0,g)}return o}function st(i,e,t){const n=i.currentDevicePixelRatio,a=t!==0?Math.max(t/2,.5):0;return Math.round((e-a)*n)/n+a}function ds(i,e){e=e||i.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,i.width,i.height),e.restore()}function Tn(i,e,t,n){Dc(i,e,t,n,null)}function Dc(i,e,t,n,a){let s,o,c,r,d,f,l,h;const g=e.pointStyle,N=e.rotation,u=e.radius;let b=(N||0)*g4;if(g&&typeof g=="object"&&(s=g.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){i.save(),i.translate(t,n),i.rotate(b),i.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),i.restore();return}if(!(isNaN(u)||u<=0)){switch(i.beginPath(),g){default:a?i.ellipse(t,n,a/2,u,0,0,T):i.arc(t,n,u,0,T),i.closePath();break;case"triangle":f=a?a/2:u,i.moveTo(t+Math.sin(b)*f,n-Math.cos(b)*u),b+=ts,i.lineTo(t+Math.sin(b)*f,n-Math.cos(b)*u),b+=ts,i.lineTo(t+Math.sin(b)*f,n-Math.cos(b)*u),i.closePath();break;case"rectRounded":d=u*.516,r=u-d,o=Math.cos(b+at)*r,l=Math.cos(b+at)*(a?a/2-d:r),c=Math.sin(b+at)*r,h=Math.sin(b+at)*(a?a/2-d:r),i.arc(t-l,n-c,d,b-H,b-U),i.arc(t+h,n-o,d,b-U,b),i.arc(t+l,n+c,d,b,b+U),i.arc(t-h,n+o,d,b+U,b+H),i.closePath();break;case"rect":if(!N){r=Math.SQRT1_2*u,f=a?a/2:r,i.rect(t-f,n-r,2*f,2*r);break}b+=at;case"rectRot":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+h,n-o),i.lineTo(t+l,n+c),i.lineTo(t-h,n+o),i.closePath();break;case"crossRot":b+=at;case"cross":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"star":l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o),b+=at,l=Math.cos(b)*(a?a/2:u),o=Math.cos(b)*u,c=Math.sin(b)*u,h=Math.sin(b)*(a?a/2:u),i.moveTo(t-l,n-c),i.lineTo(t+l,n+c),i.moveTo(t+h,n-o),i.lineTo(t-h,n+o);break;case"line":o=a?a/2:Math.cos(b)*u,c=Math.sin(b)*u,i.moveTo(t-o,n-c),i.lineTo(t+o,n+c);break;case"dash":i.moveTo(t,n),i.lineTo(t+Math.cos(b)*(a?a/2:u),n+Math.sin(b)*u);break;case!1:i.closePath();break}i.fill(),e.borderWidth>0&&i.stroke()}}function Le(i,e,t){return t=t||.5,!e||i&&i.x>e.left-t&&i.x<e.right+t&&i.y>e.top-t&&i.y<e.bottom+t}function dn(i,e){i.save(),i.beginPath(),i.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),i.clip()}function fn(i){i.restore()}function P4(i,e,t,n,a){if(!e)return i.lineTo(t.x,t.y);if(a==="middle"){const s=(e.x+t.x)/2;i.lineTo(s,e.y),i.lineTo(s,t.y)}else a==="after"!=!!n?i.lineTo(e.x,t.y):i.lineTo(t.x,e.y);i.lineTo(t.x,t.y)}function R4(i,e,t,n){if(!e)return i.lineTo(t.x,t.y);i.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?t.cp2x:t.cp1x,n?t.cp2y:t.cp1y,t.x,t.y)}function E4(i,e){e.translation&&i.translate(e.translation[0],e.translation[1]),Q(e.rotation)||i.rotate(e.rotation),e.color&&(i.fillStyle=e.color),e.textAlign&&(i.textAlign=e.textAlign),e.textBaseline&&(i.textBaseline=e.textBaseline)}function Q4(i,e,t,n,a){if(a.strikethrough||a.underline){const s=i.measureText(n),o=e-s.actualBoundingBoxLeft,c=e+s.actualBoundingBoxRight,r=t-s.actualBoundingBoxAscent,d=t+s.actualBoundingBoxDescent,f=a.strikethrough?(r+d)/2:d;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=a.decorationWidth||2,i.moveTo(o,f),i.lineTo(c,f),i.stroke()}}function K4(i,e){const t=i.fillStyle;i.fillStyle=e.color,i.fillRect(e.left,e.top,e.width,e.height),i.fillStyle=t}function Bt(i,e,t,n,a,s={}){const o=F(e)?e:[e],c=s.strokeWidth>0&&s.strokeColor!=="";let r,d;for(i.save(),i.font=a.string,E4(i,s),r=0;r<o.length;++r)d=o[r],s.backdrop&&K4(i,s.backdrop),c&&(s.strokeColor&&(i.strokeStyle=s.strokeColor),Q(s.strokeWidth)||(i.lineWidth=s.strokeWidth),i.strokeText(d,t,n,s.maxWidth)),i.fillText(d,t,n,s.maxWidth),Q4(i,t,n,d,s),n+=Number(a.lineHeight);i.restore()}function fi(i,e){const{x:t,y:n,w:a,h:s,radius:o}=e;i.arc(t+o.topLeft,n+o.topLeft,o.topLeft,-U,H,!0),i.lineTo(t,n+s-o.bottomLeft),i.arc(t+o.bottomLeft,n+s-o.bottomLeft,o.bottomLeft,H,U,!0),i.lineTo(t+a-o.bottomRight,n+s),i.arc(t+a-o.bottomRight,n+s-o.bottomRight,o.bottomRight,U,0,!0),i.lineTo(t+a,n+o.topRight),i.arc(t+a-o.topRight,n+o.topRight,o.topRight,0,-U,!0),i.lineTo(t+o.topLeft,n)}const L4=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,z4=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function I4(i,e){const t=(""+i).match(L4);if(!t||t[1]==="normal")return e*1.2;switch(i=+t[2],t[3]){case"px":return i;case"%":i/=100;break}return e*i}const F4=i=>+i||0;function Oa(i,e){const t={},n=P(e),a=n?Object.keys(e):e,s=P(i)?n?o=>M(i[o],i[e[o]]):o=>i[o]:()=>i;for(const o of a)t[o]=F4(s(o));return t}function Oc(i){return Oa(i,{top:"y",right:"x",bottom:"y",left:"x"})}function Nt(i){return Oa(i,["topLeft","topRight","bottomLeft","bottomRight"])}function ce(i){const e=Oc(i);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function X(i,e){i=i||{},e=e||Y.font;let t=M(i.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let n=M(i.style,e.style);n&&!(""+n).match(z4)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const a={family:M(i.family,e.family),lineHeight:I4(M(i.lineHeight,e.lineHeight),t),size:t,style:n,weight:M(i.weight,e.weight),string:""};return a.string=M4(a),a}function jt(i,e,t,n){let a=!0,s,o,c;for(s=0,o=i.length;s<o;++s)if(c=i[s],c!==void 0&&(e!==void 0&&typeof c=="function"&&(c=c(e),a=!1),t!==void 0&&F(c)&&(c=c[t%c.length],a=!1),c!==void 0))return n&&!a&&(n.cacheable=!1),c}function T4(i,e,t){const{min:n,max:a}=i,s=fc(e,(a-n)/2),o=(c,r)=>t&&c===0?0:c+r;return{min:o(n,-Math.abs(s)),max:o(a,s)}}function nt(i,e){return Object.assign(Object.create(i),e)}function Aa(i,e=[""],t,n,a=()=>i[0]){const s=t||i;typeof n>"u"&&(n=yc("_fallback",i));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:s,_fallback:n,_getTarget:a,override:c=>Aa([c,...i],e,s,n)};return new Proxy(o,{deleteProperty(c,r){return delete c[r],delete c._keys,delete i[0][r],!0},get(c,r){return Vc(c,r,()=>X4(r,e,i,c))},getOwnPropertyDescriptor(c,r){return Reflect.getOwnPropertyDescriptor(c._scopes[0],r)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(c,r){return ls(c).includes(r)},ownKeys(c){return ls(c)},set(c,r,d){const f=c._storage||(c._storage=a());return c[r]=f[r]=d,delete c._keys,!0}})}function kt(i,e,t,n){const a={_cacheable:!1,_proxy:i,_context:e,_subProxy:t,_stack:new Set,_descriptors:Ac(i,n),setContext:s=>kt(i,s,t,n),override:s=>kt(i.override(s),e,t,n)};return new Proxy(a,{deleteProperty(s,o){return delete s[o],delete i[o],!0},get(s,o,c){return Vc(s,o,()=>H4(s,o,c))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(s,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(s,o,c){return i[o]=c,delete s[o],!0}})}function Ac(i,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:n=e.indexable,_allKeys:a=e.allKeys}=i;return{allKeys:a,scriptable:t,indexable:n,isScriptable:$e(t)?t:()=>t,isIndexable:$e(n)?n:()=>n}}const W4=(i,e)=>i?i+Ba(e):e,Va=(i,e)=>P(e)&&i!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Vc(i,e,t){if(Object.prototype.hasOwnProperty.call(i,e))return i[e];const n=t();return i[e]=n,n}function H4(i,e,t){const{_proxy:n,_context:a,_subProxy:s,_descriptors:o}=i;let c=n[e];return $e(c)&&o.isScriptable(e)&&(c=j4(e,c,i,t)),F(c)&&c.length&&(c=U4(e,c,i,o.isIndexable)),Va(e,c)&&(c=kt(c,a,s&&s[e],o)),c}function j4(i,e,t,n){const{_proxy:a,_context:s,_subProxy:o,_stack:c}=t;if(c.has(i))throw new Error("Recursion detected: "+Array.from(c).join("->")+"->"+i);c.add(i);let r=e(s,o||n);return c.delete(i),Va(i,r)&&(r=Ca(a._scopes,a,i,r)),r}function U4(i,e,t,n){const{_proxy:a,_context:s,_subProxy:o,_descriptors:c}=t;if(typeof s.index<"u"&&n(i))return e[s.index%e.length];if(P(e[0])){const r=e,d=a._scopes.filter(f=>f!==r);e=[];for(const f of r){const l=Ca(d,a,i,f);e.push(kt(l,s,o&&o[i],c))}}return e}function Cc(i,e,t){return $e(i)?i(e,t):i}const Y4=(i,e)=>i===!0?e:typeof i=="string"?Je(e,i):void 0;function Z4(i,e,t,n,a){for(const s of e){const o=Y4(t,s);if(o){i.add(o);const c=Cc(o._fallback,t,a);if(typeof c<"u"&&c!==t&&c!==n)return c}else if(o===!1&&typeof n<"u"&&t!==n)return null}return!1}function Ca(i,e,t,n){const a=e._rootScopes,s=Cc(e._fallback,t,n),o=[...i,...a],c=new Set;c.add(n);let r=fs(c,o,t,s||t,n);return r===null||typeof s<"u"&&s!==t&&(r=fs(c,o,s,r,n),r===null)?!1:Aa(Array.from(c),[""],a,s,()=>q4(e,t,n))}function fs(i,e,t,n,a){for(;t;)t=Z4(i,e,t,n,a);return t}function q4(i,e,t){const n=i._getTarget();e in n||(n[e]={});const a=n[e];return F(a)&&P(t)?t:a||{}}function X4(i,e,t,n){let a;for(const s of e)if(a=yc(W4(s,i),t),typeof a<"u")return Va(i,a)?Ca(t,n,i,a):a}function yc(i,e){for(const t of e){if(!t)continue;const n=t[i];if(typeof n<"u")return n}}function ls(i){let e=i._keys;return e||(e=i._keys=J4(i._scopes)),e}function J4(i){const e=new Set;for(const t of i)for(const n of Object.keys(t).filter(a=>!a.startsWith("_")))e.add(n);return Array.from(e)}function Sc(i,e,t,n){const{iScale:a}=i,{key:s="r"}=this._parsing,o=new Array(n);let c,r,d,f;for(c=0,r=n;c<r;++c)d=c+t,f=e[d],o[c]={r:a.parse(Je(f,s),d)};return o}const $4=Number.EPSILON||1e-14,vt=(i,e)=>e<i.length&&!i[e].skip&&i[e],kc=i=>i==="x"?"y":"x";function el(i,e,t,n){const a=i.skip?e:i,s=e,o=t.skip?e:t,c=In(s,a),r=In(o,s);let d=c/(c+r),f=r/(c+r);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const l=n*d,h=n*f;return{previous:{x:s.x-l*(o.x-a.x),y:s.y-l*(o.y-a.y)},next:{x:s.x+h*(o.x-a.x),y:s.y+h*(o.y-a.y)}}}function tl(i,e,t){const n=i.length;let a,s,o,c,r,d=vt(i,0);for(let f=0;f<n-1;++f)if(r=d,d=vt(i,f+1),!(!r||!d)){if(Jt(e[f],0,$4)){t[f]=t[f+1]=0;continue}a=t[f]/e[f],s=t[f+1]/e[f],c=Math.pow(a,2)+Math.pow(s,2),!(c<=9)&&(o=3/Math.sqrt(c),t[f]=a*o*e[f],t[f+1]=s*o*e[f])}}function il(i,e,t="x"){const n=kc(t),a=i.length;let s,o,c,r=vt(i,0);for(let d=0;d<a;++d){if(o=c,c=r,r=vt(i,d+1),!c)continue;const f=c[t],l=c[n];o&&(s=(f-o[t])/3,c[`cp1${t}`]=f-s,c[`cp1${n}`]=l-s*e[d]),r&&(s=(r[t]-f)/3,c[`cp2${t}`]=f+s,c[`cp2${n}`]=l+s*e[d])}}function nl(i,e="x"){const t=kc(e),n=i.length,a=Array(n).fill(0),s=Array(n);let o,c,r,d=vt(i,0);for(o=0;o<n;++o)if(c=r,r=d,d=vt(i,o+1),!!r){if(d){const f=d[e]-r[e];a[o]=f!==0?(d[t]-r[t])/f:0}s[o]=c?d?ve(a[o-1])!==ve(a[o])?0:(a[o-1]+a[o])/2:a[o-1]:a[o]}tl(i,a,s),il(i,s,e)}function yi(i,e,t){return Math.max(Math.min(i,t),e)}function al(i,e){let t,n,a,s,o,c=Le(i[0],e);for(t=0,n=i.length;t<n;++t)o=s,s=c,c=t<n-1&&Le(i[t+1],e),s&&(a=i[t],o&&(a.cp1x=yi(a.cp1x,e.left,e.right),a.cp1y=yi(a.cp1y,e.top,e.bottom)),c&&(a.cp2x=yi(a.cp2x,e.left,e.right),a.cp2y=yi(a.cp2y,e.top,e.bottom)))}function sl(i,e,t,n,a){let s,o,c,r;if(e.spanGaps&&(i=i.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")nl(i,a);else{let d=n?i[i.length-1]:i[0];for(s=0,o=i.length;s<o;++s)c=i[s],r=el(d,c,i[Math.min(s+1,o-(n?0:1))%o],e.tension),c.cp1x=r.previous.x,c.cp1y=r.previous.y,c.cp2x=r.next.x,c.cp2y=r.next.y,d=c}e.capBezierPoints&&al(i,t)}function vc(){return typeof window<"u"&&typeof document<"u"}function ya(i){let e=i.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function nn(i,e,t){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*e.parentNode[t])):n=i,n}const ln=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function ol(i,e){return ln(i).getPropertyValue(e)}const cl=["top","right","bottom","left"];function gt(i,e,t){const n={};t=t?"-"+t:"";for(let a=0;a<4;a++){const s=cl[a];n[s]=parseFloat(i[e+"-"+s+t])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const rl=(i,e,t)=>(i>0||e>0)&&(!t||!t.shadowRoot);function dl(i,e){const t=i.touches,n=t&&t.length?t[0]:i,{offsetX:a,offsetY:s}=n;let o=!1,c,r;if(rl(a,s,i.target))c=a,r=s;else{const d=e.getBoundingClientRect();c=n.clientX-d.left,r=n.clientY-d.top,o=!0}return{x:c,y:r,box:o}}function dt(i,e){if("native"in i)return i;const{canvas:t,currentDevicePixelRatio:n}=e,a=ln(t),s=a.boxSizing==="border-box",o=gt(a,"padding"),c=gt(a,"border","width"),{x:r,y:d,box:f}=dl(i,t),l=o.left+(f&&c.left),h=o.top+(f&&c.top);let{width:g,height:N}=e;return s&&(g-=o.width+c.width,N-=o.height+c.height),{x:Math.round((r-l)/g*t.width/n),y:Math.round((d-h)/N*t.height/n)}}function fl(i,e,t){let n,a;if(e===void 0||t===void 0){const s=ya(i);if(!s)e=i.clientWidth,t=i.clientHeight;else{const o=s.getBoundingClientRect(),c=ln(s),r=gt(c,"border","width"),d=gt(c,"padding");e=o.width-d.width-r.width,t=o.height-d.height-r.height,n=nn(c.maxWidth,s,"clientWidth"),a=nn(c.maxHeight,s,"clientHeight")}}return{width:e,height:t,maxWidth:n||en,maxHeight:a||en}}const Si=i=>Math.round(i*10)/10;function ll(i,e,t,n){const a=ln(i),s=gt(a,"margin"),o=nn(a.maxWidth,i,"clientWidth")||en,c=nn(a.maxHeight,i,"clientHeight")||en,r=fl(i,e,t);let{width:d,height:f}=r;if(a.boxSizing==="content-box"){const h=gt(a,"border","width"),g=gt(a,"padding");d-=g.width+h.width,f-=g.height+h.height}return d=Math.max(0,d-s.width),f=Math.max(0,n?d/n:f-s.height),d=Si(Math.min(d,o,r.maxWidth)),f=Si(Math.min(f,c,r.maxHeight)),d&&!f&&(f=Si(d/2)),(e!==void 0||t!==void 0)&&n&&r.height&&f>r.height&&(f=r.height,d=Si(Math.floor(f*n))),{width:d,height:f}}function hs(i,e,t){const n=e||1,a=Math.floor(i.height*n),s=Math.floor(i.width*n);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const o=i.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==a||o.width!==s?(i.currentDevicePixelRatio=n,o.height=a,o.width=s,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}const hl=function(){let i=!1;try{const e={get passive(){return i=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return i}();function Ns(i,e){const t=ol(i,e),n=t&&t.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function ft(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)}}function Nl(i,e,t,n){return{x:i.x+t*(e.x-i.x),y:n==="middle"?t<.5?i.y:e.y:n==="after"?t<1?i.y:e.y:t>0?e.y:i.y}}function gl(i,e,t,n){const a={x:i.cp2x,y:i.cp2y},s={x:e.cp1x,y:e.cp1y},o=ft(i,a,t),c=ft(a,s,t),r=ft(s,e,t),d=ft(o,c,t),f=ft(c,r,t);return ft(d,f,t)}const ul=function(i,e){return{x(t){return i+i+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,n){return t-n},leftForLtr(t,n){return t-n}}},bl=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,e){return i+e},leftForLtr(i,e){return i}}};function Ct(i,e,t){return i?ul(e,t):bl()}function Gc(i,e){let t,n;(e==="ltr"||e==="rtl")&&(t=i.canvas.style,n=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),i.prevTextDirection=n)}function wc(i,e){e!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",e[0],e[1]))}function Mc(i){return i==="angle"?{between:di,compare:B4,normalize:be}:{between:Qe,compare:(e,t)=>e-t,normalize:e=>e}}function gs({start:i,end:e,count:t,loop:n,style:a}){return{start:i%t,end:e%t,loop:n&&(e-i+1)%t===0,style:a}}function Bl(i,e,t){const{property:n,start:a,end:s}=t,{between:o,normalize:c}=Mc(n),r=e.length;let{start:d,end:f,loop:l}=i,h,g;if(l){for(d+=r,f+=r,h=0,g=r;h<g&&o(c(e[d%r][n]),a,s);++h)d--,f--;d%=r,f%=r}return f<d&&(f+=r),{start:d,end:f,loop:l,style:i.style}}function _c(i,e,t){if(!t)return[i];const{property:n,start:a,end:s}=t,o=e.length,{compare:c,between:r,normalize:d}=Mc(n),{start:f,end:l,loop:h,style:g}=Bl(i,e,t),N=[];let u=!1,b=null,m,B,D;const O=()=>r(a,D,m)&&c(a,D)!==0,x=()=>c(s,m)===0||r(s,D,m),y=()=>u||O(),C=()=>!u||x();for(let A=f,S=f;A<=l;++A)B=e[A%o],!B.skip&&(m=d(B[n]),m!==D&&(u=r(m,a,s),b===null&&y()&&(b=c(m,a)===0?A:S),b!==null&&C()&&(N.push(gs({start:b,end:A,loop:h,count:o,style:g})),b=null),S=A,D=m));return b!==null&&N.push(gs({start:b,end:l,loop:h,count:o,style:g})),N}function Pc(i,e){const t=[],n=i.segments;for(let a=0;a<n.length;a++){const s=_c(n[a],i.points,e);s.length&&t.push(...s)}return t}function ml(i,e,t,n){let a=0,s=e-1;if(t&&!n)for(;a<e&&!i[a].skip;)a++;for(;a<e&&i[a].skip;)a++;for(a%=e,t&&(s+=a);s>a&&i[s%e].skip;)s--;return s%=e,{start:a,end:s}}function xl(i,e,t,n){const a=i.length,s=[];let o=e,c=i[e],r;for(r=e+1;r<=t;++r){const d=i[r%a];d.skip||d.stop?c.skip||(n=!1,s.push({start:e%a,end:(r-1)%a,loop:n}),e=o=d.stop?r:null):(o=r,c.skip&&(e=r)),c=d}return o!==null&&s.push({start:e%a,end:o%a,loop:n}),s}function pl(i,e){const t=i.points,n=i.options.spanGaps,a=t.length;if(!a)return[];const s=!!i._loop,{start:o,end:c}=ml(t,a,s,n);if(n===!0)return us(i,[{start:o,end:c,loop:s}],t,e);const r=c<o?c+a:c,d=!!i._fullLoop&&o===0&&c===a-1;return us(i,xl(t,o,r,d),t,e)}function us(i,e,t,n){return!n||!n.setContext||!t?e:Dl(i,e,t,n)}function Dl(i,e,t,n){const a=i._chart.getContext(),s=bs(i.options),{_datasetIndex:o,options:{spanGaps:c}}=i,r=t.length,d=[];let f=s,l=e[0].start,h=l;function g(N,u,b,m){const B=c?-1:1;if(N!==u){for(N+=r;t[N%r].skip;)N-=B;for(;t[u%r].skip;)u+=B;N%r!==u%r&&(d.push({start:N%r,end:u%r,loop:b,style:m}),f=m,l=u%r)}}for(const N of e){l=c?l:N.start;let u=t[l%r],b;for(h=l+1;h<=N.end;h++){const m=t[h%r];b=bs(n.setContext(nt(a,{type:"segment",p0:u,p1:m,p0DataIndex:(h-1)%r,p1DataIndex:h%r,datasetIndex:o}))),Ol(b,f)&&g(l,h-1,N.loop,f),u=m,f=b}l<h-1&&g(l,h-1,N.loop,f)}return d}function bs(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Ol(i,e){if(!e)return!1;const t=[],n=function(a,s){return Da(s)?(t.includes(s)||t.push(s),t.indexOf(s)):s};return JSON.stringify(i,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Al{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,a){const s=t.listeners[a],o=t.duration;s.forEach(c=>c({chart:e,initial:t.initial,numSteps:o,currentStep:Math.min(n-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=bc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,a)=>{if(!n.running||!n.items.length)return;const s=n.items;let o=s.length-1,c=!1,r;for(;o>=0;--o)r=s[o],r._active?(r._total>n.duration&&(n.duration=r._total),r.tick(e),c=!0):(s[o]=s[s.length-1],s.pop());c&&(a.draw(),this._notify(a,n,e,"progress")),s.length||(n.running=!1,this._notify(a,n,e,"complete"),n.initial=!1),t+=s.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((n,a)=>Math.max(n,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const n=t.items;let a=n.length-1;for(;a>=0;--a)n[a].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Me=new Al;const Bs="transparent",Vl={boolean(i,e,t){return t>.5?e:i},color(i,e,t){const n=cs(i||Bs),a=n.valid&&cs(e||Bs);return a&&a.valid?a.mix(n,t).hexString():e},number(i,e,t){return i+(e-i)*t}};class Cl{constructor(e,t,n,a){const s=t[n];a=jt([e.to,a,s,e.from]);const o=jt([e.from,s,a]);this._active=!0,this._fn=e.fn||Vl[e.type||typeof o],this._easing=$t[e.easing]||$t.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=o,this._to=a,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);const a=this._target[this._prop],s=n-this._start,o=this._duration-s;this._start=n,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=jt([e.to,t,a,e.from]),this._from=jt([e.from,a,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,n=this._duration,a=this._prop,s=this._from,o=this._loop,c=this._to;let r;if(this._active=s!==c&&(o||t<n),!this._active){this._target[a]=c,this._notify(!0);return}if(t<0){this._target[a]=s;return}r=t/n%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[a]=this._fn(s,c,r)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){const t=e?"res":"rej",n=this._promises||[];for(let a=0;a<n.length;a++)n[a][t]()}}class Rc{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!P(e))return;const t=Object.keys(Y.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const s=e[a];if(!P(s))return;const o={};for(const c of t)o[c]=s[c];(F(s.properties)&&s.properties||[a]).forEach(c=>{(c===a||!n.has(c))&&n.set(c,o)})})}_animateOptions(e,t){const n=t.options,a=Sl(e,n);if(!a)return[];const s=this._createAnimations(a,n);return n.$shared&&yl(e.options.$animations,n).then(()=>{e.options=n},()=>{}),s}_createAnimations(e,t){const n=this._properties,a=[],s=e.$animations||(e.$animations={}),o=Object.keys(t),c=Date.now();let r;for(r=o.length-1;r>=0;--r){const d=o[r];if(d.charAt(0)==="$")continue;if(d==="options"){a.push(...this._animateOptions(e,t));continue}const f=t[d];let l=s[d];const h=n.get(d);if(l)if(h&&l.active()){l.update(h,f,c);continue}else l.cancel();if(!h||!h.duration){e[d]=f;continue}s[d]=l=new Cl(h,e,d,f),a.push(l)}return a}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const n=this._createAnimations(e,t);if(n.length)return Me.add(this._chart,n),!0}}function yl(i,e){const t=[],n=Object.keys(e);for(let a=0;a<n.length;a++){const s=i[n[a]];s&&s.active()&&t.push(s.wait())}return Promise.all(t)}function Sl(i,e){if(!e)return;let t=i.options;if(!t){i.options=e;return}return t.$shared&&(i.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function ms(i,e){const t=i&&i.options||{},n=t.reverse,a=t.min===void 0?e:0,s=t.max===void 0?e:0;return{start:n?s:a,end:n?a:s}}function kl(i,e,t){if(t===!1)return!1;const n=ms(i,t),a=ms(e,t);return{top:a.end,right:n.end,bottom:a.start,left:n.start}}function vl(i){let e,t,n,a;return P(i)?(e=i.top,t=i.right,n=i.bottom,a=i.left):e=t=n=a=i,{top:e,right:t,bottom:n,left:a,disabled:i===!1}}function Ec(i,e){const t=[],n=i._getSortedDatasetMetas(e);let a,s;for(a=0,s=n.length;a<s;++a)t.push(n[a].index);return t}function xs(i,e,t,n={}){const a=i.keys,s=n.mode==="single";let o,c,r,d;if(e!==null){for(o=0,c=a.length;o<c;++o){if(r=+a[o],r===t){if(n.all)continue;break}d=i.values[r],j(d)&&(s||e===0||ve(e)===ve(d))&&(e+=d)}return e}}function Gl(i){const e=Object.keys(i),t=new Array(e.length);let n,a,s;for(n=0,a=e.length;n<a;++n)s=e[n],t[n]={x:s,y:i[s]};return t}function ps(i,e){const t=i&&i.options.stacked;return t||t===void 0&&e.stack!==void 0}function wl(i,e,t){return`${i.id}.${e.id}.${t.stack||t.type}`}function Ml(i){const{min:e,max:t,minDefined:n,maxDefined:a}=i.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:a?t:Number.POSITIVE_INFINITY}}function _l(i,e,t){const n=i[e]||(i[e]={});return n[t]||(n[t]={})}function Ds(i,e,t,n){for(const a of e.getMatchingVisibleMetas(n).reverse()){const s=i[a.index];if(t&&s>0||!t&&s<0)return a.index}return null}function Os(i,e){const{chart:t,_cachedMeta:n}=i,a=t._stacks||(t._stacks={}),{iScale:s,vScale:o,index:c}=n,r=s.axis,d=o.axis,f=wl(s,o,n),l=e.length;let h;for(let g=0;g<l;++g){const N=e[g],{[r]:u,[d]:b}=N,m=N._stacks||(N._stacks={});h=m[d]=_l(a,f,u),h[c]=b,h._top=Ds(h,o,!0,n.type),h._bottom=Ds(h,o,!1,n.type);const B=h._visualValues||(h._visualValues={});B[c]=b}}function Vn(i,e){const t=i.scales;return Object.keys(t).filter(n=>t[n].axis===e).shift()}function Pl(i,e){return nt(i,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Rl(i,e,t){return nt(i,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function Kt(i,e){const t=i.controller.index,n=i.vScale&&i.vScale.axis;if(n){e=e||i._parsed;for(const a of e){const s=a._stacks;if(!s||s[n]===void 0||s[n][t]===void 0)return;delete s[n][t],s[n]._visualValues!==void 0&&s[n]._visualValues[t]!==void 0&&delete s[n]._visualValues[t]}}}const Cn=i=>i==="reset"||i==="none",As=(i,e)=>e?i:Object.assign({},i),El=(i,e,t)=>i&&!e.hidden&&e._stacked&&{keys:Ec(t,!0),values:null};class Ve{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=ps(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Kt(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,n=this.getDataset(),a=(l,h,g,N)=>l==="x"?h:l==="r"?N:g,s=t.xAxisID=M(n.xAxisID,Vn(e,"x")),o=t.yAxisID=M(n.yAxisID,Vn(e,"y")),c=t.rAxisID=M(n.rAxisID,Vn(e,"r")),r=t.indexAxis,d=t.iAxisID=a(r,s,o,c),f=t.vAxisID=a(r,o,s,c);t.xScale=this.getScaleForId(s),t.yScale=this.getScaleForId(o),t.rScale=this.getScaleForId(c),t.iScale=this.getScaleForId(d),t.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&as(this._data,this),e._stacked&&Kt(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),n=this._data;if(P(t))this._data=Gl(t);else if(n!==t){if(n){as(n,this);const a=this._cachedMeta;Kt(a),a._parsed=[]}t&&Object.isExtensible(t)&&D4(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,n=this.getDataset();let a=!1;this._dataCheck();const s=t._stacked;t._stacked=ps(t.vScale,t),t.stack!==n.stack&&(a=!0,Kt(t),t.stack=n.stack),this._resyncElements(e),(a||s!==t._stacked)&&Os(this,t._parsed)}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:n,_data:a}=this,{iScale:s,_stacked:o}=n,c=s.axis;let r=e===0&&t===a.length?!0:n._sorted,d=e>0&&n._parsed[e-1],f,l,h;if(this._parsing===!1)n._parsed=a,n._sorted=!0,h=a;else{F(a[e])?h=this.parseArrayData(n,a,e,t):P(a[e])?h=this.parseObjectData(n,a,e,t):h=this.parsePrimitiveData(n,a,e,t);const g=()=>l[c]===null||d&&l[c]<d[c];for(f=0;f<t;++f)n._parsed[f+e]=l=h[f],r&&(g()&&(r=!1),d=l);n._sorted=r}o&&Os(this,h)}parsePrimitiveData(e,t,n,a){const{iScale:s,vScale:o}=e,c=s.axis,r=o.axis,d=s.getLabels(),f=s===o,l=new Array(a);let h,g,N;for(h=0,g=a;h<g;++h)N=h+n,l[h]={[c]:f||s.parse(d[N],N),[r]:o.parse(t[N],N)};return l}parseArrayData(e,t,n,a){const{xScale:s,yScale:o}=e,c=new Array(a);let r,d,f,l;for(r=0,d=a;r<d;++r)f=r+n,l=t[f],c[r]={x:s.parse(l[0],f),y:o.parse(l[1],f)};return c}parseObjectData(e,t,n,a){const{xScale:s,yScale:o}=e,{xAxisKey:c="x",yAxisKey:r="y"}=this._parsing,d=new Array(a);let f,l,h,g;for(f=0,l=a;f<l;++f)h=f+n,g=t[h],d[f]={x:s.parse(Je(g,c),h),y:o.parse(Je(g,r),h)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){const a=this.chart,s=this._cachedMeta,o=t[e.axis],c={keys:Ec(a,!0),values:t._stacks[e.axis]._visualValues};return xs(c,o,s.index,{mode:n})}updateRangeFromParsed(e,t,n,a){const s=n[t.axis];let o=s===null?NaN:s;const c=a&&n._stacks[t.axis];a&&c&&(a.values=c,o=xs(a,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,t){const n=this._cachedMeta,a=n._parsed,s=n._sorted&&e===n.iScale,o=a.length,c=this._getOtherScale(e),r=El(t,n,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:l}=Ml(c);let h,g;function N(){g=a[h];const u=g[c.axis];return!j(g[e.axis])||f>u||l<u}for(h=0;h<o&&!(!N()&&(this.updateRangeFromParsed(d,e,g,r),s));++h);if(s){for(h=o-1;h>=0;--h)if(!N()){this.updateRangeFromParsed(d,e,g,r);break}}return d}getAllParsedValues(e){const t=this._cachedMeta._parsed,n=[];let a,s,o;for(a=0,s=t.length;a<s;++a)o=t[a][e.axis],j(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,n=t.iScale,a=t.vScale,s=this.getParsed(e);return{label:n?""+n.getLabelForValue(s[n.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=vl(M(this.options.clip,kl(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,n=this._cachedMeta,a=n.data||[],s=t.chartArea,o=[],c=this._drawStart||0,r=this._drawCount||a.length-c,d=this.options.drawActiveElementsOnTop;let f;for(n.dataset&&n.dataset.draw(e,s,c,r),f=c;f<c+r;++f){const l=a[f];l.hidden||(l.active&&d?o.push(l):l.draw(e,s))}for(f=0;f<o.length;++f)o[f].draw(e,s)}getStyle(e,t){const n=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){const a=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=Rl(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=a.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=Pl(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!t,s.mode=n,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",n){const a=t==="active",s=this._cachedDataOpts,o=e+"-"+t,c=s[o],r=this.enableOptionSharing&&ri(n);if(c)return As(c,r);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,e),l=a?[`${e}Hover`,"hover",e,""]:[e,""],h=d.getOptionScopes(this.getDataset(),f),g=Object.keys(Y.elements[e]),N=()=>this.getContext(n,a,t),u=d.resolveNamedOptions(h,g,N,l);return u.$shared&&(u.$shared=r,s[o]=Object.freeze(As(u,r))),u}_resolveAnimations(e,t,n){const a=this.chart,s=this._cachedDataOpts,o=`animation-${t}`,c=s[o];if(c)return c;let r;if(a.options.animation!==!1){const f=this.chart.config,l=f.datasetAnimationScopeKeys(this._type,t),h=f.getOptionScopes(this.getDataset(),l);r=f.createResolver(h,this.getContext(e,n,t))}const d=new Rc(a,r&&r.animations);return r&&r._cacheable&&(s[o]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||Cn(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const n=this.resolveDataElementOptions(e,t),a=this._sharedOptions,s=this.getSharedOptions(n),o=this.includeOptions(t,s)||s!==a;return this.updateSharedOptions(s,t,n),{sharedOptions:s,includeOptions:o}}updateElement(e,t,n,a){Cn(a)?Object.assign(e,n):this._resolveAnimations(t,a).update(e,n)}updateSharedOptions(e,t,n){e&&!Cn(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,a){e.active=a;const s=this.getStyle(t,a);this._resolveAnimations(t,n,a).update(e,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(e,t,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,t,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,n=this._cachedMeta.data;for(const[c,r,d]of this._syncList)this[c](r,d);this._syncList=[];const a=n.length,s=t.length,o=Math.min(s,a);o&&this.parse(0,o),s>a?this._insertElements(a,s-a,e):s<a&&this._removeElements(s,a-s)}_insertElements(e,t,n=!0){const a=this._cachedMeta,s=a.data,o=e+t;let c;const r=d=>{for(d.length+=t,c=d.length-1;c>=o;c--)d[c]=d[c-t]};for(r(s),c=e;c<o;++c)s[c]=new this.dataElementType;this._parsing&&r(a._parsed),this.parse(e,t),n&&this.updateElements(s,e,t,"reset")}updateElements(e,t,n,a){}_removeElements(e,t){const n=this._cachedMeta;if(this._parsing){const a=n._parsed.splice(e,t);n._stacked&&Kt(n,a)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,n,a]=e;this[t](n,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}V(Ve,"defaults",{}),V(Ve,"datasetElementType",null),V(Ve,"dataElementType",null);function Ql(i,e){if(!i._cache.$bar){const t=i.getMatchingVisibleMetas(e);let n=[];for(let a=0,s=t.length;a<s;a++)n=n.concat(t[a].controller.getAllParsedValues(i));i._cache.$bar=uc(n.sort((a,s)=>a-s))}return i._cache.$bar}function Kl(i){const e=i.iScale,t=Ql(e,i.type);let n=e._length,a,s,o,c;const r=()=>{o===32767||o===-32768||(ri(c)&&(n=Math.min(n,Math.abs(o-c)||n)),c=o)};for(a=0,s=t.length;a<s;++a)o=e.getPixelForValue(t[a]),r();for(c=void 0,a=0,s=e.ticks.length;a<s;++a)o=e.getPixelForTick(a),r();return n}function Ll(i,e,t,n){const a=t.barThickness;let s,o;return Q(a)?(s=e.min*t.categoryPercentage,o=t.barPercentage):(s=a*n,o=1),{chunk:s/n,ratio:o,start:e.pixels[i]-s/2}}function zl(i,e,t,n){const a=e.pixels,s=a[i];let o=i>0?a[i-1]:null,c=i<a.length-1?a[i+1]:null;const r=t.categoryPercentage;o===null&&(o=s-(c===null?e.end-e.start:c-s)),c===null&&(c=s+s-o);const d=s-(s-Math.min(o,c))/2*r;return{chunk:Math.abs(c-o)/2*r/n,ratio:t.barPercentage,start:d}}function Il(i,e,t,n){const a=t.parse(i[0],n),s=t.parse(i[1],n),o=Math.min(a,s),c=Math.max(a,s);let r=o,d=c;Math.abs(o)>Math.abs(c)&&(r=c,d=o),e[t.axis]=d,e._custom={barStart:r,barEnd:d,start:a,end:s,min:o,max:c}}function Qc(i,e,t,n){return F(i)?Il(i,e,t,n):e[t.axis]=t.parse(i,n),e}function Vs(i,e,t,n){const a=i.iScale,s=i.vScale,o=a.getLabels(),c=a===s,r=[];let d,f,l,h;for(d=t,f=t+n;d<f;++d)h=e[d],l={},l[a.axis]=c||a.parse(o[d],d),r.push(Qc(h,l,s,d));return r}function yn(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function Fl(i,e,t){return i!==0?ve(i):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function Tl(i){let e,t,n,a,s;return i.horizontal?(e=i.base>i.x,t="left",n="right"):(e=i.base<i.y,t="bottom",n="top"),e?(a="end",s="start"):(a="start",s="end"),{start:t,end:n,reverse:e,top:a,bottom:s}}function Wl(i,e,t,n){let a=e.borderSkipped;const s={};if(!a){i.borderSkipped=s;return}if(a===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:c,reverse:r,top:d,bottom:f}=Tl(i);a==="middle"&&t&&(i.enableBorderRadius=!0,(t._top||0)===n?a=d:(t._bottom||0)===n?a=f:(s[Cs(f,o,c,r)]=!0,a=d)),s[Cs(a,o,c,r)]=!0,i.borderSkipped=s}function Cs(i,e,t,n){return n?(i=Hl(i,e,t),i=ys(i,t,e)):i=ys(i,e,t),i}function Hl(i,e,t){return i===e?t:i===t?e:i}function ys(i,e,t){return i==="start"?e:i==="end"?t:i}function jl(i,{inflateAmount:e},t){i.inflateAmount=e==="auto"?t===1?.33:0:e}class Ei extends Ve{parsePrimitiveData(e,t,n,a){return Vs(e,t,n,a)}parseArrayData(e,t,n,a){return Vs(e,t,n,a)}parseObjectData(e,t,n,a){const{iScale:s,vScale:o}=e,{xAxisKey:c="x",yAxisKey:r="y"}=this._parsing,d=s.axis==="x"?c:r,f=o.axis==="x"?c:r,l=[];let h,g,N,u;for(h=n,g=n+a;h<g;++h)u=t[h],N={},N[s.axis]=s.parse(Je(u,d),h),l.push(Qc(Je(u,f),N,o,h));return l}updateRangeFromParsed(e,t,n,a){super.updateRangeFromParsed(e,t,n,a);const s=n._custom;s&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:n,vScale:a}=t,s=this.getParsed(e),o=s._custom,c=yn(o)?"["+o.start+", "+o.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+n.getLabelForValue(s[n.axis]),value:c}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,a){const s=a==="reset",{index:o,_cachedMeta:{vScale:c}}=this,r=c.getBasePixel(),d=c.isHorizontal(),f=this._getRuler(),{sharedOptions:l,includeOptions:h}=this._getSharedOptions(t,a);for(let g=t;g<t+n;g++){const N=this.getParsed(g),u=s||Q(N[c.axis])?{base:r,head:r}:this._calculateBarValuePixels(g),b=this._calculateBarIndexPixels(g,f),m=(N._stacks||{})[c.axis],B={horizontal:d,base:u.base,enableBorderRadius:!m||yn(N._custom)||o===m._top||o===m._bottom,x:d?u.head:b.center,y:d?b.center:u.head,height:d?b.size:Math.abs(u.size),width:d?Math.abs(u.size):b.size};h&&(B.options=l||this.resolveDataElementOptions(g,e[g].active?"active":a));const D=B.options||e[g].options;Wl(B,D,m,o),jl(B,D,f.ratio),this.updateElement(e[g],g,B,a)}}_getStacks(e,t){const{iScale:n}=this._cachedMeta,a=n.getMatchingVisibleMetas(this._type).filter(r=>r.controller.options.grouped),s=n.options.stacked,o=[],c=r=>{const d=r.controller.getParsed(t),f=d&&d[r.vScale.axis];if(Q(f)||isNaN(f))return!0};for(const r of a)if(!(t!==void 0&&c(r))&&((s===!1||o.indexOf(r.stack)===-1||s===void 0&&r.stack===void 0)&&o.push(r.stack),r.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,t,n){const a=this._getStacks(e,n),s=t!==void 0?a.indexOf(t):-1;return s===-1?a.length-1:s}_getRuler(){const e=this.options,t=this._cachedMeta,n=t.iScale,a=[];let s,o;for(s=0,o=t.data.length;s<o;++s)a.push(n.getPixelForValue(this.getParsed(s)[n.axis],s));const c=e.barThickness;return{min:c||Kl(t),pixels:a,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:c?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:n,index:a},options:{base:s,minBarLength:o}}=this,c=s||0,r=this.getParsed(e),d=r._custom,f=yn(d);let l=r[t.axis],h=0,g=n?this.applyStack(t,r,n):l,N,u;g!==l&&(h=g-l,g=l),f&&(l=d.barStart,g=d.barEnd-d.barStart,l!==0&&ve(l)!==ve(d.barEnd)&&(h=0),h+=l);const b=!Q(s)&&!f?s:h;let m=t.getPixelForValue(b);if(this.chart.getDataVisibility(e)?N=t.getPixelForValue(h+g):N=m,u=N-m,Math.abs(u)<o){u=Fl(u,t,c)*o,l===c&&(m-=u/2);const B=t.getPixelForDecimal(0),D=t.getPixelForDecimal(1),O=Math.min(B,D),x=Math.max(B,D);m=Math.max(Math.min(m,x),O),N=m+u,n&&!f&&(r._stacks[t.axis]._visualValues[a]=t.getValueForPixel(N)-t.getValueForPixel(m))}if(m===t.getPixelForValue(c)){const B=ve(u)*t.getLineWidthForValue(c)/2;m+=B,u-=B}return{size:u,base:m,head:N,center:N+u/2}}_calculateBarIndexPixels(e,t){const n=t.scale,a=this.options,s=a.skipNull,o=M(a.maxBarThickness,1/0);let c,r;if(t.grouped){const d=s?this._getStackCount(e):t.stackCount,f=a.barThickness==="flex"?zl(e,t,a,d):Ll(e,t,a,d),l=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);c=f.start+f.chunk*l+f.chunk/2,r=Math.min(o,f.chunk*f.ratio)}else c=n.getPixelForValue(this.getParsed(e)[n.axis],e),r=Math.min(o,t.min*t.ratio);return{base:c-r/2,head:c+r/2,center:c,size:r}}draw(){const e=this._cachedMeta,t=e.vScale,n=e.data,a=n.length;let s=0;for(;s<a;++s)this.getParsed(s)[t.axis]!==null&&n[s].draw(this._ctx)}}V(Ei,"id","bar"),V(Ei,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),V(Ei,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Qi extends Ve{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,a){const s=super.parsePrimitiveData(e,t,n,a);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+n).radius;return s}parseArrayData(e,t,n,a){const s=super.parseArrayData(e,t,n,a);for(let o=0;o<s.length;o++){const c=t[n+o];s[o]._custom=M(c[2],this.resolveDataElementOptions(o+n).radius)}return s}parseObjectData(e,t,n,a){const s=super.parseObjectData(e,t,n,a);for(let o=0;o<s.length;o++){const c=t[n+o];s[o]._custom=M(c&&c.r&&+c.r,this.resolveDataElementOptions(o+n).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),c=a.getLabelForValue(o.x),r=s.getLabelForValue(o.y),d=o._custom;return{label:n[e]||"",value:"("+c+", "+r+(d?", "+d:"")+")"}}update(e){const t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c}=this._cachedMeta,{sharedOptions:r,includeOptions:d}=this._getSharedOptions(t,a),f=o.axis,l=c.axis;for(let h=t;h<t+n;h++){const g=e[h],N=!s&&this.getParsed(h),u={},b=u[f]=s?o.getPixelForDecimal(.5):o.getPixelForValue(N[f]),m=u[l]=s?c.getBasePixel():c.getPixelForValue(N[l]);u.skip=isNaN(b)||isNaN(m),d&&(u.options=r||this.resolveDataElementOptions(h,g.active?"active":a),s&&(u.options.radius=0)),this.updateElement(g,h,u,a)}}resolveDataElementOptions(e,t){const n=this.getParsed(e);let a=super.resolveDataElementOptions(e,t);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return t!=="active"&&(a.radius=0),a.radius+=M(n&&n._custom,s),a}}V(Qi,"id","bubble"),V(Qi,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),V(Qi,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Ul(i,e,t){let n=1,a=1,s=0,o=0;if(e<T){const c=i,r=c+e,d=Math.cos(c),f=Math.sin(c),l=Math.cos(r),h=Math.sin(r),g=(D,O,x)=>di(D,c,r,!0)?1:Math.max(O,O*t,x,x*t),N=(D,O,x)=>di(D,c,r,!0)?-1:Math.min(O,O*t,x,x*t),u=g(0,d,l),b=g(U,f,h),m=N(H,d,l),B=N(H+U,f,h);n=(u-m)/2,a=(b-B)/2,s=-(u+m)/2,o=-(b+B)/2}return{ratioX:n,ratioY:a,offsetX:s,offsetY:o}}class lt extends Ve{constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){const n=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=n;else{let s=r=>+n[r];if(P(n[e])){const{key:r="value"}=this._parsing;s=d=>+Je(n[d],r)}let o,c;for(o=e,c=e+t;o<c;++o)a._parsed[o]=s(o)}}_getRotation(){return Ae(this.options.rotation-90)}_getCircumference(){return Ae(this.options.circumference)}_getRotationExtents(){let e=T,t=-T;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const a=this.chart.getDatasetMeta(n).controller,s=a._getRotation(),o=a._getCircumference();e=Math.min(e,s),t=Math.max(t,s+o)}return{rotation:e,circumference:t-e}}update(e){const t=this.chart,{chartArea:n}=t,a=this._cachedMeta,s=a.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,c=Math.max((Math.min(n.width,n.height)-o)/2,0),r=Math.min(c4(this.options.cutout,c),1),d=this._getRingWeight(this.index),{circumference:f,rotation:l}=this._getRotationExtents(),{ratioX:h,ratioY:g,offsetX:N,offsetY:u}=Ul(l,f,r),b=(n.width-o)/h,m=(n.height-o)/g,B=Math.max(Math.min(b,m)/2,0),D=fc(this.options.radius,B),O=Math.max(D*r,0),x=(D-O)/this._getVisibleDatasetWeightTotal();this.offsetX=N*D,this.offsetY=u*D,a.total=this.calculateTotal(),this.outerRadius=D-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*d,0),this.updateElements(s,0,s.length,e)}_circumference(e,t){const n=this.options,a=this._cachedMeta,s=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*s/T)}updateElements(e,t,n,a){const s=a==="reset",o=this.chart,c=o.chartArea,d=o.options.animation,f=(c.left+c.right)/2,l=(c.top+c.bottom)/2,h=s&&d.animateScale,g=h?0:this.innerRadius,N=h?0:this.outerRadius,{sharedOptions:u,includeOptions:b}=this._getSharedOptions(t,a);let m=this._getRotation(),B;for(B=0;B<t;++B)m+=this._circumference(B,s);for(B=t;B<t+n;++B){const D=this._circumference(B,s),O=e[B],x={x:f+this.offsetX,y:l+this.offsetY,startAngle:m,endAngle:m+D,circumference:D,outerRadius:N,innerRadius:g};b&&(x.options=u||this.resolveDataElementOptions(B,O.active?"active":a)),m+=D,this.updateElement(O,B,x,a)}}calculateTotal(){const e=this._cachedMeta,t=e.data;let n=0,a;for(a=0;a<t.length;a++){const s=e._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!t[a].hidden&&(n+=Math.abs(s))}return n}calculateCircumference(e){const t=this._cachedMeta.total;return t>0&&!isNaN(e)?T*(Math.abs(e)/t):0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=mi(t._parsed[e],n.options.locale);return{label:a[e]||"",value:s}}getMaxBorderWidth(e){let t=0;const n=this.chart;let a,s,o,c,r;if(!e){for(a=0,s=n.data.datasets.length;a<s;++a)if(n.isDatasetVisible(a)){o=n.getDatasetMeta(a),e=o.data,c=o.controller;break}}if(!e)return 0;for(a=0,s=e.length;a<s;++a)r=c.resolveDataElementOptions(a),r.borderAlign!=="inner"&&(t=Math.max(t,r.borderWidth||0,r.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,a=e.length;n<a;++n){const s=this.resolveDataElementOptions(n);t=Math.max(t,s.offset||0,s.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(M(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}V(lt,"id","doughnut"),V(lt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),V(lt,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),V(lt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,o)=>{const r=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}});class Ki extends Ve{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:n,data:a=[],_dataset:s}=t,o=this.chart._animationsDisabled;let{start:c,count:r}=mc(t,a,o);this._drawStart=c,this._drawCount=r,xc(t)&&(c=0,r=a.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!s._decimated,n.points=a;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:d},e),this.updateElements(a,c,r,e)}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c,_stacked:r,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:l}=this._getSharedOptions(t,a),h=o.axis,g=c.axis,{spanGaps:N,segment:u}=this.options,b=St(N)?N:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||a==="none",B=t+n,D=e.length;let O=t>0&&this.getParsed(t-1);for(let x=0;x<D;++x){const y=e[x],C=m?y:{};if(x<t||x>=B){C.skip=!0;continue}const A=this.getParsed(x),S=Q(A[g]),k=C[h]=o.getPixelForValue(A[h],x),v=C[g]=s||S?c.getBasePixel():c.getPixelForValue(r?this.applyStack(c,A,r):A[g],x);C.skip=isNaN(k)||isNaN(v)||S,C.stop=x>0&&Math.abs(A[h]-O[h])>b,u&&(C.parsed=A,C.raw=d.data[x]),l&&(C.options=f||this.resolveDataElementOptions(x,y.active?"active":a)),m||this.updateElement(y,x,C,a),O=A}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,a=e.data||[];if(!a.length)return n;const s=a[0].size(this.resolveDataElementOptions(0)),o=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(n,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}V(Ki,"id","line"),V(Ki,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),V(Ki,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ti extends Ve{constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const t=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=mi(t._parsed[e].r,n.options.locale);return{label:a[e]||"",value:s}}parseObjectData(e,t,n,a){return Sc.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){const e=this._cachedMeta,t={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((n,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<t.min&&(t.min=s),s>t.max&&(t.max=s))}),t}_updateRadius(){const e=this.chart,t=e.chartArea,n=e.options,a=Math.min(t.right-t.left,t.bottom-t.top),s=Math.max(a/2,0),o=Math.max(n.cutoutPercentage?s/100*n.cutoutPercentage:1,0),c=(s-o)/e.getVisibleDatasetCount();this.outerRadius=s-c*this.index,this.innerRadius=this.outerRadius-c}updateElements(e,t,n,a){const s=a==="reset",o=this.chart,r=o.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,l=d.yCenter,h=d.getIndexAngle(0)-.5*H;let g=h,N;const u=360/this.countVisibleElements();for(N=0;N<t;++N)g+=this._computeAngle(N,a,u);for(N=t;N<t+n;N++){const b=e[N];let m=g,B=g+this._computeAngle(N,a,u),D=o.getDataVisibility(N)?d.getDistanceFromCenterForValue(this.getParsed(N).r):0;g=B,s&&(r.animateScale&&(D=0),r.animateRotate&&(m=B=h));const O={x:f,y:l,innerRadius:0,outerRadius:D,startAngle:m,endAngle:B,options:this.resolveDataElementOptions(N,b.active?"active":a)};this.updateElement(b,N,O,a)}}countVisibleElements(){const e=this._cachedMeta;let t=0;return e.data.forEach((n,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?Ae(this.resolveDataElementOptions(e,t).angle||n):0}}V(ti,"id","polarArea"),V(ti,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),V(ti,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return t.labels.map((s,o)=>{const r=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Wn extends lt{}V(Wn,"id","pie"),V(Wn,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Li extends Ve{getLabelAndValue(e){const t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:""+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,a){return Sc.bind(this)(e,t,n,a)}update(e){const t=this._cachedMeta,n=t.dataset,a=t.data||[],s=t.iScale.getLabels();if(n.points=a,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const c={_loop:!0,_fullLoop:s.length===a.length,options:o};this.updateElement(n,void 0,c,e)}this.updateElements(a,0,a.length,e)}updateElements(e,t,n,a){const s=this._cachedMeta.rScale,o=a==="reset";for(let c=t;c<t+n;c++){const r=e[c],d=this.resolveDataElementOptions(c,r.active?"active":a),f=s.getPointPositionForValue(c,this.getParsed(c).r),l=o?s.xCenter:f.x,h=o?s.yCenter:f.y,g={x:l,y:h,angle:f.angle,skip:isNaN(l)||isNaN(h),options:d};this.updateElement(r,c,g,a)}}}V(Li,"id","radar"),V(Li,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),V(Li,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class zi extends Ve{getLabelAndValue(e){const t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),c=a.getLabelForValue(o.x),r=s.getLabelForValue(o.y);return{label:n[e]||"",value:"("+c+", "+r+")"}}update(e){const t=this._cachedMeta,{data:n=[]}=t,a=this.chart._animationsDisabled;let{start:s,count:o}=mc(t,n,a);if(this._drawStart=s,this._drawCount=o,xc(t)&&(s=0,o=n.length),this.options.showLine){const{dataset:c,_dataset:r}=t;c._chart=this.chart,c._datasetIndex=this.index,c._decimated=!!r._decimated,c.points=n;const d=this.resolveDatasetElementOptions(e);d.segment=this.options.segment,this.updateElement(c,void 0,{animated:!a,options:d},e)}this.updateElements(n,s,o,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,t,n,a){const s=a==="reset",{iScale:o,vScale:c,_stacked:r,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(t,a),l=this.getSharedOptions(f),h=this.includeOptions(a,l),g=o.axis,N=c.axis,{spanGaps:u,segment:b}=this.options,m=St(u)?u:Number.POSITIVE_INFINITY,B=this.chart._animationsDisabled||s||a==="none";let D=t>0&&this.getParsed(t-1);for(let O=t;O<t+n;++O){const x=e[O],y=this.getParsed(O),C=B?x:{},A=Q(y[N]),S=C[g]=o.getPixelForValue(y[g],O),k=C[N]=s||A?c.getBasePixel():c.getPixelForValue(r?this.applyStack(c,y,r):y[N],O);C.skip=isNaN(S)||isNaN(k)||A,C.stop=O>0&&Math.abs(y[g]-D[g])>m,b&&(C.parsed=y,C.raw=d.data[O]),h&&(C.options=l||this.resolveDataElementOptions(O,x.active?"active":a)),B||this.updateElement(x,O,C,a),D=y}this.updateSharedOptions(l,a,f)}getMaxOverflow(){const e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let c=0;for(let r=t.length-1;r>=0;--r)c=Math.max(c,t[r].size(this.resolveDataElementOptions(r))/2);return c>0&&c}const n=e.dataset,a=n.options&&n.options.borderWidth||0;if(!t.length)return a;const s=t[0].size(this.resolveDataElementOptions(0)),o=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(a,s,o)/2}}V(zi,"id","scatter"),V(zi,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),V(zi,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Yl=Object.freeze({__proto__:null,BarController:Ei,BubbleController:Qi,DoughnutController:lt,LineController:Ki,PieController:Wn,PolarAreaController:ti,RadarController:Li,ScatterController:zi});function ot(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Sa{constructor(e){V(this,"options");this.options=e||{}}static override(e){Object.assign(Sa.prototype,e)}init(){}formats(){return ot()}parse(){return ot()}format(){return ot()}add(){return ot()}diff(){return ot()}startOf(){return ot()}endOf(){return ot()}}var Zl={_date:Sa};function ql(i,e,t,n){const{controller:a,data:s,_sorted:o}=i,c=a._cachedMeta.iScale;if(c&&e===c.axis&&e!=="r"&&o&&s.length){const r=c._reversePixels?x4:Ke;if(n){if(a._sharedOptions){const d=s[0],f=typeof d.getRange=="function"&&d.getRange(e);if(f){const l=r(s,e,t-f),h=r(s,e,t+f);return{lo:l.lo,hi:h.hi}}}}else return r(s,e,t)}return{lo:0,hi:s.length-1}}function xi(i,e,t,n,a){const s=i.getSortedVisibleDatasetMetas(),o=t[e];for(let c=0,r=s.length;c<r;++c){const{index:d,data:f}=s[c],{lo:l,hi:h}=ql(s[c],e,o,a);for(let g=l;g<=h;++g){const N=f[g];N.skip||n(N,d,g)}}}function Xl(i){const e=i.indexOf("x")!==-1,t=i.indexOf("y")!==-1;return function(n,a){const s=e?Math.abs(n.x-a.x):0,o=t?Math.abs(n.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Sn(i,e,t,n,a){const s=[];return!a&&!i.isPointInArea(e)||xi(i,t,e,function(c,r,d){!a&&!Le(c,i.chartArea,0)||c.inRange(e.x,e.y,n)&&s.push({element:c,datasetIndex:r,index:d})},!0),s}function Jl(i,e,t,n){let a=[];function s(o,c,r){const{startAngle:d,endAngle:f}=o.getProps(["startAngle","endAngle"],n),{angle:l}=Nc(o,{x:e.x,y:e.y});di(l,d,f)&&a.push({element:o,datasetIndex:c,index:r})}return xi(i,t,e,s),a}function $l(i,e,t,n,a,s){let o=[];const c=Xl(t);let r=Number.POSITIVE_INFINITY;function d(f,l,h){const g=f.inRange(e.x,e.y,a);if(n&&!g)return;const N=f.getCenterPoint(a);if(!(!!s||i.isPointInArea(N))&&!g)return;const b=c(e,N);b<r?(o=[{element:f,datasetIndex:l,index:h}],r=b):b===r&&o.push({element:f,datasetIndex:l,index:h})}return xi(i,t,e,d),o}function kn(i,e,t,n,a,s){return!s&&!i.isPointInArea(e)?[]:t==="r"&&!n?Jl(i,e,t,a):$l(i,e,t,n,a,s)}function Ss(i,e,t,n,a){const s=[],o=t==="x"?"inXRange":"inYRange";let c=!1;return xi(i,t,e,(r,d,f)=>{r[o](e[t],a)&&(s.push({element:r,datasetIndex:d,index:f}),c=c||r.inRange(e.x,e.y,a))}),n&&!c?[]:s}var e3={evaluateInteractionItems:xi,modes:{index(i,e,t,n){const a=dt(e,i),s=t.axis||"x",o=t.includeInvisible||!1,c=t.intersect?Sn(i,a,s,n,o):kn(i,a,s,!1,n,o),r=[];return c.length?(i.getSortedVisibleDatasetMetas().forEach(d=>{const f=c[0].index,l=d.data[f];l&&!l.skip&&r.push({element:l,datasetIndex:d.index,index:f})}),r):[]},dataset(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;let c=t.intersect?Sn(i,a,s,n,o):kn(i,a,s,!1,n,o);if(c.length>0){const r=c[0].datasetIndex,d=i.getDatasetMeta(r).data;c=[];for(let f=0;f<d.length;++f)c.push({element:d[f],datasetIndex:r,index:f})}return c},point(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;return Sn(i,a,s,n,o)},nearest(i,e,t,n){const a=dt(e,i),s=t.axis||"xy",o=t.includeInvisible||!1;return kn(i,a,s,t.intersect,n,o)},x(i,e,t,n){const a=dt(e,i);return Ss(i,a,"x",t.intersect,n)},y(i,e,t,n){const a=dt(e,i);return Ss(i,a,"y",t.intersect,n)}}};const Kc=["left","top","right","bottom"];function Lt(i,e){return i.filter(t=>t.pos===e)}function ks(i,e){return i.filter(t=>Kc.indexOf(t.pos)===-1&&t.box.axis===e)}function zt(i,e){return i.sort((t,n)=>{const a=e?n:t,s=e?t:n;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function t3(i){const e=[];let t,n,a,s,o,c;for(t=0,n=(i||[]).length;t<n;++t)a=i[t],{position:s,options:{stack:o,stackWeight:c=1}}=a,e.push({index:t,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:o&&s+o,stackWeight:c});return e}function i3(i){const e={};for(const t of i){const{stack:n,pos:a,stackWeight:s}=t;if(!n||!Kc.includes(a))continue;const o=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function n3(i,e){const t=i3(i),{vBoxMaxWidth:n,hBoxMaxHeight:a}=e;let s,o,c;for(s=0,o=i.length;s<o;++s){c=i[s];const{fullSize:r}=c.box,d=t[c.stack],f=d&&c.stackWeight/d.weight;c.horizontal?(c.width=f?f*n:r&&e.availableWidth,c.height=a):(c.width=n,c.height=f?f*a:r&&e.availableHeight)}return t}function a3(i){const e=t3(i),t=zt(e.filter(d=>d.box.fullSize),!0),n=zt(Lt(e,"left"),!0),a=zt(Lt(e,"right")),s=zt(Lt(e,"top"),!0),o=zt(Lt(e,"bottom")),c=ks(e,"x"),r=ks(e,"y");return{fullSize:t,leftAndTop:n.concat(s),rightAndBottom:a.concat(r).concat(o).concat(c),chartArea:Lt(e,"chartArea"),vertical:n.concat(a).concat(r),horizontal:s.concat(o).concat(c)}}function vs(i,e,t,n){return Math.max(i[t],e[t])+Math.max(i[n],e[n])}function Lc(i,e){i.top=Math.max(i.top,e.top),i.left=Math.max(i.left,e.left),i.bottom=Math.max(i.bottom,e.bottom),i.right=Math.max(i.right,e.right)}function s3(i,e,t,n){const{pos:a,box:s}=t,o=i.maxPadding;if(!P(a)){t.size&&(i[a]-=t.size);const l=n[t.stack]||{size:0,count:1};l.size=Math.max(l.size,t.horizontal?s.height:s.width),t.size=l.size/l.count,i[a]+=t.size}s.getPadding&&Lc(o,s.getPadding());const c=Math.max(0,e.outerWidth-vs(o,i,"left","right")),r=Math.max(0,e.outerHeight-vs(o,i,"top","bottom")),d=c!==i.w,f=r!==i.h;return i.w=c,i.h=r,t.horizontal?{same:d,other:f}:{same:f,other:d}}function o3(i){const e=i.maxPadding;function t(n){const a=Math.max(e[n]-i[n],0);return i[n]+=a,a}i.y+=t("top"),i.x+=t("left"),t("right"),t("bottom")}function c3(i,e){const t=e.maxPadding;function n(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(o=>{s[o]=Math.max(e[o],t[o])}),s}return n(i?["left","right"]:["top","bottom"])}function Ut(i,e,t,n){const a=[];let s,o,c,r,d,f;for(s=0,o=i.length,d=0;s<o;++s){c=i[s],r=c.box,r.update(c.width||e.w,c.height||e.h,c3(c.horizontal,e));const{same:l,other:h}=s3(e,t,c,n);d|=l&&a.length,f=f||h,r.fullSize||a.push(c)}return d&&Ut(a,e,t,n)||f}function ki(i,e,t,n,a){i.top=t,i.left=e,i.right=e+n,i.bottom=t+a,i.width=n,i.height=a}function Gs(i,e,t,n){const a=t.padding;let{x:s,y:o}=e;for(const c of i){const r=c.box,d=n[c.stack]||{count:1,placed:0,weight:1},f=c.stackWeight/d.weight||1;if(c.horizontal){const l=e.w*f,h=d.size||r.height;ri(d.start)&&(o=d.start),r.fullSize?ki(r,a.left,o,t.outerWidth-a.right-a.left,h):ki(r,e.left+d.placed,o,l,h),d.start=o,d.placed+=l,o=r.bottom}else{const l=e.h*f,h=d.size||r.width;ri(d.start)&&(s=d.start),r.fullSize?ki(r,s,a.top,h,t.outerHeight-a.bottom-a.top):ki(r,s,e.top+d.placed,h,l),d.start=s,d.placed+=l,s=r.right}}e.x=s,e.y=o}var oe={addBox(i,e){i.boxes||(i.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},i.boxes.push(e)},removeBox(i,e){const t=i.boxes?i.boxes.indexOf(e):-1;t!==-1&&i.boxes.splice(t,1)},configure(i,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(i,e,t,n){if(!i)return;const a=ce(i.options.layout.padding),s=Math.max(e-a.width,0),o=Math.max(t-a.height,0),c=a3(i.boxes),r=c.vertical,d=c.horizontal;L(i.boxes,u=>{typeof u.beforeLayout=="function"&&u.beforeLayout()});const f=r.reduce((u,b)=>b.box.options&&b.box.options.display===!1?u:u+1,0)||1,l=Object.freeze({outerWidth:e,outerHeight:t,padding:a,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/f,hBoxMaxHeight:o/2}),h=Object.assign({},a);Lc(h,ce(n));const g=Object.assign({maxPadding:h,w:s,h:o,x:a.left,y:a.top},a),N=n3(r.concat(d),l);Ut(c.fullSize,g,l,N),Ut(r,g,l,N),Ut(d,g,l,N)&&Ut(r,g,l,N),o3(g),Gs(c.leftAndTop,g,l,N),g.x+=g.w,g.y+=g.h,Gs(c.rightAndBottom,g,l,N),i.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},L(c.chartArea,u=>{const b=u.box;Object.assign(b,i.chartArea),b.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class zc{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,a){return t=Math.max(0,t||e.width),n=n||e.height,{width:t,height:Math.max(0,a?Math.floor(t/a):n)}}isAttached(e){return!0}updateConfig(e){}}class r3 extends zc{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ii="$chartjs",d3={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ws=i=>i===null||i==="";function f3(i,e){const t=i.style,n=i.getAttribute("height"),a=i.getAttribute("width");if(i[Ii]={initial:{height:n,width:a,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",ws(a)){const s=Ns(i,"width");s!==void 0&&(i.width=s)}if(ws(n))if(i.style.height==="")i.height=i.width/(e||2);else{const s=Ns(i,"height");s!==void 0&&(i.height=s)}return i}const Ic=hl?{passive:!0}:!1;function l3(i,e,t){i.addEventListener(e,t,Ic)}function h3(i,e,t){i.canvas.removeEventListener(e,t,Ic)}function N3(i,e){const t=d3[i.type]||i.type,{x:n,y:a}=dt(i,e);return{type:t,chart:e,native:i,x:n!==void 0?n:null,y:a!==void 0?a:null}}function an(i,e){for(const t of i)if(t===e||t.contains(e))return!0}function g3(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let o=!1;for(const c of s)o=o||an(c.addedNodes,n),o=o&&!an(c.removedNodes,n);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}function u3(i,e,t){const n=i.canvas,a=new MutationObserver(s=>{let o=!1;for(const c of s)o=o||an(c.removedNodes,n),o=o&&!an(c.addedNodes,n);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}const li=new Map;let Ms=0;function Fc(){const i=window.devicePixelRatio;i!==Ms&&(Ms=i,li.forEach((e,t)=>{t.currentDevicePixelRatio!==i&&e()}))}function b3(i,e){li.size||window.addEventListener("resize",Fc),li.set(i,e)}function B3(i){li.delete(i),li.size||window.removeEventListener("resize",Fc)}function m3(i,e,t){const n=i.canvas,a=n&&ya(n);if(!a)return;const s=Bc((c,r)=>{const d=a.clientWidth;t(c,r),d<a.clientWidth&&t()},window),o=new ResizeObserver(c=>{const r=c[0],d=r.contentRect.width,f=r.contentRect.height;d===0&&f===0||s(d,f)});return o.observe(a),b3(i,s),o}function vn(i,e,t){t&&t.disconnect(),e==="resize"&&B3(i)}function x3(i,e,t){const n=i.canvas,a=Bc(s=>{i.ctx!==null&&t(N3(s,i))},i);return l3(n,e,a),a}class p3 extends zc{acquireContext(e,t){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(f3(e,t),n):null}releaseContext(e){const t=e.canvas;if(!t[Ii])return!1;const n=t[Ii].initial;["height","width"].forEach(s=>{const o=n[s];Q(o)?t.removeAttribute(s):t.setAttribute(s,o)});const a=n.style||{};return Object.keys(a).forEach(s=>{t.style[s]=a[s]}),t.width=t.width,delete t[Ii],!0}addEventListener(e,t,n){this.removeEventListener(e,t);const a=e.$proxies||(e.$proxies={}),o={attach:g3,detach:u3,resize:m3}[t]||x3;a[t]=o(e,t,n)}removeEventListener(e,t){const n=e.$proxies||(e.$proxies={}),a=n[t];if(!a)return;({attach:vn,detach:vn,resize:vn}[t]||h3)(e,t,a),n[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,a){return ll(e,t,n,a)}isAttached(e){const t=ya(e);return!!(t&&t.isConnected)}}function D3(i){return!vc()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?r3:p3}class Ce{constructor(){V(this,"x");V(this,"y");V(this,"active",!1);V(this,"options");V(this,"$animations")}tooltipPosition(e){const{x:t,y:n}=this.getProps(["x","y"],e);return{x:t,y:n}}hasValue(){return St(this.x)&&St(this.y)}getProps(e,t){const n=this.$animations;if(!t||!n)return this;const a={};return e.forEach(s=>{a[s]=n[s]&&n[s].active()?n[s]._to:this[s]}),a}}V(Ce,"defaults",{}),V(Ce,"defaultRoutes");function O3(i,e){const t=i.options.ticks,n=A3(i),a=Math.min(t.maxTicksLimit||n,n),s=t.major.enabled?C3(e):[],o=s.length,c=s[0],r=s[o-1],d=[];if(o>a)return y3(e,d,s,o/a),d;const f=V3(s,e,a);if(o>0){let l,h;const g=o>1?Math.round((r-c)/(o-1)):null;for(vi(e,d,f,Q(g)?0:c-g,c),l=0,h=o-1;l<h;l++)vi(e,d,f,s[l],s[l+1]);return vi(e,d,f,r,Q(g)?e.length:r+g),d}return vi(e,d,f),d}function A3(i){const e=i.options.offset,t=i._tickSize(),n=i._length/t+(e?0:1),a=i._maxLength/t;return Math.floor(Math.min(n,a))}function V3(i,e,t){const n=S3(i),a=e.length/t;if(!n)return Math.max(a,1);const s=u4(n);for(let o=0,c=s.length-1;o<c;o++){const r=s[o];if(r>a)return r}return Math.max(a,1)}function C3(i){const e=[];let t,n;for(t=0,n=i.length;t<n;t++)i[t].major&&e.push(t);return e}function y3(i,e,t,n){let a=0,s=t[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===s&&(e.push(i[o]),a++,s=t[a*n])}function vi(i,e,t,n,a){const s=M(n,0),o=Math.min(M(a,i.length),i.length);let c=0,r,d,f;for(t=Math.ceil(t),a&&(r=a-n,t=r/Math.floor(r/t)),f=s;f<0;)c++,f=Math.round(s+c*t);for(d=Math.max(s,0);d<o;d++)d===f&&(e.push(i[d]),c++,f=Math.round(s+c*t))}function S3(i){const e=i.length;let t,n;if(e<2)return!1;for(n=i[0],t=1;t<e;++t)if(i[t]-i[t-1]!==n)return!1;return n}const k3=i=>i==="left"?"right":i==="right"?"left":i,_s=(i,e,t)=>e==="top"||e==="left"?i[e]+t:i[e]-t,Ps=(i,e)=>Math.min(e||i,i);function Rs(i,e){const t=[],n=i.length/e,a=i.length;let s=0;for(;s<a;s+=n)t.push(i[Math.floor(s)]);return t}function v3(i,e,t){const n=i.ticks.length,a=Math.min(e,n-1),s=i._startPixel,o=i._endPixel,c=1e-6;let r=i.getPixelForTick(a),d;if(!(t&&(n===1?d=Math.max(r-s,o-r):e===0?d=(i.getPixelForTick(1)-r)/2:d=(r-i.getPixelForTick(a-1))/2,r+=a<e?d:-d,r<s-c||r>o+c)))return r}function G3(i,e){L(i,t=>{const n=t.gc,a=n.length/2;let s;if(a>e){for(s=0;s<a;++s)delete t.data[n[s]];n.splice(0,a)}})}function It(i){return i.drawTicks?i.tickLength:0}function Es(i,e){if(!i.display)return 0;const t=X(i.font,e),n=ce(i.padding);return(F(i.text)?i.text.length:1)*t.lineHeight+n.height}function w3(i,e){return nt(i,{scale:e,type:"scale"})}function M3(i,e,t){return nt(i,{tick:t,index:e,type:"tick"})}function _3(i,e,t){let n=pa(i);return(t&&e!=="right"||!t&&e==="right")&&(n=k3(n)),n}function P3(i,e,t,n){const{top:a,left:s,bottom:o,right:c,chart:r}=i,{chartArea:d,scales:f}=r;let l=0,h,g,N;const u=o-a,b=c-s;if(i.isHorizontal()){if(g=se(n,s,c),P(t)){const m=Object.keys(t)[0],B=t[m];N=f[m].getPixelForValue(B)+u-e}else t==="center"?N=(d.bottom+d.top)/2+u-e:N=_s(i,t,e);h=c-s}else{if(P(t)){const m=Object.keys(t)[0],B=t[m];g=f[m].getPixelForValue(B)-b+e}else t==="center"?g=(d.left+d.right)/2-b+e:g=_s(i,t,e);N=se(n,o,a),l=t==="left"?-U:U}return{titleX:g,titleY:N,maxWidth:h,rotation:l}}class pt extends Ce{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:a}=this;return e=ue(e,Number.POSITIVE_INFINITY),t=ue(t,Number.NEGATIVE_INFINITY),n=ue(n,Number.POSITIVE_INFINITY),a=ue(a,Number.NEGATIVE_INFINITY),{min:ue(e,n),max:ue(t,a),minDefined:j(e),maxDefined:j(t)}}getMinMax(e){let{min:t,max:n,minDefined:a,maxDefined:s}=this.getUserBounds(),o;if(a&&s)return{min:t,max:n};const c=this.getMatchingVisibleMetas();for(let r=0,d=c.length;r<d;++r)o=c[r].controller.getMinMax(this,e),a||(t=Math.min(t,o.min)),s||(n=Math.max(n,o.max));return t=s&&t>n?n:t,n=a&&t>n?t:n,{min:ue(t,ue(n,t)),max:ue(n,ue(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){I(this.options.beforeUpdate,[this])}update(e,t,n){const{beginAtZero:a,grace:s,ticks:o}=this.options,c=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=T4(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=c<this.ticks.length;this._convertTicksToLabels(r?Rs(this.ticks,c):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=O3(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){I(this.options.afterUpdate,[this])}beforeSetDimensions(){I(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){I(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),I(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){I(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let n,a,s;for(n=0,a=e.length;n<a;n++)s=e[n],s.label=I(t.callback,[s.value,n,e],this)}afterTickToLabelConversion(){I(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){I(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,n=Ps(this.ticks.length,e.ticks.maxTicksLimit),a=t.minRotation||0,s=t.maxRotation;let o=a,c,r,d;if(!this._isVisible()||!t.display||a>=s||n<=1||!this.isHorizontal()){this.labelRotation=a;return}const f=this._getLabelSizes(),l=f.widest.width,h=f.highest.height,g=ee(this.chart.width-l,0,this.maxWidth);c=e.offset?this.maxWidth/n:g/(n-1),l+6>c&&(c=g/(n-(e.offset?.5:1)),r=this.maxHeight-It(e.grid)-t.padding-Es(e.title,this.chart.options.font),d=Math.sqrt(l*l+h*h),o=ma(Math.min(Math.asin(ee((f.highest.height+6)/c,-1,1)),Math.asin(ee(r/d,-1,1))-Math.asin(ee(h/d,-1,1)))),o=Math.max(a,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){I(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){I(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:n,title:a,grid:s}}=this,o=this._isVisible(),c=this.isHorizontal();if(o){const r=Es(a,t.options.font);if(c?(e.width=this.maxWidth,e.height=It(s)+r):(e.height=this.maxHeight,e.width=It(s)+r),n.display&&this.ticks.length){const{first:d,last:f,widest:l,highest:h}=this._getLabelSizes(),g=n.padding*2,N=Ae(this.labelRotation),u=Math.cos(N),b=Math.sin(N);if(c){const m=n.mirror?0:b*l.width+u*h.height;e.height=Math.min(this.maxHeight,e.height+m+g)}else{const m=n.mirror?0:u*l.width+b*h.height;e.width=Math.min(this.maxWidth,e.width+m+g)}this._calculatePadding(d,f,b,u)}}this._handleMargins(),c?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,a){const{ticks:{align:s,padding:o},position:c}=this.options,r=this.labelRotation!==0,d=c!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,g=0;r?d?(h=a*e.width,g=n*t.height):(h=n*e.height,g=a*t.width):s==="start"?g=t.width:s==="end"?h=e.width:s!=="inner"&&(h=e.width/2,g=t.width/2),this.paddingLeft=Math.max((h-f+o)*this.width/(this.width-f),0),this.paddingRight=Math.max((g-l+o)*this.width/(this.width-l),0)}else{let f=t.height/2,l=e.height/2;s==="start"?(f=0,l=e.height):s==="end"&&(f=t.height,l=0),this.paddingTop=f+o,this.paddingBottom=l+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){I(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)Q(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let n=this.ticks;t<n.length&&(n=Rs(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){const{ctx:a,_longestTextCache:s}=this,o=[],c=[],r=Math.floor(t/Ps(t,n));let d=0,f=0,l,h,g,N,u,b,m,B,D,O,x;for(l=0;l<t;l+=r){if(N=e[l].label,u=this._resolveTickFontOptions(l),a.font=b=u.string,m=s[b]=s[b]||{data:{},gc:[]},B=u.lineHeight,D=O=0,!Q(N)&&!F(N))D=tn(a,m.data,m.gc,D,N),O=B;else if(F(N))for(h=0,g=N.length;h<g;++h)x=N[h],!Q(x)&&!F(x)&&(D=tn(a,m.data,m.gc,D,x),O+=B);o.push(D),c.push(O),d=Math.max(D,d),f=Math.max(O,f)}G3(s,t);const y=o.indexOf(d),C=c.indexOf(f),A=S=>({width:o[S]||0,height:c[S]||0});return{first:A(0),last:A(t-1),widest:A(y),highest:A(C),widths:o,heights:c}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return m4(this._alignToPixels?st(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const n=t[e];return n.$context||(n.$context=M3(this.getContext(),e,n))}return this.$context||(this.$context=w3(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=Ae(this.labelRotation),n=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,c=s?s.widest.width+o:0,r=s?s.highest.height+o:0;return this.isHorizontal()?r*n>c*a?c/n:r/a:r*a<c*n?r/n:c/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,n=this.chart,a=this.options,{grid:s,position:o,border:c}=a,r=s.offset,d=this.isHorizontal(),l=this.ticks.length+(r?1:0),h=It(s),g=[],N=c.setContext(this.getContext()),u=N.display?N.width:0,b=u/2,m=function(W){return st(n,W,u)};let B,D,O,x,y,C,A,S,k,v,_,te;if(o==="top")B=m(this.bottom),C=this.bottom-h,S=B-b,v=m(e.top)+b,te=e.bottom;else if(o==="bottom")B=m(this.top),v=e.top,te=m(e.bottom)-b,C=B+b,S=this.top+h;else if(o==="left")B=m(this.right),y=this.right-h,A=B-b,k=m(e.left)+b,_=e.right;else if(o==="right")B=m(this.left),k=e.left,_=m(e.right)-b,y=B+b,A=this.left+h;else if(t==="x"){if(o==="center")B=m((e.top+e.bottom)/2+.5);else if(P(o)){const W=Object.keys(o)[0],Z=o[W];B=m(this.chart.scales[W].getPixelForValue(Z))}v=e.top,te=e.bottom,C=B+b,S=C+h}else if(t==="y"){if(o==="center")B=m((e.left+e.right)/2);else if(P(o)){const W=Object.keys(o)[0],Z=o[W];B=m(this.chart.scales[W].getPixelForValue(Z))}y=B-b,A=y-h,k=e.left,_=e.right}const he=M(a.ticks.maxTicksLimit,l),z=Math.max(1,Math.ceil(l/he));for(D=0;D<l;D+=z){const W=this.getContext(D),Z=s.setContext(W),De=c.setContext(W),ie=Z.lineWidth,Dt=Z.color,pi=De.dash||[],Ot=De.dashOffset,Gt=Z.tickWidth,wt=Z.tickColor,Mt=Z.tickBorderDash||[],_t=Z.tickBorderDashOffset;O=v3(this,D,r),O!==void 0&&(x=st(n,O,ie),d?y=A=k=_=x:C=S=v=te=x,g.push({tx1:y,ty1:C,tx2:A,ty2:S,x1:k,y1:v,x2:_,y2:te,width:ie,color:Dt,borderDash:pi,borderDashOffset:Ot,tickWidth:Gt,tickColor:wt,tickBorderDash:Mt,tickBorderDashOffset:_t}))}return this._ticksLength=l,this._borderValue=B,g}_computeLabelItems(e){const t=this.axis,n=this.options,{position:a,ticks:s}=n,o=this.isHorizontal(),c=this.ticks,{align:r,crossAlign:d,padding:f,mirror:l}=s,h=It(n.grid),g=h+f,N=l?-f:g,u=-Ae(this.labelRotation),b=[];let m,B,D,O,x,y,C,A,S,k,v,_,te="middle";if(a==="top")y=this.bottom-N,C=this._getXAxisLabelAlignment();else if(a==="bottom")y=this.top+N,C=this._getXAxisLabelAlignment();else if(a==="left"){const z=this._getYAxisLabelAlignment(h);C=z.textAlign,x=z.x}else if(a==="right"){const z=this._getYAxisLabelAlignment(h);C=z.textAlign,x=z.x}else if(t==="x"){if(a==="center")y=(e.top+e.bottom)/2+g;else if(P(a)){const z=Object.keys(a)[0],W=a[z];y=this.chart.scales[z].getPixelForValue(W)+g}C=this._getXAxisLabelAlignment()}else if(t==="y"){if(a==="center")x=(e.left+e.right)/2-g;else if(P(a)){const z=Object.keys(a)[0],W=a[z];x=this.chart.scales[z].getPixelForValue(W)}C=this._getYAxisLabelAlignment(h).textAlign}t==="y"&&(r==="start"?te="top":r==="end"&&(te="bottom"));const he=this._getLabelSizes();for(m=0,B=c.length;m<B;++m){D=c[m],O=D.label;const z=s.setContext(this.getContext(m));A=this.getPixelForTick(m)+s.labelOffset,S=this._resolveTickFontOptions(m),k=S.lineHeight,v=F(O)?O.length:1;const W=v/2,Z=z.color,De=z.textStrokeColor,ie=z.textStrokeWidth;let Dt=C;o?(x=A,C==="inner"&&(m===B-1?Dt=this.options.reverse?"left":"right":m===0?Dt=this.options.reverse?"right":"left":Dt="center"),a==="top"?d==="near"||u!==0?_=-v*k+k/2:d==="center"?_=-he.highest.height/2-W*k+k:_=-he.highest.height+k/2:d==="near"||u!==0?_=k/2:d==="center"?_=he.highest.height/2-W*k:_=he.highest.height-v*k,l&&(_*=-1),u!==0&&!z.showLabelBackdrop&&(x+=k/2*Math.sin(u))):(y=A,_=(1-v)*k/2);let pi;if(z.showLabelBackdrop){const Ot=ce(z.backdropPadding),Gt=he.heights[m],wt=he.widths[m];let Mt=_-Ot.top,_t=0-Ot.left;switch(te){case"middle":Mt-=Gt/2;break;case"bottom":Mt-=Gt;break}switch(C){case"center":_t-=wt/2;break;case"right":_t-=wt;break}pi={left:_t,top:Mt,width:wt+Ot.width,height:Gt+Ot.height,color:z.backdropColor}}b.push({label:O,font:S,textOffset:_,options:{rotation:u,color:Z,strokeColor:De,strokeWidth:ie,textAlign:Dt,textBaseline:te,translation:[x,y],backdrop:pi}})}return b}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-Ae(this.labelRotation))return e==="top"?"left":"right";let a="center";return t.align==="start"?a="left":t.align==="end"?a="right":t.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:n,mirror:a,padding:s}}=this.options,o=this._getLabelSizes(),c=e+s,r=o.widest.width;let d,f;return t==="left"?a?(f=this.right+s,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f+=r)):(f=this.right-c,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f=this.left)):t==="right"?a?(f=this.left+s,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f-=r)):(f=this.left+c,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:n,top:a,width:s,height:o}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,a,s,o),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const a=this.ticks.findIndex(s=>s.value===e);return a>=0?t.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const t=this.options.grid,n=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const c=(r,d,f)=>{!f.width||!f.color||(n.save(),n.lineWidth=f.width,n.strokeStyle=f.color,n.setLineDash(f.borderDash||[]),n.lineDashOffset=f.borderDashOffset,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(d.x,d.y),n.stroke(),n.restore())};if(t.display)for(s=0,o=a.length;s<o;++s){const r=a[s];t.drawOnChartArea&&c({x:r.x1,y:r.y1},{x:r.x2,y:r.y2},r),t.drawTicks&&c({x:r.tx1,y:r.ty1},{x:r.tx2,y:r.ty2},{color:r.tickColor,width:r.tickWidth,borderDash:r.tickBorderDash,borderDashOffset:r.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:n,grid:a}}=this,s=n.setContext(this.getContext()),o=n.display?s.width:0;if(!o)return;const c=a.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let d,f,l,h;this.isHorizontal()?(d=st(e,this.left,o)-o/2,f=st(e,this.right,c)+c/2,l=h=r):(l=st(e,this.top,o)-o/2,h=st(e,this.bottom,c)+c/2,d=f=r),t.save(),t.lineWidth=s.width,t.strokeStyle=s.color,t.beginPath(),t.moveTo(d,l),t.lineTo(f,h),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,a=this._computeLabelArea();a&&dn(n,a);const s=this.getLabelItems(e);for(const o of s){const c=o.options,r=o.font,d=o.label,f=o.textOffset;Bt(n,d,0,f,r,c)}a&&fn(n)}drawTitle(){const{ctx:e,options:{position:t,title:n,reverse:a}}=this;if(!n.display)return;const s=X(n.font),o=ce(n.padding),c=n.align;let r=s.lineHeight/2;t==="bottom"||t==="center"||P(t)?(r+=o.bottom,F(n.text)&&(r+=s.lineHeight*(n.text.length-1))):r+=o.top;const{titleX:d,titleY:f,maxWidth:l,rotation:h}=P3(this,r,t,c);Bt(e,n.text,0,0,s,{color:n.color,maxWidth:l,rotation:h,textAlign:_3(c,t,a),textBaseline:"middle",translation:[d,f]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,n=M(e.grid&&e.grid.z,-1),a=M(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==pt.prototype.draw?[{z:t,draw:s=>{this.draw(s)}}]:[{z:n,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:t,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",a=[];let s,o;for(s=0,o=t.length;s<o;++s){const c=t[s];c[n]===this.id&&(!e||c.type===e)&&a.push(c)}return a}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return X(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Gi{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let n;Q3(t)&&(n=this.register(t));const a=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in a||(a[s]=e,R3(e,o,n),this.override&&Y.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const t=this.items,n=e.id,a=this.scope;n in t&&delete t[n],a&&n in Y[a]&&(delete Y[a][n],this.override&&delete bt[n])}}function R3(i,e,t){const n=ci(Object.create(null),[t?Y.get(t):{},Y.get(e),i.defaults]);Y.set(e,n),i.defaultRoutes&&E3(e,i.defaultRoutes),i.descriptors&&Y.describe(e,i.descriptors)}function E3(i,e){Object.keys(e).forEach(t=>{const n=t.split("."),a=n.pop(),s=[i].concat(n).join("."),o=e[t].split("."),c=o.pop(),r=o.join(".");Y.route(s,a,r,c)})}function Q3(i){return"id"in i&&"defaults"in i}class K3{constructor(){this.controllers=new Gi(Ve,"datasets",!0),this.elements=new Gi(Ce,"elements"),this.plugins=new Gi(Object,"plugins"),this.scales=new Gi(pt,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,n){[...t].forEach(a=>{const s=n||this._getRegistryForType(a);n||s.isForType(a)||s===this.plugins&&a.id?this._exec(e,s,a):L(a,o=>{const c=n||this._getRegistryForType(o);this._exec(e,c,o)})})}_exec(e,t,n){const a=Ba(e);I(n["before"+a],[],n),t[e](n),I(n["after"+a],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){const a=t.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return a}}var Se=new K3;class L3{constructor(){this._init=[]}notify(e,t,n,a){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=a?this._descriptors(e).filter(a):this._descriptors(e),o=this._notify(s,e,t,n);return t==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),o}_notify(e,t,n,a){a=a||{};for(const s of e){const o=s.plugin,c=o[n],r=[t,a,s.options];if(I(c,r,o)===!1&&a.cancelable)return!1}return!0}invalidate(){Q(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const n=e&&e.config,a=M(n.options&&n.options.plugins,{}),s=z3(n);return a===!1&&!t?[]:F3(e,s,a,t)}_notifyStateChanges(e){const t=this._oldCache||[],n=this._cache,a=(s,o)=>s.filter(c=>!o.some(r=>c.plugin.id===r.plugin.id));this._notify(a(t,n),e,"stop"),this._notify(a(n,t),e,"start")}}function z3(i){const e={},t=[],n=Object.keys(Se.plugins.items);for(let s=0;s<n.length;s++)t.push(Se.getPlugin(n[s]));const a=i.plugins||[];for(let s=0;s<a.length;s++){const o=a[s];t.indexOf(o)===-1&&(t.push(o),e[o.id]=!0)}return{plugins:t,localIds:e}}function I3(i,e){return!e&&i===!1?null:i===!0?{}:i}function F3(i,{plugins:e,localIds:t},n,a){const s=[],o=i.getContext();for(const c of e){const r=c.id,d=I3(n[r],a);d!==null&&s.push({plugin:c,options:T3(i.config,{plugin:c,local:t[r]},d,o)})}return s}function T3(i,{plugin:e,local:t},n,a){const s=i.pluginScopeKeys(e),o=i.getOptionScopes(n,s);return t&&e.defaults&&o.push(e.defaults),i.createResolver(o,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Hn(i,e){const t=Y.datasets[i]||{};return((e.datasets||{})[i]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function W3(i,e){let t=i;return i==="_index_"?t=e:i==="_value_"&&(t=e==="x"?"y":"x"),t}function H3(i,e){return i===e?"_index_":"_value_"}function Qs(i){if(i==="x"||i==="y"||i==="r")return i}function j3(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function jn(i,...e){if(Qs(i))return i;for(const t of e){const n=t.axis||j3(t.position)||i.length>1&&Qs(i[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Ks(i,e,t){if(t[e+"AxisID"]===i)return{axis:e}}function U3(i,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(n=>n.xAxisID===i||n.yAxisID===i);if(t.length)return Ks(i,"x",t[0])||Ks(i,"y",t[0])}return{}}function Y3(i,e){const t=bt[i.type]||{scales:{}},n=e.scales||{},a=Hn(i.type,e),s=Object.create(null);return Object.keys(n).forEach(o=>{const c=n[o];if(!P(c))return console.error(`Invalid scale configuration for scale: ${o}`);if(c._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const r=jn(o,c,U3(o,i),Y.scales[c.type]),d=H3(r,a),f=t.scales||{};s[o]=Xt(Object.create(null),[{axis:r},c,f[r],f[d]])}),i.data.datasets.forEach(o=>{const c=o.type||i.type,r=o.indexAxis||Hn(c,e),f=(bt[c]||{}).scales||{};Object.keys(f).forEach(l=>{const h=W3(l,r),g=o[h+"AxisID"]||h;s[g]=s[g]||Object.create(null),Xt(s[g],[{axis:h},n[g],f[l]])})}),Object.keys(s).forEach(o=>{const c=s[o];Xt(c,[Y.scales[c.type],Y.scale])}),s}function Tc(i){const e=i.options||(i.options={});e.plugins=M(e.plugins,{}),e.scales=Y3(i,e)}function Wc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function Z3(i){return i=i||{},i.data=Wc(i.data),Tc(i),i}const Ls=new Map,Hc=new Set;function wi(i,e){let t=Ls.get(i);return t||(t=e(),Ls.set(i,t),Hc.add(t)),t}const Ft=(i,e,t)=>{const n=Je(e,t);n!==void 0&&i.add(n)};class q3{constructor(e){this._config=Z3(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Wc(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Tc(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return wi(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return wi(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return wi(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,n=this.type;return wi(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const n=this._scopeCache;let a=n.get(e);return(!a||t)&&(a=new Map,n.set(e,a)),a}getOptionScopes(e,t,n){const{options:a,type:s}=this,o=this._cachedScopes(e,n),c=o.get(t);if(c)return c;const r=new Set;t.forEach(f=>{e&&(r.add(e),f.forEach(l=>Ft(r,e,l))),f.forEach(l=>Ft(r,a,l)),f.forEach(l=>Ft(r,bt[s]||{},l)),f.forEach(l=>Ft(r,Y,l)),f.forEach(l=>Ft(r,Fn,l))});const d=Array.from(r);return d.length===0&&d.push(Object.create(null)),Hc.has(t)&&o.set(t,d),d}chartOptionScopes(){const{options:e,type:t}=this;return[e,bt[t]||{},Y.datasets[t]||{},{type:t},Y,Fn]}resolveNamedOptions(e,t,n,a=[""]){const s={$shared:!0},{resolver:o,subPrefixes:c}=zs(this._resolverCache,e,a);let r=o;if(J3(o,t)){s.$shared=!1,n=$e(n)?n():n;const d=this.createResolver(e,n,c);r=kt(o,n,d)}for(const d of t)s[d]=r[d];return s}createResolver(e,t,n=[""],a){const{resolver:s}=zs(this._resolverCache,e,n);return P(t)?kt(s,t,void 0,a):s}}function zs(i,e,t){let n=i.get(e);n||(n=new Map,i.set(e,n));const a=t.join();let s=n.get(a);return s||(s={resolver:Aa(e,t),subPrefixes:t.filter(c=>!c.toLowerCase().includes("hover"))},n.set(a,s)),s}const X3=i=>P(i)&&Object.getOwnPropertyNames(i).reduce((e,t)=>e||$e(i[t]),!1);function J3(i,e){const{isScriptable:t,isIndexable:n}=Ac(i);for(const a of e){const s=t(a),o=n(a),c=(o||s)&&i[a];if(s&&($e(c)||X3(c))||o&&F(c))return!0}return!1}var $3="4.3.0";const eh=["top","bottom","left","right","chartArea"];function Is(i,e){return i==="top"||i==="bottom"||eh.indexOf(i)===-1&&e==="x"}function Fs(i,e){return function(t,n){return t[i]===n[i]?t[e]-n[e]:t[i]-n[i]}}function Ts(i){const e=i.chart,t=e.options.animation;e.notifyPlugins("afterRender"),I(t&&t.onComplete,[i],e)}function th(i){const e=i.chart,t=e.options.animation;I(t&&t.onProgress,[i],e)}function jc(i){return vc()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Fi={},Ws=i=>{const e=jc(i);return Object.values(Fi).filter(t=>t.canvas===e).pop()};function ih(i,e,t){const n=Object.keys(i);for(const a of n){const s=+a;if(s>=e){const o=i[a];delete i[a],(t>0||s>e)&&(i[s+t]=o)}}}function nh(i,e,t,n){return!t||i.type==="mouseout"?null:n?e:i}function ah(i){const{xScale:e,yScale:t}=i;if(e&&t)return{left:e.left,right:e.right,top:t.top,bottom:t.bottom}}class Re{static register(...e){Se.add(...e),Hs()}static unregister(...e){Se.remove(...e),Hs()}constructor(e,t){const n=this.config=new q3(t),a=jc(e),s=Ws(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||D3(a)),this.platform.updateConfig(n);const c=this.platform.acquireContext(a,o.aspectRatio),r=c&&c.canvas,d=r&&r.height,f=r&&r.width;if(this.id=o4(),this.ctx=c,this.canvas=r,this.width=f,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new L3,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=O4(l=>this.update(l),o.resizeDelay||0),this._dataChanges=[],Fi[this.id]=this,!c||!r){console.error("Failed to create chart: can't acquire context from the given item");return}Me.listen(this,"complete",Ts),Me.listen(this,"progress",th),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:a,_aspectRatio:s}=this;return Q(e)?t&&s?s:a?n/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Se}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():hs(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ds(this.canvas,this.ctx),this}stop(){return Me.stop(this),this}resize(e,t){Me.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const n=this.options,a=this.canvas,s=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(a,e,t,s),c=n.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,hs(this,c,!0)&&(this.notifyPlugins("resize",{size:o}),I(n.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};L(t,(n,a)=>{n.id=a})}buildOrUpdateScales(){const e=this.options,t=e.scales,n=this.scales,a=Object.keys(n).reduce((o,c)=>(o[c]=!1,o),{});let s=[];t&&(s=s.concat(Object.keys(t).map(o=>{const c=t[o],r=jn(o,c),d=r==="r",f=r==="x";return{options:c,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),L(s,o=>{const c=o.options,r=c.id,d=jn(r,c),f=M(c.type,o.dtype);(c.position===void 0||Is(c.position,d)!==Is(o.dposition))&&(c.position=o.dposition),a[r]=!0;let l=null;if(r in n&&n[r].type===f)l=n[r];else{const h=Se.getScale(f);l=new h({id:r,type:f,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(c,e)}),L(a,(o,c)=>{o||delete n[c]}),L(n,o=>{oe.configure(this,o,o.options),oe.addBox(this,o)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((a,s)=>a.index-s.index),n>t){for(let a=t;a<n;++a)this._destroyDatasetMeta(a);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Fs("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((n,a)=>{t.filter(s=>s===n._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let n,a;for(this._removeUnreferencedMetasets(),n=0,a=t.length;n<a;n++){const s=t[n];let o=this.getDatasetMeta(n);const c=s.type||this.config.type;if(o.type&&o.type!==c&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=c,o.indexAxis=s.indexAxis||Hn(c,this.options),o.order=s.order||0,o.index=n,o.label=""+s.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const r=Se.getController(c),{datasetElementType:d,dataElementType:f}=Y.datasets[c];Object.assign(r,{dataElementType:Se.getElement(f),datasetElementType:d&&Se.getElement(d)}),o.controller=new r(this,n),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){L(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:l}=this.getDatasetMeta(d),h=!a&&s.indexOf(l)===-1;l.buildOrUpdateElements(h),o=Math.max(+l.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),a||L(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Fs("z","_idx"));const{_active:c,_lastEvent:r}=this;r?this._eventHandler(r,!0):c.length&&this._updateHoverStyles(c,c,!0),this.render()}_updateScales(){L(this.scales,e=>{oe.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!es(t,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:n,start:a,count:s}of t){const o=n==="_removeElements"?-s:s;ih(e,a,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,n=s=>new Set(e.filter(o=>o[0]===s).map((o,c)=>c+","+o.splice(1).join(","))),a=n(0);for(let s=1;s<t;s++)if(!es(a,n(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;oe.update(this,this.width,this.height,e);const t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],L(this.boxes,a=>{n&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,n=this.data.datasets.length;t<n;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,$e(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const n=this.getDatasetMeta(e),a={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(n.controller._update(t),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Me.has(this)?this.attached&&!Me.running(this)&&Me.start(this):(this.draw(),Ts({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:a}=this._resizeBeforeDraw;this._resize(n,a),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,n=[];let a,s;for(a=0,s=t.length;a<s;++a){const o=t[a];(!e||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,n=e._clip,a=!n.disabled,s=ah(e)||this.chartArea,o={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(a&&dn(t,{left:n.left===!1?0:s.left-n.left,right:n.right===!1?this.width:s.right+n.right,top:n.top===!1?0:s.top-n.top,bottom:n.bottom===!1?this.height:s.bottom+n.bottom}),e.controller.draw(),a&&fn(t),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(e){return Le(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,a){const s=e3.modes[t];return typeof s=="function"?s(this,e,n,a):[]}getDatasetMeta(e){const t=this.data.datasets[e],n=this._metasets;let a=n.filter(s=>s&&s._dataset===t).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(a)),a}getContext(){return this.$context||(this.$context=nt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!t.hidden}setDatasetVisibility(e,t){const n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){const a=n?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,a);ri(t)?(s.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),o.update(s,{visible:n}),this.update(c=>c.datasetIndex===e?a:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Me.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),ds(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Fi[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,n=(s,o)=>{t.addEventListener(this,s,o),e[s]=o},a=(s,o,c)=>{s.offsetX=o,s.offsetY=c,this._eventHandler(s)};L(this.options.events,s=>n(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,n=(r,d)=>{t.addEventListener(this,r,d),e[r]=d},a=(r,d)=>{e[r]&&(t.removeEventListener(this,r,d),delete e[r])},s=(r,d)=>{this.canvas&&this.resize(r,d)};let o;const c=()=>{a("attach",c),this.attached=!0,this.resize(),n("resize",s),n("detach",o)};o=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),n("attach",c)},t.isAttached(this.canvas)?c():o()}unbindEvents(){L(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},L(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){const a=n?"set":"remove";let s,o,c,r;for(t==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),c=0,r=e.length;c<r;++c){o=e[c];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[a+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],n=e.map(({datasetIndex:s,index:o})=>{const c=this.getDatasetMeta(s);if(!c)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:c.data[o],index:o}});!Ji(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){const a=this.options.hover,s=(r,d)=>r.filter(f=>!d.some(l=>f.datasetIndex===l.datasetIndex&&f.index===l.index)),o=s(t,e),c=n?e:s(e,t);o.length&&this.updateHoverStyle(o,a.mode,!1),c.length&&a.mode&&this.updateHoverStyle(c,a.mode,!0)}_eventHandler(e,t){const n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},a=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,a)===!1)return;const s=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,a),(s||n.changed)&&this.render(),this}_handleEvent(e,t,n){const{_active:a=[],options:s}=this,o=t,c=this._getActiveElements(e,a,n,o),r=h4(e),d=nh(e,this._lastEvent,n,r);n&&(this._lastEvent=null,I(s.onHover,[e,c,this],this),r&&I(s.onClick,[e,c,this],this));const f=!Ji(c,a);return(f||t)&&(this._active=c,this._updateHoverStyles(c,a,t)),this._lastEvent=d,f}_getActiveElements(e,t,n,a){if(e.type==="mouseout")return[];if(!n)return t;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,a)}}V(Re,"defaults",Y),V(Re,"instances",Fi),V(Re,"overrides",bt),V(Re,"registry",Se),V(Re,"version",$3),V(Re,"getChart",Ws);function Hs(){return L(Re.instances,i=>i._plugins.invalidate())}function sh(i,e,t){const{startAngle:n,pixelMargin:a,x:s,y:o,outerRadius:c,innerRadius:r}=e;let d=a/c;i.beginPath(),i.arc(s,o,c,n-d,t+d),r>a?(d=a/r,i.arc(s,o,r,t+d,n-d,!0)):i.arc(s,o,a,t+U,n-U),i.closePath(),i.clip()}function oh(i){return Oa(i,["outerStart","outerEnd","innerStart","innerEnd"])}function ch(i,e,t,n){const a=oh(i.options.borderRadius),s=(t-e)/2,o=Math.min(s,n*e/2),c=r=>{const d=(t-Math.min(s,r))*n/2;return ee(r,0,Math.min(s,d))};return{outerStart:c(a.outerStart),outerEnd:c(a.outerEnd),innerStart:ee(a.innerStart,0,o),innerEnd:ee(a.innerEnd,0,o)}}function Vt(i,e,t,n){return{x:t+i*Math.cos(e),y:n+i*Math.sin(e)}}function sn(i,e,t,n,a,s){const{x:o,y:c,startAngle:r,pixelMargin:d,innerRadius:f}=e,l=Math.max(e.outerRadius+n+t-d,0),h=f>0?f+n+t+d:0;let g=0;const N=a-r;if(n){const z=f>0?f-n:0,W=l>0?l-n:0,Z=(z+W)/2,De=Z!==0?N*Z/(Z+n):N;g=(N-De)/2}const u=Math.max(.001,N*l-t/H)/l,b=(N-u)/2,m=r+b+g,B=a-b-g,{outerStart:D,outerEnd:O,innerStart:x,innerEnd:y}=ch(e,h,l,B-m),C=l-D,A=l-O,S=m+D/C,k=B-O/A,v=h+x,_=h+y,te=m+x/v,he=B-y/_;if(i.beginPath(),s){const z=(S+k)/2;if(i.arc(o,c,l,S,z),i.arc(o,c,l,z,k),O>0){const ie=Vt(A,k,o,c);i.arc(ie.x,ie.y,O,k,B+U)}const W=Vt(_,B,o,c);if(i.lineTo(W.x,W.y),y>0){const ie=Vt(_,he,o,c);i.arc(ie.x,ie.y,y,B+U,he+Math.PI)}const Z=(B-y/h+(m+x/h))/2;if(i.arc(o,c,h,B-y/h,Z,!0),i.arc(o,c,h,Z,m+x/h,!0),x>0){const ie=Vt(v,te,o,c);i.arc(ie.x,ie.y,x,te+Math.PI,m-U)}const De=Vt(C,m,o,c);if(i.lineTo(De.x,De.y),D>0){const ie=Vt(C,S,o,c);i.arc(ie.x,ie.y,D,m-U,S)}}else{i.moveTo(o,c);const z=Math.cos(S)*l+o,W=Math.sin(S)*l+c;i.lineTo(z,W);const Z=Math.cos(k)*l+o,De=Math.sin(k)*l+c;i.lineTo(Z,De)}i.closePath()}function rh(i,e,t,n,a){const{fullCircles:s,startAngle:o,circumference:c}=e;let r=e.endAngle;if(s){sn(i,e,t,n,r,a);for(let d=0;d<s;++d)i.fill();isNaN(c)||(r=o+(c%T||T))}return sn(i,e,t,n,r,a),i.fill(),r}function dh(i,e,t,n,a){const{fullCircles:s,startAngle:o,circumference:c,options:r}=e,{borderWidth:d,borderJoinStyle:f,borderDash:l,borderDashOffset:h}=r,g=r.borderAlign==="inner";if(!d)return;i.setLineDash(l||[]),i.lineDashOffset=h,g?(i.lineWidth=d*2,i.lineJoin=f||"round"):(i.lineWidth=d,i.lineJoin=f||"bevel");let N=e.endAngle;if(s){sn(i,e,t,n,N,a);for(let u=0;u<s;++u)i.stroke();isNaN(c)||(N=o+(c%T||T))}g&&sh(i,e,N),s||(sn(i,e,t,n,N,a),i.stroke())}class Yt extends Ce{constructor(t){super();V(this,"circumference");V(this,"endAngle");V(this,"fullCircles");V(this,"innerRadius");V(this,"outerRadius");V(this,"pixelMargin");V(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.getProps(["x","y"],a),{angle:o,distance:c}=Nc(s,{x:t,y:n}),{startAngle:r,endAngle:d,innerRadius:f,outerRadius:l,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],a),g=(this.options.spacing+this.options.borderWidth)/2,u=M(h,d-r)>=T||di(o,r,d),b=Qe(c,f+g,l+g);return u&&b}getCenterPoint(t){const{x:n,y:a,startAngle:s,endAngle:o,innerRadius:c,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:d,spacing:f}=this.options,l=(s+o)/2,h=(c+r+f+d)/2;return{x:n+Math.cos(l)*h,y:a+Math.sin(l)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:a}=this,s=(n.offset||0)/4,o=(n.spacing||0)/2,c=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=a>T?Math.floor(a/T):0,a===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const r=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(r)*s,Math.sin(r)*s);const d=1-Math.sin(Math.min(H,a||0)),f=s*d;t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor,rh(t,this,f,o,c),dh(t,this,f,o,c),t.restore()}}V(Yt,"id","arc"),V(Yt,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),V(Yt,"defaultRoutes",{backgroundColor:"backgroundColor"}),V(Yt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"});function Uc(i,e,t=e){i.lineCap=M(t.borderCapStyle,e.borderCapStyle),i.setLineDash(M(t.borderDash,e.borderDash)),i.lineDashOffset=M(t.borderDashOffset,e.borderDashOffset),i.lineJoin=M(t.borderJoinStyle,e.borderJoinStyle),i.lineWidth=M(t.borderWidth,e.borderWidth),i.strokeStyle=M(t.borderColor,e.borderColor)}function fh(i,e,t){i.lineTo(t.x,t.y)}function lh(i){return i.stepped?P4:i.tension||i.cubicInterpolationMode==="monotone"?R4:fh}function Yc(i,e,t={}){const n=i.length,{start:a=0,end:s=n-1}=t,{start:o,end:c}=e,r=Math.max(a,o),d=Math.min(s,c),f=a<o&&s<o||a>c&&s>c;return{count:n,start:r,loop:e.loop,ilen:d<r&&!f?n+d-r:d-r}}function hh(i,e,t,n){const{points:a,options:s}=e,{count:o,start:c,loop:r,ilen:d}=Yc(a,t,n),f=lh(s);let{move:l=!0,reverse:h}=n||{},g,N,u;for(g=0;g<=d;++g)N=a[(c+(h?d-g:g))%o],!N.skip&&(l?(i.moveTo(N.x,N.y),l=!1):f(i,u,N,h,s.stepped),u=N);return r&&(N=a[(c+(h?d:0))%o],f(i,u,N,h,s.stepped)),!!r}function Nh(i,e,t,n){const a=e.points,{count:s,start:o,ilen:c}=Yc(a,t,n),{move:r=!0,reverse:d}=n||{};let f=0,l=0,h,g,N,u,b,m;const B=O=>(o+(d?c-O:O))%s,D=()=>{u!==b&&(i.lineTo(f,b),i.lineTo(f,u),i.lineTo(f,m))};for(r&&(g=a[B(0)],i.moveTo(g.x,g.y)),h=0;h<=c;++h){if(g=a[B(h)],g.skip)continue;const O=g.x,x=g.y,y=O|0;y===N?(x<u?u=x:x>b&&(b=x),f=(l*f+O)/++l):(D(),i.lineTo(O,x),N=y,l=0,u=b=x),m=x}D()}function Un(i){const e=i.options,t=e.borderDash&&e.borderDash.length;return!i._decimated&&!i._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?Nh:hh}function gh(i){return i.stepped?Nl:i.tension||i.cubicInterpolationMode==="monotone"?gl:ft}function uh(i,e,t,n){let a=e._path;a||(a=e._path=new Path2D,e.path(a,t,n)&&a.closePath()),Uc(i,e.options),i.stroke(a)}function bh(i,e,t,n){const{segments:a,options:s}=e,o=Un(e);for(const c of a)Uc(i,s,c.style),i.beginPath(),o(i,e,c,{start:t,end:t+n-1})&&i.closePath(),i.stroke()}const Bh=typeof Path2D=="function";function mh(i,e,t,n){Bh&&!e.options.segment?uh(i,e,t,n):bh(i,e,t,n)}class Ye extends Ce{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const a=n.spanGaps?this._loop:this._fullLoop;sl(this._points,n,e,a,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=pl(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){const n=this.options,a=e[t],s=this.points,o=Pc(this,{property:t,start:a,end:a});if(!o.length)return;const c=[],r=gh(n);let d,f;for(d=0,f=o.length;d<f;++d){const{start:l,end:h}=o[d],g=s[l],N=s[h];if(g===N){c.push(g);continue}const u=Math.abs((a-g[t])/(N[t]-g[t])),b=r(g,N,u,n.stepped);b[t]=e[t],c.push(b)}return c.length===1?c[0]:c}pathSegment(e,t,n){return Un(this)(e,this,t,n)}path(e,t,n){const a=this.segments,s=Un(this);let o=this._loop;t=t||0,n=n||this.points.length-t;for(const c of a)o&=s(e,this,c,{start:t,end:t+n-1});return!!o}draw(e,t,n,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),mh(e,this,n,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}V(Ye,"id","line"),V(Ye,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),V(Ye,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),V(Ye,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function js(i,e,t,n){const a=i.options,{[t]:s}=i.getProps([t],n);return Math.abs(e-s)<a.radius+a.hitRadius}class Ti extends Ce{constructor(t){super();V(this,"parsed");V(this,"skip");V(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,a){const s=this.options,{x:o,y:c}=this.getProps(["x","y"],a);return Math.pow(t-o,2)+Math.pow(n-c,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,n){return js(this,t,"x",n)}inYRange(t,n){return js(this,t,"y",n)}getCenterPoint(t){const{x:n,y:a}=this.getProps(["x","y"],t);return{x:n,y:a}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const a=n&&t.borderWidth||0;return(n+a)*2}draw(t,n){const a=this.options;this.skip||a.radius<.1||!Le(this,n,this.size(a)/2)||(t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.fillStyle=a.backgroundColor,Tn(t,a,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}V(Ti,"id","point"),V(Ti,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),V(Ti,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Zc(i,e){const{x:t,y:n,base:a,width:s,height:o}=i.getProps(["x","y","base","width","height"],e);let c,r,d,f,l;return i.horizontal?(l=o/2,c=Math.min(t,a),r=Math.max(t,a),d=n-l,f=n+l):(l=s/2,c=t-l,r=t+l,d=Math.min(n,a),f=Math.max(n,a)),{left:c,top:d,right:r,bottom:f}}function Ze(i,e,t,n){return i?0:ee(e,t,n)}function xh(i,e,t){const n=i.options.borderWidth,a=i.borderSkipped,s=Oc(n);return{t:Ze(a.top,s.top,0,t),r:Ze(a.right,s.right,0,e),b:Ze(a.bottom,s.bottom,0,t),l:Ze(a.left,s.left,0,e)}}function ph(i,e,t){const{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),a=i.options.borderRadius,s=Nt(a),o=Math.min(e,t),c=i.borderSkipped,r=n||P(a);return{topLeft:Ze(!r||c.top||c.left,s.topLeft,0,o),topRight:Ze(!r||c.top||c.right,s.topRight,0,o),bottomLeft:Ze(!r||c.bottom||c.left,s.bottomLeft,0,o),bottomRight:Ze(!r||c.bottom||c.right,s.bottomRight,0,o)}}function Dh(i){const e=Zc(i),t=e.right-e.left,n=e.bottom-e.top,a=xh(i,t/2,n/2),s=ph(i,t/2,n/2);return{outer:{x:e.left,y:e.top,w:t,h:n,radius:s},inner:{x:e.left+a.l,y:e.top+a.t,w:t-a.l-a.r,h:n-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function Gn(i,e,t,n){const a=e===null,s=t===null,c=i&&!(a&&s)&&Zc(i,n);return c&&(a||Qe(e,c.left,c.right))&&(s||Qe(t,c.top,c.bottom))}function Oh(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Ah(i,e){i.rect(e.x,e.y,e.w,e.h)}function wn(i,e,t={}){const n=i.x!==t.x?-e:0,a=i.y!==t.y?-e:0,s=(i.x+i.w!==t.x+t.w?e:0)-n,o=(i.y+i.h!==t.y+t.h?e:0)-a;return{x:i.x+n,y:i.y+a,w:i.w+s,h:i.h+o,radius:i.radius}}class Wi extends Ce{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:n,backgroundColor:a}}=this,{inner:s,outer:o}=Dh(this),c=Oh(o.radius)?fi:Ah;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),c(e,wn(o,t,s)),e.clip(),c(e,wn(s,-t,o)),e.fillStyle=n,e.fill("evenodd")),e.beginPath(),c(e,wn(s,t)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,t,n){return Gn(this,e,t,n)}inXRange(e,t){return Gn(this,e,null,t)}inYRange(e,t){return Gn(this,null,e,t)}getCenterPoint(e){const{x:t,y:n,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(t+a)/2:t,y:s?n:(n+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}V(Wi,"id","bar"),V(Wi,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),V(Wi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Vh=Object.freeze({__proto__:null,ArcElement:Yt,BarElement:Wi,LineElement:Ye,PointElement:Ti});const Yn=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Us=Yn.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function qc(i){return Yn[i%Yn.length]}function Xc(i){return Us[i%Us.length]}function Ch(i,e){return i.borderColor=qc(e),i.backgroundColor=Xc(e),++e}function yh(i,e){return i.backgroundColor=i.data.map(()=>qc(e++)),e}function Sh(i,e){return i.backgroundColor=i.data.map(()=>Xc(e++)),e}function kh(i){let e=0;return(t,n)=>{const a=i.getDatasetMeta(n).controller;a instanceof lt?e=yh(t,e):a instanceof ti?e=Sh(t,e):a&&(e=Ch(t,e))}}function Ys(i){let e;for(e in i)if(i[e].borderColor||i[e].backgroundColor)return!0;return!1}function vh(i){return i&&(i.borderColor||i.backgroundColor)}var Gh={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,e,t){if(!t.enabled)return;const{data:{datasets:n},options:a}=i.config,{elements:s}=a;if(!t.forceOverride&&(Ys(n)||vh(a)||s&&Ys(s)))return;const o=kh(i);n.forEach(o)}};function wh(i,e,t,n,a){const s=a.samples||n;if(s>=t)return i.slice(e,e+t);const o=[],c=(t-2)/(s-2);let r=0;const d=e+t-1;let f=e,l,h,g,N,u;for(o[r++]=i[f],l=0;l<s-2;l++){let b=0,m=0,B;const D=Math.floor((l+1)*c)+1+e,O=Math.min(Math.floor((l+2)*c)+1,t)+e,x=O-D;for(B=D;B<O;B++)b+=i[B].x,m+=i[B].y;b/=x,m/=x;const y=Math.floor(l*c)+1+e,C=Math.min(Math.floor((l+1)*c)+1,t)+e,{x:A,y:S}=i[f];for(g=N=-1,B=y;B<C;B++)N=.5*Math.abs((A-b)*(i[B].y-S)-(A-i[B].x)*(m-S)),N>g&&(g=N,h=i[B],u=B);o[r++]=h,f=u}return o[r++]=i[d],o}function Mh(i,e,t,n){let a=0,s=0,o,c,r,d,f,l,h,g,N,u;const b=[],m=e+t-1,B=i[e].x,O=i[m].x-B;for(o=e;o<e+t;++o){c=i[o],r=(c.x-B)/O*n,d=c.y;const x=r|0;if(x===f)d<N?(N=d,l=o):d>u&&(u=d,h=o),a=(s*a+c.x)/++s;else{const y=o-1;if(!Q(l)&&!Q(h)){const C=Math.min(l,h),A=Math.max(l,h);C!==g&&C!==y&&b.push({...i[C],x:a}),A!==g&&A!==y&&b.push({...i[A],x:a})}o>0&&y!==g&&b.push(i[y]),b.push(c),f=x,s=0,N=u=d,l=h=g=o}}return b}function Jc(i){if(i._decimated){const e=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function Zs(i){i.data.datasets.forEach(e=>{Jc(e)})}function _h(i,e){const t=e.length;let n=0,a;const{iScale:s}=i,{min:o,max:c,minDefined:r,maxDefined:d}=s.getUserBounds();return r&&(n=ee(Ke(e,s.axis,o).lo,0,t-1)),d?a=ee(Ke(e,s.axis,c).hi+1,n,t)-n:a=t-n,{start:n,count:a}}var Ph={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,e,t)=>{if(!t.enabled){Zs(i);return}const n=i.width;i.data.datasets.forEach((a,s)=>{const{_data:o,indexAxis:c}=a,r=i.getDatasetMeta(s),d=o||a.data;if(jt([c,i.options.indexAxis])==="y"||!r.controller.supportsDecimation)return;const f=i.scales[r.xAxisID];if(f.type!=="linear"&&f.type!=="time"||i.options.parsing)return;let{start:l,count:h}=_h(r,d);const g=t.threshold||4*n;if(h<=g){Jc(a);return}Q(o)&&(a._data=d,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(u){this._data=u}}));let N;switch(t.algorithm){case"lttb":N=wh(d,l,h,n,t);break;case"min-max":N=Mh(d,l,h,n);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}a._decimated=N})},destroy(i){Zs(i)}};function Rh(i,e,t){const n=i.segments,a=i.points,s=e.points,o=[];for(const c of n){let{start:r,end:d}=c;d=ka(r,d,a);const f=Zn(t,a[r],a[d],c.loop);if(!e.segments){o.push({source:c,target:f,start:a[r],end:a[d]});continue}const l=Pc(e,f);for(const h of l){const g=Zn(t,s[h.start],s[h.end],h.loop),N=_c(c,a,g);for(const u of N)o.push({source:u,target:h,start:{[t]:qs(f,g,"start",Math.max)},end:{[t]:qs(f,g,"end",Math.min)}})}}return o}function Zn(i,e,t,n){if(n)return;let a=e[i],s=t[i];return i==="angle"&&(a=be(a),s=be(s)),{property:i,start:a,end:s}}function Eh(i,e){const{x:t=null,y:n=null}=i||{},a=e.points,s=[];return e.segments.forEach(({start:o,end:c})=>{c=ka(o,c,a);const r=a[o],d=a[c];n!==null?(s.push({x:r.x,y:n}),s.push({x:d.x,y:n})):t!==null&&(s.push({x:t,y:r.y}),s.push({x:t,y:d.y}))}),s}function ka(i,e,t){for(;e>i;e--){const n=t[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function qs(i,e,t,n){return i&&e?n(i[t],e[t]):i?i[t]:e?e[t]:0}function $c(i,e){let t=[],n=!1;return F(i)?(n=!0,t=i):t=Eh(i,e),t.length?new Ye({points:t,options:{tension:0},_loop:n,_fullLoop:n}):null}function Xs(i){return i&&i.fill!==!1}function Qh(i,e,t){let a=i[e].fill;const s=[e];let o;if(!t)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!j(a))return a;if(o=i[a],!o)return!1;if(o.visible)return a;s.push(a),a=o.fill}return!1}function Kh(i,e,t){const n=Fh(i);if(P(n))return isNaN(n.value)?!1:n;let a=parseFloat(n);return j(a)&&Math.floor(a)===a?Lh(n[0],e,a,t):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function Lh(i,e,t,n){return(i==="-"||i==="+")&&(t=e+t),t===e||t<0||t>=n?!1:t}function zh(i,e){let t=null;return i==="start"?t=e.bottom:i==="end"?t=e.top:P(i)?t=e.getPixelForValue(i.value):e.getBasePixel&&(t=e.getBasePixel()),t}function Ih(i,e,t){let n;return i==="start"?n=t:i==="end"?n=e.options.reverse?e.min:e.max:P(i)?n=i.value:n=e.getBaseValue(),n}function Fh(i){const e=i.options,t=e.fill;let n=M(t&&t.target,t);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function Th(i){const{scale:e,index:t,line:n}=i,a=[],s=n.segments,o=n.points,c=Wh(e,t);c.push($c({x:null,y:e.bottom},n));for(let r=0;r<s.length;r++){const d=s[r];for(let f=d.start;f<=d.end;f++)Hh(a,o[f],c)}return new Ye({points:a,options:{}})}function Wh(i,e){const t=[],n=i.getMatchingVisibleMetas("line");for(let a=0;a<n.length;a++){const s=n[a];if(s.index===e)break;s.hidden||t.unshift(s.dataset)}return t}function Hh(i,e,t){const n=[];for(let a=0;a<t.length;a++){const s=t[a],{first:o,last:c,point:r}=jh(s,e,"x");if(!(!r||o&&c)){if(o)n.unshift(r);else if(i.push(r),!c)break}}i.push(...n)}function jh(i,e,t){const n=i.interpolate(e,t);if(!n)return{};const a=n[t],s=i.segments,o=i.points;let c=!1,r=!1;for(let d=0;d<s.length;d++){const f=s[d],l=o[f.start][t],h=o[f.end][t];if(Qe(a,l,h)){c=a===l,r=a===h;break}}return{first:c,last:r,point:n}}class er{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){const{x:a,y:s,radius:o}=this;return t=t||{start:0,end:T},e.arc(a,s,o,t.end,t.start,!0),!n.bounds}interpolate(e){const{x:t,y:n,radius:a}=this,s=e.angle;return{x:t+Math.cos(s)*a,y:n+Math.sin(s)*a,angle:s}}}function Uh(i){const{chart:e,fill:t,line:n}=i;if(j(t))return Yh(e,t);if(t==="stack")return Th(i);if(t==="shape")return!0;const a=Zh(i);return a instanceof er?a:$c(a,n)}function Yh(i,e){const t=i.getDatasetMeta(e);return t&&i.isDatasetVisible(e)?t.dataset:null}function Zh(i){return(i.scale||{}).getPointPositionForValue?Xh(i):qh(i)}function qh(i){const{scale:e={},fill:t}=i,n=zh(t,e);if(j(n)){const a=e.isHorizontal();return{x:a?n:null,y:a?null:n}}return null}function Xh(i){const{scale:e,fill:t}=i,n=e.options,a=e.getLabels().length,s=n.reverse?e.max:e.min,o=Ih(t,e,s),c=[];if(n.grid.circular){const r=e.getPointPositionForValue(0,s);return new er({x:r.x,y:r.y,radius:e.getDistanceFromCenterForValue(o)})}for(let r=0;r<a;++r)c.push(e.getPointPositionForValue(r,o));return c}function Mn(i,e,t){const n=Uh(e),{line:a,scale:s,axis:o}=e,c=a.options,r=c.fill,d=c.backgroundColor,{above:f=d,below:l=d}=r||{};n&&a.points.length&&(dn(i,t),Jh(i,{line:a,target:n,above:f,below:l,area:t,scale:s,axis:o}),fn(i))}function Jh(i,e){const{line:t,target:n,above:a,below:s,area:o,scale:c}=e,r=t._loop?"angle":e.axis;i.save(),r==="x"&&s!==a&&(Js(i,n,o.top),$s(i,{line:t,target:n,color:a,scale:c,property:r}),i.restore(),i.save(),Js(i,n,o.bottom)),$s(i,{line:t,target:n,color:s,scale:c,property:r}),i.restore()}function Js(i,e,t){const{segments:n,points:a}=e;let s=!0,o=!1;i.beginPath();for(const c of n){const{start:r,end:d}=c,f=a[r],l=a[ka(r,d,a)];s?(i.moveTo(f.x,f.y),s=!1):(i.lineTo(f.x,t),i.lineTo(f.x,f.y)),o=!!e.pathSegment(i,c,{move:o}),o?i.closePath():i.lineTo(l.x,t)}i.lineTo(e.first().x,t),i.closePath(),i.clip()}function $s(i,e){const{line:t,target:n,property:a,color:s,scale:o}=e,c=Rh(t,n,a);for(const{source:r,target:d,start:f,end:l}of c){const{style:{backgroundColor:h=s}={}}=r,g=n!==!0;i.save(),i.fillStyle=h,$h(i,o,g&&Zn(a,f,l)),i.beginPath();const N=!!t.pathSegment(i,r);let u;if(g){N?i.closePath():eo(i,n,l,a);const b=!!n.pathSegment(i,d,{move:N,reverse:!0});u=N&&b,u||eo(i,n,f,a)}i.closePath(),i.fill(u?"evenodd":"nonzero"),i.restore()}}function $h(i,e,t){const{top:n,bottom:a}=e.chart.chartArea,{property:s,start:o,end:c}=t||{};s==="x"&&(i.beginPath(),i.rect(o,n,c-o,a-n),i.clip())}function eo(i,e,t,n){const a=e.interpolate(t,n);a&&i.lineTo(a.x,a.y)}var e5={id:"filler",afterDatasetsUpdate(i,e,t){const n=(i.data.datasets||[]).length,a=[];let s,o,c,r;for(o=0;o<n;++o)s=i.getDatasetMeta(o),c=s.dataset,r=null,c&&c.options&&c instanceof Ye&&(r={visible:i.isDatasetVisible(o),index:o,fill:Kh(c,o,n),chart:i,axis:s.controller.options.indexAxis,scale:s.vScale,line:c}),s.$filler=r,a.push(r);for(o=0;o<n;++o)r=a[o],!(!r||r.fill===!1)&&(r.fill=Qh(a,o,t.propagate))},beforeDraw(i,e,t){const n=t.drawTime==="beforeDraw",a=i.getSortedVisibleDatasetMetas(),s=i.chartArea;for(let o=a.length-1;o>=0;--o){const c=a[o].$filler;c&&(c.line.updateControlPoints(s,c.axis),n&&c.fill&&Mn(i.ctx,c,s))}},beforeDatasetsDraw(i,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const n=i.getSortedVisibleDatasetMetas();for(let a=n.length-1;a>=0;--a){const s=n[a].$filler;Xs(s)&&Mn(i.ctx,s,i.chartArea)}},beforeDatasetDraw(i,e,t){const n=e.meta.$filler;!Xs(n)||t.drawTime!=="beforeDatasetDraw"||Mn(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const to=(i,e)=>{let{boxHeight:t=e,boxWidth:n=e}=i;return i.usePointStyle&&(t=Math.min(t,e),n=i.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:t,itemHeight:Math.max(e,t)}},t5=(i,e)=>i!==null&&e!==null&&i.datasetIndex===e.datasetIndex&&i.index===e.index;class io extends Ce{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=I(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(n=>e.filter(n,this.chart.data))),e.sort&&(t=t.sort((n,a)=>e.sort(n,a,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,a=X(n.font),s=a.size,o=this._computeTitleHeight(),{boxWidth:c,itemHeight:r}=to(n,s);let d,f;t.font=a.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(o,s,c,r)+10):(f=this.maxHeight,d=this._fitCols(o,a,c,r)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(f,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,a){const{ctx:s,maxWidth:o,options:{labels:{padding:c}}}=this,r=this.legendHitBoxes=[],d=this.lineWidths=[0],f=a+c;let l=e;s.textAlign="left",s.textBaseline="middle";let h=-1,g=-f;return this.legendItems.forEach((N,u)=>{const b=n+t/2+s.measureText(N.text).width;(u===0||d[d.length-1]+b+2*c>o)&&(l+=f,d[d.length-(u>0?0:1)]=0,g+=f,h++),r[u]={left:0,top:g,row:h,width:b,height:a},d[d.length-1]+=b+c}),l}_fitCols(e,t,n,a){const{ctx:s,maxHeight:o,options:{labels:{padding:c}}}=this,r=this.legendHitBoxes=[],d=this.columnSizes=[],f=o-e;let l=c,h=0,g=0,N=0,u=0;return this.legendItems.forEach((b,m)=>{const{itemWidth:B,itemHeight:D}=i5(n,t,s,b,a);m>0&&g+D+2*c>f&&(l+=h+c,d.push({width:h,height:g}),N+=h+c,u++,h=g=0),r[m]={left:N,top:g,col:u,width:B,height:D},h=Math.max(h,B),g+=D+c}),l+=h,d.push({width:h,height:g}),l}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:a},rtl:s}}=this,o=Ct(s,this.left,this.width);if(this.isHorizontal()){let c=0,r=se(n,this.left+a,this.right-this.lineWidths[c]);for(const d of t)c!==d.row&&(c=d.row,r=se(n,this.left+a,this.right-this.lineWidths[c])),d.top+=this.top+e+a,d.left=o.leftForLtr(o.x(r),d.width),r+=d.width+a}else{let c=0,r=se(n,this.top+e+a,this.bottom-this.columnSizes[c].height);for(const d of t)d.col!==c&&(c=d.col,r=se(n,this.top+e+a,this.bottom-this.columnSizes[c].height)),d.top=r,d.left+=this.left+a,d.left=o.leftForLtr(o.x(d.left),d.width),r+=d.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;dn(e,this),this._draw(),fn(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:n,ctx:a}=this,{align:s,labels:o}=e,c=Y.color,r=Ct(e.rtl,this.left,this.width),d=X(o.font),{padding:f}=o,l=d.size,h=l/2;let g;this.drawTitle(),a.textAlign=r.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:N,boxHeight:u,itemHeight:b}=to(o,l),m=function(y,C,A){if(isNaN(N)||N<=0||isNaN(u)||u<0)return;a.save();const S=M(A.lineWidth,1);if(a.fillStyle=M(A.fillStyle,c),a.lineCap=M(A.lineCap,"butt"),a.lineDashOffset=M(A.lineDashOffset,0),a.lineJoin=M(A.lineJoin,"miter"),a.lineWidth=S,a.strokeStyle=M(A.strokeStyle,c),a.setLineDash(M(A.lineDash,[])),o.usePointStyle){const k={radius:u*Math.SQRT2/2,pointStyle:A.pointStyle,rotation:A.rotation,borderWidth:S},v=r.xPlus(y,N/2),_=C+h;Dc(a,k,v,_,o.pointStyleWidth&&N)}else{const k=C+Math.max((l-u)/2,0),v=r.leftForLtr(y,N),_=Nt(A.borderRadius);a.beginPath(),Object.values(_).some(te=>te!==0)?fi(a,{x:v,y:k,w:N,h:u,radius:_}):a.rect(v,k,N,u),a.fill(),S!==0&&a.stroke()}a.restore()},B=function(y,C,A){Bt(a,A.text,y,C+b/2,d,{strikethrough:A.hidden,textAlign:r.textAlign(A.textAlign)})},D=this.isHorizontal(),O=this._computeTitleHeight();D?g={x:se(s,this.left+f,this.right-n[0]),y:this.top+f+O,line:0}:g={x:this.left+f,y:se(s,this.top+O+f,this.bottom-t[0].height),line:0},Gc(this.ctx,e.textDirection);const x=b+f;this.legendItems.forEach((y,C)=>{a.strokeStyle=y.fontColor,a.fillStyle=y.fontColor;const A=a.measureText(y.text).width,S=r.textAlign(y.textAlign||(y.textAlign=o.textAlign)),k=N+h+A;let v=g.x,_=g.y;r.setWidth(this.width),D?C>0&&v+k+f>this.right&&(_=g.y+=x,g.line++,v=g.x=se(s,this.left+f,this.right-n[g.line])):C>0&&_+x>this.bottom&&(v=g.x=v+t[g.line].width+f,g.line++,_=g.y=se(s,this.top+O+f,this.bottom-t[g.line].height));const te=r.x(v);if(m(te,_,y),v=A4(S,v+N+h,D?v+k:this.right,e.rtl),B(r.x(v),_,y),D)g.x+=k+f;else if(typeof y.text!="string"){const he=d.lineHeight;g.y+=tr(y,he)}else g.y+=x}),wc(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,n=X(t.font),a=ce(t.padding);if(!t.display)return;const s=Ct(e.rtl,this.left,this.width),o=this.ctx,c=t.position,r=n.size/2,d=a.top+r;let f,l=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),f=this.top+d,l=se(e.align,l,this.right-h);else{const N=this.columnSizes.reduce((u,b)=>Math.max(u,b.height),0);f=d+se(e.align,this.top,this.bottom-N-e.labels.padding-this._computeTitleHeight())}const g=se(c,l,l+h);o.textAlign=s.textAlign(pa(c)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=n.string,Bt(o,t.text,g,f,n)}_computeTitleHeight(){const e=this.options.title,t=X(e.font),n=ce(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,a,s;if(Qe(e,this.left,this.right)&&Qe(t,this.top,this.bottom)){for(s=this.legendHitBoxes,n=0;n<s.length;++n)if(a=s[n],Qe(e,a.left,a.left+a.width)&&Qe(t,a.top,a.top+a.height))return this.legendItems[n]}return null}handleEvent(e){const t=this.options;if(!s5(e.type,t))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,s=t5(a,n);a&&!s&&I(t.onLeave,[e,a,this],this),this._hoveredItem=n,n&&!s&&I(t.onHover,[e,n,this],this)}else n&&I(t.onClick,[e,n,this],this)}}function i5(i,e,t,n,a){const s=n5(n,i,e,t),o=a5(a,n,e.lineHeight);return{itemWidth:s,itemHeight:o}}function n5(i,e,t,n){let a=i.text;return a&&typeof a!="string"&&(a=a.reduce((s,o)=>s.length>o.length?s:o)),e+t.size/2+n.measureText(a).width}function a5(i,e,t){let n=i;return typeof e.text!="string"&&(n=tr(e,t)),n}function tr(i,e){const t=i.text?i.text.length+.5:0;return e*t}function s5(i,e){return!!((i==="mousemove"||i==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(i==="click"||i==="mouseup"))}var o5={id:"legend",_element:io,start(i,e,t){const n=i.legend=new io({ctx:i.ctx,options:t,chart:i});oe.configure(i,n,t),oe.addBox(i,n)},stop(i){oe.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,e,t){const n=i.legend;oe.configure(i,n,t),n.options=t},afterUpdate(i){const e=i.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(i,e){e.replay||i.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,e,t){const n=e.datasetIndex,a=t.chart;a.isDatasetVisible(n)?(a.hide(n),e.hidden=!0):(a.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const e=i.data.datasets,{labels:{usePointStyle:t,pointStyle:n,textAlign:a,color:s,useBorderRadius:o,borderRadius:c}}=i.legend.options;return i._getSortedDatasetMetas().map(r=>{const d=r.controller.getStyle(t?0:void 0),f=ce(d.borderWidth);return{text:e[r.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!r.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:n||d.pointStyle,rotation:d.rotation,textAlign:a||d.textAlign,borderRadius:o&&(c||d.borderRadius),datasetIndex:r.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class va extends Ce{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const a=F(n.text)?n.text.length:1;this._padding=ce(n.padding);const s=a*X(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:n,bottom:a,right:s,options:o}=this,c=o.align;let r=0,d,f,l;return this.isHorizontal()?(f=se(c,n,s),l=t+e,d=s-n):(o.position==="left"?(f=n+e,l=se(c,a,t),r=H*-.5):(f=s-e,l=se(c,t,a),r=H*.5),d=a-t),{titleX:f,titleY:l,maxWidth:d,rotation:r}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const n=X(t.font),s=n.lineHeight/2+this._padding.top,{titleX:o,titleY:c,maxWidth:r,rotation:d}=this._drawArgs(s);Bt(e,t.text,0,0,n,{color:t.color,maxWidth:r,rotation:d,textAlign:pa(t.align),textBaseline:"middle",translation:[o,c]})}}function c5(i,e){const t=new va({ctx:i.ctx,options:e,chart:i});oe.configure(i,t,e),oe.addBox(i,t),i.titleBlock=t}var r5={id:"title",_element:va,start(i,e,t){c5(i,t)},stop(i){const e=i.titleBlock;oe.removeBox(i,e),delete i.titleBlock},beforeUpdate(i,e,t){const n=i.titleBlock;oe.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Mi=new WeakMap;var d5={id:"subtitle",start(i,e,t){const n=new va({ctx:i.ctx,options:t,chart:i});oe.configure(i,n,t),oe.addBox(i,n),Mi.set(i,n)},stop(i){oe.removeBox(i,Mi.get(i)),Mi.delete(i)},beforeUpdate(i,e,t){const n=Mi.get(i);oe.configure(i,n,t),n.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Zt={average(i){if(!i.length)return!1;let e,t,n=0,a=0,s=0;for(e=0,t=i.length;e<t;++e){const o=i[e].element;if(o&&o.hasValue()){const c=o.tooltipPosition();n+=c.x,a+=c.y,++s}}return{x:n/s,y:a/s}},nearest(i,e){if(!i.length)return!1;let t=e.x,n=e.y,a=Number.POSITIVE_INFINITY,s,o,c;for(s=0,o=i.length;s<o;++s){const r=i[s].element;if(r&&r.hasValue()){const d=r.getCenterPoint(),f=In(e,d);f<a&&(a=f,c=r)}}if(c){const r=c.tooltipPosition();t=r.x,n=r.y}return{x:t,y:n}}};function ye(i,e){return e&&(F(e)?Array.prototype.push.apply(i,e):i.push(e)),i}function _e(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function f5(i,e){const{element:t,datasetIndex:n,index:a}=e,s=i.getDatasetMeta(n).controller,{label:o,value:c}=s.getLabelAndValue(a);return{chart:i,label:o,parsed:s.getParsed(a),raw:i.data.datasets[n].data[a],formattedValue:c,dataset:s.getDataset(),dataIndex:a,datasetIndex:n,element:t}}function no(i,e){const t=i.chart.ctx,{body:n,footer:a,title:s}=i,{boxWidth:o,boxHeight:c}=e,r=X(e.bodyFont),d=X(e.titleFont),f=X(e.footerFont),l=s.length,h=a.length,g=n.length,N=ce(e.padding);let u=N.height,b=0,m=n.reduce((O,x)=>O+x.before.length+x.lines.length+x.after.length,0);if(m+=i.beforeBody.length+i.afterBody.length,l&&(u+=l*d.lineHeight+(l-1)*e.titleSpacing+e.titleMarginBottom),m){const O=e.displayColors?Math.max(c,r.lineHeight):r.lineHeight;u+=g*O+(m-g)*r.lineHeight+(m-1)*e.bodySpacing}h&&(u+=e.footerMarginTop+h*f.lineHeight+(h-1)*e.footerSpacing);let B=0;const D=function(O){b=Math.max(b,t.measureText(O).width+B)};return t.save(),t.font=d.string,L(i.title,D),t.font=r.string,L(i.beforeBody.concat(i.afterBody),D),B=e.displayColors?o+2+e.boxPadding:0,L(n,O=>{L(O.before,D),L(O.lines,D),L(O.after,D)}),B=0,t.font=f.string,L(i.footer,D),t.restore(),b+=N.width,{width:b,height:u}}function l5(i,e){const{y:t,height:n}=e;return t<n/2?"top":t>i.height-n/2?"bottom":"center"}function h5(i,e,t,n){const{x:a,width:s}=n,o=t.caretSize+t.caretPadding;if(i==="left"&&a+s+o>e.width||i==="right"&&a-s-o<0)return!0}function N5(i,e,t,n){const{x:a,width:s}=t,{width:o,chartArea:{left:c,right:r}}=i;let d="center";return n==="center"?d=a<=(c+r)/2?"left":"right":a<=s/2?d="left":a>=o-s/2&&(d="right"),h5(d,i,e,t)&&(d="center"),d}function ao(i,e,t){const n=t.yAlign||e.yAlign||l5(i,t);return{xAlign:t.xAlign||e.xAlign||N5(i,e,t,n),yAlign:n}}function g5(i,e){let{x:t,width:n}=i;return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function u5(i,e,t){let{y:n,height:a}=i;return e==="top"?n+=t:e==="bottom"?n-=a+t:n-=a/2,n}function so(i,e,t,n){const{caretSize:a,caretPadding:s,cornerRadius:o}=i,{xAlign:c,yAlign:r}=t,d=a+s,{topLeft:f,topRight:l,bottomLeft:h,bottomRight:g}=Nt(o);let N=g5(e,c);const u=u5(e,r,d);return r==="center"?c==="left"?N+=d:c==="right"&&(N-=d):c==="left"?N-=Math.max(f,h)+a:c==="right"&&(N+=Math.max(l,g)+a),{x:ee(N,0,n.width-e.width),y:ee(u,0,n.height-e.height)}}function _i(i,e,t){const n=ce(t.padding);return e==="center"?i.x+i.width/2:e==="right"?i.x+i.width-n.right:i.x+n.left}function oo(i){return ye([],_e(i))}function b5(i,e,t){return nt(i,{tooltip:e,tooltipItems:t,type:"tooltip"})}function co(i,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?i.override(t):i}const ir={beforeTitle:we,title(i){if(i.length>0){const e=i[0],t=e.chart.data.labels,n=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return t[e.dataIndex]}return""},afterTitle:we,beforeBody:we,beforeLabel:we,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let e=i.dataset.label||"";e&&(e+=": ");const t=i.formattedValue;return Q(t)||(e+=t),e},labelColor(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const t=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:we,afterBody:we,beforeFooter:we,footer:we,afterFooter:we};function re(i,e,t,n){const a=i[e].call(t,n);return typeof a>"u"?ir[e].call(t,n):a}class qn extends Ce{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,n=this.options.setContext(this.getContext()),a=n.enabled&&t.options.animation&&n.animations,s=new Rc(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=b5(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:n}=t,a=re(n,"beforeTitle",this,e),s=re(n,"title",this,e),o=re(n,"afterTitle",this,e);let c=[];return c=ye(c,_e(a)),c=ye(c,_e(s)),c=ye(c,_e(o)),c}getBeforeBody(e,t){return oo(re(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:n}=t,a=[];return L(e,s=>{const o={before:[],lines:[],after:[]},c=co(n,s);ye(o.before,_e(re(c,"beforeLabel",this,s))),ye(o.lines,re(c,"label",this,s)),ye(o.after,_e(re(c,"afterLabel",this,s))),a.push(o)}),a}getAfterBody(e,t){return oo(re(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:n}=t,a=re(n,"beforeFooter",this,e),s=re(n,"footer",this,e),o=re(n,"afterFooter",this,e);let c=[];return c=ye(c,_e(a)),c=ye(c,_e(s)),c=ye(c,_e(o)),c}_createItems(e){const t=this._active,n=this.chart.data,a=[],s=[],o=[];let c=[],r,d;for(r=0,d=t.length;r<d;++r)c.push(f5(this.chart,t[r]));return e.filter&&(c=c.filter((f,l,h)=>e.filter(f,l,h,n))),e.itemSort&&(c=c.sort((f,l)=>e.itemSort(f,l,n))),L(c,f=>{const l=co(e.callbacks,f);a.push(re(l,"labelColor",this,f)),s.push(re(l,"labelPointStyle",this,f)),o.push(re(l,"labelTextColor",this,f))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=c,c}update(e,t){const n=this.options.setContext(this.getContext()),a=this._active;let s,o=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const c=Zt[n.position].call(this,a,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const r=this._size=no(this,n),d=Object.assign({},c,r),f=ao(this.chart,n,d),l=so(n,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,s={opacity:1,x:l.x,y:l.y,width:r.width,height:r.height,caretX:c.x,caretY:c.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,a){const s=this.getCaretPosition(e,n,a);t.lineTo(s.x1,s.y1),t.lineTo(s.x2,s.y2),t.lineTo(s.x3,s.y3)}getCaretPosition(e,t,n){const{xAlign:a,yAlign:s}=this,{caretSize:o,cornerRadius:c}=n,{topLeft:r,topRight:d,bottomLeft:f,bottomRight:l}=Nt(c),{x:h,y:g}=e,{width:N,height:u}=t;let b,m,B,D,O,x;return s==="center"?(O=g+u/2,a==="left"?(b=h,m=b-o,D=O+o,x=O-o):(b=h+N,m=b+o,D=O-o,x=O+o),B=b):(a==="left"?m=h+Math.max(r,f)+o:a==="right"?m=h+N-Math.max(d,l)-o:m=this.caretX,s==="top"?(D=g,O=D-o,b=m-o,B=m+o):(D=g+u,O=D+o,b=m+o,B=m-o),x=D),{x1:b,x2:m,x3:B,y1:D,y2:O,y3:x}}drawTitle(e,t,n){const a=this.title,s=a.length;let o,c,r;if(s){const d=Ct(n.rtl,this.x,this.width);for(e.x=_i(this,n.titleAlign,n),t.textAlign=d.textAlign(n.titleAlign),t.textBaseline="middle",o=X(n.titleFont),c=n.titleSpacing,t.fillStyle=n.titleColor,t.font=o.string,r=0;r<s;++r)t.fillText(a[r],d.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+c,r+1===s&&(e.y+=n.titleMarginBottom-c)}}_drawColorBox(e,t,n,a,s){const o=this.labelColors[n],c=this.labelPointStyles[n],{boxHeight:r,boxWidth:d}=s,f=X(s.bodyFont),l=_i(this,"left",s),h=a.x(l),g=r<f.lineHeight?(f.lineHeight-r)/2:0,N=t.y+g;if(s.usePointStyle){const u={radius:Math.min(d,r)/2,pointStyle:c.pointStyle,rotation:c.rotation,borderWidth:1},b=a.leftForLtr(h,d)+d/2,m=N+r/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,Tn(e,u,b,m),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Tn(e,u,b,m)}else{e.lineWidth=P(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const u=a.leftForLtr(h,d),b=a.leftForLtr(a.xPlus(h,1),d-2),m=Nt(o.borderRadius);Object.values(m).some(B=>B!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,fi(e,{x:u,y:N,w:d,h:r,radius:m}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),fi(e,{x:b,y:N+1,w:d-2,h:r-2,radius:m}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(u,N,d,r),e.strokeRect(u,N,d,r),e.fillStyle=o.backgroundColor,e.fillRect(b,N+1,d-2,r-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){const{body:a}=this,{bodySpacing:s,bodyAlign:o,displayColors:c,boxHeight:r,boxWidth:d,boxPadding:f}=n,l=X(n.bodyFont);let h=l.lineHeight,g=0;const N=Ct(n.rtl,this.x,this.width),u=function(A){t.fillText(A,N.x(e.x+g),e.y+h/2),e.y+=h+s},b=N.textAlign(o);let m,B,D,O,x,y,C;for(t.textAlign=o,t.textBaseline="middle",t.font=l.string,e.x=_i(this,b,n),t.fillStyle=n.bodyColor,L(this.beforeBody,u),g=c&&b!=="right"?o==="center"?d/2+f:d+2+f:0,O=0,y=a.length;O<y;++O){for(m=a[O],B=this.labelTextColors[O],t.fillStyle=B,L(m.before,u),D=m.lines,c&&D.length&&(this._drawColorBox(t,e,O,N,n),h=Math.max(l.lineHeight,r)),x=0,C=D.length;x<C;++x)u(D[x]),h=l.lineHeight;L(m.after,u)}g=0,h=l.lineHeight,L(this.afterBody,u),e.y-=s}drawFooter(e,t,n){const a=this.footer,s=a.length;let o,c;if(s){const r=Ct(n.rtl,this.x,this.width);for(e.x=_i(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=r.textAlign(n.footerAlign),t.textBaseline="middle",o=X(n.footerFont),t.fillStyle=n.footerColor,t.font=o.string,c=0;c<s;++c)t.fillText(a[c],r.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+n.footerSpacing}}drawBackground(e,t,n,a){const{xAlign:s,yAlign:o}=this,{x:c,y:r}=e,{width:d,height:f}=n,{topLeft:l,topRight:h,bottomLeft:g,bottomRight:N}=Nt(a.cornerRadius);t.fillStyle=a.backgroundColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.beginPath(),t.moveTo(c+l,r),o==="top"&&this.drawCaret(e,t,n,a),t.lineTo(c+d-h,r),t.quadraticCurveTo(c+d,r,c+d,r+h),o==="center"&&s==="right"&&this.drawCaret(e,t,n,a),t.lineTo(c+d,r+f-N),t.quadraticCurveTo(c+d,r+f,c+d-N,r+f),o==="bottom"&&this.drawCaret(e,t,n,a),t.lineTo(c+g,r+f),t.quadraticCurveTo(c,r+f,c,r+f-g),o==="center"&&s==="left"&&this.drawCaret(e,t,n,a),t.lineTo(c,r+l),t.quadraticCurveTo(c,r,c+l,r),t.closePath(),t.fill(),a.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,n=this.$animations,a=n&&n.x,s=n&&n.y;if(a||s){const o=Zt[e.position].call(this,this._active,this._eventPosition);if(!o)return;const c=this._size=no(this,e),r=Object.assign({},o,this._size),d=ao(t,e,r),f=so(e,r,d,t);(a._to!==f.x||s._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=c.width,this.height=c.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(t);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=ce(t.padding),c=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&c&&(e.save(),e.globalAlpha=n,this.drawBackground(s,e,a,t),Gc(e,t.textDirection),s.y+=o.top,this.drawTitle(s,e,t),this.drawBody(s,e,t),this.drawFooter(s,e,t),wc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const n=this._active,a=e.map(({datasetIndex:c,index:r})=>{const d=this.chart.getDatasetMeta(c);if(!d)throw new Error("Cannot find a dataset at index "+c);return{datasetIndex:c,element:d.data[r],index:r}}),s=!Ji(n,a),o=this._positionChanged(a,t);(s||o)&&(this._active=a,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],o=this._getActiveElements(e,s,t,n),c=this._positionChanged(o,e),r=t||!Ji(o,s)||c;return r&&(this._active=o,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),r}_getActiveElements(e,t,n,a){const s=this.options;if(e.type==="mouseout")return[];if(!a)return t;const o=this.chart.getElementsAtEventForMode(e,s.mode,s,n);return s.reverse&&o.reverse(),o}_positionChanged(e,t){const{caretX:n,caretY:a,options:s}=this,o=Zt[s.position].call(this,e,t);return o!==!1&&(n!==o.x||a!==o.y)}}V(qn,"positioners",Zt);var B5={id:"tooltip",_element:qn,positioners:Zt,afterInit(i,e,t){t&&(i.tooltip=new qn({chart:i,options:t}))},beforeUpdate(i,e,t){i.tooltip&&i.tooltip.initialize(t)},reset(i,e,t){i.tooltip&&i.tooltip.initialize(t)},afterDraw(i){const e=i.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(i.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",t)}},afterEvent(i,e){if(i.tooltip){const t=e.replay;i.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,e)=>e.bodyFont.size,boxWidth:(i,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ir},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},m5=Object.freeze({__proto__:null,Colors:Gh,Decimation:Ph,Filler:e5,Legend:o5,SubTitle:d5,Title:r5,Tooltip:B5});const x5=(i,e,t,n)=>(typeof e=="string"?(t=i.push(e)-1,n.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function p5(i,e,t,n){const a=i.indexOf(e);if(a===-1)return x5(i,e,t,n);const s=i.lastIndexOf(e);return a!==s?t:a}const D5=(i,e)=>i===null?null:ee(Math.round(i),0,e);function ro(i){const e=this.getLabels();return i>=0&&i<e.length?e[i]:i}class Xn extends pt{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const n=this.getLabels();for(const{index:a,label:s}of t)n[a]===s&&n.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(Q(e))return null;const n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:p5(n,e,M(t,e),this._addedLabels),D5(t,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:n,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),t||(a=this.getLabels().length-1)),this.min=n,this.max=a}buildTicks(){const e=this.min,t=this.max,n=this.options.offset,a=[];let s=this.getLabels();s=e===0&&t===s.length-1?s:s.slice(e,t+1),this._valueRange=Math.max(s.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=e;o<=t;o++)a.push({value:o});return a}getLabelForValue(e){return ro.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}V(Xn,"id","category"),V(Xn,"defaults",{ticks:{callback:ro}});function O5(i,e){const t=[],{bounds:a,step:s,min:o,max:c,precision:r,count:d,maxTicks:f,maxDigits:l,includeBounds:h}=i,g=s||1,N=f-1,{min:u,max:b}=e,m=!Q(o),B=!Q(c),D=!Q(d),O=(b-u)/(l+1);let x=is((b-u)/N/g)*g,y,C,A,S;if(x<1e-14&&!m&&!B)return[{value:u},{value:b}];S=Math.ceil(b/x)-Math.floor(u/x),S>N&&(x=is(S*x/N/g)*g),Q(r)||(y=Math.pow(10,r),x=Math.ceil(x*y)/y),a==="ticks"?(C=Math.floor(u/x)*x,A=Math.ceil(b/x)*x):(C=u,A=b),m&&B&&s&&b4((c-o)/s,x/1e3)?(S=Math.round(Math.min((c-o)/x,f)),x=(c-o)/S,C=o,A=c):D?(C=m?o:C,A=B?c:A,S=d-1,x=(A-C)/S):(S=(A-C)/x,Jt(S,Math.round(S),x/1e3)?S=Math.round(S):S=Math.ceil(S));const k=Math.max(ns(x),ns(C));y=Math.pow(10,Q(r)?k:r),C=Math.round(C*y)/y,A=Math.round(A*y)/y;let v=0;for(m&&(h&&C!==o?(t.push({value:o}),C<o&&v++,Jt(Math.round((C+v*x)*y)/y,o,fo(o,O,i))&&v++):C<o&&v++);v<S;++v){const _=Math.round((C+v*x)*y)/y;if(B&&_>c)break;t.push({value:_})}return B&&h&&A!==c?t.length&&Jt(t[t.length-1].value,c,fo(c,O,i))?t[t.length-1].value=c:t.push({value:c}):(!B||A===c)&&t.push({value:A}),t}function fo(i,e,{horizontal:t,minRotation:n}){const a=Ae(n),s=(t?Math.sin(a):Math.cos(a))||.001,o=.75*e*(""+i).length;return Math.min(e/s,o)}class on extends pt{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return Q(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:a,max:s}=this;const o=r=>a=t?a:r,c=r=>s=n?s:r;if(e){const r=ve(a),d=ve(s);r<0&&d<0?c(0):r>0&&d>0&&o(0)}if(a===s){let r=s===0?1:Math.abs(s*.05);c(s+r),e||o(a-r)}this.min=a,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:n}=e,a;return n?(a=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),t=t||11),t&&(a=Math.min(t,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const a={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},s=this._range||this,o=O5(a,s);return e.bounds==="ticks"&&hc(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const a=(n-t)/Math.max(e.length-1,1)/2;t-=a,n+=a}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return mi(e,this.chart.options.locale,this.options.ticks.format)}}class Jn extends on{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=j(e)?e:0,this.max=j(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,n=Ae(this.options.ticks.minRotation),a=(e?Math.sin(n):Math.cos(n))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,s.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}V(Jn,"id","linear"),V(Jn,"defaults",{ticks:{callback:rn.formatters.numeric}});const hi=i=>Math.floor(Ue(i)),ct=(i,e)=>Math.pow(10,hi(i)+e);function lo(i){return i/Math.pow(10,hi(i))===1}function ho(i,e,t){const n=Math.pow(10,t),a=Math.floor(i/n);return Math.ceil(e/n)-a}function A5(i,e){const t=e-i;let n=hi(t);for(;ho(i,e,n)>10;)n++;for(;ho(i,e,n)<10;)n--;return Math.min(n,hi(i))}function V5(i,{min:e,max:t}){e=ue(i.min,e);const n=[],a=hi(e);let s=A5(e,t),o=s<0?Math.pow(10,Math.abs(s)):1;const c=Math.pow(10,s),r=a>s?Math.pow(10,a):0,d=Math.round((e-r)*o)/o,f=Math.floor((e-r)/c/10)*c*10;let l=Math.floor((d-f)/Math.pow(10,s)),h=ue(i.min,Math.round((r+f+l*Math.pow(10,s))*o)/o);for(;h<t;)n.push({value:h,major:lo(h),significand:l}),l>=10?l=l<15?15:20:l++,l>=20&&(s++,l=2,o=s>=0?1:o),h=Math.round((r+f+l*Math.pow(10,s))*o)/o;const g=ue(i.max,h);return n.push({value:g,major:lo(g),significand:l}),n}class $n extends pt{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const n=on.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return j(n)&&n>0?n:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=j(e)?Math.max(0,e):null,this.max=j(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!j(this._userMin)&&(this.min=e===ct(this.min,0)?ct(this.min,-1):ct(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let n=this.min,a=this.max;const s=c=>n=e?n:c,o=c=>a=t?a:c;n===a&&(n<=0?(s(1),o(10)):(s(ct(n,-1)),o(ct(a,1)))),n<=0&&s(ct(a,-1)),a<=0&&o(ct(n,1)),this.min=n,this.max=a}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},n=V5(t,this);return e.bounds==="ticks"&&hc(n,this,"value"),e.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(e){return e===void 0?"0":mi(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Ue(e),this._valueRange=Ue(this.max)-Ue(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Ue(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}V($n,"id","logarithmic"),V($n,"defaults",{ticks:{callback:rn.formatters.logarithmic,major:{enabled:!0}}});function ea(i){const e=i.ticks;if(e.display&&i.display){const t=ce(e.backdropPadding);return M(e.font&&e.font.size,Y.font.size)+t.height}return 0}function C5(i,e,t){return t=F(t)?t:[t],{w:_4(i,e.string,t),h:t.length*e.lineHeight}}function No(i,e,t,n,a){return i===n||i===a?{start:e-t/2,end:e+t/2}:i<n||i>a?{start:e-t,end:e}:{start:e,end:e+t}}function y5(i){const e={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},t=Object.assign({},e),n=[],a=[],s=i._pointLabels.length,o=i.options.pointLabels,c=o.centerPointLabels?H/s:0;for(let r=0;r<s;r++){const d=o.setContext(i.getPointLabelContext(r));a[r]=d.padding;const f=i.getPointPosition(r,i.drawingArea+a[r],c),l=X(d.font),h=C5(i.ctx,l,i._pointLabels[r]);n[r]=h;const g=be(i.getIndexAngle(r)+c),N=Math.round(ma(g)),u=No(N,f.x,h.w,0,180),b=No(N,f.y,h.h,90,270);S5(t,e,g,u,b)}i.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),i._pointLabelItems=G5(i,n,a)}function S5(i,e,t,n,a){const s=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t));let c=0,r=0;n.start<e.l?(c=(e.l-n.start)/s,i.l=Math.min(i.l,e.l-c)):n.end>e.r&&(c=(n.end-e.r)/s,i.r=Math.max(i.r,e.r+c)),a.start<e.t?(r=(e.t-a.start)/o,i.t=Math.min(i.t,e.t-r)):a.end>e.b&&(r=(a.end-e.b)/o,i.b=Math.max(i.b,e.b+r))}function k5(i,e,t){const n=i.drawingArea,{extra:a,additionalAngle:s,padding:o,size:c}=t,r=i.getPointPosition(e,n+a+o,s),d=Math.round(ma(be(r.angle+U))),f=_5(r.y,c.h,d),l=w5(d),h=M5(r.x,c.w,l);return{visible:!0,x:r.x,y:f,textAlign:l,left:h,top:f,right:h+c.w,bottom:f+c.h}}function v5(i,e){if(!e)return!0;const{left:t,top:n,right:a,bottom:s}=i;return!(Le({x:t,y:n},e)||Le({x:t,y:s},e)||Le({x:a,y:n},e)||Le({x:a,y:s},e))}function G5(i,e,t){const n=[],a=i._pointLabels.length,s=i.options,{centerPointLabels:o,display:c}=s.pointLabels,r={extra:ea(s)/2,additionalAngle:o?H/a:0};let d;for(let f=0;f<a;f++){r.padding=t[f],r.size=e[f];const l=k5(i,f,r);n.push(l),c==="auto"&&(l.visible=v5(l,d),l.visible&&(d=l))}return n}function w5(i){return i===0||i===180?"center":i<180?"left":"right"}function M5(i,e,t){return t==="right"?i-=e:t==="center"&&(i-=e/2),i}function _5(i,e,t){return t===90||t===270?i-=e/2:(t>270||t<90)&&(i-=e),i}function P5(i,e,t){const{left:n,top:a,right:s,bottom:o}=t,{backdropColor:c}=e;if(!Q(c)){const r=Nt(e.borderRadius),d=ce(e.backdropPadding);i.fillStyle=c;const f=n-d.left,l=a-d.top,h=s-n+d.width,g=o-a+d.height;Object.values(r).some(N=>N!==0)?(i.beginPath(),fi(i,{x:f,y:l,w:h,h:g,radius:r}),i.fill()):i.fillRect(f,l,h,g)}}function R5(i,e){const{ctx:t,options:{pointLabels:n}}=i;for(let a=e-1;a>=0;a--){const s=i._pointLabelItems[a];if(!s.visible)continue;const o=n.setContext(i.getPointLabelContext(a));P5(t,o,s);const c=X(o.font),{x:r,y:d,textAlign:f}=s;Bt(t,i._pointLabels[a],r,d+c.lineHeight/2,c,{color:o.color,textAlign:f,textBaseline:"middle"})}}function nr(i,e,t,n){const{ctx:a}=i;if(t)a.arc(i.xCenter,i.yCenter,e,0,T);else{let s=i.getPointPosition(0,e);a.moveTo(s.x,s.y);for(let o=1;o<n;o++)s=i.getPointPosition(o,e),a.lineTo(s.x,s.y)}}function E5(i,e,t,n,a){const s=i.ctx,o=e.circular,{color:c,lineWidth:r}=e;!o&&!n||!c||!r||t<0||(s.save(),s.strokeStyle=c,s.lineWidth=r,s.setLineDash(a.dash),s.lineDashOffset=a.dashOffset,s.beginPath(),nr(i,t,o,n),s.closePath(),s.stroke(),s.restore())}function Q5(i,e,t){return nt(i,{label:t,index:e,type:"pointLabel"})}class qt extends on{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=ce(ea(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=j(e)&&!isNaN(e)?e:0,this.max=j(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ea(this.options))}generateTickLabels(e){on.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,n)=>{const a=I(this.options.pointLabels.callback,[t,n],this);return a||a===0?a:""}).filter((t,n)=>this.chart.getDataVisibility(n))}fit(){const e=this.options;e.display&&e.pointLabels.display?y5(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,a){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,a))}getIndexAngle(e){const t=T/(this._pointLabels.length||1),n=this.options.startAngle||0;return be(e*t+Ae(n))}getDistanceFromCenterForValue(e){if(Q(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(Q(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const n=t[e];return Q5(this.getContext(),e,n)}}getPointPosition(e,t,n=0){const a=this.getIndexAngle(e)-U+n;return{x:Math.cos(a)*t+this.xCenter,y:Math.sin(a)*t+this.yCenter,angle:a}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:n,right:a,bottom:s}=this._pointLabelItems[e];return{left:t,top:n,right:a,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const n=this.ctx;n.save(),n.beginPath(),nr(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:n,grid:a,border:s}=t,o=this._pointLabels.length;let c,r,d;if(t.pointLabels.display&&R5(this,o),a.display&&this.ticks.forEach((f,l)=>{if(l!==0){r=this.getDistanceFromCenterForValue(f.value);const h=this.getContext(l),g=a.setContext(h),N=s.setContext(h);E5(this,g,r,o,N)}}),n.display){for(e.save(),c=o-1;c>=0;c--){const f=n.setContext(this.getPointLabelContext(c)),{color:l,lineWidth:h}=f;!h||!l||(e.lineWidth=h,e.strokeStyle=l,e.setLineDash(f.borderDash),e.lineDashOffset=f.borderDashOffset,r=this.getDistanceFromCenterForValue(t.ticks.reverse?this.min:this.max),d=this.getPointPosition(c,r),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(d.x,d.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;const a=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((c,r)=>{if(r===0&&!t.reverse)return;const d=n.setContext(this.getContext(r)),f=X(d.font);if(s=this.getDistanceFromCenterForValue(this.ticks[r].value),d.showLabelBackdrop){e.font=f.string,o=e.measureText(c.label).width,e.fillStyle=d.backdropColor;const l=ce(d.backdropPadding);e.fillRect(-o/2-l.left,-s-f.size/2-l.top,o+l.width,f.size+l.height)}Bt(e,c.label,0,-s,f,{color:d.color})}),e.restore()}drawTitle(){}}V(qt,"id","radialLinear"),V(qt,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:rn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),V(qt,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),V(qt,"descriptors",{angleLines:{_fallback:"grid"}});const hn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},de=Object.keys(hn);function K5(i,e){return i-e}function go(i,e){if(Q(e))return null;const t=i._adapter,{parser:n,round:a,isoWeekday:s}=i._parseOpts;let o=e;return typeof n=="function"&&(o=n(o)),j(o)||(o=typeof n=="string"?t.parse(o,n):t.parse(o)),o===null?null:(a&&(o=a==="week"&&(St(s)||s===!0)?t.startOf(o,"isoWeek",s):t.startOf(o,a)),+o)}function uo(i,e,t,n){const a=de.length;for(let s=de.indexOf(i);s<a-1;++s){const o=hn[de[s]],c=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-e)/(c*o.size))<=n)return de[s]}return de[a-1]}function L5(i,e,t,n,a){for(let s=de.length-1;s>=de.indexOf(t);s--){const o=de[s];if(hn[o].common&&i._adapter.diff(a,n,o)>=e-1)return o}return de[t?de.indexOf(t):0]}function z5(i){for(let e=de.indexOf(i)+1,t=de.length;e<t;++e)if(hn[de[e]].common)return de[e]}function bo(i,e,t){if(!t)i[e]=!0;else if(t.length){const{lo:n,hi:a}=xa(t,e),s=t[n]>=e?t[n]:t[a];i[s]=!0}}function I5(i,e,t,n){const a=i._adapter,s=+a.startOf(e[0].value,n),o=e[e.length-1].value;let c,r;for(c=s;c<=o;c=+a.add(c,1,n))r=t[c],r>=0&&(e[r].major=!0);return e}function Bo(i,e,t){const n=[],a={},s=e.length;let o,c;for(o=0;o<s;++o)c=e[o],a[c]=o,n.push({value:c,major:!1});return s===0||!t?n:I5(i,n,a,t)}class Ni extends pt{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const n=e.time||(e.time={}),a=this._adapter=new Zl._date(e.adapters.date);a.init(t),Xt(n.displayFormats,a.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:go(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,n=e.time.unit||"day";let{min:a,max:s,minDefined:o,maxDefined:c}=this.getUserBounds();function r(d){!o&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!c&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!o||!c)&&(r(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&r(this.getMinMax(!1))),a=j(a)&&!isNaN(a)?a:+t.startOf(Date.now(),n),s=j(s)&&!isNaN(s)?s:+t.endOf(Date.now(),n)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){const e=this.options,t=e.time,n=e.ticks,a=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,o=this.max,c=p4(a,s,o);return this._unit=t.unit||(n.autoSkip?uo(t.minUnit,this.min,this.max,this._getLabelCapacity(s)):L5(this,c.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:z5(this._unit),this.initOffsets(a),e.reverse&&c.reverse(),Bo(this,c,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,a,s;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?t=1-a:t=(this.getDecimalForValue(e[1])-a)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?n=s:n=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;t=ee(t,0,o),n=ee(n,0,o),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){const e=this._adapter,t=this.min,n=this.max,a=this.options,s=a.time,o=s.unit||uo(s.minUnit,t,n,this._getLabelCapacity(t)),c=M(a.ticks.stepSize,1),r=o==="week"?s.isoWeekday:!1,d=St(r)||r===!0,f={};let l=t,h,g;if(d&&(l=+e.startOf(l,"isoWeek",r)),l=+e.startOf(l,d?"day":o),e.diff(n,t,o)>1e5*c)throw new Error(t+" and "+n+" are too far apart with stepSize of "+c+" "+o);const N=a.ticks.source==="data"&&this.getDataTimestamps();for(h=l,g=0;h<n;h=+e.add(h,c,o),g++)bo(f,h,N);return(h===n||a.bounds==="ticks"||g===1)&&bo(f,h,N),Object.keys(f).sort((u,b)=>u-b).map(u=>+u)}getLabelForValue(e){const t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){const a=this.options.time.displayFormats,s=this._unit,o=t||a[s];return this._adapter.format(e,o)}_tickFormatFunction(e,t,n,a){const s=this.options,o=s.ticks.callback;if(o)return I(o,[e,t,n],this);const c=s.time.displayFormats,r=this._unit,d=this._majorUnit,f=r&&c[r],l=d&&c[d],h=n[t],g=d&&l&&h&&h.major;return this._adapter.format(e,a||(g?l:f))}generateTickLabels(e){let t,n,a;for(t=0,n=e.length;t<n;++t)a=e[t],a.label=this._tickFormatFunction(a.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,n=this.ctx.measureText(e).width,a=Ae(this.isHorizontal()?t.maxRotation:t.minRotation),s=Math.cos(a),o=Math.sin(a),c=this._resolveTickFontOptions(0).size;return{w:n*s+c*o,h:n*o+c*s}}_getLabelCapacity(e){const t=this.options.time,n=t.displayFormats,a=n[t.unit]||n.millisecond,s=this._tickFormatFunction(e,0,Bo(this,[e],this._majorUnit),a),o=this._getLabelSize(s),c=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return c>0?c:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(t=0,n=a.length;t<n;++t)e=e.concat(a[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,n;if(e.length)return e;const a=this.getLabels();for(t=0,n=a.length;t<n;++t)e.push(go(this,a[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return uc(e.sort(K5))}}V(Ni,"id","time"),V(Ni,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Pi(i,e,t){let n=0,a=i.length-1,s,o,c,r;t?(e>=i[n].pos&&e<=i[a].pos&&({lo:n,hi:a}=Ke(i,"pos",e)),{pos:s,time:c}=i[n],{pos:o,time:r}=i[a]):(e>=i[n].time&&e<=i[a].time&&({lo:n,hi:a}=Ke(i,"time",e)),{time:s,pos:c}=i[n],{time:o,pos:r}=i[a]);const d=o-s;return d?c+(r-c)*(e-s)/d:c}class ta extends Ni{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Pi(t,this.min),this._tableRange=Pi(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:n}=this,a=[],s=[];let o,c,r,d,f;for(o=0,c=e.length;o<c;++o)d=e[o],d>=t&&d<=n&&a.push(d);if(a.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(o=0,c=a.length;o<c;++o)f=a[o+1],r=a[o-1],d=a[o],Math.round((f+r)/2)!==d&&s.push({time:d,pos:o/(c-1)});return s}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),n=this.getLabelTimestamps();return t.length&&n.length?e=this.normalize(t.concat(n)):e=t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Pi(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Pi(this._table,n*this._tableRange+this._minPos,!0)}}V(ta,"id","timeseries"),V(ta,"defaults",Ni.defaults);var F5=Object.freeze({__proto__:null,CategoryScale:Xn,LinearScale:Jn,LogarithmicScale:$n,RadialLinearScale:qt,TimeScale:Ni,TimeSeriesScale:ta});const T5=[Yl,Vh,m5,F5];Re.register(...T5);const W5={name:"Graph",props:["data"],mounted(){this.renderChart()},methods:{renderChart(){const i=document.getElementById("Graph");let e=[],t=this.data.length;for(let n=0;n<t;n++)e.push("");this.chart&&this.chart.destroy(),this.chart=new Re(i,{type:"line",data:{labels:e,datasets:[{data:this.data,fill:{target:"origin",below:"#334155",above:"#cbd5e1"},borderWidth:0,pointRadius:0,tension:.4}]},options:{plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"rgb(255,255,255)"}}}}})}},watch:{data(i){this.renderChart()}}},H5={class:"chart-container h-full w-full"},j5=p("canvas",{id:"Graph"},null,-1),U5=[j5];function Y5(i,e,t,n,a,s){return E(),K("div",H5,U5)}const Z5=et(W5,[["render",Y5]]),q5={props:{bestmove:{required:!0},moves:{required:!0}},data(){return{opening:{m:"Startin Position",t:[],a:[]},oldMoves:[]}},watch:{moves(i,e){console.log("UPDATE MOVES"),this.update()},bestmove(i,e){console.log("BESTMOVE update"),console.log(this.moves),this.update()}},methods:{update(){if(console.log("updated called"),this.oldMoves.length!=this.moves.length){if(console.log("MOOOOOOOOOOOOOVES"+this.moves),this.moves!=[]){let i=ko(this.moves);i!=null&&(this.opening=i)}this.oldMoves=JSON.parse(JSON.stringify(this.moves))}}},beforeMount(){this.update()},updated(){this.update()}},X5={class:"bg-base-300 rounded-lg h-full w-full p-2"},J5=p("br",null,null,-1),$5={class:"badge badge-accent font-bold mr-2"};function eN(i,e,t,n,a,s){return E(),K("div",X5,[wa(R(a.opening.m)+" ",1),J5,(E(!0),K(ui,null,cn(a.opening.a,(o,c)=>(E(),K("div",{key:c},[p("div",$5,R(o),1)]))),128)),wa(" "+R(t.bestmove),1)])}const tN=et(q5,[["render",eN]]),iN={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0},accuracy:{type:Number,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/standard-avatar.png"}}},beforeMount(){this.updateUser()},methods:{updateUser(){Co.getPlayer(this.username).then(i=>{this.user=i.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}}},nN={key:0,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2"},aN={class:"flex flex-row items-center"},sN=["src"],oN={class:"flex flex-col justify-center items-center"},cN={class:"text-l font-bold"},rN={class:"text-xs px-3"},dN={class:"items-center flex justify-center border border-black border-solid rounded-lg w-10 h-10 mt-6 bg-white text-black"},fN={key:1,class:"rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2 pl-2"},lN={class:"flex flex-row items-center"},hN=["src"],NN={class:"flex flex-col justify-center items-center"},gN={class:"text-l font-bold"},uN={class:"text-xs px-3"},bN={class:"items-center flex justify-center border border-white border-solid rounded-lg w-10 h-10 mt-6 bg-black"};function BN(i,e,t,n,a,s){return t.color?(E(),K("div",nN,[p("div",aN,[p("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,sN),p("div",oN,[p("h2",cN,R(a.user.username),1),p("p",rN,R(this.elo),1)])]),p("div",dN,R(this.accuracy),1)])):(E(),K("div",fN,[p("div",lN,[p("img",{class:"w-8 h-8 border-2 mr-2 rounded-lg border-accent",src:a.user.avatar,alt:""},null,8,hN),p("div",NN,[p("h2",gN,R(a.user.username),1),p("p",uN,R(this.elo),1)])]),p("div",bN,R(this.accuracy),1)]))}const mN=et(iN,[["render",BN]]);const xN={props:{square:{type:String,required:!0},annotation:{type:String,required:!0}},computed:{annotationStyle(){if(this.annotation=="")return;const[i,e]=this.square.split(""),t=i.charCodeAt(0)-97,n=8-parseInt(e,10);return{position:"absolute",left:`${t*10+25}%`,top:`${n*13}%`,transform:"translate(-50%, -50%)"}},getPath(){return console.log(this.annotation),`src/assets/anotations/${this.annotation}`}}},pN=["src"];function DN(i,e,t,n,a,s){return this.annotation!=""?(E(),K("div",{key:0,style:mo(s.annotationStyle),class:"annotation"},[p("img",{src:this.getPath,alt:"Annotation"},null,8,pN)],4)):Do("",!0)}const ON=et(xN,[["render",DN]]),AN="/pegasus/assets/pegasus-graph-golden-coin-game-4949ef63.png",VN="/pegasus/assets/loading-22969543.svg",CN="data:image/png;base64,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",yN="data:image/png;base64,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",SN="data:image/png;base64,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",kN="data:image/png;base64,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",vN="data:image/png;base64,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",GN="data:image/png;base64,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",wN="data:image/png;base64,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",MN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABLCAYAAAAmh0pZAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACjZJREFUeJztnHuMVNUZwH/fuXf2wc6yD3YXCRSfLKUg+AB81dpgm5aCJWl1iyUaoIKpiq02rWmMaUyTllpjbGusQn1EWx/Y1GCjrabQ+OCNWglYQBYQWMCdfc1jd2Z27r1f/xh23V12d2Z37+zy6C/ZZO+Zc77zzTfn+8655yWqynDQsKCyWIvi1whM9VQmC1QDE4BRQBEwGogArUAbcERhrxHdo7BLWgs3VKwNRYdDV8mlUeoXBmeISA0wB5gJ2EMQ5wDbENYruqbqhdgOX5TsBd+NEqkpKW+33SWqcisw3Vfh3flIVJ/L86xnR68JN/kp2DejfHZrcZWkuEPgx0CJL0KzIwY8LXi/qXix9agfAodslCM1UphnBX8u8FOgwA+lBklchd+2O7GVE9ZofCiChmSUhptL5inuH0DOH4oSPlOL8e6u/EvrG4MVMCij7PuW5JeUBB8C7h5sxblGkOcTbvT2wbSaARsltKhkEq63BuGSgVY2AnyIa2oq14T3DaTQgIzSuLBolifmDaBioNqNFApNIDdUvRjZmG0Zk23Gz24OXu8Zs47TyCAAAuWC91ZoYdHcrMtk01JCC4vmImYtEBiKgiNMSj29oerl2JuZMmY0SuOiktme560Dgn5pN4K0KfL1TK7Ur1FCi0om4XmbgDF+azeCNKhaV1a91FLbV4Y+Y8rBJVKA573MmWUQgAoR929HaqSwrwx9GmVUPPgocGlO1Bp5pudbwYf6+rBX92lYOHq+iv49F9pEU8rusMfusMeesMfxuBJJKTEHXE8pDgglecLEIsOMcsPMMRYTiiQXqoDo3MoXYv88ObmHUY7USGG+FdwJXOBHva7ChnqXfx112BRy2dns4Q5gvCjA7EqLRRfY3HReAMtf+9S2FsSmnfeMJromnjS/kW8H70f9MYgCF69tpSEx+PcrBbaEXLaEXP60N8XDswq4pDzr4VUmLgwmgvcBD3ZN7NZSGm4pGqeO2Y9Pb7sKjH0p5oeoTvIMPHl1AfMmDGW+qhttXoDzxz4Xre9I6GZyL2X9hJF9/c9IuwfLNiTY2uD6JXKUcfSergmdRonUlJSL0eV+1ZRLHIUVm5MkfLOL3BleVFrW8dRplITlLkUp9quabLAExhYKRfbAo+eBmMfrRxx/FFGKU66zpOOx0zEFucWfGvpnVoXF/C/YfHWsRXWJ6exN2px0V/3yQYc/16ZIeZllrT3k8N1z/Yktmv7+j8CJQBu6uehSMB/4Ir1bRelAK8B3zrW5a0oeU0sz9xzrj7l8/504XoZO66Jiw8Z5o3zRFUBFZ1S9ENtxwszmRt8k92DFlDzmTbC4bIyVdZk54yzmT7B57XD/7hFK+rw8o3IjsMMACHq9v9LTCPDAjLwBGaSDq6oylynyrVdOI+n1KUzDgspiRS7zV/zQKczCjmPyfR/+X9GwoLLYaGHblzkFJ48+jWV2jellA2+BGbC9wvhVRkWm+i15qHgKazPEE4DrzvHdKBhhqhGVyb5LHiKr96bYH+2/Tx5bKMwd73NQATyVyQZDte+Sh8Crhxwe/E8yY757v5RHvv8NBREm2yjj/Bc9cOIurNyR5Ik9KTJFk2+Ot1k8KUdhUBhnk94XMmK0OcorBx1+9992jrRmDq7XnWPx+FX55GjaCZTRtqKjJXdV9Eo0paw95PDWUZe3jzvEs3ixE2DppAAPXppPnm/TKSfjoaW2IPm5q6J3NoVc7t2WOW50UD3a8KvL8/nK2BwEkR4YJN/2FNdI9iuFw0n1aMOdUwLU+D8N2SceuLajaN7wek9WrL66gG9PtIfZscFx8UzKHfZ6s2J2pTUiiqUUMUlXhmd75GlCwhE10XY5JVvKSBFLijHRlOQ+pJ9GRByx7GhSkkCf66q5oNASzg323+ENYtrWFyJJSdqNCRPxlEIzjEpcO9Zi23z/phH9wlNoSpgW47hEWpL/DysAzQnB8YgYDMfr207JsduwE4obBD1m47G7Lmau/WK5bytLGVmwLs7ReP8jgellhqeuGd7FyrqYAcxuW2FPtF0IJ4WS/OEZstS1KYda+59EqioYXpduThqi7YKge4wadgEcjp7dLnQkkv4RPOVjE8gzG4DUpxGL1PB50ClFyoNDMQvAsQvMJrP0vVAU4f2UBwciZ2drqW3pbBCbl74XSvuMqK4DqA1buHp2dc+OB/vDJwb1yno4scDuGn3FeHJ/0hE+aTbkuidaMSVAJNV/UB9XODytdm+zRfuJr6voX6HLTqbVs8Z8BEw3AnMmpggGzvyX51hKWH8ogKegyIfLtzVcBl32p6jyHKSHujtCZ8c74kchq8vOBn2+479Oo1h5zjNAFKC+zVAbPrMNs6/FIvT5SD7iJt1nOx46U3+wMdyk8ETH864Gi6bEmRl0mxPCx42f/+iKPvbDHS3NHc/dopkj1iNAHNJutP14gKRzZhkm4QpbP7O7bghqDbipR7vm6WaUO7bWHxfh4Y7nNgc2HLPPmEFdyoNNR23iqS4/tMrKJR9EQ13zndTvRe1Rv1bY3/EcSQpbj9sZt1qd6ngKW4/bhLtNk+i+QHHxwz3znmSUezYejht0Rde0UNyw8aid1ea8UxHHg83H7K6BFUBV5c7F/z6Q6Jm/1xHSbdua3kDl8a5pDXHDu3UBEqdZjEm4wrt1AU6aM1J+v3x741u9lelz2JgIN94L2m3HZCQpvF1n03ya9EpNCeGdwz1dBgS2J8JN9/VVrt+TYatmll4oYm2mx2FKA1SXu0wuczlVF0hqWyx2NVonx0KhXsS98rYtLQf6KpvxDOHq2RWzUF1PL2cIKws9ple6FOedOlE4khJ21Fs0xHt1gjbP8LXbtzRu6k9GVqdNV18+5hsYXgPyen5mBC4q9agud0ZsWQLS+/X3NNnUtpi+esp2VW7oK450JevD2k/OrrjeqL4Kve/fDxg4r8RjUpmT0/0jPUl5cDBs+KTZpr3v3rEV9KZl25r+kY3MAZ1gf/KKyplGvddRqvrKEzAwodhlYrFHWUHu3Ko5IRyKWhyOGJz+q2nyDPMzuUxXBnzXwTOzSy9wsNagXJ4pbzCgjC/2qChUxhQoZghr+Z4KjXGhIS7UxQyxVFa+uk2M+73+gmpvDOpWjFUzJSBmzC9R/Rlkt2PCEqWsQCnOg+KAEsxTCizFNoptwDKC6ymOB44nJFwh1i5EU0K0Pd29egOYFVRYVRZvWnHTTm0f6Pcb0v0p6QCsj4FcNGghfqN8onBXNgG1L4YUEpe93/hmIFhyMcIvSN+4NZK0ovJAItx08VAMAj7eybRq5ugKJHCXwI+AUl+EZkdMhKc9z6xcvj10zA+Bvt/e9cfppWVWvrVY4FbI5cUz+oEgz9uO9+ziD5tb/JSc03venppVPk1FalSZA8xmaKdFUsAWhXUivLJsa+Muf7Q8mZwapSuPT6sK2gXu1QLTEKpBq0HGk359CPL5jYCx9J/WgexV2GNgZ3vc2nTHznp/Dzn3wf8AkLUVkMlzxBkAAAAASUVORK5CYII=",_N="data:image/png;base64,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",PN={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},created(){try{this.pgn=(lr().query.pgn??void 0).toString(),console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history(),console.log(this.history),this.moves=[];let i=0;if(this.history[0].endsWith("5")||this.history[0].endsWith("6"))for(console.log("...");i<this.history.length;)this.moves.push([this.history[i+1],this.history[i]]),i+=2;else for(;i<this.history.length;)this.moves.push([this.history[i],this.history[i+1]]),i+=2;console.log(this.moves),this.history=[].concat(...this.moves).reverse(),this.historyConstant=JSON.parse(JSON.stringify(this.history)),this.chess.reset();const e=s=>{const c=/\[BlackElo "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.blackElo=e(this.pgn);const t=s=>{const c=/\[WhiteElo "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.whiteElo=t(this.pgn);const n=s=>{const c=/\[White "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.whitePlayer=n(this.pgn);const a=s=>{const c=/\[Black "(.*?)"]/.exec(s);return c&&c.length>=2?c[1]:null};this.blackPlayer=a(this.pgn),console.log("finished setup")}catch{this.chess=null}},data(){return{playerIsWhite:!0,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",chess:new Nn,score:0,stockfish:null,custom:0,size:600,history:null,pgn:"",blackElo:"",whiteElo:"",blackPlayer:"",whitePlayer:"",positionInfo:null,bestmove:"",moves:[],historyStack:[],board:null,pawnStructure:0,fens:[[0,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","e4e5",""]],i:0,evals:[],historyConstant:[],graphEvaled:!1,annotatedMove:"",annotatedPosition:"",bookMoves:[0,0],bestMoves:[0,0],goodMoves:[0,0],okMoves:[0,0],innacurateMoves:[0,0],mistakeMoves:[0,0],blunderMoves:[0,0]}},methods:{turnBoard(){this.playerIsWhite=!this.playerIsWhite},evaluatePosition(){console.log("evaluating!"+this.fen),Ma(this.fen,(i,e)=>{console.log("Received score:"+i),console.log("Received Bestmove:"+e),this.score=i,this.bestmove=e})},evaluatePositionQuick(i=void 0){i==null&&(i=this.fen),Ma(i,(e,t)=>{console.log("Received score:"+e),console.log("Received Bestmove:"+t),console.log(this.fens[this.i]),console.log(i),console.log(this.i),this.fens[this.i][1]===i?(this.fens[this.i]=[e,i,t,""],console.log("Overwriting...")):(this.fens.push([e,i,t,""]),console.log("New FEN"),this.i++)},1e3)},async goThrough(){await new Promise(t=>setTimeout(t,1e3)),this.evaluatePosition(),await new Promise(t=>setTimeout(t,3500));let i=new Nn;console.log("Hello");let e=JSON.parse(JSON.stringify(this.historyConstant.reverse()));console.log(e),i.reset();for(let t of e)t!=null&&(console.log(t),i.move(t),console.log("madeMove"),this.evaluatePositionQuick(i.fen()),await new Promise(n=>setTimeout(n,1200)));console.log("FEEEEEEEEEEEEEEEEEENS"),console.log(this.fens);for(let t of this.fens)console.log(t),this.evals.push(t[0]);console.log(this.evals),this.graphEvaled=!0,this.annotateMoves(),Pn()},annotateMoves(){let i=[],e=[],t=0;for(let n of this.fens){if(i.push(""+this.historyConstant[t]),t==0)t++;else{try{let a=ko(i).t;if(console.log("The Opening:"),console.log(a),console.log("The previous Opening:"),console.log(e),console.log("The Moves"),console.log(i),a.length>e.length||a.length>=i.length-1)console.log("bookMove"),this.fens[t][3]="bookMove",this.bookMoves[(t+1)%2]++,e=a;else{let s=this.fens[t-1][1],o=n[1],c=new Nn(s);c.move(this.fens[t-1][2].split(" ")[0],!1),c.fen()==o?(this.fens[t][3]="bestmove",this.bestMoves[(t+1)%2]++):this.fens[t-1][0]-n[0]<.3&&this.fens[t-1][0]-n[0]>-.3?(this.fens[t][3]="goodMove",this.goodMoves[(t+1)%2]++):this.fens[t-1][0]-n[0]<.7&&this.fens[t-1][0]-n[0]>-.7?(this.fens[t][3]="okmove",this.okMoves[(t+1)%2]++):this.fens[t-1][0]-n[0]<1&&this.fens[t-1][0]-n[0]>-1?(this.fens[t][3]="inaccuracy",this.innacurateMoves[(t+1)%2]++):this.fens[t-1][0]-n[0]<2.5&&this.fens[t-1][0]-n[0]>-2.5?(this.fens[t][3]="mistake",this.mistakeMoves[(t+1)%2]++):this.fens[t-1][0]-n[0]<7&&this.fens[t-1][0]-n[0]>-7&&(this.fens[t][3]="blunder",this.blunderMoves[(t+1)%2]++)}}catch{}t++}console.log(n)}for(let n of this.fens)console.log(n[3])},extractDestinationSquare(i){const e=/[a-h][1-8]$/;return e.test(i)?i.match(e)[0]:""},handleMove(i){this.fen=i.after,this.evaluatePosition()},moveCall(){if(console.log("moveCall"),!this.chess.isGameOver()){console.log(this.history);let i=this.history.pop();this.annotatedPosition=this.extractDestinationSquare(i),console.log("_____________"),console.log(this.fens[this.historyStack.length]),this.annotatedMove=this.fens[this.historyStack.length+1][3]+".png",this.chess.move(i),this.historyStack.push(i),this.fen=this.chess.fen(),this.evaluatePosition()}},backMove(){console.log(this.historyStack),this.historyStack.length!=0&&(this.chess.undo(),this.history.push(this.historyStack.pop()),this.fen=this.chess.fen(),this.evaluatePosition())},completeBack(){console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history(),this.moves=[];let i=0;if(this.history[0].endsWith("5")||this.history[0].endsWith("6"))for(console.log("...");i<this.history.length;)this.moves.push([this.history[i+1],this.history[i]]),i+=2;else for(;i<this.history.length;)this.moves.push([this.history[i],this.history[i+1]]),i+=2;console.log(this.moves),this.history=[].concat(...this.moves).reverse(),this.chess.reset(),this.evaluatePosition()},completeEnd(){for(;this.history.length!=0;)this.historyStack.push(this.history.pop());this.chess.loadPgn(this.pgn),this.fen=this.chess.fen(),this.evaluatePosition()}},components:{StockfishPanel:Qf,EvalBar:mr,UserAnalyzeBar:Sr,EvalCircle:Mr,Chessboard:Of,Graph:Z5,moveInfo:tN,GameSummaryUser:mN,Annotation:ON}},RN={key:0,class:"grid place-content-center min-h-screen text-secondary font-mono"},EN={key:1,class:"flex items-center justify-between h-screen flex-row py-3 space-x-4 px-2"},QN={class:"h-full basis-1/2 flex"},KN={class:"flex flex-grow flex-col py-3 space-y-4 justify-center"},LN={class:"flex h-full relative"},zN={class:"h-full w-full bg-base-100 m-2 flex flex-row basis-1/2 space-x-2"},IN={class:"h-full basis-1/2 flex flex-col space-y-2"},FN={key:0,class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 justify-center items-center flex relative"},TN=p("img",{src:AN,class:""},null,-1),WN={class:"absolute inset-0 flex items-center justify-center"},HN={key:1,class:"px-4 py-2 bg-secondary rounded-lg"},jN=p("img",{src:VN},null,-1),UN=[jN],YN={key:1,class:"w-full basis-1/6 bg-base-300 rounded-lg p-2"},ZN={class:"w-full flex-grow basis-1/4"},qN={class:"basis-2/3 bg-base-300 w-full rounded-lg p-2 flex justify-center flex-col"},XN={class:"w-full flex flex-row h-1/3"},JN=p("div",{class:"divider-vertical w-[1px] bg-slate-500 h-2/3 rounded-lg"},null,-1),$N={class:"flex-grow"},e6={class:"flex-content"},t6={class:"p-4 w-full flex flex-col items-center scrollable-content-wrapper"},i6={class:"flex flex-row gap-10 py-1 text-orange-800 min-h-8 h-[10%]"},n6=p("img",{src:CN},null,-1),a6=p("div",{class:"flex flex-row gap-10 py-1 text-secondary min-h-8 h-[10%]"},[p("p",null,"1"),p("img",{src:yN}),p("p",null,"0")],-1),s6=p("div",{class:"flex flex-row gap-10 py-1 text-pink-300 min-h-8 h-[10%]"},[p("p",null,"2"),p("img",{src:SN}),p("p",null,"3")],-1),o6={class:"flex flex-row gap-10 py-1 text-green-500 min-h-8 h-[10%]"},c6=p("img",{src:kN},null,-1),r6={class:"flex flex-row gap-10 py-1 text-green-800 min-h-8 h-[10%]"},d6=p("img",{src:vN},null,-1),f6={class:"flex flex-row gap-10 py-1 text-green-300 min-h-8 h-[10%]"},l6=p("img",{src:GN},null,-1),h6={class:"flex flex-row gap-10 py-1 text-yellow-400 min-h-8 h-[10%]"},N6=p("img",{src:wN},null,-1),g6={class:"flex flex-row gap-10 py-1 text-orange-600 min-h-8 h-[10%]"},u6=p("img",{src:MN},null,-1),b6={class:"flex flex-row gap-10 py-1 text-red-600 min-h-8 h-[10%]"},B6=p("img",{src:_N},null,-1),m6={class:"h-full flex flex-col overflow-hidden basis-1/2 space-y-2"},x6={class:"w-full",style:{"flex-basis":"45%"}},p6={class:"w-full basis-1/4 bg-base-300 rounded-lg p-2 flex justify-around flex-col"},D6={class:"grid grid-cols-3 w-full place-items-center"},O6={class:"w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2",style:{"flex-basis":"55%"}},A6={class:"flex-grow"},V6={class:"flex-content"},C6={class:"scrollable-content-wrapper scroll-fade"},y6={class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl"},S6={class:"flex justify-center"},k6={key:0,class:"badge bg-green-300 text-slate-900 border-slate-900"},v6={key:1,class:"badge bg-slate-300 text-slate-900 border-slate-900"},G6={class:"flex justify-center"},w6={key:0,class:"badge bg-green-300 text-gray-200 border-gray-200"},M6={key:1,class:"badge bg-gray-800 text-gray-200 border-gray-200"},_6={class:"bottom-3 w-full h-12 grid grid-cols-5 gap-x-1"},P6={class:"btn-accent btn"},R6={class:"btn-accent btn"},E6={class:"btn-accent btn"},Q6={class:"btn-accent btn"},K6={class:"btn-accent btn"};function L6(i,e,t,n,a,s){const o=Ge("UserAnalyzeBar"),c=Ge("EvalBar"),r=Ge("Chessboard"),d=Ge("Annotation"),f=Ge("graph"),l=Ge("moveInfo"),h=Ge("GameSummaryUser"),g=Ge("StockfishPanel"),N=Ge("EvalCircle");return this.chess===null?(E(),K("div",RN," Invalide PGN ")):(E(),K("div",EN,[p("div",QN,[p("div",KN,[ae(o,{color:!a.playerIsWhite,elo:a.playerIsWhite?a.blackElo:a.whiteElo,username:a.playerIsWhite?a.blackPlayer:a.whitePlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"]),p("div",LN,[ae(c,{ref:"evalBar",evaluation:a.score,whiteBottom:a.playerIsWhite,class:"h-full"},null,8,["evaluation","whiteBottom"]),ae(r,{onMove:s.handleMove,fen:a.fen,orientation:a.playerIsWhite?"white":"black"},null,8,["onMove","fen","orientation"]),ae(d,{square:this.annotatedPosition,annotation:this.annotatedMove},null,8,["square","annotation"])]),ae(o,{color:a.playerIsWhite,elo:a.playerIsWhite?a.whiteElo:a.blackElo,username:a.playerIsWhite?a.whitePlayer:a.blackPlayer,onTurnBoard:s.turnBoard},null,8,["color","elo","username","onTurnBoard"])])]),p("div",zN,[p("div",IN,[this.graphEvaled?(E(),K("div",YN,[ae(f,{data:this.evals},null,8,["data"])])):(E(),K("div",FN,[TN,p("div",WN,[this.i==0?(E(),K("button",{key:0,class:"px-4 py-2 btn btn-secondary btn-outline",onClick:e[0]||(e[0]=(...u)=>s.goThrough&&s.goThrough(...u))},"Load Graph")):(E(),K("div",HN,UN))])])),p("div",ZN,[ae(l,{moves:this.historyStack,bestmove:this.bestmove},null,8,["moves","bestmove"])]),p("div",qN,[p("div",XN,[ae(h,{accuracy:100,color:!0,elo:a.whiteElo,username:a.whitePlayer},null,8,["elo","username"]),JN,ae(h,{accuracy:100,color:!1,elo:a.blackElo,username:a.blackPlayer},null,8,["elo","username"])]),p("div",$N,[p("div",e6,[p("div",t6,[p("div",i6,[p("p",null,R(a.bookMoves[0]),1),n6,p("p",null,R(a.bookMoves[1]),1)]),a6,s6,p("div",o6,[p("p",null,R(a.bestMoves[0]),1),c6,p("p",null,R(a.bestMoves[1]),1)]),p("div",r6,[p("p",null,R(a.goodMoves[0]),1),d6,p("p",null,R(a.goodMoves[1]),1)]),p("div",f6,[p("p",null,R(a.okMoves[0]),1),l6,p("p",null,R(a.okMoves[1]),1)]),p("div",h6,[p("p",null,R(a.innacurateMoves[0]),1),N6,p("p",null,R(a.innacurateMoves[1]),1)]),p("div",g6,[p("p",null,R(a.mistakeMoves[0]),1),u6,p("p",null,R(a.mistakeMoves[1]),1)]),p("div",b6,[p("p",null,R(a.blunderMoves[0]),1),B6,p("p",null,R(a.blunderMoves[1]),1)])])])])])]),p("div",m6,[p("div",x6,[ae(g)]),p("div",p6,[p("div",D6,[ae(N,{evaluation:90}),ae(N,{evaluation:20}),ae(N,{evaluation:40})])]),p("div",O6,[p("div",A6,[p("div",V6,[p("div",C6,[(E(!0),K(ui,null,cn(this.moves,(u,b)=>(E(),K("div",{key:b,class:"w-full items-center justify-center"},[p("div",y6,[p("div",S6,[2*b==this.historyStack.length?(E(),K("div",k6,R(u[0]),1)):(E(),K("div",v6,R(u[0]),1))]),p("div",G6,[2*b+1==this.historyStack.length?(E(),K("div",w6,R(u[1]),1)):(E(),K("div",M6,R(u[1]),1))])])]))),128))])])]),p("div",_6,[p("button",P6,[p("span",{class:"material-symbols-outlined",onClick:e[1]||(e[1]=(...u)=>s.completeBack&&s.completeBack(...u))}," keyboard_double_arrow_left ")]),p("button",R6,[p("span",{class:"material-symbols-outlined",onClick:e[2]||(e[2]=(...u)=>s.backMove&&s.backMove(...u))}," chevron_left ")]),p("button",E6,[p("span",{class:"material-symbols-outlined",onClick:e[3]||(e[3]=(...u)=>s.goThrough&&s.goThrough(...u))}," auto_awesome ")]),p("button",Q6,[p("span",{class:"material-symbols-outlined",onClick:e[4]||(e[4]=(...u)=>s.moveCall&&s.moveCall(...u))}," chevron_right ")]),p("button",K6,[p("span",{class:"material-symbols-outlined",onClick:e[5]||(e[5]=(...u)=>s.completeEnd&&s.completeEnd(...u))}," keyboard_double_arrow_right ")])])])])])]))}const W6=et(PN,[["render",L6]]);export{W6 as default};
