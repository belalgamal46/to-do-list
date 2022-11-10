import Store from '../store.js';
import AddItemsToList from '../addItemsToList.js';

AddItemsToList.addListItemsToInterface = jest.fn();

const task = { index: 0, completed: false, description: 'one' };

describe('addItemToList', () => {
  test('should add item successfully', () => {
    AddItemsToList.addItemToList(task);
    expect(Store.getItems().length).toBe(1);
    expect(AddItemsToList.addListItemsToInterface).toBeCalled();
  });
});
