<template lang="pug">
  div(:style="styles").artists.column.full-width.text-prater.animate-fade
    div(:class="headlinersClasses").flex.justify-center
      span(v-for="(headliner, index) of headliners").headliner.artist
        | {{ headliner }}
        span(
          v-if="index !== 2"
          :style="dotColor"
        ).q-px-sm .
    div(:class="artistsClasses").flex.justify-center
      span(v-for="(artist, index) of otherArtists").artist
        | {{ artist }}
        span(
          v-if="index !== otherArtists.length - 1"
          :style="dotColor"
        ).q-px-sm .
      slot(name="username")
    slot(name="bottom")
</template>

<script>
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
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalArtistsNames'
    ]),
    headliners () {
      return this.festivalArtistsNames.slice(0, 3)
    },
    styles () {
      return {
        color: this.dark ? '#fff' : '#272928',
        background: this.dark ? '#272928' : '#fff'
      }
    },
    otherArtists () {
      let length = this.festivalArtistsNames.length
      return this.festivalArtistsNames.slice(3, length)
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
  white-space: nowrap

.headliner
  font-size: 36px
  white-space: nowrap
</style>
