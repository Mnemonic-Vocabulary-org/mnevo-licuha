<template>
  <div v-if="match">
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
    },
    match (){
      return this.$route.path === this.path
    }
  }
}
</script>
