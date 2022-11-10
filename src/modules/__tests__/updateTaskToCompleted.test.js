import { Store, UpdateStatus } from '../index.js';

describe('updateTaskToCompleted', () => {
  test('should update completed to true', () => {
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

    Store.setItems([{ index: 0, completed: false, description: 'test one' }]);
    const inputCheckBox = document.querySelector('input[type="checkbox"]');
    UpdateStatus.updateTaskToCompleted(inputCheckBox);
    expect(Store.getItems()[0].completed).toBeTruthy();
  });
});
