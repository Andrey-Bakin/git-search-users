import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import UserInfoModal from './components/Modal/UserInfoModal'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
        </Routes>
    )
}
export default AppRoutes
