const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")

function Buttonclick() {
    if (closedFace.classList.contains("active")) {
        closedFace.classList.remove("active");
        openFace.classList.remove("open");
    } else {
        openFace.classList.add("open");
        closedFace.classList.add("active")
    }
}