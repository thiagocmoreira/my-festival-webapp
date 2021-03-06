<template lang="pug">
  q-page.festival-configs.column.items-center.justify-between.q-pa-lg.relative
    q-btn(
      round
      size="lg"
      icon="mdi-chevron-up"
      title="Voltar"
      unelevated
      :disabled="step <= 1"
      :class="{ 'opacity-0': step <= 1 }"
      text-color="grey-10"
      @click.native="step = step  - 1"
    )
    div(v-if="step === 1").festival-configs__step.column.items-center
      div.label.text-prater.text-bold.text-grey-10 Dê um nome ao seu festival
      input(
        v-model="myName"
        placeholder="Ex: Meu festival"
        type="text"
        :maxlength="max"
        autofocus
      ).input.text-lolapeluza.text-bold.q-mt-xl.full-width.animate-pop
    div(v-if="step === 2").festival-configs__step.column.items-center
      div.label.flex.justify-center.text-prater.text-bold.text-grey-10.flex.items-center
        | Em qual cidade, estado ou país ocorrerá o seu festival?
        i &nbsp;(opcional)
      input(
        v-model="myLocation"
        type="text"
        placeholder="Ex: Ceilândia"
        :maxlength="max"
        autofocus
      ).input.text-lolapeluza.text-bold.q-mt-xl.full-width.animate-pop
    div(v-else-if="step === 3").festival-configs__step.column.items-center
      div.label.text-prater.text-bold.text-grey-10 Escolha a paleta de cores ideal
      div.flex.justify-center.no-wrap.q-mt-xl
        div.flex.flex-center.q-mr-sm
          q-btn(
            round
            unelevated
            size="16px"
            :class="{ 'opacity-0': colorPalettePosition === 0 }"
            :disabled="colorPalettePosition === 0"
            title="Ver cores anteriores"
            text-color="grey-10"
            @click="colorPalettePosition = colorPalettePosition - 1"
          )
            q-icon(
              name="mdi-chevron-left"
              size="24px"
              color="white"
            )
        div.color-palettes__container
          div(
            :class="{ 'bg-grey-9': colorPalette === myColorPalette }"
            v-for="colorPalette of colorPalettesChunks[colorPalettePosition]"
            @click="myColorPalette = colorPalette"
          ).color-palette.flex.bg-white.q-pa-sm.cursor-pointer
            div(
              v-for="color of colorPalette"
              :style="{ 'background': color }"
            ).color-palette__item.q-mr-sm.animate-pop
        div.flex.flex-center.q-ml-sm
          q-btn(
            round
            unelevated
            size="16px"
            :class="{ 'opacity-0': colorPalettePosition === colorPalettesChunks.length - 1 }"
            :disabled="colorPalettePosition === colorPalettesChunks.length - 1"
            title="Ver mais cores"
            text-color="grey-10"
            @click="colorPalettePosition = colorPalettePosition + 1"
          )
            q-icon(
              name="mdi-chevron-right"
              size="24px"
              color="white"
            )
    div(v-if="step === 4").festival-configs__step.column.items-center
      div.label.text-prater.text-bold.text-grey-10 Qual tema mais te agrada?
      div.themes.flex.flex-center.q-mt-xl
        q-btn(
          v-for="(theme, index) of themes"
          :key="index.value"
          :color="myTheme === theme.value ? 'grey-1' : 'blue-5'"
          unelevated
          round
          :title="theme.label"
          @click="myTheme = theme.value"
          size="20px"
        ).themes__btn.animate-pop
          svg(
            v-if="theme.iconUrl"
            :style="{ 'fill': myTheme === theme.value ? '#424242' : '#fafafa' }"
          ).icon-theme-svg
            use(:xlink:href="getSvgUrl(theme.iconUrl, theme.value)")
          q-icon(
            v-else
            :name="theme.icon"
            size="30px"
            color="white"
            :color="myTheme === theme.value ? 'grey-9' : 'grey-1'"
          )
    q-btn(
      v-if="step < 4"
      round
      size="lg"
      icon="mdi-chevron-down"
      title="Prosseguir"
      unelevated
      text-color="grey-10"
      @click.native="step = step + 1"
    )
    bubble-button(
      label="Concluir"
      v-if="step === 4"
      @click.native="setConfigs"
    ).text-prater
