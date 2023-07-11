
var video;

var vScale = 10;
function setup() {

  createCanvas(windowWidth, windowHeight)
  video = createVideo('nico.mp4');
  video.size(width / vScale, height / vScale);
  video.position(20,20)
  video.loop();
  // video.hide();
}

function draw() {
  background(51);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x  +y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];


      noStroke();
      fill(r,g,b);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, vScale + random(-3,3), vScale+random(-3,3),2);
    }
  }
}