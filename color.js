var r, g, b
r = g = b = 0

function randomise () {
  r = Math.floor(Math.random() * 256)
  g = Math.floor(Math.random() * 256)
  b = Math.floor(Math.random() * 256)
}

function revert () {
  r = g = b = 0
}

function rgb (r, g, b) {
  var rgb = [
    (r % 256).toString(16),
    (g % 256).toString(16),
    (b % 256).toString(16)
  ]

  rgb = rgb.map(col => (col.length === 1 ? `0${col}` : col))

  return `#${rgb.join('')}`
}

module.exports = {
  randomise,
  revert,
  get primary () {
    return rgb(r, g, b)
  },
  get secondary () {
    return rgb(255 - g, 255 - b, 255 - r)
  }
}
