const app = require("./app");
const mongoose = require("mongoose");
const SocketManager = require("./utils/SocketManager");
let uri = process.env.MONGODB_URI;

uri = uri.replace("<db_password>", process.env.MONGODB_PASSWORD);

let io;
mongoose.connect(uri, {}).then(() => {
    console.log("Connected to MongoDB");

    const server = app.listen(process.env.PORT || 2000, () => {
        console.log(`Listening on port ${process.env.PORT || 2000}`);
    });


    SocketManager.setIo(server);
    io = SocketManager.getIo();

    io.on("connection", (socket) => {
        console.log("New client connected", socket.id);

        socket.on("register", (userId, cb) => {
            console.log("register", socket.id);
            SocketManager.addUser(userId, socket.id);

            cb({ success: true });
        });

        socket.on("disconnect", () => {
            console.log("Client disconnected", socket.id);
            SocketManager.removeUser(socket.id);
        });
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});



