<template lang="pug">
  div(:style="styles").artists.column.full-width.text-prater
    div(:class="headlinersClasses").flex.justify-center
      span(v-for="(headliner, index) of headliners").headliner.artist
        span {{ headliner }}
        span(
          v-if="index !== 2"
          :style="dotColor"
        ).q-px-sm .
    div(:class="artistsClasses").flex.justify-center
      span(v-for="(artist, index) of otherArtists").artist
        span {{ artist }}
        span(
          v-if="index !== otherArtists.length - 1"
          :style="dotColor"
        ).q-px-sm .
</template>

<script>
import artists from '../../statics/top_artists.json'
import { mapGetters } from 'vuex'

export default {
  name: 'LineupArtistsList',
  props: {
    colors: Array,
    headlinersClasses: {
      type: [Array, String],
      default () {
        return ['q-px-md', 'q-pt-xl']
      }
    },
    artistsClasses: {
      type: [Array, String],
      default () {
        return ['q-px-xl', 'q-pb-xl']
      }
    },
    dark: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      topArtists: artists
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', ['festivalColorPalette']),
    headliners () {
      return this.topArtists.items.map(t => t.name).slice(0, 3)
    },
    styles () {
      return {
        color: this.dark ? '#fff' : '#272928',
        background: this.dark ? '#272928' : '#fff'
      }
    },
    otherArtists () {
      let length = this.topArtists.items.length
      return this.topArtists.items.map(t => t.name).slice(3, length)
    },
    selectedColor () {
      return this.dark ? 1 : 0
    },
    dotColor () {
      return {
        color: (this.colors || this.festivalColorPalette || [])[this.selectedColor]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.artists
  text-align: center

.artist
  font-size: 24px

.headliner
  font-size: 36px
</style>
