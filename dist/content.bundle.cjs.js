'use strict';

var n,l$1,u$1,t$1,o$1,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v$1=Array.isArray;function h$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,t,o,null)}function d$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function g$1(n,l){if(null==l)return n.__?g$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$1(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!x.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x);}function x(){var n,l,u,i,o,r,e,c;for(t$1.sort(f$1);n=t$1.shift();)n.__d&&(l=t$1.length,i=void 0,o=void 0,e=(r=(u=n).__v).__e,(c=u.__P)&&(i=[],(o=h$1({},r)).__v=r.__v+1,L(c,r,o,u.__n,void 0!==c.ownerSVGElement,null!=r.__h?[e]:null,i,null==e?g$1(r):e,r.__h),M(i,r),r.__e!=e&&m$1(r)),t$1.length>l&&t$1.sort(f$1));x.__r=0;}function P(n,l,u,i,t,o,r,f,e,a){var h,p,y,_,b,m,w,x=i&&i.__k||s$1,P=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?d$1(null,_,null,null,_):v$1(_)?d$1(k$1,{children:_},null,null,null):_.__b>0?d$1(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(y=x[h])||y&&_.key==y.key&&_.type===y.type)x[h]=void 0;else for(p=0;p<P;p++){if((y=x[p])&&_.key==y.key&&_.type===y.type){x[p]=void 0;break}y=null;}L(n,_,y=y||c$1,t,o,r,f,e,a),b=_.__e,(p=_.ref)&&y.ref!=p&&(w||(w=[]),y.ref&&w.push(y.ref,null,_),w.push(p,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===y.__k?_.__d=e=C(_,e,n):e=$(n,_,y,x,b,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=g$1(y));}for(u.__e=m,h=P;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=A(i).nextSibling),q(x[h],x[h]));if(w)for(h=0;h<w.length;h++)O(w[h],w[++h],w[++h]);}function C(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?C(i,l,u):$(u,i,i,t,i.__e,l));return l}function $(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=A(u)))return i;return null}function H(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||T(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T(n,o,l[o],u[o],i);}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$1(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,i,t,o,r,f,e,c){var s,a,p,y,d,_,g,m,w,x,C,S,$,A,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof I){if(m=u.props,w=(s=I.contextType)&&t[s.__c],x=s?w?w.props.value:s.__:t,i.__c?g=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(m,x):(u.__c=a=new b$1(m,x),a.constructor=I,a.render=B$1),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=x,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h$1({},a.__s)),h$1(a.__s,I.getDerivedStateFromProps(m,a.__s))),y=a.props,d=a.state,a.__v=u,p)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==I.getDerivedStateFromProps&&m!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,x)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=m,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,d,_);});}if(a.context=x,a.props=m,a.__P=n,S=l$1.__r,$=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[];}else do{a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++$<25);a.state=a.__s,null!=a.getChildContext&&(t=h$1(h$1({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(y,d)),P(n,v$1(H=null!=s&&s.type===k$1&&null==s.key?s.props.children:s)?H:[H],u,i,t,o,r,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),g&&(a.__E=a.__=null),a.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function M(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N(l,u,i,t,o,r,f,e){var s,a,h,y=i.props,d=u.props,_=u.type,k=0;if("svg"===_&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!_&&(_?s.localName===_:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===_)return document.createTextNode(d);l=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,e=!1;}if(null===_)y===d||e&&l.data===d||(l.data=d);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||c$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!e){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(H(l,d,y,o,e),h)u.__k=[];else if(P(l,v$1(k=u.props.children)?k:[k],u,i,t,o&&"foreignObject"!==_,r,f,r?r[0]:i.__k&&g$1(i,0),e),null!=r)for(k=r.length;k--;)null!=r[k]&&p$1(r[k]);e||("value"in d&&void 0!==(k=d.value)&&(k!==l.value||"progress"===_&&!k||"option"===_&&k!==y.value)&&T(l,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==l.checked&&T(l,"checked",k,y.checked,!1));}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function q(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&q(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function B$1(n,l,u){return this.constructor(n,u)}function D(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!o&&t||i).__k=y(k$1,null,[u]),r||c$1,c$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),M(f,u);}n=s$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h$1({},this.state),"function"==typeof n&&(n=n(h$1({},u),this.props)),n&&h$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$1(this));},b$1.prototype.render=k$1,t$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0;

var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

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
  const [codeImg, setCodeImg] = h("");
  const [username, setUsername] = h("");
  const [password, setPassword] = h("");
  p(() => {
    setCodeImg(`/validateCodeAction.do?random=${Math.random()}`);
  }, []);
  return y("form", {
    method: "post",
    name: "loginForm",
    action: "/loginAction.do"
  }, y("input", {
    type: "hidden",
    name: "zjh1"
  }), y("input", {
    type: "hidden",
    name: "tips"
  }), y("input", {
    type: "hidden",
    name: "lx"
  }), y("input", {
    type: "hidden",
    name: "evalue"
  }), y("input", {
    type: "hidden",
    name: "eflag"
  }), y("input", {
    type: "hidden",
    name: "fs"
  }), y("input", {
    type: "hidden",
    name: "dzslh"
  }), y("div", {
    className: "W(100%)"
  }, y("label", {
    for: "username"
  }, "\u5E10\u53F7"), y("input", {
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
  })), y("div", null, y("label", {
    for: "password"
  }, "\u5BC6\u7801"), y("input", {
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
  })), y("br", null), y("label", {
    for: "validation"
  }, "\u9A8C\u8BC1\u7801"), y("div", {
    className: "DIS(flex) ub-validationField"
  }, y("input", {
    id: "validation",
    type: "text",
    name: "v_yzm",
    autoComplete: "off",
    maxLength: "4",
    alt: "notnull"
  }), y("div", {
    className: "ub-validationImg"
  }, y("img", {
    src: codeImg,
    height: "100%",
    width: "100%",
    id: "vchart"
  }))), y("br", null), y("div", {
    className: "MTB(10px) DIS(flex) JC(center) FD(column)"
  }, y("div", {
    className: "DIS(flex) JC(center) FD(column) W(100%)"
  }, y("button", {
    onClick: () => login()
  }, "\u767B\u5F55"))));
};
const MainView$2 = () => {
  const [focus, setFocus] = h(false);
  return y("div", {
    style: {
      height: "100vh"
    }
  }, y("div", {
    className: "DIS(flex) JC(center) FD(row) H(100%)"
  }, y("div", {
    id: "neko-warpper"
  }, focus && y("img", {
    className: "hider",
    src: getImage("/img/hide.webp"),
    alt: "URP",
    border: "0"
  }), !focus && y("img", {
    className: "hider",
    src: getImage("/img/look.webp"),
    alt: "URP",
    border: "0"
  })), y("div", {
    className: "DIS(flex) JC(center) FD(column)"
  }, y("div", {
    className: "ub-loginBox"
  }, y("a", {
    className: "darkOnly",
    href: ""
  }, y("img", {
    src: getImage("/img/logo_landscape_dark.png"),
    alt: "URP",
    border: "0"
  })), y("a", {
    className: "lightOnly",
    href: ""
  }, y("img", {
    src: getImage("/img/logo_landscape_light.png"),
    alt: "URP",
    border: "0"
  })), y(LoginForm, {
    handleFocus: setFocus
  }), y("p", {
    className: "copyright"
  }, "\u7248\u6743\u6240\u6709 \xA9 \u5317\u4EAC\u6E05\u5143\u4F18\u8F6F\u79D1\u6280\u6709\u9650\u516C\u53F8", y("br", null), "\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002", y("br", null), "Redesign with \u2764\uFE0F By \xA0", y("a", {
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
    D(y(MainView$2, null), document.body);
  }
}

function MainView$1() {
  return y("div", {
    style: {
      height: "100%"
    },
    className: "DIS(flex) JC(center)"
  }, y("div", {
    className: "empty-notice"
  }, y("img", {
    width: 200,
    src: getImage("/img/sticker.webp")
  }), y("h3", {
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
    D(y(MainView$1, null), document.body);
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
  return y("div", null, y("iframe", {
    width: "100%",
    height: "100%",
    src: url
  }));
});

var Subpage = (({
  childRoute
}) => {
  const [tab, setTab] = h(childRoute[0].path || "xjInfoAction.do?oper=xjxx");
  const tabRoute = childRoute.find(route => route.path == tab);
  return y("div", null, y("div", {
    className: "DIS(flex) JC(center) tab-container"
  }, childRoute.map(route => {
    return y("div", {
      onClick: () => {
        setTab(route.path);
      },
      className: `${tab == route.path ? "active" : ""} tab`
    }, route.title);
  })), y("br", null), y("div", {
    id: "framebody"
  }, y(Frame, {
    url: tabRoute.path,
    title: tabRoute.title
  })));
});

function MainView() {
  const [hash, setHash] = h("#Notice");
  p(() => {
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
  return y("div", {
    className: "DIS(flex) JC(center)"
  }, y("main", {
    className: "DIS(flex)"
  }, y("nav", {
    style: sidebarStyle,
    className: "sidebar"
  }, y("div", {
    className: "navbar-menu",
    role: "list"
  }, Object.values(Router).map(item => y("div", {
    className: "navbar-item",
    key: item.path
  }, hash == item.path && y("div", {
    className: "inner-corner top-corner"
  }), y("div", {
    className: `${hash == item.path ? "active" : ""} navbar-item-text`
  }, y("a", {
    href: item.path
  }, item.title)), hash == item.path && y("div", {
    className: "inner-corner bottom-corner"
  })))), y("div", {
    className: "DIS(flex) JC(center) signout"
  }, y("button", {
    onClick: handleSignout
  }, "\u6CE8\u9500"))), y("section", {
    style: contentStyle
  }, y("div", {
    id: "intereactive"
  }, y(Subpage, {
    key: hash,
    childRoute: currentRoute.children
  })))), y("img", {
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
    D(y(MainView, null), document.body);
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

main();
