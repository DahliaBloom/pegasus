var Stockfish = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined')
      _scriptDir = _scriptDir || __filename;
  return (function(Stockfish) {
      Stockfish = Stockfish || {};

      function e() {
          h.buffer != m && q(h.buffer);
          return aa
      }
      function v() {
          h.buffer != m && q(h.buffer);
          return ba
      }
      function w() {
          h.buffer != m && q(h.buffer);
          return ca
      }
      function x() {
          h.buffer != m && q(h.buffer);
          return da
      }
      function ea() {
          h.buffer != m && q(h.buffer);
          return fa
      }
      null;
      var A;
      A || (A = typeof Stockfish !== 'undefined' ? Stockfish : {});
      var ha, ia;
      A.ready = new Promise(function(a, b) {
          ha = a;
          ia = b
      }
      );
      A.postCustomMessage = a=>{
          for (let b of B.Sa)
              b.postMessage({
                  cmd: "custom",
                  userData: a
              })
      }
      ;
      class ja {
          constructor() {
              this.Ya = null;
              this.Ta = []
          }
          async get() {
              return 0 < this.Ta.length ? this.Ta.shift() : await new Promise(a=>this.Ya = a)
          }
          put(a) {
              this.Ya ? (this.Ya(a),
              this.Ya = null) : this.Ta.push(a)
          }
      }
      A.queue = new ja;
      A.onCustomMessage = a=>{
          A.queue.put(a)
      }
      ;
      A.postMessage = A.postCustomMessage;
      const ka = [];
      A.addMessageListener = a=>{
          ka.push(a)
      }
      ;
      A.removeMessageListener = a=>{
          a = ka.indexOf(a);
          0 <= a && ka.splice(a, 1)
      }
      ;
      A.print = A.printErr = a=>{
          if (0 === ka.length)
              console.log(a);
          else
              for (let b of ka)
                  b(a)
      }
      ;
      A.terminate = ()=>{
          B.bc()
      }
      ;
      var la = {}, C;
      for (C in A)
          A.hasOwnProperty(C) && (la[C] = A[C]);
      var ma = []
        , na = "./this.program";
      function oa(a, b) {
          throw b;
      }
      var pa = "object" === typeof window
        , E = "function" === typeof importScripts
        , F = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node
        , G = A.ENVIRONMENT_IS_PTHREAD || !1
        , H = "";
      function qa(a) {
          return A.locateFile ? A.locateFile(a, H) : H + a
      }
      var ra, sa, ta, K, L;
      if (F) {
          H = E ? require("path").dirname(H) + "/" : __dirname + "/";
          ra = function(a, b) {
              K || (K = require("fs"));
              L || (L = require("path"));
              a = L.normalize(a);
              return K.readFileSync(a, b ? null : "utf8")
          }
          ;
          ta = function(a) {
              a = ra(a, !0);
              a.buffer || (a = new Uint8Array(a));
              assert(a.buffer);
              return a
          }
          ;
          sa = function(a, b, c) {
              K || (K = require("fs"));
              L || (L = require("path"));
              a = L.normalize(a);
              K.readFile(a, function(d, f) {
                  d ? c(d) : b(f.buffer)
              })
          }
          ;
          1 < process.argv.length && (na = process.argv[1].replace(/\\/g, "/"));
          ma = process.argv.slice(2);
          process.on("uncaughtException", function(a) {
              if (!(a instanceof ua))
                  throw a;
          });
          process.on("unhandledRejection", M);
          oa = function(a, b) {
              if (va())
                  throw process.exitCode = a,
                  b;
              process.exit(a)
          }
          ;
          A.inspect = function() {
              return "[Emscripten Module object]"
          }
          ;
          var wa;
          try {
              wa = require("worker_threads")
          } catch (a) {
              throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),
              a;
          }
          global.Worker = wa.Worker
      } else if (pa || E)
          E ? H = self.location.href : "undefined" !== typeof document && document.currentScript && (H = document.currentScript.src),
          _scriptDir && (H = _scriptDir),
          0 !== H.indexOf("blob:") ? H = H.substr(0, H.lastIndexOf("/") + 1) : H = "",
          F ? (ra = function(a, b) {
              K || (K = require("fs"));
              L || (L = require("path"));
              a = L.normalize(a);
              return K.readFileSync(a, b ? null : "utf8")
          }
          ,
          ta = function(a) {
              a = ra(a, !0);
              a.buffer || (a = new Uint8Array(a));
              assert(a.buffer);
              return a
          }
          ,
          sa = function(a, b, c) {
              K || (K = require("fs"));
              L || (L = require("path"));
              a = L.normalize(a);
              K.readFile(a, function(d, f) {
                  d ? c(d) : b(f.buffer)
              })
          }
          ) : (ra = function(a) {
              var b = new XMLHttpRequest;
              b.open("GET", a, !1);
              b.send(null);
              return b.responseText
          }
          ,
          E && (ta = function(a) {
              var b = new XMLHttpRequest;
              b.open("GET", a, !1);
              b.responseType = "arraybuffer";
              b.send(null);
              return new Uint8Array(b.response)
          }
          ),
          sa = function(a, b, c) {
              var d = new XMLHttpRequest;
              d.open("GET", a, !0);
              d.responseType = "arraybuffer";
              d.onload = function() {
                  200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
              }
              ;
              d.onerror = c;
              d.send(null)
          }
          );
      F && "undefined" === typeof performance && (global.performance = require("perf_hooks").performance);
      var xa = A.print || console.log.bind(console)
        , N = A.printErr || console.warn.bind(console);
      for (C in la)
          la.hasOwnProperty(C) && (A[C] = la[C]);
      la = null;
      A.arguments && (ma = A.arguments);
      A.thisProgram && (na = A.thisProgram);
      A.quit && (oa = A.quit);
      var ya, za;
      A.wasmBinary && (za = A.wasmBinary);
      var noExitRuntime = A.noExitRuntime || !0;
      "object" !== typeof WebAssembly && M("no native wasm support detected");
      var h, Aa, Ba = !1, Ca;
      function assert(a, b) {
          a || M("Assertion failed: " + b)
      }
      function Da(a) {
          var b = new TextDecoder(a);
          this.decode = function(c) {
              c.buffer instanceof SharedArrayBuffer && (c = new Uint8Array(c));
              return b.decode.call(b, c)
          }
      }
      var Ea = "undefined" !== typeof TextDecoder ? new Da("utf8") : void 0;
      function Fa(a, b, c) {
          var d = b + c;
          for (c = b; a[c] && !(c >= d); )
              ++c;
          if (16 < c - b && a.subarray && Ea)
              return Ea.decode(a.subarray(b, c));
          for (d = ""; b < c; ) {
              var f = a[b++];
              if (f & 128) {
                  var g = a[b++] & 63;
                  if (192 == (f & 224))
                      d += String.fromCharCode((f & 31) << 6 | g);
                  else {
                      var k = a[b++] & 63;
                      f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
                      65536 > f ? d += String.fromCharCode(f) : (f -= 65536,
                      d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023))
                  }
              } else
                  d += String.fromCharCode(f)
          }
          return d
      }
      function O(a) {
          return a ? Fa(v(), a, void 0) : ""
      }
      function Ga(a, b, c, d) {
          if (!(0 < d))
              return 0;
          var f = c;
          d = c + d - 1;
          for (var g = 0; g < a.length; ++g) {
              var k = a.charCodeAt(g);
              if (55296 <= k && 57343 >= k) {
                  var p = a.charCodeAt(++g);
                  k = 65536 + ((k & 1023) << 10) | p & 1023
              }
              if (127 >= k) {
                  if (c >= d)
                      break;
                  b[c++] = k
              } else {
                  if (2047 >= k) {
                      if (c + 1 >= d)
                          break;
                      b[c++] = 192 | k >> 6
                  } else {
                      if (65535 >= k) {
                          if (c + 2 >= d)
                              break;
                          b[c++] = 224 | k >> 12
                      } else {
                          if (c + 3 >= d)
                              break;
                          b[c++] = 240 | k >> 18;
                          b[c++] = 128 | k >> 12 & 63
                      }
                      b[c++] = 128 | k >> 6 & 63
                  }
                  b[c++] = 128 | k & 63
              }
          }
          b[c] = 0;
          return c - f
      }
      function Ha(a) {
          for (var b = 0, c = 0; c < a.length; ++c) {
              var d = a.charCodeAt(c);
              55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
              127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
          }
          return b
      }
      "undefined" !== typeof TextDecoder && new Da("utf-16le");
      function Ia(a) {
          var b = Ha(a) + 1
            , c = Ja(b);
          Ga(a, e(), c, b);
          return c
      }
      function Ka(a, b) {
          e().set(a, b)
      }
      var m, aa, ba, La, ca, da, fa;
      G && (m = A.buffer);
      function q(a) {
          m = a;
          A.HEAP8 = aa = new Int8Array(a);
          A.HEAP16 = La = new Int16Array(a);
          A.HEAP32 = ca = new Int32Array(a);
          A.HEAPU8 = ba = new Uint8Array(a);
          A.HEAPU16 = new Uint16Array(a);
          A.HEAPU32 = da = new Uint32Array(a);
          A.HEAPF32 = new Float32Array(a);
          A.HEAPF64 = fa = new Float64Array(a)
      }
      var Ma = A.INITIAL_MEMORY || 134217728;
      if (G)
          h = A.wasmMemory,
          m = A.buffer;
      else if (A.wasmMemory)
          h = A.wasmMemory;
      else if (h = new WebAssembly.Memory({
          initial: Ma / 65536,
          maximum: 32768,
          shared: !0
      }),
      !(h.buffer instanceof SharedArrayBuffer))
          throw N("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),
          F && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),
          Error("bad memory");
      h && (m = h.buffer);
      Ma = m.byteLength;
      q(m);
      var Na = []
        , Oa = []
        , Pa = []
        , Qa = []
        , Ra = 0;
      function va() {
          return noExitRuntime || 0 < Ra
      }
      function Sa() {
          G || (A.noFSInit || P.nb.Rb || P.nb(),
          P.xc = !1,
          Ta(Oa))
      }
      function Ua() {
          var a = A.preRun.shift();
          Na.unshift(a)
      }
      var Va = 0
        , Wa = null
        , Xa = null;
      function Ya() {
          Va++;
          A.monitorRunDependencies && A.monitorRunDependencies(Va)
      }
      function Za() {
          Va--;
          A.monitorRunDependencies && A.monitorRunDependencies(Va);
          if (0 == Va && (null !== Wa && (clearInterval(Wa),
          Wa = null),
          Xa)) {
              var a = Xa;
              Xa = null;
              a()
          }
      }
      A.preloadedImages = {};
      A.preloadedAudios = {};
      function M(a) {
          if (A.onAbort)
              A.onAbort(a);
          assert(!G);
          N(a);
          Ba = !0;
          Ca = 1;
          a = new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
          ia(a);
          throw a;
      }
      function $a() {
          return Q.startsWith("data:application/octet-stream;base64,")
      }
      var Q;
      Q = "stockfish.wasm";
      $a() || (Q = qa(Q));
      function ab() {
          var a = Q;
          try {
              if (a == Q && za)
                  return new Uint8Array(za);
              if (ta)
                  return ta(a);
              throw "both async and sync fetching of the wasm failed";
          } catch (b) {
              M(b)
          }
      }
      function bb() {
          return za || !pa && !E || "function" !== typeof fetch ? Promise.resolve().then(function() {
              return ab()
          }) : fetch(Q, {
              credentials: "same-origin"
          }).then(function(a) {
              if (!a.ok)
                  throw "failed to load wasm binary file at '" + Q + "'";
              return a.arrayBuffer()
          }).catch(function() {
              return ab()
          })
      }
      var R, T, cb = {
          12066091: function() {
              throw "Canceled!";
          }
      };
      function Ta(a) {
          for (; 0 < a.length; ) {
              var b = a.shift();
              if ("function" == typeof b)
                  b(A);
              else {
                  var c = b.rc;
                  "number" === typeof c ? void 0 === b.mb ? dynCall_v.call(null, c) : dynCall_vi.apply(null, [c, b.mb]) : c(void 0 === b.mb ? null : b.mb)
              }
          }
      }
      function db(a, b) {
          if (0 >= a || a > e().length || a & 1 || 0 > b)
              return -28;
          if (0 == b)
              return 0;
          2147483647 <= b && (b = Infinity);
          var c = Atomics.load(w(), eb >> 2)
            , d = 0;
          if (c == a && Atomics.compareExchange(w(), eb >> 2, c, 0) == c && (--b,
          d = 1,
          0 >= b))
              return 1;
          a = Atomics.notify(w(), a >> 2, b);
          if (0 <= a)
              return a + d;
          throw "Atomics.notify returned an unexpected value " + a;
      }
      A._emscripten_futex_wake = db;
      function fb(a) {
          if (G)
              throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
          if (!a)
              throw "Internal Error! Null pthread_ptr in cleanupThread!";
          var b = B.Ja[a];
          b && (w()[a + 12 >> 2] = 0,
          B.Bb(b.worker))
      }
      var B = {
          Wa: [],
          Sa: [],
          dc: [],
          Zd: function() {},
          ed: function() {
              for (var a = U(228), b = 0; 57 > b; ++b)
                  x()[a / 4 + b] = 0;
              w()[a + 12 >> 2] = a;
              b = a + 152;
              w()[b >> 2] = b;
              var c = U(512);
              for (b = 0; 128 > b; ++b)
                  x()[c / 4 + b] = 0;
              Atomics.store(x(), a + 100 >> 2, c);
              Atomics.store(x(), a + 40 >> 2, a);
              gb(a, !E, 1);
              hb(a)
          },
          gd: function() {
              B.receiveObjectTransfer = B.yd;
              B.threadInit = B.Gd;
              B.threadCancel = B.Fd;
              B.threadExit = B.Ec;
              B.setExitStatus = B.Cd
          },
          Ja: {},
          cc: [],
          Bc: function() {
              for (; 0 < B.cc.length; )
                  B.cc.pop()();
              ib()
          },
          Cc: function(a, b) {
              Atomics.store(x(), a + 56 >> 2, 1);
              Atomics.store(x(), a + 60 >> 2, 0);
              B.Bc();
              Atomics.store(x(), a + 4 >> 2, b);
              Atomics.store(x(), a + 0 >> 2, 1);
              db(a + 0, 2147483647);
              gb(0, 0, 0)
          },
          Cd: function(a) {
              Ca = a
          },
          Ec: function(a) {
              var b = jb();
              b && (B.Cc(b, a),
              G && postMessage({
                  cmd: "exit"
              }))
          },
          Fd: function() {
              B.Cc(jb(), -1);
              postMessage({
                  cmd: "cancelDone"
              })
          },
          bc: function() {
              for (var a in B.Ja) {
                  var b = B.Ja[a];
                  b && b.worker && B.Bb(b.worker)
              }
              B.Ja = {};
              for (a = 0; a < B.Wa.length; ++a) {
                  var c = B.Wa[a];
                  c.terminate()
              }
              B.Wa = [];
              for (a = 0; a < B.Sa.length; ++a)
                  c = B.Sa[a],
                  b = c.Ia,
                  B.Mb(b),
                  c.terminate();
              B.Sa = []
          },
          Mb: function(a) {
              if (a) {
                  if (a.Pa) {
                      var b = w()[a.Pa + 100 >> 2];
                      w()[a.Pa + 100 >> 2] = 0;
                      kb(b);
                      kb(a.Pa)
                  }
                  a.Pa = 0;
                  a.Ib && a.cb && kb(a.cb);
                  a.cb = 0;
                  a.worker && (a.worker.Ia = null)
              }
          },
          Bb: function(a) {
              B.Ad(function() {
                  delete B.Ja[a.Ia.Pa];
                  B.Wa.push(a);
                  B.Sa.splice(B.Sa.indexOf(a), 1);
                  B.Mb(a.Ia);
                  a.Ia = void 0
              })
          },
          Ad: function(a) {
              w()[lb >> 2] = 0;
              try {
                  a()
              } finally {
                  w()[lb >> 2] = 1
              }
          },
          yd: function() {},
          Gd: function() {
              for (var a in B.dc)
                  B.dc[a]()
          },
          ld: function(a, b) {
              a.onmessage = function(c) {
                  var d = c.data
                    , f = d.cmd;
                  a.Ia && (B.Xc = a.Ia.Pa);
                  if (d.targetThread && d.targetThread != jb()) {
                      var g = B.Ja[d.ke];
                      g ? g.worker.postMessage(c.data, d.transferList) : N('Internal error! Worker sent a message "' + f + '" to target pthread ' + d.targetThread + ", but that thread no longer exists!")
                  } else if ("processQueuedMainThreadWork" === f)
                      mb();
                  else if ("spawnThread" === f)
                      nb(c.data);
                  else if ("cleanupThread" === f)
                      fb(d.thread);
                  else if ("killThread" === f) {
                      c = d.thread;
                      if (G)
                          throw "Internal Error! killThread() can only ever be called from main application thread!";
                      if (!c)
                          throw "Internal Error! Null pthread_ptr in killThread!";
                      w()[c + 12 >> 2] = 0;
                      d = B.Ja[c];
                      delete B.Ja[c];
                      d.worker.terminate();
                      B.Mb(d);
                      B.Sa.splice(B.Sa.indexOf(d.worker), 1);
                      d.worker.Ia = void 0
                  } else if ("cancelThread" === f) {
                      c = d.thread;
                      if (G)
                          throw "Internal Error! cancelThread() can only ever be called from main application thread!";
                      if (!c)
                          throw "Internal Error! Null pthread_ptr in cancelThread!";
                      B.Ja[c].worker.postMessage({
                          cmd: "cancel"
                      })
                  } else if ("loaded" === f)
                      a.loaded = !0,
                      b && b(a),
                      a.rb && (a.rb(),
                      delete a.rb);
                  else if ("print" === f)
                      xa("Thread " + d.threadId + ": " + d.text);
                  else if ("printErr" === f)
                      N("Thread " + d.threadId + ": " + d.text);
                  else if ("alert" === f)
                      alert("Thread " + d.threadId + ": " + d.text);
                  else if ("exit" === f)
                      a.Ia && Atomics.load(x(), a.Ia.Pa + 64 >> 2) && B.Bb(a);
                  else if ("exitProcess" === f)
                      try {
                          ob(d.returnCode)
                      } catch (k) {
                          if (k instanceof ua)
                              return;
                          throw k;
                      }
                  else
                      "cancelDone" === f ? B.Bb(a) : "objectTransfer" !== f && ("setimmediate" === c.data.target ? a.postMessage(c.data) : N("worker sent an unknown command " + f));
                  B.Xc = void 0
              }
              ;
              a.onerror = function(c) {
                  N("pthread sent an error! " + c.filename + ":" + c.lineno + ": " + c.message)
              }
              ;
              F && (a.on("message", function(c) {
                  a.onmessage({
                      data: c
                  })
              }),
              a.on("error", function(c) {
                  a.onerror(c)
              }),
              a.on("exit", function() {}));
              a.postMessage({
                  cmd: "load",
                  urlOrBlob: A.mainScriptUrlOrBlob || _scriptDir,
                  wasmMemory: h,
                  wasmModule: Aa
              })
          },
          Mc: function() {
              var a = qa("stockfish.worker.js");
              B.Wa.push(new Worker(a))
          },
          cd: function() {
              0 == B.Wa.length && (B.Mc(),
              B.ld(B.Wa[0]));
              return B.Wa.pop()
          },
          Od: function(a) {
              for (a = performance.now() + a; performance.now() < a; )
                  ;
          }
      };
      A.establishStackSpace = function(a, b) {
          pb(a, b);
          qb(a)
      }
      ;
      A.invokeEntryPoint = function(a, b) {
          return rb.apply(null, [a, b])
      }
      ;
      var sb;
      sb = F ? function() {
          var a = process.hrtime();
          return 1E3 * a[0] + a[1] / 1E6
      }
      : G ? function() {
          return performance.now() - A.__performance_now_clock_drift
      }
      : function() {
          return performance.now()
      }
      ;
      function nb(a) {
          if (G)
              throw "Internal Error! spawnThread() can only ever be called from main application thread!";
          var b = B.cd();
          if (!b)
              return 6;
          if (void 0 !== b.Ia)
              throw "Internal error!";
          if (!a.Ab)
              throw "Internal error, no pthread ptr!";
          B.Sa.push(b);
          for (var c = U(512), d = 0; 128 > d; ++d)
              w()[c + 4 * d >> 2] = 0;
          var f = a.cb + a.ib;
          d = B.Ja[a.Ab] = {
              worker: b,
              cb: a.cb,
              ib: a.ib,
              Ib: a.Ib,
              Pa: a.Ab
          };
          var g = d.Pa >> 2;
          Atomics.store(x(), g + 16, a.detached);
          Atomics.store(x(), g + 25, c);
          Atomics.store(x(), g + 10, d.Pa);
          Atomics.store(x(), g + 20, a.ib);
          Atomics.store(x(), g + 19, f);
          Atomics.store(x(), g + 26, a.ib);
          Atomics.store(x(), g + 28, f);
          Atomics.store(x(), g + 29, a.detached);
          c = tb() + 40;
          Atomics.store(x(), g + 43, c);
          b.Ia = d;
          var k = {
              cmd: "run",
              start_routine: a.Dd,
              arg: a.mb,
              threadInfoStruct: a.Ab,
              stackBase: a.cb,
              stackSize: a.ib
          };
          b.rb = function() {
              k.time = performance.now();
              b.postMessage(k, a.Ld)
          }
          ;
          b.loaded && (b.rb(),
          delete b.rb);
          return 0
      }
      function ub(a, b, c) {
          if (0 >= a || a > e().length || a & 1)
              return -28;
          if (pa) {
              if (Atomics.load(w(), a >> 2) != b)
                  return -6;
              var d = performance.now();
              c = d + c;
              for (Atomics.exchange(w(), eb >> 2, a); ; ) {
                  d = performance.now();
                  if (d > c)
                      return Atomics.exchange(w(), eb >> 2, 0),
                      -73;
                  d = Atomics.exchange(w(), eb >> 2, 0);
                  if (0 == d)
                      break;
                  mb();
                  if (Atomics.load(w(), a >> 2) != b)
                      return -6;
                  Atomics.exchange(w(), eb >> 2, a)
              }
              return 0
          }
          a = Atomics.wait(w(), a >> 2, b, c);
          if ("timed-out" === a)
              return -73;
          if ("not-equal" === a)
              return -6;
          if ("ok" === a)
              return 0;
          throw "Atomics.wait returned an unexpected value " + a;
      }
      function vb() {
          F || E || (ya || (ya = {}),
          ya["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] || (ya["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] = 1,
          N("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))
      }
      function wb(a, b) {
          if (!a)
              return N("pthread_join attempted on a null thread pointer!"),
              71;
          if (G && jb() == a)
              return N("PThread " + a + " is attempting to join to itself!"),
              16;
          if (!G && xb() == a)
              return N("Main thread " + a + " is attempting to join to itself!"),
              16;
          if (w()[a + 12 >> 2] !== a)
              return N("pthread_join attempted on thread " + a + ", which does not point to a valid thread, or does not exist anymore!"),
              71;
          if (Atomics.load(x(), a + 64 >> 2))
              return N("Attempted to join thread " + a + ", which was already detached!"),
              28;
          for (vb(); ; ) {
              var c = Atomics.load(x(), a + 0 >> 2);
              if (1 == c)
                  return c = Atomics.load(x(), a + 4 >> 2),
                  b && (w()[b >> 2] = c),
                  Atomics.store(x(), a + 64 >> 2, 1),
                  G ? postMessage({
                      cmd: "cleanupThread",
                      thread: a
                  }) : fb(a),
                  0;
              yb();
              G || mb();
              ub(a + 0, c, G ? 100 : 1)
          }
      }
      function zb(a, b) {
          for (var c = 0, d = a.length - 1; 0 <= d; d--) {
              var f = a[d];
              "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1),
              c++) : c && (a.splice(d, 1),
              c--)
          }
          if (b)
              for (; c; c--)
                  a.unshift("..");
          return a
      }
      function Ab(a) {
          var b = "/" === a.charAt(0)
            , c = "/" === a.substr(-1);
          (a = zb(a.split("/").filter(function(d) {
              return !!d
          }), !b).join("/")) || b || (a = ".");
          a && c && (a += "/");
          return (b ? "/" : "") + a
      }
      function Bb(a) {
          var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
          a = b[0];
          b = b[1];
          if (!a && !b)
              return ".";
          b && (b = b.substr(0, b.length - 1));
          return a + b
      }
      function V(a) {
          if ("/" === a)
              return "/";
          a = Ab(a);
          a = a.replace(/\/$/, "");
          var b = a.lastIndexOf("/");
          return -1 === b ? a : a.substr(b + 1)
      }
      function Cb(a, b) {
          return Ab(a + "/" + b)
      }
      function Db() {
          if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
              var a = new Uint8Array(1);
              return function() {
                  crypto.getRandomValues(a);
                  return a[0]
              }
          }
          if (F)
              try {
                  var b = require("crypto");
                  return function() {
                      return b.randomBytes(1)[0]
                  }
              } catch (c) {}
          return function() {
              M("randomDevice")
          }
      }
      function Eb() {
          for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
              b = 0 <= c ? arguments[c] : P.cwd();
              if ("string" !== typeof b)
                  throw new TypeError("Arguments to path.resolve must be strings");
              if (!b)
                  return "";
              a = b + "/" + a;
              b = "/" === b.charAt(0)
          }
          a = zb(a.split("/").filter(function(d) {
              return !!d
          }), !b).join("/");
          return (b ? "/" : "") + a || "."
      }
      function Fb(a, b) {
          function c(k) {
              for (var p = 0; p < k.length && "" === k[p]; p++)
                  ;
              for (var t = k.length - 1; 0 <= t && "" === k[t]; t--)
                  ;
              return p > t ? [] : k.slice(p, t - p + 1)
          }
          a = Eb(a).substr(1);
          b = Eb(b).substr(1);
          a = c(a.split("/"));
          b = c(b.split("/"));
          for (var d = Math.min(a.length, b.length), f = d, g = 0; g < d; g++)
              if (a[g] !== b[g]) {
                  f = g;
                  break
              }
          d = [];
          for (g = f; g < a.length; g++)
              d.push("..");
          d = d.concat(b.slice(f));
          return d.join("/")
      }
      var Gb = [];
      function Hb(a, b) {
          Gb[a] = {
              input: [],
              output: [],
              hb: b
          };
          P.ac(a, Ib)
      }
      var Ib = {
          open: function(a) {
              var b = Gb[a.node.rdev];
              if (!b)
                  throw new P.W(43);
              a.tty = b;
              a.seekable = !1
          },
          close: function(a) {
              a.tty.hb.flush(a.tty)
          },
          flush: function(a) {
              a.tty.hb.flush(a.tty)
          },
          read: function(a, b, c, d) {
              if (!a.tty || !a.tty.hb.uc)
                  throw new P.W(60);
              for (var f = 0, g = 0; g < d; g++) {
                  try {
                      var k = a.tty.hb.uc(a.tty)
                  } catch (p) {
                      throw new P.W(29);
                  }
                  if (void 0 === k && 0 === f)
                      throw new P.W(6);
                  if (null === k || void 0 === k)
                      break;
                  f++;
                  b[c + g] = k
              }
              f && (a.node.timestamp = Date.now());
              return f
          },
          write: function(a, b, c, d) {
              if (!a.tty || !a.tty.hb.Yb)
                  throw new P.W(60);
              try {
                  for (var f = 0; f < d; f++)
                      a.tty.hb.Yb(a.tty, b[c + f])
              } catch (g) {
                  throw new P.W(29);
              }
              d && (a.node.timestamp = Date.now());
              return f
          }
      }
        , Kb = {
          uc: function(a) {
              if (!a.input.length) {
                  var b = null;
                  if (F) {
                      var c = Buffer.alloc(256)
                        , d = 0;
                      try {
                          d = K.readSync(process.stdin.fd, c, 0, 256, null)
                      } catch (f) {
                          if (f.toString().includes("EOF"))
                              d = 0;
                          else
                              throw f;
                      }
                      0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
                  } else
                      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                      null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(),
                      null !== b && (b += "\n"));
                  if (!b)
                      return null;
                  a.input = Jb(b, !0)
              }
              return a.input.shift()
          },
          Yb: function(a, b) {
              null === b || 10 === b ? (xa(Fa(a.output, 0)),
              a.output = []) : 0 != b && a.output.push(b)
          },
          flush: function(a) {
              a.output && 0 < a.output.length && (xa(Fa(a.output, 0)),
              a.output = [])
          }
      }
        , Lb = {
          Yb: function(a, b) {
              null === b || 10 === b ? (N(Fa(a.output, 0)),
              a.output = []) : 0 != b && a.output.push(b)
          },
          flush: function(a) {
              a.output && 0 < a.output.length && (N(Fa(a.output, 0)),
              a.output = [])
          }
      };
      function Mb(a) {
          a = 65536 * Math.ceil(a / 65536);
          var b = Nb(65536, a);
          if (!b)
              return 0;
          v().fill(0, b, b + a);
          return b
      }
      var W = {
          Oa: null,
          Ca: function() {
              return W.createNode(null, "/", 16895, 0)
          },
          createNode: function(a, b, c, d) {
              if (P.hd(c) || P.isFIFO(c))
                  throw new P.W(63);
              W.Oa || (W.Oa = {
                  dir: {
                      node: {
                          La: W.xa.La,
                          Ga: W.xa.Ga,
                          lookup: W.xa.lookup,
                          Ra: W.xa.Ra,
                          rename: W.xa.rename,
                          unlink: W.xa.unlink,
                          rmdir: W.xa.rmdir,
                          readdir: W.xa.readdir,
                          symlink: W.xa.symlink
                      },
                      stream: {
                          Ma: W.za.Ma
                      }
                  },
                  file: {
                      node: {
                          La: W.xa.La,
                          Ga: W.xa.Ga
                      },
                      stream: {
                          Ma: W.za.Ma,
                          read: W.za.read,
                          write: W.za.write,
                          lb: W.za.lb,
                          fb: W.za.fb,
                          gb: W.za.gb
                      }
                  },
                  link: {
                      node: {
                          La: W.xa.La,
                          Ga: W.xa.Ga,
                          readlink: W.xa.readlink
                      },
                      stream: {}
                  },
                  ic: {
                      node: {
                          La: W.xa.La,
                          Ga: W.xa.Ga
                      },
                      stream: P.Pc
                  }
              });
              c = P.createNode(a, b, c, d);
              P.Da(c.mode) ? (c.xa = W.Oa.dir.node,
              c.za = W.Oa.dir.stream,
              c.ya = {}) : P.isFile(c.mode) ? (c.xa = W.Oa.file.node,
              c.za = W.Oa.file.stream,
              c.Ba = 0,
              c.ya = null) : P.eb(c.mode) ? (c.xa = W.Oa.link.node,
              c.za = W.Oa.link.stream) : P.wb(c.mode) && (c.xa = W.Oa.ic.node,
              c.za = W.Oa.ic.stream);
              c.timestamp = Date.now();
              a && (a.ya[b] = c,
              a.timestamp = c.timestamp);
              return c
          },
          Xd: function(a) {
              return a.ya ? a.ya.subarray ? a.ya.subarray(0, a.Ba) : new Uint8Array(a.ya) : new Uint8Array(0)
          },
          oc: function(a, b) {
              var c = a.ya ? a.ya.length : 0;
              c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
              0 != c && (b = Math.max(b, 256)),
              c = a.ya,
              a.ya = new Uint8Array(b),
              0 < a.Ba && a.ya.set(c.subarray(0, a.Ba), 0))
          },
          zd: function(a, b) {
              if (a.Ba != b)
                  if (0 == b)
                      a.ya = null,
                      a.Ba = 0;
                  else {
                      var c = a.ya;
                      a.ya = new Uint8Array(b);
                      c && a.ya.set(c.subarray(0, Math.min(b, a.Ba)));
                      a.Ba = b
                  }
          },
          xa: {
              La: function(a) {
                  var b = {};
                  b.dev = P.wb(a.mode) ? a.id : 1;
                  b.ino = a.id;
                  b.mode = a.mode;
                  b.nlink = 1;
                  b.uid = 0;
                  b.gid = 0;
                  b.rdev = a.rdev;
                  P.Da(a.mode) ? b.size = 4096 : P.isFile(a.mode) ? b.size = a.Ba : P.eb(a.mode) ? b.size = a.link.length : b.size = 0;
                  b.atime = new Date(a.timestamp);
                  b.mtime = new Date(a.timestamp);
                  b.ctime = new Date(a.timestamp);
                  b.Nc = 4096;
                  b.blocks = Math.ceil(b.size / b.Nc);
                  return b
              },
              Ga: function(a, b) {
                  void 0 !== b.mode && (a.mode = b.mode);
                  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                  void 0 !== b.size && W.zd(a, b.size)
              },
              lookup: function() {
                  throw P.Nb[44];
              },
              Ra: function(a, b, c, d) {
                  return W.createNode(a, b, c, d)
              },
              rename: function(a, b, c) {
                  if (P.Da(a.mode)) {
                      try {
                          var d = P.Qa(b, c)
                      } catch (g) {}
                      if (d)
                          for (var f in d.ya)
                              throw new P.W(55);
                  }
                  delete a.parent.ya[a.name];
                  a.parent.timestamp = Date.now();
                  a.name = c;
                  b.ya[c] = a;
                  b.timestamp = a.parent.timestamp;
                  a.parent = b
              },
              unlink: function(a, b) {
                  delete a.ya[b];
                  a.timestamp = Date.now()
              },
              rmdir: function(a, b) {
                  var c = P.Qa(a, b), d;
                  for (d in c.ya)
                      throw new P.W(55);
                  delete a.ya[b];
                  a.timestamp = Date.now()
              },
              readdir: function(a) {
                  var b = [".", ".."], c;
                  for (c in a.ya)
                      a.ya.hasOwnProperty(c) && b.push(c);
                  return b
              },
              symlink: function(a, b, c) {
                  a = W.createNode(a, b, 41471, 0);
                  a.link = c;
                  return a
              },
              readlink: function(a) {
                  if (!P.eb(a.mode))
                      throw new P.W(28);
                  return a.link
              }
          },
          za: {
              read: function(a, b, c, d, f) {
                  var g = a.node.ya;
                  if (f >= a.node.Ba)
                      return 0;
                  a = Math.min(a.node.Ba - f, d);
                  if (8 < a && g.subarray)
                      b.set(g.subarray(f, f + a), c);
                  else
                      for (d = 0; d < a; d++)
                          b[c + d] = g[f + d];
                  return a
              },
              write: function(a, b, c, d, f, g) {
                  b.buffer === e().buffer && (g = !1);
                  if (!d)
                      return 0;
                  a = a.node;
                  a.timestamp = Date.now();
                  if (b.subarray && (!a.ya || a.ya.subarray)) {
                      if (g)
                          return a.ya = b.subarray(c, c + d),
                          a.Ba = d;
                      if (0 === a.Ba && 0 === f)
                          return a.ya = b.slice(c, c + d),
                          a.Ba = d;
                      if (f + d <= a.Ba)
                          return a.ya.set(b.subarray(c, c + d), f),
                          d
                  }
                  W.oc(a, f + d);
                  if (a.ya.subarray && b.subarray)
                      a.ya.set(b.subarray(c, c + d), f);
                  else
                      for (g = 0; g < d; g++)
                          a.ya[f + g] = b[c + g];
                  a.Ba = Math.max(a.Ba, f + d);
                  return d
              },
              Ma: function(a, b, c) {
                  1 === c ? b += a.position : 2 === c && P.isFile(a.node.mode) && (b += a.node.Ba);
                  if (0 > b)
                      throw new P.W(28);
                  return b
              },
              lb: function(a, b, c) {
                  W.oc(a.node, b + c);
                  a.node.Ba = Math.max(a.node.Ba, b + c)
              },
              fb: function(a, b, c, d, f, g) {
                  if (0 !== b)
                      throw new P.W(28);
                  if (!P.isFile(a.node.mode))
                      throw new P.W(43);
                  a = a.node.ya;
                  if (g & 2 || a.buffer !== m) {
                      if (0 < d || d + c < a.length)
                          a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                      d = !0;
                      c = Mb(c);
                      if (!c)
                          throw new P.W(48);
                      e().set(a, c)
                  } else
                      d = !1,
                      c = a.byteOffset;
                  return {
                      xd: c,
                      Hb: d
                  }
              },
              gb: function(a, b, c, d, f) {
                  if (!P.isFile(a.node.mode))
                      throw new P.W(43);
                  if (f & 2)
                      return 0;
                  W.za.write(a, b, 0, d, c, !1);
                  return 0
              }
          }
      };
      function Ob(a, b, c) {
          var d = "al " + a;
          sa(a, function(f) {
              assert(f, 'Loading data file "' + a + '" failed (no arrayBuffer).');
              b(new Uint8Array(f));
              d && Za()
          }, function() {
              if (c)
                  c();
              else
                  throw 'Loading data file "' + a + '" failed.';
          });
          d && Ya()
      }
      var P = {
          root: null,
          qb: [],
          lc: {},
          streams: [],
          rd: 1,
          Na: null,
          kc: "/",
          Rb: !1,
          xc: !0,
          Ea: {},
          Fc: {
              Ac: {
                  Ic: 1,
                  Jc: 2
              }
          },
          W: null,
          Nb: {},
          $c: null,
          Cb: 0,
          Aa: function(a, b) {
              a = Eb(P.cwd(), a);
              b = b || {};
              if (!a)
                  return {
                      path: "",
                      node: null
                  };
              var c = {
                  Lb: !0,
                  $b: 0
              }, d;
              for (d in c)
                  void 0 === b[d] && (b[d] = c[d]);
              if (8 < b.$b)
                  throw new P.W(32);
              a = zb(a.split("/").filter(function(k) {
                  return !!k
              }), !1);
              var f = P.root;
              c = "/";
              for (d = 0; d < a.length; d++) {
                  var g = d === a.length - 1;
                  if (g && b.parent)
                      break;
                  f = P.Qa(f, a[d]);
                  c = Cb(c, a[d]);
                  P.Za(f) && (!g || g && b.Lb) && (f = f.pb.root);
                  if (!g || b.Ka)
                      for (g = 0; P.eb(f.mode); )
                          if (f = P.readlink(c),
                          c = Eb(Bb(c), f),
                          f = P.Aa(c, {
                              $b: b.$b
                          }).node,
                          40 < g++)
                              throw new P.W(32);
              }
              return {
                  path: c,
                  node: f
              }
          },
          Va: function(a) {
              for (var b; ; ) {
                  if (P.xb(a))
                      return a = a.Ca.yc,
                      b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
                  b = b ? a.name + "/" + b : a.name;
                  a = a.parent
              }
          },
          Qb: function(a, b) {
              for (var c = 0, d = 0; d < b.length; d++)
                  c = (c << 5) - c + b.charCodeAt(d) | 0;
              return (a + c >>> 0) % P.Na.length
          },
          vc: function(a) {
              var b = P.Qb(a.parent.id, a.name);
              a.ab = P.Na[b];
              P.Na[b] = a
          },
          wc: function(a) {
              var b = P.Qb(a.parent.id, a.name);
              if (P.Na[b] === a)
                  P.Na[b] = a.ab;
              else
                  for (b = P.Na[b]; b; ) {
                      if (b.ab === a) {
                          b.ab = a.ab;
                          break
                      }
                      b = b.ab
                  }
          },
          Qa: function(a, b) {
              var c = P.od(a);
              if (c)
                  throw new P.W(c,a);
              for (c = P.Na[P.Qb(a.id, b)]; c; c = c.ab) {
                  var d = c.name;
                  if (c.parent.id === a.id && d === b)
                      return c
              }
              return P.lookup(a, b)
          },
          createNode: function(a, b, c, d) {
              a = new P.Gc(a,b,c,d);
              P.vc(a);
              return a
          },
          Kb: function(a) {
              P.wc(a)
          },
          xb: function(a) {
              return a === a.parent
          },
          Za: function(a) {
              return !!a.pb
          },
          isFile: function(a) {
              return 32768 === (a & 61440)
          },
          Da: function(a) {
              return 16384 === (a & 61440)
          },
          eb: function(a) {
              return 40960 === (a & 61440)
          },
          wb: function(a) {
              return 8192 === (a & 61440)
          },
          hd: function(a) {
              return 24576 === (a & 61440)
          },
          isFIFO: function(a) {
              return 4096 === (a & 61440)
          },
          isSocket: function(a) {
              return 49152 === (a & 49152)
          },
          ad: {
              r: 0,
              "r+": 2,
              w: 577,
              "w+": 578,
              a: 1089,
              "a+": 1090
          },
          qd: function(a) {
              var b = P.ad[a];
              if ("undefined" === typeof b)
                  throw Error("Unknown file open mode: " + a);
              return b
          },
          pc: function(a) {
              var b = ["r", "w", "rw"][a & 3];
              a & 512 && (b += "w");
              return b
          },
          bb: function(a, b) {
              if (P.xc)
                  return 0;
              if (!b.includes("r") || a.mode & 292) {
                  if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
                      return 2
              } else
                  return 2;
              return 0
          },
          od: function(a) {
              var b = P.bb(a, "x");
              return b ? b : a.xa.lookup ? 0 : 2
          },
          Xb: function(a, b) {
              try {
                  return P.Qa(a, b),
                  20
              } catch (c) {}
              return P.bb(a, "wx")
          },
          yb: function(a, b, c) {
              try {
                  var d = P.Qa(a, b)
              } catch (f) {
                  return f.Fa
              }
              if (a = P.bb(a, "wx"))
                  return a;
              if (c) {
                  if (!P.Da(d.mode))
                      return 54;
                  if (P.xb(d) || P.Va(d) === P.cwd())
                      return 10
              } else if (P.Da(d.mode))
                  return 31;
              return 0
          },
          pd: function(a, b) {
              return a ? P.eb(a.mode) ? 32 : P.Da(a.mode) && ("r" !== P.pc(b) || b & 512) ? 31 : P.bb(a, P.pc(b)) : 44
          },
          Hc: 4096,
          sd: function(a, b) {
              b = b || P.Hc;
              for (a = a || 0; a <= b; a++)
                  if (!P.streams[a])
                      return a;
              throw new P.W(33);
          },
          Xa: function(a) {
              return P.streams[a]
          },
          Wc: function(a, b, c) {
              P.Gb || (P.Gb = function() {}
              ,
              P.Gb.prototype = {
                  object: {
                      get: function() {
                          return this.node
                      },
                      set: function(g) {
                          this.node = g
                      }
                  }
              });
              var d = new P.Gb, f;
              for (f in a)
                  d[f] = a[f];
              a = d;
              b = P.sd(b, c);
              a.fd = b;
              return P.streams[b] = a
          },
          Qc: function(a) {
              P.streams[a] = null
          },
          Pc: {
              open: function(a) {
                  a.za = P.bd(a.node.rdev).za;
                  a.za.open && a.za.open(a)
              },
              Ma: function() {
                  throw new P.W(70);
              }
          },
          Wb: function(a) {
              return a >> 8
          },
          ae: function(a) {
              return a & 255
          },
          $a: function(a, b) {
              return a << 8 | b
          },
          ac: function(a, b) {
              P.lc[a] = {
                  za: b
              }
          },
          bd: function(a) {
              return P.lc[a]
          },
          tc: function(a) {
              var b = [];
              for (a = [a]; a.length; ) {
                  var c = a.pop();
                  b.push(c);
                  a.push.apply(a, c.qb)
              }
              return b
          },
          Dc: function(a, b) {
              function c(k) {
                  P.Cb--;
                  return b(k)
              }
              function d(k) {
                  if (k) {
                      if (!d.Yc)
                          return d.Yc = !0,
                          c(k)
                  } else
                      ++g >= f.length && c(null)
              }
              "function" === typeof a && (b = a,
              a = !1);
              P.Cb++;
              1 < P.Cb && N("warning: " + P.Cb + " FS.syncfs operations in flight at once, probably just doing extra work");
              var f = P.tc(P.root.Ca)
                , g = 0;
              f.forEach(function(k) {
                  if (!k.type.Dc)
                      return d(null);
                  k.type.Dc(k, a, d)
              })
          },
          Ca: function(a, b, c) {
              var d = "/" === c
                , f = !c;
              if (d && P.root)
                  throw new P.W(10);
              if (!d && !f) {
                  var g = P.Aa(c, {
                      Lb: !1
                  });
                  c = g.path;
                  g = g.node;
                  if (P.Za(g))
                      throw new P.W(10);
                  if (!P.Da(g.mode))
                      throw new P.W(54);
              }
              b = {
                  type: a,
                  fe: b,
                  yc: c,
                  qb: []
              };
              a = a.Ca(b);
              a.Ca = b;
              b.root = a;
              d ? P.root = a : g && (g.pb = b,
              g.Ca && g.Ca.qb.push(b));
              return a
          },
          ne: function(a) {
              a = P.Aa(a, {
                  Lb: !1
              });
              if (!P.Za(a.node))
                  throw new P.W(28);
              a = a.node;
              var b = a.pb
                , c = P.tc(b);
              Object.keys(P.Na).forEach(function(d) {
                  for (d = P.Na[d]; d; ) {
                      var f = d.ab;
                      c.includes(d.Ca) && P.Kb(d);
                      d = f
                  }
              });
              a.pb = null;
              a.Ca.qb.splice(a.Ca.qb.indexOf(b), 1)
          },
          lookup: function(a, b) {
              return a.xa.lookup(a, b)
          },
          Ra: function(a, b, c) {
              var d = P.Aa(a, {
                  parent: !0
              }).node;
              a = V(a);
              if (!a || "." === a || ".." === a)
                  throw new P.W(28);
              var f = P.Xb(d, a);
              if (f)
                  throw new P.W(f);
              if (!d.xa.Ra)
                  throw new P.W(63);
              return d.xa.Ra(d, a, b, c)
          },
          create: function(a, b) {
              return P.Ra(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0)
          },
          mkdir: function(a, b) {
              return P.Ra(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0)
          },
          ce: function(a, b) {
              a = a.split("/");
              for (var c = "", d = 0; d < a.length; ++d)
                  if (a[d]) {
                      c += "/" + a[d];
                      try {
                          P.mkdir(c, b)
                      } catch (f) {
                          if (20 != f.Fa)
                              throw f;
                      }
                  }
          },
          zb: function(a, b, c) {
              "undefined" === typeof c && (c = b,
              b = 438);
              return P.Ra(a, b | 8192, c)
          },
          symlink: function(a, b) {
              if (!Eb(a))
                  throw new P.W(44);
              var c = P.Aa(b, {
                  parent: !0
              }).node;
              if (!c)
                  throw new P.W(44);
              b = V(b);
              var d = P.Xb(c, b);
              if (d)
                  throw new P.W(d);
              if (!c.xa.symlink)
                  throw new P.W(63);
              return c.xa.symlink(c, b, a)
          },
          rename: function(a, b) {
              var c = Bb(a)
                , d = Bb(b)
                , f = V(a)
                , g = V(b);
              var k = P.Aa(a, {
                  parent: !0
              });
              var p = k.node;
              k = P.Aa(b, {
                  parent: !0
              });
              k = k.node;
              if (!p || !k)
                  throw new P.W(44);
              if (p.Ca !== k.Ca)
                  throw new P.W(75);
              var t = P.Qa(p, f);
              d = Fb(a, d);
              if ("." !== d.charAt(0))
                  throw new P.W(28);
              d = Fb(b, c);
              if ("." !== d.charAt(0))
                  throw new P.W(55);
              try {
                  var n = P.Qa(k, g)
              } catch (r) {}
              if (t !== n) {
                  c = P.Da(t.mode);
                  if (f = P.yb(p, f, c))
                      throw new P.W(f);
                  if (f = n ? P.yb(k, g, c) : P.Xb(k, g))
                      throw new P.W(f);
                  if (!p.xa.rename)
                      throw new P.W(63);
                  if (P.Za(t) || n && P.Za(n))
                      throw new P.W(10);
                  if (k !== p && (f = P.bb(p, "w")))
                      throw new P.W(f);
                  try {
                      P.Ea.willMovePath && P.Ea.willMovePath(a, b)
                  } catch (r) {
                      N("FS.trackingDelegate['willMovePath']('" + a + "', '" + b + "') threw an exception: " + r.message)
                  }
                  P.wc(t);
                  try {
                      p.xa.rename(t, k, g)
                  } catch (r) {
                      throw r;
                  } finally {
                      P.vc(t)
                  }
                  try {
                      if (P.Ea.onMovePath)
                          P.Ea.onMovePath(a, b)
                  } catch (r) {
                      N("FS.trackingDelegate['onMovePath']('" + a + "', '" + b + "') threw an exception: " + r.message)
                  }
              }
          },
          rmdir: function(a) {
              var b = P.Aa(a, {
                  parent: !0
              }).node
                , c = V(a)
                , d = P.Qa(b, c)
                , f = P.yb(b, c, !0);
              if (f)
                  throw new P.W(f);
              if (!b.xa.rmdir)
                  throw new P.W(63);
              if (P.Za(d))
                  throw new P.W(10);
              try {
                  P.Ea.willDeletePath && P.Ea.willDeletePath(a)
              } catch (g) {
                  N("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + g.message)
              }
              b.xa.rmdir(b, c);
              P.Kb(d);
              try {
                  if (P.Ea.onDeletePath)
                      P.Ea.onDeletePath(a)
              } catch (g) {
                  N("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + g.message)
              }
          },
          readdir: function(a) {
              a = P.Aa(a, {
                  Ka: !0
              }).node;
              if (!a.xa.readdir)
                  throw new P.W(54);
              return a.xa.readdir(a)
          },
          unlink: function(a) {
              var b = P.Aa(a, {
                  parent: !0
              }).node
                , c = V(a)
                , d = P.Qa(b, c)
                , f = P.yb(b, c, !1);
              if (f)
                  throw new P.W(f);
              if (!b.xa.unlink)
                  throw new P.W(63);
              if (P.Za(d))
                  throw new P.W(10);
              try {
                  P.Ea.willDeletePath && P.Ea.willDeletePath(a)
              } catch (g) {
                  N("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + g.message)
              }
              b.xa.unlink(b, c);
              P.Kb(d);
              try {
                  if (P.Ea.onDeletePath)
                      P.Ea.onDeletePath(a)
              } catch (g) {
                  N("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + g.message)
              }
          },
          readlink: function(a) {
              a = P.Aa(a).node;
              if (!a)
                  throw new P.W(44);
              if (!a.xa.readlink)
                  throw new P.W(28);
              return Eb(P.Va(a.parent), a.xa.readlink(a))
          },
          stat: function(a, b) {
              a = P.Aa(a, {
                  Ka: !b
              }).node;
              if (!a)
                  throw new P.W(44);
              if (!a.xa.La)
                  throw new P.W(63);
              return a.xa.La(a)
          },
          lstat: function(a) {
              return P.stat(a, !0)
          },
          chmod: function(a, b, c) {
              a = "string" === typeof a ? P.Aa(a, {
                  Ka: !c
              }).node : a;
              if (!a.xa.Ga)
                  throw new P.W(63);
              a.xa.Ga(a, {
                  mode: b & 4095 | a.mode & -4096,
                  timestamp: Date.now()
              })
          },
          lchmod: function(a, b) {
              P.chmod(a, b, !0)
          },
          fchmod: function(a, b) {
              a = P.Xa(a);
              if (!a)
                  throw new P.W(8);
              P.chmod(a.node, b)
          },
          chown: function(a, b, c, d) {
              a = "string" === typeof a ? P.Aa(a, {
                  Ka: !d
              }).node : a;
              if (!a.xa.Ga)
                  throw new P.W(63);
              a.xa.Ga(a, {
                  timestamp: Date.now()
              })
          },
          lchown: function(a, b, c) {
              P.chown(a, b, c, !0)
          },
          fchown: function(a, b, c) {
              a = P.Xa(a);
              if (!a)
                  throw new P.W(8);
              P.chown(a.node, b, c)
          },
          truncate: function(a, b) {
              if (0 > b)
                  throw new P.W(28);
              a = "string" === typeof a ? P.Aa(a, {
                  Ka: !0
              }).node : a;
              if (!a.xa.Ga)
                  throw new P.W(63);
              if (P.Da(a.mode))
                  throw new P.W(31);
              if (!P.isFile(a.mode))
                  throw new P.W(28);
              var c = P.bb(a, "w");
              if (c)
                  throw new P.W(c);
              a.xa.Ga(a, {
                  size: b,
                  timestamp: Date.now()
              })
          },
          Wd: function(a, b) {
              a = P.Xa(a);
              if (!a)
                  throw new P.W(8);
              if (0 === (a.flags & 2097155))
                  throw new P.W(28);
              P.truncate(a.node, b)
          },
          oe: function(a, b, c) {
              a = P.Aa(a, {
                  Ka: !0
              }).node;
              a.xa.Ga(a, {
                  timestamp: Math.max(b, c)
              })
          },
          open: function(a, b, c, d, f) {
              if ("" === a)
                  throw new P.W(44);
              b = "string" === typeof b ? P.qd(b) : b;
              c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
              if ("object" === typeof a)
                  var g = a;
              else {
                  a = Ab(a);
                  try {
                      g = P.Aa(a, {
                          Ka: !(b & 131072)
                      }).node
                  } catch (p) {}
              }
              var k = !1;
              if (b & 64)
                  if (g) {
                      if (b & 128)
                          throw new P.W(20);
                  } else
                      g = P.Ra(a, c, 0),
                      k = !0;
              if (!g)
                  throw new P.W(44);
              P.wb(g.mode) && (b &= -513);
              if (b & 65536 && !P.Da(g.mode))
                  throw new P.W(54);
              if (!k && (c = P.pd(g, b)))
                  throw new P.W(c);
              b & 512 && P.truncate(g, 0);
              b &= -131713;
              d = P.Wc({
                  node: g,
                  path: P.Va(g),
                  flags: b,
                  seekable: !0,
                  position: 0,
                  za: g.za,
                  Md: [],
                  error: !1
              }, d, f);
              d.za.open && d.za.open(d);
              !A.logReadFiles || b & 1 || (P.Zb || (P.Zb = {}),
              a in P.Zb || (P.Zb[a] = 1,
              N("FS.trackingDelegate error on read file: " + a)));
              try {
                  P.Ea.onOpenFile && (f = 0,
                  1 !== (b & 2097155) && (f |= P.Fc.Ac.Ic),
                  0 !== (b & 2097155) && (f |= P.Fc.Ac.Jc),
                  P.Ea.onOpenFile(a, f))
              } catch (p) {
                  N("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + p.message)
              }
              return d
          },
          close: function(a) {
              if (P.ob(a))
                  throw new P.W(8);
              a.Pb && (a.Pb = null);
              try {
                  a.za.close && a.za.close(a)
              } catch (b) {
                  throw b;
              } finally {
                  P.Qc(a.fd)
              }
              a.fd = null
          },
          ob: function(a) {
              return null === a.fd
          },
          Ma: function(a, b, c) {
              if (P.ob(a))
                  throw new P.W(8);
              if (!a.seekable || !a.za.Ma)
                  throw new P.W(70);
              if (0 != c && 1 != c && 2 != c)
                  throw new P.W(28);
              a.position = a.za.Ma(a, b, c);
              a.Md = [];
              return a.position
          },
          read: function(a, b, c, d, f) {
              if (0 > d || 0 > f)
                  throw new P.W(28);
              if (P.ob(a))
                  throw new P.W(8);
              if (1 === (a.flags & 2097155))
                  throw new P.W(8);
              if (P.Da(a.node.mode))
                  throw new P.W(31);
              if (!a.za.read)
                  throw new P.W(28);
              var g = "undefined" !== typeof f;
              if (!g)
                  f = a.position;
              else if (!a.seekable)
                  throw new P.W(70);
              b = a.za.read(a, b, c, d, f);
              g || (a.position += b);
              return b
          },
          write: function(a, b, c, d, f, g) {
              if (0 > d || 0 > f)
                  throw new P.W(28);
              if (P.ob(a))
                  throw new P.W(8);
              if (0 === (a.flags & 2097155))
                  throw new P.W(8);
              if (P.Da(a.node.mode))
                  throw new P.W(31);
              if (!a.za.write)
                  throw new P.W(28);
              a.seekable && a.flags & 1024 && P.Ma(a, 0, 2);
              var k = "undefined" !== typeof f;
              if (!k)
                  f = a.position;
              else if (!a.seekable)
                  throw new P.W(70);
              b = a.za.write(a, b, c, d, f, g);
              k || (a.position += b);
              try {
                  if (a.path && P.Ea.onWriteToFile)
                      P.Ea.onWriteToFile(a.path)
              } catch (p) {
                  N("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + p.message)
              }
              return b
          },
          lb: function(a, b, c) {
              if (P.ob(a))
                  throw new P.W(8);
              if (0 > b || 0 >= c)
                  throw new P.W(28);
              if (0 === (a.flags & 2097155))
                  throw new P.W(8);
              if (!P.isFile(a.node.mode) && !P.Da(a.node.mode))
                  throw new P.W(43);
              if (!a.za.lb)
                  throw new P.W(138);
              a.za.lb(a, b, c)
          },
          fb: function(a, b, c, d, f, g) {
              if (0 !== (f & 2) && 0 === (g & 2) && 2 !== (a.flags & 2097155))
                  throw new P.W(2);
              if (1 === (a.flags & 2097155))
                  throw new P.W(2);
              if (!a.za.fb)
                  throw new P.W(43);
              return a.za.fb(a, b, c, d, f, g)
          },
          gb: function(a, b, c, d, f) {
              return a && a.za.gb ? a.za.gb(a, b, c, d, f) : 0
          },
          ee: function() {
              return 0
          },
          Sb: function(a, b, c) {
              if (!a.za.Sb)
                  throw new P.W(59);
              return a.za.Sb(a, b, c)
          },
          readFile: function(a, b) {
              b = b || {};
              b.flags = b.flags || 0;
              b.encoding = b.encoding || "binary";
              if ("utf8" !== b.encoding && "binary" !== b.encoding)
                  throw Error('Invalid encoding type "' + b.encoding + '"');
              var c, d = P.open(a, b.flags);
              a = P.stat(a).size;
              var f = new Uint8Array(a);
              P.read(d, f, 0, a, 0);
              "utf8" === b.encoding ? c = Fa(f, 0) : "binary" === b.encoding && (c = f);
              P.close(d);
              return c
          },
          writeFile: function(a, b, c) {
              c = c || {};
              c.flags = c.flags || 577;
              a = P.open(a, c.flags, c.mode);
              if ("string" === typeof b) {
                  var d = new Uint8Array(Ha(b) + 1);
                  b = Ga(b, d, 0, d.length);
                  P.write(a, d, 0, b, void 0, c.Oc)
              } else if (ArrayBuffer.isView(b))
                  P.write(a, b, 0, b.byteLength, void 0, c.Oc);
              else
                  throw Error("Unsupported data type");
              P.close(a)
          },
          cwd: function() {
              return P.kc
          },
          chdir: function(a) {
              a = P.Aa(a, {
                  Ka: !0
              });
              if (null === a.node)
                  throw new P.W(44);
              if (!P.Da(a.node.mode))
                  throw new P.W(54);
              var b = P.bb(a.node, "x");
              if (b)
                  throw new P.W(b);
              P.kc = a.path
          },
          Sc: function() {
              P.mkdir("/tmp");
              P.mkdir("/home");
              P.mkdir("/home/web_user")
          },
          Rc: function() {
              P.mkdir("/dev");
              P.ac(P.$a(1, 3), {
                  read: function() {
                      return 0
                  },
                  write: function(b, c, d, f) {
                      return f
                  }
              });
              P.zb("/dev/null", P.$a(1, 3));
              Hb(P.$a(5, 0), Kb);
              Hb(P.$a(6, 0), Lb);
              P.zb("/dev/tty", P.$a(5, 0));
              P.zb("/dev/tty1", P.$a(6, 0));
              var a = Db();
              P.Ua("/dev", "random", a);
              P.Ua("/dev", "urandom", a);
              P.mkdir("/dev/shm");
              P.mkdir("/dev/shm/tmp")
          },
          Uc: function() {
              P.mkdir("/proc");
              var a = P.mkdir("/proc/self");
              P.mkdir("/proc/self/fd");
              P.Ca({
                  Ca: function() {
                      var b = P.createNode(a, "fd", 16895, 73);
                      b.xa = {
                          lookup: function(c, d) {
                              var f = P.Xa(+d);
                              if (!f)
                                  throw new P.W(8);
                              c = {
                                  parent: null,
                                  Ca: {
                                      yc: "fake"
                                  },
                                  xa: {
                                      readlink: function() {
                                          return f.path
                                      }
                                  }
                              };
                              return c.parent = c
                          }
                      };
                      return b
                  }
              }, {}, "/proc/self/fd")
          },
          Vc: function() {
              A.stdin ? P.Ua("/dev", "stdin", A.stdin) : P.symlink("/dev/tty", "/dev/stdin");
              A.stdout ? P.Ua("/dev", "stdout", null, A.stdout) : P.symlink("/dev/tty", "/dev/stdout");
              A.stderr ? P.Ua("/dev", "stderr", null, A.stderr) : P.symlink("/dev/tty1", "/dev/stderr");
              P.open("/dev/stdin", 0);
              P.open("/dev/stdout", 1);
              P.open("/dev/stderr", 1)
          },
          nc: function() {
              P.W || (P.W = function(a, b) {
                  this.node = b;
                  this.Bd = function(c) {
                      this.Fa = c
                  }
                  ;
                  this.Bd(a);
                  this.message = "FS error"
              }
              ,
              P.W.prototype = Error(),
              P.W.prototype.constructor = P.W,
              [44].forEach(function(a) {
                  P.Nb[a] = new P.W(a);
                  P.Nb[a].stack = "<generic error, no stack>"
              }))
          },
          Ed: function() {
              P.nc();
              P.Na = Array(4096);
              P.Ca(W, {}, "/");
              P.Sc();
              P.Rc();
              P.Uc();
              P.$c = {
                  MEMFS: W
              }
          },
          nb: function(a, b, c) {
              P.nb.Rb = !0;
              P.nc();
              A.stdin = a || A.stdin;
              A.stdout = b || A.stdout;
              A.stderr = c || A.stderr;
              P.Vc()
          },
          he: function() {
              P.nb.Rb = !1;
              var a = A._fflush;
              a && a(0);
              for (a = 0; a < P.streams.length; a++) {
                  var b = P.streams[a];
                  b && P.close(b)
              }
          },
          Ob: function(a, b) {
              var c = 0;
              a && (c |= 365);
              b && (c |= 146);
              return c
          },
          Vd: function(a, b) {
              a = P.Jb(a, b);
              return a.exists ? a.object : null
          },
          Jb: function(a, b) {
              try {
                  var c = P.Aa(a, {
                      Ka: !b
                  });
                  a = c.path
              } catch (f) {}
              var d = {
                  xb: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  td: !1,
                  vd: null,
                  ud: null
              };
              try {
                  c = P.Aa(a, {
                      parent: !0
                  }),
                  d.td = !0,
                  d.vd = c.path,
                  d.ud = c.node,
                  d.name = V(a),
                  c = P.Aa(a, {
                      Ka: !b
                  }),
                  d.exists = !0,
                  d.path = c.path,
                  d.object = c.node,
                  d.name = c.node.name,
                  d.xb = "/" === c.path
              } catch (f) {
                  d.error = f.Fa
              }
              return d
          },
          Sd: function(a, b) {
              a = "string" === typeof a ? a : P.Va(a);
              for (b = b.split("/").reverse(); b.length; ) {
                  var c = b.pop();
                  if (c) {
                      var d = Cb(a, c);
                      try {
                          P.mkdir(d)
                      } catch (f) {}
                      a = d
                  }
              }
              return d
          },
          Tc: function(a, b, c, d, f) {
              a = Cb("string" === typeof a ? a : P.Va(a), b);
              return P.create(a, P.Ob(d, f))
          },
          jc: function(a, b, c, d, f, g) {
              a = b ? Cb("string" === typeof a ? a : P.Va(a), b) : a;
              d = P.Ob(d, f);
              f = P.create(a, d);
              if (c) {
                  if ("string" === typeof c) {
                      a = Array(c.length);
                      b = 0;
                      for (var k = c.length; b < k; ++b)
                          a[b] = c.charCodeAt(b);
                      c = a
                  }
                  P.chmod(f, d | 146);
                  a = P.open(f, 577);
                  P.write(a, c, 0, c.length, 0, g);
                  P.close(a);
                  P.chmod(f, d)
              }
              return f
          },
          Ua: function(a, b, c, d) {
              a = Cb("string" === typeof a ? a : P.Va(a), b);
              b = P.Ob(!!c, !!d);
              P.Ua.Wb || (P.Ua.Wb = 64);
              var f = P.$a(P.Ua.Wb++, 0);
              P.ac(f, {
                  open: function(g) {
                      g.seekable = !1
                  },
                  close: function() {
                      d && d.buffer && d.buffer.length && d(10)
                  },
                  read: function(g, k, p, t) {
                      for (var n = 0, r = 0; r < t; r++) {
                          try {
                              var z = c()
                          } catch (D) {
                              throw new P.W(29);
                          }
                          if (void 0 === z && 0 === n)
                              throw new P.W(6);
                          if (null === z || void 0 === z)
                              break;
                          n++;
                          k[p + r] = z
                      }
                      n && (g.node.timestamp = Date.now());
                      return n
                  },
                  write: function(g, k, p, t) {
                      for (var n = 0; n < t; n++)
                          try {
                              d(k[p + n])
                          } catch (r) {
                              throw new P.W(29);
                          }
                      t && (g.node.timestamp = Date.now());
                      return n
                  }
              });
              return P.zb(a, b, f)
          },
          qc: function(a) {
              if (a.Tb || a.jd || a.link || a.ya)
                  return !0;
              if ("undefined" !== typeof XMLHttpRequest)
                  throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
              if (ra)
                  try {
                      a.ya = Jb(ra(a.url), !0),
                      a.Ba = a.ya.length
                  } catch (b) {
                      throw new P.W(29);
                  }
              else
                  throw Error("Cannot load without read() or XMLHttpRequest.");
          },
          Rd: function(a, b, c, d, f) {
              function g() {
                  this.Ub = !1;
                  this.Ta = []
              }
              g.prototype.get = function(n) {
                  if (!(n > this.length - 1 || 0 > n)) {
                      var r = n % this.chunkSize;
                      return this.Ya(n / this.chunkSize | 0)[r]
                  }
              }
              ;
              g.prototype.Nd = function(n) {
                  this.Ya = n
              }
              ;
              g.prototype.hc = function() {
                  var n = new XMLHttpRequest;
                  n.open("HEAD", c, !1);
                  n.send(null);
                  if (!(200 <= n.status && 300 > n.status || 304 === n.status))
                      throw Error("Couldn't load " + c + ". Status: " + n.status);
                  var r = Number(n.getResponseHeader("Content-length")), z, D = (z = n.getResponseHeader("Accept-Ranges")) && "bytes" === z;
                  n = (z = n.getResponseHeader("Content-Encoding")) && "gzip" === z;
                  var l = 1048576;
                  D || (l = r);
                  var u = this;
                  u.Nd(function(y) {
                      var I = y * l
                        , S = (y + 1) * l - 1;
                      S = Math.min(S, r - 1);
                      if ("undefined" === typeof u.Ta[y]) {
                          var Rc = u.Ta;
                          if (I > S)
                              throw Error("invalid range (" + I + ", " + S + ") or no bytes requested!");
                          if (S > r - 1)
                              throw Error("only " + r + " bytes available! programmer error!");
                          var J = new XMLHttpRequest;
                          J.open("GET", c, !1);
                          r !== l && J.setRequestHeader("Range", "bytes=" + I + "-" + S);
                          "undefined" != typeof Uint8Array && (J.responseType = "arraybuffer");
                          J.overrideMimeType && J.overrideMimeType("text/plain; charset=x-user-defined");
                          J.send(null);
                          if (!(200 <= J.status && 300 > J.status || 304 === J.status))
                              throw Error("Couldn't load " + c + ". Status: " + J.status);
                          I = void 0 !== J.response ? new Uint8Array(J.response || []) : Jb(J.responseText || "", !0);
                          Rc[y] = I
                      }
                      if ("undefined" === typeof u.Ta[y])
                          throw Error("doXHR failed!");
                      return u.Ta[y]
                  });
                  if (n || !r)
                      l = r = 1,
                      l = r = this.Ya(0).length,
                      xa("LazyFiles on gzip forces download of the whole file when length is accessed");
                  this.Lc = r;
                  this.Kc = l;
                  this.Ub = !0
              }
              ;
              if ("undefined" !== typeof XMLHttpRequest) {
                  if (!E)
                      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  var k = new g;
                  Object.defineProperties(k, {
                      length: {
                          get: function() {
                              this.Ub || this.hc();
                              return this.Lc
                          }
                      },
                      chunkSize: {
                          get: function() {
                              this.Ub || this.hc();
                              return this.Kc
                          }
                      }
                  });
                  k = {
                      Tb: !1,
                      ya: k
                  }
              } else
                  k = {
                      Tb: !1,
                      url: c
                  };
              var p = P.Tc(a, b, k, d, f);
              k.ya ? p.ya = k.ya : k.url && (p.ya = null,
              p.url = k.url);
              Object.defineProperties(p, {
                  Ba: {
                      get: function() {
                          return this.ya.length
                      }
                  }
              });
              var t = {};
              Object.keys(p.za).forEach(function(n) {
                  var r = p.za[n];
                  t[n] = function() {
                      P.qc(p);
                      return r.apply(null, arguments)
                  }
              });
              t.read = function(n, r, z, D, l) {
                  P.qc(p);
                  n = n.node.ya;
                  if (l >= n.length)
                      return 0;
                  D = Math.min(n.length - l, D);
                  if (n.slice)
                      for (var u = 0; u < D; u++)
                          r[z + u] = n[l + u];
                  else
                      for (u = 0; u < D; u++)
                          r[z + u] = n.get(l + u);
                  return D
              }
              ;
              p.za = t;
              return p
          },
          Td: function(a, b, c, d, f, g, k, p, t, n) {
              function r(D) {
                  function l(y) {
                      n && n();
                      p || P.jc(a, b, y, d, f, t);
                      g && g();
                      Za()
                  }
                  var u = !1;
                  A.preloadPlugins.forEach(function(y) {
                      !u && y.canHandle(z) && (y.handle(D, z, l, function() {
                          k && k();
                          Za()
                      }),
                      u = !0)
                  });
                  u || l(D)
              }
              Pb.nb();
              var z = b ? Eb(Cb(a, b)) : a;
              Ya();
              "string" == typeof c ? Ob(c, function(D) {
                  r(D)
              }, k) : r(c)
          },
          indexedDB: function() {
              return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
          },
          ec: function() {
              return "EM_FS_" + window.location.pathname
          },
          fc: 20,
          kb: "FILE_DATA",
          je: function(a, b, c) {
              b = b || function() {}
              ;
              c = c || function() {}
              ;
              var d = P.indexedDB();
              try {
                  var f = d.open(P.ec(), P.fc)
              } catch (g) {
                  return c(g)
              }
              f.onupgradeneeded = function() {
                  xa("creating db");
                  f.result.createObjectStore(P.kb)
              }
              ;
              f.onsuccess = function() {
                  var g = f.result.transaction([P.kb], "readwrite")
                    , k = g.objectStore(P.kb)
                    , p = 0
                    , t = 0
                    , n = a.length;
                  a.forEach(function(r) {
                      r = k.put(P.Jb(r).object.ya, r);
                      r.onsuccess = function() {
                          p++;
                          p + t == n && (0 == t ? b() : c())
                      }
                      ;
                      r.onerror = function() {
                          t++;
                          p + t == n && (0 == t ? b() : c())
                      }
                  });
                  g.onerror = c
              }
              ;
              f.onerror = c
          },
          $d: function(a, b, c) {
              b = b || function() {}
              ;
              c = c || function() {}
              ;
              var d = P.indexedDB();
              try {
                  var f = d.open(P.ec(), P.fc)
              } catch (g) {
                  return c(g)
              }
              f.onupgradeneeded = c;
              f.onsuccess = function() {
                  var g = f.result;
                  try {
                      var k = g.transaction([P.kb], "readonly")
                  } catch (z) {
                      c(z);
                      return
                  }
                  var p = k.objectStore(P.kb)
                    , t = 0
                    , n = 0
                    , r = a.length;
                  a.forEach(function(z) {
                      var D = p.get(z);
                      D.onsuccess = function() {
                          P.Jb(z).exists && P.unlink(z);
                          P.jc(Bb(z), V(z), D.result, !0, !0, !0);
                          t++;
                          t + n == r && (0 == n ? b() : c())
                      }
                      ;
                      D.onerror = function() {
                          n++;
                          t + n == r && (0 == n ? b() : c())
                      }
                  });
                  k.onerror = c
              }
              ;
              f.onerror = c
          }
      }
        , Qb = {};
      function Rb(a, b) {
          var c = P.stat;
          try {
              var d = c(a)
          } catch (f) {
              if (f && f.node && Ab(a) !== Ab(P.Va(f.node)))
                  return -54;
              throw f;
          }
          w()[b >> 2] = d.dev;
          w()[b + 4 >> 2] = 0;
          w()[b + 8 >> 2] = d.ino;
          w()[b + 12 >> 2] = d.mode;
          w()[b + 16 >> 2] = d.nlink;
          w()[b + 20 >> 2] = d.uid;
          w()[b + 24 >> 2] = d.gid;
          w()[b + 28 >> 2] = d.rdev;
          w()[b + 32 >> 2] = 0;
          T = [d.size >>> 0, (R = d.size,
          1 <= +Math.abs(R) ? 0 < R ? (Math.min(+Math.floor(R / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((R - +(~~R >>> 0)) / 4294967296) >>> 0 : 0)];
          w()[b + 40 >> 2] = T[0];
          w()[b + 44 >> 2] = T[1];
          w()[b + 48 >> 2] = 4096;
          w()[b + 52 >> 2] = d.blocks;
          w()[b + 56 >> 2] = d.atime.getTime() / 1E3 | 0;
          w()[b + 60 >> 2] = 0;
          w()[b + 64 >> 2] = d.mtime.getTime() / 1E3 | 0;
          w()[b + 68 >> 2] = 0;
          w()[b + 72 >> 2] = d.ctime.getTime() / 1E3 | 0;
          w()[b + 76 >> 2] = 0;
          T = [d.ino >>> 0, (R = d.ino,
          1 <= +Math.abs(R) ? 0 < R ? (Math.min(+Math.floor(R / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((R - +(~~R >>> 0)) / 4294967296) >>> 0 : 0)];
          w()[b + 80 >> 2] = T[0];
          w()[b + 84 >> 2] = T[1];
          return 0
      }
      var Sb = void 0;
      function Tb() {
          Sb += 4;
          return w()[Sb - 4 >> 2]
      }
      function X(a) {
          a = P.Xa(a);
          if (!a)
              throw new P.W(8);
          return a
      }
      function Ub(a, b, c) {
          if (G)
              return Y(2, 1, a, b, c);
          Sb = c;
          try {
              var d = X(a);
              switch (b) {
              case 0:
                  var f = Tb();
                  return 0 > f ? -28 : P.open(d.path, d.flags, 0, f).fd;
              case 1:
              case 2:
                  return 0;
              case 3:
                  return d.flags;
              case 4:
                  return f = Tb(),
                  d.flags |= f,
                  0;
              case 12:
                  return f = Tb(),
                  h.buffer != m && q(h.buffer),
                  La[f + 0 >> 1] = 2,
                  0;
              case 13:
              case 14:
                  return 0;
              case 16:
              case 8:
                  return -28;
              case 9:
                  return w()[Vb() >> 2] = 28,
                  -1;
              default:
                  return -28
              }
          } catch (g) {
              return "undefined" !== typeof P && g instanceof P.W || M(g),
              -g.Fa
          }
      }
      function Wb(a, b) {
          if (G)
              return Y(3, 1, a, b);
          try {
              var c = X(a);
              return Rb(c.path, b)
          } catch (d) {
              return "undefined" !== typeof P && d instanceof P.W || M(d),
              -d.Fa
          }
      }
      function Xb(a, b, c) {
          if (G)
              return Y(4, 1, a, b, c);
          Sb = c;
          try {
              var d = X(a);
              switch (b) {
              case 21509:
              case 21505:
                  return d.tty ? 0 : -59;
              case 21510:
              case 21511:
              case 21512:
              case 21506:
              case 21507:
              case 21508:
                  return d.tty ? 0 : -59;
              case 21519:
                  if (!d.tty)
                      return -59;
                  var f = Tb();
                  return w()[f >> 2] = 0;
              case 21520:
                  return d.tty ? -28 : -59;
              case 21531:
                  return f = Tb(),
                  P.Sb(d, b, f);
              case 21523:
                  return d.tty ? 0 : -59;
              case 21524:
                  return d.tty ? 0 : -59;
              default:
                  M("bad ioctl syscall " + b)
              }
          } catch (g) {
              return "undefined" !== typeof P && g instanceof P.W || M(g),
              -g.Fa
          }
      }
      function Yb(a, b, c, d, f, g) {
          if (G)
              return Y(5, 1, a, b, c, d, f, g);
          try {
              a: {
                  g <<= 12;
                  var k = !1;
                  if (0 !== (d & 16) && 0 !== a % 65536)
                      var p = -28;
                  else {
                      if (0 !== (d & 32)) {
                          var t = Mb(b);
                          if (!t) {
                              p = -48;
                              break a
                          }
                          k = !0
                      } else {
                          var n = P.Xa(f);
                          if (!n) {
                              p = -8;
                              break a
                          }
                          var r = P.fb(n, a, b, g, c, d);
                          t = r.xd;
                          k = r.Hb
                      }
                      Qb[t] = {
                          nd: t,
                          kd: b,
                          Hb: k,
                          fd: f,
                          wd: c,
                          flags: d,
                          offset: g
                      };
                      p = t
                  }
              }
              return p
          } catch (z) {
              return "undefined" !== typeof P && z instanceof P.W || M(z),
              -z.Fa
          }
      }
      function Zb(a, b) {
          if (G)
              return Y(6, 1, a, b);
          try {
              var c = Qb[a];
              if (0 !== b && c) {
                  if (b === c.kd) {
                      var d = P.Xa(c.fd);
                      if (d && c.wd & 2) {
                          var f = c.flags
                            , g = c.offset
                            , k = v().slice(a, a + b);
                          P.gb(d, k, g, b, f)
                      }
                      Qb[a] = null;
                      c.Hb && kb(c.nd)
                  }
                  var p = 0
              } else
                  p = -28;
              return p
          } catch (t) {
              return "undefined" !== typeof P && t instanceof P.W || M(t),
              -t.Fa
          }
      }
      function $b(a, b, c) {
          if (G)
              return Y(7, 1, a, b, c);
          Sb = c;
          try {
              var d = O(a)
                , f = c ? Tb() : 0;
              return P.open(d, b, f).fd
          } catch (g) {
              return "undefined" !== typeof P && g instanceof P.W || M(g),
              -g.Fa
          }
      }
      function ac(a, b) {
          if (G)
              return Y(8, 1, a, b);
          try {
              return a = O(a),
              Rb(a, b)
          } catch (c) {
              return "undefined" !== typeof P && c instanceof P.W || M(c),
              -c.Fa
          }
      }
      function bc() {
          if (G)
              return Y(9, 1);
          M()
      }
      var cc = [];
      function dc(a) {
          if (G)
              return Y(10, 1, a);
          noExitRuntime = !1;
          Ra = 0;
          ob(a)
      }
      function Y(a, b) {
          for (var c = arguments.length - 2, d = ec(), f = Ja(8 * c), g = f >> 3, k = 0; k < c; k++) {
              var p = arguments[2 + k];
              ea()[g + k] = p
          }
          c = fc(a, c, f, b);
          qb(d);
          return c
      }
      var gc = []
        , hc = [0, "undefined" !== typeof document ? document : 0, "undefined" !== typeof window ? window : 0];
      function ic(a) {
          a = 2 < a ? O(a) : a;
          return hc[a] || ("undefined" !== typeof document ? document.querySelector(a) : void 0)
      }
      function jc(a, b, c) {
          var d = ic(a);
          if (!d)
              return -4;
          d.vb && (w()[d.vb >> 2] = b,
          w()[d.vb + 4 >> 2] = c);
          if (d.zc || !d.Qd)
              d.zc && (d = d.zc),
              a = !1,
              d.ub && d.ub.tb && (a = d.ub.tb.getParameter(2978),
              a = 0 === a[0] && 0 === a[1] && a[2] === d.width && a[3] === d.height),
              d.width = b,
              d.height = c,
              a && d.ub.tb.viewport(0, 0, b, c);
          else {
              if (d.vb) {
                  d = w()[d.vb + 8 >> 2];
                  a = a ? O(a) : "";
                  var f = ec()
                    , g = Ja(12)
                    , k = 0;
                  if (a) {
                      k = Ha(a) + 1;
                      var p = U(k);
                      Ga(a, v(), p, k);
                      k = p
                  }
                  w()[g >> 2] = k;
                  w()[g + 4 >> 2] = b;
                  w()[g + 8 >> 2] = c;
                  kc(0, d, 657457152, 0, k, g);
                  qb(f);
                  return 1
              }
              return -4
          }
          return 0
      }
      function lc(a, b, c) {
          return G ? Y(11, 1, a, b, c) : jc(a, b, c)
      }
      function mc(a) {
          if (!Ba) {
              try {
                  a()
              } catch (b) {
                  if (b instanceof ua)
                      return;
                  if ("unwind" !== b)
                      throw b && "object" === typeof b && b.stack && N("exception thrown: " + [b, b.stack]),
                      b;
              }
              if (G && !va())
                  try {
                      G ? nc(Ca) : ob(Ca)
                  } catch (b) {
                      if (!(b instanceof ua))
                          throw b;
                  }
          }
      }
      function oc(a) {
          var b = a.getExtension("ANGLE_instanced_arrays");
          b && (a.vertexAttribDivisor = function(c, d) {
              b.vertexAttribDivisorANGLE(c, d)
          }
          ,
          a.drawArraysInstanced = function(c, d, f, g) {
              b.drawArraysInstancedANGLE(c, d, f, g)
          }
          ,
          a.drawElementsInstanced = function(c, d, f, g, k) {
              b.drawElementsInstancedANGLE(c, d, f, g, k)
          }
          )
      }
      function pc(a) {
          var b = a.getExtension("OES_vertex_array_object");
          b && (a.createVertexArray = function() {
              return b.createVertexArrayOES()
          }
          ,
          a.deleteVertexArray = function(c) {
              b.deleteVertexArrayOES(c)
          }
          ,
          a.bindVertexArray = function(c) {
              b.bindVertexArrayOES(c)
          }
          ,
          a.isVertexArray = function(c) {
              return b.isVertexArrayOES(c)
          }
          )
      }
      function qc(a) {
          var b = a.getExtension("WEBGL_draw_buffers");
          b && (a.drawBuffers = function(c, d) {
              b.drawBuffersWEBGL(c, d)
          }
          )
      }
      function rc(a, b) {
          a.sc || (a.sc = a.getContext,
          a.getContext = function(d, f) {
              f = a.sc(d, f);
              return "webgl" == d == f instanceof WebGLRenderingContext ? f : null
          }
          );
          var c = a.getContext("webgl", b);
          return c ? sc(c, b) : 0
      }
      function sc(a, b) {
          var c = U(8);
          w()[c + 4 >> 2] = jb();
          var d = {
              Yd: c,
              attributes: b,
              version: b.md,
              tb: a
          };
          a.canvas && (a.canvas.ub = d);
          ("undefined" === typeof b.mc || b.mc) && tc(d);
          return c
      }
      function tc(a) {
          a || (a = uc);
          if (!a.dd) {
              a.dd = !0;
              var b = a.tb;
              oc(b);
              pc(b);
              qc(b);
              b.Ud = b.getExtension("EXT_disjoint_timer_query");
              b.de = b.getExtension("WEBGL_multi_draw");
              (b.getSupportedExtensions() || []).forEach(function(c) {
                  c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
              })
          }
      }
      var uc, vc = ["default", "low-power", "high-performance"], wc = {};
      function xc() {
          if (!yc) {
              var a = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                  _: na || "./this.program"
              }, b;
              for (b in wc)
                  void 0 === wc[b] ? delete a[b] : a[b] = wc[b];
              var c = [];
              for (b in a)
                  c.push(b + "=" + a[b]);
              yc = c
          }
          return yc
      }
      var yc;
      function zc(a, b) {
          if (G)
              return Y(12, 1, a, b);
          var c = 0;
          xc().forEach(function(d, f) {
              var g = b + c;
              f = w()[a + 4 * f >> 2] = g;
              for (g = 0; g < d.length; ++g)
                  e()[f++ >> 0] = d.charCodeAt(g);
              e()[f >> 0] = 0;
              c += d.length + 1
          });
          return 0
      }
      function Ac(a, b) {
          if (G)
              return Y(13, 1, a, b);
          var c = xc();
          w()[a >> 2] = c.length;
          var d = 0;
          c.forEach(function(f) {
              d += f.length + 1
          });
          w()[b >> 2] = d;
          return 0
      }
      function Bc(a) {
          if (G)
              return Y(14, 1, a);
          try {
              var b = X(a);
              P.close(b);
              return 0
          } catch (c) {
              return "undefined" !== typeof P && c instanceof P.W || M(c),
              c.Fa
          }
      }
      function Cc(a, b) {
          if (G)
              return Y(15, 1, a, b);
          try {
              var c = X(a)
                , d = c.tty ? 2 : P.Da(c.mode) ? 3 : P.eb(c.mode) ? 7 : 4;
              e()[b >> 0] = d;
              return 0
          } catch (f) {
              return "undefined" !== typeof P && f instanceof P.W || M(f),
              f.Fa
          }
      }
      function Dc(a, b, c, d) {
          if (G)
              return Y(16, 1, a, b, c, d);
          try {
              a: {
                  for (var f = X(a), g = a = 0; g < c; g++) {
                      var k = w()[b + 8 * g >> 2]
                        , p = w()[b + (8 * g + 4) >> 2]
                        , t = P.read(f, e(), k, p, void 0);
                      if (0 > t) {
                          var n = -1;
                          break a
                      }
                      a += t;
                      if (t < p)
                          break
                  }
                  n = a
              }
              w()[d >> 2] = n;
              return 0
          } catch (r) {
              return "undefined" !== typeof P && r instanceof P.W || M(r),
              r.Fa
          }
      }
      function Ec(a, b, c, d, f) {
          if (G)
              return Y(17, 1, a, b, c, d, f);
          try {
              var g = X(a);
              a = 4294967296 * c + (b >>> 0);
              if (-9007199254740992 >= a || 9007199254740992 <= a)
                  return -61;
              P.Ma(g, a, d);
              T = [g.position >>> 0, (R = g.position,
              1 <= +Math.abs(R) ? 0 < R ? (Math.min(+Math.floor(R / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((R - +(~~R >>> 0)) / 4294967296) >>> 0 : 0)];
              w()[f >> 2] = T[0];
              w()[f + 4 >> 2] = T[1];
              g.Pb && 0 === a && 0 === d && (g.Pb = null);
              return 0
          } catch (k) {
              return "undefined" !== typeof P && k instanceof P.W || M(k),
              k.Fa
          }
      }
      function Fc(a, b, c, d) {
          if (G)
              return Y(18, 1, a, b, c, d);
          try {
              a: {
                  for (var f = X(a), g = a = 0; g < c; g++) {
                      var k = w()[b + 8 * g >> 2]
                        , p = w()[b + (8 * g + 4) >> 2]
                        , t = P.write(f, e(), k, p, void 0);
                      if (0 > t) {
                          var n = -1;
                          break a
                      }
                      a += t
                  }
                  n = a
              }
              w()[d >> 2] = n;
              return 0
          } catch (r) {
              return "undefined" !== typeof P && r instanceof P.W || M(r),
              r.Fa
          }
      }
      function Gc(a) {
          return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
      }
      function Hc(a, b) {
          for (var c = 0, d = 0; d <= b; c += a[d++])
              ;
          return c
      }
      var Ic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        , Jc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function Kc(a, b) {
          for (a = new Date(a.getTime()); 0 < b; ) {
              var c = a.getMonth()
                , d = (Gc(a.getFullYear()) ? Ic : Jc)[c];
              if (b > d - a.getDate())
                  b -= d - a.getDate() + 1,
                  a.setDate(1),
                  11 > c ? a.setMonth(c + 1) : (a.setMonth(0),
                  a.setFullYear(a.getFullYear() + 1));
              else {
                  a.setDate(a.getDate() + b);
                  break
              }
          }
          return a
      }
      function Lc(a, b, c, d) {
          function f(l, u, y) {
              for (l = "number" === typeof l ? l.toString() : l || ""; l.length < u; )
                  l = y[0] + l;
              return l
          }
          function g(l, u) {
              return f(l, u, "0")
          }
          function k(l, u) {
              function y(S) {
                  return 0 > S ? -1 : 0 < S ? 1 : 0
              }
              var I;
              0 === (I = y(l.getFullYear() - u.getFullYear())) && 0 === (I = y(l.getMonth() - u.getMonth())) && (I = y(l.getDate() - u.getDate()));
              return I
          }
          function p(l) {
              switch (l.getDay()) {
              case 0:
                  return new Date(l.getFullYear() - 1,11,29);
              case 1:
                  return l;
              case 2:
                  return new Date(l.getFullYear(),0,3);
              case 3:
                  return new Date(l.getFullYear(),0,2);
              case 4:
                  return new Date(l.getFullYear(),0,1);
              case 5:
                  return new Date(l.getFullYear() - 1,11,31);
              case 6:
                  return new Date(l.getFullYear() - 1,11,30)
              }
          }
          function t(l) {
              l = Kc(new Date(l.Ha + 1900,0,1), l.Fb);
              var u = new Date(l.getFullYear() + 1,0,4)
                , y = p(new Date(l.getFullYear(),0,4));
              u = p(u);
              return 0 >= k(y, l) ? 0 >= k(u, l) ? l.getFullYear() + 1 : l.getFullYear() : l.getFullYear() - 1
          }
          var n = w()[d + 40 >> 2];
          d = {
              Jd: w()[d >> 2],
              Id: w()[d + 4 >> 2],
              Db: w()[d + 8 >> 2],
              sb: w()[d + 12 >> 2],
              jb: w()[d + 16 >> 2],
              Ha: w()[d + 20 >> 2],
              Eb: w()[d + 24 >> 2],
              Fb: w()[d + 28 >> 2],
              le: w()[d + 32 >> 2],
              Hd: w()[d + 36 >> 2],
              Kd: n ? O(n) : ""
          };
          c = O(c);
          n = {
              "%c": "%a %b %d %H:%M:%S %Y",
              "%D": "%m/%d/%y",
              "%F": "%Y-%m-%d",
              "%h": "%b",
              "%r": "%I:%M:%S %p",
              "%R": "%H:%M",
              "%T": "%H:%M:%S",
              "%x": "%m/%d/%y",
              "%X": "%H:%M:%S",
              "%Ec": "%c",
              "%EC": "%C",
              "%Ex": "%m/%d/%y",
              "%EX": "%H:%M:%S",
              "%Ey": "%y",
              "%EY": "%Y",
              "%Od": "%d",
              "%Oe": "%e",
              "%OH": "%H",
              "%OI": "%I",
              "%Om": "%m",
              "%OM": "%M",
              "%OS": "%S",
              "%Ou": "%u",
              "%OU": "%U",
              "%OV": "%V",
              "%Ow": "%w",
              "%OW": "%W",
              "%Oy": "%y"
          };
          for (var r in n)
              c = c.replace(new RegExp(r,"g"), n[r]);
          var z = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
            , D = "January February March April May June July August September October November December".split(" ");
          n = {
              "%a": function(l) {
                  return z[l.Eb].substring(0, 3)
              },
              "%A": function(l) {
                  return z[l.Eb]
              },
              "%b": function(l) {
                  return D[l.jb].substring(0, 3)
              },
              "%B": function(l) {
                  return D[l.jb]
              },
              "%C": function(l) {
                  return g((l.Ha + 1900) / 100 | 0, 2)
              },
              "%d": function(l) {
                  return g(l.sb, 2)
              },
              "%e": function(l) {
                  return f(l.sb, 2, " ")
              },
              "%g": function(l) {
                  return t(l).toString().substring(2)
              },
              "%G": function(l) {
                  return t(l)
              },
              "%H": function(l) {
                  return g(l.Db, 2)
              },
              "%I": function(l) {
                  l = l.Db;
                  0 == l ? l = 12 : 12 < l && (l -= 12);
                  return g(l, 2)
              },
              "%j": function(l) {
                  return g(l.sb + Hc(Gc(l.Ha + 1900) ? Ic : Jc, l.jb - 1), 3)
              },
              "%m": function(l) {
                  return g(l.jb + 1, 2)
              },
              "%M": function(l) {
                  return g(l.Id, 2)
              },
              "%n": function() {
                  return "\n"
              },
              "%p": function(l) {
                  return 0 <= l.Db && 12 > l.Db ? "AM" : "PM"
              },
              "%S": function(l) {
                  return g(l.Jd, 2)
              },
              "%t": function() {
                  return "\t"
              },
              "%u": function(l) {
                  return l.Eb || 7
              },
              "%U": function(l) {
                  var u = new Date(l.Ha + 1900,0,1)
                    , y = 0 === u.getDay() ? u : Kc(u, 7 - u.getDay());
                  l = new Date(l.Ha + 1900,l.jb,l.sb);
                  return 0 > k(y, l) ? g(Math.ceil((31 - y.getDate() + (Hc(Gc(l.getFullYear()) ? Ic : Jc, l.getMonth() - 1) - 31) + l.getDate()) / 7), 2) : 0 === k(y, u) ? "01" : "00"
              },
              "%V": function(l) {
                  var u = new Date(l.Ha + 1901,0,4)
                    , y = p(new Date(l.Ha + 1900,0,4));
                  u = p(u);
                  var I = Kc(new Date(l.Ha + 1900,0,1), l.Fb);
                  return 0 > k(I, y) ? "53" : 0 >= k(u, I) ? "01" : g(Math.ceil((y.getFullYear() < l.Ha + 1900 ? l.Fb + 32 - y.getDate() : l.Fb + 1 - y.getDate()) / 7), 2)
              },
              "%w": function(l) {
                  return l.Eb
              },
              "%W": function(l) {
                  var u = new Date(l.Ha,0,1)
                    , y = 1 === u.getDay() ? u : Kc(u, 0 === u.getDay() ? 1 : 7 - u.getDay() + 1);
                  l = new Date(l.Ha + 1900,l.jb,l.sb);
                  return 0 > k(y, l) ? g(Math.ceil((31 - y.getDate() + (Hc(Gc(l.getFullYear()) ? Ic : Jc, l.getMonth() - 1) - 31) + l.getDate()) / 7), 2) : 0 === k(y, u) ? "01" : "00"
              },
              "%y": function(l) {
                  return (l.Ha + 1900).toString().substring(2)
              },
              "%Y": function(l) {
                  return l.Ha + 1900
              },
              "%z": function(l) {
                  l = l.Hd;
                  var u = 0 <= l;
                  l = Math.abs(l) / 60;
                  return (u ? "+" : "-") + String("0000" + (l / 60 * 100 + l % 60)).slice(-4)
              },
              "%Z": function(l) {
                  return l.Kd
              },
              "%%": function() {
                  return "%"
              }
          };
          for (r in n)
              c.includes(r) && (c = c.replace(new RegExp(r,"g"), n[r](d)));
          r = Jb(c, !1);
          if (r.length > b)
              return 0;
          Ka(r, a);
          return r.length - 1
      }
      function Mc(a) {
          try {
              a()
          } catch (b) {
              M(b)
          }
      }
      var Z = 0
        , Nc = null
        , Oc = 0
        , Pc = []
        , Qc = {}
        , Sc = {}
        , Tc = 0
        , Uc = null
        , Vc = []
        , Wc = [];
      function Xc(a) {
          var b = {}, c;
          for (c in a)
              (function(d) {
                  var f = a[d];
                  b[d] = "function" === typeof f ? function() {
                      Pc.push(d);
                      try {
                          return f.apply(null, arguments)
                      } finally {
                          if (!Ba) {
                              var g = Pc.pop();
                              assert(g === d);
                              Nc && 1 === Z && 0 === Pc.length && (Ra += 1,
                              Z = 0,
                              Mc(A._asyncify_stop_unwind),
                              "undefined" !== typeof Fibers && Fibers.me(),
                              Uc && (Uc(),
                              Uc = null))
                          }
                      }
                  }
                  : f
              }
              )(c);
          return b
      }
      function Yc() {
          var a = U(4108)
            , b = a + 12;
          w()[a >> 2] = b;
          w()[a + 4 >> 2] = b + 4096;
          b = Pc[0];
          var c = Qc[b];
          void 0 === c && (c = Tc++,
          Qc[b] = c,
          Sc[c] = b);
          b = c;
          w()[a + 8 >> 2] = b;
          return a
      }
      function Zc() {
          var a = Nc;
          a = w()[a + 8 >> 2];
          a = A.asm[Sc[a]];
          --Ra;
          return a()
      }
      function $c(a) {
          if (!Ba) {
              if (0 === Z) {
                  var b = !1
                    , c = !1;
                  a(function(d) {
                      if (!Ba && (Oc = d || 0,
                      b = !0,
                      c)) {
                          Z = 2;
                          Mc(function() {
                              A._asyncify_start_rewind(Nc)
                          });
                          "undefined" !== typeof Pb && Pb.Vb.rc && Pb.Vb.resume();
                          var f = Zc();
                          Nc || (d = Vc,
                          Vc = [],
                          d.forEach(function(g) {
                              g(f)
                          }))
                      }
                  });
                  c = !0;
                  b || (Z = 1,
                  Nc = Yc(),
                  Mc(function() {
                      A._asyncify_start_unwind(Nc)
                  }),
                  "undefined" !== typeof Pb && Pb.Vb.rc && Pb.Vb.pause())
              } else
                  2 === Z ? (Z = 0,
                  Mc(A._asyncify_stop_rewind),
                  kb(Nc),
                  Nc = null,
                  Wc.forEach(function(d) {
                      mc(d)
                  })) : M("invalid state: " + Z);
              return Oc
          }
      }
      function ad(a) {
          return $c(function(b) {
              a().then(b)
          })
      }
      function bd(a, b, c, d) {
          a || (a = this);
          this.parent = a;
          this.Ca = a.Ca;
          this.pb = null;
          this.id = P.rd++;
          this.name = b;
          this.mode = c;
          this.xa = {};
          this.za = {};
          this.rdev = d
      }
      Object.defineProperties(bd.prototype, {
          read: {
              get: function() {
                  return 365 === (this.mode & 365)
              },
              set: function(a) {
                  a ? this.mode |= 365 : this.mode &= -366
              }
          },
          write: {
              get: function() {
                  return 146 === (this.mode & 146)
              },
              set: function(a) {
                  a ? this.mode |= 146 : this.mode &= -147
              }
          },
          jd: {
              get: function() {
                  return P.Da(this.mode)
              }
          },
          Tb: {
              get: function() {
                  return P.wb(this.mode)
              }
          }
      });
      P.Gc = bd;
      P.Ed();
      var Pb, cd = [null, function(a, b) {
          if (G)
              return Y(1, 1, a, b)
      }
      , Ub, Wb, Xb, Yb, Zb, $b, ac, bc, dc, lc, zc, Ac, Bc, Cc, Dc, Ec, Fc];
      function Jb(a, b) {
          var c = Array(Ha(a) + 1);
          a = Ga(a, c, 0, c.length);
          b && (c.length = a);
          return c
      }
      var fd = {
          c: function(a, b, c, d) {
              M("Assertion failed: " + O(a) + ", at: " + [b ? O(b) : "unknown filename", c, d ? O(d) : "unknown function"])
          },
          G: function(a, b) {
              dd(a, b)
          },
          q: function(a, b) {
              B.cc.push(function() {
                  dynCall_vi.apply(null, [a, b])
              })
          },
          O: function(a, b, c, d) {
              if ("undefined" === typeof SharedArrayBuffer)
                  return N("Current environment does not support SharedArrayBuffer, pthreads are not available!"),
                  6;
              if (!a)
                  return N("pthread_create called with a null thread pointer!"),
                  28;
              var f = [];
              if (G && 0 === f.length)
                  return ed(687865856, a, b, c, d);
              var g = 0
                , k = 0;
              if (b && -1 != b) {
                  var p = w()[b >> 2];
                  p += 81920;
                  g = w()[b + 8 >> 2];
                  k = 0 !== w()[b + 12 >> 2]
              } else
                  p = 2097152;
              (b = 0 == g) ? g = Nb(16, p) : (g -= p,
              assert(0 < g));
              for (var t = U(228), n = 0; 57 > n; ++n)
                  x()[(t >> 2) + n] = 0;
              w()[a >> 2] = t;
              w()[t + 12 >> 2] = t;
              a = t + 152;
              w()[a >> 2] = a;
              c = {
                  cb: g,
                  ib: p,
                  Ib: b,
                  detached: k,
                  Dd: c,
                  Ab: t,
                  mb: d,
                  Ld: f
              };
              return G ? (c.Pd = "spawnThread",
              postMessage(c, f),
              0) : nb(c)
          },
          M: function(a) {
              G ? B.Ec(a) : (B.Bc(),
              ob(a));
              throw "unwind";
          },
          N: function(a, b) {
              return wb(a, b)
          },
          j: Ub,
          F: Wb,
          w: Xb,
          B: function() {
              N("warning: unsupported syscall: __sys_madvise1");
              return 0
          },
          D: Yb,
          C: Zb,
          k: $b,
          E: ac,
          R: function(a, b) {
              if (a == b)
                  postMessage({
                      cmd: "processQueuedMainThreadWork"
                  });
              else if (G)
                  postMessage({
                      targetThread: a,
                      cmd: "processThreadQueue"
                  });
              else {
                  a = (a = B.Ja[a]) && a.worker;
                  if (!a)
                      return;
                  a.postMessage({
                      cmd: "processThreadQueue"
                  })
              }
              return 1
          },
          b: bc,
          y: function(a, b) {
              if (0 === a)
                  a = Date.now();
              else if (1 === a || 4 === a)
                  a = sb();
              else
                  return w()[Vb() >> 2] = 28,
                  -1;
              w()[b >> 2] = a / 1E3 | 0;
              w()[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
              return 0
          },
          m: function(a, b, c) {
              cc.length = 0;
              var d;
              for (c >>= 2; d = v()[b++]; )
                  (d = 105 > d) && c & 1 && c++,
                  cc.push(d ? ea()[c++ >> 1] : w()[c]),
                  ++c;
              return cb[a].apply(null, cc)
          },
          x: vb,
          i: function() {},
          A: dc,
          d: ub,
          e: db,
          g: sb,
          o: function(a, b, c) {
              v().copyWithin(a, b, b + c)
          },
          I: function(a, b, c) {
              gc.length = b;
              c >>= 3;
              for (var d = 0; d < b; d++)
                  gc[d] = ea()[c + d];
              return (0 > a ? cb[-a - 1] : cd[a]).apply(null, gc)
          },
          p: function(a) {
              var b = v().length;
              a >>>= 0;
              if (a <= b || 2147483648 < a)
                  return !1;
              for (var c = 1; 4 >= c; c *= 2) {
                  var d = b * (1 + .2 / c);
                  d = Math.min(d, a + 100663296);
                  d = Math.max(a, d);
                  0 < d % 65536 && (d += 65536 - d % 65536);
                  a: {
                      try {
                          h.grow(Math.min(2147483648, d) - m.byteLength + 65535 >>> 16);
                          q(h.buffer);
                          var f = 1;
                          break a
                      } catch (g) {}
                      f = void 0
                  }
                  if (f)
                      return !0
              }
              return !1
          },
          K: function(a, b, c) {
              return ic(a) ? jc(a, b, c) : lc(a, b, c)
          },
          l: function() {},
          H: function() {},
          Q: function(a, b, c) {
              Ra += 1;
              return setTimeout(function() {
                  --Ra;
                  mc(function() {
                      dynCall_vi.apply(null, [a, c])
                  })
              }, b)
          },
          J: function() {
              return ad(async()=>{
                  var a = await A.queue.get();
                  const b = Ha(a) + 1
                    , c = U(b);
                  Ga(a, v(), c, b);
                  return c
              }
              )
          },
          L: function(a, b) {
              b >>= 2;
              var c = w()[b + 6];
              b = {
                  alpha: !!w()[b],
                  depth: !!w()[b + 1],
                  stencil: !!w()[b + 2],
                  antialias: !!w()[b + 3],
                  premultipliedAlpha: !!w()[b + 4],
                  preserveDrawingBuffer: !!w()[b + 5],
                  powerPreference: vc[c],
                  failIfMajorPerformanceCaveat: !!w()[b + 7],
                  md: w()[b + 8],
                  be: w()[b + 9],
                  mc: w()[b + 10],
                  Zc: w()[b + 11],
                  ge: w()[b + 12],
                  ie: w()[b + 13]
              };
              a = ic(a);
              return !a || b.Zc ? 0 : rc(a, b)
          },
          s: zc,
          t: Ac,
          f: function(a) {
              ob(a)
          },
          h: Bc,
          z: Cc,
          v: Dc,
          n: Ec,
          u: Fc,
          P: function() {
              B.ed()
          },
          a: h || A.wasmMemory,
          r: function(a, b, c, d) {
              return Lc(a, b, c, d)
          }
      };
      (function() {
          function a(g, k) {
              g = g.exports;
              g = Xc(g);
              A.asm = g;
              Oa.unshift(A.asm.S);
              B.dc.push(A.asm.V);
              Aa = k;
              G || Za()
          }
          function b(g) {
              a(g.instance, g.module)
          }
          function c(g) {
              return bb().then(function(k) {
                  return WebAssembly.instantiate(k, d)
              }).then(g, function(k) {
                  N("failed to asynchronously prepare wasm: " + k);
                  M(k)
              })
          }
          var d = {
              a: fd
          };
          G || Ya();
          if (A.instantiateWasm)
              try {
                  var f = A.instantiateWasm(d, a);
                  return f = Xc(f)
              } catch (g) {
                  return N("Module.instantiateWasm callback failed with error: " + g),
                  !1
              }
          (function() {
              return za || "function" !== typeof WebAssembly.instantiateStreaming || $a() || "function" !== typeof fetch ? c(b) : fetch(Q, {
                  credentials: "same-origin"
              }).then(function(g) {
                  return WebAssembly.instantiateStreaming(g, d).then(b, function(k) {
                      N("wasm streaming compile failed: " + k);
                      N("falling back to ArrayBuffer instantiation");
                      return c(b)
                  })
              })
          }
          )().catch(ia);
          return {}
      }
      )();
      A.___wasm_call_ctors = function() {
          return (A.___wasm_call_ctors = A.asm.S).apply(null, arguments)
      }
      ;
      var dd = A._main = function() {
          return (dd = A._main = A.asm.T).apply(null, arguments)
      }
        , kb = A._free = function() {
          return (kb = A._free = A.asm.U).apply(null, arguments)
      }
      ;
      A._emscripten_tls_init = function() {
          return (A._emscripten_tls_init = A.asm.V).apply(null, arguments)
      }
      ;
      A._emscripten_current_thread_process_queued_calls = function() {
          return (A._emscripten_current_thread_process_queued_calls = A.asm.X).apply(null, arguments)
      }
      ;
      var hb = A._emscripten_register_main_browser_thread_id = function() {
          return (hb = A._emscripten_register_main_browser_thread_id = A.asm.Y).apply(null, arguments)
      }
        , xb = A._emscripten_main_browser_thread_id = function() {
          return (xb = A._emscripten_main_browser_thread_id = A.asm.Z).apply(null, arguments)
      }
        , ed = A._emscripten_sync_run_in_main_thread_4 = function() {
          return (ed = A._emscripten_sync_run_in_main_thread_4 = A.asm._).apply(null, arguments)
      }
        , mb = A._emscripten_main_thread_process_queued_calls = function() {
          return (mb = A._emscripten_main_thread_process_queued_calls = A.asm.$).apply(null, arguments)
      }
        , fc = A._emscripten_run_in_main_runtime_thread_js = function() {
          return (fc = A._emscripten_run_in_main_runtime_thread_js = A.asm.aa).apply(null, arguments)
      }
        , kc = A.__emscripten_call_on_thread = function() {
          return (kc = A.__emscripten_call_on_thread = A.asm.ba).apply(null, arguments)
      }
      ;
      A._emscripten_proxy_main = function() {
          return (A._emscripten_proxy_main = A.asm.ca).apply(null, arguments)
      }
      ;
      var yb = A._pthread_testcancel = function() {
          return (yb = A._pthread_testcancel = A.asm.da).apply(null, arguments)
      }
        , jb = A._pthread_self = function() {
          return (jb = A._pthread_self = A.asm.ea).apply(null, arguments)
      }
        , U = A._malloc = function() {
          return (U = A._malloc = A.asm.fa).apply(null, arguments)
      }
        , nc = A._pthread_exit = function() {
          return (nc = A._pthread_exit = A.asm.ga).apply(null, arguments)
      }
        , gb = A.__emscripten_thread_init = function() {
          return (gb = A.__emscripten_thread_init = A.asm.ha).apply(null, arguments)
      }
        , tb = A._emscripten_get_global_libc = function() {
          return (tb = A._emscripten_get_global_libc = A.asm.ia).apply(null, arguments)
      }
        , Vb = A.___errno_location = function() {
          return (Vb = A.___errno_location = A.asm.ja).apply(null, arguments)
      }
        , ib = A.___pthread_tsd_run_dtors = function() {
          return (ib = A.___pthread_tsd_run_dtors = A.asm.ka).apply(null, arguments)
      }
        , ec = A.stackSave = function() {
          return (ec = A.stackSave = A.asm.la).apply(null, arguments)
      }
        , qb = A.stackRestore = function() {
          return (qb = A.stackRestore = A.asm.ma).apply(null, arguments)
      }
        , Ja = A.stackAlloc = function() {
          return (Ja = A.stackAlloc = A.asm.na).apply(null, arguments)
      }
        , pb = A._emscripten_stack_set_limits = function() {
          return (pb = A._emscripten_stack_set_limits = A.asm.oa).apply(null, arguments)
      }
        , Nb = A._memalign = function() {
          return (Nb = A._memalign = A.asm.pa).apply(null, arguments)
      }
        , dynCall_vi = A.dynCall_vi = function() {
          return (dynCall_vi = A.dynCall_vi = A.asm.qa).apply(null, arguments)
      }
        , rb = A.dynCall_ii = function() {
          return (rb = A.dynCall_ii = A.asm.ra).apply(null, arguments)
      }
        , dynCall_v = A.dynCall_v = function() {
          return (dynCall_v = A.dynCall_v = A.asm.sa).apply(null, arguments)
      }
      ;
      A._asyncify_start_unwind = function() {
          return (A._asyncify_start_unwind = A.asm.ta).apply(null, arguments)
      }
      ;
      A._asyncify_stop_unwind = function() {
          return (A._asyncify_stop_unwind = A.asm.ua).apply(null, arguments)
      }
      ;
      A._asyncify_start_rewind = function() {
          return (A._asyncify_start_rewind = A.asm.va).apply(null, arguments)
      }
      ;
      A._asyncify_stop_rewind = function() {
          return (A._asyncify_stop_rewind = A.asm.wa).apply(null, arguments)
      }
      ;
      var lb = A.__emscripten_allow_main_runtime_queued_calls = 12065324
        , eb = A.__emscripten_main_thread_futex = 13280700;
      A.keepRuntimeAlive = va;
      A.FS = P;
      A.PThread = B;
      A.PThread = B;
      A.wasmMemory = h;
      A.ExitStatus = ua;
      var gd;
      function ua(a) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + a + ")";
          this.status = a
      }
      Xa = function hd() {
          gd || jd();
          gd || (Xa = hd)
      }
      ;
      function jd(a) {
          function b() {
              if (!gd && (gd = !0,
              A.calledRun = !0,
              !Ba)) {
                  Sa();
                  G || Ta(Pa);
                  ha(A);
                  if (A.onRuntimeInitialized)
                      A.onRuntimeInitialized();
                  if (kd) {
                      var c = a
                        , d = A._emscripten_proxy_main;
                      c = c || [];
                      var f = c.length + 1
                        , g = Ja(4 * (f + 1));
                      w()[g >> 2] = Ia(na);
                      for (var k = 1; k < f; k++)
                          w()[(g >> 2) + k] = Ia(c[k - 1]);
                      w()[(g >> 2) + f] = 0;
                      d(f, g)
                  }
                  if (!G) {
                      if (A.postRun)
                          for ("function" == typeof A.postRun && (A.postRun = [A.postRun]); A.postRun.length; )
                              c = A.postRun.shift(),
                              Qa.unshift(c);
                      Ta(Qa)
                  }
              }
          }
          a = a || ma;
          if (!(0 < Va))
              if (G)
                  ha(A),
                  Sa(),
                  postMessage({
                      cmd: "loaded"
                  });
              else {
                  if (!G) {
                      if (A.preRun)
                          for ("function" == typeof A.preRun && (A.preRun = [A.preRun]); A.preRun.length; )
                              Ua();
                      Ta(Na)
                  }
                  0 < Va || (A.setStatus ? (A.setStatus("Running..."),
                  setTimeout(function() {
                      setTimeout(function() {
                          A.setStatus("")
                      }, 1);
                      b()
                  }, 1)) : b())
              }
      }
      A.run = jd;
      function ob(a) {
          Ca = a;
          if (G)
              throw postMessage({
                  cmd: "exitProcess",
                  returnCode: a
              }),
              new ua(a);
          va() || B.bc();
          Ca = a;
          if (!va()) {
              B.bc();
              if (A.onExit)
                  A.onExit(a);
              Ba = !0
          }
          oa(a, new ua(a))
      }
      if (A.preInit)
          for ("function" == typeof A.preInit && (A.preInit = [A.preInit]); 0 < A.preInit.length; )
              A.preInit.pop()();
      var kd = !0;
      A.noInitialRun && (kd = !1);
      G && (noExitRuntime = !1,
      B.gd());
      jd();

      return Stockfish.ready
  }
  );
}
)();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Stockfish;
else if (typeof define === 'function' && define['amd'])
  define([], function() {
      return Stockfish;
  });
else if (typeof exports === 'object')
  exports["Stockfish"] = Stockfish;
