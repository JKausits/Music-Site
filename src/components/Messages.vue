<template>
<div>

    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="message in messages" v-bind:key="message['.key']">
                    <td>{{message.name}}</td>
                    <td><a v-bind:href="`mailto:${message.email}`">{{message.email}}</a></td>
                    <td>{{message.subject}}</td>
                    <td>{{message.message}}</td>
                    <td><i class="fa fa-trash fa-lg" v-on:click="deleteMessage(message)"></i></td>
                </tr>
            </tbody>
    </table>  
    <router-link to="/admin">Back</router-link>
</div>
</template>

<script>
import {messageRef} from '../FirebaseConnection';
export default {
  firebase: {
      messages: messageRef
  },
  data() {
    return {
        
    }
  },
  methods: {
      deleteMessage: function(message){
          messageRef.child(message['.key']).remove()
      }
  }
}
</script>

<style scoped>
    .table{
        margin-top: 6vh;
    }
    .fa-trash{
        cursor: pointer;
    }
</style>
