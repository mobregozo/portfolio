<template>
  <div
    class="md:h-screen md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:flex"
  >
    <sidebar />
    <div class="scrollable flex-1 p-6 md:overflow-scroll">
      <resume />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Resume from '~/components/Resume.vue'

export default {
  components: {
    Sidebar,
    Resume
  }
}
</script>

<style>
.scrollable {
  scroll-behavior: smooth;
}
</style>
