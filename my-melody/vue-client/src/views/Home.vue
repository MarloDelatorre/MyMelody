<template>
  <div class="home">
    <search-dialog></search-dialog>
    <add-post-dialog></add-post-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchDialog from '@/components/SearchDialog.vue';
import AddPostDialog from '@/components/AddPostDialog.vue';

export default {
  name: 'home',
  components: {
    SearchDialog,
    AddPostDialog
  }
}
</script>