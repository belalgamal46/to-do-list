import { Store } from './index.js';

class UpdateStatus {
  static updateTaskToCompleted = (item) => {
    const tasks = Store.getItems();

    const newTasks = tasks.map((task) => {
      if (task.index === parseInt(item.id, 10)) {
        task.completed = !task.completed;
      }

      return task;
    });

    Store.setItems(newTasks);
  };
}

export default UpdateStatus;
