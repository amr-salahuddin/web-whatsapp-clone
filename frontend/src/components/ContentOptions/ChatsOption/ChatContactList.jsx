import { Chat } from "@mui/icons-material"
import { Box, Button, Typography, useTheme } from "@mui/material"
import ChatContact from "./ChatContact"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../../../state/first";
import { WArchive } from "../../../svgs/WhatsAppIcons";
import { useState } from "react";

function ChatList() {

    const dispatch = useDispatch();

    const chatList = useSelector((state) => state.chatList)
    console.log(chatList)
    const selectedChat = useSelector((state) => state.selectedChat);
    function handleChatClick(chat) {
        console.log(chat);
        dispatch(setSelectedChat({ chat }));
    }
    const theme = useTheme();

    const green = theme.palette.primary.green
    const bggreen = theme.palette.background.green;
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const [selectedFilterButton, setSelectedFilterButton] = useState(0)

    let listFilterButtons = [

        {

            code: 0,
            text: 'All'
        },
        {
            code: 1,
            text: 'Unread'
        },
        {
            code: 2,
            text: 'Groups'
        },
    ]
    function handleFilterClick(index) {

        setSelectedFilterButton(index)
    }
    return (
        <>

            <Box display={'flex'} alignItems={'center'} my={1}>
                {listFilterButtons.map((item) => (

                    <Button onClick={() => handleFilterClick(item.code)} disableRipple sx={{
                        color: `${selectedFilterButton === item.code ? green : light}`, fontSize: 14, px: 1.5, mx: 1, borderRadius: 5, bgcolor: `${selectedFilterButton === item.code ? bggreen : alt}`
                    }} key={item.code}>{item.text}</Button>
                ))}
            </Box>
            <Box pb={2} sx={{ overflowY: 'auto', }}>
                <Box display='flex' alignItems={'center'} gap={3} >
                    <Box display='flex' ml={1.5} my={1} color={green}>
                        <WArchive />

                    </Box>
                    <Typography fontWeight={400} fontSize={16}>Archived</Typography>
                </Box>
                <Box width='100%'>
                    <Box display='flex' flexDirection='column'>

                        {chatList.map((chat,index) => (
                            <Box key={index} sx={{ bgcolor: `${selectedChat?._id === chat?._id ? 'rgba(0,0,0,0.1)' : ''}` }} onClick={() => handleChatClick(chat)} width='100%'>
                                <ChatContact chatDetails={chat.chatDetails} time={chat.chatDetails.createdAt} lastMessage={chat.messages[0]} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ChatList