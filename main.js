const express = require('express')
const pug = require('pug')
const path = require('path')
const error = require('./routes/error.js')

const app = express()
app.disable('x-powered-by')

app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000)

app.use('/', require('./routes/root.js'))
app.use('/users', require('./routes/users.js'))
app.use('/rest', require('./routes/rest.js'))

app.use('/data', express.static(path.join(__dirname, 'views', 'data')))

app.use(error.internal)
app.use(error.client)

app.listen(app.get('port'), () => console.log(`Listenting on port ${app.get('port')}`))
