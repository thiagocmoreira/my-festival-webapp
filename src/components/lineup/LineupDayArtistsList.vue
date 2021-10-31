<template lang="pug">
  div(:style="styles" :class="{ 'reverse': reverse }").artists.row.items-center.animate-fade
    div(v-if="hasImage" :class="imageClass").image
      slot
    div.column.flex-1
      div(:class="alignText").flex.flex-1.text-prater
        span.headliner.q-mb-12
            | {{ headliner }}
            span(
              :style="dotColor"
            ).q-px-sm .
        span(v-for="(artist, index) of artists").artist.flex.items-end.q-mb-12
          span
            | {{ artist }}
            span(
              v-if="index !== artists.length - 1"
              :style="dotColor"
            ).q-px-sm .
      slot(name="username")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineupDayArtistsList',
  props: {
    colors: Array,
    headlinersClasses: {
      type: [Array, String],
      default () {
        return ['q-px-md', 'q-pt-xl']
      }
    },
    dayArtists: {
      type: Array,
      default () {
        return []
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
    },
    reverse: {
      type: Boolean,
      default: false
    },
    hasImage: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', ['festivalColorPalette']),
    headliners () {
      return this.dayArtist.slice(0, 1)
    },
    styles () {
      return {
        color: this.dark ? '#fff' : '#272928',
        background: this.dark ? '#272928' : '#fff'
      }
    },
    headliner () {
      return this.dayArtists[0]
    },
    artists () {
      let length = this.dayArtists.length
      return this.dayArtists.slice(1, length)
    },
    selectedColor () {
      return this.dark ? 1 : 0
    },
    dotColor () {
      return {
        color: (this.colors || this.festivalColorPalette || [])[this.selectedColor]
      }
    },
    imageClass () {
      return this.reverse ? 'q-ml-md' : 'q-mr-lg'
    },
    alignText () {
      if (this.align === 'center') {
        return 'justify-center'
      } else if (this.align === 'right') {
        return 'justify-end'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.artists
  text-align: center

.headliner
  font-size: 36px
  line-height: 32px
  white-space: nowrap

.artist
  font-size: 24px
  line-height: 24px
  white-space: nowrap

.image
  width: 120px

.q-mb-12
  margin-bottom: 12px
</style>
