<template>
  <div class="container-fluid">
<div class="table-row">

    <div class="wrapper attributes">
      <div class="wrapper title-comment-module-reporter">
        <div class="wrapper title-comment">
            <ul class="list">
                <li v-for="post in this.$store.getters.posts">
                  <div class="card">
                    <img v-bind:src="post.track.albumArt">
                    <p>{{post.track.title}} - {{post.track.artist}}</p>
                  </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'PostWall',
        data: function() {
            return {

            }
        },
        created: function() {
            this.$store.dispatch('getUserPosts', this.$store.getters.currentUser.username)
        }
    }
</script>

<style scoped>
    /*
 * Define the widths: play around with these
 * to get a best fit.
 */
/*
 * Basic styles, good for a large display. Everything fits in
 * one row, no wrapping. All text based cells grow equally.
 */
.card {
  width: 300px;
  height: 350px;
  background-color: #1A2226;
  text-align: center;
}
.card img {
  width: 300px;
  height: 300px;

}
.list {
    display: flex;
    flex-direction: row;
}
.card {
}
.card p {
  color: white;
  margin-top: 14px;
    font-size: 18px;
  font-weight: bold;
}
.container-fluid {
    margin: 0 auto;
    width: 930px;
}
.table-row {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  flex-wrap: no-wrap;
  -webkit-flex-wrap: no-wrap;
  width: 800px;
  padding-left: 15px;
  padding-right: 15px;
}
.wrapper {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
}
.column {
  flex-grow: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-flex-grow: 0;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  vertical-align: top;
}

.module {
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.reporter {
  width: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  font-weight: bold;
  color: #337ab5;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comment {
  width: 120px;
}
.title,
.comment {
  flex-grow: 1;
  -webkit-flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 4px;
}
/* growable wrappers */
.title-comment,
.title-comment-module-reporter,
.attributes {
  flex-grow: 1;
  -webkit-flex-grow: 1;
}

</style>
