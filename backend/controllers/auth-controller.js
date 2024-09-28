
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user-service');
const { decodeToken } = require('../utils/tokenization');
const AppError = require('../utils/appError');
exports.protect=catchAsync(async(req,res,next)=>{

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        return next(new AppError('You are not logged in! Please log in to get access', 401));
    }

    const decoded = decodeToken(token)
    const currentUser = await User.findById(decoded.id);


    if(!currentUser){
        return next(new AppError('The user belonging to this token does no longer exist.', 401));
    }

    if(currentUser.changedPasswordAfter(decoded.iat)){
    
        return next(new AppError('User recently changed password. Please log in again.', 401));
    }

    req.user = currentUser;
    next();
    
})

exports.register= catchAsync(async(req,res,next)=>{

    const { name, email, password } = req.body;
    const {user,token} =await  userService.register({name, email, password});

    res.status(200).json({
        status: 'success',
        data:{user,token}
    })
})

exports.login= catchAsync(async(req,res,next)=>{

    const {email, password } = req.body;
    const {user,token} =await  userService.login({email, password});

    res.status(200).json({
        status: 'success',
        data:{user,token}
    })
})