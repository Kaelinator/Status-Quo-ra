const router = module.exports = require('express').Router()

router.route('/')
  .get(grab)

function grab(req, res, next) {

  res.send({ data: 'this is some data' })
}