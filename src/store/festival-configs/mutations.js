export function setFestivalName (state, name) {
  state.name = name
}

export function setFestivalColorPalette (state, colorPalette) {
  state.colorPalette = colorPalette
}

export function setFestivalTheme (state, theme) {
  state.theme = theme
}

export function setFestivalLocation (state, location) {
  state.location = location
}

export function setFestivalDark (state, dark) {
  state.dark = dark
}

export function setFestivalLineupDays (state, lineupDays) {
  state.lineupDays = lineupDays
}

export function setTopArtists (state, data) {
  for (let key of Object.keys(data)) {
    state[key] = data[key]
  }
}
