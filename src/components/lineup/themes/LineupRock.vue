<template lang="pug">
  div.rock.lineup__container.column.animate-fade
    //- fire-stripe(rotated size="0").fire-stripe
    lineup-festival-name(
      :classes="['rock__name']"
      :dark="!festivalDark"
      black-and-white
    )
      //- fire-stripe(
      //-   :colors="flamesColor"
      //-   size="60px"
      //- )
    div.column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        artists-classes="rock__artists"
        :dark="festivalDark"
        reverse
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="rock__artists"
        :dark="festivalDark"
      )
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :artists-classes="['rock__artists', 'last']"
        :dark="festivalDark"
        reverse
      )
      fire-stripe.fire-stripe--bottom
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupRock',
  components: {
    FireStripe: () => import('../../svgs/rock/FireStripe'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalArtistsNamesPerDay'
    ])
    // flamesColor () {
    //   return this.festivalDark ? ['#ff673e', '#ff9b50', '#272928'] : ['#ff673e', '#ff9b50', '#fff']
    // }
  },
  methods: {
    ...mapActions('festivalConfigs', ['setFestivalDark'])
  },
  mounted () {
    this.setFestivalDark(true)
  }
}
</script>

<style lang="sass">
.rock
  position: relative

  &__name
    padding: 130px 20px 80px 20px

  &__artists
    padding: 0 70px 60px 90px

    &.last
      padding: 0 70px 140px 90px

// .fire-stripe
//   position: absolute
//   top: -1px

.fire-stripe--bottom
  position: absolute
  bottom: 0

// .spear-svg
//   width: 65px
//   position: absolute
//   bottom: 0
//   right: 0
//   margin-bottom: 75px
//   margin-right: 15px
</style>
