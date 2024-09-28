import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material"
import { WMuted, WPinned } from "../../../svgs/WhatsAppIcons";

function ChatContact({ chatDetails,time,lastMessage }) {

    const theme = useTheme();
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green;
    const light = theme.palette.primary.light;

    const avatar = chatDetails.otherUser.avatar
    console.log(lastMessage)
    return (
        <Box px={2} sx={{ ':hover': { backgroundColor: `${alt}`,cursor:'pointer' } }} display='flex' alignItems='center' width='100%'>
            <Avatar src={avatar} />
            <Box  py={1.5} sx={{
                    borderTop: `1px solid ${alt}`,
                }} width='100%' ml={2} display='flex' justifyContent='space-between'>
                <Box>
                    <Typography variant="h5">{chatDetails.otherUser.name||2}</Typography>
                    <Typography variant="subtitle1">{lastMessage.text||2}</Typography>
                </Box>
                <Box color={light}> 
                    <Typography variant="subtitle1" >{lastMessage.time||2}</Typography>
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