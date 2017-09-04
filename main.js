const express = require('express')
const pug = require('pug')
const error = require('./routes/error.js');

const app = express()

app.disable('x-powered-by')

app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000)

app.use('/', require('./routes/root.js'))
app.use('/users', require('./routes/users.js'))

app.use(error.internal)
app.use(error.client)

app.listen(app.get('port'), () => console.log(`Listenting on port ${app.get('port')}`))
