import { chunk as _chunk } from 'lodash-es'

export function setFestivalName ({ commit }, name) {
  commit('setFestivalName', name)
}

export function setFestivalColorPalette ({ commit }, colorPalette) {
  commit('setFestivalColorPalette', colorPalette)
}

export function setFestivalTheme ({ commit }, theme) {
  commit('setFestivalTheme', theme)
}

export function setFestivalLocation ({ commit }, location) {
  commit('setFestivalLocation', location)
}

export function setFestivalDark ({ commit }, dark) {
  commit('setFestivalDark', dark)
}

export function setFestivalNameColor ({ commit }, nameColor) {
  commit('setFestivalNameColor', nameColor)
}

export function setFestivalLineupDays ({ commit }, lineupDays) {
  commit('setFestivalLineupDays', lineupDays)
}

export function setTopArtists ({ commit }, data) {
  let artists = data
  let artistsNames = data.map(t => t.name)
  let days = { day1: [], day2: [], day3: [] }
  for (let chunk of _chunk(artistsNames, 3)) {
    days.day1.push(chunk[0])
    days.day2.push(chunk[1])
    if (chunk[2]) {
      days.day3.push(chunk[2])
    }
  }
  commit('setTopArtists', { artists, artistsNames, artistsNamesPerDay: Object.values(days) })
}
