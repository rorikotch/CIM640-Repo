var randomPositionX = 0;
var randomPositionY = 0;
var numberOfRect = 300;
var r, g, b;

function setup() {
  createCanvas(500, 500);
  r = random(255);
  b = random(255);
  g = random(255);
  noStroke();

  background(255);
  for (var i = 0; i < numberOfRect; i++) {
    randomPositionX = random(width);
    randomPostitionY = random(height);
    rect(randomPositionX, randomPostitionY, 40, 25);
    fill(r, g, b, 130)
  }
}

function draw() {
  fill(r, g, b, 127);
}

function mousePressed() {
  // if (mouseIsPressed == true)
  //console.log("thisworks")
  if (mousePressed === true);
    r = random(255);
    b = random(255);
    g = random(255);
  }