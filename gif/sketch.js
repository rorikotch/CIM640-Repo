var gif;

function setup() {
  createCanvas(600,600);
  gif = loadGif('mygif-one.gif');
}

function draw() {
  background(0);
  image(gif, 0, 0);
}