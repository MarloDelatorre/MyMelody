<template>
  <div v-if="this.$store.getters.loggedIn" class="profileContainer">
    <div class="nav">
      <NavBarHome/>
    </div>
    <div class="personalInfo">
      <img src="https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/20258149_1762883797059979_2271180749826725740_n.jpg?oh=862e49b11d09b483ee51d9ea6fb21226&oe=5B0CDCE7"/>
      <header>{{fullName}}</header>
    </div>
    <div class="tabs">
        <button class="button" v-on:click="openTab = 'posts'" autofocus>{{homeMessage.posts}}</button>
        <button class="button" v-on:click="openTab = 'savedSongs'">{{homeMessage.savedSongs}}</button>
    </div>
    <div v-if="openTab === 'posts'">
        <PostWall />
    </div>
    <div v-else-if="openTab === 'savedSongs'">
        <SavedSongs />
    </div>
    <div class="background">
    </div>
  </div>
  <div v-else>
    Please log in to view this page
  </div>
</template>

<script>
import PostWall from '../components/PostWall.vue'
import NavBarHome from '../components/NavBarHome.vue'
import SavedSongs from '../components/SavedSongs.vue'

import homeMessages from '../messages/HomeMessages.json'

export default {
    name: 'profile',
    props: ['user'],
    components: {
      NavBarHome,
      PostWall,
      SavedSongs
    },
    data: function() {
      return {
          openTab: 'posts',
          homeMessage: homeMessages,
          fullName: this.user.firstName + ' ' + this.user.lastName,
      }
    }
}
</script>

<style scoped>
  #startActive {

  }
  .profileContainer {
      background: #0C1012;
      margin-top: 95px;
  }
  .nav {
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
  }
  .personalInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    padding-bottom: 15px;
    margin-top: 15px;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
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
  .button {
    background-color: #0C1012;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-bottom: 2px solid black;
  }
  .button:hover {
    background-color: #D34084;
    color: white;
    outline: none;
  }
  .button:focus {
    background-color: #D34084;
    outline: none;
    color: white;
  }
  img {
    width: 250px;
    height: 250px;
    padding-right: 40px;
  }
  header {
    font-size: 32pt;
    font-weight: bold;
    color: #D34084;
    margin-top: 10px;
  }

</style>
