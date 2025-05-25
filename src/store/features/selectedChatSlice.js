import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatMessages = createAsyncThunk(
    'selectedChat/fetchChatMessages',
    async (chatId) => {
        if (chatId < 0) return [];
        try {
            const response = await axios.get(`/data/chat${chatId}.json`);
            return response.data || [];
        } catch (error) {
        }
    }
);

const selectedChatSlice = createSlice({
    name: 'selectedChat',
    initialState: {
        selectedChat: null,
        messages: null,
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
            state.messages = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatMessages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChatMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.messages = action.payload;
            })
            .addCase(fetchChatMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setSelectedChat } = selectedChatSlice.actions;
export default selectedChatSlice.reducer;