const keywords = [
  {
    name: 'Shloo Easter Egg',
    match: /^shloo$/i,
    handler: require('./shloo')
  },
  {
    name: 'Helper',
    match: /^h(elp)?$/i,
    handler: require('./help')
  }
]

function text (client, event) {
  for (var i = 0; i < keywords.length; i++) {
    if (keywords[i].match.test(event.message.text)) {
      return keywords[i].handler(client, event)
    }
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
