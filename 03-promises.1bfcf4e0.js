var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("7Y9D8");const i=document.querySelector(".form");function l(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?(r.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`),t({position:e,delay:n})):(r.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`),o({position:e,delay:n}))}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();const n=Number(i.elements.delay.value),t=Number(i.elements.step.value),o=Number(i.elements.amount.value);for(let e=0;e<o;e+=1)l(e+1,n+e*t)}));
//# sourceMappingURL=03-promises.1bfcf4e0.js.map
