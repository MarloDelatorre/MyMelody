<template>
  <div class="container-fluid">
      <div>
          <input class="search-box" v-model="query" placeholder="Filter by artist, track, or tag"/><button class="search-btn" v-on:click="search"><icon class="searchIcon" name="search"></icon></button>
      </div>
      <div class="table-row">
            <div class="wrapper attributes">
              <div class="wrapper title-comment-module-reporter">
                <div class="wrapper title-comment">
                    <ul class="list">
                        <li v-for="post in this.postArray">
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
import Icon from 'vue-awesome/components/Icon';

    export default {
        name: 'PostWall',
        components: {
            Icon,
        },
        data: function() {
            return {
                query: null,
                postArray: this.$store.getters.posts,
            }
        },
        methods: {
            filterMethod(post) {
                if (this.query.startsWith("#")) {
                    var s = post.tags.includes(this.query);
                    if (s) {
                        return post;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    // console.log(post.track.title.toLowerCase().includes(this.query));
                    // console.log(post.track.artist.toLowerCase().includes(this.query));

                    var s = post.track.title.toLowerCase().includes(this.query) || post.track.artist.toLowerCase().includes(this.query);
                    if (s) {
                        return post;
                    }
                    else {
                        return null;
                    }
                }
            },
            search() {
                if(this.query !== null && this.query !== '') {
                    //var newList = this.user.savedSongs.filter(song => song.title.length > 7);

                    var newList = this.$store.getters.posts.filter(posts => this.filterMethod(posts));
                    this.postArray = newList;
                }
                else {
                    this.postArray = this.$store.getters.posts;
                }
            },
        },
        created: function() {
            this.$store.dispatch('getUserPosts', this.$store.getters.currentUser.username)
            .then(() => {
                //console.log(this.$store.getters.posts);
                var date_sort_desc = function (post1, post2) {
                  if (post1.posted > post2.posted) return -1;
                    if (post1.posted < post2.posted) return 1;
                    return 0;
                };
                this.$store.getters.posts.sort(date_sort_desc);
                this.postArray = this.$store.getters.posts;
            })
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
 .searchIcon svg {
     color: #fff;
 }
 .search-box {
     border: 2px solid #d34084;
     border-top-left-radius: 20px;
     border-bottom-left-radius: 20px;
     padding: 0 15px;
     height: 30px;
     width: 150px;
     margin: 10px 0;
     background-color: #0C1012;
     color: #FFFFFF;
 }
 .search-btn {
     border: 1px solid #d34084;
     border-top-right-radius: 20px;
     border-bottom-right-radius: 20px;
     background-color: #d34084;
     color: #fff;
     height: 34px;
     padding: 0 12px;
     margin-top: -2px;
     vertical-align: middle;
     cursor: pointer;
 }

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
