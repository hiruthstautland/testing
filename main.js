"use strict";
const todoForm = document.getElementById("todoForm");
const todoUl = document.getElementById("ul");
let storedTodos;
let userAllowsLocalStorage = false;

// Get local storage when app is open
(async function getLocalStorageItems() {
  console.log("WOHO: IIFE !");
  console.log(userAllowsLocalStorage);
  userAllowsLocalStorage = localStorageAllowed();
  console.log(userAllowsLocalStorage);

  if (storageAvailable("localStorage") && userAllowsLocalStorage) {
    console.log("Can we use localStorage to store todos!");
    storedTodos = JSON.parse(localStorage.getItem("myTodoItems")) || [];
  } else {
    // show message
    console.log("Too bad, we won't be able to store your list in for later!");
  }
})();
//  Check if local storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let storageTest = "__storage_test__";
    storage.setItem(storageTest, storageTest);
    storage.removeItem(storageTest);
    console.log("Local is available!");
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // exept Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name, if code isn't (exept Firefox)
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
}
//  Ask user to allow use of local storage
function localStorageAllowed() {
  todoForm.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="store-list-wr">
      <h5>Do you want to store your list?</h5>
      <b>Allow for access to local storage</b>
      <span>No</span><span>Yes</span>
      <label class="save-switch">
        <input type="checkbox">
        <span class="save-slider"></span>
      </label>
    </div>
  `
  );

  userAnswer === "";
  return userAnswer;
}
//  Ask if you can use local storage
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  storedTodos = JSON.parse(localStorage.getItem("myTodoItems"));

  // check if local storage has any toado items
  if (storedTodos === []) {
    localStorage.setItem("myTodoItems", JSON.stringify(todo));
  } else {
    console.log(storedTodos);

    // let newStorage = storedTodos.push(todo);
    // console.log(newStorage);

    localStorage.setItem("myTodoItems", JSON.stringify(todo));
  }

  showTodo(todo);
  // console.log(newStorage);
}

function showTodo(todo) {
  todoUl.insertAdjacentHTML(
    "beforeend",
    `
    <li class="todo-li" id="${todo.id}" >
      <label for="checkbox-item" class="label-todo"></label>
      <input id="checkbox-item" type="checkbox" class="checked"/> 
      <span>${todo.text}</span>
      <button class="delete">X</button>
    </li>
  `
  );
}

function deleteTodo(itemIndex, id) {
  // Delete from "data base" todoItems arr
  todoItems = todoItems.filter((itemObj, index) => {
    return index !== itemIndex;
  });
  // Normally this would be a call to the data base.
  // We would then await the answer, if not success set error and throw it

  // remove from UI, remember don't delete if it cant be removed from Ui
  let deleteElement = document.getElementById(id);
  deleteElement.parentNode.removeChild(deleteElement);
}

function checkTodo(todoIndex) {
  todoItems[todoIndex].checked = !todoItems[todoIndex].checked;
  let todoId = todoItems[todoIndex].id;
  let todoItem = document.getElementById(todoId);

  todoItems[todoIndex].checked
    ? todoItem.classList.add("done")
    : todoItem.classList.remove("done");
}

function handleTodoClick(id, type) {
  let todoIndex = todoItems.findIndex((item) => {
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
// event listeners
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
// ul
todoUl.addEventListener("click", (e) => {
  e.preventDefault();
  let liId = e.target.parentNode["id"];

  if (e.target.classList.contains("checked")) {
    handleTodoClick(liId, "checked");
  }
  if (e.target.classList.contains("delete")) {
    handleTodoClick(liId, "delete");
  }
});
