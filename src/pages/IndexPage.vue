<template lang="pug">
  q-page.index.column
    cloud(color="#000").cloud-small--bg.q-ma-md.absolute
    cloud.cloud-small.q-ma-md.absolute
    div.column.flex-1.flex-center.text-prater.flex-1
      h1.title.text-lolapeluza.text-bold.text-uppercase.text-white.text-grey-10
        | My festival
      bubble-button(href="http://localhost:3000/login").q-mt-xl
        template(#content)
          div.flex.items-center
            q-icon(name="mdi-spotify" size="28px").q-mr-sm
            div Conecte com o Spotify
    img(src="../statics/img/musical-notes.svg").musical-notes-svg.absolute
    cloud(color="#000").cloud-big--bg.q-ma-md.absolute
    cloud.cloud-big.q-ma-md.absolute
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    Cloud: () => import('../components/svgs/common/Cloud'),
    BubbleButton: () => import('../components/common/BubbleButton')
  },
  methods: {
    login () {
      this.$router.push('/configs')
    }
  }
}
</script>

<style lang="sass" scoped>
.index
  position: relative
  animation: colorchange 50s infinite

.title
  font-size: 85px
  line-height: 95px
  letter-spacing: 0.08em
  margin: 0

.button
  padding: 2px 20px

.musical-notes-svg
  bottom: 0
  left: 20px

.cloud-small
  max-width: 550px
  left: -300px
  top: -50px
  animation: move-cloud-small 18s 0.7s ease-in-out infinite alternate

  &--bg
    max-width: 450px
    left: -120px
    top: -60px
    opacity: 0.1
    animation: move-cloud-small--bg 18s 0.7s ease-in-out infinite alternate

.cloud-big
  bottom: -150px
  max-width: 800px
  right: -290px
  animation: move-cloud-big 15s 0.7s ease-in-out infinite alternate

  &--bg
    max-width: 680px
    bottom: -120px
    right: -60px
    opacity: 0.1
    animation: move-cloud-big--bg 15s 0.7s ease-in-out infinite alternate

@keyframes move-cloud-small
  from
    transform: translateX(160px)

@keyframes move-cloud-small--bg
  from
    transform: translateX(140px)

@keyframes move-cloud-big
  from
    transform: translateX(-60px)

@keyframes move-cloud-big--bg
  from
    transform: translateX(-80px)

@keyframes colorchange
  0%
    background: $blue-7
  25%
    background: #67b5eb
  50%
    background: $pink-3
  75%
    background: $orange-4
  100%
    background: $yellow-4
</style>
