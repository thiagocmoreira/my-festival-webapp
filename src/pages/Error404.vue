<template lang="pug">
  div.fixed-center.text-center.text-grey-7
    p
      img(src="~assets/img/sad.svg").sad-img
    div.label-404.text-bold 404
    div.text-faded
      | Desculpe, mas não há nada aqui...
    q-btn(
      color="blue-5"
      unelevated
      no-caps
      label="Voltar"
      @click="$router.push('/')"
    ).go-back-btn.q-mt-lg
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="sass" scoped>
.sad-img
  width: 30vw
  max-width: 150px

.label-404
  font-size: 40px
  line-height: 40px

.go-back-btn
  min-width: 200px
</style>
