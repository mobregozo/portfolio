<template>
  <span v-if="false" />
</template>

<script>
import { global } from '@/config/global'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: global.postDescription
    },
    image: {
      type: String,
      default: global.webURL + global.mainImage
    }
  },

  head() {
    return {
      meta: [
        {
          name: 'author',
          content: global.fullName
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.title
        },
        {
          name: 'title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  }
}
</script>
