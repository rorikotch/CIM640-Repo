var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var topBoundary = 0;
var bottomBoundary = 0; 

var brushColor = "black";

var currentArea = "";


var buttonSize = 100; 

function setup() {
  createCanvas (400,500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  topBoundary = 400;
  bottomBoundary = height;
  noStroke();
}

function draw() {
  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill ("purple");
  rect (boundary1, topBoundary, buttonSize, buttonSize);
  fill ("orange");
  rect (boundary2, topBoundary, buttonSize, buttonSize);
  fill ("yellow");
  rect (boundary3, topBoundary, buttonSize, buttonSize);
  
  fill(brushColor);
  ellipse(mouseX, mouseY, 10, 10);
  console.log(currentArea);
  
}