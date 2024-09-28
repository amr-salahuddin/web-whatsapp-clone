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
        <Box sx={{'overflowY':'auto'}}  height='100%' py={3} px={8}  display='flex' flexDirection='column'   >
            

           {
            messages.slice().reverse().map((message, index) => (
                <Box  key={index} sx={{...messageBoxStyle, ...(message.sender === user._id ? myMessageStyle : theirMessageStyle)}}  >
                <ChatMessage message={message} />
                </Box>
            ))
           }
        </Box>
    )
}

export default ChatMessages
