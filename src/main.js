import Vue from 'vue'
import App from './App.vue'
import LogIn from './Login.vue'
import VueRouter from 'vue-router'
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import Vuex from "vuex"
import Laundries from './Laundries.vue'
import AddLaundry from './AddLaundry.vue'
import Washers from './Washers.vue'
import AddWasher from './AddWasher.vue'
import Workers from './Workers.vue'
import Customers from './Clients.vue'
import Breakdowns from './Breakdowns.vue'
import AddBreakdown from './AddBreakdown.vue'
import ShowStory from './ShowStory.vue'
import AddUser from './AddUser.vue'
import './assets/style.scss'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(FlagIcon);
Vue.use(Vuex);

const store = new Vuex.Store(
  {
      state: {
          authenticated: false,
          admin: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          },
          setAdmin(state, status) {
            state.admin = status;
        },
      }
  }
);


const routes = [
    { 
      path: "/",
      redirect: {name: "login"}
    },
    { 
      path: '/home',
      name: "home",
      component: App 
    },
    { 
      path: '/washers',
      name: 'washers',
      component: Washers,
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },
    { 
      path: '/laundries',
      component: Laundries,
      name: "laundries",
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },
    { 
      path: '/workers',
      component:Workers,
      name: "workers",
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },
    { 
      path: '/customers',
      component:Customers,
      name: "customers",
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },

    { 
      path: '/breakdowns',
      component:Breakdowns,
      name: "breakdowns",
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },

    { 
      path: '/login',
      name: "login",
      component: LogIn 
    },
    { 
      path: '/addLaundry',
      component: AddLaundry 
    },
    { 
      path: '/addWasher',
      component: AddWasher 
    },
    { 
      path: '/addbreakdown',
      component: AddBreakdown
    },
    { 
      path: '/showstory',
      name: 'ShowStory',
      component: ShowStory 
    },
    { 
      path: '/registration',
      name: 'AddUser',
      component: AddUser 
    }

];



const router = new VueRouter({
  routes
});



new Vue({
  i18n,
  router,
  store,
  silentTranslationWarn: true,
  render: h => h(App),
}).$mount('#app')


