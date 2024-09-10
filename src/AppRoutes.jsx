import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import NotFoundPage from './pages/NotFound/NotFound'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}
export default AppRoutes
