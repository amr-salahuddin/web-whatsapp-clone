import { Box, IconButton, InputBase, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import { WCamera, WCheck, WEmoji, WPen } from "../../../svgs/WhatsAppIcons";

function ProfileInput({ text, placeholder, value, onSubmit, onChange }) {



    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green


    const [contentEditable, setContentEditable] = useState(1);


    const IconButtonSX =
    {
        'box-sizing': 'border-box', border: '2px solid transparent'
        , borderRadius: 0, p: 0, '&:focus': { border: `2px solid ${green}` }
    }
    return (<Box display='flex' flexDirection='column' gap={1} px={3} pt={2} height={'100%'} bgcolor='white' sx={{ overflowY: 'auto', }}>
        <Typography variant='body2' color={green} fontSize={14} fontWeight={100} >{text}</Typography>
        <Box display='flex ' justifyContent='space-between' gap={2} pr={1}>
            <Box flex={1} outline='none' contentEditable={true} >{value}</Box>
            {!contentEditable &&
                (<IconButton >
                    <WPen />
                </IconButton>)}

            {contentEditable &&
                (<Box display='flex' justifyContent='' gap={2}  >
                    <IconButton sx={ {...IconButtonSX,'& svg': { width: '80%' }}} >
                        <WEmoji />
                    </IconButton>
                     <IconButton sx={ {...IconButtonSX,'& svg': { width: '95%' }}} >
                        <WCheck />
                    </IconButton>
                 

                </Box>)}
        </Box>

    </Box >)
}

export default ProfileInput