export function festivalName (state) {
  return state.name
}

export function festivalColorPalette (state) {
  return state.colorPalette
}

export function festivalTheme (state) {
  return state.theme
}

export function festivalLocation (state) {
  return state.location
}

export function festivalDark (state) {
  return state.dark
}

export function festivalNameColor (state) {
  return state.nameColor
}

export function festivalLineupDays (state) {
  return state.lineupDays
}

export function festivalArtists (state) {
  return state.artists
}

export function festivalArtistsNames (state) {
  return state.artistsNames
}

export function festivalArtistsNamesPerDay (state) {
  return state.artistsNamesPerDay
}

export function lineupWallTexture (state) {
  return state.wallTexture
}

export function hasFestivalConfigs (state) {
  return state.name.length &&
    state.colorPalette.length &&
    state.theme.length &&
    state.nameColor.length
}
