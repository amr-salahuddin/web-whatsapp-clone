const { default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    text: {
        type: String
    },
    media:{
        type: [String]
    },
    time: {
        type: Date,
        default: Date.now
    },
    status:{
        type: Number,
        default: 1
    },
    deliveredAt: {
        type: Date
    },
    seenAt: {
        type: Date
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Message', messageSchema);
