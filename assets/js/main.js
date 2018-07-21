import Task from '/assets/js/Task.js';

let input = document.getElementById('input');

// On clicking on ADD button
$(document).on('click', '#add-todo', function(){
  if ("" === input.value) {
    alert("Field is Required");
  } else {
    Task.addTodo(input.value);
  }
});

// Add it to done section
$(document).on('click', '.done-task', function(){
  Task.addDone(this.value);

  Task.removeTodo(this.id);
});

// Remove entirely in the system
$(document).on('click', '.delete-task', function(){
  Task.removeTodo(this.id);
});

// Undo Done
$(document).on('click', '.undo-task', function(){
  Task.removeDone(this.id);

  Task.addTodo(this.value);
});

// Close Task
$(document).on('click', '.close-task', function(){
  Task.removeDone(this.id);

  Task.closeTask(this.value);
});
