var timer_color = 255;
var ready = false;
var isRunning_timer = false;
var counter_timer = 0;

function isReady() {
  // return moment().year() === 2020;
  return isRunning_timer || moment().year() === 2022;
}

function showTimer() {
  let additional_height = 0;
  textAlign(CENTER);
  background(0);
  let time = floor(moment().endOf('year').diff(moment()) / 1000);
  let hours = floor(time / 3600) + "";
  let minutes = floor((time / 60) % 60) + "";
  let seconds = floor(time % 60) + "";
  if(hours == "0" && minutes == "0" && seconds.length == 1) {
    fill(255, 0, 0);
    noStroke();
  } else {
    fill(255);
    noStroke();
  }
  if(hours.length < 2) {
    hours = "0" + hours;
  }
  if(minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if(seconds.length < 2) {
    if(hours != "00" || minutes != "00") {
      seconds = "0" + seconds;
    }
  }
  let output = hours + ":" + minutes + ":" + seconds;
  if(height < width) {
    if(hours == "00" && minutes == "00") {
      output = seconds;
      textSize(height/2);
      additional_height = height/7;
    } else {
      textSize(height/6);
    }
  } else {
    if(hours == "00" && minutes == "00") {
      output = seconds;
      textSize(width/2);
      additional_height = height/7;
    } else {
      textSize(width/6);
    }
  }
  if(height < width) {
    text(output, width/2, height/2 + height/24 + additional_height);
  } else {
    text(output, width/2, height/2 + width/24 + additional_height);
  }

  if(hours == "00" && minutes == "00" && seconds == "0") {
    ready = true;
    isRunning_timer = true;
  }

}

function afterCounting() {
  if(counter_timer == 255) {
    isRunning_timer = false;
  } else {
    background(0);
    fill(255-counter_timer, 0, 0);
    stroke(255-counter_timer, 0, 0);
    if(height < width) {
      textSize(height/2);
    } else {
      textSize(width/2);
    }

    if(height < width) {
      text("0", width/2, height/2 + height/24 + height/7);
    } else {
      text("0", width/2, height/2 + width/24 + height/7);
    }

    counter_timer++;
  }
}
