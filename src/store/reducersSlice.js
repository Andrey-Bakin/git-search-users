/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: {},
    searchUserName: {},
    filter: true,
    pageNumber: 1,
    totalPagesFound: {},
    textInputSearch: {},
}
const reducersSlice = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        searchStateUpdate: (state, action) => {
            state.search = action.payload
        },
        saveSearchUser: (state, action) => {
            state.searchUserName = action.payload
        },
        filterUpdate: (state, action) => {
            state.filter = action.payload
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload
        },
        updateTotalPagesCount: (state, action) => {
            state.totalPagesFound = action.payload
        },
        updateTextInputSearch: (state, action) => {
            state.textInputSearch = action.payload
        },
    },
})

export const {
    searchStateUpdate,
    saveSearchUser,
    filterUpdate,
    setPageNumber,
    updateTotalPagesCount,
    updateTextInputSearch,
} = reducersSlice.actions
export default reducersSlice.reducer
