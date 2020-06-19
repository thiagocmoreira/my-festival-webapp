<template>
  <svg id="Lightning" data-name="Lightning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.19 557.38">
    <polygon :style="{ 'fill': color }" points="385.28 12.52 592.13 0 497.15 211.61 609.89 215.28 434.69 523.37 452.95 301 307.3 293.5 385.28 12.52"/>
    <polygon :style="{ 'fill': color }" points="0 249.79 127.31 165.63 144.65 335.56 217.9 296.39 219.61 557.38 149.37 408.85 53.73 457.69 0 249.79"/>
    <polygon :style="{ 'fill': color }" points="800.66 210.55 937.19 278.73 798.71 378.71 869.25 422.57 644.08 554.54 737.6 419.45 647.48 361.04 800.66 210.55"/>
  </svg>
</template>

<script>
export default {
  name: 'Cloud',
  props: {
    color: {
      type: String,
      default: '#FFCC4D'
    }
  }
}
</script>
