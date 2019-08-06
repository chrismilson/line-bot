const keyword = {
  shloo: require('./shloo')
}

function text (client, event) {
  if (keyword[event.message.text.toLowerCase()] !== undefined) {
    return keyword[event.message.text.toLowerCase()](client, event)
  }

  return client.replyMessage(
    event.replyToken,
    {
      type: 'text',
      text: [
        'I didn\'t quite get that...',
        'Perhaps try one of these!'
      ].join('\n'),
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'Boom',
              text: 'Shloo'
            }
          }
        ]
      }
    }
  )
}

module.exports = text
