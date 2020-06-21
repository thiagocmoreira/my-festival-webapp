<template lang="pug">
  div.rock.lineup__container.column.animate-fade.relative
    //- guitar(
    //-   :colors="festivalColorPalette"
    //-   :dark="festivalDark"
    //- ).guitar.q-ma-lg
    fire-stripe(
      rotated
      size="0"
    ).fire-stripe
    lineup-festival-name(
      classes="rock__name"
      :dark="!festivalDark"
      title-position="center center"
      black-and-white
    )
      template(#top)
        lightning(:color="lightningColor").lightning.q-mb-xs
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        artists-classes="rock__artists--day"
        :dark="festivalDark"
        align="center"
        reverse
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="rock__artists--day"
        :dark="festivalDark"
        align="center"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :artists-classes="['rock__artists--day', 'last']"
        :dark="festivalDark"
        align="center"
        reverse
      )
    div(v-else).column
      lineup-artists-list(
        headliners-classes="rock__headliners"
        artists-classes="rock__artists"
        :dark="festivalDark"
        align="center"
      )
    fire-stripe.fire-stripe--bottom
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupFire',
  components: {
    Guitar: () => import('../../svgs/fire/Guitar'),
    Lightning: () => import('../../svgs/fire/Lightning'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupArtistsList: () => import('../common/LineupArtistsList'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    FireStripe: () => import('../../svgs/fire/FireStripe')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtistsNamesPerDay'
    ]),
    lightningColor () {
      return this.festivalDark ? this.festivalColorPalette[2] : this.festivalColorPalette[1]
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
    this.setFestivalLineupDays(true)
  }
}
</script>

<style lang="sass">
.rock
  position: relative

  &__name
    padding: 110px 20px 80px 20px

  &__headliners
    padding: 0 45px

  &__artists--day
    padding: 0 90px 60px 90px

    &.last
      padding-bottom: 160px

  &__artists
    padding: 0 100px 160px 100px

.lightning
  width: 100px
  margin-left: -30px

.fire-stripe
  position: absolute
  top: 0

.fire-stripe--bottom
  position: absolute
  bottom: 0

.guitar
  width: 190px
  position: absolute
  top: 0
  right: 0
</style>
