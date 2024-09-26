import { MoreVert } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, TableContainer, Typography, useTheme } from "@mui/material";
import { WArchive, WMoreVert, WNewChat } from "../../svgs/WhatsAppIcons";
import SearchBar from "../../shared/SearchBar";
import { useState } from "react";
import ChatList from "./ChatsOption/ChatContactList";

function ChatsOption() {


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
    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green
    const bggreen = theme.palette.background.green;

    function handleFilterClick(index) {

        setSelectedFilterButton(index)
    }
    return (
        <Box pt={3} display='flex' flexDirection='column'    bgcolor='white' minHeight={'100%'}  maxHeight={'10rem'} >
            <Box mx={3} display='flex' justifyContent={'space-between'} alignItems={'center'} >
                <Typography fontWeight={500} variant='h3'>Chats</Typography>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton>
                        <WNewChat />
                    </IconButton>
                    <IconButton  >
                        <WMoreVert />
                    </IconButton>
                </Box>
            </Box>
            <Box mx={1}>
                <SearchBar />
            </Box>

            <Box display={'flex'} alignItems={'center'} my={1}>
                {listFilterButtons.map((item) => (

                    <Button onClick={() => handleFilterClick(item.code)} disableRipple sx={{
                        color: `${selectedFilterButton === item.code ? green : light}`, fontSize: 14, px: 1.5, mx: 1, borderRadius: 5, bgcolor: `${selectedFilterButton === item.code ? bggreen : alt}`
                    }} key={item.code}>{item.text}</Button>
                ))}
            </Box>
            <Box pb={2} sx={{  overflowY: 'auto',}}>
                <Box display='flex' alignItems={'center'} gap={3} >
                    <Box display='flex' ml={1.5} my={1} color={green}>
                        <WArchive />

                    </Box>
                    <Typography fontWeight={400} fontSize={16}>Archived</Typography>
                </Box>
                <Box width='100%'>
                    <ChatList /> 
                </Box>
            </Box>
        </Box>
    )
}

export default ChatsOption