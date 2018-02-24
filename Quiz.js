"use strict";

var seconds = 0;
var tens = 0;
var quizQuestions = [
    {
        question: "What is the name of the network of computers from which the Internet has emerged?",
        answers: {
            a: "Google",
            b: "MegaNet",
            c: "Arpanet"
        },
        correctAnswer: "c"
    },
    {
        question: "In what year was Google launched on the web?",
        answers: {
            a: "1992",
            b: "1968",
            c: "1998"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the country top-level domain of Belgium?",
        answers: {
            a: "The .bg domain",
            b: "The .blg domain",
            c: "The .be domain"
        },
        correctAnswer: "c"
    },
    {
        question: "Which unit is an indication for the sound quality of MP3?",
        answers: {
            a: "Mb",
            b: "mp3s",
            c: "Kbps"
        },
        correctAnswer: "c"
    },
    {
        question: "In computing what is Ram short for?",
        answers: {
            a: "Rapid Alocate Memory",
            b: "Read Asyns Memory",
            c: "Random Access Memory"
        },
        correctAnswer: "c"
    },
    {
        question: "In which Nintendo DS game do you have to raise a puppy as well as possible?",
        answers: {
            a: "Mario",
            b: "Sonic",
            c: "Nintendogs"
        },
        correctAnswer: "c"
    },
    {
        question: "Which animal is on the golden Flemish flag?",
        answers: {
            a: "Dog",
            b: "Bear",
            c: "Lion"
        },
        correctAnswer: "c"
    }
];

var usedNumbers = [];
var AVAILABLE_QUESTION_NUMB = 4;

function main() {
displayQuiz();
}


function displayQuiz() {
    var hQuestions = [], pQuestions = [], iAnswers = [];
    generateNonRepeatableNumbers(AVAILABLE_QUESTION_NUMB,quizQuestions.length);

    for (var i = 0; i < AVAILABLE_QUESTION_NUMB; i++) {
        hQuestions.push(document.createElement("H4"));
        hQuestions[i].innerHTML = "Question " + (i + 1);
        document.body.appendChild(hQuestions[i]);
        var rndNumb = usedNumbers[i];
        pQuestions.push(document.createElement("P"));
        pQuestions[i].innerHTML = quizQuestions[rndNumb].question;
        pQuestions[i].innerHTML =quizQuestions[rndNumb].question+'<br>'+
            '<form action="">'+
            '<input type="radio" value="a" name="r1'+'">'+quizQuestions[rndNumb].answers.a+'<br>'+
            '<input type="radio" value="b" name="r1'+'">'+quizQuestions[rndNumb].answers.b+'<br>'+
            '<input type="radio" value="c" name="r1'+'">'+quizQuestions[rndNumb].answers.c+'<br>'+
            '</form>';
        document.body.appendChild(pQuestions[i]);
    }

}
function generateNonRepeatableNumbers(numb,range){
    var elem, i;
    for (i = 0; i < numb; i++){
        do{
            elem = Math.floor((Math.random() * range));
        }
        while (usedNumbers.indexOf(elem) != -1);
        usedNumbers.push(elem);
    }
}

function submitAnswers() {
    var countAnswer = 0;
    var totalSeconds;

    var radios = document.getElementsByName('r1');
    var checkedRadios = [];
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedRadios.push(radios[i]);
        }
    }
    var counter = 0;

    if (checkedRadios.length == AVAILABLE_QUESTION_NUMB) {
        for (var i = 0; i < AVAILABLE_QUESTION_NUMB; i++) {
            if (checkedRadios[i].value == quizQuestions[i].correctAnswer) {
                counter++;
            }
        }
        var msg;
        if(seconds<5){
            msg="Your score is "+ counter+" out of "+AVAILABLE_QUESTION_NUMB+ " right answers, and elapsed time " + seconds+"s "+tens+"ms. Way to go!";
        }
        else if(seconds>=5 && seconds<10)
        {
            msg="Your score is "+ counter+" out of "+AVAILABLE_QUESTION_NUMB+ " right answers, and elapsed time " + seconds+"s "+tens+"ms. Not bad!";

        }
        else
        {
            msg="Your score is "+ counter+" out of "+AVAILABLE_QUESTION_NUMB+ " right answers, and elapsed time " + seconds+"s "+tens+"ms.";
        }
        alert(msg);
    }
    else {
        alert('Not all answers are submitted.')
    }
}

window.onload = function () {

    seconds = 0;
    tens = 0;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;


    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}