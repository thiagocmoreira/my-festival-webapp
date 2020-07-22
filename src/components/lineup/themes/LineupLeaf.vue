<template lang="pug">
  div.leaf.lineup__container.column.animate-fade.relative
    leaf-top-left(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).leaf-svg--top-left
    leaf-top-right(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).leaf-svg--top-right
    leaf-right(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).leaf-svg--right
    lineup-festival-name(
      classes="leaf__name"
      :dark="!festivalDark"
      title-position="center center"
      black-and-white
    )
    div(v-if="festivalLineupDays").column.relative
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
        align="center"
      ).leaf__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
        align="center"
      ).leaf__artists--day.second
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
        align="center"
      ).leaf__artists--day.last
    div(v-else).column
      lineup-artists-list(
        headliners-classes="leaf__headliners"
        artists-classes="leaf__artists"
        :dark="festivalDark"
        align="center"
      )
    leaf-bottom-left(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).leaf-svg--bottom-left
    leaf-bottom-right(
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).leaf-svg--bottom-right
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupLeaf',
  components: {
    LineupFestivalName: () => import('../LineupFestivalName'),
    LineupArtistsList: () => import('../LineupArtistsList'),
    LineupDayArtistsList: () => import('../LineupDayArtistsList'),
    LeafTopLeft: () => import('../../svgs/leaf/LeafTopLeft'),
    LeafTopRight: () => import('../../svgs/leaf/LeafTopRight'),
    LeafRight: () => import('../../svgs/leaf/LeafRight'),
    LeafBottomLeft: () => import('../../svgs/leaf/LeafBottomLeft'),
    LeafBottomRight: () => import('../../svgs/leaf/LeafBottomRight')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtistsNamesPerDay'
    ]),
    leafBackgroundColor () {
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
.leaf
  position: relative

  &__name
    padding: 125px 20px 70px 20px

  &__headliners
    padding: 0 45px

  &__artists--day
    padding: 0 120px 60px 120px

    &.second
      padding: 0 130px 60px 130px

    &.last
      padding: 0 130px 180px 130px

  &__artists
    padding: 0 130px 180px 130px

  &-svg--top-left
    position: absolute
    top: 0
    max-width: 270px

  &-svg--top-right
    position: absolute
    top: 0
    right: 0
    max-width: 260px

  &-svg--right
    position: absolute
    top: 25%
    right: 0
    max-width: 120px

  &-svg--bottom-left
    position: absolute
    bottom: 15%
    max-width: 125px

  &-svg--bottom-right
    position: absolute
    bottom: 0
    right: 0
    max-width: 550px
</style>
