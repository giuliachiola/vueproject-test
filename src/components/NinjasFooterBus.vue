<template>
    <footer>
        <h3>Footer Bus component</h3>
        <p>Footer quote: <span class="c-vue">{{ quoteBus }}</span></p>
    </footer>
</template>

<script>
import {bus} from '../main';

export default {
    data(){
        return{
          quoteBus: ''
        }
    },
    methods: {
    },
    created(){
      bus.$on('changeQuoteBus', (data) => {
          this.quoteBus = data;
      });
    }
}
</script>

<style scoped>
button {
    width: 50%;
}
</style>
