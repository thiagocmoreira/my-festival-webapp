<template lang="pug">
  q-layout(view="lHh Lpr lFf").main-layout
    vue-particles(
      color="#fff"
      shape-type="edge"
      :particles-number="3"
      :particle-size="240"
      :particle-opacity="0.01"
      :line-linked="false"
      :move-speed="3"
      hover-mode="none"
      :click-effect="false"
    ).particles
    q-page-container.container
      router-view
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {
  name: 'MainLayout',

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
  background: $grey-10
  position: relative
  height: 100vh
  // overflow: hidden
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
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  z-index: 1000
</style>
