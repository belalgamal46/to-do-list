/* eslint-disable import/extensions */

import './css/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import {
  toggleCompleted,
  clearCompletedItems,
  submitForm,
  remove,
  addEditedToStore,
} from './modules/eventListenersFucntions';

import { AddItemsToList } from './modules/index.js';

// Event Listener to display items
document.addEventListener('DOMContentLoaded', () => {
  AddItemsToList.addListItemsToInterface();
});

// Event Listener to Add Item to List
const form = document.querySelector('.add-form');
form.addEventListener('submit', (event) => {
  submitForm(event);
});

// Event To Remove Item From List
const listItems = document.querySelector('.list-items');
listItems.addEventListener('click', (event) => {
  remove(event);
});

// Event To Add Edited Description To Store
listItems.addEventListener('input', (event) => {
  addEditedToStore(event);
});

// Event To toggle is Task Completed
listItems.addEventListener('change', (event) => {
  toggleCompleted(event);
});

// Event To Clear All Completed Tasks
const clearButtonContainer = document.querySelector('.clear-button-container');
clearButtonContainer.addEventListener('click', clearCompletedItems);
