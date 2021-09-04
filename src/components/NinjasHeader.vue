<template>
    <header>
        <h3>Header component</h3>
        <p>Header quote: <span class="c-vue">{{ quote }}</span></p>
        <button v-on:click="changeQuoteFromHeader">Change quote from header</button>
    </header>
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
      changeQuoteFromHeader: function(){
        this.$emit('changeQuote', '"Forgiveness is divine, but never pay full price for late pizza." - Ninja Turtles');
      }
    }
}
</script>


<style scoped>
button {
    width: 50%;
}
</style>
