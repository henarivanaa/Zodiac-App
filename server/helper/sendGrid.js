// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// require('dotenv').config()
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'novan.top@gmail.com',
//   from: 'novan.top@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);



const sgMail = require('@sendgrid/mail');
class SendGridController {

  static memberInvited(req, res, next) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      from: 'novan.top@gmail.com',
      subject: 'Hello!',
      html: `<strong>hello ${req.body.username} !</strong>`,
    };
    sgMail.send(msg)
    res.status(200).json('Mail Sent')
  }
}

module.exports = SendGridController