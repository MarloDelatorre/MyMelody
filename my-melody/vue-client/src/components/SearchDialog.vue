<template>
    <div class="container">
        <input class="search-box" v-model="query" placeholder="Search"/><button class="search-btn" v-on:click="search"><icon name="search"></icon></button>
        <div class="results">
            <p v-if="!tracks">Search for a song or artist.</p>
            <div v-if="noResults" class="noresults">
                <p>No results found.</p>
            </div>
            <transition-group name="fade" class="transition">
            <div v-for="track in tracks" :key="track.id" class="result">
                <track-card :title="track.title" :artist="track.artist" :albumArt="track.albumArt"/>
                <button class="select" v-on:click="select(track)">Select</button>
            </div>
            </transition-group>
        </div>
        <button class="continue" v-on:click="commit" :disabled="!selectedTrack">Continue</button>
    </div>
</template>

<script>
import TrackCard from './TrackCard.vue';
import axios from 'axios';

export default {
    name: 'search-dialog',
    components: {
        TrackCard
    },
    data: function() {
        return {
            query: null,
            noResults: false,
            tracks: null,
            selectedTrack: null
        }
    },
    methods: {
        search() {
            this.selectedTrack = null;
            var token = 'BQAVq8xAfAbZ-4NitDryolWNhoxFjJHuO0y8gUxJZJ5VUw4gDnMcpjvtG1Ueuu4mbXVD3w3vX3Ya47hk0F5BICJwAZ-LOnyBG7A8Jobg387SjTTfpF4iv3NIvsEBlWA4bl9q9jyAoT-1fa6Y';
            axios.get(`https://api.spotify.com/v1/search?q=${this.query}&type=track` , {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                } }) .then(res => {
                           const tracks = res.data.tracks.items;
                this.noResults = tracks.length > 0 ? false : true;
                this.tracks = tracks.map(item => {
                    return {
                        service: 'Spotify',
                        title: item.name,
                        artist: item.artists.map(artist => {
                                    return artist.name
                                }).join(', '),
                        albumArt: item.album.images ? item.album.images[0].url : null,
                        id: item.id
                    }
                })
            })
            .catch(err => console.error(err));
        },
        select(track) {
            this.selectedTrack = track;
        },
        commit() {
            this.$store.commit('selectTrack', this.selectedTrack);
            this.$store.commit('postModalState', 'add');
        }
    }
}
</script>

<style scoped>
    .container {
        width: 1000px;
        margin: 30px auto;
    }
    .search-box {
        border: 1px solid #d34084; 
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 0 15px;
        height: 30px;
        margin: 10px 0;
    } 

   .search-btn {
       border: 1px solid #d34084; 
       border-top-right-radius: 20px;
       border-bottom-right-radius: 20px;
       background-color: #d34084; 
       color: #fff;
       height: 32px;
       padding: 0 12px;
       vertical-align: middle;
    }
    
    .results {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: 600px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .transition {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .results::-webkit-scrollbar {
        width: 10px;
    }

    .results::-webkit-scrollbar-track {
        background: #ddd;
    }

    .results::-webkit-scrollbar-thumb {
        background: #d34084;
    }

    .result {
        margin: 15px;
    }
    
    .select {
        padding: 8px 30px;
        border: 1px solid #d34084;
        border-radius: 25px;
        background-color: #d34084;
        color: #fff;
        float: right;
    }

    .continue {
        padding: 10px 30px;
        margin: 10px 0;
        border: 1px solid #d34084;
        border-radius: 25px;
        background-color: #fff;
        color: #d34084;
        float: right;
    }
</style>
