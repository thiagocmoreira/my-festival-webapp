<template lang="pug">
  q-page.welcome.column.flex-center.q-pa-lg
    div.welcome__container.column.items-center.justify-between.flex-1
      div

      div.column.items-center
        div.hello.flex.items-center.q-mb-md.text-grey-10
          div.hello__title.text-prater
            | {{ hello }}
          img(src="../statics/img/hello.gif").hello__image.q-ml-md

        div.texts.column.items-center.text-center.text-grey-10
          div.texts__subtitle.text-prater.q-mb-xl
            | E se os seus artistas preferidos se juntassem em um festival de música, como seria?

          div
            | O&nbsp;
            b My Festival&nbsp;
            | é um aplicativo que utiliza os seus artistas mais ouvidos do Spotify nos últimos 6 meses e monta um banner de festival de acordo com as suas preferências.
            | É possível escolher o nome, local, cores, tema e outros detalhes do seu festival. Para iniciar basta clicar no botão abaixo!

      div.column.text-white.text-center.items-center
        bubble-button(
          label="Iniciar"
          @click.native=""
        ).init-button.text-prater.q-mb-lg
        div.bottom-text.column
          div
            | O&nbsp;
            b My Festival&nbsp;
            | não é uma aplicação oficial do Spotify.
          div Para desenvolvimento deste projeto foi utilizada sua&nbsp;
            a(href="https://developer.spotify.com/documentation/web-api/") API oficial
            | .
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WelcomePage',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton')
  },
  computed: {
    ...mapGetters('user', ['profile']),
    hello () {
      let name = (this.profile || {}).name || ''
      name = name.split(' ')[0]
      return name.length ? `Olá, ${name}!` : 'Olá'
    }
  }
}
</script>

<style lang="sass" scoped>
.welcome
  background: #52A8E9

  &__container
    max-width: 1110px

.hello
  &__title
    font-size: 32px
    line-height: 36px
    letter-spacing: 1px
    margin: 0

  &__image
    max-width: 40px

.texts
  max-width: 60%

  &__subtitle
    font-size: 20px
    line-height: 20px
    max-width: 80%

.init-button
  max-width: 150px

.bottom-text
  font-size: 12px
  line-height: 16px

  a
    color: white

    &:visited
      color: white
</style>
