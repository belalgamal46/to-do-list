import { clearCompletedItems } from '../eventListenersFucntions.js';
import { Store, RemoveItemFromList, AddItemsToList } from '../index.js';

AddItemsToList.addListItemsToInterface = jest.fn();
RemoveItemFromList.changeTaskIndex = jest.fn();

describe('clearCompletedTasks', () => {
  test('should clear all completed items', () => {
    const tasks = [{ index: 0, completed: true, description: 'test completed one' }];
    Store.setItems(tasks);
    clearCompletedItems();
    expect(Store.getItems).toHaveLength(0);
    expect(RemoveItemFromList.changeTaskIndex).toBeCalled();
    expect(RemoveItemFromList.changeTaskIndex).toBeCalled();
  });
});
