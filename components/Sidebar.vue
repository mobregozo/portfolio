<template>
  <nav class="px-4 py-4 w-full flex items-center justify-end bg-primary-700">
    <div class="container px-4 max-w-3xl flex text-lg mx-auto justify-between">
      <NuxtLink
        to="/"
        class="text-white tracking-tighter font-semibold hover:opacity-70"
      >
        MANU OBREGOZO
      </NuxtLink>
      <div id="nav-bar" class="flex items-center justify-end space-x-4">
        <NuxtLink
          v-for="item in menuItems"
          v-bind:key="item.id"
          v-bind:to="item.link"
          v-bind:exact="item.exact"
          class="flex items-center hover:-rotate-3 transform font-semibold text-sm justify-center transition-all uppercase text-white py-1 px-1 md:px-2 rounded-md hover:bg-primary-800"
        >
          <img
            :src="'/' + item.icon"
            :alt="item.label"
            width="40"
            height="40"
            class="h-6 w-6 max-w-none md:mr-2 block md:hidden"
          />
          <span class="hidden md:block">{{ item.label }}</span></NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
<style>
#nav-bar .nuxt-link-active {
  @apply p-1 rounded-full md:py-1 md:px-2 md:rounded-md bg-primary-800;
}
</style>
<script>
export default {
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
