let budget = 100
let product = 60

if (budget > product) {
    document.getElementById("uitkomst").style.color = "green"
    document.getElementById("uitkomst").innerHTML = "U heeft genoeg geld!"
} else {
    document.getElementById("uitkomst").style.color = "red"
    document.getElementById("uitkomst").innerHTML = "Helaas, te weinig geld"
}