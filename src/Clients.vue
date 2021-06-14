<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">

    <ul class="rectangle">
      <li  v-for="customer in customers" v-bind:key="customer.id"> 
        <p>{{$t('personName')}}: {{customer.name}}</p>
        <p>{{$t('surname')}}: {{customer.surname}}</p>
        <p>{{$t('phonenumber')}}: {{customer.phonenumber}}</p>
        <button class="delete_button" v-on:click="show_story(customer.id)" >{{$t('washings')}}</button>
      </li>
    </ul>
   </div>
 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Customers',
  components: {}, 
  mounted() {
      API().get('/customers').then((response) =>{
       this.customers = response.data.data;
      })

  },

  data() {
    return {
      customers: [],
      
    };
  },

  methods: {
    delete_customer: function (message) {
      API().delete('/customers/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_customer_page: function()
    {
        this.$router.push('addCustomer')
    },

    show_story: function(customer_id)
    {
        this.$router.push('showStory'),
        this.$router.push({name: 'ShowStory', params: { customer_id } })
    },
  }
  

}

</script>

const router = new VueRouter({
  routes: [
    { path: '/customers', component: Customers }
  ]
})