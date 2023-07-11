import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: 'light', 
    search: '',
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
        }, 
        searchParas: (state, info) =>{
            state.search = info.payload
        }

    }
})

export const {changeMode, searchParas} = generalSlice.actions
export default generalSlice.reducer;



