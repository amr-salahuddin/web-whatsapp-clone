import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    mode: "dark",
    user: {
        name: 'John Doe',
        avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
    },
    token: null,
    selectedSideButton: null,
    selectedChat: {
        id: 0,

        //info of user
        details: {
            name: 'John Doe',
            avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
            lastMessage: 'Hey, How are you?',
            time: 'Yesterday',
        },   chat: [
            {sender:'me', text: 'Hey, How are you?',time:'10:00'},
             {sender:'them', text: 'not bad',time:'10:01'},
           {sender:'me', text: "let's kill niggers",time:'10:01'},
          {sender:'them', text: 'ok fine',time:'10:02'},
        ]

      


    },
    chatList: [

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },
        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]

        },

        {
            id: 0,

            //info of user
            details: {
                name: 'John Doe',
                avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
                lastMessage: 'Hey, How are you?',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
            ]





        },
        {
            id: 1,

            //info of user
            details: {
                name: 'Xon Veber',
                avatar: 'https://distribution.faceit-cdn.net/images/9ca4e577-24b8-43b8-9b73-fc7c13f2ce6b.jpeg',
                lastMessage: 'lol whassup',
                time: 'Yesterday',
            },
            chat: [
                {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
              {sender:'me', text: 'Hey, How are you?',time:'10:00'},
                 {sender:'them', text: 'not bad',time:'10:01'},
               {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'ok fine',time:'10:02'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'me', text: "let's kill niggers",time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},
              {sender:'them', text: 'not bad',time:'10:01'},

            ]

        },




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
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setSelectedSideButton: (state, action) => {
            state.selectedSideButton = action.payload.index
        },
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload.chat
        }

    }
})

export const { setMode, setLogin, setLogout, setSelectedSideButton, setSelectedChat } = firstSlice.actions

export default firstSlice.reducer
