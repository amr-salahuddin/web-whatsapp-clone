import { useTheme } from "@emotion/react"
import { Avatar, Box, Typography } from "@mui/material"
import { WMoreVert, WSearchIcon } from "../../../svgs/WhatsAppIcons"
import { BorderAll, Message } from "@mui/icons-material"
import ChatMessage from "./ChatMessage"

function ChatMessages({chat}) {

    const theme = useTheme()
    const alt = theme.palette.background.alt
    const myColor = theme.palette.background.green;
    const theirColor ='white'

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

    console.log(chat,'caaat')
    return (
        <Box py={3} px={8}  display='flex' flexDirection='column' overflow='auto'  >
            

           {
            chat.map((message) => (
                <Box  sx={{...messageBoxStyle, ...(message.sender === 'me' ? myMessageStyle : theirMessageStyle)}}  >
                <ChatMessage message={message} />
                </Box>
            ))
           }
        </Box>
    )
}

export default ChatMessages
