function getTime() {


    let amPm = document.querySelector(".am_pm");
    let divider = document.querySelector(".divider");
    let hour = document.querySelector(".hour");
    let mins = document.querySelector(".mins");
    let dayi = document.querySelector(".day");
    let monthDate = document.querySelector(".month");
    let secs = document.querySelector(".secs");

    let currentAmPm
    let today = new Date();
    let currentDate = today.getDate();
    let currentHour = today.getHours();
    let currentmin = today.getMinutes();
    let currentSecs = today.getSeconds();
    let currentDay = today.getDay();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    console.log(today);
    console.log(currentHour);

    if (currentHour >= 12) {
        currentAmPm = "PM";
    }
    else {
        currentAmPm = "AM";
    }
    amPm.textContent = currentAmPm;
    if (currentHour > 12) {
        currentHour = currentHour - 12;
    } else {
        currentHour = currentHour;

    }
    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    } else {
        currentHour = currentHour;
    }
    hour.textContent = currentHour;

    if (currentmin < 10) {
        currentmin = "0" + currentmin;
    } else {
        currentmin = currentmin
    }
    mins.textContent = currentmin;
    if (currentSecs < 10) {
        currentSecs = "0" + currentSecs;
    } else {
        currentSecs = currentSecs;
    }
    secs.textContent = currentSecs;
    // if (currentMonth< 10) {
    //     currentMonth= "0"+ currentMonth;
    //     currentMonth= currentMonth+1;
    // }
    switch (currentDay) {
        case 0:
            day = "SUN";
            break;

        case 1:
            day = "MON";
            break;
        case 2:
            day = "TUES";
            break;
        case 3:
            day = "WED";
            break;
        case 4:
            day = "THURS";
            break;
        case 5:
            day = "FRI";
            break;
        case 6:
            day = "SAT";
            break;

    }
    dayi.textContent = day;
    monthDate.textContent = currentMonth + 1 + "/" + currentDate + "/" + currentYear;

}
setInterval(() => {
    getTime();
}, 1000);