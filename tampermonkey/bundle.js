'use strict';

var n,l$1,u$1,t$1,o$1,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$1.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||setTimeout)(g$1);}function g$1(){for(var n;g$1.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));});}function w$1(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$1(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A(u,i,i,t,i.__e,l));return l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d$1(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$1.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p$1&&null==a.key?a.props.children:a,w$1(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$1(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$1(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$1(i,u=(!o&&t||i).__k=h$1(p$1,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}n=e$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d$1.prototype.render=p$1,t$1=[],g$1.__r=0;

var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(n){return o=1,y(B,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))};}return o.__N||o.__}function h(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

class Page {
  url;
  originalPage;
  constructor(url) {
    // const userinfo =
    // 	document.querySelectorAll(".leftuser01 td")[1].innerText;

    // console.log(userinfo);

    this.url = url;
    this.hideOriginalPage();
  }
  hideOriginalPage() {
    const container = document.createElement("div");
    container.innerHTML = document.body.innerHTML;
    this.originalPage = container;
    container.remove();
    document.body.innerHTML = "";
  }
}

function getImage(url) {
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getURL) {
    return chrome.runtime.getURL(url);
  } else if (typeof GM !== "undefined" && GM.info) {
    return {
      "/img/logo_landscape_light.png": "",
      "/img/hide.webp": "https://i.ibb.co/R71J7h8/hide.webp",
      "/img/look.webp": "https://i.ibb.co/d6y0Zpb/look.webp",
      "/img/peek.webp": "https://i.ibb.co/F3t4z90/peek.webp",
      "/img/sticker.webp": "https://i.ibb.co/F3t4z90/sticker.webp",
      "/img/logo_landscape_dark.png": "https://i.ibb.co/p0z8x8D/logo-landscape-dark.png",
      "/img/logo_landscape_light.png": "https://i.ibb.co/4S7Kt93/logo-landscape-light.png"
    }[url];
  } else {
    throw new Error("Unsupported environment");
  }
}

const LoginForm = ({
  handleFocus
}) => {
  const [codeImg, setCodeImg] = p("");
  const [username, setUsername] = p("");
  const [password, setPassword] = p("");
  h(() => {
    setCodeImg(`/validateCodeAction.do?random=${Math.random()}`);
  }, []);
  return h$1("form", {
    method: "post",
    name: "loginForm",
    action: "/loginAction.do"
  }, h$1("input", {
    type: "hidden",
    name: "zjh1"
  }), h$1("input", {
    type: "hidden",
    name: "tips"
  }), h$1("input", {
    type: "hidden",
    name: "lx"
  }), h$1("input", {
    type: "hidden",
    name: "evalue"
  }), h$1("input", {
    type: "hidden",
    name: "eflag"
  }), h$1("input", {
    type: "hidden",
    name: "fs"
  }), h$1("input", {
    type: "hidden",
    name: "dzslh"
  }), h$1("div", {
    className: "W(100%)"
  }, h$1("label", {
    for: "username"
  }, "\u5E10\u53F7"), h$1("input", {
    type: "text",
    name: "zjh",
    id: "username",
    className: "MW(100%)",
    onChange: e => {
      console.log(e);
      setUsername(e.target.value);
    },
    value: username,
    alt: "notnull"
  })), h$1("div", null, h$1("label", {
    for: "password"
  }, "\u5BC6\u7801"), h$1("input", {
    type: "password",
    name: "mm",
    id: "password",
    onFocus: () => {
      handleFocus(true);
    },
    onBlur: () => {
      handleFocus(false);
    },
    onChange: e => {
      setPassword(e.target.value);
    },
    value: password,
    alt: "notnull",
    className: "MW(100%)"
  })), h$1("br", null), h$1("label", {
    for: "validation"
  }, "\u9A8C\u8BC1\u7801"), h$1("div", {
    className: "DIS(flex) ub-validationField"
  }, h$1("input", {
    id: "validation",
    type: "text",
    name: "v_yzm",
    autoComplete: "off",
    maxLength: "4",
    alt: "notnull"
  }), h$1("div", {
    className: "ub-validationImg"
  }, h$1("img", {
    src: codeImg,
    height: "100%",
    width: "100%",
    id: "vchart"
  }))), h$1("br", null), h$1("div", {
    className: "MTB(10px) DIS(flex) JC(center) FD(column)"
  }, h$1("div", {
    className: "DIS(flex) JC(center) FD(column) W(100%)"
  }, h$1("button", {
    onClick: () => login()
  }, "\u767B\u5F55"))));
};
const MainView$2 = () => {
  const [focus, setFocus] = p(false);
  return h$1("div", {
    style: {
      height: "100vh"
    }
  }, h$1("div", {
    className: "DIS(flex) JC(center) FD(row) H(100%)"
  }, h$1("div", {
    id: "neko-warpper"
  }, focus && h$1("img", {
    className: "hider",
    src: getImage("/img/hide.webp"),
    alt: "URP",
    border: "0"
  }), !focus && h$1("img", {
    className: "hider",
    src: getImage("/img/look.webp"),
    alt: "URP",
    border: "0"
  })), h$1("div", {
    className: "DIS(flex) JC(center) FD(column)"
  }, h$1("div", {
    className: "ub-loginBox"
  }, h$1("a", {
    className: "darkOnly",
    href: ""
  }, h$1("img", {
    src: getImage("/img/logo_landscape_dark.png"),
    alt: "URP",
    border: "0"
  })), h$1("a", {
    className: "lightOnly",
    href: ""
  }, h$1("img", {
    src: getImage("/img/logo_landscape_light.png"),
    alt: "URP",
    border: "0"
  })), h$1(LoginForm, {
    handleFocus: setFocus
  }), h$1("p", {
    className: "copyright"
  }, "\u7248\u6743\u6240\u6709 \xA9 \u5317\u4EAC\u6E05\u5143\u4F18\u8F6F\u79D1\u6280\u6709\u9650\u516C\u53F8", h$1("br", null), "\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002", h$1("br", null), "Redesign with \u2764\uFE0F By \xA0", h$1("a", {
    href: "https://github.com/rivertwilight"
  }, "@RiverTwilight"))))));
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
    P(h$1(MainView$2, null), document.body);
  }
}

function MainView$1() {
  return h$1("div", {
    style: {
      height: "100%"
    },
    className: "DIS(flex) JC(center)"
  }, h$1("div", {
    className: "empty-notice"
  }, h$1("img", {
    width: 200,
    src: getImage("/img/sticker.webp")
  }), h$1("h3", {
    className: "Texta(center)"
  }, "\u6682\u65F6\u6CA1\u6709\u5185\u5BB9")));
}
let PanelPage$1 = class PanelPage extends Page {
  constructor(emptyMessage) {
    super();
    this.emptyMessage = emptyMessage;
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
    P(h$1(MainView$1, null), document.body);
  }
};

var Router = {
  notice: {
    title: "我须留意",
    path: "#Notice",
    children: [{
      title: "✉️查看消息",
      path: "xsxxviewAction.do"
    }, {
      title: "📂常用文件下载",
      path: "ileUploadDownloadAction.do?actionType=4"
    }]
  },
  course: {
    title: "选课管理",
    path: "#Course",
    children: [{
      title: "📗本学期课表",
      path: "xkAction.do?actionType=6"
    }, {
      title: "📚历年课表",
      path: "lnkbcxAction.do"
    }, {
      title: "选课公告",
      path: "ggglAction.do?actionType=4"
    }, {
      title: "网上选课",
      path: "xkAction.do"
    }, {
      title: "退课",
      path: "xkAction.do?actionType=7"
    }]
  },
  personal: {
    title: "个人管理",
    path: "#Personal",
    children: [{
      title: "🖨️学籍信息",
      path: "xjInfoAction.do?oper=xjxx"
    }, {
      title: "学籍异动",
      path: "xjInfoAction.do?oper=ydxx"
    }, {
      title: "🏆奖惩信息",
      path: "xjInfoAction.do?oper=jcxx"
    }, {
      title: "辅修方案注册",
      path: "xsFabgsqAction.do?oper=faxdsq1"
    }]
  },
  exam: {
    title: "考务管理",
    path: "#Exam",
    children: [{
      title: "✍️考试安排",
      path: "ksApCxAction.do?oper=getKsapXx"
    }, {
      title: "考试报名",
      path: "kwBmAction.do?oper=getKsList"
    }, {
      title: "考试成绩",
      path: "cjSearchAction.do?oper=getKscjList"
    }]
  },
  resource: {
    title: "教学资源",
    path: "#Resource",
    children: [{
      title: "🏫教室课表",
      path: "jskbcxAction.do?oper=jskb_lb"
    }, {
      title: "教师课表",
      path: "lskbcxAction.do?oper=lskb_lb"
    }, {
      title: "班级课表",
      path: "jkbcxAction.do?oper=bjkb_lb"
    }, {
      title: "课程课表",
      path: "kckbcxAction.do?oper=kckb_lb"
    }, {
      title: "自习教室查询",
      path: "xszxcxAction.do?oper=xszxcx_lb"
    }, {
      title: "教室使用查询",
      path: "jxlCxAction.do?oper=ori"
    }]
  },
  review: {
    title: "教学评估",
    path: "#Review",
    children: [{
      title: "📤评估公告",
      path: "ggglAction.do?actionType=5"
    }, {
      title: "教学评估",
      path: "jxpgXsAction.do?oper=listWj"
    }, {
      title: "毕业生评估",
      path: "byspgXsAction.do?oper=listWj"
    }, {
      title: "教材评估",
      path: "studentAction.do?oper=stu"
    }]
  },
  query: {
    title: "综合查询",
    path: "#Query",
    children: [{
      title: "🪴全部及格成绩",
      path: "gradeLnAllAction.do?type=ln&oper=qbinfo&lnxndm=2022-2023%D1%A7%C4%EA%C7%EF(%C1%BD%D1%A7%C6%DA)"
    }, {
      title: "课程属性成绩",
      path: "gradeLnAllAction.do?type=ln&oper=sx"
    }, {
      title: "方案成绩",
      path: "gradeLnAllAction.do?type=ln&oper=fa"
    }, {
      title: "不及格成绩",
      path: "gradeLnAllAction.do?type=ln&oper=bjg"
    },
    // {
    // 	title: "本学期成绩",
    // 	path: "bxqcjcxAction.do",
    // },
    {
      title: "方案完成情况",
      path: "gradeLnAllAction.do?type=ln&oper=lnfaqk&flag=zx"
    }, {
      title: "指导性教学计划",
      path: "gradeLnAllAction.do?type=ln&oper=lnFajhKcCjInfo&lnxndm=2022-2023%D1%A7%C4%EA%C7%EF(%C1%BD%D1%A7%C6%DA)"
    },
    // {
    // 	title: "本学期课程安排",
    // 	path: "courseSearchAction.do?temp=1",
    // },
    {
      title: "课程基本信息",
      path: "kclbAction.do"
    }, {
      title: "收费标准查询",
      path: "sfCxAction.do?oper=current"
    }, {
      title: "审查体系",
      path: "scTxQueryAction.do?oper=CurrentScTxQuery"
    }, {
      title: "审查结论",
      path: "scJlQueryAction.do?oper=CurrentScJlQuery"
    }]
  }
};

var Frame = (({
  url,
  title
}) => {
  return h$1("div", null, h$1("iframe", {
    width: "100%",
    height: "100%",
    src: url
  }));
});

var Subpage = (({
  childRoute
}) => {
  const [tab, setTab] = p(childRoute[0].path || "xjInfoAction.do?oper=xjxx");
  const tabRoute = childRoute.find(route => route.path == tab);
  return h$1("div", null, h$1("div", {
    className: "DIS(flex) JC(center) tab-container"
  }, childRoute.map(route => {
    return h$1("div", {
      onClick: () => {
        setTab(route.path);
      },
      className: `${tab == route.path ? "active" : ""} tab`
    }, route.title);
  })), h$1("br", null), h$1("div", {
    id: "framebody"
  }, h$1(Frame, {
    url: tabRoute.path,
    title: tabRoute.title
  })));
});

function MainView() {
  const [hash, setHash] = p("#Notice");
  h(() => {
    if (window.location.hash === "") {
      console.log("No hash");
      window.location.hash = hash;
    }
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });
  }, []);
  const sidebarStyle = {
    backgroundColor: "var(--siderbar-bg)",
    color: "var(--c-themed)",
    height: "100vh",
    padding: "0",
    width: "200px",
    position: "relative"
  };
  const contentStyle = {
    padding: "0px 10px",
    width: "100%"
  };
  const currentRoute = F(() => Object.values(Router).find(route => route.path == hash), [hash]);
  const handleSignout = () => {
    window.open("/");
  };
  return h$1("div", {
    className: "DIS(flex) JC(center)"
  }, h$1("main", {
    className: "DIS(flex)"
  }, h$1("nav", {
    style: sidebarStyle,
    className: "sidebar"
  }, h$1("ul", {
    role: "list"
  }, Object.values(Router).map(item => h$1("li", {
    key: item.path,
    className: `${hash == item.path ? "active" : ""}`
  }, h$1("a", {
    href: item.path
  }, item.title)))), h$1("div", {
    className: "DIS(flex) JC(center) signout"
  }, h$1("button", {
    onClick: handleSignout
  }, "\u6CE8\u9500"))), h$1("section", {
    style: contentStyle
  }, h$1("div", {
    id: "intereactive"
  }, h$1(Subpage, {
    key: hash,
    childRoute: currentRoute.children
  })))), h$1("img", {
    id: "peeker",
    src: getImage("/img/peek.webp"),
    alt: "peeker",
    border: "0"
  }));
}
class PanelPage extends Page {
  constructor() {
    super();
    this.url = "/login";
    this.title = "Login";
    this.username = "";
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
    P(h$1(MainView, null), document.body);
  }
}

