<template lang="pug">
  div.rio.lineup__container.container.column.items-center.animate-fade
    lineup-festival-name(classes="rio__name")
    rio-silhouette(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).rio-silhouette-svg.absolute
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
        align="center"
      ).rio__artists--day.first
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
        align="center"
      ).rio__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
        align="center"
      ).rio__artists--day.last
    div(v-else).column
      lineup-artists-list(
        headliners-classes="rio__headliners"
        artists-classes="rio__artists"
        :dark="festivalDark"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupRio',
  components: {
    LineupFestivalName: () => import('../LineupFestivalName'),
    RioSilhouette: () => import('../../svgs/rio/RioSilhouette'),
    LineupDayArtistsList: () => import('../LineupDayArtistsList'),
    LineupArtistsList: () => import('../LineupArtistsList')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalArtistsNamesPerDay',
      'festivalLineupDays'
    ])
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalDark',
      'setFestivalLineupDays',
      'setFestivalNameColor'
    ])
  },
  mounted () {
    this.setFestivalDark(false)
    this.setFestivalLineupDays(false)
  }
}
</script>

<style lang="sass">
.rio
  &__name
    padding: 70px 48px 120px 48px

  &__headliners
    padding: 100px 25px 0 25px

  &__artists--day
    padding: 0 100px 40px 100px

    &.first
      padding-top: 110px

    &.last
      padding-bottom: 140px

  &__artists
    padding: 0 100px 140px 100px

.rio-silhouette-svg
  margin-top: 100px
</style>
