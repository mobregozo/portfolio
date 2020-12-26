<template>
  <div
    class="md:h-screen md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:flex"
  >
    <sidebar />
    <div
      class="scrollable overflow-x-hidden flex-1 min-h-screen px-4 md:px-10 flex pt-24 md:py-10 w-full"
    >
      <nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-display: swap;
}

body {
  font-family: 'Open Sans', serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif-serif;
}

.page-enter-active {
  transition: opacity 0.4s, transform 0.4s;
  transition-timing-function: ease-in;
}
.page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
  transition-timing-function: ease-in;
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateX(0);
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
</style>
