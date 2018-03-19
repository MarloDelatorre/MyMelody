<template>
    <div class="navBarStandardContainer">
        <header class="projectName">{{ homeMessage.projectName }}</header>

        <div class="searchBarContainer">
            <input v-model="searchText" v-on:keyup.enter="search" class="searchBar" type="text" placeholder="Search" />
        </div>
        <div v-if="toggleModal" @close="toggleModal = false" class="modal">
            <SearchResults @exit="toggleModal = false" v-bind:users="this.users"/>
        </div>
        <div class="iconMenuContainer">
            <router-link class="iconMenu" to="/home">
                <icon class="icons" name="home"></icon>
            </router-link>
            <router-link class="iconMenu" to="/profile">
                <icon class="icons" name="user"></icon>
            </router-link>
            <router-link class="iconMenu" to="/">
                <icon class="icons" name="clone"></icon>
            </router-link>
            <router-link class="iconMenu" to="/">
                <icon class="icons" name="sign-out"></icon>
            </router-link>
        </div>

        <div class="iconMenuMiniContainer">
            <icon class="icons" name="bars"></icon>
        </div>
    </div>
</template>

<script>
import homeMessages from '../messages/HomeMessages.json'
import SearchResults from  './SearchResults.vue'

import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'NavBarStandard',
    components: {
        Icon,
        SearchResults
    },
    data: function() {
        return {
            homeMessage: homeMessages,
            searchText: '',
            toggleModal: false,
            users: []
        }
    },
    methods: {
        search() {
            if (this.searchText.length > 0) {
                this.$store.dispatch('searchUsers', this.searchText)
                    .then(res => {
                        this.users = res;
                        this.toggleModal = true;
                    })
            }
        }
    }
}
</script>

<style scoped>
    .navBarStandardContainer {
        background: #1A2226;
        height: 80px;
        width: 100%;
        display: flex;
        line-height: 80px;
        justify-content: space-between;
        overflow-x: hidden;
    }

    .projectName {
        color: #D34084;
        font-size: 40px;
        font-weight: 600;
        align-content: center;
        /* flex-basis: 100px; */
        margin-left: 30px;
        flex-grow: 1;
    }

    .searchBarContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 8;
    }

    .searchBar {
        height: 40px;
        width: 350px;
        padding-left: 20px;
        background: #000000;
        color: #FFFFFF;
        border: 1px solid #D34084;
        border-radius: 10px;
        font-size: 15px;
    }

    .iconMenuContainer {
        display: flex;
        margin-right: 10px;
        flex-grow: 1;
        justify-content: flex-end;
    }

    .iconMenu {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .iconMenuMiniContainer {
        display: none;
        justify-content: center;
        align-items: center;
        padding-right: 10px;
    }

    .icons {
        width: 60px;
        height: 40px;
        color: #D34084;
    }

    @media (max-width:900px) {
        .iconMenuContainer {
            display: none;
        }

        .iconMenuMiniContainer {
            display: flex;
        }

    }
</style>
