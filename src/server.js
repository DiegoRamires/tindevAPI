const express = require('express');
const routes = require('./routes')

const server = express()
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3001, process.env.IP, function() {
  console.log("Backend server is running!")
  console.log("Access 'http://localhost:3001' on development mode")
  console.log("Hit 'ctrl + c' to stop server")
})