const color = require('color')

function random (client, event) {
  color.randomise()
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'Not even implemented yet. disappointing.'
  })
}

module.exports = random
