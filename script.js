let secondHand, minuteHand, hourHand, amOrPm, day;

function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }
  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
};

let array = [
  "Asia/Tokyo", 
  "America/New_York", 
  "Europe/London", 
  "America/Los_Angeles",
  "America/Chicago",
  "Europe/Moscow",
  "Asia/Shanghai",
  "Australia/Sydney"
];

function getTime() {
  for(let i = 0; i < 8; i++) {
    let now = changeTimeZone(new Date(), array[i]);
    secondHand = document.getElementsByClassName("second-hand")[i];
    minuteHand = document.getElementsByClassName("minute-hand")[i];
    hourHand = document.getElementsByClassName("hour-hand")[i];
    amOrPm = document.getElementsByClassName("amOrPm")[i];
    day = document.getElementsByClassName("day")[i];
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    let fullTime = now.toTimeString().split(" ")[0];
    day.innerText = fullTime.split(":").slice(0, 2).join(":");
    if (hours < 12) {
      amOrPm.innerText = "AM";
    } else {
      amOrPm.innerText = "PM";
    }
    secondHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minuteHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
    hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
  }
}

setInterval(getTime, 100);