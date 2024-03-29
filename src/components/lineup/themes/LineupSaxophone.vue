<template lang="pug">
  div.saxophone.lineup__container.column.animate-fade.relative
    lineup-festival-name(
      classes="saxophone__name"
      :dark="!festivalDark"
      title-position="center center"
      black-and-white
    )
    div(v-if="festivalLineupDays").column.relative
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
        align="center"
      ).saxophone__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
        align="center"
      ).saxophone__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
        align="center"
        :class="lineupDayLastClass"
      ).saxophone__artists--day
        template(#username)
          lineup-user-name.q-mt-xl
    div(v-else).column
      lineup-artists-list(
        headliners-classes="saxophone__headliners"
        :artists-classes="lineupArtistsClass"
        :dark="festivalDark"
        align="center"
      )
        template(#username)
          lineup-user-name.q-mt-xl
    saxophone-tint(
      :style="saxBackgroundColor"
      :colors="festivalColorPalette"
      :dark="festivalDark"
    ).saxophone-tint-svg
    curve(:color="festivalColorPalette[0]").curve-svg--top
    curve(:color="festivalColorPalette[0]").curve-svg
    curve(:color="festivalColorPalette[0]").curve-svg--right
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupSaxophone',
  components: {
    LineupFestivalName: () => import('../LineupFestivalName'),
    LineupArtistsList: () => import('../LineupArtistsList'),
    LineupDayArtistsList: () => import('../LineupDayArtistsList'),
    LineupUserName: () => import('../LineupUserName'),
    SaxophoneTint: () => import('../../svgs/saxophone/SaxophoneTint'),
    Curve: () => import('../../svgs/saxophone/Curve')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtistsNamesPerDay',
      'userSignature'
    ]),
    saxBackgroundColor () {
      return { background: this.festivalColorPalette[0] }
    },
    lineupArtistsClass () {
      return this.userSignature ? 'saxophone__artists--username' : 'saxophone__artists'
    },
    lineupDayLastClass () {
      return this.userSignature ? 'last--username' : 'last'
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
  padding-bottom: 320px

  &__name
    padding: 90px 20px 80px 20px

  &__headliners
    padding: 0 45px

  &__artists--day
    padding: 0 90px 60px 90px

    &.last
      padding-bottom: 75px

    &.last--username
      padding-bottom: 45px

  &__artists
    padding: 0 100px 70px 100px

    &--username
      padding: 0 100px 45px 100px

.saxophone-tint-svg
  position: absolute
  bottom: 0

.curve-svg
  width: 40px
  position: absolute
  top: 33%
  left: 0

  &--top
    width: 40px
    position: absolute
    top: -120px
    left: 0

  &--right
    width: 40px
    position: absolute
    top: 7%
    right: 0
    transform: scaleX(-1)
</style>
