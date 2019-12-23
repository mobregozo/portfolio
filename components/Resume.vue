<template>
  <section id="wrapper" class="flex flex-col items-center">
    <div class="container">
      <section id="about" class="min-h-screen md:px-10 flex pt-24 md:py-10">
        <about />
      </section>
      <section
        id="experience"
        class="min-h-screen md:px-10 flex pt-24 md:py-10"
      >
        <experience />
      </section>
      <section
        id="interests"
        class="min-h-screen w-sceen md:px-10 flex pt-24 md:py-10"
      >
        <interests />
      </section>
    </div>
  </section>
</template>
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
