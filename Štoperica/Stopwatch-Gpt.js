let timeIntervalId;
let currentMinutes = 0;
let currentSeconds = 0;
let currentMilliseconds = 0;

const millisecondsText = document.querySelector('.milliseconds');
const secondsText = document.querySelector('.seconds');
const minutesText = document.querySelector('.minutes');

const startStopButton = document.getElementById('start-stop-button');
const clearButton = document.getElementById('clear-button');

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function updateDisplay() {
  minutesText.textContent = formatTime(currentMinutes);
  secondsText.textContent = formatTime(currentSeconds);
  millisecondsText.textContent = formatTime(currentMilliseconds);
}

function startTimer() {
  if (!timeIntervalId) {
    timeIntervalId = setInterval(() => {
      currentMilliseconds += 10;

      if (currentMilliseconds >= 1000) {
        currentMilliseconds = 0;
        currentSeconds++;

        if (currentSeconds >= 60) {
          currentSeconds = 0;
          currentMinutes++;
        }
      }

      updateDisplay();
    }, 10);

    startStopButton.textContent = 'Stop';
  }
}

function stopTimer() {
  clearInterval(timeIntervalId);
  timeIntervalId = null;
  startStopButton.textContent = 'Start';
}

function clearTimer() {
  currentMinutes = 0;
  currentSeconds = 0;
  currentMilliseconds = 0;
  updateDisplay();
}

startStopButton.addEventListener('click', () => {
  if (timeIntervalId) {
    stopTimer();
  } else {
    startTimer();
  }
});

clearButton.addEventListener('click', () => {
  clearTimer();
  stopTimer();
});
