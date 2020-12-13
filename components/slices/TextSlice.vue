<template>
  <div class="post-part single container">
    <prismic-rich-text :field="slice.text" class="textslice" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: ['slice'],
  created() {
    console.log({ slice: this.slice })
  }
}
</script>

<style>
/* .textslice
  a
    text-decoration: underline */
</style>
