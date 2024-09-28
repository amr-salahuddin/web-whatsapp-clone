import { Box } from "@mui/material"
import ChatTop from "./ChatsContent/ChatTop"
import { useSelector } from "react-redux";
import ChatBottom from "./ChatsContent/ChatBottom";
import ChatMessages from "./ChatsContent/ChatMessages";


function ChatWhats() {
    const chat = useSelector((state) => state.selectedChat);

    console.log(chat,'xxxxxxxxxcaaat')

    return (
        <Box overflow='hidden' display='flex' height='100%' minHeight='100%' maxHeight='18rem' justifyContent='space-between'   flexDirection='column'>
            <Box height='10%'  >
                <ChatTop chatDetails={chat.chatDetails} />
            </Box>
            <Box height='80%'  bgcolor='white' >
                <ChatMessages messages={chat.messages} />
            </Box>
            <Box height='10%'>
            <ChatBottom/>
            </Box>
            
        </Box>
    )
}

export default ChatWhats