const messageService = require('../services/message-service');
const catchAsync = require('../utils/catchAsync');


exports.addMessage = catchAsync(async (req, res, next) => {

    const sender = req.user._id;
    const {messageContent,reciever,chatId}=req.body;
    const message = await messageService.addMessage(messageContent,sender,reciever,chatId);

    res.status(200).json({
        status: 'success',
        data: {
            message
        }
    })
})


exports.seeMessage = catchAsync(async (req, res, next) => {
  
})

