let timer = null;
let totalSeconds = 0;
let remainingSeconds = 0;
let isPaused = false;


const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const alarm = document.getElementById('alarm');

// Circular timer toggle and SVG
const toggleCircular = document.getElementById('toggle-circular');
const circularContainer = document.getElementById('circular-timer-container');
const circularProgress = document.getElementById('circular-progress');
const CIRCUMFERENCE = 2 * Math.PI * 54; // r=54

toggleCircular.addEventListener('change', function () {
  if (toggleCircular.checked) {
    circularContainer.classList.remove('hidden');
    updateCircularProgress();
  } else {
    circularContainer.classList.add('hidden');
  }
});

function updateCircularProgress() {
  if (!toggleCircular.checked) return;
  let percent = totalSeconds === 0 ? 0 : (remainingSeconds / totalSeconds);
  let offset = CIRCUMFERENCE * (1 - percent);
  circularProgress.setAttribute('stroke-dashoffset', offset);
}

// Doneness radio buttons
const donenessRadios = {
  soft: document.getElementById('soft'),
  medium: document.getElementById('medium'),
  hard: document.getElementById('hard'),
};

const donenessTimes = {
  soft: { min: 4, sec: 0 },
  medium: { min: 7, sec: 0 },
  hard: { min: 10, sec: 0 },
};
// When a doneness option is selected, update the timer inputs
Object.keys(donenessRadios).forEach((key) => {
  donenessRadios[key].addEventListener('change', function () {
    if (this.checked) {
      minutesInput.value = donenessTimes[key].min;
      secondsInput.value = donenessTimes[key].sec;
      resetTimer();
    }
  });
});


function updateDisplay(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  display.textContent = `${m}:${s}`;
  updateCircularProgress();
}

function startTimer() {
  if (timer) return;
  if (!isPaused) {
    const mins = parseInt(minutesInput.value, 10) || 0;
    const secs = parseInt(secondsInput.value, 10) || 0;
    totalSeconds = mins * 60 + secs;
    remainingSeconds = totalSeconds;
    updateCircularProgress();
  }
  if (remainingSeconds <= 0) return;
  alarm.classList.add('hidden');
  updateDisplay(remainingSeconds);
  let tickCounter = 0;
  timer = setInterval(() => {
    if (tickCounter % 2 === 0) {
      try {
        const tick = new Audio('audio/tick-tock.mp3');
        tick.play();
      } catch (e) {}
    }
    tickCounter++;
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateDisplay(remainingSeconds);
    } else {
      clearInterval(timer);
      timer = null;
      alarm.classList.remove('hidden');
      playAlarm();
    }
  }, 1000);
  isPaused = false;
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    isPaused = true;
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = false;
  alarm.classList.add('hidden');
  const mins = parseInt(minutesInput.value, 10) || 0;
  const secs = parseInt(secondsInput.value, 10) || 0;
  remainingSeconds = mins * 60 + secs;
  updateDisplay(remainingSeconds);
  updateCircularProgress();
}


function playAlarm() {
  // Play ding.mp3 from audio folder
  try {
    const audio = new Audio('audio/ding.mp3');
    audio.play();
  } catch (e) {
    // fallback: alert
    alert("Time's up!");
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
resetTimer();
