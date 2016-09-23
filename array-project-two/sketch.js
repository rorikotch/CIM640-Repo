var r, g, b;
var randomPositionX = 0;
var randomPositionY = 0;
var numberOfRect = 300;
var brushSize = 20; 
var brushColor = ""; 

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
  ellipse(randomPositionX, randomPositionY, 150, 150);
  ellipse(randomPositionX, randomPositionY, 100, 100);
  ellipse(randomPositionX, randomPositionY, 50, 50);

  frameRate(4);
  
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 400) {
    r = random(255);
    g = random(255);
    b = random(255);
  } if (mousePressed === true);
    brushColor = r, g, b;

}