import { useTheme } from "@emotion/react"
import { Avatar, Box, Typography } from "@mui/material"
import { WMoreVert, WSearchIcon } from "../../../svgs/WhatsAppIcons"
import { BorderAll, Message } from "@mui/icons-material"
import ChatMessage from "./ChatMessage"
import { useSelector } from "react-redux"

function ChatMessages({messages}) {

    const theme = useTheme()
    const alt = theme.palette.background.alt
    const myColor = theme.palette.background.green;
    const theirColor ='white'

    const user = useSelector((state) => state.user)
    
    const messageBoxStyle={
        borderRadius:1,
         p:1
        ,
    }
    const myMessageStyle={
        bgcolor:myColor,
        alignSelf:'flex-end' 


    }
    const theirMessageStyle={
        bgcolor:theirColor,
        alignSelf:'flex-start'
    }


    return (
        <Box sx={{'overflowY':'auto'}}  height='100%' py={3} px={8}  gap={2} display='flex' flexDirection='column'   >
            

           {
            messages.slice().reverse().map((message) => {
                const isMe = message.sender === user._id
                return (
                <Box  key={message._id} sx={{...messageBoxStyle, ...(isMe? myMessageStyle : theirMessageStyle)}}  >
                <ChatMessage isMe={isMe} chatId={message.chat} messageId={message._id} />
                </Box>
            )})
           }
        </Box>
    )
}

export default ChatMessages
