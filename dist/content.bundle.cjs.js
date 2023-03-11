'use strict';

var n,l$2,u$1,t$1,o$1,r$1,f$1={},e$1=[],c$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s$1(n,l){for(var u in l)n[u]=l[u];return n}function a$2(n){var l=n.parentNode;l&&l.removeChild(n);}function h$2(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$2(l,f,t,o,null)}function v$2(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$2.vnode&&l$2.vnode(f),f}function p$2(n){return n.children}function d$2(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function k$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$2(n)}}function b$2(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||o$1!==l$2.debounceRendering)&&((o$1=l$2.debounceRendering)||setTimeout)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s$1({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z$1(u,t),t.__e!=o&&k$2(t)));});}function w$2(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$2(null,k,null,null,k):Array.isArray(k)?v$2(p$2,{children:k},null,null,null):k.__b>0?v$2(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$1(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$2(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M$1(w[h],w[++h],w[++h]);}function m$2(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$2(i,l,u):A(u,i,i,t,i.__e,l));return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l);}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$2.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I$1,o):n.removeEventListener(l,o?T:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I$1(n){this.l[n.type+!1](l$2.event?l$2.event(n):n);}function T(n){this.l[n.type+!0](l$2.event?l$2.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$2.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d$2(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s$1({},h.__s)),s$1(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$2.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s$1(s$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p$2&&null==a.key?a.props.children:a,w$2(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l$2.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$2.__e(n,u,i);}}function z$1(n,u){l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$2(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$2(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$2.__e(n,i);}}function N(n,u,i){var t,o;if(l$2.unmount&&l$2.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$2.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$2(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l$2.__&&l$2.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$1(i,u=(!o&&t||i).__k=h$2(p$2,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}function q(l,u,i){var t,o,r,f=s$1({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v$2(l.type,f,t||l.key,o||l.ref,null)}function B$1(n,l){var u={__c:l="__cC"+r$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$2);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e$1.slice,l$2={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,d$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s$1({},this.state),"function"==typeof n&&(n=n(s$1({},u),this.props)),n&&s$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$2(this));},d$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$2(this));},d$2.prototype.render=p$2,t$1=[],g$2.__r=0,r$1=0;

var t,r,u,i,o=0,f=[],c$1=[],e=l$2.__b,a$1=l$2.__r,v$1=l$2.diffed,l$1=l$2.__c,m$1=l$2.unmount;function d$1(t,u){l$2.__h&&l$2.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$1}),i.__[t]}function p$1(n){return o=1,y$1(B,n)}function y$1(n,u,i){var o=d$1(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))};}return o.__N||o.__}function h$1(u,i){var o=d$1(t++,3);!l$2.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function b$1(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k$1),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$2.__e(r,t.__v);}}l$2.__b=function(n){r=null,e&&e(n);},l$2.__r=function(n){a$1&&a$1(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$1,n.__N=n.i=void 0;})):(i.__h.forEach(k$1),i.__h.forEach(w$1),i.__h=[])),u=r;},l$2.diffed=function(t){v$1&&v$1(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$2.requestAnimationFrame||((i=l$2.requestAnimationFrame)||j)(b$1)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$1&&(n.__=n.__V),n.i=void 0,n.__V=c$1;})),u=r=null;},l$2.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k$1),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$2.__e(u,t.__v);}}),l$1&&l$1(t,r);},l$2.unmount=function(t){m$1&&m$1(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k$1(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$2.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

class Page {
  url;
  originalPage;
  constructor(url) {
    this.url = url;
    this.hideOriginalPage();
    print(url);
  }
  hideOriginalPage() {
    const container = document.createElement("div");
    container.innerHTML = document.body.innerHTML;
    console.log(container);
    this.originalPage = container;
    container.remove();
    document.body.innerHTML = "";
  }
}

const LoginForm = () => {
  const [codeImg, setCodeImg] = p$1("");
  h$1(() => {
    setCodeImg(`/validateCodeAction.do?random=${Math.random()}`);
  }, []);
  return h$2("form", {
    method: "post",
    name: "loginForm",
    action: "/loginAction.do"
  }, h$2("input", {
    type: "hidden",
    name: "zjh1"
  }), h$2("input", {
    type: "hidden",
    name: "tips"
  }), h$2("input", {
    type: "hidden",
    name: "lx"
  }), h$2("input", {
    type: "hidden",
    name: "evalue"
  }), h$2("input", {
    type: "hidden",
    name: "eflag"
  }), h$2("input", {
    type: "hidden",
    name: "fs"
  }), h$2("input", {
    type: "hidden",
    name: "dzslh"
  }), h$2("div", {
    className: "W(100%)"
  }, h$2("label", {
    for: "username"
  }, "\u5E10\u53F7"), h$2("input", {
    type: "text",
    name: "zjh",
    id: "username",
    className: "MW(100%)",
    value: "",
    alt: "notnull"
  })), h$2("div", null, h$2("label", {
    for: "password"
  }, "\u5BC6\u7801"), h$2("input", {
    type: "password",
    name: "mm",
    id: "password",
    value: "",
    alt: "notnull",
    className: "MW(100%)"
  })), h$2("label", {
    for: "validation"
  }, "\u9A8C\u8BC1\u7801"), h$2("div", {
    className: "DIS(flex) ub-validationField"
  }, h$2("input", {
    id: "validation",
    type: "text",
    name: "v_yzm",
    maxLength: "4",
    alt: "notnull"
  }), h$2("div", {
    className: "ub-validationImg"
  }, h$2("img", {
    src: codeImg,
    height: "100%",
    width: "100%",
    id: "vchart"
  }))), h$2("br", null), h$2("div", {
    className: "MTB(10px) DIS(flex) JC(center) FD(column)"
  }, h$2("div", {
    className: "DIS(flex) JC(center) FD(column) W(100%)"
  }, h$2("button", {
    onClick: () => login()
  }, "\u767B\u5F55"))));
};
class LoginPage extends Page {
  constructor() {
    super();
    this.url = "/login";
    this.title = "Login";
    this.content = "Login Page";
    this.mixOriginalPage();
    this.injectNewPage();
  }
  mixOriginalPage() {
    this.originalPage.getElementsByTagName("form").item(0).name = "_loginForm";
  }
  injectNewPage() {
    P(h$2("main", {
      style: {
        height: "100vh"
      }
    }, h$2("div", {
      className: "DIS(flex) JC(center) FD(row) H(100%)"
    }, h$2("div", {
      className: "DIS(flex) JC(center) FD(column)"
    }, h$2("div", {
      className: "ub-loginBox"
    }, h$2("a", {
      href: "https://ibb.co/VQfvJ2C"
    }, h$2("img", {
      src: chrome.runtime.getURL("/img/logo_landscape_dark.png"),
      alt: "URP",
      border: "0"
    })), h$2(LoginForm, null), h$2("p", {
      className: "copyright"
    }, "\u7248\u6743\u6240\u6709 \xA9 \u5317\u4EAC\u6E05\u5143\u4F18\u8F6F\u79D1\u6280\u6709\u9650\u516C\u53F8", h$2("br", null), "\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002", h$2("br", null), "Redesign By @RiverTwilight"))))), document.body);
  }
}

var a={};function c(n,t){for(var r in t)n[r]=t[r];return n}function s(n,t,r){var i,o=/(?:\?([^#]*))?(#.*)?$/,e=n.match(o),u={};if(e&&e[1])for(var f=e[1].split("&"),c=0;c<f.length;c++){var s=f[c].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="));}n=d(n.replace(o,"")),t=d(t||"");for(var h=Math.max(n.length,t.length),v=0;v<h;v++)if(t[v]&&":"===t[v].charAt(0)){var l=t[v].replace(/(^:|[+*?]+$)/g,""),p=(t[v].match(/[+*?]+$/)||a)[0]||"",m=~p.indexOf("+"),y=~p.indexOf("*"),U=n[v]||"";if(!U&&!y&&(p.indexOf("?")<0||m)){i=!1;break}if(u[l]=decodeURIComponent(U),m||y){u[l]=n.slice(v).map(decodeURIComponent).join("/");break}}else if(t[v]!==n[v]){i=!1;break}return (!0===r.default||!1!==i)&&u}function h(n,t){return n.rank<t.rank?1:n.rank>t.rank?-1:n.index-t.index}function v(n,t){return n.index=t,n.rank=function(n){return n.props.default?0:d(n.props.path).map(l).join("")}(n),n.props}function d(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function l(n){return ":"==n.charAt(0)?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var p={},m=[],y=[],g={url:R()},k=B$1(g);function R(){var n;return ""+((n="undefined"!=typeof location?location:p).pathname||"")+(n.search||"")}function $(n,t){return void 0===t&&(t=!1),"string"!=typeof n&&n.url&&(t=n.replace,n=n.url),function(n){for(var t=m.length;t--;)if(m[t].canRoute(n))return !0;return !1}(n)&&function(n,t){void 0===t&&(t="push"),"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,n);}(n,t?"replace":"push"),I(n)}function I(n){for(var t=!1,r=0;r<m.length;r++)m[r].routeTo(n)&&(t=!0);return t}function M(n){if(n&&n.getAttribute){var t=n.getAttribute("href"),r=n.getAttribute("target");if(t&&t.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return $(t)}}function b(n){return n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault(),!1}function W(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.button)){var t=n.target;do{if("a"===t.localName&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(M(t))return b(n)}}while(t=t.parentNode)}}var w=!1;c(new d$2,{shouldComponentUpdate:function(n){return !0!==n.static||n.url!==this.props.url||n.onChange!==this.props.onChange},canRoute:function(n){var t=x(this.props.children);return void 0!==this.g(t,n)},routeTo:function(n){this.setState({url:n});var t=this.canRoute(n);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0;},componentDidMount:function(){w||(w=!0,addEventListener("popstate",function(){I(R());}),addEventListener("click",W)),m.push(this),this.p=!1;},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),m.splice(m.indexOf(this),1);},componentWillUpdate:function(){this.p=!0;},componentDidUpdate:function(){this.p=!1;},g:function(n,t){n=n.filter(v).sort(h);for(var r=0;r<n.length;r++){var i=n[r],o=s(t,i.props.path,i.props);if(o)return [i,o]}},render:function(n,t){var e,u,f=n.onChange,a=t.url,s=this.c,h=this.g(x(n.children),a);if(h&&(u=q(h[0],c(c({url:a,matches:e=h[1]},e),{key:void 0,ref:void 0}))),a!==(s&&s.url)){c(g,s=this.c={url:a,previous:s&&s.url,current:u,path:u?u.props.path:null,matches:e}),s.router=this,s.active=u?[u]:[];for(var v=y.length;v--;)y[v]({});"function"==typeof f&&f(s);}return h$2(k.Provider,{value:s},u)}});

var Course = (() => {
  return h$2("iframe", {
    width: "100%",
    height: "100%",
    src: "/xkAction.do?actionType=6"
  });
});

const HashRouter = [{
  hash: "#Course",
  component: Course
}, {
  hash: "#Query",
  component: () => h$2("div", null, "asdfa")
}, {
  hash: "#Personal",
  component: () => h$2("div", null, "\u4E2A\u4EBA\u7BA1\u7406")
}, {
  hash: "#Home",
  component: () => h$2("div", null, "\u6211\u9700\u7559\u610F")
}];
function MainView() {
  const [hash, setHash] = p$1("#Course");
  window.location.hash = hash;
  h$1(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });
  });
  const sidebarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    height: "100vh",
    padding: "20px",
    width: "200px"
  };
  const contentStyle = {
    padding: "0px 10px",
    width: "100%"
  };
  const menuItems = [{
    label: "我须留意",
    url: "#Home"
  }, {
    label: "选课管理",
    url: "#Course"
  }, {
    label: "教学评估",
    url: "#Review"
  }, {
    label: "考务管理",
    url: "#Examination"
  }, {
    label: "综合查询",
    url: "#Query"
  }];
  const Comp = HashRouter.find(route => route.hash == window.location.hash).component;
  return h$2("div", {
    className: "DIS(flex)"
  }, h$2("nav", {
    style: sidebarStyle,
    className: "sidebar"
  }, h$2("ul", {
    role: "list"
  }, menuItems.map(item => h$2("li", null, h$2("a", {
    href: item.url
  }, item.label)))), h$2("button", null, "\u9000\u51FA\u767B\u5F55")), h$2("main", {
    style: contentStyle
  }, h$2("section", {
    id: "intereactive"
  }, h$2(Comp, {
    key: hash
  }))));
}
class PanelPage extends Page {
  constructor() {
    super();
    this.url = "/login";
    this.title = "Login";
    this.initPage();
    this.injectNewPage();
  }
  initPage() {
    const originalBody = document.body;
    const newBody = document.createElement("body");
    originalBody.parentNode.replaceChild(newBody, originalBody);
    this.originalPage = originalBody.innerHTML;
    originalBody.innerHTML = "";
  }
  injectNewPage() {
    P(h$2(MainView, null), document.body);
  }
}

(function main() {
  console.log("Copy right @RiverTwilight");
  disableStyle();
  if (isLogged()) {
    switch (window.location.pathname) {
      case "/loginAction.do":
        console.log("登录成功");
        new PanelPage(window.location.pathname);
        break;
      default:
        document.body.style.background = "black";
    }
  } else {
    new LoginPage(window.location.pathname);
  }
})();
function disableStyle() {
  document.querySelectorAll("link[href='/css/newcss/project.css']").forEach(sheet => sheet.disabled = true);
}
function isLogged() {
  return !document.title.includes("登录");
}
