const session = document.querySelector(".session");
const interval = document.querySelector(".interval");
const go = document.querySelector(".go");
const reset = document.querySelector(".reset");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let secondTimer;
let minuteTimer;
let currentSession;
let currentInterval;
let current;


const sessionDown = () => {
    if (currentSession == 0) {
        return;
    }
    currentSession = session.innerHTML;
    currentSession--;
    session.innerHTML = currentSession;
}
const sessionUp = () => {
    if (currentSession == 60) {
        return;
    }
    currentSession = session.innerHTML;
    currentSession++;
    session.innerHTML = currentSession;
}
const intervalDown = () => {
    if (currentInterval == 0) {
        return;
    }
    currentInterval = interval.innerHTML;
    currentInterval--;
    interval.innerHTML = currentInterval;
}
const intervalUp = () => {
    if (currentInterval == 60) {
        return;
    }
    currentInterval = interval.innerHTML;
    currentInterval++;
    interval.innerHTML = currentInterval;
}

const date = new Date();
date.setSeconds(0);
date.setMinutes(0);

const startTimer = () => {
    secondTimer = setInterval(() => {
        second = date.getSeconds()
        second++;
        date.setSeconds(second);
        console.log(second,currentSession,currentInterval);
    },1000);
    minuteTimer = setInterval(() => {
        minute = date.getMinutes()
        console.log(minute);
        minute++;
        date.setMinutes(minute);
    },60000);
}

const stopTimer = () => {
    clearInterval(secondTimer);
    clearInterval(minuteTimer);
}
