window.onload = function () {
  // initialize variables for seconds and tens (hundredths of a second)
  let seconds = 00;
  let tens = 00;
  let minute = 00;

  // grab elements from HTML to display timer
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinute = document.getElementById("minute");

  // grab buttons from HTML to control timer
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  // create an Interval variable to store setInterval
  let Interval;

  // when start button is clicked, clear any existing interval and start the timer
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  // when stop button is clicked, clear the interval to stop the timer
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // when reset button is clicked, clear the interval, reset seconds and tens, and update the HTML
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minute = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinute.innerHTML = minute;
  };

  // function to start the timer
  function startTimer() {
    // increment tens by 1
    tens++;

    // if tens is less than or equal to 9, add a leading 0
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    // if tens is greater than 9, don't add a leading 0
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    // if tens is greater than 99, increment seconds and reset tens
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // if seconds is greater than 9, don't add a leading 0
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    // if seconds is greater than 59, increment
    if (seconds > 59) {
      minute++;
      appendMinute.innerHTML = "0" + minute;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // if seconds is greater than 9, don't add a leading 0
    if (minute > 9) {
      appendMinute.innerHTML = minute;
    }
  }
};
