<template lang="pug">
  q-drawer(show-if-above v-model="left")
    div.change-configs.column.text-white.absolute-top.bg-grey-10
      h1.title.text-prater.text-bold.text-uppercase.q-pa-xl.text-center.flex.flex-center
        q-icon(
          name="mdi-music-circle"
          size="30px"
        ).q-mr-sm
        span My festival
    q-scroll-area.scroll-area
      div.column.text-white.text-white

        div.q-pt-lg.q-px-lg.q-pb-lg
          div.label.text-prater.text-bold.text-center Nome do festival
          input(
            v-model="myName"
            placeholder="Ex: Meu festival"
            type="text"
            :maxlength="max"
          ).input.text-prater.text-bold.q-mt-sm.animate-pop

        div.q-px-lg.q-pb-lg
          div.label.text-prater.text-bold.text-center Local
          input(
            v-model="myLocation"
            placeholder="Ex: Ceilândia"
            type="text"
            :maxlength="max"
          ).input.text-prater.text-bold.q-mt-sm.animate-pop

        div.q-px-md.q-pb-lg
          div.label.text-prater.text-bold.text-center Paleta de cores
          div.flex.justify-center.no-wrap.q-mt-sm
            div.flex.flex-center.q-mr-xs
              q-btn(
                round
                unelevated
                size="9px"
                :class="{ 'opacity-0': colorPalettePosition === 0 }"
                :disabled="colorPalettePosition === 0"
                title="Ver cores anteriores"
                @click="colorPalettePosition = colorPalettePosition - 1"
              )
                q-icon(
                  name="mdi-chevron-left"
                  size="20px"
                  color="white"
                )
            div.color-palettes__container
              div(
                :class="{ 'selected': arrayIsEqual(colorPalette, myColorPalette) }"
                v-for="colorPalette of colorPalettesChunks[colorPalettePosition]"
                @click="myColorPalette = colorPalette"
              ).color-palette.flex.bg-grey-9.cursor-pointer.no-wrap
                div(
                  v-for="color of colorPalette"
                  :style="{ 'background': color }"
                ).color-palette__item.q-mr-xs.animate-pop
            div.flex.flex-center.q-ml-xs
              q-btn(
                round
                unelevated
                size="9px"
                title="Ver mais cores"
                :class="{ 'opacity-0': colorPalettePosition === colorPalettesChunks.length - 1 }"
                :disabled="colorPalettePosition === colorPalettesChunks.length - 1"
                @click="colorPalettePosition = colorPalettePosition + 1"
              )
                q-icon(
                  name="mdi-chevron-right"
                  size="20px"
                  color="white"
                )

        div.q-px-lg.q-pb-lg
          div.label.text-prater.text-bold.text-center Tema
          div.flex.flex-center.q-mt-sm
            div.themes__container
              div(v-for="(theme, index) of themes").flex.flex-center
                q-btn(
                  no-caps
                  :color="myTheme === theme.value ? 'grey-1' : 'grey-9'"
                  unelevated
                  round
                  :title="theme.label"
                  @click="myTheme = theme.value"
                ).animate-pop
                  q-icon(
                    :name="theme.icon"
                    size="26px"
                    color="white"
                    :color="myTheme === theme.value ? 'grey-9' : 'grey-1'"
                  )
</template>

<script>
import _chunk from 'lodash-es/chunk'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChangeConfigs',
  components: {
    BubbleButton: () => import('../../common/BubbleButton')
  },
  data () {
    return {
      left: true,
      max: 16,
      myName: '',
      myLocation: '',
      myColorPalette: [],
      myTheme: [],
      modifiedColorPalettes: [],
      colorPalettePosition: 0
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalTheme',
      'festivalLocation'
    ]),
    ...mapGetters('festivalSetup', [
      'colorPalettes',
      'themes'
    ]),
    colorPalettesChunks () {
      return _chunk(this.modifiedColorPalettes, 6)
    }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalName',
      'setFestivalColorPalette',
      'setFestivalTheme',
      'setFestivalLocation'
    ]),
    arrayIsEqual (a1, a2) {
      return JSON.stringify(a1) === JSON.stringify(a2)
    },
    moveToFirstPosition (arr, index) {
      if (index !== -1) {
        let item = arr.splice(index, 1)[0]
        arr.unshift(item)
      }
      return arr
    }
  },
  mounted () {
    this.myName = this.festivalName
    this.myLocation = this.festivalLocation
    this.myColorPalette = this.festivalColorPalette
    this.myTheme = this.festivalTheme
    let index = this.colorPalettes.findIndex(c => this.arrayIsEqual(c, this.festivalColorPalette))
    this.modifiedColorPalettes = this.moveToFirstPosition(this.colorPalettes.slice(), index)
  },
  watch: {
    myName (value) {
      this.setFestivalName(value)
    },
    myLocation (value) {
      this.setFestivalLocation(value)
    },
    myColorPalette (value) {
      this.setFestivalColorPalette(value)
    },
    myTheme (value) {
      this.setFestivalTheme(value)
    }
  }
}
</script>

<style lang="sass">
.q-drawer
  background: $grey-10
</style>

<style lang="sass" scoped>
.change-configs
  border-bottom: solid 1px $grey-9

.title
  font-size: 24px
  line-height: 26px
  letter-spacing: 1px
  margin: 0

.scroll-area
  height: calc(100% - 122px)
  margin-top: 122px

.label
  font-size: 16px
  margin: 0

.input
  font-size: 20px
  background: $grey-9
  border: none
  border-radius: 50px
  padding: 5px
  text-align: center
  letter-spacing: 1px
  color: white !important

  &:focus
    outline-width: 0

.color-palettes__container
  display: grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: repeat(3, 1fr)
  grid-column-gap: 10px
  grid-row-gap: 10px

.color-palette
  border-radius: 50px
  padding: 7px

  &.selected
    background: white !important

.color-palette__item
  width: 25px
  height: 25px
  border-radius: 25px

  &:last-of-type
    margin: 0

.themes__container
  display: grid
  grid-template-columns: repeat(4, 43px)
  grid-column-gap: 10px
  grid-row-gap: 10px
</style>
