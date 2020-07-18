<template lang="pug">
  q-page(:style="backgroundColor").headliners.column.items-center.justify-between.q-pa-lg.relative
    div
    div.content.column.items-center.text-grey-10
      div.title.text-prater.q-mb-xl Os headliners do {{ festivalName || 'festival' }} são...
      div.flex.q-mb-xl
        div(v-for="headliner of headliners").headliner.column.items-center.q-mr-xl
          q-img(:src="headliner.images[0].url").headliner__image.animate-pop
          div.headliner__name.text-white.text-prater.text-center.q-mt-md
            | {{ headliner.name }}
      div.others-artists.flex.flex-center
        q-img(
          v-for="(image, index) of otherArtistsPhotos"
          :key="index"
          :src="image"
        ).others-artists__image.animate-pop.q-mr-lg
      div.others-artists__text.q-mt-md.text-prater Além disso terá {{ otherArtistsNames }} e outros!
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
import artists from '../statics/top_artists.json'

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
  },
  mounted () {
    if (!this.festivalArtists.length) {
      this.setTopArtists(artists.items)
    }
  }
}
</script>

<style lang="sass" scoped>
.headliners
  background: $blue-4
  position: relative

.title
  font-size: 35px

.content
  z-index: 2

.headliner
  width: 200px

  &:last-of-type
    margin: 0

  &__image
    border-radius: 100px
    box-shadow: -20px 0 0 0 rgba(0, 0, 0, 0.05)

  &__name
    font-size: 24px

.others-artists
  &__image
    width: 90px
    border-radius: 90px
    box-shadow: -10px 0 0 0 rgba(0, 0, 0, 0.05)

    &:last-of-type
      margin: 0

  &__text
    font-size: 18px
</style>
