const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),r=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),clearInterval(r)}));let r=null;
//# sourceMappingURL=01-color-switcher.0d214575.js.map
