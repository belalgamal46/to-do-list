class Store {
  static getItems = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  };

  static setItems = (itemToAdd) => {
    localStorage.setItem('tasks', JSON.stringify(itemToAdd));
  };
}

export default Store;
