import { useTheme } from "@emotion/react"
import { Box, IconButton, InputBase, OutlinedInput, TextField } from "@mui/material"
import { WAttach, WCheck, WEmoji, WMicrophone, WSend } from "../../../svgs/WhatsAppIcons"
import { useState } from "react"
import { addMessageAPI } from "../../../utils/apiRequests"
import { useDispatch, useSelector } from "react-redux"
import { addMessageToChat, updateMessageStatus } from "../../../state/first"
import { v4 as uuidv4 } from 'uuid'; // Import UUID version 4 generator

function ChatBottom() {

    const theme = useTheme()
    const alt = theme.palette.background.alt

    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [value, setValue] = useState('');

    const user = useSelector((state) => state.user);
    const chat = useSelector((state) => state.selectedChat);
    const token = useSelector((state) => state.token);
    function onChangeHandler(e) {
        setValue(e.target.value);
        setIsSubmitting(e.target.value.length > 0);
    }


    async function onSubmitHandler(e) {
        e.preventDefault();

        if (value.length < 0)
            return;
        setIsSubmitting(false);
        setValue('');

        const message = {
            _id: uuidv4(),
            text: value,
            sender: user._id,
            chat: chat._id,
            receiver: chat.user1 === user._id ? chat.user2 : chat.user1,
            time: new Date().toISOString(),


        }
        dispatch(addMessageToChat({ message: message, chatId: chat._id }));

        const data = await addMessageAPI({ text: value, chatId: chat._id }, token)
        if (data.success) {
            console.log('hi', 'ssss')
            console.log('chatbot',data)

            dispatch(updateMessageStatus({ chatId: chat._id, messageId: message._id, status: data.data.message.status }))
        }


    }

    return (
        <Box height='100%' bgcolor={alt} display='flex' alignItems='center' justifyContent='space-between'>

            <Box ml={3} width='100%' display='flex' alignItems='center' gap={2} >
                <IconButton>
                    <WEmoji />
                </IconButton>
                <IconButton>
                    <WAttach />
                </IconButton>

                <Box display='flex' width='100%' component="form" justifyContent='space-between' pr={2} onSubmit={onSubmitHandler}>
                    <InputBase value={value} onChange={onChangeHandler} sx={{ p: 1, minWidth: '', width: '90%', borderRadius: '8px', bgcolor: 'white' }} placeholder="Type a message" />
                    {isSubmitting ? (<IconButton>
                        <WSend />
                    </IconButton>) : null}
                    {!isSubmitting ?
                        (<IconButton>
                            <WMicrophone />
                        </IconButton>) : null
                    }
                </Box>

            </Box>


        </Box>
    )
}

export default ChatBottom
