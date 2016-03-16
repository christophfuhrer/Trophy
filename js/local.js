function setPoints(poi){
	window.localStorage.setItem('CurPoints', poi);
}

function getPoints(){
	var cur = window.localStorage.getItem('CurPoints');
	console.log("Aktuelle Punkte: " + cur);
	alert("Neuer Durchgang");
}

function getPointsInt(inter){
	setInterval(function(){ 
		var cur = window.localStorage.getItem('CurPoints');
		var a = document.getElementById("points");
		console.log("Aktuelle Punkte: " + cur);
		ueberpruefen(cur);
	}, inter);

}

function ueberpruefen(cp) {
	console.log(el.clientHeight);
	el.setAttribute("style", "height:" + height * cp + "px ; top:" + (800 - height * cp) + "px");




}