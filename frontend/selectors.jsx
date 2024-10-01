import { createSelector } from "reselect";

export const selectChatList = (state) => state.chatList;


export const selectChatById = (chatId) => createSelector(
    [selectChatList],
    (chatList) => chatList.find((chat) => chat._id === chatId)
)

export const selectMessageById = (chatId, messageId) =>
    createSelector([selectChatById(chatId)], (chat) =>
        chat ? chat.messages.find((message) => message._id === messageId) : null
    );
