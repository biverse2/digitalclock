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
        theHour = "0" + theSeconds;
    }
    if(theMinutes < 10) {
        theHour = "0" + theMinutes;
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
}

setInterval(() => {
    currentTime();
}, 1000);