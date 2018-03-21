<template>
  <div v-if="this.$store.getters.loggedIn" class="profileContainer">
    <div class="nav">
      <NavBarStandard />
    </div>
    <div class="personalInfo">
        <div class="profileFollowContainer">
            <icon class="profilePicture" name="user"></icon>
            <router-link :to="{ name: 'profile/editprofile', params: {user: this.$props.user } }" class="followRouterLink">Edit Profile</router-link>
        </div>
      <div class="personalInfoTextContainer">
          <header>{{ fullName }}</header>
          <h2 class="followerCount">{{this.user.followers.length}} followers | {{this.user.following.length}} following</h2>
          <h2 class="description">{{this.user.description}}</h2>
      </div>
    </div>
    <div class="tabs">
        <button class="button" v-on:click="openTab = 'posts'" autofocus>{{homeMessage.posts}}</button>
        <button class="button" v-on:click="openTab = 'savedSongs'">{{homeMessage.savedSongs}}</button>
    </div>
    <div v-if="openTab === 'posts'">
        <PostWall />
    </div>
    <div class="savedSongs" v-else-if="openTab === 'savedSongs'">
        <SavedSongs v-bind:user="this.user"/>
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
import NavBarStandard from '../components/NavBarStandard.vue'
import SavedSongs from '../components/SavedSongs.vue'

import homeMessages from '../messages/HomeMessages.json'
import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'profile',
    props: ['user'],
    components: {
        Icon,
        NavBarStandard,
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
  .savedSongs {
      margin: 0 auto;
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
    margin-top: 140px;
  }
  .profilePicture {
      width: 150px;
      height: 150px;
      border: 2px solid #D34084;
      border-radius: 200px;
      color: #D34084;
  }
  .profileFollowContainer {
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      height: 200px;
  }
  .personalInfoTextContainer {
      display: flex;
      flex-direction: column;
      color: #FFFFFF;
      height: 200px;
  }
  .description {
      font-size: 20px;
      margin-top: 30px;
  }
  .followerCount {
      font-size: 20px;
      margin-top: 30px;
  }
  .followRouterLink {
      margin-top: 16px;
      background-color: #D34084;
      border: 1px solid #D34084;
      border-radius: 5px;
      color: #FFFFFF;
      padding: 3px 0;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
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
  }

</style>
