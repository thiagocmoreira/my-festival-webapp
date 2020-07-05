<template lang="pug">
  q-page(:class="background").lineup.column.no-wrap.relative
    q-scroll-area.scroll-area.flex-1
      div.buttons.fixed.column.q-mx-lg.q-my-md
        q-btn(
          round
          :icon="festivalDark ? 'mdi-lightbulb-on' : 'mdi-lightbulb'"
          :color="festivalDark ? 'grey-4' : 'grey-8'"
          :text-color="festivalDark ? 'grey-5' : 'grey-6'"
          size="16px"
          @click="setFestivalDark(!festivalDark)"
          :title="festivalDark ? 'Mudar para o modo escuro' : 'Mudar para modo claro'"
          unelevated
        ).q-mb-sm
        q-btn(
          round
          :icon="festivalLineupDays ? 'mdi-format-list-bulleted' : 'mdi-format-list-text'"
          :color="festivalDark ? 'grey-4' : 'grey-8'"
          :text-color="festivalDark ? 'grey-5' : 'grey-6'"
          size="16px"
          @click="setFestivalLineupDays(!festivalLineupDays)"
          :title="festivalLineupDays ? 'Mudar para lineup completa' : 'Mudar para lineup dividida em 3 dias'"
          unelevated
        )
      div.column.items-center.justify-between.q-pa-xl
        div(ref="lineup").lineup-container.column
          component(:is="componentName")
        div.q-mt-xl
          bubble-button(
            :dark="festivalDark"
            @click.native="downloadPhoto"
          ).text-prater
            template(#content)
              div.flex.flex-center
                q-icon(name="mdi-download" size="28px").q-mr-sm
                div Baixar imagem
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LineupNone from '../components/lineup/themes/LineupNone'
import LineupMountain from '../components/lineup/themes/LineupMountain'
import LineupBalloon from '../components/lineup/themes/LineupBalloon'
import LineupAfrica from '../components/lineup/themes/LineupAfrica'
import LineupFire from '../components/lineup/themes/LineupFire'
import LineupSaxophone from '../components/lineup/themes/LineupSaxophone'

import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import artists from '../statics/top_artists.json'

export default {
  name: 'Lineup',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    LineupNone,
    LineupMountain,
    LineupBalloon,
    LineupAfrica,
    LineupFire,
    LineupSaxophone
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalTheme',
      'festivalDark',
      'festivalLineupDays',
      'festivalArtists'
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
    ...mapActions('festivalConfigs', [
      'setFestivalDark',
      'setFestivalLineupDays',
      'setTopArtists'
    ]),
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
  },
  mounted () {
    if (!this.festivalArtists.length) {
      this.setTopArtists(artists.items)
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup
  max-height: 100vh
  transition: background 0.15s ease
  // overflow-y: scroll

.scroll-area
  height: 100vh

.lineup-container
  overflow: hidden
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24)

.buttons
  right: 0
  top: 0
</style>
