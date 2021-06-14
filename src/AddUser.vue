<template>
  <div id="app">
  
    <router-view></router-view>
    
  <div class = "nextpers">
  <div class="login-page">
    <form form action="" method="post"  class="login-form" >
        <input class="input1" type="text" name="name" v-model="input.name"  :placeholder="$t('personName')" required/>
        <input class="input1" type="text" name="name" v-model="input.surname"  :placeholder="$t('surname')" required/>
        <input class="input1" type="text" name="email" v-model="input.email"  :placeholder="$t('email')" required/>
        <select id="laundry">
        <option  value="laundry">{{$t('laundry')}}</option>
        <option  :value="laundry.id" v-for="laundry in laundries" v-bind:key="laundry.id">{{laundry.name}}</option>
     </select>
        <input class="input1" type="password" name="password" v-model="input.password"  :placeholder="$t('password')" required/>
        <input class="input1" type="password" name="confirm password" v-model="input.confirm_password"  :placeholder="$t('confirm')" required/>

      <button class="cute_button" type="button" v-on:click="add_breakdown()"> {{$t('register')}} </button>
    </form>
    </div>
   </div>

 </div>
  
</template>


<script>

import API from '@/services/api.js';

export default {
  name: 'Users',
  components: {}, 
  mounted() {
      API().get('/breakdowns').then((response) =>{
       this.breakdowns = response.data.data;
      }),
      API().get('/laundries').then((response) =>{
       this.laundries = response.data.data;
      })
  },

  data() {
    return {
      breakdowns: [],
      laundries: [],
      input: {
        name: "",
        email: "",
        laundry: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  
  methods: {
    add_breakdown: function () {
    
       this.$router.replace({name: "login"});
      
      
    },


    add_page: function()
    {
        this.$router.push('AddSupermarket')
    }
  }

}



</script>


const router = new VueRouter({
  routes: [
    { path: '/breakdowns', component: Breakdowns }
  ]
})