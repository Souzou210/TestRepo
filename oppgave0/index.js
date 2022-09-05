// Oppgave 1
const removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", removeFunction);

function removeFunction() {
  document.getElementById("remove").remove();
}

// Oppgave 2
document.getElementById("change-btn").addEventListener("click", changeFunction);

function changeFunction() {
  document.getElementById("change").replaceWith("Edited message");
}

// Oppgave 3
let inputValue = document.getElementById("input");
inputValue.addEventListener("click", inputFunction);

function inputFunction() {
  document.getElementById("input-text").replaceWith(inputValue);
}

// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
