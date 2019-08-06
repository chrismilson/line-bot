function shloo (client, event) {
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'You damn right shloo.'
  })
}

module.exports = shloo
