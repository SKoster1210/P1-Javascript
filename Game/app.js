// Element by ID
// const title = document.getElementById("main-heading")
// console.log(title)

// // Get Element by Classname
// // const listitem = document.getElementsByClassName("list-items")
// // console.log(listitem)

// // Get Element by tag name
// const listitem = document.getElementsByTagName("li")
// console.log(listitem)

// // Query Selector (1 div in de code)
// const container = document.querySelector("div")
// console.log(container)

// // Query Selector All (meerdere divs)
// const containerall = document.querySelectorAll("div")
// console.log(containerall)

function printvariable(variablenaam) {
    return console.log(variablenaam)
}
// DOM Start
// const title = document.querySelector("#main-heading");
// title.style.color = "red";

// const listItems = document.querySelectorAll(".list-items");

// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = "5rem";
// }


// // Testing
// printvariable(title)
// printvariable(listItems)

// Creating Elements
const ul = document.querySelector("ul")
const li = document.createElement("li")
ul.append(li)
li.innerText = "x-men"
li.setAttribute("id","main-heading")
li.removeAttribute("id")
const title = document.querySelector("#main-heading")
printvariable(title.getAttribute("id"))

// Creating Classes
li.classList.add("list-items")
printvariable(li.classList.contains("list-items"))

// Remove element
li.remove()