let userAllowsLocalStorage = false;

function saveInLocalStorage() {
  let newLocalStorage = [];
  console.log(displayedTodos);

  function saveNewObj(obj) {
    newLocalStorage.push(obj);
    localStorage.setItem("myTodoItems", JSON.stringify(newLocalStorage));
  }

  function removeObj(index) {
    newLocalStorage = todoItems.filter((itemObj, index) => {
      return index !== itemIndex;
    });
    localStorage.setItem("myTodoItems", JSON.stringify(obj));
  }

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("myTodoItems"));
  }
  return {
    saveNewObj,
    removeObj,
    getLocalStorage,
  };
}
