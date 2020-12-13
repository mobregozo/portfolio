<template>
  <div>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="../thoughts">back to list</nuxt-link>
      </div>

      <!-- Template for page title -->
      <h1 class="font-bold text-secondary-500 text-6xl">
        {{ $prismic.asText(document.title) }}
      </h1>
      <!-- Template for published date -->
      <span class="text-primary-500 uppercase font-bold tracking-wide">{{
        formattedDate
      }}</span>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!-- Paragraph -->
    <div class="text-gray-700 text-justify">
      <prismic-rich-text :field="content" />
    </div>
  </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  head() {
    return {
      title: this.$prismic.asText(this.document.title)
    }
  },
  components: {
    SlicesBlock
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data
      // Returns data to be used in template
      return {
        document: post,
        content: post.body_content,
        slices: post.slices,
        formattedDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        }).format(new Date(post.date))
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  created() {
    console.log({ blog: this.blog })
  }
}
</script>
