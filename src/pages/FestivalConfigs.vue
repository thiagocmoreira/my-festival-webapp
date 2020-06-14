<template lang="pug">
  q-page.festival-configs.column.items-center.justify-between.q-pa-lg.relative
    q-btn(
      round
      size="lg"
      icon="mdi-chevron-up"
      title="Voltar"
      unelevated
      :disabled="step <= 1"
      :class="{ 'opalocation-none': step <= 1 }"
      @click.native="step = step  - 1"
    )
    div(v-if="step === 1").column.items-center
      div.label.text-prater.text-bold.text-grey-10 Dê um nome ao seu festival
      input(
        v-model="myName"
        placeholder="Ex: Meu festival"
        type="text"
        :maxlength="max"
      ).input.text-lolapeluza.text-bold.q-mt-xl.animate-pop
    div(v-if="step === 2").column.items-center
      div.label.text-prater.text-bold.text-grey-10.flex.items-center
        | Em qual cidade, estado ou país ocorrerá o seu festival?
        i &nbsp;(opcional)
      input(
        v-model="myLocation"
        type="text"
        placeholder="Ex: Ceilândia"
        :maxlength="max"
      ).input.text-lolapeluza.text-bold.q-mt-xl.animate-pop
    div(v-else-if="step === 3").column.items-center
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
    div(v-if="step === 4").column.items-center
      div.label.text-prater.text-bold.text-grey-10 Qual tema mais te agrada?
      div.flex.q-mt-md
        q-btn(
          v-for="(theme, index) of themes"
          :label="theme.label"
          :key="index.value"
          no-caps
          :color="myTheme === theme.value ? 'grey-9' : 'blue-5'"
          unelevated
          @click="myTheme = theme.value"
        ).q-mr-sm
    q-btn(
      v-if="step < 4"
      round
      size="lg"
      icon="mdi-chevron-down"
      title="Prosseguir"
      unelevated
      @click.native="step = step + 1"
    )
    bubble-button(
      label="Concluir"
      v-if="step === 4"
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
        ['#749C75', '#E9D985', '#6A5D7B'],
        ['#89241E', '#E8B238', '#ECABB6']
      ],
      themes: [
        { label: 'Sem tema', value: 'none' },
        { label: 'Montanhas', value: 'mountain' },
        { label: 'Balões', value: 'balloon' },
        { label: 'África', value: 'africa' },
        { label: 'Rock', value: 'rock' }
        // 'Galáxia',
        // 'Céu',
        // 'Flores',
        // 'Natureza'
      ]
    }
  },
  computed: {
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
      'setFestivalLocation'
    ]),
    setConfigs () {
      if (this.valid) {
        this.setFestivalName(this.myName)
        this.setFestivalColorPalette(this.myColorPalette)
        this.setFestivalTheme(this.myTheme)
        if (this.myLocation.length > 0) {
          this.setFestivalLocation(this.myLocation)
        }
        this.$router.push('/headliners')
      } else {
        this.$q.notify({
          message: this.errorMessage,
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
.festival-configs
  ::placeholder
    color: $blue-7
</style>

<style lang="sass" scoped>
.festival-configs
  background: $blue-4

.label
  font-size: 2em
  line-height: 2em
  margin: 0

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
</style>
