
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let timer = document.getElementById('time');
let lapList = document.getElementById('lapList');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    timer.innerHTML = "00:00:00";
    difference = 0;
    running = false;
    lapList.innerHTML = "";
    lapCount = 1;
}

function recordLap() {
    if (running) {
        let lapTime = timer.innerHTML;
        let lapItem = document.createElement('li');
        lapItem.textContent = 'Lap ' + lapCount + ': ' + lapTime;
        lapList.appendChild(lapItem);
        lapCount++;
    }
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', recordLap);


