export default {
    addTodo(state, payload){
        state.todos.push(payload);
    },
    deleteTodo(state, payload){
        state.todos.splice(state.todos.indexOf(payload), 1)
    },
    changeTodo(state, payload){
        state.todos.filter(function(todo){
            if (todo.id === payload.id) {
                todo.completed = !todo.completed;
            }
        })
    }
}