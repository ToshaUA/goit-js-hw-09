!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,n){var o=Math.random()>.3;return new Promise((function(t,i){o?t({position:e,delay:n}):i({position:e,delay:n})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,u=n.amount;o=Number(o.value),t=Number(t.value),u=Number(u.value);for(var a=1;a<=u;a+=1)r(a,o).then((function(e){var n=e.position,o=e.delay;setTimeout((function(){i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})).catch((function(e){var n=e.position,o=e.delay;setTimeout((function(){i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})),o+=t}))}();
//# sourceMappingURL=03-promises.8a9434dc.js.map