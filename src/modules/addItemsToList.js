import { Store } from './index.js';

class AddItemsToList {
  static addListItemsToInterface = () => {
    const tasks = Store.getItems();
    const listItems = document.querySelector('.list-items');
    listItems.innerHTML = '';
    tasks.forEach((task) => {
      const { index, description, completed } = task;
      listItems.innerHTML += `
        <li>
          <input
            type="checkbox"
            name="checkbox"
            id="${index}"
            title="Check"
            value="${description}"
            ${completed && 'checked'}
          />
          <input type="text" name="description" value="${task.description}" id="${index}" class="${
        completed ? 'line-through' : ''
      }"/>
          <i class="fa-solid fa-trash-can"></i>
        </li>
    `;
    });
  };

  static addItemToList = (task) => {
    const tasks = Store.getItems();
    tasks.push(task);
    Store.setItems(tasks);
    AddItemsToList.addListItemsToInterface();
  };

  static addEditedTaskToStore = (newDescription, index) => {
    const tasks = Store.getItems();
    tasks[index].description = newDescription;
    Store.setItems(tasks);
    AddItemsToList.addListItemsToInterface();
  };
}

export default AddItemsToList;
