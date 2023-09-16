import{C as rn}from"./chess-19eddd7f.js";import{_ as kh}from"./Chessboard-60c0b1fa.js";import{_ as as,b as st,c as it,A as mo,l as yn,g as R,n as Mh,m as xh,h as ar,i as hr,w as Oh,v as Lh,t as sn,F as ur,s as cr}from"./index-07fd5acc.js";import{_ as Fh}from"./burgerMenu-ba336864.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Uh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],h=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,h=s+2<e.length,u=h?e[s+2]:0,c=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;h||(m=64,o||(p=64)),r.push(n[c],n[l],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(go(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Uh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const l=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||l==null)throw new Bh;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),l!==64){const D=u<<6&192|l;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Bh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qh=function(e){const t=go(e);return _o.encodeByteArray(t,!0)},vn=function(e){return qh(e).replace(/\./g,"")},$h=function(e){try{return _o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=()=>jh().__FIREBASE_DEFAULTS__,Kh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Hh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$h(e[1]);return t&&JSON.parse(t)},yo=()=>{try{return zh()||Kh()||Hh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Gh=e=>{var t,n;return(n=(t=yo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Qh=e=>{const t=Gh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},vo=()=>{var e;return(e=yo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[vn(JSON.stringify(n)),vn(JSON.stringify(o)),a].join(".")}function Xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Jh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="FirebaseError";class ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Zh,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?tu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ue(s,a,r)}}function tu(e,t){return e.replace(eu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const eu=/\{\$([^}]+)}/g;function Sr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(hi(i)&&hi(o)){if(!Sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(su(t))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Nt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nt){return this.instances.has(t)}getOptions(t=Nt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ru(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nt){return this.component?this.component.multipleInstances?t:Nt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ru(e){return e===Nt?void 0:e}function su(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new nu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const ou={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},au=S.INFO,hu={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},uu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=hu[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class To{constructor(t){this.name=t,this._logLevel=au,this._logHandler=uu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ou[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const cu=(e,t)=>t.some(n=>e instanceof n);let ui,ci;function lu(){return ui||(ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function du(){return ci||(ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wo=new WeakMap,Vr=new WeakMap,Io=new WeakMap,lr=new WeakMap,hs=new WeakMap;function fu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Rt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wo.set(n,e)}).catch(()=>{}),hs.set(t,e),t}function pu(e){if(Vr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Vr.set(e,t)}let Dr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Io.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mu(e){Dr=e(Dr)}function gu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(dr(this),t,...n);return Io.set(r,t.sort?t.sort():[t]),Rt(r)}:du().includes(e)?function(...t){return e.apply(dr(this),t),Rt(wo.get(this))}:function(...t){return Rt(e.apply(dr(this),t))}}function _u(e){return typeof e=="function"?gu(e):(e instanceof IDBTransaction&&pu(e),cu(e,lu())?new Proxy(e,Dr):e)}function Rt(e){if(e instanceof IDBRequest)return fu(e);if(lr.has(e))return lr.get(e);const t=_u(e);return t!==e&&(lr.set(e,t),hs.set(t,e)),t}const dr=e=>hs.get(e);function yu(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Rt(o);return r&&o.addEventListener("upgradeneeded",h=>{r(Rt(o.result),h.oldVersion,h.newVersion,Rt(o.transaction),h)}),n&&o.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),a.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vu=["get","getKey","getAll","getAllKeys","count"],Eu=["put","add","delete","clear"],fr=new Map;function li(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fr.get(t))return fr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Eu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vu.includes(n)))return;const i=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let u=h.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&h.done]))[0]};return fr.set(t,i),i}mu(e=>({...e,get:(t,n,r)=>li(t,n)||e.get(t,n,r),has:(t,n)=>!!li(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const br="@firebase/app",di="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new To("@firebase/app"),Iu="@firebase/app-compat",Au="@firebase/analytics-compat",Ru="@firebase/analytics",Pu="@firebase/app-check-compat",Cu="@firebase/app-check",Su="@firebase/auth",Vu="@firebase/auth-compat",Du="@firebase/database",bu="@firebase/database-compat",Nu="@firebase/functions",ku="@firebase/functions-compat",Mu="@firebase/installations",xu="@firebase/installations-compat",Ou="@firebase/messaging",Lu="@firebase/messaging-compat",Fu="@firebase/performance",Uu="@firebase/performance-compat",Bu="@firebase/remote-config",qu="@firebase/remote-config-compat",$u="@firebase/storage",ju="@firebase/storage-compat",zu="@firebase/firestore",Ku="@firebase/firestore-compat",Hu="firebase",Gu="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]",Qu={[br]:"fire-core",[Iu]:"fire-core-compat",[Ru]:"fire-analytics",[Au]:"fire-analytics-compat",[Cu]:"fire-app-check",[Pu]:"fire-app-check-compat",[Su]:"fire-auth",[Vu]:"fire-auth-compat",[Du]:"fire-rtdb",[bu]:"fire-rtdb-compat",[Nu]:"fire-fn",[ku]:"fire-fn-compat",[Mu]:"fire-iid",[xu]:"fire-iid-compat",[Ou]:"fire-fcm",[Lu]:"fire-fcm-compat",[Fu]:"fire-perf",[Uu]:"fire-perf-compat",[Bu]:"fire-rc",[qu]:"fire-rc-compat",[$u]:"fire-gcs",[ju]:"fire-gcs-compat",[zu]:"fire-fst",[Ku]:"fire-fst-compat","fire-js":"fire-js",[Hu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map,kr=new Map;function Wu(e,t){try{e.container.addComponent(t)}catch(n){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wn(e){const t=e.name;if(kr.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;kr.set(t,e);for(const n of Tn.values())Wu(n,e);return!0}function Yu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Eo("app","Firebase",Xu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=Gu;function Ao(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=vo()),!n)throw Pt.create("no-options");const i=Tn.get(s);if(i){if(Sr(n,i.options)&&Sr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new iu(s);for(const h of kr.values())o.addComponent(h);const a=new Ju(n,r,o);return Tn.set(s,a),a}function tc(e=Nr){const t=Tn.get(e);if(!t&&e===Nr&&vo())return Ao();if(!t)throw Pt.create("no-app",{appName:e});return t}function Wt(e,t,n){var r;let s=(r=Qu[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}wn(new Ve(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebase-heartbeat-database",nc=1,De="firebase-heartbeat-store";let pr=null;function Ro(){return pr||(pr=yu(ec,nc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(De)}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),pr}async function rc(e){try{return await(await Ro()).transaction(De).objectStore(De).get(Po(e))}catch(t){if(t instanceof ue)Ut.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}async function fi(e,t){try{const r=(await Ro()).transaction(De,"readwrite");await r.objectStore(De).put(t,Po(e)),await r.done}catch(n){if(n instanceof ue)Ut.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function Po(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=1024,ic=30*24*60*60*1e3;class oc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ic}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pi(),{heartbeatsToSend:n,unsentEntries:r}=ac(this._heartbeatsCache.heartbeats),s=vn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pi(){return new Date().toISOString().substring(0,10)}function ac(e,t=sc){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xh()?Jh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function mi(e){return vn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e){wn(new Ve("platform-logger",t=>new Tu(t),"PRIVATE")),wn(new Ve("heartbeat",t=>new oc(t),"PRIVATE")),Wt(br,di,e),Wt(br,di,"esm2017"),Wt("fire-js","")}uc("");var cc="firebase",lc="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(cc,lc,"app");var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,us=us||{},E=dc||self;function xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function je(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function fc(e){return Object.prototype.hasOwnProperty.call(e,mr)&&e[mr]||(e[mr]=++pc)}var mr="closure_uid_"+(1e9*Math.random()>>>0),pc=0;function mc(e,t,n){return e.call.apply(e.bind,arguments)}function gc(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=mc:X=gc,X.apply(null,arguments)}function on(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Dt(){this.s=this.s,this.o=this.o}var _c=0;Dt.prototype.s=!1;Dt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),_c!=0)&&fc(this)};Dt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Co=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function cs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function gi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var yc=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",()=>{},t),E.removeEventListener("test",()=>{},t)}catch{}return e}();function be(e){return/^[\s\xa0]*$/.test(e)}function On(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return On().indexOf(e)!=-1}function ls(e){return ls[" "](e),e}ls[" "]=function(){};function vc(e,t){var n=ll;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ec=ct("Opera"),ee=ct("Trident")||ct("MSIE"),So=ct("Edge"),Mr=So||ee,Vo=ct("Gecko")&&!(On().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),Tc=On().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Do(){var e=E.document;return e?e.documentMode:void 0}var xr;t:{var gr="",_r=function(){var e=On();if(Vo)return/rv:([^\);]+)(\)|;)/.exec(e);if(So)return/Edge\/([\d\.]+)/.exec(e);if(ee)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Tc)return/WebKit\/(\S+)/.exec(e);if(Ec)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_r&&(gr=_r?_r[1]:""),ee){var yr=Do();if(yr!=null&&yr>parseFloat(gr)){xr=String(yr);break t}}xr=gr}var Or;if(E.document&&ee){var _i=Do();Or=_i||parseInt(xr,10)||void 0}else Or=void 0;var wc=Or;function Ne(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vo){t:{try{ls(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ic[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ne.$.h.call(this)}}z(Ne,J);var Ic={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Ac=0;function Rc(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Ac,this.fa=this.ia=!1}function Ln(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ds(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Pc(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function bo(e){const t={};for(const n in e)t[n]=e[n];return t}const yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function No(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<yi.length;i++)n=yi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Fn(e){this.src=e,this.g={},this.h=0}Fn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Fr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Rc(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Lr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Co(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var fs="closure_lm_"+(1e6*Math.random()|0),vr={};function ko(e,t,n,r,s){if(r&&r.once)return xo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ko(e,t[i],n,r,s);return null}return n=gs(n),e&&e[ze]?e.O(t,n,je(r)?!!r.capture:!!r,s):Mo(e,t,n,!1,r,s)}function Mo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=je(s)?!!s.capture:!!s,a=ms(e);if(a||(e[fs]=a=new Fn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Cc(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)yc||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Lo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cc(){function e(n){return t.call(e.src,e.listener,n)}const t=Sc;return e}function xo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)xo(e,t[i],n,r,s);return null}return n=gs(n),e&&e[ze]?e.P(t,n,je(r)?!!r.capture:!!r,s):Mo(e,t,n,!0,r,s)}function Oo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Oo(e,t[i],n,r,s);else r=je(r)?!!r.capture:!!r,n=gs(n),e&&e[ze]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Fr(i,n,r,s),-1<n&&(Ln(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fr(t,n,r,s)),(n=-1<e?t[e]:null)&&ps(n))}function ps(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ze])Lr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Lo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ms(t))?(Lr(n,e),n.h==0&&(n.src=null,t[fs]=null)):Ln(e)}}}function Lo(e){return e in vr?vr[e]:vr[e]="on"+e}function Sc(e,t){if(e.fa)e=!0;else{t=new Ne(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ps(e),e=n.call(r,t)}return e}function ms(e){return e=e[fs],e instanceof Fn?e:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(e){return typeof e=="function"?e:(e[Er]||(e[Er]=function(t){return e.handleEvent(t)}),e[Er])}function j(){Dt.call(this),this.i=new Fn(this),this.S=this,this.J=null}z(j,Dt);j.prototype[ze]=!0;j.prototype.removeEventListener=function(e,t,n,r){Oo(this,e,t,n,r)};function G(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var s=t;t=new J(r,e),No(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=an(o,r,!0,t)&&s}if(o=t.g=e,s=an(o,r,!0,t)&&s,s=an(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=an(o,r,!1,t)&&s}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ln(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function an(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&Lr(e.i,o),s=a.call(h,r)!==!1&&s}}return s&&!r.defaultPrevented}var _s=E.JSON.stringify;class Vc{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Dc(){var e=ys;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class bc{constructor(){this.h=this.g=null}add(t,n){const r=Fo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fo=new Vc(()=>new Nc,e=>e.reset());class Nc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Mc(e){E.setTimeout(()=>{throw e},0)}let ke,Me=!1,ys=new bc,Uo=()=>{const e=E.Promise.resolve(void 0);ke=()=>{e.then(xc)}};var xc=()=>{for(var e;e=Dc();){try{e.h.call(e.g)}catch(n){Mc(n)}var t=Fo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1};function Un(e,t){j.call(this),this.h=e||1,this.g=t||E,this.j=X(this.qb,this),this.l=Date.now()}z(Un,j);g=Un.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),G(this,"tick"),this.ga&&(vs(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Un.$.N.call(this),vs(this),delete this.g};function Es(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Bo(e){e.g=Es(()=>{e.g=null,e.i&&(e.i=!1,Bo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Oc extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bo(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){Dt.call(this),this.h=e,this.g={}}z(xe,Dt);var vi=[];function qo(e,t,n,r){Array.isArray(n)||(n&&(vi[0]=n.toString()),n=vi);for(var s=0;s<n.length;s++){var i=ko(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function $o(e){ds(e.g,function(t,n){this.g.hasOwnProperty(n)&&ps(t)},e),e.g={}}xe.prototype.N=function(){xe.$.N.call(this),$o(this)};xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bn(){this.g=!0}Bn.prototype.Ea=function(){this.g=!1};function Lc(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Fc(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Qt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Bc(e,n)+(r?" "+r:"")})}function Uc(e,t){e.info(function(){return"TIMEOUT: "+t})}Bn.prototype.info=function(){};function Bc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _s(n)}catch{return t}}var jt={},Ei=null;function qn(){return Ei=Ei||new j}jt.Ta="serverreachability";function jo(e){J.call(this,jt.Ta,e)}z(jo,J);function Oe(e){const t=qn();G(t,new jo(t))}jt.STAT_EVENT="statevent";function zo(e,t){J.call(this,jt.STAT_EVENT,e),this.stat=t}z(zo,J);function nt(e){const t=qn();G(t,new zo(t,e))}jt.Ua="timingevent";function Ko(e,t){J.call(this,jt.Ua,e),this.size=t}z(Ko,J);function Ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var $n={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ho={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ts(){}Ts.prototype.h=null;function Ti(e){return e.h||(e.h=e.i())}function Go(){}var He={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ws(){J.call(this,"d")}z(ws,J);function Is(){J.call(this,"c")}z(Is,J);var Ur;function jn(){}z(jn,Ts);jn.prototype.g=function(){return new XMLHttpRequest};jn.prototype.i=function(){return{}};Ur=new jn;function Ge(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new xe(this),this.P=qc,e=Mr?125:void 0,this.V=new Un(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var qc=45e3,Br={},In={};g=Ge.prototype;g.setTimeout=function(e){this.P=e};function qr(e,t,n){e.L=1,e.v=Kn(vt(t)),e.s=n,e.S=!0,Wo(e,null)}function Wo(e,t){e.G=Date.now(),Qe(e),e.A=vt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ra(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Qo,e.g=Aa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Oc(X(e.Pa,e,e.g),e.O)),qo(e.U,e.g,"readystatechange",e.nb),t=e.I?bo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Oe(),Lc(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&dt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const c=dt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>c)&&(c!=3||Mr||this.g&&(this.h.h||this.g.ja()||Ri(this.g)))){this.J||c!=4||t==7||(t==8||0>=l?Oe(3):Oe(2)),zn(this);var n=this.g.da();this.ca=n;e:if(Yo(this)){var r=Ri(this.g);e="";var s=r.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),Ie(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Fc(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!be(a)){var u=a;break e}}u=null}if(n=u)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$r(this,n);else{this.i=!1,this.o=3,nt(12),kt(this),Ie(this);break t}}this.S?(Xo(this,c,o),Mr&&this.i&&c==3&&(qo(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),$r(this,o)),c==4&&kt(this),this.i&&!this.J&&(c==4?Ea(this.l,this):(this.i=!1,Qe(this)))}else hl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),kt(this),Ie(this)}}}catch{}finally{}};function Yo(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Xo(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=$c(e,n),s==In){t==4&&(e.o=4,nt(14),r=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Br){e.o=4,nt(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Qt(e.j,e.m,s,null),$r(e,s);Yo(e)&&s!=In&&s!=Br&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vs(t),t.M=!0,nt(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),Ie(e))}g.mb=function(){if(this.g){var e=dt(this.g),t=this.g.ja();this.C<t.length&&(zn(this),Xo(this,e,t),this.i&&e!=4&&Qe(this))}};function $c(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?In:(n=Number(t.substring(n,r)),isNaN(n)?Br:(r+=1,r+n>t.length?In:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,kt(this)};function Qe(e){e.Y=Date.now()+e.P,Jo(e,e.P)}function Jo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ke(X(e.lb,e),t)}function zn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Uc(this.j,this.A),this.L!=2&&(Oe(),nt(17)),kt(this),this.o=2,Ie(this)):Jo(this,this.Y-e)};function Ie(e){e.l.H==0||e.J||Ea(e.l,e)}function kt(e){zn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,vs(e.V),$o(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function $r(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||jr(n.i,e))){if(!e.K&&jr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Pn(n),Wn(n);else break t;Ss(n),nt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ke(X(n.ib,n),6e3));if(1>=oa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&Pn(n),!be(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const l=u[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const D=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(D){var i=r.i;i.g||D.indexOf("spdy")==-1&&D.indexOf("quic")==-1&&D.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(As(i,i.h),i.h=null))}if(r.F){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(r.Da=N,k(r.I,r.F,N))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ia(r,r.J?r.pa:null,r.Y),o.K){aa(r.i,o);var a=o,h=r.L;h&&a.setTimeout(h),a.B&&(zn(a),Qe(a)),r.g=o}else ya(r);0<n.j.length&&Yn(n)}else u[0]!="stop"&&u[0]!="close"||Mt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mt(n,7):Cs(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Oe(4)}catch{}}function jc(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(xn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function zc(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(xn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Zo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(xn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=zc(e),r=jc(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ot(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ot){this.h=e.h,An(this,e.j),this.s=e.s,this.g=e.g,Rn(this,e.m),this.l=e.l;var t=e.i,n=new Le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),wi(this,n),this.o=e.o}else e&&(t=String(e).match(ta))?(this.h=!1,An(this,t[1]||"",!0),this.s=ve(t[2]||""),this.g=ve(t[3]||"",!0),Rn(this,t[4]),this.l=ve(t[5]||"",!0),wi(this,t[6]||"",!0),this.o=ve(t[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Ot.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ee(t,Ii,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ee(t,Ii,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ee(n,n.charAt(0)=="/"?Qc:Gc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ee(n,Yc)),e.join("")};function vt(e){return new Ot(e)}function An(e,t,n){e.j=n?ve(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wi(e,t,n){t instanceof Le?(e.i=t,Xc(e.i,e.h)):(n||(t=Ee(t,Wc)),e.i=new Le(t,e.h))}function k(e,t,n){e.i.set(t,n)}function Kn(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ve(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ee(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Hc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ii=/[#\/\?@]/g,Gc=/[#\?:]/g,Qc=/[#\?]/g,Wc=/[#\?@]/g,Yc=/#/g;function Le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Kc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Le.prototype;g.add=function(e,t){bt(this),this.i=null,e=ce(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ea(e,t){bt(e),t=ce(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function na(e,t){return bt(e),t=ce(e,t),e.g.has(t)}g.forEach=function(e,t){bt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};g.ta=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};g.Z=function(e){bt(this);let t=[];if(typeof e=="string")na(this,e)&&(t=t.concat(this.g.get(ce(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return bt(this),this.i=null,e=ce(this,e),na(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ra(e,t,n){ea(e,t),0<n.length&&(e.i=null,e.g.set(ce(e,t),cs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ce(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Xc(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ea(this,r),ra(this,s,n))},e)),e.j=t}var Jc=class{constructor(e,t){this.g=e,this.map=t}};function sa(e){this.l=e||Zc,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zc=10;function ia(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function oa(e){return e.h?1:e.g?e.g.size:0}function jr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function As(e,t){e.g?e.g.add(t):e.h=t}function aa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}sa.prototype.cancel=function(){if(this.i=ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ha(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return cs(e.i)}var tl=class{stringify(e){return E.JSON.stringify(e,void 0)}parse(e){return E.JSON.parse(e,void 0)}};function el(){this.g=new tl}function nl(e,t,n){const r=n||"";try{Zo(e,function(s,i){let o=s;je(s)&&(o=_s(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function rl(e,t){const n=new Bn;if(E.Image){const r=new Image;r.onload=on(hn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=on(hn,n,r,"TestLoadImage: error",!1,t),r.onabort=on(hn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=on(hn,n,r,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function hn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Hn(e){this.l=e.fc||null,this.j=e.ob||!1}z(Hn,Ts);Hn.prototype.g=function(){return new Gn(this.l,this.j)};Hn.prototype.i=function(e){return function(){return e}}({});function Gn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Rs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Gn,j);var Rs=0;g=Gn.prototype;g.open=function(e,t){if(this.readyState!=Rs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=Rs};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ua(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ua(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?We(this):Fe(this),this.readyState==3&&ua(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,We(this))};g.Ya=function(e){this.g&&(this.response=e,We(this))};g.ka=function(){this.g&&We(this)};function We(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var sl=E.JSON.parse;function x(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ca,this.L=this.M=!1}z(x,j);var ca="",il=/^https?$/i,ol=["POST","PUT"];g=x.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ur.g(),this.C=this.u?Ti(this.u):Ti(Ur),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Ai(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=E.FormData&&e instanceof E.FormData,!(0<=Co(ol,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fa(this),0<this.B&&((this.L=al(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=Es(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ai(this,i)}};function al(e){return ee&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof us<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Ai(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,la(e),Qn(e)}function la(e){e.F||(e.F=!0,G(e,"complete"),G(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),Qn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),x.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?da(this):this.kb())};g.kb=function(){da(this)};function da(e){if(e.h&&typeof us<"u"&&(!e.C[1]||dt(e)!=4||e.da()!=2)){if(e.v&&dt(e)==4)Es(e.La,0,e);else if(G(e,"readystatechange"),dt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(ta)[1]||null;!s&&E.self&&E.self.location&&(s=E.self.location.protocol.slice(0,-1)),r=!il.test(s?s.toLowerCase():"")}n=r}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var i=2<dt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",la(e)}}finally{Qn(e)}}}}function Qn(e,t){if(e.g){fa(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=r}catch{}}}function fa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function dt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),sl(t)}};function Ri(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ca:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function hl(e){const t={};e=(e.g&&2<=dt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(be(e[r]))continue;var n=kc(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Pc(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pa(e){let t="";return ds(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ps(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=pa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function _e(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ma(e){this.Ga=0,this.j=[],this.l=new Bn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_e("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_e("baseRetryDelayMs",5e3,e),this.hb=_e("retryDelaySeedMs",1e4,e),this.eb=_e("forwardChannelMaxRetries",2,e),this.xa=_e("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new sa(e&&e.concurrentRequestLimit),this.Ja=new el,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=ma.prototype;g.ra=8;g.H=1;function Cs(e){if(ga(e),e.H==3){var t=e.W++,n=vt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),Ye(e,n),t=new Ge(e,e.l,t),t.L=2,t.v=Kn(vt(n)),n=!1,E.navigator&&E.navigator.sendBeacon)try{n=E.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Aa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Qe(t)}wa(e)}function Wn(e){e.g&&(Vs(e),e.g.cancel(),e.g=null)}function ga(e){Wn(e),e.u&&(E.clearTimeout(e.u),e.u=null),Pn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Yn(e){if(!ia(e.i)&&!e.m){e.m=!0;var t=e.Na;ke||Uo(),Me||(ke(),Me=!0),ys.add(t,e),e.C=0}}function ul(e,t){return oa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ke(X(e.Na,e,t),Ta(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ge(this,this.l,e);let i=this.s;if(this.U&&(i?(i=bo(i),No(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=_a(this,s,t),n=vt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),Ye(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(pa(i)))+"&"+t:this.o&&Ps(n,this.o,i)),As(this.i,s),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),s.aa=!0,qr(s,n,null)):qr(s,n,t),this.H=2}}else this.H==3&&(e?Pi(this,e):this.j.length==0||ia(this.i)||Pi(this))};function Pi(e,t){var n;t?n=t.m:n=e.W++;const r=vt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),Ye(e,r),e.o&&e.s&&Ps(r,e.o,e.s),n=new Ge(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=_a(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),As(e.i,n),qr(n,r,t)}function Ye(e,t){e.na&&ds(e.na,function(n,r){k(t,r,n)}),e.h&&Zo({},function(n,r){k(t,r,n)})}function _a(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let h=0;h<n;h++){let u=s[h].g;const c=s[h].map;if(u-=i,0>u)i=Math.max(0,s[h].g-100),a=!1;else try{nl(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ya(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ke||Uo(),Me||(ke(),Me=!0),ys.add(t,e),e.A=0}}function Ss(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ke(X(e.Ma,e),Ta(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,va(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ke(X(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Wn(this),va(this))};function Vs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function va(e){e.g=new Ge(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=vt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),Ye(e,t),e.o&&e.s&&Ps(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Kn(vt(t)),n.s=null,n.S=!0,Wo(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Wn(this),Ss(this),nt(19))};function Pn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function Ea(e,t){var n=null;if(e.g==t){Pn(e),Vs(e),e.g=null;var r=2}else if(jr(e.i,t))n=t.F,aa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=qn(),G(r,new Ko(r,n)),Yn(e)}else ya(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&ul(e,t)||r==2&&Ss(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Ta(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new Ot("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||An(n,"https"),Kn(n)),rl(n.toString(),r)}else nt(2);e.H=0,e.h&&e.h.za(t),wa(e),ga(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function wa(e){if(e.H=0,e.ma=[],e.h){const t=ha(e.i);(t.length!=0||e.j.length!=0)&&(gi(e.ma,t),gi(e.ma,e.j),e.i.i.length=0,cs(e.j),e.j.length=0),e.h.ya()}}function Ia(e,t,n){var r=n instanceof Ot?vt(n):new Ot(n);if(r.g!="")t&&(r.g=t+"."+r.g),Rn(r,r.m);else{var s=E.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ot(null);r&&An(i,r),t&&(i.g=t),s&&Rn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),Ye(e,r),r}function Aa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new x(new Hn({ob:!0})):new x(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ra(){}g=Ra.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Cn(){if(ee&&!(10<=Number(wc)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){j.call(this),this.g=new ma(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!be(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new le(this)}z(ot,j);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ia(e,null,e.Y),Yn(e)};ot.prototype.close=function(){Cs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=_s(e),e=n);t.j.push(new Jc(t.fb++,e)),t.H==3&&Yn(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,Cs(this.g),delete this.g,ot.$.N.call(this)};function Pa(e){ws.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Pa,ws);function Ca(){Is.call(this),this.status=1}z(Ca,Is);function le(e){this.g=e}z(le,Ra);le.prototype.Ba=function(){G(this.g,"a")};le.prototype.Aa=function(e){G(this.g,new Pa(e))};le.prototype.za=function(e){G(this.g,new Ca)};le.prototype.ya=function(){G(this.g,"b")};function cl(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,cl);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Tr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Tr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Tr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Tr(this,r),s=0;break}}this.h=s,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var ll={};function Ds(e){return-128<=e&&128>e?vc(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return Yt;if(0>e)return H(ft(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=zr;return new b(t,0)}function Sa(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(Sa(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),r=Yt,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=ft(Math.pow(t,i)),r=r.R(i).add(ft(o))):(r=r.R(n),r=r.add(ft(o)))}return r}var zr=4294967296,Yt=Ds(0),Kr=Ds(1),Ci=Ds(16777216);g=b.prototype;g.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:zr+r)*t,t*=zr}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(yt(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,r="";;){var s=Vn(n,t).g;n=Sn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,yt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function yt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}g.X=function(e){return e=Sn(this,e),at(e)?-1:yt(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(Kr)}g.abs=function(){return at(this)?H(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function Sn(e,t){return e.add(H(t))}g.R=function(e){if(yt(this)||yt(e))return Yt;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Ci)&&0>e.X(Ci))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,h=e.D(s)&65535;n[2*r+2*s]+=o*h,un(n,2*r+2*s),n[2*r+2*s+1]+=i*h,un(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,un(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,un(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function un(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ye(e,t){this.g=e,this.h=t}function Vn(e,t){if(yt(t))throw Error("division by zero");if(yt(e))return new ye(Yt,Yt);if(at(e))return t=Vn(H(e),t),new ye(H(t.g),H(t.h));if(at(t))return t=Vn(e,H(t)),new ye(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Kr,r=t;0>=r.X(e);)n=Si(n),r=Si(r);var s=Kt(n,1),i=Kt(r,1);for(r=Kt(r,2),n=Kt(n,2);!yt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Kt(r,1),n=Kt(n,1)}return t=Sn(e,s.R(t)),new ye(s,t)}for(s=Yt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ft(n),o=i.R(t);at(o)||0<o.X(e);)n-=r,i=ft(n),o=i.R(t);yt(i)&&(i=Kr),s=s.add(i),e=Sn(e,o)}return new ye(s,e)}g.gb=function(e){return Vn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Si(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Kt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}Cn.prototype.createWebChannel=Cn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;$n.NO_ERROR=0;$n.TIMEOUT=8;$n.HTTP_ERROR=6;Ho.COMPLETE="complete";Go.EventType=He;He.OPEN="a";He.CLOSE="b";He.ERROR="c";He.MESSAGE="d";j.prototype.listen=j.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=ft;b.fromString=Sa;var dl=function(){return new Cn},fl=function(){return qn()},wr=$n,pl=Ho,ml=jt,Vi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cn=Go,gl=x,_l=ht,Xt=b;const Di="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new To("@firebase/firestore");function bi(){return Bt.logLevel}function y(e,...t){if(Bt.logLevel<=S.DEBUG){const n=t.map(bs);Bt.debug(`Firestore (${de}): ${e}`,...n)}}function Et(e,...t){if(Bt.logLevel<=S.ERROR){const n=t.map(bs);Bt.error(`Firestore (${de}): ${e}`,...n)}}function ne(e,...t){if(Bt.logLevel<=S.WARN){const n=t.map(bs);Bt.warn(`Firestore (${de}): ${e}`,...n)}}function bs(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){const t=`FIRESTORE (${de}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function B(e,t){e||w()}function P(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class vl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class El{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=i;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new Va(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new W(t)}}class Tl{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wl{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tl(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Il{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Al{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new Il(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Rl(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function re(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new $(0,0))}static max(){return new T(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n,r){n===void 0?n=0:n>t.length&&w(),r===void 0?r=t.length-n:r>t.length-n&&w(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends Ue{construct(t,n,r){return new M(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Cl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ue{construct(t,n,r){return new et(t,n,r)}static isValidIdentifier(t){return Cl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new _(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new _(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new _(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(M.fromString(t))}static fromName(t){return new v(M.fromString(t).popFirst(5))}static empty(){return new v(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new M(t.slice()))}}function Sl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=T.fromTimestamp(r===1e9?new $(n+1,0):new $(n,r));return new Ct(s,v.empty(),t)}function Vl(e){return new Ct(e.readTime,e.key,-1)}class Ct{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ct(T.min(),v.empty(),-1)}static max(){return new Ct(T.max(),v.empty(),-1)}}function Dl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==bl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},h=>r(h))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let h=0;h<i;h++){const u=h;n(t[u]).next(c=>{o[u]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Xe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ks.ae=-1;function Xn(e){return e==null}function Dn(e){return e===0&&1/e==-1/0}function kl(e){return typeof e=="number"&&Number.isInteger(e)&&!Dn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Je(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Da(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ln(this.root,t,this.comparator,!0)}}class ln{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??K.RED,this.left=s??K.EMPTY,this.right=i??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new K(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return K.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,n,r,s,i){return this}insert(t,n,r){return new K(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ki(this.data.getIterator())}getIteratorFrom(t){return new ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new It([])}unionWith(t){let n=new Z(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new It(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return re(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ba("Invalid base64 string: "+i):i}}(t);return new tt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Ml=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(e){if(B(!!e),typeof e=="string"){let t=0;const n=Ml.exec(e);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?tt.fromBase64String(e):tt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xs(e){const t=e.mapValue.fields.__previous_value__;return Ms(t)?xs(t):t}function Be(e){const t=St(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n,r,s,i,o,a,h,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=h,this.useFetchStreams=u}}class qe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ms(e)?4:Ol(e)?9007199254740991:10:w()}function pt(e,t){if(e===t)return!0;const n=$t(e);if(n!==$t(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Be(e).isEqual(Be(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=St(s.timestampValue),a=St(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return F(s.geoPointValue.latitude)===F(i.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return F(s.integerValue)===F(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=F(s.doubleValue),a=F(i.doubleValue);return o===a?Dn(o)===Dn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return re(e.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ni(o)!==Ni(a))return!1;for(const h in o)if(o.hasOwnProperty(h)&&(a[h]===void 0||!pt(o[h],a[h])))return!1;return!0}(e,t);default:return w()}}function $e(e,t){return(e.values||[]).find(n=>pt(n,t))!==void 0}function se(e,t){if(e===t)return 0;const n=$t(e),r=$t(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=F(i.integerValue||i.doubleValue),h=F(o.integerValue||o.doubleValue);return a<h?-1:a>h?1:a===h?0:isNaN(a)?isNaN(h)?0:-1:1}(e,t);case 3:return Mi(e.timestampValue,t.timestampValue);case 4:return Mi(Be(e),Be(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qt(i),h=qt(o);return a.compareTo(h)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),h=o.split("/");for(let u=0;u<a.length&&u<h.length;u++){const c=V(a[u],h[u]);if(c!==0)return c}return V(a.length,h.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=V(F(i.latitude),F(o.latitude));return a!==0?a:V(F(i.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],h=o.values||[];for(let u=0;u<a.length&&u<h.length;++u){const c=se(a[u],h[u]);if(c)return c}return V(a.length,h.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===dn.mapValue&&o===dn.mapValue)return 0;if(i===dn.mapValue)return 1;if(o===dn.mapValue)return-1;const a=i.fields||{},h=Object.keys(a),u=o.fields||{},c=Object.keys(u);h.sort(),c.sort();for(let l=0;l<h.length&&l<c.length;++l){const p=V(h[l],c[l]);if(p!==0)return p;const m=se(a[h[l]],u[c[l]]);if(m!==0)return m}return V(h.length,c.length)}(e.mapValue,t.mapValue);default:throw w()}}function Mi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=St(e),r=St(t),s=V(n.seconds,r.seconds);return s!==0?s:V(n.nanos,r.nanos)}function ie(e){return Hr(e)}function Hr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=St(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hr(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Hr(n.fields[o])}`;return s+"}"}(e.mapValue):w()}function xi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Gr(e){return!!e&&"integerValue"in e}function Os(e){return!!e&&"arrayValue"in e}function Oi(e){return!!e&&"nullValue"in e}function Li(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ir(e){return!!e&&"mapValue"in e}function Ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Je(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ae(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ol(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ir(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ae(n)}setAll(t){let n=et.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ae(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Je(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new lt(Ae(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,T.min(),T.min(),T.min(),lt.empty(),0)}static newFoundDocument(t,n,r,s){return new Y(t,1,n,T.min(),r,s,0)}static newNoDocument(t,n){return new Y(t,2,n,T.min(),T.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,T.min(),T.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n){this.position=t,this.inclusive=n}}function Fi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=se(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ui(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ll(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{}class U extends Na{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ul(t,n,r):n==="array-contains"?new $l(t,r):n==="in"?new jl(t,r):n==="not-in"?new zl(t,r):n==="array-contains-any"?new Kl(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Bl(t,r):new ql(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(se(n,this.value)):n!==null&&$t(this.value)===$t(n)&&this.matchesComparison(se(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ut extends Na{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new ut(t,n)}matches(t){return ka(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ka(e){return e.op==="and"}function Ma(e){return Fl(e)&&ka(e)}function Fl(e){for(const t of e.filters)if(t instanceof ut)return!1;return!0}function Qr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+ie(e.value);if(Ma(e))return e.filters.map(t=>Qr(t)).join(",");{const t=e.filters.map(n=>Qr(n)).join(",");return`${e.op}(${t})`}}function xa(e,t){return e instanceof U?function(r,s){return s instanceof U&&r.op===s.op&&r.field.isEqual(s.field)&&pt(r.value,s.value)}(e,t):e instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&xa(o,s.filters[a]),!0):!1}(e,t):void w()}function Oa(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${ie(n.value)}`}(e):e instanceof ut?function(n){return n.op.toString()+" {"+n.getFilters().map(Oa).join(" ,")+"}"}(e):"Filter"}class Ul extends U{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class Bl extends U{constructor(t,n){super(t,"in",n),this.keys=La("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ql extends U{constructor(t,n){super(t,"not-in",n),this.keys=La("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function La(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}class $l extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Os(n)&&$e(n.arrayValue,this.value)}}class jl extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&$e(this.value.arrayValue,n)}}class zl extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!$e(this.value.arrayValue,n)}}class Kl extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Os(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$e(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Bi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Hl(e,t,n,r,s,i,o)}function Ls(e){const t=P(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Qr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ie(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ie(r)).join(",")),t.he=n}return t.he}function Fs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ll(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!xa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ui(e.startAt,t.startAt)&&Ui(e.endAt,t.endAt)}function Wr(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=h,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Gl(e,t,n,r,s,i,o,a){return new Ze(e,t,n,r,s,i,o,a)}function Fa(e){return new Ze(e)}function qi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ua(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Us(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ba(e){return e.collectionGroup!==null}function Pe(e){const t=P(e);if(t.Pe===null){t.Pe=[];const n=Us(t),r=Ua(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Re(n)),t.Pe.push(new Re(et.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Re(et.keyField(),i))}}}return t.Pe}function Tt(e){const t=P(e);return t.Ie||(t.Ie=Ql(t,Pe(e))),t.Ie}function Ql(e,t){if(e.limitType==="F")return Bi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Re(s.field,i)});const n=e.endAt?new bn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bn(e.startAt.position,e.startAt.inclusive):null;return Bi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Yr(e,t){t.getFirstInequalityField(),Us(e);const n=e.filters.concat([t]);return new Ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Nn(e,t,n){return new Ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Jn(e,t){return Fs(Tt(e),Tt(t))&&e.limitType===t.limitType}function qa(e){return`${Ls(Tt(e))}|lt:${e.limitType}`}function Xr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Oa(s)).join(", ")}]`),Xn(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ie(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ie(s)).join(",")),`Target(${r})`}(Tt(e))}; limitType=${e.limitType})`}function Zn(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):v.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Pe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,h){const u=Fi(o,a,h);return o.inclusive?u<=0:u<0}(r.startAt,Pe(r),s)||r.endAt&&!function(o,a,h){const u=Fi(o,a,h);return o.inclusive?u>=0:u>0}(r.endAt,Pe(r),s))}(e,t)}function Wl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $a(e){return(t,n)=>{let r=!1;for(const s of Pe(e)){const i=Yl(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yl(e,t,n){const r=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,o,a){const h=o.data.field(i),u=a.data.field(i);return h!==null&&u!==null?se(h,u):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Je(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Da(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new O(v.comparator);function Vt(){return Xl}const ja=new O(v.comparator);function Te(...e){let t=ja;for(const n of e)t=t.insert(n.key,n);return t}function Jl(e){let t=ja;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function xt(){return Ce()}function za(){return Ce()}function Ce(){return new fe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Zl=new Z(v.comparator);function A(...e){let t=Zl;for(const n of e)t=t.add(n);return t}const td=new Z(V);function ed(){return td}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dn(t)?"-0":t}}function Ha(e){return{integerValue:""+e}}function nd(e,t){return kl(t)?Ha(t):Ka(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this._=void 0}}function rd(e,t,n){return e instanceof Jr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ms(i)&&(i=xs(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof kn?Ga(e,t):e instanceof Mn?Qa(e,t):function(s,i){const o=id(s,i),a=$i(o)+$i(s.Ee);return Gr(o)&&Gr(s.Ee)?Ha(a):Ka(s.serializer,a)}(e,t)}function sd(e,t,n){return e instanceof kn?Ga(e,t):e instanceof Mn?Qa(e,t):n}function id(e,t){return e instanceof Zr?function(r){return Gr(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Jr extends tr{}class kn extends tr{constructor(t){super(),this.elements=t}}function Ga(e,t){const n=Wa(t);for(const r of e.elements)n.some(s=>pt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mn extends tr{constructor(t){super(),this.elements=t}}function Qa(e,t){let n=Wa(t);for(const r of e.elements)n=n.filter(s=>!pt(s,r));return{arrayValue:{values:n}}}class Zr extends tr{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function $i(e){return F(e.integerValue||e.doubleValue)}function Wa(e){return Os(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function od(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof kn&&s instanceof kn||r instanceof Mn&&s instanceof Mn?re(r.elements,s.elements,pt):r instanceof Zr&&s instanceof Zr?pt(r.Ee,s.Ee):r instanceof Jr&&s instanceof Jr}(e.transform,t.transform)}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Bs{}function Ya(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new hd(e.key,Ft.none()):new qs(e.key,e.data,Ft.none());{const n=e.data,r=lt.empty();let s=new Z(et.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new er(e.key,r,new It(s.toArray()),Ft.none())}}function ad(e,t,n){e instanceof qs?function(s,i,o){const a=s.value.clone(),h=zi(s.fieldTransforms,i,o.transformResults);a.setAll(h),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof er?function(s,i,o){if(!mn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zi(s.fieldTransforms,i,o.transformResults),h=i.data;h.setAll(Xa(s)),h.setAll(a),i.convertToFoundDocument(o.version,h).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Se(e,t,n,r){return e instanceof qs?function(i,o,a,h){if(!mn(i.precondition,o))return a;const u=i.value.clone(),c=Ki(i.fieldTransforms,h,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof er?function(i,o,a,h){if(!mn(i.precondition,o))return a;const u=Ki(i.fieldTransforms,h,o),c=o.data;return c.setAll(Xa(i)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(i,o,a){return mn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function ji(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&re(r,s,(i,o)=>od(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qs extends Bs{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class er extends Bs{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function zi(e,t,n){const r=new Map;B(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,sd(o,a,n[s]))}return r}function Ki(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rd(i,o,t))}return r}class hd extends Bs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&ad(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Se(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Se(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=za();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const h=Ya(o,a);h!==null&&r.set(s.key,h),o.isValidDocument()||o.convertToNoDocument(T.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&re(this.mutations,t.mutations,(n,r)=>ji(n,r))&&re(this.baseMutations,t.baseMutations,(n,r)=>ji(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,I;function Ja(e){if(e===void 0)return Et("GRPC error has no .code"),f.UNKNOWN;switch(e){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return w()}}(I=L||(L={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Xt([4294967295,4294967295],0);function Hi(e){const t=dd().encode(e),n=new _l;return n.update(t),new Uint8Array(n.digest())}function Gi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Xt([n,r],0),new Xt([s,i],0)]}class $s{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new we(`Invalid padding: ${n}`);if(r<0)throw new we(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new we(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new we(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Xt.fromNumber(this.Ae)}Ve(t,n,r){let s=t.add(n.multiply(Xt.fromNumber(r)));return s.compare(fd)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Hi(t),[r,s]=Gi(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new $s(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Hi(t),[r,s]=Gi(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class we extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,tn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new nr(T.min(),s,new O(V),Vt(),A())}}class tn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new tn(r,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n,r,s){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=s}}class Za{constructor(t,n){this.targetId=t,this.ye=n}}class th{constructor(t,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qi{constructor(){this.we=0,this.Se=Yi(),this.be=tt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=A(),n=A(),r=A();return this.Se.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:w()}}),new tn(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=Yi()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class pd{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Vt(),this.Ue=Wi(),this.We=new O(V)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:w()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(t){const n=t.targetId,r=t.ye.count,s=this.et(n);if(s){const i=s.target;if(Wr(i))if(r===0){const o=new v(i.path);this.je(n,o,Y.newNoDocument(o,T.min()))}else B(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(t),h=a?this.rt(a,t,o):1;if(h!==0){this.Ze(n);const u=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qt(r).toUint8Array()}catch(h){if(h instanceof ba)return ne("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{a=new $s(o,s,i)}catch(h){return ne(h instanceof we?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.ot(t,n.targetId)?0:2}ot(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Wr(a.target)){const h=new v(a.target.path);this.$e.get(h)!==null||this.ut(o,h)||this.je(o,h,Y.newNoDocument(h,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=A();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(h=>{const u=this.et(h);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const s=new nr(t,n,this.We,this.$e,r);return this.$e=Vt(),this.Ue=Wi(),this.We=new O(V),s}ze(t,n){if(!this.Ye(t))return;const r=this.ut(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const s=this.Je(t);this.ut(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new Qi,this.Ke.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Z(V),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new Qi),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}ut(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function Wi(){return new O(v.comparator)}function Yi(){return new O(v.comparator)}const md=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_d=(()=>({and:"AND",or:"OR"}))();class yd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ts(e,t){return e.useProto3Json||Xn(t)?t:{value:t}}function es(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jt(e){return B(!!e),T.fromTimestamp(function(n){const r=St(n);return new $(r.seconds,r.nanos)}(e))}function nh(e,t){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function rh(e){const t=M.fromString(e);return B(ah(t)),t}function Ar(e,t){const n=rh(t);if(n.get(1)!==e.databaseId.projectId)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(sh(n))}function ns(e,t){return nh(e.databaseId,t)}function vd(e){const t=rh(e);return t.length===4?M.emptyPath():sh(t)}function Xi(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sh(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ed(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(B(c===void 0||typeof c=="string"),tt.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),tt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:Ja(u.code);return new _(c,u.message||"")}(o);n=new th(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ar(e,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):T.min(),a=new lt({mapValue:{fields:r.document.fields}}),h=Y.newFoundDocument(s,i,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new gn(u,c,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ar(e,r.document),i=r.readTime?Jt(r.readTime):T.min(),o=Y.newNoDocument(s,i),a=r.removedTargetIds||[];n=new gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ar(e,r.document),i=r.removedTargetIds||[];n=new gn([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ld(s,i),a=r.targetId;n=new Za(a,o)}}return n}function Td(e,t){return{documents:[ns(e,t.path)]}}function wd(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ns(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ns(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(h){if(h.length!==0)return oh(ut.create(h,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(h){if(h.length!==0)return h.map(u=>function(l){return{field:Ht(l.field),direction:Rd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ts(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function Id(e){let t=vd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(l){const p=ih(l);return p instanceof ut&&Ma(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(p=>function(D){return new Re(Gt(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(l){let p;return p=typeof l=="object"?l.value:l,Xn(p)?null:p}(n.limit));let h=null;n.startAt&&(h=function(l){const p=!!l.before,m=l.values||[];return new bn(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const p=!l.before,m=l.values||[];return new bn(m,p)}(n.endAt)),Gl(t,s,o,i,a,"F",h,u)}function Ad(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ih(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gt(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gt(n.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gt(n.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gt(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Gt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ut.create(n.compositeFilter.filters.map(r=>ih(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(e):w()}function Rd(e){return md[e]}function Pd(e){return gd[e]}function Cd(e){return _d[e]}function Ht(e){return{fieldPath:e.canonicalString()}}function Gt(e){return et.fromServerFormat(e.fieldPath)}function oh(e){return e instanceof U?function(n){if(n.op==="=="){if(Li(n.value))return{unaryFilter:{field:Ht(n.field),op:"IS_NAN"}};if(Oi(n.value))return{unaryFilter:{field:Ht(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Li(n.value))return{unaryFilter:{field:Ht(n.field),op:"IS_NOT_NAN"}};if(Oi(n.value))return{unaryFilter:{field:Ht(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(n.field),op:Pd(n.op),value:n.value}}}(e):e instanceof ut?function(n){const r=n.getFilters().map(s=>oh(s));return r.length===1?r[0]:{compositeFilter:{op:Cd(n.op),filters:r}}}(e):w()}function ah(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,r,s,i=T.min(),o=T.min(),a=tt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=h}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.ht=t}}function Vd(e){const t=Id({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Nn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this._n=new bd}addToCollectionParentIndex(t,n){return this._n.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Ct.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class bd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Z(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Z(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new oe(0)}static Bn(){return new oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.changes=new fe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Se(r.mutation,s,It.empty(),$.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,A()).next(()=>r))}getLocalViewOfDocuments(t,n,r=A()){const s=xt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Te();return i.forEach((a,h)=>{o=o.insert(a,h.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=xt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,A()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Vt();const o=Ce(),a=function(){return Ce()}();return n.forEach((h,u)=>{const c=r.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof er)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Se(c.mutation,u,c.mutation.getFieldMask(),$.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(t,i).next(h=>(h.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var l;return a.set(u,new kd(c,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ce();let s=new O((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(h=>{const u=n.get(h);if(u===null)return;let c=r.get(h)||It.empty();c=a.applyToLocalView(u,c),r.set(h,c);const l=(s.get(a.batchId)||A()).add(h);s=s.insert(a.batchId,l)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const h=a.getNext(),u=h.key,c=h.value,l=za();c.forEach(p=>{if(!i.has(p)){const m=Ya(n.get(p),r.get(p));m!==null&&l.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ba(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve(xt());let a=-1,h=i;return o.next(u=>d.forEach(u,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(c)?d.resolve():this.remoteDocumentCache.getEntry(t,c).next(p=>{h=h.insert(c,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,h,u,A())).next(c=>({batchId:a,changes:Jl(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let s=Te();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Te();return this.indexManager.getCollectionParents(t,s).next(o=>d.forEach(o,a=>{const h=function(c,l){return new Ze(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r).next(u=>{u.forEach((c,l)=>{i=i.insert(c,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,h)=>{const u=h.getKey();i.get(u)===null&&(i=i.insert(u,Y.newInvalidDocument(u)))});let o=Te();return i.forEach((a,h)=>{const u=s.get(a);u!==void 0&&Se(u.mutation,h,It.empty(),$.now()),Zn(n,h)&&(o=o.insert(a,h))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return d.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Vd(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.overlays=new O(v.comparator),this.hr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=xt();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.It(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=xt(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,u=h.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new O((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=xt(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xt(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return d.resolve(a)}It(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cd(n,r));let i=this.hr.get(n);i===void 0&&(i=A(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.Pr=new Z(q.Ir),this.Tr=new Z(q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new q(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new q(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new v(new M([])),r=new q(n,t),s=new q(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new v(new M([])),r=new q(n,t),s=new q(n,t+1);let i=A();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return v.comparator(t.key,n.key)||V(t.pr,n.pr)}static Er(t,n){return V(t.pr,n.pr)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Z(q.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ud(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),s=new q(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(V);return n.forEach(s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const o=new q(new v(i),0);let a=new Z(V);return this.wr.forEachWhile(h=>{const u=h.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(h.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){B(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(n.mutations,s=>{const i=new q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new q(n,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}vr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.Cr=t,this.docs=function(){return new O(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let r=Vt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Y.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Vt();const o=n.path,a=new v(o.child("")),h=this.docs.getIteratorFrom(a);for(;h.hasNext();){const{key:u,value:{document:c}}=h.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Dl(Vl(c),r)<=0||(s.has(c.key)||Zn(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){w()}Fr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Ud(this)}getSize(t){return d.resolve(this.size)}}class Ud extends Nd{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.persistence=t,this.Mr=new fe(n=>Ls(n),Fs),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Or=0,this.Nr=new js,this.targetCount=0,this.Br=oe.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),d.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new oe(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.qn(n),d.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n){this.Lr={},this.overlays={},this.kr=new ks(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Bd(this),this.indexManager=new Dd,this.remoteDocumentCache=function(s){return new Fd(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Sd(n),this.$r=new xd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Od,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Ld(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const s=new $d(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return d.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class $d extends Nl{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.zr=new js,this.jr=null}static Hr(t){return new zs(t)}get Jr(){if(this.jr)return this.jr;throw w()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),d.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=v.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,T.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return d.or([()=>d.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=A(),s=A();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ks(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.$i=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){return this.Wi(t,n).next(i=>i||this.Gi(t,n,s,r)).next(i=>i||this.zi(t,n))}Wi(t,n){if(qi(n))return d.resolve(null);let r=Tt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nn(n,null,"F"),r=Tt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=A(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(h=>{const u=this.ji(n,a);return this.Hi(n,u,o,h.readTime)?this.Wi(t,Nn(n,null,"F")):this.Ji(t,u,n,h)}))})))}Gi(t,n,r,s){return qi(n)||s.isEqual(T.min())?this.zi(t,n):this.Ui.getDocuments(t,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(t,n):(bi()<=S.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.Ji(t,o,n,Sl(s,-1)))})}ji(t,n){let r=new Z($a(t));return n.forEach((s,i)=>{Zn(t,i)&&(r=r.add(i))}),r}Hi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(t,n){return bi()<=S.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ui.getDocumentsMatchingQuery(t,n,Ct.min())}Ji(t,n,r,s){return this.Ui.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n,r,s){this.persistence=t,this.Yi=n,this.serializer=s,this.Zi=new O(V),this.Xi=new fe(i=>Ls(i),Fs),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(r)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Md(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Zi))}}function Kd(e,t,n,r){return new zd(e,t,n,r)}async function hh(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let h=A();for(const u of s){o.push(u.batchId);for(const c of u.mutations)h=h.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)h=h.add(c.key)}return n.localDocuments.getDocuments(r,h).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function uh(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Hd(e,t){const n=P(e),r=t.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];t.targetChanges.forEach((c,l)=>{const p=s.get(l);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,c.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(i,c.addedDocuments,l)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?m=m.withResumeToken(tt.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),s=s.insert(l,m),function(N,C,rt){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:rt.addedDocuments.size+rt.modifiedDocuments.size+rt.removedDocuments.size>0}(p,m,c)&&a.push(n.Qr.updateTargetData(i,m))});let h=Vt(),u=A();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Gd(i,o,t.documentUpdates).next(c=>{h=c.ss,u=c.os})),!r.isEqual(T.min())){const c=n.Qr.getLastRemoteSnapshotVersion(i).next(l=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,h,u)).next(()=>h)}).then(i=>(n.Zi=s,i))}function Gd(e,t,n){let r=A(),s=A();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Vt();return n.forEach((a,h)=>{const u=i.get(a);h.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),h.isNoDocument()&&h.version.isEqual(T.min())?(t.removeEntry(a,h.readTime),o=o.insert(a,h)):!u.isValidDocument()||h.version.compareTo(u.version)>0||h.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(h),o=o.insert(a,h)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",h.version)}),{ss:o,os:s}})}function Qd(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new At(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(t,r.targetId)),r})}async function rs(e,t,n){const r=P(e),s=r.Zi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Zi=r.Zi.remove(t),r.Xi.delete(s.target)}function Ji(e,t,n){const r=P(e);let s=T.min(),i=A();return r.persistence.runTransaction("Execute query","readonly",o=>function(h,u,c){const l=P(h),p=l.Xi.get(c);return p!==void 0?d.resolve(l.Zi.get(p)):l.Qr.getTargetData(u,c)}(r,o,Tt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(h=>{i=h})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,t,n?s:T.min(),n?i:A())).next(a=>(Wd(r,Wl(t),a),{documents:a,_s:i})))}function Wd(e,t,n){let r=e.es.get(t)||T.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.es.set(t,r)}class Zi{constructor(){this.activeTargetIds=ed()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.Ys=new Zi,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,n,r){this.Zs[t]=n}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new Zi,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{Xs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn=null;function Rr(){return fn===null?fn=function(){return 268435456+Math.round(2147483648*Math.random())}():fn++,"0x"+fn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class tf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=Rr(),h=this.po(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,h,s);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,i,o),this.wo(n,h,u,s).then(c=>(y("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ne("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",h,"request:",s),c})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+de}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=Jd[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,n,r,s){const i=Rr();return new Promise((o,a)=>{const h=new gl;h.setWithCredentials(!0),h.listenOnce(pl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case wr.NO_ERROR:const c=h.getResponseJson();y(Q,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case wr.TIMEOUT:y(Q,`RPC '${t}' ${i} timed out`),a(new _(f.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const l=h.getStatus();if(y(Q,`RPC '${t}' ${i} failed with status:`,l,"response text:",h.getResponseText()),l>0){let p=h.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const D=function(C){const rt=C.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(rt)>=0?rt:f.UNKNOWN}(m.status);a(new _(D,m.message))}else a(new _(f.UNKNOWN,"Server responded with status "+h.getStatus()))}else a(new _(f.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{y(Q,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);y(Q,`RPC '${t}' ${i} sending request:`,s),h.send(n,"POST",u,r,15)})}bo(t,n,r){const s=Rr(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=dl(),a=fl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(h.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(h.useFetchStreams=!0),this.yo(h.initMessageHeaders,n,r),h.encodeInitMessageHeaders=!0;const c=i.join("");y(Q,`Creating RPC '${t}' stream ${s}: ${c}`,h);const l=o.createWebChannel(c,h);let p=!1,m=!1;const D=new Zd({_o:C=>{m?y(Q,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(p||(y(Q,`Opening RPC '${t}' stream ${s} transport.`),l.open(),p=!0),y(Q,`RPC '${t}' stream ${s} sending:`,C),l.send(C))},ao:()=>l.close()}),N=(C,rt,mt)=>{C.listen(rt,gt=>{try{mt(gt)}catch(_t){setTimeout(()=>{throw _t},0)}})};return N(l,cn.EventType.OPEN,()=>{m||y(Q,`RPC '${t}' stream ${s} transport opened.`)}),N(l,cn.EventType.CLOSE,()=>{m||(m=!0,y(Q,`RPC '${t}' stream ${s} transport closed`),D.To())}),N(l,cn.EventType.ERROR,C=>{m||(m=!0,ne(Q,`RPC '${t}' stream ${s} transport errored:`,C),D.To(new _(f.UNAVAILABLE,"The operation could not be completed")))}),N(l,cn.EventType.MESSAGE,C=>{var rt;if(!m){const mt=C.data[0];B(!!mt);const gt=mt,_t=gt.error||((rt=gt[0])===null||rt===void 0?void 0:rt.error);if(_t){y(Q,`RPC '${t}' stream ${s} received error:`,_t);const me=_t.status;let ge=function(Nh){const ai=L[Nh];if(ai!==void 0)return Ja(ai)}(me),oi=_t.message;ge===void 0&&(ge=f.INTERNAL,oi="Unknown error status: "+me+" with message "+_t.message),m=!0,D.To(new _(ge,oi)),l.close()}else y(Q,`RPC '${t}' stream ${s} received:`,mt),D.Eo(mt)}}),N(a,ml.STAT_EVENT,C=>{C.stat===Vi.PROXY?y(Q,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===Vi.NOPROXY&&y(Q,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.Io()},0),D}}function Pr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){return new yd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),t())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,n,r,s,i,o,a,h){this.oi=t,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new ch(t,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,t!==4?this.Uo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(n)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{t(()=>{const s=new _(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(t,n){const r=this.t_(this.Qo);this.stream=this.i_(t,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return n=>{this.oi.enqueueAndForget(()=>this.Qo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends ef{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(t,n){return this.connection.bo("Listen",t,n)}onMessage(t){this.Uo.reset();const n=Ed(this.serializer,t),r=function(i){if(!("targetChange"in i))return T.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?T.min():o.readTime?Jt(o.readTime):T.min()}(t);return this.listener.s_(n,r)}o_(t){const n={};n.database=Xi(this.serializer),n.addTarget=function(i,o){let a;const h=o.target;if(a=Wr(h)?{documents:Td(i,h)}:{query:wd(i,h)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eh(i,o.resumeToken);const u=ts(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(T.min())>0){a.readTime=es(i,o.snapshotVersion.toTimestamp());const u=ts(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Ad(this.serializer,t);r&&(n.labels=r),this.Yo(n)}__(t){const n={};n.database=Xi(this.serializer),n.removeTarget=t,this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(f.UNKNOWN,s.toString())})}So(t,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(f.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class sf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(t){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,t==="Online"&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Et(n),this.R_=!1):y("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{nn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(h){const u=P(h);u.S_.add(4),await en(u),u.v_.set("Unknown"),u.S_.delete(4),await sr(u)}(this))})}),this.v_=new sf(r,s)}}async function sr(e){if(nn(e))for(const t of e.b_)await t(!0)}async function en(e){for(const t of e.b_)await t(!1)}function lh(e,t){const n=P(e);n.w_.has(t.targetId)||(n.w_.set(t.targetId,t),Qs(n)?Gs(n):pe(n).Go()&&Hs(n,t))}function dh(e,t){const n=P(e),r=pe(n);n.w_.delete(t),r.Go()&&fh(n,t),n.w_.size===0&&(r.Go()?r.Ho():nn(n)&&n.v_.set("Unknown"))}function Hs(e,t){if(e.C_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}pe(e).o_(t)}function fh(e,t){e.C_.Le(t),pe(e).__(t)}function Gs(e){e.C_=new pd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.w_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),pe(e).start(),e.v_.V_()}function Qs(e){return nn(e)&&!pe(e).Wo()&&e.w_.size>0}function nn(e){return P(e).S_.size===0}function ph(e){e.C_=void 0}async function af(e){e.w_.forEach((t,n)=>{Hs(e,t)})}async function hf(e,t){ph(e),Qs(e)?(e.v_.g_(t),Gs(e)):e.v_.set("Unknown")}async function uf(e,t,n){if(e.v_.set("Online"),t instanceof th&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await eo(e,r)}else if(t instanceof gn?e.C_.Ge(t):t instanceof Za?e.C_.Xe(t):e.C_.He(t),!n.isEqual(T.min()))try{const r=await uh(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((h,u)=>{if(h.resumeToken.approximateByteSize()>0){const c=i.w_.get(u);c&&i.w_.set(u,c.withResumeToken(h.resumeToken,o))}}),a.targetMismatches.forEach((h,u)=>{const c=i.w_.get(h);if(!c)return;i.w_.set(h,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),fh(i,h);const l=new At(c.target,h,u,c.sequenceNumber);Hs(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await eo(e,r)}}async function eo(e,t,n){if(!Xe(t))throw t;e.S_.add(1),await en(e),e.v_.set("Offline"),n||(n=()=>uh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.S_.delete(1),await sr(e)})}async function no(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=nn(n);n.S_.add(3),await en(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.S_.delete(3),await sr(n)}async function cf(e,t){const n=P(e);t?(n.S_.delete(2),await sr(n)):t||(n.S_.add(2),await en(n),n.v_.set("Unknown"))}function pe(e){return e.F_||(e.F_=function(n,r,s){const i=P(n);return i.T_(),new nf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:af.bind(null,e),lo:hf.bind(null,e),s_:uf.bind(null,e)}),e.b_.push(async t=>{t?(e.F_.jo(),Qs(e)?Gs(e):e.v_.set("Unknown")):(await e.F_.stop(),ph(e))})),e.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Ws(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mh(e,t){if(Et("AsyncQueue",`${t}: ${e}`),Xe(e))return new _(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.comparator=t?(n,r)=>t(n,r)||v.comparator(n.key,r.key):(n,r)=>v.comparator(n.key,r.key),this.keyedMap=Te(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new Zt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Zt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Zt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.x_=new O(v.comparator)}track(t){const n=t.doc.key,r=this.x_.get(n);r?t.type!==0&&r.type===3?this.x_=this.x_.insert(n,t):t.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.x_=this.x_.remove(n):t.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:t.doc}):w():this.x_=this.x_.insert(n,t)}O_(){const t=[];return this.x_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ae{constructor(t,n,r,s,i,o,a,h,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ae(t,n,Zt.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.N_=void 0,this.listeners=[]}}class df{constructor(){this.queries=new fe(t=>qa(t),Jn),this.onlineState="Unknown",this.B_=new Set}}async function ff(e,t){const n=P(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lf),s)try{i.N_=await n.onListen(r)}catch(o){const a=mh(o,`Initialization of query '${Xr(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.L_(n.onlineState),i.N_&&t.k_(i.N_)&&Ys(n)}async function pf(e,t){const n=P(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function mf(e,t){const n=P(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&Ys(n)}function gf(e,t,n){const r=P(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Ys(e){e.B_.forEach(t=>{t.next()})}class _f{constructor(t,n,r){this.query=t,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ae(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),n=!0):this.W_(t,this.onlineState)&&(this.G_(t),n=!0),this.K_=t,n}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),n=!0),n}W_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}U_(t){if(t.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(t){t=ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.key=t}}class _h{constructor(t){this.key=t}}class yf{constructor(t,n){this.query=t,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=A(),this.mutatedKeys=A(),this.ia=$a(t),this.sa=new Zt(this.ia)}get oa(){return this.ta}_a(t,n){const r=n?n.aa:new ro,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,l)=>{const p=s.get(c),m=Zn(this.query,l)?l:null,D=!!p&&this.mutatedKeys.has(p.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?D!==N&&(r.track({type:3,doc:m}),C=!0):this.ua(p,m)||(r.track({type:2,doc:m}),C=!0,(h&&this.ia(m,h)>0||u&&this.ia(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),C=!0):p&&!m&&(r.track({type:1,doc:p}),C=!0,(h||u)&&(a=!0)),C&&(m?(o=o.add(m),i=N?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const i=t.aa.O_();i.sort((u,c)=>function(p,m){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return D(p)-D(m)}(u.type,c.type)||this.ia(u.doc,c.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,h=a!==this.na;return this.na=a,i.length!==0||h?{snapshot:new ae(this.query,t.sa,s,i,t.mutatedKeys,a===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new ro,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=A(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return t.forEach(r=>{this.ra.has(r)||n.push(new _h(r))}),this.ra.forEach(r=>{t.has(r)||n.push(new gh(r))}),n}Ia(t){this.ta=t._s,this.ra=A();const n=this._a(t.documents);return this.applyChanges(n,!0)}Ta(){return ae.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class vf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ef{constructor(t){this.key=t,this.Ea=!1}}class Tf{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new fe(a=>qa(a),Jn),this.Ra=new Map,this.Va=new Set,this.ma=new O(v.comparator),this.fa=new Map,this.ga=new js,this.pa={},this.ya=new Map,this.wa=oe.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function wf(e,t){const n=Vf(e);let r,s;const i=n.Aa.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await Qd(n.localStore,Tt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await If(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&lh(n.remoteStore,o)}return s}async function If(e,t,n,r,s){e.ba=(l,p,m)=>async function(N,C,rt,mt){let gt=C.view._a(rt);gt.Hi&&(gt=await Ji(N.localStore,C.query,!1).then(({documents:ge})=>C.view._a(ge,gt)));const _t=mt&&mt.targetChanges.get(C.targetId),me=C.view.applyChanges(gt,N.isPrimaryClient,_t);return io(N,C.targetId,me.ha),me.snapshot}(e,l,p,m);const i=await Ji(e.localStore,t,!0),o=new yf(t,i._s),a=o._a(i.documents),h=tn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,h);io(e,n,u.ha);const c=new vf(t,n,o);return e.Aa.set(t,c),e.Ra.has(n)?e.Ra.get(n).push(t):e.Ra.set(n,[t]),u.snapshot}async function Af(e,t){const n=P(e),r=n.Aa.get(t),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Jn(i,t))),void n.Aa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),dh(n.remoteStore,r.targetId),ss(n,r.targetId)}).catch(Ns)):(ss(n,r.targetId),await rs(n.localStore,r.targetId,!0))}async function yh(e,t){const n=P(e);try{const r=await Hd(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?B(o.Ea):s.removedDocuments.size>0&&(B(o.Ea),o.Ea=!1))}),await Eh(n,r,t)}catch(r){await Ns(r)}}function so(e,t,n){const r=P(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const h=P(o);h.onlineState=a;let u=!1;h.queries.forEach((c,l)=>{for(const p of l.listeners)p.L_(a)&&(u=!0)}),u&&Ys(h)}(r.eventManager,t),s.length&&r.da.s_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rf(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.fa.get(t),i=s&&s.key;if(i){let o=new O(v.comparator);o=o.insert(i,Y.newNoDocument(i,T.min()));const a=A().add(i),h=new nr(T.min(),new Map,new O(V),o,a);await yh(r,h),r.ma=r.ma.remove(i),r.fa.delete(t),Xs(r)}else await rs(r.localStore,t,!1).then(()=>ss(r,t,n)).catch(Ns)}function ss(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ra.get(t))e.Aa.delete(r),n&&e.da.Da(r,n);e.Ra.delete(t),e.isPrimaryClient&&e.ga.Vr(t).forEach(r=>{e.ga.containsKey(r)||vh(e,r)})}function vh(e,t){e.Va.delete(t.path.canonicalString());const n=e.ma.get(t);n!==null&&(dh(e.remoteStore,n),e.ma=e.ma.remove(t),e.fa.delete(n),Xs(e))}function io(e,t,n){for(const r of n)r instanceof gh?(e.ga.addReference(r.key,t),Pf(e,r)):r instanceof _h?(y("SyncEngine","Document no longer in limbo: "+r.key),e.ga.removeReference(r.key,t),e.ga.containsKey(r.key)||vh(e,r.key)):w()}function Pf(e,t){const n=t.key,r=n.path.canonicalString();e.ma.get(n)||e.Va.has(r)||(y("SyncEngine","New document in limbo: "+n),e.Va.add(r),Xs(e))}function Xs(e){for(;e.Va.size>0&&e.ma.size<e.maxConcurrentLimboResolutions;){const t=e.Va.values().next().value;e.Va.delete(t);const n=new v(M.fromString(t)),r=e.wa.next();e.fa.set(r,new Ef(n)),e.ma=e.ma.insert(n,r),lh(e.remoteStore,new At(Tt(Fa(n.path)),r,"TargetPurposeLimboResolution",ks.ae))}}async function Eh(e,t,n){const r=P(e),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,h)=>{o.push(r.ba(h,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=Ks.Ki(h.targetId,u);i.push(c)}}))}),await Promise.all(o),r.da.s_(s),await async function(h,u){const c=P(h);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(u,p=>d.forEach(p.qi,m=>c.persistence.referenceDelegate.addReference(l,p.targetId,m)).next(()=>d.forEach(p.Qi,m=>c.persistence.referenceDelegate.removeReference(l,p.targetId,m)))))}catch(l){if(!Xe(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const p=l.targetId;if(!l.fromCache){const m=c.Zi.get(p),D=m.snapshotVersion,N=m.withLastLimboFreeSnapshotVersion(D);c.Zi=c.Zi.insert(p,N)}}}(r.localStore,i))}async function Cf(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await hh(n.localStore,t);n.currentUser=t,function(i,o){i.ya.forEach(a=>{a.forEach(h=>{h.reject(new _(f.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Eh(n,r.rs)}}function Sf(e,t){const n=P(e),r=n.fa.get(t);if(r&&r.Ea)return A().add(r.key);{let s=A();const i=n.Ra.get(t);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function Vf(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=yh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rf.bind(null,t),t.da.s_=mf.bind(null,t.eventManager),t.da.Da=gf.bind(null,t.eventManager),t}class oo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Kd(this.persistence,new jd,t.initialUser,this.serializer)}createPersistence(t){return new qd(zs.Hr,this.serializer)}createSharedClientState(t){return new Yd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Df{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>so(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cf.bind(null,this.syncEngine),await cf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new df}()}createDatastore(t){const n=rr(t.databaseInfo.databaseId),r=function(i){return new tf(i)}(t.databaseInfo);return function(i,o,a,h){return new rf(i,o,a,h)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new of(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>so(this.syncEngine,n,0),function(){return to.v()?new to:new Xd}())}createSyncEngine(t,n){return function(s,i,o,a,h,u,c){const l=new Tf(s,i,o,a,h,u);return c&&(l.Sa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=P(n);y("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await en(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):Et("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=W.UNAUTHENTICATED,this.clientId=Pl.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=mh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Cr(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ao(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Mf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>no(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>no(t.remoteStore,i)),e._onlineComponents=t}function kf(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Mf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!kf(n))throw n;ne("Error using user provided cache. Falling back to memory cache: "+n),await Cr(e,new oo)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Cr(e,new oo);return e._offlineComponents}async function xf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ao(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ao(e,new Df))),e._onlineComponents}async function Of(e){const t=await xf(e),n=t.eventManager;return n.onListen=wf.bind(null,t.syncEngine),n.onUnlisten=Af.bind(null,t.syncEngine),n}function Lf(e,t,n={}){const r=new Lt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,h,u){const c=new bf({next:p=>{o.enqueueAndForget(()=>pf(i,l)),p.fromCache&&h.source==="server"?u.reject(new _(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),l=new _f(a,c,{includeMetadataChanges:!0,z_:!0});return ff(i,l)}(await Of(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e,t,n){if(!n)throw new _(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Uf(e,t,n,r){if(t===!0&&r===!0)throw new _(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function uo(e){if(v.isDocumentKey(e))throw new _(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ir(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":w()}function is(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ir(e);throw new _(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Bf(e,t){if(t<=0)throw new _(f.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Uf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Js{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new co(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yl;switch(r.type){case"firstParty":return new wl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ho.get(n);r&&(y("ComponentProvider","Removing Datastore"),ho.delete(n),r.terminate())}(this),Promise.resolve()}}function qf(e,t,n,r={}){var s;const i=(e=is(e,Js))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ne("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,h;if(typeof r.mockUserToken=="string")a=r.mockUserToken,h=W.MOCK_USER;else{a=Yh(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new W(u)}e._authCredentials=new vl(new Va(a,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zt(this.firestore,t,this._query)}}class wt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class te extends zt{constructor(t,n,r){super(t,n,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new v(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function $f(e,t,...n){if(e=En(e),Ff("collection","path",t),e instanceof Js){const r=M.fromString(t,...n);return uo(r),new te(e,null,r)}{if(!(e instanceof wt||e instanceof te))throw new _(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M.fromString(t,...n));return uo(r),new te(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new ch(this,"async_queue_retry"),this.tu=()=>{const n=Pr();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const t=Pr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const n=Pr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Lt;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ja.push(t),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Xe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(t){const n=this.za.then(()=>(this.Za=!0,t().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(t,n,r){this.nu(),this.eu.indexOf(t)>-1&&(n=0);const s=Ws.createAndSchedule(this,t,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&w()}verifyOperationInProgress(){}async ou(){let t;do t=this.za,await t;while(t!==this.za)}_u(t){for(const n of this.Ja)if(n.timerId===t)return!0;return!1}au(t){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ou()})}uu(t){this.eu.push(t)}su(t){const n=this.Ja.indexOf(t);this.Ja.splice(n,1)}}class wh extends Js{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new jf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ih(this),this._firestoreClient.terminate()}}function zf(e,t){const n=typeof e=="object"?e:tc(),r=typeof e=="string"?e:t||"(default)",s=Yu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qh("firestore");i&&qf(s,...i)}return s}function Kf(e){return e._firestoreClient||Ih(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ih(e){var t,n,r;const s=e._freezeSettings(),i=function(a,h,u,c){return new xl(a,h,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Th(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Nf(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(tt.fromBase64String(t))}catch(n){throw new _(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new he(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=/^__.*__$/;function Ph(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class ti{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.Tu(t),s}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return os(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(t.length===0)throw this.Au("Document fields must not be empty");if(Ph(this.lu)&&Hf.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class Gf{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||rr(t)}mu(t,n,r,s=!1){return new ti({lu:t,methodName:n,Vu:r,path:et.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(e){const t=e._freezeSettings(),n=rr(e._databaseId);return new Gf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wf(e,t,n,r=!1){return ei(n,e.mu(r?4:3,t))}function ei(e,t){if(Ch(e=En(e)))return Xf("Unsupported field value:",t,e),Yf(e,t);if(e instanceof Rh)return function(r,s){if(!Ph(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Iu&&t.lu!==4)throw t.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let h=ei(a,s.du(o));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=En(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$.fromDate(r);return{timestampValue:es(s.serializer,i)}}if(r instanceof $){const i=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(s.serializer,i)}}if(r instanceof Zs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return{bytesValue:eh(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${ir(r)}`)}(e,t)}function Yf(e,t){const n={};return Da(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Je(e,(r,s)=>{const i=ei(s,t.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ch(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof Zs||e instanceof he||e instanceof wt||e instanceof Rh)}function Xf(e,t,n){if(!Ch(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ir(n);throw r==="an object"?t.Au(e+" a custom object"):t.Au(e+" "+r)}}const Jf=new RegExp("[~\\*/\\[\\]]");function Zf(e,t,n){if(t.search(Jf)>=0)throw os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ah(...t.split("."))._internalPath}catch{throw os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function os(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(i||o)&&(h+=" (found",i&&(h+=` in field ${r}`),o&&(h+=` in document ${s}`),h+=")"),new _(f.INVALID_ARGUMENT,a+e+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ni("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tp extends Sh{data(){return super.data()}}function ni(e,t){return typeof t=="string"?Zf(e,t):t instanceof Ah?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ri{}class Vh extends ri{}function np(e,t,...n){let r=[];t instanceof ri&&r.push(t),r=r.concat(n),function(i){const o=i.filter(h=>h instanceof si).length,a=i.filter(h=>h instanceof or).length;if(o>1||o>0&&a>0)throw new _(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class or extends Vh{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new or(t,n,r)}_apply(t){const n=this._parse(t);return Dh(t._query,n),new zt(t.firestore,t.converter,Yr(t._query,n))}_parse(t){const n=Qf(t.firestore);return function(i,o,a,h,u,c,l){let p;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new _(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){po(l,c);const m=[];for(const D of l)m.push(fo(h,i,D));p={arrayValue:{values:m}}}else p=fo(h,i,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||po(l,c),p=Wf(a,o,l,c==="in"||c==="not-in");return U.create(u,c,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function lo(e,t,n){const r=t,s=ni("where",e);return or._create(s,r,n)}class si extends ri{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new si(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ut.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const h of a)Dh(o,h),o=Yr(o,h)}(t._query,n),new zt(t.firestore,t.converter,Yr(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ii extends Vh{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new ii(t,n,r)}_apply(t){return new zt(t.firestore,t.converter,Nn(t._query,this._limit,this._limitType))}}function rp(e){return Bf("limit",e),ii._create("limit",e,"F")}function fo(e,t,n){if(typeof(n=En(n))=="string"){if(n==="")throw new _(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ba(t)&&n.indexOf("/")!==-1)throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(M.fromString(n));if(!v.isDocumentKey(r))throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xi(e,new v(r))}if(n instanceof wt)return xi(e,n._key);throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ir(n)}.`)}function po(e,t){if(!Array.isArray(e)||e.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Dh(e,t){if(t.isInequality()){const r=Us(e),s=t.field;if(r!==null&&!r.isEqual(s))throw new _(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Ua(e);i!==null&&sp(e,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function sp(e,t,n){if(!n.isEqual(t))throw new _(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ip{convertValue(t,n="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw w()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Je(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Zs(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=xs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Be(t));default:return null}}convertTimestamp(t){const n=St(t);return new $(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=M.fromString(t);B(ah(r));const s=new qe(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(n)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class op extends Sh{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new _n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(ni("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _n extends op{data(t={}){return super.data(t)}}class ap{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new pn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new _n(this._firestore,this._userDataWriter,r.key,r,new pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const h=new _n(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:h,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const h=new _n(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:hp(a.type),doc:h,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}class up extends ip{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function cp(e){e=is(e,zt);const t=is(e.firestore,wh),n=Kf(t),r=new up(t);return ep(e._query),Lf(n,e._query).then(s=>new ap(t,r,e,s))}(function(t,n=!0){(function(s){de=s})(Zu),wn(new Ve("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new wh(new El(r.getProvider("auth-internal")),new Al(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(u.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Wt(Di,"4.1.2",t),Wt(Di,"4.1.2","esm2017")})();async function lp(e,t){const r=Ao({apiKey:"AIzaSyA5EIpoxvITdhlp2UP9GdR75MLFzT5-mp0",authDomain:"pegasus-fdff4.firebaseapp.com",projectId:"pegasus-fdff4",storageBucket:"pegasus-fdff4.appspot.com",messagingSenderId:"548426755097",appId:"1:548426755097:web:577eb663349ff4b7004e88"}),s=zf(r),i=$f(s,"puzzles"),o=np(i,lo("Rating","<=",e+t),lo("Rating",">=",e-t),rp(10));let a=[];return await cp(o).then(h=>{h.forEach(u=>{a.push(u.data())})}).catch(h=>{console.error("Error getting documents: ",h)}),a[Math.floor((Math.random()+.1)*10)-1]}const dp={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},props:{square:{type:String,required:!0},white:{type:Boolean,required:!0}},data(){return{active:!1}},methods:{async activate(){console.log("activate"),this.active=!1,await this.sleep(100),this.active=!0},async sleep(e){return new Promise(t=>setTimeout(t,e))},deactivate(){this.active=!1}},computed:{annotationStyle(){console.log(this.square);const[e,t]=this.square.split(""),n=this.white?e.charCodeAt(0)-97:8-(e.charCodeAt(0)-97),r=this.white?8-parseInt(t,10):parseInt(t,10),s=(i,o)=>(console.log(i),i>o?i:o);return{position:"absolute",left:`${(n+1)*(this.white?11:11.5)+(this.white?3:-10)}%`,top:`${s(r*(this.white?12.5:12)+(this.white?0:-10),1)}%`,transform:"translate(-50%, -50%)"}}}},fp=R("svg",{class:"checkmark absolute",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[R("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),R("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1),pp=[fp];function mp(e,t,n,r,s,i){return this.active?(st(),it("div",{key:0,style:mo(i.annotationStyle),class:"annotation z-50"},pp,4)):yn("",!0)}const gp=as(dp,[["render",mp]]),_p={data(){return{clicked:!1,className:"btn btn-square btn-primary btn-outline"}},methods:{update(){this.clicked=!this.clicked,this.clicked&&(this.className="btn btn-square btn-primary"),this.clicked||(this.className="btn btn-square btn-primary btn-outline")}}},yp={class:"flex flex-row overflow-hidden h-12"},vp=R("img",{src:Fh,class:"w-1/2"},null,-1),Ep=[vp],Tp={key:1,class:"menu bg-base-200 rounded-lg ml-4 flex-row h-full"},wp=["href"],Ip=R("span",{class:"material-symbols-outlined"}," home ",-1),Ap=[Ip],Rp=xh('<li><a class="tooltip tooltip-right rounded-lg" data-tip="Download Extension" href="https://github.com/DahliaBloom/pegasus/blob/master/public/chess.com2pegasus.crx" target="_blank"><span class="material-symbols-outlined"> Download </span></a></li><li><a class="tooltip tooltip-right rounded-lg" data-tip="Puzzles" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&amp;ab_channel=RickAstley" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"></path></svg></a></li>',2);function Pp(e,t,n,r,s,i){return st(),it("div",yp,[yn("",!0),R("button",{class:Mh(s.className),onClick:t[0]||(t[0]=(...o)=>i.update&&i.update(...o))},Ep,2),s.clicked?(st(),it("ul",Tp,[R("li",null,[R("a",{class:"tooltip tooltip-right rounded-lg","data-tip":"Home",href:e.$route.fullPath},Ap,8,wp)]),Rp])):yn("",!0)])}const Cp=as(_p,[["render",Pp]]),Sp="/pegasus/assets/fire_icon-4cd679d6.svg",bh="/pegasus/assets/award_star-45d44cb6.svg",Vp="/pegasus/assets/skull-78f874e0.svg",Dp={mounted(){document.body.classList.add("hide-overflow")},unmounted(){document.body.classList.remove("hide-overflow")},data(){return{difficulty:1e3,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",isWhite:!1,puzzle:{Themes:[]},correctMoves:[],moveNumber:0,square:"",wrongAttempts:0,history:[0],accuracy:{total:0,right:0,percent:100},streak:0,history2:[[-1,-1,-1,-1,-1]],boardAPI:null,offset:0}},async created(){await this.getNewPuzzle()},methods:{async getNewPuzzle(){this.puzzle=await lp(this.difficulty,Math.floor(Math.random()*25)),console.log(this.puzzle),this.fen=""+this.puzzle.FEN,this.puzzle.Themes=this.puzzle.Themes.split(" "),this.correctMoves=this.puzzle.Moves.split(" "),this.isWhite=this.fen.split(" ")[1]=="b",await this.makeFirstMove()},async sleep(e){return new Promise(t=>setTimeout(t,e))},async makeFirstMove(){this.fen=""+this.puzzle.FEN,this.$refs.checkMark.deactivate(),await this.sleep(500);const e=new rn(this.fen);e.move(this.correctMoves[0]),this.fen=e.fen(),this.moveNumber=1},async handleMove(e){if(console.log(e),this.correctMoves[this.moveNumber]==e.from+e.to)if(this.square=e.to,this.moveNumber==this.correctMoves.length-1){this.accuracy.total++;var t=new Audio("/src/assets/success_sound.wav");t.play(),this.wrongAttempts==0&&(this.difficulty+=20+this.streak+Math.floor(Math.random()*10),this.accuracy.right++,this.streak++,this.difficulty-=this.offset),this.wrongAttempts==1&&(this.difficulty-=5+Math.floor(Math.random()*10),this.streak=0),this.wrongAttempts>1&&(this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0),this.difficulty>3e3&&(this.difficulty=3e3),this.history.push(this.wrongAttempts),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=this.wrongAttempts,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()}else{var t=new Audio("/src/assets/click_double.wav");t.play(),this.$refs.checkMark.activate();const r=new rn(this.fen);r.move(e.from+e.to),r.move(this.correctMoves[this.moveNumber+1]),this.fen=r.fen(),this.moveNumber+=2}else{var t=new Audio("/src/assets/puzzle_fail.wav");t.play(),this.$refs.checkMark.deactivate(),this.wrongAttempts++,await this.makeFirstMove()}},async skip(){this.accuracy.total++,this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0,this.history.push(5),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=5,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()},makeHint(){console.log(this.correctMoves[this.moveNumber]),this.boardAPI.board.selectSquare(this.correctMoves[this.moveNumber][0]+this.correctMoves[this.moveNumber][1]),this.offset=10},async makeSolution(){this.$refs.checkMark.deactivate();const e=new rn(this.fen);if(e.move(this.correctMoves[this.moveNumber]),this.moveNumber++,this.fen=e.fen(),this.wrongAttempts=2,this.moveNumber==this.correctMoves.length){this.accuracy.total++;var t=new Audio("/src/assets/success_sound.wav");t.play(),await this.sleep(1e3),this.wrongAttempts==0&&(this.difficulty+=20+this.streak+Math.floor(Math.random()*10),this.accuracy.right++,this.streak++),this.wrongAttempts==1&&(this.difficulty-=5+Math.floor(Math.random()*10),this.streak=0),this.wrongAttempts>1&&(this.difficulty-=15+Math.floor(Math.random()*10),this.streak=0),this.difficulty>3e3&&(this.difficulty=3e3),this.history.push(this.wrongAttempts),this.history2[this.history2.length-1][4]!=-1&&this.history2.push([-1,-1,-1,-1,-1]),this.history2[this.history2.length-1][this.history2[this.history2.length-1].indexOf(-1)]=this.wrongAttempts,this.accuracy.percent=Math.floor(this.accuracy.right/this.accuracy.total*100),this.wrongAttempts=0,await this.getNewPuzzle()}else{var t=new Audio("/src/assets/click_double.wav");t.play(),await this.sleep(1e3);const r=new rn(this.fen);r.move(this.correctMoves[this.moveNumber]),this.moveNumber++,this.fen=r.fen()}}},watch:{difficulty(e){this.difficulty=Number(e)}},components:{Chessboard:kh,Checkmark:gp,BurgerMenuHorizontal:Cp}},bp={class:"h-screen flex justify-center items-center"},Np={class:"basis-1/4 flex flex-col h-full p-4 items-center"},kp={class:"text-xl mt-2"},Mp={class:"flex w-full justify-between p-4"},xp={class:"relative w-1/2 scale-110"},Op={class:"ml-36 relative w-1/2 scale-[3] flex items-center justify-center"},Lp=R("img",{src:Sp,class:"absolute z-10"},null,-1),Fp={class:"absolute z-20 text-black font-bold mt-5 text-xs"},Up={class:"border-accent border-4 rounded-xl m-4 w-full h-1/2"},Bp={class:"flex-grow w-full h-full"},qp={class:"flex-content"},$p={class:"scrollable-content-wrapper"},jp={class:"flex flex-row justify-around my-8"},zp={key:0,class:"scale-150",src:bh},Kp={key:1,class:"scale-150",src:Vp},Hp={key:2,class:"scale-150 invisible",src:bh},Gp={class:"w-full h-[8%] overflow-hidden"},Qp={class:"h-full w-full flex flex-wrap"},Wp={class:"badge-secondary badge p-1 mx-1"},Yp={class:"w-1/2 relative flex h-full"},Xp={class:"basis-1/4 h-full w-full py-4 flex justify-around"},Jp=R("span",{class:"material-symbols-outlined"}," lightbulb ",-1),Zp=[Jp],tm=R("span",{class:"material-symbols-outlined"}," saved_search ",-1),em=[tm],nm=R("span",{class:"material-symbols-outlined"}," skip_next ",-1),rm=[nm];function sm(e,t,n,r,s,i){const o=ar("BurgerMenuHorizontal"),a=ar("Chessboard"),h=ar("Checkmark");return st(),it("div",bp,[R("div",Np,[hr(o,{class:"w-full"}),Oh(R("input",{type:"range",min:"400",max:"3000","onUpdate:modelValue":t[0]||(t[0]=u=>s.difficulty=u),class:"range range-accent mt-4"},null,512),[[Lh,s.difficulty]]),R("p",kp,sn(s.difficulty),1),R("div",Mp,[R("div",xp,[R("div",{class:"radial-progress bg-primary text-primary-content border-4 border-primary",style:mo("--value:"+s.accuracy.percent)},sn(s.accuracy.percent),5)]),R("div",Op,[Lp,R("div",Fp,sn(s.streak),1)])]),R("div",Up,[R("div",Bp,[R("div",qp,[R("div",$p,[(st(!0),it(ur,null,cr(s.history2,u=>(st(),it("div",jp,[(st(!0),it(ur,null,cr(u,c=>(st(),it("div",null,[c==0?(st(),it("img",zp)):yn("",!0),c>0?(st(),it("img",Kp)):(st(),it("img",Hp))]))),256))]))),256))])])])]),R("div",Gp,[R("div",Qp,[(st(!0),it(ur,null,cr(s.puzzle.Themes,u=>(st(),it("div",null,[R("div",Wp,sn(u),1)]))),256))])])]),R("div",Yp,[hr(a,{onBoardCreated:t[1]||(t[1]=u=>s.boardAPI=u),onMove:i.handleMove,fen:s.fen,orientation:s.isWhite?"white":"black",ref:"chessboard"},null,8,["onMove","fen","orientation"]),hr(h,{square:s.square,ref:"checkMark",white:s.isWhite},null,8,["square","white"])]),R("div",Xp,[R("button",{onClick:t[2]||(t[2]=(...u)=>i.makeHint&&i.makeHint(...u)),class:"btn w-1/4 btn-primary mr-2 tooltip tooltip-bottom","data-tip":"Hint"},Zp),R("button",{class:"btn w-1/4 btn-primary btn-square mr-2 tooltip tooltip-bottom","data-tip":"Solution",onClick:t[3]||(t[3]=(...u)=>i.makeSolution&&i.makeSolution(...u))},em),R("button",{class:"btn w-1/4 btn-primary btn-square mr-2 tooltip-bottom tooltip","data-tip":"Skip",onClick:t[4]||(t[4]=(...u)=>i.skip&&i.skip(...u))},rm)])])}const fm=as(Dp,[["render",sm]]);export{fm as default};
