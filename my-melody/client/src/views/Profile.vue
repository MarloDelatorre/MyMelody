<template>
  <div class="background">
    <div class="nav">
      <NavBarHome/>
    </div>
    <div class="personalInfo">
      <img src="https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/20258149_1762883797059979_2271180749826725740_n.jpg?oh=862e49b11d09b483ee51d9ea6fb21226&oe=5B0CDCE7"/>
      <header>Aneesh Vempaty</header>
    </div>
    <div class="tabs">
      <button class="button">{{homeMessage.savedSongs}}</button>
      <button class="button">{{homeMessage.posts}}</button>
      <button class="button">{{homeMessage.profile}}</button>
    </div>
    <div class="under">
    </div>
  </div>
</template>

<script>

import NavBarHome from '../components/NavBarHome.vue'
import homeMessages from '../messages/HomeMessages.json'

export default {
    name: 'profile',
    components: {
      NavBarHome
    },
    data: function() {
      return {
        homeMessage: homeMessages
      }
    }
}
</script>

<style scoped>
  .background {
    background-color: #0C1012;
  }
  .nav {
    height: 80px;
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
