import { Store } from './index.js';

class RemoveItemFromList {
  static removeItemFromList = (itemList) => {
    itemList.parentElement.remove();
    const tasks = Store.getItems();
    const newTasks = tasks.filter(
      // eslint-disable-next-line comma-dangle
      (item) => parseInt(itemList.previousElementSibling.id, 10) !== item.index
    );
    Store.setItems(newTasks);
  };
}

export default RemoveItemFromList;
