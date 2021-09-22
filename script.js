"use strict";

function mainLoop() {
    console.log("working");
    displayArea.classList.toggle("expanded");
    displayArea.classList.contains("expanded")
        ? (startButton.textContent = "New 2-Do")
        : (startButton.textContent = "Get Started");
}

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
    if (!displayArea.classList.contains("expanded")) {
        mainLoop();
    } else {
        let new2do = "Hello Again World";
        toDoList.push(new2do);
        let display = "";
        toDoList.forEach((task) => {
            display += task + "<br>";
        });
        mainDisplay.innerHTML = display;
    }
});

const displayArea = document.querySelector(".display-area");

const mainDisplay = document.querySelector(".main-display");

let toDoList = [];

let deletedToDoList = [];

let completedToDoList = [];
