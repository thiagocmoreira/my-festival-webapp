<template lang="pug">
  q-layout(view="hHh lpR fFf").lineup-layout
    change-configs
    q-page-container.flex
      div.container.flex-1
        router-view
</template>

<script>

export default {
  name: 'LineupLayout',
  components: {
    ChangeConfigs: () => import('../components/lineup/common/ChangeConfigs')
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
.lineup-layout
  background: $grey-1
  height: 100vh
  overflow: hidden
</style>