</template>

<script>
import _chunk from 'lodash-es/chunk'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FestivalConfigsPage',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton')
  },
  data () {
    return {
      step: 1,
      max: 16,
      myName: '',
      myLocation: '',
      myColorPalette: [],
      myTheme: [],
      colorPalettePosition: 0
    }
  },
  computed: {
    ...mapGetters('festivalSetup', [
      'colorPalettes',
      'themes'
    ]),
    errors () {
      let errors = []
      if (this.myName.length === 0) {
        errors.push('Nome do festival')
      }
      if (this.myColorPalette.length === 0) {
        errors.push('Paleta de cores')
      }
      if (this.myTheme.length === 0) {
        errors.push('Tema')
      }
      return errors
    },
    colorPalettesChunks () {
      return _chunk(this.colorPalettes, 12)
    },
    valid () {
      return this.errors.length === 0
    },
    errorMessage () {
      let message = 'Não é possível continuar sem preencher '
      if (this.errors.length === 1) {
        return message + `o item: ${this.errors[0]}`
      } else if (this.errors.length === 2) {
        return message + `os items: ${this.errors[0]} e ${this.errors[1]}`
      } else if (this.errors.length === 3) {
        return message + `os items: ${this.errors[0]}, ${this.errors[1]} e ${this.errors[2]}`
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setFestivalName',
      'setFestivalColorPalette',
      'setFestivalTheme',
      'setFestivalLocation',
      'setTopArtists'
    ]),
    setConfigs () {
      if (this.valid) {
        this.setFestivalName(this.myName)
        this.setFestivalColorPalette(this.myColorPalette)
        this.setFestivalTheme(this.myTheme)
        if (this.myLocation.length > 0) {
          this.setFestivalLocation(this.myLocation)
        }
        this.$router.push('/creating')
      } else {
        this.$q.notify({
          message: this.errorMessage,
          position: 'top-right',
          icon: 'mdi-alert',
          progress: true
        })
      }
    },
    getSvgUrl (url, theme) {
      return url + '#' + theme
    }
  }
}
</script>

<style lang="sass">
.festival-configs
  ::placeholder
    color: $blue-7
</style>

<style lang="sass" scoped>
.festival-configs
  background: $blue-4

  &__step
    @media (max-width: 960px)
      width: 100%

.label
  font-size: 2em
  line-height: 2em
  margin: 0

  @media (max-width: 960px)
    max-width: 60%
    text-align: center
    line-height: 1.4em

  @media (max-width: 650px)
    max-width: 80%

  @media (max-width: 530px)
    max-width: 95%

  i
    font-size: 0.7em

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

  @media (max-width: 850px)
    font-size: 65px
    line-height: 50px !important

  @media (max-width: 670px)
    font-size: 55px
    line-height: 40px !important

  @media (max-width: 580px)
    font-size: 45px
    line-height: 30px !important

  &:focus
    outline-width: 0

.color-palettes__container
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(3, 1fr)
  grid-column-gap: 15px
  grid-row-gap: 15px

  @media (max-width: 850px)
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(4, 1fr)

  @media (max-width: 575px)
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(5, 1fr)

  @media (max-width: 400px)
    grid-gap: 10px

.color-palette
  border-radius: 50px

  @media (max-width: 435px)
    padding: 6px !important

.color-palette__item
  width: 40px
  height: 40px
  border-radius: 30px

  @media (max-width: 690px)
    width: 30px
    height: 30px

  @media (max-width: 435px)
    width: 25px
    height: 25px
    margin-right: 6px

  @media (max-width: 374px)
    width: 20px
    height: 20px

  &:last-of-type
    margin: 0 !important

.themes
  @media (max-width: 670px)
    max-width: 80%

  @media (max-width: 450px)
    max-width: 90%

  &__btn
    margin: 0 7px

    @media (max-width: 670px)
      margin: 8px

.icon-theme-svg
  height: 26px
  width: 26px
</style>
