const router = module.exports = require('express').Router()
const navbar = require('./utils/navbar.js')

router.route('/')
	.get(home)

router.route('/about')
	.get(about)

function home(req, res, next) {

	res.render('home.pug', { navLinks: navbar.links, pageId: 0 })
}

function about(req, res, next) {
	res.render('about.pug', { navLinks: navbar.links, pageId: 1 })
}
