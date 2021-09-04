<template>
  <div>

      <h2>Blog- Show</h2>

      <div class="single-blog">
        <div v-for="blog in blogs" class="single-blog">

          <h3>Post # {{ blog.id }}</h3>

          <p>v-rainbow</p>
          <h4 v-rainbow> {{blog.title}} </h4>
          <hr>

          <p>**** v-rainbow:myfavcolor="'colorYellowGlobal'" (NB: virgolette)</p>
          <h4 v-rainbow:myfavcolor="'colorYellowGlobal'"> {{blog.title}} </h4>
          <hr>

          <p>*** v-rainbow="orange"</p>
          <h4 v-rainbow="orange"> {{blog.title}} </h4>
          <hr>

          <p>*** v-rainbow="{{greenFluo}}" --> ERROR (commented)</p>
          <!-- <h4 v-rainbow="#f1c40f"> {{blog.title}} </h4> -->
          <!-- <h4 v-rainbow="rgb(0,0,255)"> {{blog.title}} </h4> -->
          <hr>

          <p>***v-colorRedLocal</p>
          <h4 v-colorRedLocal> {{blog.title}} </h4>
          <hr>

          <p>***v-rainbow + v-colorRedLocal</p>
          <h4 v-rainbow v-colorRedLocal> {{blog.title}} </h4>
          <hr>

          <p>v-colorRedLocal + v-rainbow</p>
          <h4 v-colorRedLocal v-rainbow> {{blog.title}} </h4>
          <hr>

          <p>style="color:blue" + v-rainbow</p>
          <h4 style="color:blue" v-rainbow> {{ blog.title }} </h4>
          <hr>

          <p>v-rainbow + style="color:blue"</p>
          <h4 v-rainbow style="color:blue"> {{ blog.title }} </h4>
          <hr>

          <h3>FILTERS</h3>
          <!-- global filter -->
          <p>| to-uppercase-global</p>
          <h4 v-rainbow> {{ blog.title | to-uppercase-global }} </h4>
          <hr>
          <!-- local filter -->
          <p>| to-uppercase-local-string</p>
          <h4 v-rainbow> {{ blog.title | to-uppercase-local-string }} </h4>

        </div>
      </div>

  </div>
</template>


<script>
import { AnnoyingBackground } from '../main.js';

export default {
    components: {

    },
    data () {
        return {
            blogs: [],
            orange: '',
            greenFluo: ''
            // greenFluo: #00FF00,
            // greenFluo: '#00FF00',
            // greenFluo: (0,255,0),
            // greenFluo: rgb(0,255,0)
        }
    },
    methods: {

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,1);
        });
    },

    filters: {  //filter locally
        'to-uppercase-local-string': function(value){
            return value.toUpperCase();
        },
        toUppercaseLocalFunction(value){
            return value.toUpperCase();
        }
    },
    directives: {
      'colorRedLocal': { //object
          bind(el, binding, vnode){
              el.style.color = "red";
          }
      }
    }
}

</script>
