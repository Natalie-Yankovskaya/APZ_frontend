<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="washer in washers" v-bind:key="washer.id"> 
        <p>{{$t('serial_number')}}: {{washer.serial_number}}</p>
        <p>{{$t('firm')}}: {{washer.firm}}</p>
        <p>{{$t('model')}}: {{washer.model}}</p>
        <p>{{$t('status')}}: {{washer.status}}</p>
        <p>{{$t('number_of_programs')}}: {{washer.number_of_programs}}</p>
        <p>{{$t('size_id')}}: {{washer.size_id}}</p>
        
        <button class="delete_button" v-on:click="delete_washer(washer.id)" >X</button>
      </li>
    </ul>

    <button class="cute_button" v-on:click="add_washer_page()" > {{$t('addWasher')}} </button>

   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Washers',
  components: {}, 
  mounted() {
      API().get('/washers?laundry_id=1').then((response) =>{
       this.washers = response.data.data;
      })

  },

  data() {
    return {
      washers: []
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