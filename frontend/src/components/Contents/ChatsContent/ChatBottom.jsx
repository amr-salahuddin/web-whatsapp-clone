import { useTheme } from "@emotion/react"
import { Box, IconButton, InputBase, OutlinedInput, TextField } from "@mui/material"
import { WAttach, WEmoji, WMicrophone } from "../../../svgs/WhatsAppIcons"

function ChatBottom(){

    const theme = useTheme()
    const alt = theme.palette.background.alt

    return (
        <Box height='100%' bgcolor={alt} display='flex' alignItems='center' justifyContent='space-between'>

            <Box ml={3} width='100%' display='flex' alignItems='center' gap={2} >
                <IconButton>
                    <WEmoji />
                </IconButton>
                <IconButton>
                    <WAttach />
                </IconButton>
                <InputBase sx={{  p: 1,minWidth:'70%',width:'70%',borderRadius: '8px', bgcolor: 'white' }} placeholder="Type a message" />
                <IconButton>
                    <WMicrophone />
                </IconButton>
            </Box>


        </Box>
    )
}

export default ChatBottom
