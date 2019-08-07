const express = require('express')
const line = require('@line/bot-sdk')
const handle = require('./handle')

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
}

const app = express()
const port = process.env.PORT || 3000
const client = new line.Client(config)

app.use(express.static('assets'))

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(event => handle(client, event)))
    .then(reply => res.json(reply))
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
