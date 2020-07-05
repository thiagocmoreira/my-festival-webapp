<template lang="pug">
  div.saxophone.lineup__container.column.animate-fade.relative
    lineup-festival-name(
      classes="saxophone__name"
      :dark="!festivalDark"
      title-position="center center"
      black-and-white
    )
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        artists-classes="saxophone__artists--day"
        :dark="festivalDark"
        align="center"
        reverse
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="saxophone__artists--day"
        :dark="festivalDark"
        align="center"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        artists-classes="saxophone__artists--day"
        :dark="festivalDark"
        align="center"
        reverse
      )
    div(v-else).column
      lineup-artists-list(
        headliners-classes="saxophone__headliners"
        artists-classes="saxophone__artists"
        :dark="festivalDark"
        align="center"
      )
    saxophone-tint(
      :style="saxBackgroundColor"
      :colors="festivalColorPalette"
      :dark="festivalDark"
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupSaxophone',
  components: {
    Lightning: () => import('../../svgs/fire/Lightning'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupArtistsList: () => import('../common/LineupArtistsList'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    SaxophoneTint: () => import('../../svgs/saxophone/SaxophoneTint')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtistsNamesPerDay'
    ]),
    saxBackgroundColor () {
      return { background: this.festivalColorPalette[0] }
    }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalDark',
      'setFestivalLineupDays'
    ])
  },
  mounted () {
    this.setFestivalDark(false)
    this.setFestivalLineupDays(true)
  }
}
</script>

<style lang="sass">
.saxophone
  position: relative

  &__name
    padding: 110px 20px 80px 20px

  &__headliners
    padding: 0 45px

  &__artists--day
    padding: 0 90px 60px 90px

  &__artists
    padding: 0 100px 80px 100px
</style>
