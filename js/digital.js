// Function to update the digital clock
function updateDigitalClock() {
  const currentDate = new Date();
  updateBlinkingColon(currentDate.getSeconds());
  updateAmPmIndicator(currentDate.getHours());
  const hours = formatHours(
    currentDate.getHours(),
    document.getElementById("hourFormatCheckbox").checked
  );
  const { formattedMinutes, formattedSeconds } = formatTime(
    currentDate.getMinutes(),
    currentDate.getSeconds()
  );
  updateTimeOnPage(hours, formattedMinutes, formattedSeconds);
  updateDateOnPage(
    currentDate.getDate(),
    currentDate.getDay(),
    currentDate.getMonth(),
    currentDate.getFullYear()
  );
}

// Function to update the blinking colon
function updateBlinkingColon(seconds) {
  const blinkColon = document.getElementById("blinkColon");
  blinkColon.style.color = seconds % 2 === 0 ? "white" : "transparent";
}

// Function to update AM/PM indicator
function updateAmPmIndicator(hours) {
  const ampmIndicator = document.getElementById("ampmIndicator");
  ampmIndicator.innerHTML = hours >= 12 ? "PM" : "AM";
}

// Function to format hours based on 12/24-hour format
function formatHours(hours, is24HourFormat) {
  if (!is24HourFormat) {
    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours -= 12;
    }
    document.getElementById("ampmIndicator").style.display = "inline-block";
  } else {
    document.getElementById("ampmIndicator").style.display = "none";
  }
  return hours < 10 ? `0${hours}` : hours;
}

// Function to format minutes and seconds with leading zeros
function formatTime(minutes, seconds) {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return { formattedMinutes, formattedSeconds };
}

// Function to update time on the web page
function updateTimeOnPage(hours, formattedMinutes, formattedSeconds) {
  const hourDigit = document.getElementById("hourDigit");
  const minuteDigit = document.getElementById("minuteDigit");
  const secondDigit = document.getElementById("secondDigit");
  if (hours !== hourDigit.innerHTML) hourDigit.innerHTML = hours;
  if (formattedMinutes !== minuteDigit.innerHTML)
    minuteDigit.innerHTML = formattedMinutes;
  if (formattedSeconds !== secondDigit.innerHTML)
    secondDigit.innerHTML = formattedSeconds;
}

// Function to update date on the web page
function updateDateOnPage(date, day, month, year) {
  const dayDate = document.getElementById("dayDate");
  const weekDay = document.getElementById("weekDay");
  const monthDate = document.getElementById("monthDate");
  const yearDate = document.getElementById("yearDate");

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  if (date < 10) dayDate.innerHTML = `0${date}`;
  else dayDate.innerHTML = date;
  if (weekDays[day] !== weekDay.innerHTML) weekDay.innerHTML = weekDays[day];
  if (months[month] !== monthDate.innerHTML)
    monthDate.innerHTML = months[month];
  if (year !== yearDate.innerHTML) yearDate.innerHTML = year;
}

// Update the digital clock every second
setInterval(updateDigitalClock, 1000);

// Toggle 24-hour format
function toggle24HourFormat() {
  const hourFormatCheckbox = document.getElementById("hourFormatCheckbox");
  hourFormatCheckbox.checked = !hourFormatCheckbox.checked;
}
