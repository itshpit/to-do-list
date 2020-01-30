Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { id: 1, text: 'Learn JavaScript' },
      { id: 2, text: 'Learn Vue' },
      { id: 3, text: 'Build something awesome' }
    ],
    newToDo: '',
    id_count: 3
},
  methods: {
      addToDo: function () {
        var value = this.newToDo && this.newToDo.trim();
        if (!value){
          return;
        }
        this.todos.push({
          text: value,
         })
         this.newTodo = '';
      },

      deleteToDo: function(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
  }
});

//app.todos.push({ text: 'New item' })
