function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();
    
    let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    let amPm = "AM";

    if(theHour >= 12) {
        amPm = "PM";
    }

    if (theHour > 12) {
        theHour = theHour % 12;
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    }
    if(theSeconds < 10) {
        theSeconds = "0" + theSeconds; // Corrected variable name
    }
    if(theMinutes < 10) {
        theMinutes = "0" + theMinutes; // Corrected variable name
    }

    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour
    document.getElementById('minute').innerHTML = theMinutes
    document.getElementById('second').innerHTML = theSeconds
    document.getElementById('ampm').innerHTML = amPm

    let evenSeconds = theSeconds % 2

    if(evenSeconds === 0) {
        document.getElementById('colon1').style.color = "white";
        document.getElementById('colon2').style.color = "white";
    }
    else {
        document.getElementById('colon1').style.color = "grey";
        document.getElementById('colon2').style.color = "grey";
    }

    // Define daytime and nighttime ranges (adjust according to your local time)
    const dayTimeStart = 6; // 6:00 AM
    const dayTimeEnd = 18;  // 6:00 PM

    let backgroundColor;

    // Check if it's daytime
    if (theHour >= dayTimeStart && theHour < dayTimeEnd) {
        backgroundColor = "rgb(36, 49, 36)"; // Set daytime background color
    } else {
        backgroundColor = "white"; // Set nighttime background color
    }

    document.body.style.backgroundColor = backgroundColor;
}

setInterval(() => {
    currentTime();
}, 1000);
