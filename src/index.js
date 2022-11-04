/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import './css/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
import { AddItemsToList, Store, RemoveItemFromList } from './modules/index.js';

// Event Listener to display items
document.addEventListener('DOMContentLoaded', AddItemsToList.addListItemsToInterface);

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
  AddItemsToList.addListItemsToInterface();
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

// localStorage.clear();
