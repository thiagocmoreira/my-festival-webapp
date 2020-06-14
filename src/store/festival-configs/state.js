import _chunk from 'lodash-es/chunk'
import artists from '../../statics/top_artists.json'

let topArtists = artists.items
let topArtistsNames = topArtists.map(t => t.name)
let days = { day1: [], day2: [], day3: [] }
for (let chunk of _chunk(topArtistsNames, 3)) {
  days.day1.push(chunk[0])
  days.day2.push(chunk[1])
  if (chunk[2]) {
    days.day3.push(chunk[2])
  }
}

export default function () {
  return {
    name: 'Meu festival',
    colorPalette: ['#AA767C', '#FFA686', '#FEC196'],
    theme: 'rock',
    location: 'Brasília',
    dark: true,
    artists: topArtists,
    artistsNames: topArtistsNames,
    artistsNamesPerDay: Object.values(days)
  }
}
