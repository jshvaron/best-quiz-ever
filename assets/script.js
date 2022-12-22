//Starts 90 sec timer on event listner//
var countDown = 90
var startTimer = setInterval(function(){
    countDown--;
    document.getElementById("countdown").textContent = "Timer: " + countDown;
    
}, 1000);