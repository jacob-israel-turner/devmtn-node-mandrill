var Mandrill = require('mandrill-api/mandrill').Mandrill
var MC = new Mandrill('DfWbXEQztAR6ddOGgUs3Sw')

module.exports = {
  send: function(toEmail, toName, subject, html, cb) {
    var message = {
        "html": html,
        "subject": subject,
        "from_email": 'j.israel.turner@gmail.com',
        "from_name": 'The Email Guys',
        "to": [{
                "email": toEmail,
                "name": toName,
                "type": "to"
            }],
    }

    MC.messages.send({message: message},
      function(results) {
        cb(null, results)
      }, function (error) {
        cb(error, null)
      })
  }
}

var name = 'Jacob'
var string = `Hello, my name is ${name}`
