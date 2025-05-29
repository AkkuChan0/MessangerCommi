import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './features/chatListSlice';
import selectedChatReducer from './features/selectedChatSlice';
import authUserReducer from './features/userInfoSlice';
import taskReducer from './features/taskSlice';
import aiIdeaReducer from './features/aiIdeaSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        selectedChat: selectedChatReducer,
        authUser: authUserReducer,
        tasks: taskReducer,
        aiIdea: aiIdeaReducer
    },
});