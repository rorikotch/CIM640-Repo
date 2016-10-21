var prevMillis = 0;
var interval = 100;
var reset = 200;
var counter = 0;
var words = ["Take a break", "Eye know you can do it", "Take your vision to the next level","Go get a coffee", "See what your co-workers are doing for a minute"];
var word = random(words); 


function setup() {
  createCanvas (2000,2000);
  noStroke();
}

function draw() {

  counter++;
  
  if (counter <= interval){
    console.log("counter;="+counter);
    
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
  ellipse(949, 470, 20, 20);
  
  } else {
    
    console.log("counter-white;="+counter);
      fill (255);
  rect (500,400,500,100);
  //face circle
  fill(255);
  ellipse (950,450,80,80);
  //left eye
  fill(255);
  ellipse(938,445, 20, 20);
  //right eye
  ellipse(958, 445, 20, 20); 
  //left pupil
  fill(255);
  ellipse(938, 445, 10, 10);
  //right pupil
  ellipse(958, 445, 10, 10);
  //mouth 
  fill(255);
  ellipse(955, 470, 30, 20);

    if (counter >= reset){
      console.log("reset")
      counter = 0;
    }
  } 
  
  if (mouseIsPressed)
  fill(255);
  text(random(words), 510, 450);
  textStyle(BOLD);
  textSize(13);
  frameRate(1);
  
}

  
  


