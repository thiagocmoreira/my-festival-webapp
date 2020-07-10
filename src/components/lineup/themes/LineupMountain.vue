<template lang="pug">
  div.mountain.lineup__container.container.column.items-center.animate-fade
    lineup-festival-name(classes="mountain__name")
      three-mountains(
        :colors="festivalColorPalette"
        :dark="festivalDark"
      )
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
      ).mountain__artists--day.first
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
      ).mountain__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
      ).mountain__artists--day.last
    div(v-else).column
      lineup-artists-list(
        headliners-classes="mountain__headliners"
        artists-classes="mountain__artists"
        :dark="festivalDark"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupMontain',
  components: {
    ThreeMountains: () => import('../../svgs/mountains/ThreeMountains'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    LineupArtistsList: () => import('../common/LineupArtistsList')
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
      'setFestivalLineupDays'
    ])
  },
  mounted () {
    this.setFestivalDark(true)
    this.setFestivalLineupDays(false)
  }
}
</script>

<style lang="sass">
.mountain
  &__name
    padding: 70px 48px 30px 48px

  &__headliners
    padding: 30px 25px 0 25px

  &__artists--day
    padding: 0 65px 40px 90px

    &.first
      padding-top: 40px

    &.last
      padding-bottom: 140px

  &__artists
    padding: 0 100px 140px 100px
</style>
