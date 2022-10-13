let button = document.getElementById("button");
let modal = document.getElementById("modalid");
let span = document.getElementsByClassName("close")[0] // Gestolen van w3s
let title = document.getElementById("result")

function clickButton() {
    modal.style.display = "block"
}

function clickSpan() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function submitChecker() {
    let value = document.getElementById("lname")
    if (value.value < 18) {
        title.style.display = "block";
        title.style.display = "flex";
        title.style.justifyContent = "center";
        title.innerHTML = "Helaas je bent te jong";
        title.style.color = "red";
    } else {
        window.open('https://www.techniekcollegerotterdam.nl/', '_blank');
    }
}