<template>
    <div class="container">
        <input class="search-box" v-model="query" placeholder="Search"/><button class="search-btn" v-on:click="search"><icon name="search"></icon></button>
        <div class="results">
            <div v-if="noResults" class="noresults">
                <p>No results found.</p>
                <button>Add manual post</button>
            </div>
            <div v-for="track in tracks" :key="track.id" class="result">
                <track-card :title="track.title" :artist="track.artist" :albumArt="track.albumArt"/>
                <button class="select" v-on:click="select(track)">Select</button>
            </div>
        </div>
        
        <button class="continue" v-if="selectedTrack">Continue</button>
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
            axios.get(`https://api.spotify.com/v1/search?q=${this.query}&type=track` , {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer BQDZkB9FaWJv1Bb9Rn-IC-y1K3LmxJN8j8M-6gOxpR2Q8L4uFftEaOZNJNz-0cNe9EopGB9lY86bJ3HiYd6GgKLiO2srGBc-mCkieWZkOgESmyiB7Fo99aHFaMNw562eMIfXGkV1iyl45mUl'
                }
            })
            .then(res => {
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
        }
    }
}
</script>

<style>
    .container {
        width: 1000px;
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
        height: 600px;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
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
        margin: 5px;
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
