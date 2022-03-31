<template>
  <div>
    <div
      class="border-b border-gray-200 dark:border-gray-800 pb-8 mt-12 mb-10 text-center"
    >
      <avatar class="mx-auto" />
      <div class="text-center mt-8">
        <h1 class="text-gray-700 text-xl dark:text-white mx-auto">
          Hola, my name is
          <div class="text-5xl font-bold tracking-tighter">
            <span class="text-secondary-700 dark:text-secondary-500">MANU</span>
            <span class="text-gray-700 dark:text-gray-300">OBREGOZO</span>
          </div>
        </h1>
        <p
          class="max-w-4xl md:text-xl font-bold mx-auto dark:text-gray-400 text-gray-600 text-center py-2"
        >
          Product Manager. Former Frontend Developer. Part time Blogger.
        </p>
      </div>
      <div>
        <div class="mt-10 flex items-center justify-center">
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="https://twitter.com/ManuelObre"
          ><span class="hidden">twitter</span>
            <img width="24" height="24" src="/logo-twitter.svg" alt="twitter">
          </a>
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="https://www.linkedin.com/in/manuelobregozo/?locale=en_US"
          >
            <span class="hidden">linkedin</span>
            <img
              width="24"
              height="24"
              src="/logo-linkedin.svg"
              alt="linkedin"
            >
          </a>
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="https://github.com/mobregozo"
          ><span class="hidden">github</span>
            <img width="24" height="24" src="/logo-github.svg" alt="github">
          </a>
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="https://dev.to/manuelobre"
          ><span class="hidden">dev.to profile</span>
            <img
              width="24"
              height="24"
              src="/logo-devto.svg"
              alt="stackoverflow"
            >
          </a>
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="https://stackoverflow.com/users/6098430/manuel-obregozo"
          ><span class="hidden">stackoverflow</span>
            <img
              width="24"
              height="24"
              src="/logo-stackoverflow.svg"
              alt="stackoverflow"
            >
          </a>
          <a
            target="blank"
            class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
            href="/feed.xml"
          ><span class="hidden">twitter</span>
            <img width="24" height="24" src="/logo-rss.svg" alt="rss">
          </a>
        </div>
      </div>
    </div>
    <div class="mb-8">
      <h2
        class="text-primary-700 text-2xl md:text-4xl mt-8 mb-4 font-semibold dark:text-white tracking-tighter"
      >
        Latest blog post
      </h2>
      <blog-widget :post="post" />
      <div class="text-sm dark:text-white">
        Find other articles in the
        <NuxtLink
          to="blog"
          class="font-semibold underline hover:underline text-primary-700 dark:text-white"
        >
          BLOG
        </NuxtLink>
        section
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar'
import BlogWidget from '@/components/BlogWidget.vue'

export default {
  components: {
    Avatar,
    BlogWidget
  },
  async asyncData ({ $prismic, error }) {
    try {
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )
      return {
        post: blogPosts.results[0]
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head: {
    title: 'Home'
  }
}
</script>
