<template>
    <div class="navBarLoginContainer">
        <header class="projectLogo">{{ projectNameMessage }}</header>
    </div>
</template>

<script>
    export default {
        name: 'NavBarLogin',
        data: function() {
            return {
                projectNameMessage: 'Vibe'
            }
        }
    }
</script>

<style scoped>
    .navBarLoginContainer {
        width: 100%;
        color: #FFFFFF;
        height: 120px;
        text-align: center;
    }

    .projectLogo {
        font-size: 60px;
        vertical-align: middle;
        line-height: 120px;
        margin-left: 50px;
        font-weight: 600;
        color: #D34084;
    }
</style>
