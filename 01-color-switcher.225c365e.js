!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.225c365e.js.map
