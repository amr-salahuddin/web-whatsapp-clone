const Chat = require('../models/chat');
const User = require('../models/user');



exports.deleteAllChats = async () => {
    

    const chats = await Chat.deleteMany();

    return 1;
}
exports.addChat = async (currentUser, otherUserId)  => {


 
    const testExist =currentUser.existingChats.get(otherUserId)
    console.log(testExist)
    if(testExist){

        return testExist
    }
 
    const chat = new Chat({ user1:currentUser._id,user2: otherUserId });

    currentUser.existingChats.set(otherUserId,chat._id);


    const otherUser = await User.findById(otherUserId);
    otherUser.existingChats.set(currentUser._id,chat._id);
  
    await chat.save();
    currentUser.chats.push(chat._id);
    await  currentUser.save();
    await otherUser.save(); 
    return chat._id
}

exports.getChat = async (chatId) => {

    const chat = await Chat.findById(chatId);
    return chat
}