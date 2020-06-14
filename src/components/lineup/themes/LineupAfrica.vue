<template lang="pug">
  div.africa.lineup__container.column.animate-fade
    african-stripe(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).african-stripe
    lineup-festival-name(
      :classes="['africa__name']"
      :dark="!festivalDark"
      black-and-white
    )
    div.column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        artists-classes="africa__artists--reverse"
        :dark="festivalDark"
        has-image
        reverse
      )
        vase-round(:color="festivalColorPalette[0]")
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        artists-classes="africa__artists"
        :dark="festivalDark"
        has-image
      )
        african-symbol(:color="festivalColorPalette[2]")
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :artists-classes="['africa__artists--reverse', 'last']"
        :dark="festivalDark"
        has-image
        reverse
      )
        vase(:color="festivalColorPalette[1]")
      african-stripe(
        :colors="festivalColorPalette"
        :dark="festivalDark"
      ).african-stripe--bottom
    //- div.spear-svg
    //-   spear(:color="spearColor")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupAfrica',
  components: {
    AfricanStripe: () => import('../../svgs/africa/AfricanStripe'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    Vase: () => import('../../svgs/africa/Vase'),
    VaseRound: () => import('../../svgs/africa/VaseRound'),
    AfricanSymbol: () => import('../../svgs/africa/AfricanSymbol')
    // Spear: () => import('../../svgs/africa/Spear')
    // Elephant: () => import('../../svgs/africa/Elephant'),
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalArtistsNamesPerDay'
    ])
    // spearColor () {
    //   return this.festivalDark ? '#333' : '#ececec'
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
.africa
  position: relative

  &__name
    padding: 130px 20px 80px 20px

  &__artists
    padding: 0 70px 60px 50px

    &--reverse
      padding: 0 50px 60px 70px

      &.last
        padding: 0 60px 140px 60px

.african-stripe
  margin-top: -2px
  position: absolute
  top: 0

.african-stripe--bottom
  margin-bottom: -2px
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
