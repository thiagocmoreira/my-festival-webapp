<template>
<svg id="Curve" data-name="Curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.46 577.64">
  <path
    :style="{ 'fill': color }"
    d="M692.31,251.05c-35-53.54-44.43-92.29-60.54-155.37l1,288.82-1,288.82c16.11-63.08,28.71-98.53,60.54-155.37,28.1-50.16,41.92-93.92,41.92-133.45C734.23,327,719.65,292.79,692.31,251.05Z" transform="translate(-631.77 -95.68)"
  />
</svg>
</template>

<script>
export default {
  name: 'Spear',
  props: {
    color: {
      type: String,
      default: '#7c3548'
    }
  }
}
</script>
