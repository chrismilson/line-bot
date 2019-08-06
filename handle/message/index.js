const handle = {
  text: require('./text')
}

function message (client, event) {
  if (handle[event.message.type] !== undefined) {
    return handle[event.message.type](client, event)
  } else {
    throw new Error(`Unknown message: ${JSON.stringify(message)}`)
  }
}

module.exports = message
