import { Chat } from "@mui/icons-material"
import { Box } from "@mui/material"
import ChatContact from "./ChatContact"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../../../state/first";

function ChatList() {

    const dispatch = useDispatch();

    const chatList = useSelector((state) => state.chatList)
    const selectedChat = useSelector((state) => state.selectedChat);
    function handleChatClick(chat) {
        console.log(chat);
        dispatch(setSelectedChat({ chat }));
    }
    return(
    <Box   display='flex' flexDirection='column'>
        {chatList.map((chat) => (
                <Box sx={{bgcolor:`${selectedChat?.id === chat.id ? 'rgba(0,0,0,0.1)' : ''}`}} onClick={() => handleChatClick(chat)} width='100%'  key={chat.id}>
                    <ChatContact chatDetails={chat.details}/>
            </Box>
        ))}
    </Box>)
}

export default ChatList