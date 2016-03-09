var stage;
var stageHeight = 600;
var stageWidth = 1000;

var targetPoint = [(stageWidth/50) - 1, (stageHeight/50) - 1];
var startPoint;
var answerPoint = [2, 2];
var correctVector = [];

var initBall = new createjs.Container();
var dragger = new createjs.Container();
var collisionPoint;

var restart = document.getElementById("restart");

var init = function() {
    stage = new createjs.Stage("canvas");

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);

    drawGrid();

    collisionPoint = generateVector("collision");
    startPoint = generateVector("start");
    
    stage.addChild(drawPoint(targetPoint[0], targetPoint[1], "target"));
    initBall.addChild(drawPoint(startPoint[0], startPoint[1], "point"));
    stage.addChild(drawPoint(collisionPoint[0], collisionPoint[1], "collision"));
    drawVector("initial");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("lightgrey").drawCircle(0, 0, 10);

    dragger.x = dragger.y = 100;
    dragger.addChild(circle);
    stage.addChild(dragger);
    stage.addChild(initBall);

    dragger.on("pressmove",function(evt) {
        // currentTarget will be the container that the event listener was added to:
        dragger.x = Math.round(evt.stageX/50)*50;
        dragger.y = Math.round(evt.stageY/50)*50;

        answerPoint = [dragger.x / 50, (stageHeight/50) - dragger.y / 50];
    });
}


restart.addEventListener("click",function() {
    location.reload();
})

var orgDragger;

// animates the process
var initiateAnimation = function() {

  orgDragger = [dragger.x, dragger.y];

  createjs.Tween.get(initBall)
    .to({x: (collisionPoint[0] * 50) - (startPoint[0] * 50), y: ((stageHeight - (collisionPoint[1] * 50)) - (stageHeight - (startPoint[1] * 50)))}, 500, createjs.Ease.linear());

  createjs.Tween.get(dragger)
    .to({x: (collisionPoint[0] * 50), y: stageHeight - (collisionPoint[1] * 50)}, 500, createjs.Ease.linear());

  window.setTimeout(animateEnd, 550);
}

var animateEnd = function() {

  var markusVektor = addVector(
    [
      ((collisionPoint[0] * 50) - (startPoint[0] * 50)),
      (((stageHeight - (collisionPoint[1] * 50)) - (stageHeight - (startPoint[1] * 50))) * (-1))
    ],
    [
      ((collisionPoint[0] * 50) - orgDragger[0]),
      (((stageHeight - (collisionPoint[1] * 50)) - orgDragger[1]) * (-1))
    ]);
/**
    console.log("SCx" + ((collisionPoint[0] * 50) - (startPoint[0] * 50)));
    console.log("SCy" + (((stageHeight - (collisionPoint[1] * 50)) - (stageHeight - (startPoint[1] * 50))) * (-1)));

    console.log(collisionPoint[0] * 50);
    console.log(dragger.x);

    console.log("ACx" + ((collisionPoint[0] * 50) - orgDragger[0]));
    console.log("ACy" + (((stageHeight - (collisionPoint[1] * 50)) - orgDragger[1])));
*/
    markusVektor[1] = markusVektor[1] * (-1)

  
  createjs.Tween.get(initBall)
    .to({x: initBall.x + markusVektor[0], y: initBall.y + markusVektor[1]}, 500, createjs.Ease.linear());

    window.setTimeout(win, 550);
}

var win = function() {
  initVector = subtractVector(collisionPoint, startPoint);
  answerVector = subtractVector(collisionPoint, answerPoint);
  correctVector = subtractVector(targetPoint, collisionPoint);

  if(compareVector(addVector(initVector, answerVector), correctVector)) {
    var txt_sieg = new createjs.Text("Sieg!", "40px Arial", "#ff7700");
    txt_sieg.x = 400;
    txt_sieg.y = 280;
    stage.addChild(txt_sieg);
  } else {
    var txt_niederlage = new createjs.Text("Niederlage!", "40px Arial", "#ff7700");
    txt_niederlage.x = 400;
    txt_niederlage.y = 280;
    stage.addChild(txt_niederlage);
    console.log(txt_niederlage);

    correctPoint = new createjs.Container();
    initBall.addChild(drawPoint(correctPoint[0], correctPoint[1], "correct"));

  }
}

// a und b sind ARRAYS mit den VEKTOREN drin
var addVector = function(a, b) {
  var x = a[0] + b[0];
  var y = a[1] + b[1];
  return [x,y];
}

