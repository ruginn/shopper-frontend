import {createSlice} from '@reduxjs/toolkit'
import data from '../periodTable.json'

const initialState = {
    mode: 'light', 
    search: '',
    chemicals: data.elements,
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
            let filterElements = []
            if (info.payload.searchPara !== ''){
                filterElements = data.elements.filter((element) => (
                    element.name.toLowerCase().includes(`${info.payload.searchPara.toLowerCase()}`)
                    || element.symbol.toLowerCase().includes(`${info.payload.searchPara.toLowerCase()}`)
                    || element.number.toString().includes(`${info.payload.searchPara.toLowerCase()}`)
                    || element.atomic_mass.toString().includes(`${info.payload.searchPara.toLowerCase()}`)
                    || element.category.toLowerCase().includes(`${info.payload.searchPara.toLowerCase()}`)
                    || element.phase.toLowerCase().includes(`${info.payload.searchPara.toLowerCase()}`)
                    ))
                state.chemicals = filterElements
            } else {
                state.chemicals = initialState.chemicals
            }
        },
        alphabetize: (state) => {
            // let alpha = data.elements.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            state.chemicals.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        },
        reverseAlphabetize: (state) => {
            // let alpha = data.elements.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            state.chemicals.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        },
        resetChemicals: (state) => {
            state.chemicals = initialState.chemicals
        }


    }
})

export const {changeMode, searchParas, alphabetize, reverseAlphabetize, resetChemicals} = generalSlice.actions
export default generalSlice.reducer;



