const handle = {
  message: require('./message'),
  postback: require('./postback')
  // follow: require('./follow'),
  // unfollow: require('./unfollow'),
  // join: require('./join'),
  // leave: require('./leave')
}

function Handler (client, event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return console.log('Test hook recieved: ' + JSON.stringify(event.message))
  }

  if (handle[event.type] !== undefined) {
    return handle[event.type](client, event)
  } else {
    throw new Error(`Unknown event: ${JSON.stringify(event)}`)
  }
}

module.exports = Handler
