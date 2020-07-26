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

          div.explanation.flex.items-center.image.q-mb-xl
            div.explanation__image.q-mr-md
              img(src="../statics/img/spotify.png").full-width.animate-pop
            div.explanation__image--operator.q-mr-md
              img(src="../statics/img/plus.png").full-width
            div.explanation__image.flex.items-center.q-mr-md
              img(:src="userImage").user.full-width.animate-pop
            div.explanation__image--operator.q-mr-md
              img(src="../statics/img/equal.png").full-width
            div.explanation__image
              img(src="../statics/favicon/android-chrome-192x192.png").full-width.animate-pop

          div
            | O&nbsp;
            b My Festival&nbsp;
            | é um aplicativo que utiliza os seus artistas mais ouvidos do Spotify nos últimos 6 meses e cria um banner de festival customizado de acordo com as suas preferências.
            | É possível escolher o nome, local, cores, tema e outros detalhes do seu festival. Para iniciar, basta clicar no botão abaixo!

      div.column.text-white.text-center.items-center.text-grey-7
        bubble-button(
          label="Iniciar"
          @click.native="$router.push('/configs')"
        ).init-button.text-prater.q-mb-lg
        div.bottom-text.column
          div
            | O&nbsp;
            b My Festival&nbsp;
            | não é uma aplicação oficial do Spotify.
          div Para desenvolvimento deste projeto foi utilizado a&nbsp;
            a(href="https://developer.spotify.com/documentation/web-api/" target="_blank") Spotify Web API
            | .
    img(src="../statics/icons/speaker.svg").speaker-svg.absolute
    img(src="../statics/icons/speaker.svg").speaker-svg--right.absolute
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
    },
    userImage () {
      let images = (this.profile || {}).images || []
      return images[0].url
    }
  }
}
</script>

<style lang="sass" scoped>
.welcome
  background: $grey-4
  position: relative

  &__container
    max-width: 1110px

.explanation
  &__image
    width: 80px

    @media (max-width: 700px)
      width: 60px
    @media (max-width: 450px)
      width: 45px

    .user
      border-radius: 80px

    &--operator
      width: 25px
      @media (max-width: 450px)
        width: 15px

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
  @media (max-width: 650px)
    max-width: 80%
  @media (max-width: 450px)
    max-width: 95%
  @media (max-width: 360px)
    font-size: 13px

  &__subtitle
    font-size: 20px
    line-height: 20px
    max-width: 80%
    @media (max-width: 650px)
      max-width: 100%
    @media (max-width: 360px)
      font-size: 16px
      line-height: 16px

.init-button
  max-width: 150px

.bottom-text
  font-size: 12px
  line-height: 16px

  a
    color: #45BD59

    &:hover
      color: #369646 !important

    &:visited
      color: #45BD59

.speaker-svg
  max-width: 150px
  left: 0
  bottom: -20px
  transform: scaleX(-1)

  @media (max-width: 850px)
    max-width: 110px
  @media (max-width: 650px)
    max-width: 80px
  @media (max-width: 550px)
    display: none

  &--right
    max-width: 150px
    right: 0
    bottom: -20px

    @media (max-width: 850px)
      max-width: 110px
    @media (max-width: 650px)
      max-width: 80px
    @media (max-width: 550px)
      display: none
</style>
