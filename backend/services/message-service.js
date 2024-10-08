
const Message = require('../models/message');
const Chat = require('../models/chat');
const User = require('../models/user');
const AppError = require('../utils/appError');
const SocketManager = require('../utils/SocketManager');


let io;

exports.deleteAllMessages = async () => {
    await Message.deleteMany();
    return 1;
}

exports.addMessage = async (messageContent, sender, chat) => {

    const { text } = messageContent

    let receiver = null
    const chatDetails = await Chat.findById(chat);


    if (chatDetails.user1.toString() === sender.toString()) {
        receiver = chatDetails.user2
    } else {
        receiver = chatDetails.user1
    }
    const message = new Message({
        text,

        sender,
        receiver,
        chat, status: 1
    })

    const receiverUser = await User.findById(receiver);
    if (!receiverUser) {
        throw new AppError('User not found', 404)
    }
    if (!receiverUser.chats.includes(chat)) {
        receiverUser.chats.push(chat);
        await receiverUser.save();
    }

    if (!chatDetails) {
        throw new AppError('Chat not found', 404)
    }
    chatDetails.messages.push(message._id);
    await chatDetails.save();




    const receiverSocketId = SocketManager.getUserSocket(receiver);
    console.log(receiverSocketId)

    io = SocketManager.getIo();

    let savedMessage = await message.save()
    if (receiverSocketId) {
        message.status = 2
        savedMessage = await message.save()
        io.to(receiverSocketId).emit('message', savedMessage);
    }

    return savedMessage

}