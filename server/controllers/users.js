const { User } = require('../models')
const { verifyPassword } = require('../helper/bcrypt')
const { generateJwt, verifyJwt } = require('../helper/jwt')
const createError = require('../helper/errors')

// const { OAuth2Client } = require('google-auth-library')


class ControllerUser {
  static registerUser(req, res, next) {
    let { username, email, password } = req.body
    User
      .create({ username, email, password })
      .then(user => {
        let payload = { id: user.id, username: user.username, email: user.email }
        const token = generateJwt(payload)
        res.status(201).json(token)
      })
      .catch(err => {
        next(err)
      })
  }

  static loginUser(req, res, next) {
    let { email, password } = req.body
    User
      .findOne({ where: { email } })
      .then(userLogin => {
        if (!userLogin) {
          throw createError(400, 'email/password wrong')
        } else {
          if (verifyPassword(password, userLogin.password)) {
            let payload = { id: userLogin.id, email: userLogin.email }
            const token = generateJwt(payload)
            res.status(200).json(token)
          } else {
            throw createError(400, 'email/password wrong')
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }


  // static googleSign(req, res, next) {
  //   let payload
  //   const client = new OAuth2Client(process.env.GoogleClienId)
  //   client.verifyIdToken({
  //     idToken: req.body.token,
  //     audience: process.env.GoogleClienId,  // Specify the CLIENT_ID of the app that accesses the backend
  //     // Or, if multiple clients access the backend:
  //     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  //   })
  //     .then(ticket => {
  //       payload = ticket.getPayload()
  //       // const userid = payload['sub']
  //       return User
  //         .findOne({
  //           where: {
  //             email: payload.email
  //           }
  //         })
  //         .then(result => {
  //           if (result) {

  //             // const token = jwt.sign({ email: result.email, id: result.id }, process.env.JWT)
  //             let payload = { email: result.email, id: result.id }
  //             const token = generateJwt(payload)
  //             res.status(201).json(token)
  //           } else {
  //             User
  //               .create({
  //                 username: payload.given_name,
  //                 email: payload.email,
  //                 password: process.env.DefaultPassword
  //               })
  //               .then(newUser => {
  //                 const token = jwt.sign({ email: newUser.email, id: newUser.id }, process.env.JWT)
  //                 res.status(201).json(token)
  //               })
  //           }
  //         })
  //     })
  //     .catch(err => {
  //       next(err)
  //     })
  // }

}
module.exports = ControllerUser