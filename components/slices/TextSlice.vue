<template>
  <div class="post-part single container">
    <prismic-rich-text :field="slice.text" class="textslice" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slices: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
/* .textslice
  a
    text-decoration: underline */
</style>
