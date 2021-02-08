<template lang="pug">
  div.column.items-center.justify-between.text-grey-10.flex-1
    div
    div.column.items-center
      div.svgs.flex.q-mb-lg
        img(
          :key="stepsObjects[step].src"
          :src="stepsObjects[step].src"
        ).full-width.animate-fade
      div(
        :class="{ 'q-mt-lg': step >= stepsObjects.length - 1 }"
      ).steps.column.text-prater
        div(
          :key="stepsObjects[step].name"
        ).text-center.animate-pop {{ stepsObjects[step].name }}
    div.go-to-festival-button.column
      bubble-button(
        label="Ver meu festival"
        v-show="step >= stepsObjects.length - 1"
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
      stepsObjects: [
        {
          name: 'Procurando artistas...',
          src: '../../statics/img/equalizer.svg'
        },
        {
          name: 'Separando cores...',
          src: '../../statics/img/paint.svg'
        },
        {
          name: 'Montando banner do festival...',
          src: '../../statics/img/gooey-ring.svg'
        },
        {
          name: 'Tudo pronto!',
          src: '../../statics/img/celebration.svg'
        }
      ]
    }
  },
  methods: {
    setAnimation () {
      let interval = setInterval(() => {
        this.step++
        if (this.step === this.stepsObjects.length - 1) {
          clearInterval(interval)
        }
      }, 2200)
    }
  },
  mounted () {
    this.setAnimation()
  }
}
</script>

<style lang="sass" scoped>
.svgs
  max-width: 250px

.steps
  font-size: 30px
  line-height: 35px

.go-to-festival-button
  min-height: 54px
</style>
