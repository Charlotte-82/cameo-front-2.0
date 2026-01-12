(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const v of d)if(v.type==="childList")for(const y of v.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function f(d){const v={};return d.integrity&&(v.integrity=d.integrity),d.referrerPolicy&&(v.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?v.credentials="include":d.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(d){if(d.ep)return;d.ep=!0;const v=f(d);fetch(d.href,v)}})();function wn(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var zn={exports:{}},u1={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D7;function C9(){if(D7)return u1;D7=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),B=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,C={};function D(b,V,J){this.props=b,this.context=V,this.refs=C,this.updater=J||q}D.prototype.isReactComponent={},D.prototype.setState=function(b,V){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,V,"setState")},D.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function E(){}E.prototype=D.prototype;function x(b,V,J){this.props=b,this.context=V,this.refs=C,this.updater=J||q}var U=x.prototype=new E;U.constructor=x,_(U,D.prototype),U.isPureReactComponent=!0;var X=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function t1(b,V,J,Z,P,h1){return J=h1.ref,{$$typeof:u,type:b,key:V,ref:J!==void 0?J:null,props:h1}}function v1(b,V){return t1(b.type,V,void 0,void 0,void 0,b.props)}function i1(b){return typeof b=="object"&&b!==null&&b.$$typeof===u}function Q(b){var V={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(J){return V[J]})}var a1=/\/+/g;function c1(b,V){return typeof b=="object"&&b!==null&&b.key!=null?Q(""+b.key):V.toString(36)}function O2(){}function Me(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(O2,O2):(b.status="pending",b.then(function(V){b.status==="pending"&&(b.status="fulfilled",b.value=V)},function(V){b.status==="pending"&&(b.status="rejected",b.reason=V)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Z1(b,V,J,Z,P){var h1=typeof b;(h1==="undefined"||h1==="boolean")&&(b=null);var r1=!1;if(b===null)r1=!0;else switch(h1){case"bigint":case"string":case"number":r1=!0;break;case"object":switch(b.$$typeof){case u:case m:r1=!0;break;case N:return r1=b._init,Z1(r1(b._payload),V,J,Z,P)}}if(r1)return P=P(b),r1=Z===""?"."+c1(b,0):Z,X(P)?(J="",r1!=null&&(J=r1.replace(a1,"$&/")+"/"),Z1(P,V,J,"",function(W2){return W2})):P!=null&&(i1(P)&&(P=v1(P,J+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(a1,"$&/")+"/")+r1)),V.push(P)),1;r1=0;var n2=Z===""?".":Z+":";if(X(b))for(var A1=0;A1<b.length;A1++)Z=b[A1],h1=n2+c1(Z,A1),r1+=Z1(Z,V,J,h1,P);else if(A1=A(b),typeof A1=="function")for(b=A1.call(b),A1=0;!(Z=b.next()).done;)Z=Z.value,h1=n2+c1(Z,A1++),r1+=Z1(Z,V,J,h1,P);else if(h1==="object"){if(typeof b.then=="function")return Z1(Me(b),V,J,Z,P);throw V=String(b),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return r1}function G(b,V,J){if(b==null)return b;var Z=[],P=0;return Z1(b,Z,"","",function(h1){return V.call(J,h1,P++)}),Z}function K(b){if(b._status===-1){var V=b._result;V=V(),V.then(function(J){(b._status===0||b._status===-1)&&(b._status=1,b._result=J)},function(J){(b._status===0||b._status===-1)&&(b._status=2,b._result=J)}),b._status===-1&&(b._status=0,b._result=V)}if(b._status===1)return b._result.default;throw b._result}var n1=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function M1(){}return u1.Children={map:G,forEach:function(b,V,J){G(b,function(){V.apply(this,arguments)},J)},count:function(b){var V=0;return G(b,function(){V++}),V},toArray:function(b){return G(b,function(V){return V})||[]},only:function(b){if(!i1(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},u1.Component=D,u1.Fragment=f,u1.Profiler=d,u1.PureComponent=x,u1.StrictMode=s,u1.Suspense=z,u1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,u1.__COMPILER_RUNTIME={__proto__:null,c:function(b){return H.H.useMemoCache(b)}},u1.cache=function(b){return function(){return b.apply(null,arguments)}},u1.cloneElement=function(b,V,J){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=_({},b.props),P=b.key,h1=void 0;if(V!=null)for(r1 in V.ref!==void 0&&(h1=void 0),V.key!==void 0&&(P=""+V.key),V)!F.call(V,r1)||r1==="key"||r1==="__self"||r1==="__source"||r1==="ref"&&V.ref===void 0||(Z[r1]=V[r1]);var r1=arguments.length-2;if(r1===1)Z.children=J;else if(1<r1){for(var n2=Array(r1),A1=0;A1<r1;A1++)n2[A1]=arguments[A1+2];Z.children=n2}return t1(b.type,P,void 0,void 0,h1,Z)},u1.createContext=function(b){return b={$$typeof:y,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:v,_context:b},b},u1.createElement=function(b,V,J){var Z,P={},h1=null;if(V!=null)for(Z in V.key!==void 0&&(h1=""+V.key),V)F.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=V[Z]);var r1=arguments.length-2;if(r1===1)P.children=J;else if(1<r1){for(var n2=Array(r1),A1=0;A1<r1;A1++)n2[A1]=arguments[A1+2];P.children=n2}if(b&&b.defaultProps)for(Z in r1=b.defaultProps,r1)P[Z]===void 0&&(P[Z]=r1[Z]);return t1(b,h1,void 0,void 0,null,P)},u1.createRef=function(){return{current:null}},u1.forwardRef=function(b){return{$$typeof:M,render:b}},u1.isValidElement=i1,u1.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:K}},u1.memo=function(b,V){return{$$typeof:h,type:b,compare:V===void 0?null:V}},u1.startTransition=function(b){var V=H.T,J={};H.T=J;try{var Z=b(),P=H.S;P!==null&&P(J,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(M1,n1)}catch(h1){n1(h1)}finally{H.T=V}},u1.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},u1.use=function(b){return H.H.use(b)},u1.useActionState=function(b,V,J){return H.H.useActionState(b,V,J)},u1.useCallback=function(b,V){return H.H.useCallback(b,V)},u1.useContext=function(b){return H.H.useContext(b)},u1.useDebugValue=function(){},u1.useDeferredValue=function(b,V){return H.H.useDeferredValue(b,V)},u1.useEffect=function(b,V,J){var Z=H.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(b,V)},u1.useId=function(){return H.H.useId()},u1.useImperativeHandle=function(b,V,J){return H.H.useImperativeHandle(b,V,J)},u1.useInsertionEffect=function(b,V){return H.H.useInsertionEffect(b,V)},u1.useLayoutEffect=function(b,V){return H.H.useLayoutEffect(b,V)},u1.useMemo=function(b,V){return H.H.useMemo(b,V)},u1.useOptimistic=function(b,V){return H.H.useOptimistic(b,V)},u1.useReducer=function(b,V,J){return H.H.useReducer(b,V,J)},u1.useRef=function(b){return H.H.useRef(b)},u1.useState=function(b){return H.H.useState(b)},u1.useSyncExternalStore=function(b,V,J){return H.H.useSyncExternalStore(b,V,J)},u1.useTransition=function(){return H.H.useTransition()},u1.version="19.1.0",u1}var C7;function Dn(){return C7||(C7=1,zn.exports=C9()),zn.exports}var g=Dn();const l=wn(g);var gn={exports:{}},w4={},yn={exports:{}},bn={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x7;function x9(){return x7||(x7=1,function(u){function m(G,K){var n1=G.length;G.push(K);e:for(;0<n1;){var M1=n1-1>>>1,b=G[M1];if(0<d(b,K))G[M1]=K,G[n1]=b,n1=M1;else break e}}function f(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var K=G[0],n1=G.pop();if(n1!==K){G[0]=n1;e:for(var M1=0,b=G.length,V=b>>>1;M1<V;){var J=2*(M1+1)-1,Z=G[J],P=J+1,h1=G[P];if(0>d(Z,n1))P<b&&0>d(h1,Z)?(G[M1]=h1,G[P]=n1,M1=P):(G[M1]=Z,G[J]=n1,M1=J);else if(P<b&&0>d(h1,n1))G[M1]=h1,G[P]=n1,M1=P;else break e}}return K}function d(G,K){var n1=G.sortIndex-K.sortIndex;return n1!==0?n1:G.id-K.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;u.unstable_now=function(){return v.now()}}else{var y=Date,M=y.now();u.unstable_now=function(){return y.now()-M}}var z=[],h=[],N=1,B=null,A=3,q=!1,_=!1,C=!1,D=!1,E=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function X(G){for(var K=f(h);K!==null;){if(K.callback===null)s(h);else if(K.startTime<=G)s(h),K.sortIndex=K.expirationTime,m(z,K);else break;K=f(h)}}function H(G){if(C=!1,X(G),!_)if(f(z)!==null)_=!0,F||(F=!0,c1());else{var K=f(h);K!==null&&Z1(H,K.startTime-G)}}var F=!1,t1=-1,v1=5,i1=-1;function Q(){return D?!0:!(u.unstable_now()-i1<v1)}function a1(){if(D=!1,F){var G=u.unstable_now();i1=G;var K=!0;try{e:{_=!1,C&&(C=!1,x(t1),t1=-1),q=!0;var n1=A;try{t:{for(X(G),B=f(z);B!==null&&!(B.expirationTime>G&&Q());){var M1=B.callback;if(typeof M1=="function"){B.callback=null,A=B.priorityLevel;var b=M1(B.expirationTime<=G);if(G=u.unstable_now(),typeof b=="function"){B.callback=b,X(G),K=!0;break t}B===f(z)&&s(z),X(G)}else s(z);B=f(z)}if(B!==null)K=!0;else{var V=f(h);V!==null&&Z1(H,V.startTime-G),K=!1}}break e}finally{B=null,A=n1,q=!1}K=void 0}}finally{K?c1():F=!1}}}var c1;if(typeof U=="function")c1=function(){U(a1)};else if(typeof MessageChannel<"u"){var O2=new MessageChannel,Me=O2.port2;O2.port1.onmessage=a1,c1=function(){Me.postMessage(null)}}else c1=function(){E(a1,0)};function Z1(G,K){t1=E(function(){G(u.unstable_now())},K)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(G){G.callback=null},u.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v1=0<G?Math.floor(1e3/G):5},u.unstable_getCurrentPriorityLevel=function(){return A},u.unstable_next=function(G){switch(A){case 1:case 2:case 3:var K=3;break;default:K=A}var n1=A;A=K;try{return G()}finally{A=n1}},u.unstable_requestPaint=function(){D=!0},u.unstable_runWithPriority=function(G,K){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var n1=A;A=G;try{return K()}finally{A=n1}},u.unstable_scheduleCallback=function(G,K,n1){var M1=u.unstable_now();switch(typeof n1=="object"&&n1!==null?(n1=n1.delay,n1=typeof n1=="number"&&0<n1?M1+n1:M1):n1=M1,G){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=n1+b,G={id:N++,callback:K,priorityLevel:G,startTime:n1,expirationTime:b,sortIndex:-1},n1>M1?(G.sortIndex=n1,m(h,G),f(z)===null&&G===f(h)&&(C?(x(t1),t1=-1):C=!0,Z1(H,n1-M1))):(G.sortIndex=b,m(z,G),_||q||(_=!0,F||(F=!0,c1()))),G},u.unstable_shouldYield=Q,u.unstable_wrapCallback=function(G){var K=A;return function(){var n1=A;A=K;try{return G.apply(this,arguments)}finally{A=n1}}}}(bn)),bn}var R7;function R9(){return R7||(R7=1,yn.exports=x9()),yn.exports}var Sn={exports:{}},$1={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _7;function _9(){if(_7)return $1;_7=1;var u=Dn();function m(z){var h="https://react.dev/errors/"+z;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)h+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+z+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(m(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function v(z,h,N){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:B==null?null:""+B,children:z,containerInfo:h,implementation:N}}var y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(z,h){if(z==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return $1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$1.createPortal=function(z,h){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(m(299));return v(z,h,null,N)},$1.flushSync=function(z){var h=y.T,N=s.p;try{if(y.T=null,s.p=2,z)return z()}finally{y.T=h,s.p=N,s.d.f()}},$1.preconnect=function(z,h){typeof z=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(z,h))},$1.prefetchDNS=function(z){typeof z=="string"&&s.d.D(z)},$1.preinit=function(z,h){if(typeof z=="string"&&h&&typeof h.as=="string"){var N=h.as,B=M(N,h.crossOrigin),A=typeof h.integrity=="string"?h.integrity:void 0,q=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;N==="style"?s.d.S(z,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:B,integrity:A,fetchPriority:q}):N==="script"&&s.d.X(z,{crossOrigin:B,integrity:A,fetchPriority:q,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},$1.preinitModule=function(z,h){if(typeof z=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var N=M(h.as,h.crossOrigin);s.d.M(z,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(z)},$1.preload=function(z,h){if(typeof z=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var N=h.as,B=M(N,h.crossOrigin);s.d.L(z,N,{crossOrigin:B,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},$1.preloadModule=function(z,h){if(typeof z=="string")if(h){var N=M(h.as,h.crossOrigin);s.d.m(z,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(z)},$1.requestFormReset=function(z){s.d.r(z)},$1.unstable_batchedUpdates=function(z,h){return z(h)},$1.useFormState=function(z,h,N){return y.H.useFormState(z,h,N)},$1.useFormStatus=function(){return y.H.useHostTransitionStatus()},$1.version="19.1.0",$1}var O7;function k7(){if(O7)return Sn.exports;O7=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),Sn.exports=_9(),Sn.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L7;function O9(){if(L7)return w4;L7=1;var u=R9(),m=Dn(),f=k7();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(v(e)!==e)throw Error(s(188))}function z(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return M(r),e;if(c===a)return M(r),t;c=c.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=c;else{for(var i=!1,o=r.child;o;){if(o===n){i=!0,n=r,a=c;break}if(o===a){i=!0,a=r,n=c;break}o=o.sibling}if(!i){for(o=c.child;o;){if(o===n){i=!0,n=c,a=r;break}if(o===a){i=!0,a=c,n=r;break}o=o.sibling}if(!i)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,B=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),U=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),t1=Symbol.for("react.memo"),v1=Symbol.for("react.lazy"),i1=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),a1=Symbol.iterator;function c1(e){return e===null||typeof e!="object"?null:(e=a1&&e[a1]||e["@@iterator"],typeof e=="function"?e:null)}var O2=Symbol.for("react.client.reference");function Me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===O2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case D:return"Profiler";case C:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case i1:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case U:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case t1:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case v1:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}var Z1=Array.isArray,G=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,n1={pending:!1,data:null,method:null,action:null},M1=[],b=-1;function V(e){return{current:e}}function J(e){0>b||(e.current=M1[b],M1[b]=null,b--)}function Z(e,t){b++,M1[b]=e.current,e.current=t}var P=V(null),h1=V(null),r1=V(null),n2=V(null);function A1(e,t){switch(Z(r1,t),Z(h1,e),Z(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?n7(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=n7(t),e=l7(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(P),Z(P,e)}function W2(){J(P),J(h1),J(r1)}function nt(e){e.memoizedState!==null&&Z(n2,e);var t=P.current,n=l7(t,e.type);t!==n&&(Z(h1,e),Z(P,n))}function L4(e){h1.current===e&&(J(P),J(h1)),n2.current===e&&(J(n2),S4._currentValue=n1)}var lt=Object.prototype.hasOwnProperty,at=u.unstable_scheduleCallback,rt=u.unstable_cancelCallback,ur=u.unstable_shouldYield,ir=u.unstable_requestPaint,w2=u.unstable_now,sr=u.unstable_getCurrentPriorityLevel,Bn=u.unstable_ImmediatePriority,qn=u.unstable_UserBlockingPriority,U4=u.unstable_NormalPriority,or=u.unstable_LowPriority,Hn=u.unstable_IdlePriority,mr=u.log,fr=u.unstable_setDisableYieldValue,x3=null,l2=null;function P2(e){if(typeof mr=="function"&&fr(e),l2&&typeof l2.setStrictMode=="function")try{l2.setStrictMode(x3,e)}catch{}}var a2=Math.clz32?Math.clz32:pr,dr=Math.log,hr=Math.LN2;function pr(e){return e>>>=0,e===0?32:31-(dr(e)/hr|0)|0}var B4=256,q4=4194304;function Ne(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function H4(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~c,a!==0?r=Ne(a):(i&=o,i!==0?r=Ne(i):n||(n=o&~e,n!==0&&(r=Ne(n))))):(o=a&~c,o!==0?r=Ne(o):i!==0?r=Ne(i):n||(n=a&~e,n!==0&&(r=Ne(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function R3(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Er(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(){var e=B4;return B4<<=1,(B4&4194048)===0&&(B4=256),e}function Gn(){var e=q4;return q4<<=1,(q4&62914560)===0&&(q4=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _3(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vr(e,t,n,a,r,c){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,R=e.hiddenUpdates;for(n=i&~n;0<n;){var j=31-a2(n),k=1<<j;o[j]=0,p[j]=-1;var O=R[j];if(O!==null)for(R[j]=null,j=0;j<O.length;j++){var L=O[j];L!==null&&(L.lane&=-536870913)}n&=~k}a!==0&&Yn(e,a,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(i&~t))}function Yn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-a2(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function kn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-a2(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vn(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:S7(e.type))}function zr(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var I2=Math.random().toString(36).slice(2),K1="__reactFiber$"+I2,W1="__reactProps$"+I2,ke="__reactContainer$"+I2,st="__reactEvents$"+I2,gr="__reactListeners$"+I2,yr="__reactHandles$"+I2,Xn="__reactResources$"+I2,O3="__reactMarker$"+I2;function ot(e){delete e[K1],delete e[W1],delete e[st],delete e[gr],delete e[yr]}function Ve(e){var t=e[K1];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ke]||n[K1]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=u7(e);e!==null;){if(n=e[K1])return n;e=u7(e)}return t}e=n,n=e.parentNode}return null}function Xe(e){if(e=e[K1]||e[ke]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function L3(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Qe(e){var t=e[Xn];return t||(t=e[Xn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function j1(e){e[O3]=!0}var Qn=new Set,Zn={};function Te(e,t){Ze(e,t),Ze(e+"Capture",t)}function Ze(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Qn.add(t[e])}var br=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kn={},Jn={};function Sr(e){return lt.call(Jn,e)?!0:lt.call(Kn,e)?!1:br.test(e)?Jn[e]=!0:(Kn[e]=!0,!1)}function j4(e,t,n){if(Sr(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function G4(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function L2(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var mt,$n;function Ke(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",$n=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+$n}var ft=!1;function dt(e,t){if(!e||ft)return"";ft=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(L){var O=L}Reflect.construct(e,[],k)}else{try{k.call()}catch(L){O=L}e.call(k.prototype)}}else{try{throw Error()}catch(L){O=L}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(L){if(L&&O&&typeof L.stack=="string")return[L.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),i=c[0],o=c[1];if(i&&o){var p=i.split(`
`),R=o.split(`
`);for(r=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(a===p.length||r===R.length)for(a=p.length-1,r=R.length-1;1<=a&&0<=r&&p[a]!==R[r];)r--;for(;1<=a&&0<=r;a--,r--)if(p[a]!==R[r]){if(a!==1||r!==1)do if(a--,r--,0>r||p[a]!==R[r]){var j=`
`+p[a].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=a&&0<=r);break}}}finally{ft=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ke(n):""}function Mr(e){switch(e.tag){case 26:case 27:case 5:return Ke(e.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return dt(e.type,!1);case 11:return dt(e.type.render,!1);case 1:return dt(e.type,!0);case 31:return Ke("Activity");default:return""}}function Fn(e){try{var t="";do t+=Mr(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function f2(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nr(e){var t=Wn(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){a=""+i,c.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Y4(e){e._valueTracker||(e._valueTracker=Nr(e))}function Pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Wn(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function k4(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tr=/[\n"\\]/g;function d2(e){return e.replace(Tr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ht(e,t,n,a,r,c,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+f2(t)):e.value!==""+f2(t)&&(e.value=""+f2(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?pt(e,i,f2(t)):n!=null?pt(e,i,f2(n)):a!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+f2(o):e.removeAttribute("name")}function In(e,t,n,a,r,c,i,o){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+f2(n):"",t=t!=null?""+f2(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function pt(e,t,n){t==="number"&&k4(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Je(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+f2(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function e6(e,t,n){if(t!=null&&(t=""+f2(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+f2(n):""}function t6(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Z1(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=f2(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function $e(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function n6(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ar.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function l6(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&n6(e,r,a)}else for(var c in t)t.hasOwnProperty(c)&&n6(e,c,t[c])}function Et(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function V4(e){return Dr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vt=null;function zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fe=null,We=null;function a6(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[W1]||null;e:switch(e=t.stateNode,t.type){case"input":if(ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+d2(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[W1]||null;if(!r)throw Error(s(90));ht(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Pn(a)}break e;case"textarea":e6(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Je(e,!!n.multiple,t,!1)}}}var gt=!1;function r6(e,t,n){if(gt)return e(t,n);gt=!0;try{var a=e(t);return a}finally{if(gt=!1,(Fe!==null||We!==null)&&(D0(),Fe&&(t=Fe,e=We,We=Fe=null,a6(t),e)))for(t=0;t<e.length;t++)a6(e[t])}}function U3(e,t){var n=e.stateNode;if(n===null)return null;var a=n[W1]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var U2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yt=!1;if(U2)try{var B3={};Object.defineProperty(B3,"passive",{get:function(){yt=!0}}),window.addEventListener("test",B3,B3),window.removeEventListener("test",B3,B3)}catch{yt=!1}var ee=null,bt=null,X4=null;function c6(){if(X4)return X4;var e,t=bt,n=t.length,a,r="value"in ee?ee.value:ee.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(a=1;a<=i&&t[n-a]===r[c-a];a++);return X4=r.slice(e,1<a?1-a:void 0)}function Q4(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Z4(){return!0}function u6(){return!1}function P1(e){function t(n,a,r,c,i){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=c,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(c):c[o]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Z4:u6,this.isPropagationStopped=u6,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Z4)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Z4)},persist:function(){},isPersistent:Z4}),t}var Ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},K4=P1(Ae),q3=N({},Ae,{view:0,detail:0}),Cr=P1(q3),St,Mt,H3,J4=N({},q3,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==H3&&(H3&&e.type==="mousemove"?(St=e.screenX-H3.screenX,Mt=e.screenY-H3.screenY):Mt=St=0,H3=e),St)},movementY:function(e){return"movementY"in e?e.movementY:Mt}}),i6=P1(J4),xr=N({},J4,{dataTransfer:0}),Rr=P1(xr),_r=N({},q3,{relatedTarget:0}),Nt=P1(_r),Or=N({},Ae,{animationName:0,elapsedTime:0,pseudoElement:0}),Lr=P1(Or),Ur=N({},Ae,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Br=P1(Ur),qr=N({},Ae,{data:0}),s6=P1(qr),Hr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gr[e])?!!t[e]:!1}function Tt(){return Yr}var kr=N({},q3,{key:function(e){if(e.key){var t=Hr[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Q4(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tt,charCode:function(e){return e.type==="keypress"?Q4(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Q4(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vr=P1(kr),Xr=N({},J4,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o6=P1(Xr),Qr=N({},q3,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tt}),Zr=P1(Qr),Kr=N({},Ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jr=P1(Kr),$r=N({},J4,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fr=P1($r),Wr=N({},Ae,{newState:0,oldState:0}),Pr=P1(Wr),Ir=[9,13,27,32],At=U2&&"CompositionEvent"in window,j3=null;U2&&"documentMode"in document&&(j3=document.documentMode);var e8=U2&&"TextEvent"in window&&!j3,m6=U2&&(!At||j3&&8<j3&&11>=j3),f6=" ",d6=!1;function h6(e,t){switch(e){case"keyup":return Ir.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p6(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pe=!1;function t8(e,t){switch(e){case"compositionend":return p6(t);case"keypress":return t.which!==32?null:(d6=!0,f6);case"textInput":return e=t.data,e===f6&&d6?null:e;default:return null}}function n8(e,t){if(Pe)return e==="compositionend"||!At&&h6(e,t)?(e=c6(),X4=bt=ee=null,Pe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return m6&&t.locale!=="ko"?null:t.data;default:return null}}var l8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E6(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l8[e.type]:t==="textarea"}function v6(e,t,n,a){Fe?We?We.push(a):We=[a]:Fe=a,t=L0(t,"onChange"),0<t.length&&(n=new K4("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var G3=null,Y3=null;function a8(e){Wa(e,0)}function $4(e){var t=L3(e);if(Pn(t))return e}function z6(e,t){if(e==="change")return t}var g6=!1;if(U2){var wt;if(U2){var Dt="oninput"in document;if(!Dt){var y6=document.createElement("div");y6.setAttribute("oninput","return;"),Dt=typeof y6.oninput=="function"}wt=Dt}else wt=!1;g6=wt&&(!document.documentMode||9<document.documentMode)}function b6(){G3&&(G3.detachEvent("onpropertychange",S6),Y3=G3=null)}function S6(e){if(e.propertyName==="value"&&$4(Y3)){var t=[];v6(t,Y3,e,zt(e)),r6(a8,t)}}function r8(e,t,n){e==="focusin"?(b6(),G3=t,Y3=n,G3.attachEvent("onpropertychange",S6)):e==="focusout"&&b6()}function c8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $4(Y3)}function u8(e,t){if(e==="click")return $4(t)}function i8(e,t){if(e==="input"||e==="change")return $4(t)}function s8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var r2=typeof Object.is=="function"?Object.is:s8;function k3(e,t){if(r2(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!lt.call(t,r)||!r2(e[r],t[r]))return!1}return!0}function M6(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function N6(e,t){var n=M6(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=M6(n)}}function T6(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?T6(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function A6(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=k4(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=k4(e.document)}return t}function Ct(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var o8=U2&&"documentMode"in document&&11>=document.documentMode,Ie=null,xt=null,V3=null,Rt=!1;function w6(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rt||Ie==null||Ie!==k4(a)||(a=Ie,"selectionStart"in a&&Ct(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),V3&&k3(V3,a)||(V3=a,a=L0(xt,"onSelect"),0<a.length&&(t=new K4("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ie)))}function we(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var e3={animationend:we("Animation","AnimationEnd"),animationiteration:we("Animation","AnimationIteration"),animationstart:we("Animation","AnimationStart"),transitionrun:we("Transition","TransitionRun"),transitionstart:we("Transition","TransitionStart"),transitioncancel:we("Transition","TransitionCancel"),transitionend:we("Transition","TransitionEnd")},_t={},D6={};U2&&(D6=document.createElement("div").style,"AnimationEvent"in window||(delete e3.animationend.animation,delete e3.animationiteration.animation,delete e3.animationstart.animation),"TransitionEvent"in window||delete e3.transitionend.transition);function De(e){if(_t[e])return _t[e];if(!e3[e])return e;var t=e3[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in D6)return _t[e]=t[n];return e}var C6=De("animationend"),x6=De("animationiteration"),R6=De("animationstart"),m8=De("transitionrun"),f8=De("transitionstart"),d8=De("transitioncancel"),_6=De("transitionend"),O6=new Map,Ot="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ot.push("scrollEnd");function b2(e,t){O6.set(e,t),Te(t,[e])}var L6=new WeakMap;function h2(e,t){if(typeof e=="object"&&e!==null){var n=L6.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fn(t)},L6.set(e,t),t)}return{value:e,source:t,stack:Fn(t)}}var p2=[],t3=0,Lt=0;function F4(){for(var e=t3,t=Lt=t3=0;t<e;){var n=p2[t];p2[t++]=null;var a=p2[t];p2[t++]=null;var r=p2[t];p2[t++]=null;var c=p2[t];if(p2[t++]=null,a!==null&&r!==null){var i=a.pending;i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r}c!==0&&U6(n,r,c)}}function W4(e,t,n,a){p2[t3++]=e,p2[t3++]=t,p2[t3++]=n,p2[t3++]=a,Lt|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ut(e,t,n,a){return W4(e,t,n,a),P4(e)}function n3(e,t){return W4(e,null,null,t),P4(e)}function U6(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,a=c.alternate,a!==null&&(a.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-a2(n),e=c.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),c):null}function P4(e){if(50<h4)throw h4=0,Y5=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var l3={};function h8(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function c2(e,t,n,a){return new h8(e,t,n,a)}function Bt(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B2(e,t){var n=e.alternate;return n===null?(n=c2(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function B6(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function I4(e,t,n,a,r,c){var i=0;if(a=e,typeof e=="function")Bt(e)&&(i=1);else if(typeof e=="string")i=E9(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case i1:return e=c2(31,n,t,r),e.elementType=i1,e.lanes=c,e;case _:return Ce(n.children,r,c,t);case C:i=8,r|=24;break;case D:return e=c2(12,n,t,r|2),e.elementType=D,e.lanes=c,e;case H:return e=c2(13,n,t,r),e.elementType=H,e.lanes=c,e;case F:return e=c2(19,n,t,r),e.elementType=F,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:case U:i=10;break e;case x:i=9;break e;case X:i=11;break e;case t1:i=14;break e;case v1:i=16,a=null;break e}i=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=c2(i,n,t,r),t.elementType=e,t.type=a,t.lanes=c,t}function Ce(e,t,n,a){return e=c2(7,e,a,t),e.lanes=n,e}function qt(e,t,n){return e=c2(6,e,null,t),e.lanes=n,e}function Ht(e,t,n){return t=c2(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a3=[],r3=0,e0=null,t0=0,E2=[],v2=0,xe=null,q2=1,H2="";function Re(e,t){a3[r3++]=t0,a3[r3++]=e0,e0=e,t0=t}function q6(e,t,n){E2[v2++]=q2,E2[v2++]=H2,E2[v2++]=xe,xe=e;var a=q2;e=H2;var r=32-a2(a)-1;a&=~(1<<r),n+=1;var c=32-a2(t)+r;if(30<c){var i=r-r%5;c=(a&(1<<i)-1).toString(32),a>>=i,r-=i,q2=1<<32-a2(t)+r|n<<r|a,H2=c+e}else q2=1<<c|n<<r|a,H2=e}function jt(e){e.return!==null&&(Re(e,1),q6(e,1,0))}function Gt(e){for(;e===e0;)e0=a3[--r3],a3[r3]=null,t0=a3[--r3],a3[r3]=null;for(;e===xe;)xe=E2[--v2],E2[v2]=null,H2=E2[--v2],E2[v2]=null,q2=E2[--v2],E2[v2]=null}var F1=null,x1=null,E1=!1,_e=null,D2=!1,Yt=Error(s(519));function Oe(e){var t=Error(s(418,""));throw Z3(h2(t,e)),Yt}function H6(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[K1]=e,t[W1]=a,n){case"dialog":f1("cancel",t),f1("close",t);break;case"iframe":case"object":case"embed":f1("load",t);break;case"video":case"audio":for(n=0;n<E4.length;n++)f1(E4[n],t);break;case"source":f1("error",t);break;case"img":case"image":case"link":f1("error",t),f1("load",t);break;case"details":f1("toggle",t);break;case"input":f1("invalid",t),In(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Y4(t);break;case"select":f1("invalid",t);break;case"textarea":f1("invalid",t),t6(t,a.value,a.defaultValue,a.children),Y4(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||t7(t.textContent,n)?(a.popover!=null&&(f1("beforetoggle",t),f1("toggle",t)),a.onScroll!=null&&f1("scroll",t),a.onScrollEnd!=null&&f1("scrollend",t),a.onClick!=null&&(t.onclick=U0),t=!0):t=!1,t||Oe(e)}function j6(e){for(F1=e.return;F1;)switch(F1.tag){case 5:case 13:D2=!1;return;case 27:case 3:D2=!0;return;default:F1=F1.return}}function X3(e){if(e!==F1)return!1;if(!E1)return j6(e),E1=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ln(e.type,e.memoizedProps)),n=!n),n&&x1&&Oe(e),j6(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){x1=M2(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}x1=null}}else t===27?(t=x1,Ee(e.type)?(e=un,un=null,x1=e):x1=t):x1=F1?M2(e.stateNode.nextSibling):null;return!0}function Q3(){x1=F1=null,E1=!1}function G6(){var e=_e;return e!==null&&(t2===null?t2=e:t2.push.apply(t2,e),_e=null),e}function Z3(e){_e===null?_e=[e]:_e.push(e)}var kt=V(null),Le=null,j2=null;function te(e,t,n){Z(kt,t._currentValue),t._currentValue=n}function G2(e){e._currentValue=kt.current,J(kt)}function Vt(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var i=r.child;c=c.firstContext;e:for(;c!==null;){var o=c;c=r;for(var p=0;p<t.length;p++)if(o.context===t[p]){c.lanes|=n,o=c.alternate,o!==null&&(o.lanes|=n),Vt(c.return,n,e),a||(i=null);break e}c=o.next}}else if(r.tag===18){if(i=r.return,i===null)throw Error(s(341));i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Vt(i,n,e),i=null}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}}function K3(e,t,n,a){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var i=r.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var o=r.type;r2(r.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(r===n2.current){if(i=r.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(S4):e=[S4])}r=r.return}e!==null&&Xt(t,e,n,a),t.flags|=262144}function n0(e){for(e=e.firstContext;e!==null;){if(!r2(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ue(e){Le=e,j2=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function J1(e){return Y6(Le,e)}function l0(e,t){return Le===null&&Ue(e),Y6(e,t)}function Y6(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},j2===null){if(e===null)throw Error(s(308));j2=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else j2=j2.next=t;return n}var p8=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},E8=u.unstable_scheduleCallback,v8=u.unstable_NormalPriority,B1={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qt(){return{controller:new p8,data:new Map,refCount:0}}function J3(e){e.refCount--,e.refCount===0&&E8(v8,function(){e.controller.abort()})}var $3=null,Zt=0,c3=0,u3=null;function z8(e,t){if($3===null){var n=$3=[];Zt=0,c3=J5(),u3={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Zt++,t.then(k6,k6),t}function k6(){if(--Zt===0&&$3!==null){u3!==null&&(u3.status="fulfilled");var e=$3;$3=null,c3=0,u3=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function g8(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var V6=G.S;G.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&z8(e,t),V6!==null&&V6(e,t)};var Be=V(null);function Kt(){var e=Be.current;return e!==null?e:T1.pooledCache}function a0(e,t){t===null?Z(Be,Be.current):Z(Be,t.pool)}function X6(){var e=Kt();return e===null?null:{parent:B1._currentValue,pool:e}}var F3=Error(s(460)),Q6=Error(s(474)),r0=Error(s(542)),Jt={then:function(){}};function Z6(e){return e=e.status,e==="fulfilled"||e==="rejected"}function c0(){}function K6(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(c0,c0),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$6(e),e;default:if(typeof t.status=="string")t.then(c0,c0);else{if(e=T1,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$6(e),e}throw W3=t,F3}}var W3=null;function J6(){if(W3===null)throw Error(s(459));var e=W3;return W3=null,e}function $6(e){if(e===F3||e===r0)throw Error(s(483))}var ne=!1;function $t(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ft(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function le(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ae(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(z1&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=P4(e),U6(e,null,n),t}return W4(e,a,t,n),P4(e)}function P3(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kn(e,n)}}function Wt(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=i:c=c.next=i,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pt=!1;function I3(){if(Pt){var e=u3;if(e!==null)throw e}}function e4(e,t,n,a){Pt=!1;var r=e.updateQueue;ne=!1;var c=r.firstBaseUpdate,i=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var p=o,R=p.next;p.next=null,i===null?c=R:i.next=R,i=p;var j=e.alternate;j!==null&&(j=j.updateQueue,o=j.lastBaseUpdate,o!==i&&(o===null?j.firstBaseUpdate=R:o.next=R,j.lastBaseUpdate=p))}if(c!==null){var k=r.baseState;i=0,j=R=p=null,o=c;do{var O=o.lane&-536870913,L=O!==o.lane;if(L?(d1&O)===O:(a&O)===O){O!==0&&O===c3&&(Pt=!0),j!==null&&(j=j.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var l1=e,I=o;O=t;var S1=n;switch(I.tag){case 1:if(l1=I.payload,typeof l1=="function"){k=l1.call(S1,k,O);break e}k=l1;break e;case 3:l1.flags=l1.flags&-65537|128;case 0:if(l1=I.payload,O=typeof l1=="function"?l1.call(S1,k,O):l1,O==null)break e;k=N({},k,O);break e;case 2:ne=!0}}O=o.callback,O!==null&&(e.flags|=64,L&&(e.flags|=8192),L=r.callbacks,L===null?r.callbacks=[O]:L.push(O))}else L={lane:O,tag:o.tag,payload:o.payload,callback:o.callback,next:null},j===null?(R=j=L,p=k):j=j.next=L,i|=O;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;L=o,o=L.next,L.next=null,r.lastBaseUpdate=L,r.shared.pending=null}}while(!0);j===null&&(p=k),r.baseState=p,r.firstBaseUpdate=R,r.lastBaseUpdate=j,c===null&&(r.shared.lanes=0),fe|=i,e.lanes=i,e.memoizedState=k}}function F6(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function W6(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)F6(n[e],t)}var i3=V(null),u0=V(0);function P6(e,t){e=K2,Z(u0,e),Z(i3,t),K2=e|t.baseLanes}function It(){Z(u0,K2),Z(i3,i3.current)}function e5(){K2=u0.current,J(i3),J(u0)}var re=0,s1=null,y1=null,L1=null,i0=!1,s3=!1,qe=!1,s0=0,t4=0,o3=null,y8=0;function _1(){throw Error(s(321))}function t5(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!r2(e[n],t[n]))return!1;return!0}function n5(e,t,n,a,r,c){return re=c,s1=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Ul:Bl,qe=!1,c=n(a,r),qe=!1,s3&&(c=el(t,n,a,r)),I6(e),c}function I6(e){G.H=p0;var t=y1!==null&&y1.next!==null;if(re=0,L1=y1=s1=null,i0=!1,t4=0,o3=null,t)throw Error(s(300));e===null||G1||(e=e.dependencies,e!==null&&n0(e)&&(G1=!0))}function el(e,t,n,a){s1=e;var r=0;do{if(s3&&(o3=null),t4=0,s3=!1,25<=r)throw Error(s(301));if(r+=1,L1=y1=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}G.H=w8,c=t(n,a)}while(s3);return c}function b8(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?n4(t):t,e=e.useState()[0],(y1!==null?y1.memoizedState:null)!==e&&(s1.flags|=1024),t}function l5(){var e=s0!==0;return s0=0,e}function a5(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function r5(e){if(i0){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}i0=!1}re=0,L1=y1=s1=null,s3=!1,t4=s0=0,o3=null}function I1(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L1===null?s1.memoizedState=L1=e:L1=L1.next=e,L1}function U1(){if(y1===null){var e=s1.alternate;e=e!==null?e.memoizedState:null}else e=y1.next;var t=L1===null?s1.memoizedState:L1.next;if(t!==null)L1=t,y1=e;else{if(e===null)throw s1.alternate===null?Error(s(467)):Error(s(310));y1=e,e={memoizedState:y1.memoizedState,baseState:y1.baseState,baseQueue:y1.baseQueue,queue:y1.queue,next:null},L1===null?s1.memoizedState=L1=e:L1=L1.next=e}return L1}function c5(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function n4(e){var t=t4;return t4+=1,o3===null&&(o3=[]),e=K6(o3,e,t),t=s1,(L1===null?t.memoizedState:L1.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Ul:Bl),e}function o0(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return n4(e);if(e.$$typeof===U)return J1(e)}throw Error(s(438,String(e)))}function u5(e){var t=null,n=s1.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=s1.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=c5(),s1.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Q;return t.index++,n}function Y2(e,t){return typeof t=="function"?t(e):t}function m0(e){var t=U1();return i5(t,y1,e)}function i5(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=e.baseQueue,c=a.pending;if(c!==null){if(r!==null){var i=r.next;r.next=c.next,c.next=i}t.baseQueue=r=c,a.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var o=i=null,p=null,R=t,j=!1;do{var k=R.lane&-536870913;if(k!==R.lane?(d1&k)===k:(re&k)===k){var O=R.revertLane;if(O===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),k===c3&&(j=!0);else if((re&O)===O){R=R.next,O===c3&&(j=!0);continue}else k={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},p===null?(o=p=k,i=c):p=p.next=k,s1.lanes|=O,fe|=O;k=R.action,qe&&n(c,k),c=R.hasEagerState?R.eagerState:n(c,k)}else O={lane:k,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},p===null?(o=p=O,i=c):p=p.next=O,s1.lanes|=k,fe|=k;R=R.next}while(R!==null&&R!==t);if(p===null?i=c:p.next=o,!r2(c,e.memoizedState)&&(G1=!0,j&&(n=u3,n!==null)))throw n;e.memoizedState=c,e.baseState=i,e.baseQueue=p,a.lastRenderedState=c}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function s5(e){var t=U1(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do c=e(c,i.action),i=i.next;while(i!==r);r2(c,t.memoizedState)||(G1=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function tl(e,t,n){var a=s1,r=U1(),c=E1;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var i=!r2((y1||r).memoizedState,n);i&&(r.memoizedState=n,G1=!0),r=r.queue;var o=al.bind(null,a,r,e);if(l4(2048,8,o,[e]),r.getSnapshot!==t||i||L1!==null&&L1.memoizedState.tag&1){if(a.flags|=2048,m3(9,f0(),ll.bind(null,a,r,n,t),null),T1===null)throw Error(s(349));c||(re&124)!==0||nl(a,t,n)}return n}function nl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=s1.updateQueue,t===null?(t=c5(),s1.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ll(e,t,n,a){t.value=n,t.getSnapshot=a,rl(t)&&cl(e)}function al(e,t,n){return n(function(){rl(t)&&cl(e)})}function rl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r2(e,n)}catch{return!0}}function cl(e){var t=n3(e,2);t!==null&&m2(t,e,2)}function o5(e){var t=I1();if(typeof e=="function"){var n=e;if(e=n(),qe){P2(!0);try{n()}finally{P2(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y2,lastRenderedState:e},t}function ul(e,t,n,a){return e.baseState=n,i5(e,y1,typeof a=="function"?a:Y2)}function S8(e,t,n,a,r){if(h0(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){c.listeners.push(i)}};G.T!==null?n(!0):c.isTransition=!1,a(c),n=t.pending,n===null?(c.next=t.pending=c,il(t,c)):(c.next=n.next,t.pending=n.next=c)}}function il(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var c=G.T,i={};G.T=i;try{var o=n(r,a),p=G.S;p!==null&&p(i,o),sl(e,t,o)}catch(R){m5(e,t,R)}finally{G.T=c}}else try{c=n(r,a),sl(e,t,c)}catch(R){m5(e,t,R)}}function sl(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ol(e,t,a)},function(a){return m5(e,t,a)}):ol(e,t,n)}function ol(e,t,n){t.status="fulfilled",t.value=n,ml(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,il(e,n)))}function m5(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,ml(t),t=t.next;while(t!==a)}e.action=null}function ml(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fl(e,t){return t}function dl(e,t){if(E1){var n=T1.formState;if(n!==null){e:{var a=s1;if(E1){if(x1){t:{for(var r=x1,c=D2;r.nodeType!==8;){if(!c){r=null;break t}if(r=M2(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){x1=M2(r.nextSibling),a=r.data==="F!";break e}}Oe(a)}a=!1}a&&(t=n[0])}}return n=I1(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:t},n.queue=a,n=_l.bind(null,s1,a),a.dispatch=n,a=o5(!1),c=E5.bind(null,s1,!1,a.queue),a=I1(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=S8.bind(null,s1,r,c,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function hl(e){var t=U1();return pl(t,y1,e)}function pl(e,t,n){if(t=i5(e,t,fl)[0],e=m0(Y2)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=n4(t)}catch(i){throw i===F3?r0:i}else a=t;t=U1();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(s1.flags|=2048,m3(9,f0(),M8.bind(null,r,n),null)),[a,c,e]}function M8(e,t){e.action=t}function El(e){var t=U1(),n=y1;if(n!==null)return pl(t,n,e);U1(),t=t.memoizedState,n=U1();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function m3(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=s1.updateQueue,t===null&&(t=c5(),s1.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function f0(){return{destroy:void 0,resource:void 0}}function vl(){return U1().memoizedState}function d0(e,t,n,a){var r=I1();a=a===void 0?null:a,s1.flags|=e,r.memoizedState=m3(1|t,f0(),n,a)}function l4(e,t,n,a){var r=U1();a=a===void 0?null:a;var c=r.memoizedState.inst;y1!==null&&a!==null&&t5(a,y1.memoizedState.deps)?r.memoizedState=m3(t,c,n,a):(s1.flags|=e,r.memoizedState=m3(1|t,c,n,a))}function zl(e,t){d0(8390656,8,e,t)}function gl(e,t){l4(2048,8,e,t)}function yl(e,t){return l4(4,2,e,t)}function bl(e,t){return l4(4,4,e,t)}function Sl(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ml(e,t,n){n=n!=null?n.concat([e]):null,l4(4,4,Sl.bind(null,t,e),n)}function f5(){}function Nl(e,t){var n=U1();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&t5(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Tl(e,t){var n=U1();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&t5(t,a[1]))return a[0];if(a=e(),qe){P2(!0);try{e()}finally{P2(!1)}}return n.memoizedState=[a,t],a}function d5(e,t,n){return n===void 0||(re&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Da(),s1.lanes|=e,fe|=e,n)}function Al(e,t,n,a){return r2(n,t)?n:i3.current!==null?(e=d5(e,n,a),r2(e,t)||(G1=!0),e):(re&42)===0?(G1=!0,e.memoizedState=n):(e=Da(),s1.lanes|=e,fe|=e,t)}function wl(e,t,n,a,r){var c=K.p;K.p=c!==0&&8>c?c:8;var i=G.T,o={};G.T=o,E5(e,!1,t,n);try{var p=r(),R=G.S;if(R!==null&&R(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=g8(p,a);a4(e,t,j,o2(e))}else a4(e,t,a,o2(e))}catch(k){a4(e,t,{then:function(){},status:"rejected",reason:k},o2())}finally{K.p=c,G.T=i}}function N8(){}function h5(e,t,n,a){if(e.tag!==5)throw Error(s(476));var r=Dl(e).queue;wl(e,r,t,n1,n===null?N8:function(){return Cl(e),n(a)})}function Dl(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:n1,baseState:n1,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y2,lastRenderedState:n1},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y2,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cl(e){var t=Dl(e).next.queue;a4(e,t,{},o2())}function p5(){return J1(S4)}function xl(){return U1().memoizedState}function Rl(){return U1().memoizedState}function T8(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=o2();e=le(n);var a=ae(t,e,n);a!==null&&(m2(a,t,n),P3(a,t,n)),t={cache:Qt()},e.payload=t;return}t=t.return}}function A8(e,t,n){var a=o2();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},h0(e)?Ol(t,n):(n=Ut(e,t,n,a),n!==null&&(m2(n,e,a),Ll(n,t,a)))}function _l(e,t,n){var a=o2();a4(e,t,n,a)}function a4(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(e))Ol(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var i=t.lastRenderedState,o=c(i,n);if(r.hasEagerState=!0,r.eagerState=o,r2(o,i))return W4(e,t,r,0),T1===null&&F4(),!1}catch{}finally{}if(n=Ut(e,t,r,a),n!==null)return m2(n,e,a),Ll(n,t,a),!0}return!1}function E5(e,t,n,a){if(a={lane:2,revertLane:J5(),action:a,hasEagerState:!1,eagerState:null,next:null},h0(e)){if(t)throw Error(s(479))}else t=Ut(e,n,a,2),t!==null&&m2(t,e,2)}function h0(e){var t=e.alternate;return e===s1||t!==null&&t===s1}function Ol(e,t){s3=i0=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ll(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kn(e,n)}}var p0={readContext:J1,use:o0,useCallback:_1,useContext:_1,useEffect:_1,useImperativeHandle:_1,useLayoutEffect:_1,useInsertionEffect:_1,useMemo:_1,useReducer:_1,useRef:_1,useState:_1,useDebugValue:_1,useDeferredValue:_1,useTransition:_1,useSyncExternalStore:_1,useId:_1,useHostTransitionStatus:_1,useFormState:_1,useActionState:_1,useOptimistic:_1,useMemoCache:_1,useCacheRefresh:_1},Ul={readContext:J1,use:o0,useCallback:function(e,t){return I1().memoizedState=[e,t===void 0?null:t],e},useContext:J1,useEffect:zl,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,d0(4194308,4,Sl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return d0(4194308,4,e,t)},useInsertionEffect:function(e,t){d0(4,2,e,t)},useMemo:function(e,t){var n=I1();t=t===void 0?null:t;var a=e();if(qe){P2(!0);try{e()}finally{P2(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=I1();if(n!==void 0){var r=n(t);if(qe){P2(!0);try{n(t)}finally{P2(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=A8.bind(null,s1,e),[a.memoizedState,e]},useRef:function(e){var t=I1();return e={current:e},t.memoizedState=e},useState:function(e){e=o5(e);var t=e.queue,n=_l.bind(null,s1,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:f5,useDeferredValue:function(e,t){var n=I1();return d5(n,e,t)},useTransition:function(){var e=o5(!1);return e=wl.bind(null,s1,e.queue,!0,!1),I1().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=s1,r=I1();if(E1){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),T1===null)throw Error(s(349));(d1&124)!==0||nl(a,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,zl(al.bind(null,a,c,e),[e]),a.flags|=2048,m3(9,f0(),ll.bind(null,a,c,n,t),null),n},useId:function(){var e=I1(),t=T1.identifierPrefix;if(E1){var n=H2,a=q2;n=(a&~(1<<32-a2(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=s0++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=y8++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:p5,useFormState:dl,useActionState:dl,useOptimistic:function(e){var t=I1();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=E5.bind(null,s1,!0,n),n.dispatch=t,[e,t]},useMemoCache:u5,useCacheRefresh:function(){return I1().memoizedState=T8.bind(null,s1)}},Bl={readContext:J1,use:o0,useCallback:Nl,useContext:J1,useEffect:gl,useImperativeHandle:Ml,useInsertionEffect:yl,useLayoutEffect:bl,useMemo:Tl,useReducer:m0,useRef:vl,useState:function(){return m0(Y2)},useDebugValue:f5,useDeferredValue:function(e,t){var n=U1();return Al(n,y1.memoizedState,e,t)},useTransition:function(){var e=m0(Y2)[0],t=U1().memoizedState;return[typeof e=="boolean"?e:n4(e),t]},useSyncExternalStore:tl,useId:xl,useHostTransitionStatus:p5,useFormState:hl,useActionState:hl,useOptimistic:function(e,t){var n=U1();return ul(n,y1,e,t)},useMemoCache:u5,useCacheRefresh:Rl},w8={readContext:J1,use:o0,useCallback:Nl,useContext:J1,useEffect:gl,useImperativeHandle:Ml,useInsertionEffect:yl,useLayoutEffect:bl,useMemo:Tl,useReducer:s5,useRef:vl,useState:function(){return s5(Y2)},useDebugValue:f5,useDeferredValue:function(e,t){var n=U1();return y1===null?d5(n,e,t):Al(n,y1.memoizedState,e,t)},useTransition:function(){var e=s5(Y2)[0],t=U1().memoizedState;return[typeof e=="boolean"?e:n4(e),t]},useSyncExternalStore:tl,useId:xl,useHostTransitionStatus:p5,useFormState:El,useActionState:El,useOptimistic:function(e,t){var n=U1();return y1!==null?ul(n,y1,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:u5,useCacheRefresh:Rl},f3=null,r4=0;function E0(e){var t=r4;return r4+=1,f3===null&&(f3=[]),K6(f3,e,t)}function c4(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function v0(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ql(e){var t=e._init;return t(e._payload)}function Hl(e){function t(T,S){if(e){var w=T.deletions;w===null?(T.deletions=[S],T.flags|=16):w.push(S)}}function n(T,S){if(!e)return null;for(;S!==null;)t(T,S),S=S.sibling;return null}function a(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function r(T,S){return T=B2(T,S),T.index=0,T.sibling=null,T}function c(T,S,w){return T.index=w,e?(w=T.alternate,w!==null?(w=w.index,w<S?(T.flags|=67108866,S):w):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function i(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function o(T,S,w,Y){return S===null||S.tag!==6?(S=qt(w,T.mode,Y),S.return=T,S):(S=r(S,w),S.return=T,S)}function p(T,S,w,Y){var $=w.type;return $===_?j(T,S,w.props.children,Y,w.key):S!==null&&(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===v1&&ql($)===S.type)?(S=r(S,w.props),c4(S,w),S.return=T,S):(S=I4(w.type,w.key,w.props,null,T.mode,Y),c4(S,w),S.return=T,S)}function R(T,S,w,Y){return S===null||S.tag!==4||S.stateNode.containerInfo!==w.containerInfo||S.stateNode.implementation!==w.implementation?(S=Ht(w,T.mode,Y),S.return=T,S):(S=r(S,w.children||[]),S.return=T,S)}function j(T,S,w,Y,$){return S===null||S.tag!==7?(S=Ce(w,T.mode,Y,$),S.return=T,S):(S=r(S,w),S.return=T,S)}function k(T,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=qt(""+S,T.mode,w),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case A:return w=I4(S.type,S.key,S.props,null,T.mode,w),c4(w,S),w.return=T,w;case q:return S=Ht(S,T.mode,w),S.return=T,S;case v1:var Y=S._init;return S=Y(S._payload),k(T,S,w)}if(Z1(S)||c1(S))return S=Ce(S,T.mode,w,null),S.return=T,S;if(typeof S.then=="function")return k(T,E0(S),w);if(S.$$typeof===U)return k(T,l0(T,S),w);v0(T,S)}return null}function O(T,S,w,Y){var $=S!==null?S.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return $!==null?null:o(T,S,""+w,Y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case A:return w.key===$?p(T,S,w,Y):null;case q:return w.key===$?R(T,S,w,Y):null;case v1:return $=w._init,w=$(w._payload),O(T,S,w,Y)}if(Z1(w)||c1(w))return $!==null?null:j(T,S,w,Y,null);if(typeof w.then=="function")return O(T,S,E0(w),Y);if(w.$$typeof===U)return O(T,S,l0(T,w),Y);v0(T,w)}return null}function L(T,S,w,Y,$){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return T=T.get(w)||null,o(S,T,""+Y,$);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case A:return T=T.get(Y.key===null?w:Y.key)||null,p(S,T,Y,$);case q:return T=T.get(Y.key===null?w:Y.key)||null,R(S,T,Y,$);case v1:var o1=Y._init;return Y=o1(Y._payload),L(T,S,w,Y,$)}if(Z1(Y)||c1(Y))return T=T.get(w)||null,j(S,T,Y,$,null);if(typeof Y.then=="function")return L(T,S,w,E0(Y),$);if(Y.$$typeof===U)return L(T,S,w,l0(S,Y),$);v0(S,Y)}return null}function l1(T,S,w,Y){for(var $=null,o1=null,W=S,e1=S=0,k1=null;W!==null&&e1<w.length;e1++){W.index>e1?(k1=W,W=null):k1=W.sibling;var p1=O(T,W,w[e1],Y);if(p1===null){W===null&&(W=k1);break}e&&W&&p1.alternate===null&&t(T,W),S=c(p1,S,e1),o1===null?$=p1:o1.sibling=p1,o1=p1,W=k1}if(e1===w.length)return n(T,W),E1&&Re(T,e1),$;if(W===null){for(;e1<w.length;e1++)W=k(T,w[e1],Y),W!==null&&(S=c(W,S,e1),o1===null?$=W:o1.sibling=W,o1=W);return E1&&Re(T,e1),$}for(W=a(W);e1<w.length;e1++)k1=L(W,T,e1,w[e1],Y),k1!==null&&(e&&k1.alternate!==null&&W.delete(k1.key===null?e1:k1.key),S=c(k1,S,e1),o1===null?$=k1:o1.sibling=k1,o1=k1);return e&&W.forEach(function(be){return t(T,be)}),E1&&Re(T,e1),$}function I(T,S,w,Y){if(w==null)throw Error(s(151));for(var $=null,o1=null,W=S,e1=S=0,k1=null,p1=w.next();W!==null&&!p1.done;e1++,p1=w.next()){W.index>e1?(k1=W,W=null):k1=W.sibling;var be=O(T,W,p1.value,Y);if(be===null){W===null&&(W=k1);break}e&&W&&be.alternate===null&&t(T,W),S=c(be,S,e1),o1===null?$=be:o1.sibling=be,o1=be,W=k1}if(p1.done)return n(T,W),E1&&Re(T,e1),$;if(W===null){for(;!p1.done;e1++,p1=w.next())p1=k(T,p1.value,Y),p1!==null&&(S=c(p1,S,e1),o1===null?$=p1:o1.sibling=p1,o1=p1);return E1&&Re(T,e1),$}for(W=a(W);!p1.done;e1++,p1=w.next())p1=L(W,T,e1,p1.value,Y),p1!==null&&(e&&p1.alternate!==null&&W.delete(p1.key===null?e1:p1.key),S=c(p1,S,e1),o1===null?$=p1:o1.sibling=p1,o1=p1);return e&&W.forEach(function(D9){return t(T,D9)}),E1&&Re(T,e1),$}function S1(T,S,w,Y){if(typeof w=="object"&&w!==null&&w.type===_&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case A:e:{for(var $=w.key;S!==null;){if(S.key===$){if($=w.type,$===_){if(S.tag===7){n(T,S.sibling),Y=r(S,w.props.children),Y.return=T,T=Y;break e}}else if(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===v1&&ql($)===S.type){n(T,S.sibling),Y=r(S,w.props),c4(Y,w),Y.return=T,T=Y;break e}n(T,S);break}else t(T,S);S=S.sibling}w.type===_?(Y=Ce(w.props.children,T.mode,Y,w.key),Y.return=T,T=Y):(Y=I4(w.type,w.key,w.props,null,T.mode,Y),c4(Y,w),Y.return=T,T=Y)}return i(T);case q:e:{for($=w.key;S!==null;){if(S.key===$)if(S.tag===4&&S.stateNode.containerInfo===w.containerInfo&&S.stateNode.implementation===w.implementation){n(T,S.sibling),Y=r(S,w.children||[]),Y.return=T,T=Y;break e}else{n(T,S);break}else t(T,S);S=S.sibling}Y=Ht(w,T.mode,Y),Y.return=T,T=Y}return i(T);case v1:return $=w._init,w=$(w._payload),S1(T,S,w,Y)}if(Z1(w))return l1(T,S,w,Y);if(c1(w)){if($=c1(w),typeof $!="function")throw Error(s(150));return w=$.call(w),I(T,S,w,Y)}if(typeof w.then=="function")return S1(T,S,E0(w),Y);if(w.$$typeof===U)return S1(T,S,l0(T,w),Y);v0(T,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,S!==null&&S.tag===6?(n(T,S.sibling),Y=r(S,w),Y.return=T,T=Y):(n(T,S),Y=qt(w,T.mode,Y),Y.return=T,T=Y),i(T)):n(T,S)}return function(T,S,w,Y){try{r4=0;var $=S1(T,S,w,Y);return f3=null,$}catch(W){if(W===F3||W===r0)throw W;var o1=c2(29,W,null,T.mode);return o1.lanes=Y,o1.return=T,o1}finally{}}}var d3=Hl(!0),jl=Hl(!1),z2=V(null),C2=null;function ce(e){var t=e.alternate;Z(q1,q1.current&1),Z(z2,e),C2===null&&(t===null||i3.current!==null||t.memoizedState!==null)&&(C2=e)}function Gl(e){if(e.tag===22){if(Z(q1,q1.current),Z(z2,e),C2===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(C2=e)}}else ue()}function ue(){Z(q1,q1.current),Z(z2,z2.current)}function k2(e){J(z2),C2===e&&(C2=null),J(q1)}var q1=V(0);function z0(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||cn(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function v5(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var z5={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=o2(),r=le(a);r.payload=t,n!=null&&(r.callback=n),t=ae(e,r,a),t!==null&&(m2(t,e,a),P3(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=o2(),r=le(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ae(e,r,a),t!==null&&(m2(t,e,a),P3(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=o2(),a=le(n);a.tag=2,t!=null&&(a.callback=t),t=ae(e,a,n),t!==null&&(m2(t,e,n),P3(t,e,n))}};function Yl(e,t,n,a,r,c,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,i):t.prototype&&t.prototype.isPureReactComponent?!k3(n,a)||!k3(r,c):!0}function kl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&z5.enqueueReplaceState(t,t.state,null)}function He(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var g0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vl(e){g0(e)}function Xl(e){console.error(e)}function Ql(e){g0(e)}function y0(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Zl(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function g5(e,t,n){return n=le(n),n.tag=3,n.payload={element:null},n.callback=function(){y0(e,t)},n}function Kl(e){return e=le(e),e.tag=3,e}function Jl(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=a.value;e.payload=function(){return r(c)},e.callback=function(){Zl(t,n,a)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Zl(t,n,a),typeof r!="function"&&(de===null?de=new Set([this]):de.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function D8(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&K3(t,n,r,!0),n=z2.current,n!==null){switch(n.tag){case 13:return C2===null?V5():n.alternate===null&&R1===0&&(R1=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Jt?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Q5(e,a,r)),!1;case 22:return n.flags|=65536,a===Jt?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Q5(e,a,r)),!1}throw Error(s(435,n.tag))}return Q5(e,a,r),V5(),!1}if(E1)return t=z2.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Yt&&(e=Error(s(422),{cause:a}),Z3(h2(e,n)))):(a!==Yt&&(t=Error(s(423),{cause:a}),Z3(h2(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=h2(a,n),r=g5(e.stateNode,a,r),Wt(e,r),R1!==4&&(R1=2)),!1;var c=Error(s(520),{cause:a});if(c=h2(c,n),d4===null?d4=[c]:d4.push(c),R1!==4&&(R1=2),t===null)return!0;a=h2(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=g5(n.stateNode,a,e),Wt(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(de===null||!de.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Kl(r),Jl(r,e,n,a),Wt(n,r),!1}n=n.return}while(n!==null);return!1}var $l=Error(s(461)),G1=!1;function V1(e,t,n,a){t.child=e===null?jl(t,null,n,a):d3(t,e.child,n,a)}function Fl(e,t,n,a,r){n=n.render;var c=t.ref;if("ref"in a){var i={};for(var o in a)o!=="ref"&&(i[o]=a[o])}else i=a;return Ue(t),a=n5(e,t,n,i,c,r),o=l5(),e!==null&&!G1?(a5(e,t,r),V2(e,t,r)):(E1&&o&&jt(t),t.flags|=1,V1(e,t,a,r),t.child)}function Wl(e,t,n,a,r){if(e===null){var c=n.type;return typeof c=="function"&&!Bt(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Pl(e,t,c,a,r)):(e=I4(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!w5(e,r)){var i=c.memoizedProps;if(n=n.compare,n=n!==null?n:k3,n(i,a)&&e.ref===t.ref)return V2(e,t,r)}return t.flags|=1,e=B2(c,a),e.ref=t.ref,e.return=t,t.child=e}function Pl(e,t,n,a,r){if(e!==null){var c=e.memoizedProps;if(k3(c,a)&&e.ref===t.ref)if(G1=!1,t.pendingProps=a=c,w5(e,r))(e.flags&131072)!==0&&(G1=!0);else return t.lanes=e.lanes,V2(e,t,r)}return y5(e,t,n,a,r)}function Il(e,t,n){var a=t.pendingProps,r=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;t.childLanes=c&~a}else t.childLanes=0,t.child=null;return ea(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&a0(t,c!==null?c.cachePool:null),c!==null?P6(t,c):It(),Gl(t);else return t.lanes=t.childLanes=536870912,ea(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(a0(t,c.cachePool),P6(t,c),ue(),t.memoizedState=null):(e!==null&&a0(t,null),It(),ue());return V1(e,t,r,n),t.child}function ea(e,t,n,a){var r=Kt();return r=r===null?null:{parent:B1._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&a0(t,null),It(),Gl(t),e!==null&&K3(e,t,a,!0),null}function b0(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function y5(e,t,n,a,r){return Ue(t),n=n5(e,t,n,a,void 0,r),a=l5(),e!==null&&!G1?(a5(e,t,r),V2(e,t,r)):(E1&&a&&jt(t),t.flags|=1,V1(e,t,n,r),t.child)}function ta(e,t,n,a,r,c){return Ue(t),t.updateQueue=null,n=el(t,a,n,r),I6(e),a=l5(),e!==null&&!G1?(a5(e,t,c),V2(e,t,c)):(E1&&a&&jt(t),t.flags|=1,V1(e,t,n,c),t.child)}function na(e,t,n,a,r){if(Ue(t),t.stateNode===null){var c=l3,i=n.contextType;typeof i=="object"&&i!==null&&(c=J1(i)),c=new n(a,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=z5,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=a,c.state=t.memoizedState,c.refs={},$t(t),i=n.contextType,c.context=typeof i=="object"&&i!==null?J1(i):l3,c.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(v5(t,n,i,a),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&z5.enqueueReplaceState(c,c.state,null),e4(t,a,c,r),I3(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){c=t.stateNode;var o=t.memoizedProps,p=He(n,o);c.props=p;var R=c.context,j=n.contextType;i=l3,typeof j=="object"&&j!==null&&(i=J1(j));var k=n.getDerivedStateFromProps;j=typeof k=="function"||typeof c.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,j||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(o||R!==i)&&kl(t,c,a,i),ne=!1;var O=t.memoizedState;c.state=O,e4(t,a,c,r),I3(),R=t.memoizedState,o||O!==R||ne?(typeof k=="function"&&(v5(t,n,k,a),R=t.memoizedState),(p=ne||Yl(t,n,p,a,O,R,i))?(j||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),c.props=a,c.state=R,c.context=i,a=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{c=t.stateNode,Ft(e,t),i=t.memoizedProps,j=He(n,i),c.props=j,k=t.pendingProps,O=c.context,R=n.contextType,p=l3,typeof R=="object"&&R!==null&&(p=J1(R)),o=n.getDerivedStateFromProps,(R=typeof o=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(i!==k||O!==p)&&kl(t,c,a,p),ne=!1,O=t.memoizedState,c.state=O,e4(t,a,c,r),I3();var L=t.memoizedState;i!==k||O!==L||ne||e!==null&&e.dependencies!==null&&n0(e.dependencies)?(typeof o=="function"&&(v5(t,n,o,a),L=t.memoizedState),(j=ne||Yl(t,n,j,a,O,L,p)||e!==null&&e.dependencies!==null&&n0(e.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,L,p),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,L,p)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||i===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=L),c.props=a,c.state=L,c.context=p,a=j):(typeof c.componentDidUpdate!="function"||i===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return c=a,b0(e,t),a=(t.flags&128)!==0,c||a?(c=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&a?(t.child=d3(t,e.child,null,r),t.child=d3(t,null,n,r)):V1(e,t,n,r),t.memoizedState=c.state,e=t.child):e=V2(e,t,r),e}function la(e,t,n,a){return Q3(),t.flags|=256,V1(e,t,n,a),t.child}var b5={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function S5(e){return{baseLanes:e,cachePool:X6()}}function M5(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=g2),e}function aa(e,t,n){var a=t.pendingProps,r=!1,c=(t.flags&128)!==0,i;if((i=c)||(i=e!==null&&e.memoizedState===null?!1:(q1.current&2)!==0),i&&(r=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(E1){if(r?ce(t):ue(),E1){var o=x1,p;if(p=o){e:{for(p=o,o=D2;p.nodeType!==8;){if(!o){o=null;break e}if(p=M2(p.nextSibling),p===null){o=null;break e}}o=p}o!==null?(t.memoizedState={dehydrated:o,treeContext:xe!==null?{id:q2,overflow:H2}:null,retryLane:536870912,hydrationErrors:null},p=c2(18,null,null,0),p.stateNode=o,p.return=t,t.child=p,F1=t,x1=null,p=!0):p=!1}p||Oe(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return cn(o)?t.lanes=32:t.lanes=536870912,null;k2(t)}return o=a.children,a=a.fallback,r?(ue(),r=t.mode,o=S0({mode:"hidden",children:o},r),a=Ce(a,r,n,null),o.return=t,a.return=t,o.sibling=a,t.child=o,r=t.child,r.memoizedState=S5(n),r.childLanes=M5(e,i,n),t.memoizedState=b5,a):(ce(t),N5(t,o))}if(p=e.memoizedState,p!==null&&(o=p.dehydrated,o!==null)){if(c)t.flags&256?(ce(t),t.flags&=-257,t=T5(e,t,n)):t.memoizedState!==null?(ue(),t.child=e.child,t.flags|=128,t=null):(ue(),r=a.fallback,o=t.mode,a=S0({mode:"visible",children:a.children},o),r=Ce(r,o,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,d3(t,e.child,null,n),a=t.child,a.memoizedState=S5(n),a.childLanes=M5(e,i,n),t.memoizedState=b5,t=r);else if(ce(t),cn(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var R=i.dgst;i=R,a=Error(s(419)),a.stack="",a.digest=i,Z3({value:a,source:null,stack:null}),t=T5(e,t,n)}else if(G1||K3(e,t,n,!1),i=(n&e.childLanes)!==0,G1||i){if(i=T1,i!==null&&(a=n&-n,a=(a&42)!==0?1:ut(a),a=(a&(i.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,n3(e,a),m2(i,e,a),$l;o.data==="$?"||V5(),t=T5(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,x1=M2(o.nextSibling),F1=t,E1=!0,_e=null,D2=!1,e!==null&&(E2[v2++]=q2,E2[v2++]=H2,E2[v2++]=xe,q2=e.id,H2=e.overflow,xe=t),t=N5(t,a.children),t.flags|=4096);return t}return r?(ue(),r=a.fallback,o=t.mode,p=e.child,R=p.sibling,a=B2(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,R!==null?r=B2(R,r):(r=Ce(r,o,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,o=e.child.memoizedState,o===null?o=S5(n):(p=o.cachePool,p!==null?(R=B1._currentValue,p=p.parent!==R?{parent:R,pool:R}:p):p=X6(),o={baseLanes:o.baseLanes|n,cachePool:p}),r.memoizedState=o,r.childLanes=M5(e,i,n),t.memoizedState=b5,a):(ce(t),n=e.child,e=n.sibling,n=B2(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function N5(e,t){return t=S0({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function S0(e,t){return e=c2(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function T5(e,t,n){return d3(t,e.child,null,n),e=N5(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ra(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Vt(e.return,t,n)}function A5(e,t,n,a,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=r)}function ca(e,t,n){var a=t.pendingProps,r=a.revealOrder,c=a.tail;if(V1(e,t,a.children,n),a=q1.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ra(e,n,t);else if(e.tag===19)ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Z(q1,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&z0(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),A5(t,!1,r,n,c);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&z0(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}A5(t,!0,n,null,c);break;case"together":A5(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function V2(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fe|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(K3(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=B2(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=B2(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w5(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&n0(e)))}function C8(e,t,n){switch(t.tag){case 3:A1(t,t.stateNode.containerInfo),te(t,B1,e.memoizedState.cache),Q3();break;case 27:case 5:nt(t);break;case 4:A1(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ce(t),t.flags|=128,null):(n&t.child.childLanes)!==0?aa(e,t,n):(ce(t),e=V2(e,t,n),e!==null?e.sibling:null);ce(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(K3(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return ca(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(q1,q1.current),a)break;return null;case 22:case 23:return t.lanes=0,Il(e,t,n);case 24:te(t,B1,e.memoizedState.cache)}return V2(e,t,n)}function ua(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)G1=!0;else{if(!w5(e,n)&&(t.flags&128)===0)return G1=!1,C8(e,t,n);G1=(e.flags&131072)!==0}else G1=!1,E1&&(t.flags&1048576)!==0&&q6(t,t0,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")Bt(a)?(e=He(a,e),t.tag=1,t=na(null,t,a,e,n)):(t.tag=0,t=y5(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===X){t.tag=11,t=Fl(null,t,a,e,n);break e}else if(r===t1){t.tag=14,t=Wl(null,t,a,e,n);break e}}throw t=Me(a)||a,Error(s(306,t,""))}}return t;case 0:return y5(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=He(a,t.pendingProps),na(e,t,a,r,n);case 3:e:{if(A1(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var c=t.memoizedState;r=c.element,Ft(e,t),e4(t,a,null,n);var i=t.memoizedState;if(a=i.cache,te(t,B1,a),a!==c.cache&&Xt(t,[B1],n,!0),I3(),a=i.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=la(e,t,a,n);break e}else if(a!==r){r=h2(Error(s(424)),t),Z3(r),t=la(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(x1=M2(e.firstChild),F1=t,E1=!0,_e=null,D2=!0,n=jl(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Q3(),a===r){t=V2(e,t,n);break e}V1(e,t,a,n)}t=t.child}return t;case 26:return b0(e,t),e===null?(n=m7(t.type,null,t.pendingProps,null))?t.memoizedState=n:E1||(n=t.type,e=t.pendingProps,a=B0(r1.current).createElement(n),a[K1]=t,a[W1]=e,Q1(a,n,e),j1(a),t.stateNode=a):t.memoizedState=m7(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&E1&&(a=t.stateNode=i7(t.type,t.pendingProps,r1.current),F1=t,D2=!0,r=x1,Ee(t.type)?(un=r,x1=M2(a.firstChild)):x1=r),V1(e,t,t.pendingProps.children,n),b0(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&E1&&((r=a=x1)&&(a=l9(a,t.type,t.pendingProps,D2),a!==null?(t.stateNode=a,F1=t,x1=M2(a.firstChild),D2=!1,r=!0):r=!1),r||Oe(t)),nt(t),r=t.type,c=t.pendingProps,i=e!==null?e.memoizedProps:null,a=c.children,ln(r,c)?a=null:i!==null&&ln(r,i)&&(t.flags|=32),t.memoizedState!==null&&(r=n5(e,t,b8,null,null,n),S4._currentValue=r),b0(e,t),V1(e,t,a,n),t.child;case 6:return e===null&&E1&&((e=n=x1)&&(n=a9(n,t.pendingProps,D2),n!==null?(t.stateNode=n,F1=t,x1=null,e=!0):e=!1),e||Oe(t)),null;case 13:return aa(e,t,n);case 4:return A1(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=d3(t,null,a,n):V1(e,t,a,n),t.child;case 11:return Fl(e,t,t.type,t.pendingProps,n);case 7:return V1(e,t,t.pendingProps,n),t.child;case 8:return V1(e,t,t.pendingProps.children,n),t.child;case 12:return V1(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),V1(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ue(t),r=J1(r),a=a(r),t.flags|=1,V1(e,t,a,n),t.child;case 14:return Wl(e,t,t.type,t.pendingProps,n);case 15:return Pl(e,t,t.type,t.pendingProps,n);case 19:return ca(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=S0(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=B2(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Il(e,t,n);case 24:return Ue(t),a=J1(B1),e===null?(r=Kt(),r===null&&(r=T1,c=Qt(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:a,cache:r},$t(t),te(t,B1,r)):((e.lanes&n)!==0&&(Ft(e,t),e4(t,null,null,n),I3()),r=e.memoizedState,c=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),te(t,B1,a)):(a=c.cache,te(t,B1,a),a!==r.cache&&Xt(t,[B1],n,!0))),V1(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function X2(e){e.flags|=4}function ia(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!E7(t)){if(t=z2.current,t!==null&&((d1&4194048)===d1?C2!==null:(d1&62914560)!==d1&&(d1&536870912)===0||t!==C2))throw W3=Jt,Q6;e.flags|=8192}}function M0(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gn():536870912,e.lanes|=t,v3|=t)}function u4(e,t){if(!E1)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function C1(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function x8(e,t,n){var a=t.pendingProps;switch(Gt(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return C1(t),null;case 1:return C1(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),G2(B1),W2(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(X3(t)?X2(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,G6())),C1(t),null;case 26:return n=t.memoizedState,e===null?(X2(t),n!==null?(C1(t),ia(t,n)):(C1(t),t.flags&=-16777217)):n?n!==e.memoizedState?(X2(t),C1(t),ia(t,n)):(C1(t),t.flags&=-16777217):(e.memoizedProps!==a&&X2(t),C1(t),t.flags&=-16777217),null;case 27:L4(t),n=r1.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&X2(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return C1(t),null}e=P.current,X3(t)?H6(t):(e=i7(r,a,n),t.stateNode=e,X2(t))}return C1(t),null;case 5:if(L4(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&X2(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return C1(t),null}if(e=P.current,X3(t))H6(t);else{switch(r=B0(r1.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[K1]=t,e[W1]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Q1(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&X2(t)}}return C1(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&X2(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=r1.current,X3(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=F1,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[K1]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||t7(e.nodeValue,n)),e||Oe(t)}else e=B0(e).createTextNode(a),e[K1]=t,t.stateNode=e}return C1(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=X3(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[K1]=t}else Q3(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;C1(t),r=!1}else r=G6(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(k2(t),t):(k2(t),null)}if(k2(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),M0(t,t.updateQueue),C1(t),null;case 4:return W2(),e===null&&P5(t.stateNode.containerInfo),C1(t),null;case 10:return G2(t.type),C1(t),null;case 19:if(J(q1),r=t.memoizedState,r===null)return C1(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)u4(r,!1);else{if(R1!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=z0(e),c!==null){for(t.flags|=128,u4(r,!1),e=c.updateQueue,t.updateQueue=e,M0(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)B6(n,e),n=n.sibling;return Z(q1,q1.current&1|2),t.child}e=e.sibling}r.tail!==null&&w2()>A0&&(t.flags|=128,a=!0,u4(r,!1),t.lanes=4194304)}else{if(!a)if(e=z0(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,M0(t,e),u4(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!E1)return C1(t),null}else 2*w2()-r.renderingStartTime>A0&&n!==536870912&&(t.flags|=128,a=!0,u4(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=w2(),t.sibling=null,e=q1.current,Z(q1,a?e&1|2:e&1),t):(C1(t),null);case 22:case 23:return k2(t),e5(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(C1(t),t.subtreeFlags&6&&(t.flags|=8192)):C1(t),n=t.updateQueue,n!==null&&M0(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&J(Be),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),G2(B1),C1(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function R8(e,t){switch(Gt(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return G2(B1),W2(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return L4(t),null;case 13:if(k2(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Q3()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(q1),null;case 4:return W2(),null;case 10:return G2(t.type),null;case 22:case 23:return k2(t),e5(),e!==null&&J(Be),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return G2(B1),null;case 25:return null;default:return null}}function sa(e,t){switch(Gt(t),t.tag){case 3:G2(B1),W2();break;case 26:case 27:case 5:L4(t);break;case 4:W2();break;case 13:k2(t);break;case 19:J(q1);break;case 10:G2(t.type);break;case 22:case 23:k2(t),e5(),e!==null&&J(Be);break;case 24:G2(B1)}}function i4(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var c=n.create,i=n.inst;a=c(),i.destroy=a}n=n.next}while(n!==r)}}catch(o){N1(t,t.return,o)}}function ie(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){var i=a.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,r=t;var p=n,R=o;try{R()}catch(j){N1(r,p,j)}}}a=a.next}while(a!==c)}}catch(j){N1(t,t.return,j)}}function oa(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{W6(t,n)}catch(a){N1(e,e.return,a)}}}function ma(e,t,n){n.props=He(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){N1(e,t,a)}}function s4(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){N1(e,t,r)}}function x2(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){N1(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){N1(e,t,r)}else n.current=null}function fa(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){N1(e,e.return,r)}}function D5(e,t,n){try{var a=e.stateNode;P8(a,e.type,n,t),a[W1]=t}catch(r){N1(e,e.return,r)}}function da(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ee(e.type)||e.tag===4}function C5(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||da(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ee(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function x5(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=U0));else if(a!==4&&(a===27&&Ee(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(x5(e,t,n),e=e.sibling;e!==null;)x5(e,t,n),e=e.sibling}function N0(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ee(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(N0(e,t,n),e=e.sibling;e!==null;)N0(e,t,n),e=e.sibling}function ha(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Q1(t,a,n),t[K1]=e,t[W1]=n}catch(c){N1(e,e.return,c)}}var Q2=!1,O1=!1,R5=!1,pa=typeof WeakSet=="function"?WeakSet:Set,Y1=null;function _8(e,t){if(e=e.containerInfo,tn=k0,e=A6(e),Ct(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var i=0,o=-1,p=-1,R=0,j=0,k=e,O=null;t:for(;;){for(var L;k!==n||r!==0&&k.nodeType!==3||(o=i+r),k!==c||a!==0&&k.nodeType!==3||(p=i+a),k.nodeType===3&&(i+=k.nodeValue.length),(L=k.firstChild)!==null;)O=k,k=L;for(;;){if(k===e)break t;if(O===n&&++R===r&&(o=i),O===c&&++j===a&&(p=i),(L=k.nextSibling)!==null)break;k=O,O=k.parentNode}k=L}n=o===-1||p===-1?null:{start:o,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(nn={focusedElem:e,selectionRange:n},k0=!1,Y1=t;Y1!==null;)if(t=Y1,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Y1=e;else for(;Y1!==null;){switch(t=Y1,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,a=n.stateNode;try{var l1=He(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(l1,c),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){N1(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rn(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rn(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Y1=e;break}Y1=t.return}}function Ea(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:se(e,n),a&4&&i4(5,n);break;case 1:if(se(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){N1(n,n.return,i)}else{var r=He(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){N1(n,n.return,i)}}a&64&&oa(n),a&512&&s4(n,n.return);break;case 3:if(se(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{W6(e,t)}catch(i){N1(n,n.return,i)}}break;case 27:t===null&&a&4&&ha(n);case 26:case 5:se(e,n),t===null&&a&4&&fa(n),a&512&&s4(n,n.return);break;case 12:se(e,n);break;case 13:se(e,n),a&4&&ga(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Y8.bind(null,n),r9(e,n))));break;case 22:if(a=n.memoizedState!==null||Q2,!a){t=t!==null&&t.memoizedState!==null||O1,r=Q2;var c=O1;Q2=a,(O1=t)&&!c?oe(e,n,(n.subtreeFlags&8772)!==0):se(e,n),Q2=r,O1=c}break;case 30:break;default:se(e,n)}}function va(e){var t=e.alternate;t!==null&&(e.alternate=null,va(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ot(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var w1=null,e2=!1;function Z2(e,t,n){for(n=n.child;n!==null;)za(e,t,n),n=n.sibling}function za(e,t,n){if(l2&&typeof l2.onCommitFiberUnmount=="function")try{l2.onCommitFiberUnmount(x3,n)}catch{}switch(n.tag){case 26:O1||x2(n,t),Z2(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:O1||x2(n,t);var a=w1,r=e2;Ee(n.type)&&(w1=n.stateNode,e2=!1),Z2(e,t,n),z4(n.stateNode),w1=a,e2=r;break;case 5:O1||x2(n,t);case 6:if(a=w1,r=e2,w1=null,Z2(e,t,n),w1=a,e2=r,w1!==null)if(e2)try{(w1.nodeType===9?w1.body:w1.nodeName==="HTML"?w1.ownerDocument.body:w1).removeChild(n.stateNode)}catch(c){N1(n,t,c)}else try{w1.removeChild(n.stateNode)}catch(c){N1(n,t,c)}break;case 18:w1!==null&&(e2?(e=w1,c7(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),A4(e)):c7(w1,n.stateNode));break;case 4:a=w1,r=e2,w1=n.stateNode.containerInfo,e2=!0,Z2(e,t,n),w1=a,e2=r;break;case 0:case 11:case 14:case 15:O1||ie(2,n,t),O1||ie(4,n,t),Z2(e,t,n);break;case 1:O1||(x2(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ma(n,t,a)),Z2(e,t,n);break;case 21:Z2(e,t,n);break;case 22:O1=(a=O1)||n.memoizedState!==null,Z2(e,t,n),O1=a;break;default:Z2(e,t,n)}}function ga(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{A4(e)}catch(n){N1(t,t.return,n)}}function O8(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pa),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pa),t;default:throw Error(s(435,e.tag))}}function _5(e,t){var n=O8(e);t.forEach(function(a){var r=k8.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function u2(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],c=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(Ee(o.type)){w1=o.stateNode,e2=!1;break e}break;case 5:w1=o.stateNode,e2=!1;break e;case 3:case 4:w1=o.stateNode.containerInfo,e2=!0;break e}o=o.return}if(w1===null)throw Error(s(160));za(c,i,r),w1=null,e2=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ya(t,e),t=t.sibling}var S2=null;function ya(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:u2(t,e),i2(e),a&4&&(ie(3,e,e.return),i4(3,e),ie(5,e,e.return));break;case 1:u2(t,e),i2(e),a&512&&(O1||n===null||x2(n,n.return)),a&64&&Q2&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=S2;if(u2(t,e),i2(e),a&512&&(O1||n===null||x2(n,n.return)),a&4){var c=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":c=r.getElementsByTagName("title")[0],(!c||c[O3]||c[K1]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(a),r.head.insertBefore(c,r.querySelector("head > title"))),Q1(c,a,n),c[K1]=e,j1(c),a=c;break e;case"link":var i=h7("link","href",r).get(a+(n.href||""));if(i){for(var o=0;o<i.length;o++)if(c=i[o],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break t}}c=r.createElement(a),Q1(c,a,n),r.head.appendChild(c);break;case"meta":if(i=h7("meta","content",r).get(a+(n.content||""))){for(o=0;o<i.length;o++)if(c=i[o],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break t}}c=r.createElement(a),Q1(c,a,n),r.head.appendChild(c);break;default:throw Error(s(468,a))}c[K1]=e,j1(c),a=c}e.stateNode=a}else p7(r,e.type,e.stateNode);else e.stateNode=d7(r,a,e.memoizedProps);else c!==a?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,a===null?p7(r,e.type,e.stateNode):d7(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&D5(e,e.memoizedProps,n.memoizedProps)}break;case 27:u2(t,e),i2(e),a&512&&(O1||n===null||x2(n,n.return)),n!==null&&a&4&&D5(e,e.memoizedProps,n.memoizedProps);break;case 5:if(u2(t,e),i2(e),a&512&&(O1||n===null||x2(n,n.return)),e.flags&32){r=e.stateNode;try{$e(r,"")}catch(L){N1(e,e.return,L)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,D5(e,r,n!==null?n.memoizedProps:r)),a&1024&&(R5=!0);break;case 6:if(u2(t,e),i2(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(L){N1(e,e.return,L)}}break;case 3:if(j0=null,r=S2,S2=q0(t.containerInfo),u2(t,e),S2=r,i2(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{A4(t.containerInfo)}catch(L){N1(e,e.return,L)}R5&&(R5=!1,ba(e));break;case 4:a=S2,S2=q0(e.stateNode.containerInfo),u2(t,e),i2(e),S2=a;break;case 12:u2(t,e),i2(e);break;case 13:u2(t,e),i2(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(H5=w2()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_5(e,a)));break;case 22:r=e.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,R=Q2,j=O1;if(Q2=R||r,O1=j||p,u2(t,e),O1=j,Q2=R,i2(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||p||Q2||O1||je(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){p=n=t;try{if(c=p.stateNode,r)i=c.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=p.stateNode;var k=p.memoizedProps.style,O=k!=null&&k.hasOwnProperty("display")?k.display:null;o.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(L){N1(p,p.return,L)}}}else if(t.tag===6){if(n===null){p=t;try{p.stateNode.nodeValue=r?"":p.memoizedProps}catch(L){N1(p,p.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,_5(e,n))));break;case 19:u2(t,e),i2(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_5(e,a)));break;case 30:break;case 21:break;default:u2(t,e),i2(e)}}function i2(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(da(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,c=C5(e);N0(e,c,r);break;case 5:var i=n.stateNode;n.flags&32&&($e(i,""),n.flags&=-33);var o=C5(e);N0(e,o,i);break;case 3:case 4:var p=n.stateNode.containerInfo,R=C5(e);x5(e,R,p);break;default:throw Error(s(161))}}catch(j){N1(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ba(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ba(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function se(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ea(e,t.alternate,t),t=t.sibling}function je(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ie(4,t,t.return),je(t);break;case 1:x2(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ma(t,t.return,n),je(t);break;case 27:z4(t.stateNode);case 26:case 5:x2(t,t.return),je(t);break;case 22:t.memoizedState===null&&je(t);break;case 30:je(t);break;default:je(t)}e=e.sibling}}function oe(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,c=t,i=c.flags;switch(c.tag){case 0:case 11:case 15:oe(r,c,n),i4(4,c);break;case 1:if(oe(r,c,n),a=c,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){N1(a,a.return,R)}if(a=c,r=a.updateQueue,r!==null){var o=a.stateNode;try{var p=r.shared.hiddenCallbacks;if(p!==null)for(r.shared.hiddenCallbacks=null,r=0;r<p.length;r++)F6(p[r],o)}catch(R){N1(a,a.return,R)}}n&&i&64&&oa(c),s4(c,c.return);break;case 27:ha(c);case 26:case 5:oe(r,c,n),n&&a===null&&i&4&&fa(c),s4(c,c.return);break;case 12:oe(r,c,n);break;case 13:oe(r,c,n),n&&i&4&&ga(r,c);break;case 22:c.memoizedState===null&&oe(r,c,n),s4(c,c.return);break;case 30:break;default:oe(r,c,n)}t=t.sibling}}function O5(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&J3(n))}function L5(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&J3(e))}function R2(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sa(e,t,n,a),t=t.sibling}function Sa(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:R2(e,t,n,a),r&2048&&i4(9,t);break;case 1:R2(e,t,n,a);break;case 3:R2(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&J3(e)));break;case 12:if(r&2048){R2(e,t,n,a),e=t.stateNode;try{var c=t.memoizedProps,i=c.id,o=c.onPostCommit;typeof o=="function"&&o(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){N1(t,t.return,p)}}else R2(e,t,n,a);break;case 13:R2(e,t,n,a);break;case 23:break;case 22:c=t.stateNode,i=t.alternate,t.memoizedState!==null?c._visibility&2?R2(e,t,n,a):o4(e,t):c._visibility&2?R2(e,t,n,a):(c._visibility|=2,h3(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&O5(i,t);break;case 24:R2(e,t,n,a),r&2048&&L5(t.alternate,t);break;default:R2(e,t,n,a)}}function h3(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,i=t,o=n,p=a,R=i.flags;switch(i.tag){case 0:case 11:case 15:h3(c,i,o,p,r),i4(8,i);break;case 23:break;case 22:var j=i.stateNode;i.memoizedState!==null?j._visibility&2?h3(c,i,o,p,r):o4(c,i):(j._visibility|=2,h3(c,i,o,p,r)),r&&R&2048&&O5(i.alternate,i);break;case 24:h3(c,i,o,p,r),r&&R&2048&&L5(i.alternate,i);break;default:h3(c,i,o,p,r)}t=t.sibling}}function o4(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:o4(n,a),r&2048&&O5(a.alternate,a);break;case 24:o4(n,a),r&2048&&L5(a.alternate,a);break;default:o4(n,a)}t=t.sibling}}var m4=8192;function p3(e){if(e.subtreeFlags&m4)for(e=e.child;e!==null;)Ma(e),e=e.sibling}function Ma(e){switch(e.tag){case 26:p3(e),e.flags&m4&&e.memoizedState!==null&&z9(S2,e.memoizedState,e.memoizedProps);break;case 5:p3(e);break;case 3:case 4:var t=S2;S2=q0(e.stateNode.containerInfo),p3(e),S2=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=m4,m4=16777216,p3(e),m4=t):p3(e));break;default:p3(e)}}function Na(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function f4(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Y1=a,Aa(a,e)}Na(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ta(e),e=e.sibling}function Ta(e){switch(e.tag){case 0:case 11:case 15:f4(e),e.flags&2048&&ie(9,e,e.return);break;case 3:f4(e);break;case 12:f4(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,T0(e)):f4(e);break;default:f4(e)}}function T0(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Y1=a,Aa(a,e)}Na(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ie(8,t,t.return),T0(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,T0(t));break;default:T0(t)}e=e.sibling}}function Aa(e,t){for(;Y1!==null;){var n=Y1;switch(n.tag){case 0:case 11:case 15:ie(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:J3(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Y1=a;else e:for(n=e;Y1!==null;){a=Y1;var r=a.sibling,c=a.return;if(va(a),a===n){Y1=null;break e}if(r!==null){r.return=c,Y1=r;break e}Y1=c}}}var L8={getCacheForType:function(e){var t=J1(B1),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},U8=typeof WeakMap=="function"?WeakMap:Map,z1=0,T1=null,m1=null,d1=0,g1=0,s2=null,me=!1,E3=!1,U5=!1,K2=0,R1=0,fe=0,Ge=0,B5=0,g2=0,v3=0,d4=null,t2=null,q5=!1,H5=0,A0=1/0,w0=null,de=null,X1=0,he=null,z3=null,g3=0,j5=0,G5=null,wa=null,h4=0,Y5=null;function o2(){if((z1&2)!==0&&d1!==0)return d1&-d1;if(G.T!==null){var e=c3;return e!==0?e:J5()}return Vn()}function Da(){g2===0&&(g2=(d1&536870912)===0||E1?jn():536870912);var e=z2.current;return e!==null&&(e.flags|=32),g2}function m2(e,t,n){(e===T1&&(g1===2||g1===9)||e.cancelPendingCommit!==null)&&(y3(e,0),pe(e,d1,g2,!1)),_3(e,n),((z1&2)===0||e!==T1)&&(e===T1&&((z1&2)===0&&(Ge|=n),R1===4&&pe(e,d1,g2,!1)),_2(e))}function Ca(e,t,n){if((z1&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||R3(e,t),r=a?H8(e,t):X5(e,t,!0),c=a;do{if(r===0){E3&&!a&&pe(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!B8(n)){r=X5(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var o=e;r=d4;var p=o.current.memoizedState.isDehydrated;if(p&&(y3(o,i).flags|=256),i=X5(o,i,!1),i!==2){if(U5&&!p){o.errorRecoveryDisabledLanes|=c,Ge|=c,r=4;break e}c=t2,t2=r,c!==null&&(t2===null?t2=c:t2.push.apply(t2,c))}r=i}if(c=!1,r!==2)continue}}if(r===1){y3(e,0),pe(e,t,0,!0);break}e:{switch(a=e,c=r,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:pe(a,t,g2,!me);break e;case 2:t2=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=H5+300-w2(),10<r)){if(pe(a,t,g2,!me),H4(a,0,!0)!==0)break e;a.timeoutHandle=a7(xa.bind(null,a,n,t2,w0,q5,t,g2,Ge,v3,me,c,2,-0,0),r);break e}xa(a,n,t2,w0,q5,t,g2,Ge,v3,me,c,0,-0,0)}}break}while(!0);_2(e)}function xa(e,t,n,a,r,c,i,o,p,R,j,k,O,L){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(b4={stylesheets:null,count:0,unsuspend:v9},Ma(t),k=g9(),k!==null)){e.cancelPendingCommit=k(qa.bind(null,e,t,c,n,a,r,i,o,p,j,1,O,L)),pe(e,c,i,!R);return}qa(e,t,c,n,a,r,i,o,p)}function B8(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],c=r.getSnapshot;r=r.value;try{if(!r2(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pe(e,t,n,a){t&=~B5,t&=~Ge,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var c=31-a2(r),i=1<<c;a[c]=-1,r&=~i}n!==0&&Yn(e,n,t)}function D0(){return(z1&6)===0?(p4(0),!1):!0}function k5(){if(m1!==null){if(g1===0)var e=m1.return;else e=m1,j2=Le=null,r5(e),f3=null,r4=0,e=m1;for(;e!==null;)sa(e.alternate,e),e=e.return;m1=null}}function y3(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,e9(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),k5(),T1=e,m1=n=B2(e.current,null),d1=t,g1=0,s2=null,me=!1,E3=R3(e,t),U5=!1,v3=g2=B5=Ge=fe=R1=0,t2=d4=null,q5=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-a2(a),c=1<<r;t|=e[r],a&=~c}return K2=t,F4(),n}function Ra(e,t){s1=null,G.H=p0,t===F3||t===r0?(t=J6(),g1=3):t===Q6?(t=J6(),g1=4):g1=t===$l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,s2=t,m1===null&&(R1=1,y0(e,h2(t,e.current)))}function _a(){var e=G.H;return G.H=p0,e===null?p0:e}function Oa(){var e=G.A;return G.A=L8,e}function V5(){R1=4,me||(d1&4194048)!==d1&&z2.current!==null||(E3=!0),(fe&134217727)===0&&(Ge&134217727)===0||T1===null||pe(T1,d1,g2,!1)}function X5(e,t,n){var a=z1;z1|=2;var r=_a(),c=Oa();(T1!==e||d1!==t)&&(w0=null,y3(e,t)),t=!1;var i=R1;e:do try{if(g1!==0&&m1!==null){var o=m1,p=s2;switch(g1){case 8:k5(),i=6;break e;case 3:case 2:case 9:case 6:z2.current===null&&(t=!0);var R=g1;if(g1=0,s2=null,b3(e,o,p,R),n&&E3){i=0;break e}break;default:R=g1,g1=0,s2=null,b3(e,o,p,R)}}q8(),i=R1;break}catch(j){Ra(e,j)}while(!0);return t&&e.shellSuspendCounter++,j2=Le=null,z1=a,G.H=r,G.A=c,m1===null&&(T1=null,d1=0,F4()),i}function q8(){for(;m1!==null;)La(m1)}function H8(e,t){var n=z1;z1|=2;var a=_a(),r=Oa();T1!==e||d1!==t?(w0=null,A0=w2()+500,y3(e,t)):E3=R3(e,t);e:do try{if(g1!==0&&m1!==null){t=m1;var c=s2;t:switch(g1){case 1:g1=0,s2=null,b3(e,t,c,1);break;case 2:case 9:if(Z6(c)){g1=0,s2=null,Ua(t);break}t=function(){g1!==2&&g1!==9||T1!==e||(g1=7),_2(e)},c.then(t,t);break e;case 3:g1=7;break e;case 4:g1=5;break e;case 7:Z6(c)?(g1=0,s2=null,Ua(t)):(g1=0,s2=null,b3(e,t,c,7));break;case 5:var i=null;switch(m1.tag){case 26:i=m1.memoizedState;case 5:case 27:var o=m1;if(!i||E7(i)){g1=0,s2=null;var p=o.sibling;if(p!==null)m1=p;else{var R=o.return;R!==null?(m1=R,C0(R)):m1=null}break t}}g1=0,s2=null,b3(e,t,c,5);break;case 6:g1=0,s2=null,b3(e,t,c,6);break;case 8:k5(),R1=6;break e;default:throw Error(s(462))}}j8();break}catch(j){Ra(e,j)}while(!0);return j2=Le=null,G.H=a,G.A=r,z1=n,m1!==null?0:(T1=null,d1=0,F4(),R1)}function j8(){for(;m1!==null&&!ur();)La(m1)}function La(e){var t=ua(e.alternate,e,K2);e.memoizedProps=e.pendingProps,t===null?C0(e):m1=t}function Ua(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ta(n,t,t.pendingProps,t.type,void 0,d1);break;case 11:t=ta(n,t,t.pendingProps,t.type.render,t.ref,d1);break;case 5:r5(t);default:sa(n,t),t=m1=B6(t,K2),t=ua(n,t,K2)}e.memoizedProps=e.pendingProps,t===null?C0(e):m1=t}function b3(e,t,n,a){j2=Le=null,r5(t),f3=null,r4=0;var r=t.return;try{if(D8(e,r,t,n,d1)){R1=1,y0(e,h2(n,e.current)),m1=null;return}}catch(c){if(r!==null)throw m1=r,c;R1=1,y0(e,h2(n,e.current)),m1=null;return}t.flags&32768?(E1||a===1?e=!0:E3||(d1&536870912)!==0?e=!1:(me=e=!0,(a===2||a===9||a===3||a===6)&&(a=z2.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ba(t,e)):C0(t)}function C0(e){var t=e;do{if((t.flags&32768)!==0){Ba(t,me);return}e=t.return;var n=x8(t.alternate,t,K2);if(n!==null){m1=n;return}if(t=t.sibling,t!==null){m1=t;return}m1=t=e}while(t!==null);R1===0&&(R1=5)}function Ba(e,t){do{var n=R8(e.alternate,e);if(n!==null){n.flags&=32767,m1=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){m1=e;return}m1=e=n}while(e!==null);R1=6,m1=null}function qa(e,t,n,a,r,c,i,o,p){e.cancelPendingCommit=null;do x0();while(X1!==0);if((z1&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Lt,vr(e,n,c,i,o,p),e===T1&&(m1=T1=null,d1=0),z3=t,he=e,g3=n,j5=c,G5=r,wa=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,V8(U4,function(){return ka(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=G.T,G.T=null,r=K.p,K.p=2,i=z1,z1|=4;try{_8(e,t,n)}finally{z1=i,K.p=r,G.T=a}}X1=1,Ha(),ja(),Ga()}}function Ha(){if(X1===1){X1=0;var e=he,t=z3,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=G.T,G.T=null;var a=K.p;K.p=2;var r=z1;z1|=4;try{ya(t,e);var c=nn,i=A6(e.containerInfo),o=c.focusedElem,p=c.selectionRange;if(i!==o&&o&&o.ownerDocument&&T6(o.ownerDocument.documentElement,o)){if(p!==null&&Ct(o)){var R=p.start,j=p.end;if(j===void 0&&(j=R),"selectionStart"in o)o.selectionStart=R,o.selectionEnd=Math.min(j,o.value.length);else{var k=o.ownerDocument||document,O=k&&k.defaultView||window;if(O.getSelection){var L=O.getSelection(),l1=o.textContent.length,I=Math.min(p.start,l1),S1=p.end===void 0?I:Math.min(p.end,l1);!L.extend&&I>S1&&(i=S1,S1=I,I=i);var T=N6(o,I),S=N6(o,S1);if(T&&S&&(L.rangeCount!==1||L.anchorNode!==T.node||L.anchorOffset!==T.offset||L.focusNode!==S.node||L.focusOffset!==S.offset)){var w=k.createRange();w.setStart(T.node,T.offset),L.removeAllRanges(),I>S1?(L.addRange(w),L.extend(S.node,S.offset)):(w.setEnd(S.node,S.offset),L.addRange(w))}}}}for(k=[],L=o;L=L.parentNode;)L.nodeType===1&&k.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<k.length;o++){var Y=k[o];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}k0=!!tn,nn=tn=null}finally{z1=r,K.p=a,G.T=n}}e.current=t,X1=2}}function ja(){if(X1===2){X1=0;var e=he,t=z3,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=G.T,G.T=null;var a=K.p;K.p=2;var r=z1;z1|=4;try{Ea(e,t.alternate,t)}finally{z1=r,K.p=a,G.T=n}}X1=3}}function Ga(){if(X1===4||X1===3){X1=0,ir();var e=he,t=z3,n=g3,a=wa;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?X1=5:(X1=0,z3=he=null,Ya(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(de=null),it(n),t=t.stateNode,l2&&typeof l2.onCommitFiberRoot=="function")try{l2.onCommitFiberRoot(x3,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=G.T,r=K.p,K.p=2,G.T=null;try{for(var c=e.onRecoverableError,i=0;i<a.length;i++){var o=a[i];c(o.value,{componentStack:o.stack})}}finally{G.T=t,K.p=r}}(g3&3)!==0&&x0(),_2(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===Y5?h4++:(h4=0,Y5=e):h4=0,p4(0)}}function Ya(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,J3(t)))}function x0(e){return Ha(),ja(),Ga(),ka()}function ka(){if(X1!==5)return!1;var e=he,t=j5;j5=0;var n=it(g3),a=G.T,r=K.p;try{K.p=32>n?32:n,G.T=null,n=G5,G5=null;var c=he,i=g3;if(X1=0,z3=he=null,g3=0,(z1&6)!==0)throw Error(s(331));var o=z1;if(z1|=4,Ta(c.current),Sa(c,c.current,i,n),z1=o,p4(0,!1),l2&&typeof l2.onPostCommitFiberRoot=="function")try{l2.onPostCommitFiberRoot(x3,c)}catch{}return!0}finally{K.p=r,G.T=a,Ya(e,t)}}function Va(e,t,n){t=h2(n,t),t=g5(e.stateNode,t,2),e=ae(e,t,2),e!==null&&(_3(e,2),_2(e))}function N1(e,t,n){if(e.tag===3)Va(e,e,n);else for(;t!==null;){if(t.tag===3){Va(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(de===null||!de.has(a))){e=h2(n,e),n=Kl(2),a=ae(t,n,2),a!==null&&(Jl(n,a,t,e),_3(a,2),_2(a));break}}t=t.return}}function Q5(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new U8;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(U5=!0,r.add(n),e=G8.bind(null,e,t,n),t.then(e,e))}function G8(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,T1===e&&(d1&n)===n&&(R1===4||R1===3&&(d1&62914560)===d1&&300>w2()-H5?(z1&2)===0&&y3(e,0):B5|=n,v3===d1&&(v3=0)),_2(e)}function Xa(e,t){t===0&&(t=Gn()),e=n3(e,t),e!==null&&(_3(e,t),_2(e))}function Y8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xa(e,n)}function k8(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Xa(e,n)}function V8(e,t){return at(e,t)}var R0=null,S3=null,Z5=!1,_0=!1,K5=!1,Ye=0;function _2(e){e!==S3&&e.next===null&&(S3===null?R0=S3=e:S3=S3.next=e),_0=!0,Z5||(Z5=!0,Q8())}function p4(e,t){if(!K5&&_0){K5=!0;do for(var n=!1,a=R0;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var c=0;else{var i=a.suspendedLanes,o=a.pingedLanes;c=(1<<31-a2(42|e)+1)-1,c&=r&~(i&~o),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Ja(a,c))}else c=d1,c=H4(a,a===T1?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||R3(a,c)||(n=!0,Ja(a,c));a=a.next}while(n);K5=!1}}function X8(){Qa()}function Qa(){_0=Z5=!1;var e=0;Ye!==0&&(I8()&&(e=Ye),Ye=0);for(var t=w2(),n=null,a=R0;a!==null;){var r=a.next,c=Za(a,t);c===0?(a.next=null,n===null?R0=r:n.next=r,r===null&&(S3=n)):(n=a,(e!==0||(c&3)!==0)&&(_0=!0)),a=r}p4(e)}function Za(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var i=31-a2(c),o=1<<i,p=r[i];p===-1?((o&n)===0||(o&a)!==0)&&(r[i]=Er(o,t)):p<=t&&(e.expiredLanes|=o),c&=~o}if(t=T1,n=d1,n=H4(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(g1===2||g1===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&rt(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||R3(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&rt(a),it(n)){case 2:case 8:n=qn;break;case 32:n=U4;break;case 268435456:n=Hn;break;default:n=U4}return a=Ka.bind(null,e),n=at(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&rt(a),e.callbackPriority=2,e.callbackNode=null,2}function Ka(e,t){if(X1!==0&&X1!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(x0()&&e.callbackNode!==n)return null;var a=d1;return a=H4(e,e===T1?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ca(e,a,t),Za(e,w2()),e.callbackNode!=null&&e.callbackNode===n?Ka.bind(null,e):null)}function Ja(e,t){if(x0())return null;Ca(e,t,!0)}function Q8(){t9(function(){(z1&6)!==0?at(Bn,X8):Qa()})}function J5(){return Ye===0&&(Ye=jn()),Ye}function $a(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:V4(""+e)}function Fa(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Z8(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var c=$a((r[W1]||null).action),i=a.submitter;i&&(t=(t=i[W1]||null)?$a(t.formAction):i.getAttribute("formAction"),t!==null&&(c=t,i=null));var o=new K4("action","action",null,a,r);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ye!==0){var p=i?Fa(r,i):new FormData(r);h5(n,{pending:!0,data:p,method:r.method,action:c},null,p)}}else typeof c=="function"&&(o.preventDefault(),p=i?Fa(r,i):new FormData(r),h5(n,{pending:!0,data:p,method:r.method,action:c},c,p))},currentTarget:r}]})}}for(var $5=0;$5<Ot.length;$5++){var F5=Ot[$5],K8=F5.toLowerCase(),J8=F5[0].toUpperCase()+F5.slice(1);b2(K8,"on"+J8)}b2(C6,"onAnimationEnd"),b2(x6,"onAnimationIteration"),b2(R6,"onAnimationStart"),b2("dblclick","onDoubleClick"),b2("focusin","onFocus"),b2("focusout","onBlur"),b2(m8,"onTransitionRun"),b2(f8,"onTransitionStart"),b2(d8,"onTransitionCancel"),b2(_6,"onTransitionEnd"),Ze("onMouseEnter",["mouseout","mouseover"]),Ze("onMouseLeave",["mouseout","mouseover"]),Ze("onPointerEnter",["pointerout","pointerover"]),Ze("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var E4="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(E4));function Wa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var i=a.length-1;0<=i;i--){var o=a[i],p=o.instance,R=o.currentTarget;if(o=o.listener,p!==c&&r.isPropagationStopped())break e;c=o,r.currentTarget=R;try{c(r)}catch(j){g0(j)}r.currentTarget=null,c=p}else for(i=0;i<a.length;i++){if(o=a[i],p=o.instance,R=o.currentTarget,o=o.listener,p!==c&&r.isPropagationStopped())break e;c=o,r.currentTarget=R;try{c(r)}catch(j){g0(j)}r.currentTarget=null,c=p}}}}function f1(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var a=e+"__bubble";n.has(a)||(Pa(t,e,2,!1),n.add(a))}function W5(e,t,n){var a=0;t&&(a|=4),Pa(n,e,a,t)}var O0="_reactListening"+Math.random().toString(36).slice(2);function P5(e){if(!e[O0]){e[O0]=!0,Qn.forEach(function(n){n!=="selectionchange"&&($8.has(n)||W5(n,!1,e),W5(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[O0]||(t[O0]=!0,W5("selectionchange",!1,t))}}function Pa(e,t,n,a){switch(S7(t)){case 2:var r=S9;break;case 8:r=M9;break;default:r=dn}n=r.bind(null,t,n,e),r=void 0,!yt||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function I5(e,t,n,a,r){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var o=a.stateNode.containerInfo;if(o===r)break;if(i===4)for(i=a.return;i!==null;){var p=i.tag;if((p===3||p===4)&&i.stateNode.containerInfo===r)return;i=i.return}for(;o!==null;){if(i=Ve(o),i===null)return;if(p=i.tag,p===5||p===6||p===26||p===27){a=c=i;continue e}o=o.parentNode}}a=a.return}r6(function(){var R=c,j=zt(n),k=[];e:{var O=O6.get(e);if(O!==void 0){var L=K4,l1=e;switch(e){case"keypress":if(Q4(n)===0)break e;case"keydown":case"keyup":L=Vr;break;case"focusin":l1="focus",L=Nt;break;case"focusout":l1="blur",L=Nt;break;case"beforeblur":case"afterblur":L=Nt;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=i6;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Rr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Zr;break;case C6:case x6:case R6:L=Lr;break;case _6:L=Jr;break;case"scroll":case"scrollend":L=Cr;break;case"wheel":L=Fr;break;case"copy":case"cut":case"paste":L=Br;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=o6;break;case"toggle":case"beforetoggle":L=Pr}var I=(t&4)!==0,S1=!I&&(e==="scroll"||e==="scrollend"),T=I?O!==null?O+"Capture":null:O;I=[];for(var S=R,w;S!==null;){var Y=S;if(w=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||w===null||T===null||(Y=U3(S,T),Y!=null&&I.push(v4(S,Y,w))),S1)break;S=S.return}0<I.length&&(O=new L(O,l1,null,n,j),k.push({event:O,listeners:I}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",O&&n!==vt&&(l1=n.relatedTarget||n.fromElement)&&(Ve(l1)||l1[ke]))break e;if((L||O)&&(O=j.window===j?j:(O=j.ownerDocument)?O.defaultView||O.parentWindow:window,L?(l1=n.relatedTarget||n.toElement,L=R,l1=l1?Ve(l1):null,l1!==null&&(S1=v(l1),I=l1.tag,l1!==S1||I!==5&&I!==27&&I!==6)&&(l1=null)):(L=null,l1=R),L!==l1)){if(I=i6,Y="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=o6,Y="onPointerLeave",T="onPointerEnter",S="pointer"),S1=L==null?O:L3(L),w=l1==null?O:L3(l1),O=new I(Y,S+"leave",L,n,j),O.target=S1,O.relatedTarget=w,Y=null,Ve(j)===R&&(I=new I(T,S+"enter",l1,n,j),I.target=w,I.relatedTarget=S1,Y=I),S1=Y,L&&l1)t:{for(I=L,T=l1,S=0,w=I;w;w=M3(w))S++;for(w=0,Y=T;Y;Y=M3(Y))w++;for(;0<S-w;)I=M3(I),S--;for(;0<w-S;)T=M3(T),w--;for(;S--;){if(I===T||T!==null&&I===T.alternate)break t;I=M3(I),T=M3(T)}I=null}else I=null;L!==null&&Ia(k,O,L,I,!1),l1!==null&&S1!==null&&Ia(k,S1,l1,I,!0)}}e:{if(O=R?L3(R):window,L=O.nodeName&&O.nodeName.toLowerCase(),L==="select"||L==="input"&&O.type==="file")var $=z6;else if(E6(O))if(g6)$=i8;else{$=c8;var o1=r8}else L=O.nodeName,!L||L.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Et(R.elementType)&&($=z6):$=u8;if($&&($=$(e,R))){v6(k,$,n,j);break e}o1&&o1(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&pt(O,"number",O.value)}switch(o1=R?L3(R):window,e){case"focusin":(E6(o1)||o1.contentEditable==="true")&&(Ie=o1,xt=R,V3=null);break;case"focusout":V3=xt=Ie=null;break;case"mousedown":Rt=!0;break;case"contextmenu":case"mouseup":case"dragend":Rt=!1,w6(k,n,j);break;case"selectionchange":if(o8)break;case"keydown":case"keyup":w6(k,n,j)}var W;if(At)e:{switch(e){case"compositionstart":var e1="onCompositionStart";break e;case"compositionend":e1="onCompositionEnd";break e;case"compositionupdate":e1="onCompositionUpdate";break e}e1=void 0}else Pe?h6(e,n)&&(e1="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(e1="onCompositionStart");e1&&(m6&&n.locale!=="ko"&&(Pe||e1!=="onCompositionStart"?e1==="onCompositionEnd"&&Pe&&(W=c6()):(ee=j,bt="value"in ee?ee.value:ee.textContent,Pe=!0)),o1=L0(R,e1),0<o1.length&&(e1=new s6(e1,e,null,n,j),k.push({event:e1,listeners:o1}),W?e1.data=W:(W=p6(n),W!==null&&(e1.data=W)))),(W=e8?t8(e,n):n8(e,n))&&(e1=L0(R,"onBeforeInput"),0<e1.length&&(o1=new s6("onBeforeInput","beforeinput",null,n,j),k.push({event:o1,listeners:e1}),o1.data=W)),Z8(k,e,R,n,j)}Wa(k,t)})}function v4(e,t,n){return{instance:e,listener:t,currentTarget:n}}function L0(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=U3(e,n),r!=null&&a.unshift(v4(e,r,c)),r=U3(e,t),r!=null&&a.push(v4(e,r,c))),e.tag===3)return a;e=e.return}return[]}function M3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ia(e,t,n,a,r){for(var c=t._reactName,i=[];n!==null&&n!==a;){var o=n,p=o.alternate,R=o.stateNode;if(o=o.tag,p!==null&&p===a)break;o!==5&&o!==26&&o!==27||R===null||(p=R,r?(R=U3(n,c),R!=null&&i.unshift(v4(n,R,p))):r||(R=U3(n,c),R!=null&&i.push(v4(n,R,p)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var F8=/\r\n?/g,W8=/\u0000|\uFFFD/g;function e7(e){return(typeof e=="string"?e:""+e).replace(F8,`
`).replace(W8,"")}function t7(e,t){return t=e7(t),e7(e)===t}function U0(){}function b1(e,t,n,a,r,c){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$e(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$e(e,""+a);break;case"className":G4(e,"class",a);break;case"tabIndex":G4(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":G4(e,n,a);break;case"style":l6(e,a,c);break;case"data":if(t!=="object"){G4(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=V4(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&b1(e,t,"name",r.name,r,null),b1(e,t,"formEncType",r.formEncType,r,null),b1(e,t,"formMethod",r.formMethod,r,null),b1(e,t,"formTarget",r.formTarget,r,null)):(b1(e,t,"encType",r.encType,r,null),b1(e,t,"method",r.method,r,null),b1(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=V4(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=U0);break;case"onScroll":a!=null&&f1("scroll",e);break;case"onScrollEnd":a!=null&&f1("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=V4(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":f1("beforetoggle",e),f1("toggle",e),j4(e,"popover",a);break;case"xlinkActuate":L2(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":L2(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":L2(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":L2(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":L2(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":L2(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":L2(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":L2(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":L2(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":j4(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wr.get(n)||n,j4(e,n,a))}}function en(e,t,n,a,r,c){switch(n){case"style":l6(e,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?$e(e,a):(typeof a=="number"||typeof a=="bigint")&&$e(e,""+a);break;case"onScroll":a!=null&&f1("scroll",e);break;case"onScrollEnd":a!=null&&f1("scrollend",e);break;case"onClick":a!=null&&(e.onclick=U0);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zn.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[W1]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof a=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):j4(e,n,a)}}}function Q1(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":f1("error",e),f1("load",e);var a=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var i=n[c];if(i!=null)switch(c){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:b1(e,t,c,i,n,null)}}r&&b1(e,t,"srcSet",n.srcSet,n,null),a&&b1(e,t,"src",n.src,n,null);return;case"input":f1("invalid",e);var o=c=i=r=null,p=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var j=n[a];if(j!=null)switch(a){case"name":r=j;break;case"type":i=j;break;case"checked":p=j;break;case"defaultChecked":R=j;break;case"value":c=j;break;case"defaultValue":o=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:b1(e,t,a,j,n,null)}}In(e,c,o,p,R,i,r,!1),Y4(e);return;case"select":f1("invalid",e),a=i=c=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":c=o;break;case"defaultValue":i=o;break;case"multiple":a=o;default:b1(e,t,r,o,n,null)}t=c,n=i,e.multiple=!!a,t!=null?Je(e,!!a,t,!1):n!=null&&Je(e,!!a,n,!0);return;case"textarea":f1("invalid",e),c=r=a=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":a=o;break;case"defaultValue":r=o;break;case"children":c=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:b1(e,t,i,o,n,null)}t6(e,a,r,c),Y4(e);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:b1(e,t,p,a,n,null)}return;case"dialog":f1("beforetoggle",e),f1("toggle",e),f1("cancel",e),f1("close",e);break;case"iframe":case"object":f1("load",e);break;case"video":case"audio":for(a=0;a<E4.length;a++)f1(E4[a],e);break;case"image":f1("error",e),f1("load",e);break;case"details":f1("toggle",e);break;case"embed":case"source":case"link":f1("error",e),f1("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:b1(e,t,R,a,n,null)}return;default:if(Et(t)){for(j in n)n.hasOwnProperty(j)&&(a=n[j],a!==void 0&&en(e,t,j,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&b1(e,t,o,a,n,null))}function P8(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,i=null,o=null,p=null,R=null,j=null;for(L in n){var k=n[L];if(n.hasOwnProperty(L)&&k!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":p=k;default:a.hasOwnProperty(L)||b1(e,t,L,null,a,k)}}for(var O in a){var L=a[O];if(k=n[O],a.hasOwnProperty(O)&&(L!=null||k!=null))switch(O){case"type":c=L;break;case"name":r=L;break;case"checked":R=L;break;case"defaultChecked":j=L;break;case"value":i=L;break;case"defaultValue":o=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:L!==k&&b1(e,t,O,L,a,k)}}ht(e,i,o,p,R,j,c,r);return;case"select":L=i=o=O=null;for(c in n)if(p=n[c],n.hasOwnProperty(c)&&p!=null)switch(c){case"value":break;case"multiple":L=p;default:a.hasOwnProperty(c)||b1(e,t,c,null,a,p)}for(r in a)if(c=a[r],p=n[r],a.hasOwnProperty(r)&&(c!=null||p!=null))switch(r){case"value":O=c;break;case"defaultValue":o=c;break;case"multiple":i=c;default:c!==p&&b1(e,t,r,c,a,p)}t=o,n=i,a=L,O!=null?Je(e,!!n,O,!1):!!a!=!!n&&(t!=null?Je(e,!!n,t,!0):Je(e,!!n,n?[]:"",!1));return;case"textarea":L=O=null;for(o in n)if(r=n[o],n.hasOwnProperty(o)&&r!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:b1(e,t,o,null,a,r)}for(i in a)if(r=a[i],c=n[i],a.hasOwnProperty(i)&&(r!=null||c!=null))switch(i){case"value":O=r;break;case"defaultValue":L=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==c&&b1(e,t,i,r,a,c)}e6(e,O,L);return;case"option":for(var l1 in n)if(O=n[l1],n.hasOwnProperty(l1)&&O!=null&&!a.hasOwnProperty(l1))switch(l1){case"selected":e.selected=!1;break;default:b1(e,t,l1,null,a,O)}for(p in a)if(O=a[p],L=n[p],a.hasOwnProperty(p)&&O!==L&&(O!=null||L!=null))switch(p){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:b1(e,t,p,O,a,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)O=n[I],n.hasOwnProperty(I)&&O!=null&&!a.hasOwnProperty(I)&&b1(e,t,I,null,a,O);for(R in a)if(O=a[R],L=n[R],a.hasOwnProperty(R)&&O!==L&&(O!=null||L!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:b1(e,t,R,O,a,L)}return;default:if(Et(t)){for(var S1 in n)O=n[S1],n.hasOwnProperty(S1)&&O!==void 0&&!a.hasOwnProperty(S1)&&en(e,t,S1,void 0,a,O);for(j in a)O=a[j],L=n[j],!a.hasOwnProperty(j)||O===L||O===void 0&&L===void 0||en(e,t,j,O,a,L);return}}for(var T in n)O=n[T],n.hasOwnProperty(T)&&O!=null&&!a.hasOwnProperty(T)&&b1(e,t,T,null,a,O);for(k in a)O=a[k],L=n[k],!a.hasOwnProperty(k)||O===L||O==null&&L==null||b1(e,t,k,O,a,L)}var tn=null,nn=null;function B0(e){return e.nodeType===9?e:e.ownerDocument}function n7(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l7(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ln(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var an=null;function I8(){var e=window.event;return e&&e.type==="popstate"?e===an?!1:(an=e,!0):(an=null,!1)}var a7=typeof setTimeout=="function"?setTimeout:void 0,e9=typeof clearTimeout=="function"?clearTimeout:void 0,r7=typeof Promise=="function"?Promise:void 0,t9=typeof queueMicrotask=="function"?queueMicrotask:typeof r7<"u"?function(e){return r7.resolve(null).then(e).catch(n9)}:a7;function n9(e){setTimeout(function(){throw e})}function Ee(e){return e==="head"}function c7(e,t){var n=t,a=0,r=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<a&&8>a){n=a;var i=e.ownerDocument;if(n&1&&z4(i.documentElement),n&2&&z4(i.body),n&4)for(n=i.head,z4(n),i=n.firstChild;i;){var o=i.nextSibling,p=i.nodeName;i[O3]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}if(r===0){e.removeChild(c),A4(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=c}while(n);A4(t)}function rn(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":rn(n),ot(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function l9(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[O3])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=M2(e.nextSibling),e===null)break}return null}function a9(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=M2(e.nextSibling),e===null))return null;return e}function cn(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function r9(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function M2(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var un=null;function u7(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function i7(e,t,n){switch(t=B0(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function z4(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ot(e)}var y2=new Map,s7=new Set;function q0(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var J2=K.d;K.d={f:c9,r:u9,D:i9,C:s9,L:o9,m:m9,X:d9,S:f9,M:h9};function c9(){var e=J2.f(),t=D0();return e||t}function u9(e){var t=Xe(e);t!==null&&t.tag===5&&t.type==="form"?Cl(t):J2.r(e)}var N3=typeof document>"u"?null:document;function o7(e,t,n){var a=N3;if(a&&typeof t=="string"&&t){var r=d2(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),s7.has(r)||(s7.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Q1(t,"link",e),j1(t),a.head.appendChild(t)))}}function i9(e){J2.D(e),o7("dns-prefetch",e,null)}function s9(e,t){J2.C(e,t),o7("preconnect",e,t)}function o9(e,t,n){J2.L(e,t,n);var a=N3;if(a&&e&&t){var r='link[rel="preload"][as="'+d2(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+d2(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+d2(n.imageSizes)+'"]')):r+='[href="'+d2(e)+'"]';var c=r;switch(t){case"style":c=T3(e);break;case"script":c=A3(e)}y2.has(c)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),y2.set(c,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(g4(c))||t==="script"&&a.querySelector(y4(c))||(t=a.createElement("link"),Q1(t,"link",e),j1(t),a.head.appendChild(t)))}}function m9(e,t){J2.m(e,t);var n=N3;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+d2(a)+'"][href="'+d2(e)+'"]',c=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=A3(e)}if(!y2.has(c)&&(e=N({rel:"modulepreload",href:e},t),y2.set(c,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(y4(c)))return}a=n.createElement("link"),Q1(a,"link",e),j1(a),n.head.appendChild(a)}}}function f9(e,t,n){J2.S(e,t,n);var a=N3;if(a&&e){var r=Qe(a).hoistableStyles,c=T3(e);t=t||"default";var i=r.get(c);if(!i){var o={loading:0,preload:null};if(i=a.querySelector(g4(c)))o.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=y2.get(c))&&sn(e,n);var p=i=a.createElement("link");j1(p),Q1(p,"link",e),p._p=new Promise(function(R,j){p.onload=R,p.onerror=j}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,H0(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:o},r.set(c,i)}}}function d9(e,t){J2.X(e,t);var n=N3;if(n&&e){var a=Qe(n).hoistableScripts,r=A3(e),c=a.get(r);c||(c=n.querySelector(y4(r)),c||(e=N({src:e,async:!0},t),(t=y2.get(r))&&on(e,t),c=n.createElement("script"),j1(c),Q1(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function h9(e,t){J2.M(e,t);var n=N3;if(n&&e){var a=Qe(n).hoistableScripts,r=A3(e),c=a.get(r);c||(c=n.querySelector(y4(r)),c||(e=N({src:e,async:!0,type:"module"},t),(t=y2.get(r))&&on(e,t),c=n.createElement("script"),j1(c),Q1(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(r,c))}}function m7(e,t,n,a){var r=(r=r1.current)?q0(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=T3(n.href),n=Qe(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=T3(n.href);var c=Qe(r).hoistableStyles,i=c.get(e);if(i||(r=r.ownerDocument||r,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,i),(c=r.querySelector(g4(e)))&&!c._p&&(i.instance=c,i.state.loading=5),y2.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},y2.set(e,n),c||p9(r,e,n,i.state))),t&&a===null)throw Error(s(528,""));return i}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=A3(n),n=Qe(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function T3(e){return'href="'+d2(e)+'"'}function g4(e){return'link[rel="stylesheet"]['+e+"]"}function f7(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function p9(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Q1(t,"link",n),j1(t),e.head.appendChild(t))}function A3(e){return'[src="'+d2(e)+'"]'}function y4(e){return"script[async]"+e}function d7(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+d2(n.href)+'"]');if(a)return t.instance=a,j1(a),a;var r=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),j1(a),Q1(a,"style",r),H0(a,n.precedence,e),t.instance=a;case"stylesheet":r=T3(n.href);var c=e.querySelector(g4(r));if(c)return t.state.loading|=4,t.instance=c,j1(c),c;a=f7(n),(r=y2.get(r))&&sn(a,r),c=(e.ownerDocument||e).createElement("link"),j1(c);var i=c;return i._p=new Promise(function(o,p){i.onload=o,i.onerror=p}),Q1(c,"link",a),t.state.loading|=4,H0(c,n.precedence,e),t.instance=c;case"script":return c=A3(n.src),(r=e.querySelector(y4(c)))?(t.instance=r,j1(r),r):(a=n,(r=y2.get(c))&&(a=N({},n),on(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),j1(r),Q1(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,H0(a,n.precedence,e));return t.instance}function H0(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,c=r,i=0;i<a.length;i++){var o=a[i];if(o.dataset.precedence===t)c=o;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function sn(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function on(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var j0=null;function h7(e,t,n){if(j0===null){var a=new Map,r=j0=new Map;r.set(n,a)}else r=j0,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[O3]||c[K1]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var i=c.getAttribute(t)||"";i=e+i;var o=a.get(i);o?o.push(c):a.set(i,[c])}}return a}function p7(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function E9(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function E7(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var b4=null;function v9(){}function z9(e,t,n){if(b4===null)throw Error(s(475));var a=b4;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=T3(n.href),c=e.querySelector(g4(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=G0.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=c,j1(c);return}c=e.ownerDocument||e,n=f7(n),(r=y2.get(r))&&sn(n,r),c=c.createElement("link"),j1(c);var i=c;i._p=new Promise(function(o,p){i.onload=o,i.onerror=p}),Q1(c,"link",n),t.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=G0.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function g9(){if(b4===null)throw Error(s(475));var e=b4;return e.stylesheets&&e.count===0&&mn(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&mn(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function G0(){if(this.count--,this.count===0){if(this.stylesheets)mn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Y0=null;function mn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Y0=new Map,t.forEach(y9,e),Y0=null,G0.call(e))}function y9(e,t){if(!(t.state.loading&4)){var n=Y0.get(e);if(n)var a=n.get(null);else{n=new Map,Y0.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var i=r[c];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),a=i)}a&&n.set(null,a)}r=t.instance,i=r.getAttribute("data-precedence"),c=n.get(i)||a,c===a&&n.set(null,r),n.set(i,r),this.count++,a=G0.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var S4={$$typeof:U,Provider:null,Consumer:null,_currentValue:n1,_currentValue2:n1,_threadCount:0};function b9(e,t,n,a,r,c,i,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function v7(e,t,n,a,r,c,i,o,p,R,j,k){return e=new b9(e,t,n,i,o,p,R,k),t=1,c===!0&&(t|=24),c=c2(3,null,null,t),e.current=c,c.stateNode=e,t=Qt(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:a,isDehydrated:n,cache:t},$t(c),e}function z7(e){return e?(e=l3,e):l3}function g7(e,t,n,a,r,c){r=z7(r),a.context===null?a.context=r:a.pendingContext=r,a=le(t),a.payload={element:n},c=c===void 0?null:c,c!==null&&(a.callback=c),n=ae(e,a,t),n!==null&&(m2(n,e,t),P3(n,e,t))}function y7(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fn(e,t){y7(e,t),(e=e.alternate)&&y7(e,t)}function b7(e){if(e.tag===13){var t=n3(e,67108864);t!==null&&m2(t,e,67108864),fn(e,67108864)}}var k0=!0;function S9(e,t,n,a){var r=G.T;G.T=null;var c=K.p;try{K.p=2,dn(e,t,n,a)}finally{K.p=c,G.T=r}}function M9(e,t,n,a){var r=G.T;G.T=null;var c=K.p;try{K.p=8,dn(e,t,n,a)}finally{K.p=c,G.T=r}}function dn(e,t,n,a){if(k0){var r=hn(a);if(r===null)I5(e,t,a,V0,n),M7(e,a);else if(T9(r,e,t,n,a))a.stopPropagation();else if(M7(e,a),t&4&&-1<N9.indexOf(e)){for(;r!==null;){var c=Xe(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var i=Ne(c.pendingLanes);if(i!==0){var o=c;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var p=1<<31-a2(i);o.entanglements[1]|=p,i&=~p}_2(c),(z1&6)===0&&(A0=w2()+500,p4(0))}}break;case 13:o=n3(c,2),o!==null&&m2(o,c,2),D0(),fn(c,2)}if(c=hn(a),c===null&&I5(e,t,a,V0,n),c===r)break;r=c}r!==null&&a.stopPropagation()}else I5(e,t,a,null,n)}}function hn(e){return e=zt(e),pn(e)}var V0=null;function pn(e){if(V0=null,e=Ve(e),e!==null){var t=v(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return V0=e,null}function S7(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sr()){case Bn:return 2;case qn:return 8;case U4:case or:return 32;case Hn:return 268435456;default:return 32}default:return 32}}var En=!1,ve=null,ze=null,ge=null,M4=new Map,N4=new Map,ye=[],N9="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M7(e,t){switch(e){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":ze=null;break;case"mouseover":case"mouseout":ge=null;break;case"pointerover":case"pointerout":M4.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":N4.delete(t.pointerId)}}function T4(e,t,n,a,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Xe(t),t!==null&&b7(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function T9(e,t,n,a,r){switch(t){case"focusin":return ve=T4(ve,e,t,n,a,r),!0;case"dragenter":return ze=T4(ze,e,t,n,a,r),!0;case"mouseover":return ge=T4(ge,e,t,n,a,r),!0;case"pointerover":var c=r.pointerId;return M4.set(c,T4(M4.get(c)||null,e,t,n,a,r)),!0;case"gotpointercapture":return c=r.pointerId,N4.set(c,T4(N4.get(c)||null,e,t,n,a,r)),!0}return!1}function N7(e){var t=Ve(e.target);if(t!==null){var n=v(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,zr(e.priority,function(){if(n.tag===13){var a=o2();a=ut(a);var r=n3(n,a);r!==null&&m2(r,n,a),fn(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function X0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hn(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);vt=a,n.target.dispatchEvent(a),vt=null}else return t=Xe(n),t!==null&&b7(t),e.blockedOn=n,!1;t.shift()}return!0}function T7(e,t,n){X0(e)&&n.delete(t)}function A9(){En=!1,ve!==null&&X0(ve)&&(ve=null),ze!==null&&X0(ze)&&(ze=null),ge!==null&&X0(ge)&&(ge=null),M4.forEach(T7),N4.forEach(T7)}function Q0(e,t){e.blockedOn===t&&(e.blockedOn=null,En||(En=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,A9)))}var Z0=null;function A7(e){Z0!==e&&(Z0=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Z0===e&&(Z0=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(pn(a||n)===null)continue;break}var c=Xe(n);c!==null&&(e.splice(t,3),t-=3,h5(c,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function A4(e){function t(p){return Q0(p,e)}ve!==null&&Q0(ve,e),ze!==null&&Q0(ze,e),ge!==null&&Q0(ge,e),M4.forEach(t),N4.forEach(t);for(var n=0;n<ye.length;n++){var a=ye[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ye.length&&(n=ye[0],n.blockedOn===null);)N7(n),n.blockedOn===null&&ye.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],c=n[a+1],i=r[W1]||null;if(typeof c=="function")i||A7(n);else if(i){var o=null;if(c&&c.hasAttribute("formAction")){if(r=c,i=c[W1]||null)o=i.formAction;else if(pn(r)!==null)continue}else o=i.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),A7(n)}}}function vn(e){this._internalRoot=e}K0.prototype.render=vn.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=o2();g7(n,a,e,t,null,null)},K0.prototype.unmount=vn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;g7(e.current,2,null,e,null,null),D0(),t[ke]=null}};function K0(e){this._internalRoot=e}K0.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ye.length&&t!==0&&t<ye[n].priority;n++);ye.splice(n,0,e),n===0&&N7(e)}};var w7=m.version;if(w7!=="19.1.0")throw Error(s(527,w7,"19.1.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=z(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var w9={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var J0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!J0.isDisabled&&J0.supportsFiber)try{x3=J0.inject(w9),l2=J0}catch{}}return w4.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",r=Vl,c=Xl,i=Ql,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=v7(e,1,!1,null,null,n,a,r,c,i,o,null),e[ke]=t.current,P5(e),new vn(t)},w4.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,r="",c=Vl,i=Xl,o=Ql,p=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=v7(e,1,!0,t,n??null,a,r,c,i,o,p,R),t.context=z7(null),n=t.current,a=o2(),a=ut(a),r=le(a),r.callback=null,ae(n,r,a),n=a,t.current.lanes=n,_3(t,n),_2(t),e[ke]=t.current,P5(e),new K0(t)},w4.version="19.1.0",w4}var U7;function L9(){if(U7)return gn.exports;U7=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),gn.exports=O9(),gn.exports}var U9=L9();const B9=wn(U9);var D4={},B7;function q9(){if(B7)return D4;B7=1,Object.defineProperty(D4,"__esModule",{value:!0}),D4.parse=y,D4.serialize=h;const u=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,m=/^[\u0021-\u003A\u003C-\u007E]*$/,f=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,v=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function y(A,q){const _=new v,C=A.length;if(C<2)return _;const D=q?.decode||N;let E=0;do{const x=A.indexOf("=",E);if(x===-1)break;const U=A.indexOf(";",E),X=U===-1?C:U;if(x>X){E=A.lastIndexOf(";",x-1)+1;continue}const H=M(A,E,x),F=z(A,x,H),t1=A.slice(H,F);if(_[t1]===void 0){let v1=M(A,x+1,X),i1=z(A,X,v1);const Q=D(A.slice(v1,i1));_[t1]=Q}E=X+1}while(E<C);return _}function M(A,q,_){do{const C=A.charCodeAt(q);if(C!==32&&C!==9)return q}while(++q<_);return _}function z(A,q,_){for(;q>_;){const C=A.charCodeAt(--q);if(C!==32&&C!==9)return q+1}return _}function h(A,q,_){const C=_?.encode||encodeURIComponent;if(!u.test(A))throw new TypeError(`argument name is invalid: ${A}`);const D=C(q);if(!m.test(D))throw new TypeError(`argument val is invalid: ${q}`);let E=A+"="+D;if(!_)return E;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);E+="; Max-Age="+_.maxAge}if(_.domain){if(!f.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);E+="; Domain="+_.domain}if(_.path){if(!s.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);E+="; Path="+_.path}if(_.expires){if(!B(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);E+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(E+="; HttpOnly"),_.secure&&(E+="; Secure"),_.partitioned&&(E+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return E}function N(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function B(A){return d.call(A)==="[object Date]"}return D4}q9();var q7="popstate";function H9(u={}){function m(s,d){let{pathname:v,search:y,hash:M}=s.location;return Tn("",{pathname:v,search:y,hash:M},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function f(s,d){return typeof d=="string"?d:x4(d)}return G9(m,f,null,u)}function D1(u,m){if(u===!1||u===null||typeof u>"u")throw new Error(m)}function N2(u,m){if(!u){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function j9(){return Math.random().toString(36).substring(2,10)}function H7(u,m){return{usr:u.state,key:u.key,idx:m}}function Tn(u,m,f=null,s){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof m=="string"?w3(m):m,state:f,key:m&&m.key||s||j9()}}function x4({pathname:u="/",search:m="",hash:f=""}){return m&&m!=="?"&&(u+=m.charAt(0)==="?"?m:"?"+m),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function w3(u){let m={};if(u){let f=u.indexOf("#");f>=0&&(m.hash=u.substring(f),u=u.substring(0,f));let s=u.indexOf("?");s>=0&&(m.search=u.substring(s),u=u.substring(0,s)),u&&(m.pathname=u)}return m}function G9(u,m,f,s={}){let{window:d=document.defaultView,v5Compat:v=!1}=s,y=d.history,M="POP",z=null,h=N();h==null&&(h=0,y.replaceState({...y.state,idx:h},""));function N(){return(y.state||{idx:null}).idx}function B(){M="POP";let D=N(),E=D==null?null:D-h;h=D,z&&z({action:M,location:C.location,delta:E})}function A(D,E){M="PUSH";let x=Tn(C.location,D,E);h=N()+1;let U=H7(x,h),X=C.createHref(x);try{y.pushState(U,"",X)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;d.location.assign(X)}v&&z&&z({action:M,location:C.location,delta:1})}function q(D,E){M="REPLACE";let x=Tn(C.location,D,E);h=N();let U=H7(x,h),X=C.createHref(x);y.replaceState(U,"",X),v&&z&&z({action:M,location:C.location,delta:0})}function _(D){return Y9(D)}let C={get action(){return M},get location(){return u(d,y)},listen(D){if(z)throw new Error("A history only accepts one active listener");return d.addEventListener(q7,B),z=D,()=>{d.removeEventListener(q7,B),z=null}},createHref(D){return m(d,D)},createURL:_,encodeLocation(D){let E=_(D);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:A,replace:q,go(D){return y.go(D)}};return C}function Y9(u,m=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),D1(f,"No window.location.(origin|href) available to create URL");let s=typeof u=="string"?u:x4(u);return s=s.replace(/ $/,"%20"),!m&&s.startsWith("//")&&(s=f+s),new URL(s,f)}function V7(u,m,f="/"){return k9(u,m,f,!1)}function k9(u,m,f,s){let d=typeof m=="string"?w3(m):m,v=F2(d.pathname||"/",f);if(v==null)return null;let y=X7(u);V9(y);let M=null;for(let z=0;M==null&&z<y.length;++z){let h=ec(v);M=P9(y[z],h,s)}return M}function X7(u,m=[],f=[],s=""){let d=(v,y,M)=>{let z={relativePath:M===void 0?v.path||"":M,caseSensitive:v.caseSensitive===!0,childrenIndex:y,route:v};z.relativePath.startsWith("/")&&(D1(z.relativePath.startsWith(s),`Absolute route path "${z.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(s.length));let h=$2([s,z.relativePath]),N=f.concat(z);v.children&&v.children.length>0&&(D1(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),X7(v.children,m,N,h)),!(v.path==null&&!v.index)&&m.push({path:h,score:F9(h,v.index),routesMeta:N})};return u.forEach((v,y)=>{if(v.path===""||!v.path?.includes("?"))d(v,y);else for(let M of Q7(v.path))d(v,y,M)}),m}function Q7(u){let m=u.split("/");if(m.length===0)return[];let[f,...s]=m,d=f.endsWith("?"),v=f.replace(/\?$/,"");if(s.length===0)return d?[v,""]:[v];let y=Q7(s.join("/")),M=[];return M.push(...y.map(z=>z===""?v:[v,z].join("/"))),d&&M.push(...y),M.map(z=>u.startsWith("/")&&z===""?"/":z)}function V9(u){u.sort((m,f)=>m.score!==f.score?f.score-m.score:W9(m.routesMeta.map(s=>s.childrenIndex),f.routesMeta.map(s=>s.childrenIndex)))}var X9=/^:[\w-]+$/,Q9=3,Z9=2,K9=1,J9=10,$9=-2,j7=u=>u==="*";function F9(u,m){let f=u.split("/"),s=f.length;return f.some(j7)&&(s+=$9),m&&(s+=Z9),f.filter(d=>!j7(d)).reduce((d,v)=>d+(X9.test(v)?Q9:v===""?K9:J9),s)}function W9(u,m){return u.length===m.length&&u.slice(0,-1).every((s,d)=>s===m[d])?u[u.length-1]-m[m.length-1]:0}function P9(u,m,f=!1){let{routesMeta:s}=u,d={},v="/",y=[];for(let M=0;M<s.length;++M){let z=s[M],h=M===s.length-1,N=v==="/"?m:m.slice(v.length)||"/",B=P0({path:z.relativePath,caseSensitive:z.caseSensitive,end:h},N),A=z.route;if(!B&&h&&f&&!s[s.length-1].route.index&&(B=P0({path:z.relativePath,caseSensitive:z.caseSensitive,end:!1},N)),!B)return null;Object.assign(d,B.params),y.push({params:d,pathname:$2([v,B.pathname]),pathnameBase:ac($2([v,B.pathnameBase])),route:A}),B.pathnameBase!=="/"&&(v=$2([v,B.pathnameBase]))}return y}function P0(u,m){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,s]=I9(u.path,u.caseSensitive,u.end),d=m.match(f);if(!d)return null;let v=d[0],y=v.replace(/(.)\/+$/,"$1"),M=d.slice(1);return{params:s.reduce((h,{paramName:N,isOptional:B},A)=>{if(N==="*"){let _=M[A]||"";y=v.slice(0,v.length-_.length).replace(/(.)\/+$/,"$1")}const q=M[A];return B&&!q?h[N]=void 0:h[N]=(q||"").replace(/%2F/g,"/"),h},{}),pathname:v,pathnameBase:y,pattern:u}}function I9(u,m=!1,f=!0){N2(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let s=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,M,z)=>(s.push({paramName:M,isOptional:z!=null}),z?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(s.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,m?void 0:"i"),s]}function ec(u){try{return u.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return N2(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),u}}function F2(u,m){if(m==="/")return u;if(!u.toLowerCase().startsWith(m.toLowerCase()))return null;let f=m.endsWith("/")?m.length-1:m.length,s=u.charAt(f);return s&&s!=="/"?null:u.slice(f)||"/"}function tc(u,m="/"){let{pathname:f,search:s="",hash:d=""}=typeof u=="string"?w3(u):u;return{pathname:f?f.startsWith("/")?f:nc(f,m):m,search:rc(s),hash:cc(d)}}function nc(u,m){let f=m.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function Mn(u,m,f,s){return`Cannot include a '${u}' character in a manually specified \`to.${m}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lc(u){return u.filter((m,f)=>f===0||m.route.path&&m.route.path.length>0)}function Cn(u){let m=lc(u);return m.map((f,s)=>s===m.length-1?f.pathname:f.pathnameBase)}function xn(u,m,f,s=!1){let d;typeof u=="string"?d=w3(u):(d={...u},D1(!d.pathname||!d.pathname.includes("?"),Mn("?","pathname","search",d)),D1(!d.pathname||!d.pathname.includes("#"),Mn("#","pathname","hash",d)),D1(!d.search||!d.search.includes("#"),Mn("#","search","hash",d)));let v=u===""||d.pathname==="",y=v?"/":d.pathname,M;if(y==null)M=f;else{let B=m.length-1;if(!s&&y.startsWith("..")){let A=y.split("/");for(;A[0]==="..";)A.shift(),B-=1;d.pathname=A.join("/")}M=B>=0?m[B]:"/"}let z=tc(d,M),h=y&&y!=="/"&&y.endsWith("/"),N=(v||y===".")&&f.endsWith("/");return!z.pathname.endsWith("/")&&(h||N)&&(z.pathname+="/"),z}var $2=u=>u.join("/").replace(/\/\/+/g,"/"),ac=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),rc=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,cc=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function uc(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var Z7=["POST","PUT","PATCH","DELETE"];new Set(Z7);var ic=["GET",...Z7];new Set(ic);var D3=g.createContext(null);D3.displayName="DataRouter";var I0=g.createContext(null);I0.displayName="DataRouterState";var K7=g.createContext({isTransitioning:!1});K7.displayName="ViewTransition";var sc=g.createContext(new Map);sc.displayName="Fetchers";var oc=g.createContext(null);oc.displayName="Await";var T2=g.createContext(null);T2.displayName="Navigation";var R4=g.createContext(null);R4.displayName="Location";var A2=g.createContext({outlet:null,matches:[],isDataRoute:!1});A2.displayName="Route";var Rn=g.createContext(null);Rn.displayName="RouteError";function mc(u,{relative:m}={}){D1(C3(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:s}=g.useContext(T2),{hash:d,pathname:v,search:y}=_4(u,{relative:m}),M=v;return f!=="/"&&(M=v==="/"?f:$2([f,v])),s.createHref({pathname:M,search:y,hash:d})}function C3(){return g.useContext(R4)!=null}function Se(){return D1(C3(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(R4).location}var J7="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $7(u){g.useContext(T2).static||g.useLayoutEffect(u)}function et(){let{isDataRoute:u}=g.useContext(A2);return u?Ac():fc()}function fc(){D1(C3(),"useNavigate() may be used only in the context of a <Router> component.");let u=g.useContext(D3),{basename:m,navigator:f}=g.useContext(T2),{matches:s}=g.useContext(A2),{pathname:d}=Se(),v=JSON.stringify(Cn(s)),y=g.useRef(!1);return $7(()=>{y.current=!0}),g.useCallback((z,h={})=>{if(N2(y.current,J7),!y.current)return;if(typeof z=="number"){f.go(z);return}let N=xn(z,JSON.parse(v),d,h.relative==="path");u==null&&m!=="/"&&(N.pathname=N.pathname==="/"?m:$2([m,N.pathname])),(h.replace?f.replace:f.push)(N,h.state,h)},[m,f,v,d,u])}var dc=g.createContext(null);function hc(u){let m=g.useContext(A2).outlet;return m&&g.createElement(dc.Provider,{value:u},m)}function _4(u,{relative:m}={}){let{matches:f}=g.useContext(A2),{pathname:s}=Se(),d=JSON.stringify(Cn(f));return g.useMemo(()=>xn(u,JSON.parse(d),s,m==="path"),[u,d,s,m])}function pc(u,m){return F7(u,m)}function F7(u,m,f,s){D1(C3(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=g.useContext(T2),{matches:v}=g.useContext(A2),y=v[v.length-1],M=y?y.params:{},z=y?y.pathname:"/",h=y?y.pathnameBase:"/",N=y&&y.route;{let E=N&&N.path||"";W7(z,!N||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${z}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let B=Se(),A;if(m){let E=typeof m=="string"?w3(m):m;D1(h==="/"||E.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${E.pathname}" was given in the \`location\` prop.`),A=E}else A=B;let q=A.pathname||"/",_=q;if(h!=="/"){let E=h.replace(/^\//,"").split("/");_="/"+q.replace(/^\//,"").split("/").slice(E.length).join("/")}let C=V7(u,{pathname:_});N2(N||C!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),N2(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=yc(C&&C.map(E=>Object.assign({},E,{params:Object.assign({},M,E.params),pathname:$2([h,d.encodeLocation?d.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?h:$2([h,d.encodeLocation?d.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),v,f,s);return m&&D?g.createElement(R4.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},D):D}function Ec(){let u=Tc(),m=uc(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},v={padding:"2px 4px",backgroundColor:s},y=null;return console.error("Error handled by React Router default ErrorBoundary:",u),y=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:v},"ErrorBoundary")," or"," ",g.createElement("code",{style:v},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},m),f?g.createElement("pre",{style:d},f):null,y)}var vc=g.createElement(Ec,null),zc=class extends g.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,m){return m.location!==u.location||m.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:m.error,location:m.location,revalidation:u.revalidation||m.revalidation}}componentDidCatch(u,m){console.error("React Router caught the following error during render",u,m)}render(){return this.state.error!==void 0?g.createElement(A2.Provider,{value:this.props.routeContext},g.createElement(Rn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gc({routeContext:u,match:m,children:f}){let s=g.useContext(D3);return s&&s.static&&s.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=m.route.id),g.createElement(A2.Provider,{value:u},f)}function yc(u,m=[],f=null,s=null){if(u==null){if(!f)return null;if(f.errors)u=f.matches;else if(m.length===0&&!f.initialized&&f.matches.length>0)u=f.matches;else return null}let d=u,v=f?.errors;if(v!=null){let z=d.findIndex(h=>h.route.id&&v?.[h.route.id]!==void 0);D1(z>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),d=d.slice(0,Math.min(d.length,z+1))}let y=!1,M=-1;if(f)for(let z=0;z<d.length;z++){let h=d[z];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(M=z),h.route.id){let{loaderData:N,errors:B}=f,A=h.route.loader&&!N.hasOwnProperty(h.route.id)&&(!B||B[h.route.id]===void 0);if(h.route.lazy||A){y=!0,M>=0?d=d.slice(0,M+1):d=[d[0]];break}}}return d.reduceRight((z,h,N)=>{let B,A=!1,q=null,_=null;f&&(B=v&&h.route.id?v[h.route.id]:void 0,q=h.route.errorElement||vc,y&&(M<0&&N===0?(W7("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,_=null):M===N&&(A=!0,_=h.route.hydrateFallbackElement||null)));let C=m.concat(d.slice(0,N+1)),D=()=>{let E;return B?E=q:A?E=_:h.route.Component?E=g.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=z,g.createElement(gc,{match:h,routeContext:{outlet:z,matches:C,isDataRoute:f!=null},children:E})};return f&&(h.route.ErrorBoundary||h.route.errorElement||N===0)?g.createElement(zc,{location:f.location,revalidation:f.revalidation,component:q,error:B,children:D(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):D()},null)}function _n(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bc(u){let m=g.useContext(D3);return D1(m,_n(u)),m}function Sc(u){let m=g.useContext(I0);return D1(m,_n(u)),m}function Mc(u){let m=g.useContext(A2);return D1(m,_n(u)),m}function On(u){let m=Mc(u),f=m.matches[m.matches.length-1];return D1(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function Nc(){return On("useRouteId")}function Tc(){let u=g.useContext(Rn),m=Sc("useRouteError"),f=On("useRouteError");return u!==void 0?u:m.errors?.[f]}function Ac(){let{router:u}=bc("useNavigate"),m=On("useNavigate"),f=g.useRef(!1);return $7(()=>{f.current=!0}),g.useCallback(async(d,v={})=>{N2(f.current,J7),f.current&&(typeof d=="number"?u.navigate(d):await u.navigate(d,{fromRouteId:m,...v}))},[u,m])}var G7={};function W7(u,m,f){!m&&!G7[u]&&(G7[u]=!0,N2(!1,f))}g.memo(wc);function wc({routes:u,future:m,state:f}){return F7(u,void 0,f,m)}function P7({to:u,replace:m,state:f,relative:s}){D1(C3(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=g.useContext(T2);N2(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:v}=g.useContext(A2),{pathname:y}=Se(),M=et(),z=xn(u,Cn(v),y,s==="path"),h=JSON.stringify(z);return g.useEffect(()=>{M(JSON.parse(h),{replace:m,state:f,relative:s})},[M,h,s,m,f]),null}function Dc(u){return hc(u.context)}function H1(u){D1(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cc({basename:u="/",children:m=null,location:f,navigationType:s="POP",navigator:d,static:v=!1}){D1(!C3(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=u.replace(/^\/*/,"/"),M=g.useMemo(()=>({basename:y,navigator:d,static:v,future:{}}),[y,d,v]);typeof f=="string"&&(f=w3(f));let{pathname:z="/",search:h="",hash:N="",state:B=null,key:A="default"}=f,q=g.useMemo(()=>{let _=F2(z,y);return _==null?null:{location:{pathname:_,search:h,hash:N,state:B,key:A},navigationType:s}},[y,z,h,N,B,A,s]);return N2(q!=null,`<Router basename="${y}"> is not able to match the URL "${z}${h}${N}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:g.createElement(T2.Provider,{value:M},g.createElement(R4.Provider,{children:m,value:q}))}function xc({children:u,location:m}){return pc(An(u),m)}function An(u,m=[]){let f=[];return g.Children.forEach(u,(s,d)=>{if(!g.isValidElement(s))return;let v=[...m,d];if(s.type===g.Fragment){f.push.apply(f,An(s.props.children,v));return}D1(s.type===H1,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D1(!s.props.index||!s.props.children,"An index route cannot have child routes.");let y={id:s.props.id||v.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(y.children=An(s.props.children,v)),f.push(y)}),f}var F0="get",W0="application/x-www-form-urlencoded";function tt(u){return u!=null&&typeof u.tagName=="string"}function Rc(u){return tt(u)&&u.tagName.toLowerCase()==="button"}function _c(u){return tt(u)&&u.tagName.toLowerCase()==="form"}function Oc(u){return tt(u)&&u.tagName.toLowerCase()==="input"}function Lc(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Uc(u,m){return u.button===0&&(!m||m==="_self")&&!Lc(u)}var $0=null;function Bc(){if($0===null)try{new FormData(document.createElement("form"),0),$0=!1}catch{$0=!0}return $0}var qc=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nn(u){return u!=null&&!qc.has(u)?(N2(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${W0}"`),null):u}function Hc(u,m){let f,s,d,v,y;if(_c(u)){let M=u.getAttribute("action");s=M?F2(M,m):null,f=u.getAttribute("method")||F0,d=Nn(u.getAttribute("enctype"))||W0,v=new FormData(u)}else if(Rc(u)||Oc(u)&&(u.type==="submit"||u.type==="image")){let M=u.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let z=u.getAttribute("formaction")||M.getAttribute("action");if(s=z?F2(z,m):null,f=u.getAttribute("formmethod")||M.getAttribute("method")||F0,d=Nn(u.getAttribute("formenctype"))||Nn(M.getAttribute("enctype"))||W0,v=new FormData(M,u),!Bc()){let{name:h,type:N,value:B}=u;if(N==="image"){let A=h?`${h}.`:"";v.append(`${A}x`,"0"),v.append(`${A}y`,"0")}else h&&v.append(h,B)}}else{if(tt(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=F0,s=null,d=W0,y=u}return v&&d==="text/plain"&&(y=v,v=void 0),{action:s,method:f.toLowerCase(),encType:d,formData:v,body:y}}function Ln(u,m){if(u===!1||u===null||typeof u>"u")throw new Error(m)}async function jc(u,m){if(u.id in m)return m[u.id];try{let f=await import(u.module);return m[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gc(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Yc(u,m,f){let s=await Promise.all(u.map(async d=>{let v=m.routes[d.route.id];if(v){let y=await jc(v,f);return y.links?y.links():[]}return[]}));return Qc(s.flat(1).filter(Gc).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Y7(u,m,f,s,d,v){let y=(z,h)=>f[h]?z.route.id!==f[h].route.id:!0,M=(z,h)=>f[h].pathname!==z.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==z.params["*"];return v==="assets"?m.filter((z,h)=>y(z,h)||M(z,h)):v==="data"?m.filter((z,h)=>{let N=s.routes[z.route.id];if(!N||!N.hasLoader)return!1;if(y(z,h)||M(z,h))return!0;if(z.route.shouldRevalidate){let B=z.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:z.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function kc(u,m,{includeHydrateFallback:f}={}){return Vc(u.map(s=>{let d=m.routes[s.route.id];if(!d)return[];let v=[d.module];return d.clientActionModule&&(v=v.concat(d.clientActionModule)),d.clientLoaderModule&&(v=v.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(v=v.concat(d.hydrateFallbackModule)),d.imports&&(v=v.concat(d.imports)),v}).flat(1))}function Vc(u){return[...new Set(u)]}function Xc(u){let m={},f=Object.keys(u).sort();for(let s of f)m[s]=u[s];return m}function Qc(u,m){let f=new Set;return new Set(m),u.reduce((s,d)=>{let v=JSON.stringify(Xc(d));return f.has(v)||(f.add(v),s.push({key:v,link:d})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zc=new Set([100,101,204,205]);function Kc(u,m){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return f.pathname==="/"?f.pathname="_root.data":m&&F2(f.pathname,m)==="/"?f.pathname=`${m.replace(/\/$/,"")}/_root.data`:f.pathname=`${f.pathname.replace(/\/$/,"")}.data`,f}function I7(){let u=g.useContext(D3);return Ln(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Jc(){let u=g.useContext(I0);return Ln(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Un=g.createContext(void 0);Un.displayName="FrameworkContext";function er(){let u=g.useContext(Un);return Ln(u,"You must render this element inside a <HydratedRouter> element"),u}function $c(u,m){let f=g.useContext(Un),[s,d]=g.useState(!1),[v,y]=g.useState(!1),{onFocus:M,onBlur:z,onMouseEnter:h,onMouseLeave:N,onTouchStart:B}=m,A=g.useRef(null);g.useEffect(()=>{if(u==="render"&&y(!0),u==="viewport"){let C=E=>{E.forEach(x=>{y(x.isIntersecting)})},D=new IntersectionObserver(C,{threshold:.5});return A.current&&D.observe(A.current),()=>{D.disconnect()}}},[u]),g.useEffect(()=>{if(s){let C=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(C)}}},[s]);let q=()=>{d(!0)},_=()=>{d(!1),y(!1)};return f?u!=="intent"?[v,A,{}]:[v,A,{onFocus:C4(M,q),onBlur:C4(z,_),onMouseEnter:C4(h,q),onMouseLeave:C4(N,_),onTouchStart:C4(B,q)}]:[!1,A,{}]}function C4(u,m){return f=>{u&&u(f),f.defaultPrevented||m(f)}}function Fc({page:u,...m}){let{router:f}=I7(),s=g.useMemo(()=>V7(f.routes,u,f.basename),[f.routes,u,f.basename]);return s?g.createElement(Pc,{page:u,matches:s,...m}):null}function Wc(u){let{manifest:m,routeModules:f}=er(),[s,d]=g.useState([]);return g.useEffect(()=>{let v=!1;return Yc(u,m,f).then(y=>{v||d(y)}),()=>{v=!0}},[u,m,f]),s}function Pc({page:u,matches:m,...f}){let s=Se(),{manifest:d,routeModules:v}=er(),{basename:y}=I7(),{loaderData:M,matches:z}=Jc(),h=g.useMemo(()=>Y7(u,m,z,d,s,"data"),[u,m,z,d,s]),N=g.useMemo(()=>Y7(u,m,z,d,s,"assets"),[u,m,z,d,s]),B=g.useMemo(()=>{if(u===s.pathname+s.search+s.hash)return[];let _=new Set,C=!1;if(m.forEach(E=>{let x=d.routes[E.route.id];!x||!x.hasLoader||(!h.some(U=>U.route.id===E.route.id)&&E.route.id in M&&v[E.route.id]?.shouldRevalidate||x.hasClientLoader?C=!0:_.add(E.route.id))}),_.size===0)return[];let D=Kc(u,y);return C&&_.size>0&&D.searchParams.set("_routes",m.filter(E=>_.has(E.route.id)).map(E=>E.route.id).join(",")),[D.pathname+D.search]},[y,M,s,d,h,m,u,v]),A=g.useMemo(()=>kc(N,d),[N,d]),q=Wc(N);return g.createElement(g.Fragment,null,B.map(_=>g.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...f})),A.map(_=>g.createElement("link",{key:_,rel:"modulepreload",href:_,...f})),q.map(({key:_,link:C})=>g.createElement("link",{key:_,...C})))}function Ic(...u){return m=>{u.forEach(f=>{typeof f=="function"?f(m):f!=null&&(f.current=m)})}}var tr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tr&&(window.__reactRouterVersion="7.6.3")}catch{}function eu({basename:u,children:m,window:f}){let s=g.useRef();s.current==null&&(s.current=H9({window:f,v5Compat:!0}));let d=s.current,[v,y]=g.useState({action:d.action,location:d.location}),M=g.useCallback(z=>{g.startTransition(()=>y(z))},[y]);return g.useLayoutEffect(()=>d.listen(M),[d,M]),g.createElement(Cc,{basename:u,children:m,location:v.location,navigationType:v.action,navigator:d})}var nr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lr=g.forwardRef(function({onClick:m,discover:f="render",prefetch:s="none",relative:d,reloadDocument:v,replace:y,state:M,target:z,to:h,preventScrollReset:N,viewTransition:B,...A},q){let{basename:_}=g.useContext(T2),C=typeof h=="string"&&nr.test(h),D,E=!1;if(typeof h=="string"&&C&&(D=h,tr))try{let i1=new URL(window.location.href),Q=h.startsWith("//")?new URL(i1.protocol+h):new URL(h),a1=F2(Q.pathname,_);Q.origin===i1.origin&&a1!=null?h=a1+Q.search+Q.hash:E=!0}catch{N2(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=mc(h,{relative:d}),[U,X,H]=$c(s,A),F=au(h,{replace:y,state:M,target:z,preventScrollReset:N,relative:d,viewTransition:B});function t1(i1){m&&m(i1),i1.defaultPrevented||F(i1)}let v1=g.createElement("a",{...A,...H,href:D||x,onClick:E||v?m:t1,ref:Ic(q,X),target:z,"data-discover":!C&&f==="render"?"true":void 0});return U&&!C?g.createElement(g.Fragment,null,v1,g.createElement(Fc,{page:x})):v1});lr.displayName="Link";var tu=g.forwardRef(function({"aria-current":m="page",caseSensitive:f=!1,className:s="",end:d=!1,style:v,to:y,viewTransition:M,children:z,...h},N){let B=_4(y,{relative:h.relative}),A=Se(),q=g.useContext(I0),{navigator:_,basename:C}=g.useContext(T2),D=q!=null&&su(B)&&M===!0,E=_.encodeLocation?_.encodeLocation(B).pathname:B.pathname,x=A.pathname,U=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;f||(x=x.toLowerCase(),U=U?U.toLowerCase():null,E=E.toLowerCase()),U&&C&&(U=F2(U,C)||U);const X=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let H=x===E||!d&&x.startsWith(E)&&x.charAt(X)==="/",F=U!=null&&(U===E||!d&&U.startsWith(E)&&U.charAt(E.length)==="/"),t1={isActive:H,isPending:F,isTransitioning:D},v1=H?m:void 0,i1;typeof s=="function"?i1=s(t1):i1=[s,H?"active":null,F?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Q=typeof v=="function"?v(t1):v;return g.createElement(lr,{...h,"aria-current":v1,className:i1,ref:N,style:Q,to:y,viewTransition:M},typeof z=="function"?z(t1):z)});tu.displayName="NavLink";var nu=g.forwardRef(({discover:u="render",fetcherKey:m,navigate:f,reloadDocument:s,replace:d,state:v,method:y=F0,action:M,onSubmit:z,relative:h,preventScrollReset:N,viewTransition:B,...A},q)=>{let _=uu(),C=iu(M,{relative:h}),D=y.toLowerCase()==="get"?"get":"post",E=typeof M=="string"&&nr.test(M),x=U=>{if(z&&z(U),U.defaultPrevented)return;U.preventDefault();let X=U.nativeEvent.submitter,H=X?.getAttribute("formmethod")||y;_(X||U.currentTarget,{fetcherKey:m,method:H,navigate:f,replace:d,state:v,relative:h,preventScrollReset:N,viewTransition:B})};return g.createElement("form",{ref:q,method:D,action:C,onSubmit:s?z:x,...A,"data-discover":!E&&u==="render"?"true":void 0})});nu.displayName="Form";function lu(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ar(u){let m=g.useContext(D3);return D1(m,lu(u)),m}function au(u,{target:m,replace:f,state:s,preventScrollReset:d,relative:v,viewTransition:y}={}){let M=et(),z=Se(),h=_4(u,{relative:v});return g.useCallback(N=>{if(Uc(N,m)){N.preventDefault();let B=f!==void 0?f:x4(z)===x4(h);M(u,{replace:B,state:s,preventScrollReset:d,relative:v,viewTransition:y})}},[z,M,h,f,s,m,u,d,v,y])}var ru=0,cu=()=>`__${String(++ru)}__`;function uu(){let{router:u}=ar("useSubmit"),{basename:m}=g.useContext(T2),f=Nc();return g.useCallback(async(s,d={})=>{let{action:v,method:y,encType:M,formData:z,body:h}=Hc(s,m);if(d.navigate===!1){let N=d.fetcherKey||cu();await u.fetch(N,f,d.action||v,{preventScrollReset:d.preventScrollReset,formData:z,body:h,formMethod:d.method||y,formEncType:d.encType||M,flushSync:d.flushSync})}else await u.navigate(d.action||v,{preventScrollReset:d.preventScrollReset,formData:z,body:h,formMethod:d.method||y,formEncType:d.encType||M,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[u,m,f])}function iu(u,{relative:m}={}){let{basename:f}=g.useContext(T2),s=g.useContext(A2);D1(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),v={..._4(u||".",{relative:m})},y=Se();if(u==null){v.search=y.search;let M=new URLSearchParams(v.search),z=M.getAll("index");if(z.some(N=>N==="")){M.delete("index"),z.filter(B=>B).forEach(B=>M.append("index",B));let N=M.toString();v.search=N?`?${N}`:""}}return(!u||u===".")&&d.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(v.pathname=v.pathname==="/"?f:$2([f,v.pathname])),x4(v)}function su(u,m={}){let f=g.useContext(K7);D1(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ar("useViewTransitionState"),d=_4(u,{relative:m.relative});if(!f.isTransitioning)return!1;let v=F2(f.currentLocation.pathname,s)||f.currentLocation.pathname,y=F2(f.nextLocation.pathname,s)||f.nextLocation.pathname;return P0(d.pathname,y)!=null||P0(d.pathname,v)!=null}[...Zc];var ou=k7();const rr=wn(ou);function mu(){const[u,m]=g.useState(!1),[f,s]=g.useState(null),[d,v]=g.useState(!1),[y,M]=g.useState(null),z="https://www.lecameo17.fr/api",h=[{id:1,name:"Boissons Chaudes"},{id:3,name:"Pâtisseries"},{id:2,name:"Boissons Froides"},{id:5,name:"Offre de Saison"},{id:4,name:"Carte des Thés"},{id:6,name:"Nouveautés"}],N=async A=>{v(!0),M(null);try{const q=await fetch(`${z}/contain?collection=${A}`);if(!q.ok)throw new Error("Erreur lors de la récupération des produits");const _=await q.json(),C=h.find(D=>D.id===A);s({info_collection:{id:A,nom:C.name},produits:_}),m(!0)}catch(q){M(q.message)}finally{v(!1)}},B=()=>{m(!1),s(null)};return l.createElement("div",{className:"page",style:{backgroundColor:"whitesmoke"}},l.createElement("h2",{className:"shopTitle2"},"La carte du salon"),l.createElement("p",{className:"introMenu"},"Découvrez toutes les douceurs à venir déguster sur place."),l.createElement("div",{className:"menuGrid"},h.filter(A=>A.id!==6||A.items&&A.items.length>0).map(A=>l.createElement("div",{key:A.id,className:"menuCase",onClick:()=>N(A.id)},A.name))),u&&l.createElement("div",{className:"modal-overlay",onClick:B},l.createElement("div",{className:"modal-content modaleMenu",onClick:A=>A.stopPropagation()},l.createElement("button",{className:"close-button",onClick:B},"×"),d&&l.createElement("p",null,"Chargement..."),y&&l.createElement("p",null,"Erreur: ",y),f&&f.produits&&l.createElement("div",null,l.createElement("h3",{className:"titreMenuCollection"},f.info_collection.nom),l.createElement("ul",{className:"menuModale"},f.produits.map((A,q)=>l.createElement("li",{key:A.product_id||q},l.createElement("div",{className:"itemMenuDiv"},l.createElement("span",{className:"itemGauche"},A[":name"]||A.product_name),f.info_collection.id!==4&&l.createElement("span",{className:"itemDroit"},A[":price"]||A.product_price,"€")),f.info_collection.id===4&&(A[":ingredients"]||A.product_ingredients)&&l.createElement("p",{className:"ingredientsText"},A[":ingredients"]||A.product_ingredients))))))))}const fu="/assets/kodama-BS50slT5.gif";function du(){const[u,m]=g.useState(null),[f,s]=g.useState(null),[d,v]=g.useState(null),[y,M]=g.useState(!0),z="https://www.lecameo17.fr/api";g.useEffect(()=>{(async()=>{try{const A=await(await fetch(`${z}/weekly`)).json();m(A);const q=await fetch(`${z}/media?weekly`);if(q.ok){const C=await q.json();s(C)}const _=await fetch(`${z}/media?video=weekly`);if(_.ok){const C=await _.json();v(C)}}catch(B){console.error("Erreur de chargement :",B)}finally{M(!1)}})()},[z]);const h=N=>{if(!N)return null;const B=N.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);return B?B[1]:null};return y?l.createElement("p",null,"Chargement..."):u?l.createElement("div",null,l.createElement("p",{style:{textAlign:"center",fontSize:"large"}},"inspirée de"),l.createElement("div",{className:"infosFilm"},l.createElement("p",{style:{fontStyle:"italic",fontSize:"x-large"}},u.filmtitle),l.createElement("p",null,u.filmreal," (",u.filmdate,")")),l.createElement("div",{className:"patSemaineFlex"},l.createElement("div",{className:"cercle imageCercle"},f?l.createElement("img",{src:`${z}/uploads/highlight/${f[":url"]}`,alt:u.name}):l.createElement("img",{src:"/assets/img/default_activity.jpg",alt:"Défaut"})),l.createElement("div",{className:"cercle videoCercle"},d&&!d[":video"]&&d[":youtube"]&&l.createElement("iframe",{src:`https://www.youtube.com/embed/${h(d[":youtube"])}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),!d&&l.createElement("p",null,"Vidéo bientôt disponible")),l.createElement("div",{className:"cercle infosCercle"},l.createElement("h2",{className:"pastryName"},u.name),l.createElement("p",{className:"pastryPrice"},u.price," €"),l.createElement("img",{src:fu,alt:"Kodama",className:"kodama"})))):l.createElement("p",null,"Aucune pâtisserie cette semaine.")}const hu="/assets/flamme-Bbfan3Dw.gif";function pu(){const u="https://www.lecameo17.fr/api",[m,f]=g.useState(null),[s,d]=g.useState(null),[v,y]=g.useState(!0);if(g.useEffect(()=>{fetch(`${u}/activity`).then(q=>q.ok?q.json():Promise.reject(q)).then(q=>{const _=q.find(C=>C[":featured"]==1);_&&f(_)}).catch(q=>console.error("Erreur activité :",q)).finally(()=>y(!1)),fetch(`${u}/media?featured=1`).then(q=>q.ok?q.json():null).then(q=>{if(q){const _=Array.isArray(q)?q[0]:q;d(_)}}).catch(q=>console.error("Erreur image :",q))},[u]),v)return l.createElement("div",{className:"newsDiv"},l.createElement("p",null,"Chargement..."));if(!m)return l.createElement("div",{className:"newsDiv"},l.createElement("p",null,"Aucune activité à la une."));const M=new Date(m[":start"].date),z=new Date(m[":end"].date),h=M.toDateString()===z.toDateString(),N={hour:"2-digit",minute:"2-digit"},B={day:"2-digit",month:"2-digit",year:"numeric"},A=s?`${u}/uploads/highlight/${s[":url"]}`:"/assets/img/default_activity.jpg";return l.createElement("div",{className:"newsDiv"},l.createElement("img",{src:hu,className:"calcifer",alt:"Calcifer"}),l.createElement("div",{className:"affichageNewsTablette"},l.createElement("div",{className:"imageNewsDiv"},l.createElement("h3",null,m[":title"]),l.createElement("img",{className:"imageNews",src:A,alt:m[":title"]}),l.createElement("div",{className:"boutonDiv"},l.createElement("h4",null,"Pour réserver :"),l.createElement("br",null),l.createElement("button",{className:"boutonReservation"},l.createElement("a",{href:"/agenda"},"Voir l'agenda")))),l.createElement("div",{className:"texteNews"},l.createElement("div",{className:"infosNewsDiv"},l.createElement("p",{className:"infosNews"},h?l.createElement(l.Fragment,null,"Le ",l.createElement("b",null,M.toLocaleDateString("fr-FR",B))," de"," ",l.createElement("b",null,M.toLocaleTimeString("fr-FR",N))," à"," ",l.createElement("b",null,z.toLocaleTimeString("fr-FR",N))):l.createElement(l.Fragment,null,"Du ",l.createElement("b",null,M.toLocaleDateString("fr-FR",B))," au"," ",l.createElement("b",null,z.toLocaleDateString("fr-FR",B)))),l.createElement("p",{className:"infosNews"},"Intervenant·e : ",l.createElement("strong",null,m[":contributor"])),m[":places"]!==null&&l.createElement("p",{className:"infosNews"},m.remaining_places===0?"Cet événement est complet":`Places disponibles : ${m.remaining_places}`),l.createElement("p",{className:"infosNews"},parseInt(m[":price"])===0?l.createElement("b",null,"Gratuit"):`${m[":price"]} €`),l.createElement("p",{className:"descriptionNews"},m[":description"])))))}function Eu(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"8px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("section",{className:"bande1"},l.createElement("h1",null,"La pâtisserie de la semaine"),l.createElement(du,null)),l.createElement("div",{className:"bande23"},l.createElement("section",{className:"bande2"},l.createElement("h2",null,"À Ne Pas Manquer !"),l.createElement(pu,null)),l.createElement("div",null,l.createElement("div",{className:"bande4",style:{paddingTop:"0"}},l.createElement(mu,null)),l.createElement("section",{className:"bande4"},l.createElement("h2",null,"Comment venir ?"),l.createElement("div",{className:"bande4Div"},l.createElement("div",{className:"carteGoogleDiv"},l.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.7040519489146!2d-0.9633540990930719!3d45.93499175739425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801415a4a79b7c1%3A0x9f46aae248ebd2e!2zTGUgQ2Ftw6lv!5e0!3m2!1sfr!2sfr!4v1750432728740!5m2!1sfr!2sfr",title:"Carte d’emplacement du Caméo",className:"carteGoogle"})),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("div",{className:"adresseDiv"},l.createElement("p",{className:"adresse"},"36 avenue LaFayette"),l.createElement("p",{className:"adresse"},"17300 Rochefort")),l.createElement("div",{style:{padding:"1em"}},l.createElement("p",{style:{color:"#582108",textAlign:"center"}},"Ouvert du mercredi au samedi au ",l.createElement("strong",null,"10h à 18h30")),l.createElement("p",{style:{color:"#582108",textAlign:"center"}},"et le dimanche de ",l.createElement("strong",null,"10h à 18h")))))))))}const vu="/assets/le-cameo-int4-DJ-onFse.jpg",zu="/assets/le-cameo-pat-tqfXsm7i.jpg",gu="/assets/le-cameo-littoral-Dq3GljeA.jpg",yu="/assets/le-cameo-sudouest-CWMxFE0W.jpg",bu="/assets/mathilde_hebdo-BEZR6Z85.png";function Su(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"10px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large",transition:"opacity 0.3s"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("section",{className:"bande3"},l.createElement("h1",null,"Le Caméo, c'est quoi ?"),l.createElement("div",{className:"cadreDef1"},l.createElement("div",{className:"texteDef"},l.createElement("h3",null,"La Création du Caméo"),l.createElement("p",{className:"sousTitre"},"Une histoire de passion"),l.createElement("p",{className:"texteParaph"},"Au départ, le projet de Mathilde a été de créer un endroit qui lui ressemble à tous les niveaux et où elle pourrait exposer sa créativité et celles des autres et assouvir son besoin de partage."),l.createElement("p",{className:"texteParaph"},"La passion de Mathilde pour le cinéma a toujours été importante et elle n’a pas cessé de réfléchir à un rapprochement possible entre cette dernière et son métier."),l.createElement("p",{className:"texteParaph"},"Depuis maintenant quelques années, des livres de cuisine thématique voient le jour et notamment autour du cinéma. L’attrait est véritablement présent et rapproche plusieurs générations. Lui vient l’idée d’un lieu pour rassembler ces cinéphiles de tout âge.")),l.createElement("div",{className:"photoDef1"},l.createElement("img",{className:"photoCadre1",src:vu,alt:"intérieur du salon de thé avec une rangée de siège comme au cinéma"}))),l.createElement("div",{className:"cadreDef1"},l.createElement("div",{className:"photoDef1"},l.createElement("img",{className:"photoCadre1",src:zu,alt:"intérieur du salon de thé avec une rangée de siège comme au cinéma"})),l.createElement("div",{className:"texteDef"},l.createElement("h3",null,"Tout le monde est bienvenu"),l.createElement("p",{className:"sousTitre"},"Un lieu accueillant et chaleureux"),l.createElement("p",{className:"texteParaph"},"Le Caméo est un salon de thé sur la thématique du cinéma. Les clients pourront déguster des pâtisseries directement tirées de leur univers cinématographique préféré."),l.createElement("p",{className:"texteParaph"},"Le concept passe par l’assiette mais également dans l’ambiance et la décoration du salon de thé puisque il y a des affiches de cinéma ou encore des objets qui font directement référence à divers univers cinématographiques. Les pâtisseries sont toutes faites maison et sur place. Le but est de travailler avec le maximum de partenaires locaux."))),l.createElement("div",{className:"divArticle"},l.createElement("div",{className:"titreArticles"},l.createElement("h3",null,"Ils parlent du Caméo...")),l.createElement("div",{className:"blocArticles"},l.createElement("div",{className:"imageArticle"},l.createElement("p",{className:"nomJournal"},"Le littoral"),l.createElement("img",{src:gu,className:"imageArticle1",alt:"Mathilde souriante assise dans son salon de thé"}),l.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.le-littoral.com/actualite-17185-rochefort-le-cameo-quand-le-7e-art-rencontre-l-art-du-the"},l.createElement("p",{className:"lienArticle"},"Rochefort. Le Caméo : quand le 7e art rencontre l'art du thé"," "))),l.createElement("div",{className:"imageArticle"},l.createElement("p",{className:"nomJournal"},"Sud-Ouest"),l.createElement("img",{src:yu,className:"imageArticle1",alt:"portrait de Mathilde fière debout devant une affiche de cinéma de son salon"}),l.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.sudouest.fr/charente-maritime/rochefort/rochefort-avec-son-salon-de-the-elle-partage-sa-passion-pour-le-septieme-art-21114131.php"},l.createElement("p",{className:"lienArticle"},"Rochefort : avec son salon de thé, elle partage sa passion pour le septième art")))),l.createElement("div",{className:"blocArticles"},l.createElement("div",{className:"imageArticleBot"},l.createElement("p",{className:"nomJournal"},"L'Hebdo"),l.createElement("img",{src:bu,className:"imageArticle1",alt:"portrait de Mathilde tenant une assiette de tartes devant une affiche de cinéma de son salon"}),l.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.lhebdo17.fr/actualite-7948-rochefort-au-salon-de-the-le-cameo-il-y-a-a-voir-et-a-manger?fbclid=IwY2xjawNg5YBleHRuA2FlbQIxMQABHh3rDgWN498RZLzKcY-X1D4Jy0-_4RgKz6VJlJ8xkZpgkfheoa1JpudRKD_e_aem_0YA5RmQsHcsDBV5gkvPLqA"},l.createElement("p",{className:"lienArticle"},"Rochefort. Au salon de thé Le Caméo, il y a à voir et à manger")))))),l.createElement("div",{className:"avisMobileDiv"},l.createElement("h3",{style:{color:"#6c1304"}},"Ce qu'ils en pensent..."),l.createElement("div",{id:"avisGoogleCarousel",className:"carousel slide"},l.createElement("div",{className:"carousel-inner"},l.createElement("div",{className:"carousel-item active"},l.createElement("div",{className:"d-flex flex-column align-items-center text-center p-4"},l.createElement("p",{style:{color:"#582108"}},'"Déjà plusieurs visites à mon actif, toujours un très agréable moment. Mathilde est adorable et tout est absolument délicieux 😋!!!! …"'),l.createElement("span",{className:"font-weight-bold",style:{color:"#582108"}},"Lucie"),l.createElement("div",{className:"stars mt-2",style:{color:"#dd7300"}},"★★★★★"))),l.createElement("div",{className:"carousel-item"},l.createElement("div",{className:"d-flex flex-column align-items-center text-center p-4"},l.createElement("p",{style:{color:"#582108"}},'"Une pause goûter comme à la maison ☺️ J’ai adoré le concept livre & jeux de société à disposition 📚 On peux même choisir sa tasse ☕️ Le chocolat chaud est délicieux et je vous parles pas des pâtisseries 😋 Hâte de revenir les tester !"'),l.createElement("span",{className:"font-weight-bold",style:{color:"#582108"}},"Alyssa"),l.createElement("div",{className:"stars mt-2",style:{color:"#dd7300"}},"★★★★★"))),l.createElement("div",{className:"carousel-item"},l.createElement("div",{className:"d-flex flex-column align-items-center text-center p-4"},l.createElement("p",{style:{color:"#582108"}},'"Un joli lieu-refuge, où déguster d’excellentes pâtisseries, en jouant à des jeux de société, ou en testant ses connaissances sur le cinéma. Une merveille de salon de thé, petite cuisine le midi, comme on aimerait en trouver plus souvent !"'),l.createElement("span",{className:"font-weight-bold",style:{color:"#582108"}},"Armell"),l.createElement("div",{className:"stars mt-2",style:{color:"#dd7300"}},"★★★★★")))),l.createElement("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#avisGoogleCarousel","data-bs-slide":"prev"},l.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.createElement("span",{className:"visually-hidden"},"Précédent")),l.createElement("button",{className:"carousel-control-next",type:"button","data-bs-target":"#avisGoogleCarousel","data-bs-slide":"next"},l.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.createElement("span",{className:"visually-hidden"},"Suivant")))),l.createElement("div",{className:"avis"},l.createElement("h3",null,"Ce qu'ils en pensent..."),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-4"},l.createElement("p",{className:"nomClient"},"Lucie"),l.createElement("div",{className:"starRate"},l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"})),l.createElement("p",{className:"avisGoogle"},"Déjà plusieurs visites à mon actif, toujours un très agréable moment. Mathilde est adorable et tout est absolument délicieux 😋!!!! …")),l.createElement("div",{className:"col-4"},l.createElement("p",{className:"nomClient"},"Alyssa"),l.createElement("div",{className:"starRate"},l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"})),l.createElement("p",{className:"avisGoogle"},"Une pause goûter comme à la maison ☺️ J’ai adoré le concept livre & jeux de société à disposition 📚 On peux même choisir sa tasse ☕️ Le chocolat chaud est délicieux et je vous parles pas des pâtisseries 😋 Hâte de revenir les tester !")),l.createElement("div",{className:"col-4"},l.createElement("p",{className:"nomClient"},"Armell"),l.createElement("div",{className:"starRate"},l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"}),l.createElement("i",{className:"bi bi-star-fill fs-6"})),l.createElement("p",{className:"avisGoogle"},"Un joli lieu-refuge, où déguster d’excellentes pâtisseries, en jouant à des jeux de société, ou en testant ses connaissances sur le cinéma. Une merveille de salon de thé, petite cuisine le midi, comme on aimerait en trouver plus souvent !")))))}function Mu(){return l.createElement("div",{className:"page"})}const cr=g.createContext(null),O4=()=>g.useContext(cr),Nu=({children:u})=>{const[m,f]=g.useState(!1),[s,d]=g.useState(!0),[v,y]=g.useState(null),M="https://www.lecameo17.fr/api";g.useEffect(()=>{(async()=>{try{const A=await fetch(`${M}/auth/status`,{credentials:"include"});if(A.ok){const q=await A.json();f(!0),y(q.client)}else f(!1),y(null)}catch(A){console.error("Erreur lors de la vérification de l'authentification :",A),f(!1),y(null)}finally{d(!1)}})()},[M]);const N={isAuthenticated:m,isLoading:s,client:v,login:async(B,A)=>{try{const q=await fetch(`${M}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_mail:B,client_password:A}),credentials:"include"});if(!q.ok)throw new Error("Échec de la connexion");const _=await q.json();return f(!0),y(_.client),_}catch(q){throw console.error("Erreur de connexion :",q),q}},logout:async()=>{try{await fetch(`${M}/auth/logout`,{credentials:"include"})}catch(B){console.error("Erreur lors de la déconnexion:",B)}finally{f(!1),y(null)}}};return l.createElement(cr.Provider,{value:N},u)};function Tu({item:u,onClose:m,onReserve:f}){const[s,d]=g.useState(1),v=M=>{M.preventDefault(),f(s)};g.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const y=l.createElement("div",{className:"modal-backdrop",onClick:m}," ",l.createElement("div",{className:"modal fade show",style:{display:"block"},onClick:M=>M.stopPropagation()}," ",l.createElement("div",{className:"modal-dialog modal-dialog-centered"}," ",l.createElement("div",{className:"modal-content"}," ",l.createElement("div",{className:"modal-header"}," ",l.createElement("h3",{className:"modal-title"},"Réserver une activité")," ",l.createElement("button",{type:"button",className:"btn-close",onClick:m})," ")," ",l.createElement("div",{className:"modal-body"}," ",l.createElement("div",{className:"auth-form login-form"},l.createElement("h4",null,u.title)," ",l.createElement("p",null,"Places disponibles : ",u.places)," ",l.createElement("form",{onSubmit:v,className:"adminForm4"},l.createElement("label",null,"Nombre de places :"),l.createElement("br",null)," ",l.createElement("input",{type:"number",name:"placesCount",value:s,onChange:M=>d(Number(M.target.value)),min:"1",max:u.places,required:!0}),l.createElement("br",null)," ",l.createElement("button",{type:"submit"},"Confirmer")," ")," ")," ")," ")," ")," ")," ");return rr.createPortal(y,document.getElementById("modal-root"))}function Au(){const[u,m]=g.useState([]),[f,s]=g.useState(!0),[d,v]=g.useState(null),[y,M]=g.useState(!1),[z,h]=g.useState(null),{isAuthenticated:N,client:B}=O4(),A="https://www.lecameo17.fr/api",q=async()=>{s(!0);try{const E=await fetch(`${A}/activity`);if(!E.ok)throw new Error(`HTTP error! status: ${E.status}`);const x=await E.json();if(Array.isArray(x)){const U=new Date,X=x.filter(H=>{const F=H[":start"]?.date;return F&&new Date(F)>=U}).sort((H,F)=>new Date(H[":start"].date)-new Date(F[":start"].date));m(X)}else m([])}catch(E){v(E.message)}finally{s(!1)}};g.useEffect(()=>{q()},[]);const _=async E=>{if(!B||!z)return;const x={client_id:B.id_client,activity_id:z[":id"],places_reserved:parseInt(E),created_at:new Date().toISOString()};console.log("📤 Envoi réservation:",x);try{const U=await fetch(`${A}/booking`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x),credentials:"include"});if(U.ok)alert("Réservation effectuée !"),q(),D();else{const X=await U.json();alert(`Erreur : ${X.error||U.statusText}`)}}catch(U){console.error("Erreur réservation:",U),alert("Erreur de connexion.")}},C=E=>{if(!N){alert("Les réservations en ligne sont réservées aux utilisateurs enregistrés. Veuillez créer un compte avant de faire une réservation ou veuillez appeler directement le café pour réserver par téléphone.");return}h(E),M(!0)},D=()=>{M(!1),h(null)};return f?l.createElement("div",null,"Chargement des activités à venir..."):d?l.createElement("div",null,"Erreur lors du chargement des activités : ",d):u.length===0?l.createElement("div",null,"Aucune activité à venir pour le moment."):l.createElement("div",{className:"program"},l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("h1",null,"Activités à venir"),l.createElement("ul",{className:"schedule-list"},u.map(E=>{const x=new Date(E[":start"].date),U=new Date(E[":end"].date),X=x.getDate()===U.getDate()&&x.getMonth()===U.getMonth()&&x.getFullYear()===U.getFullYear(),H={hour:"2-digit",minute:"2-digit"},F={day:"2-digit",month:"2-digit",year:"numeric"};return l.createElement("li",{key:E[":id"],className:"schedule-item"},l.createElement("div",{className:"item-info"},E[":type"]==="workshop"?l.createElement("span",{className:"badge-type"},"Atelier"):l.createElement("span",{className:"badge-type"},"Événement"),l.createElement("h3",null,E[":title"]),l.createElement("p",null,"Intervenant: ",l.createElement("strong",null,E[":contributor"])),l.createElement("p",{className:"activity-date"},X?l.createElement(l.Fragment,null,"Le ",l.createElement("b",null,x.toLocaleDateString("fr-FR",F))," ","de ",l.createElement("b",null,x.toLocaleTimeString("fr-FR",H))," ","à ",l.createElement("b",null,U.toLocaleTimeString("fr-FR",H))):l.createElement(l.Fragment,null,"Du ",l.createElement("b",null,x.toLocaleDateString("fr-FR",F))," ","à ",l.createElement("b",null,x.toLocaleTimeString("fr-FR",H))," ","au ",l.createElement("b",null,U.toLocaleDateString("fr-FR",F))," à"," ",l.createElement("b",null,U.toLocaleTimeString("fr-FR",H)))),l.createElement("p",{className:"price"},parseInt(E[":price"])===0?l.createElement("span",{className:"free-tag"},l.createElement("b",null,"Gratuit")):`${E[":price"]} €`),l.createElement("p",{className:"description"},E[":description"]),E[":places"]!==null&&l.createElement("p",{className:"places"},E.remaining_places===0?"Complet":`Places disponibles : ${E.remaining_places}`)),E[":places"]!==null&&l.createElement("button",{onClick:()=>C(E),className:"reservButtonProgram"},"Réserver"))})),y&&l.createElement(Tu,{item:z,onClose:D,onReserve:_}))}const wu="/assets/teamagine-C8cKirIj.jpeg",Du="/assets/Logo_La_Vache_Charentaise_web-BoXME1VM.png",Cu="/assets/mafiore-ByW4BIM9.jpg",xu="/assets/frida-CWNonTF9.png",Ru="/assets/house-JoDVP6Gd.png",_u="/assets/logomutyne-CB8Tni8g.png",Ou="/assets/logo_meo_blanc-DqZbyH0q.png";function Lu(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"8px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("h1",{className:"partnerH1"},"La grande famille du Caméo"),l.createElement("div",{className:"partnerDiv1"},l.createElement("h2",null,"Les Fournisseurs"),l.createElement("hr",null),l.createElement("div",{className:"fourniDiv"},l.createElement("div",{className:"teaDiv"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://tea-magine.com/"},l.createElement("h3",null,"TEA'MAGINE")),l.createElement("div",null,l.createElement("p",{className:"fourniParaph"},"Tea'Magine est une sommellerie française de thés et d'infusions originaux et naturels. Les produits sont faits à partir d'ingrédients issus de la nature, bio, sans polluant ni pesticides. Ces créations toulousaines sont uniques et faites à la main."),l.createElement("p",{className:"fourniParaph"},"Les thés spécialement créés pour le Caméo sont disponibles à l'achat au café !"),l.createElement("div",{className:"tImageDiv"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://tea-magine.com/"},l.createElement("img",{src:wu,alt:"Logo de Tea'Magine",className:"tImage"}))))),l.createElement("div",{className:"teaDiv"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://tea-magine.com/"},l.createElement("h3",null,"MÉO")),l.createElement("div",null,l.createElement("p",{className:"fourniParaph"},"Torréfacteur depuis 1928; Méo vous fait profiter de son savoir-faire artisanal et de produits d'exception. Toutes les étapes de la confection du café sont soigneusement réalisées."),l.createElement("p",{className:"fourniParaph"},"Les cafés Méo sont garantis issus d'une agriculture biologique et adhèrent à la SCAA qui lutte pour les droits de l'homme et contre la corruption."),l.createElement("div",{className:"tImageDiv"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://tea-magine.com/"},l.createElement("img",{src:Ou,alt:"Logo de Tea'Magine",className:"tImage"}))))),l.createElement("div",{className:"teaDivVache"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.lavachecharentaise.fr/"},l.createElement("h3",null,"LA VACHE CHARENTAISE")),l.createElement("div",{className:"VacheDiv"},l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{className:"fourniParaph"},"Situé en Charente-Maritime, La Vache Charentaise propose toute une gamme de produits à base de laits issus de son propre laboratoire de fabrication. Impliquée dans le bien-être de tous et soucieuse de la qualité de ses produits, La Vache Charentaise s'est engagée aux côtés de l'association Bleu-Blanc-Coeur."),l.createElement("p",{className:"fourniParaph"},"Retrouvez la crème glacée de la Vache Charentaise au Caméo durant l'été dans de délicieux milkshakes !")),l.createElement("div",{className:"tImageDiv"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.lavachecharentaise.fr/"},l.createElement("img",{src:Du,alt:"Logo de La Vache Charentaise",className:"tImage"}))))))),l.createElement("div",{className:"partnerDiv2"},l.createElement("h2",null,"Les Artistes"),l.createElement("hr",null),l.createElement("div",{className:"fourniDiv"},l.createElement("div",{className:"teaDiv2"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.mafiore.fr/"},l.createElement("h3",null,"MAFIORE")),l.createElement("div",null,l.createElement("p",{className:"fourniParaph2"},'"J’écris, souvent de la poésie mais pas seulement et slame régulièrement, je fabrique des badges, des cartes postales et d’autres objets poétiques, découpe et colle des mots et des images pour raconter le monde. J’anime des ateliers d’écriture pour vous guider sur les chemins de la créativité, de l’imagination et du plaisir d’écrire, en compagnie de textes et de livres classiques et contemporains que je souhaite partager."'),l.createElement("p",{className:"fourniParaph2"},"Retrouvez Mafiore au Caméo lors des ateliers d'écriture. Surveillez le programme !"),l.createElement("div",{className:"tImageDiv2"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.mafiore.fr/"},l.createElement("img",{src:Cu,alt:"Logo de Mafiore",className:"tImage"}))))),l.createElement("div",{className:"teaDiv2"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.instagram.com/frida_k.o/"},l.createElement("h3",null,"FRIDA K.O.")),l.createElement("div",null,l.createElement("p",{className:"fourniParaph2"},"Artiste, créatrice, illustratrice et chanteuse basée sur La Rochelle, Frida K.O. organise des ateliers uniques pour libérer votre créativité. Inspirée par la Pop Culture, elle peut s'inspirer tout autant des studios Ghibli que de Star Wars ! Vous ne voudrez pas manquer ça !"),l.createElement("p",{className:"fourniParaph2"},"Certaines des réalisation unique de Frida K.O. sont disponibles à la vente au Caméo !"),l.createElement("div",{className:"tImageDiv2"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.instagram.com/frida_k.o/"},l.createElement("img",{src:xu,alt:"Logo de Frida K.O.",className:"tImage"}))))),l.createElement("div",{className:"teaDivMut"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.instagram.com/mutyn.e/"},l.createElement("h3",null,"MUTYN.E")),l.createElement("div",{className:"VacheDiv"},l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{className:"fourniParaph2"},"Mutyn.e aime le cinéma et s'en inspire pour créer des oeuvres authentiques et sans détour. Les traits francs et le couleurs vives animent ces images d'une intention sincère."),l.createElement("p",{className:"fourniParaph2"},"À offrir aux autres ou à soi, n'hésitez pas à passer au café pour acquérir une de ces magnifiques cartes.")),l.createElement("div",{className:"tImageDiv2"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://www.instagram.com/mutyn.e/"},l.createElement("img",{src:_u,alt:"Logo de Mutyne",className:"tImage"}))))))),l.createElement("div",{className:"partnerDiv1"},l.createElement("h2",null,"Les Associations"),l.createElement("hr",null),l.createElement("div",{className:"assoDiv"},l.createElement("div",{className:"tImageDiv3"},l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://lahouse17.wordpress.com/"}," ",l.createElement("img",{src:Ru,alt:"Logo de la House",className:"tImage"}))),l.createElement("div",null,l.createElement("a",{className:"partnerLink",target:"_blank",href:"https://lahouse17.wordpress.com/"},l.createElement("h3",{style:{textAlign:"left"}},"LA HOUSE ")),l.createElement("p",{className:"fourniParaph"},"Association LGBTQIA+ Rochelaise, La House 17 organise des événements festifs pour la communauté et ses allié·e·s. Elle est le lieu de création des Safe Slace où chacun·e peut venir s'exprimer librement."),l.createElement("p",{className:"fourniParaph"}," ","La House 17, c'est plus qu'une association, c'est une famille !")))))}function Uu(){return l.createElement("div",{className:"ResaCameoDiv"},l.createElement("h3",null,"Commander des gâteaux"),l.createElement("p",null,"Le Caméo met à votre disposition une carte généreuse de gâteaux entiers à la commande. Consultez la carte ci-dessous pour faire votre choix (et cliquez sur les gâteaux qui vont font envie pour voir les photos)."))}function Bu(){return l.createElement("div",{className:"ResaCameoDiv"},l.createElement("h3",null,"Réserver le Caméo"),l.createElement("p",null,"Le Caméo peut mettre ses locaux à votre disposition lors de vos événements privés (anniversaire, baby shower, etc..) et assurer la restauration. Il est aussi possible de prévoir et d'animer des activités pour les enfants (préparation de cookies par exemple !)"))}function qu(){const[u,m]=g.useState(""),f="https://www.lecameo17.fr/api",s=async d=>{d.preventDefault();const v={nom:d.target.NomInput1.value,prenom:d.target.PrenomInput1.value,email:d.target.EmailInput1.value,message:d.target.exampleFormControlTextarea1.value};try{const y=await fetch(`${f}/MailingFolder/send-mail.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),M=await y.json();y.ok?m("Votre message a bien été envoyé !"):m("Erreur : "+M.error)}catch(y){m("Erreur d'envoi : "+y.message)}};return l.createElement("div",{className:"ResaCameoDiv"},l.createElement("h3",null,"Formulaire de contact"),l.createElement("p",null,"Quelque soient vos besoins ou vos envies, remplissez le formulaire ci-dessous pour nous soumettre votre projet. Il y sera apporté une réponse aussi vite que possible."),l.createElement("form",{className:"FormCommande",onSubmit:s},l.createElement("div",{className:"mb-3"},l.createElement("label",{htmlFor:"NomInput1",className:"form-label"},"Nom :"),l.createElement("input",{type:"text",className:"form-control",id:"NomInput1",placeholder:"Nom",required:!0}),l.createElement("label",{htmlFor:"PrenomInput1",className:"form-label"},"Prénom :"),l.createElement("input",{type:"text",className:"form-control",id:"PrenomInput1",placeholder:"Prénom",required:!0}),l.createElement("label",{htmlFor:"EmailInput1",className:"form-label"},"Adresse E-mail :"),l.createElement("input",{type:"email",className:"form-control",id:"EmailInput1",placeholder:"adresse@email.com",required:!0})),l.createElement("div",{className:"mb-3"},l.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Votre demande :"),l.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",required:!0})),l.createElement("div",{className:"form-check"},l.createElement("input",{className:"form-check-input",type:"checkbox",id:"checkDefault",required:!0}),l.createElement("label",{className:"form-check-label",htmlFor:"checkDefault"},"J'autorise le Caméo à me recontacter par mail ou par téléphone.")),l.createElement("button",{type:"submit",className:"boutonCollection"},"Envoyer"),u&&l.createElement("p",null,u)))}function Hu(){return l.createElement("div",{className:"ResaCameoDiv"},l.createElement("h3",null,"Les Travaux de Couture"),l.createElement("p",null,"En plus des ateliers de couture proposés au Caméo, vous pouvez aussi déposer vos vêtements, doudous et autres housses de coussin en perdition pour leur redonner une seconde vie bien méritée. Les doigts de fée de Mathilde sauront prendre soin de vos affaires pour qu'elles durent plus longtemps."))}function ju(){const[u,m]=g.useState([]),[f,s]=g.useState(null),d="https://www.lecameo17.fr/api";g.useEffect(()=>{fetch(`${d}/product?type=gateau-entier`).then(y=>y.json()).then(y=>m(y)).catch(y=>console.error("Erreur lors du chargement des gâteaux:",y))},[]);const v=y=>{s(f===y?null:y)};return l.createElement("div",null,l.createElement("h3",{style:{color:"#b21a00",fontWeight:"700"}},"Gâteaux Entiers"),l.createElement("div",{className:"gateaux-grid"},u.map((y,M)=>l.createElement("div",{key:y.id,className:`gateau ${f===M?"active":""}`,onClick:()=>v(M)},l.createElement("div",{className:"gateau-content"},l.createElement("p",{className:"gateau-nom"},y.name),l.createElement("img",{src:`${d}/uploads/${y.photo}`,alt:y.name,className:"gateau-image"}))))))}const Gu="/assets/retour-BV6J3JdJ.png",Yu="/assets/brod3-qqNFj52v.jpg",ku="/assets/ghibli-MmDrCEDJ.png",Vu="/assets/sticker-B0FiiJc-.png",Xu="/assets/portecle-Bo-PPhhM.png";function Qu(){return l.createElement("div",{className:"ResaCameoDiv"},l.createElement("p",null,"Retrouvez en magasin et en exclusivité, les oeuvres sublimes de créatrices de la région. Pour plus d'informations, n'hésitez pas à visiter notre page"," ",l.createElement("a",{href:"/partenaires",target:"_blank",style:{color:"#b21a00",textDecoration:"none",cursor:"pointer"}},"Partenaires")),l.createElement("div",{className:"sousDivGoodies"},l.createElement("div",{className:"divArtisteGoodies"},l.createElement("h3",null,"Les porte-clés"),l.createElement("p",null,"4€"),l.createElement("div",{className:"DivIllusArtiste"},l.createElement("img",{className:"imgArtiste",src:Xu,alt:"Le professeur Macgonagal"}))),l.createElement("div",{className:"divArtisteGoodies"},l.createElement("h3",null,"Les stickers de Mutyn.e"),l.createElement("p",null,"2€"),l.createElement("div",{className:"DivIllusArtiste"},l.createElement("img",{className:"imgArtiste",src:Vu,alt:"Le professeur Macgonagal"}))),l.createElement("div",{className:"divArtisteGoodies"},l.createElement("h3",null,"Les cartes postales de Mutyn.e"),l.createElement("p",null,"3,50€"),l.createElement("div",{className:"DivIllusArtiste"},l.createElement("img",{className:"imgArtiste",src:Gu,alt:"Le professeur Macgonagal"}))),l.createElement("div",{className:"divArtisteGoodies"},l.createElement("h3",null,"Les illustrations de Frida K.O."),l.createElement("p",null,"10€"),l.createElement("div",{className:"DivIllusArtiste"},l.createElement("img",{className:"imgArtiste",src:ku,alt:"une broche brodée du Petit Prince"}))),l.createElement("div",{className:"divArtisteGoodies"},l.createElement("h3",null,"Les broderies de Frida K.O."),l.createElement("p",null,"30€ / 40€"),l.createElement("div",{className:"DivIllusArtiste"},l.createElement("img",{className:"imgArtiste",src:Yu,alt:"une broche brodée du Petit Prince"})))))}function Zu(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",zIndex:5,bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"8px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("h1",{className:"shopTitle"},"La Boutique du Caméo"),l.createElement("div",{className:"shopBande"},l.createElement("div",{className:"gridServices2"},l.createElement("div",{className:"gridCaseCameo"},l.createElement(qu,null))),l.createElement("div",null,l.createElement("h2",{className:"shopTitle2"},"Les Services du Caméo"),l.createElement("div",{className:"gridServices"},l.createElement("div",{className:"gridCaseCameo"},l.createElement(Uu,null)),l.createElement("div",{className:"gridCaseCameo"},l.createElement(Bu,null)),l.createElement("div",{className:"gridCaseCameo"},l.createElement(Hu,null))))),l.createElement("div",{style:{margin:"2.5em",marginTop:"0.5em"}},l.createElement(ju,null)),l.createElement("h2",{className:"shopTitle2"},"Les goodies"),l.createElement("div",{className:"gridCaseCameo",style:{margin:"2.5em",marginTop:"0.5em"}},l.createElement(Qu,null)))}const Ku="/assets/Logo%20baseline%20beige-BOPKvTka.png";function Ju(){const[u,m]=g.useState(!1),f=()=>{m(!u)};return l.createElement("nav",{className:"menu-container"},l.createElement("button",{className:"burger",onClick:f},"☰"),l.createElement("div",{className:`menu ${u?"open":""}`},l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/"},"Accueil")),l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/apropos"},"À propos")),l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/agenda"},"Agenda")),l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/boutique"},"Boutique")),l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/404"},"CaméoScope")),l.createElement("p",{className:"itemMenu"},l.createElement("a",{href:"/partenaires"},"Partenaires"))))}function $u({onClose:u,onLoginSuccess:m}){const[f,s]=g.useState(!0),[d,v]=g.useState([]),{login:y}=O4(),[M,z]=g.useState({lastname:"",firstname:"",mail:"",password:"",tel:"",newsletter:"0",product_id:""}),h="https://www.lecameo17.fr/api";g.useEffect(()=>{(async()=>{try{const E=(await(await fetch(`${h}/product`)).json()).filter(x=>x.type==="gateau-entier"||x.type==="gateau-part");console.log("Gâteaux filtrés :",E),v(E)}catch(C){console.error("Erreur chargement gâteaux:",C)}})()},[h]);const N=_=>{const{name:C,value:D}=_.target;z({...M,[C]:D})},B=async _=>{_.preventDefault();try{await y(M.mail,M.password),u(),m&&m()}catch(C){console.error("Erreur de connexion:",C),alert("Impossible de se connecter. Veuillez vérifier vos identifiants.")}},A=async _=>{_.preventDefault();const C={firstname:M.firstname,lastname:M.lastname,mail:M.mail,password:M.password,tel:M.tel,newsletter:M.newsletter,product_id:M.product_id};console.log("Tentative d'enregistrement avec:",C);try{const D=await fetch(`${h}/client`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(!D.ok)throw new Error(`Erreur: ${D.statusText}`);const E=await D.json();console.log("Enregistrement réussi:",E),z({lastname:"",firstname:"",mail:"",password:"",tel:"",newsletter:"0",product_id:""}),u(),alert("Enregistrement réussi !")}catch(D){console.error(D),alert(`Échec de l'enregistrement: ${D.message}`)}},q=l.createElement("div",{className:"modal-backdrop"},l.createElement("div",{className:"modal fade show",style:{display:"block"}},l.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal-header"},l.createElement("h3",{className:"modal-title"},f?"Connexion":"S'enregistrer"),l.createElement("button",{type:"button",className:"btn-close",onClick:u})),l.createElement("div",{className:"modal-body"},f?l.createElement("div",{className:"auth-form login-form"},l.createElement("form",{onSubmit:B,className:"adminForm4"},l.createElement("label",null,"Email:"),l.createElement("br",null),l.createElement("input",{type:"email",name:"mail",placeholder:"email",value:M.mail,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Mot de passe:"),l.createElement("br",null),l.createElement("input",{type:"password",name:"password",placeholder:"mot de passe",value:M.password,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{type:"submit"},"Se connecter")),l.createElement("p",{className:"toggle-form-link"},"Pas encore de compte ?"," ",l.createElement("span",{onClick:()=>s(!1)},"S'enregistrer"))):l.createElement("div",{className:"auth-form register-form"},l.createElement("h3",null,"S'enregistrer"),l.createElement("form",{onSubmit:A,className:"adminForm4"},l.createElement("label",null,"Nom"),l.createElement("input",{name:"lastname",placeholder:"Nom",value:M.lastname,onChange:N,required:!0}),l.createElement("br",null),l.createElement("label",null,"Prénom"),l.createElement("input",{name:"firstname",placeholder:"Prénom",value:M.firstname,onChange:N,required:!0}),l.createElement("br",null),l.createElement("label",null,"Email"),l.createElement("input",{type:"email",name:"mail",placeholder:"Email",value:M.mail,onChange:N,required:!0}),l.createElement("br",null),l.createElement("label",null,"Mot de passe"),l.createElement("input",{type:"password",name:"password",placeholder:"Mot de passe",value:M.password,onChange:N,required:!0}),l.createElement("br",null),l.createElement("label",null,"Téléphone"),l.createElement("input",{type:"tel",name:"tel",placeholder:"Téléphone",value:M.tel,onChange:N,required:!0}),l.createElement("br",null),l.createElement("label",null,"S'inscrire à la newsletter ?"),l.createElement("div",{className:"inputRadioRegister"},l.createElement("input",{name:"newsletter",type:"radio",value:"1",checked:M.newsletter==="1",onChange:N,required:!0})," ",l.createElement("label",{className:"labelRadioNews"},"oui"),l.createElement("input",{name:"newsletter",type:"radio",value:"0",checked:M.newsletter==="0",onChange:N,required:!0})," ",l.createElement("label",{className:"labelRadioNews"},"non")),l.createElement("br",null),l.createElement("label",null,"Gâteau préféré"),l.createElement("select",{name:"product_id",value:M.product_id,onChange:N,required:!0},l.createElement("option",{value:""},"--Choisissez un gâteau préféré--"),d.map((_,C)=>l.createElement("option",{key:_.id||C,value:_.id},_.name))),l.createElement("br",null),l.createElement("button",{type:"submit"},"S'enregistrer")),l.createElement("p",{className:"toggle-form-link"},"Déjà un compte ?"," ",l.createElement("span",{onClick:()=>s(!0)},"Se connecter")),l.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.createElement("a",{href:"/politique",target:"_blank",style:{fontSize:"xx-small",textAlign:"center",color:"#b21a00"}},"Politique de Confidentialité"))))))));return rr.createPortal(q,document.getElementById("modal-root"))}const Fu="/assets/chihiro-CAK9IDTL.gif",Wu="/assets/totoro2-D0Tg57gw.gif";function Pu(){const[u,m]=g.useState(!1),{client:f,logout:s}=O4(),d=()=>{m(!u)},v=()=>{s()},y=()=>{m(!1)};return l.createElement("div",{className:"header"},l.createElement("div",{className:"ghibli-personnages"},l.createElement("img",{src:Fu,alt:"Chihiro",className:"chihiro"}),l.createElement("img",{src:Wu,alt:"Totoro",className:"totoro"})),l.createElement("div",{className:"iconI"},l.createElement("a",{href:"https://www.instagram.com/lecameo.17?fbclid=IwY2xjawLCaUhleHRuA2FlbQIxMABicmlkETE2ZmRad0dnZ285dHRzemtCAR6Z77uwzjzeNdZ4W4t9YOwIbWbvXLZiqyyNEuzDtk-aGLEjFRCosUJlC8Z39Q_aem_e0N8YyCXs1839mt5vmQejg",target:"_blank",rel:"noreferrer"},l.createElement("i",{className:"bi bi-instagram"}))),l.createElement("div",{className:"iconU"},f?l.createElement("div",{className:"bienvenue"},l.createElement("span",null,"Bonjour ",f.client_firstname," !"),l.createElement("button",null,l.createElement("a",{href:"/profile"},"Ton compte")),l.createElement("button",{onClick:v},"Déconnexion")):l.createElement("i",{className:"bi bi-person-circle",onClick:d}),l.createElement("div",{className:"iconE"},l.createElement("a",{href:"mailto:lecameo17@gmail.com"},l.createElement("i",{className:"bi bi-envelope"})))),l.createElement("div",{className:"iconFB"},l.createElement("a",{href:"https://www.facebook.com/p/Le-Cam%C3%A9o-61556540673702/",target:"_blank",rel:"noreferrer"},l.createElement("i",{className:"bi bi-facebook"}))),l.createElement("div",{className:"logo"},l.createElement("a",{href:"/"},l.createElement("img",{className:"logoHeader",src:Ku,alt:"logo du salon de thé Le Caméo"}))),l.createElement(Ju,null),l.createElement("hr",{className:"NavigLigne"}),u&&l.createElement($u,{onClose:d,onLoginSuccess:y}))}const Iu="/assets/Logo%20rond%20beige-BebNq1on.png";function ei(){return l.createElement("div",{className:"footer"},l.createElement("div",{className:"row px-4"},l.createElement("div",{className:"col footerCol1 text-center"},l.createElement("p",{className:"pFooter"},"Suivez l'actualité du salon sur les réseaux !"),l.createElement("a",{href:"https://www.instagram.com/lecameo.17?fbclid=IwY2xjawLCaUhleHRuA2FlbQIxMABicmlkETE2ZmRad0dnZ285dHRzemtCAR6Z77uwzjzeNdZ4W4t9YOwIbWbvXLZiqyyNEuzDtk-aGLEjFRCosUJlC8Z39Q_aem_e0N8YyCXs1839mt5vmQejg",target:"_blank",rel:"noreferrer"},l.createElement("i",{className:"bi bi-instagram"}))," ",l.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/p/Le-Cam%C3%A9o-61556540673702/"},l.createElement("i",{className:"bi bi-facebook"}))),l.createElement("div",{className:"col footerCol2"},l.createElement("p",{className:"pFooter"},"Le Caméo"),l.createElement("p",{className:"pFooter"},"36 avenue La Fayette"),l.createElement("p",{className:"pFooter"},"17300 Rochefort")),l.createElement("div",{className:"col footerCol3"},l.createElement("img",{className:"logoFooter",src:Iu,alt:"Logo du salon de thé le Caméo"})),l.createElement("div",{className:"col footerCol4"},l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/"},"Accueil")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/apropos"},"À propos")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/agenda"},"Agenda")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/boutique"},"Boutique")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/blog"},"CaméoScope")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/partenaires"},"Partenaires")),l.createElement("p",{className:"pFooter"},l.createElement("a",{href:"/mentions"},"Mentions légales"))),l.createElement("div",{className:"col footerCol5"},l.createElement("p",{className:"pFooter"},"Créez un compte et abonnez-vous à la newsletter pour profiter des bons plans !"))),l.createElement("p",{className:"copyright"},"© Le Caméo - Rochefort - 2025"))}const ti="/assets/404-DFdQ72OF.png";function ni(){return l.createElement("div",{className:"pageConstruction"},l.createElement("p",{className:"texte404"},"Page en construction..."),l.createElement("img",{className:"pageTravaux",src:ti,alt:"To be continued"}))}function li(){const[u,m]=g.useState(""),[f,s]=g.useState(""),[d,v]=g.useState(""),y=et(),M="https://www.lecameo17.fr/api",z=async h=>{h.preventDefault(),v("");try{const N=await fetch(`${M}/AuthFolder/adminLogin.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,password:f})}),B=await N.json();N.ok?(localStorage.setItem("authToken",B.jwt),y("/admin/dashboard")):v(B.message||"Erreur de connexion.")}catch{v("Une erreur est survenue. Veuillez réessayer.")}};return l.createElement("div",{className:"adminLogin"},l.createElement("h1",null,"Accès à la cuisine"),l.createElement("h2",null,"Réservé au personnel habilité"),l.createElement("div",{className:"adminFormDiv"},l.createElement("form",{onSubmit:z,className:"adminForm"},l.createElement("fieldset",null,l.createElement("legend",null,"Connexion"),l.createElement("label",null,"Identifiant"),l.createElement("br",null),l.createElement("input",{type:"text",value:u,onChange:h=>m(h.target.value),required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Mot de passe"),l.createElement("br",null),l.createElement("input",{type:"password",value:f,onChange:h=>s(h.target.value),required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{type:"submit"},"Se connecter"),d&&l.createElement("p",{style:{color:"red"}},d)))))}function ai(){return l.createElement("div",{className:"flexSVG"},l.createElement("svg",{className:"pastryIMG",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1280.000000pt",viewBox:"0 0 1280.000000 1280.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),l.createElement("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},l.createElement("path",{d:`M10406 9477 c-56 -32 -79 -67 -84 -131 -3 -44 0 -62 17 -89 l21 -35\r
-37 -30 c-55 -43 -80 -53 -273 -117 -235 -77 -292 -101 -326 -136 -15 -16 -38\r
-29 -50 -29 -37 0 -146 -57 -200 -104 -27 -23 -87 -68 -134 -98 -91 -59 -145\r
-108 -190 -174 -41 -59 -47 -89 -20 -104 l22 -12 -25 -26 c-61 -67 -180 -288\r
-201 -375 -4 -18 -16 -31 -34 -38 -72 -26 -88 -43 -103 -108 -8 -38 2 -68 33\r
-89 10 -7 27 -31 38 -52 21 -41 46 -60 78 -60 16 0 22 -9 27 -42 14 -89 96\r
-289 138 -335 12 -14 16 -23 8 -23 -7 0 -24 14 -38 30 -30 36 -43 38 -36 8 l5\r
-23 -21 24 c-12 13 -21 36 -21 52 0 15 -7 45 -16 66 -9 21 -20 47 -24 58 -30\r
83 -60 123 -60 79 0 -25 40 -175 54 -203 36 -70 35 -71 -51 -71 -75 0 -81 2\r
-168 51 -49 28 -126 69 -169 90 -44 21 -91 50 -105 62 -14 13 -42 30 -61 37\r
-19 8 -48 24 -63 37 -16 13 -37 23 -47 23 -9 0 -33 7 -52 15 -40 16 -96 6\r
-119 -21 -20 -25 -65 -44 -102 -44 -19 0 -74 14 -123 30 -101 34 -288 83 -383\r
100 -49 9 -74 20 -103 45 -22 18 -53 35 -69 39 -17 3 -42 15 -56 26 -17 13\r
-41 20 -72 20 -29 0 -57 7 -76 20 -16 11 -37 20 -45 20 -8 0 -22 13 -31 28\r
-15 27 -101 80 -189 115 -34 14 -65 18 -131 15 -93 -3 -111 3 -91 30 31 44 47\r
83 63 157 25 107 24 143 -7 233 -29 88 -78 159 -154 223 -29 24 -67 59 -84 78\r
-105 113 -102 111 -140 111 -53 0 -73 -14 -101 -70 -14 -27 -37 -56 -53 -64\r
-15 -8 -46 -34 -69 -58 -84 -87 -127 -201 -127 -338 0 -73 4 -94 30 -150 16\r
-36 43 -83 60 -106 18 -23 35 -51 39 -63 8 -26 21 -24 -210 -26 -201 -1 -240\r
-9 -335 -69 -141 -88 -156 -95 -285 -125 -72 -17 -173 -38 -225 -46 -52 -9\r
-97 -18 -101 -20 -3 -3 -64 -13 -136 -24 -71 -12 -212 -40 -314 -64 -101 -24\r
-222 -52 -269 -62 -254 -53 -369 -98 -557 -220 -108 -71 -165 -125 -248 -235\r
-56 -73 -79 -95 -129 -121 -125 -67 -293 -48 -501 56 -108 54 -214 130 -416\r
301 -106 90 -403 314 -489 369 -80 51 -284 151 -399 195 -66 25 -94 30 -125\r
26 -61 -10 -70 -17 -55 -50 17 -35 3 -45 -65 -45 -99 0 -203 -48 -279 -130\r
-50 -54 -57 -79 -29 -103 9 -8 94 -41 187 -73 196 -67 313 -122 422 -201 147\r
-105 373 -342 452 -473 24 -39 48 -71 53 -71 5 0 6 -5 3 -11 -4 -5 -1 -18 7\r
-27 31 -38 128 -261 128 -294 0 -6 28 -74 61 -151 61 -140 104 -253 158 -417\r
54 -161 136 -307 196 -346 14 -9 25 -20 25 -25 0 -5 18 -28 41 -51 33 -35 39\r
-47 34 -68 -17 -63 -17 -127 0 -144 10 -9 24 -15 32 -12 8 3 60 6 116 7 107 0\r
163 -13 257 -61 28 -14 114 -92 228 -209 171 -173 185 -184 198 -167 11 15 25\r
19 66 17 150 -6 156 -9 190 -75 11 -23 34 -57 50 -76 71 -86 129 -149 206\r
-228 46 -47 92 -102 102 -123 11 -21 28 -44 38 -51 44 -31 55 -107 27 -175\r
-21 -50 -21 -89 0 -143 32 -82 31 -124 -3 -178 -17 -26 -34 -60 -38 -77 -4\r
-16 -27 -73 -51 -125 -40 -84 -44 -101 -39 -145 5 -42 11 -55 41 -78 19 -16\r
35 -35 35 -43 0 -42 174 -45 555 -10 28 3 93 19 145 36 128 42 155 46 195 24\r
31 -16 34 -16 76 3 81 37 94 43 129 66 50 31 146 31 190 -1 l32 -24 71 17 c40\r
10 75 20 79 24 4 3 47 3 95 0 176 -13 331 17 425 83 34 24 45 23 85 -8 57 -43\r
114 -62 223 -74 58 -6 121 -15 140 -20 52 -14 169 -12 226 4 27 8 68 17 91 21\r
24 4 45 11 49 16 3 5 16 9 28 9 13 0 40 12 61 26 l38 26 66 -28 c36 -15 100\r
-48 141 -73 62 -38 84 -46 129 -48 53 -1 56 -3 89 -47 43 -58 63 -63 263 -62\r
l156 2 45 36 c25 20 68 59 96 86 50 48 52 52 46 94 -3 23 -6 74 -7 113 -2 68\r
-3 70 -34 85 -70 33 -91 93 -73 205 24 147 29 172 52 239 l23 69 85 44 c101\r
53 187 133 236 219 19 33 34 66 34 72 0 6 13 30 28 54 16 24 35 63 42 88 8 25\r
22 54 32 65 9 11 36 44 58 73 52 66 67 73 95 40 21 -25 22 -30 17 -252 -5\r
-254 -5 -256 61 -256 23 0 54 -9 74 -21 25 -16 43 -19 67 -15 41 8 46 19 46\r
105 0 51 8 88 31 152 17 46 38 102 46 124 21 61 43 102 109 205 68 108 106\r
144 167 161 86 24 128 43 139 63 19 37 145 200 175 226 31 28 86 68 118 86 48\r
27 195 115 247 149 31 20 71 44 90 54 174 92 679 438 854 586 91 77 214 207\r
214 226 0 6 13 21 29 35 16 13 45 48 64 77 19 28 47 65 61 80 15 16 34 41 44\r
55 9 15 40 59 68 97 29 39 69 104 89 145 20 41 42 86 49 100 8 14 35 88 61\r
165 36 110 48 162 54 240 13 163 -12 432 -56 600 -45 172 -97 281 -204 425\r
-79 106 -184 212 -299 300 l-32 25 22 28 c23 29 24 42 17 185 -2 42 -4 44 -47\r
59 -35 12 -51 13 -76 4 -42 -15 -42 -15 -61 26 -21 43 -70 80 -130 96 -41 11\r
-41 11 -41 60 -1 92 -22 148 -76 205 -48 51 -76 62 -163 62 -62 0 -86 -5 -117\r
-23z m196 -46 c33 -37 38 -65 8 -56 -10 3 -28 2 -38 -4 -15 -8 -23 -6 -37 9\r
-26 28 -32 25 -39 -21 -8 -51 -47 -93 -79 -84 -84 25 -67 138 28 181 18 9 50\r
13 79 10 41 -3 55 -9 78 -35z m17 -115 c21 -22 23 -33 19 -94 -4 -75 -21 -110\r
-44 -91 -8 6 -11 16 -7 22 11 18 3 100 -12 117 -18 20 -19 42 -3 58 17 17 21\r
15 47 -12z m91 -86 c0 -40 -13 -70 -29 -70 -4 0 -6 34 -7 75 -1 72 0 75 18 59\r
12 -12 18 -31 18 -64z m-214 -31 c19 -21 19 -21 -33 -69 -35 -33 -76 -57 -125\r
-76 -98 -37 -108 -47 -80 -77 38 -40 25 -116 -17 -102 -15 5 -27 0 -43 -17\r
-21 -24 -21 -24 -57 -6 -46 23 -73 23 -89 -2 -16 -26 -64 -45 -162 -64 -63\r
-12 -89 -22 -116 -45 -19 -17 -47 -34 -62 -37 -44 -11 -45 -15 -17 -44 23 -24\r
26 -35 21 -62 -9 -48 -67 -76 -165 -80 -43 -2 -75 1 -77 7 -2 6 17 25 41 44\r
44 35 73 76 63 87 -9 8 -98 -33 -123 -56 -25 -23 -163 -90 -187 -90 -48 0 10\r
105 82 149 27 17 76 54 107 83 93 85 153 119 205 117 41 -2 48 1 85 42 47 50\r
104 74 369 158 114 36 173 60 204 83 24 18 51 39 62 47 15 11 52 24 89 30 3 1\r
14 -8 25 -20z m345 -90 c31 -15 40 -25 37 -42 -2 -14 -9 -21 -18 -18 -33 8\r
-70 3 -94 -12 -58 -38 -71 -104 -19 -91 19 5 24 3 21 -7 -6 -17 -88 -14 -88 4\r
0 5 -9 20 -20 34 -36 46 -19 103 40 134 45 25 91 24 141 -2z m-316 -45 c0 -11\r
-8 -20 -20 -23 -11 -2 -37 -19 -59 -37 -43 -37 -67 -42 -85 -20 -10 11 -7 17\r
11 30 12 9 27 16 33 16 6 0 22 11 36 24 41 38 84 44 84 10z m533 -58 c3 -12\r
-1 -17 -10 -14 -7 3 -15 13 -16 22 -3 12 1 17 10 14 7 -3 15 -13 16 -22z m-68\r
-41 c34 -17 39 -35 12 -35 -28 0 -54 -35 -56 -75 0 -19 -6 -35 -12 -35 -23 0\r
-48 42 -50 83 -2 38 0 43 29 58 42 21 43 21 77 4z m-435 -7 c24 -11 34 -28 16\r
-28 -20 0 -61 20 -61 30 0 13 13 13 45 -2z m-218 -65 c9 -22 -58 -83 -91 -83\r
-27 0 -41 14 -30 31 4 8 9 7 15 -2 11 -19 37 -2 64 39 23 35 33 39 42 15z\r
m260 -20 c41 -28 70 -39 148 -53 63 -13 97 -28 161 -75 12 -9 52 -18 89 -22\r
64 -6 72 -10 139 -64 85 -68 144 -128 146 -149 5 -32 -1 -40 -25 -40 -36 0\r
-32 -18 25 -103 28 -41 50 -82 50 -91 0 -8 11 -40 24 -70 40 -89 74 -212 97\r
-346 26 -153 28 -174 36 -328 4 -91 9 -125 19 -129 26 -10 14 -83 -13 -83 -10\r
0 -12 -6 -8 -19 3 -11 -3 -45 -15 -77 -11 -32 -20 -66 -20 -76 0 -10 -4 -18\r
-10 -18 -5 0 -14 -19 -20 -42 -7 -22 -19 -52 -27 -65 -8 -12 -13 -29 -10 -36\r
4 -10 -2 -13 -18 -9 -18 3 -27 -3 -39 -27 -15 -29 -15 -31 5 -42 15 -8 18 -14\r
10 -22 -6 -6 -11 -17 -11 -25 0 -18 -62 -95 -129 -159 -30 -29 -52 -55 -48\r
-59 8 -9 37 15 37 30 0 6 9 17 20 24 17 10 20 10 20 -3 0 -22 21 -18 27 5 6\r
23 23 27 23 6 0 -19 -27 -39 -43 -33 -8 3 -18 2 -23 -1 -16 -12 -51 -66 -59\r
-92 -4 -14 -16 -31 -27 -38 -11 -8 -18 -23 -16 -35 2 -17 -2 -22 -21 -22 -14\r
0 -26 5 -28 12 -4 11 29 53 70 91 17 17 23 42 10 42 -11 0 -103 -115 -103\r
-128 0 -5 -11 -17 -25 -26 -29 -19 -33 -34 -8 -32 12 1 19 -7 21 -24 4 -30 22\r
-52 22 -27 0 10 8 17 20 17 47 0 2 -41 -52 -47 -24 -2 -28 1 -34 33 l-6 35\r
-24 -22 c-17 -16 -22 -30 -20 -52 3 -24 -3 -37 -26 -59 -17 -15 -41 -28 -54\r
-28 -17 0 -22 -4 -17 -16 6 -17 -33 -64 -54 -64 -7 0 -13 -3 -13 -7 -1 -22\r
-51 -65 -83 -73 -21 -4 -37 -6 -37 -3 0 8 84 83 92 83 11 0 68 51 68 62 0 5\r
-13 -1 -29 -14 -16 -12 -48 -34 -72 -48 -92 -55 -121 -80 -109 -95 7 -8 16\r
-13 20 -10 5 3 11 1 15 -4 7 -12 -32 -34 -45 -26 -6 3 -10 13 -10 21 0 23 -17\r
17 -86 -31 -35 -25 -68 -45 -73 -45 -5 0 -14 -6 -20 -14 -7 -8 -36 -27 -64\r
-42 -29 -15 -58 -35 -65 -45 -7 -11 -19 -19 -25 -19 -7 0 -28 -13 -47 -29 -30\r
-25 -33 -30 -17 -36 9 -4 17 -11 17 -15 0 -12 -99 -60 -105 -51 -6 11 14 28\r
40 33 20 4 21 10 10 58 -5 22 1 29 42 55 26 17 60 36 76 44 16 8 31 20 34 28\r
3 7 12 13 19 13 16 0 31 9 149 87 136 89 228 159 274 207 54 55 48 74 -6 21\r
-21 -21 -65 -59 -98 -86 -33 -27 -67 -54 -75 -61 -43 -36 -178 -120 -323 -202\r
-29 -16 -54 -32 -57 -36 -3 -4 -32 -22 -65 -40 -71 -39 -135 -80 -154 -98 -8\r
-7 -26 -21 -40 -30 -14 -9 -33 -22 -41 -29 -97 -76 -131 -95 -176 -97 -12 -1\r
-37 -13 -55 -27 -19 -14 -49 -33 -68 -42 -32 -16 -35 -16 -47 1 -24 32 -14 47\r
76 112 49 36 140 102 202 148 62 46 158 109 213 139 115 65 175 104 226 147\r
20 17 70 52 110 78 105 68 224 153 310 223 80 65 261 244 287 285 26 40 95\r
120 104 120 15 0 8 -16 -37 -96 -25 -43 -45 -83 -45 -89 1 -17 38 36 70 100\r
17 32 34 62 38 65 7 4 64 115 68 130 0 3 9 23 18 45 10 22 23 54 30 70 59 138\r
76 250 81 525 4 245 -11 347 -77 550 -59 177 -191 330 -372 431 -32 18 -61 40\r
-63 50 -6 20 -128 83 -213 109 l-55 17 29 12 c24 9 39 8 90 -10 100 -36 158\r
-64 207 -101 26 -20 57 -42 70 -48 l24 -13 -25 28 c-46 50 -157 113 -261 149\r
-103 34 -105 35 -218 28 -134 -8 -146 0 -82 54 22 20 41 42 41 49 0 7 8 21 17\r
31 24 23 159 15 200 -13z m211 12 c1 -1 -1 -10 -4 -20 -6 -13 -15 -16 -42 -11\r
-41 6 -46 10 -39 30 5 11 16 13 44 9 21 -3 39 -7 41 -8z m209 -80 c-6 -15 -47\r
-22 -47 -7 0 8 42 30 49 25 2 -1 1 -9 -2 -18z m-879 -7 c21 -21 13 -26 -65\r
-33 -90 -8 -177 -29 -206 -50 -12 -8 -28 -15 -36 -15 -12 0 -11 5 5 20 12 12\r
69 34 139 54 138 39 147 40 163 24z m-3774 -39 c-8 -14 -34 -11 -34 4 0 8 3\r
17 7 20 9 9 34 -13 27 -24z m3676 -35 c0 -17 -22 -14 -28 4 -2 7 3 12 12 12 9\r
0 16 -7 16 -16z m-65 -24 c3 -5 -3 -10 -14 -10 -12 0 -21 5 -21 10 0 6 6 10\r
14 10 8 0 18 -4 21 -10z m155 0 c20 -12 12 -18 -38 -26 -46 -7 -57 6 -19 24\r
28 14 38 14 57 2z m310 -11 c73 -19 94 -29 83 -40 -6 -6 -45 -2 -109 11 -54\r
11 -110 20 -123 20 -33 0 -15 17 24 23 36 6 65 2 125 -14z m-446 -18 c8 -13\r
-12 -26 -74 -49 -50 -18 -58 -19 -84 -5 -21 11 -34 12 -51 5 -16 -7 -26 -7\r
-34 1 -19 19 -13 24 35 25 25 1 55 7 66 13 14 8 28 7 49 -1 24 -10 33 -10 52\r
3 26 19 34 20 41 8z m-3507 -30 c60 -44 112 -110 128 -165 20 -66 19 -83 -5\r
-91 -11 -3 -20 -11 -20 -16 0 -5 -11 -7 -25 -3 -35 9 -32 -11 6 -47 31 -29 35\r
-54 5 -30 -23 19 -36 4 -36 -39 0 -46 -9 -72 -21 -64 -5 3 -7 28 -3 55 4 33 3\r
54 -6 64 -16 20 -28 19 -32 -2 -3 -14 -8 -10 -22 16 -17 31 -20 33 -31 18 -16\r
-22 -25 -22 -25 1 0 27 -6 30 -53 21 -31 -5 -46 -4 -58 7 -8 8 -21 14 -27 14\r
-36 0 -38 95 -2 155 10 17 21 45 25 63 12 59 84 73 110 22 9 -16 17 -30 19\r
-30 3 0 12 -3 21 -6 14 -6 16 -2 12 22 -3 16 -8 37 -12 47 -10 25 6 21 52 -12z\r
m-237 -1 c8 -5 12 -11 10 -13 -3 -2 -22 -16 -43 -32 -21 -16 -47 -46 -58 -67\r
-16 -31 -24 -38 -39 -33 -14 4 -27 -2 -44 -22 -39 -45 -39 -22 0 56 49 98 121\r
145 174 111z m4240 -33 c209 -42 375 -123 495 -242 107 -107 145 -169 200\r
-331 47 -135 62 -269 58 -514 -4 -266 -56 -477 -146 -586 -13 -16 -38 -53 -55\r
-81 -68 -113 -247 -310 -377 -416 -38 -31 -74 -62 -80 -68 -24 -26 -308 -219\r
-507 -345 -120 -75 -223 -143 -230 -151 -6 -8 -56 -43 -110 -79 -54 -36 -115\r
-79 -136 -98 -63 -55 -99 -76 -131 -76 -37 0 -106 -33 -114 -53 -3 -8 -19 -17\r
-36 -20 -18 -4 -42 -18 -55 -33 -64 -72 -102 -104 -121 -104 -22 0 -85 38 -85\r
51 0 5 4 17 8 27 103 212 144 344 177 559 27 183 19 337 -30 563 -18 85 -12\r
111 32 132 27 13 43 40 119 201 20 43 44 81 53 84 9 2 25 9 36 16 49 27 72 37\r
95 41 29 6 88 60 100 91 11 30 -5 43 -73 56 -52 11 -68 19 -109 60 -63 63\r
-127 190 -137 275 -10 89 -4 120 29 144 46 33 55 77 29 146 -24 65 -26 82 -12\r
134 14 52 112 246 134 266 10 9 19 24 19 32 0 8 44 57 98 108 80 78 113 102\r
187 138 94 45 190 80 266 96 73 15 272 4 409 -23z m-670 -26 c0 -5 -7 -12 -16\r
-15 -24 -9 -28 -7 -14 9 14 17 30 20 30 6z m-614 -59 c-17 -16 -18 -16 -5 5 7\r
12 15 20 18 17 3 -2 -3 -12 -13 -22z m474 -32 c-24 -15 -37 -11 -16 5 11 8 22\r
12 25 9 3 -3 -1 -9 -9 -14z m-320 5 c0 -10 -55 -28 -75 -26 -25 4 -29 7 -20\r
20 6 11 95 16 95 6z m100 -50 c0 -1 -30 -46 -66 -100 -82 -123 -112 -187 -120\r
-261 -3 -33 -13 -72 -23 -89 -15 -26 -24 -30 -65 -33 -73 -5 -77 -1 -61 51 23\r
77 77 200 113 257 63 100 90 129 125 132 23 2 33 9 35 23 2 15 11 20 32 21 17\r
1 30 0 30 -1z m-175 -24 c3 -6 -20 -45 -50 -88 -77 -107 -155 -279 -155 -343\r
0 -18 -4 -19 -62 -13 -35 3 -64 7 -66 8 -7 6 67 183 96 232 67 112 126 195\r
146 203 29 12 84 12 91 1z m2068 2 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0\r
19 -2 13 -5z m-5223 -33 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m5303 -72 c15 -33 39 -94 53 -136 14 -42 30 -84 34 -92\r
10 -18 41 -154 43 -188 1 -12 8 -26 14 -30 14 -9 28 -132 36 -315 3 -48 7 -90\r
10 -93 2 -3 0 -24 -5 -47 -10 -44 -35 -80 -49 -71 -5 3 -7 54 -4 115 5 106 -2\r
131 -24 92 -13 -23 -31 -6 -30 27 0 32 0 98 -1 130 -1 14 -6 40 -12 58 -7 24\r
-7 37 0 44 8 8 13 2 17 -18 3 -16 10 -37 16 -46 5 -10 9 -27 9 -38 0 -30 18\r
-24 22 8 3 31 1 41 -48 247 -45 190 -71 260 -140 388 -8 15 -12 31 -9 37 12\r
19 41 -12 68 -72z m-1893 62 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10\r
10 10 6 0 10 -4 10 -10z m-2868 -72 c5 -51 -8 -119 -25 -130 -29 -19 -34 -8\r
-21 44 8 29 14 69 14 89 0 65 25 63 32 -3z m-587 2 c3 -5 2 -10 -4 -10 -5 0\r
-13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m59 -22 c22 -42 20 -55 -4\r
-33 -11 10 -20 29 -20 42 0 31 5 29 24 -9z m226 -29 c0 -5 -11 -32 -25 -61\r
-14 -28 -25 -69 -25 -90 0 -39 -13 -51 -24 -22 -12 31 -6 65 18 102 14 20 28\r
49 31 64 6 25 25 30 25 7z m-89 -12 c-13 -13 -26 -3 -16 12 3 6 11 8 17 5 6\r
-4 6 -10 -1 -17z m139 13 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m-282 -64 c3 -12 -1 -17 -10 -14 -7 3 -15 13 -16 22 -3\r
12 1 17 10 14 7 -3 15 -13 16 -22z m352 -49 c0 -10 -11 -28 -26 -39 -28 -23\r
-29 -55 -2 -72 13 -7 21 -6 35 6 10 8 30 18 46 22 20 5 27 12 27 30 0 19 8 27\r
36 36 56 19 66 -1 21 -44 -20 -19 -37 -39 -37 -45 0 -5 -15 -26 -34 -45 -40\r
-44 -70 -46 -141 -11 -81 39 -87 46 -73 86 12 36 51 103 76 132 15 16 17 16\r
44 -10 15 -15 28 -35 28 -46z m102 11 c-17 -17 -24 -4 -16 28 7 28 7 28 17 6\r
7 -16 7 -26 -1 -34z m-372 32 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1\r
10 9 10 9 0 16 -4 16 -10z m5212 -60 c9 -22 13 -40 8 -40 -11 0 -20 14 -30 50\r
-12 43 2 36 22 -10z m-5302 20 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1\r
10 4 10 6 0 11 -4 11 -10z m52 -25 c-2 -14 0 -25 6 -25 5 0 24 -13 42 -30 33\r
-30 33 -50 0 -50 -10 0 -22 -5 -26 -11 -7 -12 15 -31 28 -23 4 3 18 -2 30 -10\r
12 -9 30 -16 40 -16 10 0 18 -7 18 -16 0 -12 -6 -14 -32 -8 -18 4 -41 8 -50 9\r
-17 1 -74 61 -95 99 -6 11 -7 27 -3 35 4 9 13 28 19 44 13 34 30 36 23 2z\r
m3193 -34 c-3 -6 -11 -11 -17 -11 -6 0 -6 6 2 15 14 17 26 13 15 -4z m-2729\r
-140 c-7 -11 -56 -21 -56 -10 0 9 19 17 43 18 10 1 16 -3 13 -8z m-216 -22 c0\r
-11 -27 -12 -34 0 -3 4 -3 11 0 14 8 8 34 -3 34 -14z m2703 0 c33 -7 57 -17\r
57 -24 0 -8 -8 -11 -20 -8 -14 4 -22 -2 -30 -21 -11 -29 -12 -29 -135 -27\r
-105 3 -145 15 -145 46 0 44 35 57 130 51 47 -3 111 -10 143 -17z m-2230 -42\r
c49 -56 33 -68 -60 -46 -67 16 -93 27 -93 39 0 7 13 9 35 4 30 -5 35 -4 35 13\r
0 44 40 39 83 -10z m-1095 25 c-4 -9 132 -142 144 -142 20 0 -30 64 -74 96\r
-49 35 -60 54 -33 54 42 0 132 -77 177 -151 17 -27 48 -40 48 -20 0 5 -32 41\r
-71 81 -83 84 -83 108 1 66 28 -14 60 -26 71 -26 19 0 99 -65 99 -81 0 -17\r
-23 -9 -69 24 -73 52 -78 54 -39 10 20 -23 44 -53 54 -68 13 -20 22 -25 43\r
-20 23 5 28 1 38 -25 10 -26 9 -34 -5 -51 -17 -20 -47 -25 -56 -10 -3 5 -30\r
12 -60 15 -41 6 -60 14 -82 37 -29 31 -77 39 -114 19 -27 -14 -37 -76 -16 -99\r
9 -10 16 -22 16 -27 -1 -17 -35 -50 -72 -67 -44 -21 -48 -21 -48 -2 0 8 -4 15\r
-9 15 -5 0 -11 -7 -15 -15 -3 -8 -17 -15 -32 -15 -16 0 -37 -12 -55 -31 -16\r
-18 -32 -29 -36 -25 -8 8 -7 102 2 142 9 41 -14 64 -63 64 -61 0 -207 -23\r
-213 -33 -4 -5 -24 -11 -45 -12 -70 -4 -74 -5 -74 -19 0 -8 16 -16 39 -20 22\r
-3 43 -11 47 -17 10 -18 -18 -29 -40 -16 -12 6 -29 10 -39 8 -24 -3 -32 24\r
-17 60 11 26 11 33 -4 47 -16 16 -17 15 -11 -9 8 -32 -10 -47 -24 -20 -15 27\r
-37 32 -87 20 -39 -10 -43 -14 -38 -35 7 -26 -5 -30 -34 -15 -9 4 -30 11 -46\r
15 -23 6 -27 4 -23 -8 8 -20 -29 -22 -68 -4 -51 23 -12 45 85 47 30 1 93 10\r
140 22 133 32 151 32 177 1 27 -34 39 -23 19 17 -9 16 -16 32 -16 34 0 2 26\r
10 58 17 70 15 130 42 168 73 35 29 101 64 169 88 50 18 137 26 133 11z m3519\r
-34 c33 -37 36 -71 10 -97 -26 -24 -37 -19 -37 17 0 14 -13 36 -30 52 -35 33\r
-36 37 -12 43 35 9 49 6 69 -15z m-7822 -45 c177 -69 321 -151 514 -291 269\r
-195 382 -305 394 -384 7 -45 -12 -52 -33 -12 -8 14 -27 33 -42 42 -15 9 -28\r
21 -28 27 0 23 -48 58 -71 52 -16 -4 -27 1 -41 19 -11 13 -25 24 -33 24 -15 0\r
-48 47 -41 58 7 12 -3 22 -89 92 -112 91 -395 254 -412 237 -2 -2 27 -22 64\r
-43 36 -22 68 -45 71 -51 9 -28 -50 -9 -198 66 -164 82 -200 113 -200 171 0\r
49 1 49 145 -7z m4680 37 c3 -5 -3 -10 -14 -10 -11 0 -23 5 -26 10 -3 6 3 10\r
14 10 11 0 23 -4 26 -10z m5325 -21 c0 -21 -16 -26 -23 -6 -6 17 3 38 14 31 5\r
-3 9 -14 9 -25z m-5277 -7 c15 -16 71 -129 72 -144 0 -3 3 -10 8 -14 13 -13 7\r
-44 -9 -44 -39 0 -54 20 -54 69 0 49 -21 114 -40 126 -12 8 -13 25 -2 25 5 0\r
16 -8 25 -18z m178 -2 c18 -10 27 -40 12 -40 -14 1 -43 27 -43 39 0 14 6 14\r
31 1z m623 -6 c3 -9 6 -24 6 -35 0 -10 7 -19 15 -19 8 0 15 5 15 10 0 6 5 10\r
11 10 6 0 9 -10 7 -22 -8 -54 -117 -65 -234 -22 -67 24 -115 57 -102 69 6 7\r
109 -19 137 -34 11 -6 34 -11 51 -11 25 0 35 7 51 35 23 38 34 43 43 19z\r
m-520 -10 c4 -9 4 -19 1 -23 -8 -7 -38 12 -43 27 -6 19 35 14 42 -4z m2663\r
-10 c-4 -4 -19 -7 -34 -8 -18 -1 -28 -7 -28 -16 0 -10 22 -19 73 -29 106 -20\r
80 -36 -56 -34 -59 2 -122 3 -141 3 -35 0 -61 14 -61 33 0 6 26 8 75 4 63 -6\r
77 -4 82 9 3 8 1 20 -6 27 -19 19 -12 30 13 23 13 -3 35 -2 48 3 23 9 48 -2\r
35 -15z m-2826 -14 c22 -12 26 -50 4 -50 -14 0 -35 29 -35 49 0 14 6 14 31 1z\r
m360 -11 c38 -17 49 -27 49 -44 0 -34 -61 -76 -104 -73 -52 3 -55 -10 -13 -48\r
45 -41 70 -41 77 1 l6 30 22 -42 c14 -26 31 -45 46 -49 26 -6 81 18 153 67 70\r
48 86 35 24 -20 -64 -58 -56 -73 14 -25 53 36 75 42 75 22 0 -18 -62 -65 -115\r
-88 -48 -21 -53 -45 -8 -34 28 7 137 77 148 95 5 7 14 4 29 -9 11 -11 45 -28\r
74 -38 l52 -19 -47 -12 c-27 -7 -63 -13 -82 -13 -34 0 -34 0 -16 20 10 11 15\r
23 12 26 -9 9 -57 -23 -92 -62 -46 -51 -87 -50 -139 4 l-37 37 -22 -27 c-12\r
-15 -29 -37 -37 -48 -13 -18 -30 -24 -97 -30 -98 -10 -135 -28 -168 -80 -43\r
-68 -50 -57 -54 78 -3 116 9 136 75 126 36 -5 44 -3 58 17 9 13 16 33 16 45 0\r
37 -21 45 -104 38 -70 -6 -79 -5 -100 15 -30 28 -25 78 10 87 12 3 27 3 32 0\r
14 -8 79 21 90 39 7 13 40 23 115 34 5 0 31 -9 58 -20z m-5399 -11 c-9 -9 -15\r
-9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m80 -54 c146 -64 275 -139 458\r
-263 137 -93 185 -134 378 -319 156 -151 191 -193 151 -184 -8 2 -33 4 -56 4\r
-41 0 -47 4 -195 150 -163 160 -262 248 -280 248 -11 0 20 -37 98 -116 57 -58\r
138 -153 204 -243 25 -33 71 -92 102 -131 32 -39 74 -95 93 -126 19 -30 42\r
-57 50 -60 8 -4 15 -11 15 -18 0 -6 16 -28 35 -50 19 -21 35 -41 35 -45 0 -4\r
21 -28 46 -53 33 -33 61 -50 102 -63 31 -9 95 -32 142 -50 140 -54 309 -107\r
353 -110 l42 -3 2 -44 c3 -82 24 -259 38 -336 19 -98 19 -102 -5 -102 -39 0\r
-333 145 -405 201 -68 51 -251 242 -268 279 -9 21 -73 111 -92 131 -8 9 -15\r
19 -15 24 0 8 -90 166 -100 175 -3 3 -12 17 -20 32 -37 65 -95 155 -116 178\r
-12 14 -40 50 -61 81 -110 162 -232 294 -433 471 -83 73 -254 181 -343 217\r
-32 13 -59 27 -62 31 -2 4 -50 22 -105 40 -55 18 -100 36 -100 40 0 10 84 38\r
130 43 81 9 103 5 182 -29z m5833 0 c22 -23 5 -38 -34 -29 -35 7 -39 19 -13\r
34 23 14 28 14 47 -5z m114 -19 c17 -19 28 -41 25 -49 -8 -22 -55 -34 -99 -27\r
-48 8 -57 33 -21 57 14 9 26 25 26 35 0 31 35 22 69 -16z m-430 -68 c-19 -15\r
-34 -18 -73 -13 -27 3 -51 8 -54 11 -11 10 9 19 46 20 20 1 51 8 67 16 26 13\r
30 13 34 0 2 -8 -7 -24 -20 -34z m218 4 c42 -38 115 -71 155 -71 10 0 18 -5\r
18 -11 0 -14 -84 -3 -122 17 -37 19 -118 91 -111 98 10 10 13 8 60 -33z m2054\r
-46 c13 -126 68 -243 161 -340 26 -28 48 -54 48 -58 0 -17 -59 -5 -91 18 -88\r
64 -199 225 -197 285 1 25 -5 38 -25 52 -26 19 -45 76 -32 98 4 6 32 9 68 8\r
l62 -3 6 -60z m-8127 32 c27 -15 25 -27 -4 -27 -20 0 -43 24 -33 33 8 9 6 9\r
37 -6z m71 3 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m4423\r
-20 c6 0 12 -9 12 -21 0 -16 -4 -19 -17 -13 -10 4 -34 8 -53 9 -19 1 -34 6\r
-33 11 2 13 36 24 58 19 11 -3 26 -5 33 -5z m672 -22 c0 -5 -8 -8 -19 -8 -10\r
0 -33 -3 -50 -6 -42 -9 -41 12 2 29 31 13 67 5 67 -15z m157 6 c2 -7 -12 -14\r
-34 -16 -45 -6 -50 -4 -33 17 15 18 61 17 67 -1z m-5177 -4 c0 -5 -4 -10 -10\r
-10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m3585 -14 c11 -7 33\r
-16 49 -20 22 -5 26 -10 17 -19 -9 -9 -22 -6 -56 12 -25 13 -45 28 -45 32 0\r
13 13 11 35 -5z m2953 8 c33 -9 27 -27 -8 -22 -17 3 -33 1 -36 -4 -10 -15 -24\r
-8 -24 12 0 21 23 26 68 14z m-3083 -26 c38 -12 76 -26 83 -31 19 -15 14 -27\r
-10 -27 -41 0 -98 -21 -98 -35 0 -23 48 -53 132 -81 l80 -26 106 26 c58 15\r
119 33 136 41 17 9 57 15 96 15 64 0 69 -2 111 -39 58 -51 139 -89 214 -101\r
51 -8 289 -16 320 -10 28 4 -48 21 -119 26 -132 9 -193 19 -263 41 -29 10 -53\r
20 -53 24 0 4 22 5 49 2 39 -4 50 -1 55 13 4 10 3 21 -1 24 -4 4 -50 12 -101\r
18 -66 7 -99 15 -110 27 -16 16 -15 17 23 11 46 -8 92 -13 187 -20 89 -6 97\r
-12 58 -45 -27 -22 -30 -29 -19 -38 11 -9 27 -7 67 6 56 19 104 17 96 -4 -8\r
-19 95 -30 241 -26 69 2 18 18 -82 25 -50 4 -104 11 -118 14 -24 7 -20 10 41\r
31 38 13 79 30 91 39 19 12 67 15 245 17 223 3 331 -7 193 -18 -38 -3 -83 -6\r
-98 -6 -32 -1 -47 -8 -47 -22 0 -5 44 -10 98 -10 l97 -2 -85 -9 c-52 -5 -90\r
-14 -100 -24 -24 -24 0 -30 110 -29 55 1 100 -2 100 -6 0 -5 -51 -9 -112 -9\r
-125 0 -158 -6 -158 -26 0 -10 16 -14 63 -15 34 0 82 -2 107 -5 25 -2 61 -5\r
80 -6 l35 -1 -40 -12 c-25 -7 -78 -10 -139 -8 -111 5 -146 0 -146 -22 0 -13\r
22 -15 132 -15 158 0 163 -16 8 -25 -116 -7 -140 -11 -140 -27 0 -15 305 1\r
331 18 4 2 6 11 3 18 -5 13 33 21 151 32 159 14 229 27 239 43 3 4 -39 6 -93\r
4 -64 -3 -101 -1 -105 6 -8 12 16 19 94 25 30 2 75 9 100 15 64 17 136 25 156\r
17 13 -5 14 -9 4 -21 -10 -13 -9 -19 5 -35 10 -11 24 -20 30 -20 7 0 24 -6 38\r
-13 21 -11 47 -11 151 1 132 15 171 12 145 -13 -18 -17 -176 -44 -404 -69 -27\r
-3 -88 -10 -135 -15 -152 -18 -212 -21 -450 -26 -141 -3 -291 -1 -375 7 -77 6\r
-171 12 -210 13 -190 6 -824 98 -905 133 -14 5 -56 20 -95 32 -161 50 -216 76\r
-303 145 -55 43 -61 51 -47 61 9 7 40 16 68 19 29 4 61 11 72 16 31 12 44 11\r
120 -13z m-3467 -11 c3 -16 1 -17 -17 -7 -25 13 -28 33 -4 28 10 -2 19 -11 21\r
-21z m3889 -4 c-2 -2 -18 0 -36 3 -21 4 -28 10 -20 14 11 7 64 -9 56 -17z\r
m998 6 c5 -5 86 -9 180 -9 283 -1 143 -27 -175 -33 -133 -3 -132 -3 -112 34\r
16 28 20 30 57 24 22 -3 44 -10 50 -16z m-4168 -32 c24 -15 46 -34 50 -41 5\r
-7 17 -18 28 -24 17 -9 17 -11 3 -12 -9 0 -29 11 -45 24 -15 13 -47 33 -70 45\r
-42 21 -50 31 -37 44 7 7 9 6 71 -36z m6308 33 c4 -6 -5 -10 -20 -10 -14 0\r
-37 -7 -51 -16 -23 -15 -24 -15 -18 1 11 28 76 46 89 25z m-2697 -19 c37 -20\r
16 -30 -53 -28 -64 3 -93 16 -81 35 8 14 106 8 134 -7z m384 -13 c-7 -7 -12\r
-8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m2106 -10 c24 -11 41 -22 40\r
-24 -2 -2 -23 -6 -46 -9 -23 -2 -50 -9 -59 -14 -71 -38 -112 -53 -127 -44 -13\r
7 0 16 59 42 41 19 75 40 75 48 0 10 -8 12 -27 7 -31 -7 -155 -67 -193 -94\r
-14 -9 -63 -30 -110 -45 -47 -15 -100 -33 -117 -39 -20 -7 -33 -18 -33 -28 0\r
-25 -35 -42 -49 -24 -15 18 -4 46 18 46 9 0 25 6 36 14 11 7 47 21 80 30 33\r
10 80 28 104 42 24 13 49 24 56 24 6 0 22 11 34 24 13 13 43 30 68 38 24 7 49\r
19 55 26 15 17 77 8 136 -20z m-6753 12 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10\r
0 6 2 10 4 10 3 0 8 -4 11 -10z m3925 -20 c0 -12 -53 4 -58 18 -3 9 4 9 27 1\r
17 -6 31 -15 31 -19z m-833 -51 c29 -17 55 -35 58 -40 15 -23 138 -74 265\r
-109 36 -10 120 -34 188 -54 68 -19 145 -37 170 -40 73 -7 213 -27 261 -37 23\r
-5 154 -19 290 -29 135 -11 268 -25 295 -31 35 -8 144 -10 375 -6 179 4 340 9\r
356 11 17 3 78 10 136 16 98 9 254 27 444 50 44 5 123 14 175 20 52 6 173 31\r
269 56 120 31 177 41 186 34 7 -5 32 -13 57 -16 58 -8 136 25 202 86 45 42 91\r
52 91 21 0 -29 33 -37 70 -17 36 20 51 17 42 -8 -5 -12 -59 -42 -139 -78 -30\r
-13 -20 10 12 29 38 22 38 30 -1 35 -23 4 -46 -5 -92 -32 -34 -20 -83 -45\r
-109 -56 -27 -10 -48 -22 -48 -26 0 -14 57 -47 93 -53 20 -4 37 -11 37 -16 0\r
-13 68 -42 80 -34 7 4 18 -2 26 -14 8 -12 19 -21 24 -21 4 0 27 -12 49 -27 43\r
-28 51 -55 18 -61 -10 -2 -16 2 -15 9 2 8 -8 15 -22 17 -14 2 -29 7 -33 12 -5\r
4 -25 4 -45 -1 -28 -6 -40 -4 -60 12 -14 10 -38 19 -55 19 -30 0 -32 -5 -12\r
-52 10 -26 -15 -23 -54 6 -31 23 -34 24 -69 9 -26 -11 -65 -15 -129 -14 -109\r
2 -154 -13 -198 -66 -25 -28 -41 -37 -80 -44 -78 -12 -173 -11 -177 3 -3 9\r
-24 7 -81 -8 -42 -12 -77 -18 -77 -14 0 12 78 80 93 81 94 7 172 18 247 35\r
193 43 314 74 324 84 17 17 -35 12 -98 -10 -31 -10 -82 -24 -114 -31 -31 -6\r
-88 -18 -127 -25 -84 -18 -105 -18 -119 -4 -14 14 9 30 42 30 40 0 297 70 312\r
85 17 18 7 19 -40 5 -19 -6 -83 -24 -142 -39 -90 -24 -108 -26 -112 -14 -8 21\r
0 31 40 48 38 16 47 40 12 32 -13 -3 -63 -11 -112 -17 -49 -6 -94 -13 -99 -17\r
-4 -3 -21 -6 -35 -8 -15 -1 -88 -8 -162 -15 -133 -13 -168 -23 -142 -39 16\r
-10 90 -4 192 14 80 15 98 10 76 -20 -15 -21 -144 -48 -182 -39 -12 3 -26 -1\r
-35 -12 -13 -16 -9 -16 46 -11 33 3 83 11 110 17 28 6 60 11 73 10 17 0 24 7\r
28 30 7 35 21 48 63 60 37 10 50 -3 27 -29 -9 -10 -16 -22 -16 -28 0 -14 -66\r
-53 -90 -53 -10 0 -25 -8 -32 -18 -10 -14 -27 -19 -73 -20 -67 -2 -115 -10\r
-130 -22 -10 -8 -101 2 -111 12 -3 3 8 15 24 26 51 37 21 102 -48 102 -35 0\r
-32 -20 5 -36 20 -8 33 -19 30 -24 -7 -11 -64 -40 -80 -40 -21 0 -26 30 -9 62\r
14 28 14 30 -3 26 -10 -2 -19 -14 -22 -28 -1 -14 -8 -28 -14 -32 -5 -3 -54 -9\r
-107 -13 -101 -7 -139 -18 -107 -31 10 -3 52 -3 95 2 117 13 144 6 103 -27\r
-13 -10 -36 -19 -52 -19 -20 0 -29 -5 -29 -16 0 -12 7 -14 30 -9 36 8 40 -11\r
11 -59 -10 -17 -22 -52 -25 -79 -6 -42 -4 -52 21 -87 44 -61 102 -87 244 -109\r
146 -22 181 -34 177 -58 -2 -13 8 -22 37 -32 38 -13 44 -12 112 18 78 34 99\r
37 138 19 25 -11 24 -12 -26 -29 -57 -20 -66 -26 -56 -36 4 -4 31 1 61 10 61\r
19 99 21 127 7 24 -13 25 -29 2 -37 -10 -3 -33 -20 -51 -37 -44 -42 -104 -41\r
-193 3 -39 19 -79 31 -104 31 l-39 0 24 -17 c14 -9 35 -25 48 -37 12 -11 29\r
-21 37 -22 22 -3 90 -60 125 -104 36 -46 66 -110 76 -165 3 -22 12 -51 19 -65\r
16 -32 29 -90 17 -71 -13 18 -16 11 -47 -115 -27 -106 -32 -116 -102 -213 -43\r
-57 -82 -101 -91 -101 -10 0 -30 -7 -47 -16 -101 -56 -106 -57 -192 -51 -45 3\r
-91 11 -102 17 -31 16 -36 70 -12 124 22 50 26 53 55 31 11 -8 28 -15 38 -15\r
21 0 23 -11 6 -28 -9 -9 -8 -12 3 -16 8 -2 22 -7 32 -10 10 -3 50 -3 88 0 57\r
6 69 10 69 25 0 20 36 49 62 49 18 0 34 17 24 27 -3 3 -23 -2 -46 -11 -22 -9\r
-47 -16 -55 -16 -25 0 -17 19 16 36 18 9 47 32 66 52 55 59 96 162 49 123 -23\r
-19 -26 1 -9 50 14 40 15 51 3 92 -8 26 -17 47 -20 47 -3 0 -5 -21 -6 -48 -1\r
-59 -39 -137 -88 -180 -20 -17 -36 -36 -36 -41 0 -15 41 -24 53 -12 15 15 27\r
14 27 -2 0 -17 -36 -50 -77 -71 -48 -24 -153 -21 -197 5 -19 11 -40 18 -46 14\r
-10 -6 -49 -83 -69 -137 -12 -33 -29 -29 -60 12 -26 37 -53 38 -71 5 -23 -43\r
-42 -32 -38 21 4 58 -16 76 -57 54 -24 -13 -28 -13 -41 5 -13 17 -15 17 -26 2\r
-22 -28 -41 -25 -42 8 -1 28 -3 30 -36 28 -19 -1 -81 -2 -137 -2 -59 0 -104\r
-4 -107 -10 -10 -16 39 -24 105 -18 32 3 59 1 59 -4 0 -4 -9 -31 -20 -59 -11\r
-28 -20 -64 -20 -80 0 -35 -6 -39 -70 -47 -50 -6 -63 -16 -36 -26 20 -8 49\r
-65 42 -84 -4 -9 -17 -14 -33 -13 -71 5 -103 0 -103 -16 0 -14 12 -15 99 -9\r
69 5 105 3 121 -5 43 -23 6 -34 -108 -32 -82 1 -114 -2 -128 -13 -23 -17 -19\r
-18 84 -15 39 1 72 -2 72 -7 0 -10 -100 -76 -100 -65 0 4 6 14 13 21 10 11\r
-11 12 -115 9 l-128 -4 0 33 c0 38 10 40 63 18 57 -24 74 -20 87 21 7 20 10\r
49 6 65 -6 31 -6 31 59 34 22 2 48 3 58 4 10 0 15 6 12 11 -4 7 -40 10 -89 9\r
-46 -1 -92 3 -104 10 -11 6 -42 11 -68 11 -45 0 -47 1 -32 17 14 14 37 16 138\r
16 66 -1 122 2 125 7 8 13 -86 22 -159 16 -51 -5 -66 -3 -66 7 0 18 21 37 41\r
37 11 0 20 11 24 31 4 19 15 33 26 36 24 7 19 27 -7 31 -11 2 -28 18 -39 38\r
-23 43 -98 94 -140 94 -41 0 -70 -22 -62 -45 7 -17 29 -17 68 -1 9 4 26 -3 43\r
-19 30 -27 28 -46 -4 -38 -23 6 -24 4 -8 -34 6 -15 12 -43 13 -60 1 -30 -1\r
-33 -27 -33 -27 0 -29 -2 -23 -29 5 -23 1 -34 -17 -50 -20 -19 -24 -20 -34 -6\r
-6 8 -19 15 -29 15 -16 0 -16 3 5 25 16 17 19 25 9 25 -21 -1 -52 -28 -55 -47\r
-1 -10 -5 -27 -8 -38 -4 -11 -2 -27 3 -35 9 -12 16 -12 58 3 77 28 190 18 228\r
-19 17 -17 20 -70 5 -79 -6 -4 -26 3 -46 14 -50 30 -155 53 -172 38 -12 -9\r
-11 -14 4 -27 21 -16 25 -50 25 -192 0 -77 -2 -91 -26 -126 -14 -22 -35 -42\r
-46 -45 -22 -6 -26 11 -5 19 65 25 60 176 -9 274 -28 40 -37 46 -82 54 -90 15\r
-146 -31 -179 -144 -6 -24 -19 -40 -39 -49 -17 -8 -36 -23 -43 -33 -7 -10 -24\r
-18 -38 -18 -28 0 -43 -25 -25 -43 11 -11 28 -12 159 -16 44 -1 52 -4 52 -20\r
0 -25 -41 -29 -172 -20 -78 5 -106 3 -129 -8 -26 -13 -32 -13 -62 5 -17 11\r
-60 23 -94 26 -57 6 -63 5 -63 -11 0 -36 17 -47 79 -51 34 -2 64 -9 67 -14 4\r
-7 -16 -8 -57 -4 -111 12 -139 17 -133 28 3 5 -4 20 -17 34 -21 22 -40 30\r
-121 48 -19 4 -28 13 -28 26 0 19 -17 25 -62 22 -10 -1 -32 14 -51 33 -39 40\r
-62 50 -139 59 -37 5 -61 13 -67 23 -11 21 -44 9 -39 -14 2 -11 14 -19 31 -21\r
24 -3 26 -7 22 -33 -5 -25 -1 -31 21 -39 14 -6 29 -8 33 -5 9 5 61 -17 61 -26\r
0 -4 -18 -9 -41 -13 -33 -5 -39 -9 -30 -20 11 -13 108 -32 144 -28 9 1 17 -4\r
17 -11 0 -9 -16 -12 -55 -11 -30 1 -55 -2 -55 -6 0 -21 47 -39 150 -54 63 -10\r
122 -22 130 -27 21 -11 -259 -3 -290 9 -31 12 -54 38 -46 51 14 22 -42 42\r
-130 46 -84 5 -286 41 -387 70 -42 12 -49 12 -54 -1 -9 -24 9 -34 73 -44 32\r
-4 73 -14 89 -21 29 -12 29 -13 6 -17 -12 -2 -35 0 -50 4 -14 4 -45 8 -69 9\r
-32 2 -42 -1 -38 -11 9 -23 -8 -24 -70 -5 -51 15 -56 19 -35 25 14 5 27 4 34\r
-3 13 -13 37 -15 37 -2 0 11 -87 45 -111 44 -10 -1 -23 5 -30 13 -6 8 -20 14\r
-29 14 -10 0 -26 3 -34 6 -13 5 -14 9 -4 21 10 13 7 20 -17 41 -17 14 -29 31\r
-27 39 5 22 -40 60 -91 77 -26 9 -50 16 -52 16 -13 0 -2 -32 19 -57 13 -15 26\r
-38 30 -50 4 -12 16 -25 27 -28 12 -4 19 -15 19 -32 0 -18 8 -28 30 -36 20 -8\r
28 -17 25 -26 -6 -15 23 -53 35 -46 5 3 6 15 3 26 -5 19 -3 21 26 14 18 -4 43\r
-13 57 -20 21 -11 22 -13 8 -19 -10 -4 -22 -2 -28 4 -5 5 -19 10 -29 10 -15 0\r
-18 -5 -14 -22 3 -13 -1 -32 -9 -42 -14 -20 -14 -20 -41 0 -15 12 -34 33 -43\r
49 -9 16 -21 30 -28 33 -17 5 -15 -33 3 -48 8 -7 15 -21 15 -32 0 -18 -5 -19\r
-32 -14 -18 4 -48 9 -65 13 -24 4 -33 11 -33 24 0 14 6 19 23 18 39 -4 58 1\r
52 11 -3 6 -15 10 -25 10 -11 0 -36 9 -57 19 -21 11 -48 22 -61 26 -21 6 -20\r
3 12 -40 38 -49 44 -65 24 -65 -7 0 -23 -3 -35 -6 -19 -5 -23 -2 -23 16 0 13\r
-8 24 -19 27 -19 5 -19 7 -4 39 l16 33 -43 38 c-23 21 -52 48 -63 61 -11 12\r
-26 22 -32 22 -7 0 -20 9 -30 20 -10 11 -21 17 -25 15 -4 -3 -15 6 -24 19 -8\r
14 -26 28 -38 31 -13 4 -32 15 -43 25 -11 11 -31 21 -45 23 -14 2 -37 9 -51\r
15 -77 32 -186 40 -246 19 -34 -11 -58 -2 -33 13 11 7 11 11 1 24 -11 13 -11\r
16 3 16 9 0 16 5 16 11 0 5 4 8 9 5 4 -3 28 -2 52 2 35 6 59 3 124 -19 44 -15\r
112 -37 150 -48 39 -11 92 -34 118 -51 26 -16 108 -60 183 -97 117 -59 138\r
-73 155 -104 18 -37 43 -54 61 -43 5 4 1 15 -10 28 -11 11 -35 46 -52 76 -18\r
30 -38 60 -44 65 -6 6 -29 47 -51 92 -22 46 -46 85 -52 88 -17 6 -17 -17 0\r
-34 25 -28 -76 10 -176 65 -16 9 -31 22 -34 30 -3 8 -18 14 -34 14 -16 0 -29\r
5 -29 10 0 17 41 11 74 -10 44 -26 116 -38 116 -18 0 29 -39 52 -89 54 -60 2\r
-74 9 -61 33 8 17 14 17 58 6 72 -19 111 -42 118 -69 5 -23 54 -78 54 -62 0 4\r
-13 34 -30 68 -16 33 -30 67 -30 77 0 9 -6 28 -14 42 -7 14 -16 43 -20 64 -4\r
21 -16 49 -26 64 -10 14 -21 46 -24 71 -3 25 -11 70 -16 100 -14 70 -27 270\r
-18 270 8 0 23 -106 20 -141 -2 -14 6 -45 17 -70 11 -24 21 -54 21 -66 0 -26\r
28 -56 46 -49 7 3 18 -2 24 -10 7 -8 24 -14 39 -14 14 0 35 -7 46 -16 18 -13\r
17 -14 -15 -8 -19 3 -40 7 -47 9 -7 2 -15 -1 -19 -7 -10 -15 33 -48 63 -48 13\r
0 44 -5 69 -11 33 -9 44 -16 44 -31 0 -12 17 -29 45 -46 24 -15 48 -39 54 -53\r
5 -15 26 -35 47 -46 31 -16 42 -30 56 -69 10 -27 18 -52 18 -56 0 -12 -35 -9\r
-47 3 -8 8 -17 8 -33 -1 -18 -10 -21 -17 -16 -43 4 -17 19 -45 34 -62 16 -16\r
41 -50 58 -75 43 -67 57 -81 84 -92 31 -12 129 -29 190 -33 47 -3 107 -22 98\r
-31 -3 -3 -34 0 -69 6 -80 12 -109 13 -109 0 0 -5 10 -12 23 -14 12 -3 81 -19\r
152 -36 182 -43 307 -58 334 -41 31 20 -7 38 -91 44 -45 4 -86 12 -92 18 -8 9\r
2 10 40 6 56 -6 86 5 67 24 -6 6 -9 18 -6 25 3 8 -1 14 -11 14 -9 0 -16 -8\r
-16 -17 -1 -17 -1 -17 -14 0 -8 10 -20 15 -30 11 -18 -7 -22 11 -6 21 6 4 8\r
15 5 26 -4 11 -2 19 4 19 16 0 13 36 -4 50 -8 7 -12 16 -10 21 8 12 -25 27\r
-46 22 -11 -3 -19 0 -19 6 0 6 11 11 24 11 34 0 51 23 31 43 -21 21 -19 27 8\r
27 30 0 62 24 53 38 -4 7 -17 12 -29 12 -12 0 -44 7 -71 15 -27 8 -62 15 -78\r
15 -15 0 -28 4 -28 9 0 14 28 21 53 12 12 -4 45 -11 73 -15 40 -5 54 -3 64 9\r
7 8 21 15 31 15 11 0 19 5 19 10 0 6 -15 10 -34 10 -42 0 -136 21 -136 30 0 9\r
112 3 224 -10 101 -13 303 -13 311 -1 3 5 1 12 -4 15 -5 4 -119 15 -252 27\r
-134 11 -246 22 -248 25 -8 8 34 33 49 29 22 -6 113 -13 291 -21 111 -4 158\r
-3 163 5 9 13 13 13 -99 17 -124 4 -325 21 -332 27 -3 3 -2 10 2 16 4 7 67 9\r
193 6 207 -6 242 -10 242 -30 0 -7 7 -25 14 -41 8 -15 12 -32 8 -38 -4 -6 -7\r
-29 -7 -50 l0 -39 -82 2 c-68 2 -83 0 -83 -13 0 -23 32 -26 182 -17 15 1 17 8\r
12 44 -5 33 -1 53 14 84 l21 40 -20 20 -21 20 44 20 43 21 -40 11 c-22 6 -46\r
11 -52 11 -7 0 -13 5 -13 10 0 6 9 10 20 10 11 0 23 7 26 15 4 8 25 24 48 34\r
57 27 81 51 111 107 27 51 78 104 101 104 17 0 18 -32 3 -80 -14 -50 -27 -130\r
-20 -130 3 0 13 15 22 33 22 44 41 40 55 -13 6 -25 15 -53 19 -64 7 -15 5 -17\r
-14 -11 -18 5 -24 1 -37 -31 -12 -29 -13 -43 -5 -56 21 -33 13 -85 -15 -107\r
-42 -33 -90 -25 -58 10 14 16 14 19 -3 38 -28 34 -73 21 -73 -20 0 -11 -18\r
-26 -46 -40 -26 -12 -54 -35 -63 -50 -9 -16 -21 -29 -26 -29 -6 0 -15 -10 -20\r
-22 -8 -19 -18 -23 -57 -23 -48 0 -75 -15 -64 -34 4 -6 36 -11 72 -11 57 0 64\r
-2 64 -20 0 -18 -7 -20 -70 -20 -68 0 -88 -10 -52 -28 45 -24 362 -17 386 8 8\r
9 7 11 -4 10 -48 -7 -210 1 -210 10 0 23 33 60 44 51 6 -5 53 -8 104 -8 90 2\r
94 3 114 30 24 33 34 28 43 -22 7 -44 17 -54 83 -91 25 -14 47 -30 49 -35 5\r
-16 -54 -34 -92 -28 -19 3 -86 2 -150 -2 -92 -6 -115 -10 -115 -22 0 -13 12\r
-14 78 -9 42 4 126 8 186 11 60 3 111 7 114 9 2 3 22 -6 43 -20 21 -13 49 -24\r
61 -24 20 0 18 5 -19 36 -38 32 -43 40 -43 79 0 35 -5 46 -27 60 -19 13 -31\r
15 -43 8 -8 -6 -30 -14 -47 -17 l-31 -7 -6 64 c-4 35 -16 78 -27 96 l-19 32\r
-27 -20 c-26 -21 -73 -29 -73 -12 0 5 14 21 31 35 33 28 72 34 88 14 70 -89\r
199 -198 235 -198 29 0 17 15 -37 47 -59 35 -137 114 -137 138 0 20 2 20 41\r
-16 55 -50 178 -128 212 -134 18 -3 68 -5 112 -3 78 3 80 4 83 30 2 19 -2 28\r
-17 33 -27 8 -40 -1 -34 -24 6 -25 -22 -31 -102 -21 -41 5 -83 18 -112 35 -49\r
28 -203 181 -203 201 0 6 -11 16 -25 22 -18 8 -25 19 -25 39 l1 28 15 -27 c8\r
-16 21 -28 29 -28 19 0 19 0 -9 51 -32 61 -62 177 -48 191 8 8 16 1 28 -25 12\r
-25 21 -34 29 -27 7 6 22 2 43 -10 36 -22 40 -35 15 -48 -20 -12 -11 -42 14\r
-43 10 0 41 -13 68 -27 51 -27 60 -46 42 -84 -9 -20 -78 -25 -121 -8 -41 15\r
-32 -5 27 -63 47 -46 158 -117 184 -117 5 0 40 29 78 64 38 35 73 62 77 60 5\r
-3 8 -16 8 -29 0 -42 18 -37 80 23 80 78 81 111 2 57 -33 -23 -37 -23 -54 -8\r
-17 15 -21 13 -67 -31 -28 -25 -56 -46 -64 -46 -8 0 -19 -12 -26 -26 -10 -24\r
-16 -26 -49 -20 -42 6 -117 55 -117 76 0 7 22 20 49 29 57 18 72 37 62 75 -5\r
21 -20 33 -71 56 -50 22 -65 34 -65 50 0 11 -7 32 -16 45 -32 50 1 69 69 40\r
49 -20 86 -19 153 6 76 28 115 65 116 107 1 41 -41 88 -94 104 -34 10 -37 14\r
-36 45 2 45 -14 60 -47 45 -33 -15 -41 -10 -48 27 -16 80 51 163 152 187 56\r
13 78 12 134 -3 28 -7 19 14 -10 25 -78 31 -169 19 -244 -30 -65 -44 -98 -155\r
-63 -208 27 -40 44 -51 65 -39 14 7 19 6 19 -4 0 -41 -81 -51 -137 -16 -80 49\r
-80 132 -2 235 26 35 44 64 39 64 -19 0 -109 -103 -121 -137 -14 -45 -6 -109\r
19 -142 32 -44 116 -81 181 -81 45 0 59 -4 69 -20 16 -27 -8 -77 -44 -90 -101\r
-39 -273 39 -302 137 -12 41 -4 120 17 176 14 35 14 40 1 32 -6 -4 -19 -24\r
-30 -46 l-20 -39 -71 0 c-52 0 -70 -3 -66 -12 3 -9 23 -12 66 -10 71 3 76 -6\r
30 -49 -35 -33 -41 -35 -33 -14 5 11 -1 15 -24 15 -17 0 -34 5 -37 10 -8 13\r
-48 13 -62 -1 -18 -18 -141 -30 -184 -19 -31 9 -42 18 -56 48 -28 64 -16 147\r
26 179 28 22 85 16 111 -12 20 -22 22 -28 11 -51 -8 -19 -16 -24 -29 -19 -38\r
16 -50 16 -66 0 -34 -35 -15 -74 40 -82 33 -4 43 -1 67 22 15 15 27 38 27 51\r
0 21 5 24 34 24 68 0 207 49 272 96 35 24 69 44 76 44 7 0 24 17 38 38 14 20\r
29 40 35 44 25 18 -6 14 -56 -7 -42 -18 -74 -24 -125 -23 -38 0 -73 3 -77 6\r
-5 2 17 19 50 37 52 29 69 33 168 39 60 4 114 11 120 17 7 7 -21 8 -84 3 -111\r
-8 -121 6 -27 38 57 20 59 20 114 1 45 -15 69 -17 112 -11 34 5 74 4 106 -3\r
45 -10 55 -9 92 10 40 20 92 77 92 100 0 6 -11 16 -24 21 -18 6 -28 21 -36 50\r
-14 53 -5 82 23 78 24 -3 36 -36 17 -48 -18 -11 -4 -29 18 -23 25 6 118 -88\r
126 -128 15 -78 6 -259 -20 -380 -25 -120 -23 -152 7 -133 8 4 20 9 29 10 8 1\r
51 6 95 13 55 8 91 8 115 1 19 -5 47 -10 63 -10 15 0 37 -6 48 -12 17 -11 23\r
-10 39 10 24 29 44 28 64 -3 9 -14 24 -25 33 -25 17 0 17 -2 -8 145 -16 96 -7\r
225 22 309 13 37 29 68 34 67 6 -1 9 -11 7 -21 -2 -11 2 -20 9 -20 19 0 120\r
91 113 101 -3 6 -11 5 -20 -2 -24 -20 -26 -3 -5 37 32 60 24 175 -13 182 -16\r
3 -17 -2 -12 -60 8 -74 -2 -97 -58 -142 -36 -30 -42 -31 -130 -31 -73 0 -91\r
-3 -91 -14 0 -11 14 -16 44 -18 25 -2 48 -6 52 -10 5 -5 4 -26 -1 -48 -12 -48\r
-14 -229 -4 -314 l7 -62 -29 6 c-16 4 -47 11 -68 17 -54 13 -255 13 -288 0\r
l-27 -11 4 52 c2 29 9 95 15 147 6 52 10 129 8 170 l-2 75 29 -2 c17 -1 58 -7\r
93 -14 43 -8 69 -9 85 -2 l22 11 -27 12 c-16 7 -28 19 -28 25 0 8 -15 11 -48\r
7 -60 -5 -113 9 -181 50 -59 35 -89 76 -90 121 -1 34 26 77 48 77 24 0 98 -66\r
117 -104 39 -76 101 -109 155 -82 18 9 37 16 44 16 24 0 55 41 55 74 0 77\r
-137 136 -200 86 -31 -24 -45 -25 -78 -2 -15 10 -40 24 -57 30 -41 15 -184 36\r
-192 28 -12 -12 7 -20 49 -21 42 -1 60 -16 36 -31 -7 -4 -31 -7 -55 -5 -24 1\r
-43 0 -43 -3 0 -11 55 -32 73 -28 15 3 18 -1 15 -20 -2 -12 -11 -24 -21 -26\r
-23 -5 -78 21 -102 48 -18 20 -18 21 5 45 18 19 21 31 16 58 -5 29 -13 38 -46\r
51 -74 29 -160 12 -175 -34 -3 -11 -13 -20 -22 -20 -14 0 -14 -3 2 -20 29 -32\r
5 -50 -66 -50 -54 0 -62 3 -100 38 -27 23 -50 36 -63 34 -36 -6 -39 -19 -7\r
-38 35 -21 37 -30 15 -62 -33 -47 -112 -66 -169 -40 -35 16 -31 28 9 28 28 0\r
41 7 65 37 l31 37 -28 11 c-15 6 -61 17 -102 25 -54 9 -85 21 -113 42 -30 24\r
-47 29 -90 29 -46 1 -79 10 -141 42 -25 12 -49 -18 -41 -50 4 -17 1 -23 -11\r
-23 -21 0 -15 -40 9 -51 9 -5 25 -14 35 -19 72 -42 154 -73 245 -94 16 -4 27\r
-12 24 -19 -4 -14 -73 -12 -184 5 -63 9 -76 8 -97 -6 -14 -9 -38 -16 -53 -16\r
-33 0 -140 28 -271 72 -84 28 -95 29 -109 15 -18 -18 -11 -33 19 -40 13 -2 57\r
-13 98 -24 41 -11 102 -26 135 -33 88 -18 115 -30 115 -51 0 -10 -3 -20 -7\r
-22 -5 -3 -62 13 -128 34 -229 74 -307 83 -437 52 -69 -16 -69 -16 -91 6 l-22\r
22 28 -6 c23 -6 36 0 84 41 31 26 58 55 60 64 3 8 31 37 64 64 63 52 69 63 42\r
72 -32 11 -128 59 -134 67 -3 5 -15 10 -25 11 -24 3 -33 46 -10 46 9 0 24 -4\r
34 -10 9 -5 49 -23 87 -40 39 -17 80 -36 92 -42 17 -8 26 -8 38 2 19 16 5 35\r
-33 45 -48 12 -250 107 -293 138 -17 12 -34 17 -48 12 -27 -8 -27 -35 -1 -42\r
23 -6 27 -23 5 -23 -21 0 -19 -16 5 -40 11 -11 20 -27 20 -35 0 -8 9 -19 20\r
-25 29 -16 17 -27 -37 -35 -27 -4 -56 -14 -66 -23 -11 -10 -33 -15 -61 -13\r
-23 1 -55 -3 -70 -8 -23 -9 -25 -13 -14 -30 6 -11 14 -19 17 -19 47 4 54 -17\r
9 -26 -22 -4 -37 -1 -49 10 -23 21 -62 14 -74 -13 -5 -13 -17 -23 -27 -23 -9\r
0 -24 -13 -33 -28 -9 -15 -31 -32 -48 -38 -18 -6 -40 -15 -51 -19 -16 -7 -17\r
-6 -7 13 15 29 15 30 -19 37 -40 9 -38 22 3 17 35 -4 95 34 70 44 -7 3 -13 10\r
-13 15 0 5 6 9 13 9 6 0 21 7 32 16 17 12 18 17 7 35 -11 18 -11 20 5 18 52\r
-8 96 28 72 57 -9 11 -6 14 15 14 31 0 62 14 93 43 16 14 30 18 53 14 34 -7\r
80 10 80 29 0 18 -42 28 -88 19 l-37 -6 21 21 c12 12 41 24 74 29 38 6 60 16\r
75 33 28 34 74 53 195 82 121 29 154 27 227 -15z m3943 -9 c0 -5 -4 -10 -10\r
-10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m92 -22 c-9 -9 -12\r
-7 -12 12 0 19 3 21 12 12 9 -9 9 -15 0 -24z m194 -39 c54 -28 108 -58 119\r
-68 11 -9 53 -38 93 -65 40 -27 76 -55 80 -63 5 -8 44 -50 87 -93 65 -66 74\r
-80 56 -80 -15 0 -54 32 -119 98 -157 158 -169 166 -364 257 -75 34 -86 44\r
-71 58 10 11 15 9 119 -44z m-6511 22 c10 -17 -11 -21 -31 -6 -18 14 -18 14 3\r
15 12 0 24 -4 28 -9z m5905 -41 c0 -12 -33 -30 -54 -30 -25 0 -19 15 12 27 36\r
14 42 15 42 3z m444 -34 c6 -25 43 -41 71 -30 10 4 22 -1 31 -15 9 -12 26 -21\r
41 -21 14 0 38 -11 55 -25 16 -14 35 -25 42 -25 7 0 23 -11 36 -25 13 -14 30\r
-25 38 -25 22 0 139 -121 242 -250 93 -117 180 -275 200 -366 5 -23 14 -54 20\r
-70 6 -16 11 -95 11 -179 0 -279 -63 -556 -182 -800 -27 -55 -64 -122 -82\r
-149 -17 -27 -41 -63 -52 -81 -48 -77 -66 -90 -143 -104 -40 -7 -75 -11 -78\r
-9 -8 9 32 35 71 46 41 12 115 65 104 76 -3 3 -25 -1 -49 -9 -58 -21 -78 -3\r
-24 21 84 36 110 54 126 86 9 18 15 35 13 36 -2 2 -20 -1 -40 -8 -20 -7 -39\r
-9 -42 -6 -11 11 30 46 53 46 22 0 114 80 114 100 0 15 -14 12 -41 -9 -13 -10\r
-39 -22 -56 -25 -18 -4 -35 -11 -38 -16 -7 -11 -35 -2 -35 10 0 5 15 13 34 20\r
18 6 41 19 51 30 9 10 29 22 44 25 39 9 91 60 91 89 0 15 -33 3 -54 -19 -13\r
-14 -30 -25 -38 -25 -8 0 -18 -4 -23 -9 -16 -15 -73 -23 -80 -12 -3 6 0 11 7\r
11 19 0 118 52 118 62 0 4 7 8 16 8 25 0 74 39 85 68 14 37 5 37 -33 0 -47\r
-47 -123 -83 -150 -71 -20 9 -20 10 14 31 19 12 43 22 53 22 9 0 32 13 50 29\r
18 16 38 30 45 33 6 2 12 11 14 21 1 10 12 24 24 33 12 8 22 19 22 25 0 17\r
-25 9 -77 -25 -47 -31 -85 -49 -105 -51 -3 0 -10 -3 -14 -7 -4 -5 -12 -8 -17\r
-8 -11 0 23 31 80 73 150 110 204 159 189 174 -5 5 -44 -15 -141 -76 -36 -23\r
-162 -81 -175 -81 -10 0 56 51 90 69 142 75 215 131 231 178 6 19 9 36 6 39\r
-2 3 -23 -12 -46 -32 -40 -36 -164 -94 -201 -94 -32 0 -32 18 1 25 75 17 229\r
118 229 152 0 24 -26 25 -64 2 -20 -12 -40 -18 -44 -14 -4 4 -1 10 7 13 8 3\r
30 20 50 38 31 28 34 34 19 39 -12 5 -35 -4 -66 -24 -29 -18 -60 -30 -75 -29\r
-34 3 -34 11 -2 32 27 17 63 81 53 92 -4 3 -20 -2 -37 -11 -17 -8 -31 -11 -31\r
-6 0 13 49 51 66 51 16 0 48 65 39 80 -3 5 -17 7 -30 4 -22 -6 -22 -3 10 30\r
35 38 37 54 7 89 -11 13 -13 20 -5 28 14 14 -5 62 -21 55 -41 -16 -46 -17 -46\r
-7 0 6 16 19 35 28 38 18 44 33 20 53 -12 10 -19 10 -27 2 -13 -13 -39 -16\r
-37 -4 6 37 -25 42 -109 17 -41 -13 -52 -20 -52 -37 0 -18 -4 -20 -32 -14 -17\r
3 -33 8 -36 10 -9 9 11 27 44 41 34 14 43 28 24 40 -14 9 -131 -53 -156 -83\r
-33 -37 -46 -24 -24 24 17 36 27 44 89 68 39 15 71 30 71 33 0 2 -5 13 -11 24\r
-9 17 -17 20 -52 14 l-42 -6 28 16 c44 25 34 38 -25 30 -29 -3 -62 -9 -73 -12\r
-18 -5 -18 -4 -6 11 8 9 29 24 47 32 19 9 34 23 34 30 0 17 -14 18 -42 3 -18\r
-9 -19 -8 -13 10 8 25 -3 26 -60 6 -22 -8 -44 -15 -48 -15 -11 0 42 44 72 59\r
39 21 10 35 -34 17 -21 -9 -46 -16 -57 -16 -18 0 -19 2 -7 16 7 9 23 20 36 25\r
25 9 32 39 9 39 -8 0 -33 -11 -55 -24 -25 -14 -52 -21 -66 -18 -34 6 -31 18\r
10 38 20 9 38 20 41 25 7 12 -21 12 -44 0 -95 -48 -117 -38 -29 14 37 22 67\r
42 67 46 0 19 -44 20 -69 2 -56 -42 -137 -77 -146 -63 -3 5 31 30 75 56 55 32\r
80 52 78 63 -6 30 -47 22 -135 -26 -99 -54 -151 -75 -158 -63 -3 5 4 12 16 15\r
35 11 179 98 179 108 0 5 -13 7 -30 4 -16 -4 -30 -3 -30 2 0 13 44 22 77 15\r
20 -4 33 -1 42 10 19 22 28 20 35 -8z m-6620 -109 c44 -43 86 -84 95 -90 9 -7\r
32 -32 50 -57 19 -25 43 -54 52 -65 47 -54 126 -158 174 -230 29 -44 62 -89\r
74 -99 11 -11 21 -23 21 -27 0 -5 14 -31 30 -57 35 -58 36 -63 11 -79 -16 -10\r
-24 -6 -58 25 -22 20 -59 71 -82 112 -24 41 -56 92 -72 114 -16 22 -29 43 -29\r
48 0 16 -70 115 -122 171 -16 17 -28 34 -28 38 0 5 -58 67 -130 139 -98 99\r
-130 137 -130 156 l0 25 33 -23 c17 -12 68 -58 111 -101z m7566 71 c0 -6 -7\r
-5 -15 2 -8 7 -15 17 -15 22 0 6 7 5 15 -2 8 -7 15 -17 15 -22z m85 -61 c11\r
-6 22 -15 25 -18 3 -3 13 -8 23 -12 24 -9 21 -27 -5 -27 -13 0 -44 18 -70 41\r
-74 63 -61 71 27 16z m-395 -22 c19 -18 45 -38 58 -44 27 -14 29 -31 2 -31\r
-11 0 -27 -11 -36 -25 -9 -14 -20 -25 -23 -25 -13 0 -141 134 -141 147 0 6 10\r
13 23 16 42 7 82 -6 117 -38z m2487 16 c7 -10 9 -22 6 -25 -12 -12 -21 -6 -25\r
19 -6 30 3 32 19 6z m-2227 -61 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1\r
10 4 10 6 0 11 -4 11 -10z m2215 -27 c-2 -10 -7 -31 -11 -48 l-7 -30 -7 30\r
c-4 20 -2 36 8 48 8 9 16 17 18 17 1 0 1 -8 -1 -17z m-2065 -43 c0 -5 -11 -10\r
-25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m-3823 -44\r
l28 -24 -27 -11 c-15 -5 -34 -22 -44 -36 -18 -27 -64 -35 -64 -11 0 8 -7 16\r
-15 18 -13 2 -12 8 5 36 19 30 48 50 77 51 7 1 25 -10 40 -23z m-719 -19 c27\r
-30 32 -60 10 -65 -10 -2 -43 2 -74 8 -45 10 -59 17 -74 43 -11 17 -15 34 -11\r
37 5 3 36 3 69 2 46 -3 65 -9 80 -25z m4392 -22 c7 -8 8 -15 3 -15 -5 0 -17\r
-13 -26 -30 -17 -28 -47 -41 -47 -20 0 20 34 80 46 80 6 0 17 -7 24 -15z\r
m-4263 -10 c44 -6 64 -17 61 -33 -7 -39 -118 -12 -118 29 0 16 4 19 18 14 9\r
-4 27 -9 39 -10z m4183 5 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m-1480 -20 c30 -6 66 -13 79 -16 22 -5 23 -6 6 -24 -10\r
-11 -29 -20 -42 -20 -16 0 -23 -6 -23 -18 0 -28 -11 -34 -25 -15 -11 15 -15\r
15 -29 4 -9 -7 -16 -19 -16 -26 0 -16 -47 -26 -74 -15 -12 4 -34 19 -49 33\r
-28 24 -28 25 -13 55 16 31 84 64 116 57 8 -2 40 -8 70 -15z m3710 -20 c0 -5\r
-9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m-3380\r
-16 c0 -2 -9 -4 -21 -4 -11 0 -18 4 -14 10 5 8 35 3 35 -6z m-985 -24 c-23\r
-24 -37 -30 -71 -30 -71 0 -88 45 -18 48 20 1 39 4 42 7 3 3 21 5 41 5 l35 0\r
-29 -30z m2045 20 c0 -12 -35 -31 -43 -24 -3 3 -3 12 0 20 6 16 43 19 43 4z\r
m-2237 -37 c76 -53 97 -130 55 -204 -22 -40 -74 -73 -133 -85 -35 -7 -113 32\r
-145 73 -50 64 4 211 90 246 28 11 95 -4 133 -30z m-3538 6 c-10 -15 -25 -10\r
-19 6 4 8 10 12 15 9 5 -3 7 -10 4 -15z m2072 7 c3 -3 -5 -21 -17 -41 -20 -33\r
-25 -35 -58 -29 -48 8 -51 13 -40 53 l9 34 51 -6 c28 -4 53 -9 55 -11z m713 2\r
c0 -6 7 -19 15 -28 8 -9 16 -31 17 -50 3 -33 1 -35 -30 -38 -59 -6 -92 52 -62\r
109 12 21 60 27 60 7z m-512 -24 c55 -29 73 -49 79 -92 3 -22 14 -49 24 -58\r
20 -18 26 -74 9 -74 -5 0 -12 11 -16 25 -7 28 -22 33 -30 10 -4 -8 -18 -15\r
-34 -15 -15 0 -39 -10 -54 -21 -19 -15 -47 -23 -91 -27 -63 -5 -65 -4 -101 32\r
-34 34 -36 39 -30 79 21 132 135 197 244 141z m-2793 -15 c64 -22 307 -35 366\r
-19 63 17 67 4 30 -87 -17 -43 -31 -85 -31 -94 0 -26 -30 -78 -49 -84 -22 -7\r
-262 93 -276 116 -11 17 31 9 149 -30 111 -36 161 -42 153 -18 -2 6 -14 14\r
-28 18 -266 78 -347 109 -356 136 -5 13 28 7 66 -13 29 -15 41 -10 41 16 0 13\r
-10 21 -32 25 -40 9 -104 41 -114 57 -5 8 -2 9 12 3 10 -4 42 -16 69 -26z\r
m4579 -5 c24 -9 19 -24 -6 -23 -41 2 -152 -12 -180 -23 -30 -11 -78 -4 -78 12\r
0 19 227 48 264 34z m616 -8 c0 -9 -25 -20 -67 -31 -38 -10 -95 -26 -128 -36\r
-33 -11 -105 -26 -159 -34 -91 -13 -101 -13 -118 2 -10 9 -18 19 -18 23 0 3\r
49 6 108 7 102 1 112 3 170 34 44 23 83 35 130 39 37 4 70 8 75 9 4 0 7 -5 7\r
-13z m630 -1 c-7 -9 -15 -13 -17 -11 -7 7 7 26 19 26 6 0 6 -6 -2 -15z m-5306\r
-23 c3 -5 31 -14 63 -21 32 -7 68 -17 81 -22 13 -5 32 -9 42 -9 11 0 20 -4 20\r
-10 0 -14 -22 -13 -91 5 -32 8 -62 15 -66 14 -4 -1 -15 1 -23 4 -8 4 -28 11\r
-43 17 -16 5 -25 14 -22 20 7 12 32 13 39 2z m1008 -45 c99 -42 187 -170 196\r
-286 4 -54 1 -70 -19 -107 -37 -68 -89 -85 -181 -58 -35 10 -17 24 30 24 38 0\r
53 5 71 24 22 24 22 24 3 30 -14 5 -18 13 -15 26 6 23 -9 26 -27 5 -23 -27\r
-78 -30 -128 -5 -40 20 -43 24 -28 35 9 7 25 11 36 8 10 -3 33 5 50 17 33 23\r
38 51 18 95 -9 21 -17 26 -36 22 -16 -3 -31 3 -47 19 -31 31 -69 30 -101 -1\r
-32 -32 -39 -31 -81 6 -34 29 -37 30 -106 24 -83 -8 -142 -33 -142 -61 0 -10\r
-10 -24 -23 -30 -28 -14 -51 -43 -52 -65 0 -27 27 -42 77 -41 47 1 83 -17 83\r
-43 0 -7 -18 -20 -41 -30 -22 -10 -45 -27 -50 -38 -9 -15 -17 -17 -49 -12 -27\r
5 -46 2 -63 -9 -23 -15 -24 -21 -22 -104 1 -48 3 -90 4 -94 0 -5 19 -8 41 -8\r
29 0 40 -4 40 -15 0 -8 -9 -15 -20 -15 -41 0 -19 -30 26 -35 14 -1 39 -17 55\r
-34 27 -30 31 -31 81 -25 63 8 65 9 48 29 -11 13 -7 14 32 9 43 -6 46 -5 52\r
20 8 31 21 33 36 6 8 -15 21 -20 55 -20 48 0 75 -8 75 -21 0 -5 -7 -9 -15 -9\r
-8 0 -15 -7 -15 -15 0 -8 9 -15 20 -15 11 0 20 -4 20 -10 0 -5 -10 -9 -21 -7\r
-34 3 -33 -19 0 -33 31 -13 101 -6 101 9 0 5 -14 11 -31 15 -17 3 -28 10 -25\r
15 3 4 17 6 31 3 27 -5 55 12 55 34 0 9 -11 14 -31 14 -24 0 -30 4 -27 18 5\r
28 51 27 87 -3 17 -15 31 -33 31 -40 0 -26 52 -57 85 -51 16 3 55 -2 85 -12\r
43 -13 55 -21 52 -34 -3 -14 3 -18 25 -18 42 0 61 16 29 24 -65 16 5 34 111\r
28 12 0 55 21 95 47 67 45 74 47 110 38 52 -13 38 -25 -132 -114 -97 -50 -164\r
-73 -280 -93 -71 -12 -242 -1 -315 21 -38 11 -39 12 -17 22 32 15 27 27 -12\r
27 -18 0 -47 3 -64 6 -26 5 -32 2 -48 -25 -20 -35 -28 -38 -121 -46 -40 -3\r
-63 -2 -63 5 0 5 13 10 29 10 17 0 32 4 35 9 14 21 -139 114 -204 125 -41 7\r
-53 20 -108 110 -89 148 -66 360 61 548 44 66 87 105 137 125 19 8 44 18 55\r
23 53 24 126 43 185 49 66 7 126 -5 212 -42z m653 23 c77 -12 176 -25 220 -31\r
125 -16 138 -52 24 -70 -102 -16 -305 14 -370 56 -20 13 -55 29 -78 35 -26 7\r
-41 16 -41 27 0 18 7 17 245 -17z m-244 -19 l42 -39 -31 -6 c-64 -15 -126 36\r
-90 72 20 20 36 14 79 -27z m3347 20 c9 6 5 0 -10 -14 -18 -17 -44 -28 -75\r
-32 -27 -3 -68 -13 -93 -21 -67 -24 -214 -51 -250 -46 -50 7 -28 26 46 39 38\r
6 94 21 124 32 30 11 79 23 108 27 29 3 54 10 57 14 3 5 21 4 41 -1 25 -8 40\r
-7 52 2z m-4315 -7 c9 -10 -4 -34 -19 -34 -16 0 -16 2 -8 24 6 17 16 20 27 10z\r
m3672 -5 c12 -19 -5 -23 -22 -6 -16 16 -16 17 -1 17 9 0 20 -5 23 -11z m-337\r
-20 c17 -7 22 -16 22 -44 0 -33 -2 -35 -40 -41 -25 -4 -40 -12 -40 -21 0 -11\r
12 -13 62 -8 35 4 65 8 69 11 10 6 83 -17 99 -32 9 -7 42 -16 73 -20 70 -8 70\r
-26 1 -37 -27 -4 -74 -12 -105 -17 -30 -6 -71 -10 -90 -10 -19 0 -40 -5 -47\r
-12 -9 -9 -25 -5 -72 17 l-60 29 22 24 c20 20 23 34 23 103 l0 79 30 -6 c17\r
-4 40 -10 53 -15z m269 -4 c48 -34 28 -95 -32 -95 -19 0 -57 5 -85 11 -75 16\r
-86 54 -25 87 29 16 117 14 142 -3z m-4097 -14 c0 -12 -20 -25 -27 -18 -7 7 6\r
27 18 27 5 0 9 -4 9 -9z m80 -3 c-1 -7 -7 -24 -15 -38 -22 -39 -18 -49 23 -56\r
20 -4 42 -10 47 -14 6 -5 26 -13 45 -18 l35 -10 -35 -1 c-19 0 -53 6 -75 14\r
-22 8 -48 15 -58 15 -26 0 -32 -28 -12 -50 18 -19 17 -20 -8 -20 -29 0 -77 19\r
-77 31 0 4 10 9 23 11 30 4 38 48 8 48 -12 0 -21 6 -21 16 0 11 6 13 20 9 10\r
-3 29 -1 40 5 17 9 19 14 9 26 -6 8 -10 15 -8 17 2 1 13 7 24 14 26 16 35 16\r
35 1z m360 -18 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15\r
-4 15 -10z m4409 -9 c16 -10 6 -18 -42 -33 -31 -10 -177 -37 -207 -39 -8 0\r
-41 -5 -73 -10 -36 -6 -63 -6 -74 0 -16 8 -15 10 7 19 37 14 225 53 300 61 36\r
5 67 8 70 9 3 1 11 -2 19 -7z m-5564 -11 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11\r
10 0 6 2 10 4 10 3 0 8 -4 11 -10z m2175 -11 c113 -11 215 -25 226 -31 25 -12\r
57 -13 97 -3 20 6 33 2 48 -11 18 -16 36 -19 105 -18 46 0 84 -2 84 -6 0 -9\r
-74 -30 -110 -32 -14 -1 -55 6 -93 16 -65 16 -68 16 -112 -3 -25 -11 -58 -29\r
-73 -39 -15 -11 -38 -22 -52 -25 -82 -18 -90 -22 -90 -42 0 -8 23 -22 51 -32\r
32 -11 54 -25 57 -36 4 -18 16 -19 158 -15 85 1 154 0 154 -3 0 -3 -9 -14 -19\r
-23 -14 -13 -35 -17 -83 -16 -120 3 -188 0 -188 -8 0 -5 40 -8 90 -8 49 0 92\r
-3 96 -7 14 -14 -19 -35 -81 -51 -97 -24 -126 -22 -158 15 -30 35 -27 53 9 46\r
13 -2 24 0 24 4 0 5 -13 9 -29 9 -16 0 -37 3 -47 7 -14 5 -16 3 -11 -11 6 -15\r
3 -17 -21 -11 -34 7 -117 -27 -132 -54 -5 -11 -12 -50 -16 -88 -5 -59 -3 -73\r
18 -110 13 -25 45 -58 77 -80 58 -40 65 -56 31 -61 -16 -3 -20 1 -18 15 3 16\r
-7 18 -102 20 -133 3 -167 9 -180 33 -5 10 -10 21 -10 24 0 9 62 7 125 -5 49\r
-9 60 -8 74 5 8 9 11 16 6 17 -6 0 -19 2 -30 5 -11 2 -65 6 -120 9 -55 4 -122\r
13 -149 21 -28 9 -105 18 -174 20 -69 3 -133 9 -142 14 -9 5 -41 12 -71 16\r
-64 8 -89 19 -89 39 0 19 34 19 146 -1 49 -8 122 -17 163 -20 40 -2 78 -7 83\r
-11 14 -8 320 -34 326 -28 14 14 -36 24 -172 34 -49 3 -91 11 -93 17 -6 19 92\r
36 164 29 104 -11 108 -11 111 0 2 6 -34 17 -79 25 l-83 16 33 23 c28 20 36\r
22 61 11 31 -13 70 -10 73 5 1 6 -19 11 -45 13 -50 3 -58 11 -32 32 8 8 21 28\r
29 47 14 32 15 33 77 33 35 0 78 -4 97 -10 44 -12 80 3 41 18 -14 5 -58 12\r
-98 16 -40 4 -80 10 -88 13 -32 12 -4 28 57 33 54 4 61 7 44 16 -11 7 -39 15\r
-62 19 -43 7 -53 17 -32 31 7 4 46 7 88 6 l76 -1 -102 26 c-73 18 -103 30\r
-103 41 0 16 -7 17 209 -13 130 -17 191 -19 191 -6 0 15 -24 20 -143 31 -61 6\r
-124 15 -138 19 -14 5 -37 7 -50 5 -13 -3 -46 7 -74 20 -63 31 -58 31 195 5z\r
m-2100 -29 c75 -49 300 -126 395 -135 17 -1 46 -9 65 -17 33 -14 35 -18 34\r
-59 -3 -83 -3 -82 -21 -74 -59 24 -150 55 -160 55 -49 0 39 -53 105 -63 48 -8\r
72 -25 72 -52 0 -28 -12 -32 -30 -11 -6 8 -35 22 -63 32 -77 25 -218 85 -249\r
106 -15 10 -30 27 -33 38 -4 11 -30 33 -58 47 -43 23 -48 28 -29 31 12 2 22 7\r
22 10 0 9 -34 43 -77 78 -55 44 -34 55 27 14z m4855 20 c-3 -5 -10 -10 -16\r
-10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m678 -14 c9 -7 17 -16\r
17 -19 0 -3 -31 -14 -68 -26 -53 -16 -81 -32 -129 -76 -60 -54 -109 -123 -122\r
-174 -6 -21 -15 -27 -47 -32 -34 -6 -42 -4 -60 19 l-21 26 21 17 c11 9 38 22\r
59 28 20 7 37 17 37 23 0 13 -50 2 -123 -27 -31 -12 -60 -19 -63 -14 -14 23\r
20 46 105 72 50 16 91 32 91 37 0 18 -20 20 -49 5 -17 -8 -39 -15 -50 -15 -11\r
0 -54 -11 -95 -25 -41 -14 -82 -25 -91 -25 -9 0 -19 -9 -22 -20 -5 -20 -23\r
-28 -23 -10 0 9 -73 63 -114 85 -10 6 -19 14 -20 20 0 5 55 20 124 33 69 13\r
132 28 141 32 17 9 39 -5 39 -25 0 -10 -119 -40 -190 -47 -14 -2 -25 -9 -25\r
-18 0 -9 10 -15 25 -15 23 -1 49 6 205 51 28 8 65 17 84 19 18 3 54 14 78 25\r
24 11 68 22 96 26 83 9 157 33 157 49 0 18 10 19 33 1z m245 -6 c9 0 39 -21\r
65 -45 26 -25 52 -43 57 -40 5 3 23 -14 40 -37 17 -24 39 -52 49 -63 23 -25\r
12 -65 -19 -65 -11 0 -23 -7 -26 -15 -4 -10 -13 -13 -26 -9 -13 4 -26 -1 -39\r
-15 -23 -25 -79 -55 -86 -47 -3 3 5 15 18 26 l24 21 -27 -5 c-16 -4 -28 -5\r
-28 -3 0 2 24 16 53 31 132 69 114 79 -28 15 -111 -49 -135 -57 -135 -40 0 14\r
65 50 155 86 96 40 115 66 21 30 -36 -14 -96 -36 -133 -50 -47 -19 -69 -23\r
-77 -15 -7 7 -7 15 0 28 12 18 25 23 124 46 89 20 125 35 114 46 -6 6 -33 6\r
-72 -1 -68 -12 -82 -8 -62 16 7 9 11 18 8 20 -7 7 -111 -15 -122 -26 -6 -5\r
-22 -9 -38 -9 -21 0 -36 -11 -67 -52 -21 -29 -41 -62 -43 -73 -5 -28 -65 -65\r
-104 -65 -19 0 -34 -5 -34 -11 0 -7 18 -9 47 -7 29 2 48 -1 50 -9 3 -7 -10\r
-13 -34 -15 -26 -2 -39 -8 -41 -20 -5 -24 97 -46 133 -30 34 16 45 15 45 -3 0\r
-18 -36 -27 -119 -30 -80 -2 -76 -1 -61 -20 11 -13 36 -15 144 -13 l130 3 23\r
-40 c12 -22 23 -45 23 -51 0 -19 -43 -42 -93 -49 -38 -6 -47 -4 -47 8 0 9 14\r
17 39 21 21 3 44 13 52 22 15 18 24 18 -126 -7 -68 -11 -71 -11 -110 14 -57\r
37 -68 50 -98 110 -52 103 -29 211 61 285 67 54 87 65 172 91 41 13 104 34\r
140 46 36 12 71 21 78 19 8 -2 21 -4 30 -4z m212 -4 c0 -3 -4 -8 -10 -11 -5\r
-3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-1026 -26 c-11 -11 -85 -28\r
-101 -23 -7 2 -10 10 -7 18 4 8 24 13 61 14 34 0 53 -3 47 -9z m-5064 -83 c30\r
-24 56 -50 58 -59 6 -29 -33 -9 -92 48 -68 66 -46 73 34 11z m2516 31 c3 -4\r
14 -8 25 -8 11 0 22 -7 26 -16 7 -18 -12 -34 -40 -34 -11 0 -32 -10 -49 -21\r
-25 -18 -39 -21 -85 -16 -63 7 -76 15 -49 31 10 6 40 25 65 42 43 30 96 41\r
107 22z m-1046 -16 c0 -4 -18 -13 -40 -19 -30 -8 -40 -7 -37 1 2 6 17 14 33\r
17 43 10 44 10 44 1z m-482 -27 c17 -6 15 -25 -3 -25 -32 0 -115 22 -115 31 0\r
9 84 4 118 -6z m-234 -46 c-2 -4 -11 -6 -19 -2 -16 5 -20 25 -8 37 9 9 34 -24\r
27 -35z m696 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0\r
10 -4 10 -10z m7170 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
6 0 10 -4 10 -10z m-7785 -28 c-8 -8 -25 10 -19 20 4 6 9 5 15 -3 4 -7 6 -15\r
4 -17z m-88 -48 c2 -6 -3 -16 -11 -23 -12 -10 -20 -9 -40 4 -14 9 -30 14 -36\r
10 -5 -3 -10 0 -10 7 0 17 91 19 97 2z m737 7 c3 -4 3 -10 0 -13 -7 -8 -54 3\r
-54 13 0 12 47 12 54 0z m-664 -48 c0 -7 -4 -13 -10 -13 -5 0 -10 12 -10 28 0\r
21 2 24 10 12 5 -8 10 -21 10 -27z m4290 -36 c0 -10 5 -27 11 -38 7 -15 7 -29\r
0 -51 -14 -40 -6 -48 21 -21 16 17 21 33 20 67 -2 50 13 61 28 22 20 -54 -23\r
-132 -93 -167 -52 -27 -154 -24 -186 5 -29 26 -26 38 4 24 30 -13 73 4 140 55\r
22 17 42 32 44 33 1 2 1 8 -1 14 -2 7 -21 -2 -46 -24 -46 -38 -94 -52 -144\r
-42 -115 23 -143 46 -58 46 44 0 58 6 104 40 29 22 56 40 61 40 4 0 5 -11 3\r
-25 -3 -14 -2 -27 2 -30 13 -8 48 39 55 73 6 31 8 32 21 15 7 -10 14 -26 14\r
-36z m-4387 -10 c-9 -16 -26 12 -18 30 7 17 8 17 15 -2 4 -11 5 -24 3 -28z\r
m5022 13 c4 -11 10 -18 15 -15 5 3 16 -2 25 -11 15 -15 14 -17 -2 -30 -28 -21\r
-43 -16 -55 17 -10 30 -12 31 -55 25 -33 -4 -44 -3 -40 7 2 6 17 15 33 18 55\r
12 72 10 79 -11z m-4037 -32 c28 -18 51 -36 51 -40 1 -5 -22 -8 -49 -8 -39 0\r
-52 4 -57 18 -4 9 -13 21 -20 25 -11 7 -11 12 -2 23 16 19 20 18 77 -18z\r
m-898 7 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12 23 8 23 -8z m-976 -20\r
c-4 -8 -10 -15 -15 -15 -4 0 -6 7 -3 15 4 8 10 15 15 15 4 0 6 -7 3 -15z\r
m1656 0 c0 -10 -10 -15 -30 -15 -49 0 -34 24 18 29 6 0 12 -6 12 -14z m3375 5\r
c-27 -12 -35 -12 -35 0 0 6 12 10 28 9 24 0 25 -1 7 -9z m455 -14 c0 -18 -6\r
-22 -47 -31 -25 -5 -33 -3 -33 8 0 8 15 19 33 25 45 14 47 14 47 -2z m833 -48\r
c10 -11 16 -26 14 -32 -5 -15 -64 -46 -137 -72 -36 -13 -56 -23 -44 -23 26 -1\r
60 -26 47 -34 -17 -10 -123 27 -149 52 -27 26 -32 72 -9 91 17 14 36 5 28 -15\r
-10 -28 53 -18 90 15 19 17 42 30 50 30 9 0 19 5 23 11 10 17 66 2 87 -23z\r
m2226 -12 c-9 -8 -10 -7 -5 7 3 10 7 24 7 30 1 7 3 4 6 -7 3 -10 -1 -23 -8\r
-30z m-6889 10 c69 -8 91 -26 30 -25 -68 1 -133 13 -137 25 -4 11 7 11 107 0z\r
m3838 -19 c2 -11 -7 -19 -30 -25 -68 -18 -91 11 -27 34 41 15 53 13 57 -9z\r
m-5543 -7 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9\r
-10z m949 -5 c3 -8 18 -15 34 -15 15 0 37 -7 48 -15 18 -14 18 -14 0 -15 -16\r
0 -56 9 -115 26 -11 3 -11 7 -1 19 16 19 26 19 34 0z m-804 -15 c0 -5 -2 -10\r
-4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m5440 -23 c0 -8\r
-30 -21 -77 -32 -80 -20 -153 -27 -153 -14 0 10 54 30 118 45 78 16 112 17\r
112 1z m2934 -18 c-16 -17 -63 -54 -104 -82 -41 -28 -117 -81 -169 -119 -51\r
-37 -100 -68 -107 -68 -24 0 -15 19 11 26 13 3 33 20 43 37 13 22 35 38 70 52\r
28 10 66 33 84 50 19 16 45 36 58 43 38 19 94 62 103 78 4 8 15 14 24 14 13 0\r
10 -8 -13 -31z m-3271 -89 c31 -12 57 -26 57 -31 0 -6 -8 -8 -17 -5 -10 3 -46\r
10 -80 15 -34 5 -75 17 -91 25 -29 15 -92 82 -92 98 0 5 37 -12 83 -36 45 -25\r
108 -54 140 -66z m-5203 85 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15\r
4 15 6 0 10 -7 10 -15z m1141 -15 c22 -12 25 -35 7 -47 -7 -5 -26 -23 -43 -41\r
-29 -33 -29 -34 -11 -48 19 -13 18 -14 -11 -14 -40 0 -60 23 -45 53 6 12 13\r
35 14 52 2 20 11 34 28 42 31 16 36 16 61 3z m4445 -7 c16 -16 13 -18 -37 -29\r
-85 -18 -169 -25 -169 -14 0 5 12 12 28 16 15 3 54 14 87 24 76 23 71 23 91 3z\r
m-4660 -13 c30 0 55 -10 49 -20 -3 -5 -20 -6 -39 -3 -28 4 -34 2 -39 -17 -8\r
-29 -27 -16 -27 19 0 33 10 45 24 31 5 -5 20 -10 32 -10z m5654 0 c0 -5 -10\r
-10 -22 -9 -22 0 -22 1 -3 9 11 5 21 9 23 9 1 1 2 -3 2 -9z m-4940 -10 c0 -5\r
-13 -10 -29 -10 -17 0 -33 5 -36 10 -4 6 8 10 29 10 20 0 36 -4 36 -10z m3992\r
-27 c10 -9 18 -22 18 -28 0 -17 -41 -26 -79 -19 -20 4 -31 2 -31 -5 0 -11 -75\r
-9 -87 3 -6 6 31 23 106 51 49 17 52 17 73 -2z m681 -24 c-4 -4 -14 -4 -22 1\r
-13 7 -13 11 -1 25 12 15 14 15 23 0 5 -10 5 -21 0 -26z m-6178 22 c3 -5 1\r
-12 -5 -16 -5 -3 -10 1 -10 9 0 18 6 21 15 7z m1735 0 c0 -12 -20 -25 -27 -18\r
-7 7 6 27 18 27 5 0 9 -4 9 -9z m640 -40 c0 -5 -11 -16 -25 -25 -22 -15 -28\r
-15 -53 -2 l-27 15 25 10 c31 12 80 14 80 2z m3213 -23 c21 -11 21 -11 2 -19\r
-11 -4 -32 -8 -47 -8 -18 -1 -29 -8 -34 -23 l-6 -21 -13 23 c-12 23 -11 25 24\r
41 45 21 47 22 74 7z m-4815 -29 c2 -21 1 -22 -8 -6 -6 9 -19 17 -28 17 -15 0\r
-15 2 -2 10 22 14 35 7 38 -21z m4327 16 c11 -1 35 -3 53 -4 49 -2 31 -17 -38\r
-30 -57 -11 -62 -11 -90 11 -40 32 -37 41 13 32 23 -4 51 -8 62 -9z m1085 -6\r
c0 -11 -4 -18 -10 -14 -5 3 -7 12 -3 20 7 21 13 19 13 -6z m-5057 -10 c9 -5\r
17 -14 17 -19 0 -10 -27 -3 -47 12 -7 6 -17 7 -22 4 -5 -4 -29 -3 -53 0 -34 6\r
-38 9 -23 15 23 9 101 2 128 -12z m-994 -38 c25 -14 72 -35 105 -47 50 -17 62\r
-25 66 -46 6 -30 90 -98 120 -98 12 0 23 -7 26 -15 4 -10 18 -15 38 -14 37 2\r
86 -16 86 -32 0 -8 -4 -8 -14 0 -9 8 -16 9 -20 2 -4 -6 -21 -8 -39 -4 -18 3\r
-29 2 -25 -2 10 -11 -41 -37 -55 -28 -6 4 -1 10 11 14 13 5 22 17 22 29 0 17\r
-6 20 -40 20 -22 0 -40 5 -40 10 0 13 -32 45 -53 53 -12 5 -19 -1 -23 -18 -4\r
-16 -13 -25 -26 -25 -28 0 -228 201 -228 229 0 24 2 24 89 -28z m-269 29 c0\r
-5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m5540 -19\r
c5 -11 17 -26 25 -35 14 -14 13 -17 -15 -31 -32 -17 -42 -40 -12 -31 9 2 36\r
10 60 17 51 15 69 4 47 -28 -12 -16 -29 -22 -95 -27 -121 -11 -200 0 -262 38\r
-62 37 -69 60 -18 64 80 6 174 23 199 37 36 20 58 18 71 -4z m-3220 0 c0 -16\r
-36 -22 -64 -12 -38 15 -32 21 19 21 25 0 45 -4 45 -9z m3521 -5 c-13 -7 -32\r
-11 -42 -9 -30 8 -11 23 29 23 36 -1 36 -1 13 -14z m-5731 0 c0 -3 -4 -8 -10\r
-11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1043 -13 c26 -3 50\r
-10 53 -15 4 -6 -12 -8 -42 -5 -78 9 -114 18 -108 29 4 5 16 7 28 3 11 -4 42\r
-9 69 -12z m4009 -31 c31 -27 72 -59 91 -71 49 -30 155 -51 264 -51 62 0 105\r
-5 130 -16 65 -28 123 -58 123 -65 0 -14 -151 -31 -210 -25 -38 4 -73 3 -93\r
-4 -27 -10 -40 -9 -85 9 -63 25 -82 26 -82 6 0 -16 19 -26 88 -45 31 -8 42\r
-16 40 -27 -5 -28 -43 -33 -85 -12 -21 12 -56 26 -78 33 -49 14 -88 73 -125\r
187 -13 41 -30 86 -37 102 -19 39 -4 34 59 -21z m-5098 29 c3 -5 -1 -14 -8\r
-20 -12 -10 -13 -8 -9 8 6 23 9 25 17 12z m7991 -1 c-3 -5 -11 -10 -16 -10 -6\r
0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m-1570 -10 c-3 -5 -10 -10 -16\r
-10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m-3657 -26 c28 -19 28\r
-40 1 -55 -26 -13 -39 1 -39 44 0 31 7 33 38 11z m3022 -4 c0 -5 -8 -10 -17\r
-10 -15 0 -16 2 -3 10 19 12 20 12 20 0z m348 -2 c-2 -6 -10 -14 -16 -16 -7\r
-2 -10 2 -6 12 7 18 28 22 22 4z m227 2 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10\r
10 3 6 8 10 10 10 2 0 7 -4 10 -10z m-6305 -54 c0 -5 -7 -3 -15 4 -8 7 -15 20\r
-15 28 0 13 3 12 15 -4 8 -10 15 -23 15 -28z m105 3 c30 -41 152 -142 252\r
-209 40 -26 49 -37 41 -47 -12 -14 -23 -9 -23 10 0 7 -9 12 -20 12 -17 0 -20\r
-6 -19 -39 1 -24 8 -42 18 -48 9 -5 16 -15 16 -22 0 -21 29 -41 41 -29 7 7 5\r
16 -7 28 -16 16 -16 17 6 13 28 -4 51 -35 34 -46 -6 -4 -16 -16 -22 -27 -10\r
-17 -11 -18 -12 -2 0 21 -3 21 -41 1 -39 -20 -48 -11 -27 26 18 32 15 40 -12\r
33 -10 -3 -20 -15 -22 -26 -2 -12 -11 -23 -20 -25 -19 -4 -122 39 -180 75 -42\r
25 -114 117 -124 157 -8 32 -2 33 30 1 30 -30 41 -32 26 -6 -24 45 0 57 32 15\r
24 -30 32 -26 19 10 -7 16 -7 26 -1 26 13 0 32 -38 25 -50 -3 -6 1 -7 10 -4\r
10 4 13 13 10 25 -5 16 -1 19 22 19 20 0 24 3 14 9 -7 5 -10 14 -7 20 4 6 -5\r
18 -23 28 -17 10 -32 28 -35 44 -3 16 -14 30 -26 34 -11 3 -20 13 -20 21 0 24\r
14 16 45 -27z m2303 23 c7 -21 -53 -70 -94 -77 -21 -4 -45 -15 -52 -24 -9 -11\r
-29 -16 -67 -16 -98 0 -84 22 40 62 39 13 88 34 110 48 42 25 56 27 63 7z\r
m3713 -43 c-24 -20 -51 -25 -51 -10 0 5 11 16 25 25 14 9 25 24 26 34 0 13 3\r
11 12 -7 10 -20 8 -26 -12 -42z m149 53 c0 -5 -11 -14 -25 -20 -31 -14 -33 1\r
-2 16 28 14 27 13 27 4z m1533 -14 c-8 -33 -23 -48 -47 -48 -12 0 -32 -7 -44\r
-16 -20 -14 -22 -14 -22 1 0 8 10 19 23 24 12 5 37 21 56 35 19 14 36 26 37\r
26 1 0 0 -10 -3 -22z m127 8 c0 -8 -7 -16 -15 -20 -13 -4 -14 -2 -5 14 13 23\r
20 26 20 6z m-7106 -11 c3 -9 0 -15 -9 -15 -16 0 -27 14 -18 24 10 10 21 7 27\r
-9z m4195 -114 c17 -51 31 -104 31 -117 0 -32 44 -80 80 -87 18 -4 30 -13 30\r
-23 0 -13 -7 -15 -42 -9 -41 7 -51 13 -73 51 -10 16 -12 16 -38 -1 -29 -18\r
-35 -46 -14 -62 6 -5 43 -11 81 -12 83 -2 108 -13 101 -44 -3 -12 -8 -35 -10\r
-52 -2 -16 -4 -32 -4 -35 -1 -3 -5 1 -10 9 -5 7 -22 15 -38 17 -64 7 -153 60\r
-153 90 0 20 -14 18 -35 -6 -21 -23 -47 -11 -27 12 9 12 28 71 36 118 2 8 10\r
39 19 69 10 30 17 86 17 125 0 43 4 66 9 61 5 -6 23 -52 40 -104z m-3837 77\r
c36 -14 25 -31 -14 -23 -23 6 -29 4 -26 -6 3 -9 16 -13 32 -11 22 3 27 0 24\r
-14 -2 -14 -15 -18 -59 -21 -64 -4 -82 9 -77 53 5 43 47 50 120 22z m4604 9\r
c8 -7 -15 -12 -129 -28 -64 -9 -91 -9 -99 -1 -11 11 2 15 117 30 68 8 102 8\r
111 -1z m2104 3 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4\r
-4 4 -10z m-2986 -80 c-18 -95 -67 -195 -122 -252 -40 -41 -43 -48 -27 -54 14\r
-6 27 4 56 37 21 24 41 52 44 62 8 23 25 22 25 -1 0 -34 -61 -111 -128 -164\r
-37 -29 -77 -62 -89 -73 -30 -28 -103 -59 -193 -81 -41 -10 -86 -24 -100 -31\r
-14 -7 -30 -13 -36 -13 -16 0 -25 -25 -13 -37 16 -16 -47 -39 -65 -24 -10 9\r
-15 8 -19 -3 -7 -17 11 -36 34 -36 25 0 49 -11 49 -21 0 -5 -18 -6 -40 -3\r
l-40 7 6 -31 c3 -16 1 -32 -4 -36 -21 -13 -41 7 -47 47 -4 23 -11 49 -15 57\r
-4 9 2 31 14 55 25 46 53 59 171 73 87 11 245 52 245 64 0 13 -52 9 -115 -8\r
-45 -12 -114 -16 -272 -17 -210 -2 -213 -2 -228 21 -9 12 -27 22 -41 22 -28 0\r
-30 -7 -8 -32 16 -16 15 -18 -1 -24 -24 -10 -181 73 -207 109 -26 36 -13 51\r
30 35 33 -13 82 -3 89 18 2 6 -12 19 -31 28 -39 18 -47 37 -32 81 11 35 54 95\r
68 95 5 0 6 -24 2 -58 -5 -49 -2 -65 21 -113 26 -57 71 -101 131 -131 55 -27\r
238 -22 409 11 85 17 282 114 322 160 18 20 32 39 33 42 0 3 20 40 44 82 24\r
43 52 107 62 142 10 36 21 65 25 65 3 0 0 -31 -7 -70z m2950 57 c-4 -12 -26\r
-24 -127 -72 -20 -10 -39 -16 -42 -13 -7 7 93 68 111 68 9 0 22 7 30 15 19 18\r
35 20 28 2z m-1804 -6 c0 -11 -39 -21 -45 -11 -2 4 -2 10 2 14 10 9 43 7 43\r
-3z m1538 -31 c-12 -18 -49 -40 -68 -40 -6 0 -10 8 -10 18 0 10 15 23 38 33\r
44 19 56 15 40 -11z m-7018 4 c0 -10 -6 -14 -15 -11 -8 4 -17 2 -20 -4 -8 -13\r
-25 -2 -25 17 0 9 11 14 30 14 21 0 30 -5 30 -16z m-563 -20 c-9 -9 -28 6 -21\r
18 4 6 10 6 17 -1 6 -6 8 -13 4 -17z m5823 16 c0 -4 -33 -14 -72 -21 -88 -16\r
-97 -17 -100 -4 -2 6 29 15 67 20 96 15 105 15 105 5z m-4220 -20 c0 -5 -8\r
-10 -17 -11 -51 -2 -102 -9 -139 -17 -29 -6 -45 -6 -57 3 -24 18 -21 23 16 28\r
70 8 197 7 197 -3z m368 -2 c20 -20 13 -31 -15 -23 -36 10 -43 10 -73 0 -39\r
-12 -16 5 27 20 47 18 47 17 61 3z m-1278 -18 c0 -5 -4 -10 -9 -10 -6 0 -13 5\r
-16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m1085 -15 c-16 -8 -37 -14 -45 -15\r
-9 0 -20 -4 -25 -9 -14 -13 -115 -20 -121 -9 -12 18 11 27 96 36 121 13 131\r
13 95 -3z m-1383 -30 c16 -21 7 -25 -24 -9 -43 22 -45 24 -28 34 14 9 35 -2\r
52 -25z m1785 2 c3 -4 3 -12 0 -20 -4 -11 -21 -13 -67 -11 -70 3 -98 18 -59\r
32 25 10 116 9 126 -1z m-1473 -29 c25 -48 22 -60 -11 -45 -33 14 -44 27 -35\r
42 4 5 7 13 8 18 3 15 4 17 13 17 5 0 17 -14 25 -32z m5262 -44 c-3 -9 -9 -14\r
-13 -10 -4 3 -7 17 -8 31 -1 22 1 23 14 11 8 -8 11 -22 7 -32z m1477 32 c9 -7\r
17 -25 17 -40 0 -29 -14 -35 -24 -9 -5 12 -10 13 -18 5 -8 -8 -8 -15 2 -27 15\r
-18 -1 -20 -19 -2 -10 10 -14 8 -23 -7 -7 -13 -12 -15 -18 -6 -5 8 -12 7 -24\r
-5 -25 -26 -29 -12 -5 18 11 15 28 27 36 27 23 0 53 29 46 46 -6 17 7 18 30 0z\r
m-5853 -21 c0 -10 -10 -15 -29 -15 -15 0 -57 -3 -92 -6 -77 -8 -71 6 9 22 84\r
17 112 17 112 -1z m4080 5 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10\r
20 10 11 0 20 -4 20 -10z m-140 -9 c0 -16 -15 -21 -87 -27 -37 -3 -74 -7 -80\r
-9 -16 -5 -16 0 -1 24 9 15 25 19 90 20 46 1 78 -2 78 -8z m754 -26 c-4 -8\r
-10 -13 -15 -10 -4 3 -6 12 -3 20 4 8 10 13 15 10 4 -3 6 -12 3 -20z m-4594 6\r
c0 -5 -7 -14 -15 -21 -13 -10 -15 -9 -15 9 0 12 6 21 15 21 8 0 15 -4 15 -9z\r
m-490 -23 c0 -5 -13 -8 -30 -8 -16 0 -30 4 -30 10 0 5 13 8 30 7 16 -1 30 -5\r
30 -9z m247 -2 c17 5 52 -20 42 -30 -4 -4 -89 -9 -116 -7 -19 1 -16 22 4 36\r
11 8 24 10 34 5 9 -5 25 -7 36 -4z m4257 -7 c5 -5 7 -11 4 -14 -17 -17 -338\r
-43 -338 -27 0 5 29 12 65 15 36 4 80 13 98 21 54 25 147 28 171 5z m-4994 -9\r
c0 -11 -2 -20 -3 -20 -2 0 -12 9 -22 20 -18 19 -17 20 3 20 15 0 22 -6 22 -20z\r
m3293 -31 c-16 -28 -16 -29 7 -54 29 -31 42 -31 80 -4 l28 22 37 -36 37 -36\r
-63 -3 c-37 -2 -64 -8 -66 -15 -3 -9 37 -11 156 -11 146 1 184 -3 170 -17 -11\r
-10 -207 -26 -251 -21 -36 5 -47 3 -50 -8 -3 -13 -11 -12 -56 3 -64 22 -118\r
72 -134 122 -11 37 -6 71 9 67 16 -3 63 14 74 28 9 11 15 11 25 3 12 -9 11\r
-16 -3 -40z m-3544 28 c-2 -1 -13 -9 -24 -17 -19 -14 -19 -14 -6 3 7 9 18 17\r
24 17 6 0 8 -1 6 -3z m301 -12 c7 -8 9 -23 5 -32 -6 -16 -8 -16 -26 6 -10 13\r
-19 27 -19 32 0 14 26 10 40 -6z m6535 5 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11\r
10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-6674 -30 c5 0 4 -9 -3 -19 -14 -23 -23\r
-20 -31 10 -4 15 -2 19 10 15 8 -3 19 -6 24 -6z m6283 -5 c3 -8 13 -15 21 -15\r
19 0 45 -23 45 -39 0 -6 11 -18 24 -26 14 -9 29 -30 35 -48 10 -28 9 -34 -14\r
-55 -15 -13 -27 -22 -28 -21 -1 2 -12 18 -25 36 -12 18 -22 37 -22 42 0 6 -18\r
28 -40 50 -37 36 -50 68 -33 84 11 12 31 8 37 -8z m420 -1 c8 -21 -2 -36 -22\r
-33 -21 3 -79 -32 -98 -60 -18 -24 -64 -29 -64 -6 0 8 7 15 15 15 8 0 19 9 25\r
20 6 11 16 20 22 20 6 0 19 6 27 14 17 16 72 46 82 46 4 0 10 -7 13 -16z\r
m-1577 -10 c3 -9 1 -19 -5 -23 -6 -3 -12 -22 -14 -41 -3 -29 -8 -35 -35 -42\r
-18 -5 -33 -13 -33 -19 0 -6 -10 -9 -22 -7 -16 2 -27 15 -38 48 -14 38 -20 45\r
-41 42 -84 -10 -279 -13 -279 -4 0 11 74 27 88 19 7 -5 146 12 262 33 77 13\r
110 11 117 -6z m-4248 -5 c23 -8 31 -17 31 -34 0 -13 8 -29 18 -34 13 -8 8\r
-10 -25 -11 -36 0 -46 5 -69 35 -17 23 -35 35 -50 35 -13 0 -24 5 -24 10 0 13\r
79 13 119 -1z m5364 -85 c83 -82 86 -100 17 -101 -32 0 -50 4 -50 11 0 6 -20\r
33 -45 60 -49 54 -54 70 -27 85 29 17 35 14 105 -55z m-4425 51 c-8 -9 -98\r
-23 -98 -15 0 15 15 20 58 20 25 0 43 -2 40 -5z m-1851 -60 c14 -5 6 -35 -9\r
-35 -5 0 -6 5 -3 10 9 14 -23 24 -38 12 -15 -12 -61 3 -52 18 5 9 66 6 102 -5z\r
m1891 -18 c4 -31 -19 -40 -89 -35 l-44 3 55 32 c30 18 60 31 65 29 6 -1 11\r
-14 13 -29z m3012 22 c-50 -12 -154 -19 -179 -12 -48 12 -4 22 102 21 81 -1\r
102 -3 77 -9z m470 -5 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6\r
0 10 -7 10 -16z m-5765 -4 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4\r
10 5 0 13 -4 16 -10z m255 -5 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12\r
23 8 23 -8z m6630 0 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6\r
0 10 -7 10 -15z m-4740 -9 c0 -15 -18 -31 -26 -23 -7 7 7 37 17 37 5 0 9 -6 9\r
-14z m3650 -6 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10\r
-4 10 -10z m-5440 -31 c0 -5 -9 -9 -20 -9 -22 0 -27 16 -7 23 15 5 27 -1 27\r
-14z m5600 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10\r
-4 10 -10z m600 -35 c36 -53 36 -77 0 -40 -14 15 -35 36 -47 49 -13 13 -20 26\r
-16 29 15 16 34 4 63 -38z m-6070 25 c28 -17 -18 -23 -53 -6 l-32 16 35 0 c19\r
0 42 -4 50 -10z m977 -6 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z\r
m3846 -6 c-2 -5 -16 -8 -31 -8 -85 0 -148 -52 -121 -101 10 -19 17 -21 68 -15\r
48 5 62 3 81 -12 29 -23 28 -24 -145 -110 -166 -83 -217 -106 -270 -123 -22\r
-7 -44 -17 -49 -21 -6 -4 -22 -8 -37 -8 -15 0 -32 -7 -39 -15 -14 -17 -40 -20\r
-40 -5 0 5 9 14 20 20 11 6 20 16 20 23 0 7 16 19 35 26 20 7 48 24 63 38 l27\r
26 -65 -7 c-44 -5 -62 -4 -55 3 6 5 37 12 70 15 74 6 103 16 135 51 24 26 25\r
27 6 41 -11 8 -26 14 -33 14 -22 0 -14 19 11 26 13 3 37 26 54 52 65 98 66 99\r
190 98 60 -1 108 -4 105 -8z m487 -18 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10\r
0 6 5 10 10 10 6 0 10 -4 10 -10z m520 -19 c0 -5 -7 -14 -15 -21 -8 -6 -26\r
-32 -40 -56 -14 -24 -30 -44 -35 -44 -6 0 -10 -6 -10 -14 0 -7 -7 -20 -17 -27\r
-15 -13 -61 -78 -108 -153 -33 -53 -107 -136 -122 -136 -19 0 -16 37 5 58 53\r
56 172 210 172 223 0 4 20 29 44 55 42 45 67 85 80 127 5 15 9 16 26 7 11 -6\r
20 -14 20 -19z m-5736 -16 c15 -8 34 -15 41 -15 8 0 27 -11 43 -25 17 -14 35\r
-25 40 -25 13 0 52 -54 52 -72 0 -10 -2 -10 -8 -1 -4 7 -35 24 -67 39 -33 14\r
-81 40 -107 57 -68 43 -63 78 6 42z m4326 8 c0 -4 -10 -17 -21 -30 -18 -18\r
-20 -25 -10 -37 11 -12 6 -16 -26 -24 -53 -14 -153 -15 -153 -2 0 13 37 50 50\r
50 6 0 10 5 10 11 0 6 -9 9 -20 6 -11 -3 -20 -2 -20 3 0 8 84 24 148 27 23 1\r
42 -1 42 -4z m1510 -2 c0 -4 -11 -20 -25 -35 -14 -15 -50 -62 -82 -104 -31\r
-42 -59 -79 -62 -82 -3 -3 -10 -12 -16 -21 -5 -9 -28 -41 -50 -70 -47 -62 -65\r
-100 -65 -134 0 -13 -9 -44 -20 -70 -22 -51 -25 -75 -10 -75 6 0 10 8 10 18 0\r
9 15 42 34 73 19 31 37 65 40 76 4 11 15 28 26 38 11 10 20 24 20 31 0 7 9 23\r
20 36 10 12 46 59 79 103 60 80 83 106 138 157 l30 26 28 -22 28 -23 -49 -51\r
c-27 -28 -64 -70 -83 -92 -23 -29 -39 -40 -52 -37 -21 6 -122 -109 -157 -180\r
-12 -23 -26 -45 -32 -48 -11 -7 -4 -25 8 -25 4 0 18 18 32 40 14 22 28 40 33\r
40 12 0 -1 -36 -35 -94 -17 -28 -31 -64 -32 -81 0 -16 -6 -34 -12 -40 -16 -14\r
-34 -73 -34 -112 0 -18 -6 -44 -14 -56 -8 -12 -17 -47 -21 -78 -9 -73 -14 -80\r
-50 -71 -30 8 -30 9 -33 87 -3 78 20 296 39 368 5 20 7 42 3 48 -3 6 3 20 14\r
32 12 12 30 44 42 70 12 26 24 47 28 47 4 0 25 28 47 62 22 34 48 71 58 83 10\r
11 48 55 84 98 58 68 93 94 93 68z m360 -50 c0 -17 -61 -71 -72 -65 -9 6 -9 9\r
0 12 7 2 12 11 12 19 0 13 -3 13 -15 3 -10 -9 -15 -9 -15 -1 0 6 -1 14 -2 18\r
-2 4 13 8 32 9 46 2 46 2 32 16 -7 7 -12 19 -12 27 0 9 6 7 20 -9 11 -13 20\r
-26 20 -29z m-1550 19 c0 -5 -5 -12 -10 -15 -14 -8 -43 2 -36 13 6 11 46 13\r
46 2z m-2250 -77 c32 -51 39 -103 16 -122 -8 -7 -12 -21 -9 -31 4 -17 0 -20\r
-24 -20 -57 0 -89 -67 -54 -112 38 -48 25 -62 -22 -24 -18 14 -33 41 -41 73\r
-12 46 -12 54 4 81 22 36 47 45 97 36 l38 -7 -19 21 c-16 18 -28 21 -88 19\r
l-69 -2 6 -32 c5 -27 -4 -62 -21 -81 -1 -2 -16 6 -33 19 -29 21 -30 24 -14 41\r
17 19 28 37 64 107 33 65 53 81 99 81 37 0 42 -4 70 -47z m777 25 c3 -6 31 -7\r
64 -3 62 7 84 -7 29 -18 -16 -4 -49 -16 -72 -27 -23 -11 -48 -20 -55 -20 -8 0\r
-12 -12 -10 -37 1 -28 -2 -38 -15 -41 -12 -2 -19 5 -24 22 -7 29 -18 32 -54\r
11 -14 -8 -35 -14 -47 -15 -13 0 -31 -8 -40 -17 -26 -26 -87 -24 -92 2 -7 36\r
29 84 85 111 72 35 216 55 231 32z m-3377 -20 c0 -16 -3 -19 -11 -11 -6 6 -8\r
16 -5 22 11 17 16 13 16 -11z m1115 12 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10\r
0 6 2 10 4 10 3 0 8 -4 11 -10z m2895 5 c0 -3 -21 -15 -46 -25 -43 -19 -52\r
-40 -17 -40 12 0 13 -3 3 -15 -13 -15 -5 -39 11 -30 5 4 9 2 9 -3 0 -13 -45\r
-34 -66 -30 -21 4 -48 70 -39 98 7 23 63 49 108 49 20 1 37 -1 37 -4z m175\r
-29 c-16 -8 -35 -12 -42 -9 -22 9 -6 19 34 20 l38 2 -30 -13z m2045 4 c0 -5\r
-4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-5420\r
-10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z\r
m113 -16 c16 -2 33 -6 38 -9 12 -8 12 -32 0 -39 -15 -9 -41 5 -41 21 0 11 -9\r
14 -35 11 -19 -2 -32 -2 -30 1 3 2 -3 10 -13 18 -15 13 -13 14 18 8 19 -4 48\r
-9 63 -11z m3526 7 c7 -5 9 -11 4 -14 -19 -12 -85 -19 -110 -12 -26 7 -25 9\r
22 20 64 16 67 16 84 6z m1813 -6 c0 -5 -20 -16 -44 -24 -24 -9 -44 -16 -46\r
-17 -1 -1 2 -13 8 -28 5 -15 14 -24 20 -21 5 3 10 1 10 -4 0 -6 -12 -11 -28\r
-11 -21 0 -41 -15 -87 -66 -33 -36 -72 -77 -87 -92 -16 -15 -28 -32 -28 -38 0\r
-6 -9 -19 -20 -29 -17 -15 -20 -16 -20 -3 0 8 9 27 20 41 11 14 20 29 20 35 0\r
5 24 32 53 60 62 61 88 92 125 150 22 35 31 42 50 37 15 -4 24 0 28 10 7 17\r
25 16 26 0z m-3497 -28 c11 -28 11 -44 0 -104 -13 -69 -45 -138 -53 -115 -2 7\r
4 37 13 68 9 31 16 82 15 113 -2 86 2 93 25 38z m149 17 c47 3 88 1 91 -4 3\r
-5 -18 -25 -47 -44 -29 -19 -68 -49 -86 -66 -18 -16 -37 -30 -41 -30 -5 0 -11\r
24 -15 53 -3 28 -9 66 -13 82 -6 27 -5 29 10 17 12 -11 38 -13 101 -8z m592 1\r
c-11 -8 -26 -15 -33 -15 -7 0 -13 -9 -13 -20 0 -26 -16 -26 -23 0 -7 27 21 46\r
73 49 11 0 10 -4 -4 -14z m1974 -15 c0 -5 -12 -10 -27 -10 -22 0 -25 2 -13 10\r
20 13 40 13 40 0z m55 -20 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10\r
16 10 6 0 7 -4 4 -10z m-155 -10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6\r
-1 10 4 10 6 0 11 -4 11 -10z m712 -22 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19\r
2 -3 -1 -11 -7 -17z m-462 6 c0 -3 -5 -14 -11 -26 -14 -25 -60 -45 -176 -73\r
-50 -13 -100 -28 -111 -34 -11 -6 -45 -13 -77 -17 -45 -4 -60 -2 -75 11 -12\r
11 -28 15 -42 12 -13 -4 -29 -3 -36 2 -7 4 18 12 61 19 40 6 81 14 92 18 12 5\r
16 4 12 -3 -4 -6 -23 -14 -42 -17 -39 -8 -48 -26 -12 -26 12 0 50 7 82 16 33\r
9 85 22 115 29 30 7 89 31 130 53 74 41 90 48 90 36z m-436 -28 c-3 -9 -10\r
-13 -16 -10 -5 3 -4 12 3 20 15 18 22 13 13 -10z m106 10 c0 -16 -37 -28 -46\r
-15 -3 5 2 9 10 9 9 0 16 5 16 10 0 6 5 10 10 10 6 0 10 -6 10 -14z m-5135 -7\r
c11 -17 -1 -21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m2805 -39 c7 -14 7\r
-33 -1 -66 -12 -45 -13 -46 -45 -41 -19 3 -36 2 -38 -2 -8 -12 19 -90 37 -108\r
16 -16 17 -16 17 2 0 17 2 17 10 5 13 -20 13 -60 0 -60 -17 0 -70 43 -70 56 0\r
6 -7 17 -16 25 -13 10 -17 10 -25 -2 -5 -8 -7 -19 -5 -25 3 -6 -7 -17 -20 -23\r
-29 -13 -23 -31 10 -31 35 0 87 -21 80 -32 -3 -5 -27 -8 -53 -6 -40 3 -46 0\r
-49 -18 -4 -31 20 -45 87 -51 44 -4 67 -2 83 9 13 8 36 18 51 22 26 6 28 5 22\r
-16 -12 -39 -31 -51 -86 -54 -56 -3 -70 -13 -45 -33 11 -9 20 -10 35 -2 11 6\r
43 11 71 11 39 0 52 4 56 18 3 9 15 37 27 62 21 43 24 45 71 48 l48 3 -7 -53\r
c-4 -29 -13 -63 -21 -76 -8 -12 -12 -27 -9 -32 4 -6 -9 -17 -29 -25 -19 -8\r
-37 -19 -41 -25 -3 -5 -21 -10 -38 -10 -18 0 -38 -4 -46 -9 -17 -11 -127 29\r
-173 62 -31 21 -86 78 -100 101 -3 6 -9 39 -12 72 -6 54 -4 68 19 109 14 27\r
25 54 25 62 0 10 6 12 20 8 31 -10 44 4 25 25 -16 18 -15 21 26 60 29 28 48\r
38 61 34 12 -3 18 0 18 10 0 22 17 20 30 -4z m590 -19 c0 -13 -37 -24 -50 -16\r
-6 4 -8 11 -5 16 8 12 55 12 55 0z m-3305 -21 c3 -5 2 -10 -4 -10 -5 0 -13 5\r
-16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m3036 -2 c9 -14 -37 -100 -70 -132\r
-19 -19 -43 -28 -77 -32 -44 -6 -53 -3 -82 21 -18 15 -32 33 -32 41 0 18 -2\r
18 45 -6 45 -23 66 -25 83 -8 19 19 14 28 -14 28 -39 0 -104 41 -104 66 0 21\r
2 21 38 8 51 -18 82 -17 114 4 29 19 90 25 99 10z m2655 -14 c-3 -9 -6 -21 -6\r
-27 0 -8 -3 -8 -11 0 -13 13 -5 43 12 43 6 0 8 -7 5 -16z m-1986 -11 c11 -10\r
-27 -21 -55 -16 -38 7 -43 12 -25 24 14 8 68 3 80 -8z m1584 -5 c-27 -32 -36\r
-38 -62 -38 -13 0 -36 -10 -51 -21 -16 -12 -34 -18 -40 -15 -6 4 -45 0 -87 -9\r
-83 -19 -112 -15 -37 5 26 6 65 18 86 26 20 8 48 14 60 14 13 0 32 8 43 18 24\r
22 63 40 88 41 19 1 19 1 0 -21z m448 0 c-7 -7 -12 -8 -12 -2 0 14 12 26 19\r
19 2 -3 -1 -11 -7 -17z m-2391 -18 c6 0 8 -4 5 -8 -9 -14 -236 -15 -236 -1 0\r
7 10 10 28 6 15 -2 59 -1 97 3 39 4 76 5 83 4 8 -2 18 -4 23 -4z m147 -7 c-10\r
-2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m578 -28 c-19 -15 -46 -20\r
-46 -10 0 6 40 24 55 24 6 0 1 -6 -9 -14z m-1879 -20 c7 -11 13 -23 13 -28 0\r
-9 -337 0 -353 10 -11 7 36 31 70 36 16 2 79 3 142 2 98 -2 116 -5 128 -20z\r
m-1667 5 c8 -5 12 -12 8 -15 -8 -8 -58 5 -58 16 0 12 31 11 50 -1z m3080 0 c0\r
-5 -12 -10 -26 -10 -14 0 -23 4 -19 10 3 6 15 10 26 10 10 0 19 -4 19 -10z\r
m60 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z\r
m-2555 -38 c22 -15 58 -34 79 -42 32 -12 42 -22 49 -49 4 -19 5 -46 1 -60 -4\r
-14 -6 -33 -5 -42 3 -25 -25 -42 -60 -35 -22 4 -29 2 -27 -7 3 -7 28 -13 66\r
-15 l62 -3 0 30 c0 32 18 81 31 81 4 0 21 -13 37 -29 23 -24 30 -41 35 -88 4\r
-43 2 -62 -8 -73 -8 -9 -20 -31 -26 -49 l-11 -32 -94 3 c-77 2 -94 6 -92 18 2\r
10 18 16 48 18 91 6 93 22 3 29 -61 5 -88 18 -60 29 23 8 21 21 -2 27 -16 4\r
-19 13 -18 53 2 45 4 48 35 56 38 10 34 28 -7 28 -56 0 -64 -16 -68 -143 -3\r
-75 0 -123 7 -137 11 -21 10 -21 -52 -19 -49 2 -63 0 -63 -12 0 -10 17 -15 68\r
-17 48 -2 67 -7 64 -15 -5 -16 -76 -27 -105 -16 -29 11 -82 12 -82 1 0 -5 6\r
-16 14 -27 11 -15 21 -17 59 -12 33 5 48 3 57 -8 17 -20 -8 -29 -61 -22 -42 6\r
-79 31 -79 54 0 7 -11 13 -25 13 -33 0 -78 23 -102 53 -10 13 -27 27 -38 32\r
-18 8 -18 9 7 12 14 3 32 11 38 18 10 12 7 17 -15 25 -14 5 -32 10 -40 10 -32\r
0 -22 19 20 39 44 21 60 51 34 67 -7 4 -7 10 -1 16 20 20 72 -24 106 -87 53\r
-98 103 -84 98 28 -6 103 -56 167 -132 167 -28 0 -25 17 5 24 18 5 25 13 25\r
31 0 14 3 25 8 25 26 -1 51 -15 55 -31 6 -22 51 -26 92 -7 34 15 32 24 -10 39\r
-38 14 -44 32 -19 67 19 27 39 23 99 -16z m1312 22 c-3 -3 -12 -4 -19 -1 -8 3\r
-5 6 6 6 11 1 17 -2 13 -5z m-2067 -18 c0 -16 -24 -39 -32 -30 -3 3 -4 14 -1\r
25 6 22 33 26 33 5z m4111 -3 c8 -9 16 -51 20 -99 3 -46 8 -87 12 -91 4 -3 21\r
4 38 16 48 36 59 13 20 -45 -40 -61 -41 -91 -3 -96 24 -4 25 -5 7 -12 -38 -14\r
-50 -23 -50 -38 0 -9 -6 -23 -14 -32 -7 -8 -10 -23 -7 -32 6 -16 54 -16 179 0\r
15 2 32 4 37 5 6 0 10 8 10 16 0 11 -18 15 -82 17 -132 5 -99 22 55 29 75 4\r
148 10 162 13 34 9 32 34 -2 38 -61 7 -23 23 64 28 54 3 97 10 105 18 14 14\r
48 16 48 3 0 -11 -68 -141 -81 -155 -16 -18 -9 13 11 51 21 39 26 73 11 73\r
-13 0 -26 -20 -45 -70 -10 -24 -27 -54 -39 -66 -12 -12 -50 -50 -85 -86 -51\r
-52 -72 -67 -112 -77 -36 -9 -54 -10 -64 -2 -7 6 -45 10 -84 10 -86 -1 -104 7\r
-71 31 20 16 21 20 10 34 -12 14 -10 16 10 17 40 1 73 9 84 20 7 7 -16 10 -75\r
7 l-85 -3 1 40 c1 22 5 67 9 100 4 33 7 67 7 75 -3 133 -12 244 -20 252 -21\r
21 -35 -43 -34 -159 0 -80 -3 -113 -11 -113 -17 1 -52 32 -66 58 -14 26 -41\r
30 -41 6 0 -9 23 -44 50 -79 52 -65 56 -81 44 -157 -8 -45 -28 -49 -48 -10\r
-23 43 -154 168 -166 156 -6 -6 14 -32 56 -74 92 -92 112 -146 79 -210 -11\r
-21 -37 -40 -90 -65 -133 -64 -148 -67 -297 -66 -122 2 -142 -1 -179 -20 -49\r
-25 -84 -15 -95 25 -4 17 -19 29 -50 41 -31 12 -46 24 -50 41 -8 30 3 74 23\r
96 12 13 13 21 4 31 -24 30 22 36 72 11 17 -10 44 -30 58 -45 27 -29 62 -38\r
75 -18 3 6 1 16 -5 22 -22 22 -12 37 27 37 33 0 41 -6 72 -47 41 -56 63 -63\r
96 -33 29 28 18 55 -32 76 -48 20 -44 41 11 49 54 9 89 -14 116 -75 20 -45 51\r
-58 102 -43 39 11 48 45 19 76 -11 12 -32 42 -46 65 -28 45 -29 56 -16 227 0\r
6 9 0 19 -12 25 -30 60 -43 89 -32 37 14 25 34 -38 64 -32 15 -57 32 -54 36 2\r
5 11 6 19 2 8 -3 23 -2 33 2 9 5 25 7 35 6 10 -1 37 5 61 14 37 14 48 25 71\r
73 15 32 33 60 39 64 19 13 53 9 67 -9z m747 -4 c8 -41 -91 -151 -119 -133 -4\r
2 -7 29 -6 59 1 52 2 55 28 55 14 0 34 9 44 20 21 23 48 23 53 -1z m-4673\r
-104 c29 -58 31 -60 73 -63 36 -3 45 -7 53 -30 6 -15 18 -36 28 -47 32 -36 32\r
-53 1 -88 l-30 -32 -45 50 c-25 28 -73 91 -107 140 -76 111 -112 150 -132 142\r
-10 -4 -16 -1 -16 8 0 8 8 16 18 16 45 4 63 7 69 12 11 11 57 -46 88 -108z\r
m228 88 c30 -6 37 -23 9 -23 -11 0 -39 6 -63 13 -24 8 -50 12 -57 9 -12 -4\r
-17 10 -7 20 3 3 25 1 48 -4 23 -5 54 -12 70 -15z m-587 -20 c-11 -11 -19 6\r
-11 24 8 17 8 17 12 0 3 -10 2 -21 -1 -24z m1534 12 c7 -18 4 -20 -39 -17 -69\r
5 -80 10 -56 28 28 21 86 14 95 -11z m-1410 11 c0 -3 -4 -8 -10 -11 -5 -3 -10\r
-1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m3475 -17 c-47 -10 -87 -10 -80 1 3\r
5 11 7 18 5 7 -3 26 -1 42 4 17 4 35 6 40 2 6 -3 -3 -9 -20 -12z m-2945 -9 c8\r
-5 12 -11 9 -14 -3 -3 -14 1 -25 9 -21 16 -8 20 16 5z m2840 6 c0 -2 -7 -6\r
-15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m1000 -6 c0 -5\r
-4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-3245\r
-21 c171 -27 175 -28 175 -38 0 -9 -209 -6 -267 4 -32 6 -63 28 -63 46 0 12 6\r
12 155 -12z m4243 -9 c-12 -35 -23 -44 -44 -36 -13 5 -12 11 8 35 31 41 50 41\r
36 1z m-3691 3 c4 -12 -55 -8 -112 7 -22 7 -13 8 39 7 42 -1 71 -7 73 -14z\r
m-1297 -3 c13 -8 13 -10 -2 -10 -9 0 -20 5 -23 10 -8 13 5 13 25 0z m1538 1\r
c2 -1 1 -5 -2 -10 -7 -10 -84 -13 -129 -4 -15 2 -24 9 -21 15 5 7 103 7 152\r
-1z m85 -8 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-1562 -13\r
c6 0 8 -4 5 -9 -8 -12 -46 -2 -46 11 0 6 7 7 16 4 9 -3 20 -6 25 -6z m1179\r
-31 c30 0 66 -5 80 -10 16 -5 -24 -7 -103 -3 -149 6 -157 3 -157 -62 0 -93 52\r
-102 664 -118 133 -3 181 -8 187 -18 14 -22 10 -30 -11 -23 -28 9 -379 15\r
-440 8 -84 -10 -43 -21 100 -27 74 -3 163 -10 197 -16 35 -6 128 -8 211 -5\r
115 4 158 2 188 -9 21 -8 35 -15 29 -16 -27 -5 -43 -7 -83 -8 -28 -1 -41 -6\r
-36 -13 4 -7 85 -10 253 -9 135 1 269 1 296 1 l50 -2 -28 -15 c-22 -12 -65\r
-15 -198 -15 -93 0 -173 3 -178 6 -5 3 -22 0 -37 -6 -44 -16 -643 -12 -785 7\r
-29 3 -49 1 -54 -5 -11 -19 -28 -12 -22 9 3 10 0 23 -7 28 -17 14 -216 23\r
-216 11 0 -6 -7 -3 -16 6 -13 12 -19 13 -30 4 -28 -23 -7 -31 94 -33 56 -2\r
104 -5 108 -8 7 -8 -54 -38 -78 -38 -15 0 -18 -8 -18 -44 0 -38 -5 -48 -37\r
-76 l-36 -32 -106 6 c-58 3 -107 6 -108 6 -2 0 -3 4 -3 9 0 9 62 35 90 37 8 0\r
22 2 31 3 9 0 34 19 57 41 22 22 50 40 61 40 11 0 23 5 27 12 7 11 -37 7 -93\r
-8 -17 -5 -23 -2 -23 9 0 8 -5 17 -11 19 -9 3 -9 10 0 27 16 29 11 33 -43 38\r
-28 3 -55 -1 -75 -11 l-31 -17 0 35 c0 19 5 36 11 38 6 2 58 0 117 -5 112 -8\r
212 -2 212 14 0 5 -17 9 -37 10 -21 0 -58 2 -83 4 -25 2 -79 6 -120 9 -41 3\r
-106 10 -145 16 -38 5 -78 9 -87 10 -12 0 -18 8 -18 21 0 19 4 21 38 14 112\r
-22 222 -24 222 -4 0 12 -30 17 -145 24 -92 6 -128 15 -113 30 9 10 68 10 131\r
2 48 -7 58 -6 63 8 4 9 4 18 1 21 -5 6 -132 25 -181 27 -16 1 -31 8 -34 16 -4\r
12 14 13 111 7 125 -8 163 0 152 33 -5 16 0 17 92 5 54 -7 123 -14 153 -15z\r
m2900 1 c0 -10 -88 -30 -130 -30 -50 0 -42 18 12 29 97 20 118 20 118 1z\r
m-4147 -16 c9 -4 17 -12 17 -19 0 -6 9 -20 19 -29 18 -17 34 -76 20 -76 -3 0\r
-12 13 -19 29 -6 16 -27 46 -46 66 -36 40 -42 50 -21 41 6 -3 20 -9 30 -12z\r
m4344 -35 l2 -45 -45 -12 c-53 -14 -134 -16 -134 -3 0 21 134 111 160 108 10\r
-2 16 -16 17 -48z m-2797 31 c14 -9 -70 -20 -115 -16 -16 2 -36 4 -43 5 -7 0\r
-10 6 -7 11 7 12 146 12 165 0z m220 -6 c0 -2 -9 -4 -21 -4 -11 0 -18 4 -14\r
10 5 8 35 3 35 -6z m3190 -1 c0 -9 -52 -35 -57 -29 -2 2 3 11 12 20 17 16 45\r
22 45 9z m-843 -37 c-2 -6 -12 -13 -22 -15 -10 -2 -25 -9 -33 -17 -18 -18 -86\r
-18 -101 0 -10 11 -4 17 31 29 50 17 130 19 125 3z m-4017 -6 c0 -5 -2 -10 -4\r
-10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m113 0 c16 0 -14 -20\r
-30 -20 -7 0 -13 7 -13 16 0 11 5 14 16 10 9 -3 21 -6 27 -6z m1092 -30 c3 -5\r
2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m461 -5\r
c-3 -8 -1 -15 4 -15 6 0 10 -4 10 -10 0 -5 -9 -10 -20 -10 -11 0 -20 6 -20 14\r
0 8 -8 17 -17 19 -10 2 -8 3 5 2 12 -1 22 2 22 6 0 5 5 9 11 9 6 0 9 -7 5 -15z\r
m1578 -10 c9 -24 0 -37 -58 -85 l-55 -44 30 -15 c27 -13 29 -16 15 -30 -10\r
-10 -31 -15 -58 -14 -50 2 -63 -4 -47 -23 17 -21 -2 -37 -35 -28 -16 4 -26 13\r
-26 25 0 11 -9 21 -22 24 -36 8 -71 13 -95 14 -60 2 2 51 63 51 18 0 39 7 47\r
15 8 8 17 12 19 9 16 -16 164 66 173 97 7 23 40 26 49 4z m1569 -39 c-3 -33\r
-35 -72 -52 -62 -18 12 -13 23 14 30 30 8 32 21 5 38 -28 18 -25 30 8 26 23\r
-3 27 -7 25 -32z m-813 5 c0 -14 -28 -33 -40 -26 -15 10 -12 23 8 28 28 8 32\r
7 32 -2z m-690 -76 c0 -24 7 -63 16 -84 21 -52 15 -68 -14 -44 -33 27 -43 173\r
-11 173 5 0 9 -20 9 -45z m580 35 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8\r
10 11 10 2 0 4 -4 4 -10z m850 -54 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0\r
6 5 11 10 11 6 0 10 -2 10 -4z m42 -27 c5 -3 6 -13 2 -22 -7 -19 -39 -23 -50\r
-5 -5 7 -2 9 8 5 22 -8 29 2 18 23 -5 10 -6 20 -2 24 3 4 8 1 11 -6 2 -7 8\r
-16 13 -19z m-4014 -29 c2 -25 -4 -44 -21 -64 -26 -32 -24 -31 -244 -41 -77\r
-4 -93 -2 -93 10 0 12 14 15 61 15 50 0 71 6 115 31 29 16 63 44 75 60 18 26\r
26 30 63 27 39 -3 41 -5 44 -38z m-220 -21 c2 -13 -7 -18 -40 -21 -113 -13\r
-186 9 -96 28 71 15 132 12 136 -7z m2326 -4 c4 -13 -1 -15 -32 -11 -20 3 -41\r
5 -45 5 -5 1 -5 6 -2 11 10 16 72 12 79 -5z m-1957 -16 c24 -24 -8 -71 -67\r
-101 -14 -7 -41 -24 -60 -39 -29 -22 -48 -27 -110 -31 -67 -4 -78 -2 -103 19\r
-27 21 -45 27 -74 24 -6 -1 -14 3 -17 7 -6 11 44 19 124 21 l55 1 -25 -19\r
c-19 -15 -22 -23 -13 -32 8 -8 14 -6 22 10 7 12 17 21 23 21 17 0 109 64 142\r
99 31 33 81 42 103 20z m1830 -5 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17\r
-2 13 -5z m-1507 -51 c0 -13 8 -14 42 -9 51 8 309 -4 303 -14 -3 -4 -34 -14\r
-70 -21 -44 -9 -67 -18 -70 -29 -4 -14 -27 -20 -106 -29 -154 -17 -151 -18\r
-146 27 6 46 28 102 39 96 4 -3 8 -12 8 -21z m1340 -3 c0 -5 -2 -10 -4 -10 -3\r
0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m1050 -65 c0 -41 -40 -115\r
-73 -136 -37 -22 -49 -9 -21 24 29 34 42 61 50 103 3 22 9 43 11 47 8 14 33\r
-15 33 -38z m-975 25 c27 -10 26 -33 0 -25 -8 3 -22 7 -31 10 -8 3 -12 9 -9\r
15 8 12 8 12 40 0z m-585 -10 c174 -28 134 -35 -218 -37 -210 -2 -311 1 -300\r
7 23 14 215 33 263 26 22 -3 47 -2 55 4 20 13 118 13 200 0z m467 -13 c4 -6\r
-2 -8 -18 -4 -13 4 -32 7 -42 7 -10 0 -16 4 -13 8 7 11 64 3 73 -11z m-196 -9\r
c-23 -6 -37 -6 -44 1 -8 8 2 11 34 10 l44 -1 -34 -10z m272 -35 c23 -14 -4\r
-21 -85 -23 -51 -1 -109 -4 -128 -6 -19 -2 -42 -4 -50 -3 -8 0 -50 0 -92 -1\r
-73 -1 -109 12 -70 25 11 3 74 6 140 6 66 1 135 5 154 9 31 8 113 3 131 -7z\r
m1176 -3 l64 0 -7 -72 c-16 -196 -25 -266 -35 -304 -10 -37 -18 -203 -11 -229\r
1 -5 2 -22 1 -36 -1 -25 -4 -26 -79 -32 -75 -6 -113 -17 -197 -57 -72 -35\r
-138 -37 -105 -4 7 7 -2 21 -25 44 -20 19 -35 44 -35 56 0 13 -4 26 -10 29\r
-18 11 -10 25 14 25 17 0 27 -9 37 -31 17 -42 57 -89 76 -89 11 0 10 6 -7 28\r
-53 69 -72 105 -60 112 22 13 -10 99 -46 126 -17 13 -35 24 -40 24 -6 0 -25\r
16 -44 35 -31 32 -34 41 -34 90 1 62 19 87 67 91 18 1 45 5 61 9 26 7 28 6 20\r
-11 -17 -38 -6 -154 22 -213 25 -56 41 -112 51 -184 3 -21 12 -41 20 -44 23\r
-9 25 2 9 43 -9 22 -22 82 -30 135 -8 54 -19 107 -26 118 -16 31 -3 161 17\r
161 11 0 14 -11 10 -48 -3 -30 4 -80 17 -133 17 -66 22 -77 24 -52 2 18 -2 41\r
-7 52 -13 24 -15 108 -2 115 9 6 27 -38 61 -154 35 -118 42 -132 84 -175 38\r
-37 39 -40 18 -43 -12 -2 -22 -10 -22 -18 0 -19 30 -30 39 -15 4 6 15 9 24 5\r
20 -7 21 7 3 58 -15 42 -12 184 6 269 8 41 17 58 34 66 18 8 26 8 35 -3 6 -8\r
14 -14 18 -14 9 0 1 72 -10 85 -4 6 -4 16 0 23 13 22 1 63 -18 58 -44 -12\r
-110 -16 -115 -7 -4 6 2 27 12 48 10 21 17 47 14 57 -3 16 0 18 19 13 13 -4\r
53 -7 88 -7z m-2041 -24 c27 -28 -71 -33 -283 -15 -11 1 -54 -1 -95 -4 -119\r
-10 -164 -10 -182 -2 -33 13 -18 25 25 19 23 -2 78 -1 122 3 98 10 403 9 413\r
-1z m277 -6 c159 -18 154 -16 222 -88 48 -51 64 -63 75 -55 10 9 19 7 37 -6\r
28 -21 25 -56 -5 -57 -11 -1 -36 -4 -56 -8 -29 -5 -41 -2 -64 17 -60 50 -133\r
88 -176 91 -24 2 -60 6 -80 11 -47 9 -169 -11 -230 -38 -45 -21 -46 -22 -33\r
-47 27 -52 76 -78 166 -90 155 -19 247 -13 460 32 8 2 14 -3 13 -9 -1 -7 -2\r
-20 -2 -28 -1 -8 -11 -15 -21 -15 -11 0 -23 -4 -26 -10 -3 -5 -21 -10 -39 -10\r
-19 0 -53 -7 -77 -16 -70 -25 -216 -22 -324 5 -49 13 -101 29 -115 36 -38 19\r
-90 73 -90 93 -1 16 -1 16 -14 0 -16 -22 -36 -23 -36 -2 0 19 55 71 95 89 l30\r
13 -40 -5 c-35 -5 -38 -4 -25 9 24 24 182 82 260 97 3 0 46 -4 95 -9z m681\r
-21 c10 -16 -15 -29 -58 -29 -42 0 -70 -9 -63 -20 2 -4 -15 -3 -39 2 -26 5\r
-59 6 -78 1 -40 -11 -170 7 -175 24 -3 8 19 12 74 12 157 2 279 16 289 32 6\r
10 39 -5 50 -22z m-1780 11 c52 0 62 -3 58 -15 -4 -8 -17 -15 -29 -15 -13 0\r
-27 -5 -31 -11 -5 -8 -37 -10 -108 -5 -109 8 -146 14 -146 25 0 15 77 29 134\r
25 32 -2 87 -4 122 -4z m2558 -9 c10 -16 -32 -42 -115 -71 -46 -16 -86 -26\r
-89 -24 -12 13 23 40 71 54 30 9 68 24 84 33 35 19 42 20 49 8z m-2911 -43\r
c66 -34 170 -50 342 -53 61 -1 119 -4 130 -8 18 -6 146 -18 336 -32 66 -5 78\r
-3 101 14 14 12 30 21 36 21 5 0 17 9 27 20 18 20 17 20 -16 20 -19 0 -55 -6\r
-80 -14 -28 -9 -51 -11 -61 -5 -9 5 -65 10 -124 11 -60 1 -118 6 -129 11 -18\r
10 -18 10 5 19 26 10 459 12 468 3 3 -3 -3 -14 -12 -24 -18 -20 -18 -65 -1\r
-118 11 -33 -18 -30 -45 4 -25 32 -49 19 -30 -17 6 -12 10 -23 8 -26 -2 -2\r
-56 -5 -119 -8 -71 -3 -128 -10 -150 -20 -20 -8 -38 -14 -40 -11 -2 2 -39 8\r
-82 14 -42 6 -103 22 -135 35 -31 14 -61 21 -65 16 -16 -15 56 -120 81 -120 8\r
0 10 -5 6 -12 -5 -7 -7 -28 -5 -46 6 -69 -78 -99 -118 -43 -12 16 -21 36 -21\r
44 0 23 -28 43 -42 29 -9 -9 -9 -34 1 -101 9 -65 10 -95 2 -110 -15 -27 -40\r
-16 -48 20 -3 16 -11 29 -17 29 -6 0 -45 -41 -86 -90 -67 -79 -81 -90 -128\r
-105 -30 -9 -65 -15 -78 -13 l-25 3 30 35 c17 19 30 41 31 48 0 19 -40 14 -47\r
-5 -17 -50 -29 -51 -100 -16 -38 18 -73 33 -79 33 -7 0 -31 19 -55 42 -42 41\r
-43 41 -57 20 -8 -12 -18 -22 -23 -22 -11 0 -12 34 -2 44 18 18 35 90 39 171\r
3 49 8 94 12 100 12 16 15 111 5 132 -5 10 -6 34 -3 53 l7 35 11 -30 c7 -16\r
17 -39 22 -50 6 -11 10 -33 10 -50 -2 -107 -10 -175 -24 -203 -9 -17 -16 -33\r
-16 -37 0 -10 35 -4 54 10 11 8 27 13 35 10 26 -7 48 18 53 60 3 22 8 47 12\r
56 7 17 -6 35 -46 64 -30 20 -13 33 20 14 40 -22 57 -63 42 -100 -9 -21 -9\r
-33 -1 -42 8 -10 7 -19 -4 -33 -8 -10 -15 -25 -15 -32 0 -7 -17 -39 -39 -71\r
-38 -58 -59 -111 -43 -111 28 0 78 50 96 95 11 28 27 68 37 90 26 58 47 150\r
52 228 4 51 10 72 23 82 16 12 17 16 4 41 -8 16 -16 32 -18 37 -5 10 25 -1 91\r
-35z m487 22 c-27 -24 -30 -24 -30 -6 0 13 15 21 44 25 5 0 -1 -8 -14 -19z\r
m1781 -51 c-2 -8 -4 -25 -4 -37 1 -22 -2 -23 -30 -18 -32 6 -39 8 -67 19 -8 3\r
-41 13 -72 22 -32 8 -58 19 -58 23 0 4 53 7 118 6 96 0 116 -3 113 -15z m825\r
-53 c3 -8 -4 -27 -15 -43 -13 -17 -24 -51 -27 -83 -8 -80 -12 -89 -28 -59 -17\r
32 -18 139 -3 160 12 16 46 38 60 39 4 0 10 -6 13 -14z m-1621 -6 c8 -13 -5\r
-13 -25 0 -13 8 -13 10 2 10 9 0 20 -4 23 -10z m613 -9 c22 -11 43 -32 50 -50\r
16 -36 27 -39 42 -12 9 17 15 18 47 9 21 -5 43 -13 48 -17 6 -4 30 -13 55 -20\r
64 -19 90 -32 90 -48 0 -7 4 -21 9 -31 5 -9 12 -24 15 -32 4 -8 45 -89 91\r
-179 47 -91 83 -167 80 -169 -2 -3 -29 16 -59 42 -49 41 -56 45 -65 29 -6 -11\r
-6 -24 0 -35 17 -31 -8 -29 -53 5 -26 20 -44 43 -46 57 -2 14 -8 30 -13 36 -6\r
7 -6 22 1 38 14 37 12 45 -5 22 -8 -11 -18 -16 -22 -12 -5 4 2 16 15 26 12 10\r
22 23 22 28 0 11 -45 10 -57 -1 -10 -11 -35 -8 -28 3 3 6 -1 13 -9 16 -24 9\r
-19 21 14 33 34 11 36 17 14 42 -21 23 -47 11 -64 -31 -13 -31 -40 -41 -40\r
-15 0 8 -4 15 -10 15 -5 0 -10 7 -10 15 0 28 -39 93 -67 113 -16 10 -50 26\r
-78 35 -85 27 -125 47 -125 61 0 26 33 41 98 45 12 0 39 -8 60 -18z m369 -19\r
c45 -55 0 -78 -51 -27 -15 15 -40 31 -56 37 -49 16 -34 28 28 22 46 -4 61 -10\r
79 -32z m-2842 -14 c1 -30 -23 -84 -26 -58 -1 8 -1 22 0 30 1 9 -5 6 -17 -9\r
-19 -24 -42 -22 -42 4 0 23 44 65 65 63 14 -2 20 -11 20 -30z m1976 11 c9 -4\r
22 -15 29 -24 11 -13 11 -18 -1 -31 -11 -10 -43 -14 -124 -15 -141 -1 -147 0\r
-164 10 -12 8 -12 12 -2 25 8 9 22 16 33 16 10 0 21 7 24 15 5 12 16 14 54 9\r
28 -4 56 -2 66 4 19 11 54 7 85 -9z m330 -30 c8 -16 8 -24 -1 -33 -9 -8 -14\r
-8 -17 2 -3 7 -11 19 -19 26 -19 20 -18 26 6 26 10 0 24 -9 31 -21z m636 -41\r
c-1 -35 7 -90 17 -123 10 -33 20 -66 22 -74 3 -11 7 -11 20 -1 8 8 18 9 22 4\r
45 -54 82 -104 82 -112 0 -11 55 -82 92 -119 21 -22 22 -23 3 -23 -22 0 -96\r
77 -128 133 -11 20 -24 37 -28 37 -4 0 -12 14 -18 30 -5 17 -15 30 -20 30 -12\r
0 -4 -25 16 -55 7 -11 13 -26 13 -33 0 -7 14 -34 31 -58 32 -46 34 -68 5 -39\r
-9 9 -16 23 -16 31 0 8 -5 14 -10 14 -6 0 -14 8 -17 18 -4 9 -15 29 -26 43\r
-10 15 -22 42 -26 60 -6 26 -12 33 -27 31 -15 -3 -16 -1 -7 9 8 8 9 17 4 23\r
-12 14 -28 139 -25 191 3 48 2 45 13 45 5 0 8 -28 8 -62z m87 -31 c23 -68 41\r
-92 86 -112 31 -14 40 -24 40 -43 l0 -24 -36 27 -36 28 6 -34 7 -34 -23 30\r
c-12 17 -35 42 -50 57 -31 28 -46 95 -34 144 9 33 19 23 40 -39z m466 27 c0\r
-8 -4 -14 -9 -14 -11 0 -22 26 -14 34 9 9 23 -3 23 -20z m-1045 -24 c6 -5 21\r
-10 35 -12 14 -1 25 -10 25 -18 0 -12 -11 -14 -48 -13 -27 2 -58 8 -69 14 -17\r
9 -23 8 -30 -5 -10 -18 -34 -21 -43 -7 -3 5 0 21 7 35 11 25 14 26 62 20 28\r
-4 56 -10 61 -14z m-1167 -13 c17 -13 29 -27 26 -30 -10 -10 36 -28 56 -22 11\r
3 28 1 39 -4 14 -8 22 -8 27 0 5 8 10 7 16 -5 6 -12 1 -24 -23 -49 -29 -31\r
-36 -33 -68 -26 -31 6 -173 11 -313 10 -49 -1 -57 16 -22 45 33 26 64 31 64\r
10 0 -24 20 -30 107 -29 46 1 85 -3 89 -8 3 -5 25 -9 50 -9 38 0 45 3 42 17\r
-4 22 -51 32 -92 21 -16 -4 -34 -4 -40 1 -6 5 -24 11 -41 13 -22 2 -31 9 -33\r
26 -4 25 23 41 41 23 19 -19 37 -12 37 14 0 14 1 25 3 25 2 0 17 -11 35 -23z\r
m1612 -47 c0 -8 7 -27 14 -42 9 -18 11 -30 5 -34 -12 -7 -12 -8 -32 35 -18 36\r
-21 63 -10 74 8 9 23 -12 23 -33z m-2917 15 c-3 -9 -8 -14 -10 -11 -3 3 -2 9\r
2 15 9 16 15 13 8 -4z m937 5 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
10 10 10 6 0 10 -4 10 -10z m603 -2 c20 -6 37 -15 37 -20 0 -11 -60 0 -74 12\r
-5 5 -15 6 -22 3 -8 -3 -14 -1 -14 4 0 14 29 14 73 1z m864 -58 c83 -10 97\r
-10 112 4 25 23 29 21 41 -22 7 -29 19 -44 45 -58 56 -30 43 -38 -52 -30 -49\r
4 -136 7 -195 7 -59 0 -110 4 -113 9 -11 19 69 28 187 23 100 -5 120 -3 116 8\r
-4 11 -34 14 -140 15 -74 1 -144 7 -155 13 -11 5 -22 8 -25 6 -2 -2 -41 -5\r
-86 -6 -109 -2 -108 -17 2 -33 27 -4 30 -19 6 -34 -12 -7 -20 -8 -20 -2 0 6\r
-36 10 -90 10 -82 0 -107 8 -80 25 6 4 8 11 4 16 -4 6 -14 2 -25 -10 -11 -12\r
-24 -21 -29 -21 -16 0 -11 27 5 34 8 3 15 15 15 26 0 18 3 19 20 10 15 -8 20\r
-8 20 1 0 8 16 10 50 7 28 -3 50 -2 50 2 0 12 39 19 46 8 3 -5 15 -7 27 -4 11\r
3 33 -2 48 -10 24 -12 29 -12 36 0 4 8 17 15 28 17 12 3 21 14 23 29 l4 24 16\r
-26 c14 -23 25 -27 109 -38z m-1397 25 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15\r
4 8 8 15 10 15 2 0 4 -7 4 -15z m1223 8 c-13 -2 -23 -9 -23 -14 0 -6 -5 -7\r
-10 -4 -17 11 0 25 28 24 24 -2 24 -2 5 -6z m-621 -15 c2 -6 18 -11 36 -11 23\r
0 32 -5 32 -17 0 -15 8 -16 52 -12 49 5 52 4 39 -12 -10 -12 -23 -16 -43 -12\r
-15 3 -30 1 -34 -5 -9 -15 -29 -5 -29 16 0 30 -24 29 -35 -1 -6 -16 -14 -24\r
-20 -18 -14 14 -24 84 -12 84 6 0 12 -5 14 -12z m-637 -8 c3 -5 1 -10 -4 -10\r
-6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m925 -42 c0 -7 -4 -18 -8\r
-23 -11 -15 -62 -36 -73 -30 -17 11 -9 23 21 29 17 3 33 12 36 21 7 18 24 20\r
24 3z m-322 -13 c1 -1 -3 -15 -9 -31 -11 -28 -11 -28 -19 -7 -6 15 -21 23 -52\r
29 -39 7 -41 8 -18 15 21 7 89 3 98 -6z m-1597 -38 c-6 -6 -11 -21 -11 -34 0\r
-13 -4 -23 -10 -23 -16 0 -11 54 7 80 16 22 18 23 21 6 2 -10 -1 -23 -7 -29z\r
m982 24 c6 -26 -12 -32 -48 -15 -23 11 -25 13 -7 10 14 -3 25 1 29 10 7 20 20\r
17 26 -5z m176 -17 c2 -2 -8 -9 -23 -15 -20 -10 -29 -10 -38 -1 -7 7 -23 12\r
-37 12 -21 0 -23 2 -11 10 13 9 98 4 109 -6z m267 -14 c65 0 94 -3 94 -11 0\r
-14 -32 -18 -97 -13 -38 3 -79 7 -92 10 -22 5 -23 6 -5 25 16 17 19 18 35 4\r
11 -10 35 -16 65 -15z m374 15 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5\r
15 10 15 6 0 10 -7 10 -15z m226 -59 c10 5 33 9 49 8 17 -1 66 -2 110 -2 88\r
-1 116 -2 143 -3 16 -1 84 0 257 2 48 0 83 5 87 12 5 8 15 4 32 -12 39 -37 25\r
-48 -47 -40 -57 7 -91 -1 -74 -17 12 -12 119 -13 138 -1 22 14 36 3 20 -16\r
-10 -13 -121 -34 -146 -28 -5 1 -5 -3 2 -10 7 -7 42 -12 88 -13 76 -1 87 -7\r
60 -36 -14 -15 -23 -15 -103 -3 -48 7 -129 13 -180 13 -88 1 -170 18 -129 27\r
9 3 17 8 17 13 0 12 -28 20 -45 14 -8 -4 -21 -2 -28 3 -14 11 -217 10 -235 -1\r
-26 -16 -10 -27 33 -25 25 2 44 -1 42 -6 -3 -13 -130 -19 -165 -9 -26 7 -25 8\r
12 13 50 8 63 34 15 31 -50 -4 -142 11 -132 21 5 5 40 10 78 12 74 3 95 18 51\r
38 -21 10 -23 15 -15 31 10 18 11 18 28 -3 13 -17 22 -20 37 -13z m-924 4 c48\r
0 50 -16 2 -23 -36 -6 -94 1 -94 11 0 13 36 30 45 21 5 -5 26 -9 47 -9z m-222\r
6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m780 -11 c0 -9 -6 -12 -15 -9 -8 4 -12 10 -9 15 8 14 24 10 24 -6z m80 5 c0\r
-5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-785\r
-10 c-3 -5 6 -21 20 -36 25 -25 25 -25 3 -22 -13 2 -27 13 -33 26 -5 12 -13\r
22 -17 22 -5 0 -8 5 -8 10 0 6 9 10 21 10 11 0 17 -4 14 -10z m45 -11 c0 -6\r
-4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m304 -9\r
c10 -10 16 -24 13 -31 -4 -10 -8 -7 -12 8 -7 23 -38 39 -55 28 -14 -9 -80 5\r
-80 17 0 17 113 -1 134 -22z m296 5 c0 -14 0 -28 1 -32 0 -4 -5 -9 -12 -12 -7\r
-2 -10 2 -6 11 3 9 1 20 -5 26 -6 6 -7 15 -4 21 12 19 26 12 26 -14z m-201 -6\r
c-7 -4 -17 -5 -22 -2 -5 3 -3 9 4 14 7 4 17 5 22 2 5 -3 3 -9 -4 -14z m151\r
-23 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m175 -6 c3 -5 -2 -10 -12 -10 -10 0 -28 -3 -40 -6 -13 -4 -23 -2 -23 4 0 9 19\r
16 57 21 6 0 15 -3 18 -9z m-978 -52 c-31 -20 -58 11 -35 39 10 12 14 11 29\r
-9 13 -17 14 -25 6 -30z m429 41 c3 -6 16 -8 28 -5 13 3 31 0 40 -7 26 -19 3\r
-64 -36 -69 -30 -5 -58 19 -58 49 0 7 -12 13 -27 13 -27 1 -27 1 -9 15 23 18\r
52 19 62 4z m-1226 -13 c0 -2 -7 -9 -15 -16 -12 -10 -15 -10 -15 4 0 9 7 16\r
15 16 8 0 15 -2 15 -4z m3765 -16 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2\r
10 4 10 3 0 8 -4 11 -10z m-2015 -16 c0 -17 -22 -14 -28 4 -2 7 3 12 12 12 9\r
0 16 -7 16 -16z m-1583 -25 c44 -27 92 -84 98 -117 3 -15 12 -45 19 -67 13\r
-40 11 -69 -3 -60 -4 2 -30 7 -57 10 -68 7 -75 9 -112 29 -18 9 -55 20 -83 23\r
-27 3 -49 10 -49 16 0 6 39 7 108 3 89 -6 111 -5 120 7 10 12 8 16 -12 21 -13\r
3 -32 3 -40 0 -11 -4 -16 -1 -16 10 0 8 11 18 25 22 14 3 25 11 25 16 0 6 -11\r
8 -27 4 -16 -4 -35 -8 -43 -9 -8 -1 -18 -10 -22 -19 -8 -19 -34 -23 -57 -9\r
-19 12 -4 31 25 31 13 0 24 5 24 10 0 23 -30 19 -91 -13 -36 -18 -70 -32 -77\r
-29 -7 2 -12 19 -12 38 0 28 6 38 38 58 20 13 44 31 52 40 11 15 24 16 74 11\r
34 -4 75 -16 93 -26z m984 14 c7 -7 -5 -12 -35 -16 -54 -8 -106 1 -106 17 0\r
14 127 13 141 -1z m804 7 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10\r
3 0 8 -4 11 -10z m375 -10 c-20 -13 -60 -13 -60 0 0 6 17 10 38 10 27 0 33 -3\r
22 -10z m-1135 -10 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0\r
13 -4 16 -10z m-515 -10 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m257 -12 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12\r
1 -19z m-287 3 c0 -5 -12 -16 -26 -26 -20 -13 -24 -22 -20 -41 5 -17 2 -24 -9\r
-24 -8 0 -15 -6 -15 -13 0 -19 -20 -36 -36 -30 -8 3 -14 14 -14 25 0 19 42 82\r
70 105 18 14 50 17 50 4z m210 -12 c0 -10 -40 -12 -64 -3 -9 3 -14 9 -12 13 7\r
10 76 1 76 -10z m630 11 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4\r
10 6 0 11 -4 11 -10z m300 -25 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11\r
23 6 23 -9z m468 2 c4 -3 72 -1 150 3 147 7 299 -5 301 -25 1 -5 -9 -11 -21\r
-12 -79 -9 -188 -10 -283 -2 -60 4 -150 11 -200 14 -93 7 -108 11 -87 24 12 7\r
126 5 140 -2z m-1283 -7 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4\r
10 5 0 13 -4 16 -10z m380 -10 c3 -5 16 -10 28 -10 28 0 10 -17 -23 -22 -17\r
-2 -24 1 -22 11 2 10 -5 12 -33 7 -20 -4 -35 -3 -35 3 0 17 75 27 85 11z\r
m-227 -16 c-2 -11 -16 -17 -40 -20 -42 -3 -47 2 -20 22 25 19 64 18 60 -2z\r
m2420 -6 c-2 -16 -12 -24 -38 -30 -60 -13 -70 1 -20 27 56 30 62 30 58 3z\r
m158 -18 c36 -4 44 0 45 23 1 18 2 18 6 4 3 -10 -2 -26 -10 -35 -13 -15 -14\r
-20 -1 -36 18 -25 18 -56 1 -56 -8 0 -22 -9 -31 -19 -10 -11 -29 -22 -44 -26\r
-15 -4 -30 -12 -34 -18 -4 -7 -8 5 -8 26 0 32 -2 36 -14 25 -7 -7 -11 -20 -8\r
-28 5 -13 4 -13 -13 0 -11 9 -34 14 -62 12 -47 -3 -58 13 -19 28 13 5 27 13\r
30 18 3 5 16 7 29 5 16 -3 34 4 53 21 l29 25 -35 -9 c-48 -14 -60 -13 -60 5 0\r
8 5 15 11 15 6 0 27 14 47 31 36 31 36 32 52 11 9 -11 25 -21 36 -22z m-2931\r
12 c6 -1 11 -8 13 -16 4 -19 -28 -22 -46 -4 -19 19 -15 40 6 29 9 -5 22 -9 27\r
-9z m2645 -59 c0 -17 -50 -16 -72 1 -25 19 -23 24 15 34 33 10 57 -5 57 -35z\r
m-102 4 c-2 -15 4 -22 21 -27 29 -7 74 -71 57 -82 -17 -11 -58 -10 -51 2 3 6\r
-2 13 -12 17 -10 3 -30 17 -45 31 l-27 25 24 19 c15 12 22 25 18 35 -4 11 -3\r
14 6 9 6 -4 11 -17 9 -29z m-3368 -38 c0 -14 -5 -19 -17 -17 -26 5 -29 38 -4\r
38 15 0 21 -6 21 -21z m3535 11 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6\r
9 10 21 10 11 0 17 -4 14 -10z m-3415 -50 c0 -5 -10 -10 -22 -12 -15 -2 -22\r
-9 -22 -21 2 -20 -42 -25 -49 -4 -9 28 5 46 42 49 40 4 51 1 51 -12z m540 6\r
c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z`}),l.createElement("path",{d:`M10930 8546 c0 -2 30 -26 68 -54 74 -56 162 -138 162 -151 0 -10 30\r
-24 37 -17 6 5 -119 124 -182 173 -45 35 -85 58 -85 49z`}),l.createElement("path",{d:`M11419 7633 c-1 -16 -2 -77 -4 -138 -1 -60 -8 -141 -14 -179 -7 -38\r
-10 -71 -7 -73 15 -15 25 21 41 142 14 109 15 147 7 191 -6 30 -9 61 -6 69 4\r
8 1 15 -5 15 -6 0 -11 -12 -12 -27z`}),l.createElement("path",{d:`M10816 6384 c-5 -14 -4 -15 9 -4 17 14 19 20 6 20 -5 0 -12 -7 -15\r
-16z`}),l.createElement("path",{d:`M10900 6349 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0\r
-10 -5 -10 -11z`}),l.createElement("path",{d:`M9870 8645 c-17 -21 -8 -28 15 -11 11 8 14 15 8 19 -6 4 -16 0 -23\r
-8z`}),l.createElement("path",{d:`M11534 7644 c-9 -34 16 -63 35 -41 8 10 9 22 1 41 -12 33 -28 33 -36\r
0z`}),l.createElement("path",{d:"M6840 7885 c0 -8 9 -15 20 -15 24 0 27 15 4 24 -22 9 -24 8 -24 -9z"}),l.createElement("path",{d:`M5819 7797 c33 -34 61 -48 61 -29 0 11 -39 52 -50 52 -4 0 -17 3 -27\r
7 -11 4 -6 -7 16 -30z`}),l.createElement("path",{d:`M5768 7748 c24 -24 35 -29 43 -21 9 9 3 17 -22 32 -49 30 -58 26 -21\r
-11z`}),l.createElement("path",{d:`M5710 7712 c0 -14 60 -64 72 -60 6 2 -4 18 -23 36 -34 32 -49 39 -49\r
24z`}),l.createElement("path",{d:`M5800 7625 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\r
-10 -7 -10 -15z`}),l.createElement("path",{d:`M5710 7590 c19 -38 42 -51 54 -31 8 12 -42 71 -60 71 -11 0 -10 -8 6\r
-40z`}),l.createElement("path",{d:`M2630 6402 c0 -13 39 -32 105 -53 34 -10 96 -34 137 -53 41 -18 101\r
-39 133 -46 33 -8 73 -20 88 -27 16 -8 31 -12 34 -9 12 12 -19 34 -65 46 -98\r
26 -230 73 -311 111 -80 37 -121 48 -121 31z`}),l.createElement("path",{d:`M2660 6329 c0 -5 21 -19 48 -31 26 -11 85 -38 132 -60 96 -46 264\r
-108 289 -108 33 1 -27 37 -101 60 -40 13 -129 48 -198 78 -166 72 -170 73\r
-170 61z`}),l.createElement("path",{d:`M2672 6258 c7 -22 439 -238 476 -238 28 0 8 22 -40 44 -110 50 -171\r
76 -179 76 -4 0 -23 9 -42 20 -75 44 -219 109 -215 98z`}),l.createElement("path",{d:`M2725 6160 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6\r
0 -7 -4 -4 -10z`}),l.createElement("path",{d:`M2810 6101 c0 -22 158 -111 196 -111 21 0 9 16 -24 33 -15 7 -44 23\r
-65 35 -53 31 -107 52 -107 43z`}),l.createElement("path",{d:`M3040 5975 c0 -6 62 -45 73 -45 13 0 7 23 -10 36 -17 13 -63 19 -63\r
9z`}),l.createElement("path",{d:`M3162 5899 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0\r
-15 -5 -13 -11z`}),l.createElement("path",{d:`M5878 7432 c-56 -7 -26 -22 45 -22 85 0 149 9 142 21 -5 7 -132 8\r
-187 1z`}),l.createElement("path",{d:`M4182 7393 c4 -20 180 -102 221 -102 51 -1 14 34 -73 69 -44 18 -83\r
36 -86 41 -3 5 -19 9 -35 9 -23 0 -30 -4 -27 -17z`}),l.createElement("path",{d:`M4024 7384 c-14 -12 -16 -17 -6 -21 8 -3 29 -18 47 -34 18 -16 37\r
-29 43 -29 5 0 15 -7 22 -15 7 -8 23 -15 35 -15 13 0 52 -14 88 -31 38 -17 78\r
-29 94 -27 35 4 32 20 -4 31 -117 36 -237 102 -248 137 -8 24 -43 26 -71 4z`}),l.createElement("path",{d:`M4358 7069 c-39 -22 -5 -52 75 -64 12 -2 49 -10 82 -17 62 -14 95\r
-13 95 2 0 14 -43 40 -66 40 -18 0 -99 23 -154 44 -8 3 -23 1 -32 -5z`}),l.createElement("path",{d:`M6669 7075 c-11 -10 -263 -25 -273 -15 -14 14 -56 12 -56 -2 0 -7 16\r
-26 36 -42 35 -28 36 -30 29 -80 -8 -62 -21 -79 -41 -51 -43 59 -80 98 -103\r
107 -39 15 -71 19 -71 10 0 -9 50 -37 61 -34 17 3 70 -69 76 -102 7 -43 -15\r
-72 -85 -113 -56 -33 -44 -47 21 -22 97 37 140 63 165 101 16 25 32 38 47 38\r
12 0 29 7 36 16 11 14 10 16 -11 12 -22 -3 -25 2 -31 37 -3 22 -9 54 -13 71\r
l-7 31 103 7 c134 8 151 10 156 24 3 11 -29 17 -39 7z`}),l.createElement("path",{d:`M7458 6968 c-16 -5 -28 -14 -28 -19 0 -5 12 -6 28 -3 34 9 42 13 42\r
25 0 11 -6 11 -42 -3z`}),l.createElement("path",{d:"M7340 6940 c-20 -6 -22 -9 -9 -14 15 -7 69 8 69 19 0 7 -29 5 -60 -5z"}),l.createElement("path",{d:`M5855 6699 c-8 -12 11 -29 33 -29 19 0 10 34 -10 38 -9 2 -19 -2 -23\r
-9z`}),l.createElement("path",{d:"M5830 6635 c-8 -9 -6 -14 5 -19 17 -6 45 2 45 14 0 14 -39 18 -50 5z"}),l.createElement("path",{d:`M6620 6627 c-37 -17 -71 -43 -64 -49 9 -9 105 42 99 52 -3 6 -7 10\r
-8 9 -1 0 -13 -6 -27 -12z`}),l.createElement("path",{d:`M6065 6490 c-6 -92 -5 -103 12 -117 16 -13 16 -14 1 -9 -11 3 -19 -2\r
-23 -14 -9 -28 2 -40 35 -40 30 0 47 14 30 25 -10 6 -10 55 0 55 3 0 11 -5 16\r
-10 7 -7 18 -4 35 9 14 11 34 19 44 18 15 -2 21 7 27 43 5 25 6 60 3 77 -5 26\r
-3 32 9 27 21 -8 23 -20 16 -109 -4 -73 -7 -80 -25 -78 -11 1 -14 0 -7 -3 15\r
-7 16 -31 0 -36 -6 -2 -8 -10 -4 -16 10 -16 56 -15 60 1 3 6 7 67 10 133 8\r
144 17 134 -130 141 l-101 5 -8 -102z m80 2 c-3 -4 -10 0 -15 8 -6 9 -5 17 3\r
22 13 8 24 -19 12 -30z`}),l.createElement("path",{d:`M5800 6535 c0 -25 19 -55 35 -55 35 0 25 39 -17 61 -14 8 -18 6 -18\r
-6z`}),l.createElement("path",{d:`M5466 6512 c-3 -5 40 -12 97 -15 117 -6 164 -19 204 -56 46 -43 71\r
-172 40 -212 -48 -63 -191 -45 -218 27 -20 56 55 102 79 48 7 -14 10 -35 6\r
-46 -6 -20 9 -38 33 -38 13 0 34 65 27 83 -2 7 -21 23 -41 36 -44 28 -98 24\r
-126 -11 -27 -35 -17 -101 22 -142 17 -17 31 -37 31 -44 0 -20 52 -34 99 -27\r
103 16 151 69 151 169 0 65 -15 107 -55 154 -48 57 -89 71 -224 77 -66 3 -122\r
2 -125 -3z`}),l.createElement("path",{d:`M5397 6489 c-21 -11 -35 -24 -32 -29 6 -9 70 24 81 41 8 14 -7 10\r
-49 -12z`}),l.createElement("path",{d:`M6520 6481 c0 -5 -3 -17 -7 -27 -4 -11 -3 -15 4 -11 14 9 24 47 12\r
47 -5 0 -9 -4 -9 -9z`}),l.createElement("path",{d:`M5860 6441 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5\r
3 -10 2 -10 -4z`}),l.createElement("path",{d:`M6697 6436 c-45 -17 -66 -41 -67 -78 0 -18 -7 -29 -20 -33 -42 -13\r
-8 -48 42 -43 29 3 33 6 33 33 1 22 6 31 20 33 43 7 48 11 35 27 -18 21 -7 28\r
30 20 33 -7 50 -35 50 -80 0 -29 -42 -80 -81 -101 -39 -19 -119 -23 -151 -5\r
-39 20 -67 79 -69 145 -3 77 -24 69 -23 -10 1 -152 106 -220 248 -160 76 32\r
105 68 113 137 5 43 9 50 26 47 27 -4 67 -80 67 -128 0 -41 -43 -116 -72 -123\r
-25 -7 -24 -57 2 -84 40 -44 195 -39 254 8 14 11 33 37 42 59 23 51 34 51 34\r
0 0 -42 17 -53 40 -26 6 8 18 12 26 9 17 -6 20 22 3 33 -6 3 -9 19 -5 35 6 30\r
-4 41 -38 43 -19 1 -21 6 -18 51 2 32 -2 57 -11 69 -17 24 -41 13 -28 -13 9\r
-16 6 -37 -15 -111 -11 -39 -53 -90 -75 -90 -16 0 -19 7 -19 46 0 40 -2 45\r
-15 34 -8 -7 -15 -23 -15 -36 0 -44 -63 -81 -86 -49 -11 15 -10 24 3 54 38 84\r
24 170 -35 229 -54 53 -161 81 -225 58z`}),l.createElement("path",{d:`M5260 6374 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\r
-10 -7 -10 -16z`}),l.createElement("path",{d:`M7065 6360 c10 -11 23 -20 28 -20 6 0 2 9 -8 20 -10 11 -23 20 -28\r
20 -6 0 -2 -9 8 -20z`}),l.createElement("path",{d:`M7110 6270 c0 -41 20 -101 31 -94 14 8 1 85 -17 104 -12 12 -14 11\r
-14 -10z`}),l.createElement("path",{d:`M5083 6258 c-36 -17 -27 -31 14 -23 48 9 59 15 42 26 -18 11 -28 10\r
-56 -3z`}),l.createElement("path",{d:"M6306 5841 c-6 -10 33 -23 46 -15 4 3 8 9 8 15 0 12 -47 12 -54 0z"}),l.createElement("path",{d:"M6380 5841 c0 -10 58 -23 71 -15 5 3 7 10 4 15 -8 11 -75 12 -75 0z"}),l.createElement("path",{d:"M5217 5803 c-12 -12 -7 -33 8 -33 17 0 19 9 7 28 -5 7 -11 9 -15 5z"}),l.createElement("path",{d:`M6203 5757 c2 -6 46 -12 98 -14 72 -2 100 1 115 12 17 13 6 14 -99\r
13 -74 -1 -116 -5 -114 -11z`}),l.createElement("path",{d:`M5029 5738 c-7 -13 -18 -29 -26 -36 -19 -19 -16 -42 6 -42 14 0 24\r
13 35 47 19 55 19 53 6 53 -5 0 -15 -10 -21 -22z`}),l.createElement("path",{d:`M3362 5658 c-8 -8 -8 -17 -1 -30 14 -26 39 -23 39 6 0 27 -22 40 -38\r
24z`}),l.createElement("path",{d:`M5360 5640 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
-10 -4 -10 -10z`}),l.createElement("path",{d:`M6143 5608 c5 -18 124 -18 139 -1 8 10 -5 13 -67 13 -57 0 -76 -3\r
-72 -12z`}),l.createElement("path",{d:`M3385 5591 c-2 -5 11 -43 30 -85 l34 -76 46 0 c25 0 45 4 45 8 0 12\r
-44 52 -57 52 -6 0 -16 7 -23 15 -10 12 -8 16 10 23 17 6 19 10 8 19 -30 24\r
-88 52 -93 44z`}),l.createElement("path",{d:`M6057 5554 c-19 -19 1 -23 98 -21 59 1 105 6 105 12 0 11 -192 20\r
-203 9z`}),l.createElement("path",{d:`M6900 5522 c0 -5 7 -13 16 -16 26 -10 104 -7 104 4 0 6 -10 10 -22\r
10 -13 0 -40 3 -60 6 -23 4 -38 3 -38 -4z`}),l.createElement("path",{d:"M5610 5474 c0 -9 5 -14 12 -12 18 6 21 28 4 28 -9 0 -16 -7 -16 -16z"}),l.createElement("path",{d:`M3484 5357 c9 -43 23 -55 75 -63 35 -6 43 -4 39 7 -3 8 -14 19 -26\r
25 -20 10 -20 12 -5 27 18 17 13 19 -61 31 -27 5 -28 4 -22 -27z`}),l.createElement("path",{d:`M4371 5334 c-43 -18 -32 -30 36 -36 66 -6 84 3 59 31 -22 25 -48 26\r
-95 5z`}),l.createElement("path",{d:`M5128 5313 c-41 -6 -34 -20 10 -19 20 1 36 5 35 11 -2 12 -10 13 -45\r
8z`}),l.createElement("path",{d:"M5396 5292 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"}),l.createElement("path",{d:`M4377 5274 c-3 -4 1 -20 9 -36 12 -24 20 -29 37 -23 28 8 35 8 77 -3\r
40 -10 60 -6 60 12 0 24 -35 44 -78 44 -24 1 -56 3 -71 7 -15 3 -30 3 -34 -1z`}),l.createElement("path",{d:`M5465 5260 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
-7 -4 -4 -10z`}),l.createElement("path",{d:`M5108 5142 c-64 -5 -42 -22 29 -22 46 0 72 -5 84 -16 25 -22 162 -7\r
167 19 3 15 -6 17 -85 18 -48 0 -104 1 -123 2 -19 1 -52 1 -72 -1z`}),l.createElement("path",{d:"M5003 5133 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"}),l.createElement("path",{d:`M7614 6906 c-18 -14 -18 -15 -1 -21 9 -4 29 -4 45 0 26 6 26 7 8 21\r
-24 17 -28 17 -52 0z`}),l.createElement("path",{d:`M6806 6827 c-33 -11 -34 -27 -2 -27 43 0 56 -10 56 -45 0 -39 -21\r
-64 -61 -72 -38 -7 -37 -23 0 -23 19 0 47 14 80 40 41 32 51 46 51 70 0 59\r
-50 82 -124 57z`}),l.createElement("path",{d:`M6782 6748 c7 -19 38 -22 38 -4 0 10 -9 16 -21 16 -12 0 -19 -5 -17\r
-12z`}),l.createElement("path",{d:"M6116 6851 c-3 -5 1 -14 8 -20 16 -13 32 2 21 19 -8 12 -22 13 -29 1z"}),l.createElement("path",{d:`M5555 6769 c-30 -37 -30 -73 1 -77 31 -4 57 31 49 67 -9 44 -19 45\r
-50 10z`}),l.createElement("path",{d:`M4340 6705 c0 -8 16 -25 35 -37 39 -26 57 -65 48 -108 -7 -37 17 -42\r
36 -7 10 19 9 30 -7 68 -29 67 -112 129 -112 84z`}),l.createElement("path",{d:`M4517 6497 c-11 -8 -14 -17 -8 -26 11 -17 41 -7 41 13 0 21 -15 27\r
-33 13z`}),l.createElement("path",{d:`M5020 6760 c19 -13 30 -13 30 0 0 6 -10 10 -22 10 -19 0 -20 -2 -8\r
-10z`}),l.createElement("path",{d:"M7098 6738 c9 -9 15 -9 24 0 9 9 7 12 -12 12 -19 0 -21 -3 -12 -12z"}),l.createElement("path",{d:`M7171 6639 c-50 -10 -73 -25 -50 -34 21 -8 153 18 151 30 -2 13 -46\r
15 -101 4z`}),l.createElement("path",{d:"M4825 6590 c-4 -6 3 -10 14 -10 25 0 27 6 6 13 -8 4 -17 2 -20 -3z"}),l.createElement("path",{d:`M4612 6399 c6 -17 57 -31 86 -24 41 10 18 30 -37 33 -39 2 -52 0 -49\r
-9z`}),l.createElement("path",{d:`M2876 6546 c3 -8 19 -16 35 -20 16 -3 53 -17 83 -31 56 -26 86 -32\r
86 -15 0 17 -49 42 -118 61 -80 23 -93 23 -86 5z`}),l.createElement("path",{d:`M7827 6413 c-14 -13 -6 -24 15 -21 27 4 36 28 11 28 -11 0 -23 -3\r
-26 -7z`}),l.createElement("path",{d:"M8165 6540 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}),l.createElement("path",{d:`M8073 6480 c-32 -13 -28 -30 6 -30 24 0 41 14 41 36 0 6 -23 4 -47\r
-6z`}),l.createElement("path",{d:`M8205 6190 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2\r
0 -7 -4 -10 -10z`}),l.createElement("path",{d:`M8260 6190 c20 -13 40 -13 40 0 0 6 -12 10 -27 10 -22 0 -25 -2 -13\r
-10z`}),l.createElement("path",{d:`M8097 6183 c-16 -15 -5 -22 26 -16 55 10 66 22 21 23 -22 0 -44 -3\r
-47 -7z`}),l.createElement("path",{d:`M8680 6260 c-30 -18 -149 -60 -169 -60 -12 0 -21 -4 -21 -10 0 -16\r
45 -12 102 10 84 33 118 50 118 60 0 12 -10 12 -30 0z`}),l.createElement("path",{d:`M2695 5710 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
-7 -4 -4 -10z`}),l.createElement("path",{d:`M2750 5671 c-7 -14 -7 -22 1 -27 10 -6 28 11 29 28 0 17 -20 17 -30\r
-1z`}),l.createElement("path",{d:`M2800 5660 c0 -25 20 -36 31 -19 13 21 11 26 -11 32 -15 4 -20 0 -20\r
-13z`}),l.createElement("path",{d:`M2720 5620 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
-4 -4 -4 -10z`}),l.createElement("path",{d:`M2840 5560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
-10 -4 -10 -10z`}),l.createElement("path",{d:`M2790 5536 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\r
-10 -1 -10 -9z`}),l.createElement("path",{d:`M7600 5480 c-12 -7 -10 -11 10 -18 25 -9 29 -9 65 3 16 5 17 8 5 15\r
-19 12 -61 12 -80 0z`}),l.createElement("path",{d:`M3630 5815 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\r
-10 -7 -10 -15z`}),l.createElement("path",{d:`M8175 5510 c-4 -7 -3 -16 3 -22 14 -14 65 -1 59 15 -5 16 -53 21 -62\r
7z`}),l.createElement("path",{d:`M7775 5260 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\r
-13 -4 -16 -10z`}),l.createElement("path",{d:`M5587 5224 c-13 -14 5 -24 41 -24 35 1 36 2 18 15 -21 16 -48 20 -59\r
9z`}),l.createElement("path",{d:"M5935 5141 c-3 -5 -1 -12 4 -15 13 -8 71 5 71 15 0 12 -67 11 -75 0z"}),l.createElement("path",{d:"M6093 4579 c-14 -5 -13 -7 7 -12 28 -7 80 2 80 14 0 9 -59 8 -87 -2z"}),l.createElement("path",{d:`M4161 4450 c-16 -9 32 -30 69 -30 17 0 30 5 30 10 0 6 -3 10 -7 10\r
-5 0 -24 4 -44 9 -21 5 -42 5 -48 1z`}),l.createElement("path",{d:"M6048 4443 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"}),l.createElement("path",{d:"M4889 4309 c-10 -6 -7 -9 14 -9 29 0 35 5 14 13 -8 3 -20 1 -28 -4z"}),l.createElement("path",{d:`M5372 4314 c-14 -10 -14 -12 4 -17 25 -7 162 -2 171 7 14 13 -10 19\r
-83 20 -44 1 -83 -3 -92 -10z`}),l.createElement("path",{d:`M7442 4022 c-16 -10 -6 -86 13 -102 18 -15 42 15 26 34 -6 7 -8 27\r
-5 45 7 32 -6 40 -34 23z`}),l.createElement("path",{d:`M4681 4002 c-7 -16 -14 -50 -15 -75 -4 -51 -11 -67 -31 -67 -16 0\r
-58 -88 -51 -107 3 -7 11 -12 18 -11 7 2 14 -7 16 -20 2 -15 -8 -32 -32 -56\r
-20 -18 -36 -40 -36 -49 0 -8 -3 -22 -6 -31 -12 -30 14 -16 35 19 22 38 43 44\r
67 20 33 -33 118 16 152 88 40 85 99 283 88 294 -8 9 -22 11 -117 19 l-76 7\r
-12 -31z m149 -76 c9 -24 -5 -90 -28 -132 -6 -11 -13 -26 -16 -34 -4 -8 -17\r
-33 -30 -55 -32 -54 -67 -59 -90 -14 -20 41 -21 41 9 33 23 -6 25 -4 25 30 0\r
27 6 39 26 52 14 9 23 23 20 30 -3 8 -1 14 4 14 6 0 10 -4 10 -10 0 -5 4 -10\r
8 -10 5 0 13 20 19 44 l10 45 -31 3 -31 4 25 11 c39 18 60 15 70 -11z`}),l.createElement("path",{d:`M5090 3845 c0 -24 5 -35 14 -35 20 0 25 20 13 48 -15 33 -27 27 -27\r
-13z`}),l.createElement("path",{d:`M4400 3750 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\r
-15 -4 -15 -10z`}),l.createElement("path",{d:`M4360 3700 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
-10 -4 -10 -10z`}),l.createElement("path",{d:`M4708 3581 c-10 -13 -15 -28 -11 -34 9 -14 35 18 31 39 -3 17 -5 17\r
-20 -5z`}),l.createElement("path",{d:"M6105 4009 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"}),l.createElement("path",{d:`M6280 3790 c0 -13 30 -13 50 0 11 7 7 10 -17 10 -18 0 -33 -4 -33\r
-10z`}),l.createElement("path",{d:`M6312 3673 c3 -14 14 -18 56 -19 49 -1 72 9 58 23 -4 4 -31 8 -62 10\r
-49 3 -55 1 -52 -14z`}),l.createElement("path",{d:`M6483 3683 c-13 -2 -23 -11 -23 -19 0 -12 13 -14 66 -10 36 2 68 6\r
70 9 3 3 21 1 41 -3 37 -9 63 -4 63 11 0 5 -24 8 -52 8 -29 -1 -73 1 -98 4\r
-25 3 -55 3 -67 0z`}),l.createElement("path",{d:`M6716 3672 c-8 -14 10 -18 78 -21 45 -2 57 1 54 11 -5 16 -123 24\r
-132 10z`}),l.createElement("path",{d:`M6657 3623 c-44 -12 3 -23 99 -23 67 0 103 4 99 10 -3 5 -16 9 -28 8\r
-12 -1 -51 1 -87 4 -36 4 -73 4 -83 1z`}),l.createElement("path",{d:`M5460 3601 c0 -17 34 -22 49 -6 14 13 12 15 -17 15 -18 0 -32 -4 -32\r
-9z`}))))}function ri(){return l.createElement("div",{className:"flexSVG"},l.createElement("svg",{className:"pastryIMG",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1096.000000pt",viewBox:"0 0 1280.000000 1096.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),l.createElement("g",{transform:"translate(0.000000,1096.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},l.createElement("path",{d:`M11677 10945 c-21 -10 -34 -12 -47 -5 -43 23 -123 3 -152 -39 -21\r
-30 -126 -32 -163 -3 -30 24 -101 30 -136 12 -13 -7 -31 -8 -54 -1 -44 12 -90\r
0 -124 -33 -37 -35 -131 -39 -181 -8 -19 12 -44 22 -55 23 -35 2 -69 -3 -87\r
-12 -10 -6 -28 -5 -45 2 -39 15 -88 3 -126 -30 -23 -20 -47 -30 -86 -34 -46\r
-5 -57 -3 -85 17 -43 33 -86 40 -130 22 -28 -11 -43 -13 -66 -4 -43 15 -94 2\r
-128 -31 -22 -22 -42 -31 -85 -36 -50 -6 -59 -5 -90 19 -36 28 -101 35 -138\r
16 -13 -8 -31 -7 -58 1 -48 14 -102 -1 -131 -38 -16 -20 -31 -26 -79 -30 -55\r
-5 -63 -3 -92 22 -29 24 -38 26 -83 21 -28 -4 -83 -6 -121 -6 -66 1 -72 -1\r
-112 -34 -35 -31 -48 -36 -92 -36 -37 0 -60 6 -88 26 -32 22 -45 25 -83 19\r
-25 -3 -73 -6 -107 -5 -66 1 -105 -13 -137 -49 -27 -29 -116 -30 -157 0 -41\r
29 -91 35 -129 15 -23 -11 -37 -13 -50 -6 -43 23 -114 5 -154 -39 -28 -31\r
-125 -30 -167 2 -34 24 -107 29 -132 9 -10 -9 -22 -9 -46 -1 -43 15 -95 3\r
-134 -31 -45 -39 -129 -44 -175 -11 -43 30 -93 37 -131 18 -24 -12 -37 -13\r
-59 -5 -40 15 -97 2 -129 -31 -22 -22 -41 -29 -89 -34 -53 -6 -64 -4 -79 13\r
-29 32 -88 43 -130 26 -27 -12 -42 -12 -65 -4 -43 14 -93 2 -129 -31 -22 -21\r
-44 -30 -85 -35 -48 -5 -60 -3 -92 19 -39 27 -100 33 -135 15 -13 -8 -31 -7\r
-58 0 -32 8 -48 7 -81 -6 -22 -9 -46 -25 -54 -35 -8 -12 -31 -21 -70 -25 -51\r
-6 -61 -4 -89 17 -26 19 -43 23 -87 22 -30 -1 -83 -2 -117 -2 -64 0 -115 -18\r
-131 -47 -6 -10 -29 -17 -68 -21 -53 -5 -64 -2 -98 21 -41 28 -101 35 -137 16\r
-13 -7 -31 -8 -54 -1 -47 13 -94 -1 -130 -39 -25 -26 -36 -30 -83 -30 -39 0\r
-62 6 -83 21 -40 28 -99 35 -137 16 -18 -9 -35 -11 -43 -6 -8 5 -33 9 -56 9\r
-35 0 -50 -6 -82 -35 -34 -31 -44 -35 -94 -35 -43 0 -65 6 -93 25 -40 27 -86\r
32 -123 11 -18 -10 -32 -11 -56 -3 -46 14 -97 2 -131 -32 -25 -24 -39 -30 -87\r
-32 -40 -2 -62 2 -74 13 -46 40 -106 49 -153 24 -18 -10 -30 -11 -44 -4 -34\r
18 -105 3 -139 -30 -43 -40 -130 -51 -164 -20 -31 29 -83 38 -129 22 -30 -10\r
-47 -11 -72 -3 -42 14 -78 5 -122 -30 -49 -39 -139 -50 -165 -21 -29 32 -86\r
43 -136 26 -29 -10 -48 -12 -60 -5 -40 21 -104 4 -142 -39 -13 -14 -37 -22\r
-76 -27 -52 -6 -62 -4 -96 19 -43 29 -92 33 -134 12 -17 -9 -32 -11 -42 -5 -8\r
5 -33 9 -56 9 -33 0 -50 -7 -77 -31 -27 -23 -48 -32 -88 -36 -47 -5 -59 -2\r
-93 22 -35 23 -46 26 -90 20 -27 -3 -78 -5 -112 -5 -66 1 -105 -13 -135 -49\r
-27 -32 -115 -29 -164 4 -41 28 -86 32 -125 11 -16 -8 -32 -10 -40 -5 -40 25\r
-116 5 -163 -43 -25 -26 -118 -25 -154 2 -39 29 -93 36 -132 16 -23 -11 -37\r
-13 -50 -6 -43 23 -114 5 -153 -38 -15 -16 -37 -21 -138 -27 -98 -6 -121 -10\r
-128 -24 -6 -10 -14 -91 -20 -182 -10 -159 -14 -257 -46 -1074 -8 -209 -31\r
-774 -50 -1255 -63 -1565 -93 -2336 -135 -3435 -16 -429 -36 -926 -45 -1105\r
-8 -179 -19 -437 -25 -575 -6 -137 -17 -304 -26 -370 -23 -175 -15 -260 32\r
-360 70 -149 176 -287 443 -575 79 -85 159 -178 177 -207 19 -29 40 -56 47\r
-60 7 -4 23 -32 37 -62 14 -30 37 -71 52 -92 14 -20 36 -56 48 -80 13 -24 37\r
-64 55 -89 18 -25 52 -81 75 -125 53 -98 210 -351 263 -423 54 -74 87 -92 167\r
-92 36 0 99 5 140 11 233 31 293 40 375 54 109 18 247 38 775 110 223 31 551\r
78 730 105 179 27 458 68 620 90 162 22 639 90 1060 150 421 60 1098 157 1505\r
215 407 58 778 112 825 120 47 8 110 15 140 15 30 0 73 5 95 10 72 16 2465\r
360 2830 406 110 13 239 31 286 39 107 19 977 145 1274 185 313 43 467 69 492\r
86 13 8 31 26 40 41 17 25 18 63 18 453 l0 425 64 42 c86 57 110 81 117 119 3\r
18 -10 147 -30 291 -19 142 -49 364 -66 493 -81 635 -105 825 -150 1190 -44\r
352 -104 852 -160 1330 -10 91 -28 266 -40 390 -11 124 -30 288 -40 365 -22\r
156 -94 871 -110 1095 -5 80 -24 325 -40 545 -16 220 -39 533 -50 695 -11 162\r
-22 311 -25 330 -3 19 -16 193 -30 385 -44 622 -65 839 -85 915 -6 22 -32 66\r
-58 99 -26 33 -55 73 -64 90 -34 62 -112 87 -171 56z m-48 -32 c15 -12 -24\r
-24 -70 -21 l-54 3 35 17 c30 14 74 15 89 1z m157 2 c17 -13 14 -14 -43 -15\r
-58 0 -73 6 -56 23 12 13 79 7 99 -8z m-492 -35 c7 -7 -11 -10 -52 -10 -66 0\r
-76 5 -39 20 25 11 76 5 91 -10z m-164 0 c13 -8 13 -10 0 -14 -24 -8 -110 -12\r
-110 -5 0 21 83 36 110 19z m669 -32 c44 -47 49 -64 26 -108 -13 -25 -60 -60\r
-80 -60 -3 0 -5 18 -5 39 0 22 -4 42 -9 45 -4 3 -11 25 -14 48 -2 24 -8 51\r
-12 61 -6 14 -2 17 24 17 23 0 40 -10 70 -42z m-121 15 c16 -30 22 -68 13 -81\r
-5 -8 -41 -16 -92 -20 l-84 -7 2 -75 c1 -41 5 -108 8 -149 l7 -73 106 7 c59 4\r
109 9 111 11 3 3 4 44 2 93 -2 87 -2 89 22 95 28 7 87 69 87 91 0 25 16 17 33\r
-17 11 -22 24 -100 37 -233 19 -194 31 -349 85 -1090 35 -474 121 -1595 145\r
-1890 33 -402 45 -515 169 -1615 67 -594 168 -1423 221 -1810 49 -362 162\r
-1252 167 -1316 5 -65 3 -73 -15 -83 -48 -26 -397 -75 -2902 -411 -448 -60\r
-876 -118 -950 -130 -74 -11 -331 -44 -570 -75 -239 -30 -460 -60 -490 -65\r
-85 -15 -1075 -149 -2030 -276 -476 -63 -1025 -136 -1220 -164 -316 -44 -558\r
-76 -1540 -205 -336 -44 -522 -70 -730 -101 -175 -26 -837 -114 -857 -114 -16\r
0 -16 -2 -73 485 -55 465 -102 906 -185 1730 -31 303 -62 615 -70 695 -9 80\r
-31 307 -50 505 -19 198 -64 655 -100 1015 -82 827 -287 2889 -360 3625 -83\r
842 -91 895 -140 933 l-24 19 77 6 c42 4 134 9 203 13 122 7 127 6 138 -14 6\r
-11 11 -36 11 -55 l0 -35 -91 -7 -91 -7 7 -122 c3 -66 9 -134 12 -150 l5 -28\r
102 7 c55 4 106 11 112 16 8 7 10 37 6 94 -4 74 -3 85 11 85 26 0 85 58 98 97\r
10 33 9 67 -6 119 -7 21 -4 22 132 29 76 3 146 9 156 11 13 4 21 -4 33 -31 29\r
-69 20 -79 -76 -88 -47 -5 -89 -12 -93 -16 -5 -5 -2 -71 5 -147 l13 -139 95 4\r
c132 5 130 3 124 104 l-5 82 42 20 c56 27 81 73 76 140 -2 28 -7 57 -11 66 -7\r
15 6 18 111 23 65 4 135 9 155 11 34 5 39 2 53 -26 9 -16 15 -42 13 -57 -3\r
-23 -8 -27 -38 -29 -19 -2 -59 -6 -89 -9 l-54 -6 8 -136 c4 -76 11 -142 17\r
-149 9 -12 23 -11 167 3 l54 6 -6 86 -6 87 39 18 c52 24 82 74 82 136 0 26 -5\r
58 -11 70 -11 19 -9 21 21 21 18 0 87 5 153 10 139 11 144 8 152 -64 l6 -46\r
-60 0 c-33 0 -75 -3 -93 -6 l-32 -7 7 -106 c3 -58 8 -123 12 -145 l5 -39 105\r
6 c57 3 107 8 110 11 7 6 5 132 -2 156 -3 10 9 21 35 32 69 29 105 117 77 189\r
-14 36 -14 39 1 39 9 0 80 5 156 10 159 12 164 10 173 -57 5 -36 3 -41 -18\r
-46 -13 -4 -52 -7 -85 -7 -86 0 -88 -4 -75 -142 6 -62 11 -123 11 -135 0 -22\r
4 -23 63 -22 34 0 85 4 112 7 l50 7 -4 93 c-3 86 -2 92 16 92 27 0 70 35 88\r
70 17 33 20 112 5 140 -11 20 4 23 201 35 108 7 117 3 126 -63 5 -37 4 -39\r
-27 -46 -18 -3 -56 -6 -86 -6 -29 0 -56 -5 -60 -11 -3 -6 -3 -71 1 -146 6\r
-105 10 -136 22 -140 8 -3 58 -2 111 3 l97 9 -2 86 c-2 87 -2 87 26 99 72 29\r
112 117 88 189 l-14 40 36 5 c20 3 91 8 158 12 l123 6 10 -27 c5 -14 10 -39\r
10 -55 0 -28 -1 -29 -67 -35 -38 -3 -77 -7 -88 -8 -19 -2 -20 -8 -17 -107 1\r
-58 5 -125 8 -149 l6 -43 101 7 c56 3 106 10 111 15 5 5 7 46 4 92 l-4 83 40\r
20 c69 34 101 123 71 197 -9 23 6 26 171 34 l141 6 12 -32 c6 -18 11 -43 11\r
-56 0 -21 -6 -23 -77 -29 -43 -3 -85 -7 -93 -8 -12 -2 -14 -19 -12 -94 2 -50\r
7 -115 11 -144 l6 -54 90 3 c143 4 135 -3 128 100 l-6 87 37 13 c51 19 86 73\r
86 135 0 27 -5 57 -11 69 -6 11 -9 21 -7 23 2 1 68 6 148 10 80 4 148 9 152\r
11 11 7 38 -52 38 -84 l0 -30 -91 -7 -92 -7 7 -134 c3 -74 9 -141 12 -149 6\r
-13 20 -15 93 -10 145 10 135 2 127 103 l-6 87 42 20 c54 25 82 72 81 135 0\r
26 -6 56 -12 67 -10 21 -8 21 117 27 70 4 139 9 154 11 35 6 58 -25 58 -76 l0\r
-36 -91 -8 -90 -7 7 -126 c10 -178 7 -173 96 -167 40 4 88 8 107 11 l33 5 -4\r
87 -4 87 41 20 c70 35 101 126 70 207 -5 13 9 16 102 22 59 4 129 9 156 12 47\r
6 47 6 63 -31 8 -20 14 -47 12 -59 -3 -19 -11 -22 -87 -28 -46 -4 -88 -11 -93\r
-16 -10 -10 9 -273 20 -283 8 -8 195 6 210 15 6 3 8 39 5 89 l-6 84 29 10 c36\r
13 72 47 85 80 12 32 12 95 -1 127 -8 23 -7 26 13 26 12 0 80 5 152 10 150 11\r
158 8 159 -62 l1 -43 -45 -2 c-25 -2 -65 -6 -89 -9 l-44 -6 7 -136 c4 -75 11\r
-141 16 -147 6 -7 36 -8 92 -4 46 4 94 8 107 8 24 1 24 1 17 90 l-7 89 28 9\r
c74 26 115 113 90 188 l-14 43 66 6 c36 3 107 8 157 12 l91 6 12 -30 c7 -16\r
11 -43 9 -58 -3 -28 -5 -29 -68 -32 -121 -4 -113 5 -105 -130 10 -180 6 -172\r
73 -172 31 0 81 3 111 7 l54 6 -5 88 -5 88 43 21 c70 35 101 123 69 202 -8 20\r
18 24 187 33 110 7 117 6 127 -13 6 -12 11 -36 11 -55 0 -31 -4 -35 -31 -41\r
-17 -3 -52 -6 -78 -6 -75 0 -74 0 -62 -144 6 -70 11 -134 11 -142 0 -15 67\r
-18 170 -6 l55 7 -3 90 -3 90 39 17 c65 30 100 120 73 192 -12 31 -5 33 174\r
42 l131 6 12 -26 c7 -15 12 -40 12 -55 0 -25 -4 -29 -37 -35 -21 -3 -58 -6\r
-83 -6 -26 0 -50 -4 -56 -10 -11 -11 3 -270 16 -284 5 -5 52 -5 112 0 l103 9\r
-3 87 -3 87 34 14 c75 32 113 120 83 192 -9 21 -16 39 -16 41 0 2 33 4 73 5\r
39 0 109 4 155 8 96 7 102 4 109 -63 l5 -44 -78 -7 c-44 -3 -85 -8 -93 -11\r
-11 -3 -12 -27 -7 -122 4 -64 9 -130 12 -145 l6 -28 101 7 c56 3 106 9 111 12\r
5 2 6 43 3 89 l-5 84 32 13 c71 30 109 112 87 188 -7 22 -11 41 -9 43 2 2 70\r
7 152 12 141 8 149 7 162 -12 8 -11 14 -36 14 -56 l0 -37 -87 -8 -88 -9 4 -99\r
c2 -55 6 -120 10 -145 l6 -46 100 4 c55 2 105 7 111 12 7 5 9 40 6 94 -4 73\r
-2 85 11 85 26 0 85 58 98 97 11 34 8 89 -6 124 -5 14 8 17 102 23 59 4 129 9\r
156 12 47 6 47 6 63 -31 29 -69 20 -79 -76 -88 -47 -5 -87 -12 -90 -17 -6 -9\r
8 -256 15 -277 3 -9 28 -11 92 -7 147 9 136 0 128 103 -7 87 -7 89 17 96 30 9\r
66 42 84 77 17 32 18 101 3 130 -6 11 -9 21 -7 23 2 2 71 8 153 13 172 12 178\r
10 179 -60 1 -36 -2 -43 -19 -45 -11 -1 -51 -5 -89 -8 l-68 -7 7 -131 c4 -73\r
11 -139 16 -149 9 -16 54 -17 178 -2 l44 6 -6 87 -5 87 36 19 c53 29 82 77 82\r
137 0 27 -4 57 -10 67 -9 17 -3 19 78 25 48 4 119 9 159 12 78 7 88 0 93 -56\r
5 -58 6 -57 -85 -62 -47 -2 -88 -7 -91 -11 -6 -6 14 -278 21 -286 7 -6 145 -1\r
185 8 l35 7 -4 92 c-3 80 -1 92 13 92 69 0 132 133 95 202 -6 11 -8 22 -6 25\r
3 2 72 9 153 14 166 11 167 11 180 -59 9 -44 -4 -52 -87 -52 -97 0 -98 -1 -87\r
-150 5 -69 11 -131 14 -139 4 -11 24 -13 105 -8 55 3 104 9 110 13 7 4 8 35 4\r
89 l-7 82 38 19 c21 11 46 31 57 45 23 33 33 107 19 147 -10 29 -9 30 21 35\r
18 3 88 9 157 12 l126 7 12 -26 c7 -15 12 -40 12 -56 0 -33 -15 -38 -120 -43\r
l-55 -2 3 -125 c3 -188 -6 -174 114 -166 55 3 105 9 111 13 6 4 8 36 4 87 l-6\r
82 42 20 c71 32 107 131 72 197 -18 35 -15 36 90 40 209 8 214 8 223 -10z\r
m-889 -7 c24 -13 22 -14 -30 -18 -57 -5 -85 6 -59 22 21 14 61 12 89 -4z\r
m-154 -6 c7 -12 -4 -16 -67 -25 -27 -3 -48 -2 -48 3 0 24 102 44 115 22z m699\r
-12 c32 -46 13 -138 -36 -172 -34 -24 -45 -19 -51 22 -5 36 -17 88 -32 145\r
l-7 27 55 0 c46 0 59 -4 71 -22z m-1035 -12 c23 -13 21 -13 -30 -19 -56 -5\r
-86 6 -59 23 21 14 61 12 89 -4z m-154 -5 c8 -14 -7 -20 -71 -27 l-59 -6 25\r
21 c26 21 94 29 105 12z m703 -35 c17 -51 1 -106 -39 -141 -39 -32 -53 -28\r
-57 16 -2 19 -8 38 -13 44 -5 5 -9 25 -9 45 0 19 -5 42 -10 50 -13 20 12 30\r
70 27 43 -2 46 -4 58 -41z m-1035 5 c10 -10 -86 -26 -103 -16 -15 10 -12 23 8\r
29 23 6 83 -1 95 -13z m-168 -2 c11 -16 2 -20 -61 -25 l-59 -5 24 20 c25 22\r
85 29 96 10z m705 -15 c25 -64 7 -134 -42 -164 -45 -27 -48 -26 -48 20 0 22\r
-4 40 -10 40 -5 0 -10 15 -10 34 0 19 -4 46 -10 60 -8 22 -6 25 18 29 74 11\r
92 8 102 -19z m-1050 -6 c30 -10 32 -12 14 -19 -28 -11 -92 -11 -99 1 -3 6 4\r
14 17 19 31 13 30 13 68 -1z m-150 -8 c13 -9 13 -11 0 -20 -21 -14 -113 -13\r
-105 1 16 25 79 36 105 19z m705 -20 c19 -38 19 -73 -1 -116 -14 -29 -57 -64\r
-79 -64 -3 0 -5 15 -5 34 0 18 -6 39 -14 46 -8 6 -13 17 -10 24 3 7 -1 31 -9\r
54 l-14 41 36 4 c79 8 80 8 96 -23z m-1185 -16 c11 -11 -28 -24 -74 -24 -41 0\r
-47 2 -36 14 18 23 90 29 110 10z m176 -18 c29 -29 34 -41 34 -83 0 -64 -39\r
-122 -82 -123 -14 0 -18 8 -18 33 0 18 -4 37 -9 43 -5 5 -11 27 -13 49 -3 22\r
-8 48 -12 57 -7 14 0 17 46 21 l53 3 -62 2 c-58 2 -73 9 -56 25 3 4 24 7 46 7\r
31 0 46 -7 73 -34z m510 16 c24 -37 26 -80 6 -124 -22 -50 -67 -82 -82 -58 -6\r
8 -10 27 -10 43 0 15 -4 27 -10 27 -5 0 -10 19 -10 43 0 23 -5 49 -10 57 -8\r
12 0 16 43 21 29 3 54 6 57 7 3 1 10 -6 16 -16z m-1032 -18 c33 -13 14 -24\r
-38 -24 -79 0 -87 27 -9 29 17 1 38 -2 47 -5z m-156 -16 c-3 -8 -26 -14 -59\r
-16 -50 -2 -52 -1 -35 13 25 19 100 21 94 3z m-332 -23 c17 -13 14 -14 -43\r
-15 -83 0 -85 25 -2 29 14 0 34 -6 45 -14z m-156 -5 c0 -13 -13 -17 -75 -23\r
l-50 -5 24 19 c25 20 101 27 101 9z m698 -15 c28 -61 6 -137 -48 -169 -37 -21\r
-37 -22 -43 22 -8 57 -25 135 -32 155 -6 15 0 17 52 17 54 0 61 -2 71 -25z\r
m-1033 -9 c18 -13 14 -14 -39 -17 -57 -4 -73 2 -61 21 9 15 78 12 100 -4z\r
m-160 -6 c8 -13 -6 -17 -75 -24 l-55 -5 24 19 c25 21 95 28 106 10z m695 -5\r
c38 -45 14 -152 -41 -180 -38 -20 -37 -20 -45 23 -4 20 -9 41 -12 46 -3 5 -6\r
23 -7 40 -1 17 -6 43 -10 59 l-7 27 55 0 c36 0 59 -5 67 -15z m-1031 -19 c24\r
-13 22 -14 -30 -18 -57 -5 -85 6 -59 22 21 14 61 12 89 -4z m-154 -5 c8 -14\r
-4 -18 -70 -26 l-60 -6 24 20 c24 22 95 29 106 12z m695 -17 c25 -65 2 -142\r
-50 -169 -40 -20 -40 -20 -40 24 0 22 -4 43 -10 46 -5 3 -10 19 -10 35 0 16\r
-4 40 -9 54 -12 30 -5 34 62 35 42 1 49 -2 57 -25z m-1043 -6 c28 -11 28 -11\r
-21 -20 -27 -5 -56 -6 -65 -3 -14 6 -14 8 3 21 24 17 46 18 83 2z m-150 -15\r
c3 -7 -16 -14 -52 -18 -66 -9 -78 -3 -38 19 31 18 84 17 90 -1z m701 -8 c28\r
-61 5 -143 -48 -170 -39 -20 -40 -20 -40 19 0 19 -4 37 -9 40 -4 3 -11 25 -14\r
48 -2 24 -8 51 -12 60 -7 18 10 24 76 27 29 1 38 -4 47 -24z m-1021 -19 c2 -2\r
-19 -7 -47 -11 -33 -5 -56 -3 -63 4 -10 10 -8 12 33 24 14 4 68 -8 77 -17z\r
m-183 8 c9 -3 16 -10 16 -15 0 -11 -59 -22 -96 -17 l-29 3 30 17 c32 18 54 22\r
79 12z m711 -24 c27 -53 10 -131 -36 -164 -35 -24 -47 -20 -55 22 -4 20 -9 41\r
-12 46 -2 4 -6 26 -7 48 -2 21 -9 45 -15 53 -9 11 -5 14 22 18 80 10 87 8 103\r
-23z m-1051 0 c43 -16 30 -30 -28 -30 -59 0 -81 15 -44 29 30 13 42 13 72 1z\r
m-146 -9 c25 -16 -14 -32 -70 -29 l-53 3 30 17 c32 19 72 23 93 9z m706 -25\r
c20 -43 20 -69 0 -112 -18 -38 -49 -64 -76 -64 -14 0 -18 8 -18 39 0 22 -4 42\r
-8 45 -5 3 -9 21 -10 41 -1 19 -6 44 -12 55 -9 17 -6 19 32 23 24 2 50 4 59 5\r
10 1 23 -12 33 -32z m-1204 -6 c27 -17 -4 -31 -61 -28 l-54 3 35 17 c40 20 59\r
22 80 8z m164 4 c33 -13 14 -24 -38 -24 -51 0 -74 9 -59 24 8 8 76 8 97 0z\r
m553 -62 c7 -50 -10 -95 -45 -122 -37 -30 -52 -26 -52 14 0 19 -4 37 -9 40 -4\r
3 -11 25 -14 48 -2 24 -8 51 -12 60 -6 14 1 17 47 20 64 4 78 -6 85 -60z\r
m-1041 23 c17 -13 14 -14 -43 -15 -35 0 -63 4 -63 9 0 23 77 28 106 6z m-158\r
-7 c-5 -14 -118 -29 -118 -16 0 14 36 27 78 28 31 0 42 -4 40 -12z m703 -28\r
c16 -51 -1 -110 -38 -139 -40 -32 -50 -27 -63 37 -6 31 -16 73 -21 92 -5 19\r
-9 38 -9 43 0 4 27 7 60 7 l59 0 12 -40z m-1211 10 c23 -15 1 -27 -57 -32 -61\r
-6 -67 3 -20 26 37 18 56 20 77 6z m175 -4 c18 -13 14 -14 -39 -17 -35 -3 -61\r
0 -67 8 -20 24 75 32 106 9z m544 -42 c13 -36 13 -47 0 -80 -15 -38 -73 -89\r
-90 -78 -5 3 -9 20 -9 38 0 17 -4 36 -9 42 -5 5 -11 27 -13 49 -3 22 -8 48\r
-13 58 -7 16 -2 18 56 15 l64 -3 14 -41z m-1035 6 c7 -7 -5 -10 -37 -11 -26\r
-1 -52 -2 -59 -3 -19 -2 -20 22 -1 27 25 8 84 0 97 -13z m-169 -1 c10 -15 7\r
-15 -60 -23 l-60 -6 24 20 c25 21 85 27 96 9z m705 -19 c18 -44 7 -107 -26\r
-141 -39 -41 -64 -39 -64 5 0 19 -4 37 -9 40 -4 3 -11 25 -14 48 -2 24 -8 51\r
-12 61 -6 15 0 17 53 17 57 0 60 -1 72 -30z m-1035 -3 c16 -12 12 -15 -36 -20\r
-32 -4 -58 -2 -64 4 -26 26 66 40 100 16z m-162 -12 c-2 -12 -69 -27 -103 -23\r
l-25 3 30 17 c31 18 101 20 98 3z m702 -15 c19 -38 19 -73 -1 -116 -14 -28\r
-57 -64 -77 -64 -3 0 -8 17 -12 37 -4 21 -9 42 -12 47 -4 5 -8 27 -10 49 -2\r
22 -8 46 -14 53 -11 14 9 20 73 23 32 1 40 -3 53 -29z m-1211 -6 c9 -3 16 -10\r
16 -15 0 -11 -59 -22 -96 -17 l-29 3 35 17 c38 19 50 21 74 12z m175 -3 c9 -6\r
-3 -11 -37 -16 -54 -7 -85 1 -61 16 18 11 80 11 98 0z m547 -28 c21 -50 10\r
-99 -31 -140 -46 -46 -65 -44 -65 6 0 22 -4 43 -10 46 -5 3 -10 23 -10 43 0\r
20 -5 44 -10 52 -10 17 17 27 78 29 29 1 35 -3 48 -36z m-1056 5 c30 -10 32\r
-12 14 -19 -28 -11 -92 -11 -99 1 -3 6 4 14 17 19 31 13 30 13 68 -1z m-150\r
-8 c13 -9 13 -11 0 -20 -15 -10 -110 -14 -110 -5 0 9 55 34 75 34 11 1 27 -4\r
35 -9z m706 -22 c24 -45 14 -112 -22 -149 -39 -41 -64 -39 -64 5 0 19 -4 37\r
-9 40 -4 3 -11 25 -14 48 -2 24 -8 51 -12 60 -7 17 -5 17 87 26 10 1 24 -11\r
34 -30z m-1187 -14 c14 -13 -23 -25 -70 -22 l-54 3 35 18 c30 14 75 15 89 1z\r
m155 10 c33 -13 14 -24 -38 -24 -51 0 -74 9 -59 24 8 8 76 8 97 0z m545 -37\r
c18 -48 7 -103 -29 -139 -40 -39 -57 -36 -65 12 -4 22 -11 42 -15 45 -5 3 -7\r
12 -4 19 3 7 -1 31 -9 54 l-14 41 51 4 c70 4 69 5 85 -36z m-1045 7 c33 -13\r
14 -24 -38 -24 -79 0 -87 27 -9 29 17 1 38 -2 47 -5z m561 -68 c9 -45 -16\r
-101 -56 -125 -18 -11 -36 -18 -41 -15 -4 3 -8 23 -8 45 0 21 -4 39 -10 39 -5\r
0 -10 15 -10 34 0 19 -4 46 -10 60 -9 25 -8 25 43 28 60 3 82 -13 92 -66z\r
m-705 55 c0 -14 -27 -21 -78 -21 -44 1 -46 2 -28 15 21 16 106 21 106 6z m198\r
-46 c28 -61 6 -137 -48 -169 -38 -22 -40 -21 -40 23 0 22 -4 42 -9 45 -4 3\r
-11 25 -14 48 -2 24 -8 51 -12 61 -6 15 0 17 52 17 54 0 61 -2 71 -25z`}),l.createElement("path",{d:`M11324 10420 c-121 -25 -124 -27 -124 -72 0 -37 2 -40 23 -34 145 45\r
219 46 262 6 30 -28 40 -75 26 -113 -14 -37 -80 -66 -148 -67 l-53 0 0 -41 0\r
-40 53 6 c115 15 187 -34 187 -127 0 -41 -5 -54 -28 -78 -50 -49 -174 -66\r
-262 -35 -23 8 -45 15 -48 15 -5 0 4 -79 10 -85 2 -2 35 -9 73 -15 118 -19\r
246 11 302 72 30 32 43 71 43 130 0 84 -43 146 -114 164 l-27 7 39 23 c99 59\r
89 210 -17 264 -47 23 -138 33 -197 20z`}),l.createElement("path",{d:`M10708 10357 l-78 -22 0 -43 c0 -36 3 -43 15 -38 29 11 137 37 140\r
34 4 -4 35 -435 35 -480 l0 -28 -70 0 -70 0 0 -41 0 -42 58 6 c31 4 117 9 190\r
13 l132 7 0 40 0 40 -75 -6 c-67 -6 -75 -5 -75 11 0 32 -31 487 -36 530 l-5\r
42 -42 -1 c-23 -1 -77 -11 -119 -22z`}),l.createElement("path",{d:`M10155 10331 c-91 -41 -130 -130 -129 -291 0 -243 84 -380 232 -380\r
84 0 146 36 185 108 70 128 50 393 -39 509 -52 68 -164 93 -249 54z m165 -89\r
c43 -43 56 -82 71 -207 11 -97 -1 -199 -27 -244 -18 -31 -67 -61 -99 -61 -73\r
0 -126 80 -146 219 -21 150 5 275 65 312 51 31 92 25 136 -19z`}),l.createElement("path",{d:`M9560 10300 c-20 -5 -57 -18 -84 -29 -42 -18 -47 -24 -42 -44 3 -12\r
6 -32 6 -44 0 -21 1 -20 56 9 69 38 164 49 211 25 31 -16 63 -70 63 -104 -1\r
-29 -38 -103 -78 -152 -20 -25 -78 -95 -129 -154 -83 -97 -93 -112 -93 -147 0\r
-25 5 -40 12 -40 36 0 348 21 376 26 29 4 32 8 32 40 l0 36 -117 -6 c-65 -4\r
-136 -10 -158 -13 -48 -7 -53 -15 92 156 107 126 137 173 148 232 16 84 -48\r
185 -130 208 -46 12 -114 13 -165 1z`}),l.createElement("path",{d:`M4948 9717 c-7 -8 -42 -122 -78 -255 -36 -133 -68 -242 -71 -242 -4\r
0 -62 106 -130 235 -135 256 -126 245 -206 229 l-30 -6 163 -299 c90 -164 164\r
-305 164 -312 0 -7 -9 -41 -21 -76 -24 -70 -42 -86 -111 -95 l-47 -7 6 -37 c3\r
-20 8 -39 10 -41 6 -8 96 -1 130 10 43 14 87 66 107 126 15 47 216 770 216\r
779 0 11 -90 2 -102 -9z`}),l.createElement("path",{d:`M4270 9674 c-48 -15 -73 -33 -107 -77 l-22 -29 -5 24 c-3 12 -7 32\r
-8 43 -3 17 -10 19 -53 16 -28 -1 -51 -3 -52 -4 0 -1 15 -144 36 -317 l37\r
-315 39 -3 c68 -4 68 -5 45 184 -26 216 -25 249 3 304 34 68 65 85 151 85 l73\r
0 -4 40 c-3 22 -6 46 -9 53 -5 16 -67 14 -124 -4z`}),l.createElement("path",{d:`M3490 9620 c-25 -6 -73 -20 -108 -32 l-64 -22 7 -46 c4 -25 8 -46 9\r
-47 1 -1 24 9 52 22 98 47 217 51 280 10 29 -19 64 -72 64 -97 0 -19 -18 -23\r
-138 -33 -148 -13 -225 -55 -258 -141 -52 -135 49 -284 193 -284 92 0 142 18\r
194 70 l47 47 6 -41 6 -41 51 4 51 3 -7 72 c-20 206 -45 367 -65 413 -25 58\r
-70 106 -120 127 -47 19 -144 27 -200 16z m255 -405 c-13 -105 -84 -174 -178\r
-175 -87 0 -137 48 -137 133 0 80 52 109 225 125 74 7 81 6 88 -13 5 -11 6\r
-42 2 -70z`}),l.createElement("path",{d:`M793 9603 c-24 -2 -43 -8 -43 -12 0 -6 78 -682 94 -816 3 -22 0 -62\r
-6 -88 -11 -55 -50 -87 -105 -87 -40 0 -46 -10 -38 -62 l7 -41 56 6 c79 8 142\r
43 171 97 39 70 37 140 -17 595 -38 328 -51 410 -62 411 -8 0 -34 -1 -57 -3z`}),l.createElement("path",{d:`M2994 9557 c-2 -7 4 -88 16 -179 26 -216 26 -263 -3 -312 -42 -74\r
-161 -106 -224 -60 -60 44 -75 106 -116 509 -2 18 -8 20 -52 16 -27 -1 -51 -4\r
-53 -6 -10 -9 50 -440 68 -487 60 -160 251 -200 373 -78 51 51 49 51 59 -15 3\r
-17 10 -19 53 -16 28 1 51 3 52 4 2 3 -67 589 -72 615 -5 19 -12 22 -51 22\r
-27 0 -47 -5 -50 -13z`}),l.createElement("path",{d:`M2075 9498 c-42 -15 -93 -55 -115 -90 l-18 -30 -7 51 -7 50 -46 -6\r
c-26 -3 -49 -7 -51 -10 -4 -3 54 -532 66 -602 6 -33 6 -33 51 -27 25 3 48 8\r
50 11 3 3 -5 92 -17 199 -27 227 -24 262 25 316 62 68 184 76 233 14 31 -39\r
39 -75 61 -264 11 -96 22 -191 25 -210 l6 -35 49 3 c60 5 58 -19 25 247 -32\r
270 -56 329 -148 374 -47 23 -130 27 -182 9z`}),l.createElement("path",{d:`M1284 9440 c-23 -5 -68 -19 -100 -32 l-59 -23 4 -45 c1 -25 4 -46 5\r
-47 1 -1 24 9 51 22 132 65 276 53 325 -28 17 -28 27 -77 16 -77 -2 0 -49 -5\r
-104 -10 -219 -23 -296 -79 -295 -215 1 -142 100 -226 246 -211 70 7 124 33\r
165 81 l32 35 6 -40 7 -40 47 0 c25 0 49 2 51 5 8 8 -40 396 -56 451 -20 69\r
-64 127 -118 153 -52 25 -158 35 -223 21z m264 -361 c7 -89 -34 -169 -102\r
-200 -57 -26 -115 -24 -157 4 -93 63 -74 186 33 216 42 11 193 30 213 26 6 -1\r
11 -21 13 -46z`}),l.createElement("path",{d:`M11783 9161 l-17 -29 -19 24 c-10 14 -29 24 -43 24 -13 0 -24 -2 -24\r
-4 0 -2 16 -27 35 -56 19 -29 35 -60 35 -70 0 -10 7 -23 15 -30 17 -14 18 -13\r
35 70 6 30 13 65 16 77 9 33 -14 29 -33 -6z`}),l.createElement("path",{d:`M11592 9162 c-12 -8 -32 -101 -32 -149 0 -28 15 -29 37 -3 19 21 48\r
26 58 10 3 -5 15 -10 27 -10 17 0 19 4 13 28 -11 44 -59 127 -75 129 -8 2 -21\r
-1 -28 -5z m29 -95 c-8 -8 -11 -3 -11 19 1 25 2 27 11 11 8 -14 8 -22 0 -30z`}),l.createElement("path",{d:`M11386 9141 c-4 -5 -1 -44 5 -86 l12 -77 44 5 c58 6 83 30 83 79 0\r
56 -34 88 -94 88 -25 0 -47 -4 -50 -9z m81 -29 c22 -14 27 -67 8 -85 -22 -23\r
-32 -15 -40 33 -9 53 2 71 32 52z`}),l.createElement("path",{d:`M11214 9113 c2 -10 8 -41 11 -70 7 -51 27 -94 40 -81 7 6 13 31 14\r
57 1 10 13 3 35 -18 22 -22 40 -31 51 -28 14 6 14 9 0 31 -12 17 -14 35 -9 60\r
10 54 -6 66 -83 66 -56 0 -64 -2 -59 -17z m96 -28 c0 -9 -7 -18 -16 -22 -18\r
-7 -39 11 -30 26 11 17 46 13 46 -4z`}),l.createElement("path",{d:`M11159 9113 c-1 -5 0 -33 1 -64 1 -44 -2 -58 -14 -62 -17 -7 -36 26\r
-36 61 0 37 -13 62 -31 62 -28 0 -33 -22 -19 -80 15 -62 32 -80 75 -80 52 0\r
68 23 60 84 -8 66 -14 86 -26 86 -5 0 -10 -3 -10 -7z`}),l.createElement("path",{d:`M10968 9100 c-59 -7 -68 -16 -35 -31 21 -10 27 -21 32 -58 12 -96 39\r
-101 43 -8 2 48 7 70 17 74 8 3 15 9 15 13 0 13 -23 16 -72 10z`}),l.createElement("path",{d:`M10811 9076 c-17 -20 -34 -147 -22 -159 6 -6 16 -1 27 12 19 22 49\r
28 59 11 9 -15 45 -12 45 4 0 7 -10 35 -21 62 -35 79 -62 101 -88 70z m30 -89\r
c-8 -8 -11 -3 -11 19 1 25 2 27 11 11 8 -14 8 -22 0 -30z`}),l.createElement("path",{d:`M10648 9058 c-38 -31 -29 -63 23 -81 46 -16 47 -32 4 -32 -42 0 -47\r
-15 -12 -33 38 -18 97 7 97 41 0 28 -17 45 -54 55 -31 8 -33 28 -3 24 12 -1\r
28 0 37 3 13 6 12 9 -4 21 -24 17 -67 18 -88 2z`}),l.createElement("path",{d:`M9968 8975 c-14 -30 -19 -31 -36 -5 -10 17 -62 30 -62 15 0 -2 13\r
-25 29 -51 17 -25 33 -59 36 -75 4 -19 13 -29 24 -29 15 0 19 11 24 58 4 31\r
10 69 13 85 8 35 -12 36 -28 2z`}),l.createElement("path",{d:`M9761 8943 c-5 -21 -12 -59 -15 -85 -5 -42 -3 -48 13 -48 10 0 21 7\r
25 15 7 18 39 19 66 3 34 -21 41 2 17 57 -36 82 -46 95 -72 95 -20 0 -26 -7\r
-34 -37z m49 -49 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6\r
-3 10 -13 10 -21z`}),l.createElement("path",{d:`M9568 8955 c-6 -7 16 -152 25 -161 15 -15 90 11 110 38 18 24 19 32\r
8 67 -6 23 -20 45 -31 51 -19 10 -103 14 -112 5z m90 -37 c18 -18 15 -75 -4\r
-82 -9 -4 -19 -4 -22 -2 -8 8 -20 85 -14 91 9 9 27 6 40 -7z`}),l.createElement("path",{d:`M9501 8903 c2 -72 12 -107 32 -111 14 -3 17 4 17 33 0 55 -20 125\r
-36 125 -10 0 -14 -13 -13 -47z`}),l.createElement("path",{d:`M9333 8924 c-6 -16 12 -142 21 -151 12 -13 36 9 36 32 0 32 10 32 40\r
0 13 -14 32 -25 42 -25 22 0 22 8 3 34 -10 13 -13 32 -9 56 8 51 -13 70 -77\r
70 -36 0 -51 -4 -56 -16z m86 -27 c13 -16 5 -27 -20 -27 -21 0 -33 15 -24 30\r
9 14 31 12 44 -3z`}),l.createElement("path",{d:`M9212 8923 c-21 -4 -23 -9 -18 -36 3 -18 8 -51 12 -74 10 -67 54 -86\r
54 -24 0 24 5 30 30 35 31 6 41 25 15 27 -8 1 -19 3 -25 4 -5 1 -14 3 -20 4\r
-22 3 -8 29 21 37 17 5 31 14 32 19 2 11 -63 16 -101 8z`}),l.createElement("path",{d:`M8546 8845 c-9 -9 -16 -23 -16 -31 0 -8 -4 -14 -10 -14 -5 0 -10 4\r
-10 10 0 16 -46 41 -63 34 -14 -5 -13 -10 8 -37 13 -18 33 -54 44 -80 23 -53\r
45 -58 48 -11 2 16 8 53 14 82 12 60 9 70 -15 47z`}),l.createElement("path",{d:`M8336 8822 c-5 -9 -26 -127 -26 -149 0 -18 29 -16 36 1 9 23 33 27\r
65 11 27 -14 30 -14 36 1 3 9 -7 44 -25 80 -26 53 -36 64 -56 64 -14 0 -27 -4\r
-30 -8z m44 -78 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3\r
10 -13 10 -21z`}),l.createElement("path",{d:`M8152 8813 c-19 -4 -22 -9 -17 -36 3 -18 9 -54 13 -82 7 -50 7 -50\r
42 -47 66 7 85 22 88 73 5 73 -44 110 -126 92z m82 -49 c11 -28 6 -61 -9 -74\r
-21 -17 -31 -5 -39 48 -6 39 -5 42 18 42 13 0 27 -7 30 -16z`}),l.createElement("path",{d:`M8006 8784 c-32 -32 -18 -63 38 -81 17 -5 32 -15 34 -22 3 -10 -5\r
-12 -37 -6 -33 5 -41 4 -41 -9 0 -20 15 -28 56 -28 36 0 74 25 74 48 0 20 -30\r
44 -61 51 -16 3 -29 12 -29 20 0 11 8 12 35 7 36 -6 44 3 23 24 -17 17 -74 15\r
-92 -4z`}),l.createElement("path",{d:`M7843 8783 c-13 -2 -23 -7 -23 -11 0 -31 23 -139 32 -149 14 -17 28\r
-7 28 21 0 37 12 38 47 4 24 -23 36 -29 44 -21 8 8 8 17 -1 33 -7 13 -9 36 -6\r
56 12 59 -33 84 -121 67z m77 -47 c0 -16 -27 -29 -41 -20 -19 11 -9 34 16 34\r
15 0 25 -6 25 -14z`}),l.createElement("path",{d:`M7765 8771 c-3 -6 -3 -36 0 -66 6 -46 5 -56 -9 -61 -23 -9 -27 -3\r
-40 62 -12 59 -21 70 -45 55 -12 -8 -13 -21 -5 -67 11 -70 43 -100 93 -89 43\r
9 51 29 39 100 -9 62 -21 85 -33 66z`}),l.createElement("path",{d:`M7585 8748 c-2 -7 -3 -22 -2 -33 1 -14 -5 -21 -19 -23 -17 -2 -24 5\r
-33 28 -17 49 -37 32 -33 -28 5 -70 16 -106 35 -110 12 -2 16 6 19 35 4 51 33\r
58 46 11 5 -20 16 -34 27 -37 17 -3 18 3 11 70 -6 69 -18 99 -38 99 -5 0 -11\r
-6 -13 -12z`}),l.createElement("path",{d:`M7385 8733 c-35 -8 -40 -22 -12 -32 20 -8 27 -19 32 -48 13 -78 15\r
-84 33 -81 14 3 16 13 14 69 -3 53 -1 67 12 72 48 19 -17 35 -79 20z`}),l.createElement("path",{d:`M7006 8684 c-9 -8 -16 -23 -16 -31 0 -12 -7 -9 -25 11 -20 21 -65 37\r
-65 22 0 -2 16 -30 35 -62 19 -32 35 -66 35 -76 0 -11 7 -18 20 -18 16 0 20 7\r
20 33 0 17 7 53 15 79 15 50 7 68 -19 42z`}),l.createElement("path",{d:`M6810 8661 c-6 -12 -13 -50 -17 -86 -5 -57 -4 -65 11 -65 9 0 19 7\r
22 15 7 17 49 20 59 5 9 -14 45 -12 45 3 0 6 -15 41 -33 77 -35 71 -66 89 -87\r
51z m44 -83 c-9 -14 -24 2 -24 25 1 21 1 21 15 3 8 -10 12 -23 9 -28z`}),l.createElement("path",{d:`M6624 8608 c16 -130 15 -128 89 -107 45 12 62 42 53 93 -9 46 -39 66\r
-100 66 l-49 0 7 -52z m84 10 c18 -18 15 -77 -4 -85 -21 -8 -34 14 -34 60 0\r
38 15 48 38 25z`}),l.createElement("path",{d:`M6512 8643 c-7 -3 -18 -16 -23 -30 -12 -33 2 -50 52 -63 50 -14 53\r
-35 4 -27 -22 4 -46 0 -63 -9 -39 -20 -72 -18 -72 5 0 13 9 20 30 25 39 7 38\r
24 -2 28 -44 4 -46 24 -3 32 23 5 35 13 35 23 0 13 -8 15 -46 9 -26 -3 -53 -6\r
-62 -6 -15 0 -14 -36 4 -138 l6 -32 52 6 c28 4 56 10 62 15 5 5 27 6 47 2 76\r
-12 121 59 57 92 -16 8 -36 15 -45 15 -8 0 -15 4 -15 8 0 16 12 21 34 12 35\r
-13 53 4 25 24 -23 16 -52 19 -77 9z`}),l.createElement("path",{d:`M10753 8617 l-103 -10 0 -83 c0 -45 3 -89 6 -98 9 -22 60 -20 90 3\r
33 26 77 12 94 -29 15 -35 6 -66 -25 -86 -21 -14 -26 -14 -54 1 -17 8 -31 20\r
-31 25 0 12 -40 13 -59 1 -36 -23 55 -91 121 -91 54 0 111 39 127 86 17 50 10\r
84 -28 126 -25 28 -36 33 -78 33 -26 0 -58 -4 -69 -8 -17 -6 -23 -3 -27 12 -8\r
32 8 43 79 55 68 11 69 12 72 44 2 17 0 31 -5 30 -4 -1 -54 -6 -110 -11z`}),l.createElement("path",{d:`M6290 8584 l0 -38 -33 32 c-49 47 -67 43 -66 -15 2 -73 12 -107 33\r
-111 16 -3 18 2 14 42 l-3 46 33 -40 c46 -55 62 -53 61 8 -2 64 -11 105 -26\r
110 -9 2 -13 -8 -13 -34z`}),l.createElement("path",{d:`M6018 8595 c-3 -3 11 -113 21 -162 2 -8 57 -1 86 11 22 10 37 24 41\r
40 8 33 -13 93 -36 106 -19 10 -103 14 -112 5z m90 -37 c18 -18 15 -77 -4 -85\r
-21 -8 -34 14 -34 60 0 38 15 48 38 25z`}),l.createElement("path",{d:`M5892 8583 c-21 -4 -23 -9 -18 -36 3 -18 8 -55 12 -84 l6 -52 47 5\r
c59 7 71 11 71 23 0 5 -17 11 -37 13 -50 4 -58 33 -13 42 40 8 35 30 -8 34\r
-43 4 -41 18 4 29 20 4 37 13 37 18 2 11 -63 16 -101 8z`}),l.createElement("path",{d:`M5826 8568 c-2 -7 -7 -26 -11 -43 l-7 -30 -19 38 c-27 52 -49 42 -64\r
-28 l-6 -29 -19 42 c-20 44 -50 57 -50 22 0 -20 42 -112 63 -138 15 -19 37 5\r
37 43 0 48 11 50 31 4 22 -47 48 -50 60 -7 14 52 15 131 2 135 -7 3 -15 -1\r
-17 -9z`}),l.createElement("path",{d:`M5181 8484 l-12 -27 -20 22 c-11 11 -31 21 -45 21 l-25 0 30 -43 c16\r
-24 33 -59 38 -78 16 -62 38 -48 53 33 7 40 15 79 17 86 10 24 -24 11 -36 -14z`}),l.createElement("path",{d:`M4981 8468 c-5 -13 -12 -51 -16 -85 -8 -69 4 -82 38 -43 16 19 19 19\r
47 5 60 -31 64 -13 19 81 -25 53 -34 64 -55 64 -16 0 -27 -8 -33 -22z m49 -64\r
c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z`}),l.createElement("path",{d:`M4784 8438 c3 -18 8 -57 12 -87 l7 -53 41 6 c62 10 86 30 86 72 0 36\r
-15 73 -34 86 -6 4 -35 8 -65 8 l-53 0 6 -32z m96 -17 c14 -28 12 -57 -5 -71\r
-22 -18 -35 -2 -42 49 -5 37 -3 41 15 41 12 0 26 -9 32 -19z`}),l.createElement("path",{d:`M9149 8463 c-41 -5 -38 -1 -100 -152 -22 -52 -39 -107 -39 -123 l0\r
-29 58 6 c31 3 67 8 79 10 18 4 22 -1 28 -35 7 -39 8 -40 46 -40 l39 0 0 41\r
c0 32 4 42 20 46 14 4 20 14 20 34 0 23 -5 28 -27 31 -27 3 -28 5 -43 108 -16\r
113 -14 110 -81 103z m4 -170 l6 -51 -40 -4 c-22 -2 -42 -1 -44 2 -1 3 11 36\r
28 74 34 75 39 73 50 -21z`}),l.createElement("path",{d:`M4662 8444 c-16 -11 -22 -24 -20 -42 2 -21 11 -29 42 -37 64 -18 60\r
-39 -5 -30 -53 7 -106 23 -81 24 26 2 10 20 -23 27 -34 6 -49 24 -21 24 8 0\r
27 5 42 10 46 18 14 34 -51 25 l-57 -7 7 -44 c8 -56 -17 -62 -31 -7 -14 55\r
-34 55 -34 -1 0 -39 -3 -46 -19 -46 -14 0 -21 10 -26 33 -9 41 -23 57 -41 50\r
-11 -4 -15 -18 -13 -51 3 -37 0 -46 -16 -52 -11 -4 -23 -2 -27 4 -13 19 -9 56\r
7 62 8 4 15 12 15 20 0 10 -11 12 -47 8 -27 -3 -54 -7 -60 -10 -18 -5 -16 -24\r
1 -24 18 0 26 -13 36 -55 7 -31 5 -35 -23 -46 -154 -64 -355 -270 -431 -443\r
-65 -146 -80 -319 -37 -429 42 -108 120 -185 228 -228 46 -18 79 -23 161 -23\r
64 -1 105 3 110 10 4 6 29 16 57 23 71 18 184 72 257 124 107 77 234 221 291\r
332 24 48 57 156 56 184 -1 18 -5 10 -14 -24 -45 -177 -146 -322 -317 -450\r
-290 -218 -641 -201 -756 37 -25 51 -53 170 -42 178 4 3 13 37 20 75 35 191\r
130 344 297 476 79 63 219 130 292 138 31 4 61 10 68 14 7 4 48 3 93 -2 64 -8\r
98 -20 171 -57 95 -50 121 -79 149 -166 16 -51 34 -49 27 2 -8 58 -41 121 -92\r
171 -24 24 -41 47 -38 52 3 5 0 13 -7 17 -9 6 -8 14 5 33 16 25 16 27 -9 52\r
-14 14 -34 25 -46 25 -11 0 -20 7 -20 15 0 17 5 18 29 6 10 -6 23 -6 32 0 12\r
8 11 12 -5 24 -26 19 -56 19 -84 -1z`}),l.createElement("path",{d:`M3531 8313 l-13 -28 -15 23 c-10 14 -26 22 -45 22 l-29 0 29 -42 c16\r
-24 35 -60 42 -81 18 -58 43 -47 51 23 3 30 9 67 13 83 6 20 5 27 -6 27 -8 0\r
-21 -12 -27 -27z`}),l.createElement("path",{d:`M3331 8298 c-5 -13 -12 -51 -16 -85 -6 -55 -5 -63 9 -63 9 0 19 7 22\r
15 7 17 59 21 69 5 10 -16 35 -12 35 5 0 9 -13 45 -29 80 -26 56 -33 65 -56\r
65 -17 0 -28 -7 -34 -22z m49 -64 c0 -14 -12 -19 -23 -8 -9 9 4 35 14 28 5 -3\r
9 -12 9 -20z`}),l.createElement("path",{d:`M3152 8303 c-21 -4 -23 -9 -18 -36 3 -18 8 -56 12 -84 l7 -53 41 6\r
c62 10 86 28 86 69 0 57 -15 83 -57 94 -21 6 -40 10 -43 10 -3 -1 -16 -4 -28\r
-6z m82 -71 c7 -26 6 -36 -7 -50 -22 -21 -34 -8 -43 46 -7 42 -6 44 17 40 17\r
-2 26 -12 33 -36z`}),l.createElement("path",{d:`M3074 8287 c-3 -10 -4 -29 -2 -42 3 -14 4 -25 3 -25 -2 0 -19 16 -38\r
35 -60 60 -81 29 -56 -85 8 -39 15 -50 27 -48 14 3 16 13 14 48 l-4 45 31 -42\r
c19 -26 39 -43 51 -43 23 0 23 3 9 90 -11 69 -24 94 -35 67z`}),l.createElement("path",{d:`M4810 8265 c13 -14 26 -25 28 -25 3 0 -5 11 -18 25 -13 14 -26 25\r
-28 25 -3 0 5 -11 18 -25z`}),l.createElement("path",{d:`M7433 8271 c-18 -11 -39 -34 -47 -50 -15 -28 -15 -30 4 -36 21 -7 60\r
10 60 25 0 15 39 32 60 25 27 -9 43 -41 32 -62 -5 -9 -25 -21 -43 -27 -24 -8\r
-34 -17 -34 -31 0 -16 9 -21 44 -26 64 -8 94 -64 55 -103 -26 -27 -60 -19 -92\r
20 -24 29 -33 34 -56 28 -14 -3 -28 -10 -31 -14 -7 -12 43 -68 76 -85 69 -36\r
167 -6 195 60 17 42 8 72 -36 108 l-31 27 22 30 c18 24 21 35 13 57 -22 63\r
-129 93 -191 54z`}),l.createElement("path",{d:`M2830 8243 c-38 -48 0 -126 63 -131 29 -3 39 2 53 23 20 30 14 87\r
-12 116 -26 29 -78 25 -104 -8z m70 -23 c14 -26 9 -72 -7 -78 -17 -5 -36 46\r
-28 75 7 28 21 29 35 3z`}),l.createElement("path",{d:`M2723 8248 c-6 -7 -15 -26 -20 -43 l-10 -30 -16 38 c-14 31 -21 37\r
-47 37 -17 0 -33 -6 -35 -12 -2 -7 1 -44 8 -83 9 -53 16 -71 30 -73 14 -3 17\r
4 17 40 l1 43 20 -37 c29 -56 59 -47 59 17 0 13 5 27 10 30 6 4 10 -6 10 -22\r
0 -16 7 -38 15 -49 12 -16 16 -17 24 -4 5 8 8 26 6 40 -2 14 -7 46 -10 73 -5\r
41 -9 47 -29 47 -13 0 -28 -6 -33 -12z`}),l.createElement("path",{d:`M1871 8143 l-13 -28 -15 23 c-10 14 -26 22 -45 22 l-29 0 29 -42 c16\r
-24 35 -60 42 -81 17 -54 44 -47 48 13 1 25 7 58 12 74 13 38 13 46 -3 46 -8\r
0 -20 -12 -26 -27z`}),l.createElement("path",{d:`M1671 8128 c-5 -13 -12 -51 -16 -85 -6 -55 -5 -63 9 -63 9 0 19 6 22\r
14 9 23 35 28 60 11 53 -34 57 -12 15 80 -26 56 -33 65 -56 65 -17 0 -28 -7\r
-34 -22z m49 -64 c0 -14 -12 -19 -23 -8 -9 9 4 35 14 28 5 -3 9 -12 9 -20z`}),l.createElement("path",{d:`M1414 8117 c-3 -10 -4 -29 -2 -42 3 -14 4 -25 3 -25 -2 0 -19 16 -38\r
35 -24 24 -40 33 -52 29 -15 -6 -17 -16 -11 -70 8 -80 14 -96 35 -92 13 3 15\r
13 13 48 l-4 45 31 -42 c30 -42 53 -53 66 -34 7 13 -14 143 -25 155 -6 6 -12\r
3 -16 -7z`}),l.createElement("path",{d:`M1474 8098 c3 -18 8 -57 12 -86 l7 -53 41 7 c76 12 95 37 82 109 -8\r
43 -30 55 -96 55 l-52 0 6 -32z m97 -25 c11 -29 -1 -73 -20 -73 -14 0 -19 12\r
-27 58 -6 38 -5 42 15 42 14 0 25 -9 32 -27z`}),l.createElement("path",{d:`M5808 8105 c-30 -17 -58 -62 -58 -95 0 -15 6 -20 29 -20 23 0 34 8\r
50 35 23 39 58 47 85 19 32 -32 12 -78 -80 -175 -35 -38 -64 -75 -64 -83 0\r
-41 5 -42 128 -29 64 7 123 15 130 18 8 3 12 16 10 32 -3 26 -3 26 -78 24\r
l-75 -2 38 31 c48 41 87 108 87 151 0 23 -9 46 -28 69 -26 30 -35 34 -88 37\r
-40 2 -68 -2 -86 -12z`}),l.createElement("path",{d:`M1248 8043 c-2 -52 -7 -68 -19 -71 -11 -2 -19 13 -30 60 -11 52 -18\r
63 -34 63 -18 0 -20 -6 -17 -49 3 -74 20 -100 64 -104 48 -4 78 12 78 43 0 39\r
-21 125 -30 125 -5 0 -10 -30 -12 -67z`}),l.createElement("path",{d:`M1015 8065 c-14 -13 -25 -29 -25 -34 0 -14 38 -38 73 -46 43 -11 33\r
-28 -13 -22 -45 6 -63 -9 -35 -30 42 -30 115 -3 115 41 0 17 -10 28 -34 40\r
-19 9 -39 16 -45 16 -6 0 -11 5 -11 11 0 7 12 9 34 5 42 -8 54 7 24 28 -32 22\r
-55 20 -83 -9z`}),l.createElement("path",{d:`M4192 7913 c-60 -47 -73 -70 -54 -100 6 -9 18 -4 45 18 l36 30 5 -23\r
c12 -52 26 -143 26 -165 0 -20 -5 -23 -39 -23 -45 0 -63 -16 -54 -49 5 -21 9\r
-22 58 -16 28 3 89 10 134 14 45 5 84 11 88 14 3 3 2 18 -1 33 -6 24 -10 26\r
-51 22 -51 -4 -44 -21 -71 170 -21 146 -25 148 -122 75z`}),l.createElement("path",{d:`M11212 7263 c-57 -28 -83 -105 -39 -117 16 -4 27 0 39 17 50 66 76\r
74 104 32 23 -35 7 -68 -77 -162 -64 -69 -85 -112 -61 -126 9 -6 239 20 252\r
28 6 4 10 18 10 32 l0 26 -75 -5 c-41 -3 -75 -3 -75 -1 0 2 14 16 32 31 43 37\r
88 110 88 145 0 91 -107 145 -198 100z`}),l.createElement("path",{d:`M10964 7247 c-11 -7 -42 -29 -67 -51 -36 -29 -47 -45 -47 -67 0 -35\r
5 -36 52 -4 l37 25 5 -32 c3 -18 11 -62 17 -97 5 -34 8 -66 4 -69 -3 -3 -24\r
-8 -48 -11 -35 -5 -43 -10 -45 -30 -2 -13 0 -27 5 -31 6 -6 272 15 279 23 1 1\r
0 14 -3 30 -5 25 -9 27 -52 27 l-47 0 -18 128 c-26 187 -25 186 -72 159z`}),l.createElement("path",{d:`M9610 7085 c-24 -20 -51 -40 -61 -46 -19 -9 -27 -58 -12 -72 3 -4 22\r
5 40 19 19 15 38 22 42 18 7 -8 31 -150 31 -181 0 -7 -11 -13 -24 -13 -41 0\r
-76 -18 -76 -39 0 -11 5 -23 10 -26 6 -3 71 -1 145 6 141 14 148 17 124 60 -9\r
17 -17 19 -50 14 -21 -4 -39 -5 -40 -3 0 1 -10 68 -22 148 -26 169 -33 177\r
-107 115z`}),l.createElement("path",{d:`M9300 7055 c-24 -20 -51 -40 -61 -46 -13 -7 -19 -21 -19 -44 0 -19 3\r
-35 7 -35 3 0 21 12 40 26 19 14 37 24 39 21 4 -4 34 -169 34 -188 0 -4 -20\r
-10 -45 -13 -50 -8 -59 -17 -51 -50 5 -21 9 -22 58 -16 29 4 92 11 141 15 72\r
6 87 10 87 23 0 33 -19 47 -62 47 l-43 0 -20 145 c-24 169 -31 177 -105 115z`}),l.createElement("path",{d:`M7973 6939 c-100 -30 -101 -269 -3 -339 38 -27 109 -27 144 1 38 30\r
59 110 46 177 -23 124 -98 188 -187 161z m79 -71 c17 -32 37 -166 29 -196 -14\r
-50 -63 -55 -80 -9 -5 13 -15 58 -22 100 -10 58 -10 82 -1 101 15 34 56 35 74\r
4z`}),l.createElement("path",{d:`M7653 6873 c-49 -37 -63 -54 -63 -74 0 -39 10 -41 51 -8 l38 30 6\r
-38 c4 -21 11 -60 16 -86 15 -77 13 -87 -18 -87 -56 0 -74 -11 -71 -39 3 -30\r
9 -30 181 -16 104 9 118 16 97 55 -9 17 -19 21 -53 18 l-41 -3 -20 145 c-25\r
173 -28 176 -123 103z`}),l.createElement("path",{d:`M6015 6735 c-49 -25 -65 -52 -65 -107 0 -41 5 -54 29 -78 36 -36 75\r
-47 115 -31 48 19 51 18 54 -12 5 -38 -22 -77 -53 -77 -13 0 -27 5 -30 10 -10\r
16 -75 12 -75 -4 0 -27 50 -56 97 -56 88 0 133 51 133 152 0 156 -100 256\r
-205 203z m94 -61 c28 -35 27 -79 -1 -98 -22 -16 -53 -8 -70 18 -13 20 -8 69\r
9 88 22 25 38 23 62 -8z`}),l.createElement("path",{d:`M4372 6564 c-65 -33 -77 -107 -27 -154 l25 -23 -20 -32 c-59 -95 23\r
-166 159 -139 17 4 45 19 61 34 24 23 30 36 30 70 0 34 -6 47 -31 71 -30 28\r
-31 30 -15 54 23 35 20 60 -12 96 -24 27 -37 33 -83 36 -37 2 -64 -2 -87 -13z\r
m114 -59 c14 -21 15 -31 5 -51 -10 -22 -16 -25 -39 -19 -39 10 -52 24 -52 55\r
0 46 59 56 86 15z m12 -161 c44 -30 19 -84 -39 -84 -46 0 -77 58 -47 88 17 17\r
59 15 86 -4z`}),l.createElement("path",{d:`M2745 6401 c-48 -6 -50 -7 -53 -39 l-3 -32 58 5 c32 3 70 8 86 10 31\r
5 33 -1 12 -32 -21 -30 -55 -166 -55 -220 l0 -44 47 3 46 3 -2 70 c-1 47 5 95\r
20 145 11 41 23 90 26 108 l5 32 -68 -2 c-38 0 -91 -4 -119 -7z`}),l.createElement("path",{d:`M1140 6238 c-45 -24 -70 -74 -70 -143 0 -127 58 -215 143 -215 79 0\r
127 48 127 127 0 51 -53 103 -107 103 -21 0 -48 -7 -60 -15 -21 -15 -23 -14\r
-28 7 -3 13 -2 37 3 53 11 39 62 48 85 15 18 -26 67 -19 67 10 0 45 -110 84\r
-160 58z m104 -200 c19 -27 21 -79 4 -96 -49 -49 -119 48 -71 100 22 24 49 23\r
67 -4z`}),l.createElement("path",{d:`M11433 5889 c-49 -14 -83 -62 -83 -116 0 -38 5 -50 34 -79 27 -27 42\r
-34 73 -34 21 0 48 7 59 15 12 8 24 11 28 8 11 -12 6 -58 -10 -81 -16 -23 -58\r
-30 -69 -12 -8 14 -62 13 -71 -1 -3 -6 5 -23 20 -38 50 -49 155 -28 188 39 22\r
44 23 131 2 193 -16 46 -72 107 -99 107 -7 0 -19 2 -27 4 -7 2 -27 0 -45 -5z\r
m81 -71 c21 -29 20 -67 -1 -90 -21 -23 -38 -23 -63 2 -22 22 -27 79 -8 98 19\r
19 55 14 72 -10z`}),l.createElement("path",{d:`M11129 5835 c-23 -20 -50 -40 -60 -46 -13 -7 -19 -21 -19 -44 0 -19\r
3 -35 7 -35 3 0 21 12 40 26 19 14 37 23 40 20 5 -5 32 -156 33 -183 0 -7 -12\r
-13 -27 -13 -55 0 -73 -10 -73 -41 0 -20 5 -29 16 -29 48 0 260 23 267 30 4 4\r
3 19 -3 34 -9 25 -14 27 -52 24 l-41 -3 -19 125 c-23 165 -25 170 -47 170 -11\r
0 -38 -16 -62 -35z`}),l.createElement("path",{d:`M9790 5719 c-84 -35 -102 -119 -37 -170 l20 -17 -21 -27 c-31 -39\r
-28 -80 7 -116 26 -25 37 -29 86 -29 65 0 116 19 139 51 29 42 17 104 -26 139\r
-19 15 -19 16 -2 47 22 38 12 76 -27 106 -31 23 -103 31 -139 16z m91 -60 c42\r
-42 3 -97 -49 -69 -33 19 -41 58 -16 77 25 18 41 16 65 -8z m4 -161 c30 -13\r
43 -52 25 -73 -16 -20 -74 -19 -94 1 -9 8 -16 24 -16 34 0 22 26 50 45 50 8 0\r
26 -5 40 -12z`}),l.createElement("path",{d:`M9480 5654 c-61 -49 -65 -54 -56 -90 l7 -25 39 31 38 30 11 -52 c5\r
-29 13 -77 16 -105 l7 -53 -35 0 c-47 0 -67 -9 -67 -29 1 -40 10 -41 149 -27\r
73 8 135 16 138 20 3 3 2 17 -1 32 -6 24 -10 26 -51 22 -52 -4 -47 -16 -72\r
163 -17 127 -18 129 -43 128 -14 0 -49 -20 -80 -45z`}),l.createElement("path",{d:`M8200 5554 c-8 -1 -36 -6 -62 -9 -45 -6 -48 -8 -48 -37 l0 -30 86 7\r
85 7 -20 -41 c-27 -52 -51 -153 -51 -215 0 -40 3 -47 16 -42 9 3 30 6 47 6\r
l32 0 1 98 c1 72 7 112 23 156 11 33 21 70 21 83 0 22 -4 23 -57 22 -32 -1\r
-65 -3 -73 -5z`}),l.createElement("path",{d:`M7904 5527 c-55 -32 -114 -91 -114 -113 0 -35 16 -38 54 -9 31 24 35\r
25 40 8 11 -38 29 -174 23 -179 -3 -3 -24 -8 -47 -11 -44 -6 -58 -23 -44 -52\r
8 -16 17 -16 144 -3 74 7 136 15 139 17 2 2 1 16 -3 30 -6 22 -12 25 -51 25\r
-25 0 -45 1 -46 3 0 1 -10 67 -22 147 -23 153 -29 163 -73 137z`}),l.createElement("path",{d:`M6541 5382 c-49 -24 -71 -73 -71 -152 0 -93 34 -161 96 -191 40 -19\r
51 -20 84 -10 21 6 51 26 65 43 24 28 27 39 22 82 -3 40 -11 55 -36 78 -36 32\r
-93 38 -128 13 -21 -15 -23 -14 -28 7 -16 69 34 111 80 68 18 -16 31 -21 49\r
-16 15 3 26 12 26 19 0 27 -74 77 -113 77 -7 0 -27 -8 -46 -18z m99 -192 c22\r
-22 27 -79 8 -98 -49 -49 -119 48 -71 100 21 23 38 23 63 -2z`}),l.createElement("path",{d:`M6221 5319 c-59 -49 -70 -69 -53 -96 6 -10 17 -7 42 12 19 14 37 22\r
41 18 6 -8 29 -147 29 -178 0 -10 -10 -15 -31 -15 -46 0 -71 -17 -63 -43 3\r
-12 8 -23 9 -25 2 -2 64 2 139 9 130 11 136 13 136 34 0 33 -23 47 -63 40 -41\r
-8 -38 -16 -63 168 -17 119 -19 127 -40 127 -12 0 -50 -23 -83 -51z`}),l.createElement("path",{d:`M4927 5220 c-43 -4 -81 -10 -84 -13 -3 -3 -2 -47 2 -97 7 -85 9 -91\r
32 -96 17 -5 34 0 53 15 36 26 64 27 90 1 40 -40 16 -120 -35 -120 -11 0 -31\r
11 -46 26 -20 19 -32 24 -53 18 -40 -10 -34 -32 18 -72 35 -27 112 -30 156 -7\r
56 29 80 118 46 170 -35 53 -112 74 -166 45 -16 -9 -21 -8 -26 4 -13 35 0 51\r
51 59 88 14 100 20 103 50 4 31 4 31 -141 17z`}),l.createElement("path",{d:`M4615 5172 c-17 -15 -43 -37 -59 -48 -27 -19 -29 -25 -20 -53 l9 -32\r
38 31 c42 35 39 38 56 -61 19 -113 17 -119 -28 -119 -21 0 -43 -6 -49 -13 -13\r
-16 -4 -57 12 -57 37 1 258 29 263 34 3 3 2 17 -1 32 -7 25 -10 26 -51 21 -43\r
-4 -45 -4 -50 27 -9 59 -35 244 -35 255 0 21 -55 10 -85 -17z`}),l.createElement("path",{d:`M3319 5063 c-10 -2 -19 -12 -22 -21 -3 -9 -24 -59 -46 -110 -23 -52\r
-41 -108 -41 -128 l0 -36 80 7 80 7 0 -25 c0 -42 10 -57 39 -57 42 0 55 14 48\r
49 -6 27 -3 33 18 43 38 17 30 68 -11 68 -18 0 -24 7 -28 33 -3 17 -10 65 -17\r
105 l-11 72 -36 -1 c-21 -1 -44 -3 -53 -6z m25 -129 c12 -91 11 -94 -34 -94\r
-22 0 -40 3 -40 8 0 14 54 132 61 132 3 0 9 -21 13 -46z`}),l.createElement("path",{d:`M2966 4988 c-59 -46 -66 -55 -61 -77 9 -36 10 -36 49 -6 42 32 40 34\r
59 -87 15 -96 14 -98 -55 -98 -25 0 -28 -4 -28 -35 0 -32 2 -34 28 -30 15 2\r
78 9 140 16 l113 12 -3 26 c-3 23 -8 26 -50 29 l-46 3 -10 62 c-6 34 -16 101\r
-23 150 -10 69 -16 87 -29 87 -9 0 -46 -23 -84 -52z`}),l.createElement("path",{d:`M1642 4883 c-36 -17 -72 -57 -72 -79 0 -24 51 -16 76 11 40 43 100\r
26 92 -27 -2 -16 -13 -26 -38 -34 -23 -8 -36 -19 -38 -33 -3 -18 2 -21 30 -21\r
18 0 44 -7 56 -16 19 -13 22 -24 20 -57 -3 -40 -4 -42 -40 -45 -31 -3 -40 2\r
-59 27 -23 31 -51 39 -78 22 -32 -21 52 -99 117 -108 72 -10 152 52 152 116 0\r
12 -16 39 -36 61 -34 37 -35 40 -20 62 37 52 7 106 -69 127 -51 14 -54 14 -93\r
-6z`}),l.createElement("path",{d:`M1384 4857 c-11 -7 -42 -30 -68 -51 -40 -34 -46 -43 -41 -65 9 -36\r
11 -37 45 -7 17 14 35 26 39 26 8 0 31 -135 31 -177 0 -17 -6 -23 -22 -23 -50\r
0 -68 -11 -68 -41 0 -17 5 -29 13 -29 6 0 70 5 140 11 l128 12 -3 31 c-3 30\r
-4 31 -50 29 -27 -2 -48 0 -48 5 0 4 -9 68 -20 142 -11 74 -20 138 -20 143 0\r
11 -32 8 -56 -6z`}),l.createElement("path",{d:`M11607 4481 c-48 -42 -63 -110 -43 -193 16 -69 37 -103 79 -128 118\r
-72 247 71 157 174 -38 43 -76 52 -125 32 -21 -9 -39 -16 -41 -16 -11 0 -2 69\r
12 88 20 29 36 28 73 -4 25 -21 34 -23 51 -14 45 24 -7 79 -82 87 -40 5 -49 2\r
-81 -26z m127 -183 c23 -32 21 -85 -3 -98 -28 -14 -38 -13 -61 10 -22 22 -27\r
79 -8 98 19 19 55 14 72 -10z`}),l.createElement("path",{d:`M11314 4466 c-59 -27 -97 -105 -58 -120 31 -12 44 -6 58 28 16 38 45\r
52 75 37 48 -26 34 -77 -42 -159 -83 -88 -96 -112 -79 -140 7 -10 28 -11 103\r
-2 164 18 159 17 159 52 l0 31 -77 -7 -77 -7 52 55 c83 88 94 143 39 202 -26\r
29 -42 37 -77 40 -26 3 -58 -2 -76 -10z`}),l.createElement("path",{d:`M10050 4338 c-52 -5 -101 -10 -107 -13 -14 -5 -17 -120 -4 -165 9\r
-33 51 -38 89 -10 23 17 33 19 54 11 49 -19 64 -85 28 -121 -26 -26 -42 -25\r
-79 6 -23 19 -38 24 -56 20 -33 -8 -31 -29 5 -60 87 -73 230 -18 230 88 0 100\r
-78 146 -187 111 -20 -7 -23 -4 -23 23 0 32 -1 32 95 48 22 4 46 11 53 17 13\r
10 16 44 5 49 -5 2 -51 0 -103 -4z`}),l.createElement("path",{d:`M9672 4293 c-35 -17 -62 -58 -62 -93 0 -16 6 -20 30 -20 23 0 33 7\r
45 30 19 38 59 49 85 25 11 -10 20 -27 20 -37 0 -24 -47 -92 -95 -138 -44 -42\r
-68 -85 -60 -109 5 -16 13 -16 118 -5 61 7 120 13 130 13 12 1 17 9 17 32 l0\r
31 -75 -4 c-41 -2 -75 -2 -75 0 0 2 14 15 31 30 82 69 110 150 73 208 -35 53\r
-117 69 -182 37z`}),l.createElement("path",{d:`M8432 4183 c-37 -5 -52 -28 -108 -175 -46 -118 -42 -130 39 -121 34\r
3 69 7 77 7 10 1 17 -11 20 -34 5 -33 7 -35 45 -35 l40 0 -2 38 c-2 32 1 39\r
22 47 14 5 25 14 25 19 0 24 -14 41 -35 41 -24 0 -25 4 -51 183 -4 27 -10 37\r
-22 35 -10 0 -32 -3 -50 -5z m3 -160 l7 -63 -42 0 c-47 0 -47 -5 -7 87 12 28\r
25 49 28 45 4 -4 10 -35 14 -69z`}),l.createElement("path",{d:`M8083 4140 c-47 -11 -78 -34 -93 -69 -16 -39 -7 -61 24 -61 17 0 30\r
10 45 35 16 28 27 35 51 35 23 0 33 -6 42 -25 16 -36 -5 -77 -79 -156 -50 -52\r
-63 -73 -63 -98 0 -36 4 -37 160 -18 l95 12 3 32 3 33 -78 -6 -78 -6 42 39\r
c85 78 106 154 58 212 -34 40 -79 54 -132 41z`}),l.createElement("path",{d:`M6725 3995 c-59 -30 -83 -78 -45 -90 15 -5 31 2 56 24 40 36 54 38\r
77 13 32 -35 18 -64 -36 -77 -20 -5 -27 -13 -27 -31 0 -21 5 -24 39 -24 49 0\r
71 -21 71 -66 0 -27 -5 -37 -25 -46 -32 -14 -71 2 -87 37 -12 28 -35 32 -63\r
11 -17 -12 -17 -15 -3 -35 62 -88 184 -96 247 -15 32 41 27 81 -14 120 l-35\r
33 16 34 c25 51 13 84 -39 107 -51 24 -92 25 -132 5z`}),l.createElement("path",{d:`M6430 3969 c-79 -32 -108 -128 -38 -129 10 0 24 13 33 30 22 43 50\r
55 81 35 14 -9 24 -25 24 -39 0 -29 -47 -99 -104 -156 -36 -35 -46 -51 -46\r
-77 0 -18 3 -33 8 -33 12 0 185 20 218 25 20 4 34 13 37 24 9 37 -6 44 -84 37\r
l-74 -7 51 53 c63 64 74 85 74 136 0 81 -95 135 -180 101z`}),l.createElement("path",{d:`M5074 3808 c-23 -22 -35 -43 -37 -63 -2 -27 1 -30 29 -33 27 -3 33 1\r
44 28 20 49 89 53 98 6 7 -35 -10 -66 -78 -141 -53 -58 -70 -84 -70 -106 0\r
-34 6 -35 159 -18 102 12 118 21 106 58 -4 14 -17 16 -77 13 l-73 -5 48 52\r
c85 91 94 155 30 211 -29 26 -42 30 -88 30 -48 0 -60 -4 -91 -32z`}),l.createElement("path",{d:`M4795 3801 c-33 -15 -66 -56 -68 -87 -2 -26 2 -29 29 -32 26 -3 33 1\r
44 27 30 73 119 37 95 -39 -4 -12 -38 -56 -76 -98 -56 -62 -69 -83 -69 -110 0\r
-28 3 -32 23 -28 12 3 69 10 127 16 58 7 106 13 107 14 2 1 4 13 5 27 3 24 2\r
24 -74 24 l-77 0 49 50 c86 87 97 157 35 215 -27 25 -113 37 -150 21z`}),l.createElement("path",{d:`M3473 3631 c-53 -44 -59 -53 -55 -80 l4 -30 43 29 43 29 12 -82 c19\r
-131 21 -121 -30 -127 -42 -5 -45 -7 -48 -37 -4 -39 -17 -37 153 -18 72 8 131\r
15 132 15 1 0 -2 12 -6 28 -7 24 -12 27 -52 28 l-44 0 -18 115 c-10 63 -20\r
129 -23 147 -7 47 -40 42 -111 -17z`}),l.createElement("path",{d:`M3195 3640 c-49 -11 -71 -27 -89 -65 -22 -45 -15 -65 22 -65 22 0 31\r
7 43 33 24 56 99 47 99 -12 0 -33 -18 -59 -92 -138 -45 -47 -58 -68 -58 -92 0\r
-36 -8 -35 146 -20 98 10 113 14 118 31 10 41 -1 47 -82 41 l-76 -6 42 37 c57\r
52 85 100 85 147 0 74 -78 128 -158 109z`}),l.createElement("path",{d:`M1851 3497 c-50 -25 -66 -62 -66 -150 0 -71 4 -88 27 -128 34 -57 66\r
-79 116 -79 104 0 156 141 98 265 -42 90 -110 126 -175 92z m78 -62 c39 -50\r
55 -200 25 -230 -42 -41 -81 20 -91 142 -5 66 -3 82 11 96 23 23 31 22 55 -8z`}),l.createElement("path",{d:`M1533 3465 c-34 -15 -58 -45 -68 -87 -6 -23 -3 -28 19 -34 28 -7 56\r
9 56 32 0 21 46 47 69 39 24 -7 36 -44 27 -78 -3 -13 -37 -58 -76 -100 -55\r
-61 -70 -84 -70 -108 0 -31 0 -31 43 -25 23 3 77 9 120 12 81 7 111 22 105 53\r
-3 13 -16 16 -83 13 l-80 -3 57 56 c71 69 90 118 65 170 -31 66 -111 92 -184\r
60z`}),l.createElement("path",{d:`M8571 2754 c-61 -46 -65 -52 -61 -89 3 -29 5 -29 43 -1 19 14 36 26\r
39 26 3 0 11 -37 17 -82 7 -46 14 -90 17 -100 4 -13 -5 -17 -46 -23 -48 -7\r
-50 -8 -50 -37 l0 -31 78 7 c214 18 202 16 202 47 0 30 -3 32 -61 29 l-36 -1\r
-12 75 c-6 42 -16 110 -22 151 -14 92 -22 94 -108 29z`}),l.createElement("path",{d:`M8240 2742 c-19 -9 -41 -29 -50 -45 -13 -24 -13 -29 0 -37 22 -14 27\r
-13 62 20 36 34 58 38 81 12 32 -35 18 -63 -35 -76 -21 -5 -28 -12 -28 -31 0\r
-22 4 -25 38 -25 47 0 72 -24 72 -68 0 -21 -7 -35 -19 -42 -33 -17 -52 -11\r
-86 26 -27 29 -37 34 -59 28 -30 -7 -32 -16 -10 -49 42 -65 141 -85 205 -42\r
67 45 74 106 17 159 -31 29 -31 30 -15 58 23 38 21 62 -5 88 -48 44 -111 53\r
-168 24z`}),l.createElement("path",{d:`M6927 2609 c-30 -18 -57 -84 -57 -142 0 -72 24 -137 65 -177 28 -27\r
42 -33 79 -34 84 -2 135 80 122 194 -7 61 -43 129 -80 154 -28 18 -101 21\r
-129 5z m102 -73 c7 -16 18 -62 24 -102 13 -93 1 -127 -41 -122 -22 2 -30 11\r
-41 43 -20 59 -27 181 -11 200 19 23 53 14 69 -19z`}),l.createElement("path",{d:`M6603 2570 c-31 -18 -53 -48 -53 -69 0 -21 53 -11 76 14 27 29 56 32\r
79 9 24 -25 15 -57 -20 -69 -49 -16 -56 -24 -45 -46 8 -14 21 -19 48 -19 48 0\r
62 -14 62 -62 0 -32 -4 -40 -25 -48 -33 -13 -67 1 -84 34 -14 26 -34 32 -65\r
20 -24 -9 -19 -27 17 -61 57 -56 112 -66 177 -33 41 21 70 63 70 101 0 11 -16\r
37 -36 57 l-35 35 17 32 c11 21 15 41 10 59 -15 60 -127 87 -193 46z`}),l.createElement("path",{d:`M5303 2445 c-36 -15 -73 -68 -73 -103 0 -54 60 -122 109 -122 14 0\r
39 7 55 15 15 8 30 15 32 15 12 0 2 -81 -12 -94 -17 -18 -50 -21 -59 -6 -8 13\r
-72 13 -80 1 -7 -13 34 -50 63 -58 40 -10 104 4 128 29 71 72 45 255 -45 315\r
-39 26 -72 28 -118 8z m88 -56 c15 -15 19 -30 17 -62 -3 -39 -5 -42 -34 -45\r
-35 -3 -51 11 -60 55 -5 24 -1 36 15 52 26 26 36 26 62 0z`}),l.createElement("path",{d:`M4990 2408 c-34 -17 -48 -32 -59 -61 -12 -33 -12 -40 0 -48 24 -16\r
53 -5 67 23 7 16 22 33 33 39 30 16 69 -13 69 -50 0 -32 -19 -60 -97 -143 -41\r
-44 -53 -64 -53 -89 l0 -32 53 7 c28 3 85 9 125 13 76 6 99 22 86 58 -6 14\r
-17 15 -81 10 l-74 -7 55 56 c69 70 86 117 61 169 -33 70 -110 93 -185 55z`}),l.createElement("path",{d:`M3653 2270 c-59 -35 -68 -85 -29 -143 l25 -36 -21 -38 c-25 -47 -14\r
-83 34 -114 61 -38 190 -11 216 46 21 45 14 75 -23 112 -32 32 -34 36 -20 56\r
17 25 19 60 5 88 -26 48 -129 65 -187 29z m115 -42 c7 -7 12 -27 12 -44 0 -40\r
-29 -53 -65 -30 -33 22 -42 56 -19 73 22 16 56 17 72 1z m21 -182 c31 -33 21\r
-63 -24 -72 -45 -8 -75 10 -75 44 0 16 5 33 12 40 20 20 63 14 87 -12z`}),l.createElement("path",{d:`M3360 2242 c-22 -10 -42 -32 -54 -56 -19 -38 -19 -39 0 -53 26 -19\r
47 -13 62 20 29 60 102 58 102 -4 0 -35 -22 -69 -97 -151 -39 -42 -53 -66 -53\r
-87 0 -33 -14 -32 165 -10 88 10 108 20 102 49 -2 12 -19 15 -79 15 l-76 -1\r
58 62 c66 71 78 105 56 158 -28 68 -113 95 -186 58z`}),l.createElement("path",{d:`M2028 2113 c-41 -4 -49 -8 -54 -28 -11 -45 1 -48 143 -30 l31 3 -25\r
-54 c-26 -58 -56 -204 -47 -229 4 -10 20 -15 50 -15 l44 0 0 88 c0 65 6 108\r
25 167 14 44 25 86 25 93 0 12 -75 14 -192 5z`}),l.createElement("path",{d:`M1731 2077 c-31 -16 -60 -55 -63 -87 -3 -21 1 -25 27 -27 24 -2 34 3\r
50 30 33 53 95 46 95 -12 -1 -36 -15 -59 -88 -140 -44 -49 -62 -78 -62 -97 l0\r
-27 78 7 c189 17 201 21 187 65 -4 14 -17 16 -77 13 l-72 -5 56 62 c66 71 79\r
110 54 163 -9 19 -29 42 -45 51 -34 20 -106 22 -140 4z`}))))}function ci(){return l.createElement("div",{className:"flexSVG"},l.createElement("svg",{className:"pastryIMG",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1065.000000pt",viewBox:"0 0 1280.000000 1065.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),l.createElement("g",{transform:"translate(0.000000,1065.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},l.createElement("path",{d:`M4975 9163 c-11 -2 -29 -8 -40 -13 -17 -7 -70 -16 -134 -22 -7 -1\r
-20 -16 -27 -34 -9 -21 -23 -36 -39 -40 -14 -3 -25 -9 -25 -13 0 -4 -12 -14\r
-26 -22 -27 -14 -63 -43 -116 -92 -23 -21 -29 -33 -24 -52 3 -13 2 -26 -3 -30\r
-14 -8 -10 -64 6 -94 7 -14 13 -38 13 -52 0 -15 7 -32 15 -39 9 -7 13 -20 10\r
-30 -3 -9 3 -24 14 -34 16 -15 29 -17 73 -10 29 4 71 8 93 9 22 1 57 9 78 18\r
35 15 38 20 35 49 -3 32 -2 33 40 36 24 2 50 -2 58 -9 7 -6 21 -9 29 -5 27 10\r
16 35 -22 52 -37 15 -37 16 -15 25 18 7 22 14 17 30 -6 19 -4 20 22 15 39 -9\r
73 15 54 38 -10 12 -31 16 -77 16 -35 0 -64 3 -64 8 0 14 54 32 97 32 35 0 46\r
5 64 29 12 17 34 35 50 41 15 7 35 23 44 37 15 22 21 24 53 18 21 -4 42 -10\r
47 -15 6 -4 36 -10 68 -13 47 -5 69 -14 122 -51 67 -48 83 -54 103 -34 18 18\r
48 -15 61 -67 7 -28 20 -51 35 -60 13 -9 26 -25 29 -35 7 -28 0 -25 -30 10\r
-13 17 -32 30 -41 30 -23 -1 -62 -35 -62 -54 0 -26 -15 -19 -49 24 -22 27 -40\r
40 -57 40 -21 0 -23 -3 -14 -19 13 -26 6 -42 -33 -68 -28 -20 -38 -21 -70 -12\r
-44 12 -57 6 -57 -25 0 -19 -4 -22 -24 -19 -26 5 -106 -25 -106 -40 0 -4 -12\r
-24 -26 -43 -19 -25 -32 -33 -45 -29 -16 5 -19 1 -19 -29 0 -44 -9 -45 -35 -6\r
-28 42 -39 37 -32 -15 6 -42 -3 -59 -18 -35 -3 6 -21 10 -39 10 -25 0 -35 -6\r
-44 -25 -13 -28 -26 -30 -62 -10 -14 8 -33 14 -43 15 -21 0 -77 39 -77 53 0 6\r
9 2 20 -8 18 -16 50 -15 50 2 0 33 -224 64 -309 43 -62 -15 -101 -31 -101 -41\r
0 -5 -6 -9 -14 -9 -13 0 -60 -49 -81 -84 -7 -12 -28 -19 -72 -23 -60 -5 -63\r
-4 -63 17 0 21 -3 22 -41 16 -40 -6 -50 -12 -93 -52 -13 -11 -27 -19 -33 -17\r
-5 2 -15 -8 -23 -22 -7 -13 -22 -27 -32 -31 -11 -3 -17 -11 -15 -17 2 -7 -2\r
-32 -10 -57 -19 -57 -24 -141 -11 -157 7 -9 7 -22 -2 -43 -8 -20 -9 -34 -3\r
-43 5 -6 11 -37 12 -67 2 -59 36 -150 57 -150 15 0 25 25 15 36 -16 18 -29 95\r
-21 122 5 16 9 20 9 10 2 -31 43 -141 68 -180 13 -21 32 -44 43 -50 11 -7 20\r
-18 20 -25 0 -7 9 -17 20 -23 11 -6 20 -17 20 -25 0 -17 -26 -20 -35 -5 -11\r
17 -37 11 -42 -10 -7 -27 -27 -25 -42 3 -7 12 -29 34 -51 50 -47 33 -73 27\r
-115 -30 -16 -21 -35 -43 -43 -48 -7 -6 -14 -21 -15 -34 -1 -12 -9 -27 -19\r
-32 -21 -12 -23 -32 -4 -48 14 -12 11 -57 -6 -77 -4 -6 -6 -18 -3 -25 3 -8 -4\r
-32 -15 -54 -12 -22 -25 -73 -30 -114 -5 -45 -14 -80 -24 -90 -16 -15 -16 -13\r
-10 25 4 27 2 44 -5 49 -14 8 -43 -13 -36 -25 3 -5 1 -11 -4 -14 -5 -4 -7 -22\r
-4 -41 4 -24 1 -39 -11 -50 -9 -9 -13 -21 -10 -27 4 -6 2 -13 -3 -17 -21 -14\r
-42 -119 -42 -210 0 -67 -5 -100 -16 -117 -18 -28 -21 -169 -4 -180 6 -3 9\r
-15 6 -25 -3 -10 -1 -22 4 -25 5 -3 9 -16 9 -30 0 -14 12 -50 26 -81 22 -49\r
24 -65 19 -121 -3 -36 -12 -84 -20 -106 -8 -27 -13 -104 -15 -231 0 -104 -1\r
-199 -2 -210 0 -26 30 -145 41 -159 4 -6 13 -29 19 -51 24 -89 109 -276 141\r
-308 6 -6 11 -37 11 -68 0 -47 -3 -59 -19 -64 -10 -3 -36 -24 -57 -47 l-39\r
-42 -9 48 c-6 34 -5 55 2 67 7 11 8 20 2 24 -14 8 -50 -17 -50 -35 0 -9 -5\r
-21 -11 -27 -11 -11 -21 -55 -19 -78 4 -41 10 -155 10 -178 0 -23 18 -72 49\r
-127 26 -48 31 -62 25 -71 -3 -5 0 -17 7 -26 14 -16 37 -71 46 -111 3 -12 9\r
-22 14 -22 5 0 9 -5 9 -11 0 -5 9 -31 21 -57 66 -147 79 -195 79 -292 0 -80 0\r
-81 23 -74 12 3 28 11 35 16 19 16 15 -23 -5 -52 -24 -36 -46 -51 -54 -38 -5\r
7 -17 3 -35 -11 -27 -21 -27 -21 -41 -1 -10 14 -25 20 -54 20 -21 0 -49 5 -62\r
12 -12 6 -29 14 -37 18 -25 12 -54 70 -42 82 8 8 22 2 50 -21 65 -51 85 -35\r
32 26 -49 55 -33 108 39 132 54 17 61 15 61 -24 0 -19 5 -35 10 -35 6 0 10 1\r
10 3 0 1 4 17 9 35 9 29 7 36 -19 59 -46 41 -75 52 -122 46 -53 -7 -116 -51\r
-143 -100 -11 -19 -25 -35 -30 -35 -6 0 -15 -4 -22 -10 -7 -6 -29 -7 -53 -3\r
-26 4 -40 3 -40 -4 0 -6 -9 -11 -20 -11 -15 0 -20 7 -20 25 0 30 -5 31 -48 5\r
-18 -11 -47 -22 -63 -24 -39 -5 -91 -53 -83 -78 4 -13 0 -18 -14 -18 -12 0\r
-24 -11 -32 -30 -8 -18 -20 -30 -31 -30 -11 0 -19 -6 -19 -13 0 -23 -25 -67\r
-37 -67 -7 0 -13 -1 -14 -2 0 -2 -3 -24 -5 -50 -5 -45 -4 -47 23 -50 21 -2 29\r
-9 31 -27 5 -29 -15 -52 -27 -32 -17 27 -30 1 -24 -49 6 -53 0 -60 -37 -40\r
-26 14 -32 -1 -14 -34 7 -16 14 -51 14 -80 1 -103 19 -189 46 -217 21 -21 25\r
-33 20 -56 -5 -22 -2 -34 13 -47 11 -10 25 -41 32 -69 7 -28 24 -74 38 -102\r
14 -27 24 -56 23 -63 -2 -7 5 -25 14 -41 15 -25 15 -32 5 -45 -8 -9 -19 -16\r
-25 -16 -12 -1 -56 -35 -56 -44 0 -3 -18 -22 -40 -42 -26 -24 -40 -45 -40 -61\r
0 -18 -4 -24 -15 -19 -11 4 -15 -2 -16 -22 -1 -15 -1 -30 0 -34 0 -5 -6 -8\r
-14 -8 -9 0 -15 -9 -15 -24 0 -14 -4 -27 -8 -30 -4 -2 -9 -32 -10 -65 -2 -57\r
-1 -62 23 -73 28 -13 55 -59 55 -95 0 -14 8 -38 17 -54 9 -15 14 -31 11 -34\r
-11 -11 -37 7 -51 37 -8 17 -17 25 -21 19 -4 -5 5 -28 19 -50 14 -23 25 -47\r
25 -54 0 -19 -21 -37 -42 -37 -10 0 -18 -5 -18 -12 0 -6 -15 -25 -33 -42 -45\r
-42 -77 -90 -77 -115 0 -12 -4 -21 -10 -21 -5 0 -10 -11 -10 -25 0 -14 -7 -36\r
-15 -48 -17 -27 -15 -209 3 -242 6 -11 13 -31 16 -45 10 -47 78 -124 119 -135\r
21 -6 41 -16 45 -22 4 -7 45 -24 90 -38 45 -15 82 -31 82 -35 0 -5 -11 -21\r
-24 -37 -12 -15 -24 -37 -25 -48 -5 -53 0 -140 9 -149 6 -6 10 -20 10 -32 0\r
-12 7 -25 16 -28 8 -3 13 -10 10 -14 -8 -13 103 -122 171 -169 57 -39 99 -53\r
208 -70 52 -8 57 -11 46 -31 -6 -12 -32 -23 -75 -32 -36 -7 -66 -17 -66 -22 0\r
-4 -13 -8 -29 -8 -17 0 -33 -4 -36 -10 -3 -5 -21 -10 -40 -10 -42 0 -78 -13\r
-102 -38 -10 -11 -35 -22 -57 -25 -21 -3 -46 -13 -56 -22 -9 -8 -25 -15 -34\r
-15 -12 0 -16 -5 -12 -16 3 -8 2 -12 -4 -9 -5 3 -19 -6 -32 -20 -14 -16 -28\r
-23 -40 -19 -10 3 -18 1 -18 -5 0 -6 -6 -11 -14 -11 -8 0 -24 -11 -37 -24 -13\r
-13 -29 -22 -37 -19 -7 3 -22 -4 -32 -15 -20 -22 -13 -36 13 -26 8 3 18 1 21\r
-5 7 -11 108 -3 116 9 16 23 110 84 156 102 30 11 54 25 54 29 0 5 9 9 19 9\r
11 0 22 4 25 8 3 5 31 14 63 21 32 7 69 20 83 29 14 9 32 15 42 14 9 -2 19 1\r
22 7 4 5 27 13 51 17 25 3 48 10 51 15 3 5 16 9 28 9 13 0 29 6 35 14 6 7 40\r
16 79 19 37 3 81 13 97 21 17 9 40 16 53 16 12 0 39 7 59 15 19 8 49 15 65 15\r
17 0 42 7 56 15 15 8 48 23 74 35 26 11 50 24 53 30 3 5 17 10 31 10 31 0 69\r
19 148 75 34 23 79 54 101 69 47 32 81 67 77 79 -1 5 2 6 7 3 11 -7 122 75\r
150 110 10 13 25 24 32 24 8 0 43 27 79 60 36 33 68 60 71 60 4 0 17 16 30 34\r
13 19 39 44 59 55 19 11 62 45 95 75 33 31 64 56 69 56 9 0 19 12 71 80 17 21\r
35 39 42 40 7 0 17 9 23 20 14 26 40 26 47 0 3 -11 9 -20 14 -20 5 0 9 -6 9\r
-12 1 -7 9 -31 20 -53 11 -22 19 -46 20 -53 0 -7 4 -20 9 -30 20 -37 61 -179\r
61 -209 0 -18 4 -34 9 -37 4 -3 11 -33 15 -66 5 -46 12 -62 28 -71 28 -15 58\r
12 42 39 -7 10 -15 47 -19 82 -4 36 -11 70 -15 75 -4 6 -11 31 -14 57 -5 32\r
-12 48 -22 48 -10 0 -14 12 -14 40 0 22 -4 48 -9 58 -22 40 -51 109 -51 120 0\r
7 -9 21 -21 33 -12 12 -22 26 -23 33 -3 14 -42 102 -61 138 -8 14 -15 32 -15\r
38 0 7 -22 49 -50 95 -27 46 -50 93 -50 105 0 12 -11 40 -24 63 -13 23 -29 61\r
-36 85 -6 23 -15 42 -20 42 -4 0 -12 15 -15 32 -4 18 -19 57 -32 87 -14 29\r
-26 72 -27 95 0 22 -6 47 -13 54 -16 16 -17 29 -3 37 6 4 4 16 -6 31 -19 29\r
-2 34 27 8 25 -23 46 -12 52 28 3 25 -1 39 -16 56 -18 19 -19 26 -9 43 16 25\r
7 56 -16 64 -14 4 -17 13 -14 40 6 51 37 47 114 -18 57 -47 179 -117 206 -117\r
6 0 23 -6 39 -14 24 -13 53 -24 138 -56 98 -36 289 -71 465 -85 25 -2 63 -7\r
85 -12 57 -12 459 -4 481 9 18 11 59 11 87 0 35 -15 47 -15 47 -2 0 6 7 10 15\r
10 8 0 15 -7 15 -15 0 -18 21 -20 39 -2 6 6 15 12 19 13 4 0 23 4 43 8 36 8\r
79 -5 79 -23 0 -4 -29 -23 -65 -41 -70 -36 -80 -44 -70 -60 7 -11 52 10 90 41\r
27 22 72 32 81 18 4 -7 -1 -16 -10 -21 -9 -5 -16 -16 -16 -25 0 -9 -8 -25 -17\r
-35 -22 -24 -3 -49 22 -28 8 7 19 10 23 6 4 -4 -6 -18 -22 -31 -16 -13 -25\r
-28 -22 -34 4 -6 11 -9 16 -6 14 8 21 -30 11 -57 -5 -15 -5 -31 0 -41 11 -18\r
39 -24 39 -8 0 15 41 78 79 122 24 28 41 39 62 39 39 0 172 123 164 151 -8 25\r
11 24 25 0 13 -25 14 -73 1 -52 -8 12 -12 10 -22 -11 -9 -21 -9 -33 2 -56 11\r
-26 16 -29 36 -21 15 5 23 5 23 -2 0 -6 16 -43 35 -82 29 -61 56 -94 173 -209\r
76 -76 142 -138 146 -138 8 0 72 -50 117 -93 16 -15 34 -27 39 -27 5 0 13 -6\r
17 -13 9 -14 29 -26 98 -62 28 -14 77 -45 110 -69 33 -25 64 -45 69 -45 4 -1\r
28 -14 53 -31 24 -16 46 -30 48 -30 2 0 33 -20 69 -45 37 -25 69 -45 73 -45 3\r
0 24 -8 47 -19 85 -38 117 -51 131 -51 8 0 15 -6 15 -12 1 -7 9 -2 20 10 24\r
29 17 45 -36 92 -27 24 -34 34 -24 40 7 5 20 6 28 3 9 -4 13 0 11 12 -2 10\r
-11 20 -19 21 -134 29 -161 44 -277 164 -56 58 -65 85 -33 95 11 3 28 17 38\r
29 23 30 79 39 93 15 6 -13 4 -22 -7 -34 -16 -15 -12 -51 4 -41 15 9 44 -19\r
47 -45 1 -13 3 -27 4 -31 0 -4 40 -9 89 -10 86 -3 87 -3 90 -30 3 -21 9 -27\r
30 -30 19 -2 27 -9 27 -23 0 -15 8 -21 32 -23 21 -2 34 -10 38 -23 4 -10 13\r
-19 21 -19 8 0 32 -11 54 -25 22 -14 44 -25 50 -25 23 0 7 -20 -40 -49 -28\r
-17 -61 -31 -75 -31 -18 0 -25 -5 -25 -19 0 -27 14 -33 71 -33 27 0 46 -4 43\r
-9 -3 -5 -25 -9 -50 -9 -53 0 -56 -12 -12 -57 23 -23 27 -33 16 -33 -9 0 -18\r
7 -22 15 -3 8 -10 15 -16 15 -14 0 -13 -33 2 -48 6 -6 9 -14 5 -18 -7 -7 -87\r
70 -87 84 0 12 -58 34 -64 24 -7 -12 11 -46 42 -79 16 -17 32 -38 35 -47 4 -9\r
17 -20 31 -26 13 -5 27 -18 31 -29 11 -35 92 -72 170 -78 39 -3 77 -9 85 -13\r
8 -4 35 -11 60 -15 25 -4 50 -11 55 -15 11 -8 120 -5 183 5 29 5 42 4 42 -4 0\r
-15 72 -14 104 0 19 9 29 9 39 1 8 -7 17 -8 23 -2 11 11 106 16 123 6 7 -4 22\r
-9 34 -11 36 -4 79 -17 106 -31 14 -8 35 -14 47 -14 11 0 29 -9 39 -20 10 -11\r
26 -20 37 -20 10 0 18 -4 18 -9 0 -8 26 -20 55 -25 21 -4 65 -30 65 -38 0 -4\r
6 -8 13 -8 17 0 177 -159 177 -176 0 -8 6 -14 14 -14 13 0 36 -24 124 -129 20\r
-25 58 -67 83 -94 41 -45 48 -48 68 -38 12 7 26 24 32 38 8 22 5 30 -25 59\r
-19 19 -40 34 -46 34 -5 0 -10 7 -10 15 0 13 -11 19 -31 17 -4 -1 -5 7 -2 17\r
2 9 -3 23 -11 30 -9 8 -16 19 -16 26 0 6 -21 33 -46 58 -25 26 -43 51 -39 57\r
4 6 2 9 -3 8 -5 -2 -33 22 -64 52 -94 95 -143 129 -219 151 -21 7 -39 15 -39\r
19 0 4 -14 10 -30 14 -53 10 -53 61 0 113 29 28 31 34 34 126 2 54 9 103 15\r
111 6 8 12 45 12 82 1 65 12 100 45 144 7 8 15 35 19 60 4 24 13 52 19 62 8\r
15 8 21 -3 28 -9 5 -16 32 -19 72 -4 49 -12 74 -38 115 -18 28 -39 71 -47 95\r
-14 42 -16 116 -3 136 3 6 3 18 0 26 -4 9 -7 51 -8 94 -2 42 -3 110 -4 150 -2\r
56 -5 72 -17 72 -11 0 -15 12 -15 44 0 30 -5 46 -15 50 -9 3 -15 18 -15 35 0\r
31 -37 104 -48 97 -4 -2 -8 24 -10 57 -2 50 -7 65 -26 82 -13 11 -49 58 -80\r
104 -31 46 -71 97 -90 113 -25 21 -32 34 -29 52 6 32 -27 52 -58 35 -12 -6\r
-24 -7 -28 -2 -64 77 -68 92 -49 184 10 49 9 61 -5 92 -10 20 -31 46 -47 57\r
-17 12 -37 35 -46 51 -17 33 -49 69 -62 69 -24 0 -43 29 -48 74 -5 52 -45 118\r
-92 153 -24 17 -88 50 -132 67 -8 4 -28 15 -45 25 -16 11 -39 20 -49 20 -11 1\r
-27 8 -37 17 -10 9 -45 19 -78 23 -32 4 -66 13 -74 19 -11 9 -26 10 -56 3 -23\r
-5 -43 -6 -46 -1 -2 4 -52 10 -111 14 -59 4 -115 11 -125 16 -10 6 -33 10 -52\r
10 -19 0 -37 6 -39 13 -2 6 -3 78 -2 159 1 114 -2 151 -12 159 -16 13 -19 95\r
-4 104 6 4 10 63 10 145 0 82 4 141 10 145 6 4 10 -8 10 -29 0 -44 16 -55 31\r
-22 9 19 9 29 0 40 -8 9 -9 26 -3 53 6 26 5 53 -3 80 -7 23 -10 44 -7 47 2 3\r
-1 12 -7 20 -7 8 -10 20 -7 25 4 5 2 12 -4 16 -5 3 -10 19 -10 35 0 70 -73 31\r
-85 -46 -3 -24 -13 -56 -21 -72 -7 -15 -14 -35 -14 -44 0 -9 -4 -19 -9 -22 -4\r
-3 -11 -18 -14 -33 -7 -37 -96 -203 -108 -203 -12 0 0 50 16 70 8 8 16 32 20\r
53 7 33 5 37 -14 37 -24 0 -29 28 -9 48 9 9 8 12 -5 12 -25 0 -21 28 9 54 23\r
19 25 25 14 42 -10 17 -9 28 10 69 33 73 32 184 -2 253 -8 16 -8 28 0 45 6 12\r
13 40 14 62 2 28 8 40 18 40 11 0 14 -9 13 -30 -3 -31 14 -85 26 -85 20 0 51\r
90 51 146 0 69 3 95 14 112 4 7 3 19 -3 26 -8 10 -8 22 -1 41 6 15 10 48 9 74\r
-3 64 12 201 22 207 13 8 11 48 -3 62 -10 10 -10 15 2 23 12 8 12 12 2 16 -9\r
3 -10 9 -2 18 7 9 6 21 -5 41 -8 16 -15 37 -15 47 0 9 -4 25 -9 35 -57 111\r
-60 125 -51 196 4 38 6 75 3 82 -3 7 3 36 12 64 9 28 14 58 10 68 -12 27 -15\r
131 -5 137 13 8 13 62 1 70 -5 3 -12 19 -16 36 -7 29 -44 79 -60 79 -12 0 -34\r
33 -35 53 0 18 -34 24 -45 7 -3 -5 -10 -51 -15 -102 -12 -127 -28 -237 -36\r
-250 -4 -6 -13 -36 -20 -67 -10 -46 -31 -113 -41 -130 -1 -1 -6 0 -11 3 -10 6\r
6 78 25 111 6 12 13 60 15 109 3 57 9 90 17 96 9 5 10 10 2 14 -13 9 -15 83\r
-2 91 6 3 6 17 -1 36 -8 22 -13 27 -23 19 -9 -8 -17 -6 -29 5 -22 22 -20 33 6\r
37 18 2 25 12 32 46 8 36 6 45 -10 56 -16 12 -18 25 -15 91 2 66 1 77 -12 72\r
-8 -3 -23 0 -33 8 -16 11 -17 17 -6 40 10 21 10 26 0 23 -7 -3 -14 -14 -16\r
-26 -2 -12 -7 -22 -12 -22 -12 0 -20 29 -10 35 6 4 10 20 10 36 0 29 -2 30\r
-31 24 l-30 -7 2 44 c4 66 -15 85 -52 52 -26 -23 -39 -9 -39 42 0 48 -18 66\r
-45 44 -19 -16 -24 -11 -28 29 -2 17 -9 37 -15 43 -7 7 -12 20 -12 29 0 10 -4\r
21 -10 24 -5 3 -10 17 -10 30 0 13 -3 30 -6 39 -7 17 -34 22 -34 6 0 -5 -7\r
-10 -15 -10 -9 0 -15 9 -15 25 0 25 -3 27 -50 29 -20 1 -27 8 -36 41 -16 61\r
-24 75 -45 75 -12 0 -19 7 -19 18 0 28 -36 58 -53 44 -10 -8 -16 -6 -26 10\r
-16 26 -38 10 -23 -18 5 -11 12 -48 16 -83 6 -50 4 -62 -6 -59 -19 7 -38 48\r
-38 86 0 28 -3 32 -19 27 -13 -4 -20 0 -24 15 -3 11 -1 23 4 26 17 10 9 34\r
-10 34 -14 0 -21 8 -23 28 -3 27 -5 28 -65 31 -16 1 -23 7 -23 20 0 11 -5 23\r
-12 27 -14 9 -38 -23 -38 -53 0 -49 -37 -17 -42 37 -2 27 -8 36 -28 41 -35 8\r
-60 -7 -60 -36 0 -32 -17 -32 -32 0 -6 14 -17 25 -25 25 -19 0 -28 -29 -14\r
-43 16 -16 14 -57 -3 -57 -8 0 -17 15 -20 35 -7 37 -26 48 -26 15 0 -35 -26\r
-21 -59 32 -28 45 -34 49 -47 36 -13 -13 -13 -18 3 -46 20 -35 12 -53 -12 -28\r
-9 9 -21 14 -26 11 -11 -8 -12 -38 0 -50 20 -22 21 -60 1 -72 -10 -7 -20 -9\r
-22 -4 -2 4 -16 11 -31 15 -23 6 -28 4 -27 -11 4 -34 0 -43 -20 -43 -14 0 -20\r
7 -20 24 0 13 -7 29 -15 36 -8 7 -15 23 -15 35 0 25 -24 50 -39 41 -5 -3 2\r
-28 16 -55 44 -84 4 -116 -45 -36 -30 51 -42 56 -42 20 0 -27 -25 -45 -65 -45\r
-19 0 -26 -5 -24 -17 3 -36 -2 -37 -26 -8 -22 27 -24 28 -25 9 0 -11 7 -29 15\r
-40 8 -10 15 -30 15 -43 0 -20 -2 -21 -15 -11 -13 11 -15 8 -15 -14 0 -29 -29\r
-36 -49 -12 -14 17 -95 16 -113 -1 -17 -18 -47 -16 -54 2 -6 15 -64 22 -64 7\r
0 -5 7 -17 15 -28 8 -10 15 -30 15 -43 0 -25 0 -25 -31 7 -33 33 -49 34 -49 1\r
0 -10 -7 -19 -15 -19 -13 0 -15 -7 -9 -35 7 -37 3 -41 -26 -25 -11 6 -21 6\r
-25 1 -3 -5 -31 -7 -63 -5 -53 5 -56 4 -37 -11 11 -8 25 -13 31 -11 7 3 20 -1\r
29 -8 32 -23 16 -140 -16 -120 -15 9 -10 -13 6 -26 8 -7 15 -20 15 -29 0 -9 6\r
-25 14 -36 23 -34 27 -101 7 -119 -24 -22 -28 -20 -28 10 0 14 -5 35 -11 47\r
-6 12 -16 41 -22 65 -9 34 -15 42 -33 42 -26 0 -47 17 -47 38 0 8 -9 25 -20\r
40 -14 17 -17 29 -10 36 14 14 13 46 -2 47 -7 1 -25 3 -40 5 -22 2 -28 -1 -28\r
-16 0 -26 -14 -32 -35 -16 -20 14 -13 36 11 36 8 0 12 5 9 10 -3 6 -20 10 -37\r
10 -16 0 -46 7 -65 16 -48 24 -62 6 -25 -32 41 -42 82 -99 82 -114 0 -11 -3\r
-11 -12 -2 -7 7 -23 12 -37 12 -14 0 -37 11 -51 25 -31 29 -85 39 -85 15 0 -8\r
11 -20 25 -27 39 -19 31 -38 -15 -36 -22 1 -54 4 -72 8 -20 5 -50 1 -82 -10\r
-37 -12 -65 -14 -110 -9 -70 8 -80 -5 -36 -46 37 -35 77 -108 73 -133 -4 -20\r
-5 -20 -24 10 -10 18 -23 31 -29 29 -13 -4 -8 -48 10 -83 19 -35 19 -90 0\r
-123 -15 -27 -20 -90 -7 -90 11 0 57 50 71 78 6 12 21 22 32 22 11 0 30 5 41\r
11 15 8 26 8 42 0 22 -12 66 -16 129 -13 30 2 40 7 49 30 16 37 16 36 33 22 8\r
-7 15 -21 15 -31 0 -42 -22 -118 -41 -137 -38 -42 -9 -59 38 -22 32 25 43 25\r
43 1 0 -11 6 -22 13 -25 8 -4 5 -10 -10 -22 -41 -29 -29 -46 26 -38 46 6 75\r
-6 51 -21 -5 -3 -10 -29 -10 -57 0 -34 -6 -58 -16 -70 -14 -14 -14 -20 -4 -33\r
10 -12 5 -23 -34 -62 -49 -50 -49 -50 -77 0 -6 10 -22 17 -39 17 -17 0 -30 5\r
-30 11 0 6 -16 26 -36 44 -36 33 -36 34 -21 64 13 25 13 32 1 41 -7 7 -18 9\r
-24 5 -5 -3 -10 2 -10 13 0 11 -8 39 -19 62 l-19 42 -26 -35 c-14 -18 -26 -38\r
-26 -43 0 -5 -9 -20 -19 -34 -16 -20 -21 -22 -35 -11 -9 7 -16 25 -16 40 -1\r
65 -52 101 -76 52 -12 -23 -12 -23 -23 -3 -7 14 -8 29 -1 46 16 42 -8 32 -92\r
-39 -84 -70 -120 -81 -176 -51 -15 7 -45 19 -67 26 -62 19 -89 50 -45 50 30 0\r
24 22 -14 48 -50 34 -81 131 -70 221 7 57 7 171 -1 179 -10 11 -37 -18 -59\r
-61 -27 -55 -45 -128 -53 -215 -8 -89 61 -262 104 -262 21 0 123 -91 123 -110\r
0 -21 132 -150 153 -150 9 0 19 -4 22 -10 4 -6 -7 -10 -24 -10 -21 0 -31 5\r
-31 15 0 17 -11 20 -25 6 -10 -10 -72 4 -128 27 -16 7 -32 12 -36 12 -17 0\r
-166 145 -169 164 -2 12 -10 28 -18 37 -7 8 -17 31 -20 50 -4 19 -10 39 -14\r
44 -4 6 -11 30 -15 55 -4 24 -12 52 -18 62 -12 18 10 124 40 196 8 18 11 37 8\r
42 -3 5 4 29 16 54 14 30 19 55 15 71 -4 16 -1 34 9 48 21 31 19 46 -10 57\r
-14 5 -25 15 -25 22 0 7 -8 27 -17 43 -11 21 -18 63 -21 138 -3 78 -8 107 -17\r
107 -15 0 -25 -22 -25 -55 0 -13 -5 -27 -12 -31 -8 -5 -9 13 -4 69 5 52 3 76\r
-4 79 -15 5 -2 58 15 65 7 2 30 -7 52 -21 59 -39 118 -40 133 -1 12 32 21 31\r
60 -2 29 -24 30 -28 16 -38 -20 -15 -21 -55 -2 -55 23 0 31 -22 12 -32 -9 -5\r
-16 -17 -16 -28 0 -10 -7 -25 -15 -34 -18 -18 -20 -72 -3 -82 7 -4 33 -9 59\r
-10 61 -3 69 -8 69 -46 l0 -31 46 7 c26 3 53 11 60 16 16 14 31 -7 15 -23 -6\r
-6 -11 -22 -11 -37 0 -14 -4 -30 -8 -35 -9 -13 -95 -55 -113 -55 -15 0 -49\r
-72 -49 -103 0 -9 6 -17 13 -17 21 0 47 34 47 62 0 24 2 24 55 20 50 -4 55 -3\r
64 19 5 13 29 42 52 64 57 52 75 81 84 132 5 35 30 75 38 62 1 -2 10 -17 19\r
-34 18 -33 21 -33 203 -27 33 2 82 1 108 -1 45 -3 48 -2 43 18 -3 12 1 30 9\r
41 8 10 15 27 15 37 0 13 8 17 34 17 19 0 36 -4 38 -9 2 -4 27 -11 56 -15 43\r
-5 52 -4 52 9 0 8 -18 26 -40 40 -70 44 -37 64 40 24 27 -14 45 -18 51 -12 6\r
6 4 14 -6 23 -8 7 -15 17 -15 22 0 15 38 -1 67 -28 26 -24 43 -31 43 -16 0 15\r
-33 107 -41 117 -14 15 -10 45 5 45 8 0 21 -6 28 -14 8 -7 24 -17 36 -20 31\r
-10 29 15 -3 45 -13 13 -25 27 -25 32 0 13 37 7 50 -8 7 -8 23 -15 36 -15 24\r
0 32 14 14 25 -16 10 -12 35 5 35 20 0 78 -29 87 -44 12 -18 40 6 53 44 14 42\r
26 46 50 20 18 -20 65 -28 65 -12 0 5 -9 17 -19 26 -25 23 -32 53 -16 66 10 8\r
15 6 20 -9 3 -12 12 -21 19 -21 7 0 25 -13 41 -30 16 -16 34 -30 41 -30 22 0\r
27 20 10 39 -9 9 -19 32 -22 50 -7 32 -6 33 17 26 13 -4 27 -14 32 -21 4 -7\r
14 -11 22 -8 12 5 11 11 -6 35 -17 25 -18 30 -5 35 9 3 27 -7 45 -28 29 -31\r
32 -32 45 -15 8 10 20 15 30 11 19 -7 21 11 6 52 -13 33 -5 44 14 18 25 -34\r
30 -5 7 37 -31 54 -18 63 25 16 19 -20 39 -37 44 -37 16 0 11 23 -10 50 -25\r
32 -25 50 0 50 11 0 20 -4 20 -10 0 -5 6 -10 13 -10 7 0 31 -18 52 -40 56 -57\r
71 -54 70 17 0 51 3 58 25 70 20 10 27 9 41 -2 8 -8 24 -15 35 -15 11 0 29 -7\r
41 -15 12 -8 28 -12 37 -9 11 4 19 -2 26 -20 14 -38 32 -32 29 8 -5 50 5 52\r
35 6 14 -22 33 -40 41 -40 17 0 35 -30 35 -59 0 -34 20 -35 54 -2 42 41 62 40\r
70 -4 5 -25 12 -35 26 -35 10 0 22 5 25 11 4 6 14 8 22 4 9 -3 24 2 34 11 22\r
20 39 11 39 -22 0 -17 5 -24 20 -24 19 0 20 -4 14 -50 -7 -53 6 -68 26 -30 8\r
15 17 19 34 14 13 -3 27 -1 30 5 4 5 12 8 20 5 7 -3 18 7 25 22 16 35 24 24\r
31 -38 3 -31 11 -54 20 -58 8 -4 25 -12 37 -18 30 -16 33 -15 33 6 0 26 11 34\r
27 21 7 -7 13 -32 13 -60 0 -49 16 -68 22 -26 6 41 33 26 38 -23 4 -37 9 -45\r
25 -45 17 0 20 -8 23 -55 3 -59 14 -80 42 -80 11 0 22 -12 29 -30 6 -18 17\r
-30 28 -30 16 0 18 -9 18 -62 0 -56 2 -63 21 -66 40 -6 46 18 45 174 -1 81 -5\r
150 -10 153 -5 3 -12 20 -15 38 -9 39 -57 135 -77 153 -3 3 -12 23 -20 45 -10\r
27 -21 39 -32 37 -10 -2 -22 9 -32 28 -9 17 -38 53 -65 80 -28 28 -50 54 -50\r
60 0 12 -18 23 -41 24 -11 1 -26 16 -37 36 -12 25 -25 36 -47 40 -26 4 -30 10\r
-37 49 -8 48 -4 61 18 61 8 0 14 -10 14 -26 0 -16 5 -24 13 -21 16 6 10 51\r
-13 100 -10 21 -17 44 -14 51 3 7 -9 25 -25 39 -20 16 -31 35 -31 51 0 31\r
-112 144 -176 176 -26 14 -49 35 -56 51 -7 16 -18 29 -23 29 -6 0 -18 9 -28\r
20 -11 14 -29 20 -55 20 -26 0 -45 7 -57 20 -10 12 -24 19 -31 16 -7 -3 -18 2\r
-24 10 -16 18 -126 19 -177 0 -79 -28 -115 -38 -120 -32 -3 3 -15 -1 -27 -9\r
-11 -8 -28 -15 -37 -15 -9 0 -19 -7 -23 -15 -3 -8 -13 -15 -22 -15 -9 0 -33\r
-13 -54 -30 -21 -16 -44 -30 -51 -30 -8 0 -27 -9 -44 -20 -16 -11 -40 -20 -52\r
-20 -24 0 -86 29 -142 67 -19 13 -43 23 -54 23 -22 0 -73 15 -124 37 -17 7\r
-40 13 -51 13 -12 0 -23 4 -26 9 -3 4 -24 5 -46 1 -31 -6 -40 -4 -40 6 0 10\r
-17 14 -62 14 -35 1 -92 8 -128 16 -78 19 -105 23 -190 29 -102 7 -353 13\r
-375 8z m1790 -154 c22 -12 63 -42 92 -66 38 -33 53 -41 59 -31 5 7 7 21 6 31\r
-5 25 14 21 66 -14 41 -28 47 -29 58 -15 16 23 22 20 29 -13 3 -16 17 -39 31\r
-51 13 -13 24 -29 24 -35 0 -6 11 -35 26 -64 25 -52 29 -85 9 -79 -5 1 -32 31\r
-60 67 -27 35 -57 67 -65 71 -8 4 -30 14 -47 23 -19 9 -35 12 -38 6 -11 -16\r
-49 -10 -95 17 -25 14 -53 23 -64 20 -11 -3 -40 0 -66 5 -46 11 -119 13 -129\r
4 -3 -3 1 -15 8 -26 16 -27 7 -36 -27 -23 -15 6 -37 7 -47 4 -14 -5 -27 -1\r
-42 13 -28 25 -29 34 -3 42 11 3 33 20 50 37 l31 30 49 -16 c27 -9 67 -16 89\r
-16 37 0 41 3 41 24 0 14 -10 30 -25 40 -27 18 -33 36 -12 36 7 0 30 -10 52\r
-21z m-1028 -141 c20 -28 21 -34 9 -46 -11 -11 -12 -21 -4 -44 6 -16 7 -32 3\r
-36 -7 -7 -26 20 -37 53 -9 28 -9 105 0 105 4 0 17 -15 29 -32z m748 -58 c10\r
-11 25 -20 33 -20 11 0 13 -9 8 -40 -6 -37 -4 -41 19 -50 29 -11 34 -40 6 -40\r
-11 0 -23 -4 -26 -10 -13 -21 -24 -8 -30 38 -4 26 -12 52 -19 57 -16 14 -46\r
62 -46 75 0 17 36 11 55 -10z m-635 -20 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10\r
20 0 11 5 20 10 20 6 0 10 -9 10 -20z m-1143 -344 c4 -3 4 -9 0 -12 -7 -7 -77\r
17 -77 27 0 8 68 -6 77 -15z m-15 -52 c15 -8 34 -14 43 -14 43 0 122 -76 112\r
-109 -1 -4 17 -38 40 -74 44 -70 59 -141 35 -170 -10 -11 -9 -20 3 -43 19 -37\r
20 -118 1 -134 -8 -6 -12 -18 -10 -25 3 -8 -1 -24 -10 -37 -9 -12 -16 -32 -16\r
-43 -1 -25 -53 -89 -68 -84 -8 3 -4 16 12 39 14 19 26 42 27 50 5 27 -12 162\r
-22 174 -38 47 -89 117 -89 122 0 10 54 -6 72 -23 20 -18 38 -10 38 17 0 47\r
-123 69 -221 40 -33 -10 -61 -14 -65 -9 -3 5 -18 9 -35 9 -24 0 -29 4 -29 23\r
0 32 25 64 65 83 34 16 47 43 23 45 -7 1 -17 2 -23 4 -5 1 -14 3 -19 3 -5 1\r
-3 8 3 16 15 18 4 25 -30 21 -27 -3 -62 13 -44 21 45 20 60 32 58 50 -1 10 5\r
23 13 27 8 4 14 17 14 27 0 18 5 19 48 13 26 -3 59 -12 74 -19z m-434 -178\r
c21 -48 23 -138 4 -190 -18 -51 -42 -73 -42 -39 0 10 7 29 16 41 20 30 8 49\r
-17 26 -18 -16 -19 -16 -19 4 0 12 9 31 20 42 24 24 17 44 -11 35 -16 -6 -18\r
-2 -13 24 8 40 -10 41 -31 2 -18 -36 -35 -48 -35 -26 0 20 83 105 102 105 8 0\r
20 -11 26 -24z m242 -6 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10\r
2 0 4 -4 4 -10z m1524 -489 c-6 -6 -24 19 -24 34 1 6 7 1 15 -9 8 -11 12 -22\r
9 -25z m-1814 -126 c0 -8 -4 -15 -9 -15 -5 0 -14 7 -21 15 -10 13 -9 15 9 15\r
12 0 21 -6 21 -15z m2566 -94 c-15 -24 7 -41 53 -41 26 0 51 4 57 8 22 19 82\r
32 105 24 13 -5 30 -7 36 -5 7 3 23 -3 35 -11 12 -9 31 -16 41 -16 17 0 18 -5\r
13 -35 -6 -33 -5 -35 19 -35 20 0 25 -5 25 -25 0 -14 7 -28 16 -32 18 -7 60\r
30 68 61 4 17 13 22 40 22 30 0 38 -5 50 -31 19 -39 51 -69 65 -60 16 10 13\r
-6 -9 -48 -31 -57 -20 -77 41 -77 27 0 49 -3 49 -7 0 -3 -11 -20 -24 -38 -13\r
-17 -26 -40 -28 -51 -5 -33 25 -21 57 23 16 23 33 42 38 42 14 2 7 -21 -18\r
-53 -17 -23 -25 -46 -25 -73 0 -37 4 -42 35 -57 19 -9 37 -21 40 -26 10 -17\r
69 -11 95 10 34 26 54 27 40 1 -5 -11 -10 -31 -10 -44 0 -14 -6 -30 -13 -36\r
-15 -12 -11 -71 4 -71 17 0 9 -16 -27 -53 -35 -35 -37 -36 -64 -22 -37 19 -48\r
19 -52 -2 -4 -20 7 -76 22 -108 6 -11 14 -74 19 -140 14 -166 39 -430 49 -501\r
4 -32 4 -93 0 -134 -31 -272 -32 -488 -4 -650 3 -14 8 -68 12 -120 4 -52 11\r
-100 15 -106 12 -15 12 -285 0 -314 -5 -14 -13 -51 -16 -82 -4 -32 -11 -60\r
-16 -63 -5 -4 -9 -16 -9 -28 0 -12 -7 -34 -14 -49 -8 -16 -18 -48 -22 -73 -3\r
-25 -10 -48 -15 -51 -5 -3 -9 -16 -9 -29 0 -13 -7 -45 -16 -71 -18 -54 -32\r
-120 -45 -224 -6 -41 -16 -95 -24 -120 -7 -25 -16 -72 -19 -105 -2 -33 -8 -71\r
-11 -85 -4 -14 -11 -45 -15 -70 -13 -74 -44 -167 -71 -210 -5 -8 -13 -24 -18\r
-35 -5 -11 -21 -33 -35 -49 -14 -16 -26 -33 -26 -37 0 -13 -167 -179 -180\r
-179 -5 0 -10 -6 -10 -13 0 -13 -91 -77 -111 -77 -6 0 -29 -15 -49 -32 -62\r
-53 -128 -98 -145 -98 -8 0 -15 -6 -15 -14 0 -8 -13 -17 -28 -21 -15 -3 -48\r
-19 -72 -35 -25 -17 -50 -30 -56 -30 -6 0 -17 -7 -24 -15 -7 -8 -25 -15 -39\r
-15 -15 0 -36 -7 -47 -15 -10 -8 -29 -15 -42 -15 -13 0 -31 -4 -41 -10 -18 -9\r
-132 -24 -261 -35 -36 -2 -93 -7 -128 -11 -40 -3 -68 -1 -77 6 -8 6 -16 7 -19\r
2 -7 -11 -54 -13 -61 -2 -3 5 -40 8 -83 9 -43 0 -100 5 -127 11 -28 6 -59 12\r
-70 14 -45 8 -82 19 -120 36 -82 36 -111 48 -160 66 -73 27 -156 72 -190 104\r
-16 15 -46 36 -65 47 -42 21 -58 34 -118 91 -24 23 -47 42 -50 42 -12 0 -202\r
195 -202 207 0 7 -6 13 -12 14 -7 0 -22 12 -34 27 -36 47 -114 207 -114 234 0\r
8 -4 18 -9 23 -9 9 -28 76 -52 185 -6 25 -14 54 -18 65 -22 56 -34 94 -40 132\r
-4 23 -12 48 -18 55 -6 7 -13 32 -17 56 -4 24 -20 73 -36 109 -17 36 -30 71\r
-30 78 0 7 -7 18 -15 25 -8 7 -15 22 -15 34 0 12 -7 31 -15 42 -8 10 -15 28\r
-15 39 0 11 -6 29 -13 40 -8 11 -19 38 -24 60 -6 22 -25 79 -43 128 -18 50\r
-29 95 -25 107 7 21 -14 66 -52 117 l-24 31 23 4 c37 5 34 39 -9 85 -21 23\r
-46 55 -56 72 l-18 31 25 0 c26 0 36 23 17 35 -6 3 -7 15 -3 28 12 41 3 184\r
-16 253 -11 41 -16 77 -12 89 5 15 -6 49 -40 118 -26 53 -43 97 -38 97 5 0 17\r
-13 26 -30 20 -34 33 -42 53 -29 12 7 11 13 -4 38 -23 39 -23 59 2 37 16 -14\r
20 -15 30 -2 10 11 6 24 -19 64 -34 55 -37 72 -15 72 9 0 15 9 16 23 l0 22 11\r
-22 c6 -13 17 -23 23 -23 45 0 43 95 -4 185 -17 33 -26 54 -19 47 19 -19 28\r
-14 28 16 1 26 1 26 16 7 8 -11 20 -28 27 -38 11 -17 14 -17 45 -2 25 13 32\r
23 32 46 0 17 5 40 11 51 8 14 8 23 0 31 -16 16 -14 42 5 58 16 13 15 60 -3\r
105 -5 14 -2 16 21 10 26 -6 27 -5 25 26 -1 18 1 43 5 54 4 14 -1 43 -14 75\r
-26 70 -25 76 4 42 27 -32 48 -24 26 10 -8 12 -14 39 -15 60 0 29 3 37 17 37\r
19 0 23 27 18 118 -2 39 11 55 25 32 3 -5 21 -10 38 -10 26 -1 38 -9 65 -45\r
17 -24 32 -48 32 -52 0 -11 106 -112 147 -141 18 -12 38 -22 46 -22 7 0 18 -5\r
24 -11 20 -20 117 -39 173 -34 90 8 117 15 130 30 6 8 31 21 54 30 42 16 44\r
16 81 -9 35 -24 45 -26 144 -24 58 0 111 4 116 8 6 4 33 10 62 13 55 6 90 22\r
111 50 7 9 19 17 25 17 15 0 116 103 140 142 9 15 17 34 17 41 0 8 6 20 14 26\r
8 7 15 40 18 82 3 39 11 76 17 82 6 6 11 19 11 28 0 10 9 33 20 52 11 19 18\r
41 15 50 -4 8 -1 18 6 22 9 6 10 -6 5 -53 -4 -36 -3 -63 3 -66 10 -7 61 13 61\r
23 0 3 7 15 15 26 15 19 15 19 31 -3 19 -28 37 -28 49 0 6 13 22 29 36 35 32\r
16 40 26 64 83 24 58 22 56 45 35 17 -15 24 -16 45 -7 14 6 25 20 26 29 0 14\r
2 13 9 -4 5 -13 14 -23 19 -23 10 0 51 79 51 99 0 7 7 10 18 7 12 -4 26 1 37\r
14 10 11 38 29 64 42 25 12 48 25 51 28 12 17 53 31 68 24 9 -4 37 -10 62 -14\r
25 -5 55 -11 66 -15 16 -5 31 2 57 24 19 17 42 31 51 31 9 0 16 7 16 15 0 8 7\r
15 16 15 8 0 13 -4 10 -9z m502 -38 c-5 -25 -28 -28 -28 -4 0 12 6 21 16 21 9\r
0 14 -7 12 -17z m-1428 -138 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15\r
4 15 6 0 10 -7 10 -15z m-2074 -17 c-3 -13 -6 -29 -6 -35 0 -7 -4 -13 -10 -13\r
-11 0 -13 30 -4 54 9 25 27 19 20 -6z m-21 -110 c-11 -55 -24 -161 -24 -201\r
-1 -30 3 -40 18 -44 20 -5 31 -46 31 -115 0 -20 5 -40 10 -43 13 -8 13 -75 0\r
-75 -22 0 -55 118 -46 168 4 29 2 43 -9 52 -12 10 -15 9 -15 -8 0 -27 -10 -52\r
-21 -52 -13 0 2 180 18 210 7 14 13 42 13 63 0 36 14 77 26 77 3 0 2 -15 -1\r
-32z m-90 -191 c0 -39 -19 -38 -23 2 -3 24 0 32 10 29 7 -3 13 -17 13 -31z\r
m-50 -279 c4 -29 3 -48 -2 -48 -11 0 -31 80 -25 99 7 22 20 -2 27 -51z m4422\r
-130 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-2 -102 c-3 -33\r
-11 -66 -17 -73 -5 -7 -9 -25 -8 -40 3 -41 -11 -94 -24 -90 -6 3 -9 11 -7 18\r
2 8 8 39 13 69 4 30 11 69 14 85 3 17 8 47 11 67 9 65 26 31 18 -36z m-3945\r
-305 c0 -9 4 -21 9 -26 15 -17 23 -55 11 -55 -6 0 -13 14 -17 30 -3 17 -10 33\r
-14 36 -5 3 -9 14 -9 25 0 11 5 17 10 14 6 -3 10 -14 10 -24z m3906 -17 c-2\r
-14 -9 -32 -18 -40 -13 -13 -16 -12 -28 10 -10 21 -11 28 0 41 21 25 49 19 46\r
-11z m64 -173 c0 -6 -4 -13 -10 -16 -16 -10 -12 -55 6 -62 12 -4 14 -14 9 -43\r
-5 -27 -2 -40 9 -50 18 -14 21 -46 6 -55 -5 -3 -10 -15 -10 -26 0 -11 -7 -22\r
-15 -26 -9 -3 -15 -13 -14 -22 3 -36 -2 -60 -16 -75 -8 -8 -15 -19 -15 -25 0\r
-5 -5 -13 -12 -17 -8 -5 -10 9 -6 53 6 67 2 79 -27 84 -29 6 -30 34 0 72 21\r
29 26 47 29 114 2 44 6 85 10 92 9 13 56 15 56 2z m-4080 -17 c0 -8 -4 -12\r
-10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m-21 -456 c0 -28\r
-2 -30 -9 -13 -12 28 -12 45 0 45 6 0 10 -15 9 -32z m4301 -470 c0 -18 5 -47\r
12 -65 9 -25 9 -36 0 -45 -17 -17 -19 -12 -27 76 -5 56 -4 76 4 72 6 -4 11\r
-21 11 -38z m-4583 -215 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z\r
m273 -123 c59 -69 80 -87 113 -96 44 -11 68 -42 82 -103 4 -18 13 -44 21 -59\r
8 -15 14 -37 14 -49 0 -12 4 -24 9 -27 5 -3 12 -17 15 -31 6 -23 64 -157 85\r
-195 5 -9 12 -30 16 -48 6 -31 5 -32 -24 -32 -17 0 -47 8 -68 17 -45 21 -133\r
106 -133 129 0 8 -7 22 -16 31 -8 9 -14 25 -12 37 3 24 -114 216 -132 216 -5\r
0 -10 11 -10 25 0 14 -4 25 -10 25 -5 0 -10 8 -10 18 0 10 -6 26 -14 37 -7 11\r
-17 35 -21 54 -8 38 3 144 14 139 5 -2 41 -41 81 -88z m4153 15 c-3 -9 -8 -14\r
-10 -11 -3 3 -2 9 2 15 9 16 15 13 8 -4z m-60 -110 c-15 -25 -31 -45 -35 -45\r
-13 0 -9 17 6 29 8 7 22 29 32 49 9 20 19 31 22 24 2 -7 -9 -32 -25 -57z m197\r
39 c0 -38 -21 -166 -30 -189 -5 -11 -12 -39 -15 -62 -4 -26 -12 -43 -20 -43\r
-8 0 -21 -10 -29 -22 -9 -12 -19 -19 -22 -15 -11 10 15 86 42 126 13 20 24 44\r
24 53 0 10 6 27 12 38 10 15 10 27 1 50 -10 25 -9 36 5 60 21 37 32 38 32 4z\r
m-360 -94 c0 -13 -7 -20 -19 -20 -16 0 -20 -8 -23 -42 -4 -52 -31 -61 -36 -12\r
-2 22 5 40 23 63 30 35 55 40 55 11z m270 -35 c0 -3 -13 -26 -29 -51 -19 -31\r
-31 -42 -36 -34 -4 7 3 22 19 36 14 14 26 31 26 39 0 8 5 15 10 15 6 0 10 -2\r
10 -5z m-369 -93 c5 -14 3 -26 -6 -36 -11 -10 -12 -22 -5 -47 13 -44 13 -89 0\r
-89 -5 0 -10 -20 -10 -44 0 -24 -3 -58 -6 -75 -5 -26 -9 -29 -21 -20 -23 20\r
-40 -5 -24 -35 10 -18 10 -29 2 -45 -21 -39 -61 -19 -61 31 0 15 -4 28 -10 28\r
-5 0 -12 15 -16 34 -7 41 13 105 39 125 10 7 16 19 13 26 -2 7 6 23 20 36 30\r
28 33 63 4 54 -41 -13 -19 36 30 69 30 19 40 17 51 -12z m294 -12 c7 -11 -10\r
-45 -36 -74 -19 -20 -19 -20 -19 3 0 24 29 81 42 81 4 0 10 -4 13 -10z m115\r
-216 c-18 -52 -25 -33 -9 23 7 27 15 40 17 30 2 -9 -2 -33 -8 -53z m-4301 -77\r
c0 -7 -7 -28 -14 -47 l-13 -35 -1 35 c-1 19 -4 46 -8 59 -5 21 -4 22 16 12 11\r
-7 21 -17 20 -24z m4281 24 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16\r
10 16 6 0 10 -4 10 -9z m-4125 -181 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6\r
2 10 4 10 3 0 8 -4 11 -10z m-67 -41 c5 -25 -48 -92 -110 -141 -60 -48 -78\r
-52 -78 -19 0 22 19 41 43 41 25 0 95 72 109 111 10 30 31 35 36 8z m-848 -11\r
c-1 -2 -7 -27 -13 -57 -12 -49 -14 -52 -29 -38 -24 25 -34 3 -33 -75 0 -73 -6\r
-84 -24 -40 -8 20 -9 36 -2 54 5 14 7 28 4 31 -3 3 -2 19 2 36 4 20 11 28 20\r
24 9 -3 21 8 32 31 9 20 23 36 30 36 7 0 13 -1 13 -2z m5448 -99 c2 -12 -5\r
-17 -25 -17 -28 0 -46 15 -36 31 9 14 58 3 61 -14z m196 -4 c19 -20 30 -24 54\r
-19 24 5 31 2 35 -12 4 -15 2 -102 -2 -111 -1 -3 -69 24 -98 39 -17 8 -23 20\r
-23 45 0 18 -4 33 -10 33 -5 0 -10 11 -10 25 0 33 24 33 54 0z m-5249 -16 c4\r
-11 4 -23 1 -26 -8 -9 -36 17 -36 33 0 22 28 16 35 -7z m-75 -26 c0 -24 -25\r
-9 -28 17 -3 21 -2 22 12 11 9 -7 16 -20 16 -28z m5581 1 c10 -12 25 -14 73\r
-9 55 6 62 4 74 -15 17 -28 6 -43 -29 -36 -22 4 -31 1 -39 -14 -15 -27 -36\r
-25 -56 5 -9 14 -25 25 -37 25 -18 0 -19 -4 -13 -46 7 -51 8 -51 -56 -9 -41\r
27 -46 33 -41 60 8 42 18 50 48 37 20 -9 27 -9 37 3 17 18 23 18 39 -1z\r
m-5632 -37 c24 -49 25 -57 11 -57 -10 0 -50 71 -50 90 0 24 20 7 39 -33z m530\r
-25 c-2 -10 1 -41 5 -70 8 -55 -4 -88 -30 -78 -7 3 -18 -2 -24 -10 -16 -18 1\r
-41 33 -46 17 -2 22 -9 21 -33 -1 -16 -4 -86 -7 -155 -4 -73 -10 -126 -17\r
-128 -5 -2 -10 -16 -10 -31 0 -68 -34 -25 -45 56 -9 69 -35 128 -55 128 -28 0\r
-34 -32 -21 -112 7 -43 12 -87 11 -98 -1 -39 -6 -80 -11 -95 -38 -104 -48\r
-160 -29 -160 6 0 10 -9 10 -19 0 -11 -4 -23 -10 -26 -5 -3 -10 -27 -10 -53\r
-1 -26 -9 -65 -20 -87 -11 -22 -19 -51 -20 -64 0 -13 -11 -39 -26 -58 -20 -27\r
-32 -33 -63 -33 -38 0 -91 19 -91 33 0 4 18 7 39 7 52 0 58 13 16 33 -38 18\r
-44 31 -20 41 11 4 15 20 15 55 0 40 4 51 19 56 16 5 19 12 14 41 -4 24 -1 40\r
10 52 10 11 13 23 8 31 -11 17 6 72 28 89 13 11 13 16 2 33 -25 42 -21 100 11\r
153 18 31 27 54 22 65 -4 9 -8 43 -10 76 -2 33 -5 72 -8 87 -6 33 23 58 66 58\r
30 0 40 26 13 36 -19 8 -19 41 0 74 8 14 14 41 15 61 0 51 19 70 91 94 69 23\r
81 22 78 -3z m-530 -112 c6 0 11 -4 11 -10 0 -5 -7 -10 -15 -10 -21 0 -75 28\r
-75 39 0 4 -12 13 -26 20 -21 9 -24 14 -14 26 11 13 19 9 60 -25 26 -22 53\r
-40 59 -40z m-59 -84 c0 -17 -32 -15 -38 2 -2 7 6 12 17 12 12 0 21 -6 21 -14z\r
m90 -66 c0 -5 -9 -14 -20 -20 -11 -6 -20 -19 -20 -29 0 -21 -40 -51 -67 -51\r
-10 0 -29 7 -41 16 -19 13 -21 19 -11 30 9 11 9 18 1 26 -20 20 -13 26 26 21\r
20 -2 48 0 62 6 32 13 70 14 70 1z m5287 -198 c10 -10 39 -33 64 -50 26 -17\r
49 -38 52 -47 8 -20 37 -20 37 0 0 9 -12 33 -26 55 -35 52 -25 63 12 14 26\r
-34 29 -44 26 -106 -2 -57 0 -68 13 -68 18 0 45 57 45 95 0 45 28 29 38 -22\r
12 -60 1 -344 -13 -341 -5 2 -9 7 -7 12 6 18 -20 55 -35 49 -18 -7 -40 22 -48\r
64 -10 55 -45 48 -45 -10 0 -16 -3 -18 -12 -9 -8 8 -9 18 -1 35 9 18 7 36 -5\r
75 -32 97 -64 96 -57 -1 4 -57 4 -59 -6 -22 -35 136 -38 147 -54 147 -21 0\r
-30 -31 -18 -62 11 -29 10 -32 -14 -41 -30 -11 -43 -5 -43 24 0 12 -8 31 -16\r
42 -14 19 -16 19 -28 3 -10 -13 -15 -15 -24 -6 -9 9 -15 9 -24 0 -18 -18 -25\r
-15 -31 17 -4 17 -14 30 -26 34 -12 3 -21 12 -21 20 0 12 8 14 35 10 32 -5 35\r
-3 35 17 0 13 -7 31 -16 41 -23 25 -11 35 42 38 26 0 50 3 52 6 3 3 27 5 53 5\r
34 0 54 -6 66 -18z m375 -49 c10 -9 18 -20 18 -25 0 -5 11 -24 24 -41 13 -18\r
30 -51 36 -74 7 -23 28 -56 46 -74 19 -18 34 -39 34 -46 0 -7 7 -10 15 -7 17\r
7 21 79 5 89 -14 8 -13 85 1 85 6 0 9 -6 6 -12 -2 -7 0 -21 5 -31 5 -10 11\r
-43 13 -72 4 -67 11 -78 41 -71 25 7 30 -6 24 -57 -2 -23 18 -47 38 -47 9 0\r
26 -10 40 -22 13 -13 31 -23 40 -23 9 0 16 -6 14 -13 -4 -20 26 -26 43 -8 25\r
25 35 19 19 -11 -18 -36 -18 -83 0 -83 7 0 27 26 42 57 32 63 44 50 20 -22\r
-27 -77 -16 -97 31 -53 13 12 25 20 27 17 11 -10 -22 -111 -42 -131 -19 -19\r
-25 -21 -42 -10 -11 6 -29 12 -41 12 -18 0 -20 4 -15 26 11 41 -25 27 -47 -18\r
-21 -42 -44 -50 -49 -17 -4 30 -35 49 -48 29 -5 -8 -10 -12 -12 -10 -19 31\r
-28 55 -28 81 0 22 -5 32 -20 36 -16 4 -20 14 -20 49 0 23 -5 46 -10 49 -7 4\r
-7 12 0 25 14 27 13 63 -2 58 -7 -3 -18 -15 -25 -28 -11 -22 -13 -23 -19 -6\r
-4 10 -2 27 5 37 8 15 8 24 0 42 -7 12 -15 29 -19 37 -4 8 -15 17 -25 19 -15\r
2 -16 -1 -10 -20 13 -39 18 -140 7 -151 -6 -6 -17 6 -30 33 -23 46 -21 62 6\r
52 10 -5 6 4 -11 21 -31 30 -47 27 -47 -10 0 -43 -25 -21 -30 26 -5 44 -30 70\r
-30 31 0 -11 -5 -23 -10 -26 -15 -9 -25 24 -11 38 13 13 15 53 3 61 -4 2 -7\r
28 -5 58 1 47 4 53 22 51 24 -3 33 25 15 47 -15 19 -29 70 -18 70 4 0 16 -7\r
26 -17z m-5812 -117 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6\r
0 10 -2 10 -4z m50 -56 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m4610 -66 c0 -38 21 -58 50 -49 14 4 28 1 41 -11 16 -14\r
23 -15 45 -6 33 16 31 17 39 -20 17 -81 -4 -218 -43 -273 -12 -18 -13 -15 -8\r
30 3 28 8 67 12 88 6 34 4 39 -12 35 -14 -2 -21 -16 -27 -53 -8 -49 -21 -75\r
-38 -75 -12 0 -11 41 0 59 12 19 -39 122 -59 120 -32 -3 -40 2 -40 21 0 24\r
-13 26 -30 5 -7 -8 -18 -15 -24 -15 -6 0 -17 -9 -24 -20 -7 -11 -19 -20 -27\r
-20 -18 0 -19 -5 6 60 12 30 23 65 26 78 7 31 20 36 33 12 6 -11 17 -20 25\r
-20 17 0 20 35 5 45 -15 9 -12 36 7 57 16 18 18 18 30 2 7 -10 13 -32 13 -50z\r
m-4545 16 c-21 -21 -32 -27 -39 -19 -13 12 26 49 52 49 11 0 8 -8 -13 -30z\r
m4355 5 c16 -19 9 -121 -10 -138 -8 -7 -14 -8 -16 -2 -15 37 -23 40 -51 24\r
-15 -10 -32 -26 -37 -36 -13 -28 -73 -66 -91 -59 -17 6 -21 46 -4 46 6 0 20\r
12 31 26 11 14 27 23 34 20 19 -7 40 32 25 47 -15 15 -14 52 2 65 11 9 41 16\r
88 21 9 0 22 -6 29 -14z m-3668 -21 c7 -6 -39 -54 -52 -54 -16 0 -11 19 10 40\r
20 20 32 24 42 14z m-627 -34 c5 -9 -30 -100 -39 -100 -3 0 -11 3 -20 6 -20 8\r
-11 50 17 82 22 24 33 27 42 12z m4735 -164 c0 -30 16 -42 35 -26 12 10 16 9\r
21 -4 4 -10 16 -16 28 -15 43 3 46 0 46 -45 0 -26 6 -48 15 -56 8 -7 15 -28\r
15 -46 0 -36 25 -49 36 -19 9 23 24 18 24 -9 0 -42 -55 -146 -77 -146 -7 0\r
-19 14 -28 30 -19 36 -19 36 -45 8 -11 -12 -22 -19 -25 -16 -6 6 14 45 59 116\r
14 22 22 43 19 46 -14 13 -31 5 -37 -18 -3 -13 -18 -32 -33 -41 -16 -10 -41\r
-33 -56 -51 -31 -37 -45 -42 -53 -19 -4 9 4 25 19 39 19 18 26 34 26 62 0 22\r
4 53 9 69 12 39 5 60 -14 44 -8 -6 -14 -20 -14 -30 0 -10 -4 -21 -10 -24 -9\r
-6 -9 11 6 133 6 46 34 61 34 18z m-1063 -63 c-16 -16 -17 -16 -17 3 0 11 3\r
24 7 28 4 3 11 2 17 -4 7 -7 5 -16 -7 -27z m18 -103 c-3 -5 -11 -10 -16 -10\r
-6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m-2678 -6 c-8 -8 -139 -23\r
-150 -17 -22 13 13 23 80 23 42 0 74 -3 70 -6z m-177 -20 c0 -2 -15 -4 -32 -3\r
-27 0 -29 2 -13 8 18 8 45 4 45 -5z m2820 2 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1\r
-10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-2720 -42 c-53 -16 -70 -17 -70 -5 0\r
9 36 17 90 19 16 0 8 -5 -20 -14z m5310 -4 c0 -5 -4 -10 -10 -10 -5 0 -10 5\r
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-6117 -17 c48 -5 57 -13 34 -31 -9\r
-8 -27 -7 -62 5 -28 9 -56 18 -63 20 -7 1 -10 8 -7 14 4 6 16 8 29 4 11 -4 42\r
-10 69 -12z m4927 -11 c0 -10 -5 -23 -11 -29 -12 -12 -3 -53 10 -53 5 0 21 16\r
36 35 21 29 30 34 41 24 11 -9 22 -8 48 5 45 21 51 20 64 -8 8 -18 16 -23 31\r
-19 19 5 21 1 21 -37 0 -40 1 -42 26 -36 l26 7 -7 -58 c-4 -32 -13 -65 -20\r
-73 -7 -8 -17 -33 -20 -55 -9 -46 -19 -69 -43 -93 -9 -10 -27 -30 -39 -45 -24\r
-31 -43 -29 -43 4 0 25 -30 37 -41 17 -17 -31 -48 -63 -54 -57 -3 4 -7 35 -8\r
70 -2 58 -4 64 -26 69 -38 9 -47 32 -29 78 16 42 14 54 -14 65 -20 7 -24 32\r
-8 42 13 8 13 52 -1 61 -8 4 -8 9 0 17 6 6 11 17 11 23 0 7 4 24 10 38 11 30\r
40 35 40 8z m-4085 -22 c-20 -22 -10 -44 27 -56 16 -5 19 -12 14 -38 -5 -25\r
-2 -37 14 -51 11 -10 20 -26 20 -35 0 -10 7 -20 15 -24 26 -10 16 -45 -25 -90\r
-32 -35 -40 -49 -35 -68 4 -16 1 -29 -9 -37 -23 -20 -19 -36 11 -50 27 -12 27\r
-13 8 -27 -10 -8 -28 -14 -39 -14 -16 0 -80 -18 -94 -26 -2 -1 2 -12 8 -24 10\r
-18 8 -26 -9 -44 -27 -28 -26 -34 3 -46 19 -7 26 -19 31 -54 6 -37 12 -48 36\r
-58 39 -17 37 -29 -13 -55 -34 -17 -56 -21 -103 -19 -33 2 -67 6 -75 9 -8 3\r
-42 10 -74 16 -60 11 -78 23 -69 46 2 7 -10 23 -26 35 -35 24 -40 40 -13 40\r
27 0 74 54 70 80 -2 16 5 27 27 39 17 9 48 36 71 61 37 41 41 49 39 95 -2 28\r
-6 62 -10 78 -5 17 -3 27 4 27 11 0 61 90 61 110 0 5 -8 10 -19 10 -14 0 -17\r
6 -14 24 3 13 0 27 -6 30 -6 4 -11 20 -11 35 0 42 38 71 104 80 31 4 59 11 63\r
14 3 4 13 7 21 7 12 0 12 -4 -3 -20z m5251 -35 c-13 -54 -27 -60 -20 -7 8 51\r
12 64 22 58 5 -3 4 -26 -2 -51z m-6142 17 c12 -6 29 -13 39 -16 24 -8 21 -33\r
-5 -40 -39 -10 -96 -7 -110 7 -7 7 -25 20 -40 30 -16 10 -28 21 -28 26 0 11\r
118 5 144 -7z m-524 -94 c0 -70 -2 -79 -15 -68 -11 9 -15 32 -15 80 0 36 3 70\r
6 73 17 16 24 -11 24 -85z m427 26 c23 -10 44 -24 47 -31 9 -22 -19 -43 -67\r
-49 -45 -6 -50 -5 -82 26 -46 45 -42 72 8 49 33 -15 46 -5 24 19 -26 29 -21\r
49 6 25 12 -11 41 -29 64 -39z m-372 -61 c4 -37 3 -63 -2 -63 -5 0 -10 6 -11\r
13 -12 92 -13 131 -4 122 5 -5 13 -38 17 -72z m115 17 c0 -49 -12 -52 -28 -7\r
-16 44 -15 47 8 47 17 0 20 -7 20 -40z m5705 -13 c-3 -12 -1 -29 4 -37 8 -12\r
13 -12 30 4 21 19 21 19 21 -36 0 -63 -18 -105 -51 -122 -12 -6 -32 -29 -45\r
-51 -13 -25 -30 -41 -44 -43 -22 -4 -22 -1 -17 45 11 85 32 162 50 183 9 11\r
17 27 17 36 0 24 20 55 31 49 5 -4 7 -16 4 -28z m-5766 -19 c1 -5 -3 -8 -9 -8\r
-5 0 -10 12 -9 28 0 24 1 25 9 7 5 -11 9 -23 9 -27z m6551 -17 c0 -5 -7 -14\r
-15 -21 -16 -14 -18 -10 -9 14 6 17 24 22 24 7z m49 -60 c8 -13 5 -28 -9 -56\r
l-19 -38 -11 27 c-5 15 -14 25 -18 22 -4 -2 -14 0 -22 5 -13 8 -13 11 0 18 8\r
6 24 17 35 25 26 20 32 20 44 -3z m-6319 -11 c0 -5 -4 -10 -10 -10 -5 0 -10 5\r
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m5677 -132 c-5 -79 -10 -96 -51 -174\r
-25 -48 -46 -92 -46 -97 0 -5 -9 -25 -21 -44 -20 -31 -22 -33 -35 -16 -17 23\r
-17 77 0 126 8 21 12 55 9 75 -3 20 0 48 5 62 5 14 9 27 8 30 0 3 9 19 22 37\r
12 17 22 35 22 40 0 4 14 23 31 41 26 28 33 31 46 20 13 -10 15 -29 10 -100z\r
m-6038 23 c19 -12 6 -43 -29 -69 -17 -13 -30 -29 -30 -36 0 -8 -7 -16 -15 -20\r
-8 -3 -15 -11 -15 -17 0 -17 47 -2 84 26 38 29 120 65 148 65 19 0 47 -25 48\r
-41 0 -4 -12 -9 -27 -12 -106 -20 -113 -24 -218 -119 -54 -48 -69 -40 -69 40\r
0 51 5 66 32 103 18 24 32 53 32 66 0 17 6 23 23 23 12 0 28 -4 36 -9z m5909\r
-13 c2 -9 -5 -19 -16 -22 -10 -4 -29 -24 -41 -46 -12 -22 -27 -40 -32 -40 -11\r
0 20 62 34 68 4 2 7 14 7 27 0 35 42 46 48 13z m-588 2 c0 -5 -4 -10 -10 -10\r
-5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-5458 -100 c-17 -16 -29\r
-40 -46 -94 -11 -33 -19 -8 -12 38 9 57 42 102 62 85 13 -10 12 -14 -4 -29z\r
m6241 -12 c-3 -29 -9 -69 -13 -88 -23 -92 -29 -113 -39 -123 -6 -6 -11 -17\r
-11 -25 0 -17 -90 -142 -102 -142 -14 0 -9 47 7 60 9 7 15 29 15 55 0 29 6 47\r
20 60 11 10 20 28 20 39 0 12 11 41 25 65 14 23 25 51 25 60 0 9 7 26 15 37 8\r
10 15 27 15 37 0 9 6 17 14 17 10 0 12 -13 9 -52z m177 -43 c0 -8 -2 -15 -4\r
-15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10 -7 10 -15z m-6032 -27 c9 -9 15\r
-9 24 0 17 17 68 15 90 -5 34 -31 17 -71 -29 -65 -11 2 -24 -2 -28 -7 -3 -6\r
-26 -11 -51 -11 -30 0 -46 -5 -50 -15 -4 -8 -16 -15 -29 -15 -12 0 -32 -9 -45\r
-20 -54 -47 -42 64 14 128 22 25 83 31 104 10z m486 -70 c-2 -106 -1 -103 -19\r
-88 -12 10 -15 10 -15 -4 0 -9 7 -16 15 -16 8 0 15 -6 15 -14 0 -7 -7 -19 -15\r
-26 -8 -7 -15 -20 -15 -29 -1 -16 -33 -61 -44 -61 -12 0 -5 66 10 95 9 17 18\r
48 20 69 3 22 9 47 15 57 5 10 9 27 9 39 0 18 16 60 23 60 2 0 2 -37 1 -82z\r
m5626 18 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10\r
-4z m50 -65 c0 -14 -48 -49 -86 -63 -19 -6 -34 -16 -34 -20 0 -4 -4 -8 -10 -8\r
-5 0 -10 11 -10 24 0 18 11 29 48 49 48 26 92 34 92 18z m-5830 -91 c0 -11 -3\r
-20 -8 -20 -4 0 -12 -10 -17 -22 -9 -20 -72 -44 -84 -32 -8 8 23 35 35 30 15\r
-6 37 18 26 28 -7 8 24 36 40 36 4 0 8 -9 8 -20z m5885 -20 c5 -21 0 -43 -14\r
-73 -12 -24 -21 -46 -21 -49 0 -16 35 -15 68 2 20 11 42 20 49 20 7 0 29 11\r
49 25 45 31 64 22 30 -14 -14 -15 -26 -32 -26 -37 0 -14 -117 -127 -148 -143\r
-19 -10 -22 -18 -18 -37 8 -31 -26 -63 -67 -64 -23 0 -29 5 -34 30 -3 17 -10\r
33 -14 36 -5 3 -9 20 -9 37 0 18 -6 41 -13 52 -27 41 -13 105 22 105 17 0 23\r
20 11 34 -6 8 -21 12 -33 9 -22 -4 -22 -4 -2 12 11 9 32 19 48 22 15 3 27 9\r
27 14 0 5 6 9 13 9 8 0 22 9 32 20 26 28 42 25 50 -10z m-6005 -49 c0 -12 -20\r
-25 -27 -18 -7 7 6 27 18 27 5 0 9 -4 9 -9z m622 -2 c12 -6 64 -14 116 -18 57\r
-3 97 -11 99 -17 4 -12 -42 -25 -52 -15 -4 3 -23 6 -43 7 -90 4 -184 25 -190\r
42 -5 15 42 16 70 1z m4946 4 c-24 -49 -32 -63 -40 -63 -4 0 -8 3 -8 6 0 12\r
35 64 43 64 5 0 7 -3 5 -7z m-5528 -30 c0 -15 -88 -103 -102 -103 -8 0 -21\r
-16 -28 -36 -8 -20 -22 -40 -32 -45 -25 -14 -80 -10 -102 6 -29 22 -66 19 -66\r
-5 0 -17 -3 -18 -26 -10 -41 16 -64 12 -64 -10 0 -24 -13 -26 -30 -5 -16 20\r
-39 19 -62 -2 -17 -15 -19 -15 -36 0 -10 10 -24 17 -30 17 -12 0 -82 87 -82\r
101 0 5 20 6 44 3 43 -6 44 -6 56 30 6 20 18 36 25 36 8 0 44 -16 82 -35 37\r
-19 78 -35 90 -35 12 0 37 13 56 29 25 23 46 31 85 34 28 2 58 10 67 17 11 9\r
15 9 15 1 0 -42 68 -52 85 -13 5 12 16 20 22 17 7 -2 13 0 13 5 0 6 5 10 10\r
10 6 0 10 -3 10 -7z m134 -69 c4 -9 4 -19 1 -22 -6 -6 -35 18 -35 29 0 16 28\r
10 34 -7z m489 -22 c15 -2 27 -9 27 -14 0 -6 -10 -8 -22 -4 -13 3 -33 6 -45 6\r
-14 0 -23 6 -23 16 0 12 5 14 18 9 9 -4 29 -10 45 -13z m-573 -63 c0 -18 -20\r
-26 -33 -13 -8 8 15 44 25 38 4 -3 8 -14 8 -25z m504 -49 c8 -10 1 -11 -34 -6\r
-61 9 -81 30 -21 23 24 -3 49 -11 55 -17z m-604 -9 c0 -11 -31 -24 -39 -16 -3\r
3 1 10 9 15 19 12 30 12 30 1z m812 -13 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12\r
19 0 21 -3 12 -12z m-289 -22 c15 -3 72 -8 125 -11 101 -7 112 -10 96 -24 -7\r
-7 -152 2 -204 13 -8 2 -32 6 -53 11 -20 4 -40 12 -43 17 -4 6 4 8 22 4 16 -3\r
42 -8 57 -10z m-647 -59 c3 -18 10 -36 14 -42 4 -5 10 -26 13 -45 6 -32 6 -34\r
-8 -16 -8 11 -15 27 -15 36 0 9 -11 27 -25 40 -24 22 -33 59 -18 73 11 12 31\r
-13 39 -46z m5481 -37 c73 3 75 2 71 -22 -2 -19 -8 -22 -33 -20 -70 7 -133 41\r
-119 64 5 7 12 5 20 -6 9 -13 25 -17 61 -16z m-5697 -38 c1 -9 15 -26 32 -37\r
35 -22 72 -85 82 -138 4 -19 20 -52 36 -72 38 -48 38 -65 2 -65 -42 0 -107 52\r
-142 112 -27 48 -30 61 -30 141 0 56 4 86 10 82 6 -3 10 -14 10 -23z`}),l.createElement("path",{d:`M7265 7269 c-8 -12 23 -49 42 -49 16 0 17 14 3 41 -12 21 -35 25 -45\r
8z`}),l.createElement("path",{d:`M4861 6326 c-7 -8 -20 -14 -29 -14 -50 3 -240 -154 -287 -238 -18\r
-31 -15 -64 5 -64 6 0 25 24 44 53 32 50 124 140 142 140 5 -1 18 6 29 13 11\r
8 33 14 49 14 16 0 46 5 67 11 36 11 44 9 136 -37 54 -27 114 -60 133 -74 70\r
-50 72 -51 147 -74 99 -31 133 -21 133 39 0 22 -41 65 -62 65 -5 0 -24 11 -41\r
24 -18 14 -44 28 -60 31 -15 4 -31 13 -35 20 -4 7 -36 23 -72 35 -66 21 -121\r
43 -152 60 -28 16 -134 12 -147 -4z`}),l.createElement("path",{d:`M6832 6229 c-24 -5 -57 -15 -74 -24 -17 -8 -38 -15 -47 -15 -9 0 -29\r
-7 -45 -15 -16 -8 -54 -23 -85 -31 -31 -9 -84 -30 -118 -46 -68 -32 -78 -51\r
-43 -83 25 -22 119 -17 145 8 9 9 25 17 36 17 11 0 27 4 37 9 26 15 153 51\r
177 51 11 0 26 5 32 11 16 16 132 14 193 -5 75 -22 134 -81 180 -180 28 -61\r
39 -76 58 -76 19 0 22 5 22 34 0 19 -4 37 -9 40 -5 3 -12 17 -15 32 -13 51\r
-147 232 -174 233 -7 1 -25 7 -40 15 -15 8 -61 17 -102 21 -41 4 -77 8 -80 9\r
-3 2 -24 -1 -48 -5z`}),l.createElement("path",{d:`M6387 5852 c-10 -10 -17 -23 -17 -29 0 -6 -4 -13 -9 -15 -11 -4 -91\r
-158 -91 -175 0 -8 -10 -30 -23 -51 -13 -20 -26 -45 -30 -54 -3 -10 -11 -18\r
-16 -18 -5 0 -13 -14 -16 -32 -4 -17 -18 -51 -31 -76 -28 -53 -30 -83 -8 -117\r
13 -20 19 -22 35 -12 12 7 19 23 19 42 0 36 16 55 46 55 13 0 36 17 58 43 51\r
59 53 61 61 88 4 13 18 38 31 56 35 46 32 73 -7 73 -31 0 -32 0 -27 44 4 30\r
19 65 47 107 32 48 39 65 30 75 -16 19 -33 17 -52 -4z`}),l.createElement("path",{d:`M5423 5794 c-3 -8 4 -25 17 -39 29 -31 18 -44 -19 -22 -21 12 -31 13\r
-39 5 -16 -16 -15 -43 3 -58 8 -7 15 -22 15 -34 0 -12 12 -29 30 -41 16 -11\r
30 -23 30 -27 0 -5 5 -8 11 -8 6 0 22 -9 36 -20 14 -11 34 -20 45 -20 12 0 24\r
-13 35 -37 27 -61 42 -74 64 -60 24 15 24 22 -3 77 -30 63 -29 62 -65 110 -18\r
24 -33 55 -33 70 0 16 -11 37 -30 55 -16 16 -30 34 -30 41 0 25 -57 33 -67 8z`}),l.createElement("path",{d:`M5140 5666 c0 -13 16 -41 35 -62 33 -36 35 -40 18 -52 -25 -18 -84\r
-10 -121 18 -21 16 -39 21 -58 17 -15 -3 -39 -1 -52 4 -17 6 -29 6 -38 -2 -11\r
-9 -19 -8 -34 6 -17 15 -24 16 -46 6 -25 -11 -26 -11 -19 19 10 43 -7 61 -47\r
49 -21 -6 -45 -5 -70 3 -43 13 -68 0 -68 -36 0 -12 -18 -38 -40 -59 -45 -42\r
-50 -61 -20 -77 11 -6 18 -16 14 -21 -4 -6 -13 -4 -25 7 -21 19 -49 12 -49\r
-13 0 -14 -5 -12 -23 11 -21 26 -25 27 -45 15 -12 -8 -22 -17 -22 -20 0 -19\r
88 -102 126 -119 24 -11 44 -23 44 -26 0 -3 -16 -12 -36 -20 -52 -22 -43 -49\r
16 -49 25 0 53 -4 63 -9 10 -5 36 -5 59 -2 28 5 47 2 63 -8 14 -9 27 -11 36\r
-5 20 12 95 11 163 -2 62 -13 106 -2 106 26 0 12 8 14 43 9 23 -4 44 -7 47 -7\r
16 -3 50 16 50 27 0 24 -27 39 -49 26 -15 -8 -26 -7 -41 2 -30 19 -24 28 20\r
28 33 0 40 3 40 20 0 11 -7 20 -15 20 -8 0 -15 9 -15 19 0 34 69 68 84 42 3\r
-5 -1 -22 -9 -37 -8 -16 -15 -40 -15 -53 0 -20 3 -22 27 -16 16 4 28 7 28 8 0\r
1 9 12 19 25 18 21 18 23 1 42 -10 11 -14 20 -9 20 17 0 34 -23 34 -46 0 -37\r
24 -47 49 -20 21 22 24 23 52 9 32 -16 35 -23 17 -42 -19 -18 36 -64 65 -55\r
30 8 57 41 57 68 0 23 -47 76 -68 76 -7 0 -29 9 -49 20 -21 11 -45 20 -54 20\r
-9 0 -22 7 -29 15 -7 8 -16 15 -20 15 -5 0 -31 15 -59 33 -38 26 -48 36 -39\r
45 7 7 18 12 25 12 19 0 16 34 -4 52 -21 17 -86 48 -102 48 -6 0 -11 -11 -11\r
-24z m-408 -111 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2\r
11 -8 11 -13z m-62 -46 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6\r
-3 10 -10 10 -16z m223 -111 c4 -28 11 -56 17 -62 34 -34 -17 -35 -70 -1 -47\r
30 -50 49 -13 87 42 44 59 37 66 -24z`}),l.createElement("path",{d:`M6610 5565 c-44 -16 -54 -40 -14 -33 16 3 40 2 54 -2 l25 -8 -27 -1\r
c-24 -1 -28 -5 -28 -31 0 -33 -4 -36 -68 -43 l-44 -5 23 24 c32 34 13 49 -29\r
24 -35 -21 -41 -37 -17 -46 12 -5 11 -9 -8 -23 -12 -10 -29 -21 -37 -25 -58\r
-28 -97 -56 -113 -83 -17 -31 -17 -31 6 -59 21 -24 32 -28 89 -30 79 -4 98 14\r
42 41 -19 9 -34 21 -34 28 1 16 77 70 90 62 5 -3 13 -24 16 -45 10 -65 38 -81\r
148 -89 52 -4 102 -13 110 -20 9 -8 26 -11 40 -7 14 3 28 2 31 -4 3 -5 1 -10\r
-4 -10 -6 0 -11 -6 -11 -12 0 -18 48 -38 90 -38 19 0 51 -5 70 -10 29 -8 39\r
-7 61 9 22 16 27 17 44 5 10 -8 36 -14 57 -14 38 0 39 0 24 22 -20 28 -20 48\r
-3 48 18 0 75 29 99 49 23 20 23 41 0 41 -26 0 -45 45 -30 69 18 30 -7 54 -49\r
48 -28 -5 -33 -3 -33 14 0 14 -7 19 -30 19 -20 0 -30 5 -30 15 0 10 -10 15\r
-30 15 -24 0 -35 7 -48 29 -13 23 -25 30 -61 34 -26 3 -48 11 -53 21 -13 23\r
-63 20 -87 -6 -20 -21 -21 -21 -40 -4 -24 22 -41 13 -41 -20 0 -42 -19 -26\r
-22 19 l-3 42 -45 2 c-25 0 -61 -5 -80 -12z m354 -120 c-6 -16 -34 -21 -34 -7\r
0 13 11 22 26 22 8 0 11 -6 8 -15z m-154 -117 c-1 -14 -49 -53 -56 -46 -6 7\r
35 58 47 58 5 0 9 -6 9 -12z m174 -37 c22 -24 8 -56 -28 -65 -25 -6 -60 2 -53\r
13 2 3 10 21 17 39 16 36 39 41 64 13z`}),l.createElement("path",{d:`M4060 5241 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0\r
-10 -4 -10 -9z`}),l.createElement("path",{d:`M6160 4825 c-7 -8 -10 -25 -6 -38 8 -35 -9 -84 -45 -125 -48 -56 -78\r
-72 -131 -72 -59 0 -64 -20 -13 -52 19 -13 35 -30 35 -39 0 -9 3 -19 7 -23 4\r
-4 7 -19 8 -34 0 -24 4 -27 33 -27 40 -1 59 19 64 65 2 27 8 36 28 42 93 26\r
117 35 151 60 64 47 62 106 -8 171 -19 18 -48 44 -64 60 -33 31 -42 33 -59 12z`}),l.createElement("path",{d:`M5666 4733 c-4 -5 -13 -8 -19 -8 -17 0 -21 -33 -7 -50 18 -22 35 -18\r
50 10 12 22 12 28 -1 41 -8 8 -19 11 -23 7z`}),l.createElement("path",{d:`M5756 4687 c-11 -8 -17 -22 -14 -37 2 -19 12 -26 53 -36 73 -19 96 7\r
54 60 -23 29 -63 35 -93 13z`}),l.createElement("path",{d:`M5685 4589 c-8 -13 30 -48 53 -49 16 0 28 29 16 40 -17 16 -61 22\r
-69 9z`}),l.createElement("path",{d:`M5640 4232 c-19 -2 -39 -7 -45 -12 -5 -4 -25 -11 -43 -15 -18 -4 -45\r
-13 -60 -21 -15 -8 -33 -14 -40 -14 -7 0 -38 -17 -69 -37 -30 -21 -68 -45 -84\r
-54 -16 -9 -34 -21 -41 -27 -7 -5 -26 -13 -43 -16 -16 -4 -39 -13 -49 -21 -19\r
-14 -16 -18 50 -88 93 -99 124 -138 124 -158 0 -9 6 -22 14 -28 8 -7 17 -24\r
21 -39 11 -43 67 -104 143 -155 39 -26 75 -47 82 -47 7 0 26 -6 43 -14 63 -28\r
163 -41 372 -48 11 -1 31 2 45 5 14 3 39 9 55 12 87 18 109 26 162 61 32 21\r
69 48 84 61 14 14 36 30 49 36 14 7 30 23 36 35 18 37 64 80 134 127 36 24 81\r
57 100 73 l35 30 -25 27 c-14 14 -41 34 -60 43 -19 9 -53 35 -75 58 -22 23\r
-59 52 -83 64 -23 12 -46 27 -50 34 -4 6 -26 20 -49 31 -24 11 -43 23 -43 27\r
0 3 -15 10 -32 13 -18 4 -37 11 -43 15 -5 4 -114 10 -240 12 -195 4 -235 7\r
-256 22 -15 9 -39 15 -55 14 -16 -2 -45 -4 -64 -6z m113 -80 c38 -3 57 -9 57\r
-18 0 -8 -10 -11 -27 -9 -16 2 -28 4 -28 6 0 1 -22 3 -49 5 -27 2 -51 5 -53 8\r
-11 10 10 27 26 20 9 -4 42 -9 74 -12z m-143 -2 c0 -5 -5 -10 -11 -10 -5 0 -7\r
5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m303 -150 c75 0 167 -11 247 -30 19\r
-4 75 -16 124 -26 96 -21 136 -46 136 -87 0 -26 -36 -57 -65 -57 -8 0 -32 -9\r
-52 -20 -36 -19 -51 -19 -372 -14 -344 5 -367 8 -400 48 -8 9 -20 16 -28 16\r
-31 0 -113 83 -113 114 0 3 17 14 38 25 28 14 76 21 206 30 93 6 171 13 174\r
16 3 3 10 1 16 -5 5 -5 46 -10 89 -10z m-118 -344 l82 -1 -5 -40 c-2 -22 -5\r
-41 -6 -42 -1 -1 -29 1 -64 4 -52 5 -62 9 -62 24 0 11 -5 19 -12 19 -19 0 -88\r
33 -88 42 0 5 16 6 36 2 20 -4 73 -7 119 -8z`}),l.createElement("path",{d:`M5765 3631 c-11 -19 5 -31 39 -28 33 2 47 27 15 27 -9 0 -24 3 -32 6\r
-8 3 -18 1 -22 -5z`}),l.createElement("path",{d:`M4035 4510 c-3 -5 -1 -17 4 -27 6 -10 20 -40 32 -68 28 -67 66 -115\r
89 -115 29 0 32 15 6 39 -14 13 -34 51 -47 84 -12 34 -29 70 -37 80 -17 19\r
-38 22 -47 7z`}),l.createElement("path",{d:`M4060 4340 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
-10 -4 -10 -10z`}),l.createElement("path",{d:"M7586 2833 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}),l.createElement("path",{d:"M3416 2893 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}),l.createElement("path",{d:`M9012 2098 c-16 -16 -15 -48 2 -48 12 0 16 7 25 45 4 15 -13 17 -27\r
3z`}),l.createElement("path",{d:`M3727 1723 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\r
-9 2 -12 -2z`}),l.createElement("path",{d:`M4385 8650 c-8 -9 -15 -22 -15 -28 0 -6 -6 -9 -14 -6 -8 3 -15 -3\r
-18 -14 -3 -11 -18 -26 -34 -33 -17 -8 -30 -24 -32 -37 -5 -31 12 -28 50 11\r
18 18 50 46 71 62 21 15 42 36 47 45 8 14 5 18 -15 18 -13 0 -31 -8 -40 -18z`}),l.createElement("path",{d:`M7806 7913 c-4 -9 -3 -20 1 -24 13 -13 37 7 30 25 -8 21 -23 20 -31\r
-1z`}),l.createElement("path",{d:`M6165 7880 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6\r
0 -7 -4 -4 -10z`}),l.createElement("path",{d:`M7807 7818 c-5 -35 0 -58 13 -58 9 0 20 36 20 68 0 35 -27 26 -33\r
-10z`}),l.createElement("path",{d:`M7788 7689 c-2 -22 0 -43 5 -46 13 -8 20 3 20 32 0 14 3 28 8 31 16\r
9 10 24 -10 24 -15 0 -20 -9 -23 -41z`}),l.createElement("path",{d:`M8009 7468 c-6 -13 -3 -295 3 -292 15 10 39 66 37 87 -1 12 2 30 6\r
40 11 25 0 134 -15 152 -11 13 -28 20 -31 13z`}),l.createElement("path",{d:`M4724 7430 c-69 -30 -104 -104 -89 -190 7 -43 57 -100 87 -100 17 0\r
19 5 13 40 -8 48 9 61 48 36 23 -16 25 -15 49 16 34 45 43 129 17 163 -11 13\r
-19 28 -19 33 0 9 -34 22 -55 21 -5 0 -28 -9 -51 -19z`}),l.createElement("path",{d:`M4417 7362 c-19 -20 -27 -103 -11 -109 14 -5 31 32 39 85 7 45 -2 53\r
-28 24z`}),l.createElement("path",{d:`M4580 7285 c0 -32 -1 -35 -11 -61 -14 -38 91 -184 131 -184 9 0 21\r
-5 27 -11 13 -13 58 -8 58 6 0 5 -24 21 -54 36 -30 15 -59 36 -64 46 -5 10\r
-18 27 -29 39 -12 14 -21 43 -25 87 -4 47 -10 67 -19 67 -8 0 -14 -11 -14 -25z`}),l.createElement("path",{d:`M4875 7270 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
-8 -4 -11 -10z`}),l.createElement("path",{d:`M8167 5143 c-4 -3 -7 -19 -7 -34 0 -15 -5 -31 -10 -34 -6 -4 -9 -12\r
-8 -18 1 -7 -10 -36 -25 -65 -34 -67 -36 -94 -7 -67 11 10 20 25 20 34 0 9 7\r
25 15 35 8 11 15 29 15 41 0 12 4 25 9 31 12 13 24 84 13 84 -5 0 -12 -3 -15\r
-7z`}),l.createElement("path",{d:`M2896 3681 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4\r
-12 2 -15 -3z`}),l.createElement("path",{d:`M9705 3070 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
-7 -4 -4 -10z`}),l.createElement("path",{d:"M9740 3035 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z"}),l.createElement("path",{d:`M6546 1388 c-9 -12 -16 -28 -16 -35 0 -7 -7 -10 -15 -7 -9 4 -15 1\r
-15 -7 0 -15 -42 -79 -52 -79 -21 0 -138 -148 -138 -174 0 -8 -10 -16 -21 -19\r
-15 -4 -20 -11 -16 -21 4 -10 1 -16 -8 -16 -15 0 -31 -62 -21 -79 5 -8 34 -9\r
66 -2 12 2 78 97 85 121 4 14 20 36 35 50 15 14 46 54 69 90 22 36 44 70 49\r
75 17 22 43 87 40 102 -5 26 -25 26 -42 1z`}))))}function ui(){return l.createElement("div",{className:"flexSVG"},l.createElement("svg",{className:"pastryIMG",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1039.000000pt",viewBox:"0 0 1280.000000 1039.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),l.createElement("g",{transform:"translate(0.000000,1039.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},l.createElement("path",{d:`M6702 10383 c-24 -10 -37 -49 -43 -133 -3 -52 -15 -108 -29 -145 -23\r
-58 -24 -74 -31 -465 -4 -223 -13 -481 -19 -573 -6 -93 -8 -178 -4 -190 3 -12\r
24 -45 46 -74 48 -63 57 -116 21 -121 -12 -2 -34 -17 -48 -33 -39 -48 -31 -81\r
26 -108 39 -19 44 -29 57 -106 6 -33 14 -72 17 -88 7 -24 4 -29 -31 -44 -37\r
-17 -230 -18 -3264 -25 -1774 -4 -3250 -10 -3280 -13 -30 -3 -65 -11 -77 -17\r
-29 -14 -47 -60 -39 -101 8 -43 102 -136 206 -203 41 -26 173 -120 292 -208\r
120 -89 261 -191 315 -228 l97 -68 410 -2 c226 -2 877 -3 1446 -3 l1035 0 -2\r
-55 c-2 -30 -7 -176 -13 -325 -6 -148 -15 -335 -20 -415 -5 -80 -12 -277 -15\r
-439 -3 -162 -10 -356 -16 -431 -12 -155 -2 -268 31 -335 15 -30 39 -53 97\r
-90 43 -27 139 -95 213 -150 179 -133 432 -315 604 -433 28 -19 52 -27 84 -27\r
27 0 47 -5 49 -12 3 -7 -5 -40 -16 -73 -40 -115 -54 -280 -48 -560 4 -140 11\r
-284 16 -320 24 -155 32 -321 21 -421 -12 -109 -22 -143 -73 -252 -89 -186\r
-150 -509 -145 -759 l3 -143 -56 -140 c-74 -183 -91 -259 -96 -430 -6 -153 4\r
-212 39 -245 29 -27 100 -36 145 -19 55 21 74 55 84 148 4 48 17 101 29 127\r
24 48 65 86 89 82 49 -10 164 -242 196 -398 10 -47 24 -102 32 -123 l15 -37\r
-41 -45 c-57 -62 -66 -88 -44 -133 31 -61 62 -77 163 -80 86 -4 92 -2 177 36\r
119 53 120 54 152 38 33 -18 57 -69 71 -156 7 -36 24 -108 40 -160 37 -127 55\r
-222 80 -420 12 -93 27 -175 36 -187 23 -36 54 -47 137 -47 76 -1 80 0 106 30\r
40 45 56 136 55 319 -1 167 -8 206 -79 430 -25 77 -47 154 -51 171 l-6 31 54\r
6 c29 4 109 9 178 13 129 7 184 -2 257 -39 33 -18 131 -13 743 38 314 26 828\r
64 1215 90 581 39 675 47 735 61 39 8 177 18 345 25 304 12 337 18 356 66 15\r
40 6 80 -35 148 -31 51 -36 67 -34 110 3 46 6 51 48 81 105 76 106 81 38 168\r
-52 65 -98 157 -107 215 -5 25 -14 74 -22 109 -10 49 -11 69 -1 95 25 71 3\r
106 -38 62 -21 -23 -22 -31 -18 -137 2 -64 10 -123 17 -137 11 -20 10 -26 -2\r
-39 -14 -14 -18 -13 -36 9 -71 85 -85 99 -97 99 -30 0 -24 -31 20 -118 59\r
-115 64 -202 11 -202 -29 0 -38 13 -54 75 -16 64 -55 150 -88 193 -28 38 -151\r
102 -194 102 -15 0 -43 -7 -63 -15 -20 -9 -41 -13 -46 -10 -19 12 -10 71 15\r
105 44 60 62 60 130 5 23 -18 72 -50 110 -70 59 -31 77 -36 116 -33 26 3 60\r
15 78 27 34 24 37 49 5 41 -10 -3 -51 -5 -90 -5 -67 0 -76 3 -130 39 -33 22\r
-84 67 -116 100 -66 71 -81 70 -108 -10 -10 -27 -38 -88 -64 -135 -39 -73 -48\r
-101 -62 -190 -19 -134 -24 -150 -42 -171 -31 -36 -53 -17 -66 54 -10 56 17\r
164 74 289 124 275 137 327 155 639 8 135 19 261 23 280 10 46 39 50 76 13 45\r
-44 49 -68 30 -153 -25 -106 -25 -291 0 -393 26 -104 81 -213 128 -250 28 -23\r
51 -31 90 -35 97 -7 143 48 208 249 28 88 61 142 76 126 4 -4 10 -113 15 -244\r
7 -214 10 -247 34 -328 35 -122 76 -208 111 -232 55 -38 113 -63 150 -63 81 0\r
173 146 216 341 19 89 22 133 22 309 0 329 -40 468 -171 590 -55 51 -69 60\r
-101 60 -30 0 -45 -7 -68 -32 -48 -51 -103 -135 -146 -219 -21 -42 -45 -80\r
-53 -83 -16 -6 -19 6 -35 139 l-10 80 29 25 c15 14 73 64 128 112 110 95 133\r
125 164 214 25 74 54 118 137 208 37 39 81 99 99 131 45 86 110 291 133 420\r
30 162 46 447 32 560 -6 49 -14 128 -17 175 -15 215 -78 433 -179 625 -58 109\r
-70 152 -56 190 12 32 31 32 71 -2 43 -37 59 -80 59 -162 0 -76 22 -120 53\r
-108 15 5 17 24 17 124 1 294 33 567 86 718 45 128 51 168 29 201 -19 29 -80\r
58 -102 49 -41 -15 -59 63 -24 106 27 33 63 15 79 -40 13 -41 35 -54 46 -26 4\r
12 15 14 43 10 80 -14 104 -26 119 -61 16 -38 16 -40 -41 -159 -24 -49 -50\r
-114 -59 -144 -23 -79 -57 -336 -65 -501 -9 -185 3 -541 23 -689 9 -63 21\r
-216 26 -340 5 -124 13 -239 18 -256 15 -51 -59 -463 -112 -625 -64 -193 -65\r
-199 -76 -364 -13 -179 0 -377 32 -522 31 -141 37 -554 13 -839 -12 -138 -16\r
-257 -12 -380 5 -188 14 -245 102 -595 44 -177 53 -341 24 -436 -13 -41 -48\r
-56 -110 -48 l-49 7 0 81 c0 179 -54 466 -120 644 -51 137 -186 287 -311 347\r
-41 19 -83 35 -96 35 -25 0 -56 -27 -50 -44 2 -6 35 -27 74 -47 97 -48 150\r
-94 212 -183 88 -128 109 -188 157 -451 21 -118 27 -183 28 -303 1 -148 2\r
-155 24 -172 33 -27 96 -33 197 -21 101 12 143 32 168 81 17 31 18 55 14 230\r
-4 175 -8 208 -36 320 -17 69 -40 170 -52 225 -12 55 -28 129 -35 165 -24 111\r
-28 336 -10 515 39 388 40 590 1 785 -38 194 -55 507 -35 641 15 106 64 308\r
90 374 60 151 85 379 77 695 -7 271 -20 429 -48 552 -10 48 -19 111 -19 139 0\r
29 -5 80 -12 115 -13 71 -4 94 37 94 39 0 309 -180 430 -287 112 -99 102 -97\r
433 -84 158 6 421 14 585 18 183 4 306 10 320 17 12 6 29 25 38 43 14 28 14\r
40 1 110 -18 104 -10 737 12 858 11 62 13 117 6 245 -9 198 -2 740 11 792 6\r
23 20 45 36 55 15 10 64 55 108 101 73 74 85 82 119 82 58 0 125 21 141 43 21\r
29 19 96 -4 132 -23 38 -105 83 -247 134 -60 21 -176 66 -259 99 -82 32 -212\r
78 -288 101 -77 23 -293 93 -480 155 -188 63 -405 133 -482 156 l-139 41 -256\r
10 c-282 10 -562 27 -582 34 -10 4 -12 43 -6 193 4 103 12 234 18 292 5 58 10\r
283 10 500 0 546 -21 729 -101 896 -28 60 -53 94 -91 129 -107 96 -171 106\r
-292 46 -75 -36 -117 -81 -178 -187 -59 -104 -67 -108 -186 -94 -174 21 -394\r
14 -692 -22 -120 -14 -137 -13 -205 17 -88 39 -94 50 -95 175 -1 111 -14 166\r
-42 184 -14 8 -22 6 -39 -10 -20 -20 -21 -31 -20 -177 l1 -156 -47 -3 c-40 -3\r
-49 -7 -63 -33 -17 -32 -37 -40 -168 -71 -59 -14 -101 -16 -215 -11 -264 11\r
-411 53 -478 138 -42 53 -78 144 -79 196 0 43 -15 67 -51 78 -25 8 -55 -17\r
-74 -62 -17 -41 -67 -53 -114 -28 -41 21 -46 35 -32 92 28 108 -27 188 -107\r
156z m3095 -284 c78 -48 153 -175 182 -309 14 -60 14 -275 0 -402 -19 -178\r
-77 -360 -146 -461 -31 -44 -132 -107 -172 -107 -16 0 -39 9 -52 19 -27 22\r
-26 22 47 40 49 13 112 57 147 103 14 18 49 98 76 177 l51 144 1 181 c1 187\r
-18 355 -47 425 -36 86 -130 161 -203 161 -71 0 -115 -44 -177 -173 -30 -65\r
-40 -78 -58 -75 -46 7 -10 131 63 211 80 88 205 117 288 66z m-2822 -75 c18\r
-8 63 -49 100 -90 36 -41 72 -74 79 -74 7 0 21 -9 30 -19 17 -18 17 -22 1 -55\r
-9 -19 -24 -41 -32 -48 -13 -10 -14 -8 -11 17 4 33 -10 41 -36 22 -11 -8 -20\r
-31 -23 -59 -5 -40 -2 -50 20 -72 21 -21 32 -25 59 -20 43 8 64 33 72 86 11\r
72 13 72 102 49 184 -48 299 -52 538 -21 187 24 395 42 876 75 354 24 379 25\r
446 10 90 -20 153 -61 204 -132 94 -132 105 -215 85 -662 -17 -373 -20 -408\r
-44 -415 -16 -5 -105 -10 -128 -7 -7 0 -22 20 -34 44 -37 74 -43 77 -136 77\r
-71 0 -86 3 -104 21 -18 18 -19 27 -12 77 12 86 9 231 -6 287 -53 190 -168\r
270 -446 307 -128 18 -1008 17 -1128 0 -153 -22 -233 -64 -354 -183 -80 -80\r
-148 -221 -164 -343 -12 -91 -27 -113 -84 -122 -63 -9 -75 4 -75 80 0 33 -4\r
67 -9 75 -12 19 -31 5 -31 -24 0 -29 -9 -55 -20 -55 -37 0 -47 261 -30 730 14\r
370 19 442 37 447 23 8 27 -49 23 -387 -8 -637 -7 -690 16 -667 13 12 23 179\r
34 532 14 457 16 483 31 502 29 35 100 43 154 17z m2791 -76 c37 -45 60 -100\r
75 -180 11 -59 10 -70 -5 -92 -18 -28 -47 -34 -63 -13 -14 17 -50 140 -64 213\r
-8 46 -8 67 0 83 16 28 24 27 57 -11z m-172 -80 c24 -34 19 -63 -15 -92 -17\r
-14 -35 -26 -41 -26 -12 0 -6 71 11 113 13 33 25 34 45 5z m57 -188 c43 0 75\r
-36 83 -96 4 -27 12 -70 18 -96 15 -62 2 -105 -55 -183 -24 -33 -50 -78 -58\r
-99 -16 -43 -38 -62 -63 -53 -37 14 -13 85 45 134 44 37 59 82 59 175 -1 118\r
-36 188 -94 188 -24 0 -19 -28 9 -62 35 -41 31 -55 -7 -26 -46 36 -79 81 -69\r
97 9 14 68 31 89 25 8 -2 27 -4 43 -4z m236 -77 c7 -21 -40 -54 -72 -51 -34 3\r
-48 35 -18 44 10 3 25 9 33 14 20 12 52 8 57 -7z m-23 -135 c20 -28 20 -67 1\r
-160 -29 -141 -42 -160 -79 -119 -10 11 -24 17 -32 14 -19 -7 -18 7 8 64 12\r
28 24 80 28 126 6 76 16 96 47 97 6 0 19 -10 27 -22z m-254 -86 c-9 -15 -24\r
-28 -34 -30 -16 -4 -18 0 -12 29 3 17 11 38 18 46 10 12 14 12 27 -2 14 -14\r
14 -18 1 -43z m-1220 -31 c47 -7 134 -19 193 -26 152 -21 192 -45 221 -135 26\r
-79 21 -109 -30 -186 l-45 -69 7 -85 c9 -112 8 -133 -22 -280 -15 -79 -37\r
-151 -58 -196 l-33 -71 -744 -6 c-409 -4 -805 -10 -879 -14 -119 -5 -138 -4\r
-152 11 -15 14 -17 39 -15 186 2 158 3 171 23 191 12 11 36 24 54 28 50 10 69\r
46 100 183 35 157 73 233 155 315 78 78 160 119 265 132 41 6 232 15 424 21\r
192 5 352 12 355 16 7 6 58 2 181 -15z m555 -255 c22 -108 12 -422 -15 -511\r
-11 -33 -31 -107 -45 -165 -33 -131 -72 -258 -89 -288 l-13 -24 -16 26 c-10\r
14 -30 32 -46 41 -28 14 -29 16 -20 57 6 24 27 102 49 173 54 181 106 455 130\r
679 6 54 13 103 16 108 13 21 33 -19 49 -96z m839 8 c7 -18 0 -34 -15 -34 -5\r
0 -9 11 -9 25 0 28 15 34 24 9z m-74 -57 c13 -24 13 -28 -6 -54 -15 -20 -31\r
-29 -56 -31 -88 -8 -126 104 -42 127 38 11 85 -8 104 -42z m236 -123 c4 -14 4\r
-69 0 -122 -7 -104 4 -150 23 -99 6 16 11 45 12 65 1 20 4 48 8 62 7 23 8 23\r
13 5 10 -38 9 -175 -2 -195 -6 -11 -17 -20 -25 -20 -21 0 -24 -19 -35 -239 -6\r
-113 -13 -207 -16 -210 -3 -4 -78 -6 -167 -6 -117 0 -169 4 -186 14 -28 16\r
-23 21 55 47 27 9 57 23 68 33 29 25 56 87 56 127 0 44 -27 104 -47 104 -16 0\r
-63 44 -63 60 0 19 34 11 96 -21 33 -18 67 -30 76 -27 12 5 17 31 22 119 9\r
145 3 154 -81 117 -83 -37 -115 -42 -159 -23 -52 21 -33 37 53 44 56 5 78 12\r
125 43 31 21 78 62 105 93 26 30 51 55 55 55 4 0 11 -12 14 -26z m-3218 -306\r
c-3 -7 -11 -13 -18 -13 -7 0 -15 6 -17 13 -3 7 4 12 17 12 13 0 20 -5 18 -12z\r
m2332 -63 c17 -25 44 -52 59 -60 38 -19 140 -35 231 -35 l76 0 11 -99 c7 -58\r
25 -132 43 -182 16 -45 30 -86 30 -90 0 -20 -88 -28 -343 -32 -250 -4 -280 -3\r
-298 12 l-21 17 21 41 c24 48 58 161 96 323 41 170 46 176 95 105z m220 -11\r
c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21 0 8 5 12 10 9 6 -3 10 -13 10 -21z\r
m388 -96 c7 -7 12 -32 12 -56 0 -35 -6 -49 -30 -74 -27 -26 -36 -30 -68 -25\r
-24 4 -47 17 -64 37 -31 34 -35 61 -13 80 20 17 45 5 45 -20 0 -32 19 -60 40\r
-60 25 0 40 29 40 78 0 51 13 65 38 40z m-1998 -238 c294 -1 618 -5 718 -9\r
l184 -7 34 -41 c18 -22 74 -68 124 -103 l91 -62 122 9 c67 5 194 6 282 2 242\r
-10 346 -3 400 25 38 21 50 23 86 15 22 -5 57 -18 77 -28 21 -10 57 -24 81\r
-31 33 -9 41 -14 32 -23 -9 -9 -171 -13 -611 -17 -329 -3 -602 -8 -606 -13 -4\r
-4 0 -15 9 -25 15 -15 48 -18 240 -23 351 -10 905 -9 982 2 86 13 135 14 200\r
5 97 -14 99 25 4 81 -30 17 -62 38 -71 47 -24 21 -23 59 2 81 19 17 21 17 58\r
-9 21 -14 76 -39 122 -55 47 -16 114 -42 150 -59 36 -16 108 -42 160 -57 139\r
-40 192 -64 185 -84 -12 -31 -10 -36 15 -33 94 9 147 6 174 -12 22 -14 26 -20\r
15 -27 -8 -5 -488 -9 -1079 -9 -1061 0 -1140 -2 -1140 -34 0 -18 408 -26 1345\r
-26 818 1 1057 8 1083 34 15 14 14 18 -4 42 -15 21 -56 39 -204 89 -102 34\r
-236 82 -299 107 l-115 45 94 6 c156 11 194 8 292 -22 168 -53 659 -208 887\r
-281 172 -55 221 -74 212 -83 -9 -9 -380 -13 -1516 -17 -1619 -5 -1620 -5\r
-1456 -53 25 -7 46 -18 49 -25 5 -15 -184 -17 -193 -2 -3 6 0 10 8 10 8 0 22\r
8 31 19 26 29 -1 48 -81 57 -91 9 -335 -1 -363 -16 l-22 -12 32 -33 c26 -27\r
29 -33 15 -39 -24 -9 -125 -7 -125 2 0 5 14 21 30 35 33 30 36 39 17 55 -8 7\r
-1191 11 -3781 11 l-3769 1 -92 45 c-110 54 -210 120 -450 298 -167 125 -220\r
175 -202 193 18 18 747 24 2722 22 l2130 -3 65 -36 c36 -20 106 -55 156 -78\r
50 -23 147 -73 215 -111 68 -39 212 -115 319 -169 l195 -99 1335 4 c734 2\r
1342 4 1351 4 8 0 24 6 34 14 46 34 -1 36 -1125 46 -889 8 -1107 13 -1133 24\r
-18 7 -58 32 -88 55 -29 23 -171 101 -314 173 -143 72 -278 143 -300 157 l-40\r
26 35 6 c58 10 322 -2 357 -17 18 -7 57 -31 87 -54 30 -23 146 -89 258 -148\r
l203 -107 263 3 c236 4 265 6 285 22 43 36 12 43 -185 45 -204 2 -225 7 -350\r
83 -89 54 -122 65 -136 42 -13 -22 -41 -29 -70 -19 -26 10 -30 41 -4 37 14 -2\r
17 4 16 33 l-1 36 101 -4 c56 -3 114 -9 130 -14 16 -5 75 -9 131 -9 l102 0\r
150 -75 c138 -68 153 -78 175 -117 18 -34 31 -44 63 -53 26 -6 265 -10 680 -9\r
649 1 693 3 682 37 -12 38 -43 40 -646 41 l-586 1 -257 129 c-142 70 -258 132\r
-258 136 0 14 17 15 137 8 65 -3 359 -7 653 -8z m-2240 -31 c83 -13 223 -76\r
465 -210 105 -58 218 -116 253 -130 34 -13 83 -40 110 -59 l47 -35 -95 -3\r
c-201 -6 -256 13 -682 241 -156 84 -300 160 -321 169 -20 10 -37 22 -37 28 0\r
13 175 13 260 -1z m894 -81 c-3 -5 -12 -4 -20 3 -7 6 -11 15 -8 21 3 5 12 4\r
20 -3 7 -6 11 -15 8 -21z m3556 -1 c29 -15 38 -45 16 -53 -26 -10 -64 4 -99\r
36 l-32 29 45 1 c25 0 56 -6 70 -13z m-3606 -553 c24 -9 9 -24 -24 -24 -22 0\r
-28 4 -24 15 6 16 22 19 48 9z m-4774 -14 c0 -5 -7 -7 -15 -4 -8 4 -15 8 -15\r
10 0 2 7 4 15 4 8 0 15 -4 15 -10z m2704 -8 c29 -17 -103 -28 -154 -12 l-25 7\r
25 11 c24 11 134 7 154 -6z m106 3 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0\r
8 7 15 15 15 8 0 15 -7 15 -15z m219 1 c17 -20 -10 -38 -51 -34 -38 4 -41 18\r
-7 35 31 16 44 16 58 -1z m1421 5 c0 -14 -35 -23 -64 -15 -41 10 -30 24 19 24\r
25 0 45 -4 45 -9z m666 -7 c18 -14 16 -15 -30 -9 -78 11 -100 24 -40 24 31 1\r
57 -5 70 -15z m207 9 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z\r
m440 1 c20 -4 37 -10 37 -15 0 -8 -87 -3 -190 11 -53 7 -52 8 30 9 47 0 102\r
-2 123 -5z m247 -4 c0 -12 -28 -25 -36 -17 -9 9 6 27 22 27 8 0 14 -5 14 -10z\r
m403 -5 c1 -5 -13 -11 -30 -13 -31 -3 -42 6 -26 22 10 10 53 3 56 -9z m110 8\r
c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m737 -3 c-8 -5 -31\r
-10 -50 -10 -26 0 -31 3 -20 10 8 5 31 10 50 10 26 0 31 -3 20 -10z m780 0\r
c-8 -5 -100 -9 -210 -9 -113 1 -184 4 -170 9 37 12 398 12 380 0z m1173 3 c-7\r
-2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m307 -8 c0 -8 -7 -15 -15\r
-15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m305 0 c0 -11 -59\r
-19 -82 -11 -8 3 -11 11 -8 16 8 14 90 9 90 -5z m134 -11 c-14 -18 -24 -11\r
-15 11 3 9 11 13 16 10 8 -5 7 -11 -1 -21z m373 11 c0 -5 -5 -11 -11 -13 -6\r
-2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m-127 -5 c-3 -5 -13 -10\r
-21 -10 -8 0 -12 5 -9 10 3 6 13 10 21 10 8 0 12 -4 9 -10z m-6817 -7 c-10 -2\r
-26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m5688 -24 l39 -32 720 6 c949\r
8 1234 -7 1285 -68 8 -10 8 -15 -2 -21 -7 -5 -125 -12 -263 -15 -359 -10\r
-1724 -13 -1760 -4 -16 4 -38 14 -47 22 -14 13 -26 13 -70 3 -93 -20 -1151\r
-32 -1793 -19 -607 12 -1744 0 -2195 -23 -124 -6 -241 -11 -260 -10 -379 16\r
-597 20 -1005 15 l-490 -6 -101 32 c-108 35 -195 79 -159 82 11 1 938 0 2060\r
-1 1385 -1 2204 2 2550 10 433 11 519 10 570 -1 44 -11 92 -13 180 -8 66 4\r
224 8 350 8 202 1 235 4 271 20 23 10 45 24 48 30 12 18 31 13 72 -20z m1321\r
25 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-7712 -67 c11 -3\r
39 -11 63 -17 38 -10 41 -13 31 -31 -16 -30 -7 -43 63 -90 35 -24 109 -78 166\r
-121 56 -43 121 -87 145 -99 23 -12 57 -33 76 -46 62 -47 62 -49 46 -469 -9\r
-219 -19 -382 -25 -388 -19 -19 -83 21 -373 236 -125 92 -174 121 -233 138\r
-47 14 -72 29 -110 67 -27 26 -70 62 -96 78 l-48 30 0 356 c0 196 2 358 4 360\r
7 6 269 3 291 -4z m275 -143 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21 0 8 5 12\r
10 9 6 -3 10 -13 10 -21z m1730 -75 c6 -10 10 -34 10 -53 0 -43 -15 -53 -90\r
-57 l-55 -4 -3 36 c-7 79 104 142 138 78z m1338 16 c2 -2 4 -24 5 -50 2 -34\r
-3 -50 -15 -59 -30 -22 -710 -34 -1071 -19 -165 6 -187 13 -187 53 0 10 11 32\r
24 47 l24 28 284 5 c257 5 928 1 936 -5z m2082 -2 l95 -8 -1 -53 c-1 -29 -4\r
-56 -7 -59 -3 -3 -465 -6 -1026 -7 -1163 -1 -1072 -8 -1033 81 l21 48 123 5\r
c194 8 1723 2 1828 -7z m1288 -45 c3 -40 0 -49 -20 -59 -35 -20 -1012 -31\r
-1050 -12 -31 15 -46 57 -31 82 23 38 62 40 588 38 l510 -2 3 -47z m1535 38\r
c23 -11 22 -23 -6 -41 -37 -24 -273 -36 -798 -39 -413 -3 -480 -6 -507 -20\r
-17 -9 -54 -16 -81 -16 -40 0 -52 4 -61 20 -25 47 26 100 96 100 36 0 47 -5\r
60 -25 l17 -26 24 23 c14 13 43 25 71 29 64 10 1163 5 1185 -5z m-6513 -9 c26\r
-9 36 -18 38 -38 3 -25 0 -26 -50 -32 -29 -4 -261 -7 -516 -7 -382 0 -469 3\r
-497 15 -37 15 -51 35 -41 60 5 13 71 15 518 14 370 0 523 -3 548 -12z m-1249\r
-40 c-1 -12 -15 -9 -19 4 -3 6 1 10 8 8 6 -3 11 -8 11 -12z m1244 -102 c66 -2\r
73 -4 55 -14 -22 -13 -1016 -26 -1023 -14 -11 17 72 23 332 24 135 1 287 5\r
336 9 50 5 126 6 170 2 44 -3 103 -6 130 -7z m5718 0 c1 -5 -10 -11 -25 -13\r
-16 -2 -28 1 -28 7 0 20 49 26 53 6z m-353 -35 c25 -49 -22 -45 545 -45 231 0\r
428 -4 439 -9 17 -8 18 -22 11 -250 -9 -352 -21 -485 -44 -516 -17 -22 -25\r
-25 -74 -22 -46 2 -60 -1 -77 -18 -24 -24 -14 -54 20 -65 27 -8 25 -21 -3 -29\r
-36 -9 -312 -10 -326 -2 -26 17 8 27 118 35 113 8 146 20 123 43 -9 9 -118 14\r
-400 18 -279 4 -393 9 -409 17 -18 11 -22 25 -28 85 -8 86 9 655 20 681 4 9\r
16 17 26 17 26 0 34 25 20 56 -11 26 -8 44 9 44 5 0 19 -18 30 -40z m120 25\r
c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z\r
m435 5 c18 -7 19 -8 2 -15 -23 -9 -89 3 -82 16 7 11 52 11 80 -1z m-5683 -47\r
c64 -74 -20 -233 -87 -166 -13 13 -16 30 -13 76 4 50 9 64 32 84 32 28 48 29\r
68 6z m1371 -32 c10 -39 3 -89 -16 -115 -12 -16 -57 -17 -632 -19 l-620 -2 -9\r
26 c-10 30 -1 86 19 113 13 17 42 19 492 26 263 4 541 6 617 6 l140 -1 9 -34z\r
m2161 7 c9 -13 16 -43 16 -69 l0 -46 -52 -7 c-29 -3 -251 -6 -493 -7 -242 0\r
-678 -4 -970 -8 -604 -10 -575 -13 -575 67 0 52 5 63 35 80 15 8 294 11 1022\r
12 l1002 0 15 -22z m1187 3 c4 -3 9 -32 12 -64 l6 -58 -532 3 c-293 2 -540 7\r
-549 12 -21 9 -23 48 -7 95 l12 33 526 -7 c289 -4 529 -10 532 -14z m217 3\r
c20 -14 23 -23 20 -67 l-3 -52 -40 1 c-62 1 -99 23 -103 61 -3 28 2 36 30 53\r
40 24 66 25 96 4z m-5171 -54 c23 -14 34 -29 39 -57 9 -50 -4 -657 -15 -707\r
-5 -21 -14 -43 -20 -49 -6 -6 -147 -13 -378 -18 -202 -4 -428 -10 -501 -14\r
-116 -5 -137 -4 -159 11 l-26 16 6 373 c6 401 9 425 59 441 33 10 339 21 673\r
22 271 2 292 1 322 -18z m5199 -142 c-3 -18 -10 -127 -16 -243 -18 -347 -28\r
-395 -82 -395 -24 0 -70 24 -87 44 -11 13 -11 22 -1 48 8 21 15 120 19 264 7\r
244 11 264 55 264 11 0 39 11 61 24 53 32 57 31 51 -6z m-1418 -46 c16 -21 15\r
-37 -3 -55 -20 -20 -226 -27 -1215 -36 l-815 -8 -54 25 c-48 22 -57 23 -95 12\r
-22 -7 -57 -20 -76 -29 -31 -15 -47 -16 -129 -7 -67 7 -131 6 -227 -2 -290\r
-26 -445 -103 -718 -357 -72 -67 -141 -127 -154 -134 -27 -14 -27 -10 -7 139\r
8 58 18 172 21 254 6 122 10 152 24 166 21 21 194 25 1835 45 1207 15 1593 12\r
1613 -13z m1166 -74 c12 -228 16 -418 8 -418 -5 0 -27 14 -48 31 -22 17 -59\r
42 -84 55 -25 12 -85 52 -135 88 -90 65 -246 143 -383 191 -73 26 -135 37\r
-300 54 -100 11 -142 29 -142 61 0 11 3 21 8 21 44 8 372 16 684 17 l386 2 6\r
-102z m-4735 62 c26 -13 33 -100 21 -230 -20 -207 -24 -338 -11 -354 7 -8 8\r
-17 3 -20 -18 -11 -87 -17 -100 -8 -10 7 -11 67 -5 294 7 261 10 288 27 307\r
21 23 38 26 65 11z m-2170 -152 c31 -18 76 -51 101 -74 25 -22 73 -55 106 -73\r
64 -34 96 -73 77 -92 -14 -14 -41 0 -103 51 -25 20 -76 54 -115 75 -86 47\r
-135 91 -135 122 0 13 3 23 6 23 4 0 32 -14 63 -32z m4434 -17 c6 -6 4 -64 -6\r
-163 -9 -84 -21 -223 -27 -308 -19 -275 -22 -289 -55 -276 -15 6 -16 17 -9\r
119 13 174 12 201 -8 205 -23 4 -35 -45 -42 -183 -7 -127 -16 -169 -38 -173\r
-26 -5 -30 29 -19 155 5 65 13 172 16 238 8 169 25 337 37 358 21 40 121 58\r
151 28z m991 -20 c6 -22 4 -57 -9 -119 -33 -161 -36 -196 -40 -412 l-3 -215\r
-59 0 c-32 0 -63 -4 -69 -8 -18 -11 -31 13 -37 72 -4 30 -11 59 -17 65 -16 16\r
-36 -15 -44 -67 -10 -65 -17 -71 -83 -72 l-58 0 -8 90 c-4 50 -5 135 -2 190 6\r
107 -2 138 -29 116 -26 -21 -34 -70 -39 -226 -3 -82 -9 -158 -12 -168 -13 -32\r
-30 -11 -36 44 -7 69 7 302 22 353 17 60 -20 128 -51 91 -6 -7 -20 -107 -31\r
-221 -10 -115 -22 -217 -25 -227 -11 -35 -21 -6 -27 75 -5 87 -13 118 -28 118\r
-18 0 -29 -51 -29 -128 0 -80 -16 -122 -46 -122 -11 0 -14 14 -14 60 0 85 19\r
261 31 290 l11 25 23 -29 c27 -34 42 -28 51 18 8 45 -3 76 -26 76 -38 0 -50\r
11 -50 49 0 51 13 68 28 36 13 -29 37 -33 50 -7 5 9 12 56 15 105 5 89 23 137\r
52 137 21 0 29 -42 22 -116 -9 -94 8 -123 38 -64 10 19 15 57 15 108 0 80 9\r
102 41 102 22 0 26 -14 35 -113 8 -91 21 -90 34 4 8 59 32 108 57 116 18 6 23\r
-27 13 -90 -13 -85 -40 -413 -42 -520 -1 -69 2 -91 14 -104 15 -14 17 -12 27\r
23 6 22 11 89 11 149 0 61 7 160 15 220 8 61 15 147 15 192 0 45 5 94 12 108\r
12 27 36 33 56 13 16 -16 15 -157 -1 -228 -14 -62 -12 -90 8 -90 17 0 31 39\r
50 149 17 101 38 161 54 161 15 0 13 -57 -4 -113 -18 -60 -32 -321 -17 -331\r
12 -7 30 72 66 298 15 87 29 163 32 168 10 17 29 2 38 -31z m563 17 c16 -15\r
23 -33 23 -59 0 -21 4 -41 10 -44 9 -6 13 6 25 79 9 54 22 31 30 -53 7 -76 -4\r
-116 -41 -146 -14 -11 -29 -38 -34 -60 -22 -93 -4 -320 30 -390 22 -45 25 -66\r
21 -125 l-2 -35 -12 35 c-10 29 -17 35 -43 37 -18 0 -41 6 -52 12 -17 9 -25 7\r
-40 -9 -21 -23 -51 -18 -53 9 -1 9 -2 95 -3 191 0 96 -5 181 -10 189 -18 28\r
-28 -32 -34 -195 -5 -173 -12 -203 -38 -169 -13 17 -15 63 -12 350 3 297 5\r
334 21 358 31 48 38 33 36 -88 -2 -63 1 -118 4 -122 18 -17 31 24 37 111 8\r
116 23 146 77 146 24 0 45 -8 60 -22z m-2419 -32 c-4 -66 28 -70 41 -4 9 42\r
36 49 46 11 10 -41 8 -195 -5 -351 -13 -153 -11 -224 7 -229 19 -7 31 59 47\r
263 15 190 21 224 36 224 15 0 20 -47 20 -202 0 -100 4 -159 11 -163 6 -4 12\r
-5 14 -3 3 2 11 73 19 158 18 182 35 302 46 320 4 7 13 9 20 5 10 -6 11 -39 6\r
-139 -6 -136 -47 -440 -60 -453 -7 -8 -31 18 -39 41 -3 7 -9 6 -21 -3 -14 -12\r
-16 -29 -14 -105 3 -96 17 -117 31 -47 5 23 14 41 21 41 17 0 36 -43 36 -79 0\r
-34 -17 -41 -101 -41 l-56 0 -6 61 c-6 69 -10 77 -33 59 -12 -10 -15 -27 -12\r
-67 2 -39 -1 -54 -11 -58 -40 -15 -55 71 -32 176 15 67 18 476 4 490 -18 18\r
-31 -71 -49 -336 -21 -324 -28 -357 -62 -294 -13 25 -12 42 14 328 18 193 18\r
262 1 286 -13 17 -15 17 -30 -6 -9 -13 -20 -38 -23 -57 -4 -18 -11 -31 -18\r
-29 -16 6 -10 143 10 195 19 50 41 55 46 10 4 -45 21 -45 53 2 31 45 47 44 43\r
-4z m641 20 c9 -10 9 -31 1 -77 -5 -35 -17 -176 -25 -314 -15 -236 -33 -355\r
-55 -355 -18 0 -18 19 -5 205 8 105 17 267 21 360 4 94 11 176 17 183 13 16\r
32 15 46 -2z m447 -31 c7 -48 4 -83 -26 -300 -11 -77 -21 -165 -22 -195 -2\r
-42 -7 -56 -20 -58 -26 -5 -31 34 -18 140 6 51 15 163 20 248 4 85 13 167 19\r
183 16 42 39 34 47 -18z m852 21 c2 -10 0 -22 -6 -28 -13 -13 -43 18 -35 38 7\r
20 37 13 41 -10z m193 -7 c6 -24 1 -141 -7 -168 -3 -10 -12 -4 -26 20 l-22 34\r
-12 -43 c-7 -24 -18 -119 -24 -210 -7 -92 -14 -197 -17 -234 -3 -37 -1 -81 5\r
-97 9 -24 7 -32 -8 -46 -25 -22 -48 -13 -56 22 -8 31 13 538 27 653 5 40 13\r
78 19 84 13 13 50 -21 50 -46 0 -10 5 -18 10 -18 6 0 10 9 10 21 0 28 19 61\r
33 56 6 -2 14 -14 18 -28z m-2632 -49 c-4 -36 -13 -119 -19 -185 -6 -66 -17\r
-158 -25 -205 -8 -47 -15 -117 -15 -156 0 -127 -19 -172 -40 -94 -13 48 -26\r
57 -50 35 -27 -25 -32 -7 -25 107 7 120 22 208 36 208 10 0 11 -6 13 -109 0\r
-45 5 -76 12 -78 21 -7 23 8 54 327 15 160 18 174 41 199 12 12 22 21 24 19 1\r
-2 -1 -32 -6 -68z m936 29 c9 -27 21 -24 35 11 13 30 24 37 34 21 4 -5 11 -89\r
17 -188 10 -164 9 -186 -10 -278 -11 -55 -23 -127 -27 -160 -3 -33 -13 -76\r
-22 -95 -15 -35 -15 -35 -22 -10 -11 35 -11 182 0 265 5 39 12 123 16 188 6\r
104 5 117 -9 117 -16 0 -27 -29 -41 -105 -3 -16 -13 -118 -21 -225 -17 -208\r
-29 -275 -47 -264 -17 10 5 559 28 701 6 42 31 68 50 52 7 -6 16 -19 19 -30z\r
m535 -33 c0 -58 -25 -345 -50 -576 -11 -99 -30 -141 -50 -110 -14 21 -12 97 5\r
261 9 79 20 214 25 299 11 159 24 206 55 194 11 -5 15 -22 15 -68z m-1376 47\r
c2 -10 7 -44 11 -75 11 -98 37 -85 45 22 4 51 9 66 23 68 14 3 17 -4 17 -45 0\r
-57 -30 -127 -60 -143 -50 -27 -75 -136 -89 -378 -4 -84 -11 -155 -15 -159\r
-11 -11 -16 3 -23 57 -12 105 49 670 73 670 7 0 15 -8 18 -17z m1570 1 c8 -21\r
6 -105 -3 -128 -7 -18 -8 -18 -14 5 -10 36 -8 139 2 139 5 0 12 -7 15 -16z\r
m1426 -54 c0 -27 -4 -50 -10 -50 -11 0 -13 42 -4 78 10 35 14 26 14 -28z\r
m-3190 5 c10 -25 -4 -65 -22 -65 -9 0 -11 52 -2 74 8 22 13 20 24 -9z m370\r
-72 c-1 -141 -27 -469 -40 -493 -6 -11 -16 -17 -22 -14 -24 15 6 535 33 586\r
21 38 29 15 29 -79z m-447 67 c-1 -8 -11 -96 -23 -195 -12 -99 -26 -195 -31\r
-212 -18 -58 -39 -35 -39 42 0 45 -10 55 -56 55 -13 0 -24 5 -24 10 0 11 7 14\r
52 24 32 7 34 12 53 155 8 63 20 120 27 128 14 17 44 12 41 -7z m-2913 -30\r
c47 -24 69 -57 45 -67 -20 -7 -99 46 -103 70 -4 22 10 21 58 -3z m2795 -67\r
c-9 -94 -25 -104 -25 -17 0 69 4 84 23 84 6 0 7 -27 2 -67z m2721 20 c14 -76\r
-16 -554 -37 -595 -12 -22 -35 -23 -43 -2 -9 23 -7 83 4 132 6 23 17 134 25\r
245 16 213 22 257 36 257 4 0 11 -17 15 -37z m763 -40 c-8 -21 -19 -38 -24\r
-38 -15 0 -18 61 -5 86 11 19 13 20 28 6 13 -14 14 -20 1 -54z m-6059 -55 c36\r
-27 89 -68 119 -91 30 -23 87 -62 128 -87 40 -25 94 -63 121 -86 27 -23 78\r
-52 119 -68 66 -25 113 -62 113 -87 0 -28 -115 26 -235 111 -38 27 -109 72\r
-157 100 -47 29 -89 57 -91 65 -3 7 -43 38 -90 69 -123 82 -157 117 -124 129\r
15 5 18 4 97 -55z m2479 16 c-12 -28 -13 -28 -17 -6 -5 32 6 58 19 45 6 -6 6\r
-19 -2 -39z m-2233 -37 c87 -59 205 -143 273 -194 41 -31 81 -78 81 -95 0 -20\r
-34 -4 -80 37 -28 25 -56 45 -62 45 -6 0 -56 31 -112 69 -56 37 -126 83 -158\r
100 -60 34 -75 55 -57 77 18 22 32 17 115 -39z m-463 1 l48 -43 -21 -175 c-23\r
-198 -27 -454 -8 -495 8 -17 73 -68 177 -139 92 -62 216 -147 278 -189 171\r
-118 197 -115 206 25 3 46 10 155 16 243 13 193 6 232 -48 275 -72 59 -279\r
200 -381 261 -116 70 -150 98 -150 129 0 11 3 20 6 20 12 0 130 -75 392 -248\r
178 -119 267 -183 277 -203 11 -20 15 -62 15 -146 -1 -180 -27 -604 -39 -616\r
-11 -11 -71 25 -111 68 -13 13 -44 31 -69 40 -25 8 -65 30 -88 48 -23 17 -69\r
52 -102 77 -34 25 -91 70 -129 100 -37 30 -90 68 -117 84 -66 38 -184 126\r
-215 160 -22 25 -24 36 -28 149 -2 67 1 217 8 332 12 226 18 285 29 285 4 0\r
28 -19 54 -42z m2602 -38 c8 -13 9 -89 1 -137 -5 -29 -14 -43 -32 -51 -32 -15\r
-64 -69 -64 -109 0 -35 16 -51 33 -34 20 20 27 12 27 -29 0 -33 -3 -40 -19\r
-40 -11 0 -29 15 -42 36 -20 33 -21 44 -16 147 5 119 23 217 38 217 5 0 9 -36\r
9 -79 0 -44 4 -82 9 -86 14 -8 31 60 31 123 0 48 10 66 25 42z m3566 -32 c3\r
-103 -7 -135 -43 -140 -19 -2 -24 -10 -26 -44 -2 -33 2 -48 23 -72 l26 -31\r
-27 -7 c-39 -10 -57 6 -72 62 -23 86 -1 290 23 213 4 -13 12 -30 18 -37 16\r
-20 46 14 53 60 9 51 24 48 25 -4z m-471 -135 c0 -180 -7 -273 -21 -273 -10 0\r
-12 309 -3 388 13 103 24 49 24 -115z m1035 105 c-4 -35 -9 -97 -10 -138 -2\r
-91 -13 -142 -28 -137 -26 8 -35 120 -16 209 11 53 44 128 56 128 3 0 2 -28\r
-2 -62z m-3289 5 c4 -20 4 -84 1 -143 -9 -157 -32 -250 -58 -234 -20 12 -4\r
262 26 392 8 34 23 27 31 -15z m-754 -96 c-14 -81 -15 -137 -2 -157 15 -24 30\r
1 39 64 8 58 16 75 29 62 9 -10 8 -222 -2 -260 l-7 -29 -43 44 c-24 24 -50 50\r
-59 57 -22 17 -23 107 -2 228 21 121 23 125 42 89 14 -26 15 -40 5 -98z m4134\r
-44 c-29 -283 -32 -483 -7 -483 18 0 31 56 31 128 0 42 7 139 15 214 8 75 12\r
159 8 187 -7 62 11 68 53 19 l27 -33 -6 -125 c-4 -69 -16 -214 -27 -323 l-21\r
-199 22 -105 c19 -94 20 -107 6 -120 -34 -34 -62 25 -72 147 -8 105 -13 130\r
-25 130 -6 0 -10 -35 -10 -83 0 -59 -5 -89 -16 -105 -18 -26 -39 -29 -48 -6\r
-9 24 -7 185 5 519 9 228 15 307 27 330 17 35 43 67 49 61 3 -3 -2 -71 -11\r
-153z m-3595 125 c5 -98 -4 -368 -12 -368 -5 0 -14 10 -20 22 -19 35 1 368 22\r
368 5 0 9 -10 10 -22z m2999 -58 c6 -42 -1 -93 -10 -84 -14 14 -24 79 -16 100\r
7 19 23 9 26 -16z m-3784 -174 c-4 -78 -11 -145 -16 -150 -21 -21 -35 42 -35\r
160 0 107 2 125 19 143 18 20 21 20 29 5 6 -10 7 -74 3 -158z m4649 134 c18\r
-19 18 -22 2 -56 -24 -49 -22 -93 6 -122 21 -23 22 -30 19 -174 -2 -143 -4\r
-152 -32 -208 -33 -66 -38 -92 -15 -84 29 12 39 -44 21 -116 -18 -73 -21 -166\r
-6 -205 8 -20 7 -27 -6 -32 -22 -8 -72 43 -84 86 -23 77 -29 252 -18 460 7\r
113 12 254 12 313 1 98 3 108 25 132 29 31 52 33 76 6z m655 2 c0 -18 -378\r
-29 -476 -15 l-49 8 50 6 c79 9 475 10 475 1z m-5390 -51 c0 -20 -5 -53 -11\r
-74 -8 -32 -13 -36 -25 -26 -16 13 -19 100 -4 129 16 30 40 13 40 -29z m-110\r
-17 c13 -34 13 -144 -1 -183 -19 -54 -34 -31 -37 60 -5 130 13 189 38 123z\r
m-2038 -30 c29 -25 64 -50 77 -55 13 -5 90 -55 172 -111 l149 -101 0 -203 c0\r
-209 -3 -234 -26 -234 -18 0 -257 162 -359 243 -110 87 -138 130 -143 218 -4\r
72 22 254 40 277 17 20 34 14 90 -34z m1747 27 c10 -6 -3 -11 -40 -15 -79 -9\r
-960 -24 -986 -17 -42 11 -24 26 39 32 105 9 972 9 987 0z m198 -13 c-3 -8 -6\r
-5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m6078 -8 c-84 -23 -916 -42 -930\r
-21 -5 9 64 19 180 24 145 7 777 5 750 -3z m-5385 -24 c11 -29 -1 -118 -17\r
-123 -26 -9 -39 101 -16 140 8 14 24 7 33 -17z m-760 -31 c0 -19 -31 -38 -102\r
-65 -52 -19 -64 -20 -114 -10 -31 7 -66 9 -77 6 -35 -9 -805 -29 -853 -21 -46\r
7 -56 18 -26 30 9 4 208 11 442 16 442 9 587 18 655 43 52 19 75 19 75 1z\r
m4238 -27 c-3 -34 -20 -42 -26 -13 -5 22 5 45 18 45 7 0 10 -14 8 -32z m-1731\r
-61 c-5 -26 -14 -47 -19 -47 -12 0 -10 78 3 102 19 35 29 0 16 -55z m-2419 35\r
c3 -19 -1 -23 -15 -20 -10 2 -19 14 -21 26 -3 19 1 23 15 20 10 -2 19 -14 21\r
-26z m6081 -6 c25 -13 29 -22 35 -77 8 -79 8 -320 -1 -521 l-6 -157 -46 -5\r
c-87 -11 -416 -26 -735 -32 l-318 -7 7 364 c8 415 6 407 86 422 91 16 294 24\r
617 26 273 1 338 -2 361 -13z m-5925 -39 c-3 -9 -10 -17 -15 -17 -11 0 -12 34\r
-2 43 11 12 24 -8 17 -26z m3906 -46 c0 -42 -5 -74 -14 -87 -14 -18 -15 -18\r
-22 -1 -7 19 1 122 12 150 12 34 24 4 24 -62z m460 29 c17 -32 -2 -470 -20\r
-470 -34 0 -52 170 -38 344 9 113 18 146 39 146 5 0 13 -9 19 -20z m-3387 -8\r
c16 -17 14 -32 -4 -32 -11 0 -39 30 -39 41 0 15 26 10 43 -9z m-1368 -36 c47\r
-20 54 -54 44 -212 -4 -71 -11 -240 -15 -376 l-7 -247 -71 -5 c-39 -3 -174 -8\r
-301 -11 -126 -3 -329 -8 -450 -11 -189 -5 -223 -4 -240 9 -19 15 -20 26 -18\r
229 2 254 18 523 31 559 13 34 23 35 472 49 290 9 501 21 518 29 1 0 18 -5 37\r
-13z m176 -6 c-24 -21 -51 -26 -51 -12 0 11 39 31 60 31 10 0 8 -6 -9 -19z\r
m4474 -70 c3 -11 3 -25 -2 -32 -4 -7 -10 -61 -13 -120 -5 -99 -12 -130 -26\r
-116 -3 3 -5 49 -5 101 0 134 27 228 46 167z m-1354 -11 c11 -5 17 -15 13 -20\r
-8 -13 -94 -69 -106 -69 -15 0 -8 57 10 72 31 28 55 33 83 17z m749 -14 c22\r
-20 26 -50 10 -60 -13 -8 -122 55 -128 74 -7 21 93 9 118 -14z m-995 -10 c15\r
-14 25 -36 25 -52 0 -41 -106 -570 -125 -622 -31 -87 -90 -139 -200 -177 -27\r
-9 -93 -36 -145 -61 -52 -24 -194 -77 -315 -117 -121 -41 -263 -93 -315 -116\r
-52 -24 -192 -78 -310 -121 -118 -42 -253 -93 -300 -113 -113 -48 -151 -47\r
-287 5 -60 23 -147 54 -195 70 -48 15 -106 38 -129 50 -23 11 -65 28 -93 36\r
-28 8 -118 42 -200 75 -81 33 -189 72 -240 87 -50 15 -111 37 -136 48 -47 21\r
-110 69 -110 83 0 5 27 12 61 16 98 11 97 8 91 337 -2 150 -1 338 3 418 l7\r
147 521 6 c287 4 893 11 1347 15 454 4 869 8 923 9 92 2 99 0 122 -23z m610\r
-4 c83 -40 141 -104 235 -261 86 -144 107 -199 145 -380 34 -163 47 -275 48\r
-433 2 -113 -1 -139 -13 -147 -29 -18 -35 -3 -41 101 -4 57 -25 210 -47 339\r
-46 266 -72 343 -162 477 -102 151 -189 219 -295 230 -67 7 -109 -13 -189 -88\r
-77 -72 -151 -193 -183 -301 -29 -101 -87 -373 -103 -483 -11 -80 -28 -114\r
-50 -100 -15 9 -6 183 15 306 34 190 132 486 192 576 41 63 133 134 206 161\r
28 11 59 22 67 25 42 15 117 6 175 -22z m257 -58 c43 -26 94 -62 113 -79 34\r
-31 35 -34 34 -100 -1 -38 -4 -82 -8 -99 -6 -30 -6 -30 -25 20 -26 68 -54 110\r
-133 202 -105 123 -101 118 -79 109 11 -4 55 -28 98 -53z m229 -30 c11 -30 3\r
-123 -11 -123 -12 0 -24 103 -15 129 8 28 13 27 26 -6z m-516 -115 c66 -57\r
146 -200 188 -333 l25 -80 -19 -100 c-11 -55 -30 -158 -44 -230 -14 -71 -25\r
-156 -25 -187 0 -91 -25 -107 -139 -90 l-44 7 -17 80 c-20 93 -34 133 -66 189\r
-13 23 -24 55 -24 71 0 17 19 86 42 155 l42 125 4 213 c4 199 5 212 23 212 10\r
0 35 -14 54 -32z m-175 -7 c5 -11 10 -80 10 -153 0 -103 -5 -150 -20 -206 -11\r
-39 -20 -82 -20 -95 0 -53 -32 -143 -60 -172 -26 -26 -33 -28 -50 -17 -30 19\r
-39 15 -57 -24 -16 -33 -73 -74 -103 -74 -20 0 -10 47 19 87 30 42 83 73 124\r
73 21 0 28 9 45 53 44 113 70 255 79 430 6 116 12 135 33 98z m690 -132 c0\r
-24 -4 -38 -10 -34 -5 3 -10 22 -10 41 0 19 5 34 10 34 6 0 10 -18 10 -41z\r
m-780 -92 c0 -37 -54 -182 -91 -242 -39 -64 -66 -92 -94 -97 -35 -6 -27 26 26\r
108 45 68 102 178 122 237 9 25 37 21 37 -6z m904 -94 c85 -171 101 -283 101\r
-738 0 -304 -2 -360 -18 -425 -25 -102 -94 -341 -102 -348 -3 -3 -10 -1 -16 5\r
-8 8 -7 32 4 85 39 179 69 415 65 498 -3 73 -9 97 -43 170 l-40 85 -1 335 c-1\r
307 2 400 12 400 2 0 19 -30 38 -67z m-4346 -290 c2 -8 -6 -13 -22 -13 -25 0\r
-33 10 -19 24 10 10 36 3 41 -11z m-448 -3 c13 -9 13 -11 0 -20 -20 -13 -52\r
-13 -87 1 -22 8 -24 12 -13 19 20 13 81 12 100 0z m320 0 c0 -6 -35 -10 -86\r
-10 -54 0 -83 4 -79 10 3 6 42 10 86 10 46 0 79 -4 79 -10z m4090 -72 c0 -19\r
-2 -20 -10 -8 -13 19 -13 30 0 30 6 0 10 -10 10 -22z m-980 -32 c0 -20 -45\r
-53 -83 -61 -18 -4 -62 -25 -99 -47 -36 -21 -144 -73 -238 -113 -94 -41 -209\r
-95 -255 -120 -174 -95 -210 -110 -475 -205 -208 -74 -250 -95 -250 -124 0\r
-37 58 -79 169 -122 53 -20 170 -70 260 -111 242 -110 488 -214 646 -273 150\r
-56 265 -109 305 -140 23 -18 24 -19 6 -26 -12 -5 -38 0 -65 10 -25 10 -65 22\r
-88 26 -23 5 -80 25 -125 44 -106 43 -263 96 -288 96 -48 0 -34 -51 23 -84 53\r
-31 226 -91 337 -118 171 -41 179 -55 117 -204 -25 -60 -72 -167 -105 -239\r
-33 -71 -103 -251 -157 -400 -126 -348 -137 -373 -169 -381 -13 -3 -49 1 -79\r
10 -80 23 -103 21 -134 -15 -62 -69 -86 -76 -333 -93 -124 -8 -322 -20 -440\r
-26 -118 -6 -411 -22 -650 -36 -239 -14 -501 -28 -582 -31 l-148 -6 0 24 c-2\r
183 -23 672 -35 799 -19 210 -19 378 0 450 8 30 15 73 15 95 0 51 27 95 71\r
117 55 28 315 128 332 128 9 0 94 30 189 67 95 36 284 103 421 149 l247 82\r
318 -108 c174 -60 362 -125 417 -146 192 -70 275 -84 275 -45 0 40 -95 89\r
-281 145 -46 14 -151 52 -234 86 -82 33 -232 88 -333 120 l-183 59 -142 -51\r
c-78 -27 -185 -65 -237 -83 -52 -18 -141 -56 -198 -84 -100 -50 -125 -57 -156\r
-45 -24 9 -19 27 17 64 51 53 142 107 193 115 25 3 90 25 143 47 53 22 106 44\r
119 49 28 11 46 50 39 81 -7 25 -18 32 -97 63 -25 10 -178 82 -340 161 -162\r
78 -319 152 -348 163 -85 34 -207 120 -191 135 9 8 156 -36 233 -70 44 -20\r
146 -60 226 -90 80 -30 197 -76 260 -101 63 -25 167 -65 230 -88 63 -24 138\r
-53 165 -66 84 -38 141 -32 265 28 58 28 157 69 220 91 63 22 194 71 290 110\r
246 98 950 352 978 352 6 0 12 -6 12 -14z m-3540 -21 c22 -23 23 -29 16 -126\r
-7 -106 -17 -139 -42 -139 -27 0 -69 37 -109 94 -33 48 -37 60 -32 93 14 85\r
116 133 167 78z m308 6 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9\r
7 -2 15 -10 17 -17z m187 -7 c14 -15 40 -70 57 -123 l33 -96 0 -400 0 -400\r
-33 -109 c-19 -60 -38 -149 -43 -198 -5 -49 -14 -119 -20 -157 -16 -105 -16\r
-313 1 -536 8 -121 14 -349 15 -580 0 -370 -1 -384 -28 -550 -16 -93 -34 -190\r
-41 -215 -7 -25 -9 -56 -5 -70 11 -38 10 -108 -1 -115 -6 -4 -20 15 -31 41\r
-19 41 -21 60 -16 143 3 53 11 110 18 128 10 24 10 37 1 57 -16 36 -31 33 -79\r
-16 -78 -80 -81 -129 -17 -320 47 -141 79 -201 95 -176 5 7 9 27 9 43 0 17 4\r
36 9 44 14 22 30 -18 51 -129 11 -54 33 -140 49 -192 69 -220 91 -335 91 -478\r
0 -133 -25 -200 -75 -200 -40 0 -45 18 -45 148 0 132 -22 267 -61 377 -11 33\r
-29 94 -39 136 -44 180 -164 465 -275 654 -140 239 -165 309 -190 534 -15 140\r
-21 171 -34 171 -4 0 -25 -30 -46 -67 -47 -80 -100 -142 -132 -154 -51 -19\r
-43 -61 28 -149 87 -108 133 -231 160 -426 13 -93 6 -120 -27 -93 -24 20 -40\r
63 -63 169 -38 173 -180 390 -255 390 -84 0 -164 -51 -197 -125 -10 -22 -23\r
-70 -29 -107 -11 -64 -32 -100 -48 -84 -4 4 -7 69 -6 144 0 160 20 251 84 394\r
58 129 68 173 57 266 -20 181 10 414 79 607 19 55 51 144 70 199 44 123 83\r
295 90 395 4 55 1 103 -14 176 -41 198 -46 258 -46 490 0 302 26 470 80 535\r
49 58 51 39 24 -225 -6 -60 -18 -133 -26 -162 -16 -59 -19 -309 -4 -468 31\r
-336 29 -329 76 -460 57 -162 63 -173 126 -230 107 -96 206 -119 289 -67 75\r
48 164 153 207 244 71 150 101 276 133 548 22 197 -4 650 -46 775 -16 49 -20\r
74 -13 83 15 18 26 15 53 -14z m-368 -96 c-4 -57 -9 -166 -13 -243 l-6 -140\r
68 -50 c84 -62 252 -221 242 -230 -9 -10 -68 27 -153 95 -85 69 -110 83 -135\r
75 -22 -7 -25 -37 -40 -355 -9 -196 -21 -280 -39 -280 -20 0 -22 47 -15 305 5\r
198 3 290 -6 345 -22 135 -44 168 -151 231 -68 40 -94 69 -60 69 10 0 55 -27\r
101 -60 46 -33 91 -60 101 -60 37 0 52 55 58 220 4 85 10 161 14 168 5 6 15\r
12 24 12 14 0 15 -13 10 -102z m3872 71 c25 -9 38 -24 58 -68 15 -31 28 -77\r
31 -104 4 -41 0 -55 -30 -105 -19 -31 -38 -65 -42 -76 -10 -28 12 -93 55 -161\r
21 -34 39 -69 39 -78 0 -23 -33 -38 -114 -53 -38 -8 -80 -21 -93 -30 -35 -22\r
-53 -73 -51 -141 1 -47 -10 -92 -61 -241 -34 -100 -61 -195 -59 -210 4 -38 39\r
-41 67 -6 25 32 24 32 40 -26 16 -56 122 -164 202 -206 47 -25 65 -29 139 -29\r
72 0 92 4 135 27 196 103 345 484 370 950 6 97 12 134 26 157 30 50 103 56\r
127 11 24 -45 -11 -426 -53 -590 -58 -225 -217 -518 -338 -625 -56 -50 -150\r
-99 -208 -110 -48 -9 -136 9 -225 47 -55 22 -85 43 -126 86 -63 66 -109 141\r
-114 184 -4 30 -29 68 -45 68 -4 0 -15 -7 -23 -15 -13 -13 -13 -20 -4 -35 11\r
-16 8 -24 -15 -48 -18 -18 -43 -71 -67 -138 -58 -165 -176 -429 -219 -493 -22\r
-31 -96 -167 -166 -302 -123 -237 -176 -322 -191 -306 -9 8 6 37 78 157 46 78\r
109 235 160 400 10 36 26 80 35 99 8 18 23 61 33 95 10 33 51 131 92 216 42\r
85 106 227 143 315 37 88 91 214 120 280 29 66 56 133 59 149 4 16 18 45 32\r
65 27 40 30 77 9 105 -25 32 -17 55 34 109 89 94 131 242 116 410 -7 81 -8 82\r
-56 130 -27 26 -49 56 -49 66 0 24 30 50 77 67 21 7 38 13 39 14 1 0 15 -5 33\r
-11z m597 -78 c7 -36 -10 -228 -21 -239 -4 -4 -13 2 -21 13 -11 15 -13 36 -8\r
91 5 57 3 76 -10 97 -16 24 -16 27 5 68 20 40 22 42 35 24 8 -10 17 -34 20\r
-54z m-4278 -5 c64 -33 72 -52 97 -227 47 -337 46 -341 -52 -250 -171 159\r
-167 152 -143 336 11 81 20 149 20 151 0 10 54 3 78 -10z m3141 -40 c9 -11 9\r
-41 0 -127 -22 -209 -4 -491 49 -787 15 -82 16 -106 6 -120 -14 -19 -31 -13\r
-284 104 -80 36 -280 122 -445 191 -344 142 -455 192 -455 205 0 12 94 53 218\r
94 113 39 699 333 810 408 73 50 84 53 101 32z m386 -24 c14 -21 33 -73 42\r
-116 16 -74 16 -83 -1 -164 -42 -206 -144 -296 -234 -205 -46 45 -29 54 33 18\r
42 -25 47 -26 69 -12 84 56 140 314 87 401 -12 19 -30 38 -40 41 -27 8 -54 42\r
-48 60 4 9 19 15 37 15 23 0 35 -8 55 -38z m-209 -121 c-18 -35 -26 -67 -26\r
-103 -1 -49 -2 -51 -15 -34 -30 40 -14 128 37 199 21 30 23 30 26 10 2 -12 -8\r
-44 -22 -72z m174 -45 c-1 -64 -19 -178 -32 -193 -23 -28 -33 6 -33 112 0 87\r
3 106 19 124 26 29 46 10 46 -43z m-2735 -130 c160 -80 307 -152 328 -160 69\r
-28 42 -69 -98 -149 -45 -26 -112 -58 -150 -72 -39 -15 -83 -35 -100 -45 -43\r
-26 -300 -120 -330 -120 -36 0 -47 28 -34 87 6 26 12 165 15 308 2 143 6 271\r
9 284 5 20 10 23 38 17 18 -3 163 -71 322 -150z m3170 129 c50 -14 130 -32\r
179 -41 109 -19 160 -43 174 -82 15 -45 3 -55 -45 -38 -76 27 -237 58 -337 65\r
-86 7 -102 11 -118 30 -23 30 -23 46 2 71 26 26 36 25 145 -5z m-4392 -121\r
c18 -9 49 -30 70 -47 l38 -29 -3 -433 c-2 -239 -7 -437 -11 -442 -14 -13 -65\r
56 -97 133 -57 138 -94 357 -107 630 -7 161 3 204 48 204 17 0 44 -7 62 -16z\r
m3706 -160 c17 -37 47 -87 65 -113 47 -64 59 -120 54 -249 -5 -123 -24 -175\r
-61 -170 -27 4 -37 46 -67 278 -11 91 -24 190 -28 220 -7 51 -5 100 3 100 2 0\r
17 -30 34 -66z m745 12 c20 -8 37 -25 44 -42 6 -16 13 -99 16 -184 3 -102 12\r
-186 25 -245 31 -134 26 -285 -9 -285 -14 0 -22 21 -95 250 -35 107 -75 230\r
-91 273 -26 73 -26 81 -14 134 8 37 22 66 40 85 33 32 38 33 84 14z m266 -96\r
c10 -5 21 -23 25 -38 6 -31 -39 -280 -54 -295 -20 -20 -32 37 -33 166 -2 162\r
10 195 62 167z m-519 -42 c19 -20 43 -67 70 -135 14 -36 -7 -36 -48 0 -21 18\r
-59 48 -85 65 -61 42 -66 51 -38 74 31 25 74 23 101 -4z m-3730 -108 c28 -28\r
59 -71 70 -96 18 -40 19 -51 8 -102 -20 -98 -49 -136 -132 -171 -68 -29 -74\r
-27 -81 22 -8 56 17 346 33 375 18 34 47 26 102 -28z m3758 -131 c10 -16 24\r
-55 31 -87 7 -31 24 -88 37 -127 28 -82 52 -229 43 -265 -4 -14 -12 -25 -20\r
-25 -16 0 -23 24 -39 121 -6 40 -33 141 -61 225 -27 85 -50 166 -50 182 0 25\r
2 27 21 17 11 -6 28 -25 38 -41z m112 -51 c32 -62 49 -117 39 -123 -14 -8 -40\r
37 -56 97 -22 83 -17 92 17 26z m-3176 22 c11 -18 -14 -38 -66 -55 -55 -19\r
-70 -15 -48 11 34 41 100 66 114 44z m2957 -33 c22 -47 98 -322 98 -357 0 -19\r
-7 -33 -21 -40 -18 -10 -26 -6 -59 29 -48 50 -111 178 -118 237 -6 57 4 106\r
29 138 28 35 52 33 71 -7z m-3127 -37 c12 -19 -59 -77 -114 -94 -49 -15 -56\r
-15 -70 -1 -14 14 -13 17 7 38 23 22 122 66 154 66 9 1 20 -3 23 -9z m3626\r
-83 c-8 -8 -11 -4 -11 14 0 33 14 47 18 19 2 -12 -1 -27 -7 -33z m-4143 -144\r
c-4 -22 -40 -40 -96 -49 -53 -8 -55 6 -5 41 45 30 106 35 101 8z m-241 -125\r
c5 -70 3 -86 -11 -97 -9 -8 -19 -11 -23 -8 -10 10 -16 142 -9 183 7 33 9 35\r
23 22 10 -11 17 -43 20 -100z m141 -40 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16\r
9 0 14 -5 12 -12z m3499 -308 c-9 -91 -19 -221 -22 -290 -10 -219 -30 -294\r
-135 -520 -77 -164 -99 -224 -107 -292 -3 -27 -12 -56 -19 -65 -14 -20 -2 -25\r
-186 76 -69 38 -118 80 -118 101 0 4 13 27 30 51 16 24 41 80 55 125 13 44 33\r
92 43 105 27 34 201 348 272 490 33 65 72 154 86 196 14 43 42 115 62 159 35\r
77 38 80 46 55 6 -17 4 -83 -7 -191z m457 -54 c77 -11 93 -17 114 -42 24 -27\r
24 -32 19 -148 -5 -125 -19 -195 -63 -306 -34 -85 -57 -110 -104 -110 -69 0\r
-118 71 -141 204 -16 96 -8 331 14 373 25 47 31 49 161 29z m577 -49 c52 -34\r
94 -106 110 -184 21 -103 18 -459 -5 -593 -25 -146 -55 -211 -117 -251 -75\r
-48 -79 -45 -139 97 -51 122 -64 193 -63 354 1 185 36 513 58 547 18 26 67 52\r
101 53 12 0 36 -10 55 -23z m-1856 -769 c17 -13 54 -45 83 -73 182 -170 221\r
-202 303 -241 199 -98 328 -129 607 -144 106 -6 199 -13 208 -17 40 -15 -29\r
-51 -101 -52 -56 -2 -140 -43 -194 -97 -25 -25 -67 -58 -93 -74 -55 -34 -61\r
-59 -21 -85 l27 -18 -26 -22 c-33 -29 -197 -48 -388 -47 -81 1 -168 -5 -217\r
-14 -103 -18 -521 -51 -763 -59 -102 -4 -237 -13 -300 -20 -110 -14 -292 -29\r
-705 -59 -108 -8 -199 -10 -212 -5 -12 4 -70 45 -130 90 -148 112 -269 162\r
-382 156 -38 -2 -47 2 -57 21 -17 35 -3 82 44 141 23 29 46 69 52 89 14 52 12\r
156 -4 225 -10 43 -11 59 -2 62 6 2 169 11 361 19 193 9 391 21 441 27 79 10\r
95 9 122 -5 18 -9 32 -20 32 -25 0 -28 -41 -33 -367 -47 -186 -8 -355 -19\r
-376 -25 -21 -6 -47 -19 -59 -31 -17 -17 -19 -27 -12 -62 4 -22 8 -70 8 -106\r
0 -54 -4 -74 -28 -114 -16 -27 -37 -51 -48 -54 -27 -7 -19 -30 23 -64 30 -25\r
53 -32 130 -43 150 -21 196 -43 299 -140 l55 -51 212 12 c117 7 267 19 335 28\r
68 8 278 26 468 40 190 14 410 30 490 35 80 6 186 15 235 20 50 6 203 15 340\r
21 138 5 262 13 277 16 20 5 30 17 43 52 26 70 54 111 87 128 23 12 29 21 26\r
42 -3 26 -5 27 -57 25 -46 -1 -57 3 -73 22 -19 24 -104 55 -152 55 -16 0 -41\r
14 -65 35 -48 43 -75 45 -96 5 -20 -38 -51 -56 -71 -39 -13 10 -12 15 8 36 31\r
33 16 69 -49 113 -28 19 -79 56 -113 82 -33 26 -77 50 -97 54 -20 4 -117 -1\r
-217 -10 -257 -23 -588 -41 -673 -37 -32 1 -30 35 3 50 34 15 71 19 294 32\r
470 26 460 24 460 109 0 26 3 50 7 53 12 13 39 7 68 -15z m1097 -87 c41 -33\r
75 -110 88 -199 7 -46 11 -84 9 -86 -2 -2 -68 -7 -146 -11 l-142 -7 -31 30\r
c-22 22 -30 40 -30 65 0 75 57 183 112 210 45 23 109 22 140 -2z m-4158 -88\r
c16 -61 17 -83 2 -83 -30 0 -60 72 -39 93 12 13 32 7 37 -10z m2061 -20 c53\r
-20 66 -36 38 -48 -30 -12 -323 -19 -323 -8 0 6 19 28 42 48 l41 38 77 -6 c42\r
-3 98 -14 125 -24z m1071 -48 c-27 -20 -81 -29 -102 -17 -16 9 -14 12 16 20\r
19 6 51 10 70 11 33 0 34 -1 16 -14z m-499 -62 c54 -37 123 -100 123 -113 0\r
-25 -61 3 -104 49 -37 38 -43 39 -51 2 -15 -70 -63 -54 -50 16 8 43 22 73 34\r
73 4 0 26 -12 48 -27z m1905 -12 c17 -35 15 -61 -7 -61 -18 0 -45 45 -45 75 0\r
37 30 29 52 -14z m-2312 3 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21 0 8 5 12\r
10 9 6 -3 10 -13 10 -21z m-178 -48 c48 -28 68 -60 50 -78 -27 -27 -142 66\r
-142 113 0 20 2 20 23 7 12 -8 43 -27 69 -42z m53 34 c0 -22 -32 -37 -47 -22\r
-11 11 -9 16 7 28 22 16 40 14 40 -6z m-397 -24 c3 -12 -1 -17 -10 -14 -7 3\r
-15 13 -16 22 -3 12 1 17 10 14 7 -3 15 -13 16 -22z m1422 13 c32 -7 50 -16\r
50 -25 0 -23 -22 -26 -70 -9 -42 15 -44 14 -66 -6 -21 -19 -27 -20 -53 -9 -30\r
12 -46 34 -35 51 7 12 112 11 174 -2z m-1665 -33 c0 -25 -16 -30 -39 -13 -24\r
17 -12 39 17 35 14 -2 22 -10 22 -22z m1433 -4 c6 -9 12 -25 12 -35 0 -17 -5\r
-19 -32 -13 -18 4 -42 16 -53 27 -20 20 -20 20 -1 35 22 16 55 10 74 -14z\r
m-1713 -13 c12 -19 -4 -22 -30 -5 -29 19 -25 42 5 26 10 -6 22 -15 25 -21z\r
m130 22 c3 -6 -3 -15 -14 -21 -21 -11 -37 2 -26 20 8 13 32 13 40 1z m-295\r
-17 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z\r
m1428 -11 c2 -8 -5 -13 -17 -13 -12 0 -21 6 -21 16 0 18 31 15 38 -3z m-230\r
-20 c5 -18 -23 -16 -39 3 -11 14 -10 15 11 12 13 -1 25 -9 28 -15z m-273 -13\r
c4 -6 4 -18 1 -26 -4 -12 -10 -13 -26 -4 -11 6 -20 17 -20 25 0 17 36 20 45 5z\r
m-110 -16 c23 -24 -1 -48 -38 -38 -31 7 -35 28 -9 43 23 14 28 14 47 -5z\r
m1455 -9 c10 -12 10 -18 0 -30 -7 -8 -18 -15 -25 -15 -21 0 -59 36 -51 48 10\r
17 61 15 76 -3z m-1570 -30 c0 -21 -49 -19 -57 1 -3 9 0 20 8 24 17 11 49 -6\r
49 -25z m2744 25 c20 -7 26 -16 26 -40 0 -25 -4 -30 -23 -30 -22 0 -65 24 -79\r
44 -8 12 18 36 38 36 7 0 24 -4 38 -10z m-1345 -14 c8 -10 8 -16 -1 -23 -15\r
-12 -78 -25 -128 -27 -29 -1 -36 3 -38 21 -4 24 9 30 83 36 22 2 47 4 56 5 9\r
1 22 -4 28 -12z m-1825 -2 c9 -3 16 -15 16 -25 0 -23 -46 -26 -75 -6 -34 26\r
11 49 59 31z m-189 -16 c14 -6 25 -15 25 -20 0 -15 -27 -8 -45 12 -21 23 -16\r
25 20 8z m344 -1 c13 -17 5 -27 -23 -27 -28 0 -50 15 -42 29 10 15 51 14 65\r
-2z m1285 -6 c18 -20 15 -41 -6 -41 -16 0 -48 31 -48 47 0 20 34 16 54 -6z\r
m-125 -17 c35 -29 40 -54 13 -54 -25 0 -104 58 -97 70 11 18 53 10 84 -16z\r
m211 16 c0 -5 -7 -7 -15 -4 -8 4 -15 8 -15 10 0 2 7 4 15 4 8 0 15 -4 15 -10z\r
m-370 -52 c0 -17 -3 -18 -15 -8 -8 7 -15 21 -15 32 0 17 3 18 15 8 8 -7 15\r
-21 15 -32z m-77 -10 c31 -24 68 -51 82 -61 17 -12 25 -26 23 -40 -2 -17 -16\r
-24 -68 -37 -60 -14 -66 -18 -83 -52 -27 -60 -57 -46 -57 26 0 43 21 71 49 63\r
12 -3 30 2 43 12 l21 18 -59 56 c-54 52 -57 57 -33 57 15 0 49 -18 82 -42z\r
m-299 13 c17 -18 16 -20 -4 -26 -26 -8 -45 7 -37 29 8 21 20 20 41 -3z m144 7\r
c19 -19 15 -48 -8 -48 -24 0 -63 37 -55 50 9 14 49 12 63 -2z m1431 -7 c11 -7\r
9 -10 -8 -16 -12 -3 -21 -15 -21 -26 0 -27 -25 -34 -55 -15 -27 18 -32 35 -13\r
54 14 14 77 16 97 3z m-1970 -27 c40 -51 16 -93 -34 -60 -17 11 -25 26 -25 45\r
0 49 27 56 59 15z m-661 -2 c3 -9 -2 -13 -14 -10 -9 1 -19 9 -22 16 -3 9 2 13\r
14 10 9 -1 19 -9 22 -16z m942 -3 l50 -21 -43 -22 -42 -21 3 -62 c5 -89 -17\r
-85 -66 13 -17 33 -42 68 -56 78 -33 21 -35 51 -3 42 12 -3 32 -9 43 -12 13\r
-3 27 1 35 10 18 20 22 20 79 -5z m1491 0 c16 -16 18 -23 8 -35 -20 -25 -89\r
-10 -89 19 0 38 49 48 81 16z m-2069 -6 c20 -18 25 -73 6 -73 -19 0 -33 12\r
-47 37 -25 48 1 72 41 36z m173 -8 c28 -27 33 -63 11 -71 -33 -13 -118 59\r
-101 86 12 19 65 11 90 -15z m1747 -14 c18 -16 30 -32 26 -36 -11 -12 -87 6\r
-110 26 -20 16 -21 20 -8 29 26 17 59 11 92 -19z m-174 -1 c12 -12 22 -25 22\r
-30 0 -13 -103 -23 -147 -15 -77 14 -87 52 -15 58 108 8 118 7 140 -13z m1207\r
-7 c20 -20 15 -87 -7 -110 -9 -8 -48 -17 -99 -21 -207 -17 -279 -4 -248 46 16\r
26 106 67 179 81 30 6 64 13 75 15 47 9 85 5 100 -11z m-3095 -28 c0 -19 -21\r
-19 -46 0 -16 12 -17 16 -5 24 18 12 51 -4 51 -24z m1624 13 c23 -32 20 -48\r
-8 -48 -21 0 -56 22 -56 35 0 7 32 35 40 35 5 0 16 -10 24 -22z m-2664 -14\r
c14 -37 12 -74 -4 -74 -20 0 -36 24 -43 64 -5 32 -3 36 16 36 14 0 25 -9 31\r
-26z m2542 9 c22 -20 23 -36 3 -53 -26 -22 -65 3 -65 40 0 24 4 30 22 30 12 0\r
30 -7 40 -17z m1723 -4 c8 -26 -6 -42 -28 -33 -20 7 -22 25 -5 42 17 17 26 15\r
33 -9z m-2276 -25 c20 -25 28 -54 16 -54 -16 0 -63 31 -69 46 -15 40 23 46 53\r
8z m422 6 c20 -11 26 -40 9 -40 -18 0 -70 30 -70 40 0 13 36 13 61 0z m-535\r
-35 c28 -28 27 -49 -2 -53 -28 -4 -84 34 -84 58 0 30 54 27 86 -5z m1552 -6\r
c2 -9 -8 -20 -23 -27 -31 -14 -45 -15 -65 -2 -12 7 -11 12 5 30 22 25 78 24\r
83 -1z m-206 -6 c25 -22 23 -43 -5 -43 -18 0 -44 12 -76 36 -1 1 0 7 4 13 10\r
17 56 13 77 -6z m-162 -13 c24 -24 25 -39 3 -47 -16 -6 -63 36 -63 58 0 16 39\r
10 60 -11z m-1579 -1 c16 -8 18 -13 8 -25 -6 -8 -20 -14 -30 -14 -23 0 -69 21\r
-69 31 0 19 61 25 91 8z m-182 -18 c14 -25 -10 -45 -44 -37 -29 7 -33 30 -7\r
45 26 15 40 13 51 -8z m1616 -21 c-6 -9 -9 -9 -16 1 -10 17 0 34 13 21 6 -6 7\r
-16 3 -22z m-1759 8 c9 -14 -31 -48 -56 -48 -26 0 -53 33 -38 48 15 15 85 16\r
94 0z m1618 6 c9 -3 16 -15 16 -26 0 -19 -2 -19 -22 -6 -39 26 -34 48 6 32z\r
m1557 -4 c26 -15 24 -39 -6 -50 -35 -13 -109 1 -113 23 -6 30 77 49 119 27z\r
m-1792 -23 c13 -16 5 -27 -21 -27 -11 0 -18 7 -18 20 0 23 22 27 39 7z m-289\r
-16 c7 -13 7 -22 0 -26 -15 -9 -50 4 -50 19 0 31 34 35 50 7z m127 4 c9 -25\r
-4 -29 -17 -6 -7 15 -7 21 0 21 6 0 13 -7 17 -15z m-537 -40 c9 -11 10 -19 2\r
-27 -14 -14 -32 -1 -32 23 0 23 13 25 30 4z m128 -3 c3 -9 -2 -13 -14 -10 -9\r
1 -19 9 -22 16 -3 9 2 13 14 10 9 -1 19 -9 22 -16z m-583 -33 c0 -9 -10 -13\r
-29 -12 -40 3 -51 17 -30 37 14 15 19 15 38 3 11 -8 21 -21 21 -28z m-155 6\r
c15 -18 6 -45 -13 -45 -21 0 -38 25 -31 44 8 20 28 21 44 1z m313 0 c1 -5 -11\r
-12 -27 -13 -27 -3 -28 -2 -16 13 14 17 40 17 43 0z m-821 -55 c15 -7 25 -16\r
23 -20 -3 -5 -40 -11 -82 -15 -89 -8 -133 4 -133 34 0 16 8 20 43 23 53 4 114\r
-5 149 -22z m-632 5 c16 -8 35 -25 41 -37 10 -18 8 -24 -7 -35 -28 -21 -110\r
-17 -134 7 -28 28 -24 46 15 68 27 16 51 15 85 -3z m-172 -97 c17 -17 15 -63\r
-4 -78 -11 -10 -23 -11 -42 -4 -37 13 -40 46 -6 73 31 24 36 25 52 9z`}),l.createElement("path",{d:`M6924 9888 c-11 -21 -20 -71 -24 -138 -5 -78 -14 -125 -35 -180 -52\r
-142 -46 -165 44 -146 28 5 54 7 58 2 11 -11 -11 -41 -34 -44 -10 -2 -27 -15\r
-35 -30 -22 -37 -43 -152 -34 -186 9 -35 47 -53 80 -38 19 8 27 25 41 89 18\r
79 39 127 76 174 34 43 34 92 0 213 -20 72 -31 132 -31 175 0 36 -5 83 -11\r
104 -9 34 -13 37 -44 37 -29 0 -37 -5 -51 -32z m92 -342 c19 -30 15 -70 -8\r
-74 -12 -2 -22 8 -33 34 -8 20 -15 43 -15 50 0 23 38 16 56 -10z m-88 -13 c5\r
-17 -26 -29 -40 -15 -6 6 -7 15 -3 22 9 14 37 9 43 -7z m-3 -283 c-5 -8 -11\r
-8 -17 -2 -6 6 -7 16 -3 22 5 8 11 8 17 2 6 -6 7 -16 3 -22z`}),l.createElement("path",{d:`M8685 9705 c-113 -43 -243 -57 -279 -30 -28 21 -39 19 -84 -19 l-40\r
-33 58 -58 58 -57 38 12 c54 18 108 46 123 64 22 26 38 19 70 -34 33 -53 73\r
-80 119 -80 39 0 49 15 58 78 8 63 32 86 72 71 13 -5 27 -8 29 -5 11 11 -11\r
47 -47 80 -48 43 -85 46 -175 11z`}),l.createElement("path",{d:`M8096 9679 c-96 -26 -104 -141 -10 -143 111 -2 154 4 174 24 19 19\r
19 22 5 51 -23 44 -117 82 -169 68z`}),l.createElement("path",{d:`M9017 9665 c-22 -22 -30 -68 -22 -136 6 -48 10 -59 24 -57 12 2 17\r
19 22 66 3 34 9 65 12 69 4 3 14 -11 22 -33 24 -61 30 -69 56 -72 13 -2 41\r
-24 62 -49 30 -36 35 -48 26 -59 -6 -8 -19 -14 -29 -14 -24 0 -52 -35 -52 -65\r
0 -48 67 -115 116 -115 17 0 18 6 11 73 -5 59 -3 80 11 110 15 32 16 42 5 79\r
-20 67 -78 121 -106 98 -20 -17 -33 -5 -41 38 -10 59 -29 82 -69 82 -18 0 -40\r
-7 -48 -15z`}),l.createElement("path",{d:`M7817 9646 c-50 -19 -67 -34 -67 -62 0 -57 78 -73 143 -29 34 24 74\r
81 64 91 -12 13 -106 13 -140 0z`}),l.createElement("path",{d:`M7540 9610 c-23 -23 -24 -33 -10 -61 21 -38 149 -10 158 34 8 41\r
-112 63 -148 27z`}),l.createElement("path",{d:`M8910 9502 c0 -34 20 -46 45 -28 26 18 15 50 -18 54 -24 3 -27 0 -27\r
-26z`}),l.createElement("path",{d:`M9075 9436 c-16 -12 -17 -16 -6 -30 17 -20 75 -21 91 -1 29 35 -43\r
62 -85 31z`}),l.createElement("path",{d:`M9202 9178 c-7 -7 -12 -24 -12 -39 0 -33 29 -48 46 -24 22 30 -10 87\r
-34 63z`}),l.createElement("path",{d:`M4061 7416 c-24 -29 -71 -371 -71 -519 0 -88 17 -124 77 -162 26 -16\r
73 -52 104 -80 31 -27 95 -72 143 -100 47 -27 130 -78 183 -112 100 -64 136\r
-76 147 -47 13 35 28 279 24 413 -3 156 -12 181 -49 144 -20 -19 -22 -34 -26\r
-185 -5 -225 -9 -248 -36 -248 -25 0 -204 100 -269 151 -24 18 -84 73 -135\r
122 l-92 90 5 66 c23 311 31 371 47 371 6 0 36 -20 66 -43 80 -62 360 -247\r
400 -264 18 -8 40 -12 47 -9 51 20 -46 108 -276 252 -84 52 -171 110 -194 128\r
-51 42 -79 51 -95 32z`}),l.createElement("path",{d:`M11520 6940 c-184 -9 -208 -14 -222 -49 -24 -65 -37 -557 -15 -601\r
12 -24 16 -25 142 -30 172 -7 672 8 711 21 22 7 34 18 39 37 3 15 9 146 12\r
292 4 226 3 271 -10 303 l-16 37 -243 -2 c-134 -1 -313 -4 -398 -8z m600 -309\r
c0 -201 -3 -251 -14 -260 -17 -14 -57 -26 -151 -46 -76 -16 -100 -9 -72 23 26\r
28 49 103 42 139 -4 20 -19 41 -43 60 -33 25 -44 28 -103 25 -53 -2 -71 2 -90\r
17 -20 16 -22 22 -12 44 16 35 70 51 121 37 40 -10 58 -25 77 -64 16 -33 49\r
-27 53 9 6 68 -75 135 -163 135 -55 0 -121 -32 -144 -71 -43 -70 -35 -145 29\r
-280 16 -34 27 -66 24 -71 -7 -12 -126 -9 -223 5 -59 9 -87 18 -97 31 -10 15\r
-12 56 -8 200 6 189 19 260 52 270 69 20 356 42 600 45 l122 1 0 -249z`}),l.createElement("path",{d:`M5510 6909 c-36 -4 -130 -8 -210 -8 -80 0 -152 0 -160 -1 -8 -1 -44\r
2 -80 5 -54 6 -68 5 -79 -9 -15 -18 -24 -106 -41 -397 -6 -107 -15 -221 -19\r
-253 -4 -31 -5 -59 -1 -61 4 -2 47 0 96 6 49 5 238 13 421 17 316 7 333 8 360\r
28 39 30 50 92 62 374 11 223 10 236 -8 260 -10 14 -36 30 -57 37 -44 13 -187\r
14 -284 2z m259 -105 c22 -16 23 -19 16 -123 -3 -58 -8 -158 -10 -221 -3 -114\r
-4 -115 -34 -142 -27 -24 -40 -28 -91 -28 -70 0 -73 6 -30 70 35 52 36 73 12\r
215 -17 99 -18 100 -60 129 -54 38 -140 47 -196 21 -77 -37 -117 -135 -82\r
-203 9 -17 16 -44 16 -61 0 -16 11 -53 25 -83 32 -68 31 -86 -2 -99 -28 -11\r
-275 -5 -294 7 -13 8 -12 501 1 509 22 13 192 22 445 24 226 1 264 -1 284 -15z\r
m-241 -179 c2 -20 -4 -38 -18 -53 -19 -20 -28 -22 -65 -17 -24 4 -51 2 -63 -4\r
-27 -14 -47 9 -38 44 10 41 61 66 126 63 53 -3 55 -4 58 -33z m-15 -169 c6\r
-15 -1 -26 -15 -26 -4 0 -8 9 -8 20 0 23 15 27 23 6z`}),l.createElement("path",{d:`M8306 6506 c-23 -34 -32 -116 -21 -213 6 -59 9 -65 20 -49 16 21 28\r
136 23 226 l-3 65 -19 -29z`}),l.createElement("path",{d:`M8940 6329 c-13 -46 -8 -69 14 -69 20 0 29 34 21 76 -8 46 -22 43\r
-35 -7z`}),l.createElement("path",{d:"M9146 6191 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"}),l.createElement("path",{d:`M9135 6131 c-7 -12 12 -24 25 -16 11 7 4 25 -10 25 -5 0 -11 -4 -15\r
-9z`}),l.createElement("path",{d:`M9230 6061 c-16 -30 -13 -156 4 -170 22 -18 36 16 36 86 0 94 -16\r
128 -40 84z`}),l.createElement("path",{d:"M9142 6043 c-8 -15 -9 -24 -1 -28 15 -10 21 0 17 27 l-3 23 -13 -22z"}),l.createElement("path",{d:`M9885 6456 c-5 -60 -3 -101 3 -112 10 -17 11 -17 21 9 12 30 15 155\r
5 181 -14 35 -22 11 -29 -78z`}),l.createElement("path",{d:`M9873 6184 c-6 -17 3 -99 13 -116 18 -28 34 75 18 116 -8 20 -23 21\r
-31 0z`}),l.createElement("path",{d:"M9884 5937 c-9 -24 6 -44 18 -22 7 11 6 21 -1 28 -7 7 -12 6 -17 -6z"}),l.createElement("path",{d:`M11566 5824 c-147 -7 -274 -15 -281 -18 -17 -6 -32 -103 -49 -328\r
-23 -309 -17 -317 214 -293 82 9 257 20 387 24 131 5 250 14 264 19 33 13 35\r
26 50 297 12 219 13 229 4 263 -14 56 -86 60 -589 36z m493 -81 c24 -15 24\r
-16 15 -122 -5 -58 -9 -145 -9 -192 0 -95 -8 -113 -62 -136 -38 -15 -89 -17\r
-98 -3 -3 5 -1 35 4 66 14 72 -10 256 -37 294 -28 38 -87 63 -151 64 -69 0\r
-108 -20 -145 -73 -36 -51 -36 -105 -3 -181 23 -52 42 -111 54 -171 6 -34 -11\r
-39 -144 -39 -93 0 -104 2 -130 24 l-28 24 -2 171 c-2 114 2 184 10 209 12 37\r
13 37 87 49 41 6 158 16 260 22 102 6 205 13 230 15 66 5 122 -3 149 -21z\r
m-271 -109 l45 -27 -34 -28 c-19 -16 -45 -32 -59 -37 -81 -29 -89 -30 -101\r
-16 -17 20 -4 82 22 110 30 32 71 31 127 -2z m2 -194 c11 -7 12 -15 5 -36 -13\r
-35 -31 -41 -45 -15 -8 15 -8 27 0 41 12 22 18 24 40 10z`}),l.createElement("path",{d:`M5600 5699 c-41 -5 -197 -12 -347 -17 -326 -9 -310 -2 -312 -125 0\r
-45 -8 -161 -16 -257 -8 -96 -15 -199 -15 -229 l0 -54 423 6 c232 3 430 9 439\r
12 9 4 20 14 23 23 4 9 11 112 16 227 5 116 14 239 19 275 12 71 3 113 -28\r
136 -19 15 -88 16 -202 3z m88 -78 c51 -27 54 -45 43 -233 -6 -95 -14 -194\r
-17 -220 -6 -51 -6 -51 -107 -63 -87 -11 -106 14 -67 88 24 44 25 90 5 172 -8\r
33 -14 74 -15 90 0 65 -72 114 -168 115 -98 0 -142 -34 -162 -125 -8 -38 -7\r
-68 10 -153 11 -59 20 -119 20 -134 0 -37 -40 -65 -105 -73 -79 -10 -103 -2\r
-110 38 -9 45 12 385 26 443 l12 45 68 -7 c44 -4 105 -1 176 10 143 21 301 33\r
338 25 17 -3 40 -11 53 -18z m-253 -126 c47 -46 30 -76 -50 -90 -22 -4 -45\r
-12 -52 -17 -6 -5 -24 -8 -40 -6 -23 2 -29 8 -31 34 -8 82 115 138 173 79z\r
m-20 -225 c0 -13 -6 -25 -12 -27 -16 -6 -27 21 -19 43 9 23 31 11 31 -16z m81\r
-47 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m-181 -13 c-5\r
-8 -11 -8 -17 -2 -6 6 -7 16 -3 22 5 8 11 8 17 2 6 -6 7 -16 3 -22z`}),l.createElement("path",{d:`M4916 3234 c-34 -35 -48 -82 -31 -109 20 -33 50 -30 78 7 36 48 42\r
75 23 103 -21 32 -37 31 -70 -1z`}),l.createElement("path",{d:`M5553 3091 c-91 -72 -90 -69 -38 -140 25 -34 51 -61 58 -58 16 5 56\r
141 56 195 1 53 -12 54 -76 3z`}),l.createElement("path",{d:`M4965 3026 c-81 -36 -203 -241 -224 -375 -18 -112 -15 -343 4 -404\r
22 -70 76 -142 125 -167 78 -40 117 -20 172 87 75 144 111 317 112 533 0 140\r
-2 161 -23 214 -41 104 -99 143 -166 112z m87 -158 c19 -33 15 -268 -6 -407\r
-23 -148 -49 -232 -85 -270 -34 -36 -49 -38 -84 -11 -33 26 -47 92 -47 224 0\r
200 63 422 133 471 32 23 74 19 89 -7z`}),l.createElement("path",{d:`M5200 2965 c-15 -18 -8 -37 35 -104 32 -51 62 -54 99 -10 34 40 33\r
64 -3 100 -24 23 -38 29 -74 29 -28 0 -49 -6 -57 -15z`}),l.createElement("path",{d:`M5406 2731 c-51 -34 -111 -143 -153 -278 -25 -83 -27 -99 -27 -288\r
-1 -164 3 -213 18 -270 28 -106 69 -189 122 -245 40 -43 52 -50 85 -50 53 0\r
100 44 144 133 47 98 64 169 76 320 12 155 -2 426 -26 507 -22 72 -71 154\r
-106 174 -36 21 -97 20 -133 -3z m126 -138 c20 -23 44 -132 57 -261 19 -182\r
-19 -443 -81 -569 -19 -37 -30 -49 -51 -51 -34 -4 -51 23 -73 118 -9 41 -22\r
102 -30 135 -23 103 -28 240 -10 350 20 132 58 244 91 273 31 26 76 29 97 5z`}),l.createElement("path",{d:`M4706 2086 c-14 -19 -26 -43 -26 -53 0 -10 -12 -36 -25 -58 -30 -48\r
-32 -88 -5 -115 24 -24 41 -19 97 35 38 37 43 46 42 86 0 48 -28 130 -45 136\r
-6 2 -23 -12 -38 -31z`}),l.createElement("path",{d:`M10112 3320 c-40 -40 -84 -119 -76 -139 7 -20 114 -114 121 -107 3 3\r
9 58 14 123 4 65 11 126 14 136 12 30 -39 21 -73 -13z`}),l.createElement("path",{d:`M10078 1641 c-45 -9 -68 -27 -68 -53 0 -10 28 -52 63 -94 60 -72 154\r
-231 176 -297 6 -17 11 -45 12 -62 3 -50 9 -65 29 -65 10 0 21 3 23 8 11 18\r
-17 148 -58 267 -39 114 -55 172 -79 278 -7 29 -23 32 -98 18z`}))))}function ii(){return l.createElement("div",{className:"flexSVG"},l.createElement("svg",{className:"pastryIMG",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1066.000000pt",viewBox:"0 0 1280.000000 1066.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),l.createElement("g",{transform:"translate(0.000000,1066.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"},l.createElement("path",{d:`M4480 10647 c-22 -7 -100 -11 -210 -9 -134 2 -187 -1 -225 -13 -27\r
-8 -73 -15 -101 -15 -27 0 -55 -5 -62 -12 -7 -7 -48 -11 -116 -10 -71 1 -116\r
-3 -139 -13 -19 -8 -76 -18 -128 -24 -52 -5 -112 -16 -134 -24 -22 -8 -78 -20\r
-124 -27 -85 -12 -158 -34 -355 -110 -59 -23 -138 -49 -175 -57 -42 -11 -78\r
-27 -100 -46 -32 -27 -123 -76 -146 -78 -13 -1 -128 -135 -182 -212 -73 -103\r
-87 -152 -87 -304 -1 -167 -8 -176 -72 -103 -86 94 -187 158 -319 200 -94 30\r
-300 40 -336 17 -13 -8 -46 -19 -72 -22 -31 -5 -51 -14 -58 -26 -5 -11 -25\r
-25 -43 -33 -18 -7 -49 -36 -70 -65 -21 -28 -54 -65 -75 -83 -28 -25 -44 -53\r
-65 -110 -21 -59 -32 -78 -48 -80 -29 -4 -44 -51 -74 -230 -13 -81 -37 -180\r
-52 -220 -26 -71 -27 -79 -26 -263 0 -236 24 -435 65 -560 17 -49 62 -148 100\r
-220 61 -113 75 -132 107 -147 26 -12 50 -37 77 -78 24 -37 58 -72 89 -93 28\r
-19 82 -60 121 -90 38 -31 83 -59 100 -63 16 -3 66 -25 110 -48 44 -24 98 -49\r
120 -56 44 -14 299 -230 360 -304 38 -47 137 -248 178 -363 25 -70 26 -74 10\r
-110 -21 -50 -21 -155 0 -219 11 -31 40 -77 75 -118 84 -99 101 -125 113 -170\r
14 -49 6 -224 -14 -306 l-12 -55 -60 -7 c-33 -3 -101 -23 -152 -42 -52 -20\r
-110 -36 -133 -36 -26 0 -43 -5 -46 -15 -9 -22 -101 -69 -184 -94 -98 -30\r
-289 -113 -441 -192 -20 -10 -51 -19 -69 -19 -22 0 -40 -9 -58 -28 -17 -18\r
-51 -36 -91 -47 -35 -11 -66 -25 -68 -33 -7 -17 -76 -56 -147 -83 -32 -12 -75\r
-36 -95 -53 -20 -17 -61 -51 -92 -74 -31 -23 -76 -64 -101 -92 -25 -27 -53\r
-50 -62 -50 -9 0 -55 -36 -102 -80 -46 -44 -91 -80 -99 -80 -8 0 -28 -26 -44\r
-59 -38 -74 -72 -115 -111 -131 -27 -11 -43 -37 -111 -172 -175 -350 -230\r
-549 -215 -786 5 -88 13 -126 56 -253 83 -246 201 -489 250 -514 48 -25 98\r
-84 120 -141 30 -82 259 -346 351 -404 33 -22 52 -43 63 -70 13 -32 34 -52\r
118 -108 57 -38 120 -87 140 -110 22 -24 49 -43 70 -47 47 -10 94 -36 162 -89\r
32 -25 65 -46 73 -46 24 0 92 -39 103 -60 6 -11 18 -20 28 -20 34 -1 89 -27\r
142 -67 34 -25 91 -54 146 -73 52 -18 104 -44 122 -60 21 -19 53 -33 103 -44\r
40 -9 128 -38 195 -65 67 -28 150 -55 184 -61 35 -6 72 -17 84 -25 12 -7 50\r
-16 86 -20 41 -5 101 -22 160 -48 87 -37 104 -41 220 -47 128 -8 143 -11 245\r
-53 50 -20 84 -25 197 -31 91 -4 153 -12 185 -23 40 -15 78 -17 231 -15 175 2\r
185 1 250 -24 62 -24 76 -25 182 -21 63 3 137 10 164 17 38 10 50 10 56 0 6\r
-10 9 -9 12 1 4 11 8 11 19 3 16 -13 149 -24 149 -12 0 4 7 5 15 2 8 -4 21 -2\r
28 3 6 5 41 10 76 11 56 1 68 5 89 27 27 29 24 29 174 -8 83 -20 87 -21 106\r
-4 15 14 29 17 55 12 24 -5 45 -1 68 10 54 29 86 35 264 50 145 13 204 24 401\r
74 127 32 271 75 320 96 66 27 102 37 137 36 38 -2 54 3 78 23 16 14 47 30 67\r
35 20 6 73 20 117 31 62 16 94 32 139 67 45 34 74 49 121 58 73 16 141 48 243\r
117 69 47 76 49 103 37 20 -8 58 -10 111 -6 45 3 91 2 103 -3 18 -7 33 -43 83\r
-193 102 -304 163 -585 181 -827 7 -92 14 -126 34 -165 13 -28 34 -81 45 -119\r
22 -73 17 -102 -22 -135 -9 -8 -16 -22 -16 -31 0 -23 96 -109 160 -144 l49\r
-27 263 16 c193 12 267 20 278 30 31 28 102 44 218 51 99 5 128 11 186 36 38\r
17 98 34 133 39 36 5 68 11 72 13 4 3 43 9 88 16 45 6 144 31 220 56 141 47\r
150 48 254 29 29 -6 40 -2 67 20 29 24 39 27 80 22 26 -3 56 -2 67 2 15 6 29\r
-1 62 -34 23 -23 63 -53 90 -66 42 -21 62 -24 163 -24 110 0 119 2 180 32 36\r
18 94 57 129 87 70 60 67 59 231 82 63 8 140 25 170 36 32 12 93 23 145 27 60\r
4 105 14 135 28 37 17 71 22 190 26 92 4 180 14 240 27 67 16 113 20 156 16\r
36 -3 65 -1 71 5 7 7 100 12 239 13 169 2 270 9 384 25 85 12 155 23 156 24\r
35 56 85 163 90 194 9 57 1 83 -41 133 -51 61 -47 99 14 129 74 38 76 44 51\r
173 -39 210 -100 421 -250 868 -168 502 -188 566 -230 745 -17 70 -43 152 -59\r
184 -45 90 -87 213 -136 401 -64 246 -90 329 -142 455 -75 182 -100 262 -138\r
445 -31 149 -44 190 -86 275 -56 114 -68 157 -109 382 -42 230 -55 281 -110\r
433 -53 145 -80 240 -80 278 0 14 -13 39 -29 57 -18 21 -34 57 -45 103 -16 63\r
-20 70 -46 75 -18 4 -36 19 -50 42 -19 30 -27 35 -60 35 -21 0 -84 9 -140 20\r
-123 24 -134 24 -165 4 -22 -14 -37 -15 -119 -5 -52 6 -118 11 -147 11 -28 0\r
-108 11 -178 25 -110 23 -129 29 -146 53 -11 14 -52 61 -91 102 -97 103 -152\r
214 -200 404 -34 135 -43 152 -108 220 -31 33 -59 70 -62 82 -5 19 -26 29\r
-117 60 -62 20 -128 44 -147 54 -24 12 -44 15 -62 9 -15 -4 -62 -3 -103 2 -62\r
8 -87 7 -135 -7 -32 -9 -76 -14 -97 -12 -40 5 -52 -4 -223 -159 -83 -75 -109\r
-146 -125 -335 -5 -58 -10 -76 -20 -72 -9 4 -15 -4 -17 -23 -2 -20 -9 -29 -24\r
-31 -16 -2 -29 -20 -48 -67 -31 -70 -84 -138 -126 -160 -16 -8 -64 -19 -107\r
-23 -49 -6 -97 -19 -128 -34 -28 -14 -77 -31 -110 -38 -69 -14 -181 -61 -243\r
-102 -37 -24 -53 -28 -115 -28 l-73 0 -47 -187 c-25 -104 -49 -214 -53 -245\r
-4 -37 -11 -58 -19 -58 -7 0 -21 -25 -31 -56 -9 -30 -30 -75 -47 -100 -57 -86\r
-125 -94 -201 -24 -31 28 -57 43 -95 51 -31 6 -70 25 -98 46 -38 29 -115 58\r
-406 156 l-360 120 6 326 c3 179 18 497 32 706 35 529 44 837 51 1865 l6 895\r
23 67 c23 67 23 68 4 92 -24 30 -24 42 1 73 16 21 20 41 20 104 0 72 -2 79\r
-29 107 -23 22 -31 41 -36 88 -7 59 -7 59 -103 152 -142 137 -251 202 -339\r
202 -13 0 -23 4 -23 10 0 5 -13 16 -30 25 -16 9 -30 22 -30 30 0 11 -11 15\r
-37 15 -21 0 -58 7 -83 16 -25 9 -60 13 -77 11 -18 -3 -35 -1 -38 4 -17 27\r
-91 50 -192 60 -79 8 -119 17 -153 35 -41 22 -56 24 -190 24 -112 1 -149 4\r
-164 15 -14 10 -45 15 -101 15 -45 0 -97 5 -115 11 -19 7 -35 8 -39 3 -8 -11\r
-61 -10 -171 5 -101 13 -143 13 -190 -2z m470 -111 c168 -16 368 -44 384 -54\r
6 -3 51 -7 101 -8 82 -1 100 -5 203 -48 114 -47 152 -55 152 -34 0 6 8 3 20\r
-7 15 -13 30 -16 61 -12 37 5 56 -2 163 -56 66 -34 153 -76 191 -94 77 -34\r
147 -91 206 -166 32 -40 39 -57 39 -92 0 -97 -38 -209 -82 -239 -47 -33 -80\r
-22 -216 74 -144 101 -271 171 -352 194 -30 9 -104 22 -163 31 -73 10 -124 23\r
-155 39 -40 21 -65 25 -162 29 -92 3 -129 9 -185 30 -66 25 -71 26 -83 9 -12\r
-16 -14 -16 -24 1 -9 17 -21 18 -157 12 -117 -5 -163 -3 -231 10 -47 10 -139\r
19 -204 22 -101 4 -121 3 -131 -10 -10 -14 -24 -13 -131 8 -153 32 -283 34\r
-308 6 -22 -24 -96 -41 -183 -41 -36 0 -91 -6 -122 -14 -31 -8 -94 -20 -141\r
-27 -47 -6 -92 -17 -100 -24 -8 -7 -53 -15 -100 -19 -135 -10 -172 -17 -210\r
-42 -19 -12 -87 -37 -150 -54 -157 -44 -354 -138 -378 -181 -9 -17 -29 -48\r
-44 -70 -26 -36 -30 -38 -53 -27 -42 19 -67 70 -66 137 0 139 77 225 346 386\r
111 66 142 80 215 95 47 10 141 36 210 58 162 53 242 72 310 72 43 0 59 5 73\r
20 12 15 29 20 66 20 52 0 256 20 456 45 66 8 156 19 200 24 133 14 566 12\r
735 -3z m-942 -472 c12 -4 22 -14 22 -24 0 -10 7 -23 15 -30 8 -7 15 -19 15\r
-26 0 -36 79 6 87 46 5 28 9 30 49 30 l43 0 3 -67 3 -68 39 0 c50 -1 71 27 61\r
83 -6 38 -5 39 26 46 17 3 62 6 99 6 l68 0 -15 -39 c-9 -22 -13 -51 -9 -64 7\r
-28 40 -41 69 -25 16 8 18 17 14 51 -3 23 -8 51 -13 61 -7 18 -3 19 55 13 34\r
-3 64 -7 66 -9 2 -1 -2 -27 -7 -56 -9 -46 -8 -55 7 -72 37 -41 79 -14 91 57 6\r
39 8 41 45 45 22 2 57 2 79 0 35 -4 43 -9 60 -42 42 -83 119 -96 120 -22 1 38\r
13 43 71 25 l54 -16 -32 -10 c-30 -9 -33 -13 -33 -50 0 -41 22 -77 46 -77 24\r
0 47 59 40 102 l-6 39 57 -3 c55 -3 58 -4 64 -33 4 -16 10 -37 13 -46 6 -13\r
-1 -17 -29 -22 -47 -8 -65 -23 -65 -56 0 -29 30 -54 54 -45 7 3 25 25 37 50\r
13 24 28 44 32 44 4 0 7 -37 5 -82 l-3 -83 32 -3 c23 -2 35 3 47 20 24 34 20\r
54 -18 85 l-34 28 29 64 c34 74 42 72 68 -10 29 -87 67 -92 101 -14 11 25 26\r
45 33 45 25 0 64 -39 81 -80 17 -43 38 -51 67 -24 15 14 20 11 54 -30 21 -26\r
44 -46 51 -46 8 0 24 11 36 25 14 16 32 25 51 25 28 0 29 -1 22 -39 -5 -29 -1\r
-52 14 -87 23 -51 29 -51 78 6 l22 25 16 -39 c43 -102 -25 -166 -192 -183 -60\r
-6 -63 -5 -63 16 0 14 -10 26 -27 33 -16 7 -36 18 -45 26 -16 13 -19 12 -29\r
-14 -6 -16 -8 -48 -5 -71 5 -37 2 -44 -25 -67 -53 -45 -135 -44 -230 4 -52 27\r
-68 25 -74 -7 -16 -78 -21 -88 -43 -91 -33 -5 -52 15 -52 55 l0 34 -47 -3 -48\r
-3 0 -58 c-1 -40 -5 -61 -15 -67 -19 -12 -151 -12 -170 0 -12 7 -12 12 0 34\r
25 49 50 67 83 64 27 -3 36 3 64 42 19 25 43 55 55 68 l21 23 -31 31 -31 32\r
-18 -23 c-10 -12 -41 -34 -68 -49 -38 -21 -52 -35 -60 -60 -9 -30 -12 -33 -39\r
-28 -15 3 -35 6 -44 6 -11 0 -13 8 -8 39 5 35 3 42 -20 60 -28 22 -59 15 -71\r
-16 -6 -16 32 -58 72 -81 16 -9 15 -15 -19 -68 -20 -33 -36 -68 -36 -79 0 -16\r
-11 -23 -53 -33 -84 -19 -92 -17 -107 28 -13 41 -14 41 -58 38 -46 -3 -56 -12\r
-66 -58 -5 -23 -9 -25 -74 -27 -66 -2 -70 -1 -91 27 -28 38 -56 38 -75 1 -21\r
-39 -74 -46 -248 -32 -73 7 -153 13 -178 14 l-45 2 0 43 0 43 -40 -3 c-39 -3\r
-40 -4 -45 -43 -5 -38 -6 -40 -40 -39 -19 0 -59 7 -88 16 l-54 14 26 17 c14\r
10 33 29 42 43 16 24 16 26 -3 45 -10 11 -36 22 -57 26 -30 5 -41 2 -56 -15\r
-26 -27 -25 -34 5 -62 29 -27 33 -60 8 -60 -10 0 -34 5 -54 10 -31 9 -36 14\r
-37 40 -1 50 -12 70 -36 70 -23 0 -76 -44 -76 -63 0 -14 -124 -2 -183 19 -38\r
13 -47 20 -41 33 27 64 28 70 15 85 -18 21 -87 21 -95 0 -3 -9 -6 -31 -6 -50\r
0 -32 -1 -33 -27 -23 -45 17 -89 55 -119 104 -36 56 -67 58 -99 7 -18 -29 -24\r
-32 -54 -28 -40 6 -48 16 -56 71 -10 58 -30 85 -65 85 -24 0 -29 -5 -33 -27\r
-2 -18 -5 -11 -6 18 -1 52 -27 94 -52 84 -8 -3 -23 -19 -33 -35 -18 -32 -36\r
-39 -36 -16 0 14 33 58 76 101 11 11 25 29 31 39 7 13 29 21 69 28 33 5 110\r
29 172 54 117 48 212 77 212 66 0 -4 -7 -16 -15 -26 -21 -28 -19 -62 5 -86 17\r
-17 24 -18 41 -10 31 17 34 38 10 87 -23 48 -21 63 9 63 11 0 43 6 72 14 29 7\r
76 17 103 20 l51 7 -4 -41 c-3 -32 1 -49 18 -72 l22 -30 -26 -27 c-34 -35 -33\r
-45 9 -76 38 -29 48 -27 70 14 13 27 13 30 -15 55 l-30 26 22 44 c20 43 21 46\r
4 71 l-17 26 46 20 c67 29 205 54 227 40 13 -8 19 -7 26 6 9 14 11 15 32 0 20\r
-14 27 -14 69 0 52 16 133 41 141 42 3 0 15 -2 28 -5z m-2148 -411 c158 -77\r
176 -93 221 -187 25 -53 52 -93 72 -109 20 -15 55 -67 91 -133 86 -159 99\r
-174 152 -174 55 0 67 18 48 72 -13 39 -10 68 8 68 5 0 33 11 62 25 44 21 57\r
23 88 14 113 -31 205 -303 168 -499 -12 -63 -108 -232 -128 -225 -8 3 -23 -2\r
-35 -10 -28 -20 -113 -19 -196 1 -133 33 -224 101 -291 217 -29 51 -50 119\r
-99 325 -32 134 -77 241 -119 285 -15 16 -54 42 -87 59 -33 17 -74 41 -92 54\r
-29 22 -36 23 -78 14 -26 -6 -74 -24 -108 -41 -76 -39 -244 -163 -251 -187\r
-32 -106 -67 -333 -73 -477 -8 -204 21 -429 69 -532 13 -29 64 -92 129 -158\r
58 -60 111 -120 118 -133 6 -12 35 -34 64 -48 74 -38 146 -89 264 -186 106\r
-88 116 -94 198 -122 113 -40 132 -49 165 -81 19 -18 67 -53 105 -78 39 -24\r
96 -68 129 -96 32 -29 70 -54 85 -57 20 -4 35 -21 62 -72 144 -270 170 -324\r
183 -382 18 -76 19 -186 3 -250 -10 -38 -18 -48 -52 -64 -52 -24 -72 -42 -80\r
-73 -8 -32 7 -43 57 -43 46 0 96 41 135 109 14 25 37 61 51 80 l25 34 -17 93\r
c-24 124 -65 240 -113 317 -22 34 -52 95 -67 135 -34 89 -93 168 -184 249\r
l-69 61 -12 199 c-20 335 -31 544 -31 630 l0 82 38 6 c195 28 264 64 348 179\r
l21 29 65 -22 c64 -21 94 -44 117 -89 l12 -23 30 21 29 21 88 -25 c179 -51\r
451 -99 702 -125 315 -32 920 -43 949 -17 18 16 138 39 191 37 199 -7 212 -6\r
318 32 57 20 156 46 220 57 134 24 187 39 292 85 41 17 113 45 159 60 51 17\r
95 38 110 54 14 14 42 33 61 42 19 9 82 51 139 93 57 42 107 76 111 76 22 0\r
39 -348 40 -826 0 -296 -3 -389 -16 -460 -12 -70 -14 -125 -9 -254 4 -109 1\r
-256 -10 -430 -24 -411 -45 -853 -45 -985 -1 -113 -2 -124 -30 -180 -34 -67\r
-37 -106 -14 -150 19 -36 16 -102 -27 -670 -18 -226 -34 -537 -39 -740 -9\r
-356 -17 -426 -56 -526 -41 -102 -67 -130 -199 -214 -69 -44 -148 -97 -175\r
-117 -27 -21 -60 -38 -72 -38 -13 0 -57 -16 -98 -36 -41 -19 -87 -37 -102 -39\r
-33 -4 -68 -22 -68 -35 0 -6 -26 -10 -59 -10 -46 0 -70 -6 -117 -32 -48 -25\r
-77 -33 -154 -40 -68 -6 -97 -13 -103 -24 -8 -14 -10 -13 -22 3 -12 17 -14 17\r
-32 1 -22 -21 -127 -37 -233 -38 -41 0 -151 -9 -245 -20 -218 -26 -302 -25\r
-401 1 -53 14 -133 24 -245 29 -156 8 -174 11 -294 50 -69 23 -152 44 -183 47\r
-44 4 -79 17 -152 58 -52 29 -142 79 -199 110 -227 126 -352 241 -400 368 -9\r
24 -7 31 18 58 19 19 27 37 24 49 -6 24 -11 25 -35 3 -10 -9 -21 -14 -24 -11\r
-3 3 -9 401 -14 884 -5 484 -14 1002 -21 1152 -6 151 -8 277 -4 280 3 4 38 8\r
78 10 85 5 96 13 168 119 57 83 69 122 44 143 -22 18 -52 -5 -128 -98 l-57\r
-70 -38 13 c-20 7 -68 18 -107 23 -58 9 -75 16 -97 41 -44 50 -53 96 -42 228\r
6 69 7 139 2 172 -11 71 -78 210 -158 326 -34 50 -83 123 -108 162 -26 40 -55\r
75 -64 78 -42 14 -168 106 -213 157 -37 40 -60 57 -86 62 -20 3 -74 27 -122\r
51 -47 25 -97 45 -112 45 -15 0 -34 9 -45 23 -73 87 -82 95 -115 101 -52 10\r
-95 53 -183 184 -96 141 -123 194 -150 291 -12 40 -27 78 -35 85 -32 25 -58\r
232 -58 475 -1 175 11 249 68 426 76 236 139 349 282 502 l76 82 180 -2 180\r
-2 85 -42z m4596 -50 c18 -29 -1 -225 -29 -309 -43 -127 -110 -209 -227 -278\r
-30 -18 -102 -63 -160 -99 -58 -37 -139 -81 -180 -97 -77 -32 -95 -40 -143\r
-66 -15 -8 -51 -17 -80 -18 -30 -2 -63 -8 -74 -14 -11 -6 -65 -21 -119 -33\r
-57 -12 -118 -32 -144 -47 -44 -26 -51 -27 -240 -32 -157 -4 -200 -8 -220 -21\r
-16 -11 -56 -19 -106 -22 -54 -3 -91 -11 -109 -23 -25 -17 -28 -17 -57 1 -30\r
17 -32 17 -44 0 -10 -13 -17 -15 -26 -8 -25 19 -64 23 -148 12 -77 -10 -96 -8\r
-209 15 -122 26 -254 33 -296 17 -14 -6 -28 -2 -44 10 -14 11 -40 19 -62 19\r
-27 0 -45 6 -57 21 -16 19 -24 20 -112 14 -109 -8 -128 -3 -201 55 -46 36 -56\r
40 -107 40 -81 -1 -380 96 -386 125 -51 237 -102 361 -187 451 -49 51 -54 54\r
-66 38 -12 -16 -13 -16 -13 -1 0 15 -8 14 -67 -9 -38 -14 -96 -40 -130 -59\r
l-63 -35 0 32 c0 44 40 108 92 145 l44 32 123 -49 c67 -27 144 -65 170 -84 38\r
-28 58 -36 92 -36 55 0 117 -17 244 -64 70 -27 110 -36 133 -33 22 4 32 2 32\r
-8 0 -18 37 -26 170 -34 76 -5 126 -14 148 -25 29 -15 60 -17 232 -14 l198 3\r
27 -25 c27 -25 27 -25 219 -24 165 1 196 3 219 18 25 17 29 17 82 1 37 -12 67\r
-15 92 -10 36 7 47 7 91 4 9 -1 44 6 77 16 45 14 102 18 232 20 152 2 178 5\r
217 24 56 26 101 36 236 51 74 9 111 18 125 30 11 10 42 22 70 26 29 4 65 18\r
88 35 43 31 121 59 244 87 89 21 135 49 293 180 47 39 90 71 95 72 6 0 15 -8\r
21 -17z m-4677 -352 c75 -39 126 -134 191 -356 53 -181 96 -298 131 -355 24\r
-39 37 -48 101 -73 40 -15 84 -36 97 -46 31 -23 38 -69 47 -303 l7 -178 -31 0\r
c-17 0 -48 -9 -69 -19 -47 -23 -216 -46 -284 -38 -37 5 -58 13 -75 32 -12 14\r
-30 25 -37 25 -25 0 -119 69 -195 144 -41 39 -114 124 -163 189 l-90 117 -11\r
88 c-6 48 -11 185 -11 304 0 215 0 217 27 271 96 197 227 268 365 198z m7828\r
-2302 c36 -18 88 -34 115 -37 45 -4 52 -9 92 -60 159 -200 237 -534 235 -1012\r
0 -200 -16 -461 -29 -473 -3 -3 -29 0 -58 6 -48 10 -54 9 -73 -10 -27 -27 -18\r
-44 54 -106 66 -56 72 -76 87 -285 6 -78 30 -260 54 -405 51 -298 61 -383 76\r
-622 6 -93 31 -307 56 -475 24 -167 49 -363 54 -435 7 -79 16 -135 24 -145 7\r
-8 16 -26 19 -40 15 -60 98 -747 107 -873 5 -75 12 -142 15 -147 3 -5 17 -62\r
30 -127 23 -107 34 -283 19 -283 -3 0 -14 4 -24 10 -12 7 -33 5 -67 -5 -26 -8\r
-67 -15 -90 -15 -40 0 -43 -2 -43 -28 0 -33 33 -72 61 -72 11 0 31 8 45 17 21\r
13 30 14 45 5 29 -18 55 -14 66 11 10 20 11 19 23 -23 41 -150 80 -439 66\r
-494 -12 -48 -31 -24 -34 43 -4 78 -21 89 -63 37 -53 -63 -128 -41 -80 24 42\r
58 20 90 -63 90 -41 0 -46 -2 -46 -23 0 -13 13 -34 31 -50 43 -38 36 -62 -19\r
-61 -38 1 -50 7 -96 53 -29 28 -55 48 -59 45 -4 -4 -7 -24 -7 -45 0 -20 -3\r
-44 -6 -53 -10 -25 -50 -19 -68 10 -13 18 -24 24 -44 22 -26 -3 -27 -4 -24\r
-65 1 -35 -1 -63 -6 -63 -23 0 -37 119 -34 300 1 102 -2 300 -8 440 -5 140\r
-14 471 -20 735 -33 1497 -64 2397 -90 2605 -15 118 -28 158 -69 213 -26 35\r
-42 47 -63 49 -15 0 -34 1 -40 2 -21 2 -21 -44 -2 -80 18 -34 18 -34 -6 -58\r
-28 -27 -153 -67 -210 -68 -68 -1 -106 39 -194 199 -29 54 -69 125 -89 157\r
-103 168 -213 566 -239 866 -17 206 9 479 58 597 33 79 140 165 253 202 149\r
51 274 51 378 0z m-864 -839 l64 0 11 -37 c6 -21 34 -136 61 -256 109 -470\r
155 -586 316 -802 45 -60 90 -124 100 -141 14 -25 29 -33 88 -49 84 -23 99\r
-22 195 10 96 33 118 33 125 -2 4 -16 13 -59 22 -98 29 -135 44 -333 55 -725\r
30 -1158 58 -2164 70 -2575 l9 -310 -24 -41 c-46 -78 -136 -154 -280 -234 -33\r
-18 -94 -55 -135 -81 -57 -36 -82 -46 -102 -42 -14 3 -58 -2 -97 -11 -39 -9\r
-90 -16 -113 -15 -30 1 -70 -10 -128 -36 -47 -20 -130 -50 -185 -66 -55 -16\r
-124 -38 -153 -49 -76 -29 -200 -56 -322 -71 -94 -11 -114 -17 -196 -61 -51\r
-27 -111 -51 -137 -54 l-46 -7 -5 34 c-9 59 -39 684 -61 1274 l-14 380 37 40\r
c21 22 83 88 138 146 55 58 146 164 201 235 56 71 127 154 159 184 124 118\r
135 132 194 253 232 474 240 1057 20 1426 -65 110 -111 169 -232 297 -58 61\r
-108 125 -120 151 -16 36 -29 49 -64 64 -24 11 -50 30 -59 42 -8 12 -55 51\r
-103 87 l-87 65 -8 245 c-4 135 -6 316 -5 402 l3 157 30 31 c74 78 196 130\r
451 194 99 25 191 49 205 54 14 6 31 6 41 1 9 -5 46 -9 81 -9z m1498 -80 c69\r
0 148 -17 200 -44 31 -16 56 -22 78 -18 22 3 36 0 42 -9 6 -11 14 -11 41 -2\r
22 8 83 11 183 8 356 -11 405 -20 466 -84 29 -31 37 -50 48 -108 14 -79 54\r
-171 96 -221 15 -18 36 -61 47 -95 18 -56 80 -332 128 -564 11 -50 48 -170 84\r
-266 36 -95 75 -209 86 -253 12 -43 46 -158 75 -254 29 -96 90 -301 135 -455\r
45 -154 108 -360 140 -459 33 -98 73 -237 91 -310 18 -74 50 -172 75 -226 24\r
-54 67 -183 98 -300 43 -156 69 -231 110 -315 34 -69 68 -159 90 -240 20 -71\r
52 -186 71 -254 38 -135 65 -274 65 -334 0 -34 -7 -45 -72 -107 -66 -63 -77\r
-70 -126 -76 -49 -6 -82 -24 -82 -44 0 -5 -15 -4 -32 1 -20 6 -156 9 -336 7\r
-238 -2 -304 0 -311 10 -6 10 -19 10 -67 -3 -32 -9 -133 -19 -224 -24 -91 -4\r
-175 -13 -185 -18 -16 -9 -295 -20 -340 -14 -6 0 -21 19 -35 41 -15 25 -35 43\r
-50 46 -49 11 -68 23 -106 71 -21 26 -52 64 -70 83 -31 34 -33 41 -53 200 -12\r
91 -50 386 -85 655 -36 270 -97 753 -136 1075 -60 488 -76 591 -93 619 -16 26\r
-20 48 -18 110 1 42 -5 112 -14 156 -8 43 -27 176 -40 295 -51 436 -77 618\r
-102 725 -14 61 -26 142 -26 180 -1 60 3 78 28 125 l30 55 1 305 c0 229 3 311\r
13 329 9 17 16 20 24 12 6 -6 32 -11 58 -11z m-3741 -685 c17 -10 59 -14 135\r
-15 140 0 251 -18 500 -82 196 -49 291 -85 301 -113 4 -10 15 -12 34 -9 21 5\r
31 1 42 -15 11 -15 51 -30 147 -56 73 -19 142 -40 154 -47 31 -16 102 -75 159\r
-130 38 -38 55 -48 81 -48 28 0 38 -7 58 -37 13 -20 43 -51 66 -67 27 -19 66\r
-67 104 -126 33 -52 89 -122 124 -155 58 -55 70 -74 143 -230 167 -357 178\r
-471 89 -920 -43 -215 -45 -222 -85 -275 -23 -30 -52 -78 -64 -107 -18 -40\r
-29 -53 -50 -57 -17 -3 -36 -19 -51 -43 -14 -21 -58 -76 -100 -121 -42 -45\r
-78 -91 -82 -101 -3 -10 -29 -34 -58 -54 -28 -20 -68 -59 -87 -86 -19 -28 -43\r
-50 -53 -51 -9 0 -37 -18 -61 -40 -27 -25 -63 -46 -94 -55 -27 -8 -78 -35\r
-113 -58 -35 -24 -93 -60 -129 -79 -36 -20 -74 -45 -84 -56 -9 -11 -61 -35\r
-114 -53 -53 -18 -188 -80 -299 -136 -143 -73 -221 -107 -270 -117 -38 -8\r
-125 -36 -193 -61 -149 -55 -226 -75 -301 -75 -43 0 -60 -5 -74 -20 -9 -10\r
-42 -24 -73 -31 -31 -6 -72 -20 -92 -30 -30 -17 -47 -19 -114 -13 -69 6 -81 5\r
-92 -11 -10 -13 -35 -20 -99 -26 -58 -5 -93 -13 -105 -24 -17 -15 -19 -15 -28\r
2 -10 16 -14 17 -44 4 -19 -8 -88 -17 -163 -21 -103 -5 -140 -11 -176 -28 -43\r
-20 -56 -21 -197 -15 -130 5 -157 4 -197 -12 -42 -16 -70 -17 -268 -10 -184 6\r
-229 4 -265 -8 -38 -13 -47 -13 -90 1 -39 14 -86 16 -267 14 -204 -2 -226 0\r
-310 22 -106 29 -190 40 -466 65 -138 13 -216 24 -237 35 -17 9 -48 16 -70 16\r
-21 0 -61 7 -88 15 -81 23 -277 64 -348 71 -36 4 -66 10 -66 14 0 11 -49 30\r
-79 30 -15 0 -86 20 -157 44 -71 25 -176 61 -234 80 -58 20 -134 49 -170 66\r
-36 16 -96 38 -135 50 -38 12 -97 39 -130 60 -71 46 -106 60 -147 60 -22 0\r
-43 12 -75 41 -25 23 -83 59 -131 80 -146 66 -166 78 -183 107 -11 19 -47 44\r
-110 76 -89 46 -105 59 -292 248 -108 110 -206 217 -218 239 -11 22 -34 49\r
-52 59 -29 17 -40 39 -100 200 -92 245 -111 329 -110 500 0 112 5 151 26 230\r
89 334 356 699 709 968 52 39 88 74 88 85 0 11 8 17 23 17 13 0 57 23 97 52\r
70 48 77 51 131 49 42 -1 69 4 99 19 23 12 94 35 158 52 126 32 154 44 198 81\r
19 17 84 40 193 71 90 26 182 56 203 67 43 22 100 26 346 22 142 -3 152 -4\r
152 -22 0 -11 6 -21 13 -23 9 -4 13 -55 15 -200 l3 -195 -31 -6 c-62 -13 -188\r
-70 -355 -162 -147 -81 -173 -99 -188 -130 -9 -19 -22 -35 -28 -35 -6 0 -61\r
-40 -122 -88 -62 -49 -119 -91 -127 -94 -36 -13 -212 -340 -295 -545 -40 -100\r
-42 -108 -29 -139 8 -18 18 -82 23 -142 9 -95 14 -115 39 -153 16 -24 41 -76\r
56 -115 15 -40 36 -80 47 -90 12 -11 45 -53 75 -95 55 -79 118 -142 158 -160\r
13 -6 33 -28 45 -49 24 -43 85 -101 156 -150 28 -18 71 -51 96 -72 35 -28 56\r
-38 82 -38 20 0 40 -6 44 -14 11 -19 65 -50 152 -86 41 -17 89 -42 107 -55 19\r
-14 58 -30 89 -36 70 -13 136 -36 255 -89 80 -36 106 -43 165 -45 41 -1 82 -8\r
100 -17 36 -19 122 -38 173 -38 57 0 167 -27 198 -47 22 -14 50 -18 129 -19\r
72 -1 127 -8 194 -26 83 -22 98 -23 120 -12 34 18 56 18 71 -1 10 -12 38 -15\r
129 -15 86 0 122 -4 137 -14 17 -13 22 -13 43 1 22 14 56 15 270 9 209 -6 261\r
-5 341 10 52 9 101 22 109 29 11 11 22 11 60 -1 56 -17 103 -18 119 -2 8 8 15\r
8 24 0 9 -7 33 -4 85 14 40 13 132 33 205 44 190 29 232 38 296 67 31 14 71\r
27 87 28 43 3 264 55 303 71 18 7 59 33 90 58 35 27 79 51 116 61 98 29 299\r
116 332 145 17 15 69 49 114 76 51 30 93 63 109 86 14 20 31 37 36 36 43 -3\r
57 6 95 57 23 31 56 63 74 71 22 11 44 37 71 87 22 38 68 101 102 138 54 59\r
65 79 87 151 45 147 51 188 51 358 0 190 -14 265 -75 395 -47 100 -75 139\r
-224 309 -88 100 -134 144 -175 167 -31 18 -83 57 -116 89 -44 42 -77 62 -125\r
80 -85 29 -171 73 -244 123 l-59 40 6 164 c6 151 27 284 46 283 3 -1 17 -7 31\r
-15z m72 -737 c31 -9 53 -9 98 0 l59 13 68 -42 c66 -40 133 -95 133 -110 0 -4\r
-11 -21 -25 -37 -15 -18 -25 -42 -25 -61 0 -27 3 -31 27 -31 31 0 63 26 63 52\r
0 22 3 22 39 3 36 -18 73 -62 91 -106 7 -19 39 -61 70 -94 93 -98 137 -194\r
166 -360 15 -84 19 -319 6 -297 -5 7 -16 -12 -31 -55 -31 -91 -89 -214 -136\r
-288 -50 -79 -205 -233 -276 -273 -30 -17 -61 -43 -69 -57 -8 -14 -33 -34 -57\r
-45 -24 -10 -67 -42 -96 -69 -44 -42 -61 -51 -89 -51 -20 0 -41 -7 -48 -15 -7\r
-8 -34 -17 -60 -21 -33 -4 -56 -14 -71 -30 -12 -13 -30 -24 -40 -24 -19 0\r
-157 -71 -204 -106 -18 -13 -52 -24 -85 -28 -30 -3 -102 -21 -159 -41 -58 -19\r
-121 -35 -142 -35 -20 0 -42 -7 -49 -15 -7 -9 -29 -15 -54 -15 -23 0 -48 -6\r
-54 -12 -7 -7 -59 -18 -115 -24 -56 -7 -138 -23 -182 -37 -67 -22 -111 -27\r
-278 -36 -169 -8 -205 -13 -242 -31 -25 -12 -49 -19 -55 -15 -6 4 -64 6 -128\r
6 -83 -1 -125 3 -144 13 -23 12 -33 12 -74 0 -71 -21 -266 -19 -307 4 -27 14\r
-55 17 -186 15 -131 -2 -158 0 -173 14 -13 11 -50 19 -131 25 -113 9 -139 14\r
-212 42 -22 8 -56 15 -75 15 -19 1 -110 13 -202 27 -137 22 -167 29 -171 44\r
-3 13 -19 19 -63 25 -69 8 -120 27 -151 57 -13 12 -45 24 -75 29 -86 14 -154\r
39 -308 115 -81 40 -166 78 -189 85 -24 7 -50 23 -58 35 -8 12 -40 34 -71 49\r
-71 34 -82 43 -148 131 -51 70 -109 124 -132 124 -6 0 -19 15 -28 33 -9 17\r
-48 79 -87 136 -111 166 -147 268 -147 412 1 160 87 398 201 553 27 37 32 40\r
73 37 42 -2 46 0 92 53 32 38 51 53 58 46 15 -15 54 -12 82 7 21 14 29 14 46\r
4 32 -20 48 2 48 69 0 34 5 62 13 67 6 6 43 13 81 16 49 3 73 10 82 22 12 15\r
14 15 39 -1 24 -16 35 -16 98 -6 38 7 71 11 73 9 2 -2 -5 -21 -16 -42 -18 -35\r
-18 -40 -5 -55 9 -9 33 -22 55 -29 63 -19 50 -69 -25 -94 -38 -13 -40 -16 -45\r
-63 l-5 -49 -40 0 c-36 0 -40 -3 -43 -28 -2 -16 4 -39 13 -53 16 -25 55 -33\r
55 -11 0 6 10 -1 22 -16 11 -16 38 -35 59 -43 32 -13 38 -20 36 -42 0 -15 2\r
-44 6 -64 7 -32 5 -37 -7 -32 -26 10 -31 -25 -8 -56 15 -20 23 -51 28 -106 4\r
-44 15 -97 24 -119 25 -57 93 -145 201 -260 81 -86 101 -102 144 -114 27 -8\r
58 -25 67 -37 10 -12 55 -41 100 -64 46 -23 94 -53 108 -65 17 -15 81 -36 210\r
-68 249 -63 312 -75 427 -83 54 -3 152 -15 218 -25 157 -25 443 -34 674 -21\r
164 9 186 13 200 30 13 16 34 21 125 26 172 11 351 56 508 130 40 19 99 39\r
131 45 42 7 90 30 179 82 67 40 140 79 162 88 23 9 75 49 116 88 42 41 84 72\r
95 72 11 0 52 -12 90 -27 68 -26 70 -29 73 -64 4 -43 57 -98 116 -119 24 -9\r
39 -22 45 -41 6 -18 17 -28 30 -28 30 0 34 15 20 88 -12 66 -13 68 -40 64 -17\r
-2 -44 6 -71 22 -25 14 -47 24 -50 21 -3 -3 -8 15 -11 40 -5 47 -46 105 -74\r
105 -10 0 -13 35 -12 163 1 229 13 494 21 503 5 4 16 0 26 -9 38 -35 99 -7 74\r
34 -7 10 -12 26 -12 35 0 12 -9 15 -40 13 -21 -2 -42 -1 -45 3 -3 3 -3 24 1\r
47 6 36 10 41 32 41 30 0 72 36 72 62 0 20 -36 38 -75 38 -28 0 -35 16 -28 67\r
4 34 10 42 37 51 18 7 43 23 56 37 27 28 37 30 92 13z m-4072 -428 c0 -9 -8\r
-16 -18 -17 -11 -1 -18 5 -18 16 0 9 8 17 18 17 10 0 18 -7 18 -16z m5060\r
-2181 c0 -6 -15 -25 -34 -42 -100 -92 -115 -103 -153 -105 -43 -3 -66 -16\r
-143 -82 -84 -71 -127 -96 -220 -124 -47 -14 -100 -37 -119 -51 -19 -14 -45\r
-25 -58 -25 -39 0 -96 -29 -139 -71 -38 -37 -48 -41 -155 -63 -130 -27 -165\r
-38 -334 -106 -67 -28 -137 -50 -156 -50 -19 -1 -59 -9 -89 -20 -30 -11 -81\r
-19 -112 -20 -45 0 -62 -5 -86 -25 -23 -19 -37 -24 -60 -19 -17 4 -61 1 -99\r
-6 -37 -7 -104 -16 -148 -21 -44 -4 -109 -14 -145 -23 -173 -41 -221 -46 -253\r
-29 -24 12 -44 14 -91 8 -34 -5 -78 -9 -98 -9 -31 0 -38 -4 -38 -19 0 -14 -4\r
-17 -17 -12 -39 16 -220 17 -333 1 -153 -21 -242 -20 -363 5 -82 17 -119 20\r
-192 14 -119 -9 -151 -8 -184 10 -21 10 -57 14 -128 12 -76 -1 -104 2 -118 13\r
-14 11 -19 12 -22 3 -6 -17 -23 -16 -23 1 0 20 -37 27 -190 36 -101 6 -146 13\r
-180 28 -25 11 -79 25 -120 31 -166 25 -199 33 -216 52 -11 12 -30 19 -56 19\r
-25 0 -41 5 -44 15 -4 10 -20 15 -45 15 -21 0 -61 5 -89 11 -39 8 -50 15 -50\r
30 0 17 -8 19 -68 19 -87 0 -123 11 -172 53 -34 29 -50 35 -104 39 -44 4 -73\r
12 -94 28 -16 12 -36 20 -42 18 -7 -2 -25 8 -40 24 -15 15 -40 30 -56 33 -89\r
21 -104 27 -124 55 -16 22 -29 30 -52 30 -23 0 -52 15 -102 54 -39 29 -114 75\r
-166 102 -56 29 -113 67 -140 94 l-45 45 39 3 c32 3 64 -9 170 -61 77 -38 166\r
-74 216 -87 47 -11 105 -34 130 -49 25 -16 62 -31 83 -34 21 -3 84 -27 140\r
-54 84 -39 114 -48 172 -51 54 -4 77 -10 102 -29 23 -18 63 -30 140 -45 59\r
-11 123 -28 142 -37 23 -11 56 -15 99 -13 57 2 72 -2 121 -30 50 -28 66 -32\r
146 -34 57 -1 128 -12 195 -29 75 -18 130 -26 193 -26 70 0 87 -2 87 -14 0\r
-21 20 -19 21 3 1 16 2 16 6 0 5 -21 5 -21 37 -7 20 9 29 9 42 -2 9 -7 48 -16\r
86 -20 51 -5 75 -12 92 -28 24 -22 25 -22 72 -5 66 23 196 23 248 1 25 -11 65\r
-17 115 -17 49 0 84 -5 96 -14 16 -11 31 -11 76 -2 31 6 63 17 73 25 13 11 24\r
11 62 1 32 -9 73 -11 147 -5 88 7 175 9 260 6 12 -1 88 -1 168 0 130 0 149 2\r
167 19 23 22 82 18 82 -6 0 -23 55 -8 143 40 46 25 93 46 103 46 10 0 39 -9\r
62 -20 l44 -20 71 32 c67 29 84 32 227 39 194 9 319 41 382 96 12 11 26 13 50\r
7 46 -11 79 -6 110 17 15 11 44 19 65 19 56 0 105 16 224 70 70 33 131 53 180\r
61 86 14 111 27 128 67 9 22 23 32 54 42 23 6 78 28 122 48 189 84 301 132\r
308 132 4 0 7 -5 7 -11z m4555 -1094 c50 -18 93 -18 125 0 38 22 75 18 111\r
-12 40 -34 68 -96 69 -149 0 -37 -3 -43 -27 -49 -55 -13 -253 -25 -440 -25\r
-140 0 -203 -4 -230 -14 -41 -15 -374 -40 -410 -30 -13 4 -62 -8 -123 -30\r
-163 -58 -321 -86 -484 -86 -75 0 -78 1 -64 18 39 44 51 87 56 194 l5 107 53\r
12 c41 9 59 9 82 0 25 -11 41 -9 99 8 57 17 97 21 215 21 127 0 220 7 553 39\r
141 14 366 12 410 -4z m-1726 -154 c71 -22 124 -59 146 -101 36 -70 4 -179\r
-79 -264 -25 -26 -50 -54 -54 -62 -11 -20 -220 -31 -280 -15 -110 30 -197 213\r
-148 309 16 32 100 113 137 132 63 34 171 34 278 1z m-523 -68 c12 -27 19 -70\r
22 -149 l4 -111 -68 -7 c-156 -16 -304 -47 -643 -136 -178 -47 -379 -85 -501\r
-95 -49 -4 -95 -14 -108 -23 -14 -9 -63 -27 -111 -40 -135 -37 -138 -37 -151\r
-12 -10 19 -18 21 -48 17 -21 -3 -47 -9 -58 -12 -18 -6 -25 1 -48 46 -33 66\r
-36 129 -6 129 12 0 44 12 72 26 34 17 61 24 82 21 20 -3 40 2 56 13 44 31\r
149 58 328 85 191 28 268 45 477 110 245 75 281 85 384 100 56 9 125 25 154\r
37 117 47 140 47 163 1z`}),l.createElement("path",{d:`M3676 9978 c-29 -41 -18 -98 20 -98 34 0 58 41 50 85 -6 28 -11 35\r
-31 35 -13 0 -31 -10 -39 -22z`}),l.createElement("path",{d:`M3917 9952 c-44 -49 -36 -114 14 -120 25 -3 27 0 32 50 5 51 -5 88\r
-22 88 -4 0 -15 -8 -24 -18z`}),l.createElement("path",{d:`M4150 9924 c-23 -61 -7 -94 47 -94 30 0 33 3 33 31 0 72 -59 119 -80\r
63z`}),l.createElement("path",{d:`M4861 9936 c-7 -8 -13 -34 -14 -58 l-2 -43 45 0 c35 0 45 4 48 18 12\r
61 -45 122 -77 83z`}),l.createElement("path",{d:`M3203 9885 l-28 -25 24 -20 c15 -13 38 -20 66 -20 38 0 44 3 52 27\r
20 58 -61 85 -114 38z`}),l.createElement("path",{d:`M3546 9864 c-3 -9 -6 -33 -6 -55 0 -38 1 -39 35 -39 19 0 45 5 59 11\r
l24 11 -21 44 c-19 37 -27 43 -53 44 -20 0 -34 -6 -38 -16z`}),l.createElement("path",{d:`M4052 9863 c-6 -10 -13 -37 -17 -60 -8 -48 -17 -59 -34 -40 -6 8 -23\r
12 -40 9 -23 -3 -31 -11 -40 -43 -10 -34 -16 -39 -41 -39 -17 0 -39 -9 -50\r
-20 -41 -41 -14 -110 42 -110 21 0 27 6 32 32 9 45 33 68 71 68 29 0 35 5 54\r
50 15 35 26 48 36 44 8 -4 26 -3 40 0 21 5 25 12 25 45 0 31 -6 44 -26 60 -32\r
26 -41 26 -52 4z`}),l.createElement("path",{d:`M4374 9855 c-20 -20 -25 -34 -22 -63 3 -36 4 -37 44 -40 39 -3 42 -1\r
53 29 16 47 13 77 -8 89 -29 15 -39 13 -67 -15z`}),l.createElement("path",{d:`M4559 9853 c-7 -20 -7 -37 3 -63 19 -48 54 -49 81 -2 l20 33 -34 29\r
c-43 37 -57 37 -70 3z`}),l.createElement("path",{d:`M5010 9816 c0 -7 7 -30 15 -50 13 -30 20 -36 46 -36 17 0 39 5 50 10\r
26 14 24 55 -3 74 -29 20 -108 22 -108 2z`}),l.createElement("path",{d:`M2925 9795 c-14 -13 -25 -30 -25 -38 0 -12 77 -64 84 -56 15 17 26\r
54 26 83 0 33 -2 36 -30 36 -19 0 -40 -9 -55 -25z`}),l.createElement("path",{d:`M4749 9799 c-14 -14 -19 -30 -17 -57 3 -36 4 -37 46 -40 50 -4 57 7\r
48 73 -6 39 -10 45 -32 45 -13 0 -33 -9 -45 -21z`}),l.createElement("path",{d:`M3761 9784 c-14 -32 -7 -60 20 -74 24 -14 29 -10 53 34 24 46 16 66\r
-27 66 -27 0 -36 -5 -46 -26z`}),l.createElement("path",{d:`M3186 9773 c-10 -10 -7 -73 4 -94 13 -23 38 -24 68 -3 26 18 28 45 4\r
67 -21 20 -68 38 -76 30z`}),l.createElement("path",{d:`M5596 9751 c-17 -18 -16 -21 6 -55 13 -20 28 -36 35 -36 6 0 23 14\r
37 31 25 29 25 31 8 54 -21 30 -62 32 -86 6z`}),l.createElement("path",{d:`M2800 9749 c-14 -6 -43 -14 -65 -18 -36 -6 -40 -10 -43 -38 -6 -56\r
61 -78 142 -47 13 5 16 -2 16 -44 0 -49 1 -50 34 -56 19 -4 47 -4 61 0 22 5\r
26 11 23 38 -2 25 -11 35 -45 54 -32 17 -43 30 -43 47 0 39 -18 75 -37 74 -10\r
0 -29 -5 -43 -10z`}),l.createElement("path",{d:`M4232 9748 c-18 -18 -14 -73 6 -91 24 -21 68 -22 76 -1 25 65 -38\r
136 -82 92z`}),l.createElement("path",{d:`M5181 9705 c-14 -56 -46 -80 -97 -72 -35 6 -36 5 -29 -20 8 -32 55\r
-91 73 -92 7 -1 15 6 18 14 4 8 15 15 25 15 16 0 19 8 19 45 0 25 5 45 10 45\r
6 0 10 -8 10 -17 1 -14 8 -10 30 15 37 40 38 64 4 91 -39 31 -50 26 -63 -24z`}),l.createElement("path",{d:`M3029 9714 c-7 -9 -13 -31 -13 -49 0 -41 19 -65 50 -65 48 0 78 61\r
58 114 -8 22 -77 21 -95 0z`}),l.createElement("path",{d:`M4440 9692 c0 -47 37 -95 52 -68 5 9 15 16 22 16 8 0 16 12 19 26 6\r
34 -23 64 -63 64 -28 0 -30 -2 -30 -38z`}),l.createElement("path",{d:`M4894 9694 c-12 -62 25 -107 56 -69 7 8 21 15 31 15 22 0 22 1 7 51\r
-10 36 -14 39 -49 39 -36 0 -39 -2 -45 -36z`}),l.createElement("path",{d:`M5783 9716 c-28 -13 -30 -46 -6 -87 20 -33 40 -37 59 -11 18 23 17\r
63 -2 90 -17 24 -19 25 -51 8z`}),l.createElement("path",{d:`M3580 9681 c-35 -4 -41 -19 -24 -60 21 -49 28 -55 55 -39 62 35 79\r
68 34 68 -15 0 -29 7 -33 18 -5 11 -15 16 -32 13z`}),l.createElement("path",{d:`M5317 9652 c-10 -10 -17 -32 -17 -49 0 -70 71 -67 85 3 5 30 3 41\r
-11 51 -24 18 -38 16 -57 -5z`}),l.createElement("path",{d:`M3347 9632 c-37 -41 -16 -85 39 -80 l39 3 0 45 c0 43 -1 45 -31 48\r
-20 2 -36 -3 -47 -16z`}),l.createElement("path",{d:`M4607 9629 c-15 -11 -27 -26 -27 -34 0 -14 65 -75 80 -75 11 0 40 53\r
40 72 -1 20 -23 44 -46 52 -14 4 -30 -1 -47 -15z`}),l.createElement("path",{d:`M5510 9606 c0 -39 3 -45 32 -59 41 -20 48 -15 48 32 0 42 -23 71 -58\r
71 -19 0 -22 -6 -22 -44z`}),l.createElement("path",{d:`M5912 9638 c-17 -17 -15 -59 4 -86 11 -15 25 -22 50 -22 32 0 34 2\r
34 35 0 26 -7 43 -26 60 -30 28 -44 31 -62 13z`}),l.createElement("path",{d:`M5700 9628 c0 -6 -8 -20 -17 -30 -16 -18 -16 -21 2 -54 18 -33 53\r
-52 74 -40 6 4 13 22 17 40 6 37 -3 79 -16 71 -4 -3 -13 2 -20 10 -15 18 -40\r
20 -40 3z`}),l.createElement("path",{d:`M4067 9623 c-13 -12 -7 -36 20 -78 24 -38 29 -42 49 -33 21 10 44 47\r
44 72 0 24 -95 58 -113 39z`}),l.createElement("path",{d:`M3190 9576 c0 -49 9 -66 35 -66 13 0 27 -4 30 -10 11 -18 24 -11 40\r
24 15 32 15 36 0 60 -14 21 -25 26 -61 26 -43 0 -44 0 -44 -34z`}),l.createElement("path",{d:`M4317 9593 c-14 -4 -17 -13 -15 -46 l3 -42 51 -3 51 -3 12 41 c6 22\r
9 45 6 50 -6 10 -74 12 -108 3z`}),l.createElement("path",{d:`M3677 9563 c-2 -4 0 -29 6 -55 10 -43 15 -48 39 -48 48 0 92 82 51\r
94 -43 12 -91 17 -96 9z`}),l.createElement("path",{d:`M4775 9561 c-38 -16 -69 -81 -38 -81 8 0 23 -10 33 -22 17 -21 18\r
-21 44 -5 27 18 40 50 34 88 -3 26 -37 35 -73 20z`}),l.createElement("path",{d:`M3026 9528 c-9 -12 -16 -28 -16 -35 0 -13 39 -33 64 -33 17 0 40 54\r
32 75 -9 24 -62 19 -80 -7z`}),l.createElement("path",{d:`M5416 9519 c-32 -37 -34 -74 -5 -89 16 -9 26 -8 44 4 14 9 31 16 40\r
16 25 0 17 29 -19 65 l-35 34 -25 -30z`}),l.createElement("path",{d:`M4465 9519 c-9 -27 -9 -85 0 -98 18 -30 64 -2 84 52 8 21 8 27 -3 27\r
-7 0 -21 9 -31 20 -23 26 -42 25 -50 -1z`}),l.createElement("path",{d:`M3927 9493 c-9 -44 3 -81 26 -87 26 -6 35 1 46 40 13 44 -2 74 -37\r
74 -24 0 -30 -5 -35 -27z`}),l.createElement("path",{d:`M5577 9513 c-17 -16 -5 -54 26 -82 l32 -31 17 23 c22 28 23 83 2 91\r
-21 8 -69 8 -77 -1z`}),l.createElement("path",{d:`M3529 9505 c-1 -3 -2 -9 -3 -14 0 -5 -12 -17 -25 -28 -29 -24 -23\r
-52 18 -76 35 -21 51 -22 51 -3 0 7 7 19 15 26 19 15 20 50 2 50 -8 0 -19 11\r
-25 25 -10 22 -30 34 -33 20z`}),l.createElement("path",{d:`M4170 9465 c-10 -12 -10 -24 -1 -55 11 -36 15 -40 44 -40 64 0 77 9\r
77 51 0 28 -5 41 -19 49 -29 15 -87 12 -101 -5z`}),l.createElement("path",{d:`M3354 9445 c-4 -9 -1 -29 6 -45 11 -26 18 -30 51 -30 34 0 40 4 45\r
27 6 20 2 31 -16 45 -27 22 -78 24 -86 3z`}),l.createElement("path",{d:`M4637 9411 c-26 -43 -31 -46 -63 -43 -55 7 -64 -1 -54 -45 11 -49 70\r
-99 70 -60 0 21 32 46 83 63 59 20 73 37 59 68 -6 13 -23 33 -39 44 l-28 20\r
-28 -47z`}),l.createElement("path",{d:`M3802 9418 c-20 -20 -14 -63 12 -87 l24 -22 22 35 c29 49 24 80 -15\r
84 -17 2 -36 -3 -43 -10z`}),l.createElement("path",{d:`M4320 9401 c0 -39 28 -71 65 -74 29 -2 30 0 33 42 4 51 -6 61 -60 61\r
-35 0 -38 -2 -38 -29z`}),l.createElement("path",{d:`M3997 9373 c-8 -43 13 -79 45 -75 15 2 36 -1 46 -7 23 -12 32 2 32\r
49 0 53 -8 60 -65 60 -49 0 -53 -2 -58 -27z`}),l.createElement("path",{d:`M4840 9381 c-11 -22 -13 -61 -4 -85 8 -22 47 -20 67 2 27 30 22 69\r
-13 87 -37 19 -37 19 -50 -4z`}),l.createElement("path",{d:`M4206 9305 c-18 -14 -18 -15 1 -47 21 -36 73 -53 73 -24 0 9 5 16 10\r
16 17 0 11 36 -8 53 -22 21 -51 21 -76 2z`}),l.createElement("path",{d:`M9480 5389 c0 -6 -14 -27 -30 -46 -24 -27 -29 -40 -24 -61 9 -38 13\r
-42 35 -42 51 0 75 71 44 130 -16 31 -25 38 -25 19z`}),l.createElement("path",{d:`M10050 3615 c-19 -7 -47 -14 -62 -14 -24 -1 -28 -5 -28 -29 0 -44 21\r
-66 56 -58 16 4 38 9 49 11 11 2 22 4 25 5 3 1 12 3 20 4 22 2 24 42 3 70 -21\r
29 -17 29 -63 11z`}),l.createElement("path",{d:`M9985 3268 c-29 -27 -29 -29 -15 -56 13 -22 24 -28 58 -30 39 -3 42\r
-5 42 -33 0 -28 2 -29 45 -29 49 0 52 5 33 57 -8 21 -19 33 -31 33 -30 0 -53\r
17 -67 49 -16 40 -30 42 -65 9z`}),l.createElement("path",{d:`M9996 2941 c-19 -21 -14 -44 17 -79 l21 -22 23 22 c25 23 30 67 11\r
86 -18 18 -53 15 -72 -7z`}),l.createElement("path",{d:`M10130 2920 c0 -20 29 -68 45 -74 37 -14 63 -6 72 22 17 52 8 62 -58\r
62 -34 0 -59 -4 -59 -10z`}),l.createElement("path",{d:`M10139 2664 c-28 -46 -19 -69 34 -83 36 -9 44 -8 54 6 23 30 -6 95\r
-47 106 -14 4 -25 -4 -41 -29z`}),l.createElement("path",{d:`M10006 2645 c-3 -8 -15 -15 -27 -15 -19 0 -21 -4 -14 -37 9 -49 12\r
-53 39 -53 32 0 46 19 46 62 0 26 -5 40 -19 47 -14 8 -20 7 -25 -4z`}),l.createElement("path",{d:`M9990 2435 c-6 -7 -10 -31 -8 -52 3 -34 6 -38 34 -41 24 -2 33 2 42\r
23 18 40 15 50 -22 68 -29 13 -36 14 -46 2z`}),l.createElement("path",{d:`M10148 2443 c-23 -6 -24 -50 -2 -81 18 -26 56 -22 88 9 17 15 18 21\r
6 48 -10 26 -18 31 -44 30 -17 -1 -39 -3 -48 -6z`}),l.createElement("path",{d:`M9980 2171 c0 -87 26 -105 63 -43 20 33 22 35 25 14 3 -19 46 -52 69\r
-52 12 0 46 88 40 104 -4 10 -18 11 -64 5 -32 -4 -75 -4 -95 0 l-38 9 0 -37z`}),l.createElement("path",{d:`M10247 2144 c-10 -10 -8 -66 2 -83 5 -8 16 -16 24 -17 8 -1 23 -4 33\r
-8 33 -10 45 7 42 60 l-3 49 -45 3 c-25 2 -49 0 -53 -4z`}),l.createElement("path",{d:`M9982 1968 c-24 -24 -1 -98 31 -98 18 0 47 53 47 84 0 23 -4 26 -33\r
26 -18 0 -38 -5 -45 -12z`}),l.createElement("path",{d:`M10096 1958 c-21 -29 -21 -68 -1 -68 9 0 18 -7 21 -15 9 -22 41 -18\r
58 7 9 12 16 39 16 60 0 38 0 38 -39 38 -30 0 -44 -6 -55 -22z`}),l.createElement("path",{d:`M10273 1943 c-21 -8 -16 -53 5 -53 10 0 29 -11 42 -25 13 -14 27 -25\r
30 -25 4 0 18 20 31 45 21 39 22 47 9 55 -16 10 -96 12 -117 3z`}),l.createElement("path",{d:`M10224 1765 c-8 -19 2 -54 21 -80 13 -16 18 -17 24 -7 5 8 19 12 32\r
10 19 -2 25 3 32 29 15 51 5 63 -53 63 -36 0 -52 -4 -56 -15z`}),l.createElement("path",{d:`M10015 1740 c-3 -5 -17 -10 -31 -10 -30 0 -32 -34 -4 -68 16 -19 25\r
-22 53 -17 23 5 45 1 64 -8 32 -17 44 -13 61 20 24 44 -25 87 -61 55 -17 -15\r
-19 -15 -28 1 -13 23 -46 40 -54 27z`}),l.createElement("path",{d:`M10276 1612 c-2 -4 -7 -23 -11 -43 -6 -34 -5 -37 25 -47 54 -19 90 6\r
90 63 0 17 -7 24 -31 29 -42 8 -67 8 -73 -2z`}),l.createElement("path",{d:`M10080 1485 c0 -39 3 -45 21 -45 11 0 29 -5 40 -10 16 -9 21 -7 29\r
15 6 15 10 40 10 56 0 28 -1 29 -50 29 l-50 0 0 -45z`}),l.createElement("path",{d:`M9990 1445 c0 -38 3 -45 20 -45 24 0 36 40 20 69 -20 38 -40 26 -40\r
-24z`}),l.createElement("path",{d:`M10124 1317 l-27 -24 21 -21 c12 -12 22 -26 22 -32 0 -19 28 -10 44\r
15 29 44 17 85 -24 85 -5 0 -21 -11 -36 -23z`}),l.createElement("path",{d:`M10007 1313 c-20 -19 7 -93 34 -93 24 0 46 65 29 85 -13 15 -51 20\r
-63 8z`}),l.createElement("path",{d:`M10291 1207 c-36 -18 -47 -41 -35 -74 8 -24 16 -28 49 -31 36 -2 42\r
1 64 33 24 36 24 36 5 55 -27 26 -55 32 -83 17z`}),l.createElement("path",{d:`M10130 1179 c-19 -34 3 -99 34 -99 29 0 56 29 56 61 0 18 -8 28 -32\r
39 -18 7 -36 15 -40 17 -4 2 -12 -6 -18 -18z`}),l.createElement("path",{d:`M10006 1148 c-16 -18 -17 -25 -7 -59 12 -40 27 -50 37 -24 4 8 12 15\r
20 15 16 0 18 28 4 64 -11 31 -28 32 -54 4z`}),l.createElement("path",{d:`M10420 1141 c-14 -26 -13 -61 2 -61 6 0 19 -7 29 -16 22 -20 40 -14\r
58 19 12 23 12 29 -3 52 -21 31 -70 35 -86 6z`}),l.createElement("path",{d:`M6568 4532 c-34 -20 -35 -36 -6 -56 48 -34 105 -4 92 48 -8 31 -44\r
35 -86 8z`}),l.createElement("path",{d:`M6707 4513 c-13 -12 -7 -70 7 -82 9 -8 28 -10 50 -5 35 6 36 8 36 50\r
l0 44 -43 0 c-24 0 -47 -3 -50 -7z`}),l.createElement("path",{d:`M2265 4395 c-28 -27 -31 -52 -11 -80 12 -17 17 -18 39 -6 14 7 30 11\r
35 7 10 -6 22 25 22 61 0 21 -25 43 -50 43 -6 0 -22 -11 -35 -25z`}),l.createElement("path",{d:`M6540 4361 c0 -11 5 -32 10 -47 10 -25 14 -26 57 -21 50 5 73 25 73\r
64 0 22 -4 23 -70 23 -63 0 -70 -2 -70 -19z`}),l.createElement("path",{d:`M6780 4301 c-29 -55 7 -123 44 -82 9 9 16 31 16 47 0 50 -39 73 -60\r
35z`}),l.createElement("path",{d:`M2114 4255 c-11 -26 6 -84 28 -100 20 -13 24 -13 39 1 10 9 22 29 28\r
45 9 26 7 30 -23 49 -40 24 -64 26 -72 5z`}),l.createElement("path",{d:`M1856 4208 c-22 -31 -20 -57 7 -79 29 -24 54 -24 67 0 16 31 12 50\r
-16 76 -33 31 -39 31 -58 3z`}),l.createElement("path",{d:`M6580 4190 c-12 -28 -10 -33 10 -55 32 -34 58 -40 81 -19 29 26 25\r
66 -10 87 -43 25 -67 22 -81 -13z`}),l.createElement("path",{d:`M6892 4158 c3 -38 6 -43 30 -46 44 -5 70 14 66 51 -3 31 -5 32 -51\r
35 l-48 3 3 -43z`}),l.createElement("path",{d:`M2243 4103 c-21 -8 -15 -50 13 -82 19 -23 29 -28 42 -21 9 5 25 11\r
35 14 26 8 23 61 -5 80 -22 16 -60 20 -85 9z`}),l.createElement("path",{d:`M7128 4103 c-21 -5 -22 -15 -6 -60 15 -40 41 -43 64 -8 15 23 15 27\r
0 50 -16 25 -24 27 -58 18z`}),l.createElement("path",{d:`M2004 4087 c-3 -8 -4 -34 -2 -58 4 -53 28 -64 54 -24 22 34 9 89 -24\r
93 -13 2 -25 -3 -28 -11z`}),l.createElement("path",{d:`M6417 4094 c-4 -4 -7 -24 -7 -45 0 -38 20 -69 44 -69 20 0 38 43 34\r
81 -3 30 -7 34 -33 37 -17 2 -34 0 -38 -4z`}),l.createElement("path",{d:`M6717 4063 c-12 -12 -8 -101 5 -105 19 -7 88 25 88 40 0 7 -7 26 -15\r
42 -12 23 -23 30 -44 30 -15 0 -31 -3 -34 -7z`}),l.createElement("path",{d:`M1658 4033 c-30 -36 -28 -50 12 -82 l39 -31 16 29 c20 39 20 87 -1\r
95 -27 11 -50 7 -66 -11z`}),l.createElement("path",{d:`M6962 3985 l-23 -23 23 -34 c33 -50 69 -50 89 0 8 20 15 40 17 45 2\r
4 -3 7 -11 7 -8 0 -20 7 -27 15 -17 21 -41 17 -68 -10z`}),l.createElement("path",{d:`M2112 3928 c-30 -30 -4 -80 50 -93 23 -6 29 -2 42 24 22 42 20 56 -9\r
69 -33 15 -68 15 -83 0z`}),l.createElement("path",{d:"M1870 3885 l0 -45 40 0 40 0 0 45 0 45 -40 0 -40 0 0 -45z"}),l.createElement("path",{d:`M2376 3894 c-4 -14 -2 -42 5 -61 10 -30 14 -34 42 -31 39 4 47 13 47\r
55 0 52 -8 63 -50 63 -32 0 -39 -4 -44 -26z`}),l.createElement("path",{d:`M6543 3913 c-18 -7 -16 -68 2 -83 23 -19 99 10 103 40 3 15 -3 29\r
-14 37 -18 13 -67 16 -91 6z`}),l.createElement("path",{d:`M6790 3863 c0 -38 25 -85 50 -98 30 -15 30 -15 46 19 10 21 14 44 10\r
60 -6 24 -11 26 -56 26 -28 0 -50 -3 -50 -7z`}),l.createElement("path",{d:`M1741 3736 c-7 -8 -15 -30 -18 -50 -5 -32 -3 -36 16 -36 12 0 24 -7\r
27 -15 9 -22 30 -18 48 7 23 33 19 64 -10 87 -31 25 -47 26 -63 7z`}),l.createElement("path",{d:`M1984 3715 c-8 -46 0 -65 30 -65 29 0 56 24 56 50 0 37 -12 50 -46\r
50 -30 0 -34 -3 -40 -35z`}),l.createElement("path",{d:`M7002 3703 l3 -48 40 0 c34 0 40 3 43 23 5 37 -24 72 -59 72 -30 0\r
-30 -1 -27 -47z`}),l.createElement("path",{d:`M6540 3680 l0 -60 40 0 c43 0 80 26 80 58 0 22 -59 62 -93 62 -26 0\r
-27 -2 -27 -60z`}),l.createElement("path",{d:`M2237 3702 c-14 -9 -29 -22 -32 -30 -8 -23 14 -51 48 -60 27 -8 35\r
-6 49 12 22 27 23 49 1 68 -31 26 -38 27 -66 10z`}),l.createElement("path",{d:`M2457 3644 c-11 -12 -8 -102 4 -110 6 -3 16 -1 22 5 6 6 26 11 45 11\r
l33 0 -3 48 -3 47 -45 3 c-25 2 -49 0 -53 -4z`}),l.createElement("path",{d:`M6788 3548 c-25 -21 -28 -45 -9 -69 14 -17 23 -20 48 -15 25 6 32 13\r
35 37 7 45 -39 74 -74 47z`}),l.createElement("path",{d:`M1926 3493 c-3 -10 -11 -26 -18 -35 -10 -13 -9 -22 2 -42 14 -28 30\r
-32 61 -16 25 14 25 64 -1 90 -25 25 -36 25 -44 3z`}),l.createElement("path",{d:`M2146 3454 c-25 -24 -20 -59 9 -72 54 -25 81 -4 71 53 -6 30 -11 35\r
-36 35 -16 0 -36 -7 -44 -16z`}),l.createElement("path",{d:`M7010 3377 c-30 -48 -26 -71 16 -91 20 -9 37 -16 38 -14 2 2 13 18\r
25 36 31 45 25 72 -22 88 -37 13 -38 13 -57 -19z`}),l.createElement("path",{d:`M2362 3378 c-20 -20 -14 -54 15 -88 l27 -32 29 32 28 32 -24 31 c-27\r
35 -55 45 -75 25z`}))))}function si(){const u=et(),m=()=>{localStorage.removeItem("authToken"),u("/admin")};return l.createElement("div",{className:"dashboard"},l.createElement("button",{className:"backButtonDash",onClick:m},"Déconnexion"),l.createElement("h1",null,"Bienvenue Mathilde !"),l.createElement("div",{className:"divH2"},l.createElement("h2",null,"TABLEAU DE BORD")),l.createElement("div",{className:"dashboardGrid"},l.createElement("div",{className:"weeklyPastryDiv"},l.createElement("a",{className:"adminLink",href:"/admin/dashboard/homepageManagement"},l.createElement("h3",null,"Gestion de la Page d'accueil"),l.createElement(ai,null))),l.createElement("div",{className:"workshopManagementDiv"},l.createElement("a",{className:"adminLink",href:"/admin/dashboard/activity"},l.createElement("h3",null,"Gestion des Activités"),l.createElement(ui,null))),l.createElement("div",{className:"userManagementDiv"},l.createElement("a",{className:"adminLink",href:"/admin/dashboard/user"},l.createElement("h3",null,"Gestion des Clients"),l.createElement(ci,null))),l.createElement("div",{className:"reservationManagementDiv"},l.createElement("a",{className:"adminLink",href:"/admin/dashboard/reservation"},l.createElement("h3",null,"Gestion des Réservations"),l.createElement(ri,null))),l.createElement("div",{className:"cakeManagementDiv"},l.createElement("a",{className:"adminLink",href:"/admin/dashboard/carte"},l.createElement("h3",null,"Gestion de la carte"),l.createElement(ii,null)))))}function oi(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"8px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("div",{className:"sousTitre"},l.createElement("h1",null,"Mentions Légales")),l.createElement("div",{className:"paraDiv"},l.createElement("p",{className:"paraMentions"},"Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site"," ",l.createElement("strong",null,l.createElement("a",{href:"/",target:"_blank"},"lecameo17.fr"))," ","l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.")),l.createElement("div",{className:"sousTitre"},l.createElement("h2",null,"Édition du site")),l.createElement("div",{className:"paraDiv"},l.createElement("p",{className:"paraMentions"},"Le présent site, accessible à l’URL"," ",l.createElement("strong",null,l.createElement("a",{href:"/",target:"_blank"},"https://www.lecameo17.fr")),", est édité par : LE CAMÉO situé au 36 Avenue de La Fayette 17300 Rochefort,"," ",l.createElement("strong",null,l.createElement("a",{href:"mailto:lecameo17@gmail.com",style:{color:"#b21a00"}},"lecameo17@gmail.com")),", Numéro SIRET [98086689100016].")),l.createElement("div",{className:"sousTitre"},l.createElement("h2",null,"Hébergement")),l.createElement("div",{className:"paraDiv"},l.createElement("p",{className:"paraMentions"},"Le Site est hébergé par : ",l.createElement("strong",null,"O2Switch"),l.createElement("br",null),"Chemin des Pardiaux,",l.createElement("br",null),"63000 Clermont-Ferrand,",l.createElement("br",null),l.createElement("a",{href:"/",target:"_blank"},"https://www.o2switch.fr/"),",",l.createElement("br",null),"04 44 44 60 40.")," "),l.createElement("div",{className:"sousTitre"},l.createElement("h2",null,"Directeur de la publication")),l.createElement("div",{className:"paraDiv",style:{flexDirection:"column",alignItems:"center"}},l.createElement("p",{className:"paraMentions"},"Le Directeur de la publication du Site est Mathilde Scotto."),l.createElement("p",null,"NOUS CONTACTER",l.createElement("ul",null,l.createElement("li",null," ","Par e-mail :"," ",l.createElement("a",{href:"mailto:lecameo17@gmail.com",style:{color:"#b21a00"}},"lecameo17@gmail.com")),l.createElement("li",null,"Par courrier : 36 Avenue Lafayette 17300 Rochefort"))),l.createElement("p",{className:"paraMentions"},"Le site a été développé et déployé par Charlotte Régis [©Plume&Pixel].")),l.createElement("div",{className:"sousTitre"},l.createElement("h2",null,"Données personnelles")),l.createElement("div",{className:"paraDiv"},l.createElement("p",{className:"paraMentions"},"Le traitement de vos données personnelles est régi par notre"," ",l.createElement("a",{href:"/politique",target:"_blank"},"Politique de Confidentialité"),", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (« RGPD »).")),l.createElement("div",{className:"sousTitre"},l.createElement("h2",null,"Loi applicable et attribution de juridiction")),l.createElement("div",{className:"paraDiv"},l.createElement("p",{className:"paraMentions"},"Tout litige en relation avec l'utilisation du site"," ",l.createElement("strong",null,l.createElement("a",{href:"/",target:"_blank"},"https://www.lecameo17.fr"))," ","est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Charente-Maritime.")))}function mi(){const[u,m]=g.useState([]),[f,s]=g.useState([]),[d,v]=g.useState(null),[y,M]=g.useState(""),[z,h]=g.useState(null),[N,B]=g.useState(""),[A,q]=g.useState(""),[_,C]=g.useState({name:"",price:"",filmtitle:"",filmreal:"",filmdate:""}),D="https://www.lecameo17.fr/api",E=async()=>{try{const a1=await(await fetch(`${D}/activity`)).json();m(a1)}catch(Q){console.error("Erreur activités:",Q)}},x=async()=>{try{const a1=await(await fetch(`${D}/media`)).json();console.log("REFRESH:",a1),s([...a1])}catch(Q){console.error("Erreur galerie:",Q)}},U=async()=>{try{const a1=await(await fetch(`${D}/weekly`)).json();a1&&C({name:a1.name||"",price:a1.price||"",filmtitle:a1.filmtitle||"",filmreal:a1.filmreal||"",filmdate:a1.filmdate||""})}catch(Q){console.error("Erreur weekly:",Q)}};g.useEffect(()=>{E(),x(),U()},[]);const X=async Q=>{try{(await fetch(`${D}/activity/${Q}`,{method:"PATCH"})).ok&&E()}catch(a1){console.error("Erreur PATCH:",a1)}},H=async Q=>{Q.preventDefault();const a1={weekly_name:_.name,weekly_price:_.price.toString().replace(",","."),weekly_filmtitle:_.filmtitle,weekly_filmreal:_.filmreal,weekly_filmdate:_.filmdate};try{const c1=await fetch(`${D}/weekly`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a1)}),O2=await c1.json();c1.ok?alert("Pâtisserie mise à jour !"):alert("Erreur : "+O2.error)}catch(c1){console.error("Erreur Fetch:",c1)}},F=async Q=>{if(Q.preventDefault(),!d)return;const a1=new FormData;a1.append("name",y),a1.append("image",d);try{(await fetch(`${D}/media`,{method:"POST",body:a1})).ok&&(M(""),v(null),x())}catch(c1){console.error("Erreur upload:",c1)}},t1=async Q=>{Q.preventDefault();const a1=new FormData;if(a1.append("name",A),N)a1.append("youtube_url",N);else{alert("Veuillez choisir un lien YouTube");return}try{(await fetch(`${D}/media?type=video`,{method:"POST",body:a1})).ok&&(q(""),B(""),alert("Vidéo mise à jour !"),x())}catch(c1){console.error("Erreur upload vidéo:",c1)}},v1=async Q=>{window.confirm("Supprimer définitivement cette image ?")&&(await fetch(`${D}/media/${Q}`,{method:"DELETE"}),x())},i1=async(Q,a1)=>{try{const c1=await fetch(`${D}/media/${Q}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_method:"PATCH",[a1]:!0})});c1.ok?x():console.error(await c1.text())}catch(c1){console.error("Erreur PATCH status:",c1)}};return l.createElement("div",{className:"PastryManager"},l.createElement("div",{className:"menuManagement"},l.createElement("a",{href:"/admin/dashboard"},l.createElement("button",{className:"backButtonDash"},"Retour au Dashboard")),l.createElement("h1",null,"Gestion des Actualités"),l.createElement("section",{className:"weeklySection"},l.createElement("h2",null,"Activité mise en avant"),u.map(Q=>l.createElement("div",{key:Q[":id"],style:{marginBottom:"10px"}},l.createElement("label",{style:{marginLeft:"3em",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px"}},l.createElement("input",{type:"radio",name:"activity_featured",checked:Number(Q[":featured"])===1,onChange:()=>X(Q[":id"])}),l.createElement("span",null,l.createElement("strong",null,Q[":title"])))))),l.createElement("hr",null),l.createElement("section",{className:"weeklySection"},l.createElement("h2",null,"Infos Pâtisserie & Film"),l.createElement("form",{className:"weeklyPastryForm",onSubmit:H},l.createElement("input",{type:"text",placeholder:"Nom",value:_.name,onChange:Q=>C({..._,name:Q.target.value}),required:!0}),l.createElement("br",null),l.createElement("input",{type:"number",step:"0.01",placeholder:"Prix",value:_.price,onChange:Q=>C({..._,price:Q.target.value}),required:!0}),l.createElement("br",null),l.createElement("input",{type:"text",placeholder:"Film",value:_.filmtitle,onChange:Q=>C({..._,filmtitle:Q.target.value}),required:!0}),l.createElement("br",null),l.createElement("input",{type:"text",placeholder:"Réalisateur",value:_.filmreal,onChange:Q=>C({..._,filmreal:Q.target.value}),required:!0}),l.createElement("br",null),l.createElement("input",{type:"text",placeholder:"Année",value:_.filmdate,onChange:Q=>C({..._,filmdate:Q.target.value}),required:!0}),l.createElement("br",null),l.createElement("button",{type:"submit",className:"backButtonDash"},"Enregistrer les textes"))),l.createElement("hr",null),l.createElement("section",{className:"weeklySection"},l.createElement("h2",null,"Vidéo de la semaine"),l.createElement("p",null,"La mise à jour remplace la vidéo ou le lien YouTube actuel."),l.createElement("form",{onSubmit:t1,style:{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"center"}},l.createElement("input",{type:"text",placeholder:"Titre vidéo",value:A,onChange:Q=>q(Q.target.value),required:!0}),l.createElement("input",{type:"text",placeholder:"Lien YouTube",value:N,onChange:Q=>{B(Q.target.value)}}),l.createElement("button",{type:"submit",className:"backButtonDash"},"Mettre à jour la Vidéo"))),l.createElement("hr",null),l.createElement("section",{className:"weeklySection"},l.createElement("h2",null,"Banque d'images"),l.createElement("form",{onSubmit:F,style:{marginLeft:"2em",marginBottom:"2em",display:"flex",flexWrap:"wrap",gap:"10px"}},l.createElement("input",{type:"text",placeholder:"Nom image",value:y,onChange:Q=>M(Q.target.value),required:!0}),l.createElement("input",{type:"file",accept:"image/*",onChange:Q=>v(Q.target.files[0]),required:!0}),l.createElement("button",{type:"submit"},"Enregistrer")),l.createElement("div",{className:"homepageImageBankDiv"},Array.isArray(f)&&f.filter(Q=>Q[":url"]).map(Q=>l.createElement("div",{key:Q[":id"],className:"homepageImageDiv"},l.createElement("img",{src:`${D}/uploads/highlight/${Q[":url"]}`,alt:Q[":name"],style:{width:"100%",height:"120px",objectFit:"cover"}}),l.createElement("p",null,l.createElement("strong",null,Q[":name"])),l.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"5px"}},l.createElement("button",{onClick:()=>i1(Q[":id"],"featured"),style:{backgroundColor:Number(Q[":featured"])===1?"#6c1304":"#f0f0f0",color:Number(Q[":featured"])===1?"white":"black"}},Number(Q[":featured"])===1?"★ Actu En Vue":"Mettre en Actu"),l.createElement("button",{onClick:()=>i1(Q[":id"],"iweekly"),style:{backgroundColor:Number(Q[":iweekly"])===1?"#6c1304":"#f0f0f0",color:Number(Q[":iweekly"])===1?"white":"black"}},Number(Q[":iweekly"])===1?"✔ Pâtisserie":"Pâtisserie"),l.createElement("button",{onClick:()=>v1(Q[":id"])},"Supprimer"))))))))}function fi(){const[u,m]=g.useState([]),[f,s]=g.useState([]),[d,v]=g.useState({title:"",type:"workshop",start:"",end:"",places:"",price:"",description:"",contributor:""}),[y,M]=g.useState(null),z="https://www.lecameo17.fr/api",h=async()=>{try{const[C,D]=await Promise.all([fetch(`${z}/activity`),fetch(`${z}/booking`)]),E=await C.json(),x=await D.json();m(E),s(x)}catch(C){console.error(C)}};g.useEffect(()=>{h()},[]);const N=C=>{const{name:D,value:E}=C.target;v({...d,[D]:E})},B=async C=>{C.preventDefault();const D=y?`${z}/activity/${y}`:`${z}/activity`,E=y?"PUT":"POST",x={title:d.title,type:d.type,start:d.start.replace("T"," "),end:d.end.includes("T")?d.end.replace("T"," "):d.end,places:d.places===""?null:parseInt(d.places),price:parseFloat(d.price),description:d.description,contributor:d.contributor};console.log("Données envoyées :",x);try{const U=await fetch(D,{method:E,headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}),X=await U.text();let H={};try{H=JSON.parse(X)}catch{console.error("Le serveur n'a pas renvoyé de JSON:",X)}if(!U.ok)throw new Error(H.error||`Erreur ${U.status}`);alert(y?"Activité mise à jour !":"Activité créée !"),h(),A()}catch(U){alert("Erreur : "+U.message)}},A=()=>{v({title:"",type:"workshop",start:"",end:"",places:"",price:"",description:"",contributor:""}),M(null)},q=C=>{const D=C[":id"]||C.id_activity;if(!D){console.error("Erreur : ID introuvable dans l'objet",C);return}M(D),v({title:C[":title"]||C.title||"",type:C[":type"]||C.type||"workshop",start:C[":start"]?.date?C[":start"].date.substring(0,16).replace(" ","T"):C.start?C.start.substring(0,16).replace(" ","T"):"",end:C[":end"]?.date?C[":end"].date.substring(0,16).replace(" ","T"):C.end||"",places:C[":places"]!==void 0?C[":places"]:C.places,price:C[":price"]!==void 0?C[":price"]:C.price,description:C[":description"]||C.description||"",contributor:C[":contributor"]||C.contributor||""})},_=C=>{window.confirm("Supprimer cette activité ?")&&fetch(`${z}/activity/${C}`,{method:"DELETE"}).then(()=>h()).catch(D=>console.error("Erreur suppression:",D))};return l.createElement("div",null,l.createElement("div",null,l.createElement("div",null,l.createElement("h3",null,y?"Modifier l'activité":"Ajouter une activité"),l.createElement("form",{onSubmit:B,className:"adminForm2"},l.createElement("fieldset",null,l.createElement("label",null,"Titre"),l.createElement("br",null),l.createElement("input",{style:{width:"100%"},name:"title",value:d.title,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Type")," ",l.createElement("br",null),l.createElement("select",{name:"type",value:d.type,onChange:N},l.createElement("option",{value:"workshop"},"Atelier"),l.createElement("option",{value:"event"},"Événement")),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Intervenant")," ",l.createElement("br",null),l.createElement("input",{style:{width:"100%"},name:"contributor",value:d.contributor,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Prix (0 pour gratuit)")," ",l.createElement("br",null),l.createElement("input",{name:"price",type:"number",step:"0.01",value:d.price,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Début")," ",l.createElement("br",null),l.createElement("input",{name:"start",type:"datetime-local",value:d.start,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Fin"),l.createElement("br",null),l.createElement("input",{name:"end",type:"datetime-local",value:d.end,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Places (laisser vide si illimité)")," ",l.createElement("br",null),l.createElement("input",{name:"places",type:"number",value:d.places,onChange:N}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Description")," ",l.createElement("br",null),l.createElement("textarea",{style:{width:"100%"},name:"description",value:d.description,onChange:N,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{type:"submit"},y?"Mettre à jour":"Créer"),y&&l.createElement("button",{type:"button",onClick:A},"Annuler")))),l.createElement("div",{style:{width:"100%"}},l.createElement("h3",null,"Liste des activités"),l.createElement("ul",{className:"schedule-list2"},u.map(C=>l.createElement("li",{key:C[":id"],className:"schedule-item"},l.createElement("div",{className:"item-info"},l.createElement("p",null,"Type:"," ",l.createElement("strong",null,C[":type"]==="workshop"?"Atelier":"Événement")),l.createElement("h3",null,C[":title"]),l.createElement("p",null,"Intervenant: ",l.createElement("strong",null,C[":contributor"])),l.createElement("p",{className:"activity-date"},"Début: ",new Date(C[":start"]?.date).toLocaleString()),l.createElement("p",{className:"activity-date"},"Fin:"," ",C[":end"]?.date?new Date(C[":end"]?.date).toLocaleString():C[":end"]),l.createElement("p",{className:"price"},parseInt(C[":price"])===0?"Gratuit":`${C[":price"]} €`),l.createElement("p",{className:"description"},C[":description"]),C[":places"]!==null&&l.createElement("p",{className:"places"},C.remaining_places<=0?l.createElement("span",{style:{color:"crimson",fontWeight:"bold"}},"COMPLET"):l.createElement(l.Fragment,null,"Places restantes :"," ",l.createElement("strong",null,C.remaining_places))),l.createElement("div",{className:"admin-actions",style:{marginTop:"10px"}},l.createElement("button",{onClick:()=>q(C)},"Modifier"),l.createElement("button",{onClick:()=>_(C[":id"]),style:{marginLeft:"10px"}},"Supprimer")))))))))}function di(){return l.createElement("div",{className:"PastryManager"},l.createElement("div",{className:"menuManagement"},l.createElement("a",{href:"/admin/dashboard"},l.createElement("button",{className:"backButtonDash"},"Retour au Tableau de Bord")),l.createElement("h1",null,"Gestion des activités"),l.createElement(fi,null)))}function hi(){const u="https://www.lecameo17.fr/api",[m,f]=g.useState([]),[s,d]=g.useState([]),[v,y]=g.useState(null),[M,z]=g.useState({firstname:"",lastname:"",mail:"",tel:"",newsletter:!1,product_id:"",password:""}),[h,N]=g.useState(null);g.useEffect(()=>{B(),A()},[]);const B=async()=>{const U=await(await fetch(`${u}/client`)).json();f(U)},A=async()=>{const X=(await(await fetch(`${u}/product`)).json()).filter(H=>["gateau-entier","gateau-part"].includes(H.type));d(X)},q=x=>{const{name:U,value:X,type:H,checked:F}=x.target;z({...M,[U]:H==="checkbox"?F:X})},_=()=>{z({firstname:"",lastname:"",mail:"",tel:"",newsletter:!1,product_id:"",password:""}),N(null),y(null)},C=async x=>{x.preventDefault();const U={...M,password:h?v:M.password,password:h?v:M.password?.trim()};if(!U.password){alert("Mot de passe manquant.");return}const X=h?`${u}/client/${h}`:`${u}/client`;await fetch(X,{method:h?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)}),B(),_()},D=async x=>{const X=await(await fetch(`${u}/client/${x.id}`)).json();y(X.password),z({firstname:X.firstname,lastname:X.lastname,mail:X.mail,tel:X.tel??"",newsletter:X.newsletter,product_id:X.product_id??""}),N(x.id)},E=async x=>{window.confirm("Supprimer définitivement ce client ?")&&(await fetch(`${u}/client/${x}`,{method:"DELETE"}),B())};return l.createElement("div",{className:"userManagementCompo"},l.createElement("h2",null,"Gestion des utilisateurs"),l.createElement("form",{onSubmit:C,className:"adminForm3"},l.createElement("fieldset",null,l.createElement("input",{name:"lastname",placeholder:"Nom",value:M.lastname,onChange:q,required:!0}),l.createElement("br",null),l.createElement("input",{name:"firstname",placeholder:"Prénom",value:M.firstname,onChange:q,required:!0}),l.createElement("br",null),l.createElement("input",{name:"mail",placeholder:"Email",value:M.mail,onChange:q,required:!0}),l.createElement("br",null),l.createElement("input",{name:"tel",placeholder:"Téléphone",value:M.tel,onChange:q}),l.createElement("br",null),l.createElement("label",null,l.createElement("input",{type:"checkbox",name:"newsletter",checked:M.newsletter,onChange:q}),"Newsletter"),l.createElement("br",null),l.createElement("select",{name:"product_id",value:M.product_id,onChange:q},l.createElement("option",{value:""},"-- Gâteau préféré --"),s.map(x=>l.createElement("option",{key:x.id,value:x.id},x.name," (",x.type,")"))),l.createElement("br",null),!h&&l.createElement("input",{name:"password",type:"password",placeholder:"Mot de passe",value:M.password,onChange:q,required:!0}),l.createElement("button",{type:"submit",style:{marginTop:"1em",marginRight:"1em"}},h?"Modifier":"Ajouter"),h&&l.createElement("button",{type:"button",onClick:_},"Annuler la modification"))),l.createElement("div",{className:"client-grid"},m.map(x=>{const U=s.find(X=>X.id===x.product_id);return l.createElement("div",{className:"client-card",key:x.id},l.createElement("h3",null,x.firstname," ",x.lastname),l.createElement("div",{className:"client-info"},l.createElement("span",null,"Email"),l.createElement("span",null,x.mail),l.createElement("span",null,"Téléphone"),l.createElement("span",null,x.tel||"—"),l.createElement("span",null,"Newsletter"),l.createElement("span",null,x.newsletter?"Oui":"Non"),l.createElement("span",null,"Gâteau préféré"),l.createElement("span",null,U?`${U.name}`:"Aucun")),l.createElement("div",{style:{marginTop:"1em",display:"flex",gap:"0.5rem"}},l.createElement("button",{onClick:()=>D(x)},"Modifier"),l.createElement("button",{onClick:()=>E(x.id)},"Supprimer")))})))}function pi(){return l.createElement("div",{className:"PastryManager"},l.createElement("div",{className:"menuManagement"},l.createElement("a",{href:"/admin/dashboard"},l.createElement("button",{className:"backButtonDash"},"Retour au Tableau de Bord")),l.createElement("h1",null,"Gestion des utilisateurs"),l.createElement(hi,null)))}function Ei(){const u="https://www.lecameo17.fr/api",[m,f]=g.useState([]),[s,d]=g.useState([]),[v,y]=g.useState([]),[M,z]=g.useState(!0),[h,N]=g.useState({clientId:"",activityId:"",places:1}),B=async()=>{z(!0);try{const[D,E,x]=await Promise.all([fetch(`${u}/booking`),fetch(`${u}/client`),fetch(`${u}/activity`)]),U=await D.json(),X=await E.json(),H=await x.json();f(U),d(X),y(H)}catch(D){console.error("Erreur lors du chargement des données :",D)}finally{z(!1)}};g.useEffect(()=>{B()},[]);const A=D=>{const{name:E,value:x}=D.target;N(U=>({...U,[E]:x}))},q=async D=>{if(D.preventDefault(),!(!h.clientId||!h.activityId))try{const E=(X=new Date)=>{const H=F=>F.toString().padStart(2,"0");return`${X.getFullYear()}-${H(X.getMonth()+1)}-${H(X.getDate())} ${H(X.getHours())}:${H(X.getMinutes())}:${H(X.getSeconds())}`},x={client_id:parseInt(h.clientId),activity_id:parseInt(h.activityId),places_reserved:parseInt(h.places),created_at:E(),updated_at:E()},U=await fetch(`${u}/booking`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});if(U.ok)B(),N({clientId:"",activityId:"",places:1});else{const X=await U.json();alert("Erreur: "+X.error)}}catch(E){console.error("Erreur création réservation :",E)}},_=async(D,E)=>{if(window.confirm("Supprimer cette réservation ?"))try{const x=await fetch(`${u}/booking/${D}/${E}`,{method:"DELETE"});if(!x.ok)throw new Error(`Erreur HTTP ${x.status}`);B()}catch(x){console.error("Erreur suppression réservation :",x)}},C=D=>new Date(D).toLocaleString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return M?l.createElement("div",null,l.createElement("p",null,"Chargement des données...")):l.createElement("div",{className:"reservManagementCompo"},l.createElement("h2",null,"Gestion des réservations"),l.createElement("div",{className:"reservationFormDiv"},l.createElement("h3",null,"Créer une réservation"),l.createElement("form",{onSubmit:q,className:"adminForm3"},l.createElement("fieldset",null,l.createElement("div",null,l.createElement("label",null,"Utilisateur :"),l.createElement("select",{name:"clientId",value:h.clientId,onChange:A,required:!0},l.createElement("option",{value:""},"-- Sélectionnez un utilisateur --"),s.map((D,E)=>l.createElement("option",{key:`${D.id}-${E}`,value:D.id},D.firstname," ",D.lastname)))),l.createElement("div",null,l.createElement("label",null,"Activité :"),l.createElement("select",{name:"activityId",value:h.activityId,onChange:A,required:!0},l.createElement("option",{value:""},"-- Sélectionnez une activité --"),v.map((D,E)=>{const x=new Date(D[":start"].date);return x<new Date?null:l.createElement("option",{key:`${D[":id"]}-${E}`,value:D[":id"]},D[":title"]," —"," ",x.toLocaleDateString("fr-FR"))}))),l.createElement("label",null,"Nombre de places"),l.createElement("input",{type:"number",name:"places",min:"1",value:h.places,onChange:A,required:!0}),l.createElement("br",null),l.createElement("button",{style:{marginTop:"1em"},type:"submit"},"Créer la réservation")))),l.createElement("div",null,l.createElement("h3",null,"Liste des réservations"),m.length>0?l.createElement("div",{className:"cards-grid"},m.map((D,E)=>{const x=s.find(H=>H.id===D.client),U=v.find(H=>H[":id"]===D.activity),X=H=>!H||!H.date?"?":C(H.date.replace(" ","T"));return l.createElement("div",{className:"card",style:{border:"solid 3px #582108"},key:`${D.client}-${D.activity}-${E}`},l.createElement("h3",null,x?`${x.firstname} ${x.lastname}`:"Invité"),l.createElement("p",null,l.createElement("strong",null,"Activité :")," ",U?U[":title"]:"Inconnue"),l.createElement("p",null,l.createElement("strong",null,"Type :")," ",U?U[":type"]:"?"),l.createElement("p",null,l.createElement("strong",null,"Date :")," ",U?X(U[":start"]):"?"),l.createElement("p",null,l.createElement("strong",null,"Réservé le :")," ",C(D.created)),l.createElement("p",null,l.createElement("strong",null,"Nombre de places réservées :")," ",D?D.places:"?"),l.createElement("button",{onClick:()=>_(D.client,D.activity)},"Supprimer"))})):l.createElement("p",null,"Aucune réservation trouvée.")))}function vi(){return l.createElement("div",{className:"PastryManager"},l.createElement("div",{className:"menuManagement"},l.createElement("a",{href:"/admin/dashboard"},l.createElement("button",{className:"backButtonDash"},"Retour au Tableau de Bord")),l.createElement("h1",null,"Gestion des réservations"),l.createElement(Ei,null)))}function zi(){const[u,m]=g.useState([]),[f,s]=g.useState({name:"",price:"",photo:"",ingredients:"",type:""}),[d,v]=g.useState(null),y="https://www.lecameo17.fr/api";g.useEffect(()=>{M()},[]);const M=()=>{fetch(`${y}/product`).then(E=>{if(!E.ok)throw new Error(`Erreur HTTP: ${E.status} ${E.statusText}`);return E.json()}).then(m).catch(E=>console.error("Erreur lors du fetch des produits :",E))},z=E=>{const{name:x,value:U}=E.target;s({...f,[x]:U})},h=async E=>{E.preventDefault();let x=d?`${y}/product/${d}`:`${y}/product`;const U=new FormData;U.append("name",f.name),U.append("price",f.price),U.append("ingredients",f.ingredients),U.append("type",f.type),f.photo&&U.append("photo",f.photo),d&&U.append("_method","PUT");try{const X=await fetch(x,{method:"POST",body:U}),H=await X.text();let F={};try{F=JSON.parse(H)}catch{X.status!==204&&console.warn("Réponse non JSON reçue du serveur:",H)}if(!X.ok){const t1=F.error||`Erreur HTTP: ${X.status} ${X.statusText}`;throw new Error(t1)}M()}catch(X){console.error("Erreur lors de l'envoi ou du rechargement :",X)}finally{s({name:"",price:"",photo:"",ingredients:"",type:""}),v(null)}},N=E=>{s({name:E.name,price:E.price,photo:E.photo,ingredients:E.ingredients,type:E.type}),v(E.id)},B=E=>{const x=E.target.files[0];x&&s({...f,photo:x})},A=E=>{if(!E){console.error("Impossible de supprimer : l'ID est indéfini !");return}window.confirm("Voulez-vous vraiment supprimer ce produit ?")&&fetch(`${y}/product/${E}`,{method:"DELETE"}).then(async x=>{const U=await x.text();if(!x.ok)try{const X=JSON.parse(U);throw new Error(X.error||`Erreur ${x.status}`)}catch{throw new Error(U||`Erreur lors de la suppression: ${x.status}`)}return U}).then(x=>{console.log("Produit supprimé avec succès."),M()}).catch(x=>console.error("Erreur lors de la suppression du produit :",x.message))},q=u.reduce((E,x)=>{const U=x.type||"Autre";return E[U]||(E[U]=[]),E[U].push(x),E},{}),[_,C]=g.useState(null),D=E=>{C(_===E?null:E)};return l.createElement("div",{className:"cakeManagementCompo"},l.createElement("h2",null,"Gestion des Produits"),l.createElement("div",{className:"allCakeDiv"},l.createElement("div",{className:"cakeAddDiv"},l.createElement("h3",null,d?"Modifier un produit":"Ajouter un produit"),l.createElement("form",{onSubmit:h,className:"adminForm2"},l.createElement("fieldset",null,l.createElement("label",null,"Nom du produit"),l.createElement("br",null),l.createElement("input",{name:"name",placeholder:"Nom",value:f.name,onChange:z,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Prix du produit"),l.createElement("br",null),l.createElement("input",{name:"price",type:"number",step:"0.01",placeholder:"Prix",value:f.price,onChange:z,required:!0}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Photo du produit (optionnel)"),l.createElement("br",null),l.createElement("input",{name:"photo",type:"file",placeholder:"Photo",onChange:B}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Ingrédients du produit (optionnel)"),l.createElement("br",null),l.createElement("input",{name:"ingredients",placeholder:"Ingrédients",value:f.ingredients||"",onChange:z}),l.createElement("br",null),l.createElement("br",null),l.createElement("label",null,"Type du produit"),l.createElement("br",null),l.createElement("select",{name:"type",placeholder:"Choisir un type",value:f.type,onChange:z,required:!0},l.createElement("option",{value:"gateau-part"},"Gâteaux à la part"),l.createElement("option",{value:"gateau-entier"},"Gâteaux entiers"),l.createElement("option",{value:"boissons-chaudes"},"Boissons Chaudes"),l.createElement("option",{value:"boissons-froides"},"Boissons Froides"),l.createElement("option",{value:"thes-verts"},"Thés Verts"),l.createElement("option",{value:"thes-noirs"},"Thés Noirs"),l.createElement("option",{value:"infusions"},"Infusions"),l.createElement("option",{value:"rooibos"},"Rooïbos"),l.createElement("option",{value:"goodies"},"Goodies"),l.createElement("option",{value:"sachet"},"Sachets de thé 100g"),l.createElement("option",{value:"glaces"},"Glaces")),l.createElement("br",null),l.createElement("br",null),l.createElement("button",{type:"submit"},d?"Modifier":"Ajouter")))),l.createElement("div",{className:"cakeTableDiv"},l.createElement("h3",null,"Liste des produits"),l.createElement("table",{className:"cakeTable"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Nom"),l.createElement("th",null,"Prix"),l.createElement("th",null,"Photo"),l.createElement("th",null,"Ingrédients"),l.createElement("th",null,"Type"),l.createElement("th",null,"Actions"))),l.createElement("tbody",null,u.map(E=>l.createElement("tr",{key:E.id,className:"tableRank2"},l.createElement("td",null,E.name),l.createElement("td",null,E.price," €"),l.createElement("td",null,E.photo?l.createElement("img",{src:`${y}/uploads/${E.photo}`,alt:E.name,style:{width:"50px",height:"50px",objectFit:"cover",borderRadius:"4px"}}):""),l.createElement("td",null,!E.ingredients||E.ingredients==="null"?"":E.ingredients),l.createElement("td",null,E.type),l.createElement("td",null,l.createElement("button",{onClick:()=>N(E)},"Modifier"),l.createElement("button",{onClick:()=>A(E.id)},"Supprimer")))))),l.createElement("div",{className:"mobileAccordionContainer"},Object.keys(q).map(E=>l.createElement("div",{key:E,className:"accordionSection"},l.createElement("button",{className:"accordionHeader",onClick:()=>D(E),style:{width:"100%",padding:"15px",textAlign:"left",backgroundColor:"#f4f4f4",color:"#6c1304",border:"1px solid #6c1304",fontWeight:"bold",display:"flex",justifyContent:"space-between",textTransform:"capitalize",marginBottom:"5px"}},E.replace("-"," "),l.createElement("span",null,_===E?"▲":"▼")),_===E&&l.createElement("ul",{className:"glaceList",style:{listStyle:"none",padding:"0"}},q[E].map(x=>l.createElement("li",{key:x.id,className:"glaceItem",style:{borderBottom:"1px solid #eee",padding:"10px"}},l.createElement("div",{className:"itemDetails"},l.createElement("p",null,l.createElement("span",{style:{fontSize:"larger"}},l.createElement("strong",null,x.name)," - ",x.price," €"),l.createElement("br",null),!x.ingredients||x.ingredients==="null"?"":x.ingredients)),x.photo&&l.createElement("img",{src:`${y}/uploads/${x.photo}`,alt:x.name,style:{width:"60px",display:"block",margin:"10px 0"}}),l.createElement("div",{className:"itemActions"},l.createElement("button",{onClick:()=>N(x)},"Modifier"),l.createElement("button",{onClick:()=>A(x.id),style:{marginLeft:"10px"}},"Supprimer")))))))))))}function gi(){const[u,m]=g.useState([]),[f,s]=g.useState([]),[d,v]=g.useState(!1),[y,M]=g.useState(null),[z,h]=g.useState([]),N="https://www.lecameo17.fr/api";g.useEffect(()=>{B()},[]);const B=async()=>{try{const[D,E]=await Promise.all([fetch(`${N}/product`),fetch(`${N}/collection`)]),x=await D.json(),U=await E.json(),X=await Promise.all(U.map(async H=>{const t1=await(await fetch(`${N}/contain?collection=${H[":id"]}`)).json();return{...H,items:t1||[]}}));s(x),m(X)}catch(D){console.error("Erreur de chargement:",D)}},A=D=>{const E=f.find(x=>x.id===parseInt(D));return E?E.name:`Produit #${D}`},q=D=>{if(!D)return;M(D);const x=(D.items||[]).map(U=>parseInt(U.product_id||U[":product_id"]));h(x),v(!0)},_=D=>{const E=parseInt(D);h(x=>x.includes(E)?x.filter(U=>U!==E):[...x,E])},C=async()=>{const D=y[":id"],E=y.items.map(X=>parseInt(X.product_id)).filter(X=>!isNaN(X)),x=z.filter(X=>!E.includes(X)),U=E.filter(X=>!z.includes(X));try{for(const X of x)await fetch(`${N}/contain`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({product:X,collection:D})});for(const X of U)await fetch(`${N}/contain/${X}/${D}`,{method:"DELETE"});v(!1),B()}catch(X){alert("Erreur lors de la mise à jour"),console.error(X)}};return l.createElement("div",{className:"collectionManager"},l.createElement("h2",null,"Gestion des Collections"),l.createElement("div",{className:"collectionList"},u.map(D=>l.createElement("div",{key:D[":id"],className:"collectionBox"},l.createElement("h3",null,D[":name"]),l.createElement("ul",null,D.items.length>0?D.items.map(E=>{const x=E.product_id,U=E.collection_id;return l.createElement("li",{key:`${U}-${x}`},A(x))}):l.createElement("li",{key:"empty",style:{color:"gray"}},"Collection vide")),l.createElement("button",{onClick:()=>q(D)},"Modifier le contenu")))),d&&l.createElement("div",{className:"modalCollection"},l.createElement("h3",null,"Contenu de : ",y[":name"]),l.createElement("div",{className:"productsGrid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}},f.map(D=>l.createElement("label",{key:D.id,style:{display:"block",padding:"5px"}},l.createElement("input",{type:"checkbox",checked:z.includes(parseInt(D.id)),onChange:()=>_(D.id),style:{marginRight:"0.5em"}}),D.name," ",l.createElement("small",null,"(",D.type,")")))),l.createElement("div",{style:{marginTop:"20px"}},l.createElement("button",{onClick:()=>v(!1)},"Annuler"),l.createElement("button",{onClick:C,style:{marginLeft:"10px",fontWeight:"bold",border:"1px solid whitesmoke",marginTop:"10px"}},"Enregistrer les modifications"))))}function yi(){return l.createElement("div",{className:"menuManagement"},l.createElement("a",{href:"/admin/dashboard"},l.createElement("button",{className:"backButtonDash"},"Retour au Tableau de Bord")),l.createElement("h1",null,"Gestion de la carte"),l.createElement(zi,null),l.createElement("hr",null),l.createElement(gi,null))}const bi=()=>localStorage.getItem("authToken")?l.createElement(Dc,null):l.createElement(P7,{to:"/admin"});function Si(){const{client:u}=O4(),[m,f]=g.useState([]),[s,d]=g.useState({lastname:"",firstname:"",mail:"",tel:"",newsletter:"0",product_id:"",password:""}),[v,y]=g.useState(!1),[M,z]=g.useState(null),[h,N]=g.useState(null),[B,A]=g.useState([]),[q,_]=g.useState(!0),C="https://www.lecameo17.fr/api";g.useEffect(()=>{u?.id_client&&(d({lastname:u.client_lastname,firstname:u.client_firstname,mail:u.client_mail,tel:u.client_telephone||"",newsletter:u.client_newsletter_agreement?"1":"0",product_id:u.product_id?String(u.product_id):"",password:""}),D(),E(u.id_client))},[u]);const D=async()=>{try{const H=await fetch(`${C}/product?type=gateau-entier`);if(!H.ok)throw new Error(`Erreur ${H.status}`);const F=await H.json(),t1=await fetch(`${C}/product?type=gateau-part`);if(!t1.ok)throw new Error(`Erreur ${t1.status}`);const v1=await t1.json(),i1=[...F,...v1];f(i1)}catch(H){console.error("Erreur lors du fetch des produits :",H)}},E=async H=>{_(!0);try{const F=await fetch(`${C}/booking?client=${H}`);if(!F.ok)throw new Error(`Erreur ${F.status}`);const t1=await F.json(),v1=await Promise.all(t1.map(async(i1,Q)=>{try{const a1=await fetch(`${C}/activity/${i1.activity}`);if(!a1.ok)throw new Error("Activité introuvable");const c1=await a1.json();return console.log("📊 Structure de l'activité:",c1),{...i1,places_reserved:i1.places,title:c1[":title"],type:c1[":type"],start:c1[":start"]?.date,end:c1[":end"]?.date,price:c1[":price"],contributor:c1[":contributor"],remainingPlaces:c1.remaining_places,key:`${i1.client}-${i1.activity}-${Q}`}}catch(a1){return console.error(`Erreur pour l'activité ${i1.activity}:`,a1),{...i1,title:"Activité indisponible",key:`${i1.client}-${i1.activity}-${Q}`}}}));A(v1)}catch(F){console.error("Erreur lors du chargement :",F),A([])}finally{_(!1)}},x=async(H,F)=>{if(window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?"))try{const t1=await fetch(`${C}/booking/${H}/${F}`,{method:"DELETE"});if(!t1.ok)throw new Error(`Erreur ${t1.status}`);E(u.id_client)}catch(t1){console.error(t1)}},U=H=>{const{name:F,value:t1}=H.target;d({...s,[F]:t1})},X=async H=>{H.preventDefault(),z(null),N(null);const F={client_firstname:s.firstname,client_lastname:s.lastname,client_mail:s.mail,client_telephone:s.tel,client_newsletter_agreement:s.newsletter==="1"?1:0,product_id:s.product_id?parseInt(s.product_id,10):null};s.password&&s.password.trim()!==""&&(F.client_password=s.password);try{const t1=await fetch(`${C}/client/${u.id_client}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F),credentials:"include"});if(!t1.ok){const v1=await t1.json();throw new Error(v1.error||`Erreur HTTP ${t1.status}`)}N("Vos informations ont été mises à jour !"),y(!1),window.location.reload()}catch(t1){console.error(t1),z(t1.message)}};return u?l.createElement("div",{className:"profile"},l.createElement("h1",null,"Bonjour ",u.client_firstname," !"),v?l.createElement("form",{onSubmit:X,className:"profileForm"},l.createElement("label",null,"Nom:"),l.createElement("input",{name:"lastname",value:s.lastname,onChange:U,required:!0}),l.createElement("br",null),l.createElement("label",null,"Prénom:"),l.createElement("input",{name:"firstname",value:s.firstname,onChange:U,required:!0}),l.createElement("br",null),l.createElement("label",null,"Email:"),l.createElement("input",{type:"email",name:"mail",value:s.mail,onChange:U,required:!0}),l.createElement("br",null),l.createElement("label",null,"Téléphone:"),l.createElement("input",{type:"tel",name:"tel",value:s.tel,onChange:U}),l.createElement("br",null),l.createElement("label",null,"Newsletter:"),l.createElement("div",null,l.createElement("input",{type:"radio",name:"newsletter",value:"1",checked:s.newsletter==="1",onChange:U})," ","Oui",l.createElement("input",{type:"radio",name:"newsletter",value:"0",checked:s.newsletter==="0",onChange:U})," ","Non"),l.createElement("br",null),l.createElement("label",null,"Gâteau préféré:"),l.createElement("select",{name:"product_id",value:s.product_id,onChange:U},l.createElement("option",{value:""},"--Choisissez un gâteau--"),m.map((H,F)=>l.createElement("option",{key:`${H.id_product||H.id}-${F}`,value:H.id_product||H.id},H.product_name||H.name))),l.createElement("br",null),l.createElement("label",null,"Nouveau mot de passe:"),l.createElement("input",{type:"password",name:"password",value:s.password,onChange:U,placeholder:"Laissez vide pour ne pas changer"}),l.createElement("br",null),l.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.createElement("button",{type:"submit",style:{marginRight:"1em"}},"Enregistrer"),l.createElement("button",{type:"button",onClick:()=>y(!1)},"Annuler"))):l.createElement("div",{className:"userInformationsDiv"},l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"Nom et prénom:")," ",u.client_lastname," ",u.client_firstname),l.createElement("li",null,l.createElement("strong",null,"Email:")," ",u.client_mail),l.createElement("li",null,l.createElement("strong",null,"Téléphone:")," ",u.client_telephone||"Non renseigné"),l.createElement("li",null,l.createElement("strong",null,"Newsletter:")," ",u.client_newsletter_agreement?"Oui":"Non"),l.createElement("li",null,l.createElement("strong",null,"Gâteau préféré:")," ",u.product_name||"Non spécifié")),l.createElement("button",{onClick:()=>y(!0)},"Modifier mes informations")),l.createElement("div",{className:"userReservationsDiv"},l.createElement("h3",null,"Vos réservations"),q?l.createElement("p",null,"Chargement de vos réservations..."):B.length>0?l.createElement("ul",{className:"reservationList"},B.map(H=>l.createElement("li",{key:H.key,className:"reservationItem"},l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Activité:"),l.createElement("span",{className:"value"},l.createElement("strong",null,H.title)," (",H.type,")")),l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Date de début:"),l.createElement("span",{className:"value"},new Date(H.start).toLocaleString("fr-FR"))),l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Date de fin:"),l.createElement("span",{className:"value"},new Date(H.end).toLocaleString("fr-FR"))),l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Places réservées:"),l.createElement("span",{className:"value"},H.places_reserved)),H.remainingPlaces!==void 0&&l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Places restantes:"),l.createElement("span",{className:"value"},H.remainingPlaces)),l.createElement("div",{className:"reservationDetail"},l.createElement("span",{className:"label"},"Statut:"),l.createElement("span",{className:"value"},H.is_canceled?"Annulée":"Confirmée")),l.createElement("div",{className:"reservationActions"},!H.is_canceled&&l.createElement("button",{onClick:()=>x(H.client,H.activity)},"Annuler cette réservation"))))):l.createElement("p",null,"Vous n'avez aucune réservation.")),M&&l.createElement("p",{style:{marginLeft:"2em",color:"red"}},M),h&&l.createElement("p",{style:{marginLeft:"2em",color:"green"}},h)):l.createElement("div",null,"Chargement des informations...")}function Mi(){const[u,m]=g.useState(!1);g.useEffect(()=>{const s=()=>{m(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.createElement("div",{className:"page"},u&&l.createElement("button",{onClick:f,style:{position:"fixed",bottom:"30px",right:"30px",padding:"12px 18px",borderRadius:"8px",background:"whitesmoke",color:"#6c1304",cursor:"pointer",border:"solid 2px #dd7300",fontWeight:"400",fontSize:"xx-large"}},"↑"),l.createElement("hr",{className:"NavigLigne2"}),l.createElement("hr",{className:"NavigLigne21"}),l.createElement("div",{className:"sousTitre"},l.createElement("h1",null,"Politique de Confidentialité")),l.createElement("div",{className:"politicDiv"},l.createElement("ol",null,l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Identité du responsable du traitement:")," ","Le responsable du traitement de vos données personnelles est : Le Caméo, 36 Avenue Lafayette 17300 Rochefort,"," ",l.createElement("a",{href:"mailto:lecameo17@gmail.com",style:{color:"#b21a00"}},"lecameo17@gmail.com"),"."),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Données personnelles collectées:")," ","Nous collectons les données suivantes :",l.createElement("ul",null,l.createElement("li",null,l.createElement("u",null,"Données d'authentification")," : Nom d'utilisateur, adresse e-mail, mot de passe."),l.createElement("li",null,l.createElement("u",null,"Données de réservation")," : Informations liées à votre réservation, telles que numéro de téléphone, nombre de places, date, description de l'activité."))),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Finalités du traitement des données:")," ","Vos données personnelles sont traitées exclusivement pour les finalités suivantes :",l.createElement("ul",null,l.createElement("li",null,"Gérer votre compte utilisateur et assurer votre authentification sur notre site."),l.createElement("li",null,"Gérer vos réservations d'activités."),l.createElement("li",null,"Nous ne collectons ni ne traitons vos données à des fins commerciales, marketing, de profilage, ou de suivi de votre navigation."))),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Base légale du traitement:")," Le traitement de vos données personnelles est fondé sur l'exécution d'un contrat (Article 6.1.b du RGPD). En vous inscrivant et en effectuant des réservations, vous consentez à ce que vos données soient traitées pour la bonne exécution des services que vous avez demandés."),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Destinataires des données:")," Vos données personnelles ne sont pas communiquées à des tiers, à l'exception des sous-traitants techniques qui interviennent dans la fourniture de nos services. Ces sous-traitants sont liés par des obligations contractuelles garantissant la sécurité et la confidentialité de vos données."),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Durée de conservation des données:")," ","Vos données d'authentification sont conservées tant que votre compte utilisateur est actif. Les données de réservation sont conservées pour une durée de 1 an après l'activité afin de pouvoir gérer d'éventuels litiges ou questions."),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Vos droits Conformément au RGPD:")," ","Vous disposez des droits suivants concernant vos données personnelles :",l.createElement("ul",null,l.createElement("li",null,l.createElement("u",null,"Droit d'accès")," : Vous pouvez demander l'accès à vos données personnelles que nous détenons."),l.createElement("li",null,l.createElement("u",null,"Droit de rectification")," : Vous pouvez demander la rectification de données inexactes ou incomplètes."),l.createElement("li",null,l.createElement("u",null,"Droit d'effacement")," : Vous pouvez demander l'effacement de vos données dans certaines conditions."),l.createElement("li",null,l.createElement("u",null,"Droit à la limitation du traitement")," : Vous pouvez demander la limitation du traitement de vos données."),l.createElement("li",null,l.createElement("u",null,"Droit à la portabilité")," : Vous pouvez demander à recevoir vos données dans un format structuré et couramment utilisé."),l.createElement("li",null,l.createElement("u",null,"Droit d'opposition")," : Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes. Pour exercer ces droits, vous pouvez nous contacter à"," ",l.createElement("a",{href:"mailto:lecameo17@gmail.com",style:{color:"#b21a00"}},"lecameo17@gmail.com"),". Nous nous engageons à vous répondre dans un délai d'un mois."))," "),l.createElement("li",{style:{marginBottom:"1em"}},l.createElement("span",{className:"politicSpan"},"Droit d'introduire une réclamation:")," ","Si vous estimez que le traitement de vos données ne respecte pas les exigences du RGPD, vous avez le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :",l.createElement("a",{href:"https://www.cnil.fr/fr/plaintes",target:"_blank",style:{color:"#b21a00"}},"https://www.cnil.fr/fr/plaintes"),"."))))}function Ni(){const{isLoading:u,isAuthenticated:m}=O4();return u?l.createElement("div",null,"Chargement de l'application..."):l.createElement("div",{className:"App"},l.createElement(Pu,null),l.createElement(xc,null,l.createElement(H1,{path:"/",element:l.createElement(Eu,null)}),l.createElement(H1,{path:"/boutique",element:l.createElement(Zu,null)}),l.createElement(H1,{path:"/apropos",element:l.createElement(Su,null)}),l.createElement(H1,{path:"/blog",element:l.createElement(Mu,null)}),l.createElement(H1,{path:"/agenda",element:l.createElement(Au,null)}),l.createElement(H1,{path:"/partenaires",element:l.createElement(Lu,null)}),l.createElement(H1,{path:"/404",element:l.createElement(ni,null)}),l.createElement(H1,{path:"/mentions",element:l.createElement(oi,null)}),l.createElement(H1,{path:"/politique",element:l.createElement(Mi,null)}),l.createElement(H1,{path:"/admin",element:l.createElement(li,null)}),l.createElement(H1,{element:l.createElement(bi,null)},l.createElement(H1,{path:"/admin/dashboard",element:l.createElement(si,null)}),l.createElement(H1,{path:"/admin/dashboard/homepageManagement",element:l.createElement(mi,null)}),l.createElement(H1,{path:"/admin/dashboard/activity",element:l.createElement(di,null)}),l.createElement(H1,{path:"/admin/dashboard/user",element:l.createElement(pi,null)}),l.createElement(H1,{path:"/admin/dashboard/reservation",element:l.createElement(vi,null)}),l.createElement(H1,{path:"/admin/dashboard/carte",element:l.createElement(yi,null)})),l.createElement(H1,{path:"/profile",element:m?l.createElement(Si,null):l.createElement(P7,{to:"/"})})),l.createElement(ei,null))}const Ti=B9.createRoot(document.getElementById("root"));Ti.render(l.createElement(eu,null,l.createElement(Nu,null,l.createElement(Ni,null))));
