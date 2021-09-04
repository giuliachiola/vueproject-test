<template>
    <footer>
        <h3>Footer component</h3>
        <p>Footer quote: <span class="c-vue">{{ quote }}</span></p>
        <button v-on:click="changeQuoteFromFooter">Change quote from footer</button>
    </footer>
</template>

<script>
export default {
    props: {
      quote: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    methods: {
      changeQuoteFromFooter: function(){
        this.$emit('changeQuote', '"People disappoint, pizza is eternal" - Ninja Turtles');
      }
    }
}
</script>

<style scoped>
button {
    width: 50%;
}
</style>
