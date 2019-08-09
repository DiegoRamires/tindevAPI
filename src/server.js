const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('Nova conexao', socket.id);

})

mongoose.connect('mongodb+srv://nodeapi:rocketNodeDB!@cluster0-ahjnp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3001, process.env.IP, function() {
  console.log("Backend server is running!")
  console.log("Access 'http://localhost:3001' on development mode")
  console.log("Hit 'ctrl + c' to stop server")
})