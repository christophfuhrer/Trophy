document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("root");
    var canvas = document.getElementById("game");

    var stage = new createjs.Stage(canvas);
    createjs.Ticker.addEventListener("tick", stage);

    var content = new createjs.Container();
    stage.addChild(content);

    make_game(root, content);
});
