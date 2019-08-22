var count = 30;
var timer;
var correct = false;

var correctCount = 0;
var wrongCount = 0;

var answerArr = [1,2,2,3,4,3,2];
var index = 0;

var images = ["","","","","","",""];

var questions = ["Who collected the 1973 best supporting actor Oscar at age 10?","What 19th-century U.S. novelist said music by Wagner was not as bad as it sounds?",
"What human organ graces The Carpenters' A Song For You album cover?","What natural wonder was aerialist Charles Blondin the first person to tiptoe across, in 1859?",
"In the Star Wars movies, who carries Anakin's flag before the Podrace?","What bird was the first animal to be put on the Endangered Species List?",
"What's your sign of the Zodiac if you were born on Christmas Day?"];

var answers = [["Tatum O'Neal","Dianne Wiest","Juliette Binoche","Jody Foster"],["Jack London","Mark Twain","James Fenimore Cooper","Edgar Allen Poe"],
["A liver","A heart","The lungs","A brain"],["Devil's Tower","Grand Canyon","Niagara Falls","The English Channel"],
["R2D2","Chewbacca","Queen Amidala","C-3PO"],["The California condor","The Eskimo curlew","The peregrine falcon","The Hawaiian hawk"],
["Sagittarius","Capricorn","Aquarius","Libra"]];

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
