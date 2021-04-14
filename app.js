const session = document.querySelector(".session");  
const interval = document.querySelector(".interval");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");
const go = document.querySelector(".go");        // go button 
const pause = document.querySelector(".pause");  // pause button
const reset = document.querySelector(".reset");  // reset button
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let currentSession = session.innerHTML;
let currentInterval = interval.innerHTML;
let sessionTimer;
let intervalTimer;
let current;

pause.style.display = 'none';    

// decrease the session time 
const sessionDown = () => {    
    if (currentSession == 1) {
        return;
    }
    currentSession--;
    currentSession = currentSession.toString().length == 1 ? '0'+currentSession : currentSession;
    session.innerHTML = currentSession;
}

// increase the session time
const sessionUp = () => {
    if (currentSession == 60) {
        return;
    }
    currentSession++;
    currentSession = currentSession.toString().length == 1 ? '0'+currentSession : currentSession;
    session.innerHTML = currentSession;
}

// decrease the interval time
const intervalDown = () => {
    if (currentInterval == 1) {
        return;
    }
    currentInterval--;
    currentInterval = currentInterval.toString().length == 1 ? '0'+currentInterval : currentInterval;
    interval.innerHTML = currentInterval;
}

// increase the interval time
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
date.setMinutes(0);

const startSession = () => {
    const sessionTime = currentSession;
    sessionTimer = setInterval(() => {
        // handling seconds
        let second = date.getSeconds();
        second++;
        date.setSeconds(second);
        
        let s = 60-(second);
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        let minute = date.getMinutes();
        
        let m = sessionTime-(minute+1);        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
        
        if (s == '01' && m == '00') {
            setTimeout(() => {
                clearInterval(sessionTimer);
                sec.innerHTML = '00';
                min.innerHTML = currentInterval;
                startInterval();
            }, 1000);
        }
    },1000);
    
    container.style.backgroundColor = 'rgb(159, 253, 51)';
    go.style.display = 'none';    
    pause.style.display = 'inline';    
}
 
const startInterval = () => {
    const intervalTime = currentInterval;
    intervalTimer = setInterval(() => {
        // handling seconds
        let second = date.getSeconds();
        second++;
        date.setSeconds(second);
        
        let s = 60-(second);
        s = s.toString().length == 1 ? '0'+s : s;   // keep length as 2
        sec.innerHTML = s;
        
        // handling minutes
        let minute = date.getMinutes();
        
        let m = intervalTime-(minute);        
        m = m.toString().length == 1 ? '0'+m : m;   // keep length as 2
        min.innerHTML = m;
        
        if (s == '01' && m == '00') {
            setTimeout(() => {
                resetTimer();
                startSession();
            }, 1000);
        }
    },1000);
    
    container.style.backgroundColor = 'rgb(249, 153, 51)';
    go.style.display = 'none';    
    pause.style.display = 'inline';    
}
  
const stopTimer = () => {
    clearInterval(sessionTimer);
    clearInterval(intervalTimer);
    pause.style.display = 'none';    
    go.style.display = 'inline';    
}

const resetTimer = () => {
    window.alert("This will reset the clock")
    stopTimer();
    sec.innerHTML = '00';
    min.innerHTML = '00';
    date.setSeconds(0);
    date.setMinutes(0);
    container.style.backgroundColor = 'rgb(75, 75, 151)';    
}
