<template>
  <div class="blog-add">
    <h2>Blog - Add</h2>

    <div id="add-blog">

      <form v-if="!submitted">
        <p>Blog title:</p>
        <input type="text" v-model="blog.title" required>

        <p>Blog content</p>
        <textarea v-model.lazy="blog.content"></textarea>

        <p>Blog categories</p>
        <div id="checkboxes">
          <label>Check 1</label> <input type="checkbox" value="check1" v-model="blog.categories"/>
          <label>Check 2</label> <input type="checkbox" value="check2" v-model="blog.categories"/>
          <label>Check 3</label> <input type="checkbox" value="check3" v-model="blog.categories"/>
          <label>Check 4</label> <input type="checkbox" value="check4" v-model="blog.categories"/>
        </div>

        <p>Author</p>
        <select v-model="blog.author"> <!-- v-model attaccato qui -->
          <option v-for="author in authors">{{author}}</option>
        </select>
        <br>

        <button v-on:click.prevent="post">Add Blog</button>
        <!-- click.prevent , prevent è un modifier per evitare che si comporti come default -->
      </form>

      <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
      </div>

      <div id="preview">
        <h3>Preview Blog</h3>

        <p>Blog title:</p>
        <p class="c-vue">{{blog.title}}</p>
        <p>Blog content: (to update click somewhere - v-model.lazy)</p>
        <p class="c-vue">{{blog.content}} </p>
        <p>Author:</p>
        <p class="c-vue">{{ blog.author }}</p>
        <p>Blog categories: </p>
        <ul>
          <li class="c-vue" v-for="category in blog.categories">{{ category }}</li>
        </ul>
      </div>


    </div>

  </div>
</template>


<script>

export default {
components: {

},
data () {
  return {
    blog: {
      title: "",
      content: "" ,
      categories: [],
      author: ""
  },
    authors: ['Mario', 'Giovanni', 'Luca'], //output them as options
    submitted: false
  }
  },
  methods: {
    post: function(){

      this.$http.post('https://ninjatutorial-eba75.firebaseio.com/post', this.blog) // NOT WORKING
      .then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style src="../assets/blogadd.css" scoped></style>


<!--
{
  title: this.blog.title,
  body: this.blog.content,
  userid: 1
}

this.$http.post('https://jsonplaceholder.typicode.com/posts')
https://ninjatutorial-eba75.firebaseio.com/post.json

LINK TO FIREBASE : https://console.firebase.google.com/project/ninjatutorial-eba75/database/data/post

-->
