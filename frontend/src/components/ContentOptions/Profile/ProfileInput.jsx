import { Box, IconButton, InputBase, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import { WCamera, WCheck, WEmoji, WPen } from "../../../svgs/WhatsAppIcons";

function ProfileInput({ text, placeholder, value, onSubmit, onChange }) {



    const theme = useTheme();
    const light = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const green = theme.palette.primary.green


    const [contentEditable, setContentEditable] = useState(0);

    const [showEmojiPicker, setShowEmojiPicker] = useState(0);

    const IconButtonSX =
    {
        'box-sizing': 'border-box', border: '2px solid transparent'
        , borderRadius: 0, p: 0, '&:focus': { border: `2px solid ${green}` }
    }

    function onSubmitHandler(e) {
        onSubmit();
        console.log('hi')
        setShowEmojiPicker(0);
        setContentEditable(0);
    }

    return (<Box display='flex' flexDirection='column' gap={1} px={3} py={2} height='100%' bgcolor='white' sx={{ overflowy: 'none', }}>
        <Typography variant='body2' color={green} fontSize={14} fontWeight={100} >{text}</Typography>
        <Box pb={1} borderBottom={`${contentEditable?`2px solid ${green}`:''}`}   display='flex' justifyContent='space-between' gap={2} pr={1}>
            <InputBase readOnly={!contentEditable} placeholder={placeholder} sx={{ flex: 1 }} value={value} onChange={onChange} />
            {!contentEditable ?
                (<Box display='flex'><IconButton sx={{ ...IconButtonSX }} onClick={() => setContentEditable(1)}>
                    <WPen />
                </IconButton></Box>) : <></>}

            {contentEditable ?
                (<Box display='flex' justifyContent='' gap={1} m={0} >
                    <IconButton sx={{ ...IconButtonSX, '& svg': {width:'80%'} }} >
                        <WEmoji />
                    </IconButton>
                    <IconButton onClick={onSubmitHandler} sx={{ ...IconButtonSX, '& svg': {width:'95%'} }} >
                        <WCheck />
                    </IconButton>


                </Box>) : <></>}
        </Box>

    </Box >)
}

export default ProfileInput