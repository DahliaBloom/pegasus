var Qs=Object.defineProperty;var ws=(t,e,i)=>e in t?Qs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var O=(t,e,i)=>(ws(t,typeof e!="symbol"?e+"":e,i),i);import{_ as Je,b as ne,c as ae,g as S,t as Oe,y as Ps,z as Rs,A as Ls,B as Ks,q as Es,h as We,i as se,k as on,F as rn,p as dn}from"./index-04d40cd2.js";import{c as zs,C as Is}from"./chess-d99999e1.js";import"./_commonjsHelpers-725317a4.js";let Wi,ni=0,Gt=null,Pa="";console.log("Starting stockfish");Stockfish().then(t=>{t.addMessageListener(Fs),t.postMessage("uci"),t.postMessage("setoption name use nnue value true"),t.postMessage("setoption name Threads value 16"),t.postMessage("setoption name Hash value 128"),t.postMessage("setoption name UCI_AnalyseMode value true"),t.postMessage("ucinewgame"),Wi=t,console.log("Stockfish started")});function Fs(t){if(console.log(t),t.startsWith("info depth")){const i=/ cp (-?\d+)/.exec(t);if(i===null){const c=/score mate (\d+)/.exec(t);ni=parseFloat(c[1])*100}else ni=parseFloat(i[1])/100;const a=/ pv (.+)/.exec(t);console.log("bestmove: "+a[1]),console.log("Pegasus Final Score: "+ni),Pa.split(" ")[1]=="w"?Gt(ni,a[1]):Gt(-ni,a[1])}}async function Ts(t,e){Wi===void 0&&e(0,"stockfish undefined"),Pa=t,Wi.postMessage(`position fen ${t}`),Wi.postMessage("go movetime 1000"),Gt=e}const Tt={props:{evaluation:{type:Number,required:!0}},data(){return{height:50,heightString:"50%"}},methods:{update(){if(this.heightString=this.height+"%",console.log("update"),this.evaluation==="0.0"||this.evaluation==="0"){this.height=50,this.heightString=this.height+"%";return}let t=Number(this.evaluation);if(console.log("TMP:"+t),t>=100){this.height=100,this.heightString="100%";return}if(t<-100){this.height=0,this.heightString="0%";return}t>0&&(Math.abs(t)<1?(this.height=50+t*10,console.log("-1< x <1")):Math.abs(t)<3?(this.height=50+t*8,console.log("-3< x <3")):Math.abs(t)<6?(this.height=70+t*2,console.log("-6< x <6")):Math.abs(t)<11?(this.height=80+t,console.log("-9< x <9")):t>11&&(this.height=50+Math.log(Math.abs(t))*30)),t<0&&(Math.abs(t)<1?(this.height=50+t*10,console.log("-1< x <1")):Math.abs(t)<3?(this.height=50+t*8,console.log("-3< x <3")):Math.abs(t)<6?(this.height=30+t*2,console.log("-6< x <6")):Math.abs(t)<11?(this.height=20+t,console.log("-9< x <9")):t<-11&&(this.height=50-Math.log(Math.abs(t))*30)),this.height>96&&(this.height=96),this.height<4&&(this.height=4),this.heightString=this.height+"%"}},beforeMount(){this.update()},updated(){this.update()}},fn=()=>{Ps(t=>({"319601e2":t.heightString}))},ln=Tt.setup;Tt.setup=ln?(t,e)=>(fn(),ln(t,e)):fn;const Hs=t=>(Rs("data-v-2071d0eb"),t=t(),Ls(),t),Ws={class:"w-18 h-full flex flex-row flex-none m-2 items-center"},js={class:"mr-2 w-12 p-2"},Ys=Hs(()=>S("div",{class:"w-4 h-full relative flex-none rounded-lg"},[S("div",{class:"bg-black text-white text-center font-bold h-full rounded-lg"},[S("div",{class:"bg-white w-full text-center text-black absolute bottom-0 left-0 evalWhite rounded-b-lg transition-transform"})])],-1));function $s(t,e,i,n,a,s){return ne(),ae("div",Ws,[S("span",js,Oe(this.evaluation),1),Ys])}const Zs=Je(Tt,[["render",$s],["__scopeId","data-v-2071d0eb"]]),Us={props:{username:{type:String,required:!0},elo:{type:String,required:!0},color:{type:Boolean,required:!0}},data(){return{user:{name:"N",avatar:"/src/assets/magnusCarlsen.png"}}},beforeMount(){zs.getPlayer(this.username).then(t=>{this.user=t.body}).catch(()=>{isError.value=!0}).finally(()=>{console.log(this.user)})}},Xs={class:"h-full w-full flex relative"},Js=["src"],qs=["src"],ec={class:"flex flex-row items-baseline"},ic={class:"text-xl font-bold"},tc={class:"text-xs px-3"};function nc(t,e,i,n,a,s){return ne(),ae("div",Xs,[i.color?(ne(),ae("img",{key:0,class:"w-8 h-8 border-2 mr-2 rounded-lg",src:a.user.avatar,alt:"",style:{"border-color":"white"}},null,8,Js)):(ne(),ae("img",{key:1,class:"w-8 h-8 border-2 mr-2 rounded-lg",src:a.user.avatar,alt:"",style:{"border-color":"black"}},null,8,qs)),S("div",ec,[S("h2",ic,Oe(a.user.username),1),S("p",tc,Oe(this.elo),1)])])}const ac=Je(Us,[["render",nc]]),sc={props:{evaluation:{type:Number,required:!0}},data(){return{height:40,styleString:"background: conic-gradient(#F741B8 36deg 60deg, #475569 36deg); border-radius: 50%;"}},methods:{update(){this.height=this.evaluation,this.styleString="background: conic-gradient(#F741B8 36deg "+360*(this.height/100)+"deg, #475569 36deg); border-radius: 50%;"}},beforeMount(){this.update()},updated(){this.update()}},cc=S("div",{class:"h-12 w-12 bg-base-100 rounded-full"},null,-1),oc=[cc];function rc(t,e,i,n,a,s){return ne(),ae("div",{class:"h-20 w-20 m-2 flex items-center justify-center",style:Ks(a.styleString)},oc,4)}const dc=Je(sc,[["render",rc]]);function Nn(t){const i=`A00	Amar Gambit	1. Nh3 d5 2. g3 e5 3. f4 Bxh3 4. Bxh3 exf4
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
`).map(a=>a.trim());console.log(i),console.log(t);let n=[];for(const a of i){let c=a.split("	")[2].split(" ");c=c.filter(o=>!o.endsWith(".")),c.every((o,r)=>o===t[r])&&n.push({t:c,m:a.split("	")[1],a:a.split("	")[0][0]})}return console.log(n),n=={}?null:(n.sort(a=>{a.t.length}),n[n.length-1].a==["A"]&&(n[n.length-1].a=["Flank Attack"]),n[n.length-1].a==["B"]&&(n[n.length-1].a=["Semi-Open Game"]),n[n.length-1].a==["C"]&&(n[n.length-1].a=["Open Game"]),n[n.length-1].a==["D"]&&(n[n.length-1].a=["Closed Position"]),n[n.length-1].a==["E"]&&(n[n.length-1].a=["Indian Game"]),n[n.length-1])}const fc={name:"CustomChessboard"},lc={class:"chessboard w-[500px] h-[500px] bg-white"};function Nc(t,e,i,n,a,s){return ne(),ae("div",lc)}const hc=Je(fc,[["render",Nc]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function yi(t){return t+.5|0}const Ve=(t,e,i)=>Math.max(Math.min(t,i),e);function di(t){return Ve(yi(t*2.55),0,255)}function Se(t){return Ve(yi(t*255),0,255)}function be(t){return Ve(yi(t/2.55)/100,0,1)}function hn(t){return Ve(yi(t*100),0,100)}const ce={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},St=[..."0123456789ABCDEF"],gc=t=>St[t&15],Bc=t=>St[(t&240)>>4]+St[t&15],Mi=t=>(t&240)>>4===(t&15),uc=t=>Mi(t.r)&&Mi(t.g)&&Mi(t.b)&&Mi(t.a);function bc(t){var e=t.length,i;return t[0]==="#"&&(e===4||e===5?i={r:255&ce[t[1]]*17,g:255&ce[t[2]]*17,b:255&ce[t[3]]*17,a:e===5?ce[t[4]]*17:255}:(e===7||e===9)&&(i={r:ce[t[1]]<<4|ce[t[2]],g:ce[t[3]]<<4|ce[t[4]],b:ce[t[5]]<<4|ce[t[6]],a:e===9?ce[t[7]]<<4|ce[t[8]]:255})),i}const mc=(t,e)=>t<255?e(t):"";function xc(t){var e=uc(t)?gc:Bc;return t?"#"+e(t.r)+e(t.g)+e(t.b)+mc(t.a,e):void 0}const pc=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ra(t,e,i){const n=e*Math.min(i,1-i),a=(s,c=(s+t/30)%12)=>i-n*Math.max(Math.min(c-3,9-c,1),-1);return[a(0),a(8),a(4)]}function Dc(t,e,i){const n=(a,s=(a+t/60)%6)=>i-i*e*Math.max(Math.min(s,4-s,1),0);return[n(5),n(3),n(1)]}function Oc(t,e,i){const n=Ra(t,1,.5);let a;for(e+i>1&&(a=1/(e+i),e*=a,i*=a),a=0;a<3;a++)n[a]*=1-e-i,n[a]+=e;return n}function Vc(t,e,i,n,a){return t===a?(e-i)/n+(e<i?6:0):e===a?(i-t)/n+2:(t-e)/n+4}function Ht(t){const i=t.r/255,n=t.g/255,a=t.b/255,s=Math.max(i,n,a),c=Math.min(i,n,a),o=(s+c)/2;let r,d,f;return s!==c&&(f=s-c,d=o>.5?f/(2-s-c):f/(s+c),r=Vc(i,n,a,f,s),r=r*60+.5),[r|0,d||0,o]}function Wt(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(Se)}function jt(t,e,i){return Wt(Ra,t,e,i)}function Cc(t,e,i){return Wt(Oc,t,e,i)}function Ac(t,e,i){return Wt(Dc,t,e,i)}function La(t){return(t%360+360)%360}function Gc(t){const e=pc.exec(t);let i=255,n;if(!e)return;e[5]!==n&&(i=e[6]?di(+e[5]):Se(+e[5]));const a=La(+e[2]),s=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?n=Cc(a,s,c):e[1]==="hsv"?n=Ac(a,s,c):n=jt(a,s,c),{r:n[0],g:n[1],b:n[2],a:i}}function Sc(t,e){var i=Ht(t);i[0]=La(i[0]+e),i=jt(i),t.r=i[0],t.g=i[1],t.b=i[2]}function yc(t){if(!t)return;const e=Ht(t),i=e[0],n=hn(e[1]),a=hn(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${a}%, ${be(t.a)})`:`hsl(${i}, ${n}%, ${a}%)`}const gn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Bn={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function kc(){const t={},e=Object.keys(Bn),i=Object.keys(gn);let n,a,s,c,o;for(n=0;n<e.length;n++){for(c=o=e[n],a=0;a<i.length;a++)s=i[a],o=o.replace(s,gn[s]);s=parseInt(Bn[c],16),t[o]=[s>>16&255,s>>8&255,s&255]}return t}let Qi;function vc(t){Qi||(Qi=kc(),Qi.transparent=[0,0,0,0]);const e=Qi[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const _c=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Mc(t){const e=_c.exec(t);let i=255,n,a,s;if(e){if(e[7]!==n){const c=+e[7];i=e[8]?di(c):Ve(c*255,0,255)}return n=+e[1],a=+e[3],s=+e[5],n=255&(e[2]?di(n):Ve(n,0,255)),a=255&(e[4]?di(a):Ve(a,0,255)),s=255&(e[6]?di(s):Ve(s,0,255)),{r:n,g:a,b:s,a:i}}}function Qc(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${be(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const gt=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,je=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function wc(t,e,i){const n=je(be(t.r)),a=je(be(t.g)),s=je(be(t.b));return{r:Se(gt(n+i*(je(be(e.r))-n))),g:Se(gt(a+i*(je(be(e.g))-a))),b:Se(gt(s+i*(je(be(e.b))-s))),a:t.a+i*(e.a-t.a)}}function wi(t,e,i){if(t){let n=Ht(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,e===0?360:1)),n=jt(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function Ka(t,e){return t&&Object.assign(e||{},t)}function un(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Se(t[3]))):(e=Ka(t,{r:0,g:0,b:0,a:1}),e.a=Se(e.a)),e}function Pc(t){return t.charAt(0)==="r"?Mc(t):Gc(t)}class pi{constructor(e){if(e instanceof pi)return e;const i=typeof e;let n;i==="object"?n=un(e):i==="string"&&(n=bc(e)||vc(e)||Pc(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=Ka(this._rgb);return e&&(e.a=be(e.a)),e}set rgb(e){this._rgb=un(e)}rgbString(){return this._valid?Qc(this._rgb):void 0}hexString(){return this._valid?xc(this._rgb):void 0}hslString(){return this._valid?yc(this._rgb):void 0}mix(e,i){if(e){const n=this.rgb,a=e.rgb;let s;const c=i===s?.5:i,o=2*c-1,r=n.a-a.a,d=((o*r===-1?o:(o+r)/(1+o*r))+1)/2;s=1-d,n.r=255&d*n.r+s*a.r+.5,n.g=255&d*n.g+s*a.g+.5,n.b=255&d*n.b+s*a.b+.5,n.a=c*n.a+(1-c)*a.a,this.rgb=n}return this}interpolate(e,i){return e&&(this._rgb=wc(this._rgb,e._rgb,i)),this}clone(){return new pi(this.rgb)}alpha(e){return this._rgb.a=Se(e),this}clearer(e){const i=this._rgb;return i.a*=1-e,this}greyscale(){const e=this._rgb,i=yi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=i,this}opaquer(e){const i=this._rgb;return i.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return wi(this._rgb,2,e),this}darken(e){return wi(this._rgb,2,-e),this}saturate(e){return wi(this._rgb,1,e),this}desaturate(e){return wi(this._rgb,1,-e),this}rotate(e){return Sc(this._rgb,e),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function ge(){}const Rc=(()=>{let t=0;return()=>t++})();function Q(t){return t===null||typeof t>"u"}function L(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function _(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function I(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function ie(t,e){return I(t)?t:e}function y(t,e){return typeof t>"u"?e:t}const Lc=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Ea=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function R(t,e,i){if(t&&typeof t.call=="function")return t.apply(i,e)}function w(t,e,i,n){let a,s,c;if(L(t))if(s=t.length,n)for(a=s-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<s;a++)e.call(i,t[a],a);else if(_(t))for(c=Object.keys(t),s=c.length,a=0;a<s;a++)e.call(i,t[c[a]],c[a])}function it(t,e){let i,n,a,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],s=e[i],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function tt(t){if(L(t))return t.map(tt);if(_(t)){const e=Object.create(null),i=Object.keys(t),n=i.length;let a=0;for(;a<n;++a)e[i[a]]=tt(t[i[a]]);return e}return t}function za(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function Kc(t,e,i,n){if(!za(t))return;const a=e[t],s=i[t];_(a)&&_(s)?Di(a,s,n):e[t]=tt(s)}function Di(t,e,i){const n=L(e)?e:[e],a=n.length;if(!_(t))return t;i=i||{};const s=i.merger||Kc;let c;for(let o=0;o<a;++o){if(c=n[o],!_(c))continue;const r=Object.keys(c);for(let d=0,f=r.length;d<f;++d)s(r[d],t,c,i)}return t}function Bi(t,e){return Di(t,e,{merger:Ec})}function Ec(t,e,i){if(!za(t))return;const n=e[t],a=i[t];_(n)&&_(a)?Bi(n,a):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=tt(a))}const bn={"":t=>t,x:t=>t.x,y:t=>t.y};function zc(t){const e=t.split("."),i=[];let n="";for(const a of e)n+=a,n.endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}function Ic(t){const e=zc(t);return i=>{for(const n of e){if(n==="")break;i=i&&i[n]}return i}}function ye(t,e){return(bn[e]||(bn[e]=Ic(e)))(t)}function Yt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Oi=t=>typeof t<"u",ke=t=>typeof t=="function",mn=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function Fc(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const z=Math.PI,K=2*z,Tc=K+z,nt=Number.POSITIVE_INFINITY,Hc=z/180,F=z/2,_e=z/4,xn=z*2/3,Ce=Math.log10,he=Math.sign;function ui(t,e,i){return Math.abs(t-e)<i}function pn(t){const e=Math.round(t);t=ui(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Ce(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function Wc(t){const e=[],i=Math.sqrt(t);let n;for(n=1;n<i;n++)t%n===0&&(e.push(n),e.push(t/n));return i===(i|0)&&e.push(i),e.sort((a,s)=>a-s).pop(),e}function Ze(t){return!isNaN(parseFloat(t))&&isFinite(t)}function jc(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function Ia(t,e,i){let n,a,s;for(n=0,a=t.length;n<a;n++)s=t[n][i],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function re(t){return t*(z/180)}function $t(t){return t*(180/z)}function Dn(t){if(!I(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Fa(t,e){const i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n);let s=Math.atan2(n,i);return s<-.5*z&&(s+=K),{angle:s,distance:a}}function yt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Yc(t,e){return(t-e+Tc)%K-z}function te(t){return(t%K+K)%K}function Vi(t,e,i,n){const a=te(t),s=te(e),c=te(i),o=te(s-a),r=te(c-a),d=te(a-s),f=te(a-c);return a===s||a===c||n&&s===c||o>r&&d<f}function j(t,e,i){return Math.max(e,Math.min(i,t))}function $c(t){return j(t,-32768,32767)}function xe(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}function Zt(t,e,i){i=i||(c=>t[c]<e);let n=t.length-1,a=0,s;for(;n-a>1;)s=a+n>>1,i(s)?a=s:n=s;return{lo:a,hi:n}}const pe=(t,e,i,n)=>Zt(t,i,n?a=>{const s=t[a][e];return s<i||s===i&&t[a+1][e]===i}:a=>t[a][e]<i),Zc=(t,e,i)=>Zt(t,i,n=>t[n][e]>=i);function Uc(t,e,i){let n=0,a=t.length;for(;n<a&&t[n]<e;)n++;for(;a>n&&t[a-1]>i;)a--;return n>0||a<t.length?t.slice(n,a):t}const Ta=["push","pop","shift","splice","unshift"];function Xc(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Ta.forEach(i=>{const n="_onData"+Yt(i),a=t[i];Object.defineProperty(t,i,{configurable:!0,enumerable:!1,value(...s){const c=a.apply(this,s);return t._chartjs.listeners.forEach(o=>{typeof o[n]=="function"&&o[n](...s)}),c}})})}function On(t,e){const i=t._chartjs;if(!i)return;const n=i.listeners,a=n.indexOf(e);a!==-1&&n.splice(a,1),!(n.length>0)&&(Ta.forEach(s=>{delete t[s]}),delete t._chartjs)}function Ha(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Wa=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function ja(t,e){let i=[],n=!1;return function(...a){i=a,n||(n=!0,Wa.call(window,()=>{n=!1,t.apply(e,i)}))}}function Jc(t,e){let i;return function(...n){return e?(clearTimeout(i),i=setTimeout(t,e,n)):t.apply(this,n),e}}const Ut=t=>t==="start"?"left":t==="end"?"right":"center",Z=(t,e,i)=>t==="start"?e:t==="end"?i:(e+i)/2,qc=(t,e,i,n)=>t===(n?"left":"right")?i:t==="center"?(e+i)/2:e;function Ya(t,e,i){const n=e.length;let a=0,s=n;if(t._sorted){const{iScale:c,_parsed:o}=t,r=c.axis,{min:d,max:f,minDefined:l,maxDefined:N}=c.getUserBounds();l&&(a=j(Math.min(pe(o,c.axis,d).lo,i?n:pe(e,r,c.getPixelForValue(d)).lo),0,n-1)),N?s=j(Math.max(pe(o,c.axis,f,!0).hi+1,i?0:pe(e,r,c.getPixelForValue(f),!0).hi+1),a,n)-a:s=n-a}return{start:a,count:s}}function $a(t){const{xScale:e,yScale:i,_scaleRanges:n}=t,a={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=a,!0;const s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,a),s}const Pi=t=>t===0||t===1,Vn=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*K/i)),Cn=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*K/i)+1,bi={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*F)+1,easeOutSine:t=>Math.sin(t*F),easeInOutSine:t=>-.5*(Math.cos(z*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Pi(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Pi(t)?t:Vn(t,.075,.3),easeOutElastic:t=>Pi(t)?t:Cn(t,.075,.3),easeInOutElastic(t){return Pi(t)?t:t<.5?.5*Vn(t*2,.1125,.45):.5+.5*Cn(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-bi.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?bi.easeInBounce(t*2)*.5:bi.easeOutBounce(t*2-1)*.5+.5};function Xt(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function An(t){return Xt(t)?t:new pi(t)}function Bt(t){return Xt(t)?t:new pi(t).saturate(.5).darken(.1).hexString()}const eo=["x","y","borderWidth","radius","tension"],io=["color","borderColor","backgroundColor"];function to(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:io},numbers:{type:"number",properties:eo}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function no(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Gn=new Map;function ao(t,e){e=e||{};const i=t+JSON.stringify(e);let n=Gn.get(i);return n||(n=new Intl.NumberFormat(t,e),Gn.set(i,n)),n}function ki(t,e,i){return ao(e,i).format(t)}const Za={values(t){return L(t)?t:""+t},numeric(t,e,i){if(t===0)return"0";const n=this.chart.options.locale;let a,s=t;if(i.length>1){const d=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(d<1e-4||d>1e15)&&(a="scientific"),s=so(t,i)}const c=Ce(Math.abs(s)),o=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),r={notation:a,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(r,this.options.ticks.format),ki(t,n,r)},logarithmic(t,e,i){if(t===0)return"0";const n=i[e].significand||t/Math.pow(10,Math.floor(Ce(t)));return[1,2,3,5,10,15].includes(n)||e>.8*i.length?Za.numeric.call(this,t,e,i):""}};function so(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}var dt={formatters:Za};function co(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,i)=>i.lineWidth,tickColor:(e,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:dt.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const ze=Object.create(null),kt=Object.create(null);function mi(t,e){if(!e)return t;const i=e.split(".");for(let n=0,a=i.length;n<a;++n){const s=i[n];t=t[s]||(t[s]=Object.create(null))}return t}function ut(t,e,i){return typeof e=="string"?Di(mi(t,e),i):Di(mi(t,""),e)}class oo{constructor(e,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,a)=>Bt(a.backgroundColor),this.hoverBorderColor=(n,a)=>Bt(a.borderColor),this.hoverColor=(n,a)=>Bt(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(i)}set(e,i){return ut(this,e,i)}get(e){return mi(this,e)}describe(e,i){return ut(kt,e,i)}override(e,i){return ut(ze,e,i)}route(e,i,n,a){const s=mi(this,e),c=mi(this,n),o="_"+i;Object.defineProperties(s,{[o]:{value:s[i],writable:!0},[i]:{enumerable:!0,get(){const r=this[o],d=c[a];return _(r)?Object.assign({},d,r):y(r,d)},set(r){this[o]=r}}})}apply(e){e.forEach(i=>i(this))}}var T=new oo({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[to,no,co]);function ro(t){return!t||Q(t.size)||Q(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function at(t,e,i,n,a){let s=e[a];return s||(s=e[a]=t.measureText(a).width,i.push(a)),s>n&&(n=s),n}function fo(t,e,i,n){n=n||{};let a=n.data=n.data||{},s=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},s=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let c=0;const o=i.length;let r,d,f,l,N;for(r=0;r<o;r++)if(l=i[r],l!=null&&!L(l))c=at(t,a,s,c,l);else if(L(l))for(d=0,f=l.length;d<f;d++)N=l[d],N!=null&&!L(N)&&(c=at(t,a,s,c,N));t.restore();const h=s.length/2;if(h>i.length){for(r=0;r<h;r++)delete a[s[r]];s.splice(0,h)}return c}function Me(t,e,i){const n=t.currentDevicePixelRatio,a=i!==0?Math.max(i/2,.5):0;return Math.round((e-a)*n)/n+a}function Sn(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function vt(t,e,i,n){Ua(t,e,i,n,null)}function Ua(t,e,i,n,a){let s,c,o,r,d,f,l,N;const h=e.pointStyle,g=e.rotation,B=e.radius;let u=(g||0)*Hc;if(h&&typeof h=="object"&&(s=h.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(i,n),t.rotate(u),t.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),t.restore();return}if(!(isNaN(B)||B<=0)){switch(t.beginPath(),h){default:a?t.ellipse(i,n,a/2,B,0,0,K):t.arc(i,n,B,0,K),t.closePath();break;case"triangle":f=a?a/2:B,t.moveTo(i+Math.sin(u)*f,n-Math.cos(u)*B),u+=xn,t.lineTo(i+Math.sin(u)*f,n-Math.cos(u)*B),u+=xn,t.lineTo(i+Math.sin(u)*f,n-Math.cos(u)*B),t.closePath();break;case"rectRounded":d=B*.516,r=B-d,c=Math.cos(u+_e)*r,l=Math.cos(u+_e)*(a?a/2-d:r),o=Math.sin(u+_e)*r,N=Math.sin(u+_e)*(a?a/2-d:r),t.arc(i-l,n-o,d,u-z,u-F),t.arc(i+N,n-c,d,u-F,u),t.arc(i+l,n+o,d,u,u+F),t.arc(i-N,n+c,d,u+F,u+z),t.closePath();break;case"rect":if(!g){r=Math.SQRT1_2*B,f=a?a/2:r,t.rect(i-f,n-r,2*f,2*r);break}u+=_e;case"rectRot":l=Math.cos(u)*(a?a/2:B),c=Math.cos(u)*B,o=Math.sin(u)*B,N=Math.sin(u)*(a?a/2:B),t.moveTo(i-l,n-o),t.lineTo(i+N,n-c),t.lineTo(i+l,n+o),t.lineTo(i-N,n+c),t.closePath();break;case"crossRot":u+=_e;case"cross":l=Math.cos(u)*(a?a/2:B),c=Math.cos(u)*B,o=Math.sin(u)*B,N=Math.sin(u)*(a?a/2:B),t.moveTo(i-l,n-o),t.lineTo(i+l,n+o),t.moveTo(i+N,n-c),t.lineTo(i-N,n+c);break;case"star":l=Math.cos(u)*(a?a/2:B),c=Math.cos(u)*B,o=Math.sin(u)*B,N=Math.sin(u)*(a?a/2:B),t.moveTo(i-l,n-o),t.lineTo(i+l,n+o),t.moveTo(i+N,n-c),t.lineTo(i-N,n+c),u+=_e,l=Math.cos(u)*(a?a/2:B),c=Math.cos(u)*B,o=Math.sin(u)*B,N=Math.sin(u)*(a?a/2:B),t.moveTo(i-l,n-o),t.lineTo(i+l,n+o),t.moveTo(i+N,n-c),t.lineTo(i-N,n+c);break;case"line":c=a?a/2:Math.cos(u)*B,o=Math.sin(u)*B,t.moveTo(i-c,n-o),t.lineTo(i+c,n+o);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(u)*(a?a/2:B),n+Math.sin(u)*B);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function De(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function ft(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function lt(t){t.restore()}function lo(t,e,i,n,a){if(!e)return t.lineTo(i.x,i.y);if(a==="middle"){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else a==="after"!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function No(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}function ho(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Q(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function go(t,e,i,n,a){if(a.strikethrough||a.underline){const s=t.measureText(n),c=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,r=i-s.actualBoundingBoxAscent,d=i+s.actualBoundingBoxDescent,f=a.strikethrough?(r+d)/2:d;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=a.decorationWidth||2,t.moveTo(c,f),t.lineTo(o,f),t.stroke()}}function Bo(t,e){const i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}function Ie(t,e,i,n,a,s={}){const c=L(e)?e:[e],o=s.strokeWidth>0&&s.strokeColor!=="";let r,d;for(t.save(),t.font=a.string,ho(t,s),r=0;r<c.length;++r)d=c[r],s.backdrop&&Bo(t,s.backdrop),o&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),Q(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(d,i,n,s.maxWidth)),t.fillText(d,i,n,s.maxWidth),go(t,i,n,d,s),n+=Number(a.lineHeight);t.restore()}function Ci(t,e){const{x:i,y:n,w:a,h:s,radius:c}=e;t.arc(i+c.topLeft,n+c.topLeft,c.topLeft,-F,z,!0),t.lineTo(i,n+s-c.bottomLeft),t.arc(i+c.bottomLeft,n+s-c.bottomLeft,c.bottomLeft,z,F,!0),t.lineTo(i+a-c.bottomRight,n+s),t.arc(i+a-c.bottomRight,n+s-c.bottomRight,c.bottomRight,F,0,!0),t.lineTo(i+a,n+c.topRight),t.arc(i+a-c.topRight,n+c.topRight,c.topRight,0,-F,!0),t.lineTo(i+c.topLeft,n)}const uo=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bo=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function mo(t,e){const i=(""+t).match(uo);if(!i||i[1]==="normal")return e*1.2;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100;break}return e*t}const xo=t=>+t||0;function Jt(t,e){const i={},n=_(e),a=n?Object.keys(e):e,s=_(t)?n?c=>y(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of a)i[c]=xo(s(c));return i}function Xa(t){return Jt(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ke(t){return Jt(t,["topLeft","topRight","bottomLeft","bottomRight"])}function X(t){const e=Xa(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function W(t,e){t=t||{},e=e||T.font;let i=y(t.size,e.size);typeof i=="string"&&(i=parseInt(i,10));let n=y(t.style,e.style);n&&!(""+n).match(bo)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const a={family:y(t.family,e.family),lineHeight:mo(y(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:y(t.weight,e.weight),string:""};return a.string=ro(a),a}function fi(t,e,i,n){let a=!0,s,c,o;for(s=0,c=t.length;s<c;++s)if(o=t[s],o!==void 0&&(e!==void 0&&typeof o=="function"&&(o=o(e),a=!1),i!==void 0&&L(o)&&(o=o[i%o.length],a=!1),o!==void 0))return n&&!a&&(n.cacheable=!1),o}function po(t,e,i){const{min:n,max:a}=t,s=Ea(e,(a-n)/2),c=(o,r)=>i&&o===0?0:o+r;return{min:c(n,-Math.abs(s)),max:c(a,s)}}function ve(t,e){return Object.assign(Object.create(t),e)}function qt(t,e=[""],i,n,a=()=>t[0]){const s=i||t;typeof n>"u"&&(n=is("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:n,_getTarget:a,override:o=>qt([o,...t],e,s,n)};return new Proxy(c,{deleteProperty(o,r){return delete o[r],delete o._keys,delete t[0][r],!0},get(o,r){return qa(o,r,()=>yo(r,e,t,o))},getOwnPropertyDescriptor(o,r){return Reflect.getOwnPropertyDescriptor(o._scopes[0],r)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(o,r){return kn(o).includes(r)},ownKeys(o){return kn(o)},set(o,r,d){const f=o._storage||(o._storage=a());return o[r]=f[r]=d,delete o._keys,!0}})}function Ue(t,e,i,n){const a={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Ja(t,n),setContext:s=>Ue(t,s,i,n),override:s=>Ue(t.override(s),e,i,n)};return new Proxy(a,{deleteProperty(s,c){return delete s[c],delete t[c],!0},get(s,c,o){return qa(s,c,()=>Oo(s,c,o))},getOwnPropertyDescriptor(s,c){return s._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(s,c,o){return t[c]=o,delete s[c],!0}})}function Ja(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:a=e.allKeys}=t;return{allKeys:a,scriptable:i,indexable:n,isScriptable:ke(i)?i:()=>i,isIndexable:ke(n)?n:()=>n}}const Do=(t,e)=>t?t+Yt(e):e,en=(t,e)=>_(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function qa(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const n=i();return t[e]=n,n}function Oo(t,e,i){const{_proxy:n,_context:a,_subProxy:s,_descriptors:c}=t;let o=n[e];return ke(o)&&c.isScriptable(e)&&(o=Vo(e,o,t,i)),L(o)&&o.length&&(o=Co(e,o,t,c.isIndexable)),en(e,o)&&(o=Ue(o,a,s&&s[e],c)),o}function Vo(t,e,i,n){const{_proxy:a,_context:s,_subProxy:c,_stack:o}=i;if(o.has(t))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);o.add(t);let r=e(s,c||n);return o.delete(t),en(t,r)&&(r=tn(a._scopes,a,t,r)),r}function Co(t,e,i,n){const{_proxy:a,_context:s,_subProxy:c,_descriptors:o}=i;if(typeof s.index<"u"&&n(t))return e[s.index%e.length];if(_(e[0])){const r=e,d=a._scopes.filter(f=>f!==r);e=[];for(const f of r){const l=tn(d,a,t,f);e.push(Ue(l,s,c&&c[t],o))}}return e}function es(t,e,i){return ke(t)?t(e,i):t}const Ao=(t,e)=>t===!0?e:typeof t=="string"?ye(e,t):void 0;function Go(t,e,i,n,a){for(const s of e){const c=Ao(i,s);if(c){t.add(c);const o=es(c._fallback,i,a);if(typeof o<"u"&&o!==i&&o!==n)return o}else if(c===!1&&typeof n<"u"&&i!==n)return null}return!1}function tn(t,e,i,n){const a=e._rootScopes,s=es(e._fallback,i,n),c=[...t,...a],o=new Set;o.add(n);let r=yn(o,c,i,s||i,n);return r===null||typeof s<"u"&&s!==i&&(r=yn(o,c,s,r,n),r===null)?!1:qt(Array.from(o),[""],a,s,()=>So(e,i,n))}function yn(t,e,i,n,a){for(;i;)i=Go(t,e,i,n,a);return i}function So(t,e,i){const n=t._getTarget();e in n||(n[e]={});const a=n[e];return L(a)&&_(i)?i:a||{}}function yo(t,e,i,n){let a;for(const s of e)if(a=is(Do(s,t),i),typeof a<"u")return en(t,a)?tn(i,n,t,a):a}function is(t,e){for(const i of e){if(!i)continue;const n=i[t];if(typeof n<"u")return n}}function kn(t){let e=t._keys;return e||(e=t._keys=ko(t._scopes)),e}function ko(t){const e=new Set;for(const i of t)for(const n of Object.keys(i).filter(a=>!a.startsWith("_")))e.add(n);return Array.from(e)}function ts(t,e,i,n){const{iScale:a}=t,{key:s="r"}=this._parsing,c=new Array(n);let o,r,d,f;for(o=0,r=n;o<r;++o)d=o+i,f=e[d],c[o]={r:a.parse(ye(f,s),d)};return c}const vo=Number.EPSILON||1e-14,Xe=(t,e)=>e<t.length&&!t[e].skip&&t[e],ns=t=>t==="x"?"y":"x";function _o(t,e,i,n){const a=t.skip?e:t,s=e,c=i.skip?e:i,o=yt(s,a),r=yt(c,s);let d=o/(o+r),f=r/(o+r);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const l=n*d,N=n*f;return{previous:{x:s.x-l*(c.x-a.x),y:s.y-l*(c.y-a.y)},next:{x:s.x+N*(c.x-a.x),y:s.y+N*(c.y-a.y)}}}function Mo(t,e,i){const n=t.length;let a,s,c,o,r,d=Xe(t,0);for(let f=0;f<n-1;++f)if(r=d,d=Xe(t,f+1),!(!r||!d)){if(ui(e[f],0,vo)){i[f]=i[f+1]=0;continue}a=i[f]/e[f],s=i[f+1]/e[f],o=Math.pow(a,2)+Math.pow(s,2),!(o<=9)&&(c=3/Math.sqrt(o),i[f]=a*c*e[f],i[f+1]=s*c*e[f])}}function Qo(t,e,i="x"){const n=ns(i),a=t.length;let s,c,o,r=Xe(t,0);for(let d=0;d<a;++d){if(c=o,o=r,r=Xe(t,d+1),!o)continue;const f=o[i],l=o[n];c&&(s=(f-c[i])/3,o[`cp1${i}`]=f-s,o[`cp1${n}`]=l-s*e[d]),r&&(s=(r[i]-f)/3,o[`cp2${i}`]=f+s,o[`cp2${n}`]=l+s*e[d])}}function wo(t,e="x"){const i=ns(e),n=t.length,a=Array(n).fill(0),s=Array(n);let c,o,r,d=Xe(t,0);for(c=0;c<n;++c)if(o=r,r=d,d=Xe(t,c+1),!!r){if(d){const f=d[e]-r[e];a[c]=f!==0?(d[i]-r[i])/f:0}s[c]=o?d?he(a[c-1])!==he(a[c])?0:(a[c-1]+a[c])/2:a[c-1]:a[c]}Mo(t,a,s),Qo(t,s,e)}function Ri(t,e,i){return Math.max(Math.min(t,i),e)}function Po(t,e){let i,n,a,s,c,o=De(t[0],e);for(i=0,n=t.length;i<n;++i)c=s,s=o,o=i<n-1&&De(t[i+1],e),s&&(a=t[i],c&&(a.cp1x=Ri(a.cp1x,e.left,e.right),a.cp1y=Ri(a.cp1y,e.top,e.bottom)),o&&(a.cp2x=Ri(a.cp2x,e.left,e.right),a.cp2y=Ri(a.cp2y,e.top,e.bottom)))}function Ro(t,e,i,n,a){let s,c,o,r;if(e.spanGaps&&(t=t.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")wo(t,a);else{let d=n?t[t.length-1]:t[0];for(s=0,c=t.length;s<c;++s)o=t[s],r=_o(d,o,t[Math.min(s+1,c-(n?0:1))%c],e.tension),o.cp1x=r.previous.x,o.cp1y=r.previous.y,o.cp2x=r.next.x,o.cp2y=r.next.y,d=o}e.capBezierPoints&&Po(t,i)}function as(){return typeof window<"u"&&typeof document<"u"}function nn(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function st(t,e,i){let n;return typeof t=="string"?(n=parseInt(t,10),t.indexOf("%")!==-1&&(n=n/100*e.parentNode[i])):n=t,n}const Nt=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function Lo(t,e){return Nt(t).getPropertyValue(e)}const Ko=["top","right","bottom","left"];function Ee(t,e,i){const n={};i=i?"-"+i:"";for(let a=0;a<4;a++){const s=Ko[a];n[s]=parseFloat(t[e+"-"+s+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const Eo=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);function zo(t,e){const i=t.touches,n=i&&i.length?i[0]:t,{offsetX:a,offsetY:s}=n;let c=!1,o,r;if(Eo(a,s,t.target))o=a,r=s;else{const d=e.getBoundingClientRect();o=n.clientX-d.left,r=n.clientY-d.top,c=!0}return{x:o,y:r,box:c}}function Pe(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:n}=e,a=Nt(i),s=a.boxSizing==="border-box",c=Ee(a,"padding"),o=Ee(a,"border","width"),{x:r,y:d,box:f}=zo(t,i),l=c.left+(f&&o.left),N=c.top+(f&&o.top);let{width:h,height:g}=e;return s&&(h-=c.width+o.width,g-=c.height+o.height),{x:Math.round((r-l)/h*i.width/n),y:Math.round((d-N)/g*i.height/n)}}function Io(t,e,i){let n,a;if(e===void 0||i===void 0){const s=nn(t);if(!s)e=t.clientWidth,i=t.clientHeight;else{const c=s.getBoundingClientRect(),o=Nt(s),r=Ee(o,"border","width"),d=Ee(o,"padding");e=c.width-d.width-r.width,i=c.height-d.height-r.height,n=st(o.maxWidth,s,"clientWidth"),a=st(o.maxHeight,s,"clientHeight")}}return{width:e,height:i,maxWidth:n||nt,maxHeight:a||nt}}const Li=t=>Math.round(t*10)/10;function Fo(t,e,i,n){const a=Nt(t),s=Ee(a,"margin"),c=st(a.maxWidth,t,"clientWidth")||nt,o=st(a.maxHeight,t,"clientHeight")||nt,r=Io(t,e,i);let{width:d,height:f}=r;if(a.boxSizing==="content-box"){const N=Ee(a,"border","width"),h=Ee(a,"padding");d-=h.width+N.width,f-=h.height+N.height}return d=Math.max(0,d-s.width),f=Math.max(0,n?d/n:f-s.height),d=Li(Math.min(d,c,r.maxWidth)),f=Li(Math.min(f,o,r.maxHeight)),d&&!f&&(f=Li(d/2)),(e!==void 0||i!==void 0)&&n&&r.height&&f>r.height&&(f=r.height,d=Li(Math.floor(f*n))),{width:d,height:f}}function vn(t,e,i){const n=e||1,a=Math.floor(t.height*n),s=Math.floor(t.width*n);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const c=t.canvas;return c.style&&(i||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==n||c.height!==a||c.width!==s?(t.currentDevicePixelRatio=n,c.height=a,c.width=s,t.ctx.setTransform(n,0,0,n,0,0),!0):!1}const To=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}();function _n(t,e){const i=Lo(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Re(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Ho(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:n==="middle"?i<.5?t.y:e.y:n==="after"?i<1?t.y:e.y:i>0?e.y:t.y}}function Wo(t,e,i,n){const a={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},c=Re(t,a,i),o=Re(a,s,i),r=Re(s,e,i),d=Re(c,o,i),f=Re(o,r,i);return Re(d,f,i)}const jo=function(t,e){return{x(i){return t+t+e-i},setWidth(i){e=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,n){return i-n},leftForLtr(i,n){return i-n}}},Yo=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function $e(t,e,i){return t?jo(e,i):Yo()}function ss(t,e){let i,n;(e==="ltr"||e==="rtl")&&(i=t.canvas.style,n=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function cs(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function os(t){return t==="angle"?{between:Vi,compare:Yc,normalize:te}:{between:xe,compare:(e,i)=>e-i,normalize:e=>e}}function Mn({start:t,end:e,count:i,loop:n,style:a}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i===0,style:a}}function $o(t,e,i){const{property:n,start:a,end:s}=i,{between:c,normalize:o}=os(n),r=e.length;let{start:d,end:f,loop:l}=t,N,h;if(l){for(d+=r,f+=r,N=0,h=r;N<h&&c(o(e[d%r][n]),a,s);++N)d--,f--;d%=r,f%=r}return f<d&&(f+=r),{start:d,end:f,loop:l,style:t.style}}function rs(t,e,i){if(!i)return[t];const{property:n,start:a,end:s}=i,c=e.length,{compare:o,between:r,normalize:d}=os(n),{start:f,end:l,loop:N,style:h}=$o(t,e,i),g=[];let B=!1,u=null,b,m,D;const p=()=>r(a,D,b)&&o(a,D)!==0,x=()=>o(s,b)===0||r(s,D,b),V=()=>B||p(),C=()=>!B||x();for(let A=f,G=f;A<=l;++A)m=e[A%c],!m.skip&&(b=d(m[n]),b!==D&&(B=r(b,a,s),u===null&&V()&&(u=o(b,a)===0?A:G),u!==null&&C()&&(g.push(Mn({start:u,end:A,loop:N,count:c,style:h})),u=null),G=A,D=b));return u!==null&&g.push(Mn({start:u,end:l,loop:N,count:c,style:h})),g}function ds(t,e){const i=[],n=t.segments;for(let a=0;a<n.length;a++){const s=rs(n[a],t.points,e);s.length&&i.push(...s)}return i}function Zo(t,e,i,n){let a=0,s=e-1;if(i&&!n)for(;a<e&&!t[a].skip;)a++;for(;a<e&&t[a].skip;)a++;for(a%=e,i&&(s+=a);s>a&&t[s%e].skip;)s--;return s%=e,{start:a,end:s}}function Uo(t,e,i,n){const a=t.length,s=[];let c=e,o=t[e],r;for(r=e+1;r<=i;++r){const d=t[r%a];d.skip||d.stop?o.skip||(n=!1,s.push({start:e%a,end:(r-1)%a,loop:n}),e=c=d.stop?r:null):(c=r,o.skip&&(e=r)),o=d}return c!==null&&s.push({start:e%a,end:c%a,loop:n}),s}function Xo(t,e){const i=t.points,n=t.options.spanGaps,a=i.length;if(!a)return[];const s=!!t._loop,{start:c,end:o}=Zo(i,a,s,n);if(n===!0)return Qn(t,[{start:c,end:o,loop:s}],i,e);const r=o<c?o+a:o,d=!!t._fullLoop&&c===0&&o===a-1;return Qn(t,Uo(i,c,r,d),i,e)}function Qn(t,e,i,n){return!n||!n.setContext||!i?e:Jo(t,e,i,n)}function Jo(t,e,i,n){const a=t._chart.getContext(),s=wn(t.options),{_datasetIndex:c,options:{spanGaps:o}}=t,r=i.length,d=[];let f=s,l=e[0].start,N=l;function h(g,B,u,b){const m=o?-1:1;if(g!==B){for(g+=r;i[g%r].skip;)g-=m;for(;i[B%r].skip;)B+=m;g%r!==B%r&&(d.push({start:g%r,end:B%r,loop:u,style:b}),f=b,l=B%r)}}for(const g of e){l=o?l:g.start;let B=i[l%r],u;for(N=l+1;N<=g.end;N++){const b=i[N%r];u=wn(n.setContext(ve(a,{type:"segment",p0:B,p1:b,p0DataIndex:(N-1)%r,p1DataIndex:N%r,datasetIndex:c}))),qo(u,f)&&h(l,N-1,g.loop,f),B=b,f=u}l<N-1&&h(l,N-1,g.loop,f)}return d}function wn(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function qo(t,e){if(!e)return!1;const i=[],n=function(a,s){return Xt(s)?(i.includes(s)||i.push(s),i.indexOf(s)):s};return JSON.stringify(t,n)!==JSON.stringify(e,n)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class er{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,i,n,a){const s=i.listeners[a],c=i.duration;s.forEach(o=>o({chart:e,initial:i.initial,numSteps:c,currentStep:Math.min(n-i.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Wa.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let i=0;this._charts.forEach((n,a)=>{if(!n.running||!n.items.length)return;const s=n.items;let c=s.length-1,o=!1,r;for(;c>=0;--c)r=s[c],r._active?(r._total>n.duration&&(n.duration=r._total),r.tick(e),o=!0):(s[c]=s[s.length-1],s.pop());o&&(a.draw(),this._notify(a,n,e,"progress")),s.length||(n.running=!1,this._notify(a,n,e,"complete"),n.initial=!1),i+=s.length}),this._lastDate=e,i===0&&(this._running=!1)}_getAnims(e){const i=this._charts;let n=i.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(e,n)),n}listen(e,i,n){this._getAnims(e).listeners[i].push(n)}add(e,i){!i||!i.length||this._getAnims(e).items.push(...i)}has(e){return this._getAnims(e).items.length>0}start(e){const i=this._charts.get(e);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((n,a)=>Math.max(n,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const i=this._charts.get(e);return!(!i||!i.running||!i.items.length)}stop(e){const i=this._charts.get(e);if(!i||!i.items.length)return;const n=i.items;let a=n.length-1;for(;a>=0;--a)n[a].cancel();i.items=[],this._notify(e,i,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Be=new er;const Pn="transparent",ir={boolean(t,e,i){return i>.5?e:t},color(t,e,i){const n=An(t||Pn),a=n.valid&&An(e||Pn);return a&&a.valid?a.mix(n,i).hexString():e},number(t,e,i){return t+(e-t)*i}};class tr{constructor(e,i,n,a){const s=i[n];a=fi([e.to,a,s,e.from]);const c=fi([e.from,s,a]);this._active=!0,this._fn=e.fn||ir[e.type||typeof c],this._easing=bi[e.easing]||bi.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=i,this._prop=n,this._from=c,this._to=a,this._promises=void 0}active(){return this._active}update(e,i,n){if(this._active){this._notify(!1);const a=this._target[this._prop],s=n-this._start,c=this._duration-s;this._start=n,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=fi([e.to,i,a,e.from]),this._from=fi([e.from,a,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const i=e-this._start,n=this._duration,a=this._prop,s=this._from,c=this._loop,o=this._to;let r;if(this._active=s!==o&&(c||i<n),!this._active){this._target[a]=o,this._notify(!0);return}if(i<0){this._target[a]=s;return}r=i/n%2,r=c&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[a]=this._fn(s,o,r)}wait(){const e=this._promises||(this._promises=[]);return new Promise((i,n)=>{e.push({res:i,rej:n})})}_notify(e){const i=e?"res":"rej",n=this._promises||[];for(let a=0;a<n.length;a++)n[a][i]()}}class fs{constructor(e,i){this._chart=e,this._properties=new Map,this.configure(i)}configure(e){if(!_(e))return;const i=Object.keys(T.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const s=e[a];if(!_(s))return;const c={};for(const o of i)c[o]=s[o];(L(s.properties)&&s.properties||[a]).forEach(o=>{(o===a||!n.has(o))&&n.set(o,c)})})}_animateOptions(e,i){const n=i.options,a=ar(e,n);if(!a)return[];const s=this._createAnimations(a,n);return n.$shared&&nr(e.options.$animations,n).then(()=>{e.options=n},()=>{}),s}_createAnimations(e,i){const n=this._properties,a=[],s=e.$animations||(e.$animations={}),c=Object.keys(i),o=Date.now();let r;for(r=c.length-1;r>=0;--r){const d=c[r];if(d.charAt(0)==="$")continue;if(d==="options"){a.push(...this._animateOptions(e,i));continue}const f=i[d];let l=s[d];const N=n.get(d);if(l)if(N&&l.active()){l.update(N,f,o);continue}else l.cancel();if(!N||!N.duration){e[d]=f;continue}s[d]=l=new tr(N,e,d,f),a.push(l)}return a}update(e,i){if(this._properties.size===0){Object.assign(e,i);return}const n=this._createAnimations(e,i);if(n.length)return Be.add(this._chart,n),!0}}function nr(t,e){const i=[],n=Object.keys(e);for(let a=0;a<n.length;a++){const s=t[n[a]];s&&s.active()&&i.push(s.wait())}return Promise.all(i)}function ar(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function Rn(t,e){const i=t&&t.options||{},n=i.reverse,a=i.min===void 0?e:0,s=i.max===void 0?e:0;return{start:n?s:a,end:n?a:s}}function sr(t,e,i){if(i===!1)return!1;const n=Rn(t,i),a=Rn(e,i);return{top:a.end,right:n.end,bottom:a.start,left:n.start}}function cr(t){let e,i,n,a;return _(t)?(e=t.top,i=t.right,n=t.bottom,a=t.left):e=i=n=a=t,{top:e,right:i,bottom:n,left:a,disabled:t===!1}}function ls(t,e){const i=[],n=t._getSortedDatasetMetas(e);let a,s;for(a=0,s=n.length;a<s;++a)i.push(n[a].index);return i}function Ln(t,e,i,n={}){const a=t.keys,s=n.mode==="single";let c,o,r,d;if(e!==null){for(c=0,o=a.length;c<o;++c){if(r=+a[c],r===i){if(n.all)continue;break}d=t.values[r],I(d)&&(s||e===0||he(e)===he(d))&&(e+=d)}return e}}function or(t){const e=Object.keys(t),i=new Array(e.length);let n,a,s;for(n=0,a=e.length;n<a;++n)s=e[n],i[n]={x:s,y:t[s]};return i}function Kn(t,e){const i=t&&t.options.stacked;return i||i===void 0&&e.stack!==void 0}function rr(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}function dr(t){const{min:e,max:i,minDefined:n,maxDefined:a}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:a?i:Number.POSITIVE_INFINITY}}function fr(t,e,i){const n=t[e]||(t[e]={});return n[i]||(n[i]={})}function En(t,e,i,n){for(const a of e.getMatchingVisibleMetas(n).reverse()){const s=t[a.index];if(i&&s>0||!i&&s<0)return a.index}return null}function zn(t,e){const{chart:i,_cachedMeta:n}=t,a=i._stacks||(i._stacks={}),{iScale:s,vScale:c,index:o}=n,r=s.axis,d=c.axis,f=rr(s,c,n),l=e.length;let N;for(let h=0;h<l;++h){const g=e[h],{[r]:B,[d]:u}=g,b=g._stacks||(g._stacks={});N=b[d]=fr(a,f,B),N[o]=u,N._top=En(N,c,!0,n.type),N._bottom=En(N,c,!1,n.type);const m=N._visualValues||(N._visualValues={});m[o]=u}}function bt(t,e){const i=t.scales;return Object.keys(i).filter(n=>i[n].axis===e).shift()}function lr(t,e){return ve(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Nr(t,e,i){return ve(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}function ai(t,e){const i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n){e=e||t._parsed;for(const a of e){const s=a._stacks;if(!s||s[n]===void 0||s[n][i]===void 0)return;delete s[n][i],s[n]._visualValues!==void 0&&s[n]._visualValues[i]!==void 0&&delete s[n]._visualValues[i]}}}const mt=t=>t==="reset"||t==="none",In=(t,e)=>e?t:Object.assign({},t),hr=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ls(i,!0),values:null};class de{constructor(e,i){this.chart=e,this._ctx=e.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Kn(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ai(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,i=this._cachedMeta,n=this.getDataset(),a=(l,N,h,g)=>l==="x"?N:l==="r"?g:h,s=i.xAxisID=y(n.xAxisID,bt(e,"x")),c=i.yAxisID=y(n.yAxisID,bt(e,"y")),o=i.rAxisID=y(n.rAxisID,bt(e,"r")),r=i.indexAxis,d=i.iAxisID=a(r,s,c,o),f=i.vAxisID=a(r,c,s,o);i.xScale=this.getScaleForId(s),i.yScale=this.getScaleForId(c),i.rScale=this.getScaleForId(o),i.iScale=this.getScaleForId(d),i.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const i=this._cachedMeta;return e===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&On(this._data,this),e._stacked&&ai(e)}_dataCheck(){const e=this.getDataset(),i=e.data||(e.data=[]),n=this._data;if(_(i))this._data=or(i);else if(n!==i){if(n){On(n,this);const a=this._cachedMeta;ai(a),a._parsed=[]}i&&Object.isExtensible(i)&&Xc(i,this),this._syncList=[],this._data=i}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const i=this._cachedMeta,n=this.getDataset();let a=!1;this._dataCheck();const s=i._stacked;i._stacked=Kn(i.vScale,i),i.stack!==n.stack&&(a=!0,ai(i),i.stack=n.stack),this._resyncElements(e),(a||s!==i._stacked)&&zn(this,i._parsed)}configure(){const e=this.chart.config,i=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),i,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,i){const{_cachedMeta:n,_data:a}=this,{iScale:s,_stacked:c}=n,o=s.axis;let r=e===0&&i===a.length?!0:n._sorted,d=e>0&&n._parsed[e-1],f,l,N;if(this._parsing===!1)n._parsed=a,n._sorted=!0,N=a;else{L(a[e])?N=this.parseArrayData(n,a,e,i):_(a[e])?N=this.parseObjectData(n,a,e,i):N=this.parsePrimitiveData(n,a,e,i);const h=()=>l[o]===null||d&&l[o]<d[o];for(f=0;f<i;++f)n._parsed[f+e]=l=N[f],r&&(h()&&(r=!1),d=l);n._sorted=r}c&&zn(this,N)}parsePrimitiveData(e,i,n,a){const{iScale:s,vScale:c}=e,o=s.axis,r=c.axis,d=s.getLabels(),f=s===c,l=new Array(a);let N,h,g;for(N=0,h=a;N<h;++N)g=N+n,l[N]={[o]:f||s.parse(d[g],g),[r]:c.parse(i[g],g)};return l}parseArrayData(e,i,n,a){const{xScale:s,yScale:c}=e,o=new Array(a);let r,d,f,l;for(r=0,d=a;r<d;++r)f=r+n,l=i[f],o[r]={x:s.parse(l[0],f),y:c.parse(l[1],f)};return o}parseObjectData(e,i,n,a){const{xScale:s,yScale:c}=e,{xAxisKey:o="x",yAxisKey:r="y"}=this._parsing,d=new Array(a);let f,l,N,h;for(f=0,l=a;f<l;++f)N=f+n,h=i[N],d[f]={x:s.parse(ye(h,o),N),y:c.parse(ye(h,r),N)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,i,n){const a=this.chart,s=this._cachedMeta,c=i[e.axis],o={keys:ls(a,!0),values:i._stacks[e.axis]._visualValues};return Ln(o,c,s.index,{mode:n})}updateRangeFromParsed(e,i,n,a){const s=n[i.axis];let c=s===null?NaN:s;const o=a&&n._stacks[i.axis];a&&o&&(a.values=o,c=Ln(a,s,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,i){const n=this._cachedMeta,a=n._parsed,s=n._sorted&&e===n.iScale,c=a.length,o=this._getOtherScale(e),r=hr(i,n,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:l}=dr(o);let N,h;function g(){h=a[N];const B=h[o.axis];return!I(h[e.axis])||f>B||l<B}for(N=0;N<c&&!(!g()&&(this.updateRangeFromParsed(d,e,h,r),s));++N);if(s){for(N=c-1;N>=0;--N)if(!g()){this.updateRangeFromParsed(d,e,h,r);break}}return d}getAllParsedValues(e){const i=this._cachedMeta._parsed,n=[];let a,s,c;for(a=0,s=i.length;a<s;++a)c=i[a][e.axis],I(c)&&n.push(c);return n}getMaxOverflow(){return!1}getLabelAndValue(e){const i=this._cachedMeta,n=i.iScale,a=i.vScale,s=this.getParsed(e);return{label:n?""+n.getLabelForValue(s[n.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(e){const i=this._cachedMeta;this.update(e||"default"),i._clip=cr(y(this.options.clip,sr(i.xScale,i.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,i=this.chart,n=this._cachedMeta,a=n.data||[],s=i.chartArea,c=[],o=this._drawStart||0,r=this._drawCount||a.length-o,d=this.options.drawActiveElementsOnTop;let f;for(n.dataset&&n.dataset.draw(e,s,o,r),f=o;f<o+r;++f){const l=a[f];l.hidden||(l.active&&d?c.push(l):l.draw(e,s))}for(f=0;f<c.length;++f)c[f].draw(e,s)}getStyle(e,i){const n=i?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,i,n){const a=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];s=c.$context||(c.$context=Nr(this.getContext(),e,c)),s.parsed=this.getParsed(e),s.raw=a.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=lr(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!i,s.mode=n,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,i){return this._resolveElementOptions(this.dataElementType.id,i,e)}_resolveElementOptions(e,i="default",n){const a=i==="active",s=this._cachedDataOpts,c=e+"-"+i,o=s[c],r=this.enableOptionSharing&&Oi(n);if(o)return In(o,r);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,e),l=a?[`${e}Hover`,"hover",e,""]:[e,""],N=d.getOptionScopes(this.getDataset(),f),h=Object.keys(T.elements[e]),g=()=>this.getContext(n,a,i),B=d.resolveNamedOptions(N,h,g,l);return B.$shared&&(B.$shared=r,s[c]=Object.freeze(In(B,r))),B}_resolveAnimations(e,i,n){const a=this.chart,s=this._cachedDataOpts,c=`animation-${i}`,o=s[c];if(o)return o;let r;if(a.options.animation!==!1){const f=this.chart.config,l=f.datasetAnimationScopeKeys(this._type,i),N=f.getOptionScopes(this.getDataset(),l);r=f.createResolver(N,this.getContext(e,n,i))}const d=new fs(a,r&&r.animations);return r&&r._cacheable&&(s[c]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,i){return!i||mt(e)||this.chart._animationsDisabled}_getSharedOptions(e,i){const n=this.resolveDataElementOptions(e,i),a=this._sharedOptions,s=this.getSharedOptions(n),c=this.includeOptions(i,s)||s!==a;return this.updateSharedOptions(s,i,n),{sharedOptions:s,includeOptions:c}}updateElement(e,i,n,a){mt(a)?Object.assign(e,n):this._resolveAnimations(i,a).update(e,n)}updateSharedOptions(e,i,n){e&&!mt(i)&&this._resolveAnimations(void 0,i).update(e,n)}_setStyle(e,i,n,a){e.active=a;const s=this.getStyle(i,a);this._resolveAnimations(i,n,a).update(e,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(e,i,n){this._setStyle(e,n,"active",!1)}setHoverStyle(e,i,n){this._setStyle(e,n,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const i=this._data,n=this._cachedMeta.data;for(const[o,r,d]of this._syncList)this[o](r,d);this._syncList=[];const a=n.length,s=i.length,c=Math.min(s,a);c&&this.parse(0,c),s>a?this._insertElements(a,s-a,e):s<a&&this._removeElements(s,a-s)}_insertElements(e,i,n=!0){const a=this._cachedMeta,s=a.data,c=e+i;let o;const r=d=>{for(d.length+=i,o=d.length-1;o>=c;o--)d[o]=d[o-i]};for(r(s),o=e;o<c;++o)s[o]=new this.dataElementType;this._parsing&&r(a._parsed),this.parse(e,i),n&&this.updateElements(s,e,i,"reset")}updateElements(e,i,n,a){}_removeElements(e,i){const n=this._cachedMeta;if(this._parsing){const a=n._parsed.splice(e,i);n._stacked&&ai(n,a)}n.data.splice(e,i)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[i,n,a]=e;this[i](n,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,i){i&&this._sync(["_removeElements",e,i]);const n=arguments.length-2;n&&this._sync(["_insertElements",e,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}O(de,"defaults",{}),O(de,"datasetElementType",null),O(de,"dataElementType",null);function gr(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let n=[];for(let a=0,s=i.length;a<s;a++)n=n.concat(i[a].controller.getAllParsedValues(t));t._cache.$bar=Ha(n.sort((a,s)=>a-s))}return t._cache.$bar}function Br(t){const e=t.iScale,i=gr(e,t.type);let n=e._length,a,s,c,o;const r=()=>{c===32767||c===-32768||(Oi(o)&&(n=Math.min(n,Math.abs(c-o)||n)),o=c)};for(a=0,s=i.length;a<s;++a)c=e.getPixelForValue(i[a]),r();for(o=void 0,a=0,s=e.ticks.length;a<s;++a)c=e.getPixelForTick(a),r();return n}function ur(t,e,i,n){const a=i.barThickness;let s,c;return Q(a)?(s=e.min*i.categoryPercentage,c=i.barPercentage):(s=a*n,c=1),{chunk:s/n,ratio:c,start:e.pixels[t]-s/2}}function br(t,e,i,n){const a=e.pixels,s=a[t];let c=t>0?a[t-1]:null,o=t<a.length-1?a[t+1]:null;const r=i.categoryPercentage;c===null&&(c=s-(o===null?e.end-e.start:o-s)),o===null&&(o=s+s-c);const d=s-(s-Math.min(c,o))/2*r;return{chunk:Math.abs(o-c)/2*r/n,ratio:i.barPercentage,start:d}}function mr(t,e,i,n){const a=i.parse(t[0],n),s=i.parse(t[1],n),c=Math.min(a,s),o=Math.max(a,s);let r=c,d=o;Math.abs(c)>Math.abs(o)&&(r=o,d=c),e[i.axis]=d,e._custom={barStart:r,barEnd:d,start:a,end:s,min:c,max:o}}function Ns(t,e,i,n){return L(t)?mr(t,e,i,n):e[i.axis]=i.parse(t,n),e}function Fn(t,e,i,n){const a=t.iScale,s=t.vScale,c=a.getLabels(),o=a===s,r=[];let d,f,l,N;for(d=i,f=i+n;d<f;++d)N=e[d],l={},l[a.axis]=o||a.parse(c[d],d),r.push(Ns(N,l,s,d));return r}function xt(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function xr(t,e,i){return t!==0?he(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}function pr(t){let e,i,n,a,s;return t.horizontal?(e=t.base>t.x,i="left",n="right"):(e=t.base<t.y,i="bottom",n="top"),e?(a="end",s="start"):(a="start",s="end"),{start:i,end:n,reverse:e,top:a,bottom:s}}function Dr(t,e,i,n){let a=e.borderSkipped;const s={};if(!a){t.borderSkipped=s;return}if(a===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:o,reverse:r,top:d,bottom:f}=pr(t);a==="middle"&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?a=d:(i._bottom||0)===n?a=f:(s[Tn(f,c,o,r)]=!0,a=d)),s[Tn(a,c,o,r)]=!0,t.borderSkipped=s}function Tn(t,e,i,n){return n?(t=Or(t,e,i),t=Hn(t,i,e)):t=Hn(t,e,i),t}function Or(t,e,i){return t===e?i:t===i?e:t}function Hn(t,e,i){return t==="start"?e:t==="end"?i:t}function Vr(t,{inflateAmount:e},i){t.inflateAmount=e==="auto"?i===1?.33:0:e}class ji extends de{parsePrimitiveData(e,i,n,a){return Fn(e,i,n,a)}parseArrayData(e,i,n,a){return Fn(e,i,n,a)}parseObjectData(e,i,n,a){const{iScale:s,vScale:c}=e,{xAxisKey:o="x",yAxisKey:r="y"}=this._parsing,d=s.axis==="x"?o:r,f=c.axis==="x"?o:r,l=[];let N,h,g,B;for(N=n,h=n+a;N<h;++N)B=i[N],g={},g[s.axis]=s.parse(ye(B,d),N),l.push(Ns(ye(B,f),g,c,N));return l}updateRangeFromParsed(e,i,n,a){super.updateRangeFromParsed(e,i,n,a);const s=n._custom;s&&i===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const i=this._cachedMeta,{iScale:n,vScale:a}=i,s=this.getParsed(e),c=s._custom,o=xt(c)?"["+c.start+", "+c.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+n.getLabelForValue(s[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,e)}updateElements(e,i,n,a){const s=a==="reset",{index:c,_cachedMeta:{vScale:o}}=this,r=o.getBasePixel(),d=o.isHorizontal(),f=this._getRuler(),{sharedOptions:l,includeOptions:N}=this._getSharedOptions(i,a);for(let h=i;h<i+n;h++){const g=this.getParsed(h),B=s||Q(g[o.axis])?{base:r,head:r}:this._calculateBarValuePixels(h),u=this._calculateBarIndexPixels(h,f),b=(g._stacks||{})[o.axis],m={horizontal:d,base:B.base,enableBorderRadius:!b||xt(g._custom)||c===b._top||c===b._bottom,x:d?B.head:u.center,y:d?u.center:B.head,height:d?u.size:Math.abs(B.size),width:d?Math.abs(B.size):u.size};N&&(m.options=l||this.resolveDataElementOptions(h,e[h].active?"active":a));const D=m.options||e[h].options;Dr(m,D,b,c),Vr(m,D,f.ratio),this.updateElement(e[h],h,m,a)}}_getStacks(e,i){const{iScale:n}=this._cachedMeta,a=n.getMatchingVisibleMetas(this._type).filter(r=>r.controller.options.grouped),s=n.options.stacked,c=[],o=r=>{const d=r.controller.getParsed(i),f=d&&d[r.vScale.axis];if(Q(f)||isNaN(f))return!0};for(const r of a)if(!(i!==void 0&&o(r))&&((s===!1||c.indexOf(r.stack)===-1||s===void 0&&r.stack===void 0)&&c.push(r.stack),r.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,i,n){const a=this._getStacks(e,n),s=i!==void 0?a.indexOf(i):-1;return s===-1?a.length-1:s}_getRuler(){const e=this.options,i=this._cachedMeta,n=i.iScale,a=[];let s,c;for(s=0,c=i.data.length;s<c;++s)a.push(n.getPixelForValue(this.getParsed(s)[n.axis],s));const o=e.barThickness;return{min:o||Br(i),pixels:a,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:i,_stacked:n,index:a},options:{base:s,minBarLength:c}}=this,o=s||0,r=this.getParsed(e),d=r._custom,f=xt(d);let l=r[i.axis],N=0,h=n?this.applyStack(i,r,n):l,g,B;h!==l&&(N=h-l,h=l),f&&(l=d.barStart,h=d.barEnd-d.barStart,l!==0&&he(l)!==he(d.barEnd)&&(N=0),N+=l);const u=!Q(s)&&!f?s:N;let b=i.getPixelForValue(u);if(this.chart.getDataVisibility(e)?g=i.getPixelForValue(N+h):g=b,B=g-b,Math.abs(B)<c){B=xr(B,i,o)*c,l===o&&(b-=B/2);const m=i.getPixelForDecimal(0),D=i.getPixelForDecimal(1),p=Math.min(m,D),x=Math.max(m,D);b=Math.max(Math.min(b,x),p),g=b+B,n&&!f&&(r._stacks[i.axis]._visualValues[a]=i.getValueForPixel(g)-i.getValueForPixel(b))}if(b===i.getPixelForValue(o)){const m=he(B)*i.getLineWidthForValue(o)/2;b+=m,B-=m}return{size:B,base:b,head:g,center:g+B/2}}_calculateBarIndexPixels(e,i){const n=i.scale,a=this.options,s=a.skipNull,c=y(a.maxBarThickness,1/0);let o,r;if(i.grouped){const d=s?this._getStackCount(e):i.stackCount,f=a.barThickness==="flex"?br(e,i,a,d):ur(e,i,a,d),l=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0);o=f.start+f.chunk*l+f.chunk/2,r=Math.min(c,f.chunk*f.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),r=Math.min(c,i.min*i.ratio);return{base:o-r/2,head:o+r/2,center:o,size:r}}draw(){const e=this._cachedMeta,i=e.vScale,n=e.data,a=n.length;let s=0;for(;s<a;++s)this.getParsed(s)[i.axis]!==null&&n[s].draw(this._ctx)}}O(ji,"id","bar"),O(ji,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),O(ji,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Yi extends de{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,i,n,a){const s=super.parsePrimitiveData(e,i,n,a);for(let c=0;c<s.length;c++)s[c]._custom=this.resolveDataElementOptions(c+n).radius;return s}parseArrayData(e,i,n,a){const s=super.parseArrayData(e,i,n,a);for(let c=0;c<s.length;c++){const o=i[n+c];s[c]._custom=y(o[2],this.resolveDataElementOptions(c+n).radius)}return s}parseObjectData(e,i,n,a){const s=super.parseObjectData(e,i,n,a);for(let c=0;c<s.length;c++){const o=i[n+c];s[c]._custom=y(o&&o.r&&+o.r,this.resolveDataElementOptions(c+n).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let i=0;for(let n=e.length-1;n>=0;--n)i=Math.max(i,e[n].size(this.resolveDataElementOptions(n))/2);return i>0&&i}getLabelAndValue(e){const i=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=i,c=this.getParsed(e),o=a.getLabelForValue(c.x),r=s.getLabelForValue(c.y),d=c._custom;return{label:n[e]||"",value:"("+o+", "+r+(d?", "+d:"")+")"}}update(e){const i=this._cachedMeta.data;this.updateElements(i,0,i.length,e)}updateElements(e,i,n,a){const s=a==="reset",{iScale:c,vScale:o}=this._cachedMeta,{sharedOptions:r,includeOptions:d}=this._getSharedOptions(i,a),f=c.axis,l=o.axis;for(let N=i;N<i+n;N++){const h=e[N],g=!s&&this.getParsed(N),B={},u=B[f]=s?c.getPixelForDecimal(.5):c.getPixelForValue(g[f]),b=B[l]=s?o.getBasePixel():o.getPixelForValue(g[l]);B.skip=isNaN(u)||isNaN(b),d&&(B.options=r||this.resolveDataElementOptions(N,h.active?"active":a),s&&(B.options.radius=0)),this.updateElement(h,N,B,a)}}resolveDataElementOptions(e,i){const n=this.getParsed(e);let a=super.resolveDataElementOptions(e,i);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return i!=="active"&&(a.radius=0),a.radius+=y(n&&n._custom,s),a}}O(Yi,"id","bubble"),O(Yi,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),O(Yi,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Cr(t,e,i){let n=1,a=1,s=0,c=0;if(e<K){const o=t,r=o+e,d=Math.cos(o),f=Math.sin(o),l=Math.cos(r),N=Math.sin(r),h=(D,p,x)=>Vi(D,o,r,!0)?1:Math.max(p,p*i,x,x*i),g=(D,p,x)=>Vi(D,o,r,!0)?-1:Math.min(p,p*i,x,x*i),B=h(0,d,l),u=h(F,f,N),b=g(z,d,l),m=g(z+F,f,N);n=(B-b)/2,a=(u-m)/2,s=-(B+b)/2,c=-(u+m)/2}return{ratioX:n,ratioY:a,offsetX:s,offsetY:c}}class Le extends de{constructor(e,i){super(e,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,i){const n=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=n;else{let s=r=>+n[r];if(_(n[e])){const{key:r="value"}=this._parsing;s=d=>+ye(n[d],r)}let c,o;for(c=e,o=e+i;c<o;++c)a._parsed[c]=s(c)}}_getRotation(){return re(this.options.rotation-90)}_getCircumference(){return re(this.options.circumference)}_getRotationExtents(){let e=K,i=-K;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const a=this.chart.getDatasetMeta(n).controller,s=a._getRotation(),c=a._getCircumference();e=Math.min(e,s),i=Math.max(i,s+c)}return{rotation:e,circumference:i-e}}update(e){const i=this.chart,{chartArea:n}=i,a=this._cachedMeta,s=a.data,c=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-c)/2,0),r=Math.min(Lc(this.options.cutout,o),1),d=this._getRingWeight(this.index),{circumference:f,rotation:l}=this._getRotationExtents(),{ratioX:N,ratioY:h,offsetX:g,offsetY:B}=Cr(l,f,r),u=(n.width-c)/N,b=(n.height-c)/h,m=Math.max(Math.min(u,b)/2,0),D=Ea(this.options.radius,m),p=Math.max(D*r,0),x=(D-p)/this._getVisibleDatasetWeightTotal();this.offsetX=g*D,this.offsetY=B*D,a.total=this.calculateTotal(),this.outerRadius=D-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*d,0),this.updateElements(s,0,s.length,e)}_circumference(e,i){const n=this.options,a=this._cachedMeta,s=this._getCircumference();return i&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*s/K)}updateElements(e,i,n,a){const s=a==="reset",c=this.chart,o=c.chartArea,d=c.options.animation,f=(o.left+o.right)/2,l=(o.top+o.bottom)/2,N=s&&d.animateScale,h=N?0:this.innerRadius,g=N?0:this.outerRadius,{sharedOptions:B,includeOptions:u}=this._getSharedOptions(i,a);let b=this._getRotation(),m;for(m=0;m<i;++m)b+=this._circumference(m,s);for(m=i;m<i+n;++m){const D=this._circumference(m,s),p=e[m],x={x:f+this.offsetX,y:l+this.offsetY,startAngle:b,endAngle:b+D,circumference:D,outerRadius:g,innerRadius:h};u&&(x.options=B||this.resolveDataElementOptions(m,p.active?"active":a)),b+=D,this.updateElement(p,m,x,a)}}calculateTotal(){const e=this._cachedMeta,i=e.data;let n=0,a;for(a=0;a<i.length;a++){const s=e._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!i[a].hidden&&(n+=Math.abs(s))}return n}calculateCircumference(e){const i=this._cachedMeta.total;return i>0&&!isNaN(e)?K*(Math.abs(e)/i):0}getLabelAndValue(e){const i=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=ki(i._parsed[e],n.options.locale);return{label:a[e]||"",value:s}}getMaxBorderWidth(e){let i=0;const n=this.chart;let a,s,c,o,r;if(!e){for(a=0,s=n.data.datasets.length;a<s;++a)if(n.isDatasetVisible(a)){c=n.getDatasetMeta(a),e=c.data,o=c.controller;break}}if(!e)return 0;for(a=0,s=e.length;a<s;++a)r=o.resolveDataElementOptions(a),r.borderAlign!=="inner"&&(i=Math.max(i,r.borderWidth||0,r.hoverBorderWidth||0));return i}getMaxOffset(e){let i=0;for(let n=0,a=e.length;n<a;++n){const s=this.resolveDataElementOptions(n);i=Math.max(i,s.offset||0,s.hoverOffset||0)}return i}_getRingWeightOffset(e){let i=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(i+=this._getRingWeight(n));return i}_getRingWeight(e){return Math.max(y(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}O(Le,"id","doughnut"),O(Le,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),O(Le,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),O(Le,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const i=e.data;if(i.labels.length&&i.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return i.labels.map((s,c)=>{const r=e.getDatasetMeta(0).controller.getStyle(c);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(c),index:c}})}return[]}},onClick(e,i,n){n.chart.toggleDataVisibility(i.index),n.chart.update()}}}});class $i extends de{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const i=this._cachedMeta,{dataset:n,data:a=[],_dataset:s}=i,c=this.chart._animationsDisabled;let{start:o,count:r}=Ya(i,a,c);this._drawStart=o,this._drawCount=r,$a(i)&&(o=0,r=a.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!s._decimated,n.points=a;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(n,void 0,{animated:!c,options:d},e),this.updateElements(a,o,r,e)}updateElements(e,i,n,a){const s=a==="reset",{iScale:c,vScale:o,_stacked:r,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:l}=this._getSharedOptions(i,a),N=c.axis,h=o.axis,{spanGaps:g,segment:B}=this.options,u=Ze(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||s||a==="none",m=i+n,D=e.length;let p=i>0&&this.getParsed(i-1);for(let x=0;x<D;++x){const V=e[x],C=b?V:{};if(x<i||x>=m){C.skip=!0;continue}const A=this.getParsed(x),G=Q(A[h]),k=C[N]=c.getPixelForValue(A[N],x),v=C[h]=s||G?o.getBasePixel():o.getPixelForValue(r?this.applyStack(o,A,r):A[h],x);C.skip=isNaN(k)||isNaN(v)||G,C.stop=x>0&&Math.abs(A[N]-p[N])>u,B&&(C.parsed=A,C.raw=d.data[x]),l&&(C.options=f||this.resolveDataElementOptions(x,V.active?"active":a)),b||this.updateElement(V,x,C,a),p=A}}getMaxOverflow(){const e=this._cachedMeta,i=e.dataset,n=i.options&&i.options.borderWidth||0,a=e.data||[];if(!a.length)return n;const s=a[0].size(this.resolveDataElementOptions(0)),c=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(n,s,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}O($i,"id","line"),O($i,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),O($i,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class xi extends de{constructor(e,i){super(e,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const i=this._cachedMeta,n=this.chart,a=n.data.labels||[],s=ki(i._parsed[e].r,n.options.locale);return{label:a[e]||"",value:s}}parseObjectData(e,i,n,a){return ts.bind(this)(e,i,n,a)}update(e){const i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,e)}getMinMax(){const e=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((n,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<i.min&&(i.min=s),s>i.max&&(i.max=s))}),i}_updateRadius(){const e=this.chart,i=e.chartArea,n=e.options,a=Math.min(i.right-i.left,i.bottom-i.top),s=Math.max(a/2,0),c=Math.max(n.cutoutPercentage?s/100*n.cutoutPercentage:1,0),o=(s-c)/e.getVisibleDatasetCount();this.outerRadius=s-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(e,i,n,a){const s=a==="reset",c=this.chart,r=c.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,l=d.yCenter,N=d.getIndexAngle(0)-.5*z;let h=N,g;const B=360/this.countVisibleElements();for(g=0;g<i;++g)h+=this._computeAngle(g,a,B);for(g=i;g<i+n;g++){const u=e[g];let b=h,m=h+this._computeAngle(g,a,B),D=c.getDataVisibility(g)?d.getDistanceFromCenterForValue(this.getParsed(g).r):0;h=m,s&&(r.animateScale&&(D=0),r.animateRotate&&(b=m=N));const p={x:f,y:l,innerRadius:0,outerRadius:D,startAngle:b,endAngle:m,options:this.resolveDataElementOptions(g,u.active?"active":a)};this.updateElement(u,g,p,a)}}countVisibleElements(){const e=this._cachedMeta;let i=0;return e.data.forEach((n,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&i++}),i}_computeAngle(e,i,n){return this.chart.getDataVisibility(e)?re(this.resolveDataElementOptions(e,i).angle||n):0}}O(xi,"id","polarArea"),O(xi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),O(xi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const i=e.data;if(i.labels.length&&i.datasets.length){const{labels:{pointStyle:n,color:a}}=e.legend.options;return i.labels.map((s,c)=>{const r=e.getDatasetMeta(0).controller.getStyle(c);return{text:s,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,fontColor:a,lineWidth:r.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(c),index:c}})}return[]}},onClick(e,i,n){n.chart.toggleDataVisibility(i.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class _t extends Le{}O(_t,"id","pie"),O(_t,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Zi extends de{getLabelAndValue(e){const i=this._cachedMeta.vScale,n=this.getParsed(e);return{label:i.getLabels()[e],value:""+i.getLabelForValue(n[i.axis])}}parseObjectData(e,i,n,a){return ts.bind(this)(e,i,n,a)}update(e){const i=this._cachedMeta,n=i.dataset,a=i.data||[],s=i.iScale.getLabels();if(n.points=a,e!=="resize"){const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0);const o={_loop:!0,_fullLoop:s.length===a.length,options:c};this.updateElement(n,void 0,o,e)}this.updateElements(a,0,a.length,e)}updateElements(e,i,n,a){const s=this._cachedMeta.rScale,c=a==="reset";for(let o=i;o<i+n;o++){const r=e[o],d=this.resolveDataElementOptions(o,r.active?"active":a),f=s.getPointPositionForValue(o,this.getParsed(o).r),l=c?s.xCenter:f.x,N=c?s.yCenter:f.y,h={x:l,y:N,angle:f.angle,skip:isNaN(l)||isNaN(N),options:d};this.updateElement(r,o,h,a)}}}O(Zi,"id","radar"),O(Zi,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),O(Zi,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ui extends de{getLabelAndValue(e){const i=this._cachedMeta,n=this.chart.data.labels||[],{xScale:a,yScale:s}=i,c=this.getParsed(e),o=a.getLabelForValue(c.x),r=s.getLabelForValue(c.y);return{label:n[e]||"",value:"("+o+", "+r+")"}}update(e){const i=this._cachedMeta,{data:n=[]}=i,a=this.chart._animationsDisabled;let{start:s,count:c}=Ya(i,n,a);if(this._drawStart=s,this._drawCount=c,$a(i)&&(s=0,c=n.length),this.options.showLine){const{dataset:o,_dataset:r}=i;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!r._decimated,o.points=n;const d=this.resolveDatasetElementOptions(e);d.segment=this.options.segment,this.updateElement(o,void 0,{animated:!a,options:d},e)}this.updateElements(n,s,c,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,i,n,a){const s=a==="reset",{iScale:c,vScale:o,_stacked:r,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(i,a),l=this.getSharedOptions(f),N=this.includeOptions(a,l),h=c.axis,g=o.axis,{spanGaps:B,segment:u}=this.options,b=Ze(B)?B:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||a==="none";let D=i>0&&this.getParsed(i-1);for(let p=i;p<i+n;++p){const x=e[p],V=this.getParsed(p),C=m?x:{},A=Q(V[g]),G=C[h]=c.getPixelForValue(V[h],p),k=C[g]=s||A?o.getBasePixel():o.getPixelForValue(r?this.applyStack(o,V,r):V[g],p);C.skip=isNaN(G)||isNaN(k)||A,C.stop=p>0&&Math.abs(V[h]-D[h])>b,u&&(C.parsed=V,C.raw=d.data[p]),N&&(C.options=l||this.resolveDataElementOptions(p,x.active?"active":a)),m||this.updateElement(x,p,C,a),D=V}this.updateSharedOptions(l,a,f)}getMaxOverflow(){const e=this._cachedMeta,i=e.data||[];if(!this.options.showLine){let o=0;for(let r=i.length-1;r>=0;--r)o=Math.max(o,i[r].size(this.resolveDataElementOptions(r))/2);return o>0&&o}const n=e.dataset,a=n.options&&n.options.borderWidth||0;if(!i.length)return a;const s=i[0].size(this.resolveDataElementOptions(0)),c=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(a,s,c)/2}}O(Ui,"id","scatter"),O(Ui,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),O(Ui,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Ar=Object.freeze({__proto__:null,BarController:ji,BubbleController:Yi,DoughnutController:Le,LineController:$i,PieController:_t,PolarAreaController:xi,RadarController:Zi,ScatterController:Ui});function Qe(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class an{constructor(e){O(this,"options");this.options=e||{}}static override(e){Object.assign(an.prototype,e)}init(){}formats(){return Qe()}parse(){return Qe()}format(){return Qe()}add(){return Qe()}diff(){return Qe()}startOf(){return Qe()}endOf(){return Qe()}}var Gr={_date:an};function Sr(t,e,i,n){const{controller:a,data:s,_sorted:c}=t,o=a._cachedMeta.iScale;if(o&&e===o.axis&&e!=="r"&&c&&s.length){const r=o._reversePixels?Zc:pe;if(n){if(a._sharedOptions){const d=s[0],f=typeof d.getRange=="function"&&d.getRange(e);if(f){const l=r(s,e,i-f),N=r(s,e,i+f);return{lo:l.lo,hi:N.hi}}}}else return r(s,e,i)}return{lo:0,hi:s.length-1}}function vi(t,e,i,n,a){const s=t.getSortedVisibleDatasetMetas(),c=i[e];for(let o=0,r=s.length;o<r;++o){const{index:d,data:f}=s[o],{lo:l,hi:N}=Sr(s[o],e,c,a);for(let h=l;h<=N;++h){const g=f[h];g.skip||n(g,d,h)}}}function yr(t){const e=t.indexOf("x")!==-1,i=t.indexOf("y")!==-1;return function(n,a){const s=e?Math.abs(n.x-a.x):0,c=i?Math.abs(n.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(c,2))}}function pt(t,e,i,n,a){const s=[];return!a&&!t.isPointInArea(e)||vi(t,i,e,function(o,r,d){!a&&!De(o,t.chartArea,0)||o.inRange(e.x,e.y,n)&&s.push({element:o,datasetIndex:r,index:d})},!0),s}function kr(t,e,i,n){let a=[];function s(c,o,r){const{startAngle:d,endAngle:f}=c.getProps(["startAngle","endAngle"],n),{angle:l}=Fa(c,{x:e.x,y:e.y});Vi(l,d,f)&&a.push({element:c,datasetIndex:o,index:r})}return vi(t,i,e,s),a}function vr(t,e,i,n,a,s){let c=[];const o=yr(i);let r=Number.POSITIVE_INFINITY;function d(f,l,N){const h=f.inRange(e.x,e.y,a);if(n&&!h)return;const g=f.getCenterPoint(a);if(!(!!s||t.isPointInArea(g))&&!h)return;const u=o(e,g);u<r?(c=[{element:f,datasetIndex:l,index:N}],r=u):u===r&&c.push({element:f,datasetIndex:l,index:N})}return vi(t,i,e,d),c}function Dt(t,e,i,n,a,s){return!s&&!t.isPointInArea(e)?[]:i==="r"&&!n?kr(t,e,i,a):vr(t,e,i,n,a,s)}function Wn(t,e,i,n,a){const s=[],c=i==="x"?"inXRange":"inYRange";let o=!1;return vi(t,i,e,(r,d,f)=>{r[c](e[i],a)&&(s.push({element:r,datasetIndex:d,index:f}),o=o||r.inRange(e.x,e.y,a))}),n&&!o?[]:s}var _r={evaluateInteractionItems:vi,modes:{index(t,e,i,n){const a=Pe(e,t),s=i.axis||"x",c=i.includeInvisible||!1,o=i.intersect?pt(t,a,s,n,c):Dt(t,a,s,!1,n,c),r=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(d=>{const f=o[0].index,l=d.data[f];l&&!l.skip&&r.push({element:l,datasetIndex:d.index,index:f})}),r):[]},dataset(t,e,i,n){const a=Pe(e,t),s=i.axis||"xy",c=i.includeInvisible||!1;let o=i.intersect?pt(t,a,s,n,c):Dt(t,a,s,!1,n,c);if(o.length>0){const r=o[0].datasetIndex,d=t.getDatasetMeta(r).data;o=[];for(let f=0;f<d.length;++f)o.push({element:d[f],datasetIndex:r,index:f})}return o},point(t,e,i,n){const a=Pe(e,t),s=i.axis||"xy",c=i.includeInvisible||!1;return pt(t,a,s,n,c)},nearest(t,e,i,n){const a=Pe(e,t),s=i.axis||"xy",c=i.includeInvisible||!1;return Dt(t,a,s,i.intersect,n,c)},x(t,e,i,n){const a=Pe(e,t);return Wn(t,a,"x",i.intersect,n)},y(t,e,i,n){const a=Pe(e,t);return Wn(t,a,"y",i.intersect,n)}}};const hs=["left","top","right","bottom"];function si(t,e){return t.filter(i=>i.pos===e)}function jn(t,e){return t.filter(i=>hs.indexOf(i.pos)===-1&&i.box.axis===e)}function ci(t,e){return t.sort((i,n)=>{const a=e?n:i,s=e?i:n;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function Mr(t){const e=[];let i,n,a,s,c,o;for(i=0,n=(t||[]).length;i<n;++i)a=t[i],{position:s,options:{stack:c,stackWeight:o=1}}=a,e.push({index:i,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:c&&s+c,stackWeight:o});return e}function Qr(t){const e={};for(const i of t){const{stack:n,pos:a,stackWeight:s}=i;if(!n||!hs.includes(a))continue;const c=e[n]||(e[n]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=s}return e}function wr(t,e){const i=Qr(t),{vBoxMaxWidth:n,hBoxMaxHeight:a}=e;let s,c,o;for(s=0,c=t.length;s<c;++s){o=t[s];const{fullSize:r}=o.box,d=i[o.stack],f=d&&o.stackWeight/d.weight;o.horizontal?(o.width=f?f*n:r&&e.availableWidth,o.height=a):(o.width=n,o.height=f?f*a:r&&e.availableHeight)}return i}function Pr(t){const e=Mr(t),i=ci(e.filter(d=>d.box.fullSize),!0),n=ci(si(e,"left"),!0),a=ci(si(e,"right")),s=ci(si(e,"top"),!0),c=ci(si(e,"bottom")),o=jn(e,"x"),r=jn(e,"y");return{fullSize:i,leftAndTop:n.concat(s),rightAndBottom:a.concat(r).concat(c).concat(o),chartArea:si(e,"chartArea"),vertical:n.concat(a).concat(r),horizontal:s.concat(c).concat(o)}}function Yn(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function gs(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Rr(t,e,i,n){const{pos:a,box:s}=i,c=t.maxPadding;if(!_(a)){i.size&&(t[a]-=i.size);const l=n[i.stack]||{size:0,count:1};l.size=Math.max(l.size,i.horizontal?s.height:s.width),i.size=l.size/l.count,t[a]+=i.size}s.getPadding&&gs(c,s.getPadding());const o=Math.max(0,e.outerWidth-Yn(c,t,"left","right")),r=Math.max(0,e.outerHeight-Yn(c,t,"top","bottom")),d=o!==t.w,f=r!==t.h;return t.w=o,t.h=r,i.horizontal?{same:d,other:f}:{same:f,other:d}}function Lr(t){const e=t.maxPadding;function i(n){const a=Math.max(e[n]-t[n],0);return t[n]+=a,a}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}function Kr(t,e){const i=e.maxPadding;function n(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(c=>{s[c]=Math.max(e[c],i[c])}),s}return n(t?["left","right"]:["top","bottom"])}function li(t,e,i,n){const a=[];let s,c,o,r,d,f;for(s=0,c=t.length,d=0;s<c;++s){o=t[s],r=o.box,r.update(o.width||e.w,o.height||e.h,Kr(o.horizontal,e));const{same:l,other:N}=Rr(e,i,o,n);d|=l&&a.length,f=f||N,r.fullSize||a.push(o)}return d&&li(a,e,i,n)||f}function Ki(t,e,i,n,a){t.top=i,t.left=e,t.right=e+n,t.bottom=i+a,t.width=n,t.height=a}function $n(t,e,i,n){const a=i.padding;let{x:s,y:c}=e;for(const o of t){const r=o.box,d=n[o.stack]||{count:1,placed:0,weight:1},f=o.stackWeight/d.weight||1;if(o.horizontal){const l=e.w*f,N=d.size||r.height;Oi(d.start)&&(c=d.start),r.fullSize?Ki(r,a.left,c,i.outerWidth-a.right-a.left,N):Ki(r,e.left+d.placed,c,l,N),d.start=c,d.placed+=l,c=r.bottom}else{const l=e.h*f,N=d.size||r.width;Oi(d.start)&&(s=d.start),r.fullSize?Ki(r,s,a.top,N,i.outerHeight-a.bottom-a.top):Ki(r,s,e.top+d.placed,N,l),d.start=s,d.placed+=l,s=r.right}}e.x=s,e.y=c}var U={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(i){e.draw(i)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;i!==-1&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;const a=X(t.options.layout.padding),s=Math.max(e-a.width,0),c=Math.max(i-a.height,0),o=Pr(t.boxes),r=o.vertical,d=o.horizontal;w(t.boxes,B=>{typeof B.beforeLayout=="function"&&B.beforeLayout()});const f=r.reduce((B,u)=>u.box.options&&u.box.options.display===!1?B:B+1,0)||1,l=Object.freeze({outerWidth:e,outerHeight:i,padding:a,availableWidth:s,availableHeight:c,vBoxMaxWidth:s/2/f,hBoxMaxHeight:c/2}),N=Object.assign({},a);gs(N,X(n));const h=Object.assign({maxPadding:N,w:s,h:c,x:a.left,y:a.top},a),g=wr(r.concat(d),l);li(o.fullSize,h,l,g),li(r,h,l,g),li(d,h,l,g)&&li(r,h,l,g),Lr(h),$n(o.leftAndTop,h,l,g),h.x+=h.w,h.y+=h.h,$n(o.rightAndBottom,h,l,g),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},w(o.chartArea,B=>{const u=B.box;Object.assign(u,t.chartArea),u.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class Bs{acquireContext(e,i){}releaseContext(e){return!1}addEventListener(e,i,n){}removeEventListener(e,i,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,i,n,a){return i=Math.max(0,i||e.width),n=n||e.height,{width:i,height:Math.max(0,a?Math.floor(i/a):n)}}isAttached(e){return!0}updateConfig(e){}}class Er extends Bs{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Xi="$chartjs",zr={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Zn=t=>t===null||t==="";function Ir(t,e){const i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[Xi]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",Zn(a)){const s=_n(t,"width");s!==void 0&&(t.width=s)}if(Zn(n))if(t.style.height==="")t.height=t.width/(e||2);else{const s=_n(t,"height");s!==void 0&&(t.height=s)}return t}const us=To?{passive:!0}:!1;function Fr(t,e,i){t.addEventListener(e,i,us)}function Tr(t,e,i){t.canvas.removeEventListener(e,i,us)}function Hr(t,e){const i=zr[t.type]||t.type,{x:n,y:a}=Pe(t,e);return{type:i,chart:e,native:t,x:n!==void 0?n:null,y:a!==void 0?a:null}}function ct(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function Wr(t,e,i){const n=t.canvas,a=new MutationObserver(s=>{let c=!1;for(const o of s)c=c||ct(o.addedNodes,n),c=c&&!ct(o.removedNodes,n);c&&i()});return a.observe(document,{childList:!0,subtree:!0}),a}function jr(t,e,i){const n=t.canvas,a=new MutationObserver(s=>{let c=!1;for(const o of s)c=c||ct(o.removedNodes,n),c=c&&!ct(o.addedNodes,n);c&&i()});return a.observe(document,{childList:!0,subtree:!0}),a}const Ai=new Map;let Un=0;function bs(){const t=window.devicePixelRatio;t!==Un&&(Un=t,Ai.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function Yr(t,e){Ai.size||window.addEventListener("resize",bs),Ai.set(t,e)}function $r(t){Ai.delete(t),Ai.size||window.removeEventListener("resize",bs)}function Zr(t,e,i){const n=t.canvas,a=n&&nn(n);if(!a)return;const s=ja((o,r)=>{const d=a.clientWidth;i(o,r),d<a.clientWidth&&i()},window),c=new ResizeObserver(o=>{const r=o[0],d=r.contentRect.width,f=r.contentRect.height;d===0&&f===0||s(d,f)});return c.observe(a),Yr(t,s),c}function Ot(t,e,i){i&&i.disconnect(),e==="resize"&&$r(t)}function Ur(t,e,i){const n=t.canvas,a=ja(s=>{t.ctx!==null&&i(Hr(s,t))},t);return Fr(n,e,a),a}class Xr extends Bs{acquireContext(e,i){const n=e&&e.getContext&&e.getContext("2d");return n&&n.canvas===e?(Ir(e,i),n):null}releaseContext(e){const i=e.canvas;if(!i[Xi])return!1;const n=i[Xi].initial;["height","width"].forEach(s=>{const c=n[s];Q(c)?i.removeAttribute(s):i.setAttribute(s,c)});const a=n.style||{};return Object.keys(a).forEach(s=>{i.style[s]=a[s]}),i.width=i.width,delete i[Xi],!0}addEventListener(e,i,n){this.removeEventListener(e,i);const a=e.$proxies||(e.$proxies={}),c={attach:Wr,detach:jr,resize:Zr}[i]||Ur;a[i]=c(e,i,n)}removeEventListener(e,i){const n=e.$proxies||(e.$proxies={}),a=n[i];if(!a)return;({attach:Ot,detach:Ot,resize:Ot}[i]||Tr)(e,i,a),n[i]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,i,n,a){return Fo(e,i,n,a)}isAttached(e){const i=nn(e);return!!(i&&i.isConnected)}}function Jr(t){return!as()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?Er:Xr}class fe{constructor(){O(this,"x");O(this,"y");O(this,"active",!1);O(this,"options");O(this,"$animations")}tooltipPosition(e){const{x:i,y:n}=this.getProps(["x","y"],e);return{x:i,y:n}}hasValue(){return Ze(this.x)&&Ze(this.y)}getProps(e,i){const n=this.$animations;if(!i||!n)return this;const a={};return e.forEach(s=>{a[s]=n[s]&&n[s].active()?n[s]._to:this[s]}),a}}O(fe,"defaults",{}),O(fe,"defaultRoutes");function qr(t,e){const i=t.options.ticks,n=ed(t),a=Math.min(i.maxTicksLimit||n,n),s=i.major.enabled?td(e):[],c=s.length,o=s[0],r=s[c-1],d=[];if(c>a)return nd(e,d,s,c/a),d;const f=id(s,e,a);if(c>0){let l,N;const h=c>1?Math.round((r-o)/(c-1)):null;for(Ei(e,d,f,Q(h)?0:o-h,o),l=0,N=c-1;l<N;l++)Ei(e,d,f,s[l],s[l+1]);return Ei(e,d,f,r,Q(h)?e.length:r+h),d}return Ei(e,d,f),d}function ed(t){const e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),a=t._maxLength/i;return Math.floor(Math.min(n,a))}function id(t,e,i){const n=ad(t),a=e.length/i;if(!n)return Math.max(a,1);const s=Wc(n);for(let c=0,o=s.length-1;c<o;c++){const r=s[c];if(r>a)return r}return Math.max(a,1)}function td(t){const e=[];let i,n;for(i=0,n=t.length;i<n;i++)t[i].major&&e.push(i);return e}function nd(t,e,i,n){let a=0,s=i[0],c;for(n=Math.ceil(n),c=0;c<t.length;c++)c===s&&(e.push(t[c]),a++,s=i[a*n])}function Ei(t,e,i,n,a){const s=y(n,0),c=Math.min(y(a,t.length),t.length);let o=0,r,d,f;for(i=Math.ceil(i),a&&(r=a-n,i=r/Math.floor(r/i)),f=s;f<0;)o++,f=Math.round(s+o*i);for(d=Math.max(s,0);d<c;d++)d===f&&(e.push(t[d]),o++,f=Math.round(s+o*i))}function ad(t){const e=t.length;let i,n;if(e<2)return!1;for(n=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==n)return!1;return n}const sd=t=>t==="left"?"right":t==="right"?"left":t,Xn=(t,e,i)=>e==="top"||e==="left"?t[e]+i:t[e]-i,Jn=(t,e)=>Math.min(e||t,t);function qn(t,e){const i=[],n=t.length/e,a=t.length;let s=0;for(;s<a;s+=n)i.push(t[Math.floor(s)]);return i}function cd(t,e,i){const n=t.ticks.length,a=Math.min(e,n-1),s=t._startPixel,c=t._endPixel,o=1e-6;let r=t.getPixelForTick(a),d;if(!(i&&(n===1?d=Math.max(r-s,c-r):e===0?d=(t.getPixelForTick(1)-r)/2:d=(r-t.getPixelForTick(a-1))/2,r+=a<e?d:-d,r<s-o||r>c+o)))return r}function od(t,e){w(t,i=>{const n=i.gc,a=n.length/2;let s;if(a>e){for(s=0;s<a;++s)delete i.data[n[s]];n.splice(0,a)}})}function oi(t){return t.drawTicks?t.tickLength:0}function ea(t,e){if(!t.display)return 0;const i=W(t.font,e),n=X(t.padding);return(L(t.text)?t.text.length:1)*i.lineHeight+n.height}function rd(t,e){return ve(t,{scale:e,type:"scale"})}function dd(t,e,i){return ve(t,{tick:i,index:e,type:"tick"})}function fd(t,e,i){let n=Ut(t);return(i&&e!=="right"||!i&&e==="right")&&(n=sd(n)),n}function ld(t,e,i,n){const{top:a,left:s,bottom:c,right:o,chart:r}=t,{chartArea:d,scales:f}=r;let l=0,N,h,g;const B=c-a,u=o-s;if(t.isHorizontal()){if(h=Z(n,s,o),_(i)){const b=Object.keys(i)[0],m=i[b];g=f[b].getPixelForValue(m)+B-e}else i==="center"?g=(d.bottom+d.top)/2+B-e:g=Xn(t,i,e);N=o-s}else{if(_(i)){const b=Object.keys(i)[0],m=i[b];h=f[b].getPixelForValue(m)-u+e}else i==="center"?h=(d.left+d.right)/2-u+e:h=Xn(t,i,e);g=Z(n,c,a),l=i==="left"?-F:F}return{titleX:h,titleY:g,maxWidth:N,rotation:l}}class Fe extends fe{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,i){return e}getUserBounds(){let{_userMin:e,_userMax:i,_suggestedMin:n,_suggestedMax:a}=this;return e=ie(e,Number.POSITIVE_INFINITY),i=ie(i,Number.NEGATIVE_INFINITY),n=ie(n,Number.POSITIVE_INFINITY),a=ie(a,Number.NEGATIVE_INFINITY),{min:ie(e,n),max:ie(i,a),minDefined:I(e),maxDefined:I(i)}}getMinMax(e){let{min:i,max:n,minDefined:a,maxDefined:s}=this.getUserBounds(),c;if(a&&s)return{min:i,max:n};const o=this.getMatchingVisibleMetas();for(let r=0,d=o.length;r<d;++r)c=o[r].controller.getMinMax(this,e),a||(i=Math.min(i,c.min)),s||(n=Math.max(n,c.max));return i=s&&i>n?n:i,n=a&&i>n?i:n,{min:ie(i,ie(n,i)),max:ie(n,ie(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){R(this.options.beforeUpdate,[this])}update(e,i,n){const{beginAtZero:a,grace:s,ticks:c}=this.options,o=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=i,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=po(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=o<this.ticks.length;this._convertTicksToLabels(r?qn(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=qr(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,i,n;this.isHorizontal()?(i=this.left,n=this.right):(i=this.top,n=this.bottom,e=!e),this._startPixel=i,this._endPixel=n,this._reversePixels=e,this._length=n-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){R(this.options.afterUpdate,[this])}beforeSetDimensions(){R(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){R(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),R(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){R(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const i=this.options.ticks;let n,a,s;for(n=0,a=e.length;n<a;n++)s=e[n],s.label=R(i.callback,[s.value,n,e],this)}afterTickToLabelConversion(){R(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){R(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,i=e.ticks,n=Jn(this.ticks.length,e.ticks.maxTicksLimit),a=i.minRotation||0,s=i.maxRotation;let c=a,o,r,d;if(!this._isVisible()||!i.display||a>=s||n<=1||!this.isHorizontal()){this.labelRotation=a;return}const f=this._getLabelSizes(),l=f.widest.width,N=f.highest.height,h=j(this.chart.width-l,0,this.maxWidth);o=e.offset?this.maxWidth/n:h/(n-1),l+6>o&&(o=h/(n-(e.offset?.5:1)),r=this.maxHeight-oi(e.grid)-i.padding-ea(e.title,this.chart.options.font),d=Math.sqrt(l*l+N*N),c=$t(Math.min(Math.asin(j((f.highest.height+6)/o,-1,1)),Math.asin(j(r/d,-1,1))-Math.asin(j(N/d,-1,1)))),c=Math.max(a,Math.min(s,c))),this.labelRotation=c}afterCalculateLabelRotation(){R(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){R(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:i,options:{ticks:n,title:a,grid:s}}=this,c=this._isVisible(),o=this.isHorizontal();if(c){const r=ea(a,i.options.font);if(o?(e.width=this.maxWidth,e.height=oi(s)+r):(e.height=this.maxHeight,e.width=oi(s)+r),n.display&&this.ticks.length){const{first:d,last:f,widest:l,highest:N}=this._getLabelSizes(),h=n.padding*2,g=re(this.labelRotation),B=Math.cos(g),u=Math.sin(g);if(o){const b=n.mirror?0:u*l.width+B*N.height;e.height=Math.min(this.maxHeight,e.height+b+h)}else{const b=n.mirror?0:B*l.width+u*N.height;e.width=Math.min(this.maxWidth,e.width+b+h)}this._calculatePadding(d,f,u,B)}}this._handleMargins(),o?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,i,n,a){const{ticks:{align:s,padding:c},position:o}=this.options,r=this.labelRotation!==0,d=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,h=0;r?d?(N=a*e.width,h=n*i.height):(N=n*e.height,h=a*i.width):s==="start"?h=i.width:s==="end"?N=e.width:s!=="inner"&&(N=e.width/2,h=i.width/2),this.paddingLeft=Math.max((N-f+c)*this.width/(this.width-f),0),this.paddingRight=Math.max((h-l+c)*this.width/(this.width-l),0)}else{let f=i.height/2,l=e.height/2;s==="start"?(f=0,l=e.height):s==="end"&&(f=i.height,l=0),this.paddingTop=f+c,this.paddingBottom=l+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){R(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:i}=this.options;return i==="top"||i==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let i,n;for(i=0,n=e.length;i<n;i++)Q(e[i].label)&&(e.splice(i,1),n--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const i=this.options.ticks.sampleSize;let n=this.ticks;i<n.length&&(n=qn(n,i)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,i,n){const{ctx:a,_longestTextCache:s}=this,c=[],o=[],r=Math.floor(i/Jn(i,n));let d=0,f=0,l,N,h,g,B,u,b,m,D,p,x;for(l=0;l<i;l+=r){if(g=e[l].label,B=this._resolveTickFontOptions(l),a.font=u=B.string,b=s[u]=s[u]||{data:{},gc:[]},m=B.lineHeight,D=p=0,!Q(g)&&!L(g))D=at(a,b.data,b.gc,D,g),p=m;else if(L(g))for(N=0,h=g.length;N<h;++N)x=g[N],!Q(x)&&!L(x)&&(D=at(a,b.data,b.gc,D,x),p+=m);c.push(D),o.push(p),d=Math.max(D,d),f=Math.max(p,f)}od(s,i);const V=c.indexOf(d),C=o.indexOf(f),A=G=>({width:c[G]||0,height:o[G]||0});return{first:A(0),last:A(i-1),widest:A(V),highest:A(C),widths:c,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,i){return NaN}getValueForPixel(e){}getPixelForTick(e){const i=this.ticks;return e<0||e>i.length-1?null:this.getPixelForValue(i[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const i=this._startPixel+e*this._length;return $c(this._alignToPixels?Me(this.chart,i,0):i)}getDecimalForPixel(e){const i=(e-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:i}=this;return e<0&&i<0?i:e>0&&i>0?e:0}getContext(e){const i=this.ticks||[];if(e>=0&&e<i.length){const n=i[e];return n.$context||(n.$context=dd(this.getContext(),e,n))}return this.$context||(this.$context=rd(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,i=re(this.labelRotation),n=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),s=this._getLabelSizes(),c=e.autoSkipPadding||0,o=s?s.widest.width+c:0,r=s?s.highest.height+c:0;return this.isHorizontal()?r*n>o*a?o/n:r/a:r*a<o*n?r/n:o/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const i=this.axis,n=this.chart,a=this.options,{grid:s,position:c,border:o}=a,r=s.offset,d=this.isHorizontal(),l=this.ticks.length+(r?1:0),N=oi(s),h=[],g=o.setContext(this.getContext()),B=g.display?g.width:0,u=B/2,b=function(E){return Me(n,E,B)};let m,D,p,x,V,C,A,G,k,v,M,Y;if(c==="top")m=b(this.bottom),C=this.bottom-N,G=m-u,v=b(e.top)+u,Y=e.bottom;else if(c==="bottom")m=b(this.top),v=e.top,Y=b(e.bottom)-u,C=m+u,G=this.top+N;else if(c==="left")m=b(this.right),V=this.right-N,A=m-u,k=b(e.left)+u,M=e.right;else if(c==="right")m=b(this.left),k=e.left,M=b(e.right)-u,V=m+u,A=this.left+N;else if(i==="x"){if(c==="center")m=b((e.top+e.bottom)/2+.5);else if(_(c)){const E=Object.keys(c)[0],H=c[E];m=b(this.chart.scales[E].getPixelForValue(H))}v=e.top,Y=e.bottom,C=m+u,G=C+N}else if(i==="y"){if(c==="center")m=b((e.left+e.right)/2);else if(_(c)){const E=Object.keys(c)[0],H=c[E];m=b(this.chart.scales[E].getPixelForValue(H))}V=m-u,A=V-N,k=e.left,M=e.right}const ee=y(a.ticks.maxTicksLimit,l),P=Math.max(1,Math.ceil(l/ee));for(D=0;D<l;D+=P){const E=this.getContext(D),H=s.setContext(E),oe=o.setContext(E),$=H.lineWidth,Te=H.color,_i=oe.dash||[],He=oe.dashOffset,qe=H.tickWidth,ei=H.tickColor,ii=H.tickBorderDash||[],ti=H.tickBorderDashOffset;p=cd(this,D,r),p!==void 0&&(x=Me(n,p,$),d?V=A=k=M=x:C=G=v=Y=x,h.push({tx1:V,ty1:C,tx2:A,ty2:G,x1:k,y1:v,x2:M,y2:Y,width:$,color:Te,borderDash:_i,borderDashOffset:He,tickWidth:qe,tickColor:ei,tickBorderDash:ii,tickBorderDashOffset:ti}))}return this._ticksLength=l,this._borderValue=m,h}_computeLabelItems(e){const i=this.axis,n=this.options,{position:a,ticks:s}=n,c=this.isHorizontal(),o=this.ticks,{align:r,crossAlign:d,padding:f,mirror:l}=s,N=oi(n.grid),h=N+f,g=l?-f:h,B=-re(this.labelRotation),u=[];let b,m,D,p,x,V,C,A,G,k,v,M,Y="middle";if(a==="top")V=this.bottom-g,C=this._getXAxisLabelAlignment();else if(a==="bottom")V=this.top+g,C=this._getXAxisLabelAlignment();else if(a==="left"){const P=this._getYAxisLabelAlignment(N);C=P.textAlign,x=P.x}else if(a==="right"){const P=this._getYAxisLabelAlignment(N);C=P.textAlign,x=P.x}else if(i==="x"){if(a==="center")V=(e.top+e.bottom)/2+h;else if(_(a)){const P=Object.keys(a)[0],E=a[P];V=this.chart.scales[P].getPixelForValue(E)+h}C=this._getXAxisLabelAlignment()}else if(i==="y"){if(a==="center")x=(e.left+e.right)/2-h;else if(_(a)){const P=Object.keys(a)[0],E=a[P];x=this.chart.scales[P].getPixelForValue(E)}C=this._getYAxisLabelAlignment(N).textAlign}i==="y"&&(r==="start"?Y="top":r==="end"&&(Y="bottom"));const ee=this._getLabelSizes();for(b=0,m=o.length;b<m;++b){D=o[b],p=D.label;const P=s.setContext(this.getContext(b));A=this.getPixelForTick(b)+s.labelOffset,G=this._resolveTickFontOptions(b),k=G.lineHeight,v=L(p)?p.length:1;const E=v/2,H=P.color,oe=P.textStrokeColor,$=P.textStrokeWidth;let Te=C;c?(x=A,C==="inner"&&(b===m-1?Te=this.options.reverse?"left":"right":b===0?Te=this.options.reverse?"right":"left":Te="center"),a==="top"?d==="near"||B!==0?M=-v*k+k/2:d==="center"?M=-ee.highest.height/2-E*k+k:M=-ee.highest.height+k/2:d==="near"||B!==0?M=k/2:d==="center"?M=ee.highest.height/2-E*k:M=ee.highest.height-v*k,l&&(M*=-1),B!==0&&!P.showLabelBackdrop&&(x+=k/2*Math.sin(B))):(V=A,M=(1-v)*k/2);let _i;if(P.showLabelBackdrop){const He=X(P.backdropPadding),qe=ee.heights[b],ei=ee.widths[b];let ii=M-He.top,ti=0-He.left;switch(Y){case"middle":ii-=qe/2;break;case"bottom":ii-=qe;break}switch(C){case"center":ti-=ei/2;break;case"right":ti-=ei;break}_i={left:ti,top:ii,width:ei+He.width,height:qe+He.height,color:P.backdropColor}}u.push({label:p,font:G,textOffset:M,options:{rotation:B,color:H,strokeColor:oe,strokeWidth:$,textAlign:Te,textBaseline:Y,translation:[x,V],backdrop:_i}})}return u}_getXAxisLabelAlignment(){const{position:e,ticks:i}=this.options;if(-re(this.labelRotation))return e==="top"?"left":"right";let a="center";return i.align==="start"?a="left":i.align==="end"?a="right":i.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:i,ticks:{crossAlign:n,mirror:a,padding:s}}=this.options,c=this._getLabelSizes(),o=e+s,r=c.widest.width;let d,f;return i==="left"?a?(f=this.right+s,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f+=r)):(f=this.right-o,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f=this.left)):i==="right"?a?(f=this.left+s,n==="near"?d="right":n==="center"?(d="center",f-=r/2):(d="left",f-=r)):(f=this.left+o,n==="near"?d="left":n==="center"?(d="center",f+=r/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:i},left:n,top:a,width:s,height:c}=this;i&&(e.save(),e.fillStyle=i,e.fillRect(n,a,s,c),e.restore())}getLineWidthForValue(e){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const a=this.ticks.findIndex(s=>s.value===e);return a>=0?i.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const i=this.options.grid,n=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,c;const o=(r,d,f)=>{!f.width||!f.color||(n.save(),n.lineWidth=f.width,n.strokeStyle=f.color,n.setLineDash(f.borderDash||[]),n.lineDashOffset=f.borderDashOffset,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(d.x,d.y),n.stroke(),n.restore())};if(i.display)for(s=0,c=a.length;s<c;++s){const r=a[s];i.drawOnChartArea&&o({x:r.x1,y:r.y1},{x:r.x2,y:r.y2},r),i.drawTicks&&o({x:r.tx1,y:r.ty1},{x:r.tx2,y:r.ty2},{color:r.tickColor,width:r.tickWidth,borderDash:r.tickBorderDash,borderDashOffset:r.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:i,options:{border:n,grid:a}}=this,s=n.setContext(this.getContext()),c=n.display?s.width:0;if(!c)return;const o=a.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let d,f,l,N;this.isHorizontal()?(d=Me(e,this.left,c)-c/2,f=Me(e,this.right,o)+o/2,l=N=r):(l=Me(e,this.top,c)-c/2,N=Me(e,this.bottom,o)+o/2,d=f=r),i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.beginPath(),i.moveTo(d,l),i.lineTo(f,N),i.stroke(),i.restore()}drawLabels(e){if(!this.options.ticks.display)return;const n=this.ctx,a=this._computeLabelArea();a&&ft(n,a);const s=this.getLabelItems(e);for(const c of s){const o=c.options,r=c.font,d=c.label,f=c.textOffset;Ie(n,d,0,f,r,o)}a&&lt(n)}drawTitle(){const{ctx:e,options:{position:i,title:n,reverse:a}}=this;if(!n.display)return;const s=W(n.font),c=X(n.padding),o=n.align;let r=s.lineHeight/2;i==="bottom"||i==="center"||_(i)?(r+=c.bottom,L(n.text)&&(r+=s.lineHeight*(n.text.length-1))):r+=c.top;const{titleX:d,titleY:f,maxWidth:l,rotation:N}=ld(this,r,i,o);Ie(e,n.text,0,0,s,{color:n.color,maxWidth:l,rotation:N,textAlign:fd(o,i,a),textBaseline:"middle",translation:[d,f]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,i=e.ticks&&e.ticks.z||0,n=y(e.grid&&e.grid.z,-1),a=y(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Fe.prototype.draw?[{z:i,draw:s=>{this.draw(s)}}]:[{z:n,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:i,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const i=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",a=[];let s,c;for(s=0,c=i.length;s<c;++s){const o=i[s];o[n]===this.id&&(!e||o.type===e)&&a.push(o)}return a}_resolveTickFontOptions(e){const i=this.options.ticks.setContext(this.getContext(e));return W(i.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class zi{constructor(e,i,n){this.type=e,this.scope=i,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const i=Object.getPrototypeOf(e);let n;gd(i)&&(n=this.register(i));const a=this.items,s=e.id,c=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in a||(a[s]=e,Nd(e,c,n),this.override&&T.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const i=this.items,n=e.id,a=this.scope;n in i&&delete i[n],a&&n in T[a]&&(delete T[a][n],this.override&&delete ze[n])}}function Nd(t,e,i){const n=Di(Object.create(null),[i?T.get(i):{},T.get(e),t.defaults]);T.set(e,n),t.defaultRoutes&&hd(e,t.defaultRoutes),t.descriptors&&T.describe(e,t.descriptors)}function hd(t,e){Object.keys(e).forEach(i=>{const n=i.split("."),a=n.pop(),s=[t].concat(n).join("."),c=e[i].split("."),o=c.pop(),r=c.join(".");T.route(s,a,r,o)})}function gd(t){return"id"in t&&"defaults"in t}class Bd{constructor(){this.controllers=new zi(de,"datasets",!0),this.elements=new zi(fe,"elements"),this.plugins=new zi(Object,"plugins"),this.scales=new zi(Fe,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,i,n){[...i].forEach(a=>{const s=n||this._getRegistryForType(a);n||s.isForType(a)||s===this.plugins&&a.id?this._exec(e,s,a):w(a,c=>{const o=n||this._getRegistryForType(c);this._exec(e,o,c)})})}_exec(e,i,n){const a=Yt(e);R(n["before"+a],[],n),i[e](n),R(n["after"+a],[],n)}_getRegistryForType(e){for(let i=0;i<this._typedRegistries.length;i++){const n=this._typedRegistries[i];if(n.isForType(e))return n}return this.plugins}_get(e,i,n){const a=i.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+n+".");return a}}var Ne=new Bd;class ud{constructor(){this._init=[]}notify(e,i,n,a){i==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=a?this._descriptors(e).filter(a):this._descriptors(e),c=this._notify(s,e,i,n);return i==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),c}_notify(e,i,n,a){a=a||{};for(const s of e){const c=s.plugin,o=c[n],r=[i,a,s.options];if(R(o,r,c)===!1&&a.cancelable)return!1}return!0}invalidate(){Q(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),i}_createDescriptors(e,i){const n=e&&e.config,a=y(n.options&&n.options.plugins,{}),s=bd(n);return a===!1&&!i?[]:xd(e,s,a,i)}_notifyStateChanges(e){const i=this._oldCache||[],n=this._cache,a=(s,c)=>s.filter(o=>!c.some(r=>o.plugin.id===r.plugin.id));this._notify(a(i,n),e,"stop"),this._notify(a(n,i),e,"start")}}function bd(t){const e={},i=[],n=Object.keys(Ne.plugins.items);for(let s=0;s<n.length;s++)i.push(Ne.getPlugin(n[s]));const a=t.plugins||[];for(let s=0;s<a.length;s++){const c=a[s];i.indexOf(c)===-1&&(i.push(c),e[c.id]=!0)}return{plugins:i,localIds:e}}function md(t,e){return!e&&t===!1?null:t===!0?{}:t}function xd(t,{plugins:e,localIds:i},n,a){const s=[],c=t.getContext();for(const o of e){const r=o.id,d=md(n[r],a);d!==null&&s.push({plugin:o,options:pd(t.config,{plugin:o,local:i[r]},d,c)})}return s}function pd(t,{plugin:e,local:i},n,a){const s=t.pluginScopeKeys(e),c=t.getOptionScopes(n,s);return i&&e.defaults&&c.push(e.defaults),t.createResolver(c,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Mt(t,e){const i=T.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Dd(t,e){let i=t;return t==="_index_"?i=e:t==="_value_"&&(i=e==="x"?"y":"x"),i}function Od(t,e){return t===e?"_index_":"_value_"}function ia(t){if(t==="x"||t==="y"||t==="r")return t}function Vd(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Qt(t,...e){if(ia(t))return t;for(const i of e){const n=i.axis||Vd(i.position)||t.length>1&&ia(t[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function ta(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function Cd(t,e){if(e.data&&e.data.datasets){const i=e.data.datasets.filter(n=>n.xAxisID===t||n.yAxisID===t);if(i.length)return ta(t,"x",i[0])||ta(t,"y",i[0])}return{}}function Ad(t,e){const i=ze[t.type]||{scales:{}},n=e.scales||{},a=Mt(t.type,e),s=Object.create(null);return Object.keys(n).forEach(c=>{const o=n[c];if(!_(o))return console.error(`Invalid scale configuration for scale: ${c}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const r=Qt(c,o,Cd(c,t),T.scales[o.type]),d=Od(r,a),f=i.scales||{};s[c]=Bi(Object.create(null),[{axis:r},o,f[r],f[d]])}),t.data.datasets.forEach(c=>{const o=c.type||t.type,r=c.indexAxis||Mt(o,e),f=(ze[o]||{}).scales||{};Object.keys(f).forEach(l=>{const N=Dd(l,r),h=c[N+"AxisID"]||N;s[h]=s[h]||Object.create(null),Bi(s[h],[{axis:N},n[h],f[l]])})}),Object.keys(s).forEach(c=>{const o=s[c];Bi(o,[T.scales[o.type],T.scale])}),s}function ms(t){const e=t.options||(t.options={});e.plugins=y(e.plugins,{}),e.scales=Ad(t,e)}function xs(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Gd(t){return t=t||{},t.data=xs(t.data),ms(t),t}const na=new Map,ps=new Set;function Ii(t,e){let i=na.get(t);return i||(i=e(),na.set(t,i),ps.add(i)),i}const ri=(t,e,i)=>{const n=ye(e,i);n!==void 0&&t.add(n)};class Sd{constructor(e){this._config=Gd(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=xs(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),ms(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Ii(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,i){return Ii(`${e}.transition.${i}`,()=>[[`datasets.${e}.transitions.${i}`,`transitions.${i}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,i){return Ii(`${e}-${i}`,()=>[[`datasets.${e}.elements.${i}`,`datasets.${e}`,`elements.${i}`,""]])}pluginScopeKeys(e){const i=e.id,n=this.type;return Ii(`${n}-plugin-${i}`,()=>[[`plugins.${i}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,i){const n=this._scopeCache;let a=n.get(e);return(!a||i)&&(a=new Map,n.set(e,a)),a}getOptionScopes(e,i,n){const{options:a,type:s}=this,c=this._cachedScopes(e,n),o=c.get(i);if(o)return o;const r=new Set;i.forEach(f=>{e&&(r.add(e),f.forEach(l=>ri(r,e,l))),f.forEach(l=>ri(r,a,l)),f.forEach(l=>ri(r,ze[s]||{},l)),f.forEach(l=>ri(r,T,l)),f.forEach(l=>ri(r,kt,l))});const d=Array.from(r);return d.length===0&&d.push(Object.create(null)),ps.has(i)&&c.set(i,d),d}chartOptionScopes(){const{options:e,type:i}=this;return[e,ze[i]||{},T.datasets[i]||{},{type:i},T,kt]}resolveNamedOptions(e,i,n,a=[""]){const s={$shared:!0},{resolver:c,subPrefixes:o}=aa(this._resolverCache,e,a);let r=c;if(kd(c,i)){s.$shared=!1,n=ke(n)?n():n;const d=this.createResolver(e,n,o);r=Ue(c,n,d)}for(const d of i)s[d]=r[d];return s}createResolver(e,i,n=[""],a){const{resolver:s}=aa(this._resolverCache,e,n);return _(i)?Ue(s,i,void 0,a):s}}function aa(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));const a=i.join();let s=n.get(a);return s||(s={resolver:qt(e,i),subPrefixes:i.filter(o=>!o.toLowerCase().includes("hover"))},n.set(a,s)),s}const yd=t=>_(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||ke(t[i]),!1);function kd(t,e){const{isScriptable:i,isIndexable:n}=Ja(t);for(const a of e){const s=i(a),c=n(a),o=(c||s)&&t[a];if(s&&(ke(o)||yd(o))||c&&L(o))return!0}return!1}var vd="4.3.0";const _d=["top","bottom","left","right","chartArea"];function sa(t,e){return t==="top"||t==="bottom"||_d.indexOf(t)===-1&&e==="x"}function ca(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function oa(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),R(i&&i.onComplete,[t],e)}function Md(t){const e=t.chart,i=e.options.animation;R(i&&i.onProgress,[t],e)}function Ds(t){return as()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ji={},ra=t=>{const e=Ds(t);return Object.values(Ji).filter(i=>i.canvas===e).pop()};function Qd(t,e,i){const n=Object.keys(t);for(const a of n){const s=+a;if(s>=e){const c=t[a];delete t[a],(i>0||s>e)&&(t[s+i]=c)}}}function wd(t,e,i,n){return!i||t.type==="mouseout"?null:n?e:t}function Pd(t){const{xScale:e,yScale:i}=t;if(e&&i)return{left:e.left,right:e.right,top:i.top,bottom:i.bottom}}class me{static register(...e){Ne.add(...e),da()}static unregister(...e){Ne.remove(...e),da()}constructor(e,i){const n=this.config=new Sd(i),a=Ds(e),s=ra(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const c=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Jr(a)),this.platform.updateConfig(n);const o=this.platform.acquireContext(a,c.aspectRatio),r=o&&o.canvas,d=r&&r.height,f=r&&r.width;if(this.id=Rc(),this.ctx=o,this.canvas=r,this.width=f,this.height=d,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ud,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Jc(l=>this.update(l),c.resizeDelay||0),this._dataChanges=[],Ji[this.id]=this,!o||!r){console.error("Failed to create chart: can't acquire context from the given item");return}Be.listen(this,"complete",oa),Be.listen(this,"progress",Md),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:i},width:n,height:a,_aspectRatio:s}=this;return Q(e)?i&&s?s:a?n/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Ne}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():vn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Sn(this.canvas,this.ctx),this}stop(){return Be.stop(this),this}resize(e,i){Be.running(this)?this._resizeBeforeDraw={width:e,height:i}:this._resize(e,i)}_resize(e,i){const n=this.options,a=this.canvas,s=n.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(a,e,i,s),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,vn(this,o,!0)&&(this.notifyPlugins("resize",{size:c}),R(n.onResize,[this,c],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){const i=this.options.scales||{};w(i,(n,a)=>{n.id=a})}buildOrUpdateScales(){const e=this.options,i=e.scales,n=this.scales,a=Object.keys(n).reduce((c,o)=>(c[o]=!1,c),{});let s=[];i&&(s=s.concat(Object.keys(i).map(c=>{const o=i[c],r=Qt(c,o),d=r==="r",f=r==="x";return{options:o,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),w(s,c=>{const o=c.options,r=o.id,d=Qt(r,o),f=y(o.type,c.dtype);(o.position===void 0||sa(o.position,d)!==sa(c.dposition))&&(o.position=c.dposition),a[r]=!0;let l=null;if(r in n&&n[r].type===f)l=n[r];else{const N=Ne.getScale(f);l=new N({id:r,type:f,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(o,e)}),w(a,(c,o)=>{c||delete n[o]}),w(n,c=>{U.configure(this,c,c.options),U.addBox(this,c)})}_updateMetasets(){const e=this._metasets,i=this.data.datasets.length,n=e.length;if(e.sort((a,s)=>a.index-s.index),n>i){for(let a=i;a<n;++a)this._destroyDatasetMeta(a);e.splice(i,n-i)}this._sortedMetasets=e.slice(0).sort(ca("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:i}}=this;e.length>i.length&&delete this._stacks,e.forEach((n,a)=>{i.filter(s=>s===n._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],i=this.data.datasets;let n,a;for(this._removeUnreferencedMetasets(),n=0,a=i.length;n<a;n++){const s=i[n];let c=this.getDatasetMeta(n);const o=s.type||this.config.type;if(c.type&&c.type!==o&&(this._destroyDatasetMeta(n),c=this.getDatasetMeta(n)),c.type=o,c.indexAxis=s.indexAxis||Mt(o,this.options),c.order=s.order||0,c.index=n,c.label=""+s.label,c.visible=this.isDatasetVisible(n),c.controller)c.controller.updateIndex(n),c.controller.linkScales();else{const r=Ne.getController(o),{datasetElementType:d,dataElementType:f}=T.datasets[o];Object.assign(r,{dataElementType:Ne.getElement(f),datasetElementType:d&&Ne.getElement(d)}),c.controller=new r(this,n),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){w(this.data.datasets,(e,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const i=this.config;i.update();const n=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:l}=this.getDatasetMeta(d),N=!a&&s.indexOf(l)===-1;l.buildOrUpdateElements(N),c=Math.max(+l.getMaxOverflow(),c)}c=this._minPadding=n.layout.autoPadding?c:0,this._updateLayout(c),a||w(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(ca("z","_idx"));const{_active:o,_lastEvent:r}=this;r?this._eventHandler(r,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){w(this.scales,e=>{U.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,i=new Set(Object.keys(this._listeners)),n=new Set(e.events);(!mn(i,n)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,i=this._getUniformDataChanges()||[];for(const{method:n,start:a,count:s}of i){const c=n==="_removeElements"?-s:s;Qd(e,a,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const i=this.data.datasets.length,n=s=>new Set(e.filter(c=>c[0]===s).map((c,o)=>o+","+c.splice(1).join(","))),a=n(0);for(let s=1;s<i;s++)if(!mn(a,n(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;U.update(this,this.width,this.height,e);const i=this.chartArea,n=i.width<=0||i.height<=0;this._layers=[],w(this.boxes,a=>{n&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let i=0,n=this.data.datasets.length;i<n;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,n=this.data.datasets.length;i<n;++i)this._updateDataset(i,ke(e)?e({datasetIndex:i}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,i){const n=this.getDatasetMeta(e),a={meta:n,index:e,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(n.controller._update(i),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Be.has(this)?this.attached&&!Be.running(this)&&Be.start(this):(this.draw(),oa({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:n,height:a}=this._resizeBeforeDraw;this._resize(n,a),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const i=this._layers;for(e=0;e<i.length&&i[e].z<=0;++e)i[e].draw(this.chartArea);for(this._drawDatasets();e<i.length;++e)i[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const i=this._sortedMetasets,n=[];let a,s;for(a=0,s=i.length;a<s;++a){const c=i[a];(!e||c.visible)&&n.push(c)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let i=e.length-1;i>=0;--i)this._drawDataset(e[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const i=this.ctx,n=e._clip,a=!n.disabled,s=Pd(e)||this.chartArea,c={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",c)!==!1&&(a&&ft(i,{left:n.left===!1?0:s.left-n.left,right:n.right===!1?this.width:s.right+n.right,top:n.top===!1?0:s.top-n.top,bottom:n.bottom===!1?this.height:s.bottom+n.bottom}),e.controller.draw(),a&&lt(i),c.cancelable=!1,this.notifyPlugins("afterDatasetDraw",c))}isPointInArea(e){return De(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,i,n,a){const s=_r.modes[i];return typeof s=="function"?s(this,e,n,a):[]}getDatasetMeta(e){const i=this.data.datasets[e],n=this._metasets;let a=n.filter(s=>s&&s._dataset===i).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:e,_dataset:i,_parsed:[],_sorted:!1},n.push(a)),a}getContext(){return this.$context||(this.$context=ve(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const i=this.data.datasets[e];if(!i)return!1;const n=this.getDatasetMeta(e);return typeof n.hidden=="boolean"?!n.hidden:!i.hidden}setDatasetVisibility(e,i){const n=this.getDatasetMeta(e);n.hidden=!i}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,i,n){const a=n?"show":"hide",s=this.getDatasetMeta(e),c=s.controller._resolveAnimations(void 0,a);Oi(i)?(s.data[i].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),c.update(s,{visible:n}),this.update(o=>o.datasetIndex===e?a:void 0))}hide(e,i){this._updateVisibility(e,i,!1)}show(e,i){this._updateVisibility(e,i,!0)}_destroyDatasetMeta(e){const i=this._metasets[e];i&&i.controller&&i.controller._destroy(),delete this._metasets[e]}_stop(){let e,i;for(this.stop(),Be.remove(this),e=0,i=this.data.datasets.length;e<i;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:i}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Sn(e,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete Ji[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,i=this.platform,n=(s,c)=>{i.addEventListener(this,s,c),e[s]=c},a=(s,c,o)=>{s.offsetX=c,s.offsetY=o,this._eventHandler(s)};w(this.options.events,s=>n(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,i=this.platform,n=(r,d)=>{i.addEventListener(this,r,d),e[r]=d},a=(r,d)=>{e[r]&&(i.removeEventListener(this,r,d),delete e[r])},s=(r,d)=>{this.canvas&&this.resize(r,d)};let c;const o=()=>{a("attach",o),this.attached=!0,this.resize(),n("resize",s),n("detach",c)};c=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),n("attach",o)},i.isAttached(this.canvas)?o():c()}unbindEvents(){w(this._listeners,(e,i)=>{this.platform.removeEventListener(this,i,e)}),this._listeners={},w(this._responsiveListeners,(e,i)=>{this.platform.removeEventListener(this,i,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,i,n){const a=n?"set":"remove";let s,c,o,r;for(i==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),o=0,r=e.length;o<r;++o){c=e[o];const d=c&&this.getDatasetMeta(c.datasetIndex).controller;d&&d[a+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const i=this._active||[],n=e.map(({datasetIndex:s,index:c})=>{const o=this.getDatasetMeta(s);if(!o)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:o.data[c],index:c}});!it(n,i)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,i))}notifyPlugins(e,i,n){return this._plugins.notify(this,e,i,n)}isPluginEnabled(e){return this._plugins._cache.filter(i=>i.plugin.id===e).length===1}_updateHoverStyles(e,i,n){const a=this.options.hover,s=(r,d)=>r.filter(f=>!d.some(l=>f.datasetIndex===l.datasetIndex&&f.index===l.index)),c=s(i,e),o=n?e:s(e,i);c.length&&this.updateHoverStyle(c,a.mode,!1),o.length&&a.mode&&this.updateHoverStyle(o,a.mode,!0)}_eventHandler(e,i){const n={event:e,replay:i,cancelable:!0,inChartArea:this.isPointInArea(e)},a=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",n,a)===!1)return;const s=this._handleEvent(e,i,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,a),(s||n.changed)&&this.render(),this}_handleEvent(e,i,n){const{_active:a=[],options:s}=this,c=i,o=this._getActiveElements(e,a,n,c),r=Fc(e),d=wd(e,this._lastEvent,n,r);n&&(this._lastEvent=null,R(s.onHover,[e,o,this],this),r&&R(s.onClick,[e,o,this],this));const f=!it(o,a);return(f||i)&&(this._active=o,this._updateHoverStyles(o,a,i)),this._lastEvent=d,f}_getActiveElements(e,i,n,a){if(e.type==="mouseout")return[];if(!n)return i;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,a)}}O(me,"defaults",T),O(me,"instances",Ji),O(me,"overrides",ze),O(me,"registry",Ne),O(me,"version",vd),O(me,"getChart",ra);function da(){return w(me.instances,t=>t._plugins.invalidate())}function Rd(t,e,i){const{startAngle:n,pixelMargin:a,x:s,y:c,outerRadius:o,innerRadius:r}=e;let d=a/o;t.beginPath(),t.arc(s,c,o,n-d,i+d),r>a?(d=a/r,t.arc(s,c,r,i+d,n-d,!0)):t.arc(s,c,a,i+F,n-F),t.closePath(),t.clip()}function Ld(t){return Jt(t,["outerStart","outerEnd","innerStart","innerEnd"])}function Kd(t,e,i,n){const a=Ld(t.options.borderRadius),s=(i-e)/2,c=Math.min(s,n*e/2),o=r=>{const d=(i-Math.min(s,r))*n/2;return j(r,0,Math.min(s,d))};return{outerStart:o(a.outerStart),outerEnd:o(a.outerEnd),innerStart:j(a.innerStart,0,c),innerEnd:j(a.innerEnd,0,c)}}function Ye(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}function ot(t,e,i,n,a,s){const{x:c,y:o,startAngle:r,pixelMargin:d,innerRadius:f}=e,l=Math.max(e.outerRadius+n+i-d,0),N=f>0?f+n+i+d:0;let h=0;const g=a-r;if(n){const P=f>0?f-n:0,E=l>0?l-n:0,H=(P+E)/2,oe=H!==0?g*H/(H+n):g;h=(g-oe)/2}const B=Math.max(.001,g*l-i/z)/l,u=(g-B)/2,b=r+u+h,m=a-u-h,{outerStart:D,outerEnd:p,innerStart:x,innerEnd:V}=Kd(e,N,l,m-b),C=l-D,A=l-p,G=b+D/C,k=m-p/A,v=N+x,M=N+V,Y=b+x/v,ee=m-V/M;if(t.beginPath(),s){const P=(G+k)/2;if(t.arc(c,o,l,G,P),t.arc(c,o,l,P,k),p>0){const $=Ye(A,k,c,o);t.arc($.x,$.y,p,k,m+F)}const E=Ye(M,m,c,o);if(t.lineTo(E.x,E.y),V>0){const $=Ye(M,ee,c,o);t.arc($.x,$.y,V,m+F,ee+Math.PI)}const H=(m-V/N+(b+x/N))/2;if(t.arc(c,o,N,m-V/N,H,!0),t.arc(c,o,N,H,b+x/N,!0),x>0){const $=Ye(v,Y,c,o);t.arc($.x,$.y,x,Y+Math.PI,b-F)}const oe=Ye(C,b,c,o);if(t.lineTo(oe.x,oe.y),D>0){const $=Ye(C,G,c,o);t.arc($.x,$.y,D,b-F,G)}}else{t.moveTo(c,o);const P=Math.cos(G)*l+c,E=Math.sin(G)*l+o;t.lineTo(P,E);const H=Math.cos(k)*l+c,oe=Math.sin(k)*l+o;t.lineTo(H,oe)}t.closePath()}function Ed(t,e,i,n,a){const{fullCircles:s,startAngle:c,circumference:o}=e;let r=e.endAngle;if(s){ot(t,e,i,n,r,a);for(let d=0;d<s;++d)t.fill();isNaN(o)||(r=c+(o%K||K))}return ot(t,e,i,n,r,a),t.fill(),r}function zd(t,e,i,n,a){const{fullCircles:s,startAngle:c,circumference:o,options:r}=e,{borderWidth:d,borderJoinStyle:f,borderDash:l,borderDashOffset:N}=r,h=r.borderAlign==="inner";if(!d)return;t.setLineDash(l||[]),t.lineDashOffset=N,h?(t.lineWidth=d*2,t.lineJoin=f||"round"):(t.lineWidth=d,t.lineJoin=f||"bevel");let g=e.endAngle;if(s){ot(t,e,i,n,g,a);for(let B=0;B<s;++B)t.stroke();isNaN(o)||(g=c+(o%K||K))}h&&Rd(t,e,g),s||(ot(t,e,i,n,g,a),t.stroke())}class Ni extends fe{constructor(i){super();O(this,"circumference");O(this,"endAngle");O(this,"fullCircles");O(this,"innerRadius");O(this,"outerRadius");O(this,"pixelMargin");O(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,i&&Object.assign(this,i)}inRange(i,n,a){const s=this.getProps(["x","y"],a),{angle:c,distance:o}=Fa(s,{x:i,y:n}),{startAngle:r,endAngle:d,innerRadius:f,outerRadius:l,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],a),h=(this.options.spacing+this.options.borderWidth)/2,B=y(N,d-r)>=K||Vi(c,r,d),u=xe(o,f+h,l+h);return B&&u}getCenterPoint(i){const{x:n,y:a,startAngle:s,endAngle:c,innerRadius:o,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],i),{offset:d,spacing:f}=this.options,l=(s+c)/2,N=(o+r+f+d)/2;return{x:n+Math.cos(l)*N,y:a+Math.sin(l)*N}}tooltipPosition(i){return this.getCenterPoint(i)}draw(i){const{options:n,circumference:a}=this,s=(n.offset||0)/4,c=(n.spacing||0)/2,o=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=a>K?Math.floor(a/K):0,a===0||this.innerRadius<0||this.outerRadius<0)return;i.save();const r=(this.startAngle+this.endAngle)/2;i.translate(Math.cos(r)*s,Math.sin(r)*s);const d=1-Math.sin(Math.min(z,a||0)),f=s*d;i.fillStyle=n.backgroundColor,i.strokeStyle=n.borderColor,Ed(i,this,f,c,o),zd(i,this,f,c,o),i.restore()}}O(Ni,"id","arc"),O(Ni,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),O(Ni,"defaultRoutes",{backgroundColor:"backgroundColor"}),O(Ni,"descriptors",{_scriptable:!0,_indexable:i=>i!=="borderDash"});function Os(t,e,i=e){t.lineCap=y(i.borderCapStyle,e.borderCapStyle),t.setLineDash(y(i.borderDash,e.borderDash)),t.lineDashOffset=y(i.borderDashOffset,e.borderDashOffset),t.lineJoin=y(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=y(i.borderWidth,e.borderWidth),t.strokeStyle=y(i.borderColor,e.borderColor)}function Id(t,e,i){t.lineTo(i.x,i.y)}function Fd(t){return t.stepped?lo:t.tension||t.cubicInterpolationMode==="monotone"?No:Id}function Vs(t,e,i={}){const n=t.length,{start:a=0,end:s=n-1}=i,{start:c,end:o}=e,r=Math.max(a,c),d=Math.min(s,o),f=a<c&&s<c||a>o&&s>o;return{count:n,start:r,loop:e.loop,ilen:d<r&&!f?n+d-r:d-r}}function Td(t,e,i,n){const{points:a,options:s}=e,{count:c,start:o,loop:r,ilen:d}=Vs(a,i,n),f=Fd(s);let{move:l=!0,reverse:N}=n||{},h,g,B;for(h=0;h<=d;++h)g=a[(o+(N?d-h:h))%c],!g.skip&&(l?(t.moveTo(g.x,g.y),l=!1):f(t,B,g,N,s.stepped),B=g);return r&&(g=a[(o+(N?d:0))%c],f(t,B,g,N,s.stepped)),!!r}function Hd(t,e,i,n){const a=e.points,{count:s,start:c,ilen:o}=Vs(a,i,n),{move:r=!0,reverse:d}=n||{};let f=0,l=0,N,h,g,B,u,b;const m=p=>(c+(d?o-p:p))%s,D=()=>{B!==u&&(t.lineTo(f,u),t.lineTo(f,B),t.lineTo(f,b))};for(r&&(h=a[m(0)],t.moveTo(h.x,h.y)),N=0;N<=o;++N){if(h=a[m(N)],h.skip)continue;const p=h.x,x=h.y,V=p|0;V===g?(x<B?B=x:x>u&&(u=x),f=(l*f+p)/++l):(D(),t.lineTo(p,x),g=V,l=0,B=u=x),b=x}D()}function wt(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!i?Hd:Td}function Wd(t){return t.stepped?Ho:t.tension||t.cubicInterpolationMode==="monotone"?Wo:Re}function jd(t,e,i,n){let a=e._path;a||(a=e._path=new Path2D,e.path(a,i,n)&&a.closePath()),Os(t,e.options),t.stroke(a)}function Yd(t,e,i,n){const{segments:a,options:s}=e,c=wt(e);for(const o of a)Os(t,s,o.style),t.beginPath(),c(t,e,o,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}const $d=typeof Path2D=="function";function Zd(t,e,i,n){$d&&!e.options.segment?jd(t,e,i,n):Yd(t,e,i,n)}class Ae extends fe{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,i){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const a=n.spanGaps?this._loop:this._fullLoop;Ro(this._points,n,e,a,i),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Xo(this,this.options.segment))}first(){const e=this.segments,i=this.points;return e.length&&i[e[0].start]}last(){const e=this.segments,i=this.points,n=e.length;return n&&i[e[n-1].end]}interpolate(e,i){const n=this.options,a=e[i],s=this.points,c=ds(this,{property:i,start:a,end:a});if(!c.length)return;const o=[],r=Wd(n);let d,f;for(d=0,f=c.length;d<f;++d){const{start:l,end:N}=c[d],h=s[l],g=s[N];if(h===g){o.push(h);continue}const B=Math.abs((a-h[i])/(g[i]-h[i])),u=r(h,g,B,n.stepped);u[i]=e[i],o.push(u)}return o.length===1?o[0]:o}pathSegment(e,i,n){return wt(this)(e,this,i,n)}path(e,i,n){const a=this.segments,s=wt(this);let c=this._loop;i=i||0,n=n||this.points.length-i;for(const o of a)c&=s(e,this,o,{start:i,end:i+n-1});return!!c}draw(e,i,n,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),Zd(e,this,n,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}O(Ae,"id","line"),O(Ae,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),O(Ae,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),O(Ae,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function fa(t,e,i,n){const a=t.options,{[i]:s}=t.getProps([i],n);return Math.abs(e-s)<a.radius+a.hitRadius}class qi extends fe{constructor(i){super();O(this,"parsed");O(this,"skip");O(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,i&&Object.assign(this,i)}inRange(i,n,a){const s=this.options,{x:c,y:o}=this.getProps(["x","y"],a);return Math.pow(i-c,2)+Math.pow(n-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(i,n){return fa(this,i,"x",n)}inYRange(i,n){return fa(this,i,"y",n)}getCenterPoint(i){const{x:n,y:a}=this.getProps(["x","y"],i);return{x:n,y:a}}size(i){i=i||this.options||{};let n=i.radius||0;n=Math.max(n,n&&i.hoverRadius||0);const a=n&&i.borderWidth||0;return(n+a)*2}draw(i,n){const a=this.options;this.skip||a.radius<.1||!De(this,n,this.size(a)/2)||(i.strokeStyle=a.borderColor,i.lineWidth=a.borderWidth,i.fillStyle=a.backgroundColor,vt(i,a,this.x,this.y))}getRange(){const i=this.options||{};return i.radius+i.hitRadius}}O(qi,"id","point"),O(qi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),O(qi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Cs(t,e){const{x:i,y:n,base:a,width:s,height:c}=t.getProps(["x","y","base","width","height"],e);let o,r,d,f,l;return t.horizontal?(l=c/2,o=Math.min(i,a),r=Math.max(i,a),d=n-l,f=n+l):(l=s/2,o=i-l,r=i+l,d=Math.min(n,a),f=Math.max(n,a)),{left:o,top:d,right:r,bottom:f}}function Ge(t,e,i,n){return t?0:j(e,i,n)}function Ud(t,e,i){const n=t.options.borderWidth,a=t.borderSkipped,s=Xa(n);return{t:Ge(a.top,s.top,0,i),r:Ge(a.right,s.right,0,e),b:Ge(a.bottom,s.bottom,0,i),l:Ge(a.left,s.left,0,e)}}function Xd(t,e,i){const{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),a=t.options.borderRadius,s=Ke(a),c=Math.min(e,i),o=t.borderSkipped,r=n||_(a);return{topLeft:Ge(!r||o.top||o.left,s.topLeft,0,c),topRight:Ge(!r||o.top||o.right,s.topRight,0,c),bottomLeft:Ge(!r||o.bottom||o.left,s.bottomLeft,0,c),bottomRight:Ge(!r||o.bottom||o.right,s.bottomRight,0,c)}}function Jd(t){const e=Cs(t),i=e.right-e.left,n=e.bottom-e.top,a=Ud(t,i/2,n/2),s=Xd(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:s},inner:{x:e.left+a.l,y:e.top+a.t,w:i-a.l-a.r,h:n-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function Vt(t,e,i,n){const a=e===null,s=i===null,o=t&&!(a&&s)&&Cs(t,n);return o&&(a||xe(e,o.left,o.right))&&(s||xe(i,o.top,o.bottom))}function qd(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function e4(t,e){t.rect(e.x,e.y,e.w,e.h)}function Ct(t,e,i={}){const n=t.x!==i.x?-e:0,a=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-n,c=(t.y+t.h!==i.y+i.h?e:0)-a;return{x:t.x+n,y:t.y+a,w:t.w+s,h:t.h+c,radius:t.radius}}class et extends fe{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:i,options:{borderColor:n,backgroundColor:a}}=this,{inner:s,outer:c}=Jd(this),o=qd(c.radius)?Ci:e4;e.save(),(c.w!==s.w||c.h!==s.h)&&(e.beginPath(),o(e,Ct(c,i,s)),e.clip(),o(e,Ct(s,-i,c)),e.fillStyle=n,e.fill("evenodd")),e.beginPath(),o(e,Ct(s,i)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,i,n){return Vt(this,e,i,n)}inXRange(e,i){return Vt(this,e,null,i)}inYRange(e,i){return Vt(this,null,e,i)}getCenterPoint(e){const{x:i,y:n,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(i+a)/2:i,y:s?n:(n+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}O(et,"id","bar"),O(et,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),O(et,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var i4=Object.freeze({__proto__:null,ArcElement:Ni,BarElement:et,LineElement:Ae,PointElement:qi});const Pt=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],la=Pt.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function As(t){return Pt[t%Pt.length]}function Gs(t){return la[t%la.length]}function t4(t,e){return t.borderColor=As(e),t.backgroundColor=Gs(e),++e}function n4(t,e){return t.backgroundColor=t.data.map(()=>As(e++)),e}function a4(t,e){return t.backgroundColor=t.data.map(()=>Gs(e++)),e}function s4(t){let e=0;return(i,n)=>{const a=t.getDatasetMeta(n).controller;a instanceof Le?e=n4(i,e):a instanceof xi?e=a4(i,e):a&&(e=t4(i,e))}}function Na(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function c4(t){return t&&(t.borderColor||t.backgroundColor)}var o4={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){if(!i.enabled)return;const{data:{datasets:n},options:a}=t.config,{elements:s}=a;if(!i.forceOverride&&(Na(n)||c4(a)||s&&Na(s)))return;const c=s4(t);n.forEach(c)}};function r4(t,e,i,n,a){const s=a.samples||n;if(s>=i)return t.slice(e,e+i);const c=[],o=(i-2)/(s-2);let r=0;const d=e+i-1;let f=e,l,N,h,g,B;for(c[r++]=t[f],l=0;l<s-2;l++){let u=0,b=0,m;const D=Math.floor((l+1)*o)+1+e,p=Math.min(Math.floor((l+2)*o)+1,i)+e,x=p-D;for(m=D;m<p;m++)u+=t[m].x,b+=t[m].y;u/=x,b/=x;const V=Math.floor(l*o)+1+e,C=Math.min(Math.floor((l+1)*o)+1,i)+e,{x:A,y:G}=t[f];for(h=g=-1,m=V;m<C;m++)g=.5*Math.abs((A-u)*(t[m].y-G)-(A-t[m].x)*(b-G)),g>h&&(h=g,N=t[m],B=m);c[r++]=N,f=B}return c[r++]=t[d],c}function d4(t,e,i,n){let a=0,s=0,c,o,r,d,f,l,N,h,g,B;const u=[],b=e+i-1,m=t[e].x,p=t[b].x-m;for(c=e;c<e+i;++c){o=t[c],r=(o.x-m)/p*n,d=o.y;const x=r|0;if(x===f)d<g?(g=d,l=c):d>B&&(B=d,N=c),a=(s*a+o.x)/++s;else{const V=c-1;if(!Q(l)&&!Q(N)){const C=Math.min(l,N),A=Math.max(l,N);C!==h&&C!==V&&u.push({...t[C],x:a}),A!==h&&A!==V&&u.push({...t[A],x:a})}c>0&&V!==h&&u.push(t[V]),u.push(o),f=x,s=0,g=B=d,l=N=h=c}}return u}function Ss(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function ha(t){t.data.datasets.forEach(e=>{Ss(e)})}function f4(t,e){const i=e.length;let n=0,a;const{iScale:s}=t,{min:c,max:o,minDefined:r,maxDefined:d}=s.getUserBounds();return r&&(n=j(pe(e,s.axis,c).lo,0,i-1)),d?a=j(pe(e,s.axis,o).hi+1,n,i)-n:a=i-n,{start:n,count:a}}var l4={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){ha(t);return}const n=t.width;t.data.datasets.forEach((a,s)=>{const{_data:c,indexAxis:o}=a,r=t.getDatasetMeta(s),d=c||a.data;if(fi([o,t.options.indexAxis])==="y"||!r.controller.supportsDecimation)return;const f=t.scales[r.xAxisID];if(f.type!=="linear"&&f.type!=="time"||t.options.parsing)return;let{start:l,count:N}=f4(r,d);const h=i.threshold||4*n;if(N<=h){Ss(a);return}Q(c)&&(a._data=d,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(B){this._data=B}}));let g;switch(i.algorithm){case"lttb":g=r4(d,l,N,n,i);break;case"min-max":g=d4(d,l,N,n);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}a._decimated=g})},destroy(t){ha(t)}};function N4(t,e,i){const n=t.segments,a=t.points,s=e.points,c=[];for(const o of n){let{start:r,end:d}=o;d=sn(r,d,a);const f=Rt(i,a[r],a[d],o.loop);if(!e.segments){c.push({source:o,target:f,start:a[r],end:a[d]});continue}const l=ds(e,f);for(const N of l){const h=Rt(i,s[N.start],s[N.end],N.loop),g=rs(o,a,h);for(const B of g)c.push({source:B,target:N,start:{[i]:ga(f,h,"start",Math.max)},end:{[i]:ga(f,h,"end",Math.min)}})}}return c}function Rt(t,e,i,n){if(n)return;let a=e[t],s=i[t];return t==="angle"&&(a=te(a),s=te(s)),{property:t,start:a,end:s}}function h4(t,e){const{x:i=null,y:n=null}=t||{},a=e.points,s=[];return e.segments.forEach(({start:c,end:o})=>{o=sn(c,o,a);const r=a[c],d=a[o];n!==null?(s.push({x:r.x,y:n}),s.push({x:d.x,y:n})):i!==null&&(s.push({x:i,y:r.y}),s.push({x:i,y:d.y}))}),s}function sn(t,e,i){for(;e>t;e--){const n=i[e];if(!isNaN(n.x)&&!isNaN(n.y))break}return e}function ga(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function ys(t,e){let i=[],n=!1;return L(t)?(n=!0,i=t):i=h4(t,e),i.length?new Ae({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function Ba(t){return t&&t.fill!==!1}function g4(t,e,i){let a=t[e].fill;const s=[e];let c;if(!i)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!I(a))return a;if(c=t[a],!c)return!1;if(c.visible)return a;s.push(a),a=c.fill}return!1}function B4(t,e,i){const n=x4(t);if(_(n))return isNaN(n.value)?!1:n;let a=parseFloat(n);return I(a)&&Math.floor(a)===a?u4(n[0],e,a,i):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function u4(t,e,i,n){return(t==="-"||t==="+")&&(i=e+i),i===e||i<0||i>=n?!1:i}function b4(t,e){let i=null;return t==="start"?i=e.bottom:t==="end"?i=e.top:_(t)?i=e.getPixelForValue(t.value):e.getBasePixel&&(i=e.getBasePixel()),i}function m4(t,e,i){let n;return t==="start"?n=i:t==="end"?n=e.options.reverse?e.min:e.max:_(t)?n=t.value:n=e.getBaseValue(),n}function x4(t){const e=t.options,i=e.fill;let n=y(i&&i.target,i);return n===void 0&&(n=!!e.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function p4(t){const{scale:e,index:i,line:n}=t,a=[],s=n.segments,c=n.points,o=D4(e,i);o.push(ys({x:null,y:e.bottom},n));for(let r=0;r<s.length;r++){const d=s[r];for(let f=d.start;f<=d.end;f++)O4(a,c[f],o)}return new Ae({points:a,options:{}})}function D4(t,e){const i=[],n=t.getMatchingVisibleMetas("line");for(let a=0;a<n.length;a++){const s=n[a];if(s.index===e)break;s.hidden||i.unshift(s.dataset)}return i}function O4(t,e,i){const n=[];for(let a=0;a<i.length;a++){const s=i[a],{first:c,last:o,point:r}=V4(s,e,"x");if(!(!r||c&&o)){if(c)n.unshift(r);else if(t.push(r),!o)break}}t.push(...n)}function V4(t,e,i){const n=t.interpolate(e,i);if(!n)return{};const a=n[i],s=t.segments,c=t.points;let o=!1,r=!1;for(let d=0;d<s.length;d++){const f=s[d],l=c[f.start][i],N=c[f.end][i];if(xe(a,l,N)){o=a===l,r=a===N;break}}return{first:o,last:r,point:n}}class ks{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,i,n){const{x:a,y:s,radius:c}=this;return i=i||{start:0,end:K},e.arc(a,s,c,i.end,i.start,!0),!n.bounds}interpolate(e){const{x:i,y:n,radius:a}=this,s=e.angle;return{x:i+Math.cos(s)*a,y:n+Math.sin(s)*a,angle:s}}}function C4(t){const{chart:e,fill:i,line:n}=t;if(I(i))return A4(e,i);if(i==="stack")return p4(t);if(i==="shape")return!0;const a=G4(t);return a instanceof ks?a:ys(a,n)}function A4(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}function G4(t){return(t.scale||{}).getPointPositionForValue?y4(t):S4(t)}function S4(t){const{scale:e={},fill:i}=t,n=b4(i,e);if(I(n)){const a=e.isHorizontal();return{x:a?n:null,y:a?null:n}}return null}function y4(t){const{scale:e,fill:i}=t,n=e.options,a=e.getLabels().length,s=n.reverse?e.max:e.min,c=m4(i,e,s),o=[];if(n.grid.circular){const r=e.getPointPositionForValue(0,s);return new ks({x:r.x,y:r.y,radius:e.getDistanceFromCenterForValue(c)})}for(let r=0;r<a;++r)o.push(e.getPointPositionForValue(r,c));return o}function At(t,e,i){const n=C4(e),{line:a,scale:s,axis:c}=e,o=a.options,r=o.fill,d=o.backgroundColor,{above:f=d,below:l=d}=r||{};n&&a.points.length&&(ft(t,i),k4(t,{line:a,target:n,above:f,below:l,area:i,scale:s,axis:c}),lt(t))}function k4(t,e){const{line:i,target:n,above:a,below:s,area:c,scale:o}=e,r=i._loop?"angle":e.axis;t.save(),r==="x"&&s!==a&&(ua(t,n,c.top),ba(t,{line:i,target:n,color:a,scale:o,property:r}),t.restore(),t.save(),ua(t,n,c.bottom)),ba(t,{line:i,target:n,color:s,scale:o,property:r}),t.restore()}function ua(t,e,i){const{segments:n,points:a}=e;let s=!0,c=!1;t.beginPath();for(const o of n){const{start:r,end:d}=o,f=a[r],l=a[sn(r,d,a)];s?(t.moveTo(f.x,f.y),s=!1):(t.lineTo(f.x,i),t.lineTo(f.x,f.y)),c=!!e.pathSegment(t,o,{move:c}),c?t.closePath():t.lineTo(l.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function ba(t,e){const{line:i,target:n,property:a,color:s,scale:c}=e,o=N4(i,n,a);for(const{source:r,target:d,start:f,end:l}of o){const{style:{backgroundColor:N=s}={}}=r,h=n!==!0;t.save(),t.fillStyle=N,v4(t,c,h&&Rt(a,f,l)),t.beginPath();const g=!!i.pathSegment(t,r);let B;if(h){g?t.closePath():ma(t,n,l,a);const u=!!n.pathSegment(t,d,{move:g,reverse:!0});B=g&&u,B||ma(t,n,f,a)}t.closePath(),t.fill(B?"evenodd":"nonzero"),t.restore()}}function v4(t,e,i){const{top:n,bottom:a}=e.chart.chartArea,{property:s,start:c,end:o}=i||{};s==="x"&&(t.beginPath(),t.rect(c,n,o-c,a-n),t.clip())}function ma(t,e,i,n){const a=e.interpolate(i,n);a&&t.lineTo(a.x,a.y)}var _4={id:"filler",afterDatasetsUpdate(t,e,i){const n=(t.data.datasets||[]).length,a=[];let s,c,o,r;for(c=0;c<n;++c)s=t.getDatasetMeta(c),o=s.dataset,r=null,o&&o.options&&o instanceof Ae&&(r={visible:t.isDatasetVisible(c),index:c,fill:B4(o,c,n),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:o}),s.$filler=r,a.push(r);for(c=0;c<n;++c)r=a[c],!(!r||r.fill===!1)&&(r.fill=g4(a,c,i.propagate))},beforeDraw(t,e,i){const n=i.drawTime==="beforeDraw",a=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let c=a.length-1;c>=0;--c){const o=a[c].$filler;o&&(o.line.updateControlPoints(s,o.axis),n&&o.fill&&At(t.ctx,o,s))}},beforeDatasetsDraw(t,e,i){if(i.drawTime!=="beforeDatasetsDraw")return;const n=t.getSortedVisibleDatasetMetas();for(let a=n.length-1;a>=0;--a){const s=n[a].$filler;Ba(s)&&At(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,e,i){const n=e.meta.$filler;!Ba(n)||i.drawTime!=="beforeDatasetDraw"||At(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const xa=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=t.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}},M4=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class pa extends fe{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,i,n){this.maxWidth=e,this.maxHeight=i,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let i=R(e.generateLabels,[this.chart],this)||[];e.filter&&(i=i.filter(n=>e.filter(n,this.chart.data))),e.sort&&(i=i.sort((n,a)=>e.sort(n,a,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:e,ctx:i}=this;if(!e.display){this.width=this.height=0;return}const n=e.labels,a=W(n.font),s=a.size,c=this._computeTitleHeight(),{boxWidth:o,itemHeight:r}=xa(n,s);let d,f;i.font=a.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(c,s,o,r)+10):(f=this.maxHeight,d=this._fitCols(c,a,o,r)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(f,e.maxHeight||this.maxHeight)}_fitRows(e,i,n,a){const{ctx:s,maxWidth:c,options:{labels:{padding:o}}}=this,r=this.legendHitBoxes=[],d=this.lineWidths=[0],f=a+o;let l=e;s.textAlign="left",s.textBaseline="middle";let N=-1,h=-f;return this.legendItems.forEach((g,B)=>{const u=n+i/2+s.measureText(g.text).width;(B===0||d[d.length-1]+u+2*o>c)&&(l+=f,d[d.length-(B>0?0:1)]=0,h+=f,N++),r[B]={left:0,top:h,row:N,width:u,height:a},d[d.length-1]+=u+o}),l}_fitCols(e,i,n,a){const{ctx:s,maxHeight:c,options:{labels:{padding:o}}}=this,r=this.legendHitBoxes=[],d=this.columnSizes=[],f=c-e;let l=o,N=0,h=0,g=0,B=0;return this.legendItems.forEach((u,b)=>{const{itemWidth:m,itemHeight:D}=Q4(n,i,s,u,a);b>0&&h+D+2*o>f&&(l+=N+o,d.push({width:N,height:h}),g+=N+o,B++,N=h=0),r[b]={left:g,top:h,col:B,width:m,height:D},N=Math.max(N,m),h+=D+o}),l+=N,d.push({width:N,height:h}),l}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:n,labels:{padding:a},rtl:s}}=this,c=$e(s,this.left,this.width);if(this.isHorizontal()){let o=0,r=Z(n,this.left+a,this.right-this.lineWidths[o]);for(const d of i)o!==d.row&&(o=d.row,r=Z(n,this.left+a,this.right-this.lineWidths[o])),d.top+=this.top+e+a,d.left=c.leftForLtr(c.x(r),d.width),r+=d.width+a}else{let o=0,r=Z(n,this.top+e+a,this.bottom-this.columnSizes[o].height);for(const d of i)d.col!==o&&(o=d.col,r=Z(n,this.top+e+a,this.bottom-this.columnSizes[o].height)),d.top=r,d.left+=this.left+a,d.left=c.leftForLtr(c.x(d.left),d.width),r+=d.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ft(e,this),this._draw(),lt(e)}}_draw(){const{options:e,columnSizes:i,lineWidths:n,ctx:a}=this,{align:s,labels:c}=e,o=T.color,r=$e(e.rtl,this.left,this.width),d=W(c.font),{padding:f}=c,l=d.size,N=l/2;let h;this.drawTitle(),a.textAlign=r.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:g,boxHeight:B,itemHeight:u}=xa(c,l),b=function(V,C,A){if(isNaN(g)||g<=0||isNaN(B)||B<0)return;a.save();const G=y(A.lineWidth,1);if(a.fillStyle=y(A.fillStyle,o),a.lineCap=y(A.lineCap,"butt"),a.lineDashOffset=y(A.lineDashOffset,0),a.lineJoin=y(A.lineJoin,"miter"),a.lineWidth=G,a.strokeStyle=y(A.strokeStyle,o),a.setLineDash(y(A.lineDash,[])),c.usePointStyle){const k={radius:B*Math.SQRT2/2,pointStyle:A.pointStyle,rotation:A.rotation,borderWidth:G},v=r.xPlus(V,g/2),M=C+N;Ua(a,k,v,M,c.pointStyleWidth&&g)}else{const k=C+Math.max((l-B)/2,0),v=r.leftForLtr(V,g),M=Ke(A.borderRadius);a.beginPath(),Object.values(M).some(Y=>Y!==0)?Ci(a,{x:v,y:k,w:g,h:B,radius:M}):a.rect(v,k,g,B),a.fill(),G!==0&&a.stroke()}a.restore()},m=function(V,C,A){Ie(a,A.text,V,C+u/2,d,{strikethrough:A.hidden,textAlign:r.textAlign(A.textAlign)})},D=this.isHorizontal(),p=this._computeTitleHeight();D?h={x:Z(s,this.left+f,this.right-n[0]),y:this.top+f+p,line:0}:h={x:this.left+f,y:Z(s,this.top+p+f,this.bottom-i[0].height),line:0},ss(this.ctx,e.textDirection);const x=u+f;this.legendItems.forEach((V,C)=>{a.strokeStyle=V.fontColor,a.fillStyle=V.fontColor;const A=a.measureText(V.text).width,G=r.textAlign(V.textAlign||(V.textAlign=c.textAlign)),k=g+N+A;let v=h.x,M=h.y;r.setWidth(this.width),D?C>0&&v+k+f>this.right&&(M=h.y+=x,h.line++,v=h.x=Z(s,this.left+f,this.right-n[h.line])):C>0&&M+x>this.bottom&&(v=h.x=v+i[h.line].width+f,h.line++,M=h.y=Z(s,this.top+p+f,this.bottom-i[h.line].height));const Y=r.x(v);if(b(Y,M,V),v=qc(G,v+g+N,D?v+k:this.right,e.rtl),m(r.x(v),M,V),D)h.x+=k+f;else if(typeof V.text!="string"){const ee=d.lineHeight;h.y+=vs(V,ee)}else h.y+=x}),cs(this.ctx,e.textDirection)}drawTitle(){const e=this.options,i=e.title,n=W(i.font),a=X(i.padding);if(!i.display)return;const s=$e(e.rtl,this.left,this.width),c=this.ctx,o=i.position,r=n.size/2,d=a.top+r;let f,l=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),f=this.top+d,l=Z(e.align,l,this.right-N);else{const g=this.columnSizes.reduce((B,u)=>Math.max(B,u.height),0);f=d+Z(e.align,this.top,this.bottom-g-e.labels.padding-this._computeTitleHeight())}const h=Z(o,l,l+N);c.textAlign=s.textAlign(Ut(o)),c.textBaseline="middle",c.strokeStyle=i.color,c.fillStyle=i.color,c.font=n.string,Ie(c,i.text,h,f,n)}_computeTitleHeight(){const e=this.options.title,i=W(e.font),n=X(e.padding);return e.display?i.lineHeight+n.height:0}_getLegendItemAt(e,i){let n,a,s;if(xe(e,this.left,this.right)&&xe(i,this.top,this.bottom)){for(s=this.legendHitBoxes,n=0;n<s.length;++n)if(a=s[n],xe(e,a.left,a.left+a.width)&&xe(i,a.top,a.top+a.height))return this.legendItems[n]}return null}handleEvent(e){const i=this.options;if(!R4(e.type,i))return;const n=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,s=M4(a,n);a&&!s&&R(i.onLeave,[e,a,this],this),this._hoveredItem=n,n&&!s&&R(i.onHover,[e,n,this],this)}else n&&R(i.onClick,[e,n,this],this)}}function Q4(t,e,i,n,a){const s=w4(n,t,e,i),c=P4(a,n,e.lineHeight);return{itemWidth:s,itemHeight:c}}function w4(t,e,i,n){let a=t.text;return a&&typeof a!="string"&&(a=a.reduce((s,c)=>s.length>c.length?s:c)),e+i.size/2+n.measureText(a).width}function P4(t,e,i){let n=t;return typeof e.text!="string"&&(n=vs(e,i)),n}function vs(t,e){const i=t.text?t.text.length+.5:0;return e*i}function R4(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var L4={id:"legend",_element:pa,start(t,e,i){const n=t.legend=new pa({ctx:t.ctx,options:i,chart:t});U.configure(t,n,i),U.addBox(t,n)},stop(t){U.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const n=t.legend;U.configure(t,n,i),n.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const n=e.datasetIndex,a=i.chart;a.isDatasetVisible(n)?(a.hide(n),e.hidden=!0):(a.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:a,color:s,useBorderRadius:c,borderRadius:o}}=t.legend.options;return t._getSortedDatasetMetas().map(r=>{const d=r.controller.getStyle(i?0:void 0),f=X(d.borderWidth);return{text:e[r.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!r.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:n||d.pointStyle,rotation:d.rotation,textAlign:a||d.textAlign,borderRadius:c&&(o||d.borderRadius),datasetIndex:r.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class cn extends fe{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,i){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=i;const a=L(n.text)?n.text.length:1;this._padding=X(n.padding);const s=a*W(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:i,left:n,bottom:a,right:s,options:c}=this,o=c.align;let r=0,d,f,l;return this.isHorizontal()?(f=Z(o,n,s),l=i+e,d=s-n):(c.position==="left"?(f=n+e,l=Z(o,a,i),r=z*-.5):(f=s-e,l=Z(o,i,a),r=z*.5),d=a-i),{titleX:f,titleY:l,maxWidth:d,rotation:r}}draw(){const e=this.ctx,i=this.options;if(!i.display)return;const n=W(i.font),s=n.lineHeight/2+this._padding.top,{titleX:c,titleY:o,maxWidth:r,rotation:d}=this._drawArgs(s);Ie(e,i.text,0,0,n,{color:i.color,maxWidth:r,rotation:d,textAlign:Ut(i.align),textBaseline:"middle",translation:[c,o]})}}function K4(t,e){const i=new cn({ctx:t.ctx,options:e,chart:t});U.configure(t,i,e),U.addBox(t,i),t.titleBlock=i}var E4={id:"title",_element:cn,start(t,e,i){K4(t,i)},stop(t){const e=t.titleBlock;U.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const n=t.titleBlock;U.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fi=new WeakMap;var z4={id:"subtitle",start(t,e,i){const n=new cn({ctx:t.ctx,options:i,chart:t});U.configure(t,n,i),U.addBox(t,n),Fi.set(t,n)},stop(t){U.removeBox(t,Fi.get(t)),Fi.delete(t)},beforeUpdate(t,e,i){const n=Fi.get(t);U.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const hi={average(t){if(!t.length)return!1;let e,i,n=0,a=0,s=0;for(e=0,i=t.length;e<i;++e){const c=t[e].element;if(c&&c.hasValue()){const o=c.tooltipPosition();n+=o.x,a+=o.y,++s}}return{x:n/s,y:a/s}},nearest(t,e){if(!t.length)return!1;let i=e.x,n=e.y,a=Number.POSITIVE_INFINITY,s,c,o;for(s=0,c=t.length;s<c;++s){const r=t[s].element;if(r&&r.hasValue()){const d=r.getCenterPoint(),f=yt(e,d);f<a&&(a=f,o=r)}}if(o){const r=o.tooltipPosition();i=r.x,n=r.y}return{x:i,y:n}}};function le(t,e){return e&&(L(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function ue(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function I4(t,e){const{element:i,datasetIndex:n,index:a}=e,s=t.getDatasetMeta(n).controller,{label:c,value:o}=s.getLabelAndValue(a);return{chart:t,label:c,parsed:s.getParsed(a),raw:t.data.datasets[n].data[a],formattedValue:o,dataset:s.getDataset(),dataIndex:a,datasetIndex:n,element:i}}function Da(t,e){const i=t.chart.ctx,{body:n,footer:a,title:s}=t,{boxWidth:c,boxHeight:o}=e,r=W(e.bodyFont),d=W(e.titleFont),f=W(e.footerFont),l=s.length,N=a.length,h=n.length,g=X(e.padding);let B=g.height,u=0,b=n.reduce((p,x)=>p+x.before.length+x.lines.length+x.after.length,0);if(b+=t.beforeBody.length+t.afterBody.length,l&&(B+=l*d.lineHeight+(l-1)*e.titleSpacing+e.titleMarginBottom),b){const p=e.displayColors?Math.max(o,r.lineHeight):r.lineHeight;B+=h*p+(b-h)*r.lineHeight+(b-1)*e.bodySpacing}N&&(B+=e.footerMarginTop+N*f.lineHeight+(N-1)*e.footerSpacing);let m=0;const D=function(p){u=Math.max(u,i.measureText(p).width+m)};return i.save(),i.font=d.string,w(t.title,D),i.font=r.string,w(t.beforeBody.concat(t.afterBody),D),m=e.displayColors?c+2+e.boxPadding:0,w(n,p=>{w(p.before,D),w(p.lines,D),w(p.after,D)}),m=0,i.font=f.string,w(t.footer,D),i.restore(),u+=g.width,{width:u,height:B}}function F4(t,e){const{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}function T4(t,e,i,n){const{x:a,width:s}=n,c=i.caretSize+i.caretPadding;if(t==="left"&&a+s+c>e.width||t==="right"&&a-s-c<0)return!0}function H4(t,e,i,n){const{x:a,width:s}=i,{width:c,chartArea:{left:o,right:r}}=t;let d="center";return n==="center"?d=a<=(o+r)/2?"left":"right":a<=s/2?d="left":a>=c-s/2&&(d="right"),T4(d,t,e,i)&&(d="center"),d}function Oa(t,e,i){const n=i.yAlign||e.yAlign||F4(t,i);return{xAlign:i.xAlign||e.xAlign||H4(t,e,i,n),yAlign:n}}function W4(t,e){let{x:i,width:n}=t;return e==="right"?i-=n:e==="center"&&(i-=n/2),i}function j4(t,e,i){let{y:n,height:a}=t;return e==="top"?n+=i:e==="bottom"?n-=a+i:n-=a/2,n}function Va(t,e,i,n){const{caretSize:a,caretPadding:s,cornerRadius:c}=t,{xAlign:o,yAlign:r}=i,d=a+s,{topLeft:f,topRight:l,bottomLeft:N,bottomRight:h}=Ke(c);let g=W4(e,o);const B=j4(e,r,d);return r==="center"?o==="left"?g+=d:o==="right"&&(g-=d):o==="left"?g-=Math.max(f,N)+a:o==="right"&&(g+=Math.max(l,h)+a),{x:j(g,0,n.width-e.width),y:j(B,0,n.height-e.height)}}function Ti(t,e,i){const n=X(i.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-n.right:t.x+n.left}function Ca(t){return le([],ue(t))}function Y4(t,e,i){return ve(t,{tooltip:e,tooltipItems:i,type:"tooltip"})}function Aa(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const _s={beforeTitle:ge,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:ge,beforeBody:ge,beforeLabel:ge,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return Q(i)||(e+=i),e},labelColor(t){const i=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const i=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:ge,afterBody:ge,beforeFooter:ge,footer:ge,afterFooter:ge};function J(t,e,i,n){const a=t[e].call(i,n);return typeof a>"u"?_s[e].call(i,n):a}class Lt extends fe{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const i=this.chart,n=this.options.setContext(this.getContext()),a=n.enabled&&i.options.animation&&n.animations,s=new fs(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=Y4(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,i){const{callbacks:n}=i,a=J(n,"beforeTitle",this,e),s=J(n,"title",this,e),c=J(n,"afterTitle",this,e);let o=[];return o=le(o,ue(a)),o=le(o,ue(s)),o=le(o,ue(c)),o}getBeforeBody(e,i){return Ca(J(i.callbacks,"beforeBody",this,e))}getBody(e,i){const{callbacks:n}=i,a=[];return w(e,s=>{const c={before:[],lines:[],after:[]},o=Aa(n,s);le(c.before,ue(J(o,"beforeLabel",this,s))),le(c.lines,J(o,"label",this,s)),le(c.after,ue(J(o,"afterLabel",this,s))),a.push(c)}),a}getAfterBody(e,i){return Ca(J(i.callbacks,"afterBody",this,e))}getFooter(e,i){const{callbacks:n}=i,a=J(n,"beforeFooter",this,e),s=J(n,"footer",this,e),c=J(n,"afterFooter",this,e);let o=[];return o=le(o,ue(a)),o=le(o,ue(s)),o=le(o,ue(c)),o}_createItems(e){const i=this._active,n=this.chart.data,a=[],s=[],c=[];let o=[],r,d;for(r=0,d=i.length;r<d;++r)o.push(I4(this.chart,i[r]));return e.filter&&(o=o.filter((f,l,N)=>e.filter(f,l,N,n))),e.itemSort&&(o=o.sort((f,l)=>e.itemSort(f,l,n))),w(o,f=>{const l=Aa(e.callbacks,f);a.push(J(l,"labelColor",this,f)),s.push(J(l,"labelPointStyle",this,f)),c.push(J(l,"labelTextColor",this,f))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=c,this.dataPoints=o,o}update(e,i){const n=this.options.setContext(this.getContext()),a=this._active;let s,c=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const o=hi[n.position].call(this,a,this._eventPosition);c=this._createItems(n),this.title=this.getTitle(c,n),this.beforeBody=this.getBeforeBody(c,n),this.body=this.getBody(c,n),this.afterBody=this.getAfterBody(c,n),this.footer=this.getFooter(c,n);const r=this._size=Da(this,n),d=Object.assign({},o,r),f=Oa(this.chart,n,d),l=Va(n,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,s={opacity:1,x:l.x,y:l.y,width:r.width,height:r.height,caretX:o.x,caretY:o.y}}this._tooltipItems=c,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(e,i,n,a){const s=this.getCaretPosition(e,n,a);i.lineTo(s.x1,s.y1),i.lineTo(s.x2,s.y2),i.lineTo(s.x3,s.y3)}getCaretPosition(e,i,n){const{xAlign:a,yAlign:s}=this,{caretSize:c,cornerRadius:o}=n,{topLeft:r,topRight:d,bottomLeft:f,bottomRight:l}=Ke(o),{x:N,y:h}=e,{width:g,height:B}=i;let u,b,m,D,p,x;return s==="center"?(p=h+B/2,a==="left"?(u=N,b=u-c,D=p+c,x=p-c):(u=N+g,b=u+c,D=p-c,x=p+c),m=u):(a==="left"?b=N+Math.max(r,f)+c:a==="right"?b=N+g-Math.max(d,l)-c:b=this.caretX,s==="top"?(D=h,p=D-c,u=b-c,m=b+c):(D=h+B,p=D+c,u=b+c,m=b-c),x=D),{x1:u,x2:b,x3:m,y1:D,y2:p,y3:x}}drawTitle(e,i,n){const a=this.title,s=a.length;let c,o,r;if(s){const d=$e(n.rtl,this.x,this.width);for(e.x=Ti(this,n.titleAlign,n),i.textAlign=d.textAlign(n.titleAlign),i.textBaseline="middle",c=W(n.titleFont),o=n.titleSpacing,i.fillStyle=n.titleColor,i.font=c.string,r=0;r<s;++r)i.fillText(a[r],d.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+o,r+1===s&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,i,n,a,s){const c=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:r,boxWidth:d}=s,f=W(s.bodyFont),l=Ti(this,"left",s),N=a.x(l),h=r<f.lineHeight?(f.lineHeight-r)/2:0,g=i.y+h;if(s.usePointStyle){const B={radius:Math.min(d,r)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},u=a.leftForLtr(N,d)+d/2,b=g+r/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,vt(e,B,u,b),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,vt(e,B,u,b)}else{e.lineWidth=_(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const B=a.leftForLtr(N,d),u=a.leftForLtr(a.xPlus(N,1),d-2),b=Ke(c.borderRadius);Object.values(b).some(m=>m!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,Ci(e,{x:B,y:g,w:d,h:r,radius:b}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),Ci(e,{x:u,y:g+1,w:d-2,h:r-2,radius:b}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(B,g,d,r),e.strokeRect(B,g,d,r),e.fillStyle=c.backgroundColor,e.fillRect(u,g+1,d-2,r-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,i,n){const{body:a}=this,{bodySpacing:s,bodyAlign:c,displayColors:o,boxHeight:r,boxWidth:d,boxPadding:f}=n,l=W(n.bodyFont);let N=l.lineHeight,h=0;const g=$e(n.rtl,this.x,this.width),B=function(A){i.fillText(A,g.x(e.x+h),e.y+N/2),e.y+=N+s},u=g.textAlign(c);let b,m,D,p,x,V,C;for(i.textAlign=c,i.textBaseline="middle",i.font=l.string,e.x=Ti(this,u,n),i.fillStyle=n.bodyColor,w(this.beforeBody,B),h=o&&u!=="right"?c==="center"?d/2+f:d+2+f:0,p=0,V=a.length;p<V;++p){for(b=a[p],m=this.labelTextColors[p],i.fillStyle=m,w(b.before,B),D=b.lines,o&&D.length&&(this._drawColorBox(i,e,p,g,n),N=Math.max(l.lineHeight,r)),x=0,C=D.length;x<C;++x)B(D[x]),N=l.lineHeight;w(b.after,B)}h=0,N=l.lineHeight,w(this.afterBody,B),e.y-=s}drawFooter(e,i,n){const a=this.footer,s=a.length;let c,o;if(s){const r=$e(n.rtl,this.x,this.width);for(e.x=Ti(this,n.footerAlign,n),e.y+=n.footerMarginTop,i.textAlign=r.textAlign(n.footerAlign),i.textBaseline="middle",c=W(n.footerFont),i.fillStyle=n.footerColor,i.font=c.string,o=0;o<s;++o)i.fillText(a[o],r.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+n.footerSpacing}}drawBackground(e,i,n,a){const{xAlign:s,yAlign:c}=this,{x:o,y:r}=e,{width:d,height:f}=n,{topLeft:l,topRight:N,bottomLeft:h,bottomRight:g}=Ke(a.cornerRadius);i.fillStyle=a.backgroundColor,i.strokeStyle=a.borderColor,i.lineWidth=a.borderWidth,i.beginPath(),i.moveTo(o+l,r),c==="top"&&this.drawCaret(e,i,n,a),i.lineTo(o+d-N,r),i.quadraticCurveTo(o+d,r,o+d,r+N),c==="center"&&s==="right"&&this.drawCaret(e,i,n,a),i.lineTo(o+d,r+f-g),i.quadraticCurveTo(o+d,r+f,o+d-g,r+f),c==="bottom"&&this.drawCaret(e,i,n,a),i.lineTo(o+h,r+f),i.quadraticCurveTo(o,r+f,o,r+f-h),c==="center"&&s==="left"&&this.drawCaret(e,i,n,a),i.lineTo(o,r+l),i.quadraticCurveTo(o,r,o+l,r),i.closePath(),i.fill(),a.borderWidth>0&&i.stroke()}_updateAnimationTarget(e){const i=this.chart,n=this.$animations,a=n&&n.x,s=n&&n.y;if(a||s){const c=hi[e.position].call(this,this._active,this._eventPosition);if(!c)return;const o=this._size=Da(this,e),r=Object.assign({},c,this._size),d=Oa(i,e,r),f=Va(e,r,d,i);(a._to!==f.x||s._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=o.width,this.height=o.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(e){const i=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(i);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const c=X(i.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(s,e,a,i),ss(e,i.textDirection),s.y+=c.top,this.drawTitle(s,e,i),this.drawBody(s,e,i),this.drawFooter(s,e,i),cs(e,i.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,i){const n=this._active,a=e.map(({datasetIndex:o,index:r})=>{const d=this.chart.getDatasetMeta(o);if(!d)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:d.data[r],index:r}}),s=!it(n,a),c=this._positionChanged(a,i);(s||c)&&(this._active=a,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,i,n=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],c=this._getActiveElements(e,s,i,n),o=this._positionChanged(c,e),r=i||!it(c,s)||o;return r&&(this._active=c,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,i))),r}_getActiveElements(e,i,n,a){const s=this.options;if(e.type==="mouseout")return[];if(!a)return i;const c=this.chart.getElementsAtEventForMode(e,s.mode,s,n);return s.reverse&&c.reverse(),c}_positionChanged(e,i){const{caretX:n,caretY:a,options:s}=this,c=hi[s.position].call(this,e,i);return c!==!1&&(n!==c.x||a!==c.y)}}O(Lt,"positioners",hi);var $4={id:"tooltip",_element:Lt,positioners:hi,afterInit(t,e,i){i&&(t.tooltip=new Lt({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_s},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Z4=Object.freeze({__proto__:null,Colors:o4,Decimation:l4,Filler:_4,Legend:L4,SubTitle:z4,Title:E4,Tooltip:$4});const U4=(t,e,i,n)=>(typeof e=="string"?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i);function X4(t,e,i,n){const a=t.indexOf(e);if(a===-1)return U4(t,e,i,n);const s=t.lastIndexOf(e);return a!==s?i:a}const J4=(t,e)=>t===null?null:j(Math.round(t),0,e);function Ga(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Kt extends Fe{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const i=this._addedLabels;if(i.length){const n=this.getLabels();for(const{index:a,label:s}of i)n[a]===s&&n.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,i){if(Q(e))return null;const n=this.getLabels();return i=isFinite(i)&&n[i]===e?i:X4(n,e,y(i,e),this._addedLabels),J4(i,n.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:n,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(n=0),i||(a=this.getLabels().length-1)),this.min=n,this.max=a}buildTicks(){const e=this.min,i=this.max,n=this.options.offset,a=[];let s=this.getLabels();s=e===0&&i===s.length-1?s:s.slice(e,i+1),this._valueRange=Math.max(s.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let c=e;c<=i;c++)a.push({value:c});return a}getLabelForValue(e){return Ga.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const i=this.ticks;return e<0||e>i.length-1?null:this.getPixelForValue(i[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}O(Kt,"id","category"),O(Kt,"defaults",{ticks:{callback:Ga}});function q4(t,e){const i=[],{bounds:a,step:s,min:c,max:o,precision:r,count:d,maxTicks:f,maxDigits:l,includeBounds:N}=t,h=s||1,g=f-1,{min:B,max:u}=e,b=!Q(c),m=!Q(o),D=!Q(d),p=(u-B)/(l+1);let x=pn((u-B)/g/h)*h,V,C,A,G;if(x<1e-14&&!b&&!m)return[{value:B},{value:u}];G=Math.ceil(u/x)-Math.floor(B/x),G>g&&(x=pn(G*x/g/h)*h),Q(r)||(V=Math.pow(10,r),x=Math.ceil(x*V)/V),a==="ticks"?(C=Math.floor(B/x)*x,A=Math.ceil(u/x)*x):(C=B,A=u),b&&m&&s&&jc((o-c)/s,x/1e3)?(G=Math.round(Math.min((o-c)/x,f)),x=(o-c)/G,C=c,A=o):D?(C=b?c:C,A=m?o:A,G=d-1,x=(A-C)/G):(G=(A-C)/x,ui(G,Math.round(G),x/1e3)?G=Math.round(G):G=Math.ceil(G));const k=Math.max(Dn(x),Dn(C));V=Math.pow(10,Q(r)?k:r),C=Math.round(C*V)/V,A=Math.round(A*V)/V;let v=0;for(b&&(N&&C!==c?(i.push({value:c}),C<c&&v++,ui(Math.round((C+v*x)*V)/V,c,Sa(c,p,t))&&v++):C<c&&v++);v<G;++v){const M=Math.round((C+v*x)*V)/V;if(m&&M>o)break;i.push({value:M})}return m&&N&&A!==o?i.length&&ui(i[i.length-1].value,o,Sa(o,p,t))?i[i.length-1].value=o:i.push({value:o}):(!m||A===o)&&i.push({value:A}),i}function Sa(t,e,{horizontal:i,minRotation:n}){const a=re(n),s=(i?Math.sin(a):Math.cos(a))||.001,c=.75*e*(""+t).length;return Math.min(e/s,c)}class rt extends Fe{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,i){return Q(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:i,maxDefined:n}=this.getUserBounds();let{min:a,max:s}=this;const c=r=>a=i?a:r,o=r=>s=n?s:r;if(e){const r=he(a),d=he(s);r<0&&d<0?o(0):r>0&&d>0&&c(0)}if(a===s){let r=s===0?1:Math.abs(s*.05);o(s+r),e||c(a-r)}this.min=a,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:i,stepSize:n}=e,a;return n?(a=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),i=i||11),i&&(a=Math.min(i,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,i=e.ticks;let n=this.getTickLimit();n=Math.max(2,n);const a={maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},s=this._range||this,c=q4(a,s);return e.bounds==="ticks"&&Ia(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let i=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){const a=(n-i)/Math.max(e.length-1,1)/2;i-=a,n+=a}this._startValue=i,this._endValue=n,this._valueRange=n-i}getLabelForValue(e){return ki(e,this.chart.options.locale,this.options.ticks.format)}}class Et extends rt{determineDataLimits(){const{min:e,max:i}=this.getMinMax(!0);this.min=I(e)?e:0,this.max=I(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),i=e?this.width:this.height,n=re(this.options.ticks.minRotation),a=(e?Math.sin(n):Math.cos(n))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,s.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}O(Et,"id","linear"),O(Et,"defaults",{ticks:{callback:dt.formatters.numeric}});const Gi=t=>Math.floor(Ce(t)),we=(t,e)=>Math.pow(10,Gi(t)+e);function ya(t){return t/Math.pow(10,Gi(t))===1}function ka(t,e,i){const n=Math.pow(10,i),a=Math.floor(t/n);return Math.ceil(e/n)-a}function ef(t,e){const i=e-t;let n=Gi(i);for(;ka(t,e,n)>10;)n++;for(;ka(t,e,n)<10;)n--;return Math.min(n,Gi(t))}function tf(t,{min:e,max:i}){e=ie(t.min,e);const n=[],a=Gi(e);let s=ef(e,i),c=s<0?Math.pow(10,Math.abs(s)):1;const o=Math.pow(10,s),r=a>s?Math.pow(10,a):0,d=Math.round((e-r)*c)/c,f=Math.floor((e-r)/o/10)*o*10;let l=Math.floor((d-f)/Math.pow(10,s)),N=ie(t.min,Math.round((r+f+l*Math.pow(10,s))*c)/c);for(;N<i;)n.push({value:N,major:ya(N),significand:l}),l>=10?l=l<15?15:20:l++,l>=20&&(s++,l=2,c=s>=0?1:c),N=Math.round((r+f+l*Math.pow(10,s))*c)/c;const h=ie(t.max,N);return n.push({value:h,major:ya(h),significand:l}),n}class zt extends Fe{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,i){const n=rt.prototype.parse.apply(this,[e,i]);if(n===0){this._zero=!0;return}return I(n)&&n>0?n:null}determineDataLimits(){const{min:e,max:i}=this.getMinMax(!0);this.min=I(e)?Math.max(0,e):null,this.max=I(i)?Math.max(0,i):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!I(this._userMin)&&(this.min=e===we(this.min,0)?we(this.min,-1):we(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:i}=this.getUserBounds();let n=this.min,a=this.max;const s=o=>n=e?n:o,c=o=>a=i?a:o;n===a&&(n<=0?(s(1),c(10)):(s(we(n,-1)),c(we(a,1)))),n<=0&&s(we(a,-1)),a<=0&&c(we(n,1)),this.min=n,this.max=a}buildTicks(){const e=this.options,i={min:this._userMin,max:this._userMax},n=tf(i,this);return e.bounds==="ticks"&&Ia(n,this,"value"),e.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(e){return e===void 0?"0":ki(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=Ce(e),this._valueRange=Ce(this.max)-Ce(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Ce(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const i=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+i*this._valueRange)}}O(zt,"id","logarithmic"),O(zt,"defaults",{ticks:{callback:dt.formatters.logarithmic,major:{enabled:!0}}});function It(t){const e=t.ticks;if(e.display&&t.display){const i=X(e.backdropPadding);return y(e.font&&e.font.size,T.font.size)+i.height}return 0}function nf(t,e,i){return i=L(i)?i:[i],{w:fo(t,e.string,i),h:i.length*e.lineHeight}}function va(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i,end:e}:{start:e,end:e+i}}function af(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],a=[],s=t._pointLabels.length,c=t.options.pointLabels,o=c.centerPointLabels?z/s:0;for(let r=0;r<s;r++){const d=c.setContext(t.getPointLabelContext(r));a[r]=d.padding;const f=t.getPointPosition(r,t.drawingArea+a[r],o),l=W(d.font),N=nf(t.ctx,l,t._pointLabels[r]);n[r]=N;const h=te(t.getIndexAngle(r)+o),g=Math.round($t(h)),B=va(g,f.x,N.w,0,180),u=va(g,f.y,N.h,90,270);sf(i,e,h,B,u)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=rf(t,n,a)}function sf(t,e,i,n,a){const s=Math.abs(Math.sin(i)),c=Math.abs(Math.cos(i));let o=0,r=0;n.start<e.l?(o=(e.l-n.start)/s,t.l=Math.min(t.l,e.l-o)):n.end>e.r&&(o=(n.end-e.r)/s,t.r=Math.max(t.r,e.r+o)),a.start<e.t?(r=(e.t-a.start)/c,t.t=Math.min(t.t,e.t-r)):a.end>e.b&&(r=(a.end-e.b)/c,t.b=Math.max(t.b,e.b+r))}function cf(t,e,i){const n=t.drawingArea,{extra:a,additionalAngle:s,padding:c,size:o}=i,r=t.getPointPosition(e,n+a+c,s),d=Math.round($t(te(r.angle+F))),f=lf(r.y,o.h,d),l=df(d),N=ff(r.x,o.w,l);return{visible:!0,x:r.x,y:f,textAlign:l,left:N,top:f,right:N+o.w,bottom:f+o.h}}function of(t,e){if(!e)return!0;const{left:i,top:n,right:a,bottom:s}=t;return!(De({x:i,y:n},e)||De({x:i,y:s},e)||De({x:a,y:n},e)||De({x:a,y:s},e))}function rf(t,e,i){const n=[],a=t._pointLabels.length,s=t.options,{centerPointLabels:c,display:o}=s.pointLabels,r={extra:It(s)/2,additionalAngle:c?z/a:0};let d;for(let f=0;f<a;f++){r.padding=i[f],r.size=e[f];const l=cf(t,f,r);n.push(l),o==="auto"&&(l.visible=of(l,d),l.visible&&(d=l))}return n}function df(t){return t===0||t===180?"center":t<180?"left":"right"}function ff(t,e,i){return i==="right"?t-=e:i==="center"&&(t-=e/2),t}function lf(t,e,i){return i===90||i===270?t-=e/2:(i>270||i<90)&&(t-=e),t}function Nf(t,e,i){const{left:n,top:a,right:s,bottom:c}=i,{backdropColor:o}=e;if(!Q(o)){const r=Ke(e.borderRadius),d=X(e.backdropPadding);t.fillStyle=o;const f=n-d.left,l=a-d.top,N=s-n+d.width,h=c-a+d.height;Object.values(r).some(g=>g!==0)?(t.beginPath(),Ci(t,{x:f,y:l,w:N,h,radius:r}),t.fill()):t.fillRect(f,l,N,h)}}function hf(t,e){const{ctx:i,options:{pointLabels:n}}=t;for(let a=e-1;a>=0;a--){const s=t._pointLabelItems[a];if(!s.visible)continue;const c=n.setContext(t.getPointLabelContext(a));Nf(i,c,s);const o=W(c.font),{x:r,y:d,textAlign:f}=s;Ie(i,t._pointLabels[a],r,d+o.lineHeight/2,o,{color:c.color,textAlign:f,textBaseline:"middle"})}}function Ms(t,e,i,n){const{ctx:a}=t;if(i)a.arc(t.xCenter,t.yCenter,e,0,K);else{let s=t.getPointPosition(0,e);a.moveTo(s.x,s.y);for(let c=1;c<n;c++)s=t.getPointPosition(c,e),a.lineTo(s.x,s.y)}}function gf(t,e,i,n,a){const s=t.ctx,c=e.circular,{color:o,lineWidth:r}=e;!c&&!n||!o||!r||i<0||(s.save(),s.strokeStyle=o,s.lineWidth=r,s.setLineDash(a.dash),s.lineDashOffset=a.dashOffset,s.beginPath(),Ms(t,i,c,n),s.closePath(),s.stroke(),s.restore())}function Bf(t,e,i){return ve(t,{label:i,index:e,type:"pointLabel"})}class gi extends rt{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=X(It(this.options)/2),i=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+i/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(i,n)/2)}determineDataLimits(){const{min:e,max:i}=this.getMinMax(!1);this.min=I(e)&&!isNaN(e)?e:0,this.max=I(i)&&!isNaN(i)?i:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/It(this.options))}generateTickLabels(e){rt.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((i,n)=>{const a=R(this.options.pointLabels.callback,[i,n],this);return a||a===0?a:""}).filter((i,n)=>this.chart.getDataVisibility(n))}fit(){const e=this.options;e.display&&e.pointLabels.display?af(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,i,n,a){this.xCenter+=Math.floor((e-i)/2),this.yCenter+=Math.floor((n-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,i,n,a))}getIndexAngle(e){const i=K/(this._pointLabels.length||1),n=this.options.startAngle||0;return te(e*i+re(n))}getDistanceFromCenterForValue(e){if(Q(e))return NaN;const i=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*i:(e-this.min)*i}getValueForDistanceFromCenter(e){if(Q(e))return NaN;const i=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-i:this.min+i}getPointLabelContext(e){const i=this._pointLabels||[];if(e>=0&&e<i.length){const n=i[e];return Bf(this.getContext(),e,n)}}getPointPosition(e,i,n=0){const a=this.getIndexAngle(e)-F+n;return{x:Math.cos(a)*i+this.xCenter,y:Math.sin(a)*i+this.yCenter,angle:a}}getPointPositionForValue(e,i){return this.getPointPosition(e,this.getDistanceFromCenterForValue(i))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:i,top:n,right:a,bottom:s}=this._pointLabelItems[e];return{left:i,top:n,right:a,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:i}}=this.options;if(e){const n=this.ctx;n.save(),n.beginPath(),Ms(this,this.getDistanceFromCenterForValue(this._endValue),i,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){const e=this.ctx,i=this.options,{angleLines:n,grid:a,border:s}=i,c=this._pointLabels.length;let o,r,d;if(i.pointLabels.display&&hf(this,c),a.display&&this.ticks.forEach((f,l)=>{if(l!==0){r=this.getDistanceFromCenterForValue(f.value);const N=this.getContext(l),h=a.setContext(N),g=s.setContext(N);gf(this,h,r,c,g)}}),n.display){for(e.save(),o=c-1;o>=0;o--){const f=n.setContext(this.getPointLabelContext(o)),{color:l,lineWidth:N}=f;!N||!l||(e.lineWidth=N,e.strokeStyle=l,e.setLineDash(f.borderDash),e.lineDashOffset=f.borderDashOffset,r=this.getDistanceFromCenterForValue(i.ticks.reverse?this.min:this.max),d=this.getPointPosition(o,r),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(d.x,d.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,i=this.options,n=i.ticks;if(!n.display)return;const a=this.getIndexAngle(0);let s,c;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((o,r)=>{if(r===0&&!i.reverse)return;const d=n.setContext(this.getContext(r)),f=W(d.font);if(s=this.getDistanceFromCenterForValue(this.ticks[r].value),d.showLabelBackdrop){e.font=f.string,c=e.measureText(o.label).width,e.fillStyle=d.backdropColor;const l=X(d.backdropPadding);e.fillRect(-c/2-l.left,-s-f.size/2-l.top,c+l.width,f.size+l.height)}Ie(e,o.label,0,-s,f,{color:d.color})}),e.restore()}drawTitle(){}}O(gi,"id","radialLinear"),O(gi,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:dt.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),O(gi,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),O(gi,"descriptors",{angleLines:{_fallback:"grid"}});const ht={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},q=Object.keys(ht);function uf(t,e){return t-e}function _a(t,e){if(Q(e))return null;const i=t._adapter,{parser:n,round:a,isoWeekday:s}=t._parseOpts;let c=e;return typeof n=="function"&&(c=n(c)),I(c)||(c=typeof n=="string"?i.parse(c,n):i.parse(c)),c===null?null:(a&&(c=a==="week"&&(Ze(s)||s===!0)?i.startOf(c,"isoWeek",s):i.startOf(c,a)),+c)}function Ma(t,e,i,n){const a=q.length;for(let s=q.indexOf(t);s<a-1;++s){const c=ht[q[s]],o=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((i-e)/(o*c.size))<=n)return q[s]}return q[a-1]}function bf(t,e,i,n,a){for(let s=q.length-1;s>=q.indexOf(i);s--){const c=q[s];if(ht[c].common&&t._adapter.diff(a,n,c)>=e-1)return c}return q[i?q.indexOf(i):0]}function mf(t){for(let e=q.indexOf(t)+1,i=q.length;e<i;++e)if(ht[q[e]].common)return q[e]}function Qa(t,e,i){if(!i)t[e]=!0;else if(i.length){const{lo:n,hi:a}=Zt(i,e),s=i[n]>=e?i[n]:i[a];t[s]=!0}}function xf(t,e,i,n){const a=t._adapter,s=+a.startOf(e[0].value,n),c=e[e.length-1].value;let o,r;for(o=s;o<=c;o=+a.add(o,1,n))r=i[o],r>=0&&(e[r].major=!0);return e}function wa(t,e,i){const n=[],a={},s=e.length;let c,o;for(c=0;c<s;++c)o=e[c],a[o]=c,n.push({value:o,major:!1});return s===0||!i?n:xf(t,n,a,i)}class Si extends Fe{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,i={}){const n=e.time||(e.time={}),a=this._adapter=new Gr._date(e.adapters.date);a.init(i),Bi(n.displayFormats,a.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=i.normalized}parse(e,i){return e===void 0?null:_a(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,i=this._adapter,n=e.time.unit||"day";let{min:a,max:s,minDefined:c,maxDefined:o}=this.getUserBounds();function r(d){!c&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!o&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!c||!o)&&(r(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&r(this.getMinMax(!1))),a=I(a)&&!isNaN(a)?a:+i.startOf(Date.now(),n),s=I(s)&&!isNaN(s)?s:+i.endOf(Date.now(),n)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(i=e[0],n=e[e.length-1]),{min:i,max:n}}buildTicks(){const e=this.options,i=e.time,n=e.ticks,a=n.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,c=this.max,o=Uc(a,s,c);return this._unit=i.unit||(n.autoSkip?Ma(i.minUnit,this.min,this.max,this._getLabelCapacity(s)):bf(this,o.length,i.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:mf(this._unit),this.initOffsets(a),e.reverse&&o.reverse(),wa(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let i=0,n=0,a,s;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?i=1-a:i=(this.getDecimalForValue(e[1])-a)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?n=s:n=(s-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;i=j(i,0,c),n=j(n,0,c),this._offsets={start:i,end:n,factor:1/(i+1+n)}}_generate(){const e=this._adapter,i=this.min,n=this.max,a=this.options,s=a.time,c=s.unit||Ma(s.minUnit,i,n,this._getLabelCapacity(i)),o=y(a.ticks.stepSize,1),r=c==="week"?s.isoWeekday:!1,d=Ze(r)||r===!0,f={};let l=i,N,h;if(d&&(l=+e.startOf(l,"isoWeek",r)),l=+e.startOf(l,d?"day":c),e.diff(n,i,c)>1e5*o)throw new Error(i+" and "+n+" are too far apart with stepSize of "+o+" "+c);const g=a.ticks.source==="data"&&this.getDataTimestamps();for(N=l,h=0;N<n;N=+e.add(N,o,c),h++)Qa(f,N,g);return(N===n||a.bounds==="ticks"||h===1)&&Qa(f,N,g),Object.keys(f).sort((B,u)=>B-u).map(B=>+B)}getLabelForValue(e){const i=this._adapter,n=this.options.time;return n.tooltipFormat?i.format(e,n.tooltipFormat):i.format(e,n.displayFormats.datetime)}format(e,i){const a=this.options.time.displayFormats,s=this._unit,c=i||a[s];return this._adapter.format(e,c)}_tickFormatFunction(e,i,n,a){const s=this.options,c=s.ticks.callback;if(c)return R(c,[e,i,n],this);const o=s.time.displayFormats,r=this._unit,d=this._majorUnit,f=r&&o[r],l=d&&o[d],N=n[i],h=d&&l&&N&&N.major;return this._adapter.format(e,a||(h?l:f))}generateTickLabels(e){let i,n,a;for(i=0,n=e.length;i<n;++i)a=e[i],a.label=this._tickFormatFunction(a.value,i,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const i=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((i.start+n)*i.factor)}getValueForPixel(e){const i=this._offsets,n=this.getDecimalForPixel(e)/i.factor-i.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){const i=this.options.ticks,n=this.ctx.measureText(e).width,a=re(this.isHorizontal()?i.maxRotation:i.minRotation),s=Math.cos(a),c=Math.sin(a),o=this._resolveTickFontOptions(0).size;return{w:n*s+o*c,h:n*c+o*s}}_getLabelCapacity(e){const i=this.options.time,n=i.displayFormats,a=n[i.unit]||n.millisecond,s=this._tickFormatFunction(e,0,wa(this,[e],this._majorUnit),a),c=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],i,n;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(i=0,n=a.length;i<n;++i)e=e.concat(a[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let i,n;if(e.length)return e;const a=this.getLabels();for(i=0,n=a.length;i<n;++i)e.push(_a(this,a[i]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Ha(e.sort(uf))}}O(Si,"id","time"),O(Si,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Hi(t,e,i){let n=0,a=t.length-1,s,c,o,r;i?(e>=t[n].pos&&e<=t[a].pos&&({lo:n,hi:a}=pe(t,"pos",e)),{pos:s,time:o}=t[n],{pos:c,time:r}=t[a]):(e>=t[n].time&&e<=t[a].time&&({lo:n,hi:a}=pe(t,"time",e)),{time:s,pos:o}=t[n],{time:c,pos:r}=t[a]);const d=c-s;return d?o+(r-o)*(e-s)/d:o}class Ft extends Si{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(e);this._minPos=Hi(i,this.min),this._tableRange=Hi(i,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:i,max:n}=this,a=[],s=[];let c,o,r,d,f;for(c=0,o=e.length;c<o;++c)d=e[c],d>=i&&d<=n&&a.push(d);if(a.length<2)return[{time:i,pos:0},{time:n,pos:1}];for(c=0,o=a.length;c<o;++c)f=a[c+1],r=a[c-1],d=a[c],Math.round((f+r)/2)!==d&&s.push({time:d,pos:c/(o-1)});return s}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const i=this.getDataTimestamps(),n=this.getLabelTimestamps();return i.length&&n.length?e=this.normalize(i.concat(n)):e=i.length?i:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Hi(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const i=this._offsets,n=this.getDecimalForPixel(e)/i.factor-i.end;return Hi(this._table,n*this._tableRange+this._minPos,!0)}}O(Ft,"id","timeseries"),O(Ft,"defaults",Si.defaults);var pf=Object.freeze({__proto__:null,CategoryScale:Kt,LinearScale:Et,LogarithmicScale:zt,RadialLinearScale:gi,TimeScale:Si,TimeSeriesScale:Ft});const Df=[Ar,i4,Z4,pf];me.register(...Df);const Of={name:"Graph",props:{},mounted(){const t=[65,59,80,55,10],e=document.getElementById("Graph");let i=[],n=t.length;for(let a=0;a<n;a++)i.push("");new me(e,{type:"line",data:{labels:i,datasets:[{data:t,fill:!0,borderColor:"rgb(0,0,0)"}]},options:{plugins:{legend:{display:!1}}}})}},Vf={class:"chart-container",style:{position:"relative",height:"30vh",width:"50vw"}},Cf=S("canvas",{id:"Graph"},null,-1),Af=[Cf];function Gf(t,e,i,n,a,s){return ne(),ae("div",Vf,Af)}const Sf=Je(Of,[["render",Gf]]),yf={created(){try{this.pgn=(Es().query.pgn??void 0).toString(),console.log(this.pgn),this.chess.loadPgn(this.pgn),this.history=this.chess.history(),console.log(this.history),this.moves=[];let t=0;for(;t<this.history.length;)this.moves.push([this.history[t],this.history[t+1]]),t+=2;this.history=this.history.reverse(),this.chess.reset();const e=s=>{const o=/\[BlackElo "(.*?)"]/.exec(s);return o&&o.length>=2?o[1]:null};this.blackElo=e(this.pgn);const i=s=>{const o=/\[WhiteElo "(.*?)"]/.exec(s);return o&&o.length>=2?o[1]:null};this.whiteElo=i(this.pgn);const n=s=>{const o=/\[White "(.*?)"]/.exec(s);return o&&o.length>=2?o[1]:null};this.whitePlayer=n(this.pgn);const a=s=>{const o=/\[Black "(.*?)"]/.exec(s);return o&&o.length>=2?o[1]:null};this.blackPlayer=a(this.pgn)}catch{this.chess=null}},data(){return{fen:"",chess:new Is,score:0,stockfish:null,custom:0,size:600,history:null,pgn:"",blackElo:"",whiteElo:"",blackPlayer:"",whitePlayer:"",positionInfo:null,stockfishWorking:!1,opening:{m:"Startin Position",t:[],a:[]},bestmove:"",moves:[],historyStack:[],board:null}},methods:{evaluatePosition(){console.log("evaluating!"+this.fen),Ts(this.fen,(t,e)=>{console.log("Received score:"+t),console.log("Received Bestmove:"+e),this.score=t,(this.bestmove==""||this.bestmove.length<=e.length||this.bestmove.split(" ")[0]!=e.split(" ")[0])&&(this.bestmove=e)}),setTimeout(()=>{this.stockfishWorking=!1,console.log("back!")},1e3)},onMovePlayed({move:t,game:e}){e.makeMove(t),console.log("FEEEEEEEEEEEEEEEEEEN:"+e.fen),this.fen=e.fen,this.opening=Nn(this.chess.history()),this.evaluatePosition()},moveCall(){if(console.log("moveCall"),console.log(this.chess.isGameOver()),!this.chess.isGameOver()&&!this.stockfishWorking){this.stockfishWorking=!0,console.log(console.log(this.history));let t=this.history.pop();this.chess.move(t),this.historyStack.push(t),this.fen=this.chess.fen(),this.opening=Nn(this.chess.history()),this.evaluatePosition()}},backMove(){console.log(this.historyStack),!this.stockfishWorking&&this.historyStack.length!=0&&(this.stockfishWorking=!0,this.chess.undo(),this.history.push(this.historyStack.pop()),this.fen=this.chess.fen(),this.evaluatePosition())},completeBack(){if(!this.stockfishWorking){for(;this.chess.fen()!="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";)this.chess.undo(),this.history.push(this.historyStack.pop()),this.fen=this.chess.fen();this.stockfishWorking=!0,this.evaluatePosition()}},completeEnd(){if(!this.stockfishWorking){for(;this.history.length!=0;)this.historyStack.push(this.history.pop());this.chess.loadPgn(this.pgn),this.fen=this.chess.fen()}}},components:{EvalBar:Zs,UserAnalyzeBar:ac,EvalCircle:dc,CustomChessboard:hc,Graph:Sf}},kf={key:0,class:"grid place-content-center min-h-screen text-secondary font-mono"},vf={key:1,class:"flex items-center overflow-hidden h-screen w-full flex-row py-8"},_f=S("div",{class:"basis-1/12 h-full"},null,-1),Mf={class:"flex flex-row h-full items-center basis-2/3 w-full"},Qf={class:"h-full flex flex-col"},wf={class:"bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg"},Pf={class:"bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg"},Rf={class:"mx-4 h-full w-fit border-2 border-secondary flex flex-col items-center justify-center bg-base-200 rounded-lg"},Lf={class:"grid grid-rows-3 w-full h-full place-items-center"},Kf=S("div",{class:"w-16 mx-4 h-0 border border-secondary"},null,-1),Ef={class:"grid grid-rows-3 h-full w-full place-items-center"},zf={class:"h-full w-full bg-base-100 m-2 flex flex-col"},If={class:"w-full h-1/3 p-2"},Ff={class:"bg-primary border-8 rounded-lg h-full w-full"},Tf={class:"w-full h-1/4 p-2"},Hf={class:"bg-base-300 rounded-lg h-full w-full p-2 overflow-hidden"},Wf=S("br",null,null,-1),jf={class:"badge badge-accent font-bold mr-2"},Yf={class:"w-full h-1/2 p-2"},$f={class:"bg-base-300 rounded-lg h-full w-full p-2 overflow-y-scroll items-center justify-center"},Zf={class:"w-full items-center justify-center"},Uf={class:"my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl"},Xf={class:"flex justify-center"},Jf={class:"badge bg-slate-300 text-slate-900 border-slate-900"},qf={class:"flex justify-center"},el={class:"badge bg-gray-800 text-gray-200 border-gray-200"},il={class:"bottom-3 w-full h-12 grid grid-cols-5 gap-x-1"},tl={class:"btn-accent btn"},nl={class:"btn-accent btn"},al=S("button",{class:"btn-accent btn"},[S("span",{class:"material-symbols-outlined"}," auto_awesome ")],-1),sl={class:"btn-accent btn"},cl={class:"btn-accent btn"};function ol(t,e,i,n,a,s){const c=We("EvalBar"),o=We("UserAnalyzeBar"),r=We("custom-chessboard"),d=We("EvalCircle"),f=We("graph"),l=We("MoveTimeSlider");return this.chess===null?(ne(),ae("div",kf," Invalide PGN ")):(ne(),ae("div",vf,[_f,S("div",Mf,[se(c,{ref:"evalBar",evaluation:a.score,class:"h-full"},null,8,["evaluation"]),S("div",Qf,[S("div",wf,[se(o,{color:!1,elo:this.blackElo,username:this.blackPlayer},null,8,["elo","username"])]),se(r),S("div",Pf,[se(o,{color:!0,elo:this.whiteElo,username:this.whitePlayer},null,8,["elo","username"])])]),S("div",Rf,[S("div",Lf,[se(d,{evaluation:90}),se(d,{evaluation:20}),se(d,{evaluation:40})]),Kf,S("div",Ef,[se(d,{evaluation:90}),se(d,{evaluation:20}),se(d,{evaluation:40})])]),S("div",zf,[S("div",If,[S("div",Ff,[se(f)])]),S("div",Tf,[S("div",Hf,[on(Oe(a.opening.m)+" ",1),Wf,(ne(!0),ae(rn,null,dn(a.opening.a,(N,h)=>(ne(),ae("div",{key:h},[S("div",jf,Oe(N),1)]))),128)),on(" "+Oe(a.bestmove),1)])]),se(l,{class:"w-full"}),S("div",Yf,[S("div",$f,[(ne(!0),ae(rn,null,dn(a.moves,N=>(ne(),ae("div",Zf,[S("div",Uf,[S("div",Xf,[S("div",Jf,Oe(N[0]),1)]),S("div",qf,[S("div",el,Oe(N[1]),1)])])]))),256))])]),S("div",il,[S("button",tl,[S("span",{class:"material-symbols-outlined",onClick:e[0]||(e[0]=(...N)=>s.completeBack&&s.completeBack(...N))}," keyboard_double_arrow_left ")]),S("button",nl,[S("span",{class:"material-symbols-outlined",onClick:e[1]||(e[1]=(...N)=>s.backMove&&s.backMove(...N))}," chevron_left ")]),al,S("button",sl,[S("span",{class:"material-symbols-outlined",onClick:e[2]||(e[2]=(...N)=>s.moveCall&&s.moveCall(...N))}," chevron_right ")]),S("button",cl,[S("span",{class:"material-symbols-outlined",onClick:e[3]||(e[3]=(...N)=>s.completeEnd&&s.completeEnd(...N))}," keyboard_double_arrow_right ")])])])])]))}const Nl=Je(yf,[["render",ol]]);export{Nl as default};
