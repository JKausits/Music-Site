<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Login</h3>
        </div>
        <div class="panel-body">
            <div class="alert alert-danger" v-if="err !== ''">{{err}}</div>
        <form v-on:submit.prevent="signIn">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" class="form-control">
            </div>
            <div class="form-group">
                <input type="submit" value="Login" class="btn btn-primary">
            </div>
        </form>
        </div>
    </div>
</template>
<script>
import {firebase} from '../FirebaseConnection';
export default {
  data(){
      return {
          email:'',
          password:'',
          err:''
      }
  },
  methods: {
      signIn: function(){
          this.err = '';
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((res)=>{
              this.$router.replace('/show/new')
          }).catch((error)=>{
              this.err = 'The email and/or password are incorrect';
          })
      }
  }
}
</script>

<style scoped>
    .panel{
        margin-top: 5vh;
    }
</style>


