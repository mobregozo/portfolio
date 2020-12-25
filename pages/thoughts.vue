<template>
  <div class="self-end my-auto">
    <h1 class="mb-5 text-6xl font-bold">Thoughts</h1>
    <p class="text-gray-700 font-semibold text-justify">
      These are random thoughts that constantly come to my mind, on a daily
      basis, not always related to technology. <br />
      They are purely personal, and since I am doing this with learning
      purposes, It can also be that I change my mind in the future. <br />
    </p>
    <p
      class="mt-4 text-gray-700 font-semibold text-sm bg-gray-100 rounded-md p-3"
    >
      > As you might realised, I am not a native English speaker, so in case you
      noticed something wrong or that can be improved please do reach me out!.
    </p>
    <div v-for="post in posts" :key="post.id" v-bind:post="post" class="mt-8">
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
      // Query to get blog home content
      // const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post')
      )
      // Returns data to be used in template
      return {
        // homepageContent,
        posts: blogPosts.results
        // image: homepageContent.image.url
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
