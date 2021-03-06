import Template from './assets/js/Template.js';

export default {
  todo: [],
  done: [],
  close: [],

  addTodo(task) {
    this.todo.push(task);
    Template.todo();
  },

  removeTodo(index) {
    this.todo.splice(index.id, 1);
    Template.todo();
  },

  addDone(task) {
    this.done.push(task);
    Template.todo();
    Template.done();
  },

  removeDone(index) {
    this.done.splice(index, 1);
    Template.todo();
    Template.done();
  },

  closeTask(task) {
    this.close.push(task);
    Template.done();
    Template.close();
  }
}
