import { AddItemsToList, Store, RemoveItemFromList, UpdateStatus } from './index.js';

export const submitForm = (event) => {
  event.preventDefault();
  const addListInput = document.getElementById('add-to-list');
  const form = document.querySelector('.add-form');
  const index = Store.getItems().length
    ? Store.getItems()[Store.getItems().length - 1].index + 1
    : 0;
  const item = { description: addListInput.value, completed: false, index };
  AddItemsToList.addItemToList(item);
  form.reset();
};

export const remove = (event) => {
  if (event.target.classList.contains('fa-trash-can')) {
    RemoveItemFromList.removeItemFromList(event.target);
    RemoveItemFromList.changeTaskIndex();
  }
};

export const addEditedToStore = (event) => {
  const items = Store.getItems();
  if (event.target.name === 'description') {
    let itemIndex;
    items.filter((item, index) => {
      if (item.index === parseInt(event.target.id, 10)) {
        itemIndex = index;
        return item.index === parseInt(event.target.id, 10);
      }
      return null;
    });
    AddItemsToList.addEditedTaskToStore(event.target.value, itemIndex);
  }
};

export const toggleCompleted = (event) => {
  if (event.target.name === 'checkbox') {
    if (event.target.checked) {
      event.target.nextElementSibling.classList.add('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    } else {
      event.target.nextElementSibling.classList.remove('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    }
  }
};

export const clearCompletedItems = () => {
  const tasks = Store.getItems();
  const filterdTasks = tasks.filter((task) => task.completed === false);
  Store.setItems(filterdTasks);
  RemoveItemFromList.changeTaskIndex();
  AddItemsToList.addListItemsToInterface();
};
