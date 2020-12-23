<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="product in products" v-bind:key="product.id"> 
        <p>{{$t('name')}}: {{product.name}}</p>
        <p>{{$t('price')}}: {{product.price}} {{$t('currency')}}</p>
        <button class="delete_button" v-on:click="delete_product(product.id)" >X</button>
      </li>
    </ul>

    <button class="cute_button" v-on:click="add_product_page()" > {{$t('addProduct')}} </button>

   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Products',
  components: {}, 
  mounted() {
      API().get('/products').then((response) =>{
       this.products = response.data.data;
      })

  },

  data() {
    return {
      products: []
    };
  },

  methods: {
    delete_product: function (message) {
      API().delete('/products/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_product_page: function()
    {
        this.$router.push('addproduct')
    },
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
</style>

const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})