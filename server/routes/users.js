const controllerUser = require('../controllers/users')
const router = require('express').Router()


router.post('/register', controllerUser.registerUser)
router.post('/login', controllerUser.loginUser)
router.post('/googleSignIn', controllerUser.googleSign)

module.exports = router