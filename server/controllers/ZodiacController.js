const axios = require('axios')

class ZodiacController {
    static getZodiacData = (req, res, next) => {
        axios.get('https://zodiacal.herokuapp.com/api')
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(err => {
                console.log(err, 'ini error')
            })
    }
}

module.exports = ZodiacController

