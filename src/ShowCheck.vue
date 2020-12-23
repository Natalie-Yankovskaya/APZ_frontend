<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
  <h1 style="text-align:center;">{{$t('checkNumber')}} {{checks[0].check_id}}</h1>


  <table width="600" border="1" align="center">
	<tr align="center">
	<th style="text-align:center;">{{$t('product')}}</th>
	<th style="text-align:center;" >{{$t('count')}}</th>
	<th style="text-align:center;" >{{$t('price')}}</th>
	<th style="text-align:center;">{{$t('utilizationPrice')}}</th>
	<th style="text-align:center;" > </th>
	</tr>


    <tr  v-for="check in checks" v-bind:key="check.id" align="center">
	<td>{{check.product_id}}</td>
	<td>{{check.count}}</td>
	<td ></td>
	<td></td>
	<td></td>
	</tr>

    <tr>
    <th style="text-align:center;">{{$t('total')}}</th>
	<th style="text-align:center;" ></th>
	<td style="text-align:center;">{{message[18]}}</td>
	<td style="text-align:center;">{{message[28]}}</td>
	<td style="text-align:center;">{{message[8]}}</td>
    </tr>
 </table>

   </div>

 </div>
  
</template>


<script>

import API from '@/services/api.js';

export default {
  name: 'Supermarkets',
  components: {}, 
  mounted() {
      API().get('/checks/' + this.$route.params.check_id).then((response) =>{
       this.checks = response.data.data;
       this.message = response.data.message.split(' ');
      })
      API().get('/products').then((response) =>{
       this.products = response.data.data;
      })
  },

  data() {
    return {
      checks: [],
      message: [],
      products: [],
      product: [],
      input: {
        username: "",
        password: ""
      }
    };
  },
  
  methods: {
    delete_supermarket: function (message) {
      API().delete('/supermarkets/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      this.$router.go()
      
    },

    show_name: function (message) {
       API().get('/products/' + message).then((response) =>{
       this.product = response.data.data.name;
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
  display: inline-block;
  
}
</style>
