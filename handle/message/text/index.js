const keyword = {
  shloo: require('./shloo')
}

function text (client, event) {
  if (keyword[event.message.text] !== undefined) {
    return keyword[event.message.text](client, event)
  }

  return client.replyMessage(
    event.replyToken,
    {
      type: 'text',
      text: `
        I didn'nt quite get that...
        Perhaps try one of the quick replies!
      `,
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'Boom',
              text: 'Slim shayz boiiiiiiii'
            }
          }
        ]
      }
    }
  )
}

module.exports = text
