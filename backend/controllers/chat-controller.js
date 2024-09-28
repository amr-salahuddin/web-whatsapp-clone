const chatService = require('../services/chat-service');
const catchAsync = require('../utils/catchAsync');


exports.addChat = catchAsync(async (req, res, next) => {
    const { otherUser } = req.body;
    const currentUser = req.user;
    const chat = await chatService.addChat(currentUser, otherUser);
    res.status(200).json({
        status: 'success',
        data: {
            chat
        }
    })
})

exports.deleteAllChats = catchAsync(async (req, res, next) => {
    await chatService.deleteAllChats();
    res.status(204).end();
})

exports.getChat = catchAsync(async (req, res, next) => {
    const chat = await chatService.getChat(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            chat
        }
    })
})

