<template>
    <div class="register">   
        <div>
        <h1>This is register page</h1>
        </div>
        <h2>Register: </h2>
        <div>
        <input placeholder="First name"> </input>
        </div>
        <div>
        <input placeholder="Last name"> </input>
        </div>
        <div>
        <input placeholder="Email"> </input>
        </div>
        <div>
        <input placeholder="Password"></input>
        </div>
        <div>
        <input placeholder="Confirm password"></input>
        </div>
        <button v-on:click="register">Register</button>
    </div>
</template>

<script>
export default {
    name: 'register',
    components: {

    },
    methods: {
      register() {
        this.$router.push('home');
      }
    }
}
</script>
