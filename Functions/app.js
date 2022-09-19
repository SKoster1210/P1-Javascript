function calculate(n1, n2) {
    return n1 + n2
}

function multiplyByFive(n1) {
    return n1 * 5
}

function checkInput(n1, n2) {
    // return Math.max(n1,n2)
    if (n1 >= n2) {
        return n1
    } else {
        return n2
    }
}

function calculateMinutes(sec) {
    return sec / 60

}
console.log(calculate(5,10))
console.log(multiplyByFive(5))
console.log(checkInput(5,10))
console.log(calculateMinutes(10))