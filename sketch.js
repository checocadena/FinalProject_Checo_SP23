let img;
let img2;
let cloudX = 0;
let line = 1;
let talking = false;
let script = [ " ", "Hello my child", "I have awoken", "I am the prophet of artifical intelligence", 
"An engineer fed me a vast quantity of religious texts and I have gained conciousness", "I shall now judge all humans based on their internet use",
"Are you ready to admit to your cyber sins?" ];


function preload() {
  img = loadImage('CyberProphet.png');
  img2 = loadImage('CyberProphet_Mouth.png');
}

function setup() {
  new Canvas(800, 800);

  talkingBeing = loadAnimation(
		'CyberProphet.png',
		'CyberProphet_Mouth.png',
	);

  talkingBeing.frameDelay = 20;
  talkingBeing.scale = 2;
  talkingBeing.frame = 1;

  
}

function draw() {
  clear();
  background(176, 224, 230);
  noStroke();

  var pro = new p5.Speech(); 
  pro.setRate(0.75);
  pro.setPitch(0.3);
  //nextLine();
 
  if (talking == false) {
  pro.speak(script[line]);
  line++;
  talking == true;}
  
  pro.onEnd = (talking = false) //&& nextLine();
 
  y = 0;
  Offset = 0;
  ellipse(cloudX + 40, 40 + y, 50, 30);
  ellipse(cloudX + 70, 80 + y, 40, 20);
  ellipse(cloudX + 90, 50 + y, 30, 20);
  ellipse(cloudX + 110, 60 + y, 40, 30);
  ellipse(cloudX + 130, 50 + y, 50, 20);

  y = 48;
  Offset = 76;
  ellipse(cloudX + Offset + 40, 40 + y, 50, 30);
  ellipse(cloudX + Offset + 70, 80 + y, 40, 20);
  ellipse(cloudX + Offset + 90, 50 + y, 30, 20);
  ellipse(cloudX + Offset + 110, 60 + y, 40, 30);
  ellipse(cloudX + Offset + 130, 50 + y, 50, 20);

  y = 200;
  Offset = 400;
  ellipse(cloudX + Offset + 40, 40 + y, 50, 30);
  ellipse(cloudX + Offset + 70, 80 + y, 40, 20);
  ellipse(cloudX + Offset + 90, 50 + y, 30, 20);
  ellipse(cloudX + Offset + 110, 60 + y, 40, 30);
  ellipse(cloudX + Offset + 130, 50 + y, 50, 20);

  y = 578;
  Offset = 600;
  ellipse(cloudX + Offset + 40, 40 + y, 50, 30);
  ellipse(cloudX + Offset + 70, 80 + y, 40, 20);
  ellipse(cloudX + Offset + 90, 50 + y, 30, 20);
  ellipse(cloudX + Offset + 110, 60 + y, 40, 30);
  ellipse(cloudX + Offset + 130, 50 + y, 50, 20);

  animation(talkingBeing, width/2, height/2);
  tint(255, millis() / 7);

  

cloudX += 1;

if (cloudX > width + 100) {
  cloudX = -100;
}

//fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(script[line], width/2, height/2 + 300);

}
function keyPressed() {
  if (key == "n") {
  //talkingBeing.play();
   // line++;
  //pro.speak(script[line]);
  }
}

function speechEnded() {
  //talkingBeing.frame = 1;
  //pro.stop;
}

function nextLine() {
  if (line < script.length && talking == false) {
  pro.speak(script[line]);
  line++;
  talking == true;
  }
  //pro.onEnd = nextLine();
}

function cloud(){
  fill(255);
  for (let i = 0; i < 5; i++) {
  y = random(height);
  ellipse(cloudX + 40, 40 + y, 50, 30);
  ellipse(cloudX + 70, 80 + y, 40, 20);
  ellipse(cloudX + 90, 50 + y, 30, 20);
  ellipse(cloudX + 110, 60 + y, 40, 30);
  ellipse(cloudX + 130, 50 + y, 50, 20);
  }

}
