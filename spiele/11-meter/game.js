/*exported make_game*/
var make_game = function (root, container) {
    var video = (function () {
        var video = document.createElement("video");
        video.autoplay = true;
        video.style.display = "none";
        root.appendChild(video);

        return {
            play: function (file, callback) {
                video.src = file;
                video.style.display = "block";

                var listener = function (e) {
                    video.removeEventListener("ended", listener);
                    video.style.display = "none";
                    callback && callback(e);
                };
                video.addEventListener("ended", listener);

                video.play();
            }
        };
    }());

    var videos = {
        game: {
            shot: "videos/spiel-schuss.mp4",
            hit: "videos/spiel-treffer.mp4",
            miss: "videos/spiel-daneben.mp4"
        }
    };


    var game = {
        streak: 0
    };

    var grid = {
        x: {
            min: -9,
            max:  9
        },
        y: {
            min: 2,
            max: 9
        },
        offset: {
            x: 510,
            y: 395
        },
        scale: {
            x: 37,
            y: -35.5,
            start: {
                0: 45,
                1: 40
            }
        }
    };

    var point = {
        start: {
            x: 0,
            y: 0
        },
        end: {
            x: 0,
            y: 0
        },
        generate: function generate() {
            this.start.x = Math.round(Math.random() * ((grid.x.max-1) - (grid.x.min+1))) + grid.x.min+1;
            this.start.y = Math.round(Math.random());
            this.end.x = Math.round(Math.random() * (grid.x.max - grid.x.min)) + grid.x.min;
            this.end.y = Math.round(Math.random() * (grid.y.max - grid.y.min)) + grid.y.min;
        }
    };
    point.generate();

    var input = {
        x: (function () {
            var element = document.createElement("input");
            element.setAttribute("type",        "number");
            element.setAttribute("min",         ""+(grid.x.min-grid.x.max));
            element.setAttribute("max",         ""+(grid.x.max-grid.x.min));
            element.setAttribute("class",       "vector-input x");
            element.setAttribute("placeholder", "x");
            return element;
        }()),
        y: (function () {
            var element = document.createElement("input");
            element.setAttribute("type",        "number");
            element.setAttribute("min",         ""+grid.y.min);
            element.setAttribute("max",         ""+grid.y.max);
            element.setAttribute("class",       "vector-input y");
            element.setAttribute("placeholder", "y");
            return element;
        }()),
        brackets: (function () {
            var element = document.createElement("span");
            element.setAttribute("class", "vector-input");
            element.textContent = "( )";
            return element;
        }())
    };
    root.appendChild(input.x);
    root.appendChild(input.brackets);
    root.appendChild(input.y);

    var background = (function () {
        var background = new createjs.Container();
        var image = new createjs.Bitmap("./goal.png");
        image.image.addEventListener("load", function () {
            var bounds = image.getBounds();
            background.addChild(image);
            background.scaleX = 1024 / bounds.width;
            background.scaleY = 576  / bounds.height;
        });
        return background;
    }());
    container.addChild(background);

    var elements = {
        ball: (function () {
            var ball = new createjs.Container();
            var image = new createjs.Bitmap("ball.png");
            image.image.addEventListener("load", function () {
                var bounds = image.getBounds();
                image.x = - bounds.width / 2;
                image.y = - bounds.height / 2;
                ball.addChild(image);
                ball.scaleX = 48 / bounds.width;
                ball.scaleY = 48 / bounds.height;
                container.addChild(ball);
            });
            return ball;
        }()),
        goal: (function () {
            var goal = new createjs.Container();
            var image = new createjs.Bitmap("ball-target.png");
            image.image.addEventListener("load", function () {
                var bounds = image.getBounds();
                image.x = - bounds.width / 2;
                image.y = - bounds.height / 2;
                goal.addChild(image);
                goal.scaleX = 48 / bounds.width;
                goal.scaleY = 48 / bounds.height;
                container.addChild(goal);
            });
            return goal;
        }()),
        update: function update() {
            this.ball.x =
                point.start.x *
                grid.scale.start[point.start.y] +
                grid.offset.x;
            this.ball.y = point.start.y * grid.scale.y + grid.offset.y;
            this.ball.rotation = 0;
            this.goal.x = point.end.x * grid.scale.x + grid.offset.x;
            this.goal.y = point.end.y * grid.scale.y + grid.offset.y;
        }
    };
    elements.update();

    var shoot_at = function (x, y, callback) {
        createjs.Tween.get(elements.ball)
            .to({
                x: (x + point.start.x) * grid.scale.x + grid.offset.x,
                y: (y + point.start.y) * grid.scale.y + grid.offset.y,
                rotation: 360
            }, 1000)
            .call(function () {
                if (
                    point.end.x - point.start.x == parseInt(input.x.value) &&
                    point.end.y - point.start.y == parseInt(input.y.value)
                ) {
                    callback(true);
                } else {
                    callback(false);
                }
            })
        ;
    };

    root.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            var x = parseInt(input.x.value, 10);
            if (isNaN(x)) {
                alert("x ist keine gültige Zahl");
                return false;
            } else if (x < (grid.x.min - grid.x.max)) {
                alert("x ist zu klein");
                return false;
            } else if (x > (grid.x.max - grid.x.min)) {
                alert("x ist zu groß");
                return false;
            }

            var y = parseInt(input.y.value, 10);
            if (isNaN(y)) {
                alert("y ist keine gültige Zahl");
                return false;
            } else if (grid.y.min > y) {
                alert("y ist zu klein");
                return false;
            } else if (y > grid.y.max) {
                alert("y ist zu groß");
                return false;
            }

            video.play(videos.game.shot, function () {
                var callback = function () {
                    point.generate();
                    elements.update();
                };

                shoot_at(x, y, function (success) {
                    if (success) {
                        if (game.streak < 0) {
                            game.streak = 0;
                        }
                        game.streak += 1;
                        video.play(videos.game.hit, callback);
                    } else {
                        if (game.streak > 0) {
                            game.streak = 0;
                        }
                        game.streak -= 1;
                        video.play(videos.game.miss, callback);
                    }
                });
            });
        }
    });
};
