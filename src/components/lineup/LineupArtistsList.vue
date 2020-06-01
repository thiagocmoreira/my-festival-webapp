<template lang="pug">
  div.artists.column.full-width.text-prater.text-white
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
    otherArtists () {
      let length = this.topArtists.items.length
      return this.topArtists.items.map(t => t.name).slice(3, length)
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
.artists
  background: #272928
  text-align: center

.artist
  font-size: 24px

.headliner
  font-size: 36px
</style>
