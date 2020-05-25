<template lang="pug">
  q-layout(view="lHh Lpr lFf").main-layout
    q-page-container.flex
      div.container.flex-1
        router-view
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
    VerticalMenu: () => import('../components/layout/VerticalMenu')
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.main-layout
  background: $grey-1
  height: 100vh
  overflow: hidden
</style>
