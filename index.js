let timer = null;

let msec = 0,
  sec = 0,
  min = 0,
  hr = 0,
  intervalId;

function Stopwatch() {
    msec++;
    if(msec == 100) {
        msec = 0;
        sec++;
        if(sec==60) {
            sec=0;
            min++;
            if(min==60) {
                min=0;
                hr++;
            }
        }
    }
    const milliseconds = msec.toString().padStart(2, "0");
    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("msec").innerHTML = milliseconds;
}

function startStopwatch() {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(Stopwatch,10)
}

const stopStopwatch = () => {
  clearInterval(timer);
};

const resetStopwatch = () => {
    clearInterval(timer);
    msec = 0, sec = 0, min = 0, hr = 0;

    const milliseconds = msec.toString().padStart(2, "0");
    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("msec").innerHTML = milliseconds;
  };
