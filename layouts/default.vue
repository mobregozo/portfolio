<template>
  <div class="h-full flex-col flex w-full">
    <sidebar />
    <div
      id="main-view"
      class="flex-1 z-10 justify-between w-full mx-auto overflow-y-auto pb-4 pt-8"
    >
      <nuxt class="container max-w-3xl mx-auto px-4" />
    </div>
    <div class="text-white z-20 p-4 text-sm w-full bg-gray-800 font-semibold">
      <div class="container max-w-3xl px-4 mx-auto flex items-center">
        <img
          width="16"
          height="16"
          class="mr-2"
          src="/logo-github.svg"
          alt="github"
        />
        <span
          >Curious about the code of this website? it is available in&nbsp;
          <a
            class="text-primary-500 hover:underline"
            href="https://github.com/mobregozo/portfolio"
          >
            here.</a
          ></span
        >
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
