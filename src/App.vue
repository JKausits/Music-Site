<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container" id="content">
      <router-view/>

    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'


export default {
  name: 'app',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }, 
  data(){
    return{
    }
  }
}
</script>

<style>
#content{
  margin-top: 8vh;
  margin-bottom: 10vh;
}


</style>
