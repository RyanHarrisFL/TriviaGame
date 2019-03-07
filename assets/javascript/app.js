var countDown = 10;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var intervalId;

$("#start").on("click", startGame);
$("#done").on("click", results);
$("#countdown").html("<h1>" + countDown + "</h1>");
$("#correct").html("<h1>" + correctAnswers + "</h1>");
$("#wrong").html("<h1>" + wrongAnswers + "</h1>");
$("#unanswered").html("<h1>" + unAnswered + "</h1>");

$(document).ready(function(){
    $("#questions").hide();
    $("#done").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#unAnswered").hide();
    $("#final-results").hide();
    $("#start").click( function(){
        $("section").show();
        $("#done").show();
        $(this).hide();
    });
  });

function startGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

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
    $("#unAnswered").show();
}

$("input[type='radio']").on('change', function(value) {
var question1 = $("input[name='q1']:checked").val();
if (question1 === "true") {
   correctAnswers++;
   $("#correct").html("<h1>" + correctAnswers + "</h1>");
} else if (question1 === "false") {
   wrongAnswers++;
   $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
}

});