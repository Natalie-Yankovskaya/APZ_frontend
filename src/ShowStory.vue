<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="washing in washings" v-bind:key="washing.id" > 
        <p>{{$t('status')}}: {{washing.status}}</p>
        <p>{{$t('remaining_time')}}: {{washing.remaining_time}}</p>
      </li>
      
    </ul>


   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Washers',
  components: {}, 
  mounted() {
      API().get('/customers/' + this.$route.params.customer_id).then((response) =>{
       this.checks = response.data.data;
       this.message = response.data.message.split(' ');
      })
      API().get('/washings?customer_id=' + this.$route.params.customer_id).then((response) =>{
       this.washings = response.data.data;
      })

      API().get('/services').then((response) =>{
       this.services = response.data.data;
      })

  },

  data() {
    return {
      washers: [],
      washings:[],
      services:[]
    };
  },

  methods: {
    delete_washer: function (message) {
      API().delete('/washers/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_washer_page: function()
    {
        this.$router.push('addWasher')
    },
  }
  

}

</script>


const router = new VueRouter({
  routes: [
    { path: '/washers', component: Washers }
  ]
})