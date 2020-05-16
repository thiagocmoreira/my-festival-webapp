<template lang="pug">
  q-layout(view="lHh Lpr lFf").main-layout
    //- vue-particles(
    //-   color="#fff"
    //-   shape-type="edge"
    //-   :particles-number="6"
    //-   :particle-size="240"
    //-   :particle-opacity="0.006"
    //-   :line-linked="false"
    //-   :move-speed="3"
    //-   hover-mode="none"
    //-   :click-effect="false"
    //- ).particles
    q-page-container.container.flex
      //- vertical-menu
      div.flex-1
        router-view
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {
  name: 'MainLayout',
  components: {
    VerticalMenu: () => import('../components/layout/VerticalMenu')
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
.particles-js-canvas-el
  height: 99vh !important
</style>

<style lang="sass" scoped>
.main-layout
  background: $grey-1
  position: relative
  height: 100vh
  overflow: hidden
  // pointer-events: none

.particles
  position: absolute
  top: 0
  width: 100%

.container
  position: absolute
  top: 0
  width: 100%
  height: 100vh
</style>
