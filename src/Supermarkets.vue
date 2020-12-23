<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="supermarket in supermarkets" v-bind:key="supermarket.id"> 
        <p>{{$t('name')}}: {{supermarket.name}}</p>
        <p> {{$t('address')}}: {{supermarket.address}}</p>
        <button class="delete_button" v-on:click="delete_supermarket(supermarket.id)" >X</button>
      </li>
    </ul>

    <button class="cute_button" v-on:click="add_page()" > {{$t('addSupermarket')}} </button>
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
      supermarkets: []
    };
  },
  
  methods: {
    delete_supermarket: function (message) {
      API().delete('/supermarkets/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },

    add_page: function()
    {
        this.$router.push('add')
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

.delete_button {
  
  background: #F08080;
  display: inline-block;;
  
}

.cute_button {
  
  background: #F0E68C;
  display: inline-block;
  font-size: 18px;
  
}

th {
  font-size: 17px;
  font-weight: bold;
  background: #b9c9fe;
  border-top: 4px solid #aabcfe;
  border-bottom: 1px solid #fff;
  color: black;
  padding: 8px;
}
td {
  font-size: 17px;
  background: #e8edff;
  border-bottom: 1px solid #fff;
  border-top: 1px solid transparent;
  padding: 8px;
}
tr:hover td {background: #ccddff;}

</style>

const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})