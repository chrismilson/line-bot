const color = require('../../color')

function random (client, event) {
  color.randomise()
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'I feel funny....'
  })
}

module.exports = random
