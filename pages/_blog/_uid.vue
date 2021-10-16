<template>
  <article>
    <div>
      <social-head
        :title="$prismic.asText(document.title)"
        :description="getFirstParagraph(content)"
      />
      <nuxt-link
        class="text-md font-bold text-gray-700 dark:text-white hover:underline hover:opacity-75 bg-none"
        to="../blog"
      >
        ← BACK TO THE LIST
      </nuxt-link>
      <h1
        class="font-bold mb-2 text-secondary-700 dark:text-secondary-500 text-3xl break-words mt-4 md:pt-0 break-word md:text-5xl leading-8 tracking-tight"
      >
        {{ $prismic.asText(document.title) }}
      </h1>
      <span
        class="text-primary-700 uppercase font-bold dark:text-primary-500"
      >{{ formattedDate }}</span>
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
      >
      Share on Twitter</a>
    <content>
      <prismic-rich-text
        :field="content"
        class="text-gray-700 dark:text-gray-400"
      />
    </content>
  </article>
</template>

<script>
import { global } from '@/config/global'
import SocialHead from '@/components/SocialHead'
import { getPrismicFirstParagraph } from '@/plugins/prismicApi'

export default {
  components: {
    SocialHead
  },
  async asyncData ({ $prismic, params, error }) {
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
  data () {
    return {
      linkToshare: ''
    }
  },
  head () {
    return {
      title: this.$prismic.asText(this.document.title),
      description: getPrismicFirstParagraph(this.content)
    }
  },
  created () {
    this.linkToshare = `http://twitter.com/share/?text="${this.$prismic.asText(
      this.document.title
    )}" by ${global.author} - &url=${global.webURL}/${global.postsPath}/${
      this.uid
    }`
  },
  methods: {
    getFirstParagraph () {
      return getPrismicFirstParagraph(this.content)
    }
  }
}
</script>
