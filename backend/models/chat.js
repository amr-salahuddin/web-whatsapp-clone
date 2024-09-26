
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    media:{
        type: [String]
    },
    time: {
        type: String
    },
    seen:{
        type: Boolean,
        default: false
    },
    delivered:{
        type: Boolean,
        default: false
    },
})

const chatSchema = new mongoose.Schema({
    user1:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user2:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages:[{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Message'
    }]
})
module.exports = mongoose.model('User', userSchema)