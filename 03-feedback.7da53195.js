function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=g();if(O(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function T(e){return u=void 0,v&&r?y(e):(r=i=void 0,a)}function h(){var e=g(),n=O(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector("input"),S=document.querySelector("textarea"),O=document.querySelector(".feedback-form");let j={email:"",message:""};!function(){if(!localStorage.getItem("feedback-form-state"))return;j.email=JSON.parse(localStorage.getItem("feedback-form-state")).email,j.message=JSON.parse(localStorage.getItem("feedback-form-state")).message,y.value=j.email,S.value=j.message}(),y.addEventListener("input",e(t)((()=>{j.email=y.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),S.addEventListener("input",e(t)((()=>{j.message=S.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),y.value&&S.value?(console.log(j),localStorage.clear(),e.currentTarget.reset(),j={email:"",message:""}):alert("Всі поля повинні бути заповнені!")}));
//# sourceMappingURL=03-feedback.7da53195.js.map
