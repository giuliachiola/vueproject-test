<template>
  <div class="test2">
    <h1>Test 2</h1>

    <!-- v-on:event (event = click, mouseOn, mouseOver) -->
    <h2>Example 1: my age</h2>
    <p>My age is <strong>{{age}}</strong></p>

    <p>Funzione determinata in "v-on"</p>

    <button v-on:click="age++">Add a year</button>
    <button v-on:click="age--">Substract a year</button>
    <br>
    <p>Funzione determinata in "methods"</p>
    <button v-on:click="add(1)">Add a year</button>
    <button v-on:click="substract(1)">Substract a year</button>
    <button v-on:dblclick="add(10)">Add  10 years (dbl click)</button>
    <button v-on:dblclick="substract(10)">Substract 10 years (dbl click)</button>
    <button v-on:click.once="add(1)">Add a year (once)</button>

    <hr>
    <h2>Example 2: canvas</h2>
    <div id="canvas" v-on:mousemove="updateXY"> {{x}},{{y}} </div>
    <hr>

    <h2>Example 3: name and age</h2>
    <p>Enter your name and press Enter (open Console)</p>
    <label>Name:</label> <input type="text" v-on:keyup.enter="logName" />
    <label>Age:</label> <input type="text" v-on:keyup.enter="logAge" />
    <!-- senza modifier ".enter" sarebbe fired for each letter-->
    <!-- modifier: keyup.enter, keyup.alt.enter -->

    <hr>
    <h2>Example 4: methods vs computed</h2>
    <p>A = 0 (start)</p>
    <p>B = 0 (start)</p>
    <p>age = {{age}} (start)</p>

    <button v-on:click="a++">Add to A</button>
    <button v-on:click="b++">Add to B</button>
    <p class="age-a">A = {{ a }}</p>
    <p>B = {{ b }}</p>
    <p>age = {{ age }}</p>
    <br>
    <p class="age-a">Age + A (methods) = {{ addToAMethods() }} </p>
    <p>Age + B (methods) = {{ addToBMethods() }} </p> <!-- Non importa se viene toccato solo A, viene aggiornato pure B -->
    <p class="age-a">Age + A (computed) = {{ addToAComputed }} </p>
    <p>Age + B (computed) = {{ addToBComputed }} </p>
    <hr>

    <h2>Example 5: Toggle if statements</h2>
    <button v-on:click="error = !error">Toggle Error</button>
    <button v-on:click="success = !success">Toggle Success</button>
    <p v-if="true">Error: {{ error }}</p>
    <p v-if="true">Success: {{ success }}</p>

  </div>
</template>



<script>
  export default {
    name: 'test2',
    data() {
      return {
        age: 25,
        x: 0,
        y: 0,
        name2: '',
        age2: '',
        a: 0,
        b: 0,
        error: false,
        success: false
      }
    },
    methods: {
      add: function(increment){
        this.age += increment;
      },
      substract: function(decrement){
        this.age -= decrement;
      },
      updateXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      logName: function(){
        console.log("you entered your name");
      },
      logAge: function(){
        console.log("you entered your age");
      },
      addToAMethods: function(){
        console.log("addToA - Methods");
        return this.a + this.age;
      },
      addToBMethods: function(){
        console.log("addToB - Methods");
        return this.b + this.age;
      }
    },
    computed: {  //computed gira soltanto quando viene aggiornata QUELLA SPECIFICA proprietà, non altre
                // computed non ha le parentesi quando viene richiamata, es: addToAComputed vs addToAMethods()
      addToAComputed: function(){
        console.log("addToA ---- Computed");
        return this.a + this.age;
      },
      addToBComputed: function(){
        console.log("addToB ---- Computed");
        return this.b + this.age;
      }
  }
}
</script>

<style scoped>
</style>

<style src="../assets/test2.css" scoped></style>

