const axios = require('axios')

class ZodiacController {
    static getZodiacData = (req, res, next) => {
        let birthdate = req.body.birthdate
        axios.get('https://zodiacal.herokuapp.com/api')
            .then(response => {
                let zodiacs = response.data
                zodiacs.forEach(zodiac => {
                    let startDate = zodiac.sun_dates[0].split(' ')
                    let endDate = zodiac.sun_dates[1].split(' ')
                    
                })
            })
            .catch(err => {
                console.log(err, 'ini error')
            })
        
    }
}

module.exports = ZodiacController

