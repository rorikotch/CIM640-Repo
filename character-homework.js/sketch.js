var elephantcolor = 200;
var leftpupil = 80;
var rightpupil = 120; 
var righteye = 120; 
var lefteye = 80;

var mapX = 0; 
var mapY = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  mapX = map(mouseX, 0,width, -9,10);

  mapY = map(mouseY, 0, height, -25,0);

  // main circle
  ellipse(100, 100, 100, 100);
  //right eye
  ellipse(righteye, 90, 30, 30);
  //left eye
  ellipse(lefteye, 90, 30, 30);
  //left pupil
  fill(0);
  ellipse(leftpupil + mapX,90,10,10);
  //right pupil
  ellipse(rightpupil + mapX, 90, 10, 10);
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
