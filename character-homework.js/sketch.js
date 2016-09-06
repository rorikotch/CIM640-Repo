var elephantcolor = 200;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  // main circle
  ellipse(100, 100, 100, 100);
  
  fill(elephantcolor);
  
  //right eye
  ellipse(120, 90, 30, 30);
  //left eye
  ellipse(80, 90, 30, 30);
  //left pupil
  fill(0);
  ellipse(80,90,10,10);
  //right pupil
  ellipse(120, 90, 10, 10);
  //trunk
  fill(elephantcolor);
  rect(85, 90, 30, 80);
  //left ear
  ellipse(160, 110, 30, 80);
  //right ear 
  ellipse(40, 110, 30, 80);
  //body
  //ellipse(100, 180, 90, 90);
  
}