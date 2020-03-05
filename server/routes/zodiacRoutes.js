const router = require('express').Router()
const ZodiacController = require('../controllers/ZodiacController')

router.post('/', ZodiacController.getZodiacData)

module.exports = router