var subtractVector = function(a, b) {
  var x = a[0] - b[0];
  var y = a[1] - b[1];
  return [x,y];
}

var compareVector = function(a, b) {
  return (a[0] == b[0] && a[1] == b[1]);
}

var drawGrid = function() {
  var grid = new createjs.Container();
  stage.addChild(grid);

  for(var i = 0; i <= stageWidth; i = i + 50) {
    var line = new createjs.Shape();
    stage.addChild(line);
    line.graphics.setStrokeStyle(1).beginStroke("#BBB");
    line.graphics.moveTo(i, 0);
    line.graphics.lineTo(i, stageHeight);
    line.graphics.endStroke();
  }

  for(var i = 0; i <= stageHeight; i = i + 50) {
    var line = new createjs.Shape();
    stage.addChild(line);
    line.graphics.setStrokeStyle(1).beginStroke("#BBB");
    line.graphics.moveTo(0, i);
    line.graphics.lineTo(stageWidth, i);
    line.graphics.endStroke();
  }
}

var drawPoint = function(x, y, type) {
  var point = new createjs.Shape();
  var color;
  if(type == "target") {
    color = "red";
    size = 20
  } else if(type == "collision") {
    color = "black";
    size = 5;
  } else if (type == "correct") {
    color = "gold";
    size = 10;
  } else {
    color = "black";
    size = 10;
  }

  point.graphics.setStrokeStyle(1).beginFill(color).drawCircle(0, 0, size);
  point.x = x * 50;
  point.y = stageHeight - (y * 50);

  return point;
}

var drawVector = function(p1, p2) {
  var line = new createjs.Shape();
}

var generateVector = function(type) {

  var minX, maxX, minY, maxY;

  if(type == "start") {
    isInvalid = true;

    minX = (stageWidth / 50) / 2;
    maxX = (stageWidth / 50) - 2;

    maxY = 10;
    minY = 7;
    i = 0;
    while(isInvalid) {

      startX = getRandomInt(minX, maxX);
      startY = getRandomInt(minY, maxY);

      startPoint = [startX, (stageHeight/50) - startY];
      startVector = subtractVector(collisionPoint, startPoint);

      imaginePoint = addVector(collisionPoint, startVector);
      imaginePoint = [imaginePoint[0], (stageHeight/50) - imaginePoint[1]];
      tempTargetPoint = [targetPoint[0], (stageHeight/50) - targetPoint[1]];
      potAnsVector = subtractVector(tempTargetPoint, imaginePoint);
      console.log("Pot Ans:" + potAnsVector);

      correctVector = [collisionPoint[0] - potAnsVector[0], (stageHeight / 50) - (collisionPoint[1] + potAnsVector[1])];
      console.log("korrect: " + correctVector)

      if(
          collisionPoint[0] - potAnsVector[0] >= 0 && 
          collisionPoint[0] - potAnsVector[0] <= (stageWidth / 50) && 
          collisionPoint[1] + potAnsVector[1] <= (stageHeight/50) && 
          collisionPoint[1] + potAnsVector[1] >= 0
      ) {
        isInvalid = false;
        console.log("possible");
      } else {
        isInvalid = true;
        i++;
        console.log("impossible " +  i);

        if(i > 10) {
          collisionPoint = generateVector("collision");
        }
      }
    }
    /*
     && 
         (stageHeight/50) - collisionPoint[1] - potAnsVector[1] <= (stageHeight/50)
         */

  } else if (type == "collision") {

    minX = (stageWidth / 50) / 2;
    maxX = (stageWidth / 50) - 2;

    minY = 4;
    maxY = 8;

    startX = getRandomInt(minX, maxX);
    startY = getRandomInt(minY, maxY);
    console.log(startX, (stageHeight/50) - startY);
  } else {
    console.log("ALARM, FALSCHER PARAMETER, ENTWEDER START ODER COLLISON DU HUNDDDDD");
  }

  return [startX, (stageHeight/50) - startY];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleTick() {
  stage.update();
}

function BEWEGEN(evt) {
    // currentTarget will be the container that the event listener was added to:
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
    // make sure to redraw the stage to show the change:
    stage.update();
};

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("keydown", function (event) {
  console.log("ENTER", event.key);
  console.log(event.keyCode);

  if (event.keyCode == 13 || event.key == "Enter") {
    initiateAnimation();
    console.log("HHHIHIHIHIHI");
  }
}, true);