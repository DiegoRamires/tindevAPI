const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://nodeapi:rocketNodeDB!@cluster0-ahjnp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3001, process.env.IP, function() {
  console.log("Backend server is running!")
  console.log("Access 'http://localhost:3001' on development mode")
  console.log("Hit 'ctrl + c' to stop server")
})