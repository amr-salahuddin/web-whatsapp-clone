const {protect} = require('../controllers/auth-controller');
const chatController = require('../controllers/chat-controller');
const messageController = require('../controllers/message-controller');
const router = require('express').Router();


router.delete('/message',messageController.deleteAllMessages)
router.delete('/',chatController.deleteAllChats)


router.get('/',protect,chatController.getAllChats)
router.get('/:id',chatController.getChat)


router.patch('/see/:id',protect,chatController.seenChat)
router.post('/',protect,chatController.addChat)

router.post('/message',protect,messageController.addMessage)


module.exports = router