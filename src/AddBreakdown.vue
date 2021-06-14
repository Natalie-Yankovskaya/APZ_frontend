<template>
  <div id="app">
  
    <router-view></router-view>
    
  <div class = "nextpers">
  <div class="login-page">
    <form form action="" method="post"  class="login-form" >
     <select id="washer">
        <option  value="washer">{{$t('washer')}}</option>
        <option  :value="washer.id" v-for="washer in washers" v-bind:key="washer.id">{{washer.model}}</option>
     </select>
      <input class="input1" type="text" name="urgency" v-model="input.urgency"  :placeholder="$t('urgency')" required/>
      <input class="input1" type="text" name="comment" v-model="input.comment"  :placeholder="$t('comment')" required/>
      
      <button class="cute_button" type="button" v-on:click="add_breakdown()"> {{$t('addbreakdown')}} </button>
    </form>
    </div>
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
      }),
      API().get('/washers').then((response) =>{
       this.washers = response.data.data;
      })
  },

  data() {
    return {
      breakdowns: [],
      washers: [],
      input: {
        urgency: "",
        taken: "",
        status: "",
        comment: ""
      }
    };
  },
  
  methods: {
    add_breakdown: function () {
      var e = document.getElementById("washer");
      var washer_id = e.options[e.selectedIndex].value;
      API().post('/breakdowns', { washer_id: washer_id, urgency: this.input.urgency, taken: 'false', status: 'false', comment: this.input.comment}).then((response) =>{
       console.log(response.data.data.name);
       this.$router.replace({name: "breakdowns"});
      })
      
      
    },


    add_page: function()
    {
        this.$router.push('AddSupermarket')
    }
  }

}



</script>


const router = new VueRouter({
  routes: [
    { path: '/breakdowns', component: Breakdowns }
  ]
})