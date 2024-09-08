/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: {},
    searchUserName: {},
}
// createSlice - выполняет всю работу по созданию редюсера.
const reducersSlice = createSlice({
    // название слайса - произвольное
    name: 'reducers',
    initialState,
    // actions - указываются в св-ве reducers, ниже:
    reducers: {
        searchStateUpdate: (state, action) => {
            state.search = action.payload
        },
        saveSearchUser: (state, action) => {
            state.searchUserName = action.payload
        }
    },
})

export const { searchStateUpdate, saveSearchUser } = reducersSlice.actions
// экспорт редьюсера
export default reducersSlice.reducer