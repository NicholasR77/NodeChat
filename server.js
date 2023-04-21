import { Server }from "socket.io";

const io = new Server({
    // WARNING INSECURE: Adjust these settings for any non-local env
    cors: {
        origin:"http://localhost:3000",
    }
});

io.on("connection", (socket) => {
    console.log("New connection to the chat server");
});

io.on("chatMessage", (data) => {
    console.log("🚀 ~ file: server.js:15 ~ io.on ~ data:", data)
});

io.listen(3000);