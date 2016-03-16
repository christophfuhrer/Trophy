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
		a.textContent = "Punktestand: "+cur;
		console.log("Aktuelle Punkte: " + cur);
		
		outputTrophies(1);
	}, inter);
}

function outputTrophies(points){
	var links = ["./images/trophies/gauss_trophy.svg", "./images/trophies/leibniz_trophy.svg", "./images/trophies/pythagoras_trophy.svg", "./images/trophies/qmark.png", "./images/trophies/qmark.png", "./images/trophies/qmark.png"];
	for (var i = 0; i < points; i++) {
		console.log("Cur Link: "+ links[i]);
		var x = document.getElementsByClassName("trophy");
		x[i].src = links[i];
	}

}
