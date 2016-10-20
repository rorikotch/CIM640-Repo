var prevMillis = 0;
var interval = 100;
var reset = 200;
var counter = 0;

function setup() {
  createCanvas (2000,2000);
}

function draw() {

  counter++;
  
    //make a button to reset and the reset would be to set the previous millis equal to millis, so setting the time to start from right now. 

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
  ellipse(955, 470, 30, 20);
  noStroke();
  
  
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
<<<<<<< HEAD

=======
    
>>>>>>> origin/master
    if (counter >= reset){
      console.log("reset")
      counter = 0;
    }
<<<<<<< HEAD
=======
    
  } 
>>>>>>> origin/master

}

    
  } 
  
  


