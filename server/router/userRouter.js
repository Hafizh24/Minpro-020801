const router = require("express").Router();
const { userController } = require("../controller");
const { verifyToken } = require("../middleware/auth");


router.post('/', userController.register)
router.post('/login', userController.login)
router.get('/keep-login', verifyToken, userController.keeplogin)
router.patch('/user-edit', verifyToken, userController.editUser)
router.patch('/password-edit', verifyToken, userController.editPass)
router.delete('/delete-account', verifyToken, userController.deleteAccount)
module.exports = router;
