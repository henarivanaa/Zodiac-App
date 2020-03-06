const router = require('express').Router()
const zodiacRoutes = require('./zodiacRoutes')

router.use('/zodiacs',zodiacRoutes )

module.exports = router