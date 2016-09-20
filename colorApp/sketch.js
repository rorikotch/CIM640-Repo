var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;
var topBoundary = 0;
var bottomBoundary = 0;

var buttonSize = 100;

var currentArea = "";

var brushColor = "black";

var brushSize = 10;

function setup() {
  createCanvas(600, 500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = width;
  topBoundary = 400;
  bottomBoundary = height;
  noStroke();
}

function draw() {


  fill("green");
  ellipse(boundary0 + 50, topBoundary + 50, buttonSize, buttonSize);
  fill("orange");
  ellipse(boundary1 + 50, topBoundary + 50, buttonSize, buttonSize);
  fill("yellow");
  ellipse(boundary2 + 50, topBoundary + 50, buttonSize, buttonSize);
  fill("blue");
  ellipse(boundary3 + 50, topBoundary + 50, buttonSize, buttonSize);
  fill("pink");
  ellipse(boundary4 +50, topBoundary + 50, buttonSize, buttonSize);
  fill("purple");
  ellipse(boundary5 + 50, topBoundary +50, buttonSize, buttonSize);

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  console.log(currentArea);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    if (mouseX > boundary0 && mouseX < boundary1) {
      console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      console.log("area3");
      currentArea = "area3";
    } else if (mouseX > boundary4 && mouseX < boundary5) {
      console.log("area4");
      currentArea = "area4";
    } else if (mouseX > boundary5 && mouseX < boundary6) {
      console.log("area5");
      currentArea = "area5";
    }
  }
}

function mousePressed() {
  console.log(currentArea);
  if (currentArea == "area0") {
    brushColor = "green";
  } else if (currentArea == "area1") {
    brushColor = "orange";
  } else if (currentArea == "area2") {
    brushColor = "yellow";
  } else if (currentArea == "area3") {
    brushColor = "blue";
  } else if (currentArea == "area4") {
    brushSize++;
  } else if (currentArea == "area5") {
    brushSize--;
    if (brushSize < 10) {
      brushSize = 10;
    }
  } else {
    brushColor = "black";
  }
}