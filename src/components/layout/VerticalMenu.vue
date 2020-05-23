<template lang="pug">
  div.vertical-menu.column.q-pa-xl.text-white.bg-grey-9
    h1.title.text-bold.text-uppercase My festival
    div.menu-items.q-mt-xl
      div.text-uppercase Início
      div.text-uppercase Sobre
</template>

<script>
export default {
  name: 'VerticalMenu'
}
</script>

<style lang="sass" scoped>
.vertical-menu
  width: 270px

.title
  font-size: 24px
  line-height: 26px
  font-family: PraterSansBold
  letter-spacing: 0.05em
  margin: 0
</style>
