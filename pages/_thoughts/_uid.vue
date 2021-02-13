<template>
  <article>
    <div>
      <nuxt-link
        class="text-md font-bold tracking-wider text-gray-700 hover:underline hover:opacity-75 bg-none"
        to="../thoughts"
      >
        ← BACK TO THE LIST</nuxt-link
      >
      <h1
        class="font-bold text-secondary-700 text-4xl leading-none break-words mt-4 md:pt-0 break-word md:text-6xl"
      >
        {{ $prismic.asText(document.title) }}
      </h1>
      <span class="text-primary-700 uppercase font-bold tracking-wide">{{
        formattedDate
      }}</span>
    </div>

    <a
      :href="linkToshare"
      class="bg-twitter text-white mt-2 flex items-center w-fit px-2 font-bold py-1 rounded-md duration-200 transition-transform-opacity transform hover:-translate-y-1 ease-in-out hover:shadow-md hover:opacity-80"
      target="_blank"
    >
      <img
        width="24"
        height="24"
        src="/logo-twitter.svg"
        alt="twitter"
        class="mr-2"
      />
      Share on Twitter</a
    >
    <content>
      <prismic-rich-text :field="content" class="text-gray-700 text-justify" />
    </content>
  </article>
</template>

<script>
import { global } from '~/config/global'

export default {
  head() {
    return {
      title: this.$prismic.asText(this.document.title)
    }
  },
  data() {
    return {
      linkToshare: ''
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data
      // Returns data to be used in template
      return {
        uid: params.uid,
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
    this.linkToshare = `http://twitter.com/share/?text="${this.$prismic.asText(
      this.document.title
    )}" by ${global.author} - &url=${global.webURL}/${global.postsPath}/${
      this.uid
    }`
  }
}
</script>
