var gif;
var gif1;
var gif2;
var loadGif; 


function preload() {
  gif = loadGif("images/image-one.gif");
  gif1 = loadGif("images/image-two.gif");
  gif2 = loadGif("images/image-three.gif");
}

function setup() {
  createCanvas(600,600);
 
}

function draw() {
  console.log('working');
  image(gif, 0, 0);
  image(gif1, 0, 0);
  image (gif2, 0,0);
  }


