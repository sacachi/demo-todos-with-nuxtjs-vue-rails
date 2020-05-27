export default {
    addTodo(state, payload){
        state.todos.push(payload);
    },
    deleteTodo(state, payload){
        state.todos.splice(state.todos.indexOf(payload), 1)
    }
}