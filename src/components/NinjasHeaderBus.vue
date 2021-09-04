<template>
    <header>
        <h3>Header component</h3>
        <p>Header quote: <span class="c-vue">{{ quoteBus }}</span></p>
        <button v-on:click="changeQuoteBus">Change quote from header WITH BUS</button>
    </header>
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
      changeQuoteBus: function(){
        this.quoteBus = 'Quote from header to header';
        bus.$emit('changeQuoteBus', 'Quote from header to receiver component WITH BUS');
      }
    }
}
</script>


<style scoped>
button {
    width: 50%;
}
</style>
