<template lang="pug">
  div.column.items-center.justify-between.text-grey-10.flex-1
    div
    div.column.items-center
      div.svgs.flex.q-mb-lg
        img(
          v-if="step <= 4"
          src="../../statics/img/gears.svg"
        ).full-width
        img(
          v-else
          src="../../statics/img/celebration.svg"
        ).animate-pop.full-width.q-mb-lg
      div.steps.column.text-prater
        div(
          v-for="(stepName, index) of stepNames"
          :key="index"
        ).flex.q-mb-sm
          div.check-icon.flex.flex-center.bg-white.animate-pop
            q-icon(
              v-show="index <= step"
              name="mdi-check-bold"
              color="green-7"
            )
          div.q-ml-md {{ stepName }}
    div.go-to-festival-button.column
      bubble-button(
        label="Ver meu festival"
        v-show="step >= 5"
        @click.native="$router.push('/headliners')"
      ).text-prater
</template>

<script>
export default {
  name: 'CreatingFestivalAnimation',
  components: {
    BubbleButton: () => import('../../components/common/BubbleButton')
  },
  data () {
    return {
      step: 0,
      stepNames: [
        'Procurar artistas',
        'Procurar elementos do tema',
        'Montar banner do festival',
        'Usar cores',
        'Montar página',
        'Tudo pronto!'
      ]
    }
  },
  methods: {
    setAnimation () {
      let interval = setInterval(() => {
        this.step++
        if (this.step === this.stepNames.length - 1) {
          clearInterval(interval)
        }
      }, 700)
    }
  },
  mounted () {
    this.setAnimation()
  }
}
</script>

<style lang="sass" scoped>
.svgs
  max-width: 150px

.steps
  font-size: 20px
  line-height: 27px

.check-icon
  width: 25px
  height: 25px
  border-radius: 25px

.go-to-festival-button
  min-height: 54px
</style>
