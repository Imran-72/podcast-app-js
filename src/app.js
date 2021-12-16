import "./styles.css";
import { isValid } from "./utils";

const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = input.querySelector("#submit");

form.addEventListener("submit", submitFormHandler);

function submitFormHandler(e) {
  e.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };
  }
  console.log(input.value);
}
