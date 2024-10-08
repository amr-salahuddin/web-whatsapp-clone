
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about:{
        type: String,
        default: "..."
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordChangedAt: {
        type: Date
    },
    avatar: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    isOnline: {
        type: Boolean,
        default: false
    },
    lastSeen: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    blocklist: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"

    },
    contacts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    knownUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    },
    existingChats: {
        type: Map,
        of: mongoose.Schema.Types.ObjectId  ,
        default: {}  // Initialize as an empty object

    },
    statuses: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: "Status"
    },

    chats: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Chat"
    },
})

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    console.log(candidatePassword, userPassword)
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password') || this.isNew) {
        return next();
    }
    
    this.passwordChangedAt = Date.now() - 1000;
    next();
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('User', userSchema)