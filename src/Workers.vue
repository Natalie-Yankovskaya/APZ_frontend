<template>
  <div id="app">
  
    <router-view></router-view>
  <div class = "nextpers">
    <ul class="rectangle">
      <li  v-for="worker in workers" v-bind:key="worker.id"> 
        <p>{{$t('personName')}}: {{worker.name}}</p>
        <p>{{$t('surname')}}: {{worker.surname}}</p>
        <p>{{$t('phonenumber')}}: {{worker.phonenumber}}</p>
        
        <button class="delete_button" v-on:click="delete_worker(worker.id)" >X</button>
      </li>
    </ul>


   </div>

 </div>
  
</template>

<script>

import API from '@/services/api.js';

export default {
  name: 'Workers',
  components: {}, 
  mounted() {
      API().get('/workers').then((response) =>{
       this.workers = response.data.data;
      })

  },

  data() {
    return {
      workers: []
    };
  },

  methods: {
    delete_worker: function (message) {
      API().delete('/workers/' + message).then((response) =>{
       console.log(response.data.data.name);
      })
      
    },
     add_worker_page: function()
    {
        this.$router.push('addWorker')
    },
  }
  

}

</script>


const router = new VueRouter({
  routes: [
    { path: '/workers', component: Workers }
  ]
})