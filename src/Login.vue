<template>
  <div id="app">

  <router-view></router-view>
<div class = "nextpers">
  <div class="login-page">
  <div class="form">
    <form form action="" method="post"  class="login-form" >
      <input class="input1" type="text" name="username" v-model="input.username" placeholder="Логін" required/>
      <input class="input1" type="password" name="password" v-model="input.password"  placeholder="Пароль" required/>
      
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
          this.$router.replace({name: "supermarkets"});
       }
       if(this.input.username == "cashier" && this.input.password == "1111") {
         this.$store.commit("setAuthentication", true);
         this.$router.replace({name: "check"});
       }
    },

    logout() {
      this.$store.commit("setAuthentication", false);
      this.$router.replace({name: "login"});
    }
  }
  

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav{
   margin: 0;
        padding: 0;
        margin-left: 240px;
        margin-right: 240px;
        list-style-type: none; 
        border: 2px double #000000; 
        height: 30px;
        width: 1023px;
        text-align: center;
        background: rgb(238,236,192);
}
#nav li{

  display: inline;
}
#nav li a{
      font-size: 16px; 
        color: #000000;
        padding: 5px 10px; 
        text-decoration: none;
        
        display: inline-block; 
        width: 140px;
        height: 20px;
}
#nav li a:hover{
        background-color: rgb(184,115,51);
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
      }

.flags {
  width: 10 px;
  height: 5 px;
}

.input1 {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 20px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
}

.input2 {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 50%;
  border: 0;
  margin: 0 0 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 14px;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

</style>
