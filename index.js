var Express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = Express()

var auth = require('./controllers/auth')

app.use(bodyParser.json())
app.use(cors())

app.post('/register', auth.register)
app.post('/login', auth.login)

app.listen(9001, function (e) {
  if(e) return console.log('There was an error', e)
  console.log('Now listening on port 9001')
})

process.on('uncaught_exception', function (e) {
  send('There was an error!' + JSON.stringify(e))
})
