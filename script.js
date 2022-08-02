// Variable declarations

var user =  {
    scoreElement: document.querySelector("#user-score"),
    pic: document.getElementById("user-pic"),
    lastPlay: document.getElementById("user-last"),
    score: 0,
    picCount: 6,
}
var comp = {
    scoreElement: document.querySelector("#comp-score"),
    pic: document.getElementById("comp-pic"),
    lastPlay: document.getElementById("comp-last"),
    score: 0,
    picCount: 15,
}

const weapons = {
    rock: {beats: "scissors"},
    paper: {beats: "rock"},
    scissors: {beats: "paper"}
}

const btns = document.querySelectorAll("button");

// Main

userAvatar();
compAvatar();

btns.forEach(function(element) {
    element.addEventListener("click", () => {
        updateScore(declareWinner(userPlay(element), computerPlay()));
    })
})

// Functions

function randomAvatar(count) {
    return Math.ceil(Math.random() * count);
}

function userAvatar() {
    user.pic.src = "assets/humans/" + randomAvatar(user.picCount).toString() + ".png";
}

function compAvatar() {
    comp.pic.src = "assets/robots/" + randomAvatar(comp.picCount).toString() + ".png";
}

function userPlay(btnClicked) {
    user.lastPlay.src = "assets/" + btnClicked.id + ".png";
    return btnClicked.id;
}

function computerPlay () {
    let randNum = Math.floor(Math.random()*3);
    comp.lastPlay.src = "assets/" + btns[randNum].id + ".png";
    return btns[randNum].id;
}

function declareWinner (user, comp) {
    if (user === comp) {
        return "draw"
    }
    if (weapons[user].beats === comp) {
        return "user"
    }
    if (weapons[comp].beats === user) {
        return "comp"
    }
    else return "winner unknown"
}

function updateScore (winner) {
    if (winner === "draw") {
        return;
    }
    if (winner === "user") {
        user.score++;
        user.scoreElement.innerHTML = user.score;
        return;
    }
    if (winner === "comp") {
        comp.score++;
        comp.scoreElement.innerHTML = comp.score;
        return;
    }
}