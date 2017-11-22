(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar(input_images) {
    var images = [];
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        regimgtot = img.length,
        images_size = input_images.length;
        tot = regimgtot + images_size;
    //alert ("Total images: " + tot);
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      //alert(this.src + " succesfully loaded");
      if(c === tot) return doneLoading();
    }
    function imgFailed(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      //alert(this.src + " failed to load");
      if(c === tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var j = 0; j < regimgtot; j++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgFailed;
      tImg.src     = img[j].src;
    }
    for (var i = 0; i < images_size; i++) {
        images[i] = new Image();
        images[i].onload = imgLoaded;
        images[i].onerror = imgFailed;
        images[i].src = input_images[i];
    }
  }

var images_temp = ["/jessica/portfolio/pictures/sketches/1med.jpg",
      "/jessica/portfolio/pictures/sketches/2med.jpg",
      "/jessica/portfolio/pictures/sketches/3med.jpg",
      "/jessica/portfolio/pictures/sketches/4med.jpg",
      "/jessica/portfolio/pictures/sketches/5med.jpg",
      "/jessica/portfolio/pictures/sketches/6med.jpg",
      ];
var images_final = [
    "/pictures/sketches/1med.jpg",
    "/pictures/sketches/2med.jpg",
    "/pictures/sketches/3med.jpg",
    "/pictures/sketches/4med.jpg",
    "/pictures/sketches/5med.jpg",
    "/pictures/sketches/6med.jpg",
    "/pictures/sketches/7med.jpg",
    "/pictures/sketches/1sm.jpg",
    "/pictures/sketches/2sm.jpg",
    "/pictures/sketches/3sm.jpg",
    "/pictures/sketches/4sm.jpg",
    "/pictures/sketches/5sm.jpg",
    "/pictures/sketches/6sm.jpg",
    "/pictures/sketches/7sm.jpg"
      ];
  document.addEventListener('DOMContentLoaded', loadbar(images_final), false);
}());
