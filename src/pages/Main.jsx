import React, { useState } from 'react'
import * as S from './Main.styled'
import Sorting from '../components/RepoSorting/RepoSorting'
import Search from '../components/Search/Search'
import UserList from '../components/Users/UserList'
import Pagination from '../components/pagination/Pagination'
import { useSelector } from 'react-redux'
import { flagSelector } from '../store/toolkitSelectors'
import UserInfoModal from '../components/Modal/UserInfoModal'
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

function Main() {
    const [loading, setLoading] = useState(false)
    const openModalInfo = useSelector(flagSelector)
    return (
        <S.MainlBlock>
            <Search setLoading={setLoading}/>
            <Sorting />
            {openModalInfo && <UserInfoModal />}
            {loading ? <Loader/> : <UserList/>}
            <UserList />
            <Pagination />
            <Outlet />
        </S.MainlBlock>
    )
}
export default Main
