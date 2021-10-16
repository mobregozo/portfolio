<template>
  <nav class="px-4 py-3 w-full flex items-center justify-end bg-primary-700 dark:bg-primary-900">
    <div class="container px-4 max-w-3xl text-lg mx-auto justify-between hidden md:flex">
      <NuxtLink to="/" class="text-white font-semibold hover:opacity-70">
        Manu Obregozo
      </NuxtLink>
      <div class="flex items-center">
        <div id="nav-bar" class="flex items-center justify-end space-x-2 mr-2">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.id"
            :to="item.link"
            :exact="item.exact"
            class="flex items-center font-semibold text-sm justify-center uppercase text-white py-1 px-2 rounded-md hover:bg-primary-800"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        <button class="ml-1 hover:opacity-60" @click="changeColor('light')">
          <svg class="h-6 w-6" :class="[$colorMode.preference === 'light' ? 'text-white' : 'text-gray-500' ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <button class="ml-1 hover:opacity-60" @click="changeColor('dark')">
          <svg class="h-6 w-6" :class="[$colorMode.preference === 'dark' ? 'text-white' : 'text-gray-500' ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="container md:px-4 max-w-3xl text-lg mx-auto justify-between flex md:hidden"
    >
      <div class="flex items-center justify-between w-full">
        <NuxtLink to="/" class="text-white font-semibold hover:opacity-70">
          MANU OBREGOZO
        </NuxtLink>
        <button
          class="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 rounded"
          @click="isOpen = !isOpen"
        >
          <svg
            v-if="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 text-white"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 text-white"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="48"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>
      </div>

      <div
        v-if="isOpen"
        id="nav-bar"
        class="absolute flex flex-col inset-0 top-14 w-screen bg-primary-700 dark:bg-primary-900 z-30 border-t border-white border-opacity-40"
      >
        <div class="flex flex-col flex-grow">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.id"
            :to="item.link"
            :exact="item.exact"
            class="font-semibold py-4 text-center text-3xl uppercase text-white px-1 hover:underline"
            @click.native="isOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        <div class="flex items-center mx-auto mb-8 space-x-4">
          <button class="hover:opacity-60" @click="changeColor('light')">
            <svg class="h-10 w-10" :class="[$colorMode.preference === 'light' ? 'text-white' : 'text-gray-500' ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <button class="hover:opacity-60" @click="changeColor('dark')">
            <svg class="h-10 w-10" :class="[$colorMode.preference === 'dark' ? 'text-white' : 'text-gray-500' ]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => {
    return {
      isActive: true,
      menuActive: 'home',
      isOpen: false,
      menuItems: [
        { label: 'home', link: '/', icon: 'about.svg', exact: true },
        { label: 'blog', link: '/blog', icon: 'thoughts.svg' },
        { label: 'experience', link: '/experience', icon: 'experience.svg' },
        { label: 'bio', link: '/bio', icon: 'interests.svg' }
      ]
    }
  },
  methods: {
    changeColor (color) {
      this.$colorMode.preference = color
    }
  }
}
</script>
<style>
#nav-bar .nuxt-link-active {
  @apply md:py-1 md:px-2 md:rounded-md bg-primary-800;
}
</style>
