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
