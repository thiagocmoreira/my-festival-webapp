<template lang="pug">
  q-dialog(:value="value" persistent)
    div.change-general-configs.column.bg-grey-1.text-grey-10.q-pa-lg.items-center
      div(
        v-for="(config, index) of configs"
        :key="index"
      ).config-item.q-mb-lg
        div.config-item__name.text-prater.text-bold.text-center
          | {{ config.name }}
        div.flex.flex-center.q-mt-sm
          q-btn(
            v-for="(option, index) of config.options"
            :key="index"
            :label="option.label"
            no-caps
            unelevated
            :color="option.selected ? 'grey-3' : 'grey-9'"
            :text-color="option.selected ? 'grey-5' : 'grey-1'"
            @click="setAction(config.action, option.value)"
          ).config-item__option.text-prater
      div.flex.flex-center.q-mt-sm
        q-btn(
          unelevated
          no-caps
          :style="confirmBtnStyle"
          @click="$emit('input', false)"
        ).confirm-button.text-prater Ok
</template>

<script>
import { mapGetters } from 'vuex'
import Color from 'color'

export default {
  name: 'ChangeGeneralConfigsDialog',
  props: {
    value: Boolean
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays'
    ]),
    confirmBtnStyle () {
      let color = Color((this.festivalColorPalette || [])[0] || '#42a5f5')
      return {
        background: color,
        color: color.isDark() ? '#fafafa' : '#272928'
      }
    },
    configs () {
      return [
        {
          name: 'Fundo do cartaz',
          options: [
            {
              label: 'Claro',
              value: false,
              selected: this.festivalDark
            },
            {
              label: 'Escuro',
              value: true,
              selected: !this.festivalDark
            }
          ],
          action: 'festivalConfigs/setFestivalDark'
        },
        {
          name: 'Divisão da lineup',
          options: [
            {
              label: 'Todos',
              value: false,
              selected: this.festivalLineupDays
            },
            {
              label: '3 dias',
              value: true,
              selected: !this.festivalLineupDays
            }
          ],
          action: 'festivalConfigs/setFestivalLineupDays'
        }
      ]
    }
  },
  methods: {
    setAction (action, value) {
      this.$store.dispatch(action, value)
    }
  }
}
</script>

<style lang="sass" scoped>
.change-general-configs
  border-radius: 50px
  min-width: 300px

.config-item
  &__name
    font-size: 20px
    margin: 0

  &__option
    padding: 2px 15px

    &:first-of-type
      border-radius: 20px 0 0 20px

    &:last-of-type
      border-radius: 0 20px 20px 0

.confirm-button
  padding: 2px 15px
  border-radius: 20px
</style>
