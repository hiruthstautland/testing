import { connectLocalStorage } from "./localStorage.js";
const todoUl = document.getElementById("ul");
let displayedTodos = [];

function showSavedTodos() {
  connectLocalStorage.getLocalStorage();

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
  if (displayedTodos.length === 0) {
    showSaveBtn(true);
  }
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
}
function showSaveBtn(show) {
  if (show) {
    todoUl.insertAdjacentHTML(
      "afterend",
      `
      <div class="btn-container">
      <button class="btn-save-list" id="btnSaveList">Save List</button>
      <button class="btn-delete-list" id="btnDeleteList">Delete List</button>
      </div>
      `
    );
    listenToClick();
  } else {
    btnSaveList.remove();
  }
}
// use this on all clicks
function listenToClick() {
  const btnSaveList = document.getElementById("btnSaveList");
  const btnDeleteList = document.getElementById("btnDeleteList");

  btnSaveList.addEventListener("click", (e) => {
    connectLocalStorage.saveNewObj(displayedTodos);
  });
  btnDeleteList.addEventListener("click", (e) => {
    connectLocalStorage.removeObj();
  });
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
  const isChecked = displayedTodos[todoIndex].checked;
  isChecked = !isChecked;
  let todoId = displayedTodos[todoIndex].id;
  let todoItem = document.getElementById(todoId);

  isChecked
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

export {
  showSavedTodos,
  addTodo,
  showTodo,
  showSaveBtn,
  deleteTodo,
  checkTodo,
  handleTodoClick,
};
