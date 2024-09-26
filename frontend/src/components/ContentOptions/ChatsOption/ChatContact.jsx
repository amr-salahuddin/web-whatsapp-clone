import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material"
import { WMuted, WPinned } from "../../../svgs/WhatsAppIcons";

function ChatContact({ chatDetails }) {

    const theme = useTheme();
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green;
    const light = theme.palette.primary.light;
    return (
        <Box px={2} sx={{ ':hover': { backgroundColor: `${alt}`,cursor:'pointer' } }} display='flex' alignItems='center' width='100%'>
            <Avatar src={chatDetails.avatar} />
            <Box  py={1.5} sx={{
                    borderTop: `1px solid ${alt}`,
                }} width='100%' ml={2} display='flex' justifyContent='space-between'>
                <Box>
                    <Typography variant="h5">{chatDetails.name}</Typography>
                    <Typography variant="subtitle1">{chatDetails.lastMessage}</Typography>
                </Box>
                <Box color={light}> 
                    <Typography variant="subtitle1" >{chatDetails.time}</Typography>
                    <Box display='flex' gap={0.5} alignItems={'center'}>
                    {chatDetails.muted && <WMuted/>}
                    {chatDetails.pinned && <WPinned/>}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatContact