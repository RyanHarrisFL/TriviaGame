
// setting my global variables
var countDown = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var intervalId;

//setting up start and done button 
$("#start").on("click", startGame);
$("#done").on("click", results);
$("#countdown").html("<h1>" + countDown + "</h1>");
$("#correct").html("<h1>" + correctAnswers + "</h1>");
$("#wrong").html("<h1>" + wrongAnswers + "</h1>");
$("#unanswered").html("<h1>" + unAnswered + "</h1>");

// This function is set up to hide results and done button at beginnning. Also to show questions and countdown on clicking start 
$(document).ready(function(){
    $("#questions").hide();
    $("#done").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#unanswered").hide();
    $("#final-results").hide();
    $("#start").click( function(){
        $("section").show();
        $("#done").show();
        $(this).hide();
    });
  });

// This function starts the interval 
function startGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//This function sets 
function decrement() {
countDown--;
$("#countdown").html("<h1>" + countDown + "</h1>");

if (countDown === 0) {
    results();
}

}

function results() {
    clearInterval(intervalId);
    $("#questions").hide();
    $("#done").hide();
    $("#correct").show();
    $("#wrong").show();
    $("#unanswered").show();
}

$("input[type='radio']").on('change', function(value) {
var question1 = $("input[name='q1']:checked").val();
if (question1 === "true") {
   correctAnswers++;
   $("#correct").html("<h1>" + correctAnswers + "</h1>");
} 

else if (question1 === "false") {
   wrongAnswers++;
   $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
} 


else if (question1 !== "true" || "false") {
    unAnswered++;
    $("#unanswered").html("<h1>" + unAnswered + "</h1>");    
}

});