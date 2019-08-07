function tour (client, event) {
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'I can\'t do much yet...'
  })
}

module.exports = tour
