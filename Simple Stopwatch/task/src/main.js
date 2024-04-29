// Stopwatch script
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");
const timerDisplay = document.querySelector("#timer");

let startTime, updatedTime, difference, tInterval, savedTime;
let running = false;

// Start Timer Function
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

// Stop Timer Function
function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
    }
}

// Reset Timer Function
function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    running = false;
    timerDisplay.innerHTML = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    // Clear the laps list
    document.querySelector('#laps').innerHTML = '';
}

// Display Lap Function
function lapTimer() {
    if (running) {
        let lapTime = timerDisplay.innerHTML;
        let lapsList = document.querySelector('#laps');
        let newLap = document.createElement('li');
        newLap.innerHTML = lapTime;
        lapsList.appendChild(newLap);
    }
}

// Display Time Function
function getShowTime() {
    // Getting the current time
    updatedTime = new Date().getTime();
    // Calculating the difference between the current time and the start time
    if (savedTime) {
        difference = (updatedTime - startTime) + savedTime;
    } else {
        difference = updatedTime - startTime;
    }
    // Calculating minutes, seconds, and milliseconds
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % (1000)) / 10);
    // Adding a zero in front of numbers < 10
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    // Displaying the time
    timerDisplay.innerHTML = minutes + ':' + seconds + ':' + milliseconds;
}


// Event Listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);




