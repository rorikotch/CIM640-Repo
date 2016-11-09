var gif;
var gif1;
var gif2;
var gif3;
var gif4;
var gif5;
var gif6;
var loadGif;
var randomPositionX = 0;
var randomPositionY = 0;
var imageArray = [];
var showImage = true;
var mousePressed;

function preload() {
  gif = loadGif("images/image-one.gif");
  gif1 = loadGif("images/image-two.gif");
  gif2 = loadGif("images/image-three.gif");
  gif3 = loadGif("images/image-four.gif");
  gif4 = loadGif("images/image-five.gif");
  gif5 = loadGif("images/image-six.gif");
  gif6 = loadGif("images/image-seven.gif");
  imageArray.push(loadImage('images/image-one.gif'));
  imageArray.push(loadImage('images/image-two.gif'));
  imageArray.push(loadImage('images/image-three.gif'));
  imageArray.push(loadImage('images/image-four.gif'));
  imageArray.push(loadImage('images/image-five.gif'));
  imageArray.push(loadImage('images/image-six.gif'));
  imageArray.push(loadImage('images/image-seven.gif'));


}

function setup() {
  createCanvas(1000, 1000);

}

function draw() {


  if (mouseIsPressed == true && showImage == true) {
    console.log('working');
    image(gif, 0, 0);
    image(gif1, 10, 200);
    image(gif2, 300, 0);
    image(gif3, 600, 10);
    image(gif4, 500, 100);
    image(gif5, 200, 450);
    image(gif6, 500, 100);



  } else {
    background(255);
  }

}