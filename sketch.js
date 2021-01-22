var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var scAngle;
var sound;
var soundSec;


function preload() {
  sound = loadSound("clock.mp3");
};

function setup() {
  createCanvas(500, 500);
  soundSec = second();
};

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 270, 630);
  mnAngle = map(mn, 0, 60, 270, 630);
  hrAngle = map(hr % 12, 0, 12, 270, 630);

  noFill();
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  push();
  stroke(255, 0, 0);
  strokeWeight(7);
  arc(0, 0, 400, 400, 270, scAngle);
  rotate(scAngle);
  line(0, 0, 90, 0);
  pop();


  push();
  stroke(0, 255, 0);
  strokeWeight(7);
  arc(0, 0, 350, 350, 270, mnAngle);
  rotate(mnAngle);
  line(0, 0, 80, 0);
  pop();


  push();
  stroke(0, 0, 255);
  strokeWeight(7);
  arc(0, 0, 300, 300, 270, hrAngle);
  rotate(hrAngle);
  line(0, 0, 60, 0);
  pop();

  if (soundSec != sc) {
    sound.play();
    soundSec = second();
  };

};