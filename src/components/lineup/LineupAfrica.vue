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
        :day-artists="artistsPerDay[0]"
        artists-classes="africa__artists--reverse"
        :dark="festivalDark"
        reverse
      )
        vase-round(:color="festivalColorPalette[0]")
      lineup-day-artists-list(
        :day-artists="artistsPerDay[1]"
        artists-classes="africa__artists"
        :dark="festivalDark"
      )
        african-symbol(:color="festivalColorPalette[1]")
      lineup-day-artists-list(
        :day-artists="artistsPerDay[2]"
        :artists-classes="['africa__artists--reverse', 'last']"
        :dark="festivalDark"
        reverse
      )
        vase(:color="festivalColorPalette[2]")
      african-stripe(
        :colors="festivalColorPalette"
        :dark="festivalDark"
      ).african-stripe-bottom
    //- div.spear-svg
    //-   spear(:color="spearColor")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _chunk from 'lodash-es/chunk'
import artists from '../../statics/top_artists.json'

export default {
  name: 'LineupAfrica',
  components: {
    AfricanStripe: () => import('../svgs/africa/AfricanStripe'),
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupDayArtistsList: () => import('../lineup/LineupDayArtistsList'),
    Vase: () => import('../svgs/africa/Vase'),
    // Elephant: () => import('../svgs/africa/Elephant'),
    VaseRound: () => import('../svgs/africa/VaseRound'),
    AfricanSymbol: () => import('../svgs/africa/AfricanSymbol'),
    Spear: () => import('../svgs/africa/Spear')
  },
  data () {
    return {
      topArtists: artists
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark'
    ]),
    spearColor () {
      return this.festivalDark ? '#333' : '#ececec'
    },
    artists () {
      return this.topArtists.items.map(t => t.name)
    },
    artistsPerDay () {
      let days = { day1: [], day2: [], day3: [] }
      for (let chunk of _chunk(this.artists, 3)) {
        days.day1.push(chunk[0])
        days.day2.push(chunk[1])
        if (chunk[2]) {
          days.day3.push(chunk[2])
        }
      }
      return Object.values(days)
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

.african-stripe-bottom
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
