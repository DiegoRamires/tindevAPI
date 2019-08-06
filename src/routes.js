const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Hello World')
})

routes.post('/devs', (req, res) => {
  return res.json(req.body)
})

module.exports = routes