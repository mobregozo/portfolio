<template>
  <nav class="px-4 py-3 w-full flex items-center justify-end bg-primary-700">
    <div
      class="container px-4 max-w-3xl text-lg mx-auto justify-between hidden md:flex"
    >
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
          class="flex items-center hover:-rotate-3 transform font-semibold text-sm justify-center transition-all uppercase text-white py-1 px-2 rounded-md hover:bg-primary-800"
        >
          {{ item.label }}</NuxtLink
        >
      </div>
    </div>
    <div
      class="container md:px-4 max-w-3xl text-lg mx-auto justify-between flex md:hidden"
    >
      <div class="flex items-center justify-between w-full">
        <NuxtLink
          to="/"
          class="text-white tracking-tighter font-semibold hover:opacity-70"
        >
          MANU OBREGOZO
        </NuxtLink>
        <button
          v-on:click="isOpen = !isOpen"
          class="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 rounded"
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
        id="nav-bar"
        v-if="isOpen"
        class="absolute flex flex-col inset-0 top-14 w-screen bg-primary-700 z-30 border-t border-white border-opacity-40"
      >
        <NuxtLink
          v-for="item in menuItems"
          v-bind:key="item.id"
          v-bind:to="item.link"
          v-bind:exact="item.exact"
          v-on:click.native="isOpen = false"
          class="font-semibold py-4 text-center text-3xl uppercase text-white px-1 hover:underline"
        >
          {{ item.label }}</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
<style>
#nav-bar .nuxt-link-active {
  @apply md:py-1 md:px-2 md:rounded-md bg-primary-800;
}
</style>
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
  }
}
</script>
