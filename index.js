// const clock = document.querySelector(".time");
let timer = null;

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;

function Stopwatch() {
    sec++;
    if(sec==60) {
        sec=0;
        min++;
        if(min==60) {
            min=0;
            hr++;
        }
    }
    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

function startStopwatch() {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(Stopwatch,1000)
}

const stopStopwatch = () => {
  clearInterval(timer);
};

const resetStopwatch = () => {
    clearInterval(timer);
    sec = 0, min = 0, hr = 0;

    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  };