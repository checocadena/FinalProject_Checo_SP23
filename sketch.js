let img;
let img2;
let line = 0;
let talking = false;
let script = [ " ", "Hello my child", "I have awoken", "I am the prophet of artificial intelligence", 
"An engineer fed me a vast quantity of religious texts and I have gained conciousness", "I shall now judge all humans based on their internet use",
"Are you ready to admit to your cyber sins?", "It looks like you have a tiktok account", "Negative point", "It also looks like you deleted your search history over 1000 times", "Very red flag",
"You cyberbullied 14 year olds on xbox live", "That one's ok, they deserved it - they know what they said", "It looks like you created fake profiles to see if your SO would cheat on you",
"It also looks like you re-posted charities on instagram without actually donating", "You actually disliked a YouTube video once", "Siri remembers when you called her a bitch", 
"...", "You are a cyber-sinner", "You shall now face eternal cyber-damnation" ];
let clouds = [];

class Cloud {
  constructor() {
    this.x = -100; 
    this.y = random(height);
    this.speed = random(0.1, 1); 
  }

  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -100;
      this.y = random(height);
      this.speed = random(0.1, 1); 
    }
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x + 40, 40 + this.y, 50, 30);
    ellipse(this.x + 70, 80 + this.y, 40, 20);
    ellipse(this.x + 90, 50 + this.y, 30, 20);
    ellipse(this.x + 110, 60 + this.y, 40, 30);
    ellipse(this.x + 130, 50 + this.y, 50, 20);
  }
}

function preload() {
  img = loadImage('CyberProphet.png');
  img2 = loadImage('CyberProphet_Mouth.png');
  img3 = loadImage('Evil.jpg');
}

function setup() {
  new Canvas(windowWidth, windowHeight);

  talkingBeing = loadAnimation(
		'CyberProphet.png',
		'CyberProphet_Mouth.png',
	);

  talkingBeing.frameDelay = 20;
  talkingBeing.scale = 2;
  talkingBeing.frame = 1;

  for (let i = 0; i < 10; i++) {
    clouds.push(new Cloud());
}
}

function draw() {
  clear();
  background(176, 224, 230);
  noStroke();
  
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].move(); 
    clouds[i].display(); 
  }

  var pro = new p5.Speech(); 
  pro.setRate(0.75);
  pro.setPitch(0.3);
 
  if (talking == true) {
  pro.speak(script[line]);
  talking = false
  }

  animation(talkingBeing, width/2, height/2);
  tint(255, millis() / 10 );

  if (line > 17){
  image(img3,0,0,width,height);
  }
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(script[line], width/2, height/2 + 300);

}

function keyPressed() {
  if (key == " ") {
    if (line < script.length) {
  line++; }
  talking = true;
   pro.speak(script[line]);
  }
}