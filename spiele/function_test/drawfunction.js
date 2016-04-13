/*TODO:
irgendwo an der richtigen stelle das dead verwenden, kein plan wo wirklich nicht...
bzw. man müsste die objekte iwi killen, da kann man markus fragen, der hat das in fml geschafft...

*/

(function ($) {
  var Mathfunction = function(funcy, x, y, length, stage, skater) {
    this.initialize(funcy, x, y, length, stage, skater);
  }


  var values;
  var dead;
  var terme = [];
  console.log("draw geht");
  var p = Mathfunction.prototype = new createjs.Container();


  function drawFunction(x, y, length, stage, skater){
    var xArray = [];
    var yArray = [];
    var yWert = y;
    var xWert = 0;

    var line = new createjs.Shape();
    line.graphics.setStrokeStyle(3).beginStroke("rgba(0,100,0,1)");
    line.graphics.moveTo(x, y);

    var  startpunktY = 0;
    var divider = 1000;
      if(terme[0].potenz == 2){
        divider = 2000;
      }
      if(terme[0].potenz == 3){
        divider = 500000;
      }
      if(terme[0].potenz == 4){
        divider = 80000000;
      }
      if(terme[0].potenz == 5){
        divider = 20000000000;
      }

    for(var j in terme){
      startpunktY += (terme[j].koeffizient * Math.pow(-length/2, terme[j].potenz))/divider;
    }

    y = y - startpunktY;
    
    //fill xArray, yArray
    for(var i = -length/2; i <= length/2; i++){
      //console.log(i);
      xArray.push(x + (i+length/2));
      yWert = y;
      for(var j in terme){
          yWert += (terme[j].koeffizient * Math.pow(i, terme[j].potenz))/divider;
      }
      yArray.push(yWert);
      //draw the actual function
      line.graphics.lineTo(xArray[i+length/2], yWert);
      if(i%2 == 0){
        skater.addFrame(xArray[i+length/2], yWert);
      }
      yWert = y;
    }
    
    //console.log(yArray);
    //console.log(xArray);
    stage.addChild(line);
    line.graphics.lineTo(900, 600);
    line.graphics.endStroke();
    drawLinePlusSkaterFrames(parseInt(xArray[399]), parseInt(yArray[399]), 900, 600, skater, stage);
  }

function drawLinePlusSkaterFrames(x1,y1,x2,y2,inSkater,inStage){

      var line = new createjs.Shape();
      line.graphics.setStrokeStyle(3).beginStroke("rgba(0,100,0,1)");
      line.graphics.moveTo(x1, y1);
      line.graphics.lineTo(x2, y2);
      line.graphics.endStroke();

      stage.addChild(line);

      var dx = Math.abs(x2-x1);
      var dy = Math.abs(y2-y1);
      var sx = (x1 < x2) ? 1 : -1;
      var sy = (y1 < y2) ? 1 : -1;
      var err = dx-dy;
      var i = 2;

      while(true){
       if(i%2 == 0){
          inSkater.addFrame(x1,y1); 
       }
       i++;
       if ((x1==x2) && (y1==y2)) break;
       var e2 = 2*err;
       if (e2 >-dy){ err -= dy; x1  += sx; }
       if (e2 < dx){ err += dx; y1  += sy; }
     }

   }
  p.Container_initialize = p.initialize;

  p.die = function(){
    dead = true;
  }

  p.initialize = function(funcy, x, y, length, stage, skater) {
    this.Container_initialize();
    dead = false;
    values = funcy.split("+");
    //var minus;
    var koeffizient;
    var potenz;
    for(s in values){
      //minus = values[s].startsWith("-");
      if(values[s].indexOf("x") != -1){
        koeffizient = parseInt(values[s].substring(0, values[s].indexOf("x")));
        potenz = parseInt(values[s].substring(values[s].indexOf("x") + 1, values[s].length));
      } else {
        koeffizient = parseInt(values[s]);
        potenz = 0;
      }
      //potenz = ;
      terme[s] = {koeffizient, potenz};
    }
    console.log(terme);
    console.log(values);

    this.canvas = $("#myCanvas");

    drawFunction(x, y, length, stage, skater);
  }

  p.Container_tick = p._tick;

  p._tick = function(target, type, params) {
    this.Container_tick(target, type, params);
  };

  window.Mathfunction = Mathfunction;
}(jQuery));
