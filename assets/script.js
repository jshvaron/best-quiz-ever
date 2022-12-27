// Const/Var stated
const startQuiz = document.getElementById("startbtn");
const countDown = document.getElementById("countdown"); 
let countStart = 10;

//Starts reduction of timer on click
startQuiz.addEventListener("click", function(){
    setInterval(function(){
       countStart--;
       countDown.textContent = "Timer: " + countStart;
       if(countStart === -1){
        alert("Your time is up, better luck next time!")
        window.location.reload();
       };
       
    }, 1000)});




