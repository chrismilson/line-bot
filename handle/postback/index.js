const keywords = {
  projects: require('./projects'),
  tour: require('./tour'),
  nothing: require('./nothing'),
  random: require('./random')
}

function postback (client, event) {
  if (keywords[event.postback.data] !== undefined) {
    keywords[event.postback.data](client, event)
  }

  throw new Error(`Unknown postback: ${JSON.stringify(event)}`)
}

module.exports = postback
