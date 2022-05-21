// -----------------------Список задач---------------------------------
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  // 1 Получаем значение из формы
  const taskText = todoInput.value;
  // Cоздаем тег li с помощью создания элемента
  const newTask = document.createElement("li");
  newTask.innerText = taskText;
  todoList.append(newTask);

  //   Кнопка удалить
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "Удалить";
  deleteBtn.style["margin-left"] = "15px";
  newTask.append(deleteBtn);

  deleteBtn.addEventListener("click", () => deleteBtn.closest("li").remove());

  //   Очищаем поле ввода

  todoInput.value = "";

  //   Фокус на поле ввода
  todoInput.focus();
}

