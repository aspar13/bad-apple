var video;
var vScale = 16;

function setup() {
  
  createCanvas(windowWidth, windowHeight)
  video = createVideo('ba.mp4');
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
      
      var index =  (x + y * video.width) * 4;

      // Only one value from r, g, b is needed as the video is black and white.
      var b = video.pixels[index];
      
      var w = map(b, 0, 255, 0, vScale);
      
      noStroke();
      fill(random(175,245));
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w+random(-3,3) , w+random(-3,3), 3);
    }
  }
  
}

