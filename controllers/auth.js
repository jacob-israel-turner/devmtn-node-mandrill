var send = require('../services/email').send

module.exports = {
  register: function (req, res) {
    // DO REGISTERING STUFF
    send(
      req.body.email,
      req.body.name,
      'Welcome to the App!',
      '<p><b>HELLO!</b> and welcome to the community!</p>',
      function (error, success) {
        if (error) {
          console.error(error)
          res.status(500).json('There was an error while sending an email')
        } else {
          res.json('Registration successful!')
        }
      }
    )
  },
  login: function (req, res) {
    console.log('Somins registring')
  }
}
