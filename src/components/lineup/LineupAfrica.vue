<template lang="pug">
  div.balloon.lineup__container.column.animate-fade
    lineup-festival-name(
      :classes="['africa__name']"
      :dark="!festivalDark"
      black-and-white
    )
      template(#top)
        african-stripe(
          :colors="festivalColorPalette"
          :dark="festivalDark"
        ).african-stripe
    div.column
      lineup-artists-list(
        headliners-classes="africa__headliners"
        artists-classes="africa__artists"
        :dark="festivalDark"
      )
        template(#bottom)
          african-stripe(
            :colors="festivalColorPalette"
            :dark="festivalDark"
          ).african-stripe.bottom
    div.spear-svg
      spear(:color="spearColor")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LineupAfrica',
  components: {
    AfricanStripe: () => import('../svgs/africa/AfricanStripe'),
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupArtistsList: () => import('../lineup/LineupArtistsList'),
    Spear: () => import('../svgs/africa/Spear')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark'
    ]),
    spearColor () {
      return this.festivalDark ? '#404040' : '#ececec'
    }
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
    padding: 70px 20px 60px 20px

  &__headliners
    padding: 0 25px 0 25px

  &__artists
    padding: 0 100px 100px 100px

.african-stripe
  margin-top: -2px

  &.bottom
    margin-bottom: -2px

.spear-svg
  width: 65px
  position: absolute
  bottom: 0
  left: 0
  margin-bottom: 75px
  margin-left: 15px
</style>
