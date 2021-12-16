export class Question {
  static create(question) {
    fetch(
      "https://podcast-app-651ca-default-rtdb.europe-west1.firebasedatabase.app/questions.json",
      {
        method: "POST",
        body: JSON.stringify(question),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        question.id = response.name;
        return question;
      })
      .then(addToLocalStorage);
  }
}

function addToLocalStorage(question) {
  localStorage.setItem("question", JSON.stringify(question));
}
