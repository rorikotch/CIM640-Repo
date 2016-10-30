var prevMillis = 0;
var interval = 10;
var reset = 200;
var counter = 0;
var words = ["Take a break", "Eye know you can do it", "Take your vision to the next level", "Go get a coffee", "See what your co-workers are doing"];
var word;
var randomMessage;
var slider; 

var topInterval = 30;



function setup() {
  createCanvas(2000, 2000);
  noStroke();
  randomMessage = chooseRandomWord();
  
  slider = createSlider(0, 255, 100);
  slider.position(510,470);
  slider.style('width', '80px');
  var val = slider.value();
}

function draw() {
  background(255);

  frameRate(1);

  counter++;
  console.log("counter;=" + counter);
  
  if (counter >= interval && counter <= topInterval){
  drawMessage(randomMessage);
  }

  if (counter == topInterval + 1){
  randomMessage = chooseRandomWord();
  console.log(randomMessage);
  counter = 0;
  }
  


}

function drawMessage(currentMessage) {
  fill(0);
  rect(500, 400, 500, 100);
  //face circle
  fill(0, 55, 200);
  ellipse(950, 450, 80, 80);
  //left eye
  fill(255);
  ellipse(938, 445, 20, 20);
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
  
  fill(255);
  text(currentMessage, 510,450);
  

}



function chooseRandomWord(){
  var randomWord = random(words);
  return(randomWord);
}
