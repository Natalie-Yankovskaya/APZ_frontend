<template>
  <div id="app">
  
    <router-view></router-view>
    
  <div class = "nextpers">
  <div class="login-page">
    <form form action="" method="post"  class="login-form" >
      <input class="input1" type="text" name="username" v-model="input.name" placeholder="Назва" required/>
      <input class="input1" type="text" name="admin" v-model="input.price"  placeholder="Ціна" required/>
      <input class="input1" type="text" name="city" v-model="input.package"  placeholder="Пакування" required/>
      
      <button class="cute_button" type="button" v-on:click="add_product()"> {{$t('add')}} </button>
    </form>
    </div>
   </div>

 </div>
  
</template>


<script>

import API from '@/services/api.js';

export default {
  name: 'Supermarkets',
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
        name: "",
        price: "",
        package: ""
      }
    };
  },
  
  methods: {
    add_product: function () {
      API().post('/products', { package_id: this.input.package, name: this.input.name, price: this.input.price}).then((response) =>{
       console.log(response.data.data.name);
       this.$router.replace({name: "products"});
      })
      
      
    },


    add_page: function()
    {
        this.$router.push('AddSupermarket')
    }
  }

}



</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

body {
     background: #F0E68C; 
}
.nextpers {
        padding-top:10px;
        width: 1005px;
        padding-left:20px;
        height:750px;
        background:rgba( 128, 128, 128, 0.7);
        margin-left: 240px;
        margin-left: 240px;
        margin: 0 px;
}

.table1
{
  
  float: left;
  display: block;
  border: 1px;
  margin: 2px;
  overflow:hidden;
  width:400px;
  height:150px;
}

.rectangle {
counter-reset: li; 
list-style: none; 
font: 14px "Trebuchet MS", "Lucida Sans";
padding: 0;
text-shadow: 0 1px 0 rgba(255,255,255,.5);

}
.rectangle li {
position: relative;
display: block;
padding: .4em .4em .4em .8em;
margin: .5em 0 .5em 2.5em;
background: #D3D4DA;
color: #444;
text-decoration: none;
transition: all .3s ease-out;
width: 500px;

}
.rectangle li:hover {background: #DCDDE1;}       
.rectangle li:before {
content: counter(li);
counter-increment: li;
position: absolute;
left: -2.5em;
top: 50%;
margin-top: -1em;
background: rgb(238,236,192);
height: 2em;
width: 2em;
line-height: 2em;
text-align: center;
font-weight: bold;
}
.rectangle li:after {
position: absolute;
content: "";
border: .5em solid transparent;
left: -1em;
top: 50%;
margin-top: -.5em;
transition: all .3s ease-out;
}
.rectangle li:hover:after {
left: -.5em;
border-left-color: rgb(238,236,192);
}

.delete_button {
  
  background: #F08080;
  display: inline-block;
  
}
</style>

const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})