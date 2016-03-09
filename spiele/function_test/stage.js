(function ($) {
  function Main() {
    var stage = new createjs.Stage("myCanvas");
    var skater = new Skater();

    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", handleTick);

    startGame();
    drawStage();
    createButtons(stage);
    stage.addChild(skater);

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


    $("button.func").click(function(target){
      console.log("button clicked: " , target.currentTarget.id);
      tempfunc = new Mathfunction(target.currentTarget.id, 700, 500, 400, stage, skater);
    });

    $("button.clear").click(function(target){
      console.log("button clicked: " , target.currentTarget.id);
      skater.clear();
      tempfunc.die();

      window.location.href=window.location.href
      //TODO odere ZEILE WEITERMACHEN!!!
      drawStage();
    });

    $("button.newfuncz").click(function(target){
      $(".func").remove();
      createButtons(stage);
      $("button.func").click(function(target){
        tempfunc = new Mathfunction(target.currentTarget.id, 700, 500, 400, stage, skater);
      });
    });



    function drawStage(){
      drawLinePlusSkaterFrames(0,650,700,500,skater,stage);


    //var mfunction = new Mathfunction("8x2+2x1+3", 700, 500, 400, stage, skater);
  }

  function createButtons(superStage){
    var buttonFunc = "";
    var buttonFunc2 = "";
    var rand = [];
    var i = 0;

    while(i<=2){
      rand[i] = Math.floor(Math.random() * 10) + 1;
      i++;
    }

    i = 0;

    buttonFunc = rand[0] + "x2+" + rand[1] + "x1+" + rand[2];
    buttonFunc2 = rand[0] + "x<span class='super'>2</span> + " + rand[1] + "x + " + rand[2];

    $('.container').append('<button class="func btn btn-primary" id=' + buttonFunc + '>' + buttonFunc2 + '</button>');

    while(i<=3){
      rand[i] = Math.floor(Math.random() * 10) + 1;
      i++;
    }

    i = 0;

    buttonFunc = rand[0] + "x3+" + rand[1] + "x2+" + rand[2] + "x1+" + rand[3];
    buttonFunc2 = rand[0] + "x<span class='super'>3</span> + " + rand[1] + "x<span class='super'>2</span> + " + rand[2] + "x + " + rand[3];

    $('.container').append('<button class="func btn btn-primary" id=' + buttonFunc + '>' + buttonFunc2 + '</button>');

    while(i<=4){
      rand[i] = Math.floor(Math.random() * 10) + 1;
      i++;
    }

    i = 0;

    buttonFunc = rand[0] + "x4+" + rand[1] + "x3+" + rand[2] + "x2+" + rand[3] + "x1+" + rand[4];
    buttonFunc2 = rand[0] + "x<span class='super'>4</span> + " + rand[1] + "x<span class='super'>3</span> + " + rand[2] + "x<span class='super'>2</span> + " + rand[3] + "x + " + rand[4];

    $('.container').append('<button class="func btn btn-primary" id=' + buttonFunc + '>' + buttonFunc2 + '</button>');

    while(i<=5){
      rand[i] = Math.floor(Math.random() * 10) + 1;
      i++;
    }

    i = 0;

    buttonFunc = rand[0] + "x5+" + rand[1] + "x4+" + rand[2] + "x3+" + rand[3] + "x2+" + rand[4] + "x1+" + rand[5];
    buttonFunc2 = rand[0] + "x<span class='super'>5</span> + " + rand[1] + "x<span class='super'>4</span> + " + rand[2] + "x<span class='super'>3</span> + " + rand[3] + "x<span class='super'>2</span> + " + rand[4] + "x + " + rand[5];

    $('.container').append('<button class="func btn btn-primary" id=' + buttonFunc + '>' + buttonFunc2 + '</button>');

  }    

    function handleTick(event) {
      stage.update();
    }


  };

  window.Main = Main;
}(jQuery));
