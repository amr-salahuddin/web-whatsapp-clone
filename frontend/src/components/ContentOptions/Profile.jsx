import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Icon, IconButton, InputBase, Paper, Typography, useTheme } from "@mui/material";
import { WAdd, WArchive, WAvatarAdd, WCamera, WMoreVert, WNewChat } from "../../svgs/WhatsAppIcons";
import SearchBar from "../../shared/SearchBar";
import { useState } from "react";
import ChatList from "./ChatsOption/ChatContactList";
import { useDispatch, useSelector } from "react-redux";
import StatusContact from "./Status/StatusContact";
import zIndex from "@mui/material/styles/zIndex";
import ProfileInput from "./Profile/ProfileInput";

function Profile() {




    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green
    const bggreen = theme.palette.background.green;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const avatar = user?.avatar

    const [name, setName] = useState(user?.name);
    const [about, setAbout] = useState(user?.about);


    function onNameChange(e) {
        setName(e.target.value);
    }
    function onAboutChange(e) {
        setAbout(e.target.value);
    }
    return (
        <Box bgcolor={alt   } pt={2} display='flex' flexDirection='column' height='100%' overflowY='auto' >
            <Box mx={3} mb={2} height='5%' display='flex' flexDirection='column' justifyContent='space-between' gap={3}>
                <Box display='flex' justifyContent={'space-between'} alignItems={'center'} >
                    <Typography fontWeight={500} variant='h3'>Profile</Typography>
                    <Box display={'flex'} alignItems={'center'}>

                    </Box>
                </Box>
            </Box>
            <Box p={1} display='flex' bgcolor={alt} height='40%' justifyContent='center' alignItems='center' >
                <Box position='relative'>
                    {/* Overlay text */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(84, 101, 111, 0.8)", // Grey background with opacity
                            color: "white", // Text color
                            textAlign: "center",
                            zIndex: 2,
                            borderRadius: '50%'
                        }}
                    >
                        <Box>
                        <WCamera/>
                        <Typography  variant="body1" >
                            ADD PROFILE <br/>PHOTO
                        </Typography>
                        </Box>
                    </Box>
                    <Avatar sx={{ zIndex: 1, width: '12rem', height: '12rem' }} />
                </Box>
            </Box>
            <Box height='15%'>

            <ProfileInput text='Your name' placeholder='John Doe' value={name} onChange={onNameChange} onSubmit={console.log('s')}/>
</Box>
            <Box px={3} pt={2}  height={'14%'} sx={{ overflowY: 'auto', }}>
                <Typography variant='body2' color={light} fontSize={14} fontWeight={100} >This is not your username or PIN. This name will be visible to your WhatsApp contacts.</Typography>

        
            </Box>
            <Box height='15%'>
           <ProfileInput text='About' placeholder='...' value={about} onChange={onAboutChange} onSubmit={console.log('s')}/>
           </Box>
        </Box>
    )
}

export default Profile