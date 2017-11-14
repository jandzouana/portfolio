/*
$(window).load(function() {
   // PAGE IS FULLY LOADED
   // FADE OUT YOUR OVERLAYING DIV
   $('#overlay').fadeOut();
});
*/
/*
window.onload = function(){
    function id(v){ return document.getElementById(v); }
    function counter() {
    var elements = document.getElementsByClassName("slide");
    var tmp = new Image();
    if(elements.length === 0){
      alert("Nothing to do");
      return;
    }
    alert(elements.length);
    function loaded(){
        alert("Loaded");
    }

    for(var i = 0; i < elements.length; i++){
      var element = elements[i];
      //alert(element);
      var url = (element).style.backgroundImage;
      //alert(url);
      tmp = new Image();
      tmp.onload = loaded;
      tmp.src = url;
    }
    alert("Done");
  }
  document.addEventListener('DOMContentLoaded', counter, false);
}();
*/

To display background image name
/*
var el = $(".slide")[0];
alert(el);
var url = el.css("background-image");
alert(url);
*/
