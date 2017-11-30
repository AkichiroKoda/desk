
    ;(function clock(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
   
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    var setClock = document.getElementById("set_clock");
    setClock.innerHTML = hour + " : " + minute + " : " + second;
    setTimeout("clock()", 1000);
})();
 