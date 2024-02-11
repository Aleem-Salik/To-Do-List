const inputForm = document.querySelector(".input-form");
const inputTask = document.querySelector(".input-task");
const tasks = document.querySelector(".tasks");

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskHTML = `<p class='task'>${inputTask.value}</p>`;
  tasks.insertAdjacentHTML("afterbegin", taskHTML);
  inputTask.value = "";
});
