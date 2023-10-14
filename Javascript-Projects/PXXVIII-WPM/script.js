const wording = ["Hope you are good"];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click", function () {
    if (this.innerText == "Start") {
        playText.disabled = false;
        playGame();
    }
    else if (this.innerText == "Done") {
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
})

function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMessage = "You typed at " + speed + " words per minute.";
    finalMessage += "<br>" + compareWords(message.innerText, str);
    message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })
    return (cnt + " correct out of " + words1.length + " words");
}

function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
}
