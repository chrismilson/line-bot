var r = 1
var g = 1
var b = 1

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
  get primary () {
    return rgb(r, g, b)
  },
  get secondary () {
    return rgb(255 - r, 255 - g, 255 - b)
  }
}
