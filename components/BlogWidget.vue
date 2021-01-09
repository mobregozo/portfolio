<template>
  <div
    class="md:w-1/2 my-4 bg-white p-4 shadow-md rounded-md hover:shadow-lg hover:scale-105 transform transition-all duration-200 hover:border-t-2 border-secondary-700"
  >
    <NuxtLink :to="link" class="">
      <h2 class="font-bold text-secondary-700 text-3xl leading-7">
        {{ $prismic.asText(post.data.title) }}
      </h2>
      <p class="mt-0">
        <span class="text-primary-700 uppercase font-bold tracking-wide">{{
          formattedDate
        }}</span>
      </p>
      <p class="text-gray-700">{{ getFirstParagraph(post) }}</p>
    </NuxtLink>
  </div>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  name: 'BlogWidget',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      link: '',
      formattedDate: ''
    }
  },
  created() {
    this.link = LinkResolver(this.post)
    this.formattedDate = Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }).format(new Date(this.post.data.date))
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300
      const slices = post.data.body_content
      let firstParagraph = ''
      let haveFirstParagraph = false
      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.type === 'paragraph') {
          firstParagraph += slice.text
          haveFirstParagraph = true
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    }
  }
}
</script>
