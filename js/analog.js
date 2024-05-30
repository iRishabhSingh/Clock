// Function to update the analog clock
function updateAnalogClock() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  const hourRotationDegree = 30 * currentHour + currentMinute / 2;
  const minuteRotationDegree = 6 * currentMinute;
  const secondRotationDegree = 6 * currentSecond;

  const hourHand = document.getElementById("analogHourHand");
  const minuteHand = document.getElementById("analogMinuteHand");
  const secondHand = document.getElementById("analogSecondHand");

  hourHand.style.transform = `rotate(${hourRotationDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotationDegree}deg)`;
  secondHand.style.transform = `rotate(${secondRotationDegree}deg)`;
}

// Update the analog clock every second
setInterval(updateAnalogClock, 1000);

// Toggle background of analog clock
function toggleAnalogBackground() {
  const backgroundCheckbox = document.getElementById(
    "analogBackgroundCheckbox"
  );
  const analogClockContainer = document.getElementById("analogClock");
  const analogCenter = document.getElementById("analogCenter");
  const hourHand = document.getElementById("analogHourHand");
  const minuteHand = document.getElementById("analogMinuteHand");
  const secondHand = document.getElementById("analogSecondHand");

  if (backgroundCheckbox.checked) {
    analogClockContainer.style.background = `url(./img/clock.png) no-repeat`;
    analogClockContainer.style.backgroundSize = `100%`;
    analogCenter.style.background = `black`;
    hourHand.style.background = `#0000004d`;
    minuteHand.style.background = `#00000080`;
    secondHand.style.background = `#000000`;
  } else {
    analogClockContainer.style.background = ``;
    analogCenter.style.background = `white`;
    hourHand.style.background = `#ffffff4d`;
    minuteHand.style.background = `#ffffff80`;
    secondHand.style.background = `#ffffff`;
  }
}
