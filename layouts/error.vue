<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <h1
        class="font-bold text-secondary-700 text-5xl md:text-8xl leading-none md:leading-none mb-2"
      >
        Error!
      </h1>
      <p class="mb-2 mt-8 text-gray-700 md:text-xl p-4 rounded bg-gray-200">
        The page you are trying to access does not exist, please check the URL
        and try again.
      </p>
    </div>
    <h1 v-else>An error occurred</h1>

    <div class="mt-6 md:text-xl">
      Go back to the
      <NuxtLink to="/" class="text-primary-700 font-semibold hover:underline"
        >Home page</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
  // layout: 'blog' // you can set a custom layout for the error page
}
</script>
