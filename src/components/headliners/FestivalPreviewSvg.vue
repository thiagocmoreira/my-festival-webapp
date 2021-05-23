<template lang="pug">
  div.festival-preview-svg.column.absolute.full-width
    component(
      :is="svgConfig.name"
      :style="svgConfig.style"
      v-bind="svgConfig.props"
    ).svg-preview-item.absolute
</template>

<script>
import { mapGetters } from 'vuex'
import { darkenColor, lightenColor } from '../../helpers/color'

export default {
  name: 'FestivalPreviewSvg',
  components: {
    TwoMountains: () => import('../svgs/mountains/TwoMountains'),
    Balloon: () => import('../svgs/balloon/Balloon'),
    Elephant: () => import('../svgs/africa/Elephant'),
    FireStripe: () => import('../svgs/fire/FireStripe'),
    Saxophone: () => import('../svgs/saxophone/Saxophone'),
    LeafRight: () => import('../svgs/leaf/LeafRight'),
    RioSilhouette: () => import('../svgs/rio/RioSilhouette')
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
                darkenColor(this.festivalColorPalette[2], 0.01),
                darkenColor(this.festivalColorPalette[2], 0.1)
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
                darkenColor(this.festivalColorPalette[2], 0.01),
                darkenColor(this.festivalColorPalette[2], 0.08),
                darkenColor(this.festivalColorPalette[2], 0.14)
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
              color: darkenColor(this.festivalColorPalette[2], 0.06)
            }
          }
        case 'fire':
          return {
            name: 'FireStripe',
            style: { bottom: 0 },
            props: {
              colors: [
                darkenColor(this.festivalColorPalette[2], 0.04),
                darkenColor(this.festivalColorPalette[2], 0.1),
                darkenColor(this.festivalColorPalette[2], 0.22)
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
                darkenColor(this.festivalColorPalette[2], 0.08),
                darkenColor(this.festivalColorPalette[2], 0.3),
                darkenColor(this.festivalColorPalette[2], 0.04)
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
                darkenColor(this.festivalColorPalette[2], 0.1)
              ]
            }
          }
        case 'rio':
          return {
            name: 'RioSilhouette',
            style: {
              bottom: 0
            },
            props: {
              colors: [
                'rgba(0, 0, 0, 0)',
                lightenColor(this.festivalColorPalette[2], 0.2),
                this.festivalColorPalette[2]
              ],
              blackAndWhiteBg: false
            }
          }
        default:
          return {}
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.festival-preview-svg
  z-index: 1
  height: 100vh

.svg-preview-item
  width: 100%

  @media (max-width: 600px)
    width: 200% !important
</style>
