// Const/Var stated
const startQuiz = document.getElementById("startbtn");
const countDown = document.getElementById("countdown"); 
let countStart = 10;

//Starts reduction of timer on click, alerts end of timer and then reloads page
startQuiz.addEventListener("click", function(){
    setInterval(function(){
       countStart--;
       countDown.textContent = "Timer: " + countStart;
       if(countStart === -1){
        alert("Your time is up, Click 'ok' to restart.")
        window.location.reload();
       };
       
    }, 1000)});




