const router = module.exports = require('express').Router()
const {profiles} = require('../database/models.js')
const _ = require('lodash')

router.route('/')
  .get(grab)

function grab(req, res, next) {
  
  if (req.query.query == '' || req.query.length > 64)
    return res.send([])

  profiles.find({ user: { $regex: RegExp(`.*${_.escapeRegExp(req.query.query)}.*`, 'i') } })
    .then((docs) => { res.send(docs) })
    .catch((err) => { res.status(500).send(err) })
}