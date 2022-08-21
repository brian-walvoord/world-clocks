let secondHand = document.getElementsByClassName("second-hand")[0];
let minuteHand = document.getElementsByClassName("minute-hand")[0];
let hourHand = document.getElementsByClassName("hour-hand")[0];

let timeCodeArr = [0, -13, -8, -16, -14, -6, -1, 1];

function getTime() {
  for(let i = 0; i < 8; i++) {
    let now = new Date();
    secondHand = document.getElementsByClassName("second-hand")[i];
    minuteHand = document.getElementsByClassName("minute-hand")[i];
    hourHand = document.getElementsByClassName("hour-hand")[i];
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    let hourOffSet;
    if (timeCodeArr[i] + hours > 23) {
      hourOffSet = hours - timeCodeArr[i];
    } else if (timeCodeArr[i] + hours < 0) {
      hourOffSet = (24 + (timeCodeArr[i] + hours));
    } else {
      hourOffSet = timeCodeArr[i];
    }
    secondHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minuteHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
    hourHand.style.transform = `rotate(${(hours + hourOffSet) * 30 + minutes / 2}deg)`;
  }
}

setInterval(getTime, 100);
