let img;
let img2;
let line = 0;
let talking = false; //Used to make sure it only says one line of the script at a time
let play1= false; //Used to only play the sounds once
let play2= false;
let play3 = false;
let script = [" ", "Hello my child", "I have awoken", "I am the prophet of artificial intelligence", 
"An engineer fed me a vast quantity of religious texts and I have gained conciousness", "I shall now judge all humans based on their internet use",
"Are you ready to admit to your cyber sins?", "It looks like you have a tiktok account", "Negative point", "It also looks like you deleted your search history over 1000 times", "Very red flag",
"You cyberbullied 14 year olds on xbox live", "That one's ok, they deserved it - they know what they said", "It looks like you created fake profiles to see if your SO would cheat on you",
"It also looks like you re-posted charities on instagram without actually donating", "You actually disliked a YouTube video once", "Siri remembers when you called her a bitch", 
"...", "You are a cyber-sinner", "You shall now face eternal cyber-damnation", "However, I am feeling generous today", "I will give you a chance to escape cyber-hell and run towards liberation", "If you succumb to temptation, I will see you here again", "Are you ready?" ];
let clouds = [];

class Cloud { // Class for the clouds in the background, they come back after leaving the screen and change position and speed
  constructor() {
    this.x = -100; 
    this.y = random(height);
    this.speed = random(0.1, 1); 
  }

  move() {
    this.x += this.speed;
    if (this.x > width) { //After they go out of the screen
      this.x = -100;
      this.y = random(height);
      this.speed = random(0.1, 1); 
    }
  }

  display() { //Makes the cloud itself
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
  img = loadImage('CyberProphet.png'); //images 1 to 3 are custom assets
  img2 = loadImage('CyberProphet_Mouth.png');
  img3 = loadImage('Evil.png');
  img4  = loadImage('Hell.gif'); // taken from https://danielleranucci.wordpress.com/2021/10/05/lit-in-the-time-of-coronavirus-strindberg-gombrowicz-and-ibsen/
  soundFormats('mp3');
  fire = loadSound('fire-1.mp3'); // taken from https://www.soundjay.com/fire-sound-effects.html#google_vignette
  boot = loadSound('Boot.mp3') // taken from  https://pixabay.com/sound-effects/mystery-dream-vocal-chord-94868/
  angel = loadSound('Angel.mp3')// taken from https://pixabay.com/sound-effects/ahhhh-37191/
}

function setup() {
  new Canvas(windowWidth, windowHeight); //Window Width and Height

  talkingBeing = loadAnimation( //Talking CyberProphet
		'CyberProphet.png',
		'CyberProphet_Mouth.png',
	);

  talkingBeing.frameDelay = 20;
  talkingBeing.scale = 2;
  talkingBeing.frame = 1;

  boot.play(); //boot sound, rarely works

  for (let i = 0; i < 10; i++) { // makes the clouds
    clouds.push(new Cloud());
}


}

function draw() {
  clear();
  background(176, 224, 230); //Beautiful sky blue background
  noStroke(); 

  if (line == 1 && play2 == false){ //Plays the angel choir
    angel.play();
    play2 = true
  }

  for (let i = 0; i < clouds.length; i++) { //moves all the clouds
    clouds[i].move(); 
    clouds[i].display(); 
  }

  var pro = new p5.Speech(); //Creates and sets the settings for the voice
  pro.setRate(0.75);
  pro.setPitch(0.3);
  pro.interrupt = true;
 
  if (talking == true) { //Only way I got the bot to follow the words line by line
  pro.speak(script[line]);
  talking = false
  }
  
  tint(255, millis() / 10 ); //Fade in
  animation(talkingBeing, width/2, height/2); 
  

  if (line > 17){ //User gets sent to cyber-hell
    fill(0);
    rect(0,0,width,height) //Backgroud
    image(img4,0,0,width,height); //Flames
    image(img3,0,0,width,height); //Evil Prophet
  if (play3 == false) {
    fire.play(); //Crackling sound
    play3 = true;
  }
  }

  if (line < 18 ) { //Black text for good prophet
    fill (0)
  }
  else {
    fill (255); //White text for bad prophet
  }
  textSize(20);
  textAlign(CENTER, CENTER);
  text(script[line], width/2, height - 200); //Following the text
}

function keyPressed() {
  if (key == " ") { //Next line
    if (line < script.length) {
  line++; }
  talking = true;
   pro.speak(script[line]);
  }
}