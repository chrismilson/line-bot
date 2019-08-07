const color = require('../../../color')

function help (client, event) {
  return client.replyMessage(event.replyToken, {
    type: 'flex',
    altText: 'Let me help you!',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            align: 'center',
            color: color.secondary,
            size: 'lg',
            weight: 'bold',
            text: 'Shlappas Help'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'image',
                url: 'https://shlappas-line-bot.herokuapp.com/images/butter.png'
              },
              {
                type: 'text',
                wrap: true,
                text: 'Let me help you!\nPlease choose one of these buttons!'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                style: 'primary',
                color: color.primary,
                action: {
                  type: 'postback',
                  label: 'Projects',
                  data: 'projects',
                  displayText: 'I want to see your projects.'
                }
              },
              {
                type: 'button',
                style: 'primary',
                color: color.primary,
                action: {
                  type: 'postback',
                  label: 'Tour',
                  data: 'tour',
                  displayText: 'Show me what you can do.'
                }
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                style: 'primary',
                color: color.primary,
                action: {
                  type: 'postback',
                  label: 'Nothing',
                  data: 'nothing',
                  displayText: 'I\'m fine thanks'
                }
              },
              {
                type: 'button',
                style: 'primary',
                color: color.primary,
                action: {
                  type: 'postback',
                  label: 'Random',
                  data: 'random',
                  displayText: 'Change color!'
                }
              }
            ]
          }
        ]
      },
      styles: {
        header: {
          backgroundColor: color.primary
        }
      }
    }
  })
}

module.exports = help
