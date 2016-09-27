var r, g, b;
var randomPositionX = 0;
var randomPositionY = 0;
var numberOfRect = 300;
var brushSize = 20; 
var brushColor = "black"; 
var numPressed = 0;
var waiting = 0;

function setup() {
  createCanvas(720, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  textSize(32);
}

var scoreKeeper = [0,0,0,0]; 

function draw() {
  background(250);
  noStroke();
  fill(r, g, b, 127);
  if(waiting % 40 == 0) {
    randomPositionX = random(width);
    randomPositionY = random(height);
  }
  ellipse(randomPositionX, randomPositionY, 200, 200);
  ellipse(randomPositionX, randomPositionY, 150, 150);
  ellipse(randomPositionX, randomPositionY, 100, 100);
  ellipse(randomPositionX, randomPositionY, 50, 50);
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  for(var i = 0; i < scoreKeeper.length; i++) {
      text(scoreKeeper[i], 100*(i+1), 50);
  }
  waiting++;
}

function mousePressed() {
  var d = dist(mouseX, mouseY, randomPositionX, randomPositionY);
  if(numPressed + 1 > scoreKeeper.length) {
    
    numPressed = 0;
    for(var i = 0; i < scoreKeeper.length; i++) {
      scoreKeeper[i] = 0;
    }
  }
  if (d < 100) {
    scoreKeeper[numPressed] = floor(d);
    numPressed++;
  }
  

}