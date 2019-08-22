var count = 30;
var timer;
var correct = false;

var correctCount = 0;
var wrongCount = 0;

var answerArr = [1,2,2,3,4,3,2];
var index = 0;

var images = ["assets/images/Lima.jpg","assets/images/mark-twain.jpg","assets/images/A-Song-For-You.jpg","assets/images/niagara-falls.jpg",
"assets/images/c3po.png","assets/images/Peregrine_Falcon.jpg","assets/images/capricorn.jpg"];

var questions = ["What is the capital city of Peru?","What 19th-century U.S. novelist said music by Wagner was not as bad as it sounds?",
"What human organ graces The Carpenters' A Song For You album cover?","What natural wonder was aerialist Charles Blondin the first person to tiptoe across, in 1859?",
"In the Star Wars movies, who carries Anakin's flag before the Podrace?","What bird was the first animal to be put on the Endangered Species List?",
"What's your sign of the Zodiac if you were born on Christmas Day?"];

var answers = [["Lima","Cusco","Arequipa","Puno"],["Jack London","Mark Twain","James Fenimore Cooper","Edgar Allen Poe"],
["A liver","A heart","The lungs","A brain"],["Devil's Tower","Grand Canyon","Niagara Falls","The English Channel"],
["R2D2","Chewbacca","Queen Amidala","C-3PO"],["The California condor","The Eskimo curlew","The peregrine falcon","The Hawaiian hawk"],
["Sagittarius","Capricorn","Aquarius","Libra"]];

var correctText = ["The Correct Answer is: Lima","The Correct Answer is: Mark Twain","The Correct Answer is: A heart",
"The Correct Answer is: Niagara Falls","The Correct Answer is: C-3PO","The Correct Answer is: The peregrine falcon",
"The Correct Answer is: Capricorn"];




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
    $("#correctArea").text("");
    $("#img-holder").html("");
    
}

function countDown(){
    if(count>0){
        count--;
        $("#timer").text("Time Remaining: " + count);
    }
    else{
        clearInterval(timer);
        correct=false;
        incorrectAnswer();
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
        
        
        $("#question").text("CORRECT!");
        $("#correctArea").text(correctText[index]);
        $("#img-holder").html("<img src=" + images[index] + " width='400px' height='400px'>");
        setTimeout(correctAnswer,1000*5);
    }
    else{
        
        $("#img-holder").html("<img src=" + images[index] + " width='400px' height='400px'>");
        $("#question").text("WRONG!");
        $("#correctArea").text(correctText[index]);
        setTimeout(incorrectAnswer,1000*5);
    }
    
}

function endScreen(){
    $("#timer").text("Game Over");
    $("#question").text("Here are your results");
    $("#correctArea").text("Correct Answers: " + correctCount);
    $("#img-holder").html("Incorrect Answers: " + wrongCount);

}
