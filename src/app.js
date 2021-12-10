import "./styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = input.querySelector("#submit");

form.addEventListener("submit", submitFormHandler);

function submitFormHandler(e) {
  e.preventDefault();
  console.log(input.value);
}
