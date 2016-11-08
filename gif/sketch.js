var gif;
var gif1;
var gif2;


function preload() {
  gif = loadImage("images/image-one.gif");
  gif1 = loadImage("images/image-two.gif");
  gif2 = loadImage("images/image-three.gif");
}

function setup() {
  createCanvas(600,600);
  image(gif, 0, 0);
}

function draw() {
  console.log('working');
  gif.play(gif); 
  gif.play(gif1);
  gif.play(gif2);
  }


