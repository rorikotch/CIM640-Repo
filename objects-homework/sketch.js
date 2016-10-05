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

function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  bubble0 = new bubbles(random(width), random(height), 50)
  bubble1 = new bubbles(random(width), random(height), 100)
  bubble2 = new bubbles(random(width), random(height), 120)
  bubble3 = new bubbles(random(width), random(height), 150)
  bubble4 = new bubbles(random(width), random(height), 25)
  bubble5 = new bubbles(random(width), random(height), 80)
  bubble6 = new bubbles(random(width), random(height), 90)
  bubble7 = new bubbles(random(width), random(height), 30)
  bubble8 = new bubbles(random(width), random(height), 15)
  bubble9 = new bubbles(random(width), random(height), 60)
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

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;

  this.display = function() {
    fill(r, g, b, 130);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
function mousePressed(){
  if (mousePressed === true)
  console.log("yes");
}

}