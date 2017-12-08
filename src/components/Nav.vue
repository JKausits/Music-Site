<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/"><img id="logo" src="../assets/logo.png" alt=""></router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shows">Shows</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>
<script>
import {firebase} from '../FirebaseConnection';
export default {
  data(){
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  #logo{
    background-color: #101010;
    margin-top: -0.5vh;
  }
</style>


