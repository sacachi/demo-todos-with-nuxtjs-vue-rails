<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="todo in todos" :key="todo" @dblclick="deleteTodo(todo)">{{ todo }}</li>
            </ul>

            <form @submit.prevent="submit">
              <div class="form-group">
                <input type="text" class="form-control my-2" placeholder="Add a todo" v-model="newTodo" />
                <button class="btn btn-outline-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos(){
      return this.$store.state.todos;
    }

  },
  data(){
    return {
      newTodo: ''
    }
  }
  ,
  methods: {
    submit(){
      if (this.newTodo){
        this.$store.commit('addTodo', this.newTodo);
        this.newTodo = "";
      } 
    },
    deleteTodo(todo){
      this.$store.commit('deleteTodo', todo);
    }
  }
}
</script>

<style>
</style>
