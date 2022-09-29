let currentcount = 0
function plusone() {
    currentcount = currentcount + 1
    if (currentcount == 10) {
        currentcount = 0
    }
    document.getElementById("uitkomst").innerHTML = "Getal: " + currentcount
}