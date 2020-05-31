<template lang="pug">
  q-page.headliners.column.items-center.justify-between.q-pa-lg
    div
    div.column.items-center
      div.title.text-prater.q-mb-xl Os headliners do {{ festivalName || 'festival' }} são...
      div.flex
        div(v-for="headliner of headliners").headliner.column.items-center.q-mr-xl
          q-img(:src="headliner.images[0].url").headliner__image.animate-pop
          div.headliner__name.text-white.text-prater.q-mt-md {{ headliner.name }}
      div.others-artists.q-mt-xl.text-prater Além disso terá {{ otherArtists }} e outros!
    div
      bubble-button(
        label="Ver a lineup completa"
        @click.native="$router.push('/lineup')"
      ).text-prater
</template>

<script>
import { mapGetters } from 'vuex'

import artists from '../statics/top_artists.json'
export default {
  name: 'Headliners',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton')
  },
  data () {
    return {
      topArtists: artists
    }
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalName',
      'festivalColorPalette',
      'festivalTheme'
    ]),
    headliners () {
      return this.topArtists.items.slice(0, 3)
    },
    otherArtists () {
      let others = this.topArtists.items.slice(3, 7).map(t => t.name)
      let formatted = others.join(', ')
      return formatted
    }
  }
}
</script>

<style lang="sass" scoped>
.headliners
  background: $blue-4

.title
  font-size: 35px

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
  font-size: 18px
</style>
