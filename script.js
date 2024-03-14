let hr = min = sec = ms = "0"+0;
let startTimer;

let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let milli = document.getElementById("start-timer")


startBtn.addEventListener('click',start)
stopBtn.addEventListener('click',stop)
resetBtn.addEventListener('click',reset)

function start(){
    startBtn.classList.add("active")
    startBtn.classList.add("stopActive")

    startTimer = setInterval(()=>{
        ms++
        ms = ms < 10 ? "0" + ms : ms;
        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    },10)
}
function stop(){
    stopBtn.classList.add("active")
    stopBtn.classList.add("stopActive")
    clearInterval(startTimer)
}
function reset(){
    resetBtn.classList.add("active")
    resetBtn.classList.add("stopActive")
    clearInterval(startTimer)
    hr = min = sec = ms = "0"+0;
    putValue();
}

function putValue(){
    milli.innerText = ms;
    second.innerText = sec;
    minute.innerText = min;
    hour.innerText = hr;
}