import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { WClockSending, WOneTickDelivered, WTwoTicksDelivered } from "../../../svgs/WhatsAppIcons";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectMessageById } from "../../../../selectors";

function ChatMessage({ chatId, messageId, isMe }) {


    const message = useSelector((state) => selectMessageById(chatId, messageId)(state))

    let time = message.time;
    time = dayjs(time).format('HH:mm')


    const messageStatuses = {
        0: { icon: <WClockSending />, color: 'grey' },
        1: { icon: <WOneTickDelivered />, color: 'grey' },
        2: { icon: <WTwoTicksDelivered />, color: 'grey' },
        3: { icon: <WTwoTicksDelivered />, color: '#34bdeb' }
    }
    return (
        <Box display='flex' gap={1} flexDirection='column'>
            <Typography mr={2} sx={{
                // Default, allows text to wrap
            }} >{message.text}</Typography>
            <Box display='flex' justifyContent='flex-end' gap={0.7} width='100%' >

                <Typography variant='subtitle1'  >{time}</Typography>
                {isMe && <Box display='flex' alignItems='center' color={messageStatuses[message.status || 0]?.color} >
                    {messageStatuses[message.status || 0]?.icon}
                </Box>}
            </Box>
        </Box>
    )
}

export default ChatMessage