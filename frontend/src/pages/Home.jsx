import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { AttachEmail } from "@mui/icons-material";
import Options from "../components/Options";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageToChat, seenChat, setChatList, setSelectedChat } from "../state/first";
import { getAllChatsAPI } from "../utils/apiRequests";
import ChatList from "../components/ContentOptions/ChatsOption/ChatContactList";
import { useSocket } from "../socket/SocketContext";



function Home() {


    //on click esc set selectedChat to null

    const socket = useSocket();

    const [visibility, setVisibility] = useState(false)
    console.log(socket)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token)
    const selectedChat = useSelector((state) => state.selectedChat)
    const user = useSelector((state) => state.user)
    const chatList = useSelector((state) => state.chatList)
    useEffect(() => {



        const handleKeyDown = (event) => {

            if (event.key === 'Escape') {
                dispatch(setSelectedChat({ id: null }))
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    useEffect(() => {

        if (!socket)
            return

        socket.on('connect', () => {

            console.log('Socket Connect ID:', socket.id);
            //register
            function cb(data) {
                if (data.success) {
                    console.log("Socket Register Success")
                }
                else {
                    console.log("Socket Register Failed")
                }
            }

            socket.emit('register', user._id, cb);
        })

        socket.on('message', (message) => {
            console.log(message)

            dispatch(addMessageToChat({
                chatId: message.chat,
                message: message
            }))
            //add message

        })

        socket.on('seenChat', (chatId) => {

            console.log('seeee')
            dispatch(seenChat({
                chatId
            }))
        })


        return () => {

            socket.disconnect()

        }

    }, []
    )

    async function getAllChats(token) {
        const response = await getAllChatsAPI(token);
        const newChats = response.data.chats

        dispatch(setChatList({ chatList: newChats }));
        const newSelectedChat = newChats.find((chat) => chat._id === selectedChat._id)

        if (selectedChat) {
            //set selectedChat of that of id of chatlist
            dispatch(setSelectedChat({
                chat: newSelectedChat
            }))
        }
    }

    useEffect(() => {

        getAllChats(token)



    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", minHeight: '100vh', overflow: 'auto' }}>
            <Box flex={5} minHeight='100%'>
                <Sidebar />
            </Box>
            <Box flex={40} minHeight='100%' minWidth='300px' >
                <Options />
            </Box>
            <Box flex={55} minHeight='100%' minWidth='600px' >
                <Content />
            </Box>
        </Box>
    )
}

export default Home