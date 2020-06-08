<template lang="pug">
  q-drawer(show-if-above v-model="left")
    div.change-configs.column.text-white.absolute-top.bg-grey-10
      h1.title.text-prater.text-bold.text-uppercase.q-pa-xl.text-center
        | My festival
    q-scroll-area.scroll-area
      div.column.text-white.q-pa-lg.text-white

        div.label.text-prater.text-bold.text-center Nome do festival
        input(
          v-model="myName"
          placeholder="Ex: Meu festival"
          type="text"
          :maxlength="max"
        ).input.text-prater.text-bold.q-mt-sm.q-mb-lg.animate-pop

        div.label.text-prater.text-bold.text-center Local
        input(
          v-model="myLocation"
          placeholder="Ex: Ceilândia"
          type="text"
          :maxlength="max"
        ).input.text-prater.text-bold.q-mt-sm.q-mb-lg.animate-pop

        div.label.text-prater.text-bold.text-center Paleta de cores
        div.color-palettes__container.q-mt-md.color-palette.q-mb-lg
          div(
            :class="{ 'selected': arrayIsEqual(colorPalette, myColorPalette) }"
            v-for="colorPalette of colorPalettes"
            @click="myColorPalette = colorPalette"
          ).color-palette.flex.bg-grey-9.q-pa-sm.cursor-pointer.no-wrap
            div(
              v-for="color of colorPalette"
              :style="{ 'background': color }"
            ).color-palette__item.q-mr-xs.animate-pop

        div.label.text-prater.text-bold.text-center Tema
        div.color-palettes__themes.q-mt-md
          q-btn(
            v-for="(theme, index) of themes"
            :label="theme.label"
            :key="index.value"
            no-caps
            :color="myTheme === theme.value ? 'grey-1' : 'grey-9'"
            :text-color="myTheme === theme.value ? 'grey-9' : 'grey-1'"
            unelevated
            @click="myTheme = theme.value"
          ).animate-pop
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChangeConfigs',
  components: {
    BubbleButton: () => import('../common/BubbleButton')
  },
  data () {
    return {
      left: true,
      max: 16,
      myName: '',
      myLocation: '',
      myColorPalette: [],
      myTheme: [],
      colorPalettes: [
        ['#847E89', '#C2D3CD', '#56494C'],
        ['#2274A5', '#E7DFC6', '#816C61'],
        ['#AA767C', '#FFA686', '#FEC196'],
        ['#1F5673', '#90C3C8', '#B9B8D3'],
        ['#C1F7DC', '#BDA0BC', '#A2708A'],
        ['#749C75', '#E9D985', '#6A5D7B']
      ],
      themes: [
        { label: 'Sem tema', value: 'none' },
        { label: 'Montanhas', value: 'mountain' },
        { label: 'Balões', value: 'balloon' }
        // 'Galáxia',
        // 'Céu',
        // 'Flores',
        // 'Natureza'
      ]
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalTheme',
      'festivalLocation'
    ])
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
    }
  },
  mounted () {
    this.myName = this.festivalName
    this.myLocation = this.festivalLocation
    this.myColorPalette = this.festivalColorPalette
    this.myTheme = this.festivalTheme
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
  grid-column-gap: 15px
  grid-row-gap: 10px

.color-palette
  border-radius: 50px

  .selected
    background: white !important

.color-palette__item
  width: 31px
  height: 31px
  border-radius: 30px

  &:last-of-type
    margin: 0

.color-palettes__themes
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 15px
  grid-row-gap: 10px
</style>
