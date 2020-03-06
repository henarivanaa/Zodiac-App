const router = require('express').Router()
const zodiacRoutes = require('./zodiacRoutes')
const users = require('../routes/users')

router.use('/users', users)
router.use('/zodiacs',zodiacRoutes )


module.exports = router