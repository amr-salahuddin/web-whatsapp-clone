let users ={}
const socketIo = require("socket.io");
let io; 



exports.getIo = ()=>{
    return io
}

exports.setIo = (server)=>{
    io = socketIo(server, {
        cors: {
            origin: "*",
        },
    });
}

exports.showAllUsers = ()=>{
    console.log(users)
}
exports.addUser = (id,socketId)=>{
    users[id] = socketId
}

exports.removeUser = (socketId)=>{
    for(let id in users){
        if(users[id] === socketId){
            delete users[id]
        }
    }
}
exports.getUserSocket = (id)=>{
    return users[id]
}