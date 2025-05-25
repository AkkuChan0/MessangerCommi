import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuth = createAsyncThunk('chat/fetchChatList', async () => {
    const response = await axios.get('./data/test-data.json');
    return response.data.authUser;
});

const authSlice = createSlice({
    name: 'chat',
    initialState: {
        authUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.authUser = action.payload?.authUser || action.payload;
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;