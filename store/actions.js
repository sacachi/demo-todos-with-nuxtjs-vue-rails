import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    setTodos({ commit }){
        firebase.firestore().collection('todos').get().then( res => {
            res.forEach( el => {
              commit('addTodo', {todo: el.data().todo, id: el.id, completed: el.data().completed});
              
            })
          });
    },
    submitTodo({ commit }, payload){
        firebase.firestore().collection('todos').add({todo: payload, completed: false}).then(res => {
            var data = {id: res.id, todo: payload, completed: false};
            commit('addTodo', data);
        })
    },
    deleteTodo({ commit }, payload){
        firebase.firestore().collection('todos').doc(payload.id).delete();
        commit('deleteTodo', payload);
    },
    changeTodo({ commit }, payload){
        var completed = !payload.completed;
        firebase.firestore().collection('todos').doc(payload.id).update({
            completed: completed
        });
        commit('changeTodo', payload);
    }
}