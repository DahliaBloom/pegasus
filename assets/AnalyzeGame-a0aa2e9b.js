import{_ as f,b as l,c,w as h,v,f as u,t as p,q as d}from"./index-75ca5652.js";const g={data(){return{fen:"",score:0,stockfish:null}},methods:{async evaluatePosition(){this.stockfish=await Stockfish(),this.stockfish.postMessage("setoption name use nnue value true"),this.stockfish.postMessage(`position fen ${this.fen}`),this.stockfish.postMessage("eval");function i(t){return new Promise(e=>{t.addMessageListener(n=>{a.push(n),n.startsWith("Final")&&e()})})}async function o(t){await i(t);var e=a[a.length-2];console.log("EVAL STRING: "+e);const s=/Final evaluation\s+([+-]?\d+\.\d+)/.exec(e);if(s&&s.length>1){const r=parseFloat(s[1]);return console.log("EVAL Number: "+r),r}}o(this.stockfish).then(t=>this.score=t);var a=[];this.stockfish.addMessageListener(t=>{a.push(t)})}}},m={key:0};function k(i,o,a,t,e,n){return l(),c("div",null,[h(u("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.fen=s),type:"text",placeholder:"Enter FEN string"},null,512),[[v,e.fen]]),u("button",{onClick:o[1]||(o[1]=(...s)=>n.evaluatePosition&&n.evaluatePosition(...s))},"Evaluate"),e.score!==0?(l(),c("div",m,"Evaluation score: "+p(e.score),1)):d("",!0)])}const E=f(g,[["render",k]]);export{E as default};
