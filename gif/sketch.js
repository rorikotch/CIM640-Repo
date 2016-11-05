var gif;
mousePressed = true; 

function setup() {
  createCanvas(600,600);
  image(gif, 10, 10);
}

function preload() {
  img = loadImage("mygif-one.gif");
  img = loadImage("mygif-two.gif");
  img = loadImage("mygif-three.gif");
}

function draw() {
  //background(0);
  
  if (mousePressed === true) {
  console.log('working');
  gif = loadImage('mygif-one.gif');
  gif= loadImage('mygif-two.gif');
  gif = loadImage('mygif-three.gif');
  }

  else {
  (mousePressed === false);
  background(255); 
  }
}

