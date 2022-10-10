const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});
io.on('connection', (socket)=> {
  // receive the event and broadcast to other clients
  socket.on("play", index => {
    console.log("server received", index)
    socket.broadcast.emit("play", index)
  })
})

server.listen(3001)
