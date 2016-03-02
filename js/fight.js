window.onload = function() {

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