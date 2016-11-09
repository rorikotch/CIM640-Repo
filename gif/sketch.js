var gif;
var gif1;
var gif2;
var gif3;
var loadGif; 
var imageArray = [];
var showImage = true;
var mousePressed;

function preload() {
  gif = loadGif("images/image-one.gif");
  gif1 = loadGif("images/image-two.gif");
  gif2 = loadGif("images/image-three.gif");
  gif3 = loadGif("images/image-four.gif");
  imageArray.push(loadImage('images/image-one.gif'));
  imageArray.push(loadImage('images/image-two.gif'));
  imageArray.push(loadImage('images/image-three.gif'));
  imageArray.push(loadImage('images/image-four.gif'));
}

function setup() {
  createCanvas(1000,1000);
 
}

function draw() {
 
   
  if (mouseIsPressed == true && showImage == true) {
  console.log('working');
  image(gif, 0, 0);
  image(gif1, 10, 200);
  image (gif2, 300,0);
  image(gif3, 600, 10);
  } else {
    background(255);
  }
  
  }


