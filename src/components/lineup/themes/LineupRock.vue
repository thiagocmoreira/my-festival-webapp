<template lang="pug">
  div.rock.lineup__container.column.animate-fade.relative
    guitar(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).guitar.q-ma-lg
    lineup-festival-name(
      classes="rock__name"
      :dark="!festivalDark"
      title-position="left center"
      black-and-white
    )
      template(#top)
        lightning.lightning.q-mb-xs
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        artists-classes="rock__artists--day"
        :dark="festivalDark"
        reverse
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="rock__artists--day"
        :dark="festivalDark"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :artists-classes="['rock__artists--day', 'last']"
        :dark="festivalDark"
        reverse
      )
      fire-stripe.fire-stripe--bottom
    div(v-else).column
      lineup-artists-list(
        headliners-classes="rock__headliners"
        artists-classes="rock__artists"
        :dark="festivalDark"
      )
      fire-stripe.fire-stripe--bottom
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupRock',
  components: {
    Guitar: () => import('../../svgs/rock/Guitar'),
    Lightning: () => import('../../svgs/rock/Lightning'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupArtistsList: () => import('../common/LineupArtistsList'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    FireStripe: () => import('../../svgs/rock/FireStripe')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtistsNamesPerDay'
    ])
    // flamesColor () {
    //   return this.festivalDark ? ['#ff673e', '#ff9b50', '#272928'] : ['#ff673e', '#ff9b50', '#fff']
    // }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalDark',
      'setFestivalLineupDays'
    ])
  },
  mounted () {
    this.setFestivalDark(true)
    this.setFestivalLineupDays(true)
  }
}
</script>

<style lang="sass">
.rock
  position: relative

  &__name
    padding: 80px 20px 90px 20px

  &__headliners
    padding: 0 45px

  &__artists--day
    padding: 0 65px 60px 90px

    &.last
      padding-bottom: 140px

  &__artists
    padding: 0 100px 160px 100px

.lightning
  width: 100px
  margin-left: -30px

.fire-stripe--bottom
  position: absolute
  bottom: 0

.guitar
  width: 190px
  position: absolute
  top: 0
  right: 0
</style>
