;(function clock(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    function getRand(min, max){
        return Math.floor(Math.random()*(max-min + 1) + min);
    }
    function getRandStyle(){
        return "color: rgb(" + getRand(0,255) + ", " + getRand(0,255) + ", " + getRand(0,255) +"); background-color: rgb(" + getRand(0,255) + ", " + getRand(0,255) + ", " + getRand(0,255) +"); font-size: 50px;";
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    var clockHour = document.getElementById("hour");
    var clockMinute = document.getElementById("minute");
    var clockSecond = document.getElementById("second");
    clockHour.innerHTML = hour;
    clockHour.style = getRandStyle();
    clockMinute.innerHTML = minute;
    clockMinute.style = getRandStyle();
    clockSecond.innerHTML = second;
    clockSecond.style = getRandStyle();
    setInterval(clock, 1000);
})();
 