<template lang="pug">
  q-page.lineup.column.items-center.justify-between.q-pa-xl.no-wrap
    component(:is="componentName")
    div.q-mt-xl
      bubble-button(dark).text-prater
        template(#content)
          div.flex.flex-center
            q-icon(name="mdi-download" size="28px").q-mr-sm
            div Baixar imagem
</template>

<script>
import { mapGetters } from 'vuex'
import LineupNone from '../components/lineup/LineupNone'
import LineupMountain from '../components/lineup/LineupMountain'

export default {
  name: 'Lineup',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    LineupNone,
    LineupMountain
  },
  computed: {
    ...mapGetters('festivalConfigs', ['festivalTheme']),
    componentName () {
      return `Lineup${this.capitalize(this.festivalTheme || 'none')}`
    }
  },
  methods: {
    capitalize (s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
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
