let side = 700;
let updown = 50;

window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = "blue";
    ctx.fillRect(side, updown, 200,200);

    // const boxcanvas = document.getElementById("box");
    // const boxctx = canvas.getContext("2d");
    // boxcanvas.height = window.innerHeight;
    // boxcanvas.width = window.innerWidth;
    // boxctx.fillStyle = "blue";
    // boxctx.fillRect(100,100, 200,200);

})

window.addEventListener("keydown", moveCube, false);

function moveCube(e) {
    let keyPressed = e.key
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    let Bounding = canvas.getBoundingClientRect()
    if (keyPressed == "w") {
        if (updown >= 2) {
            updown = updown - 2 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        } else {
            alert("Top kant heeft de border geraakt.")
            updown = 150
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        }
    } if (keyPressed == "a") {
        if (side >= 2) {
            side = side - 2 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        } else {
            alert("Linker kant heeft de border geraakt.")
            side = 600
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        }
    } if (keyPressed == "d") {
        console.log(side);
        if (side <= 1334) {
            side = side + 2 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        } else {
            alert("Rechter kant heeft de border geraakt.")
            side = 600
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        } 
    } if (keyPressed == "s") {
        if (updown <= 510) {
            updown = updown + 2 
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.moveTo(0, 0);
             ctx.fillStyle = "blue";
             ctx.fillRect(side, updown, 200,200);
             ctx.stroke();
        } else {
            alert("Bottom kant heeft de border geraakt.")
            updown = 300
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.moveTo(0, 0);
            ctx.fillStyle = "blue";
            ctx.fillRect(side, updown, 200,200);
            ctx.stroke();
        }
    }
}