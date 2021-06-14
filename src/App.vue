

<template>

  <div id="app">
  <header>
    <div class = 'flags'>
  <a href ="#" @click="setLocale('en')"><flag iso="us" size='big'/></a>
       &nbsp;&nbsp;
  <a href ="#" @click="setLocale('ua')"><flag  iso="ua" size='big'/></a>
  </div>

  </header>
    <ul id="nav">
     <li v-if="loggedOut"><router-link to="/customers">{{$t('main')}}</router-link></li>
     <li v-if="loggedOut"><router-link to="/login">{{$t('logIn')}}</router-link></li>
     <li v-if="loggedOut"><router-link to="/registration">{{$t('register')}}</router-link></li>




     <li v-if="loggedIn"><router-link to="/customers">{{$t('menuCustomers')}}</router-link></li>
     <li v-if="loggedIn"><router-link to="/laundries">{{$t('menuLaundries')}}</router-link></li>
     <li v-if="loggedIn"><router-link to='/washers'>{{$t('menuWashers')}}</router-link></li>
     <li v-if="admin && loggedIn"><router-link to='/workers'>{{$t('menuWorkers')}}</router-link></li>
     <li v-if="loggedIn"><router-link to='/breakdowns'>{{$t('menuBreakdowns')}}</router-link></li>
     <li v-if="loggedIn" v-on:click="logout()"><a>{{$t('menuLogOut')}}</a></li>
    </ul>

  <router-view></router-view>

  </div>
  
</template>

<script>



export default {
  name: 'App',
  components: {}, 
  mounted() {

  },

  data() {
    return {

    }
  },

  computed: {
        loggedIn () {
            return this.$store.state.authenticated;
        },
        loggedOut () {
            return !this.$store.state.authenticated;
        },
        locale () {
            return this.$i18n.locale;
        },
        admin () {
          return this.$store.state.admin;
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
       if(this.input.username == "worker" && this.input.password == "1111") {
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

