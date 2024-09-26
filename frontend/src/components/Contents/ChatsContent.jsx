import { Box } from "@mui/material"
import ChatTop from "./ChatsContent/ChatTop"
import { useSelector } from "react-redux";
import ChatBottom from "./ChatsContent/ChatBottom";
import ChatMessages from "./ChatsContent/ChatMessages";


function ChatWhats() {
    const chat = useSelector((state) => state.selectedChat);

    console.log(chat,'caaat')

    return (
        <Box display='flex' height='100%' justifyContent='space-between'  flexDirection='column'>
            <Box flex={1}  >
                <ChatTop chatDetails={chat.details} />
            </Box>
            <Box flex={7} bgcolor='white' >
                <ChatMessages chat={chat.chat} />
            </Box>
            <Box flex={1}>
            <ChatBottom/>
            </Box>
            
        </Box>
    )
}

export default ChatWhats