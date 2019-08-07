function projects (client, event) {
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'I am a robot with no projects.'
  })
}

module.exports = projects
