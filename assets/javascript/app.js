var countDown = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var intervalId;

$("#start").on("click", startGame);

function startGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
countDown--;
$("#countdown").html("<h1>" + countDown + "</h1>");

}

function stop()

