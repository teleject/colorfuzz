// 1. When user starts typing into the searchbox, class value "is-active" added to BODY element
	// Causes search form change, etc.

function changeClass() {
	document.body.className += " is-active";
    document.getElementById("urlName").setAttribute("placeholder", "");
}

var urlName = document.getElementById("urlName");
urlName.addEventListener('click', changeClass);

// 2. When Go button is clicked, the URLs is a) checked for formatting and then 2) appearsin the iframe appear.
// 3. Clicking on the radio button, the class value get updated to the iframe.

var code = function (eventObject) {
    if (eventObject.preventDefault) {
        eventObject.preventDefault();
    } else if (window.event) /* for ie */ {
        window.event.returnValue = false;
    }
	var browserFrame = document.getElementById("iframeViewer");
        var url = document.getElementById("urlName").value;
        if (!/^https?:\/\//i.test(url)) {
           url = 'http://' + url;
        }
        browserFrame.src = url;

		// browserFrame.src = document.getElementById("urlName").value;
    return true;
};

var element = window.document.getElementById("urlForm");
if (element.addEventListener) {
    element.addEventListener("submit", code, false);
} else if (element.attachEvent) {
    element.attachEvent("onsubmit", code);
}

var rad = document.urlForm.eyesight;
for(var i = 0; i < rad.length; i++) {
  rad[i].onclick = function() {
    var affliction = this.value;
	var d = document.getElementById("iframeViewer");
	d.className = affliction;
	document.getElementById("label").innerHTML = affliction;
  };
}
