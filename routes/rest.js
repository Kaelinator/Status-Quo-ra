const router = module.exports = require('express').Router()
const {profiles} = require('../database/models.js')

router.route('/')
  .get(grab)

function grab(req, res, next) {
  
  if (req.query.query == '')
    return res.send([])

  profiles.find({ user: { $regex: RegExp(`.*${req.query.query}.*`, 'i') } })
    .then((docs) => { res.send(docs) })
    .catch((err) => { throw new Error(err) })
}