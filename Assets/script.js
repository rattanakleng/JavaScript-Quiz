/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/

// setInterval to do the "timed" functionality
// clearInterval to stop the timeout

// VAR currentScore/timeLeft
// VAR questions - Array
// VAR pointer/index - Current position in the question array
// VAR startButton

// var questions = [
//     {
//         // Question text
//         // List of qustion answers
//         // Correct answer
//     }
// ]
var startBtn = document.querySelector("#start-btn");
var highScore = document.querySelector("#high-score");
var scoreEl = document.querySelector("#current-score");
var timer = document.querySelector("#time");
var questionCtner = document.querySelector("#question-ctner");
var questionEl = document.querySelector("#questions");
var answer = document.querySelector("#answer-list");
var answerEl = document.querySelector(".answer");
var timeLeft = 180;
//console.log(timer);
var questionCounter = 0;
var currentScore = 0;
var newScore;

var questionList = [
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choice1: "The User's machine running a Web browser",
        choice2: "The Web server",
        choice3: "A central machine deep within Netscape's corporate offices",
        correctAnswer: 1,
    },

    {
        question: "______ JavaScript is also called client-side JavaScript.",
        choice1: "Microsoft",
        choice2: "Navigator",
        choice3: "LiveWire",
        correctAnswer: 2,
    },

    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        choice1: "Microsoft",
        choice2: "Navigator",
        choice3: "LiveWire",
        correctAnswer: 3,
    },

    {
        question: "What are variables used for in JavaScript Programs?",
        choice1: "Varying randomly",
        choice2: "Causing high-school algebra flashbacks",
        choice3: "Storing numbers, dates, or other values",
        correctAnswer: 3,
    },

    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        choice1: "Client-side",
        choice2: "Server-side",
        choice3: "Local",
        correctAnswer: 1,
    },

    {
        question: "Which of the following can't be done with client-side JavaScript?",
        choice1: "Validating a form",
        choice2: "Sending a form's contents by email",
        choice3: "Storing the form's contents to a database file on the server",
        correctAnswer: 3,
    },
];



// WHEN I click the 'start button'
// 'start button'.addEventListener("click".startQuiz);
startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    console.log(questionCounter);
    console.log(questionList.length);

    //answer.style.display = "block";
    questionCtner.style.display = "block";

    countdown();

    displayQuestion();

    getNewQuestion();
};


//Countdown time
// GET Minute and Second format function getTimer()
function getTimer() {
    var minute = Math.floor(timeLeft / 60);
    var second = timeLeft % 60;

    return (minute + ":" + second);
}

//convertSecond()

function countdown() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
        }
        timer.innerText = getTimer();
        timeLeft--;
    }, 1000);

    //Display final score and name input
};

// IF correctAnswer selected -> add 1 to currentScore
// THEN var finalScore = currentScore
// WHEN questionsLength = 0 -> Stop quize
// DISPLAL final score and to pop up window and name input

var choice1Text = document.querySelector("#choice-1-text");
var choice2Text = document.querySelector("#choice-2-text");
var choice3Text = document.querySelector("#choice-3-text");

//Function reset choice background color
function resetBackground() {
    choice1El.style.backgroundColor = "#1f5f5f";
    choice2El.style.backgroundColor = "#1f5f5f";
    choice3El.style.backgroundColor = "#1f5f5f";
};



function displayQuestion() {

    //Function reset choice background color

    resetBackground()

    if (questionCounter < questionList.length || timeLeft < 0) {
        questionEl.innerText = questionList[questionCounter].question;
        choice1Text.innerText = questionList[questionCounter].choice1;
        choice2Text.innerText = questionList[questionCounter].choice2;
        choice3Text.innerText = questionList[questionCounter].choice3;

        questionCounter++

        // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
        answer = questionList[questionCounter - 1].correctAnswer;
    }
    else {
        saveScore()
    };
};


// CHECK if answer is correct
var choice1El = document.querySelector("#choice-1");
var choice2El = document.querySelector("#choice-2");
var choice3El = document.querySelector("#choice-3");
var choice1Dataset = parseInt(choice1El.dataset.number);
var choice2Dataset = parseInt(choice2El.dataset.number);
var choice3Dataset = parseInt(choice3El.dataset.number);


//FUNCTION update answer value
var answer = questionList[questionCounter].correctAnswer;
console.log(answer);

function updateAnswerValue() {
    answer = questionList[questionCounter].correctAnswer;
}

// console.log(answer);

// console.log(choice1Dataset);
console.log(scoreEl.innerText);

function getNewQuestion() {
    choice1El.addEventListener("click", function () {

        if (choice1Dataset === answer) {
            choice1El.style.backgroundColor = "green";
            currentScore++
            scoreEl.innerText = currentScore;
        } else {
            choice1El.style.backgroundColor = "red";
        }
        // console.log(choice1Dataset);
        // console.log(questionCounter);
        // console.log(answer)
        setTimeout(displayQuestion, 500);
    }
    );

    choice2El.addEventListener("click", function () {

        if (choice2Dataset === answer) {
            choice2El.style.backgroundColor = "green";
            currentScore++
            scoreEl.innerText = currentScore;
        } else {
            choice2El.style.backgroundColor = "red";
        }

        // console.log(choice2Dataset);
        // console.log(questionCounter);
        // console.log(answer);
        setTimeout(displayQuestion, 500);
    }
    );

    choice3El.addEventListener("click", function () {

        if (choice3Dataset === answer) {
            choice3El.style.backgroundColor = "green";
            currentScore++
            scoreEl.innerText = currentScore;
        } else {
            choice3El.style.backgroundColor = "red";
        }
        // console.log(choice3Dataset);
        // console.log(questionCounter);
        // console.log(answer);

        setTimeout(displayQuestion, 500);
    }
    );
};


// Function save score and submit user record

// function saveScore() {
//     if (questionCounter === questionList.length || timeLeft === 0) {
//         //localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('end.html')
//     }
// }
var highScore = 0;

function saveScore() {

    // localStorage.setItem('highestScore', highScore)
    var storedHighScore = localStorage.getItem("highScore");

    if (storedHighScore < currentScore) {
        highScore = currentScore;
        localStorage.setItem("highScore", highScore);
        console.log(highScore);
    }


    localStorage.setItem("currentScore", currentScore);
    console.log(currentScore);

    // return window.location.assign('end.html');
    var getHighScore = localStorage.getItem("highScore");
    console.log("This is new high score" + getHighScore);
};



// Save score to local storage;
// var scoreRecord, myJSON, text, obj;

// scoreRecord = { highestScore: "", userScore:[], userName:[] ] }
// myJSON = JSON.stringify(scoreRecord);
// localStorage.setItem("record", scoreRecord)

// // Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.age;



// // Storing data:
// myObj = { name: "Rattanak", age: 20, city: "Seattle" };
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.age;



/* CODE FOR END PAGE*/