function main() {
  disableStyle();
  if (isLogged()) {
    removeScatters([".Linetop", "#tblHead", "img[src='/img/icon/alert.gif']"]);
    switch (window.location.pathname) {
      case "/loginAction.do":
        new PanelPage(window.location.pathname);
        break;
      case "/xsxxviewAction.do":
        const message = document.querySelectorAll("#user tbody tr");
        if (message.length === 0) {
          document.querySelector("#user").remove();
        }
        formatStyle();
        new PanelPage$1();
        break;
      case "/lnkbcxAction.do":
        formatButton();
        break;
      case "/jskbcxAction.do":
        formatButton();
        break;
      case "/lskbcxAction.do":
        formatButton();
        break;
      case "/kckbcxAction.do":
        formatButton();
        break;
      default:
        formatStyle();
        console.log("No page matched");
    }
  } else {
    new LoginPage(window.location.pathname);
  }
}
function disableStyle() {
  document.querySelectorAll("link[href='/css/newcss/project.css']").forEach(sheet => sheet.disabled = true);
  document.querySelectorAll("link[href='/css/newcss/login.css']").forEach(sheet => sheet.disabled = true);
}
function removeScatters(selectors) {
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(item => {
      item.remove();
    });
  });
}
function isLogged() {
  return !document.title.includes("登录");
}
function formatStyle() {
  const errorMessage = document.querySelectorAll("table.error");
  const emptyMessage = Array.from(document.querySelectorAll("font[color='red']"));
  if (errorMessage.length > 0 || emptyMessage.length > 0 && emptyMessage.some(message => message.innerText.includes("暂时没公告"))) {
    errorMessage.forEach(item => {
      item.remove();
    });
    emptyMessage.forEach(item => {
      item.remove();
    });
    new PanelPage$1();
  }
  const narrowTable = document.getElementById("user");
  const wideTable = document.getElementsByClassName("titleTop2");
  if (narrowTable) {
    narrowTable.style.width = "95vw";
  }
  if (wideTable) {
    Array.from(wideTable).forEach(table => {
      table.style.margin = "0 auto";
    });
  }
}
function formatButton() {
  const oldButtons = Array.from(document.querySelectorAll("#btnSearch"));
  if (oldButtons.length > 0) {
    console.info("Old button detected!");
    oldButtons.forEach(parent => {
      let newButton = document.createElement("button");
      newButton.onclick = parent.onclick;
      newButton.innerText = "查询";
      parent.after(newButton);
      parent.remove();
    });
  }
}

