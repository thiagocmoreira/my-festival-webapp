<template lang="pug">
  q-page.index.column
    cloud.cloud-small.q-ma-md.absolute
    cloud.cloud-big.q-ma-md.absolute
    div.column.flex-1.flex-center.text-prater.flex-1
      h1.title.text-lolapeluza.text-bold.text-uppercase.text-white My festival
      q-btn(
        color="green-6"
        no-caps
        unelevated
        size="lg"
      ).button.q-mt-xl
        div.flex
          q-icon(name="mdi-spotify").q-mr-sm
          div Conecte com o Spotify
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    Cloud: () => import('../components/Cloud')
  }
}
</script>

<style lang="sass" scoped>
.index
  position: relative
  background: $blue-4

.title
  font-size: 85px
  line-height: 95px
  letter-spacing: 0.08em
  margin: 0

.button
  padding: 2px 20px

.cloud-small
  max-width: 500px
  left: -200px
  top: -50px

.cloud-big
  bottom: -150px
  max-width: 800px
  right: -290px
</style>
