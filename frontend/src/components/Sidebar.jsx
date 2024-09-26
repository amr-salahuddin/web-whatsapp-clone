import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import {
    WChatOutlined,
    WCommunityFilled,
    WCommunityOutlined,
    WNewsLetterOutLined,
    WSettingsFilled,
    WStatusOutlined
} from '../svgs/WhatsAppIcons';
import { AttachEmail } from "@mui/icons-material";
import { WSettingsOutlined } from "../svgs/WhatsAppIcons";
import { WChatFilled } from "../svgs/WhatsAppIcons";
import { WStatusFilled } from "../svgs/WhatsAppIcons";
import { WNewsLetterFilled } from "../svgs/WhatsAppIcons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSideButton } from "../state/first";

const Sidebar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const selectedSideButton = useSelector((state) => state.selectedSideButton)
    const user = useSelector((state) => state.user)
    const alt = theme.palette.background.alt;
    const avatar = user?.avatar

    const selectedBgColor =(isSelected) => {
        return{
        backgroundColor: isSelected? 'rgba(0,0,0,0.1)' : ''
        }
    }
    let listButtonsTop = [

        {

            code: 0,
            outlinedIcon: <WChatOutlined />,
            filledIcon: <WChatFilled />
        },
        {
            code: 1,
            outlinedIcon: <WStatusOutlined />,
            filledIcon: <WStatusFilled />
        },
        {
            code: 2,

            outlinedIcon: <WNewsLetterOutLined />,
            filledIcon: <WNewsLetterFilled />
        },
        {
            code: 3,
            outlinedIcon: <WCommunityOutlined />,
            filledIcon: <WCommunityFilled />
        },
    ]
    let listButtonsBottom = [
        {
            code: 4,
            outlinedIcon: <WSettingsOutlined />,
            filledIcon: <WSettingsFilled />
        },
        {
            code: 5,
            outlinedIcon: <Avatar sx={{ width: 30, height: 30 }} src={avatar} />,
            filledIcon: <Avatar sx={{ width: 30, height: 30 }} src={avatar} />

        }
    ]
    function handleIconClick(index) {
        dispatch(setSelectedSideButton({ index }))

    }
    return (
        <Box py={1} display='flex' flexDirection='column' justifyContent={'space-between'} minHeight='100%' alignItems={'center'} backgroundColor={alt}   >


            <Box gap={1} display='flex' flexDirection='column' >
                {listButtonsTop.map((item) => (
                    <IconButton disableRipple onClick={() => { handleIconClick(item.code) }} key={item.code} sx={selectedBgColor(selectedSideButton === item.code)}>
                        {(selectedSideButton == item.code ? item.filledIcon : item.outlinedIcon)}
                    </IconButton>
                ))}
            </Box>
            <Box display='flex'  flexDirection='column' alignItems={'center'}>
                {listButtonsBottom.map((item, index) => (
                    <IconButton  disableRipple onClick={() => { handleIconClick(item.code) }} key={item.code} sx={
                        selectedBgColor(selectedSideButton === item.code)
                    }>
                        {selectedSideButton == item.code ? item.filledIcon : item.outlinedIcon}
                    </IconButton>
                ))}

            </Box>
        </Box>
    );
};

export default Sidebar;
