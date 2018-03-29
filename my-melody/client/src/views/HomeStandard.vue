<template>
    <div class="home">
        <div class="nav">
            <NavBarStandard />
        </div>
        <div v-if="this.posts.length === 0">
            Loading...
        </div>
        <div v-else>
            <div v-if="this.posts.includes('nothing')">
                No posts were found
            </div>
            <div v-else>
                <ul>
                    <li v-for="post in this.posts" class="results">
                        <div class="card">
                            <div class="topInfo">
                                <div class="userInfo">
                                    {{post.username}}
                                </div>
                                <div class="saveIcon">
                                    <button class="saveButton" v-on:click="saveSong(post.track)">
                                        <icon class="plus" name="plus"></icon>
                                    </button>
                                </div>
                            </div>
                            <div class="image">
                                <img v-bind:src="post.track.albumArt">
                            </div>
                            <div class="bottomInfo">
                                <div class="songInfo">
                                    {{post.track.title}} - {{post.track.artist}}
                                </div>
                                <div class="songDesc">
                                    {{post.caption}}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="background">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBarStandard from '@/components/NavBarStandard.vue'
import Icon from 'vue-awesome/components/Icon'


export default {
    name: 'home',
    data: function () {
        return {
            posts: []
        }
    },
    computed: {

    },
    created: function() {
        this.$store.dispatch('getAllPosts')
        .then(res => {
            if (res.length === 0) {
                this.posts = ['nothing'];
            }
            else {
                var allFollowerPosts = [];
                console.log(res);

                res.filter(post => {
                    if (this.$store.getters.currentUser.following.includes(post.username) || post.username === this.$store.getters.currentUser.username) {
                        allFollowerPosts.push(post);
                    };
                });
                
                this.posts = allFollowerPosts; //filter by time here
                var n = this.posts.length;
                for (var i = 0; i < n; i++) {
                    for (var j = 0; j < (n-i-1); j++) {
                        if (this.posts[j].posted < this.posts[j+1].posted) {
                            var tmp = this.posts[j];
                            this.posts[j] = this.posts[j+1];
                            this.posts[j+1] = tmp;
                        }
                    }
                }
            }
        })
    },
    components: {
        NavBarStandard,
        Icon
    },
    methods: {
        saveSong(track) {
            this.$store.getters.currentUser.savedSongs.push(track);
            this.$store.dispatch('saveSong', this.$store.getters.currentUser);
            alert('Song Saved!');
        }
    }
}
</script>

<style scoped>
.nav {
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
}
.card {
    display: flex;
    flex-direction: column;
    width: 550px;
    height:700px;
    background-color: #1A2226;
    color: #fff;
    margin: 25px 0px;
}
.home {
    background: #0C1012;
    margin-top: 95px;
    height: 100%;
    display: flex;
    justify-content: center;
}
.topInfo {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
}
.bottomInfo {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.songInfo {
    font-size: 16pt;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 20px;
}
.songDesc {
    margin-bottom: 35px;
    margin-left: 20px;
}
.userInfo {
    margin-left: 20px;
    font-size: 13pt;
}
.saveButton {
    cursor: pointer;
}
.plus:hover {
    color: #D34084;
}
.saveIcon {
    margin-left: auto;
    padding-right: 20px;
    display: flex;
    align-items: center;
}
.saveIcon button {
    background: #1A2226;
    border: none;
}
.saveIcon svg {
    width: 20px;
    height: 20px;
    color: white;
}
.image img {
    width: 550px;
    height: 550px;
}
.background {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #0C1012;
}

</style>
