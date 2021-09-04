<template>
    <div class="blog">

    <h1>Blog</h1>

    <button v-on:click="btnToggle = !btnToggle">Toggle: blog-show / blog-add</button>

    <blog-show v-if="btnToggle"></blog-show>
    <blog-add v-else="btnToggle"></blog-add>

    <!--
    v-if :    mount/unmount
    v-show :  leave the DOM, toggle visibility
    -->

    </div>
</template>


<script>
import BlogShow from './BlogShow.vue';
import BlogAdd from './BlogAdd.vue';

export default {
  components: {
    'blog-show': BlogShow,
    'blog-add' : BlogAdd
  },
  data () {
    return {
      btnToggle: true
    }
  }
}
</script>
