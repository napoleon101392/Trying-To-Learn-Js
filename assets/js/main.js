const Tasks = {
  todo: [],
  done: [],
  close: [],

  addTodo(task) {
    this.todo.push(task);
    Template.todo();
  },

  removeTodo(index) {
    this.todo.splice(index, 1);
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
    Template.todo();
    Template.done();
    Template.close();
  }
}

const Template = {
  todo() {
    $("#todo .body").html(``);

    for(var i = 0; i < Tasks.todo.length; i++) {
      var template = `
        <div>
          <p>${Tasks.todo[i]}</p>
          <button id="${i}" onclick="done(this)" value="${Tasks.todo[i]}">DONE</button>
          <button onclick="Tasks.removeTodo(${this.id});">DELETE</button>
        </div>`;

      $("#todo .body").append(template);
    }
  },

  done() {
    $("#done .body").html(``);

    for(var i = 0; i < Tasks.done.length; i++) {
      var template = `
        <div>
          <p>${Tasks.done[i]}</p>
          <button id="${i}" onclick="undo(this)" value="${Tasks.done[i]}">Undo</button>
          <button id="${i}" onclick="closeDone(this)" value="${Tasks.done[i]}">Close</button>
        </div>`;

      $("#done .body").append(template);
    }
  },

  close() {
    $("#close .body").html(``);

    for(var i = 0; i < Tasks.close.length; i++) {
      var template = `
        <div>
          <p>${Tasks.close[i]}</p>
        </div>`;

      $("#close .body").append(template);
    }
  }
}

function done(attr) {
  Tasks.removeTodo(attr.id);

  Tasks.addDone(attr.value);
}

function undo(attr) {
  Tasks.addTodo(attr.value);

  Tasks.removeDone(attr.id);
}

function closeDone(attr) {
  Tasks.removeDone(attr.id);

  Tasks.closeTask(attr.value);
}
