<template>
  <div class="h-full flex-col flex w-full font-medium">
    <sidebar />
    <div
      id="main-view"
      class="flex-1 z-10 justify-between w-full mx-auto overflow-y-auto pt-8 dark:bg-gray-900"
    >
      <nuxt class="container max-w-3xl mx-auto px-4 pb-4" />
      <div
        class="text-white z-20 p-4 text-sm w-full bg-gray-800 font-semibold md:hidden dark:bg-primary-800"
      >
        <div class="container max-w-3xl px-4 mx-auto flex items-center">
          <img
            width="16"
            height="16"
            class="mr-2"
            src="/logo-github.svg"
            alt="github"
          >
          <span>Curious about the code of this website? it is available in
            <a
              class="text-primary-500 hover:underline"
              href="https://github.com/mobregozo/portfolio"
            >here.</a></span>
        </div>
      </div>
    </div>
    <div
      class="text-white z-20 p-4 text-sm w-full bg-gray-800 hidden md:block dark:bg-primary-900"
    >
      <div class="container max-w-3xl px-4 mx-auto flex items-center">
        <img
          width="16"
          height="16"
          class="mr-2"
          src="/logo-github.svg"
          alt="github"
        >
        <span>Curious about the code of this website? it is available in
          <a
            class="text-primary-300 hover:underline font-bold dark:text-white"
            href="https://github.com/mobregozo/portfolio"
          >here.</a></span>
      </div>
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
