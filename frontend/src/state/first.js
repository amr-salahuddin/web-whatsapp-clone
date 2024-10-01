import { createSlice } from "@reduxjs/toolkit"
import ChatList from "../components/ContentOptions/ChatsOption/ChatContactList"



const initialState = {
    mode: "dark",
    user: {
        name: 'John Doe',
        avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
    },
    token: null,
    selectedSideButton: null,
    selectedChat: null,
    chatList: [

    ]
}

export const firstSlice = createSlice({
    name: "firstSlice",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload.mode
        },

        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },

        updateUser: (state, action) => {

            state.user = {
                ...state.user,
                ...action.payload.data
            }


        },
        setLogout: (state) => {

            state.user = null
            state.token = null
        },
        setSelectedSideButton: (state, action) => {
            state.selectedSideButton = action.payload.index
        },
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload.chat
        },
        addMessageToChat: (state, action) => {
            const chat = state.chatList.find((chat) => chat._id === action.payload.chatId)

            if (chat) {
                chat.messages.unshift(action.payload.message)
            }

            const selectedChatId = state.selectedChat?._id
            if (selectedChatId === action.payload.chatId) {
                state.selectedChat = chat;
            }
        },
        updateMessageStatus: (state, action) => {
            const { chatId, messageId, status } = action.payload;
        
            // Find the chat index
            const chat = state.chatList.find(chat => chat._id === chatId);
            if (!chat) return;
        
            // Find the message and update its status
            const message = chat.messages.find(message => message._id === messageId);
            if (!message) return;
        
            // Only update the status of the message
            message.status = status;
        
            // Check if the selected chat is the one being updated, and update it as well
            if (state.selectedChat?._id === chatId) {
                state.selectedChat = chat;
            }
        },
        seenChat: (state, action) => {
            const chat = state.chatList.find((chat) => chat._id === action.payload.chatId)
            //make all messages seen
            if (chat) {
                chat.messages.forEach((message) => {
                    message.status = 3
                })
            }

            const selectedChatId = state.selectedChat?._id
            if (selectedChatId === action.payload.chatId) {
                state.selectedChat = chat;
            }

            
        }
        
        ,
        setChatList: (state, action) => {
            state.chatList = action.payload.chatList
        },
    },
})

export const { setMode, setLogin, updateUser, setLogout, setSelectedSideButton, setSelectedChat, setChatList, addMessageToChat,seenChat, updateMessageStatus } = firstSlice.actions

export default firstSlice.reducer
