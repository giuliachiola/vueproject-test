<template>
  <div id="show-blogs" class="custom-search">
    <h1>Custom Search</h1>

    <h2>All blog articles</h2>
    <div v-for="blog in blogs">
      <h3>{{ blog.id }} - {{ blog.title | to-uppercase-global }}</h3>
      <article>{{ blog.body | snippet-global }}</article>
    </div>

    <hr>

    <h2>Search...</h2>
    <input type="text" v-model="search" placeholder="searchbox" />

    <h2>Results (in title only)</h2>
    <div v-for="blog in filteredBlogsTitle">
      <h3>{{ blog.id }} - {{ blog.title | to-uppercase-global }}</h3>
      <article>{{ blog.body | snippet-global }}</article>
    </div>

    <h2>Results (in title and body)</h2>
    <div v-for="blog in filteredBlogsAll">
      <h3>{{ blog.id }} - {{ blog.title | to-uppercase-global }}</h3>
      <article>{{ blog.body | snippet-global }}</article>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {

    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        this.blogs = data.body.slice(0,10);  //--> slice(): portion of an array into a new array object selected from begin to end
      })
    },
    computed: {
      filteredBlogsTitle: function(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      },
      filteredBlogsAll: function(){
        return this.blogs.filter((blog) => {
          if (blog.title.match(this.search) || blog.body.match(this.search)){
            return blog.body.match(this.search);
          }
          //return blog.body.match(this.search);
        });
      }
    }
  }
</script>

<style scoped>
h2 { color: #3498db; }
</style>
