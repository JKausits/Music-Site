<template>
    <div id="addShowDiv">
        <router-link to="/messages">Messages</router-link>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h2>Add Show</h2>
            </div>
            <div class="panel-body">
                <form v-on:submit.prevent="addShow">
                    <div class="form-group">
                        <label for="startDateTime">Start:</label>
                        <input type="datetime-local" name="startDateTime" id="startDateTime" v-model="show.startDateTime" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="endDateTime">End:</label>
                        <input type="datetime-local" name="endDateTime" id="endDateTime" v-model="show.endDateTime" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="event">Event:</label>
                        <input type="text" class="form-control" id="event" v-model="show.event" required>
                    </div>
                    <div class="form-group">
                        <label for="venue">Venue:
                            <router-link to="/venues">Add Venue</router-link>
                        </label>
                        <select name="venue" id="venue" v-model="show.venue" class="form-control" required>
                            <option v-for="(venue, index) in venues" v-bind:key="venue['.key']" v-bind:value="venue">{{venue.name}}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <input type="submit" value="Add Show" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
        <show-table></show-table>
        <button class="btn btn-default" v-on:click = "logout">Log out</button>
    </div>
</template>

<script>
import { venuesRef, showsRef, firebase } from '../FirebaseConnection';
import swal from 'sweetalert2';
import ShowTable from './ShowTable';

export default {
    components: {
        'show-table': ShowTable
    },
    firebase: {
        venues: venuesRef
    },
    data() {
        return {
            show: {
                startDateTime: '',
                endDateTime: '',
                event: '',
                venue: '',
            }
        }
    }
    , methods: {
        addShow: function() {
            if (this.show.venue['.key']) {
                this.show.venue.key = this.show.venue['.key']
                delete this.show.venue['.key']
            }
            showsRef.push(this.show)
            this.show.startDateTime = ''
            this.show.endDateTime = ''
            this.show.event = ''
            this.show.venue = ''
            swal(
            'Show Created',
            '',
            'success'
            )
        },
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('/')
            })
        }
    }

}
</script>

<style scoped>
#addShowDiv{
    margin-top: 5vh;
}

.btn{
    margin-bottom: 5vh;
}
</style>

