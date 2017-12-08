<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                Venues
            </div>
            <div class="panel-body">
                <form v-on:submit.prevent="createVenue" class="form-inline">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="venue.name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="url">Website:</label>
                        <input type="url" id="url" v-model="venue.url" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="directionsUrl">Directions URL:</label>
                        <input type="url" id="directionsUrl" v-model="venue.directionsUrl" class="form-control">
                    </div>
                    <input type="submit" value="Submit" class="btn btn-primary">
                </form>

            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Venues</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(venue, index) in venues" v-bind:key="index">
                    <td><a v-bind:href="venue.url" target="blank">{{venue.name}}</a></td>
                    <td><a v-show="venue.directionsUrl != ''" v-bind:href="venue.directionsUrl" target="blank"><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></a></td>
                    <td><i class="fa fa-trash fa-lg" aria-hidden="true" v-on:click="deleteVenue(venue)"></i></td>
                </tr>
            </tbody>
        </table>
        <router-link to="/admin">Back</router-link>
    </div>
</template>

<script>
import { venuesRef } from '../FirebaseConnection';

export default {
    props: [],
    firebase: {
        venues: venuesRef
    },
    data() {
        return {
            venue: {
                name: '',
                url: '',
                directionsUrl: ''
            }
        }
    }
    , methods: {
        createVenue: function() {
            venuesRef.push(this.venue);
            this.venue.name = '';
            this.venue.url = '';
            this.venue.directionsUrl = '';
        },
        deleteVenue: function(venue){
            venuesRef.child(venue['.key']).remove();
        }
    }
}
</script>

<style scoped>
.panel {
    margin-top: 5vh;
}

.fa-lg:hover{
    cursor: pointer;
}
</style>

