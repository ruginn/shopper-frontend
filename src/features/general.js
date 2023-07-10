import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: 'light'
}

export const generalSlice = createSlice({
    name: 'general', 
    initialState, 
    reducers: {
        changeMode: (state, info) => {
            if (state.mode == 'light'){
                state.mode = 'dark'
            } else{
                state.mode = 'light'
            }
                
        }
    }
})

export const {changeMode} = generalSlice.actions
export default generalSlice.reducer;



