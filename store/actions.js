import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    setTodos({ commit }){
        firebase.firestore().collection('todos').get().then( res => {
            res.forEach( el => {
              commit('addTodo', {todo: el.data().todo, id: el.id});
            })
          });
    },
    submitTodo({ commit }, payload){
        firebase.firestore().collection('todos').add({todo: payload}).then(res => {
            var data = {id: res.id, todo: payload};
            commit('addTodo', data);
        })
    },
    deleteTodo({ commit }, payload){
        firebase.firestore().collection('todos').doc(payload.id).delete();
        commit('deleteTodo', payload);
    }
}