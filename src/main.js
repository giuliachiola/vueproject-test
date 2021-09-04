import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
// import Routes from './routes'  // NON USATO in questo esempio

export const bus = new Vue(); //export mi serve per poterlo vedere in header e footer
/* ------------- docs ----------------------

<router-link> : will be rendered as an `<a>` tag by default
                intercetta il click e non fa il reload della pagina
                <router-link to '/add' exact> per exact match mode (solo quell'esatto path)

<router-view> : component matched by the route will RENDER here.

vueResource: provides services for making web requests and handle responses using a XMLHttpRequest

bus : way of getting unrelated sections of your application to talk to each other

------------- ------------- ---------------- */

import Test from './components/test'
import Test2 from './components/test2'
import Users from './components/users'
import CustomSearch from './components/customsearch'
import PunchbagGame from './components/punchbaggame'
import NinjasList from './components/ninjaslist'
import ArticlesBlock from './components/articlesblock'
import Blog from './components/blog'

import './assets/menu.css' // file css del menu <view-router>
import './assets/global.css' // file css generico


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/test', component: Test },
    { path: '/test2', component: Test2  },
    { path: '/users', component: Users  },
    { path: '/customsearch', component: CustomSearch  },
    { path: '/punchbaggame', component: PunchbagGame  },
    { path: '/ninjaslist', component: NinjasList  },
    { path: '/articlesblock', component: ArticlesBlock  },
    { path: '/blog', component: Blog  },
  ]
});

/* eslint-disable no-new */
new Vue({

  router,
  template: `
    <div id="app">
      <h2 class="menu">MENU</h2>
      <ul class="menu">
        <li><router-link to="/test">GENERAL (Test) </router-link></li>
        <li><router-link to="/test2">GENERAL (Test 2) </router-link></li>
        <li><router-link to="/punchbaggame">GENERAL (Punchbag Game) </router-link></li>
        <li><router-link to="/users">DATA & METHODS (Users) </router-link></li>
        <li><router-link to="/customsearch">FILTERS (CustomSearch) </router-link></li>
        <li><router-link to="/ninjaslist"> UPDATE COMPONENT CONTENT (Ninjas List)</router-link></li>
        <li><router-link to="/articlesblock"> SLOT (Articles Block)</router-link></li>
        <li><router-link to="/blog"> CUSTOM DIRECTIVES (Blog)</router-link></li>
      </ul>
      <hr>

      <router-view></router-view>
    </div>
  `
}).$mount('#app')

///-------------------------------------------------------------------------------

//CUSTOM DIRECTIVES (camelCase only!)

const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

Vue.directive('rainbow',{
  bind(el, binding, vnode){ // --> when fired (vnode=virtual node)

    if (el) { // el might not be present for server-side rendering

      const customColor = binding.expression || randomColor
      el.style.color = customColor //default custom or random

      if (binding.value == 'colorYellowGlobal'){
        el.style.color = "yellow";
      }
    }
  }
});
// TUTORIAL custom directives > https://alligator.io/vuejs/custom-directives/


//GLOBAL FILTERS
Vue.filter('to-uppercase-global', function(value){ //value nel nostro caso è blog.title
  return value.toUpperCase();
});

Vue.filter('snippet-global', function(value){
  return value.slice(0,100) + ' ...[view more]';
});
///-------------------------------------------------------------------------------

/* -- CON IL VUE ROUTER QUESTO NON VIENE USATO :) --

new Vue({

  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  data: {

  }
*/

// Other ways to COLOR RANDOMLY
// el.style.color = "#" + Math.random().toString().slice(2,8);
// el.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

