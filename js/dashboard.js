window.onload = function() {
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
};