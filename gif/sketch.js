var gif;


function preload() {
  img = loadImage("mygif-one.gif");
  img = loadImage("mygif-two.gif");
  img = loadImage("mygif-three.gif");
}

function setup() {
  createCanvas(600,600);
  //image(gif, 100, 100);
}

function draw() {
  //background(0);

  console.log('working');
  gif = loadImage('image-one.gif');
  gif= loadImage('image-two.gif');
  gif = loadImage('image-three.gif');
  //gif.play ('image-one.gif');
  frameRate(1);
  }

 /* else {
  (mousePressed == false);
  background(255); 
  } 
} */

