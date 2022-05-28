<template>
  <div
    class="fixed w-full left-0"
    :style="{
      top: '52px'
    }"
  >
    <div
      class="bg-secondary-700 dark:bg-secondary-500 h-1"
      :style="{
        width: `${width}%`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      width: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, 15, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const p = document.getElementById('main-view')
      if (p) {
        this.width = (p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
      }
    }
  }
}
</script>
