var totalTimeToLoad = 0;
function OnImageLoaded () {
  //alert ("The image has been loaded in " + this.src);
}

function OnImageFailed (img) {
  alert ("The image has not been loaded: " + this.src);
}

/*
TRY THIS
var preloadImage = function (url) {
    try {
        var _img = new Image();
        _img.src = url;
    } catch (e) { }
}
*/

var images = [];
(function(){
  function id(v){ return document.getElementById(v); }
  function preload() {
      for (var i = 0; i < arguments.length; i++) {
          var startTime = new Date().getTime();
          images[i] = new Image();
          images[i].onload = OnImageLoaded;
          images[i].onerror = OnImageFailed;
          images[i].src = preload.arguments[i];
      }
  }
  document.addEventListener('DOMContentLoaded', preload(
      "/pictures/characters/1med.jpg",
      "/pictures/characters/2med.jpg",
      "/pictures/characters/3med.jpg",
      "/pictures/characters/4med.jpg",
      "/pictures/characters/5med.jpg",
      "/pictures/characters/6med.jpg",
      "/pictures/characters/7med.jpg",
      "/pictures/characters/8med.jpg",
      "/pictures/characters/9med.jpg",
      "/pictures/characters/10med.jpg",
      "/pictures/characters/1sm.jpg",
      "/pictures/characters/2sm.jpg",
      "/pictures/characters/3sm.jpg",
      "/pictures/characters/4sm.jpg",
      "/pictures/characters/5sm.jpg",
      "/pictures/characters/6sm.jpg",
      "/pictures/characters/7sm.jpg",
      "/pictures/characters/8sm.jpg",
      "/pictures/characters/9sm.jpg",
      "/pictures/characters/10sm.jpg"
  ), false);
}());



function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

/*
addLoadEvent(preload(
    "/pictures/characters/1med.jpg",
    "/pictures/characters/2med.jpg",
    "/pictures/characters/3med.jpg",
    "/pictures/characters/10med.jpg"
));
