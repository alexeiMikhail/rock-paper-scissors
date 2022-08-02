// Variable declarations

const btns = document.querySelectorAll("button");
var userScoreElement = document.querySelector("#user-score");
var compScoreElement = document.querySelector("#comp-score");
var userPic = document.getElementById("user-pic");
var compPic = document.getElementById("comp-pic");
var lastPlayUser = document.getElementById("user-last");
var lastPlayComp = document.getElementById("comp-last");
var userScore = 0;
var compScore = 0;
const userPicCount = 6;
const robotPicCount = 15;

var player = {
    user: {
        scoreElement: document.querySelector("#user-score"),
        pic: document.getElementById("user-pic"),
        lastPlay: document.getElementById("user-last"),
        score: 0,
        picCount: 6,
    },
    comp: {
        scoreElement: document.querySelector("#comp-score"),
        pic: document.getElementById("comp-pic"),
        lastPlay: document.getElementById("comp-last"),
        score: 0,
        picCount: 15,
    }
}

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
    player.user.pic.src = "assets/humans/" + randomAvatar(player.user.picCount).toString() + ".png";
}

function compAvatar() {
    player.comp.pic.src = "assets/robots/" + randomAvatar(player.comp.picCount).toString() + ".png";
}

const weapons = {
    rock: {beats: "scissors"},
    paper: {beats: "rock"},
    scissors: {beats: "paper"}
}

function userPlay(btnClicked) {
    lastPlayUser.src = "assets/" + btnClicked.id + ".png";
    return btnClicked.id;
}

function computerPlay () {
    let randNum = Math.floor(Math.random()*3);
    lastPlayComp.src = "assets/" + btns[randNum].id + ".png";
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
        player.user.score++;
        player.user.scoreElement.innerHTML = player.user.score;
        return;
    }
    if (winner === "comp") {
        player.comp.score++;
        player.comp.scoreElement.innerHTML = player.comp.score;
        return;
    }
}