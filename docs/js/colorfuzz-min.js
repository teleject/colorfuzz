var code=function(e){e.preventDefault?e.preventDefault():window.event&&(window.event.returnValue=!1);var t=document.getElementById("pageOutput");return t.src=document.getElementById("checkLink").value,!0},element=window.document.getElementById("eyesightForm");element.addEventListener?element.addEventListener("submit",code,!1):element.attachEvent&&element.attachEvent("onsubmit",code);for(var rad=document.eyesightForm.eyesight,i=0;i<rad.length;i++)rad[i].onclick=function(){var e=this.value,t=document.getElementById("pageOutput");t.className=e,document.getElementById("label").innerHTML=e};