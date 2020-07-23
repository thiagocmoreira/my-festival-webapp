<template lang="pug">
  q-page(:class="background").lineup.column.no-wrap.relative
    q-scroll-area.scroll-area.flex-1
      div.buttons.fixed.column.q-mx-lg.q-my-md
        q-btn(
          round
          icon="mdi-cog"
          :color="festivalDark ? 'grey-4' : 'grey-8'"
          :text-color="festivalDark ? 'grey-5' : 'grey-6'"
          size="20px"
          @click="generalConfigsOpened = true"
          title="Ver configurações gerais"
          unelevated
        )
      div.column.items-center.justify-between.lineup-container
        div.position-relative.column.items-center
          div(ref="lineup").lineup-content.column
            component(:is="componentName")
          img(src="~assets/img/tape.png").tape.tape--top-left
          img(src="~assets/img/tape.png").tape.tape--top-right
          img(src="~assets/img/tape.png").tape.tape--bottom-left
          img(src="~assets/img/tape.png").tape.tape--bottom-right
        div.q-mt-xl
          bubble-button(
            :dark="festivalDark"
            @click.native="downloadPhoto"
          ).text-prater
            template(#content)
              div.flex.flex-center
                q-icon(name="mdi-download" size="28px").q-mr-sm
                div Baixar imagem
      change-general-configs-dialog(v-model="generalConfigsOpened")
</template>

<script>
import { mapGetters } from 'vuex'
import LineupNone from '../components/lineup/themes/LineupNone'
import LineupMountain from '../components/lineup/themes/LineupMountain'
import LineupBalloon from '../components/lineup/themes/LineupBalloon'
import LineupAfrica from '../components/lineup/themes/LineupAfrica'
import LineupFire from '../components/lineup/themes/LineupFire'
import LineupSaxophone from '../components/lineup/themes/LineupSaxophone'
import LineupLeaf from '../components/lineup/themes/LineupLeaf'
import LineupRio from '../components/lineup/themes/LineupRio'

import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'LineupPage',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    ChangeGeneralConfigsDialog: () => import('../components/lineup/ChangeGeneralConfigsDialog'),
    LineupNone,
    LineupMountain,
    LineupBalloon,
    LineupAfrica,
    LineupFire,
    LineupSaxophone,
    LineupLeaf,
    LineupRio
  },
  data () {
    return {
      generalConfigsOpened: false
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalTheme',
      'festivalDark'
    ]),
    componentName () {
      return `Lineup${this.capitalize(this.festivalTheme || 'none')}`
    },
    background () {
      let color = this.festivalDark ? 'grey-1' : 'grey-9'
      return `bg-${color}`
    }
  },
  methods: {
    capitalize (s) {
      return typeof s === 'string' ? s.charAt(0).toUpperCase() + s.slice(1) : ''
    },
    async downloadPhoto () {
      try {
        let node = this.$refs.lineup
        let blob = await domToImage.toBlob(node)
        let imageName = (this.festivalName || 'Meu Festival').toLowerCase().replace(' ', '-')
        saveAs(blob, `${imageName}.png`)
      } catch (err) {
        this.$q.notify({
          message: 'Infelizmente não foi possível baixar a imagem no momento.',
          position: 'top-right',
          icon: 'mdi-alert',
          progress: true
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup
  max-height: 100vh
  transition: background 0.15s ease
  // background-image: url("~assets/img/old-wall.png") !important
  // overflow-y: scroll

.scroll-area
  height: 100vh

.lineup-container
  padding: 70px 48px

.lineup-content
  overflow: hidden
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24)

.tape
  max-width: 50px
  position: absolute
  opacity: 0.9
  transform: rotate(45deg)

  &--top-left
    top: -65px
    left: 0

  &--top-right
    top: -65px
    right: 0
    transform: rotate(315deg)

  &--bottom-left
    bottom: -65px
    left: 0
    transform: rotate(315deg)

  &--bottom-right
    bottom: -65px
    right: 0

.buttons
  right: 0
  top: 0
  z-index: 2000
</style>
