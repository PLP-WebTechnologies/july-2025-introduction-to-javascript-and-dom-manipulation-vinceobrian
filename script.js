// ==============================
// Part 1: JavaScript Basics
// ==============================

// Variables and conditionals
let userName = "Vincent";
let userAge = 24;

let basicsMessage;
if (userAge >= 18) {
  basicsMessage = `${userName} is an adult. `;
} else {
  basicsMessage = `${userName} is a minor. `;
}
document.getElementById("basics-output").textContent = basicsMessage;


// ==============================
// Part 2: Functions
// ==============================

// Function to calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a string
function formatGreeting(name) {
  return `Hello, ${name}! Welcome back.`;
}

function showTotal() {
  let total = calculateTotal(250, 3); // Example
  document.getElementById("function-output").textContent =
    `Total: ${total} | ${formatGreeting(userName)}`;
}


// ==============================
// Part 3: Loops
// ==============================

// For loop example
let loopMessage = "Counting from 1 to 5: ";
for (let i = 1; i <= 5; i++) {
  loopMessage += i + " ";
}

// While loop example
let countdown = 3;
loopMessage += "| Countdown: ";
while (countdown > 0) {
  loopMessage += countdown + " ";
  countdown--;
}

document.getElementById("loop-output").textContent = loopMessage;


// ==============================
// Part 4: DOM Manipulation
// ==============================

const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addElementBtn = document.getElementById("addElementBtn");

// 1) Change text content
changeTextBtn.addEventListener("click", () => {
  document.getElementById("dom-text").textContent = "The text has changed!";
});

// 2) Toggle background color
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

// 3) Add new element dynamically
addElementBtn.addEventListener("click", () => {
  let newPara = document.createElement("p");
  newPara.textContent = "I'm a new paragraph created by JavaScript!";
  document.getElementById("dynamic-container").appendChild(newPara);
});
