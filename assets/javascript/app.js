
// setting my global variables
var countDown = 60;
var correctAnswers = [];
var wrongAnswers = 8
var intervalId;

//setting up buttons, timer and results display 
$("#start").on("click", startGame);
$("#done").on("click", results);
$('#restart').click(function () {
    location.reload(true); 
});
$("#countdown").html("<h1>" + countDown + "</h1>");
$("#correct").html("<h1>" + correctAnswers.length + "</h1>");
$("#wrong").html("<h1>" + wrongAnswers + "</h1>");


// This function is set up to hide results and done button at beginnning. Also to show questions and countdown on clicking start 
$(document).ready(function(){
    $("#questions").hide();
    $("#done").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#correct-label").hide();
    $("#wrong-label").hide();
    $("#thumbs").hide();
    $("#restart").hide();
    $("#final-results").hide();
    $("#start").click( function(){
        $("section").show();
        $("#done").show();
        $("#poster").hide();
        $(this).hide();
    });
  });

// This function starts the interval 
function startGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//This is the countdown function. 
function decrement() {
countDown--;
$("#countdown").html("<h1>" + countDown + "</h1>");

if (countDown === 0) {
    results();
}

}

// This displays the results and hides the questions.
function results() {
    clearInterval(intervalId);
    $("#questions").hide();
    $("#done").hide();
    $("#correct").show();
    $("#wrong").show();
    $("#correct-label").show();
    $("#wrong-label").show();
    $("#thumbs").show();
    $("#unanswered").show();
    $("#restart").show();
}

    // Question 1
$("input[id='answer1True']").on('change', function() {
    var question1 = $("input[name='q1']:checked").val();
    if (question1 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 

    });

    // Question 2
$("input[id='answer2True']").on('change', function() {
    var question2 = $("input[name='q2']:checked").val();
    if (question2 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
        $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
        $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
     } 

    });

    // Question 3
$("input[id='answer3True']").on('change', function() {
    var question3 = $("input[name='q3']:checked").val();
    if (question3 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 
     
    });

    // Question 4
$("input[id='answer4True']").on('change', function() {
    var question4 = $("input[name='q4']:checked").val();
    if (question4 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 
    
    });

    // Question 5
$("input[id='answer5True']").on('change', function() {
    var question5 = $("input[name='q5']:checked").val();
    if (question5 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 
      
    });

    // Question 6
$("input[id='answer6True']").on('change', function() {
    var question6 = $("input[name='q6']:checked").val();
    if (question6 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 
    
    });

    // Question 7
$("input[id='answer7True']").on('change', function() {
    var question7 = $("input[name='q7']:checked").val();
    if (question7 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    }    
    
    });

    // Question 8
$("input[id='answer8True']").on('change', function() {
    var question8 = $("input[name='q8']:checked").val();
    if (question8 === "true") {
        correctAnswers.push(true);
        wrongAnswers--;
       $("#correct").html("<h1>" + correctAnswers.length + "</h1>");
       $("#wrong").html("<h1>" + wrongAnswers + "</h1>");
    } 
    
    });
    
   