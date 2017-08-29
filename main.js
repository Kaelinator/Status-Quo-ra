const express = require('express');
const handlebars = require('express-handlebars');
const mongo = require('mongodb');

const app = express();

app.disable('x-powered-by');
app.engine('handlebars', handlebars.create({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

const genericRoutes = require('./back/routes/generics.js');

app.use(genericRoutes);
app.use(express.static('front/data'));
