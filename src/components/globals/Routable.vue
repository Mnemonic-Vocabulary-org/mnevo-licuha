<template>
  <div :style="[transition]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'path'
  ],
  computed: {
    transition () {
      let display = this.$route.path === this.path ? 'block' : 'none'
      return {
        display,
        '-webkit-transition': 'opacity 600ms, display 600ms',
        transition: 'opacity 600ms, display 600ms'
      }
    }
  }
}
</script>
