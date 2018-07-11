import Task from '/assets/js/Task.js';

export default {
  todo() {
    $("#todo .body").html(``);

    Task.todo.map(function(value, key){
      var template = `
        <div>
          <p>${value}</p>
          <button class="done-task" id="${key}" value="${value}">DONE</button>
          <button class="delete-task" id="${key}">DELETE</button>
        </div>`;

      $("#todo .body").append(template);
    });
  },

  done() {
    $("#done .body").html(``);

    Task.done.map(function(value, key) {
      var template = `
        <div>
          <p>${value}</p>
          <button class="undo-task" id="${key}" value="${value}">Undo</button>
          <button class="close-task" id="${key}" value="${value}">Close</button>
        </div>`;

      $("#done .body").append(template);
    });
  },

  close() {
    $("#close .body").html(``);

    Task.close.map(function(value, key) {
      var template = `
        <div>
          <p>${value}</p>
        </div>`;

      $("#close .body").append(template);
    });
  }
}
