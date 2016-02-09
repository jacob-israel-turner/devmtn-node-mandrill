var Express = require('express')
var Mandrill = require('mandrill-api/mandrill')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = Express()

var MC = new Mandrill.Mandrill('-ioR_JdmZNx7BCKO28Ayqg')

app.use(bodyParser.json())
app.use(cors())

app.post('/email', function (req, res) {
  var toEmail = req.body.toEmail
  var toName = req.body.toName
  var fromEmail = req.body.fromEmail
  var fromName = req.body.fromName
  var subject = req.body.subject
  var text = req.body.text

  var message = {
      "text": text,
      "subject": subject,
      "from_email": fromEmail,
      "from_name": fromName,
      "to": [{
              "email": toEmail,
              "name": toName,
              "type": "to"
          }],
  }


  MC.messages.send({
    message: message
  }, function (results) {
    console.log('It worked!')
    console.log(results)
  }, function (e) {
    console.log('error')
    console.log(e)
  })

})

app.listen(9001, function (e) {
  if (e) return console.log(e)
  else console.log('Now listening on port 9001')
})
