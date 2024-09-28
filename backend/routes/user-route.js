const authController = require('../controllers/auth-controller');
const userController = require('../controllers/user-controller');
const router = require('express').Router();

router.delete('/',userController.deleteAllUsers)
router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUser)


module.exports = router