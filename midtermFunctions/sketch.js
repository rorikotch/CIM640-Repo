var prevMillis = 0;
var interval = 0;
var reset = 200;
var counter = 0;
var words = ["Take a break", "Eye know you can do it", "Take your vision to the next level", "Go get a coffee", "See what your co-workers are doing"];
var word;
var randomMessage;
var slider;
var startTimer = 0;
var input, button, greet;
var timer = 1000;

var startTimer = false;

var topInterval = 30;


function setup() {
  createCanvas(2000, 2000);
  noStroke();
  randomMessage = chooseRandomWord();

  input = createInput();
  input.position(510, 470);

  button = createButton('submit');
  button.position(640, 470);
  button.mousePressed(greet);

  greeting = createElement('h4', 'enter time interval');
  greeting.position(510, 430);
  textAlign(CENTER);
  fill(255);
}

function draw() {
  background(255);
  frameRate(1);

  if (startTimer == true) {
        console.log(interval);

    greeting.hide();
    input.hide();
    button.hide();

    counter++;
    console.log("counter;=" + counter);


    if (counter >= interval && counter <= interval + 10) {
      drawMessage(randomMessage);
    }

    if (counter > interval + 11) {
      startTimer = false;
    }
    
  }else{
    console.log(interval);
    greeting.show();
    input.show();
    button.show();
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
  text(currentMessage, 570, 440);
}

function greet() {
  interval = int(input.value());
  greeting.html('timer set!');
  //grab time
  input.value('');
  startTimer = true;
  counter = 0;
  randomMessage = chooseRandomWord();

  
  

  // if (timer === true) {

  //   for (var i = 0; i < 200; i++) {
  //     push();
  //     fill(random(255), 255, 255);
  //     translate(random(width), random(height));
  //     rotate(random(2 * PI));
  //     text(name, 0, 0);
  //     pop();
  //   }
  // }
}

function chooseRandomWord() {
  var randomWord = random(words);
  return (randomWord);
}