<template>
  <div class="container-fluid" style="margin-top: 10px">
  <div class="table-row header">

    <div class="wrapper attributes">
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

  <div class="table-row">

    <div class="wrapper attributes">
      <div class="wrapper title-comment-module-reporter">
        <div class="wrapper title-comment">
          <div class="column title">{{this.user.username}}</div>
          <div class="column comment">Zedd</div>
        </div>
        <div class="wrapper module-reporter">
          <div class="column module">True Colors </div>
          <div class="column reporter">Avempaty</div>
        </div>
      </div>
    </div>
  </div>

  <div class="table-row">
    <div class="wrapper attributes">
      <div class="wrapper title-comment-module-reporter">
        <div class="wrapper title-comment">
          <div class="column title">Everyday, Everyday (feat. Nevve)</div>
          <div class="column comment">Manilla Killa, Nevve</div>
        </div>
        <div class="wrapper module-reporter">
          <div class="column module">Everyday, Everyday (feat. Nevve) </div>
          <div class="column reporter">petertfarmer</div>
        </div>
      </div>
    </div>
  </div>

  <div class="table-row">
    <div class="wrapper attributes">
      <div class="wrapper title-comment-module-reporter">
        <div class="wrapper title-comment">
          <div class="column title">Getaway Car</div>
          <div class="column comment">Taylor Swift</div>
        </div>
        <div class="wrapper module-reporter">
          <div class="column module">Reputation</div>
          <div class="column reporter">MarloD</div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: 'SavedSongs',
        props: ['user'],
        components: {
            Icon,
            NavBarStandard,
            PostWall,
            Profile
        },
        data: function() {
            return {
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
