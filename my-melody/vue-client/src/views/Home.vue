<template>
  <div class="home">
    <search-dialog></search-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchDialog from '@/components/SearchDialog.vue'

export default {
  name: 'home',
  components: {
    SearchDialog
  }
}
</script>