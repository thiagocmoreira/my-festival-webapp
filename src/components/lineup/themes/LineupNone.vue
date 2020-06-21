<template lang="pug">
  div.lineup__container.column.items-center.animate-fade
    lineup-festival-name
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :artists-classes="['lineup-none__artists--day', 'first']"
        :dark="festivalDark"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="lineup-none__artists--day"
        :dark="festivalDark"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :artists-classes="['lineup-none__artists--day', 'last']"
        :dark="festivalDark"
      )
    div(v-else).column
      lineup-artists-list(
        :colors="colors"
        :dark="festivalDark"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LineupNone',
  components: {
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
  &__artists--day
    padding: 0 65px 40px 90px

    &.first
      padding-top: 60px

    &.last
      padding-bottom: 60px
</style>
