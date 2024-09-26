import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Icon, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { WAdd, WArchive, WAvatarAdd, WMoreVert, WNewChat } from "../../svgs/WhatsAppIcons";
import SearchBar from "../../shared/SearchBar";
import { useState } from "react";
import ChatList from "./ChatsOption/ChatContactList";
import { useDispatch, useSelector } from "react-redux";
import StatusContact from "./Status/StatusContact";

function Status() {


    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green
    const bggreen = theme.palette.background.green;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const avatar = user?.avatar
    return (
        <Box  pt={2} display='flex' flexDirection='column'  >
            <Box mx={3} mb={2} height='25%' display='flex' flexDirection='column' justifyContent='space-between' gap={3}>
                <Box display='flex' justifyContent={'space-between'} alignItems={'center'} >
                    <Typography fontWeight={500} variant='h3'>Status</Typography>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconButton>
                            <WAdd />
                        </IconButton>
                        <IconButton  >
                            <WMoreVert />
                        </IconButton>
                    </Box>
                </Box>
                <Box display='flex' gap={2}>
                    <Box position='relative'>
                        <Avatar src={avatar} />
                        <Box p={0} m={0} component="span" width={16} height={16} display='flex' justifyContent='center' alignItems='center' color='white' 
                            borderRadius='50%' border='2px solid white' position='absolute' bottom={0} right={0} bgcolor={green}>
                            <WAvatarAdd />
                        </Box>
                    </Box>
                    <Box>
                        <Typography fontWeight={300} fontSize={16} >My status</Typography>
                        <Typography variant="subtitle2" >Click to add status update</Typography>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor={alt} color={alt}>x</Box>
            <Box px={3} pt={3} sx={{ flex: 1, overflowY: 'auto', }}>
                <Typography variant='body1' fontSize={18} fontWeight={100} color={green}>VIEWED</Typography>

                <Box>
                    <StatusContact/>
                </Box>
            </Box>
        </Box>
    )
}

export default Status