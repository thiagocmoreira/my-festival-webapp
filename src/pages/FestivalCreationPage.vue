<template lang="pug">
  q-page.festival-creation.column.flex-center.q-pa-lg
    creating-festival-animation
</template>

<script>
export default {
  name: 'FestivalCreationPage',
  components: {
    CreatingFestivalAnimation: () => import('../components/festival-creation/CreatingFestivalAnimation')
  }
}
</script>

<style lang="sass" scoped>
.festival-creation
  background: $blue-4
  position: relative

  &__container
    max-width: 1110px
</style>
