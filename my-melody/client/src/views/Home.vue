<template>
  <div class="home">
    <button v-on:click="toggleModal">Add Post</button>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus quam. In quis hendrerit sapien, sit amet consectetur nulla. Donec sed purus id mauris lacinia tincidunt in volutpat tortor. Sed vitae nulla ex. Vestibulum faucibus justo at posuere laoreet. Sed quis pulvinar dolor. Curabitur tristique scelerisque mauris, ut hendrerit leo ultricies a. Ut gravida interdum elit. Nullam quis leo condimentum, cursus libero non, tincidunt nibh. Sed at massa purus. Etiam risus elit, condimentum eget risus tincidunt, finibus cursus odio. Morbi sem odio, malesuada quis lacinia at, congue eu risus.

Maecenas ut metus at felis accumsan elementum. Donec ac rhoncus eros. Nullam et luctus ipsum. Praesent eros purus, auctor euismod leo eget, accumsan varius nibh. Etiam mollis diam maximus eros gravida vestibulum. Vestibulum ut facilisis enim, vitae bibendum justo. Morbi ac eros mauris. Cras nec molestie nibh, vitae commodo dolor.

Suspendisse ut aliquet sapien, at hendrerit lorem. Donec lobortis mattis erat, quis accumsan nulla aliquet sed. Nunc elementum dolor eget imperdiet tempor. Phasellus ornare neque justo, ac tempor velit cursus id. Maecenas rutrum est nisl, eu commodo eros interdum in. Duis vel lobortis enim. Vivamus dolor velit, mattis vel nulla non, dignissim bibendum libero. Etiam vestibulum viverra turpis, id congue mi congue nec. Suspendisse vitae aliquam risus. Cras ut est ut eros auctor sagittis. Integer gravida nunc risus, eget eleifend mi auctor eu.

Sed volutpat faucibus porta. Phasellus pretium sapien tellus, ac tristique eros varius sit amet. Aenean a tellus convallis, porta nisi id, venenatis arcu. Suspendisse faucibus molestie nibh, non eleifend massa cursus bibendum. Phasellus feugiat semper tortor, sit amet feugiat lacus laoreet sed. Nulla scelerisque dui quis consectetur hendrerit. Praesent facilisis, odio ut tempus condimentum, quam nisi efficitur leo, in ultricies eros turpis vitae est. Duis scelerisque dignissim tempus. Vestibulum scelerisque ante ut arcu mattis vehicula.

Vestibulum odio mauris, rutrum eu dapibus non, consectetur consequat dui. Donec lobortis ligula et tellus accumsan convallis et sed dolor. Nam sapien est, feugiat sed ex sit amet, tristique bibendum massa. Nam sed augue mollis sem lobortis tincidunt vel at nisi. Maecenas ac ante id odio accumsan semper eget ut tellus. Aliquam gravida tempus diam, eu vehicula tortor rutrum vitae. Praesent faucibus non libero vitae rhoncus. Proin laoreet neque ut faucibus molestie. Quisque vitae diam odio. Aenean semper orci id tellus convallis, nec rutrum lectus molestie. Maecenas magna nisl, congue vitae congue sed, molestie ut lectus. Vestibulum in cursus diam. Pellentesque rutrum nibh sem, ac fringilla augue molestie at.</p>
    <transition name="fade">
      <div v-if="dialogState" class="modal">
        <button class="close" v-on:click="toggleModal">&times;</button>
        <transition name="fade" mode="out-in">
          <search-dialog v-if="dialogState === 'search'"></search-dialog>
          <add-post-dialog v-if="dialogState === 'add'"></add-post-dialog>
        </transition>
      </div>
    </transition>
 </div>
</template>

<script>
// @ is an alias to /src
import SearchDialog from '@/components/SearchDialog.vue';
import AddPostDialog from '@/components/AddPostDialog.vue';

export default {
  name: 'home',
  data: function () {
    return {}
  },
  computed: {
    dialogState() {
      return this.$store.getters.postModalState;
    }
  },
  components: {
    SearchDialog,
    AddPostDialog
  },
  methods: {
    toggleModal() {
      var state = null;
      if (!this.dialogState) {
        state = 'search';
      }
      this.$store.commit('postModalState', state);
    },
  }
}
</script>

<style scoped>
  .home {
    position: relative;
  }
  .modal {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1200px;
    border: 1px solid #d34084;
    background-color: #fff;
    top: -25%;
  }
  .close {
    margin: 20px 20px 0 0;
    float: right;
    background: none;
    color: #d34084;
    font-size: 1.5em;
    border: none;
  }

</style>
