<template>
    <div class="ninjas">

        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>

        <button v-on:click="deleteNinja">Delete the last Ninja</button>
        <p><strong>Important: </strong>method deleteNinja() : delete original data (reference)</p>

  </div>
</template>


<script>
export default {
    props:
      {    // props: pass data from parent to a child component
      ninjas: {
        type: Array,
        required: true
      },
    },
    data(){
      return{
      }
    },
    methods: {
      deleteNinja: function(){
        this.ninjas.pop();  //out of the array (flows out)
      }
    }
}

</script>

<style src="../assets/ninjas.css" scoped></style>

<!-- __________________________

prop : custom attribute for passing information from parent components

-->
