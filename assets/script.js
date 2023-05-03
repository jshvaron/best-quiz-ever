// Const/Var stated for timer
const startQuiz = document.getElementById("startbtn");
const countDown = document.getElementById("countdown"); 
let countStart = 30;

// qry selects buttons to use to connect next question function on event listner
const showQ2 = document.querySelector('.showQ2');
const showQ3 = document.querySelector('.showQ3');
const showQ4 = document.querySelector('.showQ4');
const showDone = document.querySelector('.showDone');
const showScores = document.querySelector('.highscorebtn');


// assignes variables to qry selectors to set displays to none 'hides' by default
let q1Hide = document.querySelector('.question-box-1').style.display = "none";
let q2Hide = document.querySelector('.question-box-2').style.display = "none";
let q3Hide = document.querySelector('.question-box-3').style.display = "none";
let q4Hide = document.querySelector('.question-box-4').style.display = "none";
let doneHide = document.querySelector('.done-box').style.display = "none";
let scoreHide = document.querySelector('.scores-box').style.display = "none";






//Starts reduction of timer on click, alerts end of timer and then reloads page
startQuiz.addEventListener("click", function(){
   setInterval(function(){
      countStart--;
      countDown.textContent = "Timer: " + countStart;
      if(countStart === -1){
      alert("Your time is up, Click 'ok' to try again.")
      window.location.reload();
   };
       
}, 1000)});


// hides menu on click and displays question 1
startQuiz.addEventListener("click", function(){
   console.log("clicked")
   let q1Hide = document.querySelector('.question-box-1');
   let menuHide = document.querySelector('.menu-box').style.display = "none";
   menuHide;
   // set the display style to none to hide the element
   q1Hide.style.display = "block";
   
});

// hides question 1 on click and displays question 2
showQ2.addEventListener("click", function(){
   console.log('showQ2 clicked');
   let q2Hide = document.querySelector('.question-box-2');
      q2Hide.style.display = "block";
   let q1Hide = document.querySelector('.question-box-1');
     q1Hide.style.display = "none";
});

// hides question 1,2 on click and displays question 3
showQ3.addEventListener("click", function(){
   console.log('showQ3 clicked');
   let q3Hide = document.querySelector('.question-box-3');
   q3Hide.style.display = "block";
   //////////////////////////////////////////////////////
   let q1Hide = document.querySelector('.question-box-1');
     q1Hide.style.display = "none";
   let q2Hide = document.querySelector('.question-box-2');
   q2Hide.style.display = "none";
});

// hides question 1,2,3 on click and displays question 3
showQ4.addEventListener("click", function(){
   console.log('showQ4 clicked');
   let q4Hide = document.querySelector('.question-box-4');
   q4Hide.style.display = "block";
   //////////////////////////////////////////////////////
   let q1Hide = document.querySelector('.question-box-1');
     q1Hide.style.display = "none";
   let q2Hide = document.querySelector('.question-box-2');
   q2Hide.style.display = "none";
   let q3Hide = document.querySelector('.question-box-3');
   q3Hide.style.display = "none";
});

// hides question 1,2,3,4 on click and displays Done and highScores box
showDone.addEventListener("click", function(){
   console.log('showDone clicked');
   let doneHide = document.querySelector('.done-box');
   doneHide.style.display = "block";
   let scoreHide = document.querySelector('.scores-box');
   scoreHide.style.display = "block";
   //////////////////////////////////////////////////////
   let q1Hide = document.querySelector('.question-box-1');
     q1Hide.style.display = "none";
   let q2Hide = document.querySelector('.question-box-2');
      q2Hide.style.display = "none";
   let q3Hide = document.querySelector('.question-box-3');
      q3Hide.style.display = "none";
   let q4Hide = document.querySelector('.question-box-4');
      q4Hide.style.display = "none";
});

//hides menu and shows higscores box
showScores.addEventListener("click", function(){
   console.log('scores');
   let menuHide = document.querySelector('.menu-box').style.display = "none";
   menuHide;
   let scoreHide = document.querySelector('.scores-box');
   scoreHide.style.display = "block";
});





