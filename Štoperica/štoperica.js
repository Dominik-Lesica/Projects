let timeIntervalId;

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

const milisecondsText = document.querySelector('.miliseconds');
const secondsText = document.querySelector('.seconds');
const minutesText = document.querySelector('.minutes');

const startStopButton = document.querySelector('.start-stop-button');
const clearButton = document.querySelector('.clear-button');

function formatTime(time) {
  if(time===0) {
    return '00'
  }
  return time<10 ? `0${time}` : time;
}

function updateTime() {
  minutesText.innerHTML=formatTime(minutes);
  secondsText.innerHTML=formatTime(seconds);
  milisecondsText.innerHTML=formatTime(Math.floor(miliseconds/10));
}


function startTimer() {
  if(timeIntervalId) {
    return
  }

  timeIntervalId = setInterval(() => {
    miliseconds+=20;

    if (seconds>=60) {
      seconds=0;
      minutes++;
    }

      
    if (miliseconds>=1000) {
      miliseconds = 0
      seconds++;
    } 
    
    

    updateTime();
  }, 20)
  startStopButton.textContent = 'Stop';
}

function stopTimer() {
  clearInterval(timeIntervalId);
  timeIntervalId = null;

  startStopButton.textContent = 'Start';
}

function clearTimer() {
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  
  updateTime()
}

startStopButton.addEventListener('click', () => {
  if(timeIntervalId) {
    stopTimer();
    startStopButton.style.backgroundColor = 'green';
  } else {
    startTimer();
    startStopButton.style.backgroundColor = 'red';
  }
});

clearButton.addEventListener('click', () => {
  clearTimer();
  stopTimer();
  startStopButton.style.backgroundColor = 'green';
});





 










