var images = [];
(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        regimgtot = img.length,
        tot = regimgtot + arguments.length;
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
      alert(this.src + " failed to load");
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
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].onload = imgLoaded;
        images[i].onerror = imgFailed;
        images[i].src = loadbar.arguments[i];
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar(
      "/jessica/portfolio/pictures/characters/1med.jpg",
      "/jessica/portfolio/pictures/characters/2med.jpg",
      "/jessica/portfolio/pictures/characters/3med.jpg",
      "/jessica/portfolio/pictures/characters/4med.jpg",
      "/jessica/portfolio/pictures/characters/5med.jpg",
      "/jessica/portfolio/pictures/characters/6med.jpg",
      "/jessica/portfolio/pictures/characters/7med.jpg",
      "/jessica/portfolio/pictures/characters/8med.jpg",
      "/jessica/portfolio/pictures/characters/9med.jpg",
      "/jessica/portfolio/pictures/characters/10med.jpg"
  ), false);
}());

/*
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
*/
