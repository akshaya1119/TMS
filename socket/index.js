import { Server } from "socket.io";

const originUrl = process.env.REACT_APP_MY_SERVER;
const io = new Server({
    cors: {
        origin : `${originUrl}`
    }
});

io.on("connection", (socket) => {
  console.log("someone has connected!")

  socket.on ("disconnect", ()=> {
    console.log ("someone has left");
  })
});

io.listen(5000);