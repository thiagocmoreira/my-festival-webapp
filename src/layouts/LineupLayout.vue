<template lang="pug">
  q-layout(view="hHh lpR fFf").lineup-layout
    change-configs(
      v-model="opened"
      @close-drawer="opened = false"
    )
    q-page-container.flex
      div.flex-1.position-relative
        q-btn(
          @click="opened = !opened"
          round
          unelevated
          size="12px"
          :style="btnStyle"
          :class="opened ? 'show-drawer-button--to-right' : ''"
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
    btnStyle () {
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

<style lang="sass">
.lineup-layout
  .q-drawer
    background: $grey-10
    z-index: 20001

    @media (max-width: 620px)
      width: 250px !important
</style>

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

  &--to-right
    transition: all 0.07s

    @media (max-width: 1008px)
      left: 295px
      z-index: 20000

    @media (max-width: 620px)
      left: 245px
</style>
