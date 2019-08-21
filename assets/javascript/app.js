var count = 30;
var timer;
var correct = false;

var correctCount = 0;
var wrongCount = 0;

var answerArr = [1,1,1,1,1,1,1];
var index = 0;

var images = ["","","","","","",""];

var questions = ["this is a test","this is also a test","","","","",""];

var answers = [["test","2","3","4"],["1","2","3","4"],["","","",""],
["","","",""],["","","",""],["","","",""],["","","",""]];

var correctText = ["","","","","","",""];




$("#start").on("click", function() {
    start();
    $("#start").remove();
});


$(".answers").on("click", function() {
    clearInterval(timer);
    correct = parseInt($(this).data('value')) === answerArr[index];
    console.log(correct);
    answerScreen();

});

function start(){
    clearInterval(timer);
    timer = setInterval(countDown,1000)
    $("#question").text(questions[index]);
    $("#answer1").text(answers[index][0]);
    $("#answer2").text(answers[index][1]);
    $("#answer3").text(answers[index][2]);
    $("#answer4").text(answers[index][3]);
    count = 30;
}

function countDown(){
    if(count>0){
        count--;
        $("#timer").text("Time Remaining: " + count);
    }
    else{
        clearInterval(timer);
    }

}

function correctAnswer(){
    correctCount++;
    index++;
    if(index<7){
        start();
    }
    else{
        endScreen();
    }
}

function incorrectAnswer(){
    wrongCount++;
    index++;
    if(index<7){
        start();
    }
    else{
        endScreen();
    }
}

function answerScreen(){
    
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");

    if(correct){
        $("#image-holder").html("<img src=" + images[index] + " width='400px'>");
        
        $("#question").text("CORRECT!");
        $("#correctArea").text(correctText[index]);
        setTimeout(correctAnswer,1000*5);
    }
    else{
        
        $("#image-holder").html("<img src=" + images[index] + " width='400px'>");
        $("#question").text("WRONG!");
        $("#correctArea").text(correctText[index]);
        setTimeout(incorrectAnswer,1000*5);
    }
    
}

function endScreen(){

}
