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
		outputTrophies(cur);
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
		ueberpruefen(cur);
	}, inter);

}


function ueberpruefen(cp) {
	console.log(el.clientHeight);
	el.setAttribute("style", "height:" + height * cp + "px ; top:" + (800 - height * cp) + "px");




}
