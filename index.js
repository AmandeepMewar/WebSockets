const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (socket) => {
  console.log("Client Connected!");

  socket.send("Hello from WebSocket server!");

  // This handles incoming messages
  socket.on("message", (message) => {
    console.log(`Message Recieved:  ${message} `);
    socket.send(`Server says: ${message}`);
  });

  // This handles diconnection
  socket.on("close", () => {
    console.log("Client Diconnected!");
  });
});

/*
  const socket = new WebSocket("ws://localhost:3000");

  socket.onopen = () => {
    console.log("Connnected!")
    socket.send("Hello server, it's me, client baby!")
  }
 
  socket.onmessage = (event) => {
    console.log(`We received a message from server ${event.data}`);
  };

  socket.onclose = () => {
    console.log("Diconnected!");
  }

*/

console.log("WebSocket server running at ws://localhost:3000");
