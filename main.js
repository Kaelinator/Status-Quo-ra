const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();

app.disable('x-powered-by');

app.set('view engine', 'pug');
app.set('views', __dirname + '/back/views');
app.set('port', process.env.PORT || 3000);

app.use('/', require('./back/routes/root.js'));
app.use('/books', require('./back/routes/books.js'));
app.use('/users', require('./back/routes/users.js'));

// app.use((err, req, res, next) => {
// 	console.error('MIDDLEWARE EXPRESS FAIL', err);
// 	process.exit();
// });

app.listen(app.get('port'), () => console.log(`Listenting on port ${app.get('port')}`));
