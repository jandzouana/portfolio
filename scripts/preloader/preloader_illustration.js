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

var images_temp = ["/jessica/portfolio/pictures/digital/1med.jpg",
      "/jessica/portfolio/pictures/digital/2med.jpg",
      "/jessica/portfolio/pictures/digital/3med.jpg",
      "/jessica/portfolio/pictures/digital/4med.jpg",
      "/jessica/portfolio/pictures/digital/5med.jpg",
      "/jessica/portfolio/pictures/digital/6med.jpg",
      "/jessica/portfolio/pictures/digital/7med.jpg",
      "/jessica/portfolio/pictures/digital/8med.jpg",
      "/jessica/portfolio/pictures/digital/9med.jpg",
      "/jessica/portfolio/pictures/digital/10med.jpg"
      ];
var images_final = [
    "/pictures/digital/1med.jpg",
    "/pictures/digital/2med.jpg",
    "/pictures/digital/3med.jpg",
    "/pictures/digital/4med.jpg",
    "/pictures/digital/5med.jpg",
    "/pictures/digital/6med.jpg",
    "/pictures/digital/7med.jpg",
    "/pictures/digital/8med.jpg",
    "/pictures/digital/9med.jpg",
    "/pictures/digital/10med.jpg",
    "/pictures/digital/11med.jpg",
    "/pictures/digital/12med.jpg",
    "/pictures/digital/13med.jpg",
    "/pictures/digital/1sm.jpg",
    "/pictures/digital/2sm.jpg",
    "/pictures/digital/3sm.jpg",
    "/pictures/digital/4sm.jpg",
    "/pictures/digital/5sm.jpg",
    "/pictures/digital/6sm.jpg",
    "/pictures/digital/7sm.jpg",
    "/pictures/digital/8sm.jpg",
    "/pictures/digital/9sm.jpg",
    "/pictures/digital/11sm.jpg",
    "/pictures/digital/12sm.jpg",
    "/pictures/digital/13sm.jpg"
    ];
  document.addEventListener('DOMContentLoaded', loadbar(images_temp), false);
}());
