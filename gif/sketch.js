var gif;
var gif1;
var gif2;


function preload() {
  gif = loadImage("mygif-one.gif");
  gif1 = loadImage("mygif-two.gif");
  gif2 = loadImage("mygif-three.gif");
}

function setup() {
  createCanvas(600,600);
  image(gif, 0, 0);
}

function draw() {
  background(red); 
  console.log('working');
  //gif = loadImage('image-one.gif');
  //gif= loadImage('image-two.gif');
  //gif = loadImage('image-three.gif');
  gif.play(gif); 
  //gif.play ('image-one.gif');
  frameRate(1);
  }


