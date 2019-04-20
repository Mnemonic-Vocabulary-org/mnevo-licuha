<template>
  <div>
    <slot v-if="this.$route.path === this.path"></slot>
  </div>
</template>

<script>
export default {
  props: [
    'path'
  ]
}
</script>
