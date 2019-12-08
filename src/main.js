import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import Vuelidate from 'vuelidate'
import 'babel-polyfill'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import CardsPage from './components/CardsPage.vue'
import CardDetails from './components/card/CardDetails.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faChevronLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
  mode: 'history',
  routes: [
    
    {
      path: '/login',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/',
      name: 'Cards',
      component: CardsPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/card/:id',
      name: 'CardDetails',
      component: CardDetails,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.path != '/login') {
      if(sessionStorage.getItem('sessionID')) { 
          next();
      } else {
          next('login');
      }
  } else {
      next();
  }

});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
