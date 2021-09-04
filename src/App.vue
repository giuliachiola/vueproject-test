<template>
  <div id="app">

    <!--  TEST COMPONENT (senza parametri) -->
    <Test></Test>

    <!-- TEST COMPONENT -->
    <Test msg="Bonjour"></Test>

  </div>
</template>

<script>
import Test from './components/test'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style>
</style>



