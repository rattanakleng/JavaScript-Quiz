//CREATE var store currentScore, highScore, userNameEl, hightScoreEl, currentScoreEl, inputEl, submitBtn

var highScore = localStorage.getItem("highScore");
var currentScore = localStorage.getItem("currentScore");
// var userNameEl = document.querySelector("#user-name");
// var userName = userNameEl.value;
var highScoreEl = document.querySelector("#high-score");
var currentScoreEl = document.querySelector("#current-score");
var saveBtn = document.querySelector("#save-btn");
var msgDiv = document.querySelector("#message");

//FUNCTION displayScore
function displayScore() {

    var congrateTextEl = document.querySelector("#congrate-text");

    if (currentScore > highScore) {
        congrateTextEl.innerText = "Well done! You set a new high score record!"
    }

    highScoreEl.innerText = highScore;

    currentScoreEl.innerText = currentScore;
};

displayScore()

//FUNCTION displayMessage
displayMessage = (type, message) => {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

saveBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var userName = document.querySelector("#user-name").value;

    if (userName === "") {
        displayMessage("error", "User name cannot be blank");
        return;
    };

    localStorage.setItem("userName", (userName + " : " + currentScore));

    var x = localStorage.getItem("userName");
    console.log(x);

    setTimeout(returnIndex, 700);
});

function returnIndex() {
    return window.location.assign('index.html');
};




// const username = document.querySelector('#username')
// const saveScoreBtn = document.querySelector('#saveScoreBtn')
// const finalScore = document.querySelector('#finalScore')
// const mostRecentScore = localStorage.getItem('mostRecentScore')

// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// const MAX_HIGH_SCORES = 5

// finalScore.innerText = mostRecentScore

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e => {
//     e.preventDefault()

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }

//     highScores.push(score)

//     highScores.sort((a, b) => {
//         return b.score - a.score
//     })

//     highScores.splice(5)

//     localStorage.setItem('highScores', JSON.stringify(highScores))
//     window.location.assign('/')
// }