// 1. When user starts typing into the searchbox, class value "is-active" added to BODY element
	// Causes search form change, etc.
// 2. When Go button is clicked, the URLs is a) checked for formatting and then 2) appearsin the iframe appear.
// 3. Clicking on the radio button, the class value get updated to the iframe.

var code = function (eventObject) {
    if (eventObject.preventDefault) {
        eventObject.preventDefault();
    } else if (window.event) /* for ie */ {
        window.event.returnValue = false;
    }


   // var checkLinkSource = document.getElementById("checkLink");
	var browserFrame = document.getElementById("pageOutput");
      browserFrame.src = document.getElementById("checkLink").value;
      // alert(browserFrame.src);

    return true;
};

var element = window.document.getElementById("eyesightForm");
if (element.addEventListener) {
    element.addEventListener("submit", code, false);
} else if (element.attachEvent) {
    element.attachEvent("onsubmit", code);
}

    var rad = document.eyesightForm.eyesight;
   // var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
           // (prev)? console.log(prev.value):null;
           // if(this !== prev) {
            //    prev = this;
           // }
           
        //    console.log(this.value);
            var affliction = this.value;

		  var d = document.getElementById("pageOutput");
		  d.className = affliction;
		  document.getElementById("label").innerHTML = affliction;

        };
    }


/*function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
  if(!pattern.test(str)) {
   alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}*/

