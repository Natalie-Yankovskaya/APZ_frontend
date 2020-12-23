import Vue from 'vue'
import App from './App.vue'
import Supermarkets from './Supermarkets.vue'
import Check from './Check.vue'
import Products from './Products.vue'
import LogIn from './Login.vue'
import AddSupermarket from './AddSupermarket.vue'
import AddProduct from './AddProduct.vue'
import ShowCheck from './ShowCheck.vue'
import VueRouter from 'vue-router'
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import Vuex from "vuex"

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(FlagIcon);
Vue.use(Vuex);

const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
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
      path: '/supermarkets',
      name: 'supermarkets',
      component: Supermarkets,
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },
    { 
      path: '/check',
      component: Check,
      name: "check",
      params: true ,
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
       }
    },
    { 
      path: '/products',
      component: Products,
      name: "products",
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
      path: '/add',
      component: AddSupermarket 
    },
    { 
      path: '/addproduct',
      component: AddProduct 
    },
    { 
      path: '/showcheck',
      name: 'ShowCheck',
      component: ShowCheck 
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


