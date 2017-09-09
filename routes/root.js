const express = require('express')
const router = module.exports = express.Router()
const navbar = require('./utils/navbar.js')

router.route('/')
	.get(home)

router.route('/about')
	.get(about)

function home(req, res, next) {

	res.render('home.pug', { navLinks: navbar.generateLinks(0) })
}

function about(req, res, next) {
	res.render('about.pug', { navLinks: navbar.generateLinks(1) })
}
