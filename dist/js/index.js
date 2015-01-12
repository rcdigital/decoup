(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! @license Firebase v2.1.0 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Mb=function(){return a.hf?a.hf:a.hf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Jg=b.prototype;a.prototype=new c;a.Fg=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function na(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function oa(){this.Hd=void 0}
function pa(a,b,c){switch(typeof b){case "string":qa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],pa(a,a.Hd?a.Hd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),qa(f,c),
c.push(":"),pa(a,a.Hd?a.Hd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ra={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function qa(a,b){b.push('"',a.replace(sa,function(a){if(a in ra)return ra[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ra[a]=e+b.toString(16)}),'"')};function ta(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):na(a)}function r(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];pa(new oa,a,b);a=b.join("")}return a};function s(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function t(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ua(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function va(a){var b={};ua(a,function(a,d){b[a]=d});return b};function wa(a){this.tc=a;this.Ed="firebase:"}h=wa.prototype;h.set=function(a,b){null==b?this.tc.removeItem(this.Ed+a):this.tc.setItem(this.Ed+a,r(b))};h.get=function(a){a=this.tc.getItem(this.Ed+a);return null==a?null:ta(a)};h.remove=function(a){this.tc.removeItem(this.Ed+a)};h.jf=!1;h.toString=function(){return this.tc.toString()};function xa(){this.nc={}}xa.prototype.set=function(a,b){null==b?delete this.nc[a]:this.nc[a]=b};xa.prototype.get=function(a){return s(this.nc,a)?this.nc[a]:null};xa.prototype.remove=function(a){delete this.nc[a]};xa.prototype.jf=!0;function ya(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wa(b)}}catch(c){}return new xa}var za=ya("localStorage"),Aa=ya("sessionStorage");function Ba(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.zb=b;this.tb=c;this.Dg=d;this.Dd=e||"";this.La=za.get("host:"+a)||this.host}function Ca(a,b){b!==a.La&&(a.La=b,"s-"===a.La.substr(0,2)&&za.set("host:"+a.host,a.La))}Ba.prototype.toString=function(){var a=(this.zb?"https://":"http://")+this.host;this.Dd&&(a+="<"+this.Dd+">");return a};function Da(){this.Sa=-1};function Ea(){this.Sa=-1;this.Sa=64;this.S=[];this.be=[];this.Ef=[];this.Ad=[];this.Ad[0]=128;for(var a=1;a<this.Sa;++a)this.Ad[a]=0;this.Td=this.Rb=0;this.reset()}ma(Ea,Da);Ea.prototype.reset=function(){this.S[0]=1732584193;this.S[1]=4023233417;this.S[2]=2562383102;this.S[3]=271733878;this.S[4]=3285377520;this.Td=this.Rb=0};
function Fa(a,b,c){c||(c=0);var d=a.Ef;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.S[0];c=a.S[1];for(var g=a.S[2],k=a.S[3],l=a.S[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.S[0]=a.S[0]+b&4294967295;a.S[1]=a.S[1]+c&4294967295;a.S[2]=a.S[2]+g&4294967295;a.S[3]=a.S[3]+k&4294967295;a.S[4]=a.S[4]+l&4294967295}
Ea.prototype.update=function(a,b){n(b)||(b=a.length);for(var c=b-this.Sa,d=0,e=this.be,f=this.Rb;d<b;){if(0==f)for(;d<=c;)Fa(this,a,d),d+=this.Sa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Sa){Fa(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Sa){Fa(this,e);f=0;break}}this.Rb=f;this.Td+=b};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var v=Array.prototype,Ha=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ia=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Ka=v.map?function(a,b,c){return v.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},La=v.reduce?function(a,b,c,d){d&&(b=q(b,d));return v.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ia(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Ma=v.every?function(a,b,c){return v.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Na(a,b){var c=Oa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Oa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Pa(a,b){var c=Ha(a,b);0<=c&&v.splice.call(a,c,1)}function Qa(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)}function Ra(a,b){a.sort(b||Sa)}function Sa(a,b){return a>b?1:a<b?-1:0};var Ta;a:{var Ua=aa.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ta=Va;break a}}Ta=""}function Wa(a){return-1!=Ta.indexOf(a)};var Xa=Wa("Opera")||Wa("OPR"),Ya=Wa("Trident")||Wa("MSIE"),Za=Wa("Gecko")&&-1==Ta.toLowerCase().indexOf("webkit")&&!(Wa("Trident")||Wa("MSIE")),$a=-1!=Ta.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Xa&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Za?b=/rv\:([^\);]+)(\)|;)/:Ya?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:$a&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ta))?a[1]:"");return Ya&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var ab=null,bb=null,cb=null;function db(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");eb();for(var c=b?bb:ab,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[u],c[f],c[k],c[m])}return d.join("")}
function eb(){if(!ab){ab={};bb={};cb={};for(var a=0;65>a;a++)ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),bb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),cb[bb[a]]=a}};var fb=function(){var a=1;return function(){return a++}}();function w(a,b){if(!a)throw gb(b);}function gb(a){return Error("Firebase INTERNAL ASSERT FAILED:"+a)}
function hb(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{eb();for(var c=cb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Qa(d,c,
c+8192));b=a}}return b}catch(m){ib("base64Decode failed: ",m)}return null}function jb(a){var b=kb(a);a=new Ea;a.update(b);var b=[],c=8*a.Td;56>a.Rb?a.update(a.Ad,56-a.Rb):a.update(a.Ad,a.Sa-(a.Rb-56));for(var d=a.Sa-1;56<=d;d--)a.be[d]=c&255,c/=256;Fa(a,a.be);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.S[d]>>e&255,++c;return db(b)}
function lb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+lb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+r(arguments[c]):b+arguments[c],b+=" ";return b}var mb=null,nb=!0;function ib(a){!0===nb&&(nb=!1,null===mb&&!0===Aa.get("logging_enabled")&&ob(!0));if(mb){var b=lb.apply(null,arguments);mb(b)}}function pb(a){return function(){ib(a,arguments)}}
function qb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+lb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function rb(a){var b=lb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function y(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+lb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function sb(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(u){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Ag:d,zb:f,scheme:g,Oc:e}}function tb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function ub(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function vb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=wb(a),d=wb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function xb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+r(b));}
function yb(a){if("object"!==typeof a||null===a)return r(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=r(b[d]),c+=":",c+=yb(a[b[d]]);return c+"}"}function zb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Ab(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else z(a,b)}
function Bb(a){w(!tb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Cb=/^-?\d{1,10}$/;function wb(a){return Cb.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Db(a){try{a()}catch(b){setTimeout(function(){throw b;},Math.floor(0))}}function A(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Db(function(){a.apply(null,c)})}};function Eb(a,b,c,d){this.le=b;this.Nd=c;this.Fd=d;this.jd=a}Eb.prototype.Pb=function(){var a=this.Nd.cc();return"value"===this.jd?a.path:a.parent().path};Eb.prototype.oe=function(){return this.jd};Eb.prototype.Kb=function(){return this.le.Kb(this)};Eb.prototype.toString=function(){return this.Pb().toString()+":"+this.jd+":"+r(this.Nd.Ze())};function Fb(a,b,c){this.le=a;this.error=b;this.path=c}Fb.prototype.Pb=function(){return this.path};Fb.prototype.oe=function(){return"cancel"};
Fb.prototype.Kb=function(){return this.le.Kb(this)};Fb.prototype.toString=function(){return this.path.toString()+":cancel"};function B(a,b,c,d){this.type=a;this.Ga=b;this.Ua=c;this.Ce=d;this.Fd=void 0}function Gb(a){return new B(Hb,a)}var Hb="value";function Ib(a,b,c){this.Gb=a;this.kb=b;this.mb=c||null}h=Ib.prototype;h.tf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.w.g;return new Eb("value",this,new C(a.Ga,b.cc(),c))};h.Kb=function(a){var b=this.mb;if("cancel"===a.oe()){w(this.kb,"Raising a cancel event on a listener with no cancel callback");var c=this.kb;return function(){c.call(b,a.error)}}var d=this.Gb;return function(){d.call(b,a.Nd)}};h.Ve=function(a,b){return this.kb?new Fb(this,a,b):null};
h.matches=function(a){return a instanceof Ib?a.Gb&&this.Gb?a.Gb===this.Gb&&a.mb===this.mb:!0:!1};h.ff=function(){return null!==this.Gb};function Jb(a,b,c){this.da=a;this.kb=b;this.mb=c}h=Jb.prototype;h.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.da};h.Ve=function(a,b){return this.kb?new Fb(this,a,b):null};
h.createEvent=function(a,b){w(null!=a.Ua,"Child events should have a childName.");var c=b.cc().n(a.Ua);return new Eb(a.type,this,new C(a.Ga,c,b.w.g),a.Fd)};h.Kb=function(a){var b=this.mb;if("cancel"===a.oe()){w(this.kb,"Raising a cancel event on a listener with no cancel callback");var c=this.kb;return function(){c.call(b,a.error)}}var d=this.da[a.jd];return function(){d.call(b,a.Nd,a.Fd)}};
h.matches=function(a){if(a instanceof Jb){if(!this.da||!a.da)return!0;if(this.mb===a.mb){var b=Kb(a.da);if(b===Kb(this.da)){if(1===b){var b=Lb(a.da),c=Lb(this.da);return c===b&&(!a.da[b]||!this.da[c]||a.da[b]===this.da[c])}return Mb(this.da,function(b,c){return a.da[c]===b})}}}return!1};h.ff=function(){return null!==this.da};function kb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,w(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function F(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function G(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(F(a,b,d)+"must be a valid function.");}function Nb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(F(a,b,!0)+"must be a valid context object.");};var Ob=/[\[\].#$\/\u0000-\u001F\u007F]/,Pb=/[\[\].#$\u0000-\u001F\u007F]/;function Qb(a){return p(a)&&0!==a.length&&!Ob.test(a)}function Rb(a){return null===a||p(a)||ga(a)&&!tb(a)||ia(a)&&s(a,".sv")}function Sb(a,b,c){c&&!n(b)||Tb(F(a,1,c),b)}
function Tb(a,b,c,d){c||(c=0);var e=d||[];if(!n(b))throw Error(a+"contains undefined"+Ub(e));if(ha(b))throw Error(a+"contains a function"+Ub(e)+" with contents: "+b.toString());if(tb(b))throw Error(a+"contains "+b.toString()+Ub(e));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+e.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<kb(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ub(e)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var f=
!1,g=!1;ua(b,function(b,d){if(".value"===b)f=!0;else if(".priority"!==b&&".sv"!==b&&(g=!0,!Qb(b)))throw Error(a+" contains an invalid key ("+b+")"+Ub(e)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');e.push(b);Tb(a,d,c+1,e);e.pop()});if(f&&g)throw Error(a+' contains ".value" child'+Ub(e)+" in addition to actual children.");}}function Ub(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}
function Vb(a,b){if(!ia(b)||ea(b))throw Error(F(a,1,!1)+" must be an Object containing the children to replace.");if(s(b,".value"))throw Error(F(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Sb(a,b,!1)}
function Wb(a,b,c){if(tb(c))throw Error(F(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Rb(c))throw Error(F(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Xb(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(F(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Yb(a,b,c,d){if((!d||n(c))&&!Qb(c))throw Error(F(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Zb(a,b){if(!p(b)||0===b.length||Pb.test(b))throw Error(F(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function $b(a,b){if(".info"===H(b))throw Error(a+" failed: Can't modify data under /.info/");}function ac(a,b){if(!p(b))throw Error(F(a,1,!1)+"must be a valid credential (a string).");}function bc(a,b,c){if(!p(c))throw Error(F(a,b,!1)+"must be a valid string.");}
function I(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(F(a,b,d)+"must be a valid object.");}function J(a,b,c){if(!ia(b)||null===b||!s(b,c))throw Error(F(a,1,!1)+'must contain the key "'+c+'"');if(!p(t(b,c)))throw Error(F(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function cc(a){this.g=a}h=cc.prototype;h.F=function(a,b,c,d,e){w(a.Ac(this.g),"A node must be indexed if only a child is updated");d=a.J(b);if(d.ea(c))return a;null!=e&&(c.e()?a.Da(b)?dc(e,new B("child_removed",d,b)):w(a.L(),"A child remove without an old child only makes sense on a leaf node"):d.e()?dc(e,new B("child_added",c,b)):dc(e,new B("child_changed",c,b,d)));return a.L()&&c.e()?a:a.P(b,c)};
h.oa=function(a,b,c){null!=c&&(a.L()||a.U(K,function(a,e){b.Da(a)||dc(c,new B("child_removed",e,a))}),b.L()||b.U(K,function(b,e){if(a.Da(b)){var f=a.J(b);f.ea(e)||dc(c,new B("child_changed",e,b,f))}else dc(c,new B("child_added",e,b))}));return b.Eb(this.g)};h.$=function(a,b){return a.e()?L:a.$(b)};h.ya=function(){return!1};h.Lb=function(){return this};function ec(a){this.qe=new cc(a.g);this.g=a.g;var b;a.ia?(b=fc(a),b=a.g.ze(gc(a),b)):b=a.g.Be();this.Vc=b;a.qa?(b=hc(a),a=a.g.ze(ic(a),b)):a=a.g.Ae();this.vc=a}h=ec.prototype;h.matches=function(a){return 0>=this.g.compare(this.Vc,a)&&0>=this.g.compare(a,this.vc)};h.F=function(a,b,c,d,e){this.matches(new M(b,c))||(c=L);return this.qe.F(a,b,c,d,e)};h.oa=function(a,b,c){b.L()&&(b=L);var d=b.Eb(this.g),d=d.$(L),e=this;b.U(K,function(a,b){e.matches(new M(a,b))||(d=d.P(a,L))});return this.qe.oa(a,d,c)};
h.$=function(a){return a};h.ya=function(){return!0};h.Lb=function(){return this.qe};function jc(a,b){return vb(a.name,b.name)}function kc(a,b){return vb(a,b)};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.gf=function(a,b){return 0!==this.compare(new M("[MIN_NAME]",a),new M("[MIN_NAME]",b))};lc.prototype.Be=function(){return oc};function pc(a){this.Tb=a}ma(pc,lc);h=pc.prototype;h.te=function(a){return!a.J(this.Tb).e()};h.compare=function(a,b){var c=a.Z.J(this.Tb),d=b.Z.J(this.Tb),c=c.he(d);return 0===c?vb(a.name,b.name):c};h.ze=function(a,b){var c=N(a),c=L.P(this.Tb,c);return new M(b,c)};
h.Ae=function(){var a=L.P(this.Tb,qc);return new M("[MAX_NAME]",a)};h.toString=function(){return this.Tb};var K=new pc(".priority");function rc(){}ma(rc,lc);h=rc.prototype;h.compare=function(a,b){return vb(a.name,b.name)};h.te=function(){throw gb("KeyIndex.isDefinedOn not expected to be called.");};h.gf=function(){return!1};h.Be=function(){return oc};h.Ae=function(){return new M("[MAX_NAME]",L)};h.ze=function(a){w(p(a),"KeyIndex indexValue must always be a string.");return new M(a,L)};
h.toString=function(){return".key"};var sc=new rc;function tc(){}tc.prototype.cf=function(){return null};tc.prototype.ne=function(){return null};var uc=new tc;function vc(a,b,c){this.Bf=a;this.Ha=b;this.zd=c}vc.prototype.cf=function(a){var b=this.Ha.C;if(wc(b,a))return b.j().J(a);b=null!=this.zd?new xc(this.zd,!0,!1):this.Ha.o();return this.Bf.Ta(a,b)};vc.prototype.ne=function(a,b,c){var d=null!=this.zd?this.zd:yc(this.Ha);a=this.Bf.ce(d,b,1,c,a);return 0===a.length?null:a[0]};function zc(){this.Za={}}
function dc(a,b){var c=b.type,d=b.Ua;w("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");w(".priority"!==d,"Only non-priority child changes can be tracked.");var e=t(a.Za,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.Za[d]=new B("child_changed",b.Ga,d,e.Ga);else if("child_removed"==c&&"child_added"==f)delete a.Za[d];else if("child_removed"==c&&"child_changed"==f)a.Za[d]=new B("child_removed",e.Ce,d);else if("child_changed"==c&&
"child_added"==f)a.Za[d]=new B("child_added",b.Ga,d);else if("child_changed"==c&&"child_changed"==f)a.Za[d]=new B("child_changed",b.Ga,d,e.Ce);else throw gb("Illegal combination of changes: "+b+" occurred after "+e);}else a.Za[d]=b};function M(a,b){this.name=a;this.Z=b}function Ac(a,b){return new M(a,b)};function Bc(a){this.ma=new ec(a);this.g=a.g;w(a.ka,"Only valid if limit has been set");this.sa=a.sa;this.yb=!(""===a.Db?a.ia:"l"===a.Db)}h=Bc.prototype;h.F=function(a,b,c,d,e){this.ma.matches(new M(b,c))||(c=L);return a.J(b).ea(c)?a:a.ub()<this.sa?this.ma.Lb().F(a,b,c,d,e):Cc(this,a,b,c,d,e)};
h.oa=function(a,b,c){var d;if(b.L()||b.e())d=L.Eb(this.g);else if(2*this.sa<b.ub()&&b.Ac(this.g)){d=L.Eb(this.g);b=this.yb?b.Qb(this.ma.vc,this.g):b.Ob(this.ma.Vc,this.g);for(var e=0;0<b.Ma.length&&e<this.sa;){var f=O(b),g;if(g=this.yb?0>=this.g.compare(this.ma.Vc,f):0>=this.g.compare(f,this.ma.vc))d=d.P(f.name,f.Z),e++;else break}}else{d=b.Eb(this.g);d=d.$(L);var k,l,m;if(this.yb){b=d.ef(this.g);k=this.ma.vc;l=this.ma.Vc;var u=nc(this.g);m=function(a,b){return u(b,a)}}else b=d.Nb(this.g),k=this.ma.Vc,
l=this.ma.vc,m=nc(this.g);for(var e=0,x=!1;0<b.Ma.length;)f=O(b),!x&&0>=m(k,f)&&(x=!0),(g=x&&e<this.sa&&0>=m(f,l))?e++:d=d.P(f.name,L)}return this.ma.Lb().oa(a,d,c)};h.$=function(a){return a};h.ya=function(){return!0};h.Lb=function(){return this.ma.Lb()};
function Cc(a,b,c,d,e,f){var g;if(a.yb){var k=nc(a.g);g=function(a,b){return k(b,a)}}else g=nc(a.g);w(b.ub()==a.sa,"");var l=new M(c,d),m=a.yb?Dc(b,a.g):Ec(b,a.g),u=a.ma.matches(l);if(b.Da(c)){var x=b.J(c),m=e.ne(a.g,m,a.yb);null!=m&&m.name==c&&(m=e.ne(a.g,m,a.yb));e=null==m?1:g(m,l);if(u&&!d.e()&&0<=e)return null!=f&&dc(f,new B("child_changed",d,c,x)),b.P(c,d);null!=f&&dc(f,new B("child_removed",x,c));b=b.P(c,L);return null!=m&&a.ma.matches(m)?(null!=f&&dc(f,new B("child_added",m.Z,m.name)),b.P(m.name,
m.Z)):b}return d.e()?b:u&&0<=g(m,l)?(null!=f&&(dc(f,new B("child_removed",m.Z,m.name)),dc(f,new B("child_added",d,c))),b.P(c,d).P(m.name,L)):b};function Fc(){this.uc=this.qa=this.jc=this.ia=this.ka=!1;this.sa=0;this.Db="";this.zc=null;this.Vb="";this.yc=null;this.Sb="";this.g=K}var Gc=new Fc;function gc(a){w(a.ia,"Only valid if start has been set");return a.zc}function fc(a){w(a.ia,"Only valid if start has been set");return a.jc?a.Vb:"[MIN_NAME]"}function ic(a){w(a.qa,"Only valid if end has been set");return a.yc}function hc(a){w(a.qa,"Only valid if end has been set");return a.uc?a.Sb:"[MAX_NAME]"}
function Hc(a){var b=new Fc;b.ka=a.ka;b.sa=a.sa;b.ia=a.ia;b.zc=a.zc;b.jc=a.jc;b.Vb=a.Vb;b.qa=a.qa;b.yc=a.yc;b.uc=a.uc;b.Sb=a.Sb;b.g=a.g;return b}h=Fc.prototype;h.we=function(a){var b=Hc(this);b.ka=!0;b.sa=a;b.Db="";return b};h.xe=function(a){var b=Hc(this);b.ka=!0;b.sa=a;b.Db="l";return b};h.ye=function(a){var b=Hc(this);b.ka=!0;b.sa=a;b.Db="r";return b};h.Od=function(a,b){var c=Hc(this);c.ia=!0;n(a)||(a=null);c.zc=a;null!=b?(c.jc=!0,c.Vb=b):(c.jc=!1,c.Vb="");return c};
h.hd=function(a,b){var c=Hc(this);c.qa=!0;n(a)||(a=null);c.yc=a;n(b)?(c.uc=!0,c.Sb=b):(c.Ig=!1,c.Sb="");return c};function Ic(a,b){var c=Hc(a);c.g=b;return c}function Jc(a){return!(a.ia||a.qa||a.ka)};function P(a,b,c,d){this.k=a;this.path=b;this.w=c;this.$b=d}
function Kc(a){var b=null,c=null;a.ia&&(b=gc(a));a.qa&&(c=ic(a));if(a.g===sc){if(a.ia){if("[MIN_NAME]"!=fc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=b&&"string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.qa){if("[MAX_NAME]"!=hc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=
c&&"string"!==typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===K){if(null!=b&&!Rb(b)||null!=c&&!Rb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(w(a.g instanceof pc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Lc(a){if(a.ia&&a.qa&&a.ka&&(!a.ka||""===a.Db))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Mc(a,b){if(!0===a.$b)throw Error(b+": You can't combine multiple orderBy calls.");}P.prototype.cc=function(){D("Query.ref",0,0,arguments.length);return new Q(this.k,this.path)};P.prototype.ref=P.prototype.cc;
P.prototype.vb=function(a,b,c,d){D("Query.on",2,4,arguments.length);Xb("Query.on",a,!1);G("Query.on",2,b,!1);var e=Nc("Query.on",c,d);if("value"===a)Oc(this.k,this,new Ib(b,e.cancel||null,e.Ja||null));else{var f={};f[a]=b;Oc(this.k,this,new Jb(f,e.cancel,e.Ja))}return b};P.prototype.on=P.prototype.vb;
P.prototype.Yb=function(a,b,c){D("Query.off",0,3,arguments.length);Xb("Query.off",a,!0);G("Query.off",2,b,!0);Nb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Ib(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Jb(e,null,c||null));e=this.k;d=".info"===H(this.path)?e.qd.gb(this,d):e.M.gb(this,d);Pc(e.aa,this.path,d)};P.prototype.off=P.prototype.Yb;
P.prototype.lg=function(a,b){function c(g){f&&(f=!1,e.Yb(a,c),b.call(d.Ja,g))}D("Query.once",2,4,arguments.length);Xb("Query.once",a,!1);G("Query.once",2,b,!1);var d=Nc("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.vb(a,c,function(b){e.Yb(a,c);d.cancel&&d.cancel.call(d.Ja,b)})};P.prototype.once=P.prototype.lg;
P.prototype.we=function(a){y("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.w.we(a);Lc(b);return new P(this.k,this.path,b,this.$b)};P.prototype.limit=P.prototype.we;
P.prototype.xe=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new P(this.k,this.path,this.w.xe(a),this.$b)};P.prototype.limitToFirst=P.prototype.xe;
P.prototype.ye=function(a){D("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new P(this.k,this.path,this.w.ye(a),this.$b)};P.prototype.limitToLast=P.prototype.ye;
P.prototype.mg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');Yb("Query.orderByChild",1,a,!1);Mc(this,"Query.orderByChild");var b=Ic(this.w,new pc(a));Kc(b);return new P(this.k,this.path,b,!0)};P.prototype.orderByChild=P.prototype.mg;
P.prototype.ng=function(){D("Query.orderByKey",0,0,arguments.length);Mc(this,"Query.orderByKey");var a=Ic(this.w,sc);Kc(a);return new P(this.k,this.path,a,!0)};P.prototype.orderByKey=P.prototype.ng;P.prototype.og=function(){D("Query.orderByPriority",0,0,arguments.length);Mc(this,"Query.orderByPriority");var a=Ic(this.w,K);Kc(a);return new P(this.k,this.path,a,!0)};P.prototype.orderByPriority=P.prototype.og;
P.prototype.Od=function(a,b){D("Query.startAt",0,2,arguments.length);Sb("Query.startAt",a,!0);Yb("Query.startAt",2,b,!0);var c=this.w.Od(a,b);Lc(c);Kc(c);if(this.w.ia)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new P(this.k,this.path,c,this.$b)};P.prototype.startAt=P.prototype.Od;
P.prototype.hd=function(a,b){D("Query.endAt",0,2,arguments.length);Sb("Query.endAt",a,!0);Yb("Query.endAt",2,b,!0);var c=this.w.hd(a,b);Lc(c);Kc(c);if(this.w.qa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new P(this.k,this.path,c,this.$b)};P.prototype.endAt=P.prototype.hd;
P.prototype.Tf=function(a,b){D("Query.equalTo",1,2,arguments.length);Sb("Query.equalTo",a,!1);Yb("Query.equalTo",2,b,!0);if(this.w.ia)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.w.qa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Od(a,b).hd(a,b)};P.prototype.equalTo=P.prototype.Tf;
function Qc(a){a=a.w;var b={};a.ia&&(b.sp=a.zc,a.jc&&(b.sn=a.Vb));a.qa&&(b.ep=a.yc,a.uc&&(b.en=a.Sb));if(a.ka){b.l=a.sa;var c=a.Db;""===c&&(c=a.ia?"l":"r");b.vf=c}a.g!==K&&(b.i=a.g.toString());return b}P.prototype.Fa=function(){var a=yb(Qc(this));return"{}"===a?"default":a};
function Nc(a,b,c){var d={cancel:null,Ja:null};if(b&&c)d.cancel=b,G(a,3,d.cancel,!0),d.Ja=c,Nb(a,4,d.Ja);else if(b)if("object"===typeof b&&null!==b)d.Ja=b;else if("function"===typeof b)d.cancel=b;else throw Error(F(a,3,!0)+" must either be a cancel callback or a context object.");return d};function R(a,b){if(1==arguments.length){this.u=a.split("/");for(var c=0,d=0;d<this.u.length;d++)0<this.u[d].length&&(this.u[c]=this.u[d],c++);this.u.length=c;this.ca=0}else this.u=a,this.ca=b}function H(a){return a.ca>=a.u.length?null:a.u[a.ca]}function Rc(a){return a.u.length-a.ca}function S(a){var b=a.ca;b<a.u.length&&b++;return new R(a.u,b)}function Sc(a){return a.ca<a.u.length?a.u[a.u.length-1]:null}
R.prototype.toString=function(){for(var a="",b=this.ca;b<this.u.length;b++)""!==this.u[b]&&(a+="/"+this.u[b]);return a||"/"};R.prototype.parent=function(){if(this.ca>=this.u.length)return null;for(var a=[],b=this.ca;b<this.u.length-1;b++)a.push(this.u[b]);return new R(a,0)};
R.prototype.n=function(a){for(var b=[],c=this.ca;c<this.u.length;c++)b.push(this.u[c]);if(a instanceof R)for(c=a.ca;c<a.u.length;c++)b.push(a.u[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new R(b,0)};R.prototype.e=function(){return this.ca>=this.u.length};var T=new R("");function U(a,b){var c=H(a);if(null===c)return b;if(c===H(b))return U(S(a),S(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
R.prototype.ea=function(a){if(Rc(this)!==Rc(a))return!1;for(var b=this.ca,c=a.ca;b<=this.u.length;b++,c++)if(this.u[b]!==a.u[c])return!1;return!0};R.prototype.contains=function(a){var b=this.ca,c=a.ca;if(Rc(this)>Rc(a))return!1;for(;b<this.u.length;){if(this.u[b]!==a.u[c])return!1;++b;++c}return!0};function Tc(){this.children={};this.bd=0;this.value=null}function Uc(a,b,c){this.ud=a?a:"";this.Nc=b?b:null;this.B=c?c:new Tc}function Vc(a,b){for(var c=b instanceof R?b:new R(b),d=a,e;null!==(e=H(c));)d=new Uc(e,d,t(d.B.children,e)||new Tc),c=S(c);return d}h=Uc.prototype;h.za=function(){return this.B.value};function Wc(a,b){w("undefined"!==typeof b,"Cannot set value to undefined");a.B.value=b;Xc(a)}h.clear=function(){this.B.value=null;this.B.children={};this.B.bd=0;Xc(this)};
h.ld=function(){return 0<this.B.bd};h.e=function(){return null===this.za()&&!this.ld()};h.U=function(a){var b=this;z(this.B.children,function(c,d){a(new Uc(d,b,c))})};function Yc(a,b,c,d){c&&!d&&b(a);a.U(function(a){Yc(a,b,!0,d)});c&&d&&b(a)}function Zc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new R(null===this.Nc?this.ud:this.Nc.path()+"/"+this.ud)};h.name=function(){return this.ud};h.parent=function(){return this.Nc};
function Xc(a){if(null!==a.Nc){var b=a.Nc,c=a.ud,d=a.e(),e=s(b.B.children,c);d&&e?(delete b.B.children[c],b.B.bd--,Xc(b)):d||e||(b.B.children[c]=a.B,b.B.bd++,Xc(b))}};function $c(a,b){this.Ia=a;this.ua=b?b:ad}h=$c.prototype;h.Ka=function(a,b){return new $c(this.Ia,this.ua.Ka(a,b,this.Ia).X(null,null,!1,null,null))};h.remove=function(a){return new $c(this.Ia,this.ua.remove(a,this.Ia).X(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ua;!c.e();){b=this.Ia(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function bd(a,b){for(var c,d=a.ua,e=null;!d.e();){c=a.Ia(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.ua.e()};h.count=function(){return this.ua.count()};h.Hc=function(){return this.ua.Hc()};h.Wb=function(){return this.ua.Wb()};h.fa=function(a){return this.ua.fa(a)};
h.Nb=function(a){return new cd(this.ua,null,this.Ia,!1,a)};h.Ob=function(a,b){return new cd(this.ua,a,this.Ia,!1,b)};h.Qb=function(a,b){return new cd(this.ua,a,this.Ia,!0,b)};h.ef=function(a){return new cd(this.ua,null,this.Ia,!0,a)};function cd(a,b,c,d,e){this.Id=e||null;this.ue=d;this.Ma=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.ue?a.left:a.right;else if(0===e){this.Ma.push(a);break}else this.Ma.push(a),a=this.ue?a.right:a.left}
function O(a){if(0===a.Ma.length)return null;var b=a.Ma.pop(),c;c=a.Id?a.Id(b.key,b.value):{key:b.key,value:b.value};if(a.ue)for(b=b.left;!b.e();)a.Ma.push(b),b=b.right;else for(b=b.right;!b.e();)a.Ma.push(b),b=b.left;return c}function dd(a){if(0===a.Ma.length)return null;var b;b=a.Ma;b=b[b.length-1];return a.Id?a.Id(b.key,b.value):{key:b.key,value:b.value}}function ed(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:ad;this.right=null!=e?e:ad}h=ed.prototype;
h.X=function(a,b,c,d,e){return new ed(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.fa=function(a){return this.left.fa(a)||a(this.key,this.value)||this.right.fa(a)};function gd(a){return a.left.e()?a:gd(a.left)}h.Hc=function(){return gd(this).key};h.Wb=function(){return this.right.e()?this.key:this.right.Wb()};
h.Ka=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Ka(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Ka(a,b,c));return hd(e)};function id(a){if(a.left.e())return ad;a.left.ba()||a.left.left.ba()||(a=jd(a));a=a.X(null,null,null,id(a.left),null);return hd(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ba()||c.left.left.ba()||(c=jd(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ba()&&(c=kd(c));c.right.e()||c.right.ba()||c.right.left.ba()||(c=ld(c),c.left.left.ba()&&(c=kd(c),c=ld(c)));if(0===b(a,c.key)){if(c.right.e())return ad;d=gd(c.right);c=c.X(d.key,d.value,null,null,id(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return hd(c)};h.ba=function(){return this.color};
function hd(a){a.right.ba()&&!a.left.ba()&&(a=md(a));a.left.ba()&&a.left.left.ba()&&(a=kd(a));a.left.ba()&&a.right.ba()&&(a=ld(a));return a}function jd(a){a=ld(a);a.right.left.ba()&&(a=a.X(null,null,null,null,kd(a.right)),a=md(a),a=ld(a));return a}function md(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function kd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function ld(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function nd(){}h=nd.prototype;h.X=function(){return this};h.Ka=function(a,b){return new ed(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.fa=function(){return!1};h.Hc=function(){return null};h.Wb=function(){return null};h.ba=function(){return!1};var ad=new nd;function od(a,b){this.A=a;w(n(this.A)&&null!==this.A,"LeafNode shouldn't be created with null/undefined value.");this.ha=b||L;pd(this.ha);this.sb=null}h=od.prototype;h.L=function(){return!0};h.K=function(){return this.ha};h.$=function(a){return new od(this.A,a)};h.J=function(a){return".priority"===a?this.ha:L};h.ra=function(a){return a.e()?this:".priority"===H(a)?this.ha:L};h.Da=function(){return!1};h.df=function(){return null};
h.P=function(a,b){return".priority"===a?this.$(b):b.e()&&".priority"!==a?this:L.P(a,b).$(this.ha)};h.F=function(a,b){var c=H(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;w(".priority"!==c||1===Rc(a),".priority must be the last token in a path");return this.P(c,L.F(S(a),b))};h.e=function(){return!1};h.ub=function(){return 0};h.N=function(a){return a&&!this.K().e()?{".value":this.za(),".priority":this.K().N()}:this.za()};
h.hash=function(){if(null===this.sb){var a="";this.ha.e()||(a+="priority:"+qd(this.ha.N())+":");var b=typeof this.A,a=a+(b+":"),a="number"===b?a+Bb(this.A):a+this.A;this.sb=jb(a)}return this.sb};h.za=function(){return this.A};h.he=function(a){if(a===L)return 1;if(a instanceof V)return-1;w(a.L(),"Unknown node type");var b=typeof a.A,c=typeof this.A,d=Ha(rd,b),e=Ha(rd,c);w(0<=d,"Unknown leaf type: "+b);w(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.A<a.A?-1:this.A===a.A?0:1:e-d};
var rd=["object","boolean","number","string"];od.prototype.Eb=function(){return this};od.prototype.Ac=function(){return!0};od.prototype.ea=function(a){return a===this?!0:a.L()?this.A===a.A&&this.ha.ea(a.ha):!1};od.prototype.toString=function(){return"string"===typeof this.A?this.A:'"'+this.A+'"'};function sd(a,b){this.pd=a;this.Ub=b}sd.prototype.get=function(a){var b=t(this.pd,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function td(a,b,c){var d=ud(a.pd,function(d,f){var g=t(a.Ub,f);w(g,"Missing index implementation for "+f);if(d===mc){if(g.te(b.Z)){for(var k=[],l=c.Nb(Ac),m=O(l);m;)m.name!=b.name&&k.push(m),m=O(l);k.push(b);return vd(k,nc(g))}return mc}g=c.get(b.name);k=d;g&&(k=k.remove(new M(b.name,g)));return k.Ka(b,b.Z)});return new sd(d,a.Ub)}
function wd(a,b,c){var d=ud(a.pd,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new M(b.name,d)):a});return new sd(d,a.Ub)}var xd=new sd({".priority":mc},{".priority":K});function V(a,b,c){this.m=a;(this.ha=b)&&pd(this.ha);this.ob=c;this.sb=null}h=V.prototype;h.L=function(){return!1};h.K=function(){return this.ha||L};h.$=function(a){return new V(this.m,a,this.ob)};h.J=function(a){if(".priority"===a)return this.K();a=this.m.get(a);return null===a?L:a};h.ra=function(a){var b=H(a);return null===b?this:this.J(b).ra(S(a))};h.Da=function(a){return null!==this.m.get(a)};
h.P=function(a,b){w(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.$(b);var c=new M(a,b),d;b.e()?(d=this.m.remove(a),c=wd(this.ob,c,this.m)):(d=this.m.Ka(a,b),c=td(this.ob,c,this.m));return new V(d,this.ha,c)};h.F=function(a,b){var c=H(a);if(null===c)return b;w(".priority"!==H(a)||1===Rc(a),".priority must be the last token in a path");var d=this.J(c).F(S(a),b);return this.P(c,d)};h.e=function(){return this.m.e()};h.ub=function(){return this.m.count()};var yd=/^(0|[1-9]\d*)$/;
h=V.prototype;h.N=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(K,function(f,g){b[f]=g.N(a);c++;e&&yd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.K().e()&&(b[".priority"]=this.K().N());return b};h.hash=function(){if(null===this.sb){var a="";this.K().e()||(a+="priority:"+qd(this.K().N())+":");this.U(K,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.sb=""===a?"":jb(a)}return this.sb};
h.df=function(a,b,c){return(c=zd(this,c))?(a=bd(c,new M(a,b)))?a.name:null:bd(this.m,a)};function Dc(a,b){var c;c=(c=zd(a,b))?(c=c.Hc())&&c.name:a.m.Hc();return c?new M(c,a.m.get(c)):null}function Ec(a,b){var c;c=(c=zd(a,b))?(c=c.Wb())&&c.name:a.m.Wb();return c?new M(c,a.m.get(c)):null}h.U=function(a,b){var c=zd(this,a);return c?c.fa(function(a){return b(a.name,a.Z)}):this.m.fa(b)};h.Nb=function(a){return this.Ob(a.Be(),a)};
h.Ob=function(a,b){var c=zd(this,b);if(c)return c.Ob(a,function(a){return a});for(var c=this.m.Ob(a.name,Ac),d=dd(c);null!=d&&0>b.compare(d,a);)O(c),d=dd(c);return c};h.ef=function(a){return this.Qb(a.Ae(),a)};h.Qb=function(a,b){var c=zd(this,b);if(c)return c.Qb(a,function(a){return a});for(var c=this.m.Qb(a.name,Ac),d=dd(c);null!=d&&0<b.compare(d,a);)O(c),d=dd(c);return c};h.he=function(a){return this.e()?a.e()?0:-1:a.L()||a.e()?1:a===qc?-1:0};
h.Eb=function(a){if(a===sc||Ad(this.ob.Ub,a.toString()))return this;var b=this.ob,c=this.m;w(a!==sc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Nb(Ac),f=O(c);f;)e=e||a.te(f.Z),d.push(f),f=O(c);d=e?vd(d,nc(a)):mc;e=a.toString();c=Bd(b.Ub);c[e]=a;a=Bd(b.pd);a[e]=d;return new V(this.m,this.ha,new sd(a,c))};h.Ac=function(a){return a===sc||Ad(this.ob.Ub,a.toString())};
h.ea=function(a){if(a===this)return!0;if(a.L())return!1;if(this.K().ea(a.K())&&this.m.count()===a.m.count()){var b=this.Nb(K);a=a.Nb(K);for(var c=O(b),d=O(a);c&&d;){if(c.name!==d.name||!c.Z.ea(d.Z))return!1;c=O(b);d=O(a)}return null===c&&null===d}return!1};function zd(a,b){return b===sc?null:a.ob.get(b.toString())}h.toString=function(){var a="{",b=!0;this.U(K,function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};function N(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);w(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new od(a,N(c));if(a instanceof Array){var d=L,e=a;z(e,function(a,b){if(s(e,b)&&"."!==b.substring(0,1)){var c=N(a);if(c.L()||!c.e())d=
d.P(b,c)}});return d.$(N(c))}var f=[],g=!1,k=a;ua(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=N(k[a]);b.e()||(g=g||!b.K().e(),f.push(new M(a,b)))}});var l=vd(f,jc,function(a){return a.name},kc);if(g){var m=vd(f,nc(K));return new V(l,N(c),new sd({".priority":m},{".priority":K}))}return new V(l,N(c),xd)}var Cd=Math.log(2);function Dd(a){this.count=parseInt(Math.log(a+1)/Cd,10);this.Xe=this.count-1;this.Nf=a+1&parseInt(Array(this.count+1).join("1"),2)}
function Ed(a){var b=!(a.Nf&1<<a.Xe);a.Xe--;return b}
function vd(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new ed(u,m.Z,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),x=e(m+1,d),m=a[m],u=c?c(m):m;return new ed(u,m.Z,!1,f,x)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,x=u;u-=b;var x=e(k+1,x),k=a[k],E=c?c(k):k,x=new ed(E,k.Z,g,null,x);f?f.left=x:m=x;f=x}for(var f=null,m=null,u=a.length,x=0;x<b.count;++x){var E=Ed(b),fd=Math.pow(2,b.count-(x+1));E?d(fd,!1):(d(fd,!1),d(fd,!0))}return m}(new Dd(a.length));
return null!==f?new $c(d||b,f):new $c(d||b)}function qd(a){return"number"===typeof a?"number:"+Bb(a):"string:"+a}function pd(a){if(a.L()){var b=a.N();w("string"===typeof b||"number"===typeof b||"object"===typeof b&&s(b,".sv"),"Priority must be a string or number.")}else w(a===qc||a.e(),"priority of unexpected type.");w(a===qc||a.K().e(),"Priority nodes can't have a priority of their own.")}var L=new V(new $c(kc),null,xd);function Fd(){V.call(this,new $c(kc),L,xd)}ma(Fd,V);h=Fd.prototype;
h.he=function(a){return a===this?0:1};h.ea=function(a){return a===this};h.K=function(){throw gb("Why is this called?");};h.J=function(){return L};h.e=function(){return!1};var qc=new Fd,oc=new M("[MIN_NAME]",L);function C(a,b,c){this.B=a;this.V=b;this.g=c}C.prototype.N=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.B.N()};C.prototype.val=C.prototype.N;C.prototype.Ze=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.B.N(!0)};C.prototype.exportVal=C.prototype.Ze;C.prototype.Wf=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.B.e()};C.prototype.exists=C.prototype.Wf;
C.prototype.n=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Zb("Firebase.DataSnapshot.child",a);var b=new R(a),c=this.V.n(b);return new C(this.B.ra(b),c,K)};C.prototype.child=C.prototype.n;C.prototype.Da=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Zb("Firebase.DataSnapshot.hasChild",a);var b=new R(a);return!this.B.ra(b).e()};C.prototype.hasChild=C.prototype.Da;
C.prototype.K=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.B.K().N()};C.prototype.getPriority=C.prototype.K;C.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);G("Firebase.DataSnapshot.forEach",1,a,!1);if(this.B.L())return!1;var b=this;return!!this.B.U(this.g,function(c,d){return a(new C(d,b.V.n(c),K))})};C.prototype.forEach=C.prototype.forEach;
C.prototype.ld=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.B.L()?!1:!this.B.e()};C.prototype.hasChildren=C.prototype.ld;C.prototype.name=function(){y("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};C.prototype.name=C.prototype.name;C.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
C.prototype.key=C.prototype.key;C.prototype.ub=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.B.ub()};C.prototype.numChildren=C.prototype.ub;C.prototype.cc=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};C.prototype.ref=C.prototype.cc;function Gd(a){w(ea(a)&&0<a.length,"Requires a non-empty array");this.Ff=a;this.Fc={}}Gd.prototype.Vd=function(a,b){for(var c=this.Fc[a]||[],d=0;d<c.length;d++)c[d].pc.apply(c[d].Ja,Array.prototype.slice.call(arguments,1))};Gd.prototype.vb=function(a,b,c){Hd(this,a);this.Fc[a]=this.Fc[a]||[];this.Fc[a].push({pc:b,Ja:c});(a=this.pe(a))&&b.apply(c,a)};Gd.prototype.Yb=function(a,b,c){Hd(this,a);a=this.Fc[a]||[];for(var d=0;d<a.length;d++)if(a[d].pc===b&&(!c||c===a[d].Ja)){a.splice(d,1);break}};
function Hd(a,b){w(Na(a.Ff,function(a){return a===b}),"Unknown event: "+b)};function Id(){Gd.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.lc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.lc&&(c.lc=b,c.Vd("visible",b))},!1)}}ma(Id,Gd);ca(Id);Id.prototype.pe=function(a){w("visible"===a,"Unknown event type: "+a);return[this.lc]};function Jd(){Gd.call(this,["online"]);this.Kc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Kc||a.Vd("online",!0);a.Kc=!0},!1);window.addEventListener("offline",function(){a.Kc&&a.Vd("online",!1);a.Kc=!1},!1)}}ma(Jd,Gd);ca(Jd);Jd.prototype.pe=function(a){w("online"===a,"Unknown event type: "+a);return[this.Kc]};function z(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ud(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Mb(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function Kb(a){var b=0,c;for(c in a)b++;return b}function Lb(a){for(var b in a)return b}function Kd(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ld(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Ad(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Md(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Nd(a,b){var c=Md(a,b,void 0);return c&&a[c]}function Od(a){for(var b in a)return!1;return!0}function Pd(a,b){return b in a?a[b]:void 0}function Bd(a){var b={},c;for(c in a)b[c]=a[c];return b}var Qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Rd(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Qd.length;f++)c=Qd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Sd(){this.sc={}}function Td(a,b,c){n(c)||(c=1);s(a.sc,b)||(a.sc[b]=0);a.sc[b]+=c}Sd.prototype.get=function(){return Bd(this.sc)};function Ud(a){this.Pf=a;this.rd=null}Ud.prototype.get=function(){var a=this.Pf.get(),b=Bd(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Vd(a,b){this.yf={};this.Pd=new Ud(a);this.T=b;var c=1E4+2E4*Math.random();setTimeout(q(this.rf,this),Math.floor(c))}Vd.prototype.rf=function(){var a=this.Pd.get(),b={},c=!1,d;for(d in a)0<a[d]&&s(this.yf,d)&&(b[d]=a[d],c=!0);c&&(a=this.T,a.ja&&(b={c:b},a.f("reportStats",b),a.Ca("s",b)));setTimeout(q(this.rf,this),Math.floor(6E5*Math.random()))};var Wd={},Xd={};function Yd(a){a=a.toString();Wd[a]||(Wd[a]=new Sd);return Wd[a]}function Zd(a,b){var c=a.toString();Xd[c]||(Xd[c]=b());return Xd[c]};var $d=null;"undefined"!==typeof MozWebSocket?$d=MozWebSocket:"undefined"!==typeof WebSocket&&($d=WebSocket);function ae(a,b,c){this.ie=a;this.f=pb(this.ie);this.frames=this.Bc=null;this.ib=this.jb=this.Qe=0;this.Ra=Yd(b);this.$a=(b.zb?"wss://":"ws://")+b.La+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.$a+="&r=f");b.host!==b.La&&(this.$a=this.$a+"&ns="+b.tb);c&&(this.$a=this.$a+"&s="+c)}var be;
ae.prototype.open=function(a,b){this.fb=b;this.hg=a;this.f("Websocket connecting to "+this.$a);this.wc=!1;za.set("previous_websocket_failure",!0);try{this.ta=new $d(this.$a)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.eb();return}var e=this;this.ta.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.ta.onclose=function(){e.f("Websocket connection was disconnected.");e.ta=null;e.eb()};this.ta.onmessage=function(a){if(null!==e.ta)if(a=a.data,e.ib+=
a.length,Td(e.Ra,"bytes_received",a.length),ce(e),null!==e.frames)de(e,a);else{a:{w(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Qe=b;e.frames=[];a=null;break a}}e.Qe=1;e.frames=[]}null!==a&&de(e,a)}};this.ta.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.eb()}};ae.prototype.start=function(){};
ae.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==$d&&!be};ae.responsesRequiredToBeHealthy=2;ae.healthyTimeout=3E4;h=ae.prototype;h.sd=function(){za.remove("previous_websocket_failure")};function de(a,b){a.frames.push(b);if(a.frames.length==a.Qe){var c=a.frames.join("");a.frames=null;c=ta(c);a.hg(c)}}
h.send=function(a){ce(this);a=r(a);this.jb+=a.length;Td(this.Ra,"bytes_sent",a.length);a=zb(a,16384);1<a.length&&this.ta.send(String(a.length));for(var b=0;b<a.length;b++)this.ta.send(a[b])};h.Uc=function(){this.qb=!0;this.Bc&&(clearInterval(this.Bc),this.Bc=null);this.ta&&(this.ta.close(),this.ta=null)};h.eb=function(){this.qb||(this.f("WebSocket is closing itself"),this.Uc(),this.fb&&(this.fb(this.wc),this.fb=null))};h.close=function(){this.qb||(this.f("WebSocket is being closed"),this.Uc())};
function ce(a){clearInterval(a.Bc);a.Bc=setInterval(function(){a.ta&&a.ta.send("0");ce(a)},Math.floor(45E3))};function ee(a){this.Zb=a;this.Cd=[];this.Ib=0;this.ge=-1;this.wb=null}function fe(a,b,c){a.ge=b;a.wb=c;a.ge<a.Ib&&(a.wb(),a.wb=null)}function ge(a,b,c){for(a.Cd[b]=c;a.Cd[a.Ib];){var d=a.Cd[a.Ib];delete a.Cd[a.Ib];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Db(function(){f.Zb(d[e])})}if(a.Ib===a.ge){a.wb&&(clearTimeout(a.wb),a.wb(),a.wb=null);break}a.Ib++}};function he(){this.set={}}h=he.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return s(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return Od(this.set)};h.count=function(){return Kb(this.set)};function ie(a,b){z(a.set,function(a,d){b(d,a)})};function je(a,b,c){this.ie=a;this.f=pb(a);this.ib=this.jb=0;this.Ra=Yd(b);this.Md=c;this.wc=!1;this.Zc=function(a){b.host!==b.La&&(a.ns=b.tb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.zb?"https://":"http://")+b.La+"/.lp?"+c.join("&")}}var ke,le;
je.prototype.open=function(a,b){this.We=0;this.ga=b;this.kf=new ee(a);this.qb=!1;var c=this;this.lb=setTimeout(function(){c.f("Timed out trying to connect.");c.eb();c.lb=null},Math.floor(3E4));ub(function(){if(!c.qb){c.Oa=new me(function(a,b,d,k,l){ne(c,arguments);if(c.Oa)if(c.lb&&(clearTimeout(c.lb),c.lb=null),c.wc=!0,"start"==a)c.id=b,c.pf=d;else if("close"===a)b?(c.Oa.Kd=!1,fe(c.kf,b,function(){c.eb()})):c.eb();else throw Error("Unrecognized command received: "+a);},function(a,b){ne(c,arguments);
ge(c.kf,a,b)},function(){c.eb()},c.Zc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Oa.Wd&&(a.cb=c.Oa.Wd);a.v="5";c.Md&&(a.s=c.Md);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Zc(a);c.f("Connecting via long-poll to "+a);oe(c.Oa,a,function(){})}})};
je.prototype.start=function(){var a=this.Oa,b=this.pf;a.cg=this.id;a.dg=b;for(a.ae=!0;pe(a););a=this.id;b=this.pf;this.Xb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.Xb.src=this.Zc(c);this.Xb.style.display="none";document.body.appendChild(this.Xb)};je.isAvailable=function(){return!le&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Eg)&&(ke||!0)};h=je.prototype;
h.sd=function(){};h.Uc=function(){this.qb=!0;this.Oa&&(this.Oa.close(),this.Oa=null);this.Xb&&(document.body.removeChild(this.Xb),this.Xb=null);this.lb&&(clearTimeout(this.lb),this.lb=null)};h.eb=function(){this.qb||(this.f("Longpoll is closing itself"),this.Uc(),this.ga&&(this.ga(this.wc),this.ga=null))};h.close=function(){this.qb||(this.f("Longpoll is being closed."),this.Uc())};
h.send=function(a){a=r(a);this.jb+=a.length;Td(this.Ra,"bytes_sent",a.length);a=kb(a);a=db(a,!0);a=zb(a,1840);for(var b=0;b<a.length;b++){var c=this.Oa;c.Pc.push({tg:this.We,Bg:a.length,Ye:a[b]});c.ae&&pe(c);this.We++}};function ne(a,b){var c=r(b).length;a.ib+=c;Td(a.Ra,"bytes_received",c)}
function me(a,b,c,d){this.Zc=d;this.fb=c;this.He=new he;this.Pc=[];this.ke=Math.floor(1E8*Math.random());this.Kd=!0;this.Wd=fb();window["pLPCommand"+this.Wd]=a;window["pRTLPCB"+this.Wd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||ib("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.ab=a.contentDocument:a.contentWindow?a.ab=a.contentWindow.document:a.document&&(a.ab=a.document);this.Ba=a;a="";this.Ba.src&&"javascript:"===this.Ba.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ba.ab.open(),this.Ba.ab.write(a),this.Ba.ab.close()}catch(f){ib("frame writing exception"),f.stack&&ib(f.stack),ib(f)}}
me.prototype.close=function(){this.ae=!1;if(this.Ba){this.Ba.ab.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ba&&(document.body.removeChild(a.Ba),a.Ba=null)},Math.floor(0))}var b=this.fb;b&&(this.fb=null,b())};
function pe(a){if(a.ae&&a.Kd&&a.He.count()<(0<a.Pc.length?2:1)){a.ke++;var b={};b.id=a.cg;b.pw=a.dg;b.ser=a.ke;for(var b=a.Zc(b),c="",d=0;0<a.Pc.length;)if(1870>=a.Pc[0].Ye.length+30+c.length){var e=a.Pc.shift(),c=c+"&seg"+d+"="+e.tg+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Ye;d++}else break;qe(a,b+c,a.ke);return!0}return!1}function qe(a,b,c){function d(){a.He.remove(c);pe(a)}a.He.add(c);var e=setTimeout(d,Math.floor(25E3));oe(a,b,function(){clearTimeout(e);d()})}
function oe(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ba.ab.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){ib("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ba.ab.body.appendChild(d)}}catch(e){}},Math.floor(1))};function re(a){se(this,a)}var te=[je,ae];function se(a,b){var c=ae&&ae.isAvailable(),d=c&&!(za.jf||!0===za.get("previous_websocket_failure"));b.Dg&&(c||y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Xc=[ae];else{var e=a.Xc=[];Ab(te,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ue(a){if(0<a.Xc.length)return a.Xc[0];throw Error("No transports available");};function ve(a,b,c,d,e,f){this.id=a;this.f=pb("c:"+this.id+":");this.Zb=c;this.Jc=d;this.ga=e;this.Fe=f;this.O=b;this.Bd=[];this.Ue=0;this.Af=new re(b);this.Qa=0;this.f("Connection created");we(this)}
function we(a){var b=ue(a.Af);a.I=new b("c:"+a.id+":"+a.Ue++,a.O);a.Je=b.responsesRequiredToBeHealthy||0;var c=xe(a,a.I),d=ye(a,a.I);a.Yc=a.I;a.Tc=a.I;a.D=null;a.rb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.nd=setTimeout(function(){a.nd=null;a.rb||(a.I&&102400<a.I.ib?(a.f("Connection exceeded healthy timeout but has received "+a.I.ib+" bytes.  Marking connection healthy."),a.rb=!0,a.I.sd()):a.I&&10240<a.I.jb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.jb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function ye(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Qa?1===a.Qa&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.O.La.substr(0,2)&&(za.remove("host:"+a.O.host),a.O.La=a.O.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Yc!==c&&a.Tc!==c||a.close()):a.f("closing an old connection")}}
function xe(a,b){return function(c){if(2!=a.Qa)if(b===a.Tc){var d=xb("t",c);c=xb("d",c);if("c"==d){if(d=xb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Md=c.s;Ca(a.O,f);0==a.Qa&&(a.I.start(),ze(a,a.I,d),"5"!==e&&y("Protocol version mismatch detected"),c=a.Af,(c=1<c.Xc.length?c.Xc[1]:null)&&Ae(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Tc=a.D;for(c=0;c<a.Bd.length;++c)a.xd(a.Bd[c]);a.Bd=[];Be(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Fe&&(a.Fe(c),a.Fe=null),a.ga=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ca(a.O,c),1===a.Qa?a.close():(Ce(a),we(a))):"e"===d?qb("Server Error: "+c):"o"===d?(a.f("got pong on primary."),De(a),Ee(a)):qb("Unknown control packet command: "+d)}else"d"==d&&a.xd(c)}else if(b===a.D)if(d=xb("t",c),c=xb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Fe(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Yc!==a.D&&a.Tc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.xf--,Fe(a)));else if("d"==d)a.Bd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}ve.prototype.Ca=function(a){Ge(this,{t:"d",d:a})};function Be(a){a.Yc===a.D&&a.Tc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.ie),a.I=a.D,a.D=null)}
function Fe(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.rb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Yc=a.D,Be(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}ve.prototype.xd=function(a){De(this);this.Zb(a)};function De(a){a.rb||(a.Je--,0>=a.Je&&(a.f("Primary connection is healthy."),a.rb=!0,a.I.sd()))}
function Ae(a,b){a.D=new b("c:"+a.id+":"+a.Ue++,a.O,a.Md);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(xe(a,a.D),ye(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function ze(a,b,c){a.f("Realtime connection established.");a.I=b;a.Qa=1;a.Jc&&(a.Jc(c),a.Jc=null);0===a.Je?(a.f("Primary connection is healthy."),a.rb=!0):setTimeout(function(){Ee(a)},Math.floor(5E3))}
function Ee(a){a.rb||1!==a.Qa||(a.f("sending ping on primary."),Ge(a,{t:"c",d:{t:"p",d:{}}}))}function Ge(a,b){if(1!==a.Qa)throw"Connection is not connected";a.Yc.send(b)}ve.prototype.close=function(){2!==this.Qa&&(this.f("Closing realtime connection."),this.Qa=2,Ce(this),this.ga&&(this.ga(),this.ga=null))};function Ce(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.nd&&(clearTimeout(a.nd),a.nd=null)};function He(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ta(hb(f[0])||""),c=ta(hb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Gg:b,fe:c,data:d,xg:e}}function Ie(a){a=He(a).fe;return"object"===typeof a&&a.hasOwnProperty("iat")?t(a,"iat"):null}function Je(a){a=He(a);var b=a.fe;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Ke(a,b,c,d){this.id=Le++;this.f=pb("p:"+this.id+":");this.Bb=!0;this.Aa={};this.la=[];this.Mc=0;this.Ic=[];this.ja=!1;this.Wa=1E3;this.td=3E5;this.yd=b;this.wd=c;this.Ge=d;this.O=a;this.Me=null;this.Rc={};this.sg=0;this.Cc=this.ve=null;Me(this,0);Id.Mb().vb("visible",this.kg,this);-1===a.host.indexOf("fblocal")&&Jd.Mb().vb("online",this.ig,this)}var Le=0,Ne=0;h=Ke.prototype;
h.Ca=function(a,b,c){var d=++this.sg;a={r:d,a:a,b:b};this.f(r(a));w(this.ja,"sendRequest call when we're not connected not allowed.");this.Na.Ca(a);c&&(this.Rc[d]=c)};function Oe(a,b,c,d,e){var f=b.Fa(),g=b.path.toString();a.f("Listen called for "+g+" "+f);a.Aa[g]=a.Aa[g]||{};w(!a.Aa[g][f],"listen() called twice for same path/queryId.");b={H:e,md:c,pg:Qc(b),tag:d};a.Aa[g][f]=b;a.ja&&Pe(a,g,f,b)}
function Pe(a,b,c,d){a.f("Listen on "+b+" for "+c);var e={p:b};d.tag&&(e.q=d.pg,e.t=d.tag);e.h=d.md();a.Ca("q",e,function(e){if((a.Aa[b]&&a.Aa[b][c])===d){a.f("listen response",e);var g=e.s;"ok"!==g&&Qe(a,b,c);e=e.d;d.H&&d.H(g,e)}})}h.R=function(a,b,c){this.Hb={Rf:a,$e:!1,pc:b,ad:c};this.f("Authenticating using credential: "+a);Re(this);(b=40==a.length)||(a=He(a).fe,b="object"===typeof a&&!0===t(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4)};
h.Re=function(a){delete this.Hb;this.ja&&this.Ca("unauth",{},function(b){a(b.s,b.d)})};function Re(a){var b=a.Hb;a.ja&&b&&a.Ca("auth",{cred:b.Rf},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Hb===b&&delete a.Hb;b.$e?"ok"!==d&&b.ad&&b.ad(d,c):(b.$e=!0,b.pc&&b.pc(d,c))})}function Se(a,b,c,d){a.ja?Te(a,"o",b,c,d):a.Ic.push({Oc:b,action:"o",data:c,H:d})}function Ue(a,b,c,d){a.ja?Te(a,"om",b,c,d):a.Ic.push({Oc:b,action:"om",data:c,H:d})}
h.Ee=function(a,b){this.ja?Te(this,"oc",a,null,b):this.Ic.push({Oc:a,action:"oc",data:null,H:b})};function Te(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ca(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Ve(this,"p",a,b,c,d)};function We(a,b,c,d){Ve(a,"m",b,c,d,void 0)}function Ve(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.la.push({action:b,sf:d,H:e});a.Mc++;b=a.la.length-1;a.ja?Xe(a,b):a.f("Buffering put: "+c)}
function Xe(a,b){var c=a.la[b].action,d=a.la[b].sf,e=a.la[b].H;a.la[b].qg=a.ja;a.Ca(c,d,function(d){a.f(c+" response",d);delete a.la[b];a.Mc--;0===a.Mc&&(a.la=[]);e&&e(d.s,d.d)})}
h.xd=function(a){if("r"in a){this.f("from server: "+r(a));var b=a.r,c=this.Rc[b];c&&(delete this.Rc[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.yd(c.p,c.d,!1,c.t):"m"===b?this.yd(c.p,c.d,!0,c.t):"c"===b?Ye(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Hb,delete this.Hb,c&&c.ad&&c.ad(a,b)):"sd"===b?this.Me?this.Me(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):qb("Unrecognized action received from server: "+r(b)+"\nAre you using the latest client?"))}};h.Jc=function(a){this.f("connection ready");this.ja=!0;this.Cc=(new Date).getTime();this.Ge({serverTimeOffset:a-(new Date).getTime()});Ze(this);this.wd(!0)};function Me(a,b){w(!a.Na,"Scheduling a connect when we're already connected/ing?");a.Jb&&clearTimeout(a.Jb);a.Jb=setTimeout(function(){a.Jb=null;$e(a)},Math.floor(b))}
h.kg=function(a){a&&!this.lc&&this.Wa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Wa=1E3,this.Na||Me(this,0));this.lc=a};h.ig=function(a){a?(this.f("Browser went online.  Reconnecting."),this.Wa=1E3,this.Bb=!0,this.Na||Me(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Bb=!1,this.Na&&this.Na.close())};
h.mf=function(){this.f("data client disconnected");this.ja=!1;this.Na=null;for(var a=0;a<this.la.length;a++){var b=this.la[a];b&&"h"in b.sf&&b.qg&&(b.H&&b.H("disconnect"),delete this.la[a],this.Mc--)}0===this.Mc&&(this.la=[]);if(this.Bb)this.lc?this.Cc&&(3E4<(new Date).getTime()-this.Cc&&(this.Wa=1E3),this.Cc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Wa=this.td,this.ve=(new Date).getTime()),a=Math.max(0,this.Wa-((new Date).getTime()-this.ve)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Me(this,a),this.Wa=Math.min(this.td,1.3*this.Wa);else for(var c in this.Rc)delete this.Rc[c];this.wd(!1)};function $e(a){if(a.Bb){a.f("Making a connection attempt");a.ve=(new Date).getTime();a.Cc=null;var b=q(a.xd,a),c=q(a.Jc,a),d=q(a.mf,a),e=a.id+":"+Ne++;a.Na=new ve(e,a.O,b,c,d,function(b){y(b+" ("+a.O.toString()+")");a.Bb=!1})}}h.pb=function(){this.Bb=!1;this.Na?this.Na.close():(this.Jb&&(clearTimeout(this.Jb),this.Jb=null),this.ja&&this.mf())};
h.gc=function(){this.Bb=!0;this.Wa=1E3;this.Na||Me(this,0)};function Ye(a,b,c){c=c?Ka(c,function(a){return yb(a)}).join("$"):"default";(a=Qe(a,b,c))&&a.H&&a.H("permission_denied")}function Qe(a,b,c){b=(new R(b)).toString();var d=a.Aa[b][c];delete a.Aa[b][c];0===Kb(a.Aa[b])&&delete a.Aa[b];return d}function Ze(a){Re(a);z(a.Aa,function(b,d){z(b,function(b,c){Pe(a,d,c,b)})});for(var b=0;b<a.la.length;b++)a.la[b]&&Xe(a,b);for(;a.Ic.length;)b=a.Ic.shift(),Te(a,b.action,b.Oc,b.data,b.H)};function af(){this.m=this.A=null}af.prototype.dc=function(a,b){if(a.e())this.A=b,this.m=null;else if(null!==this.A)this.A=this.A.F(a,b);else{null==this.m&&(this.m=new he);var c=H(a);this.m.contains(c)||this.m.add(c,new af);c=this.m.get(c);a=S(a);c.dc(a,b)}};
function bf(a,b){if(b.e())return a.A=null,a.m=null,!0;if(null!==a.A){if(a.A.L())return!1;var c=a.A;a.A=null;c.U(K,function(b,c){a.dc(new R(b),c)});return bf(a,b)}return null!==a.m?(c=H(b),b=S(b),a.m.contains(c)&&bf(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function cf(a,b,c){null!==a.A?c(b,a.A):a.U(function(a,e){var f=new R(b.toString()+"/"+a);cf(e,f,c)})}af.prototype.U=function(a){null!==this.m&&ie(this.m,function(b,c){a(b,c)})};function df(){this.Jd=L}df.prototype.j=function(a){return this.Jd.ra(a)};df.prototype.toString=function(){return this.Jd.toString()};function ef(){this.nb=[]}function ff(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Pb();null===c||f.ea(c.Pb())||(a.nb.push(c),c=null);null===c&&(c=new gf(f));c.add(e)}c&&a.nb.push(c)}function Pc(a,b,c){ff(a,c);hf(a,function(a){return a.ea(b)})}function jf(a,b,c){ff(a,c);hf(a,function(a){return a.contains(b)||b.contains(a)})}
function hf(a,b){for(var c=!0,d=0;d<a.nb.length;d++){var e=a.nb[d];if(e)if(e=e.Pb(),b(e)){for(var e=a.nb[d],f=0;f<e.kd.length;f++){var g=e.kd[f];if(null!==g){e.kd[f]=null;var k=g.Kb();mb&&ib("event: "+g.toString());Db(k)}}a.nb[d]=null}else c=!1}c&&(a.nb=[])}function gf(a){this.Ea=a;this.kd=[]}gf.prototype.add=function(a){this.kd.push(a)};gf.prototype.Pb=function(){return this.Ea};var kf="auth.firebase.com";function lf(a,b,c){this.cd=a||{};this.Ud=b||{};this.Xa=c||{};this.cd.remember||(this.cd.remember="default")}var mf=["remember","redirectTo"];function nf(a){var b={},c={};ua(a||{},function(a,e){0<=Ha(mf,a)?b[a]=e:c[a]=e});return new lf(b,{},c)};var of={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function W(a){var b=Error(t(of,a),a);b.code=a;return b};function pf(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function qf(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function rf(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function sf(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function tf(a){var b="";try{a=a.replace("#","");var c={},d=a.replace(/^\?/,"").split("&");for(a=0;a<d.length;a++)if(d[a]){var e=d[a].split("=");c[e[0]]=e[1]}c&&s(c,"__firebase_request_key")&&(b=t(c,"__firebase_request_key"))}catch(f){}return b}
function uf(a){var b=[],c;for(c in a)if(s(a,c)){var d=t(a,c);if(ea(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(t(a,c)))}return b?"&"+b.join("&"):""}function vf(){var a=sb(kf);return a.scheme+"://"+a.host+"/v2"};function wf(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function xf(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function yf(a){a=a||{};a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
yf.prototype.open=function(a,b,c){function d(){c&&(c(W("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;qf(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ta(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(W("SERVER_ERROR")):c(W("NETWORK_ERROR"));c=null;rf(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+uf(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=r(b));"application/x-www-form-urlencoded"===k&&(g=uf(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Rd(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};yf.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||xf())};yf.prototype.rc=function(){return"json"};function zf(a){a=a||{};this.Sc=Ga()+Ga()+Ga();this.nf=a||{}}
zf.prototype.open=function(a,b,c){function d(){c&&(c(W("USER_CANCELLED")),c=null)}var e=this,f=sb(kf),g;b.requestId=this.Sc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=uf(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{var m=a.url;try{var u=document.createElement("a");u.href=m;b=u.host===f.host&&"/blank/page.html"===u.pathname;break a}catch(x){}b=!1}b&&(a=tf(a.url),g.removeEventListener("exit",
d),g.close(),a=new lf(null,null,{requestId:e.Sc,requestKey:a}),e.nf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(W("TRANSPORT_UNAVAILABLE"))};zf.isAvailable=function(){return wf()};zf.prototype.rc=function(){return"redirect"};function Af(a){a=a||{};if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");a.relay_url||(a.relay_url=vf()+"/auth/channel");this.options=a}
Af.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);u&&(u=clearInterval(u));rf(window,"message",e);rf(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=ta(a.data);"ready"===b.a?k.postMessage(x,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=xf(),g,k,l=sf(a);if(l!==sf(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},
0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+uf(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var u=setInterval(function(){m&&m.closed&&(d(!1),c&&(c(W("USER_CANCELLED")),c=null))},500),x=r({a:"request",d:b});qf(window,"unload",d);qf(window,"message",e)}};
Af.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(wf()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};Af.prototype.rc=function(){return"popup"};function Bf(a){a=a||{};a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Bf.prototype.open=function(a,b,c){function d(){c&&(c(W("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;Od(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);rf(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+uf(b);
qf(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Cf(f,a,c)};
function Cf(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(W("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(W("NETWORK_ERROR"))}},0)}Bf.isAvailable=function(){return!wf()};Bf.prototype.rc=function(){return"json"};function Df(a,b){this.Ie=["session",a.Dd,a.tb].join(":");this.Rd=b}Df.prototype.set=function(a,b){if(!b)if(this.Rd.length)b=this.Rd[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ie,a)};Df.prototype.get=function(){var a=Ka(this.Rd,q(this.Zf,this)),a=Ja(a,function(a){return null!==a});Ra(a,function(a,c){return Ie(c.token)-Ie(a.token)});return 0<a.length?a.shift():null};Df.prototype.Zf=function(a){try{var b=a.get(this.Ie);if(b&&b.token)return b}catch(c){}return null};
Df.prototype.clear=function(){var a=this;Ia(this.Rd,function(b){b.remove(a.Ie)})};function Ef(a){a=a||{};this.Sc=Ga()+Ga()+Ga();this.nf=a||{}}Ef.prototype.open=function(a,b){Aa.set("redirect_request_id",this.Sc);b.requestId=this.Sc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+uf(b);window.location=a};Ef.isAvailable=function(){return!/^file:\//.test(location.href)&&!wf()};Ef.prototype.rc=function(){return"redirect"};function Ff(a,b,c,d){Gd.call(this,["auth_status"]);this.O=a;this.Te=b;this.Cg=c;this.De=d;this.hc=new Df(a,[za,Aa]);this.hb=null;Gf(this)}ma(Ff,Gd);h=Ff.prototype;h.me=function(){return this.hb||null};function Gf(a){Aa.get("redirect_request_id")&&Hf(a);var b=a.hc.get();b&&b.token?(If(a,b),a.Te(b.token,function(c,d){Jf(a,c,d,!1,b.token,b)},function(b,d){Kf(a,"resumeSession()",b,d)})):If(a,null)}
function Lf(a,b,c,d,e,f){"firebaseio-demo.com"===a.O.domain&&y("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.Te(b,function(f,k){Jf(a,f,k,!0,b,c,d||{},e)},function(b,c){Kf(a,"auth()",b,c,f)})}function Mf(a,b){a.hc.clear();If(a,null);a.Cg(function(a,d){if("ok"===a)A(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;A(b,f)}})}
function Jf(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Je(e)?e:"",c=null,b&&s(b,"uid")?c=t(b,"uid"):s(f,"uid")&&(c=t(f,"uid")),f.uid=c,c="custom",b&&s(b,"provider")?c=t(b,"provider"):s(f,"provider")&&(c=t(f,"provider")),f.provider=c,a.hc.clear(),Je(e)&&(g=g||{},c=za,"sessionOnly"===g.remember&&(c=Aa),"none"!==g.remember&&a.hc.set(f,c)),If(a,f)),A(k,null,f)):(a.hc.clear(),If(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,A(k,f))}
function Kf(a,b,c,d,e){y(b+" was canceled: "+d);a.hc.clear();If(a,null);a=Error(d);a.code=c.toUpperCase();A(e,a)}function Nf(a,b,c,d,e){Of(a);c=new lf(d||{},{},c||{});Pf(a,[yf,Bf],"/auth/"+b,c,e)}
function Qf(a,b,c,d){Of(a);var e=[Af,zf];c=nf(c);"anonymous"===b||"password"===b?setTimeout(function(){A(d,W("TRANSPORT_UNAVAILABLE"))},0):(c.Ud.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Ud.relay_url=vf()+"/"+a.O.tb+"/auth/channel",c.Ud.requestWithCredential=q(a.fc,a),Pf(a,e,"/auth/"+b,c,d))}
function Hf(a){var b=Aa.get("redirect_request_id");if(b){var c=Aa.get("redirect_client_options");Aa.remove("redirect_request_id");Aa.remove("redirect_client_options");var d=[yf,Bf],b={requestId:b,requestKey:tf(document.location.hash)},c=new lf(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Pf(a,d,"/auth/session",c)}}h.je=function(a,b){Of(this);var c=nf(a);c.Xa._method="POST";this.fc("/users",c,function(a,c){a?A(b,a):A(b,a,c)})};
h.Ke=function(a,b){var c=this;Of(this);var d="/users/"+encodeURIComponent(a.email),e=nf(a);e.Xa._method="DELETE";this.fc(d,e,function(a,d){!a&&d&&d.uid&&c.hb&&c.hb.uid&&c.hb.uid===d.uid&&Mf(c);A(b,a)})};h.ee=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=nf(a);d.Xa._method="PUT";d.Xa.password=a.newPassword;this.fc(c,d,function(a){A(b,a)})};
h.de=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=nf(a);d.Xa._method="PUT";d.Xa.email=a.newEmail;d.Xa.password=a.password;this.fc(c,d,function(a){A(b,a)})};h.Le=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=nf(a);d.Xa._method="POST";this.fc(c,d,function(a){A(b,a)})};h.fc=function(a,b,c){Rf(this,[yf,Bf],a,b,c)};
function Pf(a,b,c,d,e){Rf(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Lf(a,c.token,c,d.cd,function(a,b){a?A(e,a):A(e,null,b)}):A(e,b||W("UNKNOWN_ERROR"))})}
function Rf(a,b,c,d,e){b=Ja(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){A(e,W("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Ud),d=va(d.Xa),d.v="js-2.1.0",d.transport=b.rc(),d.suppress_status_codes=!0,a=vf()+"/"+a.O.tb+c,b.open(a,d,function(a,b){if(a)A(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;A(e,c)}else A(e,null,b)}))}
function If(a,b){var c=null!==a.hb||null!==b;a.hb=b;c&&a.Vd("auth_status",b);a.De(null!==b)}h.pe=function(a){w("auth_status"===a,'initial event must be of type "auth_status"');return[this.hb]};function Of(a){var b=a.O;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===kf)throw Error("This custom Firebase server ('"+a.O.domain+"') does not support delegated login.");};function Sf(a,b){return a&&"object"===typeof a?(w(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Tf(a,b){var c=new af;cf(a,new R(""),function(a,e){c.dc(a,Uf(e,b))});return c}function Uf(a,b){var c=a.K().N(),c=Sf(c,b),d;if(a.L()){var e=Sf(a.za(),b);return e!==a.za()||c!==a.K().N()?new od(e,N(c)):a}d=a;c!==a.K().N()&&(d=d.$(new od(c)));a.U(K,function(a,c){var e=Uf(c,b);e!==c&&(d=d.P(a,e))});return d};function xc(a,b,c){this.B=a;this.Y=b;this.xc=c}function Vf(a){return a.Y}function wc(a,b){return a.Y&&!a.xc||a.B.Da(b)}xc.prototype.j=function(){return this.B};function Wf(a,b){this.C=a;this.Ld=b}function Xf(a,b,c,d){return new Wf(new xc(b,c,d),a.Ld)}function Yf(a){return a.C.Y?a.C.j():null}Wf.prototype.o=function(){return this.Ld};function yc(a){return a.Ld.Y?a.Ld.j():null};function Zf(a,b){this.Yd=a;this.Of=b}function $f(a){this.G=a}
$f.prototype.Ya=function(a,b,c,d){var e=new zc,f;if(b.type===ag)b.source.bf?c=bg(this,a,b.path,b.Pa,c,d,e):(w(b.source.af,"Unknown source."),f=b.source.zf,c=cg(this,a,b.path,b.Pa,c,d,f,e));else if(b.type===dg)b.source.bf?c=eg(this,a,b.path,b.children,c,d,e):(w(b.source.af,"Unknown source."),f=b.source.zf,c=fg(this,a,b.path,b.children,c,d,f,e));else if(b.type===gg)if(b.wf)if(f=b.path,null!=c.ic(f))c=a;else{b=new vc(c,a,d);d=a.C.j();if(f.e()||".priority"===H(f))Vf(a.o())?b=c.pa(yc(a)):(b=a.o().j(),
w(b instanceof V,"serverChildren would be complete if leaf node"),b=c.oc(b)),b=this.G.oa(d,b,e);else{f=H(f);var g=c.Ta(f,a.o());null==g&&wc(a.o(),f)&&(g=d.J(f));b=null!=g?this.G.F(d,f,g,b,e):a.C.j().Da(f)?this.G.F(d,f,L,b,e):d;b.e()&&Vf(a.o())&&(d=c.pa(yc(a)),d.L()&&(b=this.G.oa(b,d,e)))}d=Vf(a.o())||null!=c.ic(T);c=Xf(a,b,d,this.G.ya())}else c=hg(this,a,b.path,c,d,e);else if(b.type===ig)d=b.path,b=a.o(),f=b.j(),g=b.Y||d.e(),c=jg(this,new Wf(a.C,new xc(f,g,b.xc)),d,c,uc,e);else throw gb("Unknown operation type: "+
b.type);e=Kd(e.Za);d=c;b=d.C;b.Y&&(f=b.j().L()||b.j().e(),g=Yf(a),(0<e.length||!a.C.Y||f&&!b.j().ea(g)||!b.j().K().ea(g.K()))&&e.push(Gb(Yf(d))));return new Zf(c,e)};
function jg(a,b,c,d,e,f){var g=b.C;if(null!=d.ic(c))return b;var k;if(c.e())w(Vf(b.o()),"If change path is empty, we must have complete server data"),a.G.ya()?(e=yc(b),d=d.oc(e instanceof V?e:L)):d=d.pa(yc(b)),f=a.G.oa(b.C.j(),d,f);else{var l=H(c);if(".priority"==l)w(1==Rc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.o().j(),d=d.$c(c,f,k),f=null!=d?a.G.$(f,d):g.j();else{var m=S(c);wc(g,l)?(k=b.o().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().J(l).F(m,d):g.j().J(l)):d=d.Ta(l,b.o());
f=null!=d?a.G.F(g.j(),l,d,e,f):g.j()}}return Xf(b,f,g.Y||c.e(),a.G.ya())}function cg(a,b,c,d,e,f,g,k){var l=b.o();g=g?a.G:a.G.Lb();if(c.e())d=g.oa(l.j(),d,null);else if(g.ya()&&!l.xc)d=l.j().F(c,d),d=g.oa(l.j(),d,null);else{var m=H(c);if((c.e()?!l.Y||l.xc:!wc(l,H(c)))&&1<Rc(c))return b;d=l.j().J(m).F(S(c),d);d=".priority"==m?g.$(l.j(),d):g.F(l.j(),m,d,uc,null)}l=l.Y||c.e();b=new Wf(b.C,new xc(d,l,g.ya()));return jg(a,b,c,e,new vc(e,b,f),k)}
function bg(a,b,c,d,e,f,g){var k=b.C;e=new vc(e,b,f);if(c.e())g=a.G.oa(b.C.j(),d,g),a=Xf(b,g,!0,a.G.ya());else if(f=H(c),".priority"===f)g=a.G.$(b.C.j(),d),a=Xf(b,g,k.Y,k.xc);else{var l=S(c);c=k.j().J(f);if(!l.e()){var m=e.cf(f);d=null!=m?".priority"===Sc(l)&&m.ra(l.parent()).e()?m:m.F(l,d):L}c.ea(d)?a=b:(g=a.G.F(k.j(),f,d,e,g),a=Xf(b,g,k.Y,a.G.ya()))}return a}
function eg(a,b,c,d,e,f,g){var k=b;kg(d,function(d,m){var u=c.n(d);wc(b.C,H(u))&&(k=bg(a,k,u,m,e,f,g))});kg(d,function(d,m){var u=c.n(d);wc(b.C,H(u))||(k=bg(a,k,u,m,e,f,g))});return k}function lg(a,b){kg(b,function(b,d){a=a.F(b,d)});return a}
function fg(a,b,c,d,e,f,g,k){if(b.o().j().e()&&!Vf(b.o()))return b;var l=b;c=c.e()?d:mg(ng,c,d);var m=b.o().j();c.children.fa(function(c,d){if(m.Da(c)){var E=b.o().j().J(c),E=lg(E,d);l=cg(a,l,new R(c),E,e,f,g,k)}});c.children.fa(function(c,d){var E=!Vf(b.o())&&null==d.value;m.Da(c)||E||(E=b.o().j().J(c),E=lg(E,d),l=cg(a,l,new R(c),E,e,f,g,k))});return l}
function hg(a,b,c,d,e,f){if(null!=d.ic(c))return b;var g=new vc(d,b,e),k=e=b.C.j();if(Vf(b.o()))if(c.e())e=d.pa(yc(b)),k=a.G.oa(b.C.j(),e,f);else if(".priority"===H(c)){var l=d.Ta(H(c),b.o());null==l||e.e()||e.K().ea(l)||(k=a.G.$(e,l))}else l=H(c),e=d.Ta(l,b.o()),null!=e&&(k=a.G.F(b.C.j(),l,e,g,f));else if(b.C.Y)k=e,e=Yf(b),e.L()||e.U(K,function(c){var e=d.Ta(c,b.o());null!=e&&(k=a.G.F(k,c,e,g,f))});else if(w(!c.e(),"If it were an empty path, we would have an event snap"),l=H(c),1==Rc(c)||wc(b.C,
l)){var m=d.Ta(l,b.o());null!=m&&(k=a.G.F(e,l,m,g,f))}return Xf(b,k,b.C.Y||c.e(),a.G.ya())};function og(a){this.V=a;this.g=a.w.g}function pg(a,b,c,d){var e=[],f=[];Ia(b,function(b){"child_changed"===b.type&&a.g.gf(b.Ce,b.Ga)&&f.push(new B("child_moved",b.Ga,b.Ua))});qg(a,e,"child_removed",b,d,c);qg(a,e,"child_added",b,d,c);qg(a,e,"child_moved",f,d,c);qg(a,e,"child_changed",b,d,c);qg(a,e,Hb,b,d,c);return e}function qg(a,b,c,d,e,f){d=Ja(d,function(a){return a.type===c});Ra(d,q(a.Qf,a));Ia(d,function(c){var d=rg(a,c,f);Ia(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function rg(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Fd=c.df(b.Ua,b.Ga,a.g));return b}og.prototype.Qf=function(a,b){if(null==a.Ua||null==b.Ua)throw gb("Should only compare child_ events.");return this.g.compare(new M(a.Ua,a.Ga),new M(b.Ua,b.Ga))};function sg(a,b){this.V=a;var c=a.w,d=new cc(c.g),c=Jc(c)?new cc(c.g):c.ka?new Bc(c):new ec(c);this.qf=new $f(c);var e=b.o(),f=b.C,g=d.oa(L,e.j(),null),k=c.oa(L,f.j(),null);this.Ha=new Wf(new xc(k,f.Y,c.ya()),new xc(g,e.Y,d.ya()));this.Va=[];this.Uf=new og(a)}function tg(a){return a.V}h=sg.prototype;h.o=function(){return this.Ha.o().j()};h.bb=function(a){var b=yc(this.Ha);return b&&(Jc(this.V.w)||!a.e()&&!b.J(H(a)).e())?b.ra(a):null};h.e=function(){return 0===this.Va.length};h.Fb=function(a){this.Va.push(a)};
h.gb=function(a,b){var c=[];if(b){w(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Ia(this.Va,function(a){(a=a.Ve(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Va.length;++f){var g=this.Va[f];if(!g.matches(a))e.push(g);else if(a.ff()){e=e.concat(this.Va.slice(f+1));break}}this.Va=e}else this.Va=[];return c};
h.Ya=function(a,b,c){a.type===dg&&null!==a.source.ac&&(w(yc(this.Ha),"We should always have a full cache before handling merges"),w(Yf(this.Ha),"Missing event cache, even though we have a server cache"));var d=this.Ha;a=this.qf.Ya(d,a,b,c);b=this.qf;c=a.Yd;w(c.C.j().Ac(b.G.g),"Event snap not indexed");w(c.o().j().Ac(b.G.g),"Server snap not indexed");w(Vf(a.Yd.o())||!Vf(d.o()),"Once a server snap is complete, it should never go back");this.Ha=a.Yd;return ug(this,a.Of,a.Yd.C.j(),null)};
function vg(a,b){var c=a.Ha.C,d=[];c.j().L()||c.j().U(K,function(a,b){d.push(new B("child_added",b,a))});c.Y&&d.push(Gb(c.j()));return ug(a,d,c.j(),b)}function ug(a,b,c,d){return pg(a.Uf,b,c,d?[d]:a.Va)};function wg(a,b){this.value=a;this.children=b||xg}var xg=new $c(function(a,b){return a===b?0:a<b?-1:1}),ng=new wg(null);function yg(a){var b=ng;z(a,function(a,d){b=b.set(new R(d),a)});return b}h=wg.prototype;h.e=function(){return null===this.value&&this.children.e()};function zg(a,b,c){if(null!=a.value&&c(a.value))return{path:T,value:a.value};if(b.e())return null;var d=H(b);a=a.children.get(d);return null!==a?(b=zg(a,S(b),c),null!=b?{path:(new R(d)).n(b.path),value:b.value}:null):null}
function Ag(a,b){return zg(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(H(a));return null!==b?b.subtree(S(a)):ng};h.set=function(a,b){if(a.e())return new wg(b,this.children);var c=H(a),d=(this.children.get(c)||ng).set(S(a),b),c=this.children.Ka(c,d);return new wg(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?ng:new wg(null,this.children);var b=H(a),c=this.children.get(b);return c?(a=c.remove(S(a)),b=a.e()?this.children.remove(b):this.children.Ka(b,a),null===this.value&&b.e()?ng:new wg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(H(a));return b?b.get(S(a)):null};
function mg(a,b,c){if(b.e())return c;var d=H(b);b=mg(a.children.get(d)||ng,S(b),c);d=b.e()?a.children.remove(d):a.children.Ka(d,b);return new wg(a.value,d)}function Bg(a,b){return Cg(a,T,b)}function Cg(a,b,c){var d={};a.children.fa(function(a,f){d[a]=Cg(f,b.n(a),c)});return c(b,a.value,d)}function Dg(a,b,c){return Eg(a,b,T,c)}function Eg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=H(b);return(a=a.children.get(e))?Eg(a,S(b),c.n(e),d):null}
function Fg(a,b,c){if(!b.e()){var d=!0;a.value&&(d=c(T,a.value));!0===d&&(d=H(b),(a=a.children.get(d))&&Gg(a,S(b),T.n(d),c))}}function Gg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=H(b);return(a=a.children.get(e))?Gg(a,S(b),c.n(e),d):ng}function kg(a,b){Hg(a,T,b)}function Hg(a,b,c){a.children.fa(function(a,e){Hg(e,b.n(a),c)});a.value&&c(b,a.value)}function Ig(a,b){a.children.fa(function(a,d){d.value&&b(a,d.value)})};function Jg(){this.va={}}h=Jg.prototype;h.e=function(){return Od(this.va)};h.Ya=function(a,b,c){var d=a.source.ac;if(null!==d)return d=t(this.va,d),w(null!=d,"SyncTree gave us an op for an invalid query."),d.Ya(a,b,c);var e=[];z(this.va,function(d){e=e.concat(d.Ya(a,b,c))});return e};h.Fb=function(a,b,c,d,e){var f=a.Fa(),g=t(this.va,f);if(!g){var g=c.pa(e?d:null),k=!1;g?k=!0:(g=d instanceof V?c.oc(d):L,k=!1);g=new sg(a,new Wf(new xc(g,k,!1),new xc(d,e,!1)));this.va[f]=g}g.Fb(b);return vg(g,b)};
h.gb=function(a,b,c){var d=a.Fa(),e=[],f=[],g=null!=Kg(this);if("default"===d){var k=this;z(this.va,function(a,d){f=f.concat(a.gb(b,c));a.e()&&(delete k.va[d],Jc(a.V.w)||e.push(a.V))})}else{var l=t(this.va,d);l&&(f=f.concat(l.gb(b,c)),l.e()&&(delete this.va[d],Jc(l.V.w)||e.push(l.V)))}g&&null==Kg(this)&&e.push(new Q(a.k,a.path));return{rg:e,Vf:f}};function Lg(a){return Ja(Kd(a.va),function(a){return!Jc(a.V.w)})}h.bb=function(a){var b=null;z(this.va,function(c){b=b||c.bb(a)});return b};
function Mg(a,b){if(Jc(b.w))return Kg(a);var c=b.Fa();return t(a.va,c)}function Kg(a){return Nd(a.va,function(a){return Jc(a.V.w)})||null};function Ng(a){this.W=a}var Og=new Ng(new wg(null));function Pg(a,b,c){if(b.e())return new Ng(new wg(c));var d=Ag(a.W,b);if(null!=d){var e=d.path,d=d.value;b=U(e,b);d=d.F(b,c);return new Ng(a.W.set(e,d))}a=mg(a.W,b,new wg(c));return new Ng(a)}function Qg(a,b,c){var d=a;ua(c,function(a,c){d=Pg(d,b.n(a),c)});return d}Ng.prototype.Gd=function(a){if(a.e())return Og;a=mg(this.W,a,ng);return new Ng(a)};function Rg(a,b){var c=Ag(a.W,b);return null!=c?a.W.get(c.path).ra(U(c.path,b)):null}
function Sg(a){var b=[],c=a.W.value;null!=c?c.L()||c.U(K,function(a,c){b.push(new M(a,c))}):a.W.children.fa(function(a,c){null!=c.value&&b.push(new M(a,c.value))});return b}function Tg(a,b){if(b.e())return a;var c=Rg(a,b);return null!=c?new Ng(new wg(c)):new Ng(a.W.subtree(b))}Ng.prototype.e=function(){return this.W.e()};Ng.prototype.apply=function(a){return Ug(T,this.W,a)};
function Ug(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.fa(function(b,f){".priority"===b?(w(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Ug(a.n(b),f,c)});c.ra(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Vg(){this.Q=Og;this.wa=[];this.Dc=-1}h=Vg.prototype;
h.Gd=function(a){var b=Oa(this.wa,function(b){return b.Zd===a});w(0<=b,"removeWrite called with nonexistent writeId.");var c=this.wa[b];this.wa.splice(b,1);for(var d=!1,e=!1,f=!1,g=this.wa.length-1;!d&&0<=g;){var k=this.wa[g];g>=b&&Wg(k,c.path)?d=!0:!e&&c.path.contains(k.path)&&(g>=b?e=!0:f=!0);g--}if(!d)if(e||f)this.Q=Xg(this.wa,Yg,T),this.Dc=0<this.wa.length?this.wa[this.wa.length-1].Zd:-1;else if(c.Pa)this.Q=this.Q.Gd(c.path);else{var l=this;z(c.children,function(a,b){l.Q=l.Q.Gd(c.path.n(b))})}b=
c.path;if(null!=Rg(this.Q,b)){if(f)return b;w(d,"Must have found a shadow");return null}return b};h.pa=function(a,b,c,d){if(c||d){var e=Tg(this.Q,a);return!d&&e.e()?b:d||null!=b||null!=Rg(e,T)?(e=Xg(this.wa,function(b){return(b.visible||d)&&(!c||!(0<=Ha(c,b.Zd)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=Rg(this.Q,a);if(null!=e)return e;e=Tg(this.Q,a);return e.e()?b:null!=b||null!=Rg(e,T)?(b=b||L,e.apply(b)):null};
h.oc=function(a,b){var c=L,d=Rg(this.Q,a);if(d)d.L()||d.U(K,function(a,b){c=c.P(a,b)});else if(b){var e=Tg(this.Q,a);b.U(K,function(a,b){var d=Tg(e,new R(a)).apply(b);c=c.P(a,d)});Ia(Sg(e),function(a){c=c.P(a.name,a.Z)})}else e=Tg(this.Q,a),Ia(Sg(e),function(a){c=c.P(a.name,a.Z)});return c};h.$c=function(a,b,c,d){w(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=Rg(this.Q,a))return null;a=Tg(this.Q,a);return a.e()?d.ra(b):a.apply(d.ra(b))};
h.Ta=function(a,b,c){a=a.n(b);var d=Rg(this.Q,a);return null!=d?d:wc(c,b)?Tg(this.Q,a).apply(c.j().J(b)):null};h.ic=function(a){return Rg(this.Q,a)};h.ce=function(a,b,c,d,e,f){var g;a=Tg(this.Q,a);g=Rg(a,T);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.Eb(f);if(g.e()||g.L())return[];b=[];a=nc(f);e=e?g.Qb(c,f):g.Ob(c,f);for(f=O(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=O(e);return b};
function Wg(a,b){return a.Pa?a.path.contains(b):!!Md(a.children,function(c,d){return a.path.n(d).contains(b)})}function Yg(a){return a.visible}
function Xg(a,b,c){for(var d=Og,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Pa)c.contains(g)?(g=U(c,g),d=Pg(d,g,f.Pa)):g.contains(c)&&(g=U(g,c),d=Pg(d,T,f.Pa.ra(g)));else if(f.children)c.contains(g)?(g=U(c,g),d=Qg(d,g,f.children)):g.contains(c)&&(g=U(g,c),g.e()?d=Qg(d,T,f.children):(f=f.children[H(g)],null!==f&&(f=f.ra(S(g)),d=Pg(d,T,f))));else throw gb("WriteRecord should have .snap or .children");}}return d}function Zg(a,b){this.Cb=a;this.W=b}h=Zg.prototype;
h.pa=function(a,b,c){return this.W.pa(this.Cb,a,b,c)};h.oc=function(a){return this.W.oc(this.Cb,a)};h.$c=function(a,b,c){return this.W.$c(this.Cb,a,b,c)};h.ic=function(a){return this.W.ic(this.Cb.n(a))};h.ce=function(a,b,c,d,e){return this.W.ce(this.Cb,a,b,c,d,e)};h.Ta=function(a,b){return this.W.Ta(this.Cb,a,b)};h.n=function(a){return new Zg(this.Cb.n(a),this.W)};function $g(a,b,c){this.type=ag;this.source=a;this.path=b;this.Pa=c}$g.prototype.Lc=function(a){return this.path.e()?new $g(this.source,T,this.Pa.J(a)):new $g(this.source,S(this.path),this.Pa)};function ah(a,b){this.type=gg;this.source=bh;this.path=a;this.wf=b}ah.prototype.Lc=function(){return this.path.e()?this:new ah(S(this.path),this.wf)};function ch(a,b){this.type=ig;this.source=a;this.path=b}ch.prototype.Lc=function(){return this.path.e()?new ch(this.source,T):new ch(this.source,S(this.path))};function dh(a,b,c){this.type=dg;this.source=a;this.path=b;this.children=c}dh.prototype.Lc=function(a){if(this.path.e())return a=this.children.subtree(new R(a)),a.e()?null:a.value?new $g(this.source,T,a.value):new dh(this.source,T,a);w(H(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new dh(this.source,S(this.path),this.children)};var ag=0,dg=1,gg=2,ig=3;function eh(a,b,c,d){this.bf=a;this.af=b;this.ac=c;this.zf=d;w(!d||b,"Tagged queries must be from server.")}var bh=new eh(!0,!1,null,!1),fh=new eh(!1,!0,null,!1);function gh(a){this.na=ng;this.xb=new Vg;this.Wc={};this.bc={};this.Ec=a}function hh(a,b,c,d,e){var f=a.xb,g=e;w(d>f.Dc,"Stacking an older write on top of newer ones");n(g)||(g=!0);f.wa.push({path:b,Pa:c,Zd:d,visible:g});g&&(f.Q=Pg(f.Q,b,c));f.Dc=d;return e?ih(a,new $g(bh,b,c)):[]}function jh(a,b,c,d){var e=a.xb;w(d>e.Dc,"Stacking an older merge on top of newer ones");e.wa.push({path:b,children:c,Zd:d,visible:!0});e.Q=Qg(e.Q,b,c);e.Dc=d;c=yg(c);return ih(a,new dh(bh,b,c))}
function kh(a,b,c){c=c||!1;b=a.xb.Gd(b);return null==b?[]:ih(a,new ah(b,c))}function lh(a,b,c){c=yg(c);return ih(a,new dh(fh,b,c))}function mh(a,b,c,d){d=Pd(a.Wc,"_"+d);if(null!=d){var e=nh(d);d=e.path;e=e.ac;b=U(d,b);c=new $g(new eh(!1,!0,e,!0),b,c);return oh(a,d,c)}return[]}function ph(a,b,c,d){if(d=Pd(a.Wc,"_"+d)){var e=nh(d);d=e.path;e=e.ac;b=U(d,b);c=yg(c);c=new dh(new eh(!1,!0,e,!0),b,c);return oh(a,d,c)}return[]}
gh.prototype.Fb=function(a,b){var c=a.path,d=null,e=!1;Fg(this.na,c,function(a,b){var f=U(a,c);d=b.bb(f);e=e||null!=Kg(b);return!d});var f=this.na.get(c);f?(e=e||null!=Kg(f),d=d||f.bb(T)):(f=new Jg,this.na=this.na.set(c,f));var g;null!=d?g=!0:(g=!1,d=L,Ig(this.na.subtree(c),function(a,b){var c=b.bb(T);c&&(d=d.P(a,c))}));var k=null!=Mg(f,a);if(!k&&!Jc(a.w)){var l=qh(a);w(!(l in this.bc),"View does not exist, but we have a tag");var m=rh++;this.bc[l]=m;this.Wc["_"+m]=l}g=f.Fb(a,b,new Zg(c,this.xb),
d,g);k||e||(f=Mg(f,a),g=g.concat(sh(this,a,f)));return g};
gh.prototype.gb=function(a,b,c){var d=a.path,e=this.na.get(d),f=[];if(e&&("default"===a.Fa()||null!=Mg(e,a))){f=e.gb(a,b,c);e.e()&&(this.na=this.na.remove(d));e=f.rg;f=f.Vf;b=-1!==Oa(e,function(a){return Jc(a.w)});var g=Dg(this.na,d,function(a,b){return null!=Kg(b)});if(b&&!g&&(d=this.na.subtree(d),!d.e()))for(var d=th(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=uh(this,l);this.Ec.Ne(m,vh(this,m),l.md,l.H)}if(!g&&0<e.length&&!c)if(b)this.Ec.Qd(a,null);else{var u=this;Ia(e,function(a){a.Fa();var b=u.bc[qh(a)];
u.Ec.Qd(a,b)})}wh(this,e)}return f};gh.prototype.pa=function(a,b){var c=this.xb,d=Dg(this.na,a,function(b,c){var d=U(b,a);if(d=c.bb(d))return d});return c.pa(a,d,b,!0)};function th(a){return Bg(a,function(a,c,d){if(c&&null!=Kg(c))return[Kg(c)];var e=[];c&&(e=Lg(c));z(d,function(a){e=e.concat(a)});return e})}function wh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!Jc(d.w)){var d=qh(d),e=a.bc[d];delete a.bc[d];delete a.Wc["_"+e]}}}
function sh(a,b,c){var d=b.path,e=vh(a,b);c=uh(a,c);b=a.Ec.Ne(b,e,c.md,c.H);d=a.na.subtree(d);if(e)w(null==Kg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bg(d,function(a,b,c){if(!a.e()&&b&&null!=Kg(b))return[tg(Kg(b))];var d=[];b&&(d=d.concat(Ka(Lg(b),function(a){return a.V})));z(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Ec.Qd(c,vh(a,c));return b}
function uh(a,b){var c=b.V,d=vh(a,c);return{md:function(){return(b.o()||L).hash()},H:function(b,f){if("ok"===b){if(f&&"object"===typeof f&&s(f,"w")){var g=t(f,"w");ea(g)&&0<=Ha(g,"no_index")&&y("Using an unspecified index. Consider adding "+('".indexOn": "'+c.w.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}if(d){var k=c.path;if(g=Pd(a.Wc,"_"+d))var l=nh(g),g=l.path,l=l.ac,k=U(g,k),k=new ch(new eh(!1,!0,l,!0),k),g=oh(a,g,k);else g=[]}else g=ih(a,new ch(fh,
c.path));return g}g="Unknown Error";"too_big"===b?g="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?g="Client doesn't have permission to access the desired data.":"unavailable"==b&&(g="The service is unavailable");g=Error(b+": "+g);g.code=b.toUpperCase();return a.gb(c,null,g)}}}function qh(a){return a.path.toString()+"$"+a.Fa()}
function nh(a){var b=a.indexOf("$");w(-1!==b&&b<a.length-1,"Bad queryKey.");return{ac:a.substr(b+1),path:new R(a.substr(0,b))}}function vh(a,b){var c=qh(b);return t(a.bc,c)}var rh=1;function oh(a,b,c){var d=a.na.get(b);w(d,"Missing sync point for query tag that we're tracking");return d.Ya(c,new Zg(b,a.xb),null)}function ih(a,b){return xh(a,b,a.na,null,new Zg(T,a.xb))}
function xh(a,b,c,d,e){if(b.path.e())return yh(a,b,c,d,e);var f=c.get(T);null==d&&null!=f&&(d=f.bb(T));var g=[],k=H(b.path),l=b.Lc(k);if((c=c.children.get(k))&&l)var m=d?d.J(k):null,k=e.n(k),g=g.concat(xh(a,l,c,m,k));f&&(g=g.concat(f.Ya(b,e,d)));return g}function yh(a,b,c,d,e){var f=c.get(T);null==d&&null!=f&&(d=f.bb(T));var g=[];c.children.fa(function(c,f){var m=d?d.J(c):null,u=e.n(c),x=b.Lc(c);x&&(g=g.concat(yh(a,x,f,m,u)))});f&&(g=g.concat(f.Ya(b,e,d)));return g};function zh(a){this.O=a;this.Ra=Yd(a);this.aa=new ef;this.vd=1;this.T=new Ke(this.O,q(this.yd,this),q(this.wd,this),q(this.Ge,this));this.zg=Zd(a,q(function(){return new Vd(this.Ra,this.T)},this));this.kc=new Uc;this.re=new df;var b=this;this.qd=new gh({Ne:function(a,d,e,f){d=[];e=b.re.j(a.path);e.e()||(d=ih(b.qd,new $g(fh,a.path,e)),setTimeout(function(){f("ok")},0));return d},Qd:ba});Ah(this,"connected",!1);this.ga=new af;this.R=new Ff(a,q(this.T.R,this.T),q(this.T.Re,this.T),q(this.De,this));this.gd=
0;this.se=null;this.M=new gh({Ne:function(a,d,e,f){Oe(b.T,a,e,d,function(d,e){var l=f(d,e);jf(b.aa,a.path,l)});return[]},Qd:function(a,d){var e=b.T,f=a.path.toString(),g=a.Fa();e.f("Unlisten called for "+f+" "+g);if(Qe(e,f,g)&&e.ja){var k=Qc(a);e.f("Unlisten on "+f+" for "+g);f={p:f};d&&(f.q=k,f.t=d);e.Ca("n",f)}}})}h=zh.prototype;h.toString=function(){return(this.O.zb?"https://":"http://")+this.O.host};h.name=function(){return this.O.tb};
function Bh(a){a=a.re.j(new R(".info/serverTimeOffset")).N()||0;return(new Date).getTime()+a}function Ch(a){a=a={timestamp:Bh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}h.yd=function(a,b,c,d){this.gd++;var e=new R(a);b=this.se?this.se(a,b):b;a=[];d?c?(b=ud(b,function(a){return N(a)}),a=ph(this.M,e,b,d)):(b=N(b),a=mh(this.M,e,b,d)):c?(d=ud(b,function(a){return N(a)}),a=lh(this.M,e,d)):(d=N(b),a=ih(this.M,new $g(fh,e,d)));d=e;0<a.length&&(d=Dh(this,e));jf(this.aa,d,a)};
h.wd=function(a){Ah(this,"connected",a);!1===a&&Eh(this)};h.Ge=function(a){var b=this;Ab(a,function(a,d){Ah(b,d,a)})};h.De=function(a){Ah(this,"authenticated",a)};function Ah(a,b,c){b=new R("/.info/"+b);c=N(c);var d=a.re;d.Jd=d.Jd.F(b,c);c=ih(a.qd,new $g(fh,b,c));jf(a.aa,b,c)}
h.Ab=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Hg:c});var e=Ch(this);b=N(b,c);var e=Uf(b,e),f=this.vd++,e=hh(this.M,a,e,f,!0);ff(this.aa,e);var g=this;this.T.put(a.toString(),b.N(!0),function(b,c){var e="ok"===b;e||y("set at "+a+" failed: "+b);e=kh(g.M,f,!e);jf(g.aa,a,e);Fh(d,b,c)});e=Gh(this,a);Dh(this,e);jf(this.aa,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Ch(this),f={};z(b,function(a,b){d=!1;var c=N(a);f[b]=Uf(c,e)});if(d)ib("update() called with empty data.  Don't do anything."),Fh(c,"ok");else{var g=this.vd++,k=jh(this.M,a,f,g);ff(this.aa,k);var l=this;We(this.T,a.toString(),b,function(b,d){w("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");var e="ok"===b;e||y("update at "+a+" failed: "+b);var e=kh(l.M,g,!e),f=a;0<e.length&&(f=Dh(l,a));jf(l.aa,f,e);Fh(c,b,
d)});b=Gh(this,a);Dh(this,b);jf(this.aa,a,[])}};function Eh(a){a.f("onDisconnectEvents");var b=Ch(a),c=[];cf(Tf(a.ga,b),T,function(b,e){c=c.concat(ih(a.M,new $g(fh,b,e)));var f=Gh(a,b);Dh(a,f)});a.ga=new af;jf(a.aa,T,c)}h.Ee=function(a,b){var c=this;this.T.Ee(a.toString(),function(d,e){"ok"===d&&bf(c.ga,a);Fh(b,d,e)})};function Hh(a,b,c,d){var e=N(c);Se(a.T,b.toString(),e.N(!0),function(c,g){"ok"===c&&a.ga.dc(b,e);Fh(d,c,g)})}
function Ih(a,b,c,d,e){var f=N(c,d);Se(a.T,b.toString(),f.N(!0),function(c,d){"ok"===c&&a.ga.dc(b,f);Fh(e,c,d)})}function Jh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(ib("onDisconnect().update() called with empty data.  Don't do anything."),Fh(d,"ok")):Ue(a.T,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=N(c[l]);a.ga.dc(b.n(l),m)}Fh(d,e,f)})}function Oc(a,b,c){c=".info"===H(b.path)?a.qd.Fb(b,c):a.M.Fb(b,c);Pc(a.aa,b.path,c)}h.pb=function(){this.T.pb()};h.gc=function(){this.T.gc()};
h.Oe=function(a){if("undefined"!==typeof console){a?(this.Pd||(this.Pd=new Ud(this.Ra)),a=this.Pd.get()):a=this.Ra.get();var b=La(Ld(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Pe=function(a){Td(this.Ra,a);this.zg.yf[a]=!0};h.f=function(a){ib("r:"+this.T.id+":",arguments)};function Fh(a,b,c){a&&Db(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Kh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new Q(a,b);g.vb("value",f);c={path:b,update:c,H:d,status:null,of:fb(),Se:e,uf:0,Xd:function(){g.Yb("value",f)},$d:null,xa:null,dd:null,ed:null,fd:null};d=a.M.pa(b,void 0)||L;c.dd=d;d=c.update(d.N());if(n(d)){Tb("transaction failed: Data returned ",d);c.status=1;e=Vc(a.kc,b);var k=e.za()||[];k.push(c);Wc(e,k);"object"===typeof d&&null!==d&&s(d,".priority")?(k=t(d,".priority"),w(Rb(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.M.pa(b)||L).K().N();e=Ch(a);d=N(d,k);e=Uf(d,e);c.ed=d;c.fd=e;c.xa=a.vd++;c=hh(a.M,b,e,c.xa,c.Se);jf(a.aa,b,c);Lh(a)}else c.Xd(),c.ed=null,c.fd=null,c.H&&(a=new C(c.dd,new Q(a,c.path),K),c.H(null,!1,a))}function Lh(a,b){var c=b||a.kc;b||Mh(a,c);if(null!==c.za()){var d=Nh(a,c);w(0<d.length,"Sending zero length transaction queue");Ma(d,function(a){return 1===a.status})&&Oh(a,c.path(),d)}else c.ld()&&c.U(function(b){Lh(a,b)})}
function Oh(a,b,c){for(var d=Ka(c,function(a){return a.xa}),e=a.M.pa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];w(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.uf++;var k=U(b,g.path),d=d.F(k,g.ed)}d=d.N(!0);a.T.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(kh(a.M,c[f].xa));if(c[f].H){var g=c[f].fd,k=new Q(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new C(g,k,K)))}c[f].Xd()}Mh(a,Vc(a.kc,b));Lh(a);jf(a.aa,b,e);for(f=0;f<d.length;f++)Db(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(y("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].$d=d;Dh(a,b)}},e)}function Dh(a,b){var c=Ph(a,b),d=c.path(),c=Nh(a,c);Qh(a,c,d);return d}
function Qh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return a.xa}),g=0;g<b.length;g++){var k=b[g],l=U(c,k.path),m=!1,u;w(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.$d,e=e.concat(kh(a.M,k.xa,!0));else if(1===k.status)if(25<=k.uf)m=!0,u="maxretry",e=e.concat(kh(a.M,k.xa,!0));else{var x=a.M.pa(k.path,f)||L;k.dd=x;var E=b[g].update(x.N());n(E)?(Tb("transaction failed: Data returned ",E),l=N(E),"object"===typeof E&&null!=E&&s(E,
".priority")||(l=l.$(x.K())),x=k.xa,E=Ch(a),E=Uf(l,E),k.ed=l,k.fd=E,k.xa=a.vd++,Pa(f,x),e=e.concat(hh(a.M,k.path,E,k.xa,k.Se)),e=e.concat(kh(a.M,x,!0))):(m=!0,u="nodata",e=e.concat(kh(a.M,k.xa,!0)))}jf(a.aa,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].Xd,Math.floor(0)),b[g].H&&("nodata"===u?(k=new Q(a,b[g].path),d.push(q(b[g].H,null,null,!1,new C(b[g].dd,k,K)))):d.push(q(b[g].H,null,Error(u),!1,null))))}Mh(a,a.kc);for(g=0;g<d.length;g++)Db(d[g]);Lh(a)}}
function Ph(a,b){for(var c,d=a.kc;null!==(c=H(b))&&null===d.za();)d=Vc(d,c),b=S(b);return d}function Nh(a,b){var c=[];Rh(a,b,c);c.sort(function(a,b){return a.of-b.of});return c}function Rh(a,b,c){var d=b.za();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){Rh(a,b,c)})}function Mh(a,b){var c=b.za();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Wc(b,0<c.length?c:null)}b.U(function(b){Mh(a,b)})}
function Gh(a,b){var c=Ph(a,b).path(),d=Vc(a.kc,b);Zc(d,function(b){Sh(a,b)});Sh(a,d);Yc(d,function(b){Sh(a,b)});return c}
function Sh(a,b){var c=b.za();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(w(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].$d="set"):(w(1===c[g].status,"Unexpected transaction status in abort"),c[g].Xd(),e=e.concat(kh(a.M,c[g].xa,!0)),c[g].H&&d.push(q(c[g].H,null,Error("set"),!1,null))));-1===f?Wc(b,null):c.length=f+1;jf(a.aa,b.path(),e);for(g=0;g<d.length;g++)Db(d[g])}};function X(){this.ec={}}ca(X);X.prototype.pb=function(){for(var a in this.ec)this.ec[a].pb()};X.prototype.interrupt=X.prototype.pb;X.prototype.gc=function(){for(var a in this.ec)this.ec[a].gc()};X.prototype.resume=X.prototype.gc;function Th(a){var b=this;this.qc=a;this.Sd="*";xf()?this.Gc=this.od=pf():(this.Gc=window.opener,this.od=window);if(!b.Gc)throw"Unable to find relay frame";qf(this.od,"message",q(this.Zb,this));qf(this.od,"message",q(this.lf,this));try{Uh(this,{a:"ready"})}catch(c){qf(this.Gc,"load",function(){Uh(b,{a:"ready"})})}qf(window,"unload",q(this.jg,this))}function Uh(a,b){b=r(b);xf()?a.Gc.doPost(b,a.Sd):a.Gc.postMessage(b,a.Sd)}
Th.prototype.Zb=function(a){var b=this,c;try{c=ta(a.data)}catch(d){}c&&"request"===c.a&&(rf(window,"message",this.Zb),this.Sd=a.origin,this.qc&&setTimeout(function(){b.qc(b.Sd,c.d,function(a,c){b.Mf=!c;b.qc=void 0;Uh(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Th.prototype.jg=function(){try{rf(this.od,"message",this.lf)}catch(a){}this.qc&&(Uh(this,{a:"error",d:"unknown closed window"}),this.qc=void 0);try{window.close()}catch(b){}};Th.prototype.lf=function(a){if(this.Mf&&"die"===a.data)try{window.close()}catch(b){}};var Y={Xf:function(){ke=be=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){le=!0};Y.forceWebSockets=Y.Yf;Y.wg=function(a,b){a.k.T.Me=b};Y.setSecurityDebugCallback=Y.wg;Y.Oe=function(a,b){a.k.Oe(b)};Y.stats=Y.Oe;Y.Pe=function(a,b){a.k.Pe(b)};Y.statsIncrementCounter=Y.Pe;Y.gd=function(a){return a.k.gd};Y.dataUpdateCount=Y.gd;Y.ag=function(a,b){a.k.se=b};Y.interceptServerData=Y.ag;Y.gg=function(a){new Th(a)};Y.onPopupOpen=Y.gg;Y.ug=function(a){kf=a};Y.setAuthenticationServer=Y.ug;function Z(a,b){this.Qc=a;this.Ea=b}Z.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);G("Firebase.onDisconnect().cancel",1,a,!0);this.Qc.Ee(this.Ea,a||null)};Z.prototype.cancel=Z.prototype.cancel;Z.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);$b("Firebase.onDisconnect().remove",this.Ea);G("Firebase.onDisconnect().remove",1,a,!0);Hh(this.Qc,this.Ea,null,a)};Z.prototype.remove=Z.prototype.remove;
Z.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);$b("Firebase.onDisconnect().set",this.Ea);Sb("Firebase.onDisconnect().set",a,!1);G("Firebase.onDisconnect().set",2,b,!0);Hh(this.Qc,this.Ea,a,b)};Z.prototype.set=Z.prototype.set;
Z.prototype.Ab=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);$b("Firebase.onDisconnect().setWithPriority",this.Ea);Sb("Firebase.onDisconnect().setWithPriority",a,!1);Wb("Firebase.onDisconnect().setWithPriority",2,b);G("Firebase.onDisconnect().setWithPriority",3,c,!0);Ih(this.Qc,this.Ea,a,b,c)};Z.prototype.setWithPriority=Z.prototype.Ab;
Z.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);$b("Firebase.onDisconnect().update",this.Ea);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;y("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.onDisconnect().update",a);G("Firebase.onDisconnect().update",2,b,!0);Jh(this.Qc,
this.Ea,a,b)};Z.prototype.update=Z.prototype.update;var $={};$.mc=Ke;$.DataConnection=$.mc;Ke.prototype.yg=function(a,b){this.Ca("q",{p:a},b)};$.mc.prototype.simpleListen=$.mc.prototype.yg;Ke.prototype.Sf=function(a,b){this.Ca("echo",{d:a},b)};$.mc.prototype.echo=$.mc.prototype.Sf;Ke.prototype.interrupt=Ke.prototype.pb;$.Df=ve;$.RealTimeConnection=$.Df;ve.prototype.sendRequest=ve.prototype.Ca;ve.prototype.close=ve.prototype.close;
$.$f=function(a){var b=Ke.prototype.put;Ke.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ke.prototype.put=b}};$.hijackHash=$.$f;$.Cf=Ba;$.ConnectionTarget=$.Cf;$.Fa=function(a){return a.Fa()};$.queryIdentifier=$.Fa;$.bg=function(a){return a.k.T.Aa};$.listens=$.bg;var Vh=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);w(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);w(20===c.length,"NextPushId: Length should be 20.");
return c}}();function Q(a,b){var c,d,e;if(a instanceof zh)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=sb(arguments[0]);c=d.Ag;"firebase"===d.domain&&rb(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||rb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.zb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ba(d.host,d.zb,c,"ws"===d.scheme||"wss"===d.scheme);d=new R(d.Oc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Qb(c.tb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Pb.test(e)));if(f)throw Error(F("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof X)e=b;else if(p(b))e=X.Mb(),c.Dd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=X.Mb();f=c.toString();var g=t(e.ec,f);g||(g=new zh(c),e.ec[f]=g);c=g}P.call(this,c,d,Gc,!1)}ma(Q,P);var Wh=Q,Xh=["Firebase"],Yh=aa;Xh[0]in Yh||!Yh.execScript||Yh.execScript("var "+Xh[0]);for(var Zh;Xh.length&&(Zh=Xh.shift());)!Xh.length&&n(Wh)?Yh[Zh]=Wh:Yh=Yh[Zh]?Yh[Zh]:Yh[Zh]={};Q.prototype.name=function(){y("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};Q.prototype.name=Q.prototype.name;
Q.prototype.key=function(){D("Firebase.key",0,0,arguments.length);return this.path.e()?null:Sc(this.path)};Q.prototype.key=Q.prototype.key;Q.prototype.n=function(a){D("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof R))if(null===H(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Zb("Firebase.child",b)}else Zb("Firebase.child",a);return new Q(this.k,this.path.n(a))};Q.prototype.child=Q.prototype.n;
Q.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new Q(this.k,a)};Q.prototype.parent=Q.prototype.parent;Q.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};Q.prototype.root=Q.prototype.root;
Q.prototype.toString=function(){D("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.k.toString();else{a=this.parent().toString()+"/";var b=this.key();a+=encodeURIComponent(String(b))}return a};Q.prototype.toString=Q.prototype.toString;Q.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);$b("Firebase.set",this.path);Sb("Firebase.set",a,!1);G("Firebase.set",2,b,!0);this.k.Ab(this.path,a,null,b||null)};Q.prototype.set=Q.prototype.set;
Q.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);$b("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;y("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.update",a);G("Firebase.update",2,b,!0);if(s(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.k.update(this.path,a,b||null)};Q.prototype.update=Q.prototype.update;Q.prototype.Ab=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);$b("Firebase.setWithPriority",this.path);Sb("Firebase.setWithPriority",a,!1);Wb("Firebase.setWithPriority",2,b);G("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Ab(this.path,a,b,c||null)};Q.prototype.setWithPriority=Q.prototype.Ab;
Q.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);$b("Firebase.remove",this.path);G("Firebase.remove",1,a,!0);this.set(null,a)};Q.prototype.remove=Q.prototype.remove;
Q.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);$b("Firebase.transaction",this.path);G("Firebase.transaction",1,a,!1);G("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(F("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Kh(this.k,this.path,a,b||null,c)};Q.prototype.transaction=Q.prototype.transaction;
Q.prototype.vg=function(a,b){D("Firebase.setPriority",1,2,arguments.length);$b("Firebase.setPriority",this.path);Wb("Firebase.setPriority",1,a);G("Firebase.setPriority",2,b,!0);this.k.Ab(this.path.n(".priority"),a,null,b)};Q.prototype.setPriority=Q.prototype.vg;Q.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);$b("Firebase.push",this.path);Sb("Firebase.push",a,!0);G("Firebase.push",2,b,!0);var c=Bh(this.k),c=Vh(c),c=this.n(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
Q.prototype.push=Q.prototype.push;Q.prototype.fb=function(){$b("Firebase.onDisconnect",this.path);return new Z(this.k,this.path)};Q.prototype.onDisconnect=Q.prototype.fb;Q.prototype.R=function(a,b,c){y("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);ac("Firebase.auth",a);G("Firebase.auth",2,b,!0);G("Firebase.auth",3,b,!0);Lf(this.k.R,a,{},{remember:"none"},b,c)};Q.prototype.auth=Q.prototype.R;
Q.prototype.Re=function(a){D("Firebase.unauth",0,1,arguments.length);G("Firebase.unauth",1,a,!0);Mf(this.k.R,a)};Q.prototype.unauth=Q.prototype.Re;Q.prototype.me=function(){D("Firebase.getAuth",0,0,arguments.length);return this.k.R.me()};Q.prototype.getAuth=Q.prototype.me;Q.prototype.fg=function(a,b){D("Firebase.onAuth",1,2,arguments.length);G("Firebase.onAuth",1,a,!1);Nb("Firebase.onAuth",2,b);this.k.R.vb("auth_status",a,b)};Q.prototype.onAuth=Q.prototype.fg;
Q.prototype.eg=function(a,b){D("Firebase.offAuth",1,2,arguments.length);G("Firebase.offAuth",1,a,!1);Nb("Firebase.offAuth",2,b);this.k.R.Yb("auth_status",a,b)};Q.prototype.offAuth=Q.prototype.eg;Q.prototype.Hf=function(a,b,c){D("Firebase.authWithCustomToken",2,3,arguments.length);ac("Firebase.authWithCustomToken",a);G("Firebase.authWithCustomToken",2,b,!1);I("Firebase.authWithCustomToken",3,c,!0);Lf(this.k.R,a,{},c||{},b)};Q.prototype.authWithCustomToken=Q.prototype.Hf;
Q.prototype.If=function(a,b,c){D("Firebase.authWithOAuthPopup",2,3,arguments.length);bc("Firebase.authWithOAuthPopup",1,a);G("Firebase.authWithOAuthPopup",2,b,!1);I("Firebase.authWithOAuthPopup",3,c,!0);Qf(this.k.R,a,c,b)};Q.prototype.authWithOAuthPopup=Q.prototype.If;
Q.prototype.Jf=function(a,b,c){D("Firebase.authWithOAuthRedirect",2,3,arguments.length);bc("Firebase.authWithOAuthRedirect",1,a);G("Firebase.authWithOAuthRedirect",2,b,!1);I("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.R;Of(d);var e=[Ef],f=nf(c);"anonymous"===a||"firebase"===a?A(b,W("TRANSPORT_UNAVAILABLE")):(Aa.set("redirect_client_options",f.cd),Pf(d,e,"/auth/"+a,f,b))};Q.prototype.authWithOAuthRedirect=Q.prototype.Jf;
Q.prototype.Kf=function(a,b,c,d){D("Firebase.authWithOAuthToken",3,4,arguments.length);bc("Firebase.authWithOAuthToken",1,a);G("Firebase.authWithOAuthToken",3,c,!1);I("Firebase.authWithOAuthToken",4,d,!0);p(b)?(bc("Firebase.authWithOAuthToken",2,b),Nf(this.k.R,a+"/token",{access_token:b},d,c)):(I("Firebase.authWithOAuthToken",2,b,!1),Nf(this.k.R,a+"/token",b,d,c))};Q.prototype.authWithOAuthToken=Q.prototype.Kf;
Q.prototype.Gf=function(a,b){D("Firebase.authAnonymously",1,2,arguments.length);G("Firebase.authAnonymously",1,a,!1);I("Firebase.authAnonymously",2,b,!0);Nf(this.k.R,"anonymous",{},b,a)};Q.prototype.authAnonymously=Q.prototype.Gf;
Q.prototype.Lf=function(a,b,c){D("Firebase.authWithPassword",2,3,arguments.length);I("Firebase.authWithPassword",1,a,!1);J("Firebase.authWithPassword",a,"email");J("Firebase.authWithPassword",a,"password");G("Firebase.authAnonymously",2,b,!1);I("Firebase.authAnonymously",3,c,!0);Nf(this.k.R,"password",a,c,b)};Q.prototype.authWithPassword=Q.prototype.Lf;
Q.prototype.je=function(a,b){D("Firebase.createUser",2,2,arguments.length);I("Firebase.createUser",1,a,!1);J("Firebase.createUser",a,"email");J("Firebase.createUser",a,"password");G("Firebase.createUser",2,b,!1);this.k.R.je(a,b)};Q.prototype.createUser=Q.prototype.je;Q.prototype.Ke=function(a,b){D("Firebase.removeUser",2,2,arguments.length);I("Firebase.removeUser",1,a,!1);J("Firebase.removeUser",a,"email");J("Firebase.removeUser",a,"password");G("Firebase.removeUser",2,b,!1);this.k.R.Ke(a,b)};
Q.prototype.removeUser=Q.prototype.Ke;Q.prototype.ee=function(a,b){D("Firebase.changePassword",2,2,arguments.length);I("Firebase.changePassword",1,a,!1);J("Firebase.changePassword",a,"email");J("Firebase.changePassword",a,"oldPassword");J("Firebase.changePassword",a,"newPassword");G("Firebase.changePassword",2,b,!1);this.k.R.ee(a,b)};Q.prototype.changePassword=Q.prototype.ee;
Q.prototype.de=function(a,b){D("Firebase.changeEmail",2,2,arguments.length);I("Firebase.changeEmail",1,a,!1);J("Firebase.changeEmail",a,"oldEmail");J("Firebase.changeEmail",a,"newEmail");J("Firebase.changeEmail",a,"password");G("Firebase.changeEmail",2,b,!1);this.k.R.de(a,b)};Q.prototype.changeEmail=Q.prototype.de;
Q.prototype.Le=function(a,b){D("Firebase.resetPassword",2,2,arguments.length);I("Firebase.resetPassword",1,a,!1);J("Firebase.resetPassword",a,"email");G("Firebase.resetPassword",2,b,!1);this.k.R.Le(a,b)};Q.prototype.resetPassword=Q.prototype.Le;Q.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);X.Mb().pb()};Q.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);X.Mb().gc()};
function ob(a,b){w(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?mb=q(console.log,console):"object"===typeof console.log&&(mb=function(a){console.log(a)})),b&&Aa.set("logging_enabled",!0)):a?mb=a:(mb=null,Aa.remove("logging_enabled"))}Q.enableLogging=ob;Q.ServerValue={TIMESTAMP:{".sv":"timestamp"}};Q.SDK_VERSION="2.1.0";Q.INTERNAL=Y;Q.Context=X;Q.TEST_ACCESS=$;})();
module.exports = Firebase;

},{}],2:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher')

},{"./lib/Dispatcher":3}],3:[function(require,module,exports){
/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */

"use strict";

var invariant = require('./invariant');

var _lastID = 1;
var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   *
   * @param {function} callback
   * @return {string}
   */
  Dispatcher.prototype.register=function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   *
   * @param {string} id
   */
  Dispatcher.prototype.unregister=function(id) {
    invariant(
      this.$Dispatcher_callbacks[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.$Dispatcher_callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   *
   * @param {array<string>} ids
   */
  Dispatcher.prototype.waitFor=function(ids) {
    invariant(
      this.$Dispatcher_isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(
          this.$Dispatcher_isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.$Dispatcher_callbacks[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.$Dispatcher_invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   *
   * @param {object} payload
   */
  Dispatcher.prototype.dispatch=function(payload) {
    invariant(
      !this.$Dispatcher_isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   *
   * @return {boolean}
   */
  Dispatcher.prototype.isDispatching=function() {
    return this.$Dispatcher_isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };


module.exports = Dispatcher;

},{"./invariant":4}],4:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],5:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],7:[function(require,module,exports){
"use strict";

var Router                    = require('./lib/Router');
var Route                     = require('./lib/Route');
var Link                      = require('./lib/Link');

var RouterMixin               = require('./lib/RouterMixin');
var AsyncRouteRenderingMixin  = require('./lib/AsyncRouteRenderingMixin');
var RouteRenderingMixin       = require('./lib/RouteRenderingMixin');

var NavigatableMixin          = require('./lib/NavigatableMixin');

var environment               = require('./lib/environment');

var CaptureClicks             = require('./lib/CaptureClicks');

module.exports = {
  Locations: Router.Locations,
  Pages: Router.Pages,

  Location: Route.Route,
  Page: Route.Route,
  NotFound: Route.NotFound,

  Link: Link,

  environment: environment,

  RouterMixin: RouterMixin,
  RouteRenderingMixin: RouteRenderingMixin,
  AsyncRouteRenderingMixin: AsyncRouteRenderingMixin,

  NavigatableMixin: NavigatableMixin,
  CaptureClicks: CaptureClicks
};

},{"./lib/AsyncRouteRenderingMixin":8,"./lib/CaptureClicks":9,"./lib/Link":10,"./lib/NavigatableMixin":11,"./lib/Route":12,"./lib/RouteRenderingMixin":13,"./lib/Router":14,"./lib/RouterMixin":15,"./lib/environment":20}],8:[function(require,module,exports){
"use strict";

var assign              = Object.assign || require('object.assign');
var prefetchAsyncState  = require('react-async/lib/prefetchAsyncState');
var isAsyncComponent    = require('react-async/lib/isAsyncComponent');
var RouteRenderingMixin = require('./RouteRenderingMixin');

/**
 * Mixin for router components which prefetches state of async components
 * (as in react-async).
 */
var AsyncRouteRenderingMixin = {
  mixins: [RouteRenderingMixin],

  setRoutingState: function(state, cb) {
    var currentHandler = this.state && this.state.handler;
    var nextHandler = state && state.handler;

    if (nextHandler && nextHandler.type && 
        isAsyncComponent(nextHandler) &&
        // if component's type is the same we would need to skip async state
        // update
        !(currentHandler && currentHandler.type === nextHandler.type)) {
      // store pending state and start fetching async state of a new handler
      this.setState(
        {pendingState: state},
        this.prefetchMatchHandlerState.bind(null, state, cb)
      );
    } else {
      this.replaceState(state, cb);
    }
  },

  hasPendingUpdate: function() {
    return !!this.state.pendingState;
  },

  prefetchMatchHandlerState: function(state, cb) {
    prefetchAsyncState(state.handler, function(err, handler) {
      // check if we router is still mounted and have the same match in state
      // as we started fetching state with
      if (this.isMounted() &&
          this.state.pendingState &&
          this.state.pendingState.match === state.match) {
        var nextState = assign({}, this.state.pendingState, {handler: handler});
        this.replaceState(nextState, cb);

      }
    }.bind(this));
  }
};

module.exports = AsyncRouteRenderingMixin;

},{"./RouteRenderingMixin":13,"object.assign":22,"react-async/lib/isAsyncComponent":25,"react-async/lib/prefetchAsyncState":26}],9:[function(require,module,exports){
"use strict";

var React       = require('react');
var urllite     = require('urllite/lib/core');
var Environment = require('./environment');
var assign      = Object.assign || require('object.assign');

/**
 * A container component which captures <a> clicks and, if there's a matching
 * route defined, routes them.
 */
var CaptureClicks = React.createClass({
  displayName: 'CaptureClicks',

  propTypes: {
    component: React.PropTypes.func.isRequired,
    environment: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      component: React.DOM.div,
      environment: Environment.defaultEnvironment,
      gotoURL: function(url) {
        // We should really just be allowing the event's default action, be we
        // can't make the decision to do that synchronously.
        window.location.href = url;
      }
    };
  },

  onClick: function(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    // Ignore canceled events, modified clicks, and right clicks.
    if (e.defaultPrevented) {
      return;
    }

    if (e.metaKey || e.ctrlKey || e.shiftKey) {
      return;
    }

    if (e.button !== 0) {
      return;
    }

    // Get the <a> element.
    var el = e.target;
    while (el && el.nodeName !== 'A') {
      el = el.parentNode;
    }

    // Ignore clicks from non-a elements.
    if (!el) {
      return;
    }

    // Ignore the click if the element has a target.
    if (el.target && el.target !== '_self') {
      return;
    }

    // Ignore the click if it's a download link. (We use this method of
    // detecting the presence of the attribute for old IE versions.)
    if (!!el.attributes.download) {
      return;
    }

    // Use a regular expression to parse URLs instead of relying on the browser
    // to do it for us (because IE).
    var url = urllite(el.href);
    var windowURL = urllite(window.location.href);

    // Ignore links that don't share a protocol and host with ours.
    if (url.protocol !== windowURL.protocol || url.host !== windowURL.host) {
      return;
    }

    // Ignore 'rel="external"' links.
    if (el.rel && /(?:^|\s+)external(?:\s+|$)/.test(el.rel)) {
      return;
    }

    e.preventDefault();

    // flag if we already found a "not found" case and bailed
    var bail = false;

    var onBeforeNavigation = function(path, navigation) {
      if (bail) {
        return false;
      } else if (!navigation.match || !navigation.match.match) {
        bail = true;
        this.props.gotoURL(el.href);
        return false;
      }
    }.bind(this);

    this.props.environment.navigate(
      url.pathname + (url.hash.length > 1 ? url.hash : ''),
      {onBeforeNavigation: onBeforeNavigation},
      function(err, info) {
        if (err) {
          throw err;
        }
      });
  },

  render: function() {
    var props = assign({}, this.props, {
      onClick: this.onClick
    });
    return this.props.component(props, this.props.children);
  }

});

module.exports = CaptureClicks;

},{"./environment":20,"object.assign":22,"react":173,"urllite/lib/core":175}],10:[function(require,module,exports){
"use strict";

var React             = require('react');
var NavigatableMixin  = require('./NavigatableMixin');
var Environment       = require('./environment');
var assign            = Object.assign || require('object.assign');

/**
 * Link.
 *
 * A basic navigatable component which renders into <a> DOM element and handles
 * onClick event by transitioning onto different route (defined by
 * this.props.href).
 */
var Link = React.createClass({
  mixins: [NavigatableMixin],

  displayName: 'Link',

  propTypes: {
    href: React.PropTypes.string.isRequired,
    global: React.PropTypes.bool,
    globalHash: React.PropTypes.bool
  },

  onClick: function(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    
    // return if the user did a middle-click, right-click, or used a modifier
    // key (like ctrl-click, meta-click, shift-click, etc.)
    if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

    if (!e.defaultPrevented) {
      e.preventDefault();
      this._navigate(this.props.href, function(err) {
        if (err) {
          throw err;
        }
      });
    }
  },

  _navigationParams: function() {
    var params = {};
    for (var k in this.props) {
      if (!this.constructor.propTypes[k]) {
        params[k] = this.props[k];
      }
    }
    return params;
  },

  _createHref: function() {
    return this.props.global ?
      Environment.defaultEnvironment.makeHref(this.props.href) :
      this.makeHref(this.props.href);
  },

  _navigate: function(path, cb) {
    if (this.props.globalHash) {
      return Environment.hashEnvironment.navigate(path, cb);
    }

    if (this.props.global) {
      return Environment.defaultEnvironment.navigate(path, cb);
    }

    return this.navigate(path, this._navigationParams(), cb);
  },

  render: function() {
    var props = assign({}, this.props, {
      onClick: this.onClick,
      href: this._createHref()
    });
    return React.DOM.a(props, this.props.children);
  }
});

module.exports = Link;

},{"./NavigatableMixin":11,"./environment":20,"object.assign":22,"react":173}],11:[function(require,module,exports){
"use strict";

var React       = require('react');
var Environment = require('./environment');


/**
 * NavigatableMixin
 *
 * A mixin for a component which operates in context of a router and can
 * navigate to a different route using `navigate(path, cb)` method.
 */
var NavigatableMixin = {

  contextTypes: {
    router: React.PropTypes.any
  },

  /**
   * @private
   */
  _getNavigable: function() {
    return this.context.router || Environment.defaultEnvironment;
  },

  getPath: function() {
    return this._getNavigable().getPath();
  },

  navigate: function(path, cb) {
    return this._getNavigable().navigate(path, cb);
  },

  makeHref: function(path) {
    return this._getNavigable().makeHref(path);
  }
};

module.exports = NavigatableMixin;

},{"./environment":20,"react":173}],12:[function(require,module,exports){
"use strict";

var React     = require('react');

function createClass(name) {
  return React.createClass({
    propTypes: {
      handler: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.func
      ]).isRequired,
      path: name === 'NotFound' ? 
        function(props, propName) {
          if (props[propName]) throw new Error("Don't pass a `path` to NotFound.");
        }
        : React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
      if (name === 'NotFound') {
        return {path: null};
      }
      return {};
    },
    render: function() {
      throw new Error(name + " is not meant to be directly rendered.");
    }
  });
}

module.exports = {
  /**
   * Regular route descriptor.
   *
   * @param {Object} spec
   */
  Route: createClass('Route'),
  /**
   * Catch all route descriptor.
   *
   * @param {Object} spec
   */
  NotFound: createClass('NotFound')
};

},{"react":173}],13:[function(require,module,exports){
"use strict";

var cloneWithProps = require('react/lib/cloneWithProps');

/**
 * Mixin for routers which implements the simplest rendering strategy.
 */
var RouteRenderingMixin = {

  renderRouteHandler: function() {
    var handler = this.state.handler;
    return cloneWithProps(handler, {ref: this.state.match.route.ref});
  }

};

module.exports = RouteRenderingMixin;

},{"react/lib/cloneWithProps":127}],14:[function(require,module,exports){
"use strict";

var React                     = require('react');
var RouterMixin               = require('./RouterMixin');
var AsyncRouteRenderingMixin  = require('./AsyncRouteRenderingMixin');
var assign                    = Object.assign || require('object.assign');

/**
 * Create a new router class
 *
 * @param {String} name
 * @param {ReactComponent} component
 */
function createRouter(name, component) {

  return React.createClass({

    mixins: [RouterMixin, AsyncRouteRenderingMixin],

    displayName: name,

    getRoutes: function(props) {
      return props.children;
    },

    getDefaultProps: function() {
      return {
        component: component
      }
    },

    render: function() {
      // Render the Route's handler.
      var handler = this.renderRouteHandler();
      // Pass all props except this component to the Router (containing div/body).
      var props = assign({}, this.props);
      delete props.component;
      return this.props.component(props, handler);
    }
  });
}

module.exports = {
  createRouter: createRouter,
  Locations: createRouter('Locations', React.DOM.div),
  Pages: createRouter('Pages', React.DOM.body)
}

},{"./AsyncRouteRenderingMixin":8,"./RouterMixin":15,"object.assign":22,"react":173}],15:[function(require,module,exports){
"use strict";

var React         = require('react');
var invariant     = require('react/lib/invariant');
var assign        = Object.assign || require('object.assign');
var matchRoutes   = require('./matchRoutes');
var Environment   = require('./environment');

var RouterMixin = {
  mixins: [Environment.Mixin],

  propTypes: {
    path: React.PropTypes.string,
    contextual: React.PropTypes.bool,
    onBeforeNavigation: React.PropTypes.func,
    onNavigation: React.PropTypes.func
  },

  childContextTypes: {
    router: React.PropTypes.any
  },

  getChildContext: function() {
    return {
      router: this
    };
  },

  contextTypes: {
    router: React.PropTypes.any
  },

  getInitialState: function() {
    return this.getRouterState(this.props);
  },

  componentWillReceiveProps: function(nextProps) {
    var nextState = this.getRouterState(nextProps);
    this.delegateSetRoutingState(nextState);
  },

  getRouterState: function(props) {
    var path;
    var prefix;

    var parent = this.getParentRouter();

    if (props.contextual && parent) {

      var parentMatch = parent.getMatch();

      invariant(
        props.path ||
        isString(parentMatch.unmatchedPath) ||
        parentMatch.matchedPath == parentMatch.path,
        "contextual router has nothing to match on: %s", parentMatch.unmatchedPath
      );

      path = props.path || parentMatch.unmatchedPath || '/';
      prefix = parent.state.prefix + parentMatch.matchedPath;
    } else {

      path = props.path || this.getEnvironment().getPath();

      invariant(
        isString(path),
        ("router operate in environment which cannot provide path, " +
         "pass it a path prop; or probably you want to make it contextual")
      );

      prefix = '';
    }

    if (path[0] !== '/') {
      path = '/' + path;
    }

    var match = matchRoutes(this.getRoutes(props), path);
    var handler = match.getHandler();

    return {
      match: match,
      handler: handler,
      prefix: prefix,
      navigation: {}
    };
  },

  getEnvironment: function() {
    if (this.props.environment) {
      return this.props.environment;
    }
    if (this.props.hash) {
      return Environment.hashEnvironment;
    }
    if (this.props.contextual && this.context.router) {
      return this.context.router.getEnvironment();
    }
    return Environment.defaultEnvironment;
  },

  /**
   * Return parent router or undefined.
   */
  getParentRouter: function() {
    var current = this.context.router;
    var environment = this.getEnvironment();

    while (current) {
      if (current.getEnvironment() === environment) {
        return current;
      }
    }
  },

  /**
   * Return current match.
   */
  getMatch: function() {
    return this.state.match;
  },

  /**
   * Make href scoped for the current router.
   */
  makeHref: function(href) {
    return join(this.state.prefix, href);
  },

  /**
   * Navigate to a path
   *
   * @param {String} path
   * @param {Function} navigation
   * @param {Callback} cb
   */
  navigate: function(path, navigation, cb) {
    path = join(this.state.prefix, path);
    this.getEnvironment().setPath(path, navigation, cb);
  },

  /**
   * Set new path.
   *
   * This function is called by environment.
   *
   * @private
   *
   * @param {String} path
   * @param {Function} navigation
   * @param {Callback} cb
   */
  setPath: function(path, navigation, cb) {
    var match = matchRoutes(this.getRoutes(this.props), path);
    var handler = match.getHandler();

    var state = {
      match: match,
      handler: handler,
      prefix: this.state.prefix,
      navigation: navigation
    };

    assign(navigation, {match: match});

    if (this.props.onBeforeNavigation &&
        this.props.onBeforeNavigation(path, navigation) === false) {
      return;
    }

    if (navigation.onBeforeNavigation &&
        navigation.onBeforeNavigation(path, navigation) === false) {
      return;
    }

    this.delegateSetRoutingState(state, function() {
      if (this.props.onNavigation) {
        this.props.onNavigation();
      }
      cb();
    }.bind(this));
  },

  /**
   * Return the current path
   */
  getPath: function () {
    return this.state.match.path;
  },

  /**
   * Try to delegate state update to a setRoutingState method (might be provided
   * by router itself) or use replaceState.
   */
  delegateSetRoutingState: function(state, cb) {
    if (this.setRoutingState) {
      this.setRoutingState(state, cb);
    } else {
      this.replaceState(state, cb);
    }
  }

};

function join(a, b) {
  return (a + b).replace(/\/\//g, '/');
}

function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
}

module.exports = RouterMixin;

},{"./environment":20,"./matchRoutes":21,"object.assign":22,"react":173,"react/lib/invariant":153}],16:[function(require,module,exports){
"use strict";

var Environment   = require('./Environment');
var emptyFunction = require('react/lib/emptyFunction');

/**
 * Dummy routing environment which provides no path.
 *
 * Should be used on server or in WebWorker.
 */
function DummyEnvironment() {
  Environment.call(this);
}

DummyEnvironment.prototype = Object.create(Environment.prototype);
DummyEnvironment.prototype.constructor = DummyEnvironment;

DummyEnvironment.prototype.getPath = emptyFunction.thatReturnsNull;

DummyEnvironment.prototype.setPath = function(path, navigation, cb) {
  // Support old (path, cb) arity
  if (typeof navigation === 'function' && cb === undefined) {
    cb = navigation;
    navigation = {};
  }
  this.path = path;
  cb();
};

DummyEnvironment.prototype.start = emptyFunction;

DummyEnvironment.prototype.stop = emptyFunction;

module.exports = DummyEnvironment;

},{"./Environment":17,"react/lib/emptyFunction":134}],17:[function(require,module,exports){
"use strict";

var ReactUpdates  = require('react/lib/ReactUpdates');

/**
 * Base abstract class for a routing environment.
 *
 * @private
 */
function Environment() {
  this.routers = [];
  this.path = this.getPath();
}

/**
 * Notify routers about the change.
 *
 * @param {Object} navigation
 * @param {Function} cb
 */
Environment.prototype.notify = function notify(navigation, cb) {
  var latch = this.routers.length;

  if (latch === 0) {
    return cb && cb();
  }

  function callback() {
    latch -= 1;
    if (cb && latch === 0) {
      cb();
    }
  }

  ReactUpdates.batchedUpdates(function() {
    for (var i = 0, len = this.routers.length; i < len; i++) {
      this.routers[i].setPath(this.path, navigation, callback);
    }
  }.bind(this));
}

Environment.prototype.makeHref = function makeHref(path) {
  return path;
}

Environment.prototype.navigate = function navigate(path, navigation, cb) {
  return this.setPath(path, navigation, cb);
}

Environment.prototype.setPath = function(path, navigation, cb) {
  // Support (path, cb) arity.
  if (typeof navigation === 'function' && cb === undefined) {
    cb = navigation;
    navigation = {};
  }
  // Support (path) arity.
  if (!navigation) navigation = {};

  if (!navigation.isPopState) {
    if (navigation.replace) {
      this.replaceState(path, navigation);
    } else {
      this.pushState(path, navigation);
    }
  }
  this.path = path;
  this.notify(navigation, cb);
}

/**
 * Register router with an environment.
 */
Environment.prototype.register = function register(router) {
  if (this.routers.length === 0) {
    this.start();
  }

  if (router.getParentRouter === undefined || !router.getParentRouter()) {
    this.routers.push(router);
  }
}

/**
 * Unregister router from an environment.
 */
Environment.prototype.unregister = function unregister(router) {
  if (this.routers.indexOf(router) > -1) {
    this.routers.splice(this.routers.indexOf(router), 1);
  }

  if (this.routers.length === 0) {
    this.stop();
  }
}

module.exports = Environment;

},{"react/lib/ReactUpdates":105}],18:[function(require,module,exports){
"use strict";

var Environment = require('./Environment');

/**
 * Routing environment which routes by `location.hash`.
 */
function HashEnvironment() {
  this.onHashChange = this.onHashChange.bind(this);
  Environment.call(this);
}

HashEnvironment.prototype = Object.create(Environment.prototype);
HashEnvironment.prototype.constructor = HashEnvironment;

HashEnvironment.prototype.getPath = function() {
  return window.location.hash.slice(1) || '/';
};

HashEnvironment.prototype.pushState = function(path, navigation) {
  window.location.hash = path;
}

HashEnvironment.prototype.replaceState = function(path, navigation) {
  var href = window.location.href.replace(/(javascript:|#).*$/, '');
  window.location.replace(href + '#' + path);
}

HashEnvironment.prototype.start = function() {
  if (window.addEventListener) {
    window.addEventListener('hashchange', this.onHashChange);
  } else {
    window.attachEvent('onhashchange', this.onHashChange);
  }
};

HashEnvironment.prototype.stop = function() {
  if (window.removeEventListener) {
    window.removeEventListener('hashchange', this.onHashChange);
  } else {
    window.detachEvent('onhashchange', this.onHashChange);
  }
};

HashEnvironment.prototype.onHashChange = function() {
  var path = this.getPath();

  if (this.path !== path) {
    this.setPath(path, {isPopState: true});
  }
};

module.exports = HashEnvironment;

},{"./Environment":17}],19:[function(require,module,exports){
"use strict";

var Environment = require('./Environment');

/**
 * Routing environment which routes by `location.pathname`.
 */
function PathnameEnvironment() {
  this.onPopState = this.onPopState.bind(this);
  Environment.call(this);
}

PathnameEnvironment.prototype = Object.create(Environment.prototype);
PathnameEnvironment.prototype.constructor = PathnameEnvironment;

PathnameEnvironment.prototype.getPath = function() {
  return window.location.pathname;
}

PathnameEnvironment.prototype.pushState = function(path, navigation) {
  window.history.pushState({}, '', path);
}

PathnameEnvironment.prototype.replaceState = function(path, navigation) {
  window.history.replaceState({}, '', path);
}

PathnameEnvironment.prototype.start = function() {
  if (window.addEventListener) {
    window.addEventListener('popstate', this.onPopState);
  }
};

PathnameEnvironment.prototype.stop = function() {
  if (window.removeEventListener) {
    window.removeEventListener('popstate', this.onPopState);
  }
};

PathnameEnvironment.prototype.onPopState = function(e) {
  var path = window.location.pathname;

  if (this.path !== path) {
    this.setPath(path, {isPopState: true});
  }
};

module.exports = PathnameEnvironment;

},{"./Environment":17}],20:[function(require,module,exports){
"use strict";
/**
 * Routing environment.
 *
 * It specifies how routers read its state from DOM and synchronise it back.
 */

var ExecutionEnvironment  = require('react/lib/ExecutionEnvironment');
var DummyEnvironment      = require('./DummyEnvironment');
var Environment           = require('./Environment');

/**
 * Mixin for routes to keep attached to an environment.
 *
 * This mixin assumes the environment is passed via props.
 */
var Mixin = {

  componentDidMount: function() {
    this.getEnvironment().register(this);
  },

  componentWillUnmount: function() {
    this.getEnvironment().unregister(this);
  }
};

var PathnameEnvironment;
var HashEnvironment;

var pathnameEnvironment;
var hashEnvironment;
var defaultEnvironment;
var dummyEnvironment;

if (ExecutionEnvironment.canUseDOM) {

  PathnameEnvironment = require('./PathnameEnvironment');
  HashEnvironment     = require('./HashEnvironment');

  pathnameEnvironment = new PathnameEnvironment();
  hashEnvironment     = new HashEnvironment();
  defaultEnvironment  = (window.history !== undefined &&
                         window.history.pushState !== undefined) ?
                        pathnameEnvironment :
                        hashEnvironment;

} else {

  dummyEnvironment    = new DummyEnvironment();
  pathnameEnvironment = dummyEnvironment;
  hashEnvironment     = dummyEnvironment;
  defaultEnvironment  = dummyEnvironment;

}

module.exports = {
  pathnameEnvironment: pathnameEnvironment,
  hashEnvironment: hashEnvironment,
  defaultEnvironment: defaultEnvironment,
  dummyEnvironment: dummyEnvironment,

  Environment: Environment,
  PathnameEnvironment: PathnameEnvironment,
  HashEnvironment: HashEnvironment,

  Mixin: Mixin
};

},{"./DummyEnvironment":16,"./Environment":17,"./HashEnvironment":18,"./PathnameEnvironment":19,"react/lib/ExecutionEnvironment":47}],21:[function(require,module,exports){
(function (process){
"use strict";

var pattern   = require('url-pattern');
var assign    = Object.assign || require('object.assign');
var invariant = require('react/lib/invariant');
var React     = require('react');

/**
 * Match routes against a path
 *
 * @param {Array.<Route>} routes
 * @param {String} path
 */
function matchRoutes(routes, path) {
  var match, page, notFound;

  if (!Array.isArray(routes)) {
    routes = [routes];
  }

  for (var i = 0, len = routes.length; i < len; i++) {
    var current = routes[i];
    // Simply skip null or undefined to allow ternaries in route definitions
    if (!current) continue;

    // We expect to be passed an Element. If we weren't, and were just passed props,
    // mock an Element's structure.
    if (!React.isValidElement(current)) {
      current = {props: current, ref: current.ref};
    }

    if (process.env.NODE_ENV !== "production") {
      invariant(
        current.props.handler !== undefined && current.props.path !== undefined,
        "Router should contain either Route or NotFound components " +
        "as routes")
    }

    if (current.props.path) {
      current.props.pattern = current.props.pattern || pattern.newPattern(current.props.path);
      if (!page) {
        match = current.props.pattern.match(path);
        if (match) {
          page = current;
        }
        // Regex matches are not named, so they go in the `_` array, much like splats.
        if (Array.isArray(match)) {
          match = {_: match};
        }
      }
    }
    if (!notFound && current.props.path === null) {
      notFound = current;
    }
  }

  return new Match(
    path,
    page ? page : notFound ? notFound : null,
    match
  );
}

/**
 * Match object
 *
 * @private
 */
function Match(path, route, match) {
  this.path = path;
  this.route = route;
  this.match = match;

  this.unmatchedPath = this.match && this.match._ ?
    this.match._[0] :
    null;

  this.matchedPath = this.unmatchedPath ?
    this.path.substring(0, this.path.length - this.unmatchedPath.length) :
    this.path;
}

Match.prototype.getHandler = function() {
  if (!this.route) return undefined;
  var props = assign({}, this.route.props, this.match);
  delete props.pattern;
  delete props.path;
  delete props.handler;
  return this.route.props.handler(props);
}

module.exports = matchRoutes;

}).call(this,require("oMfpAn"))
},{"oMfpAn":6,"object.assign":22,"react":173,"react/lib/invariant":153,"url-pattern":174}],22:[function(require,module,exports){
"use strict";

// modified from https://github.com/es-shims/es6-shim
var keys = require('object-keys');
var isObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};

var assignShim = function assign(target, source1) {
	var objTarget, s, source, i, props;
	if (!isObject(target)) { throw new TypeError('target must be an object'); }
	objTarget = Object(target);
	for (s = 1; s < arguments.length; ++s) {
		source = arguments[s];
		props = keys(Object(source));
		for (i = 0; i < props.length; ++i) {
			objTarget[props[i]] = source[props[i]];
		}
	}
	return objTarget;
};

assignShim.shim = function shimObjectAssign() {
	if (!Object.assign) {
		Object.assign = assignShim;
	}
	return Object.assign || assignShim;
};

module.exports = assignShim;


},{"object-keys":23}],23:[function(require,module,exports){
"use strict";

// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
var isArgs = require('./isArguments');
var hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString');
var hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype');
var dontEnums = [
	"toString",
	"toLocaleString",
	"valueOf",
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"constructor"
];

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toString.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toString.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError("Object.keys called on a non-object");
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var ctor = object.constructor;
		var skipConstructor = ctor && ctor.prototype === object;

		for (var j = 0; j < dontEnums.length; ++j) {
			if (!(skipConstructor && dontEnums[j] === 'constructor') && has.call(object, dontEnums[j])) {
				theKeys.push(dontEnums[j]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (!Object.keys) {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


},{"./isArguments":24}],24:[function(require,module,exports){
"use strict";

var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};


},{}],25:[function(require,module,exports){
"use strict";

/**
 * Check if a component is an async component.
 *
 * @param {ReactComponent} component
 */
function isAsyncComponent(component) {
  return component.type.prototype && typeof component.type.prototype.getInitialStateAsync === 'function';
}

module.exports = isAsyncComponent;

},{}],26:[function(require,module,exports){
"use strict";

var invariant         = require('react/lib/invariant');
var cloneWithProps    = require('react/lib/cloneWithProps');
var isAsyncComponent  = require('./isAsyncComponent');

/**
 * Prefetch an async state for an unmounted async component instance.
 *
 * @param {ReactComponent} component
 * @param {Callback} cb
 */
function prefetchAsyncState(component, cb) {

  invariant(
    isAsyncComponent(component),
    "%s should be an async component to be able to prefetch async state, " +
    "but getInitialStateAsync(cb) method is missing or is not a function",
    component.displayName
  );

  var cloneCallback = function(err, asyncState) {
    if (err) {
      return cb(err);
    }

    cb(null, cloneWithProps(component, {asyncState: asyncState || {}}));
  };
  var getInitialStateAsync = component.type.prototype.getInitialStateAsync;
  var promise = getInitialStateAsync.call(component, cloneCallback);

  if (promise && typeof promise.then === 'function') {
    promise.then(cloneCallback.bind(cloneCallback, null), cloneCallback);
  }
}

module.exports = prefetchAsyncState;

},{"./isAsyncComponent":25,"react/lib/cloneWithProps":127,"react/lib/invariant":153}],27:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */

"use strict";

var focusNode = require("./focusNode");

var AutoFocusMixin = {
  componentDidMount: function() {
    if (this.props.autoFocus) {
      focusNode(this.getDOMNode());
    }
  }
};

module.exports = AutoFocusMixin;

},{"./focusNode":138}],28:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var SyntheticInputEvent = require("./SyntheticInputEvent");

var keyOf = require("./keyOf");

var canUseTextInputEvent = (
  ExecutionEnvironment.canUseDOM &&
  'TextEvent' in window &&
  !('documentMode' in document || isPresto())
);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function isPresto() {
  var opera = window.opera;
  return (
    typeof opera === 'object' &&
    typeof opera.version === 'function' &&
    parseInt(opera.version(), 10) <= 12
  );
}

var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

var topLevelTypes = EventConstants.topLevelTypes;

// Events and their corresponding property names.
var eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: keyOf({onBeforeInput: null}),
      captured: keyOf({onBeforeInputCapture: null})
    },
    dependencies: [
      topLevelTypes.topCompositionEnd,
      topLevelTypes.topKeyPress,
      topLevelTypes.topTextInput,
      topLevelTypes.topPaste
    ]
  }
};

// Track characters inserted via keypress and composition events.
var fallbackChars = null;

// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (
    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(nativeEvent.ctrlKey && nativeEvent.altKey)
  );
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 */
var BeforeInputEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var chars;

    if (canUseTextInputEvent) {
      switch (topLevelType) {
        case topLevelTypes.topKeyPress:
          /**
           * If native `textInput` events are available, our goal is to make
           * use of them. However, there is a special case: the spacebar key.
           * In Webkit, preventing default on a spacebar `textInput` event
           * cancels character insertion, but it *also* causes the browser
           * to fall back to its default spacebar behavior of scrolling the
           * page.
           *
           * Tracking at:
           * https://code.google.com/p/chromium/issues/detail?id=355103
           *
           * To avoid this issue, use the keypress event as if no `textInput`
           * event is available.
           */
          var which = nativeEvent.which;
          if (which !== SPACEBAR_CODE) {
            return;
          }

          hasSpaceKeypress = true;
          chars = SPACEBAR_CHAR;
          break;

        case topLevelTypes.topTextInput:
          // Record the characters to be added to the DOM.
          chars = nativeEvent.data;

          // If it's a spacebar character, assume that we have already handled
          // it at the keypress level and bail immediately. Android Chrome
          // doesn't give us keycodes, so we need to blacklist it.
          if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
            return;
          }

          // Otherwise, carry on.
          break;

        default:
          // For other native event types, do nothing.
          return;
      }
    } else {
      switch (topLevelType) {
        case topLevelTypes.topPaste:
          // If a paste event occurs after a keypress, throw out the input
          // chars. Paste events should not lead to BeforeInput events.
          fallbackChars = null;
          break;
        case topLevelTypes.topKeyPress:
          /**
           * As of v27, Firefox may fire keypress events even when no character
           * will be inserted. A few possibilities:
           *
           * - `which` is `0`. Arrow keys, Esc key, etc.
           *
           * - `which` is the pressed key code, but no char is available.
           *   Ex: 'AltGr + d` in Polish. There is no modified character for
           *   this key combination and no character is inserted into the
           *   document, but FF fires the keypress for char code `100` anyway.
           *   No `input` event will occur.
           *
           * - `which` is the pressed key code, but a command combination is
           *   being used. Ex: `Cmd+C`. No character is inserted, and no
           *   `input` event will occur.
           */
          if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
            fallbackChars = String.fromCharCode(nativeEvent.which);
          }
          break;
        case topLevelTypes.topCompositionEnd:
          fallbackChars = nativeEvent.data;
          break;
      }

      // If no changes have occurred to the fallback string, no relevant
      // event has fired and we're done.
      if (fallbackChars === null) {
        return;
      }

      chars = fallbackChars;
    }

    // If no characters are being inserted, no BeforeInput event should
    // be fired.
    if (!chars) {
      return;
    }

    var event = SyntheticInputEvent.getPooled(
      eventTypes.beforeInput,
      topLevelTargetID,
      nativeEvent
    );

    event.data = chars;
    fallbackChars = null;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
};

module.exports = BeforeInputEventPlugin;

},{"./EventConstants":41,"./EventPropagators":46,"./ExecutionEnvironment":47,"./SyntheticInputEvent":115,"./keyOf":160}],29:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

"use strict";

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  columnCount: true,
  fillOpacity: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop) {
  prefixes.forEach(function(prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundImage: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundColor: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

module.exports = CSSProperty;

},{}],30:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */

"use strict";

var CSSProperty = require("./CSSProperty");
var ExecutionEnvironment = require("./ExecutionEnvironment");

var camelizeStyleName = require("./camelizeStyleName");
var dangerousStyleValue = require("./dangerousStyleValue");
var hyphenateStyleName = require("./hyphenateStyleName");
var memoizeStringOnly = require("./memoizeStringOnly");
var warning = require("./warning");

var processStyleName = memoizeStringOnly(function(styleName) {
  return hyphenateStyleName(styleName);
});

var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';
  }
}

if ("production" !== process.env.NODE_ENV) {
  var warnedStyleNames = {};

  var warnHyphenatedStyleName = function(name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'Unsupported style property ' + name + '. Did you mean ' +
      camelizeStyleName(name) + '?'
    ) : null);
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = {

  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */
  createMarkupForStyles: function(styles) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if ("production" !== process.env.NODE_ENV) {
        if (styleName.indexOf('-') > -1) {
          warnHyphenatedStyleName(styleName);
        }
      }
      var styleValue = styles[styleName];
      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */
  setValueForStyles: function(node, styles) {
    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if ("production" !== process.env.NODE_ENV) {
        if (styleName.indexOf('-') > -1) {
          warnHyphenatedStyleName(styleName);
        }
      }
      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
      if (styleName === 'float') {
        styleName = styleFloatAccessor;
      }
      if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }

};

module.exports = CSSPropertyOperations;

}).call(this,require("oMfpAn"))
},{"./CSSProperty":29,"./ExecutionEnvironment":47,"./camelizeStyleName":126,"./dangerousStyleValue":132,"./hyphenateStyleName":151,"./memoizeStringOnly":162,"./warning":172,"oMfpAn":6}],31:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */

"use strict";

var PooledClass = require("./PooledClass");

var assign = require("./Object.assign");
var invariant = require("./invariant");

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */
function CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;
}

assign(CallbackQueue.prototype, {

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
  enqueue: function(callback, context) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(callback);
    this._contexts.push(context);
  },

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */
  notifyAll: function() {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    if (callbacks) {
      ("production" !== process.env.NODE_ENV ? invariant(
        callbacks.length === contexts.length,
        "Mismatched list of contexts in callback queue"
      ) : invariant(callbacks.length === contexts.length));
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0, l = callbacks.length; i < l; i++) {
        callbacks[i].call(contexts[i]);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  },

  /**
   * Resets the internal queue.
   *
   * @internal
   */
  reset: function() {
    this._callbacks = null;
    this._contexts = null;
  },

  /**
   * `PooledClass` looks for this.
   */
  destructor: function() {
    this.reset();
  }

});

PooledClass.addPoolingTo(CallbackQueue);

module.exports = CallbackQueue;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./PooledClass":53,"./invariant":153,"oMfpAn":6}],32:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var ReactUpdates = require("./ReactUpdates");
var SyntheticEvent = require("./SyntheticEvent");

var isEventSupported = require("./isEventSupported");
var isTextInputElement = require("./isTextInputElement");
var keyOf = require("./keyOf");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: keyOf({onChange: null}),
      captured: keyOf({onChangeCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topChange,
      topLevelTypes.topClick,
      topLevelTypes.topFocus,
      topLevelTypes.topInput,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyUp,
      topLevelTypes.topSelectionChange
    ]
  }
};

/**
 * For IE shims
 */
var activeElement = null;
var activeElementID = null;
var activeElementValue = null;
var activeElementValueProp = null;

/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  return (
    elem.nodeName === 'SELECT' ||
    (elem.nodeName === 'INPUT' && elem.type === 'file')
  );
}

var doesChangeEventBubble = false;
if (ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  doesChangeEventBubble = isEventSupported('change') && (
    !('documentMode' in document) || document.documentMode > 8
  );
}

function manualDispatchChangeEvent(nativeEvent) {
  var event = SyntheticEvent.getPooled(
    eventTypes.change,
    activeElementID,
    nativeEvent
  );
  EventPropagators.accumulateTwoPhaseDispatches(event);

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  ReactUpdates.batchedUpdates(runEventInBatch, event);
}

function runEventInBatch(event) {
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue();
}

function startWatchingForChangeEventIE8(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
}

function stopWatchingForChangeEventIE8() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
  activeElement = null;
  activeElementID = null;
}

function getTargetIDForChangeEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topChange) {
    return topLevelTargetID;
  }
}
function handleEventsForChangeEventIE8(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForChangeEventIE8();
    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForChangeEventIE8();
  }
}


/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events
  isInputEventSupported = isEventSupported('input') && (
    !('documentMode' in document) || document.documentMode > 9
  );
}

/**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */
var newValueProp =  {
  get: function() {
    return activeElementValueProp.get.call(this);
  },
  set: function(val) {
    // Cast to a string so we can do equality checks.
    activeElementValue = '' + val;
    activeElementValueProp.set.call(this, val);
  }
};

/**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElementValue = target.value;
  activeElementValueProp = Object.getOwnPropertyDescriptor(
    target.constructor.prototype,
    'value'
  );

  Object.defineProperty(activeElement, 'value', newValueProp);
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}

/**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }

  // delete restores the original property definition
  delete activeElement.value;
  activeElement.detachEvent('onpropertychange', handlePropertyChange);

  activeElement = null;
  activeElementID = null;
  activeElementValue = null;
  activeElementValueProp = null;
}

/**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  var value = nativeEvent.srcElement.value;
  if (value === activeElementValue) {
    return;
  }
  activeElementValue = value;

  manualDispatchChangeEvent(nativeEvent);
}

/**
 * If a `change` event should be fired, returns the target's ID.
 */
function getTargetIDForInputEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topInput) {
    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
    // what we want so fall through here and trigger an abstract event
    return topLevelTargetID;
  }
}

// For IE8 and IE9.
function handleEventsForInputEventIE(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function getTargetIDForInputEventIE(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topSelectionChange ||
      topLevelType === topLevelTypes.topKeyUp ||
      topLevelType === topLevelTypes.topKeyDown) {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    if (activeElement && activeElement.value !== activeElementValue) {
      activeElementValue = activeElement.value;
      return activeElementID;
    }
  }
}


/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  return (
    elem.nodeName === 'INPUT' &&
    (elem.type === 'checkbox' || elem.type === 'radio')
  );
}

function getTargetIDForClickEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topClick) {
    return topLevelTargetID;
  }
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var getTargetIDFunc, handleEventFunc;
    if (shouldUseChangeEvent(topLevelTarget)) {
      if (doesChangeEventBubble) {
        getTargetIDFunc = getTargetIDForChangeEvent;
      } else {
        handleEventFunc = handleEventsForChangeEventIE8;
      }
    } else if (isTextInputElement(topLevelTarget)) {
      if (isInputEventSupported) {
        getTargetIDFunc = getTargetIDForInputEvent;
      } else {
        getTargetIDFunc = getTargetIDForInputEventIE;
        handleEventFunc = handleEventsForInputEventIE;
      }
    } else if (shouldUseClickEvent(topLevelTarget)) {
      getTargetIDFunc = getTargetIDForClickEvent;
    }

    if (getTargetIDFunc) {
      var targetID = getTargetIDFunc(
        topLevelType,
        topLevelTarget,
        topLevelTargetID
      );
      if (targetID) {
        var event = SyntheticEvent.getPooled(
          eventTypes.change,
          targetID,
          nativeEvent
        );
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(
        topLevelType,
        topLevelTarget,
        topLevelTargetID
      );
    }
  }

};

module.exports = ChangeEventPlugin;

},{"./EventConstants":41,"./EventPluginHub":43,"./EventPropagators":46,"./ExecutionEnvironment":47,"./ReactUpdates":105,"./SyntheticEvent":113,"./isEventSupported":154,"./isTextInputElement":156,"./keyOf":160}],33:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */

"use strict";

var nextReactRootIndex = 0;

var ClientReactRootIndex = {
  createReactRootIndex: function() {
    return nextReactRootIndex++;
  }
};

module.exports = ClientReactRootIndex;

},{}],34:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CompositionEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var ReactInputSelection = require("./ReactInputSelection");
var SyntheticCompositionEvent = require("./SyntheticCompositionEvent");

var getTextContentAccessor = require("./getTextContentAccessor");
var keyOf = require("./keyOf");

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var useCompositionEvent = (
  ExecutionEnvironment.canUseDOM &&
  'CompositionEvent' in window
);

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. In Korean, for example,
// the compositionend event contains only one character regardless of
// how many characters have been composed since compositionstart.
// We therefore use the fallback data while still using the native
// events as triggers.
var useFallbackData = (
  !useCompositionEvent ||
  (
    'documentMode' in document &&
    document.documentMode > 8 &&
    document.documentMode <= 11
  )
);

var topLevelTypes = EventConstants.topLevelTypes;
var currentComposition = null;

// Events and their corresponding property names.
var eventTypes = {
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionEnd: null}),
      captured: keyOf({onCompositionEndCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionEnd,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionStart: null}),
      captured: keyOf({onCompositionStartCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionStart,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionUpdate: null}),
      captured: keyOf({onCompositionUpdateCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionUpdate,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  }
};

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionStart:
      return eventTypes.compositionStart;
    case topLevelTypes.topCompositionEnd:
      return eventTypes.compositionEnd;
    case topLevelTypes.topCompositionUpdate:
      return eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackStart(topLevelType, nativeEvent) {
  return (
    topLevelType === topLevelTypes.topKeyDown &&
    nativeEvent.keyCode === START_KEYCODE
  );
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topKeyUp:
      // Command keys insert or clear IME input.
      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
    case topLevelTypes.topKeyDown:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return (nativeEvent.keyCode !== START_KEYCODE);
    case topLevelTypes.topKeyPress:
    case topLevelTypes.topMouseDown:
    case topLevelTypes.topBlur:
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Helper class stores information about selection and document state
 * so we can figure out what changed at a later date.
 *
 * @param {DOMEventTarget} root
 */
function FallbackCompositionState(root) {
  this.root = root;
  this.startSelection = ReactInputSelection.getSelection(root);
  this.startValue = this.getText();
}

/**
 * Get current text of input.
 *
 * @return {string}
 */
FallbackCompositionState.prototype.getText = function() {
  return this.root.value || this.root[getTextContentAccessor()];
};

/**
 * Text that has changed since the start of composition.
 *
 * @return {string}
 */
FallbackCompositionState.prototype.getData = function() {
  var endValue = this.getText();
  var prefixLength = this.startSelection.start;
  var suffixLength = this.startValue.length - this.startSelection.end;

  return endValue.substr(
    prefixLength,
    endValue.length - suffixLength - prefixLength
  );
};

/**
 * This plugin creates `onCompositionStart`, `onCompositionUpdate` and
 * `onCompositionEnd` events on inputs, textareas and contentEditable
 * nodes.
 */
var CompositionEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var eventType;
    var data;

    if (useCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }

    if (useFallbackData) {
      // The current composition is stored statically and must not be
      // overwritten while composition continues.
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = new FallbackCompositionState(topLevelTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          data = currentComposition.getData();
          currentComposition = null;
        }
      }
    }

    if (eventType) {
      var event = SyntheticCompositionEvent.getPooled(
        eventType,
        topLevelTargetID,
        nativeEvent
      );
      if (data) {
        // Inject data generated from fallback path into the synthetic event.
        // This matches the property of native CompositionEventInterface.
        event.data = data;
      }
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    }
  }
};

module.exports = CompositionEventPlugin;

},{"./EventConstants":41,"./EventPropagators":46,"./ExecutionEnvironment":47,"./ReactInputSelection":85,"./SyntheticCompositionEvent":111,"./getTextContentAccessor":148,"./keyOf":160}],35:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */

"use strict";

var Danger = require("./Danger");
var ReactMultiChildUpdateTypes = require("./ReactMultiChildUpdateTypes");

var getTextContentAccessor = require("./getTextContentAccessor");
var invariant = require("./invariant");

/**
 * The DOM property to use when setting text content.
 *
 * @type {string}
 * @private
 */
var textContentAccessor = getTextContentAccessor();

/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
function insertChildAt(parentNode, childNode, index) {
  // By exploiting arrays returning `undefined` for an undefined index, we can
  // rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. However, using `undefined` is not allowed by all
  // browsers so we must replace it with `null`.
  parentNode.insertBefore(
    childNode,
    parentNode.childNodes[index] || null
  );
}

var updateTextContent;
if (textContentAccessor === 'textContent') {
  /**
   * Sets the text content of `node` to `text`.
   *
   * @param {DOMElement} node Node to change
   * @param {string} text New text content
   */
  updateTextContent = function(node, text) {
    node.textContent = text;
  };
} else {
  /**
   * Sets the text content of `node` to `text`.
   *
   * @param {DOMElement} node Node to change
   * @param {string} text New text content
   */
  updateTextContent = function(node, text) {
    // In order to preserve newlines correctly, we can't use .innerText to set
    // the contents (see #1080), so we empty the element then append a text node
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    if (text) {
      var doc = node.ownerDocument || document;
      node.appendChild(doc.createTextNode(text));
    }
  };
}

/**
 * Operations for updating with DOM children.
 */
var DOMChildrenOperations = {

  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

  updateTextContent: updateTextContent,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */
  processUpdates: function(updates, markupList) {
    var update;
    // Mapping from parent IDs to initial child orderings.
    var initialChildren = null;
    // List of children that will be moved or removed.
    var updatedChildren = null;

    for (var i = 0; update = updates[i]; i++) {
      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING ||
          update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
        var updatedIndex = update.fromIndex;
        var updatedChild = update.parentNode.childNodes[updatedIndex];
        var parentID = update.parentID;

        ("production" !== process.env.NODE_ENV ? invariant(
          updatedChild,
          'processUpdates(): Unable to find child %s of element. This ' +
          'probably means the DOM was unexpectedly mutated (e.g., by the ' +
          'browser), usually due to forgetting a <tbody> when using tables, ' +
          'nesting tags like <form>, <p>, or <a>, or using non-SVG elements '+
          'in an <svg> parent. Try inspecting the child nodes of the element ' +
          'with React ID `%s`.',
          updatedIndex,
          parentID
        ) : invariant(updatedChild));

        initialChildren = initialChildren || {};
        initialChildren[parentID] = initialChildren[parentID] || [];
        initialChildren[parentID][updatedIndex] = updatedChild;

        updatedChildren = updatedChildren || [];
        updatedChildren.push(updatedChild);
      }
    }

    var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);

    // Remove updated children first so that `toIndex` is consistent.
    if (updatedChildren) {
      for (var j = 0; j < updatedChildren.length; j++) {
        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
      }
    }

    for (var k = 0; update = updates[k]; k++) {
      switch (update.type) {
        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
          insertChildAt(
            update.parentNode,
            renderedMarkup[update.markupIndex],
            update.toIndex
          );
          break;
        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
          insertChildAt(
            update.parentNode,
            initialChildren[update.parentID][update.fromIndex],
            update.toIndex
          );
          break;
        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
          updateTextContent(
            update.parentNode,
            update.textContent
          );
          break;
        case ReactMultiChildUpdateTypes.REMOVE_NODE:
          // Already removed by the for-loop above.
          break;
      }
    }
  }

};

module.exports = DOMChildrenOperations;

}).call(this,require("oMfpAn"))
},{"./Danger":38,"./ReactMultiChildUpdateTypes":91,"./getTextContentAccessor":148,"./invariant":153,"oMfpAn":6}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */

/*jslint bitwise: true */

"use strict";

var invariant = require("./invariant");

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_ATTRIBUTE: 0x1,
  MUST_USE_PROPERTY: 0x2,
  HAS_SIDE_EFFECTS: 0x4,
  HAS_BOOLEAN_VALUE: 0x8,
  HAS_NUMERIC_VALUE: 0x10,
  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function(domPropertyConfig) {
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(
        domPropertyConfig.isCustomAttribute
      );
    }

    for (var propName in Properties) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !DOMProperty.isStandardName.hasOwnProperty(propName),
        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
        '\'%s\' which has already been injected. You may be accidentally ' +
        'injecting the same DOM property config twice, or you may be ' +
        'injecting two configs that have conflicting property names.',
        propName
      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));

      DOMProperty.isStandardName[propName] = true;

      var lowerCased = propName.toLowerCase();
      DOMProperty.getPossibleStandardName[lowerCased] = propName;

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        DOMProperty.getPossibleStandardName[attributeName] = propName;
        DOMProperty.getAttributeName[propName] = attributeName;
      } else {
        DOMProperty.getAttributeName[propName] = lowerCased;
      }

      DOMProperty.getPropertyName[propName] =
        DOMPropertyNames.hasOwnProperty(propName) ?
          DOMPropertyNames[propName] :
          propName;

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
      } else {
        DOMProperty.getMutationMethod[propName] = null;
      }

      var propConfig = Properties[propName];
      DOMProperty.mustUseAttribute[propName] =
        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
      DOMProperty.mustUseProperty[propName] =
        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
      DOMProperty.hasSideEffects[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
      DOMProperty.hasBooleanValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
      DOMProperty.hasNumericValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
      DOMProperty.hasPositiveNumericValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
      DOMProperty.hasOverloadedBooleanValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

      ("production" !== process.env.NODE_ENV ? invariant(
        !DOMProperty.mustUseAttribute[propName] ||
          !DOMProperty.mustUseProperty[propName],
        'DOMProperty: Cannot require using both attribute and property: %s',
        propName
      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
        !DOMProperty.mustUseProperty[propName]));
      ("production" !== process.env.NODE_ENV ? invariant(
        DOMProperty.mustUseProperty[propName] ||
          !DOMProperty.hasSideEffects[propName],
        'DOMProperty: Properties that have side effects must use property: %s',
        propName
      ) : invariant(DOMProperty.mustUseProperty[propName] ||
        !DOMProperty.hasSideEffects[propName]));
      ("production" !== process.env.NODE_ENV ? invariant(
        !!DOMProperty.hasBooleanValue[propName] +
          !!DOMProperty.hasNumericValue[propName] +
          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
        'numeric value, but not a combination: %s',
        propName
      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
        !!DOMProperty.hasNumericValue[propName] +
        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
    }
  }
};
var defaultValueCache = {};

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {

  ID_ATTRIBUTE_NAME: 'data-reactid',

  /**
   * Checks whether a property name is a standard property.
   * @type {Object}
   */
  isStandardName: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties.
   * @type {Object}
   */
  getPossibleStandardName: {},

  /**
   * Mapping from normalized names to attribute names that differ. Attribute
   * names are used when rendering markup or with `*Attribute()`.
   * @type {Object}
   */
  getAttributeName: {},

  /**
   * Mapping from normalized names to properties on DOM node instances.
   * (This includes properties that mutate due to external factors.)
   * @type {Object}
   */
  getPropertyName: {},

  /**
   * Mapping from normalized names to mutation methods. This will only exist if
   * mutation cannot be set simply by the property or `setAttribute()`.
   * @type {Object}
   */
  getMutationMethod: {},

  /**
   * Whether the property must be accessed and mutated as an object property.
   * @type {Object}
   */
  mustUseAttribute: {},

  /**
   * Whether the property must be accessed and mutated using `*Attribute()`.
   * (This includes anything that fails `<propName> in <element>`.)
   * @type {Object}
   */
  mustUseProperty: {},

  /**
   * Whether or not setting a value causes side effects such as triggering
   * resources to be loaded or text selection changes. We must ensure that
   * the value is only set if it has changed.
   * @type {Object}
   */
  hasSideEffects: {},

  /**
   * Whether the property should be removed when set to a falsey value.
   * @type {Object}
   */
  hasBooleanValue: {},

  /**
   * Whether the property must be numeric or parse as a
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
  hasNumericValue: {},

  /**
   * Whether the property must be positive numeric or parse as a positive
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
  hasPositiveNumericValue: {},

  /**
   * Whether the property can be used as a flag as well as with a value. Removed
   * when strictly equal to false; present without a value when strictly equal
   * to true; present with a value otherwise.
   * @type {Object}
   */
  hasOverloadedBooleanValue: {},

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function(attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */
  getDefaultValueForProperty: function(nodeName, prop) {
    var nodeDefaults = defaultValueCache[nodeName];
    var testElement;
    if (!nodeDefaults) {
      defaultValueCache[nodeName] = nodeDefaults = {};
    }
    if (!(prop in nodeDefaults)) {
      testElement = document.createElement(nodeName);
      nodeDefaults[prop] = testElement[prop];
    }
    return nodeDefaults[prop];
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],37:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */

"use strict";

var DOMProperty = require("./DOMProperty");

var escapeTextForBrowser = require("./escapeTextForBrowser");
var memoizeStringOnly = require("./memoizeStringOnly");
var warning = require("./warning");

function shouldIgnoreValue(name, value) {
  return value == null ||
    (DOMProperty.hasBooleanValue[name] && !value) ||
    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
}

var processAttributeNameAndPrefix = memoizeStringOnly(function(name) {
  return escapeTextForBrowser(name) + '="';
});

if ("production" !== process.env.NODE_ENV) {
  var reactProps = {
    children: true,
    dangerouslySetInnerHTML: true,
    key: true,
    ref: true
  };
  var warnedProperties = {};

  var warnUnknownProperty = function(name) {
    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
      return;
    }

    warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = (
      DOMProperty.isCustomAttribute(lowerCasedName) ?
        lowerCasedName :
      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
        DOMProperty.getPossibleStandardName[lowerCasedName] :
        null
    );

    // For now, only warn when we have a suggested correction. This prevents
    // logging too much when using transferPropsTo.
    ("production" !== process.env.NODE_ENV ? warning(
      standardName == null,
      'Unknown DOM property ' + name + '. Did you mean ' + standardName + '?'
    ) : null);

  };
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMPropertyOperations = {

  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function(id) {
    return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME) +
      escapeTextForBrowser(id) + '"';
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function(name, value) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      if (shouldIgnoreValue(name, value)) {
        return '';
      }
      var attributeName = DOMProperty.getAttributeName[name];
      if (DOMProperty.hasBooleanValue[name] ||
          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
        return escapeTextForBrowser(attributeName);
      }
      return processAttributeNameAndPrefix(attributeName) +
        escapeTextForBrowser(value) + '"';
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return processAttributeNameAndPrefix(name) +
        escapeTextForBrowser(value) + '"';
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
    return null;
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function(node, name, value) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      var mutationMethod = DOMProperty.getMutationMethod[name];
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (shouldIgnoreValue(name, value)) {
        this.deleteValueForProperty(node, name);
      } else if (DOMProperty.mustUseAttribute[name]) {
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
      } else {
        var propName = DOMProperty.getPropertyName[name];
        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
        // property type before comparing; only `value` does and is string.
        if (!DOMProperty.hasSideEffects[name] ||
            ('' + node[propName]) !== ('' + value)) {
          // Contrary to `setAttribute`, object properties are properly
          // `toString`ed by IE8/9.
          node[propName] = value;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, '' + value);
      }
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function(node, name) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      var mutationMethod = DOMProperty.getMutationMethod[name];
      if (mutationMethod) {
        mutationMethod(node, undefined);
      } else if (DOMProperty.mustUseAttribute[name]) {
        node.removeAttribute(DOMProperty.getAttributeName[name]);
      } else {
        var propName = DOMProperty.getPropertyName[name];
        var defaultValue = DOMProperty.getDefaultValueForProperty(
          node.nodeName,
          propName
        );
        if (!DOMProperty.hasSideEffects[name] ||
            ('' + node[propName]) !== defaultValue) {
          node[propName] = defaultValue;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
  }

};

module.exports = DOMPropertyOperations;

}).call(this,require("oMfpAn"))
},{"./DOMProperty":36,"./escapeTextForBrowser":136,"./memoizeStringOnly":162,"./warning":172,"oMfpAn":6}],38:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */

/*jslint evil: true, sub: true */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var createNodesFromMarkup = require("./createNodesFromMarkup");
var emptyFunction = require("./emptyFunction");
var getMarkupWrap = require("./getMarkupWrap");
var invariant = require("./invariant");

var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR = 'data-danger-index';

/**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */
function getNodeName(markup) {
  return markup.substring(1, markup.indexOf(' '));
}

var Danger = {

  /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */
  dangerouslyRenderMarkup: function(markupList) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ExecutionEnvironment.canUseDOM,
      'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' +
      'thread. Make sure `window` and `document` are available globally ' +
      'before requiring React when unit testing or use ' +
      'React.renderToString for server rendering.'
    ) : invariant(ExecutionEnvironment.canUseDOM));
    var nodeName;
    var markupByNodeName = {};
    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
    for (var i = 0; i < markupList.length; i++) {
      ("production" !== process.env.NODE_ENV ? invariant(
        markupList[i],
        'dangerouslyRenderMarkup(...): Missing markup.'
      ) : invariant(markupList[i]));
      nodeName = getNodeName(markupList[i]);
      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
      markupByNodeName[nodeName][i] = markupList[i];
    }
    var resultList = [];
    var resultListAssignmentCount = 0;
    for (nodeName in markupByNodeName) {
      if (!markupByNodeName.hasOwnProperty(nodeName)) {
        continue;
      }
      var markupListByNodeName = markupByNodeName[nodeName];

      // This for-in loop skips the holes of the sparse array. The order of
      // iteration should follow the order of assignment, which happens to match
      // numerical index order, but we don't rely on that.
      for (var resultIndex in markupListByNodeName) {
        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
          var markup = markupListByNodeName[resultIndex];

          // Push the requested markup with an additional RESULT_INDEX_ATTR
          // attribute.  If the markup does not start with a < character, it
          // will be discarded below (with an appropriate console.error).
          markupListByNodeName[resultIndex] = markup.replace(
            OPEN_TAG_NAME_EXP,
            // This index will be parsed back out below.
            '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
          );
        }
      }

      // Render each group of markup with similar wrapping `nodeName`.
      var renderNodes = createNodesFromMarkup(
        markupListByNodeName.join(''),
        emptyFunction // Do nothing special with <script> tags.
      );

      for (i = 0; i < renderNodes.length; ++i) {
        var renderNode = renderNodes[i];
        if (renderNode.hasAttribute &&
            renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
          renderNode.removeAttribute(RESULT_INDEX_ATTR);

          ("production" !== process.env.NODE_ENV ? invariant(
            !resultList.hasOwnProperty(resultIndex),
            'Danger: Assigning to an already-occupied result index.'
          ) : invariant(!resultList.hasOwnProperty(resultIndex)));

          resultList[resultIndex] = renderNode;

          // This should match resultList.length and markupList.length when
          // we're done.
          resultListAssignmentCount += 1;

        } else if ("production" !== process.env.NODE_ENV) {
          console.error(
            "Danger: Discarding unexpected node:",
            renderNode
          );
        }
      }
    }

    // Although resultList was populated out of order, it should now be a dense
    // array.
    ("production" !== process.env.NODE_ENV ? invariant(
      resultListAssignmentCount === resultList.length,
      'Danger: Did not assign to every index of resultList.'
    ) : invariant(resultListAssignmentCount === resultList.length));

    ("production" !== process.env.NODE_ENV ? invariant(
      resultList.length === markupList.length,
      'Danger: Expected markup to render %s nodes, but rendered %s.',
      markupList.length,
      resultList.length
    ) : invariant(resultList.length === markupList.length));

    return resultList;
  },

  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ExecutionEnvironment.canUseDOM,
      'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' +
      'worker thread. Make sure `window` and `document` are available ' +
      'globally before requiring React when unit testing or use ' +
      'React.renderToString for server rendering.'
    ) : invariant(ExecutionEnvironment.canUseDOM));
    ("production" !== process.env.NODE_ENV ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
    ("production" !== process.env.NODE_ENV ? invariant(
      oldChild.tagName.toLowerCase() !== 'html',
      'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' +
      '<html> node. This is because browser quirks make this unreliable ' +
      'and/or slow. If you want to render to the root you must use ' +
      'server rendering. See renderComponentToString().'
    ) : invariant(oldChild.tagName.toLowerCase() !== 'html'));

    var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
    oldChild.parentNode.replaceChild(newChild, oldChild);
  }

};

module.exports = Danger;

}).call(this,require("oMfpAn"))
},{"./ExecutionEnvironment":47,"./createNodesFromMarkup":131,"./emptyFunction":134,"./getMarkupWrap":145,"./invariant":153,"oMfpAn":6}],39:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */

"use strict";

 var keyOf = require("./keyOf");

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var DefaultEventPluginOrder = [
  keyOf({ResponderEventPlugin: null}),
  keyOf({SimpleEventPlugin: null}),
  keyOf({TapEventPlugin: null}),
  keyOf({EnterLeaveEventPlugin: null}),
  keyOf({ChangeEventPlugin: null}),
  keyOf({SelectEventPlugin: null}),
  keyOf({CompositionEventPlugin: null}),
  keyOf({BeforeInputEventPlugin: null}),
  keyOf({AnalyticsEventPlugin: null}),
  keyOf({MobileSafariClickEventPlugin: null})
];

module.exports = DefaultEventPluginOrder;

},{"./keyOf":160}],40:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var SyntheticMouseEvent = require("./SyntheticMouseEvent");

var ReactMount = require("./ReactMount");
var keyOf = require("./keyOf");

var topLevelTypes = EventConstants.topLevelTypes;
var getFirstReactDOM = ReactMount.getFirstReactDOM;

var eventTypes = {
  mouseEnter: {
    registrationName: keyOf({onMouseEnter: null}),
    dependencies: [
      topLevelTypes.topMouseOut,
      topLevelTypes.topMouseOver
    ]
  },
  mouseLeave: {
    registrationName: keyOf({onMouseLeave: null}),
    dependencies: [
      topLevelTypes.topMouseOut,
      topLevelTypes.topMouseOver
    ]
  }
};

var extractedEvents = [null, null];

var EnterLeaveEventPlugin = {

  eventTypes: eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    if (topLevelType === topLevelTypes.topMouseOver &&
        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== topLevelTypes.topMouseOut &&
        topLevelType !== topLevelTypes.topMouseOver) {
      // Must not be a mouse in or mouse out - ignoring.
      return null;
    }

    var win;
    if (topLevelTarget.window === topLevelTarget) {
      // `topLevelTarget` is probably a window object.
      win = topLevelTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = topLevelTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from, to;
    if (topLevelType === topLevelTypes.topMouseOut) {
      from = topLevelTarget;
      to =
        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
        win;
    } else {
      from = win;
      to = topLevelTarget;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var fromID = from ? ReactMount.getID(from) : '';
    var toID = to ? ReactMount.getID(to) : '';

    var leave = SyntheticMouseEvent.getPooled(
      eventTypes.mouseLeave,
      fromID,
      nativeEvent
    );
    leave.type = 'mouseleave';
    leave.target = from;
    leave.relatedTarget = to;

    var enter = SyntheticMouseEvent.getPooled(
      eventTypes.mouseEnter,
      toID,
      nativeEvent
    );
    enter.type = 'mouseenter';
    enter.target = to;
    enter.relatedTarget = from;

    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

    extractedEvents[0] = leave;
    extractedEvents[1] = enter;

    return extractedEvents;
  }

};

module.exports = EnterLeaveEventPlugin;

},{"./EventConstants":41,"./EventPropagators":46,"./ReactMount":89,"./SyntheticMouseEvent":117,"./keyOf":160}],41:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */

"use strict";

var keyMirror = require("./keyMirror");

var PropagationPhases = keyMirror({bubbled: null, captured: null});

/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = keyMirror({
  topBlur: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topReset: null,
  topScroll: null,
  topSelectionChange: null,
  topSubmit: null,
  topTextInput: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topWheel: null
});

var EventConstants = {
  topLevelTypes: topLevelTypes,
  PropagationPhases: PropagationPhases
};

module.exports = EventConstants;

},{"./keyMirror":159}],42:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */

var emptyFunction = require("./emptyFunction");

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function(target, eventType, callback) {
    if (!target.addEventListener) {
      if ("production" !== process.env.NODE_ENV) {
        console.error(
          'Attempted to listen to events during the capture phase on a ' +
          'browser that does not support the capture phase. Your application ' +
          'will not receive some events.'
        );
      }
      return {
        remove: emptyFunction
      };
    } else {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    }
  },

  registerDefault: function() {}
};

module.exports = EventListener;

}).call(this,require("oMfpAn"))
},{"./emptyFunction":134,"oMfpAn":6}],43:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */

"use strict";

var EventPluginRegistry = require("./EventPluginRegistry");
var EventPluginUtils = require("./EventPluginUtils");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");
var invariant = require("./invariant");

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @private
 */
var executeDispatchesAndRelease = function(event) {
  if (event) {
    var executeDispatch = EventPluginUtils.executeDispatch;
    // Plugins can provide custom behavior when dispatching events.
    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
    if (PluginModule && PluginModule.executeDispatch) {
      executeDispatch = PluginModule.executeDispatch;
    }
    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};

/**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */
var InstanceHandle = null;

function validateInstanceHandle() {
  var invalid = !InstanceHandle||
    !InstanceHandle.traverseTwoPhase ||
    !InstanceHandle.traverseEnterLeave;
  if (invalid) {
    throw new Error('InstanceHandle not injected before use!');
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {object} InjectedMount
     * @public
     */
    injectMount: EventPluginUtils.injection.injectMount,

    /**
     * @param {object} InjectedInstanceHandle
     * @public
     */
    injectInstanceHandle: function(InjectedInstanceHandle) {
      InstanceHandle = InjectedInstanceHandle;
      if ("production" !== process.env.NODE_ENV) {
        validateInstanceHandle();
      }
    },

    getInstanceHandle: function() {
      if ("production" !== process.env.NODE_ENV) {
        validateInstanceHandle();
      }
      return InstanceHandle;
    },

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

  },

  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

  registrationNameModules: EventPluginRegistry.registrationNameModules,

  /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */
  putListener: function(id, registrationName, listener) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !listener || typeof listener === 'function',
      'Expected %s listener to be a function, instead got type %s',
      registrationName, typeof listener
    ) : invariant(!listener || typeof listener === 'function'));

    var bankForRegistrationName =
      listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[id] = listener;
  },

  /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function(id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    return bankForRegistrationName && bankForRegistrationName[id];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function(id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    if (bankForRegistrationName) {
      delete bankForRegistrationName[id];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */
  deleteAllListeners: function(id) {
    for (var registrationName in listenerBank) {
      delete listenerBank[registrationName][id];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0, l = plugins.length; i < l; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(
          topLevelType,
          topLevelTarget,
          topLevelTargetID,
          nativeEvent
        );
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function(events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function() {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
    ("production" !== process.env.NODE_ENV ? invariant(
      !eventQueue,
      'processEventQueue(): Additional events were enqueued while processing ' +
      'an event queue. Support for this has not yet been implemented.'
    ) : invariant(!eventQueue));
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function() {
    listenerBank = {};
  },

  __getListenerBank: function() {
    return listenerBank;
  }

};

module.exports = EventPluginHub;

}).call(this,require("oMfpAn"))
},{"./EventPluginRegistry":44,"./EventPluginUtils":45,"./accumulateInto":123,"./forEachAccumulated":139,"./invariant":153,"oMfpAn":6}],44:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */

"use strict";

var invariant = require("./invariant");

/**
 * Injectable ordering of event plugins.
 */
var EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var PluginModule = namesToPlugins[pluginName];
    var pluginIndex = EventPluginOrder.indexOf(pluginName);
    ("production" !== process.env.NODE_ENV ? invariant(
      pluginIndex > -1,
      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
      'the plugin ordering, `%s`.',
      pluginName
    ) : invariant(pluginIndex > -1));
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      PluginModule.extractEvents,
      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
      'method, but `%s` does not.',
      pluginName
    ) : invariant(PluginModule.extractEvents));
    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      ("production" !== process.env.NODE_ENV ? invariant(
        publishEventForPlugin(
          publishedEvents[eventName],
          PluginModule,
          eventName
        ),
        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
        eventName,
        pluginName
      ) : invariant(publishEventForPlugin(
        publishedEvents[eventName],
        PluginModule,
        eventName
      )));
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
    'EventPluginHub: More than one plugin attempted to publish the same ' +
    'event name, `%s`.',
    eventName
  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(
          phasedRegistrationName,
          PluginModule,
          eventName
        );
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(
      dispatchConfig.registrationName,
      PluginModule,
      eventName
    );
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, PluginModule, eventName) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !EventPluginRegistry.registrationNameModules[registrationName],
    'EventPluginHub: More than one plugin attempted to publish the same ' +
    'registration name, `%s`.',
    registrationName
  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] =
    PluginModule.eventTypes[eventName].dependencies;
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {

  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function(InjectedEventPluginOrder) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !EventPluginOrder,
      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
      'once. You are likely trying to load more than one copy of React.'
    ) : invariant(!EventPluginOrder));
    // Clone the ordering so it cannot be dynamically mutated.
    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function(injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) ||
          namesToPlugins[pluginName] !== PluginModule) {
        ("production" !== process.env.NODE_ENV ? invariant(
          !namesToPlugins[pluginName],
          'EventPluginRegistry: Cannot inject two different event plugins ' +
          'using the same name, `%s`.',
          pluginName
        ) : invariant(!namesToPlugins[pluginName]));
        namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function(event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[
        dispatchConfig.registrationName
      ] || null;
    }
    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;
      }
      var PluginModule = EventPluginRegistry.registrationNameModules[
        dispatchConfig.phasedRegistrationNames[phase]
      ];
      if (PluginModule) {
        return PluginModule;
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function() {
    EventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }
  }

};

module.exports = EventPluginRegistry;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],45:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */

"use strict";

var EventConstants = require("./EventConstants");

var invariant = require("./invariant");

/**
 * Injected dependencies:
 */

/**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */
var injection = {
  Mount: null,
  injectMount: function(InjectedMount) {
    injection.Mount = InjectedMount;
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? invariant(
        InjectedMount && InjectedMount.getNode,
        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
        'is missing getNode.'
      ) : invariant(InjectedMount && InjectedMount.getNode));
    }
  }
};

var topLevelTypes = EventConstants.topLevelTypes;

function isEndish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseUp ||
         topLevelType === topLevelTypes.topTouchEnd ||
         topLevelType === topLevelTypes.topTouchCancel;
}

function isMoveish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseMove ||
         topLevelType === topLevelTypes.topTouchMove;
}
function isStartish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseDown ||
         topLevelType === topLevelTypes.topTouchStart;
}


var validateEventDispatches;
if ("production" !== process.env.NODE_ENV) {
  validateEventDispatches = function(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var idsIsArr = Array.isArray(dispatchIDs);
    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
    var listenersLen = listenersIsArr ?
      dispatchListeners.length :
      dispatchListeners ? 1 : 0;

    ("production" !== process.env.NODE_ENV ? invariant(
      idsIsArr === listenersIsArr && IDsLen === listenersLen,
      'EventPluginUtils: Invalid `event`.'
    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
  };
}

/**
 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
 * kept separate to conserve memory.
 */
function forEachEventDispatch(event, cb) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      cb(event, dispatchListeners[i], dispatchIDs[i]);
    }
  } else if (dispatchListeners) {
    cb(event, dispatchListeners, dispatchIDs);
  }
}

/**
 * Default implementation of PluginModule.executeDispatch().
 * @param {SyntheticEvent} SyntheticEvent to handle
 * @param {function} Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */
function executeDispatch(event, listener, domID) {
  event.currentTarget = injection.Mount.getNode(domID);
  var returnValue = listener(event, domID);
  event.currentTarget = null;
  return returnValue;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, executeDispatch) {
  forEachEventDispatch(event, executeDispatch);
  event._dispatchListeners = null;
  event._dispatchIDs = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return id of the first dispatch execution who's listener returns true, or
 * null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchIDs)) {
      return dispatchIDs;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchIDs = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  ("production" !== process.env.NODE_ENV ? invariant(
    !Array.isArray(dispatchListener),
    'executeDirectDispatch(...): Invalid `event`.'
  ) : invariant(!Array.isArray(dispatchListener)));
  var res = dispatchListener ?
    dispatchListener(event, dispatchID) :
    null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {bool} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatch: executeDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,
  injection: injection,
  useTouchEvents: false
};

module.exports = EventPluginUtils;

}).call(this,require("oMfpAn"))
},{"./EventConstants":41,"./invariant":153,"oMfpAn":6}],46:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");

var PropagationPhases = EventConstants.PropagationPhases;
var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(id, event, propagationPhase) {
  var registrationName =
    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(id, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(domID, upwards, event) {
  if ("production" !== process.env.NODE_ENV) {
    if (!domID) {
      throw new Error('Dispatching id must not be null');
    }
  }
  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
  var listener = listenerAtPhase(domID, event, phase);
  if (listener) {
    event._dispatchListeners =
      accumulateInto(event._dispatchListeners, listener);
    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We can not perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
      event.dispatchMarker,
      accumulateDirectionalDispatches,
      event
    );
  }
}


/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(id, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(id, registrationName);
    if (listener) {
      event._dispatchListeners =
        accumulateInto(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event.dispatchMarker, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
    fromID,
    toID,
    accumulateDispatches,
    leave,
    enter
  );
}


function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}



/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;

}).call(this,require("oMfpAn"))
},{"./EventConstants":41,"./EventPluginHub":43,"./accumulateInto":123,"./forEachAccumulated":139,"oMfpAn":6}],47:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],48:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */

/*jslint bitwise: true*/

"use strict";

var DOMProperty = require("./DOMProperty");
var ExecutionEnvironment = require("./ExecutionEnvironment");

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE =
  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE =
  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var hasSVG;
if (ExecutionEnvironment.canUseDOM) {
  var implementation = document.implementation;
  hasSVG = (
    implementation &&
    implementation.hasFeature &&
    implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
      '1.1'
    )
  );
}


var HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(
    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
  ),
  Properties: {
    /**
     * Standard Properties
     */
    accept: null,
    acceptCharset: null,
    accessKey: null,
    action: null,
    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    allowTransparency: MUST_USE_ATTRIBUTE,
    alt: null,
    async: HAS_BOOLEAN_VALUE,
    autoComplete: null,
    // autoFocus is polyfilled/normalized by AutoFocusMixin
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    cellPadding: null,
    cellSpacing: null,
    charSet: MUST_USE_ATTRIBUTE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    classID: MUST_USE_ATTRIBUTE,
    // To set className on SVG elements, it's necessary to use .setAttribute;
    // this works on HTML elements too in all browsers except IE8. Conveniently,
    // IE8 doesn't support SVG and so we can simply use the attribute in
    // browsers that support SVG and the property in browsers that don't,
    // regardless of whether the element is HTML or SVG.
    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: null,
    content: null,
    contentEditable: null,
    contextMenu: MUST_USE_ATTRIBUTE,
    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    coords: null,
    crossOrigin: null,
    data: null, // For `<object />` acts as `src`.
    dateTime: MUST_USE_ATTRIBUTE,
    defer: HAS_BOOLEAN_VALUE,
    dir: null,
    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: null,
    encType: null,
    form: MUST_USE_ATTRIBUTE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    frameBorder: MUST_USE_ATTRIBUTE,
    height: MUST_USE_ATTRIBUTE,
    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    href: null,
    hrefLang: null,
    htmlFor: null,
    httpEquiv: null,
    icon: null,
    id: MUST_USE_PROPERTY,
    label: null,
    lang: null,
    list: MUST_USE_ATTRIBUTE,
    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    manifest: MUST_USE_ATTRIBUTE,
    max: null,
    maxLength: MUST_USE_ATTRIBUTE,
    media: MUST_USE_ATTRIBUTE,
    mediaGroup: null,
    method: null,
    min: null,
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    name: null,
    noValidate: HAS_BOOLEAN_VALUE,
    open: null,
    pattern: null,
    placeholder: null,
    poster: null,
    preload: null,
    radioGroup: null,
    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    rel: null,
    required: HAS_BOOLEAN_VALUE,
    role: MUST_USE_ATTRIBUTE,
    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: null,
    sandbox: null,
    scope: null,
    scrolling: null,
    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    shape: null,
    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    sizes: MUST_USE_ATTRIBUTE,
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: null,
    src: null,
    srcDoc: MUST_USE_PROPERTY,
    srcSet: MUST_USE_ATTRIBUTE,
    start: HAS_NUMERIC_VALUE,
    step: null,
    style: null,
    tabIndex: null,
    target: null,
    title: null,
    type: null,
    useMap: null,
    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
    width: MUST_USE_ATTRIBUTE,
    wmode: MUST_USE_ATTRIBUTE,

    /**
     * Non-standard Properties
     */
    autoCapitalize: null, // Supported in Mobile Safari for keyboard hints
    autoCorrect: null, // Supported in Mobile Safari for keyboard hints
    itemProp: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE, // Microdata: http://schema.org/docs/gs.html
    itemType: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
    property: null // Supports OG in meta tags
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {
    autoCapitalize: 'autocapitalize',
    autoComplete: 'autocomplete',
    autoCorrect: 'autocorrect',
    autoFocus: 'autofocus',
    autoPlay: 'autoplay',
    encType: 'enctype',
    hrefLang: 'hreflang',
    radioGroup: 'radiogroup',
    spellCheck: 'spellcheck',
    srcDoc: 'srcdoc',
    srcSet: 'srcset'
  }
};

module.exports = HTMLDOMPropertyConfig;

},{"./DOMProperty":36,"./ExecutionEnvironment":47}],49:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */

"use strict";

var ReactPropTypes = require("./ReactPropTypes");

var invariant = require("./invariant");

var hasReadOnlyValue = {
  'button': true,
  'checkbox': true,
  'image': true,
  'hidden': true,
  'radio': true,
  'reset': true,
  'submit': true
};

function _assertSingleLink(input) {
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.checkedLink == null || input.props.valueLink == null,
    'Cannot provide a checkedLink and a valueLink. If you want to use ' +
    'checkedLink, you probably don\'t want to use valueLink and vice versa.'
  ) : invariant(input.props.checkedLink == null || input.props.valueLink == null));
}
function _assertValueLink(input) {
  _assertSingleLink(input);
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.value == null && input.props.onChange == null,
    'Cannot provide a valueLink and a value or onChange event. If you want ' +
    'to use value or onChange, you probably don\'t want to use valueLink.'
  ) : invariant(input.props.value == null && input.props.onChange == null));
}

function _assertCheckedLink(input) {
  _assertSingleLink(input);
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.checked == null && input.props.onChange == null,
    'Cannot provide a checkedLink and a checked property or onChange event. ' +
    'If you want to use checked or onChange, you probably don\'t want to ' +
    'use checkedLink'
  ) : invariant(input.props.checked == null && input.props.onChange == null));
}

/**
 * @param {SyntheticEvent} e change event to handle
 */
function _handleLinkedValueChange(e) {
  /*jshint validthis:true */
  this.props.valueLink.requestChange(e.target.value);
}

/**
  * @param {SyntheticEvent} e change event to handle
  */
function _handleLinkedCheckChange(e) {
  /*jshint validthis:true */
  this.props.checkedLink.requestChange(e.target.checked);
}

/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var LinkedValueUtils = {
  Mixin: {
    propTypes: {
      value: function(props, propName, componentName) {
        if (!props[propName] ||
            hasReadOnlyValue[props.type] ||
            props.onChange ||
            props.readOnly ||
            props.disabled) {
          return;
        }
        return new Error(
          'You provided a `value` prop to a form field without an ' +
          '`onChange` handler. This will render a read-only field. If ' +
          'the field should be mutable use `defaultValue`. Otherwise, ' +
          'set either `onChange` or `readOnly`.'
        );
      },
      checked: function(props, propName, componentName) {
        if (!props[propName] ||
            props.onChange ||
            props.readOnly ||
            props.disabled) {
          return;
        }
        return new Error(
          'You provided a `checked` prop to a form field without an ' +
          '`onChange` handler. This will render a read-only field. If ' +
          'the field should be mutable use `defaultChecked`. Otherwise, ' +
          'set either `onChange` or `readOnly`.'
        );
      },
      onChange: ReactPropTypes.func
    }
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function(input) {
    if (input.props.valueLink) {
      _assertValueLink(input);
      return input.props.valueLink.value;
    }
    return input.props.value;
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function(input) {
    if (input.props.checkedLink) {
      _assertCheckedLink(input);
      return input.props.checkedLink.value;
    }
    return input.props.checked;
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {function} change callback either from onChange prop or link.
   */
  getOnChange: function(input) {
    if (input.props.valueLink) {
      _assertValueLink(input);
      return _handleLinkedValueChange;
    } else if (input.props.checkedLink) {
      _assertCheckedLink(input);
      return _handleLinkedCheckChange;
    }
    return input.props.onChange;
  }
};

module.exports = LinkedValueUtils;

}).call(this,require("oMfpAn"))
},{"./ReactPropTypes":98,"./invariant":153,"oMfpAn":6}],50:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LocalEventTrapMixin
 */

"use strict";

var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");
var invariant = require("./invariant");

function remove(event) {
  event.remove();
}

var LocalEventTrapMixin = {
  trapBubbledEvent:function(topLevelType, handlerBaseName) {
    ("production" !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
    var listener = ReactBrowserEventEmitter.trapBubbledEvent(
      topLevelType,
      handlerBaseName,
      this.getDOMNode()
    );
    this._localEventListeners =
      accumulateInto(this._localEventListeners, listener);
  },

  // trapCapturedEvent would look nearly identical. We don't implement that
  // method because it isn't currently needed.

  componentWillUnmount:function() {
    if (this._localEventListeners) {
      forEachAccumulated(this._localEventListeners, remove);
    }
  }
};

module.exports = LocalEventTrapMixin;

}).call(this,require("oMfpAn"))
},{"./ReactBrowserEventEmitter":56,"./accumulateInto":123,"./forEachAccumulated":139,"./invariant":153,"oMfpAn":6}],51:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");

var emptyFunction = require("./emptyFunction");

var topLevelTypes = EventConstants.topLevelTypes;

/**
 * Mobile Safari does not fire properly bubble click events on non-interactive
 * elements, which means delegated click listeners do not fire. The workaround
 * for this bug involves attaching an empty click listener on the target node.
 *
 * This particular plugin works around the bug by attaching an empty click
 * listener on `touchstart` (which does fire on every element).
 */
var MobileSafariClickEventPlugin = {

  eventTypes: null,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    if (topLevelType === topLevelTypes.topTouchStart) {
      var target = nativeEvent.target;
      if (target && !target.onclick) {
        target.onclick = emptyFunction;
      }
    }
  }

};

module.exports = MobileSafariClickEventPlugin;

},{"./EventConstants":41,"./emptyFunction":134}],52:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
};

module.exports = assign;

},{}],53:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

"use strict";

var invariant = require("./invariant");

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function(a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function(a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var standardReleaser = function(instance) {
  var Klass = this;
  ("production" !== process.env.NODE_ENV ? invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  ) : invariant(instance instanceof Klass));
  if (instance.destructor) {
    instance.destructor();
  }
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fiveArgumentPooler: fiveArgumentPooler
};

module.exports = PooledClass;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],54:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */

"use strict";

var DOMPropertyOperations = require("./DOMPropertyOperations");
var EventPluginUtils = require("./EventPluginUtils");
var ReactChildren = require("./ReactChildren");
var ReactComponent = require("./ReactComponent");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactDOM = require("./ReactDOM");
var ReactDOMComponent = require("./ReactDOMComponent");
var ReactDefaultInjection = require("./ReactDefaultInjection");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactMount = require("./ReactMount");
var ReactMultiChild = require("./ReactMultiChild");
var ReactPerf = require("./ReactPerf");
var ReactPropTypes = require("./ReactPropTypes");
var ReactServerRendering = require("./ReactServerRendering");
var ReactTextComponent = require("./ReactTextComponent");

var assign = require("./Object.assign");
var deprecated = require("./deprecated");
var onlyChild = require("./onlyChild");

ReactDefaultInjection.inject();

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;

if ("production" !== process.env.NODE_ENV) {
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
}

// TODO: Drop legacy elements once classes no longer export these factories
createElement = ReactLegacyElement.wrapCreateElement(
  createElement
);
createFactory = ReactLegacyElement.wrapCreateFactory(
  createFactory
);

var render = ReactPerf.measure('React', 'render', ReactMount.render);

var React = {
  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    only: onlyChild
  },
  DOM: ReactDOM,
  PropTypes: ReactPropTypes,
  initializeTouchEvents: function(shouldUseTouch) {
    EventPluginUtils.useTouchEvents = shouldUseTouch;
  },
  createClass: ReactCompositeComponent.createClass,
  createElement: createElement,
  createFactory: createFactory,
  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
  render: render,
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  isValidClass: ReactLegacyElement.isValidClass,
  isValidElement: ReactElement.isValidElement,
  withContext: ReactContext.withContext,

  // Hook for JSX spread, don't use this for anything else.
  __spread: assign,

  // Deprecations (remove for 0.13)
  renderComponent: deprecated(
    'React',
    'renderComponent',
    'render',
    this,
    render
  ),
  renderComponentToString: deprecated(
    'React',
    'renderComponentToString',
    'renderToString',
    this,
    ReactServerRendering.renderToString
  ),
  renderComponentToStaticMarkup: deprecated(
    'React',
    'renderComponentToStaticMarkup',
    'renderToStaticMarkup',
    this,
    ReactServerRendering.renderToStaticMarkup
  ),
  isValidComponent: deprecated(
    'React',
    'isValidComponent',
    'isValidElement',
    this,
    ReactElement.isValidElement
  )
};

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    Component: ReactComponent,
    CurrentOwner: ReactCurrentOwner,
    DOMComponent: ReactDOMComponent,
    DOMPropertyOperations: DOMPropertyOperations,
    InstanceHandles: ReactInstanceHandles,
    Mount: ReactMount,
    MultiChild: ReactMultiChild,
    TextComponent: ReactTextComponent
  });
}

if ("production" !== process.env.NODE_ENV) {
  var ExecutionEnvironment = require("./ExecutionEnvironment");
  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

    // If we're in Chrome, look for the devtools marker and provide a download
    // link if not installed.
    if (navigator.userAgent.indexOf('Chrome') > -1) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        console.debug(
          'Download the React DevTools for a better development experience: ' +
          'http://fb.me/react-devtools'
        );
      }
    }

    var expectedFeatures = [
      // shims
      Array.isArray,
      Array.prototype.every,
      Array.prototype.forEach,
      Array.prototype.indexOf,
      Array.prototype.map,
      Date.now,
      Function.prototype.bind,
      Object.keys,
      String.prototype.split,
      String.prototype.trim,

      // shams
      Object.create,
      Object.freeze
    ];

    for (var i = 0; i < expectedFeatures.length; i++) {
      if (!expectedFeatures[i]) {
        console.error(
          'One or more ES5 shim/shams expected by React are not available: ' +
          'http://fb.me/react-warning-polyfills'
        );
        break;
      }
    }
  }
}

// Version exists only in the open-source version of React, not in Facebook's
// internal version.
React.version = '0.12.1';

module.exports = React;

}).call(this,require("oMfpAn"))
},{"./DOMPropertyOperations":37,"./EventPluginUtils":45,"./ExecutionEnvironment":47,"./Object.assign":52,"./ReactChildren":57,"./ReactComponent":58,"./ReactCompositeComponent":60,"./ReactContext":61,"./ReactCurrentOwner":62,"./ReactDOM":63,"./ReactDOMComponent":65,"./ReactDefaultInjection":75,"./ReactElement":78,"./ReactElementValidator":79,"./ReactInstanceHandles":86,"./ReactLegacyElement":87,"./ReactMount":89,"./ReactMultiChild":90,"./ReactPerf":94,"./ReactPropTypes":98,"./ReactServerRendering":102,"./ReactTextComponent":104,"./deprecated":133,"./onlyChild":164,"oMfpAn":6}],55:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */

"use strict";

var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactMount = require("./ReactMount");

var invariant = require("./invariant");

var ReactBrowserComponentMixin = {
  /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */
  getDOMNode: function() {
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isMounted(),
      'getDOMNode(): A component must be mounted to have a DOM node.'
    ) : invariant(this.isMounted()));
    if (ReactEmptyComponent.isNullComponentID(this._rootNodeID)) {
      return null;
    }
    return ReactMount.getNode(this._rootNodeID);
  }
};

module.exports = ReactBrowserComponentMixin;

}).call(this,require("oMfpAn"))
},{"./ReactEmptyComponent":80,"./ReactMount":89,"./invariant":153,"oMfpAn":6}],56:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");
var EventPluginRegistry = require("./EventPluginRegistry");
var ReactEventEmitterMixin = require("./ReactEventEmitterMixin");
var ViewportMetrics = require("./ViewportMetrics");

var assign = require("./Object.assign");
var isEventSupported = require("./isEventSupported");

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var alreadyListeningTo = {};
var isMonitoringScrollValue = false;
var reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping = {
  topBlur: 'blur',
  topChange: 'change',
  topClick: 'click',
  topCompositionEnd: 'compositionend',
  topCompositionStart: 'compositionstart',
  topCompositionUpdate: 'compositionupdate',
  topContextMenu: 'contextmenu',
  topCopy: 'copy',
  topCut: 'cut',
  topDoubleClick: 'dblclick',
  topDrag: 'drag',
  topDragEnd: 'dragend',
  topDragEnter: 'dragenter',
  topDragExit: 'dragexit',
  topDragLeave: 'dragleave',
  topDragOver: 'dragover',
  topDragStart: 'dragstart',
  topDrop: 'drop',
  topFocus: 'focus',
  topInput: 'input',
  topKeyDown: 'keydown',
  topKeyPress: 'keypress',
  topKeyUp: 'keyup',
  topMouseDown: 'mousedown',
  topMouseMove: 'mousemove',
  topMouseOut: 'mouseout',
  topMouseOver: 'mouseover',
  topMouseUp: 'mouseup',
  topPaste: 'paste',
  topScroll: 'scroll',
  topSelectionChange: 'selectionchange',
  topTextInput: 'textInput',
  topTouchCancel: 'touchcancel',
  topTouchEnd: 'touchend',
  topTouchMove: 'touchmove',
  topTouchStart: 'touchstart',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
  }
  return alreadyListeningTo[mountAt[topListenersIDKey]];
}

/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function(ReactEventListener) {
      ReactEventListener.setHandleTopLevel(
        ReactBrowserEventEmitter.handleTopLevel
      );
      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function(enabled) {
    if (ReactBrowserEventEmitter.ReactEventListener) {
      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function() {
    return !!(
      ReactBrowserEventEmitter.ReactEventListener &&
      ReactBrowserEventEmitter.ReactEventListener.isEnabled()
    );
  },

  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function(registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = getListeningForDocument(mountAt);
    var dependencies = EventPluginRegistry.
      registrationNameDependencies[registrationName];

    var topLevelTypes = EventConstants.topLevelTypes;
    for (var i = 0, l = dependencies.length; i < l; i++) {
      var dependency = dependencies[i];
      if (!(
            isListening.hasOwnProperty(dependency) &&
            isListening[dependency]
          )) {
        if (dependency === topLevelTypes.topWheel) {
          if (isEventSupported('wheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'wheel',
              mountAt
            );
          } else if (isEventSupported('mousewheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'mousewheel',
              mountAt
            );
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'DOMMouseScroll',
              mountAt
            );
          }
        } else if (dependency === topLevelTypes.topScroll) {

          if (isEventSupported('scroll', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topScroll,
              'scroll',
              mountAt
            );
          } else {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topScroll,
              'scroll',
              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
            );
          }
        } else if (dependency === topLevelTypes.topFocus ||
            dependency === topLevelTypes.topBlur) {

          if (isEventSupported('focus', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topFocus,
              'focus',
              mountAt
            );
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topBlur,
              'blur',
              mountAt
            );
          } else if (isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topFocus,
              'focusin',
              mountAt
            );
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topBlur,
              'focusout',
              mountAt
            );
          }

          // to make sure blur and focus event listeners are only attached once
          isListening[topLevelTypes.topBlur] = true;
          isListening[topLevelTypes.topFocus] = true;
        } else if (topEventMapping.hasOwnProperty(dependency)) {
          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            dependency,
            topEventMapping[dependency],
            mountAt
          );
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
      topLevelType,
      handlerBaseName,
      handle
    );
  },

  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
      topLevelType,
      handlerBaseName,
      handle
    );
  },

  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function(){
    if (!isMonitoringScrollValue) {
      var refresh = ViewportMetrics.refreshScrollValues;
      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      isMonitoringScrollValue = true;
    }
  },

  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

  registrationNameModules: EventPluginHub.registrationNameModules,

  putListener: EventPluginHub.putListener,

  getListener: EventPluginHub.getListener,

  deleteListener: EventPluginHub.deleteListener,

  deleteAllListeners: EventPluginHub.deleteAllListeners

});

module.exports = ReactBrowserEventEmitter;

},{"./EventConstants":41,"./EventPluginHub":43,"./EventPluginRegistry":44,"./Object.assign":52,"./ReactEventEmitterMixin":82,"./ViewportMetrics":122,"./isEventSupported":154}],57:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */

"use strict";

var PooledClass = require("./PooledClass");

var traverseAllChildren = require("./traverseAllChildren");
var warning = require("./warning");

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var threeArgumentPooler = PooledClass.threeArgumentPooler;

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.forEachFunction = forEachFunction;
  this.forEachContext = forEachContext;
}
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(traverseContext, child, name, i) {
  var forEachBookKeeping = traverseContext;
  forEachBookKeeping.forEachFunction.call(
    forEachBookKeeping.forEachContext, child, i);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext =
    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, mapFunction, mapContext) {
  this.mapResult = mapResult;
  this.mapFunction = mapFunction;
  this.mapContext = mapContext;
}
PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);

function mapSingleChildIntoContext(traverseContext, child, name, i) {
  var mapBookKeeping = traverseContext;
  var mapResult = mapBookKeeping.mapResult;

  var keyUnique = !mapResult.hasOwnProperty(name);
  ("production" !== process.env.NODE_ENV ? warning(
    keyUnique,
    'ReactChildren.map(...): Encountered two children with the same key, ' +
    '`%s`. Child keys must be unique; when two children share a key, only ' +
    'the first child will be used.',
    name
  ) : null);

  if (keyUnique) {
    var mappedChild =
      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
    mapResult[name] = mappedChild;
  }
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * TODO: This may likely break any calls to `ReactChildren.map` that were
 * previously relying on the fact that we guarded against null children.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var mapResult = {};
  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
  return mapResult;
}

function forEachSingleChildDummy(traverseContext, child, name, i) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  count: countChildren
};

module.exports = ReactChildren;

}).call(this,require("oMfpAn"))
},{"./PooledClass":53,"./traverseAllChildren":171,"./warning":172,"oMfpAn":6}],58:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactOwner = require("./ReactOwner");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");
var keyMirror = require("./keyMirror");

/**
 * Every React component is in one of these life cycles.
 */
var ComponentLifeCycle = keyMirror({
  /**
   * Mounted components have a DOM node representation and are capable of
   * receiving new props.
   */
  MOUNTED: null,
  /**
   * Unmounted components are inactive and cannot receive new props.
   */
  UNMOUNTED: null
});

var injected = false;

/**
 * Optionally injectable environment dependent cleanup hook. (server vs.
 * browser etc). Example: A browser system caches DOM nodes based on component
 * ID and must remove that cache entry when this instance is unmounted.
 *
 * @private
 */
var unmountIDFromEnvironment = null;

/**
 * The "image" of a component tree, is the platform specific (typically
 * serialized) data that represents a tree of lower level UI building blocks.
 * On the web, this "image" is HTML markup which describes a construction of
 * low level `div` and `span` nodes. Other platforms may have different
 * encoding of this "image". This must be injected.
 *
 * @private
 */
var mountImageIntoNode = null;

/**
 * Components are the basic units of composition in React.
 *
 * Every component accepts a set of keyed input parameters known as "props" that
 * are initialized by the constructor. Once a component is mounted, the props
 * can be mutated using `setProps` or `replaceProps`.
 *
 * Every component is capable of the following operations:
 *
 *   `mountComponent`
 *     Initializes the component, renders markup, and registers event listeners.
 *
 *   `receiveComponent`
 *     Updates the rendered DOM nodes to match the given component.
 *
 *   `unmountComponent`
 *     Releases any resources allocated by this component.
 *
 * Components can also be "owned" by other components. Being owned by another
 * component means being constructed by that component. This is different from
 * being the child of a component, which means having a DOM representation that
 * is a child of the DOM representation of that component.
 *
 * @class ReactComponent
 */
var ReactComponent = {

  injection: {
    injectEnvironment: function(ReactComponentEnvironment) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !injected,
        'ReactComponent: injectEnvironment() can only be called once.'
      ) : invariant(!injected));
      mountImageIntoNode = ReactComponentEnvironment.mountImageIntoNode;
      unmountIDFromEnvironment =
        ReactComponentEnvironment.unmountIDFromEnvironment;
      ReactComponent.BackendIDOperations =
        ReactComponentEnvironment.BackendIDOperations;
      injected = true;
    }
  },

  /**
   * @internal
   */
  LifeCycle: ComponentLifeCycle,

  /**
   * Injected module that provides ability to mutate individual properties.
   * Injected into the base class because many different subclasses need access
   * to this.
   *
   * @internal
   */
  BackendIDOperations: null,

  /**
   * Base functionality for every ReactComponent constructor. Mixed into the
   * `ReactComponent` prototype, but exposed statically for easy access.
   *
   * @lends {ReactComponent.prototype}
   */
  Mixin: {

    /**
     * Checks whether or not this component is mounted.
     *
     * @return {boolean} True if mounted, false otherwise.
     * @final
     * @protected
     */
    isMounted: function() {
      return this._lifeCycleState === ComponentLifeCycle.MOUNTED;
    },

    /**
     * Sets a subset of the props.
     *
     * @param {object} partialProps Subset of the next props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @public
     */
    setProps: function(partialProps, callback) {
      // Merge with the pending element if it exists, otherwise with existing
      // element props.
      var element = this._pendingElement || this._currentElement;
      this.replaceProps(
        assign({}, element.props, partialProps),
        callback
      );
    },

    /**
     * Replaces all of the props.
     *
     * @param {object} props New props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @public
     */
    replaceProps: function(props, callback) {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'replaceProps(...): Can only update a mounted component.'
      ) : invariant(this.isMounted()));
      ("production" !== process.env.NODE_ENV ? invariant(
        this._mountDepth === 0,
        'replaceProps(...): You called `setProps` or `replaceProps` on a ' +
        'component with a parent. This is an anti-pattern since props will ' +
        'get reactively updated when rendered. Instead, change the owner\'s ' +
        '`render` method to pass the correct value as props to the component ' +
        'where it is created.'
      ) : invariant(this._mountDepth === 0));
      // This is a deoptimized path. We optimize for always having a element.
      // This creates an extra internal element.
      this._pendingElement = ReactElement.cloneAndReplaceProps(
        this._pendingElement || this._currentElement,
        props
      );
      ReactUpdates.enqueueUpdate(this, callback);
    },

    /**
     * Schedule a partial update to the props. Only used for internal testing.
     *
     * @param {object} partialProps Subset of the next props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @internal
     */
    _setPropsInternal: function(partialProps, callback) {
      // This is a deoptimized path. We optimize for always having a element.
      // This creates an extra internal element.
      var element = this._pendingElement || this._currentElement;
      this._pendingElement = ReactElement.cloneAndReplaceProps(
        element,
        assign({}, element.props, partialProps)
      );
      ReactUpdates.enqueueUpdate(this, callback);
    },

    /**
     * Base constructor for all React components.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.construct.call(this, ...)`.
     *
     * @param {ReactElement} element
     * @internal
     */
    construct: function(element) {
      // This is the public exposed props object after it has been processed
      // with default props. The element's props represents the true internal
      // state of the props.
      this.props = element.props;
      // Record the component responsible for creating this component.
      // This is accessible through the element but we maintain an extra
      // field for compatibility with devtools and as a way to make an
      // incremental update. TODO: Consider deprecating this field.
      this._owner = element._owner;

      // All components start unmounted.
      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;

      // See ReactUpdates.
      this._pendingCallbacks = null;

      // We keep the old element and a reference to the pending element
      // to track updates.
      this._currentElement = element;
      this._pendingElement = null;
    },

    /**
     * Initializes the component, renders markup, and registers event listeners.
     *
     * NOTE: This does not insert any nodes into the DOM.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.mountComponent.call(this, ...)`.
     *
     * @param {string} rootID DOM ID of the root node.
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {number} mountDepth number of components in the owner hierarchy.
     * @return {?string} Rendered markup to be inserted into the DOM.
     * @internal
     */
    mountComponent: function(rootID, transaction, mountDepth) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !this.isMounted(),
        'mountComponent(%s, ...): Can only mount an unmounted component. ' +
        'Make sure to avoid storing components between renders or reusing a ' +
        'single component instance in multiple places.',
        rootID
      ) : invariant(!this.isMounted()));
      var ref = this._currentElement.ref;
      if (ref != null) {
        var owner = this._currentElement._owner;
        ReactOwner.addComponentAsRefTo(this, ref, owner);
      }
      this._rootNodeID = rootID;
      this._lifeCycleState = ComponentLifeCycle.MOUNTED;
      this._mountDepth = mountDepth;
      // Effectively: return '';
    },

    /**
     * Releases any resources allocated by `mountComponent`.
     *
     * NOTE: This does not remove any nodes from the DOM.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.unmountComponent.call(this)`.
     *
     * @internal
     */
    unmountComponent: function() {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'unmountComponent(): Can only unmount a mounted component.'
      ) : invariant(this.isMounted()));
      var ref = this._currentElement.ref;
      if (ref != null) {
        ReactOwner.removeComponentAsRefFrom(this, ref, this._owner);
      }
      unmountIDFromEnvironment(this._rootNodeID);
      this._rootNodeID = null;
      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;
    },

    /**
     * Given a new instance of this component, updates the rendered DOM nodes
     * as if that instance was rendered instead.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.receiveComponent.call(this, ...)`.
     *
     * @param {object} nextComponent Next set of properties.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    receiveComponent: function(nextElement, transaction) {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'receiveComponent(...): Can only update a mounted component.'
      ) : invariant(this.isMounted()));
      this._pendingElement = nextElement;
      this.performUpdateIfNecessary(transaction);
    },

    /**
     * If `_pendingElement` is set, update the component.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    performUpdateIfNecessary: function(transaction) {
      if (this._pendingElement == null) {
        return;
      }
      var prevElement = this._currentElement;
      var nextElement = this._pendingElement;
      this._currentElement = nextElement;
      this.props = nextElement.props;
      this._owner = nextElement._owner;
      this._pendingElement = null;
      this.updateComponent(transaction, prevElement);
    },

    /**
     * Updates the component's currently mounted representation.
     *
     * @param {ReactReconcileTransaction} transaction
     * @param {object} prevElement
     * @internal
     */
    updateComponent: function(transaction, prevElement) {
      var nextElement = this._currentElement;

      // If either the owner or a `ref` has changed, make sure the newest owner
      // has stored a reference to `this`, and the previous owner (if different)
      // has forgotten the reference to `this`. We use the element instead
      // of the public this.props because the post processing cannot determine
      // a ref. The ref conceptually lives on the element.

      // TODO: Should this even be possible? The owner cannot change because
      // it's forbidden by shouldUpdateReactComponent. The ref can change
      // if you swap the keys of but not the refs. Reconsider where this check
      // is made. It probably belongs where the key checking and
      // instantiateReactComponent is done.

      if (nextElement._owner !== prevElement._owner ||
          nextElement.ref !== prevElement.ref) {
        if (prevElement.ref != null) {
          ReactOwner.removeComponentAsRefFrom(
            this, prevElement.ref, prevElement._owner
          );
        }
        // Correct, even if the owner is the same, and only the ref has changed.
        if (nextElement.ref != null) {
          ReactOwner.addComponentAsRefTo(
            this,
            nextElement.ref,
            nextElement._owner
          );
        }
      }
    },

    /**
     * Mounts this component and inserts it into the DOM.
     *
     * @param {string} rootID DOM ID of the root node.
     * @param {DOMElement} container DOM element to mount into.
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @final
     * @internal
     * @see {ReactMount.render}
     */
    mountComponentIntoNode: function(rootID, container, shouldReuseMarkup) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
      transaction.perform(
        this._mountComponentIntoNode,
        this,
        rootID,
        container,
        transaction,
        shouldReuseMarkup
      );
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    },

    /**
     * @param {string} rootID DOM ID of the root node.
     * @param {DOMElement} container DOM element to mount into.
     * @param {ReactReconcileTransaction} transaction
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @final
     * @private
     */
    _mountComponentIntoNode: function(
        rootID,
        container,
        transaction,
        shouldReuseMarkup) {
      var markup = this.mountComponent(rootID, transaction, 0);
      mountImageIntoNode(markup, container, shouldReuseMarkup);
    },

    /**
     * Checks if this component is owned by the supplied `owner` component.
     *
     * @param {ReactComponent} owner Component to check.
     * @return {boolean} True if `owners` owns this component.
     * @final
     * @internal
     */
    isOwnedBy: function(owner) {
      return this._owner === owner;
    },

    /**
     * Gets another component, that shares the same owner as this one, by ref.
     *
     * @param {string} ref of a sibling Component.
     * @return {?ReactComponent} the actual sibling Component.
     * @final
     * @internal
     */
    getSiblingByRef: function(ref) {
      var owner = this._owner;
      if (!owner || !owner.refs) {
        return null;
      }
      return owner.refs[ref];
    }
  }
};

module.exports = ReactComponent;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./ReactElement":78,"./ReactOwner":93,"./ReactUpdates":105,"./invariant":153,"./keyMirror":159,"oMfpAn":6}],59:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */

/*jslint evil: true */

"use strict";

var ReactDOMIDOperations = require("./ReactDOMIDOperations");
var ReactMarkupChecksum = require("./ReactMarkupChecksum");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");
var ReactReconcileTransaction = require("./ReactReconcileTransaction");

var getReactRootElementInContainer = require("./getReactRootElementInContainer");
var invariant = require("./invariant");
var setInnerHTML = require("./setInnerHTML");


var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;


/**
 * Abstracts away all functionality of `ReactComponent` requires knowledge of
 * the browser context.
 */
var ReactComponentBrowserEnvironment = {
  ReactReconcileTransaction: ReactReconcileTransaction,

  BackendIDOperations: ReactDOMIDOperations,

  /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */
  unmountIDFromEnvironment: function(rootNodeID) {
    ReactMount.purgeID(rootNodeID);
  },

  /**
   * @param {string} markup Markup string to place into the DOM Element.
   * @param {DOMElement} container DOM Element to insert markup into.
   * @param {boolean} shouldReuseMarkup Should reuse the existing markup in the
   * container if possible.
   */
  mountImageIntoNode: ReactPerf.measure(
    'ReactComponentBrowserEnvironment',
    'mountImageIntoNode',
    function(markup, container, shouldReuseMarkup) {
      ("production" !== process.env.NODE_ENV ? invariant(
        container && (
          container.nodeType === ELEMENT_NODE_TYPE ||
            container.nodeType === DOC_NODE_TYPE
        ),
        'mountComponentIntoNode(...): Target container is not valid.'
      ) : invariant(container && (
        container.nodeType === ELEMENT_NODE_TYPE ||
          container.nodeType === DOC_NODE_TYPE
      )));

      if (shouldReuseMarkup) {
        if (ReactMarkupChecksum.canReuseMarkup(
          markup,
          getReactRootElementInContainer(container))) {
          return;
        } else {
          ("production" !== process.env.NODE_ENV ? invariant(
            container.nodeType !== DOC_NODE_TYPE,
            'You\'re trying to render a component to the document using ' +
            'server rendering but the checksum was invalid. This usually ' +
            'means you rendered a different component type or props on ' +
            'the client from the one on the server, or your render() ' +
            'methods are impure. React cannot handle this case due to ' +
            'cross-browser quirks by rendering at the document root. You ' +
            'should look for environment dependent code in your components ' +
            'and ensure the props are the same client and server side.'
          ) : invariant(container.nodeType !== DOC_NODE_TYPE));

          if ("production" !== process.env.NODE_ENV) {
            console.warn(
              'React attempted to use reuse markup in a container but the ' +
              'checksum was invalid. This generally means that you are ' +
              'using server rendering and the markup generated on the ' +
              'server was not what the client was expecting. React injected ' +
              'new markup to compensate which works but you have lost many ' +
              'of the benefits of server rendering. Instead, figure out ' +
              'why the markup being generated is different on the client ' +
              'or server.'
            );
          }
        }
      }

      ("production" !== process.env.NODE_ENV ? invariant(
        container.nodeType !== DOC_NODE_TYPE,
        'You\'re trying to render a component to the document but ' +
          'you didn\'t use server rendering. We can\'t do this ' +
          'without using server rendering due to cross-browser quirks. ' +
          'See renderComponentToString() for server rendering.'
      ) : invariant(container.nodeType !== DOC_NODE_TYPE));

      setInnerHTML(container, markup);
    }
  )
};

module.exports = ReactComponentBrowserEnvironment;

}).call(this,require("oMfpAn"))
},{"./ReactDOMIDOperations":67,"./ReactMarkupChecksum":88,"./ReactMount":89,"./ReactPerf":94,"./ReactReconcileTransaction":100,"./getReactRootElementInContainer":147,"./invariant":153,"./setInnerHTML":167,"oMfpAn":6}],60:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */

"use strict";

var ReactComponent = require("./ReactComponent");
var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactErrorUtils = require("./ReactErrorUtils");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactOwner = require("./ReactOwner");
var ReactPerf = require("./ReactPerf");
var ReactPropTransferer = require("./ReactPropTransferer");
var ReactPropTypeLocations = require("./ReactPropTypeLocations");
var ReactPropTypeLocationNames = require("./ReactPropTypeLocationNames");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");
var keyMirror = require("./keyMirror");
var keyOf = require("./keyOf");
var monitorCodeUse = require("./monitorCodeUse");
var mapObject = require("./mapObject");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");
var warning = require("./warning");

var MIXINS_KEY = keyOf({mixins: null});

/**
 * Policies that describe methods in `ReactCompositeComponentInterface`.
 */
var SpecPolicy = keyMirror({
  /**
   * These methods may be defined only once by the class specification or mixin.
   */
  DEFINE_ONCE: null,
  /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
  DEFINE_MANY: null,
  /**
   * These methods are overriding the base ReactCompositeComponent class.
   */
  OVERRIDE_BASE: null,
  /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
  DEFINE_MANY_MERGED: null
});


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactCompositeComponent`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactCompositeComponentInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will available on the prototype.
 *
 * @interface ReactCompositeComponentInterface
 * @internal
 */
var ReactCompositeComponentInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: SpecPolicy.DEFINE_MANY,

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: SpecPolicy.DEFINE_MANY,

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * @return {object}
   * @optional
   */
  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: SpecPolicy.DEFINE_ONCE,



  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: SpecPolicy.DEFINE_MANY,



  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: SpecPolicy.OVERRIDE_BASE

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function(Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function(Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function(Constructor, childContextTypes) {
    validateTypeDef(
      Constructor,
      childContextTypes,
      ReactPropTypeLocations.childContext
    );
    Constructor.childContextTypes = assign(
      {},
      Constructor.childContextTypes,
      childContextTypes
    );
  },
  contextTypes: function(Constructor, contextTypes) {
    validateTypeDef(
      Constructor,
      contextTypes,
      ReactPropTypeLocations.context
    );
    Constructor.contextTypes = assign(
      {},
      Constructor.contextTypes,
      contextTypes
    );
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function(Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(
        Constructor.getDefaultProps,
        getDefaultProps
      );
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function(Constructor, propTypes) {
    validateTypeDef(
      Constructor,
      propTypes,
      ReactPropTypeLocations.prop
    );
    Constructor.propTypes = assign(
      {},
      Constructor.propTypes,
      propTypes
    );
  },
  statics: function(Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  }
};

function getDeclarationErrorAddendum(component) {
  var owner = component._owner || null;
  if (owner && owner.constructor && owner.constructor.displayName) {
    return ' Check the render method of `' + owner.constructor.displayName +
      '`.';
  }
  return '';
}

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof typeDef[propName] == 'function',
        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
        'React.PropTypes.',
        Constructor.displayName || 'ReactCompositeComponent',
        ReactPropTypeLocationNames[location],
        propName
      ) : invariant(typeof typeDef[propName] == 'function'));
    }
  }
}

function validateMethodOverride(proto, name) {
  var specPolicy = ReactCompositeComponentInterface.hasOwnProperty(name) ?
    ReactCompositeComponentInterface[name] :
    null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactCompositeComponentMixin.hasOwnProperty(name)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      specPolicy === SpecPolicy.OVERRIDE_BASE,
      'ReactCompositeComponentInterface: You are attempting to override ' +
      '`%s` from your class specification. Ensure that your method names ' +
      'do not overlap with React methods.',
      name
    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (proto.hasOwnProperty(name)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      specPolicy === SpecPolicy.DEFINE_MANY ||
      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
      'ReactCompositeComponentInterface: You are attempting to define ' +
      '`%s` on your component more than once. This conflict may be due ' +
      'to a mixin.',
      name
    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
  }
}

function validateLifeCycleOnReplaceState(instance) {
  var compositeLifeCycleState = instance._compositeLifeCycleState;
  ("production" !== process.env.NODE_ENV ? invariant(
    instance.isMounted() ||
      compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
    'replaceState(...): Can only update a mounted or mounting component.'
  ) : invariant(instance.isMounted() ||
    compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactCurrentOwner.current == null,
    'replaceState(...): Cannot update during an existing state transition ' +
    '(such as within `render`). Render methods should be a pure function ' +
    'of props and state.'
  ) : invariant(ReactCurrentOwner.current == null));
  ("production" !== process.env.NODE_ENV ? invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING,
    'replaceState(...): Cannot update while unmounting component. This ' +
    'usually means you called setState() on an unmounted component.'
  ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING));
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building `ReactCompositeComponent` classses.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    return;
  }

  ("production" !== process.env.NODE_ENV ? invariant(
    !ReactLegacyElement.isValidFactory(spec),
    'ReactCompositeComponent: You\'re attempting to ' +
    'use a component class as a mixin. Instead, just use a regular object.'
  ) : invariant(!ReactLegacyElement.isValidFactory(spec)));
  ("production" !== process.env.NODE_ENV ? invariant(
    !ReactElement.isValidElement(spec),
    'ReactCompositeComponent: You\'re attempting to ' +
    'use a component as a mixin. Instead, just use a regular object.'
  ) : invariant(!ReactElement.isValidElement(spec)));

  var proto = Constructor.prototype;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above
      continue;
    }

    var property = spec[name];
    validateMethodOverride(proto, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactCompositeComponent methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isCompositeComponentMethod =
        ReactCompositeComponentInterface.hasOwnProperty(name);
      var isAlreadyDefined = proto.hasOwnProperty(name);
      var markedDontBind = property && property.__reactDontBind;
      var isFunction = typeof property === 'function';
      var shouldAutoBind =
        isFunction &&
        !isCompositeComponentMethod &&
        !isAlreadyDefined &&
        !markedDontBind;

      if (shouldAutoBind) {
        if (!proto.__reactAutoBindMap) {
          proto.__reactAutoBindMap = {};
        }
        proto.__reactAutoBindMap[name] = property;
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactCompositeComponentInterface[name];

          // These cases should already be caught by validateMethodOverride
          ("production" !== process.env.NODE_ENV ? invariant(
            isCompositeComponentMethod && (
              specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
              specPolicy === SpecPolicy.DEFINE_MANY
            ),
            'ReactCompositeComponent: Unexpected spec policy %s for key %s ' +
            'when mixing in component specs.',
            specPolicy,
            name
          ) : invariant(isCompositeComponentMethod && (
            specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
            specPolicy === SpecPolicy.DEFINE_MANY
          )));

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if ("production" !== process.env.NODE_ENV) {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    ("production" !== process.env.NODE_ENV ? invariant(
      !isReserved,
      'ReactCompositeComponent: You are attempting to define a reserved ' +
      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
      'as an instance property instead; it will still be accessible on the ' +
      'constructor.',
      name
    ) : invariant(!isReserved));

    var isInherited = name in Constructor;
    ("production" !== process.env.NODE_ENV ? invariant(
      !isInherited,
      'ReactCompositeComponent: You are attempting to define ' +
      '`%s` on your component more than once. This conflict may be ' +
      'due to a mixin.',
      name
    ) : invariant(!isInherited));
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeObjectsWithNoDuplicateKeys(one, two) {
  ("production" !== process.env.NODE_ENV ? invariant(
    one && two && typeof one === 'object' && typeof two === 'object',
    'mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects'
  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));

  mapObject(two, function(value, key) {
    ("production" !== process.env.NODE_ENV ? invariant(
      one[key] === undefined,
      'mergeObjectsWithNoDuplicateKeys(): ' +
      'Tried to merge two objects with the same key: `%s`. This conflict ' +
      'may be due to a mixin; in particular, this may be caused by two ' +
      'getInitialState() or getDefaultProps() methods returning objects ' +
      'with clashing keys.',
      key
    ) : invariant(one[key] === undefined));
    one[key] = value;
  });
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    return mergeObjectsWithNoDuplicateKeys(a, b);
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * `ReactCompositeComponent` maintains an auxiliary life cycle state in
 * `this._compositeLifeCycleState` (which can be null).
 *
 * This is different from the life cycle state maintained by `ReactComponent` in
 * `this._lifeCycleState`. The following diagram shows how the states overlap in
 * time. There are times when the CompositeLifeCycle is null - at those times it
 * is only meaningful to look at ComponentLifeCycle alone.
 *
 * Top Row: ReactComponent.ComponentLifeCycle
 * Low Row: ReactComponent.CompositeLifeCycle
 *
 * +-------+---------------------------------+--------+
 * |  UN   |             MOUNTED             |   UN   |
 * |MOUNTED|                                 | MOUNTED|
 * +-------+---------------------------------+--------+
 * |       ^--------+   +-------+   +--------^        |
 * |       |        |   |       |   |        |        |
 * |    0--|MOUNTING|-0-|RECEIVE|-0-|   UN   |--->0   |
 * |       |        |   |PROPS  |   |MOUNTING|        |
 * |       |        |   |       |   |        |        |
 * |       |        |   |       |   |        |        |
 * |       +--------+   +-------+   +--------+        |
 * |       |                                 |        |
 * +-------+---------------------------------+--------+
 */
var CompositeLifeCycle = keyMirror({
  /**
   * Components in the process of being mounted respond to state changes
   * differently.
   */
  MOUNTING: null,
  /**
   * Components in the process of being unmounted are guarded against state
   * changes.
   */
  UNMOUNTING: null,
  /**
   * Components that are mounted and receiving new props respond to state
   * changes differently.
   */
  RECEIVING_PROPS: null
});

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var ReactCompositeComponentMixin = {

  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function(element) {
    // Children can be either an array or more than one argument
    ReactComponent.Mixin.construct.apply(this, arguments);
    ReactOwner.Mixin.construct.apply(this, arguments);

    this.state = null;
    this._pendingState = null;

    // This is the public post-processed context. The real context and pending
    // context lives on the element.
    this.context = null;

    this._compositeLifeCycleState = null;
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function() {
    return ReactComponent.Mixin.isMounted.call(this) &&
      this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING;
  },

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    'mountComponent',
    function(rootID, transaction, mountDepth) {
      ReactComponent.Mixin.mountComponent.call(
        this,
        rootID,
        transaction,
        mountDepth
      );
      this._compositeLifeCycleState = CompositeLifeCycle.MOUNTING;

      if (this.__reactAutoBindMap) {
        this._bindAutoBindMethods();
      }

      this.context = this._processContext(this._currentElement._context);
      this.props = this._processProps(this.props);

      this.state = this.getInitialState ? this.getInitialState() : null;
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof this.state === 'object' && !Array.isArray(this.state),
        '%s.getInitialState(): must return an object or null',
        this.constructor.displayName || 'ReactCompositeComponent'
      ) : invariant(typeof this.state === 'object' && !Array.isArray(this.state)));

      this._pendingState = null;
      this._pendingForceUpdate = false;

      if (this.componentWillMount) {
        this.componentWillMount();
        // When mounting, calls to `setState` by `componentWillMount` will set
        // `this._pendingState` without triggering a re-render.
        if (this._pendingState) {
          this.state = this._pendingState;
          this._pendingState = null;
        }
      }

      this._renderedComponent = instantiateReactComponent(
        this._renderValidatedComponent(),
        this._currentElement.type // The wrapping type
      );

      // Done with mounting, `setState` will now trigger UI changes.
      this._compositeLifeCycleState = null;
      var markup = this._renderedComponent.mountComponent(
        rootID,
        transaction,
        mountDepth + 1
      );
      if (this.componentDidMount) {
        transaction.getReactMountReady().enqueue(this.componentDidMount, this);
      }
      return markup;
    }
  ),

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function() {
    this._compositeLifeCycleState = CompositeLifeCycle.UNMOUNTING;
    if (this.componentWillUnmount) {
      this.componentWillUnmount();
    }
    this._compositeLifeCycleState = null;

    this._renderedComponent.unmountComponent();
    this._renderedComponent = null;

    ReactComponent.Mixin.unmountComponent.call(this);

    // Some existing components rely on this.props even after they've been
    // destroyed (in event handlers).
    // TODO: this.props = null;
    // TODO: this.state = null;
  },

  /**
   * Sets a subset of the state. Always use this or `replaceState` to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  setState: function(partialState, callback) {
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof partialState === 'object' || partialState == null,
      'setState(...): takes an object of state variables to update.'
    ) : invariant(typeof partialState === 'object' || partialState == null));
    if ("production" !== process.env.NODE_ENV){
      ("production" !== process.env.NODE_ENV ? warning(
        partialState != null,
        'setState(...): You passed an undefined or null state object; ' +
        'instead, use forceUpdate().'
      ) : null);
    }
    // Merge with `_pendingState` if it exists, otherwise with existing state.
    this.replaceState(
      assign({}, this._pendingState || this.state, partialState),
      callback
    );
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {object} completeState Next state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  replaceState: function(completeState, callback) {
    validateLifeCycleOnReplaceState(this);
    this._pendingState = completeState;
    if (this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING) {
      // If we're in a componentWillMount handler, don't enqueue a rerender
      // because ReactUpdates assumes we're in a browser context (which is wrong
      // for server rendering) and we're about to do a render anyway.
      // TODO: The callback here is ignored when setState is called from
      // componentWillMount. Either fix it or disallow doing so completely in
      // favor of getInitialState.
      ReactUpdates.enqueueUpdate(this, callback);
    }
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function(context) {
    var maskedContext = null;
    var contextTypes = this.constructor.contextTypes;
    if (contextTypes) {
      maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      if ("production" !== process.env.NODE_ENV) {
        this._checkPropTypes(
          contextTypes,
          maskedContext,
          ReactPropTypeLocations.context
        );
      }
    }
    return maskedContext;
  },

  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function(currentContext) {
    var childContext = this.getChildContext && this.getChildContext();
    var displayName = this.constructor.displayName || 'ReactCompositeComponent';
    if (childContext) {
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof this.constructor.childContextTypes === 'object',
        '%s.getChildContext(): childContextTypes must be defined in order to ' +
        'use getChildContext().',
        displayName
      ) : invariant(typeof this.constructor.childContextTypes === 'object'));
      if ("production" !== process.env.NODE_ENV) {
        this._checkPropTypes(
          this.constructor.childContextTypes,
          childContext,
          ReactPropTypeLocations.childContext
        );
      }
      for (var name in childContext) {
        ("production" !== process.env.NODE_ENV ? invariant(
          name in this.constructor.childContextTypes,
          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
          displayName,
          name
        ) : invariant(name in this.constructor.childContextTypes));
      }
      return assign({}, currentContext, childContext);
    }
    return currentContext;
  },

  /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */
  _processProps: function(newProps) {
    if ("production" !== process.env.NODE_ENV) {
      var propTypes = this.constructor.propTypes;
      if (propTypes) {
        this._checkPropTypes(propTypes, newProps, ReactPropTypeLocations.prop);
      }
    }
    return newProps;
  },

  /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkPropTypes: function(propTypes, props, location) {
    // TODO: Stop validating prop types here and only use the element
    // validation.
    var componentName = this.constructor.displayName;
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error =
          propTypes[propName](props, propName, componentName, location);
        if (error instanceof Error) {
          // We may want to extend this logic for similar errors in
          // renderComponent calls, so I'm abstracting it away into
          // a function to minimize refactoring in the future
          var addendum = getDeclarationErrorAddendum(this);
          ("production" !== process.env.NODE_ENV ? warning(false, error.message + addendum) : null);
        }
      }
    }
  },

  /**
   * If any of `_pendingElement`, `_pendingState`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function(transaction) {
    var compositeLifeCycleState = this._compositeLifeCycleState;
    // Do not trigger a state transition if we are in the middle of mounting or
    // receiving props because both of those will already be doing this.
    if (compositeLifeCycleState === CompositeLifeCycle.MOUNTING ||
        compositeLifeCycleState === CompositeLifeCycle.RECEIVING_PROPS) {
      return;
    }

    if (this._pendingElement == null &&
        this._pendingState == null &&
        !this._pendingForceUpdate) {
      return;
    }

    var nextContext = this.context;
    var nextProps = this.props;
    var nextElement = this._currentElement;
    if (this._pendingElement != null) {
      nextElement = this._pendingElement;
      nextContext = this._processContext(nextElement._context);
      nextProps = this._processProps(nextElement.props);
      this._pendingElement = null;

      this._compositeLifeCycleState = CompositeLifeCycle.RECEIVING_PROPS;
      if (this.componentWillReceiveProps) {
        this.componentWillReceiveProps(nextProps, nextContext);
      }
    }

    this._compositeLifeCycleState = null;

    var nextState = this._pendingState || this.state;
    this._pendingState = null;

    var shouldUpdate =
      this._pendingForceUpdate ||
      !this.shouldComponentUpdate ||
      this.shouldComponentUpdate(nextProps, nextState, nextContext);

    if ("production" !== process.env.NODE_ENV) {
      if (typeof shouldUpdate === "undefined") {
        console.warn(
          (this.constructor.displayName || 'ReactCompositeComponent') +
          '.shouldComponentUpdate(): Returned undefined instead of a ' +
          'boolean value. Make sure to return true or false.'
        );
      }
    }

    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(
        nextElement,
        nextProps,
        nextState,
        nextContext,
        transaction
      );
    } else {
      // If it's determined that a component should not update, we still want
      // to set props and state.
      this._currentElement = nextElement;
      this.props = nextProps;
      this.state = nextState;
      this.context = nextContext;

      // Owner cannot change because shouldUpdateReactComponent doesn't allow
      // it. TODO: Remove this._owner completely.
      this._owner = nextElement._owner;
    }
  },

  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @private
   */
  _performComponentUpdate: function(
    nextElement,
    nextProps,
    nextState,
    nextContext,
    transaction
  ) {
    var prevElement = this._currentElement;
    var prevProps = this.props;
    var prevState = this.state;
    var prevContext = this.context;

    if (this.componentWillUpdate) {
      this.componentWillUpdate(nextProps, nextState, nextContext);
    }

    this._currentElement = nextElement;
    this.props = nextProps;
    this.state = nextState;
    this.context = nextContext;

    // Owner cannot change because shouldUpdateReactComponent doesn't allow
    // it. TODO: Remove this._owner completely.
    this._owner = nextElement._owner;

    this.updateComponent(
      transaction,
      prevElement
    );

    if (this.componentDidUpdate) {
      transaction.getReactMountReady().enqueue(
        this.componentDidUpdate.bind(this, prevProps, prevState, prevContext),
        this
      );
    }
  },

  receiveComponent: function(nextElement, transaction) {
    if (nextElement === this._currentElement &&
        nextElement._owner != null) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for a element created outside a composite to be
      // deeply mutated and reused.
      return;
    }

    ReactComponent.Mixin.receiveComponent.call(
      this,
      nextElement,
      transaction
    );
  },

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @internal
   * @overridable
   */
  updateComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    'updateComponent',
    function(transaction, prevParentElement) {
      ReactComponent.Mixin.updateComponent.call(
        this,
        transaction,
        prevParentElement
      );

      var prevComponentInstance = this._renderedComponent;
      var prevElement = prevComponentInstance._currentElement;
      var nextElement = this._renderValidatedComponent();
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        prevComponentInstance.receiveComponent(nextElement, transaction);
      } else {
        // These two IDs are actually the same! But nothing should rely on that.
        var thisID = this._rootNodeID;
        var prevComponentID = prevComponentInstance._rootNodeID;
        prevComponentInstance.unmountComponent();
        this._renderedComponent = instantiateReactComponent(
          nextElement,
          this._currentElement.type
        );
        var nextMarkup = this._renderedComponent.mountComponent(
          thisID,
          transaction,
          this._mountDepth + 1
        );
        ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(
          prevComponentID,
          nextMarkup
        );
      }
    }
  ),

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldUpdateComponent`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */
  forceUpdate: function(callback) {
    var compositeLifeCycleState = this._compositeLifeCycleState;
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isMounted() ||
        compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
      'forceUpdate(...): Can only force an update on mounted or mounting ' +
        'components.'
    ) : invariant(this.isMounted() ||
      compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
    ("production" !== process.env.NODE_ENV ? invariant(
      compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
      ReactCurrentOwner.current == null,
      'forceUpdate(...): Cannot force an update while unmounting component ' +
      'or within a `render` function.'
    ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
    ReactCurrentOwner.current == null));
    this._pendingForceUpdate = true;
    ReactUpdates.enqueueUpdate(this, callback);
  },

  /**
   * @private
   */
  _renderValidatedComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    '_renderValidatedComponent',
    function() {
      var renderedComponent;
      var previousContext = ReactContext.current;
      ReactContext.current = this._processChildContext(
        this._currentElement._context
      );
      ReactCurrentOwner.current = this;
      try {
        renderedComponent = this.render();
        if (renderedComponent === null || renderedComponent === false) {
          renderedComponent = ReactEmptyComponent.getEmptyComponent();
          ReactEmptyComponent.registerNullComponentID(this._rootNodeID);
        } else {
          ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID);
        }
      } finally {
        ReactContext.current = previousContext;
        ReactCurrentOwner.current = null;
      }
      ("production" !== process.env.NODE_ENV ? invariant(
        ReactElement.isValidElement(renderedComponent),
        '%s.render(): A valid ReactComponent must be returned. You may have ' +
          'returned undefined, an array or some other invalid object.',
        this.constructor.displayName || 'ReactCompositeComponent'
      ) : invariant(ReactElement.isValidElement(renderedComponent)));
      return renderedComponent;
    }
  ),

  /**
   * @private
   */
  _bindAutoBindMethods: function() {
    for (var autoBindKey in this.__reactAutoBindMap) {
      if (!this.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
        continue;
      }
      var method = this.__reactAutoBindMap[autoBindKey];
      this[autoBindKey] = this._bindAutoBindMethod(ReactErrorUtils.guard(
        method,
        this.constructor.displayName + '.' + autoBindKey
      ));
    }
  },

  /**
   * Binds a method to the component.
   *
   * @param {function} method Method to be bound.
   * @private
   */
  _bindAutoBindMethod: function(method) {
    var component = this;
    var boundMethod = method.bind(component);
    if ("production" !== process.env.NODE_ENV) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis ) {for (var args=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          monitorCodeUse('react_bind_warning', { component: componentName });
          console.warn(
            'bind(): React component methods may only be bound to the ' +
            'component instance. See ' + componentName
          );
        } else if (!args.length) {
          monitorCodeUse('react_bind_warning', { component: componentName });
          console.warn(
            'bind(): You are binding a component method to the component. ' +
            'React does this for you automatically in a high-performance ' +
            'way, so you can safely remove this call. See ' + componentName
          );
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
};

var ReactCompositeComponentBase = function() {};
assign(
  ReactCompositeComponentBase.prototype,
  ReactComponent.Mixin,
  ReactOwner.Mixin,
  ReactPropTransferer.Mixin,
  ReactCompositeComponentMixin
);

/**
 * Module for creating composite components.
 *
 * @class ReactCompositeComponent
 * @extends ReactComponent
 * @extends ReactOwner
 * @extends ReactPropTransferer
 */
var ReactCompositeComponent = {

  LifeCycle: CompositeLifeCycle,

  Base: ReactCompositeComponentBase,

  /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function(spec) {
    var Constructor = function(props) {
      // This constructor is overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted. This will later be used
      // by the stand-alone class implementation.
    };
    Constructor.prototype = new ReactCompositeComponentBase();
    Constructor.prototype.constructor = Constructor;

    injectedMixins.forEach(
      mixSpecIntoComponent.bind(null, Constructor)
    );

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    ("production" !== process.env.NODE_ENV ? invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    ) : invariant(Constructor.prototype.render));

    if ("production" !== process.env.NODE_ENV) {
      if (Constructor.prototype.componentShouldUpdate) {
        monitorCodeUse(
          'react_component_should_update_warning',
          { component: spec.displayName }
        );
        console.warn(
          (spec.displayName || 'A component') + ' has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.'
         );
      }
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactCompositeComponentInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    if ("production" !== process.env.NODE_ENV) {
      return ReactLegacyElement.wrapFactory(
        ReactElementValidator.createFactory(Constructor)
      );
    }
    return ReactLegacyElement.wrapFactory(
      ReactElement.createFactory(Constructor)
    );
  },

  injection: {
    injectMixin: function(mixin) {
      injectedMixins.push(mixin);
    }
  }
};

module.exports = ReactCompositeComponent;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./ReactComponent":58,"./ReactContext":61,"./ReactCurrentOwner":62,"./ReactElement":78,"./ReactElementValidator":79,"./ReactEmptyComponent":80,"./ReactErrorUtils":81,"./ReactLegacyElement":87,"./ReactOwner":93,"./ReactPerf":94,"./ReactPropTransferer":95,"./ReactPropTypeLocationNames":96,"./ReactPropTypeLocations":97,"./ReactUpdates":105,"./instantiateReactComponent":152,"./invariant":153,"./keyMirror":159,"./keyOf":160,"./mapObject":161,"./monitorCodeUse":163,"./shouldUpdateReactComponent":169,"./warning":172,"oMfpAn":6}],61:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactContext
 */

"use strict";

var assign = require("./Object.assign");

/**
 * Keeps track of the current context.
 *
 * The context is automatically passed down the component ownership hierarchy
 * and is accessible via `this.context` on ReactCompositeComponents.
 */
var ReactContext = {

  /**
   * @internal
   * @type {object}
   */
  current: {},

  /**
   * Temporarily extends the current context while executing scopedCallback.
   *
   * A typical use case might look like
   *
   *  render: function() {
   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
   *
   *    ));
   *    return <div>{children}</div>;
   *  }
   *
   * @param {object} newContext New context to merge into the existing context
   * @param {function} scopedCallback Callback to run with the new context
   * @return {ReactComponent|array<ReactComponent>}
   */
  withContext: function(newContext, scopedCallback) {
    var result;
    var previousContext = ReactContext.current;
    ReactContext.current = assign({}, previousContext, newContext);
    try {
      result = scopedCallback();
    } finally {
      ReactContext.current = previousContext;
    }
    return result;
  }

};

module.exports = ReactContext;

},{"./Object.assign":52}],62:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */

"use strict";

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 *
 * The depth indicate how many composite components are above this render level.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;

},{}],63:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 * @typechecks static-only
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactLegacyElement = require("./ReactLegacyElement");

var mapObject = require("./mapObject");

/**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */
function createDOMFactory(tag) {
  if ("production" !== process.env.NODE_ENV) {
    return ReactLegacyElement.markNonLegacyFactory(
      ReactElementValidator.createFactory(tag)
    );
  }
  return ReactLegacyElement.markNonLegacyFactory(
    ReactElement.createFactory(tag)
  );
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOM = mapObject({
  a: 'a',
  abbr: 'abbr',
  address: 'address',
  area: 'area',
  article: 'article',
  aside: 'aside',
  audio: 'audio',
  b: 'b',
  base: 'base',
  bdi: 'bdi',
  bdo: 'bdo',
  big: 'big',
  blockquote: 'blockquote',
  body: 'body',
  br: 'br',
  button: 'button',
  canvas: 'canvas',
  caption: 'caption',
  cite: 'cite',
  code: 'code',
  col: 'col',
  colgroup: 'colgroup',
  data: 'data',
  datalist: 'datalist',
  dd: 'dd',
  del: 'del',
  details: 'details',
  dfn: 'dfn',
  dialog: 'dialog',
  div: 'div',
  dl: 'dl',
  dt: 'dt',
  em: 'em',
  embed: 'embed',
  fieldset: 'fieldset',
  figcaption: 'figcaption',
  figure: 'figure',
  footer: 'footer',
  form: 'form',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  head: 'head',
  header: 'header',
  hr: 'hr',
  html: 'html',
  i: 'i',
  iframe: 'iframe',
  img: 'img',
  input: 'input',
  ins: 'ins',
  kbd: 'kbd',
  keygen: 'keygen',
  label: 'label',
  legend: 'legend',
  li: 'li',
  link: 'link',
  main: 'main',
  map: 'map',
  mark: 'mark',
  menu: 'menu',
  menuitem: 'menuitem',
  meta: 'meta',
  meter: 'meter',
  nav: 'nav',
  noscript: 'noscript',
  object: 'object',
  ol: 'ol',
  optgroup: 'optgroup',
  option: 'option',
  output: 'output',
  p: 'p',
  param: 'param',
  picture: 'picture',
  pre: 'pre',
  progress: 'progress',
  q: 'q',
  rp: 'rp',
  rt: 'rt',
  ruby: 'ruby',
  s: 's',
  samp: 'samp',
  script: 'script',
  section: 'section',
  select: 'select',
  small: 'small',
  source: 'source',
  span: 'span',
  strong: 'strong',
  style: 'style',
  sub: 'sub',
  summary: 'summary',
  sup: 'sup',
  table: 'table',
  tbody: 'tbody',
  td: 'td',
  textarea: 'textarea',
  tfoot: 'tfoot',
  th: 'th',
  thead: 'thead',
  time: 'time',
  title: 'title',
  tr: 'tr',
  track: 'track',
  u: 'u',
  ul: 'ul',
  'var': 'var',
  video: 'video',
  wbr: 'wbr',

  // SVG
  circle: 'circle',
  defs: 'defs',
  ellipse: 'ellipse',
  g: 'g',
  line: 'line',
  linearGradient: 'linearGradient',
  mask: 'mask',
  path: 'path',
  pattern: 'pattern',
  polygon: 'polygon',
  polyline: 'polyline',
  radialGradient: 'radialGradient',
  rect: 'rect',
  stop: 'stop',
  svg: 'svg',
  text: 'text',
  tspan: 'tspan'

}, createDOMFactory);

module.exports = ReactDOM;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./ReactElementValidator":79,"./ReactLegacyElement":87,"./mapObject":161,"oMfpAn":6}],64:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

var keyMirror = require("./keyMirror");

// Store a reference to the <button> `ReactDOMComponent`. TODO: use string
var button = ReactElement.createFactory(ReactDOM.button.type);

var mouseListenerNames = keyMirror({
  onClick: true,
  onDoubleClick: true,
  onMouseDown: true,
  onMouseMove: true,
  onMouseUp: true,
  onClickCapture: true,
  onDoubleClickCapture: true,
  onMouseDownCapture: true,
  onMouseMoveCapture: true,
  onMouseUpCapture: true
});

/**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */
var ReactDOMButton = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMButton',

  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],

  render: function() {
    var props = {};

    // Copy the props; except the mouse listeners if we're disabled
    for (var key in this.props) {
      if (this.props.hasOwnProperty(key) &&
          (!this.props.disabled || !mouseListenerNames[key])) {
        props[key] = this.props[key];
      }
    }

    return button(props, this.props.children);
  }

});

module.exports = ReactDOMButton;

},{"./AutoFocusMixin":27,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78,"./keyMirror":159}],65:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */

"use strict";

var CSSPropertyOperations = require("./CSSPropertyOperations");
var DOMProperty = require("./DOMProperty");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactComponent = require("./ReactComponent");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactMount = require("./ReactMount");
var ReactMultiChild = require("./ReactMultiChild");
var ReactPerf = require("./ReactPerf");

var assign = require("./Object.assign");
var escapeTextForBrowser = require("./escapeTextForBrowser");
var invariant = require("./invariant");
var isEventSupported = require("./isEventSupported");
var keyOf = require("./keyOf");
var monitorCodeUse = require("./monitorCodeUse");

var deleteListener = ReactBrowserEventEmitter.deleteListener;
var listenTo = ReactBrowserEventEmitter.listenTo;
var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES = {'string': true, 'number': true};

var STYLE = keyOf({style: null});

var ELEMENT_NODE_TYPE = 1;

/**
 * @param {?object} props
 */
function assertValidProps(props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  ("production" !== process.env.NODE_ENV ? invariant(
    props.children == null || props.dangerouslySetInnerHTML == null,
    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
  ) : invariant(props.children == null || props.dangerouslySetInnerHTML == null));
  if ("production" !== process.env.NODE_ENV) {
    if (props.contentEditable && props.children != null) {
      console.warn(
        'A component is `contentEditable` and contains `children` managed by ' +
        'React. It is now your responsibility to guarantee that none of those '+
        'nodes are unexpectedly modified or duplicated. This is probably not ' +
        'intentional.'
      );
    }
  }
  ("production" !== process.env.NODE_ENV ? invariant(
    props.style == null || typeof props.style === 'object',
    'The `style` prop expects a mapping from style properties to values, ' +
    'not a string.'
  ) : invariant(props.style == null || typeof props.style === 'object'));
}

function putListener(id, registrationName, listener, transaction) {
  if ("production" !== process.env.NODE_ENV) {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    if (registrationName === 'onScroll' &&
        !isEventSupported('scroll', true)) {
      monitorCodeUse('react_no_scroll_event');
      console.warn('This browser doesn\'t support the `onScroll` event');
    }
  }
  var container = ReactMount.findReactContainerForID(id);
  if (container) {
    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
      container.ownerDocument :
      container;
    listenTo(registrationName, doc);
  }
  transaction.getPutListenerQueue().enqueuePutListener(
    id,
    registrationName,
    listener
  );
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.

var omittedCloseTags = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'keygen': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// We accept any tag to be rendered but since this gets injected into abitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
var hasOwnProperty = {}.hasOwnProperty;

function validateDangerousTag(tag) {
  if (!hasOwnProperty.call(validatedTagCache, tag)) {
    ("production" !== process.env.NODE_ENV ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
    validatedTagCache[tag] = true;
  }
}

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactComponent
 * @extends ReactMultiChild
 */
function ReactDOMComponent(tag) {
  validateDangerousTag(tag);
  this._tag = tag;
  this.tagName = tag.toUpperCase();
}

ReactDOMComponent.displayName = 'ReactDOMComponent';

ReactDOMComponent.Mixin = {

  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {string} The computed markup.
   */
  mountComponent: ReactPerf.measure(
    'ReactDOMComponent',
    'mountComponent',
    function(rootID, transaction, mountDepth) {
      ReactComponent.Mixin.mountComponent.call(
        this,
        rootID,
        transaction,
        mountDepth
      );
      assertValidProps(this.props);
      var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
      return (
        this._createOpenTagMarkupAndPutListeners(transaction) +
        this._createContentMarkup(transaction) +
        closeTag
      );
    }
  ),

  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function(transaction) {
    var props = this.props;
    var ret = '<' + this._tag;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;
      }
      var propValue = props[propKey];
      if (propValue == null) {
        continue;
      }
      if (registrationNameModules.hasOwnProperty(propKey)) {
        putListener(this._rootNodeID, propKey, propValue, transaction);
      } else {
        if (propKey === STYLE) {
          if (propValue) {
            propValue = props.style = assign({}, props.style);
          }
          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
        }
        var markup =
          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
        if (markup) {
          ret += ' ' + markup;
        }
      }
    }

    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret + '>';
    }

    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
    return ret + ' ' + markupForID + '>';
  },

  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Content markup.
   */
  _createContentMarkup: function(transaction) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = this.props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        return innerHTML.__html;
      }
    } else {
      var contentToUse =
        CONTENT_TYPES[typeof this.props.children] ? this.props.children : null;
      var childrenToUse = contentToUse != null ? null : this.props.children;
      if (contentToUse != null) {
        return escapeTextForBrowser(contentToUse);
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(
          childrenToUse,
          transaction
        );
        return mountImages.join('');
      }
    }
    return '';
  },

  receiveComponent: function(nextElement, transaction) {
    if (nextElement === this._currentElement &&
        nextElement._owner != null) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for a element created outside a composite to be
      // deeply mutated and reused.
      return;
    }

    ReactComponent.Mixin.receiveComponent.call(
      this,
      nextElement,
      transaction
    );
  },

  /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @internal
   * @overridable
   */
  updateComponent: ReactPerf.measure(
    'ReactDOMComponent',
    'updateComponent',
    function(transaction, prevElement) {
      assertValidProps(this._currentElement.props);
      ReactComponent.Mixin.updateComponent.call(
        this,
        transaction,
        prevElement
      );
      this._updateDOMProperties(prevElement.props, transaction);
      this._updateDOMChildren(prevElement.props, transaction);
    }
  ),

  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
  _updateDOMProperties: function(lastProps, transaction) {
    var nextProps = this.props;
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) ||
         !lastProps.hasOwnProperty(propKey)) {
        continue;
      }
      if (propKey === STYLE) {
        var lastStyle = lastProps[propKey];
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        deleteListener(this._rootNodeID, propKey);
      } else if (
          DOMProperty.isStandardName[propKey] ||
          DOMProperty.isCustomAttribute(propKey)) {
        ReactComponent.BackendIDOperations.deletePropertyByID(
          this._rootNodeID,
          propKey
        );
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = lastProps[propKey];
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
        continue;
      }
      if (propKey === STYLE) {
        if (nextProp) {
          nextProp = nextProps.style = assign({}, nextProp);
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) &&
                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) &&
                lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        putListener(this._rootNodeID, propKey, nextProp, transaction);
      } else if (
          DOMProperty.isStandardName[propKey] ||
          DOMProperty.isCustomAttribute(propKey)) {
        ReactComponent.BackendIDOperations.updatePropertyByID(
          this._rootNodeID,
          propKey,
          nextProp
        );
      }
    }
    if (styleUpdates) {
      ReactComponent.BackendIDOperations.updateStylesByID(
        this._rootNodeID,
        styleUpdates
      );
    }
  },

  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
  _updateDOMChildren: function(lastProps, transaction) {
    var nextProps = this.props;

    var lastContent =
      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent =
      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml =
      lastProps.dangerouslySetInnerHTML &&
      lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml =
      nextProps.dangerouslySetInnerHTML &&
      nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction);
    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        ReactComponent.BackendIDOperations.updateInnerHTMLByID(
          this._rootNodeID,
          nextHtml
        );
      }
    } else if (nextChildren != null) {
      this.updateChildren(nextChildren, transaction);
    }
  },

  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function() {
    this.unmountChildren();
    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
    ReactComponent.Mixin.unmountComponent.call(this);
  }

};

assign(
  ReactDOMComponent.prototype,
  ReactComponent.Mixin,
  ReactDOMComponent.Mixin,
  ReactMultiChild.Mixin,
  ReactBrowserComponentMixin
);

module.exports = ReactDOMComponent;

}).call(this,require("oMfpAn"))
},{"./CSSPropertyOperations":30,"./DOMProperty":36,"./DOMPropertyOperations":37,"./Object.assign":52,"./ReactBrowserComponentMixin":55,"./ReactBrowserEventEmitter":56,"./ReactComponent":58,"./ReactMount":89,"./ReactMultiChild":90,"./ReactPerf":94,"./escapeTextForBrowser":136,"./invariant":153,"./isEventSupported":154,"./keyOf":160,"./monitorCodeUse":163,"oMfpAn":6}],66:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMForm
 */

"use strict";

var EventConstants = require("./EventConstants");
var LocalEventTrapMixin = require("./LocalEventTrapMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

// Store a reference to the <form> `ReactDOMComponent`. TODO: use string
var form = ReactElement.createFactory(ReactDOM.form.type);

/**
 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
 * to capture it on the <form> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <form> a
 * composite component and use `componentDidMount` to attach the event handlers.
 */
var ReactDOMForm = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMForm',

  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

  render: function() {
    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
    // `jshint` fails to parse JSX so in order for linting to work in the open
    // source repo, we need to just use `ReactDOM.form`.
    return form(this.props);
  },

  componentDidMount: function() {
    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
  }
});

module.exports = ReactDOMForm;

},{"./EventConstants":41,"./LocalEventTrapMixin":50,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78}],67:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */

/*jslint evil: true */

"use strict";

var CSSPropertyOperations = require("./CSSPropertyOperations");
var DOMChildrenOperations = require("./DOMChildrenOperations");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");

var invariant = require("./invariant");
var setInnerHTML = require("./setInnerHTML");

/**
 * Errors for properties that should not be updated with `updatePropertyById()`.
 *
 * @type {object}
 * @private
 */
var INVALID_PROPERTY_ERRORS = {
  dangerouslySetInnerHTML:
    '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
  style: '`style` must be set using `updateStylesByID()`.'
};

/**
 * Operations used to process updates to DOM nodes. This is made injectable via
 * `ReactComponent.BackendIDOperations`.
 */
var ReactDOMIDOperations = {

  /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */
  updatePropertyByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updatePropertyByID',
    function(id, name, value) {
      var node = ReactMount.getNode(id);
      ("production" !== process.env.NODE_ENV ? invariant(
        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
        'updatePropertyByID(...): %s',
        INVALID_PROPERTY_ERRORS[name]
      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));

      // If we're updating to null or undefined, we should remove the property
      // from the DOM node instead of inadvertantly setting to a string. This
      // brings us in line with the same behavior we have on initial render.
      if (value != null) {
        DOMPropertyOperations.setValueForProperty(node, name, value);
      } else {
        DOMPropertyOperations.deleteValueForProperty(node, name);
      }
    }
  ),

  /**
   * Updates a DOM node to remove a property. This should only be used to remove
   * DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A property name to remove, see `DOMProperty`.
   * @internal
   */
  deletePropertyByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'deletePropertyByID',
    function(id, name, value) {
      var node = ReactMount.getNode(id);
      ("production" !== process.env.NODE_ENV ? invariant(
        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
        'updatePropertyByID(...): %s',
        INVALID_PROPERTY_ERRORS[name]
      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
      DOMPropertyOperations.deleteValueForProperty(node, name, value);
    }
  ),

  /**
   * Updates a DOM node with new style values. If a value is specified as '',
   * the corresponding style property will be unset.
   *
   * @param {string} id ID of the node to update.
   * @param {object} styles Mapping from styles to values.
   * @internal
   */
  updateStylesByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateStylesByID',
    function(id, styles) {
      var node = ReactMount.getNode(id);
      CSSPropertyOperations.setValueForStyles(node, styles);
    }
  ),

  /**
   * Updates a DOM node's innerHTML.
   *
   * @param {string} id ID of the node to update.
   * @param {string} html An HTML string.
   * @internal
   */
  updateInnerHTMLByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateInnerHTMLByID',
    function(id, html) {
      var node = ReactMount.getNode(id);
      setInnerHTML(node, html);
    }
  ),

  /**
   * Updates a DOM node's text content set by `props.content`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} content Text content.
   * @internal
   */
  updateTextContentByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateTextContentByID',
    function(id, content) {
      var node = ReactMount.getNode(id);
      DOMChildrenOperations.updateTextContent(node, content);
    }
  ),

  /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */
  dangerouslyReplaceNodeWithMarkupByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'dangerouslyReplaceNodeWithMarkupByID',
    function(id, markup) {
      var node = ReactMount.getNode(id);
      DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
    }
  ),

  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: ReactPerf.measure(
    'ReactDOMIDOperations',
    'dangerouslyProcessChildrenUpdates',
    function(updates, markup) {
      for (var i = 0; i < updates.length; i++) {
        updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
      }
      DOMChildrenOperations.processUpdates(updates, markup);
    }
  )
};

module.exports = ReactDOMIDOperations;

}).call(this,require("oMfpAn"))
},{"./CSSPropertyOperations":30,"./DOMChildrenOperations":35,"./DOMPropertyOperations":37,"./ReactMount":89,"./ReactPerf":94,"./invariant":153,"./setInnerHTML":167,"oMfpAn":6}],68:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMImg
 */

"use strict";

var EventConstants = require("./EventConstants");
var LocalEventTrapMixin = require("./LocalEventTrapMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

// Store a reference to the <img> `ReactDOMComponent`. TODO: use string
var img = ReactElement.createFactory(ReactDOM.img.type);

/**
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <img> element itself. There are lots of hacks we could do
 * to accomplish this, but the most reliable is to make <img> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */
var ReactDOMImg = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMImg',
  tagName: 'IMG',

  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

  render: function() {
    return img(this.props);
  },

  componentDidMount: function() {
    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
  }
});

module.exports = ReactDOMImg;

},{"./EventConstants":41,"./LocalEventTrapMixin":50,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78}],69:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactMount = require("./ReactMount");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");

// Store a reference to the <input> `ReactDOMComponent`. TODO: use string
var input = ReactElement.createFactory(ReactDOM.input.type);

var instancesByReactID = {};

function forceUpdateIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.forceUpdate();
  }
}

/**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var ReactDOMInput = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMInput',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  getInitialState: function() {
    var defaultValue = this.props.defaultValue;
    return {
      initialChecked: this.props.defaultChecked || false,
      initialValue: defaultValue != null ? defaultValue : null
    };
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    props.defaultChecked = null;
    props.defaultValue = null;

    var value = LinkedValueUtils.getValue(this);
    props.value = value != null ? value : this.state.initialValue;

    var checked = LinkedValueUtils.getChecked(this);
    props.checked = checked != null ? checked : this.state.initialChecked;

    props.onChange = this._handleChange;

    return input(props, this.props.children);
  },

  componentDidMount: function() {
    var id = ReactMount.getID(this.getDOMNode());
    instancesByReactID[id] = this;
  },

  componentWillUnmount: function() {
    var rootNode = this.getDOMNode();
    var id = ReactMount.getID(rootNode);
    delete instancesByReactID[id];
  },

  componentDidUpdate: function(prevProps, prevState, prevContext) {
    var rootNode = this.getDOMNode();
    if (this.props.checked != null) {
      DOMPropertyOperations.setValueForProperty(
        rootNode,
        'checked',
        this.props.checked || false
      );
    }

    var value = LinkedValueUtils.getValue(this);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }
    // Here we use asap to wait until all updates have propagated, which
    // is important when using controlled components within layers:
    // https://github.com/facebook/react/issues/1698
    ReactUpdates.asap(forceUpdateIfMounted, this);

    var name = this.props.name;
    if (this.props.type === 'radio' && name != null) {
      var rootNode = this.getDOMNode();
      var queryRoot = rootNode;

      while (queryRoot.parentNode) {
        queryRoot = queryRoot.parentNode;
      }

      // If `rootNode.form` was non-null, then we could try `form.elements`,
      // but that sometimes behaves strangely in IE8. We could also try using
      // `form.getElementsByName`, but that will only return direct children
      // and won't include inputs that use the HTML5 `form=` attribute. Since
      // the input might not even be in a form, let's just use the global
      // `querySelectorAll` to ensure we don't miss anything.
      var group = queryRoot.querySelectorAll(
        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
        var otherNode = group[i];
        if (otherNode === rootNode ||
            otherNode.form !== rootNode.form) {
          continue;
        }
        var otherID = ReactMount.getID(otherNode);
        ("production" !== process.env.NODE_ENV ? invariant(
          otherID,
          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
          'same `name` is not supported.'
        ) : invariant(otherID));
        var otherInstance = instancesByReactID[otherID];
        ("production" !== process.env.NODE_ENV ? invariant(
          otherInstance,
          'ReactDOMInput: Unknown radio button ID %s.',
          otherID
        ) : invariant(otherInstance));
        // If this is a controlled radio button group, forcing the input that
        // was previously checked to update will cause it to be come re-checked
        // as appropriate.
        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
      }
    }

    return returnValue;
  }

});

module.exports = ReactDOMInput;

}).call(this,require("oMfpAn"))
},{"./AutoFocusMixin":27,"./DOMPropertyOperations":37,"./LinkedValueUtils":49,"./Object.assign":52,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78,"./ReactMount":89,"./ReactUpdates":105,"./invariant":153,"oMfpAn":6}],70:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */

"use strict";

var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

var warning = require("./warning");

// Store a reference to the <option> `ReactDOMComponent`. TODO: use string
var option = ReactElement.createFactory(ReactDOM.option.type);

/**
 * Implements an <option> native component that warns when `selected` is set.
 */
var ReactDOMOption = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMOption',

  mixins: [ReactBrowserComponentMixin],

  componentWillMount: function() {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? warning(
        this.props.selected == null,
        'Use the `defaultValue` or `value` props on <select> instead of ' +
        'setting `selected` on <option>.'
      ) : null);
    }
  },

  render: function() {
    return option(this.props, this.props.children);
  }

});

module.exports = ReactDOMOption;

}).call(this,require("oMfpAn"))
},{"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78,"./warning":172,"oMfpAn":6}],71:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");

// Store a reference to the <select> `ReactDOMComponent`. TODO: use string
var select = ReactElement.createFactory(ReactDOM.select.type);

function updateWithPendingValueIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.setState({value: this._pendingValue});
    this._pendingValue = 0;
  }
}

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function selectValueType(props, propName, componentName) {
  if (props[propName] == null) {
    return;
  }
  if (props.multiple) {
    if (!Array.isArray(props[propName])) {
      return new Error(
        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
        ("`multiple` is true.")
      );
    }
  } else {
    if (Array.isArray(props[propName])) {
      return new Error(
        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
        ("value if `multiple` is false.")
      );
    }
  }
}

/**
 * If `value` is supplied, updates <option> elements on mount and update.
 * @param {ReactComponent} component Instance of ReactDOMSelect
 * @param {?*} propValue For uncontrolled components, null/undefined. For
 * controlled components, a string (or with `multiple`, a list of strings).
 * @private
 */
function updateOptions(component, propValue) {
  var multiple = component.props.multiple;
  var value = propValue != null ? propValue : component.state.value;
  var options = component.getDOMNode().options;
  var selectedValue, i, l;
  if (multiple) {
    selectedValue = {};
    for (i = 0, l = value.length; i < l; ++i) {
      selectedValue['' + value[i]] = true;
    }
  } else {
    selectedValue = '' + value;
  }
  for (i = 0, l = options.length; i < l; i++) {
    var selected = multiple ?
      selectedValue.hasOwnProperty(options[i].value) :
      options[i].value === selectedValue;

    if (selected !== options[i].selected) {
      options[i].selected = selected;
    }
  }
}

/**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * string. If `multiple` is true, the prop must be an array of strings.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var ReactDOMSelect = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMSelect',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  propTypes: {
    defaultValue: selectValueType,
    value: selectValueType
  },

  getInitialState: function() {
    return {value: this.props.defaultValue || (this.props.multiple ? [] : '')};
  },

  componentWillMount: function() {
    this._pendingValue = null;
  },

  componentWillReceiveProps: function(nextProps) {
    if (!this.props.multiple && nextProps.multiple) {
      this.setState({value: [this.state.value]});
    } else if (this.props.multiple && !nextProps.multiple) {
      this.setState({value: this.state.value[0]});
    }
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    props.onChange = this._handleChange;
    props.value = null;

    return select(props, this.props.children);
  },

  componentDidMount: function() {
    updateOptions(this, LinkedValueUtils.getValue(this));
  },

  componentDidUpdate: function(prevProps) {
    var value = LinkedValueUtils.getValue(this);
    var prevMultiple = !!prevProps.multiple;
    var multiple = !!this.props.multiple;
    if (value != null || prevMultiple !== multiple) {
      updateOptions(this, value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }

    var selectedValue;
    if (this.props.multiple) {
      selectedValue = [];
      var options = event.target.options;
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          selectedValue.push(options[i].value);
        }
      }
    } else {
      selectedValue = event.target.value;
    }

    this._pendingValue = selectedValue;
    ReactUpdates.asap(updateWithPendingValueIfMounted, this);
    return returnValue;
  }

});

module.exports = ReactDOMSelect;

},{"./AutoFocusMixin":27,"./LinkedValueUtils":49,"./Object.assign":52,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78,"./ReactUpdates":105}],72:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var getNodeForCharacterOffset = require("./getNodeForCharacterOffset");
var getTextContentAccessor = require("./getTextContentAccessor");

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;
}

/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return {
    start: startOffset,
    end: endOffset
  };
}

/**
 * @param {DOMElement} node
 * @return {?object}
 */
function getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = isCollapsed(
    selection.anchorNode,
    selection.anchorOffset,
    selection.focusNode,
    selection.focusOffset
  );

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = isCollapsed(
    tempRange.startContainer,
    tempRange.startOffset,
    tempRange.endContainer,
    tempRange.endOffset
  );

  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}

/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (typeof offsets.end === 'undefined') {
    start = offsets.start;
    end = start;
  } else if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;
  } else {
    start = offsets.start;
    end = offsets.end;
  }

  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = typeof offsets.end === 'undefined' ?
            start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

var useIEOffsets = ExecutionEnvironment.canUseDOM && document.selection;

var ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
};

module.exports = ReactDOMSelection;

},{"./ExecutionEnvironment":47,"./getNodeForCharacterOffset":146,"./getTextContentAccessor":148}],73:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");

var warning = require("./warning");

// Store a reference to the <textarea> `ReactDOMComponent`. TODO: use string
var textarea = ReactElement.createFactory(ReactDOM.textarea.type);

function forceUpdateIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.forceUpdate();
  }
}

/**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var ReactDOMTextarea = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMTextarea',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  getInitialState: function() {
    var defaultValue = this.props.defaultValue;
    // TODO (yungsters): Remove support for children content in <textarea>.
    var children = this.props.children;
    if (children != null) {
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(
          false,
          'Use the `defaultValue` or `value` props instead of setting ' +
          'children on <textarea>.'
        ) : null);
      }
      ("production" !== process.env.NODE_ENV ? invariant(
        defaultValue == null,
        'If you supply `defaultValue` on a <textarea>, do not pass children.'
      ) : invariant(defaultValue == null));
      if (Array.isArray(children)) {
        ("production" !== process.env.NODE_ENV ? invariant(
          children.length <= 1,
          '<textarea> can only have at most one child.'
        ) : invariant(children.length <= 1));
        children = children[0];
      }

      defaultValue = '' + children;
    }
    if (defaultValue == null) {
      defaultValue = '';
    }
    var value = LinkedValueUtils.getValue(this);
    return {
      // We save the initial value so that `ReactDOMComponent` doesn't update
      // `textContent` (unnecessary since we update value).
      // The initial value can be a boolean or object so that's why it's
      // forced to be a string.
      initialValue: '' + (value != null ? value : defaultValue)
    };
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    ("production" !== process.env.NODE_ENV ? invariant(
      props.dangerouslySetInnerHTML == null,
      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
    ) : invariant(props.dangerouslySetInnerHTML == null));

    props.defaultValue = null;
    props.value = null;
    props.onChange = this._handleChange;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.
    return textarea(props, this.state.initialValue);
  },

  componentDidUpdate: function(prevProps, prevState, prevContext) {
    var value = LinkedValueUtils.getValue(this);
    if (value != null) {
      var rootNode = this.getDOMNode();
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }
    ReactUpdates.asap(forceUpdateIfMounted, this);
    return returnValue;
  }

});

module.exports = ReactDOMTextarea;

}).call(this,require("oMfpAn"))
},{"./AutoFocusMixin":27,"./DOMPropertyOperations":37,"./LinkedValueUtils":49,"./Object.assign":52,"./ReactBrowserComponentMixin":55,"./ReactCompositeComponent":60,"./ReactDOM":63,"./ReactElement":78,"./ReactUpdates":105,"./invariant":153,"./warning":172,"oMfpAn":6}],74:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */

"use strict";

var ReactUpdates = require("./ReactUpdates");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");

var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: function() {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
};

var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

function ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

assign(
  ReactDefaultBatchingStrategyTransaction.prototype,
  Transaction.Mixin,
  {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }
  }
);

var transaction = new ReactDefaultBatchingStrategyTransaction();

var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function(callback, a, b) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      callback(a, b);
    } else {
      transaction.perform(callback, null, a, b);
    }
  }
};

module.exports = ReactDefaultBatchingStrategy;

},{"./Object.assign":52,"./ReactUpdates":105,"./Transaction":121,"./emptyFunction":134}],75:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */

"use strict";

var BeforeInputEventPlugin = require("./BeforeInputEventPlugin");
var ChangeEventPlugin = require("./ChangeEventPlugin");
var ClientReactRootIndex = require("./ClientReactRootIndex");
var CompositionEventPlugin = require("./CompositionEventPlugin");
var DefaultEventPluginOrder = require("./DefaultEventPluginOrder");
var EnterLeaveEventPlugin = require("./EnterLeaveEventPlugin");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var HTMLDOMPropertyConfig = require("./HTMLDOMPropertyConfig");
var MobileSafariClickEventPlugin = require("./MobileSafariClickEventPlugin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactComponentBrowserEnvironment =
  require("./ReactComponentBrowserEnvironment");
var ReactDefaultBatchingStrategy = require("./ReactDefaultBatchingStrategy");
var ReactDOMComponent = require("./ReactDOMComponent");
var ReactDOMButton = require("./ReactDOMButton");
var ReactDOMForm = require("./ReactDOMForm");
var ReactDOMImg = require("./ReactDOMImg");
var ReactDOMInput = require("./ReactDOMInput");
var ReactDOMOption = require("./ReactDOMOption");
var ReactDOMSelect = require("./ReactDOMSelect");
var ReactDOMTextarea = require("./ReactDOMTextarea");
var ReactEventListener = require("./ReactEventListener");
var ReactInjection = require("./ReactInjection");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMount = require("./ReactMount");
var SelectEventPlugin = require("./SelectEventPlugin");
var ServerReactRootIndex = require("./ServerReactRootIndex");
var SimpleEventPlugin = require("./SimpleEventPlugin");
var SVGDOMPropertyConfig = require("./SVGDOMPropertyConfig");

var createFullPageComponent = require("./createFullPageComponent");

function inject() {
  ReactInjection.EventEmitter.injectReactEventListener(
    ReactEventListener
  );

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
  ReactInjection.EventPluginHub.injectMount(ReactMount);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: SimpleEventPlugin,
    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
    ChangeEventPlugin: ChangeEventPlugin,
    CompositionEventPlugin: CompositionEventPlugin,
    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
  });

  ReactInjection.NativeComponent.injectGenericComponentClass(
    ReactDOMComponent
  );

  ReactInjection.NativeComponent.injectComponentClasses({
    'button': ReactDOMButton,
    'form': ReactDOMForm,
    'img': ReactDOMImg,
    'input': ReactDOMInput,
    'option': ReactDOMOption,
    'select': ReactDOMSelect,
    'textarea': ReactDOMTextarea,

    'html': createFullPageComponent('html'),
    'head': createFullPageComponent('head'),
    'body': createFullPageComponent('body')
  });

  // This needs to happen after createFullPageComponent() otherwise the mixin
  // gets double injected.
  ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin);

  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

  ReactInjection.Updates.injectReconcileTransaction(
    ReactComponentBrowserEnvironment.ReactReconcileTransaction
  );
  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );

  ReactInjection.RootIndex.injectCreateReactRootIndex(
    ExecutionEnvironment.canUseDOM ?
      ClientReactRootIndex.createReactRootIndex :
      ServerReactRootIndex.createReactRootIndex
  );

  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

  if ("production" !== process.env.NODE_ENV) {
    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
    if ((/[?&]react_perf\b/).test(url)) {
      var ReactDefaultPerf = require("./ReactDefaultPerf");
      ReactDefaultPerf.start();
    }
  }
}

module.exports = {
  inject: inject
};

}).call(this,require("oMfpAn"))
},{"./BeforeInputEventPlugin":28,"./ChangeEventPlugin":32,"./ClientReactRootIndex":33,"./CompositionEventPlugin":34,"./DefaultEventPluginOrder":39,"./EnterLeaveEventPlugin":40,"./ExecutionEnvironment":47,"./HTMLDOMPropertyConfig":48,"./MobileSafariClickEventPlugin":51,"./ReactBrowserComponentMixin":55,"./ReactComponentBrowserEnvironment":59,"./ReactDOMButton":64,"./ReactDOMComponent":65,"./ReactDOMForm":66,"./ReactDOMImg":68,"./ReactDOMInput":69,"./ReactDOMOption":70,"./ReactDOMSelect":71,"./ReactDOMTextarea":73,"./ReactDefaultBatchingStrategy":74,"./ReactDefaultPerf":76,"./ReactEventListener":83,"./ReactInjection":84,"./ReactInstanceHandles":86,"./ReactMount":89,"./SVGDOMPropertyConfig":106,"./SelectEventPlugin":107,"./ServerReactRootIndex":108,"./SimpleEventPlugin":109,"./createFullPageComponent":130,"oMfpAn":6}],76:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var ReactDefaultPerfAnalysis = require("./ReactDefaultPerfAnalysis");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");

var performanceNow = require("./performanceNow");

function roundFloat(val) {
  return Math.floor(val * 100) / 100;
}

function addValue(obj, key, val) {
  obj[key] = (obj[key] || 0) + val;
}

var ReactDefaultPerf = {
  _allMeasurements: [], // last item in the list is the current one
  _mountStack: [0],
  _injected: false,

  start: function() {
    if (!ReactDefaultPerf._injected) {
      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
    }

    ReactDefaultPerf._allMeasurements.length = 0;
    ReactPerf.enableMeasure = true;
  },

  stop: function() {
    ReactPerf.enableMeasure = false;
  },

  getLastMeasurements: function() {
    return ReactDefaultPerf._allMeasurements;
  },

  printExclusive: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
    console.table(summary.map(function(item) {
      return {
        'Component class name': item.componentName,
        'Total inclusive time (ms)': roundFloat(item.inclusive),
        'Exclusive mount time (ms)': roundFloat(item.exclusive),
        'Exclusive render time (ms)': roundFloat(item.render),
        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
        'Render time per instance (ms)': roundFloat(item.render / item.count),
        'Instances': item.count
      };
    }));
    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
    // number.
  },

  printInclusive: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
    console.table(summary.map(function(item) {
      return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
      };
    }));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  getMeasurementsSummaryMap: function(measurements) {
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
      measurements,
      true
    );
    return summary.map(function(item) {
      return {
        'Owner > component': item.componentName,
        'Wasted time (ms)': item.time,
        'Instances': item.count
      };
    });
  },

  printWasted: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  printDOM: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
    console.table(summary.map(function(item) {
      var result = {};
      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
      result['type'] = item.type;
      result['args'] = JSON.stringify(item.args);
      return result;
    }));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  _recordWrite: function(id, fnName, totalTime, args) {
    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
    var writes =
      ReactDefaultPerf
        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
        .writes;
    writes[id] = writes[id] || [];
    writes[id].push({
      type: fnName,
      time: totalTime,
      args: args
    });
  },

  measure: function(moduleName, fnName, func) {
    return function() {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
      var totalTime;
      var rv;
      var start;

      if (fnName === '_renderNewRootComponent' ||
          fnName === 'flushBatchedUpdates') {
        // A "measurement" is a set of metrics recorded for each flush. We want
        // to group the metrics for a given flush together so we can look at the
        // components that rendered and the DOM operations that actually
        // happened to determine the amount of "wasted work" performed.
        ReactDefaultPerf._allMeasurements.push({
          exclusive: {},
          inclusive: {},
          render: {},
          counts: {},
          writes: {},
          displayNames: {},
          totalTime: 0
        });
        start = performanceNow();
        rv = func.apply(this, args);
        ReactDefaultPerf._allMeasurements[
          ReactDefaultPerf._allMeasurements.length - 1
        ].totalTime = performanceNow() - start;
        return rv;
      } else if (moduleName === 'ReactDOMIDOperations' ||
        moduleName === 'ReactComponentBrowserEnvironment') {
        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (fnName === 'mountImageIntoNode') {
          var mountID = ReactMount.getID(args[1]);
          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
          // special format
          args[0].forEach(function(update) {
            var writeArgs = {};
            if (update.fromIndex !== null) {
              writeArgs.fromIndex = update.fromIndex;
            }
            if (update.toIndex !== null) {
              writeArgs.toIndex = update.toIndex;
            }
            if (update.textContent !== null) {
              writeArgs.textContent = update.textContent;
            }
            if (update.markupIndex !== null) {
              writeArgs.markup = args[1][update.markupIndex];
            }
            ReactDefaultPerf._recordWrite(
              update.parentID,
              update.type,
              totalTime,
              writeArgs
            );
          });
        } else {
          // basic format
          ReactDefaultPerf._recordWrite(
            args[0],
            fnName,
            totalTime,
            Array.prototype.slice.call(args, 1)
          );
        }
        return rv;
      } else if (moduleName === 'ReactCompositeComponent' && (
        fnName === 'mountComponent' ||
        fnName === 'updateComponent' || // TODO: receiveComponent()?
        fnName === '_renderValidatedComponent')) {

        var rootNodeID = fnName === 'mountComponent' ?
          args[0] :
          this._rootNodeID;
        var isRender = fnName === '_renderValidatedComponent';
        var isMount = fnName === 'mountComponent';

        var mountStack = ReactDefaultPerf._mountStack;
        var entry = ReactDefaultPerf._allMeasurements[
          ReactDefaultPerf._allMeasurements.length - 1
        ];

        if (isRender) {
          addValue(entry.counts, rootNodeID, 1);
        } else if (isMount) {
          mountStack.push(0);
        }

        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (isRender) {
          addValue(entry.render, rootNodeID, totalTime);
        } else if (isMount) {
          var subMountTime = mountStack.pop();
          mountStack[mountStack.length - 1] += totalTime;
          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
          addValue(entry.inclusive, rootNodeID, totalTime);
        } else {
          addValue(entry.inclusive, rootNodeID, totalTime);
        }

        entry.displayNames[rootNodeID] = {
          current: this.constructor.displayName,
          owner: this._owner ? this._owner.constructor.displayName : '<root>'
        };

        return rv;
      } else {
        return func.apply(this, args);
      }
    };
  }
};

module.exports = ReactDefaultPerf;

},{"./DOMProperty":36,"./ReactDefaultPerfAnalysis":77,"./ReactMount":89,"./ReactPerf":94,"./performanceNow":166}],77:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */

var assign = require("./Object.assign");

// Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD = 1.2;
var DOM_OPERATION_TYPES = {
  'mountImageIntoNode': 'set innerHTML',
  INSERT_MARKUP: 'set innerHTML',
  MOVE_EXISTING: 'move',
  REMOVE_NODE: 'remove',
  TEXT_CONTENT: 'set textContent',
  'updatePropertyByID': 'update attribute',
  'deletePropertyByID': 'delete attribute',
  'updateStylesByID': 'update styles',
  'updateInnerHTMLByID': 'set innerHTML',
  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
};

function getTotalTime(measurements) {
  // TODO: return number of DOM ops? could be misleading.
  // TODO: measure dropped frames after reconcile?
  // TODO: log total time of each reconcile and the top-level component
  // class that triggered it.
  var totalTime = 0;
  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    totalTime += measurement.totalTime;
  }
  return totalTime;
}

function getDOMSummary(measurements) {
  var items = [];
  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var id;

    for (id in measurement.writes) {
      measurement.writes[id].forEach(function(write) {
        items.push({
          id: id,
          type: DOM_OPERATION_TYPES[write.type] || write.type,
          args: write.args
        });
      });
    }
  }
  return items;
}

function getExclusiveSummary(measurements) {
  var candidates = {};
  var displayName;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign(
      {},
      measurement.exclusive,
      measurement.inclusive
    );

    for (var id in allIDs) {
      displayName = measurement.displayNames[id].current;

      candidates[displayName] = candidates[displayName] || {
        componentName: displayName,
        inclusive: 0,
        exclusive: 0,
        render: 0,
        count: 0
      };
      if (measurement.render[id]) {
        candidates[displayName].render += measurement.render[id];
      }
      if (measurement.exclusive[id]) {
        candidates[displayName].exclusive += measurement.exclusive[id];
      }
      if (measurement.inclusive[id]) {
        candidates[displayName].inclusive += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[displayName].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (displayName in candidates) {
    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[displayName]);
    }
  }

  arr.sort(function(a, b) {
    return b.exclusive - a.exclusive;
  });

  return arr;
}

function getInclusiveSummary(measurements, onlyClean) {
  var candidates = {};
  var inclusiveKey;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign(
      {},
      measurement.exclusive,
      measurement.inclusive
    );
    var cleanComponents;

    if (onlyClean) {
      cleanComponents = getUnchangedComponents(measurement);
    }

    for (var id in allIDs) {
      if (onlyClean && !cleanComponents[id]) {
        continue;
      }

      var displayName = measurement.displayNames[id];

      // Inclusive time is not useful for many components without knowing where
      // they are instantiated. So we aggregate inclusive time with both the
      // owner and current displayName as the key.
      inclusiveKey = displayName.owner + ' > ' + displayName.current;

      candidates[inclusiveKey] = candidates[inclusiveKey] || {
        componentName: inclusiveKey,
        time: 0,
        count: 0
      };

      if (measurement.inclusive[id]) {
        candidates[inclusiveKey].time += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[inclusiveKey].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (inclusiveKey in candidates) {
    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[inclusiveKey]);
    }
  }

  arr.sort(function(a, b) {
    return b.time - a.time;
  });

  return arr;
}

function getUnchangedComponents(measurement) {
  // For a given reconcile, look at which components did not actually
  // render anything to the DOM and return a mapping of their ID to
  // the amount of time it took to render the entire subtree.
  var cleanComponents = {};
  var dirtyLeafIDs = Object.keys(measurement.writes);
  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

  for (var id in allIDs) {
    var isDirty = false;
    // For each component that rendered, see if a component that triggered
    // a DOM op is in its subtree.
    for (var i = 0; i < dirtyLeafIDs.length; i++) {
      if (dirtyLeafIDs[i].indexOf(id) === 0) {
        isDirty = true;
        break;
      }
    }
    if (!isDirty && measurement.counts[id] > 0) {
      cleanComponents[id] = true;
    }
  }
  return cleanComponents;
}

var ReactDefaultPerfAnalysis = {
  getExclusiveSummary: getExclusiveSummary,
  getInclusiveSummary: getInclusiveSummary,
  getDOMSummary: getDOMSummary,
  getTotalTime: getTotalTime
};

module.exports = ReactDefaultPerfAnalysis;

},{"./Object.assign":52}],78:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */

"use strict";

var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");

var warning = require("./warning");

var RESERVED_PROPS = {
  key: true,
  ref: true
};

/**
 * Warn for mutations.
 *
 * @internal
 * @param {object} object
 * @param {string} key
 */
function defineWarningProperty(object, key) {
  Object.defineProperty(object, key, {

    configurable: false,
    enumerable: true,

    get: function() {
      if (!this._store) {
        return null;
      }
      return this._store[key];
    },

    set: function(value) {
      ("production" !== process.env.NODE_ENV ? warning(
        false,
        'Don\'t set the ' + key + ' property of the component. ' +
        'Mutate the existing props object instead.'
      ) : null);
      this._store[key] = value;
    }

  });
}

/**
 * This is updated to true if the membrane is successfully created.
 */
var useMutationMembrane = false;

/**
 * Warn for mutations.
 *
 * @internal
 * @param {object} element
 */
function defineMutationMembrane(prototype) {
  try {
    var pseudoFrozenProperties = {
      props: true
    };
    for (var key in pseudoFrozenProperties) {
      defineWarningProperty(prototype, key);
    }
    useMutationMembrane = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

/**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {string|object} ref
 * @param {*} key
 * @param {*} props
 * @internal
 */
var ReactElement = function(type, key, ref, owner, context, props) {
  // Built-in properties that belong on the element
  this.type = type;
  this.key = key;
  this.ref = ref;

  // Record the component responsible for creating this element.
  this._owner = owner;

  // TODO: Deprecate withContext, and then the context becomes accessible
  // through the owner.
  this._context = context;

  if ("production" !== process.env.NODE_ENV) {
    // The validation flag and props are currently mutative. We put them on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    this._store = { validated: false, props: props };

    // We're not allowed to set props directly on the object so we early
    // return and rely on the prototype membrane to forward to the backing
    // store.
    if (useMutationMembrane) {
      Object.freeze(this);
      return;
    }
  }

  this.props = props;
};

// We intentionally don't expose the function on the constructor property.
// ReactElement should be indistinguishable from a plain object.
ReactElement.prototype = {
  _isReactElement: true
};

if ("production" !== process.env.NODE_ENV) {
  defineMutationMembrane(ReactElement.prototype);
}

ReactElement.createElement = function(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? warning(
        config.key !== null,
        'createElement(...): Encountered component with a `key` of null. In ' +
        'a future version, this will be treated as equivalent to the string ' +
        '\'null\'; instead, provide an explicit key or use undefined.'
      ) : null);
    }
    // TODO: Change this back to `config.key === undefined`
    key = config.key == null ? null : '' + config.key;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (config.hasOwnProperty(propName) &&
          !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (typeof props[propName] === 'undefined') {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return new ReactElement(
    type,
    key,
    ref,
    ReactCurrentOwner.current,
    ReactContext.current,
    props
  );
};

ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
  var newElement = new ReactElement(
    oldElement.type,
    oldElement.key,
    oldElement.ref,
    oldElement._owner,
    oldElement._context,
    newProps
  );

  if ("production" !== process.env.NODE_ENV) {
    // If the key on the original is valid, then the clone is valid
    newElement._store.validated = oldElement._store.validated;
  }
  return newElement;
};

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function(object) {
  // ReactTestUtils is often used outside of beforeEach where as React is
  // within it. This leads to two different instances of React on the same
  // page. To identify a element from a different React instance we use
  // a flag instead of an instanceof check.
  var isElement = !!(object && object._isReactElement);
  // if (isElement && !(object instanceof ReactElement)) {
  // This is an indicator that you're using multiple versions of React at the
  // same time. This will screw with ownership and stuff. Fix it, please.
  // TODO: We could possibly warn here.
  // }
  return isElement;
};

module.exports = ReactElement;

}).call(this,require("oMfpAn"))
},{"./ReactContext":61,"./ReactCurrentOwner":62,"./warning":172,"oMfpAn":6}],79:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactPropTypeLocations = require("./ReactPropTypeLocations");
var ReactCurrentOwner = require("./ReactCurrentOwner");

var monitorCodeUse = require("./monitorCodeUse");

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {
  'react_key_warning': {},
  'react_numeric_key_warning': {}
};
var ownerHasMonitoredObjectMap = {};

var loggedTypeFailures = {};

var NUMERIC_PROPERTY_REGEX = /^\d+$/;

/**
 * Gets the current owner's displayName for use in warnings.
 *
 * @internal
 * @return {?string} Display name or undefined
 */
function getCurrentOwnerDisplayName() {
  var current = ReactCurrentOwner.current;
  return current && current.constructor.displayName || undefined;
}

/**
 * Warn if the component doesn't have an explicit key assigned to it.
 * This component is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function validateExplicitKey(component, parentType) {
  if (component._store.validated || component.key != null) {
    return;
  }
  component._store.validated = true;

  warnAndMonitorForKeyUse(
    'react_key_warning',
    'Each child in an array should have a unique "key" prop.',
    component,
    parentType
  );
}

/**
 * Warn if the key is being defined as an object property but has an incorrect
 * value.
 *
 * @internal
 * @param {string} name Property name of the key.
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function validatePropertyKey(name, component, parentType) {
  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
    return;
  }
  warnAndMonitorForKeyUse(
    'react_numeric_key_warning',
    'Child objects should have non-numeric keys so ordering is preserved.',
    component,
    parentType
  );
}

/**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} warningID The id used when logging.
 * @param {string} message The base warning that gets output.
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function warnAndMonitorForKeyUse(warningID, message, component, parentType) {
  var ownerName = getCurrentOwnerDisplayName();
  var parentName = parentType.displayName;

  var useName = ownerName || parentName;
  var memoizer = ownerHasKeyUseWarning[warningID];
  if (memoizer.hasOwnProperty(useName)) {
    return;
  }
  memoizer[useName] = true;

  message += ownerName ?
    (" Check the render method of " + ownerName + ".") :
    (" Check the renderComponent call using <" + parentName + ">.");

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwnerName = null;
  if (component._owner && component._owner !== ReactCurrentOwner.current) {
    // Name of the component that originally created this child.
    childOwnerName = component._owner.constructor.displayName;

    message += (" It was passed a child from " + childOwnerName + ".");
  }

  message += ' See http://fb.me/react-warning-keys for more information.';
  monitorCodeUse(warningID, {
    component: useName,
    componentOwner: childOwnerName
  });
  console.warn(message);
}

/**
 * Log that we're using an object map. We're considering deprecating this
 * feature and replace it with proper Map and ImmutableMap data structures.
 *
 * @internal
 */
function monitorUseOfObjectMap() {
  var currentName = getCurrentOwnerDisplayName() || '';
  if (ownerHasMonitoredObjectMap.hasOwnProperty(currentName)) {
    return;
  }
  ownerHasMonitoredObjectMap[currentName] = true;
  monitorCodeUse('react_object_map_children');
}

/**
 * Ensure that every component either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {*} component Statically passed child of any type.
 * @param {*} parentType component's parent's type.
 * @return {boolean}
 */
function validateChildKeys(component, parentType) {
  if (Array.isArray(component)) {
    for (var i = 0; i < component.length; i++) {
      var child = component[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(component)) {
    // This component was passed in a valid location.
    component._store.validated = true;
  } else if (component && typeof component === 'object') {
    monitorUseOfObjectMap();
    for (var name in component) {
      validatePropertyKey(name, component[name], parentType);
    }
  }
}

/**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */
function checkPropTypes(componentName, propTypes, props, location) {
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        error = propTypes[propName](props, propName, componentName, location);
      } catch (ex) {
        error = ex;
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;
        // This will soon use the warning module
        monitorCodeUse(
          'react_failed_descriptor_type_check',
          { message: error.message }
        );
      }
    }
  }
}

var ReactElementValidator = {

  createElement: function(type, props, children) {
    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }

    var name = type.displayName;
    if (type.propTypes) {
      checkPropTypes(
        name,
        type.propTypes,
        element.props,
        ReactPropTypeLocations.prop
      );
    }
    if (type.contextTypes) {
      checkPropTypes(
        name,
        type.contextTypes,
        element._context,
        ReactPropTypeLocations.context
      );
    }
    return element;
  },

  createFactory: function(type) {
    var validatedFactory = ReactElementValidator.createElement.bind(
      null,
      type
    );
    validatedFactory.type = type;
    return validatedFactory;
  }

};

module.exports = ReactElementValidator;

},{"./ReactCurrentOwner":62,"./ReactElement":78,"./ReactPropTypeLocations":97,"./monitorCodeUse":163}],80:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */

"use strict";

var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

var component;
// This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIdsRegistry = {};

var ReactEmptyComponentInjection = {
  injectEmptyComponent: function(emptyComponent) {
    component = ReactElement.createFactory(emptyComponent);
  }
};

/**
 * @return {ReactComponent} component The injected empty component.
 */
function getEmptyComponent() {
  ("production" !== process.env.NODE_ENV ? invariant(
    component,
    'Trying to return null from a render, but no null placeholder component ' +
    'was injected.'
  ) : invariant(component));
  return component();
}

/**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */
function registerNullComponentID(id) {
  nullComponentIdsRegistry[id] = true;
}

/**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */
function deregisterNullComponentID(id) {
  delete nullComponentIdsRegistry[id];
}

/**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */
function isNullComponentID(id) {
  return nullComponentIdsRegistry[id];
}

var ReactEmptyComponent = {
  deregisterNullComponentID: deregisterNullComponentID,
  getEmptyComponent: getEmptyComponent,
  injection: ReactEmptyComponentInjection,
  isNullComponentID: isNullComponentID,
  registerNullComponentID: registerNullComponentID
};

module.exports = ReactEmptyComponent;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./invariant":153,"oMfpAn":6}],81:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */

"use strict";

var ReactErrorUtils = {
  /**
   * Creates a guarded version of a function. This is supposed to make debugging
   * of event handlers easier. To aid debugging with the browser's debugger,
   * this currently simply returns the original function.
   *
   * @param {function} func Function to be executed
   * @param {string} name The name of the guard
   * @return {function}
   */
  guard: function(func, name) {
    return func;
  }
};

module.exports = ReactErrorUtils;

},{}],82:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */

"use strict";

var EventPluginHub = require("./EventPluginHub");

function runEventQueueInBatch(events) {
  EventPluginHub.enqueueEvents(events);
  EventPluginHub.processEventQueue();
}

var ReactEventEmitterMixin = {

  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */
  handleTopLevel: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var events = EventPluginHub.extractEvents(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent
    );

    runEventQueueInBatch(events);
  }
};

module.exports = ReactEventEmitterMixin;

},{"./EventPluginHub":43}],83:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */

"use strict";

var EventListener = require("./EventListener");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var PooledClass = require("./PooledClass");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMount = require("./ReactMount");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var getEventTarget = require("./getEventTarget");
var getUnboundedScrollPosition = require("./getUnboundedScrollPosition");

/**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */
function findParent(node) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  var nodeID = ReactMount.getID(node);
  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
  var container = ReactMount.findReactContainerForID(rootID);
  var parent = ReactMount.getFirstReactDOM(container);
  return parent;
}

// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
assign(TopLevelCallbackBookKeeping.prototype, {
  destructor: function() {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
PooledClass.addPoolingTo(
  TopLevelCallbackBookKeeping,
  PooledClass.twoArgumentPooler
);

function handleTopLevelImpl(bookKeeping) {
  var topLevelTarget = ReactMount.getFirstReactDOM(
    getEventTarget(bookKeeping.nativeEvent)
  ) || window;

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = topLevelTarget;
  while (ancestor) {
    bookKeeping.ancestors.push(ancestor);
    ancestor = findParent(ancestor);
  }

  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
    topLevelTarget = bookKeeping.ancestors[i];
    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
    ReactEventListener._handleTopLevel(
      bookKeeping.topLevelType,
      topLevelTarget,
      topLevelTargetID,
      bookKeeping.nativeEvent
    );
  }
}

function scrollValueMonitor(cb) {
  var scrollPosition = getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function(handleTopLevel) {
    ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function(enabled) {
    ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function() {
    return ReactEventListener._enabled;
  },


  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return;
    }
    return EventListener.listen(
      element,
      handlerBaseName,
      ReactEventListener.dispatchEvent.bind(null, topLevelType)
    );
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return;
    }
    return EventListener.capture(
      element,
      handlerBaseName,
      ReactEventListener.dispatchEvent.bind(null, topLevelType)
    );
  },

  monitorScrollValue: function(refresh) {
    var callback = scrollValueMonitor.bind(null, refresh);
    EventListener.listen(window, 'scroll', callback);
    EventListener.listen(window, 'resize', callback);
  },

  dispatchEvent: function(topLevelType, nativeEvent) {
    if (!ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
      topLevelType,
      nativeEvent
    );
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
    } finally {
      TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

module.exports = ReactEventListener;

},{"./EventListener":42,"./ExecutionEnvironment":47,"./Object.assign":52,"./PooledClass":53,"./ReactInstanceHandles":86,"./ReactMount":89,"./ReactUpdates":105,"./getEventTarget":144,"./getUnboundedScrollPosition":149}],84:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var EventPluginHub = require("./EventPluginHub");
var ReactComponent = require("./ReactComponent");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactNativeComponent = require("./ReactNativeComponent");
var ReactPerf = require("./ReactPerf");
var ReactRootIndex = require("./ReactRootIndex");
var ReactUpdates = require("./ReactUpdates");

var ReactInjection = {
  Component: ReactComponent.injection,
  CompositeComponent: ReactCompositeComponent.injection,
  DOMProperty: DOMProperty.injection,
  EmptyComponent: ReactEmptyComponent.injection,
  EventPluginHub: EventPluginHub.injection,
  EventEmitter: ReactBrowserEventEmitter.injection,
  NativeComponent: ReactNativeComponent.injection,
  Perf: ReactPerf.injection,
  RootIndex: ReactRootIndex.injection,
  Updates: ReactUpdates.injection
};

module.exports = ReactInjection;

},{"./DOMProperty":36,"./EventPluginHub":43,"./ReactBrowserEventEmitter":56,"./ReactComponent":58,"./ReactCompositeComponent":60,"./ReactEmptyComponent":80,"./ReactNativeComponent":92,"./ReactPerf":94,"./ReactRootIndex":101,"./ReactUpdates":105}],85:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */

"use strict";

var ReactDOMSelection = require("./ReactDOMSelection");

var containsNode = require("./containsNode");
var focusNode = require("./focusNode");
var getActiveElement = require("./getActiveElement");

function isInDocument(node) {
  return containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var ReactInputSelection = {

  hasSelectionCapabilities: function(elem) {
    return elem && (
      (elem.nodeName === 'INPUT' && elem.type === 'text') ||
      elem.nodeName === 'TEXTAREA' ||
      elem.contentEditable === 'true'
    );
  },

  getSelectionInformation: function() {
    var focusedElem = getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange:
          ReactInputSelection.hasSelectionCapabilities(focusedElem) ?
          ReactInputSelection.getSelection(focusedElem) :
          null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function(priorSelectionInformation) {
    var curFocusedElem = getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem &&
        isInDocument(priorFocusedElem)) {
      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        ReactInputSelection.setSelection(
          priorFocusedElem,
          priorSelectionRange
        );
      }
      focusNode(priorFocusedElem);
    }
  },

  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function(input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = {
        start: input.selectionStart,
        end: input.selectionEnd
      };
    } else if (document.selection && input.nodeName === 'INPUT') {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = {
          start: -range.moveStart('character', -input.value.length),
          end: -range.moveEnd('character', -input.value.length)
        };
      }
    } else {
      // Content editable or old IE textarea.
      selection = ReactDOMSelection.getOffsets(input);
    }

    return selection || {start: 0, end: 0};
  },

  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function(input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (typeof end === 'undefined') {
      end = start;
    }

    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && input.nodeName === 'INPUT') {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    } else {
      ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

module.exports = ReactInputSelection;

},{"./ReactDOMSelection":72,"./containsNode":128,"./focusNode":138,"./getActiveElement":140}],86:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */

"use strict";

var ReactRootIndex = require("./ReactRootIndex");

var invariant = require("./invariant");

var SEPARATOR = '.';
var SEPARATOR_LENGTH = SEPARATOR.length;

/**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */
var MAX_TREE_DEPTH = 100;

/**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */
function getReactRootIDString(index) {
  return SEPARATOR + index.toString(36);
}

/**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */
function isBoundary(id, index) {
  return id.charAt(index) === SEPARATOR || index === id.length;
}

/**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */
function isValidID(id) {
  return id === '' || (
    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
  );
}

/**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */
function isAncestorIDOf(ancestorID, descendantID) {
  return (
    descendantID.indexOf(ancestorID) === 0 &&
    isBoundary(descendantID, ancestorID.length)
  );
}

/**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */
function getParentID(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
}

/**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */
function getNextDescendantID(ancestorID, destinationID) {
  ("production" !== process.env.NODE_ENV ? invariant(
    isValidID(ancestorID) && isValidID(destinationID),
    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
    ancestorID,
    destinationID
  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
  ("production" !== process.env.NODE_ENV ? invariant(
    isAncestorIDOf(ancestorID, destinationID),
    'getNextDescendantID(...): React has made an invalid assumption about ' +
    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
    ancestorID,
    destinationID
  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
  if (ancestorID === destinationID) {
    return ancestorID;
  }
  // Skip over the ancestor and the immediate separator. Traverse until we hit
  // another separator or we reach the end of `destinationID`.
  var start = ancestorID.length + SEPARATOR_LENGTH;
  for (var i = start; i < destinationID.length; i++) {
    if (isBoundary(destinationID, i)) {
      break;
    }
  }
  return destinationID.substr(0, i);
}

/**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */
function getFirstCommonAncestorID(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if (minLength === 0) {
    return '';
  }
  var lastCommonMarkerIndex = 0;
  // Use `<=` to traverse until the "EOL" of the shorter string.
  for (var i = 0; i <= minLength; i++) {
    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
      lastCommonMarkerIndex = i;
    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
      break;
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  ("production" !== process.env.NODE_ENV ? invariant(
    isValidID(longestCommonID),
    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
    oneID,
    twoID,
    longestCommonID
  ) : invariant(isValidID(longestCommonID)));
  return longestCommonID;
}

/**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */
function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || '';
  stop = stop || '';
  ("production" !== process.env.NODE_ENV ? invariant(
    start !== stop,
    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
    start
  ) : invariant(start !== stop));
  var traverseUp = isAncestorIDOf(stop, start);
  ("production" !== process.env.NODE_ENV ? invariant(
    traverseUp || isAncestorIDOf(start, stop),
    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
    'not have a parent path.',
    start,
    stop
  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
  // Traverse from `start` to `stop` one depth at a time.
  var depth = 0;
  var traverse = traverseUp ? getParentID : getNextDescendantID;
  for (var id = start; /* until break */; id = traverse(id, stop)) {
    var ret;
    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      ret = cb(id, traverseUp, arg);
    }
    if (ret === false || id === stop) {
      // Only break //after// visiting `stop`.
      break;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      depth++ < MAX_TREE_DEPTH,
      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
      start, stop
    ) : invariant(depth++ < MAX_TREE_DEPTH));
  }
}

/**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */
var ReactInstanceHandles = {

  /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */
  createReactRootID: function() {
    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
  },

  /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */
  createReactID: function(rootID, name) {
    return rootID + name;
  },

  /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */
  getReactRootIDFromNodeID: function(id) {
    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
      var index = id.indexOf(SEPARATOR, 1);
      return index > -1 ? id.substr(0, index) : id;
    }
    return null;
  },

  /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */
  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
    if (ancestorID !== leaveID) {
      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
    }
    if (ancestorID !== enterID) {
      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
    }
  },

  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseTwoPhase: function(targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, false);
      traverseParentPath(targetID, '', cb, arg, false, true);
    }
  },

  /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseAncestors: function(targetID, cb, arg) {
    traverseParentPath('', targetID, cb, arg, true, false);
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _getFirstCommonAncestorID: getFirstCommonAncestorID,

  /**
   * Exposed for unit testing.
   * @private
   */
  _getNextDescendantID: getNextDescendantID,

  isAncestorIDOf: isAncestorIDOf,

  SEPARATOR: SEPARATOR

};

module.exports = ReactInstanceHandles;

}).call(this,require("oMfpAn"))
},{"./ReactRootIndex":101,"./invariant":153,"oMfpAn":6}],87:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLegacyElement
 */

"use strict";

var ReactCurrentOwner = require("./ReactCurrentOwner");

var invariant = require("./invariant");
var monitorCodeUse = require("./monitorCodeUse");
var warning = require("./warning");

var legacyFactoryLogs = {};
function warnForLegacyFactoryCall() {
  if (!ReactLegacyElementFactory._isLegacyCallWarningEnabled) {
    return;
  }
  var owner = ReactCurrentOwner.current;
  var name = owner && owner.constructor ? owner.constructor.displayName : '';
  if (!name) {
    name = 'Something';
  }
  if (legacyFactoryLogs.hasOwnProperty(name)) {
    return;
  }
  legacyFactoryLogs[name] = true;
  ("production" !== process.env.NODE_ENV ? warning(
    false,
    name + ' is calling a React component directly. ' +
    'Use a factory or JSX instead. See: http://fb.me/react-legacyfactory'
  ) : null);
  monitorCodeUse('react_legacy_factory_call', { version: 3, name: name });
}

function warnForPlainFunctionType(type) {
  var isReactClass =
    type.prototype &&
    typeof type.prototype.mountComponent === 'function' &&
    typeof type.prototype.receiveComponent === 'function';
  if (isReactClass) {
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'Did not expect to get a React class here. Use `Component` instead ' +
      'of `Component.type` or `this.constructor`.'
    ) : null);
  } else {
    if (!type._reactWarnedForThisType) {
      try {
        type._reactWarnedForThisType = true;
      } catch (x) {
        // just incase this is a frozen object or some special object
      }
      monitorCodeUse(
        'react_non_component_in_jsx',
        { version: 3, name: type.name }
      );
    }
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'This JSX uses a plain function. Only React components are ' +
      'valid in React\'s JSX transform.'
    ) : null);
  }
}

function warnForNonLegacyFactory(type) {
  ("production" !== process.env.NODE_ENV ? warning(
    false,
    'Do not pass React.DOM.' + type.type + ' to JSX or createFactory. ' +
    'Use the string "' + type.type + '" instead.'
  ) : null);
}

/**
 * Transfer static properties from the source to the target. Functions are
 * rebound to have this reflect the original source.
 */
function proxyStaticMethods(target, source) {
  if (typeof source !== 'function') {
    return;
  }
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      var value = source[key];
      if (typeof value === 'function') {
        var bound = value.bind(source);
        // Copy any properties defined on the function, such as `isRequired` on
        // a PropTypes validator.
        for (var k in value) {
          if (value.hasOwnProperty(k)) {
            bound[k] = value[k];
          }
        }
        target[key] = bound;
      } else {
        target[key] = value;
      }
    }
  }
}

// We use an object instead of a boolean because booleans are ignored by our
// mocking libraries when these factories gets mocked.
var LEGACY_MARKER = {};
var NON_LEGACY_MARKER = {};

var ReactLegacyElementFactory = {};

ReactLegacyElementFactory.wrapCreateFactory = function(createFactory) {
  var legacyCreateFactory = function(type) {
    if (typeof type !== 'function') {
      // Non-function types cannot be legacy factories
      return createFactory(type);
    }

    if (type.isReactNonLegacyFactory) {
      // This is probably a factory created by ReactDOM we unwrap it to get to
      // the underlying string type. It shouldn't have been passed here so we
      // warn.
      if ("production" !== process.env.NODE_ENV) {
        warnForNonLegacyFactory(type);
      }
      return createFactory(type.type);
    }

    if (type.isReactLegacyFactory) {
      // This is probably a legacy factory created by ReactCompositeComponent.
      // We unwrap it to get to the underlying class.
      return createFactory(type.type);
    }

    if ("production" !== process.env.NODE_ENV) {
      warnForPlainFunctionType(type);
    }

    // Unless it's a legacy factory, then this is probably a plain function,
    // that is expecting to be invoked by JSX. We can just return it as is.
    return type;
  };
  return legacyCreateFactory;
};

ReactLegacyElementFactory.wrapCreateElement = function(createElement) {
  var legacyCreateElement = function(type, props, children) {
    if (typeof type !== 'function') {
      // Non-function types cannot be legacy factories
      return createElement.apply(this, arguments);
    }

    var args;

    if (type.isReactNonLegacyFactory) {
      // This is probably a factory created by ReactDOM we unwrap it to get to
      // the underlying string type. It shouldn't have been passed here so we
      // warn.
      if ("production" !== process.env.NODE_ENV) {
        warnForNonLegacyFactory(type);
      }
      args = Array.prototype.slice.call(arguments, 0);
      args[0] = type.type;
      return createElement.apply(this, args);
    }

    if (type.isReactLegacyFactory) {
      // This is probably a legacy factory created by ReactCompositeComponent.
      // We unwrap it to get to the underlying class.
      if (type._isMockFunction) {
        // If this is a mock function, people will expect it to be called. We
        // will actually call the original mock factory function instead. This
        // future proofs unit testing that assume that these are classes.
        type.type._mockedReactClassConstructor = type;
      }
      args = Array.prototype.slice.call(arguments, 0);
      args[0] = type.type;
      return createElement.apply(this, args);
    }

    if ("production" !== process.env.NODE_ENV) {
      warnForPlainFunctionType(type);
    }

    // This is being called with a plain function we should invoke it
    // immediately as if this was used with legacy JSX.
    return type.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  return legacyCreateElement;
};

ReactLegacyElementFactory.wrapFactory = function(factory) {
  ("production" !== process.env.NODE_ENV ? invariant(
    typeof factory === 'function',
    'This is suppose to accept a element factory'
  ) : invariant(typeof factory === 'function'));
  var legacyElementFactory = function(config, children) {
    // This factory should not be called when JSX is used. Use JSX instead.
    if ("production" !== process.env.NODE_ENV) {
      warnForLegacyFactoryCall();
    }
    return factory.apply(this, arguments);
  };
  proxyStaticMethods(legacyElementFactory, factory.type);
  legacyElementFactory.isReactLegacyFactory = LEGACY_MARKER;
  legacyElementFactory.type = factory.type;
  return legacyElementFactory;
};

// This is used to mark a factory that will remain. E.g. we're allowed to call
// it as a function. However, you're not suppose to pass it to createElement
// or createFactory, so it will warn you if you do.
ReactLegacyElementFactory.markNonLegacyFactory = function(factory) {
  factory.isReactNonLegacyFactory = NON_LEGACY_MARKER;
  return factory;
};

// Checks if a factory function is actually a legacy factory pretending to
// be a class.
ReactLegacyElementFactory.isValidFactory = function(factory) {
  // TODO: This will be removed and moved into a class validator or something.
  return typeof factory === 'function' &&
    factory.isReactLegacyFactory === LEGACY_MARKER;
};

ReactLegacyElementFactory.isValidClass = function(factory) {
  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'isValidClass is deprecated and will be removed in a future release. ' +
      'Use a more specific validator instead.'
    ) : null);
  }
  return ReactLegacyElementFactory.isValidFactory(factory);
};

ReactLegacyElementFactory._isLegacyCallWarningEnabled = true;

module.exports = ReactLegacyElementFactory;

}).call(this,require("oMfpAn"))
},{"./ReactCurrentOwner":62,"./invariant":153,"./monitorCodeUse":163,"./warning":172,"oMfpAn":6}],88:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */

"use strict";

var adler32 = require("./adler32");

var ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function(markup) {
    var checksum = adler32(markup);
    return markup.replace(
      '>',
      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
    );
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function(markup, element) {
    var existingChecksum = element.getAttribute(
      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
    );
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

module.exports = ReactMarkupChecksum;

},{"./adler32":124}],89:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactPerf = require("./ReactPerf");

var containsNode = require("./containsNode");
var deprecated = require("./deprecated");
var getReactRootElementInContainer = require("./getReactRootElementInContainer");
var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");
var warning = require("./warning");

var createElement = ReactLegacyElement.wrapCreateElement(
  ReactElement.createElement
);

var SEPARATOR = ReactInstanceHandles.SEPARATOR;

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var nodeCache = {};

var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;

/** Mapping from reactRootID to React component instance. */
var instancesByReactRootID = {};

/** Mapping from reactRootID to `container` nodes. */
var containersByReactRootID = {};

if ("production" !== process.env.NODE_ENV) {
  /** __DEV__-only mapping from reactRootID to root elements. */
  var rootElementsByReactRootID = {};
}

// Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray = [];

/**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */
function getReactRootID(container) {
  var rootElement = getReactRootElementInContainer(container);
  return rootElement && ReactMount.getID(rootElement);
}

/**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */
function getID(node) {
  var id = internalGetID(node);
  if (id) {
    if (nodeCache.hasOwnProperty(id)) {
      var cached = nodeCache[id];
      if (cached !== node) {
        ("production" !== process.env.NODE_ENV ? invariant(
          !isValid(cached, id),
          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
          ATTR_NAME, id
        ) : invariant(!isValid(cached, id)));

        nodeCache[id] = node;
      }
    } else {
      nodeCache[id] = node;
    }
  }

  return id;
}

function internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
}

/**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */
function setID(node, id) {
  var oldID = internalGetID(node);
  if (oldID !== id) {
    delete nodeCache[oldID];
  }
  node.setAttribute(ATTR_NAME, id);
  nodeCache[id] = node;
}

/**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */
function getNode(id) {
  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
    nodeCache[id] = ReactMount.findReactNodeByID(id);
  }
  return nodeCache[id];
}

/**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */
function isValid(node, id) {
  if (node) {
    ("production" !== process.env.NODE_ENV ? invariant(
      internalGetID(node) === id,
      'ReactMount: Unexpected modification of `%s`',
      ATTR_NAME
    ) : invariant(internalGetID(node) === id));

    var container = ReactMount.findReactContainerForID(id);
    if (container && containsNode(container, node)) {
      return true;
    }
  }

  return false;
}

/**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */
function purgeID(id) {
  delete nodeCache[id];
}

var deepestNodeSoFar = null;
function findDeepestCachedAncestorImpl(ancestorID) {
  var ancestor = nodeCache[ancestorID];
  if (ancestor && isValid(ancestor, ancestorID)) {
    deepestNodeSoFar = ancestor;
  } else {
    // This node isn't populated in the cache, so presumably none of its
    // descendants are. Break out of the loop.
    return false;
  }
}

/**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */
function findDeepestCachedAncestor(targetID) {
  deepestNodeSoFar = null;
  ReactInstanceHandles.traverseAncestors(
    targetID,
    findDeepestCachedAncestorImpl
  );

  var foundNode = deepestNodeSoFar;
  deepestNodeSoFar = null;
  return foundNode;
}

/**
 * Mounting is the process of initializing a React component by creatings its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
var ReactMount = {
  /** Exposed for debugging purposes **/
  _instancesByReactRootID: instancesByReactRootID,

  /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
  scrollMonitor: function(container, renderCallback) {
    renderCallback();
  },

  /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
  _updateRootComponent: function(
      prevComponent,
      nextComponent,
      container,
      callback) {
    var nextProps = nextComponent.props;
    ReactMount.scrollMonitor(container, function() {
      prevComponent.replaceProps(nextProps, callback);
    });

    if ("production" !== process.env.NODE_ENV) {
      // Record the root element in case it later gets transplanted.
      rootElementsByReactRootID[getReactRootID(container)] =
        getReactRootElementInContainer(container);
    }

    return prevComponent;
  },

  /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */
  _registerComponent: function(nextComponent, container) {
    ("production" !== process.env.NODE_ENV ? invariant(
      container && (
        container.nodeType === ELEMENT_NODE_TYPE ||
        container.nodeType === DOC_NODE_TYPE
      ),
      '_registerComponent(...): Target container is not a DOM element.'
    ) : invariant(container && (
      container.nodeType === ELEMENT_NODE_TYPE ||
      container.nodeType === DOC_NODE_TYPE
    )));

    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

    var reactRootID = ReactMount.registerContainer(container);
    instancesByReactRootID[reactRootID] = nextComponent;
    return reactRootID;
  },

  /**
   * Render a new component into the DOM.
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
  _renderNewRootComponent: ReactPerf.measure(
    'ReactMount',
    '_renderNewRootComponent',
    function(
        nextComponent,
        container,
        shouldReuseMarkup) {
      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case.
      ("production" !== process.env.NODE_ENV ? warning(
        ReactCurrentOwner.current == null,
        '_renderNewRootComponent(): Render methods should be a pure function ' +
        'of props and state; triggering nested component updates from ' +
        'render is not allowed. If necessary, trigger nested updates in ' +
        'componentDidUpdate.'
      ) : null);

      var componentInstance = instantiateReactComponent(nextComponent, null);
      var reactRootID = ReactMount._registerComponent(
        componentInstance,
        container
      );
      componentInstance.mountComponentIntoNode(
        reactRootID,
        container,
        shouldReuseMarkup
      );

      if ("production" !== process.env.NODE_ENV) {
        // Record the root element in case it later gets transplanted.
        rootElementsByReactRootID[reactRootID] =
          getReactRootElementInContainer(container);
      }

      return componentInstance;
    }
  ),

  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  render: function(nextElement, container, callback) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactElement.isValidElement(nextElement),
      'renderComponent(): Invalid component element.%s',
      (
        typeof nextElement === 'string' ?
          ' Instead of passing an element string, make sure to instantiate ' +
          'it by passing it to React.createElement.' :
        ReactLegacyElement.isValidFactory(nextElement) ?
          ' Instead of passing a component class, make sure to instantiate ' +
          'it by passing it to React.createElement.' :
        // Check if it quacks like a element
        typeof nextElement.props !== "undefined" ?
          ' This may be caused by unintentionally loading two independent ' +
          'copies of React.' :
          ''
      )
    ) : invariant(ReactElement.isValidElement(nextElement)));

    var prevComponent = instancesByReactRootID[getReactRootID(container)];

    if (prevComponent) {
      var prevElement = prevComponent._currentElement;
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        return ReactMount._updateRootComponent(
          prevComponent,
          nextElement,
          container,
          callback
        );
      } else {
        ReactMount.unmountComponentAtNode(container);
      }
    }

    var reactRootElement = getReactRootElementInContainer(container);
    var containerHasReactMarkup =
      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);

    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

    var component = ReactMount._renderNewRootComponent(
      nextElement,
      container,
      shouldReuseMarkup
    );
    callback && callback.call(component);
    return component;
  },

  /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into the supplied `container`.
   *
   * @param {function} constructor React component constructor.
   * @param {?object} props Initial props of the component instance.
   * @param {DOMElement} container DOM element to render into.
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  constructAndRenderComponent: function(constructor, props, container) {
    var element = createElement(constructor, props);
    return ReactMount.render(element, container);
  },

  /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into a container node identified by supplied `id`.
   *
   * @param {function} componentConstructor React component constructor
   * @param {?object} props Initial props of the component instance.
   * @param {string} id ID of the DOM element to render into.
   * @return {ReactComponent} Component instance rendered in the container node.
   */
  constructAndRenderComponentByID: function(constructor, props, id) {
    var domNode = document.getElementById(id);
    ("production" !== process.env.NODE_ENV ? invariant(
      domNode,
      'Tried to get element with id of "%s" but it is not present on the page.',
      id
    ) : invariant(domNode));
    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
  },

  /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */
  registerContainer: function(container) {
    var reactRootID = getReactRootID(container);
    if (reactRootID) {
      // If one exists, make sure it is a valid "reactRoot" ID.
      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
    }
    if (!reactRootID) {
      // No valid "reactRoot" ID found, create one.
      reactRootID = ReactInstanceHandles.createReactRootID();
    }
    containersByReactRootID[reactRootID] = container;
    return reactRootID;
  },

  /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
  unmountComponentAtNode: function(container) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (Strictly speaking, unmounting won't cause a
    // render but we still don't expect to be in a render call here.)
    ("production" !== process.env.NODE_ENV ? warning(
      ReactCurrentOwner.current == null,
      'unmountComponentAtNode(): Render methods should be a pure function of ' +
      'props and state; triggering nested component updates from render is ' +
      'not allowed. If necessary, trigger nested updates in ' +
      'componentDidUpdate.'
    ) : null);

    var reactRootID = getReactRootID(container);
    var component = instancesByReactRootID[reactRootID];
    if (!component) {
      return false;
    }
    ReactMount.unmountComponentFromNode(component, container);
    delete instancesByReactRootID[reactRootID];
    delete containersByReactRootID[reactRootID];
    if ("production" !== process.env.NODE_ENV) {
      delete rootElementsByReactRootID[reactRootID];
    }
    return true;
  },

  /**
   * Unmounts a component and removes it from the DOM.
   *
   * @param {ReactComponent} instance React component instance.
   * @param {DOMElement} container DOM element to unmount from.
   * @final
   * @internal
   * @see {ReactMount.unmountComponentAtNode}
   */
  unmountComponentFromNode: function(instance, container) {
    instance.unmountComponent();

    if (container.nodeType === DOC_NODE_TYPE) {
      container = container.documentElement;
    }

    // http://jsperf.com/emptying-a-node
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  },

  /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */
  findReactContainerForID: function(id) {
    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
    var container = containersByReactRootID[reactRootID];

    if ("production" !== process.env.NODE_ENV) {
      var rootElement = rootElementsByReactRootID[reactRootID];
      if (rootElement && rootElement.parentNode !== container) {
        ("production" !== process.env.NODE_ENV ? invariant(
          // Call internalGetID here because getID calls isValid which calls
          // findReactContainerForID (this function).
          internalGetID(rootElement) === reactRootID,
          'ReactMount: Root element ID differed from reactRootID.'
        ) : invariant(// Call internalGetID here because getID calls isValid which calls
        // findReactContainerForID (this function).
        internalGetID(rootElement) === reactRootID));

        var containerChild = container.firstChild;
        if (containerChild &&
            reactRootID === internalGetID(containerChild)) {
          // If the container has a new child with the same ID as the old
          // root element, then rootElementsByReactRootID[reactRootID] is
          // just stale and needs to be updated. The case that deserves a
          // warning is when the container is empty.
          rootElementsByReactRootID[reactRootID] = containerChild;
        } else {
          console.warn(
            'ReactMount: Root element has been removed from its original ' +
            'container. New container:', rootElement.parentNode
          );
        }
      }
    }

    return container;
  },

  /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */
  findReactNodeByID: function(id) {
    var reactRoot = ReactMount.findReactContainerForID(id);
    return ReactMount.findComponentRoot(reactRoot, id);
  },

  /**
   * True if the supplied `node` is rendered by React.
   *
   * @param {*} node DOM Element to check.
   * @return {boolean} True if the DOM Element appears to be rendered by React.
   * @internal
   */
  isRenderedByReact: function(node) {
    if (node.nodeType !== 1) {
      // Not a DOMElement, therefore not a React component
      return false;
    }
    var id = ReactMount.getID(node);
    return id ? id.charAt(0) === SEPARATOR : false;
  },

  /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */
  getFirstReactDOM: function(node) {
    var current = node;
    while (current && current.parentNode !== current) {
      if (ReactMount.isRenderedByReact(current)) {
        return current;
      }
      current = current.parentNode;
    }
    return null;
  },

  /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */
  findComponentRoot: function(ancestorNode, targetID) {
    var firstChildren = findComponentRootReusableArray;
    var childIndex = 0;

    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

    firstChildren[0] = deepestAncestor.firstChild;
    firstChildren.length = 1;

    while (childIndex < firstChildren.length) {
      var child = firstChildren[childIndex++];
      var targetChild;

      while (child) {
        var childID = ReactMount.getID(child);
        if (childID) {
          // Even if we find the node we're looking for, we finish looping
          // through its siblings to ensure they're cached so that we don't have
          // to revisit this node again. Otherwise, we make n^2 calls to getID
          // when visiting the many children of a single node in order.

          if (targetID === childID) {
            targetChild = child;
          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
            // If we find a child whose ID is an ancestor of the given ID,
            // then we can be sure that we only want to search the subtree
            // rooted at this child, so we can throw out the rest of the
            // search state.
            firstChildren.length = childIndex = 0;
            firstChildren.push(child.firstChild);
          }

        } else {
          // If this child had no ID, then there's a chance that it was
          // injected automatically by the browser, as when a `<table>`
          // element sprouts an extra `<tbody>` child as a side effect of
          // `.innerHTML` parsing. Optimistically continue down this
          // branch, but not before examining the other siblings.
          firstChildren.push(child.firstChild);
        }

        child = child.nextSibling;
      }

      if (targetChild) {
        // Emptying firstChildren/findComponentRootReusableArray is
        // not necessary for correctness, but it helps the GC reclaim
        // any nodes that were left at the end of the search.
        firstChildren.length = 0;

        return targetChild;
      }
    }

    firstChildren.length = 0;

    ("production" !== process.env.NODE_ENV ? invariant(
      false,
      'findComponentRoot(..., %s): Unable to find element. This probably ' +
      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
      'parent. ' +
      'Try inspecting the child nodes of the element with React ID `%s`.',
      targetID,
      ReactMount.getID(ancestorNode)
    ) : invariant(false));
  },


  /**
   * React ID utilities.
   */

  getReactRootID: getReactRootID,

  getID: getID,

  setID: setID,

  getNode: getNode,

  purgeID: purgeID
};

// Deprecations (remove for 0.13)
ReactMount.renderComponent = deprecated(
  'ReactMount',
  'renderComponent',
  'render',
  this,
  ReactMount.render
);

module.exports = ReactMount;

}).call(this,require("oMfpAn"))
},{"./DOMProperty":36,"./ReactBrowserEventEmitter":56,"./ReactCurrentOwner":62,"./ReactElement":78,"./ReactInstanceHandles":86,"./ReactLegacyElement":87,"./ReactPerf":94,"./containsNode":128,"./deprecated":133,"./getReactRootElementInContainer":147,"./instantiateReactComponent":152,"./invariant":153,"./shouldUpdateReactComponent":169,"./warning":172,"oMfpAn":6}],90:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */

"use strict";

var ReactComponent = require("./ReactComponent");
var ReactMultiChildUpdateTypes = require("./ReactMultiChildUpdateTypes");

var flattenChildren = require("./flattenChildren");
var instantiateReactComponent = require("./instantiateReactComponent");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");

/**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */
var updateDepth = 0;

/**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */
var updateQueue = [];

/**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */
var markupQueue = [];

/**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function enqueueMarkup(parentID, markup, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
    markupIndex: markupQueue.push(markup) - 1,
    textContent: null,
    fromIndex: null,
    toIndex: toIndex
  });
}

/**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function enqueueMove(parentID, fromIndex, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
    markupIndex: null,
    textContent: null,
    fromIndex: fromIndex,
    toIndex: toIndex
  });
}

/**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function enqueueRemove(parentID, fromIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
    markupIndex: null,
    textContent: null,
    fromIndex: fromIndex,
    toIndex: null
  });
}

/**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */
function enqueueTextContent(parentID, textContent) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
    markupIndex: null,
    textContent: textContent,
    fromIndex: null,
    toIndex: null
  });
}

/**
 * Processes any enqueued updates.
 *
 * @private
 */
function processQueue() {
  if (updateQueue.length) {
    ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(
      updateQueue,
      markupQueue
    );
    clearQueue();
  }
}

/**
 * Clears any enqueued updates.
 *
 * @private
 */
function clearQueue() {
  updateQueue.length = 0;
  markupQueue.length = 0;
}

/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var ReactMultiChild = {

  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {

    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function(nestedChildren, transaction) {
      var children = flattenChildren(nestedChildren);
      var mountImages = [];
      var index = 0;
      this._renderedChildren = children;
      for (var name in children) {
        var child = children[name];
        if (children.hasOwnProperty(name)) {
          // The rendered children must be turned into instances as they're
          // mounted.
          var childInstance = instantiateReactComponent(child, null);
          children[name] = childInstance;
          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
          var rootID = this._rootNodeID + name;
          var mountImage = childInstance.mountComponent(
            rootID,
            transaction,
            this._mountDepth + 1
          );
          childInstance._mountIndex = index;
          mountImages.push(mountImage);
          index++;
        }
      }
      return mountImages;
    },

    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function(nextContent) {
      updateDepth++;
      var errorThrown = true;
      try {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            this._unmountChildByName(prevChildren[name], name);
          }
        }
        // Set new text content.
        this.setTextContent(nextContent);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          errorThrown ? clearQueue() : processQueue();
        }
      }
    },

    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function(nextNestedChildren, transaction) {
      updateDepth++;
      var errorThrown = true;
      try {
        this._updateChildren(nextNestedChildren, transaction);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          errorThrown ? clearQueue() : processQueue();
        }
      }
    },

    /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function(nextNestedChildren, transaction) {
      var nextChildren = flattenChildren(nextNestedChildren);
      var prevChildren = this._renderedChildren;
      if (!nextChildren && !prevChildren) {
        return;
      }
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var lastIndex = 0;
      var nextIndex = 0;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          this.moveChild(prevChild, nextIndex, lastIndex);
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild.receiveComponent(nextElement, transaction);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            this._unmountChildByName(prevChild, name);
          }
          // The child must be instantiated before it's mounted.
          var nextChildInstance = instantiateReactComponent(
            nextElement,
            null
          );
          this._mountChildByNameAtIndex(
            nextChildInstance, name, nextIndex, transaction
          );
        }
        nextIndex++;
      }
      // Remove children that are no longer present.
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) &&
            !(nextChildren && nextChildren[name])) {
          this._unmountChildByName(prevChildren[name], name);
        }
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */
    unmountChildren: function() {
      var renderedChildren = this._renderedChildren;
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        // TODO: When is this not true?
        if (renderedChild.unmountComponent) {
          renderedChild.unmountComponent();
        }
      }
      this._renderedChildren = null;
    },

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function(child, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
      }
    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function(child, mountImage) {
      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function(child) {
      enqueueRemove(this._rootNodeID, child._mountIndex);
    },

    /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */
    setTextContent: function(textContent) {
      enqueueTextContent(this._rootNodeID, textContent);
    },

    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildByNameAtIndex: function(child, name, index, transaction) {
      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
      var rootID = this._rootNodeID + name;
      var mountImage = child.mountComponent(
        rootID,
        transaction,
        this._mountDepth + 1
      );
      child._mountIndex = index;
      this.createChild(child, mountImage);
      this._renderedChildren = this._renderedChildren || {};
      this._renderedChildren[name] = child;
    },

    /**
     * Unmounts a rendered child by name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @param {string} name Name of the child in `this._renderedChildren`.
     * @private
     */
    _unmountChildByName: function(child, name) {
      this.removeChild(child);
      child._mountIndex = null;
      child.unmountComponent();
      delete this._renderedChildren[name];
    }

  }

};

module.exports = ReactMultiChild;

},{"./ReactComponent":58,"./ReactMultiChildUpdateTypes":91,"./flattenChildren":137,"./instantiateReactComponent":152,"./shouldUpdateReactComponent":169}],91:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */

"use strict";

var keyMirror = require("./keyMirror");

/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */
var ReactMultiChildUpdateTypes = keyMirror({
  INSERT_MARKUP: null,
  MOVE_EXISTING: null,
  REMOVE_NODE: null,
  TEXT_CONTENT: null
});

module.exports = ReactMultiChildUpdateTypes;

},{"./keyMirror":159}],92:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */

"use strict";

var assign = require("./Object.assign");
var invariant = require("./invariant");

var genericComponentClass = null;
// This registry keeps track of wrapper classes around native tags
var tagToComponentClass = {};

var ReactNativeComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function(componentClass) {
    genericComponentClass = componentClass;
  },
  // This accepts a keyed object with classes as values. Each key represents a
  // tag. That particular tag will use this class instead of the generic one.
  injectComponentClasses: function(componentClasses) {
    assign(tagToComponentClass, componentClasses);
  }
};

/**
 * Create an internal class for a specific tag.
 *
 * @param {string} tag The tag for which to create an internal instance.
 * @param {any} props The props passed to the instance constructor.
 * @return {ReactComponent} component The injected empty component.
 */
function createInstanceForTag(tag, props, parentType) {
  var componentClass = tagToComponentClass[tag];
  if (componentClass == null) {
    ("production" !== process.env.NODE_ENV ? invariant(
      genericComponentClass,
      'There is no registered component for the tag %s',
      tag
    ) : invariant(genericComponentClass));
    return new genericComponentClass(tag, props);
  }
  if (parentType === tag) {
    // Avoid recursion
    ("production" !== process.env.NODE_ENV ? invariant(
      genericComponentClass,
      'There is no registered component for the tag %s',
      tag
    ) : invariant(genericComponentClass));
    return new genericComponentClass(tag, props);
  }
  // Unwrap legacy factories
  return new componentClass.type(props);
}

var ReactNativeComponent = {
  createInstanceForTag: createInstanceForTag,
  injection: ReactNativeComponentInjection,
};

module.exports = ReactNativeComponent;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./invariant":153,"oMfpAn":6}],93:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */

"use strict";

var emptyObject = require("./emptyObject");
var invariant = require("./invariant");

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var ReactOwner = {

  /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
  isValidOwner: function(object) {
    return !!(
      object &&
      typeof object.attachRef === 'function' &&
      typeof object.detachRef === 'function'
    );
  },

  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function(component, ref, owner) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactOwner.isValidOwner(owner),
      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
      'usually means that you\'re trying to add a ref to a component that ' +
      'doesn\'t have an owner (that is, was not created inside of another ' +
      'component\'s `render` method). Try rendering this component inside of ' +
      'a new top-level component which will hold the ref.'
    ) : invariant(ReactOwner.isValidOwner(owner)));
    owner.attachRef(ref, component);
  },

  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function(component, ref, owner) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactOwner.isValidOwner(owner),
      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
      'usually means that you\'re trying to remove a ref to a component that ' +
      'doesn\'t have an owner (that is, was not created inside of another ' +
      'component\'s `render` method). Try rendering this component inside of ' +
      'a new top-level component which will hold the ref.'
    ) : invariant(ReactOwner.isValidOwner(owner)));
    // Check that `component` is still the current ref because we do not want to
    // detach the ref if another component stole it.
    if (owner.refs[ref] === component) {
      owner.detachRef(ref);
    }
  },

  /**
   * A ReactComponent must mix this in to have refs.
   *
   * @lends {ReactOwner.prototype}
   */
  Mixin: {

    construct: function() {
      this.refs = emptyObject;
    },

    /**
     * Lazily allocates the refs object and stores `component` as `ref`.
     *
     * @param {string} ref Reference name.
     * @param {component} component Component to store as `ref`.
     * @final
     * @private
     */
    attachRef: function(ref, component) {
      ("production" !== process.env.NODE_ENV ? invariant(
        component.isOwnedBy(this),
        'attachRef(%s, ...): Only a component\'s owner can store a ref to it.',
        ref
      ) : invariant(component.isOwnedBy(this)));
      var refs = this.refs === emptyObject ? (this.refs = {}) : this.refs;
      refs[ref] = component;
    },

    /**
     * Detaches a reference name.
     *
     * @param {string} ref Name to dereference.
     * @final
     * @private
     */
    detachRef: function(ref) {
      delete this.refs[ref];
    }

  }

};

module.exports = ReactOwner;

}).call(this,require("oMfpAn"))
},{"./emptyObject":135,"./invariant":153,"oMfpAn":6}],94:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */

"use strict";

/**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */
var ReactPerf = {
  /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */
  enableMeasure: false,

  /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */
  storedMeasure: _noMeasure,

  /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */
  measure: function(objName, fnName, func) {
    if ("production" !== process.env.NODE_ENV) {
      var measuredFunc = null;
      var wrapper = function() {
        if (ReactPerf.enableMeasure) {
          if (!measuredFunc) {
            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
          }
          return measuredFunc.apply(this, arguments);
        }
        return func.apply(this, arguments);
      };
      wrapper.displayName = objName + '_' + fnName;
      return wrapper;
    }
    return func;
  },

  injection: {
    /**
     * @param {function} measure
     */
    injectMeasure: function(measure) {
      ReactPerf.storedMeasure = measure;
    }
  }
};

/**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */
function _noMeasure(objName, fnName, func) {
  return func;
}

module.exports = ReactPerf;

}).call(this,require("oMfpAn"))
},{"oMfpAn":6}],95:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTransferer
 */

"use strict";

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");
var invariant = require("./invariant");
var joinClasses = require("./joinClasses");
var warning = require("./warning");

var didWarn = false;

/**
 * Creates a transfer strategy that will merge prop values using the supplied
 * `mergeStrategy`. If a prop was previously unset, this just sets it.
 *
 * @param {function} mergeStrategy
 * @return {function}
 */
function createTransferStrategy(mergeStrategy) {
  return function(props, key, value) {
    if (!props.hasOwnProperty(key)) {
      props[key] = value;
    } else {
      props[key] = mergeStrategy(props[key], value);
    }
  };
}

var transferStrategyMerge = createTransferStrategy(function(a, b) {
  // `merge` overrides the first object's (`props[key]` above) keys using the
  // second object's (`value`) keys. An object's style's existing `propA` would
  // get overridden. Flip the order here.
  return assign({}, b, a);
});

/**
 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
 * NOTE: if you add any more exceptions to this list you should be sure to
 * update `cloneWithProps()` accordingly.
 */
var TransferStrategies = {
  /**
   * Never transfer `children`.
   */
  children: emptyFunction,
  /**
   * Transfer the `className` prop by merging them.
   */
  className: createTransferStrategy(joinClasses),
  /**
   * Transfer the `style` prop (which is an object) by merging them.
   */
  style: transferStrategyMerge
};

/**
 * Mutates the first argument by transferring the properties from the second
 * argument.
 *
 * @param {object} props
 * @param {object} newProps
 * @return {object}
 */
function transferInto(props, newProps) {
  for (var thisKey in newProps) {
    if (!newProps.hasOwnProperty(thisKey)) {
      continue;
    }

    var transferStrategy = TransferStrategies[thisKey];

    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
      transferStrategy(props, thisKey, newProps[thisKey]);
    } else if (!props.hasOwnProperty(thisKey)) {
      props[thisKey] = newProps[thisKey];
    }
  }
  return props;
}

/**
 * ReactPropTransferer are capable of transferring props to another component
 * using a `transferPropsTo` method.
 *
 * @class ReactPropTransferer
 */
var ReactPropTransferer = {

  TransferStrategies: TransferStrategies,

  /**
   * Merge two props objects using TransferStrategies.
   *
   * @param {object} oldProps original props (they take precedence)
   * @param {object} newProps new props to merge in
   * @return {object} a new object containing both sets of props merged.
   */
  mergeProps: function(oldProps, newProps) {
    return transferInto(assign({}, oldProps), newProps);
  },

  /**
   * @lends {ReactPropTransferer.prototype}
   */
  Mixin: {

    /**
     * Transfer props from this component to a target component.
     *
     * Props that do not have an explicit transfer strategy will be transferred
     * only if the target component does not already have the prop set.
     *
     * This is usually used to pass down props to a returned root component.
     *
     * @param {ReactElement} element Component receiving the properties.
     * @return {ReactElement} The supplied `component`.
     * @final
     * @protected
     */
    transferPropsTo: function(element) {
      ("production" !== process.env.NODE_ENV ? invariant(
        element._owner === this,
        '%s: You can\'t call transferPropsTo() on a component that you ' +
        'don\'t own, %s. This usually means you are calling ' +
        'transferPropsTo() on a component passed in as props or children.',
        this.constructor.displayName,
        typeof element.type === 'string' ?
        element.type :
        element.type.displayName
      ) : invariant(element._owner === this));

      if ("production" !== process.env.NODE_ENV) {
        if (!didWarn) {
          didWarn = true;
          ("production" !== process.env.NODE_ENV ? warning(
            false,
            'transferPropsTo is deprecated. ' +
            'See http://fb.me/react-transferpropsto for more information.'
          ) : null);
        }
      }

      // Because elements are immutable we have to merge into the existing
      // props object rather than clone it.
      transferInto(element.props, this.props);

      return element;
    }

  }
};

module.exports = ReactPropTransferer;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./emptyFunction":134,"./invariant":153,"./joinClasses":158,"./warning":172,"oMfpAn":6}],96:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */

"use strict";

var ReactPropTypeLocationNames = {};

if ("production" !== process.env.NODE_ENV) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

}).call(this,require("oMfpAn"))
},{"oMfpAn":6}],97:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */

"use strict";

var keyMirror = require("./keyMirror");

var ReactPropTypeLocations = keyMirror({
  prop: null,
  context: null,
  childContext: null
});

module.exports = ReactPropTypeLocations;

},{"./keyMirror":159}],98:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactPropTypeLocationNames = require("./ReactPropTypeLocationNames");

var deprecated = require("./deprecated");
var emptyFunction = require("./emptyFunction");

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var elementTypeChecker = createElementTypeChecker();
var nodeTypeChecker = createNodeChecker();

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: elementTypeChecker,
  instanceOf: createInstanceTypeChecker,
  node: nodeTypeChecker,
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker,

  component: deprecated(
    'React.PropTypes',
    'component',
    'element',
    this,
    elementTypeChecker
  ),
  renderable: deprecated(
    'React.PropTypes',
    'renderable',
    'node',
    this,
    nodeTypeChecker
  )
};

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ")+
          ("`" + componentName + "`.")
        );
      }
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns());
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type ") +
        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
      );
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location);
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location) {
    if (!ReactElement.isValidElement(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected a ReactElement.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (propValue === expectedValues[i]) {
        return;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new Error(
      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
    );
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type ") +
        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
      );
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location);
        if (error instanceof Error) {
          return error;
        }
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  function validate(props, propName, componentName, location) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location) == null) {
        return;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new Error(
      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
      ("`" + componentName + "`.")
    );
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected a ReactNode.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
        ("supplied to `" + componentName + "`, expected `object`.")
      );
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location);
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate, 'expected `object`');
}

function isNode(propValue) {
  switch(typeof propValue) {
    case 'number':
    case 'string':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (ReactElement.isValidElement(propValue)) {
        return true;
      }
      for (var k in propValue) {
        if (!isNode(propValue[k])) {
          return false;
        }
      }
      return true;
    default:
      return false;
  }
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

module.exports = ReactPropTypes;

},{"./ReactElement":78,"./ReactPropTypeLocationNames":96,"./deprecated":133,"./emptyFunction":134}],99:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPutListenerQueue
 */

"use strict";

var PooledClass = require("./PooledClass");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");

var assign = require("./Object.assign");

function ReactPutListenerQueue() {
  this.listenersToPut = [];
}

assign(ReactPutListenerQueue.prototype, {
  enqueuePutListener: function(rootNodeID, propKey, propValue) {
    this.listenersToPut.push({
      rootNodeID: rootNodeID,
      propKey: propKey,
      propValue: propValue
    });
  },

  putListeners: function() {
    for (var i = 0; i < this.listenersToPut.length; i++) {
      var listenerToPut = this.listenersToPut[i];
      ReactBrowserEventEmitter.putListener(
        listenerToPut.rootNodeID,
        listenerToPut.propKey,
        listenerToPut.propValue
      );
    }
  },

  reset: function() {
    this.listenersToPut.length = 0;
  },

  destructor: function() {
    this.reset();
  }
});

PooledClass.addPoolingTo(ReactPutListenerQueue);

module.exports = ReactPutListenerQueue;

},{"./Object.assign":52,"./PooledClass":53,"./ReactBrowserEventEmitter":56}],100:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */

"use strict";

var CallbackQueue = require("./CallbackQueue");
var PooledClass = require("./PooledClass");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactInputSelection = require("./ReactInputSelection");
var ReactPutListenerQueue = require("./ReactPutListenerQueue");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function() {
    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
    ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
   *   restores the previous value.
   */
  close: function(previouslyEnabled) {
    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function() {
    this.reactMountReady.reset();
  },

  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function() {
    this.reactMountReady.notifyAll();
  }
};

var PUT_LISTENER_QUEUEING = {
  initialize: function() {
    this.putListenerQueue.reset();
  },

  close: function() {
    this.putListenerQueue.putListeners();
  }
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [
  PUT_LISTENER_QUEUEING,
  SELECTION_RESTORATION,
  EVENT_SUPPRESSION,
  ON_DOM_READY_QUEUEING
];

/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function ReactReconcileTransaction() {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue.getPooled();
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap proceedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function() {
    return this.reactMountReady;
  },

  getPutListenerQueue: function() {
    return this.putListenerQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
  destructor: function() {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;

    ReactPutListenerQueue.release(this.putListenerQueue);
    this.putListenerQueue = null;
  }
};


assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

PooledClass.addPoolingTo(ReactReconcileTransaction);

module.exports = ReactReconcileTransaction;

},{"./CallbackQueue":31,"./Object.assign":52,"./PooledClass":53,"./ReactBrowserEventEmitter":56,"./ReactInputSelection":85,"./ReactPutListenerQueue":99,"./Transaction":121}],101:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */

"use strict";

var ReactRootIndexInjection = {
  /**
   * @param {function} _createReactRootIndex
   */
  injectCreateReactRootIndex: function(_createReactRootIndex) {
    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
  }
};

var ReactRootIndex = {
  createReactRootIndex: null,
  injection: ReactRootIndexInjection
};

module.exports = ReactRootIndex;

},{}],102:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
"use strict";

var ReactElement = require("./ReactElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMarkupChecksum = require("./ReactMarkupChecksum");
var ReactServerRenderingTransaction =
  require("./ReactServerRenderingTransaction");

var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToString(element) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(element),
    'renderToString(): You must pass a valid ReactElement.'
  ) : invariant(ReactElement.isValidElement(element)));

  var transaction;
  try {
    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(false);

    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent(element, null);
      var markup = componentInstance.mountComponent(id, transaction, 0);
      return ReactMarkupChecksum.addChecksumToMarkup(markup);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
  }
}

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */
function renderToStaticMarkup(element) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(element),
    'renderToStaticMarkup(): You must pass a valid ReactElement.'
  ) : invariant(ReactElement.isValidElement(element)));

  var transaction;
  try {
    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(true);

    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent(element, null);
      return componentInstance.mountComponent(id, transaction, 0);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
  }
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./ReactInstanceHandles":86,"./ReactMarkupChecksum":88,"./ReactServerRenderingTransaction":103,"./instantiateReactComponent":152,"./invariant":153,"oMfpAn":6}],103:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */

"use strict";

var PooledClass = require("./PooledClass");
var CallbackQueue = require("./CallbackQueue");
var ReactPutListenerQueue = require("./ReactPutListenerQueue");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");

/**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function() {
    this.reactMountReady.reset();
  },

  close: emptyFunction
};

var PUT_LISTENER_QUEUEING = {
  initialize: function() {
    this.putListenerQueue.reset();
  },

  close: emptyFunction
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [
  PUT_LISTENER_QUEUEING,
  ON_DOM_READY_QUEUEING
];

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue.getPooled();
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap proceedures.
   */
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function() {
    return this.reactMountReady;
  },

  getPutListenerQueue: function() {
    return this.putListenerQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
  destructor: function() {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;

    ReactPutListenerQueue.release(this.putListenerQueue);
    this.putListenerQueue = null;
  }
};


assign(
  ReactServerRenderingTransaction.prototype,
  Transaction.Mixin,
  Mixin
);

PooledClass.addPoolingTo(ReactServerRenderingTransaction);

module.exports = ReactServerRenderingTransaction;

},{"./CallbackQueue":31,"./Object.assign":52,"./PooledClass":53,"./ReactPutListenerQueue":99,"./Transaction":121,"./emptyFunction":134}],104:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTextComponent
 * @typechecks static-only
 */

"use strict";

var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactComponent = require("./ReactComponent");
var ReactElement = require("./ReactElement");

var assign = require("./Object.assign");
var escapeTextForBrowser = require("./escapeTextForBrowser");

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactTextComponent
 * @extends ReactComponent
 * @internal
 */
var ReactTextComponent = function(props) {
  // This constructor and it's argument is currently used by mocks.
};

assign(ReactTextComponent.prototype, ReactComponent.Mixin, {

  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function(rootID, transaction, mountDepth) {
    ReactComponent.Mixin.mountComponent.call(
      this,
      rootID,
      transaction,
      mountDepth
    );

    var escapedText = escapeTextForBrowser(this.props);

    if (transaction.renderToStaticMarkup) {
      // Normally we'd wrap this in a `span` for the reasons stated above, but
      // since this is a situation where React won't take over (static pages),
      // we can simply return the text as it is.
      return escapedText;
    }

    return (
      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
        escapedText +
      '</span>'
    );
  },

  /**
   * Updates this component by updating the text content.
   *
   * @param {object} nextComponent Contains the next text content.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function(nextComponent, transaction) {
    var nextProps = nextComponent.props;
    if (nextProps !== this.props) {
      this.props = nextProps;
      ReactComponent.BackendIDOperations.updateTextContentByID(
        this._rootNodeID,
        nextProps
      );
    }
  }

});

var ReactTextComponentFactory = function(text) {
  // Bypass validation and configuration
  return new ReactElement(ReactTextComponent, null, null, null, null, text);
};

ReactTextComponentFactory.type = ReactTextComponent;

module.exports = ReactTextComponentFactory;

},{"./DOMPropertyOperations":37,"./Object.assign":52,"./ReactComponent":58,"./ReactElement":78,"./escapeTextForBrowser":136}],105:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */

"use strict";

var CallbackQueue = require("./CallbackQueue");
var PooledClass = require("./PooledClass");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactPerf = require("./ReactPerf");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var invariant = require("./invariant");
var warning = require("./warning");

var dirtyComponents = [];
var asapCallbackQueue = CallbackQueue.getPooled();
var asapEnqueued = false;

var batchingStrategy = null;

function ensureInjected() {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
    'ReactUpdates: must inject a reconcile transaction class and batching ' +
    'strategy'
  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
}

var NESTED_UPDATES = {
  initialize: function() {
    this.dirtyComponentsLength = dirtyComponents.length;
  },
  close: function() {
    if (this.dirtyComponentsLength !== dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      dirtyComponents.splice(0, this.dirtyComponentsLength);
      flushBatchedUpdates();
    } else {
      dirtyComponents.length = 0;
    }
  }
};

var UPDATE_QUEUEING = {
  initialize: function() {
    this.callbackQueue.reset();
  },
  close: function() {
    this.callbackQueue.notifyAll();
  }
};

var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction =
    ReactUpdates.ReactReconcileTransaction.getPooled();
}

assign(
  ReactUpdatesFlushTransaction.prototype,
  Transaction.Mixin, {
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  destructor: function() {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function(method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.Mixin.perform.call(
      this,
      this.reconcileTransaction.perform,
      this.reconcileTransaction,
      method,
      scope,
      a
    );
  }
});

PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

function batchedUpdates(callback, a, b) {
  ensureInjected();
  batchingStrategy.batchedUpdates(callback, a, b);
}

/**
 * Array comparator for ReactComponents by owner depth
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function mountDepthComparator(c1, c2) {
  return c1._mountDepth - c2._mountDepth;
}

function runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  ("production" !== process.env.NODE_ENV ? invariant(
    len === dirtyComponents.length,
    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
    'match dirty-components array length (%s).',
    len,
    dirtyComponents.length
  ) : invariant(len === dirtyComponents.length));

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  dirtyComponents.sort(mountDepthComparator);

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, ignore them
    // TODO: Queue unmounts in the same list to avoid this happening at all
    var component = dirtyComponents[i];
    if (component.isMounted()) {
      // If performUpdateIfNecessary happens to enqueue any new updates, we
      // shouldn't execute the callbacks until the next render happens, so
      // stash the callbacks first
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;
      component.performUpdateIfNecessary(transaction.reconcileTransaction);

      if (callbacks) {
        for (var j = 0; j < callbacks.length; j++) {
          transaction.callbackQueue.enqueue(
            callbacks[j],
            component
          );
        }
      }
    }
  }
}

var flushBatchedUpdates = ReactPerf.measure(
  'ReactUpdates',
  'flushBatchedUpdates',
  function() {
    // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
    // array and perform any updates enqueued by mount-ready handlers (i.e.,
    // componentDidUpdate) but we need to check here too in order to catch
    // updates enqueued by setState callbacks and asap calls.
    while (dirtyComponents.length || asapEnqueued) {
      if (dirtyComponents.length) {
        var transaction = ReactUpdatesFlushTransaction.getPooled();
        transaction.perform(runBatchedUpdates, null, transaction);
        ReactUpdatesFlushTransaction.release(transaction);
      }

      if (asapEnqueued) {
        asapEnqueued = false;
        var queue = asapCallbackQueue;
        asapCallbackQueue = CallbackQueue.getPooled();
        queue.notifyAll();
        CallbackQueue.release(queue);
      }
    }
  }
);

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component, callback) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !callback || typeof callback === "function",
    'enqueueUpdate(...): You called `setProps`, `replaceProps`, ' +
    '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
    'isn\'t callable.'
  ) : invariant(!callback || typeof callback === "function"));
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setProps, setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)
  ("production" !== process.env.NODE_ENV ? warning(
    ReactCurrentOwner.current == null,
    'enqueueUpdate(): Render methods should be a pure function of props ' +
    'and state; triggering nested component updates from render is not ' +
    'allowed. If necessary, trigger nested updates in ' +
    'componentDidUpdate.'
  ) : null);

  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component, callback);
    return;
  }

  dirtyComponents.push(component);

  if (callback) {
    if (component._pendingCallbacks) {
      component._pendingCallbacks.push(callback);
    } else {
      component._pendingCallbacks = [callback];
    }
  }
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function asap(callback, context) {
  ("production" !== process.env.NODE_ENV ? invariant(
    batchingStrategy.isBatchingUpdates,
    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
    'updates are not being batched.'
  ) : invariant(batchingStrategy.isBatchingUpdates));
  asapCallbackQueue.enqueue(callback, context);
  asapEnqueued = true;
}

var ReactUpdatesInjection = {
  injectReconcileTransaction: function(ReconcileTransaction) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReconcileTransaction,
      'ReactUpdates: must provide a reconcile transaction class'
    ) : invariant(ReconcileTransaction));
    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function(_batchingStrategy) {
    ("production" !== process.env.NODE_ENV ? invariant(
      _batchingStrategy,
      'ReactUpdates: must provide a batching strategy'
    ) : invariant(_batchingStrategy));
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof _batchingStrategy.batchedUpdates === 'function',
      'ReactUpdates: must provide a batchedUpdates() function'
    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
    batchingStrategy = _batchingStrategy;
  }
};

var ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: batchedUpdates,
  enqueueUpdate: enqueueUpdate,
  flushBatchedUpdates: flushBatchedUpdates,
  injection: ReactUpdatesInjection,
  asap: asap
};

module.exports = ReactUpdates;

}).call(this,require("oMfpAn"))
},{"./CallbackQueue":31,"./Object.assign":52,"./PooledClass":53,"./ReactCurrentOwner":62,"./ReactPerf":94,"./Transaction":121,"./invariant":153,"./warning":172,"oMfpAn":6}],106:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */

/*jslint bitwise: true*/

"use strict";

var DOMProperty = require("./DOMProperty");

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

var SVGDOMPropertyConfig = {
  Properties: {
    cx: MUST_USE_ATTRIBUTE,
    cy: MUST_USE_ATTRIBUTE,
    d: MUST_USE_ATTRIBUTE,
    dx: MUST_USE_ATTRIBUTE,
    dy: MUST_USE_ATTRIBUTE,
    fill: MUST_USE_ATTRIBUTE,
    fillOpacity: MUST_USE_ATTRIBUTE,
    fontFamily: MUST_USE_ATTRIBUTE,
    fontSize: MUST_USE_ATTRIBUTE,
    fx: MUST_USE_ATTRIBUTE,
    fy: MUST_USE_ATTRIBUTE,
    gradientTransform: MUST_USE_ATTRIBUTE,
    gradientUnits: MUST_USE_ATTRIBUTE,
    markerEnd: MUST_USE_ATTRIBUTE,
    markerMid: MUST_USE_ATTRIBUTE,
    markerStart: MUST_USE_ATTRIBUTE,
    offset: MUST_USE_ATTRIBUTE,
    opacity: MUST_USE_ATTRIBUTE,
    patternContentUnits: MUST_USE_ATTRIBUTE,
    patternUnits: MUST_USE_ATTRIBUTE,
    points: MUST_USE_ATTRIBUTE,
    preserveAspectRatio: MUST_USE_ATTRIBUTE,
    r: MUST_USE_ATTRIBUTE,
    rx: MUST_USE_ATTRIBUTE,
    ry: MUST_USE_ATTRIBUTE,
    spreadMethod: MUST_USE_ATTRIBUTE,
    stopColor: MUST_USE_ATTRIBUTE,
    stopOpacity: MUST_USE_ATTRIBUTE,
    stroke: MUST_USE_ATTRIBUTE,
    strokeDasharray: MUST_USE_ATTRIBUTE,
    strokeLinecap: MUST_USE_ATTRIBUTE,
    strokeOpacity: MUST_USE_ATTRIBUTE,
    strokeWidth: MUST_USE_ATTRIBUTE,
    textAnchor: MUST_USE_ATTRIBUTE,
    transform: MUST_USE_ATTRIBUTE,
    version: MUST_USE_ATTRIBUTE,
    viewBox: MUST_USE_ATTRIBUTE,
    x1: MUST_USE_ATTRIBUTE,
    x2: MUST_USE_ATTRIBUTE,
    x: MUST_USE_ATTRIBUTE,
    y1: MUST_USE_ATTRIBUTE,
    y2: MUST_USE_ATTRIBUTE,
    y: MUST_USE_ATTRIBUTE
  },
  DOMAttributeNames: {
    fillOpacity: 'fill-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    patternContentUnits: 'patternContentUnits',
    patternUnits: 'patternUnits',
    preserveAspectRatio: 'preserveAspectRatio',
    spreadMethod: 'spreadMethod',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeLinecap: 'stroke-linecap',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    viewBox: 'viewBox'
  }
};

module.exports = SVGDOMPropertyConfig;

},{"./DOMProperty":36}],107:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ReactInputSelection = require("./ReactInputSelection");
var SyntheticEvent = require("./SyntheticEvent");

var getActiveElement = require("./getActiveElement");
var isTextInputElement = require("./isTextInputElement");
var keyOf = require("./keyOf");
var shallowEqual = require("./shallowEqual");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: keyOf({onSelect: null}),
      captured: keyOf({onSelectCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topContextMenu,
      topLevelTypes.topFocus,
      topLevelTypes.topKeyDown,
      topLevelTypes.topMouseDown,
      topLevelTypes.topMouseUp,
      topLevelTypes.topSelectionChange
    ]
  }
};

var activeElement = null;
var activeElementID = null;
var lastSelection = null;
var mouseDown = false;

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @param {object}
 */
function getSelection(node) {
  if ('selectionStart' in node &&
      ReactInputSelection.hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  } else if (document.selection) {
    var range = document.selection.createRange();
    return {
      parentElement: range.parentElement(),
      text: range.text,
      top: range.boundingTop,
      left: range.boundingLeft
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown ||
      activeElement == null ||
      activeElement != getActiveElement()) {
    return;
  }

  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent.getPooled(
      eventTypes.select,
      activeElementID,
      nativeEvent
    );

    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement;

    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    switch (topLevelType) {
      // Track the input node that has focus.
      case topLevelTypes.topFocus:
        if (isTextInputElement(topLevelTarget) ||
            topLevelTarget.contentEditable === 'true') {
          activeElement = topLevelTarget;
          activeElementID = topLevelTargetID;
          lastSelection = null;
        }
        break;
      case topLevelTypes.topBlur:
        activeElement = null;
        activeElementID = null;
        lastSelection = null;
        break;

      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case topLevelTypes.topMouseDown:
        mouseDown = true;
        break;
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topMouseUp:
        mouseDown = false;
        return constructSelectEvent(nativeEvent);

      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't).
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      case topLevelTypes.topSelectionChange:
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        return constructSelectEvent(nativeEvent);
    }
  }
};

module.exports = SelectEventPlugin;

},{"./EventConstants":41,"./EventPropagators":46,"./ReactInputSelection":85,"./SyntheticEvent":113,"./getActiveElement":140,"./isTextInputElement":156,"./keyOf":160,"./shallowEqual":168}],108:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */

"use strict";

/**
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */
var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

var ServerReactRootIndex = {
  createReactRootIndex: function() {
    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
  }
};

module.exports = ServerReactRootIndex;

},{}],109:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginUtils = require("./EventPluginUtils");
var EventPropagators = require("./EventPropagators");
var SyntheticClipboardEvent = require("./SyntheticClipboardEvent");
var SyntheticEvent = require("./SyntheticEvent");
var SyntheticFocusEvent = require("./SyntheticFocusEvent");
var SyntheticKeyboardEvent = require("./SyntheticKeyboardEvent");
var SyntheticMouseEvent = require("./SyntheticMouseEvent");
var SyntheticDragEvent = require("./SyntheticDragEvent");
var SyntheticTouchEvent = require("./SyntheticTouchEvent");
var SyntheticUIEvent = require("./SyntheticUIEvent");
var SyntheticWheelEvent = require("./SyntheticWheelEvent");

var getEventCharCode = require("./getEventCharCode");

var invariant = require("./invariant");
var keyOf = require("./keyOf");
var warning = require("./warning");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  blur: {
    phasedRegistrationNames: {
      bubbled: keyOf({onBlur: true}),
      captured: keyOf({onBlurCapture: true})
    }
  },
  click: {
    phasedRegistrationNames: {
      bubbled: keyOf({onClick: true}),
      captured: keyOf({onClickCapture: true})
    }
  },
  contextMenu: {
    phasedRegistrationNames: {
      bubbled: keyOf({onContextMenu: true}),
      captured: keyOf({onContextMenuCapture: true})
    }
  },
  copy: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCopy: true}),
      captured: keyOf({onCopyCapture: true})
    }
  },
  cut: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCut: true}),
      captured: keyOf({onCutCapture: true})
    }
  },
  doubleClick: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDoubleClick: true}),
      captured: keyOf({onDoubleClickCapture: true})
    }
  },
  drag: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDrag: true}),
      captured: keyOf({onDragCapture: true})
    }
  },
  dragEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragEnd: true}),
      captured: keyOf({onDragEndCapture: true})
    }
  },
  dragEnter: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragEnter: true}),
      captured: keyOf({onDragEnterCapture: true})
    }
  },
  dragExit: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragExit: true}),
      captured: keyOf({onDragExitCapture: true})
    }
  },
  dragLeave: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragLeave: true}),
      captured: keyOf({onDragLeaveCapture: true})
    }
  },
  dragOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragOver: true}),
      captured: keyOf({onDragOverCapture: true})
    }
  },
  dragStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragStart: true}),
      captured: keyOf({onDragStartCapture: true})
    }
  },
  drop: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDrop: true}),
      captured: keyOf({onDropCapture: true})
    }
  },
  focus: {
    phasedRegistrationNames: {
      bubbled: keyOf({onFocus: true}),
      captured: keyOf({onFocusCapture: true})
    }
  },
  input: {
    phasedRegistrationNames: {
      bubbled: keyOf({onInput: true}),
      captured: keyOf({onInputCapture: true})
    }
  },
  keyDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyDown: true}),
      captured: keyOf({onKeyDownCapture: true})
    }
  },
  keyPress: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyPress: true}),
      captured: keyOf({onKeyPressCapture: true})
    }
  },
  keyUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyUp: true}),
      captured: keyOf({onKeyUpCapture: true})
    }
  },
  load: {
    phasedRegistrationNames: {
      bubbled: keyOf({onLoad: true}),
      captured: keyOf({onLoadCapture: true})
    }
  },
  error: {
    phasedRegistrationNames: {
      bubbled: keyOf({onError: true}),
      captured: keyOf({onErrorCapture: true})
    }
  },
  // Note: We do not allow listening to mouseOver events. Instead, use the
  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
  mouseDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseDown: true}),
      captured: keyOf({onMouseDownCapture: true})
    }
  },
  mouseMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseMove: true}),
      captured: keyOf({onMouseMoveCapture: true})
    }
  },
  mouseOut: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseOut: true}),
      captured: keyOf({onMouseOutCapture: true})
    }
  },
  mouseOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseOver: true}),
      captured: keyOf({onMouseOverCapture: true})
    }
  },
  mouseUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseUp: true}),
      captured: keyOf({onMouseUpCapture: true})
    }
  },
  paste: {
    phasedRegistrationNames: {
      bubbled: keyOf({onPaste: true}),
      captured: keyOf({onPasteCapture: true})
    }
  },
  reset: {
    phasedRegistrationNames: {
      bubbled: keyOf({onReset: true}),
      captured: keyOf({onResetCapture: true})
    }
  },
  scroll: {
    phasedRegistrationNames: {
      bubbled: keyOf({onScroll: true}),
      captured: keyOf({onScrollCapture: true})
    }
  },
  submit: {
    phasedRegistrationNames: {
      bubbled: keyOf({onSubmit: true}),
      captured: keyOf({onSubmitCapture: true})
    }
  },
  touchCancel: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchCancel: true}),
      captured: keyOf({onTouchCancelCapture: true})
    }
  },
  touchEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchEnd: true}),
      captured: keyOf({onTouchEndCapture: true})
    }
  },
  touchMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchMove: true}),
      captured: keyOf({onTouchMoveCapture: true})
    }
  },
  touchStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchStart: true}),
      captured: keyOf({onTouchStartCapture: true})
    }
  },
  wheel: {
    phasedRegistrationNames: {
      bubbled: keyOf({onWheel: true}),
      captured: keyOf({onWheelCapture: true})
    }
  }
};

var topLevelEventsToDispatchConfig = {
  topBlur:        eventTypes.blur,
  topClick:       eventTypes.click,
  topContextMenu: eventTypes.contextMenu,
  topCopy:        eventTypes.copy,
  topCut:         eventTypes.cut,
  topDoubleClick: eventTypes.doubleClick,
  topDrag:        eventTypes.drag,
  topDragEnd:     eventTypes.dragEnd,
  topDragEnter:   eventTypes.dragEnter,
  topDragExit:    eventTypes.dragExit,
  topDragLeave:   eventTypes.dragLeave,
  topDragOver:    eventTypes.dragOver,
  topDragStart:   eventTypes.dragStart,
  topDrop:        eventTypes.drop,
  topError:       eventTypes.error,
  topFocus:       eventTypes.focus,
  topInput:       eventTypes.input,
  topKeyDown:     eventTypes.keyDown,
  topKeyPress:    eventTypes.keyPress,
  topKeyUp:       eventTypes.keyUp,
  topLoad:        eventTypes.load,
  topMouseDown:   eventTypes.mouseDown,
  topMouseMove:   eventTypes.mouseMove,
  topMouseOut:    eventTypes.mouseOut,
  topMouseOver:   eventTypes.mouseOver,
  topMouseUp:     eventTypes.mouseUp,
  topPaste:       eventTypes.paste,
  topReset:       eventTypes.reset,
  topScroll:      eventTypes.scroll,
  topSubmit:      eventTypes.submit,
  topTouchCancel: eventTypes.touchCancel,
  topTouchEnd:    eventTypes.touchEnd,
  topTouchMove:   eventTypes.touchMove,
  topTouchStart:  eventTypes.touchStart,
  topWheel:       eventTypes.wheel
};

for (var topLevelType in topLevelEventsToDispatchConfig) {
  topLevelEventsToDispatchConfig[topLevelType].dependencies = [topLevelType];
}

var SimpleEventPlugin = {

  eventTypes: eventTypes,

  /**
   * Same as the default implementation, except cancels the event when return
   * value is false. This behavior will be disabled in a future release.
   *
   * @param {object} Event to be dispatched.
   * @param {function} Application-level callback.
   * @param {string} domID DOM ID to pass to the callback.
   */
  executeDispatch: function(event, listener, domID) {
    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);

    ("production" !== process.env.NODE_ENV ? warning(
      typeof returnValue !== 'boolean',
      'Returning `false` from an event handler is deprecated and will be ' +
      'ignored in a future release. Instead, manually call ' +
      'e.stopPropagation() or e.preventDefault(), as appropriate.'
    ) : null);

    if (returnValue === false) {
      event.stopPropagation();
      event.preventDefault();
    }
  },

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case topLevelTypes.topInput:
      case topLevelTypes.topLoad:
      case topLevelTypes.topError:
      case topLevelTypes.topReset:
      case topLevelTypes.topSubmit:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case topLevelTypes.topKeyPress:
        // FireFox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
        /* falls through */
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case topLevelTypes.topBlur:
      case topLevelTypes.topFocus:
        EventConstructor = SyntheticFocusEvent;
        break;
      case topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
        /* falls through */
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topDoubleClick:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topMouseMove:
      case topLevelTypes.topMouseOut:
      case topLevelTypes.topMouseOver:
      case topLevelTypes.topMouseUp:
        EventConstructor = SyntheticMouseEvent;
        break;
      case topLevelTypes.topDrag:
      case topLevelTypes.topDragEnd:
      case topLevelTypes.topDragEnter:
      case topLevelTypes.topDragExit:
      case topLevelTypes.topDragLeave:
      case topLevelTypes.topDragOver:
      case topLevelTypes.topDragStart:
      case topLevelTypes.topDrop:
        EventConstructor = SyntheticDragEvent;
        break;
      case topLevelTypes.topTouchCancel:
      case topLevelTypes.topTouchEnd:
      case topLevelTypes.topTouchMove:
      case topLevelTypes.topTouchStart:
        EventConstructor = SyntheticTouchEvent;
        break;
      case topLevelTypes.topScroll:
        EventConstructor = SyntheticUIEvent;
        break;
      case topLevelTypes.topWheel:
        EventConstructor = SyntheticWheelEvent;
        break;
      case topLevelTypes.topCopy:
      case topLevelTypes.topCut:
      case topLevelTypes.topPaste:
        EventConstructor = SyntheticClipboardEvent;
        break;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      EventConstructor,
      'SimpleEventPlugin: Unhandled event type, `%s`.',
      topLevelType
    ) : invariant(EventConstructor));
    var event = EventConstructor.getPooled(
      dispatchConfig,
      topLevelTargetID,
      nativeEvent
    );
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }

};

module.exports = SimpleEventPlugin;

}).call(this,require("oMfpAn"))
},{"./EventConstants":41,"./EventPluginUtils":45,"./EventPropagators":46,"./SyntheticClipboardEvent":110,"./SyntheticDragEvent":112,"./SyntheticEvent":113,"./SyntheticFocusEvent":114,"./SyntheticKeyboardEvent":116,"./SyntheticMouseEvent":117,"./SyntheticTouchEvent":118,"./SyntheticUIEvent":119,"./SyntheticWheelEvent":120,"./getEventCharCode":141,"./invariant":153,"./keyOf":160,"./warning":172,"oMfpAn":6}],110:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = {
  clipboardData: function(event) {
    return (
      'clipboardData' in event ?
        event.clipboardData :
        window.clipboardData
    );
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;


},{"./SyntheticEvent":113}],111:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticCompositionEvent(
  dispatchConfig,
  dispatchMarker,
  nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(
  SyntheticCompositionEvent,
  CompositionEventInterface
);

module.exports = SyntheticCompositionEvent;


},{"./SyntheticEvent":113}],112:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticMouseEvent = require("./SyntheticMouseEvent");

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

module.exports = SyntheticDragEvent;

},{"./SyntheticMouseEvent":117}],113:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */

"use strict";

var PooledClass = require("./PooledClass");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");
var getEventTarget = require("./getEventTarget");

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  target: getEventTarget,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function(event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */
function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      this[propName] = nativeEvent[propName];
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ?
    nativeEvent.defaultPrevented :
    nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
}

assign(SyntheticEvent.prototype, {

  preventDefault: function() {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function() {
    var event = this.nativeEvent;
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function() {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function() {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      this[propName] = null;
    }
    this.dispatchConfig = null;
    this.dispatchMarker = null;
    this.nativeEvent = null;
  }

});

SyntheticEvent.Interface = EventInterface;

/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function(Class, Interface) {
  var Super = this;

  var prototype = Object.create(Super.prototype);
  assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);

module.exports = SyntheticEvent;

},{"./Object.assign":52,"./PooledClass":53,"./emptyFunction":134,"./getEventTarget":144}],114:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

module.exports = SyntheticFocusEvent;

},{"./SyntheticUIEvent":119}],115:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticInputEvent(
  dispatchConfig,
  dispatchMarker,
  nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(
  SyntheticInputEvent,
  InputEventInterface
);

module.exports = SyntheticInputEvent;


},{"./SyntheticEvent":113}],116:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

var getEventCharCode = require("./getEventCharCode");
var getEventKey = require("./getEventKey");
var getEventModifierState = require("./getEventModifierState");

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var KeyboardEventInterface = {
  key: getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function(event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function(event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function(event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

module.exports = SyntheticKeyboardEvent;

},{"./SyntheticUIEvent":119,"./getEventCharCode":141,"./getEventKey":142,"./getEventModifierState":143}],117:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");
var ViewportMetrics = require("./ViewportMetrics");

var getEventModifierState = require("./getEventModifierState");

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: getEventModifierState,
  button: function(event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;
    }
    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;
  },
  buttons: null,
  relatedTarget: function(event) {
    return event.relatedTarget || (
      event.fromElement === event.srcElement ?
        event.toElement :
        event.fromElement
    );
  },
  // "Proprietary" Interface.
  pageX: function(event) {
    return 'pageX' in event ?
      event.pageX :
      event.clientX + ViewportMetrics.currentScrollLeft;
  },
  pageY: function(event) {
    return 'pageY' in event ?
      event.pageY :
      event.clientY + ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

module.exports = SyntheticMouseEvent;

},{"./SyntheticUIEvent":119,"./ViewportMetrics":122,"./getEventModifierState":143}],118:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

var getEventModifierState = require("./getEventModifierState");

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

module.exports = SyntheticTouchEvent;

},{"./SyntheticUIEvent":119,"./getEventModifierState":143}],119:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

var getEventTarget = require("./getEventTarget");

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function(event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target != null && target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function(event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;

},{"./SyntheticEvent":113,"./getEventTarget":144}],120:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticMouseEvent = require("./SyntheticMouseEvent");

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var WheelEventInterface = {
  deltaX: function(event) {
    return (
      'deltaX' in event ? event.deltaX :
      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
      'wheelDeltaX' in event ? -event.wheelDeltaX : 0
    );
  },
  deltaY: function(event) {
    return (
      'deltaY' in event ? event.deltaY :
      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
      'wheelDeltaY' in event ? -event.wheelDeltaY :
      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
      'wheelDelta' in event ? -event.wheelDelta : 0
    );
  },
  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

module.exports = SyntheticWheelEvent;

},{"./SyntheticMouseEvent":117}],121:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */

"use strict";

var invariant = require("./invariant");

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM upates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var Mixin = {
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function() {
    this.transactionWrappers = this.getTransactionWrappers();
    if (!this.wrapperInitData) {
      this.wrapperInitData = [];
    } else {
      this.wrapperInitData.length = 0;
    }
    this._isInTransaction = false;
  },

  _isInTransaction: false,

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null,

  isInTransaction: function() {
    return !!this._isInTransaction;
  },

  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} args... Arguments to pass to the method (optional).
   *                           Helps prevent need to bind in many cases.
   * @return Return value from `method`.
   */
  perform: function(method, scope, a, b, c, d, e, f) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !this.isInTransaction(),
      'Transaction.perform(...): Cannot initialize a transaction when there ' +
      'is already an outstanding transaction.'
    ) : invariant(!this.isInTransaction()));
    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;
    } finally {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);
          } catch (err) {
          }
        } else {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return ret;
  },

  initializeAll: function(startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ?
          wrapper.initialize.call(this) :
          null;
      } finally {
        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);
          } catch (err) {
          }
        }
      }
    }
  },

  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function(startIndex) {
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isInTransaction(),
      'Transaction.closeAll(): Cannot close transaction when none are open.'
    ) : invariant(this.isInTransaction()));
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== Transaction.OBSERVED_ERROR) {
          wrapper.close && wrapper.close.call(this, initData);
        }
        errorThrown = false;
      } finally {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);
          } catch (e) {
          }
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};

var Transaction = {

  Mixin: Mixin,

  /**
   * Token to look for to determine if an error occured.
   */
  OBSERVED_ERROR: {}

};

module.exports = Transaction;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],122:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */

"use strict";

var getUnboundedScrollPosition = require("./getUnboundedScrollPosition");

var ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function() {
    var scrollPosition = getUnboundedScrollPosition(window);
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

module.exports = ViewportMetrics;

},{"./getUnboundedScrollPosition":149}],123:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */

"use strict";

var invariant = require("./invariant");

/**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  ("production" !== process.env.NODE_ENV ? invariant(
    next != null,
    'accumulateInto(...): Accumulated items must not be null or undefined.'
  ) : invariant(next != null));
  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);

  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;
  }

  if (currentIsArray) {
    current.push(next);
    return current;
  }

  if (nextIsArray) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],124:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */

/* jslint bitwise:true */

"use strict";

var MOD = 65521;

// This is a clean-room implementation of adler32 designed for detecting
// if markup is not what we expect it to be. It does not need to be
// cryptographically strong, only reasonably good at detecting if markup
// generated on the server is different than that on the client.
function adler32(data) {
  var a = 1;
  var b = 0;
  for (var i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % MOD;
    b = (b + a) % MOD;
  }
  return a | (b << 16);
}

module.exports = adler32;

},{}],125:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function(_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

},{}],126:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */

"use strict";

var camelize = require("./camelize");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

},{"./camelize":125}],127:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @providesModule cloneWithProps
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactPropTransferer = require("./ReactPropTransferer");

var keyOf = require("./keyOf");
var warning = require("./warning");

var CHILDREN_PROP = keyOf({children: null});

/**
 * Sometimes you want to change the props of a child passed to you. Usually
 * this is to add a CSS class.
 *
 * @param {object} child child component you'd like to clone
 * @param {object} props props you'd like to modify. They will be merged
 * as if you used `transferPropsTo()`.
 * @return {object} a clone of child with props merged in.
 */
function cloneWithProps(child, props) {
  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      !child.ref,
      'You are calling cloneWithProps() on a child with a ref. This is ' +
      'dangerous because you\'re creating a new child which will not be ' +
      'added as a ref to its parent.'
    ) : null);
  }

  var newProps = ReactPropTransferer.mergeProps(props, child.props);

  // Use `child.props.children` if it is provided.
  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
      child.props.hasOwnProperty(CHILDREN_PROP)) {
    newProps.children = child.props.children;
  }

  // The current API doesn't retain _owner and _context, which is why this
  // doesn't use ReactElement.cloneAndReplaceProps.
  return ReactElement.createElement(child.type, newProps);
}

module.exports = cloneWithProps;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./ReactPropTransferer":95,"./keyOf":160,"./warning":172,"oMfpAn":6}],128:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */

var isTextNode = require("./isTextNode");

/*jslint bitwise:true */

/**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if (outerNode.contains) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

},{"./isTextNode":157}],129:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFrom
 * @typechecks
 */

var toArray = require("./toArray");

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function hasArrayNature(obj) {
  return (
    // not null/false
    !!obj &&
    // arrays are objects, NodeLists are functions in Safari
    (typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    ('length' in obj) &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    (typeof obj.nodeType != 'number') &&
    (
      // a real array
      (// HTMLCollection/NodeList
      (Array.isArray(obj) ||
      // arguments
      ('callee' in obj) || 'item' in obj))
    )
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFrom = require('createArrayFrom');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFrom(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function createArrayFrom(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFrom;

},{"./toArray":170}],130:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createFullPageComponent
 * @typechecks
 */

"use strict";

// Defeat circular references by requiring this directly.
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

/**
 * Create a component that will throw an exception when unmounted.
 *
 * Components like <html> <head> and <body> can't be removed or added
 * easily in a cross-browser way, however it's valuable to be able to
 * take advantage of React's reconciliation for styling and <title>
 * management. So we just document it and throw in dangerous cases.
 *
 * @param {string} tag The tag to wrap
 * @return {function} convenience constructor of new component
 */
function createFullPageComponent(tag) {
  var elementFactory = ReactElement.createFactory(tag);

  var FullPageComponent = ReactCompositeComponent.createClass({
    displayName: 'ReactFullPageComponent' + tag,

    componentWillUnmount: function() {
      ("production" !== process.env.NODE_ENV ? invariant(
        false,
        '%s tried to unmount. Because of cross-browser quirks it is ' +
        'impossible to unmount some top-level components (eg <html>, <head>, ' +
        'and <body>) reliably and efficiently. To fix this, have a single ' +
        'top-level component that never unmounts render these elements.',
        this.constructor.displayName
      ) : invariant(false));
    },

    render: function() {
      return elementFactory(this.props);
    }
  });

  return FullPageComponent;
}

module.exports = createFullPageComponent;

}).call(this,require("oMfpAn"))
},{"./ReactCompositeComponent":60,"./ReactElement":78,"./invariant":153,"oMfpAn":6}],131:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */

/*jslint evil: true, sub: true */

var ExecutionEnvironment = require("./ExecutionEnvironment");

var createArrayFrom = require("./createArrayFrom");
var getMarkupWrap = require("./getMarkupWrap");
var invariant = require("./invariant");

/**
 * Dummy container used to render all markup.
 */
var dummyNode =
  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function getNodeName(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode;
  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
  var nodeName = getNodeName(markup);

  var wrap = nodeName && getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    ("production" !== process.env.NODE_ENV ? invariant(
      handleScript,
      'createNodesFromMarkup(...): Unexpected <script> element rendered.'
    ) : invariant(handleScript));
    createArrayFrom(scripts).forEach(handleScript);
  }

  var nodes = createArrayFrom(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

module.exports = createNodesFromMarkup;

}).call(this,require("oMfpAn"))
},{"./ExecutionEnvironment":47,"./createArrayFrom":129,"./getMarkupWrap":145,"./invariant":153,"oMfpAn":6}],132:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */

"use strict";

var CSSProperty = require("./CSSProperty");

var isUnitlessNumber = CSSProperty.isUnitlessNumber;

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 ||
      isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    value = value.trim();
  }
  return value + 'px';
}

module.exports = dangerousStyleValue;

},{"./CSSProperty":29}],133:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule deprecated
 */

var assign = require("./Object.assign");
var warning = require("./warning");

/**
 * This will log a single deprecation notice per function and forward the call
 * on to the new API.
 *
 * @param {string} namespace The namespace of the call, eg 'React'
 * @param {string} oldName The old function name, eg 'renderComponent'
 * @param {string} newName The new function name, eg 'render'
 * @param {*} ctx The context this forwarded call should run in
 * @param {function} fn The function to forward on to
 * @return {*} Will be the value as returned from `fn`
 */
function deprecated(namespace, oldName, newName, ctx, fn) {
  var warned = false;
  if ("production" !== process.env.NODE_ENV) {
    var newFn = function() {
      ("production" !== process.env.NODE_ENV ? warning(
        warned,
        (namespace + "." + oldName + " will be deprecated in a future version. ") +
        ("Use " + namespace + "." + newName + " instead.")
      ) : null);
      warned = true;
      return fn.apply(ctx, arguments);
    };
    newFn.displayName = (namespace + "_" + oldName);
    // We need to make sure all properties of the original fn are copied over.
    // In particular, this is needed to support PropTypes
    return assign(newFn, fn);
  }

  return fn;
}

module.exports = deprecated;

}).call(this,require("oMfpAn"))
},{"./Object.assign":52,"./warning":172,"oMfpAn":6}],134:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],135:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */

"use strict";

var emptyObject = {};

if ("production" !== process.env.NODE_ENV) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

}).call(this,require("oMfpAn"))
},{"oMfpAn":6}],136:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextForBrowser
 * @typechecks static-only
 */

"use strict";

var ESCAPE_LOOKUP = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  "\"": "&quot;",
  "'": "&#x27;"
};

var ESCAPE_REGEX = /[&><"']/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  return ('' + text).replace(ESCAPE_REGEX, escaper);
}

module.exports = escapeTextForBrowser;

},{}],137:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */

"use strict";

var ReactTextComponent = require("./ReactTextComponent");

var traverseAllChildren = require("./traverseAllChildren");
var warning = require("./warning");

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */
function flattenSingleChildIntoContext(traverseContext, child, name) {
  // We found a component instance.
  var result = traverseContext;
  var keyUnique = !result.hasOwnProperty(name);
  ("production" !== process.env.NODE_ENV ? warning(
    keyUnique,
    'flattenChildren(...): Encountered two children with the same key, ' +
    '`%s`. Child keys must be unique; when two children share a key, only ' +
    'the first child will be used.',
    name
  ) : null);
  if (keyUnique && child != null) {
    var type = typeof child;
    var normalizedValue;

    if (type === 'string') {
      normalizedValue = ReactTextComponent(child);
    } else if (type === 'number') {
      normalizedValue = ReactTextComponent('' + child);
    } else {
      normalizedValue = child;
    }

    result[name] = normalizedValue;
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = {};
  traverseAllChildren(children, flattenSingleChildIntoContext, result);
  return result;
}

module.exports = flattenChildren;

}).call(this,require("oMfpAn"))
},{"./ReactTextComponent":104,"./traverseAllChildren":171,"./warning":172,"oMfpAn":6}],138:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */

"use strict";

/**
 * @param {DOMElement} node input/textarea to focus
 */
function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch(e) {
  }
}

module.exports = focusNode;

},{}],139:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */

"use strict";

/**
 * @param {array} an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
var forEachAccumulated = function(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
};

module.exports = forEachAccumulated;

},{}],140:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document body is not yet defined.
 */
function getActiveElement() /*?DOMElement*/ {
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

module.exports = getActiveElement;

},{}],141:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */

"use strict";

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

module.exports = getEventCharCode;

},{}],142:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */

"use strict";

var getEventCharCode = require("./getEventCharCode");

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = {
  'Esc': 'Escape',
  'Spacebar': ' ',
  'Left': 'ArrowLeft',
  'Up': 'ArrowUp',
  'Right': 'ArrowRight',
  'Down': 'ArrowDown',
  'Del': 'Delete',
  'Win': 'OS',
  'Menu': 'ContextMenu',
  'Apps': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'MozPrintableKey': 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

module.exports = getEventKey;

},{"./getEventCharCode":141}],143:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */

"use strict";

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = {
  'Alt': 'altKey',
  'Control': 'ctrlKey',
  'Meta': 'metaKey',
  'Shift': 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  /*jshint validthis:true */
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}

module.exports = getEventModifierState;

},{}],144:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */

"use strict";

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;

},{}],145:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */

var ExecutionEnvironment = require("./ExecutionEnvironment");

var invariant = require("./invariant");

/**
 * Dummy container used to detect which wraps are necessary.
 */
var dummyNode =
  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */
var shouldWrap = {
  // Force wrapping for SVG elements because if they get created inside a <div>,
  // they will be initialized in the wrong namespace (and will not display).
  'circle': true,
  'defs': true,
  'ellipse': true,
  'g': true,
  'line': true,
  'linearGradient': true,
  'path': true,
  'polygon': true,
  'polyline': true,
  'radialGradient': true,
  'rect': true,
  'stop': true,
  'text': true
};

var selectWrap = [1, '<select multiple="true">', '</select>'];
var tableWrap = [1, '<table>', '</table>'];
var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var svgWrap = [1, '<svg>', '</svg>'];

var markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': selectWrap,
  'option': selectWrap,

  'caption': tableWrap,
  'colgroup': tableWrap,
  'tbody': tableWrap,
  'tfoot': tableWrap,
  'thead': tableWrap,

  'td': trWrap,
  'th': trWrap,

  'circle': svgWrap,
  'defs': svgWrap,
  'ellipse': svgWrap,
  'g': svgWrap,
  'line': svgWrap,
  'linearGradient': svgWrap,
  'path': svgWrap,
  'polygon': svgWrap,
  'polyline': svgWrap,
  'radialGradient': svgWrap,
  'rect': svgWrap,
  'stop': svgWrap,
  'text': svgWrap
};

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function getMarkupWrap(nodeName) {
  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
  if (!markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      dummyNode.innerHTML = '<link />';
    } else {
      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    shouldWrap[nodeName] = !dummyNode.firstChild;
  }
  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
}


module.exports = getMarkupWrap;

}).call(this,require("oMfpAn"))
},{"./ExecutionEnvironment":47,"./invariant":153,"oMfpAn":6}],146:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */

"use strict";

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType == 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

module.exports = getNodeForCharacterOffset;

},{}],147:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getReactRootElementInContainer
 */

"use strict";

var DOC_NODE_TYPE = 9;

/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 *                                           a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === DOC_NODE_TYPE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

module.exports = getReactRootElementInContainer;

},{}],148:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ?
      'textContent' :
      'innerText';
  }
  return contentKey;
}

module.exports = getTextContentAccessor;

},{"./ExecutionEnvironment":47}],149:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */

"use strict";

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
function getUnboundedScrollPosition(scrollable) {
  if (scrollable === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;

},{}],150:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

},{}],151:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */

"use strict";

var hyphenate = require("./hyphenate");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{"./hyphenate":150}],152:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */

"use strict";

var warning = require("./warning");

var ReactElement = require("./ReactElement");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactNativeComponent = require("./ReactNativeComponent");
var ReactEmptyComponent = require("./ReactEmptyComponent");

/**
 * Given an `element` create an instance that will actually be mounted.
 *
 * @param {object} element
 * @param {*} parentCompositeType The composite type that resolved this.
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function instantiateReactComponent(element, parentCompositeType) {
  var instance;

  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      element && (typeof element.type === 'function' ||
                     typeof element.type === 'string'),
      'Only functions or strings can be mounted as React components.'
    ) : null);

    // Resolve mock instances
    if (element.type._mockedReactClassConstructor) {
      // If this is a mocked class, we treat the legacy factory as if it was the
      // class constructor for future proofing unit tests. Because this might
      // be mocked as a legacy factory, we ignore any warnings triggerd by
      // this temporary hack.
      ReactLegacyElement._isLegacyCallWarningEnabled = false;
      try {
        instance = new element.type._mockedReactClassConstructor(
          element.props
        );
      } finally {
        ReactLegacyElement._isLegacyCallWarningEnabled = true;
      }

      // If the mock implementation was a legacy factory, then it returns a
      // element. We need to turn this into a real component instance.
      if (ReactElement.isValidElement(instance)) {
        instance = new instance.type(instance.props);
      }

      var render = instance.render;
      if (!render) {
        // For auto-mocked factories, the prototype isn't shimmed and therefore
        // there is no render function on the instance. We replace the whole
        // component with an empty component instance instead.
        element = ReactEmptyComponent.getEmptyComponent();
      } else {
        if (render._isMockFunction && !render._getMockImplementation()) {
          // Auto-mocked components may have a prototype with a mocked render
          // function. For those, we'll need to mock the result of the render
          // since we consider undefined to be invalid results from render.
          render.mockImplementation(
            ReactEmptyComponent.getEmptyComponent
          );
        }
        instance.construct(element);
        return instance;
      }
    }
  }

  // Special case string values
  if (typeof element.type === 'string') {
    instance = ReactNativeComponent.createInstanceForTag(
      element.type,
      element.props,
      parentCompositeType
    );
  } else {
    // Normal case for non-mocks and non-strings
    instance = new element.type(element.props);
  }

  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      typeof instance.construct === 'function' &&
      typeof instance.mountComponent === 'function' &&
      typeof instance.receiveComponent === 'function',
      'Only React Components can be mounted.'
    ) : null);
  }

  // This actually sets up the internal instance. This will become decoupled
  // from the public instance in a future diff.
  instance.construct(element);

  return instance;
}

module.exports = instantiateReactComponent;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./ReactEmptyComponent":80,"./ReactLegacyElement":87,"./ReactNativeComponent":92,"./warning":172,"oMfpAn":6}],153:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require("oMfpAn"))
},{"oMfpAn":6}],154:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;

},{"./ExecutionEnvironment":47}],155:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  return !!(object && (
    typeof Node === 'function' ? object instanceof Node :
      typeof object === 'object' &&
      typeof object.nodeType === 'number' &&
      typeof object.nodeName === 'string'
  ));
}

module.exports = isNode;

},{}],156:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */

"use strict";

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  'color': true,
  'date': true,
  'datetime': true,
  'datetime-local': true,
  'email': true,
  'month': true,
  'number': true,
  'password': true,
  'range': true,
  'search': true,
  'tel': true,
  'text': true,
  'time': true,
  'url': true,
  'week': true
};

function isTextInputElement(elem) {
  return elem && (
    (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type]) ||
    elem.nodeName === 'TEXTAREA'
  );
}

module.exports = isTextInputElement;

},{}],157:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */

var isNode = require("./isNode");

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

},{"./isNode":155}],158:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule joinClasses
 * @typechecks static-only
 */

"use strict";

/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} classes
 * @return {string}
 */
function joinClasses(className/*, ... */) {
  if (!className) {
    className = '';
  }
  var nextClass;
  var argLength = arguments.length;
  if (argLength > 1) {
    for (var ii = 1; ii < argLength; ii++) {
      nextClass = arguments[ii];
      if (nextClass) {
        className = (className ? className + ' ' : '') + nextClass;
      }
    }
  }
  return className;
}

module.exports = joinClasses;

},{}],159:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */

"use strict";

var invariant = require("./invariant");

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  ("production" !== process.env.NODE_ENV ? invariant(
    obj instanceof Object && !Array.isArray(obj),
    'keyMirror(...): Argument must be an object.'
  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],160:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without loosing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
var keyOf = function(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};


module.exports = keyOf;

},{}],161:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;

},{}],162:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */

"use strict";

/**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */
function memoizeStringOnly(callback) {
  var cache = {};
  return function(string) {
    if (cache.hasOwnProperty(string)) {
      return cache[string];
    } else {
      return cache[string] = callback.call(this, string);
    }
  };
}

module.exports = memoizeStringOnly;

},{}],163:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule monitorCodeUse
 */

"use strict";

var invariant = require("./invariant");

/**
 * Provides open-source compatible instrumentation for monitoring certain API
 * uses before we're ready to issue a warning or refactor. It accepts an event
 * name which may only contain the characters [a-z0-9_] and an optional data
 * object with further information.
 */

function monitorCodeUse(eventName, data) {
  ("production" !== process.env.NODE_ENV ? invariant(
    eventName && !/[^a-z0-9_]/.test(eventName),
    'You must provide an eventName using only the characters [a-z0-9_]'
  ) : invariant(eventName && !/[^a-z0-9_]/.test(eventName)));
}

module.exports = monitorCodeUse;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],164:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */
"use strict";

var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */
function onlyChild(children) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(children),
    'onlyChild must be passed a children with exactly one child.'
  ) : invariant(ReactElement.isValidElement(children)));
  return children;
}

module.exports = onlyChild;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./invariant":153,"oMfpAn":6}],165:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance =
    window.performance ||
    window.msPerformance ||
    window.webkitPerformance;
}

module.exports = performance || {};

},{"./ExecutionEnvironment":47}],166:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */

var performance = require("./performance");

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (!performance || !performance.now) {
  performance = Date;
}

var performanceNow = performance.now.bind(performance);

module.exports = performanceNow;

},{"./performance":165}],167:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = function(node, html) {
  node.innerHTML = html;
};

if (ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var testElement = document.createElement('div');
  testElement.innerHTML = ' ';
  if (testElement.innerHTML === '') {
    setInnerHTML = function(node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }

      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (WHITESPACE_TEST.test(html) ||
          html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        node.innerHTML = '\uFEFF' + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
}

module.exports = setInnerHTML;

},{"./ExecutionEnvironment":47}],168:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 */

"use strict";

/**
 * Performs equality by iterating through keys on an object and returning
 * false when any key has values which are not strictly equal between
 * objA and objB. Returns true when the values of all keys are strictly equal.
 *
 * @return {boolean}
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  var key;
  // Test for A's keys different from B.
  for (key in objA) {
    if (objA.hasOwnProperty(key) &&
        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
      return false;
    }
  }
  // Test for B's keys missing from A.
  for (key in objB) {
    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

module.exports = shallowEqual;

},{}],169:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */

"use strict";

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */
function shouldUpdateReactComponent(prevElement, nextElement) {
  if (prevElement && nextElement &&
      prevElement.type === nextElement.type &&
      prevElement.key === nextElement.key &&
      prevElement._owner === nextElement._owner) {
    return true;
  }
  return false;
}

module.exports = shouldUpdateReactComponent;

},{}],170:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */

var invariant = require("./invariant");

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFrom.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function toArray(obj) {
  var length = obj.length;

  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
  // old versions of Safari).
  ("production" !== process.env.NODE_ENV ? invariant(
    !Array.isArray(obj) &&
    (typeof obj === 'object' || typeof obj === 'function'),
    'toArray: Array-like object expected'
  ) : invariant(!Array.isArray(obj) &&
  (typeof obj === 'object' || typeof obj === 'function')));

  ("production" !== process.env.NODE_ENV ? invariant(
    typeof length === 'number',
    'toArray: Object needs a length property'
  ) : invariant(typeof length === 'number'));

  ("production" !== process.env.NODE_ENV ? invariant(
    length === 0 ||
    (length - 1) in obj,
    'toArray: Object should have keys for indices'
  ) : invariant(length === 0 ||
  (length - 1) in obj));

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

module.exports = toArray;

}).call(this,require("oMfpAn"))
},{"./invariant":153,"oMfpAn":6}],171:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");

var invariant = require("./invariant");

var SEPARATOR = ReactInstanceHandles.SEPARATOR;
var SUBSEPARATOR = ':';

/**
 * TODO: Test that:
 * 1. `mapChildren` transforms strings and numbers into `ReactTextComponent`.
 * 2. it('should fail when supplied duplicate key', function() {
 * 3. That a single child and an array with one item have the same key pattern.
 * });
 */

var userProvidedKeyEscaperLookup = {
  '=': '=0',
  '.': '=1',
  ':': '=2'
};

var userProvidedKeyEscapeRegex = /[=.:]/g;

function userProvidedKeyEscaper(match) {
  return userProvidedKeyEscaperLookup[match];
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  if (component && component.key != null) {
    // Explicit key
    return wrapUserProvidedKey(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} key Component key to be escaped.
 * @return {string} An escaped string.
 */
function escapeUserProvidedKey(text) {
  return ('' + text).replace(
    userProvidedKeyEscapeRegex,
    userProvidedKeyEscaper
  );
}

/**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */
function wrapUserProvidedKey(key) {
  return '$' + escapeUserProvidedKey(key);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!number} indexSoFar Number of children encountered until this point.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
var traverseAllChildrenImpl =
  function(children, nameSoFar, indexSoFar, callback, traverseContext) {
    var nextName, nextIndex;
    var subtreeCount = 0;  // Count of children found in the current subtree.
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        nextName = (
          nameSoFar +
          (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
          getComponentKey(child, i)
        );
        nextIndex = indexSoFar + subtreeCount;
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          nextIndex,
          callback,
          traverseContext
        );
      }
    } else {
      var type = typeof children;
      var isOnlyChild = nameSoFar === '';
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows
      var storageName =
        isOnlyChild ? SEPARATOR + getComponentKey(children, 0) : nameSoFar;
      if (children == null || type === 'boolean') {
        // All of the above are perceived as null.
        callback(traverseContext, null, storageName, indexSoFar);
        subtreeCount = 1;
      } else if (type === 'string' || type === 'number' ||
                 ReactElement.isValidElement(children)) {
        callback(traverseContext, children, storageName, indexSoFar);
        subtreeCount = 1;
      } else if (type === 'object') {
        ("production" !== process.env.NODE_ENV ? invariant(
          !children || children.nodeType !== 1,
          'traverseAllChildren(...): Encountered an invalid child; DOM ' +
          'elements are not valid children of React components.'
        ) : invariant(!children || children.nodeType !== 1));
        for (var key in children) {
          if (children.hasOwnProperty(key)) {
            nextName = (
              nameSoFar + (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
              wrapUserProvidedKey(key) + SUBSEPARATOR +
              getComponentKey(children[key], 0)
            );
            nextIndex = indexSoFar + subtreeCount;
            subtreeCount += traverseAllChildrenImpl(
              children[key],
              nextName,
              nextIndex,
              callback,
              traverseContext
            );
          }
        }
      }
    }
    return subtreeCount;
  };

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
}

module.exports = traverseAllChildren;

}).call(this,require("oMfpAn"))
},{"./ReactElement":78,"./ReactInstanceHandles":86,"./invariant":153,"oMfpAn":6}],172:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (!condition) {
      var argIndex = 0;
      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
    }
  };
}

module.exports = warning;

}).call(this,require("oMfpAn"))
},{"./emptyFunction":134,"oMfpAn":6}],173:[function(require,module,exports){
module.exports = require('./lib/React');

},{"./lib/React":54}],174:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

module.exports = {
  PatternPrototype: {
    match: function(url) {
      var bound, captured, i, match, name, value, _i, _len;
      match = this.regex.exec(url);
      if (match == null) {
        return null;
      }
      captured = match.slice(1);
      if (this.isRegex) {
        return captured;
      }
      bound = {};
      for (i = _i = 0, _len = captured.length; _i < _len; i = ++_i) {
        value = captured[i];
        name = this.names[i];
        if (value == null) {
          continue;
        }
        if (name === '_') {
          if (bound._ == null) {
            bound._ = [];
          }
          bound._.push(value);
        } else {
          bound[name] = value;
        }
      }
      return bound;
    }
  },
  newPattern: function(arg, separator) {
    var isRegex, pattern, regexString;
    if (separator == null) {
      separator = '/';
    }
    isRegex = arg instanceof RegExp;
    if (!(('string' === typeof arg) || isRegex)) {
      throw new TypeError('argument must be a regex or a string');
    }
    [':', '*'].forEach(function(forbidden) {
      if (separator === forbidden) {
        throw new Error("separator can't be " + forbidden);
      }
    });
    pattern = Object.create(module.exports.PatternPrototype);
    pattern.isRegex = isRegex;
    pattern.regex = isRegex ? arg : (regexString = module.exports.toRegexString(arg, separator), new RegExp(regexString));
    if (!isRegex) {
      pattern.names = module.exports.getNames(arg, separator);
    }
    return pattern;
  },
  escapeForRegex: function(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  },
  getNames: function(arg, separator) {
    var escapedSeparator, name, names, regex, results;
    if (separator == null) {
      separator = '/';
    }
    if (arg instanceof RegExp) {
      return [];
    }
    escapedSeparator = module.exports.escapeForRegex(separator);
    regex = new RegExp("((:?:[^" + escapedSeparator + "\(\)]+)|(?:[\*]))", 'g');
    names = [];
    results = regex.exec(arg);
    while (results != null) {
      name = results[1].slice(1);
      if (name === '_') {
        throw new TypeError(":_ can't be used as a pattern name in pattern " + arg);
      }
      if (__indexOf.call(names, name) >= 0) {
        throw new TypeError("duplicate pattern name :" + name + " in pattern " + arg);
      }
      names.push(name || '_');
      results = regex.exec(arg);
    }
    return names;
  },
  escapeSeparators: function(string, separator) {
    var escapedSeparator, regex;
    if (separator == null) {
      separator = '/';
    }
    escapedSeparator = module.exports.escapeForRegex(separator);
    regex = new RegExp(escapedSeparator, 'g');
    return string.replace(regex, escapedSeparator);
  },
  toRegexString: function(string, separator) {
    var escapedSeparator, stringWithEscapedSeparators;
    if (separator == null) {
      separator = '/';
    }
    stringWithEscapedSeparators = module.exports.escapeSeparators(string, separator);
    stringWithEscapedSeparators = stringWithEscapedSeparators.replace(/\((.*?)\)/g, '(?:$1)?').replace(/\*/g, '(.*?)');
    escapedSeparator = module.exports.escapeForRegex(separator);
    module.exports.getNames(string, separator).forEach(function(name) {
      return stringWithEscapedSeparators = stringWithEscapedSeparators.replace(':' + name, "([^\\" + separator + "]+)");
    });
    return "^" + stringWithEscapedSeparators + "$";
  }
};

},{}],175:[function(require,module,exports){
(function() {
  var URL, URL_PATTERN, defaults, urllite,
    __hasProp = {}.hasOwnProperty,
    __slice = [].slice;

  URL_PATTERN = /^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/;

  urllite = function(raw, opts) {
    return urllite.URL.parse(raw, opts);
  };

  urllite.URL = URL = (function() {
    function URL(props) {
      var k, v;
      for (k in props) {
        if (!__hasProp.call(props, k)) continue;
        v = props[k];
        this[k] = v;
      }
    }

    URL.parse = function(raw) {
      var m, pathname, protocol;
      m = raw.toString().match(URL_PATTERN);
      pathname = m[8] || '';
      protocol = m[1];
      return urllite._createURL({
        protocol: protocol,
        username: m[3],
        password: m[4],
        hostname: m[6],
        port: m[7],
        pathname: protocol && pathname.charAt(0) !== '/' ? "/" + pathname : pathname,
        search: m[9],
        hash: m[10],
        isSchemeRelative: m[2] != null
      });
    };

    return URL;

  })();

  defaults = {
    protocol: '',
    username: '',
    password: '',
    host: '',
    hostname: '',
    port: '',
    pathname: '',
    search: '',
    hash: '',
    origin: '',
    isSchemeRelative: false
  };

  urllite._createURL = function() {
    var base, bases, k, props, v, _i, _len, _ref, _ref1;
    bases = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    props = {};
    for (_i = 0, _len = bases.length; _i < _len; _i++) {
      base = bases[_i];
      for (k in defaults) {
        if (!__hasProp.call(defaults, k)) continue;
        v = defaults[k];
        props[k] = (_ref = (_ref1 = base[k]) != null ? _ref1 : props[k]) != null ? _ref : v;
      }
    }
    props.host = props.hostname && props.port ? "" + props.hostname + ":" + props.port : props.hostname ? props.hostname : '';
    props.origin = props.protocol ? "" + props.protocol + "//" + props.host : '';
    props.isAbsolutePathRelative = !props.host && props.pathname.charAt(0) === '/';
    props.isPathRelative = !props.host && props.pathname.charAt(0) !== '/';
    props.isRelative = props.isSchemeRelative || props.isAbsolutePathRelative || props.isPathRelative;
    props.isAbsolute = !props.isRelative;
    return new urllite.URL(props);
  };

  module.exports = urllite;

}).call(this);

},{}],176:[function(require,module,exports){
module.exports = require('./lib/ReactWithAddons');

},{"./lib/ReactWithAddons":267}],177:[function(require,module,exports){
module.exports=require(27)
},{"./focusNode":302}],178:[function(require,module,exports){
module.exports=require(28)
},{"./EventConstants":192,"./EventPropagators":197,"./ExecutionEnvironment":198,"./SyntheticInputEvent":277,"./keyOf":324}],179:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSCore
 * @typechecks
 */

var invariant = require("./invariant");

/**
 * The CSSCore module specifies the API (and implements most of the methods)
 * that should be used when dealing with the display of elements (via their
 * CSS classes and visibility on screen. It is an API focused on mutating the
 * display and not reading it as no logical state should be encoded in the
 * display of elements.
 */

var CSSCore = {

  /**
   * Adds the class passed in to the element if it doesn't already have it.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
  addClass: function(element, className) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !/\s/.test(className),
      'CSSCore.addClass takes only a single class name. "%s" contains ' +
      'multiple classes.', className
    ) : invariant(!/\s/.test(className)));

    if (className) {
      if (element.classList) {
        element.classList.add(className);
      } else if (!CSSCore.hasClass(element, className)) {
        element.className = element.className + ' ' + className;
      }
    }
    return element;
  },

  /**
   * Removes the class passed in from the element
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
  removeClass: function(element, className) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !/\s/.test(className),
      'CSSCore.removeClass takes only a single class name. "%s" contains ' +
      'multiple classes.', className
    ) : invariant(!/\s/.test(className)));

    if (className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (CSSCore.hasClass(element, className)) {
        element.className = element.className
          .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ') // multiple spaces to one
          .replace(/^\s*|\s*$/g, ''); // trim the ends
      }
    }
    return element;
  },

  /**
   * Helper to add or remove a class from an element based on a condition.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @param {*} bool condition to whether to add or remove the class
   * @return {DOMElement} the element passed in
   */
  conditionClass: function(element, className, bool) {
    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
  },

  /**
   * Tests whether the element has the class specified.
   *
   * @param {DOMNode|DOMWindow} element the element to set the class on
   * @param {string} className the CSS className
   * @return {boolean} true if the element has the class, false if not
   */
  hasClass: function(element, className) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !/\s/.test(className),
      'CSS.hasClass takes only a single class name.'
    ) : invariant(!/\s/.test(className)));
    if (element.classList) {
      return !!className && element.classList.contains(className);
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

};

module.exports = CSSCore;

}).call(this,require("oMfpAn"))
},{"./invariant":317,"oMfpAn":6}],180:[function(require,module,exports){
module.exports=require(29)
},{}],181:[function(require,module,exports){
module.exports=require(30)
},{"./CSSProperty":180,"./ExecutionEnvironment":198,"./camelizeStyleName":288,"./dangerousStyleValue":296,"./hyphenateStyleName":315,"./memoizeStringOnly":326,"./warning":338,"oMfpAn":6}],182:[function(require,module,exports){
module.exports=require(31)
},{"./Object.assign":204,"./PooledClass":205,"./invariant":317,"oMfpAn":6}],183:[function(require,module,exports){
module.exports=require(32)
},{"./EventConstants":192,"./EventPluginHub":194,"./EventPropagators":197,"./ExecutionEnvironment":198,"./ReactUpdates":266,"./SyntheticEvent":275,"./isEventSupported":318,"./isTextInputElement":320,"./keyOf":324}],184:[function(require,module,exports){
module.exports=require(33)
},{}],185:[function(require,module,exports){
module.exports=require(34)
},{"./EventConstants":192,"./EventPropagators":197,"./ExecutionEnvironment":198,"./ReactInputSelection":240,"./SyntheticCompositionEvent":273,"./getTextContentAccessor":312,"./keyOf":324}],186:[function(require,module,exports){
module.exports=require(35)
},{"./Danger":189,"./ReactMultiChildUpdateTypes":247,"./getTextContentAccessor":312,"./invariant":317,"oMfpAn":6}],187:[function(require,module,exports){
module.exports=require(36)
},{"./invariant":317,"oMfpAn":6}],188:[function(require,module,exports){
module.exports=require(37)
},{"./DOMProperty":187,"./escapeTextForBrowser":300,"./memoizeStringOnly":326,"./warning":338,"oMfpAn":6}],189:[function(require,module,exports){
module.exports=require(38)
},{"./ExecutionEnvironment":198,"./createNodesFromMarkup":294,"./emptyFunction":298,"./getMarkupWrap":309,"./invariant":317,"oMfpAn":6}],190:[function(require,module,exports){
module.exports=require(39)
},{"./keyOf":324}],191:[function(require,module,exports){
module.exports=require(40)
},{"./EventConstants":192,"./EventPropagators":197,"./ReactMount":245,"./SyntheticMouseEvent":279,"./keyOf":324}],192:[function(require,module,exports){
module.exports=require(41)
},{"./keyMirror":323}],193:[function(require,module,exports){
module.exports=require(42)
},{"./emptyFunction":298,"oMfpAn":6}],194:[function(require,module,exports){
module.exports=require(43)
},{"./EventPluginRegistry":195,"./EventPluginUtils":196,"./accumulateInto":285,"./forEachAccumulated":303,"./invariant":317,"oMfpAn":6}],195:[function(require,module,exports){
module.exports=require(44)
},{"./invariant":317,"oMfpAn":6}],196:[function(require,module,exports){
module.exports=require(45)
},{"./EventConstants":192,"./invariant":317,"oMfpAn":6}],197:[function(require,module,exports){
module.exports=require(46)
},{"./EventConstants":192,"./EventPluginHub":194,"./accumulateInto":285,"./forEachAccumulated":303,"oMfpAn":6}],198:[function(require,module,exports){
module.exports=require(47)
},{}],199:[function(require,module,exports){
module.exports=require(48)
},{"./DOMProperty":187,"./ExecutionEnvironment":198}],200:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedStateMixin
 * @typechecks static-only
 */

"use strict";

var ReactLink = require("./ReactLink");
var ReactStateSetters = require("./ReactStateSetters");

/**
 * A simple mixin around ReactLink.forState().
 */
var LinkedStateMixin = {
  /**
   * Create a ReactLink that's linked to part of this component's state. The
   * ReactLink will have the current value of this.state[key] and will call
   * setState() when a change is requested.
   *
   * @param {string} key state key to update. Note: you may want to use keyOf()
   * if you're using Google Closure Compiler advanced mode.
   * @return {ReactLink} ReactLink instance linking to the state.
   */
  linkState: function(key) {
    return new ReactLink(
      this.state[key],
      ReactStateSetters.createStateKeySetter(this, key)
    );
  }
};

module.exports = LinkedStateMixin;

},{"./ReactLink":243,"./ReactStateSetters":260}],201:[function(require,module,exports){
module.exports=require(49)
},{"./ReactPropTypes":254,"./invariant":317,"oMfpAn":6}],202:[function(require,module,exports){
module.exports=require(50)
},{"./ReactBrowserEventEmitter":208,"./accumulateInto":285,"./forEachAccumulated":303,"./invariant":317,"oMfpAn":6}],203:[function(require,module,exports){
module.exports=require(51)
},{"./EventConstants":192,"./emptyFunction":298}],204:[function(require,module,exports){
module.exports=require(52)
},{}],205:[function(require,module,exports){
module.exports=require(53)
},{"./invariant":317,"oMfpAn":6}],206:[function(require,module,exports){
module.exports=require(54)
},{"./DOMPropertyOperations":188,"./EventPluginUtils":196,"./ExecutionEnvironment":198,"./Object.assign":204,"./ReactChildren":211,"./ReactComponent":212,"./ReactCompositeComponent":215,"./ReactContext":216,"./ReactCurrentOwner":217,"./ReactDOM":218,"./ReactDOMComponent":220,"./ReactDefaultInjection":230,"./ReactElement":233,"./ReactElementValidator":234,"./ReactInstanceHandles":241,"./ReactLegacyElement":242,"./ReactMount":245,"./ReactMultiChild":246,"./ReactPerf":250,"./ReactPropTypes":254,"./ReactServerRendering":258,"./ReactTextComponent":262,"./deprecated":297,"./onlyChild":329,"oMfpAn":6}],207:[function(require,module,exports){
module.exports=require(55)
},{"./ReactEmptyComponent":235,"./ReactMount":245,"./invariant":317,"oMfpAn":6}],208:[function(require,module,exports){
module.exports=require(56)
},{"./EventConstants":192,"./EventPluginHub":194,"./EventPluginRegistry":195,"./Object.assign":204,"./ReactEventEmitterMixin":237,"./ViewportMetrics":284,"./isEventSupported":318}],209:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroup
 */

"use strict";

var React = require("./React");

var assign = require("./Object.assign");

var ReactTransitionGroup = React.createFactory(
  require("./ReactTransitionGroup")
);
var ReactCSSTransitionGroupChild = React.createFactory(
  require("./ReactCSSTransitionGroupChild")
);

var ReactCSSTransitionGroup = React.createClass({
  displayName: 'ReactCSSTransitionGroup',

  propTypes: {
    transitionName: React.PropTypes.string.isRequired,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      transitionEnter: true,
      transitionLeave: true
    };
  },

  _wrapChild: function(child) {
    // We need to provide this childFactory so that
    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
    // leave while it is leaving.
    return ReactCSSTransitionGroupChild(
      {
        name: this.props.transitionName,
        enter: this.props.transitionEnter,
        leave: this.props.transitionLeave
      },
      child
    );
  },

  render: function() {
    return (
      ReactTransitionGroup(
        assign({}, this.props, {childFactory: this._wrapChild})
      )
    );
  }
});

module.exports = ReactCSSTransitionGroup;

},{"./Object.assign":204,"./React":206,"./ReactCSSTransitionGroupChild":210,"./ReactTransitionGroup":265}],210:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroupChild
 */

"use strict";

var React = require("./React");

var CSSCore = require("./CSSCore");
var ReactTransitionEvents = require("./ReactTransitionEvents");

var onlyChild = require("./onlyChild");

// We don't remove the element from the DOM until we receive an animationend or
// transitionend event. If the user screws up and forgets to add an animation
// their node will be stuck in the DOM forever, so we detect if an animation
// does not start and if it doesn't, we just call the end listener immediately.
var TICK = 17;
var NO_EVENT_TIMEOUT = 5000;

var noEventListener = null;


if ("production" !== process.env.NODE_ENV) {
  noEventListener = function() {
    console.warn(
      'transition(): tried to perform an animation without ' +
      'an animationend or transitionend event after timeout (' +
      NO_EVENT_TIMEOUT + 'ms). You should either disable this ' +
      'transition in JS or add a CSS animation/transition.'
    );
  };
}

var ReactCSSTransitionGroupChild = React.createClass({
  displayName: 'ReactCSSTransitionGroupChild',

  transition: function(animationType, finishCallback) {
    var node = this.getDOMNode();
    var className = this.props.name + '-' + animationType;
    var activeClassName = className + '-active';
    var noEventTimeout = null;

    var endListener = function(e) {
      if (e && e.target !== node) {
        return;
      }
      if ("production" !== process.env.NODE_ENV) {
        clearTimeout(noEventTimeout);
      }

      CSSCore.removeClass(node, className);
      CSSCore.removeClass(node, activeClassName);

      ReactTransitionEvents.removeEndEventListener(node, endListener);

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      finishCallback && finishCallback();
    };

    ReactTransitionEvents.addEndEventListener(node, endListener);

    CSSCore.addClass(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClass(activeClassName);

    if ("production" !== process.env.NODE_ENV) {
      noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
    }
  },

  queueClass: function(className) {
    this.classNameQueue.push(className);

    if (!this.timeout) {
      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
    }
  },

  flushClassNameQueue: function() {
    if (this.isMounted()) {
      this.classNameQueue.forEach(
        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
      );
    }
    this.classNameQueue.length = 0;
    this.timeout = null;
  },

  componentWillMount: function() {
    this.classNameQueue = [];
  },

  componentWillUnmount: function() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },

  componentWillEnter: function(done) {
    if (this.props.enter) {
      this.transition('enter', done);
    } else {
      done();
    }
  },

  componentWillLeave: function(done) {
    if (this.props.leave) {
      this.transition('leave', done);
    } else {
      done();
    }
  },

  render: function() {
    return onlyChild(this.props.children);
  }
});

module.exports = ReactCSSTransitionGroupChild;

}).call(this,require("oMfpAn"))
},{"./CSSCore":179,"./React":206,"./ReactTransitionEvents":264,"./onlyChild":329,"oMfpAn":6}],211:[function(require,module,exports){
module.exports=require(57)
},{"./PooledClass":205,"./traverseAllChildren":336,"./warning":338,"oMfpAn":6}],212:[function(require,module,exports){
module.exports=require(58)
},{"./Object.assign":204,"./ReactElement":233,"./ReactOwner":249,"./ReactUpdates":266,"./invariant":317,"./keyMirror":323,"oMfpAn":6}],213:[function(require,module,exports){
module.exports=require(59)
},{"./ReactDOMIDOperations":222,"./ReactMarkupChecksum":244,"./ReactMount":245,"./ReactPerf":250,"./ReactReconcileTransaction":256,"./getReactRootElementInContainer":311,"./invariant":317,"./setInnerHTML":332,"oMfpAn":6}],214:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule ReactComponentWithPureRenderMixin
*/

"use strict";

var shallowEqual = require("./shallowEqual");

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this Mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

},{"./shallowEqual":333}],215:[function(require,module,exports){
module.exports=require(60)
},{"./Object.assign":204,"./ReactComponent":212,"./ReactContext":216,"./ReactCurrentOwner":217,"./ReactElement":233,"./ReactElementValidator":234,"./ReactEmptyComponent":235,"./ReactErrorUtils":236,"./ReactLegacyElement":242,"./ReactOwner":249,"./ReactPerf":250,"./ReactPropTransferer":251,"./ReactPropTypeLocationNames":252,"./ReactPropTypeLocations":253,"./ReactUpdates":266,"./instantiateReactComponent":316,"./invariant":317,"./keyMirror":323,"./keyOf":324,"./mapObject":325,"./monitorCodeUse":328,"./shouldUpdateReactComponent":334,"./warning":338,"oMfpAn":6}],216:[function(require,module,exports){
module.exports=require(61)
},{"./Object.assign":204}],217:[function(require,module,exports){
module.exports=require(62)
},{}],218:[function(require,module,exports){
module.exports=require(63)
},{"./ReactElement":233,"./ReactElementValidator":234,"./ReactLegacyElement":242,"./mapObject":325,"oMfpAn":6}],219:[function(require,module,exports){
module.exports=require(64)
},{"./AutoFocusMixin":177,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233,"./keyMirror":323}],220:[function(require,module,exports){
module.exports=require(65)
},{"./CSSPropertyOperations":181,"./DOMProperty":187,"./DOMPropertyOperations":188,"./Object.assign":204,"./ReactBrowserComponentMixin":207,"./ReactBrowserEventEmitter":208,"./ReactComponent":212,"./ReactMount":245,"./ReactMultiChild":246,"./ReactPerf":250,"./escapeTextForBrowser":300,"./invariant":317,"./isEventSupported":318,"./keyOf":324,"./monitorCodeUse":328,"oMfpAn":6}],221:[function(require,module,exports){
module.exports=require(66)
},{"./EventConstants":192,"./LocalEventTrapMixin":202,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233}],222:[function(require,module,exports){
module.exports=require(67)
},{"./CSSPropertyOperations":181,"./DOMChildrenOperations":186,"./DOMPropertyOperations":188,"./ReactMount":245,"./ReactPerf":250,"./invariant":317,"./setInnerHTML":332,"oMfpAn":6}],223:[function(require,module,exports){
module.exports=require(68)
},{"./EventConstants":192,"./LocalEventTrapMixin":202,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233}],224:[function(require,module,exports){
module.exports=require(69)
},{"./AutoFocusMixin":177,"./DOMPropertyOperations":188,"./LinkedValueUtils":201,"./Object.assign":204,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233,"./ReactMount":245,"./ReactUpdates":266,"./invariant":317,"oMfpAn":6}],225:[function(require,module,exports){
module.exports=require(70)
},{"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233,"./warning":338,"oMfpAn":6}],226:[function(require,module,exports){
module.exports=require(71)
},{"./AutoFocusMixin":177,"./LinkedValueUtils":201,"./Object.assign":204,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233,"./ReactUpdates":266}],227:[function(require,module,exports){
module.exports=require(72)
},{"./ExecutionEnvironment":198,"./getNodeForCharacterOffset":310,"./getTextContentAccessor":312}],228:[function(require,module,exports){
module.exports=require(73)
},{"./AutoFocusMixin":177,"./DOMPropertyOperations":188,"./LinkedValueUtils":201,"./Object.assign":204,"./ReactBrowserComponentMixin":207,"./ReactCompositeComponent":215,"./ReactDOM":218,"./ReactElement":233,"./ReactUpdates":266,"./invariant":317,"./warning":338,"oMfpAn":6}],229:[function(require,module,exports){
module.exports=require(74)
},{"./Object.assign":204,"./ReactUpdates":266,"./Transaction":283,"./emptyFunction":298}],230:[function(require,module,exports){
module.exports=require(75)
},{"./BeforeInputEventPlugin":178,"./ChangeEventPlugin":183,"./ClientReactRootIndex":184,"./CompositionEventPlugin":185,"./DefaultEventPluginOrder":190,"./EnterLeaveEventPlugin":191,"./ExecutionEnvironment":198,"./HTMLDOMPropertyConfig":199,"./MobileSafariClickEventPlugin":203,"./ReactBrowserComponentMixin":207,"./ReactComponentBrowserEnvironment":213,"./ReactDOMButton":219,"./ReactDOMComponent":220,"./ReactDOMForm":221,"./ReactDOMImg":223,"./ReactDOMInput":224,"./ReactDOMOption":225,"./ReactDOMSelect":226,"./ReactDOMTextarea":228,"./ReactDefaultBatchingStrategy":229,"./ReactDefaultPerf":231,"./ReactEventListener":238,"./ReactInjection":239,"./ReactInstanceHandles":241,"./ReactMount":245,"./SVGDOMPropertyConfig":268,"./SelectEventPlugin":269,"./ServerReactRootIndex":270,"./SimpleEventPlugin":271,"./createFullPageComponent":293,"oMfpAn":6}],231:[function(require,module,exports){
module.exports=require(76)
},{"./DOMProperty":187,"./ReactDefaultPerfAnalysis":232,"./ReactMount":245,"./ReactPerf":250,"./performanceNow":331}],232:[function(require,module,exports){
module.exports=require(77)
},{"./Object.assign":204}],233:[function(require,module,exports){
module.exports=require(78)
},{"./ReactContext":216,"./ReactCurrentOwner":217,"./warning":338,"oMfpAn":6}],234:[function(require,module,exports){
module.exports=require(79)
},{"./ReactCurrentOwner":217,"./ReactElement":233,"./ReactPropTypeLocations":253,"./monitorCodeUse":328}],235:[function(require,module,exports){
module.exports=require(80)
},{"./ReactElement":233,"./invariant":317,"oMfpAn":6}],236:[function(require,module,exports){
module.exports=require(81)
},{}],237:[function(require,module,exports){
module.exports=require(82)
},{"./EventPluginHub":194}],238:[function(require,module,exports){
module.exports=require(83)
},{"./EventListener":193,"./ExecutionEnvironment":198,"./Object.assign":204,"./PooledClass":205,"./ReactInstanceHandles":241,"./ReactMount":245,"./ReactUpdates":266,"./getEventTarget":308,"./getUnboundedScrollPosition":313}],239:[function(require,module,exports){
module.exports=require(84)
},{"./DOMProperty":187,"./EventPluginHub":194,"./ReactBrowserEventEmitter":208,"./ReactComponent":212,"./ReactCompositeComponent":215,"./ReactEmptyComponent":235,"./ReactNativeComponent":248,"./ReactPerf":250,"./ReactRootIndex":257,"./ReactUpdates":266}],240:[function(require,module,exports){
module.exports=require(85)
},{"./ReactDOMSelection":227,"./containsNode":290,"./focusNode":302,"./getActiveElement":304}],241:[function(require,module,exports){
module.exports=require(86)
},{"./ReactRootIndex":257,"./invariant":317,"oMfpAn":6}],242:[function(require,module,exports){
module.exports=require(87)
},{"./ReactCurrentOwner":217,"./invariant":317,"./monitorCodeUse":328,"./warning":338,"oMfpAn":6}],243:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLink
 * @typechecks static-only
 */

"use strict";

/**
 * ReactLink encapsulates a common pattern in which a component wants to modify
 * a prop received from its parent. ReactLink allows the parent to pass down a
 * value coupled with a callback that, when invoked, expresses an intent to
 * modify that value. For example:
 *
 * React.createClass({
 *   getInitialState: function() {
 *     return {value: ''};
 *   },
 *   render: function() {
 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
 *     return <input valueLink={valueLink} />;
 *   },
 *   this._handleValueChange: function(newValue) {
 *     this.setState({value: newValue});
 *   }
 * });
 *
 * We have provided some sugary mixins to make the creation and
 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
 */

var React = require("./React");

/**
 * @param {*} value current value of the link
 * @param {function} requestChange callback to request a change
 */
function ReactLink(value, requestChange) {
  this.value = value;
  this.requestChange = requestChange;
}

/**
 * Creates a PropType that enforces the ReactLink API and optionally checks the
 * type of the value being passed inside the link. Example:
 *
 * MyComponent.propTypes = {
 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
 * }
 */
function createLinkTypeChecker(linkType) {
  var shapes = {
    value: typeof linkType === 'undefined' ?
      React.PropTypes.any.isRequired :
      linkType.isRequired,
    requestChange: React.PropTypes.func.isRequired
  };
  return React.PropTypes.shape(shapes);
}

ReactLink.PropTypes = {
  link: createLinkTypeChecker
};

module.exports = ReactLink;

},{"./React":206}],244:[function(require,module,exports){
module.exports=require(88)
},{"./adler32":286}],245:[function(require,module,exports){
module.exports=require(89)
},{"./DOMProperty":187,"./ReactBrowserEventEmitter":208,"./ReactCurrentOwner":217,"./ReactElement":233,"./ReactInstanceHandles":241,"./ReactLegacyElement":242,"./ReactPerf":250,"./containsNode":290,"./deprecated":297,"./getReactRootElementInContainer":311,"./instantiateReactComponent":316,"./invariant":317,"./shouldUpdateReactComponent":334,"./warning":338,"oMfpAn":6}],246:[function(require,module,exports){
module.exports=require(90)
},{"./ReactComponent":212,"./ReactMultiChildUpdateTypes":247,"./flattenChildren":301,"./instantiateReactComponent":316,"./shouldUpdateReactComponent":334}],247:[function(require,module,exports){
module.exports=require(91)
},{"./keyMirror":323}],248:[function(require,module,exports){
module.exports=require(92)
},{"./Object.assign":204,"./invariant":317,"oMfpAn":6}],249:[function(require,module,exports){
module.exports=require(93)
},{"./emptyObject":299,"./invariant":317,"oMfpAn":6}],250:[function(require,module,exports){
module.exports=require(94)
},{"oMfpAn":6}],251:[function(require,module,exports){
module.exports=require(95)
},{"./Object.assign":204,"./emptyFunction":298,"./invariant":317,"./joinClasses":322,"./warning":338,"oMfpAn":6}],252:[function(require,module,exports){
module.exports=require(96)
},{"oMfpAn":6}],253:[function(require,module,exports){
module.exports=require(97)
},{"./keyMirror":323}],254:[function(require,module,exports){
module.exports=require(98)
},{"./ReactElement":233,"./ReactPropTypeLocationNames":252,"./deprecated":297,"./emptyFunction":298}],255:[function(require,module,exports){
module.exports=require(99)
},{"./Object.assign":204,"./PooledClass":205,"./ReactBrowserEventEmitter":208}],256:[function(require,module,exports){
module.exports=require(100)
},{"./CallbackQueue":182,"./Object.assign":204,"./PooledClass":205,"./ReactBrowserEventEmitter":208,"./ReactInputSelection":240,"./ReactPutListenerQueue":255,"./Transaction":283}],257:[function(require,module,exports){
module.exports=require(101)
},{}],258:[function(require,module,exports){
module.exports=require(102)
},{"./ReactElement":233,"./ReactInstanceHandles":241,"./ReactMarkupChecksum":244,"./ReactServerRenderingTransaction":259,"./instantiateReactComponent":316,"./invariant":317,"oMfpAn":6}],259:[function(require,module,exports){
module.exports=require(103)
},{"./CallbackQueue":182,"./Object.assign":204,"./PooledClass":205,"./ReactPutListenerQueue":255,"./Transaction":283,"./emptyFunction":298}],260:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactStateSetters
 */

"use strict";

var ReactStateSetters = {
  /**
   * Returns a function that calls the provided function, and uses the result
   * of that to set the component's state.
   *
   * @param {ReactCompositeComponent} component
   * @param {function} funcReturningState Returned callback uses this to
   *                                      determine how to update state.
   * @return {function} callback that when invoked uses funcReturningState to
   *                    determined the object literal to setState.
   */
  createStateSetter: function(component, funcReturningState) {
    return function(a, b, c, d, e, f) {
      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
      if (partialState) {
        component.setState(partialState);
      }
    };
  },

  /**
   * Returns a single-argument callback that can be used to update a single
   * key in the component's state.
   *
   * Note: this is memoized function, which makes it inexpensive to call.
   *
   * @param {ReactCompositeComponent} component
   * @param {string} key The key in the state that you should update.
   * @return {function} callback of 1 argument which calls setState() with
   *                    the provided keyName and callback argument.
   */
  createStateKeySetter: function(component, key) {
    // Memoize the setters.
    var cache = component.__keySetters || (component.__keySetters = {});
    return cache[key] || (cache[key] = createStateKeySetter(component, key));
  }
};

function createStateKeySetter(component, key) {
  // Partial state is allocated outside of the function closure so it can be
  // reused with every call, avoiding memory allocation when this function
  // is called.
  var partialState = {};
  return function stateKeySetter(value) {
    partialState[key] = value;
    component.setState(partialState);
  };
}

ReactStateSetters.Mixin = {
  /**
   * Returns a function that calls the provided function, and uses the result
   * of that to set the component's state.
   *
   * For example, these statements are equivalent:
   *
   *   this.setState({x: 1});
   *   this.createStateSetter(function(xValue) {
   *     return {x: xValue};
   *   })(1);
   *
   * @param {function} funcReturningState Returned callback uses this to
   *                                      determine how to update state.
   * @return {function} callback that when invoked uses funcReturningState to
   *                    determined the object literal to setState.
   */
  createStateSetter: function(funcReturningState) {
    return ReactStateSetters.createStateSetter(this, funcReturningState);
  },

  /**
   * Returns a single-argument callback that can be used to update a single
   * key in the component's state.
   *
   * For example, these statements are equivalent:
   *
   *   this.setState({x: 1});
   *   this.createStateKeySetter('x')(1);
   *
   * Note: this is memoized function, which makes it inexpensive to call.
   *
   * @param {string} key The key in the state that you should update.
   * @return {function} callback of 1 argument which calls setState() with
   *                    the provided keyName and callback argument.
   */
  createStateKeySetter: function(key) {
    return ReactStateSetters.createStateKeySetter(this, key);
  }
};

module.exports = ReactStateSetters;

},{}],261:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTestUtils
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");
var EventPropagators = require("./EventPropagators");
var React = require("./React");
var ReactElement = require("./ReactElement");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactMount = require("./ReactMount");
var ReactTextComponent = require("./ReactTextComponent");
var ReactUpdates = require("./ReactUpdates");
var SyntheticEvent = require("./SyntheticEvent");

var assign = require("./Object.assign");

var topLevelTypes = EventConstants.topLevelTypes;

function Event(suffix) {}

/**
 * @class ReactTestUtils
 */

/**
 * Todo: Support the entire DOM.scry query syntax. For now, these simple
 * utilities will suffice for testing purposes.
 * @lends ReactTestUtils
 */
var ReactTestUtils = {
  renderIntoDocument: function(instance) {
    var div = document.createElement('div');
    // None of our tests actually require attaching the container to the
    // DOM, and doing so creates a mess that we rely on test isolation to
    // clean up, so we're going to stop honoring the name of this method
    // (and probably rename it eventually) if no problems arise.
    // document.documentElement.appendChild(div);
    return React.render(instance, div);
  },

  isElement: function(element) {
    return ReactElement.isValidElement(element);
  },

  isElementOfType: function(inst, convenienceConstructor) {
    return (
      ReactElement.isValidElement(inst) &&
      inst.type === convenienceConstructor.type
    );
  },

  isDOMComponent: function(inst) {
    return !!(inst && inst.mountComponent && inst.tagName);
  },

  isDOMComponentElement: function(inst) {
    return !!(inst &&
              ReactElement.isValidElement(inst) &&
              !!inst.tagName);
  },

  isCompositeComponent: function(inst) {
    return typeof inst.render === 'function' &&
           typeof inst.setState === 'function';
  },

  isCompositeComponentWithType: function(inst, type) {
    return !!(ReactTestUtils.isCompositeComponent(inst) &&
             (inst.constructor === type.type));
  },

  isCompositeComponentElement: function(inst) {
    if (!ReactElement.isValidElement(inst)) {
      return false;
    }
    // We check the prototype of the type that will get mounted, not the
    // instance itself. This is a future proof way of duck typing.
    var prototype = inst.type.prototype;
    return (
      typeof prototype.render === 'function' &&
      typeof prototype.setState === 'function'
    );
  },

  isCompositeComponentElementWithType: function(inst, type) {
    return !!(ReactTestUtils.isCompositeComponentElement(inst) &&
             (inst.constructor === type));
  },

  isTextComponent: function(inst) {
    return inst instanceof ReactTextComponent.type;
  },

  findAllInRenderedTree: function(inst, test) {
    if (!inst) {
      return [];
    }
    var ret = test(inst) ? [inst] : [];
    if (ReactTestUtils.isDOMComponent(inst)) {
      var renderedChildren = inst._renderedChildren;
      var key;
      for (key in renderedChildren) {
        if (!renderedChildren.hasOwnProperty(key)) {
          continue;
        }
        ret = ret.concat(
          ReactTestUtils.findAllInRenderedTree(renderedChildren[key], test)
        );
      }
    } else if (ReactTestUtils.isCompositeComponent(inst)) {
      ret = ret.concat(
        ReactTestUtils.findAllInRenderedTree(inst._renderedComponent, test)
      );
    }
    return ret;
  },

  /**
   * Finds all instance of components in the rendered tree that are DOM
   * components with the class name matching `className`.
   * @return an array of all the matches.
   */
  scryRenderedDOMComponentsWithClass: function(root, className) {
    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
      var instClassName = inst.props.className;
      return ReactTestUtils.isDOMComponent(inst) && (
        instClassName &&
        (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1
      );
    });
  },

  /**
   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
  findRenderedDOMComponentWithClass: function(root, className) {
    var all =
      ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
    if (all.length !== 1) {
      throw new Error('Did not find exactly one match for class:' + className);
    }
    return all[0];
  },


  /**
   * Finds all instance of components in the rendered tree that are DOM
   * components with the tag name matching `tagName`.
   * @return an array of all the matches.
   */
  scryRenderedDOMComponentsWithTag: function(root, tagName) {
    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
      return ReactTestUtils.isDOMComponent(inst) &&
            inst.tagName === tagName.toUpperCase();
    });
  },

  /**
   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
  findRenderedDOMComponentWithTag: function(root, tagName) {
    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
    if (all.length !== 1) {
      throw new Error('Did not find exactly one match for tag:' + tagName);
    }
    return all[0];
  },


  /**
   * Finds all instances of components with type equal to `componentType`.
   * @return an array of all the matches.
   */
  scryRenderedComponentsWithType: function(root, componentType) {
    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
      return ReactTestUtils.isCompositeComponentWithType(
        inst,
        componentType
      );
    });
  },

  /**
   * Same as `scryRenderedComponentsWithType` but expects there to be one result
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactComponent} The one match.
   */
  findRenderedComponentWithType: function(root, componentType) {
    var all = ReactTestUtils.scryRenderedComponentsWithType(
      root,
      componentType
    );
    if (all.length !== 1) {
      throw new Error(
        'Did not find exactly one match for componentType:' + componentType
      );
    }
    return all[0];
  },

  /**
   * Pass a mocked component module to this method to augment it with
   * useful methods that allow it to be used as a dummy React component.
   * Instead of rendering as usual, the component will become a simple
   * <div> containing any provided children.
   *
   * @param {object} module the mock function object exported from a
   *                        module that defines the component to be mocked
   * @param {?string} mockTagName optional dummy root tag name to return
   *                              from render method (overrides
   *                              module.mockTagName if provided)
   * @return {object} the ReactTestUtils object (for chaining)
   */
  mockComponent: function(module, mockTagName) {
    mockTagName = mockTagName || module.mockTagName || "div";

    var ConvenienceConstructor = React.createClass({displayName: 'ConvenienceConstructor',
      render: function() {
        return React.createElement(
          mockTagName,
          null,
          this.props.children
        );
      }
    });

    module.mockImplementation(ConvenienceConstructor);

    module.type = ConvenienceConstructor.type;
    module.isReactLegacyFactory = true;

    return this;
  },

  /**
   * Simulates a top level event being dispatched from a raw event that occured
   * on an `Element` node.
   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
   * @param {!Element} node The dom to simulate an event occurring on.
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
  simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
    fakeNativeEvent.target = node;
    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
      topLevelType,
      fakeNativeEvent
    );
  },

  /**
   * Simulates a top level event being dispatched from a raw event that occured
   * on the `ReactDOMComponent` `comp`.
   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
   * @param comp {!ReactDOMComponent}
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
  simulateNativeEventOnDOMComponent: function(
      topLevelType,
      comp,
      fakeNativeEvent) {
    ReactTestUtils.simulateNativeEventOnNode(
      topLevelType,
      comp.getDOMNode(),
      fakeNativeEvent
    );
  },

  nativeTouchData: function(x, y) {
    return {
      touches: [
        {pageX: x, pageY: y}
      ]
    };
  },

  Simulate: null,
  SimulateNative: {}
};

/**
 * Exports:
 *
 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
 * - ... (All keys from event plugin `eventTypes` objects)
 */
function makeSimulator(eventType) {
  return function(domComponentOrNode, eventData) {
    var node;
    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
      node = domComponentOrNode.getDOMNode();
    } else if (domComponentOrNode.tagName) {
      node = domComponentOrNode;
    }

    var fakeNativeEvent = new Event();
    fakeNativeEvent.target = node;
    // We don't use SyntheticEvent.getPooled in order to not have to worry about
    // properly destroying any properties assigned from `eventData` upon release
    var event = new SyntheticEvent(
      ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType],
      ReactMount.getID(node),
      fakeNativeEvent
    );
    assign(event, eventData);
    EventPropagators.accumulateTwoPhaseDispatches(event);

    ReactUpdates.batchedUpdates(function() {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue();
    });
  };
}

function buildSimulators() {
  ReactTestUtils.Simulate = {};

  var eventType;
  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
    /**
     * @param {!Element || ReactDOMComponent} domComponentOrNode
     * @param {?object} eventData Fake event data to use in SyntheticEvent.
     */
    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
  }
}

// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
EventPluginHub.injection.injectEventPluginOrder = function() {
  oldInjectEventPluginOrder.apply(this, arguments);
  buildSimulators();
};
var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
EventPluginHub.injection.injectEventPluginsByName = function() {
  oldInjectEventPlugins.apply(this, arguments);
  buildSimulators();
};

buildSimulators();

/**
 * Exports:
 *
 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
 * - ... (All keys from `EventConstants.topLevelTypes`)
 *
 * Note: Top level event types are a subset of the entire set of handler types
 * (which include a broader set of "synthetic" events). For example, onDragDone
 * is a synthetic event. Except when testing an event plugin or React's event
 * handling code specifically, you probably want to use ReactTestUtils.Simulate
 * to dispatch synthetic events.
 */

function makeNativeSimulator(eventType) {
  return function(domComponentOrNode, nativeEventData) {
    var fakeNativeEvent = new Event(eventType);
    assign(fakeNativeEvent, nativeEventData);
    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
      ReactTestUtils.simulateNativeEventOnDOMComponent(
        eventType,
        domComponentOrNode,
        fakeNativeEvent
      );
    } else if (!!domComponentOrNode.tagName) {
      // Will allow on actual dom nodes.
      ReactTestUtils.simulateNativeEventOnNode(
        eventType,
        domComponentOrNode,
        fakeNativeEvent
      );
    }
  };
}

var eventType;
for (eventType in topLevelTypes) {
  // Event type is stored as 'topClick' - we transform that to 'click'
  var convenienceName = eventType.indexOf('top') === 0 ?
    eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
  /**
   * @param {!Element || ReactDOMComponent} domComponentOrNode
   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
   */
  ReactTestUtils.SimulateNative[convenienceName] =
    makeNativeSimulator(eventType);
}

module.exports = ReactTestUtils;

},{"./EventConstants":192,"./EventPluginHub":194,"./EventPropagators":197,"./Object.assign":204,"./React":206,"./ReactBrowserEventEmitter":208,"./ReactElement":233,"./ReactMount":245,"./ReactTextComponent":262,"./ReactUpdates":266,"./SyntheticEvent":275}],262:[function(require,module,exports){
module.exports=require(104)
},{"./DOMPropertyOperations":188,"./Object.assign":204,"./ReactComponent":212,"./ReactElement":233,"./escapeTextForBrowser":300}],263:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactTransitionChildMapping
 */

"use strict";

var ReactChildren = require("./ReactChildren");

var ReactTransitionChildMapping = {
  /**
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around ReactChildren.map().
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  getChildMapping: function(children) {
    return ReactChildren.map(children, function(child) {
      return child;
    });
  },

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  mergeChildMappings: function(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      } else {
        return prev[key];
      }
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
            pendingNextKey
          );
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
};

module.exports = ReactTransitionChildMapping;

},{"./ReactChildren":211}],264:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionEvents
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (ExecutionEnvironment.canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function(endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function(endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

},{"./ExecutionEnvironment":198}],265:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionGroup
 */

"use strict";

var React = require("./React");
var ReactTransitionChildMapping = require("./ReactTransitionChildMapping");

var assign = require("./Object.assign");
var cloneWithProps = require("./cloneWithProps");
var emptyFunction = require("./emptyFunction");

var ReactTransitionGroup = React.createClass({
  displayName: 'ReactTransitionGroup',

  propTypes: {
    component: React.PropTypes.any,
    childFactory: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      component: 'span',
      childFactory: emptyFunction.thatReturnsArgument
    };
  },

  getInitialState: function() {
    return {
      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(
      nextProps.children
    );
    var prevChildMapping = this.state.children;

    this.setState({
      children: ReactTransitionChildMapping.mergeChildMappings(
        prevChildMapping,
        nextChildMapping
      )
    });

    var key;

    for (key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev &&
          !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
      if (prevChildMapping[key] && !hasNext &&
          !this.currentlyTransitioningKeys[key]) {
        this.keysToLeave.push(key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  },

  componentWillMount: function() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  },

  componentDidUpdate: function() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  },

  performEnter: function(key) {
    this.currentlyTransitioningKeys[key] = true;

    var component = this.refs[key];

    if (component.componentWillEnter) {
      component.componentWillEnter(
        this._handleDoneEntering.bind(this, key)
      );
    } else {
      this._handleDoneEntering(key);
    }
  },

  _handleDoneEntering: function(key) {
    var component = this.refs[key];
    if (component.componentDidEnter) {
      component.componentDidEnter();
    }

    delete this.currentlyTransitioningKeys[key];

    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
      this.props.children
    );

    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      // This was removed before it had fully entered. Remove it.
      this.performLeave(key);
    }
  },

  performLeave: function(key) {
    this.currentlyTransitioningKeys[key] = true;

    var component = this.refs[key];
    if (component.componentWillLeave) {
      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
    } else {
      // Note that this is somewhat dangerous b/c it calls setState()
      // again, effectively mutating the component before all the work
      // is done.
      this._handleDoneLeaving(key);
    }
  },

  _handleDoneLeaving: function(key) {
    var component = this.refs[key];

    if (component.componentDidLeave) {
      component.componentDidLeave();
    }

    delete this.currentlyTransitioningKeys[key];

    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
      this.props.children
    );

    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
      // This entered again before it fully left. Add it again.
      this.performEnter(key);
    } else {
      var newChildren = assign({}, this.state.children);
      delete newChildren[key];
      this.setState({children: newChildren});
    }
  },

  render: function() {
    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = {};
    for (var key in this.state.children) {
      var child = this.state.children[key];
      if (child) {
        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender[key] = cloneWithProps(
          this.props.childFactory(child),
          {ref: key}
        );
      }
    }
    return React.createElement(
      this.props.component,
      this.props,
      childrenToRender
    );
  }
});

module.exports = ReactTransitionGroup;

},{"./Object.assign":204,"./React":206,"./ReactTransitionChildMapping":263,"./cloneWithProps":289,"./emptyFunction":298}],266:[function(require,module,exports){
module.exports=require(105)
},{"./CallbackQueue":182,"./Object.assign":204,"./PooledClass":205,"./ReactCurrentOwner":217,"./ReactPerf":250,"./Transaction":283,"./invariant":317,"./warning":338,"oMfpAn":6}],267:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactWithAddons
 */

/**
 * This module exists purely in the open source project, and is meant as a way
 * to create a separate standalone build of React. This build has "addons", or
 * functionality we've built and think might be useful but doesn't have a good
 * place to live inside React core.
 */

"use strict";

var LinkedStateMixin = require("./LinkedStateMixin");
var React = require("./React");
var ReactComponentWithPureRenderMixin =
  require("./ReactComponentWithPureRenderMixin");
var ReactCSSTransitionGroup = require("./ReactCSSTransitionGroup");
var ReactTransitionGroup = require("./ReactTransitionGroup");
var ReactUpdates = require("./ReactUpdates");

var cx = require("./cx");
var cloneWithProps = require("./cloneWithProps");
var update = require("./update");

React.addons = {
  CSSTransitionGroup: ReactCSSTransitionGroup,
  LinkedStateMixin: LinkedStateMixin,
  PureRenderMixin: ReactComponentWithPureRenderMixin,
  TransitionGroup: ReactTransitionGroup,

  batchedUpdates: ReactUpdates.batchedUpdates,
  classSet: cx,
  cloneWithProps: cloneWithProps,
  update: update
};

if ("production" !== process.env.NODE_ENV) {
  React.addons.Perf = require("./ReactDefaultPerf");
  React.addons.TestUtils = require("./ReactTestUtils");
}

module.exports = React;

}).call(this,require("oMfpAn"))
},{"./LinkedStateMixin":200,"./React":206,"./ReactCSSTransitionGroup":209,"./ReactComponentWithPureRenderMixin":214,"./ReactDefaultPerf":231,"./ReactTestUtils":261,"./ReactTransitionGroup":265,"./ReactUpdates":266,"./cloneWithProps":289,"./cx":295,"./update":337,"oMfpAn":6}],268:[function(require,module,exports){
module.exports=require(106)
},{"./DOMProperty":187}],269:[function(require,module,exports){
module.exports=require(107)
},{"./EventConstants":192,"./EventPropagators":197,"./ReactInputSelection":240,"./SyntheticEvent":275,"./getActiveElement":304,"./isTextInputElement":320,"./keyOf":324,"./shallowEqual":333}],270:[function(require,module,exports){
module.exports=require(108)
},{}],271:[function(require,module,exports){
module.exports=require(109)
},{"./EventConstants":192,"./EventPluginUtils":196,"./EventPropagators":197,"./SyntheticClipboardEvent":272,"./SyntheticDragEvent":274,"./SyntheticEvent":275,"./SyntheticFocusEvent":276,"./SyntheticKeyboardEvent":278,"./SyntheticMouseEvent":279,"./SyntheticTouchEvent":280,"./SyntheticUIEvent":281,"./SyntheticWheelEvent":282,"./getEventCharCode":305,"./invariant":317,"./keyOf":324,"./warning":338,"oMfpAn":6}],272:[function(require,module,exports){
module.exports=require(110)
},{"./SyntheticEvent":275}],273:[function(require,module,exports){
module.exports=require(111)
},{"./SyntheticEvent":275}],274:[function(require,module,exports){
module.exports=require(112)
},{"./SyntheticMouseEvent":279}],275:[function(require,module,exports){
module.exports=require(113)
},{"./Object.assign":204,"./PooledClass":205,"./emptyFunction":298,"./getEventTarget":308}],276:[function(require,module,exports){
module.exports=require(114)
},{"./SyntheticUIEvent":281}],277:[function(require,module,exports){
module.exports=require(115)
},{"./SyntheticEvent":275}],278:[function(require,module,exports){
module.exports=require(116)
},{"./SyntheticUIEvent":281,"./getEventCharCode":305,"./getEventKey":306,"./getEventModifierState":307}],279:[function(require,module,exports){
module.exports=require(117)
},{"./SyntheticUIEvent":281,"./ViewportMetrics":284,"./getEventModifierState":307}],280:[function(require,module,exports){
module.exports=require(118)
},{"./SyntheticUIEvent":281,"./getEventModifierState":307}],281:[function(require,module,exports){
module.exports=require(119)
},{"./SyntheticEvent":275,"./getEventTarget":308}],282:[function(require,module,exports){
module.exports=require(120)
},{"./SyntheticMouseEvent":279}],283:[function(require,module,exports){
module.exports=require(121)
},{"./invariant":317,"oMfpAn":6}],284:[function(require,module,exports){
module.exports=require(122)
},{"./getUnboundedScrollPosition":313}],285:[function(require,module,exports){
module.exports=require(123)
},{"./invariant":317,"oMfpAn":6}],286:[function(require,module,exports){
module.exports=require(124)
},{}],287:[function(require,module,exports){
module.exports=require(125)
},{}],288:[function(require,module,exports){
module.exports=require(126)
},{"./camelize":287}],289:[function(require,module,exports){
module.exports=require(127)
},{"./ReactElement":233,"./ReactPropTransferer":251,"./keyOf":324,"./warning":338,"oMfpAn":6}],290:[function(require,module,exports){
module.exports=require(128)
},{"./isTextNode":321}],291:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule copyProperties
 */

/**
 * Copy properties from one or more objects (up to 5) into the first object.
 * This is a shallow copy. It mutates the first object and also returns it.
 *
 * NOTE: `arguments` has a very significant performance penalty, which is why
 * we don't support unlimited arguments.
 */
function copyProperties(obj, a, b, c, d, e, f) {
  obj = obj || {};

  if ("production" !== process.env.NODE_ENV) {
    if (f) {
      throw new Error('Too many arguments passed to copyProperties');
    }
  }

  var args = [a, b, c, d, e];
  var ii = 0, v;
  while (args[ii]) {
    v = args[ii++];
    for (var k in v) {
      obj[k] = v[k];
    }

    // IE ignores toString in object iteration.. See:
    // webreflection.blogspot.com/2007/07/quick-fix-internet-explorer-and.html
    if (v.hasOwnProperty && v.hasOwnProperty('toString') &&
        (typeof v.toString != 'undefined') && (obj.toString !== v.toString)) {
      obj.toString = v.toString;
    }
  }

  return obj;
}

module.exports = copyProperties;

// deprecation notice
console.warn(
  'react/lib/copyProperties has been deprecated and will be removed in the ' +
  'next version of React. All uses can be replaced with ' +
  'Object.assign(obj, a, b, ...) or _.extend(obj, a, b, ...).'
);

}).call(this,require("oMfpAn"))
},{"oMfpAn":6}],292:[function(require,module,exports){
module.exports=require(129)
},{"./toArray":335}],293:[function(require,module,exports){
module.exports=require(130)
},{"./ReactCompositeComponent":215,"./ReactElement":233,"./invariant":317,"oMfpAn":6}],294:[function(require,module,exports){
module.exports=require(131)
},{"./ExecutionEnvironment":198,"./createArrayFrom":292,"./getMarkupWrap":309,"./invariant":317,"oMfpAn":6}],295:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cx
 */

/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
function cx(classNames) {
  if (typeof classNames == 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

module.exports = cx;

},{}],296:[function(require,module,exports){
module.exports=require(132)
},{"./CSSProperty":180}],297:[function(require,module,exports){
module.exports=require(133)
},{"./Object.assign":204,"./warning":338,"oMfpAn":6}],298:[function(require,module,exports){
module.exports=require(134)
},{}],299:[function(require,module,exports){
module.exports=require(135)
},{"oMfpAn":6}],300:[function(require,module,exports){
module.exports=require(136)
},{}],301:[function(require,module,exports){
module.exports=require(137)
},{"./ReactTextComponent":262,"./traverseAllChildren":336,"./warning":338,"oMfpAn":6}],302:[function(require,module,exports){
module.exports=require(138)
},{}],303:[function(require,module,exports){
module.exports=require(139)
},{}],304:[function(require,module,exports){
module.exports=require(140)
},{}],305:[function(require,module,exports){
module.exports=require(141)
},{}],306:[function(require,module,exports){
module.exports=require(142)
},{"./getEventCharCode":305}],307:[function(require,module,exports){
module.exports=require(143)
},{}],308:[function(require,module,exports){
module.exports=require(144)
},{}],309:[function(require,module,exports){
module.exports=require(145)
},{"./ExecutionEnvironment":198,"./invariant":317,"oMfpAn":6}],310:[function(require,module,exports){
module.exports=require(146)
},{}],311:[function(require,module,exports){
module.exports=require(147)
},{}],312:[function(require,module,exports){
module.exports=require(148)
},{"./ExecutionEnvironment":198}],313:[function(require,module,exports){
module.exports=require(149)
},{}],314:[function(require,module,exports){
module.exports=require(150)
},{}],315:[function(require,module,exports){
module.exports=require(151)
},{"./hyphenate":314}],316:[function(require,module,exports){
module.exports=require(152)
},{"./ReactElement":233,"./ReactEmptyComponent":235,"./ReactLegacyElement":242,"./ReactNativeComponent":248,"./warning":338,"oMfpAn":6}],317:[function(require,module,exports){
module.exports=require(153)
},{"oMfpAn":6}],318:[function(require,module,exports){
module.exports=require(154)
},{"./ExecutionEnvironment":198}],319:[function(require,module,exports){
module.exports=require(155)
},{}],320:[function(require,module,exports){
module.exports=require(156)
},{}],321:[function(require,module,exports){
module.exports=require(157)
},{"./isNode":319}],322:[function(require,module,exports){
module.exports=require(158)
},{}],323:[function(require,module,exports){
module.exports=require(159)
},{"./invariant":317,"oMfpAn":6}],324:[function(require,module,exports){
module.exports=require(160)
},{}],325:[function(require,module,exports){
module.exports=require(161)
},{}],326:[function(require,module,exports){
module.exports=require(162)
},{}],327:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule merge
 */

"use strict";

var assign = require("./Object.assign");

/**
 * Shallow merges two structures into a return value, without mutating either.
 *
 * @param {?object} one Optional object with properties to merge from.
 * @param {?object} two Optional object with properties to merge from.
 * @return {object} The shallow extension of one by two.
 */
var merge = function(one, two) {
  return assign({}, one, two);
};

module.exports = merge;

// deprecation notice
console.warn(
  'react/lib/merge has been deprecated and will be removed in the ' +
  'next version of React. All uses can be replaced with ' +
  'Object.assign({}, a, b) or _.extend({}, a, b).'
);

},{"./Object.assign":204}],328:[function(require,module,exports){
module.exports=require(163)
},{"./invariant":317,"oMfpAn":6}],329:[function(require,module,exports){
module.exports=require(164)
},{"./ReactElement":233,"./invariant":317,"oMfpAn":6}],330:[function(require,module,exports){
module.exports=require(165)
},{"./ExecutionEnvironment":198}],331:[function(require,module,exports){
module.exports=require(166)
},{"./performance":330}],332:[function(require,module,exports){
module.exports=require(167)
},{"./ExecutionEnvironment":198}],333:[function(require,module,exports){
module.exports=require(168)
},{}],334:[function(require,module,exports){
module.exports=require(169)
},{}],335:[function(require,module,exports){
module.exports=require(170)
},{"./invariant":317,"oMfpAn":6}],336:[function(require,module,exports){
module.exports=require(171)
},{"./ReactElement":233,"./ReactInstanceHandles":241,"./invariant":317,"oMfpAn":6}],337:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule update
 */

"use strict";

var assign = require("./Object.assign");
var keyOf = require("./keyOf");
var invariant = require("./invariant");

function shallowCopy(x) {
  if (Array.isArray(x)) {
    return x.concat();
  } else if (x && typeof x === 'object') {
    return assign(new x.constructor(), x);
  } else {
    return x;
  }
}

var COMMAND_PUSH = keyOf({$push: null});
var COMMAND_UNSHIFT = keyOf({$unshift: null});
var COMMAND_SPLICE = keyOf({$splice: null});
var COMMAND_SET = keyOf({$set: null});
var COMMAND_MERGE = keyOf({$merge: null});
var COMMAND_APPLY = keyOf({$apply: null});

var ALL_COMMANDS_LIST = [
  COMMAND_PUSH,
  COMMAND_UNSHIFT,
  COMMAND_SPLICE,
  COMMAND_SET,
  COMMAND_MERGE,
  COMMAND_APPLY
];

var ALL_COMMANDS_SET = {};

ALL_COMMANDS_LIST.forEach(function(command) {
  ALL_COMMANDS_SET[command] = true;
});

function invariantArrayCase(value, spec, command) {
  ("production" !== process.env.NODE_ENV ? invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  ) : invariant(Array.isArray(value)));
  var specValue = spec[command];
  ("production" !== process.env.NODE_ENV ? invariant(
    Array.isArray(specValue),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    specValue
  ) : invariant(Array.isArray(specValue)));
}

function update(value, spec) {
  ("production" !== process.env.NODE_ENV ? invariant(
    typeof spec === 'object',
    'update(): You provided a key path to update() that did not contain one ' +
    'of %s. Did you forget to include {%s: ...}?',
    ALL_COMMANDS_LIST.join(', '),
    COMMAND_SET
  ) : invariant(typeof spec === 'object'));

  if (spec.hasOwnProperty(COMMAND_SET)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      Object.keys(spec).length === 1,
      'Cannot have more than one key in an object with %s',
      COMMAND_SET
    ) : invariant(Object.keys(spec).length === 1));

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (spec.hasOwnProperty(COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    ("production" !== process.env.NODE_ENV ? invariant(
      mergeObj && typeof mergeObj === 'object',
      'update(): %s expects a spec of type \'object\'; got %s',
      COMMAND_MERGE,
      mergeObj
    ) : invariant(mergeObj && typeof mergeObj === 'object'));
    ("production" !== process.env.NODE_ENV ? invariant(
      nextValue && typeof nextValue === 'object',
      'update(): %s expects a target of type \'object\'; got %s',
      COMMAND_MERGE,
      nextValue
    ) : invariant(nextValue && typeof nextValue === 'object'));
    assign(nextValue, spec[COMMAND_MERGE]);
  }

  if (spec.hasOwnProperty(COMMAND_PUSH)) {
    invariantArrayCase(value, spec, COMMAND_PUSH);
    spec[COMMAND_PUSH].forEach(function(item) {
      nextValue.push(item);
    });
  }

  if (spec.hasOwnProperty(COMMAND_UNSHIFT)) {
    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
    spec[COMMAND_UNSHIFT].forEach(function(item) {
      nextValue.unshift(item);
    });
  }

  if (spec.hasOwnProperty(COMMAND_SPLICE)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      Array.isArray(value),
      'Expected %s target to be an array; got %s',
      COMMAND_SPLICE,
      value
    ) : invariant(Array.isArray(value)));
    ("production" !== process.env.NODE_ENV ? invariant(
      Array.isArray(spec[COMMAND_SPLICE]),
      'update(): expected spec of %s to be an array of arrays; got %s. ' +
      'Did you forget to wrap your parameters in an array?',
      COMMAND_SPLICE,
      spec[COMMAND_SPLICE]
    ) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
    spec[COMMAND_SPLICE].forEach(function(args) {
      ("production" !== process.env.NODE_ENV ? invariant(
        Array.isArray(args),
        'update(): expected spec of %s to be an array of arrays; got %s. ' +
        'Did you forget to wrap your parameters in an array?',
        COMMAND_SPLICE,
        spec[COMMAND_SPLICE]
      ) : invariant(Array.isArray(args)));
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (spec.hasOwnProperty(COMMAND_APPLY)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof spec[COMMAND_APPLY] === 'function',
      'update(): expected spec of %s to be a function; got %s.',
      COMMAND_APPLY,
      spec[COMMAND_APPLY]
    ) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
    nextValue = spec[COMMAND_APPLY](nextValue);
  }

  for (var k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(value[k], spec[k]);
    }
  }

  return nextValue;
}

module.exports = update;

}).call(this,require("oMfpAn"))
},{"./Object.assign":204,"./invariant":317,"./keyOf":324,"oMfpAn":6}],338:[function(require,module,exports){
module.exports=require(172)
},{"./emptyFunction":298,"oMfpAn":6}],339:[function(require,module,exports){
module.exports=require(173)
},{"./lib/React":206}],340:[function(require,module,exports){
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],341:[function(require,module,exports){
var React = require('react');
var Header = React.createFactory(require('./header/Header'));
var Link = require('react-router-component').Link;

var Home = React.createClass({displayName: 'Home',
    render: function () {
        return (
          React.createElement("section", {className: "container"}, 
            React.createElement(Header, null, 
              React.createElement("h2", {className: "main-menu"}, "Decoup")
            ), 
            React.createElement("div", {className: "row options-container"}, 
              React.createElement(Link, {href: "/custos", className: "btn btn-lg btn-primary menu-link"}, 
                "Custo / Hora"
              ), 

              React.createElement(Link, {href: "/servicos", className: "btn btn-lg btn-primary menu-link"}, 
                "Serviço"
              )
            )
          )
        );
    }
});

module.exports = Home;

},{"./header/Header":350,"react":339,"react-router-component":7}],342:[function(require,module,exports){
var React = require('react');


var Template = React.createClass({displayName: 'Template',
	render:function () {
		return (
			React.createElement("div", {className: "container"}, 
				this.props.children
			)
		)
	}
});

module.exports = Template;

},{"react":339}],343:[function(require,module,exports){
var React = require('react');
var Router = require('react-router-component');
var Home = React.createFactory(require('./Home'));
var CostsList = React.createFactory(require('./costs/CostsList'));
var Template = React.createFactory(require('./Template'));

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({displayName: 'App',
  render: function() {
    return (
        React.createElement(Template, null, 
            React.createElement(Locations, null, 
                React.createElement(Location, {path: "/", handler: Home}), 
                React.createElement(Location, {path: "/custos", handler: CostsList})
            )
        )
    );
  }

});

module.exports = App;

},{"./Home":341,"./Template":342,"./costs/CostsList":346,"react":339,"react-router-component":7}],344:[function(require,module,exports){
var React = require('react');

var AddCost = React.createClass({displayName: 'AddCost',
    addItem: function (e) {
      this.props.onClick(e);
    },
    render: function () {
      return (
          React.createElement("button", {onClick: this.addItem, className: "btn btn-info header-option-button"}, "Adicionar")
      );
    }
});

module.exports = AddCost;

},{"react":339}],345:[function(require,module,exports){
'use strict';
var React = require('react');
var InputForm = React.createFactory(require('./InputForm'));
var InputLabel = React.createFactory(require('./InputLabel'));

var CostItem = React.createClass({displayName: 'CostItem',

    getInitialState: function () {
      return {
        rowStyle: false,
        name: this.props.area.name,
        highCost: this.props.area.highCost,
        lowCost: this.props.area.lowCost
      };
    },

    onChangeName: function (value) {
      this.setState({name: value});
    },

    onChangeHighCost: function (value) {
      this.setState({highCost: value});
    },

    onChangeLowCost: function (value) {
      this.setState({lowCost: value});
    },

    updateButton: function () {
      this.setState({rowStyle: true});
    },

    updateFormData: function () {
      this.setState({rowStyle: false});
    },

    render: function () {
        return (
          React.createElement("section", {className: "col-md-9 col-md-offset-1"}, 
                React.createElement("div", null, 
                  React.createElement(InputLabel, {rowStyle: this.state.rowStyle, onClick: this.updateButton, name: this.state.name, highCost: this.state.highCost, lowCost: this.state.lowCost}), 
                  React.createElement(InputForm, {onSubmitFormData: this.updateFormData, handleUpdateName: this.onChangeName, handleUpdateHighCost: this.onChangeHighCost, handleUpdateLowCost: this.onChangeLowCost, rowStyle: this.state.rowStyle, name: this.state.name, highCost: this.state.highCost, lowCost: this.state.lowCost})
                )
          )
        );
    }
});

module.exports = CostItem;

},{"./InputForm":348,"./InputLabel":349,"react":339}],346:[function(require,module,exports){
'use strict';
var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var CostsStore = require('../../stores/CostsStore');
var CostItem = React.createFactory(require('./CostItem'));
var AddCost = React.createFactory(require('./AddCost'));
var Link = require('react-router-component').Link;

var CostsList = React.createClass({displayName: 'CostsList',
    addArea: function () {
      addArea(item);
    },
    updateItem: function (itemId, item) {

    },
    render: function () {
      var areas = CostsStore.getAll();
      console.log(areas);
      var areasItems = areas.map(function(area)  {
            return (React.createElement(CostItem, {area: area}));
      });
      return (
        React.createElement("section", {className: "container options-container"}, 
          React.createElement(Header, null, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-2"}, 
                React.createElement(Link, {className: "btn btn-default header-link-default", href: "/"}, "voltar")
              ), 
              React.createElement("h2", {className: "col-md-8 main-menu"}, "Custo x Hora"), 
              React.createElement(AddCost, {onClick: this.addArea})
            )
          ), 
          React.createElement("section", {id: "row-stage", className: "table table-hover"}, 
            areasItems
          )
        )
      );
    }
});

module.exports = CostsList;

},{"../../stores/CostsStore":354,"../header/Header":350,"./AddCost":344,"./CostItem":345,"react":339,"react-router-component":7}],347:[function(require,module,exports){
'use strict';
var React = require('react');
var CostsMixin = function () {
    return {

      componentWillMount: function () {
          this.setState({rowStyle : false});
          if (this.props.name === '' ) {
            this.setState({rowStyle : true});
          }
      },

      propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        highCost: React.PropTypes.number,
        lowCost: React.PropTypes.number
      },

      getDefaultProps: function () {
        return {
          id:'',
          name: '',
          highCost: '',
          lowCost: ''
        };
      }
  };

};

module.exports = CostsMixin;

},{"react":339}],348:[function(require,module,exports){
'use strict';
var React = require('react');
var Addons = require('react/addons').addons;
var CostsMixin = require('./CostsMixin');
var PureRenderMixin = require('react').addons.PureRenderMixin;

var InputForm = React.createClass({displayName: 'InputForm',
    mixins: [CostsMixin(), PureRenderMixin],
    saveData : function (e) {
      e.preventDefault();
      console.log(this.props.index);
    },

    submitHandler : function (e) {
      e.preventDefault();
      console.log(e.target);
      this.props.onSubmitFormData();
    },

    handleUpdateName: function(e) {
      this.props.handleUpdateName(e.target.value);
    },

    handleUpdateHighCost: function(e) {
      this.props.handleUpdateHighCost(e.target.value);
    },

    handleUpdateLowCost: function(e) {
      this.props.handleUpdateLowCost(e.target.value);
    },

    render: function () {
        var cx = Addons.classSet;
        console.log('input form');
        var classes = cx({
          'form-horizontal': true,
          'item-row': true,
          'js-hidden': !this.props.rowStyle
        });
        return (
            React.createElement("form", {onSubmit: this.submitHandler, index: this.props.id, className: classes, role: "form"}, 
              React.createElement("div", {className: "row"}, 

                React.createElement("div", {className: "col-xs-6  no-left-padding"}, 
                    React.createElement("label", {className: "sr-only"}, "Area:"), 
                    React.createElement("input", {type: "text", refs: "area", value: this.props.name, onChange: this.handleUpdateName, name: "name", className: "form-control input-normal", placeholder: "Area"})
                ), 

                React.createElement("div", {className: "col-xs-2 no-left-padding"}, 
                    React.createElement("label", {className: "sr-only"}, "Maior Custo:"), 
                    React.createElement("input", {type: "text", value: this.props.highCost, onChange: this.handleUpdateHighCost, name: "highcost", className: "form-control input-normal", placeholder: "Maior Custo"})
                ), 

                React.createElement("div", {className: "col-xs-2 no-left-padding"}, 
                    React.createElement("label", {className: "sr-only"}, "Menor Custo:"), 
                    React.createElement("input", {type: "text", value: this.props.lowCost, onChange: this.handleUpdateLowCost, name: "lowercost", className: "form-control input-normal", placeholder: "Menor Custo"})
                ), 

                React.createElement("div", {className: "col-xs-2 btn-group  no-left-padding"}, 
                  React.createElement("button", {type: "submit", className: "btn btn-success input-normal glyphicon glyphicon-ok", title: "Salvar"}), 
                  React.createElement("button", {type: "button", className: "btn btn-danger input-normal glyphicon glyphicon-remove", title: "Cancelar"})
                )

              )
            )
        );
    }
});

module.exports = InputForm;

},{"./CostsMixin":347,"react":339,"react/addons":176}],349:[function(require,module,exports){
'use strict';
var React = require('react');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var Addons = require('react/addons').addons;
var CostsMixin = require('./CostsMixin');

var InputLabel = React.createClass({displayName: 'InputLabel',
    mixins: [CostsMixin(), PureRenderMixin],

    handleUpdateButton : function () {
      this.props.onClick();
    },

    render: function () {
        var cx = Addons.classSet;
        console.log('input label');
        var classes = cx({
          'row': true,
          'item-row': true,
          'js-hidden': this.props.rowStyle
        });
        return (
            React.createElement("div", {className: classes}, 
              React.createElement("span", {className: "col-xs-6 no-left-padding"}, this.props.name), 
              React.createElement("span", {className: "col-xs-2 no-left-padding"}, this.props.highCost), 
              React.createElement("span", {className: "col-xs-2 no-left-padding"}, this.props.lowCost), 

              React.createElement("div", {className: "col-xs-2 btn-group  no-left-padding"}, 
                React.createElement("button", {type: "button", onClick: this.handleUpdateButton, className: "btn btn-default input-normal glyphicon glyphicon-pencil", title: "editar"})
              )
            )
        );
    }
});

module.exports = InputLabel;

},{"./CostsMixin":347,"react":339,"react/addons":176}],350:[function(require,module,exports){
'use strict';
var React = require('react');

var Header = React.createClass({displayName: 'Header',
    render: function () {
        return (
            React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top menu-structure"}, 
              this.props.children
            )
        );
    }
});

module.exports = Header;

},{"react":339}],351:[function(require,module,exports){
var keyMirror = require('react/lib/keyMirror');

module.exports = {

  CHANGE_EVENT: 'change',

  ActionTypes: keyMirror({
    UPDATE_TITLE: null,
    ADD_AREA: null,
    UPDATE_AREA: null,
    DELETE_AREA: null,
    RECEIVE_DATA: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};

},{"react/lib/keyMirror":323}],352:[function(require,module,exports){
'use strict';
var Dispatcher = require('flux').Dispatcher;
var CostsConstants = require('../constants/CostsConstants');
var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = copyProperties(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: CostsConstants.ActionSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    console.log('action', action);
    var payload = {
      source: CostsConstants.ActionSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;

},{"../constants/CostsConstants":351,"flux":2,"react/lib/copyProperties":291}],353:[function(require,module,exports){
var React = require('react'),
    App = require('./components/app');

React.render(React.createFactory(App)(),  document.getElementById('main'));

},{"./components/app":343,"react":339}],354:[function(require,module,exports){
'use strict';
var _ = require('underscore');
var areaNS = 'areas';
var companyNS = 'companies';

var find = require('./data/Find');

var CostsDispatcher = require('../dispatchers/CostsDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CostsConstants = require('../constants/CostsConstants');
var CHANGE_EVENT = 'change';

var lastRef = '';

var _data = {
  title: null
};

var _areas = [];

// add private functions to modify data
function _updateTitle(title) {
  _data.title = title;
}

function _addArea(item, id) {
  item.id = id;
  _areas.push(item);
}

function _updateArea(item) {
  _areas[item.id] = item;
}

function _delelteArea(areaId) {
  delete _areas[areaId];
}

function _find(term) {
  var result = _.findWhere(_areas, {id: term});
  console.log(result);
  return result;
}

var CostsStore = merge(EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	updateTitle: function (title) {
	  return _updateTitle(title);
	},

  addArea: function (name, highCost, lowCost) {
	  return _addArea(name, highCost, lowCost);
	},

	deleteArea : function (areaId) {
	  return _deleteArea(areaId);
	},

  updateArea: function (areaId, item) {
    return _addArea[areaId] = item;
  },

  getAll: function () {
    return _areas;
  },

	dispatcherIndex: CostsDispatcher.register(function (payload) {
	  var action = payload.action;
		switch (action.actionType) {
      case CostConstants.UPDATE_TITLE:
        var text = action.text.trim();
        if (text !== '') {
          this.updateTitle(text);
          CostStore.emitChange();
        }
      break;

      case CostStore.UPDATE_AREA:
        this.updateArea(action.areaId, action.item);
        CostStore.emitChange();
      break;

      case CostStore.ADD_AREA:
        this.addArea(action.name, action.highCost, action.lowCost);
        CostStore.emitChange();
      break;

      case CostStore.DELETE_AREA:
        this.removeArea(areaId);
        CostStore.emitChange();
      break;

		}
	})

});

module.exports = CostsStore;

},{"../constants/CostsConstants":351,"../dispatchers/CostsDispatcher":352,"./data/Find":355,"events":5,"react/lib/merge":327,"underscore":340}],355:[function(require,module,exports){
'use strict';
var Firebase = require('Firebase');
var ref = new Firebase('https://decoup.firebaseio.com/');
var companiesRef = ref.child('companies');

var searchCompany = ref.child('rccom').set({
  areas:{
    development: {
        name: 'Development',
        lowCost: 4,
        highCost: 8
    },
    design: {
        name: 'Design',
        lowCost: 4,
        highCost: 8
    }
  }
});

var getEdges = function (nameSpace, vertex) {
    var waiting = 0;
    var listEdges = [];
};

var getAreas = function (ns, vertex) {
  getEdges(ns, vertex);
  console.log('getAreas');
};

getAreas('companies', 'rccom/rccomAreas');

var Find = {
  getEdges: getEdges
};

module.exports = Find;

},{"Firebase":1}]},{},[353])