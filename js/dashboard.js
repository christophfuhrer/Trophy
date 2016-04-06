window.onload = function() {

  var mathe_json = {'mathematiker': 
  [
  {
    'name': 'Pythagoras von Samos',
    'required_points':'5',
    'bild': 'images/mathematiker_final/pythagoras.png',
    'trophy': 'images/trophies/pythagoras_trophy.svg',
    'credit_bild':' By The original uploader was Galilea at German Wikipedia - First upload to Wikipedia: de.wikipedia; description page is/was here.(Original text: Fotografiert am 30.03.2005) Second upload to Commons: http://commons.wikimedia.org/wiki/Image:Kapitolinischer_Pythagoras.jpg and this is an adjusted version of the second one., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2580073',
    'prolog_text': 'Ich bin der großartige Pythagoras von Samos, Meister des Dreiecks, Enttarner der geometrischen Mysterien und Begründer der Allgemeinen Mathematik. Ohne mir müsstest du keine Schularbeiten schreiben und in einem schändlichen Erdloch leben in dem du dich wundern würdest, wie man die fehlende Seite eines gleichseitigen Dreiecks ausrechnet. Ich habe Leben damit verbracht alles Wissen der Menschheit in mich aufzusaugen und nebenbei Philosophische Lehren entwickelt. Sieh es ein, du kannst mich nicht besiegen. Mathematisch ausgedrückt bin ich die Hypothenuse und du eine der beiden Katheten. Deine Größe kann meine nie überschreiten. Das ist mathematisch bewiesen, QED. Deswegen bleibe ich unbesiegbar. Deswegen kannst du nicht gewinnen.Ich bin der großartige Pythagoras von Samos, Meister des Dreiecks, Enttarner der geometrischen Mysterien und Begründer der Allgemeinen Mathematik. Ohne mir müsstest du keine Schularbeiten schreiben und in einem schändlichen Erdloch leben in dem du dich wundern würdest, wie man die fehlende Seite eines gleichseitigen Dreiecks ausrechnet. Ich habe Leben damit verbracht alles Wissen der Menschheit in mich aufzusaugen und nebenbei Philosophische Lehren entwickelt. Sieh es ein, du kannst mich nicht besiegen. Mathematisch ausgedrückt bin ich die Hypothenuse und du eine der beiden Katheten. Deine Größe kann meine nie überschreiten. Das ist mathematisch bewiesen, QED. Deswegen bleibe ich unbesiegbar. Deswegen kannst du nicht gewinnen.',
    'epilog_text': 'Du hast mich besiegt?!! das muss bedeuten, dass du gar keine kleine, unnötige Kathete, sondern etwas besseres bist. Höchst interessant. ich werde darüber nachdenken, warum ich dich so falsch eingeschätzt habe. Meinen Respekt hast du dir verdient.',
  },
  {
    'name': 'Johann Carl Friedrich Gauß',
    'required_points':'10',
    'bild': 'images/mathematiker_final/gauss.png',
    'trophy': 'images/trophies/gauss_trophy.svg',
    'credit_bild':'By The original uploader was Galilea at German Wikipedia - First upload to Wikipedia: de.wikipedia; description page is/was here.(Original text: Fotografiert am 30.03.2005) Second upload to Commons: http://commons.wikimedia.org/wiki/Image:Kapitolinischer_Pythagoras.jpg and this is an adjusted version of the second one., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2580073',
    'prolog_text': 'Johann Carl Friedrich Gauß (der Fürst der Mathematiker) ist mein Name und ich bin der genialste Kopf meiner Zeit. Ich bin nicht nur unglaublich schlau sondern auch von erhabenem Ehrgeiz durchströmt. "Man kann mit der Wurzel aus -1 nichts anfangen" haben sie gesagt, Man muss akzeptieren, dass es Grenzen gibt" haben sie gesagt. Ich habe nicht akzeptiert, dass es Grenzen gibt und den Komplexen Zahlenraum begründet. Des Weiteren habe ich die Mathematik in vielen weiteren Bereichen revolutioniert: nicht-euklidische Geometrie, euklidische Konstruktion, Primzahlenverteilung, Wahrscheinlichkeitsrechnung, Eliptische Funktionen & Algebra um nur ein paar zu nennen. wenn ich in der heutigen Zeit geboren wäre, hätten wir fliegende Autos und den Warp-Antrieb. Um dich zu besiegen verwende ich mein eigenes Eliminationsverfahren.',
    'epilog_text': 'Oh nein du hast mich besiegt! das heißt wohl das du keine lineare Gleichung bist. Ich habe dich unterschätzt. ich werde meine mathematischen Kollegen warnen, damit sie dich aufhalten können.',
  },
  {
    'name':'Gottfried Wilhelm Leibniz',
    'required_points':'15',
    'bild': 'images/mathematiker_final/leibniz.png',
    'trophy': 'images/trophies/gauss_trophy.svg',
    'credit_bild':'Von Christoph Bernhard Francke - /gbrown/philosophers/leibniz/BritannicaPages/Leibniz/LeibnizGif.html, Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=146619',
    'prolog_text': 'Grüß Gott, Reisender! Gottfried Wilhelm Leibniz mein Name, zu meinen Werken zählen eine revolutionäre Rechenmaschine, die Einführung des Binärsystems, womit ich den Grundstein für die moderne Computertechnologie gelegt habe, die Infinitesimalrechnung, den Beweis für einen Gott und viele mehr. Meine mathematischen Arbeiten haben auch viele praktische Anwendungen, unter Anderem Pläne für das Uboot, eine Maschine zur Bestimmung der Windgeschwindigkeit und Anwendung im Bergbau. Mein Werk ist jedoch nicht auf die Mathematik beschränkt, in den Bereichen Logik, Philosophie, Linguistik und Rechtswesen. Ein Plebejer wie du kann mich niemals besiegen!',
    'epilog_text': 'Was?!! Wie konnte ein so gewöhnlicher Bürger mich in meinem eigenen Element schlagen? Geh jetzt bitte, ich muss wohl meinen Gottesbeweis noch einmal überarbeiten.',
  },
  {
    'name':'Fibonacci',
    'required_points':'20',
    'bild': 'images/mathematiker_final/fibonacci.png',
    'trophy': 'images/trophies/fibonacci_trophy.svg',
    'credit_bild':'Von Hans-Peter Postel - Eigenes Werk, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1739679',
    'prolog_text': 'Grüße, Suchender! Mein Name ist Leonardo da Pisa, oder auch Fibonacci, wie mich die Untertanen nennen! Noch heute kann man meine Statue im Campo Santo in Pisa begutachter! Im Jahre 1202 erfand ich die Fibonacci-Folge, um das exponentielle Wachstum von Kaninchen den Niederbemittelten darzustellen. Diese Erfindung war so genial, dass noch heute in eurem "Mathematik"-Unterricht versucht wird, sie zu ergründer! Ich nehme jede Herausforderung an, in der Hoffnung, dass einer von euch mich übertrumpfen kann. Jedoch habe ich wenig Glauben daran, ein solche Vorkommnis noch zu erleben.',
    'epilog_text': 'Ich ziehe meine Kapuze vor euch, ehrenwerter Mathematiker und Philosoph. Ihr habt meine Leidenschaft für die Mathematik wieder erweckt und meine Hoffnungen für die Zukunft neu entfacht! Gesinnt euch wohl!',
  },
  {
    'name':'Leonard Euler',
    'required_points':'25',
    'bild': 'images/mathematiker_final/euler.png',
    'trophy':'images/trophies/euler_trophy.svg',
    'credit_bild':'By Jakob Emanuel Handmann - 2. Kunstmuseum Basel1. digitized version, the source (scanner) of the digitized image is unknown.The image was transferred from en.wiki (en:Image:Leonhard Euler.jpg) under the {{PD-old}} license tag. Wars 16:56, 25 June 2006 (UTC), Public Domain, https://commons.wikimedia.org/w/index.php?curid=893656',
    'prolog_text': 'Willkommen in meiner Welt, Fremder!Ich bin Leonard Euler, Begründer der Analysis, Namensstifter der eulerschen Zahl und der eulerschen Formel und vieles mehr. Ein Großteil der mathematischen Symbolik, die heute noch benutzt wird, stammt von mir. Grundsätzlich wärt ihr ohne mich komplett im Eck.Ich habe in meiner Lebenszeit über 800 Publikationen veröffentlicht, was selbst für einen hauptberuflichen Mathematiker sehr produktiv ist. Doch ich war auch als Physiker aktiv, so habe ich unter Anderem die Hydrodynamik revolutioniert. Die Stabilitätstheorie geht ebenfalls auf mich zurück!Versuch das mal zu überbieten!',
    'epilog_text': 'Aber... wie?!! Wie konnte ich besiegt werden? Das ist doch nicht möglich? das muss eine Halluzination sein! Geh mir aus dem Licht, du unsinniges Produkt meines Gehirns!',
  },
  {
    'name': 'Sir Isaac Newton',
    'required_points':'30',
    'bild': 'images/mathematiker_final/newton.png',
    'trophy':'images/trophies/newton_trophy.svg',
    'credit_bild':'By Sir Godfrey Kneller - http://www.newton.cam.ac.uk/art/portrait.html, Public Domain, https://commons.wikimedia.org/w/index.php?curid=37337',
    'prolog_text': 'Man spricht mich mit "Sir Isaac Newton" an. Ja, ich wurde zum Ritter geschlagen und das ist die geringste Errungenschaft meines Lebens. Ich hab die Gesetze der Optik ergründet. Dass wir Wissen das weißes Licht aus der Überlappung des gesamten sichtbaren Spektrums besteht, ist mir zu verdanken und dann wäre da noch die Sache mit der Gravitation. Ein Freund fragte mich einst, warum sich Planeten in elliptischen Umlaufbahnen bewegen. Also erfand ich den nächsten Wochen die Integral- und Differentialrechnung. All das war vor meinem 26. Geburtstag. Die meisten Leute schaffen es nicht einmal die mathematischen Grundsätze, die ich in meiner Jugend begründet habe, in ihrer geistigen Höhe zu verstehen. Bevor du gegen mich gewinnst, werde ich von einem Apfel erstochen!',
    'epilog_text': 'Was? Du hast gewonnen? Das zu erklären, ist mit derzeitiger Mathematik unmöglich! Ich muss wohl wieder neue Mathematik erfinden um das verstehen zu können.',
  },
  {
    'name': 'Günther Kauer & Stephan Javurek',
    'required_points': '35',
    'bild':'images/mathematiker_final/kauerjavurek.png',
    'trophy':'images/trophies/kauer_javurek_trophy.svg',
    'prolog_text': 'K: "Vor dir steht das Dreamteam der Mathematik: Günther Kauer & Stephan Javurek. Ich bin das Alpha..."J: "...und ich das Omega. Wir sind die unbezwingbare Elite der modernen Mathematik. Die alten Meister konntest du besiegen, doch wir studierten ihr Werk und ihren Brauch, setzten unsere eigenen Ansätze und revolutionierten so den Mathematikuterricht."K "Wir schätzen die alten Meister, doch machen nicht den gleichen Fehler, dich zu unterschätzen. Da die Passion des Unterrichtens in unseren Adern pulsiert, ist jede mathematische Erkenntnis, die du erringst, auch ein Triumph für uns. Deswegen kannst du uns nicht besiegen. Wir sind nicht deine Gegner, sondern deine Lehrer.Wenn du Fragen zu etwas hast, kannst du immer auf uns zählen!"J: "Gehe nun und lasse dich vom Zauber der Mathematik inspirieren!"', 
    'epilog_text': 'Du hast wirklich so viele Punkte gesammelt um uns zu übertrumpfen, nicht schlecht. Oder hast du vielleicht einfach geschummelt? :^) Wie auch immer, bei der Schularbeit, kannst du das nicht bringen, du kleiner Wicht :).',
}
]
};

var acquired_points = parseInt(getPoints());

  function loadMaths(){
    var path = '';
    var name = '';
    var text = '';
    var boxTemplate = '';
    document.getElementById('content_tower').innerHTML = "";

    for(var i = mathe_json.mathematiker.length - 1; i >= 0; i--){
      path = mathe_json.mathematiker[i].bild;
      name = mathe_json.mathematiker[i].name;
      epi_text = mathe_json.mathematiker[i].epilog_text;
      pro_text = mathe_json.mathematiker[i].prolog_text;
      req_points = mathe_json.mathematiker[i].required_points;

      boxTemplate = '<div class="row" style="opacity:0.6;"><div class="box imagebox"><img src="' + path + '" class="mathematic"/></div><div class="box textbox"><div><h1>' + name + '</h1><p>' + epi_text + '</p></div></div></div>';
      boxTemplateEnemy = '<div class="row"><div class="box imagebox"><img src="' + path + '" class="mathematic"/></div><div class="box textbox"><div><h1>' + name + '</h1><h3>Benötigte Punkte: ' + req_points + '</h3><p>' + pro_text + '</p></div></div></div>'

      if(acquired_points > req_points){
        document.getElementById('content_tower').innerHTML += boxTemplate;
      } else if(req_points -5 <=  acquired_points) {
         document.getElementById('content_tower').innerHTML += boxTemplateEnemy;
      }

    }
  }

  loadMaths();

  /* 
  /   Navigation zwischen Tower, Fight, Training und Trophies
  */
  document.getElementById('nav_tower').addEventListener("click", clickNavLink);
  document.getElementById('nav_fight').addEventListener("click", clickNavLink);
  document.getElementById('nav_training').addEventListener("click", clickNavLink);
  document.getElementById('nav_trophies').addEventListener("click", clickNavLink);


  function clickNavLink(){
  	var x = this.getAttribute("id").replace("nav", "content");
  	var allContent = document.querySelectorAll("div[id^='content_']");

  	for (var i = 0; i < allContent.length; i++) {
  		allContent[i].style.display = "none";
  	}

  	document.getElementById(x).style.display = "block";
  }

  /* 
  /   Navigation im Fight zwischen Funktionen, Vektoren und Textbeispielen
  */
  document.getElementById('btn_funktionen').addEventListener("click", functionClick);
  document.getElementById('btn_vektoren').addEventListener("click", functionClick);
  document.getElementById('btn_textbsp').addEventListener("click", functionClick);
  
  function functionClick(){
    var x = this.getAttribute("id").replace("btn", "tab");
    var allContent = document.querySelectorAll("div[id^='tab_']");

    for (var i = 0; i < allContent.length; i++) {
      allContent[i].style.display = "none";
    }

    document.getElementById(x).style.display = "block";
  }

  /* 
  /   Navigation im Fight zwischen Funktionen, Vektoren und Textbeispielen
  */
  function setPoints(poi){
    window.localStorage.setItem('CurPoints', poi);
  }

  function getPoints(){
    var cur = window.localStorage.getItem('CurPoints');
    return cur;
    //alert("Neuer Durchgang");
  }

  function getPointsInt(inter){
    setInterval(function(){ 
      var cur = window.localStorage.getItem('CurPoints');
      var a = document.getElementById("points");
      outputTrophies(1);
      ueberpruefen(cur);
    }, inter);
  }

  function outputTrophies(points){
    var links = ["./images/trophies/gauss_trophy.svg", "./images/trophies/leibniz_trophy.svg", "./images/trophies/pythagoras_trophy.svg", "./images/trophies/qmark.png", "./images/trophies/qmark.png", "./images/trophies/qmark.png"];
    for (var i = 0; i < points; i++) {
      var x = document.getElementsByClassName("trophy");
      x[i].src = links[i];
    }

  }

  function ueberpruefen(cp) {
    el.setAttribute("style", "height:" + height * cp + "px ; top:" + (600 - height * cp) + "px");

  }

  getPointsInt(2000);



  /* 
  /   Tower wachsen lassen.
  */
  el = document.getElementById("rectpartie");
  height = el.clientHeight;


};
