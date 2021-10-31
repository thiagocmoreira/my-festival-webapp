<template lang="pug">
  div.lineup__container.column.items-center.animate-fade
    lineup-festival-name.lineup-none__name
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
      ).lineup-none__artists--day.first
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
      ).lineup-none__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
      ).lineup-none__artists--day.last
        template(#username)
          lineup-user-name.q-mt-xl
    div(v-else).column
      lineup-artists-list(
        headliners-classes="lineup-none__headliners"
        artists-classes="lineup-none__artists"
        :colors="colors"
        :dark="festivalDark"
      )
        template(#username)
          lineup-user-name.q-mt-xl
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LineupNone',
  components: {
    LineupFestivalName: () => import('../LineupFestivalName'),
    LineupDayArtistsList: () => import('../LineupDayArtistsList'),
    LineupArtistsList: () => import('../LineupArtistsList'),
    LineupUserName: () => import('../LineupUserName')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalArtistsNamesPerDay',
      'festivalLineupDays'
    ]),
    colors () {
      return this.festivalColorPalette.slice().reverse()
    }
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
.lineup-none
  &__name
    max-width: none

  &__headliners
    padding: 60px 20px 0 20px

  &__artists
    padding: 0 60px 80px 60px

  &__artists--day
    padding: 0 65px 40px 90px

    &.first
      padding-top: 60px

    &.last
      padding-bottom: 60px
</style>
