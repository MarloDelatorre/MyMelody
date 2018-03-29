<template>
    <div class="SearchResultContainer">
        <div class=""
        <ul class="listContainer">
            <li v-for="user in users">
                <div v-if="user.username !== currentUser.username" v-on:click="changeUser(user.username)" class="listValues">
                    {{user.username}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SearchResultProfile',
        props: ['users'],
        methods: {
            changeUser(username) {
                this.$store.dispatch('getUser', username)
                .then(res => {
                    this.$router.push({
                        name: `otherprofile`,
                        params: {
                            username: res.username,
                            user: res
                        }
                    });
                    this.$emit('exit');
                })
                .catch(err => console.log(err));
            }
        },
        data: function() {
            return {

            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        }
    }
</script>

<style scoped>
    .listContainer {
        margin: 0 auto;
        margin-top: -28px;
        width: 392px;
        /* border-top: 1px solid #D34084; */
    }
    .listValues {
        background: #1A2226;
        color: #FFFFFF;
        /* border: 1px solid #D34084; */
        border-top: 0;
        width: 390px;
        margin: 0 auto;
        cursor: pointer;
    }

</style>
