/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import './css/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'watch a movie',
    completed: false,
    index: 1,
  },
  {
    description: 'eat dinner',
    completed: false,
    index: 2,
  },
];

const listItems = document.querySelector('.list-items');

tasks.forEach((task) => {
  listItems.innerHTML += `
    <li>
      <input
        type="checkbox"
        name="${task.index}"
        id="${task.index}"
        title="Check"
      />
      <label for="${task.index}" contenteditable="true"> ${task.description} </label>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
  `;
});
