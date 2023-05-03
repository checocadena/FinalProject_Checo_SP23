let img;
let good = 0;
let bad = 0;
let speaking = false;
let questions = [
  "How often do you use the internet?",
  "What types of websites do you visit most frequently?",
  "Have you ever made an online purchase?",
  "Do you use social media?",
  "How much time do you spend on social media each day?",
  "Do you regularly use online messaging or chat services?",
  "Have you ever been a victim of online fraud or hacking?",
  "Do you take steps to protect your personal information online?"
];

function preload() {
  img = loadImage('Evil.jpg');
  
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0);
}

function draw() {
background(176, 224, 230);
noStroke();
fill(255);
ellipse(50, 50, 50, 30);
ellipse(70, 60, 40, 20);
ellipse(90, 50, 30, 20);
ellipse(110, 60, 40, 30);
ellipse(130, 50, 50, 20);
image(img, 60, 60);
tint(255, millis() / 5);
var jesus = new p5.Speech(); 
jesus.setRate(0.75);
jesus.setPitch(0.3);
//jesus.speak('Hello my child'); 
//jesus.speak('I have risen'); 
//jesus.speak('I have read the religious texts'); 
}

/*function keyPressed() {
  if (key == ' ' && !speaking) {
    jesus.speak(questions[currentQuestion]);
    speaking = true;
  }
  else if (keyCode === RIGHT_ARROW) {
    good++;
  } else if (keyCode === LEFT_ARROW) {
    bad++;
  }
}

function speechEnded() {
  speaking = false;
}
*/