import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import notiflix from 'notiflix';

const inputPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timeRefs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  mins: document.querySelector('span[data-minutes]'),
  secs: document.querySelector('span[data-seconds]'),
};

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputPicker, flatpickrOptions);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let countdownTimeout;

function startCountdown(selectedTime) {
  const now = Date.now();

  if (selectedTime <= now) {
    notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  const timeRemaining = selectedTime - now;
  countdown(timeRemaining);

  if (countdownTimeout) {
    clearTimeout(countdownTimeout);
  }

  countdownTimeout = setTimeout(() => {
    startCountdown(selectedTime);
  }, 1000);
}

function countdown(time) {
  const { days, hours, minutes, seconds } = convertMs(time);

  timeRefs.days.textContent = days;
  timeRefs.hours.textContent = hours;
  timeRefs.mins.textContent = minutes;
  timeRefs.secs.textContent = seconds;

  if (time <= 0) {
    clearTimeout(countdownTimeout);
  }
}

startBtn.addEventListener('click', () => {
  const selectedTime = Date.parse(inputPicker.value);
  startCountdown(selectedTime);
});
