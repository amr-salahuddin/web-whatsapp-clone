const messageService = require('../services/message-service');
const catchAsync = require('../utils/catchAsync');



exports.deleteAllMessages = catchAsync(async (req, res, next) => {

    await messageService.deleteAllMessages();
    res.status(204).end();
})
exports.addMessage = catchAsync(async (req, res, next) => {

    const sender = req.user._id;
    const {text,chatId}=req.body;
    const messageContent = {text}
    const message = await messageService.addMessage(messageContent,sender,chatId);

    res.status(200).json({
        status: 'success',
        data: {
            message
        }
    })
})


exports.seeMessage = catchAsync(async (req, res, next) => {
  
})

