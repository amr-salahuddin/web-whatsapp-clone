const {protect} = require('../controllers/auth-controller');
const chatController = require('../controllers/chat-controller');
const router = require('express').Router();


router.delete('/',chatController.deleteAllChats)
router.get('/:id',chatController.getChat)

router.post('/',protect,chatController.addChat)



module.exports = router