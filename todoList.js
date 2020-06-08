const todoUl = document.getElementById("ul");
const todoForm = document.getElementById("todoForm");

let displayedTodos = [];

//  Render stored items
function showSavedTodos() {
  displayedTodos.map((todoObj) => {
    todoUl.insertAdjacentHTML(
      "beforeend",
      `
        <li class="todo-li" id="${todoObj.id}" >
        <label for="checkbox-item" class="label-todo"></label>
        <input id="checkbox-item" type="checkbox" class="checked"/> 
        <span>${todoObj.text}</span>
        <button class="delete">X</button>
      </li>
      `
    );
  });
}
// Upadate the UI
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  if (displayedTodos.length === 0) {
    showSaveBtn(true);
  }
  displayedTodos.push(todo);
  showTodo(todo);
}
function showTodo(todo) {
  todoUl.insertAdjacentHTML(
    "beforeend",
    `
      <li class="todo-li" id="${todo.id}" >
        <label for="checkbox-item" class="label-todo"></label>
        <input id="checkbox-item" type="checkbox" class="checked"/> 
        <span>${todo.text}</span>
        <button class="btn-delete">X</button>
      </li>
    `
  );
}
todoUl.addEventListener("click", (e) => {
  e.preventDefault();
  let liId = e.target.parentNode["id"];

  if (e.target.classList.contains("checked")) {
    handleTodoClick(liId, "checked");
  }
  if (e.target.classList.contains("btn-delete")) {
    handleTodoClick(liId, "delete");
  }
});
function showSaveBtn(show) {
  if (show) {
    todoUl.insertAdjacentHTML(
      "afterend",
      `
      <div class="btn-container" id="save" >
      <button class="btn-save-list" id="btnSaveList">Save List</button>
      </div>
      `
    );
  } else {
    document.getElementById("btnSaveList").remove();
  }
}
function deleteTodo(itemIndex, id) {
  displayedTodos = displayedTodos.filter((itemObj, index) => {
    return index !== itemIndex;
  });

  // Call to database/localstorage,
  // if not success set error and throw it
  // remember don't delete if it cant be removed from database
  let deleteElement = document.getElementById(id);
  deleteElement.parentNode.removeChild(deleteElement);
  if (displayedTodos.length === 0) {
    todoUl.innerHTML = "";
    showSaveBtn(false);
  }
}
function checkTodo(todoIndex) {
  displayedTodos[todoIndex].checked = !displayedTodos[todoIndex].checked;
  let todoId = displayedTodos[todoIndex].id;
  let todoItem = document.getElementById(todoId);

  displayedTodos[todoIndex].checked
    ? todoItem.classList.add("done")
    : todoItem.classList.remove("done");
}
function handleTodoClick(id, type) {
  let todoIndex = displayedTodos.findIndex((item) => {
    return item.id == id;
  });

  switch (type) {
    case "checked":
      checkTodo(todoIndex);
      break;
    case "delete":
      deleteTodo(todoIndex, id);
      break;
    default:
      break;
  }
}
// form submitted
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoInput = document.getElementById("todo");
  const textInput = todoInput.value.trim();

  if (textInput !== "") {
    addTodo(textInput);
    todoInput.value = "";
    todoInput.focus();
  }
});

export {
  showSavedTodos,
  addTodo,
  showTodo,
  showSaveBtn,
  deleteTodo,
  checkTodo,
  handleTodoClick,
};
