var prevMillis = 0;
var interval = 5000;
var counter = 0;

function setup() {
  createCanvas (2000,2000);
}

function draw() {
  fill (0);
  rect (500,400,500,100);
  //face circle
  fill(0,55,200);
  ellipse (950,450,80,80);
  //left eye
  fill(255);
  ellipse(938,445, 20, 20);
  //right eye
  ellipse(958, 445, 20, 20); 
  //left pupil
  fill(0);
  ellipse(938, 445, 10, 10);
  //right pupil
  ellipse(958, 445, 10, 10);
  //mouth 
  fill(0);
  ellipse(955, 470, 30, 20);
  
  //make a button to reset and the reset would be to set the previous millis equal to millis, so setting the time to start from right now. 
  if (millis() - prevMillis >= interval){
    counter++;
    console.log(counter);
    prevMillis = millis();
  } 
}



