const router = module.exports = require('express').Router()
const navbar = require('./utils/navbar.js')
// const {profiles} = require('../database/models.js')

router.route('/:query?')
	.get(find)

function find(req, res, next) {

	res.render('users.pug', { navLinks: navbar.links, pageId: 2 })
	// profiles.find()
	// 	.then((u) => res.render('users.pug', {results: u}))
	// 	.catch((err) => { next(err) })
}
