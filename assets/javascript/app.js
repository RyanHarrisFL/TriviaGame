var countDown = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var intervalId;

$("#start").on("click", startGame);
$("#done").on("click", results);
$("#countdown").html("<h1>" + countDown + "</h1>");

$(document).ready(function(){
    $("#questions").hide();
    $("#final-results");
    $("#start").click( function(){
        $("section").show();
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
    console.log("You're a winner!")
}

