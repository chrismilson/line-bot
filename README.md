# Line Bot

This Bot is for learning how to use line Messaging API with a bot in Node.js.

If you want to chat with the bot, you can friend it here:

<a href="http://nav.cx/6ExquQg">
<img width="150" src="https://qr-official.line.me/sid/L/927jrbwk.png" alt="Line QR Code">
</a>

# Package

The package is based around the node sdk for the line Messaging API. When the 
bot receives an event, the event is sent to a handler, and then the API is used 
to form a response.

## Structure

The documentation has a kitchen sink module with default responses for all 
possible events. This module is contained within a single large file and is 
relatively difficult to read.

The structure of this module however is done with the Common JS module system. 

- Each event received by the server is passed to the default handler.

- The default handler checks the event agains a list of sub handlers which are 
    potentially more equipped to handle the event.

- If there is no such handler then the event is passed through the default.

The default handler is contained in the handler folder, and each other 
    file/folder is a module coressponding to a sub handler.

## Example

If a text message is received, it will first be passed to the default handler 
(at ```/handle/index.js```). The default handler will notice the message type 
and send the event to the message module (at ```/handle/message/index.js```). 
The message module will then check the message type of text and pass it to the 
text message submodule (at ```/handle/message/text/index.js```).
