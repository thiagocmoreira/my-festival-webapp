<template lang="pug">
  q-layout(view="hHh lpR fFf").lineup-layout
    change-configs(v-model="opened")
    q-page-container.flex
      div.container.flex-1.position-relative
        q-btn(
          @click="opened = !opened"
          round
          unelevated
          size="12px"
          :style="bntStyle"
          :title="opened ? 'Fechar configurações' : 'Abrir configurações'"
        ).show-drawer-button.absolute
          q-icon(
            :name="opened ? 'mdi-chevron-left' : 'mdi-chevron-right'"
            size="25px"
            :style="iconStyle"
          )
        router-view
</template>

<script>
import { mapGetters } from 'vuex'
import Color from 'color'

export default {
  name: 'LineupLayout',
  components: {
    ChangeConfigs: () => import('../components/lineup/ChangeConfigs')
  },
  meta () {
    let routeName = (this.$route || {}).name
    let title = routeName.length
      ? `My Festival - ${routeName}`
      : 'My Festival'
    return { title }
  },
  data () {
    return {
      opened: true
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette'
    ]),
    bntStyle () {
      return { background: this.festivalColorPalette[1] }
    },
    iconStyle () {
      let color = Color(this.festivalColorPalette[1])
      return {
        color: color.isDark() ? '#FFFFFF' : '#272928'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup-layout
  background: $grey-1
  height: 100vh
  overflow: hidden

.show-drawer-button
  left: -5px
  top: 105px
  z-index: 100
  border-top-left-radius: 0
  border-bottom-left-radius: 0
</style>
