import { MoreVert } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, TableContainer, Typography, useTheme } from "@mui/material";
import { WArchive, WMoreVert, WNewChat } from "../../svgs/WhatsAppIcons";
import SearchBar from "../../shared/SearchBar";
import { useState } from "react";
import ChatList from "./ChatsOption/ChatContactList";

function ChatsOption() {


    
    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green
    const bggreen = theme.palette.background.green;

 
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


            <ChatList/>
           
        </Box>
    )
}

export default ChatsOption