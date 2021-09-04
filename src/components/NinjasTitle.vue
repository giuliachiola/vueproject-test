<template>
    <div class="ninjas-title">

      <p>Child template - parent title:</p>
      <p class="c-vue">{{propTitle}}</p>

      <br>
      <p>Child template - child title:</p>
      <p class="c-vue">{{ childTitle }}</p>

  </div>
</template>

<script>
export default {
    props:
      [ 'propTitle' ],
    data(){
      return{
        childTitle: 'Vue Wizards (in child data)'
      }
    }
  }

</script>

<!-- very good Props TUTORIALS

  https://alligator.io/vuejs/intro-to-component-props/
  https://medium.com/@sky790312/about-vue-2-parent-to-child-props-af3b5bb59829

  (parent) -> pass props  -> (child)
           <- emit events <-

-->
