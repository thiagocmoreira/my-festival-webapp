<template lang="pug">
  div.balloon.lineup__container.column.animate-fade
    lineup-festival-name(
      :classes="['balloon__name']"
      title-position="left center"
      :colors="['#67b5eb']"
      :dark="!festivalDark"
    )
      cloud-full(color="#52a7e2" :dark="festivalDark")
      balloon(:colors="festivalColorPalette").balloon-svg
    div(v-if="festivalLineupDays").column
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[0]"
        :dark="festivalDark"
      ).balloon__artists--day.first
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[1]"
        :dark="festivalDark"
      ).balloon__artists--day
      lineup-day-artists-list(
        :day-artists="festivalArtistsNamesPerDay[2]"
        :dark="festivalDark"
      ).balloon__artists--day.last
        template(#username)
          lineup-user-name.q-mt-xl
    div(v-else).column
      lineup-artists-list(
        headliners-classes="balloon__headliners"
        artists-classes="balloon__artists"
        :dark="festivalDark"
      )
        template(#username)
          lineup-user-name.q-mt-xl
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupBalloon',
  components: {
    CloudFull: () => import('../../svgs/balloon/CloudFull'),
    LineupFestivalName: () => import('../LineupFestivalName'),
    LineupDayArtistsList: () => import('../LineupDayArtistsList'),
    LineupArtistsList: () => import('../LineupArtistsList'),
    LineupUserName: () => import('../LineupUserName'),
    Balloon: () => import('../../svgs/balloon/Balloon')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalLineupDays',
      'festivalDark',
      'festivalArtistsNamesPerDay'
    ])
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalDark',
      'setFestivalLineupDays'
    ])
  },
  mounted () {
    this.setFestivalDark(false)
    this.setFestivalLineupDays(false)
  }
}
</script>

<style lang="sass">
.balloon
  position: relative

  &__name
    padding-top: 70px

  &__headliners
    padding: 20px 25px 0 25px

  &__artists--day
    padding: 0 65px 50px 90px

    &.first
      padding-top: 30px

    &.last
      padding-bottom: 140px

  &__artists
    padding: 0 100px 120px 100px
</style>

<style lang="sass" scoped>
.balloon-svg
  width: 165px
  position: absolute
  top: 0
  right: 0
  margin-top: 40px
  margin-right: 40px
</style>
