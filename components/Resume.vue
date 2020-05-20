<template>
  <section id="wrapper" class="flex flex-col items-center">
    <div class="container">
      <section
        id="about"
        class="min-h-screen animated-section w-full md:px-10 flex pt-24 md:py-10 overflow-x-hidden"
      >
        <about />
      </section>
      <section
        id="experience"
        class="min-h-screen animated-section md:px-10 flex pt-24 md:py-10 w-full"
      >
        <experience />
      </section>
      <section
        id="interests"
        class="min-h-screen animated-section w-sceen md:px-10 flex pt-24 md:py-10 w-full"
      >
        <interests />
      </section>
    </div>
  </section>
</template>
<style>
.animated-section {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
  transition-property: transform opacity;
  transition-duration: 1s;
}

.animated-section.animation {
  opacity: 1;
  transform: translateZ(0);
}
</style>
<script>
import About from './About.vue'
import Interests from './Interests.vue'
import Experience from './Experience.vue'

export default {
  components: {
    About,
    Interests,
    Experience
  },
  data: () => {
    return {
      isActive: false,
      menuActive: 'ABOUT'
    }
  }
}
</script>
