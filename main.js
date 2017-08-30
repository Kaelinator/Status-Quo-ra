const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const app = express();

app.disable('x-powered-by');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use('/books', require('./back/routes/books.js'));
app.use('/products', require('./back/routes/books.js'));

app.get('/', function(req, res) {
	res.send('It worked!');
});

app.listen(app.get('port'), function() {
	console.log('Express started & listening!');
});

// app.use(express.static('front/data'));
