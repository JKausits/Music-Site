<template>
  <div>
    <br>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Contact</h3>
        </div>
        <div class="panel-body">
          <form @submit.prevent = "submitContact">

            <div class="form-group">
              <label for="name">Name: </label>
              <input type="text" id="name" v-model="contact.name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="email">Email: </label>
              <input type="email" id="email" v-model="contact.email" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="subject">Subject: </label>
              <input type="text" v-model="contact.subject" id="subject" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="message">Message: </label>
              <textarea name="message" v-model="contact.message" id="message" cols="30" rows="10" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Send" class="btn btn-primary">
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import {messageRef} from '../FirebaseConnection';
import swal from 'sweetalert2';
export default {
  data(){
      return{
        contact: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
  },methods:{
    submitContact: function(){
      messageRef.push(this.contact);
      this.contact.name = '';
      this.contact.email = '';
      this.contact.subject = '';
      this.contact.message = '';

      swal(
            'Thank You for Contacting Us!',
            'We will get back to you as soon as possible!',
            'success'
            )
    }
  }
}
</script>

<style scoped>
.formcontrol textarea{
  margin-top: 2px;
}
</style>

