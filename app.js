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

const sessionDown = () => {
    if (currentSession == 0) {
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
    if (currentInterval == 0) {
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
    min.innerHTML = currentSession;
    
    sessionTimer = setInterval(() => {
        // handling seconds
        second = date.getSeconds()
        second++;
        date.setSeconds(second);
        let s = 60-second;
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        minute = date.getMinutes()
        let m = currentSession-minute;        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
        date.setMinutes(minute);
    },1000);
    
    container.style.backgroundColor = 'rgb(159, 253, 51)';
    
    // if (go.textContent == 'Go') {
    //     btns.innerHTML = `
    //         <button onclick="stopTimer()" class="pause col-sm-2 p-1">Pause</button>
    //         <button onclick="resetTimer()" class="reset col-sm-2 p-1">Reset</button>
    //     `; 
    //     return;   
    // }
    // if (pause.textContent == 'Pause') {
    //     btns.innerHTML = `
    //         <button onclick="startSession()" class="go col-sm-2 p-1">Go</button>
    //         <button onclick="resetTimer()" class="reset col-sm-2 p-1">Reset</button>
    //     `;
    //     return;
    // }
    
}
 
const startInterval = () => {
    min.innerHTML = currentInterval;
    
    intervalTimer = setInterval(() => {
        // handling seconds
        second = date.getSeconds()
        second++;
        date.setSeconds(second);
        let s = 60-second;
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        minute = date.getMinutes()
        let m = currentInterval-minute;        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
        date.setMinutes(minute);
    },1000);
    
    container.style.backgroundColor = 'rgb(220, 53, 51)';
    
}

const stopTimer = () => {
    clearInterval(sessionTimer);
    clearInterval(intervalTimer);
}

const resetTimer = () => {
    stopTimer();
    sec.innerHTML = '00';
    min.innerHTML = '00';
    date.setSeconds(0);
    date.setMinutes(1);

}
