export default {
    addTodo(state, payload){
        state.todos.push(payload);
    },
    deleteTodo(state, payload){
        console.log(12);
        
        state.todos.splice(state.todos.indexOf(payload), 1);
    }
}