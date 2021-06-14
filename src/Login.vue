
<template>
  <div id="app">

  <router-view></router-view>
<div class = "nextpers">
  <div class="login-page">
  <div class="form">
    <form form action="" method="post"  class="login-form" >
      <input class="input1" type="text" name="username" v-model="input.username" :placeholder="$t('login')" required/>
      <input class="input1" type="password" name="password" v-model="input.password"  :placeholder="$t('password')" required/>
      
      <button class="cute_button" type="button" v-on:click="login()"> {{$t('logIn')}} </button>
    </form>
  </div>
</div>
</div>


  </div>

  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'App',
  components: {}, 
  mounted() {
      API().get('/supermarkets').then((response) =>{
       this.supermarkets = response.data.data;
      })

  },

  data() {
    return {
      supermarkets: [],
      input: {
        username: "",
        password: ""
      }
    }
  },

  methods:{
    setLocale(locale){
      

      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    },

    login() {
      if(this.input.username == "admin" && this.input.password == "pass") {
          this.$store.commit("setAuthentication", true);
          this.$router.replace({name: "laundries"});
          this.$store.commit("setAdmin", true);
       }
       if(this.input.username == "worker" && this.input.password == "1111") {
         this.$store.commit("setAuthentication", true);      
         this.$router.replace({name: "washers"});
         this.$store.commit("setAdmin", false);
       }
    },

    logout() {
      this.$store.commit("setAuthentication", false);
      this.$router.replace({name: "login"});
    },

    register() {
      this.$router.replace({name: "registration"});
    }
  }
  

}

</script>

