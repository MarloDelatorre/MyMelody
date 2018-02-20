<template>
  <div class="home">
    <LandingCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingCard from '@/components/LandingCard.vue'
export default {
  name: 'home',
  components: {
    LandingCard
  }
}
</script>