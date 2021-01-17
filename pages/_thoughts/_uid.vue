<template>
  <article class="flex-1 max-w-screen-lg">
    <div>
      <nuxt-link
        class="text-md font-bold tracking-wider text-gray-700 hover:underline hover:opacity-75"
        to="../thoughts"
      >
        ← BACK TO THE LIST</nuxt-link
      >

      <!-- Template for page title -->
      <h1
        class="font-bold text-secondary-700 text-4xl leading-none break-words mt-4 md:pt-0 break-word md:text-6xl"
      >
        {{ $prismic.asText(document.title) }}
      </h1>
      <!-- Template for published date -->
      <span class="text-primary-700 uppercase font-bold tracking-wide">{{
        formattedDate
      }}</span>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!-- Paragraph -->
    <content>
      <prismic-rich-text
        :field="content"
        class="text-gray-700 text-justify pb-8"
      />
    </content>
  </article>
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
  }
}
</script>
