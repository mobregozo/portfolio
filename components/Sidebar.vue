<template>
  <nav
    class="fixed z-50 left-0 right-0 md:relative md:max-w-xs flex items-center justify-between md:flex-wrap md:flex-col md:align-center md:justify-center bg-primary-700 px-4 py-4 md:p-6"
  >
    <avatar class="mr-4 md:mr-0 md:mb-5 flex-shrink-0" />
    <div
      class="flex w-full md:block md:text-center text-md justify-end md:justify-center space-x-4 md:space-x-0"
    >
      <NuxtLink
        v-for="item in menuItems"
        v-bind:key="item.id"
        v-bind:to="item.link"
        v-bind:exact="item.exact"
        class="flex items-center font-bold justify-center opacity-75 md:mt-4 hover:opacity-100 transition-all uppercase text-white hover:scale-150 md:transform md:duration-300 overflow-hidden"
      >
        <img
          :src="'/' + item.icon"
          :alt="item.label"
          width="40"
          height="40"
          class="h-10 md:mr-2 block md:hidden"
        />
        <span class="hidden md:block">{{ item.label }}</span></NuxtLink
      >
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
      isActive: true,
      menuActive: 'about',
      menuItems: [
        { label: 'about', link: '/', icon: 'about.svg', exact: true },
        { label: 'experience', link: '/experience', icon: 'experience.svg' },
        { label: 'thoughts', link: '/thoughts', icon: 'thoughts.svg' },
        { label: 'interests', link: '/interests', icon: 'interests.svg' }
      ]
    }
  }
}
</script>
