<template lang="pug">
  q-page(:class="backgroundClass").lineup.column.no-wrap.position-relative
    div.buttons.fixed.column.q-mx-lg.q-my-md
      q-btn(
        round
        icon="mdi-cog"
        unelevated
        title="Ver configurações gerais"
        :color="festivalDark ? 'grey-8' : 'grey-4'"
        :text-color="festivalDark ? 'grey-5' : 'grey-7'"
        :class="{ 'animate-none': generalConfigsOpened }"
        @click="generalConfigsOpened = true"
      ).buttons__config.animate-pulse
    div.lineup-container.column.items-center.justify-between
      div.position-relative.column.items-center
        div(ref="lineup").lineup-content.column
          component(:is="componentName")
        img(src="~assets/img/tape.png").tape.tape--top-left
        img(src="~assets/img/tape.png").tape.tape--top-right
        img(src="~assets/img/tape.png").tape.tape--bottom-left
        img(src="~assets/img/tape.png").tape.tape--bottom-right
        //- div.paper-texture.absolute
      div.download-button.q-mt-xl
        bubble-button(
          :dark="festivalDark"
          @click.native="downloadPhoto"
        ).text-prater
          template(#content)
            div.flex.flex-center
              q-icon(name="mdi-download" size="28px").q-mr-sm
              div Baixar imagem
      div(
        v-if="lineupWallTexture"
        :style="wallOpacityStyle"
      ).wall-background.full-width.full-height
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
import { capitalize } from '../helpers/text'

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
      'festivalDark',
      'lineupWallTexture'
    ]),
    componentName () {
      return `Lineup${capitalize(this.festivalTheme || 'none')}`
    },
    backgroundClass () {
      let color = this.festivalDark ? 'grey-4' : 'brick-wall-color'
      return `bg-${color}`
    },
    wallOpacityStyle () {
      let opacity = this.festivalDark ? 0.2 : 0.35
      return { opacity }
    }
  },
  methods: {
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

<style lang="sass">
.buttons__config
  .q-icon
    font-size: 36px

    @media (max-width: 800px)
      font-size: 30px

    @media (max-width: 560px)
      font-size: 36px
</style>

<style lang="sass" scoped>
.lineup
  max-height: 100vh
  transition: background 0.15s ease
  overflow-y: hidden
  z-index: 2

.wall-background
  background-image: url("~assets/img/old-wall-2.png") !important
  z-index: -1
  position: fixed
  top: 0

.lineup-container
  padding: 70px 48px
  overflow-y: scroll
  overflow-x: hidden
  flex-wrap: nowrap

  @media (max-width: 1270px)
    padding: 60px 48px

  @media (max-width: 1100px)
    padding: 48px

  @media (max-width: 560px)
    padding: 35px

.paper-texture
  width: 100%
  height: 100%
  background-image: url("~assets/img/paper-texture.png") !important
  opacity: 0.12

.lineup-content
  overflow: hidden
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24)

  &> div
    @media (max-width: 1270px)
      zoom: 80%

    @media (max-width: 1100px)
      zoom: 65%

    @media (max-width: 985px)
      zoom: 85%

    @media (max-width: 900px)
      zoom: 80%

    @media (max-width: 800px)
      zoom: 70%

    @media (max-width: 750px)
      zoom: 65%

    @media (max-width: 600px)
      zoom: 60%

    @media (max-width: 560px)
      zoom: 55%

    @media (max-width: 500px)
      zoom: 50%

    @media (max-width: 460px)
      zoom: 45%

    @media (max-width: 400px)
      zoom: 40%

    @media (max-width: 375px)
      zoom: 38%

.tape
  max-width: 50px
  position: absolute
  opacity: 0.9
  transform: rotate(45deg)

  @media (max-width: 1270px)
    max-width: 35px

  @media (max-width: 1100px)
    max-width: 28px

  @media (max-width: 700px)
    max-width: 20px

  @media (max-width: 560px)
    max-width: 18px

  &--top-left
    top: -65px
    left: 0

    @media (max-width: 1270px)
      top: -45px

    @media (max-width: 1100px)
      top: -35px

    @media (max-width: 700px)
      top: -28px

    @media (max-width: 560px)
      top: -24px

  &--top-right
    top: -65px
    right: 0
    transform: rotate(315deg)

    @media (max-width: 1270px)
      top: -45px

    @media (max-width: 1100px)
      top: -35px

    @media (max-width: 700px)
      top: -28px

    @media (max-width: 560px)
      top: -24px

  &--bottom-left
    bottom: -65px
    left: 0
    transform: rotate(315deg)

    @media (max-width: 1270px)
      bottom: -45px

    @media (max-width: 1100px)
      bottom: -35px

    @media (max-width: 700px)
      bottom: -28px

    @media (max-width: 560px)
      bottom: -24px

  &--bottom-right
    bottom: -65px
    right: 0

    @media (max-width: 1270px)
      bottom: -45px

    @media (max-width: 1100px)
      bottom: -35px

    @media (max-width: 700px)
      bottom: -28px

    @media (max-width: 560px)
      bottom: -24px

.buttons
  right: 0
  top: 0
  z-index: 2000

  @media (max-width: 1028px)
    top: auto
    bottom: 0

  &__config
    padding: 11px

    @media (max-width: 800px)
      padding: 5px

    @media (max-width: 560px)
      padding: 10px

.bg-brick-wall-color
  background: #4e4040

.download-button
  @media (max-width: 700px)
    zoom: 80%

  @media (max-width: 560px)
    zoom: 70%
</style>
