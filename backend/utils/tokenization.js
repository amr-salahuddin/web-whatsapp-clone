const jwt = require('jsonwebtoken');
const AppError = require('./appError');

exports.tokenize = (payload) => {
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
}

exports.decodeToken = (token) => {
    
    let decoded
     decoded = jwt.verify(token, process.env.JWT_SECRET);
     //check if token is malformed
   
    return decoded
}