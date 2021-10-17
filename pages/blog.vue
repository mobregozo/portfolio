<template>
  <div class="dark:text-white">
    <h1 class="mb-5 text-6xl font-semibold text-gray-700 dark:text-gray-300">
      Blog
    </h1>
    <p class="text-gray-700 text-justify dark:text-gray-300">
      <strong
        class="font-bold text-gray-800 dark:text-white"
      >Opinions are my own!
      </strong>
      These are random thoughts that constantly come to my mind, and from time
      to time I translate them into articles.<br>
      I usually write about aspects of the software that are not
      technology-related but linked to the environment that surrounds us and
      things we can find there.
    </p>
    <p class="text-gray-700 text-justify mt-2 dark:text-white">
      Unfortunately I don't support comments, but in case you would like to
      comment feel free to do so on
      <a
        target="blank"
        class="font-semibold hover:underline text-primary-700 dark:text-primary-400"
        href="https://dev.to/manuelobre"
      >
        Dev.to</a>.
    </p>
    <h2
      class="text-primary-700 text-2xl md:text-4xl mt-8 mb-4 font-semibold dark:text-white tracking-tighter"
    >
      Articles
    </h2>
    <div
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="mt-8 p-0"
    >
      <blog-widget :post="post" />
    </div>
  </div>
</template>

<script>
import BlogWidget from '@/components/BlogWidget.vue'
export default {
  components: {
    BlogWidget
  },
  async asyncData ({ $prismic, error }) {
    try {
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )
      return {
        posts: blogPosts.results
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head: {
    title: 'Blog'
  }
}
</script>
