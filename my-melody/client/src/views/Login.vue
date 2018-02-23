<template>
<div id="full">
  <div class="login">
    <button class="login">Login with Facebook</button>
    <p> -------- OR ---------</p>
  </div>
  <div>
    <input type="text" v-model="message" placeholder="Enter email"/>
  </div>
  <div>
    <input type="password" v-model="password" placeholder="Password"/>
  </div>
  <div>
    <button v-on:click="login" class="login">Login</button>
  </div>
</div>
</template>

<script>
export default {
    name: 'login',
    components: {

    },
    methods: {
      login() {
        this.$router.push('home');
      }
    }
}
</script>

<style scoped>
  #full {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