function GM_addStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function injectCss() {
	GM_addStyle(`
	
		/**
 * Bolt.css
 * Version 0.5.0
 * https://github.com/tbolt/boltcss
 *
 * Sections
 * 1. Content sectioning
 * 2. Text content
 * 3. Inline text semantics
 * 4. Image and multimedia
 * 5. Tables
 * 6. Forms
 * 7. Interactive elements
 *
 */

:root {
	--c-themed: #4589ee;
	--highlight-border-radius: 7px;
	--border-radius: 11px;
	--siderbar-bg: var(--background-main);

	--links: #0f6dff;
	--background-body: #fff;
	--background-main: #f1f1f1;
	--background-inputs: #fcfcfc;
	--text: #1c1d1e;
	--border: #dddddd;
	--focus-highlight: #b8b8b8;
	--shadow-color: #545454;
	--table-highlight: #f1f1f1;
	--select-icon-url: url("data:image/svg+xml,%3Csvg width='292' height='292' viewBox='0 0 292 292' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath id='Path' fill='%23222222' stroke='none' d='M 287 69 C 283.606537 65.469971 278.895844 63.513214 274 63.600006 L 18.4 63.600006 C 13.4 63.600006 9.1 65.400009 5.5 69 C 1.984143 72.328568 -0.005267 76.958466 -0 81.800003 C -0 86.800003 1.8 91.100006 5.4 94.699997 L 133.399994 222.600006 C 137 226.200012 141.199997 228 146.199997 228 C 151.199997 228 155.399994 226.200012 159 222.600006 L 287 94.600006 C 290.5 91.100006 292.399994 86.800003 292.399994 81.800003 C 292.399994 76.800003 290.5 72.600006 286.899994 69 Z'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
	:root {
		--siderbar-bg: #333;
		--c-themed: #4589ee;
		--links: #4589ee;
		--background-body: #0f0f0f;
		--background-main: #222;
		--background-inputs: #222;
		--text: #efefef;
		--border: #444;
		--focus-highlight: #888;
		--shadow-color: #bebebe;
		--table-highlight: #222;
		--select-icon-url: url("data:image/svg+xml,%3Csvg width='292' height='292' viewBox='0 0 292 292' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath id='Path' fill='%23ffffff' stroke='none' d='M 287 69 C 283.606537 65.469971 278.895844 63.513214 274 63.600006 L 18.4 63.600006 C 13.4 63.600006 9.1 65.400009 5.5 69 C 1.984143 72.328568 -0.005267 76.958466 -0 81.800003 C -0 86.800003 1.8 91.100006 5.4 94.699997 L 133.399994 222.600006 C 137 226.200012 141.199997 228 146.199997 228 C 151.199997 228 155.399994 226.200012 159 222.600006 L 287 94.600006 C 290.5 91.100006 292.399994 86.800003 292.399994 81.800003 C 292.399994 76.800003 290.5 72.600006 286.899994 69 Z'/%3E%3C/svg%3E");
	}
}

*,
::after,
::before {
	box-sizing: border-box;
}

html,
body {
	margin: 0;
	font-size: 12pt;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	color: var(--text);
	background: var(--background-body);
}

/* Content sectioning */
address {
	font-style: normal;
	line-height: 1.6rem;
}

/* Todo: Revisit this and try to find a way to handle margin depending on float direction  */
aside {
	width: 40%;
	padding: 0.84rem;
	margin: 0.16rem;
	font-style: italic;
	color: var(--text);
	background-color: var(--background-main);
	border-radius: var(--border-radius);
}

/* No styles provided */
footer {
}
header {
}

h1 {
	font-size: 2.5rem;
}

h2 {
	font-size: 2rem;
}

h3 {
	font-size: 1.75rem;
}

h4 {
	font-size: 1.5rem;
}

h5 {
	font-size: 1.25rem;
	font-weight: normal;
}

h6 {
	font-size: 1rem;
	font-weight: normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

h1,
h2,
h3,
h4,
b,
strong,
th {
	font-weight: 700;
}

/* Not provided */
hgroup {
}

/* Not provided */
main {
}

/* Not provided */
nav {
}

/* Not provided */
section {
}

/* Text content */
blockquote {
	position: relative;
	padding-left: 1.5rem;
	margin: 0;
}

blockquote:before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	height: 100%;
	border-left: 7px solid var(--border);
	border-radius: 6px;
}

dd {
	margin-left: 0;
	padding-bottom: 11px;
}

dl {
}

dt {
	font-weight: bold;
}

figcaption {
	padding-top: 10px;
	font-size: 0.8rem;
}

figure {
	margin: 0;
}

hr {
	border: 2px solid var(--border);
}

ul,
ol {
}

li {
	line-height: 1.6em;
}

p {
	display: block;
	line-height: 1.6em;
}

/* Inline text elements */
a {
	color: var(--links);
}

a:active,
a:hover,
a:focus {
	text-decoration: none;
}

mark,
samp,
kbd,
code,
time {
	border-radius: var(--highlight-border-radius, 4px);
	box-decoration-break: clone;
	-webkit-box-decoration-break: clone;
}

mark {
	background-color: #fffab7;
	padding: 3px 5px;
}

samp {
	display: inline-block;
	font-weight: bold;
	padding: 10px 20px;
	background-color: var(--background-main);
	color: var(--text);
}

kbd,
time {
	padding: 2px 4px;
	background-color: var(--background-main);
	color: var(--text);
}

code,
pre {
	font-size: 1em;
	padding: 2px 4px;
	background: var(--background-main);
	border: 1px solid darkgray;
	max-width: fit-content;
	overflow-x: auto;
}

pre > code {
	padding: 10px;
	border: 0;
	display: block;
	overflow-x: auto;
}

pre {
	margin: 0;
	border-radius: var(--border-radius);
}

sup,
sub {
	line-height: normal;
}

/* Image and multimedia */
audio,
img,
video {
	border-radius: var(--border-radius);
	max-width: 100%;
}

img {
	height: auto;
}

/* Tables */
table {
	width: fit-content;
	border: 1px solid var(--background-main);
	background: var(--background-main);
	border-radius: var(--border-radius);
}

table tr:last-child td:first-child {
	border-bottom-left-radius: 8px;
}

table tr:last-child td:last-child {
	border-bottom-right-radius: 8px;
}

table tr:first-child th:first-child {
	border-top-left-radius: 8px;
}

table tr:first-child th:last-child {
	border-top-right-radius: 8px;
}

th {
	background-color: var(--background-main);
}

td {
	background: var(--background-body);
}

td,
th {
	text-align: left;
	padding: 8px;
}

thead {
	border-collapse: collapse;
}

tfoot {
	border-top: 1px solid black;
}

table tr:hover td,
tbody tr:nth-child(even):hover td {
	background-color: var(--table-highlight);
}

/* Form elements */
input,
button,
select,
optgroup,
textarea {
	margin: 0;
}

button,
select,
input[type="submit"],
input[type="button"],
input[type="checkbox"],
input[type="range"],
input[type="radio"] {
	cursor: pointer;
}

button {
	color: var(--text);
	background-color: var(--background-main);
	font-family: inherit;
	font-size: inherit;
	padding: 6px 15px 6px 15px;
	border: 1px solid transparent;
	border-radius: 6px;
	box-shadow: 0px 1px 1.5px rgba(158, 158, 158, 0.6);
}

button:active {
	box-shadow: none;
	border: 1px solid var(--border);
}

button:disabled,
button[disabled] {
	box-shadow: none;
	border: 1px solid var(--border);
	cursor: initial;
	opacity: 0.55;
}

label {
	display: block;
	max-width: fit-content;
}

input {
	font-size: 1em;
	background-color: var(--background-inputs);
	border: 1px solid var(--border);
	color: var(--text);
	margin: 6px 0px;
	padding: 11px;
	border-radius: var(--border-radius);
	max-width: fit-content;
	outline: none;
	display: inline-block;
	appearance: none;
}

input[type="checkbox"],
input[type="radio"] {
	vertical-align: middle;
	position: relative;
	margin-right: 0.33em;
	margin-top: 0.31em;
}

input[type="checkbox"] {
	border-radius: 7px;
}

input[type="radio"] {
	border-radius: 100%;
}

input[type="checkbox"]:checked,
input[type="radio"]:checked {
	border: 1px solid var(--links);
	background: var(--links);
}

input[type="checkbox"]:checked {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}

input[type="radio"]:checked {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}

input[type="range"] {
	vertical-align: middle;
	padding: 0;
}

textarea {
	font-family: inherit;
	font-size: 1em;
	background-color: var(--background-inputs);
	border: 1px solid var(--border);
	padding: 11px;
	color: var(--text);
	border-radius: var(--border-radius);
	outline: none;
	/* resize: none;  Todo: research if there is a non-js way to style/move grippie */
	max-width: 100%;
}

select {
	display: inline-block;
	vertical-align: middle;
	font-size: 1rem;
	color: var(--text);
	padding: 0.6em 2em 0.5em 0.8em;
	margin: 6px 0px;
	max-width: fit-content;
	box-sizing: border-box;
	border: 1px solid var(--border);
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	border-radius: 0.5em;
	appearance: none;
	background-color: var(--background-inputs);
	background-image: var(--select-icon-url);
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
}

/* Todo: update styles when using multiple mode */
select:is([multiple]) {
	background: none;
	height: fit-content;
}

fieldset:focus-within,
input:focus-within,
textarea:focus-within,
select:focus-within {
	border-color: var(--focus-highlight);
}

fieldset:hover,
input:hover,
textarea:hover,
select:hover {
	border-color: var(--focus-highlight);
}

meter {
	height: 2.2em;
	vertical-align: middle;
}

fieldset {
	border: 1px var(--border) solid;
	border-radius: 6px;
	margin: 0;
	margin-bottom: 6px;
	padding: 10px;
	max-width: fit-content;
}

/* Interactive elements */
details {
	border: 1px solid #aaa;
	border-radius: 7px;
	padding: 0.5em 0.5em 0;
}

summary {
	font-weight: bold;
	margin: -0.5em -0.5em 0;
	padding: 0.5em;
}

details[open] {
	padding: 0.5em;
}

details[open] summary {
	border-bottom: 1px solid #aaa;
	margin-bottom: 0.5em;
}

		
		.ub-loginBox {
	background: var(--background-body);
	width: 450px;
	min-height: 400px;
	height: fit-content;
	border-radius: 30px;
	padding: 50px;
}

body {
	overflow-y: hidden;
}

.ub-validationField {
	height: 60px;
}

.ub-validationImg {
	min-width: 40%;
	height: inherit;
	padding: 6px 0;
	display: block;
	align-self: center;
}

.ub-validationImg > img {
	height: 100%;
	width: 100%;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

#validation {
	min-width: 60%;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.copyright {
	color: var(--text);
	text-align: center;
	font-size: 0.9em;
}

.sidebar li {
	height: 50px;
	width: 100%;
	line-height: 50px;
	text-decoration: none;
	font-size: 1.1em;
	text-align: center;
	font-weight: bolder;
}

.sidebar ul {
	transform: translateY(-40px);
}

.sidebar {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.sidebar li:hover {
	background-color: var(--background-main);
}

.sidebar li.active {
	background-color: var(--background-body);
}

.sidebar a {
	text-decoration: none;
}

#intereactive {
	width: 100%;
	padding: 20px 30px;
	height: 95vh;
}

iframe,
frame,
frameset {
	border: none;
}

.signout {
	position: absolute;
	bottom: 15;
	left: 0;
	right: 0;
}
.signout button {
	color: rgb(194, 86, 86) !important;
}

main {
	min-width: 72vw;
	max-width: 1400px;
}

.tab-container {
	padding: 4px 2px;
	border: 2px solid var(--border);
	border-radius: 24px;
	overflow-x: hidden;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* Internet Explorer and Microsoft Edge */
}

.tab {
	color: var(--text);
	height: 40px;
	line-height: 40px;
	border-radius: 20px;
	text-align: center;
	overflow: hidden;
	cursor: pointer;
	margin-right: 10px;
	padding: 0 1em;
}

.tab.active {
	background-color: var(--c-themed);
	color: white;
}

.empty-notice {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
}

#framebody {
	max-height: 100%;
	border: 2px solid var(--border);
	border-radius: 20px;
	overflow: hidden;
	scrollbar-width: none;
}

#peeker {
	position: fixed;
	left: 0;
	height: 100px;
	bottom: 0;
	opacity: .7;
	transform: translateX(-22px);
	transition: transform .3s;
	cursor: grab;
}

#peeker:hover{
	transform: scale(1.2, 1.2);
}

.hider {
	opacity: 0.7;
	margin-top: 100px;
	height: 35vw;
	width: 35vw;
	bottom: 0;
	position: absolute;
}

#neko-warpper {
	width: 35vw;
	height: 100vh;
	position: relative;
}

	`);

	GM_addStyle(`
		/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
	margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
	list-style: none;
}

ul {
	padding: 0;
}

/* Set core root defaults */
html:focus-within {
	scroll-behavior: smooth;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
}

.darkOnly {
	display: none;
}

@media (prefers-color-scheme: dark) {
	.lightOnly {
		display: none;
	}
	.darkOnly {
		display: unset;
	}
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
	max-width: 100%;
	display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
	html:focus-within {
		scroll-behavior: auto;
	}

	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}

/**
 * =============================================================================
 * ************   Atomic Css   ************
 * =============================================================================
 */
.Bgc\\(red\\) {
	background: red !important;
}

.Bgc\\(white\\) {
	background: white !important;
}

.Textc\\(secondary\\) {
	color: #8590a6;
}

.Textc\\(primary\\) {
	color: #fff;
}

.Textc\\(primary\\)\\:h :hover {
	color: #fff;
}

.Textc\\(secondary\\)\\:h :hover {
	color: #8590a6;
}

.Texta\\(center\\) {
	text-align: center;
}

.Overf\\(hidden\\) {
	overflow: hidden;
}

.Cur\\(pointer\\) {
	cursor: pointer;
}

.P\\(10px\\) {
	padding: 10px;
}

.P\\(20px\\) {
	padding: 20px;
}

.MTB\\(10px\\) {
	margin-top: 10px;
	margin-bottom: 10px;
}

.Br\\(30px\\) {
	border-radius: 30px;
}

.Br\\(3px\\) {
	border-radius: 3px;
}

.Bra\\(30px\\) {
	border-radius: 30px 30px 0px 0px;
}

.Bru\\(30px\\) {
	border-radius: 0px 0px 30px 30px;
}

.Dis\\(flex\\) {
	display: flex;
}

.JC\\(center\\) {
	justify-content: center;
}

.Pos\\(fixed\\) {
	position: fixed;
}

.FD\\(row\\) {
	flex-direction: row;
}

.FD\\(column\\) {
	flex-direction: column;
}

.H\\(100\\%\\) {
	height: 100%;
}

.W\\(100\\%\\) {
	width: 100%;
}
.MW\\(100\\%\\) {
	min-width: 100%;
}
.MW\\(50\\%\\) {
	min-width: 50%;
}

	`);
}

// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
injectCss();
main();
