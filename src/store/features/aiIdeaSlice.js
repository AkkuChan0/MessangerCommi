import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAi = createAsyncThunk('chat/fetchAi', async () => {
    const response = await axios.get('./data/ai_idea.json');
    return response.data;
});

const aiIdeaSlice = createSlice({
    name: 'aiIdea',
    initialState: {
        idea: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAi.fulfilled, (state, action) => {
                state.loading = false;
                state.idea = action.payload;
            })
            .addCase(fetchAi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default aiIdeaSlice.reducer;