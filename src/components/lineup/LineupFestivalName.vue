<template lang="pug">
  div(:style="bgColor").column.full-width.items-center
    div(:class="classes").text-lolapeluza.text-bold.column
      div.name {{ festivalName || 'Meu festival' }}
      div.location.text-prater.text-bold.full-width.text-right.text-uppercase
        | Ceilândia
    slot
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineupFestivalName',
  props: {
    classes: {
      type: [Array, String],
      default () {
        return ['q-pa-xl']
      }
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalName'
    ]),
    bgColor () {
      return {
        background: (this.festivalColorPalette || [])[0] || 'blue-4'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.name
  font-size: 70px
  line-height: 60px
  letter-spacing: 3px
  color: #272928

.location
  line-height: 26px
  margin-top: 5px
  font-size: 26px
  color: #272928
</style>
