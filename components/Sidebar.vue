<template>
  <nav
    class="fixed z-50 left-0 right-0 md:relative md:max-w-xs flex items-center justify-between flex-wrap md:flex-col md:align-center md:justify-center bg-primary-500 p-6"
  >
    <avatar class="float-right md:mb-5" />
    <div class="block md:hidden ">
      <button
        v-on:click="isActive = !isActive"
        class="flex items-center px-3 py-2 border rounded text-primary-200 border-primary-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      v-bind:class="{ hidden: !isActive }"
      class="flex-initial w-full block md:block"
    >
      <div class="md:text-center text-md">
        <a
          v-for="item in menuItems"
          v-bind:key="item.id"
          v-on:click="activeMenu(item.label)"
          v-bind:class="[
            item.label === menuActive ? 'font-bold' : 'font-semibold'
          ]"
          v-bind:href="'#' + item.label.toLowerCase()"
          class="block mt-4 hover:font-bold text-white mr-4 hover:scale-150 transform duration-300"
          >{{ item.label }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from './Avatar.vue'

export default {
  components: {
    Avatar
  },
  data: () => {
    return {
      isActive: false,
      menuActive: 'ABOUT',
      menuItems: [
        { label: 'ABOUT' },
        { label: 'EXPERIENCE' },
        { label: 'INTERESTS' }
      ]
    }
  },
  mounted() {
    const animationClass = 'animation'
    const animate = (element) => element.classList.add(animationClass)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.menuActive = entry.target.id.toUpperCase()
          animate(entry.target)
        }
      })
    })

    const about = document.getElementById('about')
    const experience = document.getElementById('experience')
    const interests = document.getElementById('interests')
    observer.observe(about)
    observer.observe(experience)
    observer.observe(interests)
  },
  methods: {
    activeMenu(label) {
      this.menuActive = label
      this.isActive = !this.isActive
    }
  }
}
</script>
