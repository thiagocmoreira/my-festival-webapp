export function setFestivalName (state, name) {
  state.name = name
}

export function setFestivalColorPalette (state, colorPalette) {
  state.nameColor = state.dark ? '#FFFFFF' : '#272928'
  state.colorPalette = colorPalette
}

export function setFestivalTheme (state, theme) {
  state.nameColor = state.dark ? '#FFFFFF' : '#272928'
  state.theme = theme
}

export function setFestivalLocation (state, location) {
  state.location = location
}

export function setFestivalDark (state, dark) {
  state.nameColor = dark ? '#FFFFFF' : '#272928'
  state.dark = dark
}

export function setFestivalNameColor (state, nameColor) {
  state.nameColor = nameColor
}

export function setFestivalLineupDays (state, lineupDays) {
  state.lineupDays = lineupDays
}

export function setTopArtists (state, data) {
  for (let key of Object.keys(data)) {
    state[key] = data[key]
  }
}
