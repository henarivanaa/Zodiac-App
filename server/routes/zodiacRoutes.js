const router = require('express').Router()
const ZodiacController = require('../controllers/ZodiacController')

router.post('/', ZodiacController.getZodiacData)
router.get('/translate', ZodiacController.translateText)

module.exports = router