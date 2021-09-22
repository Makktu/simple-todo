"use strict";

function mainLoop() {
    console.log("working");
    displayArea.classList.toggle("expanded");
    displayArea.classList.contains("expanded")
        ? (displayArea.innerHTML = "Hello World")
        : (displayArea.innerHTML = "");
}

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", mainLoop);

const displayArea = document.querySelector(".display-area");
