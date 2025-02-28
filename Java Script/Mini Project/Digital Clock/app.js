let is24HourFormat = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let amPm = "";

    // Converting 0 to 12 for 12-hour format
    if (!is24HourFormat) {
        amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    // Add leading zeros if needed
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const timeString = `${hours} : ${minutes} : ${seconds} ${amPm}`.trim();
    document.querySelector("#clock").innerText = timeString;
}

// Running updateClock function every second(1000 milliseconds)
setInterval(updateClock, 1000);

// Toggle format on button click
document.getElementById("toggle-format").addEventListener("click", function () {
    is24HourFormat = !is24HourFormat;
    this.textContent = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
    updateClock();
});

updateClock();
