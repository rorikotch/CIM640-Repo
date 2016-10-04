var bubble0;
var bubble1; 
var bubble2; 
var bubble3; 
var bubble4; 

function setup() {
  createCanvas(400, 400);
  bubble0 = new bubbles(random(width), random(height), 50)
  bubble1= new bubbles(random(width), random(height), 100)
  bubble2 = new bubbles(random(width), random(height), 120)
  bubble3 = new bubbles(random(width), random(height), 150)
  bubble4 = new bubbles(random(width), random(height), 25)
}

function draw() {
  background(255);
  bubble0.display();
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  
}

function bubbles(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;

  this.display = function() {
    fill(100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}