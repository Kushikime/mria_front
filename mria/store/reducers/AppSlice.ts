import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AppState {
    isLoading: boolean
}

const initialState: AppState = {
    isLoading: false
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleAppLoading(state, action: PayloadAction) {
            state.isLoading = !state.isLoading;
        }
    }
})

export default appSlice.reducer;