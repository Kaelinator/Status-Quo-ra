const express = require('express')
const router = module.exports = express.Router()

router.route('/')
	.get(home)

router.route('/about')
	.get(about)

function home(req, res, next) {
	res.render('home.pug')
}

function about(req, res, next) {
	res.send('about')
}
