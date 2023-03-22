"use strict";var lt=Object.defineProperty;var ct=(a,t,n)=>t in a?lt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var L=(a,t,n)=>(ct(a,typeof t!="symbol"?t+"":t,n),n);var H=Object.defineProperty,J=(a,t,n)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,s$1=(a,t,n)=>(J(a,typeof t!="symbol"?t+"":t,n),n),Q=Object.defineProperty,ee=(a,t,n)=>t in a?Q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,_=(a,t,n)=>(ee(a,typeof t!="symbol"?t+"":t,n),n),K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P={},te={get exports(){return P},set exports(a){P=a}};(function(a){(function(t,n){a.exports?a.exports=n():t.log=n()})(K,function(){var t=function(){},n="undefined",l=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),c=["trace","debug","info","warn","error"];function u(p,D){var N=p[D];if(typeof N.bind=="function")return N.bind(p);try{return Function.prototype.bind.call(N,p)}catch{return function(){return Function.prototype.apply.apply(N,[p,arguments])}}}function h(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function g(p){return p==="debug"&&(p="log"),typeof console===n?!1:p==="trace"&&l?h:console[p]!==void 0?u(console,p):console.log!==void 0?u(console,"log"):t}function E(p,D){for(var N=0;N<c.length;N++){var w=c[N];this[w]=N<p?t:this.methodFactory(w,p,D)}this.log=this.debug}function f(p,D,N){return function(){typeof console!==n&&(E.call(this,D,N),this[p].apply(this,arguments))}}function m(p,D,N){return g(p)||f.apply(this,arguments)}function y(p,D,N){var w=this,et;D=D??"WARN";var O="loglevel";typeof p=="string"?O+=":"+p:typeof p=="symbol"&&(O=void 0);function nt(d){var A=(c[d]||"silent").toUpperCase();if(!(typeof window===n||!O)){try{window.localStorage[O]=A;return}catch{}try{window.document.cookie=encodeURIComponent(O)+"="+A+";"}catch{}}}function it(){var d;if(!(typeof window===n||!O)){try{d=window.localStorage[O]}catch{}if(typeof d===n)try{var A=window.document.cookie,j=A.indexOf(encodeURIComponent(O)+"=");j!==-1&&(d=/^([^;]+)/.exec(A.slice(j))[1])}catch{}return w.levels[d]===void 0&&(d=void 0),d}}function ot(){if(!(typeof window===n||!O)){try{window.localStorage.removeItem(O);return}catch{}try{window.document.cookie=encodeURIComponent(O)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}w.name=p,w.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},w.methodFactory=N||m,w.getLevel=function(){return et},w.setLevel=function(d,A){if(typeof d=="string"&&w.levels[d.toUpperCase()]!==void 0&&(d=w.levels[d.toUpperCase()]),typeof d=="number"&&d>=0&&d<=w.levels.SILENT){if(et=d,A!==!1&&nt(d),E.call(w,d,p),typeof console===n&&d<w.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+d},w.setDefaultLevel=function(d){D=d,it()||w.setLevel(d,!1)},w.resetLevel=function(){w.setLevel(D,!1),ot()},w.enableAll=function(d){w.setLevel(w.levels.TRACE,d)},w.disableAll=function(d){w.setLevel(w.levels.SILENT,d)};var x=it();x==null&&(x=D),w.setLevel(x,!1)}var S=new y,U={};S.getLogger=function(p){if(typeof p!="symbol"&&typeof p!="string"||p==="")throw new TypeError("You must supply a name when creating a logger.");var D=U[p];return D||(D=U[p]=new y(p,S.getLevel(),S.methodFactory)),D};var z=typeof window!==n?window.log:void 0;return S.noConflict=function(){return typeof window!==n&&window.log===S&&(window.log=z),S},S.getLoggers=function(){return U},S.default=S,S})})(te);var C={},ne={get exports(){return C},set exports(a){C=a}};(function(a){(function(t,n){a.exports?a.exports=n():t.prefix=n(t)})(K,function(t){var n=function(m){for(var y=1,S=arguments.length,U;y<S;y++)for(U in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],U)&&(m[U]=arguments[y][U]);return m},l={template:"[%t] %l:",levelFormatter:function(m){return m.toUpperCase()},nameFormatter:function(m){return m||"root"},timestampFormatter:function(m){return m.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")},format:void 0},c,u={},h=function(m){if(!m||!m.getLogger)throw new TypeError("Argument is not a root logger");c=m},g=function(m,y){if(!m||!m.setLevel)throw new TypeError("Argument is not a logger");var S=m.methodFactory,U=m.name||"",z=u[U]||u[""]||l;function p(D,N,w){var et=S(D,N,w),O=u[w]||u[""],nt=O.template.indexOf("%t")!==-1,it=O.template.indexOf("%l")!==-1,ot=O.template.indexOf("%n")!==-1;return function(){for(var x="",d=arguments.length,A=Array(d),j=0;j<d;j++)A[j]=arguments[j];if(U||!u[w]){var st=O.timestampFormatter(new Date),rt=O.levelFormatter(D),at=O.nameFormatter(w);O.format?x+=O.format(rt,at,st):(x+=O.template,nt&&(x=x.replace(/%t/,st)),it&&(x=x.replace(/%l/,rt)),ot&&(x=x.replace(/%n/,at))),A.length&&typeof A[0]=="string"?A[0]=x+" "+A[0]:A.unshift(x)}et.apply(void 0,A)}}return u[U]||(m.methodFactory=p),y=y||{},y.template&&(y.format=void 0),u[U]=n({},z,y),m.setLevel(m.getLevel()),c||m.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"),m},E={reg:h,apply:g},f;return t&&(f=t.prefix,E.noConflict=function(){return t.prefix===E&&(t.prefix=f),E}),E})})(ne);class R{}_(R,"LOG_LEVEL_KEY","VITE_LOG_LEVEL"),_(R,"LOG_PREFIX_KEY","VITE_LOG_PREFIX");var T=(a=>(a.LOG_LEVEL_DEBUG="DEBUG",a.LOG_LEVEL_INFO="INFO",a.LOG_LEVEL_WARN="WARN",a.LOG_LEVEL_ERROR="ERROR",a))(T||{});function re(){const a=Error.prepareStackTrace;Error.prepareStackTrace=(n,l)=>l;const t=new Error().stack.slice(1);return Error.prepareStackTrace=a,t}class F{static stringToEnumValue(t,n){return t[Object.keys(t).filter(l=>t[l].toString()===n)[0]]}static getEnvLevel(t){if(!t)return;const n=t.getEnvOrDefault(R.LOG_LEVEL_KEY,T.LOG_LEVEL_INFO),l=F.stringToEnumValue(T,n.toUpperCase());return l||console.warn("[zhi-log] LOG_LEVEL is invalid in you .env file.Must be either debug, info, warn or error, fallback to default info level"),l}static getEnvLogger(t){if(t)return t.getEnv(R.LOG_PREFIX_KEY)}}class ie{constructor(t,n,l){_(this,"consoleLogger","console"),_(this,"stackSize",1),_(this,"getLogger",h=>{let g;if(h)g=h;else{const E=this.getCallStack(),f=[],m=[];for(let y=0;y<E.length;y++){const S=E[y],U=S.getFileName()??"none";if(y>this.stackSize-1)break;const z=U+"-"+S.getLineNumber()+":"+S.getColumnNumber();f.push(z)}m.length>0&&(g=f.join(" -> "))}return(!g||g.trim().length===0)&&(g=this.consoleLogger),P.getLogger(g)}),this.stackSize=1;let c;t?c=t:c=F.getEnvLevel(l),c=c??T.LOG_LEVEL_INFO,P.setLevel(c);const u={gray:h=>h.toString(),green:h=>h.toString(),yellow:h=>h.toString(),red:h=>h.toString()};C.reg(P),C.apply(P,{format(h,g,E){const f=["["+(n??F.getEnvLogger(l)??"zhi")+"]"];switch(f.push(u.gray("[")+u.green(E).toString()+u.gray("]")),h){case T.LOG_LEVEL_DEBUG:f.push(u.gray(h.toUpperCase().toString()));break;case T.LOG_LEVEL_INFO:f.push(u.green(h.toUpperCase().toString()));break;case T.LOG_LEVEL_WARN:f.push(u.yellow(h.toUpperCase().toString()));break;case T.LOG_LEVEL_ERROR:f.push(u.red(h.toUpperCase().toString()));break}return f.push(u.green(g).toString()),f.push(u.gray(":")),f.join(" ")}})}setStackSize(t){this.stackSize=t??1}getCallStack(){let t;try{t=re()}catch{t=[]}return t}}class oe{constructor(t,n,l){_(this,"logger"),this.logger=new ie(t,n,l)}getLogger(t,n){return this.logger.setStackSize(n),this.logger.getLogger(t)}}class q extends oe{constructor(t,n,l){super(t,n,l)}getLogger(t,n){return super.getLogger(t,n)}}class V{static defaultLogger(t,n){return V.customLogFactory(void 0,void 0,t).getLogger(void 0,n)}static customLogFactory(t,n,l){return new q(t,n,l)}static customSignLogFactory(t,n){return new q(void 0,t,n)}}class Y{}s$1(Y,"LOG_STACK_SIZE",1);const X="1.0.12";class se{constructor(){s$1(this,"VERSION"),this.VERSION=X}}class ae{constructor(){s$1(this,"VERSION"),this.VERSION=X}}const b=class{constructor(){s$1(this,"getQueryString",a=>{if(!b.isInBrowser)return"";const t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){const l=t[n].split("=");if(l[0]===a)return l[1]}return""})}static isInChromeExtension(){return b.isInBrowser?window.location.href.indexOf("chrome-extension://")>-1:!1}};let I=b;s$1(I,"isInBrowser",typeof window<"u"),s$1(I,"isElectron",()=>!b.isInBrowser||!window.navigator||!window.navigator.userAgent?!1:/Electron/.test(window.navigator.userAgent)),s$1(I,"replaceUrlParam",(a,t,n)=>{n==null&&(n="");const l=new RegExp("\\b("+t+"=).*?(&|#|$)");return a.search(l)>=0?a.replace(l,"$1"+n+"$2"):(a=a.replace(/[?#]$/,""),a+(a.indexOf("?")>0?"&":"?")+t+"="+n)}),s$1(I,"setUrlParameter",(a,t,n)=>b.isInBrowser?a.includes(t)?b.replaceUrlParam(a,t,n):(a+=(a.match(/[?]/g)!=null?"&":"?")+t+"="+n,a):""),s$1(I,"reloadTabPage",a=>{setTimeout(function(){if(b.isInBrowser){const t=window.location.href;window.location.href=b.setUrlParameter(t,"tab",a)}},200)}),s$1(I,"reloadPage",()=>{setTimeout(function(){b.isInBrowser&&window.location.reload()},200)}),s$1(I,"reloadPageWithMessageCallback",(a,t)=>{t&&t(),setTimeout(function(){b.isInBrowser&&window.location.reload()},200)});class W{constructor(){s$1(this,"isInSiyuanWidget",()=>typeof window>"u"?!1:window.frameElement!=null&&window.frameElement.parentElement!=null&&window.frameElement.parentElement.parentElement!=null&&window.frameElement.parentElement.parentElement.getAttribute("data-node-id")!==""),s$1(this,"isInSiyuanNewWin",()=>typeof window>"u"?!1:typeof window.terwer<"u"),s$1(this,"isInSiyuanOrSiyuanNewWin",()=>I.isElectron)}siyuanWindow(){let t;return this.isInSiyuanWidget()?t=parent.window:this.isInSiyuanNewWin()||typeof window<"u"?t=window:t=void 0,t}}class le{constructor(){s$1(this,"serverApi"),s$1(this,"clientApi"),s$1(this,"siyuanUtil"),this.serverApi=new se,this.clientApi=new ae,this.siyuanUtil=new W}}class ce{constructor(){s$1(this,"VERSION"),this.VERSION="1.0.0"}}class ue{f(t,...n){let l=t;for(let c=0;c<n.length;c++){const u=n[c];typeof u=="string"?l=l.replace(`{${c}}`,u):l=l.replace(`{${c}}`,u.toString())}return l}}class pe{constructor(){s$1(this,"TIME_SPLIT"," "),s$1(this,"formatIsoToZhDate",(t,n,l)=>{if(!t)return"";let c=t;const u=/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm,h=c.match(u);if(h==null)return t;for(let g=0;g<h.length;g++){const E=h[g];let f=E;n&&(f=this.addHoursToDate(new Date(E),8).toISOString());const m=f.split("T"),y=m[0],S=m[1].split(".")[0];let U=y+this.TIME_SPLIT+S;l&&(U=y),c=c.replace(E,U)}return c})}addHoursToDate(t,n){return t.setTime(t.getTime()+n*60*60*1e3),t}nowZh(){return this.formatIsoToZhDate(new Date().toISOString())}nowDateZh(){return this.formatIsoToZhDate(new Date().toISOString(),!0,!0)}nowTimeZh(){return this.formatIsoToZhDate(new Date().toISOString(),!0).split(this.TIME_SPLIT)[1]}}const k=(a,t)=>{const n=Z(a),l=Z(t),c=n.pop(),u=l.pop(),h=$(n,l);return h!==0?h:c&&u?$(c.split("."),u.split(".")):c||u?c?-1:1:0},he=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Z=a=>{if(typeof a!="string")throw new TypeError("Invalid argument expected string");const t=a.match(he);if(!t)throw new Error(`Invalid argument not valid semver ('${a}' received)`);return t.shift(),t},B=a=>a==="*"||a==="x"||a==="X",M=a=>{const t=parseInt(a,10);return isNaN(t)?a:t},ge=(a,t)=>typeof a!=typeof t?[String(a),String(t)]:[a,t],fe=(a,t)=>{if(B(a)||B(t))return 0;const[n,l]=ge(M(a),M(t));return n>l?1:n<l?-1:0},$=(a,t)=>{for(let n=0;n<Math.max(a.length,t.length);n++){const l=fe(a[n]||"0",t[n]||"0");if(l!==0)return l}return 0};class de{greater(t,n){return k(t,n)>0}equal(t,n){return k(t,n)===0}lesser(t,n){return k(t,n)<0}}class ye{static getDevice(){const t=new W;return t.isInSiyuanWidget()?"Siyuan_Widget":t.isInSiyuanOrSiyuanNewWin()?"Siyuan_NewWin":I.isInChromeExtension()?"Chrome_Extension":"Chrome_Browser"}}class me{constructor(){s$1(this,"siyuanUtil"),s$1(this,"requireLib",t=>{const n=this.siyuanUtil.siyuanWindow();return n?n.require(t):require(t)}),s$1(this,"getCrossPlatformAppDataFolder",()=>{var t,n,l,c,u,h;const g=this.requireLib("path");let E;return((t=this.syProcess())==null?void 0:t.platform)==="darwin"?E=g.join((n=this.syProcess())==null?void 0:n.env.HOME,"/Library/Application Support"):((l=this.syProcess())==null?void 0:l.platform)==="win32"?E=(c=this.syProcess())==null?void 0:c.env.APPDATA:((u=this.syProcess())==null?void 0:u.platform)==="linux"&&(E=(h=this.syProcess())==null?void 0:h.env.HOME),E}),this.siyuanUtil=new W}copyFolderSync(t,n){const l=this,c=this.requireLib("fs"),u=this.requireLib("path");c.existsSync(n)||c.mkdirSync(n),c.lstatSync(t).isDirectory()&&c.readdirSync(t).forEach(function(h){const g=u.join(t,h);c.lstatSync(g).isDirectory()?l.copyFolderSync(g,u.join(n,h)):c.copyFileSync(g,u.join(n,h))})}rmFolder(t){const n=this.requireLib("fs");n.existsSync(t)&&n.rmdirSync(t,{recursive:!0})}joinPath(...t){return this.requireLib("path").join(...t)}dirname(t){return this.requireLib("path").dirname(t)}absPath(t){const n=this.requireLib("path"),l=this.dirname(t);return n.resolve(n.dirname(l),t)}syProcess(){return I.isInBrowser?window.process:process}siyuanConfPath(){const t=this.siyuanUtil.siyuanWindow();if(!t)throw new Error("Not in siyuan env");return t==null?void 0:t.siyuan.config.system.confDir}siyuanDataPath(){const t=this.siyuanUtil.siyuanWindow();if(!t)throw new Error("Not in siyuan env");return t.siyuan.config.system.dataDir}siyuanAppearancePath(){return this.requireLib("path").join(this.siyuanConfPath(),"appearance")}siyuanThemePath(){return this.requireLib("path").join(this.siyuanAppearancePath(),"themes")}zhiThemePath(){return this.requireLib("path").join(this.siyuanThemePath(),"zhi")}zhiThemeDistPath(){return this.requireLib("path").join(this.zhiThemePath(),"apps","theme","dist")}zhiBlogDistPath(){return this.requireLib("path").join(this.siyuanThemePath(),"apps","blog","dist")}zhiMiniPath(){return this.requireLib("path").join(this.siyuanThemePath(),"zhi-mini")}}class ve{constructor(){s$1(this,"strUtil"),s$1(this,"dateUtil"),s$1(this,"electronUtil"),s$1(this,"browserUtil"),s$1(this,"versionUtil"),s$1(this,"deviceUtil"),this.strUtil=new ue,this.dateUtil=new pe,this.electronUtil=new me,this.browserUtil=I,this.versionUtil=new de,this.deviceUtil=ye}}class Ee{constructor(t){s$1(this,"env"),s$1(this,"logger"),s$1(this,"siyuanApi"),s$1(this,"blogApi"),s$1(this,"common"),this.env=t,this.logger=V.defaultLogger(this.env,Y.LOG_STACK_SIZE),this.siyuanApi=new le,this.blogApi=new ce,this.common=new ve}getEnv(){if(!this.env)throw new Error("env is not initiated, please use new ZhiSdk(env) create ZhiSdk object!");return this.env}getLogger(){return this.logger}}var i=Object.defineProperty,v=(a,t,n)=>t in a?i(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,r=(a,t,n)=>(v(a,typeof t!="symbol"?t+"":t,n),n);class s{}r(s,"NODE_ENV_KEY","NODE_ENV"),r(s,"VITE_DEBUG_MODE_KEY","VITE_DEBUG_MODE");class o{constructor(t){r(this,"envMeta"),this.envMeta=t}isNodeDev(){return this.getEnv(s.NODE_ENV_KEY)==="development"}isDev(){return this.isNodeDev()||this.getBooleanEnv(s.VITE_DEBUG_MODE_KEY)}getEnv(t){let n;try{this.envMeta[t]&&(n=this.envMeta[t])}catch(l){console.error(l)}return n}getStringEnv(t){return this.getEnv(t)??""}getBooleanEnv(t){let n=!1;return this.getEnv(t)&&(n=this.getStringEnv(t).toLowerCase()==="true"),n}getEnvOrDefault(t,n){const l=this.getStringEnv(t);return l.trim().length==0?n:l}}const G=class{static zhiSdk(){if(!G.zhiSdkObj){const t=new o({VITE_LOG_LEVEL:"INFO",VITE_DEBUG_MODE:"false",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1});G.zhiSdkObj=new Ee(t);const n=G.zhiSdkObj.getLogger(),l=G.zhiSdkObj.common;n.debug(l.strUtil.f("ZhiSdk inited, components are available now,like logger, env and so on."))}return G.zhiSdkObj}};let ZhiUtil=G;L(ZhiUtil,"zhiSdkObj");const version="0.0.1";var ThemeFromEnum=(a=>(a.ThemeFrom_mini_Siyuan="zhi-mini-siyuan",a))(ThemeFromEnum||{});class HackPluginSystem{constructor(){L(this,"logger");L(this,"common");L(this,"siyuanApi");L(this,"ZHI_PLUGIN_FOLDER","zhi-plugins");L(this,"PLUGIN_FOLDER","plugins");L(this,"MANIFEST","manifest.json");L(this,"OLD_VERSION_ZERO","0.0.0");L(this,"SCRIPT","main.js");L(this,"getFileContent",async a=>{const t=this.common.electronUtil.requireLib("fs");return new Promise((n,l)=>{t.readFile(a,(c,u)=>{if(c){l(c);return}return n(u.toString("utf8"))})})});L(this,"getManifest",async a=>{const t=await this.getFileContent(a);try{return JSON.parse(t)}catch(n){return this.logger.error("Lading manifest: "+a,n),null}});L(this,"getPluginSystem",async()=>{const a=this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystem;return typeof a=="object"&&typeof a.then=="function"?a:Promise.resolve(a)});L(this,"getPluginSystemVersion",()=>this.siyuanApi.siyuanUtil.siyuanWindow().pluginSystemVersion);const a=ZhiUtil.zhiSdk();this.logger=a.getLogger(),this.common=a.common,this.siyuanApi=a.siyuanApi}isDir(a){return this.common.electronUtil.requireLib("fs").statSync(a).isDirectory()}isExists(a){try{return this.common.electronUtil.requireLib("fs").statSync(a),!0}catch{return!1}}async scanPlugins(a){const t=this,n=this.common.electronUtil.requireLib("fs"),l=this.common.electronUtil.requireLib("path");return new Promise((c,u)=>{n.readdir(a,(h,g)=>{var E;if(h){t.logger.error(h),c([]);return}c(((E=g.filter(f=>this.isDir(l.join(a,f))&&this.isExists(l.join(a,f,t.MANIFEST))&&this.isExists(l.join(a,f,t.SCRIPT))))==null?void 0:E.map(f=>l.resolve(a,f)))||[])})})}async initPluginSystem(){const pluginSystem=await this.getPluginSystem();if(pluginSystem)return this.logger.info("Plugin system already loaded by others, most likely snapshots, ignore initiation."),this.logger.debug(pluginSystem),this.logger.info("Loaded plugin system version is ",this.getPluginSystemVersion()),Promise.resolve(pluginSystem);try{this.logger.info("Undetected plugin system，initiating plugin system...");const fs=this.common.electronUtil.requireLib("fs"),path=this.common.electronUtil.requireLib("path"),data=fs.readFileSync(path.join(this.common.electronUtil.getCrossPlatformAppDataFolder(),".siyuan","plugin.js")),script=data.toString("utf8");this.logger.info("Local plugin system found, loading..."),eval(script)}catch(e){this.logger.info("Local plugin system not found, load online"),this.logger.debug("Plugin system Load error",e);const res=await fetch("https://gitee.com/zuoez02/siyuan-plugin-system/raw/main/main.js",{cache:"no-cache"}),sc=await res.text();this.siyuanApi.siyuanUtil.siyuanWindow().siyuanPluginScript=sc,eval(sc)}const sysv=this.getPluginSystemVersion()??"unknown";return this.logger.info(this.common.strUtil.f("Plugin system inited, version => {0}.",sysv)),this.getPluginSystem()}}class PluginSystemHook{constructor(){L(this,"logger");L(this,"common");L(this,"siyuanApi");L(this,"hack");const t=ZhiUtil.zhiSdk();this.logger=t.getLogger(),this.common=t.common,this.siyuanApi=t.siyuanApi,this.hack=new HackPluginSystem}getOldPluginInfo(t,n){let l=!1,c=!1,u=this.hack.OLD_VERSION_ZERO;const h=t.pslm.storageMangager.thirdPartyPlugins;for(const g of h)n.name===g.name&&(this.common.versionUtil.greater(n.version,g.version)&&(c=!0),u=g.version,l=!0);return{isSynced:l,oldVersion:u,isUpdate:c}}async syncZhiPlugins(t){this.logger.info("Start syncing zhi plugins ...");const n=this.common.electronUtil.requireLib("fs"),l=this.common.electronUtil.requireLib("path"),c=this.common.electronUtil.joinPath(this.common.electronUtil.zhiMiniPath(),"lib",this.hack.ZHI_PLUGIN_FOLDER);this.logger.debug("Zhi plugins folder=>",c);const u=this.common.electronUtil.joinPath(this.common.electronUtil.siyuanDataPath(),this.hack.PLUGIN_FOLDER);this.logger.debug("Plugins folder=>",u);let h=0,g=[];if(!n.existsSync(c))this.logger.warn("No zhi plugins found, stop!");else{g=await this.hack.scanPlugins(c);for(const E of g){const f=l.basename(E),m=E,y=l.join(u,f);this.logger.debug(this.common.strUtil.f("Try syncing zhi plugin {0}",f));const S=await this.hack.getManifest(l.join(E,this.hack.MANIFEST)),U=this.getOldPluginInfo(t,S),z=U.oldVersion;if(this.logger.info(this.common.strUtil.f("Plugin status : [{0}] isSynced=>{1}, isUpdate=>{2}, forceUpdate=>{3}, version Info: {4} -> {5}",f,U.isSynced,U.isUpdate,S.forceUpdate,z,S.version)),U.isSynced)if(U.isSynced&&U.isUpdate){if(!n.existsSync(y))throw new Error(this.common.strUtil.f("Conflict plugin exists, manifest exists but dest folder is not correct with original, please fix plugin folder name.Expected forder is=>{0}",y));this.common.strUtil.f("Do syncing, please wait..."),this.common.electronUtil.copyFolderSync(m,y),h++}else S.forceUpdate?(this.logger.warn(this.common.strUtil.f("Find forceUpdate flag in manifest.json, try forcing update plugin, [{0}] {1}.This flag is development only, before publish plugin, you should remove this flag from manifest.json!",f,S.version)),this.common.electronUtil.rmFolder(y),this.common.electronUtil.copyFolderSync(m,y),h++):this.logger.debug(this.common.strUtil.f("Already synced and the latest version [{0}] {1}",f,S.version));else{if(n.existsSync(y))throw new Error(this.common.strUtil.f("Expected forder already exists=>{0}",y));this.common.strUtil.f("Do syncing, please wait..."),this.common.electronUtil.copyFolderSync(m,y),h++}}}this.logger.info(this.common.strUtil.f("Zhi theme plugins Synced.Scaned {0}, synced {1} plugin(s).",g.length,h)),h>0&&this.logger.warn(this.common.strUtil.f("Synced {0} zhi plugins, you need to reload siyuan to take effect.",h))}async init(){const t=await this.hack.initPluginSystem();if(!t){this.logger.error("Plugin system init error, some feature may not work!");return}await this.syncZhiPlugins(t),this.logger.info("PluginSystem inited.")}}class PluginSystem{async initPluginSystem(){return await new PluginSystemHook().init(),Promise.resolve([])}}const pluginSystem=new PluginSystem;class Lifecycle{constructor(){L(this,"_dynamicImports",[])}get dynamicImports(){return this._dynamicImports}async load(){const t=[],n=await this.loadPluginSystem(),l=await this.loadWidgets(),c=await this.loadVendors();this._dynamicImports=t.concat(n).concat(l).concat(c)}async loadPluginSystem(){return await pluginSystem.initPluginSystem()}async loadWidgets(){return Promise.resolve([])}async loadVendors(){return Promise.resolve([])}}const tt=class{static async start(){return await tt.lifecycle.load(),Promise.resolve(tt.lifecycle.dynamicImports)}};let Bootstrap=tt;L(Bootstrap,"lifecycle"),(()=>{tt.lifecycle=new Lifecycle})();class Zhi{constructor(){L(this,"logger");L(this,"common");const t=ZhiUtil.zhiSdk();this.logger=t.getLogger(),this.common=t.common}async main(t){return this.logger.debug(this.common.strUtil.f("Parsing args <{0}> ...",t)),this.hello(ThemeFromEnum.ThemeFrom_mini_Siyuan),await Bootstrap.start()}hello(t){this.logger.info(this.common.strUtil.f("Hello, {0} {1} v{2}! You are from {3}","zhi","mini",version,t))}}class Theme{constructor(){L(this,"logger");L(this,"common");L(this,"siyuanApi");L(this,"zhiTheme");const t=ZhiUtil.zhiSdk();this.logger=t.getLogger(),this.common=t.common,this.siyuanApi=t.siyuanApi,this.zhiTheme=new Zhi}async init(t){try{const n=await this.zhiTheme.main([]);for(const l of n){const c=l.libpath;if(l.format!=="cjs"&&l.format!=="js"){this.logger.warn("Only cjs supported, skip this lib!",c);continue}if(t&&t!==l.runAs){this.logger.warn(this.common.strUtil.f("This lib can only run at {0}, skip!Lib is=>{1}",l.runAs,l.libpath));continue}this.logger.info("Loading dependency=>",c);let u;if(this.common.browserUtil.isInBrowser){const h=this.common.electronUtil.joinPath(this.common.electronUtil.zhiMiniPath(),c);u=this.common.electronUtil.requireLib(h)}u&&u.init&&await u.init()}this.logger.info("Theme inited.")}catch(n){this.logger.error("Theme load error=>",n)}}}function callsites(){const a=Error.prepareStackTrace;Error.prepareStackTrace=(n,l)=>l;const t=new Error().stack.slice(1);return Error.prepareStackTrace=a,t}(async()=>{const a=ZhiUtil.zhiSdk(),t=a.getLogger(),n=a.getEnv(),l=async()=>{t.debug("Theme is loading..."),await new Theme().init("electron"),t.debug("Theme loaded.")};if(n.isDev()){const c=callsites(),u="theme.js";(c.length>0?c[0].getFileName()??u:u).includes(u)?await import("http://localhost:5173/theme.ts"):await l()}else await l()})();
