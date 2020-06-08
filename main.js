"use strict";
import {
  showSavedTodos,
  addTodo,
  showTodo,
  showSaveBtn,
  deleteTodo,
  checkTodo,
  handleTodoClick,
} from "./todoList.js";

const btnStoreList = document.getElementById("btnStoreList");
let saveListShowing = false;

// let displayedTodos = [{ text: "handle", checked: false, id: "12.12" }];
let userAllowsLocalStorage = false;

// // Get local storage once app is open
// (function getLocalStorageItems() {
//   // running();
//   userAllowsLocalStorage = localStorageAllowed();
//   // console.log(userAllowsLocalStorage);

//   if (storageAvailable("localStorage") && userAllowsLocalStorage) {
//     showSavedTodos();
//     // console.log("Can we use localStorage to store todos!");
//     // displayedTodos = JSON.parse(localStorage.getItem("myTodoItems")) || [];
//   } else {
//     // show message in UI
//     console.log("Too bad, we won't be able to store your list in for later!");
//   }
// })();

// function askForCookieConcent

//  Check if local storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let storageTest = "__storage_test__";
    storage.setItem(storageTest, storageTest);
    storage.removeItem(storageTest);
    // console.log("Local storage is available!");
    return true;
  } catch (e) {
    btnSaveList.disabled = true;
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
//  Ask if you can use local storage
function localStorageAllowed() {
  const saveCheckbox = document.getElementById("saveCheckbox");
  let isChecked = saveCheckbox.checked;
  saveCheckbox.addEventListener("click", (e) => {
    isChecked = e.target.checked;
    saveInLocalStorage(isChecked);
  });
  if (isChecked) {
  } else {
    alert("Press the store list button to store list");
  }
}

// event listeners
btnStoreList.addEventListener("click", (e) => {
  const storeListWr = document.getElementById("storeListWr");
  if (saveListShowing) {
    storeListWr.children[1].remove();
    saveListShowing = false;
  } else {
    storeListWr.insertAdjacentHTML(
      "beforeend",
      `
        <div class="save-list">
        <b>Allow for access to local storage to save your list?</b>
        <div class="save-on-off-label"><span>No</span>  <span>Yes</span></div>
            <label class="save-switch">
            <input name="save-list" type="checkbox" id="saveCheckbox">
            <span class="save-slider"></span>
            </label>
            </div>
            `
    );
    saveListShowing = true;
    localStorageAllowed();
  }
});

// // ul click
// todoUl.addEventListener("click", (e) => {
//   e.preventDefault();
//   let liId = e.target.parentNode["id"];

//   if (e.target.classList.contains("checked")) {
//     handleTodoClick(liId, "checked");
//   }
//   if (e.target.classList.contains("btn-delete")) {
//     handleTodoClick(liId, "delete");
//   }
// });
function running() {
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    // lagre lister til local storage?
    console.log("hello");
    e.returnValue = "hello";
  });
}
