const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const resultOutput = document.getElementById("result")
let possibleChoices = []

let player
let computer
let result

function getClicks() {
    let buttons = document.querySelectorAll("button")
    possibleChoices = buttons
}
getClicks()

function getResult() {
    if (computer == player) {
        resultOutput.innerHTML = "Gelijk spel!"
    } else if (computer == "rock" && player == "paper") {
        resultOutput.innerHTML = "Je hebt gewonnen!"
    } else if (computer == "rock" && player == "scissors") {
        resultOutput.innerHTML = "Je hebt verloren!"
    } else if (computer == "paper" && player == "scissors") {
        resultOutput.innerHTML = "Je hebt gewonnen!"
    } else if (computer == "paper" && player == "rock") {
        resultOutput.innerHTML = "Je hebt verloren!"
    } else if (computer == "scissors" && player == "rock") {
        resultOutput.innerHTML = "Je hebt gewonnen!"
    } else if (computer == "scissors" && player == "paper") {
        resultOutput.innerHTML = "Je hebt verloren!"
    }
    console.log(player + " | " + computer)
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        computer = "rock"
    } else if (randomNumber == 2) {
        computer = "paper"
    } else if (randomNumber == 3) {
        computer = "scissors"
    }
    document.getElementById("computer-choice").innerHTML = computer
}

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id
    playerChoice.innerHTML = player
    generateComputerChoice()
    getResult()
}));