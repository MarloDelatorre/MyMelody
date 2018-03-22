<template>
  <div class="container-fluid" style="margin-top: 10px">
  <div class="table-row header">

    <div class="wrapper attributes top">
      <div class="wrapper title-comment-module-reporter">
        <div class="wrapper title-comment">
          <div class="column title">TITLE</div>
          <div class="column comment">ARTIST</div>
        </div>
        <div class="wrapper module-reporter">
          <div class="column module">ALBUM</div>
          <div class="column reporter">USER</div>
        </div>
      </div>
    </div>
  </div>
  <div class="line">
  </div>

  <ul>
      <li v-for="track in this.user.savedSongs" class="list">
          <div class="table-row children">

            <div class="wrapper attributes">
              <div class="wrapper title-comment-module-reporter">
                <div class="wrapper title-comment">
                  <div class="column title">{{track.title}}</div>
                  <div class="column comment">{{track.artist}}</div>
                </div>
                <div class="wrapper module-reporter">
                  <div class="column module">
                      <img v-bind:src="track.albumArt"/>
                   </div>
                  <div class="column reporter">username?</div>
                </div>
              </div>
            </div>
          </div>
      </li>
  </ul>
</div>
</template>

<script>
import NavBarStandard from '../components/NavBarStandard.vue'
import Icon from 'vue-awesome/components/Icon'

    export default {
        name: 'SavedSongs',
        props: ['user'],
        components: {
            Icon,
            NavBarStandard,
        },
        data: function() {
            return {
                fullName: this.user.firstName + ' ' + this.user.lastName,
            }
        },
        methods: {
            console() {
                console.log(this.user);
            }
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
 .top {
     font-size: 18pt;
     font-weight: bolder;
 }
 .line {
     width: 95%;
     height: 2px;
     background-color: #0C1012;
     margin: 0 auto;
 }
.table-row {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  flex-wrap: no-wrap;
  -webkit-flex-wrap: no-wrap;
  padding: 10px 15px;
  margin: 0 auto;
}
.container-fluid {
    background-color: #1A2226;
    width: 90%;
    margin: 0 auto;
}
.children {
    text-align: left;
}
.wrapper {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  padding-left: 15px;
  -webkit-flex-direction: row;
}
.title-comment{
    width: 65%;
}
.module-reporter{
    width: 35%;
}
.column {
  flex-grow: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-flex-grow: 0;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  vertical-align: top;
  color: #fff;
}

.module {
  width: 60%;
  padding-right: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.module img {
    width: 80px;
    height: 80px;
}
.reporter {
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  font-weight: bold;
  color: #fff;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comment {
  width: 50%;
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
.module-reporter,
.title-comment-module-reporter,
.attributes {
  flex-grow: 1;
  -webkit-flex-grow: 1;
}

</style>
