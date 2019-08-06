const express = require('express')
const line = require('@line/bot')

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
}

const app = express()
const port = process.env.PORT || 3000
const client = new line.Client(config)

var handleEvent = function (event) {
  console.log(event)
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }

  const echo = { type: 'text', text: event.message.text }

  return client.replyMessage(event.replyToken, echo)
}

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(reply => res.json(reply))
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})