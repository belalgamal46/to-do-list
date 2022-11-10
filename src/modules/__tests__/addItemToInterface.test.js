import Store from '../store.js';
import AddItemsToList from '../addItemsToList.js';

describe('addItemToInterface', () => {
  test('should add item to UI successfully', () => {
    const task = { index: 0, completed: false, description: 'one' };
    document.body.innerHTML = `
    <ul class='list-items'></ul>
    `;
    Store.setItems([task]);
    AddItemsToList.addListItemsToInterface();
    const list = document.querySelector('.list-items');
    expect(list.children).toHaveLength(1);
  });
});
