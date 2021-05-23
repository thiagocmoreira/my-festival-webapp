<template lang="pug">
  q-page(:style="backgroundColor").headliners
    div.headliners__container.column.items-center.justify-between.no-wrap.q-pa-lg.scroll
      div
      div.content.column.items-center.text-grey-10.no-wrap
        div.title.text-prater.q-mb-xl.text-center Os headliners do {{ festivalName || 'festival' }} são...
        div.headliners-list.flex.flex-center.full-width.q-mb-xl
          div(v-for="headliner of headliners").headliner.flex.items-center.q-mr-xl
            q-img(:src="headliner.images[0].url" :ratio="1").headliner__image.animate-pop
            div.headliner__name.text-white.text-prater.q-mt-md
              | {{ headliner.name }}
        div.others-artists
          q-img(
            v-for="(image, index) of otherArtistsPhotos"
            :key="index"
            :src="image"
            :ratio="1"
          ).others-artists__image.animate-pop
        div.others-artists__text.q-mt-md.text-prater.q-mb-xl Além disso terá {{ otherArtistsNames }} e outros!
      festival-preview-svg
      div
        bubble-button(
          label="Ver a lineup completa"
          animate-none
          @click.native="$router.push('/lineup')"
        ).text-prater
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HeadlinersPage',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    FestivalPreviewSvg: () => import('../components/headliners/FestivalPreviewSvg')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalTheme',
      'festivalArtists',
      'festivalArtistsNames'
    ]),
    backgroundColor () {
      return { background: ((this.festivalColorPalette || [])[1] || '#64B5F6') }
    },
    headliners () {
      return this.festivalArtists.slice(0, 3)
    },
    otherArtistsPhotos () {
      return this.festivalArtists
        .slice(3, 7)
        .map(a => a.images[0].url)
    },
    otherArtistsNames () {
      let others = this.festivalArtistsNames.slice(3, 7)
      let formatted = others.join(', ')
      return formatted
    }
  },
  methods: {
    ...mapActions('festivalConfigs', [
      'setTopArtists'
    ])
  }
}
</script>

<style lang="sass" scoped>
.headliners
  position: relative

  &__container
    height: 100vh
    max-height: 100vh

.title
  font-size: 2em

  @media (max-width: 960px)
    text-align: center
    line-height: 1.4em

  @media (max-width: 570px)
    max-width: 80%
    margin-top: 16px !important

.content
  z-index: 2

.headliners-list
  @media (max-width: 500px)
    flex-direction: column !important
    padding: 0 24px

.headliner
  width: 250px
  flex-direction: column

  @media (max-width: 960px)
    width: 150px

  @media (max-width: 500px)
    flex-direction: row
    width: 100%
    flex-wrap: nowrap
    margin: 0 0 24px 0

  @media (max-width: 400px)
    margin: 0 0 16px 0

  &:last-of-type
    margin: 0

  &__image
    border-radius: 100px
    box-shadow: -20px 0 0 0 rgba(0, 0, 0, 0.05)
    max-width: 200px

    @media (max-width: 500px)
      max-width: 100px

    @media (max-width: 400px)
      max-width: 100px

  &__name
    font-size: 24px
    text-align: center

    @media (max-width: 500px)
      margin: 0 0 0 24px !important
      flex: 1
      text-align: start
      line-height: 28px

.others-artists
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 24px

  @media (max-width: 400px)
    grid-gap: 16px
  //   grid-template-columns: 1fr 1fr

  &__image
    width: 90px
    border-radius: 90px
    box-shadow: -10px 0 0 0 rgba(0, 0, 0, 0.05)

    @media (max-width: 960px)
      width: 70px

    @media (max-width: 400px)
      box-shadow: -7px 0 0 0 rgba(0, 0, 0, 0.05)
      width: 60px

  &__text
    font-size: 18px

    @media (max-width: 960px)
      max-width: 70%
      text-align: center

    @media (max-width: 410px)
      max-width: 90%

</style>
