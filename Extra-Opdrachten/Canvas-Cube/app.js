let side = 700;
let updown = 50;

window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    //context zorgt ervoor dat je dingen toe kunt voegen aan je canvas
    // zoals een vierkant oid
    const ctx = canvas.getContext("2d");
    //Grootte aanpassen
    //clg canvas en kijk of je de hoogte kan vinden en aanpassen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    //maak drie vierkanten op het scherm met de kleuren blauw, rood en geel
    ctx.fillStyle = "blue";
    ctx.fillRect(side, updown, 200,200);

})

window.addEventListener("keydown", moveCube, false);

function moveCube(e) {
    let keyPressed = e.key
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    if (keyPressed == "w") {
        updown = updown - 2 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(0, 0);
        ctx.fillStyle = "blue";
        ctx.fillRect(side, updown, 200,200);
        ctx.stroke();
    } if (keyPressed == "a") {
        side = side - 2 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(0, 0);
        ctx.fillStyle = "blue";
        ctx.fillRect(side, updown, 200,200);
        ctx.stroke();
    } if (keyPressed == "d") {
        side = side + 2 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(0, 0);
        ctx.fillStyle = "blue";
        ctx.fillRect(side, updown, 200,200);
        ctx.stroke();
    } if (keyPressed == "s") {
        updown = updown + 2 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(0, 0);
        ctx.fillStyle = "blue";
        ctx.fillRect(side, updown, 200,200);
        ctx.stroke();
    }
}