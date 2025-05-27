import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatList = createAsyncThunk('chat/fetchChatList', async () => {
    const response = await axios.get('/data/test-data.json');
    return response.data;
});

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChatList.fulfilled, (state, action) => {
                state.loading = false;
                console.log(state, action)
                state.chatList = action.payload;
                console.log('Updated chats:', state.chats);
            })
            .addCase(fetchChatList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.error('Chat error:', action.error.message);
            });
    },
});

export default chatSlice.reducer;