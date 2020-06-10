<template lang="pug">
  div.balloon.lineup__container.column.animate-fade
    lineup-festival-name(
      :classes="['balloon__name']"
      title-position="left center"
      :colors="['#67b5eb']"
      :dark="!festivalDark"
    )
      cloud-full(color="#52a7e2" :dark="festivalDark")
    div.column
      lineup-artists-list(
        headliners-classes="balloon__headliners"
        artists-classes="balloon__artists"
        :dark="festivalDark"
      )
    div.balloon-svg
      balloon(:colors="festivalColorPalette")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupBalloon',
  components: {
    CloudFull: () => import('../svgs/balloon/CloudFull'),
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupArtistsList: () => import('../lineup/LineupArtistsList'),
    Balloon: () => import('../svgs/balloon/Balloon')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark'
    ])
  },
  methods: {
    ...mapActions('festivalConfigs', ['setFestivalDark'])
  },
  mounted () {
    this.setFestivalDark(false)
  }
}
</script>

<style lang="sass">
.balloon
  position: relative

  &__name
    padding-top: 70px

  &__headliners
    padding: 0 25px

  &__artists
    padding: 0 100px 100px 100px

.balloon-svg
  width: 165px
  position: absolute
  top: 0
  right: 0
  margin-top: 40px
  margin-right: 40px
</style>
