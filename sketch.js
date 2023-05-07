let img;
let good = 0;
let bad = 0;

function preload() {
  img = loadImage('CyberProphet.png');
  
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0);
}

function draw() {
background(176, 224, 230);
noStroke();
cloud();
image(img, 60, 60);
tint(255, millis() / 5);
var pro = new p5.Speech(); 
pro.setRate(0.75);
pro.setPitch(0.3);
pro.speak('Hello my child'); 
pro.speak('I have risen'); 
pro.speak('I have read the religious texts'); 
}

function keyPressed() {
  if (key == ' ') {
  }
  else if (keyCode === RIGHT_ARROW) {
    good++;
  } else if (keyCode === LEFT_ARROW) {
    bad++;
  }
}

function cloud(){

fill(255);
ellipse(40, 40, 50, 30);
ellipse(70, 80, 40, 20);
ellipse(90, 50, 30, 20);
ellipse(110, 60, 40, 30);
ellipse(130, 50, 50, 20);

}