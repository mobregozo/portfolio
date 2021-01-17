<template>
  <div class="self-end my-auto max-w-screen-lg">
    <h1 class="mb-5 text-6xl font-bold">Thoughts</h1>
    <p class="text-gray-700 font-semibold text-justify">
      These posts are random thoughts that constantly come to my mind, on a
      daily basis.<br />
      <span class="font-bold text-gray-800">Opinions are my own, </span>these
      articles are purely personal, and since I am doing it for the purpose of
      learning, I may also change my mind in the future.
      <br />
      I usually write about aspects of the software that are not completely
      related to technology itself, but linked to the environment that surrounds
      us and things we can find there.
    </p>
    <p
      class="mt-4 text-gray-700 font-semibold text-sm bg-gray-100 rounded-md p-4 w-fit"
    >
      As you may have realised, I am not a native English speaker! <br />
      So in case you noticed something wrong or that could be improved, please
      contact me!
    </p>
    <div
      v-for="post in posts"
      :key="post.id"
      v-bind:post="post"
      class="md:mt-8 md:p-0"
    >
      <blog-widget :post="post"></blog-widget>
    </div>
  </div>
</template>

<script>
import BlogWidget from '~/components/BlogWidget.vue'
export default {
  components: {
    BlogWidget
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )
      // Returns data to be used in template
      return {
        posts: blogPosts.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
