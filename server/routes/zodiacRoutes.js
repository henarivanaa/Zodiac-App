const router = require('express').Router()
const ZodiacController = require('../controllers/ZodiacController')

router.post('/', ZodiacController.getZodiacData)
router.post('/translate', ZodiacController.translateText)

module.exports = router