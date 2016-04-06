window.onload = function() {

  /* 
  /   Navigation zwischen Tower, Fight, Training und Trophies
  */
  document.getElementById('nav_tower').addEventListener("click", clickNavLink);
	document.getElementById('nav_fight').addEventListener("click", clickNavLink);
	document.getElementById('nav_training').addEventListener("click", clickNavLink);
	document.getElementById('nav_trophies').addEventListener("click", clickNavLink);


  function clickNavLink(){
  	var x = this.getAttribute("id").replace("nav", "content");
  	var allContent = document.querySelectorAll("div[id^='content_']");

  	for (var i = 0; i < allContent.length; i++) {
  		allContent[i].style.display = "none";
  	}
 
  	document.getElementById(x).style.display = "block";
  }

  /* 
  /   Navigation im Fight zwischen Funktionen, Vektoren und Textbeispielen
  */
  document.getElementById('btn_funktionen').addEventListener("click", functionClick);
  document.getElementById('btn_vektoren').addEventListener("click", functionClick);
  document.getElementById('btn_textbsp').addEventListener("click", functionClick);
  
  function functionClick(){
    var x = this.getAttribute("id").replace("btn", "tab");
    var allContent = document.querySelectorAll("div[id^='tab_']");

    for (var i = 0; i < allContent.length; i++) {
      allContent[i].style.display = "none";
    }
 
    document.getElementById(x).style.display = "block";
  }

  /* 
  /   Navigation im Fight zwischen Funktionen, Vektoren und Textbeispielen
  */
  function setPoints(poi){
    window.localStorage.setItem('CurPoints', poi);
  }

  function getPoints(){
    var cur = window.localStorage.getItem('CurPoints');
    alert("Neuer Durchgang");
  }

  function getPointsInt(inter){
    setInterval(function(){ 
      var cur = window.localStorage.getItem('CurPoints');
      var a = document.getElementById("points");
      outputTrophies(cur);
      ueberpruefen(cur);
    }, inter);
  }

  function outputTrophies(points){
    var links = ["./images/trophies/gauss_trophy.svg", "./images/trophies/leibniz_trophy.svg", "./images/trophies/pythagoras_trophy.svg", "./images/trophies/qmark.png", "./images/trophies/qmark.png", "./images/trophies/qmark.png"];
    for (var i = 0; i < Math.floor(points/5); i++) {
      var x = document.getElementsByClassName("trophy");
      x[i].src = links[i];
    }

  }

  function ueberpruefen(cp) {
    el.setAttribute("style", "height:" + height * cp + "px ; top:" + (600 - height * cp) + "px");

  }
  setPoints(11);
  getPointsInt(2000);
  /* 
  /   Tower wachsen lassen.
  */
  el = document.getElementById("rectpartie");
    height = el.clientHeight;


};
