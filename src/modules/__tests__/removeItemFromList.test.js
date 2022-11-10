import { RemoveItemFromList } from '../index.js';

describe('remove item from list', () => {
  test('should remove item successfully', () => {
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
    const item = document.querySelector('.fa-trash-can');
    const list = document.querySelector('.list-items');
    RemoveItemFromList.removeItemFromList(item);
    expect(list.children).toHaveLength(0);
  });
});
