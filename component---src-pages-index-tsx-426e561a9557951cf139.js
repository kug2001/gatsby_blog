(self.webpackChunkbidge_builder=self.webpackChunkbidge_builder||[]).push([[691],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(s,o({attr:o({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,a=e.attr,i=e.size,c=e.title,l=u(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},5348:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return he}});var r=n(7294),a=n(5820),i="home-module--boxStackCard--pi4yI",o="home-module--titStack--WHNzR",u=n(885),c=n(5861),l=n(2982),s=(n(5743),n(7757)),f=n.n(s);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=function(e,t,n){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},b=function(e,t){for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(v){var r,a=d(v(t));try{for(a.s();!(r=a.n()).done;){n=r.value;y.call(t,n)&&g(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},E=function(e){return Array.isArray(e)},x=function(e){return E(e)?e:[e]},w=function(e){var t=function(e){return x(e).forEach((function(e){var t;return r.set(Symbol(null==(t=e.char)?void 0:t.innerText),b({},e))})),this},n=function(){return Array.from(r.values())},r=new Map;return t(e),{add:t,set:function(e,t){var n=(0,l.Z)(r.keys());r.set(n[e],t)},wipe:function(){r=new Map,t(e)},reset:function(){r.forEach((function(e){return delete e.done}))},destroy:function(e){return r.delete(e)},done:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?r.delete(e):r.get(e).done=!0},getItems:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?n():n().filter((function(e){return!e.done}))},getQueue:function(){return r},getTypeable:function(){return n().filter((function(e){return e.typeable}))}}},k=function(e){return Array.from(e)},N=function(e){return document.createTextNode(e)},S=function e(t){return(0,l.Z)(t.childNodes).forEach((function(t){if(t.nodeValue)return(0,l.Z)(t.nodeValue).forEach((function(e){t.parentNode.insertBefore(N(e),t)})),void t.remove();e(t)})),t},T=function(e){var t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,S(t.body)},O="data-typeit-id",Z="ti-cursor",I={started:!1,completed:!1,frozen:!1,destroyed:!1},M={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:function(){},afterString:function(){},beforeStep:function(){},afterStep:function(){},afterComplete:function(){}},C="[".concat(O,"]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");function L(e){for(var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:function(e){var t;return(null==(t=e.classList)?void 0:t.contains(Z))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),a=[];t=r.nextNode();)t.originalParent=t.parentNode,a.push(t);return n?a.reverse():a}function A(e){return L(T(e))}function D(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?A(e):k(e).map(N)}var P=function(e){return document.createElement(e)},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=P("style");n.id=t,n.appendChild(N(e)),document.head.appendChild(n)},H=function(e){return E(e)||(e=[e/2,e/2]),e},j=function(e,t){return Math.abs(Math.random()*(e+t-(e-t))+(e-t))},z=function(e){return e/2};function B(e){var t=e.speed,n=e.deleteSpeed;return n=null!==n?n:t/3,e.lifeLike?[j(t,z(t)),j(n,z(n))]:[t,n]}var _=function(e){return e.forEach(clearTimeout),[]},F=function(){return Math.random().toString().substring(2,9)},V=function(e){return"value"in e},W=function(e){return V(e)?k(e.value):L(e,!0).filter((function(e){return!(e.childNodes.length>0)}))},q=function(e,t){new IntersectionObserver((function(n,r){n.forEach((function(n){n.isIntersecting&&(t(),r.unobserve(e))}))}),{threshold:1}).observe(e)},Q=function(e){return"function"==typeof e?e():e},J=function(e){return Number.isInteger(e)},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t["querySelector".concat(n?"All":"")](e)},X=function(e,t){if(V(e))e.value="".concat(e.value).concat(t.textContent);else{t.innerHTML="";var n,r="BODY"===(null==(n=t.originalParent)?void 0:n.tagName)?e:t.originalParent||e;r.insertBefore(t,U(".ti-cursor",r)||null)}},Y=function(e,t,n){return Math.min(Math.max(t+e,0),n.length)},G=function(e,t){return Object.assign({},e,t)},$=function(e){if(e){var t=e.parentNode;(t.childNodes.length>1?e:t).remove()}},K=function(e,t,n){var r=t[n-1],a=U(".".concat(Z),e);(e=(null==r?void 0:r.parentNode)||e).insertBefore(a,r||null)};function ee(e){return"string"==typeof e?U(e):e}var te=function(e){return/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML)},ne=function(){var e=(0,c.Z)(f().mark((function e(t,n,r){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a=function(){var n=(0,c.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();r.push(setTimeout(a,n||0))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),re={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"","margin-left":"-.125em","margin-right":".125em"},ae=function(e,t,n){var r="[".concat(O,"='").concat(e,"']"),a="".concat(r," .").concat(Z),i=getComputedStyle(n),o=Object.entries(re).reduce((function(e,t){var n=(0,u.Z)(t,2),r=n[0],a=n[1];return"".concat(e," ").concat(r,": var(--ti-cursor-").concat(r,", ").concat(a||i[r],");")}),"");R("@keyframes blink-".concat(e," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(a," { display: inline; letter-spacing: -1em; ").concat(o," animation: blink-").concat(e," ").concat(t.cursorSpeed/1e3,"s infinite; } ").concat(a,".with-delay { animation-delay: 500ms; } ").concat(a,".disabled { animation: none; }"),e)},ie=function(e,t){return new Array(t).fill(e)},oe=function(e){var t=e.queueItems,n=e.selector,r=e.cursorPosition,a=e.to;if(J(n))return-1*n;var i=new RegExp("END","i").test(a),o=n?(0,l.Z)(t).reverse().findIndex((function(e){var t=e.char,r=t.parentElement,a=r.matches(n);return!(!i||!a)||a&&r.firstChild.isSameNode(t)})):-1;return o<0&&(o=i?0:t.length-1),o-r+(i?0:1)},ue=function(){var e=(0,c.Z)(f().mark((function e(t,n){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=function(){var e=(0,c.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null==(n=t.func)?void 0:n.call(globalThis));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!t.delay){e.next=6;break}return e.next=4,n((0,c.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)}))),t.delay);case 4:e.next=8;break;case 6:return e.next=8,r();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=function(){var e=(0,c.Z)(f().mark((function e(n,r){var a,i=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.length>2&&void 0!==i[2]&&i[2],!fe.frozen){e.next=4;break}return e.next=4,new Promise((function(e){t.unfreeze=function(){fe.frozen=!1,e()}}));case 4:if(e.t0=a,e.t0){e.next=8;break}return e.next=8,de.beforeStep(t);case 8:return e.next=10,ne(n,r,ce);case 10:if(e.t1=a,e.t1){e.next=14;break}return e.next=14,de.afterStep(t);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a=function(){return V(re)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return B(de)[e]},o=function(){return W(re)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.delay;t&&me.add({delay:t})},p=function(e,n){return me.add(e),s(n),t},m=function(){return null!=se?se:le},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{func:function(){return j(e)}},{func:function(){return j(de)}}]},h=function(e){var t=de.nextStringDelay;me.add([{delay:t[0]}].concat((0,l.Z)(e),[{delay:t[1]}]))},y=function(){if(!a()){var e=P("span");return e.className=Z,ve?(e.innerHTML=T(de.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)}},g=function(){var e=(0,c.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!a()&&he&&re.appendChild(he),ve&&ae(pe,de,re);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){ve&&he&&(he.classList.toggle("disabled",e),he.classList.toggle("with-delay",!e))},E=function(){var e=de.strings.filter((function(e){return!!e}));e.forEach((function(n,r){if(t.type(n),r+1!==e.length){var a=de.breakLines?[{func:function(){return A(P("BR"))},typeable:!0}]:ie({func:U,delay:i(1)},me.getTypeable().length);h(a)}}))},k=function(){var e=(0,c.Z)(f().mark((function e(t){var n,a,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=m(),e.t0=n,!e.t0){e.next=5;break}return e.next=5,L({value:n});case 5:a=d(o()),e.prev=6,a.s();case 8:if((u=a.n()).done){e.next=14;break}return u.value,e.next=12,r(U,i(1));case 12:e.next=8;break;case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(6),a.e(e.t1);case 19:return e.prev=19,a.f(),e.finish(19);case 22:me.reset(),me.set(0,{delay:t});case 24:case"end":return e.stop()}}),e,null,[[6,16,19,22]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=re.innerHTML;return t?(re.innerHTML="",de.startDelete?(re.innerHTML=t,S(re),h([{func:U}]),e):t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e},O=function(){var e=(0,c.Z)(f().mark((function e(){var n,a,i,l,s,p,m,v=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!(v.length>0&&void 0!==v[0])||v[0],fe.started=!0,e.prev=2,a=d(me.getQueue()),e.prev=4,a.s();case 6:if((i=a.n()).done){e.next=18;break}if(l=(0,u.Z)(i.value,2),s=l[0],!(p=l[1]).done){e.next=10;break}return e.abrupt("continue",16);case 10:if(p.typeable&&!fe.frozen&&b(!0),!(!p.deletable||p.deletable&&o().length)){e.next=14;break}return e.next=14,ue(p,r);case 14:b(!1),me.done(s,!n);case 16:e.next=6;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:if(n){e.next=28;break}return e.abrupt("return",t);case 28:return fe.completed=!0,e.next=31,de.afterComplete(t);case 31:if(de.loop){e.next=33;break}throw"";case 33:m=de.loopDelay,r((0,c.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(m[0]);case 2:O();case 3:case"end":return e.stop()}}),e)}))),m[1]),e.next=39;break;case 37:e.prev=37,e.t1=e.catch(2);case 39:return e.abrupt("return",t);case 40:case"end":return e.stop()}}),e,null,[[2,37],[4,20,23,26]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,c.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le=Y(t,le,o()),K(re,o(),le);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return X(re,e)},j=function(){var e=(0,c.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de=G(de,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,c.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a()){e.next=3;break}return re.value="",e.abrupt("return");case 3:return o().forEach($),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=o();e.length&&(a()?re.value=re.value.slice(0,-1):$(e[le]))};this.break=function(e){return p({func:function(){return A(P("BR"))},typeable:!0},e)},this.delete=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Q(e);var n=v(t),r=e,a=t.instant,o=t.to,u=me.getTypeable(),c=null===r?u.length:J(r)?r:oe({queueItems:u,selector:r,cursorPosition:m(),to:o});return p([n[0]].concat((0,l.Z)(ie({func:U,delay:a?0:i(1),deletable:!0},c)),[n[1]]),t)},this.empty=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p({func:z},e)},this.exec=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=v(n);return p([r[0],{func:function(){return e(t)}},r[1]],n)},this.move=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Q(e);var n=v(t),r=t.instant,a=t.to,o=oe({queueItems:me.getTypeable(),selector:null===e?"":e,to:a,cursorPosition:m()}),u=o<0?-1:1;return se=m()+o,p([n[0]].concat((0,l.Z)(ie({func:function(){return L(u)},delay:r?0:i()},Math.abs(o))),[n[1]]),t)},this.options=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=Q(e),j(e),p({},t)},this.pause=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p({delay:Q(e)},t)},this.type=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Q(e);var r,a,o=n.instant,u=v(n),s=D(e,de.html),d=s.map((function(e){return{func:function(){return A(e)},char:e,delay:o||te(e)?0:i(),typeable:e.nodeType===Node.TEXT_NODE}})),m=[u[0],{func:(a=(0,c.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,de.beforeString(e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))),function(){return a.apply(this,arguments)})}].concat((0,l.Z)(d),[{func:(r=(0,c.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,de.afterString(e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))),function(){return r.apply(this,arguments)})},u[1]]);return p(m,n)},this.is=function(e){return fe[e]},this.destroy=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];ce=_(ce),Q(e)&&he&&$(he),fe.destroyed=!0},this.freeze=function(){fe.frozen=!0},this.unfreeze=function(){},this.reset=function(e){for(var t in!this.is("destroyed")&&this.destroy(),e?(me.wipe(),e(this)):me.reset(),le=0,fe)fe[t]=!1;return re[a()?"value":"innerHTML"]="",this},this.go=function(){return fe.started?this:(g(),de.waitUntilVisible?(q(re,O.bind(this)),this):(O(),this))},this.flush=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return g(),O(!1).then(e),this},this.getQueue=function(){return me},this.getOptions=function(){return de},this.updateOptions=function(e){return j(e)},this.getElement=function(){return re};var re=ee(e),ce=[],le=0,se=null,fe=G({},I),de=G(M,n);de=G(de,{html:!a()&&de.html,nextStringDelay:H(de.nextStringDelay),loopDelay:H(de.loopDelay)});var pe=F(),me=w([{func:function(){},delay:de.startDelay}]);re.dataset.typeitId=pe,R(C);var ve=de.cursor&&!a(),he=y();de.strings=N(x(de.strings)),de.strings.length&&E()},le=r.useRef,se=r.useEffect,fe=r.useState,de=function(e){var t=le(null),n=le(null),a=e,i=a.options,o=a.as,c=a.children,l=a.getBeforeInit,s=a.getAfterInit,f=function(e,t){var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&v){var a,i=d(v(e));try{for(i.s();!(a=i.n()).done;)r=a.value,t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r])}catch(o){i.e(o)}finally{i.f()}}return n}(a,["options","as","children","getBeforeInit","getAfterInit"]),p=fe(!0),m=(0,u.Z)(p,2),g=m[0],E=m[1],x=fe(null),w=(0,u.Z)(x,2),k=w[0],N=w[1],S=o;return se((function(){var e;e=Object.assign({},i),c&&t.current&&(e.strings=t.current.innerHTML),N(e),E(!1)}),[i]),se((function(){var e;k&&((null==(e=n.current)?void 0:e.updateOptions(k))||(n.current=new ce(t.current,k),n.current=l(n.current),n.current.go(),n.current=s(n.current)))}),[k]),se((function(){return function(){var e;return null==(e=n.current)?void 0:e.destroy()}}),[]),r.createElement(S,b({ref:t,children:g?c:null,style:{opacity:g?0:1}},f))};function pe(e,t){var n=t.threshold,a=void 0===n?[.1,.7]:n,i=t.duration,o=void 0===i?.7:i,u=t.delay,c=void 0===u?0:u,l=(t.direction,(0,r.useCallback)((function(t){var n=t[0],r=null==e?void 0:e.current;r&&Array.isArray(a)?n.intersectionRatio<a[0]?(r.style.opacity="0",r.style.transform="translate3d(0, -20%, 0)"):n.intersectionRatio>a[1]&&(r.style.transitionProperty="all",r.style.transitionDuration=o+"s",r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay=c+"s",r.style.opacity="1",r.style.transform="translate3d(0, 0, 0)"):n.isIntersecting&&r&&(r.style.transitionProperty="all",r.style.transitionDuration=o+"s",r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay=c+"s",r.style.opacity="1",r.style.transform="translate3d(0, 0, 0)")}),[]));(0,r.useEffect)((function(){var t,n=null==e?void 0:e.current;if(n)return(t=new IntersectionObserver(l,{threshold:a})).observe(n),function(){return t&&t.disconnect()}}),[l])}de.defaultProps={as:"span",options:{},getBeforeInit:function(e){return e},getAfterInit:function(e){return e}};var me=n(3201),ve=n(9463),he=function(e){var t=e.data,n=t.allMarkdownRemark.edges[0].node,u=n.frontmatter,c=n.html,l=(0,r.useRef)(null),s=(0,r.useRef)(null),f=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null);return pe(s,{}),pe(f,{}),pe(d,{}),pe(p,{}),console.log(t),r.createElement(a.Ar,null,r.createElement("main",{className:"home-module--docMain--Xr1Md",ref:l},r.createElement("h1",{className:"screen_out"},u.title),r.createElement("div",{className:"home-module--areaHead--uu2xe"},r.createElement("p",{className:"home-module--typeit--ilQCc"},r.createElement(de,{options:{speed:50,cursor:!1},getBeforeInit:function(e){return e.type("Welcome to my ho").pause(700).delete(2).pause(200).type("blog!").break().type("My name is Jayden!"),e}}))),r.createElement("article",{className:"home-module--areaContent--LmL3M"},r.createElement("h1",{className:"home-module--contentHead--vtFY1",ref:s},r.createElement("span",null,"저는 사람과 사람을 연결하는 ",r.createElement("br",null)," ",r.createElement("em",null,"Bridge Builder")," 제이든입니다!")),r.createElement("div",{className:"home-module--areaVision--i7+Ge",ref:f},r.createElement("strong",null,"나의 꿈은 ",r.createElement("em",null,"Bridge Builder"),"이란 키워드를 통해 "),r.createElement("strong",null,"세상을 ",r.createElement("em",null,"가치"),"있고 ",r.createElement("em",null,"아름답게"),"하는 것입니다!")),r.createElement("div",{className:"home-module--areaValue--cxu7R",ref:d},r.createElement("strong",null,"제 ",r.createElement("em",null,"가치 키워드"),"는 "),r.createElement("strong",null,r.createElement("em",null,"새롭게"),", ",r.createElement("em",null,"이롭게"),", ",r.createElement("em",null,"아름답게"),", 입니다.")),r.createElement("div",{className:"home-module--areaStack--RS0Xg",ref:p},r.createElement("div",{className:"home-module--areaStackCard--1xo-9"},r.createElement("div",{className:i},r.createElement(ve.vl3,null),r.createElement("span",{className:o},"Javascript")),r.createElement("div",{className:i},r.createElement(me.huN,null),r.createElement("span",{className:o},"React")),r.createElement("div",{className:i},r.createElement(ve.iwP,null),r.createElement("span",{className:o},"Vue")),r.createElement("div",{className:i},r.createElement(ve.WZi,null),r.createElement("span",{className:o},"Typescript")),r.createElement("div",{className:i},r.createElement(ve.s6Z,null),r.createElement("span",{className:o},"Gatsby")),r.createElement("div",{className:i},r.createElement(ve.YFW,null),r.createElement("span",{className:o},"Lodash"))),r.createElement("span",{className:"home-module--txtInfo--MHHoZ"},"위의 스택을 사용하고 공부하고 있습니다.")),r.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-426e561a9557951cf139.js.map