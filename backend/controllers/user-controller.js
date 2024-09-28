const userService = require('../services/user-service');
const catchAsync = require('../utils/catchAsync');



exports.deleteAllUsers = catchAsync(async (req, res) => {

    await userService.deleteAllUsers();
    res.status(204).end();
})
exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.getAllUsers();

    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
})

exports.getUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})