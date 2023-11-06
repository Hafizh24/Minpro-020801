const router = require("express").Router();
const {userController} = require('../controller');
const { verifyToken } = require("../middleware/auth");


router.post('/', userController.register)
router.post('/login', userController.login)
router.get('/keep-login', verifyToken, userController.keeplogin)

module.exports = router;