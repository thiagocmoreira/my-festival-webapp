<template lang="pug">
  div(:style="bgColor" :class="alignClass").column.full-width
    div(:class="classes").text-lolapeluza.text-bold.column
      div.name {{ festivalName }}
      div(v-if="festivalLocation.length").location.text-prater.text-bold.text-right.text-uppercase
        | {{ festivalLocation }}
    slot
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineupFestivalName',
  props: {
    colors: Array,
    classes: {
      type: [Array, String],
      default () {
        return ['q-pa-xl']
      }
    },
    dark: {
      type: Boolean,
      default: true
    },
    titlePosition: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalName',
      'festivalLocation'
    ]),
    bgColor () {
      return {
        background: this.colors.length ? this.colors[0] : (this.festivalColorPalette || [])[0],
        color: this.dark ? '#272928' : '#fff'
      }
    },
    alignClass () {
      if (this.titlePosition === 'center') {
        return 'items-center'
      } else if (this.titlePosition === 'left') {
        return 'items-start'
      } else if (this.titlePosition === 'right') {
        return 'items-end'
      } else {
        return ''
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

.location
  line-height: 26px
  margin-top: 5px
  font-size: 26px
</style>
