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
};