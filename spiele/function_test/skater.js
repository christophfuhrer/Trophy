(function ($) {
  var Skater = function() {
    this.initialize();
  }

  console.log("draw geht");
  var p = Skater.prototype = new createjs.Container();

  p.keyFrameArray = new Object();
  p.keyFrameArray.x = [];
  p.keyFrameArray.y = [];
  p.index = 0;


  p.addFrame = function(x, y){
    p.keyFrameArray.x.push(x);
    p.keyFrameArray.y.push(y);
    //console.log("addframe geht" + x + " " + y);
  }

  p.clear = function(){
    p.index = 0;
    p.keyFrameArray.x = [];
    p.keyFrameArray.y = [];
  };

  p.addFrames = function(x, y){
    for (var i = 0; i < x.length; i++) {
      p.addFrame(x[i], y[i]);
    };
    //console.log("addframes geht");
  }


  p.Container_initialize = p.initialize;

  p.initialize = function() {
    this.Container_initialize();

    this.canvas = $("#myCanvas");

    var x = this.canvas.width()/2;
    var y = this.canvas.height()/2;

    var graphics = new createjs.Graphics().beginFill("#000000").drawCircle(0,0,15);
    this.skater = new createjs.Shape(graphics);
    this.skater.x = x;
    this.skater.y = y;



    this.addChild(this.skater);
  }

  p.Container_tick = p._tick;

  p._tick = function(target, type, params) {
    this.Container_tick(target, type, params);

    //Derzeit Loop...
    if(p.index > p.keyFrameArray.x.length || p.index > p.keyFrameArray.y.length ){
      p.index = 0;
    }
    //alert("p.index: " + p.index + "; x-Arraylänge plus wert:"+ p.keyFrameArray.x.length + ", " + p.keyFrameArray.x[p.index] + "\ny-Arraylänge plus wert:"+ p.keyFrameArray.y.length + ", " + p.keyFrameArray.y[p.index]);

    this.skater.x = p.keyFrameArray.x[p.index];
    this.skater.y = p.keyFrameArray.y[p.index];

    p.index++;
  };

  window.Skater = Skater;
}(jQuery));
