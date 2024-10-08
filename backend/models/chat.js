
const mongoose = require('mongoose');


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
    }],
  
}, {
    timestamps: true
})
module.exports = mongoose.model('Chat', chatSchema)
