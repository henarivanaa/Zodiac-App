const router = require('express').Router()
const ZodiacController = require('../controllers/ZodiacController')

router.get('/', ZodiacController.getZodiacData)

module.exports = router