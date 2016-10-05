var bubble0;
var bubble1;
var bubble2;
var bubble3;
var bubble4;
var bubble5;
var bubble6;
var bubble7;
var bubble8;
var bubble9;
var randomColor;
var colorArray = ["black", "green", "orange", "pink", "blue", "purple", "yellow", "red", "green", "black", "gray"];
var currentColor = "black"

function setup() {
  createCanvas(400, 400);
  bubble0 = new bubbles(random(width), random(height), 50, "black")
  bubble1 = new bubbles(random(width), random(height), 100, "black")
  bubble2 = new bubbles(random(width), random(height), 120, "black")
  bubble3 = new bubbles(random(width), random(height), 150, "black")
  bubble4 = new bubbles(random(width), random(height), 25, "black")
  bubble5 = new bubbles(random(width), random(height), 80, "black")
  bubble6 = new bubbles(random(width), random(height), 90, "black")
  bubble7 = new bubbles(random(width), random(height), 30, "black")
  bubble8 = new bubbles(random(width), random(height), 15, "black")
  bubble9 = new bubbles(random(width), random(height), 60, "black")
  noStroke();
}

function draw() {
  background(255);
  bubble0.display();
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  bubble5.display();
  bubble6.display();
  bubble7.display();
  bubble8.display();
  bubble9.display();
}

function mousePressed() {
  bubble0.bColor = random(colorArray);
  bubble1.bColor = random(colorArray);
  bubble2.bColor = random(colorArray);
  bubble3.bColor = random(colorArray);
  bubble4.bColor = random(colorArray);
  bubble5.bColor = random(colorArray);
  bubble6.bColor = random(colorArray);
  bubble7.bColor = random(colorArray);
  bubble8.bColor = random(colorArray);
  bubble9.bColor = random(colorArray);
}

function bubbles(tempX, tempY, tempDiameter, tempColor) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.bColor = tempColor;

  this.display = function() {
    fill(this.bColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}