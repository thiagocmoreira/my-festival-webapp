<template lang="pug">
  div.mountain.lineup__container.container.column.items-center.animate-fade
    lineup-festival-name(classes="mountain__name")
      three-mountains(:colors="festivalColorPalette")
    div.column
      lineup-artists-list(
        headliners-classes="mountain__headliners"
        artists-classes="mountain__artists"
      )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineupMontain',
  components: {
    ThreeMountains: () => import('../svgs/mountains/ThreeMountains'),
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupArtistsList: () => import('../lineup/LineupArtistsList')
  },
  computed: {
    ...mapGetters('festivalConfigs', ['festivalColorPalette'])
  }
}
</script>

<style lang="sass">
.mountain
  &__name
    padding: 70px 48px 20px 48px

  &__headliners
    padding: 0 25px

  &__artists
    padding: 0 100px 70px 100px
</style>
