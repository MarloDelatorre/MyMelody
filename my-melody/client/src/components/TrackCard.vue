<template>
    <div>
        <img :src="albumArt" :alt="title"/>
        <h1>{{ title }}</h1>
        <h2>{{ artist }}</h2>
    </div>
</template>

<script>
export default {
    name: 'track-card',
    props: {
        title: String,
        artist: String,
        albumArt: {
            default: require('../assets/blank-album-art.png'),
            type: String
        }
    }
}
</script>

<style scoped>
    div {
        width: 300px;
    }
    img {
        width: 100%;
        margin-bottom: 10px;
    }
    h1 {
        font-size: 1.2em;
        font-weight: bold;
    }
    h2 {
        margin-bottom: 10px;
    }
</style>
