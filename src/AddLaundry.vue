<template>
  <div id="app">
  
    <router-view></router-view>
    
  <div class = "nextpers">
  <div class="login-page">
    <form form action="" method="post"  class="login-form" >
      <input class="input1" type="text" name="username" v-model="input.name" :placeholder="$t('name')" required/>
      <input class="input1" type="text" name="admin" v-model="input.address"  :placeholder="$t('address')" required/>
      <input class="input1" type="text" name="city" v-model="input.city"  :placeholder="$t('city')" required/>
      
      <button class="cute_button" type="button" v-on:click="add_laundry()"> {{$t('add')}} </button>
    </form>
    </div>
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
      laundries: [],
      input: {
        name: "",
        address: "",
        city: ""
      }
    };
  },
  
  methods: {
    add_laundry: function () {
      API().post('/laundries', { name: this.input.name, address: this.input.address, city: this.input.city}).then((response) =>{
       console.log(response.data.data.name);
       this.$router.replace({name: "laundries"});
      })
    }
  }

}



</script>


const router = new VueRouter({
  routes: [
    { path: '/laundries', component: Laundries }
  ]
})