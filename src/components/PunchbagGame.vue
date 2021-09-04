<template>
  <div class="punchbag-game">

    <h1> Punchbag Game </h1>

    <!-- bag image -->
    <div id="bag" v-bind:class="{ burst: ended }"></div> <!-- quando burst:true (cioè quando ended è true) -->

    <!-- bag health -->
    <p>Health: {{ health }} </p>
    <div id="bag-health">
      <div v-bind:style="{ width: health + '%' }"></div>
    </div>

    <!-- game controls -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">Punch</button>
      <button v-on:click="restart">Restart</button>
    </div>


   </div>

</template>


<script>
  export default {
    name: 'punchbaggame',
    data() {
      return {
        health: 100,
        ended: false
      }
    },
    methods: {
      punch: function(){
        this.health -= 10;
        if (this.health <= 0) {
          this.ended = true;
        }
      },
      restart: function(){
        this.health = 100;
        this.ended = false;
      }
    }
  }
</script>

<style src="../assets/punchbaggame.css" scoped></style>

