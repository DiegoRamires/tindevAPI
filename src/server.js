const express = require('express');

const server = express()

server.get('/', (req, res) => {
  return res.send('Hello World')
})

server.listen(process.env.PORT || 3001, process.env.IP, function() {
  console.log("Backend server is running!")
  console.log("Access 'http://localhost:3001' on development mode")
  console.log("Hit 'ctrl + c' to stop server")
})