<template lang="pug">
  q-page.index.column
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
    img(src="../assets/multidao.png").crowd-image.absolute.full-width
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="sass" scoped>
.index
  position: relative

.title
  font-size: 85px
  line-height: 95px
  letter-spacing: 0.08em
  margin: 0

.button
  padding: 2px 20px

.crowd-image
  bottom: 0
  opacity: 0.1
</style>
