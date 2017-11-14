function OnImageLoaded (img) {
  alert ("The image has been loaded: " + img.src);
}

function OnImageFailed (img) {
  alert ("The image has not been loaded: " + img.src);
}


function PreloadImage (src) {
    var img = new Image ();
    img.onload = function () {OnImageLoaded (this)};
    img.onerror = function() {OnImageFailed(this)};
    img.src = src;
}

window.onload = function(){
  PreloadImage ("/pictures/characters/1med.jpg");
  PreloadImage ("/pictures/characters/2med.jpg");
}();
