import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import 'babel-polyfill'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import CardDetails from './components/card/CardDetails.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/card/:id',
      name: 'CardDetails',
      component: CardDetails,
      props: true
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: AboutPage
    },
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
