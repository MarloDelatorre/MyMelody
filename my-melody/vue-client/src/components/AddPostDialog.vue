<template>
        <div class="container">
            <track-card :title="track.title" :artist="track.artist" :albumArt="track.albumArt"/>
            <div class="caption" >
                <textarea placeholder="Add a caption..."></textarea>
                <button>Add Post</button>
            </div>
        </div>
</template>

<script>
import TrackCard from './TrackCard.vue';

export default {
    name: 'add-post-dialog',
    data: function() {
        return {
            track: {
                title: 'selectedTrack',
                artist: 'selectedTrackArtist'
            }
        }
    },
    components: {
        TrackCard
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
    }

    .caption {
        margin-left: 15px; 
    }

    .caption textarea {
        width: 300px;
        height: 150px;
        resize: none;
    }

    .caption button {
        box-sizing: border-box;
        display: block;
        width: 305px;
        padding: 7px 0; 
        border: 1px solid #d34084;
        border-radius: 25px;
        background-color: #d34084;
        color: #fff;
        margin: 5px 0;
    }
</style>
