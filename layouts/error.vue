<template>
  <div class="container font-medium">
    <div v-if="error.statusCode === 404">
      <h1
        class="font-bold text-secondary-700 text-3xl md:text-4xl mb-2 dark:text-secondary-500"
      >
        Error!
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-xl">
        The page you are trying to access does not exist, please check the URL
        and try again.
      </p>
    </div>
    <h1 v-else>
      An error occurred
    </h1>

    <div class="mt-6 dark:text-gray-400 ">
      Go back to the
      <NuxtLink
        to="/"
        class="text-primary-700 dark:text-primary-500 font-semibold hover:underline"
      >
        Home page
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
