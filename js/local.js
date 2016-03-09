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
		console.log("Aktuelle Punkte: " + cur);
	}, inter);
}

window.onload = function(){
	setPoints(6);
	getPointsInt(5000);
}