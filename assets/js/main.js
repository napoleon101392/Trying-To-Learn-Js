const Tasks = {
  todo: [],
  done: [],
  close: [],

  addTodo(task) {
    this.todo.push(task);
    todoList();
  },
  removeTodo(index) {
    this.todo.splice(index, 1);
    todoList();
  },

  addDone(task) {
    this.done.push(task);
    todoList();
    doneList();
  },
  removeDone(index) {
    this.done.splice(index, 1);
    todoList();
    doneList();
  },

  closeTask(task) {
    this.close.push(task);
    todoList();
    doneList();
    closeList();
  }
}

function todoList()
{
  $("#todo .body").html(``);

  for(var i = 0; i < Tasks.todo.length; i++) {
    var template = `
      <div>
        <p>${Tasks.todo[i]}</p>
        <button id="done-${i}" onclick="done(this)" value="${Tasks.todo[i]}">DONE</button>
        <button onclick="deleteTodo(this)">DELETE</button>
      </div>`;

    $("#todo .body").append(template);
  }
}

function doneList()
{
  $("#done .body").html(``);

  for(var i = 0; i < Tasks.done.length; i++) {
    var template = `
      <div>
        <p>${Tasks.done[i]}</p>
        <button id="undo-${i}" onclick="undo(this)" value="${Tasks.done[i]}">Undo</button>
        <button id="close-${i}" onclick="closeDone(this)" value="${Tasks.done[i]}">Close</button>
      </div>`;

    $("#done .body").append(template);
  }
}

function closeList()
{
  $("#close .body").html(``);

  for(var i = 0; i < Tasks.close.length; i++) {
    var template = `
      <div>
        <p>${Tasks.close[i]}</p>
      </div>`;

    $("#close .body").append(template);
  }
}

function done(attr) {
  index = attr.id.slice(5);

  Tasks.removeTodo(index);

  Tasks.addDone(attr.value);
}

function deleteTodo(attr) {
  index = attr.id.slice(5);

  Tasks.removeTodo(index);
}

function undo(attr) {
  index = attr.id.slice(6);

  Tasks.addTodo(attr.value);

  Tasks.removeDone(index);
}

function closeDone(attr) {
  // remove done
  index = attr.id.slice(6);

  Tasks.removeDone(index);

  Tasks.closeTask(attr.value)
}
