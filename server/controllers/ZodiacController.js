const axios = require('axios')

class ZodiacController {
    static getZodiacData = (req, res, next) => {
        let birthdate = req.body.birthdate
        let birthmonth = req.body.birthmonth
        axios.get('https://zodiacal.herokuapp.com/api')
            .then(response => {
                let zodiacs = response.data
                zodiacs.forEach(zodiac => {
                    let startDate = zodiac.sun_dates[0].split(' ')
                    let endDate = zodiac.sun_dates[1].split(' ')
                    if (birthmonth.toLowerCase() === startDate[0].toLowerCase()) {
                        if (Number(birthdate) >= Number(startDate[1])) {
                            res.status(200).json(zodiac)
                        }
                    } else if (birthmonth.toLowerCase() === endDate[0].toLowerCase()) {
                        if (Number(birthdate) <= Number(endDate[1])) {
                            res.status(200).json(zodiac)
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err, 'ini error')
            })
    }

    static translateText(req, res) {
        axios({
            method: 'get',
            url: `https://api.mymemory.translated.net/get?q=${req.body.body}&langpair=en|id`
        })

            .then(data => {
                res.status(201).json(data.data.responseData.translatedText)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }
}

module.exports = ZodiacController

