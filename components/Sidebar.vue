<template>
  <nav
    class="sm:fixed md:relative md:max-w-xs flex items-center justify-between flex-wrap md:flex-col md:align-center md:justify-center bg-teal-500 p-6"
  >
    <avatar />
    <!-- <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Manuel Obregozo</span>
    </div> -->
    <div class="block md:hidden">
      <button
        v-on:click="isActive = !isActive"
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
      v-bind:class="{ hidden: isActive }"
      class="flex-initial w-full block md:block"
    >
      <div class="md:text-center text-md">
        <a
          v-on:click="isActive = !isActive"
          href="#about"
          class="block mt-4 text-teal-200 hover:text-white mr-4"
          >ABOUT</a
        >
        <a
          v-on:click="isActive = !isActive"
          href="#experience"
          class="block mt-4 text-teal-200 hover:text-white mr-4"
          >EXPERIENCE</a
        >
        <a
          v-on:click="isActive = !isActive"
          href="#skills"
          class="block mt-4 text-teal-200 hover:text-white mr-4"
          >SKILLS</a
        >
        <a
          v-on:click="isActive = !isActive"
          href="#interests"
          class="block mt-4 text-teal-200 hover:text-white mr-4"
          >INTERESTS</a
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
      isActive: 'false'
    }
  }
}
</script>
