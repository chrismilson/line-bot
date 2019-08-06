function handleText (client, event) {
  console.log(message.text)
  return client.replyMessage(event.replyToken, 'Shmoo')
}

function Handler (client, event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return console.log('Test hook recieved: ' + JSON.stringify(event.message))
  }

  if (event.type === 'message' && event.message.type === 'text') {
    handleText(client, event)
  } else {
    throw new Error(`Unknown event: ${JSON.stringify(event)}`)
  }
}

export default Handler
