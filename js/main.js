// Need to get a universal time for when the clock starts and finishes.
let start = Date.UTC(1996, 02, 23);
let now = new Date;
let finish = Date.UTC(2089, 11, 30);
let time_left = finish - now;
let time_spent = now - start;
let time_total = finish - start;

//  Total number of seconds.
let totalSeconds = Math.round(time_left / 1000);

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
};

//sets seconds
const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
    document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
    document.querySelector("#days").textContent = d + "d";
};

const setPercentage = (p) => {
    document.querySelector("#percentage").textContent = p + "%";
};

// Update the count down every 1 second
var x = setInterval(() => {
    //clears countdown when all seconds are counted
    if (totalSeconds <= 0) {
        clearInterval(x);
    }
    setDays(convert(tempSeconds, 24 * 60 * 60));
    setHours(convert(tempSeconds, 60 * 60));
    setMinutes(convert(tempSeconds, 60));
    setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
    setPercentage(Math.round((time_spent / time_total) * 100));
    totalSeconds--;
    tempSeconds = totalSeconds;
}, 1000);