
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user-service');
exports.protect=catchAsync(async(req,res,next)=>{
    
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