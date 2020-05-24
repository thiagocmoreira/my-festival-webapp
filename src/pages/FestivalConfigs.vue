<template lang="pug">
  q-page.festival-configs.column.items-center.justify-between.q-pa-lg.relative
    q-btn(
      round
      size="lg"
      icon="mdi-chevron-up"
      title="Voltar"
      unelevated
      :disabled="step <= 1"
      :class="{ 'opacity-none': step <= 1 }"
      @click.native="step = step  - 1"
    )
    //- div(v-if="step === 1").column.items-center
    //-   div.label.text-prater.text-bold.text-grey-10 Qual a sua preferência?
    //-   div.flex.q-mt-md
    //-     q-btn(
    //-       unelevated
    //-       no-caps
    //-       color="white"
    //-       text-color="grey-10"
    //-     ).q-mr-lg.animate-pop Fundo claro
    //-     q-btn(
    //-       unelevated
    //-       no-caps
    //-       color="grey-10"
    //-       text-color="white"
    //-     ).animate-pop Fundo escuro
    div(v-if="step === 1").column.items-center
      div.label.text-prater.text-bold.text-grey-10 Dê um nome ao seu festival
      input(
        v-model="myName"
        type="text"
      ).input.text-lolapeluza.text-bold.q-mt-xl.animate-pop
    div(v-else-if="step === 2").column.items-center
      div.label.text-prater.text-bold.text-grey-10 Escolha a paleta de cores ideal
      div.color-palettes__container.q-mt-xl.color-palette
        div(
          :class="{ 'bg-grey-9': colorPalette === myColorPalette }"
          v-for="colorPalette of colorPalettes"
          @click="myColorPalette = colorPalette"
        ).color-palette.flex.bg-white.q-pa-sm.cursor-pointer
          div(
            v-for="color of colorPalette"
            :style="{ 'background': color }"
          ).color-palette__item.q-mr-sm.animate-pop
    div(v-if="step === 3").column.items-center
      div.label.text-prater.text-bold.text-grey-10 Qual tema mais te agrada?
      div.flex.q-mt-md
        q-btn(
          v-for="(theme, index) of themes"
          :label="theme"
          :key="index"
          no-caps
          :color="myTheme === theme ? 'grey-9' : 'blue-5'"
          unelevated
          @click="myTheme = theme"
        ).q-mr-sm
    q-btn(
      v-if="step < 3"
      round
      size="lg"
      icon="mdi-chevron-down"
      title="Prosseguir"
      unelevated
      @click.native="step = step + 1"
    )
    div(v-if="step === 3").q-mb-lg
      bubble-button(
        label="Concluir"
        @click.native="setConfigs"
      ).text-prater
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FestivalConfigs',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton')
  },
  data () {
    return {
      step: 1,
      myName: 'Meu festival',
      myColorPalette: [],
      myTheme: [],
      colorPalettes: [
        ['#C2D3CD', '#847E89', '#56494C'],
        ['#2274A5', '#E7DFC6', '#816C61'],
        ['#AA767C', '#FFA686', '#FEC196'],
        ['#1F5673', '#90C3C8', '#B9B8D3'],
        ['#C1F7DC', '#BDA0BC', '#A2708A'],
        ['#E9D985', '#749C75', '#6A5D7B']
      ],
      themes: [
        'Galáxia',
        'Céu',
        'Montanhas',
        'Natureza'
      ]
    }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalName',
      'setFestivalColorPalette',
      'setFestivalTheme'
    ]),
    setConfigs () {
      this.setFestivalName(this.myName)
      this.setFestivalColorPalette(this.myColorPalette)
      this.setFestivalTheme(this.myTheme)
      this.$router.push('/headliners')
    }
  }
}
</script>

<style lang="sass" scoped>
.festival-configs
  background: $blue-4

.label
  font-size: 2em
  line-height: 2em
  margin: 0
  letter-spacing: 0.01em !important

.input
  font-size: 85px
  line-height: 70px !important
  background: $blue-5
  border: none
  border-radius: 80px
  padding: 10px
  text-align: center
  color: white !important
  letter-spacing: 0.04em !important

  &:focus
    outline-width: 0

.color-palettes__container
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-column-gap: 25px
  grid-row-gap: 20px

.color-palette
  border-radius: 50px

.color-palette__item
  width: 40px
  height: 40px
  border-radius: 30px

  &:last-of-type
    margin: 0

.opacity-none
  opacity: 0 !important
</style>
