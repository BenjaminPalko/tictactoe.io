const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});
io.on('connection', (socket)=> {
  // receive the event and broadcast to other clients
  socket.on("play", state => {
    console.log("server received", state)
    socket.broadcast.emit("play", state)
  })
})

server.listen(3001)
