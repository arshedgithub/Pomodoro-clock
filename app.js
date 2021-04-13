const session = document.querySelector(".session");
const interval = document.querySelector(".interval");
const go = document.querySelector(".go");
const reset = document.querySelector(".reset");
let currentSession;
let cuurentInterval;


const sessionDown = () => {
    currentSession = session.innerHTML;
    currentSession--;
    session.innerHTML = currentSession;
}
const sessionUp = () => {
    currentSession = session.innerHTML;
    currentSession++;
    session.innerHTML = currentSession;
}
const intervalDown = () => {
    cuurentInterval = interval.innerHTML;
    cuurentInterval--;
    interval.innerHTML = cuurentInterval;
}
const intervalUp = () => {
    cuurentInterval = interval.innerHTML;
    cuurentInterval++;
    interval.innerHTML = cuurentInterval;
}

const date = new Date();
date.setSeconds(0);
date.setMinutes(0);

const startTimer = () => {
    let current = date.getSeconds()
    current++;
    date.setSeconds(current);
    console.log(current);
}

setInterval(startTimer, 1000);