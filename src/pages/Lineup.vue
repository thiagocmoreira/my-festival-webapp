<template lang="pug">
  q-page.lineup.column.items-center.justify-between.q-pa-xl.no-wrap
    div(ref="lineup").column
      component(:is="componentName")
    div.q-mt-xl
      bubble-button(
        dark
        @click.native="downloadPhoto"
      ).text-prater
        template(#content)
          div.flex.flex-center
            q-icon(name="mdi-download" size="28px").q-mr-sm
            div Baixar imagem
</template>

<script>
import { mapGetters } from 'vuex'
import LineupNone from '../components/lineup/LineupNone'
import LineupMountain from '../components/lineup/LineupMountain'

import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'Lineup',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    LineupNone,
    LineupMountain
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalTheme'
    ]),
    componentName () {
      return `Lineup${this.capitalize(this.festivalTheme || 'none')}`
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
        console.log(err)
        throw err
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
</style>
