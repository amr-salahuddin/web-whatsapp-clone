const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { tokenize } = require('../utils/tokenization');
const AppError = require('../utils/appError');


exports.deleteAllUsers = async () => {

    await User.deleteMany({});
    return 1;
}
exports.deleteAllChats = async (user) => {

    user.chats = [];
    user.existingChats = new Map();
    await user.save();
    return 1;
}
exports.getAllUsers = async () => {
    const users = await User.find({});
    return users;
}

exports.getUser = async (id) => {
    const user = await User.findById(id);
    return user
}

exports.register = async (data) => {
    const { name, email, password } = data;
    const user = new User({ name, email, password });
    await user.save();
    const token = tokenize({ id: user._id })
    return {user, token};
}
exports.login = async (data) => {
    const {email, password } = data;

    const user = await User.findOne({ email });
    if (!user) {
        throw new AppError('Invalid credentials', 400);
    }

    if (!user || !await user.correctPassword(password, user.password)) {
        console.log('hi')
        throw new AppError('Invalid credentials', 400);
    }

    const token = tokenize({ id: user._id })
    return {user, token};
}
