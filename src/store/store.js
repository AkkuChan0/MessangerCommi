import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './features/chatListSlice';
import selectedChatReducer from './features/selectedChatSlice';
import authUserReducer from './features/userInfoSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        selectedChat: selectedChatReducer,
        authUser: authUserReducer
    },
});