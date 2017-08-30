const express = require('express');
const router = module.exports = express.Router();

const {books} = require('../db/models.js');

router.route('/:author')
	.all(find);

router.route('/dummy')
	.get(dummyInsert);

function find(req, res, next) {
	books.find({author: new RegExp(req.params.author, 'i')})
		.then(res.send.bind(res));
}

function dummyInsert(req, res, next) {

	books.insert({
		title: "JS for dummies",
		author: (Math.random() > 0.5) ? 'Kael' : 'Dan'
	})
	.then((x) => res.send(x))
	.catch((err) => next(err));
}
