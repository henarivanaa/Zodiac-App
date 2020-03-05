const axios = require('axios')

class ZodiacController {
    static getZodiacData = (req, res, next) => {
        axios.get('https://zodiacal.herokuapp.com/api')
            .then(data => {
                console.log(data)
                res.send(data)
            })
            .catch(err => {
                console.log(err, 'ini error')
            })
    }
}

module.exports = ZodiacController

