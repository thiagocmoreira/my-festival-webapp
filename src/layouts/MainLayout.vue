<template lang="pug">
  q-layout(view="lHh Lpr lFf").main-layout
    q-page-container.flex
      div.container.flex-1
        router-view
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {}
  },
  meta () {
    let routeName = (this.$route || {}).name
    let title = routeName.length
      ? `My Festival - ${routeName}`
      : 'My Festival'
    return { title }
  }
}
</script>

<style lang="sass" scoped>
.main-layout
  background: $grey-1
  height: 100vh
  overflow: hidden
</style>
