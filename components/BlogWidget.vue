<template>
  <div
    class="my-4 p-4 shadow-md rounded-md hover:shadow-lg hover:scale-101 transform transition-all duration-200 hover:border-t-2 border-secondary-700 dark:border dark:border-gray-600"
  >
    <NuxtLink :to="link" class="">
      <h2
        class="text-secondary-700 font-medium text-xl md:text-2xl dark:text-secondary-500 tracking-tighter leading-tighter"
      >
        {{ $prismic.asText(post.data.title) }}
      </h2>
      <p class="mt-0">
        <span class="text-primary-700 uppercase font-bold dark:text-white">{{
          formattedDate
        }}</span>
      </p>
      <p class="text-gray-700 dark:text-gray-400">
        {{ getFirstParagraph(post) }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
import LinkResolver from '@/plugins/link-resolver.js'
import { getPrismicFirstParagraph } from '@/plugins/prismicApi'

export default {
  name: 'BlogWidget',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      link: '',
      formattedDate: ''
    }
  },
  created () {
    this.link = LinkResolver(this.post)
    this.formattedDate = Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }).format(new Date(this.post.data.date))
  },
  methods: {
    getFirstParagraph (post) {
      return getPrismicFirstParagraph(post.data.body_content)
    }
  }
}
</script>
