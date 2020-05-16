<template lang="pug">
q-page.festival-configs.column.items-center.justify-between.q-pa-lg.items-between.relative
  q-btn(
    round
    size="lg"
    icon="mdi-chevron-up"
    title="Voltar"
    @click.native="step = step  - 1"
    :disabled="step === 1"
  )
  div(v-if="step === 1").column.items-center
    div.label.text-prater.text-bold.text-grey-10 Qual a sua preferência?
    div.flex.q-mt-md
      q-btn.q-mr-lg.animate-pop Fundo claro
      q-btn.animate-pop Fundo escuro
  div(v-if="step === 2").column.items-center
    div.label.text-prater.text-bold.text-grey-10 Dê um nome ao seu festival
    input(
      v-model="name"
      type="text"
    ).input.text-lolapeluza.text-bold.q-mt-md
  div(v-else-if="step === 3").column.items-center
    div.label.text-prater.text-bold.text-grey-10 Qual paleta de cores mais te agrada?
    div.color-palettes.q-mt-md
      div(v-for="colorPalette of colorPalettes").flex
        div(
          v-for="color of colorPalette.colors"
          :style="{ 'background': color }"
        ).color-palettes__item.q-mr-sm.animate-pop
  div(v-if="step === 4").column.items-center
    div.label.text-prater.text-bold.text-grey-10 Qual tema mais te agrada?
    div.flex.q-mt-md
      q-btn.q-mr-lg.animate-pop Espaço
      q-btn.q-mr-lg.animate-pop Céu
      q-btn.q-mr-lg.animate-pop Montanhas
      //- q-btn.q-mr-lg.animate-pop Instrumentos musicais
      q-btn.q-mr-lg.animate-pop Natureza
  q-btn(
    round
    size="lg"
    icon="mdi-chevron-down"
    @click.native="step = step + 1"
    title="Prosseguir"
  )
  //- bubble-button(
  //-   label="Prosseguir"
  //-   @click.native="step = step + 1"
  //- ).text-prater.q-mt-xl
</template>

<script>
export default {
  name: 'FestivalConfigs',
  components: {
    // BubbleButton: () => import('../components/common/BubbleButton')
  },
  data () {
    return {
      name: 'Meu festival',
      step: 3,
      colorPalettes: [
        {
          name: 'Péricles',
          colors: ['#81B3A3', '#ABFFE5', '#FFCF9E', '#5D71B3', '#91ABFF']
        },
        {
          name: 'Ble',
          colors: ['#B36F50', '#FF9566', '#5ABAFF', '#B3972D', '#FFDB4D']
        },
        {
          name: 'Bla',
          colors: ['#64B386', '#82FFB8', '#FFA875', '#4077B3', '#69B1FF']
        },
        {
          name: 'Bli',
          colors: ['#ADA85E', '#FAF17A', '#FAB96D', '#AD3B41', '#FA8C92']
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.label
  font-size: 2em
  line-height: 2em
  margin: 0
  letter-spacing: 0.01em !important

.input
  font-size: 85px
  line-height: 70px !important
  background: $orange-8
  border: none
  border-radius: 40px
  padding: 10px
  text-align: center
  text: white !important
  letter-spacing: 0.03em !important

.color-palettes
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 60px
  grid-row-gap: 30px

.color-palettes__item
  width: 50px
  height: 50px
  border-radius: 30px
</style>
