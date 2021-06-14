<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="breakdown in breakdowns" v-bind:key="breakdown.id"> 
        <p>{{$t('washer_id')}}: {{breakdown.washer_id}}</p>
        <p>{{$t('urgency')}}: {{breakdown.urgency}}</p>
        <p>{{$t('taken')}}: {{breakdown.taken}}</p>
        <p>{{$t('status')}}: {{breakdown.status}}</p>
        <p>{{$t('comment')}}: {{breakdown.comment}}</p>
        <button class="delete_button" v-on:click="delete_breakdown(breakdown.id)" >X</button>
      </li>
    </ul>


    <button class="cute_button" v-on:click="add_breakdown_page()" > {{$t('addbreakdown')}} </button>

   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Breakdowns',
  components: {}, 
  mounted() {
      API().get('/breakdowns').then((response) =>{
       this.breakdowns = response.data.data;
      })

  },

  data() {
    return {
      breakdowns: []
    };
  },

  methods: {
    delete_breakdown: function (message) {
      API().delete('/breakdowns/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_breakdown_page: function()
    {
        this.$router.push('addbreakdown')
    },
  }
  

}

</script>



const router = new VueRouter({
  routes: [
    { path: '/supermarkets', component: Supermarkets }
  ]
})