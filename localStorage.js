let userAllowsLocalStorage = false;
//  Render stored items

const connectLocalStorage = (() => {
  let newLocalStorage = [];
  // console.log(todos);

  function saveNewObj(obj) {
    // console.log("save new obj", obj);
    newLocalStorage.push(obj);
    localStorage.setItem("myTodoItems", JSON.stringify(newLocalStorage));
  }

  function removeObj() {
    // newLocalStorage = todoItems.filter((itemObj, index) => {
    //   return index !== itemIndex;
    // });
    localStorage.setItem("myTodoItems", JSON.stringify({}));
  }

  function getLocalStorage() {
    // console.log("get local ");
    return JSON.parse(localStorage.getItem("myTodoItems"));
  }
  return {
    saveNewObj,
    removeObj,
    getLocalStorage,
  };
})();
export { connectLocalStorage };
