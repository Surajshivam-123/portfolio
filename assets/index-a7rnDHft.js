(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var td={exports:{}},No={};var Lg;function O1(){if(Lg)return No;Lg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:u}}return No.Fragment=e,No.jsx=i,No.jsxs=i,No}var Og;function P1(){return Og||(Og=1,td.exports=O1()),td.exports}var D=P1(),nd={exports:{}},at={};var Pg;function z1(){if(Pg)return at;Pg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(O,Z,Ee){this.props=O,this.context=Z,this.refs=M,this.updater=Ee||b}v.prototype.isReactComponent={},v.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=v.prototype;function B(O,Z,Ee){this.props=O,this.context=Z,this.refs=M,this.updater=Ee||b}var w=B.prototype=new I;w.constructor=B,C(w,v.prototype),w.isPureReactComponent=!0;var z=Array.isArray;function U(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(O,Z,Ee){var Ce=Ee.ref;return{$$typeof:r,type:O,key:Z,ref:Ce!==void 0?Ce:null,props:Ee}}function Y(O,Z){return L(O.type,Z,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Q(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ee){return Z[Ee]})}var ce=/\/+/g;function pe(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):Z.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(U,U):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,Z,Ee,Ce,ze){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0;break;case S:return Se=O._init,F(Se(O._payload),Z,Ee,Ce,ze)}}if(Se)return ze=ze(O),Se=Ce===""?"."+pe(O,0):Ce,z(ze)?(Ee="",Se!=null&&(Ee=Se.replace(ce,"$&/")+"/"),F(ze,Z,Ee,"",function(tt){return tt})):ze!=null&&(V(ze)&&(ze=Y(ze,Ee+(ze.key==null||O&&O.key===ze.key?"":(""+ze.key).replace(ce,"$&/")+"/")+Se)),Z.push(ze)),1;Se=0;var ye=Ce===""?".":Ce+":";if(z(O))for(var He=0;He<O.length;He++)Ce=O[He],se=ye+pe(Ce,He),Se+=F(Ce,Z,Ee,se,ze);else if(He=E(O),typeof He=="function")for(O=He.call(O),He=0;!(Ce=O.next()).done;)Ce=Ce.value,se=ye+pe(Ce,He++),Se+=F(Ce,Z,Ee,se,ze);else if(se==="object"){if(typeof O.then=="function")return F(J(O),Z,Ee,Ce,ze);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(O,Z,Ee){if(O==null)return O;var Ce=[],ze=0;return F(O,Ce,"","",function(se){return Z.call(Ee,se,ze++)}),Ce}function ne(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ee)},function(Ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ee)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},be={map:G,forEach:function(O,Z,Ee){G(O,function(){Z.apply(this,arguments)},Ee)},count:function(O){var Z=0;return G(O,function(){Z++}),Z},toArray:function(O){return G(O,function(Z){return Z})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return at.Activity=x,at.Children=be,at.Component=v,at.Fragment=i,at.Profiler=l,at.PureComponent=B,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,at.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},at.cache=function(O){return function(){return O.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(O,Z,Ee){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ce=C({},O.props),ze=O.key;if(Z!=null)for(se in Z.key!==void 0&&(ze=""+Z.key),Z)!T.call(Z,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Z.ref===void 0||(Ce[se]=Z[se]);var se=arguments.length-2;if(se===1)Ce.children=Ee;else if(1<se){for(var Se=Array(se),ye=0;ye<se;ye++)Se[ye]=arguments[ye+2];Ce.children=Se}return L(O.type,ze,Ce)},at.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},at.createElement=function(O,Z,Ee){var Ce,ze={},se=null;if(Z!=null)for(Ce in Z.key!==void 0&&(se=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=Ee;else if(1<Se){for(var ye=Array(Se),He=0;He<Se;He++)ye[He]=arguments[He+2];ze.children=ye}if(O&&O.defaultProps)for(Ce in Se=O.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return L(O,se,ze)},at.createRef=function(){return{current:null}},at.forwardRef=function(O){return{$$typeof:p,render:O}},at.isValidElement=V,at.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:ne}},at.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},at.startTransition=function(O){var Z=P.T,Ee={};P.T=Ee;try{var Ce=O(),ze=P.S;ze!==null&&ze(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(se){_e(se)}finally{Z!==null&&Ee.types!==null&&(Z.types=Ee.types),P.T=Z}},at.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},at.use=function(O){return P.H.use(O)},at.useActionState=function(O,Z,Ee){return P.H.useActionState(O,Z,Ee)},at.useCallback=function(O,Z){return P.H.useCallback(O,Z)},at.useContext=function(O){return P.H.useContext(O)},at.useDebugValue=function(){},at.useDeferredValue=function(O,Z){return P.H.useDeferredValue(O,Z)},at.useEffect=function(O,Z){return P.H.useEffect(O,Z)},at.useEffectEvent=function(O){return P.H.useEffectEvent(O)},at.useId=function(){return P.H.useId()},at.useImperativeHandle=function(O,Z,Ee){return P.H.useImperativeHandle(O,Z,Ee)},at.useInsertionEffect=function(O,Z){return P.H.useInsertionEffect(O,Z)},at.useLayoutEffect=function(O,Z){return P.H.useLayoutEffect(O,Z)},at.useMemo=function(O,Z){return P.H.useMemo(O,Z)},at.useOptimistic=function(O,Z){return P.H.useOptimistic(O,Z)},at.useReducer=function(O,Z,Ee){return P.H.useReducer(O,Z,Ee)},at.useRef=function(O){return P.H.useRef(O)},at.useState=function(O){return P.H.useState(O)},at.useSyncExternalStore=function(O,Z,Ee){return P.H.useSyncExternalStore(O,Z,Ee)},at.useTransition=function(){return P.H.useTransition()},at.version="19.2.4",at}var zg;function Ph(){return zg||(zg=1,nd.exports=z1()),nd.exports}var Xt=Ph(),id={exports:{}},Lo={},ad={exports:{}},sd={};var Ig;function I1(){return Ig||(Ig=1,(function(r){function e(F,G){var ne=F.length;F.push(G);e:for(;0<ne;){var _e=ne-1>>>1,be=F[_e];if(0<l(be,G))F[_e]=G,F[ne]=be,ne=_e;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],ne=F.pop();if(ne!==G){F[0]=ne;e:for(var _e=0,be=F.length,O=be>>>1;_e<O;){var Z=2*(_e+1)-1,Ee=F[Z],Ce=Z+1,ze=F[Ce];if(0>l(Ee,ne))Ce<be&&0>l(ze,Ee)?(F[_e]=ze,F[Ce]=ne,_e=Ce):(F[_e]=Ee,F[Z]=ne,_e=Z);else if(Ce<be&&0>l(ze,ne))F[_e]=ze,F[Ce]=ne,_e=Ce;else break e}}return G}function l(F,G){var ne=F.sortIndex-G.sortIndex;return ne!==0?ne:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,g=3,E=!1,b=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=F)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function z(F){if(C=!1,w(F),!b)if(i(m)!==null)b=!0,U||(U=!0,Q());else{var G=i(h);G!==null&&J(z,G.startTime-F)}}var U=!1,P=-1,T=5,L=-1;function Y(){return M?!0:!(r.unstable_now()-L<T)}function V(){if(M=!1,U){var F=r.unstable_now();L=F;var G=!0;try{e:{b=!1,C&&(C=!1,I(P),P=-1),E=!0;var ne=g;try{t:{for(w(F),x=i(m);x!==null&&!(x.expirationTime>F&&Y());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,g=x.priorityLevel;var be=_e(x.expirationTime<=F);if(F=r.unstable_now(),typeof be=="function"){x.callback=be,w(F),G=!0;break t}x===i(m)&&s(m),w(F)}else s(m);x=i(m)}if(x!==null)G=!0;else{var O=i(h);O!==null&&J(z,O.startTime-F),G=!1}}break e}finally{x=null,g=ne,E=!1}G=void 0}}finally{G?Q():U=!1}}}var Q;if(typeof B=="function")Q=function(){B(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=V,Q=function(){pe.postMessage(null)}}else Q=function(){v(V,0)};function J(F,G){P=v(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(F){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ne=g;g=G;try{return F()}finally{g=ne}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=g;g=F;try{return G()}finally{g=ne}},r.unstable_scheduleCallback=function(F,G,ne){var _e=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,F){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,F={id:S++,callback:G,priorityLevel:F,startTime:ne,expirationTime:be,sortIndex:-1},ne>_e?(F.sortIndex=ne,e(h,F),i(m)===null&&F===i(h)&&(C?(I(P),P=-1):C=!0,J(z,ne-_e))):(F.sortIndex=be,e(m,F),b||E||(b=!0,U||(U=!0,Q()))),F},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(F){var G=g;return function(){var ne=g;g=G;try{return F.apply(this,arguments)}finally{g=ne}}}})(sd)),sd}var Bg;function B1(){return Bg||(Bg=1,ad.exports=I1()),ad.exports}var rd={exports:{}},Un={};var Fg;function F1(){if(Fg)return Un;Fg=1;var r=Ph();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,S)},Un.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},Un.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):S==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Un.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,h){return m(h)},Un.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var Hg;function H1(){if(Hg)return rd.exports;Hg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rd.exports=F1(),rd.exports}var Gg;function G1(){if(Gg)return Lo;Gg=1;var r=B1(),e=Ph(),i=H1();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,o=f;break}if(R===o){_=!0,o=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=c;break}if(R===o){_=!0,o=f,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case U:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var J=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function O(t){return{current:t}}function Z(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Ce=O(null),ze=O(null),se=O(null),Se=O(null);function ye(t,n){switch(Ee(se,n),Ee(ze,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ng(n),t=ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),Ee(Ce,t)}function He(){Z(Ce),Z(ze),Z(se)}function tt(t){t.memoizedState!==null&&Ee(Se,t);var n=Ce.current,a=ig(n,t.type);n!==a&&(Ee(ze,t),Ee(Ce,a))}function Ke(t){ze.current===t&&(Z(Ce),Z(ze)),Se.current===t&&(Z(Se),Co._currentValue=ne)}var qt,ut;function _t(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ut}var vt=!1;function ft(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var le=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){le=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){le=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),te=R.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===te.length)for(o=H.length-1,c=te.length-1;1<=o&&0<=c&&H[o]!==te[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==te[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==te[c]){var me=`
`+H[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=c);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return _t("Activity");default:return""}}function en(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,on=r.unstable_scheduleCallback,Wt=r.unstable_cancelCallback,nn=r.unstable_shouldYield,q=r.unstable_requestPaint,Bt=r.unstable_now,Rt=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,y=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,re=r.unstable_LowPriority,de=r.unstable_IdlePriority,Te=r.log,De=r.unstable_setDisableYieldValue,fe=null,he=null;function Re(t){if(typeof Te=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Be=Math.clz32?Math.clz32:Ze,Le=Math.log,Ue=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var Qe=256,it=262144,X=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Ae(o):(_&=R,_!==0?c=Ae(_):a||(a=R&~t,a!==0&&(c=Ae(a))))):(R=o&~f,R!==0?c=Ae(R):_!==0?c=Ae(_):a||(a=o&~t,a!==0&&(c=Ae(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zt(t,n,a,o,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var me=31-Be(a),xe=1<<me;R[me]=0,H[me]=-1;var le=te[me];if(le!==null)for(te[me]=null,me=0;me<le.length;me++){var ue=le[me];ue!==null&&(ue.lane&=-536870913)}a&=~xe}o!==0&&Ut(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Zn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Gr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Ag(t.type))}function Hs(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Ni=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ni,bn="__reactProps$"+Ni,Fn="__reactContainer$"+Ni,rs="__reactEvents$"+Ni,Ko="__reactListeners$"+Ni,Qo="__reactHandles$"+Ni,os="__reactResources$"+Ni,ba="__reactMarker$"+Ni;function Ta(t){delete t[fn],delete t[bn],delete t[rs],delete t[Ko],delete t[Qo]}function ji(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ug(t);t!==null;){if(a=t[fn])return a;t=ug(t)}return n}t=a,a=t.parentNode}return null}function Zi(t){if(t=t[fn]||t[Fn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ls(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[os];return n||(n=t[os]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[ba]=!0}var Jo=new Set,A={};function W(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)Jo.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Oe={};function Ge(t){return tn.call(Oe,t)?!0:tn.call(ae,t)?!1:ie.test(t)?Oe[t]=!0:(ae[t]=!0,!1)}function Ne(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bt(t){if(!t._valueTracker){var n=rt(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function Lt(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(t,n,a,o,c,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?dt(t,_,Je(n)):a!=null?dt(t,_,Je(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Dn(t,n,a,o,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bt(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),bt(t)}function dt(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),bt(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ot=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ot.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Qt(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Qc=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,Vs=null;function tp(t){var n=Zi(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Fe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[bn]||null;if(!c)throw Error(s(90));Fe(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Kt(o)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var $c=!1;function np(t,n,a){if($c)return t(n,a);$c=!0;try{var o=t(n);return o}finally{if($c=!1,(Gs!==null||Vs!==null)&&(Fl(),Gs&&(n=Gs,t=Vs,Vs=Gs=null,tp(n),t)))for(n=0;n<t.length;n++)tp(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Qi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{eu=!1}var Ca=null,tu=null,$o=null;function ip(){if($o)return $o;var t,n=tu,a=n.length,o,c="value"in Ca?Ca.value:Ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===c[f-o];o++);return $o=c.slice(t,1<o?1-o:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function ap(){return!1}function Hn(t){function n(a,o,c,f,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:ap,this.isPropagationStopped=ap,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Hn(us),qr=x({},us,{view:0,detail:0}),Nv=Hn(qr),nu,iu,Yr,il=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(nu=t.screenX-Yr.screenX,iu=t.screenY-Yr.screenY):iu=nu=0,Yr=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),sp=Hn(il),Lv=x({},il,{dataTransfer:0}),Ov=Hn(Lv),Pv=x({},qr,{relatedTarget:0}),au=Hn(Pv),zv=x({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Hn(zv),Bv=x({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Hn(Bv),Hv=x({},us,{data:0}),rp=Hn(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function su(){return Xv}var Wv=x({},qr,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=Hn(Wv),Yv=x({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Hn(Yv),jv=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Zv=Hn(jv),Kv=x({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Hn(Kv),Jv=x({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Hn(Jv),ex=x({},us,{newState:0,oldState:0}),tx=Hn(ex),nx=[9,13,27,32],ru=Qi&&"CompositionEvent"in window,jr=null;Qi&&"documentMode"in document&&(jr=document.documentMode);var ix=Qi&&"TextEvent"in window&&!jr,lp=Qi&&(!ru||jr&&8<jr&&11>=jr),cp=" ",up=!1;function fp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function ax(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return t=n.data,t===cp&&up?null:t;default:return null}}function sx(t,n){if(ks)return t==="compositionend"||!ru&&fp(t,n)?(t=ip(),$o=tu=Ca=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function pp(t,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function ox(t){K0(t,0)}function al(t){var n=ls(t);if(Kt(n))return t}function mp(t,n){if(t==="change")return n}var gp=!1;if(Qi){var ou;if(Qi){var lu="oninput"in document;if(!lu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),lu=typeof _p.oninput=="function"}ou=lu}else ou=!1;gp=ou&&(!document.documentMode||9<document.documentMode)}function vp(){Zr&&(Zr.detachEvent("onpropertychange",xp),Kr=Zr=null)}function xp(t){if(t.propertyName==="value"&&al(Kr)){var n=[];pp(n,Kr,t,Jc(t)),np(ox,n)}}function lx(t,n,a){t==="focusin"?(vp(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",xp)):t==="focusout"&&vp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Kr)}function ux(t,n){if(t==="click")return al(n)}function fx(t,n){if(t==="input"||t==="change")return al(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:dx;function Qr(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!tn.call(n,c)||!$n(t[c],n[c]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=Sp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=Qi&&"documentMode"in document&&11>=document.documentMode,Xs=null,uu=null,Jr=null,fu=!1;function bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Xs==null||Xs!==Vt(o)||(o=Xs,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Qr(Jr,o)||(Jr=o,o=ql(uu,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Xs)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ws={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},du={},Tp={};Qi&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ds(t){if(du[t])return du[t];if(!Ws[t])return t;var n=Ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return du[t]=n[a];return t}var Ap=ds("animationend"),Rp=ds("animationiteration"),Cp=ds("animationstart"),px=ds("transitionrun"),mx=ds("transitionstart"),gx=ds("transitioncancel"),wp=ds("transitionend"),Dp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function bi(t,n){Dp.set(t,n),W(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],qs=0,pu=0;function rl(){for(var t=qs,n=pu=qs=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var c=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Up(a,c,f)}}function ol(t,n,a,o){ci[qs++]=t,ci[qs++]=n,ci[qs++]=a,ci[qs++]=o,pu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mu(t,n,a,o){return ol(t,n,a,o),ll(t)}function hs(t,n){return ol(t,null,null,n),ll(t)}function Up(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Be(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<Mo)throw Mo=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ys={};function _x(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new _x(t,n,a,o)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,o,c,f){var _=0;if(o=t,typeof t=="function")gu(t)&&(_=1);else if(typeof t=="string")_=y1(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ei(31,a,n,c),t.elementType=L,t.lanes=f,t;case C:return ps(a.children,c,f,n);case M:_=8,c|=24;break;case v:return t=ei(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case z:return t=ei(13,a,n,c),t.elementType=z,t.lanes=f,t;case U:return t=ei(19,a,n,c),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:_=10;break e;case I:_=9;break e;case w:_=11;break e;case P:_=14;break e;case T:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(_,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ps(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function _u(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Lp(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function vu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Op=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var a=Op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:en(n)},Op.set(t,n),n)}return{value:t,source:n,stack:en(n)}}var js=[],Zs=0,ul=null,$r=0,fi=[],di=0,wa=null,Oi=1,Pi="";function $i(t,n){js[Zs++]=$r,js[Zs++]=ul,ul=t,$r=n}function Pp(t,n,a){fi[di++]=Oi,fi[di++]=Pi,fi[di++]=wa,wa=t;var o=Oi;t=Pi;var c=32-Be(o)-1;o&=~(1<<c),a+=1;var f=32-Be(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Oi=1<<32-Be(n)+c|a<<c|o,Pi=f+t}else Oi=1<<f|a<<c|o,Pi=t}function xu(t){t.return!==null&&($i(t,1),Pp(t,1,0))}function Su(t){for(;t===ul;)ul=js[--Zs],js[Zs]=null,$r=js[--Zs],js[Zs]=null;for(;t===wa;)wa=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null,Oi=fi[--di],fi[di]=null}function zp(t,n){fi[di++]=Oi,fi[di++]=Pi,fi[di++]=wa,Oi=n.id,Pi=n.overflow,wa=t}var Tn=null,Yt=null,xt=!1,Da=null,hi=!1,Mu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ui(n,t)),Mu}function Ip(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[bn]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)pt(Eo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||eg(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ua(t,!0)}function Bp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function Ks(t){if(t!==Tn)return!1;if(!xt)return Bp(t),xt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ua(t),Bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=cg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=cg(t)}else n===27?(n=Yt,Wa(t.type)?(t=Wf,Wf=null,Yt=t):Yt=n):Yt=Tn?mi(t.stateNode.nextSibling):null;return!0}function ms(){Yt=Tn=null,xt=!1}function yu(){var t=Da;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Da=null),t}function eo(t){Da===null?Da=[t]:Da.push(t)}var Eu=O(null),gs=null,ea=null;function Na(t,n,a){Ee(Eu,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Eu.current,Z(Eu)}function bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Tu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Qs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;$n(c.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(c===Se.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}c=c.return}t!==null&&Tu(n,t,a,o),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){gs=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Fp(gs,t)}function dl(t,n){return gs===null&&_s(t),Fp(t,n)}function Fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(s(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=r.unstable_scheduleCallback,Sx=r.unstable_NormalPriority,hn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new vx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&xx(Sx,function(){t.controller.abort()})}var no=null,Ru=0,Js=0,$s=null;function Mx(t,n){if(no===null){var a=no=[];Ru=0,Js=Uf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Hp,Hp),n}function Hp(){if(--Ru===0&&no!==null){$s!==null&&($s.status="fulfilled");var t=no;no=null,Js=0,$s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Gp=F.S;F.S=function(t,n){b0=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Mx(t,n),Gp!==null&&Gp(t,n)};var vs=O(null);function Cu(){var t=vs.current;return t!==null?t:kt.pooledCache}function hl(t,n){n===null?Ee(vs,vs.current):Ee(vs,n.pool)}function Vp(){var t=Cu();return t===null?null:{parent:hn._currentValue,pool:t}}var er=Error(s(460)),wu=Error(s(474)),pl=Error(s(542)),ml={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qp(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qp(t),t}throw Ss=n,er}}function xs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,er):a}}var Ss=null;function Wp(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function qp(t){if(t===er||t===pl)throw Error(s(483))}var tr=null,io=0;function gl(t){var n=io;return io+=1,tr===null&&(tr=[]),Xp(tr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Yp(t){function n(j,k){if(t){var ee=j.deletions;ee===null?(j.deletions=[k],j.flags|=16):ee.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Ji(j,k),j.index=0,j.sibling=null,j}function f(j,k,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<k?(j.flags|=67108866,k):ee):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,ee,ve){return k===null||k.tag!==6?(k=_u(ee,j.mode,ve),k.return=j,k):(k=c(k,ee),k.return=j,k)}function H(j,k,ee,ve){var $e=ee.type;return $e===C?me(j,k,ee.props.children,ve,ee.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&xs($e)===k.type)?(k=c(k,ee.props),ao(k,ee),k.return=j,k):(k=cl(ee.type,ee.key,ee.props,null,j.mode,ve),ao(k,ee),k.return=j,k)}function te(j,k,ee,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=vu(ee,j.mode,ve),k.return=j,k):(k=c(k,ee.children||[]),k.return=j,k)}function me(j,k,ee,ve,$e){return k===null||k.tag!==7?(k=ps(ee,j.mode,ve,$e),k.return=j,k):(k=c(k,ee),k.return=j,k)}function xe(j,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,j.mode,ee),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return ee=cl(k.type,k.key,k.props,null,j.mode,ee),ao(ee,k),ee.return=j,ee;case b:return k=vu(k,j.mode,ee),k.return=j,k;case T:return k=xs(k),xe(j,k,ee)}if(J(k)||Q(k))return k=ps(k,j.mode,ee,null),k.return=j,k;if(typeof k.then=="function")return xe(j,gl(k),ee);if(k.$$typeof===B)return xe(j,dl(j,k),ee);_l(j,k)}return null}function le(j,k,ee,ve){var $e=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:R(j,k,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case E:return ee.key===$e?H(j,k,ee,ve):null;case b:return ee.key===$e?te(j,k,ee,ve):null;case T:return ee=xs(ee),le(j,k,ee,ve)}if(J(ee)||Q(ee))return $e!==null?null:me(j,k,ee,ve,null);if(typeof ee.then=="function")return le(j,k,gl(ee),ve);if(ee.$$typeof===B)return le(j,k,dl(j,ee),ve);_l(j,ee)}return null}function ue(j,k,ee,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(ee)||null,R(k,j,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return j=j.get(ve.key===null?ee:ve.key)||null,H(k,j,ve,$e);case b:return j=j.get(ve.key===null?ee:ve.key)||null,te(k,j,ve,$e);case T:return ve=xs(ve),ue(j,k,ee,ve,$e)}if(J(ve)||Q(ve))return j=j.get(ee)||null,me(k,j,ve,$e,null);if(typeof ve.then=="function")return ue(j,k,ee,gl(ve),$e);if(ve.$$typeof===B)return ue(j,k,ee,dl(k,ve),$e);_l(k,ve)}return null}function We(j,k,ee,ve){for(var $e=null,Tt=null,Ye=k,lt=k=0,gt=null;Ye!==null&&lt<ee.length;lt++){Ye.index>lt?(gt=Ye,Ye=null):gt=Ye.sibling;var At=le(j,Ye,ee[lt],ve);if(At===null){Ye===null&&(Ye=gt);break}t&&Ye&&At.alternate===null&&n(j,Ye),k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At,Ye=gt}if(lt===ee.length)return a(j,Ye),xt&&$i(j,lt),$e;if(Ye===null){for(;lt<ee.length;lt++)Ye=xe(j,ee[lt],ve),Ye!==null&&(k=f(Ye,k,lt),Tt===null?$e=Ye:Tt.sibling=Ye,Tt=Ye);return xt&&$i(j,lt),$e}for(Ye=o(Ye);lt<ee.length;lt++)gt=ue(Ye,j,lt,ee[lt],ve),gt!==null&&(t&&gt.alternate!==null&&Ye.delete(gt.key===null?lt:gt.key),k=f(gt,k,lt),Tt===null?$e=gt:Tt.sibling=gt,Tt=gt);return t&&Ye.forEach(function(Ka){return n(j,Ka)}),xt&&$i(j,lt),$e}function et(j,k,ee,ve){if(ee==null)throw Error(s(151));for(var $e=null,Tt=null,Ye=k,lt=k=0,gt=null,At=ee.next();Ye!==null&&!At.done;lt++,At=ee.next()){Ye.index>lt?(gt=Ye,Ye=null):gt=Ye.sibling;var Ka=le(j,Ye,At.value,ve);if(Ka===null){Ye===null&&(Ye=gt);break}t&&Ye&&Ka.alternate===null&&n(j,Ye),k=f(Ka,k,lt),Tt===null?$e=Ka:Tt.sibling=Ka,Tt=Ka,Ye=gt}if(At.done)return a(j,Ye),xt&&$i(j,lt),$e;if(Ye===null){for(;!At.done;lt++,At=ee.next())At=xe(j,At.value,ve),At!==null&&(k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return xt&&$i(j,lt),$e}for(Ye=o(Ye);!At.done;lt++,At=ee.next())At=ue(Ye,j,lt,At.value,ve),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?lt:At.key),k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return t&&Ye.forEach(function(L1){return n(j,L1)}),xt&&$i(j,lt),$e}function Gt(j,k,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case E:e:{for(var $e=ee.key;k!==null;){if(k.key===$e){if($e=ee.type,$e===C){if(k.tag===7){a(j,k.sibling),ve=c(k,ee.props.children),ve.return=j,j=ve;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&xs($e)===k.type){a(j,k.sibling),ve=c(k,ee.props),ao(ve,ee),ve.return=j,j=ve;break e}a(j,k);break}else n(j,k);k=k.sibling}ee.type===C?(ve=ps(ee.props.children,j.mode,ve,ee.key),ve.return=j,j=ve):(ve=cl(ee.type,ee.key,ee.props,null,j.mode,ve),ao(ve,ee),ve.return=j,j=ve)}return _(j);case b:e:{for($e=ee.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(j,k.sibling),ve=c(k,ee.children||[]),ve.return=j,j=ve;break e}else{a(j,k);break}else n(j,k);k=k.sibling}ve=vu(ee,j.mode,ve),ve.return=j,j=ve}return _(j);case T:return ee=xs(ee),Gt(j,k,ee,ve)}if(J(ee))return We(j,k,ee,ve);if(Q(ee)){if($e=Q(ee),typeof $e!="function")throw Error(s(150));return ee=$e.call(ee),et(j,k,ee,ve)}if(typeof ee.then=="function")return Gt(j,k,gl(ee),ve);if(ee.$$typeof===B)return Gt(j,k,dl(j,ee),ve);_l(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(j,k.sibling),ve=c(k,ee),ve.return=j,j=ve):(a(j,k),ve=_u(ee,j.mode,ve),ve.return=j,j=ve),_(j)):a(j,k)}return function(j,k,ee,ve){try{io=0;var $e=Gt(j,k,ee,ve);return tr=null,$e}catch(Ye){if(Ye===er||Ye===pl)throw Ye;var Tt=ei(29,Ye,null,j.mode);return Tt.lanes=ve,Tt.return=j,Tt}}}var Ms=Yp(!0),jp=Yp(!1),La=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ll(t),Up(t,null,a),n}return ol(t,o,n,a),ll(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}function Nu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lu=!1;function ro(){if(Lu){var t=$s;if(t!==null)throw t}}function oo(t,n,a,o){Lu=!1;var c=t.updateQueue;La=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,te=H.next;H.next=null,_===null?f=te:_.next=te,_=H;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==_&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=H))}if(f!==null){var xe=c.baseState;_=0,me=te=H=null,R=f;do{var le=R.lane&-536870913,ue=le!==R.lane;if(ue?(mt&le)===le:(o&le)===le){le!==0&&le===Js&&(Lu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,et=R;le=n;var Gt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){xe=We.call(Gt,xe,le);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,le=typeof We=="function"?We.call(Gt,xe,le):We,le==null)break e;xe=x({},xe,le);break e;case 2:La=!0}}le=R.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=c.callbacks,ue===null?c.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ue,H=xe):me=me.next=ue,_|=le;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,c.lastBaseUpdate=ue,c.shared.pending=null}}while(!0);me===null&&(H=xe),c.baseState=H,c.firstBaseUpdate=te,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),Ha|=_,t.lanes=_,t.memoizedState=xe}}function Zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zp(a[t],n)}var nr=O(null),vl=O(0);function Qp(t,n){t=ua,Ee(vl,t),Ee(nr,n),ua=t|n.baseLanes}function Ou(){Ee(vl,ua),Ee(nr,nr.current)}function Pu(){ua=vl.current,Z(nr),Z(vl)}var ti=O(null),pi=null;function za(t){var n=t.alternate;Ee(ln,ln.current&1),Ee(ti,t),pi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(pi=t)}function zu(t){Ee(ln,ln.current),Ee(ti,t),pi===null&&(pi=t)}function Jp(t){t.tag===22?(Ee(ln,ln.current),Ee(ti,t),pi===null&&(pi=t)):Ia()}function Ia(){Ee(ln,ln.current),Ee(ti,ti.current)}function ni(t){Z(ti),pi===t&&(pi=null),Z(ln)}var ln=O(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ot=null,Ft=null,pn=null,Sl=!1,ir=!1,ys=!1,Ml=0,lo=0,ar=null,Ex=0;function an(){throw Error(s(321))}function Iu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Bu(t,n,a,o,c,f){return na=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Pm:$u,ys=!1,f=a(o,c),ys=!1,ir&&(f=em(n,a,o,c)),$p(t),f}function $p(t){F.H=fo;var n=Ft!==null&&Ft.next!==null;if(na=0,pn=Ft=ot=null,Sl=!1,lo=0,ar=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&fl(t)&&(mn=!0))}function em(t,n,a,o){ot=t;var c=0;do{if(ir&&(ar=null),lo=0,ir=!1,25<=c)throw Error(s(301));if(c+=1,pn=Ft=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=zm,f=n(a,o)}while(ir);return f}function bx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(ot.flags|=1024),n}function Fu(){var t=Ml!==0;return Ml=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}na=0,pn=Ft=ot=null,ir=!1,lo=Ml=0,ar=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ot.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(Ft===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var n=pn===null?ot.memoizedState:pn.next;if(n!==null)pn=n,Ft=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},pn===null?ot.memoizedState=pn=t:pn=pn.next=t}return pn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,ar===null&&(ar=[]),t=Xp(ar,t,n),n=ot,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Pm:$u),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===B)return An(t)}throw Error(s(438,String(t)))}function Vu(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=cn();return ku(n,Ft,t)}function ku(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=_=null,H=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(mt&xe)===xe:(na&xe)===xe){var le=te.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Js&&(me=!0);else if((na&le)===le){te=te.next,le===Js&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=xe,_=f):H=H.next=xe,ot.lanes|=le,Ha|=le;xe=te.action,ys&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else le={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=le,_=f):H=H.next=le,ot.lanes|=xe,Ha|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?_=f:H.next=R,!$n(f,t.memoizedState)&&(mn=!0,me&&(a=$s,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Xu(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);$n(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function tm(t,n,a){var o=ot,c=cn(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!$n((Ft||c).memoizedState,a);if(_&&(c.memoizedState=a,mn=!0),c=c.queue,Yu(am.bind(null,o,c,t),[t]),c.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},im.bind(null,o,c,a,n),null),kt===null)throw Error(s(349));f||(na&127)!==0||nm(o,n,a)}return a}function nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=yl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function im(t,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&rm(t)}function am(t,n,a){return a(function(){sm(n)&&rm(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function rm(t){var n=hs(t,2);n!==null&&Wn(n,t,2)}function Wu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ys){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function om(t,n,a,o){return t.baseState=a,ku(t,Ft,typeof o=="function"?o:ia)}function Tx(t,n,a,o,c){if(Rl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var R=a(c,o),H=F.S;H!==null&&H(_,R),cm(t,n,R)}catch(te){qu(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(c,o),cm(t,n,f)}catch(te){qu(t,n,te)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){um(t,n,o)},function(o){return qu(t,n,o)}):um(t,n,a)}function um(t,n,a){n.status="fulfilled",n.value=a,fm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lm(t,a)))}function qu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==o)}t.action=null}function fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function hm(t,n){if(xt){var a=kt.formState;if(a!==null){e:{var o=ot;if(xt){if(Yt){t:{for(var c=Yt,f=hi;c.nodeType!==8;){if(!f){c=null;break t}if(c=mi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=mi(c.nextSibling),o=c.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},a.queue=o,a=Nm.bind(null,ot,o),o.dispatch=a,o=Wu(!1),f=Ju.bind(null,ot,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Tx.bind(null,ot,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function pm(t){var n=cn();return mm(n,Ft,t)}function mm(t,n,a){if(n=ku(t,n,dm)[0],t=bl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(_){throw _===er?pl:_}else o=n;n=cn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,sr(9,{destroy:void 0},Ax.bind(null,c,a),null)),[o,f,t]}function Ax(t,n){t.action=n}function gm(t){var n=cn(),a=Ft;if(a!==null)return mm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function sr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=yl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function _m(){return cn().memoizedState}function Tl(t,n,a,o){var c=zn();ot.flags|=t,c.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Al(t,n,a,o){var c=cn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ft!==null&&o!==null&&Iu(o,Ft.memoizedState.deps)?c.memoizedState=sr(n,f,a,o):(ot.flags|=t,c.memoizedState=sr(1|n,f,a,o))}function vm(t,n){Tl(8390656,8,t,n)}function Yu(t,n){Al(2048,8,t,n)}function Rx(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=yl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function xm(t){var n=cn().memoizedState;return Rx({ref:n,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Sm(t,n){return Al(4,2,t,n)}function Mm(t,n){return Al(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Em(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,ym.bind(null,n,t),a)}function ju(){}function bm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Tm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=t(),ys){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function Zu(t,n,a){return a===void 0||(na&1073741824)!==0&&(mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=A0(),ot.lanes|=t,Ha|=t,a)}function Am(t,n,a,o){return $n(a,n)?a:nr.current!==null?(t=Zu(t,a,o),$n(t,n)||(mn=!0),t):(na&42)===0||(na&1073741824)!==0&&(mt&261930)===0?(mn=!0,t.memoizedState=a):(t=A0(),ot.lanes|=t,Ha|=t,n)}function Rm(t,n,a,o,c){var f=G.p;G.p=f!==0&&8>f?f:8;var _=F.T,R={};F.T=R,Ju(t,!1,n,a);try{var H=c(),te=F.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=yx(H,o);uo(t,n,me,si(t))}else uo(t,n,o,si(t))}catch(xe){uo(t,n,{then:function(){},status:"rejected",reason:xe},si())}finally{G.p=f,_!==null&&R.types!==null&&(_.types=R.types),F.T=_}}function Cx(){}function Ku(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=Cm(t).queue;Rm(t,c,n,ne,a===null?Cx:function(){return wm(t),a(o)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wm(t){var n=Cm(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},si())}function Qu(){return An(Co)}function Dm(){return cn().memoizedState}function Um(){return cn().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Wn(o,n,a),so(o,n,a)),n={cache:Au()},t.payload=n;return}n=n.return}}function Dx(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Lm(n,a):(a=mu(t,n,a,o),a!==null&&(Wn(a,t,o),Om(a,n,o)))}function Nm(t,n,a){var o=si();uo(t,n,a,o)}function uo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Lm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,$n(R,_))return ol(t,n,c,0),kt===null&&rl(),!1}catch{}if(a=mu(t,n,c,o),a!==null)return Wn(a,t,o),Om(a,n,o),!0}return!1}function Ju(t,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(s(479))}else n=mu(t,a,o,2),n!==null&&Wn(n,t,2)}function Rl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Lm(t,n){ir=Sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Om(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zn(t,a)}}var fo={readContext:An,use:El,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};fo.useEffectEvent=an;var Pm={readContext:An,use:El,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tl(4194308,4,t,n)},useInsertionEffect:function(t,n){Tl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ys){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var c=a(n);if(ys){Re(!0);try{a(n)}finally{Re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Dx.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=Nm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(t,n){var a=zn();return Zu(a,t,n)},useTransition:function(){var t=Wu(!1);return t=Rm.bind(null,ot,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,c=zn();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(mt&127)!==0||nm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,vm(am.bind(null,o,f,t),[t]),o.flags|=2048,sr(9,{destroy:void 0},im.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=kt.identifierPrefix;if(xt){var a=Pi,o=Oi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:hm,useActionState:hm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return zn().memoizedState=wx.bind(null,ot)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:An,use:El,useCallback:bm,useContext:An,useEffect:Yu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Tm,useReducer:bl,useRef:_m,useState:function(){return bl(ia)},useDebugValue:ju,useDeferredValue:function(t,n){var a=cn();return Am(a,Ft.memoizedState,t,n)},useTransition:function(){var t=bl(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:tm,useId:Dm,useHostTransitionStatus:Qu,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var a=cn();return om(a,Ft,t,n)},useMemoCache:Vu,useCacheRefresh:Um};$u.useEffectEvent=xm;var zm={readContext:An,use:El,useCallback:bm,useContext:An,useEffect:Yu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Tm,useReducer:Xu,useRef:_m,useState:function(){return Xu(ia)},useDebugValue:ju,useDeferredValue:function(t,n){var a=cn();return Ft===null?Zu(a,t,n):Am(a,Ft.memoizedState,t,n)},useTransition:function(){var t=Xu(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:tm,useId:Dm,useHostTransitionStatus:Qu,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=cn();return Ft!==null?om(a,Ft,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Um};zm.useEffectEvent=xm;function ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),c=Oa(o);c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Wn(n,t,o),so(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),c=Oa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Wn(n,t,o),so(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Wn(n,t,a),so(n,t,a))}};function Im(t,n,a,o,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(c,f):!0}function Bm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&tf.enqueueReplaceState(n,n.state,null)}function Es(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Fm(t){sl(t)}function Hm(t){console.error(t)}function Gm(t){sl(t)}function Cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(t,n)},a}function km(t){return t=Oa(t),t.tag=3,t}function Xm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Vm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Vm(n,a,o),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ux(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Hl():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(t,o,c)),!1;case 22:return a.flags|=65536,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(t,o,c)),!1}throw Error(s(435,a.tag))}return Cf(t,o,c),Hl(),!1}if(xt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Mu&&(t=Error(s(422),{cause:o}),eo(ui(t,a)))):(o!==Mu&&(n=Error(s(423),{cause:o}),eo(ui(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ui(o,a),c=nf(t.stateNode,o,c),Nu(t,c),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=ui(f,a),So===null?So=[f]:So.push(f),sn!==4&&(sn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=nf(a.stateNode,o,t),Nu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=km(c),Xm(c,t,a,o),Nu(a,c),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),mn=!1;function Rn(t,n,a,o){n.child=t===null?jp(n,null,a,o):Ms(n,t.child,a,o)}function Wm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return _s(n),o=Bu(t,n,a,_,f,c),R=Fu(),t!==null&&!mn?(Hu(t,n,c),aa(t,n,c)):(xt&&R&&xu(n),n.flags|=1,Rn(t,n,o,c),n.child)}function qm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ym(t,n,f,o,c)):(t=cl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!df(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(_,o)&&t.ref===n.ref)return aa(t,n,c)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function Ym(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Qr(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,df(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,aa(t,n,c)}return sf(t,n,a,o,c)}function jm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Zm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Qp(n,f):Ou(),Jp(n);else return o=n.lanes=536870912,Zm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(hl(n,f.cachePool),Qp(n,f),Ia(),n.memoizedState=null):(t!==null&&hl(n,null),Ou(),Ia());return Rn(t,n,c,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zm(t,n,a,o,c){var f=Cu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&hl(n,null),Ou(),Jp(n),t!==null&&Qs(t,n,o,!0),n.childLanes=c,null}function wl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Km(t,n,a){return Ms(n,t.child,null,a),t=wl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Nx(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xt){if(o.mode==="hidden")return t=wl(n,o),n.lanes=536870912,ho(null,t);if(zu(n),(t=Yt)?(t=lg(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return wl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(zu(n),c)if(n.flags&256)n.flags&=-257,n=Km(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Qs(t,n,a,!1),c=(a&t.childLanes)!==0,mn||c){if(o=kt,o!==null&&(_=Kn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,hs(t,_),Wn(o,t,_),af;Hl(),n=Km(t,n,a)}else t=f.treeContext,Yt=mi(_.nextSibling),Tn=n,xt=!0,Da=null,hi=!1,t!==null&&zp(n,t),n=wl(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,o,c){return _s(n),a=Bu(t,n,a,o,void 0,c),o=Fu(),t!==null&&!mn?(Hu(t,n,c),aa(t,n,c)):(xt&&o&&xu(n),n.flags|=1,Rn(t,n,a,c),n.child)}function Qm(t,n,a,o,c,f){return _s(n),n.updateQueue=null,a=em(n,o,a,c),$p(t),o=Fu(),t!==null&&!mn?(Hu(t,n,f),aa(t,n,f)):(xt&&o&&xu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Jm(t,n,a,o,c){if(_s(n),n.stateNode===null){var f=Ys,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Ys,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&tf.enqueueReplaceState(f,f.state,null),oo(n,o,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Es(a,R);f.props=H;var te=f.context,me=a.contextType;_=Ys,typeof me=="object"&&me!==null&&(_=An(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==_)&&Bm(n,f,o,_),La=!1;var le=n.memoizedState;f.state=le,oo(n,o,f,c),ro(),te=n.memoizedState,R||le!==te||La?(typeof xe=="function"&&(ef(n,a,xe,o),te=n.memoizedState),(H=La||Im(n,a,H,o,le,te,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=_,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(t,n),_=n.memoizedProps,me=Es(a,_),f.props=me,xe=n.pendingProps,le=f.context,te=a.contextType,H=Ys,typeof te=="object"&&te!==null&&(H=An(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||le!==H)&&Bm(n,f,o,H),La=!1,le=n.memoizedState,f.state=le,oo(n,o,f,c),ro();var ue=n.memoizedState;_!==xe||le!==ue||La||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,o),ue=n.memoizedState),(me=La||Im(n,a,me,o,le,ue,H)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=H,o=me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ms(n,t.child,null,c),n.child=Ms(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=aa(t,n,c),t}function $m(t,n,a,o){return ms(),n.flags|=256,Rn(t,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:Vp()}}function lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function e0(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xt){if(c?za(n):Ia(),(t=Yt)?(t=lg(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return Xf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Ia(),c=n.mode,R=Ul({mode:"hidden",children:R},c),o=ps(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=of(a),o.childLanes=lf(t,_,a),n.memoizedState=rf,ho(null,o)):(za(n),cf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=uf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),R=o.fallback,c=n.mode,o=Ul({mode:"visible",children:o.children},c),R=ps(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,t.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(t,_,a),n.memoizedState=rf,n=ho(null,o));else if(za(n),Xf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(s(419)),o.stack="",o.digest=_,eo({value:o,source:null,stack:null}),n=uf(t,n,a)}else if(mn||Qs(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=kt,_!==null&&(o=Kn(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,hs(t,o),Wn(_,t,o),af;kf(R)||Hl(),n=uf(t,n,a)}else kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=mi(R.nextSibling),Tn=n,xt=!0,Da=null,hi=!1,t!==null&&zp(n,t),n=cf(n,o.children),n.flags|=4096);return n}return c?(Ia(),R=o.fallback,c=n.mode,H=t.child,te=H.sibling,o=Ji(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=Ji(te,R):(R=ps(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,ho(null,o),o=n.child,R=t.child.memoizedState,R===null?R=of(a):(c=R.cachePool,c!==null?(H=hn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Vp(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=lf(t,_,a),n.memoizedState=rf,ho(t.child,o)):(za(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function uf(t,n,a){return Ms(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function t0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),bu(t.return,n,a)}function ff(t,n,a,o,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function n0(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var _=ln.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Ee(ln,_),Rn(t,n,o,a),o=xt?$r:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,a,n);else if(t.tag===19)t0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function Lx(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Na(n,hn,t.memoizedState.cache),ms();break;case 27:case 5:tt(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?e0(t,n,a):(za(n),t=aa(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return n0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ee(ln,ln.current),o)break;return null;case 22:return n.lanes=0,jm(t,n,a,n.pendingProps);case 24:Na(n,hn,t.memoizedState.cache)}return aa(t,n,a)}function i0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!df(t,a)&&(n.flags&128)===0)return mn=!1,Lx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,xt&&(n.flags&1048576)!==0&&Pp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=xs(n.elementType),n.type=t,typeof t=="function")gu(t)?(o=Es(t,o),n.tag=1,n=Jm(null,n,t,o,a)):(n.tag=0,n=sf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===w){n.tag=11,n=Wm(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=qm(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Es(o,n.pendingProps),Jm(t,n,o,c,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Uu(t,n),oo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Na(n,hn,o),o!==f.cache&&Tu(n,[hn],a,!0),ro(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$m(t,n,o,a);break e}else if(o!==c){c=ui(Error(s(424)),n),eo(c),n=$m(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=mi(t.firstChild),Tn=n,xt=!0,Da=null,hi=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),o===c){n=aa(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,t=n.pendingProps,o=Yl(se.current).createElement(a),o[fn]=n,o[bn]=t,Cn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=pg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&xt&&(o=n.stateNode=fg(n.type,n.pendingProps,se.current),Tn=n,hi=!0,c=Yt,Wa(n.type)?(Wf=c,Yt=mi(o.firstChild)):Yt=c),Rn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xt&&((c=o=Yt)&&(o=c1(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Tn=n,Yt=mi(o.firstChild),hi=!1,c=!0):c=!1),c||Ua(n)),tt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Hf(c,f)?o=null:_!==null&&Hf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(t,n,bx,null,null,a),Co._currentValue=c),Dl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&xt&&((t=a=Yt)&&(a=u1(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return e0(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ms(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,_s(n),c=An(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return qm(t,n,n.type,n.pendingProps,a);case 15:return Ym(t,n,n.type,n.pendingProps,a);case 19:return n0(t,n,a);case 31:return Nx(t,n,a);case 22:return jm(t,n,a,n.pendingProps);case 24:return _s(n),o=An(hn),t===null?(c=Cu(),c===null&&(c=kt,f=Au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Du(n),Na(n,hn,c)):((t.lanes&a)!==0&&(Uu(t,n),oo(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,hn,o)):(o=f.cache,Na(n,hn,o),o!==c.cache&&Tu(n,[hn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(t){t.flags|=4}function hf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(D0())t.flags|=8192;else throw Ss=ml,wu}else t.flags&=-16777217}function a0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xg(n))if(D0())t.flags|=8192;else throw Ss=ml,wu}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,cr|=n)}function po(t,n){if(!xt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ox(t,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(hn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ks(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),jt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(jt(n),a0(n,f)):(jt(n),hf(n,c,null,o,a))):f?f!==t.memoizedState?(sa(n),jt(n),a0(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),jt(n),hf(n,c,t,o,a)),null;case 27:if(Ke(n),a=se.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}t=Ce.current,Ks(n)?Ip(n):(t=fg(c,o,a),n.stateNode=t,sa(n))}return jt(n),null;case 5:if(Ke(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=Ce.current,Ks(n))Ip(n);else{var _=Yl(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}f[fn]=n,f[bn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return jt(n),hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,Ks(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||eg(t.nodeValue,a)),t||Ua(n,!0)}else t=Yl(t).createTextNode(o),t[fn]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ks(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ks(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[fn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),jt(n),null);case 4:return He(),t===null&&Pf(n.stateNode.containerInfo),jt(n),null;case 10:return ta(n.type),jt(n),null;case 19:if(Z(ln),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)po(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,po(o,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Np(a,t),a=a.sibling;return Ee(ln,ln.current&1|2),xt&&$i(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Bt()>Il&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!xt)return jt(n),null}else 2*Bt()-o.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Bt(),t.sibling=null,a=ln.current,Ee(ln,c?a&1|2:a&1),xt&&$i(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ni(n),Pu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(hn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Px(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(hn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(ln),null;case 4:return He(),null;case 10:return ta(n.type),null;case 22:case 23:return ni(n),Pu(),t!==null&&Z(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(hn),null;case 25:return null;default:return null}}function s0(t,n){switch(Su(n),n.tag){case 3:ta(hn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Z(ln);break;case 10:ta(n.type);break;case 22:case 23:ni(n),Pu(),t!==null&&Z(vs);break;case 24:ta(hn)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==c)}}catch(R){zt(n,n.return,R)}}function Ba(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var H=a,te=R;try{te()}catch(me){zt(c,H,me)}}}o=o.next}while(o!==f)}}catch(me){zt(n,n.return,me)}}function r0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Kp(n,a)}catch(o){zt(t,t.return,o)}}}function o0(t,n,a){a.props=Es(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){zt(t,n,c)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(t,n,c)}else a.current=null}function l0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(t,t.return,c)}}function pf(t,n,a){try{var o=t.stateNode;i1(o,t.type,a,n),o[bn]=n}catch(c){zt(t,t.return,c)}}function c0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Ll(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function u0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[fn]=t,n[bn]=a}catch(f){zt(t,t.return,f)}}var ra=!1,gn=!1,_f=!1,f0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function zx(t,n){if(t=t.containerInfo,Bf=ec,t=Ep(t),cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,te=0,me=0,xe=t,le=null;t:for(;;){for(var ue;xe!==a||c!==0&&xe.nodeType!==3||(R=_+c),xe!==f||o!==0&&xe.nodeType!==3||(H=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)le=xe,xe=ue;for(;;){if(xe===t)break t;if(le===a&&++te===c&&(R=_),le===f&&++me===o&&(H=_),(ue=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ue}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:t,selectionRange:a},ec=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Es(a.type,c);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function d0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(t,a),o&4&&mo(5,a);break;case 1:if(la(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){zt(a,a.return,_)}else{var c=Es(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}o&64&&r0(a),o&512&&go(a,a.return);break;case 3:if(la(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(t,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&o&4&&u0(a);case 26:case 5:la(t,a),n===null&&o&4&&l0(a),o&512&&go(a,a.return);break;case 12:la(t,a);break;case 31:la(t,a),o&4&&m0(t,a);break;case 13:la(t,a),o&4&&g0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Wx.bind(null,a),f1(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||gn,c=ra;var f=gn;ra=o,(gn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):la(t,a),ra=c,gn=f}break;case 30:break;default:la(t,a)}}function h0(t){var n=t.alternate;n!==null&&(t.alternate=null,h0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ta(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Gn=!1;function oa(t,n,a){for(a=a.child;a!==null;)p0(t,n,a),a=a.sibling}function p0(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var o=Jt,c=Gn;Wa(a.type)&&(Jt=a.stateNode,Gn=!1),oa(t,n,a),To(a.stateNode),Jt=o,Gn=c;break;case 5:gn||zi(a,n);case 6:if(o=Jt,c=Gn,Jt=null,oa(t,n,a),Jt=o,Gn=c,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Jt!==null&&(Gn?(t=Jt,rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_r(t)):rg(Jt,a.stateNode));break;case 4:o=Jt,c=Gn,Jt=a.stateNode.containerInfo,Gn=!0,oa(t,n,a),Jt=o,Gn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),gn||Ba(4,a,n),oa(t,n,a);break;case 1:gn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&o0(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,oa(t,n,a),gn=o;break;default:oa(t,n,a)}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_r(t)}catch(a){zt(n,n.return,a)}}}function g0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_r(t)}catch(a){zt(n,n.return,a)}}function Ix(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f0),n;default:throw Error(s(435,t.tag))}}function Ol(t,n){var a=Ix(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=qx.bind(null,t,o);o.then(c,c)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Jt=R.stateNode,Gn=!1;break e}break;case 5:Jt=R.stateNode,Gn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(Jt===null)throw Error(s(160));p0(f,_,c),Jt=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_0(n,t),n=n.sibling}var Ti=null;function _0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),o&4&&(Ba(3,t,t.return),mo(3,t),Ba(5,t,t.return));break;case 1:Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ti;if(Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ba]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,o,a),f[fn]=t,dn(f),o=f;break e;case"link":var _=_g("link","href",c).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;case"meta":if(_=_g("meta","content",c).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[fn]=t,dn(f),o=f}t.stateNode=o}else vg(c,t.type,t.stateNode);else t.stateNode=gg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?vg(c,t.type,t.stateNode):gg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),a!==null&&o&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),o&512&&(gn||a===null||zi(a,a.return)),t.flags&32){c=t.stateNode;try{Jn(c,"")}catch(We){zt(t,t.return,We)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,pf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(_f=!0);break;case 6:if(Vn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){zt(t,t.return,We)}}break;case 3:if(Kl=null,c=Ti,Ti=jl(n.containerInfo),Vn(n,t),Ti=c,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(We){zt(t,t.return,We)}_f&&(_f=!1,v0(t));break;case 4:o=Ti,Ti=jl(t.stateNode.containerInfo),Vn(n,t),kn(t),Ti=o;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=Bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 22:c=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=ra,me=gn;if(ra=te||c,gn=me||H,Vn(n,t),gn=me,ra=te,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||ra||gn||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){zt(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(We){zt(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;c?og(ue,!0):og(H.stateNode,!1)}catch(We){zt(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ol(t,a))));break;case 19:Vn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(c0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(t);Ll(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=mf(t);Ll(t,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,te=mf(t);gf(t,te,H);break;default:throw Error(s(161))}}catch(me){zt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function la(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d0(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),bs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&o0(n,n.return,a),bs(n);break;case 27:To(n.stateNode);case 26:case 5:zi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ca(c,f,a),mo(4,f);break;case 1:if(ca(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(te){zt(o,o.return,te)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)Zp(H[c],R)}catch(te){zt(o,o.return,te)}}a&&_&64&&r0(f),go(f,f.return);break;case 27:u0(f);case 26:case 5:ca(c,f,a),a&&o===null&&_&4&&l0(f),go(f,f.return);break;case 12:ca(c,f,a);break;case 31:ca(c,f,a),a&&_&4&&m0(c,f);break;case 13:ca(c,f,a),a&&_&4&&g0(c,f);break;case 22:f.memoizedState===null&&ca(c,f,a),go(f,f.return);break;case 30:break;default:ca(c,f,a)}n=n.sibling}}function vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)x0(t,n,a,o),n=n.sibling}function x0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&mo(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):_o(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,rr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&vf(_,n);break;case 24:Ai(t,n,a,o),c&2048&&xf(n.alternate,n);break;default:Ai(t,n,a,o)}}function rr(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,H=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:rr(f,_,R,H,c),mo(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?rr(f,_,R,H,c):_o(f,_):(me._visibility|=2,rr(f,_,R,H,c)),c&&te&2048&&vf(_.alternate,_);break;case 24:rr(f,_,R,H,c),c&&te&2048&&xf(_.alternate,_);break;default:rr(f,_,R,H,c)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:_o(a,o),c&2048&&vf(o.alternate,o);break;case 24:_o(a,o),c&2048&&xf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var vo=8192;function or(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)S0(t,n,a),t=t.sibling}function S0(t,n,a){switch(t.tag){case 26:or(t,n,a),t.flags&vo&&t.memoizedState!==null&&E1(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:or(t,n,a);break;case 3:case 4:var o=Ti;Ti=jl(t.stateNode.containerInfo),or(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,or(t,n,a),vo=o):or(t,n,a));break;default:or(t,n,a)}}function M0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,E0(o,t)}M0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):xo(t);break;default:xo(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,E0(o,t)}M0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function E0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var c=o.sibling,f=o.return;if(h0(o),o===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var Bx={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,kt=null,ht=null,mt=0,Pt=0,ii=null,Fa=!1,lr=!1,Sf=!1,ua=0,sn=0,Ha=0,Ts=0,Mf=0,ai=0,cr=0,So=null,Xn=null,yf=!1,zl=0,b0=0,Il=1/0,Bl=null,Ga=null,xn=0,Va=null,ur=null,fa=0,Ef=0,bf=null,T0=null,Mo=0,Tf=null;function si(){return(Ct&2)!==0&&mt!==0?mt&-mt:F.T!==null?Uf():kr()}function A0(){if(ai===0)if((mt&536870912)===0||xt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Wn(t,n,a){(t===kt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(fr(t,0),ka(t,mt,ai,!1)),Ve(t,a),((Ct&2)===0||t!==kt)&&(t===kt&&((Ct&2)===0&&(Ts|=a),sn===4&&ka(t,mt,ai,!1)),Ii(t))}function R0(t,n,a){if((Ct&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),c=o?Vx(t,n):Rf(t,n,!0),f=o;do{if(c===0){lr&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Hx(a)){c=Rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;c=So;var H=R.current.memoizedState.isDehydrated;if(H&&(fr(R,_).flags|=256),_=Rf(R,_,!1),_!==2){if(Sf&&!H){R.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break e}f=Xn,Xn=c,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){fr(t,0),ka(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ai,!Fa);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=zl+300-Bt(),10<c)){if(ka(o,n,ai,!Fa),ge(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=ag(C0.bind(null,o,a,Xn,Bl,yf,n,ai,Ts,cr,Fa,f,"Throttled",-0,0),c);break e}C0(o,a,Xn,Bl,yf,n,ai,Ts,cr,Fa,f,null,-0,0)}}break}while(!0);Ii(t)}function C0(t,n,a,o,c,f,_,R,H,te,me,xe,le,ue){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},S0(n,f,xe);var We=(f&62914560)===f?zl-Bt():(f&4194048)===f?b0-Bt():0;if(We=b1(xe,We),We!==null){fa=f,t.cancelPendingCommit=We(z0.bind(null,t,n,f,a,o,c,_,R,H,me,xe,null,le,ue)),ka(t,f,_,!te);return}}z0(t,n,f,a,o,c,_,R,H)}function Hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!$n(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Mf,n&=~Ts,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Be(c),_=1<<f;o[f]=-1,c&=~_}a!==0&&Ut(t,a,n)}function Fl(){return(Ct&6)===0?(yo(0),!1):!0}function Af(){if(ht!==null){if(Pt===0)var t=ht.return;else t=ht,ea=gs=null,Gu(t),tr=null,io=0,t=ht;for(;t!==null;)s0(t.alternate,t),t=t.return;ht=null}}function fr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,r1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,Af(),kt=t,ht=a=Ji(t.current,null),mt=n,Pt=0,ii=null,Fa=!1,lr=we(t,n),Sf=!1,cr=ai=Mf=Ts=Ha=sn=0,Xn=So=null,yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Be(o),f=1<<c;n|=t[c],o&=~f}return ua=n,rl(),a}function w0(t,n){ot=null,F.H=fo,n===er||n===pl?(n=Wp(),Pt=3):n===wu?(n=Wp(),Pt=4):Pt=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ht===null&&(sn=1,Cl(t,ui(n,t.current)))}function D0(){var t=ti.current;return t===null?!0:(mt&4194048)===mt?pi===null:(mt&62914560)===mt||(mt&536870912)!==0?t===pi:!1}function U0(){var t=F.H;return F.H=fo,t===null?fo:t}function N0(){var t=F.A;return F.A=Bx,t}function Hl(){sn=4,Fa||(mt&4194048)!==mt&&ti.current!==null||(lr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||kt===null||ka(kt,mt,ai,!1)}function Rf(t,n,a){var o=Ct;Ct|=2;var c=U0(),f=N0();(kt!==t||mt!==n)&&(Bl=null,fr(t,n)),n=!1;var _=sn;e:do try{if(Pt!==0&&ht!==null){var R=ht,H=ii;switch(Pt){case 8:Af(),_=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var te=Pt;if(Pt=0,ii=null,dr(t,R,H,te),a&&lr){_=0;break e}break;default:te=Pt,Pt=0,ii=null,dr(t,R,H,te)}}Gx(),_=sn;break}catch(me){w0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ea=gs=null,Ct=o,F.H=c,F.A=f,ht===null&&(kt=null,mt=0,rl()),_}function Gx(){for(;ht!==null;)L0(ht)}function Vx(t,n){var a=Ct;Ct|=2;var o=U0(),c=N0();kt!==t||mt!==n?(Bl=null,Il=Bt()+500,fr(t,n)):lr=we(t,n);e:do try{if(Pt!==0&&ht!==null){n=ht;var f=ii;t:switch(Pt){case 1:Pt=0,ii=null,dr(t,n,f,1);break;case 2:case 9:if(kp(f)){Pt=0,ii=null,O0(n);break}n=function(){Pt!==2&&Pt!==9||kt!==t||(Pt=7),Ii(t)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:kp(f)?(Pt=0,ii=null,O0(n)):(Pt=0,ii=null,dr(t,n,f,7));break;case 5:var _=null;switch(ht.tag){case 26:_=ht.memoizedState;case 5:case 27:var R=ht;if(_?xg(_):R.stateNode.complete){Pt=0,ii=null;var H=R.sibling;if(H!==null)ht=H;else{var te=R.return;te!==null?(ht=te,Gl(te)):ht=null}break t}}Pt=0,ii=null,dr(t,n,f,5);break;case 6:Pt=0,ii=null,dr(t,n,f,6);break;case 8:Af(),sn=6;break e;default:throw Error(s(462))}}kx();break}catch(me){w0(t,me)}while(!0);return ea=gs=null,F.H=o,F.A=c,Ct=a,ht!==null?0:(kt=null,mt=0,rl(),sn)}function kx(){for(;ht!==null&&!nn();)L0(ht)}function L0(t){var n=i0(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?Gl(t):ht=n}function O0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,mt);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,mt);break;case 5:Gu(n);default:s0(a,n),n=ht=Np(n,ua),n=i0(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?Gl(t):ht=n}function dr(t,n,a,o){ea=gs=null,Gu(n),tr=null,io=0;var c=n.return;try{if(Ux(t,c,n,a,mt)){sn=1,Cl(t,ui(a,t.current)),ht=null;return}}catch(f){if(c!==null)throw ht=c,f;sn=1,Cl(t,ui(a,t.current)),ht=null;return}n.flags&32768?(xt||o===1?t=!0:lr||(mt&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),P0(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){P0(n,Fa);return}t=n.return;var a=Ox(n.alternate,n,ua);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);sn===0&&(sn=5)}function P0(t,n){do{var a=Px(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);sn=6,ht=null}function z0(t,n,a,o,c,f,_,R,H){t.cancelPendingCommit=null;do Vl();while(xn!==0);if((Ct&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,Zt(t,a,f,_,R,H),t===kt&&(ht=kt=null,mt=0),ur=n,Va=t,fa=a,Ef=f,bf=c,T0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yx(K,function(){return G0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,c=G.p,G.p=2,_=Ct,Ct|=4;try{zx(t,n,a)}finally{Ct=_,G.p=c,F.T=o}}xn=1,I0(),B0(),F0()}}function I0(){if(xn===1){xn=0;var t=Va,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var c=Ct;Ct|=4;try{_0(n,t);var f=Ff,_=Ep(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&yp(R.ownerDocument.documentElement,R)){if(H!==null&&cu(R)){var te=H.start,me=H.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ue=le.getSelection(),We=R.textContent.length,et=Math.min(H.start,We),Gt=H.end===void 0?et:Math.min(H.end,We);!ue.extend&&et>Gt&&(_=Gt,Gt=et,et=_);var j=Mp(R,et),k=Mp(R,Gt);if(j&&k&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var ee=xe.createRange();ee.setStart(j.node,j.offset),ue.removeAllRanges(),et>Gt?(ue.addRange(ee),ue.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ue.addRange(ee))}}}}for(xe=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ec=!!Bf,Ff=Bf=null}finally{Ct=c,G.p=o,F.T=a}}t.current=n,xn=2}}function B0(){if(xn===2){xn=0;var t=Va,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var c=Ct;Ct|=4;try{d0(t,n.alternate,n)}finally{Ct=c,G.p=o,F.T=a}}xn=3}}function F0(){if(xn===4||xn===3){xn=0,q();var t=Va,n=ur,a=fa,o=T0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ur=Va=null,H0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ga=null),Vr(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,c=G.p,G.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=c}}(fa&3)!==0&&Vl(),Ii(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Tf?Mo++:(Mo=0,Tf=t):Mo=0,yo(0)}}function H0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Vl(){return I0(),B0(),F0(),G0()}function G0(){if(xn!==5)return!1;var t=Va,n=Ef;Ef=0;var a=Vr(fa),o=F.T,c=G.p;try{G.p=32>a?32:a,F.T=null,a=bf,bf=null;var f=Va,_=fa;if(xn=0,ur=Va=null,fa=0,(Ct&6)!==0)throw Error(s(331));var R=Ct;if(Ct|=4,y0(f.current),x0(f,f.current,_,a),Ct=R,yo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{G.p=c,F.T=o,H0(t,n)}}function V0(t,n,a){n=ui(a,n),n=nf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Ve(t,2),Ii(t))}function zt(t,n,a){if(t.tag===3)V0(t,t,a);else for(;n!==null;){if(n.tag===3){V0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=ui(a,t),a=km(2),o=Pa(n,a,2),o!==null&&(Xm(a,o,n,t),Ve(o,2),Ii(o));break}}n=n.return}}function Cf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Fx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Sf=!0,c.add(a),t=Xx.bind(null,t,n,a),n.then(t,t))}function Xx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(mt&a)===a&&(sn===4||sn===3&&(mt&62914560)===mt&&300>Bt()-zl?(Ct&2)===0&&fr(t,0):Mf|=a,cr===mt&&(cr=0)),Ii(t)}function k0(t,n){n===0&&(n=Me()),t=hs(t,n),t!==null&&(Ve(t,n),Ii(t))}function Wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),k0(t,a)}function qx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),k0(t,a)}function Yx(t,n){return on(t,n)}var kl=null,hr=null,wf=!1,Xl=!1,Df=!1,Xa=0;function Ii(t){t!==hr&&t.next===null&&(hr===null?kl=hr=t:hr=hr.next=t),Xl=!0,wf||(wf=!0,Zx())}function yo(t,n){if(!Df&&Xl){Df=!0;do for(var a=!1,o=kl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Y0(o,f))}else f=mt,f=ge(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,Y0(o,f));o=o.next}while(a);Df=!1}}function jx(){X0()}function X0(){Xl=wf=!1;var t=0;Xa!==0&&s1()&&(t=Xa);for(var n=Bt(),a=null,o=kl;o!==null;){var c=o.next,f=W0(o,n);f===0?(o.next=null,a===null?kl=c:a.next=c,c===null&&(hr=a)):(a=o,(t!==0||(f&3)!==0)&&(Xl=!0)),o=c}xn!==0&&xn!==5||yo(t),Xa!==0&&(Xa=0)}function W0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Be(f),R=1<<_,H=c[_];H===-1?((R&a)===0||(R&o)!==0)&&(c[_]=Ie(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=kt,a=mt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Vr(a)){case 2:case 8:a=y;break;case 32:a=K;break;case 268435456:a=de;break;default:a=K}return o=q0.bind(null,t),a=on(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function q0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var o=mt;return o=ge(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(R0(t,o,n),W0(t,Bt()),t.callbackNode!=null&&t.callbackNode===a?q0.bind(null,t):null)}function Y0(t,n){if(Vl())return null;R0(t,n,!0)}function Zx(){o1(function(){(Ct&6)!==0?on(N,jx):X0()})}function Uf(){if(Xa===0){var t=Js;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Xa=t}return Xa}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cs(""+t)}function Z0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Kx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=j0((c[bn]||null).action),_=o.submitter;_&&(n=(n=_[bn]||null)?j0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new nl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var H=_?Z0(c,_):new FormData(c);Ku(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?Z0(c,_):new FormData(c),Ku(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var Nf=0;Nf<hu.length;Nf++){var Lf=hu[Nf],Qx=Lf.toLowerCase(),Jx=Lf[0].toUpperCase()+Lf.slice(1);bi(Qx,"on"+Jx)}bi(Ap,"onAnimationEnd"),bi(Rp,"onAnimationIteration"),bi(Cp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(px,"onTransitionRun"),bi(mx,"onTransitionStart"),bi(gx,"onTransitionCancel"),bi(wp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function K0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=te;try{f(c)}catch(me){sl(me)}c.currentTarget=null,f=H}else for(_=0;_<o.length;_++){if(R=o[_],H=R.instance,te=R.currentTarget,R=R.listener,H!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=te;try{f(c)}catch(me){sl(me)}c.currentTarget=null,f=H}}}}function pt(t,n){var a=n[rs];a===void 0&&(a=n[rs]=new Set);var o=t+"__bubble";a.has(o)||(Q0(n,t,2,!1),a.add(o))}function Of(t,n,a){var o=0;n&&(o|=4),Q0(a,t,o,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[Wl]){t[Wl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Of("selectionchange",!1,n))}}function Q0(t,n,a,o){switch(Ag(n)){case 2:var c=R1;break;case 8:c=C1;break;default:c=Kf}a=c.bind(null,n,a,t),c=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function zf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=ji(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=f=_;continue e}R=R.parentNode}}o=o.return}np(function(){var te=f,me=Jc(a),xe=[];e:{var le=Dp.get(t);if(le!==void 0){var ue=nl,We=t;switch(t){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":ue=qv;break;case"focusin":We="focus",ue=au;break;case"focusout":We="blur",ue=au;break;case"beforeblur":case"afterblur":ue=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Zv;break;case Ap:case Rp:case Cp:ue=Iv;break;case wp:ue=Qv;break;case"scroll":case"scrollend":ue=Nv;break;case"wheel":ue=$v;break;case"copy":case"cut":case"paste":ue=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=op;break;case"toggle":case"beforetoggle":ue=tx}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),j=et?le!==null?le+"Capture":null:le;et=[];for(var k=te,ee;k!==null;){var ve=k;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||j===null||(ve=Xr(k,j),ve!=null&&et.push(bo(k,ve,ee))),Gt)break;k=k.return}0<et.length&&(le=new ue(le,We,null,a,me),xe.push({event:le,listeners:et}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==Qc&&(We=a.relatedTarget||a.fromElement)&&(ji(We)||We[Fn]))break e;if((ue||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(We=a.relatedTarget||a.toElement,ue=te,We=We?ji(We):null,We!==null&&(Gt=u(We),et=We.tag,We!==Gt||et!==5&&et!==27&&et!==6)&&(We=null)):(ue=null,We=te),ue!==We)){if(et=sp,ve="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=op,ve="onPointerLeave",j="onPointerEnter",k="pointer"),Gt=ue==null?le:ls(ue),ee=We==null?le:ls(We),le=new et(ve,k+"leave",ue,a,me),le.target=Gt,le.relatedTarget=ee,ve=null,ji(me)===te&&(et=new et(j,k+"enter",We,a,me),et.target=ee,et.relatedTarget=Gt,ve=et),Gt=ve,ue&&We)t:{for(et=e1,j=ue,k=We,ee=0,ve=j;ve;ve=et(ve))ee++;ve=0;for(var $e=k;$e;$e=et($e))ve++;for(;0<ee-ve;)j=et(j),ee--;for(;0<ve-ee;)k=et(k),ve--;for(;ee--;){if(j===k||k!==null&&j===k.alternate){et=j;break t}j=et(j),k=et(k)}et=null}else et=null;ue!==null&&J0(xe,le,ue,et,!1),We!==null&&Gt!==null&&J0(xe,Gt,We,et,!0)}}e:{if(le=te?ls(te):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Tt=mp;else if(hp(le))if(gp)Tt=fx;else{Tt=cx;var Ye=lx}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?te&&Dt(te.elementType)&&(Tt=mp):Tt=ux;if(Tt&&(Tt=Tt(t,te))){pp(xe,Tt,a,me);break e}Ye&&Ye(t,le,te),t==="focusout"&&te&&le.type==="number"&&te.memoizedProps.value!=null&&dt(le,"number",le.value)}switch(Ye=te?ls(te):window,t){case"focusin":(hp(Ye)||Ye.contentEditable==="true")&&(Xs=Ye,uu=te,Jr=null);break;case"focusout":Jr=uu=Xs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,bp(xe,a,me);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":bp(xe,a,me)}var lt;if(ru)e:{switch(t){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ks?fp(t,a)&&(gt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(lp&&a.locale!=="ko"&&(ks||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ks&&(lt=ip()):(Ca=me,tu="value"in Ca?Ca.value:Ca.textContent,ks=!0)),Ye=ql(te,gt),0<Ye.length&&(gt=new rp(gt,t,null,a,me),xe.push({event:gt,listeners:Ye}),lt?gt.data=lt:(lt=dp(a),lt!==null&&(gt.data=lt)))),(lt=ix?ax(t,a):sx(t,a))&&(gt=ql(te,"onBeforeInput"),0<gt.length&&(Ye=new rp("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ye,listeners:gt}),Ye.data=lt)),Kx(xe,t,te,a,me)}K0(xe,n)})}function bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xr(t,a),c!=null&&o.unshift(bo(t,c,f)),c=Xr(t,n),c!=null&&o.push(bo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function e1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J0(t,n,a,o,c){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||te===null||(H=te,c?(te=Xr(a,f),te!=null&&_.unshift(bo(a,te,H))):c||(te=Xr(a,f),te!=null&&_.push(bo(a,te,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(t1,`
`).replace(n1,"")}function eg(t,n){return n=$0(n),$0(t)===n}function Ht(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",c.name,c,null),Ht(t,n,"formEncType",c.formEncType,c,null),Ht(t,n,"formMethod",c.formMethod,c,null),Ht(t,n,"formTarget",c.formTarget,c,null)):(Ht(t,n,"encType",c.encType,c,null),Ht(t,n,"method",c.method,c,null),Ht(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=cs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,Ne(t,a,o))}}function If(t,n,a,o,c,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Jn(t,o):(typeof o=="number"||typeof o=="bigint")&&Jn(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,f,_,a,null)}}c&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var R=f=_=c=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":c=me;break;case"type":_=me;break;case"checked":H=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Ht(t,n,o,me,a,null)}}Dn(t,f,R,H,te,_,c,!1);return;case"select":pt("invalid",t),o=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Ht(t,n,c,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":pt("invalid",t),f=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(t,n,_,R,a,null)}yi(t,o,c,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ht(t,n,H,o,a,null));return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)pt(Eo[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,te,o,a,null)}return;default:if(Dt(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&If(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ht(t,n,R,o,a,null))}function i1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,H=null,te=null,me=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(ue)||Ht(t,n,ue,null,o,xe)}}for(var le in o){var ue=o[le];if(xe=a[le],o.hasOwnProperty(le)&&(ue!=null||xe!=null))switch(le){case"type":f=ue;break;case"name":c=ue;break;case"checked":te=ue;break;case"defaultChecked":me=ue;break;case"value":_=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==xe&&Ht(t,n,le,ue,o,xe)}}Fe(t,_,R,H,te,me,f,c);return;case"select":ue=_=R=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,H)}for(c in o)if(f=o[c],H=a[c],o.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":le=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&Ht(t,n,c,f,o,H)}n=R,a=_,o=ue,le!=null?vn(t,!!a,le,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(t,n,R,null,o,c)}for(_ in o)if(c=o[_],f=a[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":le=c;break;case"defaultValue":ue=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ht(t,n,_,c,o,f)}Qn(t,le,ue);return;case"option":for(var We in a)le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Ht(t,n,We,null,o,le));for(H in o)le=o[H],ue=a[H],o.hasOwnProperty(H)&&le!==ue&&(le!=null||ue!=null)&&(H==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Ht(t,n,H,le,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)le=a[et],a.hasOwnProperty(et)&&le!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,le);for(te in o)if(le=o[te],ue=a[te],o.hasOwnProperty(te)&&le!==ue&&(le!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Ht(t,n,te,le,o,ue)}return;default:if(Dt(n)){for(var Gt in a)le=a[Gt],a.hasOwnProperty(Gt)&&le!==void 0&&!o.hasOwnProperty(Gt)&&If(t,n,Gt,void 0,o,le);for(me in o)le=o[me],ue=a[me],!o.hasOwnProperty(me)||le===ue||le===void 0&&ue===void 0||If(t,n,me,le,o,ue);return}}for(var j in a)le=a[j],a.hasOwnProperty(j)&&le!=null&&!o.hasOwnProperty(j)&&Ht(t,n,j,null,o,le);for(xe in o)le=o[xe],ue=a[xe],!o.hasOwnProperty(xe)||le===ue||le==null&&ue==null||Ht(t,n,xe,le,o,ue)}function tg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&tg(_)){for(_=0,R=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>R)break;var me=H.transferSize,xe=H.initiatorType;me&&tg(xe)&&(H=H.responseEnd,_+=me*(H<R?1:(R-te)/(H-te)))}if(--o,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bf=null,Ff=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function s1(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var ag=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(l1)}:ag;function l1(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function rg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&To(t.ownerDocument.body);a=c}while(a);_r(n)}function og(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function c1(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function u1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function lg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function f1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function cg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ug(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function fg(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ta(t)}var gi=new Map,dg=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=G.d;G.d={f:d1,r:h1,D:p1,C:m1,L:g1,m:_1,X:x1,S:v1,M:S1};function d1(){var t=da.f(),n=Fl();return t||n}function h1(t){var n=Zi(t);n!==null&&n.tag===5&&n.type==="form"?wm(n):da.r(t)}var pr=typeof document>"u"?null:document;function hg(t,n,a){var o=pr;if(o&&typeof n=="string"&&n){var c=Lt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),dg.has(c)||(dg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),dn(n),o.head.appendChild(n)))}}function p1(t){da.D(t),hg("dns-prefetch",t,null)}function m1(t,n){da.C(t,n),hg("preconnect",t,n)}function g1(t,n,a){da.L(t,n,a);var o=pr;if(o&&t&&n){var c='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Lt(a.imageSizes)+'"]')):c+='[href="'+Lt(t)+'"]';var f=c;switch(n){case"style":f=mr(t);break;case"script":f=gr(t)}gi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),gi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Cn(n,"link",t),dn(n),o.head.appendChild(n)))}}function _1(t,n){da.m(t,n);var a=pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Lt(o)+'"][href="'+Lt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(t)}if(!gi.has(f)&&(t=x({rel:"modulepreload",href:t},n),gi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Cn(o,"link",t),dn(o),a.head.appendChild(o)}}}function v1(t,n,a){da.S(t,n,a);var o=pr;if(o&&t){var c=Aa(o).hoistableStyles,f=mr(t);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Ao(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=gi.get(f))&&qf(t,a);var H=_=o.createElement("link");dn(H),Cn(H,"link",t),H._p=new Promise(function(te,me){H.onload=te,H.onerror=me}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Zl(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function x1(t,n){da.X(t,n);var a=pr;if(a&&t){var o=Aa(a).hoistableScripts,c=gr(t),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(t=x({src:t,async:!0},n),(n=gi.get(c))&&Yf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function S1(t,n){da.M(t,n);var a=pr;if(a&&t){var o=Aa(a).hoistableScripts,c=gr(t),f=o.get(c);f||(f=a.querySelector(Ro(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=gi.get(c))&&Yf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function pg(t,n,a,o){var c=(c=se.current)?jl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Aa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var f=Aa(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Ao(t)))&&!f._p&&(_.instance=f,_.state.loading=5),gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(t,a),f||M1(c,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Aa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mr(t){return'href="'+Lt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function mg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function M1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),dn(n),t.head.appendChild(n))}function gr(t){return'[src="'+Lt(t)+'"]'}function Ro(t){return"script[async]"+t}function gg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Cn(o,"style",c),Zl(o,a.precedence,t),n.instance=o;case"stylesheet":c=mr(a.href);var f=t.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=mg(a),(c=gi.get(c))&&qf(o,c),f=(t.ownerDocument||t).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Cn(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=gr(a.src),(c=t.querySelector(Ro(f)))?(n.instance=c,dn(c),c):(o=a,(c=gi.get(f))&&(o=x({},a),Yf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),dn(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,t));return n.instance}function Zl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function _g(t,n,a){if(Kl===null){var o=new Map,c=Kl=new Map;c.set(a,o)}else c=Kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ba]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function vg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function y1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function E1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=mr(o.href),f=n.querySelector(Ao(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=mg(o),(c=gi.get(c))&&qf(o,c),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function b1(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&jf===0&&(jf=62500*a1());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(T1,t),Jl=null,Ql.call(t))}function T1(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var o=a.get(null);else{a=new Map,Jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,c),a.set(_,c),this.count++,o=Ql.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:B,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function A1(t,n,a,o,c,f,_,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Sg(t,n,a,o,c,f,_,R,H,te,me,xe){return t=new A1(t,n,a,_,H,te,me,xe,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=Au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),t}function Mg(t){return t?(t=Ys,t):Ys}function yg(t,n,a,o,c,f){c=Mg(c),o.context===null?o.context=c:o.pendingContext=c,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(t,o,n),a!==null&&(Wn(a,t,n),so(a,t,n))}function Eg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){Eg(t,n),(t=t.alternate)&&Eg(t,n)}function bg(t){if(t.tag===13||t.tag===31){var n=hs(t,67108864);n!==null&&Wn(n,t,67108864),Zf(t,67108864)}}function Tg(t){if(t.tag===13||t.tag===31){var n=si();n=Gr(n);var a=hs(t,n);a!==null&&Wn(a,t,n),Zf(t,n)}}var ec=!0;function R1(t,n,a,o){var c=F.T;F.T=null;var f=G.p;try{G.p=2,Kf(t,n,a,o)}finally{G.p=f,F.T=c}}function C1(t,n,a,o){var c=F.T;F.T=null;var f=G.p;try{G.p=8,Kf(t,n,a,o)}finally{G.p=f,F.T=c}}function Kf(t,n,a,o){if(ec){var c=Qf(o);if(c===null)zf(t,n,o,tc,a),Rg(t,o);else if(D1(c,t,n,a,o))o.stopPropagation();else if(Rg(t,o),n&4&&-1<w1.indexOf(t)){for(;c!==null;){var f=Zi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-Be(_);R.entanglements[1]|=H,_&=~H}Ii(f),(Ct&6)===0&&(Il=Bt()+500,yo(0))}}break;case 31:case 13:R=hs(f,2),R!==null&&Wn(R,f,2),Fl(),Zf(f,2)}if(f=Qf(o),f===null&&zf(t,n,o,tc,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else zf(t,n,o,null,a)}}function Qf(t){return t=Jc(t),Jf(t)}var tc=null;function Jf(t){if(tc=null,t=ji(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function Ag(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case N:return 2;case y:return 8;case K:case re:return 32;case de:return 268435456;default:return 32}default:return 32}}var $f=!1,qa=null,Ya=null,ja=null,wo=new Map,Do=new Map,Za=[],w1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Zi(n),n!==null&&bg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function D1(t,n,a,o,c){switch(n){case"focusin":return qa=Uo(qa,t,n,a,o,c),!0;case"dragenter":return Ya=Uo(Ya,t,n,a,o,c),!0;case"mouseover":return ja=Uo(ja,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,c)),!0}return!1}function Cg(t){var n=ji(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){Tg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){Tg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=Zi(a),n!==null&&bg(n),t.blockedOn=a,!1;n.shift()}return!0}function wg(t,n,a){nc(t)&&a.delete(n)}function U1(){$f=!1,qa!==null&&nc(qa)&&(qa=null),Ya!==null&&nc(Ya)&&(Ya=null),ja!==null&&nc(ja)&&(ja=null),wo.forEach(wg),Do.forEach(wg)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,U1)))}var ac=null;function Dg(t){ac!==t&&(ac=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=Zi(a);f!==null&&(t.splice(n,3),n-=3,Ku(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function _r(t){function n(H){return ic(H,t)}qa!==null&&ic(qa,t),Ya!==null&&ic(Ya,t),ja!==null&&ic(ja,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Cg(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],_=c[bn]||null;if(typeof f=="function")_||Dg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[bn]||null)R=_.formAction;else if(Jf(c)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Dg(a)}}}function Ug(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ed(t){this._internalRoot=t}sc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();yg(a,o,t,n,null,null)},sc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yg(t.current,2,null,t,null,null),Fl(),n[Fn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&Cg(t)}};var Ng=e.version;if(Ng!=="19.2.4")throw Error(s(527,Ng,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var N1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{fe=rc.inject(N1),he=rc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=Fm,f=Hm,_=Gm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Sg(t,1,!1,null,null,a,o,null,c,f,_,Ug),t[Fn]=n.current,Pf(t),new ed(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",f=Fm,_=Hm,R=Gm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Sg(t,1,!0,n,a??null,o,c,H,f,_,R,Ug),n.context=Mg(null),a=n.current,o=si(),o=Gr(o),c=Oa(o),c.callback=null,Pa(a,c,o),a=o,n.current.lanes=a,Ve(n,a),Ii(n),t[Fn]=n.current,Pf(t),new sc(n)},Lo.version="19.2.4",Lo}var Vg;function V1(){if(Vg)return id.exports;Vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=G1(),id.exports}var k1=V1();const j_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const X1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const W1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());const kg=r=>{const e=W1(r);return e.charAt(0).toUpperCase()+e.slice(1)};var q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Y1=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const j1=Xt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...p},m)=>Xt.createElement("svg",{ref:m,...q1,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:j_("lucide",l),...!u&&!Y1(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>Xt.createElement(h,S)),...Array.isArray(u)?u:[u]]));const Z1=(r,e)=>{const i=Xt.forwardRef(({className:s,...l},u)=>Xt.createElement(j1,{ref:u,iconNode:e,className:j_(`lucide-${X1(kg(r))}`,`lucide-${r}`,s),...l}));return i.displayName=kg(r),i};const K1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Q1=Z1("phone",K1);function J1(r={}){const e=Xt.useRef(null),i=Xt.useRef(null),{maxTilt:s=8,perspective:l=1e3,scale:u=1.02,speed:d=400,glareOpacity:p=.1}=r;return Xt.useEffect(()=>{const m=e.current;if(!m)return;let h=i.current;h||(h=document.createElement("div"),h.className="card-glare",Object.assign(h.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",backgroundImage:"radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)",opacity:0,transition:`opacity ${d}ms cubic-bezier(0.22, 1, 0.36, 1)`,zIndex:99,borderRadius:"inherit"}),window.getComputedStyle(m).position==="static"&&(m.style.position="relative"),m.appendChild(h),i.current=h);const S=E=>{const b=m.getBoundingClientRect(),C=E.clientX-b.left,M=E.clientY-b.top,v=b.width,I=b.height,B=C/v-.5,z=-(M/I-.5)*s,U=B*s;m.style.transform=`perspective(${l}px) rotateX(${z}deg) rotateY(${U}deg) scale3d(${u}, ${u}, ${u})`;const P=C/v*100,T=M/I*100;h.style.backgroundImage=`radial-gradient(circle at ${P}% ${T}%, rgba(255, 255, 255, ${p}) 0%, transparent 60%)`,h.style.opacity=1},x=()=>{m.style.transition=`transform ${d}ms cubic-bezier(0.22, 1, 0.36, 1)`,h.style.transition=`opacity ${d}ms cubic-bezier(0.22, 1, 0.36, 1)`,setTimeout(()=>{m.style.transform!==""&&(m.style.transition="none",h.style.transition="none")},d)},g=()=>{m.style.transition=`transform ${d}ms cubic-bezier(0.22, 1, 0.36, 1)`,m.style.transform=`perspective(${l}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,h.style.transition=`opacity ${d}ms cubic-bezier(0.22, 1, 0.36, 1)`,h.style.opacity=0};return m.addEventListener("mousemove",S),m.addEventListener("mouseenter",x),m.addEventListener("mouseleave",g),()=>{m.removeEventListener("mousemove",S),m.removeEventListener("mouseenter",x),m.removeEventListener("mouseleave",g),h&&m.contains(h)&&m.removeChild(h)}},[s,l,u,d,p]),e}function Ds({children:r,className:e,style:i,options:s,as:l="div",...u}){const d=J1(s);return D.jsx(l,{ref:d,className:e,style:i,...u,children:r})}const od="Surajshivam-123",ld="Surajshivam",Xg="s_u_r_a_j",Wg="skumar919810",$1="https://corsproxy.io/?",oc=r=>{const e=`${$1}${encodeURIComponent(r)}`;return fetch(e)},qg=r=>r?r>=2400?"#ff3300":r>=2100?"#ff8800":r>=1900?"#cc44cc":r>=1600?"#4488ff":r>=1400?"#03d8c8":r>=1200?"#44cc44":"#aaaaaa":"#aaa",Yg=r=>r?r>=2400?{label:"Grandmaster",color:"#ff3300"}:r>=2100?{label:"Master",color:"#ff8800"}:r>=1900?{label:"Candidate Master",color:"#cc44cc"}:r>=1600?{label:"Expert",color:"#4488ff"}:r>=1400?{label:"Specialist",color:"#03d8c8"}:r>=1200?{label:"Pupil",color:"#44cc44"}:{label:"Newbie",color:"#aaa"}:{label:"Unrated",color:"#aaa"};function eS(r=.1){const e=Xt.useRef(null),[i,s]=Xt.useState(!1);return Xt.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(s(!0),l.disconnect())},{threshold:r});return e.current&&l.observe(e.current),()=>l.disconnect()},[r]),[e,i]}function tS(){const[r,e]=Xt.useState(null),[i,s]=Xt.useState(null),[l,u]=Xt.useState(null),[d,p]=Xt.useState(null),[m,h]=Xt.useState({github:!0,leetcode:!0,codeforces:!0,codechef:!0}),[S,x]=eS(.1);Xt.useEffect(()=>{Promise.all([fetch(`https://api.github.com/users/${od}`).then(C=>C.json()),fetch(`https://api.github.com/users/${od}/repos?per_page=100&sort=stars`).then(C=>C.json())]).then(([C,M])=>{const v=Array.isArray(M)?M.reduce((I,B)=>I+(B.stargazers_count||0),0):0;e({...C,totalStars:v})}).catch(()=>e({error:!0})).finally(()=>h(C=>({...C,github:!1}))),Promise.all([oc(`https://alfa-leetcode-api.onrender.com/${ld}/solved`).then(C=>C.json()),oc(`https://alfa-leetcode-api.onrender.com/${ld}/contest`).then(C=>C.json())]).then(([C,M])=>s({d:C,c:M})).catch(()=>s({error:!0})).finally(()=>h(C=>({...C,leetcode:!1}))),oc(`https://codeforces.com/api/user.info?handles=${Xg}`).then(C=>C.json()).then(C=>{C.status==="OK"&&u(C.result[0])}).catch(()=>u({error:!0})).finally(()=>h(C=>({...C,codeforces:!1}))),oc(`https://codechef-api-henna.vercel.app/${Wg}`).then(C=>C.json()).then(C=>p(C)).catch(()=>p({error:!0})).finally(()=>h(C=>({...C,codechef:!1})))},[]);const g=({label:C,value:M,color:v="var(--text)",sub:I})=>D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid var(--border)",fontSize:13},children:[D.jsx("span",{style:{color:"var(--muted)"},children:C}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2},children:[D.jsx("span",{style:{color:v,fontWeight:600},children:M??D.jsx("span",{style:{color:"var(--muted)"},children:"—"})}),I&&D.jsx("span",{style:{color:"var(--muted)",fontSize:10},children:I})]})]}),E={github:{color:"#39ff14",shadow:"#39ff1422",glow:"#39ff1444"},leetcode:{color:"#ffa500",shadow:"#ffa50018",glow:"#ffa50033"},codeforces:{color:"#00d4ff",shadow:"#00d4ff18",glow:"#00d4ff33"},codechef:{color:"#ff6b35",shadow:"#ff6b3518",glow:"#ff6b3533"}},b=({platform:C,title:M,username:v,children:I})=>{const{color:B,glow:w}=E[C],z=m[C],[U,P]=Xt.useState(!1),T=(L=20)=>{switch(C){case"github":return D.jsx("svg",{viewBox:"0 0 24 24",width:L,height:L,fill:"currentColor",children:D.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})});case"leetcode":return D.jsxs("svg",{viewBox:"0 0 24 24",width:L,height:L,fill:"currentColor",children:[D.jsx("path",{d:"M16.102 17.93l-2.69 2.6c-.75.68-1.8.68-2.55 0l-5.69-5.46c-.75-.68-.75-1.8 0-2.48l5.69-5.46c.75-.68 1.8-.68 2.55 0l2.69 2.6c.3.28.3.73 0 1.01s-.77.28-1.07 0l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-4.5 4.31c-.45.4-.45 1.07 0 1.48l4.5 4.3c.45.41.9.41 1.35 0l2.14-2.08c.3-.27.77-.27 1.07 0s.3.73 0 1.01z"}),D.jsx("path",{d:"M8.28 12.38L16.2 4.75c.75-.68 1.8-.68 2.55 0l2.69 2.6c.75.68.75 1.8 0 2.48l-7.92 7.63c-.75.68-1.8.68-2.55 0l-2.69-2.6c-.3-.28-.3-.73 0-1.01s.77-.28 1.07 0l2.14 2.07c.45.4.9.4 1.35 0l6.75-6.5c.45-.4.45-1.07 0-1.48l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-6.75 6.5c-.3.28-.77.28-1.07 0s-.3-.73 0-1.01z"})]});case"codeforces":return D.jsx("svg",{viewBox:"0 0 24 24",width:L,height:L,fill:"currentColor",children:D.jsx("path",{d:"M4.5 7.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-3 0V9a1.5 1.5 0 011.5-1.5zM12 3a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0V4.5a1.5 1.5 0 011.5-1.5zM19.5 12a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-3 0v-6a1.5 1.5 0 011.5-1.5z"})});case"codechef":return D.jsx("svg",{viewBox:"0 0 24 24",width:L,height:L,fill:"currentColor",children:D.jsx("path",{d:"M12 2C9.24 2 7 4.24 7 7c0 .77.18 1.5.49 2.16L3.34 11.3a1 1 0 00-.23 1.36c.2.3.52.48.88.48h2.09c.27 1.54 1.25 2.87 2.65 3.52l-2.16 4.32a1 1 0 001.79.89l2.25-4.5c.44.09.89.13 1.38.13s.94-.04 1.38-.13l2.25 4.5a1 1 0 001.79-.89l-2.16-4.32c1.4-.65 2.38-1.98 2.65-3.52h2.09c.36 0 .68-.18.88-.48a1 1 0 00-.23-1.36l-4.15-2.14c.31-.66.49-1.39.49-2.16 0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-3.5 8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})});default:return null}};return D.jsxs(Ds,{onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),style:{background:"var(--surface)",border:`1px solid ${U?"rgba(255,255,255,0.15)":"var(--border)"}`,borderRadius:12,padding:"2rem",position:"relative",boxShadow:U?`0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${w}`:"0 4px 24px rgba(0, 0, 0, 0.2)",overflow:"hidden",transformStyle:"preserve-3d",willChange:"transform"},children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,paddingBottom:12,borderBottom:"1px solid var(--border)",transform:"translateZ(30px)",transformStyle:"preserve-3d"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[D.jsx("span",{style:{color:B,display:"flex",alignItems:"center"},children:T(20)}),D.jsx("span",{style:{color:"var(--text)",fontWeight:700,fontSize:14,letterSpacing:2},children:M})]}),D.jsxs("a",{href:`https://${C==="codeforces"?"codeforces.com/profile/"+v:C==="github"?"github.com/"+v:C==="codechef"?"codechef.com/users/"+v:"leetcode.com/u/"+v}`,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--muted)",fontSize:11,letterSpacing:1,textDecoration:"none",transition:"color 0.2s"},onMouseEnter:L=>{L.target.style.color=B},onMouseLeave:L=>{L.target.style.color="var(--muted)"},children:["@",v," ↗"]})]}),z?D.jsx("div",{style:{padding:"40px 0",textAlign:"center",color:"var(--muted)",fontSize:12,letterSpacing:2,transform:"translateZ(20px)"},children:"FETCHING DATA..."}):D.jsx("div",{style:{minHeight:140,transform:"translateZ(20px)",transformStyle:"preserve-3d"},children:I}),D.jsxs("div",{style:{marginTop:20,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",fontSize:10,color:"var(--muted)",transform:"translateZ(25px)"},children:[D.jsxs("span",{style:{color:z?"#ff4444":"#00cc33",fontWeight:600},children:["● ",z?"FETCHING…":"LIVE"]}),D.jsxs("span",{children:["SYNC ",new Date().getHours(),":",String(new Date().getMinutes()).padStart(2,"0")," UTC"]})]})]})};return D.jsxs("div",{ref:S,className:`section-wrapper${x?" section-visible":""}`,style:{paddingBottom:"4rem"},children:[D.jsx("div",{className:"section-label",children:"Stats"}),D.jsxs("h2",{className:"section-title",children:["Coding",D.jsx("br",{}),"Profiles."]}),D.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:20,marginTop:"3.5rem"},children:[D.jsx(b,{platform:"github",title:"GITHUB",username:od,children:r&&!r.error?D.jsxs(D.Fragment,{children:[D.jsx(g,{label:"PUBLIC_REPOS",value:r.public_repos,color:"#39ff14"}),D.jsx(g,{label:"FOLLOWERS",value:r.followers,color:"#39ff14"}),D.jsx(g,{label:"FOLLOWING",value:r.following}),D.jsx(g,{label:"TOTAL_STARS",value:r.totalStars,color:"#ffff44"}),D.jsx(g,{label:"PUBLIC_GISTS",value:r.public_gists}),r.location&&D.jsx(g,{label:"LOCATION",value:r.location})]}):!m.github&&D.jsx("div",{style:{color:"#ff8844",fontSize:12,padding:"16px 0"},children:"⚠ API UNAVAILABLE"})}),D.jsx(b,{platform:"leetcode",title:"LEETCODE",username:ld,children:i&&!i.error?D.jsxs(D.Fragment,{children:[D.jsx(g,{label:"TOTAL_SOLVED",value:i.d.solvedProblem??i.d.totalSolved,color:"#ffa500"}),D.jsx(g,{label:"EASY",value:i.d.easySolved,color:"#44ff88"}),D.jsx(g,{label:"MEDIUM",value:i.d.mediumSolved,color:"#ffcc00"}),D.jsx(g,{label:"HARD",value:i.d.hardSolved,color:"#ff4444"}),D.jsx(g,{label:"Rating",value:i.c.contestRating,color:"#4aff44"})]}):!m.leetcode&&D.jsx("div",{style:{color:"#ff8844",fontSize:12,padding:"16px 0"},children:"⚠ API UNAVAILABLE"})}),D.jsx(b,{platform:"codeforces",title:"CODEFORCES",username:Xg,children:l&&!l.error?D.jsxs(D.Fragment,{children:[D.jsx(g,{label:"CURRENT_RATING",value:l.rating,color:qg(l.rating),sub:Yg(l.rating).label}),D.jsx(g,{label:"MAX_RATING",value:l.maxRating,color:qg(l.maxRating),sub:Yg(l.maxRating).label}),D.jsx(g,{label:"RANK",value:l.rank?.toUpperCase(),color:"#39ff1466"}),D.jsx(g,{label:"MAX_RANK",value:l.maxRank?.toUpperCase()}),l.organization&&D.jsx(g,{label:"ORGANIZATION",value:l.organization})]}):!m.codeforces&&D.jsx("div",{style:{color:"#00ffc3aa",fontSize:12,padding:"16px 0"},children:"⚠ API UNAVAILABLE"})}),D.jsx(b,{platform:"codechef",title:"CODECHEF",username:Wg,children:d&&!d.error?D.jsxs(D.Fragment,{children:[D.jsx(g,{label:"RATING",value:d.rating,color:"#ff6b35"}),D.jsx(g,{label:"HIGHEST RATING",value:d.highest_rating.slice(16,-1),color:"#ff6b35"}),D.jsx(g,{label:"STARS",value:"★".repeat(3),color:"#ffcc00"}),D.jsx(g,{label:"GLOBAL_RANK",value:d.global_rank,color:"#ff6b35"}),D.jsx(g,{label:"COUNTRY_RANK",value:d.country_rank})]}):!m.codechef&&D.jsx("div",{style:{color:"#ff6b35aa",fontSize:12,padding:"16px 0"},children:"⚠ API UNAVAILABLE"})})]})]})}const zh="185",nS=0,jg=1,iS=2,Lc=1,aS=2,Go=3,ss=0,Yn=1,va=2,Sa=0,Nr=1,Vd=2,Zg=3,Kg=4,sS=5,Ns=100,rS=101,oS=102,lS=103,cS=104,uS=200,fS=201,dS=202,hS=203,kd=204,Xd=205,pS=206,mS=207,gS=208,_S=209,vS=210,xS=211,SS=212,MS=213,yS=214,Wd=0,qd=1,Yd=2,Pr=3,jd=4,Zd=5,Kd=6,Qd=7,Z_=0,ES=1,bS=2,ki=0,K_=1,Q_=2,J_=3,$_=4,ev=5,tv=6,nv=7,iv=300,zs=301,zr=302,cd=303,ud=304,qc=306,Jd=1e3,xa=1001,$d=1002,wn=1003,TS=1004,lc=1005,On=1006,fd=1007,Os=1008,Si=1009,av=1010,sv=1011,Xo=1012,Ih=1013,Wi=1014,Gi=1015,ya=1016,Bh=1017,Fh=1018,Wo=1020,rv=35902,ov=35899,lv=1021,cv=1022,Ui=1023,Ea=1026,Ps=1027,uv=1028,Hh=1029,Is=1030,Gh=1031,Vh=1033,Oc=33776,Pc=33777,zc=33778,Ic=33779,eh=35840,th=35841,nh=35842,ih=35843,ah=36196,sh=37492,rh=37496,oh=37488,lh=37489,Fc=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,_h=37815,vh=37816,xh=37817,Sh=37818,Mh=37819,yh=37820,Eh=37821,bh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,Hc=36285,wh=36286,AS=3200,Qg=0,RS=1,is="",vi="srgb",Gc="srgb-linear",Vc="linear",It="srgb",vr=7680,Jg=519,CS=512,wS=513,DS=514,kh=515,US=516,NS=517,Xh=518,LS=519,$g=35044,e_="300 es",Vi=2e3,kc=2001;function OS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function PS(){const r=Xc("canvas");return r.style.display="block",r}const t_={};function n_(...r){const e="THREE."+r.shift();console.log(e,...r)}function fv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=fv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Et(...r){r=fv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Lr(...r){const e=r.join(" ");e in t_||(t_[e]=!0,nt(...r))}function zS(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const IS={[Wd]:qd,[Yd]:Kd,[jd]:Qd,[Pr]:Zd,[qd]:Wd,[Kd]:Yd,[Qd]:jd,[Zd]:Pr};class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Dh=180/Math.PI;function qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Mt(r,e,i){return Math.max(e,Math.min(i,r))}function BS(r,e){return(r%e+e)%e}function hd(r,e,i){return(1-i)*r+i*e}function Oo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kh=class Kh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kh.prototype.isVector2=!0;let wt=Kh;class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],x=s[l+3],g=u[d+0],E=u[d+1],b=u[d+2],C=u[d+3];if(x!==C||m!==g||h!==E||S!==b){let M=m*g+h*E+S*b+x*C;M<0&&(g=-g,E=-E,b=-b,C=-C,M=-M);let v=1-p;if(M<.9995){const I=Math.acos(M),B=Math.sin(I);v=Math.sin(v*I)/B,p=Math.sin(p*I)/B,m=m*v+g*p,h=h*v+E*p,S=S*v+b*p,x=x*v+C*p}else{m=m*v+g*p,h=h*v+E*p,S=S*v+b*p,x=x*v+C*p;const I=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=I,h*=I,S*=I,x*=I}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],x=u[d],g=u[d+1],E=u[d+2],b=u[d+3];return e[i]=p*b+S*x+m*E-h*g,e[i+1]=m*b+S*g+h*x-p*E,e[i+2]=h*b+S*E+p*g-m*x,e[i+3]=S*b-p*x-m*g-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),x=p(u/2),g=m(s/2),E=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=g*S*x+h*E*b,this._y=h*E*x-g*S*b,this._z=h*S*b+g*E*x,this._w=h*S*x-g*E*b;break;case"YXZ":this._x=g*S*x+h*E*b,this._y=h*E*x-g*S*b,this._z=h*S*b-g*E*x,this._w=h*S*x+g*E*b;break;case"ZXY":this._x=g*S*x-h*E*b,this._y=h*E*x+g*S*b,this._z=h*S*b+g*E*x,this._w=h*S*x-g*E*b;break;case"ZYX":this._x=g*S*x-h*E*b,this._y=h*E*x+g*S*b,this._z=h*S*b-g*E*x,this._w=h*S*x+g*E*b;break;case"YZX":this._x=g*S*x+h*E*b,this._y=h*E*x+g*S*b,this._z=h*S*b-g*E*x,this._w=h*S*x-g*E*b;break;case"XZY":this._x=g*S*x-h*E*b,this._y=h*E*x-g*S*b,this._z=h*S*b+g*E*x,this._w=h*S*x+g*E*b;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],g=s+p+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(S-m)*E,this._y=(u-h)*E,this._z=(d-l)*E}else if(s>p&&s>x){const E=2*Math.sqrt(1+s-p-x);this._w=(S-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+h)/E}else if(p>x){const E=2*Math.sqrt(1+p-s-x);this._w=(u-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+S)/E}else{const E=2*Math.sqrt(1+x-s-p);this._w=(d-l)/E,this._x=(u+h)/E,this._y=(m+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-u*m,this._y=l*S+d*m+u*p-s*h,this._z=u*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qh=class Qh{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(i_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),S=2*(p*i-u*l),x=2*(u*s-d*i);return this.x=i+m*h+d*x-p*S,this.y=s+m*S+p*h-u*x,this.z=l+m*x+u*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qh.prototype.isVector3=!0;let $=Qh;const pd=new $,i_=new Fr,Jh=class Jh{constructor(e,i,s,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h)}set(e,i,s,l,u,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],x=s[7],g=s[2],E=s[5],b=s[8],C=l[0],M=l[3],v=l[6],I=l[1],B=l[4],w=l[7],z=l[2],U=l[5],P=l[8];return u[0]=d*C+p*I+m*z,u[3]=d*M+p*B+m*U,u[6]=d*v+p*w+m*P,u[1]=h*C+S*I+x*z,u[4]=h*M+S*B+x*U,u[7]=h*v+S*w+x*P,u[2]=g*C+E*I+b*z,u[5]=g*M+E*B+b*U,u[8]=g*v+E*w+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-s*u*S+s*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=S*d-p*h,g=p*m-S*u,E=h*u-d*m,b=i*x+s*g+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(l*h-S*s)*C,e[2]=(p*s-l*d)*C,e[3]=g*C,e[4]=(S*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=E*C,e[7]=(s*m-h*i)*C,e[8]=(d*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,i)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,i){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jh.prototype.isMatrix3=!0;let st=Jh;const md=new st,a_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FS(){const r={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Gc]:{primaries:e,whitePoint:s,transfer:Vc,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:s,transfer:It,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const St=FS();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class HS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{xr===void 0&&(xr=Xc("canvas")),xr.width=e.width,xr.height=e.height;const l=xr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ma(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GS=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(gd(l[d].image)):u.push(gd(l[d]))}else u=gd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function gd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let VS=0;const _d=new $;class Pn extends Fs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=xa,l=xa,u=On,d=Os,p=Ui,m=Si,h=Pn.DEFAULT_ANISOTROPY,S=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=qo(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=iv;Pn.DEFAULT_ANISOTROPY=1;const $h=class $h{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,h=m[0],S=m[4],x=m[8],g=m[1],E=m[5],b=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(x-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(S+g)<.1&&Math.abs(x+C)<.1&&Math.abs(b+M)<.1&&Math.abs(h+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,w=(E+1)/2,z=(v+1)/2,U=(S+g)/4,P=(x+C)/4,T=(b+M)/4;return B>w&&B>z?B<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(B),l=U/s,u=P/s):w>z?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=U/l,u=T/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=P/u,l=T/u),this.set(s,l,u,i),this}let I=Math.sqrt((M-b)*(M-b)+(x-C)*(x-C)+(g-S)*(g-S));return Math.abs(I)<.001&&(I=1),this.x=(M-b)/I,this.y=(x-C)/I,this.z=(g-S)/I,this.w=Math.acos((h+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$h.prototype.isVector4=!0;let rn=$h;class kS extends Fs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Pn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends kS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class dv extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(e,i,s,l,u,d,p,m,h,S,x,g,E,b,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h,S,x,g,E,b,C,M)}set(e,i,s,l,u,d,p,m,h,S,x,g,E,b,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=g,v[3]=E,v[7]=b,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),u=1/Sr.setFromMatrixColumn(e,1).length(),d=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const g=d*S,E=d*x,b=p*S,C=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=E+b*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=b+E*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*S,E=m*x,b=h*S,C=h*x;i[0]=g+C*p,i[4]=b*p-E,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=E*p-b,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*S,E=m*x,b=h*S,C=h*x;i[0]=g-C*p,i[4]=-d*x,i[8]=b+E*p,i[1]=E+b*p,i[5]=d*S,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*S,E=d*x,b=p*S,C=p*x;i[0]=m*S,i[4]=b*h-E,i[8]=g*h+C,i[1]=m*x,i[5]=C*h+g,i[9]=E*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,E=d*h,b=p*m,C=p*h;i[0]=m*S,i[4]=C-g*x,i[8]=b*x+E,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=E*x+b,i[10]=g-C*x}else if(e.order==="XZY"){const g=d*m,E=d*h,b=p*m,C=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=g*x+C,i[5]=d*S,i[9]=E*x-b,i[2]=b*x-E,i[6]=p*S,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,qS)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Qa.crossVectors(s,ri),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Qa.crossVectors(s,ri)),Qa.normalize(),cc.crossVectors(ri,Qa),l[0]=Qa.x,l[4]=cc.x,l[8]=ri.x,l[1]=Qa.y,l[5]=cc.y,l[9]=ri.y,l[2]=Qa.z,l[6]=cc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],x=s[5],g=s[9],E=s[13],b=s[2],C=s[6],M=s[10],v=s[14],I=s[3],B=s[7],w=s[11],z=s[15],U=l[0],P=l[4],T=l[8],L=l[12],Y=l[1],V=l[5],Q=l[9],ce=l[13],pe=l[2],J=l[6],F=l[10],G=l[14],ne=l[3],_e=l[7],be=l[11],O=l[15];return u[0]=d*U+p*Y+m*pe+h*ne,u[4]=d*P+p*V+m*J+h*_e,u[8]=d*T+p*Q+m*F+h*be,u[12]=d*L+p*ce+m*G+h*O,u[1]=S*U+x*Y+g*pe+E*ne,u[5]=S*P+x*V+g*J+E*_e,u[9]=S*T+x*Q+g*F+E*be,u[13]=S*L+x*ce+g*G+E*O,u[2]=b*U+C*Y+M*pe+v*ne,u[6]=b*P+C*V+M*J+v*_e,u[10]=b*T+C*Q+M*F+v*be,u[14]=b*L+C*ce+M*G+v*O,u[3]=I*U+B*Y+w*pe+z*ne,u[7]=I*P+B*V+w*J+z*_e,u[11]=I*T+B*Q+w*F+z*be,u[15]=I*L+B*ce+w*G+z*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],x=e[6],g=e[10],E=e[14],b=e[3],C=e[7],M=e[11],v=e[15],I=m*E-h*g,B=p*E-h*x,w=p*g-m*x,z=d*E-h*S,U=d*g-m*S,P=d*x-p*S;return i*(C*I-M*B+v*w)-s*(b*I-M*z+v*U)+l*(b*B-C*z+v*P)-u*(b*w-C*U+M*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[1],d=e[5],p=e[9],m=e[2],h=e[6],S=e[10];return i*(d*S-p*h)-s*(u*S-p*m)+l*(u*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=e[9],g=e[10],E=e[11],b=e[12],C=e[13],M=e[14],v=e[15],I=i*p-s*d,B=i*m-l*d,w=i*h-u*d,z=s*m-l*p,U=s*h-u*p,P=l*h-u*m,T=S*C-x*b,L=S*M-g*b,Y=S*v-E*b,V=x*M-g*C,Q=x*v-E*C,ce=g*v-E*M,pe=I*ce-B*Q+w*V+z*Y-U*L+P*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/pe;return e[0]=(p*ce-m*Q+h*V)*J,e[1]=(l*Q-s*ce-u*V)*J,e[2]=(C*P-M*U+v*z)*J,e[3]=(g*U-x*P-E*z)*J,e[4]=(m*Y-d*ce-h*L)*J,e[5]=(i*ce-l*Y+u*L)*J,e[6]=(M*w-b*P-v*B)*J,e[7]=(S*P-g*w+E*B)*J,e[8]=(d*Q-p*Y+h*T)*J,e[9]=(s*Y-i*Q-u*T)*J,e[10]=(b*U-C*w+v*I)*J,e[11]=(x*w-S*U-E*I)*J,e[12]=(p*L-d*V-m*T)*J,e[13]=(i*V-s*L+l*T)*J,e[14]=(C*B-b*z-M*I)*J,e[15]=(S*z-x*B+g*I)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,p=e.y,m=e.z,h=u*d,S=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,S=d+d,x=p+p,g=u*h,E=u*S,b=u*x,C=d*S,M=d*x,v=p*x,I=m*h,B=m*S,w=m*x,z=s.x,U=s.y,P=s.z;return l[0]=(1-(C+v))*z,l[1]=(E+w)*z,l[2]=(b-B)*z,l[3]=0,l[4]=(E-w)*U,l[5]=(1-(g+v))*U,l[6]=(M+I)*U,l[7]=0,l[8]=(b+B)*P,l[9]=(M-I)*P,l[10]=(1-(g+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let d=Sr.set(l[0],l[1],l[2]).length();const p=Sr.set(l[4],l[5],l[6]).length(),m=Sr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ri.copy(this);const h=1/d,S=1/p,x=1/m;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=S,Ri.elements[5]*=S,Ri.elements[6]*=S,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,i.setFromRotationMatrix(Ri),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,d,p=Vi,m=!1){const h=this.elements,S=2*u/(i-e),x=2*u/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let b,C;if(m)b=u/(d-u),C=d*u/(d-u);else if(p===Vi)b=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(p===kc)b=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,u,d,p=Vi,m=!1){const h=this.elements,S=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let b,C;if(m)b=1/(d-u),C=d/(d-u);else if(p===Vi)b=-2/(d-u),C=-(d+u)/(d-u);else if(p===kc)b=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Wc.prototype.isMatrix4=!0;let un=Wc;const Sr=new $,Ri=new un,WS=new $(0,0,0),qS=new $(1,1,1),Qa=new $,cc=new $,ri=new $,r_=new un,o_=new Fr;class Bs{constructor(e=0,i=0,s=0,l=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const l_=new $,Mr=new Fr,ha=new un,uc=new $,Po=new $,jS=new $,ZS=new Fr,c_=new $(1,0,0),u_=new $(0,1,0),f_=new $(0,0,1),d_={type:"added"},KS={type:"removed"},yr={type:"childadded",child:null},vd={type:"childremoved",child:null};class jn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new $,i=new Bs,s=new Fr,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new st}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(f_,e)}translateOnAxis(e,i){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(f_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Po,uc,this.up):ha.lookAt(uc,Po,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(ha),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d_),yr.child=e,this.dispatchEvent(yr),yr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(KS),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,jS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,ZS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let d=0,p=u.length;d<p;d++)u[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),x=d(e.shapes),g=d(e.skeletons),E=d(e.animations),b=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new $(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),v=this._getHandJoint(h,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=S.position.distanceTo(x.position),E=.02,b=.005;h.inputState.pinching&&g>E+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=E-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Sd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class yt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=St.workingColorSpace){return this.r=e,this.g=i,this.b=s,St.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=St.workingColorSpace){if(e=BS(e,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return St.colorSpaceToWorking(this,l),this}setStyle(e,i=vi){function s(u){u!==void 0&&parseFloat(u)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vi){const s=pv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return St.workingToColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=St.workingColorSpace){St.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=St.workingColorSpace){return St.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=vi){St.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==vi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(dc);const s=hd(Ja.h,dc.h,i),l=hd(Ja.s,dc.s,i),u=hd(Ja.l,dc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new yt;yt.NAMES=pv;class qh{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=i}clone(){return new qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JS extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new $,pa=new $,Md=new $,ma=new $,Er=new $,br=new $,h_=new $,yd=new $,Ed=new $,bd=new $,Td=new rn,Ad=new rn,Rd=new rn;class Di{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ci.subVectors(l,i),pa.subVectors(s,i),Md.subVectors(e,i);const d=Ci.dot(Ci),p=Ci.dot(pa),m=Ci.dot(Md),h=pa.dot(pa),S=pa.dot(Md),x=d*h-p*p;if(x===0)return u.set(0,0,0),null;const g=1/x,E=(h*m-p*S)*g,b=(d*S-p*m)*g;return u.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,l,u,d,p,m){return this.getBarycoord(e,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(p,ma.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,u.x),d.addScaledVector(Ad,u.y),d.addScaledVector(Rd,u.z),d}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),pa.subVectors(e,i),Ci.cross(pa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,p;Er.subVectors(l,s),br.subVectors(u,s),yd.subVectors(e,s);const m=Er.dot(yd),h=br.dot(yd);if(m<=0&&h<=0)return i.copy(s);Ed.subVectors(e,l);const S=Er.dot(Ed),x=br.dot(Ed);if(S>=0&&x<=S)return i.copy(l);const g=m*x-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Er,d);bd.subVectors(e,u);const E=Er.dot(bd),b=br.dot(bd);if(b>=0&&E<=b)return i.copy(u);const C=E*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(br,p);const M=S*b-E*x;if(M<=0&&x-S>=0&&E-b>=0)return h_.subVectors(u,l),p=(x-S)/(x-S+(E-b)),i.copy(l).addScaledVector(h_,p);const v=1/(M+C+g);return d=C*v,p=g*v,i.copy(s).addScaledVector(Er,d).addScaledVector(br,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(u,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),pc.subVectors(this.max,zo),Tr.subVectors(e.a,zo),Ar.subVectors(e.b,zo),Rr.subVectors(e.c,zo),$a.subVectors(Ar,Tr),es.subVectors(Rr,Ar),As.subVectors(Tr,Rr);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-As.z,As.y,$a.z,0,-$a.x,es.z,0,-es.x,As.z,0,-As.x,-$a.y,$a.x,0,-es.y,es.x,0,-As.y,As.x,0];return!Cd(i,Tr,Ar,Rr,pc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,Tr,Ar,Rr,pc))?!1:(mc.crossVectors($a,es),i=[mc.x,mc.y,mc.z],Cd(i,Tr,Ar,Rr,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new $,new $,new $,new $,new $,new $,new $,new $],wi=new $,hc=new Yo,Tr=new $,Ar=new $,Rr=new $,$a=new $,es=new $,As=new $,zo=new $,pc=new $,mc=new $,Rs=new $;function Cd(r,e,i,s,l){for(let u=0,d=r.length-3;u<=d;u+=3){Rs.fromArray(r,u);const p=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=e.dot(Rs),h=i.dot(Rs),S=s.dot(Rs);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const _n=new $,gc=new wt;let $S=0;class Mi extends Fs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=$g,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),u=qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$g&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class mv extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gv extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Bn extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const eM=new Yo,Io=new $,wd=new $;class Yc{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):eM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(wd)),this.expandByPoint(Io.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tM=0;const _i=new un,Dd=new jn,Cr=new $,oi=new Yo,Bo=new Yo,En=new $;class li extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(OS(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new st().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,s){return _i.makeTranslation(e,i,s),this.applyMatrix4(_i),this}scale(e,i,s){return _i.makeScale(e,i,s),this.applyMatrix4(_i),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Bo.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(oi.min,Bo.min),oi.expandByPoint(En),En.addVectors(oi.max,Bo.max),oi.expandByPoint(En)):(oi.expandByPoint(Bo.min),oi.expandByPoint(Bo.max))}oi.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)En.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)En.fromBufferAttribute(p,h),m&&(Cr.fromBufferAttribute(e,h),En.add(Cr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Mi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new $,m[T]=new $;const h=new $,S=new $,x=new $,g=new wt,E=new wt,b=new wt,C=new $,M=new $;function v(T,L,Y){h.fromBufferAttribute(s,T),S.fromBufferAttribute(s,L),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(u,T),E.fromBufferAttribute(u,L),b.fromBufferAttribute(u,Y),S.sub(h),x.sub(h),E.sub(g),b.sub(g);const V=1/(E.x*b.y-b.x*E.y);isFinite(V)&&(C.copy(S).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(V),M.copy(x).multiplyScalar(E.x).addScaledVector(S,-b.x).multiplyScalar(V),p[T].add(C),p[L].add(C),p[Y].add(C),m[T].add(M),m[L].add(M),m[Y].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,L=I.length;T<L;++T){const Y=I[T],V=Y.start,Q=Y.count;for(let ce=V,pe=V+Q;ce<pe;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const B=new $,w=new $,z=new $,U=new $;function P(T){z.fromBufferAttribute(l,T),U.copy(z);const L=p[T];B.copy(L),B.sub(z.multiplyScalar(z.dot(L))).normalize(),w.crossVectors(U,L);const V=w.dot(m[T])<0?-1:1;d.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,L=I.length;T<L;++T){const Y=I[T],V=Y.start,Q=Y.count;for(let ce=V,pe=V+Q;ce<pe;ce+=3)P(e.getX(ce+0)),P(e.getX(ce+1)),P(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new $,u=new $,d=new $,p=new $,m=new $,h=new $,S=new $,x=new $;if(e)for(let g=0,E=e.count;g<E;g+=3){const b=e.getX(g+0),C=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),p.add(S),m.add(S),h.add(S),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,x=p.normalized,g=new h.constructor(m.length*S);let E=0,b=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*S;for(let v=0;v<S;v++)g[b++]=h[E++]}return new Mi(g,S,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let S=0,x=h.length;S<x;S++){const g=h[S],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,g=h.length;x<g;x++){const E=h[x];S.push(E.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const u=e.morphAttributes;for(const h in u){const S=[],x=u[h];for(let g=0,E=x.length;g<E;g++)S.push(x[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nM=0;class jo extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Nr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new wt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new $,Ud=new $,_c=new $,ts=new $,Nd=new $,vc=new $,Ld=new $;class _v{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(Ud);const u=e.distanceTo(i)*.5,d=-this.direction.dot(_c),p=ts.dot(this.direction),m=-ts.dot(_c),h=ts.lengthSq(),S=Math.abs(1-d*d);let x,g,E,b;if(S>0)if(x=d*m-p,g=d*p-m,b=u*S,x>=0)if(g>=-b)if(g<=b){const C=1/S;x*=C,g*=C,E=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=u,x=Math.max(0,-(d*g+p)),E=-x*x+g*(g+2*m)+h;else g=-u,x=Math.max(0,-(d*g+p)),E=-x*x+g*(g+2*m)+h;else g<=-b?(x=Math.max(0,-(-d*u+p)),g=x>0?-u:Math.min(Math.max(-u,-m),u),E=-x*x+g*(g+2*m)+h):g<=b?(x=0,g=Math.min(Math.max(-u,-m),u),E=g*(g+2*m)+h):(x=Math.max(0,-(d*u+p)),g=x>0?u:Math.min(Math.max(-u,-m),u),E=-x*x+g*(g+2*m)+h);else g=d>0?-u:u,x=Math.max(0,-(d*g+p)),E=-x*x+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ud).addScaledVector(_c,g),E}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),S>=0?(u=(e.min.y-g.y)*S,d=(e.max.y-g.y)*S):(u=(e.max.y-g.y)*S,d=(e.min.y-g.y)*S),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,u){Nd.subVectors(i,e),vc.subVectors(s,e),Ld.crossVectors(Nd,vc);let d=this.direction.dot(Ld),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ts.subVectors(this.origin,e);const m=p*this.direction.dot(vc.crossVectors(ts,vc));if(m<0)return null;const h=p*this.direction.dot(Nd.cross(ts));if(h<0||m+h>d)return null;const S=-p*ts.dot(Ld);return S<0?null:this.at(S/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yh extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p_=new un,Cs=new _v,xc=new Yc,m_=new $,Sc=new $,Mc=new $,yc=new $,Od=new $,Ec=new $,g_=new $,bc=new $;class qi extends jn{constructor(e=new li,i=new Yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Ec.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const S=p[m],x=u[m];S!==0&&(Od.fromBufferAttribute(x,e),d?Ec.addScaledVector(Od,S):Ec.addScaledVector(Od.sub(i),S))}i.add(Ec)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(u),Cs.copy(e.ray).recast(e.near),!(xc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(xc,m_)===null||Cs.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(u).invert(),Cs.copy(e.ray).applyMatrix4(p_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,g=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const M=g[b],v=d[M.materialIndex],I=Math.max(M.start,E.start),B=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let w=I,z=B;w<z;w+=3){const U=p.getX(w),P=p.getX(w+1),T=p.getX(w+2);l=Tc(this,v,e,s,h,S,x,U,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=b,v=C;M<v;M+=3){const I=p.getX(M),B=p.getX(M+1),w=p.getX(M+2);l=Tc(this,d,e,s,h,S,x,I,B,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const M=g[b],v=d[M.materialIndex],I=Math.max(M.start,E.start),B=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let w=I,z=B;w<z;w+=3){const U=w,P=w+1,T=w+2;l=Tc(this,v,e,s,h,S,x,U,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=b,v=C;M<v;M+=3){const I=M,B=M+1,w=M+2;l=Tc(this,d,e,s,h,S,x,I,B,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function iM(r,e,i,s,l,u,d,p){let m;if(e.side===Yn?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,e.side===ss,p),m===null)return null;bc.copy(p),bc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(bc);return h<i.near||h>i.far?null:{distance:h,point:bc.clone(),object:r}}function Tc(r,e,i,s,l,u,d,p,m,h){r.getVertexPosition(p,Sc),r.getVertexPosition(m,Mc),r.getVertexPosition(h,yc);const S=iM(r,e,i,s,Sc,Mc,yc,g_);if(S){const x=new $;Di.getBarycoord(g_,Sc,Mc,yc,x),l&&(S.uv=Di.getInterpolatedAttribute(l,p,m,h,x,new wt)),u&&(S.uv1=Di.getInterpolatedAttribute(u,p,m,h,x,new wt)),d&&(S.normal=Di.getInterpolatedAttribute(d,p,m,h,x,new $),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Di.getNormal(Sc,Mc,yc,g.normal),S.face=g,S.barycoord=x}return S}class aM extends Pn{constructor(e=null,i=1,s=1,l,u,d,p,m,h=wn,S=wn,x,g){super(null,d,p,m,h,S,l,u,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new $,sM=new $,rM=new st;class Us{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Pd.subVectors(s,i).cross(sM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Pd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||rM.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Yc,oM=new wt(.5,.5),Ac=new $;class vv{constructor(e=new Us,i=new Us,s=new Us,l=new Us,u=new Us,d=new Us){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],S=u[4],x=u[5],g=u[6],E=u[7],b=u[8],C=u[9],M=u[10],v=u[11],I=u[12],B=u[13],w=u[14],z=u[15];if(l[0].setComponents(h-d,E-S,v-b,z-I).normalize(),l[1].setComponents(h+d,E+S,v+b,z+I).normalize(),l[2].setComponents(h+p,E+x,v+C,z+B).normalize(),l[3].setComponents(h-p,E-x,v-C,z-B).normalize(),s)l[4].setComponents(m,g,M,w).normalize(),l[5].setComponents(h-m,E-g,v-M,z-w).normalize();else if(l[4].setComponents(h-m,E-g,v-M,z-w).normalize(),i===Vi)l[5].setComponents(h+m,E+g,v+M,z+w).normalize();else if(i===kc)l[5].setComponents(m,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=oM.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const __=new un,Nh=new _v,Rc=new Yc,Cc=new $;class v_ extends jn{constructor(e=new li,i=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,e.ray.intersectsSphere(Rc)===!1)return;__.copy(l).invert(),Nh.copy(e.ray).applyMatrix4(__);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,x=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let b=g,C=E;b<C;b++){const M=h.getX(b);Cc.fromBufferAttribute(x,M),x_(Cc,M,m,l,e,i,this)}}else{const g=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let b=g,C=E;b<C;b++)Cc.fromBufferAttribute(x,b),x_(Cc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function x_(r,e,i,s,l,u,d){const p=Nh.distanceSqToPoint(r);if(p<i){const m=new $;Nh.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;u.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class xv extends Pn{constructor(e=[],i=zs,s,l,u,d,p,m,h,S){super(e,i,s,l,u,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends Pn{constructor(e,i,s,l,u,d,p,m,h){super(e,i,s,l,u,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ir extends Pn{constructor(e,i,s=Wi,l,u,d,p=wn,m=wn,h,S=Ea,x=1){if(S!==Ea&&S!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,u,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cM extends Ir{constructor(e,i=Wi,s=zs,l,u,d=wn,p=wn,m,h=Ea){const S={width:e,height:e,depth:1},x=[S,S,S,S,S,S];super(e,e,i,s,l,u,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zo extends li{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],S=[],x=[];let g=0,E=0;b("z","y","x",-1,-1,s,i,e,d,u,0),b("z","y","x",1,-1,s,i,-e,d,u,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Bn(h,3)),this.setAttribute("normal",new Bn(S,3)),this.setAttribute("uv",new Bn(x,2));function b(C,M,v,I,B,w,z,U,P,T,L){const Y=w/P,V=z/T,Q=w/2,ce=z/2,pe=U/2,J=P+1,F=T+1;let G=0,ne=0;const _e=new $;for(let be=0;be<F;be++){const O=be*V-ce;for(let Z=0;Z<J;Z++){const Ee=Z*Y-Q;_e[C]=Ee*I,_e[M]=O*B,_e[v]=pe,h.push(_e.x,_e.y,_e.z),_e[C]=0,_e[M]=0,_e[v]=U>0?1:-1,S.push(_e.x,_e.y,_e.z),x.push(Z/P),x.push(1-be/T),G+=1}}for(let be=0;be<T;be++)for(let O=0;O<P;O++){const Z=g+O+J*be,Ee=g+O+J*(be+1),Ce=g+(O+1)+J*(be+1),ze=g+(O+1)+J*be;m.push(Z,Ee,ze),m.push(Ee,Ce,ze),ne+=6}p.addGroup(E,ne,L),E+=ne,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends li{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,x=e/p,g=i/m,E=[],b=[],C=[],M=[];for(let v=0;v<S;v++){const I=v*g-d;for(let B=0;B<h;B++){const w=B*x-u;b.push(w,-I,0),C.push(0,0,1),M.push(B/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<p;I++){const B=I+h*v,w=I+h*(v+1),z=I+1+h*(v+1),U=I+1+h*v;E.push(B,w,U),E.push(w,z,U)}this.setIndex(E),this.setAttribute("position",new Bn(b,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class jh extends li{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],x=new $,g=new $,E=[],b=[],C=[],M=[];for(let v=0;v<=s;v++){const I=[],B=v/s,w=d+B*p,z=e*Math.cos(w),U=Math.sqrt(e*e-z*z);let P=0;v===0&&d===0?P=.5/i:v===s&&m===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const L=T/i,Y=l+L*u;x.x=-U*Math.cos(Y),x.y=z,x.z=U*Math.sin(Y),b.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),M.push(L+P,1-B),I.push(h++)}S.push(I)}for(let v=0;v<s;v++)for(let I=0;I<i;I++){const B=S[v][I+1],w=S[v][I],z=S[v+1][I],U=S[v+1][I+1];(v!==0||d>0)&&E.push(B,w,U),(v!==s-1||m<Math.PI)&&E.push(w,z,U)}this.setIndex(E),this.setAttribute("position",new Bn(b,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zh extends li{constructor(e=1,i=.4,s=64,l=8,u=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:u,q:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],h=[],S=[],x=new $,g=new $,E=new $,b=new $,C=new $,M=new $,v=new $;for(let B=0;B<=s;++B){const w=B/s*u*Math.PI*2;I(w,u,d,e,E),I(w+.01,u,d,e,b),M.subVectors(b,E),v.addVectors(b,E),C.crossVectors(M,v),v.crossVectors(C,M),C.normalize(),v.normalize();for(let z=0;z<=l;++z){const U=z/l*Math.PI*2,P=-i*Math.cos(U),T=i*Math.sin(U);x.x=E.x+(P*v.x+T*C.x),x.y=E.y+(P*v.y+T*C.y),x.z=E.z+(P*v.z+T*C.z),m.push(x.x,x.y,x.z),g.subVectors(x,E).normalize(),h.push(g.x,g.y,g.z),S.push(B/s),S.push(z/l)}}for(let B=1;B<=s;B++)for(let w=1;w<=l;w++){const z=(l+1)*(B-1)+(w-1),U=(l+1)*B+(w-1),P=(l+1)*B+w,T=(l+1)*(B-1)+w;p.push(z,U,T),p.push(U,P,T)}this.setIndex(p),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(S,2));function I(B,w,z,U,P){const T=Math.cos(B),L=Math.sin(B),Y=z/w*B,V=Math.cos(Y);P.x=U*(2+V)*.5*T,P.y=U*(2+V)*L*.5,P.z=U*Math.sin(Y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Br(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(S_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(S_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();e[i][s]=u}else e[i][s]=l.slice();else e[i][s]=l}}return e}function In(r){const e={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)e[l]=s[l]}return e}function S_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Mv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const fM={clone:Br,merge:In};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new yt().setHex(l.value);break;case"v2":this.uniforms[s].value=new wt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new st().fromArray(l.value);break;case"m4":this.uniforms[s].value=new un().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pM extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mM extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gM extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wc=new $,Dc=new Fr,Bi=new $;class yv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new $,M_=new wt,y_=new wt;class xi extends yv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,M_,y_),i.subVectors(y_,M_)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ev extends yv{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=-90,Dr=1;class _M extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(wr,Dr,e,i);l.layers=this.layers,this.add(l);const u=new xi(wr,Dr,e,i);u.layers=this.layers,this.add(u);const d=new xi(wr,Dr,e,i);d.layers=this.layers,this.add(d);const p=new xi(wr,Dr,e,i);p.layers=this.layers,this.add(p);const m=new xi(wr,Dr,e,i);m.layers=this.layers,this.add(m);const h=new xi(wr,Dr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,S]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(x,g,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class vM extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const ep=class ep{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=s,u[3]=l,this}};ep.prototype.isMatrix2=!0;let E_=ep;function b_(r,e,i,s){const l=SM(s);switch(i){case lv:return r*e;case uv:return r*e/l.components*l.byteLength;case Hh:return r*e/l.components*l.byteLength;case Is:return r*e*2/l.components*l.byteLength;case Gh:return r*e*2/l.components*l.byteLength;case cv:return r*e*3/l.components*l.byteLength;case Ui:return r*e*4/l.components*l.byteLength;case Vh:return r*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(r,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(r,8)*Math.max(e,8)/2;case ah:case sh:case oh:case lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rh:case Fc:case ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bh:case Th:case Ah:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rh:case Ch:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hc:case wh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SM(r){switch(r){case Si:case av:return{byteLength:1,components:1};case Xo:case sv:case ya:return{byteLength:2,components:1};case Bh:case Fh:return{byteLength:2,components:4};case Wi:case Ih:case Gi:return{byteLength:4,components:1};case rv:case ov:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);function bv(){let r=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function MM(r){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,S),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const S=m.array,x=m.updateRanges;if(r.bindBuffer(h,p),x.length===0)r.bufferSubData(h,0,S);else{x.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<x.length;E++){const b=x[g],C=x[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,x[g]=C)}x.length=g+1;for(let E=0,b=x.length;E<b;E++){const C=x[E];r.bufferSubData(h,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,My=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:yM,alphahash_pars_fragment:EM,alphamap_fragment:bM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:wM,batching_pars_vertex:DM,batching_vertex:UM,begin_vertex:NM,beginnormal_vertex:LM,bsdfs:OM,iridescence_fragment:PM,bumpmap_pars_fragment:zM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:kM,color_vertex:XM,common:WM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:jM,displacementmap_vertex:ZM,emissivemap_fragment:KM,emissivemap_pars_fragment:QM,colorspace_fragment:JM,colorspace_pars_fragment:$M,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:ay,fog_vertex:sy,fog_pars_vertex:ry,fog_fragment:oy,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:uy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:dy,lights_pars_begin:hy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:Sy,lights_fragment_begin:My,lights_fragment_maps:yy,lights_fragment_end:Ey,lightprobes_pars_fragment:by,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:wy,map_pars_fragment:Dy,map_particle_fragment:Uy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Oy,morphinstance_vertex:Py,morphcolor_vertex:zy,morphnormal_vertex:Iy,morphtarget_pars_vertex:By,morphtarget_vertex:Fy,normal_fragment_begin:Hy,normal_fragment_maps:Gy,normal_pars_fragment:Vy,normal_pars_vertex:ky,normal_vertex:Xy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Zy,opaque_fragment:Ky,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:$y,dithering_fragment:e2,dithering_pars_fragment:t2,roughnessmap_fragment:n2,roughnessmap_pars_fragment:i2,shadowmap_pars_fragment:a2,shadowmap_pars_vertex:s2,shadowmap_vertex:r2,shadowmask_pars_fragment:o2,skinbase_vertex:l2,skinning_pars_vertex:c2,skinning_vertex:u2,skinnormal_vertex:f2,specularmap_fragment:d2,specularmap_pars_fragment:h2,tonemapping_fragment:p2,tonemapping_pars_fragment:m2,transmission_fragment:g2,transmission_pars_fragment:_2,uv_pars_fragment:v2,uv_pars_vertex:x2,uv_vertex:S2,worldpos_vertex:M2,background_vert:y2,background_frag:E2,backgroundCube_vert:b2,backgroundCube_frag:T2,cube_vert:A2,cube_frag:R2,depth_vert:C2,depth_frag:w2,distance_vert:D2,distance_frag:U2,equirect_vert:N2,equirect_frag:L2,linedashed_vert:O2,linedashed_frag:P2,meshbasic_vert:z2,meshbasic_frag:I2,meshlambert_vert:B2,meshlambert_frag:F2,meshmatcap_vert:H2,meshmatcap_frag:G2,meshnormal_vert:V2,meshnormal_frag:k2,meshphong_vert:X2,meshphong_frag:W2,meshphysical_vert:q2,meshphysical_frag:Y2,meshtoon_vert:j2,meshtoon_frag:Z2,points_vert:K2,points_frag:Q2,shadow_vert:J2,shadow_frag:$2,sprite_vert:eE,sprite_frag:tE},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Uc={r:0,b:0,g:0},nE=new un,Tv=new st;Tv.set(-1,0,0,0,1,0,0,0,1);function iE(r,e,i,s,l,u){const d=new yt(0);let p=l===!0?0:1,m,h,S=null,x=0,g=null;function E(I){let B=I.isScene===!0?I.background:null;if(B&&B.isTexture){const w=I.backgroundBlurriness>0;B=e.get(B,w)}return B}function b(I){let B=!1;const w=E(I);w===null?M(d,p):w&&w.isColor&&(M(w,1),B=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(I,B){const w=E(B);w&&(w.isCubeTexture||w.mapping===qc)?(h===void 0&&(h=new qi(new Zo(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Br(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(B.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Tv),h.material.toneMapped=St.getTransfer(w.colorSpace)!==It,(S!==w||x!==w.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,S=w,x=w.version,g=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new qi(new jc(2,2),new Yi({name:"BackgroundMaterial",uniforms:Br(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=St.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(S!==w||x!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,S=w,x=w.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function M(I,B){I.getRGB(Uc,Mv(r)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,B,u)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,B=1){d.set(I),p=B,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,M(d,p)},render:b,addToRenderList:C,dispose:v}}function aE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,d=!1;function p(V,Q,ce,pe,J){let F=!1;const G=x(V,pe,ce,Q);u!==G&&(u=G,h(u.object)),F=E(V,pe,ce,J),F&&b(V,pe,ce,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,w(V,Q,ce,pe),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function S(V){return r.deleteVertexArray(V)}function x(V,Q,ce,pe){const J=pe.wireframe===!0;let F=s[Q.id];F===void 0&&(F={},s[Q.id]=F);const G=V.isInstancedMesh===!0?V.id:0;let ne=F[G];ne===void 0&&(ne={},F[G]=ne);let _e=ne[ce.id];_e===void 0&&(_e={},ne[ce.id]=_e);let be=_e[J];return be===void 0&&(be=g(m()),_e[J]=be),be}function g(V){const Q=[],ce=[],pe=[];for(let J=0;J<i;J++)Q[J]=0,ce[J]=0,pe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ce,attributeDivisors:pe,object:V,attributes:{},index:null}}function E(V,Q,ce,pe){const J=u.attributes,F=Q.attributes;let G=0;const ne=ce.getAttributes();for(const _e in ne)if(ne[_e].location>=0){const O=J[_e];let Z=F[_e];if(Z===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;G++}return u.attributesNum!==G||u.index!==pe}function b(V,Q,ce,pe){const J={},F=Q.attributes;let G=0;const ne=ce.getAttributes();for(const _e in ne)if(ne[_e].location>=0){let O=F[_e];O===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),J[_e]=Z,G++}u.attributes=J,u.attributesNum=G,u.index=pe}function C(){const V=u.newAttributes;for(let Q=0,ce=V.length;Q<ce;Q++)V[Q]=0}function M(V){v(V,0)}function v(V,Q){const ce=u.newAttributes,pe=u.enabledAttributes,J=u.attributeDivisors;ce[V]=1,pe[V]===0&&(r.enableVertexAttribArray(V),pe[V]=1),J[V]!==Q&&(r.vertexAttribDivisor(V,Q),J[V]=Q)}function I(){const V=u.newAttributes,Q=u.enabledAttributes;for(let ce=0,pe=Q.length;ce<pe;ce++)Q[ce]!==V[ce]&&(r.disableVertexAttribArray(ce),Q[ce]=0)}function B(V,Q,ce,pe,J,F,G){G===!0?r.vertexAttribIPointer(V,Q,ce,J,F):r.vertexAttribPointer(V,Q,ce,pe,J,F)}function w(V,Q,ce,pe){C();const J=pe.attributes,F=ce.getAttributes(),G=Q.defaultAttributeValues;for(const ne in F){const _e=F[ne];if(_e.location>=0){let be=J[ne];if(be===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(be=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(be=V.instanceColor)),be!==void 0){const O=be.normalized,Z=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,ze=Ee.type,se=Ee.bytesPerElement,Se=ze===r.INT||ze===r.UNSIGNED_INT||be.gpuType===Ih;if(be.isInterleavedBufferAttribute){const ye=be.data,He=ye.stride,tt=be.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)v(_e.location+Ke,ye.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)M(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<_e.locationSize;Ke++)B(_e.location+Ke,Z/_e.locationSize,ze,O,He*se,(tt+Z/_e.locationSize*Ke)*se,Se)}else{if(be.isInstancedBufferAttribute){for(let ye=0;ye<_e.locationSize;ye++)v(_e.location+ye,be.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ye=0;ye<_e.locationSize;ye++)M(_e.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ye=0;ye<_e.locationSize;ye++)B(_e.location+ye,Z/_e.locationSize,ze,O,Z*se,Z/_e.locationSize*ye*se,Se)}}else if(G!==void 0){const O=G[ne];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(_e.location,O);break;case 3:r.vertexAttrib3fv(_e.location,O);break;case 4:r.vertexAttrib4fv(_e.location,O);break;default:r.vertexAttrib1fv(_e.location,O)}}}}I()}function z(){L();for(const V in s){const Q=s[V];for(const ce in Q){const pe=Q[ce];for(const J in pe){const F=pe[J];for(const G in F)S(F[G].object),delete F[G];delete pe[J]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const ce in Q){const pe=Q[ce];for(const J in pe){const F=pe[J];for(const G in F)S(F[G].object),delete F[G];delete pe[J]}}delete s[V.id]}function P(V){for(const Q in s){const ce=s[Q];for(const pe in ce){const J=ce[pe];if(J[V.id]===void 0)continue;const F=J[V.id];for(const G in F)S(F[G].object),delete F[G];delete J[V.id]}}}function T(V){for(const Q in s){const ce=s[Q],pe=V.isInstancedMesh===!0?V.id:0,J=ce[pe];if(J!==void 0){for(const F in J){const G=J[F];for(const ne in G)S(G[ne].object),delete G[ne];delete J[F]}delete ce[pe],Object.keys(ce).length===0&&delete s[Q]}}}function L(){Y(),d=!0,u!==l&&(u=l,h(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:Y,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:I}}function sE(r,e,i){let s;function l(m){s=m}function u(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(r.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let g=0;for(let E=0;E<S;E++)g+=h[E];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function rE(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ui&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const T=P===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Si&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Gi&&!T)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(nt("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:w,maxSamples:z,samples:U}}function oE(r){const e=this;let i=null,s=0,l=!1,u=!1;const d=new Us,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||s!==0||l;return l=g,s=x.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=S(x,g,0)},this.setState=function(x,g,E){const b=x.clippingPlanes,C=x.clipIntersection,M=x.clipShadows,v=r.get(x);if(!l||b===null||b.length===0||u&&!M)u?S(null):h();else{const I=u?0:s,B=I*4;let w=v.clippingState||null;m.value=w,w=S(b,g,B,E);for(let z=0;z!==B;++z)w[z]=i[z];v.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(x,g,E,b){const C=x!==null?x.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const v=E+C*4,I=g.matrixWorldInverse;p.getNormalMatrix(I),(M===null||M.length<v)&&(M=new Float32Array(v));for(let B=0,w=E;B!==C;++B,w+=4)d.copy(x[B]).applyMatrix4(I,p),d.normal.toArray(M,w),M[w+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const as=4,T_=[.125,.215,.35,.446,.526,.582],Ls=20,lE=256,Fo=new Ev,A_=new yt;let zd=null,Id=0,Bd=0,Fd=!1;const cE=new $;class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=cE}=u;zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Id,Bd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:ya,format:Ui,colorSpace:Gc,depthBuffer:!1},l=C_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uE(u)),this._blurMaterial=dE(u,e,i),this._ggxMaterial=fE(u,e,i)}return l}_compileMaterial(e){const i=new qi(new li,e);this._renderer.compile(i,Fo)}_sceneToCubeUV(e,i,s,l,u){const m=new xi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(A_),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new Zo,new Yh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,v=!0):(M.color.copy(A_),v=!0);for(let B=0;B<6;B++){const w=B%3;w===0?(m.up.set(0,h[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[B],u.y,u.z)):w===1?(m.up.set(0,0,h[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[B],u.z)):(m.up.set(0,h[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[B]));const z=this._cubeSize;Ur(l,w*z,B>2?z:0,z,z),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=E,x.autoClear=g,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===zs||e.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=D_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Fo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),g=0+h*1.25,E=x*g,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-as?s-b+as:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Ur(u,M,v,3*C,2*C),l.setRenderTarget(u),l.render(p,Fo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Ur(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(p,Fo)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,E=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ls-1),C=u/b,M=isFinite(u)?1+Math.floor(S*C):Ls;M>Ls&&nt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ls}`);const v=[];let I=0;for(let P=0;P<Ls;++P){const T=P/C,L=Math.exp(-T*T/2);v.push(L),P===0?I+=L:P<M&&(I+=2*L)}for(let P=0;P<v.length;P++)v[P]=v[P]/I;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=b,g.mipInt.value=B-s;const w=this._sizeLods[l],z=3*w*(l>B-as?l-B+as:0),U=4*(this._cubeSize-w);Ur(i,z,U,3*w,2*w),m.setRenderTarget(i),m.render(x,Fo)}}function uE(r){const e=[],i=[],s=[];let l=r;const u=r-as+1+T_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-as?m=T_[d-r+as-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,g=[S,S,x,S,x,x,S,S,x,x,S,x],E=6,b=6,C=3,M=2,v=1,I=new Float32Array(C*b*E),B=new Float32Array(M*b*E),w=new Float32Array(v*b*E);for(let U=0;U<E;U++){const P=U%3*2/3-1,T=U>2?0:-1,L=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];I.set(L,C*b*U),B.set(g,M*b*U);const Y=[U,U,U,U,U,U];w.set(Y,v*b*U)}const z=new li;z.setAttribute("position",new Mi(I,C)),z.setAttribute("uv",new Mi(B,M)),z.setAttribute("faceIndex",new Mi(w,v)),s.push(new qi(z,null)),l>as&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function C_(r,e,i){const s=new Xi(r,e,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function fE(r,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function dE(r,e,i){const s=new Float32Array(Ls),l=new $(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function w_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function D_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Av extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zo(5,5,5),u=new Yi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Sa});u.uniforms.tEquirect.value=i;const d=new qi(l,u),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=On),new _M(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}function hE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?d(g):u(g)}function u(g){if(g&&g.isTexture){const E=g.mapping;if(E===cd||E===ud)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new Av(b.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,b=E===cd||E===ud,C=E===zs||E===zr;if(b||C){let M=i.get(g);const v=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new R_(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const I=g.image;return b&&I&&I.height>0||C&&I&&m(I)?(s===null&&(s=new R_(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",S),M.texture):null}}}return g}function p(g,E){return E===cd?g.mapping=zs:E===ud&&(g.mapping=zr),g}function m(g){let E=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&E++;return E===b}function h(g){const E=g.target;E.removeEventListener("dispose",h);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function S(g){const E=g.target;E.removeEventListener("dispose",S);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function pE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Lr("WebGLRenderer: "+s+" extension not supported."),l}}}function mE(r,e,i,s){const l={},u=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const E=u.get(g);E&&(e.remove(E),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function h(x){const g=[],E=x.index,b=x.attributes.position;let C=0;if(b===void 0)return;if(E!==null){const I=E.array;C=E.version;for(let B=0,w=I.length;B<w;B+=3){const z=I[B+0],U=I[B+1],P=I[B+2];g.push(z,U,U,P,P,z)}}else{const I=b.array;C=b.version;for(let B=0,w=I.length/3-1;B<w;B+=3){const z=B+0,U=B+1,P=B+2;g.push(z,U,U,P,P,z)}}const M=new(b.count>=65535?gv:mv)(g,1);M.version=C;const v=u.get(x);v&&e.remove(v),u.set(x,M)}function S(x){const g=u.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&h(x)}else h(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function gE(r,e,i){let s;function l(x){s=x}let u,d;function p(x){u=x.type,d=x.bytesPerElement}function m(x,g){r.drawElements(s,g,u,x*d),i.update(g,s,1)}function h(x,g,E){E!==0&&(r.drawElementsInstanced(s,g,u,x*d,E),i.update(g,s,E))}function S(x,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,x,0,E);let C=0;for(let M=0;M<E;M++)C+=g[M];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function _E(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(u/3);break;case r.LINES:i.lines+=p*(u/2);break;case r.LINE_STRIP:i.lines+=p*(u-1);break;case r.LINE_LOOP:i.lines+=p*u;break;case r.POINTS:i.points+=p*u;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vE(r,e,i){const s=new WeakMap,l=new rn;function u(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var E=Y;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),M===!0&&(w=3);let z=p.attributes.position.count*w,U=1;z>e.maxTextureSize&&(U=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*U*4*x),T=new dv(P,z,U,x);T.type=Gi,T.needsUpdate=!0;const L=w*4;for(let V=0;V<x;V++){const Q=v[V],ce=I[V],pe=B[V],J=z*U*4*V;for(let F=0;F<Q.count;F++){const G=F*L;b===!0&&(l.fromBufferAttribute(Q,F),P[J+G+0]=l.x,P[J+G+1]=l.y,P[J+G+2]=l.z,P[J+G+3]=0),C===!0&&(l.fromBufferAttribute(ce,F),P[J+G+4]=l.x,P[J+G+5]=l.y,P[J+G+6]=l.z,P[J+G+7]=0),M===!0&&(l.fromBufferAttribute(pe,F),P[J+G+8]=l.x,P[J+G+9]=l.y,P[J+G+10]=l.z,P[J+G+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new wt(z,U)},s.set(p,g),p.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function xE(r,e,i,s,l){let u=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,g=e.get(h,x);if(u.get(g)!==S&&(e.update(g),u.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==S&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),u.set(h,S))),h.isSkinnedMesh){const E=h.skeleton;u.get(E)!==S&&(E.update(),u.set(E,S))}return g}function p(){u=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const SE={[K_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[J_]:"CINEON_TONE_MAPPING",[$_]:"ACES_FILMIC_TONE_MAPPING",[tv]:"AGX_TONE_MAPPING",[nv]:"NEUTRAL_TONE_MAPPING",[ev]:"CUSTOM_TONE_MAPPING"};function ME(r,e,i,s,l,u){const d=new Xi(e,i,{type:r,depthBuffer:l,stencilBuffer:u,samples:s?4:0,depthTexture:l?new Ir(e,i):void 0}),p=new Xi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),m=new li;m.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const h=new pM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new qi(m,h),x=new Ev(-1,1,1,-1,0,1);let g=null,E=null,b=!1,C,M=null,v=[],I=!1;this.setSize=function(B,w){d.setSize(B,w),p.setSize(B,w);for(let z=0;z<v.length;z++){const U=v[z];U.setSize&&U.setSize(B,w)}},this.setEffects=function(B){v=B,I=v.length>0&&v[0].isRenderPass===!0;const w=d.width,z=d.height;for(let U=0;U<v.length;U++){const P=v[U];P.setSize&&P.setSize(w,z)}},this.begin=function(B,w){if(b||B.toneMapping===ki&&v.length===0)return!1;if(M=w,w!==null){const z=w.width,U=w.height;(d.width!==z||d.height!==U)&&this.setSize(z,U)}return I===!1&&B.setRenderTarget(d),C=B.toneMapping,B.toneMapping=ki,!0},this.hasRenderPass=function(){return I},this.end=function(B,w){B.toneMapping=C,b=!0;let z=d,U=p;for(let P=0;P<v.length;P++){const T=v[P];if(T.enabled!==!1&&(T.render(B,U,z,w),T.needsSwap!==!1)){const L=z;z=U,U=L}}if(g!==B.outputColorSpace||E!==B.toneMapping){g=B.outputColorSpace,E=B.toneMapping,h.defines={},St.getTransfer(g)===It&&(h.defines.SRGB_TRANSFER="");const P=SE[E];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=z.texture,B.setRenderTarget(M),B.render(S,x),M=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Rv=new Pn,Lh=new Ir(1,1),Cv=new dv,wv=new XS,Dv=new xv,U_=[],N_=[],L_=new Float32Array(16),O_=new Float32Array(9),P_=new Float32Array(4);function Hr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=U_[l];if(u===void 0&&(u=new Float32Array(l),U_[l]=u),e!==0){s.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(u,p)}return u}function Sn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Kc(r,e){let i=N_[e];i===void 0&&(i=new Int32Array(e),N_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function yE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function EE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function bE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function TE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function AE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;P_.set(s),r.uniformMatrix2fv(this.addr,!1,P_),Mn(i,s)}}function RE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;O_.set(s),r.uniformMatrix3fv(this.addr,!1,O_),Mn(i,s)}}function CE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;L_.set(s),r.uniformMatrix4fv(this.addr,!1,L_),Mn(i,s)}}function wE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function DE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function UE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function NE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function LE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function OE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function PE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function zE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function IE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?Xh:kh,u=Lh):u=Rv,i.setTexture2D(e||u,l)}function BE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||wv,l)}function FE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Dv,l)}function HE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Cv,l)}function GE(r){switch(r){case 5126:return yE;case 35664:return EE;case 35665:return bE;case 35666:return TE;case 35674:return AE;case 35675:return RE;case 35676:return CE;case 5124:case 35670:return wE;case 35667:case 35671:return DE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return LE;case 36294:return OE;case 36295:return PE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return HE}}function VE(r,e){r.uniform1fv(this.addr,e)}function kE(r,e){const i=Hr(e,this.size,2);r.uniform2fv(this.addr,i)}function XE(r,e){const i=Hr(e,this.size,3);r.uniform3fv(this.addr,i)}function WE(r,e){const i=Hr(e,this.size,4);r.uniform4fv(this.addr,i)}function qE(r,e){const i=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function YE(r,e){const i=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function jE(r,e){const i=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ZE(r,e){r.uniform1iv(this.addr,e)}function KE(r,e){r.uniform2iv(this.addr,e)}function QE(r,e){r.uniform3iv(this.addr,e)}function JE(r,e){r.uniform4iv(this.addr,e)}function $E(r,e){r.uniform1uiv(this.addr,e)}function eb(r,e){r.uniform2uiv(this.addr,e)}function tb(r,e){r.uniform3uiv(this.addr,e)}function nb(r,e){r.uniform4uiv(this.addr,e)}function ib(r,e,i){const s=this.cache,l=e.length,u=Kc(i,l);Sn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));let d;this.type===r.SAMPLER_2D_SHADOW?d=Lh:d=Rv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function ab(r,e,i){const s=this.cache,l=e.length,u=Kc(i,l);Sn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||wv,u[d])}function sb(r,e,i){const s=this.cache,l=e.length,u=Kc(i,l);Sn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Dv,u[d])}function rb(r,e,i){const s=this.cache,l=e.length,u=Kc(i,l);Sn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Cv,u[d])}function ob(r){switch(r){case 5126:return VE;case 35664:return kE;case 35665:return XE;case 35666:return WE;case 35674:return qE;case 35675:return YE;case 35676:return jE;case 5124:case 35670:return ZE;case 35667:case 35671:return KE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return $E;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}class lb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GE(i.type)}}class cb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ob(i.type)}}class ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function z_(r,e){r.seq.push(e),r.map[e.id]=e}function fb(r,e,i){const s=r.name,l=s.length;for(Hd.lastIndex=0;;){const u=Hd.exec(s),d=Hd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){z_(i,h===void 0?new lb(p,r,e):new cb(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new ub(p),z_(i,x)),i=x}}}class Bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);fb(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function I_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const db=37297;let hb=0;function pb(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const B_=new st;function mb(r){St._getMatrix(B_,St.workingColorSpace,r);const e=`mat3( ${B_.elements.map(i=>i.toFixed(4))} )`;switch(St.getTransfer(r)){case Vc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function F_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+pb(r.getShaderSource(e),p)}else return u}function gb(r,e){const i=mb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _b={[K_]:"Linear",[Q_]:"Reinhard",[J_]:"Cineon",[$_]:"ACESFilmic",[tv]:"AgX",[nv]:"Neutral",[ev]:"Custom"};function vb(r,e){const i=_b[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new $;function xb(){St.getLuminanceCoefficients(Nc);const r=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Mb(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function yb(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),d=u.name;let p=1;u.type===r.FLOAT_MAT2&&(p=2),u.type===r.FLOAT_MAT3&&(p=3),u.type===r.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function Vo(r){return r!==""}function H_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace(Eb,Tb)}const bb=new Map;function Tb(r,e){let i=ct[e];if(i===void 0){const s=bb.get(e);if(s!==void 0)i=ct[s],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(i)}const Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(r){return r.replace(Ab,Rb)}function Rb(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function k_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Cb={[Lc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function wb(r){return Cb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Db={[zs]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function Ub(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Db[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Nb={[zr]:"ENVMAP_MODE_REFRACTION"};function Lb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ob={[Z_]:"ENVMAP_BLENDING_MULTIPLY",[ES]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function Pb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ob[r.combine]||"ENVMAP_BLENDING_NONE"}function zb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Ib(r,e,i,s){const l=r.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=wb(i),h=Ub(i),S=Lb(i),x=Pb(i),g=zb(i),E=Sb(i),b=Mb(u),C=l.createProgram();let M,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(M=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ct.tonemapping_pars_fragment:"",i.toneMapping!==ki?vb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,gb("linearToOutputTexel",i.outputColorSpace),xb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Oh(d),d=H_(d,i),d=G_(d,i),p=Oh(p),p=H_(p,i),p=G_(p,i),d=V_(d),p=V_(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const B=I+M+d,w=I+v+p,z=I_(l,l.VERTEX_SHADER,B),U=I_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,z),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(z)||"",pe=l.getShaderInfoLog(U)||"",J=Q.trim(),F=ce.trim(),G=pe.trim();let ne=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,z,U);else{const be=F_(l,z,"vertex"),O=F_(l,U,"fragment");Et("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+be+`
`+O)}else J!==""?nt("WebGLProgram: Program Info Log:",J):(F===""||G==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ne,programLog:J,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:v}})}l.deleteShader(z),l.deleteShader(U),T=new Bc(l,C),L=yb(l,C)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,db)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=U,this}let Bb=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Hb(e),i.set(e,s)),s}}class Hb{constructor(e){this.id=Bb++,this.code=e,this.usedTimes=0}}function Gb(r){return r===Is||r===Fc||r===Hc}function Vb(r,e,i,s,l,u){const d=new hv,p=new Fb,m=new Set,h=[],S=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,L,Y,V,Q,ce){const pe=V.fog,J=Q.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ne=e.get(T.envMap||F,G),_e=ne&&ne.mapping===qc?ne.image.height:null,be=E[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const O=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=O!==void 0?O.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let Ce,ze,se,Se;if(be){const Ve=Hi[be];Ce=Ve.vertexShader,ze=Ve.fragmentShader}else{Ce=T.vertexShader,ze=T.fragmentShader;const Ve=p.getVertexShaderStage(T),Zt=p.getFragmentShaderStage(T);p.update(T,Ve,Zt),se=Ve.id,Se=Zt.id}const ye=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,qt=!!T.map,ut=!!T.matcap,_t=!!ne,vt=!!T.aoMap,ft=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,en=!!T.normalMap,tn=!!T.displacementMap,on=!!T.emissiveMap,Wt=!!T.metalnessMap,nn=!!T.roughnessMap,q=T.anisotropy>0,Bt=T.clearcoat>0,Rt=T.dispersion>0,N=T.iridescence>0,y=T.sheen>0,K=T.transmission>0,re=q&&!!T.anisotropyMap,de=Bt&&!!T.clearcoatMap,Te=Bt&&!!T.clearcoatNormalMap,De=Bt&&!!T.clearcoatRoughnessMap,fe=N&&!!T.iridescenceMap,he=N&&!!T.iridescenceThicknessMap,Re=y&&!!T.sheenColorMap,Be=y&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ue=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Qe=K&&!!T.transmissionMap,it=K&&!!T.thicknessMap,X=!!T.gradientMap,Ae=!!T.alphaMap,ge=T.alphaTest>0,we=!!T.alphaHash,Ie=!!T.extensions;let Me=ki;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Me=r.toneMapping);const qe={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:ze,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:ut,envMap:_t,envMapMode:_t&&ne.mapping,envMapCubeUVHeight:_e,aoMap:vt,lightMap:ft,bumpMap:$t,normalMap:en,displacementMap:tn,emissiveMap:on,normalMapObjectSpace:en&&T.normalMapType===RS,normalMapTangentSpace:en&&T.normalMapType===Qg,packedNormalMap:en&&T.normalMapType===Qg&&Gb(T.normalMap.format),metalnessMap:Wt,roughnessMap:nn,anisotropy:q,anisotropyMap:re,clearcoat:Bt,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Rt,iridescence:N,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:y,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:Ue,specularIntensityMap:Ze,transmission:K,transmissionMap:Qe,thicknessMap:it,gradientMap:X,opaque:T.transparent===!1&&T.blending===Nr&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ge,alphaHash:we,combine:T.combine,mapUv:qt&&b(T.map.channel),aoMapUv:vt&&b(T.aoMap.channel),lightMapUv:ft&&b(T.lightMap.channel),bumpMapUv:$t&&b(T.bumpMap.channel),normalMapUv:en&&b(T.normalMap.channel),displacementMapUv:tn&&b(T.displacementMap.channel),emissiveMapUv:on&&b(T.emissiveMap.channel),metalnessMapUv:Wt&&b(T.metalnessMap.channel),roughnessMapUv:nn&&b(T.roughnessMap.channel),anisotropyMapUv:re&&b(T.anisotropyMap.channel),clearcoatMapUv:de&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Le&&b(T.specularMap.channel),specularColorMapUv:Ue&&b(T.specularColorMap.channel),specularIntensityMapUv:Ze&&b(T.specularIntensityMap.channel),transmissionMapUv:Qe&&b(T.transmissionMap.channel),thicknessMapUv:it&&b(T.thicknessMap.channel),alphaMapUv:Ae&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(en||q),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(qt||Ae),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&en===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&St.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:on&&T.emissiveMap.isVideoTexture===!0&&St.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)L.push(Y),L.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(v(L,T),I(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function v(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function I(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function B(T){const L=E[T.type];let Y;if(L){const V=Hi[L];Y=fM.clone(V.uniforms)}else Y=T.uniforms;return Y}function w(T,L){let Y=S.get(L);return Y!==void 0?++Y.usedTimes:(Y=new Ib(r,L,T,l),h.push(Y),S.set(L,Y)),Y}function z(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function P(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:B,acquireProgram:w,releaseProgram:z,releaseShaderCache:U,programs:h,dispose:P}}function kb(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Xb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function X_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function W_(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,b,C,M,v){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:E,material:b,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:v},r[e]=I):(I.id=g.id,I.object=g,I.geometry=E,I.material=b,I.materialVariant=d(g),I.groupOrder=C,I.renderOrder=g.renderOrder,I.z=M,I.group=v),e++,I}function m(g,E,b,C,M,v){const I=p(g,E,b,C,M,v);b.transmission>0?s.push(I):b.transparent===!0?l.push(I):i.push(I)}function h(g,E,b,C,M,v){const I=p(g,E,b,C,M,v);b.transmission>0?s.unshift(I):b.transparent===!0?l.unshift(I):i.unshift(I)}function S(g,E,b){i.length>1&&i.sort(g||Xb),s.length>1&&s.sort(E||X_),l.length>1&&l.sort(E||X_),b&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,E=r.length;g<E;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:x,sort:S}}function Wb(){let r=new WeakMap;function e(s,l){const u=r.get(s);let d;return u===void 0?(d=new W_,r.set(s,[d])):l>=u.length?(d=new W_,u.push(d)):d=u[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function qb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new yt};break;case"SpotLight":i={position:new $,direction:new $,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new yt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":i={color:new yt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function Yb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let jb=0;function Zb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Kb(r){const e=new qb,i=Yb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,u=new un,d=new un;function p(h){let S=0,x=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,b=0,C=0,M=0,v=0,I=0,B=0,w=0,z=0,U=0,P=0;h.sort(Zb);for(let L=0,Y=h.length;L<Y;L++){const V=h[L],Q=V.color,ce=V.intensity,pe=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Is?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=Q.r*ce,x+=Q.g*ce,g+=Q.b*ce;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],ce);P++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.directionalShadow[E]=ne,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=V.shadow.matrix,I++}s.directional[E]=F,E++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(Q).multiplyScalar(ce),F.distance=pe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[C]=F;const G=V.shadow;if(V.map&&(s.spotLightMap[z]=V.map,z++,G.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[C]=G.matrix,V.castShadow){const ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.spotShadow[C]=ne,s.spotShadowMap[C]=J,w++}C++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(Q).multiplyScalar(ce),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=F,M++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,s.pointShadow[b]=ne,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=V.shadow.matrix,B++}s.point[b]=F,b++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ce),F.groundColor.copy(V.groundColor).multiplyScalar(ce),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==I||T.numPointShadows!==B||T.numSpotShadows!==w||T.numSpotMaps!==z||T.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=w+z-U,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=P,T.directionalLength=E,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=I,T.numPointShadows=B,T.numSpotShadows=w,T.numSpotMaps=z,T.numLightProbes=P,s.version=jb++)}function m(h,S){let x=0,g=0,E=0,b=0,C=0;const M=S.matrixWorldInverse;for(let v=0,I=h.length;v<I;v++){const B=h[v];if(B.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(B.isSpotLight){const w=s.spot[E];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),E++}else if(B.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(M),d.identity(),u.copy(B.matrixWorld),u.premultiply(M),d.extractRotation(u),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),b++}else if(B.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const w=s.hemi[C];w.direction.setFromMatrixPosition(B.matrixWorld),w.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function q_(r){const e=new Kb(r),i=[],s=[],l=[];function u(g){x.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function S(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function Qb(r){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new q_(r),e.set(l,[p])):u>=d.length?(p=new q_(r),d.push(p)):p=d[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e3=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],t3=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Y_=new un,Ho=new $,Gd=new $;function n3(r,e,i){let s=new vv;const l=new wt,u=new wt,d=new rn,p=new mM,m=new gM,h={},S=i.maxTextureSize,x={[ss]:Yn,[Yn]:ss,[va]:va},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Jb,fragmentShader:$b}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new li;b.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qi(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let v=this.type;this.render=function(U,P,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===aS&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lc);const L=r.getRenderTarget(),Y=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ce=v!==this.type;ce&&P.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(J=>J.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,J=U.length;pe<J;pe++){const F=U[pe],G=F.shadow;if(G===void 0){nt("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();l.multiply(ne),u.copy(G.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/ne.x),l.x=u.x*ne.x,G.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/ne.y),l.y=u.y*ne.y,G.mapSize.y=u.y));const _e=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Go){if(F.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Xi(l.x,l.y,{format:Is,type:ya,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Ir(l.x,l.y,Gi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Ea,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else F.isPointLight?(G.map=new Av(l.x),G.map.depthTexture=new cM(l.x,Wi)):(G.map=new Xi(l.x,l.y),G.map.depthTexture=new Ir(l.x,l.y,Wi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Ea,this.type===Lc?(G.map.depthTexture.compareFunction=_e?Xh:kh,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn);G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<be;O++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,O),r.clear();else{O===0&&(r.setRenderTarget(G.map),r.clear());const Z=G.getViewport(O);d.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),Q.viewport(d)}if(F.isPointLight){const Z=G.camera,Ee=G.matrix,Ce=F.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),Ho.setFromMatrixPosition(F.matrixWorld),Z.position.copy(Ho),Gd.copy(Z.position),Gd.add(e3[O]),Z.up.copy(t3[O]),Z.lookAt(Gd),Z.updateMatrixWorld(),Ee.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Y_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Y_,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),w(P,T,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===Go&&I(G,T),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(L,Y,V)};function I(U,P){const T=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xi(l.x,l.y,{format:Is,type:ya})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(P,null,T,g,C,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(P,null,T,E,C,null)}function B(U,P,T,L){let Y=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?m:p,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=Y.uuid,ce=P.uuid;let pe=h[Q];pe===void 0&&(pe={},h[Q]=pe);let J=pe[ce];J===void 0&&(J=Y.clone(),pe[ce]=J,P.addEventListener("dispose",z)),Y=J}if(Y.visible=P.visible,Y.wireframe=P.wireframe,L===Go?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:x[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=r.properties.get(Y);Q.light=T}return Y}function w(U,P,T,L,Y){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===Go)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ce=e.update(U),pe=U.material;if(Array.isArray(pe)){const J=ce.groups;for(let F=0,G=J.length;F<G;F++){const ne=J[F],_e=pe[ne.materialIndex];if(_e&&_e.visible){const be=B(U,_e,L,Y);U.onBeforeShadow(r,U,P,T,ce,be,ne),r.renderBufferDirect(T,null,ce,be,U,ne),U.onAfterShadow(r,U,P,T,ce,be,ne)}}}else if(pe.visible){const J=B(U,pe,L,Y);U.onBeforeShadow(r,U,P,T,ce,J,null),r.renderBufferDirect(T,null,ce,J,U,null),U.onAfterShadow(r,U,P,T,ce,J,null)}}const Q=U.children;for(let ce=0,pe=Q.length;ce<pe;ce++)w(Q[ce],P,T,L,Y)}function z(U){U.target.removeEventListener("dispose",z);for(const T in h){const L=h[T],Y=U.target.uuid;Y in L&&(L[Y].dispose(),delete L[Y])}}}function i3(r,e){function i(){let X=!1;const Ae=new rn;let ge=null;const we=new rn(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!X&&(r.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Me,qe,Ve,Zt){Zt===!0&&(Ie*=Ve,Me*=Ve,qe*=Ve),Ae.set(Ie,Me,qe,Ve),we.equals(Ae)===!1&&(r.clearColor(Ie,Me,qe,Ve),we.copy(Ae))},reset:function(){X=!1,ge=null,we.set(-1,0,0,0)}}}function s(){let X=!1,Ae=!1,ge=null,we=null,Ie=null;return{setReversed:function(Me){if(Ae!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(Me){Me?ye(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!X&&(r.depthMask(Me),ge=Me)},setFunc:function(Me){if(Ae&&(Me=IS[Me]),we!==Me){switch(Me){case Wd:r.depthFunc(r.NEVER);break;case qd:r.depthFunc(r.ALWAYS);break;case Yd:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case jd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Ie!==Me&&(Ie=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){X=!1,ge=null,we=null,Ie=null,Ae=!1}}}function l(){let X=!1,Ae=null,ge=null,we=null,Ie=null,Me=null,qe=null,Ve=null,Zt=null;return{setTest:function(Ut){X||(Ut?ye(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!X&&(r.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,Zn,Kn){(ge!==Ut||we!==Zn||Ie!==Kn)&&(r.stencilFunc(Ut,Zn,Kn),ge=Ut,we=Zn,Ie=Kn)},setOp:function(Ut,Zn,Kn){(Me!==Ut||qe!==Zn||Ve!==Kn)&&(r.stencilOp(Ut,Zn,Kn),Me=Ut,qe=Zn,Ve=Kn)},setLocked:function(Ut){X=Ut},setClear:function(Ut){Zt!==Ut&&(r.clearStencil(Ut),Zt=Ut)},reset:function(){X=!1,Ae=null,ge=null,we=null,Ie=null,Me=null,qe=null,Ve=null,Zt=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},g={},E=new WeakMap,b=[],C=null,M=!1,v=null,I=null,B=null,w=null,z=null,U=null,P=null,T=new yt(0,0,0),L=0,Y=!1,V=null,Q=null,ce=null,pe=null,J=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=ne>=1):_e.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=ne>=2);let be=null,O={};const Z=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Ce=new rn().fromArray(Z),ze=new rn().fromArray(Ee);function se(X,Ae,ge,we){const Ie=new Uint8Array(4),Me=r.createTexture();r.bindTexture(X,Me),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ge;qe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ae+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Me}const Se={};Se[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ye(r.DEPTH_TEST),d.setFunc(Pr),$t(!1),en(jg),ye(r.CULL_FACE),vt(Sa);function ye(X){S[X]!==!0&&(r.enable(X),S[X]=!0)}function He(X){S[X]!==!1&&(r.disable(X),S[X]=!1)}function tt(X,Ae){return g[X]!==Ae?(r.bindFramebuffer(X,Ae),g[X]=Ae,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(X,Ae){let ge=b,we=!1;if(X){ge=E.get(Ae),ge===void 0&&(ge=[],E.set(Ae,ge));const Ie=X.textures;if(ge.length!==Ie.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,qe=Ie.length;Me<qe;Me++)ge[Me]=r.COLOR_ATTACHMENT0+Me;ge.length=Ie.length,we=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,we=!0);we&&r.drawBuffers(ge)}function qt(X){return C!==X?(r.useProgram(X),C=X,!0):!1}const ut={[Ns]:r.FUNC_ADD,[rS]:r.FUNC_SUBTRACT,[oS]:r.FUNC_REVERSE_SUBTRACT};ut[lS]=r.MIN,ut[cS]=r.MAX;const _t={[uS]:r.ZERO,[fS]:r.ONE,[dS]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[gS]:r.DST_COLOR,[pS]:r.DST_ALPHA,[hS]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[_S]:r.ONE_MINUS_DST_COLOR,[mS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[SS]:r.ONE_MINUS_CONSTANT_COLOR,[MS]:r.CONSTANT_ALPHA,[yS]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(X,Ae,ge,we,Ie,Me,qe,Ve,Zt,Ut){if(X===Sa){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(ye(r.BLEND),M=!0),X!==sS){if(X!==v||Ut!==Y){if((I!==Ns||z!==Ns)&&(r.blendEquation(r.FUNC_ADD),I=Ns,z=Ns),Ut)switch(X){case Nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vd:r.blendFunc(r.ONE,r.ONE);break;case Zg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case Nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Zg:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}B=null,w=null,U=null,P=null,T.set(0,0,0),L=0,v=X,Y=Ut}return}Ie=Ie||Ae,Me=Me||ge,qe=qe||we,(Ae!==I||Ie!==z)&&(r.blendEquationSeparate(ut[Ae],ut[Ie]),I=Ae,z=Ie),(ge!==B||we!==w||Me!==U||qe!==P)&&(r.blendFuncSeparate(_t[ge],_t[we],_t[Me],_t[qe]),B=ge,w=we,U=Me,P=qe),(Ve.equals(T)===!1||Zt!==L)&&(r.blendColor(Ve.r,Ve.g,Ve.b,Zt),T.copy(Ve),L=Zt),v=X,Y=!1}function ft(X,Ae){X.side===va?He(r.CULL_FACE):ye(r.CULL_FACE);let ge=X.side===Yn;Ae&&(ge=!ge),$t(ge),X.blending===Nr&&X.transparent===!1?vt(Sa):vt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const we=X.stencilWrite;p.setTest(we),we&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),on(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function en(X){X!==nS?(ye(r.CULL_FACE),X!==Q&&(X===jg?r.cullFace(r.BACK):X===iS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),Q=X}function tn(X){X!==ce&&(G&&r.lineWidth(X),ce=X)}function on(X,Ae,ge){X?(ye(r.POLYGON_OFFSET_FILL),(pe!==Ae||J!==ge)&&(pe=Ae,J=ge,d.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,ge))):He(r.POLYGON_OFFSET_FILL)}function Wt(X){X?ye(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function nn(X){X===void 0&&(X=r.TEXTURE0+F-1),be!==X&&(r.activeTexture(X),be=X)}function q(X,Ae,ge){ge===void 0&&(be===null?ge=r.TEXTURE0+F-1:ge=be);let we=O[ge];we===void 0&&(we={type:void 0,texture:void 0},O[ge]=we),(we.type!==X||we.texture!==Ae)&&(be!==ge&&(r.activeTexture(ge),be=ge),r.bindTexture(X,Ae||Se[X]),we.type=X,we.texture=Ae)}function Bt(){const X=O[be];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{r.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function y(){try{r.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function K(){try{r.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Te(){try{r.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function De(){try{r.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{r.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Re(X){return x[X]!==void 0?x[X]:r.getParameter(X)}function Be(X,Ae){x[X]!==Ae&&(r.pixelStorei(X,Ae),x[X]=Ae)}function Le(X){Ce.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ue(X){ze.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ze.copy(X))}function Ze(X,Ae){let ge=h.get(Ae);ge===void 0&&(ge=new WeakMap,h.set(Ae,ge));let we=ge.get(X);we===void 0&&(we=r.getUniformBlockIndex(Ae,X.name),ge.set(X,we))}function Qe(X,Ae){const we=h.get(Ae).get(X);m.get(Ae)!==we&&(r.uniformBlockBinding(Ae,we,X.__bindingPointIndex),m.set(Ae,we))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},x={},be=null,O={},g={},E=new WeakMap,b=[],C=null,M=!1,v=null,I=null,B=null,w=null,z=null,U=null,P=null,T=new yt(0,0,0),L=0,Y=!1,V=null,Q=null,ce=null,pe=null,J=null,Ce.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:ye,disable:He,bindFramebuffer:tt,drawBuffers:Ke,useProgram:qt,setBlending:vt,setMaterial:ft,setFlipSided:$t,setCullFace:en,setLineWidth:tn,setPolygonOffset:on,setScissorTest:Wt,activeTexture:nn,bindTexture:q,unbindTexture:Bt,compressedTexImage2D:Rt,compressedTexImage3D:N,texImage2D:fe,texImage3D:he,pixelStorei:Be,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:De,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Le,viewport:Ue,reset:it}}function a3(r,e,i,s,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,S=new WeakMap,x=new Set;let g;const E=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(N,y){return b?new OffscreenCanvas(N,y):Xc("canvas")}function M(N,y,K){let re=1;const de=Rt(N);if((de.width>K||de.height>K)&&(re=K/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Te=Math.floor(re*de.width),De=Math.floor(re*de.height);g===void 0&&(g=C(Te,De));const fe=y?C(Te,De):g;return fe.width=Te,fe.height=De,fe.getContext("2d").drawImage(N,0,0,Te,De),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+De+")."),fe}else return"data"in N&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function v(N){return N.generateMipmaps}function I(N){r.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,y,K,re,de,Te=!1){if(N!==null){if(r[N]!==void 0)return r[N];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===r.RED&&(K===r.FLOAT&&(fe=r.R32F),K===r.HALF_FLOAT&&(fe=r.R16F),K===r.UNSIGNED_BYTE&&(fe=r.R8),K===r.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),K===r.SHORT&&De&&(fe=De.R16_SNORM_EXT)),y===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.R8UI),K===r.UNSIGNED_SHORT&&(fe=r.R16UI),K===r.UNSIGNED_INT&&(fe=r.R32UI),K===r.BYTE&&(fe=r.R8I),K===r.SHORT&&(fe=r.R16I),K===r.INT&&(fe=r.R32I)),y===r.RG&&(K===r.FLOAT&&(fe=r.RG32F),K===r.HALF_FLOAT&&(fe=r.RG16F),K===r.UNSIGNED_BYTE&&(fe=r.RG8),K===r.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),K===r.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RG8UI),K===r.UNSIGNED_SHORT&&(fe=r.RG16UI),K===r.UNSIGNED_INT&&(fe=r.RG32UI),K===r.BYTE&&(fe=r.RG8I),K===r.SHORT&&(fe=r.RG16I),K===r.INT&&(fe=r.RG32I)),y===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),K===r.UNSIGNED_INT&&(fe=r.RGB32UI),K===r.BYTE&&(fe=r.RGB8I),K===r.SHORT&&(fe=r.RGB16I),K===r.INT&&(fe=r.RGB32I)),y===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),K===r.UNSIGNED_INT&&(fe=r.RGBA32UI),K===r.BYTE&&(fe=r.RGBA8I),K===r.SHORT&&(fe=r.RGBA16I),K===r.INT&&(fe=r.RGBA32I)),y===r.RGB&&(K===r.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),K===r.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),y===r.RGBA){const he=Te?Vc:St.getTransfer(de);K===r.FLOAT&&(fe=r.RGBA32F),K===r.HALF_FLOAT&&(fe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(fe=he===It?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),K===r.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function z(N,y){let K;return N?y===null||y===Wi||y===Wo?K=r.DEPTH24_STENCIL8:y===Gi?K=r.DEPTH32F_STENCIL8:y===Xo&&(K=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wi||y===Wo?K=r.DEPTH_COMPONENT24:y===Gi?K=r.DEPTH_COMPONENT32F:y===Xo&&(K=r.DEPTH_COMPONENT16),K}function U(N,y){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==On?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function P(N){const y=N.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&x.delete(y)}function T(N){const y=N.target;y.removeEventListener("dispose",T),V(y)}function L(N){const y=s.get(N);if(y.__webglInit===void 0)return;const K=N.source,re=E.get(K);if(re){const de=re[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&Y(N),Object.keys(re).length===0&&E.delete(K)}s.remove(N)}function Y(N){const y=s.get(N);r.deleteTexture(y.__webglTexture);const K=N.source,re=E.get(K);delete re[y.__cacheKey],d.memory.textures--}function V(N){const y=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let de=0;de<y.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(y.__webglFramebuffer[re][de]);else r.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)r.deleteFramebuffer(y.__webglFramebuffer[re]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=N.textures;for(let re=0,de=K.length;re<de;re++){const Te=s.get(K[re]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),d.memory.textures--),s.remove(K[re])}s.remove(N)}let Q=0;function ce(){Q=0}function pe(){return Q}function J(N){Q=N}function F(){const N=Q;return N>=l.maxTextures&&nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),Q+=1,N}function G(N){const y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function ne(N,y){const K=s.get(N);if(N.isVideoTexture&&q(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){const re=N.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,N,y);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+y)}function _e(N,y){const K=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){He(K,N,y);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+y)}function be(N,y){const K=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){He(K,N,y);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+y)}function O(N,y){const K=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){tt(K,N,y);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+y)}const Z={[Jd]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[$d]:r.MIRRORED_REPEAT},Ee={[wn]:r.NEAREST,[TS]:r.NEAREST_MIPMAP_NEAREST,[lc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[fd]:r.LINEAR_MIPMAP_NEAREST,[Os]:r.LINEAR_MIPMAP_LINEAR},Ce={[CS]:r.NEVER,[LS]:r.ALWAYS,[wS]:r.LESS,[kh]:r.LEQUAL,[DS]:r.EQUAL,[Xh]:r.GEQUAL,[US]:r.GREATER,[NS]:r.NOTEQUAL};function ze(N,y){if(y.type===Gi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===On||y.magFilter===fd||y.magFilter===lc||y.magFilter===Os||y.minFilter===On||y.minFilter===fd||y.minFilter===lc||y.minFilter===Os)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Z[y.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Z[y.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Z[y.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ee[y.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==lc&&y.minFilter!==Os||y.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function se(N,y){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",P));const re=y.source;let de=E.get(re);de===void 0&&(de={},E.set(re,de));const Te=G(y);if(Te!==N.__cacheKey){de[Te]===void 0&&(de[Te]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,K=!0),de[Te].usedTimes++;const De=de[N.__cacheKey];De!==void 0&&(de[N.__cacheKey].usedTimes--,De.usedTimes===0&&Y(y)),N.__cacheKey=Te,N.__webglTexture=de[Te].texture}return K}function Se(N,y,K){return Math.floor(Math.floor(N/K)/y)}function ye(N,y,K,re){const Te=N.updateRanges;if(Te.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,K,re,y.data);else{Te.sort((Be,Le)=>Be.start-Le.start);let De=0;for(let Be=1;Be<Te.length;Be++){const Le=Te[De],Ue=Te[Be],Ze=Le.start+Le.count,Qe=Se(Ue.start,y.width,4),it=Se(Le.start,y.width,4);Ue.start<=Ze+1&&Qe===it&&Se(Ue.start+Ue.count-1,y.width,4)===Qe?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++De,Te[De]=Ue)}Te.length=De+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),he=i.getParameter(r.UNPACK_SKIP_PIXELS),Re=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Be=0,Le=Te.length;Be<Le;Be++){const Ue=Te[Be],Ze=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),it=Ze%y.width,X=Math.floor(Ze/y.width),Ae=Qe,ge=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,it),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,it,X,Ae,ge,K,re,y.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,he),i.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function He(N,y,K){let re=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=r.TEXTURE_3D);const de=se(N,y),Te=y.source;i.bindTexture(re,N.__webglTexture,r.TEXTURE0+K);const De=s.get(Te);if(Te.version!==De.__version||de===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=St.getPrimaries(St.workingColorSpace),we=y.colorSpace===is?null:St.getPrimaries(y.colorSpace),Ie=y.colorSpace===is||ge===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let he=M(y.image,!1,l.maxTextureSize);he=Bt(y,he);const Re=u.convert(y.format,y.colorSpace),Be=u.convert(y.type);let Le=w(y.internalFormat,Re,Be,y.normalized,y.colorSpace,y.isVideoTexture);ze(re,y);let Ue;const Ze=y.mipmaps,Qe=y.isVideoTexture!==!0,it=De.__version===void 0||de===!0,X=Te.dataReady,Ae=U(y,he);if(y.isDepthTexture)Le=z(y.format===Ps,y.type),it&&(Qe?i.texStorage2D(r.TEXTURE_2D,1,Le,he.width,he.height):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Be,null));else if(y.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],Qe?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(r.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Re,Be,Ue.data);y.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,he.width,he.height),X&&ye(y,he,Re,Be)):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Be,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Le,Ze[0].width,Ze[0].height,he.depth);for(let ge=0,we=Ze.length;ge<we;ge++)if(Ue=Ze[ge],y.format!==Ui)if(Re!==null)if(Qe){if(X)if(y.layerUpdates.size>0){const Ie=b_(Ue.width,Ue.height,y.format,y.type);for(const Me of y.layerUpdates){const qe=Ue.data.subarray(Me*Ie/Ue.data.BYTES_PER_ELEMENT,(Me+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,Me,Ue.width,Ue.height,1,Re,qe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,he.depth,Re,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Le,Ue.width,Ue.height,he.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,he.depth,Re,Be,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ge,Le,Ue.width,Ue.height,he.depth,0,Re,Be,Ue.data)}else{Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],y.format!==Ui?Re!==null?Qe?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(r.TEXTURE_2D,ge,Le,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(y.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Le,he.width,he.height,he.depth),X)if(y.layerUpdates.size>0){const ge=b_(he.width,he.height,y.format,y.type);for(const we of y.layerUpdates){const Ie=he.data.subarray(we*ge/he.data.BYTES_PER_ELEMENT,(we+1)*ge/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Re,Be,Ie)}y.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Be,he.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,Re,Be,he.data);else if(y.isData3DTexture)Qe?(it&&i.texStorage3D(r.TEXTURE_3D,Ae,Le,he.width,he.height,he.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Be,he.data)):i.texImage3D(r.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,Re,Be,he.data);else if(y.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(r.TEXTURE_2D,Ae,Le,he.width,he.height);else{let ge=he.width,we=he.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Le,ge,we,0,Re,Be,null),ge>>=1,we>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),he.parentNode!==ge){ge.appendChild(he),x.add(y),ge.onpaint=we=>{const Ie=we.changedElements;for(const Me of x)Ie.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,he);else{const Ie=r.RGBA,Me=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ie,Me,qe,he)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const ge=Rt(Ze[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Le,ge.width,ge.height)}for(let ge=0,we=Ze.length;ge<we;ge++)Ue=Ze[ge],Qe?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Re,Be,Ue):i.texImage2D(r.TEXTURE_2D,ge,Le,Re,Be,Ue);y.generateMipmaps=!1}else if(Qe){if(it){const ge=Rt(he);i.texStorage2D(r.TEXTURE_2D,Ae,Le,ge.width,ge.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Be,he)}else i.texImage2D(r.TEXTURE_2D,0,Le,Re,Be,he);v(y)&&I(re),De.__version=Te.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function tt(N,y,K){if(y.image.length!==6)return;const re=se(N,y),de=y.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+K);const Te=s.get(de);if(de.version!==Te.__version||re===!0){i.activeTexture(r.TEXTURE0+K);const De=St.getPrimaries(St.workingColorSpace),fe=y.colorSpace===is?null:St.getPrimaries(y.colorSpace),he=y.colorSpace===is||De===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let Me=0;Me<6;Me++)!Re&&!Be?Le[Me]=M(y.image[Me],!0,l.maxCubemapSize):Le[Me]=Be?y.image[Me].image:y.image[Me],Le[Me]=Bt(y,Le[Me]);const Ue=Le[0],Ze=u.convert(y.format,y.colorSpace),Qe=u.convert(y.type),it=w(y.internalFormat,Ze,Qe,y.normalized,y.colorSpace),X=y.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,ge=de.dataReady;let we=U(y,Ue);ze(r.TEXTURE_CUBE_MAP,y);let Ie;if(Re){X&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,Ue.width,Ue.height);for(let Me=0;Me<6;Me++){Ie=Le[Me].mipmaps;for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];y.format!==Ui?Ze!==null?X?ge&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Ie=y.mipmaps,X&&Ae){Ie.length>0&&we++;const Me=Rt(Le[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Be){X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Le[Me].width,Le[Me].height,Ze,Qe,Le[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Le[Me].width,Le[Me].height,0,Ze,Qe,Le[Me].data);for(let qe=0;qe<Ie.length;qe++){const Zt=Ie[qe].image[Me].image;X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Zt.width,Zt.height,Ze,Qe,Zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,it,Zt.width,Zt.height,0,Ze,Qe,Zt.data)}}else{X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ze,Qe,Le[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ze,Qe,Le[Me]);for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ze,Qe,Ve.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,it,Ze,Qe,Ve.image[Me])}}}v(y)&&I(r.TEXTURE_CUBE_MAP),Te.__version=de.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function Ke(N,y,K,re,de,Te){const De=u.convert(K.format,K.colorSpace),fe=u.convert(K.type),he=w(K.internalFormat,De,fe,K.normalized,K.colorSpace),Re=s.get(y),Be=s.get(K);if(Be.__renderTarget=y,!Re.__hasExternalTextures){const Le=Math.max(1,y.width>>Te),Ue=Math.max(1,y.height>>Te);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,Te,he,Le,Ue,y.depth,0,De,fe,null):i.texImage2D(de,Te,he,Le,Ue,0,De,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),nn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,Be.__webglTexture,0,Wt(y)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,Be.__webglTexture,Te),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(N,y,K){if(r.bindRenderbuffer(r.RENDERBUFFER,N),y.depthBuffer){const re=y.depthTexture,de=re&&re.isDepthTexture?re.type:null,Te=z(y.stencilBuffer,de),De=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nn(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(y),Te,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(y),Te,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Te,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,N)}else{const re=y.textures;for(let de=0;de<re.length;de++){const Te=re[de],De=u.convert(Te.format,Te.colorSpace),fe=u.convert(Te.type),he=w(Te.internalFormat,De,fe,Te.normalized,Te.colorSpace);nn(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(y),he,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(y),he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(N,y,K){const re=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ze(r.TEXTURE_CUBE_MAP,y.depthTexture);const Re=u.convert(y.depthTexture.format),Be=u.convert(y.depthTexture.type);let Le;y.depthTexture.format===Ea?Le=r.DEPTH_COMPONENT24:y.depthTexture.format===Ps&&(Le=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,y.width,y.height,0,Re,Be,null)}}else ne(y.depthTexture,0);const Te=de.__webglTexture,De=Wt(y),fe=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,he=y.depthTexture.format===Ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ea)nn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else if(y.depthTexture.format===Ps)nn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(N){const y=s.get(N),K=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){const re=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),re){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=re}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)ut(y.__webglFramebuffer[re],N,re);else{const re=N.texture.mipmaps;re&&re.length>0?ut(y.__webglFramebuffer[0],N,0):ut(y.__webglFramebuffer,N,0)}else if(K){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]===void 0)y.__webglDepthbuffer[re]=r.createRenderbuffer(),qt(y.__webglDepthbuffer[re],N,!1);else{const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}else{const re=N.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),qt(y.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(N,y,K){const re=s.get(N);y!==void 0&&Ke(re.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&_t(N)}function ft(N){const y=N.texture,K=s.get(N),re=s.get(y);N.addEventListener("dispose",T);const de=N.textures,Te=N.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=y.version,d.memory.textures++),Te){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let he=0;he<y.mipmaps.length;he++)K.__webglFramebuffer[fe][he]=r.createFramebuffer()}else K.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)K.__webglFramebuffer[fe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(De)for(let fe=0,he=de.length;fe<he;fe++){const Re=s.get(de[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&nn(N)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const he=de[fe];K.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Re=u.convert(he.format,he.colorSpace),Be=u.convert(he.type),Le=w(he.internalFormat,Re,Be,he.normalized,he.colorSpace,N.isXRRenderTarget===!0),Ue=Wt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Le,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(K.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),ze(r.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ke(K.__webglFramebuffer[fe][he],N,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Ke(K.__webglFramebuffer[fe],N,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(y)&&I(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let fe=0,he=de.length;fe<he;fe++){const Re=de[fe],Be=s.get(Re);let Le=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,Be.__webglTexture),ze(Le,Re),Ke(K.__webglFramebuffer,N,Re,r.COLOR_ATTACHMENT0+fe,Le,0),v(Re)&&I(Le)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,re.__webglTexture),ze(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ke(K.__webglFramebuffer[he],N,y,r.COLOR_ATTACHMENT0,fe,he);else Ke(K.__webglFramebuffer,N,y,r.COLOR_ATTACHMENT0,fe,0);v(y)&&I(fe),i.unbindTexture()}N.depthBuffer&&_t(N)}function $t(N){const y=N.textures;for(let K=0,re=y.length;K<re;K++){const de=y[K];if(v(de)){const Te=B(N),De=s.get(de).__webglTexture;i.bindTexture(Te,De),I(Te),i.unbindTexture()}}}const en=[],tn=[];function on(N){if(N.samples>0){if(nn(N)===!1){const y=N.textures,K=N.width,re=N.height;let de=r.COLOR_BUFFER_BIT;const Te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(N),fe=y.length>1;if(fe)for(let Re=0;Re<y.length;Re++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=N.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=s.get(y[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,K,re,0,0,K,re,de,r.NEAREST),m===!0&&(en.length=0,tn.length=0,en.push(r.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(en.push(Te),tn.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<y.length;Re++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=s.get(y[Re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const y=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Wt(N){return Math.min(l.maxSamples,N.samples)}function nn(N){const y=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(N){const y=d.render.frame;S.get(N)!==y&&(S.set(N,y),N.update())}function Bt(N,y){const K=N.colorSpace,re=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Gc&&K!==is&&(St.getTransfer(K)===It?(re!==Ui||de!==Si)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",K)),y}function Rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=O,this.rebindTextures=vt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function s3(r,e){function i(s,l=is){let u;const d=St.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===Bh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===rv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ov)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===av)return r.BYTE;if(s===sv)return r.SHORT;if(s===Xo)return r.UNSIGNED_SHORT;if(s===Ih)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===lv)return r.ALPHA;if(s===cv)return r.RGB;if(s===Ui)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===uv)return r.RED;if(s===Hh)return r.RED_INTEGER;if(s===Is)return r.RG;if(s===Gh)return r.RG_INTEGER;if(s===Vh)return r.RGBA_INTEGER;if(s===Oc||s===Pc||s===zc||s===Ic)if(d===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Oc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Oc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eh||s===th||s===nh||s===ih)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===eh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===th)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ih)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ah||s===sh||s===rh||s===oh||s===lh||s===Fc||s===ch)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ah||s===sh)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===oh)return u.COMPRESSED_R11_EAC;if(s===lh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Fc)return u.COMPRESSED_RG11_EAC;if(s===ch)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===Mh||s===yh||s===Eh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_h)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bh||s===Th||s===Ah)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===bh)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===Ch||s===Hc||s===wh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Rh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const r3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Yi({vertexShader:r3,fragmentShader:o3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qi(new jc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c3 extends Fs{constructor(e,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,g=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",M=new l3,v={},I=i.getContextAttributes();let B=null,w=null;const z=[],U=[],P=new wt;let T=null;const L=new xi;L.viewport=new rn;const Y=new xi;Y.viewport=new rn;const V=[L,Y],Q=new vM;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=z[se];return Se===void 0&&(Se=new xd,z[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=z[se];return Se===void 0&&(Se=new xd,z[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=z[se];return Se===void 0&&(Se=new xd,z[se]=Se),Se.getHandSpace()};function J(se){const Se=U.indexOf(se.inputSource);if(Se===-1)return;const ye=z[Se];ye!==void 0&&(ye.update(se.inputSource,se.frame,h||d),ye.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let se=0;se<z.length;se++){const Se=U[se];Se!==null&&(U[se]=null,z[se].disconnect(Se))}ce=null,pe=null,M.reset();for(const se in v)delete v[se];e.setRenderTarget(B),E=null,g=null,x=null,l=null,w=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){u=se,s.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,tt=null;I.depth&&(tt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=I.stencil?Ps:Ea,He=I.stencil?Wo:Wi);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Xi(g.textureWidth,g.textureHeight,{format:Ui,type:Si,depthTexture:new Ir(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Ui,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(se){for(let Se=0;Se<se.removed.length;Se++){const ye=se.removed[Se],He=U.indexOf(ye);He>=0&&(U[He]=null,z[He].disconnect(ye))}for(let Se=0;Se<se.added.length;Se++){const ye=se.added[Se];let He=U.indexOf(ye);if(He===-1){for(let Ke=0;Ke<z.length;Ke++)if(Ke>=U.length){U.push(ye),He=Ke;break}else if(U[Ke]===null){U[Ke]=ye,He=Ke;break}if(He===-1)break}const tt=z[He];tt&&tt.connect(ye)}}const ne=new $,_e=new $;function be(se,Se,ye){ne.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(ye.matrixWorld);const He=ne.distanceTo(_e),tt=Se.projectionMatrix.elements,Ke=ye.projectionMatrix.elements,qt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),_t=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],$t=(Ke[8]+1)/Ke[0],en=qt*ft,tn=qt*$t,on=He/(-ft+$t),Wt=on*-ft;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Wt),se.translateZ(on),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),tt[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const nn=qt+on,q=ut+on,Bt=en-Wt,Rt=tn+(He-Wt),N=_t*ut/q*nn,y=vt*ut/q*nn;se.projectionMatrix.makePerspective(Bt,Rt,N,y,nn,q),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Se=se.near,ye=se.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),Q.near=Y.near=L.near=Se,Q.far=Y.far=L.far=ye,(ce!==Q.near||pe!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ce=Q.near,pe=Q.far),Q.layers.mask=se.layers.mask|6,L.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const He=se.parent,tt=Q.cameras;O(Q,He);for(let Ke=0;Ke<tt.length;Ke++)O(tt[Ke],He);tt.length===2?be(Q,L,Y):Q.projectionMatrix.copy(L.projectionMatrix),Z(se,Q,He)};function Z(se,Se,ye){ye===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(ye.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Dh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(se){return v[se]};let Ee=null;function Ce(se,Se){if(S=Se.getViewerPose(h||d),b=Se,S!==null){const ye=S.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let He=!1;ye.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let ut=0;ut<ye.length;ut++){const _t=ye[ut];let vt=null;if(E!==null)vt=E.getViewport(_t);else{const $t=x.getViewSubImage(g,_t);vt=$t.viewport,ut===0&&(e.setRenderTargetTextures(w,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(w))}let ft=V[ut];ft===void 0&&(ft=new xi,ft.layers.enable(ut),ft.viewport=new rn,V[ut]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(vt.x,vt.y,vt.width,vt.height),ut===0&&(Q.matrix.copy(ft.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(ft)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ut=x.getDepthInformation(ye[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let ut=0;ut<ye.length;ut++){const _t=ye[ut].camera;if(_t){let vt=v[_t];vt||(vt=new Sv,v[_t]=vt);const ft=x.getCameraImage(_t);vt.sourceTexture=ft}}}}for(let ye=0;ye<z.length;ye++){const He=U[ye],tt=z[ye];He!==null&&tt!==void 0&&tt.update(He,Se,h||d)}Ee&&Ee(se,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),b=null}const ze=new bv;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(se){Ee=se},this.dispose=function(){}}}const u3=new un,Uv=new st;Uv.set(-1,0,0,0,1,0,0,0,1);function f3(r,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Mv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,I,B,w){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),S(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),g(M,v),v.isMeshPhysicalMaterial&&E(M,v,w)):v.isMeshMatcapMaterial?(u(M,v),b(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),C(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,I,B):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const I=e.get(v),B=I.envMap,w=I.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(w)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Uv),M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,I,B){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*I,M.scale.value=B*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,I){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const I=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function d3(r,e,i,s){let l={},u={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,z){const U=z.program;s.uniformBlockBinding(w,U)}function h(w,z){let U=l[w.id];U===void 0&&(M(w),U=S(w),l[w.id]=U,w.addEventListener("dispose",I));const P=z.program;s.updateUBOMapping(w,P);const T=e.render.frame;u[w.id]!==T&&(g(w),u[w.id]=T)}function S(w){const z=x();w.__bindingPointIndex=z;const U=r.createBuffer(),P=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,P,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,U),U}function x(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const z=l[w.id],U=w.uniforms,P=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let T=0,L=U.length;T<L;T++){const Y=U[T];if(Array.isArray(Y))for(let V=0,Q=Y.length;V<Q;V++)E(Y[V],T,V,P);else E(Y,T,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(w,z,U,P){if(C(w,z,U,P)===!0){const T=w.__offset,L=w.value;if(Array.isArray(L)){let Y=0;for(let V=0;V<L.length;V++){const Q=L[V],ce=v(Q);b(Q,w.__data,Y),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Y+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function b(w,z,U){typeof w=="number"||typeof w=="boolean"?z[0]=w:w.isMatrix3?(z[0]=w.elements[0],z[1]=w.elements[1],z[2]=w.elements[2],z[3]=0,z[4]=w.elements[3],z[5]=w.elements[4],z[6]=w.elements[5],z[7]=0,z[8]=w.elements[6],z[9]=w.elements[7],z[10]=w.elements[8],z[11]=0):ArrayBuffer.isView(w)?z.set(new w.constructor(w.buffer,w.byteOffset,z.length)):w.toArray(z,U)}function C(w,z,U,P){const T=w.value,L=z+"_"+U;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:ArrayBuffer.isView(T)?P[L]=T.slice():P[L]=T.clone(),!0;{const Y=P[L];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return P[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function M(w){const z=w.uniforms;let U=0;const P=16;for(let L=0,Y=z.length;L<Y;L++){const V=Array.isArray(z[L])?z[L]:[z[L]];for(let Q=0,ce=V.length;Q<ce;Q++){const pe=V[Q],J=Array.isArray(pe.value)?pe.value:[pe.value];for(let F=0,G=J.length;F<G;F++){const ne=J[F],_e=v(ne),be=U%P,O=be%_e.boundary,Z=be+O;U+=O,Z!==0&&P-Z<_e.storage&&(U+=P-Z),pe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=U,U+=_e.storage}}}const T=U%P;return T>0&&(U+=P-T),w.__size=U,w.__cache={},this}function v(w){const z={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(z.boundary=4,z.storage=4):w.isVector2?(z.boundary=8,z.storage=8):w.isVector3||w.isColor?(z.boundary=16,z.storage=12):w.isVector4?(z.boundary=16,z.storage=16):w.isMatrix3?(z.boundary=48,z.storage=48):w.isMatrix4?(z.boundary=64,z.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(z.boundary=16,z.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),z}function I(w){const z=w.target;z.removeEventListener("dispose",I);const U=d.indexOf(z.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function B(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:h,dispose:B}}const h3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function p3(){return Fi===null&&(Fi=new aM(h3,16,16,Is,ya),Fi.name="DFG_LUT",Fi.minFilter=On,Fi.magFilter=On,Fi.wrapS=xa,Fi.wrapT=xa,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class m3{constructor(e={}){const{canvas:i=PS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=Si}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const C=E,M=new Set([Vh,Gh,Hh]),v=new Set([Si,Wi,Xo,Wo,Bh,Fh]),I=new Uint32Array(4),B=new Int32Array(4),w=new $;let z=null,U=null;const P=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,Q=null,ce=null,pe=null,J=null;this._outputColorSpace=vi;let F=0,G=0,ne=null,_e=-1,be=null;const O=new rn,Z=new rn;let Ee=null;const Ce=new yt(0);let ze=0,se=i.width,Se=i.height,ye=1,He=null,tt=null;const Ke=new rn(0,0,se,Se),qt=new rn(0,0,se,Se);let ut=!1;const _t=new vv;let vt=!1,ft=!1;const $t=new un,en=new $,tn=new rn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function nn(){return ne===null?ye:1}let q=s;function Bt(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zh}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Zn,!1),q===null){const W="webgl2";if(q=Bt(W,A),q===null)throw Bt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Rt,N,y,K,re,de,Te,De,fe,he,Re,Be,Le,Ue,Ze,Qe,it,X,Ae,ge,we,Ie,Me;function qe(){Rt=new pE(q),Rt.init(),we=new s3(q,Rt),N=new rE(q,Rt,e,we),y=new i3(q,Rt),N.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ce=q.createFramebuffer(),pe=q.createFramebuffer(),J=q.createFramebuffer(),K=new _E(q),re=new kb,de=new a3(q,Rt,y,re,N,we,K),Te=new hE(Y),De=new MM(q),Ie=new aE(q,De),fe=new mE(q,De,K,Ie),he=new xE(q,fe,De,Ie,K),X=new vE(q,N,de),Ze=new oE(re),Re=new Vb(Y,Te,Rt,N,Ie,Ze),Be=new f3(Y,re),Le=new Wb,Ue=new Qb(Rt),it=new iE(Y,Te,y,he,b,m),Qe=new n3(Y,he,N),Me=new d3(q,K,N,y),Ae=new sE(q,Rt,K),ge=new gE(q,Rt,K),K.programs=Re.programs,Y.capabilities=N,Y.extensions=Rt,Y.properties=re,Y.renderLists=Le,Y.shadowMap=Qe,Y.state=y,Y.info=K}qe(),C!==Si&&(L=new ME(C,i.width,i.height,p,l,u));const Ve=new c3(Y,q);this.xr=Ve,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(se,Se,!1))},this.getSize=function(A){return A.set(se,Se)},this.setSize=function(A,W,oe=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,Se=W,i.width=Math.floor(A*ye),i.height=Math.floor(W*ye),oe===!0&&(i.style.width=A+"px",i.style.height=W+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*ye,Se*ye).floor()},this.setDrawingBufferSize=function(A,W,oe){se=A,Se=W,ye=oe,i.width=Math.floor(A*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===Si){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(Ke)},this.setViewport=function(A,W,oe,ie){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,W,oe,ie),y.viewport(O.copy(Ke).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,W,oe,ie){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,W,oe,ie),y.scissor(Z.copy(qt).multiplyScalar(ye).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){y.setScissorTest(ut=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,oe=!0){let ie=0;if(A){let ae=!1;if(ne!==null){const Oe=ne.texture.format;ae=M.has(Oe)}if(ae){const Oe=ne.texture.type,Ge=v.has(Oe),Ne=it.getClearColor(),Xe=it.getClearAlpha(),ke=Ne.r,Je=Ne.g,rt=Ne.b;Ge?(I[0]=ke,I[1]=Je,I[2]=rt,I[3]=Xe,q.clearBufferuiv(q.COLOR,0,I)):(B[0]=ke,B[1]=Je,B[2]=rt,B[3]=Xe,q.clearBufferiv(q.COLOR,0,B))}else ie|=q.COLOR_BUFFER_BIT}W&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Zn,!1),it.dispose(),Le.dispose(),Ue.dispose(),re.dispose(),Te.dispose(),he.dispose(),Ie.dispose(),Me.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",bn),Fn.stop()};function Zt(A){A.preventDefault(),n_("WebGLRenderer: Context Lost."),V=!0}function Ut(){n_("WebGLRenderer: Context Restored."),V=!1;const A=K.autoReset,W=Qe.enabled,oe=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;qe(),K.autoReset=A,Qe.enabled=W,Qe.autoUpdate=oe,Qe.needsUpdate=ie,Qe.type=ae}function Zn(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kn(A){const W=A.target;W.removeEventListener("dispose",Kn),Gr(W)}function Gr(A){Vr(A),re.remove(A)}function Vr(A){const W=re.get(A).programs;W!==void 0&&(W.forEach(function(oe){Re.releaseProgram(oe)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,oe,ie,ae,Oe){W===null&&(W=on);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=Aa(A,W,oe,ie,ae);y.setMaterial(ie,Ge);let Xe=oe.index,ke=1;if(ie.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;ke=2}const Je=oe.drawRange,rt=oe.attributes.position;let je=Je.start*ke,bt=(Je.start+Je.count)*ke;Oe!==null&&(je=Math.max(je,Oe.start*ke),bt=Math.min(bt,(Oe.start+Oe.count)*ke)),Xe!==null?(je=Math.max(je,0),bt=Math.min(bt,Xe.count)):rt!=null&&(je=Math.max(je,0),bt=Math.min(bt,rt.count));const Kt=bt-je;if(Kt<0||Kt===1/0)return;Ie.setup(ae,ie,Ne,oe,Xe);let Vt,Nt=Ae;if(Xe!==null&&(Vt=De.get(Xe),Nt=ge,Nt.setIndex(Vt)),ae.isMesh)ie.wireframe===!0?(y.setLineWidth(ie.wireframeLinewidth*nn()),Nt.setMode(q.LINES)):Nt.setMode(q.TRIANGLES);else if(ae.isLine){let Lt=ie.linewidth;Lt===void 0&&(Lt=1),y.setLineWidth(Lt*nn()),ae.isLineSegments?Nt.setMode(q.LINES):ae.isLineLoop?Nt.setMode(q.LINE_LOOP):Nt.setMode(q.LINE_STRIP)}else ae.isPoints?Nt.setMode(q.POINTS):ae.isSprite&&Nt.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Lt=ae._multiDrawStarts,Fe=ae._multiDrawCounts,Dn=ae._multiDrawCount,dt=Xe?De.get(Xe).bytesPerElement:1,vn=re.get(ie).currentProgram.getUniforms();for(let Qn=0;Qn<Dn;Qn++)vn.setValue(q,"_gl_DrawID",Qn),Nt.render(Lt[Qn]/dt,Fe[Qn])}else if(ae.isInstancedMesh)Nt.renderInstances(je,Kt,ae.count);else if(oe.isInstancedBufferGeometry){const Lt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Fe=Math.min(oe.instanceCount,Lt);Nt.renderInstances(je,Kt,Fe)}else Nt.render(je,Kt)};function kr(A,W,oe){A.transparent===!0&&A.side===va&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Ta(A,W,oe),A.side=ss,A.needsUpdate=!0,Ta(A,W,oe),A.side=va):Ta(A,W,oe)}this.compile=function(A,W,oe=null){oe===null&&(oe=A),U=Ue.get(oe),U.init(W),T.push(U),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(W.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),A!==oe&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(W.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ne=Oe[Ge];kr(Ne,oe,ae),ie.add(Ne)}else kr(Oe,oe,ae),ie.add(Oe)}),U=T.pop(),ie},this.compileAsync=function(A,W,oe=null){const ie=this.compile(A,W,oe);return new Promise(ae=>{function Oe(){if(ie.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(A);return}setTimeout(Oe,10)}Rt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Hs=null;function Ni(A){Hs&&Hs(A)}function fn(){Fn.stop()}function bn(){Fn.start()}const Fn=new bv;Fn.setAnimationLoop(Ni),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){Hs=A,Ve.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",bn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(A,W);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ie=L!==null&&(ne===null||oe)&&L.begin(Y,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,ne),U=Ue.get(A,T.length),U.init(W),U.state.textureUnits=de.getTextureUnits(),T.push(U),$t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),_t.setFromProjectionMatrix($t,Vi,W.reversedDepth),ft=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,ft),z=Le.get(A,P.length),z.init(),P.push(z),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=Y.xr.getDepthSensingMesh();Ge!==null&&rs(Ge,W,-1/0,Y.sortObjects)}rs(A,W,0,Y.sortObjects),z.finish(),Y.sortObjects===!0&&z.sort(He,tt,W.reversedDepth),Wt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Wt&&it.addToRenderList(z,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const ae=U.state.shadowsArray;if(Qe.render(ae,A,W),vt===!0&&Ze.endShadows(),(ie&&L.hasRenderPass())===!1){const Ge=z.opaque,Ne=z.transmissive;if(U.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Ne.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];Qo(Ge,Ne,A,rt)}Wt&&it.render(A);for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];Ko(z,A,rt,rt.viewport)}}else Ne.length>0&&Qo(Ge,Ne,A,W),Wt&&it.render(A),Ko(z,A,W)}ne!==null&&G===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),ie&&L.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),Ie.resetDefaultState(),_e=-1,be=null,T.pop(),T.length>0?(U=T[T.length-1],de.setTextureUnits(U.state.textureUnits),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?z=P[P.length-1]:z=null,Q!==null&&Q.renderEnd()};function rs(A,W,oe,ie){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){ie&&tn.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const Ge=he.update(A),Ne=A.material;Ne.visible&&z.push(A,Ge,Ne,oe,tn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const Ge=he.update(A),Ne=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tn.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),tn.copy(Ge.boundingSphere.center)),tn.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Ne)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke],je=Ne[rt.materialIndex];je&&je.visible&&z.push(A,Ge,je,oe,tn.z,rt)}}else Ne.visible&&z.push(A,Ge,Ne,oe,tn.z,null)}}const Oe=A.children;for(let Ge=0,Ne=Oe.length;Ge<Ne;Ge++)rs(Oe[Ge],W,oe,ie)}function Ko(A,W,oe,ie){const{opaque:ae,transmissive:Oe,transparent:Ge}=A;U.setupLightsView(oe),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,oe),ie&&y.viewport(O.copy(ie)),ae.length>0&&os(ae,W,oe),Oe.length>0&&os(Oe,W,oe),Ge.length>0&&os(Ge,W,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Qo(A,W,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const je=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new Xi(1,1,{generateMipmaps:!0,type:je?ya:Si,minFilter:Os,samples:Math.max(4,N.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||O;Oe.setSize(Ge.z*Y.transmissionResolutionScale,Ge.w*Y.transmissionResolutionScale);const Ne=Y.getRenderTarget(),Xe=Y.getActiveCubeFace(),ke=Y.getActiveMipmapLevel();Y.setRenderTarget(Oe),Y.getClearColor(Ce),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),Wt&&it.render(oe);const Je=Y.toneMapping;Y.toneMapping=ki;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),vt===!0&&Ze.setGlobalState(Y.clippingPlanes,ie),os(A,oe,ie),de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let bt=0,Kt=W.length;bt<Kt;bt++){const Vt=W[bt],{object:Nt,geometry:Lt,material:Fe,group:Dn}=Vt;if(Fe.side===va&&Nt.layers.test(ie.layers)){const dt=Fe.side;Fe.side=Yn,Fe.needsUpdate=!0,ba(Nt,oe,ie,Lt,Fe,Dn),Fe.side=dt,Fe.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe))}Y.setRenderTarget(Ne,Xe,ke),Y.setClearColor(Ce,ze),rt!==void 0&&(ie.viewport=rt),Y.toneMapping=Je}function os(A,W,oe){const ie=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,Oe=A.length;ae<Oe;ae++){const Ge=A[ae],{object:Ne,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ne.layers.test(oe.layers)&&ba(Ne,W,oe,Xe,Je,ke)}}function ba(A,W,oe,ie,ae,Oe){A.onBeforeRender(Y,W,oe,ie,ae,Oe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(Y,W,oe,ie,A,Oe),ae.transparent===!0&&ae.side===va&&ae.forceSinglePass===!1?(ae.side=Yn,ae.needsUpdate=!0,Y.renderBufferDirect(oe,W,ie,ae,A,Oe),ae.side=ss,ae.needsUpdate=!0,Y.renderBufferDirect(oe,W,ie,ae,A,Oe),ae.side=va):Y.renderBufferDirect(oe,W,ie,ae,A,Oe),A.onAfterRender(Y,W,oe,ie,ae,Oe)}function Ta(A,W,oe){W.isScene!==!0&&(W=on);const ie=re.get(A),ae=U.state.lights,Oe=U.state.shadowsArray,Ge=ae.state.version,Ne=Re.getParameters(A,ae.state,Oe,W,oe,U.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Ne);let ke=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ie.fog=W.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Te.get(A.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Kn),ke=new Map,ie.programs=ke);let rt=ke.get(Xe);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===Ge)return Zi(A,Ne),rt}else Ne.uniforms=Re.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,oe,Ne),A.onBeforeCompile(Ne,Y),rt=Re.acquireProgram(Ne,Xe),ke.set(Xe,rt),ie.uniforms=Ne.uniforms;const je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Ze.uniform),Zi(A,Ne),ie.needsLights=Jo(A),ie.lightsStateVersion=Ge,ie.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=U.state.lightProbeGridArray.length>0,ie.currentProgram=rt,ie.uniformsList=null,rt}function ji(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Bc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Zi(A,W){const oe=re.get(A);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ls(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let oe=0,ie=A.length;oe<ie;oe++){const ae=A[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Aa(A,W,oe,ie,ae){W.isScene!==!0&&(W=on),de.resetTextureUnits();const Oe=W.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?W.environment:null,Ne=ne===null?Y.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:St.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Te.get(ie.envMap||Ge,Xe),Je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!oe.morphAttributes.position,bt=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let Vt=ki;ie.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Vt=Y.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Lt=Nt!==void 0?Nt.length:0,Fe=re.get(ie),Dn=U.state.lights;if(vt===!0&&(ft===!0||A!==be)){const Dt=A===be&&ie.id===_e;Ze.setState(ie,A,Dt)}let dt=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Dn.state.version||Fe.outputColorSpace!==Ne||ae.isBatchedMesh&&Fe.batching===!1||!ae.isBatchedMesh&&Fe.batching===!0||ae.isBatchedMesh&&Fe.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Fe.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Fe.instancing===!1||!ae.isInstancedMesh&&Fe.instancing===!0||ae.isSkinnedMesh&&Fe.skinning===!1||!ae.isSkinnedMesh&&Fe.skinning===!0||ae.isInstancedMesh&&Fe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Fe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Fe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Fe.instancingMorph===!1&&ae.morphTexture!==null||Fe.envMap!==ke||ie.fog===!0&&Fe.fog!==Oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ze.numPlanes||Fe.numIntersection!==Ze.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==rt||Fe.morphTargets!==je||Fe.morphNormals!==bt||Fe.morphColors!==Kt||Fe.toneMapping!==Vt||Fe.morphTargetsCount!==Lt||!!Fe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Fe.__version=ie.version);let vn=Fe.currentProgram;dt===!0&&(vn=Ta(ie,W,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,vn,Fe));let Qn=!1,yi=!1,Jn=!1;const Ot=vn.getUniforms(),Qt=Fe.uniforms;if(y.useProgram(vn.program)&&(Qn=!0,yi=!0,Jn=!0),ie.id!==_e&&(_e=ie.id,yi=!0),Fe.needsLights){const Dt=ls(U.state.lightProbeGridArray,ae);Fe.lightProbeGrid!==Dt&&(Fe.lightProbeGrid=Dt,yi=!0)}if(Qn||be!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(q,"projectionMatrix",A.projectionMatrix),Ot.setValue(q,"viewMatrix",A.matrixWorldInverse);const Li=Ot.map.cameraPosition;Li!==void 0&&Li.setValue(q,en.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Ot.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,yi=!0,Jn=!0)}if(Fe.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ot.setValue(q,"directionalShadowMap",Dn.state.directionalShadowMap,de),Dn.state.spotShadowMap.length>0&&Ot.setValue(q,"spotShadowMap",Dn.state.spotShadowMap,de),Dn.state.pointShadowMap.length>0&&Ot.setValue(q,"pointShadowMap",Dn.state.pointShadowMap,de)),ae.isSkinnedMesh){Ot.setOptional(q,ae,"bindMatrix"),Ot.setOptional(q,ae,"bindMatrixInverse");const Dt=ae.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ot.setValue(q,"boneTexture",Dt.boneTexture,de))}ae.isBatchedMesh&&(Ot.setOptional(q,ae,"batchingTexture"),Ot.setValue(q,"batchingTexture",ae._matricesTexture,de),Ot.setOptional(q,ae,"batchingIdTexture"),Ot.setValue(q,"batchingIdTexture",ae._indirectTexture,de),Ot.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ot.setValue(q,"batchingColorTexture",ae._colorsTexture,de));const Ei=oe.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&X.update(ae,oe,vn),(yi||Fe.receiveShadow!==ae.receiveShadow)&&(Fe.receiveShadow=ae.receiveShadow,Ot.setValue(q,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&W.environment!==null&&(Qt.envMapIntensity.value=W.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=p3()),yi){if(Ot.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Fe.needsLights&&dn(Qt,Jn),Oe&&ie.fog===!0&&Be.refreshFogUniforms(Qt,Oe),Be.refreshMaterialUniforms(Qt,ie,ye,Se,U.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Dt=Fe.lightProbeGrid;Qt.probesSH.value=Dt.texture,Qt.probesMin.value.copy(Dt.boundingBox.min),Qt.probesMax.value.copy(Dt.boundingBox.max),Qt.probesResolution.value.copy(Dt.resolution)}Bc.upload(q,ji(Fe),Qt,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bc.upload(q,ji(Fe),Qt,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(q,"center",ae.center),Ot.setValue(q,"modelViewMatrix",ae.modelViewMatrix),Ot.setValue(q,"normalMatrix",ae.normalMatrix),Ot.setValue(q,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Dt=ie.uniformsGroups;for(let Li=0,Ra=Dt.length;Li<Ra;Li++){const cs=Dt[Li];Me.update(cs,vn),Me.bind(cs,vn)}}return vn}function dn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,W,oe){const ie=re.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=W,re.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const oe=re.get(A);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,oe=0){ne=A,F=W,G=oe;let ie=null,ae=!1,Oe=!1;if(A){const Ne=re.get(A);if(Ne.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(q.FRAMEBUFFER,Ne.__webglFramebuffer),O.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest,y.viewport(O),y.scissor(Z),y.setScissorTest(Ee),_e=-1;return}else if(Ne.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ne.__hasExternalTextures)de.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Ne.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?ie=ke[W][oe]:ie=ke[W],ae=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ie=re.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[oe]:ie=ke,O.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest}else O.copy(Ke).multiplyScalar(ye).floor(),Z.copy(qt).multiplyScalar(ye).floor(),Ee=ut;if(oe!==0&&(ie=ce),y.bindFramebuffer(q.FRAMEBUFFER,ie)&&y.drawBuffers(A,ie),y.viewport(O),y.scissor(Z),y.setScissorTest(Ee),ae){const Ne=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,oe)}else if(Oe){const Ne=W;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=re.get(A.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,oe,Ne)}}else if(A!==null&&oe!==0){const Ne=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ne.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(A,W,oe,ie,ae,Oe,Ge,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){y.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const ke=A.textures[Ne],Je=ke.format,rt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne),!N.textureFormatReadable(Je)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(rt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ie&&oe>=0&&oe<=A.height-ae&&q.readPixels(W,oe,ie,ae,we.convert(Je),we.convert(rt),Oe)}finally{const ke=ne!==null?re.get(ne).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,oe,ie,ae,Oe,Ge,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(W>=0&&W<=A.width-ie&&oe>=0&&oe<=A.height-ae){y.bindFramebuffer(q.FRAMEBUFFER,Xe);const ke=A.textures[Ne],Je=ke.format,rt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne),!N.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.bufferData(q.PIXEL_PACK_BUFFER,Oe.byteLength,q.STREAM_READ),q.readPixels(W,oe,ie,ae,we.convert(Je),we.convert(rt),0);const bt=ne!==null?re.get(ne).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,bt);const Kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await zS(q,Kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Oe),q.deleteBuffer(je),q.deleteSync(Kt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(A.image.width*ie),Oe=Math.floor(A.image.height*ie),Ge=W!==null?W.x:0,Ne=W!==null?W.y:0;de.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,oe,0,0,Ge,Ne,ae,Oe),y.unbindTexture()},this.copyTextureToTexture=function(A,W,oe=null,ie=null,ae=0,Oe=0){let Ge,Ne,Xe,ke,Je,rt,je,bt,Kt;const Vt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Je=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Qt=Math.pow(2,-ae);Ge=Math.floor(Vt.width*Qt),Ne=Math.floor(Vt.height*Qt),A.isDataArrayTexture?Xe=Vt.depth:A.isData3DTexture?Xe=Math.floor(Vt.depth*Qt):Xe=1,ke=0,Je=0,rt=0}ie!==null?(je=ie.x,bt=ie.y,Kt=ie.z):(je=0,bt=0,Kt=0);const Nt=we.convert(W.format),Lt=we.convert(W.type);let Fe;W.isData3DTexture?(de.setTexture3D(W,0),Fe=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(de.setTexture2DArray(W,0),Fe=q.TEXTURE_2D_ARRAY):(de.setTexture2D(W,0),Fe=q.TEXTURE_2D),y.activeTexture(q.TEXTURE0),y.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Dn=y.getParameter(q.UNPACK_ROW_LENGTH),dt=y.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(q.UNPACK_SKIP_PIXELS),Qn=y.getParameter(q.UNPACK_SKIP_ROWS),yi=y.getParameter(q.UNPACK_SKIP_IMAGES);y.pixelStorei(q.UNPACK_ROW_LENGTH,Vt.width),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Vt.height),y.pixelStorei(q.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(q.UNPACK_SKIP_ROWS,Je),y.pixelStorei(q.UNPACK_SKIP_IMAGES,rt);const Jn=A.isDataArrayTexture||A.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Qt=re.get(A),Ei=re.get(W),Dt=re.get(Qt.__renderTarget),Li=re.get(Ei.__renderTarget);y.bindFramebuffer(q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ra=0;Ra<Xe;Ra++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ae,rt+Ra),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(W).__webglTexture,Oe,Kt+Ra)),q.blitFramebuffer(ke,Je,Ge,Ne,je,bt,Ge,Ne,q.DEPTH_BUFFER_BIT,q.NEAREST);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||re.has(A)){const Qt=re.get(A),Ei=re.get(W);y.bindFramebuffer(q.READ_FRAMEBUFFER,pe),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,J);for(let Dt=0;Dt<Xe;Dt++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.__webglTexture,ae,rt+Dt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Qt.__webglTexture,ae),Ot?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ei.__webglTexture,Oe,Kt+Dt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ei.__webglTexture,Oe),ae!==0?q.blitFramebuffer(ke,Je,Ge,Ne,je,bt,Ge,Ne,q.COLOR_BUFFER_BIT,q.NEAREST):Ot?q.copyTexSubImage3D(Fe,Oe,je,bt,Kt+Dt,ke,Je,Ge,Ne):q.copyTexSubImage2D(Fe,Oe,je,bt,ke,Je,Ge,Ne);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Fe,Oe,je,bt,Kt,Ge,Ne,Xe,Nt,Lt,Vt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Fe,Oe,je,bt,Kt,Ge,Ne,Xe,Nt,Vt.data):q.texSubImage3D(Fe,Oe,je,bt,Kt,Ge,Ne,Xe,Nt,Lt,Vt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Oe,je,bt,Ge,Ne,Nt,Lt,Vt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Oe,je,bt,Vt.width,Vt.height,Nt,Vt.data):q.texSubImage2D(q.TEXTURE_2D,Oe,je,bt,Ge,Ne,Nt,Lt,Vt);y.pixelStorei(q.UNPACK_ROW_LENGTH,Dn),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,dt),y.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(q.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(q.UNPACK_SKIP_IMAGES,yi),Oe===0&&W.generateMipmaps&&q.generateMipmap(Fe),y.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){F=0,G=0,ne=null,y.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),i.unpackColorSpace=St._getUnpackColorSpace()}}function g3(){const r=Xt.useRef(null);return Xt.useEffect(()=>{const e=r.current;if(!e)return;const i=new JS;i.fog=new qh(329481,.08);const s=new xi(60,e.clientWidth/e.clientHeight,.1,100);s.position.z=7.5;const l=new m3({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(e.clientWidth,e.clientHeight),e.appendChild(l.domElement);const u=new Zh(1.4,.4,120,16),d=new Yh({color:58879,wireframe:!0,transparent:!0,opacity:.35}),p=new qi(u,d);i.add(p);const m=new jh(.85,20,20),h=new Uh({color:16758528,size:.025,transparent:!0,opacity:.65}),S=new v_(m,h);i.add(S);const x=180,g=new li,E=new Float32Array(x*3),b=new Float32Array(x*3),C=[new yt(58879),new yt(16758528),new yt(3800852)];for(let ce=0;ce<x*3;ce+=3){E[ce]=(Math.random()-.5)*14,E[ce+1]=(Math.random()-.5)*14,E[ce+2]=(Math.random()-.5)*14;const pe=C[Math.floor(Math.random()*C.length)];b[ce]=pe.r,b[ce+1]=pe.g,b[ce+2]=pe.b}g.setAttribute("position",new Mi(E,3)),g.setAttribute("color",new Mi(b,3));const M=()=>{const pe=document.createElement("canvas");pe.width=16,pe.height=16;const J=pe.getContext("2d"),F=J.createRadialGradient(16/2,16/2,0,16/2,16/2,16/2);return F.addColorStop(0,"rgba(255, 255, 255, 1)"),F.addColorStop(1,"rgba(255, 255, 255, 0)"),J.fillStyle=F,J.fillRect(0,0,16,16),new lM(pe)},v=new Uh({size:.12,vertexColors:!0,map:M(),transparent:!0,opacity:.55,blending:Vd,depthWrite:!1}),I=new v_(g,v);i.add(I);let B=0,w=0,z=0,U=0;const P=ce=>{B=ce.clientX/window.innerWidth*2-1,w=-(ce.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",P);const T=()=>{if(!e)return;const ce=e.clientWidth,pe=e.clientHeight;s.aspect=ce/pe,s.updateProjectionMatrix(),l.setSize(ce,pe)},L=new ResizeObserver(T);L.observe(e);let Y;const V=new xM,Q=()=>{Y=requestAnimationFrame(Q);const ce=V.getElapsedTime();z=z*.95+B*.05,U=U*.95+w*.05,p.rotation.y=ce*.12,p.rotation.x=ce*.06,p.rotation.y+=z*.35,p.rotation.x+=U*.35,S.rotation.y=-ce*.18,S.rotation.x=-ce*.09,I.rotation.y=ce*.015,I.rotation.x=ce*.008,I.position.x=z*1.2,I.position.y=U*1.2,l.render(i,s)};return Q(),()=>{cancelAnimationFrame(Y),window.removeEventListener("mousemove",P),L.disconnect(),e&&l.domElement&&e.contains(l.domElement)&&e.removeChild(l.domElement),u.dispose(),d.dispose(),m.dispose(),h.dispose(),g.dispose(),v.dispose(),l.dispose()}},[]),D.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden"}})}const _3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"#00599C",children:D.jsx("path",{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"})}),v3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:[D.jsx("path",{fill:"#F7DF1E",d:"M0 0h24v24H0V0z"}),D.jsx("path",{fill:"#000",d:"M6.4 18.7c.3.5.7.9 1.4.9.6 0 1-.2 1-1.1v-6h2v6c0 1.8-1.1 2.6-2.6 2.6-1.4 0-2.3-.7-2.7-1.6l1.9-1.1zm6.1-.1c.4.6 1 1.1 2 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.3-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .6.4.8 1.2 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-1.9l1.7-1z"})]}),x3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:[D.jsx("path",{fill:"#3776AB",d:"M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.05.48 1.05 1.07 0 .59-.472 1.07-1.05 1.07-.58 0-1.05-.48-1.05-1.07 0-.59.47-1.07 1.05-1.07z"}),D.jsx("path",{fill:"#FFD43B",d:"M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.05-.48-1.05-1.07 0-.59.472-1.07 1.05-1.07.58 0 1.05.48 1.05 1.07 0 .59-.47 1.07-1.05 1.07z"})]}),S3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#A8B9CC",d:"M16.5 9.4c-.4-.5-1.1-.7-1.7-.4-.6.3-.9 1-.7 1.7.2.6.8 1 1.5 1 .2 0 .4 0 .6-.1.6-.3.9-1 .7-1.7-.1-.3-.2-.4-.4-.5zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.5 14.8c-.7 1.3-2 2.1-3.5 2.1-2.2 0-4-1.8-4-4s1.8-4 4-4c1.3 0 2.5.7 3.2 1.7l1.5-1.3c-1-1.4-2.7-2.3-4.7-2.3-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c2.2 0 4.1-1.3 5-3.2l-1.5-.9z"})}),M3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:[D.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"#61DAFB"}),D.jsx("path",{fill:"none",stroke:"#61DAFB",strokeWidth:"1",d:"M12 2c-2.2 0-4.3.5-6.1 1.5C3.7 4.8 2 7.2 2 10c0 2.8 1.7 5.2 3.9 6.5 1.8 1 3.9 1.5 6.1 1.5s4.3-.5 6.1-1.5C20.3 15.2 22 12.8 22 10c0-2.8-1.7-5.2-3.9-6.5C16.3 2.5 14.2 2 12 2z"}),D.jsx("path",{fill:"none",stroke:"#61DAFB",strokeWidth:"1",d:"M12 2c0 2.2-.5 4.3-1.5 6.1C9.2 10.3 6.8 12 4 12c-2.8 0-5.2-1.7-6.5-3.9C-3.5 6.3-4 4.2-4 2c0-2.2.5-4.3 1.5-6.1C-1.2-6.3 1.2-8 4-8c2.8 0 5.2 1.7 6.5 3.9C11.5-2.3 12-.2 12 2z"}),D.jsx("path",{fill:"none",stroke:"#61DAFB",strokeWidth:"1",d:"M12 2c0-2.2.5-4.3 1.5-6.1C14.8-6.3 17.2-8 20-8c2.8 0 5.2 1.7 6.5 3.9C27.5-2.3 28-.2 28 2c0 2.2-.5 4.3-1.5 6.1C25.2 10.3 22.8 12 20 12c-2.8 0-5.2-1.7-6.5-3.9C12.5 6.3 12 4.2 12 2z"})]}),y3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:[D.jsx("path",{fill:"#E34F26",d:"M1.5 0h10l-.9 10.1L6 12l-4.6-1.9L.5 0z"}),D.jsx("path",{fill:"#1572B6",d:"M12.5 0h10l-.9 10.1L17 12l-4.6-1.9-.9-10.1z"}),D.jsx("path",{fill:"#EBEBEB",d:"M6 4.5H3.8l.2 2H6v2H4.5l.2 2H6v2l-2.3-.9-.1-1.1H1.8l.2 2.5L6 14v-2l-1.8-.7-.2-1.8H6V7.5H4.2l-.2-2H6V4.5z"}),D.jsx("path",{fill:"#FFF",d:"M17 4.5h-2.2l.2 2H17v2h-1.5l.2 2H17v2l-2.3-.9-.1-1.1h-1.8l.2 2.5L17 14v-2l-1.8-.7-.2-1.8H17V7.5h-1.8l-.2-2H17V4.5z"})]}),E3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#06B6D4",d:"M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"})}),b3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#339933",d:"M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22h-.96c-.12 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76l-2.05-1.18c-.07-.04-.11-.11-.11-.19V7.71c0-.08.04-.15.11-.19l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.11.11.19v8.59c0 .08-.04.15-.11.19l-7.44 4.29c-.06.04-.16.04-.22 0l-1.9-1.12c-.06-.03-.12-.04-.18-.01-.5.28-.6.32-1.07.48-.12.04-.29.1.07.29l2.48 1.47c.24.14.5.2.78.2.27 0 .54-.07.77-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z"})}),T3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#F05032",d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.428 1.9l2.658 2.66c.645-.23 1.387-.087 1.9.428.717.718.717 1.88 0 2.597-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"})}),A3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#FF6C37",d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268z"})}),R3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#4479A1",d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"})}),C3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:D.jsx("path",{fill:"#47A248",d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"})}),w3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"currentColor",children:D.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 16.5l-5.6-7.3v7.3H9.1V7.7h1.6l5.6 7.3V7.7h1.6v10.8h-1.57z"})}),D3=({size:r=24})=>D.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"#007ACC",children:D.jsx("path",{d:"M23.985 6.809a.575.575 0 00-.317-.457L18.57.857a.574.574 0 00-.737.195l-7.79 9.6-4.52-3.41a.578.578 0 00-.774.095L.198 12.875a.575.575 0 000 .723l4.55 5.538a.576.576 0 00.774.095l4.52-3.41 7.79 9.6a.574.574 0 00.737.195l5.098-5.495a.578.578 0 00.317-.572V7.381c.004-.202-.075-.395-.231-.522v-.05zM17.83 12l-7.73 5.83v-11.66L17.83 12z"})}),U3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"#2496ED",children:[D.jsx("path",{d:"M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .101.084.186.186.186zm-2.95.003h2.118c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.935 0h2.119c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.937 0h2.12c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.941 0h2.119c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186H2.22c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm2.941-2.941h2.12c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.935 0h2.118c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.935-2.938h2.118c.102 0 .186-.084.186-.186V2.897c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm18.326 2.202c-.366-.549-.893-.997-1.579-1.258a1.27 1.27 0 00-.186-.062c-.227-.061-.464-.092-.705-.092-.258 0-.518.037-.775.109l-.18.055a6.495 6.495 0 00-.77.301c-.426.2-.828.468-1.196.793v3.743c0 .243.084.453.253.628.169.176.379.263.63.263h2.385c.613-.01 1.157-.282 1.57-.791.411-.512.617-1.127.617-1.802.003-.668-.205-1.282-.619-1.888z"}),D.jsx("path",{d:"M23.82 13.675c-.201-.274-.469-.475-.805-.605a5.555 5.555 0 00-.518-.15c-.482-.109-.982-.164-1.486-.164h-3.411v-1.637H2.22c-.628 0-1.139.511-1.139 1.139v2.119c0 5.482 4.456 9.938 9.938 9.938h2.119c5.482 0 9.938-4.456 9.938-9.938v-2.119c.003-.263-.075-.515-.224-.724v-.058z"})]}),N3=({size:r=24})=>D.jsxs("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,children:[D.jsx("circle",{cx:"12",cy:"12",r:"5",fill:"#008CC1"}),D.jsx("circle",{cx:"5",cy:"5",r:"2.5",fill:"#008CC1"}),D.jsx("circle",{cx:"19",cy:"5",r:"2.5",fill:"#008CC1"}),D.jsx("circle",{cx:"12",cy:"19",r:"2.5",fill:"#008CC1"}),D.jsx("line",{x1:"5",y1:"5",x2:"12",y2:"12",stroke:"#008CC1",strokeWidth:"2"}),D.jsx("line",{x1:"19",y1:"5",x2:"12",y2:"12",stroke:"#008CC1",strokeWidth:"2"}),D.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"12",stroke:"#008CC1",strokeWidth:"2"})]}),L3=[{title:"Campus-Sphere",description:"A Web app to manage events where you can manage college events like sports, cultural events and more via separate invitation code for members and participants.",tech:["React","Node.js","MongoDB","Redis","Web-Socket","Google Auth"],link:"https://campus-sphere-liard.vercel.app/"}],O3=[{cat:"Languages",color:"#00e5ff",shadow:"rgba(0,229,255,0.4)",items:[{name:"C++",emoji:D.jsx(_3,{size:18})},{name:"JavaScript",emoji:D.jsx(v3,{size:18})},{name:"Python",emoji:D.jsx(x3,{size:18})},{name:"C",emoji:D.jsx(S3,{size:18})}]},{cat:"Frontend",color:"#ffb700",shadow:"rgba(255,183,0,0.4)",items:[{name:"React.js",emoji:D.jsx(M3,{size:18})},{name:"Next.js",emoji:D.jsx(w3,{size:18})},{name:"HTML",emoji:D.jsx(y3,{size:18})},{name:"TailwindCSS & CSS",emoji:D.jsx(E3,{size:18})}]},{cat:"Backend & Tools",color:"#39ff14",shadow:"rgba(57,255,20,0.4)",items:[{name:"Node.js",emoji:D.jsx(b3,{size:18})},{name:"Git",emoji:D.jsx(T3,{size:18})},{name:"Postman",emoji:D.jsx(A3,{size:18})},{name:"VS Code",emoji:D.jsx(D3,{size:18})},{name:"Docker",emoji:D.jsx(U3,{size:18})}]},{cat:"Databases",color:"#39ff14",shadow:"rgba(57,255,20,0.4)",items:[{name:"MySQL",emoji:D.jsx(R3,{size:18})},{name:"MongoDB",emoji:D.jsx(C3,{size:18})},{name:"AuraDB",emoji:D.jsx(N3,{size:18})}]}];function ko(r=.15){const e=Xt.useRef(null),[i,s]=Xt.useState(!1);return Xt.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(s(!0),l.disconnect())},{threshold:r});return e.current&&l.observe(e.current),()=>l.disconnect()},[r]),[e,i]}function P3({level:r,color:e}){const[i,s]=ko(.2);return D.jsx("div",{ref:i,className:"skill-bar-track",children:D.jsx("div",{className:`skill-bar-fill${s?" animate":""}`,style:{"--fill-width":`${r}`,"--bar-color":e}})})}function z3(){const[r,e]=Xt.useState(!1),[i,s]=Xt.useState(!1);Xt.useEffect(()=>{const b=()=>s(window.scrollY>20);return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const l=b=>{e(!1),document.querySelector(b)?.scrollIntoView({behavior:"smooth"})},u=[{href:"#hero",label:"Home"},{href:"#about",label:"About"},{href:"#projects",label:"Projects"},{href:"#skills",label:"Skills"},{href:"#profile",label:"Profile"},{href:"#contact",label:"Contact"}],[d,p]=ko(.1),[m,h]=ko(.1),[S,x]=ko(.1),[g,E]=ko(.1);return D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"mesh-bg"}),D.jsx(g3,{}),D.jsxs("nav",{className:i?"scrolled":"",children:[D.jsx("div",{className:"nav-logo",children:"SK"}),D.jsx("ul",{className:"nav-links",children:u.map(({href:b,label:C})=>D.jsx("li",{children:D.jsx("a",{href:b,onClick:M=>{M.preventDefault(),l(b)},children:C})},b))}),D.jsx("button",{className:"menu-btn",onClick:()=>e(!r),"aria-label":r?"Close menu":"Open menu","aria-expanded":r,children:r?D.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:D.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}):D.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:D.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})})]}),r&&D.jsx("div",{className:"mobile-nav",children:u.map(({href:b,label:C})=>D.jsx("a",{href:b,onClick:M=>{M.preventDefault(),l(b)},children:C},b))}),D.jsxs("section",{id:"hero",ref:d,children:[D.jsxs("div",{className:`hero${p?" section-visible":""}`,children:[D.jsxs("div",{className:"hero-inner",children:[D.jsxs("div",{className:"hero-badge",children:[D.jsx("span",{className:"badge-dot"}),"Available for opportunities"]}),D.jsxs("h1",{className:"hero-title",children:["Suraj",D.jsx("br",{}),D.jsx("span",{className:"line-accent",children:"Kumar."})]}),D.jsxs("p",{className:"hero-sub",children:["Engineering student at the",D.jsx("strong",{children:"Indian Institute of Information Technology Pune"}),", driven by curiosity and powered by code. I thrive on solving challenging problems, optimizing systems, and continuously pushing my limits.",D.jsx("br",{}),D.jsx("strong",{children:"Always learning. Always building."})]}),D.jsxs("div",{className:"hero-ctas",children:[D.jsxs("a",{href:"#projects",className:"btn-primary",onClick:b=>{b.preventDefault(),l("#projects")},children:["View Work",D.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:D.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),D.jsx("a",{href:"#contact",className:"btn-ghost",onClick:b=>{b.preventDefault(),l("#contact")},children:"Get in touch"})]})]}),D.jsx("div",{className:"hero-image-container",children:D.jsx("div",{className:"hero-image-wrapper",children:D.jsx("img",{src:"/portfolio/profile.png",alt:"Suraj Kumar"})})})]}),D.jsxs("div",{className:"hero-scroll",children:[D.jsx("div",{className:"scroll-line"}),D.jsx("span",{children:"Scroll"})]})]}),D.jsx("div",{className:"section-divider"}),D.jsx("section",{id:"about",ref:m,children:D.jsxs("div",{className:`section-wrapper${h?" section-visible":""}`,children:[D.jsx("div",{className:"section-label",children:"About"}),D.jsxs("h2",{className:"section-title",children:["Who I am",D.jsx("br",{}),"& what I do."]}),D.jsxs("div",{className:"about-grid",children:[D.jsxs("div",{className:"about-text",children:[D.jsxs("p",{children:["I'm a ",D.jsx("strong",{children:"Second-year Engineering student"})," at IIIT Pune, passionate about the intersection of competitive programming and full-stack development. I believe that strong algorithmic foundations make better engineers."]}),D.jsxs("p",{children:["My journey started with competitive programming on Codeforces and LeetCode, where I developed sharp problem-solving instincts. That same rigour now drives how I architect software — ",D.jsx("strong",{children:"efficient, scalable, and clean."})]}),D.jsx("p",{children:"Outside of code, I'm exploring Backend Development. I'm actively looking for internships and collaborative projects where I can grow and contribute meaningfully."})]}),D.jsxs("div",{className:"stat-box",children:[D.jsx("div",{className:"stat-num",children:"800+"}),D.jsx("div",{className:"stat-label",children:"Problems Solved on all Platforms"})]})]})]})}),D.jsx("div",{className:"section-divider"}),D.jsx("section",{id:"projects",ref:S,children:D.jsxs("div",{className:`section-wrapper${x?" section-visible":""}`,children:[D.jsx("div",{className:"section-label",children:"Work"}),D.jsxs("h2",{className:"section-title",children:["Selected",D.jsx("br",{}),"Projects."]}),D.jsx("div",{className:"projects-grid",children:L3.map((b,C)=>D.jsxs(Ds,{className:"project-card",style:{animationDelay:`${C*.12}s`},children:[D.jsxs("div",{className:"project-num",children:["0",C+1]}),D.jsx("div",{className:"project-title",children:b.title}),D.jsx("div",{className:"project-desc",children:b.description}),D.jsx("div",{className:"project-tags",children:b.tech.map(M=>D.jsx("span",{className:"tag",children:M},M))}),D.jsxs("a",{href:b.link,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:["View Project",D.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:D.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]},b.title))})]})}),D.jsx("div",{className:"section-divider"}),D.jsxs("section",{id:"skills",className:"skills-section",ref:g,children:[D.jsx("div",{className:"skills-ticker-wrap",children:D.jsx("div",{className:"skills-ticker",children:[...Array(3)].flatMap(()=>["C++","C","React","Node.js","MongoDB","Python","Git","Data Structures & Algorithms","JavaScript","Linux"].map(b=>D.jsxs("span",{className:"ticker-item",children:[D.jsx("span",{className:"ticker-dot"}),b]},`${b}-${Math.random()}`)))})}),D.jsxs("div",{className:`skills-inner${E?" section-visible":""}`,children:[D.jsxs("div",{className:"skills-header",children:[D.jsxs("div",{children:[D.jsx("div",{className:"section-label",children:"Expertise"}),D.jsxs("h2",{className:"section-title",style:{marginBottom:0},children:["Skills &",D.jsx("br",{}),"Stack."]})]}),D.jsx("p",{className:"skills-subtitle",children:"Tools and technologies I use to bring ideas to life — from competitive algorithms to full-stack products."})]}),D.jsx("div",{className:"skills-categories",children:O3.map(b=>D.jsxs(Ds,{className:"skill-category",style:{"--cat-color":b.color,"--cat-shadow":b.shadow},options:{maxTilt:4},children:[D.jsxs("div",{className:"cat-header",children:[D.jsx("span",{className:"cat-indicator"}),D.jsx("span",{className:"cat-label",children:b.cat}),D.jsxs("span",{className:"cat-count",children:[b.items.length," skills"]})]}),D.jsx("div",{className:"cat-skills",children:b.items.map(C=>D.jsxs("div",{className:"skill-item",style:{"--cat-shadow":b.shadow},children:[D.jsxs("div",{className:"skill-item-top",children:[D.jsx("span",{className:"skill-emoji",children:C.emoji}),D.jsx("span",{className:"skill-name",children:C.name})]}),D.jsxs("div",{className:"skill-bar-wrapper",children:[D.jsx(P3,{level:C.level,color:b.color}),D.jsx("div",{className:"skill-level-label",children:C.level})]})]},C.name))})]},b.cat))})]}),D.jsx("div",{className:"skills-ticker-wrap skills-ticker-wrap--bottom",children:D.jsx("div",{className:"skills-ticker skills-ticker--reverse",children:[...Array(3)].flatMap(()=>["Problem Solving","REST APIs","Competitive Programming","Data Structure & Algorithm","Full Stack Web Development"].map(b=>D.jsxs("span",{className:"ticker-item",children:[D.jsx("span",{className:"ticker-dot"}),b]},`${b}-${Math.random()}`)))})})]}),D.jsx("div",{className:"section-divider"}),D.jsx("section",{id:"profile",children:D.jsx(tS,{})}),D.jsx("div",{className:"section-divider"}),D.jsx("section",{id:"contact",className:"contact-section",children:D.jsxs("div",{className:"contact-container",children:[D.jsxs("div",{className:"contact-header",children:[D.jsx("div",{className:"section-label",children:"Get In Touch"}),D.jsxs("h2",{className:"section-title",children:["Let's Work",D.jsx("br",{}),"Together."]}),D.jsx("p",{className:"contact-description",children:"I'm currently looking for internship opportunities and exciting projects to work on. Whether you want to discuss a project, ask a question, or just say hi — feel free to reach out!"})]}),D.jsxs("div",{className:"contact-grid",children:[D.jsxs(Ds,{as:"a",href:"mailto:skumar919810@gmail.com",className:"contact-item contact-item-email",children:[D.jsx("div",{className:"contact-item-icon",children:D.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[D.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),D.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),D.jsxs("div",{className:"contact-item-content",children:[D.jsx("div",{className:"contact-item-label",children:"Email"}),D.jsx("div",{className:"contact-item-value",children:"skumar919810@gmail.com"})]})]}),D.jsxs(Ds,{as:"a",href:"tel:+918340316362",className:"contact-item contact-item-phone",children:[D.jsx("div",{className:"contact-item-icon",children:D.jsx(Q1,{size:24})}),D.jsxs("div",{className:"contact-item-content",children:[D.jsx("div",{className:"contact-item-label",children:"Phone"}),D.jsx("div",{className:"contact-item-value",children:"+91 8340316362"})]})]}),D.jsxs(Ds,{as:"a",href:"https://github.com/Surajshivam-123",target:"_blank",rel:"noopener noreferrer",className:"contact-item contact-item-github",children:[D.jsx("div",{className:"contact-item-icon",children:D.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),D.jsxs("div",{className:"contact-item-content",children:[D.jsx("div",{className:"contact-item-label",children:"GitHub"}),D.jsx("div",{className:"contact-item-value",children:"@Surajshivam-123"})]})]}),D.jsxs(Ds,{as:"a",href:"https://www.linkedin.com/in/suraj-kumar-79522b324",target:"_blank",rel:"noopener noreferrer",className:"contact-item contact-item-linkedin",children:[D.jsx("div",{className:"contact-item-icon",children:D.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),D.jsxs("div",{className:"contact-item-content",children:[D.jsx("div",{className:"contact-item-label",children:"LinkedIn"}),D.jsx("div",{className:"contact-item-value",children:"Suraj Kumar"})]})]})]}),D.jsxs("div",{className:"contact-cta",children:[D.jsx("p",{children:"Open to internships, freelance projects, and collaborations"}),D.jsxs("a",{href:"mailto:skumar919810@gmail.com",className:"btn-primary",children:["Send me a message",D.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:D.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})}),D.jsxs("footer",{children:[D.jsx("span",{className:"footer-brand",children:"Suraj Kumar"}),D.jsx("span",{className:"footer-center",children:"IIIT Pune — Class of 2026"}),D.jsxs("span",{children:["© ",new Date().getFullYear()," — Built with React & love"]})]})]})}k1.createRoot(document.getElementById("root")).render(D.jsx(Xt.StrictMode,{children:D.jsx(z3,{})}));
