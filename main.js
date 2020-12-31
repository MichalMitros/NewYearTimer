let start = -1;
let present;
let count = 0;
let fireworks = [];
let gravity;
p5.disableFriendlyErrors = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, height/1400);
  if(moment().year() === 2021) {
    start = -2;
  }
}

function draw() {
  if(!isReady()) {
    background(0);
    showTimer();
  } else {
    if(start !== -2) {
      frameRate(3);
      if(start === -1) {
        start = frameCount;
      } else {
        present = frameCount;
        if(present-start <= 8) {
          let additional_height = 0;
          textAlign(CENTER);
          if(count % 2 === 0) {
            background(0);
          } else {
            background(255);
          }
          fill(255, 0, 0);
          noStroke();
          if(height < width) {
            additional_height = height/7;
          } else {
            textSize(width/2);
            additional_height = height/7;
          }
          if(height < width) {
            text("0", width/2, height/2 + height/24 + additional_height);
          } else {
            text("0", width/2, height/2 + width/24 + additional_height);
          }
        } else {
          start = -2;
        }
        count++;
      }
    } else {
      frameRate(60);
      let additional_height = 0;
      textAlign(CENTER);
      colorMode(RGB);
      background(0, 75);
      stroke(255);
	    strokeWeight(4);
      colorMode(HSB);
    	for(let i=fireworks.length-1; i>=0; i--) {
    		fireworks[i].update();
    		fireworks[i].show();

    		if(fireworks[i].done()) {
    			fireworks.splice(i, 1);
    		}
    	}
    	if(round(random(0, 1)) == 0) {
    		fireworks.push(new Firework());
    	}
      colorMode(RGB);
      fill(255);
      noStroke();
      if(height < width) {
        textSize(height/3);
        additional_height = -height/7;
      } else {
        textSize(width/3);
        additional_height = -height/7;
      }
      if(height < width) {
        text("2021", width/2, height/2 + height/24 + additional_height);
      } else {
        text("2021", width/2, height/2 + width/24 + additional_height);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  gravity = createVector(0, height/1400);
}

function keyPressed() {
  if(fullscreen()) {
    toggleFullscreen();
  }
}

function doubleClicked() {
  toggleFullscreen();
}

function toggleFullscreen() {
  var fs = fullscreen();
  fullscreen(!fs);
  windowResized();
  redraw();
}
