import { Server }from "socket.io";

const io = new Server({
    // WARNING INSECURE: Adjust these settings for any non-local env
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log("New connection to the chat server");
    socket.on("chatMessageFromClient", (data) => {
        io.emit("chatMessageFromServer", data);
    });
});

io.listen(3000);