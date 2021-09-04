<template>
  <div class="test">
    <h1>TEST</h1>

    <h2>Titolo passato da data: <span class="c-vue">{{ title }} </span></h2>
    <p>Se passo raw html, serve v-html per il parsing <span class="c-vue"> {{ titleHtml }} </span></p>
    <p>Raw html con parsing della directive v-html:<span class="c-vue" v-html="titleHtml"></span></p>

    <p> user.firstName + user.lastName: <span class="c-vue">{{ user.firstName }} {{ user.lastName }} </span></p>
    <p>Using v-text: <span class="c-vue" v-text="user.firstName"></span></p>

    <p>Using v-if=showname
      <span class="c-vue" v-if="showName"> {{ user.firstName }} </span>
      <span class="c-vue" v-else="showName"> Nobody </span>
    </p>

    <p>Print v-for="item in items"</p>
    <ul>
      <li class="c-vue" v-for="item in items">{{item.title }} </li>
    </ul>

    <h2>Titolo modificato dall'input: <span class="c-vue">{{ titleInput }} </span></h2>
    <input type="test" v-model="titleInput">

    <button v-on:click="greet('Hello everyone!')">Say hello with an alert</button>

    <p>From console:</p>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"/>

    <hr>
    <label>First name: </label>
    <input type="text" v-model="user.firstName">
    <label>Last name: </label>
    <input type="text" v-model="user.lastName">
    <p>{{fullName}}</p>

    <hr>
    <h2>Props: <span class="c-vue">{{msg}}</span></h2>
    <h3>greetFunction(): <span class="c-vue">{{ greetFunction() }}</span></h3>

    <hr>
    <p>href WITHOUT data-binding:</p>
    <!--  <a href="{{ website }}"></a>  NON COSI' -->
    <!--  <a href="{{{ website }}}"></a>  NON COSI' -->

    <p>href WITH data-binding:</p>
    <a v-bind:href="website" target="_blank">Website link with data binding</a>
    <br>
    <a v-on:click.prevent="click" href="http://www.google.com">Link with prevent (dopo l'alert NON va al link)</a>
    <hr>

    <input type="text" value="Static Name">
    <input type="text" v-bind:value="name">

  </div>

</template>


<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'i am a mesage'
      }
    },
    data() {
      return {
        title: 'Hello World as String',
        titleInput: 'Start here',
        titleHtml: '<h2>Hello World in HTML</h2>',
        user: {
          firstName: 'Giulia',
          lastName: 'Chiola'
        },
        showName: true,
        items: [
          { title: 'item 1'},
          { title: 'item 2'},
          { title: 'item 3'}
        ],
        website: 'http://www.google.com',
        name: 'Dynamic Name from data()',
      }
    },
    methods: {
      greet: function(greeting){
        alert(greeting);
      },
      greetFunction: function(){
        return 'Good morning ' + this.user.firstName;
      },
      pressKey: function(e){
        console.log(e.target.value);
      },
      enterHit: function(){
        console.log('You hit enter');
      },
      click: function(){
        alert("You clicked me");
      },
    },
    computed: {
      fullName: function(){
        return this.user.firstName+ ' '+this.user.lastName;
      }
    }
  }
</script>




