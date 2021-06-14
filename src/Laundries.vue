<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="laundry in laundries" v-bind:key="laundry.id"> 
        <p>{{$t('name')}}: {{laundry.name}}</p>
        <p>{{$t('address')}}: {{laundry.address}}</p>
        <p>{{$t('city')}}: {{laundry.city}}</p>
        <button class="delete_button" v-on:click="delete_laundry(laundry.id)" >X</button>
      </li>
    </ul>

    <button class="cute_button" v-on:click="add_laundry_page()" > {{$t('addlaundry')}} </button>

   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Laundries',
  components: {}, 
  mounted() {
      API().get('/laundries').then((response) =>{
       this.laundries = response.data.data;
      })

  },

  data() {
    return {
      laundries: []
    };
  },

  methods: {
    delete_laundry: function (message) {
      API().delete('/laundries/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_laundry_page: function()
    {
        this.$router.push('addLaundry')
    },
  }
  

}

</script>


const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})