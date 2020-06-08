<template lang="pug">
  div(:style="bgColor" :class="alignClassDiv").column.full-width
    div(:class="[classes, alignClassName]").container.text-lolapeluza.text-bold.column.flex
      div.column
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
      default: 'center center'
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
        background: (this.colors || []).length ? this.colors[0] : (this.festivalColorPalette || [])[0],
        color: this.dark ? '#272928' : '#fff'
      }
    },
    alignClassDiv () {
      let position = this.titlePosition.split(' ')[0]
      return this.getAlignClassName(position)
    },
    alignClassName () {
      let position = this.titlePosition.split(' ')[1]
      return this.getAlignClassName(position)
    }
  },
  methods: {
    getAlignClassName (position) {
      if (position === 'center') {
        return 'items-center'
      } else if (position === 'left') {
        return 'items-start'
      } else if (position === 'right') {
        return 'items-end'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  width: 595px

.name
  font-size: 70px
  line-height: 60px
  letter-spacing: 3px

.location
  line-height: 26px
  margin-top: 5px
  font-size: 26px
</style>
