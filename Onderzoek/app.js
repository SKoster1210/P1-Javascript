let myAge = 15
let volwassen = (myAge >= 18) ? "Ja":"Nee"

if (volwassen) {
    document.write(volwassen + "\n"); 
} else {
    document.write(volwassen + "\n"); 
};

let num = Math.floor(Math.random()*10)
if (num >= 3) {
    document.write("Nummer is groter dan 3 | Num = " + num + " | " + "\n" ); 
} else {
    document.write("Nummer is kleiner dan 3 | Num = " + num + " | " + "\n"); 
};

let variable = Math.random() < 0.5
if (variable) {
    document.write("Variable is true | " + "\n"); 
} else {
    document.write("Variable is false | " + "\n"); 
};


let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)

if (x < 10 && y > 4) {
    document.write("Ja, klopt. | X is " + x  + " en Y is " + y + "| " + "\n"); 
} else {
    document.write("Nee, klopt niet. | X is " + x  + " en Y is " + y + "| " + "\n"); 
}