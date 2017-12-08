<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>When</th>
                    <th>Event</th>
                    <th>Where</th>
                    <th>Time</th>
                    <th></th>
                    <th v-if="isSignedIn"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="show in shows" v-bind:key="show['.key']">
                    <td>{{getDateString(show.startDateTime)}}</td>
                    <td>{{show.event}}</td>
                    <td v-if="show.venue.url">
                        <a v-bind:href="show.venue.url" target="blank">{{show.venue.name}}</a>
                    </td>
                    <td v-else>{{show.venue.name}}</td>
                    <td>{{getTimeString(show.startDateTime)}} - {{getTimeString(show.endDateTime)}}</td>
                    <td><a v-bind:href="show.venue.directionsUrl" v-if="show.venue.directionsUrl" target="blank">
                        <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                        </a></td>
                    <td v-if="isSignedIn">
                        <i class="fa fa-trash fa-lg" aria-hidden="true" v-on:click="removeShow(show)"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { firebase, showsRef } from '../FirebaseConnection';
export default {
    firebase: {
        shows: showsRef
    },
    data() {
        return {
            isSignedIn: false
        }
    }, created: function() {
        this.isSignedIn = firebase.auth().currentUser != null;
    }, methods: {
        getDateString: function(date) {
            date = new Date(date);
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
        },
        getTimeString: function(date) {
            date = new Date(date);
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var suffix;
            if (hour > 12) {
                hour -= 12;
                suffix = ' PM';
            } else {
                suffix = 'AM';
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            return `${hour}:${minutes} ${suffix}`;
        },
        removeShow: function(show) {
            showsRef.child(show['.key']).remove();
        }
    }
}
</script>

<style scoped>
.fa-trash {
    cursor: pointer;
}
</style>

