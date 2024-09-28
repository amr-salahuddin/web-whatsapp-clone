import { useTheme } from "@emotion/react"
import { Avatar, Box, Typography } from "@mui/material"
import { WMoreVert, WSearchIcon } from "../../../svgs/WhatsAppIcons"

function ChatTop({chatDetails}) {

    const theme = useTheme()

    const alt = theme.palette.background.alt
    const avatar = chatDetails.otherUser.avatar
    const name = chatDetails.otherUser.name

    return (
        <Box px={2} height='100%' display='flex' justifyContent='space-between' alignItems='center' bgcolor={alt} >
            <Box display='flex' alignItems='center'>
                <Avatar src={avatar} />
                <Typography fontWeight={300} fontSize={18} ml={2}>{name}</Typography>
            </Box>
            <Box display='flex' alignItems='center' gap={2.5} mr={2}>
                <WSearchIcon/>
                <WMoreVert/>
            </Box>
        </Box>
    )
}

export default ChatTop
