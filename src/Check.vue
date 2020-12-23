<template>
  <div id="app">
  <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="product in products" v-bind:key="product.id"> 
        <p>{{$t('name')}}: {{product.name}}</p>
        <p>{{$t('price')}}: {{product.price}} {{$t('currency')}}</p>
        <p><input :id="product.id" type="number" size="3" name="sock1" min="0" max="10" value="0">  </p>
      </li>
    </ul>

    <p><label for="customer">{{$t('customer')}}</label></p>
     <select id="customer">
        <option  value="customer">{{$t('chooseCustomer')}}</option>
        <option  :value="customer.id" v-for="customer in customers" v-bind:key="customer.id">{{customer.name}} {{customer.surname}}</option>
     </select>
   <p></p>
   <button class="cute_button" v-on:click="create_check(10)" >{{$t('createCheck')}}</button>
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
      }),
      API().get('/customers').then((response) =>{
       this.customers = response.data.data;
      })

  },

  data() {
    return {
      products: [],
      customers: []
    };
  },

  methods: {
    create_check: function (cashier_id) {
      var e = document.getElementById("customer");
      var customer_id = e.options[e.selectedIndex].value;
      var check_id = 0;
      API().post('/checks', {cashier_id: cashier_id, customer_id: customer_id}).then((response) =>{
        check_id = response.data.data.id;
        console.log(cashier_id);
        console.log(customer_id);
        console.log(check_id);
        
        
        var products = [];
        API().get('/products').then((response) =>{
          products = response.data.data;
          for (let i = 0; i< products.length; i++  ) {
            console.log(products[i].id);
            var count = document.getElementById(products[i].id).value;
            console.log(count)
            if(count > 0){
              API().post('/check_items', {check_id: check_id, product_id: products[i].id, count: count}).then((response) =>{
                console.log(response.data.data);
              })
            }
            
          }
          console.log('kdkdkkd');
          console.log(check_id);

          this.$router.push({name: 'ShowCheck', params: { check_id } });

        });


        

      });
    }
 },
  

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

select {
  width: 500px;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 0;
  background: #e6e6e6;
  color: #7b7b7b;
}
</style>

const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})