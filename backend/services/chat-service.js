const Chat = require('../models/chat');
const User = require('../models/user');
const Message = require('../models/message');
const AppError = require('../utils/appError');


exports.deleteAllChats = async () => {


    const chats = await Chat.deleteMany();

    return 1;
}



exports.getAllChats = async (user, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    try {
        const chats = await Chat.find({
            $or: [{ user1: user._id }, { user2: user._id }]
        })
        .skip(skip)
        .limit(limit)
        .populate({ path: 'user1', select: 'name avatar' })
        .populate({ path: 'user2', select: 'name avatar' }).lean();

        const chatWithMessages = await Promise.all(chats.map(async (chat) => {
            const messages = await Message.find({ chat: chat._id })
                .sort({ createdAt: -1 })
                .limit(limit); // Consider adjusting if pagination is needed for messages

                console.log('xxx',chat.user1._id.equals(user._id))
                chat.otherUser = (chat.user1._id.equals(user._id) ? chat.user2 : chat.user1);
                // console.log(user,chat.otherUser,chat.user1,chat.user2)
                chat.user1=null;
                chat.user2=null;
            return {
                _id: chat._id,
                chatDetails:{...chat},
                messages
            };
        }));

        return chatWithMessages; // Return chats with populated messages

    } catch (error) {
        console.error("Error fetching chats:", error);
        throw new AppError("Failed to fetch chats");
    }
};


exports.addChat = async (currentUser, otherUserId) => {



    const testExist = currentUser.existingChats.get(otherUserId)
    console.log(testExist)
    if (testExist) {

        return testExist
    }

    const chat = new Chat({ user1: currentUser._id, user2: otherUserId });

    currentUser.existingChats.set(otherUserId, chat._id);


    const otherUser = await User.findById(otherUserId);
    otherUser.existingChats.set(currentUser._id, chat._id);

    await chat.save();
    currentUser.chats.push(chat._id);
    await currentUser.save();
    await otherUser.save();
    return chat._id
}

exports.getChat = async (chatId) => {

    const chat = await Chat.findById(chatId);
    return chat
}