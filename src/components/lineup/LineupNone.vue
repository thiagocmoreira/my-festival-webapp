<template lang="pug">
  div.lineup__container.column.items-center.animate-fade
    lineup-festival-name
    div.column
      lineup-artists-list
</template>

<script>
export default {
  name: 'LineupNone',
  components: {
    LineupFestivalName: () => import('../lineup/LineupFestivalName'),
    LineupArtistsList: () => import('../lineup/LineupArtistsList')
  }
}
</script>
