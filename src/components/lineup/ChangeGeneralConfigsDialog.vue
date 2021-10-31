<template lang="pug">
  q-dialog(:value="value" persistent)
    div.change-general-configs.column.bg-grey-1.text-grey-10.q-px-xl.q-py-lg.items-center
      div(
        v-for="(config, index) of configs"
        :key="index"
      ).config-item.q-mb-lg
        div.config-item__name.text-prater.text-bold.text-center
          | {{ config.name }}
        div.flex.flex-center.q-mt-sm
          template(v-if="config.manyOptions")
            div(
              v-for="(option, index) of config.options"
              @click="setAction(config.action, option.value)"
              :class="{ 'bg-grey-9': option.selected }"
            ).config-item__many-option.bg-grey-2.q-pa-sm.q-mr-sm.cursor-pointer
              div(:style="getOptionStyle('background', option.value)").content
          template(v-else)
            q-btn(
              v-for="(option, index) of config.options"
              :key="index"
              :label="option.label"
              no-caps
              unelevated
              :color="option.selected ? 'grey-3' : 'grey-9'"
              :text-color="option.selected ? 'grey-5' : 'grey-1'"
              :class="(option.class || [])"
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
  data () {
    return {
      nameColorOptions: ['#FFFFFF', '#272928']
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalNameFont',
      'festivalColorPalette',
      'festivalDark',
      'festivalLineupDays',
      'festivalNameColor',
      'lineupWallTexture',
      'userSignature'
    ]),
    confirmBtnStyle () {
      let color = Color((this.festivalColorPalette || [])[0] || '#42A5F5')
      return {
        background: color,
        color: color.isDark() ? '#FFFFFF' : '#272928'
      }
    },
    configs () {
      return [
        {
          name: 'Cor do título',
          options: [
            ...this.festivalColorPalette.map(c => {
              return {
                value: c,
                selected: c === this.festivalNameColor
              }
            }),
            ...this.nameColorOptions.map(c => {
              return {
                value: c,
                selected: c === this.festivalNameColor
              }
            })
          ],
          action: 'festivalConfigs/setFestivalNameColor',
          manyOptions: true
        },
        {
          name: 'Fonte do título',
          options: [
            {
              label: 'Lolapeluza',
              value: 'lolapeluza',
              selected: this.festivalNameFont !== 'lolapeluza',
              class: ['text-lolapeluza', 'name-font-btn']
            },
            {
              label: 'The Machinatos',
              value: 'themachinatos',
              selected: this.festivalNameFont !== 'themachinatos',
              class: ['text-themachinatos', 'name-font-btn']
            }
          ],
          action: 'festivalConfigs/setFestivalNameFont'
        },
        {
          name: 'Fundo do banner',
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
        },
        {
          name: 'Mostrar sua assinatura',
          options: [
            {
              label: 'Sim',
              value: true,
              selected: !this.userSignature
            },
            {
              label: 'Não',
              value: false,
              selected: this.userSignature
            }
          ],
          action: 'festivalConfigs/setUserSignature'
        }
        // {
        //   name: 'Textura na parede',
        //   options: [
        //     {
        //       label: 'Sim',
        //       value: true,
        //       selected: !this.lineupWallTexture
        //     },
        //     {
        //       label: 'Não',
        //       value: false,
        //       selected: this.lineupWallTexture
        //     }
        //   ],
        //   action: 'festivalConfigs/setLineupWallTexture'
        // }
      ]
    }
  },
  methods: {
    setAction (action, value) {
      this.$store.dispatch(action, value)
    },
    getOptionStyle (att, value) {
      let style = {}
      style[att] = value
      return style
    }
  }
}
</script>

<style lang="sass">
.name-font-btn
  font-size: 20px !important

  @media (max-width: 420px)
    width: 170px

    &:first-of-type
      border-radius: 30px 30px 0 0 !important

    &:last-of-type
      border-radius: 0 0 30px 30px !important
</style>

<style lang="sass" scoped>
.change-general-configs
  border-radius: 50px
  min-width: 320px

  @media (max-width: 510px)
    padding: 24px !important

.config-item
  &__name
    font-size: 20px
    margin: 0

  &__option
    padding: 2px 15px

    &:first-of-type
      border-radius: 30px 0 0 30px

    &:last-of-type
      border-radius: 0 30px 30px 0

  &__many-option
    border-radius: 25px

    .content
      border-radius: 25px
      width: 25px
      height: 25px

.confirm-button
  padding: 2px 15px
  border-radius: 20px
</style>
