  var stage = new createjs.Stage("demoCanvas");
  var schritte = 100;
  var hoehe = 150;
  var breite = 742;
  var xMult = breite / schritte;


  //Mathe funktionen
  function punkte(multi, potenz, zusatz, schritte, hoehe) {
    hoehe /= 2;
    multi *= -1;
    zusatz *= 2;
    var erg = [];
    for (i = -schritte; i <= schritte; i++) {
      erg[i] = Math.pow(i - schritte / 2, potenz);
    }
    for (i = -schritte; i <= schritte; i++) {
      erg[i] = multi * (erg[i] / erg[schritte]) * hoehe + zusatz + hoehe * 2;
    }
    //  console.log(erg);
    return erg;
  }

  function funktionZeichnen(array) {
    stage.removeAllChildren();
    for (i = 1; i <= schritte; i++) {
      line = new createjs.Shape();
      line.graphics.setStrokeStyle(5);
      line.graphics.beginStroke("skyblue");
      line.graphics.moveTo((i - 1) * xMult, array[i - 1]);
      line.graphics.lineTo(i * xMult, array[i]);
      line.graphics.endStroke();

      line2 = new createjs.Shape();
      line2.graphics.setStrokeStyle(7);
      line2.graphics.beginStroke("darkblue");
      line2.graphics.moveTo((i - 1) * xMult, array[i - 1]);
      line2.graphics.lineTo(i * xMult, array[i]);
      line2.graphics.endStroke();


      stage.addChild(line2);
      stage.addChild(line);
    }
    stage.update();
  }
  buttonsZuordnen();
  //Button Events
  function buttonsZuordnen() {
    btns = document.getElementsByTagName("button");
    for (i = 0; i < btns.length - 1; i++) {
      btns[i].innerHTML = "";
      if (btns[i].getAttribute("data-multi") !== "1") {
        btns[i].innerHTML += btns[i].getAttribute("data-multi") + "&middot;";
      }
      btns[i].innerHTML += "x<sup>" + btns[i].getAttribute("data-potenz") + "</sup>"
      if (btns[i].getAttribute("data-zusatz") !== "0") {
        btns[i].innerHTML += "+" + btns[i].getAttribute("data-zusatz");
      }
    };

    for (i = 0; i < btns.length - 1; i++) {
      btns[i].onclick = function() {
        funktionZeichnen(punkte(this.getAttribute("data-multi"), this.getAttribute("data-potenz"), this.getAttribute("data-zusatz"), 100, 150));
        this.innerHTML = "";
        if (this.getAttribute("data-multi") !== "1") {
          this.innerHTML += this.getAttribute("data-multi") + "&middot;";
        }
        this.innerHTML += "x"
        if (this.getAttribute("data-zusatz") !== "0") {
          this.innerHTML += "<sup>" + this.getAttribute("data-potenz") + "</sup>";
        }
        if (this.getAttribute("data-zusatz") !== "0") {
          this.innerHTML += "+" + this.getAttribute("data-zusatz");
        }
        if (this.getAttribute("data-check") === "richtig") {
          alert("Richtig!");
            var cur = window.localStorage.getItem('CurPoints');
            window.localStorage.setItem('CurPoints', parseInt(cur) + 1);
          document.getElementById("next").style.display = 'block';
        }
      };
    }
    document.getElementById("next").style.display = 'none';

    btns[btns.length - 1].onclick = function() {
      newLevel();
    }
  }


  function newLevel() {
    for (i = 0; i < btns.length - 1; i++) {
      btns[i].setAttribute("data-multi", i * 2 + 3);
      btns[i].setAttribute("data-potenz", Math.floor(i / 2 + 1));
      btns[i].setAttribute("data-zusatz", i * 5 + 4);
      btns[i].removeAttribute("data-check");
    }
    btns[1].setAttribute("data-check", "richtig");
    document.getElementById("end").style.left = "570px";
    document.getElementById("start").style.left = "165px";
    document.getElementById("start").style.top = "443px";
    buttonsZuordnen();
  }

