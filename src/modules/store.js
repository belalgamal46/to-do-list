class Store {
  static getItems = () => {
    let tasks = null;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
      return tasks;
    }

    tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks;
  };

  static setItems = (itemToAdd) => {
    localStorage.setItem('tasks', JSON.stringify(itemToAdd));
  };
}

export default Store;
