function help (client, event) {
  return client.replyMessage(event.replyToken, {
    type: 'flex',
    altText: 'This is a flex message',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            align: 'center',
            color: '#FFFFFF',
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
                type: 'filler'
              },
              {
                type: 'image',
                url: 'https://shlappas-line-bot.herokuapp.com/assets/images/butter.png'
              },
              {
                type: 'text',
                wrap: true,
                text: 'Please choose one of these buttons!'
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
                color: '#000000',
                action: {
                  type: 'postback',
                  label: 'Button 1',
                  data: 'button 1 pressed',
                  displayText: 'Pressed!'
                }
              },
              {
                type: 'button',
                style: 'primary',
                color: '#000000',
                action: {
                  type: 'postback',
                  label: 'Button 2',
                  data: 'button 2 pressed',
                  displayText: 'Pressed!'
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
                color: '#000000',
                action: {
                  type: 'postback',
                  label: 'Button 3',
                  data: 'button 3 pressed',
                  displayText: 'Pressed!'
                }
              },
              {
                type: 'button',
                style: 'primary',
                color: '#000000',
                action: {
                  type: 'postback',
                  label: 'Button 4',
                  data: 'button 4 pressed',
                  displayText: 'Pressed!'
                }
              }
            ]
          }
        ]
      },
      styles: {
        header: {
          backgroundColor: '#000000'
        }
      }
    }
  })
}

module.exports = help
