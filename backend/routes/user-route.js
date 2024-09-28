const authController = require('../controllers/auth-controller');
const userController = require('../controllers/user-controller');
const {protect} = require('../controllers/auth-controller');
const router = require('express').Router();




router.delete('/',userController.deleteAllUsers)
router.delete('/chats',protect,userController.deleteAllChats)
router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUser)


module.exports = router