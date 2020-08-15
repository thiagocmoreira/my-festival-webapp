<template lang="pug">
  q-page.index.column
    cloud(color="#000").cloud-small--bg.q-ma-md.absolute
    cloud.cloud-small.q-ma-md.absolute
    div.column.flex-1.flex-center.text-prater.flex-1
      h1.title.text-lolapeluza.text-uppercase.text-white.text-grey-10.text-center
        | My festival
      bubble-button(:href="loginUrl").connect-button.q-mt-xl
        template(#content)
          div.flex.flex-center
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
      this.$router.push('/welcome')
    }
  },
  computed: {
    loginUrl () {
      return 'https://myfestival-api.ml/login'
    }
  }
}
</script>

<style lang="sass" scoped>
.index
  position: relative
  animation: colorchange 50s infinite
  overflow: hidden

.title
  font-size: 85px
  line-height: 95px
  letter-spacing: 0.08em
  margin: 0
  font-weight: bold

  @media (max-width: 830px)
    font-size: 65px
    line-height: 70px

  @media (max-width: 500px)
    font-size: 55px
    line-height: 60px

  @media (max-width: 375px)
    font-size: 45px
    line-height: 50px

.connect-button
  margin-top: 48px

  @media (max-width: 375px)
    max-width: 250px
    margin-top: 28px

.musical-notes-svg
  bottom: 0
  left: 20px
  width: 350px
  height: 350px

  @media (max-width: 980px)
    left: 0

  @media (max-width: 920px)
    width: 250px
    height: 250px

.cloud-small
  max-width: 550px
  left: -330px
  top: -50px
  animation: move-cloud-small 18s 0.7s ease-in-out infinite alternate

  @media (max-width: 830px)
    max-width: 400px

  &--bg
    max-width: 450px
    left: -150px
    top: -60px
    opacity: 0.1
    animation: move-cloud-small--bg 18s 0.7s ease-in-out infinite alternate

    @media (max-width: 830px)
      max-width: 300px
      left: -200px

.cloud-big
  bottom: -150px
  max-width: 800px
  right: -330px
  animation: move-cloud-big 15s 0.7s ease-in-out infinite alternate

  @media (max-width: 830px)
    max-width: 600px
    bottom: -100px

  @media (max-width: 580px)
    max-width: 450px
    right: -220px

  @media (max-width: 375px)
    max-width: 400px

  &--bg
    max-width: 680px
    bottom: -120px
    right: -100px
    opacity: 0.1
    animation: move-cloud-big--bg 15s 0.7s ease-in-out infinite alternate

    @media (max-width: 830px)
      max-width: 420px
      right: -100px
      bottom: -30px

    @media (max-width: 580px)
      max-width: 350px
      right: -120px
      bottom: -70px

    @media (max-width: 375px)
      right: -200px
      bottom: -80px

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
