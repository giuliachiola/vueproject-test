<template>
  <div class="users">
    <h1>Users</h1>

    <p>Actual users list</p>
    <ul>
      <li v-for="user in users"><strong>{{ user.name }}</strong>: {{ user.email }}</li>
    </ul>

    <p>Add new users:</p>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name">
      <br>
      <input type="email" v-model="newUser.email" placeholder="Enter Email">
      <input type="submit" value="Submit">
    </form>

    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" :checked="user.contacted" v-model="user.contacted">
        <span :class="{ contacted: user.contacted }">
          <strong>{{ user.name }}</strong>: {{ user.email }}
          <button v-on:click="deleteUser(user)"> x </button>
        </span>
      </li>
    </ul>

  </div>

</template>


<script>
  export default {
    name: 'users',
    data() {
      return {
        newUser: {},
        // questi in data() vengono sostituiti dal CREATE sotto (JSON importato da jsonplaceholder)
        users: [
          { name: 'Giulia Chiola',
            email: 'giulia.chiola@gmail.com',
            contacted: false
          },
          { name: 'Ciccio pasticcio',
            email: 'ciccio.pasticcio@gmail.com',
            contacted: false
          },
          { name: 'Mario Rossi',
            email: 'mario.rossi@gmail.com',
            contacted: false
          },
          { name: 'Marco Verdi',
            email: 'marco.verdi@gmail.com',
            contacted: false
          }
        ]
      }
    },
    methods: {
      addUser: function(e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
      },
      deleteUser: function(user){
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    /*
    created: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
        response.data.forEach(user => user.contacted = 0);
        this.users = response.data;
      });
    }
    */

}
</script>


<style scoped>
</style>

<style src="../assets/users.css" scoped></style>

<!-- ______________ docs _________________

push() : appends the given element(s) in the last of the array and returns the length of the new array.
splice() : changes the content of an array, adding new elements while removing old elements

INSTANCE LIFECYCLE HOOKS: series of initalization steps
- created: run code after an instance is created
- mounted: run code after the instance has been mounted, where el is replaced by the newly created vm.$el
- updated: called after a data change causes the virtual DOM to be re-rendered and patched
- destroyed: Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed

-->
