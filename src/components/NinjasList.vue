<template>
    <div class="ninjas-list">
      <h1>Ninjas List</h1>

        <h2>ORIGINAL: ninja in ninjas</h2>
        <ul>
          <li v-for="ninja in ninjas">{{ ninja.name }}</li>
        </ul>

        <hr>

        <h2>< ninjas > where 'ninjas': Ninjas</h2>
        <p>Click on ninja to see his speciality</p>
        <ninjas v-bind:ninjas="ninjas"></ninjas>

        <hr>

        <p>Parent template - parent title:</p>
        <p class="c-vue">{{ parentTitle }}</p>
        <br>

        <p> -------------- START component "ninjas-title" </p>
        <ninjas-title :propTitle="parentTitle"></ninjas-title>
        <p> -------------- END component "ninjas-title" </p>

        <hr>
        <h2>Update content from component to another</h2>
        <ninjas-header v-bind:quote="quote" v-on:changeQuote="updateQuote($event)"></ninjas-header>
        <ninjas-footer v-bind:quote="quote" v-on:changeQuote="updateQuote($event)"></ninjas-footer>
        <hr>

        <h2>Bus events</h2>
        <ninjas-header-bus></ninjas-header-bus>
        <ninjas-footer-bus></ninjas-footer-bus>

  </div>
</template>

<!-- IMPORTANT: kebab-case in HTML tags, camelCase in JavaScript -->

<script>
import Ninjas from './Ninjas.vue';
import NinjasTitle from './NinjasTitle.vue';
import NinjasHeader from './NinjasHeader.vue';
import NinjasFooter from './NinjasFooter.vue';
import NinjasHeaderBus from './NinjasHeaderBus.vue';
import NinjasFooterBus from './NinjasFooterBus.vue';

export default {
    components: {
      'ninjas': Ninjas,
      'ninjas-title': NinjasTitle,
      'ninjas-header': NinjasHeader,
      'ninjas-footer': NinjasFooter,
      'ninjas-header-bus': NinjasHeaderBus,
      'ninjas-footer-bus': NinjasFooterBus
    },
    data () {
        return {
          ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
          parentTitle: 'Vue Wizards (in parent data)',
          quote: 'Hello everyone'
        }
    },
    methods: {
      updateQuote: function(updatedQuote){
        this.quote = updatedQuote;
      }
    }
}
</script>

<!-- <style src="../assets/ninjas.css" scoped></style> -->
