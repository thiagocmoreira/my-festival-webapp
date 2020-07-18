<template lang="pug">
  div.festival-preview-svg.column.absolute.full-width
    component(
      :is="svgConfig.name"
      :style="svgConfig.style"
      v-bind="svgConfig.props"
    ).absolute.full-width
</template>

<script>
import Color from 'color'
import { mapGetters } from 'vuex'

export default {
  name: 'FestivalPreviewSvg',
  components: {
    TwoMountains: () => import('../svgs/mountains/TwoMountains'),
    Balloon: () => import('../svgs/balloon/Balloon'),
    Elephant: () => import('../svgs/africa/Elephant'),
    FireStripe: () => import('../svgs/fire/FireStripe'),
    Saxophone: () => import('../svgs/saxophone/Saxophone'),
    LeafRight: () => import('../svgs/leaf/LeafRight')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalTheme',
      'festivalColorPalette'
    ]),
    svgConfig () {
      switch (this.festivalTheme) {
        case 'mountain':
          return {
            name: 'TwoMountains',
            style: { bottom: 0 },
            props: {
              colors: [
                this.darkenColor(this.festivalColorPalette[2], 0.01),
                this.darkenColor(this.festivalColorPalette[2], 0.1)
              ]
            }
          }
        case 'balloon':
          return {
            name: 'Balloon',
            style: {
              top: 0,
              right: '30px',
              'max-width': '160px'
            },
            props: {
              colors: [
                this.darkenColor(this.festivalColorPalette[2], 0.01),
                this.darkenColor(this.festivalColorPalette[2], 0.08),
                this.darkenColor(this.festivalColorPalette[2], 0.14)
              ]
            }
          }
        case 'africa':
          return {
            name: 'Elephant',
            style: {
              top: 0,
              right: '30px',
              'max-width': '280px'
            },
            props: {
              color: this.darkenColor(this.festivalColorPalette[2], 0.06)
            }
          }
        case 'fire':
          return {
            name: 'FireStripe',
            style: { bottom: 0 },
            props: {
              colors: [
                this.darkenColor(this.festivalColorPalette[2], 0.04),
                this.darkenColor(this.festivalColorPalette[2], 0.1),
                this.darkenColor(this.festivalColorPalette[2], 0.14)
              ]
            }
          }
        case 'saxophone':
          return {
            name: 'Saxophone',
            style: {
              top: 0,
              right: '30px',
              'max-width': '230px'
            },
            props: {
              colors: [
                this.darkenColor(this.festivalColorPalette[2], 0.08),
                this.darkenColor(this.festivalColorPalette[2], 0.14),
                this.darkenColor(this.festivalColorPalette[2], 0.04)
              ]
            }
          }
        case 'leaf':
          return {
            name: 'LeafRight',
            style: {
              bottom: '10%',
              right: 0,
              'max-width': '150px'
            },
            props: {
              colors: [
                this.festivalColorPalette[1],
                this.festivalColorPalette[2],
                this.darkenColor(this.festivalColorPalette[2], 0.1)
              ]
            }
          }
        default:
          return {}
      }
    }
  },
  methods: {
    darkenColor (color, percentage) {
      color = Color(color)
      return color.darken(percentage).hex()
    }
  }
}
</script>

<style lang="sass" scoped>
.festival-preview-svg
  z-index: 1
  height: 100vh
</style>
