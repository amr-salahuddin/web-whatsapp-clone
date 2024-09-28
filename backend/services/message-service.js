
const Message = require('../models/message');
const Chat  = require('../models/chat');



exports.addMessage = async (messageContent, sender,receiver, chat) => {

    const {text}=messageContent

    const message = new Message({
        text,

        sender,
        receiver,
        chat
    })

    const savedMessage = await message.save();

    return savedMessage

}