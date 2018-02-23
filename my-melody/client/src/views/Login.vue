<template>
<div id="full">
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
    data: function () {
      return {
        message: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$router.push('home');
      },
      facebook() {
        console.log('this is username: ' + this.$data.message + ', this is password: ' + this.$data.password);
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
