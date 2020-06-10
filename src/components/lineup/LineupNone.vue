<template lang="pug">
  div.lineup__container.column.items-center.animate-fade
    lineup-festival-name
    div.column
      lineup-artists-list(
        :colors="colors"
        :dark="festivalDark"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LineupNone',
  components: {
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupArtistsList: () => import('../lineup/LineupArtistsList')
  },
  computed: {
    ...mapGetters('festivalConfigs', [
      'festivalColorPalette',
      'festivalDark'
    ]),
    colors () {
      return this.festivalColorPalette.slice().reverse()
    }
  },
  methods: {
    ...mapActions('festivalConfigs', ['setFestivalDark'])
  },
  mounted () {
    this.setFestivalDark(true)
  }
}
</script>
