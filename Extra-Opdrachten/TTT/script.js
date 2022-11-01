// Variables \\
let cells = document.querySelectorAll(".cell")
let turnupdater = document.getElementById("message")
let resultscreen = document.getElementById("overlay")
let restartbutton = document.getElementById("btn-restart")
let quitbutton = document.getElementById("btn-quit")
let turn = "Player 01's Turn"

// Selectors \\
let resultArray;
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Functions \\
function restart() {
    if (resultscreen.classList.contains("active")) {
        resultscreen.classList.remove("active");
    }
    turnupdater.innerText = "Player 01's Turn"
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", hoverIn);
      cell.addEventListener("mouseleave", hoverOut);
      cell.removeEventListener("click", action);
    });
}

function hoverIn() {
    let currentClass = turn 
    if (turn == "Player 01") {
      currentClass = "cross"
    } else {
      currentClass = "circle"
    }
    
    if (this.classList.contains("cross") || this.classList.contains("circle")) {}
    else {
      this.classList.add(`${currentClass}-hover`);
    }
}

function hoverOut() {
  if (this.classList.contains("cross-hover") || this.classList.contains("circle-hover")) {
    this.classList.remove("cross-hover");
    this.classList.remove("circle-hover");
  }
}


cells.forEach((cell) => {
    console.log(cell)
    cell.addEventListener("mouseenter",hoverIn)
    cell.addEventListener("mouseleave",hoverOut)
    // cell.classList.add("circle-hover")
})


