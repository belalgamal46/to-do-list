/* eslint-disable import/extensions */

import './css/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import { AddItemsToList, Store, RemoveItemFromList, UpdateStatus } from './modules/index.js';

// Event Listener to display items
document.addEventListener('DOMContentLoaded', () => {
  AddItemsToList.addListItemsToInterface();
});

// Event Listener to Add Item to List
const form = document.querySelector('.add-form');
const addListInput = document.getElementById('add-to-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const index = Store.getItems().length
    ? Store.getItems()[Store.getItems().length - 1].index + 1
    : 0;
  const item = { description: addListInput.value, completed: false, index };
  AddItemsToList.addItemToList(item);
  form.reset();
});

// Event To Remove Item From List
const listItems = document.querySelector('.list-items');
listItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash-can')) {
    RemoveItemFromList.removeItemFromList(event.target);
    RemoveItemFromList.changeTaskIndex();
  }
});

// Event To Add Edited Description To Store
listItems.addEventListener('input', (event) => {
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
});

// Event To toggle is Task Completed
listItems.addEventListener('change', (event) => {
  if (event.target.name === 'checkbox') {
    if (event.target.checked) {
      event.target.nextElementSibling.classList.add('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    } else {
      event.target.nextElementSibling.classList.remove('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    }
  }
});

// Event To Clear All Completed Tasks
const clearButtonContainer = document.querySelector('.clear-button-container');
clearButtonContainer.addEventListener('click', () => {
  const tasks = Store.getItems();
  const filterdTasks = tasks.filter((task) => task.completed === false);
  Store.setItems(filterdTasks);
  RemoveItemFromList.changeTaskIndex();
  AddItemsToList.addListItemsToInterface();
});
