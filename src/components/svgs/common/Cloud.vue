<template lang="pug">
  svg(
    version="1.1"
    id="Cloud"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 723.6 381.3"
    style="enable-background:new 0 0 723.6 381.3;"
    xml:space="preserve"
  )
    path(
      :style="{ 'fill': color }"
      d="M362.6,1.6c60.7,0,112.6,38.1,132.9,91.7c50.2,0.7,93.6,32.3,114.9,78.3c6.1-1.1,12.5-1.7,19-1.7 c50.9,0,92.2,36.3,92.2,81.1s-41.3,81.1-92.2,81.1c-11.9,0-23.3-2-33.8-5.6c-24,32.5-60.6,53.3-101.7,53.3 c-28.6,0-55.1-10.1-76.7-27.2C401.1,365,381,372.4,359,372.4c-21.1,0-40.6-6.9-56.4-18.5c-23.4,13.5-52.5,21.6-84.1,21.6 c-67.6,0-124.1-36.9-137.5-86c-1.5,0.1-3,0.1-4.5,0.1c-41.3,0-74.8-29.9-74.8-66.7s33.5-66.7,74.8-66.7c11.1,0,21.6,2.2,31.1,6 c15.5-32.1,48.3-54.2,86.3-54.2c10.5,0,20.6,1.7,30,4.8C238.1,49.1,294.8,1.6,362.6,1.6z").cloud-path
</template>

<script>
export default {
  name: 'Cloud',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="sass" scoped>
.cloud-path
  fill-rule: evenodd
  lip-rule: evenodd
  stroke-width: 3
  stroke-linecap: round
  stroke-linejoin: round
  stroke-miterlimit: 22.9256
</style>
