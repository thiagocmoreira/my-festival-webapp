import Color from 'color'

function lightenColor (color, percentage) {
  color = Color(color)
  return color.lighten(percentage).hex()
}

function darkenColor (color, percentage) {
  color = Color(color)
  return color.darken(percentage).hex()
}

export {
  lightenColor,
  darkenColor
}
