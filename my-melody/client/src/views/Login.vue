<template>
    <div>
        <!-- <navBarLogin/> -->
        <div id="full">
            <div class="projectNameContainer">
                <header class="projectName">{{ loginMessage.projectName }}</header>
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
        <div class="background">
        </div>
    </div>
</template>

<script>
import navBarLogin from '../components/NavBarLogin.vue';
import loginMessage from '../messages/LoginMessages.json';

export default {
    name: 'login',
    components: {
        navBarLogin
    },
    data: function () {
      return {
        message: '',
        password: '',
        loginMessage: loginMessage
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
    .background {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #0C1012;
    }

    #full {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
