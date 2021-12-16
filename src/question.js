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
      .then(addToLocalStorage)
      .then(Question.renderList);
  }

  static renderList() {
    const questions = getQuestionsFromLocalStorage();
    const html = questions.length
      ? questions.map(toCard).join("")
      : '<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';

    const list = document.getElementById("list");

    list.innerHTML = list;
  }
}

function addToLocalStorage(question) {
  const all = getQuestionsFromLocalStorage();
  all.push(question);
  localStorage.setItem("question", JSON.stringify(all));
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("question") || "[]");
}

function toCard(question) {
  <div class="mui--text-black-54">
    ${new Date(question.date).toLocaleDateString()}$
    {new Date(question.date).toLocaleTimeString()}
  </div>;
  <div>${question.text}</div>;
  <br />;
}
