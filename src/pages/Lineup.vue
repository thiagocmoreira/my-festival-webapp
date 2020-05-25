<template lang="pug">
  q-page.lineup.column.items-center.justify-between.q-pa-xl.scroll.no-wrap
    div(:style="bgColor").container.column.items-center
      div.lineup__name.text-lolapeluza.text-bold.q-pa-xl {{ festivalName || 'Meu festival' }}
      div.lineup__artists.column.q-pa-xl.full-width.text-prater.text-white
        div.flex.justify-center
          span(
            v-for="(headliner, index) of headliners"
            :class="{ 'headliner': index <= 2 }"
          ).artist
            span {{ headliner }}
            span(
              v-if="index !== 2"
              :style="dotColor"
            ).q-px-sm .
        div.flex.justify-center
          span(v-for="(artist, index) of otherArtists").artist
            span {{ artist }}
            span(
              v-if="index !== otherArtists.length - 1"
              :style="dotColor"
            ).q-px-sm .
</template>

<script>
import { mapGetters } from 'vuex'
import artists from '../statics/top_artists.json'

export default {
  name: 'Lineup',
  data () {
    return {
      topArtists: artists
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalTheme'
    ]),
    headliners () {
      return this.topArtists.items.map(t => t.name).slice(0, 3)
    },
    otherArtists () {
      let length = this.topArtists.items.length
      return this.topArtists.items.map(t => t.name).slice(3, length)
    },
    bgColor () {
      return {
        background: (this.festivalColorPalette || [])[0] || 'blue-4'
      }
    },
    dotColor () {
      return {
        color: (this.festivalColorPalette || [])[1] || 'blue-4'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup
  background: $grey-1
  max-height: 100vh
  overflow-y: scroll

  .container
    width: 800px

  &__name
    font-size: 70px
    line-height: 60px
    letter-spacing: 0.03em !important
    color: #272928
    // margin-bottom: 50px

  &__artists
    background: #272928
    text-align: center

.artist
  font-size: 24px

.headliner
  font-size: 36px
</style>
