<template>
        <div class="container">
            <track-card :title="track.title" :artist="track.artist" :albumArt="track.albumArt"/>
            <div class="caption">
                <textarea v-model="caption" placeholder="Add a caption..."></textarea>
                <textarea v-model="tags" placeholder="Add tags separated by a space, ex. #edm #electronic etc..."></textarea>
                <div>
                    <button v-on:click="back">Back</button>
                    <button v-on:click="addPost">Add Post</button>
                </div>
            </div>
        </div>
</template>

<script>
import TrackCard from './TrackCard.vue';
import axios from 'axios';

export default {
    name: 'add-post-dialog',
    data: function() {
        return {
            caption: null,
            tags: null
        }
    },
    computed: {
        track() {
            return this.$store.getters.selectedTrack;
        }
    },
    methods: {
        addPost() {
            const encoded = encodeURIComponent(this.tags);
            var tagArray = encoded.split(" ");
            console.log(tagArray);
            console.log({track: this.$store.getters.selectedTrack, caption: this.caption})
            axios.post(`${this.$store.getters.baseApiUrl}/posts/`, {
                username: this.$store.getters.currentUser,
                caption: this.caption,
                track: this.track,
                tags: tagArray,
            }).then(res => {
                console.log(res);
                this.$store.dispatch('getPosts', this.$store.getters.currentUser);
                this.$store.commit('postModalState', null);
            }).catch(err => console.error(err));
        },
        back() {
            this.$store.commit('postModalState', 'search');
        },
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
        padding: 30px;
        max-width: 700px;
        margin: 0 auto;
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
        width: 150px;
        padding: 7px 0;
        border: 1px solid #d34084;
        border-radius: 25px;
        background-color: #d34084;
        color: #fff;
        margin: 5px 1px;
    }
</style>
