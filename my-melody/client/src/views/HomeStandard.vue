<template>
    <div class="home">
        <div class="nav">
            <NavBarStandard />
        </div>
        <div class="card">
            <div class="topInfo">
                <div class="userInfo">
                    First Last
                </div>
                <div class="saveIcon">
                    <icon name="plus"></icon>
                </div>
            </div>
            <div class="image">
                <img src="../assets/albumart/Zedd.jpg">
            </div>
            <div class="bottomInfo">
                <div class="songInfo">
                    Daisy - Zedd
                </div>
                <div class="songDesc">
                    This is the song description.
                </div>
            </div>
        </div>
        <div class="background">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBarStandard from '@/components/NavBarStandard.vue'
import Icon from 'vue-awesome/components/Icon'


export default {
    name: 'home',
    data: function () {
        return {

        }
    },
    computed: {

    },
    created: function() {
        console.log(this.$store.getters.currentUser);
        this.$store.dispatch('getPosts', this.$store.getters);
    },
    components: {
        NavBarStandard,
        Icon
    },
    methods: {

    }
}
</script>

<style scoped>
.nav {
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
}
.card {
    display: flex;
    flex-direction: column;
    width: 550px;
    height:700px;
    background-color: #1A2226;
    color: #fff;
    margin: 25px 0px;
}
.home {
    background: #0C1012;
    margin-top: 95px;
    height: 100%;
    display: flex;
    justify-content: center;
}
.topInfo {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
}
.bottomInfo {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.songInfo {
    font-size: 16pt;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 20px;
}
.songDesc {
    margin-bottom: 35px;
    margin-left: 20px;
}
.userInfo {
    margin-left: 20px;
    font-size: 13pt;
}
.saveIcon {
    margin-left: auto;
    padding-right: 20px;
    display: flex;
    align-items: center;
}
.saveIcon svg {
    width: 20px;
    height: 20px;

}
.image img {
    width: 550px;
    height: 550px;
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

</style>
