<template>
  <div>
    <h1>Shows</h1>   
    <show-table></show-table>
    <router-link to="/admin" v-if="isSignedIn">Add Show</router-link>
  </div>
</template>

<script>
import ShowTable from './ShowTable';
import {firebase} from '../FirebaseConnection';
export default {
  components:{
    'show-table': ShowTable
  },
  data(){
      return{
        isSignedIn: false
      }
  }, created: function(){
    this.isSignedIn = firebase.auth().currentUser != null;
  }
}
</script>

<style scoped>

</style>

