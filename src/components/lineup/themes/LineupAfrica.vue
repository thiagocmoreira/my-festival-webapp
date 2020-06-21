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
    div(v-if="festivalLineupDays").column
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
    div(v-else).column
      lineup-artists-list(
        headliners-classes="africa__headliners"
        artists-classes="africa__artists--list"
        :dark="festivalDark"
      )
      african-stripe(
        :colors="festivalColorPalette"
        :dark="festivalDark"
      ).african-stripe--bottom
      spear(:color="spearColor").spear-svg
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupAfrica',
  components: {
    AfricanStripe: () => import('../../svgs/africa/AfricanStripe'),
    LineupFestivalName: () => import('../common/LineupFestivalName'),
    LineupDayArtistsList: () => import('../common/LineupDayArtistsList'),
    LineupArtistsList: () => import('../common/LineupArtistsList'),
    Vase: () => import('../../svgs/africa/Vase'),
    VaseRound: () => import('../../svgs/africa/VaseRound'),
    AfricanSymbol: () => import('../../svgs/africa/AfricanSymbol'),
    // Elephant: () => import('../../svgs/africa/Elephant'),
    Spear: () => import('../../svgs/africa/Spear')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalArtistsNamesPerDay',
      'festivalLineupDays'
    ]),
    spearColor () {
      return this.festivalDark ? '#333' : '#ececec'
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
.africa
  position: relative

  &__name
    padding: 130px 20px 80px 20px

  &__headliners
    padding: 0 45px

  &__artists
    padding: 0 65px 60px 50px

    &--reverse
      padding: 0 50px 60px 70px

      &.last
        padding-bottom: 140px

    &--list
      padding: 0 100px 150px 100px

.african-stripe
  margin-top: -2px
  position: absolute
  top: 0

.african-stripe--bottom
  margin-bottom: -2px
  position: absolute
  bottom: 0

.spear-svg
  width: 75px
  position: absolute
  bottom: 0
  right: 0
  margin-bottom: 75px
  margin-right: 20px
</style>
