<template>
    <div class="SearchResultContainer">
        <div v-if="userList.length === 1 && userList[0].username.includes('Results')">
            <div class="listContainer">
                    <div class="noResults" v-on:click="changeUser('THIS IS NOT A USER')">
                        No Search Results
                    </div>
            </div>
        </div>
        <div v-else>
            <ul class="listContainer">
                <li v-for="user in users">
                    <div v-if="user.username !== currentUser.username" v-on:click="changeUser(user.username)" class="listValues">
                        {{user.username}}
                    </div>
                </li>
            </ul>
        </div>
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
                })
                .catch(err => console.log(err));
                this.$emit('exit');
            }
        },
        data: function() {
            return {
                userList: [],
            }
        },
        watch: {
            'users': function(to, from) {
                console.log(to);
                if (to.length === 0) {
                    this.userList = [{username: 'No Results Found'}]
                }
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
    .noResults {
        background: #1A2226;
        color: #FFFFFF;
        /* border: 1px solid #D34084; */
        border-top: 0;
        width: 390px;
        margin: 0 auto;
    }

</style>
