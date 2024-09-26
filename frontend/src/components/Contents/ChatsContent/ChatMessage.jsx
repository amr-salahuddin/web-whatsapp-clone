import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

function ChatMessage({ message }) {

    const msg = 'HellxoHellxoHelxo';
    return (
        <Box  >
            <Typography mr={2}    sx={{
                   // Default, allows text to wrap
            }} >{message.text}</Typography>
            <Box display='flex' flexDirection='column' width='100%' >
            <Typography  variant='subtitle1' alignSelf='flex-end'>{message.time}</Typography>
            </Box>
        </Box>
    )
}

export default ChatMessage