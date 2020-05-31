<template lang="pug">
  q-page.lineup.column.items-center.justify-between.q-pa-xl.scroll.no-wrap
    div(:style="bgColor").container.column.items-center.animate-fade
      div(:class="classes.name").lineup__name.text-lolapeluza.text-bold.full-width.text-center
        | {{ festivalName || 'Meu festival' }}
      div.column
        three-mountains(
          v-if="festivalTheme === 'Montanhas'"
          :colors="festivalColorPalette"
        )
        div.lineup__artists.column.full-width.text-prater.text-white
          div(:class="classes.headliners").flex.justify-center
            span(
              v-for="(headliner, index) of headliners"
              :class="{ 'headliner': index <= 2 }"
            ).artist
              span {{ headliner }}
              span(
                v-if="index !== 2"
                :style="dotColor"
              ).q-px-sm .
          div(:class="classes.artists").flex.justify-center
            span(v-for="(artist, index) of otherArtists").artist
              span {{ artist }}
              span(
                v-if="index !== otherArtists.length - 1"
                :style="dotColor"
              ).q-px-sm .
    //- div.q-mt-xl
    //-   bubble-button.text-prater
    //-     template(#content)
    //-       div.flex.flex-center
    //-         q-icon(name="mdi-download" size="28px").q-mr-sm
    //-         div Baixar imagem
</template>

<script>
import { mapGetters } from 'vuex'
import artists from '../statics/top_artists.json'

export default {
  name: 'Lineup',
  components: {
    BubbleButton: () => import('../components/common/BubbleButton'),
    ThreeMountains: () => import('../components/svgs/mountains/ThreeMountains')
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
      return this.topArtists.items.map(t => t.name).slice(0, 3)
    },
    otherArtists () {
      let length = this.topArtists.items.length
      return this.topArtists.items.map(t => t.name).slice(3, length)
    },
    bgColor () {
      return {
        background: (this.festivalColorPalette || [])[0] || 'blue-4'
      }
    },
    dotColor () {
      return {
        color: (this.festivalColorPalette || [])[1] || 'blue-4'
      }
    },
    classes () {
      let classes = {
        'sem tema': {
          name: ['q-pa-xl'],
          headliners: ['q-px-md', 'q-pt-xl'],
          artists: ['q-px-xl', 'q-pb-xl']
        },
        montanhas: {
          name: ['montain__name'],
          headliners: ['montain__headliners'],
          artists: ['montain__artists']
        }
      }
      let theme = (this.festivalTheme || 'Sem tema').toLowerCase()
      return classes[theme]
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup
  background: $grey-1
  max-height: 100vh
  overflow-y: scroll

  .container
    width: 800px

  &__name
    font-size: 70px
    line-height: 60px
    letter-spacing: 0.03em !important
    color: #272928
    // margin-bottom: 50px

  &__artists
    background: #272928
    text-align: center

.artist
  font-size: 24px

.headliner
  font-size: 36px

// Mountains
.montain__name
  padding: 70px 48px 30px 48px

.montain__headliners
  padding: 0 25px

.montain__artists
  padding: 0 100px 70px 100px
</style>
