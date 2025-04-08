let timerEl = document.querySelector("#timer");
let btnStartEl = document.querySelector("#start");
let btnStopEl = document.querySelector("#stop");
let btnResetEl = document.querySelector("#reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timeInterval;

function startTimer() {

    btnStartEl.disabled = true;
    btnStopEl.disabled = false;

    timeInterval = setInterval(() => {

        if(seconds === 60) {
            minutes++;
            seconds = 0;
        }
        
        if(minutes === 60) {
            hours++;
            minutes = 0;
        }
        
        seconds++;

        displayTime(hours, minutes, seconds);

    }, 1000);

}

function stopTimer() {
    clearInterval(timeInterval);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
}

function resetTimer() {
    clearInterval(timeInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    btnStartEl.disabled = false;
    btnStopEl.disabled = false;
    displayTime(hours, minutes, seconds);
}

function displayTime(h, m, s) {

    timerEl.innerHTML = `${(h < 10 ? '0' + h : h)}:${(m < 10 ? '0' + m : m)}:${(s < 10 ? '0' + s : s)}`;

}

btnStartEl.addEventListener("click", startTimer);
btnStopEl.addEventListener("click", stopTimer);
btnResetEl.addEventListener("click", resetTimer);