import { AddItemsToList, Store } from '../index.js';

describe('addEditedTaskToStore', () => {
  test('should apply edited title', () => {
    document.body.innerHTML = `
    <ul class='list-items'>
      <li>
        <input
          type="checkbox"
          name="checkbox"
          id="0"
          title="Check"
          value="test one"
          ${false && 'checked'}
        />
        <input type="text" name="description" value="test one" id="0" />
        <i class="fa-solid fa-trash-can"></i>
      </li>
    </ul>
    `;

    Store.setItems([
      { index: 0, completed: false, description: 'test one' },
      { index: 1, completed: false, description: 'test two' },
    ]);

    AddItemsToList.addEditedTaskToStore('new desc', 0);
    const textInput = document.querySelector('input[type="text"]');

    expect(textInput.value).toBe('new desc');
  });
});
