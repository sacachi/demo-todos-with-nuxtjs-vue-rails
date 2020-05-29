import firebase from 'firebase';
const googleProvider = new firebase.auth.GoogleAuthProvider()

export default {
    setData({ commit }){
        firebase.auth().onAuthStateChanged(user => {
            commit('setUser', {user_id: user.uid});
            firebase.firestore().collection('todos').where('user_id', '==', user.uid).get().then( res => {
                res.forEach( el => {
                  commit('addTodo', {todo: el.data().todo, id: el.id, completed: el.data().completed});
                })
            });
        })
    },
    submitTodo({ commit, getters }, payload){
        firebase.firestore().collection('todos').add({todo: payload, completed: false, user_id: getters.getUserId}).then(res => {
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
    },
    newUser({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.user, payload.password)
                .then(res => {
                    commit('addUser', res.user.uid)
                })
                .catch(err => console.log(err.message))
    }
}