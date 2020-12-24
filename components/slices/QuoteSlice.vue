<template>
  <div class="post-part single container">
    <blockquote class="block-quotation">
      {{ $prismic.asText(slice.text) }}
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'QuoteSlice',
  props: {
    slices: {
      type: Array,
      default: null
    }
  }
}
</script>
