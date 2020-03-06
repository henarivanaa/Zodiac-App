const controllerUser = require('../controllers/users')
const router = require('express').Router()


router.post('/register', controllerUser.registerUser)
router.post('/login', controllerUser.loginUser)
router.post('/googleSignIn', controllerUser.googleSign)
router.get('/:id', controllerUser.editUser)
router.put('/:id', controllerUser.editUserUpdate)
router.delete('/:id', controllerUser.deleteUser)

module.exports = router