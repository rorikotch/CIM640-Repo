var r, g, b;
var randomPositionX = 0;
var randomPositionY = 0;
var numberOfRect = 300;

function setup() {
  createCanvas(720, 400);
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
  background(250);
  noStroke();
  fill(r, g, b, 127);
  randomPositionX = random(width);
  randomPositionY = random(height);
  ellipse(randomPositionX, randomPositionY, 200, 200);
  frameRate(5);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 400) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}