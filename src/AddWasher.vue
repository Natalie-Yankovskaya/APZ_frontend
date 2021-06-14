<template>
  <div id="app">
  
    <router-view></router-view>
    
  <div class = "nextpers">
  <div class="login-page">
    <form form action="" method="post"  class="login-form" >
  
     
      <input class="input1" type="text" name="serial_number" v-model="input.serial_number" :placeholder="$t('serial_number')" required/>
      <input class="input1" type="text" name="firm" v-model="input.firm"  :placeholder="$t('firm')" required/>
      <input class="input1" type="text" name="model" v-model="input.model"  :placeholder="$t('model')" required/>
      <input class="input1" type="text" name="status" v-model="input.status" :placeholder="$t('status')" required/>
      <input class="input1" type="number" name="number_of_programs" v-model="input.number_of_programs"  :placeholder="$t('number_of_programs')" required/>
      <select id="size">
        <option  value="size">{{$t('size')}}</option>
        <option  :value="size.id" v-for="size in sizes" v-bind:key="size.id" >{{size.max_load}}</option>
     </select>
      
      <button class="cute_button" type="button" v-on:click="add_washer()"> {{$t('addWasher')}} </button>
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
      API().get('/washers').then((response) =>{
       this.washers = response.data.data;
      }),
      API().get('/laundries').then((response) =>{
       this.laundries = response.data.data;
      }),
      API().get('/sizes').then((response) =>{
       this.sizes = response.data.data;
      })
  },

  data() {
    return {
      washers: [],
      laundries: [],
      sizes: [],
      input: {
        laundry_id: "", 
        serial_number: "", 
        firm: "", 
        model: "", 
        status: "", 
        number_of_programs: "", 
        size_id: ""
      }
    };
  },
  
  methods: {
    add_washer: function () {
      API().post('/washers', { laundry_id: 1, serial_number: this.input.serial_number, firm: this.input.firm, model: this.input.model, status: this.input.status, number_of_programs: parseInt(this.input.number_of_programs), size_id: 2}).then((response) =>{
       console.log(response.data.data);
       this.$router.replace({name: "washers"});
      })
      
      
    },
  }

}



</script>



const router = new VueRouter({
  routes: [
    { path: '/laundries', component: Laundries }
  ]
})