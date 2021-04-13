const session = document.querySelector(".session");
const interval = document.querySelector(".interval");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");
const go = document.querySelector(".go");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let currentSession = session.innerHTML;
let currentInterval = interval.innerHTML;
let sessionTimer;
let intervalTimer;
let current;

pause.style.display = 'none';    

const sessionDown = () => {
    if (currentSession == 1) {
        return;
    }
    currentSession--;
    currentSession = currentSession.toString().length == 1 ? '0'+currentSession : currentSession;
    session.innerHTML = currentSession;
}

const sessionUp = () => {
    if (currentSession == 60) {
        return;
    }
    currentSession++;
    currentSession = currentSession.toString().length == 1 ? '0'+currentSession : currentSession;
    session.innerHTML = currentSession;
}

const intervalDown = () => {
    if (currentInterval == 1) {
        return;
    }
    currentInterval--;
    currentInterval = currentInterval.toString().length == 1 ? '0'+currentInterval : currentInterval;
    interval.innerHTML = currentInterval;
}

const intervalUp = () => {
    if (currentInterval == 60) {
        return;
    }
    // currentInterval = interval.innerHTML;
    currentInterval++;
    currentInterval = currentInterval.toString().length == 1 ? '0'+currentInterval : currentInterval;
    interval.innerHTML = currentInterval;
}

const date = new Date();
date.setSeconds(0);
date.setMinutes(1);

const startSession = () => {
    sessionTimer = setInterval(() => {
        // handling seconds
        let second = date.getSeconds()
        second++;
        date.setSeconds(second);
        let s = 60-second;
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        let minute = date.getMinutes()
        let m = currentSession-minute;        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
        date.setMinutes(minute);

        if (s == '00') {
            startInterval();
        }
    },1000);
    
    container.style.backgroundColor = 'rgb(159, 253, 51)';
    go.style.display = 'none';    
    pause.style.display = 'inline';    
}
 
const startInterval = () => {
    intervalTimer = setInterval(() => {
        // handling seconds
        let second = date.getSeconds()
        // second++;
        console.log(second);
        date.setSeconds(second);
        let s = 60-second;
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        let minute = date.getMinutes()
        date.setMinutes(minute);
        let m = currentInterval-minute;        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
    },1000);
    
    container.style.backgroundColor = 'rgb(180, 83, 51)';
}

const stopTimer = () => {
    clearInterval(sessionTimer);
    clearInterval(intervalTimer);
    pause.style.display = 'none';    
    go.style.display = 'inline';    
}

const resetTimer = () => {
    stopTimer();
    sec.innerHTML = '00';
    min.innerHTML = '00';
    date.setSeconds(0);
    date.setMinutes(1);

}
