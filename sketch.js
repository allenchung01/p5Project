let positionX;
let positionY;
let speedX;
let speedY;
let r;
let g;
let b;
let newR;
let newG;
let newB;
let mappedValue;
let toggle;
let img;

function preLoad() {
  img = loadImage('images/abstractImage.png');
}

function setup() {
  // put setup code here
  mappedValue = 0;
  createCanvas(600, 600);
  positionX = 50;
  positionY = 300;
  speedX = 1;
  speedY = 1;
  r = (Math.floor(Math.random() * 255));
  g = (Math.floor(Math.random() * 255));
  b = (Math.floor(Math.random() * 255));
  toggle = 0;

  newR = r;
  newG = g;
  newB = b;
  background(r,g,b);
  //image(img, 0, 0);
}

function draw() {
  mappedValue = map(mouseY, 0, 600, 0, 255);
  //background(r, g, b);
  fadeColor();
  strokeWeight(1);
  stroke(r, g, b);
  rect(positionX, positionY, 50, 50);
  if (positionX <= 0 || positionX >=  550) {
    speedX *= -1;
    newR = (Math.floor(Math.random() * 255));
    newG = (Math.floor(Math.random() * 255));
    newB = (Math.floor(Math.random() * 255));
  }
  if (positionY <= 0 || positionY >= 550) {
    speedY *= -1;
    newR = (Math.floor(Math.random() * 255));
    newG = (Math.floor(Math.random() * 255));
    newB = (Math.floor(Math.random() * 255));
  }
  positionX += speedX;
  positionY += speedY;
}

function mousePressed() {
  fill(mappedValue);
  if (toggle == 0) {
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    rect(mouseX, mouseY, 50, 50);
  }
}

function mouseDragged() {
  fill(mappedValue);
  if (toggle == 0) {
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    rect(mouseX, mouseY, 50, 50);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    toggle = 0;
  } else if (keyCode === RIGHT_ARROW) {
    toggle = 1;
  }
}

function fadeColor() {
  if (newR == r) {
    r = newR;
  }
  if (newR < r) {
    r = r - 1;
  } else {
    r = r + 1;
  }

  if (newG == g) {
    g = newG;
  }
  if (newG < g) {
    g = g - 1;
  } else {
    g = g + 1;
  }

  if (newB == b) {
    b = newB;
  }
  if (newB < b) {
    b = b - 1;
  } else {
    b = b + 1;
  }
}
