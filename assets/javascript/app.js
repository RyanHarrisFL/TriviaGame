
// setting my global variables
var countDown = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var intervalId;

//setting up start and done button 
$("#start").on("click", startGame);
$("#done").on("click", results);
$("#countdown").html("<h1>" + countDown + "</h1>");
$("#correct").html("<h1>" + correctAnswers + "</h1>");
$("#wrong").html("<h1>" + wrongAnswers + "</h1>");

// This function is set up to hide results and done button at beginnning. Also to show questions and countdown on clicking start 
$(document).ready(function(){
    $("#questions").hide();
    $("#done").hide();
    $("#correct").hide();
    $("#wrong").hide();
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
    $("#unanswered").show();
}

    // Question 1
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
    
    });

    // Question 2
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
    
    });

    // Question 3
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
    
    });

    // Question 4
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
    
    });

    // Question 5
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
    
    });

    // Question 6
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
    
    });

    // Question 7
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
    
    });

    // Question 8
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
    
    });

    // Question 9
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
    
    });
    
    // Question 10
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
        
        });