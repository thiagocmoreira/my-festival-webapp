<template lang="pug">
  div(:class="textClass").lineup-user-name.text-center
    span.lineup-user-name__by.text-silkysmoke por&nbsp;
    span.lineup-user-name__name.text-silkysmoke {{ userName }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineupUserName',
  computed: {
    ...mapGetters('user', [
      'profile'
    ]),
    ...mapGetters('festivalConfigs', [
      'festivalDark'
    ]),
    userName () {
      const name = (this.profile || {}).name || ''
      return name
    },
    textClass () {
      return this.festivalDark ? 'text-grey-7' : 'text-grey-5'
    }
  }
}
</script>

<style lang="sass" scoped>
.lineup-user-name
  &__by
    font-size: 24px

  &__name
    font-size: 30px
</style>
