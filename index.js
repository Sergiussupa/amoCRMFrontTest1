const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


let tickTuck = 0;
let starter = null;

function start() {
  if (starter) {
    return
  }

  starter = setInterval(timer, 1000);
}

function timer() {
  if (tickTuck > 0) {
    tickTuck--;

    // Format our timer
    let hrs = Math.floor(tickTuck / 3600);
    let mins = Math.floor((tickTuck - (hrs * 3600)) / 60);
    let secs = tickTuck % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    timerEl.innerText = `${hrs}:${mins}:${secs}`;
  }
}

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  if (360000 < seconds) {
    alert('Вы ввели слишком большое число, оно не умещается в формат hh:mm:ss');
    inputEl.value = '360000';
    return;
  }
  tickTuck = seconds;
  //animateTimer(seconds);
  start();
  inputEl.value = '';
});
